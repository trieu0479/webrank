<div class="page-wrapper">
    <div class="container similarBody widgetContainer" id="backLinks">
        <div class="page-contents pt-5">
            <div class="topbox"><?php require_once(__DIR__."/modules/master.topbox.php")?></div>

            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__."/modules/master.navbar.php")?>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-12">
                    <?php require_once(__DIR__."/modules/backlink.wigdetHeader.php")?>
                </div>

                <div class="col-12 col-lg-12">
                    <?php require_once(__DIR__."/modules/backlink.widgetNewAndLost.php")?>
                </div>

                <div class="col-12 col-lg-12">
                    <?php require_once(__DIR__."/modules/backlink.widgetTotalBackLinks.php")?>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="widget-categories-refdomains"></div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="widget-anchors-cloud"></div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="widget-getDataZones"></div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="widget-getDataContry"></div>
                </div>

                <div class="col-12 col-lg-6">
                    <?php require_once(__DIR__."/modules/backlink.wighetBacklinkTypes.php")?>
                </div>


            </div>

        </div>
    </div>
    <script src="assets/js/wordcloud2.js"></script>
    <script src="assets/js/ResizeSensor.js"></script>
    <script src="dist/js/pages/my-function/init-function.js"></script>
    <script type="module" src="dist/js/pages/website/master.js?v=<?=$version?>"></script>
    <script type="module" src="dist/js/pages/website/backlink/index.js?v=<?=$version?>"></script>
    <script type="module" src="dist/js/pages/website/backlink/backLinkEchart.js?v=<?=$version?>"></script>
    <script type="module" src="dist/js/pages/website/backlink/tableBackLink.js"></script>