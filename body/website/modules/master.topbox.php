<? if ($action != "index"){?>
<div class="mb-2 clearfix"><a href="<?=$rootURL?>" class="position-relative text-white btn-clean btn float-left"><i class="far fa-angle-left m-r-5"></i> Quay lại
</a></div>
<?}?>
<div class="row justify-content-center">
<div class="col-12 text-center maxWidthPc-800">
    <div class="h-100 px-md-5">
        <div class="font-gg font-weight-500 fontsize-16 text-success text-center">
        Website Traffic 
        </div>
        <div class="font-gg font-weight-400 fontsize-32 text-center">
        Công cụ Phân tích Traffic Website 
        </div>
        <div class="text-center extensionLogo">
            <a target="blank" href="https://chrome.google.com/webstore/detail/ph%C3%A2n-t%C3%ADch-%C4%91%E1%BB%91i-th%E1%BB%A7-website/bafckfijdjmflihjfdhaajjejcboaiaj"><img src="<?=$rootURL?>/dist/images/chrome-extension.png" class="mr-2"></a>
            <a target="blank" href="https://addons.mozilla.org/en-US/firefox/addon/website-analysis-tool/"><img src="<?=$rootURL?>/dist/images/firefox-extension.png" class="mr-2"></a>
            <a target="blank" href="https://microsoftedge.microsoft.com/addons/detail/pfbdckfkjpaedbflbhmdflfbihpcconf"><img src="<?=$rootURL?>/dist/images/edge-extension.png"></a>
        </div>

        <? if ($action == "index"){?>
        <div class="font-gg text-muted font-14 text-center mt-2 font-weight-400">
        Nhập vào tên miền (domain) website cần phân tích, công cụ phân tích traffic sẽ cung cấp cho bạn mọi thông tin về website 
        </div>
        <?}?>
        <div class="text-center">
            
            <div class="input-group mt-5 w-100">
               
                <div class="input-group keywordSearchBox">
                    <input type="text" class="form-control ml-1 font-14 iptWebsite py-4 rounded mr-2" aria-label="Nhập tên miền website của bạn vào đây" value="<?php echo $_GET['domain']?>" placeholder="Nhập tên miền website của bạn vào đây">
                    <div class="input-group-append">
                        <button class="btnCheckWebsite btn btn-success font-gg font-weight-500 rounded shadow-sm px-5" type="button"><i
                            class="fad fa-bolt mr-2 font-13"></i>Phân Tích</button>
                    </div>
                </div>
                <div class="nextpage pt-3">
                    <a href="<?=$rootDomain?>/top-website-vietnam" class="text-box-catelog text-white text-turquoise">Tổng hợp top website tại Việt Nam</a>
                    <a href="https://keywordplanner.vn" class="text-box-catelog text-white text-001">Phân tích từ khóa</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
$(document).ready(()=>{    
    function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

    $('body').on('click', '.btnCheckWebsite', function() {
        var domain = $('.iptWebsite').val();
        domain = extractHostname(domain);
        domain = domain.toLowerCase();
        window.location.href = `${rootURL}/rank/${domain}`;
    })
    $('.iptWebsite').keypress(event => {
        if (event.which == 13) {
        var domain = $('.iptWebsite').val();
        domain = extractHostname(domain);
        domain = domain.toLowerCase();
        window.location.href = `${rootURL}/rank/${domain}`;
        }
    })
});
</script>