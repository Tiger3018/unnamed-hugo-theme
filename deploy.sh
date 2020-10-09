#! /usr/bin/env bash
# This file is used to review the theme locally.
# PLEASE CHANGE .github\workflows\a.yml IF YOU WANT TO CHANGE VARIBLES BELOW
sitefile="eSite-custom"
themename="plain"

rm -rf workplace
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