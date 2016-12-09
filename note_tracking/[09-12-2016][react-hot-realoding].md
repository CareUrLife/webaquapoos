###Ngày 09/12/2016###

####Vấn đề####
1. Hot Reloading React không hoạt động theo mong muốn.
2. Kali khá laggy, gnome-shell rất lag.

####Giải quyết####

1. Ban đầu cài đặt react-hot-loader bản 3.0.0 beta 6 tuy nhiên không thành công. Ngay sau đó rút về bản 1.3 bản stable thì thành công. 
Dưới đây là một số chỉnh sửa.
  * Thêm js loader và thứ tự loader 
  ```javascript
  test: /\.js$/,
  loaders: ['react-hot', 'babel-loader'],
  exclude: /node_modules/
  ```
   * Thêm entry point dành riêng cho hrm
   ```javascript
   entry: [
        'webpack-hot-middleware/client',
        './Client/index-client.js'
   ],
   ```
   * Thêm module.hot.accept để hrm chấp nhận Redux container. Xem link sau <https://webpack.github.io/docs/hot-module-replacement-with-webpack.html>
   ```javascript
   if (module.hot) {
        // Whenever a new version of App.js is available
        module.hot.accept('./Redux/Components/appRoutes.js', function () {
        // Require the new version and render it instead
            var NextApp = require('./Redux/Components/appRoutes.js');
            ReactDOM.render(<NextApp />, document.getElementById('root'));
        })
    }
   ```
   * Quan trọng nhất là thay nodemon bằng babel-node vì nodemon sẽ xóa hết cache mà hrm tạo ra mỗi khi reload, xem link sau để
   hiểu thêm : <https://github.com/glenjamin/webpack-hot-middleware/issues/21>
   <img src="http://i.imgur.com/8DxC4Nm.png"></img>
   * path và publicPath dành cho hrm chỉ là biểu tượng nhằm react-hot-reloading nhận ra đối tượng cần phục vụ, không nhất thiết
   phải là một đường dẫn đến một folder thực trên harddisk
   ```javascript
   output: {
        path: path.join(__dirname, 'Client/Assets/Dist/'),
        filename: 'bundle.js',
        publicPath: '/Dist/'
    }
   ```
   
2. Đó là do guake terminal gây laggy cho gnome-shell, đã chuyển sang dùng konsole mà không còn lag. <3

3. Cuối cùng HRM đã hoạt động, và Kali hết lag, very good day.
   <img src="http://i.imgur.com/yfzNjg1.png"></img>
  
 ###Reference###
 [1] : <https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.b6x7mcjj7>
