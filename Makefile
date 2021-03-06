build:
	docker-compose up -d --build --remove-orphans

lint-fix:
	docker-compose run --rm web npm run lint-fix

test:
	docker-compose run --rm web npm run test

test-ci:
	docker-compose run --rm web npm run lint-ci
	docker-compose run --rm web npm run test-ci