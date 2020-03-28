const apicla = async (task, url, from = startDate, to = endDate) => {
    try {
        return await $.ajax({
            url: url,
            type: "GET"
        }).then(data => {
            if (typeof data == "string")
                data = JSON.parse(data);

            switch (task) {
                case "getLastIp":
                    getLastIp(task, data);
                    break;
                case "getReportTotalIpStatus":
                    getReportTotalIpStatus(task, data);
                    break;
                case "getReportIpBlockByDate":
                    return getReportIpBlockByDate(task, data, from, to);
                    break;
                case "getReportIpClickByDate":
                    return getReportIpClickByDate(task, data);
                    break;
                case "getCampaignInvalidClicksReport":
                    return getCampaignInvalidClicksReport(task, data);
                    break;
                case "getNetworkInvalidClicksReport":
                    return getNetworkInvalidClicksReport(task, data);
                    break;
                case "filterLastIP":
                    filterLastIP(task, data, device, city);
                    break;
                case "getReportIpBlockByDevice":
                    return getReportIpBlockByDevice(task, data);
                    break;
                case "getAllCampaign":
                    getAllCampaign(task, data);
                    break;
                case "getClicksReport":
                    return getClicksReport(task, data);
                    break;
                case "getCostPerClickReport":
                    return getCostPerClickReport(task, data);
                    break;
                case "getInvalidClicksReport":
                    return getInvalidClicksReport(task, data);
                    break;
                case "getCostReport":
                    return getCostReport(task, data);
                    break;
                case "getReportIpBlockByDateLine":
                    return getReportIpBlockByDateLine(task, data);
                    break;
                case "getCostSavingByDate":
                    return getCostSavingByDate(task, data, from, to);
                    break;
                case "getDayClicksAndInvalidClicksReport":
                    return getDayClicksAndInvalidClicksReport(task, data);
                    break;
                case "getReportIpBlockByLocation":
                    return getReportIpBlockByLocation(task, data);
                    break;
                case "getConfigFraudClick":
                    getConfigFraudClick(task, data);
                    break;
                case "getCampaignsAndTotalBlockedIp":
                    getCampaignsAndTotalBlockedIp(task, data);
                    break;
                default:
                    break;
            }
        })
    } catch (error) {
        console.error(error);
        console.log(task);
    }

}

const getLastIp = async (task, data) => {

    if (data.data.history) {
        let temp = "";
        data.data.history.forEach(ele => {

            let check = "";

            if (ele.is_virtual_click == 0)
                check = `<span class="bg-success text-white p-1 font-10">Hợp Lệ</span>`;
            else if (ele.is_virtual_click == -1)
                check = `<i class="fas fa-exclamation-circle" style="font-size: 16px; color: #FD584E" title="Click ảo"></i>`;
            else
                check = `<i class="fas fa-question-circle text-warning" style="font-size: 16px" title="Nghi vấn"></i>`;

            let nameOS = "";

            (ele.os.indexOf("Windows") == 0) ? nameOS = `<span class="font-gg" style="color: #25B4EA; font-size: 13px">${ele.os}</span>`:
                (ele.os.indexOf("Android") == 0) ? nameOS = `<span class="font-gg" style="color: #5EC228; font-size: 13px">${ele.os}</span>` :
                (ele.os.indexOf("Unknown OS") == 0) ? nameOS = `<span class="font-gg text-muted" style= font-size: 13px">${ele.os}</span>` :
                nameOS = `<span class="font-gg" style="color: #BFBFBF; font-size: 13px">${ele.os}</span>`;


            (ele.network_name == "VNPT") ? ele.network_name = `<span class="font-gg" style="color: #0063AE; font-weight: bold; font-size: 10px">VNPT</span>`:
                (ele.network_name == "VIETTEL") ? ele.network_name = `<span class="font-gg" style="color: #008D88; font-weight: bold; font-size: 10px">VIETTEL</span>` :
                (ele.network_name == "FPT") ? ele.network_name = `<span class="font-gg" style="color: #EC6D21; font-weight: bold; font-size: 10px">FPT</span>` :
                (ele.network_name == "MOBIFONE") ? ele.network_name = `<span class="font-gg" style="color: #E71B23; font-weight: bold; font-size: 10px">MOBIFONE</span>` :
                (ele.network_name == "VIETNAMMOBILE") ? ele.network_name = `<span class="font-gg" style="color: #F85E00; font-weight: bold; font-size: 10px">VIETNAMMOBILE</span>` :
                (ele.network_name == "UNKNOWN") ? ele.network_name = `<span class="font-gg text-muted" style=" font-weight: bold; font-size: 10px">UNKNOWN</span>` : ele.network_name = `<span class="font-gg" style="color: #009DDE; font-weight: bold; font-size: 10px">VINAPHONE</span>`;

            let nameType = "";
            (ele.matchtype == "Rộng") ? nameType = `<span class="font-gg text-danger" style="font-size: 11px; font-weight: bold">${ele.matchtype}</span>`:
                (ele.matchtype == "Cụm từ") ? nameType = `<span class="font-gg text-info" style="font-size: 11px; font-weight: bold">${ele.matchtype}</span>` :
                (ele.matchtype == "Chính xác") ? nameType = `<span class="font-gg text-success" style="font-size: 11px; font-weight: bold">${ele.matchtype}</span>` :
                nameType = "-";

            (ele.ads_network == undefined) ? ele.ads_network = "-": ele.ads_network;
            (ele.keyword == undefined) ? ele.keyword = "-": ele.keyword;
            (ele.matchtype == undefined) ? ele.matchtype = "-": ele.matchtype;
            (ele.ads_network == undefined) ? ele.ads_network = "-": ele.ads_network;

            // <img class="mr-1" src="https://image.flaticon.com/icons/svg/206/206632.svg" width="25px"/><br/> 

            temp += `<tr>
                        <td class="font-gg" style="padding-left: 26px">${moment(ele.created).format("h:mm DD/MM")}</td>
                        <td class="font-gg text-info" style="vertical-align: middle;">
                            <a data-ip="${ele.ip}" class="ip font-13 font-gg" href="javascript:void(0)">${ele.ip}</a>
                        </td>
                        <td class="font-gg" style="vertical-align: middle;">${ele.click}</td>
                        <td>
                            <label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
                                <input data-ip="${ele.ip}" type="checkbox" name="block-ip">
                                <span class="slider rounds"></span>
                            </label>  
                        </td>
                        <td class="font-gg" style="vertical-align: middle;">${check}</td> 
                        <td class="font-gg font-12" style="vertical-align: middle;">${ele.city}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${nameOS}</td>
                        <td style="vertical-align: middle;" class="font-gg font-12">${ele.browser}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${ele.network_name}</td>
                        <td style="vertical-align: middle;">${(ele.network_connection_type == "3G") ? `<img src="./assets/images/3G.png"/>` : `<img src="./assets/images/WIFI.png" class="bg-white" width="20px"/>`}</td>
                        <td class="font-gg font-12">${ele.ads_network}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${ele.keyword}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${nameType}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${(ele.page == undefined) ? "-" : ele.page}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;padding-right: 26px">${(ele.position == undefined) ? "-" : ele.position}</td> 
                    </tr>`
        });

        $("#getLastIp").html(temp);

        $(".ip").click(async function () {

            let ip = $(this).data("ip");
            window.location.href = `?cid=${cid}&action=detail-report&ip=${ip}`;
        })

        $(`input[type="checkbox"][name=block-ip]`).click(async function () {

            let ip = $(this).data("ip");

            if ($(this).prop("checked")) {

                $("#toast-container").removeClass("toast-top-right").addClass("toast-bottom-right");

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

                // let content = `<table class="table table-striped mt-3">
                //             <thead>
                //                 <tr>
                //                     <th scope="col" class="col-6 text-left font-gg font-12 font-weight-bold">STT</th>
                //                     <th scope="col" class="col-6 text-right font-gg font-12 font-weight-bold">Tên Chiến Dịch</th> 
                //                 </tr>
                //             </thead>
                //             <tbody class="scrollbar" style="height:150px">`;
                // let sumcampaign = 0;
                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=blockIpToAllCampaigns&userToken=${userToken}&ip=${ip}&cid=${cid}&blockType=CLICKMANUALLY`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    // data.data.forEach((ele, index) => {
                    //     sumcampaign++;
                    //     content += ` <tr>
                    //                     <td class="col-6 text-left font-gg font-13">${sumcampaign}</td>
                    //                     <td class="col-6 text-right pr-4 font-gg font-13">${ele.campaignName}</td> 
                    //                 </tr>`
                    // })

                    // content += `</tbody></table>`
                })

                // Swal.fire({
                //     type: "success",
                //     title: 'Hoàn tất chặn IP.',
                //     html: `
                //         <div class="font-gg font-weight-bold text-muted">Chặn thành công ip <span class="text-info font-gg font-weight-bold">${ip}</span>
                //             vào tổng <span class="text-danger font-gg font-weight-bold">${sumcampaign}</span> chiến dịch: 
                //         </div>
                //         <div class="m-auto" style="width: 365px">${content}</div>
                //     `,
                //     showCloseButton: true,
                //     showCancelButton: false,
                //     // showConfirmButton: false,
                //     confirmButtonText: 'OK',
                //     focusConfirm: false,
                //     padding: "3em",
                //     width: "600px",
                //     position: "top",
                //     onOpen: () => {
                //         $(".scrollbar").perfectScrollbar();
                //     },
                //     preConfirm: () => {}
                // })

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

                $("#toast-container").removeClass("toast-top-right").addClass("toast-bottom-right"); 

                Command: toastr["info"]("Đang gửi yêu cầu mở chặn, vui lòng chờ.")

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
                }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang gửi yêu cầu mở chặn, vui lòng đợi.</span>`)


                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
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


        await $(`#${task}`).removeClass("is-loading");
    } else {
        await $(`#${task}`).removeClass("is-loading");
    }

}

