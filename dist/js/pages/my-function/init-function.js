async function getData(url) {
    return await $.get(url);
}

function removeClass(selector, className) {
    $(selector).removeClass(className);
}

function addClass(selector, className) {
    $(selector).addClass(className);
}

function addClassParent(selector, className, numberParent = 1) {

    if(numberParent == 1) {
        $(selector).parent().addClass(className);
    }
    
    if(numberParent == 2) {
        $(selector).parent().parent().addClass(className);
    }

    if(numberParent == 3) {
        $(selector).parent().parent().parent().addClass(className);
    } 
}

function removeClassParent(selector, className, numberParent = 1) {

    if(numberParent == 1) {
        $(selector).parent().removeClass(className);
    }
    
    if(numberParent == 2) {
        $(selector).parent().parent().removeClass(className);
    }

    if(numberParent == 3) {
        $(selector).parent().parent().parent().removeClass(className);
    } 
}

function getText(selector) {
    return $(selector).text().trim();
}

function getVal(selector) {
    return $(selector).val().trim();
}

function inputHtml(selector,html) {
    $(selector).html(html);
}

function inputText(selector,text) {
    $(selector).text(text);
}

function inputVal(selector,val) { 
    $(selector).val(val);  
}

async function checkVIP(toolName) {
    let url = `//localapi.trazk.com/fff/user.php?task=getUserVipV2&userToken=${userToken}`;
    return await getData(url).then(async data => {
        data = JSON.parse(data);
        let isCurrentVip = data.data.isCurrentVip;
        isCurrentVip = 0;
        if (isCurrentVip && isCurrentVip == 1) {
            $(".number").text("Không");
            return "";
        } else {   
            return await Promise.resolve(checkLimitByToolname(toolName));  
        }  

    })

}

async function checkLimitByToolname(toolName) {

    return await getData(`//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=${userToken}&toolName=${toolName}`).then(res => {
        res = JSON.parse(res);
        let todayUsed = res.data.todayUsed;
        let limit = res.data.limit; 
        $(".number").text(todayUsed + "/" + limit); 
        
        let obj = {
            todayUsed,
            limit
        };

        return obj;
    })
} 

function showUpVip(check) {

    Swal.fire({
        type: 'error',
        title: '<div class="font-gg font-18 font-weight-bold">Quyền lợi VIP</div>',
        html: ` 
        <div class="m-auto"> 
            Bạn đã dùng hết giới hạn. 
        </div> 
        <div class="pt-3 pb-3 m-auto font-16">
            Vui lòng <a href= "https://admin.fff.com.vn/account.php?view=payment&action=vip_payment" class="text-info font-15 font-weight-500">nâng cấp VIP</a> để sử dụng tính năng này.
        </div>`,
        footer: '<a target="_blank" href="https://admin.fff.com.vn/account/?view=user&action=payment-table">Tìm hiểu quyền lợi VIP</a>',
        showCloseButton: check == "1" ? false : true,
        allowOutsideClick: check == "1" ? false : true, 
        confirmButtonText: "Nâng VIP",
        focusConfirm: false,
        width: 450,
        padding: '1em',
        showClass: {
            popup: 'animated fadeInDown fast'
        },
        hideClass: {
            popup: 'animated fadeOutUp fast'
        },
        onOpen: () => {
            $(".swal2-confirm").parent().addClass("mt-0");
            $(".swal2-confirm").click(() => {
                window.open("https://admin.fff.com.vn/account.php?view=payment&action=vip_payment");
            })
        },
        onClose: () => {}
    })
}

function formatCid(cid) {
    // xxx-xxx-xxxx  

    cid = cid.toString();

    let temp_1 = cid.slice(0,3);
    let temp_2 = cid.slice(3,6);
    let temp_3 = cid.slice(6);   

    return temp_1 + "-" + temp_2 + "-" + temp_3; 
}    

function formatMoneyVND(number) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'VND'
    }).format(number)
}
