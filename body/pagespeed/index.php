<div class="page-wrapper">
    <div class="main-action pt-4">
        <div class="box-action">
            <div class="container">
                <div class="row pt-5">
                    <div class="col text-white text-center">
                        <!-- <div class="font-14 text-uppercase mb-2 font-gg font-weight-bold">Công Cụ</div> -->
                        <div class="display-7 font-weight-500 text-capitalize font-gg">Phân tích tốc độ website</div>
                        <div class="mt-1">
                            <span class="sub-tilte-content">Thiết bị: </span><span class="sub-content">PC</span> |
                            <span class="sub-tilte-content">Ngày: </span><span class="sub-content data-time-nav"></span> |
                            <span class="sub-tilte-content">Giới hạn: </span>
                            <span class="sub-content text-danger">Unlimited</span> |
                            <a href="#" class="sub-tilte-content">Nâng cấp VIP</a>
                        </div>
                        <div class="font-16 mt-1 mb-4 pb-4 font-gg">
                            Công cụ phân tích kỹ thuật và nội dung website, cung cấp đề xuất giúp bạn cải thiện tốc độ
                            website.
                        </div>
                        <form action="index.php" method="get">
                            <div class="input-action">
                                <input type="hidden" name="view" value="pagespeed">
                                <input type="hidden" name="action" value="result">
                                <input type="text" id="websiteUrl" name="websiteUrl" class="form-input"
                                    placeholder="Nhập URL của trang web" value="<?=$_GET['websiteUrl']?>">
                                <button type="submit" class="btn btn-button">PHÂN TÍCH</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="results-explainer SiteWeb">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="bg-white shadow-sm rounded">
                        <div class="d-flex no-block align-items-center border-bottom p-5">
                            <div class="col-auto text-uppercase font-weight-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                    class="svg-icon text-primary mb-1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                        <path
                                            d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                            id="Path-92" fill="#000000" fill-rule="nonzero" />
                                    </g>
                                </svg> <?=_("URL bạn đã phân tích ")?>
                            </div>
                            <div class="ml-auto dropdown">
                                <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="far fa-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:location.reload();"><i
                                            class="far fa-sync"></i> Tải lại</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item text-danger"
                                        href="javascript:Swal.fire('Số điện thoại hỗ trợ','0984 668 068 – 0901 47 48 46 – 0906 66 09 80','info')"><i
                                            class="far fa-life-ring"></i> Hỗ trợ ngay</a>
                                </div>
                            </div>
                        </div>
                        <div class="main-getSiteWeb">
                            <div class="SiteWeb-wraper">
                                <table id="getSiteWeb" class="w-100">
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container pt-5">
        <div class="row justify-content-center" id="content-tool">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div id="PhanTichChiPhi" class="card text-left m-auto bg-white shadow-sm rounded cursor-pointer"
                    data-href="https://go.fff.com.vn/?action=index&amp;view=adwords-plan">
                    <div class="text-right m-3 pb-3">
                        <span class="px-2 py-1 rounded font-12 font-weight-bold font-gg text-info">Miễn Phí</span>
                    </div>
                    <div class="rounded-pill m-auto text-center d-flex no-block justify-content-center"
                        style="width: 100px; height:100px; background-color: rgba(3,169,243,.1)">
                        <i class="fad fa-funnel-dollar align-self-center"
                            style="font-size: 30px; color: rgb(0, 148, 188);"></i>
                    </div>
                    <div class="card-body m-auto">
                        <div class="card-title text-center text-dark font-weight-500 font-gg font-18 text-capitalize">
                            Kế hoạch chi phí Ads
                        </div>
                        <div class="des text-center font-14 font-gg text-muted mt-3" style="height: 40px">
                            Công cụ lập kế hoạch quảng cáo, nhanh chóng chính xác
                        </div>
                    </div>
                    <div class="text-center mt-3 mb-5">
                        <a class="font-gg font-14 font-weight-bold bagLightblue" data-toggle="tooltip"
                            data-placement="top" title=""
                            href="https://go.fff.com.vn/?action=index&amp;view=adwords-plan" data-original-title="" style="padding: 15px 40px !important;">Trải
                            Nghiệm <i class="font-weight-bold fal fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div id="PhanTichWebsiteDoiThu" class="card text-left m-auto bg-white shadow-sm rounded cursor-pointer"
                    data-href="https://go.fff.com.vn/?view=traffic-website&amp;action=index">
                    <div class="text-right m-3 pb-3">
                        <span class="px-2 py-1 rounded font-12 font-weight-bold font-gg text-info">Miễn Phí</span>
                    </div>
                    <div class="rounded-pill m-auto text-center d-flex no-block justify-content-center"
                        style="width: 100px; height:100px; background-color: rgba(122,172,237,.1)">
                        <i class="fad fa-send-backward align-self-center"
                            style="font-size: 30px; color: rgb(90, 121, 188);"></i>
                    </div>
                    <div class="card-body m-auto">
                        <div class="card-title text-center text-dark font-weight-500 font-gg font-18 text-capitalize">
                            Phân tích website đối thủ
                        </div>
                        <div class="des text-center font-14 font-gg text-muted mt-3" style="height: 40px">
                            Phân tích traffic website bất kỳ, tìm hiểu nguồn khách hàng của đối thủ
                        </div>
                    </div>
                    <div class="text-center mt-3 mb-5">
                        <a class="font-gg font-14 font-weight-bold bagPrimary" data-toggle="tooltip"
                            data-placement="top" title=""
                            href="https://go.fff.com.vn/?view=traffic-website&amp;action=index"
                            data-original-title="" style="padding: 15px 40px !important;">Trải Nghiệm <i class="font-weight-bold fal fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="dist/js/pages/pagespeed/pagespeed-index.js"></script>