const filterLastIP = async (task, data, device, city) => {
    // console.log(device);
    // console.log(city);

    let temp = "";
    data.data.forEach(ele => {

        let check = "";

        if (ele.is_virtual_click == 0)
            check = `<i class="fas fa-check-circle text-success" style="font-size: 16px" title="Hợp lệ"></i>`;
        else if (ele.is_virtual_click == -1)
            check = `<i class="fas fa-exclamation-circle" style="font-size: 16px; color: #FD584E" title="Click ảo"></i>`;
        else
            check = `<i class="fas fa-question-circle text-warning" style="font-size: 16px" title="Nghi vấn"></i>`;

        let nameOS = "";

        (ele.os.indexOf("Windows") == 0) ? nameOS = `<span class="font-gg" style="color: #25B4EA; font-size: 13px">${ele.os}</span>`:
            (ele.os.indexOf("Android") == 0) ? nameOS = `<span class="font-gg" style="color: #5EC228; font-size: 13px">${ele.os}</span>` :
            (ele.os.indexOf("Unknown OS") == 0) ? nameOS = `<span class="font-gg text-muted" style= font-size: 13px">${ele.os}</span>` :
            nameOS = `<span class="font-gg" style="color: #BFBFBF; font-size: 13px">${ele.os}</span>`;


        (ele.network_name == "VNPT") ? ele.network_name = `<span class="font-gg" style="color: #0063AE; font-weight: bold; font-size: 10px">VNPT</span>`:
            (ele.network_name == "VIETTEL") ? ele.network_name = `<span class="font-gg" style="color: #008D88; font-weight: bold; font-size: 10px">VIETTEL</span>` :
            (ele.network_name == "FPT") ? ele.network_name = `<span class="font-gg" style="color: #EC6D21; font-weight: bold; font-size: 10px">FPT</span>` :
            (ele.network_name == "MOBIFONE") ? ele.network_name = `<span class="font-gg" style="color: #E71B23; font-weight: bold; font-size: 10px">MOBIFONE</span>` :
            (ele.network_name == "VIETNAMMOBILE") ? ele.network_name = `<span class="font-gg" style="color: #F85E00; font-weight: bold; font-size: 10px">VIETNAMMOBILE</span>` :
            (ele.network_name == "UNKNOWN") ? ele.network_name = `<span class="font-gg text-muted" style=" font-weight: bold; font-size: 10px">UNKNOWN</span>` : ele.network_name = `<span class="font-gg" style="color: #009DDE; font-weight: bold; font-size: 10px">VINAPHONE</span>`;

        let nameType = "";
        (ele.matchtype == "Rộng") ? nameType = `<span class="font-gg text-danger" style="font-size: 11px; font-weight: bold">${ele.matchtype}</span>`:
            (ele.matchtype == "Cụm từ") ? nameType = `<span class="font-gg text-info" style="font-size: 11px; font-weight: bold">${ele.matchtype}</span>` :
            (ele.matchtype == "Chính xác") ? nameType = `<span class="font-gg text-success" style="font-size: 11px; font-weight: bold">${ele.matchtype}</span>` :
            nameType = "-";

        (ele.ads_network == undefined) ? ele.ads_network = "-": ele.ads_network;
        (ele.keyword == undefined) ? ele.keyword = "-": ele.keyword;
        (ele.matchtype == undefined) ? ele.matchtype = "-": ele.matchtype;
        (ele.ads_network == undefined) ? ele.ads_network = "-": ele.ads_network;

        // <img class="mr-1" src="https://image.flaticon.com/icons/svg/206/206632.svg" width="25px"/><br/>  

        if (ele.os.indexOf(device) == 0 && ele.city.toUpperCase().replace(/[\' ']/g, "").indexOf(city) == 0) {

            temp += `<tr>
                        <td class="font-gg" style="padding-left: 26px">${moment(ele.created).format("h:mm DD/MM")}</td>
                        <td class="font-gg text-info" style="vertical-align: middle;">${ele.ip}</td>
                        <td class="font-gg" style="vertical-align: middle;">${ele.click}</td>
                        <td>
                            <label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
                                <input type="checkbox">
                                <span class="slider rounds"></span>
                            </label>  
                        </td>
                        <td class="font-gg" style="vertical-align: middle;padding: 12px;">${check}</td> 
                        <td class="font-gg font-12" style="vertical-align: middle;">${ele.city}</td>
                        <td class="font-gg" style="vertical-align: middle;">${nameOS}</td>
                        <td style="vertical-align: middle;" class="font-gg font-12">${ele.browser}</td>
                        <td class="font-gg" style="vertical-align: middle;">${ele.network_name}</td>
                        <td style="vertical-align: middle;">${(ele.network_connection_type == "3G") ? `<img src="./assets/images/3G.png"/>` : `<img src="./assets/images/WIFI.png" class="bg-white" width="20px"/>`}</td>
                        <td class="font-gg font-12">${ele.ads_network}</td>
                        <td class="font-gg font-12" style="vertical-align: middle;">${ele.keyword}</td>
                        <td class="font-gg" style="vertical-align: middle;">${nameType}</td>
                        <td class="font-gg" style="vertical-align: middle;">${(ele.page == undefined) ? "-" : ele.page}</td>
                        <td class="font-gg" style="vertical-align: middle;padding-right: 26px">${(ele.position == undefined) ? "-" : ele.position}</td> 
                    </tr>`
        } else {
            // if(ele.city.indexOf(city) == 0) {

            //     temp += `<tr>
            //                 <td class="font-gg">${moment(ele.created).format("h:mm DD/MM")}</td>
            //                 <td class="font-gg text-info" style="line-height: 3;">${ele.ip}</td>
            //                 <td class="font-gg" style="line-height: 3;">${ele.click}</td>
            //                 <td>
            //                     <label style="line-height: 10px;" class="switch mb-0" title="Click để chặn">
            //                         <input type="checkbox">
            //                         <span class="slider rounds"></span>
            //                     </label>  
            //                 </td>
            //                 <td class="font-gg" style="line-height: 3;padding-left: 15px;">${check}</td> 
            //                 ${(ele.city.length < 11) ? `<td class="font-gg" style="line-height: 3;">${ele.city}</td>` : `<td class="font-gg">${ele.city}</td>`}
            //                 ${(ele.os.length < 11 && ele.os != "Unknown OS") ? `<td class="font-gg" style="line-height: 3;">${nameOS}</td>` : `<td class="font-gg">${nameOS}</td>`}
            //                 ${(ele.browser.length < 13) ? `<td style="line-height: 3;" class="font-gg">${ele.browser}</td>` : `<td class="font-gg">${ele.browser}</td>`}
            //                 <td class="font-gg" style="line-height: 3;">${ele.network_name}</td>
            //                 <td style="line-height: 3;">${(ele.network_connection_type == "3G") ? `<img src="./assets/images/3G.png"/>` : `<img src="./assets/images/WIFI.png" class="bg-white" width="20px"/>`}</td>
            //                 ${(ele.ads_network.length < 10) ? `<td class="font-gg">${ele.ads_network}</td>` : `<td class="font-gg">${ele.ads_network}</td>`} 
            //                 ${(ele.keyword.length < 10) ? `<td class="font-gg" style="line-height: 3;">${ele.keyword}</td>` : `<td class="font-gg">${ele.keyword}</td>`} 
            //                 ${(ele.matchtype.length < 5) ? `<td class="font-gg" style="line-height: 3;">${nameType}</td>` : `<td class="font-gg">${nameType}</td>`}
            //                 <td class="font-gg" style="line-height: 3;">${(ele.page == undefined) ? "-" : ele.page}</td>
            //                 <td class="font-gg" style="line-height: 3;">${(ele.position == undefined) ? "-" : ele.position}</td> 
            //             </tr>`
            // } else {
            //     // console.log("null");
            // }
        }

    });

    if (temp == "")
        temp = `<tr><td colspan="15">Không tìm thấy dữ liệu<td></tr>`

    $("#getLastIp").html(temp);

    await $(`#getLastIp`).removeClass("is-loading");
}

