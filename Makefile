.PHONY: build

NAME=parse-server-demo
TAG=beta
# REGISTRY=
# NAMESPACE=

build:
        echo building ${NAME}:${TAG}
        docker build -t ${NAME}:${TAG} .
#         docker build -t ${REGISTRY}/${NAMESPACE}/${NAME}:${TAG} .
# docker run -d -p 1337:1337 test-build:latest