import ClassFuncs from "./core.js"; 

function htmlSupport(data) {
   
    $(".support").html(`<div class="mt-4 text-left d-flex justify-content-center">
                            <div class="w-15">
                                <img class="rounded-circle w-100" src="${data.avatar}"/>
                            </div>
                            <div class="ml-3 align-self-center">
                                <div class="mb-3 font-gg font-14 font-weight-500">Hỗ trợ viên: ${data.fullname}</div>
                                <div class="mb-3 font-gg font-14">Hỗ trợ qua di động/zalo: <a href="tel:${data.phone}" class="text-danger font-14 font-weight-500">${data.phone}</a href="tel:${data.phone}"></div>
                                <div class="font-gg font-14">Nếu bạn cần thêm hỗ trợ khác, vui lòng liên hệ hotline <span class="text-danger font-14 font-weight-500"><a href="tel:${data.hotline[0]}" class="text-danger font-14 font-weight-500">${data.hotline[0]}</a> - <a href="tel:${data.hotline[1]}" class="text-danger font-14 font-weight-500">${data.hotline[1]}</a></span></div>
                            </div>
                        </div>`);
}

$(document).ready(() => { 

    let classFuncs = new ClassFuncs();

    classFuncs.getUserWebsites().then(data => {
        htmlSupport(data);
    })

})