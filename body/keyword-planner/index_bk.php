
<div class="page-wrapper">
    <div class="container-fluid p-0 pt-0">
        <div class="page-content pt-0">
            <!-- sub menu -->
            <div class="sub-header border-bottom pl-4 pt-3 pb-3 bg-white">
                <div class="d-flex no-block">
                    <div class="align-self-center font-14 mr-3">
                        <a href="https://admin.fff.com.vn/insight?userToken=<?=$userToken?>" class="" style="color: rgba(79,80,80,.7)!important;">Phân Tích</a>
                    </div>
                    <div class="align-self-center mr-3">
                        <i class="fas fa-chevron-right text-muted"></i>
                    </div>
                    <div class="align-self-center font-14" style="color: rgba(79,80,80,.7);"> <a href="./?view=keyword-planner&action=index">Từ khóa</a> </div>
                </div>

            </div>
            <!-- sub menu -->
            <div class="keywordWapper">
                <!-- box 1-->
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="py-5 h-100">
                            <div class="font-gg font-weight-500 fontsize-16 text-success text-center">
                                Keyword Planner
                            </div>
                            <div class="font-gg font-weight-400 fontsize-32 text-center">
                                Phân Tích Từ Khóa Cho SEOer và SEM
                            </div>
                            <div class="text-center extensionLogo">
                                    <a target="blank" href="https://chrome.google.com/webstore/detail/ph%C3%A2n-t%C3%ADch-t%E1%BB%AB-kh%C3%B3a-keyword/gamgpnolibdghflagmlghmpncjgonchn"><img src="./dist/images/chrome-extension.png" class="mr-2"></a>
                                <a target="blank" href="https://addons.mozilla.org/en-US/firefox/addon/keyword-planner/"><img src="./dist/images/firefox-extension.png" class="mr-2"></a>
                                <a target="blank" href="https://microsoftedge.microsoft.com/addons/detail/gcamcdaeilhnapdifpjhglnoddfponnf"><img src="./dist/images/edge-extension.png" ></a>
                            </div>
                            
                            <div class="font-gg text-muted font-12 text-center mt-3 font-weight-400">
                                Khám phá các từ khóa mới giúp bạn thực hiện chiến dịch SEO và SEM (Google Ads) thành công hơn. Cung cấp đầy đủ các chỉ số quan trọng như: khối lượng tìm kiếm, độ khó từ khóa, mức độ cạnh tranh, loại từ khóa ...
                            </div>
                            
                            <?require_once(__DIR__."/selectbox.php"); ?>

                            
                        </div>
                    </div>

                </div>
                <!-- box 1-->
                <!-- box 2-->
                <div class="row">
                    <div class="col-12">
                        <div class="content-table mt-5 text-left m-auto" style="white-space:nowrap">
                            <div class="font-gg font-weight-500 font-16 mb-3">
                                Lịch sử phân tích
                            </div>
                            <div class="table-responsive">
                                <table class="table table-kw-format" id="table-kw-format">
                                    <thead>
                                        <tr class="">
                                            
                                        </tr>
                                    </thead>
                                    <tbody id="table-keyword-ads">
                                    </tbody>
                                </table>
                                <nav aria-label="...">
                                    <ul class="pagination">
                                    </ul>
                                </nav>
                            </div>
                        </div> 
                    </div>
                </div>
                <!-- box 2-->
                <!-- box 3-->
                <div class="row">
                    <div class="col-6">
                        <div class="widget-get30DayYoutubeSearchTrend"></div>
                    </div>
            </div>
                <!-- box 3-->
            </div>
           

            <div class="row">
                <div class="col-12">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center" style="max-width: 900px">
                                <div class="py-5 h-100">
                                    <div class="font-gg font-weight-500 fontsize-16 text-success text-center">
                                        Keyword Planner
                                    </div>
                                    <div class="font-gg font-weight-400 fontsize-32 text-center">
                                        Phân Tích Từ Khóa Cho SEOer và SEM
                                    </div>
                                    <div class="text-center extensionLogo">
                                         <a target="blank" href="https://chrome.google.com/webstore/detail/ph%C3%A2n-t%C3%ADch-t%E1%BB%AB-kh%C3%B3a-keyword/gamgpnolibdghflagmlghmpncjgonchn"><img src="./dist/images/chrome-extension.png" class="mr-2"></a>
                                        <a target="blank" href="https://addons.mozilla.org/en-US/firefox/addon/keyword-planner/"><img src="./dist/images/firefox-extension.png" class="mr-2"></a>
                                        <a target="blank" href="https://microsoftedge.microsoft.com/addons/detail/gcamcdaeilhnapdifpjhglnoddfponnf"><img src="./dist/images/edge-extension.png" ></a>
                                    </div>
                                 
                                    <div class="font-gg text-muted font-12 text-center mt-3 font-weight-400">
                                        Khám phá các từ khóa mới giúp bạn thực hiện chiến dịch SEO và SEM (Google Ads) thành công hơn. Cung cấp đầy đủ các chỉ số quan trọng như: khối lượng tìm kiếm, độ khó từ khóa, mức độ cạnh tranh, loại từ khóa ...
                                    </div>
                                   
                                    <?require_once(__DIR__."/selectbox.php"); ?>

                                   
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="content-table mt-5 text-left m-auto" style="max-width: 900px;white-space:nowrap">
                                    <div class="font-gg font-weight-500 font-16 mb-3">
                                        Lịch sử phân tích
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-kw-format" id="table-kw-format">
                                            <thead>
                                                <tr class="">
                                                  
                                                </tr>
                                            </thead>
                                            <tbody id="table-keyword-ads">
                                            </tbody>
                                        </table>
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                            </ul>
                                        </nav>
                                    </div>
                                </div> 
                            </div>
                           

                            <!-- tinh nang -->
                            <div class="col-12  d-none">
                                <div class="container mt-5">
                                <!-- Title -->
                                <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
                                    <span class="btn btn-label-success btn-pill  mb-2">Tính Năng Nổi Bật</span>
                                    <h2 class="text-primary font-gg font-weight-400 fontsize-32 text-center">Công Cụ SEO & SEM <span class="font-weight-semi-bold ">Việt</span></h2>
                                    <p>Keyword Planner đưa ra hàng ngàn gợi ý từ khoá, giúp bạn dễ dàng vượt qua đói thủ trong các chiến dịch SEO và SEM</p>
                                </div>
                                <div class="row  mt-5">
                                    <div class="col-md-4 mb-7 mb-md-0">
                                    <!-- Feature1 -->
                                    <div class="text-center">
                                        <div class="position-relative">
                                        <div id="SVGcircleProcess1" class="u-indicator-dots min-height-155 mb-2" style="">
                                            <!-- Icon -->
                                            <span class="text-success btn btn-lg btn-icon mt-7">
                                            <span class="fad fa-radar fontsize-48"></span>
                                            </span>
                                            <!-- End Icon -->

                                            <!-- SVG Shape -->
                                            <figure class="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="180px" height="161px" viewBox="0 0 180 161.2" style="enable-background:new 0 0 180 161.2;" xml:space="preserve" class="injected-svg js-svg-injector" data-parent="#SVGcircleProcess1">
                            <style type="text/css">
                                .circle-process-1-0{fill:none;stroke:#00C9A7;}
                                .circle-process-1-1{fill:#FFFFFF;}
                                .circle-process-1-2{fill:#00C9A7;}
                            </style>
                            <path class="circle-process-1-0 fill-none stroke-success" opacity=".1" stroke-width="2" stroke-miterlimit="10" d="M35.5,160.4C14.5,144.1,1,118.6,1,90C1,40.8,40.8,1,90,1s89,39.8,89,89c0,28.1-13,53.1-33.3,69.4"></path>
                            <g>
                                <path class="circle-process-1-1 fill-white" d="M5.8,64.1c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S7.5,64.1,5.8,64.1z"></path>
                                <path class="circle-process-1-2 fill-success" d="M5.8,59.2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S4.7,59.2,5.8,59.2 M5.8,57.2c-2.2,0-4,1.8-4,4   c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C9.8,58.9,8,57.2,5.8,57.2L5.8,57.2z"></path>
                            </g>
                            <g opacity=".1">
                                <circle class="circle-process-1-1 fill-white" cx="90.4" cy="89.6" r="28.6"></circle>
                                <path class="circle-process-1-2 fill-success" d="M90.4,76c7.5,0,13.6,6.1,13.6,13.6s-6.1,13.6-13.6,13.6s-13.6-6.1-13.6-13.6S82.9,76,90.4,76 M90.4,46   c-24.1,0-43.6,19.5-43.6,43.6s19.5,43.6,43.6,43.6S134,113.7,134,89.6S114.4,46,90.4,46L90.4,46z"></path>
                            </g>
                            </svg>
                                            </figure>
                                            <!-- End SVG Shape -->
                                        </div>
                                        </div>

                                        <h3 class="h5">Keep Track Of Real-time Data</h3>
                                        <p class="mb-md-0">For the keywords that you search, we provide you real-time metrics to ensure that you stay ahead in the competition.</p>
                                    </div>
                                    <!-- End Feature1 -->
                                    </div>

                                    <div class="col-md-4 mb-7 mb-md-0">
                                    <!-- Feature2 -->
                                    <div class="text-center">
                                        <div class="position-relative">
                                        <div id="SVGcircleProcess2" class="u-indicator-dots min-height-155 mb-2" style="">
                                            <!-- Icon -->
                                            <span class="text-primary btn btn-lg btn-icon mt-7">
                                            <span class="fas fa-chart-area font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span>
                                            </span>
                                            <!-- End Icon -->

                                            <!-- SVG Shape -->
                                            <figure class="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="180px" height="161px" viewBox="0 0 180 161.2" style="enable-background:new 0 0 180 161.2;" xml:space="preserve" class="injected-svg js-svg-injector" data-parent="#SVGcircleProcess2">
                            <style type="text/css">
                            .circle-process-2-0{fill:none;stroke:#377DFF;}
                            .circle-process-2-1{fill:#FFFFFF;}
                            .circle-process-2-2{fill:#377DFF;}
                            </style>
                            <path class="circle-process-2-0 fill-none stroke-primary" opacity=".1" stroke-width="2" stroke-miterlimit="10" d="M35.5,160.4C14.5,144.1,1,118.6,1,90C1,40.8,40.8,1,90,1s89,39.8,89,89c0,28.1-13,53.1-33.3,69.4"></path>
                            <g>
                            <path class="circle-process-2-1 fill-white" d="M5.8,64.1c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S7.5,64.1,5.8,64.1z"></path>
                            <path class="circle-process-2-2 fill-primary" d="M5.8,59.2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S4.7,59.2,5.8,59.2 M5.8,57.2c-2.2,0-4,1.8-4,4     c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C9.8,58.9,8,57.2,5.8,57.2L5.8,57.2z"></path>
                            </g>
                            <g opacity=".1">
                            <circle class="circle-process-2-1 fill-white" cx="90.4" cy="89.6" r="28.6"></circle>
                            <path class="circle-process-2-2 fill-primary" d="M90.4,76c7.5,0,13.6,6.1,13.6,13.6s-6.1,13.6-13.6,13.6s-13.6-6.1-13.6-13.6S82.9,76,90.4,76 M90.4,46     c-24.1,0-43.6,19.5-43.6,43.6s19.5,43.6,43.6,43.6S134,113.7,134,89.6S114.4,46,90.4,46L90.4,46z"></path>
                            </g>
                            </svg>
                                            </figure>
                                            <!-- End SVG Shape -->
                                        </div>
                                        </div>

                                        <h3 class="h5">In-Depth Analysis Of Niche</h3>
                                        <p class="mb-md-0">When you search your niche, an in-depth analysis is provided which include device ratio, top advertisers and more.</p>
                                        <!-- End Feature2 -->
                                    </div>
                                    </div>

                                    <div class="col-md-4">
                                    <!-- Feature3 -->
                                    <div class="text-center">
                                        <div id="SVGcircleProcess3" class="min-height-155 mb-2" style="">
                                        <!-- Icon -->
                                        <span class="text-danger btn btn-lg btn-icon mt-7">
                                            <span class="fas fa-map-marked-alt font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span>
                                        </span>
                                        <!-- End Icon -->

                                        <!-- SVG Shape -->
                                            <figure class="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="180px" height="161px" viewBox="0 0 180 161.2" style="enable-background:new 0 0 180 161.2;" xml:space="preserve" class="injected-svg js-svg-injector" data-parent="#SVGcircleProcess3">
                            <style type="text/css">
                            .circle-process-3-0{fill:none;stroke:#DE4437;}
                            .circle-process-3-1{fill:#FFFFFF;}
                            .circle-process-3-2{fill:#DE4437;}
                            </style>
                            <path class="circle-process-3-0 fill-none stroke-danger" opacity=".1" stroke-width="2" stroke-miterlimit="10" d="M35.5,160.4C14.5,144.1,1,118.6,1,90C1,40.8,40.8,1,90,1s89,39.8,89,89c0,28.1-13,53.1-33.3,69.4"></path>
                            <g>
                            <path class="circle-process-3-1 fill-white" d="M5.8,64.1c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S7.5,64.1,5.8,64.1z"></path>
                            <path class="circle-process-3-2 fill-danger" d="M5.8,59.2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S4.7,59.2,5.8,59.2 M5.8,57.2c-2.2,0-4,1.8-4,4     c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C9.8,58.9,8,57.2,5.8,57.2L5.8,57.2z"></path>
                            </g>
                            <g opacity=".1">
                            <circle class="circle-process-3-1 fill-white" cx="90.4" cy="89.6" r="28.6"></circle>
                            <path class="circle-process-3-2 fill-danger" d="M90.4,76c7.5,0,13.6,6.1,13.6,13.6s-6.1,13.6-13.6,13.6s-13.6-6.1-13.6-13.6S82.9,76,90.4,76 M90.4,46     c-24.1,0-43.6,19.5-43.6,43.6s19.5,43.6,43.6,43.6S134,113.7,134,89.6S114.4,46,90.4,46L90.4,46z"></path>
                            </g>
                            </svg>
                                            </figure>
                                            <!-- End SVG Shape -->
                                        </div>

                                        <h3 class="h5">Supports Any Location</h3>
                                        <p class="mb-md-0">We can even give you keywords data of any city that you are targeting to make sure that you reach your target audience aptly.</p>
                                        <!-- End Feature3 -->
                                    </div>
                                    </div>
                                </div>
                                <div class="container mt-6">
                                <!-- Title -->
                                <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
                                    <span class="btn btn-label-success btn-pill  mb-2">Tính Năng Nổi Bật</span>
                                    <h2 class="text-primary font-gg font-weight-400 fontsize-32 text-center">Công Cụ SEO & SEM <span class="font-weight-semi-bold ">Việt</span></h2>
                                    <p>Keyword Planner đưa ra hàng ngàn gợi ý từ khoá, giúp bạn dễ dàng vượt qua đói thủ trong các chiến dịch SEO và SEM</p>
                                </div>
                                <!-- End Title -->
                                <!-- rơw -->
                                <div class="row justify-content-lg-between align-items-center mt-6">
                                    <div class="col-md-6 order-md-2 col-lg-5 mb-md-0">
                                        <div class="pt-5">
                                            <!-- Info -->
                                            <div class="media mb-7">
                                            <span class="btn btn-brand btn-elevate btn-circle btn-icon">1</span>
                                           
                                            <div class="media-body ml-4">
                                                <h3 class="fontSize-36">42 Ngôn Ngữ</h3>
                                                <p>Tích hợp 45 ngôn ngữ, giúp bạn phân tích từ khoá chính xác hơn</p>
                                            </div>
                                            </div>
                                            <!-- End Info -->
                                            <!-- Info -->
                                            <div class="media mb-6">
                                            <span class="btn btn-brand btn-elevate btn-circle btn-icon">2</span>
                                            <div class="media-body ml-4">
                                                <h3 class="fontSize-36">240 Quốc Gia</h3>
                                                <p>Hỗ trợ 240 quốc gia giúp bạn target chính xác lãnh thổ cần phân tích</p>
                                            </div>
                                            </div>
                                            <!-- End Info -->
                                         
                                        </div>
                                    </div>
                                    <div id="SVGellipseMockup" class="col-md-6" style="">
                                        <!-- SVG Mockup -->
                                        <figure class="ie-ellipse-mockup">
                                            <img id="mockup1" class="img-fluid js-svg-injector" src="./dist/images/01.png" alt="Dữ liệu thị trường"" data-parent="#SVGellipseMockup" height="500px">
                                        </figure>
                                        <!-- End SVG Mockup -->
                                    </div>
                                    <!-- rơw -->
                                </div>
                                <div class="row justify-content-lg-between align-items-center mt-6">
                                    <div class="col-md-6 col-lg-5 mb-md-0">
                                        <div class="pt-5">
                                            <!-- Info -->
                                            <div class="media mb-7">
                                            <span class="btn btn-brand btn-elevate btn-circle btn-icon">3</span>
                                            <div class="media-body ml-4">
                                                <h3 class="fontSize-36">Nhiều từ khoá</h3>
                                                <p>Dễ dàng phân tích nhiều từ khoá, chỉ cần đặt các từ khoá ngăn cách nhau bởi đấu ","</p>
                                            </div>
                                            </div>
                                            <!-- End Info -->
                                            <!-- Info -->
                                            <div class="media mb-6">
                                            <span class="btn btn-brand btn-elevate btn-circle btn-icon">4</span>
                                            <div class="media-body ml-4">
                                                <h3 class="fontSize-36">Chỉ số đa dạng</h3>
                                                <p>Cung cấp nhiều chỉ số phân tích giúp bạn dễ dàng chọn được từ khoá chất lượng</p>
                                            </div>
                                            </div>
                                            <!-- End Info -->
                                            <!--
                                            <a class="btn btn-primary btn-wide btn-pill transition-3d-hover" href="">Get Started <span class="fas fa-angle-right ml-2"></span></a>
                                            -->
                                        </div>
                                    </div>
                                    <div id="SVGellipseMockup" class="col-md-6" style="">
                                        <!-- SVG Mockup -->
                                        <figure class="ie-ellipse-mockup">
                                            <img id="mockup1" class="img-fluid js-svg-injector" src="./dist/images/02.png" alt="Market Analysis" data-parent="#SVGellipseMockup" height="590px">
                                        </figure>
                                        <!-- End SVG Mockup -->
                                    </div>
                                    <!-- rơw -->
                                    <div class="row justify-content-lg-between align-items-center mt-6">
                                        <div class="col-md-6 order-md-2 col-lg-5 mb-md-0">
                                            <div class="pt-5">
                                            <!-- Info -->
                                            <div class="media mb-7">
                                                <span class="btn btn-brand btn-elevate btn-circle btn-icon">5</span>
                                                <div class="media-body ml-4">
                                                    <h3 class="fontSize-36">Dự báo SEM</h3>
                                                    <p>Dự báo chi phí, số click chuột, và tỉ lệ CTR cho chiến dịch Google Ads của bạn</p>
                                                </div>
                                            </div>
                                            <!-- End Info -->
                                            <!-- Info -->
                                            <div class="media mb-7">
                                                <span class="btn btn-brand btn-elevate btn-circle btn-icon">6</span>
                                                <div class="media-body ml-4">
                                                    <h3 class="fontSize-36 ">Lịch sử 12 tháng</h3>
                                                    <p>Xem xét lịch sử từ khoá 12 tháng, từ dữ liệu quá khứ giúp bạn cải thiện hiệu quả tương lại</p>
                                                </div>
                                            </div>
                                            <!-- End Info -->
                                            <!--
                                                <a class="btn btn-primary btn-wide btn-pill transition-3d-hover" href="">Get Started <span class="fas fa-angle-right ml-2"></span></a>
                                                -->
                                            </div>
                                        </div>
                                        <div id="SVGellipseMockup" class="col-md-6" style="">
                                            <!-- SVG Mockup -->
                                            <figure class="ie-ellipse-mockup">
                                            <img id="mockup1" class="img-fluid js-svg-injector" src="./dist/images/03.png" alt="Market Analysis" data-parent="#SVGellipseMockup" height="590px">
                                            </figure>
                                            <!-- End SVG Mockup -->
                                        </div>
                                        <!-- rơw -->
                                    </div>
                                </div>
                                </div>
                            <!-- tinh nang -->
                           
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>

<script src="dist/js/pages/keyword-planner/init-function.js"></script>
<script src="dist/js/pages/keyword-planner/index.js?v=<?=$version?>"></script> 
<script src="dist/js/pages/keyword-planner/initfunction.js?v=<?=$version?>"></script> 
 