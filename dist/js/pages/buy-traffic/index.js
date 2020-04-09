function htmlOrder() {
    // <div class="align-self-center font-gg text-muted font-12 ml-2">*Nếu bạn cần thêm <span class="font-gg font-weight-bold font-13 text-muted">Traffic</span> mỗi ngày, vui lòng <a href="#">liên hệ</a></div>

    return `<div class="text-left mb-3"> 
                <div class="mt-2 px-4 py-3"> 
                    <div class="text-left d-flex no-block flex-column">
                        <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">URL</div>
                        <input id="input-url" value="" type="text" class="font-13 text-muted form-control" placeholder="domain chính hoặc 1 đường dẫn"/>
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
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Thời gian xem trang</div> 
                        <div class="d-flex no-block">
                            <div class="d-flex no-block w-50">
                                <select class="select-min" style="width: 30%"></select>
                                <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                    <i class="fad fa-wave-sine text-dark"></i>
                                </div>
                                <select class="select-min" style="width: 30%"></select> 
                            </div> 
                            <div class="w-50 d-flex no-block align-self-center">
                                <div class="font-12 text-muted align-self-center font-gg font-gg">*Chi phí có thể thay đổi nếu bạn tăng thời gian xem trang</div>
                            </div> 
                        </div> 
                    </div>
                    <div class="d-flex no-block flex-column mt-4 bg-white">
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Nguồn truy cập</div> 
                        <div class="w-100">
                            <div class="w-100 d-flex no-block justify-content-between">
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand" for="checkbox-direct">
                                        <input class="" type="checkbox" id="checkbox-direct" name="source" value="Direct">
                                        <p class="font-gg font-weight-500 font-14 text-muted d-inline">
                                            Trực tiếp
                                            <p class="d-inline ratio font-gg font-weight-500 font-14" style="opacity: 0;">(100%)</p>
                                        </p>
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand rounded" for="checkbox-google" style="z-index: 2">
                                        <input class="" type="checkbox" id="checkbox-google" name="source" value="Google">
                                        <p class="ml-1 font-gg font-weight-500 font-14 text-muted d-inline">
                                            Google 
                                        </p>
                                        <span></span>
                                    </label>
                                    <span data-name="Google" class="cursor-pointer show-config ml-1 rounded-pill px-2 py-1 bg-warning font-10 font-weight-500 font-gg" style="opacity: 0">Cấu hình</span>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand rounded" for="checkbox-facebook">
                                        <input class="" type="checkbox" id="checkbox-facebook" name="source" value="Facebook">
                                        <p class="ml-1 font-gg font-weight-500 font-14 text-muted d-inline">
                                            Facebook
                                        </p>
                                        <span></span>
                                    </label>
                                    <span data-name="Facebook" class="cursor-pointer show-config ml-1 rounded-pill px-2 py-1 bg-info font-10 font-weight-500 font-gg" style="opacity: 0">Cấu hình</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Trang con</div> 
                        <div class="d-flex no-block">
                            <div class="d-flex no-block flex-column w-50">
                                <div class="font-gg font-12 text-muted mb-1 w-100">
                                    Số trang con
                                </div>
                                <div class="w-100 d-flex no-block">
                                    <select class="select-min-page" style="width: 30%"></select>
                                    <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                        <i class="fad fa-wave-sine text-dark"></i>
                                    </div>
                                    <select class="select-max-page" style="width: 30%"></select> 
                                </div> 
                            </div> 
                            <div class="d-flex no-block flex-column w-50">
                                <div class="font-gg font-12 text-muted mb-1 w-100">
                                    Thời gian xem trang con
                                </div>
                                <div class="w-100 d-flex no-block">
                                    <select class="select-min-time" style="width: 30%"></select>
                                    <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                        <i class="fad fa-wave-sine text-dark"></i>
                                    </div>
                                    <select class="select-max-time" style="width: 30%"></select> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <div class="d-flex no-block flex-column mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-4">Tỉ lệ mobile/pc</div> 
                        <div class="position-relative w-100 mt-1">
                            <div class="position-absolute device-mobile" style="top: -17px; left: 5px">
                                <i class="fas fa-mobile-alt mr-2 font-13"></i><span class="font-weight-500 font-16 text-dark">10%</span>
                            </div>
                            <div class="position-absolute device-pc" style="top: -17px; right: 0">
                                <span class="font-weight-500 font-16 mr-2 text-dark">90%</span><i class="fas fa-desktop font-13"></i>
                            </div>
                            <div class="w-100 position-relative" style="opacity: 0; z-index: 10">
                                <input id="range-device" type="range" min="0" step="1" max="100" value="10" class="w-100 cursor-pointer">
                            </div>
                            <div class="w-100 position-absolute" style="top: 9px">
                                <div class="ads-thumb " style="left: 10%; transform: translateX(-10%);"></div>
                                <div class="ads-track">
                                    <div class="ads-fill" style="width: 10%;"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="mt-4 text-center"> 
                        <button type="button" class="btn-cost btn btn-info ml-4">Tính Chi Phí</button>
                    </div>
                </div>
            </div>`;
}

