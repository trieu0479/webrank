<a href="./index.php?view=website&action=index" class="position-relative text-white btn-clean btn"><i class="far fa-angle-left m-r-5"></i> Quay lại
</a>
<div class="row justify-content-center">
<div class="col-12 text-center maxWidthPc-800">
    <div class="h-100 px-md-5">
        <div class="font-gg font-weight-500 fontsize-16 text-success text-center">
        Website Traffic 
        </div>
        <div class="font-gg font-weight-400 fontsize-32 text-center">
        Công cụ Phân tích Traffic Website 
        </div>
        <? if ($action == "index"){?>
        <div class="font-gg text-muted font-14 text-center mt-2 font-weight-400">
        Nhập vào tên miền (domain) website cần phân tích, công cụ phân tích traffic sẽ cung cấp cho bạn mọi thông tin về website 
        </div>
        <?}?>
        <div class="text-center">
            <div class="input-group mt-5 w-100">
               
                <div class="input-group keywordSearchBox">
                    <input type="text" class="form-control ml-1 font-14 iptKeyword py-4 rounded mr-2" aria-label="Nhập tên miền website của bạn vào đây" value="<?php echo $_GET['domain']?>" placeholder="Nhập tên miền website của bạn vào đây">
                    <div class="input-group-append">
                        <button class="btnSubmitKeyword btn btn-success font-gg font-weight-500 rounded shadow-sm px-5" type="button"><i
                            class="far fa-layer-plus mr-2 font-13"></i>Tiếp tục</button>
                    </div>
                </div>
                <div class="nextpage pt-3">
                    <a href="javascript:;" class="text-box-catelog text-white text-004 SubmitCompare">So sánh 2 website</a>
                    <a href="?view=traffic-website&action=topsites" class="text-box-catelog text-white text-turquoise">Tổng hợp top website tại Việt Nam</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
$('body').on('click', '.btnSubmitKeyword', function() {
    let domain = $('.iptKeyword').val()
    window.location.href = `./index.php?view=website&action=overview&domain=${domain}`;
})
$('.iptKeyword').keypress(event => {
    if (event.which == 13) {
        let domain = $('.iptKeyword').val()
    window.location.href = `./index.php?view=website&action=overview&domain=${domain}`;
    }
})
</script>