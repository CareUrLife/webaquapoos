import React, {Component} from 'react';
import RotationText from "../UtilComponents/rotationtext.js";

class ProductQuote extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="prodquote">
                <div className="container-fluid">
                    <h3>Gốc rễ ở Tự nhiên, hỗ trợ bởi Công nghệ</h3>
                    <hr/>
                    <div>
                        Tích hợp nhiều công nghệ khác nhau AquapoOS góp sức mang lại 
                    </div>
                    <div>
                        <RotationText items={[" trải nghiệm trồng rau mới mẻ.", " nguồn rau hữu cơ bền vững", " giải pháp cho vấn đề thực phẩm bẩn."]} widths={[280.44, 260.16, 344.16]}/> 
                    </div>
                    <div className="row feature-box">
                        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                            <div className="col-md-12 col-lg-12 col-xs-6 col-sm-6 feature-content">
                                <h6>Gieo trồng Aquaponic</h6> 
                                <p>Công nghệ gieo trồng không dùng đất có nguồn gốc từ Aztecs cổ đại, phù hợp với
những nơi khan hiếm nước, diện tích. Cho năng suất cao hơn, chất lượng hơn so với nông nghiệp truyền thống và khác với Thủy canh, Aquaponic hoàn toàn hữu cơ.</p>
                            </div>
                            <div className="col-md-12 col-lg-12 col-xs-6 col-sm-6 feature-content">
                                <h6>Kiến cấu, vật liệu vững chắc</h6>
                                <p>Sử dụng chất liệu được chọn lựa,kết cấu được nghiên cứu kỹ.AquapoOS có thể chịu đựng mọi ngoại cảnh dù được đặt ở trong nhà hay ngoài trời.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12" style={{overflow : "none"}}>
                            <img src="/Images/quote.jpg" style={{height : "100%", width : "100%"}}/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                            <div className="col-md-12 col-lg-12 col-xs-6 col-sm-6 feature-content">
                                <h6>Công nghệ cảm biến </h6> 
                                <p>AquapoOS sở hữu các cảm biến giúp nó có thể tự điều chỉnh nhằm cân bằng, tối ưu các yếu tố sinh học quan trọng trong hệ, đồng thời báo cáo lại kịp thời người nuôi trồng các thông số quan trọng.</p>
                            </div>
                            <div className="col-md-12 col-lg-12 col-xs-6 col-sm-6 feature-content">
                                <h6>Tương tác trực quan</h6>
                                <p>AquapoOS tương tác, trò chuyện với người nuôi trồng thông qua ứng dụng Mobile, và website. Qua đó AquapoOS có thể cung cấp các thông tin hiện tại về nó, đưa ra kế hoạch gieo trồng, và 
các thông tin hữu ích dành cho sức khỏe gia đình của bạn. </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductQuote;
