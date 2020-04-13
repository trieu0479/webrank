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
                        <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Thời gian xem trang <span class="font-12 text-muted">*Chi phí có thể thay đổi nếu bạn tăng thời gian xem trang</span></div> 
                        <div class="d-flex no-block">
                            <div class="d-flex no-block w-50">
                                <select class="select-min" style="width: 30%"></select>
                                <div class="text-center mt-1 align-self-center" style="width: 20%"> 
                                    <i class="fad fa-wave-sine text-dark"></i>
                                </div>
                                <select class="select-max" style="width: 30%"></select> 
                            </div> 
                            <div class="w-50 d-flex no-block align-self-center">
                                <div class="font-12 text-muted align-self-center font-gg font-gg">*Chi phí có thể thay đổi nếu bạn tăng thời gian xem trang</div>
                            </div> 
                            
                        </div> 
                    </div>
                    <div class="d-flex no-block flex-column mt-4 bg-white">
                        <div class="config-rate position-relative align-self-centermb-2" style="z-index: 6">
                            <div class="font-gg font-weight-bold font-13 w-100">
                                Nguồn truy cập
                            <span class="d-none cursor-pointer show-modal-rate ml-1 rounded-pill px-2 py-1 bg-info font-10 font-weight-500 font-gg">Chia tỉ lệ</span>
                            </div>
                        </div> 
                        <div class="w-100">
                            <div class="w-100 d-flex no-block justify-content-between">
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand" for="checkbox-direct">
                                        <input class="" type="checkbox" id="checkbox-direct" name="source" value="Direct">
                                        <p class="font-gg font-weight-500 font-13 text-muted d-inline">
                                            Trực tiếp <p class="ratioDirect font-weight-500 font-13 text-dark font-gg d-inline-block ml-1" style="opacity: 0; width: 50px"></p>
                                        </p>
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand rounded" for="checkbox-google">
                                        <input class="" type="checkbox" id="checkbox-google" name="source" value="Google">
                                        <p class="font-gg font-weight-500 font-13 text-muted d-inline">
                                            Google <p class="ratioGoogle font-weight-500 font-13 text-dark font-gg d-inline-block ml-1" style="opacity: 0; width: 50px"></p>
                                        </p>
                                        <span class="ml-1"></span>
                                    </label>
                                    <span data-name="Google" class="cursor-pointer show-modal-config ml-1 rounded-pill px-2 py-1 bg-warning font-10 font-weight-500 font-gg" style="opacity: 0">Cấu hình</span>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand rounded" for="checkbox-facebook">
                                        <input class="" type="checkbox" id="checkbox-facebook" name="source" value="Facebook">
                                        <p class="font-gg font-weight-500 font-13 text-muted d-inline">
                                            Facebook <p class="ratioFacebook font-weight-500 font-13 text-dark font-gg d-inline-block ml-1" style="opacity: 0; width: 50px"></p>
                                        </p>
                                        <span></span>
                                    </label>
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
                                <input id="my-range" type="range" min="0" step="1" max="100" value="10" class="w-100 cursor-pointer">
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

