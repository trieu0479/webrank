<!-- <div class="page-wrapper"> 
    <div class="container BendmarksTool">
        <div class="page-content pt-5">
            <div class="row" id="sortable">
                <div class="col-12 col-lg-4 mb-5 ui-state-default">
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
                                <div class="text-capitalize font-weight-bold">" Tổng truy cập"</div>
                                <div class="text-muted similarDates font-10"></div>
                            </div>
                            <div class="ml-auto d-flex no-block align-items-center pr-3">
                                <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits"
                                    href="javascript:;"><i class="fal fa-sync"></i></a>
                            </div>
                        </div>
                        <div class="">
                            <div id="totalTraffic"
                                class="d-flex no-block align-items-center justify-content-center is-loading"
                                style="height: 200px;">
                                <h1 class="counter font-gg"></h1>
                            </div>
                        </div>
                        <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                            style="bottom: 5px; right: 20px; border-radius: 20px">
                            <span class="increase text-muted font-20 cursor-pointer"><i class="fas fa-plus"></i></span>
                            <span class="reduction text-muted font-20 cursor-pointer"><i
                                    class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 mb-5 ui-state-default">
                    <div class="bg-white shadow-sm rounded">
                        <div class="row border-bottom m-0 py-2">
                            <div class="col-auto d-flex no-block align-items-center mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                    class="svg-icon text-primary mb-1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                        <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                            rx="1" />
                                        <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                            rx="1" />
                                    </g>
                                </svg>
                            </div>
                            <div class="col-auto pl-0">
                                <div class="text-capitalize font-weight-bold">" Truy cập theo thiết bị"
                                </div>
                                <div class="text-muted similarDates font-10"></div>
                            </div>
                            <div class="ml-auto d-flex no-block align-items-center pr-3">
                                <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits"
                                    href="javascript:;"><i class="fal fa-sync"></i></a>
                            </div>
                        </div>
                        <div class="text-center">
                            <div id="Parent-getDesktopVsMobileVisits">
                                <div id="getDesktopVsMobileVisits" class="w-100 rounded is-loading"
                                    style="height: 200px;"></div>
                            </div>
                        </div>
                        <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                            style="bottom: 5px; right: 20px; border-radius: 20px">
                            <span class="increase text-muted font-20 cursor-pointer"><i class="fas fa-plus"></i></span>
                            <span class="reduction text-muted font-20 cursor-pointer"><i
                                    class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 mb-5 ui-state-default">
                    <div class="bg-white shadow-sm rounded">
                        <div class="" id="getTrafficAndEngagementOverviewMonthly">
                            <div class="w-100 rounded pr-3 pl-3 text-muted" style="height: 250px;">
                                <div class="row pt-4 pb-1">
                                    <div class="col-auto">
                                        <span class=""><i class="far fa-calendar-week fa-lg"></i></span>
                                    </div>

                                    <div class="col text-left h6 m-0 align-self-center">
                                        "Lượt truy cập hàng tháng"</div>

                                    <div class="col-4 text-right">
                                        <span class="MonthlyVisits h4 font-gg text-favorite font-bold"></span>
                                    </div>
                                </div>

                                <div class="row pt-4 pb-1">
                                    <div class="col-auto">
                                        <span class=""><i class="far fa-clipboard-user fa-lg"></i></span>
                                    </div>

                                    <div class="col h6 m-0 align-self-center">"Khách truy cập hàng tháng"
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
                                        "Thời gian truy cập trung bình"</div>

                                    <div class="col-4 text-right">
                                        <span class="AvgVisitDuration h4 font-gg text-favorite font-bold"></span>
                                    </div>
                                </div>

                                <div class="row pt-4 pb-1">
                                    <div class="col-auto">
                                        <span class=""><i class="far fa-copy fa-lg"></i></span>
                                    </div>

                                    <div class="col h6 m-0 align-self-center"> "Số trang/Lượt truy cập"
                                    </div>

                                    <div class="col-4 text-right">
                                        <span class="PagesperVisit h4 font-gg text-favorite font-bold"></span>
                                    </div>
                                </div>

                                <div class="row pt-4 pb-1">
                                    <div class="col-auto">
                                        <span class=""><i class="far fa-external-link fa-lg"></i></span>
                                    </div>

                                    <div class="col h6 m-0 align-self-center"> "Tỷ lệ thoát"</div>

                                    <div class="col-4 text-right">
                                        <span class="BounceRate h4 font-gg text-favorite font-bold"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                            style="bottom: 5px; right: 20px; border-radius: 20px">
                            <span class="increase text-muted font-20 cursor-pointer"><i class="fas fa-plus"></i></span>
                            <span class="reduction text-muted font-20 cursor-pointer"><i
                                    class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 mb-5 ui-state-default">
                    <div class="bg-white shadow-sm rounded getWebsiteGeography-container">
                        <div class="row border-bottom m-0 py-2 h-100">
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
                            <div class="ml-auto d-flex no-block align-items-center pr-3">
                                <a class="getWebsiteGeography text-muted" data-task="getWebsiteGeography"
                                    href="javascript:;"><i class="fal fa-sync"></i></a>
                            </div>
                        </div>
                        <div style="height:300px;">
                            <table id="getWebsiteGeography" class="table table-striped "
                                style="width:100%;height:100%;"></table>
                        </div>
                        <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                            style="bottom: 5px; right: 20px; border-radius: 20px">
                            <span class="increase text-muted font-20 cursor-pointer"><i class="fas fa-plus"></i></span>
                            <span class="reduction text-muted font-20 cursor-pointer"><i
                                    class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div> 

                <div class="col-12 col-lg-6 mb-5 ui-state-default">
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
                            <div class="ml-auto d-flex no-block align-items-center pr-3">
                                <a class="similarReloadTask text-muted" data-task="getWebDemographicsGender"
                                    href="javascript:;"><i class="fal fa-sync"></i></a>
                            </div>
                        </div>
                        <div class="p-20">
                            <div id="getWebDemographicsGender" class="rounded is-loading" style="height: 200px;">
                            </div>
                        </div>
                        <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                            style="bottom: 5px; right: 20px; border-radius: 20px">
                            <span class="increase text-muted font-20 cursor-pointer"><i class="fas fa-plus"></i></span>
                            <span class="reduction text-muted font-20 cursor-pointer"><i
                                    class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-12 mb-5 ui-state-default">
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
                                <div class="text-capitalize font-weight-bold"><?=_(" Truy cập theo thời gian")?>
                                </div>
                                <div class="text-muted similarDates font-10"></div>
                            </div>
                            <div class="ml-auto d-flex no-block align-items-center pr-3" id="TimeChart">
                                <fieldset>
                                    <input id="setgetTrafficAndEngagementVisitsDaily" class="radio-inline__input"
                                        type="radio" name="getTrafficAndEngagementVisits"
                                        value="setgetTrafficAndEngagementVisitsDaily" />
                                    <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsDaily">
                                        Ngày
                                    </label>
                                    <input id="setgetTrafficAndEngagementVisitsWeekly" class="radio-inline__input"
                                        type="radio" name="getTrafficAndEngagementVisits"
                                        value="setgetTrafficAndEngagementVisitsWeekly" checked="checked" />
                                    <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsWeekly">
                                        Tuần
                                    </label>
                                    <input id="setgetTrafficAndEngagementVisitsMonthly" class="radio-inline__input"
                                        type="radio" name="getTrafficAndEngagementVisits"
                                        value="setgetTrafficAndEngagementVisitsMonthly" />
                                    <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsMonthly">
                                        Tháng
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                        <div id="getTrafficAndEngagement" class="rounded is-loading" style="min-height:400px">
                            <ul class="nav nav-tabs customtab" role="tablist">
                                <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                        data-task="getTrafficAndEngagementVisits"
                                        href="#getTrafficAndEngagement--MonthlyVisits" role="tab"> <span class=""><i
                                                class="far fa-calendar-week fa-lg"></i></span> <span
                                            class="d-none d-md-inline">Lượt truy cập</span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" data-task="getUniqueUsers"
                                        href="#getTrafficAndEngagement--MonthlyUniqueVisitors" role="tab"> <span
                                            class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span
                                            class="d-none d-md-inline">Trung bình khách truy cập hàng tháng
                                        </span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                        data-task="getTrafficAndEngagementAvgVisitDuration"
                                        href="#getTrafficAndEngagement--AvgVisitDuration" role="tab"> <span class=""><i
                                                class="far fa-stopwatch fa-lg"></i></span> <span
                                            class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a>
                                </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                        data-task="getTrafficAndEngagementPagesPerVisit"
                                        href="#getTrafficAndEngagement--PagesPerVisit" role="tab"> <span class=""><i
                                                class="far fa-copy fa-lg"></i></span> <span
                                            class="d-none d-md-inline">Số trang mỗi lần truy cập</span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                        data-task="getTrafficAndEngagementBounceRate"
                                        href="#getTrafficAndEngagement--BounceRate" role="tab"> <span class=""><i
                                                class="far fa-external-link fa-lg"></i></span> <span
                                            class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                            </ul> 
                            <div class="row">
                                <div class="col-12 col-md-12 tab-content mt-1 mt-md-3">
                                    <div class="tab-pane px-4 active" id="getTrafficAndEngagement--MonthlyVisits"
                                        role="tabpanel" style="height: 300px"></div>
                                    <div class="tab-pane px-4 " id="getTrafficAndEngagement--MonthlyUniqueVisitors"
                                        role="tabpanel" style="height:300px"></div>
                                    <div class="tab-pane px-4" id="getTrafficAndEngagement--AvgVisitDuration"
                                        role="tabpanel" style="height:300px"></div>
                                    <div class="tab-pane px-4" id="getTrafficAndEngagement--PagesPerVisit"
                                        role="tabpanel" style="height:300px"></div>
                                    <div class="tab-pane px-4" id="getTrafficAndEngagement--BounceRate" role="tabpanel"
                                        style="height:300px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                            style="bottom: 5px; right: 20px; border-radius: 20px">
                            <span class="increase text-muted font-20 cursor-pointer"><i class="fas fa-plus"></i></span>
                            <span class="reduction text-muted font-20 cursor-pointer"><i
                                    class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