function htmlConfig(name) {
    console.log(name)
    return `
    <div class="modal-config position-fixed" style="z-index: 1; top: 0; right: 0; left: 0; bottom: 0; background-color: rgba(0,0,0,0.3)">
    </div>
    <div class="modal-config position-absolute w-100 bg-white rounded shadow" style="top: 555px; left: 0; z-index: 7; height: 266px">
        <div class="position-absolute bg-white" style="padding: 15px; top: -6%; left: ${(name == "Google") ? "43%" : "80%"}; width: 30px; height: 30px;clip-path: polygon(51% 0, 0 60%, 100% 60%);">
        </div>
        <div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom d-flex no-block">
            Cấu hình ${name}
            <i class="far fa-times ml-auto font-17 close-modal-config cursor-pointer"></i>
        </div>
        <div class="px-4 py-3">
            <div class="text-left ${(name == "Google") ? "d-flex" : "d-none"} no-block flex-column mb-4">
                <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Thêm từ khóa</div>
                <input id="input-keywords" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập từ khóa"/>
            </div>
            <div class="d-flex no-block flex-column"> 
                <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-4">Tỉ lệ</div> 
                <div class="position-relative w-100">
                    <div class="position-absolute" style="top: -17px; left: 0">
                        <span class="font-weight-500 font-13 text-dark">${name}</span>
                    </div>
                    <div class="position-absolute range-value" style="top: -17px; right: 0">
                        <span class="font-weight-500 font-16 text-dark">5%</span>
                    </div>
                    <div class="w-100 position-relative" style="opacity: 0; z-index: 10">
                        <input id="range-device" type="range" min="5" step="5" max="100" value="5" class="w-100 cursor-pointer">
                    </div>
                    <div class="w-100 position-absolute" style="top: 9px">
                        <div class="ads-thumb " style="left: 5%; transform: translateX(-5%);"></div>
                        <div class="ads-track">
                            <div class="ads-fill" style="width: 5%;"></div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>`;
}

function showPopupOrder(obj) {
    Swal.fire({ 
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Mua traffic cho website</div>`,
        html: htmlOrder(),
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 700,
        position: "top",
        onOpen: () => {
            appendSelectTraffic();
            appendSelectCountry();
            appendSelectTimeMaxAndMin();
            appendSelectSubPage();
            appendSelectTimeRun();

            $(".select2-selection").addClass("border").css("height","38px");
            $(".select2-dropdown.select2-dropdown--below").addClass("border");
            $(".swal2-popup").addClass("px-0 py-0"); 
            $(".swal2-title").addClass("mb-0 w-100"); 

            $(".btn-cost").click(() => { 
                $(".swal2-confirm").click();
            }) 
        
        },
        onClose: () => { 
            obj.dailyTraffic = $(".select-traffic").val();
            obj.websiteURL = $("#input-url").val();
            obj.area = $(".select-country").val();
            obj.mrate = $("#range-device").val(); 
            obj.timeToRun = $(".select-time-run").val();
            obj.st.minTime = $(".select-min").val();
            obj.st.maxTime = $(".select-max").val();
            obj.subpage.minPage = $(".select-min-page").val();
            obj.subpage.maxPage = $(".select-max-page").val();
            obj.subpage.minTime = $(".select-min-time").val();
            obj.subpage.maxTime = $(".select-max-time").val();
            console.log(obj)   
        }
    })
}

function appendSelectTraffic() {
    for(let i = 1; i <= 10; i++) {
        $(".select-traffic").append(`<option value="${i*100}">${i*100}</option>`);
    }

    $('.select-traffic').select2(); 
}

function appendSelectCountry() {
    let arr_country = [
        {
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
            value: "",
            text: "Châu Mỹ"

        }
    ];

    arr_country.forEach(val => {
        $(".select-country").append(`<option ${(val.name == "Vietnam") ? "selected" : ""} value="${val.value}">${val.text}</option>`);
    })

    $('.select-country').select2({
        placeholder: "Chọn Quốc Gia"
    });
 
}

function appendSelectTimeMaxAndMin() {
    for(let i = 1; i <= 90; i++) {
        $(".select-max").append(`<option value="${i*10}">${i*10} giây</option>`);   
        $(".select-min").append(`<option value="${i*10}">${i*10} giây</option>`);
    } 

    $('.select-max,.select-min').select2();
}

function appendSelectSubPage() {
    for (let i = 1; i <= 3; i++) { 
        if(i == 1) {
            $(".select-min-page").append(`<option value="${i}">${i} trang</option>`);
            $(".select-min-time").append(`<option value="${i*10}">${i*10} giây</option>`);
        
        } else {
            $(".select-max-page").append(`<option ${(i == 3) ? "selected" : ""} value="${i}">${i} trang</option>`);
            $(".select-max-time").append(`<option ${(i == 3) ? "selected" : ""} value="${i*10}">${i*10} giây</option>`);
        }
        
    }

    $('.select-min-page, .select-max-page').select2({
        placeholder: "Số trang",
        allowClear: true
    });

    $('.select-min-time, .select-max-time').select2({
        placeholder: "Số giây",
        allowClear: true
    });
}

function appendSelectTimeRun() {
    for (let i = 2; i <= 30; i++) {
        $(".select-time-run").append(`<option value="${i}">${i} ngày</option>`);
    }

    $('.select-time-run').select2({
        placeholder: "Số ngày", 
    });

}

function showPopopConfig(name) {
    Swal.fire({ 
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Cấu hình ${name}</div>`,
        html:
        `<div class="text-left mb-2">
            <div class="px-4 py-3">
                <div class="text-left no-block flex-column mb-4 ${(name == "Google") ? "d-flex" : "d-none"}">
                    <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Thêm từ khóa</div>
                    <input id="input-keywords" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập từ khóa"/>
                </div>
                <div class="d-flex no-block flex-column"> 
                    <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-4">Tỉ lệ</div> 
                    <div class="position-relative w-100">
                        <div class="position-absolute" style="top: -17px; left: 0">
                            <span class="font-weight-500 font-13 text-dark">${name}</span>
                        </div>
                        <div class="position-absolute range-value" style="top: -17px; right: 0">
                            <span class="font-weight-500 font-16 text-dark">5%</span>
                        </div>
                        <div class="w-100 position-relative" style="opacity: 0; z-index: 10">
                            <input id="range-device" type="range" min="5" step="5" max="100" value="5" class="w-100 cursor-pointer">
                        </div>
                        <div class="w-100 position-absolute" style="top: 9px">
                            <div class="ads-thumb " style="left: 5%; transform: translateX(-5%);"></div>
                            <div class="ads-track">
                                <div class="ads-fill" style="width: 5%;"></div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="mt-4 text-center"> 
                    <button type="button" class="btn-save btn btn-info font-weight-500">Lưu Cấu Hình</button>
                </div>
            </div>
        </div>`,
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500,
        position: "top",
        onOpen: () => {
            $(".swal2-popup").addClass("px-0 py-0"); 
            $(".swal2-title").addClass("mb-0 w-100"); 
        }
    })
}

