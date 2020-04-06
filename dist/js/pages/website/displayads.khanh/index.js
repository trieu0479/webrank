import api from './displayads.js';
$(document).ready(function () {
    $("#btn-view-text").hide()
    $("#btn-view-html").hide()
    api("getHeader", localDomain);
    api('getWebsiteAdsIntelDisplay');
    api("displayAdsOverview", localDomain);
    api("SampleAdsasImage", localDomain);
    api("SampleAdsasHTML", localDomain);
    api("SampleAdsasText", localDomain);
    api('topPublicSher', localDomain)
    api('adTypeOverview', localDomain);
    api('displayDevice', localDomain);
    api('getAllImageTable', localDomain)
    api('getAllHTMLTable', localDomain)
    api('getAllTextTable', localDomain)
    // api('PublicSherTable',localDomain)

    // -------create API----------/
    let iconClock = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
    <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
    <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
</g>
</svg>`

    let iconThunder = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000"></path>
</g>
</svg>`

    let iconChecked = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero"></path>
</g>
</svg>`

    var input = {};
    input.headerTitle = "Trang Nguồn Quảng Cáo Hiển Thị";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficDisplayAdvertisingWebsitesTable";
    input.widgetContainer = "widget-getTrafficDisplayAdvertisingWebsitesTable";
    input.headerIcon = iconChecked;
    createADataTable(input);

    var input = {};
    input.headerTitle = "Quảng Cáo Theo Quốc Gia";
    input.headerTime = "03/2019 - 02/2020";
    input.widgetTask = "getDisplayCountryChart";
    input.widgetContainer = "widget-getDisplayCountryChart";
    input.headerIcon = iconThunder;
    if (createAWidgets(input)) {
        api("getDisplayCountryChart", localDomain);
    }
    var input = {};
    input.headerTitle = "Quảng Cáo Theo Giới Tính";
    input.headerTime = "03/2019 - 02/2020";
    input.widgetTask = "getDisplayGenderChart";
    input.widgetContainer = "widget-getDisplayGenderChart";
    input.headerIcon = iconThunder;
    if (createAWidgets(input)) {
        api("getDisplayGenderChart", localDomain);
    }
    var input = {};
    input.headerTitle = "Quảng Cáo Theo Độ Tuổi";
    input.headerTime = "03/2019 - 02/2020";
    input.widgetTask = "getDisplayAgeChart";
    input.widgetContainer = "widget-getDisplayAgeChart";
    input.headerIcon = iconThunder;
    if (createAWidgets(input)) {
        api("getDisplayAgeChart", localDomain);
    }

    // ---------------------truy cap qc kenh qc nguon qc-------------
    api('getWebsiteAdsVisitsOverview', localDomain);

    var input = {};
    input.headerTitle = "Kênh Quảng Cáo";
    input.headerTime = "03/2019 - 02/2020";
    input.widgetTask = "getTrafficDisplayAdvertisingAds";
    input.widgetContainer = "widget-getTrafficDisplayAdvertisingAds";
    input.headerIcon = iconClock;
    if (createAWidgets(input)) {
        api("getTrafficDisplayAdvertisingAds", localDomain);
    }
    var input = {};
    input.headerTitle = "Nguốn Quảng Cáo";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficDestinationAds";
    input.widgetContainer = "widget-getTrafficDestinationAds";
    input.headerIcon = iconClock;
    createADataTable(input);

    var input = {};
    input.headerTitle = "Trang Landing Page Quảng Cáo";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "PublicSherTable";
    input.widgetContainer = "widget-PublicSherTable";
    input.headerIcon = iconClock;
    createADataTable(input);





    // -------------sample -ads-------------
    $('#btn-view-image').click(function () {
        $('.one-tab').addClass('active')
        $('.two-tab').removeClass('active')
        $('.three-tab').removeClass('active')

        $(".sample__ads").addClass("d-none");
        $(".sample__view__big__ads").removeClass("d-none");
        $("#myTabAds").removeClass("d-none");
    })
    $('#btn-view-html').click(function () {
        $('.one-tab').removeClass('active')
        $('.two-tab').addClass('active')
        $('.three-tab').removeClass('active')
        $(".sample__ads").addClass("d-none");
        $(".sample__view__big__ads").addClass("d-none");
        $(".sample__view__big__text").addClass("d-none");
        $(".sample__view__big__html").removeClass("d-none");
        $("#myTabAds").removeClass("d-none");

    })
    $('#btn-view-text').click(function () {
        $('.one-tab').removeClass('active')
        $('.two-tab').removeClass('active')
        $('.three-tab').addClass('active')

        $(".sample__ads").addClass("d-none");
        $(".sample__view__big__ads").addClass("d-none");
        $(".sample__view__big__html").addClass("d-none");
        $(".sample__view__big__text").removeClass("d-none");
        $("#myTabAds").removeClass("d-none");
    })

    $('.asns-popup__close-button').click(function () {
        $("#myTabAds").addClass("d-none");
        $(".sample__ads").removeClass("d-none");
    })


    $('#Tab-small-ads a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab     
        if (target == "#tab-image-ads") {
            $(".sample__view__big__text").addClass("d-none");
            $(".sample__view__big__html").addClass("d-none");
            $(".sample__view__big__ads").removeClass("d-none");
        }
        else if (target == "#tab-html-ads") {
            $('#tab-html-ads').addClass('active')
            $(".sample__view__big__ads").addClass("d-none");
            $(".sample__view__big__text").addClass("d-none");
            $(".sample__view__big__html").removeClass("d-none");
        }
        else if (target == "#tab-text-ads") {
            $(".sample__view__big__ads").addClass("d-none");
            $(".sample__view__big__html").addClass("d-none");
            $(".sample__view__big__text").removeClass("d-none");
            //    api('getAllTextTable',localDomain)      
        }

    });
    //  ---------------------------------------reload task---------------------     
    $('body').on('click', '.similarReloadTask', async function () {
        let task = $(this).data("task");

        $(this).find('i').addClass('fa-spin');
        if (task == "getTrafficDisplayAdvertisingAds" || task == "getTrafficDestinationAds" || task == "getWebsiteAdsVisitsOverview" || task == "getTrafficDisplayAdvertisingWebsitesTable") {
            return;
        }
        else {
            if (task == "PublicSherTable") {
                $(this).parent().html('')
            }
            if (task == "SampleAds") {
                $('.sample-image-ads').html('')
                $('.sample-html-ads').html('')
                $('.sample-text-ads').html('')
                $('.sample-image-ads').html('')
                await api("SampleAdsasImage", localDomain).then((res) => $(this).find('i').removeClass('fa-spin'))
                await api("SampleAdsasHTML", localDomain).then((res) => $(this).find('i').removeClass('fa-spin'))
                await api("SampleAdsasText", localDomain).then((res) => $(this).find('i').removeClass('fa-spin'))
            }
            await api(task, localDomain).then((res) => $(this).find('i').removeClass('fa-spin'))
        }
    })
});