</div> -->

<div class="page-wrapper">
    <div class="container BendmarksTool">
        <div class="page-content pt-5">

            <div class="grid-stack">
                <!-- <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="4">
                    <div class="grid-stack-item-content">
                        <div class="bg-white shadow-sm rounded w-100 h-100">
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
                                    <div class="text-capitalize font-weight-bold">" Tổng truy cập"</div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="">
                                <div id="totalTraffic"
                                    class="d-flex no-block align-items-center justify-content-center is-loading"
                                    style="height: 200px;">
                                    <h1 class="counter font-gg"></h1>
                                </div>
                            </div>
                            <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                                style="bottom: 5px; right: 20px; border-radius: 20px">
                                <span class="increase text-muted font-20 cursor-pointer"><i
                                        class="fas fa-plus"></i></span>
                                <span class="reduction text-muted font-20 cursor-pointer"><i
                                        class="fas fa-minus"></i></span>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="grid-stack-item" data-gs-x="4" data-gs-y="0" data-gs-width="4" data-gs-height="4">
                    <div class="grid-stack-item-content">
                        <div class="bg-white shadow-sm rounded h-100 w-100">
                            <div class="row border-bottom m-0 py-2">
                                <div class="col-auto d-flex no-block align-items-center mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                                        class="svg-icon text-primary mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="bound" x="0" y="0" width="24" height="24" />
                                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                            <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                                rx="1" />
                                            <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                                rx="1" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold">" Truy cập theo thiết bị"
                                    </div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3">
                                    <a class="similarReloadTask text-muted" data-task="getDesktopVsMobileVisits"
                                        href="javascript:;"><i class="fal fa-sync"></i></a>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="Parent-getDesktopVsMobileVisits">
                                    <div id="getDesktopVsMobileVisits" class="w-100 rounded is-loading"
                                        style="height: 200px;"></div>
                                </div>
                            </div>
                            <div class="flex-column position-absolute px-2 py-1 bg-dark-2 rouded d-none"
                                style="bottom: 5px; right: 20px; border-radius: 20px">
                                <span class="increase text-muted font-20 cursor-pointer"><i
                                        class="fas fa-plus"></i></span>
                                <span class="reduction text-muted font-20 cursor-pointer"><i
                                        class="fas fa-minus"></i></span>
                            </div>
                        </div>
                    </div>
                </div> -->
               


            </div>
        </div>
    </div>
