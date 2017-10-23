const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin")

var config = {
  entry : {
    app : './source/app.js',
    login : './source/login.js'
  },
  output : {
    path : path.join(__dirname, 'src/main/resources/static'),
    filename : '[name].js',
    chunkFilename : '[name].js'
  },
  watch : false,
  cache : true,
  externals : {
    // 库已经在页面中引入，使用全局变量代替对库的引用，库内容不用再打包到app.js中
    vue : 'Vue',
    axios : 'axios',
    'axios-mock-adapter' : 'AxiosMockAdapter',
    'vue-router' : 'VueRouter',
    'element-ui' : 'ELEMENT'
  },
  module : {
    rules : [{
        test : /\.vue$/,
        loader : 'vue-loader'
      }, {
        test : /\.jsx?$/,
        exclude : /node_modules|lib/,
        loader : 'babel-loader',
        options : {
          presets : [
            [
              "env", {
                "targets": {
                  "ie": 11
                },
                "useBuiltIns" : true
              }
            ]
          ]
        }

      }, {
        test : /\.json$/,
        loader : 'json-loader'
      }, {
        test : /\.css$/,
        loader : 'style-loader!css-loader'
      }
    ]
  },
  plugins : [
  ]
}
if (process.env.NODE_ENV == 'production') {
  config.plugins.push(new BabiliPlugin()) // UglifyJsPlugin不支持ES6，换用BabiliPlugin，感觉压缩速度比较慢
}
module.exports = config