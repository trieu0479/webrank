import api from './googleads.js';
$( document ).ready(function() {
    api("getHeader", localDomain);
    api('getScrapedSearchAds',localDomain)
    // ----------------------------------
    api("ggAdsOverview", localDomain);
    api('adwordsMonthlyFullTrend',localDomain)
    api('TopPaidKeyword',localDomain)    
    api('MainCompetitor',localDomain)    
    api('PaidPageTable',localDomain)
    var input = {};
    input.headerTitle = "Vị trí từ khóa";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "PositionChart";
    input.widgetContainer = "widget-PositionChart";
    if (createAWidgets(input)){
        api("PositionChart", localDomain);        
    }
    var input = {};
    input.headerTitle = "Bản đồ cạnh tranh";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "CompetitorMapChart";
    input.widgetContainer = "widget-CompetitorMapChart";
    if (createAWidgets(input)){
        api('CompetitorMapChart',localDomain)      
    }

    $(".similarReloadTask").click(function() {
        if ($(this).find('i').hasClass('fa-spin')) {$(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");
        console.log('ww',task);        
        $(this).find('i').addClass('fa-spin');
        api(task, localDomain);
    })


});