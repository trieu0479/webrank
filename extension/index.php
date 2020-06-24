<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Analysic</title>

    <link rel="stylesheet" href="css/lib/bootstrap.min.css">
    <link rel="stylesheet" href="css/content.min.css">
    <link rel="stylesheet" href="css/font.min.css">
  
</head>
 
<body>
    <div id="website-analysis" class="animated fadeInRight scrollBar">
        <section id="loader">
            <div class="header-loading">
                <div class="logo">
                    <img src="img/webrank.svg">
                    <h4 class="text-center text-dark mt-3 font-12">Công cụ
                        <div style="color:#27ae60;font-size:24px">Phân Tích Website</div>
                        <p class="font-12 mt-1">3F Solution - webrank.vn</p>
                    </h4>
                </div>
            </div>
            <div class="loader">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="no-data">
                <img src="img/no-data.png" width="300px">
                <h5 class="text-center">Trang web này không đủ dữ liệu</h5>

                <div class="more-tool-fff">
                    <a class="button" target="top" href="https://webrank.vn/">
                        <button class="btn btn-more">
                            Xem báo cáo website khác
                        </button>
                    </a>
                </div>
            </div>
        </section>

        <section id="section-content" style="display: none;">
            <div class="header-top">
                 <a id="link-header">
                    <div class="logo">
                        <img src="img/webrank.svg">
                        <span>Phân tích <span style="color:#27ae60">Website</span>
                        </span>
                    </div>
                </a>
                <div class="button-fff">
                    <a target="top" id="btn-go"><button class="btn btn-fff">Phân tích chi tiết</button></a>
                </div>
            </div>
            <div class="tabs-link">
                <ul>
                    <li class="active-link">
                        <a target="top" id="overview" href="">
                            <i class="fad fa-globe-europe"></i>
                            <div>OverView</div>
                        </a>
                    </li>
                    <li>
                        <a target="top" id="organic" href="">
                            <i class="fad fa-newspaper text-danger"></i>
                            <div>Organic</div>
                        </a>
                    </li>
                    <li>
                        <a target="top" id="ads" href="">
                            <i class="fad fa-audio-description text-warning"></i>
                            <div>Google Ads</div>
                        </a>
                    </li>
                    <li>
                        <a target="top" id="display" href="">
                            <i class="fad fa-browser text-success"></i>
                            <div>Display Ads</div>
                        </a>
                    </li>
                    <li>
                        <a target="top" id="social" href="">
                            <i class="fas fa-signal text-primary"></i>
                            <div>Social</div>
                        </a>
                    </li>
                    <li>
                        <a target="top" id="backlink" href="">
                            <i class="fas fa-link text-dark"></i>
                            <div>Backlink</div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="header-fff">
                <div class="title-web">
                    <img id="icon-domain">
                    <div class="website"></div>
                </div>

                <div class="position-relative">
                    <div id="content-header" class="is-loading">
                    </div>
                </div>

                <div class="box-rank-fff">
                    <div class="box-rank-child world">
                        <i class="fad fa-globe-asia"></i>
                        <!-- <img src="img/world-icon.png" alt=""> -->
                        <div class="right">
                            <span>Thế Giới</span>
                            <p id="rank-global"></p>
                        </div>
                    </div>
                    <div class="box-rank-child country">
                        <i class="fas fa-star"></i>
                        <div class="right">
                            <span>Việt Nam</span>
                            <p id="rank-country"></p>
                        </div>
                    </div>
                </div>

            </div>



            <div class="total-traffic">

                <div class="content-totalTraffic">
                    <div class="title text-center">
                        Giá trị ước tính
                        <!-- <p class="similarDates"></p> -->
                    </div>
                    <div class="position-relative">
                        <div class="totalTrafficValue totalTraffic-Parent is-loading">
                            <h2 style="color: #0abb87;" id="estmatedWorth"></h2>
                        </div>
                    </div>

                </div>
                <div class="content-totalTraffic">
                    <div class="title text-center">
                        Tổng lượt truy cập
                        <!-- <p class="similarDatesD"></p> -->
                    </div>
                    <div class="position-relative">
                        <div class="totalTrafficValue totalTraffic-Parent is-loading">
                            <h2 id="totalTraffic"></h2>
                        </div>
                    </div>
                </div>


            </div>


            <div class="content-visit-overtime box-content">
                <div class="title title-visit-overtime">
                    Lượt truy cập theo thời gian
                    <p class="similarDates"></p>
                </div>
                <div class="position-relative">
                    <div id="getTrafficAndEngagementVisitsMonthly" class="is-loading"
                        style="width: 400px; height: 250px;">
                    </div>
                </div>

                <div class="detail-visit-overview d-none">
                    <div class="slide-detail">
                        <div class="left">
                            <span>Tỷ lệ thoát trang</span>
                        </div>
                        <span class="right BounceRate">
                        </span>
                    </div>

                    <div class="slide-detail">
                        <div class="left">
                            <span>Thời gian truy cập trung bình
                            </span>
                        </div>
                        <span class="right AvgVisitDuration">

                        </span>
                    </div>
                    <div class="slide-detail">
                        <div class="left">
                            <span>Số trang/Lượt truy cập
                            </span>
                        </div>
                        <span class="right PagesperVisit">

                        </span>
                    </div>
                    <div class="slide-detail" style="border:0">
                        <div class="left">
                            <span>Lượt truy cập hàng tháng
                            </span>
                        </div>
                        <span class="right MonthlyVisits">
                        </span>
                    </div>
                </div>
            </div>


            <div class="content-totalTrafficDevice box-content">

                <div class="title-totalTrafficDevice title">
                    Truy cập theo thiết bị
                    <p class="similarDates"></p>
                </div>

                <div class="position-relative">
                    <div id="getDesktopVsMobileVisits" class="is-loading"
                        style="width:400px;height: 250px;margin: 5px 0px;">
                    </div>
                </div>

                <!-- <div class="no-data" style="padding:20px 0;">
                    <div style="color: #333;
                margin: 20px;
                text-align: center;
                font-weight: 400;">Không đủ dữ liệu</div>
                </div> -->
            </div>


            <div class="content-getTrafficGeographyOverview box-content">
                <div class="title title-getTrafficGeographyOverview">
                    Truy cập theo quốc gia
                    <p class="similarDates"></p>
                </div>

                <div class="position-relative">
                    <div id="getWebsiteGeography" class="is-loading">

                    </div>
                </div>

            </div>

            <div class="content-totalTrafficDevice  box-content">
                <div class="title-totalTrafficDevice title">
                    Nguồn khách hàng
                    <p class="similarDates"></p>
                </div>
                 
                <div class="position-relative">
                    <div id="getTrafficSourcesOverview" class="is-loading" style="width:400px;height: 280px;">
                    </div>
                </div>
               
            </div>

            <!-- <div class="more-tool-fff more-position">
                <a class="button more" target="top">
                    <button class="btn btn-more">
                        xem phân tích chi tiết
                    </button>
                </a>
            </div> -->

            <div class="more-tool-fff mt-2 pb-5 more-header">
                <!-- <div class="more-tool no-select">
                    <a target="top" href="https://go.fff.com.vn/">
                        <div class="tool">
                            <img src="img/phantich.svg">
                            Công cụ phân tích
                        </div>
                    </a>
                </div> -->
                <div class="title font-14 pb-2 pl-2 pr-2">Báo cáo traffic, seo, google ads, backlink, social tất cả trong một tại webrank.vn</div>
                <a class="button" target="top" id="more-traffic">
                    <button class="btn btn-more">
                        <i class="fas fa-search-plus"></i> Báo cáo chi tiết
                    </button>
                </a>
               
            </div>



        </section>
        <!-- <div class="bb"></div> -->
    </div>
</body>
<script type='text/javascript' src="js/lib/jquery.min.js"></script>
<script src="js/lib/numeral.min.js"></script>
<script src="js/lib/numeral-vi.min.js"></script>
<script src="js/lib/moment.min.js"></script>
<script src="js/lib/ResizeSensor.js"></script>
<script src="js/shared.min.js"></script>
<script src="js/lib/echarts.min.js"></script>

</html>