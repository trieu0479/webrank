
<div class="page-wrapper">
    <div class="container BendmarksTool" id="export">
        <div class="row">
            <div class="header-custom-page mt-5 bg-white w-100 rounded pb-4">
                <div class="row">
                    <div class="col-sm-6  d-flex">
                        <div class="avatar-preview" data-url="../../assets/images/logo_admin.png"
                            style="background-image: url('../../assets/images/logo_admin.png');">
                        </div>
                        <div class="title-dashboard d-flex flex-column">
                            <span class="title_traffic font-weight-500">TRAFFIC-WEBSITE CUSTOM DEMO</span>
                            <small class="date_small">23/08/2019</small>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <div class="border-bottom-primary ml-2"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 ">
                        <div class="d-flex flex-column mt-4 pl-4 pr-4">
                            <div class="setting font-weight-500 font-18 font-gg">Cài đặt</div>
                            <div class="title-website  font-16 font-gg">Websites</div>
                            <div class="content-small text-muted font-13">Chọn trang web chính của bạn</div>
                            <div style="border: 1px solid #e9ecef;margin: 1.9em 26px;">
                                <div class="input-group input-group-2"></div>
                                <div class="input-group input-group-1">
                                    <input type="text" style="border:none!important" class="form-control ip_1"
                                        placeholder="Add <?=$_GET['name'];?> ... " aria-label="domain"
                                        aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 ">
                        <div class="d-flex flex-column mt-4 pl-4 pr-5 mota_content">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-right">
                        <a href="javascript:void(0)" class="btn btn-primary text-white rounded  mr-4 create_db" id='getSunmit'>SUBMIT</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="dist/css/pages/dashboardweb/custom-dashboard.css?<?= $version ?>">
<script src="dist/dist/js/pages/custom-dashboard/custom-db.js"></script>
