#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into build output directory
cd dist

# initialize git and deploy build files
git init
git config user.name "Romanna Semenyshyn"
git config user.email "romasemenyshyn@gmail.com"
git add -A
git commit -m 'deploy'
git push -f git@github.com:RomSem/mobapp.git master:gh-pages

# remove git folder
rm -rf .git

# go back
cd -
