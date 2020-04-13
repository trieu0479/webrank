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
                    href="<?=$rootURL?>/index.php?view=website&action=displayads&domain=<?=$_GET['domain']?>">Display
                    Ads</a> </div>
        </div>

    </div>
    <div class="container widgetContainer">
        <div class="page-contents pt-5">
            <div class="topbox">
                <? require_once(__DIR__ . "/modules/master.topbox.php") ?>
            </div>

            <div class="row">

                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__ . "/modules/master.navbar.php") ?>
                </div>

                <div class="col-12 mb-0" id="Parent-displayAdsOverview" style="position: relative">
                    <div class="row displayAdsOverview"></div>
                </div>

                <div class="col-12 mb-0">
                    <?php require_once(__DIR__ . "/modules/displayads.khanh.widgetSampleAds.php") ?>
                </div>

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

                <div class="col-12 col-lg-6">
                    <div class="widget-getTrafficDisplayAdvertisingAds"></div>
                </div>
                <div class="col-12 col-lg-6 ">
                    <div class="widget-getTrafficDestinationAds"></div>
                </div>

                <div class="col-12 col-lg-6">
                    <?php require_once(__DIR__ . "/modules/displayads.khanh.widgetToppublicsher.php") ?>
                </div>
                
                <div class="col-12 col-lg-6">
                    <?php require_once(__DIR__ . "/modules/displayads.khanh.widgetAdtypes.php") ?>
                </div>

                <div class="col-12 col-lg-4">
                    <div class="getWebsiteAdsVisitsOverview"></div>
                </div>

                <div class="col-12 col-lg-8">
                    <div class="widget-getTrafficDisplayAdvertisingWebsitesTable"></div>
                </div>

                <div class="col-12 p-0 mb-0">
                    <?php require_once(__DIR__ . "/modules/displayads.widgetDisplayDevice.php") ?>
                </div>

                <div class="col-12">
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
<script src="<?= $rootURL ?>/assets/js/wordcloud2.js"></script>
<script src="<?= $rootURL ?>/assets/js/ResizeSensor.js"></script>
<script src="<?= $rootURL ?>/dist/js/pages/my-function/init-function.js"></script>
<script type="module" src="<?= $rootURL ?>/dist/js/pages/website/master.js?v=<?= $version ?>"></script>
<script type="module" src="<?= $rootURL ?>/dist/js/pages/website/displayads.khanh/index.js?v=<?= $version ?>"></script>
<script type="module"
    src="<?= $rootURL ?>/dist/js/pages/website/displayads.khanh/callechartTableFunction.js?v=<?= $version ?>"></script>