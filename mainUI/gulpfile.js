/*
单页应用js构建任务
改动根目录下的js，则编译被改动的js
改动非根目录下js,vue，都只编译根目录下的app.js
 */
const gulp = require('gulp')
const gutil = require('gulp-util')
const watch = require('gulp-watch')
const webpack = require('webpack')
const del = require('del')
const runSequence = require('run-sequence')
const browserSync = require('browser-sync').create()
const bsReload = browserSync.reload
const useref = require('gulp-useref')
const fs = require('fs')
const path = require('path')
const replace = require('gulp-replace')

const webpackConfig = require('./webpack.config.js')

const srcFiles = {
  lib: './source/lib/**/*',
  assets: './source/assets/**/*',
  htmlInRoot: './source/*.{html,ico}'
}

const dist = './src/main/resources/static/'
const classDist = './target/classes/static/'

gulp.task('copyHtml', function () {
  return gulp.src([srcFiles.htmlInRoot], { base: './source' }).pipe(gulp.dest(dist))
})
gulp.task('buildHtml', function () {
  return gulp.src([srcFiles.htmlInRoot], { base: './source' }).pipe(useref()).pipe(gulp.dest(dist))
})
gulp.task('copyAssets', function () {
  return gulp.src([srcFiles.lib, srcFiles.assets], { base: './source' }).pipe(gulp.dest(dist))
})

// 复制js到其他的目录下去
gulp.task('copyJsToOtherApp', function () {
  // const data = fs.readFileSync('./source/router/index.js', 'utf-8')
  // let appContent = fs.readFileSync(dist + 'app.js', 'utf-8')
  // let files = {}
  // data.replace(/resolve\(require\('(\.[^']+\.vue)'\)\), '(([^']+)-[^']+)'\)/g, (a, b, c, d) => {
  //   files[c] = d
  // })
  // let result = []
  // for (let p in files) {
  //   let buildedJs = path.join(dist, p + '.js')
  //   if (fs.existsSync(buildedJs)) {
  //     let classPath = '../' + files[p] + '/target/classes/static'
  //     let javaPath = '../' + files[p] + '/src/main/resources/static'
  //     gulp.src([buildedJs]).pipe(gulp.dest(classPath)).pipe(gulp.dest(javaPath))
  //     appContent = appContent.replace('"' + p + '"', '"' + files[p] + '/' + p + '"')
  //     result.push('复制文件 ' + buildedJs + ' 到工程 ' + files[p])
  //   }
  // }
  // if (result.length) {
  //   fs.writeFileSync(classDist + 'app.js', appContent)
  //   fs.writeFileSync(dist + 'app.js', appContent)
  // }
  // console.log(result.join('\n'))
  // return true
})

// 在dev模式，监听js、根目录、assets目录下文件的更改，重新载入浏览器中的页面
gulp.task('dev', function () {
  runSequence(
    'copyAssets',
    'copyHtml',
    function () {
      browserSync.init(dist, {
        startPath: '/', // 服务器运行时打开的页面
        server: {
          baseDir: [dist]
        },
        reloadDebounce: 1000, // 重载事件后1秒后才允许下次重载
        watchOptions: {
          ignoreInitial: true,
          ignored: ['node_modules', 'WEB-INF']
        }
      })

      webpackConfig.watch = true
      webpackConfig.devtool = 'source-map'
      webpackConfig.plugins = [new webpack.DefinePlugin({
        NODE_ENV: '"dev"'
      })]
      webpack(webpackConfig).watch(200, function (err, stats) {
        if (err) {
          throw new gutil.PluginError('webpack', err)
        }
        gutil.log('webpack', stats.toString({
          colors: true,
          chunks: false,
          hash: false,
          version: false
        }))
        runSequence('copyJsToOtherApp')
        bsReload()
      })

      watch([srcFiles.lib, srcFiles.assets, srcFiles.htmlInRoot, '!**/*.tmp'], evt => {
        var path = evt.path
        gulp
          .src(path, { base: './source' })
          .pipe(gulp.dest(dist))
          .pipe(bsReload)
      })
    }
  )
})
// 在build模式，仅打包，不监听
gulp.task('build', function () {
  runSequence(
    'clean',
    'copyAssets',
    'buildHtml',
    function () {
      webpackConfig.watch = false
      webpackConfig.devtool = undefined
      webpackConfig.plugins = [new webpack.DefinePlugin({
        NODE_ENV: 'production'
      })]
      webpack(webpackConfig, function (err, stats) {
        if (err) {
          throw new gutil.PluginError('webpack', err)
        }
        gutil.log(
                  'webpack',
                  stats.toString({
                    colors: true,
                    chunks: false,
                    hash: false,
                    version: false
                  })
              )
      })
      runSequence('copyJsToOtherApp')
    }
  )
})
gulp.task('clean', function () {
  if (process.env.NODE_ENV === 'dev') {
    return true
  }
  // 删除dist目录下的某些被编译出的文件
  return del(['./dist/**/*', '!./dist/node_modules/*', '!./dist/WEB-INF/*'])
})
