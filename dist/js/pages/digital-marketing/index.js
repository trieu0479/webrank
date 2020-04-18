function checkIsValidDomain(domain) {
    var reg = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
    return domain.match(reg);
}

function showPopupError() {
     Swal.fire({  
        type:"error",
        html: `Lỗi website không hợp lệ, vui lòng thử lại !`,
        confirmButtonText: "Xác Nhận",
        showConfirmButton: true,
        showCloseButton: true,
        allowOutsideClick: false,
        width: 500,
        position: "top",
        onOpen: () => { 
        }, 
    })
}


$(document).ready(() => {

    $(".input-submit").keypress(function(e) {
        let val = $(this).val();
        if(e.which == 13) {
            $(".btn-submit").click();
        }  
    })

    $(".btn-submit").click(() => {
        let val = $(".input-submit").val();
        if(checkIsValidDomain(val)) {
            window.location.href = "/?view=digital-marketing&action=contact";
        } else {
            showPopupError();
        }
    });



})