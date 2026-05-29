package main

import (
	"encoding/json"
	"os"
)

func ParseJSONFile(filename string) ([]map[string]any, error) {
	var dataJSON []map[string]any

	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}

	if err := json.NewDecoder(file).Decode(&dataJSON); err != nil {
		return nil, err
	}

	return dataJSON, nil
}

