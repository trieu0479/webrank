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
                            href="./?view=analyze-competitor&action=index">Website Traffic </a> </div>
                </div>

            </div>
            <!-- sub menu -->
            <div class="row">
                <div class="col-12">
                    <div class="px-3 px-md-5">
                        <div class="row justify-content-center pt-6">
                            <?php require_once(__DIR__."/modules/master.topbox.php")?>
                            <div class="col-12">
                                <div class="content-table mt-5 text-left d-none" style="max-width: 850px;margin:auto">
                                    <div class="font-gg font-weight-500 font-16 mb-3">
                                        Danh sách:
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-qc-format" style="white-space: nowrap;">
                                            <thead>
                                                <tr class="">
                                                    <th scope="col" class="font-weight-bold">STT</th>
                                                    <th scope="col" class="font-weight-bold">Domain</th>
                                                    <th scope="col" class="font-weight-bold">Ngày xem</th>
                                                    <th scope="col" class="font-weight-bold">Trạng thái</th>
                                                    <th scope="col" class="font-weight-bold">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-content-ads">
                                            </tbody>
                                        </table>
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                            </ul>
                                        </nav>
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
<script src="dist/js/pages/traffic-website/index.js"></script>
<script src="dist/js/pages/traffic-website/compareDomain.js"></script>