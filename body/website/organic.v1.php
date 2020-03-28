<div class="page-wrapper">
    <div class="container BendmarksTool">
        <div class="page-contents pt-5">


            <!-- END HEADER -->
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="similarBody">
                    <div class="swiper-container mt-4 mb-4">
                        <div class="swiper-wrapper">
                        </div>
                        <!-- Add Pagination -->
                        <!-- <div class="swiper-pagination"></div> -->
                        <!-- Add Arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                <!-- loại tìm kiếm -->
                <div class="row">
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="bg-white shadow-sm rounded h-100">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                                rx="1" />
                                            <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                                rx="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Tỉ lệ truy cập từ tìm kiếm")?>
                                    </div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getTrafficSourcesSearch"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="p-20">
                                <div id="Parent-getTrafficSourcesSearch">
                                    <div id="getTrafficSourcesSearch" class="w-100 rounded is-loading"
                                        style="height: 200px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Tìm kiếm trả phí -->
                    <div class="col-12 col-lg-8 mb-4">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row m-0 pt-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <path
                                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                                id="Path-92" fill="#000000" fill-rule="nonzero" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        <?=_(" Chi tiết truy cập từ tìm kiếm")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getSearchOrganicPaidOverview"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div id="Parent-getSearchOrganicPaidOverviewpaid">
                                <div id="getSearchOrganicPaidOverviewpaid" class="rounded is-loading"
                                    style="min-height:250px">
                                    <ul class="nav nav-tabs customtab" role="tablist">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                                data-task="TrafficShare"
                                                href="#getSearchOrganicPaidOverviewpaid--TrafficShare" role="tab"><span
                                                    class=""><i class="fal fa-chart-pie-alt fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Lượng Truy Cập</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="AverageDuration"
                                                href="#getSearchOrganicPaidOverviewpaid--AverageDuration" role="tab"><span
                                                    class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Thời Gian Trung Bình</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="PagesPerVisit"
                                                href="#getSearchOrganicPaidOverviewpaid--PagesPerVisit" role="tab"><span
                                                    class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Số Trang / Lượt Truy Cập</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="BounceRate" href="#getSearchOrganicPaidOverviewpaid--BounceRate"
                                                role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                                <span class="d-none d-md-inline">Tỉ Lệ Thoát Trang</span></a> </li>
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="row">
                                        <div class="col-12 tab-content mt-1 mt-md-3">
                                            <div class="tab-pane px-4 active"
                                                id="getSearchOrganicPaidOverviewpaid--TrafficShare" role="tabpanel"
                                                style="height:250px"></div>
                                            <div class="tab-pane px-4"
                                                id="getSearchOrganicPaidOverviewpaid--AverageDuration" role="tabpanel"
                                                style="height:250px"></div>
                                            <div class="tab-pane px-4" id="getSearchOrganicPaidOverviewpaid--PagesPerVisit"
                                                role="tabpanel" style="height:250px"></div>
                                            <div class="tab-pane px-4" id="getSearchOrganicPaidOverviewpaid--BounceRate"
                                                role="tabpanel" style="height:250px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--hết Tìm kiếm trả phí -->
                    <!-- Tìm kiếm tự nhiên -->
                    <div class="col-12  mb-4">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row m-0 pt-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <path
                                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                                id="Path-92" fill="#000000" fill-rule="nonzero" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        <?=_(" Chi tiết truy cập từ tìm kiếm")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getSearchOrganicPaidOverview"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div id="Parent-getSearchOrganicPaidOverview">
                                <div id="getSearchOrganicPaidOverview" class="rounded is-loading"
                                    style="min-height:250px">
                                    <ul class="nav nav-tabs customtab" role="tablist">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                                data-task="TrafficShare"
                                                href="#getSearchOrganicPaidOverview--TrafficShare" role="tab"><span
                                                    class=""><i class="fal fa-chart-pie-alt fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Lượng Truy Cập</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="AverageDuration"
                                                href="#getSearchOrganicPaidOverview--AverageDuration" role="tab"><span
                                                    class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Thời Gian Trung Bình</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="PagesPerVisit"
                                                href="#getSearchOrganicPaidOverview--PagesPerVisit" role="tab"><span
                                                    class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Số Trang / Lượt Truy Cập</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="BounceRate" href="#getSearchOrganicPaidOverview--BounceRate"
                                                role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                                <span class="d-none d-md-inline">Tỉ Lệ Thoát Trang</span></a> </li>
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="row">
                                        <!-- <div class="col-12 col-md-3 pt-5 pt-md-0">
                                            <div id="getSearchOrganicPaidOverview--totalTraffic" class="d-flex no-block flex-column justify-content-center h-100"></div>
                                        </div> -->
                                        <div class="col-12 tab-content mt-1 mt-md-3">
                                            <div class="tab-pane px-4 active"
                                                id="getSearchOrganicPaidOverview--TrafficShare" role="tabpanel"
                                                style="height:250px"></div>
                                            <div class="tab-pane px-4"
                                                id="getSearchOrganicPaidOverview--AverageDuration" role="tabpanel"
                                                style="height:250px"></div>
                                            <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--PagesPerVisit"
                                                role="tabpanel" style="height:250px"></div>
                                            <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--BounceRate"
                                                role="tabpanel" style="height:250px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--hết Tìm kiếm tự nhiên -->
                    
                </div>
                <!-- đóng loại tìm kiếm -->
                <!--từ khoá truy cập theo tự nhiên-->
                <div class="row">
                    <div class="col-12 col-lg-5 mb-4">
                        <div class="h-100 bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                                rx="1" />
                                            <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                                rx="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        <?=_(" Tỉ lệ truy cập theo từ khoá tự nhiên")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getSearchBrandedKeywords"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="p-t-20">
                                <div id="Parent-getSearchBrandedKeywords">
                                    <div id="getSearchBrandedKeywords" class="w-100 rounded is-loading"
                                        style="height: 250px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7 mb-4">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12"
                                                r="10" />
                                            <path
                                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                                id="Combined-Shape" fill="#000000" opacity="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        Chi tiết truy cập theo từ khoá tự nhiên</div>
                                    <div class="text-muted similarDates-organickey font-10"></div>
                                </div>
                                <div class="ml-auto pr-2">
                                có thương hiệu
                                </div>
                            </div>
                            <div style="height:300px;">
                                <div id="Parent-getOrganicKeywordsTable">
                                    <table id="getOrganicKeywordsTable" class="table table-striped"
                                        style="width:100%;height:100%;"></table>
                                </div>
                            </div>
                            <a href="" class="font-13 mb-2 ml-3 py-2 px-3 bg-info text-white rounded d-inline-flex">XEM THÊM</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7 mb-4">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12"
                                                r="10" />
                                            <path
                                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                                id="Combined-Shape" fill="#000000" opacity="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        Chi tiết truy cập theo từ khoá tự nhiên</div>
                                    <div class="text-muted similarDates-organickeyno font-10"></div>
                                </div>
                                <div class="ml-auto pr-2">
                                    
                                    <span>Ko có thương hiệu</span>
                                </div>
                            </div>
                            <div style="height:300px;">
                                <div id="Parent-getOrganicKeywordsTable">
                                    <table id="getOrganicKeywordsTableno" class="table table-striped"
                                        style="width:100%;height:100%;"></table>
                                </div>
                            </div>
                            <a href="" class="font-13 mb-2 ml-3 py-2 px-3 bg-info text-white rounded d-inline-flex">XEM THÊM</a>
                        </div>
                    </div>
                </div>
                <!--đóng từ khoá truy cập theo tự nhiên-->
        </div>
        <a href="#page-wrapper" class="backtop" id="backtop"><i class="far fa-angle-up display-7"></i></a>
    </div>
</div>
<script src="assets/js/wordcloud2.js"></script>
<script src="assets/js/ResizeSensor.js"></script>
<script> var isLogin = '<?=$isLogin?>'; </script>
<script src="dist/js/pages/my-function/init-function.js"></script>
<script type="module" src="dist/js/pages//website/organic/organic.js?v=<?=$version?>"></script>
<script src="dist/dist/js/pages/bendmarks/scrolltop.js"></script>
<script>
var domain = url.searchParams.get("domain")
 </script>