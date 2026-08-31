.PHONY: install start test format lint

install:
	pip install -r backend/requirements.txt

start:
	cd backend && uvicorn main:app --reload --host 0.0.0.0 --port 8000

test:
	cd backend && pytest

format:
	black backend/

lint:
	flake8 backend/
