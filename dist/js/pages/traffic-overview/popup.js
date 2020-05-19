import Select from "./select.js"; 


export default class Popup extends Select {

    constructor() {
        super();
    }

    showPopupAlert(type,text) {
        // type : success, error, warning, info, question !
        Swal.fire({
            type,
            title: text,
            showCloseButton: true,
        })
    }

    htmlOrder() {  
        return `<div class="text-left mb-3"> 
                    <div class="mt-2 px-4 py-3"> 
                        <div class="d-flex no-block flex-column"> 
                            <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Nền tảng</div> 
                            <div class="w-100 d-flex no-block">    
                                <select class="select-platform" style="width: 100%"></select>
                            </div>
                        </div>
                        <div class="d-flex no-block flex-column mt-4"> 
                            <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Gói dịch vụ</div> 
                            <div class="w-100 d-flex no-block">    
                                <select class="select-service" style="width: 100%"></select>
                            </div>
                        </div> 
                        <div class="d-flex no-block flex-column mt-4">    
                            <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">Mô tả</div> 
                            <div class="content-service border rounded px-3 py-3 w-100 ">
                                
                            </div>
                        </div>
                        <div class="edit-youtube mt-4">
                            <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">URL (dường dẫn 1 trang video bạn muốn tăng lượt xem(View))</div>
                                <input id="input-quality" value="" type="text" class="font-13 text-muted form-control" placeholder="Nhập vào ít nhất 1000 View"/>
                                <div class="font-gg d-flex no-block mt-1"><p class="text-warning font-12 mr-2">Ít nhất: 1000</p> | <p class="text-danger font-12 mx-2">Nhiều nhất: 20000</p> | <p class="text-success font-12 ml-2">Lợi tức thì: 1000</p></div>
                            </div>
                            <div class="text-left d-flex no-block flex-column">
                            <div class="align-self-center font-gg font-weight-bold mb-2 font-13 w-100">URL (dường dẫn 1 trang video bạn muốn tăng lượt xem(View))</div>
                            <input id="input-url" value="" type="text" class="font-13 text-muted form-control" placeholder="Url đường dẫn video trên Youtube"/>
                        </div>
                        <div class="d-flex no-block flex-column mt-0"> 
                            <div class="align-self-center font-gg font-weight-bold font-13 w-100 mb-2">Quốc gia</div> 
                            <div class="w-100">
                                <select class="select-country" name="states[]" multiple="multiple" style="width: 100%"></select>
                            </div>
                        </div>
                        <div class="mt-4 text-center"> 
                            <button type="button" class="btn-cost btn btn-info ml-4">Tính Chi Phí</button>
                        </div>
                    </div>
                </div>`;
    }

    showPopupOrder(type) {
        Swal.fire({
            title: `<div class="px-4 py-3 w-100 text-left font-gg font-weight-bold font-15 border-bottom">Mua lượng truy cập</div>`,
            html: this.htmlOrder(),
            showConfirmButton: false,
            showCloseButton: true,
            allowOutsideClick: false,
            width: 700,
            position: "top",
            onOpen: () => {
                this.selectService();
                this.selectCountry();
                this.selectPlatform();

                $(".select2-selection").addClass("border").css("height", "38px");
                $(".select2-dropdown.select2-dropdown--below").addClass("border");
                $(".swal2-popup").addClass("px-0 py-0");
                $(".swal2-title").addClass("mb-0 w-100");
    
            },
        })
    }
}