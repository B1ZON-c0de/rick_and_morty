package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
)

var (
	ErrNotFoundId = errors.New("такого идеинтификатора не существует")
)

func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next(w, r)
	}
}

func charactersHandler(w http.ResponseWriter, r *http.Request) {
	characters, err := ParseJSONFile("characters.json")
	if err != nil {
		respondWithError(w, err)
		return
	}
	respondWithJSON(w, characters)
}

func characterItemHandler(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	characters, err := ParseJSONFile("characters.json")
	if err != nil {
		respondWithError(w, err)
		return
	}

	for _, character := range characters {
		if fmt.Sprintf("%v", character["id"]) == id {
			respondWithOneJSON(w, character)
			return
		}
	}

	respondWithError(w, ErrNotFoundId)
}

func episodeItemHandler(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	episodes, err := ParseJSONFile("episode.json")
	if err != nil {
		respondWithError(w, err)
		return
	}

	for _, episode := range episodes {
		if fmt.Sprintf("%v", episode["id"]) == id {
			respondWithOneJSON(w, episode)
			return
		}
	}

	respondWithError(w, ErrNotFoundId)
}

func episodeHandler(w http.ResponseWriter, r *http.Request) {
	episodes, err := ParseJSONFile("episode.json")
	if err != nil {
		respondWithError(w, err)
		return
	}

	respondWithJSON(w, episodes)
}

func locationItemHandler(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	locations, err := ParseJSONFile("location.json")
	if err != nil {
		respondWithError(w, err)
		return
	}

	for _, location := range locations {
		if fmt.Sprintf("%v", location["id"]) == id {
			respondWithOneJSON(w, location)
			return
		}
	}

	respondWithError(w, ErrNotFoundId)

}

func baseItemHandler(fileJSON string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		items, err := ParseJSONFile(fileJSON)
		if err != nil {
			respondWithError(w, err)
			return
		}

		for _, item := range items {
			if fmt.Sprintf("%v", item["id"]) == id {
				respondWithOneJSON(w, item)
				return
			}
		}

		respondWithError(w, ErrNotFoundId)

	}
}

func locationsHandler(w http.ResponseWriter, r *http.Request) {
	locations, err := ParseJSONFile("location.json")
	if err != nil {
		respondWithError(w, err)
		return
	}

	respondWithJSON(w, locations)
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/characters", corsMiddleware(charactersHandler))
	mux.HandleFunc("/api/characters/{id}", corsMiddleware(baseItemHandler("characters.json")))
	mux.HandleFunc("/api/episodes", corsMiddleware(episodeHandler))
	mux.HandleFunc("/api/episodes/{id}", corsMiddleware(baseItemHandler("episode.json")))
	mux.HandleFunc("/api/locations", corsMiddleware(locationsHandler))
	mux.HandleFunc("/api/locations/{id}", corsMiddleware(baseItemHandler("location.json")))

	fmt.Println("сервер запущен по пути http://localhost:8080")

	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		fmt.Printf("Ошибка запуска сервера: %v", err)
	}
}

func respondWithError(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusNotFound)
	if err := json.NewEncoder(w).Encode(map[string]string{"error": err.Error()}); err != nil {
		fmt.Errorf("Ошибка: %w", err)
	}
}

func respondWithOneJSON(w http.ResponseWriter, itemJSON map[string]any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(map[string]map[string]any{"data": itemJSON}); err != nil {
		fmt.Errorf("Ошибка: %w", err)
	}
}

func respondWithJSON(w http.ResponseWriter, dataJSON []map[string]any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(map[string][]map[string]any{"data": dataJSON}); err != nil {
		fmt.Errorf("Ошибка: %w", err)
	}
}
