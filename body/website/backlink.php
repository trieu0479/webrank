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
                            href="<?=$rootURL?>/index.php?view=website&action=backlink&domain=<?=$_GET['domain']?>">Backlink</a> </div>
                </div>

            </div>
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

                <div class="col-12 col-lg-12">
                <?php require_once(__DIR__."/modules/backLink.TopBackLink.php")?>
                </div>

            </div>


        </div>
    </div>
    <script src="<?=$rootURL?>/assets/js/wordcloud2.js"></script>
    <script src="<?=$rootURL?>/assets/js/ResizeSensor.js"></script>
    <script src="<?=$rootURL?>/dist/js/pages/my-function/init-function.js"></script>
    <script type="module" src="<?=$rootURL?>/dist/js/pages/website/master.js?v=<?=$version?>"></script>
    <script type="module" src="<?=$rootURL?>/dist/js/pages/website/backlink/index.js?v=<?=$version?>"></script>
    <script type="module" src="<?=$rootURL?>/dist/js/pages/website/backlink/backLinkEchart.js?v=<?=$version?>"></script>
    <script type="module" src="<?=$rootURL?>/dist/js/pages/website/backlink/tableBackLink.js?v=<?=$version?>"></script>