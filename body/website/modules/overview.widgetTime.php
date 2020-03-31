
<div class="bg-white shadow-sm rounded">
    <div class="row m-0 pt-2">
        <div class="col-auto pl-0 ml-4">
            <div class="text-capitalize font-weight-bold">Truy cập theo thời gian</div>
            <div class="text-muted data-headerTimes font-10"></div>
        </div>
        <div class="ml-auto d-flex no-block align-items-center">
            <div class=" pr-3" id="TimeChart">
                <fieldset>
                    <input id="setgetTrafficAndEngagementVisitsMonthly" class="radio-inline__input"
                        type="radio" name="getTrafficAndEngagementVisits"
                        value="setgetTrafficAndEngagementVisitsMonthly"  checked="checked" />
                    <label class="radio-inline__label"
                        for="setgetTrafficAndEngagementVisitsMonthly">
                        Tháng
                    </label>
                    <input id="setgetTrafficAndEngagementVisitsWeekly" class="radio-inline__input"
                        type="radio" name="getTrafficAndEngagementVisits"
                        value="setgetTrafficAndEngagementVisitsWeekly"/>
                    <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsWeekly">
                        Tuần
                    </label>
                    <input id="setgetTrafficAndEngagementVisitsDaily" class="radio-inline__input"
                        type="radio" name="getTrafficAndEngagementVisits"
                        value="setgetTrafficAndEngagementVisitsDaily" />
                    <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsDaily">
                        Ngày
                    </label>
                </fieldset>
            </div>
        </div>
    </div>
    <div id="getTrafficAndEngagement" class="rounded is-loading" style="min-height:400px">
        <ul class="nav nav-tabs customtab" role="tablist">
            <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                    data-task="getTrafficAndEngagementVisits"
                    href="#getTrafficAndEngagement--MonthlyVisits" role="tab"> <span class=""><i
                            class="far fa-calendar-week fa-lg"></i></span> <span
                        class="d-none d-md-inline">Lượt truy cập</span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                    data-task="getUniqueUsers"
                    href="#getTrafficAndEngagement--MonthlyUniqueVisitors" role="tab"> <span
                        class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span
                        class="d-none d-md-inline">Trung bình khách truy cập hàng tháng
                    </span></a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                    data-task="getTrafficAndEngagementAvgVisitDuration"
                    href="#getTrafficAndEngagement--AvgVisitDuration" role="tab"> <span
                        class=""><i class="far fa-stopwatch fa-lg"></i></span> <span
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
                <div class="tab-pane px-4" id="getTrafficAndEngagement--BounceRate"
                    role="tabpanel" style="height:300px"></div>
            </div>
        </div>
    </div>
</div>
