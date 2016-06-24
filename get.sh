#!/bin/bash
wget \
     --page-requisites \
     --html-extension \
     --convert-links \
     --mirror \
     -H \
     -P ./scraped \
$1

#http://localhost:8080/ipfs/Qmd5TjHUeGtXFWY8DJPMXUeEXugcVhQHjXNrncmnrEpqWt
#wget \
#     --recursive \
#     --no-clobber \
#     --page-requisites \
#     --html-extension \
#     --convert-links \
#     --mirror \
#     -H \
#     -P ./scraped \
#$1