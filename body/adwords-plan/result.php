<?php
	if($_GET) {
		$url = $_GET['domain'];
		$conversions = $_GET['conversions'];
		$keyword = $_GET['keywords'];
	}
	
?>
<div id="index-congculapkehoach" class="page-wrapper pb-0 pb-lg-5">
    <div class="bg-similar" style="height: 400px"></div>
    <div class="container-fluid p-0" style="height: 100%">
        <div class="page-content">
            <div class="planning-wrapper">
                <div class="container pt-3 pt-md-5 pb-3 pb-md-5">
                    <div class="bg-white shadow-sm rounded">
                        <div class="p-4 p-lg-5">
                            <div class="similarHeader d-lg-flex mb-3">
                                <div class="similarHeaderLeft mr-5 mb-sm-5">
                                    <div
                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3">
                                        <div class="similarIcon"></div>
                                        <div
                                            class="similarDomain border-bottom dashed font-weight-500 font-20 font-weight-bold text-primary">
                                        </div>
                                        <a target="_blank" href="//<?=$domain?>" class="ml-2"><i
                                                class="fal fa-external-link"></i></a>
                                        <a href="javascript:;" class="changeSimilarWeb ml-2"><i
                                                class="fal fa-pencil"></i></a>
                                    </div>
                                    <div class="similarTitle text-uppercase mb-2 placeholder-loading"></div>
                                    <div class="similarDescription mb-4 placeholder-loading"></div>
                                    <div class="similarTags mb-4 placeholder-loading"></div>
                                    <div class="similarRelatedApps placeholder-loading">
                                        <div class="similarRelatedAppsTitle font-weight-bold mb-3"></div>
                                        <div class="similarApps"></div>
                                    </div>
                                </div>
                                <div
                                    class="similarHeaderRight ml-auto mt-5 mt-0 justify-content-center align-items-center">
                                    <div class="similarThumb">
                                        <img class="is-loading w-100 h-100" />
                                    </div>
                                    <div class="similarThumbMobile">
                                        <img class="is-loading w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="formGroupV1 mt-5 bg-white shadow-sm">

                        <input type="text" value="<?=$url?>" placeholder="Ví dụ: fff.com.vn"
                            class="input input-domain bg-dark-2 text-dark" name="domain" id="domain">
                        <input type="text" value="<?=$keyword?>" placeholder="Sản phẩm hoặc dịch vụ"
                            class="input input-keywords bg-dark-2 text-dark" name="keywords" id="keywords">
                        <input type="text" value="<?=number_format($conversions)?>" style="width:100%"
                            name="conversions" id="conversions" class="input input-conversions bg-dark-2 text-dark"
                            placeholder="Số tiền quảng cáo">

                        <span class="mybtn submitLenkehoach bg-success">LÊN KẾ HOẠCH</span>
                    </div>

                </div>
                <div class="result-congculapkehoach">
                    <div class="planloading"></div>
                    <div class="resultContainer">
                        <div id="home" class="header">
                            <div class="container pt-3 pt-md-0 pb-3 pb-md-5">
                                <div class="card mb-0">
                                    <div class="row mb-3">
                                        <div class="col-sm">
                                            <h4 class=" text-left">Website: <span><?=$url?></span></h4>
                                            <h3 class=" text-left">Mục tiêu: <span><?=number_format($conversions)?></span> khách</h3>
                                        </div>
                                        <div class="col-sm text-right hiddenMobile">
                                            <h4 class="text-right">Thực hiện: <span>3F Solutions</span></h4>
                                            <h3 class="text-right">Lúc: <?=date("H:i - d/m/Y");?></h3>
                                        </div>
                                    </div>
                                    <div class="row mb-5">

                                        <div class="col-12 col-lg-4 mt-3 mt-0 d-flex align-self-center">
                                            <div class="card-info ads-conversion">
                                                <p class="card-title card-title-number">Chi phí cho quảng cáo</p>
                                                <span class="planCost font-number"><i
                                                        class="fas fa-spinner fa-pulse"></i></span>
                                            </div>
                                        </div>

                                        <div class="col-12 col-lg-4 mt-3 mt-0 d-flex align-self-center">
                                            <div class="card-info ads-display">
                                                <p class="card-title card-title-number">Số lần hiển thị quảng cáo</p>
                                                <span class="planImpression font-number"><i
                                                        class="fas fa-spinner fa-pulse"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 mt-3 mt-0 d-flex align-self-center">
                                            <div class="card-info ads-click">
                                                <p class="card-title card-title-number">Số click chuột quảng cáo</p>
                                                <span class="planClick font-number"><i
                                                        class="fas fa-spinner fa-pulse"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-12">
                                            <div class="card-info no-border">
                                                <p class="card-title pb-4">Mẫu quảng cáo đề xuất của chúng tôi</p>
                                                <div class="PC-Mobile d-lg-flex">
                                                    <div class="PC align-self-center hiddenMobile">
                                                        <div class="browser-mockup">
                                                            <div class="row">
                                                                <div class="col-12 col-2 align-self-center">
                                                                    <img src="../assets/images/google-logo.png" alt=""
                                                                        style="height: 20px;">
                                                                </div>
                                                                <div class="col-12 col-10">
                                                                    <div class="search-bar"><i
                                                                            class="fas fa-microphone"></i><i
                                                                            class="fas fa-search"></i></div>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-4">
                                                                <div class="col-12">
                                                                    <div class="card-ads" style="right: 0">
                                                                        <p class="AdsHeadline headline"><i
                                                                                class="fas fa-spinner fa-pulse"></i></p>
                                                                        <p class="AdsRootdomain url"><i
                                                                                class="fas fa-spinner fa-pulse"></i></p>
                                                                        <p class="AdsDescription description pb-0"><i
                                                                                class="fas fa-spinner fa-pulse"></i></p>
                                                                        <p class="locate AdsLocation"><i
                                                                                class="fas fa-spinner fa-pulse"></i></p>
                                                                        <p></p>
                                                                        <div class="row">
                                                                            <div class="col-12 col-6">
                                                                                <p class="subTitle1 headline pb-0"><i
                                                                                        class="fas fa-spinner fa-pulse"></i>
                                                                                </p>
                                                                                <p class="description subDes1"><i
                                                                                        class="fas fa-spinner fa-pulse"></i>
                                                                                </p>
                                                                            </div>
                                                                            <div class="col-12 col-6">
                                                                                <p class="subTitle2 headline pb-0"><i
                                                                                        class="fas fa-spinner fa-pulse"></i>
                                                                                </p>
                                                                                <p class="description subDes1"><i
                                                                                        class="fas fa-spinner fa-pulse"></i>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-placeholder">
                                                                        <div class="line-1"></div>
                                                                        <div class="line-2"></div>
                                                                        <div class="line-3"></div>
                                                                        <div class="line-4"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="Mobile">
                                                        <div class="iphone-x">
                                                            <i class="speaker"></i>
                                                            <b class="camera"></b>
                                                            <div class="row">
                                                                <div class="col-12">

                                                                    <img src="../assets/images/google-logo.png" alt="">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="search-bar"><i
                                                                            class="fas fa-microphone text-primary"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-4">
                                                                <div class="col-12">
                                                                    <div class="card-ads" style="left: 0!important; width: 100% !important; max-width: 280px; margin: auto;">
                                                                        <p class="headline AdsHeadline"><i
                                                                                class="fas fa-spinner fa-pulse"></i>
                                                                        </p>
                                                                        <p class="url AdsRootdomain"><i
                                                                                class="fas fa-spinner fa-pulse"></i></p>
                                                                        <p class="description AdsDescription"><i
                                                                                class="fas fa-spinner fa-pulse"></i></p>
                                                                        <div class="row">
                                                                            <div class="col-12">
                                                                                <p class="callme pb-0 AdsPhone"><i
                                                                                        class="fas fa-spinner fa-pulse"></i>
                                                                                </p>
                                                                                <p class="AdsLocation locate pb-0"><i
                                                                                        class="fas fa-spinner fa-pulse"></i>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-placeholder hiddenMobile">
                                                                        <div class="line-1"></div>
                                                                        <div class="line-2"></div>
                                                                        <div class="line-3"></div>
                                                                        <div class="line-4"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="idwebsiteTrafficEstimated" class="hidden">
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="card-info no-border">
                                                    <p class="card-title">ƯỚC TÍNH TRUY CẬP</p>
                                                    <p class="card-description">Dự báo truy cập là ước tính số người ghé
                                                        thăm website trong 90 ngày qua</p>
                                                    <div class="resposiveTable">
                                                        <div id="websiteTrafficEstimated"
                                                            style="width:100%; height:400px;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-12">
                                            <div class="card-info no-border">
                                                <p class="card-title">20 từ khóa đề nghị</p>
                                                <div class="resposiveTable">
                                                    <table id="dataTable" class="tableKeywords w-100">
                                                        <thead>
                                                            <tr>
                                                                <th>Từ khóa</th>
                                                                <th style="width:130px!important; text-align: center">Xu
                                                                    hướng <small>(12 tháng)</small></th>
                                                                <th style="width:180px!important;text-align:right">Điểm
                                                                    cạnh tranh <small>(từ 0-100)</small></th>
                                                                <th style="width:180px!important;text-align:right">Hiển
                                                                    thị <small>(số lần hiện quảng cáo)</small></th>
                                                                <th style="width:180px!important;text-align:right">Giá
                                                                    thấp nhất <sup>vnđ</sup> <small>(trên 1 click
                                                                        chuột)</small></th>
                                                                <th style="width:180px!important;text-align:right">Giá
                                                                    cao nhất <sup>vnđ</sup> <small>(trên 1 click
                                                                        chuột)</small></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="price mb-4" id="price">
                            <div class="container pt-3 pt-md-0 pb-3 pb-md-5">

                                <div class="card mb-0">

                                    <table class="table PriceTable">

                                        <thead>
                                            <h2 style="font-size: 1.2rem!important;">CHI PHÍ KHỞI TẠO QUẢNG CÁO & CHẠY
                                                QUẢNG CÁO TRÊN GOOGLE</h2>
                                            <tr class="text-muted">
                                                <th>Hạng mục</th>
                                                <th class="text-right hiddenMobile">Biểu phí</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5>Chi phí khởi tạo quảng cáo</h5>
                                                    <ul class="text-muted mb-0 PriceDetail pl-0">
                                                        <li>Khởi tạo tài khoản quảng cáo Google AdWords</li>
                                                        <li>Khởi tạo 1 chiến dịch tìm kiếm, 03 mẫu quảng cáo tìm kiếm
                                                        </li>
                                                        <li>Khởi tạo 1 chiến dịch GDN, 03 mẫu quảng cáo bám duôi</li>
                                                        <li>Cài đặt tracking Webiste & AdWords</li>
                                                        <li>Theo dõi trong 72h</li>
                                                        <li>Bàn giao tài khoản: liên kết email khách hàng để khách hàng
                                                            theo dõi và quản lý tài khoản</li>
                                                        <li>Hướng dẫn quản lý tài khoản AdWords sơ bộ</li>
                                                    </ul>
                                                </td>
                                                <td class="text-right hiddenMobile"><span>1,350,000
                                                        <sup>vnđ</sup></span>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Chi phí trả cho Google để chạy quảng cáo</h5>
                                                    <ul class="text-muted mb-0 PriceDetail pl-0 ">
                                                        <li>Khách hàng quản lý tài khoản</li>
                                                        <li>Được phép: chủ động tạo hoặc thêm chiến dịch, thay đổi nội
                                                            dung quảng cáo</li>
                                                        <li>Theo dõi toàn bộ lịch sử thanh toán của 3F với Google trong
                                                            tài khoản AdWords của bạn</li>
                                                    </ul>
                                                </td>
                                                <td class="text-right hiddenMobile"><span><b class="planCost"></b>
                                                    </span></td>
                                            </tr>
                                            <tr>
                                                <td style="text-align:right" colspan=2>
                                                    <ul class="tbTotalCost">
                                                        <li>Tổng phí: <span class="totalCost01"><span></li>
                                                        <li>Tặng mã khuyến mãi: <span class="text-info">- 1,350,000
                                                                vnđ</span></li>
                                                        <li>Tổng thanh toán: <strong class="text-success"><strong
                                                                    class="totalCost02"></strong></strong></li>

                                                    </ul>

                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>

                                    <div style="text-align:right;padding:20px 0px">
                                        <span id="yeucauchuyengia" class="mybtn">Tạo quảng cáo<i
                                                class="fas fa-chevron-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- <div class="header">
                            <div class="container-fluid pt-3 pt-md-5 pb- pb-md-5 pl-md-5 pr-md-5">
                                <div class="card mb-0">
                                    <div class="d-flex no-block align-items-center border-bottom">
                                        <div class="col-auto text-uppercase font-weight-500 p-0">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                                                viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12"
                                                        r="10" />
                                                    <path
                                                        d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                                        id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg> <?=_("Phân Tích Đối Thủ")?>
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
                                    <div class="getSiteWeb pt-4 pb-4" >
                                        <div class="row" id="phanTich">
                                            <div class="changeURL col-md-3">
                                                <a href="#" class="d-flex pt-2 pb-2">
                                                    <div class="img">
                                                        <img src="./assets/images/logoweb.png" alt="">
                                                    </div>
                                                    <p class="ml-2"> kenh88.com </p>
                                                </a>
                                            </div>
                                            <div class="changeURL col-md-3">
                                                <a href="#" class="d-flex pt-2 pb-2">
                                                    <div class="img">
                                                        <img src="./assets/images/logoweb.png" alt="">
                                                    </div>
                                                    <p class="ml-2"> kenh88.com </p>
                                                </a>
                                            </div>
                                            <div class="changeURL col-md-3">
                                                <a href="#" class="d-flex pt-2 pb-2">
                                                    <div class="img">
                                                        <img src="./assets/images/logoweb.png" alt="">
                                                    </div>
                                                    <p class="ml-2"> kenh88.com </p>
                                                </a>
                                            </div>
                                            <div class="changeURL col-md-3">
                                                <a href="#" class="d-flex pt-2 pb-2">
                                                    <div class="img">
                                                        <img src="./assets/images/logoweb.png" alt="">
                                                    </div>
                                                    <p class="ml-2"> kenh88.com </p>
                                                </a>
                                            </div>
                                            <div class="changeURL col-md-3">
                                                <a href="#" class="d-flex pt-2 pb-2">
                                                    <div class="img">
                                                        <img src="./assets/images/logoweb.png" alt="">
                                                    </div>
                                                    <p class="ml-2"> kenh88.com </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="dist/js/pages/adwords/adwords.js"></script>