</div>

<!-- <script type="text/javascript">
$(function() {
    $('.grid-stack').gridstack();
});
</script> -->

<script src="assets/js/wordcloud2.js"></script>
<script src="assets/js/ResizeSensor.js"></script>
<script>
var isLogin = '<?=$isLogin?>';
</script>
<script type="module" src="dist/js/default/load-report.js?<?=$version?>"></script>
<script src="dist/dist/js/pages/bendmarks/scrolltop.js"></script>
<!-- <script src="dist/js/default/load-report.js"></script> -->
<script>
// $(function() {

//     // $("#sortable").sortable('destroy');
//     // $("#sortable").disableSelection();

//     $(".ui-state-default").mouseenter(function() {
//         console.log($(this).find(".position-absolute"))
//         $(this).find(".position-absolute").removeClass("d-none").addClass("d-flex")
//     })

//     $(".ui-state-default").mouseleave(function() {
//         $(this).find(".position-absolute").removeClass("d-flex").addClass("d-none")
//     })

//     $(".increase").click(function() {
//         let item = $(this).parent().parent().parent();
//         if (item.hasClass("col-lg-4")) {
//             item.removeClass("col-lg-4").addClass("col-lg-6")
//             return;
//         }

//         if (item.hasClass("col-lg-6")) {
//             item.removeClass("col-lg-6").addClass("col-lg-12")
//             return;
//         }
//     })