function htmlRate(array) {
    let content = "";
    let ratio = (array.length == 3) ? 90/array.length : 100/array.length;
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

function htmlConfigGoogle(name) { 
    return `
    <div class="modal-config position-fixed" style="z-index: 1; top: 0; right: 0; left: 0; bottom: 0; background-color: rgba(0,0,0,0.3)">
    </div>
    <div class="modal-config position-absolute w-100 bg-white rounded shadow" style="top: 555px; left: 0; z-index: 7; height: 258px">
        <div class="position-absolute bg-white" style="padding: 15px; top: -6%; left: ${(name == "Google") ? "43%" : "80%"}; width: 30px; height: 30px;clip-path: polygon(51% 0, 0 60%, 100% 60%);">
        </div>
        <div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom d-flex no-block">
            Cấu hình ${name}
            <i class="far fa-times ml-auto font-17 close-modal-configGoogle cursor-pointer" data-name="${name}"></i>
        </div>
        <div class="px-4 py-3">
            <div class="text-left ${(name == "Google") ? "d-flex" : "d-none"} no-block flex-column">
                <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Thêm từ khóa</div>
                <input id="input-keywords" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập từ khóa"/>
                <div class="keywords mt-2">
                </div>
            </div>
        </div>
        <div class="error-configGoogle d-none bg-danger-2 text-center px-4 py-3 mt-5 font-weight-500 text-danger font-14">
            Vui lòng nhập ít nhất 1 từ khóa !
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

        }, 
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
        $(".select-country").append(`<option ${(val.name == "Vietnam") ? "selected" : ""} value="${val.name}">${val.text}</option>`);
    })

    $('.select-country').select2({
        placeholder: "Chọn Quốc Gia"
    });
 
}

function appendSelectTimeMaxAndMin() {
    for(let i = 1; i <= 90; i++) {
        if(i > 1) {
            $(".select-max").append(`<option value="${i*10}">${i*10} giây</option>`);   
        } 

        if(i != 90) {
            $(".select-min").append(`<option value="${i*10}">${i*10} giây</option>`);
        }
    } 

    $('.select-max,.select-min').select2();

    $('.select-min').on('select2:select', function (e) {
        let min = e.params.data.id; 
        let max = $('.select-max').val();
        
        if(min >= max) {
            $('.select-max').val(`${+min + 10}`).trigger('change');
        }

    });

    $(".select-max").on('select2:select', function (e) {
        let max = e.params.data.id; 
        let min = $('.select-min').val();

        if(max <= min) {
            $('.select-min').val(`${+max - 10}`).trigger('change');
        }
            
    });


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

function eventCheckbox(this_) { 
    let val = $(this_).val();
    let array_checked = arrayChecked("input[type=checkbox][name=source]");

    if($(this_).prop("checked")) {

        if(val == "Google") {
            $(".config-rate").css("z-index","0");
            $(this_).parent().addClass("bg-white").css("z-index","2");
            $(this_).closest("div").append(htmlConfigGoogle(val));
            $(this_).closest("div").find(".show-modal-config").css("opacity","1"); 

        } else {
            $(this_).parent().find(".ratio").css("opacity","1");
        } 

    } else {
        if(val == "Google") { 
            $(".config-rate").css("z-index","6");
            $(this_).closest("div").find("div").remove();
            $(this_).parent().removeClass("bg-white").css("z-index","0");
            $(this_).closest("div").find(".show-modal-config").css("opacity","0")

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

function cssRange(name,val) {
    $(`${name} .ads-fill`).css("width", `${val}%`);
    $(`${name} .ads-thumb`).css({
        "left": `${val}%`,
        "transform": `translateX(${-val}%)`
    }) 
    $(`${name} .ratio-traffic span`).text(val + "%");
} 

function shareRatio(name,val) {
    let google =  +$(`.trafficGoogle .ratio-traffic span`).text().replace("%","");
    let facebook =  +$(`.trafficFacebook .ratio-traffic span`).text().replace("%","");
    let direct =  +$(`.trafficDirect .ratio-traffic span`).text().replace("%","");
    let value = 0;
    
    if(name == ".trafficDirect") {
        value = 100 - (google + facebook);
    } else if(name == ".trafficGoogle") {
        value = 100 - (direct + facebook); 
    } else if(name == ".trafficFacebook") {
        value = 100 - (google + direct);
    }

    if(val >= 5 && val <= value && val <= 90) {
        cssRange(name,val);
    }
}

function eventRange(this_,name = "") { 
    let arr_traffic = arrayChecked("input[type=checkbox][name=source]"); 
    arr_traffic.splice(arr_traffic.indexOf(name.replace(".traffic","")), 1)
    let length = arr_traffic.length;
    let val = +$(this_).val();     
    
    if(name != "") {  

        if(length == 1) {   
            if(val >= 10 && val <= 90) {
                cssRange(name,val);
                cssRange(".traffic" + arr_traffic[0], 100 - val);
                $(`.traffic${arr_traffic[0]} #my-range`).val(100 - val);
            }

        } else { 
            shareRatio(name,val);
        }

    } else {
        
        $(".ads-fill").css("width", `${val}%`);
        $(".ads-thumb").css({
            "left": `${val}%`,
            "transform": `translateX(${-val}%)`
        }) 
        $(".device-mobile span, .range-value span").text(val + "%");
        $(".device-pc span").text(100 - val + "%");
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

function showModalRate(this_) {
    let array = arrayChecked("input[type=checkbox][name=source]");
    $(this_).after(modalRate(array)); 
    $(this_).removeClass("show-modal-rate");
}

$(document).ready(() => { 
    
    let obj_direct = {};
    let obj_google = {};
    let obj_facebook = {};
    let arr_keywords_google = [];

    let obj = {
        dailyTraffic: "",
        websiteURL: "",
        area: [],
        mrate: "",
        trafficSource: "",
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
    
    $(".btn-submitOrder").click(() => {
        showPopupOrder(obj);
    }) 

    $("body").on("click", ".btn-cost", () => { 
        let array_checked = arrayChecked("input[type=checkbox][name=source]");
        if(array_checked.length > 0) {

            let trafficSource =  [];
            let websiteURL = $("#input-url").val();
            let dailyTraffic = $(".select-traffic").val();
            let area = $(".select-country").val();
            let mrate = $(".device-mobile span").text().trim().replace(/\D/g,"");
            let max = $(".select-max").val();
            let min = $(".select-min").val();
            let minPage = $(".select-min-page").val();
            let maxPage = $(".select-max-page").val();
            let minTime = $(".select-min-time").val();
            let maxTime = $(".select-max-time").val();
            let timeToRun = $(".select-time-run").val();
            
            for (let i = 0; i < array_checked.length; i++) { 

                let temp = {
                    type: (array_checked[i] == "Direct") ? "0" : (array_checked[i] == "Google") ? "2" : "1",
                    rate: $(`.ratio${array_checked[i]}`).text().trim().replace(/\D/g,""),
                    surl: (array_checked[i] == "Direct") ? "https://facebook.com" : (array_checked[i] == "Google") ? arr_keywords_google : "",
                }

                trafficSource.push(temp) 
            } 

            let post = {
                dailyTraffic,
                websiteURL,
                area,
                mrate,
                trafficSource,
                st: {
                    min,
                    max
                },
                subpage: {
                    minPage,
                    maxPage,
                    maxTime,
                    minTime
                },
                timeToRun,
                startTime: 1
            } 
            
            let date = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
            console.log(date);
            console.log(moment("10-04-2020").format("yyyy-mm-dd"))

            // $.post(`http://localapi.trazk.com/2020/api/buytraffic/index.php?task=getCostOfOrderTraffic&userToken=${userToken}`,post,function(data) {
            //     console.log(data)
            // })
            
        } else {

        }
    }) 

    $("body").on("change","input[type=checkbox][name=source]",function() {
        eventCheckbox($(this));
    }) 

    $("body").on("input","#my-range", function() { 
        if($(this).closest(".trafficDirect").length > 0) { 
            eventRange($(this),".trafficDirect");
        } else if($(this).closest(".trafficGoogle").length > 0) { 
            eventRange($(this),".trafficGoogle");
        } else if($(this).closest(".trafficFacebook").length > 0) { 
            eventRange($(this),".trafficFacebook");
        } else {
            eventRange($(this));
        }
    })

    $("body").on("click",".show-modal-rate",function() {
        showModalRate(this);
    })

    $("body").on("click",".close-modal-rate",function() {
        let direct_rate = $(".trafficDirect .ratio-traffic span").text().trim();
        let google_rate =  $(".trafficGoogle .ratio-traffic span").text().trim();
        let facebook_rate = $(".trafficFacebook .ratio-traffic span").text().trim(); 

        $(".ratioDirect").text(`(${direct_rate})`);
        $(".ratioGoogle").text(`(${google_rate})`);
        $(".ratioFacebook").text(`(${facebook_rate})`);

        $(this).closest(".config-rate").find("span").addClass("show-modal-rate");
        $(".modal-rate").remove();
    })

    
    $("body").on("click",".close-modal-configGoogle",function() {
        let name = $(this).data("name");
        if(arr_keywords_google.length > 0) { 

            obj_google.surl = arr_keywords_google;

            console.log(obj_google)

            $(".modal-config").remove();
            $(".kt-checkbox").removeClass("bg-white").css("z-index","0");
            $(".config-rate").css("z-index","6");
        } else {
            $(".error-configGoogle").removeClass("d-none");
        }

    })

    $("body").on("click",".show-modal-config",function() {
        $(this).parent().append(htmlConfigGoogle($(this).data("name")));
        $(this).parent().find(".kt-checkbox").addClass("bg-white").css("z-index","2");
        $(".config-rate").css("z-index","0");
    })

    $("body").on("keypress","#input-keywords", function(e) {
        let val = $(this).val().trim()
        if(e.which == 13 && val != "" && val != arr_keywords_google[arr_keywords_google.indexOf(val)]) {
            $(".keywords").append(`<span class="font-11 px-2 py-1 text-box-catelog text-white bg-info">
                                        ${val}<i class="position-relative delete-keywords ml-3 cursor-pointer far fa-times"></i>
                                    </span>`);
            arr_keywords_google.push(val);
            $(this).val("");
        }
    })

    $("body").on("click", ".delete-keywords", function() {
        let val = $(this).parent().text().trim();
        arr_keywords_google.splice(arr_keywords_google.indexOf(val),1);
        $(this).addClass("ads-is-loading ml-4 mr-1");
        setTimeout(() => {
            $(this).parent().remove();
        }, 500);
    })
})