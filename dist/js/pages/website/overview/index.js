import api from './echartFunctions.js';
$(document).ready(function() {
    api("getHeader", localDomain);
    api("estmatedWorth", localDomain);
    api("getTrafficAndEngagementVisitsMonthly", localDomain);
    api("getWebsiteGeography", localDomain);
    api("getMarketingMixOverviewDaily", localDomain);
    api("getDomainBackLinkDetail", localDomain);
    api("getTrafficSocial", localDomain);
    api('getScrapedSearchAds', localDomain)
        // ORGANIC
    var input = {};
    input.headerTitle = "Chi tiết truy cập theo từ khoá tự nhiên- Có thương hiệu";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getOrganicKeywordsBrandedTable";
    input.widgetContainer = "widget-getOrganicKeywordsBrandedTable";
    createADataTable(input);
    var input = {};
    input.headerTitle = "Tỉ Lệ Truy Cập  Từ Kiếm";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSourcesSearch";
    input.widgetContainer = "widget-getTrafficSourcesSearch";
    if (createAWidgets(input)) {
        api("getTrafficSourcesSearch", localDomain);
    }
    // ORGANIC END
    // GOOGLE ADS
    var input = {};
    input.headerTitle = "Đối thủ tìm kiếm trả phí";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getAdvertisingSearchDetail";
    input.widgetContainer = "widget-getAdvertisingSearchDetail";
    createADataTable(input);
    // GOOGLE ADS END
    //DISPAY ADS
    api("SampleAdsasImage", localDomain);
    api("SampleAdsasHTML", localDomain);
    api("SampleAdsasText", localDomain);
    //DISPLAY ADS END
    var input = {};
    input.headerTitle = "Truy cập theo tháng";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficAndEngagementOverviewMonthly";
    input.widgetContainer = "widget-getTrafficAndEngagementOverviewMonthly";
    if (createAWidgets(input)) {
        api("getTrafficAndEngagementOverviewMonthly", localDomain);
    }

    var input = {};
    input.headerTitle = "Nguồn Khách Hàng";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSourcesOverview";
    input.widgetContainer = "widget-getTrafficSourcesOverview";
    if (createAWidgets(input)) {
        api("getTrafficSourcesOverview", localDomain);
    }
    var input = {};
    input.headerTitle = "Truy cập theo tiết bị";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getDesktopVsMobileVisits";
    input.widgetContainer = "widget-getDesktopVsMobileVisits";
    if (createAWidgets(input)) {
        api("getDesktopVsMobileVisits", localDomain);
    }
    var input = {};
    input.headerTitle = "Giới tính khách hàng";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getWebDemographicsGender";
    input.widgetContainer = "widget-getWebDemographicsGender";
    if (createAWidgets(input)) {
        api("getWebDemographicsGender", localDomain);
    }
    var input = {};
    input.headerTitle = "Độ tuổi khách hàng";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getWebDemographicsAge";
    input.widgetContainer = "widget-getWebDemographicsAge";
    if (createAWidgets(input)) {
        api("getWebDemographicsAge", localDomain);
    }
    var input = {};
    input.headerTitle = "Đối thủ cạnh tranh";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getSimilarSites";
    input.widgetContainer = "widget-getSimilarSites";
    if (createAWidgets(input)) {
        api("getSimilarSites", localDomain);
    }

    var input = {};
    input.headerTitle = "Đối thủ cạnh tranh";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getKeywords";
    input.widgetContainer = "widget-getKeywords";
    createADataTable(input);

    var input = {};
    input.headerTitle = "BackLinks";
    input.headerTime = "";
    input.widgetTask = "banckLinksOverview";
    input.widgetContainer = "widget-banckLinksOverview";
    createADataTable(input);

    $(".similarReloadTask").click(function() {
        if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");
        $(this).find('i').addClass('fa-spin');
        api(task, localDomain, 1);
    })
});
$('#getTrafficAndEngagement a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    $(`.tab-pane.active`).removeClass('empty-state')
    var taskName = $(e.target).data('task'); // activated tab 
    // console.log(taskName);
    $('.time-access-reloadtask').attr('data-task', taskName)
    if (taskName == "getTrafficAndEngagementVisits" || taskName == "getTrafficAndEngagementAvgVisitDuration" || taskName == "getTrafficAndEngagementPagesPerVisit" || taskName == "getTrafficAndEngagementBounceRate") {
        // console.log("ddddd");
        $("div#TimeChart").html(`<fieldset>
        <input id="set${taskName}Daily" class="radio-inline__input" type="radio"
            name="${taskName}" value="set${taskName}Daily" />
        <label class="radio-inline__label" for="set${taskName}Daily">
            Ngày
        </label>
        <input id="set${taskName}Weekly" class="radio-inline__input" type="radio"
            name="${taskName}" value="set${taskName}Weekly"
            checked="checked" />
        <label class="radio-inline__label" for="set${taskName}Weekly">
            Tuần
        </label>
        <input id="set${taskName}Monthly" class="radio-inline__input" type="radio"
            name="${taskName}" value="set${taskName}Monthly" />
        <label class="radio-inline__label" for="set${taskName}Monthly">
            Tháng
        </label>
    </fieldset>`);
    } else {
        $("div#TimeChart").html("");
    }
    // console.log(taskName);
    let name_access = taskName;
    let temp = taskName;
    if (taskName == "getTrafficAndEngagementVisits") //lượt truy cập
        taskName = "getTrafficAndEngagement--MonthlyVisits";
    else if (taskName == "getTrafficAndEngagementAvgVisitDuration") //trung bình thời lượng
        taskName = "getTrafficAndEngagement--AvgVisitDuration";
    else if (taskName == "getTrafficAndEngagementPagesPerVisit") //số trang truy cập
        taskName = "getTrafficAndEngagement--PagesPerVisit";
    else if (taskName == "getTrafficAndEngagementBounceRate") //tỷ lệ thoát
        taskName = "getTrafficAndEngagement--BounceRate";
    else
        taskName = "getTrafficAndEngagement--MonthlyUniqueVisitors";

    let ele = document.getElementById(taskName);

    // echarts.dispose(ele);
    $(`#${taskName}`).addClass('is-loading');
    // console.log(name_access);
    if (taskName == "getTrafficAndEngagement--MonthlyUniqueVisitors")
        api(temp + "Monthly", localDomain);
    else
        api(temp + "Weekly", localDomain);

    //lượt truy cập
    $("input[type=radio][name=getTrafficAndEngagementVisits]").change(function() {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--MonthlyVisits");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--MonthlyVisits').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementVisitsMonthly") {
            api("getTrafficAndEngagementVisitsMonthly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementVisitsWeekly") {
            api("getTrafficAndEngagementVisitsWeekly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementVisitsDaily") {
            api("getTrafficAndEngagementVisitsDaily", localDomain);
        } else {}
    });
    //trung bình thời lượng
    $("input[type=radio][name=getTrafficAndEngagementAvgVisitDuration]").change(function() {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--AvgVisitDuration");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--AvgVisitDuration').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementAvgVisitDurationMonthly") {
            api("getTrafficAndEngagementAvgVisitDurationMonthly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementAvgVisitDurationWeekly") {
            api("getTrafficAndEngagementAvgVisitDurationWeekly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementAvgVisitDurationDaily") {
            api("getTrafficAndEngagementAvgVisitDurationDaily", localDomain);
        } else {}
    });
    //số trang truy cập
    $("input[type=radio][name=getTrafficAndEngagementPagesPerVisit]").change(function() {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--PagesPerVisit");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--PagesPerVisit').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementPagesPerVisitMonthly") {
            api("getTrafficAndEngagementPagesPerVisitMonthly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementPagesPerVisitWeekly") {
            api("getTrafficAndEngagementPagesPerVisitWeekly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementPagesPerVisitDaily") {
            api("getTrafficAndEngagementPagesPerVisitDaily", localDomain);
        } else {}
    });
    //tỷ lệ thoát
    $("input[type=radio][name=getTrafficAndEngagementBounceRate]").change(function() {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--BounceRate");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--BounceRate').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementBounceRateMonthly") {
            api("getTrafficAndEngagementBounceRateMonthly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementBounceRateWeekly") {
            api("getTrafficAndEngagementBounceRateWeekly", localDomain);
        }
        if (this.value == "setgetTrafficAndEngagementBounceRateDaily") {
            api("getTrafficAndEngagementBounceRateDaily", localDomain);
        } else {}
    });
});

$("input[type=radio][name=getTrafficAndEngagementVisits]").change(function() {
    let ele = document.getElementById("getTrafficAndEngagement--MonthlyVisits");
    echarts.dispose(ele);
    $('#getTrafficAndEngagement--MonthlyVisits').addClass('is-loading');
    if (this.value == "setgetTrafficAndEngagementVisitsMonthly") {
        api("getTrafficAndEngagementVisitsMonthly", localDomain);
    }
    if (this.value == "setgetTrafficAndEngagementVisitsWeekly") {
        api("getTrafficAndEngagementVisitsWeekly", localDomain);
    }
    if (this.value == "setgetTrafficAndEngagementVisitsDaily") {
        api("getTrafficAndEngagementVisitsDaily", localDomain);
    } else {}
});