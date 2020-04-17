var localUrl = new URL(location.href);
var domain = localUrl.searchParams.get('domain');
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}
const initDatatable = function (select, tableOptions) {
    const table = $(`#${select}`).DataTable(tableOptions);
    let idTable;
    idTable = table;
    //$(table.table().header()).addClass('text-center');
    //reload click handle
    $(`#${select}`).click(function (event) {
        $(event.target).addClass('fa-spin');
        $(`#${select}-container`).addClass('is-loading').block({
            overlayCSS: {
                backgroundColor: '#ccc',
                opacity: 0.8,
                zIndex: 1,
                cursor: 'wait'
            },
            message: null
        });
        $(`#${select}`).DataTable().ajax.reload(() => {
            $(`#${select}`).removeClass("is-loading");
            $(`#${select} .dataTables_empty`).text("").addClass("empty-state");
        });
    })
    return table;
};

const initClassDatatable = function (select, tableOptions) {
    const table = $(`.${select}`).DataTable(tableOptions);
    let idTable;
    idTable = table;
    $(`.${select}`).click(function (event) {
        $(event.target).addClass('fa-spin');
        $(`.${select}-container`).addClass('is-loading').block({
            overlayCSS: {
                backgroundColor: '#ccc',
                opacity: 0.8,
                zIndex: 1,
                cursor: 'wait'
            },
            message: null
        });
        $(`.${select}`).DataTable().ajax.reload(() => {
            $(`.${select}`).removeClass("is-loading");
            $(`.${select} .dataTables_empty`).text("").addClass("empty-state");
        });
    })
    return table;
};

const renderSparkline = (task) => { //task ở đây là id cha
    $(`.${task} .sparkline`).each((index, item) => {
        $(item).html('');
        $(item).sparkline($(item).data('sparkline'), {
            type: 'bar',
            width: '50px',
            height: '16px',
            barColor: '#3366cc',
        });
    });
}

