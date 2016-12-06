###Ngày 05/12/2016###

####Vấn đề####

1. Cứ tưởng rằng webpack react hot reloading sẽ tạo ra một file bundle.js và cập chạy bundle liên tục khi nhận ra có 
 hoạt động thay đổi.

2. Vấn đề về path và publicPath trong webpack config.

3. Không thể thực hiện hot-reloading (HRM) đối với Aquapoos App.

3. Tìm được một react-redux-webpack universal boilerplate khá ổn, bao gồm cả bảo mật, và một số kết hợp tối ưu khác.

####Giải quyết####

1. Webpack react hot realoading không có tạo ra bất cứ một file nào trên đĩa cứng, mà sẽ tạo trên bộ nhớ chính của 
 máy, thế nên sẽ không bao giờ có thể tìm ra một file bundle.js trên đĩa cứng sau khi reloading, mọi thay đổi đều 
 nằm trong bộ nhớ chính.

2. Về path và publicPath

	* path chính là nơi mà webpack sẽ đặt các file output được sinh ra, path sẽ phải là đường dẫn tuyệt đối.
	* publicPath chính là địa chỉ public của file output khi nó được tham chiếu bởi trình duyệt. Public path 
	sẽ được set giá trị tùy vào CDN mà static file thuộc về, thông thường được sử dụng trong production, ví
	dụ nếu như ta chạy req-res trực tiếp trên localhost thì địa chỉ sẽ là đường dẫn trỏ đến vị trí file
	trong đĩa, tuy nhiên nếu như bạn đặt host trên heroku lúc này bạn sẽ phải chỉnh sửa public sao cho phù
	hợp bằng cách nối đường dẫn gốc của heroku vào đằng đít.
	* Một số plugin của webpack rất là publicPath-sensitive.
 
3. Sau khi chỉnh sửa path và publicPath của webpack configuration, hành động get file Utils/bundle.js đã được trả
 về là thành công. publicPath và browserPath của tệp output phải là giống nhau.

![HRM work](src="https://imgur.com/f1x1qgf")


###English Version###

####Issues####

1. I have surmised the webpack react hot reloading module alway creates and updates output file frequently while it 
detects any change in component files.

2. I did not have exactly understanding about path and publicPath (they are two properties in webpack configuration) themselft
and their relationship with static path of express server.

3. I have find a very comprehensive r#eact-redux-webpack universal boilerplate, who create it also care about the security issues
in react-react webapp, and this boilerplate has much react optimization packages.


####Solutions####

1. In fact, Webpack hot reloading do not create and update any file on hard disk, it only create and update in-memory file (on main memory),
so you cannot find any output file of reloading on hard disk.

2. About path and publicPath

	* path is location where webpack will write its output files on, path is absolute.
	* publicPath is public URL address of output file when refereced by browser. For loaders that embed <script> or <link> or reference 
	 assets like image, css, public path is used as href or url() to  when it is different than its location on hard disk.Publicpath also
	 be used by several webpack Plugin to update the URLs inside css, html files when generating <strong>production</strong> builds. For 
	 example, if you run your webapp on localhost, you may have url to load './test.png' on localhost, but if you host your app on heroku 
	 (in production), the 'test.png' may be located on CDN, so that means, you have to manually update the urls in all files to point to 
	 the CDN when running in production.
	* Some plugins of webpack is publicPath-sensitive (React-hot-loading is an example of such plugins).

3. After modified the path and publicPath, HRM worked correctly. HRM worked correctly when we had publicPath and browser path of output file have
  same value string, as they are in webpack documentation : http://webpack.github.io/docs/configuration.html#output-publicpath
<img src="https://i.imgur.com/f1x1qgf.png">

###Reference###

* https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.iwvm7acfa
* http://code.fitness/post/2016/02/webpack-public-path-and-hot-reload.html
