<!---phân tích nguồn KH-->
<div class="row">
    <div class="col-12 mb-0">
        <div class="bg-white shadow-sm rounded">
            <div class="row m-0 py-2 ml-4">
                <div class="col-auto pl-0">
                    <div class="text-capitalize font-weight-bold">Truy cập theo thời gian
                    </div>
                    <div class="text-muted data-headerTimes font-10"></div>
                </div>
                <div class="ml-auto d-flex no-block align-items-center pr-3">
                    <div class="ml-2">
                        <span style="cursor: pointer;" class="similarReloadTask" data-task="getTrafficOverview"><i class="fal fa-sync"></i></span>
                    </div>
                </div>
            </div>
            <div class="parent-getTimeMobileDesktop">
                <div id="getTimeMobileDesktop" class="rounded is-loading" style="min-height:400px">
                    <ul id="getTimedes-mob-btn" class="nav nav-tabs customtab" role="tablist">
                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                data-task="TrafficShare" href="#getTimeMobileDesktop--TrafficShare"
                                role="tab"><span class=""><i
                                        class="fal fa-chart-pie-alt fa-1x"></i></span> <span
                                    class="d-none d-md-inline">Lượt truy cập</span></a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="AverageDuration"
                                href="#getTimeMobileDesktop--AverageDuration" role="tab"><span
                                    class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span
                                    class="d-none d-md-inline">Trung bình khách hàng truy cập</span></a>
                        </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="PagesPerVisit" href="#getTimeMobileDesktop--PagesPerVisit"
                                role="tab"><span class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                    class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="BounceRate" href="#getTimeMobileDesktop--BounceRate"
                                role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                <span class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="row">
                        <div class="col-12 col-md-12 mb-0 mt-1 mt-md-2">
                            <span></span>
                        </div>
                        <div class="col-12 col-md-12 tab-content mb-0 mt-1 mt-md-3">
                            <div class="tab-pane px-4 active getTimeMobileDesktopvisits" id="getTimeMobileDesktop--TrafficShare"
                                role="tabpanel" style="height:350px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                <!---đóng phân tích nguồn KH -->