const getReportTotalIpStatus = async (task, data) => {
    if (data.data) {

        let {
            blockip,
            pendingip,
            whiteip
        } = data.data;
        $(`#${task} .getReportTotalIpStatus-WhiteIP`).text(whiteip);
        $(`#${task} .getReportTotalIpStatus-BlockIP`).text(blockip);
        $(`#${task} .getReportTotalIpStatus-PendingIP`).text(pendingip);

        $(`#${task} .getReportTotalIpStatus-PercentWhiteIP`).html(numeral(whiteip / (blockip + pendingip + whiteip)).format("0%") + " của tổng số " + (blockip + pendingip + whiteip) + " IPs");
        $(`#${task} .getReportTotalIpStatus-PercentBlockIP`).html(numeral(blockip / (blockip + pendingip + whiteip)).format("0%") + " của tổng số " + (blockip + pendingip + whiteip) + " IPs");
        $(`#${task} .getReportTotalIpStatus-PercentPendingIP`).html(numeral(pendingip / (blockip + pendingip + whiteip)).format("0%") + " của tổng số " + (blockip + pendingip + whiteip) + " IPs");

        await $(`#${task} .getReportTotalIpStatus-WhiteIP`).parent().parent().removeClass("is-loading")
        await $(`#${task} .getReportTotalIpStatus-BlockIP`).parent().parent().removeClass("is-loading")
        await $(`#${task} .getReportTotalIpStatus-PendingIP`).parent().parent().removeClass("is-loading")
    } else {
        await $(`#${task} .getReportTotalIpStatus-WhiteIP`).parent().parent().addClass("empty-state")
    }

}

const getReportIpBlockByDate = async (task, data, from, to) => {

    let dataClick = [];
    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getReportIpClickByDate&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`,
        type: "GET"
    }).then(data => {
        dataClick = JSON.parse(data);
    })


    let dataChartBlock = {
        keys: [],
        values: [],
    }

    let dataChartClick = {
        keys: [],
        values: [],
    }
    let valuesClick = dataClick.data;
    let valuesBlock = data.data;

    for (x in valuesClick) {
        dataChartClick.keys.push(x);
        dataChartClick.values.push(valuesClick[x]);
    }

    for (x in valuesBlock) {
        dataChartBlock.keys.push(x);
        dataChartBlock.values.push(valuesBlock[x]);
    }

    let ele = document.getElementById("getReportIpBlockByDate");

    let myChart = echarts.init(ele, "light");
    let option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(93,120,255,1)',
            borderWidth: 1,
            extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
            formatter: params => {
                // console.log(params);
                let {
                    name
                } = params[0];
                let detail = "";
                let format = "";
                params.forEach(p => {
                    let {
                        marker,
                        color,
                        seriesName,
                        value
                    } = p;

                    value = numeral(value).format(format);


                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">: ${value}</span>
                    <br/>`
                });

                name = moment(name).format(`DD-MM-YYYY`);
                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
            <div class="text-dark pt-2">${detail}`;
            }
        },
        legend: {
            data: ["Số IP Click", "Số IP Đã Chặn"],
            top: "7%",
            textStyle: {
                fontFamily: 'Arial'
            },
            
            // bottom: "20%"
        },
        grid: {
            right: "5%",
            left: "7%"
        },
        xAxis: {
            type: "category",
            data: dataChartClick.keys,
            axisLine: {
                lineStyle: {
                    color: "#ccc"
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#999"
                },
                fontFamily: 'Arial',
                formatter: (value, index) => {
                    return moment(value).format('DD-MM');
                },
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#ccc",
                    fontSize:"12",
                },
                fontFamily: 'Arial',
                formatter: (value, index) => (value = numeral(value).format("0,0"))
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,0,0,0.1)'
                }
            },
        },
        series: [{
                name: 'Số IP Click',
                data: dataChartClick.values,
                itemStyle: {
                    color: '#2494d8',
                },
                type: "bar",
            },
            {
                name: 'Số IP Đã Chặn',
                data: dataChartBlock.values,
                itemStyle: {
                    color: '#cf638b',
                },
                type: "bar",
            },
        ]
    };
    myChart.setOption(option);
    new ResizeSensor($(`#getReportIpBlockByDate`), function () {
        myChart.resize();
    });

    await $(`#${task}`).removeClass("is-loading");
    return myChart;
}

