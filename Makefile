.PHONY: start

start: 
	@trap 'kill 0' EXIT; \
	cd ./BE && go run . & \
	cd ./FE && pnpm dev
	@echo "✅ Запуск полного приложения"
