export default class ClassFuncs { 

    constructor() {
        this.url = new URL(location.href);
        this.view = this.url.searchParams.get("view"); 
        this.action = this.url.searchParams.get("action");
        this.website = (this.url.searchParams.get("website")) ? this.url.searchParams.get("website") : ""; 
        this.sumPrice = 0;
    } 

    // function set
    setAction(action) {
        this.action = action;
    }

    setSumPrice(sumPrice) {
        this.sumPrice = sumPrice;
    }

    setSession(name,value) {
        sessionStorage.setItem(name, value);
    }

    // function get
    getUrl() {
        if(this.checkIsValidDomain(this.website)) 
            return `/?view=digital-marketing&action=${this.action}&website=${this.website}`
        else    
            return `/?view=digital-marketing&action=${this.action}`
    }

    getWebsite() {
        if(this.website.indexOf("http") < 0) {
            return "https://" + this.website;
        } else {
            return this.website;
        }
    }

    getVal(selector) {
        return $(selector).val();
    }

    getSession(name) {
        return sessionStorage.getItem(name);
    }

    getSumPrice(sumPrice) {
        return this.sumPrice;
    }

    //
    location() {
        window.location.href = this.getUrl();
    }


    // function isvalidate
    checkIsValidDomain(domain) {
        var reg = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
        return domain.match(reg);
    }

    checkIsValidPhone(phone) {
        var reg = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        return phone.match(reg);
    }

    checkIsValidEmail(email) { 
        var reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return email.match(reg);
    }

    //fuction html popup
    htmlPopupRecharge(price = "") {
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
                                <span class="text-danger font-gg font-weight-bold font-16 number-money">${numeral(price).format("0,0")}<sup class="font-12 font-gg font-weight-none" style="top: -9px;">vnd</sup></span>
                                </span> với nội dung chuyển khoản như sau : (copy toàn bộ)</div>
                                <div id="coppy-code" class="w-35 m-auto text-info bg-white-2 px-3 py-2 font-weight-bold font-16" style="border: 1px #ccc dashed;"></div>
                            </div>
                        </div> 
                    </div>`
    }

    // function popup
    showPopupError(text) {
        Swal.fire({
            type: 'error',
            title: text,
            showCloseButton: true,
        })
    }

    showPopupRecharge(price) {
        Swal.fire({ 
            title: `<div class="font-gg font-18 font-weight-bold ">Thanh Toán</div>`,
            html: this.htmlPopupRecharge(price),
            position: "top",
            confirmButtonText: "ĐÃ HOÀN TẤT CHUYỂN KHOẢN",
            showConfirmButton: true,
            showCloseButton: true,
            allowOutsideClick: false,
            width: 600, 
            onOpen: () => { 
                this.getData(`//localapi.trazk.com/fff/user.php?task=getBankCodeBuyATool&userToken=${userToken}&price=${(price != "") ? price : "100000"}&toolName=buytraffic`).then(data => {
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
     
    // function renderTable

    renderTableTool(obj) {
        let sumPrice = 0; 
        obj.forEach(val => {
            let checked_tool = +this.getSession(val.nameTool);

            $(".table-tool").append(`<tr>
                                    <td class="text-center">
                                        <label class="pl-3 kt-checkbox kt-checkbox--bold kt-checkbox--brand"
                                            for="${val.id}">
                                            <input class="fff-tool" type="checkbox" id="${val.id}"
                                                name="tool" value="${val.id}" ${(checked_tool == 1) ? "checked" : ""}>
                                            <span></span>
                                        </label>
                                    </td>
                                    <td class="font-gg font-14 font-weight-500">
                                        ${val.name}
                                        ${(val.id == "FFFgoogle-ads") ? `<br/><span class="font-13 font-gg text-muted">*số tiền này được nạp vào tài khoản Google Ads</span>` : ""}
                                    </td>
                                    <td class="" style="vertical-align: middle;">
                                        <div class="d-flex no-block justify-content-center">
                                            <span class="font-weight-500 font-16 font-gg">${numeral(val.price).format("0,0")}<sup
                                                    class="font-12 font-gg"
                                                    style="top: -15px;">vnd</sup>
                                            </span>
                                        </div>
                                    </td>
                                </tr>`);
            
            if(checked_tool == 1) {
                sumPrice += val.price;
            }
        })

        this.setSumPrice(sumPrice);

        $(".table-tool").append(`<tr>
                                    <td></td>
                                    <td class="font-gg font-14 font-weight-500">Tổng phí</td>
                                    <td class="">
                                        <div class="d-flex no-block justify-content-center">
                                            <span class="font-weight-500 font-16 font-gg sum-price">${numeral(sumPrice).format("0,0")}<sup
                                                    class="font-12 font-gg"
                                                    style="top: -15px;">vnd</sup></span>
                                        </div>
                                    </td>
                                </tr>`);

    }
    
    //function get api
    
    async getData(url) {
        return await $.getJSON(url);
    }

    async getUserWebsites() {
        return await this.getData(`//localapi.trazk.com/fff/user.php?task=getMySupporter&userToken=${userToken}`).then(data => {
            return data.data.data;
        })
    }

    
    // function event

    checkedTool(this_, obj) {
        let sumPrice = 0;

        obj.forEach(i => {
            $(".fff-tool").each(function () {
                if($(this).prop("checked")) {
                    let val = $(this).val();
                    if(i.id == val) { 
                        sumPrice += i.price;
                    }
                }
            })
        })

        this.setSumPrice(sumPrice);
        $(".sum-price").html(numeral(sumPrice).format("0,0") + `<sup class="font-12 font-gg" style="top: -15px;">vnd</sup>`);
    } 

    eventCheckbox(this_,obj) { 
        this.checkedTool(this_,obj);
    }

}  
  

