# Tethys
[![Build Status](https://travis-ci.org/fridayy/tethys.svg?branch=master)](https://travis-ci.org/fridayy/tethys) ![License Apache2](https://go-shields.herokuapp.com/license-MIT-blue.png)

Tethys is a simple proof of concept for a bachelor thesis at the [FH Joanneum Kapfenberg University of Applied Sciences](http://www.fh-joanneum.at).
The main goal of this application is to provide a prototype todo application in order to empirically compare the two popular JavaScript frontend technologies
[ReactJS](https://facebook.github.io/react/) and [Angular2](https://angular.io/) by testing their capabilities.

Tethys is currently work in progress and everything is subject to change!

## Running Tethys

In order to run Tethys at its current you may use a native [MongoDB](https://www.mongodb.com/) instance (set in application.properties)
or use the in-memory Fongo.

#### Build
Tethys can be build with or without docker.

###### Without Docker
```sh
./gradlew build
```

###### With Docker
```sh
./gradlew buildDocker
```

#### Run with Docker
Make sure you have [docker-compose](https://docs.docker.com/compose/) installed to simplify the process.
If you use docker-compose mongodb will be pulled and started as well and there is no need to run a native mongo instance 
or use the in-memory version.

Run 
```sh
docker-compose up
```
in the main directory.

Access points:
* backend: *http://localhost:8000* 
* angular: *http://localhost:8001* 
* react: *http://localhost:8002*

#### Run without Docker
Native Mongo:
```sh
java -jar /tethys/tethys-backend/build/libs/tethys-backend-0.1-SNAPSHOT.jar 
```

In-memory:
```sh
java -jar /tethys/tethys-backend/build/libs/tethys-backend-0.1-SNAPSHOT.jar --spring.profiles.active=dev 
```

### Front-End
Angular 2:
```sh
java -jar /tethys/tethys-ui-angular2/build/libs/tethys-ui-angular2-0.1-SNAPSHOT.jar
```

ReactJS:
```sh
java -jar /tethys/tethys-ui-angular2/build/libs/tethys-ui-react-0.1-SNAPSHOT.jar
```