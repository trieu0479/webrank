$(document).ready(function() {



    $('#btnSubmitUrl').click(function() {
        let Url = $('#inputUrl').val()
        console.log(Url);
        let UrlYoutube = Url.indexOf('youtube.com')
        if (Url != "") {
            if (UrlYoutube != -1) {
                showPopupOrderYoutube(obj_data);
            } else {
                showPopupOrder(obj_data);
            }
        } else {
            showPopupError("Nhập đường dẫn của bạn vào")
        }

    })


    $("body").on("click", ".show-modal-rate", function() {
        showModalRate(this);
    })

    $("body").on("change", "input[type=checkbox][name=source]", function() {
        eventCheckbox($(this), arr_keywords_google);
    })

    $("body").on("click", ".close-modal-configGoogle", function() {
        if (arr_keywords_google.length > 0) {
            $(".modal-config").remove();
            $(".kt-checkbox").removeClass("bg-white").css("z-index", "0");
            $(".config-rate").css("z-index", "6");
        } else {
            $(".error-configGoogle").removeClass("d-none");
        }

    })

    $("body").on("click", ".btn-keywords", function() {
        let val = $("#input-keywords").val().trim();
        if (val != "" && val != arr_keywords_google[arr_keywords_google.indexOf(val)]) {
            $(".keywords").append(`<span class="font-11 px-2 py-1 text-box-catelog text-white bg-info">
            ${val}<i class="position-relative delete-keywords ml-3 cursor-pointer far fa-times"></i>
                </span>`);
            arr_keywords_google.push(val);
            $("#input-keywords").val("");
            if (!$(".error-configGoogle").hasClass("d-none")) {
                $(".error-configGoogle").addClass("d-none")
            }
        }
    })
})

var obj_data = {};
var arr_keywords_google = [];

function showPopupError(text) {
    Swal.fire({
        type: 'error',
        title: text,
        showCloseButton: true,
    })
}

function showPopupOrder(obj_data) {
    Swal.fire({
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Mua traffic cho website</div>`,
        html: htmlOrder(obj_data),
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 700,
        position: "top",
        onOpen: () => {
            appendSelectTraffic(obj_data.dailyTraffic);
            appendSelectCountry(obj_data.area);
            appendSelectTimeMaxAndMin(obj_data.st);
            appendSelectSubPage(obj_data.subpage);
            appendSelectTimeRun(obj_data.timeToRun);

            $(".select2-selection").addClass("border").css("height", "38px");
            $(".select2-dropdown.select2-dropdown--below").addClass("border");
            $(".swal2-popup").addClass("px-0 py-0");
            $(".swal2-title").addClass("mb-0 w-100");

        },
    })
}

function showPopupOrderYoutube(obj_data) {
    Swal.fire({
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Mua lượt xem (View) cho Youtube</div>`,
        html: htmlOrderYoutube(obj_data),
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 700,
        position: "top",
        onOpen: () => {
            appendSelectServicePack();
            appendSelectCountry(obj_data.area);

            $(".select2-selection").addClass("border").css("height", "38px");
            $(".select2-dropdown.select2-dropdown--below").addClass("border");
            $(".swal2-popup").addClass("px-0 py-0");
            $(".swal2-title").addClass("mb-0 w-100");

        },
    })
}

