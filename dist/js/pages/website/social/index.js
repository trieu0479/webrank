import api from '../echartFunctions.js';
$(document).ready(function () {
    api("getHeader", localDomain);
    api("getTrafficSocial", localDomain);

    var input = {};
    input.headerTitle = "Lượt Truy Cập Xã Hội";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSourcesSocial";
    input.widgetContainer = "widget-getTrafficSourcesSocial";
    if (createAWidgets(input)) {
        api("getTrafficSourcesSocial", localDomain);
    }

    var input = {};
    input.headerTitle = "Kênh xã hội";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSourcesSocial";
    input.widgetContainer = "widget-getTrafficSourcesSocial";
    if (createAWidgets(input)) {
        api("getTrafficSourcesSocial", localDomain);
    }

    var input = {};
    input.headerTitle = "Trang web xã hội";
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSocialTableDetail";
    input.widgetContainer = "widget-getTrafficSocialTableDetail";
    createADataTable(input);

});