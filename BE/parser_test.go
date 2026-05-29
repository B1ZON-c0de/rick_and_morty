package main

import (
	"os"
	"testing"
)

func TestParser(t *testing.T) {
	tempJSONFile, clearTempJSONFile := createTempJsonFile(t)
	defer clearTempJSONFile()

	got, err := ParseJSONFile(tempJSONFile.Name())

	if err != nil {
		t.Errorf("Не ожидаемая ошибка %v", err)
	}

	want := 2

	if len(got) != want {
		t.Errorf("Ожидали %v, Получили %v", want, got[0]["id"])
	}
}

func createTempJsonFile(t *testing.T) (*os.File, func()) {
	t.Helper()
	tempFile, _ := os.CreateTemp("", "test.json")

	dataJSON := `[
	{"id": 1,"name":"roman"},
	{"id": 2, "name":"ivan"}
	]
	`
	tempFile.Write([]byte(dataJSON))

	clearFile := func() {
		tempFile.Close()
		os.Remove(tempFile.Name())
	}

	return tempFile, clearFile
}

