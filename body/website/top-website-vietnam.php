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
                            href="<?=$rootURL?>">Website</a> </div>
                    <div class="align-self-center ml-3 mr-3">
                        <i class="fas fa-chevron-right text-muted"></i>
                    </div>
                    <div class="align-self-center font-14" style="color: rgba(79,80,80,.7);"> <a
                            href="<?=$rootURL?>/top-website-vietnam">Top Website Tại Việt Nam</a> </div>
                </div>

            </div>
            <!-- sub menu -->
            <div class="row px-4 pl-lg-2">
                <div class="col-12">
                    <div class="px-0 px-lg-5">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center maxWidthPc-800 mt-5">
                                <?php require_once(__DIR__."/modules/master.topbox.php")?>
                            </div>

                            <div class="col-12 mx-auto mb-3 mt-5 maxWidthPc-1280">
                                <div class="row">
                                    <div class="col-12 col-md-2 col-lg-2 px-lg-2 px-md-0 px-0 px-md-2">

                                        <div class="kt-portlet kt-portlet--height-fluid d-none d-md-block d-lg-block">
                                            <div class="kt-portlet__head bg-dark">
                                                <div class="kt-portlet__head-label d-flex align-items-lg-center">
                                                    <h3 class="kt-portlet__head-title pt-3 pt-md-1  text-white fontSize-14">
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

                                        <!-- menu mobi -->
                                            <div class="dropdown d-block d-md-none mb-3 position-relative">
                                                <button class="btn bg-white dropdown-toggle w-100" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false"> Danh mục
                                                </button>
                                                <ul class="dropdown-menu catalogPTMB w-100 p-0" style="max-height:300px;overflow-y: scroll;" 
                                                    aria-labelledby="dropdownMenuButton" x-placement="top-start">
                                                    
                                                </ul>
                                            </div>


                                    </div>
                                    <div class="col-12 col-md-10 col-lg-10 px-0 px-lg-2 px-md-2">
                                        <div class="content-table text-left bg-white" style="margin:auto">

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
<script src="<?=$rootURL?>/dist/js/pages/my-function/init-function.js"></script>
<script src="<?=$rootURL?>/dist/js/pages/website/index.js?v=<?=$version?>"></script>
<!-- <script src="dist/js/pages/traffic-website/compareDomain.js"></script> -->