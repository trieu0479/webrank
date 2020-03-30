function sum(ele) {
    let element = 0;
    for (let index = 0; index < ele.length; index++) {
        element += ele[index]
    }
    return element
}
$(document).ready(() => {

    const language = {
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
        const table = $(`.${select}`).DataTable(tableOptions);
        $(table.table().header()).addClass('text-center');
        //reload click handle
        $(`.${select}`).click(function(event) {
            // $(event.target).addClass('fa-spin');
            $(`.${select}-container`).addClass('is-loading').block({
                overlayCSS: {
                    backgroundColor: '#ccc',
                    opacity: 0.8,
                    zIndex: 1,
                    cursor: 'wait'
                },
                message: null
            });
            // $(`.${select}`).DataTable().ajax.reload(() => {
            //     $(`.${select}`).removeClass("is-loading");
            //     $(`.${select} .dataTables_empty`).text("").addClass("empty-state");
            // });
        })
        return table;
    }
    // Quốc Gia
    initDatatable(
        'getDataContry', {
            ajax: {
                url: `//localapi.trazk.com/webdata/semrush.php?task=getDomainBackLinkDetail&domain=${localDomain}&page=1&method[backlinksOverview]=true&userToken=${userToken}`,
                dataSrc: (json) => {
                    let dataContry = json.data.backlinksOverview.geodomains;
                    let columns = [];
                    let total = [];
                    if (json && dataContry) {
                        $(`.getDataContry_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none')
                        $(`#DataTables_Table_0_processing.dataTables_processing`).css('display','none').addClass('d-none')
                        $.each(dataContry, (index, item) => {
                            total.push(+item)
                        })
                        $.each(dataContry, (index, item) => {
                            let temp = {
                                contry: {
                                    icon: index,
                                    value: item,
                                    total: sum(total)
                                }
                            }
                            columns.push(temp)
                        })
                        return columns


                        // console.log(arr);
                    } else {
                        $('.getDataContry thead').addClass('d-none')
                        return columns;
                    }

                },
            },
            drawCallback: function(settings) {
                $('.getDataContry').removeClass('is-loading').unblock();
                $('.getDataContry').find('.fa-spin').removeClass('fa-spin');

            },
            columns: [
                { title: 'Quốc gia', data: data => `<div class="text-left"><span class="flag flag-${data.contry.icon}"></span></div>` },
                { title: '<div class="text-right font-weight-500">Tên miền</div>', data: data => `<div class="text-right"><span class="pr-3">${numeral(data.contry.value / data.contry.total).format('0.0%')}</span><span class="text-info">${numeral(data.contry.value).format('0,0')}</span></div>` },
            ],
            "order": [1, 'desc'],
            language,
            info: false,
            autoWidth: true,
            searching: false,
            scrollY: "255px",
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`.dataTables_scrollBody`).perfectScrollbar();
                $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd');
                $('.getDataContry .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    // TLD Distribution

    initDatatable(
        'getDataZones',
        {
            ajax: {
                url: `//localapi.trazk.com/webdata/semrush.php?task=getDomainBackLinkDetail&domain=${localDomain}&page=1&method[backlinksOverview]=true&userToken=${userToken}`,
                dataSrc: (json) => {
                    let getDataZones = json.data.backlinksOverview.zones;
                    let columns = [];
                    let total = [];
                    if (json && getDataZones) {
                        $(`#getDataZones_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none');
                        $(`#DataTables_Table_0_processing.dataTables_processing`).css('display','none').addClass('d-none')
                        $.each(getDataZones, (index, item) => {
                            total.push(+item)
                        })
                        $.each(getDataZones, (index, item) => {
                            let temp = {
                                contry: {
                                    icon: index,
                                    value: item,
                                    total: sum(total)
                                }
                            }
                            columns.push(temp)
                        })
                        return columns
                    }
                    else {
                        $('.getDataZones thead').addClass('d-none')
                        return columns;
                    }

                },
            },
            drawCallback: function (settings) {
                $('.getDataZones-container').removeClass('is-loading').unblock();
                $('.getDataZones').find('.fa-spin').removeClass('fa-spin');

            },
            columns: [
                { title: 'TLD', data: data => `<div style="width:200px" class="text-left">.${data.contry.icon}</div>` },
                { title: '<div class="text-right font-weight-500">Tên miền</div>', data: data => `<div class="text-right"><span class="pr-3">${numeral(data.contry.value / data.contry.total).format('0.0%')}</span><span class="text-info">${numeral(data.contry.value).format('0,0')}</span></div>` },
            ],
            "order": [1, 'desc'],
            language,
            info: false,
            autoWidth: true,
            searching: false,
            scrollY: "260px",
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`.dataTables_scrollBody`).perfectScrollbar();
                $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd');
                $('.getDataContry .dataTables_empty').text("").addClass('empty-state');
                $('.parent-getDataZones #DataTables_Table_1_processing').addClass('mt-n5');
            }
        }
    )


    initDatatable(
        'topBackLinks',
        {
            ajax: {
                url: `//localapi.trazk.com/webdata/semrush.php?task=getDomainBackLinkDetail&domain=${localDomain}&page=1&method[backlinksDetail]=true&userToken=${userToken}`,
                dataSrc: (json) => {
                    let topBackLinks = json.data.backlinksDetail;
                    console.log(topBackLinks);
                    
                    if (json && topBackLinks) {
                        $(`#getDataZones_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none');
                        $(`#DataTables_Table_0_processing.dataTables_processing`).css('display', 'none').addClass('d-none')
                        return topBackLinks
                    }
                    else {
                        $('.topBackLinks thead').addClass('d-none')
                        return topBackLinks;
                    }

                },
            },
            drawCallback: function (settings) {
                $('.topBackLinks-container').removeClass('is-loading').unblock();
                $('.topBackLinks').find('.fa-spin').removeClass('fa-spin');

            },
            columns: [
                { title: 'TLD', data: data => `<div style="width:200px" class="text-left">.${data.response_code}</div>` },
                { title: '<div class="text-right font-weight-500">Tên miền</div>', data: data => `<div class="text-right"><span class="pr-3">${numeral(data.response_code).format('0.0%')}</span><span class="text-info">${numeral(data.response_code).format('0,0')}</span></div>` },
            ],
            "order": [1, 'desc'],
            language,
            info: false,
            autoWidth: true,
            searching: false,
            scrollY: "260px",
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`.dataTables_scrollBody`).perfectScrollbar();
                $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd');
                $('.getDataContry .dataTables_empty').text("").addClass('empty-state');
                $('.parent-getDataZones #DataTables_Table_1_processing').addClass('mt-n5');
            }
        }
    )

})