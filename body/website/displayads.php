<div class="page-wrapper">
    <div class="container widgetContainer">
        <div class="page-contents pt-5">
            <div class="topbox"><? require_once(__DIR__ . "/modules/master.topbox.php") ?></div>

            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__ . "/modules/master.navbar.php") ?>
                </div>
            </div>
            <!-- -----over view display ads---------------------- -->
            <div class="row displayAdsOverview">

            </div>
            <!-- --------------------------------sample-ads-------------------------------------- -->
            <div class="row" >
                <?php require_once(__DIR__ . "/modules/displayads.widgetSampleAds.php") ?>
            </div>
             <!-- ---------------3 chart- -->
             <div class="row mb-0">
                <div class="col-12 col-lg-4 ">
                    <div class="widget-getDisplayCountryChart">
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="widget-getDisplayGenderChart">
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="widget-getDisplayAgeChart">
                    </div>
                </div>
            </div>
            <!-- -------------------------------------------truy cap quang cao hie nthi kenh qc nguon qc------------------------------- -->
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="widget-getTrafficDisplayAdvertisingAds"></div>
                </div>
                <div class="col-12 col-lg-6 ">
                    <div class="widget-getTrafficDestinationAds"></div>
                </div>
            </div>
            <!-- ----------------------top publicser ft adtype------- -->
            <div class="row">
                <?php require_once(__DIR__ . "/modules/displayads.widgetToppublicsher.php") ?>
                <?php require_once(__DIR__ . "/modules/displayads.widgetAdtypes.php") ?>
            </div>

            <!-- ------------------------------mau quang cao va trang nguo nquang cao -->
            <div class="row">
                <div class="col-12 col-lg-4">
                    <div class="getWebsiteAdsVisitsOverview"></div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="widget-getTrafficDisplayAdvertisingWebsitesTable"></div>
                </div>
            </div>

            <!-- ---------------display device- -->
            <div class="row">
                <?php require_once(__DIR__ . "/modules/displayads.widgetDisplayDevice.php") ?>
            </div>
           <div class="row">
             <div class="col-12 col-lg-12">
                <div class="widget-PublicSherTable"></div>
             </div>
           </div>



           


        </div>
    </div>
</div>
<script>
    $(document).ready(() => {
        $('[data-toggle="tooltip"]').tooltip();
    })
</script>
<script src="<?=$rootURL?>/assets/js/wordcloud2.js"></script>
<script src="<?=$rootURL?>/assets/js/ResizeSensor.js"></script>
<script src="<?=$rootURL?>/dist/js/pages/my-function/init-function.js"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/master.js?v=<?= $version ?>"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/displayads/index.js?v=<?= $version ?>"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/displayads/callechartFunction.js?v=<?= $version ?>"></script>