const getReportIpClickByDate = async (task, data) => {
    if (data.data) {

        let values = data.data;
        let dataChart = {
            keys: [],
            values: []
        }

        let sum = 0;
        let check = 0;

        for (x in values) {
            let val = values[x];
            dataChart.keys.push(x);
            dataChart.values.push(val);
            sum += parseInt(val);
            if (val == 0) {
                check++;
            }
        }

        if (check != dataChart.values.length) {
            $("#getReportIpClickByDate-Total").text(numeral(sum).format("0,0"))

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let detail = "";
                        params.forEach((p, i) => {
                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = p;
                            name = moment(name).format(`DD-MM-YYYY`);
                            detail += `${marker} Số IP Click <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0")}</span>
                                            <br/>`
                        })

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                    <div class="text-dark pt-1">${detail}</div>`;

                    }
                },
                grid: {
                    right: "1%",
                    left: "0%",
                    bottom: "3%",
                    top: "20%"
                },
                xAxis: {
                    type: "category",
                    show: false,
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }, ],
                series: [{
                        type: 'line',
                        symbol: "none",
                        smooth: true,
                        data: dataChart.values,
                        color: "rgb(60, 178, 239)",
                        areaStyle: {
                            color: "rgba(60, 178, 239,0.5)"
                        },
                    },

                ]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });

            await $(`#${task}`).parent().removeClass("is-loading");

            return myChart;
        } else {
            await $(`#${task}`).parent().removeClass("is-loading");
            await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
            await $(`#${task}`).parent().before(`
            <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }
    } else {
        await $(`#${task}`).parent().removeClass("is-loading");
        await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
        await $(`#${task}`).parent().before(`
        <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getReportIpBlockByDateLine = async (task, data) => {
    if (data.data) {
        let values = data.data;
        let dataChart = {
            keys: [],
            values: []
        }

        let sum = 0;
        let check = 0;

        for (x in values) {
            let val = values[x];
            dataChart.keys.push(x);
            dataChart.values.push(val);
            sum += parseInt(val);
            if (val == 0) {
                check++;
            }
        }

        if (check != dataChart.values.length) {

            $("#getReportIpBlockByDateLine-Total").text(numeral(sum).format("0,0"))

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let detail = "";
                        params.forEach((p, i) => {
                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = p;
                            name = moment(name).format(`DD-MM-YYYY`);
                            detail += `${marker} Số IP Đã Chặn <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0")}</span>
                                            <br/>`
                        })

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                    <div class="text-dark pt-1">${detail}</div>`;

                    }
                },
                grid: {
                    right: "1%",
                    left: "0%",
                    bottom: "3%",
                    top: "20%"
                },
                xAxis: {
                    type: "category",
                    show: false,
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }, ],
                series: [{
                        type: 'line',
                        symbol: "none",
                        smooth: true,
                        data: dataChart.values,
                        color: "rgb(255, 192, 239)",
                        areaStyle: {
                            color: "rgba(255, 192, 239,0.5)",
                        },
                    },

                ]
            };
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });

            await $(`#${task}`).parent().removeClass("is-loading");

            return myChart;
        } else {
            await $(`#${task}`).parent().removeClass("is-loading");
            await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
            await $(`#${task}`).parent().before(`
            <div class="img-3f text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }

    } else {
        await $(`#${task}`).parent().removeClass("is-loading");
        await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
        await $(`#${task}`).parent().before(`
        <div class="img-3f text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getCampaignInvalidClicksReport = async (task, data) => {
  
    if (data.data) {

        let dataChart = [];
        let dataLegend = [];
        data.data.forEach((ele) => {
            if (ele.InvalidClicks != "0") {
                let newData = {
                    name: ele.name,
                    value: ele.InvalidClicks.replace(/[\.]/g, "")
                }

                dataLegend.push(ele.name);
                dataChart.push(newData);
            }
        });

        if (dataChart.length != 0) { 
            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "item",
                    position: "right",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            marker,
                            value,
                            name,
                            percent
                        } = params;

                        // name = moment(name).format('DD MMMM YYYY');

                        value = numeral(value).format('0,0');

                        return `
                    <div class="text-dark pt-2">
                        <span style="font-weight:bold">${marker} ${name}</span>
                        <br/> 
                    </div>
                    <div class="text-muted text-capitalize border-top pt-1">Nhấp chuột không hợp lệ: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                    }
                },
                legend: {
                    top: "15%",
                    left: '55%',
                    data: dataLegend,
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                        lineHeight: 16
                    },
                    type: 'scroll',
                    orient: 'vertical'
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["25%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    fontFamily: 'Arial',
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5,
                                    show: false,
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChart
                }]
            };

            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart.name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#${task}`).removeClass("is-loading");
            return myChart;

        } else {
            await $(`#${task}`).removeClass("is-loading");
            await $(`#${task}`).html(`
            <div class="text-center">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="150px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }
    } else {
        await $(`#${task}`).removeClass("is-loading"); 
        await $(`#${task}`).html(` 
            <div class="text-center">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="200px"/>
            <div class="font-gg text-info font-16 font-weight-bold">
                Không đủ dữ liệu
            </div>
            </div> `);

        return null;
    }
}

