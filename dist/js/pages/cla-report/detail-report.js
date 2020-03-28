$("#sidebarnav li a").each(function () {
    $(this).data("name") == "detail-report" ? $(this).addClass("active") : null;
})

var index_ip = {};

function nhanDien(click) {
    var arrRes = {};
    arrRes['status'] = "Hợp lệ";
    if (click <= 1) {
        arrRes['status'] = "Hợp lệ";
        arrRes['class_label'] = "hop-le";
        arrRes['class'] = "text-hople";
        arrRes['toolTipTitle'] = "Click để chặn";
        arrRes['function'] = 'block_ip';
    } else if (click == 2) {
        arrRes['status'] = "Nghi vấn";
        arrRes['class_label'] = "nghi-van";
        arrRes['class'] = "text-canhbao";
        arrRes['toolTipTitle'] = "Click để chặn";
        arrRes['function'] = 'block_ip';
    } else if (click == 3) {

        arrRes['status'] = "Click ảo";
        arrRes['class_label'] = "click-ao";
        arrRes['class'] = "text-danger";
        arrRes['toolTipTitle'] = "Click để chặn";
        arrRes['function'] = 'block_ip';
    } else {

        arrRes['toolTipTitle'] = "Click để chặn";
        arrRes['status'] = "Phá hoại";
        arrRes['class_label'] = "pha-hoai";
        arrRes['function'] = 'block_ip';
        arrRes['class'] = "text-red";



    }
    return arrRes;
}

function nhanDienTrangThai(status) {
    var arrRes = {};
    if (status == '1') {
        arrRes['status'] = "Đang Chờ Chặn";
        arrRes['class_label'] = "text-pending";
        arrRes['class'] = "text-canhbao";
        arrRes['toolTipTitle'] = "Click để chặn";
        arrRes['function'] = 'block_ip';
    }
    if (status == '2') {
        arrRes['status'] = "Đã Chặn";
        arrRes['class_label'] = "da-chan text-blockIp";
        arrRes['class'] = "text-red";
        arrRes['toolTipTitle'] = "Click để mở chặn";
        arrRes['function'] = 'unblock_ip';
    }
    return arrRes;
}

function render_action(virtual_click_id, ip, arrRes, campaign_id = '') {
    var url =
        `<a href='javascript:void(0);' onclick='${arrRes.function}(this, "${cid}", ${virtual_click_id}, "${ip}", "${campaign_id}")'><i class='icon-shield fa-fw ${arrRes.class}' data-toggle='tooltip' title='${arrRes.toolTipTitle}'></i></a> <a href='cla.php?view=report&action=chi-tiet-ip&ip=${ip}'>${ip}</a>`;
    return url;
}

function render_status(virtual_click_id, arrRes) {
    var url =
        `<c class='nhandien nhandien_${arrRes.class_label} nhandien_ip_${virtual_click_id}'>${arrRes.status}</c>`;
    return url;
}

function adposition(p) {
    var o = {};
    if (p && p != "none" && p != "") {
        p1 = p.slice(0, 1);;
        p2 = p.slice(-1);
        if (p1) o.page = p1;
        else o.page = "";
        if (p2) o.position = p2;
        else o.position = "";
    } else {
        o.page = "";
        o.position = "";
    }
    return o;
}

function getRootURL(u) {
    if (u) {
        var url = new URL(u);
        return "<a target='blank' href='" + u + "'>" + url.hostname + "</a>";
    } else {
        return "";
    }
}

function googleNetwork(item) {
    var o = {};
    n = item.network;
    var k = matchtype(item.matchtype, item.keyword)
    if (n == "g") { //google search 
        o.network = "Google Search";
        o.refer = k.keyword;
    } else if (n == "d") { //google search 
        o.network = "Google Display";
        o.refer = getRootURL(item.refer);
    } else if (n == "ytv") { //google search 
        o.network = "Youtube";
        o.refer = getRootURL(item.refer);
    } else {
        o.network = "Other";
        o.refer = getRootURL(item.refer);
    }

    return o;
}

