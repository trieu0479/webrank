<div class="page-wrapper">
    <div class="container similarBody  widgetContainer">
        <div class="page-contents pt-5">
            <div class="topbox"><?require_once(__DIR__."/modules/master.topbox.php")?></div>
            
            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__."/modules/master.navbar.php")?>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                        <?require_once(__DIR__."/modules/overivew.widgetHeader.php")?>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="swiper-container">
                        <div class="swiper-wrapper"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
                   
                    <div class="col-12 col-lg-6">
                        <div class="widget-getOrganicKeywordsTable"></div>
                    </div>
            </div>
 -->

            <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="widget-getTrafficSourcesSearch"></div>
                    </div>
                    <!-- <div class="col-12 col-lg-4">
                        <div class="widget-getOrganicKeywordsTable"></div>
                    </div> -->
                    <?require_once(__DIR__."/modules/organic.widgetSearch.php")?>
            </div>
            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="widget-getSearchBrandedKeywords"></div>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="widget-getOrganicKeywordsBrandedTable"></div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="widget-getOrganicKeywordsNonBrandedTable"></div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="widget-organicCompetitors"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <div class="widget-getAdvertisingSearchDetail"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <div class="widget-getDomainOrganicDetail"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <div class="widget-trafficKeywordTrend"></div>
                </div>
            </div>
    </div>
</div>
<script src="assets/js/wordcloud2.js"></script>
<script src="assets/js/ResizeSensor.js"></script>
<script src="dist/js/pages/my-function/init-function.js"></script>

<script type="module" src="dist/js/pages/website/master.js?v=<?=$version?>"></script>
<script type="module" src="dist/js/pages/website/organic/index.js?v=<?=$version?>"></script>
<script type="module" src="dist/js/pages/website/organic/tableFunction.js?v=<?=$version?>"></script>
 <!-- thiếu nguồn truy câp website giới thiệu khách hàng===> làm thêm -->
 <!-- thêm API giá trị website -->