function htmlOrder(obj_data, urlid = "") {
    let direct = {};
    let google = {};
    let facebook = {};

    if (obj_data.trafficSource != undefined) {
        obj_data.trafficSource.forEach(val => {
            if (val.type == 0) {
                direct = {
                    rate: val.rate
                };
            }

            if (val.type == 2) {
                google = {
                    rate: val.rate
                };
            }

            if (val.type == 1) {
                facebook = {
                    rate: val.rate
                };
            }
        })
    }

    // <div class="align-self-center font-gg text-muted font-12 ml-2">*Nếu bạn cần thêm <span class="font-gg font-weight-bold font-13 text-muted">Traffic</span> mỗi ngày, vui lòng <a href="#">liên hệ</a></div>
    return `<div class="text-left mb-3"> 
                <div class="mt-2 px-4 py-3"> 
                    <div class="text-left d-flex no-block flex-column">
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">URL (dường dẫn 1 trang bạn muốn tăng traffic)</div>
                        <input id="input-url" value="${(Object.values(obj_data).length > 0) ? obj_data.websiteURL : ""}" type="text" class="font-13 text-muted form-control" placeholder="Domain chính hoặc 1 đường dẫn"/>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Traffic mỗi ngày</div> 
                        <div class="w-100 d-flex no-block">    
                            <select class="select-traffic" style="width: 100%"></select>
                        </div>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Quốc gia</div> 
                        <div class="w-100">
                            <select class="select-country" name="states[]" multiple="multiple" style="width: 100%"></select>
                        </div>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Số ngày sẽ chạy</div> 
                        <div class="w-100 d-flex no-block">    
                            <select class="select-time-run" style="width: 100%"></select>
                        </div>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Thời gian xem trang <span class="font-12 text-muted">*Chi phí có thể thay đổi nếu bạn tăng thời gian xem trang</span></div> 
                        <div class="d-flex">
                            <div class="d-flex no-block w-100 w-md-50">
                                <select class="select-min w-50 w-md-30"></select>
                                <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                    <i class="fad fa-wave-sine text-dark"></i>
                                </div>
                                <select class="select-max w-50 w-md-30"></select> 
                            </div>   
                        </div> 
                    </div>
                    <div class="d-flex no-block flex-column mt-4 bg-white">
                        <div class="config-rate position-relative align-self-centermb-2" style="z-index: 6">
                            <div class="font-gg font-weight-bold font-13 w-100">
                                Nguồn truy cập
                            <span class=" ${(obj_data.trafficSource != undefined && obj_data.trafficSource.length > 1) ? "" : "d-none"} cursor-pointer show-modal-rate ml-1 rounded-pill px-2 py-1 bg-info font-10 font-weight-500 font-gg">Chia tỉ lệ</span>
                            </div>
                        </div> 
                        <div class="w-100">
                            <div class="w-100 d-flex no-block justify-content-between position-relative">
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand" for="checkbox-direct">
                                        <input ${(direct.rate != undefined) ? "checked" : ""} class="" type="checkbox" id="checkbox-direct" name="source" value="Direct">
                                        <p class="font-gg font-weight-500 font-13 text-muted d-inline">
                                            Trực tiếp <p class="ratioDirect font-weight-500 font-13 text-dark font-gg d-inline-block ml-1" style="opacity: ${(direct.rate != undefined) ? "1" : "0"}; width: 50px">${(direct.rate != undefined) ? direct.rate + "%" : ""}</p>
                                        </p>
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand rounded" for="checkbox-google">
                                        <input ${(google.rate != undefined) ? "checked" : ""} class="" type="checkbox" id="checkbox-google" name="source" value="Google">
                                        <p class="font-gg font-weight-500 font-13 text-muted d-inline">
                                            Google <p class="ratioGoogle font-weight-500 font-13 text-dark font-gg d-inline-block ml-1" style="opacity: ${(google.rate != undefined) ? "1" : "0"}; width: 50px">${(google.rate != undefined) ? google.rate + "%" : ""}</p>
                                        </p>
                                        <span class="ml-1"></span>
                                    </label>
                                    <span data-name="Google" class="cursor-pointer show-modal-config ml-1 rounded-pill px-2 py-1 bg-warning font-10 font-weight-500 font-gg" style="opacity: ${(google.rate != undefined) ? "1" : "0"}">Cấu hình</span>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand rounded" for="checkbox-facebook">
                                        <input ${(facebook.rate != undefined) ? "checked" : ""} class="" type="checkbox" id="checkbox-facebook" name="source" value="Facebook">
                                        <p class="font-gg font-weight-500 font-13 text-muted d-inline">
                                            Facebook <p class="ratioFacebook font-weight-500 font-13 text-dark font-gg d-inline-block ml-1" style="opacity: ${(facebook.rate != undefined) ? "1" : "0"}; width: 50px">${(facebook.rate != undefined) ? facebook.rate + "%" : ""}</p>
                                        </p>
                                        <span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Trang con</div> 
                        <div class="d-flex">
                            <div class="mb-3 mb-md-0 d-flex no-block flex-column w-100 w-md-50 ">
                                <div class="font-gg font-12 text-muted mb-1 w-100">
                                    Số trang con
                                </div>
                                <div class="w-100 d-flex no-block">
                                    <select class="select-min-page w-50 w-md-30"></select>
                                    <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                        <i class="fad fa-wave-sine text-dark"></i>
                                    </div>
                                    <select class="select-max-page w-50 w-md-30"></select> 
                                </div> 
                            </div> 
                            <div class="d-flex no-block flex-column w-100 w-md-50">
                                <div class="font-gg font-12 text-muted mb-1 w-100">
                                    Thời gian xem trang con
                                </div>
                                <div class="w-100 d-flex no-block">
                                    <select class="select-min-time w-50 w-md-30"></select>
                                    <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                        <i class="fad fa-wave-sine text-dark"></i>
                                    </div>
                                    <select class="select-max-time w-50 w-md-30"></select> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-4">Tỉ lệ mobile/pc</div> 
                        <div class="position-relative w-100 mt-1">
                            <div class="position-absolute device-mobile" style="top: -17px; left: 5px">
                                <i class="fas fa-mobile-alt mr-2 font-13"></i><span class="font-weight-500 font-16 text-dark">${(obj_data.mrate != undefined) ? obj_data.mrate + "%" : "50%"}</span>
                            </div>
                            <div class="position-absolute device-pc" style="top: -17px; right: 0">
                                <span class="font-weight-500 font-16 mr-2 text-dark">${(obj_data.mrate != undefined) ? 100 - +obj_data.mrate + "%" : "50%"}</span><i class="fas fa-desktop font-13"></i>
                            </div>
                            <div class="w-100 position-relative" style="opacity: 0; z-index: 10">
                                <input id="my-range" type="range" min="0" step="1" max="100" value="${(obj_data.mrate != undefined) ? obj_data.mrate : "50"}" class="w-100 cursor-pointer">
                            </div>
                            <div class="w-100 position-absolute" style="top: 9px">
                                <div class="ads-thumb " style="left: ${(obj_data.mrate != undefined) ? obj_data.mrate + "%" : "50%"}; transform: translateX(-${(obj_data.mrate != undefined) ? obj_data.mrate + "%" : "50%"});"></div>
                                <div class="ads-track">
                                    <div class="ads-fill" style="width: ${(obj_data.mrate != undefined) ? obj_data.mrate + "%" : "50%"};"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="mt-4 text-center"> 
                        <button type="button" data-urlid="${urlid}" class="btn-cost btn btn-info ml-4">${(urlid != "") ? "Cập nhật chiến dịch" : "Tính Chi Phí"}</button>
                    </div>
                </div>
            </div>`;
}

