<link href="dist/css/pages/Analyze-Competitor/Analyze-Competitor.css" rel="stylesheet">
<div class="page-wrapper">
    <div class="container-fluid p-0 pt-0">
        <div class="page-content pt-0">
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
                            href="./?view=analyze-competitor&action=index">Đối thủ</a> </div>
                </div>

            </div>
            <!-- sub menu -->
            <div class="row">
                <div class="col-12">
                    <div class="px-0 px-lg-5">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center maxWidthPc-800">
                            <?php require_once(__DIR__."/modules/master.topbox.php")?>
                            </div>
                         
                            <div class="col-9 mx-auto mb-3">
                                <div class="row">
                                    <div class="col-12 col-lg-3 pl-0">
                                        <div class="kt-portlet kt-portlet--height-fluid">
                                            <div class="kt-portlet__head">
                                                <div class="kt-portlet__head-label d-flex align-items-lg-center">
                                                    <h3 class="kt-portlet__head-title">
                                                        Danh mục
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="kt-portlet__body">
                                                <div class="kt-widget6">
                                                    <div class="kt-widget6__body" id="catalogPT">
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-9 pr-0">
                                        <div class="content-table text-left bg-white"
                                            style="max-width: 1080px;margin:auto">

                                            <div class="table-responsive">
                                                <table class="table table-qc-format mb-0" id="tablePTDT">
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<script src="dist/js/pages/my-function/init-function.js"></script>
<script src="dist/js/pages/website/index.js"></script>
<!-- <script src="dist/js/pages/traffic-website/compareDomain.js"></script> -->