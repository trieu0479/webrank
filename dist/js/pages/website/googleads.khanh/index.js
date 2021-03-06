import api from './googleads.js';
$(document).ready(function () {
    api("getHeader", localDomain);
    api('getScrapedSearchAds', localDomain)
    // ----------------------------------
    api("ggAdsOverview", localDomain);
    api('adwordsMonthlyFullTrend', localDomain)
    // api('TopPaidKeyword', localDomain)
    // api('MainCompetitor', localDomain)
    api('PaidPageTable', localDomain)

    let icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
        <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
        <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
    </g>
</svg>`;

    var input = {};
    input.headerTitle = "Vị trí từ khóa";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "PositionChart";
    input.widgetContainer = "widget-PositionChart";
    input.headerIcon = icon;
    if (createAWidgets(input)) {
        api("PositionChart", localDomain);
    }
    var input = {};
    input.headerTitle = "Bản đồ cạnh tranh";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "CompetitorMapChart";
    input.widgetContainer = "widget-CompetitorMapChart";
    input.headerIcon = icon;
    if (createAWidgets(input)) {
        api('CompetitorMapChart', localDomain)
    }

    var input = {};
    input.headerTitle = "Đối Thủ Cạnh Tranh";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "MainCompetitor";
    input.widgetContainer = "widget-MainCompetitor";
    createADataTable(input);

    var input = {};
    input.headerTitle = "Từ Khóa Quảng Cáo";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "TopPaidKeyword";
    input.widgetContainer = "widget-TopPaidKeyword";
    createADataTable(input);

    $(".similarReloadTask").click(function () {
        if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");
        console.log('dsadasdsad',task);
        
        $(this).find('i').addClass('fa-spin');
        api(task, localDomain, 1);
    })

});