function htmlOrderYoutube(obj_data, urlid = "") {
    let direct = {};
    let google = {};
    let facebook = {};
    let Url = $('#inputUrl').val();

    if (obj_data.trafficSource != undefined) {
        obj_data.trafficSource.forEach(val => {
            if (val.type == 0) {
                direct = {
                    rate: val.rate
                };
            }

            if (val.type == 2) {
                google = {
                    rate: val.rate
                };
            }

            if (val.type == 1) {
                facebook = {
                    rate: val.rate
                };
            }
        })
    }

    // <div class="align-self-center font-gg text-muted font-12 ml-2">*Nếu bạn cần thêm <span class="font-gg font-weight-bold font-13 text-muted">Traffic</span> mỗi ngày, vui lòng <a href="#">liên hệ</a></div>
    return `<div class="text-left mb-3"> 
                <div class="mt-2 px-4 py-3"> 
                    <div class="text-left d-flex no-block flex-column">
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">URL (dường dẫn 1 trang video bạn muốn tăng lượt xem(View))</div>
                        <input disabled id="input-url" value="${Url}" type="text" class="font-13 text-muted form-control" placeholder="Url đường dẫn video trên Youtube"/>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Gói dịch vụ Youtube</div> 
                        <div class="w-100 d-flex no-block mb-2">    
                            <select class="select-servicepack" style="width: 100%"></select>
                        </div>
                        <div class="w-100 d-flex no-block">    
                            <div class="content-service border rounded px-3 py-3 w-100 ">
                                
                            </div>
                        </div>
                    </div>
                    <div class="edit-youtube mt-4">
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">URL (dường dẫn 1 trang video bạn muốn tăng lượt xem(View))</div>
                        <input id="input-quality" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập vào ít nhất 1000 View"/>
                        <div class="font-gg d-flex no-block mt-1"><p class="text-warning font-12 mr-2">Ít nhất: 1000</p> | <p class="text-danger font-12 mx-2">Nhiều nhất: 20000</p> | <p class="text-success font-12 ml-2">Lợi tức thì: 1000</p></div>
                    </div>
                    <div class="d-flex no-block flex-column mt-0"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Quốc gia</div> 
                        <div class="w-100">
                            <select class="select-country" name="states[]" multiple="multiple" style="width: 100%"></select>
                        </div>
                    </div>
                    <div class="mt-4 text-center"> 
                        <button type="button" data-urlid="${urlid}" class="btn-cost btn btn-info ml-4">${(urlid != "") ? "Cập nhật chiến dịch" : "Tính Chi Phí"}</button>
                    </div>
                </div>
            </div>`;
}

function appendSelectTraffic(dailyTraffic, urlid = "") {
    for (let i = 1; i <= 30; i++) {
        $(".select-traffic").append(`<option ${(dailyTraffic != undefined && dailyTraffic == i*100) ? "selected" : ""} value="${i*100}">${i*100}</option>`);
    }

    $('.select-traffic').select2();

    if (urlid != "" && dailyTraffic < 500) {
        $(".select-traffic").prop("disabled", true);
    }
}