const getNetworkInvalidClicksReport = async (task, data) => {

    if (data.data) {

        let dataChart = [];
        let dataLegend = [];
        data.data.forEach(ele => {
            if (ele.InvalidClicks != "0") {
                let newData = {
                    name: ele.name,
                    value: ele.InvalidClicks.replace(/[\.]/g, "")
                }
                dataLegend.push(ele.name);
                dataChart.push(newData);
            }
        });

        if (dataChart.length != 0) {

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "item",
                    position: "right",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            marker,
                            value,
                            name,
                            percent
                        } = params;

                        // name = moment(name).format('DD MMMM YYYY');

                        value = numeral(value).format('0,0');

                        return `
                    <div class="text-dark pt-2">
                        <span style="font-weight:bold">${marker} ${name}</span>
                        <br/> 
                    </div>
                    <div class="text-muted text-capitalize border-top pt-1">Nhấp chuột không hợp lệ: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                    }
                },
                legend: {
                    top: "15%",
                    left: '55%',
                    data: dataLegend,
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                        lineHeight: 16
                    },
                    type: 'scroll',
                    orient: 'vertical'
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 10,
                    radius: ["50%", "80%"],
                    center: ["25%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    fontFamily: 'Arial',
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5,
                                    show: false,
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChart
                }]
            };

            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart.name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#${task}`).removeClass("is-loading");
            return myChart;
        } else {
            await $(`#${task}`).removeClass("is-loading");
            await $(`#${task}`).text("").html(`
            <div class="text-center">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="200px"/>
                <div class="font-gg text-info font-16 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }
    } else {
        await $(`#${task}`).removeClass("is-loading");
        await $(`#${task}`).text("").html(`
        <div class="text-center">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="200px"/>
            <div class="font-gg text-info font-16 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getReportIpBlockByDevice = async (task, data) => {
    
    if (data.data.length != 0) {

        let dataChart = [];
        let legend = [];

        for (let i in data.data) {
            let temp = {
                name: i,
                value: data.data[i]
            }

            legend.push(i);
            dataChart.push(temp);
        }

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                position: "right",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1"> Số IP đã chặn : <span style="font-weight:bold">${value} </span></div>`; //(${percent}%)
                }
            },
            legend: {
                top: "15%",
                left: '65%',
                data: legend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 10,
                radius: ["50%", "80%"],
                center: ["35%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 5,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 46,
                        }
                    }
                },
                data: dataChart
            }]
        };

        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });

        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function (params) {
                if (params.name == dataChart.name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function (params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);

        await $(`#${task}`).removeClass("is-loading");
        return myChart;
    } else {
        await $(`#${task}`).removeClass("is-loading");
        await $(`#${task}`).text("").html(`
            <div class="text-center">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="200px"/>
                <div class="font-gg text-info font-16 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

        return null;
    }
}

const getReportIpBlockByLocation = async (task, data) => {
    if (data.data.length != 0) {
        let dataChart = [];
        let legend = [];

        for (let i in data.data) {
            let temp = {
                name: i,
                value: data.data[i]
            }

            legend.push(i);
            dataChart.push(temp);
        }


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                position: "right",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1"> Số IP đã chặn : <span style="font-weight:bold">${value} </span></div>`; //(${percent}%)
                }
            },
            legend: {
                top: "15%",
                left: '65%',
                data: legend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 10,
                radius: ["50%", "80%"],
                center: ["35%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 5,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 46,
                        }
                    }
                },
                data: dataChart
            }]
        };

        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });

        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function (params) {
                if (params.name == dataChart.name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function (params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);

        await $(`#${task}`).removeClass("is-loading");
        return myChart;
    } else {
        await $(`#${task}`).removeClass("is-loading");
        await $(`#${task}`).text("").html(`
            <div class="text-center">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="200px"/>
                <div class="font-gg text-info font-16 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);
        return null;
    }
}

const getClicksReport = async (task, data) => {
    if (data.data) {
        
        let values = data.data;
        let dataChart = {
            keys: [],
            values: []
        }

        let sum = 0;
        check = 0;

        values.forEach(ele => {
            dataChart.keys.push(ele.day);
            dataChart.values.push(ele.Clicks.replace(/[\.|\,]/g, ""));
            sum += parseInt(ele.Clicks.replace(/[\.|\,]/g, ""));
            if (ele.Clicks == "0") {
                check++;
            }
        });

        if (check != values.length) {

            $("#getClicksReport-Total").text(numeral(sum).format("0,0"))

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];

                        let detail = "";
                        params.forEach((p, i) => {
                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = p;

                            detail += `${marker} Số Click <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0")}</span>
                                            <br/>`
                        })

                        name = moment(name.replace(",", "")).format(`DD-MM-YYYY`);
                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                    <div class="text-dark pt-1">${detail}</div>`;

                    }
                },
                grid: {
                    right: "1%",
                    left: "0%",
                    bottom: "3%",
                    top: "20%"
                },
                xAxis: {
                    type: "category",
                    show: false,
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }, ],
                series: [{
                        type: 'line',
                        symbol: "none",
                        smooth: true,
                        data: dataChart.values,
                        color: "rgb(60, 178, 239)",
                        areaStyle: {
                            color: "rgba(60, 178, 239,0.5)"
                        },
                    },

                ]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });

            await $(`#${task}`).parent().removeClass("is-loading");
            return myChart;
        } else {
            await $(`#${task}`).parent().removeClass("is-loading");
            await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
            await $(`#${task}`).parent().before(`
            <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }
    } else {
        await $(`#${task}`).parent().removeClass("is-loading");
        await $(`#${task}`).parent().text("").html(`
        <div class="m-auto">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getCostPerClickReport = async (task, data) => {

    if (data.data) {
        let values = data.data;

        let dataChart = {
            keys: [],
            values: []
        }

        let sum = 0;

        values.forEach(ele => {
            dataChart.keys.push(ele.day);
            let cost = parseInt(ele.CostPerClick.replace(/[\$|\₫|\,|\.]/g, ""));
            dataChart.values.push(cost);
            sum += cost
        });

        $("#getCostPerClickReport-Total").text(numeral(sum).format("0,0") + " ₫");

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "axis",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        name
                    } = params[0];
                    let detail = "";
                    params.forEach((p, i) => {
                        let {
                            marker,
                            color,
                            seriesName,
                            value
                        } = p;
                        name = moment(name).format(`DD-MM-YYYY`);
                        detail += `${marker} CPC trung bình <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0") + " ₫"}</span>
                                        <br/>`
                    })

                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                <div class="text-dark pt-1">${detail}</div>`;

                }
            },
            grid: {
                right: "1%",
                left: "0%",
                bottom: "3%",
                top: "20%"
            },
            xAxis: {
                type: "category",
                show: false,
                boundaryGap: false,
                data: dataChart.keys,
                axisLine: {
                    lineStyle: {
                        color: "#ccc"
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisPointer: {
                    lineStyle: {
                        color: "rgb(25, 123, 251)",
                        type: "dashed"
                    }
                }
            },
            yAxis: [{
                type: 'value',
                show: false,
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            }, ],
            series: [{
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: dataChart.values,
                    color: "rgb(255, 174, 139)",
                    areaStyle: {
                        color: "rgba(255, 174, 139,0.5)",
                    },
                },

            ]
        };
        myChart.setOption(option);

        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).parent().removeClass("is-loading");
        return myChart;
    } else {
        await $(`#${task}`).parent().removeClass("is-loading");
    }
}

