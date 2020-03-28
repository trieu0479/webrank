<!-- --------------------------------2 nut------------------------- -->
<!--
<div class="two-knut">
     <div class="nut d-flex flex-row ">
        <div class="icon">
            <i class="fad fa-chart-bar"></i>
        </div>
        <a class="font-gg content_text" href="/?action=index&view=report">Dashboard</a>
     </div>
     <div class="subcriber2 nut d-flex flex-row " data-placement="bottom">
        <div class="icon" id="icon_dangky">
            <i class="fad fa-envelope"></i>
        </div>
            <span class="font-gg content_text text_sub">Đăng ký</span>
     </div>
 </div>
-->
<div class="page-wrapper">
    <div class="bg-similar" style="height:500px"></div>
    <div class="container BendmarksTool">
        <div class="page-content pt-5">
            <a target="_top" href="?view=traffic-website&action=index" class="btnGoBack position-relative text-white bg-white-30 p-10 rounded d-block" style="width: 67px"><i class="far fa-angle-left m-r-5"></i> Trở lại</a>
            <!-- HEDER -->
            <div class="row pt-5" id="sendMail">
                <div class="col-12">
                    <div class="bg-white shadow-sm rounded">
                        <div class="similarHeader d-flex p-4 p-lg-5 border-bottom dashed">
                            <div class="similarHeaderLeft flex-grow-1 mr-md-5">
                                <div class="similarDomainWrapper placeholder-loading d-flex no-block flex-row align-items-center mb-3">
                                    <div class="similarIcon"></div>
                                    <div class="similarDomain border-bottom dashed font-weight-500 font-20 font-weight-bold text-primary">
                                    </div>
                                    <a target="_blank" href="//<?= $domain ?>" class="ml-2" data-toggle="tooltip" data-placement="top" title="Truy cập website này"><i class="fad font-20 fa-external-link-square-alt"></i></a>
                                    <!-- <a href="javascript:;" class="changeWebSite ml-2"><i
                                            class="fal fa-pencil"></i></a> -->
                                    <a href="javascript:;" class="SubmitCompare ml-2" data-toggle="tooltip" data-placement="top" title="So sánh với website khác"><i class="fad font-20 fa-hashtag text-danger"></i></a>
                                </div>
                                <div class="similarTitle text-uppercase mb-2 placeholder-loading"></div>
                                <div class="similarDescription mb-4 placeholder-loading"></div>
                                <!-- <div class="similarTags mb-4 placeholder-loading"></div> -->
                                <div class="row mb-4">
                                    <div class="similarRelatedApps placeholder-loading col-12 col-md-3 mb-4 mb-md-0">
                                        <div class="similarRelatedAppsTitle font-bold mb-3"></div>
                                        <div class="similarApps"></div>
                                    </div>
                                    <div class="similarTags placeholder-loading col-12 col-md-8"></div>
                                </div>
                            </div>
                            <div class="similarHeaderRight ml-auto mt-5 mt-md-0 justify-content-center align-items-center">
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
                                    <div class="col-12 col-lg-3 d-flex">
                                        <span class="font-12 text-uppercase align-self-center mr-2">Định giá:</span>
                                        <div class="money-usd d-flex align-items-baseline ml-auto mr-4">
                                            <span class="fontsize-25">68.86</span>
                                            <i class="fad fa-coin font-18 ml-1 textdollar"></i>

                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-5 border-left border-right">
                                        <div class="d-flex no-block flex-row h-100 align-items-center">
                                            <i class="fal fa-medal font-20 mr-2 text-warning"></i>
                                            <span class="font-12 text-uppercase align-self-center mr-2">Xếp hạng:</span>
                                            <div class="d-flex ml-auto mr-4">
                                                <div class="vn-rank mr-3 " data-toggle="tooltip" title="Việt Nam">
                                                    <span class="similarCountryRank fontsize-25 font-gg text-favorite ml-auto "></span>
                                                    <i class="fas fa-star textyellow font-18"></i>
                                                    <!-- <span>Việt nam</span> -->
                                                </div>
                                                <div class="fontsize-25">/</div>
                                                <div class="world-rank  ml-3" data-toggle="tooltip" title="Quốc Tế">
                                                    <span class="similarGlobalRank fontsize-25 font-gg text-favorite ml-auto "></span>
                                                    <i class="fad fa-globe-americas text-success font-18"></i>
                                                    <!-- <span>Quốc tế</span> -->
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <div class="d-flex no-block flex-row align-items-center">
                                            <i class="fal fa-share-alt font-20 mr-2 text-info"></i>
                                            <div class="d-flex no-block flex-grow-1 share-link-xh">
                                                <span class="font-12 text-uppercase align-self-center mr-2">Chia
                                                    sẻ:</span>
                                                <div class="share-social similarShare d-flex no-block flex-row flex-grow-1 justify-content-end">
                                                    <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer" target="_blank" dhref="https://www.facebook.com/sharer/sharer.php?display=popup&u=https://fff.com.vn/ket-qua-phan-tich-website/<?= $domain ?>" data-toggle="tooltip" title="Chia sẻ lên Facebook" data-placement="top">
                                                        <i class="fab fa-facebook-f fa-lg"></i>
                                                    </a>
                                                    <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer" target="_blank" dhref="https://twitter.com/home?status=https://fff.com.vn/ket-qua-phan-tich-website/<?= $domain ?>" data-toggle="tooltip" title="Chia sẻ lên Twitter" data-placement="top">
                                                        <i class="fab fa-twitter icon-twitter fa-lg"></i>
                                                    </a>
                                                    <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer" target="_blank" dhref="https://pinterest.com/pin/create/button/?url=https://fff.com.vn/ket-qua-phan-tich-website/<?= $domain ?>&media=&description=" data-toggle="tooltip" title="Chia sẻ lên Pinterest" data-placement="top">
                                                        <i class="fab fa-pinterest icon-pinterest fa-lg"></i>
                                                    </a>
                                                    <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer" target="_blank" dhref="https://www.linkedin.com/shareArticle?mini=true&url=https://fff.com.vn/ket-qua-phan-tich-website/<?= $domain ?>&title=&summary=&source=" data-toggle="tooltip" title="Chia sẻ lên Pinterest" data-placement="top">
                                                        <i class="fab fa-linkedin-in icon-linkedin fa-lg"></i>
                                                    </a>
                                                    <a class="btn btn-light btn-circle p-0 text-muted text-favorite-hover mr-1 d-flex no-block align-items-center justify-content-center pointer" target="_blank" dhref="mailto:info@example.com?&subject=&body=https://fff.com.vn/ket-qua-phan-tich-website/<?= $domain ?>" data-toggle="tooltip" title="Chia sẻ qua Mail" data-placement="top">
                                                        <i class="fa fa-envelope icon-email fa-lg"></i>
                                                    </a>
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
            <div class="bg-white rounded p-3 mt-3 mt-3">
                <ul class="nav nav-tabs nav-keyplanner" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="home-tab"  href="./index.php?view=website&action=overview&domain=<?= $_GET['domain'] ?>&language=vn&country=vn" role="tab" aria-controls="home" aria-selected="true"><i class="fal fa-eye font-14 text-muted mr-2"></i>Overview</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="organic"  href="./index.php?view=website&action=organic&domain=<?= $_GET['domain'] ?>&language=vn&country=vn" role="tab" aria-controls="profile" aria-selected="false"><i class="fal fa-sitemap font-14 text-success mr-2"></i>Organic Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  " id="googleads"  href="./index.php?view=website&action=gg-ads&domain=<?= $_GET['domain'] ?>&language=vn&country=vn" role="tab" aria-controls="contact" aria-selected="false"><i class="fal fa-audio-description font-14 text-warning mr-2"></i>Google Ads</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="displayads"  href="./index.php?view=website&action=display-ads&domain=<?= $_GET['domain'] ?>&language=vn&country=vn" role="tab" aria-controls="contact" aria-selected="false">Display Ads</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="social"  href="./index.php?view=website&action=social&domain=<?= $_GET['domain'] ?>&language=vn&country=vn" role="tab" aria-controls="contact" aria-selected="false"><i class="fal fa-signal-stream font-14 text-info mr-2"></i>Social </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="backlink"  href="./index.php?view=website&action=backlink&domain=<?= $_GET['domain'] ?>&language=vn&country=vn" role="tab" aria-controls="contact" aria-selected="false"><i class="fal fa-link font-14 text-danger mr-2"></i>Backlink</a>
                    </li>
                </ul>
            </div>
            <!-- END HEADER -->
            <div class="similarBody ">
                <!-- ////tong quan -->

                <div class="row mt-3 p-10">
                    <div class="col-12 col-lg-12 mb-1">
                        <div class="bg-white shadow-sm rounded">

                            <div class=" row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                            <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _("Overview DisplayAds") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>


                            <div class="rank-displayads bg-white shadow-sm rounded d-flex flex-row w-100" style="height: 138px">
                                <div class="rank-covered mt-4 mb-4 ml-4 mr-4" style="width: 18%!important">
                                    <div class="rank-title d-flex flex-row pl-3">
                                        <span class="font-14 font-weight-400 d-flex flex-row ">Ads</span>
                                        <span style="opacity: .5;margin-top:-2px" class="pl-1" data-toggle="tooltip" data-placement="bottom" title="Tổng số quảng cáo hiển thị SEMrush được phát hiện từ một nhà quảng cáo phân tích">
                                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon -Styles-info-icon-3r4P4j-" viewBox="0 0 12 12" width="12" height="12" data-name="InfoChar" data-group="xs">
                                                <path d="M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.158 2.862L6.71 10.67H9V12H5.797a1.499 1.499 0 0 1-1.455-1.863l.95-3.807H3V5h3.203c.976 0 1.691.916 1.455 1.862z" shape-rendering="geometricPresision"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="rank-value pt-3 font-weight-bold pl-3">
                                        <a href="#">
                                            <span class="font-weight-bold ads"></span>
                                        </a>
                                    </div>

                                </div>
                                <div class="rank-covered mt-4 mb-4 ml-4 mr-4" style="width: 18%!important">
                                    <div class="rank-title d-flex flex-row">
                                        <span class="font-14 font-weight-400 d-flex flex-row ">Publishers</span>
                                        <span style="opacity: .5;margin-top:-2px" class="pl-1" data-toggle="tooltip" data-placement="bottom" title="Tổng số tên miền mà SEMrush đã phát hiện xuất bản quảng cáo hiển thị từ một nhà quảng cáo được phân tích.">
                                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon -Styles-info-icon-3r4P4j-" viewBox="0 0 12 12" width="12" height="12" data-name="InfoChar" data-group="xs">
                                                <path d="M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.158 2.862L6.71 10.67H9V12H5.797a1.499 1.499 0 0 1-1.455-1.863l.95-3.807H3V5h3.203c.976 0 1.691.916 1.455 1.862z" shape-rendering="geometricPresision"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="rank-value pt-3 font-weight-bold">
                                        <a href="#">
                                            <span class="font-weight-bold publisher"></span>
                                        </a>
                                    </div>

                                </div>
                                <div class="rank-covered mt-4 mb-4 ml-4 mr-4" style="width:20%!important">
                                    <div class="rank-title d-flex flex-row">
                                        <span class="font-14 font-weight-400 d-flex flex-row ">Times Seen</span>
                                        <span style="opacity: .5;margin-top:-2px" class="pl-1" data-toggle="tooltip" data-placement="bottom" title="Số lần SEMrush phát hiện quảng cáo hiển thị từ một nhà quảng cáo phân tích.">
                                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon -Styles-info-icon-3r4P4j-" viewBox="0 0 12 12" width="12" height="12" data-name="InfoChar" data-group="xs">
                                                <path d="M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.158 2.862L6.71 10.67H9V12H5.797a1.499 1.499 0 0 1-1.455-1.863l.95-3.807H3V5h3.203c.976 0 1.691.916 1.455 1.862z" shape-rendering="geometricPresision"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="rank-value pt-3 font-weight-bold">
                                        <a href="#">
                                            <span class="font-weight-bold t_seen timeseen"></span>
                                        </a>
                                    </div>

                                </div>
                                <div class="rank-covered mt-4 mb-4 ml-4 mr-4" style="width:20%!important">
                                    <div class="rank-title d-flex flex-row">
                                        <span class="font-14 font-weight-400 d-flex flex-row ">First Seen</span>
                                        <span style="opacity: .5;margin-top:-2px" class="pl-1" data-toggle="tooltip" data-placement="bottom" title="Ngày SEMrush lần đầu tiên phát hiện quảng cáo hiển thị từ một nhà quảng cáo phân tích">
                                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon -Styles-info-icon-3r4P4j-" viewBox="0 0 12 12" width="12" height="12" data-name="InfoChar" data-group="xs">
                                                <path d="M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.158 2.862L6.71 10.67H9V12H5.797a1.499 1.499 0 0 1-1.455-1.863l.95-3.807H3V5h3.203c.976 0 1.691.916 1.455 1.862z" shape-rendering="geometricPresision"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="rank-value pt-3 font-weight-bold">
                                        <a href="#">
                                            <span class="font-weight-bold t_seen firstseen"></span>
                                        </a>
                                    </div>

                                </div>
                                <div class="rank-covered mt-4 mb-4 ml-4 mr-4" style="width: 16%!important">
                                    <div class="rank-title d-flex flex-row">
                                        <span class="font-14 font-weight-400 d-flex flex-row ">Last Seen</span>
                                        <span style="opacity: .5;margin-top:-2px" class="pl-1" data-toggle="tooltip" data-placement="bottom" title="
                                Ngày SEMrush phát hiện lần cuối quảng cáo hiển thị từ một nhà quảng cáo phân tích">
                                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon -Styles-info-icon-3r4P4j-" viewBox="0 0 12 12" width="12" height="12" data-name="InfoChar" data-group="xs">
                                                <path d="M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.158 2.862L6.71 10.67H9V12H5.797a1.499 1.499 0 0 1-1.455-1.863l.95-3.807H3V5h3.203c.976 0 1.691.916 1.455 1.862z" shape-rendering="geometricPresision"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="rank-value pt-3 font-weight-bold">
                                        <a href="#">
                                            <span class="font-weight-bold t_seen lastseen"></span>
                                        </a>
                                    </div>

                                </div>

                      
                                </div> 
                     </div>
                   </div>
                </div>
                        <!-- -------sample -ads----------------------- -->
                        <div class="row mt-3 p-10">
                        <div class="col-12 col-lg-12 mb-4">
                        <div class="bg-white shadow-sm rounded"> 
                        <div class=" row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                            <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _("Sample Ads") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-12 bg-white shadow-sm rounded w-100" style="height:350px">
                                <div class="listsample ml-1 mt-3">
                                    <ul class="nav nav-tabs" id="Tabsample" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="img-tab" data-toggle="tab" href="#sample_image" role="tab" aria-controls="image" aria-selected="true">Image <small class="count-image"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="html-tab" data-toggle="tab" href="#sample_html" role="tab" aria-controls="html" aria-selected="false">HTML <small class="count-html"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="text-tab" data-toggle="tab" href="#sample_text" role="tab" aria-controls="text" aria-selected="false">Text <small class="count-text"></small> </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="sample_image" role="tabpanel" aria-labelledby="home-tab">
                                            <div class="sample-image-ads mt-4">
                                                
                                            </div>
                                        </div>
                                        <!-- #het tab-1--------------------------------------- -->

                                        <div class="tab-pane fade" id="sample_html" role="tabpanel" aria-labelledby="profile-tab">
                                            <div class="sample-html-ads">
                                              
                                            </div>

                                        </div>

                                        <!-- ############het tab 2-----------------------------------------     -->
                                        <div class="tab-pane fade" id="sample_text" role="tabpanel" aria-labelledby="contact-tab">
                                            <div class="sample-text-ads">
                                                <!-- <div class="box-text-all">
                                                    <div class="box-text">
                                                        <div class="body-text">
                                                            <a href="" class="title-blued">Mua Là Có Quà Từ Colagte</a>
                                                            <div class="title-greened mt-2">
                                                                <a href="" class="font-12 smallgreend">Colgate</a>
                                                                <span class="child-hover fal fa-external-link"></span>
                                                            </div>
                                                            <a href="#" class="text-contended pt-5">Colgate Sale Mạnh -50% Toàn Gian Hàng, Tặng Kèm Quà Khi Mua Tại LZD Duy Nhất Hôm Nay lazada.vn</a>
                                                        </div>
                                                        <div class="footer-text mt-2">
                                                            <a href="#" class="content-small font-12">lazada.vn</a>
                                                            <p class="tseen">Days seen: <small class="font-12">1</small> </p>
                                                        </div>
                                                    </div>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer--bt-view mt-4 ml-3">
                                        <a href="#">
                                            <button class="btn btn-primary btn-sm" style="padding: 4px 13px;">
                                                <span class="content-btn">View all images ads</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <!-- ----------------------------------top pubsher and AdTypes---------------------- -->
                        <div class="row mt-3">
                            <div class="col-12 col-lg-6 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                                    <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Top Publisher's Categories") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="list-public  d-flex flex-column" style="min-height: 260px">
                                            <div class="row-public-header d-flex">
                                                <div class="left-public d-flex align-items-center h-100">
                                                    <div class="category-pb font-12 line-height-18">Category</div>
                                                </div>
                                                <div class="right-public">
                                                    <div class="percent">Percentage</div>
                                                    <span class="mation">
                                                        <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon -Styles-info-icon-3r4P4j-" viewBox="0 0 12 12" width="12" height="12" data-name="InfoChar" data-group="xs">
                                                            <path d="M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.158 2.862L6.71 10.67H9V12H5.797a1.499 1.499 0 0 1-1.455-1.863l.95-3.807H3V5h3.203c.976 0 1.691.916 1.455 1.862z" shape-rendering="geometricPresision"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <!-- ------------body---- -->
                                            <div class="row-public-footer d-flex">
                                                <div class="row-percent-highlight" id="hl-buss"></div>
                                                <div class="left-public d-flex align-items-center h-100">
                                                    <div class="category-pb cate-1 font-12 line-height-18"></div>
                                                </div>
                                                <div class="right-public">
                                                    <div class="percent count-buss text-info"></div>
                                                </div>
                                            </div>
                                            <!-- ------------body---- -->
                                            <div class="row-public-footer d-flex">
                                                <div class="row-percent-highlight" id="hl-art"></div>
                                                <div class="left-public d-flex align-items-center h-100">
                                                    <div class="category-pb cate-2 font-12 line-height-18"></div>
                                                </div>
                                                <div class="right-public">
                                                    <div class="percent count-art text-info"></div>
                                                </div>
                                            </div>
                                            <!-- ------------body---- -->
                                            <div class="row-public-footer d-flex">
                                                <div class="row-percent-highlight"  id="hl-it"></div>
                                                <div class="left-public d-flex align-items-center h-100">
                                                    <div class="category-pb  cate-3 font-12 line-height-18"></div>
                                                </div>
                                                <div class="right-public">
                                                    <div class="percent count-internet text-info"></div>
                                                </div>
                                            </div>
                                            <!-- ------------body---- -->
                                            <div class="row-public-footer d-flex">
                                                <div class="row-percent-highlight"  id="hl-job"></div>
                                                <div class="left-public d-flex align-items-center h-100">
                                                    <div class="category-pb cate-4 font-12 line-height-18"></div>
                                                </div>
                                                <div class="right-public">
                                                    <div class="percent count-job text-info"></div>
                                                </div>
                                            </div>
                                            <!-- ------------body---- -->
                                            <div class="row-public-footer d-flex">
                                                <div class="row-percent-highlight" id="hl-pp"></div>
                                                <div class="left-public d-flex align-items-center h-100">
                                                    <div class="category-pb cate-5 font-12 line-height-18"></div>
                                                </div>
                                                <div class="right-public">
                                                    <div class="percent count-people text-info"></div>
                                                </div>
                                            </div>





                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- -----------------------adtype --------------->
                            <div class="col-12 col-lg-6 mb-5">
                                <div class="bg-white shadow-sm rounded Ads-Type">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                                    <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Ad Types") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="list-adtypes  d-flex flex-row" style="min-height: 260px">
                                            <div class="adtypes-chart ml-4">
                                                <div>
                                                    <div class="">
                                                        <div class="a ">
                                                            <div class="frames">
                                                                <div class="frames-all"></div>
                                                                <div class="frames-fill" id="fill-blue"></div>
                                                            </div>
                                                        </div>
                                                        <div class="adtypes-percent"><span class="count-percent-blue"></span></div>
                                                    </div>
                                                    <div class="img-type-far">
                                                        <div class="img-types">Image</div>
                                                    </div>
                                                    <div class="text-type-far">
                                                        <div class="count-image-types" id="count-img-type"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ----------------------------part ---1-------->
                                            <div class="adtypes-chart">
                                                <div>
                                                    <div class="">
                                                        <div class="a ">
                                                            <div class="frames">
                                                                <div class="frames-all bg-orange-full"></div>
                                                                <div class="frames-fill bg-orange-fill" id="fill-orange"></div>
                                                            </div>
                                                        </div>
                                                        <div class="adtypes-percent"><span class="count-percent-orange"> </span></div>
                                                    </div>
                                                    <div class="img-type-far">
                                                        <div class="img-types">HTML</div>
                                                    </div>
                                                    <div class="text-type-far">
                                                        <div class="count-image-types" id="count-html-type"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ----------------------------part ---2-------->
                                            <div class="adtypes-chart">
                                                <div>
                                                    <div class="">
                                                        <div class="a ">
                                                            <div class="frames">
                                                                <div class="frames-all bg-green-full"></div>
                                                                <div class="frames-fill bg-green-fill" id="fill-green"></div>
                                                            </div>
                                                        </div>
                                                        <div class="adtypes-percent"><span class="count-percent-green"></span></div>
                                                    </div>
                                                    <div class="img-type-far">
                                                        <div class="img-types">Text</div>
                                                    </div>
                                                    <div class="text-type-far">
                                                        <div class="count-image-types" id="count-text-type"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ----------------------------part ---3-------->


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- ---------------------Device-------------- -->
                        <div class="row mt-3">
                            <div class="col-12 col-lg-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                                    <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Display Ads by Device") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="list-devices  d-flex flex-column" style="min-height: 245px">
                                            <div class="mt-2 list-dt">
                                                <div class="dvc-desktop d-flex align-items-center">
                                                    <div class="ic-dt"><svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon" viewBox="0 0 12 12" width="12" height="12" data-name="Desktop" data-group="xs">
                                                            <path d="M11 0c.6 0 1 .5 1 1v6c0 .5-.4 1-1 1h-3v2h1v1h-6v-1h1v-2h-3c-.6 0-1-.5-1-1v-6c0-.5.4-1 1-1h10zm-10 7h10v-6h-10v6z" shape-rendering="geometricPresision"></path>
                                                        </svg></div>
                                                    <div class="text-dt d-inline-block">
                                                        <div class="content-dt font-12 ">Desktop</div>
                                                    </div>
                                                    <div class="range-dt">
                                                        <div class="slider-full">
                                                            <div class="slider-fill-dt" style=""></div>
                                                        </div>
                                                    </div>
                                                    <div class="text-right dvc-percent-all">
                                                        <div class="dt-percent font-12">
                                                        
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="dvc-score-all text-right">
                                                        <div class="dt-score font-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ------------------2-----------                               -->
                                            <div class="mt-4 list-dt">
                                                <div class="dvc-desktop d-flex align-items-center">
                                                    <div class="ic-dt"><svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon" viewBox="0 0 12 12" width="12" height="12" data-name="Apple" data-group="xs">
                                                            <path d="M8.5 0c-.6 0-1.3.3-1.7.7-.5.5-.8 1.2-.8 1.8.6 0 1.3-.3 1.8-.8.4-.4.7-1.1.7-1.7m.9 6.4c0-1.5 1.2-2.2 1.3-2.3-.8-.9-1.7-1.1-2.5-1.1-.9 0-1.7.8-2.2.8-.5 0-1.2-.8-2-.8-1.1 0-2 .6-2.5 1.5-.3.6-.5 1.2-.5 2 0 1.5.6 3 1.3 4 .5.7 1.1 1.5 1.9 1.5.8 0 1.1-.8 2-.8.9 0 1.2.8 2 .8.7 0 1.3-.6 1.9-1.4.6-.8.9-1.7.9-1.8 0 0-1.6-.6-1.6-2.4" shape-rendering="geometricPresision"></path>
                                                        </svg></div>
                                                    <div class="text-dt d-inline-block">
                                                        <div class="content-dt font-12 ">Apple Tablet</div>
                                                    </div>
                                                    <div class="range-dt">
                                                        <div class="slider-full">
                                                            <div class="slider-fill-tb" style=""></div>
                                                        </div>
                                                    </div>
                                                    <div class="text-right dvc-percent-all">
                                                        <div class="tb-percent font-12">
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="dvc-score-all text-right">
                                                        <div class="tb-score font-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ------------------3-----------                               -->
                                            <div class="mt-4 list-dt">
                                                <div class="dvc-desktop d-flex align-items-center">
                                                    <div class="ic-dt"><svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon" viewBox="0 0 12 12" width="12" height="12" data-name="Android" data-group="xs">
                                                            <path d="M1 11h10v-2h-10v2zm9.9-9.2c.1-.1.1-.2.1-.3 0-.3-.2-.5-.5-.5-.2 0-.3.1-.4.2l-1.2 1.7c-.8-.5-1.8-.9-2.9-.9-1.1 0-2.1.4-2.9 1l-1.2-1.7c-.1-.2-.2-.3-.4-.3-.3 0-.5.2-.5.5 0 .1 0 .2.1.3l1.2 1.9c-.8.8-1.3 2-1.3 3.3v1h10v-1c0-1.3-.5-2.5-1.3-3.4l1.2-1.8zm-2.4 4.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-5 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" shape-rendering="geometricPresision"></path>
                                                        </svg></div>
                                                    <div class="text-dt d-inline-block">
                                                        <div class="content-dt font-12 ">Android Tablet</div>
                                                    </div>
                                                    <div class="range-dt">
                                                        <div class="slider-full">
                                                            <div class="slider-fill-ar" style=""></div>
                                                        </div>
                                                    </div>
                                                    <div class="text-right dvc-percent-all">
                                                        <div class="ar-percent font-12">
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="dvc-score-all text-right">
                                                        <div class="ar-score font-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ------------------4-----------                               -->
                                            <div class="mt-4 list-dt">
                                                <div class="dvc-desktop d-flex align-items-center">
                                                    <div class="ic-dt"><svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon" viewBox="0 0 12 12" width="12" height="12" data-name="Apple" data-group="xs">
                                                            <path d="M8.5 0c-.6 0-1.3.3-1.7.7-.5.5-.8 1.2-.8 1.8.6 0 1.3-.3 1.8-.8.4-.4.7-1.1.7-1.7m.9 6.4c0-1.5 1.2-2.2 1.3-2.3-.8-.9-1.7-1.1-2.5-1.1-.9 0-1.7.8-2.2.8-.5 0-1.2-.8-2-.8-1.1 0-2 .6-2.5 1.5-.3.6-.5 1.2-.5 2 0 1.5.6 3 1.3 4 .5.7 1.1 1.5 1.9 1.5.8 0 1.1-.8 2-.8.9 0 1.2.8 2 .8.7 0 1.3-.6 1.9-1.4.6-.8.9-1.7.9-1.8 0 0-1.6-.6-1.6-2.4" shape-rendering="geometricPresision"></path>
                                                        </svg></div>
                                                    <div class="text-dt d-inline-block">
                                                        <div class="content-dt font-12 ">Apple Mobile</div>
                                                    </div>
                                                    <div class="range-dt">
                                                        <div class="slider-full">
                                                            <div class="slider-fill-ap" style=""></div>
                                                        </div>
                                                    </div>
                                                    <div class="text-right dvc-percent-all">
                                                        <div class="ap-percent font-12">
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="dvc-score-all text-right">
                                                        <div class="ap-score font-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ------------------5-----------                               -->
                                            <div class="mt-4 list-dt">
                                                <div class="dvc-desktop d-flex align-items-center">
                                                    <div class="ic-dt"><svg fill="currentColor" preserveAspectRatio="xMidYMid meet" class="sc-1_4_12-icon" viewBox="0 0 12 12" width="12" height="12" data-name="Android" data-group="xs">
                                                            <path d="M1 11h10v-2h-10v2zm9.9-9.2c.1-.1.1-.2.1-.3 0-.3-.2-.5-.5-.5-.2 0-.3.1-.4.2l-1.2 1.7c-.8-.5-1.8-.9-2.9-.9-1.1 0-2.1.4-2.9 1l-1.2-1.7c-.1-.2-.2-.3-.4-.3-.3 0-.5.2-.5.5 0 .1 0 .2.1.3l1.2 1.9c-.8.8-1.3 2-1.3 3.3v1h10v-1c0-1.3-.5-2.5-1.3-3.4l1.2-1.8zm-2.4 4.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-5 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" shape-rendering="geometricPresision"></path>
                                                        </svg></div>
                                                    <div class="text-dt d-inline-block">
                                                        <div class="content-dt font-12 ">Android Mobile</div>
                                                    </div>
                                                    <div class="range-dt">
                                                        <div class="slider-full">
                                                            <div class="slider-fill-mb" style=""></div>
                                                        </div>
                                                    </div>
                                                    <div class="text-right dvc-percent-all">
                                                        <div class="mb-percent font-12">
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="dvc-score-all text-right">
                                                        <div class="mb-score font-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                       
                        <!-- ######################################Display Ads by Device----------------------------------------------------- -->
                       <!-- -----------------Audience-------------------------------------------------- -->
                       <div class="row mt-5">
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Display Ads by Countries") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="text-center" style="height: 253px">
                                        <div id="Parent-getDisplayCountryChart">
                                            <div id="getDisplayCountryChart" class="w-100 rounded is-loading" style="height: 221px;padding-top:10px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ---chart-------2---- -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Audience Targeting: Gender") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="text-center" style="height: 253px">
                                        <div id="Parent-getDisplayGenderChart">
                                            <div id="getDisplayGenderChart" class="w-100 rounded is-loading" style="height: 221px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ----------chart---------3 -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Audience Targeting: Age") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="text-center" style="height: 253px">
                                        <div id="Parent-getDisplayAgeChart">
                                            <div id="getDisplayAgeChart" class="w-100 rounded is-loading" style="height: 221px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>







