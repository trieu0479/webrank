<div class="page-wrapper">
    <div class="container widgetContainer">
        <div class="page-contents pt-5">
            <div class="topbox"><? require_once(__DIR__ . "/modules/master.topbox.php") ?></div>

            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__ . "/modules/master.navbar.php") ?>
                </div>
            </div>
              <!-- -----over view---------------------- -->
              <div class="row ggAdsOverview">                
                </div>
            <!-- -------------------------getScrapedSearchAds-------------- -->
            <div class="row">
                <div class="col-12 col-lg-12">
                        <?php require_once(__DIR__ . "/modules/googleads.widgetgetScrapedSearchAds.php")?>               
                </div>    
            </div>

          
            <!-- -------------paid search trewnds-------------- -->
            <div class="row">
                <?php require_once(__DIR__ . "/modules/googleads.widgetMonthlyFullTrend.php") ?>
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
                <?php require_once(__DIR__ . "/modules/googleads.widgetCompetitor.php")?>
                <div class="col-12 col-lg-6">
                    <div class="widget-CompetitorMapChart"></div>
                </div>
            </div>
          
           <!-- -------------------------widgetPaidPageTable-------------- -->
           <div class="row">
                <!-- <div class="col-12 col-lg-12"> -->
                        <?php require_once(__DIR__ . "/modules/googleads.widgetPaidPageTable.php")?>               
                <!-- </div>     -->
            </div>

        </div>
    </div>
    <script>
        $(document).ready(() => {
            $('[data-toggle="tooltip"]').tooltip();
        })
    </script>
    <script src="assets/js/wordcloud2.js"></script>
    <script src="assets/js/ResizeSensor.js"></script>
    <script src="dist/js/pages/my-function/init-function.js"></script>
    <script type="module" src="dist/js/pages/website/master.js?v=<?= $version ?>"></script>
    <script type="module" src="dist/js/pages/website/googleads/index.js?v=<?= $version ?>"></script>
    <script type="module" src="dist/js/pages/website/googleads/callechartFunction.js?v=<?= $version ?>"></script>