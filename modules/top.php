<header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-dark">
        <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== -->
        <div class="navbar-header">
            <a class="navbar-brand" href="<?=$rootURL?>?userToken=<?=$userToken?>">
                 <img width="40px" src="<?=$rootURL?>/assets/images/icon/favicon-196x196.png">
            </a>
        </div>
        <!--mobile-->
        <div class="navbar-header">
            <a href="javascript:void(0)">
                <i class="fa fa-bars" style="font-size: 25px"></i>
            </a>
        </div>

        <div class="navbar-collapse">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->

            <ul class="navbar-nav mr-auto navbar-left topBarMenu">
                <!-- This is  -->
                <li id="allTools" class="nav-item active allToolsItem d-md-block d-lg-none"> <a class="allTools" href="#" aria-expanded="false" data-toggle="tooltip" data-placement="bottom" title="" data-original-title=""><i class="fad fa-plus-square mr-1"></i> Công Cụ 3F</a></li>
                <li class="nav-item  d-none d-lg-block">
                    <a href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=account">Dashboard</a>
                </li>
                
                <li class="nav-item active d-none d-lg-block dropdown-list-a">
                    <a  class=" dropdown-toggle"  href="https://admin.fff.com.vn/insight/?view=default&action=index&userToken=<?=$userToken?>" id="navbarDropdown" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false" href="#">Phân Tích</a>
                    <div class="dropdown-menu-li  animate  slideIn" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="https://go.fff.com.vn/?view=market&action=index&userToken=<?=$userToken?>"><i class="fad fa-lightbulb-on font-18 mr-2"></i><span class="font-13">Dữ liệu thị trường Việt Nam</span> </a>
                        <a class="dropdown-item" href="<?=$rootURL?>?userToken=<?=$userToken?>"><i class="fad fa-send-backward font-18 mr-2"></i><span class="font-13">Phân tích traffic Website</span> </a>
                        <a class="dropdown-item" href="https://admin.fff.com.vn/keyword-planner/?userToken=<?=$userToken?>"><i class="fad fa-keyboard font-18 mr-2"></i><span class="font-13">Từ Khóa - Keyword Planner <i class="fab fa-hotjar text-danger ml-3"></i></span> </a>
                        <a class="dropdown-item" href="https://go.fff.com.vn/?view=pagespeed&action=index&userToken=<?=$userToken?>"><i class="fad fa-monitor-heart-rate font-18 mr-2"></i><span class="font-13">Tốc độ website - Page Speed</span> </a>

                    </div>
                </li>
               
                <li class="nav-item d-none d-lg-block dropdown-list-a">
                    <a  class=" dropdown-toggle"  href="https://admin.fff.com.vn/quangcao/?view=default&action=index&userToken=<?=$userToken?>" id="navbarDropdown" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false" href="#">Quảng cáo</a>
                    <div class="dropdown-menu-li  animate  slideIn" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-coupon"><i class="fad fa-gift font-18 mr-2"></i><span class="font-13">Tặng code 1.350.000 vnđ</span> </a>
                        <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-ip-monitor"><i class="fad fa-search-location font-18 mr-2"></i><span class="font-13">Theo dõi IP click Ads</span> </a>
                        <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-fraudclick"><i class="fad fa-shield pr-1 font-18 mr-2"></i><span class="font-13">Chặn click ảo</span></a>
                        <div class="dropdown-list-a">
                        <a class="dropdown-item justify-content-between d-flex align-items-center" href="#"><span class="font-13"><i class="fad fa-plus-square font-18 mr-3"></i> Người mới quảng cáo</span> <i class="fal fa-angle-right"></i></a>
                            <div class="dropdown-list-nav">
                                <a class="dropdown-item" href="https://go.fff.com.vn/?view=market&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Xem giá thị trường Việt Nam</span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=adspreview&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Xem trước quảng cáo của bạn</span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=costads&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Ước tính chi phí & hiệu quả</span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=analyze-competitor&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Soi quảng cáo đối thủ</span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=buy-account&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Mua tài khoản Google Ads <i class="fab fa-hotjar text-danger ml-3"></i></span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=search&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Tạo quảng cáo Search <i class="fab fa-hotjar text-danger ml-3"></i></span></a>

                                
                            </div>
                        </div>
                        <div class="dropdown-list-a">
                        <a class="dropdown-item justify-content-between d-flex align-items-center" href="#"><span class="font-13"><i class="fad fa-qrcode font-18 mr-3"></i> Người đang quảng cáo</span> <i class="fal fa-angle-right"></i></a>
                            <div class="dropdown-list-nav">
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=promotion&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Tặng khuyến mãi 1.350.000 vnđ</span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=adsdoctor&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Công cụ Bác Sĩ AdWords  <i class="fab fa-hotjar text-danger ml-3"></i></span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=follow-ip&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Theo dõi IP Click Ads</span></a>
                                <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=virtual-click&action=index&userToken=<?=$userToken?>"><span class="font-16 mr-2 text-muted">&#8226;</span><span>Chặn click Ảo & Click tặc</span></a>

                                <div class="dropdown-list-a">
                                    <a class="dropdown-item justify-content-between d-flex align-items-center dropdown-toggle " href="#"><span class="font-13"><span class="font-16 mr-2 text-muted">&#8226;</span>Công cụ từ khóa</span><i class="fal fa-angle-right"></i></a>
                                    <div class="dropdown-list-nav">
                                    <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-keywords-mixer"><span class="font-16 mr-2 text-muted">&#8226;</span> <span>Công cụ Keyword Mixer</span> </a>
                                        <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-keywords-local"><span class="font-16 mr-2 text-muted">&#8226;</span> <span>Công cụ Keyword Local</span></a>
                                        <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-keywords-seo"><span class="font-16 mr-2 text-muted">&#8226;</span> <span>Công cụ Keyword SEO</span></a>
                                        <a class="dropdown-item" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=adwords-keywords-score"><span class="font-16 mr-2 text-muted">&#8226;</span> <span>Công cụ Keyword Score</span></a>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                        
                        <a class="dropdown-item" href="https://admin.fff.com.vn/quangcao/?view=adsreport&action=index&userToken=<?=$userToken?>"><i class="fad fa-chart-pie font-18 mr-2"></i> <span class="font-13">Báo cáo quảng cáo</span> </a>
                    </div>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=leadhunter">Tìm khách</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=hutkhach">Hút khách</a>
                </li>
    
                <li class="nav-item d-none d-lg-block">
                    <a href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=chat">Chăm khách</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                <a href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=customerdata">Data Khách</a>
                </li>
                
            </ul>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <? if ( $userToken != $demoToken){?>
            <ul class="navbar-nav my-lg-0 topRightMenu">

                <!--
                <li  id="quanlyWebsites" data-toggle="tooltip" data-placement="bottom"
                        title="" data-original-title="Danh sách website">
                    <span  class="nav-link-right cursor-pointer">
                        <div id="websitesss" class="nameWebsiteWidget">

                        </div>
                    </span>
                </li>
               -->
                <li id="quanlyAdWords"  data-toggle="tooltip" data-placement="bottom"
                        title="" data-original-title="Tài khoản AdWords">
                    <span  class="nav-link-right">
                        <i class="warning fab fa-buysellads font-18"></i>
                        
                    </span>
                </li>
                    
                <li data-toggle="tooltip" data-placement="bottom"
                        title="" data-original-title="Live chat" style="position: relative;">
                    <a class="nav-link-right" href="https://admin.fff.com.vn/go.php?userToken=<?=$userToken?>&view=chat">
                        <i class="successs fad fa-robot font18"></i>
                    </a>
                    <b class="chatOnline livechatAdmin" style="display: inline;">0</b>
                </li>

                <li class="nav-item-right dropdown  dropdown-list-a" 
                        title="" data-original-title="Quản lý tài khoản của bạn"  data-placement="bottom">
                    <a class="nav-link-right dropdown-toggle waves-effect waves-dark profile-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-placement="bottom"
                        title="" data-original-title="Quản lý tài khoản của bạn">
                    </a>
                    <div class="dropdown-menu-li userDataMenu  animate  slideIn " aria-labelledby="navbarDropdown">
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/account/index.php?userToken=<?=$userToken?>&view=user&action=information" class="dropdown-item"><i class="fad fa-user-tie"></i> Thông tin
                            tài khoản</a>
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/account/index.php?userToken=<?=$userToken?>&view=user&action=adword-management" class="dropdown-item"><i class="fad fa-bring-forward"></i> Quản lý
                            AdWords</a>
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/account/index.php?userToken=<?=$userToken?>&view=user&action=website-management" class="dropdown-item"><i class="fad fa-browser"></i> Quản lý website</a>
                        <a href="https://admin.fff.com.vn/account/index.php?userToken=<?=$userToken?>&view=user&action=plugin" class="dropdown-item"><i class="fad fa-plug"></i> Quản lý tiện ích</a>
                        <!-- text-->
                        <!-- <div class="dropdown-divider">**********</div> -->
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/account/index.php?userToken=<?=$userToken?>&view=user&action=payment-table" class="dropdown-item"><i class="fad fa-gem"></i> Nâng cấp VIP</a>
                        <a href="https://admin.fff.com.vn/account/index.php?userToken=<?=$userToken?>&view=user&action=payment-history" class="dropdown-item"><i class="fad fa-calendar-alt"></i> Lịch sử thanh toán</a>
                        <!-- text-->
                        <!-- <div class="dropdown-divider"></div> -->
                        <!-- text-->
                        <a href="javascript:void(0);" class="doLogout dropdown-item"><i class="fa fa-power-off"></i> Thoát</a>
                        <!-- text-->
                    </div>
                </li>
                <!-- ============================================================== -->
                <!-- End User Profile -->
                <!-- ============================================================== -->
            </ul>
            <?}else{?>
                <ul class="navbar-nav my-lg-0 topBarMenu topRightMenu">
                     <li class="nav-item active mr-3 d-md-block">
                     <a class="btn-showLoginModal" href="#">Đăng Nhập</a>
                    </li>
                  
                    
                </ul>
            <?}?>
        </div>
    </nav>
</header>