function appendSelectServicePack() {
    let ser_pack = [{
            name: "Gói tăng lượt xem thường",
            value: "YTNORMAL",
            war: "Chúng tôi không thể cung cấp lượt xem nếu video của bạn bị vô hiệu hóa hoặc nếu video nằm trong bất kỳ Hệ thống quản lý nội dung (CMS) nào.",
            text1: "** Đơn đặt hàng theo bất kỳ CMS sẽ bị hủy. Bạn có thể xác minh xem video của bạn có CMS được nhúng hay không bằng cách chèn nhúng vào URL của bạn",
            text2: "Ví dụ - / embed / abcd, sau đó nhấp vào nút phát và nếu nó đưa bạn đến một trang có Video không khả dụng, điều đó có nghĩa là chúng tôi KHÔNG THỂ cung cấp lượt xem cho video.",
            text3: "Thời gian bắt đầu: 0 - 2 giờ (Bộ đếm YouTube bị trì hoãn 1-6 giờ vui lòng cho phép thời gian)",
            text4: "Tốc độ: 100 - 500 mỗi ngày",
            text5: "Duy trì: Ước tính 10 giây - 3 phút duy trì người xem. Duy trì được ước tính, có thể thay đổi theo video và không được bảo đảm.",
            text6: "Refill: Nạp trọn đời",
            text7: "GEO: Người xem có thể đến từ bất kỳ quốc gia nào trên toàn thế giới",
            text8: "Những hạn chế:",
            text9: "- Không có video nào bị vô hiệu hóa nhúng",
            text10: "- Không có video nào có CMS được thêm vào video hoặc kênh",
            text11: "- Không giới hạn quốc gia - phải được mở cho TẤT CẢ các quốc gia"
        },
        {
            name: "Gói tăng lượt xem thường - Tăng chậm",
            value: "YTSLOW",
            war: "Chúng tôi không thể cung cấp lượt xem nếu video của bạn bị vô hiệu hóa hoặc nếu video nằm trong bất kỳ Hệ thống quản lý nội dung (CMS) nào.",
            text1: "** Đơn đặt hàng theo bất kỳ CMS sẽ bị hủy. Bạn có thể xác minh xem video của bạn có CMS được nhúng hay không bằng cách chèn nhúng vào URL của bạn",
            text2: "Ví dụ - / embed / abcd, sau đó nhấp vào nút phát và nếu nó đưa bạn đến một trang có Video không khả dụng, điều đó có nghĩa là chúng tôi KHÔNG THỂ cung cấp lượt xem cho video.",
            text3: "Thời gian bắt đầu: 0 - 2 giờ (Bộ đếm YouTube bị trì hoãn 1-6 giờ vui lòng cho phép thời gian)",
            text4: "Tốc độ: 100 - 500 mỗi ngày",
            text5: "Duy trì: Ước tính 10 giây - 3 phút duy trì người xem. Duy trì được ước tính, có thể thay đổi theo video và không được bảo đảm.",
            text6: "Refill: Nạp trọn đời",
            text7: "GEO: Người xem có thể đến từ bất kỳ quốc gia nào trên toàn thế giới",
            text8: "Những hạn chế:",
            text9: "- Không có video nào bị vô hiệu hóa nhúng",
            text10: "- Không có video nào có CMS được thêm vào video hoặc kênh",
            text11: "- Không giới hạn quốc gia - phải được mở cho TẤT CẢ các quốc gia"
        },
        {
            name: "Gói tăng lượt xem theo giờ - 4.000 giờ xem",
            value: "YT4KSEEN",
            war: "Bạn phải có MỘT video trên kênh của mình dài hơn 120 phút để đặt hàng dịch vụ Giờ ​​xem giờ của Kênh. 120 phút không thể đến từ nhiều video - phải có 1 video trên kênh của bạn dài hơn 120 phút (2 giờ).",
            text1: "** Đơn hàng của bạn sẽ bị hủy nếu bạn không có ít nhất 1 video dài 120 phút hoặc dài hơn.",
            text2: "PHẢI ĐỌC: Đặt hàng với URL kênh của bạn chứ không phải URL video. Bạn không thể chọn video nào được sử dụng, Nhà phát triển của chúng tôi sẽ làm điều đó khi xử lý đơn hàng.",
            text3: "Thời gian bắt đầu: 0 - 3 giờ",
            text4: "Tốc độ: 5-10 ngày để hoàn thành gói - đơn hàng sẽ không hoàn thành trong 5 đến 10 ngày",
            text5: "Duy trì: Ước tính 10 giây - 3 phút duy trì người xem. Duy trì được ước tính, có thể thay đổi theo video và không được bảo đảm.",
            text6: "Nạp lại: Đảm bảo nạp lại 30 ngày",
            text7: "GEO: Người xem đến từ tất cả các quốc gia",
            text8: "Những hạn chế:",
            text9: "- Phải có ít nhất 1 video trên Kênh dài 120 phút hoặc dài hơn.",
            text10: "- Chúng tôi không đảm bảo kiếm tiền từ Kênh của bạn bằng cách đặt hàng cho dịch vụ này.",
            text11: "** Xin lưu ý - thời gian giao hàng cho dịch vụ này là 5 đến 10 ngày. Rất có thể bạn KHÔNG thấy thời gian xem được thêm vào Kênh của mình cho đến khi SAU đơn hàng được đánh dấu Hoàn thành. Thông thường, YouTube mất khoảng 72 giờ sau khi đơn hàng được đánh dấu HOÀN THÀNH để cập nhật phân tích thời gian xem."
        },
        {
            name: "Gói SEO Youtube View - Xem theo từ khóa",
            value: "YTVIEWKEY",
            war: "Chúng tôi không thể cung cấp lượt xem nếu video của bạn bị vô hiệu hóa hoặc nếu video nằm trong bất kỳ Hệ thống quản lý nội dung (CMS) nào.",
            text1: "** Đơn đặt hàng theo bất kỳ CMS sẽ bị hủy. Bạn có thể xác minh xem video của bạn có CMS được nhúng hay không bằng cách chèn nhúng vào URL của bạn",
            text2: "Ví dụ - / embed / abcd, sau đó nhấp vào nút phát và nếu nó đưa bạn đến một trang có Video không khả dụng, điều đó có nghĩa là chúng tôi KHÔNG THỂ cung cấp lượt xem cho video.",
            text3: "Thời gian bắt đầu: 0 - 2 giờ (Bộ đếm YouTube bị trì hoãn 1-6 giờ vui lòng cho phép thời gian)",
            text4: "Tốc độ: 100 - 500 mỗi ngày",
            text5: "Duy trì: Ước tính 10 giây - 3 phút duy trì người xem. Duy trì được ước tính, có thể thay đổi theo video và không được bảo đảm.",
            text6: "Refill: Nạp trọn đời",
            text7: "GEO: Người xem có thể đến từ bất kỳ quốc gia nào trên toàn thế giới",
            text8: "Những hạn chế:",
            text9: "- Không có video nào bị vô hiệu hóa nhúng",
            text10: "- Không có video nào có CMS được thêm vào video hoặc kênh",
            text11: "- Không giới hạn quốc gia - phải được mở cho TẤT CẢ các quốc gia"
        },
        {
            name: "Gói SEO Youtube View - Xem theo đề xuất",
            value: "YTVIEWOFFER",
            war: "Chúng tôi không thể cung cấp lượt xem nếu video của bạn bị vô hiệu hóa hoặc nếu video nằm trong bất kỳ Hệ thống quản lý nội dung (CMS) nào.",
            text1: "** Đơn đặt hàng theo bất kỳ CMS sẽ bị hủy. Bạn có thể xác minh xem video của bạn có CMS được nhúng hay không bằng cách chèn nhúng vào URL của bạn",
            text2: "Ví dụ - / embed / abcd, sau đó nhấp vào nút phát và nếu nó đưa bạn đến một trang có Video không khả dụng, điều đó có nghĩa là chúng tôi KHÔNG THỂ cung cấp lượt xem cho video.",
            text3: "Thời gian bắt đầu: 0 - 2 giờ (Bộ đếm YouTube bị trì hoãn 1-6 giờ vui lòng cho phép thời gian)",
            text4: "Tốc độ: 100 - 500 mỗi ngày",
            text5: "Duy trì: Ước tính 10 giây - 3 phút duy trì người xem. Duy trì được ước tính, có thể thay đổi theo video và không được bảo đảm.",
            text6: "Refill: Nạp trọn đời",
            text7: "GEO: Người xem có thể đến từ bất kỳ quốc gia nào trên toàn thế giới",
            text8: "Những hạn chế:",
            text9: "- Không có video nào bị vô hiệu hóa nhúng",
            text10: "- Không có video nào có CMS được thêm vào video hoặc kênh",
            text11: "- Không giới hạn quốc gia - phải được mở cho TẤT CẢ các quốc gia"
        },
        {
            name: "Google Ads - Youtube View - Việt Nam",
            value: "GGYTVN",
            war: "Chúng tôi không thể cung cấp lượt xem nếu video của bạn bị vô hiệu hóa hoặc nếu video nằm trong bất kỳ Hệ thống quản lý nội dung (CMS) nào.",
            text1: "** Đơn đặt hàng theo bất kỳ CMS sẽ bị hủy. Bạn có thể xác minh xem video của bạn có CMS được nhúng hay không bằng cách chèn nhúng vào URL của bạn",
            text2: "Ví dụ - / embed / abcd, sau đó nhấp vào nút phát và nếu nó đưa bạn đến một trang có Video không khả dụng, điều đó có nghĩa là chúng tôi KHÔNG THỂ cung cấp lượt xem cho video.",
            text3: "Thời gian bắt đầu: 0 - 2 giờ (Bộ đếm YouTube bị trì hoãn 1-6 giờ vui lòng cho phép thời gian)",
            text4: "Tốc độ: 100 - 500 mỗi ngày",
            text5: "Duy trì: Ước tính 10 giây - 3 phút duy trì người xem. Duy trì được ước tính, có thể thay đổi theo video và không được bảo đảm.",
            text6: "Refill: Nạp trọn đời",
            text7: "GEO: Người xem có thể đến từ bất kỳ quốc gia nào trên toàn thế giới",
            text8: "Những hạn chế:",
            text9: "- Không có video nào bị vô hiệu hóa nhúng",
            text10: "- Không có video nào có CMS được thêm vào video hoặc kênh",
            text11: "- Không giới hạn quốc gia - phải được mở cho TẤT CẢ các quốc gia"
        },
    ]
    ser_pack.forEach((val, index) => { //forEach(có 2 tham số 1 vị trí của mảng là 2 là phần tử trong mảng)
        $(".select-servicepack").append(`<option value="${val.value}">${val.name}</option>`);
        $('.content-service').append(`<div id="${val.value}" class="des ${(index != 0) ? "d-none" : ""}"><div class="font-gg font-13">${val.war}</div><div class="font-gg font-13">${val.text1}</div><div class="font-gg font-13">${val.text2}</div><div class="font-gg font-weight-bold font-13">${val.text3}</div> <div class="font-gg font-weight-bold font-13">${val.text4}</div><div class="font-gg font-weight-bold font-13">${val.text5}</div> <div class="font-gg font-weight-bold font-13">${val.text6}</div><div class="font-gg font-weight-bold font-13">${val.text7}</div><div class="font-gg font-weight-bold font-13">${val.text8}</div><div class="font-gg font-13">${val.text9}</div><div class="font-gg font-13">${val.text10}</div><div class="font-gg font-13">${val.text11}</div></div>`)
    })



    $('.select-servicepack').select2();
    $('.select-servicepack').on('select2:select', function(e) {
        let val = e.params.data.id;
        console.log(val)
        $('.des').addClass("d-none");
        $(`#${val}`).removeClass("d-none");
        // $('.edit-youtube').appendEditYoutube()
    });
}

