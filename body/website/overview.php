<div class="page-wrapper">
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
                    <div class="align-self-center mr-3 ml-3">
                        <i class="fas fa-chevron-right text-muted"></i>
                    </div>
                    <div class="align-self-center font-14" style="color: rgba(79,80,80,.7);"> <a
                            href="<?=$rootURL?>/rank/<?=$_GET['domain']?>">Tổng quan</a> </div>
                </div>

            </div>
            <!-- sub menu -->
    <div class="container similarBody  widgetContainer">
        <div class="page-contents pt-5">


            <div class="topbox"><?require_once(__DIR__."/modules/master.topbox.php")?></div>

            <div class="row pt-5">
                <div class="col-12 navBarBox">
                    <?php require_once(__DIR__."/modules/master.navbar.php")?>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                        <?require_once(__DIR__."/modules/overview.widgetInfo.php")?>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                        <?require_once(__DIR__."/modules/overivew.widgetHeader.php")?>
                </div>
            </div>
            <div class="row">
                    <div class="col-12">
                        <?require_once(__DIR__."/modules/overview.widgetTimeMobileDestop.php")?>
                    </div>
            </div>

            <!--
            <div class="row">
                <div class="col-12">
                        <?require_once(__DIR__."/modules/overview.traffic30day.php")?>
                </div>
            </div>
            -->
            <!-- Chart moi  -->

            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="widget-getTrafficOverview"></div>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="widget-getTrafficOverviewCustomerResources"></div>
                </div>
            </div>



          <!--
            <div class="row">
                    <div class="col-12">
                        <?require_once(__DIR__."/modules/overview.widgetTime.php")?>
                    </div>
            </div>
        -->

            <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="widget-getDesktopVsMobileVisits"></div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="widget-getWebDemographicsGender"></div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="widget-getWebDemographicsAge"></div>
                    </div>
            </div>

            <div class="row">
                <div class="col-12 ">
                    <div class="widget-getTrafficOverviewCustomerSourceAnalysis"></div>
                </div>
            </div>


            <!-- GOOGLE ADS -->
            <div class="row rowGroup">
                <div class="col-12">
                    <div class="alert-secondary mb-2 pl-4 pt-3 pb-3 pr-4 d-flex">
                        <div class="adsYoutube font-gg font-14 text-dark">
                            <h4 class="text-left font-weight-bold fontSize-16 text-info">Google Organic Search</h4>
                            <div>Báo cáo tìm kiếm tự nhiên, cung cấp thông tin lượt truy cập vào website từ tìm kiếm tự nhiên và các từ khoá dẫn đến trang web.</div>
                        </div>
                        <div class=" px-md-0 pb-md-0 pt-3 pt-md-0  no-block ml-auto d-flex align-items-center">
                            <a  class="font-gg font-13 font-weight-500 bagInfo ml-auto ml-md-0 w-100 text-center" href="<?=$rootURL?>/index.php?view=website&action=organic&domain=<?=$_GET['domain']?>" >Chi tiết <i class="fal fa-angle-right"></i></a>
                        </div>
                    </div>

                   <!-- Organic -->
                   <div class="row">
                        <div class="col-12 col-lg-5">
                            <div class="widget-getTrafficSourcesSearch"></div>

                        </div>
                        <div class="col-12 col-lg-7">
                            <div style="height:100%" class="widget-getOrganicKeywordsBrandedTable"></div>
                        </div>
                    </div>
                   <!-- Organic -->
                    <div class="bg-white pl-4 pt-3 pb-3 pr-4 alert alert-success alert-rounded  d-flex" style="margin:25px 0 0;border-top: 3px solid #0abb87; border-color: #0abb87 !important;">
                        <div class="adsSearch font-gg font-14 text-dark font-weight-500" style="max-width: 900px;">
                            <h4 style="    text-transform: capitalize;" class="text-left font-15 font-weight-bold">Cải thiện SEO</h4>
                            <div>Theo dõi và cải thiện chất lượng chiến dịch SEO (tối ưu Google Search) chỉ 199,000 vnd/tháng </div>
                        </div>
                        <div class="px-4 px-md-0 pb-2 pb-md-0 no-block ml-auto d-flex align-items-center pr-4">
                            <a class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0" data-toggle="tooltip" data-placement="top" title="" href="https://admin.com.vn/seo?userToken=<?=$userToken?>">Cải thiện SEO<i class="fal fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- GOOGLE ADS -->
            <div class="row rowGroup">
                <div class="col-12">
                    <div class="alert-secondary mb-2 pl-4 pt-3 pb-3 pr-4 d-flex">
                        <div class="adsYoutube font-gg font-14 text-dark">
                            <h4 class="text-left font-weight-bold fontSize-16 text-success">Google Search Ads - Adwords</h4>
                            <div>Báo cáo Google Search Ads cung cấp thông tin mẫu quảng cáo, từ khóa, đối thủ cạnh tranh của website</div>
                        </div>
                        <div class=" px-md-0 pb-md-0 pt-3 pt-md-0 no-block ml-auto d-flex align-items-center pr-4">
                            <a  class="font-gg font-13 font-weight-500 bagInfo ml-auto ml-md-0 w-100 text-center" href="<?=$rootURL?>/index.php?view=website&action=googleads&domain=<?=$_GET['domain']?>" >Chi tiết <i class="fal fa-angle-right"></i></a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-6">
                                <?php require_once(__DIR__ . "/modules/overview.widgetgetScrapedSearchAds.php")?>
                        </div>
                        <div class="col-12 col-lg-6">
                                <div style="height:100%" class="widget-getListGoogleAdsCompetitor"></div>

                        </div>
                    </div>
                    <div class="bg-white pl-4 pt-3 pb-3 pr-4 alert alert-success alert-rounded  d-flex" style="margin:25px 0 0;border-top: 3px solid #0abb87; border-color: #0abb87 !important;">
                        <div class="adsSearch font-gg font-14 text-dark font-weight-500" style="max-width: 900px;">
                            <h4 style="    text-transform: capitalize;" class="text-left font-15 font-weight-bold">Cải thiện Google Ads</h4>
                            <div class="description-goads"></div>
                        </div>
                        <div class="px-4 px-md-0 pb-2 pb-md-0 no-block ml-auto d-flex align-items-center pr-4 btn-noads">
                            <a class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0 link-a-ads" data-toggle="tooltip" data-placement="top" title="" href="">Dùng ngay</a>
                        </div>
                    </div>

                </div>
            </div>

            <!--HẾT GOOGLE ADS -->
            <div class="row rowGroup">
                <div class="col-12">
                     <div class="alert-secondary mb-2 pl-4 pt-3 pb-3 pr-4 d-flex">
                        <div class="adsYoutube font-gg font-14 text-dark font-weight-500">
                            <h4 class="text-left font-weight-bold fontSize-16 text-danger">Google Display Ads</h4>
                            <div>Google Display Ads - hình thức quảng cáo hiển thị banner (hoặc text) lên các website khác</div>
                        </div>
                        <div class=" px-md-0 pb-md-0 pt-3 pt-md-0 no-block ml-auto d-flex align-items-center">
                            <a  class="font-gg font-13 font-weight-500 bagDanger ml-auto ml-md-0 w-100 text-center" data-toggle="tooltip" data-placement="top" title="" href="<?=$rootURL?>/index.php?view=website&action=displayads&domain=<?=$_GET['domain']?>" data-original-title="Xem Thông Báo Từ Google">Chi tiết <i class="fal fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div class="row">
                      <?php require_once(__DIR__ . "/modules/overview.widgetDisplayAds.php")?>
                      <div class="bg-white pl-4 pt-3 pb-3 pr-4 alert alert-success alert-rounded wapper-display  d-flex" style="margin:25px 0 0;border-top: 3px solid #0abb87; border-color: #0abb87 !important;">
                          <div class="adsSearch font-gg font-14 text-dark font-weight-500" style="max-width: 900px;">
                              <h4 style="text-transform: capitalize;" class="text-left font-15 font-weight-bold">Cải thiện Google Display Ads</h4>
                              <div class="desciption-display"></div>
                          </div>
                          <div class="px-4 px-md-0 pb-2 pb-md-0 no-block ml-auto d-flex align-items-center pr-4 btn-noads">
                              <a class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0 link-a-display" data-toggle="tooltip" data-placement="top" title="" href="">Dùng ngay</a>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <!-- DISPLAY ADS -->

            <!--HẾT DISPLAY ADS -->
            <div class="row rowGroup">
                <div class="col-12">
                    <div class="alert-secondary mb-2 pl-4 pt-3 pb-3 pr-4 d-flex">
                        <div class="adsYoutube font-gg font-14 text-dark font-weight-500">
                            <h4 class="text-left font-weight-bold fontSize-16 text-success">Social Ads & Hoạt động fanpage</h4>
                            <div>Social Ads - ghi nhận quảng cáo từ các kênh Social như: facebook, youtube, linkedin ...</div>
                        </div>
                        <div class=" px-md-0 pb-md-0 pt-3 pt-md-0 no-block ml-auto d-flex align-items-center">
                            <a  class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0 w-100 text-center" data-toggle="tooltip" data-placement="top" title="" href="<?=$rootURL?>/index.php?view=website&action=social&domain=<?=$_GET['domain']?>" data-original-title="Xem Thông Báo Từ Google">Chi tiết <i class="fal fa-angle-right"></i></a>
                        </div>
                    </div>
                    <!-- SOCIAL -->
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <div id="bannerPageAds"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <?php require_once(__DIR__."/modules/social.widgetHeader.php")?>
                        </div>
                    </div>
                    <!--HẾT SOCIAL -->
                    <!-- <div class="bg-white pl-4 pt-3 pb-3 pr-4 alert alert-success alert-rounded wapper-display  d-flex" style="margin:25px 0 0;border-top: 3px solid #0abb87; border-color: #0abb87 !important;">
                          <div class="adsSearch font-gg font-14 text-dark font-weight-500" style="max-width: 900px;">
                              <h4 style="text-transform: capitalize;" class="text-left font-15 font-weight-bold">Cải thiện Google Display Ads</h4>
                              <div class="desciption-facebook"></div>
                          </div>
                          <div class="px-4 px-md-0 pb-2 pb-md-0 no-block ml-auto d-flex align-items-center pr-4 btn-noads">
                              <a class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0 link-a-facebook" data-toggle="tooltip" data-placement="top" title="" href="">Dùng ngay</a>
                          </div>
                      </div>  -->
                </div>
            </div>




            <div class="row rowGroup">
                <div class="col-12">
                    <div class="alert-secondary mb-2 pl-4 pt-3 pb-3 pr-4 d-flex">
                        <div class="adsYoutube font-gg font-14 text-dark font-weight-500">
                            <h4 class="text-left font-weight-bold fontSize-16 text-success">Backlink - Hoạt động SEO</h4>
                            <div>Backlink - báo cáo link từ website khác trỏ về website của bạn</div>
                        </div>
                        <div class=" px-md-0 pb-md-0 pt-3 pt-md-0 no-block ml-auto d-flex align-items-center ">
                            <a  class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0 w-100 text-center" data-toggle="tooltip" data-placement="top" title="" href="<?=$rootURL?>/index.php?view=website&action=backlink&domain=<?=$_GET['domain']?>" data-original-title="Xem Thông Báo Từ Google">Chi tiết <i class="fal fa-angle-right"></i></a>
                        </div>
                    </div>
                      <!-- backlink-->
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="widget-banckLinksOverview"></div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <?require_once(__DIR__."/modules/overview.widgetBacklink.php")?>
                        </div>
                    </div>
                        <!-- backlink-->
                    <div class="bg-white pl-4 pt-3 pb-3 pr-4 mb-0 alert alert-success alert-rounded  d-flex" style="border-top: 3px solid #0abb87; border-color: #0abb87 !important;">
                        <div class="adsSearch font-gg font-14 text-dark font-weight-500" style="max-width: 900px;">
                            <h4 style="text-transform: capitalize;" class="text-left font-15 font-weight-bold">Cải thiện Backlink - SEO</h4>
                            <div class="">Theo dõi và cải thiện chất lượng chiến dịch SEO (tối ưu Google Search) chỉ 199,000 vnd/tháng</div>
                        </div>
                        <div class="px-4 px-md-0 pb-2 pb-md-0 no-block ml-auto d-flex align-items-center pr-4">
                            <a class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0" data-toggle="tooltip" data-placement="top" title="" href="https://admin.com.vn/seo?userToken=<?=$userToken?>">Cải thiện SEO</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <div class="widget-getKeywords"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <?require_once(__DIR__."/modules/overview.geomap.php")?>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="widget-getSimilarSites"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="widget-getSubdomains"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <?require_once(__DIR__."/modules/overview.widgetCompanyInfo.php")?>
                </div>
            </div>
          <!--het  -->

    </div>
</div>
<script src="<?=$rootURL?>/assets/js/wordcloud2.js"></script>
<script src="<?=$rootURL?>/assets/js/ResizeSensor.js"></script>
<script src="<?=$rootURL?>/dist/js/pages/my-function/init-function.js"></script>

<script type="module" src="<?=$rootURL?>/dist/js/pages/website/master.js?v=<?=$version?>"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/overview/index.js?v=<?=$version?>"></script>
<script type="module" src="<?=$rootURL?>/dist/js/pages/website/overview/tableFunction.js?v=<?=$version?>"></script>
