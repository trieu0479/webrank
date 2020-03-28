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
                        <div class="row justify-content-center">
                            <div class="col-12 text-center maxWidthPc-800">
                                <div class="py-md-5 h-100 px-md-5">
                                    <div class="font-gg font-weight-500 fontsize-16 text-success text-center">
                                    Website Traffic 
                                    </div>
                                    <div class="font-gg font-weight-400 fontsize-32 text-center">
                                    Công cụ Phân tích Traffic Website 
                                    </div>
                                    <div class="mt-2">
                                        <span class="font-gg font-13 text-muted">Thiết bị: <span
                                                class="font-weight-500 text-dark ml-2">PC</span></span>
                                        <span class="font-gg font-14 text-muted font-weight-500 mx-2">|</span>
                                        <span class="font-gg font-13 text-muted">Ngày: <span
                                                class="font-weight-500 text-dark ml-2">06/02/2020</span></span>
                                        <span class="font-gg font-14 text-muted font-weight-500 mx-2">|</span>
                                        <span class="font-gg font-13 text-muted">Giới hạn: <span
                                                class="text-danger ml-2 font-weight-500 number"></span></span>
                                        <span class="font-gg font-14 text-muted font-weight-500 mx-2">|</span>
                                        <span class="font-gg font-13 font-weight-500 text-dark position-relative">Nâng
                                            cấp VIP<i class="ml-1 position-absolute far fa-crown text-warning"
                                                style="top: 0px"></i></span>
                                    </div>
                                    <div class="font-gg text-muted font-14 text-center mt-4 font-weight-400">
                                    Nhập vào tên miền website cần phân tích, công cụ sẽ phân tích các kênh quảng cáo của website và ước tính số khách hàng truy cập website từ những nguồn đó
                                    </div>
                                    <div class="text-center mt-5">
                                        <div class="input-group mt-5 w-100">
                                            <div class="input-group-prepend w-100" style="position: relative;">
                                                <input id="input-submit" type="text"
                                                    class="p-10 font-14 font-gg w-100 border"
                                                    autocomplete="off"
                                                    placeholder="Nhập tên miền website của bạn vào đây">
                                                <a href="javascript:void(0);" id="btn-submit"
                                                    class="btn-submit w-20 btn btn-success font-gg font-weight-500 rounded shadow-sm"><i
                                                        class="far fa-layer-plus mr-2 font-13"></i>Tiếp tục</a>
                                                <div id="selectWebsiteScrollbar" class="selectWebsite bg-white d-none flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: calc(100% - 120px); bottom: 0; transform: translateY(100%);">
                                                </div>
                                            </div>
                                            <div class="nextpage pt-3">
                                                <a href="javascript:;" class="text-box-catelog text-white text-004 SubmitCompare">So sánh 2 website</a>
                                                <a href="?view=traffic-website&action=topsites" class="text-box-catelog text-white text-turquoise">Tổng hợp top website tại Việt Nam</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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