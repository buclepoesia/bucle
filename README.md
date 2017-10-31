# bucle-web
Bucle is a personal poetry project.

# Images
## Resize
```
convert -define jpeg:size=1024x1024 [image path] -thumbnail 1024x1024^ -gravity center -extent 1024x1024 [image path]
```
```
convert [image path] -resize 960 mobile-[image path]
```
## Optimization
```
jpegoptim [image path]
```
