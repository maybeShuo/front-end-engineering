# front-end-engineering

## 1. git new project
    repositories

## 2. git branch
    git checkout -b dev

## 3. npm init
    npm install --save express
    index.js (process.env.PORT : 部署端口)

## 4. gulpfile.js
    --save-dev
    "gulp"
    "run-sequence"
    "gulp-rimraf"
    gulp.task "default" "clean" "build"

## 5. package.json
    add cmd build, start
    build : gulp
    start : "node ./index.js"

## 6. new folder

### 6.1. src
- app/....js (custome)
- index.html

### 6.2. public (new in gulp.task)
- assets        
- assets/manifest.json
- assets/vendor.js
- assets/app/...js
- gitignore public

## 7. gulp.task
- gulp.task "default" "clean" "build"
- jquery jquery.transit
- npm install "gulp-babel" "gulp-uglify" "gulp-concat"    
- gulp.task "build-js" "build-vender"

## 8. load res from cache
- git new branch feature-xxx
- index.js : maxAge
- npm install "gulp-hash" "gulp-rev-replace"
- manifest.json
- gulp.task("build-html") gulp-rev-replace