const getCostReport = async (task, data) => { 
    if (data.data) { 
        let values = data.data;

        let dataChart = {
            keys: [],
            values: []
        }

        let sum = 0;
        let check = 0;

        values.forEach(ele => {
            dataChart.keys.push(ele.day);
            if(ele.Cost.indexOf("$") != -1){
                let cost = parseInt(ele.Cost.replace(/[\$]/g, ""));
                if (cost == 0) {
                    check++;
                } 
                dataChart.values.push(cost*20000);
                sum += cost*20000
            } else {

                let cost = parseInt(ele.Cost.replace(/[\$|\₫|\,|\.]/g, ""));
                if (cost == 0) {
                    check++;
                }
                dataChart.values.push(cost);
                sum += cost
            }

        });

        if (check != values.length) {

            $("#getCostReport-Total").text(numeral(sum).format("0,0") + " ₫");

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let detail = "";
                        params.forEach((p, i) => {
                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = p;
                            name = moment(name).format(`DD-MM-YYYY`);
                            detail += `${marker} Chi Phí <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0") + " ₫"}</span>
                                            <br/>`
                        })

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                    <div class="text-dark pt-1">${detail}</div>`;

                    }
                },
                grid: {
                    right: "1%",
                    left: "0%",
                    bottom: "3%",
                    top: "20%"
                },
                xAxis: {
                    type: "category",
                    show: false,
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }, ],
                series: [{
                        type: 'line',
                        symbol: "none",
                        smooth: true,
                        data: dataChart.values,
                        color: "rgb(255, 174, 139)",
                        areaStyle: {
                            color: "rgba(255, 174, 139,0.5)",
                        },
                    },

                ]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });
            await $(`#${task}`).parent().removeClass("is-loading");

            return myChart;
        } else {
            await $(`#${task}`).parent().removeClass("is-loading");
            await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
            await $(`#${task}`).parent().before(`
            <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }

    } else { 
        await $(`#${task}`).parent().removeClass("is-loading");
        await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
        await $(`#${task}`).parent().before(`
        <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getInvalidClicksReport = async (task, data) => {
    if (data.data) {

        let values = data.data;

        let dataChart = {
            keys: [],
            values: []
        }

        let sum = 0;
        let check = 0;

        values.forEach(ele => {
            dataChart.keys.push(ele.day);
            dataChart.values.push(ele.InvalidClicks.replace(/[\.|\,]/g, ""));
            sum += parseInt(ele.InvalidClicks.replace(/[\.|\,]/g, ""));
            if (ele.InvalidClicks == "0") {
                check++;
            }
        });

        if (check != values.length) {

            $("#getInvalidClicksReport-Total").text(numeral(sum).format("0,0"));

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let detail = "";
                        params.forEach((p, i) => {
                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = p;

                            detail += `${marker} Click Không Hợp lệ <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0")}</span>
                                            <br/>`
                        })
                        name = moment(name).format(`DD-MM-YYYY`);
                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                    <div class="text-dark pt-1">${detail}</div>`;

                    }
                },
                grid: {
                    right: "1%",
                    left: "0%",
                    bottom: "3%",
                    top: "20%"
                },
                xAxis: {
                    type: "category",
                    show: false,
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }, ],
                series: [{
                        type: 'line',
                        symbol: "none",
                        smooth: true,
                        data: dataChart.values,
                        color: "rgb(255, 192, 239)",
                        areaStyle: {
                            color: "rgba(255, 192, 239,0.5)",
                        },
                    },

                ]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });

            await $(`#${task}`).parent().removeClass("is-loading");
            return myChart;
        } else {
            await $(`#${task}`).parent().removeClass("is-loading");
            await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
            await $(`#${task}`).parent().before(`
            <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }
    } else {   
        await $(`#${task}`).parent().removeClass("is-loading");
        await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
        await $(`#${task}`).parent().before(`
        <div class="img text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getCostSavingByDate = async (task, data, from, to) => { 

    if (data.data) {  
        let sumClick = 0;
        let sumCost = 0;
        await $.ajax({
            url: `//localapi.trazk.com/adwords-report/index.php?task=getTotallCostClickReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`,
            type: "GET"
        }).then(Data => { 
            (Data.data[0].Cost.indexOf("$")!=-1) ? sumCost = parseInt(Data.data[0].Cost.replace(/[\$|\,]/g, ""))*20000 
            : sumCost += parseInt(Data.data[0].Cost.replace(/[\$|\₫|\,|\.]/g, ""));
            // sumCost += parseInt(Data.data[0].Cost.replace(/[\$|\₫|\,|\.]/g, ""));
            sumClick += parseInt(Data.data[0].Clicks.replace(/[\,|\.]/g, "")); 
        })      


 

        let agvCPC = Math.round(sumCost / sumClick);   

        let values = data.data;
        let dataChart = {
            keys: [],
            values: []
        }
        let sum = 0;
        let check = 0;
        
        for (x in values) {
            let val = values[x];
            dataChart.keys.push(x);
            dataChart.values.push(val * agvCPC);
            sum += parseInt(val * agvCPC);
            if (val == 0) {
                check++;
            }
        }

        if (check != dataChart.values.length) {
             
            $("#getCostSavingByDate-Total").text(numeral(sum).format("0,0") + " ₫")

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let detail = "";
                        params.forEach((p, i) => {
                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = p;

                            name = moment(name).format(`DD-MM-YYYY`);
                            detail += `${marker} Trung Bình Tiết Kiệm Được <span style="color:${color};font-weight:bold">: ${numeral(value).format("0,0") + " ₫"}</span>
                                                <br/>`
                        })

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                                        <div class="text-dark pt-1">${detail}</div>`;

                    }
                },
                grid: {
                    right: "1%",
                    left: "0%",
                    bottom: "3%",
                    top: "20%"
                },
                xAxis: {
                    type: "category",
                    show: false,
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }, ],
                series: [{
                        type: 'line',
                        symbol: "none",
                        smooth: true,
                        data: dataChart.values,
                        color: "rgb(255, 174, 139)",
                        areaStyle: {
                            color: "rgba(255, 174, 139,0.5)",
                        },
                    },

                ]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });

            await $(`#${task}`).parent().removeClass("is-loading");
            return myChart;
        } else {
            await $(`#${task}`).parent().removeClass("is-loading");
            await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
            await $(`#${task}`).parent().before(`
            <div class="img-3f text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
                <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
                <div class="font-gg text-info font-13 font-weight-bold">
                    Không đủ dữ liệu
                </div>
            </div>`);

            return null;
        }

    } else {
        await $(`#${task}`).parent().removeClass("is-loading");
        await $(`#${task}`).parent().removeClass("d-flex").addClass("d-none");
        await $(`#${task}`).parent().before(`
        <div class="img-3f text-center bg-white rounded shadow-sm px-4 py-4" style="height: 150px">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="100px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);

        return null;
    }
}

const getDayClicksAndInvalidClicksReport = async (task, data) => {

    if (data.data) {

        let dataChartInvalidClicks = {
            keys: [],
            values: [],
        }

        let dataChartClick = {
            keys: [],
            values: [],
        }

        data.data.forEach(ele => {
            dataChartClick.keys.push(ele.day);

            dataChartClick.values.push(ele.Clicks.replace(/[\,|\.]/g, ""));
            dataChartInvalidClicks.values.push(ele.InvalidClicks.replace(/[\,|\.]/g, ""));
        })

        let ele = document.getElementById("getDayClicksAndInvalidClicksReport");

        let myChart = echarts.init(ele, "light");
        let option = {
            tooltip: {
                trigger: "axis",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        name
                    } = params[0];
                    let detail = "";
                    let format = "";
                    params.forEach(p => {
                        let {
                            marker,
                            color,
                            seriesName,
                            value
                        } = p;

                        value = numeral(value).format(format);


                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">: ${value}</span>
                        <br/>`
                    });

                    name = moment(name).format(`DD-MM-YYYY`);
                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">${detail}`;
                }
            },
            legend: {
                data: ['Số Lần Click', "Click Không Hợp Lệ"],
                top: "7%",
                textStyle: {
                    fontFamily: 'Arial'
                },
                // bottom: "20%"
            },
            grid: {
                right: "5%",
                left: "7%"
            },
            xAxis: {
                type: "category",
                data: dataChartClick.keys,
                axisLine: {
                    lineStyle: {
                        color: "#ccc"
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#999"
                    },
                    fontFamily: 'Arial',
                    formatter: (value, index) => {
                        return moment(value).format('DD-MM');
                    },
                },
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    formatter: (value, index) => (value = numeral(value).format("0,0"))
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
            },
            series: [{
                    name: 'Số Lần Click',
                    data: dataChartClick.values,
                    itemStyle: {
                        color: '#2494d8',
                    },
                    type: "bar",
                },
                {
                    name: 'Click Không Hợp Lệ',
                    data: dataChartInvalidClicks.values,
                    itemStyle: {
                        color: '#cf638b',
                    },
                    type: "bar",
                },
            ]
        };
        myChart.setOption(option);
        new ResizeSensor($(`#getDayClicksAndInvalidClicksReport`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass("is-loading");
        return myChart;
    } else {
        await $(`#${task}`).removeClass("is-loading");
        await $(`#${task}`).html(`
        <div class="text-center">
            <img src="https://cdn.dribbble.com/users/6377/screenshots/3413658/error404_.jpg" width="200px"/>
            <div class="font-gg text-info font-13 font-weight-bold">
                Không đủ dữ liệu
            </div>
        </div>`);
    }
}

