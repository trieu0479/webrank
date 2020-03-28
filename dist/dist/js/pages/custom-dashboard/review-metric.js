var domain1 = url.searchParams.get("domain1");
var domain2 = url.searchParams.get("domain2");
var domain3 = url.searchParams.get("domain3");
var domain4 = url.searchParams.get("domain4");
var domain5 = url.searchParams.get("domain5");
var keywords1 = url.searchParams.get("keywords1");
var keywords2 = url.searchParams.get("keywords2");
var mangobject = [
    domain1,
    domain2,
    domain3,
    domain4,
    domain5,
    keywords1,
    keywords2
];
mangobject.forEach(ele => {
    console.log(ele)
    $('.input-group-2').append(`<div class="add-web-domain ${(ele == null) ? 'd-none' : ''}">
        <div class="bo-goc d-inline-flex">
            <span class="img-avatar d-flex align-items-center justify-content-center"> 
                <img src="http://www.google.com/s2/favicons?domain=${ele}" class="text-center" alt="" srcset="">
            </span>
            <div class=" domain-row d-flex flex-row" >
                <span style="opacity:.9;font-size:13px" class="font-gg">${ele}</span>
            </div>
        </div>
    </div>`)
});