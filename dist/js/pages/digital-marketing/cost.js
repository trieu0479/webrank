async function getData(url) {
    return await $.getJSON(url);
}

async function getUserWebsites() {
    return await getData(`//localapi.trazk.com/fff/user.php?task=getMySupporter&userToken=${userToken}`).then(data => {
        return data.data.data;
    })
}


function htmlPopupSupport(data) {
    console.log(data);
    return `<div class="">
                <div class="mb-4 px-5">
                    <div class="font-gg font-14 text-muted"> 
                        Cảm ơn bạn đã sử dụng gói công cụ Digital Marketing của 3F. 
                        Nhân viên sẽ liên hệ với bạn để hướng dẫn cài đặt và sử dụng 
                    </div> 
                </div>
                <hr class="w-50">
                <div class="mt-4 text-left d-flex justify-content-center">
                    <div class="w-15">
                        <img class="rounded-circle w-100" src="${data.avatar}"/>
                    </div>
                    <div class="ml-3 align-self-center">
                        <div class="mb-3 font-gg font-14 font-weight-500">Hỗ trợ viên: ${data.fullname}</div>
                        <div class="mb-3 font-gg font-14">Hỗ trợ qua di động/zalo: <a href="tel:${data.phone}" class="text-danger font-14 font-weight-500">${data.phone}</a href="tel:${data.phone}"></div>
                        <div class="font-gg font-14">Nếu bạn cần thêm hỗ trợ khác, vui lòng liên hệ hotline <span class="text-danger font-14 font-weight-500"><a href="tel:${data.hotline[0]}" class="text-danger font-14 font-weight-500">${data.hotline[0]}</a> - <a href="tel:${data.hotline[1]}" class="text-danger font-14 font-weight-500">${data.hotline[1]}</a></span></div>
                    </div>
                </div>
            </div>`;
}

function showPopupSupport(data) {
    Swal.fire({   
        title: `<div class="font-gg font-18 font-weight-bold ">Hoàn Tất</div>`,
        html: htmlPopupSupport(data),
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 700,
        position: "top",
        onOpen: () => { 
        },  
    })
}


$(document).ready(() => {
    
    getUserWebsites().then(data => {    
        showPopupSupport(data)
    });

})