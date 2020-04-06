function htmlOrder() {
    return `<div class="text-left mb-3"> 
                <div class="px-3 py-3 font-gg font-weight-bold font-14 border">Mua traffic cho website</div>
                <div class="mt-3 px-3 py-3"> 
                    <div class="d-flex no-block">
                        <span class="align-self-center font-gg font-weight-bold font-14 d-block w-30">URL:</span>
                        <input id="input-name" value="" type="text" class="font-13 text-muted form-control" placeholder="domain chính hoặc 1 đường dẫn"/>
                    </div>
                    <div class="d-flex no-block mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-14 w-30">Traffic mỗi ngày: </div> 
                        <div class="w-100 d-flex no-block">    
                            <select class="select-traffic" style="width: 40%"></select>
                            <div class="align-self-center font-gg text-muted font-12 ml-2">*Nếu bạn cần thêm <span class="font-gg font-weight-bold font-13 text-muted">Traffic</span> mỗi ngày, vui lòng <a href="#">liên hệ</a></div>
                        </div>
                    </div>
                    <div class="d-flex no-block mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-14 w-30">Quốc gia: </div> 
                        <div class="w-100">
                            <select class="select-country" name="states[]" multiple="multiple" style="width: 100%"></select>
                        </div>
                    </div>
                    <div class="d-flex no-block mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-14 w-30">Thời gian xem trang: </div> 
                        <div class="w-100 d-flex no-block">
                            <select class="select-min" style="width: 17%"> 
                            </select>
                            <div class="text-center mt-1 align-self-center" style="width: 7%"> 
                            <i class="fad fa-wave-sine text-dark"></i>
                            </div>
                            <select class="select-min" style="width: 17%"> 
                            </select> 
                            <div class="font-12 text-muted ml-2 align-self-center font-gg font-gg">*Chi phí có thể thay đổi nếu bạn tăng thời gian xem trang</div>
                        </div> 
                    </div>
                    <div class="d-flex no-block mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-14 w-30">Nguồn truy cập: </div> 
                        <div class="w-100">
                            <div class="w-85 d-flex no-block justify-content-between">
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand font-gg font-weight-500 font-14 text-muted" for="checkbox-direct">
                                        <input class="" type="checkbox" id="checkbox-direct" name="source" value="direct">
                                        Trực tiếp
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand font-gg font-weight-500 font-14 text-muted" for="checkbox-google">
                                        <input class="" type="checkbox" id="checkbox-google" name="source" value="google">
                                        Google 
                                        <span></span>
                                    </label>
                                    <strong class="ml-1 rounded-pill px-2 py-1 bg-warning font-10 font-weight-500 font-gg">Từ khóa</strong>
                                </div>
                                <div>
                                    <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand font-gg font-weight-500 font-14 text-muted" for="checkbox-facebook">
                                        <input class="" type="checkbox" id="checkbox-facebook" name="source" value="facebook">
                                        Facebook
                                        <span></span>
                                        <strong class="ml-1 rounded-pill px-3 py-1 bg-info font-10 font-weight-500 font-gg">Tỉ lệ</strong>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex no-block mt-4"> 
                        <div class="align-self-center font-gg font-weight-bold font-14 w-30">Xem thêm trang con: </div> 
                        <div class="w-100 d-flex no-block">
                            <select class="select-page" style="width: 17%"> 
                                <option value=""></option>
                            </select>
                            <div class="text-center mt-1 align-self-center font-gg font-13 font-weight-500 text-muted" style="width: 15%"> 
                                mỗi trang
                            </div>
                            <select class="select-time" style="width: 17%"> 
                                <option value=""></option>
                            </select> 
                        </div> 
                    </div>
                    <div class="mt-5 text-center">
                        <button type="button" class="btn-save btn btn-success">Lưu cài đặt</button>
                        <button type="button" class="btn-cancel btn btn-info ml-4">Hủy cài đặt</button>
                    </div>
                </div>
            </div>`;
}

function showPopupOrder() {
    Swal.fire({
        html: htmlOrder(),
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 750,
        position: "top",
        onOpen: () => {
            appendSelectTraffic();
            appendSelectCountry();
            appendSelectTimeMaxAndMin();
            appendSelectPageAndTime();
            $(".select2-selection").addClass("border").css("height","38px");
            $(".select2-dropdown.select2-dropdown--below").addClass("border border-top-0");

            $(".swal2-popup").addClass("px-0 py-0");
            $(".swal2-header").addClass("d-none");

            $(".btn-save").click(() => {
                $(".swal2-confirm").click();
            })

            $(".btn-cancel").click(() => {
                $(".swal2-confirm").click();
            })
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
        $(".select-country").append(`<option value="${val.value}">${val.text}</option>`);
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

function appendSelectPageAndTime() {
    for (let i = 1; i <= 10; i++) { 
        $(".select-page").append(`<option value="${i}">${i} trang</option>`)
        $(".select-time").append(`<option value="${i*10}">${i*10} giây</option>`)
    }

    $('.select-page').select2({
        placeholder: "Số trang",
        allowClear: true
    });

    $('.select-time').select2({
        placeholder: "Số giây",
        allowClear: true
    });
}

function showPopopKeywords() {
    alert("google")
}

function showPopopRatio() {
    alert("facebook")
}

function eventCheckbox(this_) { 
    if($(this_).prop("checked")) {
        let val = $(this_).val();

        if(val == "google") {
            showPopopKeywords();
        } else if(val == "facebook") {
            showPopopRatio();
        }
    }
}


$(document).ready(() => { 
    
    $(".btn-submitOrder").click(() => {
      showPopupOrder();
    })

    $("body").on("change","input[type=checkbox][name=source]",function() {
        eventCheckbox($(this));
    }) 
  
})