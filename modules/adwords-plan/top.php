 <header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-dark">
        <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== -->
        <div class="navbar-header">
            <a class="navbar-brand" href="/?cid=<?=$_GET['cid']?>">
            <i class="fad fa-spider-web"></i>
            </a>
        </div>
        <!--mobile-->
        <div class="navbar-header">
            <a href="javascript:void(0)">
                <i class="fa fa-bars" style="font-size: 25px"></i>
            </a>
        </div>

        <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== -->
        <div class="navbar-collapse">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->

            <ul class="navbar-nav mr-auto navbar-left">
                <!-- This is  -->
                <li class="nav-item"> <a class="waves-effect waves-dark allTools" href="#" aria-expanded="false" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Công cụ khác"><i class="fad fa-th text-info font30"></i></a></li>

                <!-- ============================================================== -->
                <!-- Search -->
                <!-- ============================================================== -->

            </ul>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <ul class="navbar-nav my-lg-0 topRightMenu">

                <!-- ============================================================== -->
                <!-- End mega menu -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- User Profile -->
                <!-- ============================================================== -->
                <!--
                <li><a class="nav-link-right"><i class="successs fas fa-bell font18"></i></a></li>
                <li><a class="nav-link-right"><i class="danger fas fa-analytics font18"></i></a></li>
                <li><a class="nav-link-right"><i class="info fas fa-heartbeat font18"></i></a></li>
                <li><a class="nav-link"><i class="warning"><img class="topFlags" src="assets/images/flags/012-uk.svg"></i></a></li>-->


                <li  data-toggle="tooltip" data-placement="bottom"
                        title="" data-original-title="Tài khoản AdWords">
                    <a id="quanlyAdWords" class="nav-link-right" href="javascript:void(0)">
                        <i class="warning fad fa-plus-square font-18"></i>
                        
                    </a>
                </li>
                <li class="nav-item-right dropdown"  href=""
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-placement="bottom"
                        title="" data-original-title="Quản lý tài khoản của bạn">
                    <a class="nav-link-right dropdown-toggle waves-effect waves-dark profile-pic">
                        <i class="info fas fa-user-circle font18"></i>

                    </a>
                    <div class="dropdown-menu dropdown-menu-right ">
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/account.php?view=config&action=config" class="dropdown-item"><i class="fad fa-user-tie"></i> Thông tin
                            tài khoản</a>
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/adwords.php?view=config&action=quan-ly-tai-khoan" class="dropdown-item"><i class="fad fa-bring-forward"></i> Quản lý
                            AdWords</a>
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/website.php?view=config&action=quan-ly-tai-khoan" class="dropdown-item"><i class="fad fa-browser"></i> Quản lý website</a>
                        <!-- text-->
                        <div class="dropdown-divider">**********</div>
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/account.php?view=payment&action=vip_payment" class="dropdown-item"><i class="fad fa-gem"></i> Nâng cấp VIP</a>
                        <a href="https://admin.fff.com.vn/account.php?view=payment&action=payment_history" class="dropdown-item"><i class="fad fa-calendar-alt"></i> Lịch sử thanh toán</a>
                        <!-- text-->
                        <div class="dropdown-divider"></div>
                        <!-- text-->
                        <a href="https://admin.fff.com.vn/logout.php" class="dropdown-item"><i class="fa fa-power-off"></i> Thoát</a>
                        <!-- text-->
                    </div>
                </li>
                <!-- ============================================================== -->
                <!-- End User Profile -->
                <!-- ============================================================== -->
            </ul>
        </div>
    </nav>
</header>