var gulp = require("gulp");
var load = require("gulp-load-plugins")();
var browser = require('browser-sync').create();

gulp.task('sass',function(done){
	gulp.src('./jingdong/css/*.scss')
	.pipe(load.sass())
	.pipe(gulp.dest('./dist/css/'))
	done()
})

gulp.task('css',function(done){
	gulp.src('./jingdong/css/*.css')
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/css/'))
	done()
})

gulp.task('html',function(done){
	gulp.src('./jingdong/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest('./dist/'))
	done()
})

gulp.task('js',function(done){
	gulp.src('./jingdong/js/*.js')
	// .pipe(load.babel({
	// 	'presets':['@babel/env']
	// }))
	// .pipe(load.concat('all.min.js'))
	// .pipe(load.uglify())
	.pipe(gulp.dest('./dist/js/'))
	done()
})

gulp.task('image',function(done){
	gulp.src('./jingdong/img/*.*')
	// .pipe(load.imagemin({
	// 	progressive:true
	// }))
	.pipe(gulp.dest('./dist/img/'))
	done()
})

gulp.task('server',gulp.series('image',gulp.parallel('sass','html','js','css'),function(done){
	browser.init({
		server:'./dist',
		port:80
	})
	
	gulp.watch('./jingdong/',gulp.series(gulp.parallel('sass','html','js','css'),function(done){
		browser.reload()
		done()
	}))
	done()
}))