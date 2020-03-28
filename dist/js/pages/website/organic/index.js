import api from './echartFunctions.js';
$(document).ready(function() {
    api("getHeader", localDomain);
    api("getSearchOrganicPaidOverview", localDomain);
    var input = {};
    input.headerTitle = "Tỉ Lệ Truy Câp Từ Tìm Kiếm";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSourcesSearch";
    input.widgetContainer = "widget-getTrafficSourcesSearch";
    if (createAWidgets(input)) {
        api("getTrafficSourcesSearch", localDomain);
    }
    var input = {};
    input.headerTitle = "Competitive Positioning Map";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getAdvertisingSearchDetail";
    input.widgetContainer = "widget-getAdvertisingSearchDetail";
    if (createAWidgets(input)) {
        api("getAdvertisingSearchDetail", localDomain);
    }
    var input = {};
    input.headerTitle = "Organic Keywords Trend";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getDomainOrganicDetail";
    input.widgetContainer = "widget-getDomainOrganicDetail";
    if (createAWidgets(input)) {
        api("getDomainOrganicDetail", localDomain);
    }
    var input = {};
    input.headerTitle = "Chi phí theo từ khóa";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "trafficKeywordTrend";
    input.widgetContainer = "widget-trafficKeywordTrend";
    createAWidgets(input)

    var input = {};
    input.headerTitle = "Tỉ Lệ Truy Cập Theo Từ Khoá Tự Nhiên";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getSearchBrandedKeywords";
    input.widgetContainer = "widget-getSearchBrandedKeywords";
    if (createAWidgets(input)) {
        api("getSearchBrandedKeywords", localDomain);
    }

    var input = {};
    input.headerTitle = "Chi tiết truy cập theo từ khoá tự nhiên- Có thương hiệu";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getOrganicKeywordsBrandedTable";
    input.widgetContainer = "widget-getOrganicKeywordsBrandedTable";
    createADataTable(input);

    var input = {};
    input.headerTitle = "Chi tiết truy cập theo từ khoá tự nhiên- Không thương hiệu";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getOrganicKeywordsNonBrandedTable";
    input.widgetContainer = "widget-getOrganicKeywordsNonBrandedTable";
    createADataTable(input);
    var input = {};
    input.headerTitle = "Đối thủ cạnh trang Organic";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "organicCompetitors";
    input.widgetContainer = "widget-organicCompetitors";
    createADataTable(input);

    $('body').on('click', '.similarReloadTask', function() {
        if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");
        $(this).find('i').addClass('fa-spin');
        api(task, localDomain, 1);
    })
});