package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func charactersHandler(w http.ResponseWriter, r *http.Request) {
	characters, err := ParseJSONFile("characters.json")
	if err != nil {
		respondWithError(w, err)
		return
	}
	respondWithJSON(w, characters)
}

func episodeHandler(w http.ResponseWriter, r *http.Request) {
	episodes, err := ParseJSONFile("episode.json")
	if err != nil {
		respondWithError(w, err)
		return
	}

	respondWithJSON(w, episodes)
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
	http.HandleFunc("/api/characters", charactersHandler)
	http.HandleFunc("/api/episodes", episodeHandler)
	http.HandleFunc("/api/locations", locationsHandler)
	fmt.Println("сервер запущен по пути http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Printf("Ошибка запуска сервера: %v", err)
	}
}

func respondWithError(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusInternalServerError)
	if err := json.NewEncoder(w).Encode(map[string]string{"error": err.Error()}); err != nil {
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
