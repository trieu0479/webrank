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
            <!-- keywordWapper -->
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
                                <a target="blank" href="https://microsoftedge.microsoft.com/addons/detail/gcamcdaeilhnapdifpjhglnoddfponnf"><img src="./dist/images/edge-extension.png"></a>
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
                                <table class="table table-kw-format table-kw-format">
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
                        <div class="widget-get30DayYoutubeSearchTrend">
                             <div class="bg-white shadow">
                                <!-- widget header -->
                                <div class="row border-bottom m-0 py-3 widgetHeader">
                                    <div class="col-auto">
                                        <div class="text-capitalize font-weight-bold"><i class="fab fa-youtube mr-1"></i> Top từ khóa Youtube <span class="font-10">(<?=date("d/m",strtotime("-30 days"))?> - <?=date("d/m")?>)</span></div>
                                    </div>
                                </div>
                                <div class="widgetBody text-center">
                                    <div class="parrentBox parent-get30DayYoutubeSearchTrend">
                                        <table class="table table-striped  get30DayYoutubeSearchTrend"style="width:100%;height:100%;"></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                    <div class="widget-get30DayWebSearchTrend">
                             <div class="bg-white shadow">
                                <!-- widget header -->
                                <div class="row border-bottom m-0 py-3 widgetHeader">
                                    <div class="col-auto">
                                        <div class="text-capitalize font-weight-bold"><i class="fab fa-radar mr-1"></i> Top từ khóa Websearch <span class="font-10">(<?=date("d/m",strtotime("-30 days"))?> - <?=date("d/m")?>)</span></div>
                                    </div>
                                </div>
                                <div class="widgetBody text-center">
                                    <div class="parrentBox parent-get30DayWebSearchTrend">
                                        <table class="table table-striped  get30DayWebSearchTrend"style="width:100%;height:100%;"></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- box 3-->
                <!--box 4 --> 
                <div class="row mt-5"></div>
<!--box 4 --> 
            </div>
            <!-- keywordWapper -->


        </div>
    </div>
</div>

<script src="dist/js/pages/keyword-planner/init-function.js"></script>
<script src="dist/js/pages/keyword-planner/index.js?v=<?=$version?>"></script>
<script src="dist/js/pages/keyword-planner/initfunction.js?v=<?=$version?>"></script>