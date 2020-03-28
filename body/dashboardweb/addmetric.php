<div class="pt-5 container BendmarksTool" id="export">
    <a target="_top" href="<?=$_SERVER['HTTP_REFERER'];?>" class="btnGoBack position-relative bg-white p-10 rounded d-block" style="width: 67px; color: #555">
        <i class="far fa-angle-left m-r-5"></i> Trở lại
    </a>
    <div class="row">
        <div class="col-12 pt-4 pb-5 w-100">
            <div class="bg-white rounded " style="display: block!important; padding: 0 0 15px;">
                <h3 class="title-addmetric text-left font-weight-bold">Add a Metric</h3>
                <div class="menu_click d-flex flex-direction-row filters" >
                    <a class="filter all active" onclick="filterSelection('all')">All</a>
                    <a class="filter ptwebsite" onclick="filterSelection('ptwebsite')">Phân tích Website</a>
                    <!-- <a class="filter ptcategory" onclick="filterSelection('ptcategory')">Phân tích Thị trường</a> -->
                    <!-- <a class="filter pttukhoa" onclick="filterSelection('pttukhoa')">Phân tích Từ khóa</a> -->
                    <a class="filter apps" onclick="filterSelection('apps')">Ứng dụng </a>
                </div>
                <ul class="react-wizard-cards-container filterDivs">
                    <!-- <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>chi phí click quảng cáo GG search </strong>
                                <p>Chi phí click trung bình khi người dùng tìm kiếm từ khóa trên Google</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh1.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>Tỷ lệ nhấp quảng cáo GG search</strong>
                                <p> Tỷ lệ nhấp trung bình khi người dùng tìm kiếm từ khóa trên Google</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh 2.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>Chi phí Click hợp lệ</strong>
                                <p>Tỷ lệ nhấp được xem là hợp lệ khi người dùng tìm kiếm từ khóa trên Google</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh 3.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPC GG Search theo ngành nghề</strong>
                                <p>Biểu đồ chi phí trung bình cho mỗi click chuột theo ngành nghề </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh4.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CTR gg search theo ngành nghề</strong>
                                <p>Biểu đồ tỷ lệ nhấp theo ngành nghề khi quảng cáo trên Google Search</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh5.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                   
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>CPC quảng cáo Youtube </strong>
                                <p>Chi phí click trung bình khi người dùng tìm kiếm trên Youtube </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh11.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPM giá mỗi 1000 lần hiển thị </strong>
                                <p> Chi phí phải trả cho mỗi 1000 lần hiển thị quảng cáo trên Youtube </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh12.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPM Chi phí mỗi lần xem video </strong>
                                <p>Chi phí phải trả trung bình cho mỗi 1000 lần xem video</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh13.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPM Youtube theo ngành nghề</strong>
                                <p>Biểu đồ chi phí trung bình cho 1000 lần hiển thị quảng cáo theo ngành nghề trên
                                    Youtube </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh14.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPV Youtube theo ngành nghề</strong>
                                <p>Biểu đồ hiển thị CPV trên Youtube by Industry</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh15.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>






                  
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>chi phí click quảng cáo GG Display </strong>
                                <p>Chi phí click trung bình khi người dùng tìm kiếm trên Website</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh6.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPM Giá mỗi 1000 lần hiển thị GG Display </strong>
                                <p> Chi phí phải trả cho mỗi 1000 lần hiển thị quảng cáo</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh7.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CTR tỷ lệ nhấp trên GG DisPlay</strong>
                                <p>Tỷ lệ nhấp trung bình khi người dùng tìm kiếm trên Google Display</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh8.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CPC GG Display theo ngành nghề</strong>
                                <p>Biểu đồ chi phí trung bình cho mỗi click chuột theo ngành nghề khi quảng cáo trên
                                    Google Display </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh9.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptcategory">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong>CTR GG Display theo ngành nghề</strong>
                                <p>Biểu đồ tỷ lệ nhấp theo ngành nghề khi quảng cáo trên Google Display</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh10.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" >
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li> -->
                    <!-- -------------------------------------------------------------compare -tag-------------------------------------------- -->
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Trung bình tìm kiếm giữa 2 từ khóa </strong>
                                <p>Trung bình tìm kiếm giữa 2 từ khóa hàng tháng theo thiết bị máy tính,máy tính bảng và
                                    điện thoại</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh50.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getBidForecast__Impressions">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Số nhấp chuột giữa 2 từ khóa </strong>
                                <p>Số nhấp chuột của 2 từ khóa hàng tháng theo thiết bị máy tính,máy tính bảng và điện
                                    thoại</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh 51.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric"  data-stask="getBidForecast__Click" >
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Chi phí một nhấp chuột giữa 2 từ khóa </strong>
                                <p>Chi phí một nhấp chuột của 2 từ khóa hàng tháng theo thiết bị máy tính,máy tính bảng
                                    và điện thoại</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh52.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric"  data-stask="getBidForecast__CPC">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Chi phí quảng cáo Adswords giữa 2 từ khóa </strong>
                                <p>Chi phí quảng cáo Adswords của 2 từ khóa hàng tháng theo thiết bị máy tính,máy tính
                                    bảng và điện thoại</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh53.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getBidForecast__Cost">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <!-- -------------------------------------------------------- -->
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Lịch sử truy cập 12 tháng giữa 2 từ khóa theo máy tính
                                </strong>
                                <p>Lịch sử truy cập 12 tháng của 2 từ khóa liên quan theo thiết bị máy tính</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh20.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getKeywordsSuggestionV1__History__PC">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Lịch sử truy cập 12 tháng giữa 2 từ khóa theo Mobile
                                </strong>
                                <p>Lịch sử truy cập 12 tháng của 2 từ khóa liên quan theo thiết bị di động</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh22.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getKeywordsSuggestionV1__History__Mobile">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Top 5 trang SEO tốt nhất từ khóa </strong>
                                <p>Top 5 trang SEO của từ khóa liên quan đến từ khóa chính </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh21.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="Phan__Tich__Seo_Chart_A">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Phân tích SEM </strong>
                                <p>So sánh độ khó,giá đầu thầu trang cao nhất,giá đầu thầu trang thấp nhất,số lần tìm
                                    kiếm trung bình giữa 2 từ khóa </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh23.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="Chart__Circle">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv pttukhoa">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>CPC giữa 2 từ khóa</strong>
                                <p>Chi phí Click CPC giữa 2 từ khóa trong 3 tháng gần nhất</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh24.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="Phan__Tich__Seo">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <!-- ##################################################compare-tag###################################################### -->
                    <!-- --------------------------------------------- của thằng Hiền   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                     -->
                    <li class="react-wizard-cards-container-card filterDiv apps">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tổng Lượng Khách Rời Bỏ Trang</strong>
                                <p>tổng lượng rời bỏ trang trên website</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh25.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTotalOutgoingAdVisits">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Lượt truy cập khách hàng </strong>
                                <p>Thông tin chi tiết về lượt truy cập khách hàng của các website bạn tìm kiếm </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh26.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficAndEngagementOverviewMonthly">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Độ tuổi truy cập khách hàng </strong>
                                <p> Lượng khách truy cập website của bạn theo độ tuổi nhất định </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh27.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getWebDemographicsAge">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Truy cập quảng cáo hiển thị</strong>
                                <p>Lượng truy cập quảng cáo theo thiệt bị máy tính và di động</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh28.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getWebsiteAdsVisitsOverview">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tỷ lệ truy cập ở Việt Nam</strong>
                                <p>Tỉ lệ truy cập trang web tính theo phần trăm của quốc gia Việt Nam </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh29.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getWebsiteGeography">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Giới tính khách hàng</strong>
                                <p>Ước lượng tỉ lệ truy cập theo giới tính của khách hàng </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh30.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getWebDemographicsGender">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Nguồn khách hàng</strong>
                                <p>Tỉ lệ nguồn khách tìm kiếm thông qua các mạng xã hội,các liên kết giới thiệu,... </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh31.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficSourcesOverview">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Lượt truy cập mạng xã hội</strong>
                                <p>Tỉ lệ truy cập theo mạng xã hội trong 3 tháng gần nhất</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh32.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficSocial">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tổng Lượt truy cập mạng xã hội</strong>
                                <p>Tổng lượt truy cập trang web hàng năm từ mạng xã hội </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh33.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficSocialOverview">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Lượng khách bấm vào quảng cáo</strong>
                                <p>Số khách nhấn quảng cáo trong 3 tháng gần nhất</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh34.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficDisplayPaidOutgoingAds">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Từ khoá có thương hiệu</strong>
                                <p>Tỉ lệ phần trăm từ khóa có thương hiệu trên thị trường</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh35.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchBrandedKeywords">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Từ khoá không thương hiệu</strong>
                                <p>Tỉ lệ phần trăm từ khóa không có thương hiệu trên thị trường</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh36.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchBrandedKeywordsNoneBranded">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tỉ lệ truy cập từ tìm kiếm</strong>
                                <p>Lượt truy cập từ tìm kiếm tự nhiên và tìm kiếm trả phí</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh37.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficSourcesSearch">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Truy cập từ giới thiệu</strong>
                                <p>Lượt khách truy cập từ giới thiệu trong 3 tháng gần nhất</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh38.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficSourcesTotalReferrals">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tổng Truy cập từ giới thiệu</strong>
                                <p>Tổng Lượng khách truy cập từ giới thiệu và truy cập từ nguồn khác theo hàng năm</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh39.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getTrafficSourcesTotalReferralsOverview">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Trung bình thời lượng truy cập: Tìm kiếm tự nhiên</strong>
                                <p>Chi tiết truy cập từ tìm kiếm trung bình </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh40.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewOrganic">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Thời Gian Trung Bình: Tìm kiếm tự nhiên</strong>
                                <p> thời gian trung bình khách ở lại website</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh41.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewOrganic_AverageDuration">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Số Trang / Lượt Truy Cập: Tìm kiếm tự nhiên</strong>
                                <p>Số trang truy cập trên website</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh42.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewOrganic_PagesPerVisit">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tỉ Lệ Thoát Trang: Tìm kiếm tự nhiên</strong>
                                <p>Lượng khách thoát trang ở website của bạn </p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh43.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewOrganic_BounceRate">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Lượng truy cập: Tìm kiếm trả phí</strong>
                                <p>Truy cập theo tìm kiếm trả phí trong 3 tháng gần nhất</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh44.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewPaid">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Thời Gian Trung Bình: Tìm kiếm trả phí</strong>
                                <p>Thời gian khách truy cập website trung bình theo tìm kiếm trả phí</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh45.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewPaid_AverageDuration">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Số Trang / Lượt Truy Cập: Tìm kiếm trả phí</strong>
                                <p>Số trang khách truy cập theo tìm kiếm  trả phí</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh46.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewPaid_PagesPerVisit">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv ptwebsite">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tỉ Lệ Thoát Trang: Tìm kiếm trả phí</strong>
                                <p>Lượng khách thoát trang ở website của bạn</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh47.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getSearchOrganicPaidOverviewPaid_BounceRate">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv apps">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Truy cập theo thiết bị</strong>
                                <p>Lượng truy cập trên laptop và di động</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh48.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="getDesktopVsMobileVisits">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                    <li class="react-wizard-cards-container-card filterDiv apps">
                        <div class="box-Metric">
                            <div class="react-wizard-card-text">
                                <strong class='text-capitalize'>Tổng truy cập</strong>
                                <p>tổng lượng truy cập trên website</p>
                            </div>
                            <div class="react-wizard-card-image">
                                <img class="" src="assets/images/addmetric/anh49.png" alt="">
                            </div>
                        </div>
                        <div class="add-Metric" data-stask="totalTraffic">
                            <a href="javascripvoild:0" class="button_add">
                                + ADD
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    <script src="dist/dist/js/pages/custom-dashboard/add-metric.js"></script>