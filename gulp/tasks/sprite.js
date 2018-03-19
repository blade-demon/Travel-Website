var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename'),
  del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'svg/sprite.svg',
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// Create sprite for all images.
gulp.task('createSprite', ['beginClean'], function () {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

// Copy sprite images to images folder.
gulp.task('copySpriteGraphic', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

// Copy and rename css file (sprite.css file) into css modules folder
gulp.task('copySprite', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

// Clean /app/temp/sprite folder
gulp.task('endClean', ["copySprite", "copySpriteGraphic"] ,function() {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySprite', 'endClean']);