<script type='text/javascript' src='../assets/js/echarts.min.js?ver=4.0'></script>
<script type="text/javascript">
    var domain = '<?=$url?>';
    var budget = '<?=$budget?>';
    var conversions = '<?=$conversions?>';
    var keyword = '<?=$keyword?>';

    const getHeader = async data => {
        // Get value Header    

        const {
            data: similarHeader,
            website: similarDomain
        } = data.data;

        let {
            icon: similarIcon,
            title: similarTitle,
            description: similarDescription,
            relatedApps: similarRelatedApps,
            imageLarge: similarThumb,
            tags: similarTags,
            globalRanking: similarGlobalRank,
            highestTrafficCountryRanking: similarCountryRank,
        } = similarHeader;

        let similarThumbMobile = similarThumb.replace("t=1", "t=4");
        let similarThumbMapHeat = similarThumb.replace("t=1", "t=3");

        if (!similarThumb.startsWith('http')) {
            similarThumb = 'assets' + similarThumb;
            similarThumbMobile = similarThumb;
        }

        // Check value Header
        if (!similarTags) similarTags = []; // set null = []
        if (similarTags.length <= 0)
            $(".similarHeader .similarTags").addClass("d-none");
        if ($.isEmptyObject(similarRelatedApps))
            $(".similarHeader .similarRelatedApps").addClass("d-none");
        if (!similarRelatedApps)
            similarRelatedApps = [];
        if (!similarTitle)
            similarTitle = "<em>Website này chưa cập nhật tiêu đề</em>";
        if (similarDescription == "")
            similarDescription = "<em>Website này chưa cập nhật mô tả</em>";

        // Set value Header
        similarIcon = "https://files.fff.com.vn/f.php?url=" + btoa(similarIcon);
        $(".similarHeader .similarIcon").html(
            `<img class="p-1 mr-2 border rounded bg-secondary" src="${similarIcon}" />`
        );
        $(".similarHeader .similarDomain").text(similarDomain);
        $(".similarHeader .similarRank").fadeIn();
        $(".similarHeader .similarGlobalRank").text('#' + numeral(similarGlobalRank).format('0,0'));
        $(".similarHeader .similarCountryRank").text('#' + numeral(similarCountryRank).format('0,0'));
        $(".similarHeader .similarTitle").html(similarTitle);
        $(".similarHeader .similarDescription").html(similarDescription);
        $(".similarHeader .similarTags").html(
            "<strong>Tags: </strong>" +
            similarTags.map(tag => `<span>${tag}</span>`).join("")
        );

        $(".similarHeader .similarRelatedAppsTitle").html(
            '<i class="far fa-mobile font-14"></i> Ứng dụng liên quan<br/><span class="font-12 text-muted">CH Play & AppStore</span>'
        );

        let apps = "";
        $.each(similarRelatedApps, (index, item) => {
            const mainApp = item[0];
            const appId =
                (index == "apps_0" ?
                    "//play.google.com/store/apps/details?id=" :
                    "//itunes.apple.com/us/app/id") + mainApp.id;
            const appIcon = "https://files.fff.com.vn/f.php?url=" + btoa(mainApp.icon);
            const appTitle = mainApp.title;
            apps +=
                `<a target="_blank" class="mr-2" href="${appId}"><img width="32px" src="${appIcon}" /></a>`;
        });

        $(".similarHeader .similarApps").html(
            `<div class="d-flex flex-row">${apps}</div>`
        );

        similarThumb = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumb);
        similarThumbMobile = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumbMobile);
        $(".similarThumb img").attr("src", similarThumb);
        $(".similarThumbMobile img").attr("src", similarThumbMobile);

        // Remove loading state
        $(
            ".similarHeader .similarDomainWrapper," +
            ".similarHeader .similarTitle," +
            ".similarHeader .similarDescription," +
            ".similarHeader .similarTags," +
            ".similarHeader .similarRelatedApps"
        ).removeClass("placeholder-loading");

        // Change website
        $(
            ".similarHeader .changeSimilarWeb, .similarHeader .similarDomain"
        ).click(() => {
            getDomain().then(data => {
                if (data.value) {
                    location.href = `?action=result&domain=${data.value}`;
                }
            });
        });
    };


    jQuery(document).ready(function ($) {
        var cpc = 0;
        var ctr = 0;
        var cpm = 0;
        var converRate = 0;
        var planType = "domain";
        let task = 'getHeader';

        $.ajax({
            url: `//aapi.trazk.com/private/website/websiteapi.php?task=${task}&domain=${domain}`,
            type: "GET"
        })
            .then(data => JSON.parse(data))
            .then(data => getHeader(data))

        getAdsSuggestion();
        ShowDuToan(domain, keyword, conversions);
        // getWebsiteInfo(domain);
        getWebsiteTrafficEstimated(domain);
        $('#customerBudget').keyup(function (event) {
            if (event.which >= 37 && event.which <= 40) return;
            $(this).val(number_format($(this)));
        })

        function getWebsiteInfo(domain) {
            $.when($.ajax("//adsapi.trazk.com/private/website/getheader.php?domain=http://" + domain))
                .done(res => {
                    res = JSON.parse(res);
                    var data = res.Header;
                    var tags = '';
                    if (data.description.length > 20) description = data.description;
                    else description = "Website chưa cập nhập nội dung giới thiệu. Vui lòng cập nhập";
                    $('.planningWebsite .mainDomainName').html(
                        `<span class="iconWrapper"><img class="icon" src="${data.icon}" /></span><strong>${res.domain}</strong>`
                    );
                    if ($('.planningWebsite .description').text() == "") $('.planningWebsite .description')
                        .html(`${description}`);
                    if (data.tags) {
                        for (i = 0; i < data.tags.length; i++) {
                            tags += "<span>" + data.tags[i] + "</span>";
                        }
                        $('.planningWebsite .tags').removeClass('d-none');
                        if (data.tags.length > 0) $('.planningWebsite .tags').html("<strong>Tags:</strong>" +
                            tags);
                    }

                    $('.planningWebsite .imageLarge').attr('src', data.imageLarge);
                    if (data.relatedApps && data.relatedApps.length > 0) {
                        $('.planningWebsite .relatedApps').show();
                        if (typeof data.relatedApps.apps_0 !== 'undefined' && data.relatedApps.apps_0.length >
                            0) {
                            $('.planningWebsite .relatedApps .googlePlayStoreLink').attr('href',
                                '//play.google.com/store/apps/details?id=' + data.relatedApps.apps_0[0].id);
                            $('.planningWebsite .relatedApps .googlePlayStore').attr('src', data.relatedApps
                                .apps_0[0].icon);
                        }
                        if (typeof data.relatedApps.apps_1 !== 'undefined' && data.relatedApps.apps_1.length >
                            0) {
                            $('.planningWebsite .relatedApps .appStoreLink').attr('href',
                                '//itunes.apple.com/us/app/id' + data.relatedApps.apps_1[0].id);
                            $('.planningWebsite .relatedApps .appStore').attr('src', data.relatedApps.apps_1[0]
                                .icon);
                        }
                    }
                }).then(() => {
                    $('.planningWebsiteLoading').addClass('d-none')
                    $('.planningWebsite, .imgWrapper').removeClass('d-none');
                    $(".planningWebsite ").slideDown();
                });
        }

        function getWebsiteTrafficEstimated(domain) {
            $.getJSON("//fff.com.vn/api/getWebsiteTraffic.php?domain=" + domain, function (res) {
                // console.log(res.status);
                if (res.status == "success") {
                    $("#idwebsiteTrafficEstimated").show();

                    option = {
                        xAxis: {
                            type: 'category',
                            data: res.date,
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#797979'
                                },
                            },
                        },
                        grid: {
                            left: '2%',
                            right: '2%',
                        },
                        yAxis: {
                            type: 'value',
                            show: false,
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        series: [{
                            name: 'Visitor',
                            data: res.visitor,
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [{
                                            offset: 0,
                                            color: '#3498db'
                                        },
                                        {
                                            offset: 0.5,
                                            color: '#3498db'
                                        },
                                        {
                                            offset: 1,
                                            color: '#3498db'
                                        }
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [{
                                            offset: 0,
                                            color: '#1abc9c'
                                        },
                                        {
                                            offset: 0.7,
                                            color: '#1abc9c'
                                        },
                                        {
                                            offset: 1,
                                            color: '#1abc9c'
                                        }
                                        ]
                                    )
                                }
                            },
                            smooth: true,

                            label: {
                                show: true,
                                position: 'top',
                                color: '#444',
                                formatter: function (params) {
                                    return params.value.toLocaleString('en-US') + "";
                                },
                            }
                        }]
                    };
                    var websiteTrafficEstimated = echarts.init(document.getElementById(
                        'websiteTrafficEstimated'));
                    websiteTrafficEstimated.setOption(option);
                } else {
                    $("#idwebsiteTrafficEstimated").hide();
                }
            })
        }

        function tranglapkehoach() {
            var domain = $(".input-domain").val();
            var conversions = $(".input-conversions").val().replace(/\,+/g, '')
            var keywords = $(".input-keywords").val();

            if (conversions == undefined) conversions = 0;
            if (conversions < 10) {
                Swal.fire({
                    type: 'error',
                    title: 'Khách hàng quá ít',
                    text: 'Vui lòng tăng thêm <strong>số khách hàng mong muốn</strong> để hệ thống có thể hoạt động',
                });
                return false;
            }

            if (domain.indexOf("http") > 0) {
                var url = new URL(domain);
                domain = url.hostname;
            }

            if (CheckIsValidDomain(domain)) {
                url = `index.php?view=adwords-plan&action=result&domain=${domain}&keywords=${keywords}&conversions=${conversions}`
                window.location.href = url;
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Có lỗi',
                    text: 'Vui lòng nhập 1 tên miền (domain) hợp lệ',

                })
            }
        }
        $(".submitLenkehoach").click(function () {
            tranglapkehoach();

        });

        $('.input').keypress(function (e) {
            if (e.which == 13) {
                tranglapkehoach();
            }
        });

        function CheckIsValidDomain(domain) {
            var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
            return domain.match(re);
        }

        $('.input-budget').keyup(function (event) {

            // skip for arrow keys
            if (event.which >= 37 && event.which <= 40) return;

            // format number
            $(this).val(function (index, value) {
                return value
                    .replace(/\D/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            });
        });

        $('#btnSubmit').click(function () {
            var website = $('#customerWebsite');
            var budget = $('#customerBudget');
            if (!website.val() || !budget.val()) {
                if (!website.val()) {
                    website.addClass('error').focus();
                }
                if (!budget.val()) {
                    budget.addClass('error');
                }
            } else {
                website.removeClass('error');
                budget.removeClass('error');

                $(this).addClass('loading').append('<i class="fas fa-spinner fa-spin"></i>')

                loadData(website.val(), budget.val());
            }
        })

        $('input.input-field.borderd').keyup(function (event) {
            if ($(this).val()) {
                $(this).removeClass('error');
            } else {
                $(this).addClass('error');
            }
        })

        $("#yeucauchuyengia").click(function () {
            yeucauchuyengia();
        });

        function yeucauchuyengia() {
            Swal.fire({
                showCloseButton: true,
                title: 'Yêu cầu chuyên gia',
                html: `
				<h4 style="margin-bottom: 15px!important">Chuyên gia của 3F sẽ liên hệ với bạn để triển khai quảng cáo</h4>
				<div class="form-group mb-0">
					<label for="website" style="display: block;font-size: 14px;text-align: left;font-weight: bold;" class="col-form-label">Website <span class="text-danger">*</span></label>
					<input type="text" style="border: 2px solid rgba(0, 0, 0, 0.07);" class="input-field borderd form-control" id="CustomerWebsite" value="<?=$url?>" required>
				</div>
				<div class="form-group mb-0">
					<label for="budget" style="display: block;font-size: 14px;text-align: left;font-weight: bold;" class="col-form-label">Chi phí <span class="text-danger">*</span></label>
					<input type="text" style="border: 2px solid rgba(0, 0, 0, 0.07);" class="input-field borderd mb-0 form-control" id="CustomerBudget" value="<?=number_format($budget)?>" required>
				</div>
				<div class="form-group mb-0">
					<label for="name" style="display: block;font-size: 14px;text-align: left;font-weight: bold;" class="col-form-label">Họ và Tên <span class="text-danger">*</span></label>
					<input type="text" style="border: 2px solid rgba(0, 0, 0, 0.07);" class="input-field borderd form-control" id="CustomerName"  required>
				</div>
				<div class="form-group mb-0">
					<label for="email"style="display: block;font-size: 14px;text-align: left;font-weight: bold;" class="col-form-label">Email <span class="text-danger">*</span></label>
					<input type="text" style="border: 2px solid rgba(0, 0, 0, 0.07);" class="input-field borderd form-control" id="CustomerEmail"  required>
				</div>
				<div class="form-group mb-0" >
					<label for="phone" style="display: block;font-size: 14px;text-align: left;font-weight: bold;" class="col-form-label">Số điện thoại <span class="text-danger">*</span></label>
					<input type="text" style="border: 2px solid rgba(0, 0, 0, 0.07);" class="input-field borderd form-control" id="CustomerPhone"  required>
				</div>
			

					`,
            }).then((result) => {
                if (result.value == true) {

                    var post = {};
                    post.email = $("#CustomerEmail").val();
                    post.fullname = $("#CustomerName").val();
                    post.phone = $("#CustomerPhone").val();
                    post.website = $("#CustomerWebsite").val();
                    post.budget = $("#CustomerBudget").val();
                    if (post.email && post.fullname && post.phone) {
                        $.post("https://nv.cokhach.com/api/services/services.php?action=add_service&agent=fff",
                            post,
                            function (res) {
                                Swal.fire({
                                    type: 'info',
                                    title: 'Cảm ơn bạn',
                                    text: 'Chuyên gia của 3F sẽ liên hệ lại với bạn trong ít phút. ',

                                })
                            })
                    }
                }
            });
        }

        function getAdsSuggestion() {

            $.getJSON("https://fff.com.vn/api/getAdsSuggestion.php?domain=" + domain, function (res) {
                $(".AdsHeadline").text(res.title);
                $(".AdsDescription").text(res.des);
                console.log($('.planningWebsite .description').text());
                if ($('.planningWebsite .description').text() == "") $('.planningWebsite .description')
                    .html(res.des);
                $(".AdsRootdomain").text(res.rootDomain);
                $(".subTitle1").text(res.subTitle1);
                $(".subTitle2").text(res.subTitle2);
                $(".subDes1").text(res.subDes1);
                $(".subDes2").text(res.subDes2);
                $(".AdsLocation").text(res.location);
                $(".AdsPhone").text(res.phone);
            })
        }

        function number_format($this) {
            return $this.val()
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        function updateEstimatedBoard(planClick, planCost, planImpression) {
            $(".planClick").html($.number(planClick));
            //$('.estImpressions').counterUp();
            $(".planCost").html($.number(planCost) + " <sup>vnđ</sup>");
            //$('.estClicks').counterUp();
            $(".planImpression").html($.number(planImpression));
            //$('.estConversions').counterUp();
            $(".totalCost01").html("<span class='text-red'>" + $.number(planCost + 1350000) +
                " <sup>vnđ</sup></span>");
            $(".totalCost02").html($.number(planCost) + " <sup>vnđ</sup>");
        }

        function commaSeparateNumber(val) {
            while (/(\d+)(\d{3})/.test(val.toString())) {
                val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }
            return val;
        }

        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }

            return JSON.stringify(obj) === JSON.stringify({});
        }

        function ShowDuToan(domain, keyword, conversions) {

            var table = $('#dataTable').DataTable();
            table.destroy();
            $("#dataTable").dataTable({
                "ajax": "//localapi.trazk.com/keywords/keywordPlannerDomain.php?limit=200&domain=" +
                    domain + "&keyword=" + keyword + "&conversions=" + conversions,
                "dom": 'frtip',
                "searching": false,
                "paging": true,
                "pageLength": 10,
                "autoWidth": false,
                "info": false,
                "order": [
                    [3, "desc"]
                ],
                "responsive": true,
                "columnDefs": [{
                    "targets": [3, 4, 5],
                    "render": $.fn.dataTable.render.number(',', '.', 0, ''),
                }],
                "language": {
                    "lengthMenu": "Hiển thị _MENU_ kết quả trên 1 trang",
                    "zeroRecords": "Đang chờ tải báo cáo, vui lòng đợi trong giây lát ...",
                    "info": "Trang _PAGE_ của tổng _PAGES_ trang",
                    "emptyTable": "Không có dữ liệu",
                    "infoFiltered": "(filtered from _MAX_ total records)",
                    "paginate": {
                        "first": "Đầu",
                        "last": "Cuối",
                        "next": "Sau",
                        "previous": "Trước"
                    },
                    "search": "Tìm kiếm:",
                },
                drawCallback: function () {
                    $('.lichsuHienThi').show();
                    if ($('.lichsuHienThi canvas').length == 0) $('.lichsuHienThi').sparkline('html', {
                        type: 'line',
                        height: 20,
                        lineWidth: 2,
                        lineColor: '#1d71fa',
                        spotRadius: 3,
                        spotColor: '#ef00ab'
                    });
                },

                initComplete: function (settings, json) {

                    $(".planloading").hide();
                    var totalCost = json.estimated.totalCost;
                    var totalImpressions = json.estimated.totalImpressions;
                    var totalClicks = json.estimated.totalClicks;
                    var totalConversions = json.estimated.totalConversions;
                    cpm = totalCost / totalImpressions;
                    ctr = totalClicks / totalImpressions;
                    cpc = totalCost / totalClicks;
                    converRate = totalClicks / totalConversions;

                    var planClick = json.estimated.planClick;
                    var planCost = json.estimated.planCost;
                    var planImpression = json.estimated.planImpression;
                    updateEstimatedBoard(planClick, planCost, planImpression);
                    $('.lichsuHienThi').show();
                    // $('.lichsuHienThi').sparkline('html', {
                    //     type: 'line',
                    //     height: 20,
                    //     lineWidth: 2,
                    //     lineColor: '#1d71fa',
                    //     spotRadius: 3,
                    //     spotColor: '#ef00ab'
                    // });
                    var logData = {};
                    logData.domain = domain;
                    logData.conversions = conversions;
                    logData.totalCost = totalCost;
                    logData.totalImpressions = totalImpressions;
                    logData.totalConversions = totalConversions;
                    logData.totalClicks = totalClicks;
                    logData.keywords = keyword;
                    logData.planCost = planCost;
                    logData.planClick = planClick;
                    logData.planImpression = planImpression;


                    $.post("https://fff.com.vn/api/logAdsSuggestion.php", logData);
                    if (totalClicks < 10) {
                        Swal.fire({
                            showCloseButton: true,
                            title: 'Nâng cấp kế hoạch',
                            html: `
				<h4>Lập kế hoạch bằng tên miền của bạn <span class='text-red'>không thể thực hiện</span> tốt<br> bạn hãy thêm 1 từ khóa (về sản phẩm hoặc dịch vụ) để lập kế hoạch bởi thông tin sản phẩm</h4>
				<div class="form-group mb-0">
					<label for="website" class="col-form-label">Sản phẩm hoặc dịch vụ của bạn <span class="text-danger">*</span></label>
					<input type="text" class="input-field borderd" id="KeywordPlanner" value="" required>
				</div>`,
                            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Lập kế hoạch mới !',
                        }).then((result) => {
                            var Keyword = $("#KeywordPlanner").val();
                            url =
                                'ads-planning-tool.php?view=ads-planning&action=result&domain=' +
                                domain + '&keywords=' + Keyword + '&budget=' + budget;
                            location.href = url;
                            //if (result.value == true) ShowDuToan(Keyword,"keyword");
                        })
                    } else if (totalCost < budget) {
                        Swal.fire({
                            type: 'success',
                            showCloseButton: true,
                            title: 'Ngân sách lớn',
                            html: 'Ngân sách của bạn <strong>' + $.number(budget) +
                                '</strong> vnd lớn hơn nhiều so với dự toán quảng cáo của hệ thống là: <strong class="text-red">' +
                                $.number(totalCost) +
                                '</strong> vnd.<br> Vì thế chúng tôi đề nghị bạn làm việc với chuyên gia để lập kế hoạch hoàn hảo hơn !',
                            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yêu cầu chuyên gia !',
                        }).then((result) => {
                            if (result.value == true) yeucauchuyengia();
                        })
                    }
                },

            });
        }
        $('#dataTable').on('page.dt', function () {
        });
    });
</script>