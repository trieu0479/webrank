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
        <div class="font-gg text-muted font-14 text-center mt-4 font-weight-400">
        Nhập vào tên miền website cần phân tích, công cụ sẽ phân tích các kênh quảng cáo của website và ước tính số khách hàng truy cập website từ những nguồn đó
        </div>
        <?}?>
        <div class="text-center">
            <div class="input-group mt-5 w-100">
                <!-- <div class="input-group-prepend w-100" style="position: relative;">
                    <input id="input-submit" type="text" value="<?php echo $_GET['domain']?>"
                        class="p-10 font-14 font-gg w-100 border"
                        autocomplete="off"
                        placeholder="Nhập tên miền website của bạn vào đây">
                     <div class="input-group-append">
                        <button class="btnSubmitKeyword btn btn-success font-gg font-weight-500 rounded shadow-sm" type="button"><i
                            class="far fa-layer-plus mr-2 font-13"></i>Tiếp tục</button>
                    </div>   

                    <div id="selectWebsiteScrollbar" class="selectWebsite bg-white d-none flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: calc(100% - 120px); bottom: 0; transform: translateY(100%);">
                    </div>
                </div> -->
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