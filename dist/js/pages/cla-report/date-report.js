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
            previous: '<i class="fa fa-angle-left kt-font-brand"></i>',
            next: '<i class="fa fa-angle-right kt-font-brand"></i>'
        }
    };

    const initDatatable = function (select, tableOptions) {
        const table = $(`#${select}`).DataTable(tableOptions);
        $(table.table().header()).addClass('text-center');
        //reload click handle
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
            $(`#${select}`).DataTable().ajax.reload(() => {
                $(`#${select}`).removeClass("is-loading");
                $(`#${select} .dataTables_empty`).text("").addClass("empty-state");
            });
        })
        return table;
    }

    if (cid != "" && cid != null) { 
        const url = new URL(location.href);
        fromSelect = url.searchParams.get("from")
        toSelect = url.searchParams.get("to");

        if (fromSelect == undefined || fromSelect == "") from = moment().subtract(15, 'days').startOf('day').format('YYYY/MM/DD');
        else from = moment(fromSelect, "DD/MM/YYYY").format('YYYY/MM/DD')
        if (toSelect == undefined || toSelect == "") to = moment().subtract(1, 'days').startOf('day').format('YYYY/MM/DD');
        else to = moment(toSelect, "DD/MM/YYYY").format('YYYY/MM/DD')

        initDatatable(
            'getLastIp', {
                ajax: {
                    url: `//localapi.trazk.com/cla/index.php?task=getLastIpClickAnAccount&userToken=${userToken}&limit=1000&cid=${cid}&from=${from}&to=${to}`,
                    dataSrc: (json) => {

                        if (json.data.history)
                            return json.data.history;
                        else
                            return [];
                    },
                },
                drawCallback: function (settings) {
                    $('.getLastIp-container').removeClass('is-loading').unblock();
                    $('.getLastIp-container').find('.fa-spin').removeClass('fa-spin');
                },
                columns: [
                    {
                        title: 'Thời gian',
                        data: data => `<div class="pl-2">${moment(data.created).format("h:mm DD/MM")}</div>`
                    },
                    {
                        title: 'IP',
                        data: data =>   `<div class="text-info">
                                            <a data-ip="${data.ip}" class="ip font-13 font-gg"  data-toggle="tooltip" title="Xem dữ liệu ip" href="javascript:void(0)">${data.ip}</a>
                                        </div>`,
                    },
                    {
                        title: 'Lần Click',
                        data: data => `<div class="text-left pl-3">${data.click}</div>`
                    },
                    // {
                    //     title: 'Tr.thái chặn',
                    //     // data: data => `${data.click}`
                    //     data: data => `<label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
                    //     <input name="block" type="checkbox">
                    //     <span class="slider rounds"></span>
                    // </label> `
                    // },
                    {
                        title: 'Nhận diện',
                        data: data => `<div class="text-left pl-3" style="width: 100px">${(data.is_virtual_click == 0) ? `<span style="background-color: #1bbc9b; padding: 5px 12px" class="text-white rounded-pill font-11 font-gg font-weight-bold">Hợp Lệ</span>` : 
                                        (data.is_virtual_click == -1) ? `<span style="padding: 5px 12px" class="bg-danger text-white rounded-pill font-11 font-gg font-weight-bold">Click ảo</span>` :
                                        `<span style="padding: 5px 12px" class="bg-warning text-white rounded-pill font-11 font-gg font-weight-bold">Nghi vấn</span>` }
                                        </div>`
                    },
                    {
                        title: 'Tại',
                        data: data => `<div class="font-12">${(data.city == "" ? `<div class="font-12 text-center"> - </div>` : data.city)}</div>`
                    },
                    {
                        title: 'Bằng',
                        data: data => `${(data.os.indexOf("Windows") == 0) ? `<span class="font-gg" style="color: #25B4EA; font-size: 12px">${data.os}</span>`:
                        (data.os.indexOf("Android") == 0) ? `<span class="font-gg" style="color: #5EC228; font-size: 12px">${data.os}</span>` :
                        (data.os.indexOf("Unknown OS") == 0) ? `<span class="font-gg text-muted" style= font-size: 12px">${data.os}</span>` :
                        `<span class="font-gg" style="color: #BFBFBF; font-size: 12px">${data.os}</span>`}`
                    },
                    {
                        title: 'Trình duyệt',
                        data: data => `<div class="font-12 pl-2">${data.browser}<div>`
                    },
                    {
                        title: 'Mạng',
                        data: data => `${(data.network_name == "VNPT") ?`<span class="pl-2 font-gg" style="color: #0063AE; font-weight: bold; font-size: 10px">VNPT</span>`:
                        (data.network_name == "VIETTEL") ?`<span class="pl-2 font-gg" style="color: #008D88; font-weight: bold; font-size: 10px">VIETTEL</span>` :
                        (data.network_name == "FPT") ?`<span class="pl-2 font-gg" style="color: #EC6D21; font-weight: bold; font-size: 10px">FPT</span>` :
                        (data.network_name == "MOBIFONE") ?`<span class="pl-2 font-gg" style="color: #E71B23; font-weight: bold; font-size: 10px">MOBIFONE</span>` :
                        (data.network_name == "VIETNAMMOBILE") ?`<span class="pl-2 font-gg" style="color: #F85E00; font-weight: bold; font-size: 10px">VIETNAMMOBILE</span>` :
                        (data.network_name == "UNKNOWN") ?`<span class="pl-2 font-gg text-muted" style=" font-weight: bold; font-size: 10px">UNKNOWN</span>` : 
                        (data.network_name == "VINAPHONE") ? `<span class="pl-2 font-gg" style="color: #009DDE; font-weight: bold; font-size: 10px">VINAPHONE</span>` :
                        `<span class="pl-2 font-gg text-muted" style="font-weight: bold; font-size: 10px">${data.network_name}</span>`}`
                    },
                    {
                        title: 'Kết nối',
                        data: data => `${(data.network_connection_type == "3G") ? `<div class="pl-2"><img src="./assets/images/3G.png"/></div>` : `<div class="pl-2"><img src="./assets/images/WIFI.png" class="bg-white" width="20px"/></div>`}`
                    },
                    {
                        title: 'Chiến dịch',
                        data: data => `<div class="font-12 pl-2">${data.ads_network}</div>`
                    },
                    {
                        title: 'Từ khóa/Page',
                        data: data => `${(data.keyword == undefined) ? `<div class="font-12 text-center"> - </div>` : `<div class="font-12">${data.keyword}</div>`}`
                    },
                    {
                        title: 'Đối Sánh',
                        data: data => `${(data.page == undefined) ? `<div class="font-12 text-center"> - </div>` : (data.matchtype == "Rộng") ? `<div class="font-gg text-danger text-center" style="font-size: 11px; font-weight: bold">${data.matchtype}</div>`:
                        (data.matchtype == "Cụm từ") ? `<div class="font-gg text-info text-center" style="font-size: 11px; font-weight: bold">${data.matchtype}</div>` :
                        (data.matchtype == "Chính xác") ? `<div class="font-gg text-success text-center" style="font-size: 11px; font-weight: bold">${data.matchtype}</div>` :
                        "-"}`
                    },
                    {
                        title: 'Trang',
                        data: data => `${(data.page == undefined) ? `<div class="font-12 text-center"> - </div>` : `<div class="font-12 text-center">${data.page}</div>`}`
                    },
                    {
                        title: 'Vị trí',
                        data: data => `${(data.position == undefined) ? `<div class="font-12 text-center"> - </div>` : `<div class="font-12 text-center">${data.position}</div>`}`
                    },
                ],
                "dom": 'Bftp',
                "ordering": false,
                language,
                info: false,
                autoWidth: false,
                "pageLength": 30,
                buttons: [{
                    extend: 'excel',
                    text: 'Tải File Excel',
                    className: 'text-success bg-success-2 rounded shadow-sm',
                    exportOptions: {
                        format: {
                            body: function (data, row, column, node) {
                                if (column == 3) {
                                    if (`<div class="text-left pl-3"><i class="fas fa-check-circle text-success" style="font-size: 16px" title="Hợp lệ"></i>
                                        </div>` == data)
                                        return data = "Hợp lệ";
                                } else if (column == 8) {
                                    if (`<div class="pl-2"><img src="./assets/images/WIFI.png" class="bg-white" width="20px"/></div>` == data)
                                        return data = "WIFI";
                                    else
                                        return data = "3G"
                                } else {
                                    let index = data.indexOf(">");

                                    let value = data.slice(index + 1);

                                    index = value.indexOf("<");
                                    value = value.slice(0, index);

                                    return value;
                                }
                            }
                        }
                    }
                }],
                // searching: false,
                "scrollX": true,
                // scrollY: '350px', 
                // scrollCollapse: true,
                // paging: false,
                // responsive: true, 
                processing: true,
                initComplete: function (settings, json) {

                    $(`#getLastIp_wrapper .dataTables_scrollBody`).addClass("border-0")
                    $(`#getLastIp_wrapper`).attr('style', 'margin-top:0!important')
                        .find('thead').addClass('bg-primary-2')
                        .find('th').each(function (i) {
                            $(this).addClass('text-dark text-left font-gg border-0 font-11')
                        });
                    // $(`#getLastIp_wrapper #getLastIp_filter`).addClass("float-none justify-conntent-left d-flex mb-3")
                    // $(`#getLastIp_wrapper`).find("tbody").find("tr.even").addClass("bg-primary-2")
                    // $('#getLastIp').removeClass('is-loading');
                    $('#getLastIp .dataTables_empty').text("").addClass('empty-state');

                    this.api().columns().every(function () {
                        var column = this;
                        var idColumn = column[0][0];
                        if ([4, 5].includes(idColumn)) {
                            // data-show-subtext="true" data-live-search="true"
                            var select = $(`<select id="${(idColumn==4) ? `City` : `Hệ điều hành`}" class="my-select font-gg border rounded">
                                                <option value="">${(idColumn==4) ? `Lọc Theo Khu Vực` : `Lọc Theo Hệ Điều Hành`}
                                                </option>
                                            </select>`)
                                // .appendTo($("#getLastIp_filter"))
                                .on('change', function () {
                                    var val = $.fn.dataTable.util.escapeRegex(
                                        $(this).val()
                                    );

                                    column
                                        .search(val ? '^' + val + '$' : '', true, false)
                                        .draw();
                                });

                            let idSelect = "";
                            (idColumn == 5) ? idSelect = `City`: "";

                            if (column[0][0] == 4)
                                $("#getLastIp_filter").prepend(select);
                            else
                                $(`#${idSelect}`).after(select);

                            column.data().unique().sort().each(function (d, j) {

                                let index = d.indexOf(">");

                                let value = d.slice(index + 1);

                                index = value.indexOf("<");
                                value = value.slice(0, index);

                                if (value != "-" && value != "")
                                    select.append(`<option value='${value}'>${value}</option>`);
                            });
                        }
                    });

                    $(".dataTables_wrapper .dataTables_filter").addClass("d-flex justify-content-between");
                    $(".my-select").addClass("d-none d-lg-flex")
                    $('.my-select').selectpicker();
                    $(`<i class="fas fa-download mr-2"></i>`).prependTo(".dataTables_wrapper .dt-buttons .buttons-excel");
                    $(".dataTables_wrapper .dt-buttons .buttons-excel").css("display", "block").addClass("d-none d-lg-block");
                    $(".dataTables_wrapper .dt-buttons").addClass("ml-5")
                    $(`input[type="checkbox"][name=block]`).click(function () {
                        ($(this).prop("checked")) ? $(this).addClass("check"): $(this).removeClass("check")
                    }) 

                    $(".inner.show").addClass("scrollbar")
                    $(".scrollbar").perfectScrollbar();

                    $('[data-toggle="tooltip"]').tooltip();

                    $(".ip").click(async function () {

                        let ip = $(this).data("ip");
                        window.location.href = `?cid=${cid}&action=detail-report&ip=${ip}`;

                    })
                }
            }
        )
    }





})