function matchtype(i, k) {
    var o = {};
    switch (i) {
        case 'b':
            o.matchtype = "Rộng";
            o.keyword = k;
            break;
        case 'p':
            o.matchtype = "Cụm từ";
            o.keyword = '"' + k + '"';
            break;
        case 'e':
            o.matchtype = "Chính xác";
            o.keyword = "[" + k + "]";
            break;
        default:
            o.matchtype = "";
            o.keyword = "";
            break;
    }
    return o;
}

function readFromSocket() {
    var agentId = cid;
    // var agentId = "999999999";
    var FFF_SOCKET_CLICK_ADS_URL = '//ws.fff.com.vn/monitor-new-click-ads';
    var fff_monitor_click_ads = io.connect(FFF_SOCKET_CLICK_ADS_URL);
    fff_monitor_click_ads.on('connect', () => {
        if (agentId != '') {
            fff_monitor_click_ads.emit('connected', {
                agentId
            });
        }
    });
    fff_monitor_click_ads.on('event-new-click-ads', data => {
        buildTr(data);
    });
}

var dem = 0;

function buildTr(item) {
    dem += 1;

    index_ip[item.client_ip] = (index_ip[item.client_ip] || 0) + 1;
    var arrRes = nhanDien(index_ip[item.client_ip]);
    var click_url = render_action(`${item.virtual_click_id}`, `${item.client_ip}`,
        arrRes, item.campaign_id);
    var status_label = render_status(`${item.virtual_click_id}`, arrRes);
    var o = matchtype(item.matchtype, item.keyword)
    var po = adposition(item.adposition);
    var nn = googleNetwork(item);

    current_time = moment(item.current_time).format('h:mm MM/DD');

    ipclass = item.client_ip.replace(/[\.]/g, "");

    let index = status_label.indexOf(">");

    let value = status_label.slice(index + 1);

    index = value.indexOf("<");
    value = value.slice(0, index);



    let check = "";
    let os = "";
    let network;
    network = item.telco_name;


    if (value == "Hợp lệ")
        check = `<span style="background-color: #1bbc9b;" class="px-2 py-1 text-white rounded-pill font-11 font-gg font-weight-bold">Hợp Lệ</span>`
    else if (value == "Phá hoại")
        check = `<span class="px-2 py-1 bg-danger text-white rounded-pill font-11 font-gg font-weight-bold">Phá hoại</span>`
    else if (value == "Nghi vấn")
        check = `<span class="px-2 py-1 bg-warning text-white rounded-pill font-11 font-gg font-weight-bold">Nghi vấn</span>`
    else
        check = `<span class="px-2 py-1 bg-danger text-white rounded-pill font-11 font-gg font-weight-bold">Click ảo</span>`

    if (item.os.indexOf("Windows") == 0)
        os = `<span class="font-gg text-left" style="color: #25B4EA; font-size: 13px">${item.os}</span>`
    else if (item.os.indexOf("Android") == 0)
        os = `<span class="font-gg text-left" style="color: #5EC228; font-size: 13px">${item.os}</span>`
    else if (item.os.indexOf("Unknown OS") == 0)
        os = `<span class="font-gg text-left text-muted" style= font-size: 13px">${item.os}</span>`
    else
        os = `<span class="font-gg text-left" style="color: #BFBFBF; font-size: 13px">${item.os}</span>`;

    (item.telco_name == "VNPT") ? item.telco_name = `<span class="font-gg text-left" style="color: #0063AE; font-weight: bold; font-size: 10px">VNPT</span>`:
        (item.telco_name == "VIETTEL") ? item.telco_name = `<span class="font-gg text-left" style="color: #008D88; font-weight: bold; font-size: 10px">VIETTEL</span>` :
        (item.telco_name == "FPT") ? item.telco_name = `<span class="font-gg text-left" style="color: #EC6D21; font-weight: bold; font-size: 10px">FPT</span>` :
        (item.telco_name == "MOBIFONE") ? item.telco_name = `<span class="font-gg text-left" style="color: #E71B23; font-weight: bold; font-size: 10px">MOBIFONE</span>` :
        (item.telco_name == "VIETNAMMOBILE") ? item.telco_name = `<span class="font-gg text-left" style="color: #F85E00; font-weight: bold; font-size: 10px">VNMOBILE</span>` :
        (item.telco_name == "UNKNOWN") ? item.telco_name = `<span class="font-gg text-left text-muted" style=" font-weight: bold; font-size: 10px">UNKNOWN</span>` : item.telco_name = `<span class="font-gg pl-2" style="color: #009DDE; font-weight: bold; font-size: 10px">VINAPHONE</span>`;

    (o.matchtype == "Rộng") ? o.matchtype = `<span class="font-gg text-left text-danger" style="font-size: 11px; font-weight: bold">${o.matchtype}</span>`:
        (o.matchtype == "Cụm từ") ? o.matchtype = `<span class="font-gg text-left text-info" style="font-size: 11px; font-weight: bold">${o.matchtype}</span>` :
        (o.matchtype == "Chính xác") ? o.matchtype = `<span class="font-gg text-left text-success" style="font-size: 11px; font-weight: bold">${o.matchtype}</span>` :
        o.matchtype = "-";

    let row_html = `<tr role="row" class="${dem % 2 != 0 ? "even" : "odd"}">
                        <td class="font-gg">
                            <div class="text-left font-12 font-gg">${moment(item.current_time).format("h:mm DD/MM")}</div>
                        </td>
                        <td class="font-gg text-info" style="vertical-align: middle;">
                            <a data-ip="${item.client_ip}" class="ip text-left font-13 font-gg"  data-toggle="tooltip" title="Xem dữ liệu ip" href="javascript:void(0)">${item.client_ip}</a>
                        </td>
                        <td class="font-gg" style="vertical-align: middle;">
                            <div class="text-center">
                                ${index_ip[item.client_ip]}
                            </div>
                        </td>
                        <td>
                            <label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
                                <input data-ip="${item.client_ip}" name="block-ip-news" type="checkbox">
                                <span class="slider rounds"></span>
                            </label>  
                        </td>
                        <td class="font-gg" style="vertical-align: middle;">
                            <div class="text-left" style="width: 65px">
                                ${check}
                            </div>
                        </td> 
                        <td class="font-gg font-12" style="vertical-align: middle;">
                            <div class="font-12 text-left">
                                ${item.city}
                            </div>
                        </td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${os}</td>
                        <td style="vertical-align: middle;" class="font-gg font-12">
                            <div class="font-12 text-left">
                                ${item.browser}
                            </div>
                        </td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${item.telco_name}</td>
                        <td style="vertical-align: middle;">${(item.telco_network == "WIFI") ? `<div class="text-center"><img src="./assets/images/WIFI.png" class="bg-white" width="20px"/></div>` : `<div class="text-center"><img src="./assets/images/3G.png"/></div>`}</td>
                        <td class="font-gg font-12">
                            <div class="text-center">${nn.network}</div>
                        </td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${nn.refer}</td>
                        <td class="font-gg font-12 text-center" style="vertical-align: middle;">${o.matchtype}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;"> 
                            <div class="text-center">
                                ${po.page}
                            </div>
                        </td>
                        <td class="font-gg font-12" style="vertical-align: middle";>
                            <div class="text-center">
                                ${po.position}
                            </div>
                        </td> 
                    </tr>`;

    // console.log(item.client_ip);
    row_html = $(row_html);
    row_html.hide();
    $("#getLastIp").prepend(row_html);
    row_html.fadeIn('slow');
    $('#getLastIp tr:gt(20)').remove();
    $(`input[type="checkbox"][name=block-ip-news]`).click(async function () {
        if ($(this).prop("checked")) {
            let ip = $(this).data("ip");

            Command: toastr["info"]("Đang gửi yêu cầu chặn, vui lòng chờ.")

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
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
            }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang gửi yêu cầu chặn, vui lòng đợi.</span>`)

            await $.ajax({
                url: `//localapi.trazk.com/cla/index.php?task=blockIpToAllCampaigns&userToken=${userToken}&ip=${ip}&cid=${cid}&blockType=CLICKMANUALLY`,
                type: "POST"
            }).then(data => {
                data = JSON.parse(data);
                console.log(data)
            })


            Command: toastr["success"](`Chặn ip ${ip} thành công`)

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
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

            $(".toast.toast-success").css({
                "background-color": "white",
                "border-left": "5px solid #00c292", //2BDE3F
                "color": "black",
            }).addClass("rounded");

            $("#toast-container>div").css("padding", "0px")

            $(".toast-success .toast-message").css({
                "color": "black",
                "padding": "15px 15px 15px 15px"
            }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: #00c292; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Chặn ip ${ip} thành công.</span>`)


        } else {
            let ip = $(this).data("ip");

            $("#toast-container").removeClass("toast-top-right").addClass("toast-bottom-right")

            Command: toastr["info"]("Đang gửi yêu cầu mở chặn, vui lòng chờ.")

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
            }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang gửi yêu cầu mở chặn, vui lòng đợi.</span>`)

            await $.ajax({
                url: `http://localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                type: "POST"
            }).then(data => {
                data = JSON.parse(data);
                console.log(data)
            })

            Command: toastr["success"](`Mở chặn ip ${ip} thành công`)

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
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

            $(".toast.toast-success").css({
                "background-color": "white",
                "border-left": "5px solid #00c292", //2BDE3F
                "color": "black",
            }).addClass("rounded");

            $("#toast-container>div").css("padding", "0px")

            $(".toast-success .toast-message").css({
                "color": "black",
                "padding": "15px 15px 15px 15px"
            }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: #00c292; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Mở chặn ip ${ip} thành công.</span>`)
        }
    })

    $('[data-toggle="tooltip"]').tooltip();

    $(".ip").click(async function () {

        let ip = $(this).data("ip");
        window.location.href = `?cid=${cid}&action=detail-report&ip=${ip}`;

    })
}

