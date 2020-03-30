<!---phân tích nguồn KH-->
                <div class="row">
                    <div class="col-12 mb-0">
                        <div class="bg-white shadow-sm rounded">
                            <div class="row m-0 py-2 ml-4">
                                <div class="col-auto pl-0">
                                    <div class="text-capitalize font-weight-bold"><?=_(" Phân tích nguồn khách hàng")?>
                                    </div>
                                    <div class="text-muted similarDates font-10"></div>
                                </div>
                                <div class="ml-auto d-flex no-block align-items-center pr-3" id="TimeChartMarket">
                                    <fieldset>
                                        <input id="setgetMarketingMixOverviewDaily" class="radio-inline__input"
                                            type="radio" name="getMarketingMixOverview"
                                            value="setgetMarketingMixOverviewDaily" />
                                        <label class="radio-inline__label" for="setgetMarketingMixOverviewDaily">
                                            Ngày
                                        </label>
                                        <input id="setgetMarketingMixOverviewWeekly" class="radio-inline__input"
                                            type="radio" name="getMarketingMixOverview"
                                            value="setgetMarketingMixOverviewWeekly" checked="checked" />
                                        <label class="radio-inline__label" for="setgetMarketingMixOverviewWeekly">
                                            Tuần
                                        </label>
                                        <input id="setgetMarketingMixOverviewMonthly" class="radio-inline__input"
                                            type="radio" name="getMarketingMixOverview"
                                            value="setgetMarketingMixOverviewMonthly" />
                                        <label class="radio-inline__label" for="setgetMarketingMixOverviewMonthly">
                                            Tháng
                                        </label>
                                    </fieldset>
                                </div>
                            </div>
                            <div id="Parent-getMarketingMixOverview">
                                <div id="getMarketingMixOverview" class="rounded is-loading" style="min-height:400px">
                                    <ul class="nav nav-tabs customtab" role="tablist">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                                data-task="TrafficShare" href="#getMarketingMixOverview--TrafficShare"
                                                role="tab"><span class=""><i
                                                        class="fal fa-chart-pie-alt fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Truy cập</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="AverageDuration"
                                                href="#getMarketingMixOverview--AverageDuration" role="tab"><span
                                                    class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a>
                                        </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="PagesPerVisit" href="#getMarketingMixOverview--PagesPerVisit"
                                                role="tab"><span class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                                    class="d-none d-md-inline">Số trang/Lượt truy cập</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                                data-task="BounceRate" href="#getMarketingMixOverview--BounceRate"
                                                role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                                <span class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                                        <li class="nav-item ">

                                            <a style="border-bottom: 2px solid #fd397a;background: #fd397a14;" class="similarReloadTask text-muted nav-link" data-task="getMarketingMixOverviewDaily"
                                                href="javascript:;"><i class="fal fa-sync"></i> Cập nhập</a>
                                    
                                        </li>
                                    </ul>
                                    
                                    <!-- Tab panes -->
                                    <div class="row">
                                        <div class="col-12 col-md-12 mb-0 mt-1 mt-md-2">
                                            <span></span>
                                        </div>
                                        <div class="col-12 col-md-12 tab-content mb-0 mt-1 mt-md-3">
                                            <div class="tab-pane px-4 active" id="getMarketingMixOverview--TrafficShare"
                                                role="tabpanel" style="height:350px"></div>
                                            <div class="tab-pane px-4" id="getMarketingMixOverview--AverageDuration"
                                                role="tabpanel" style="height:350px"></div>
                                            <div class="tab-pane px-4" id="getMarketingMixOverview--PagesPerVisit"
                                                role="tabpanel" style="height:350px"></div>
                                            <div class="tab-pane px-4" id="getMarketingMixOverview--BounceRate"
                                                role="tabpanel" style="height:350px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---đóng phân tích nguồn KH -->