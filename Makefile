start:
	docker-compose kill; \
	docker-compose rm -f; \
	docker-compose up;

login:
	docker exec -it ilariopierbattistagithubio_node_1 sh

image: image/build.target image/push.target

image/build.target:
	docker-compose build

image/push.target:
	docker-compose push