function appendSelectCountry(area) {
    let arr_country = [{
            name: "Vietnam",
            value: 52621312,
            text: "Việt Nam"
        },
        {
            name: "Asia",
            value: 768,
            text: "Châu Á"
        },
        {
            name: "United States",
            value: 18980864,
            text: "Hoa Kỳ"
        },
        {
            name: "Europe",
            value: 512,
            text: "Châu Âu"
        },
        {
            name: "Americas",
            value: 256,
            text: "Châu Mỹ"

        },
        {
            name: "United States",
            value: 18980864,
            text: "US"

        },
        {
            name: "Canada",
            value: 16990208,
            text: "Canada"
        },
        {
            name: "Germany",
            value: 33890304,
            text: "Đức"
        },
        {
            name: "UK",
            value: 34197504,
            text: "UK"
        },
        {
            name: "France",
            value: 34156544,
            text: "Pháp"
        }

    ];

    if (area != undefined) {
        arr_country.forEach(val => {
            area.forEach(item => {
                $(".select-country").append(`<option ${(val.name == item) ? "selected" : ""} value="${val.name}">${val.text}</option>`);
            })
        })
    } else {
        arr_country.forEach(val => {
            $(".select-country").append(`<option ${(val.name == "Vietnam") ? "selected" : ""} value="${val.name}">${val.text}</option>`);
        })
    }

    $('.select-country').select2({
        placeholder: "Chọn Quốc Gia"
    });

}

