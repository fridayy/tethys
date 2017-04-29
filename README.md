# Tethys
[![Build Status](https://travis-ci.org/fridayy/tethys.svg?branch=master)](https://travis-ci.org/fridayy/tethys) ![License Apache2](https://go-shields.herokuapp.com/license-Apache%202.0-red.png)

Tethys is a simple proof of concept for a bachelor thesis at the [FH Joanneum Kapfenberg University of Applied Sciences](http://www.fh-joanneum.at).
The main goal of this application is to provide a prototype todo application in order to empirically compare the two popular JavaScript frontend technologies
[ReactJS](https://facebook.github.io/react/) and [Angular2](https://angular.io/) by testing their capabilities.


## Requirements
* [gradle](https://github.com/gradle/gradle)
* [NPM](https://www.npmjs.com/) 3+
* For working metrics [phantomas](https://github.com/macbre/phantomas) must be installed globally.

## Download and run
Download the latest release at [Releases](https://github.com/fridayy/tethys/releases)
Run all jars with ```java -jar ```.

## Run and build Tethys yourself

Tethys can be run with a native [MongoDB](https://www.mongodb.com/) instance (set in application.properties)
or use the in-memory Fongo.

To run Tethys the following steps must be followed:

#### Build
You can build Tethys by issuing the following command in the root directory of the project:

```sh
./gradlew build
```

#### Run

After building you can run ```./run.sh``` on Linux / Unix. On Windows start the built jars with the following commands:

Native Mongo:
```sh
java -jar /tethys/tethys-backend/build/libs/tethys-backend-0.1-SNAPSHOT.jar 
```

In-memory Mongo:
```sh
java -jar /tethys/tethys-backend/build/libs/tethys-backend-0.1-SNAPSHOT.jar --spring.profiles.active=dev 
```


Angular 2:
```sh
java -jar /tethys/tethys-ui-angular2/build/libs/tethys-ui-angular2-0.1-SNAPSHOT.jar
```

ReactJS:
```sh
java -jar /tethys/tethys-ui-angular2/build/libs/tethys-ui-react-0.1-SNAPSHOT.jar
```