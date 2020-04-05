import api from '../echartFunctions.js';
import apiBackLink from './backLinkEchart.js';


$(document).ready(function () {

    
    var localUrl = new URL(location.href);
    var localDomain = localUrl.searchParams.get('domain');


    api("getHeader", localDomain);
    apiBackLink('backLinksOverviews', localDomain);
    apiBackLink('referringDomains', localDomain);
    apiBackLink('total_backlink', localDomain);
    apiBackLink('backlinkTypes', localDomain);
    apiBackLink('backlinksScorical', localDomain)
    apiBackLink('backlinksTraffic', localDomain)
    apiBackLink('backlinksKeywords', localDomain)

    var input = {};
    input.headerTitle = "Top Anchor";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "anchors-cloud";
    input.widgetContainer = "widget-anchors-cloud";
    if (createAWidgets(input)) {
        apiBackLink('anchors-cloud', localDomain);
    }

    var input = {};
    input.headerTitle = "Categories Of Referring Domains";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "categories-refdomains";
    input.widgetContainer = "widget-categories-refdomains";
    if (createAWidgets(input)) {
        apiBackLink('categories-refdomains', localDomain);
    }

    var input = {};
    input.headerTitle = "Quốc Gia";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getDataContry";
    input.widgetContainer = "widget-getDataContry";
    createADataTable(input);

    var input = {};
    input.headerTitle = "TLD Distribution";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getDataZones";
    input.widgetContainer = "widget-getDataZones";
    createADataTable(input);

    $(".similarReloadTask").click(function () {
        if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");
        $(this).find('i').addClass('fa-spin');
        apiBackLink(task, localDomain, 1);
    })
});