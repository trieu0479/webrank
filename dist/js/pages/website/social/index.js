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
    input.headerIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
    viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
        <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
        </circle>
        <path
            d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
            id="Path-3" fill="#000000"></path>
    </g>
</svg>`
    input.headerTime = "12.2019 - 02.2020";
    input.widgetTask = "getTrafficSourcesSocial";
    input.widgetContainer = "widget-getTrafficSourcesSocial";
    if (createAWidgets(input)) {
        api("getTrafficSourcesSocial", localDomain);
    }

    var input = {};
    input.headerTitle = "Trang web xã hội";
    input.headerTime = "12.2019 - 02.2020";
    input.headerIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"
    viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
        <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
        </circle>
        <path
            d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
            id="Path-3" fill="#000000"></path>
    </g>
</svg>`
    input.widgetTask = "getTrafficSocialTableDetail";
    input.widgetContainer = "widget-getTrafficSocialTableDetail";
    createADataTable(input);

    $(".similarReloadTask").click(function () {
        if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");
        console.log(task, 'task');
        $(this).find('i').addClass('fa-spin');
        api(task, localDomain, 1);
    })


});