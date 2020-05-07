<?
$domain1 = @$_REQUEST['domain1']; 
$domain1 = str_replace("/","",$domain1);

$domain2 = @$_REQUEST['domain2'];
$domain2 = str_replace("/","",$domain2);

$idDomain1 = str_replace(".","",$domain1);
$idDomain2 = str_replace(".","",$domain2); 
$checkDomain1 = checkdnsrr($domain1 , "A");
$checkDomain2 = checkdnsrr($domain2 , "A"); 
if (!$checkDomain1 || !$checkDomain2) echo "<script>window.parent.location ='https://admin.fff.com.vn/v5/website-analysis.php'</script>";
?>

<div class="page-wrapper">
    <!-- <div class="bg-similar" style="height:500px"></div> -->
    <div class="container" style="padding-top: 0px!important;">
        <div class="pt-0">
            <div class="row d-none d-md-block">
                <div class="col-12">
                    <div class="scroll-down d-none">
                        <div class="bg-compare-scroll">
                            <div class="bg-current-scroll"></div>
                            <div class="bg-competitor-scroll">
                                <div class="divider-scroll"></div>
                            </div>
                        </div>
                        <div class="row">
                            <!--domain1-->
                            <div class="<?= $idDomain1 ?> col-12 col-md-5">
                                <div class="p-3">
                                    <div class="similarHeader d-flex flex-column text-white align-items-center">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3">
                                                <div class="similarIcon"></div>
                                                <a href="?view=traffic-website&action=result&domain=<?= $domain1 ?>"
                                                    class="similarDomain border-bottom dashed font-weight-500 font-20 font-weight-bold text-white">
                                                </a>
                                                <a target="_blank" href="//<?=$domain1?>" class="ml-2 text-white"><i
                                                        class="fal fa-external-link"></i></a>
                                                <a href="javascript:;" class="changeWebSite ml-2 text-white"><i
                                                        class="fal fa-pencil"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG domain1-->

                            <div class="col-2">
                                <div class="vs-ph-scroll">
                                    <div class="vs-box"> VS </div>
                                </div>
                            </div>

                            <!--domain2-->
                            <div class="<?= $idDomain2 ?> col-12 col-md-5">
                                <div class="p-3">
                                    <div class="similarHeader d-flex flex-column text-white align-items-center">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3">
                                                <div class="similarIcon"></div>
                                                <a href="?view=traffic-website&action=result&domain=<?= $domain2 ?>"
                                                    class="similarDomain border-bottom dashed font-weight-500 font-20 font-weight-bold text-white">
                                                </a>
                                                <a target="_blank" href="//<?=$domain2?>" class="ml-2 text-white"><i
                                                        class="fal fa-external-link"></i></a>
                                                <a href="javascript:;" class="changeWebSite ml-2 text-white"><i
                                                        class="fal fa-pencil"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG domain2-->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <a target="_top" href="website-analysis.php"
                class="position-relative text-white bg-white-30 p-10 rounded"><i class="far fa-angle-left m-r-5"></i>
                Trở lại</a> -->
            <div class="row pt-0">
                <div class="col-12">
                    <div class="">
                        <div class="bg-compare d-none d-lg-block">
                            <div class="bg-current"></div>
                            <div class="bg-competitor">
                                <div class="divider"></div>
                            </div>
                        </div>
                        <a target="_top" href="?view=traffic-website&action=result&domain=<?= $domain1 ?>"
                            class="position-relative text-white bg-dark p-10 rounded d-none d-lg-inline-block"
                            style="top: 20px; left: -6%; z-index:1"><i class="far fa-angle-left m-r-5"></i> Trở lại</a>
                        <div class="row">
                            <!--domain1-->
                            <div class="<?= $idDomain1 ?> col-12 col-lg-5 p-0">
                                <div class="pt-5" style="background-color: #57606f">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3 text-white">
                                        <div class="similarHeaderLeft flex-grow-1 mr-md-5 mb-3">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3">
                                                <div class="similarIcon"></div>
                                                <a href="?view=traffic-website&action=result&domain=<?= $domain1 ?>"
                                                    class="similarDomain border-bottom dashed font-weight-500 font-20 font-weight-bold text-white">
                                                </a>
                                                <a target="_blank" href="//<?=$domain1?>" class="ml-2 text-white"><i
                                                        class="fal fa-external-link"></i></a>
                                                <a href="javascript:;" class="changeWebSite ml-2 text-white"><i
                                                        class="fal fa-pencil"></i></a>
                                            </div>
                                            <div class="similarTitle text-uppercase mb-2 placeholder-loading overflow-hidden"
                                                style="height: 35px"></div>
                                            <div class="similarDescription mb-4 placeholder-loading"
                                                style="height: 50px"></div>
                                            <!-- <div class="similarTags mb-4 placeholder-loading"></div> -->
                                            <!-- <div class="row mb-4">
                                                <div
                                                    class="similarRelatedApps placeholder-loading col-12 col-md-3 mb-4 mb-md-0">
                                                    <div class="similarRelatedAppsTitle font-bold mb-3"></div>
                                                    <div class="similarApps"></div>
                                                </div>
                                                <div class="similarTags placeholder-loading col-12 col-md-8"
                                                    style="height: 200px"></div>
                                            </div> -->
                                        </div>
                                        <div
                                            class="similarHeaderRight mt-5 mt-md-0 justify-content-center align-items-center">
                                            <div class="similarThumb">
                                                <img class="placeholder-loading w-100 h-100" />
                                            </div>
                                            <div class="similarThumbMobile">
                                                <img class="placeholder-loading w-100 h-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="similarFooter">
                                        <div class="similarRank">
                                            <div class="row p-4">
                                                <div class="col-6">
                                                    <div class="d-flex no-block flex-column h-100 align-items-center">
                                                        <!-- <span class="fa-stack fa-2x">
                                                            <i class="fas fa-square fa-stack-2x text-success"></i>
                                                            <i
                                                                class="fas fa-globe-europe fa-stack-1x fa-inverse fa-1x"></i>
                                                        </span> -->
                                                        <div class="d-flex no-block flex-column">
                                                            <span
                                                                class="font-12 text-uppercase align-self-center text-white">Quốc
                                                                Tế</span>
                                                            <span
                                                                class="similarGlobalRank h2 font-gg text-white m-auto">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="d-flex no-block flex-column h-100 align-items-center">
                                                        <!-- <span class="fa-stack fa-2x">
                                                            <i class="fas fa-square fa-stack-2x text-danger"></i>
                                                            <i
                                                                class="fas fa-star fa-stack-1x fa-inverse text-yellow fa-1x"></i>
                                                        </span> -->
                                                        <div class="d-flex no-block flex-column">
                                                            <span
                                                                class="font-12 text-uppercase align-self-center text-white">Việt
                                                                Nam</span>
                                                            <span
                                                                class="similarCountryRank h2 font-gg text-white m-auto">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="col-4">
                                                    <div class="d-flex no-block flex-row align-items-center">
                                                        <span class="fa-stack fa-2x">
                                                            <i class="fas fa-square fa-stack-2x text-info"></i>
                                                            <i
                                                                class="fas fa-share-alt fa-stack-1x fa-inverse fa-1x"></i>
                                                        </span>
                                                        <div class="d-flex no-block flex-grow-1">
                                                            <span
                                                                class="font-12 text-uppercase align-self-center mr-2">Chia
                                                                sẻ</span>
                                                            <div
                                                                class="share-social similarShare d-flex no-block flex-row flex-grow-1 justify-content-end">
                                                                <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                                                    target="_blank"
                                                                    dhref="https://www.facebook.com/sharer/sharer.php?display=popup&u=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>"
                                                                    data-toggle="tooltip" title="Chia sẻ lên Facebook"
                                                                    data-placement="top">
                                                                    <i class="fab fa-facebook-f fa-lg"></i>
                                                                </a>
                                                                <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                                                    target="_blank"
                                                                    dhref="https://twitter.com/home?status=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>"
                                                                    data-toggle="tooltip" title="Chia sẻ lên Twitter"
                                                                    data-placement="top">
                                                                    <i class="fab fa-twitter fa-lg"></i>
                                                                </a>
                                                                <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                                                    target="_blank"
                                                                    dhref="https://pinterest.com/pin/create/button/?url=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>&media=&description="
                                                                    data-toggle="tooltip" title="Chia sẻ lên Pinterest"
                                                                    data-placement="top">
                                                                    <i class="fab fa-pinterest fa-lg"></i>
                                                                </a>
                                                                <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                                                    target="_blank"
                                                                    dhref="https://www.linkedin.com/shareArticle?mini=true&url=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>&title=&summary=&source="
                                                                    data-toggle="tooltip" title="Chia sẻ lên Pinterest"
                                                                    data-placement="top">
                                                                    <i class="fab fa-linkedin-in fa-lg"></i>
                                                                </a>
                                                                <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                                                    target="_blank"
                                                                    dhref="mailto:info@example.com?&subject=&body=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>"
                                                                    data-toggle="tooltip" title="Chia sẻ qua Mail"
                                                                    data-placement="top">
                                                                    <i class="fa fa-envelope fa-lg"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG domain1-->

                            <div class="col-12 col-lg-2">
                                <div class="vs-ph">
                                    <div class="vs-box"> VS </div>
                                </div>
                            </div>

                            <!--domain2-->
                            <div class="<?= $idDomain2 ?> col-12 col-lg-5 p-0">
                                <div class="pt-5" style="background-color: #4b7bec">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3 text-white">
                                        <div class="similarHeaderLeft flex-grow-1 mr-md-5 mb-3">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3">
                                                <div class="similarIcon"></div>
                                                <a href="?view=traffic-website&action=result&domain=<?= $domain2 ?>"
                                                    class="similarDomain border-bottom dashed font-weight-500 font-20 font-weight-bold text-white">
                                                </a>
                                                <a target="_blank" href="//<?=$domain2?>" class="ml-2 text-white"><i
                                                        class="fal fa-external-link"></i></a>
                                                <a href="javascript:;" class="changeWebSite ml-2 text-white"><i
                                                        class="fal fa-pencil"></i></a>
                                            </div>
                                            <div class="similarTitle text-uppercase mb-2 placeholder-loading overflow-hidden"
                                                style="height: 35px"></div>
                                            <div class="similarDescription mb-4 placeholder-loading"
                                                style="height: 50px"></div>
                                            <!-- <div class="similarTags mb-4 placeholder-loading"></div> -->
                                            <!-- <div class="row mb-4">
                                                <div
                                                    class="similarRelatedApps placeholder-loading col-12 col-md-3 mb-4 mb-md-0">
                                                    <div class="similarRelatedAppsTitle font-bold mb-3"></div>
                                                    <div class="similarApps"></div>
                                                </div>
                                                <div class="similarTags placeholder-loading col-12 col-md-8"
                                                    style="height: 200px"></div>
                                            </div> -->
                                        </div>
                                        <div
                                            class="similarHeaderRight mt-5 mt-md-0 justify-content-center align-items-center">
                                            <div class="similarThumb">
                                                <img class="placeholder-loading w-100 h-100" />
                                            </div>
                                            <div class="similarThumbMobile">
                                                <img class="placeholder-loading w-100 h-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="similarFooter">
                                        <div class="similarRank">
                                            <div class="row p-4">
                                                <div class="col-6">
                                                    <div class="d-flex no-block flex-column h-100 align-items-center">
                                                        <!-- <span class="fa-stack fa-2x">
                                                            <i class="fas fa-square fa-stack-2x text-success"></i>
                                                            <i
                                                                class="fas fa-globe-europe fa-stack-1x fa-inverse fa-1x"></i>
                                                        </span> -->
                                                        <div class="d-flex no-block flex-column">
                                                            <span
                                                                class="font-12 text-uppercase align-self-center text-white">Quốc
                                                                Tế</span>
                                                            <span
                                                                class="similarGlobalRank h2 font-gg text-white m-auto">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="d-flex no-block flex-column h-100 align-items-center">
                                                        <!-- <span class="fa-stack fa-2x">
                                                            <i class="fas fa-square fa-stack-2x text-danger"></i>
                                                            <i
                                                                class="fas fa-star fa-stack-1x fa-inverse text-yellow fa-1x"></i>
                                                        </span> -->
                                                        <div class="d-flex no-block flex-column">
                                                            <span
                                                                class="font-12 text-uppercase align-self-center text-white">Việt
                                                                Nam</span>
                                                            <span
                                                                class="similarCountryRank h2 font-gg text-white m-auto">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!--ĐÓNG domain2-->
                        </div>
                    </div>
                </div>
            </div>

            <!-- chia sẻ -->
            <!-- <div class="m-auto" style="position: fixed; right: 20px; bottom: 50px">
                <div class="d-flex no-block flex-row justify-content-center align-items-center">  
                        <div class="share-social d-flex no-block flex-column justify-content-center">
                            <span class="font-12 text-uppercase align-self-center">Chia sẻ</span>
                            <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                target="_blank"
                                dhref="https://www.facebook.com/sharer/sharer.php?display=popup&u=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>"
                                data-toggle="tooltip" title="Chia sẻ lên Facebook" data-placement="top">
                                <i class="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                target="_blank"
                                dhref="https://twitter.com/home?status=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>"
                                data-toggle="tooltip" title="Chia sẻ lên Twitter" data-placement="top">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                            <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                target="_blank"
                                dhref="https://pinterest.com/pin/create/button/?url=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>&media=&description="
                                data-toggle="tooltip" title="Chia sẻ lên Pinterest" data-placement="top">
                                <i class="fab fa-pinterest fa-lg"></i>
                            </a>
                            <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                target="_blank"
                                dhref="https://www.linkedin.com/shareArticle?mini=true&url=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>&title=&summary=&source="
                                data-toggle="tooltip" title="Chia sẻ lên Pinterest" data-placement="top">
                                <i class="fab fa-linkedin-in fa-lg"></i>
                            </a>
                            <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer"
                                target="_blank"
                                dhref="mailto:info@example.com?&subject=&body=https://fff.com.vn/ket-qua-phan-tich-website/<?=$domain?>"
                                data-toggle="tooltip" title="Chia sẻ qua Mail" data-placement="top">
                                <i class="fa fa-envelope fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- ĐÓNG chia sẻ -->

            <div class="similarBody" style="background: #edf1f5">
                <!--Tổng Truy Cập-->
                <div class="row mt-5">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <path
                                                d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                                id="Path-3" fill="#000000" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Tổng truy cập")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="<?= $idDomain1 ?> col-6 col-md-6">
                                    <div class="border-right dashed">
                                        <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                            <div class="similarHeaderLeft flex-grow-1">
                                                <div
                                                    class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                    <div class="similarIcon"></div>
                                                    <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                        style="color: #57606f">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="totalTraffic"
                                            class="d-flex no-block align-items-center justify-content-center is-loading"
                                            style="height: 200px;">
                                            <h1 class="counter font-gg" style="color: #57606f"></h1>
                                        </div>
                                    </div>
                                </div>

                                <div class="<?= $idDomain2 ?> col-6 col-md-6">
                                    <div class="border-right dashed">
                                        <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                            <div class="similarHeaderLeft flex-grow-1">
                                                <div
                                                    class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                    <div class="similarIcon"></div>
                                                    <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                        style="color: #4b7bec">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="totalTraffic"
                                            class="d-flex no-block align-items-center justify-content-center is-loading"
                                            style="height: 200px;">
                                            <h1 class="counter font-gg" style="color: #4b7bec"></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--ĐÓNG Tổng Truy Cập-->

                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row">
                                <div class="col-6 col-md-4">
                                    <div class="border-right dashed d-flex h-100 pt-5 pt-md-0">
                                        <div class="w-100 rounded pr-3 pl-3 text-muted mt-auto" style="height: 250px;">
                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-calendar-week fa-lg"></i></span>
                                                </div>

                                                <div class="col text-left h6 m-0 align-self-center">
                                                    <?=_("Lượt truy cập hàng tháng")?></div>

                                                <div class="col-4 text-right">
                                                    <span
                                                        class="MonthlyVisits h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-clipboard-user fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center">
                                                    <?=_("Khách truy cập hàng tháng")?></div>

                                                <div class="col-4 text-right">
                                                    <span
                                                        class="MonthlyUniqueVisitors h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-stopwatch fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center">
                                                    <?=_("Thời gian truy cập trung bình")?></div>

                                                <div class="col-4 text-right">
                                                    <span
                                                        class="AvgVisitDuration h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-copy fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center">
                                                    <?=_("Số trang/Lượt truy cập")?></div>

                                                <div class="col-4 text-right">
                                                    <span
                                                        class="PagesperVisit h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-external-link fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center">
                                                    <?=_("Tỷ lệ thoát")?></div>

                                                <div class="col-4 text-right">
                                                    <span class="BounceRate h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="<?= $idDomain1 ?> col-3 col-md-4">
                                    <div class="border-right dashed">
                                        <div class="similarHeader d-flex flex-column p-3 p-md-3">
                                            <div class="similarHeaderLeft flex-grow-1">
                                                <div
                                                    class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                    <div class="similarIcon"></div>
                                                    <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                        style="color: #57606f">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="" id="getTrafficAndEngagementOverviewMonthly">
                                                <div class="w-100 rounded pr-3 pl-3 text-muted" style="height: 250px;">
                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="MonthlyVisits h4 font-gg font-bold"
                                                                style="color: #57606f"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="MonthlyUniqueVisitors h4 font-gg font-bold"
                                                                style="color: #57606f"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="AvgVisitDuration h4 font-gg font-bold"
                                                                style="color: #57606f"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="PagesperVisit h4 font-gg font-bold"
                                                                style="color: #57606f"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="BounceRate h4 font-gg font-bold"
                                                                style="color: #57606f"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="<?= $idDomain2 ?> col-3 col-md-4">
                                    <div class="border-right dashed">
                                        <div class="similarHeader d-flex flex-column p-3 p-md-3">
                                            <div class="similarHeaderLeft flex-grow-1">
                                                <div
                                                    class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                    <div class="similarIcon"></div>
                                                    <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                        style="color: #4b7bec">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="" id="getTrafficAndEngagementOverviewMonthly">
                                                <div class="w-100 rounded pr-3 pl-3 text-muted" style="height: 250px;">
                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="MonthlyVisits h4 font-gg font-bold"
                                                                style="color: #4b7bec"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="MonthlyUniqueVisitors h4 font-gg font-bold"
                                                                style="color: #4b7bec"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="AvgVisitDuration h4 font-gg font-bold"
                                                                style="color: #4b7bec"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="PagesperVisit h4 font-gg font-bold"
                                                                style="color: #4b7bec"></span>
                                                        </div>
                                                    </div>

                                                    <div class="row pt-4 pb-1">
                                                        <div class="col-7 text-right">
                                                            <span class="BounceRate h4 font-gg font-bold"
                                                                style="color: #4b7bec"></span>
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


                <!--truy cập theo quốc gia -->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Truy cập theo quốc gia")?>
                                    </div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="<?= $idDomain1?> col-12 col-md-6 border-right dashed">
                                    <div class="similarHeader d-flex flex-column p-3 p-lg-4">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #57606f">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="<?= $idDomain1?>getWebsiteGeography" class="is-loading"
                                        style="height: 270px"></div>
                                </div>

                                <div class="<?= $idDomain2?> col-12 col-md-6">
                                    <div class="similarHeader d-flex flex-column p-3 p-lg-4">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #4b7bec">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="<?= $idDomain2?>getWebsiteGeography" class="mb-5 is-loading"
                                        style="height: 270px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--ĐÓNG truy cập theo quốc gia -->

                <!--giới tính khách hàng -->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded h-100">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12"
                                                r="10" />
                                            <path
                                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                                id="Combined-Shape" fill="#000000" opacity="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Giới tính khách hàng")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #57606f">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="<?= $idDomain1 ?>getWebDemographicsGender" class="mb-5 is-loading"
                                        style="height: 200px;">
                                    </div>
                                </div>

                                <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #4b7bec">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="<?= $idDomain2 ?>getWebDemographicsGender" class="mb-5 is-loading"
                                        style="height: 200px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--ĐÓNG giới tính khách hàng -->

                <!--độ tuổi khách háng -->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path
                                                d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z"
                                                id="Mask" fill="#000000" opacity="0.3"></path>
                                            <path
                                                d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z"
                                                id="Path-107" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Độ tuổi khách hàng")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>
                            <div class="p-20">
                                <div id="Parent-getWebDemographicsAge">
                                    <div id="getWebDemographicsAge" class="rounded is-loading" style="height: 250px">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--ĐÓNG độ tuổi khách háng -->

                <!--Truy cập theo thiết bị -->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <path
                                                d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                                id="Path-3" fill="#000000" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        <?=_(" Truy cập theo thiết bị")?>
                                    </div>
                                    <!-- <div class="text-muted similarDates font-10"></div> -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #57606f">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Parent-<?= $idDomain1 ?>getDesktopVsMobileVisits">
                                        <div id="<?= $idDomain1 ?>getDesktopVsMobileVisits" class="mb-5 is-loading"
                                            style="height: 200px;">
                                        </div>
                                    </div>
                                </div>

                                <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #4b7bec">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Parent-<?= $idDomain2 ?>getDesktopVsMobileVisits">
                                        <div id="<?= $idDomain2 ?>getDesktopVsMobileVisits" class="mb-5 is-loading"
                                            style="height: 200px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- ĐÓNG Truy cập theo thiết bị -->

                <!--Trung Bình Khách Truy Cập Hàng Tháng -->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded getWebsiteGeography-container">
                            <div class="row border-bottom m-0 py-3">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <span class=""><i class="far fa-clipboard-user fa-lg"></i></span>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">
                                        <?=_(" Trung bình khách truy cập hàng tháng")?>
                                    </div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="<?= $idDomain1 ?> col-12">
                                    <div id="Parent-getUniqueUsersMonthly">
                                        <div id="getUniqueUsersMonthly" style="height: 300px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!--ĐÓNG Trung Bình Khách Truy Cập Hàng Tháng -->

                <!-- nguồn khách hàng -->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <path
                                                d="M3.5,21 L20.5,21 C21.3284271,21 22,20.3284271 22,19.5 L22,8.5 C22,7.67157288 21.3284271,7 20.5,7 L10,7 L7.43933983,4.43933983 C7.15803526,4.15803526 6.77650439,4 6.37867966,4 L3.5,4 C2.67157288,4 2,4.67157288 2,5.5 L2,19.5 C2,20.3284271 2.67157288,21 3.5,21 Z"
                                                id="Combined-Shape" fill="#000000" opacity="0.3" />
                                            <path
                                                d="M12,13 C10.8954305,13 10,12.1045695 10,11 C10,9.8954305 10.8954305,9 12,9 C13.1045695,9 14,9.8954305 14,11 C14,12.1045695 13.1045695,13 12,13 Z"
                                                id="Mask" fill="#000000" opacity="1" />
                                            <path
                                                d="M7.00036205,18.4995035 C7.21569918,15.5165724 9.36772908,14 11.9907452,14 C14.6506758,14 16.8360465,15.4332455 16.9988413,18.5 C17.0053266,18.6221713 16.9988413,19 16.5815,19 C14.5228466,19 11.463736,19 7.4041679,19 C7.26484009,19 6.98863236,18.6619875 7.00036205,18.4995035 Z"
                                                id="Mask-Copy" fill="#000000" opacity="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Nguồn khách hàng")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="Parent-getTrafficSourcesOverview">
                                    <div id="getTrafficSourcesOverview" class="w-100 rounded is-loading"
                                        style="height: 250px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ĐÓNG nguồn khách hàng -->

                <!---phân tích nguồn KH-->
                <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row m-0 pt-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Phân tích nguồn khách hàng")?>
                                    </div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                            </div>
                            <div class="row" id="Parent-getMarketingMixOverview">
                                <div class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                    <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                        <div class="similarHeaderLeft flex-grow-1">
                                            <div
                                                class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                <div class="similarIcon"></div>
                                                <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                    style="color: #57606f">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div id="<?= $idDomain1 ?>getMarketingMixOverview"
                                            style="width: 100%; height: 300px"></div>
                                    </div>
                                </div>
                                <div class="<?= $idDomain2 ?> col-12 col-md-6 border-right dashed">
                                    
                                        <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                            <div class="similarHeaderLeft flex-grow-1">
                                                <div
                                                    class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                    <div class="similarIcon"></div>
                                                    <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                        style="color: #4b7bec">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 ">
                                            <div id="<?= $idDomain2 ?>getMarketingMixOverview"
                                                style="width: 100%; height: 300px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!---đóng phân tích nguồn KH -->

                    <!--tỉ lệ truy cập từ tìm kiếm -->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded h-100">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                                            viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12"
                                                    r="10" />
                                                <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                                    rx="1" />
                                                <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2"
                                                    height="2" rx="1" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_(" Tỉ lệ truy cập từ tìm kiếm")?>
                                        </div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>

                                <div id="Parent-getTrafficSourcesSearch">
                                    <div class="row" id="getTrafficSourcesSearch">
                                        <div class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1 ?>getTrafficSourcesSearch" class="mb-5 is-loading"
                                                style="height: 200px;">
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2 ?>getTrafficSourcesSearch" class="mb-5 is-loading"
                                                style="height: 200px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ĐÓNG tỉ lệ truy cập từ tìm kiếm -->

                    <!--Chi Tiết Truy Cập Từ Tìm Kiếm -->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded">
                                <div class="row m-0 pt-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_(" Chi tiết truy cập từ tìm kiếm")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getSearchOrganicPaidOverview">
                                    <div id="getSearchOrganicPaidOverview" class="rounded" style="min-height:250px">
                                        <ul class="nav nav-tabs customtab" role="tablist">
                                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                                    data-task="TrafficShare"
                                                    href="#getSearchOrganicPaidOverview--TrafficShare" role="tab"><span
                                                        class=""><i class="fal fa-chart-pie-alt fa-1x"></i></span>
                                                    <span class="d-none d-md-inline">Lượng Truy Cập</span></a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                    data-task="AverageDuration"
                                                    href="#getSearchOrganicPaidOverview--AverageDuration"
                                                    role="tab"><span class=""><i
                                                            class="fal fa-stopwatch fa-1x"></i></span> <span
                                                        class="d-none d-md-inline">Thời Gian Trung Bình</span></a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                    data-task="PagesPerVisit"
                                                    href="#getSearchOrganicPaidOverview--PagesPerVisit" role="tab"><span
                                                        class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                                        class="d-none d-md-inline">Số Trang / Lượt Truy Cập</span></a>
                                            </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                    data-task="BounceRate"
                                                    href="#getSearchOrganicPaidOverview--BounceRate" role="tab"><span
                                                        class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                                    <span class="d-none d-md-inline">Tỉ Lệ Thoát Trang</span></a> </li>
                                        </ul>
                                        <!-- Tab panes -->
                                        <div class="row">
                                            <!-- <div class="col-12 col-md-3 pt-5 pt-md-0">
                                            <div id="getSearchOrganicPaidOverview--totalTraffic" class="d-flex no-block flex-column justify-content-center h-100"></div>
                                        </div> -->
                                            <div class="col-12 tab-content mt-1 mt-md-3">
                                                <div class="tab-pane px-4 active"
                                                    id="getSearchOrganicPaidOverview--TrafficShare" role="tabpanel"
                                                    style="height: auto">
                                                    <div class="row">
                                                        <div
                                                            class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #57606f">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain1 ?>getSearchOrganicPaidOverview--TrafficShare"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                        <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #4b7bec">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain2 ?>getSearchOrganicPaidOverview--TrafficShare"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane px-4"
                                                    id="getSearchOrganicPaidOverview--AverageDuration" role="tabpanel"
                                                    style="height: auto">
                                                    <div class="row">
                                                        <div
                                                            class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #57606f">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain1 ?>getSearchOrganicPaidOverview--AverageDuration"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                        <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #4b7bec">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain2 ?>getSearchOrganicPaidOverview--AverageDuration"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane px-4"
                                                    id="getSearchOrganicPaidOverview--PagesPerVisit" role="tabpanel"
                                                    style="height: auto">
                                                    <div class="row">
                                                        <div
                                                            class="<?= $idDomain1 ?> col-12 col-md-6 border-right dashed">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #57606f">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain1 ?>getSearchOrganicPaidOverview--PagesPerVisit"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                        <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #4b7bec">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain2 ?>getSearchOrganicPaidOverview--PagesPerVisit"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--BounceRate"
                                                    role="tabpanel" style="height: auto">
                                                    <div class="row">
                                                        <div class="<?= $idDomain1 ?> col-12 col-md-6 border-dashed">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #57606f">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain1 ?>getSearchOrganicPaidOverview--BounceRate"
                                                                class="rounded is-loading" style="min-height:400px">
                                                            </div>
                                                        </div>
                                                        <div class="<?= $idDomain2 ?> col-12 col-md-6">
                                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                                <div class="similarHeaderLeft flex-grow-1">
                                                                    <div
                                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                                        <div class="similarIcon"></div>
                                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                                            style="color: #4b7bec">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="<?= $idDomain2 ?>getSearchOrganicPaidOverview--BounceRate"
                                                                class="rounded is-loading" style="min-height:400px">
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
                    <!--ĐÓNG Chi Tiết Truy Cập Từ Tìm Kiếm-->

                    <!--Tỉ Lệ Truy Cập Theo Từ Khoá Tự Nhiên -->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="h-100 bg-white shadow-sm rounded">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                                            viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12"
                                                    r="10" />
                                                <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                                    rx="1" />
                                                <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2"
                                                    height="2" rx="1" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_(" Tỉ lệ truy cập theo từ khoá tự nhiên")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getSearchBrandedKeywords">
                                    <div class="row" id="getSearchBrandedKeywords">
                                        <div class="<?= $idDomain1?> col-12 col-md-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1?>getSearchBrandedKeywords" class="mb-5 is-loading"
                                                style="height: 200px;">
                                            </div>
                                        </div>
                                        <div class="<?= $idDomain2?> col-12 col-md-6">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2?>getSearchBrandedKeywords" class="mb-5 is-loading"
                                                style="height: 200px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--ĐÓNG Tỉ Lệ Truy Cập Theo Từ Khoá Tự Nhiên -->

                    <!--mẫu quảng cáo tìm kiếm trả phí-->
                    <div class="row">
                        <div class="col-12">
                            <div class="bg-white shadow-sm rounded mb-5" id="getScrapedSearchAds">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_(" Mẫu quảng cáo tìm kiếm trả phí")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getScrapedSearchAds">
                                    <div class="row" id="getScrapedSearchAds">
                                        <div class="<?= $idDomain1?> col-12 col-md-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1?>getScrapedSearchAds" class="carousel slide"
                                                data-interval="false">
                                                <ol class="carousel-indicators">
                                                </ol>
                                                <div class="carousel-inner rounded-bottom is-loading" role="listbox"
                                                    style="height: 370px">
                                                </div>
                                                <a class="carousel-control-prev"
                                                    href="#<?= $idDomain1?>getScrapedSearchAds" role="button"
                                                    data-slide="prev">
                                                    <i
                                                        class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                                <a class="carousel-control-next"
                                                    href="#<?= $idDomain1?>getScrapedSearchAds" role="button"
                                                    data-slide="next">
                                                    <i
                                                        class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2?> col-12 col-md-6">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2?>getScrapedSearchAds" class="carousel slide"
                                                data-interval="false">
                                                <ol class="carousel-indicators">
                                                </ol>
                                                <div class="carousel-inner rounded-bottom is-loading" role="listbox"
                                                    style="height: 370px">
                                                </div>
                                                <a class="carousel-control-prev"
                                                    href="#<?= $idDomain2?>getScrapedSearchAds" role="button"
                                                    data-slide="prev">
                                                    <i
                                                        class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                                <a class="carousel-control-next"
                                                    href="#<?= $idDomain2?>getScrapedSearchAds" role="button"
                                                    data-slide="next">
                                                    <i
                                                        class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- ĐÓNG mẫu quảng cáo tìm kiếm trả phí-->

                    <!--Truy Cập Quảng Cáo Hiển Thị-->
                    <div class="row">
                        <div class="col-12 mb-5" id="getWebsiteAdsVisitsOverview">
                            <div class="bg-white shadow-sm rounded h-100">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_("Truy cập quảng cáo hiển thị")?>
                                        </div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>

                                <div id="Parent-getWebsiteAdsVisitsOverview">
                                    <div class="row" style="height: 270px" id="getWebsiteAdsVisitsOverview">
                                        <div class="<?= $idDomain1?> col-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-3 p-lg-2">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-5 is-loading font-number h1 text-center"
                                                style="color: #57606f" id="<?= $idDomain1?>getWebsiteAdsVisitsOverview">
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2?> col-6">
                                            <div class="similarHeader d-flex flex-column p-3 p-lg-2">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-5 is-loading font-number h1 text-center"
                                                style="color: #4b7bec" id="<?= $idDomain2?>getWebsiteAdsVisitsOverview">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--ĐÓNG Truy Cập Quảng Cáo Hiển Thị -->

                    <!-- kênh quảng cáo -->
                    <div class="row">
                        <div class="col-12 mb-5 getTrafficDisplayAdvertisingAds">
                            <div class="bg-white shadow-sm rounded h-100">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                                            viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                </circle>
                                                <path
                                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                                    id="Path-3" fill="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold"> <?=_("Kênh quảng cáo")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getTrafficDisplayAdvertisingAds">
                                    <div class="row" id="getTrafficDisplayAdvertisingAds">
                                        <div class="<?= $idDomain1 ?> col-12 col-md-6 p-3 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-3 p-lg-2">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1 ?>getTrafficDisplayAdvertisingAds"
                                                class="mb-3 is-loading" style="height: 200px"></div>
                                        </div>

                                        <div class="<?= $idDomain2 ?> col-12 col-md-6 p-3">
                                            <div class="similarHeader d-flex flex-column p-3 p-lg-2">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2 ?>getTrafficDisplayAdvertisingAds"
                                                class="mb-3 is-loading" style="height: 200px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Đóng kênh quảng cáo -->

                    <!--Mẫu Quảng Cáo Hiển Thị-->
                    <div class="row">
                        <div class="col-12">
                            <div class="bg-white shadow-sm rounded mb-5" id="getWebsiteAdsIntelDisplay">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_(" Mẫu Quảng Cáo Hiển Thị")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getWebsiteAdsIntelDisplay">
                                    <div class="row" id="getWebsiteAdsIntelDisplay">
                                        <div class="<?= $idDomain1?> col-12 col-md-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1?>getWebsiteAdsIntelDisplay" class="carousel slide"
                                                data-interval="false">
                                                <ol class="carousel-indicators">
                                                </ol>
                                                <div class="carousel-inner rounded-bottom is-loading" role="listbox"
                                                    style="height: 370px">
                                                </div>
                                                <a class="carousel-control-prev"
                                                    href="#<?= $idDomain1?>getWebsiteAdsIntelDisplay" role="button"
                                                    data-slide="prev">
                                                    <i
                                                        class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                                <a class="carousel-control-next"
                                                    href="#<?= $idDomain1?>getWebsiteAdsIntelDisplay" role="button"
                                                    data-slide="next">
                                                    <i
                                                        class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2?> col-12 col-md-6">
                                            <div class="similarHeader d-flex flex-column p-4 p-lg-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2?>getWebsiteAdsIntelDisplay" class="carousel slide"
                                                data-interval="false">
                                                <ol class="carousel-indicators">
                                                </ol>
                                                <div class="carousel-inner rounded-bottom is-loading" role="listbox"
                                                    style="height: 370px">
                                                </div>
                                                <a class="carousel-control-prev"
                                                    href="#<?= $idDomain2?>getWebsiteAdsIntelDisplay" role="button"
                                                    data-slide="prev">
                                                    <i
                                                        class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                                <a class="carousel-control-next"
                                                    href="#<?= $idDomain2?>getWebsiteAdsIntelDisplay" role="button"
                                                    data-slide="next">
                                                    <i
                                                        class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- ĐÓNG Mẫu Quảng Cáo Hiển Thị-->

                    <!-- Lượt Truy Cập Xã Hội -->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_("Lượt truy cập mạng xã hội")?>
                                        </div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-12 pt-2">
                                        <div id="Parent-getSocialVisits">
                                            <div id="getSocialVisits" class="is-loading" style="height: 270px">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="Parent-SocialVisits">
                                    <div class="row" id="SocialVisits">
                                        <div class="<?= $idDomain1 ?> col-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                                                <div id="<?= $idDomain1 ?>TotalSocialVisits"
                                                    class="d-none d-lg-block h4 text-center font-bold text-muted">
                                                </div>
                                                <div id="<?= $idDomain1 ?>getTotalSocialVisits" class="is-loading mb-5"
                                                    style="height: 200px"> </div>
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2 ?> col-6">
                                            <div class="similarHeader d-flex flex-column">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-0 pt-lg-4 pb-4 pb-lg-3">
                                                <div id="<?= $idDomain2?>TotalSocialVisits"
                                                    class="d-none d-lg-block h4 text-center font-bold text-muted">
                                                </div>
                                                <div id="<?= $idDomain2 ?>getTotalSocialVisits" class="is-loading"
                                                    style="height: 200px"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--ĐÓNG Lượt Truy Cập Xã Hội -->

                    <!--Kênh Mạng Xã Hội-->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded h-100">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                                            viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                </circle>
                                                <path
                                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                                    id="Path-3" fill="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold"> Kênh mạng xã hội</div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getTrafficSourcesSocial">
                                    <div class="row" id="getTrafficSourcesSocial">
                                        <div class="<?= $idDomain1?> col-12 col-md-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column pt-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1?>getTrafficSourcesSocial" class="mb-4 is-loading"
                                                style="height: 200px"> </div>
                                        </div>

                                        <div class="<?= $idDomain2?> col-12 col-md-6">
                                            <div class="similarHeader d-flex flex-column pt-3">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2?>getTrafficSourcesSocial" class="mb-4 is-loading"
                                                style="height: 200px"> </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--ĐÓNG Kênh Mạng Xã Hội-->

                    <!--Truy Cập Từ Giới Thiệu-->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold"><?=_(" Truy cập từ giới thiệu")?>
                                        </div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div id="Parent-getReferralVisits">
                                            <div id="getReferralVisits" class="is-loading" style="height: 270px">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Parent-ReferralVisits">
                                    <div class="row pb-4" id="ReferralVisits">
                                        <div class="<?= $idDomain1 ?> col-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                                                <div id="<?= $idDomain1 ?>TotalReferrals"
                                                    class="d-none d-lg-block text-center h4 font-bold text-muted">
                                                </div>
                                                <div id="<?= $idDomain1 ?>getTotalReferrals" class="is-loading mb-5"
                                                    style="height: 200px"></div>
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2 ?> col-6">
                                            <div class="similarHeader d-flex flex-column">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                                                <div id="<?= $idDomain2 ?>TotalReferrals"
                                                    class="d-none d-lg-block text-center h4 font-bold text-muted">
                                                </div>
                                                <div id="<?= $idDomain2 ?>getTotalReferrals" class="is-loading"
                                                    style="height: 200px"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--ĐÓNG Truy Cập Từ Giới Thiệu-->

                    <!-- lượng khách bấm vào quảng cáo + domain -->
                    <div class="row getOutgoingAds">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_("Lượng khách bấm vào quảng cáo trên $domain1 và $domain2")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getOutgoingAds" id="getOutgoingAds">
                                    <div id="getOutgoingAds" class="row rounded m-0 p-b-10 is-loading"
                                        style="height: 270px">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ĐÓNG lượng khách bấm vào quảng cáo + domain -->

                    <!-- Kênh Quảng Cáo cho + domain -->
                    <div class="row getTrafficDisplayPaidOutgoingAdsTable">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded h-100">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
                                            viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                </circle>
                                                <path
                                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                                    id="Path-3" fill="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_("Kênh quảng cáo cho $domain1 và $domain2")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                </div>
                                <div id="Parent-getTrafficDisplayPaidOutgoingAdsTable">
                                    <div class="row" id="getTrafficDisplayPaidOutgoingAdsTable">
                                        <div class="<?= $idDomain1?> col-12 col-md-6 pb-3 border-right dashed">
                                            <div class="similarHeader d-flex flex-column">
                                                <div class="similarHeaderLeft flex-grow-1 mt-3">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain1?>getTrafficDisplayPaidOutgoingAdsTable"
                                                class="mb-3 is-loading" style="height: 200px"></div>
                                        </div>

                                        <div class="<?= $idDomain2?> col-12 col-md-6 pb-3">
                                            <div class="similarHeader d-flex flex-column">
                                                <div class="similarHeaderLeft flex-grow-1 mt-3">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="<?= $idDomain2?>getTrafficDisplayPaidOutgoingAdsTable"
                                                class="mb-3 is-loading" style="height: 200px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ĐÓNG Kênh Quảng Cáo cho + domain -->

                    <!--Tổng Lượng Khách Rời Bỏ Trang-->
                    <div class="row getTotalOutgoingAdVisits">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded h-100">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold">
                                            <?=_("Tổng Lượng Khách Rời Bỏ Trang")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                    <!-- <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getWebsiteAdsVisitsOverview"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div> -->
                                </div>
                                <div id="Parent-getTotalOutgoingAdVisits">
                                    <div class="row m-0" style="height: 250px" id="getTotalOutgoingAdVisits">
                                        <div class="<?= $idDomain1?> col-6 border-right dashed">
                                            <div class="similarHeader d-flex flex-column p-3 p-lg-2">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #57606f">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-5 is-loading font-number h1 text-center"
                                                style="color: #57606f" id="<?= $idDomain1?>getTotalOutgoingAdVisits">
                                            </div>
                                        </div>

                                        <div class="<?= $idDomain2?> col-6">
                                            <div class="similarHeader d-flex flex-column p-3 p-lg-2">
                                                <div class="similarHeaderLeft flex-grow-1">
                                                    <div
                                                        class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3 justify-content-center">
                                                        <div class="similarIcon"></div>
                                                        <div class="similarDomain font-weight-500 font-20 font-weight-bold"
                                                            style="color: #4b7bec">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-5 is-loading font-number h1 text-center"
                                                style="color: #4b7bec;" id="<?= $idDomain2?>getTotalOutgoingAdVisits">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--ĐÓNG Tổng Lượng Khách Rời Bỏ Trang -->

                    <!-- Website đối thủ -->
                    <div class="row">
                        <div class="col-12 mb-5">
                            <div class="bg-white shadow-sm rounded">
                                <div class="row border-bottom m-0 py-2">
                                    <div class="col-auto d-flex no-block align-items-center mx-1">
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
                                        </svg>
                                    </div>
                                    <div class="col-auto pl-0">
                                        <div class="text-capitalize font-weight-bold"><?=_(" Website khác")?></div>
                                        <div class="text-muted similarDates font-10"></div>
                                    </div>
                                    <div class="ml-auto d-flex no-block align-items-center pr-3">
                                        <a class="similarReloadTask text-muted" data-task="getSimilarSites"
                                            href="javascript:;"><i class="fal fa-sync"></i></a>
                                    </div>
                                </div>
                                <div id="getSimilarSites" class="row rounded m-0 p-b-10 is-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ĐÓNG website đối thủ -->

                    <!-- <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                            </circle>
                                            <path
                                                d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                                id="Path-3" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Từ khoá website")?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a target="_top" class="btnKeyWord bg-info-2 text-info p-2"
                                        href="?view=keywords&action=index">Xem thêm
                                    </a>
                                </div>
                            </div>
                            <table id="getKeywords" class="table table-striped" style="width:100%;height:100%;">
                            </table>
                        </div>
                    </div>
                </div> -->
                </div>
            </div>
        </div>
    </div>
    <script>
    $(document).ready(() => {
        setTimeout(() => {
            $.ajax({
                url: `//f.trazk.com/compare.php?domain1=<?=$domain1?>&domain2=<?=$domain2?>`,
                type: "GET"
            }).then(() => {
                // console.log('buildFeatureImage-success');
                return;
            })
        });
    }, 5000);
    </script>

    <script src="<?=$rootURL?>/assets/js/wordcloud2.js?v=<?=$version?>"></script>
    <script src="<?=$rootURL?>/assets/js/ResizeSensor.js?v=<?=$version?>"></script>
    <script>
    var isLogin = '<?=$isLogin?>';
    </script>
    <!-- <script src="dist/js/pages/changeURL.js?v=1.8"></script> -->
    <script type="module" src="<?=$rootURL?>/dist/js/pages/traffic-website/compare-backup.js?v=<?=$version?>"></script>