const getConfigFraudClick = async (task, data) => {
    if (data.data) { 
        let config = data.data.config;

        let arrayConfig = data.data.config; 

        BROWSER_RULE = arrayConfig.BROWSER_RULE;
        BIGDATA_RULE = arrayConfig.BIGDATA_RULE;
        DISABLE_MOBILE = arrayConfig.DISABLE_MOBILE;
        VPN_PROXY_LIST = arrayConfig.VPN_PROXY_LIST;
        network_3G_4G_LIST = arrayConfig['3G_4G_LIST']; 

        // checkOnOff(data.data.campaigns, "campaigns");
        checkOnOff(arrayConfig.MONITOR_ONLY, "MONITOR_ONLY");
        checkOnOff(arrayConfig.BIGDATA_RULE, "BIGDATA_RULE");
        checkOnOff(arrayConfig.BROWSER_RULE, "BROWSER_RULE");
        checkOnOff(arrayConfig.VPN_PROXY_LIST, "VPN_PROXY_LIST");
        checkOnOff(arrayConfig['3G_4G_LIST'], "network_3G_4G_LIST");
        checkOnOff(arrayConfig.DISABLE_MOBILE, "DISABLE_MOBILE");
        checkOnOff(arrayConfig.EXCLUSION_LIST, "EXCLUSION_LIST");
        checkOnOff(arrayConfig.LOCATION_RULE, "LOCATION_RULE");
        checkOnOff(arrayConfig.IP_RULE, "IP_RULE");
        checkOnOff(arrayConfig.IP_RULE, "IP_GROUP_RULE");



    }
}

const getCampaignsAndTotalBlockedIp = async (task, data) => { 
 
    let Data; 

    // await $.get(`//localapi.trazk.com/adwords-report/adwordreport.php?cid=${cid}&userToken=${userToken}&task=getClickCampaignReport&from=${moment(fromSelect,"DD/MM/YYYY").format("YYYY/MM/DD")}&to=${moment(toSelect,"DD/MM/YYYY").format("YYYY/MM/DD")}`).then(res => {  
    //     Data = res;
    // }) 

    let myarray = [];
    let content = "";

    data.data.forEach((i,index) => { 
        content += `<tr>
                        <th scope="row">${index+1}</th>
                        <td>${i.name}</td>
                        <td>${i.click}</td> 
                    <tr>`
    })

    $("#list-campaign").html(content); 

    console.log(data);
    console.log(Data)

    await $.get(`//localapi.trazk.com/cla/index.php?task=getCampaignsAndTotalBlockedIp&userToken=${userToken}&cid=${cid}`).then(res => {  
        Data = JSON.parse(res);
        
    })

    // data.data.forEach((i,index) => {
    //     Data.data.forEach(j => {
    //         if(i.campaignName == j.name)
    //         {
    //             let temp = {
    //                 name: j.name,
    //                 click: j.click,
    //                 totalBlockedIp: i.totalBlockedIp
    //             }

    //             content += `<tr>
    //                             <th scope="row">${index+1}</th>
    //                             <td>${j.name}</td>
    //                             <td>${j.click}</td>
    //                             <td>${i.totalBlockedIp}</td>
    //                         <tr>`

    //             myarray.push(temp) 
    //         }
    //     });
    // });

  

}