function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function getLocalStorage(name) {
    return localStorage.getItem(name);
}

$(document).ready(() => {

    if (cid != "" && cid != null) {
        var info = new Anno({
            target: 'td:eq(1)',
            content: 'Bấm vào IP để xem dữ liệu IP',
            position: "bottom",
            buttons: [{
                text: 'Đóng',
                position: "left"
            }]
        })



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
                previous: 'Sau',
                next: 'Trước'
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

        initDatatable(
            'getLastIp', {
                ajax: {
                    url: `//localapi.trazk.com/cla/index.php?task=getLastIpClickAnAccount&userToken=${userToken}&limit=20&cid=${cid}`,
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
                columns: [{
                        title: 'Thời gian',
                        data: data => `<div class="text-left font-12 font-gg">${moment(data.created).format("h:mm DD/MM")}</div>`
                    },
                    {
                        title: 'IP',
                        data: data => `
                    <div class="text-info">
                        <a data-ip="${data.ip}" class="ip text-left font-12 font-gg"  data-toggle="tooltip" title="Xem dữ liệu ip" href="javascript:void(0)">${data.ip}</a>
                    </div>`,
                    },
                    {
                        title: 'Lần Click',
                        data: data => `<div class="text-center font-12">${data.click}</div>`
                    },
                    {
                        title: 'Tr.thái chặn',
                        data: data => `<label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
                    <input data-ip="${data.ip}" name="block" type="checkbox">
                    <span class="slider rounds"></span>
                </label> `
                    },
                    {
                        title: 'Nhận diện',
                        data: data => `<div class="text-left" style="width: 65px">${(data.is_virtual_click == 0) ? `<span style="background-color: #1bbc9b;" class="px-2 py-1 text-white rounded-pill font-11 font-gg font-weight-bold">Hợp Lệ</span>` : 
                                    (data.is_virtual_click == -1) ? `<span class="px-2 py-1 bg-danger text-white rounded-pill font-11 font-gg font-weight-bold">Click ảo</span>` :
                                    `<span class="px-2 py-1 bg-warning text-white rounded-pill font-11 font-gg font-weight-bold">Nghi vấn</span>` }
                                    </div>`
                    },
                    {
                        title: 'Tại',
                        data: data => `<div class="text-left font-12">${(data.city == "" ? `<div class="font-12 text-left"> - </div>` : data.city)}</div>`
                    },
                    {
                        title: 'Bằng',
                        data: data => `${(data.os.indexOf("Windows") == 0) ? `<span class="font-gg text-left" style="color: #25B4EA; font-size: 12px">${data.os}</span>`:
                    (data.os.indexOf("Android") == 0) ? `<span class="font-gg text-left" style="color: #5EC228; font-size: 12px">${data.os}</span>` :
                    (data.os.indexOf("Unknown OS") == 0) ? `<span class="font-gg text-left text-muted" style= font-size: 12px">${data.os}</span>` :
                    `<span class="font-gg text-left" style="color: #BFBFBF; font-size: 12px">${data.os}</span>`}`
                    },
                    {
                        title: 'Trình duyệt',
                        data: data => `<div class="font-12 text-left">${data.browser}<div>`
                    },
                    {
                        title: 'Mạng',
                        data: data => `${(data.network_name == "VNPT") ?`<span class="text-left font-gg" style="color: #0063AE; font-weight: bold; font-size: 10px">VNPT</span>`:
                    (data.network_name == "VIETTEL") ?`<span class="text-left font-gg" style="color: #008D88; font-weight: bold; font-size: 10px">VIETTEL</span>` :
                    (data.network_name == "FPT") ?`<span class="text-left font-gg" style="color: #EC6D21; font-weight: bold; font-size: 10px">FPT</span>` :
                    (data.network_name == "MOBIFONE") ?`<span class="text-left font-gg" style="color: #E71B23; font-weight: bold; font-size: 10px">MOBIFONE</span>` :
                    (data.network_name == "VIETNAMMOBILE") ?`<span class="text-left font-gg" style="color: #F85E00; font-weight: bold; font-size: 10px">VNMOBILE</span>` :
                    (data.network_name == "UNKNOWN") ?`<span class="text-left font-gg text-muted" style=" font-weight: bold; font-size: 10px">UNKNOWN</span>` : 
                    (data.network_name == "VINAPHONE") ? `<span class="text-left font-gg" style="color: #009DDE; font-weight: bold; font-size: 10px">VINAPHONE</span>` :
                    `<span class="text-left font-gg text-muted" style="font-weight: bold; font-size: 10px">${data.network_name}</span>`}`
                    },
                    {
                        title: 'Kết nối',
                        data: data => `${(data.network_connection_type == "3G") ? `<div class="text-center"><img src="./assets/images/3G.png"/></div>` : `<div class="text-center"><img src="./assets/images/WIFI.png" class="bg-white" width="20px"/></div>`}`
                    },
                    {
                        title: 'Chiến dịch',
                        data: data => `<div class="font-12 text-center">${(data.ads_network) ? data.ads_network : "-"}</div>`
                    },
                    {
                        title: 'Từ khóa/Page',
                        data: data => `${(data.keyword == undefined) ? `<div class="font-12 text-left"> - </div>` : `<div class="font-12 text-left">${data.keyword}</div>`}`
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
                "pageLength": 20,
                "dom": 't',
                "ordering": false,
                language,
                info: false,
                autoWidth: false,
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
                        .find('thead').addClass('text-left').removeClass("text-center")
                        .find('th').each(function (i) {
                            $(this).addClass('text-dark text-left font-gg border-0 font-11')
                        });
                    // $(`#getLastIp_wrapper #getLastIp_filter`).addClass("float-none justify-conntent-left d-flex mb-3")
                    // $(`#getLastIp_wrapper`).find("tbody").find("tr.even").addClass("bg-primary-2")
                    // $('#getLastIp').removeClass('is-loading');
                    $('#getLastIp .dataTables_empty').text("").addClass('empty-state');
                    $(`<i class="fas fa-download mr-2"></i>`).prependTo(".dataTables_wrapper .dt-buttons .buttons-excel");
                    $(".dataTables_wrapper .dt-buttons .buttons-excel").css("display", "block").addClass("d-none d-lg-block");
                    $(".dataTables_wrapper .dt-buttons").addClass("ml-auto p-0")
                    $(`input[type="checkbox"][name=block]`).click(function () {
                        ($(this).prop("checked")) ? $(this).addClass("check"): $(this).removeClass("check")
                    })

                    // $(".dt-buttons").before(`
                    // <div id="header" class="d-flex border-bottom px-3 pt-4">
                    //     <div class="font-16 text-dark font-gg font-weight-bold">
                    //         Danh Sách IP Mới Vừa Click
                    //     </div>
                    // </div>`)

                    // $(".dt-buttons").appendTo($("#header"))

                    $("input[type=checkbox][name=block]").on("change", async function () {
                        if ($(this).prop("checked")) {
                            let ip = $(this).data("ip");

                            Command: toastr["info"]("Đang gửi yêu cầu chặn, vui lòng chờ.")

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
                            }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang gửi yêu cầu chặn, vui lòng đợi.</span>`)

                            await $.ajax({
                                url: `//localapi.trazk.com/cla/index.php?task=blockIpToAllCampaigns&userToken=${userToken}&ip=${ip}&cid=${cid}&blockType=CLICKMANUALLY`,
                                type: "POST"
                            }).then(data => {
                                data = JSON.parse(data);
                                console.log(data)
                            })


                            Command: toastr["success"](`Chặn ip ${ip} thành công`)

                            toastr.options = {
                                "closeButton": false,
                                "debug": false,
                                "newestOnTop": false,
                                "progressBar": false,
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

                            $(".toast.toast-success").css({
                                "background-color": "white",
                                "border-left": "5px solid #00c292", //2BDE3F
                                "color": "black",
                            }).addClass("rounded");

                            $("#toast-container>div").css("padding", "0px")

                            $(".toast-success .toast-message").css({
                                "color": "black",
                                "padding": "15px 15px 15px 15px"
                            }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: #00c292; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Chặn ip ${ip} thành công.</span>`)


                        } else {
                            let ip = $(this).data("ip");


                            Command: toastr["info"]("Đang gửi yêu cầu mở chặn, vui lòng chờ.")

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
                            }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang gửi yêu cầu mở chặn, vui lòng đợi.</span>`)

                            await $.ajax({
                                url: `http://localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                                type: "POST"
                            }).then(data => {
                                data = JSON.parse(data);
                                console.log(data)
                            })

                            Command: toastr["success"](`Mở chặn ip ${ip} thành công`)

                            toastr.options = {
                                "closeButton": false,
                                "debug": false,
                                "newestOnTop": false,
                                "progressBar": false,
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

                            $(".toast.toast-success").css({
                                "background-color": "white",
                                "border-left": "5px solid #00c292", //2BDE3F
                                "color": "black",
                            }).addClass("rounded");

                            $("#toast-container>div").css("padding", "0px")

                            $(".toast-success .toast-message").css({
                                "color": "black",
                                "padding": "15px 15px 15px 15px"
                            }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: #00c292; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Mở chặn ip ${ip} thành công.</span>`)
                        }
                    })

                    $('[data-toggle="tooltip"]').tooltip();

                    $(".ip").click(async function () {

                        let ip = $(this).data("ip");
                        window.location.href = `?cid=${cid}&action=detail-report&ip=${ip}`;

                    })

                    // $(".scrollbar").perfectScrollbar(); 

                    $.get(`//localapi.trazk.com/cla/index.php?task=getTutorialFraudClick&userToken=${userToken}&cid=${cid}`).then(data => {
                        data = JSON.parse(data);
                        console.log(data);
                        if (data.data) {
                            if (data.data.knowIpInfo == "false") {
                                info.show();
                                $("td.anno-placeholder").addClass("d-none");
                                $(".anno.anno-target-top").css({
                                    "left": "60px",
                                    "top": "45px",
                                });
                                $("td").css({
                                    "width": "auto",
                                    "height": "auto",
                                    "left": "61px",
                                    "top": "10px",
                                }); 
                                $.post(`//localapi.trazk.com/cla/index.php?task=updateTutorialFraudClick&userToken=${userToken}&cid=${cid}&knowledge=knowIpInfo&value=${true}`)
                            }
                        }
                    })

                    if (!getLocalStorage("FirstInDetailReport")) {
                        info.show();
                        $("td.anno-placeholder").addClass("d-none");
                        $(".anno.anno-target-top").css({
                            "left": "60px",
                            "top": "45px",
                        });
                        $("td").css({
                            "width": "auto",
                            "height": "auto",
                            "left": "61px",
                            "top": "10px",
                        });

                        setLocalStorage("FirstInDetailReport", true)
                    }
                }
            }
        )

        $("#chitiet").click(() => {
            window.location.href = `?cid=${cid}&action=date-report`;
        })

        readFromSocket();

    }
})