$(document).ready(() => {
    Phantich();
    function Phantich(){
        console.log("load 30 page");
        var domainweb = $('#domain').val()
        if(domainweb === ''){
          domainweb = 'fff.com.vn'
          domainweb = domainweb.replace('', 'https://')
        }
        var phanTich = "//localapi.trazk.com/webdata/websiteapi.php?task=getLastAnalysisTable&limit=30&domain=" + domainweb;
        $.getJSON(phanTich, function (res) {
          var website = res.data.data
          console.log(website)
          for(var x=0; x < website.length; x++ ) {
            var web = ''
            web += `
                <div class="changeURL col-6 col-md-3">
                    <a href="?view=traffic-website&action=result&domain=${website[x].Domain}" class="d-flex pt-2 pb-2">
                        <div class="img">
                            <img src="${website[x].Favicon}" alt="">
                        </div>
                        <p class="ml-2">${website[x].Domain}</p>
                    </a>
                </div>
            `
            $("#phanTich").append(web)
          }
  
        });
    }
});