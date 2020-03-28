$("#sidebarnav li a").each(function () {
    $(this).data("name") == "block-one-ip" ? $(this).addClass("active") : null;
})

async function showSuccess() {
    const result = await Swal.fire({
        title: 'Để thấy sự vi diệu của tính năng chặn click ảo, 3F mời bạn thử chặn IP của bạn.',
        html: ` 
            <img src="https://image.flaticon.com/icons/svg/1047/1047690.svg" width="150px"/>
        `,
        showCloseButton: true,
        showCancelButton: false,
        // showConfirmButton: false,
        confirmButtonText: 'OK',
        focusConfirm: false,
        padding: "3em",
        width: "600px",
        position: "top",
        preConfirm: () => {

        }
    })


    if (result.value) {
        // window.location.href = `?action=block-one-ip`;
        // var info = new Anno({
        //     target : '#btn-block-one-ip',
        //     content: '<b>Để thấy sự vi diệu của tính năng chặn click ảo, 3F mời bạn thử chặn IP của bạn.</b>', 
        //     position: "center-right",
        //     buttons: [
        //         {
        //           text: 'Đóng',
        //           position: "left"
        //         }
        //       ]
        // })

        // info.show();
    }
}

async function getYourIP() {
    try {
        return await $.get('//api.ipify.org?format=json')
    } catch (error) {
        console.error(error)
    }
}

// API log kien thuc
async function getTutorialFraudClick() {
    return $.get(`//localapi.trazk.com/cla/index.php?task=getTutorialFraudClick&userToken=${userToken}&cid=${cid}`);
}

getTutorialFraudClick().then(data => {
    data = JSON.parse(data);
    let {
        knowAdwordsAccountPosition,
        knowBlockYourIp,
        knowDownloadIp,
        knowFFFReport,
        knowIpBockIPButton,
        knowIpInfo,
        knowIpStatus,
        knowMonitorMode,
        knowOtherAppPosition,
        knowSelectCampaignToBlock
    } = data.data

    console.log(data.data);
    if (knowBlockYourIp == "false") {
        var info = new Anno({
            target: '#btn-block-one-ip',
            content: '<b>Để thấy sự vi diệu của tính năng chặn click ảo, 3F mời bạn thử chặn IP của bạn.</b>',
            position: "center-right",
            buttons: [{
                text: 'Đóng',
                position: "left"
            }]
        })

        info.show();

        $.post(`//localapi.trazk.com/cla/index.php?task=updateTutorialFraudClick&userToken=${userToken}&cid=${cid}&knowledge=knowBlockYourIp&value=true`);
    }
})


$(document).ready(() => {
    // var info = new Anno({
    //     target: '#btn-block-one-ip',
    //     content: '<b>Để thấy sự vi diệu của tính năng chặn click ảo, 3F mời bạn thử chặn IP của bạn.</b>',
    //     position: "center-right",
    //     buttons: [{
    //         text: 'Đóng',
    //         position: "left"
    //     }]
    // })

    // if(!getLocalStorage("FirstIn")){ 
    //     info.show();
    //     setLocalStorage("FirstIn",true)
    // } else { 

    // }


    getYourIP().then(data => {
        $("#yourIP").val(data.ip);
    })


    $("#btn-block-one-ip").click(async function () {
        // info.hide();
        let ip = $("#yourIP").val();
        if ($(this).text() == "Thử chặn IP của bạn") {

            $(".yourIP").text(ip);

            let content = `<table class="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th scope="col" class="col-6 text-left font-gg font-12 font-weight-bold">STT</th>
                                    <th scope="col" class="col-6 text-right font-gg font-12 font-weight-bold">Tên Chiến Dịch</th> 
                                </tr>
                            </thead>                        
                            <tbody class="scrollbar" style="height:150px">`;

            $(this).html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`);
            let sumcampaign = 0;
            await $.ajax({
                url: `//localapi.trazk.com/cla/index.php?task=blockIpToAllCampaigns&userToken=${userToken}&ip=${ip}&cid=${cid}&blockType=CLICKMANUALLY`,
                type: "POST"
            }).then(data => {
                data = JSON.parse(data);
                data.data.forEach((ele, index) => {
                    sumcampaign++;
                    content += ` <tr>
                                    <td class="col-6 text-left font-gg font-13">${sumcampaign}</td>
                                    <td class="col-6 text-right pr-4 font-gg font-13">${ele.campaignName}</td> 
                                </tr>`
                })

                content += `</tbody></table>`
            })
            // Chặn thành công 115.79.4.128 vào tổng 11 chiến dịch: 
            $(this).html(`<i class="fa fa-check mr-2"></i>Mở chặn IP của bạn`);
            $(this).removeClass("btn-danger").addClass("btn-success")
            $(".detailTestCLA").removeClass("d-none");
            Swal.fire({
                type: "success",
                title: 'Hoàn tất chặn IP.',
                html: `
                    <div class="font-gg font-weight-bold text-muted">Chặn thành công ip <span class="text-info font-gg font-weight-bold">${ip}</span>
                        vào tổng <span class="text-danger font-gg font-weight-bold">${sumcampaign}</span> chiến dịch: 
                    </div>
                    <div class="m-auto" style="width: 365px">${content}</div>
                `,
                showCloseButton: true,
                showCancelButton: false,
                // showConfirmButton: false,
                confirmButtonText: 'OK',
                focusConfirm: false,
                padding: "1em",
                width: "500px",
                position: "top",
                onOpen: () => {
                    $(".scrollbar").perfectScrollbar();
                },
                preConfirm: () => {}
            })

        } else {

            $(this).html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`);

            await $.ajax({
                url: `//localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                type: "POST"
            }).then(data => {
                data = JSON.parse(data);
                console.log(data);
            })

            $(this).html(`<i class="fad fa-ban mr-2 font-16"></i>Thử chặn IP của bạn`);
            $(this).removeClass("btn-success").addClass("btn-danger")
            $(".detailTestCLA").addClass("d-none");
            Swal.fire({
                type: "success",
                title: 'Hoàn tất chặn IP.',
                html: `<div class="font-gg font-weight-bold text-muted">Mở chặn thành công ip <span class="text-info font-gg font-weight-bold">${ip}</span> trên các chiến dịch khóa</div>`,
                showCloseButton: true,
                showCancelButton: false,
                // showConfirmButton: false,
                confirmButtonText: 'OK',
                focusConfirm: false,
                padding: "1em",
                width: "500px",
                position: "top",
                preConfirm: () => {}
            })
        }
    })


})