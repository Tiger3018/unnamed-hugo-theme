#! /usr/bin/env bash

sitefile="exampleSite"
themename="plain"

mkdir -p workplace/themes/$themename
cp -R -f $sitefile/* workplace
for file in `ls`; do
  if [ $file == $sitefile ] || [ $file == workplace ]; then
    continue;
  fi;
  cp -R -f $file workplace/themes/$themename
done;

cd workplace
hugo --debug -t $themename