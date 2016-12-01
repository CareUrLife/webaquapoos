###Ngày 01/12/2016###

Tập trung cải thiện infrastructure dành cho công việc developing bao gồm :
 
1. Cài đặt plugin hot-loading dành cho webpack
    * Thêm plugin trong webpack.config.dev.js 
            
 ```javascript
 new webpack.HotModuleReplacementPlugin(),
 new webpack.optimize.OccurenceOrderPlugin(),
 new webpack.NoErrorsPlugin(),
 new webpack.DefinePlugin({
   'process.env.NODE_ENV' : JSON.stringify('development')
 })
```
    * Cài đặt thêm hai package webpack-dev-middleware và webpack-hot-middleware để đồng bộ cài đặt hot-loading 
      kết quả là thêm file webpack.dev-helper.js chứa một middleware dành cho express :
            
 ```javascript
 var webpack = require('webpack'),
 webpackDevMiddleware = require('webpack-dev-middleware'),
 webpackHotMiddleware = require('webpack-hot-middleware'),
 webpackconfig = require('./webpack.config.dev.js'),
 webpackcompiler = webpack(webpackconfig);

 function useWebpackMiddleware(app) {
 app.use(webpackDevMiddleware(webpackcompiler, {
    publicPath : webpackconfig.output.publicPath,
      sats: {
        colors: true,
        chunks: false,
        'error-only': true // this reduces the amount of stuff You see
      }
    }));
 app.use(webpackHotMiddleware(webpackcompiler, {
    log: console.log
 }));

 return app;
 ```
    * Thêm react-hmre-preset cho babel bằng cách thêm package babel-preset-react-hmre
    * Thêm loader react-hot bằng cách cài thêm package react-hot-loader và cấu hình lại loaders trong webpack.config.dev.js
    * Tham khảo : <a href="https://github.com/gaearon/react-hot-boilerplate">react-hot-boilerplate</a> và <a href="https://github.com/christianalfoni/webpack-express-boilerplate">webpack-express-boilerplate</a>

2. Tôi ưu hóa webpack compress size bằng cách thêm các plugin webpack thông qua cấu hình webpack.config.prod.js

