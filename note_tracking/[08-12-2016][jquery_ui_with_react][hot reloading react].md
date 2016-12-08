###Ngày 05/12/2016###

####Vấn đề####

1. Vấn đề Invariant Violation trong Bootstrap React.

2. Vấn đề về phối hợp giữa Jquery và React.

3. Hot Reloading React không hoạt động theo mong muốn. Mặc dù đã load được in-memory bundle tuy nhiên trình duyệt vẫn chưa reload tự động.

####Giải quyết####

1. Boostrap vốn không thiết kế để dành riêng cho react, vậy nên Bootstrap React rất có thể ít được quan tâm, Semmantic UI cũng vậy. 
 Tuy vậy có một thư viện UI dành riêng cho React là Material-UI do Google phát triển, với triết lý UI khá vững chãi.

2. Không nên phối hợp Jquery và React, vả lại chuyên gia khuyên không nên bị phụ thuộc vào Jquery, bởi sử dụng Jquery một cách bừa
bãi có thể là cấu trúc mã nguồn trở nên lộn xộn, khó quản lý. Nếu sử dụng Jquery kết hợp với React, Jquery có thể sẽ thay đổi một
vài phần tử DOM và làm xáo trộn các kế hoạch tối ưu của React, ngoài ra các thay đổi gây ra bởi React thường không được Jquery ghi
nhận vậy nên, nhiều khi Jquery không có tác dụng khi Client render một nội dung mới.

3. Chưa tìm ra giải pháp

###English Version###

####Issues####

1. The Invariant Violation Error while we use Navbar - the Component of React-Bootstrap - in React.

2. Is combining Jquery and React good ?

3. Hot Reloading React does not act as our expectations. Although, our browser successfully loads the in-memory bundle, unfortunately it was
not hot reloading the content of sites while we were changing the content of react source code.   

####Solutions####

1. Bootstrap is not intentionally designed for react, so Bootstrap React may has not serious intention from its developers, Semmantic UI too. 
 However, there is a UI library, that is especially designed for React, and its name is Material-UI, developed by Google based on very solid 
 UI conceptions.

2. Dont combine Jquery and React, It is said by many of Web Dev Specialist that depending to much on Jquery will generates a messy, unmaintainable
 code. If we use Jquery and React simultaneously, Jquery can cause some changes in DOM elements, in that situation, that changes is not percieved by
React, so The optimization engine of React cannot work effectively in that situation. Otherwise, changes is caused by React also can not be percieved 
by Jquery, so Jquery code can work effectly while React affects Dom Elements. 

3. Have not find any solution for this issues.
