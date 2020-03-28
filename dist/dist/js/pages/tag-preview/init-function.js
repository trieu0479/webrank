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

function checkVIP(nameVip, nameUsed) {
    let url = `//localapi.trazk.com/fff/user.php?task=getUserVipV2&userToken=${userToken}`;
    getData(url).then(data => {
        data = JSON.parse(data);
        let isCurrentVip = data.data.isCurrentVip;
        isCurrentVip = 0;
        if (isCurrentVip && isCurrentVip == 1) {
            localStorage.setItem(nameUsed, 0);
            localStorage.setItem(nameVip, 1);
        } else {
            localStorage.setItem(nameVip, 0);

            if (!localStorage.getItem(nameUsed))
                localStorage.setItem(nameUsed, 0);
        }

        if (parseInt(localStorage.getItem(nameVip)) == 1) {
            $(".number").text("Không")
        } else {
            if (localStorage.getItem(nameUsed))
                $(".number").text(localStorage.getItem(nameUsed) + "/5")
        }


    })

}

function showUpVip() {

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
        footer: '<a target="_blank" href="https://admin.fff.com.vn/account/?view=user&action=payment-table">Tìm hiểu thêm về quyền lợi VIP</a>',
        showCloseButton: true,
        // showConfirmButton: false,
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
function showCLoseVip() {

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
        footer: '<a target="_blank" href="https://admin.fff.com.vn/account/?view=user&action=payment-table">Tìm hiểu thêm về quyền lợi VIP</a>',
        showCloseButton: false,
        // showConfirmButton: false,
        confirmButtonText: "Nâng VIP",
        focusConfirm: false,
        width: 450,
        padding: '1em',
        allowOutsideClick: "false", 
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
function showVip(check) {

    Swal.fire({
        // type: 'error',
        title: '<div class="font-gg font-18 font-weight-bold">Quyền lợi VIP</div>',
        html: `         
        <div class="pt-1 pb-3 m-auto font-16">
           Hãy <a target="_blank" href= "https://admin.fff.com.vn/account/?view=user&action=payment-table" class="text-info font-15 font-weight-500">nâng cấp VIP</a> để sử dụng tính năng này.
        </div>`,
        footer: '<a target="_blank" href="https://admin.fff.com.vn/account/?view=user&action=payment-table">Tìm hiểu thêm về quyền lợi VIP</a>',
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
                window.open("https://admin.fff.com.vn/account/?view=user&action=payment-table");
            })
        },
        onClose: () => {}
    })
}
let keywords = url.searchParams.get("keyword");
console.log(keywords);

const lang = url.searchParams.get("language") || url.pathname.split("/")[2];
const country =url.searchParams.get('country') ||  url.pathname.split("/")[2] 
function checkLimited() {
    $.get("//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=" +userToken +"&toolName=keywords", function( data1 ) {
        var x =JSON.parse(data1)               
          if (x.data.todayUsed>4) {
            showCLoseVip()
            return;                     
          }            
          else {
              var newURL = "index.php?view=keywords&action=keywords-sem&keyword=" + keywords + "&language=" + lang +'&country='+country;
              $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`,function(res){
                  console.log(res);           
                  
               })
              
            //   window.location.href = newURL;   
          }
        });         
}