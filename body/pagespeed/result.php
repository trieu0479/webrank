<div class="page-wrapper">
    <div class="main-action">
        <div class="box-action">
            <div class="container">
                <div class="row pt-6">
                    <div class="col text-white text-center">
                        <div class="display-6 font-weight-500 text-capitalize font-gg">Phân tích tốc độ website</div> 
                        <div class="font-16 mt-4 mb-4 pb-4 font-gg">
                            Công cụ phân tích kỹ thuật và nội dung website, cung cấp đề xuất giúp bạn cải thiện tốc độ website.
                        </div> 
                        <form action="index.php" method="get">
                            <div class="input-action">
                                <input type="text" id="websiteUrl" name="websiteUrl" class="form-input"
                                    placeholder="Nhập URL của trang web" value="<?=$_GET['websiteUrl']?>">
                                <button type="submit" class="btn btn-button">PHÂN TÍCH</button>
                                <input type="hidden" name="view" value="pagespeed">
                                <input type="hidden" name="action" value="result">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-action sticky">
        <ul>
            <li id="mobi"> <a href="javascript:void(0)" data-device="mobi" class="nav-t moblie"><i class="fal fa-mobile-android"></i> THIẾT BỊ DI ĐỘNG</a></li>
            <li id="pc"> <a href="javascript:void(0)" data-device="pc" class="nav-t desktop"><i class="far fa-desktop"></i> MÁY TÍNH ĐỂ BÀN</a></li>
        </ul>
    </div>
    <div class="main d-block">
        <section class="category-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="report-summary">
                            <div class="flex-wrapper">
                                <div class="single-chart">
                                    <svg viewBox="0 0 36 36" class="circular-chart green">
                                        <path class="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831" />

                                        <path id="ddd" class="circle" stroke-dasharray="60,100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="50%" y="63%" class="percentage"></text>
                                    </svg>
                                </div>
                            </div>
                            <a class="link-web col-md-12" href="" target="_blank">Trang web không phản hồi!</a>
                            <div class="sscorescale">
                                <span class="sscorescale-ranger ranger-red">0-49</span>
                                <span class="sscorescale-ranger ranger-yellow">50-89</span>
                                <span class="sscorescale-ranger ranger-green">90-100</span>
                                <a class="link-gg" href="https://developers.google.com/web/tools/lighthouse/v3/scoring"
                                    title="Lighthouse Scoring Guide">
                                    <i class="far fa-info-circle"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="box-content-wrapper">

                            <div class="audit-column">
                            </div>


                            <div class="column-experiment">
                                <div class="header-tab">
                                    <span>
                                        Dữ liệu thử nghiệm
                                    </span>
                                    <ul class="nav nav-tab" id="myTab" role="tablist">
                                        <li id="nav-1" class="input-tabs">
                                            <a class="nav-links" data-toggle="tab" href="#home" role="tab"
                                                aria-controls="home" aria-selected="true">
                                                <i class="fas fa-stream"></i>
                                            </a>
                                        </li>
                                        <li id="nav-2" class="">
                                            <a class="nav-links" data-toggle="tab" href="#profile" role="tab"
                                                aria-controls="profile" aria-selected="false">
                                                <i class="fas fa-bars"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel"
                                        aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="column-exp ddz">
                                                    <div class="metric-innerwrap">
                                                        <span class="icon-firstImg"></span>
                                                        <span class="metric-title">Hình ảnh có nội dung đầu tiên
                                                        </span>
                                                        <span class="metric-value firstImg"></span>
                                                    </div>
                                                    <div class="metric-innerwrap">
                                                        <span class="icon-Speedindex"></span>
                                                        <span class="metric-title">Chỉ mục tốc độ
                                                        </span>
                                                        <span class="metric-value Speedindex"></span>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-thoidiemTuongTac"></span>
                                                        <span class="metric-title">Thời điểm tương tác
                                                        </span>
                                                        <span class="metric-value thoidiemTuongTac"></span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="column-exp">

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-firstCoynghiadautien"></span>
                                                        <span class="metric-title">Hình ảnh có ý nghĩa đầu tiên

                                                        </span>
                                                        <span class="metric-value firstCoynghiadautien"></span>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-firstCpuNhanRoi"></span>
                                                        <span class="metric-title">CPU nhàn rỗi đầu tiên
                                                        </span>
                                                        <span class="metric-value firstCpuNhanRoi"></span>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-Fidtoida"></span>
                                                        <span class="metric-title">FID tối đa có thể có
                                                        </span>
                                                        <span class="metric-value Fidtoida"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel"
                                        aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="column-exp">
                                                    <div class="metric-innerwrap">
                                                        <span class="icon-firstImg"></span>
                                                        <span class="metric-title">Hình ảnh có nội dung đầu tiên
                                                        </span>
                                                        <span class="metric-value firstImg"></span>
                                                    </div>
                                                    <div class="metric-content">
                                                        Chỉ số Hình ảnh có nội dung đầu tiên đánh dấu thời điểm hiển thị
                                                        văn bản
                                                        hoặc hình ảnh đầu tiên.
                                                        <br>
                                                        <a href="">Tìm hiểu thêm</a>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-Speedindex"></span>
                                                        <span class="metric-title">Chỉ mục tốc độ
                                                        </span>
                                                        <span class="metric-value Speedindex"></span>
                                                    </div>
                                                    <div class="metric-content">
                                                        Chỉ mục tốc độ cho biết nội dung của một trang hiển thị nhanh
                                                        chóng đến
                                                        mức nào.
                                                        <a href="">Tìm hiểu thêm</a>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-thoidiemTuongTac"></span>
                                                        <span class="metric-title">Thời điểm tương tác

                                                        </span>
                                                        <span class="metric-value thoidiemTuongTac"></span>
                                                    </div>
                                                    <div class="metric-content">
                                                        Thời điểm tương tác là khoảng thời gian mà trang cần để trở nên
                                                        hoàn
                                                        toàn tương tác.
                                                        <a href="">Tìm hiểu thêm</a>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="column-exp">

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-firstCoynghiadautien"></span>
                                                        <span class="metric-title">Hình ảnh có ý nghĩa đầu tiên

                                                        </span>
                                                        <span class="metric-value firstCoynghiadautien"></span>
                                                    </div>
                                                    <div class="metric-content">
                                                        Chỉ số Hình ảnh có ý nghĩa đầu tiên đo lường thời điểm nội dung
                                                        chính
                                                        của trang hiển thị.
                                                        <a href="">Tìm hiểu thêm</a>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-firstCpuNhanRoi"></span>
                                                        <span class="metric-title">CPU nhàn rỗi đầu tiên
                                                        </span>
                                                        <span class="metric-value firstCpuNhanRoi"></span>
                                                    </div>
                                                    <div class="metric-content">
                                                        Chỉ số Hình ảnh có ý nghĩa đầu tiên đo lường thời điểm nội dung
                                                        chính
                                                        của trang hiển thị.
                                                        <a href="">Tìm hiểu thêm</a>
                                                    </div>

                                                    <div class="metric-innerwrap">
                                                        <span class="icon-Fidtoida"></span>
                                                        <span class="metric-title">FID tối đa có thể có

                                                        </span>
                                                        <span class="metric-value Fidtoida">
                                                        </span>
                                                    </div>
                                                    <div class="metric-content">
                                                        Chỉ số Hình ảnh có ý nghĩa đầu tiên đo lường thời điểm nội dung
                                                        chính
                                                        của trang hiển thị.
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="column-img">


                            </div>

                            <div class="audit-group">
                                <div class="header-audit-group" style="margin-bottom: 20px;">
                                    <span class="title">
                                        Cơ hội
                                    </span>
                                    <span class="description"> Những đề xuất tối ưu hóa này có thể tăng tốc độ tải trang
                                        của
                                        bạn.</span>
                                </div>

                                <div class="block1">
                                    <div class="audit-load-cols">
                                        <span class="icon-Blockresource"></span>
                                        <span class="title">Loại bỏ các tài nguyên chặn hiển thị</span>
                                        <span class="line-value"><span class="value-line width-Blockresource"
                                                style=""></span></span>
                                        <span class="value" style="width:8%"><span class="Blockresource-text"></span><i
                                                class="fas fa-chevron-down"></i></span>
                                    </div>
                                    <div class="audit-load-content">
                                        Các tài nguyên đang chặn hình ảnh đầu tiên trang của bạn. Hãy xem xét phân phối
                                        nội dòng
                                        JS/CSS quan trọng và trì hoãn mọi JS/kiểu không quan trọng.<a href="">Tìm hiểu
                                            thêm.</a>

                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Có một số plugin của WordPress có thể giúp bạn <a href="">đưa phần tử
                                                    quan trọng vào nội tuyến</a> hoặc <a href="">trì hoãn tài nguyên ít
                                                    quan
                                                    trọng</a> hơn.
                                                Xin lưu ý rằng những phương thức tối ưu hóa mà các plugin này cung cấp
                                                có thể
                                                làm
                                                gián đoạn
                                                tính năng của giao diện hoặc plugin, do đó, có thể bạn cần thay đổi mã.
                                            </span>
                                        </div>
                                        <table class="tables">
                                            <thead>
                                                <tr>
                                                    <th style="width: 50% !important;">URL</th>
                                                    <th style="width: 20% !important;">Kích thước (KB)</th>
                                                    <th style="width: 20% !important;"> Số byte có thể tiết kiệm được
                                                        (KB)</th>
                                                </tr>
                                            </thead>
                                            <tbody class="Blockresource">

                                            </tbody>
                                        </table>
                                    </div>

                                </div>




                                <div class="block2">
                                    <div class="audit-load-cols">
                                        <span class="icon-ImageResponsive"></span>
                                        <span class="title">Thay đổi kích thước hình ảnh cho phù hợp</span>
                                        <span class="line-value"><span class="value-line width-ImageResponsive"
                                                style=""></span></span>
                                        <span class="value" style="width: 8%;"><span
                                                class="ImageResponsive-text"></span> <i
                                                class="fas fa-chevron-down"></i></span>
                                    </div>
                                    <div class="audit-load-content">
                                        Các tài nguyên đang chặn hình ảnh đầu tiên trang của bạn. Hãy xem xét phân phối
                                        nội dòng
                                        JS/CSS quan trọng và trì hoãn mọi JS/kiểu không quan trọng. <a href="">Tìm hiểu
                                            thêm.</a>



                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Trực tiếp tải hình ảnh lên thông qua <a href="">thư viện nội dung đa
                                                    phương
                                                    tiện</a>
                                                để đảm bảo có các kích thước
                                                hình ảnh theo yêu cầu, sau đó chèn hình ảnh từ thư viện nội dung đa
                                                phương tiện
                                                hoặc
                                                sử dụng tiện ích
                                                hình ảnh để đảm bảo sử dụng kích thước hình ảnh tối ưu (bao gồm cả các
                                                kích
                                                thước
                                                dành cho điểm ngắt phản hồi).
                                                Tránh sử dụng hình ảnh có
                                                `Kích thước đầy đủ` trừ khi những hình ảnh đó có kích thước phù hợp để
                                                sử
                                                dụng.<a href="">Tìm hiểu thêm.</a>
                                            </span>
                                        </div>
                                        <table class="tables">
                                            <thead>
                                                <tr>
                                                    <th style="width: 80%;">URL</th>
                                                    <th style="width: 10%;">Kích thước (KB)</th>
                                                    <th style="width: 10%;"> Số byte có thể tiết kiệm được (KB)</th>
                                                </tr>
                                            </thead>
                                            <tbody class="img-responsive">

                                            </tbody>
                                        </table>
                                    </div>
                                </div>




                                <div class="block3">
                                    <div class="audit-load-cols">
                                        <span class="icon-phanphohinhanh"></span>
                                        <span class="title">Phân phối hình ảnh ở định dạng mới và hiệu quả hơn</span>
                                        <span class="line-value"><span class="value-line width-phanphohinhanh"
                                                style=""></span></span>
                                        <span class="value" style="width: 8%;"><span class="phanphohinhanh-text"></span>
                                            <i class="fas fa-chevron-down"></i></span>
                                    </div>
                                    <div class="audit-load-content">
                                        Các định dạng hình ảnh như JPEG 2000, JPEG XR và WebP thường nén tốt hơn so với
                                        các định
                                        dạng PNG hoặc JPEG.
                                        Điều này có nghĩa là tốc độ tải xuống nhanh hơn và tiêu tốn ít dữ liệu hơn. <a
                                            href="">Tìm
                                            hiểu thêm.</a>

                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Hãy cân nhắc sử dụng một <a href="">plugin</a> hoặc dịch vụ tự động
                                                chuyển các
                                                hình
                                                ảnh đã tải lên sang định dạng tối ưu.
                                            </span>
                                        </div>
                                        <table class="tables">
                                            <thead>
                                                <tr>
                                                    <th style="width: 80%;">URL</th>
                                                    <th style="width: 10%;">Kích thước (KB)</th>
                                                    <th style="width: 10%;"> Số byte có thể tiết kiệm được (KB)</th>
                                                </tr>
                                            </thead>
                                            <tbody class="phanphohinhanh">

                                            </tbody>
                                        </table>
                                    </div>

                                </div>



                                <div class="block4">

                                    <div class="audit-load-cols">
                                        <span class="icon-trihoanhinh"></span>
                                        <span class="title">Trì hoãn tải các hình ảnh ngoài màn hình
                                        </span>
                                        <span class="line-value"><span class="value-line width-trihoanhinh"
                                                style=""></span></span>
                                        <span class="value" style="width: 8%;"><span class="trihoanhinh-text"></span><i
                                                class="fas fa-chevron-down"></i></span>
                                    </div>
                                    <div class="audit-load-content">
                                        Xem xét trì hoãn tải các hình ảnh ẩn và ngoài màn hình sau khi tất cả tài nguyên
                                        quan
                                        trọng
                                        tải xong để giảm thời gian tương tác. <a href="">Tìm hiểu thêm.</a>


                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Cài đặt một <a href="">plugin tải từng phần của WordPress</a> giúp trì
                                                hoãn mọi
                                                hình
                                                ảnh ngoài màn hình, hoặc chuyển sang một
                                                giao diện cung cấp chức năng đó. Ngoài ra, hãy cân nhắc sử dụng <a
                                                    href="">plugin
                                                    AMP.</a>
                                            </span>
                                        </div>


                                        <table class="tables">
                                            <thead>
                                                <tr>
                                                    <th style="width: 50% !important;">URL</th>
                                                    <th style="width: 20% !important;">Kích thước (KB)</th>
                                                    <th style="width: 20% !important;"> Số byte có thể tiết kiệm được
                                                        (KB)</th>
                                                </tr>
                                            </thead>
                                            <tbody class="trihoanhinh">

                                            </tbody>
                                        </table>
                                    </div>

                                </div>




                                <div class="block5">
                                    <div class="audit-load-cols">
                                        <span class="icon-Csskhongdung"></span>
                                        <span class="title">Xóa biểu định kiểu xếp chồng (CSS) không dùng</span>
                                        <span class="line-value"><span class="value-line width-Csskhongdung"
                                                style=""></span></span>
                                        <span class="value" style="width: 8%;"><span class="Csskhongdung-text"></span>
                                            <i class="fas fa-chevron-down"></i></span>
                                    </div>
                                    <div class="audit-load-content">
                                        Xóa các quy tắc vô hiệu khỏi biểu định kiểu và trì hoãn tải Biểu định kiểu xếp
                                        chồng
                                        (CSS)
                                        không dùng cho nội dung trong màn hình đầu tiên để giảm số byte
                                        không cần thiết mà hoạt động mạng sử dụng. <a href="">Tìm hiểu thêm.</a>


                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Hãy cân nhắc giảm hoặc chuyển đổi số lượng <a href="">plugin của
                                                    WordPress</a>
                                                tải
                                                CSS không
                                                sử dụng trong trang của bạn. Để xác định các plugin đang thêm CSS không
                                                liên
                                                quan,
                                                hãy thử chạy <a href="">phạm vi của mã</a> trong Chrome DevTools. Bạn có
                                                thể xác
                                                định giao diện/plugin gây ra
                                                tình trạng này từ URL của biểu định kiểu. Hãy chú ý đến những plugin có
                                                nhiều
                                                biểu
                                                định kiểu trong danh sách.
                                                Những plugin này có nhiều màu đỏ trong phạm vi của mã. Một plugin chỉ
                                                nên thêm
                                                một
                                                biểu định
                                                kiểu vào hàng đợi nếu biểu định kiểu đó thực sự được sử dụng trên trang.
                                            </span>
                                        </div>
                                        <table class="tables">
                                            <thead>
                                                <tr>
                                                    <th style="width: 80%;">URL</th>
                                                    <th style="width: 10%;">Kích thước (KB)</th>
                                                    <th style="width: 10%;"> Số byte có thể tiết kiệm được (KB)</th>
                                                </tr>
                                            </thead>
                                            <tbody class="Csskhongdung">

                                            </tbody>
                                        </table>
                                    </div>

                                </div>



                                <div class="block6">
                                    <div class="audit-load-cols">
                                        <span class="icon-TTFB"></span>
                                        <span class="title">Giảm thời gian phản hồi của máy chủ (TTFB)</span>
                                        <span class="line-value"><span class="value-line width-TTFB"
                                                style=""></span></span>
                                        <span class="value" style="width: 8%;"><span class="TTFB-text"></span> <i
                                                class="fas fa-chevron-down"></i></span>
                                    </div>



                                    <div class="audit-load-content">
                                        Chỉ số Thời gian cho byte đầu tiên xác định thời gian máy chủ của bạn gửi một
                                        phản hồi.
                                        <a href="">Tìm hiểu thêm.</a>

                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Giao diện, plugin và thông số máy chủ đều tác động đến thời gian phản
                                                hồi của
                                                máy
                                                chủ. Hãy cân nhắc tìm một giao diện được tối ưu hóa,
                                                lựa chọn cẩn thận một plugin tối ưu hóa và/hoặc nâng cấp máy chủ.
                                            </span>
                                        </div>

                                    </div>
                                </div>




                                <div class="block7">
                                    <div class="audit-load-cols">
                                        <span class="icon-mahoahinhanh"></span>
                                        <span class="title">Mã hóa hình ảnh hiệu quả</span>
                                        <span class="line-value"><span class="value-line width-mahoahinhanh"
                                                style=""></span></span>
                                        <span class="value" style="width:8%"><span class="mahoahinhanh-text"></span><i
                                                class="fas fa-chevron-down"></i></span>
                                    </div>
                                    <div class="audit-load-content">
                                        Hình ảnh được tối ưu hóa sẽ tải nhanh hơn và tiêu tốn ít dữ liệu di động hơn.
                                        <a href="">Tìm hiểu thêm.</a>

                                        <div class="wp-content">
                                            <img src="assets/images/select/wp.png">
                                            <span>
                                                Hãy cân nhắc sử dụng một <a href="">plugin tối ưu hóa hình ảnh</a> của
                                                WordPress
                                                có khả năng nén hình ảnh mà vẫn giữ được chất lượng.
                                            </span>
                                        </div>
                                        <table class="tables">
                                            <thead>
                                                <tr>
                                                    <th style="width: 50% !important;">URL</th>
                                                    <th style="width: 20% !important;">Kích thước (KB)</th>
                                                    <th style="width: 20% !important;"> Số byte có thể tiết kiệm được
                                                        (KB)</th>
                                                </tr>
                                            </thead>
                                            <tbody class="mahoahinhanh">

                                            </tbody>
                                        </table>
                                    </div>

                                </div>





                            </div>
                            <div class="audit-group">
                                <div class="header-audit-group" style="margin-bottom: 20px;">
                                    <span class="title">
                                        Chẩn đoán
                                    </span>
                                    <span class="description"> Thông tin khác về hiệu suất ứng dụng của bạn.
                                    </span>
                                </div>


                                <div class="audit-load-cols">
                                    <span class="tamgiac"></span>
                                    <span class="title">Đảm bảo văn bản vẫn hiển thị trong khi tải phông chữ web </span>
                                    <span class="value"><i class="fas fa-chevron-down"></i></span>
                                </div>
                                <div class="audit-load-content">
                                    Sử dụng tính năng CSS hiển thị phông chữ để đảm bảo văn bản hiển thị với người dùng
                                    khi
                                    phông chữ web đang tải.
                                    Tìm hiểu thêm.
                                    <table class="tables">
                                        <thead>
                                            <tr>
                                                <th style="width: 70%;">URL</th>
                                                <th style="width: 10%;"> Số byte có thể tiết kiệm được (KB)</th>
                                            </tr>
                                        </thead>
                                        <tbody class="display-font">


                                        </tbody>
                                    </table>
                                </div>



                                <div class="audit-load-cols">

                                    <span class="tamgiac"></span>
                                    <span class="title">
                                        Phân phối các nội dung tĩnh bằng chính sách bộ nhớ đệm hiệu quả</span>
                                    <span class="value-red"> Đã tìm thấy <span class="found"></span> tài nguyên<i
                                            class="fas fa-chevron-down"></i></span>
                                </div>
                                <div class="audit-load-content">
                                    Tuổi thọ lâu dài của bộ nhớ đệm có thể tăng tốc số lượt truy cập lặp lại vào trang
                                    của bạn.
                                    Tìm hiểu thêm.
                                    <table class="tables">
                                        <thead>
                                            <tr>
                                                <th style="width: 70%;">URL</th>
                                                <th style="width: 20%;"> Thời gian tồn tại (TTL) của bộ nhớ đệm</th>
                                                <th style="width: 10%;">Kích thước (KB)</th>
                                            </tr>
                                        </thead>
                                        <tbody class="found-table">


                                        </tbody>

                                    </table>

                                </div>




                                <div class="audit-load-cols">

                                    <span class="tamgiac"></span>
                                    <span class="title">
                                        Tránh kích thước DOM quá lớn</span>
                                    <span class="value-red"> <span class="domsize-text"></span> phần tử<i
                                            class="fas fa-chevron-down"></i></span>
                                </div>


                                <div class="audit-load-content">
                                    To set budgets for the quantity and size of page resources, add a budget.json file.
                                    <table class="tables">
                                        <thead>
                                            <tr>
                                                <th style="width: 50%;">Thống kê</th>
                                                <th style="width: 20%;"> Phần tử</th>
                                                <th style="width: 20%;">Giá trị</th>
                                            </tr>
                                        </thead>
                                        <tbody class="domsize">
                                        </tbody>
                                    </table>
                                </div>





                                <div class="audit-load-cols">
                                    <span class="tamgiac"></span>
                                    <span class="title">
                                        Giảm thời gian thực thi JavaScript</span>
                                    <span class="value-red"> <span class="bootuptime-text"></span><i
                                            class="fas fa-chevron-down"></i></span>
                                </div>



                                <div class="audit-load-content">
                                    To set budgets for the quantity and size of page resources, add a budget.json file.
                                    <table class="tables">
                                        <thead>
                                            <tr>
                                                <th style="width: 50%;">URL</th>
                                                <th style="width: 20%;"> Tổng thời gian của CPU</th>
                                                <th style="width: 15%;">Đánh giá tập lệnh
                                                </th>
                                                <th style="width: 15%;">Phân tích cú pháp tập lệnh
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bootuptime">
                                        </tbody>
                                    </table>
                                </div>


                                <div class="audit-load-cols">
                                    <span class="tronxam"></span>
                                    <span class="title">Giảm thiểu độ sâu của các yêu cầu quan trọng </span>
                                    <span class="value ba"><span class="crc"></span> <i
                                            class="fas fa-chevron-down"></i></span>
                                </div>

                                <div class="audit-load-content">
                                    Các chuỗi yêu cầu quan trọng dưới đây cho bạn biết những tài nguyên có mức độ ưu
                                    tiên cao sẽ
                                    được tải. Hãy cân nhắc giảm độ dài chuỗi,
                                    giảm kích thước tài nguyên tải xuống hoặc trì hoãn tải xuống các tài nguyên không
                                    cần thiết
                                    để cải thiện tốc độ tải trang.<a href="">Tìm hiểu thêm.</a>
                                </div>


                                <div class="audit-load-cols">

                                    <span class="tronxam"></span>
                                    <span class="title">
                                        Keep request counts low and transfer sizes small </span>
                                    <span class="value"><span class="request"></span> <i
                                            class="fas fa-chevron-down"></i></span>
                                </div>
                                <div class="audit-load-content">
                                    To set budgets for the quantity and size of page resources, add a budget.json file.
                                    <table class="tables">
                                        <thead>
                                            <tr>
                                                <th style="width: 50%;">Resource Type</th>
                                                <th style="width: 20%;"> Requests</th>
                                                <th style="width: 20%;">Transfer Size</th>
                                            </tr>
                                        </thead>
                                        <tbody class="request-table">
                                        </tbody>
                                    </table>
                                </div>


                                <div class="audit-load-cols">

                                    <span class="tronxam"></span>
                                    <span class="title">
                                        Third-Party Usage </span>
                                    <span class="value third-found"> <span class="third-found"></span> <i
                                            class="fas fa-chevron-down"></i></span>
                                </div>
                                <div class="audit-load-content">
                                    To set budgets for the quantity and size of page resources, add a budget.json file.
                                    <table class="tables">
                                        <thead>
                                            <tr>
                                                <th style="width: 50%;">Third-Party</th>
                                                <th style="width: 20%;"> Kích thước (KB)
                                                </th>
                                                <th style="width: 20%;">Main Thread Time</th>
                                            </tr>
                                        </thead>
                                        <tbody class="third-party-table">


                                        </tbody>

                                    </table>

                                </div>



                            </div>
                            <div class="header-audit-group yeucau" style="margin-bottom: 20px;">
                                <span class="title">
                                    Số lần kiểm tra đạt yêu cầu <span>(10)</span>
                                </span>

                            </div>
                            <div class="timeleft">
                                <img src="./assets/images/speed/icon.time.PNG" width="50px">
                                <span><a href="">Điểm tốc độ</a> được dựa trên dữ liệu thử nghiệm do <a
                                        href="">Lighthouse</a>
                                    phân tích.
                                    Thời gian phân tích 09:32:40, 24/9/2019</span>
                            </div>
                        </div>
                        <div class="desktop-img">
                            <div class="similarThumbMobile" id="similar">
                                <img src="assets/images/speed/blank_device_no_bg.png" alt="">
                                <img class="imgd" src="">
                            </div>
                        </div>
                        <script>
                            var coll = document.getElementsByClassName("audit-load-cols");
                            var i;
                            for (i = 0; i < coll.length; i++) {
                                coll[i].addEventListener("click", function () {
                                    this.classList.toggle("actives");
                                    var content = this.nextElementSibling;
                                    if (content.style.display === "block") {
                                        content.style.display = "none";
                                    } else {
                                        content.style.display = "block";
                                    }
                                });
                            }
                        </script>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="progresss">
        <div id='myProgress'>
            <div class="progress-bar-striped" id="myBar" role="progressbar"></div>
        </div>
        <span id="percent"> </span>
        </span>
    </div>
</div>

<script src="dist/js/pages/pagespeed/pagespeed-result.js?<?=$version?>"></script>
