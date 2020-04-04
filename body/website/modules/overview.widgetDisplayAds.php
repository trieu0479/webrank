<div class="col-12 col-lg-12 sample__ads">
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
                <div class="text-capitalize font-weight-bold"><?= _("Mẫu Quảng Cáo") ?></div>
                <div class="text-muted data-headerTimes font-10"></div>
            </div>
            <div class="ml-auto d-flex no-block align-items-center pr-3">
                <a class="similarReloadTask text-muted" data-task="SampleAds" href="javascript:;"><i class="fal fa-sync"></i></a>
            </div>
        </div>
        <div class="col-12 col-lg-12 bg-white shadow-sm rounded w-100">
            <!-- -----------------pop up Image ---------------- -->
            <div class="parent-SampleAds overviewGDN" style="position: relative">
                <div class="listsample ml-1 mt-3">
                    <ul class="nav nav-tabs" id="Tabsample" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="img-tab" data-toggle="tab" href="#sample_image" role="tab" aria-controls="image" aria-selected="true">Image <small class="count-image"></small></a>
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

                        <!-- ############het tab 2-----------------------------------------     -->
                        <div class="tab-pane fade" id="sample_text" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="sample-text-ads">
                            </div>
                        </div>
                    </div>
                    <div class="footer--bt-view mt-4 ml-3 pb-4">
                        <a href="https://webrank.vn/index.php?view=website&action=displayads&domain=<?=$_GET['domain']?>&userToken=<?=$userToken?>"><button class="btn btn-primary btn-sm " style="padding: 4px 13px;">
                            <span class="content-btn">Xem toàn bộ </span>
                        </button></a>
                        <a href="https://webrank.vn/index.php?view=website&action=displayads&domain=<?=$_GET['domain']?>&userToken=<?=$userToken?>">
                        <button class="btn btn-primary btn-sm d-none" id="btn-view-text" style="padding: 4px 13px;">
                            <span class="content-btn">Xem toàn bộ </span>
                        </button></a>
                        <button class="btn btn-primary btn-sm d-none" id="btn-view-html" style="padding: 4px 13px;">
                            <span class="content-btn ">Xem toàn bộ</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ---------------------------  Image ADs ------------------------------- -->

<div id="myTabAds" class="sm rounded d-none" style="min-height:400px;padding:15px 10px">
    <div class="bg-white">
        <div class=" row m-0 py-2">
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
                <div class="text-muted similarDates font-10">12.2019 - 02.2020</div>
            </div>
            <div class="asns-popup__close-button">
                <svg style="fill: #CCC" viewBox="0 0 22 22" id="src/icons/m/close__v2_10_0" width="22px" height="22px">
                    <path d="M11 1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM13.5 7l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                </svg>
            </div>
        </div>
        <ul class="nav nav-tabs customtab" role="tablist" id="Tab-small-ads">
            <li class="nav-item"> <a class="nav-link one-tab" data-toggle="tab" data-task="tab-image-ads" href="#tab-image-ads" role="tab"> <span class=""><i class="far fa-calendar-week fa-lg"></i></span> <span class="d-none d-md-inline">Xem tất cả Image Ads</span></a> </li>
            <li class="nav-item"> <a class="nav-link two-tab" data-toggle="tab" data-task="tab-html-ads" href="#tab-html-ads" role="tab"> <span class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span class="d-none d-md-inline">Xem tất cả HTML Ads</span></a> </li>
            <li class="nav-item"> <a class="nav-link three-tab" data-toggle="tab" data-task="tab-text-ads" href="#tab-text-ads" role="tab"> <span class=""><i class="far fa-stopwatch fa-lg"></i></span> <span class="d-none d-md-inline">Xem tất cả Text Ads</span></a>
            </li>
        </ul>
    </div>     <!-- Tab panes -->
    <div class="row">
        <div class="col-12 col-lg-12 sample__view__big__ads d-none mt-0 tab-pane  active" role="tabpanel" id='tab-image-ads'>
            <div class="bg-white shadow-sm rounded">
                <div class=" row">
                    <div class="asns-popup__close-button">
                        <svg style="fill: #CCC" viewBox="0 0 22 22" id="src/icons/m/close__v2_10_0" width="22px" height="22px">
                            <path d="M11 1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM13.5 7l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                        </svg>
                    </div>
                </div>


                <div class="asns-popup__layout">
                    <div class="asns-popup-content">
                        <div class="asns-creative">
                            <div class="asns-js-creative-content">
                                <div class="asns-line">

                                    <table id="getAllImageTable"></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="row">
        <!-- -------------------------------------------HTML ASDs               ----------------------- -->
        <div class="col-12 col-lg-12 sample__view__big__html d-none mt-0 tab-pane  " role="tabpanel" id='tab-html-ads'>
            <div class="bg-white shadow-sm rounded">
                <div class=" row ">

                    <div class="asns-popup__close-button">
                        <svg style="fill: #CCC" viewBox="0 0 22 22" id="src/icons/m/close__v2_10_0" width="22px" height="22px">
                            <path d="M11 1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM13.5 7l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                        </svg>
                    </div>
                </div>
                <div class="asns-popup__layout">
                    <div class="asns-popup-content">
                        <div class="asns-creative">
                            <div class="asns-js-creative-content">
                                <div class="asns-line">
                                    <!-- <ul class="nav nav-tabs customtab" role="tablist" id="Tab-small-ads">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" data-task="tab-image-ads" href="#tab-image-ads" role="tab"> <span class=""><i class="far fa-calendar-week fa-lg"></i></span> <span class="d-none d-md-inline">View all Image Ads</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="tab-html-ads" href="#tab-html-ads" role="tab"> <span class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span class="d-none d-md-inline">View all HTML Ads</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="tab-text-ads" href="#tab-text-ads" role="tab"> <span class=""><i class="far fa-stopwatch fa-lg"></i></span> <span class="d-none d-md-inline">View all Text Ads</span></a>
                                        </li>
                                    </ul> -->
                                    <table id="getAllHTMLTable"></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- -------------------------------------------Text ASDs               ----------------------- -->
    <div class="row">
        <div class="col-12 col-lg-12 sample__view__big__text d-none mt-0  tab-pane  " role="tabpanel" id='tab-text-ads'>
            <div class="bg-white shadow-sm rounded">
                <div class=" row">
                    <div class="asns-popup__close-button">
                        <svg style="fill: #CCC" viewBox="0 0 22 22" id="src/icons/m/close__v2_10_0" width="22px" height="22px">
                            <path d="M11 1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM13.5 7l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                        </svg>
                    </div>
                </div>
                <div class="asns-popup__layout">
                    <div class="asns-popup-content">
                        <div class="asns-creative">
                            <div class="asns-js-creative-content">
                                <div class="asns-line">
                                    <!-- <ul class="nav nav-tabs customtab" role="tablist" id="Tab-small-ads">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" data-task="tab-image-ads" href="#tab-image-ads" role="tab"> <span class=""><i class="far fa-calendar-week fa-lg"></i></span> <span class="d-none d-md-inline">View all Image Ads</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="tab-html-ads" href="#tab-html-ads" role="tab"> <span class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span class="d-none d-md-inline">View all HTML Ads</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="tab-text-ads" href="#tab-text-ads" role="tab"> <span class=""><i class="far fa-stopwatch fa-lg"></i></span> <span class="d-none d-md-inline">View all Text Ads</span></a>
                                        </li>
                                    </ul> -->
                                    <table id="getAllTextTable"></table>
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