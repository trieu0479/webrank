<div class="page-wrapper">
            <!-- sub menu -->
            <div class="sub-header border-bottom pl-4 pt-3 pb-3 bg-white">
                <div class="d-flex no-block">
                    <div class="align-self-center font-14 mr-3">
                        <a href="./" class="" style="color: rgba(79,80,80,.7);">Phân tích</a>
                    </div>
                    <div class="align-self-center mr-3">
                        <i class="fas fa-chevron-right text-muted"></i>
                    </div>
                    <div class="align-self-center font-14" style="color: rgba(79,80,80,.7);"> <a
                            href="<?=$rootURL?>">Website</a> </div>
                    <div class="align-self-center mr-3 ml-3">
                        <i class="fas fa-chevron-right text-muted"></i>
                    </div>
                    <div class="align-self-center font-14" style="color: rgba(79,80,80,.7);"> <a
                            href="<?=$rootURL?>/index.php?view=website&action=organic&domain=<?=$_GET['domain']?>">Organic Search</a> </div>
                </div>

            </div>
            <!-- sub menu -->
    <div class="container similarBody  widgetContainer">
        <div class="page-contents pt-5">
            <div class="topbox"><?require_once(__DIR__."/modules/master.topbox.php")?></div>
            
            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__."/modules/master.navbar.php")?>
                </div>
            </div>
 
            <div class="row">
                <div class="col-12 ">
                    <div class="widget-getDomainOrganicDetail"></div>
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

            <div class="row">
                <div class="col-12 ">
                    <div class="widget-trafficKeywordTrend"></div>
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
                    <div style="height:100%" class="widget-organicCompetitors"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <div class="widget-getAdvertisingSearchDetail"></div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div style="height:100%" class="widget-getOrganicKeywordsBrandedTable"></div>
                </div>
                <div class="col-12 col-lg-6">
                    <div style="height:100%" class="widget-getOrganicKeywordsNonBrandedTable"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <div style="height:100%" class="widget-organicPositions"></div>
                </div>
                
            </div>
    </div>
</div>
<script src="<?=$rootURL?>/assets/js/wordcloud2.js"></script>
<script src="<?=$rootURL?>/assets/js/ResizeSensor.js"></script>
<script src="<?=$rootURL?>/dist/js/pages/my-function/init-function.js"></script>

<script type="module" src="<?=$rootURL?>/dist/js/pages/website/master.js?v=<?=$version?>"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/organic/index.js?v=<?=$version?>"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/organic/tableFunction.js?v=<?=$version?>"></script>
 <!-- thiếu nguồn truy câp website giới thiệu khách hàng===> làm thêm -->
 <!-- thêm API giá trị website -->