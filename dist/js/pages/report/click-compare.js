$(window).on('load',(event)=>{
    // $('.grid-stack').gridstack();   
    function show_toastr_success() {
        Command: toastr["success"](`Lưu toàn bộ danh sách thành công.`);
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "500",
            "timeOut": "2000",
            "extendedTimeOut": "500",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    
        $(".toast.toast-success").css({
            "background-color": "white",
            "border-left": "5px solid #00c292", //2BDE3F
            "color": "black",
        }).addClass("rounded");
    
        $("#toast-container>div").css("padding", "0px")
    
        $(".toast-success .toast-message").css({
            "color": "black",
            "padding": "15px 15px 15px 15px"
        }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: #00c292; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Lưu dữ liệu thành công.</span>`)
    }
    function show_toast_error() {
        Command: toastr["success"](`Lưu thất bại`);
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "500",
            "timeOut": "2000",
            "extendedTimeOut": "500",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    
        $(".toast.toast-success").css({
            "background-color": "white",
            "border-left": "5px solid red", //2BDE3F
            "color": "black",
        }).addClass("rounded");
    
        $("#toast-container>div").css("padding", "0px")
    
        $(".toast-success .toast-message").css({
            "color": "black",
            "padding": "15px 15px 15px 15px"
        }).addClass("d-flex").html(`<i class="mr-3 fas fa-check-circle" style="color: red; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Lưu thất bại</span>`)
    }
    function show_toastr_info() {
        Command: toastr["info"]("Đang lưu toàn bộ thông tin, vui lòng chờ...")
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
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    
        $(".toast.toast-info").css({
            "background-color": "white",
            "border-left": "5px solid #03a9f3", //1D72F3
            "color": "black",
        }).addClass("rounded");
    
        $("#toast-container>div").css("padding", "0px")
    
    
        $(".toast-info .toast-message").css({
            "color": "black",
            "padding": "15px 15px 15px 15px" //fad fa-info-circle
        }).addClass("d-flex").html(`<i class="mr-3 fas fa-info-circle" style="color: #03a9f3; font-size: 24px"></i><span class="align-self-center font-gg font-13 text-muted">Đang lưu toàn bộ thông tin, vui lòng chờ...</span>`)
    }
    $('body').on('click', '.similarRemove', function() {    
        // $(this).parent().parent().parent().parent().parent().remove();
        var grid = $('.grid-stack').data('gridstack'),
        el = $(this).closest('.grid-stack-item')
        grid.remove_widget(el);
    })
    $('body').on('click','.remove__chart', function() {       
        $(this).parent().parent().parent().parent().parent().parent().remove();
    })
    var luukey;
    $('body').on('click', '#saveLink', ()=> {  
        let url=new URL(location.href);
        let key = url.searchParams.get("key");
        show_toastr_info();
        var posts = {};
        var vitri= [];
        $(".grid-stack-item").each(function( index ) {
            var post={};            
            post.task = $(this).attr("data-task")
            post['gs-x'] = $(this).attr("data-gs-x")
            post['gs-y'] = $(this).attr("data-gs-y")
            post['gs-width'] = $(this).attr("data-gs-width")
            post['gs-height'] =$(this).attr("data-gs-height")
            vitri.push(post);                       
        });
        var coppy_title = $('.coppy_titles').text();
        var coppy_date = $('.coppy_date').text();
        var coppy_url = $('#imagePreviewContactForm').attr('data-url');
        var urlParameters = url.search
        var postreport = {};
        postreport.reportName = coppy_title
        postreport.reportDes = coppy_date
        postreport.reportLogo=coppy_url
        postreport.urlParameters=urlParameters
        posts.report=postreport;
        posts.data=vitri;
        console.log(urlParameters);
        if(!key){
            $.post(`//localapi.trazk.com/report/index.php?userToken=${userToken}&task=insertReport`,posts, function(res){
                var parse = JSON.parse(res);
                if (parse.data.status == "Exist" || parse.data.status == "Error"  ) {
                    show_toast_error();
                }
                else {
               show_toastr_success();
                }
            })
        }else{
            $.post(`//localapi.trazk.com/report/index.php?userToken=${userToken}&task=editReport&key=${key}`,posts, function(res){
                var parse = JSON.parse(res);
                if (parse.data.status == "Exist" || parse.data.status == "Error"  ) {
                    show_toast_error();
                }
                else {
               show_toastr_success();
                }
            })
        }   
        
    })
    // function getonLoad() {
    //     var posts = new Array(); 
    //     $(".grid-stack-item").each(function(index ) {
    //         console.log('index',index);        
    //         var post = {};
    //         post.task = $(this).attr("data-task")
    //         post['gs-x'] = $(this).attr("data-gs-x")
    //         post['gs-y'] = $(this).attr("data-gs-y")
    //         post['gs-width'] = $(this).attr("data-gs-width")
    //         post['gs-height'] = $(this).attr("data-gs-height")
    //         posts.push(post);
    //         console.log('posts',posts);
            
    //     });
    //     $.post(`//localapi.trazk.com/report/index.php?task=saveReport&userToken=${userToken}`,{data: posts},function(res){
    //         console.log('res',res);
    //         // console.log(res.data);
    //         var parseRes=JSON.parse(res).data;
    //         console.log('hh',(parseRes.reportKey));
    //         luukey=((parseRes.reportKey));
    //         console.log('luu key',luukey);
       
    // }) 
    // } 
    
    function openInNewTab(url) {
        var win = window.open(value, '_blank');
        win.focus();
      }
    
    $('body').on('click', '#shareLink', ()=> {
        // if (luukey) {
        let test = new URL(window.location.href);
        value = test.href + `&clear=learScript`;
        console.log('dsd',value)
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove(); 
        openInNewTab(value);
    
    })
   //edit title 
   $('#custom_title').click(() => {
    Swal.fire({
        padding: `0`,
        width: 600,
        showConfirmButton: false,
        showCloseButton: true,
        html: `
        <div class="Swal-header" style="padding: 20px; text-align: left; border-bottom: 1px solid #f0f2f4;">
            <h3 class="text-uppercase font-weight-bold font-14 coppy_title">Nhập để thay đổi title</h3>
        </div>
        <form>
            <div class="form-group text-left">
                <label>Tiêu Đề</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group text-left">
                <label>Ngày Lưu</label>
                <input type="text" style="background: #fff;" class="form-control flatpickr flatpickr-input" id="rangeDate">
            </div>
            <div class="form-group text-left">
                <label>Hình ảnh</label>
                <div class="icon-premium-uploadAvaChatBot" style="position: relative;">
                    <input type="file" id="imageUploadBackGroundcontactform" class="form-control" accept="image/*" /> 
                    <label for="imageUploadBackGroundcontactform" class="imageUploadBackGroundcontactform"><i class="fal fa-edit upload-edit-icon"></i></label> 
                </div> 
            </div>
            <button type="button" class="btn-submit-data show-swal-cid" id="submit_custom">Thay đổi</button>
      </form>`,
        onOpen: () => {
            $("#rangeDate").flatpickr({
                locale: "vn",
                enableTime: true,
                dateFormat: "d/m/Y",
            })
            function readURLBackGroundImages(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('#imagePreviewContactForm').css('background-image', 'url(' + e.target.result + ')');
                        $('#imagePreviewContactForm').hide();
                        $('#imagePreviewContactForm').fadeIn(650);
                        var $data = {
                            'file': e.target.result
                        };
                        $.ajax({
                            type: 'POST',
                            url: 'https://f.trazk.com/userfiles/upload.php',
                            data: $data,
                            success: function (response) {
                                response = JSON.parse(response);
                                console.log(response)
                                $('#imagePreviewContactForm').css('background-image', 'url(' + response.url + ')');
                                $('#imagePreviewContactForm').attr(`data-url`,`${response.url}`);
                                // $('#imagePreviewContactForm').hide();
                                // $('#imagePreviewContactForm').fadeIn(650);
                                // contentDefaults['content_contact_form_background_image'] = response.url;
                                // WidgetUtils.changeValueIframe(contentDefaults);
                                // WidgetUtils.updateConfig($widgetType, 'pending', $userToken, $website, configDefaults, contentDefaults);
                            },
                            error: function(response) {
                            },
                        });
            
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            $("#imageUploadBackGroundcontactform").change(function() {
                readURLBackGroundImages(this);
            });

            $('#submit_custom').click(function () {
                let title = $('#title').val()
                let date = $('#rangeDate').val()
                let coppy_title = $('.coppy_titles').text()
                let coppy_date = $('.coppy_date').text()
                $('#custom_slect').html(`
                    <h3 class="text-uppercase font-weight-bold font-14 coppy_titles">${($('#title').val()!='') ? title : coppy_title}</h3>
                    <div class="date">
                        <span class="text-muted coppy_date">${($('#rangeDate').val()!='') ? date : coppy_date}</span>
                    </div>`)
                $(".swal2-cancel").click()
            })
        }
    })
})



})

