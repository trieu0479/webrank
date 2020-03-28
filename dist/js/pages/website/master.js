var masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];
var domain = url.searchParams.get("domain");

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
    window.localDomain = domain;
    window.createAWidgets = function createAWidgets(input) {
        var html = `
            <div class="bg-white shadow-sm rounded">
                <!-- widget header -->
                <div class="row border-bottom m-0 py-2 widgetHeader">
                    <div class="col-auto d-flex no-block align-items-center mx-1">${input.headerIcon}</div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">${input.headerTitle}</div>
                        <div class="text-muted font-10">${input.headerTime}</div>
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
        var html = `
            <div class="bg-white shadow-sm rounded">
                <!-- widget header -->
                <div class="row border-bottom m-0 py-2 widgetHeader">
                    <div class="col-auto d-flex no-block align-items-center mx-1">${input.headerIcon}</div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">${input.headerTitle}</div>
                        <div class="text-muted font-10">${input.headerTime}</div>
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

});