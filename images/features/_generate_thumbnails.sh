#!/bin/sh

for video in */*_640.mp4 ; do 
    ffmpeg -i "$video" -vframes 1 -f image2 -y ${video/%.mp4/.jpg}
done