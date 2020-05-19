<div class="page-wrapper font-gg">
    <div class="container-fluid p-0 pt-0">
        <div class="page-content pt-0 ">
            <!-- Giao diện mới -->
            <div class="row justify-content-center">
                <div class="col-12" style="max-width: 1100px">
                    <div class="row justify-content-center">
                        <!-- <div class="col-12 text-center maxWidthPc-800"> -->
                        <div class="col-12 text-center" style="max-width: 800px">
                            <div class="py-3 py-md-5 h-100 px-3 px-md-5">
                                <div class="font-gg font-weight-500 fontsize-16 text-success  text-center">
                                    Buy Traffic
                                </div>
                                <div class="font-gg font-weight-400 fontsize-32 text-center">
                                    Công Cụ Tăng Truy Cập
                                </div>

                                <div class="font-gg text-muted font-14 text-center mt-3 font-weight-400">
                                    Nguồn traffic chất lượng, chi phí hợp lý, chỉ <span
                                        class="text-danger font-14 font-weight-500">3.000</span> vnđ cho <span
                                        class="text-success font-14 font-weight-500">100</span> visitors
                                </div>
                                <div class="text-center mt-3 mt-md-5 px-3 px-md-0">
                                    <div class="input-group w-100">
                                        <div class="d-flex w-100">
                                            <div class="w-100">
                                                <input id="input-submit" type="text"
                                                    class="p-10 font-14 font-gg w-100 form-control" autocomplete="off"
                                                    placeholder="Nhập tên Url website, Youtube, Tik tok, Facebook của bạn vào đây"
                                                    style="height: 42px">
                                            </div>
                                            <div class="mt-3 mt-md-0 w-100 w-md-30">
                                                <a href="javascript:void(0);" id="btn-submit"
                                                    class="btn-submit btn btn-success font-gg font-weight-500"><i
                                                        class="far fa-layer-plus mr-2 font-13"></i>Tạo chiến dịch</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <hr class="w-50 mt-5 pb-5">
                    <div class="text-left bg-white rounded mt-5">
                        <div class="d-flex no-block border-bottom py-2 px-3">
                            <ul class="nav nav-tabs border-0" id="tab-traffic" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#all" role="tab"
                                        aria-controls="home" aria-selected="true">Tất cả</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#progress" role="tab"
                                        aria-controls="profile" aria-selected="false">Đang chạy</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#complete" role="tab"
                                        aria-controls="contact" aria-selected="false">Hoàn thành</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#error" role="tab"
                                        aria-controls="contact" aria-selected="false">Lỗi thực thi</a>
                                </li>
                            </ul>
                            <div class="ml-auto align-self-center font-gg font-weight-500 font-13">
                                Ngân sách: <span class="budget font-gg font-weight-500 font-16 ">0</span>
                                <sup>vnd</sup>
                                <span
                                    class="recharge px-2 py-1 font-gg font-11 bg-warning rounded-pill font-weight-500 cursor-pointer">Nạp
                                    tiền</span>
                            </div>
                        </div>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="home-tab">

                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    chạy</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Gói
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Chi
                                                    phí/ngày</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    URL
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Traffic hôm
                                                    nay</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tình
                                                    trạng
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    kết thúc</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tác
                                                    vụ</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Cấu
                                                    hình
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableTraffic">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade show " id="progress" role="tabpanel" aria-labelledby="home-tab">

                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    chạy</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Gói
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Chi
                                                    phí/ngày</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    URL
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Traffic hôm
                                                    nay</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tình
                                                    trạng
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    kết thúc</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tác
                                                    vụ</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Cấu
                                                    hình
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableTraffic">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade show " id="complete" role="tabpanel" aria-labelledby="home-tab">

                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    chạy</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Gói
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Chi
                                                    phí/ngày</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    URL
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Traffic hôm
                                                    nay</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tình
                                                    trạng
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    kết thúc</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tác
                                                    vụ</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Cấu
                                                    hình
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableTraffic">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade show " id="error" role="tabpanel" aria-labelledby="home-tab">

                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    chạy</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Gói
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Chi
                                                    phí/ngày</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    URL
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Traffic hôm
                                                    nay</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tình
                                                    trạng
                                                </th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Ngày
                                                    kết thúc</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Tác
                                                    vụ</th>
                                                <th class="font-gg font-13 font-weight-bold white-space-nowrap"
                                                    scope="col">
                                                    Cấu
                                                    hình
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableTraffic">
                                        </tbody>
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
<script src="dist/js/pages/traffic-overview/dashboard-traffic.js"></script>