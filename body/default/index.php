<div class="page-wrapper">
    <div class="container-fluid" style="padding-top: 0px!important;">
        <!-- <div class="page-content pt-4"> -->
        <div class="row">
          
            <div class="col-12">
                <div class="bg-white mt-4 px-4 py-3">
                    <div class="font-gg font-16 font-weight-bold">
                        CÔNG CỤ PHÂN TÍCH
                    </div>
                    <div class="font-gg font-14 text-muted">
                        Bộ Công Cụ Phân Tích - Ngọn Hải Đăng Giúp Bạn Dễ Dàng Xác Định Phương Hướng Trong Biến Rộng Digital Marketing
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="mt-4">
                    <div class="row" id="content-tool">
                        
                   
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>

<script>
$(document).ready(() => {

    let url = `//localapi.trazk.com/fff/tools.php?task=getToolByCategory&userToken=${userToken}&cat=1`;
    $.get(url, function(data) { 
        console.log(data);
        data = JSON.parse(data);   
        if(data.msg)
        {
            window.location.href = "https://admin.fff.com.vn/login.php";
        }
        
        let content = "";  

        data.data.forEach(async el => { 

            if(el.type == "FREE")
                el.type = "Miễn Phí";

            content = `<div class="col-12 col-lg-3 mb-4"> 
                            <div id="${el.name}" class="card text-left m-auto bg-white shadow-sm rounded cursor-pointer" data-href="${el.targetHref.replace("[userToken]",userToken)}">
                                <div class="text-right m-3 pb-3">
                                    <span
                                        class="px-2 py-1 rounded font-12 font-weight-bold font-gg text-info">${el.type}</span>
                                </div>
                                <div class="rounded-pill m-auto text-center d-flex no-block justify-content-center"
                                    style="width: 100px; height:100px; background-color: ${el.bgColor}"> 
                                        ${el.icon}
                                </div>
                                <div class="card-body m-auto">
                                    <div class="card-title text-center text-dark font-weight-500 font-gg font-18 text-capitalize">
                                        ${el.title}
                                    </div>
                                    <div class="des text-center font-14 font-gg text-muted mt-3" style="height: 40px">
                                        ${el.des}
                                    </div>
                                    <div class="mt-4 text-center d-flex no-block flex-row justify-content-center">
                                        <div class="d-none mr-5">
                                            <i class="fad fa-eye font-16 mr-1 align-self-center" style="color:#${el.color}"></i>
                                            <strong class="align-self-center font-gg font-weight-bold text-muted">${numeral(el.totalInstall).format("0,0")}</strong>
                                        </div>
                                        <div class="d-none">
                                            <i class="fad fa-bullseye-pointer font-16 mr-1 align-self-center" style="color:#${el.color}"></i>
                                            <strong class="align-self-center font-gg font-weight-bold text-muted">${numeral(el.totalClick).format("0,0")}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-3 mb-5">
                                    <a class="font-gg font-14 font-weight-bold ${el.buttonClass}" data-toggle="tooltip"
                                        data-placement="top" title="" href="${el.targetHref.replace("[userToken]",userToken)}" data-original-title="" style="padding: 15px 40px !important;">Trải Nghiệm <i
                                            class="font-weight-bold fal fa-angle-right"></i></a>
                                </div>
                            </div> 
                        </div>`; 
            
            await $("#content-tool").append(content); 
            $(`#${el.name} .rounded-pill`).find("i").addClass("align-self-center").css({
                "font-size": "30px",
                "color": `#${el.color}`
            });
 
        })  

        $("#content-tool div").click(function(){
            let location = $(this).data("href");
            if(location)
                window.location.href = location;
        })
    })



})
</script>