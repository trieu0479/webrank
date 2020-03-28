function show_toastr_info() {
    Command: toastr["info"]("Không có dữ liệu")
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "2000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
    }

    $(".toast.toast-info").css({
        "background-color": "white",
        "border-left": "5px solid red", //1D72F3
        "color": "black",
    }).addClass("rounded");

    $("#toast-container>div").css("padding", "0px")


    $(".toast-info .toast-message").css({
        "color": "black",
        "padding": "15px 15px 15px 15px" //fad fa-info-circle
    }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: red; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Không có dữ liệu</span>`)
}
$.get(`//localapi.trazk.com/report/index.php?task=getAllReport&userToken=${userToken}`,function(data){
    var data = JSON.parse(data)
    var Dashboards = data.data
    if(Dashboards != null){
        Dashboards.forEach((ele,index) => {
            $('#show_dropdown').append(`
            <div data-key="${ele.reportKey}" class="d-flex align-items-center justify-content-between wiper-Dashboards" style="color: #666;padding: 10px 20px;">
                <a href="${ele.urlParameters}&key=${ele.reportKey}">
                    <div class="title-show d-flex align-items-center justify-content-between">
                        <div class="box-show-img">
                            <img src="${ele.reportLogo}" alt="">
                        </div>
                        <div class="conten-show ml-3">
                            <h4 style="font-size:15px">${ele.reportName}</h4>
                            <span style="font-size:9px">${ele.insertTime}</span>
                        </div>
                    </div>
                </a>
                <i class="fad fa-times-circle removeDashboards"></i>
            </div>
            `)
        });
        $('.custom-dropdown .title-dropdown').click(function() {
            if ($(this).next().is(':hidden') === true) {
              $(this).next().slideDown('slow')
              $(this).addClass('active')
            } else {
              $(this).next().slideUp('slow')
              $(this).removeClass('active')
            }
        })
    }else{
        $('.custom-dropdown .title-dropdown').click(function() {
            show_toastr_info()
        })
    }
})
$(document).ready(function() {
    $('body').on('click', '.removeDashboards', function(){
        let key = $(this).parent().attr('data-key')
        $(this).parent().remove()
        $.post(`//localapi.trazk.com/report/index.php?userToken=${userToken}&task=removeReport&key=${key}`, function(res){
        })
    })
})