function appendSelectTimeMaxAndMin(st, urlid = "") {
    for (let i = 1; i <= 18; i++) {
        if (i > 1) {
            $(".select-max").append(`<option ${(st != undefined && st.max == i*10) ? "selected" : (i == 3) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);
        }

        if (i != 18) {
            $(".select-min").append(`<option ${(st != undefined && st.min == i*10) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);
        }
    }

    $('.select-max,.select-min').select2();

    $('.select-min').on('select2:select', function(e) {
        let min = +e.params.data.id;
        let max = +$('.select-max').val();

        if (min >= max) {
            $('.select-max').val(`${+min + 10}`).trigger('change');
        }

    });

    $(".select-max").on('select2:select', function(e) {
        let max = +e.params.data.id;
        let min = +$('.select-min').val();

        if (max <= min) {
            $('.select-min').val(`${+max - 10}`).trigger('change');
        }

    });

    if (urlid != "") {
        $(".select-max,.select-min").prop("disabled", true);
    }


}

function appendSelectSubPage(subpage, urlid = "") {
    for (let i = 0; i <= 3; i++) {
        $(".select-min-page").append(`<option ${(subpage != undefined && subpage.minPage == i || i==1) ? "selected" : ""} value="${i}">${i} trang</option>`);
        $(".select-min-time").append(`<option ${(subpage != undefined && subpage.minTime == i*10 || i==1) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);

        $(".select-max-page").append(`<option ${(subpage != undefined && subpage.maxPage == i || i==3) ? "selected" : (i == 3) ? "selected" : ""} value="${i}">${i} trang</option>`);
        $(".select-max-time").append(`<option ${(subpage != undefined && subpage.maxTime == i*10 || i==3) ? "selected" : (i == 3) ? "selected" : ""}  value="${i*10}">${i*10} s</option>`);
        /*
        if(i == 1) {
            $(".select-min-page").append(`<option ${(subpage != undefined && subpage.minPage == i) ? "selected" : ""} value="${i}">${i} trang</option>`);
            $(".select-min-time").append(`<option ${(subpage != undefined && subpage.minTime == i*10) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);
        
        } else if(i == 3) {
            $(".select-max-page").append(`<option ${(subpage != undefined && subpage.maxPage == i) ? "selected" : (i == 3) ? "selected" : ""} value="${i}">${i} trang</option>`);
            $(".select-max-time").append(`<option ${(subpage != undefined && subpage.maxTime == i*10) ? "selected" : (i == 3) ? "selected" : ""}  value="${i*10}">${i*10} s</option>`);
        }
        */

    }

    $('.select-min-page, .select-max-page').select2({
        placeholder: "Số trang",
        // allowClear: true
    });

    $('.select-min-time, .select-max-time').select2({
        placeholder: "Số giây",
        // allowClear: true
    });

    if (urlid != "") {
        $(".select-min-page").prop("disabled", true);
        $(".select-min-time").prop("disabled", true);
        $(".select-max-page").prop("disabled", true);
        $(".select-max-time").prop("disabled", true);
    }
}

function appendSelectTimeRun(timeToRun, urlid = "") {
    for (let i = 1; i <= 30; i++) {
        $(".select-time-run").append(`<option ${(timeToRun != undefined && timeToRun == i) ? "selected" : ""} value="${i}">${i} ngày</option>`);
    }

    $('.select-time-run').select2({
        placeholder: "Số ngày",
    });

    if (urlid != "") {
        $(".select-time-run").prop("disabled", true);
    }

}

function htmlRate(array) {
    let content = "";
    let ratio = (array.length == 3) ? 90 / array.length : 100 / array.length;
    for (let i = 0; i < array.length; i++) {
        content += `<div class="d-flex no-block flex-column mt-4">  
                    <div class="traffic${array[i]} position-relative w-100 mt-1">
                        <div class="position-absolute" style="top: -17px;">
                            <span class="font-gg font-weight-bold font-13 text-dark">${(array[i] == "Direct") ? "Trực tiếp" : array[i]}</span>
                        </div>
                        <div class="position-absolute ratio-traffic" style="top: -17px; right: 0">
                            <span class="font-weight-500 font-16 text-dark">${(array.length == 3 && array[i] == "Google") ? ratio + 10 : ratio}%</span>
                        </div>
                        <div class="w-100 position-relative" style="opacity: 0; z-index: 10">
                            <input data-value="${(array.length == 3 && array[i] == "Google") ? ratio + 10 : ratio}" id="my-range" type="range" min="0" step="5" max="100" value="${(array.length == 3 && array[i] == "Google") ? ratio + 10 : ratio}" class="w-100 cursor-pointer">
                        </div>
                        <div class="w-100 position-absolute" style="top: 9px">
                            <div class="ads-thumb " style="left: ${(array.length == 3 && array[i] == "Google") ? ratio + 10 : ratio}%; transform: translateX(-${(array.length == 3 && array[i] == "Google") ? ratio + 10 : ratio}%);"></div>
                            <div class="ads-track">
                                <div class="ads-fill" style="width: ${(array.length == 3 && array[i] == "Google") ? ratio + 10 : ratio}%;"></div>
                            </div>
                        </div>
                    </div>
                </div> `
    }

    return content;
}

function modalRate(array) {
    return `
    <div class="modal-rate position-fixed" style="z-index: -1; top: 0; right: 0; left: 0; bottom: 0; background-color: rgba(0,0,0,0.3)">
    </div>
    <div class="modal-rate position-absolute w-100 bg-white rounded shadow" style="top: 45px; left: 0; z-index: 7; height: 266px">
        <div class="position-absolute bg-white" style="padding: 15px; top: -6%; left: 18%; width: 30px; height: 30px;clip-path: polygon(51% 0, 0 60%, 100% 60%);">
        </div>
        <div class="px-4 py-3 w-100 text-left border-bottom d-flex no-block">
            <div class="font-gg font-weight-bold font-15">Chia tỉ lệ
                <span class="font-gg font-12 text-muted font-weight-500">
                ${array.length == 3 ? `(Trực tiếp + Google + Facebook) = 100%` : `(${(array[0] == "Direct") ? "Trực tiếp" : array[0]} + ${(array[1] == "Direct") ? "Trực tiếp" : array[1]}) = 100%`} 
                </span>         
            </div>
            <i class="far fa-times ml-auto font-17 close-modal-rate cursor-pointer"></i>
        </div>
        <div class="px-4 py-3">
            ${htmlRate(array)}
        </div>
        <div class="px-4 mt-2 ">
        </div>
    </div>`;
}

function showModalRate(this_) {
    let array = arrayChecked("input[type=checkbox][name=source]");
    $(this_).after(modalRate(array)); 
    $(this_).removeClass("show-modal-rate");
}

function eventCheckbox(this_,arr_keywords_google) { 
    let val = $(this_).val();
    let array_checked = arrayChecked("input[type=checkbox][name=source]");
    

    if($(this_).prop("checked")) {

        if(val == "Google") {
            $(".config-rate").css("z-index","0");
            $(this_).parent().addClass("bg-white").css("z-index","2");
            $(this_).closest("div").append(htmlConfigGoogle(arr_keywords_google));
            $(this_).closest("div").find(".show-modal-config").css("opacity","1"); 

        } else {
            $(this_).parent().find(".ratio").css("opacity","1");
        } 

    } else {
        if(val == "Google") { 
            $(".config-rate").css("z-index","6");
            $(this_).closest("div").find("div").remove();
            $(this_).parent().removeClass("bg-white").css("z-index","0");
            $(this_).closest("div").find(".show-modal-config").css("opacity","0");

        } else { 
            $(this_).parent().find(".ratio").css("opacity","0");
        } 

        $(this_).parent().find(`.ratio${val}`).text("").css("opacity","0");
    }   

    if(array_checked.length >= 2) { 
        if(array_checked.length == 2) {
            for (let i = 0; i < array_checked.length; i++) { 
                $(`.ratio${array_checked[i]}`).text("(50%)").css("opacity","1");
            }
        } else {
            for (let i = 0; i < array_checked.length; i++) { 
                let value = (array_checked[i] == "Google") ? "(40%)" : "(30%)";

                $(`.ratio${array_checked[i]}`).text(value).css("opacity","1");
            }
        }

        $(".show-modal-rate").removeClass("d-none");
    } else {
        $(`.ratio${array_checked[0]}`).text("(100%)").css("opacity","1");
        $(".show-modal-rate").addClass("d-none");
    }
}

function arrayChecked(selector) {
    let arr = [];
    $(selector).each(function() {
        if($(this).prop("checked")) {
            arr.push($(this).val());
        }
    })
    return arr;
}

function htmlConfigGoogle(array_keywords) {   
    let content = "";
    if(array_keywords.length > 0) {
        for(let i = 0; i < array_keywords.length; i++) {
            content += `<span class="font-11 px-2 py-1 text-box-catelog text-white bg-info">
                            ${array_keywords[i]}<i class="position-relative delete-keywords ml-3 cursor-pointer far fa-times"></i>
                        </span>`
        } 
    }

    return `
    <div class="modal-config position-fixed" style="z-index: 1; top: 0; right: 0; left: 0; bottom: 0; background-color: rgba(0,0,0,0.3)">
    </div>
    <div class="modal-config position-absolute w-100 bg-white rounded shadow" style="top: 43px; left: 0; z-index: 7; height: 258px">
        <div class="position-absolute bg-white" style="padding: 15px; top: -6%; left: 43%; width: 30px; height: 30px;clip-path: polygon(51% 0, 0 60%, 100% 60%);">
        </div>
        <div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom d-flex no-block">
            Cấu hình Google
            <i class="far fa-times ml-auto font-17 close-modal-configGoogle cursor-pointer"></i>
        </div>
        <div class="px-4 py-3">
            <div class="text-left d-flex no-block flex-column">
                <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Thêm từ khóa</div>
                <div class="d-flex">
                    <input id="input-keywords" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập từ khóa"/>
                    <button class="ml-3 btn-keywords btn btn-primary font-gg font-14 px-4">Thêm</button>
                </div>
                <div class="keywords mt-2">
                    ${(content != "") ? content : ""}
                </div>
            </div>
        </div>
        <div class="error-configGoogle d-none bg-danger-2 text-center px-4 py-3 mt-5 font-weight-500 text-danger font-14">
            Vui lòng nhập ít nhất 1 từ khóa !
        </div>
    </div>`;
}