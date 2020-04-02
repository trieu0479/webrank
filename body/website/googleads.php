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
                            href="<?=$rootURL?>/index.php?view=website&action=googleads&domain=<?=$_GET['domain']?>">Google Ads</a> </div>
                </div>

            </div>
            <!-- sub menu -->
    <div class="container widgetContainer">
        <div class="page-contents pt-5">
            <div class="topbox"><? require_once(__DIR__ . "/modules/master.topbox.php") ?></div>

            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__ . "/modules/master.navbar.php") ?>
                </div>
            </div>
            <!-- -----over view---------------------- -->
            <div id="Parent-ggAdsOverview" style="position: relative">             
                <div class="row ggAdsOverview">
                </div>
            </div>
            <!-- -------------paid search trewnds-------------- -->
            <div id="Parent-adwordsMonthlyFullTrend" style="position: relative"> 
                <div class="row adwordsMonthlyFullTrend">
                    <?php require_once(__DIR__ . "/modules/googleads.widgetMonthlyFullTrend.php") ?>
                </div>
            </div>
            
            <!-- -------------------------getScrapedSearchAds-------------- -->
            <div class="row">
                <div class="col-12 col-lg-12">
                    <?php require_once(__DIR__ . "/modules/googleads.widgetgetScrapedSearchAds.php") ?>
                </div>
            </div>


            
            <!-- ------------------top paid-keywords--------------- -->
            <div class="row">
                <?php require_once(__DIR__ . "/modules/googleads.widgetTopPaidKeyWord.php") ?>
                <div class="col-12 col-lg-6">
                    <div class="widget-PositionChart">

                    </div>
                </div>
            </div>
            <!-- ----------------main competitor---------- -->
            <div class="row">
                <?php require_once(__DIR__ . "/modules/googleads.widgetCompetitor.php") ?>
                <div class="col-12 col-lg-6">
                    <div class="widget-CompetitorMapChart"></div>
                </div>
            </div>

            <!-- -------------------------widgetPaidPageTable-------------- -->
            <div class="row">
                <!-- <div class="col-12 col-lg-12"> -->
                <?php require_once(__DIR__ . "/modules/googleads.widgetPaidPageTable.php") ?>
                <!-- </div>     -->
            </div>

        </div>
    </div>
    <script>
        $(document).ready(() => {
            $('[data-toggle="tooltip"]').tooltip();
        })
    </script>
    <script src="<?= $rootURL ?>/assets/js/wordcloud2.js"></script>
    <script src="<?= $rootURL ?>/assets/js/ResizeSensor.js"></script>
    <script src="<?= $rootURL ?>/dist/js/pages/my-function/init-function.js"></script>
    <script type="module" src="<?= $rootURL ?>/dist/js/pages/website/master.js?v=<?= $version ?>"></script>
    <script type="module" src="<?= $rootURL ?>/dist/js/pages/website/googleads/index.js?v=<?= $version ?>"></script>
    <!-- <script type="module" src="<?= $rootURL ?>/dist/js/pages/website/googleads/callechartFunction.js?v=<?= $version ?>"></script> -->
