var masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];
var domain = "";
if (location.href.indexOf("/rank/") > 1) {
    domain = location.href.substring(location.href.indexOf("/rank/") + 6);
} else {
    domain = url.searchParams.get("domain");
}
domain = extractHostname(domain);

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

const datatableLanguage = {
    searchPlaceholder: 'Nhập từ khóa',
    processing: 'Đang xử lý...',
    loadingRecords: 'Đang tải...',
    emptyTable: 'Không có dữ liệu hiển thị',
    lengthMenu: 'Hiển thị: _MENU_ dòng mỗi trang',
    zeroRecords: 'Không tìm thấy dữ liệu',
    info: 'Hiển thị từ _START_ đến _END_ trong tổng _TOTAL_ dòng',
    infoEmpty: 'Hiển thị từ 0 đến 0 trong tổng 0 dòng',
    infoFiltered: '(lọc từ tổng số _MAX_ dòng)',
    search: 'Tìm kiếm:',
    paginate: {
        previous: 'Quay lại',
        next: 'Tiếp theo'
    }
};
//init datatable
const initDatatable = function(select, tableOptions) {
    const table = $(`#${select}`).DataTable(tableOptions);
    $(table.table().header()).addClass('text-center');
    //reload click handle
    $(`.${select}`).click(function(event) {
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
        $(`#${select}`).DataTable().ajax.reload(() => {
            $(`#${select}`).removeClass("is-loading");
            $(`#${select} .dataTables_empty`).text("").addClass("empty-state");
        });
    })
    return table;
}

$(document).ready(() => {
    var date = new Date();
    var headerTimes = moment(date).format('MM.YYYY')
    $('.data-headerTimes').text(headerTimes)
    window.localDomain = domain;
    window.createAWidgets = function createAWidgets(input) {
        if (input.headerIcon == undefined) input.headerIcon = `<i class="text-primary fad fa-check-circle"></i>`;
        var html = `
            <div class="bg-white shadow-sm rounded">
                <!-- widget header -->
                <div class="row border-bottom m-0 py-2 widgetHeader">
                    <div class="col-auto d-flex no-block align-items-center mx-1">${input.headerIcon}</div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">${input.headerTitle}</div>
                        <div class="text-muted font-10">${headerTimes}</div>
                    </div>
                    <div class="ml-auto d-flex no-block align-items-center pr-3">
                        <span class="similarReloadTask" data-task="${input.widgetTask}"><i class="fal fa-sync"></i></span>
                    </div>
                </div>
                <div class="widgetBody text-center">
                    <div class="parent-${input.widgetTask}">
                        <div class="w-100 ${input.widgetTask} rounded is-loading" style="height: 300px;">
                        </div>
                    </div>
                </div>
            </div>
            `;
        $("." + input.widgetContainer).html(html);
        // console.log(input);        
        return true;
    }
    window.createADataTable = function createATable(input) {
        if (input.headerIcon == undefined) input.headerIcon = `<i class="text-primary fad fa-check-circle"></i>`;
        var html = `
            <div class="bg-white shadow-sm rounded" style="height:100%">
                <!-- widget header -->
                <div class="row border-bottom m-0 py-2 widgetHeader">
                    <div class="col-auto d-flex no-block align-items-center mx-1">${input.headerIcon}</div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">${input.headerTitle}</div>
                        <div class="text-muted font-10">${headerTimes}</div>
                    </div>
                    
                </div>
                <div class="widgetBody text-center">
                    <div class="parent-${input.widgetTask}">
                        <table class="table table-striped ${input.widgetTask}"style="width:100%;height:100%;"></table>
                    </div>
                </div>
            </div>
            `;
        $("." + input.widgetContainer).html(html);
        // console.log(input);

        return true;
    }
    window.lockedModule = function lockedModule(boxWidgetName, level) {
        var freeModule = ["getKeywords", "getWebsiteGeography", "banckLinksOverview","getAdvertisingSearchDetail","getOrganicKeywordsBrandedTable","getSimilarSites"];
        var VIPModule = ["topBackLinks","getTrafficDisplayAdvertisingWebsitesTable"];
        if (level == 'demo'){
            if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)){
                $(".parent-" + boxWidgetName).addClass("locked");
                $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
            }
        } else if (level == 'free'){
            if (VIPModule.includes(boxWidgetName)){
                $(".parent-" + boxWidgetName).addClass("locked");
                $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
            }
        }
    }
});