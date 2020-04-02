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
            previous: '<i class="fal fa-angle-double-left"></i>',
            next: '<i class="fal fa-angle-double-right"></i>'
        }
    };
    //init datatable
    const initDatatable = function (select, tableOptions) {
        const table = $(`.${select}`).DataTable(tableOptions);
        $(table.table().header()).addClass('text-center');
        //reload click handle
        $(`.${select}`).click(function (event) {
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

    var arrNameContry = [];
    $.get(`//localapi.trazk.com/webdata/v3.php?task=countryIsoName`, function (res) {
        arrNameContry = res.data
    })
    // Quá»‘c Gia
    initDatatable(
        'getDataContry',
        {
            ajax: {
                url: `https://localapi.trazk.com/webdata/v3.php?task=getDomainBackLinkDetail&domain=${localDomain}&page=1&method[backlinksOverview]=true&userToken=${userToken}`,
                dataSrc: (json) => {

                    let dataContry = json.data.backlinksOverview.geodomains;
                    let columns = [];
                    let total = [];
                    let data1 = [];
                    if (json && dataContry) {
                        $(`.getDataContry_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none')
                        $(`#DataTables_Table_0_processing.dataTables_processing`).css('display', 'none').addClass('d-none')
                        $.each(dataContry, (index, item) => {
                            total.push(+item)
                        })

                        $.each(arrNameContry, (index, item) => {
                            let nameCountry = {
                                ele: index.toLowerCase(),
                                name: item
                            }
                            data1.push(nameCountry)
                        })
                        data1.forEach(val => {
                            for (const i in dataContry) {
                                if (val.ele == i) {
                                    let temp = {
                                        contry: {
                                            id: val.ele,
                                            name: val.name,
                                            value: dataContry[i],
                                            total: sum(total)
                                        }
                                    }
                                    columns.push(temp)
                                }
                            }
                        })
                        return columns

                    } else {
                        $('.getDataContry thead').addClass('d-none')
                        return columns;
                    }

                },
            },
            drawCallback: function (settings) {
                $('.getDataContry').removeClass('is-loading').unblock();
                $('.getDataContry').find('.fa-spin').removeClass('fa-spin');

            },
            columns: [
                { title: 'Quốc gia', data: data => `<div class="text-left"><span class="flag flag-${data.contry.id}"></span><span class="pl-1 font-12">${data.contry.name}</span></div>` },
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
                url: `//localapi.trazk.com/webdata/v3.php?task=getDomainBackLinkDetail&domain=${localDomain}&page=1&method[backlinksOverview]=true&userToken=${userToken}`,
                dataSrc: (json) => {
                    let getDataZones = json.data.backlinksOverview.zones;
                    let columns = [];
                    let total = [];
                    if (json && getDataZones) {
                        $(`#getDataZones_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none');
                        $(`#DataTables_Table_0_processing.dataTables_processing`).css('display', 'none').addClass('d-none')
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
            scrollY: "255px",
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
                url: `https://localapi.trazk.com/webdata/v3.php?task=getDomainBackLinkDetail&domain=${localDomain}&page=1&method[backlinksDetail]=true&userToken=${userToken}`,
                dataSrc: (json) => {
                    let topBackLinks = json.data.backlinksDetail;
                    lockedModule('topBackLinks', json.userData.member);
                    let arrTopBackLinks = [];
                    let stt = 1;
                    if (json && topBackLinks) {
                        $('#DataTables_Table_2_length').addClass('d-none');
                        $(`#getDataZones_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none');
                        $(`#DataTables_Table_2_processing.dataTables_processing`).css('display', 'none').addClass('d-none')
                        for (const key in topBackLinks) {
                            let temp = {};
                            temp.stt = stt
                            temp.source_title = topBackLinks[key].source_title,
                                temp.source_url = topBackLinks[key].source_url,
                                temp.external_link_num = topBackLinks[key].external_link_num,
                                temp.internal_link_num = topBackLinks[key].internal_link_num,
                                temp.anchor = topBackLinks[key].anchor,
                                temp.target_url = topBackLinks[key].target_url,
                                temp.first_seen = topBackLinks[key].first_seen,
                                temp.last_seen = topBackLinks[key].last_seen,
                                temp.image = topBackLinks[key].image,
                                temp.text = topBackLinks[key].text,
                                temp.lostlink = topBackLinks[key].image,
                                temp.newlink = topBackLinks[key].text,
                                temp.nofollow = topBackLinks[key].nofollow,
                                stt += 1;
                            arrTopBackLinks.push(temp)
                        }
                        return arrTopBackLinks
                    }
                    else {
                        $('.topBackLinks thead').addClass('d-none')
                        return arrTopBackLinks;
                    }

                },
            },
            drawCallback: function (settings) {
                $('.topBackLinks-container').removeClass('is-loading').unblock();
                $('.topBackLinks').find('.fa-spin').removeClass('fa-spin');

            },

            columns: [
                { title: 'STT', data: data => `<div style="width:50px" class="text-left">${data.stt}</div>` },
                {
                    title: 'Source Page Title and URL',
                    data: data => {
                        let url = '';
                        let icon = '';
                        if (data.source_url.substring(0, 8) == 'https://') {
                            url = data.source_url.substring(8)
                            icon = `<i class="fad fa-lock pr-2 text-muted" data-toggle="tooltip" data-placement="top" title="HTTPS protocol"></i>`;
                        } else {
                            url = data.source_url.substring(7)
                            icon = ""
                        }
                        return `<div class="text-left">${data.source_title}</div> <div class="text-left">${icon}<a href="${data.source_url}">${url}</a></div>`
                    }
                },
                { title: 'Ext Links', data: data => `<div class="text-left">${data.external_link_num}</div>` },
                { title: 'Int inks', data: data => `<div class="text-left">${data.external_link_num}</div>` },
                {
                    title: 'Anchor and Target URL',
                    data: data => {
                        let url_target = '';
                        let icon = '';
                        let image = '';
                        let text = '';
                        let lostlink = '';
                        let newlink = '';
                        let nofollow = ''
                        if (data.image == true) {
                            image = `<span class="badge badge-text mr-2 badge-tLink">image</span>`
                        } else {
                            image = ""
                        }
                        if (data.text == true) {
                            text = `<span class="badge badge-text mr-2 badge-tLink">text</span>`
                        } else {
                            text = ""
                        }
                        if (data.lostlink == true) {
                            lostlink = `<span class="badge badge-lost mr-2 badge-tLink">lost</span>`
                        } else {
                            lostlink = ""
                        }
                        if (data.newlink == true) {
                            newlink = `<span class="badge badge-new mr-2 badge-tLink">new</span>`
                        } else {
                            newlink = ""
                        }
                        if (data.nofollow == true) {
                            nofollow = `<span class="badge badge-nofl mr-2 badge-tLink">nofollow</span>`
                        } else {
                            nofollow = ""
                        }

                        if (data.target_url.substring(0, 8) == 'https://') {
                            url_target = data.target_url.substring(8);
                            icon = `<i class="fad fa-lock pr-2 text-muted" data-toggle="tooltip" data-placement="top" title="HTTPS protocol"></i>`;
                        } else {
                            url_target = data.target_url.substring(7);
                            icon = ""
                        }
                        return `<div class="text-left">${data.anchor}</div> 
                                <div class="text-left text-hidden">
                                ${icon}<a href="${data.target_url}">${url_target}</a>
                                </div>
                                <div>
                                ${image}${text}${lostlink}${newlink}${nofollow}
                                </div>
                                `
                    }
                },
                { title: 'First Seen', data: data => `<div class="text-left" style="width:80px">${moment(data.first_seen * 1000).format('DD MMM YY')}</div>` },
                { title: 'Last Seen', data: data => `<div class="text-left" style="width:80px">${moment(data.last_seen * 1000).format('DD MMM YY')}</div>` },
            ],
            // "order": [1, 'desc'],
            language,
            ordering: true,
            rowId: 'trId',
            info: false,
            autoWidth: false,
            searching: false,
            scrollCollapse: true,
            paging: true,
            processing: true,
            pageLength: 10,
            initComplete: function (settings, json) {
                $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd');
                // $('.getDataContry .dataTables_empty').text("").addClass('empty-state');
                // $('.parent-getDataZones #DataTables_Table_1_processing').addClass('mt-n5');
                $(`.topBackLinks`).attr('style', 'margin-top:0!important')
                    .find('thead').addClass('bg-primary-2')
                    .find('th').each(function (i) {
                        $(this).addClass(' text-left font-gg border-0 font-12')
                    });
            }
        }
    )

})