async function checkOnOff(data, string) {
    if (string == "DISABLE_MOBILE" || string == "MONITOR_ONLY") {
        if (data == "TRUE") {
            $(`input[type=checkbox][name=${string}]`).prop("checked", true);
        } else {
            $(`input[type=checkbox][name=${string}]`).prop("checked", false);
        }
    } else if (string == "campaigns") {
        if (data == "All") {  

            $(`#all-campaign`).prop("checked", true); 
        } else {
            $(`#campaign`).prop("checked", true); 
        }
    } else if (string == "network_3G_4G_LIST") {
        if (data != "") {
            $(`input[type=checkbox][name=${string}]`).prop("checked", true);

            while (data != "") {
                if (data.indexOf("|") != -1) {

                    let index = data.indexOf("|");
                    let val = data.slice(0, index);
                    data = data.substr(index + 1)
                    $(`input[type=checkbox][id=${val}]`).prop("checked", true);
                } else {
                    $(`input[type=checkbox][id=${data}]`).prop("checked", true);
                    data = "";
                }
            }
        } else {
            $(`input[type=checkbox][name=${string}]`).prop("checked", false);
        }
    } else if (string == "EXCLUSION_LIST") {
        let content = "";
        let stt = 1;
        while (data != "") {
            if (data.indexOf("|") != -1) {

                let index = data.indexOf("|");
                let val = data.slice(0, index);
                content += `
                    <tr>
                        <td class="stt col-2 font-gg font-13">${stt}</td> 
                        <td data-ip="${val}" class="col-4 font-gg font-13">${val}</td> 
                        <td class="col-3 font-gg font-13 text-center">aa</td> 
                        <td class="col-3 font-gg font-13 text-right pr-5">
                            <i data-id="${val}" title="Bỏ Chặn" class="destroy-ip text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`
                data = data.substr(index + 1)
            } else {
                content += `
                    <tr>
                        <td class="stt col-2 font-gg font-13">${stt}</td> 
                        <td data-ip="${data}" class="col-4 font-gg font-13">${data}</td> 
                        <td class="col-3 font-gg font-13 text-center">10/10</td> 
                        <td class="col-3 font-gg font-13 text-right pr-5">
                            <i data-id="${data}" title="Bỏ Chặn" class="destroy-ip text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`
                $(`#table-tbody-IP`).append(content).parent().removeClass("d-none");
                data = "";
            }

            stt++;
        }

        $(`#table-IP tr .stt`).each(function (index) {
            $(this).text(index + 1);
        })

        $(".destroy-ip").click(async function () {
            $(this).parent().parent().remove();
            listIp = "";
            $("#table-tbody-IP tr td").each(function () {
                $("#table-IP tr .stt").each(function (index) {
                    $(this).text(index + 1);
                })
                let val = $(this).data("ip");
                listIp += val + "|";
            })

            EXCLUSION_LIST = sliceString(listIp, "|");

            if (EXCLUSION_LIST == "") {
                $("#table-tbody-IP").parent().addClass("d-none");
                $("#save-IP").parent().addClass("d-none");
            }
        })
    } else if (string == "LOCATION_RULE") {
        let content = "";
        let stt = 1;
        while (data != "") {
            if (data.indexOf("|") != -1) {

                let index = data.indexOf("|");
                let val = data.slice(0, index);
                content += `
                    <tr>
                        <td class="stt col-2 font-gg font-13">${stt}</td> 
                        <td data-position="${val}" class="col-4 font-gg font-13">${val}</td> 
                        <td class="col-3 font-gg font-13 text-center">aa</td> 
                        <td class="col-3 font-gg font-13 text-right pr-5">
                            <i data-id="${val}" title="Bỏ Chặn" class="destroy-position text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`
                data = data.substr(index + 1)
            } else {
                content += `
                    <tr>
                        <td class="stt col-2 font-gg font-13">${stt}</td> 
                        <td data-position="${data}" class="col-4 font-gg font-13">${data}</td> 
                        <td class="col-3 font-gg font-13 text-center">10/10</td> 
                        <td class="col-3 font-gg font-13 text-right pr-5">
                            <i data-id="${data}" title="Bỏ Chặn" class="destroy-position text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`
                $(`#table-tbody-position`).append(content).parent().removeClass("d-none");
                data = "";
            }

            stt++;
        }

        $(".destroy-position").click(async function () {
            $(this).parent().parent().remove();
            listPosition = "";
            $("#table-tbody-position tr td i").each(function () {
                $("#table-tbody-position tr .stt").each(function (index) {
                    $(this).text(index + 1);
                })
                let val = $(this).data("id");
                listPosition += val + "|";
            })

            LOCATION_RULE = sliceString(listPosition, "|");

            if (LOCATION_RULE == "") {
                $("#table-tbody-position").parent().addClass("d-none");
                $("#save-position").parent().addClass("d-none");
            }
        })
    } else if (string == "IP_RULE") {
        if (data != "[|]") {

            data = data.replace(/[\[\]]/g, "");
            let index = data.indexOf("|");
            let click = data.slice(0, index);
            let minute = data.substr(index + 1);

            $("#select-click-IP_RULE option").each(function () {
                if (click == $(this).val())
                    $(this).attr("selected", "selected");
            });
            $("#select-time-IP_RULE option").each(function () {
                if (minute == $(this).val())
                    $(this).attr("selected", "selected");
            });
            $(`input[type=checkbox][name=realtime]`).prop("checked", true);
        } else {
            $(`input[type=checkbox][name=realtime]`).prop("checked", false);
        }


    } else { 
        if (data != "") {
            
            $(`input[type=checkbox][name=${string}]`).prop("checked", true);
        } else {
            $(`input[type=checkbox][name=${string}]`).prop("checked", false);
        }
    }
}




$(document).ready(() => {   

    $("#support").click(()=>{

        Swal.fire({
            html:
            `   
            <div class="card text-left m-auto" style="width:350px">
                <img class="m-auto card-img-top rounded-pill" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style="width:30%">
                <div class="card-body m-auto">
                    <h4 class="card-title text-center font-weight-bold font-gg font-20">
                        Bão Bão 
                    </h4>  
                    <div class="mt-2 text-center font-16 font-gg text-muted font-weight-bold">
                         <i class="fas fa-map-marker-alt mr-2"></i>320/9 Trường Chinh - F13 - Tân Bình, Hồ Chí Minh 
                    </div>  
                    <div class="d-flex mt-3">
                        <div class="ml-3">
                            <img class="mr-2" src="https://image.flaticon.com/icons/svg/25/25377.svg" width="20px"/> <span class="font-gg font-weight-bold">0822371098</span> 
                        </div>
                        <div class="ml-auto mr-3">
                            <img class="mr-2" src="https://image.flaticon.com/icons/svg/174/174848.svg" width="20px"/> <span class="font-gg font-weight-bold">Bão Bão</span>
                        </div>
                    </div> 
                    <div class="d-flex mt-4">
                        <button type="button" class="ml-3 btn btn-outline-primary font-13 font-gg font-weight-bold">
                            <img class="mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/224px-Facebook_Messenger_logo.svg.png" width="20px"/>
                            Chat Facebook
                        </button>
                        
                        <button type="button" class="mr-3 ml-auto btn btn-outline-primary font-13 font-gg font-weight-bold"> 
                            <img class="mr-2" src="https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png" width="20px"/>
                            Chat Zalo
                        </button>
                    </div>
                </div>
                <div class="text-center mb-2">
                    Nếu bạn không thể liên hệ với hỗ trợ viên, vui lòng gọi Hotline <span class="font-13 font-gg text-danger font-weight-bold">0984 66 80 68 - 0901 47 48 46</span>
                </div>
            </div>`,
            // html:`
            // <div class="row">
            //     <div class="col-6">
            //         <img class="m-auto card-img-top rounded-pill" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style="width:60%">
            //         <h4 class="mt-3 card-title font-weight-bold font-gg font-20">
            //              Bão Bão
            //              <img class="mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/224px-Facebook_Messenger_logo.svg.png" width="20px"/>
            //              <img src="https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png" width="20px"/>
            //         </h4>  
            //     </div>

            //     <div class="col-6">
            //         <div class="text-left"> 
            //             <img class="mr-2" src="https://image.flaticon.com/icons/svg/25/25377.svg" width="20px"/> <span class="font-gg font-weight-bold">0822371098</span>
            //         </div>
            //         <div class="mt-3 text-left">
            //             <img class="mr-2" src="https://image.flaticon.com/icons/svg/174/174848.svg" width="20px"/> <span class="font-gg font-weight-bold">Bão Bão</span>
            //         </div> 
            //         <div class="mt-3 text-left font-13 font-gg">
            //             <i class="fas fa-map-marker-alt mr-2"></i>320/9 Trường Chinh - F13 - Tân Bình, Hồ Chí Minh 
            //         </div>  
            //     </div>
            //     <div class="col-12">
            //         <div class="mt-3 text-center font-13 font-gg">
            //             Nếu bạn không thể liên hệ với hỗ trợ viên, vui lòng gọi Hotline <span class="font-13 font-gg text-danger">0984 66 80 68 - 0901 47 48 46</span>
            //         </div>
            //     </div>
            // </div>`,
            width: 400,
            showConfirmButton: false,
            showCloseButton: true,
        })

    })

})