<!-- -----------------------------------------------t ong truy cap-----------------------------     -->
                        <div class="row mt-5">
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Tổng truy cập") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div id="totalTraffic" class="d-flex no-block align-items-center justify-content-center is-loading" style="height: 200px;">
                                            <h1 class="counter font-gg"></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7" rx="1" />
                                                    <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2" rx="1" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Truy cập theo thiết bị") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div id="Parent-getDesktopVsMobileVisits">
                                            <div id="getDesktopVsMobileVisits" class="w-100 rounded is-loading" style="height: 200px;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="" id="getTrafficAndEngagementOverviewMonthly">
                                        <div class="w-100 rounded pr-3 pl-3 text-muted" style="height: 250px;">
                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-calendar-week fa-lg"></i></span>
                                                </div>

                                                <div class="col text-left h6 m-0 align-self-center">
                                                    <?= _("Lượt truy cập hàng tháng") ?></div>

                                                <div class="col-4 text-right">
                                                    <span class="MonthlyVisits h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-clipboard-user fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center"><?= _("Khách truy cập hàng tháng") ?>
                                                </div>

                                                <div class="col-4 text-right">
                                                    <span class="MonthlyUniqueVisitors h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-stopwatch fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center">
                                                    <?= _("Thời gian truy cập trung bình") ?></div>

                                                <div class="col-4 text-right">
                                                    <span class="AvgVisitDuration h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-copy fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center"> <?= _("Số trang/Lượt truy cập") ?>
                                                </div>

                                                <div class="col-4 text-right">
                                                    <span class="PagesperVisit h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>

                                            <div class="row pt-4 pb-1">
                                                <div class="col-auto">
                                                    <span class=""><i class="far fa-external-link fa-lg"></i></span>
                                                </div>

                                                <div class="col h6 m-0 align-self-center"> <?= _("Tỷ lệ thoát") ?></div>

                                                <div class="col-4 text-right">
                                                    <span class="BounceRate h4 font-gg text-favorite font-bold"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <!-- truy cập theo thời gian cũ -->
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
                                            <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                            <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                        </g>
                                    </svg> 
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _(" Truy cập theo thời gian") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto pr-2">
                                    <fieldset>
                                        <input id="setEngagementVisitsDaily" class="radio-inline__input" type="radio"
                                            name="engagementVisits" value="setEngagementVisitsDaily" />
                                        <label class="radio-inline__label" for="setEngagementVisitsDaily">
                                            Ngày
                                        </label>
                                        <input id="setEngagementVisitsWeekly" class="radio-inline__input" type="radio"
                                            name="engagementVisits" value="setEngagementVisitsWeekly"
                                            checked="checked" />
                                        <label class="radio-inline__label" for="setEngagementVisitsWeekly">
                                            Tuần
                                        </label>
                                        <input id="setEngagementVisitsMonthly" class="radio-inline__input" type="radio"
                                            name="engagementVisits" value="setEngagementVisitsMonthly" />
                                        <label class="radio-inline__label" for="setEngagementVisitsMonthly">
                                            Tháng
                                        </label>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="getEngagementVisits" class="w-100 rounded is-loading" style="height: 350px;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                        <!-- ĐÓNG -->

                        <!-- từ khoá khách hàng -->
                        <!-- <div class="col-12 col-lg-4 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                            <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                            <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                        </g>
                                    </svg> 
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _(" Từ khóa khách hàng") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getGetAudienceInterests" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="p-20">
                                <div id="getGetAudienceInterests" class="position-relative rounded is-loading" style="height: 250px"></div>
                            </div>
                        </div>
                    </div> -->
                        <!-- ĐÓNG từ khoá khách hàng -->

                        <div class="row">
                            <!--truy cập theo quốc gia -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded getWebsiteGeography-container">
                                    <div class="row border-bottom m-0 py-2 h-100">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Truy cập theo quốc gia") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="getWebsiteGeography text-muted" data-task="getWebsiteGeography" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:300px;">
                                        <table id="getWebsiteGeography" class="table table-striped " style="width:100%;height:100%;"></table>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG truy cập theo quốc gia -->

                            <!--giới tính khách hàng -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" id="Combined-Shape" fill="#000000" opacity="1" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Giới tính khách hàng") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebDemographicsGender" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="p-20">
                                        <div id="getWebDemographicsGender" class="rounded is-loading" style="height: 200px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG giới tính khách hàng -->

                            <!--độ tuổi khách háng -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                                                    <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Độ tuổi khách hàng") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="p-20">
                                        <div id="getWebDemographicsAge" class="rounded is-loading" style="height: 250px"></div>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG độ tuổi khách háng -->
                        </div>


                        <!---truy cập theo thời gian mới-->
                        <div class="row">
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row m-0 pt-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Truy cập theo thời gian") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3" id="TimeChart">
                                            <fieldset>
                                                <input id="setgetTrafficAndEngagementVisitsMonthly" class="radio-inline__input" type="radio" name="getTrafficAndEngagementVisits" value="setgetTrafficAndEngagementVisitsMonthly" checked="checked" />
                                                <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsMonthly">
                                                    Tháng
                                                </label>
                                                <input id="setgetTrafficAndEngagementVisitsWeekly" class="radio-inline__input" type="radio" name="getTrafficAndEngagementVisits" value="setgetTrafficAndEngagementVisitsWeekly" />
                                                <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsWeekly">
                                                    Tuần
                                                </label>

                                                <input id="setgetTrafficAndEngagementVisitsDaily" class="radio-inline__input" type="radio" name="getTrafficAndEngagementVisits" value="setgetTrafficAndEngagementVisitsDaily" />
                                                <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsDaily">
                                                    Ngày
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="getTrafficAndEngagement" class="rounded is-loading" style="min-height:400px">
                                        <ul class="nav nav-tabs customtab" role="tablist">
                                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" data-task="getTrafficAndEngagementVisits" href="#getTrafficAndEngagement--MonthlyVisits" role="tab"> <span class=""><i class="far fa-calendar-week fa-lg"></i></span> <span class="d-none d-md-inline">Lượt truy cập</span></a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="getUniqueUsers" href="#getTrafficAndEngagement--MonthlyUniqueVisitors" role="tab"> <span class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span class="d-none d-md-inline">Trung bình khách truy cập hàng tháng
                                                    </span></a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="getTrafficAndEngagementAvgVisitDuration" href="#getTrafficAndEngagement--AvgVisitDuration" role="tab"> <span class=""><i class="far fa-stopwatch fa-lg"></i></span> <span class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a>
                                            </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="getTrafficAndEngagementPagesPerVisit" href="#getTrafficAndEngagement--PagesPerVisit" role="tab"> <span class=""><i class="far fa-copy fa-lg"></i></span> <span class="d-none d-md-inline">Số trang mỗi lần truy cập</span></a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="getTrafficAndEngagementBounceRate" href="#getTrafficAndEngagement--BounceRate" role="tab"> <span class=""><i class="far fa-external-link fa-lg"></i></span> <span class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                                        </ul>
                                        <!-- Tab panes -->
                                        <div class="row">
                                            <div class="col-12 col-md-12 tab-content mt-1 mt-md-3">
                                                <div class="tab-pane px-4 active" id="getTrafficAndEngagement--MonthlyVisits" role="tabpanel" style="height: 300px"></div>
                                                <div class="tab-pane px-4 " id="getTrafficAndEngagement--MonthlyUniqueVisitors" role="tabpanel" style="height:300px"></div>
                                                <div class="tab-pane px-4" id="getTrafficAndEngagement--AvgVisitDuration" role="tabpanel" style="height:300px"></div>
                                                <div class="tab-pane px-4" id="getTrafficAndEngagement--PagesPerVisit" role="tabpanel" style="height:300px"></div>
                                                <div class="tab-pane px-4" id="getTrafficAndEngagement--BounceRate" role="tabpanel" style="height:300px"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!---ĐÓNG truy cập theo thời gian mới -->

                        <!-- nguồn khách hàng -->
                        <div class="row">
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <path d="M3.5,21 L20.5,21 C21.3284271,21 22,20.3284271 22,19.5 L22,8.5 C22,7.67157288 21.3284271,7 20.5,7 L10,7 L7.43933983,4.43933983 C7.15803526,4.15803526 6.77650439,4 6.37867966,4 L3.5,4 C2.67157288,4 2,4.67157288 2,5.5 L2,19.5 C2,20.3284271 2.67157288,21 3.5,21 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                                                    <path d="M12,13 C10.8954305,13 10,12.1045695 10,11 C10,9.8954305 10.8954305,9 12,9 C13.1045695,9 14,9.8954305 14,11 C14,12.1045695 13.1045695,13 12,13 Z" id="Mask" fill="#000000" opacity="1" />
                                                    <path d="M7.00036205,18.4995035 C7.21569918,15.5165724 9.36772908,14 11.9907452,14 C14.6506758,14 16.8360465,15.4332455 16.9988413,18.5 C17.0053266,18.6221713 16.9988413,19 16.5815,19 C14.5228466,19 11.463736,19 7.4041679,19 C7.26484009,19 6.98863236,18.6619875 7.00036205,18.4995035 Z" id="Mask-Copy" fill="#000000" opacity="1" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Nguồn khách hàng") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficSourcesOverview" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div id="Parent-getTrafficSourcesOverview">
                                            <div id="getTrafficSourcesOverview" class="w-100 rounded is-loading" style="height: 250px;">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Phân tích nguồn khách hàng") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3" id="TimeChartMarket">
                                            <fieldset>
                                                <input id="setgetMarketingMixOverviewDaily" class="radio-inline__input" type="radio" name="getMarketingMixOverview" value="setgetMarketingMixOverviewDaily" />
                                                <label class="radio-inline__label" for="setgetMarketingMixOverviewDaily">
                                                    Ngày
                                                </label>
                                                <input id="setgetMarketingMixOverviewWeekly" class="radio-inline__input" type="radio" name="getMarketingMixOverview" value="setgetMarketingMixOverviewWeekly" checked="checked" />
                                                <label class="radio-inline__label" for="setgetMarketingMixOverviewWeekly">
                                                    Tuần
                                                </label>
                                                <input id="setgetMarketingMixOverviewMonthly" class="radio-inline__input" type="radio" name="getMarketingMixOverview" value="setgetMarketingMixOverviewMonthly" />
                                                <label class="radio-inline__label" for="setgetMarketingMixOverviewMonthly">
                                                    Tháng
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="Parent-getMarketingMixOverview">
                                        <div id="getMarketingMixOverview" class="rounded is-loading" style="min-height:400px">
                                            <ul class="nav nav-tabs customtab" role="tablist">
                                                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" data-task="TrafficShare" href="#getMarketingMixOverview--TrafficShare" role="tab"><span class=""><i class="fal fa-chart-pie-alt fa-1x"></i></span> <span class="d-none d-md-inline">Truy cập</span></a> </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="AverageDuration" href="#getMarketingMixOverview--AverageDuration" role="tab"><span class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a>
                                                </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="PagesPerVisit" href="#getMarketingMixOverview--PagesPerVisit" role="tab"><span class=""><i class="fal fa-copy fa-1x"></i></span> <span class="d-none d-md-inline">Số trang/Lượt truy cập</span></a> </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="BounceRate" href="#getMarketingMixOverview--BounceRate" role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                                        <span class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                                                <li class="nav-item ">

                                                    <a class="similarReloadTask text-muted nav-link" data-task="getMarketingMixOverviewDaily" href="javascript:;"><i class="fal fa-sync"></i> Cập nhập</a>

                                                </li>
                                            </ul>

                                            <!-- Tab panes -->
                                            <div class="row">
                                                <div class="col-12 col-md-12 mt-1 mt-md-2">
                                                    <span></span>
                                                </div>
                                                <div class="col-12 col-md-12 tab-content mt-1 mt-md-3">
                                                    <div class="tab-pane px-4 active" id="getMarketingMixOverview--TrafficShare" role="tabpanel" style="height:350px"></div>
                                                    <div class="tab-pane px-4" id="getMarketingMixOverview--AverageDuration" role="tabpanel" style="height:350px"></div>
                                                    <div class="tab-pane px-4" id="getMarketingMixOverview--PagesPerVisit" role="tabpanel" style="height:350px"></div>
                                                    <div class="tab-pane px-4" id="getMarketingMixOverview--BounceRate" role="tabpanel" style="height:350px"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!---đóng phân tích nguồn KH -->

                        <!-- loại tìm kiếm -->
                        <div class="row">
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7" rx="1" />
                                                    <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2" rx="1" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Tỉ lệ truy cập từ tìm kiếm") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficSourcesSearch" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="p-20">
                                        <div id="Parent-getTrafficSourcesSearch">
                                            <div id="getTrafficSourcesSearch" class="w-100 rounded is-loading" style="height: 200px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-8 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row m-0 pt-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _(" Chi tiết truy cập từ tìm kiếm") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getSearchOrganicPaidOverview" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getSearchOrganicPaidOverview">
                                        <div id="getSearchOrganicPaidOverview" class="rounded is-loading" style="min-height:250px">
                                            <ul class="nav nav-tabs customtab" role="tablist">
                                                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" data-task="TrafficShare" href="#getSearchOrganicPaidOverview--TrafficShare" role="tab"><span class=""><i class="fal fa-chart-pie-alt fa-1x"></i></span> <span class="d-none d-md-inline">Lượng Truy Cập</span></a> </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="AverageDuration" href="#getSearchOrganicPaidOverview--AverageDuration" role="tab"><span class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span class="d-none d-md-inline">Thời Gian Trung Bình</span></a> </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="PagesPerVisit" href="#getSearchOrganicPaidOverview--PagesPerVisit" role="tab"><span class=""><i class="fal fa-copy fa-1x"></i></span> <span class="d-none d-md-inline">Số Trang / Lượt Truy Cập</span></a> </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="BounceRate" href="#getSearchOrganicPaidOverview--BounceRate" role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                                        <span class="d-none d-md-inline">Tỉ Lệ Thoát Trang</span></a> </li>
                                            </ul>
                                            <!-- Tab panes -->
                                            <div class="row">
                                                <!-- <div class="col-12 col-md-3 pt-5 pt-md-0">
                                            <div id="getSearchOrganicPaidOverview--totalTraffic" class="d-flex no-block flex-column justify-content-center h-100"></div>
                                        </div> -->
                                                <div class="col-12 tab-content mt-1 mt-md-3">
                                                    <div class="tab-pane px-4 active" id="getSearchOrganicPaidOverview--TrafficShare" role="tabpanel" style="height:250px"></div>
                                                    <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--AverageDuration" role="tabpanel" style="height:250px"></div>
                                                    <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--PagesPerVisit" role="tabpanel" style="height:250px"></div>
                                                    <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--BounceRate" role="tabpanel" style="height:250px"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- đóng loại tìm kiếm -->

                        <!--từ khoá truy cập theo tự nhiên-->
                        <div class="row">
                            <div class="col-12 col-lg-5 mb-5">
                                <div class="h-100 bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7" rx="1" />
                                                    <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2" rx="1" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _(" Tỉ lệ truy cập theo từ khoá tự nhiên") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getSearchBrandedKeywords" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="p-t-20">
                                        <div id="Parent-getSearchBrandedKeywords">
                                            <div id="getSearchBrandedKeywords" class="w-100 rounded is-loading" style="height: 250px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-7 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" id="Combined-Shape" fill="#000000" opacity="1" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _(" Chi tiết truy cập theo từ khoá tự nhiên") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto pr-2">
                                            <fieldset>
                                                <input id="getOrganicKeywordsBrandedTable" class="radio-inline__input" type="radio" name="getOrganicKeywordsTable" value="getOrganicKeywordsBrandedTable" checked="checked" />
                                                <label class="radio-inline__label" for="getOrganicKeywordsBrandedTable">
                                                    Có thương hiệu
                                                </label>
                                                <input id="getOrganicKeywordsNonBrandedTable" class="radio-inline__input" type="radio" name="getOrganicKeywordsTable" value="getOrganicKeywordsNonBrandedTable" />
                                                <label class="radio-inline__label" for="getOrganicKeywordsNonBrandedTable">
                                                    Không thương hiệu
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div style="height:300px;">
                                        <div id="Parent-getOrganicKeywordsTable">
                                            <table id="getOrganicKeywordsTable" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--đóng từ khoá truy cập theo tự nhiên-->

                        <div id="row-getPaidSearchCompetitorsTableV1" class="row">
                            <!--mẫu quảng cáo tìm kiếm trả phí-->
                            <div class="col-12 col-lg-6">
                                <div class="bg-white shadow-sm rounded mb-5">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _(" Mẫu quảng cáo tìm kiếm trả phí") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getScrapedSearchAds" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getScrapedSearchAds">
                                        <div id="getScrapedSearchAds" class="carousel slide" data-interval="false">
                                            <ol class="carousel-indicators">
                                            </ol>
                                            <div class="carousel-inner rounded-bottom is-loading" role="listbox" style="height: 370px">
                                            </div>
                                            <a class="carousel-control-prev" href="#getScrapedSearchAds" role="button" data-slide="prev">
                                                <i class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                            </a>
                                            <a class="carousel-control-next" href="#getScrapedSearchAds" role="button" data-slide="next">
                                                <i class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG mẫu quảng cáo tìm kiếm trả phí-->

                            <!--đối thủ trả phí-->
                            <div class="col-12 col-lg-6 mb-5">
                                <div class="bg-white shadow-sm rounded getPaidSearchCompetitorsTable-container h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Đối thủ tìm kiếm trả phí") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="text-muted similarReloadTask " data-task="getPaidSearchCompetitorsTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:370px;">
                                        <div id="Parent-getPaidSearchCompetitorsTable">
                                            <table id="getPaidSearchCompetitorsTable" class="table table-striped" style="width:100%;height:370px;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--ĐÓNG đối thủ trả phí-->
                        </div>

                        <!-- từ khoá trả phí -->
                        <div class="row" id="row-getPaidKeywordsTable">
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded getPaidKeywordsTable-container">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Từ khoá trả phí") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="text-muted getPaidKeywordsTable" data-task="getPaidKeywordsTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:300px;">
                                        <div id="Parent-getPaidKeywordsTable">
                                            <table id="getPaidKeywordsTable" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--đóng từ khoá trả phí -->

                        <!--Display Overview-->
                        <div class="row">
                            <!-- truy cập quảng cáo hiển thị-->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Truy cập quảng cáo hiển thị") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebsiteAdsVisitsOverview" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getWebsiteAdsVisitsOverview">
                                        <div class="row rounded m-0 p-b-10 justify-content-center py-5" style="height: 270px">
                                            <div class="col-auto py-5 is-loading font-number h1 text-center" id="getWebsiteAdsVisitsOverview">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG truy cập quảng cáo hiển thị-->

                            <!-- kênh quảng cáo -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                    </circle>
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"> <?= _("Kênh quảng cáo") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficDisplayAdvertisingAds" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="pt-5">
                                        <div id="Parent-getTrafficDisplayAdvertisingAds">
                                            <div id="getTrafficDisplayAdvertisingAds" class="w-100 rounded" style="height: 200px; -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1562726526957">
                                                <div style="position: relative; overflow: hidden; width: 360px; height: 200px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                                                    <canvas data-zr-dom-id="zr_0" width="360" height="200" style="position: absolute; left: 0px; top: 0px; width: 360px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                                </div>
                                                <div class="resize-sensor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                                                    <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                                        <div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 100000px; height: 100000px;">
                                                        </div>
                                                    </div>
                                                    <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                                        <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Đóng kênh quảng cáo -->

                            <!-- nguồn quảng cáo -->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded getTrafficDestinationAds-container">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Nguồn quảng cáo") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="getTrafficDestinationAds text-muted" data-task="getTrafficDestinationAds" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:300px;">
                                        <div id="Parent-getTrafficDestinationAds">
                                            <table id="getTrafficDestinationAds" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG nguồn quảng cáo -->
                        </div>

                        <div class="row" id="row-getTrafficDisplayAdvertisingWebsitesTable">
                            <!-- mẫu quảng cáo hiển thị-->
                            <div class="col-12 col-lg-6">
                                <div class="bg-white shadow-sm rounded mb-5">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Mẫu quảng cáo hiển thị") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getWebsiteAdsIntelDisplay" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getWebsiteAdsIntelDisplay">
                                        <div id="getWebsiteAdsIntelDisplay" class="carousel slide" data-interval="false">
                                            <ol class="carousel-indicators">
                                            </ol>
                                            <div class="carousel-inner rounded-bottom is-loading" role="listbox" style="height: 370px">
                                            </div>
                                            <a class="carousel-control-prev" href="#getWebsiteAdsIntelDisplay" role="button" data-slide="prev">
                                                <i class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                            </a>
                                            <a class="carousel-control-next" href="#getWebsiteAdsIntelDisplay" role="button" data-slide="next">
                                                <i class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG mẫu quảng cáo hiển thị-->

                            <!-- trang web quảng cáo-->
                            <div class="col-12 col-lg-6 mb-5">
                                <div class="bg-white shadow-sm rounded getTrafficDisplayAdvertisingWebsitesTable-container h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _("Trang nguồn quảng cáo hiển thị") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="text-muted getTrafficDisplayAdvertisingWebsitesTable" data-task="getTrafficDisplayAdvertisingWebsitesTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:370px;">
                                        <div id="Parent-getTrafficDisplayAdvertisingWebsitesTable">
                                            <table id="getTrafficDisplayAdvertisingWebsitesTable" class="table table-striped" style="width:100%;height:370px;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG trang web quảng cáo-->

                        </div>
                        <!--End Display Overview-->

                        <!--Social Overview-->
                        <div class="row">
                            <!-- <div class="col-12 col-lg-4 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"/>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _("Tổng lượt truy cập xã hội") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getTrafficSocial" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="row rounded m-0 p-b-10 justify-content-center py-5" style="height: 270px">
                                <div class="col-auto py-5 is-loading font-number h1 text-center" id="getTotalSocialVisits"> 
                                </div>
                            </div>
                        </div>
                    </div> -->

                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Lượt truy cập xã hội") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficSocial" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-lg-8">
                                            <div id="Parent-getSocialVisits">
                                                <div id="getSocialVisits" class="row rounded m-0 p-b-10 is-loading" style="height: 270px">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4">
                                            <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                                                <div id="Parent-TotalSocialVisits">
                                                    <div id="TotalSocialVisits" class="d-none d-lg-block h4 text-center text-info font-bold"> </div>
                                                </div>
                                                <div id="Parent-getTotalSocialVisits">
                                                    <div id="getTotalSocialVisits" class="w-100 rounded" style="height: 200px">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-5 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                    </circle>
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"> Kênh xã hội</div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficSourcesSocial" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="pt-5">
                                        <div id="Parent-getTrafficSourcesSocial">
                                            <div id="getTrafficSourcesSocial" class="w-100 rounded" style="height: 200px; -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1562726526957">
                                                <div style="position: relative; overflow: hidden; width: 360px; height: 200px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                                                    <canvas data-zr-dom-id="zr_0" width="360" height="200" style="position: absolute; left: 0px; top: 0px; width: 360px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                                </div>
                                                <div class="resize-sensor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                                                    <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                                        <div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 100000px; height: 100000px;">
                                                        </div>
                                                    </div>
                                                    <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                                        <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-7 mb-5">
                                <div class="bg-white shadow-sm rounded getTrafficSocialTableDetail-container">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Trang web xã hội") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="text-muted similarReloadTask" data-task="getTrafficSocialTableDetail" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:300px;">
                                        <div id="Parent-getTrafficSocialTableDetail">
                                            <table id="getTrafficSocialTableDetail" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--End Social Overview-->

                        <!--Referral Visits-->
                        <div class="row">
                            <!-- truy cập từ giới thiệu -->
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Truy cập từ giới thiệu") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficSourcesTotalReferrals" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-lg-8">
                                            <div id="Parent-getReferralVisits">
                                                <div id="getReferralVisits" class="row rounded m-0 p-b-10 is-loading" style="height: 270px">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4">
                                            <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                                                <div id="Parent-TotalReferrals">
                                                    <div id="TotalReferrals" class="d-none d-lg-block text-center h4 font-bold text-info"> </div>
                                                </div>
                                                <div id="Parent-getTotalReferrals">
                                                    <div id="getTotalReferrals" class="w-100 rounded" style="height: 200px">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG truy cập từ giới thiệu -->

                        </div>


                        <div class="row">
                            <!-- <div class="col-12 col-lg-4 mb-5">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"/>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _("Truy cập giới thiệu") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getTrafficSourcesTotalReferrals" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="row rounded m-0 p-b-10 justify-content-center py-5" style="height: 270px">
                                <div class="col-auto py-5 is-loading font-gg h1 text-center" id="getTotalReferralVisits"> 
                                </div>
                            </div>
                        </div>
                    </div> -->

                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded getTrafficSourcesTotalReferralsTable-container">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _("Website nguồn truy cập giới thiệu") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="text-muted getTrafficSourcesTotalReferralsTable" data-task="getTrafficSourcesTotalReferralsTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:270px;">
                                        <div id="Parent-getTrafficSourcesTotalReferralsTable">
                                            <table id="getTrafficSourcesTotalReferralsTable" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--End Referral Visits-->

                        <!-- truy cập theo từ khoá -->
                        <!-- <div class="row"> 
               
                    <div class="col-12 col-lg-6 mb-5">
                        <div class="bg-white shadow-sm rounded getTrafficSourcesSearchDetails-container">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"/>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _(" Truy cập theo từ khoá") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="text-muted getTrafficSourcesSearchDetails" data-task="getTrafficSourcesSearchDetails" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div style="height:300px;">
                                <table id="getTrafficSourcesSearchDetails" class="table table-striped" style="width:100%;height:100%;"></table>
                            </div>
                        </div>
                    </div>
                </div>  -->
                        <!-- ĐÓNG truy cập theo từ khoá -->

                        <!-- từ khoá nổi bật -->
                        <!-- <div class="row">
                    <div class="col-12 mb-5">
                        <div class="bg-white shadow-sm rounded getTrendingKeywordsTable-container">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"/>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _(" Từ khoá nổi bật") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="text-muted getTrendingKeywordsTable" data-task="getTrendingKeywordsTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div style="height:400px;">
                                <table id="getTrendingKeywordsTable" class="table table-striped" style="width:100%;height:100%;"></table>
                            </div>
                        </div>
                    </div>
                </div> -->
                        <!--đóng từ khoá nổi bật  -->


                        <!--Advertisers-->
                        <div class="row">
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded h-100">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                    </circle>
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _("Kênh quảng cáo trên $domain") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficDisplayPaidOutgoingAdsTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div class="pt-5">
                                        <div id="Parent-getTrafficDisplayPaidOutgoingAdsTable">
                                            <div id="getTrafficDisplayPaidOutgoingAdsTable" class="w-100 rounded" style="height: 200px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8 mb-5">
                                <div class="bg-white shadow-sm rounded getTrafficDisplayPaidOutgoingWebsitesTable-container">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _("Trang web được quảng cáo trên $domain") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="text-muted similarReloadTask" data-task="getTrafficDisplayPaidOutgoingWebsitesTable" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:300px;">
                                        <div id="Parent-getTrafficDisplayPaidOutgoingWebsitesTable">
                                            <table id="getTrafficDisplayPaidOutgoingWebsitesTable" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <!-- lượng khách bấm vào quảng cáo + domain -->
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _("Lượng khách bấm vào quảng cáo trên $domain") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficDisplayPaidOutgoingAds" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getOutgoingAds">
                                        <div id="getOutgoingAds" class="row rounded m-0 p-b-10 is-loading" style="height: 270px">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG lượng khách bấm vào quảng cáo + domain -->
                        </div>
                        <!--End Advertisers-->



                        <div class="row">
                            <!-- website nguồn-->
                            <!-- <div class="col-12 col-lg-6 mb-5">
                        <div class="bg-white shadow-sm rounded is-loading getTopReferrals-container">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"/>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _(" Website nguồn") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="getTopReferrals text-muted" data-task="getTopReferrals" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div style="height:300px;">
                                <table id="getTopReferrals" class="table table-striped" style="width:100%;height:100%"></table>
                            </div>
                        </div>
                    </div> -->
                            <!-- ĐÓNG website nguồn-->

                            <!--tổng lượng khách rời bỏ trang-->
                            <div class="col-12 col-lg-4 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <?= _("Tổng lượng khách rời bỏ trang") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getTrafficDisplayPaidOutgoingAds" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getTotalOutgoingAdVisits">
                                        <div class="row rounded m-0 p-b-10 justify-content-center py-5" style="height: 270px">
                                            <div class="col-auto py-5 is-loading font-number h1 text-center" id="getTotalOutgoingAdVisits">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG tổng lượng khách rời bỏ trang-->

                            <!-- website đích-->
                            <div class="col-12 col-lg-8 mb-5">
                                <div class="bg-white shadow-sm rounded getTrafficDestinationReferrals-container">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Website đích sau khi rời bỏ") ?>
                                            </div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="getTrafficDestinationReferrals text-muted" data-task="getTrafficDestinationReferrals" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div style="height:270px;">
                                        <div id="Parent-getTrafficDestinationReferrals">
                                            <table id="getTrafficDestinationReferrals" class="table table-striped" style="width:100%;height:100%;"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG website đích-->
                        </div>

                        <!-- <div class="row">
                    
                    <div class="col-12 col-lg-6 mb-5">
                        <div class="bg-white shadow-sm rounded getTopIncomingAds-container">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24"/>
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?= _(" Truy cập từ quảng cáo") ?></div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="getTopIncomingAds text-muted" data-task="getTopIncomingAds" href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div style="height:300px;">
                                <table id="getTopIncomingAds" class="table table-striped" style="width:100%;height:100%;"></table>
                            </div>
                        </div>
                    </div>
                </div>  -->



                        <div class="row" id="table_getKeywords">
                            <!-- Từ khoá website -->
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                                    </circle>
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Từ khoá website") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a target="_top" class="btnKeyWord bg-info-2 text-info p-2" href="#">Xem thêm
                                            </a>
                                        </div>
                                    </div>
                                    <table id="getKeywords" class="table table-striped" style="width:100%;height:100%;">
                                        <!-- <thead>
                                    <tr>
                                        <th>Từ khóa</th>
                                        <th style="width:130px!important;text-align: center">Xu hướng <small>(12 tháng)</small></th>
                                        <th style="width:180px!important;text-align:right">Điểm cạnh tranh <small>(từ 0-100)</small></th>
                                        <th style="width:180px!important;text-align:right">Hiển thị <small>(số lần hiện quảng cáo)</small></th>
                                        <th style="width:180px!important;text-align:right">Giá thấp nhất <sup>vnđ</sup> <small>(trên 1 click chuột)</small></th>
                                        <th style="width:180px!important;text-align:right">Giá cao nhất <sup>vnđ</sup> <small>(trên 1 click chuột)</small></th>
                                    </tr>
                                </thead> -->
                                    </table>
                                </div>
                            </div>
                            <!-- ĐÓNG Từ khoá website -->
                        </div>

                        <div class="row">
                            <!-- website đối thủ -->
                            <div class="col-12 mb-5">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-auto d-flex no-block align-items-center mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <div class="text-capitalize font-weight-bold"><?= _(" Website đối thủ") ?></div>
                                            <div class="text-muted similarDates font-10"></div>
                                        </div>
                                        <div class="ml-auto d-flex no-block align-items-center pr-3">
                                            <a class="similarReloadTask text-muted" data-task="getSimilarSites" href="javascript:;"><i class="fal fa-sync"></i></a>
                                        </div>
                                    </div>
                                    <div id="Parent-getSimilarSites">
                                        <div id="getSimilarSites" class="row rounded m-0 p-b-10 is-loading">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ĐÓNG website đối thủ -->


                        </div>
                    </div>
                    <div class="row" id="content-tool">
                        <div class="col-12 col-lg-6">
                            <div class="card text-left m-auto bg-white shadow-sm rounded cursor-pointer" data-href="?view=traffic-website&amp;action=topsites">
                                <div class="text-right m-3 pb-3">
                                    <span class="px-2 py-1 rounded font-12 font-weight-bold font-gg text-info">Miễn Phí</span>
                                </div>
                                <div class="icon rounded-pill bg-danger-2 m-auto text-center d-flex justify-content-center no-block" style="width: 100px; height:100px;"><i class="fad fa-browser align-self-center" style="font-size: 30px; color: rgb(228, 18, 107);"></i></div>
                                <div class="card-body m-auto">

                                    <div class="card-title text-center font-weight-500 font-gg font-18 text-capitalize">top website tại việt nam</div>
                                    <div class="des text-center font-14 font-gg text-muted mt-3" style="">Bảng xếp hạng các website tại Việt Nam, phân theo ngành nghề, lượng traffic và khả năng chạy quảng cáo Google Display Ads.</div>
                                </div>
                                <div class="text-center mt-3 mb-5">
                                    <a class="font-gg font-14 font-weight-bold d-block d-md-inline bagDanger" style="padding: 10px !important; background: #ffebf2 !important" data-toggle="tooltip" data-placement="top" title="" href="?view=traffic-website&amp;action=topsites" data-original-title="">Khám Phá <i class="font-weight-bold fal fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                            <div class="card text-left m-auto bg-white shadow-sm rounded cursor-pointer" data-href="?view=traffic-website&amp;action=categories">
                                <div class="text-right m-3 pb-3">
                                    <span class="px-2 py-1 rounded font-12 font-weight-bold font-gg text-info">Miễn Phí</span>
                                </div>
                                <div class="icon rounded-pill bg-primary-2 m-auto text-center d-flex justify-content-center no-block" style="width: 100px; height:100px;"><i class="fad fa-project-diagram align-self-center" style="font-size: 30px; color: rgb(90, 121, 188);"></i></div>
                                <div class="card-body m-auto">
                                    <div class="card-title text-center font-weight-500 font-gg font-18 text-capitalize">Top Website Theo Ngành</div>
                                    <div class="des text-center font-14 font-gg text-muted mt-3" style="">Bảng xếp hạng website theo ngành nghề tại Việt Nam bao gồm số lượng website, giá trị của ngành.</div>

                                </div>
                                <div class="text-center mt-3 mb-5">
                                    <a class="font-gg font-14 font-weight-bold d-block d-md-inline bagPrimary" style="padding: 10px !important" data-toggle="tooltip" data-placement="top" title="" href="?view=traffic-website&amp;action=categories" data-original-title="">Khám Phá <i class="font-weight-bold fal fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <a href="#page-wrapper" class="backtop" id="backtop"><i class="far fa-angle-up display-7"></i></a>
            </div>
        </div>
        <script>
            $(document).ready(() => {
                $('[data-toggle="tooltip"]').tooltip();
            })
        </script>
        <script src="assets/js/wordcloud2.js"></script>
        <script src="assets/js/ResizeSensor.js"></script>
        <script>
            var isLogin = '<?= $isLogin ?>';
            var domain = url.searchParams.get("domain")
        </script>
        <script src="dist/js/pages/my-function/init-function.js"></script>
        <script type="module" src="dist/js/pages/website/ggads-display/similar-ads.js?v=<?= $version ?>"></script>
        <script src="dist/dist/js/pages/bendmarks/scrolltop.js"></script>
        <script src="dist/js/website/ggads-display/display-ads.js"></script>
        <!--
<link rel="stylesheet" href="dist/css/pages/traffic-website/result.css">
<link rel="stylesheet" href="dist/css/pages/report/report.css?2.3">  
<script type="module" src="dist/dist/js/pages/report/send_mailer.js?v=<?= $version ?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
-->