//     $(".reduction").click(function() {
//         let item = $(this).parent().parent().parent();
//         if (item.hasClass("col-lg-12")) {
//             item.removeClass("col-lg-12").addClass("col-lg-6")
//             return;
//         }

//         if (item.hasClass("col-lg-6")) {
//             item.removeClass("col-lg-6").addClass("col-lg-4")
//             return;
//         }
//     })


//     Sortable.create(sortable, {
//         delay: 300,
//         chosenClass: 'cursor-move',
//         ghostClass: 'ghost',
//         // dragClass: ,
//         animation: 150,
//         swapThreshold: 1,
//         delayOnTouchOnly: false,
//         forceFallback: true,
//         // onMove: function (/**Event*/evt, /**Event*/originalEvent) {
//         //     console.log(evt)
//         // },
//         // onFilter: function( /**Event*/ evt) {
//         //     var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
//         //     console.log(evt)
//         // },
//         // onRemove: function (/**Event*/evt) {
//         //     console.log(evt)
//         // },
//         direction: function(evt, target, dragEl) {
//             if (target !== null && target.className.includes('half-column') && dragEl.className
//                 .includes('half-column')) {
//                 return 'horizontal';
//             }
//             return 'vertical';
//         },
//         onChoose: function( /**Event*/ evt) {
//             let itemEl = evt.item;
//             // if (itemEl.hasClass("col-lg-6")) {
//             //     itemEl.removeClass("col-lg-6").addClass("col-lg-4")
//             // }
//             // console.log(evt.oldIndex);
//             // console.log($(itemEl).hasClass("col-lg-6"))
//             if ($(itemEl).hasClass("col-lg-6")) {
//                 $(itemEl).removeClass("col-lg-6").addClass("col-lg-4")
//             }

//             if ($(itemEl).hasClass("col-lg-12")) {
//                 $(itemEl).removeClass("col-12").addClass("col-lg-4")
//             }


//         },
//         // onEnd: function( /**Event*/ evt) { 
//         //     $(".fa-sync").click(function() {
//         //         console.log($(evt.item).hasClass("col-lg-4"))
//         //         if ($(evt.item).hasClass("col-lg-4")) {
//         //             console.log("aa")
//         //             $(evt.item).removeClass("col-lg-4").addClass("col-lg-6")
//         //             return ;
//         //         }

//         //         if ($(evt.item).hasClass("col-lg-6")) {
//         //             $(evt.item).removeClass("col-lg-6").addClass("col-12") 
//         //             return ;
//         //         }

//         //         if ($(evt.item).hasClass("col-12")) {
//         //             $(evt.item).removeClass("col-lg-12").addClass("col-lg-4") 
//         //             return ;
//         //         }
//         //     })
//         // }

//     });
// });
</script>