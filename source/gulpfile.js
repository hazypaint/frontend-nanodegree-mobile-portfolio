var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    inlineCss = require('gulp-inline-css');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');
 
//minifying JS for index.html
gulp.task('scripts', function(){
    gulp.src('js/*.js')
            .pipe(uglify())
    .pipe(rename('perfmatters.js'))
            .pipe(gulp.dest('build/js/'));
});    
 
//inlining CSS for index.html
gulp.task('mincss', function() {
    gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});
 
//minifying pictures for index.html   
gulp.task('minipics1', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/img/'));
});

//minify html for index.html
gulp.task('html', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/minihtml/'))
});

// minifying JS for pizza.html
gulp.task('scripts2', function(){
    gulp.src('views/js/*.js')
            .pipe(uglify())
    .pipe(rename('main.js'))
            .pipe(gulp.dest('views/build/js/'));
});    

//minifying pictures for pizza.html 
gulp.task('minipics2', function () {
    return gulp.src('views/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('views/build/images/'));
});

// //minify html for pizza.html
gulp.task('html2', function() {
  return gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('views/build/minihtml/'))
});

gulp.task('watch', function(){
    gulp.watch('/*.html', ['mincss']);
    gulp.watch('views/*.html', ['mincss2']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('views/js/*.js', ['scripts2']);
    gulp.watch('img/*', ['minipics1']);
    gulp.watch('/*.html', ['html']);
    gulp.watch('views/images/*', ['minipics2']);
});

gulp.task('default', ['scripts', 'scripts2', 'html', 'html2', 'mincss', 'minipics1', 'minipics2']);