function eventCheckbox(this_) { 
    let val = $(this_).val();

    if($(this_).prop("checked")) {
        if(val == "Google") {
            $(this_).parent().addClass("bg-white").css("z-index","2");
            $(this_).closest("div").append(htmlConfig(val))
            $(this_).closest("div").find(".show-config").css("opacity","1")
            
            // $(".swal2-confirm").click();
            // showPopopConfig(val);
        } else if(val == "Facebook") {
            $(this_).parent().addClass("bg-white").css("z-index","2");
            $(this_).closest("div").append(htmlConfig(val))
            $(this_).closest("div").find(".show-config").css("opacity","1")
            
            // $(".swal2-confirm").click();
            // showPopopConfig(val);
            
        } else {
            $(this_).parent().find(".ratio").css("opacity","1");
        }
    } else {
        if(val == "Google") {
            // showPopopConfig(val);
            $(this_).closest("div").find("div").remove();
            $(this_).parent().removeClass("bg-white").css("z-index","0");
            $(this_).closest("div").find(".show-config").css("opacity","0")

        } else if(val == "Facebook") {
            // showPopopConfig(val);
            $(this_).closest("div").find("div").remove();
            $(this_).parent().removeClass("bg-white").css("z-index","0");
            $(this_).closest("div").find(".show-config").css("opacity","0")
        } else { 
            $(this_).parent().find(".ratio").css("opacity","0");
        }
    }
}

function eventRange(this_) { 
    let val = $(this_).val();    
    $(".ads-fill").css("width", `${val}%`);
    $(".ads-thumb").css({
        "left": `${val}%`,
        "transform": `translateX(${-val}%)`
    }) 

    $(".device-mobile span, .range-value span").text(val + "%");
    $(".device-pc span").text(100 - val + "%");
}




$(document).ready(() => { 
    
    let obj = {
        dailyTraffic: "",
        websiteURL: "",
        area: [],
        mrate: "",
        trafficSource: [
            {
                type: "",
                rate: "",
                surl: ""
            },
            {
                type: "",
                rate: "",
                surl: ""
            },
            {
                type: "",
                rate: "",
                surl: ""
            }
        ],
        st: {
            minTime: "",
            maxTime: "",
        },
        subpage: {
            minPage: "",
            maxPage: "",
            minTime: "",
            maxTime: "",
        },
        startTime: "",
        timeToRun: "",
    }

    console.log(obj);


    // showPopopConfig();
    $(".btn-submitOrder").click(() => {
        showPopupOrder(obj);
    })

    $("body").on("change","input[type=checkbox][name=source]",function() {
        eventCheckbox($(this));
    }) 

    $("body").on("input","#range-device", function() { 
        eventRange($(this))
    })
    
    $("body").on("click",".close-modal-config",function() {
        $(".modal-config").remove();
        $(".kt-checkbox").removeClass("bg-white").css("z-index","0");
    })

    $("body").on("click",".show-config",function() {
        $(this).parent().append(htmlConfig($(this).data("name")));
        $(this).parent().find(".kt-checkbox").addClass("bg-white").css("z-index","2");
    })
})