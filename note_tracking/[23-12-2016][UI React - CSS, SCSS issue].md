###Ngày 23/12/2016###
####Vấn đề####

1. Cài đặt autoprefixer
2. Nghĩ về UI trong React
3. Cài đặt postcss-loader, và các ghi chú về style-loader, css-loader. 
4. webpack : ```devtool: 'source-map'``` 
####Trả lời####

1. Autoprefix là một plugin của postcss, postcss có nhiệm vụ xử lý các css trước khi nó được sử
dụng, Autoprefix dùng để thêm thắt, hoặc rút gọn các mã css nhằm tăng stable của mã css.(ví du như 
thêm các prefix để một thuộc tính có thể sử dụng trên nhiều trình duyệt khác nhau).
2. Mất thời gian nghịch ngợm với các thư viện UI là điều không nên làm, thứ hai các vấn đề về responsive nên cố gắng tự giải quyết. Có thể sử dụng react-responsive để truy vấn các đặc tính của màn hình thiết bị. Ngoài ra nên module hóa các UI element trong react, nhờ vậy sẽ dễ quản lý code và chỉnh sửa hơn. Thêm nữa nên cùng một lúc test giao diện trên Mobile, Tablet, Computer.
3. Postcss-loader là plugin của webpack để xử lý các cú pháp dành cho postcss, style, sass, css dùng cho webpack nhằm xử lý css, scss. Extract Text Plugin là một plugin của Webpack nhằm tối ưu hóa file buldle css.    

>When you run webpack now, you can find the complied styles in the bundle as part of styles tag but we don’t need it. To extract the styles from the bundle we need a plugin. So, lets install and configure extract text plugin.

4. Having devtool option as `source-map` generates the source map files which helps to debug on development.

####Reference###

[1] : https://medium.com/@srinisoundar/setting-up-environment-for-react-sass-es2015-babel-with-webpack-2f77445129#.qbglsc9s4
