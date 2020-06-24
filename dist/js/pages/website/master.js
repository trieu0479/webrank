var masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];
var domain = "";
if (location.href.indexOf("/rank/") > 1) {
    domain = location.href.substring(location.href.indexOf("/rank/") + 6);
} else {
    var localUrl = new URL(location.href);
    domain = localUrl.searchParams.get("domain");
}
domain = extractHostname(domain);
domain = domain.toLowerCase();

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
        var freeModule = [  "getAdvertisingSearchDetail", "getSimilarSites", "organicPositions","getTrafficSocialTableDetail","banckLinksOverview","getKeywords","getWebsiteGeography","getOrganicKeywordsBrandedTable"];
        var VIPModule = ["topBackLinks", "getTrafficDisplayAdvertisingWebsitesTable", "organicCompetitors", "getOrganicKeywordsNonBrandedTable", "organicPositions", "TopPaidKeyword", "MainCompetitor", "PaidPageTable", "PublicSherTable", "getTrafficDestinationAds","getTrafficSourcesSocial","getTrafficSocial","referringDomains","getDataZones","getDataContry","getSubdomains"];
        if (level == 'demo') {
            if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {
                $(".parent-" + boxWidgetName).addClass("locked");
                $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
            }
        } else if (level == 'free') {
            if (VIPModule.includes(boxWidgetName)) {
                $(".parent-" + boxWidgetName).addClass("locked");
                $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow btn-lift-vip" href="javascript:void(0)" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
            }
        }
    }

    function showBuyPackage() {
        Swal.fire({
            width: 700,
            padding: `0 2.25rem 2.25rem`,
            html: `<div class="pb-2"> 
            <div class="text-center mt-0 content-vcb">
                <div class="panel-heading mb-3 font-weight-bold font-16 border-bottom pb-3">Nâng cấp VIP bộ công cụ phân tích</div>
                <div class="font-gg fontsize-14 font-weight-500 mb-3 text-muted">
                    Tài khoản sẽ được nạp tiền tự động sau khi bạn chuyển khoản đến tài khoản
                </div>
                <div>
                    <div class="text-left font-gg font-15 font-weight-bold">
                        Chọn hình thức nạp tiền :
                    </div>
                    <div class="d-flex no-block justify-content-center mt-3">
                        <div>
                            <img data-name="vietcombank" class="choose-payments payments-vietcombank mb-2 border rounded cursor-pointer" src="https://www.chinhdaisteel.com/wp-content/uploads/2017/12/logo-ngan-hang-vietcombank-vector-1766-300x229-1.jpg" width="100px" height="100px"/>
                            <br/>
                            <span class="font-gg font-13 text-muted font-weight-500">VIETCOMBANK</span>
                        </div>
                        <div class="ml-5">
                            <img class="choose-payments payments-momo mb-2 border rounded cursor-pointer" src="https://vidientumomo.com/wp-content/uploads/2016/08/mzl.rfyfyjyu-300x300.jpg" width="100px" height="100px"/>
                            <br/>
                            <span class="font-gg font-13 text-muted font-weight-500">Ví MOMO</span>
                        </div>
                    </div>
                </div>
                <div class="vietcombank mt-4 d-none">
                    <div class="font-gg mb-1 pl-3">
                        <table class="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <td>Số tài khoản: <span class="font-gg font-weight-bold">0071003773058</span></td>
                                    <td>Chủ tài khoản: <span class="font-gg">LÊ ĐẶNG HẢI NAM</span></td>
                                </tr>
                                <tr>
                                    <td>Ngân hàng: <span class="font-gg ">Vietcombank</span></td>
                                    <td>Chi nhánh: <span class="font-gg ">VCB Quận 10 Tp.HCM</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="font-gg pt-2">
                        <div class="text-left mb-3">Bạn thực hiện chuyển khoản Số tiền <span class="text-danger font-gg font-weight-bold font-16 number-money">199,000<sup class="font-12 font-gg font-weight-none" style="top: -9px;">vnd</sup></span> với nội dung chuyển khoản như sau (nhớ copy toàn bộ)</div>
                        <div class="code-vietcombank w-50 w-md-30 m-auto text-info bg-white-2 px-3 py-2 font-weight-bold font-16" style="border: 1px #ccc dashed;"></div>
                    </div>
                </div>
                <div class="momo mt-4 d-none">
                    <div class="font-gg mb-1 mb-md-0 pl-3">
                        <table class="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <td>Số điện thoại: <span class="font-gg font-weight-bold">0984668068</span></td>
                                    <td>Chủ tài khoản: <span class="font-gg">LÊ ĐẶNG HẢI NAM</span></td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                    <div class="font-gg pt-2 pt-md-0">
                        <div class="mb-3 d-none d-md-block">
                            <img class="qr-code" src="https://chart.googleapis.com/chart?chs=100x100&cht=qr&chl=2|99|0984668068|LE%20DANG%20HAI%20NAM|tuilahainam@gmail.com|0|0|199000"/>
                            <br/>
                            <span class="font-gg font-14 text-muted font-weight-500">Quét mã để thanh toán</span>
                        </div>
                        <div class="text-left mb-3">Bạn thực hiện chuyển khoản Số tiền <span class="text-danger font-gg font-weight-bold font-16 number-money">199,000<sup class="font-12 font-gg font-weight-none" style="top: -9px;">vnd</sup></span> với nội dung chuyển khoản như sau (nhớ copy toàn bộ)</div>
                        <div class="code-momo align-self-center w-50 w-md-30 m-auto text-info bg-white-2 px-3 py-2 font-weight-bold font-16" style="border: 1px #ccc dashed;"></div>
                    </div>
                </div> 
                <div class="font-gg mt-4 text-center d-none">
                     <button class="btn btn-outline btn-ConfirmPayment btn-info btn-sm mr-3">Tôi đã chuyển khoản</button>
                     <button class="btn btn-default btn-WaitingPayment  btn-danger btn-sm">Tôi chuyển khoản sau</button>
                </div>
            </div> 
        </div>`,
            showConfirmButton: false,
            showCloseButton: true,
            onBeforeOpen: () => {
                $(".swal2-confirm").addClass("d-none");
                $.getJSON(`//localapi.trazk.com/fff/user.php?task=getMySupporter&userToken=${userToken}`).then(data => {
                    $(".swal2-actions").after(`<div class="info-support mt-4 text-left d-none justify-content-center mb-3">
                                                    <div class="d-none d-md-block">
                                                        <img class="rounded-circle" width="80px" height="80px" src="${data.data.data.avatar}">
                                                    </div>
                                                    <div class="ml-3 align-self-center">
                                                        <div class="mb-2 font-gg font-14 font-weight-500">Hỗ trợ viên: ${data.data.data.fullname}</div>
                                                        <div class="mb-2 font-gg font-14">Hỗ trợ qua di động/zalo: <a href="tel:${data.data.data.phone}" class="text-danger font-14 font-weight-500">${data.data.data.phone}</a></div>
                                                        <div class="font-gg font-14">Nếu bạn cần thêm hỗ trợ khác, vui lòng liên hệ hotline <span class="text-danger font-14 font-weight-500"><a href="tel:${data.data.data.hotline[0]}" class="text-danger font-14 font-weight-500">${data.data.data.hotline[0]}</a> - <a href="tel:${data.data.data.hotline[1]}" class="text-danger font-14 font-weight-500">${data.data.data.hotline[1]}</a></span></div>
                                                    </div>
                                                </div> `)
                })
            },
            onOpen: () => {
                $(".choose-payments").click(function() {
                    $(".choose-payments").removeClass("active");
                    $(this).addClass("active");
                    let name = $(this).data("name");
                    if (name == "vietcombank") {
                        $(".vietcombank").removeClass("d-none");
                        $(".momo").addClass("d-none");
                    } else {
                        $(".vietcombank").addClass("d-none");
                        $(".momo").removeClass("d-none");
                    }

                    $(".btn-ConfirmPayment").parent().removeClass("d-none");
                    $(".info-support").removeClass("d-none").addClass("d-flex");
                })

                let post = {};
                post.amount = "199000";
                post.tools = "phantich";
                post.userToken = userToken;
                let invoiceId = "";
                $.post(`//localapi.trazk.com/fff/payment.php?task=createInvoice&userToken=${userToken}`, post,function (data) {
                    data = JSON.parse(data); 
                    // $(".swal2-confirm").parent().removeClass("d-none");
                    invoiceId = data.invoiceId;
                    $(".code-vietcombank").text("FFF" +data.invoiceId);
                    $(".code-momo").text("FFF" + data.invoiceId);  
                })

                $(".btn-ConfirmPayment").click(function () {
                    var cid = $("#selectAdword").val();
                    var website = $("#selectWebsite").val();
                    $.get(
                        `//localapi.trazk.com/fff/user.php?task=checkPaymentVipTool&invoiceId=${invoiceId}&userToken=${userToken}&cid=${cid}&website=${website}`,
                        function (res) {
                            res = JSON.parse(res);
                            if (res && res.data.status == "error") {
                                Swal.showValidationMessage(
                                    `Nếu bạn đã chuyển khoản, vui lòng chờ trong 2 phút để hệ thống kiểm tra và hoàn tất giao dịch.  Sau đó hệ thống sẽ gửi email thông báo cho bạn.`);
                                $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                                // if (res.data.msg == "Waiting bank transation") {
                                //     Swal.showValidationMessage(
                                //         `Lỗi: Hệ thống chưa nhận được số tiền chuyển khoản của bạn.`);
                                //     $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                                // } else if (res.data.msg == "wrong invoice amount and income amount") {
                                //     Swal.showValidationMessage(
                                //         `Lỗi: Số tiền chuyển khoản khác với số tiền yêu cầu thanh toán. Vui lòng liên hệ hỗ trợ viên`
                                //     );
                                //     $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                                // } else if (res.data.msg == "invoice id error") {
                                //     Swal.showValidationMessage(`Lỗi: Mã chuyển khoản không hợp lệ`);
                                //     $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                                // } else {
                                //     Swal.showValidationMessage(
                                //         `Lỗi: Hệ thông chưa nhận được chuyển khoản hoặc CID bị lỗi`);
                                //     $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                                // }
                            } else {
                                window.location.href = "?view=user&action=payment-history&userToken=" + userToken + "&invoiceId=" + $("#invoiceId").val().trim();
                            }
                        })
                })
                $(".btn-WaitingPayment").click(function () {
                    var cid = $("#selectAdword").val();
                    var website = $("#selectWebsite").val();
                    $.getJSON(`//localapi.trazk.com/fff/payment.php?task=updateWaitingInvoice&invoiceId=${invoiceId}&userToken=${userToken}&cid=${cid}&website=${website}`, function (res) {
                        if (res && res.status == "error") {
                            Swal.showValidationMessage(
                                `Lỗi: Hệ thống không thấy xác nhận Invoice này`);
                            $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                        } else {
                            window.location.href = `https://admin.fff.com.vn/account/index.php?view=user&action=payment-history&tab=pending&userToken=${userToken}`;
                        }
                    });
                });


                $('[data-toggle="tooltip"]').tooltip();
            }
        })
    }

    // function showBuyPackage() {
    //     $.getJSON(`//localapi.trazk.com/fff/user.php?task=getMySupporter&userToken=${userToken}`, function(data) {
    //     console.log(data);
    //     Swal.fire({
    //         width: 700,
    //         padding: `0 2.25rem 2.25rem`,
    //         html: `<div>
    //         <div class="panel-heading mb-3 font-weight-bold font-16 border-bottom pb-3">Nâng cấp VIP bộ công cụ phân tích</div>

    //         <div class="text-left mt-4 content-vcb">
    //             <div class="text-left mb-3">Bạn thực hiện chuyển khoản Số tiền <span class="text-danger font-gg font-weight-bold font-16 number-money">199.000<sup class="font-12 font-gg font-weight-none" style="top: -9px;">vnd</sup></span> với nội dung chuyển khoản như sau (nhớ copy toàn bộ)</div>
    //             <div class="text-center mb-4"><div id="coppy-code" class="w-35 m-auto text-info bg-white-2 px-3 py-2 font-weight-bold font-16" style="border: 1px #ccc dashed;">FFF10006096</div></div>
    //             <div class="font-gg mb-1 pl-3">
    //                 <table class="table table-borderless table-sm">
    //                     <tbody><tr>
    //                         <td>Số tài khoản: <span class="text-danger font-gg font-weight-bold">0071003773058</span></td>
    //                         <td>Chủ tài khoản: <span class="font-gg">LÊ ĐẶNG HẢI NAM</span></td>
    //                     </tr>
    //                     <tr>
    //                         <td>Ngân hàng: <span class="font-gg ">Vietcombank</span></td>
    //                         <td>Chi nhánh: <span class="font-gg ">VCB Quận 10 Tp.HCM</span></td>
    //                     </tr>
    //                 </tbody></table>

    //             </div>

    //         </>
    //         <div class="font-gg mt-4 text-center">
    //                 <button class="btn btn-outline btn-ConfirmPayment btn-info btn-sm mr-3">Tôi đã chuyển khoản</button>
    //                 <input type="hidden" id="invoiceId" name="invoiceId" value="">
    //                 <button class="btn btn-default btn-WaitingPayment  btn-danger btn-sm">Tôi chuyển khoản sau</button>
    //         </div>
    //         <div class="mt-3 text-left d-flex justify-content-center">
    //             <div class="">
    //                 <img class="rounded-circle" width="80px" height="80px" src="${data.data.data.avatar}">
    //             </div>
    //             <div class="ml-3 align-self-center">
    //                 <div class="mb-2 font-gg font-14 font-weight-500">Hỗ trợ viên: ${data.data.data.fullname}</div>
    //                 <div class="mb-2 font-gg font-14">Hỗ trợ qua di động/zalo: <a href="tel:${data.data.data.phone}" class="text-danger font-14 font-weight-500">${data.data.data.phone}</a></div>
    //                 <div class="font-gg font-14">Nếu bạn cần thêm hỗ trợ khác, vui lòng liên hệ hotline <span class="text-danger font-14 font-weight-500"><a href="tel:0984 66 80 68" class="text-danger font-14 font-weight-500">0984 66 80 68</a> - <a href="tel:0901 47 48 46" class="text-danger font-14 font-weight-500">0901 47 48 46</a></span></div>
    //             </div>
    //         </div>
    //     </div>`,
    //         showConfirmButton: false,
    //         showCloseButton: true,
    //         onOpen: () => {
    //             $(".swal2-confirm").parent().addClass("d-none mt-2")
    //             var post = {};
    //             post.amount = "199000";
    //             post.tools = "phantich";
    //             post.userToken = userToken;

    //             $.post(`//localapi.trazk.com/fff/payment.php?task=createInvoice&userToken=${userToken}`, post,
    //                 function (data) {
    //                     data = JSON.parse(data);

    //                     $(".swal2-confirm").parent().removeClass("d-none");
    //                     $("#coppy-code").text("FFF" + data.invoiceId);
    //                     $("#invoiceId").val(data.invoiceId)


    //                 })
    //             $(".btn-ConfirmPayment").click(function () {
    //                 var cid = $("#selectAdword").val();
    //                 var website = $("#selectWebsite").val();
    //                 $.get(
    //                     `//localapi.trazk.com/fff/user.php?task=checkPaymentVipTool&invoiceId=${$("#invoiceId").val().trim()}&userToken=${userToken}&cid=${cid}&website=${website}`,
    //                     function (res) {
    //                         res = JSON.parse(res);
    //                         if (res && res.data.status == "error") {
    //                             if (res.data.msg == "Waiting bank transation") {
    //                                 Swal.showValidationMessage(
    //                                     `Lỗi: Hệ thống chưa nhận được số tiền chuyển khoản của bạn.`);
    //                                 $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
    //                             } else if (res.data.msg == "wrong invoice amount and income amount") {
    //                                 Swal.showValidationMessage(
    //                                     `Lỗi: Số tiền chuyển khoản khác với số tiền yêu cầu thanh toán. Vui lòng liên hệ hỗ trợ viên`
    //                                 );
    //                                 $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
    //                             } else if (res.data.msg == "invoice id error") {
    //                                 Swal.showValidationMessage(`Lỗi: Mã chuyển khoản không hợp lệ`);
    //                                 $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
    //                             } else {
    //                                 Swal.showValidationMessage(
    //                                     `Lỗi: Hệ thông chưa nhận được chuyển khoản hoặc CID bị lỗi`);
    //                                 $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
    //                             }
    //                         } else {
    //                             window.location.href = "?view=user&action=payment-history&userToken=" + userToken + "&invoiceId=" + $("#invoiceId").val().trim();
    //                         }
    //                     })
    //             })
    //             $(".btn-WaitingPayment").click(function () {
    //                 var cid = $("#selectAdword").val();
    //                 var website = $("#selectWebsite").val();
    //                 $.getJSON(`//localapi.trazk.com/fff/payment.php?task=updateWaitingInvoice&invoiceId=${$("#invoiceId").val().trim()}&userToken=${userToken}&cid=${cid}&website=${website}`, function (res) {
    //                     if (res && res.status == "error") {
    //                         Swal.showValidationMessage(
    //                             `Lỗi: Hệ thống không thấy xác nhận Invoice này`);
    //                         $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
    //                     } else {
    //                         window.location.href = `https://admin.fff.com.vn/account/index.php?view=user&action=payment-history&tab=pending&userToken=${userToken}`;
    //                     }
    //                 });
    //             });


    //             $('[data-toggle="tooltip"]').tooltip();

    //         }
    //     })
    // })

    // }


    $("body").on("click", ".btn-lift-vip", function () {
        showBuyPackage();

    })
});