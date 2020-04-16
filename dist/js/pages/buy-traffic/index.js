function htmlOrder(obj_data) { 
    let direct = {};
    let google = {};
    let facebook = {};

    if(obj_data.trafficSource != undefined) {
        obj_data.trafficSource.forEach(val => {
            if(val.type == 0) {
                direct = {
                    rate: val.rate
                };
            } 
            
            if(val.type == 2) {
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
                        <input id="input-url" value="${(Object.values(obj_data).length > 0) ? obj_data.websiteURL : ""}" type="text" class="font-13 text-muted form-control" placeholder="domain chính hoặc 1 đường dẫn"/>
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
                                <div class="d-none font-12 text-muted align-self-center font-gg font-gg">*Chi phí có thể thay đổi nếu bạn tăng thời gian xem trang</div>
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
                        <button type="button" class="btn-cost btn btn-info ml-4">Tính Chi Phí</button>
                    </div>
                </div>
            </div>`;
}

function htmlEdit() {
    return `<div class="text-left mb-3"> 
    <div class="mt-2 px-4 py-3"> 
        <div class="d-flex no-block flex-column"> 
            <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Quốc gia</div> 
            <div class="w-100">
                <select class="select-country" name="states[]" multiple="multiple" style="width: 100%"></select>
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
                <div class="w-100 d-flex no-block justify-content-between position-relative">
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
            <button type="button" class="btn-save btn btn-info ml-4">Lưu Thay Đổi</button>
        </div>
    </div>
</div>`;
}

function showPopupEdit(urlids) {
    Swal.fire({ 
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Thay đổi order</div>`,
        html: htmlEdit(),
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 700,
        position: "top",
        onOpen: () => {
            appendSelectCountry(); 

            $(".select2-selection").addClass("border").css("height","38px");
            $(".select2-dropdown.select2-dropdown--below").addClass("border");
            $(".swal2-popup").addClass("px-0 py-0"); 
            $(".swal2-title").addClass("mb-0 w-100"); 
            
            $(".btn-save").click(() => {
                let area = $(".select-country").val();
                let array_checked = arrayChecked("input[type=checkbox][name=source]");
                let mrate = $(".device-mobile span").text().trim().replace(/\D/g,"");
                let trafficSource = [];

                for (let i = 0; i < array_checked.length; i++) { 

                    let temp = {
                        type: (array_checked[i] == "Direct") ? "0" : (array_checked[i] == "Google") ? "2" : "1",
                        rate: $(`.ratio${array_checked[i]}`).text().trim().replace(/\D/g,""),
                        surl: (array_checked[i] == "Direct") ? "https://facebook.com" : (array_checked[i] == "Google") ? arr_keywords_google : "",
                    }
    
                    trafficSource.push(temp) 
                } 

                let post = {
                    area,
                    mrate,
                    trafficSource,
                    urlids
                }

                postData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=editOrderTraffic&userToken=${userToken}`,post).then(data => {
                    data = JSON.parse(data);  
                    console.log(data);
                })
                
            })
        }, 
    })
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
                <input id="input-keywords" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập từ khóa"/>
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
            console.log(obj_data)
            appendSelectTraffic(obj_data.dailyTraffic);
            appendSelectCountry(obj_data.area);
            appendSelectTimeMaxAndMin(obj_data.st);
            appendSelectSubPage(obj_data.subpage);
            appendSelectTimeRun(obj_data.timeToRun);

            $(".select2-selection").addClass("border").css("height","38px");
            $(".select2-dropdown.select2-dropdown--below").addClass("border");
            $(".swal2-popup").addClass("px-0 py-0"); 
            $(".swal2-title").addClass("mb-0 w-100"); 

        }, 
    })
}

function appendSelectTraffic(dailyTraffic) {
    for(let i = 1; i <= 10; i++) {
        $(".select-traffic").append(`<option ${(dailyTraffic != undefined && dailyTraffic == i*100) ? "selected" : ""} value="${i*100}">${i*100}</option>`);
    }

    $('.select-traffic').select2(); 
}

function appendSelectCountry(area) {
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

    if(area != undefined) {
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

function appendSelectTimeMaxAndMin(st) {
    for(let i = 1; i <= 90; i++) {
        if(i > 1) {
            $(".select-max").append(`<option ${(st != undefined && st.max == i*10) ? "selected" : (i == 6) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);   
        } 

        if(i != 90) {
            $(".select-min").append(`<option ${(st != undefined && st.min == i*10) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);
        }
    } 

    $('.select-max,.select-min').select2();

    $('.select-min').on('select2:select', function (e) {
        let min = +e.params.data.id; 
        let max = +$('.select-max').val(); 

        if(min >= max) { 
            $('.select-max').val(`${+min + 10}`).trigger('change');
        }

    });

    $(".select-max").on('select2:select', function (e) {
        let max = +e.params.data.id; 
        let min = +$('.select-min').val();
                
        if(max <= min) {
            $('.select-min').val(`${+max - 10}`).trigger('change');
        }
            
    });


}

function appendSelectSubPage(subpage) {
    for (let i = 1; i <= 3; i++) { 
        if(i == 1) {
            $(".select-min-page").append(`<option ${(subpage != undefined && subpage.minPage == i) ? "selected" : ""} value="${i}">${i} trang</option>`);
            $(".select-min-time").append(`<option ${(subpage != undefined && subpage.minTime == i*10) ? "selected" : ""} value="${i*10}">${i*10} s</option>`);
        
        } else {
            $(".select-max-page").append(`<option ${(subpage != undefined && subpage.maxPage == i) ? "selected" : (i == 3) ? "selected" : ""} value="${i}">${i} trang</option>`);
            $(".select-max-time").append(`<option ${(subpage != undefined && subpage.maxTime == i*10) ? "selected" : (i == 3) ? "selected" : ""}  value="${i*10}">${i*10} s</option>`);
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

function appendSelectTimeRun(timeToRun) {
    for (let i = 1; i <= 30; i++) {
        $(".select-time-run").append(`<option ${(timeToRun != undefined && timeToRun == i) ? "selected" : ""} value="${i}">${i} ngày</option>`);
    }

    $('.select-time-run').select2({
        placeholder: "Số ngày", 
    });

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

function htmlCost(data,timeToRun) {
    let vndPrice = data.data.vndPrice;
    let yourBank = data.data.yourBank;
    let day = timeToRun;
    let sumPrice = vndPrice*day;  

    return `<div class="text-left mt-2 d-flex align-items-center px-4 py-3 mb-5"> 
                <div class="w-100">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-bordered text-left"> 
                                    <tbody>
                                        <tr>
                                            <td class="font-gg font-13 font-weight-bold">Đơn giá 1 ngày</td>
                                            <td class="">
                                                <div class="d-flex no-block justify-content-center">
                                                    <span class="font-weight-500 font-17 font-gg text-primary">${numeral(vndPrice).format(0,0)}<sup class="font-12 font-gg" style="top: -15px;">vnd</sup></span>
                                                </div>    
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-gg font-13 font-weight-bold">Chi phí ${timeToRun} ngày</td>
                                            <td class="">
                                                <div class="d-flex no-block justify-content-center">
                                                    <span class="font-weight-500 font-18 font-gg text-danger">${numeral(sumPrice).format(0,0)}<sup class="font-12 font-gg" style="top: -15px;">vnd</sup></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-gg font-13 font-weight-bold">Ngân sách hiện tại</td>
                                            <td class="">
                                                <div class="d-flex no-block justify-content-center">
                                                    <span class="font-weight-500 font-19 font-gg text-info" style="font-size: 19px;">${numeral(yourBank).format(0,0)}<sup class="font-12 font-gg" style="top: -15px;">vnd</sup></span>
                                                </div>    
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-gg font-13 font-weight-bold">Ngân sách sau khi thanh toán</td>
                                            <td class="">
                                                <div class="d-flex no-block justify-content-center">
                                                    <span class="font-weight-500 font-gg text-success" style="font-size: 21px;">${numeral(yourBank - sumPrice).format(0,0)}<sup class="font-12 font-gg" style="top: -15px;">vnd</sup></span>
                                                </div>    
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="font-gg font-weight-500 text-muted font-13">
                            ${(yourBank >= sumPrice) ? "(*) sau khi thực hiện thanh toán nếu không thể thực hiện tăng traffic hệ thống sẽ bồi hoàn trả lại phí cho bạn !"
                            : "(*) số dư tài khoản không đủ. Vui lòng <a class='refill-money font-gg font-weight-bold font-14' href='javascript: void(0);'>nạp thêm tiền</a> để sử dụng dịch vụ này !"}</div>
                        </div>
                    </div>
                </div> 
            </div> 
            <div class="text-center border-top"> 
                <div class="d-flex justify-content-between px-4 py-4">
                    <a href="#" class="btn-back align-self-center btn btn-secondary font-14 font-weight-500 font-gg px-4">Quay
                        lại</a> 
                    <button type="button" ${(yourBank < sumPrice) ? "disabled" : ""} class="ml-auto btn-next btn-next-text align-self-center btn btn-primary font-14 font-weight-500 font-gg px-4">Thanh toán</button>
                </div>
            </div> `
}

function showPopupOrderSuccess(timeToRun, startTime, endTime) {
    Swal.fire({  
        type:"success",
        html: `<div class="font-gg font-15 text-dark font-weight-500">
                Bạn đã order traffic thành công, thời gian chạy là <span class="font-gg font-15 text-info font-weight-bold">${timeToRun} ngày</span>, bắt đầu từ <span class="text-danger font-gg font-15 font-weight-500">${moment(startTime).format("H:mm DD/MM/YYYY")} - ${moment(endTime).format("H:mm DD/MM/YYYY")}</span> !
            </div>`,
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500,
        position: "top",
        onOpen: () => { 
        }, 
        onClose: () => {
            location.reload();
        }
    })
}

function showPopupOrderError(msg) {
    Swal.fire({  
        type:"error",
        html: `<div class="font-gg font-15 text-dark font-weight-500">
                 ${msg} !
            </div>`,
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500,
        position: "top",
        onOpen: () => { 
        }, 
        onClose: () => {
            location.reload();
        }
    })
}

function showPopupActionSuccess(task) {
    Swal.fire({  
        type:"success",
        html: `<div class="font-gg font-15 text-dark font-weight-500">
                ${(task == "pauseRunTraffic") ? "Tạm dừng chiến dịch thành công !" : (task == "startRunTraffic") ? "Chạy chiến dịch thành công" : "Xóa chiến dịch thành công !"}
            </div>`,
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500,
        position: "top",
        onOpen: () => { 
        }, 
        onClose: () => {
            location.reload();
        }
    })
}

function showPopupActionError(task) {
    Swal.fire({  
        type:"error",
        html: `<div class="font-gg font-15 text-dark font-weight-500">
                ${(task == "pauseRunTraffic") ? "Lỗi hệ thống tạm dừng chiến dịch không thành công." : (task == "startRunTraffic") ? "Lỗi hệ thống chạy chiến dịch không thành công." : "Lỗi hệ thống xóa chiến dịch không thành công."}  Vui lòng thử lại !
            </div>`,
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500,
        position: "top",
        onOpen: () => { 
        }, 
        onClose: () => {
            location.reload();
        }
    })
}

function showPopupCost(obj_data,data,timeToRun) {
    Swal.fire({ 
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Chi Phí Mua Traffic</div>`,
        html: htmlCost(data,timeToRun),
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 700,
        position: "top",
        onOpen: () => {
            $(".swal2-popup").addClass("px-0 py-0"); 
            $(".swal2-title").addClass("mb-0 w-100"); 

            $(".refill-money").click(() => {
                showPopupRecharge();
            })
            
            $(".btn-back").click(() => {
                showPopupOrder(obj_data);
            })

            $(".btn-next").click(() => { 
                $(".btn-next-text").attr("disabled", "disabled").html(`<i class="fa fa-spin fa-spinner mr-2"></i> Đang xử lý`);

                postData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=orderNewTraffic&userToken=${userToken}`, obj_data).then(data => {
                    data = JSON.parse(data);
                    if(data.data.status == "Order traffic của bạn đã thực hiện hoàn tất. Bấm RUN để chạy tăng traffic") {
                        let obj = {
                            urlids: data.data.data.urlids,
                            timeToRun: data.data.data.timeToRun
                        }

                        return obj;
                    } else {
                        return {msg: data.data.msg}
                    }

                }).then(res => { 
                    if(res.urlids != undefined) {
                        let post = {
                            urlids: res.urlids,
                            etime: "1"
                        }
                        postData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=startRunTraffic&userToken=${userToken}`,post).then(data => {
                            data = JSON.parse(data);
                            if(data.data.status == "success") {
                                showPopupOrderSuccess(res.timeToRun, data.data.startTime, data.data.endTime);
                            } else {
                                showPopupOrderError(data.data.msg)
                            }
                        })
                    } else {
                        showPopupOrderError(res.msg)
                    }
                })  
            })
        }, 
    })
}

function htmlRecharge(price = "") {
    // <span class="text-danger font-gg font-weight-bold font-16 number-money"> 2,000,000<sup class="font-12 font-gg font-weight-none" style="top: -9px;">vnd</sup>
    return `<div class="px-4 pb-2"> 
                    <div class="text-center mt-0 content-vcb">
                        <div class="font-gg fontsize-14 font-weight-500 mb-3">
                            Tài khoản sẽ được nạp tiền tự động sau khi bạn chuyển khoản đến tài khoản
                        </div>
                        <div class="font-gg mb-1 pl-3">
                            <table class="table table-borderless table-sm">
                                <tbody><tr>
                                    <td>Số tài khoản: <span class="font-gg font-weight-bold">0071003773058</span></td>
                                    <td>Chủ tài khoản: <span class="font-gg">LÊ ĐẶNG HẢI NAM</span></td>
                                </tr>
                                <tr>
                                    <td>Ngân hàng: <span class="font-gg ">Vietcombank</span></td>
                                    <td>Chi nhánh: <span class="font-gg ">VCB Quận 10 Tp.HCM</span></td>
                                </tr>
                            </tbody></table>
                        </div>
                        <div class="font-gg pt-2">
                        <div class="mb-2">
                            Số tiền
                            <input maxlength="10" type="text" class="input-budget text-danger font-weight-bold form-control w-20 mx-2 font-14 font-gg" value="${(price != "") ? numeral(price).format("0,0") : "100,000"}" />
                            </span> VND với nội dung chuyển khoản như sau : (copy toàn bộ)</div>
                            <div id="coppy-code" class="w-35 m-auto text-info bg-white-2 px-3 py-2 font-weight-bold font-16" style="border: 1px #ccc dashed;"></div>
                        </div>
                    </div> 
                </div>`
}

function showPopupRecharge(price = "") {
    Swal.fire({ 
        title: `<div class="font-gg font-18 font-weight-bold ">Nạp Tiền Traffic</div>`,
        html: htmlRecharge(price),
        position: "top",
        confirmButtonText: "ĐÃ HOÀN TẤT CHUYỂN KHOẢN",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 600, 
        onOpen: () => {
            $(".input-budget").keyup(function() {
                let val = $(this).val();
                if (val.length >= 4) {
                    $(this).val(numeral(val).format("0,0"));
                    if(val.length >= 5) {
                        val = val.replace(/\,/g,""); 
                        getData(`//localapi.trazk.com/fff/user.php?task=getBankCodeBuyATool&userToken=${userToken}&price=${val}&toolName=buytraffic`).then(data => {
                            $("#coppy-code").text(data.data.msg);
                        })
                    }
                }
            }) 

            getData(`//localapi.trazk.com/fff/user.php?task=getBankCodeBuyATool&userToken=${userToken}&price=${(price != "") ? price : "100000"}&toolName=buytraffic`).then(data => {
                $("#coppy-code").text(data.data.msg);
            })  

        }, 
        preConfirm: async () => {
            await $.get(
                `//localapi.trazk.com/fff/user.php?task=checkPayment&invoiceId=${$("#coppy-code").text().trim()}&userToken=${userToken}`,
                function (res) {
                    res = JSON.parse(res);
                    if (res && res.data.status == "error") {
                        if (res.data.msg == "Waiting bank transation") {
                            Swal.showValidationMessage(
                                `Lỗi: Hệ thống chưa nhận được số tiền chuyển khoản của bạn.`);
                            $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                        } else if (res.data.msg == "wrong invoice amount and income amount") {
                            Swal.showValidationMessage(
                                `Lỗi: Số tiền chuyển khoản khác với số tiền yêu cầu thanh toán. Vui lòng liên hệ hỗ trợ viên`
                            );
                            $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                        } else if (res.data.msg == "invoice id error") {
                            Swal.showValidationMessage(`Lỗi: Mã chuyển khoản không hợp lệ`);
                            $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                        } else {
                            Swal.showValidationMessage(
                                `Lỗi: Hệ thông chưa nhận được chuyển khoản hoặc CID bị lỗi`);
                            $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
                        }
                    } else {
                        location.reload();
                    }
                })

            return [];
        }
        
    })
}

function showPopupAction(timeToRun, action,urlids) {
    Swal.fire({ 
        type: (action == "pause") ? "info" : (action == "active") ? "question" : "question",
        html: `<div class="font-gg font-15 text-dark font-weight-500">
                    ${(action == "pause") ? "Nếu bạn đừng chiến dịch, bạn có thể chạy lại ngay lập tức. Tuy nhiên chi phí ngày bạn dừng vẫn bị trừ !" 
                    : (action == "delete") ? "Chiến dịch này đã được tính phí, nếu bạn xóa hệ thống sẽ không hoàn trả phí đã tính. Bạn chắc chắn muốn xóa ?"
                    : "Bạn muốn chạy chiến dịch này ?"}
                </div>`,
        position: "top",
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500, 
        onOpen: () => {
          
        }, 
        preConfirm: async () => { 
            let task = (action == "pause") ? "pauseRunTraffic" : (action == "active") ? "startRunTraffic" : "removeRunTraffic";
            let post = {
                urlids,
                etime: "1"
            } 
            postData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=${task}&userToken=${userToken}`,post).then(data => {
                data = JSON.parse(data);
                if(data.data.status == "success") {
                    if(task == "startRunTraffic")
                        // showPopupOrderSuccess(timeToRun, data.data.startTime, data.data.endTime);
                        showPopupActionSuccess(task);
                    else {
                        showPopupActionSuccess(task);
                    }
                } else {
                    showPopupActionError(task);
                }
                
                
            })

            return [];
        },
    })
} 

async function postData(url,data) {
    return await $.post(url,data);
}

async function getData(url) {
    return await $.getJSON(url);
}

function renderTable() {
    // <i data-urlids="${val.urlids}" data-timetorun="${val.timeToRun}" class="delete fad fa-trash-alt font-16 text-danger cursor-pointer"></i>

    getData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=getListOrderTraffic&userToken=${userToken}`).then(data => {
        if(data && data.data) {

            data.data.forEach(val => {
                let websiteURL = val.websiteURL; 
                let websiteURLreplace = websiteURL;
                if(websiteURL.indexOf("http") != -1) {
                    websiteURLreplace = websiteURL.replace("http://", "");
                    websiteURLreplace = websiteURL.replace("https://", "");  
                }

                if(websiteURLreplace.indexOf("/") != -1) {  
                    websiteURLreplace = websiteURLreplace.slice(0,websiteURLreplace.indexOf("/")); 
                }

                $("#tableTraffic").append(`<tr data-urlids="${val.urlids}">
                                            <td class="font-gg font-14 font-weight-500">${moment(val.startTime).format("H:mm DD/MM/YYYY")}</td>
                                            <td class="font-gg font-14 font-weight-bold">${numeral(val.dailyTraffic).format("0,0")} IP</td>
                                            <td class="">
                                                <span class="position-relative text-dark font-gg font-15 font-weight-bold">                                        
                                                    ${numeral(val.vndPrice).format("0,0")}
                                                    <span class="position-absolute text-dark font-gg font-10 font-weight-500" style="top: -5px">
                                                        vnd
                                                    </span>
                                                </span>
                                            </td>
                                            <td class="font-gg font-15">
                                                <div class="font-gg text-dark font-weight-500" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;">
                                                    <a target="blank" href="${(websiteURL.indexOf("http") < 0) ? "https://" + websiteURL : websiteURL}">
                                                    <img class="mr-2" src="https://www.google.com/s2/favicons?domain=${websiteURLreplace}">
                                                    ${websiteURLreplace}
                                                    </a>
                                                    <a target="blank" href="${(websiteURL.indexOf("http") < 0) ? "https://" + websiteURL : websiteURL}"><i class="fal text-muted fa-external-link-square-alt ml-1"></i></a>

                                                </div>
                                            </td>
                                            <td class="font-gg font-15 text-center d-flex no-block">
                                                <span class="traffic-today rounded text-dark text-center font-14 font-weight-bold">
                                                    0
                                                </span>
                                                <a class="history font-gg font-14 ml-5" href="javascript: void(0);">Lịch sử</a>
                                            </td>
                                            <td class="">
                                                <span class="${(val.status == "INACTIVE") ? "bg-info" : (val.status == "EXPIRED") ? "bg-warning" : "bg-success"} px-2 py-1 rounded-pill font-gg font-10 font-weight-bold"> ${(val.status == "INACTIVE") ? "Chưa Chạy" : (val.status == "EXPIRED") ? "Hết Hạn" : "Đang Chạy"}</span>
                                            </td>
                                            <td class="font-gg font-14 font-weight-500">${moment(val.endTime).format("H:mm DD/MM/YYYY")}</td>
                                            <td class="font-gg font-15">
                                                ${(val.status == "INACTIVE") ? `<i data-urlids="${val.urlids}" data-timetorun="${val.timeToRun}" class="ml-2 active fad fa-play-circle font-20 text-info cursor-pointer"></i> ` : (val.status == "EXPIRED") ? `<i data-urlids="${val.urlids}" data-timetorun="${val.timeToRun}" class="ml-2 delete fad fa-trash-alt font-16 text-danger cursor-pointer"></i>` : `<i data-urlids="${val.urlids}" data-timetorun="${val.timeToRun}"  class="ml-2 pause fad fa-pause-circle font-20 text-success cursor-pointer"></i>`}
                                            </td> 
                                            <td class="font-gg font-15 d-none">
                                                <button type="buttom" data-urlids="${val.urlids}" class="edit btn btn-info py-1 px-2 font-13 font-weight-500 rounded ">Thay đổi</button>
                                            </td>
                                        </tr>`);
            })
    
            getTrafficToday("#tableTraffic");
    
            $(".pause").click(function() {
                let urlids = $(this).data("urlids");
                let timeToRun = $(this).data("timetorun");
                showPopupAction(timeToRun,"pause",urlids);
            })
    
            $(".active").click(function() {
                let urlids = $(this).data("urlids");
                let timeToRun = $(this).data("timetorun");
                showPopupAction(timeToRun,"active",urlids);
            })
    
            $(".delete").click(function() {
                let urlids = $(this).data("urlids");
                let timeToRun = $(this).data("timetorun");
                showPopupAction(timeToRun,"delete",urlids);
            })
    
            $(".edit").click(function() {
                let urlids = $(this).data("urlids"); 
                showPopupEdit(urlids);
            })
    
            $(".history").click(function() {
                let urlids = $(this).closest("tr").data("urlids");
                showPopHistory(urlids)
            })
        } else {
            $("#tableTraffic").append(`<tr><td class="font-gg font-14 text-center" colspan="9">Không có dữ liệu traffic, mau <a href="javascript:void(0)" class="font-gg font-weight-bold font-14 btn-submitOrder">mua traffic</a> để tăng traffic website của bạn !</td></tr>`);
        }
    })

}

function getTrafficToday(table) {
    getData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=getListOrderTrafficReal&userToken=${userToken}`).then(data => {
        data.data.urls.forEach(i => {
           $(table).find("tr").each(function() {
               if(i.urlid == $(this).data("urlids")) {
                   let traffic = 0;
                   i.tds.am.forEach(val => {
                        traffic +=val;
                   })
                   $(this).find(".traffic-today").text(traffic)
               }
           })
        })
    })
}

function showPopHistory(urlids) {
    Swal.fire({ 
        title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Lịch Sử Traffic</div>`,
        html: `<div id="getTrafficHistory" class="w-100 is-loading" style="height: 300px">

                </div>`,
        position: "top",
        confirmButtonText: "Xác Nhận",
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 900, 
        onOpen: () => {
            $(".swal2-popup").addClass("px-0 py-0"); 
            $(".swal2-title").addClass("mb-0 w-100"); 
            
            getTrafficHistory(urlids);
        }, 
    })
}

function renderChartBar(selector,dataChart) {
    let option = { 
        xAxis: {
            type : 'category',
            data: dataChart.keys,
            
            axisLabel: {						
                textStyle: {
                    color: '#797979',
                    
                },
                fontFamily: 'Arial',
                fontSize: 11,
                lineHeight:22,
                width:'100%',
                interval: 0,  
                formatter: function (value, index) {
                    return moment(value).format("DD/MM");
                }
            },
            
            axisLine: {
                show: false,
                lineStyle: {
                color: '#CCC'
                },
             },
        },
        yAxis: {
            type: 'value',
             axisLine: {
                show: false,
                lineStyle: {
                color: '#CCC'
                },
             },
        },
        tooltip: {
            trigger: "axis",
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(93,120,255,1)',
            borderWidth: 1,
            extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
            formatter: params => {
                let {
                    name
                } = params[0];
                let {
                    marker: mrkr1,
                    color: color1,
                    seriesName: name1,
                    value: val1
                } = params[0];

                name = moment(name).format('DD-MM-YYYY');
                val1 = numeral(val1).format('0,0'); 

                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${mrkr1} ${name1}: <span style="color:${color1};font-weight:bold">${val1}</span>
                </div>`;
            }
        },
        series: [{
            name: 'Traffic',
            data: dataChart.values,
            type: 'bar',
            itemStyle: {
                color: '#54a0ff',
                barBorderColor: '#54a0ff'
            },
            label: {
                show: true,
                position: 'top',
                color: '#54a0ff',
                formatter: function(params) {
                    return params.value.toLocaleString('en-US');
                },
            },
            // barMaxWidth: '55%'
        }]
    };

    let myChart = echarts.init(document.getElementById(selector));
    myChart.setOption(option);

    new ResizeSensor($(`#${selector}`), () => myChart.resize());

    $(`#${selector}`).removeClass("is-loading");
}

function getTrafficHistory(urlids) {
    getData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=getTrafficHistory&userToken=${userToken}&urlids=${urlids}`).then(data => {
        if(data.data.status == "success") {
            let dataChart = {
                keys: [],
                values: []
            }
            data.data.logs.forEach((items,index) => {
                if(index >= 16) {
                    let keys = items.date;
                    let values = 0;
                    if(items.am.length > 0) {
                        items.am.forEach(val => {
                            values += val;
                        })
                    }

                    dataChart.keys.push(keys);
                    dataChart.values.push(values);
                    }
            })
            
            renderChartBar("getTrafficHistory",dataChart);
        }
    })
}

function CheckIsValidDomain(domain) {
    var reg = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
    return domain.match(reg);
}

$(document).ready(() => {     
    renderTable();

    let obj_data = {};
    let arr_keywords_google = [];

    $(".btn-buy-now").click(function() {
        let price = $(this).data("price");
        showPopupRecharge(price)
    })

    $(".recharge").click(() => {
        showPopupRecharge();
    })

    postData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=getCostOfOrderTraffic&userToken=${userToken}`,"").then(data => {
        data= JSON.parse(data);
        $(".budget").text(numeral(data.data.yourBank).format("0,0"))
    }) 
    
    $("body").on("click",".btn-submitOrder", () => {
        showPopupOrder(obj_data);
    }) 

    $("body").on("click", ".btn-cost", () => { 
        let array_checked = arrayChecked("input[type=checkbox][name=source]");
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
            
        if(array_checked.length > 0 && area.length > 0 && websiteURL != "") {

            for (let i = 0; i < array_checked.length; i++) { 

                let temp = {
                    type: (array_checked[i] == "Direct") ? "0" : (array_checked[i] == "Google") ? "2" : "1",
                    rate: $(`.ratio${array_checked[i]}`).text().trim().replace(/\D/g,""),
                    surl: (array_checked[i] == "Direct") ? "https://facebook.com" : (array_checked[i] == "Google") ? arr_keywords_google : "",
                }

                trafficSource.push(temp) 
            } 

            obj_data = {
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
                startTime: moment().format('YYYY-MM-DD')
            }  

            postData(`//localapi.trazk.com/2020/api/buytraffic/index.php?task=getCostOfOrderTraffic&userToken=${userToken}`,obj_data).then(data => {
       
                data = JSON.parse(data);  
                showPopupCost(obj_data,data,timeToRun);
            })
            
        } else {
            if (websiteURL == "") {
                Swal.showValidationMessage(
                    `Lỗi: URL không hợp lệ !`);
                $(".swal2-validation-message").addClass("font-gg font-14 mt-2");
            } else if(area.length == 0) {
                Swal.showValidationMessage(
                    `Lỗi: Bạn vui lòng chọn quốc gia !`);
                $(".swal2-validation-message").addClass("font-gg font-14 mt-2");

            } else if(array_checked.length == 0) {
                Swal.showValidationMessage(
                    `Lỗi: Bạn vui lòng chọn nguồn truy cập !`);
                $(".swal2-validation-message").addClass("font-gg font-14 mt-2");

            } 
        }
    }) 

    $("body").on("change","input[type=checkbox][name=source]",function() {
        eventCheckbox($(this),arr_keywords_google);
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
        if(arr_keywords_google.length > 0) {  
            $(".modal-config").remove();
            $(".kt-checkbox").removeClass("bg-white").css("z-index","0");
            $(".config-rate").css("z-index","6");
        } else {
            $(".error-configGoogle").removeClass("d-none");
        }

    })

    $("body").on("click",".show-modal-config",function() {
        $(this).parent().append(htmlConfigGoogle(arr_keywords_google));
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
            if(!$(".error-configGoogle").hasClass("d-none")) {
                $(".error-configGoogle").addClass("d-none")
            }
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