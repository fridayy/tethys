#!/usr/bin/env bash

# Colors!
blue=$(tput setaf 4)
std=$(tput sgr0)

function run {
    for file in $1
    do
        if [ ${file: -4} == ".jar" ];
        then
            java -jar $file
        fi
    done
}

printf "${blue} >> ${std} Running ${blue} tethys ${std} backend..\n"
(run tethys-backend/build/libs/*) &
(run tethys-ui-angular2/build/libs/*) &
(run tethys-ui-react/build/libs/*)