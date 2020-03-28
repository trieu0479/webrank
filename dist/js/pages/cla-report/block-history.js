$("#sidebarnav li a").each(function () {
    $(this).data("name") == "block-history" ? $(this).addClass("active") : null;
})

$(document).ready(() => {

    if (cid != "" && cid != null) {
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

            //delete 
            $(`#${select}`).on('click', `input[type="checkbox"][name=${select}]`, async function () {

                // let ip  = $(`input[type="checkbox"][name=${select}]`).data("ip");  
                var ip = null;

                $(this).parents('tr').find("td").each(function () {
                    let val = $(this).find("label").find("input").data("ip");
                    if (val)
                        ip = val;
                })

                Command: toastr["info"]("Đang gửi yêu cầu mở chặn, vui lòng chờ.")

                // console.log($(this).parents('tr').find("td:first").text());

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-bottom-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }

                $(".toast.toast-info").css({
                    "background-color": "white",
                    "border-left": "5px solid #03a9f3", //1D72F3
                    "color": "black",
                }).addClass("rounded");

                $("#toast-container>div").css("padding", "0px")


                $(".toast-info .toast-message").css({
                    "color": "black",
                    "padding": "15px 15px 15px 15px" //fad fa-info-circle
                }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang gửi yêu mở chặn, vui lòng đợi.</span>`)

                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    // console.log(data)
                    Command: toastr["success"](`Mở chặn ip ${ip} thành công`)
                })

                // table.row($(this).parents('tr')).remove().draw();



                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-bottom-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "500",
                    "timeOut": "3000",
                    "extendedTimeOut": "500",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }

                $(".toast.toast-success").css({
                    "background-color": "white",
                    "border-left": "5px solid #00c292", //2BDE3F
                    "color": "black",
                }).addClass("rounded");

                $("#toast-container>div").css("padding", "0px")

                // $(".toast-title").css({
                //     "color":"black",
                //     "padding": "15px 0px 0px 52px"
                // }).addClass("font-gg font-14 font-weight-bold")

                $(".toast-success .toast-message").css({
                    "color": "black",
                    "padding": "15px 15px 15px 15px"
                }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: #00c292; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Mở chặn ip ${ip} thành công.</span>`)
            });


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

        initDatatable(
            'getHistoryBlockedIpOnAdWords', {
                ajax: {
                    url: `//localapi.trazk.com/cla/index.php?task=getHistoryBlockedIpOnAdWords&userToken=${userToken}&cid=${cid}&limit=100`,
                    dataSrc: (json) => {
                        if (json.data.history) {
                            let newData = []; 
                            json.data.history.forEach((ele, index) => { 
                                let temp = {    
                                    stt: index + 1,
                                    times: moment(ele.created).format("h:mm DD/MM"),
                                    ip: ele.ip,
                                    status: ele.status,
                                    blockCampaigns: (ele.blockCampaigns != null) ? ele.blockCampaigns.length + " chiến dịch" : "0",
                                    cause: "Người dùng chặn",
                                    historyclick: "Xem",
                                    trId: ele.blockType
                                    // trId: ele.ip.replace(/[\.]/g, "-")
                                }

                                newData.push(temp);
                            })
                            return newData;
                        } else {
                            return [];
                        }
                    },
                },
                drawCallback: function (settings) {
                    
                    $('#getHistoryBlockedIpOnAdWords tr').each(function (index, row) {
                        let blockType = $(row).attr('id');
                        
                        if (blockType) { 
                            $.get(`//localapi.trazk.com/cla/index.php?task=getResonBlockIp&userToken=${userToken}`)
                            .then(data => {
                                data = JSON.parse(data);
                                if(data.data)
                                {
                                    let reason = data.data.reason;

                                    for (const i in reason) {
                                        if(i == blockType){
                                            $(`tbody #${blockType} .reason`).html(reason[i]);
                                        }
                                    }
                                    
                                }
                            })  
                        }
                    });

                    // $('.getHistoryBlockedIpOnAdWords-container').removeClass('is-loading').unblock();
                    // $('.getHistoryBlockedIpOnAdWords-container').find('.fa-spin').removeClass('fa-spin');
                },
                columns: [
                    {
                        title: 'STT',
                        data: data => `<div class="pl-2">${data.stt}</div>`
                    },
                    {
                        title: 'Thời gian',
                        data: data => `<div class="pl-2">${data.times}</div>`
                    },
                    {
                        title: 'IP',
                        data: data => `<div class="text-info">
                        <a data-ip="${data.ip}" class="ip font-13 font-gg"  data-toggle="tooltip" title="Xem dữ liệu ip" href="javascript:void(0)">${data.ip}</a>
                    </div>`,
                    },
                    // {
                    //     title: 'Trạng thái',
                    //     data: data => (data.status == -2) ?
                    //         ` <div class="pl-3">
                    //                             <label style="line-height: 10px;" class="switch mb-0" title="Click để mở chặn">
                    //                                 <input data-ip="${data.ip}" name="getHistoryBlockedIpOnAdWords" type="checkbox" checked=true>
                    //                                 <span class="slider rounds"></span>
                    //                             </label>
                    //                         </div>`

                    //         :
                    //         ` <div class="pl-3">
                    //                             <label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
                    //                                 <input name="getHistoryBlockedIpOnAdWords" type="checkbox">
                    //                                 <span class="slider rounds"></span>
                    //                             </label>
                    //                         </div>`
                    // },
                    {
                        title: 'Chặn trên',
                        data: data => `<div class="pl-2">${data.blockCampaigns}</div>`
                    },
                    {
                        title: 'Lý do',
                        data: data => `<div class="font-12 pl-2 reason"><div>`
                    },
                    {
                        title: 'Lịch sử click',
                        data: data => ` <div class="pl-3">
                                        <a data-ip="${data.ip}" class="ip font-13 font-gg" href="javascript:void(0)">${data.historyclick}</a>
                                    </div>`
                    },
                ],
                rowId: 'trId',
                "dom": 'Bftp',
                "ordering": false,
                language,
                info: false,
                autoWidth: false,
                buttons: [{
                    extend: 'excel',
                    text: 'Tải File Excel',
                    className: 'text-success bg-success-2 rounded shadow-sm',
                    exportOptions: {
                        format: {
                            body: function (data, row, column, node) {

                                if (column == 3) {

                                    return "Đang Chặn";
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
                // "scrollX": true,
                // scrollY: '350px', 
                // scrollCollapse: true,
                // paging: false,
                // responsive: true,
                processing: true,
                initComplete: function (settings, json) {

                    // $(`#getHistoryBlockedIpOnAdWords_wrapper .dataTables_scrollBody`).addClass("border-0")
                    $(`#getHistoryBlockedIpOnAdWords_wrapper`).attr('style', 'margin-top:0!important')
                        .find('thead').addClass('bg-primary-2')
                        .find('th').each(function (i) {
                            $(this).addClass('text-dark text-left font-gg border-0 font-11')
                        });
                    // $(`#getHistoryBlockedIpOnAdWords_wrapper #getHistoryBlockedIpOnAdWords_filter`).addClass("float-none justify-conntent-left d-flex mb-3")
                    // $(`#getHistoryBlockedIpOnAdWords_wrapper`).find("tbody").find("tr.even").addClass("bg-primary-2")
                    $('#getHistoryBlockedIpOnAdWords').removeClass('is-loading');
                    $('#getHistoryBlockedIpOnAdWords .dataTables_empty').text("").addClass('empty-state');

                    $(".dataTables_wrapper .dataTables_filter").addClass("d-flex")
                    $('.my-select').selectpicker();
                    $(`<i class="fas fa-download mr-2"></i>`).prependTo(".dataTables_wrapper .dt-buttons .buttons-excel");
                    $(".dataTables_wrapper .dt-buttons .buttons-excel").css("display", "block");
                    $(".dataTables_wrapper .dt-buttons").addClass("mr-4 ml-3 p-0")

                    $('[data-toggle="tooltip"]').tooltip();

                    $(".ip").click(async function () {

                        let ip = $(this).data("ip");
                        window.location.href = `?cid=${cid}&action=detail-report&ip=${ip}`;

                    })
                }
            }
        )


        initDatatable(
            'getRealBlockedIpOnAdWords', {
                ajax: {
                    url: `//localapi.trazk.com/cla/index.php?task=getRealBlockedIpOnAdWords&userToken=${userToken}&cid=${cid}&cache=nocache`,
                    dataSrc: (json) => {

                        if (json.data) {
                            let newData = [];

                            let data = json.data.ips;
                            let index = 1;
                            for (let i in data) {
                                let temp = {
                                    stt: index,
                                    ip: data[i].ip.ip,
                                    lengthcamp: data[i].camp.length + " chiến dịch",
                                    camp: data[i].camp,
                                    trId: data[i].ip.ip.replace(/[\.]/g, "")
                                }

                                newData.push(temp)

                                index++;
                            }
                            return newData
                        } else {
                            return []
                        }
                    },
                },
                drawCallback: function (settings) {
                    $('#getRealBlockedIpOnAdWords tr').each(function (index, row) {
                        var id_ip = $(row).attr('id');
                        
                        if (id_ip) {
                            id_ip = id_ip.replace(/[\-]/g, "."); 
                            $.get(`//localapi.trazk.com/cla/index.php?task=whyIpBlocked&cid=${cid}&ip=${id_ip}&userToken=${userToken}`)
                            .then(data => {
                                data = JSON.parse(data);
                                if(data.data)
                                {
                                    let reason = data.data.reason_txt;  
                                    id_ip = id_ip.replace(/[\.]/g, "-");
                                    $(`tbody #${id_ip} .reason`).html(reason);
                                }
                            })  
                        }
                    });

                    // $('.getRealBlockedIpOnAdWords-container').removeClass('is-loading').unblock();
                    // $('.getRealBlockedIpOnAdWords-container').find('.fa-spin').removeClass('fa-spin');
                },
                columns: [
                    // {
                    //     title: 'STT',
                    //     data: data => `<div class="pl-3">${data.stt}</div>`
                    // },
                    {
                        title: 'IP',
                        data: data => `<div class="text-info">
                        <a data-ip="${data.ip}" class="ip font-13 font-gg"  data-toggle="tooltip" title="Xem dữ liệu ip" href="javascript:void(0)">${data.ip}</a>
                    </div>`,
                    },
                    {
                        title: 'Trạng thái',
                        data: data => ` <div class="pl-2">
                                        <label style="line-height: 10px;" class="switch mb-0" title="Click để mở chặn">
                                            <input data-ip="${data.ip}" name="getRealBlockedIpOnAdWords" type="checkbox" checked=true>
                                            <span class="slider rounds"></span>
                                        </label>
                                    </div>`
                    },
                    {
                        title: 'Khoá trên',
                        data: data => `<div class="pl-2" style="width: 85px">${data.lengthcamp}</div>`
                    }, 
                    {
                        title: 'Lý do',
                        data: data => `<div class="font-12 pl-2 reason" style="width: 130px"><div>`
                    },
                    {
                        title: 'Chiến dịch',
                        data: data => {
                            let content = "";
                            data.camp.forEach((ele, index) => {
                                content += ele.campaignName + ", "
                            })

                            return `<div class="">${content}</div>`
                        }
                    },
                    
                ],
                "dom": 'Bftp',
                "ordering": false,
                language,
                info: false,
                autoWidth: false,
                rowId: 'trId',
                buttons: [{
                    extend: 'excel',
                    text: 'Tải File Excel',
                    className: 'text-success bg-success-2 rounded shadow-sm',
                    exportOptions: {
                        format: {
                            body: function (data, row, column, node) {

                                if (column == 2) {

                                    return "Đang Chặn";
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
                // "scrollX": true,
                // scrollY: '350px', 
                // scrollCollapse: true,
                // paging: false,
                // responsive: true,
                processing: true,
                initComplete: function (settings, json) {

                    // $(`#getRealBlockedIpOnAdWords_wrapper .dataTables_scrollBody`).addClass("border-0")
                    $(`#getRealBlockedIpOnAdWords_wrapper`).attr('style', 'margin-top:0!important')
                        .find('thead').addClass('bg-primary-2')
                        .find('th').each(function (i) {
                            $(this).addClass('text-dark text-left font-gg border-0 font-11')
                        });
                    // $(`#getRealBlockedIpOnAdWords_wrapper #getRealBlockedIpOnAdWords_filter`).addClass("float-none justify-conntent-left d-flex mb-3")
                    // $(`#getRealBlockedIpOnAdWords_wrapper`).find("tbody").find("tr.even").addClass("bg-primary-2")
                    $('#getRealBlockedIpOnAdWords').removeClass('is-loading');
                    $('#getRealBlockedIpOnAdWords .dataTables_empty').text("").addClass('empty-state');

                    this.api().columns().every(function () {
                        // var column = this;
                        // var idColumn = column[0][0];
                        // if ([0].includes(idColumn)) {

                        //     var select = $(`<select id="${(idColumn==0) ? `IP` : `Hệ điều hành`}" class="my-select font-gg border rounded" data-show-subtext="true" data-live-search="true">
                        //                         <option value="">${(idColumn==0) ? `<i class="fal fa-filter"></i>Lọc Theo IP` : `Lọc Theo Hệ Điều Hành`}
                        //                         </option>
                        //                     </select>`)
                        //         // .appendTo($("#getRealBlockedIpOnAdWords_filter"))
                        //         .on('change', function () {
                        //             var val = $.fn.dataTable.util.escapeRegex(
                        //                 $(this).val()
                        //             );

                        //             column
                        //                 .search(val ? '^' + val + '$' : '', true, false)
                        //                 .draw();
                        //         });

                        //     let idSelect = "";
                        //     // (idColumn==4) ? idSelect = `IP` : idSelect =`City`;

                        //     if (column[0][0] == 0)
                        //         $("#getRealBlockedIpOnAdWords_filter").prepend(select);
                        //     else
                        //         $(`#${idSelect}`).after(select);

                        //     column.data().unique().sort().each(function (d, j) {

                        //         let index = d.indexOf(">");

                        //         let value = d.slice(index + 1);

                        //         index = value.indexOf("<");
                        //         value = value.slice(0, index);

                        //         if (value != "-" && value != "")
                        //             select.append(`<option value='${value}'>${value}</option>`);
                        //     });
                        // }
                    });

                    $(".getRealBlockedIpOnAdWords_wrapper .dataTables_filter").addClass("d-flex")
                    $('.my-select').selectpicker();
                    $(`<i class="fas fa-download mr-2"></i>`).prependTo(".getRealBlockedIpOnAdWords_wrapper .dt-buttons .buttons-excel");
                    $(".getRealBlockedIpOnAdWords_wrapper .dt-buttons .buttons-excel").css("display", "block");
                    $(".getRealBlockedIpOnAdWords_wrapper .dt-buttons").addClass("mr-4 ml-3")
                    $(`input[type="checkbox"][name=getRealBlockedIpOnAdWords]`).click(async function () {
                        if ($(this).prop("checked")) {

                            $(this).addClass("check")
                        } else {

                            // Command: toastr["info"]("Đang gửi yêu cầu mở chặn, vui lòng chờ.")

                            // toastr.options = {
                            //     "closeButton": false,
                            //     "debug": false,
                            //     "newestOnTop": false,
                            //     "progressBar": true,
                            //     "positionClass": "toast-bottom-right",
                            //     "preventDuplicates": false,
                            //     "onclick": null,
                            //     "showDuration": "300",
                            //     "hideDuration": "1000",
                            //     "timeOut": "5000",
                            //     "extendedTimeOut": "1000",
                            //     "showEasing": "swing",
                            //     "hideEasing": "linear",
                            //     "showMethod": "fadeIn",
                            //     "hideMethod": "fadeOut"
                            //   }

                            // let ip = $(this).data("ip");

                            // await $.ajax({
                            //     url: `//localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                            //     type: "POST"
                            // }).then(data => {
                            //     data = JSON.parse(data);
                            //     console.log(data)
                            // })

                            // console.log(ip)

                            // let idIP = ip.replace(/[\.]/g, "");

                            // Command: toastr["success"](`Mở chặn ip ${ip} thành công`)

                            // toastr.options = {
                            //     "closeButton": false,
                            //     "debug": false,
                            //     "newestOnTop": false,
                            //     "progressBar": false,
                            //     "positionClass": "toast-bottom-right",
                            //     "preventDuplicates": false,
                            //     "onclick": null,
                            //     "showDuration": "300",
                            //     "hideDuration": "1000",
                            //     "timeOut": "5000",
                            //     "extendedTimeOut": "1000",
                            //     "showEasing": "swing",
                            //     "hideEasing": "linear",
                            //     "showMethod": "fadeIn",
                            //     "hideMethod": "fadeOut"
                            //   }


                        }
                    })


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