$(document).ready(function () {

    initClassDatatable(
        'MainCompetitor', {
        ajax: {
            url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingSearchDetail&domain=${domain}&page=1&method[adwordsCompetitors]=true&userToken=${userToken}`,
            dataSrc: function (res) {
                let dataMainCompetitor = res.data.adwordsCompetitors;
                let columns = [];

                $('.similarReloadTask[data-task="MainCompetitor"]').find('i').addClass('d-none');
                if (res.data.adwordsCompetitors != null && res.data.adwordsCompetitors.length != 0) {

                    lockedModule('MainCompetitor', res.userData.member);

                    $.each(dataMainCompetitor, function (k, v) {

                        let output = {};
                        output.domain = v.domain;
                        output.competitionLvl = v.competitionLvl;
                        output.commonKeywords = v.commonKeywords;
                        output.adwordsKeywords = v.adwordsKeywords;
                        columns.push(output)

                    })
                    return columns;
                } else {
                    $('.parent-MainCompetitor').addClass('empty-state').attr('style', 'height:300px!important');
                    $(".MainCompetitor").addClass('d-none')
                    $("#DataTables_Table_0_paginate").attr('style', 'display:none!important');
                    return columns;
                }
            },
        },
        drawCallback: function (settings) {

        },
        columns: [{
            title: "<span class='font-gg font-weight-100 font-12'>Competitor</span>",
            "data": data => `<a href="${rootURL}/rank/${data.domain}">${data.domain}</a>`,
            width: '35%',
            class: 'text-left'
        },
        {
            title: "<span class='font-gg font-weight-100 font-12'>Com.Level</span>",
            "data": data => `<div class="progress bg-dark-2" style="height:8px;width:100px">
                    <div class="progress-bar bg-warning" style="width:${numeral(data.competitionLvl * 1000).format('0,0')}px;height:8px;" role="progressbar"></div>
                </div>`
        },
        {
            title: "<span class='font-gg font-weight-100 font-12'>Com.Keywords</span>",
            "data": data => `${numeral(data.commonKeywords).format('0,0')}`,
            class: 'text-center'
        },
        {
            title: "<span class='font-gg font-weight-100 font-12'>Paid Keywords</span> ",
            "data": data => `${data.adwordsKeywords}`,
            class: 'text-center'
        },

        ],

        ordering: false,
        rowId: 'trId',
        info: false,
        autoWidth: false,
        searching: false,
        sorting: true,
        //   scrollY: '350px',
        scrollCollapse: false,
        paging: true,
        pageLength: 5,
        processing: false,
        destroy: true,
        initComplete: function (settings, json) {
            $("table.dataTable thead th").css("padding", "10px");
            $("table.MainCompetitor tbody tr td").css("padding", "15px 10px!important");
            $('#DataTables_Table_0_length').attr('style', 'display:none!important')
            $('#DataTables_Table_0_paginate').attr('style', 'margin-top: 15px;!important')
        }
    }
    )

    initDatatable(
        'PaidPageTable', {
        ajax: {
            url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingSearchDetail&domain=${domain}&page=1&method[adwordsPositions]=true&userToken=${userToken}`,
            dataSrc: function (res) {
                let dataPaidPageTable = res.data.adwordsPositions;
                let columns = [];
                let stt = 1;
                $('.similarReloadTask[data-task="PaidPageTable"]').find('i').addClass('d-none');
                if (res.data.adwordsPositions != null && res.data.adwordsPositions.length != 0) {
                    lockedModule('PaidPageTable', res.userData.member);
                    $.each(dataPaidPageTable, function (k, v) {
                        let output = {};
                        output.stt = stt;
                        output.url = v.url;
                        output.traffic = v.traffic;
                        output.keywordDifficulty = v.keywordDifficulty;
                        output.description = v.description
                        output.trends = v.trends;
                        stt += 1;
                        columns.push(output)


                    })

                    //  console.log(columns);
                    return columns;
                } else {
                    $('#PaidPageTable_wrapper').addClass('empty-state');
                    $('#PaidPageTable_wrapper').removeClass('is-loading');
                    $('#PaidPageTable').addClass('d-none')
                    $('#PaidPageTable_wrapper .dt-buttons').addClass('d-none')
                    $('#PaidPageTable_paginate').attr('style', 'display:none!important')
                    return columns;
                }
            },
        },
        drawCallback: function (settings) { renderSparkline('PaidPageTable') },
        columns: [{
            title: "STT",
            data: 'stt',
            // width:'20%',
            className: 'align-middle ml-5 pl-3'
        },
        {
            title: "URL",
            className: 'parent-hover pr-0 text-left align-middle',
            data: 'url',
            render: (data, type, row) => `<a href="${data}" target="_blank" class="text-break text-truncate-2">${data} <i class="child-hover fal fa-external-link"></i></a>`,
            width: '20%'
        },
        {
            title: "Title",
            className: 'parent-hover pr-0 align-middle',
            "data": data => `${data.description}`,
            width: '40%'
        },
        {
            title: "Traffic",
            "data": data => `${kFormatter(data.traffic)}`,
            "data": data => `<div class="badge font-10 ${kFormatter(data.traffic) <= 1000 ? kFormatter(data.traffic) <= 100 ? ' bg-warning' : 'bg-danger' : 'bg-success'}">${kFormatter(data.traffic) ? (kFormatter(data.traffic)) : 0}</a>`,
            class: 'align-middle pl-5',
            width: '15%'
        },
        {
            title: "Trends",
            data: 'trends',
            render: (data, type, row) => `<div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.trends}]"></div>`,
            class: 'parent-hover align-middle',
            width: '15%'
        },
        {
            title: "Keywords",
            "data": data => `<div class="round round-sm ${data.keywordDifficulty <= 70 ? data.keywordDifficulty <= 30 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${data.keywordDifficulty ? numeral(data.keywordDifficulty).format('0,0') : 0}</a>`,
            class: 'align-middle',
            width: '25%'
        },

        ],
        buttons: [{
            extend: 'excelHtml5',
            text: '<i class="fad fa-arrow-down mr-1"></i> Download',
            filename: 'fff_com_vn_TatCaNoiDungQuangCao'
        }],
        dom: 'Bfrtip',
        ordering: false,
        rowId: 'trId',
        info: false,
        autoWidth: false,
        searching: false,
        sorting: true,
        //   scrollY: '350px',
        scrollCollapse: false,
        paging: true,
        pageLength: 5,
        processing: false,
        destroy: true,
        pageLength: 10,

        initComplete: function (settings, json) {
            $("table.dataTable thead th").css("padding", "10px");
            $("table.dataTable tbody tr td").css("padding", "15px 10px");
            // renderSparkline('PaidPageTable')
        }
    }
    )

    initClassDatatable(
        'TopPaidKeyword', {
        ajax: {
            url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingSearchDetail&domain=${domain}&page=1&method[adwordsPositions]=true&userToken=${userToken}`,
            dataSrc: function (res) {
                let dataTopPaidKeyword = res.data.adwordsPositions;
                let columns = [];
                $('.similarReloadTask[data-task="TopPaidKeyword"]').find('i').addClass('d-none');
                if (res.data.adwordsPositions != null && res.data.adwordsPositions.length != 0) {
                    lockedModule('TopPaidKeyword', res.userData.member);
                    $.each(dataTopPaidKeyword, function (k, v) {

                        let output = {};
                        output.phrase = v.phrase;
                        output.position = v.position;
                        output.volume = v.volume;
                        output.cpc = v.cpc;
                        output.traffic = v.traffic;
                        columns.push(output)

                    })
                    return columns;
                } else {
                    $('.parent-TopPaidKeyword').attr('style', 'height:300px!important').addClass('empty-state')
                    $(".TopPaidKeyword").addClass('d-none')
                    $("#DataTables_Table_1_paginate").attr('style', 'display:none!important');
                    $('#DataTables_Table_1_length').attr('style', 'display:none!important')

                    return columns;
                }
            },
        },
        drawCallback: function (settings) { },
        columns: [{
            title: "<span class='font-gg font-weight-100 font-12'>Keywords</span>",
            "data": data => `<a href="?view=keyword-planner&action=result&keywords=${data.phrase}">${data.phrase}</a>`
        },
        {
            title: "<span class='font-gg font-weight-100 font-12'>Position</span>",
            "data": data => `${data.position}`
        },
        {
            title: "<span class='font-gg font-weight-100 font-12'>Volume</span>",
            "data": data => `${numeral(data.volume).format('0,0')}`
        },
        {
            title: "<span class='font-gg font-weight-100 font-12'>CPC <i class='fad fa-usd-circle'></i></span> ",
            "data": data => `${data.cpc}`
        },

        {
            title: "<span class='font-gg font-weight-100 font-12'>Traffic </span> ",
            "data": data => `${numeral(data.traffic).format('0,0')}`
        }
        ],
        // language,
        ordering: false,
        rowId: 'trId',
        info: false,
        autoWidth: false,
        searching: false,
        sorting: false,
        //   scrollY: '350px',
        scrollCollapse: false,
        paging: true,
        pageLength: 5,
        processing: false,
        destroy: true,
        initComplete: function (settings, json) {
            // $("table.dataTable thead th").css("padding", "10px");
            // $('#DataTables_Table_1_paginate').attr('style','margin-top: 15px;!important')
            $('#DataTables_Table_1_length').attr('style', 'display:none!important')
        }
    }
    )

})