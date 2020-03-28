var min = 0;
var max = 1;
var currentPage = 1;
var numberPage;
var arr_data = [];   

getData(`//localapi.trazk.com/fff/quangcao.php?task=getLogByToolName&userToken=${userToken}&toolName=WebsiteTraffic`)
    .then(data => {
        console.log()
        data = JSON.parse(data); 
        let logs = data.data.logs; 
        if (logs) {
            pagiNation(logs);
            insertTable(logs);
            removeClass(".content-table", "d-none")
            clickSeeReport();
        } else
            $(".number").text(`0/5`);
    })

function clickSeeReport() {
    $(".result").click(function() {
        sessionStorage.setItem('website', $(this).data("domain").trim());
        window.location.href =
            `/?view=analyze-competitor&action=result&website=${$(this).data("domain").trim()}`;
    })
}

function pagiNation(data) {
    let pageActive = getText(".page-item.active");
    if (getText("#table-content-ads") == "") {
        min = 0;
        max = 1;
        currentPage = 1;
        pageActive = 1;
    }

    numberPage = Math.ceil(data.length / 10);

    let content = `<li class="page-item ${(numberPage) == 1 ? "done" : ""}">
                        <span class="previousPage page-link">Trước</span>
                    </li>`;
    if (pageActive) {
        for (let i = 1; i <= numberPage; i++) {
            content += `<li class="page-item ${(i==pageActive) ? "active" : ""}">
                            <a class="page-link" href="javascript:void(0);" data-page="${i}">${i}</a>
                        </li>`;
        }
    } else {
        for (let i = 1; i <= numberPage; i++) {
            content += `<li class="page-item ${(i==pageActive) ? "active" : ""}">
                            <a class="page-link" href="javascript:void(0);" data-page="${i}">${i}</a>
                        </li>`;
        }
    }


    content += `<li class="page-item ${(numberPage) == 1 ? "done" : ""}">
                        <a class="nextPage page-link" href="javascript:void(0);">Sau</a>
                    </li>`

    if (numberPage >= 2) {
        $(".pagination").html(content);
        if (numberPage == 2) {
            $(".previousPage").parent().addClass("disabled d-none");
            $(".nextPage").parent().addClass("disabled d-none");
        } else if (numberPage > 2) {
            $(".previousPage").parent().addClass("disabled").removeClass("d-none");
            $(".nextPage").parent().removeClass(" d-none");
        }
    } else {
        $(".pagination").html("");
    }

    arr_data = data;
    clickPage();
    insertTable(arr_data);
}

function clickPage() {

    $(".page-link").click(function() {
        removeClass(".page-item", "active");

        if ($(this).hasClass("nextPage")) {

            $(".page-item").each(function(i) {
                if (i == currentPage && i < numberPage) {
                    currentPage = currentPage + 1;
                    return false;
                }
            })


            $(".page-item").each(function(i) {
                if (i == currentPage && i <= numberPage) {
                    $(this).addClass("active")
                }
            })

        } else if ($(this).hasClass("previousPage")) {

            $(".page-item").each(function(i) {
                if (i == currentPage && i <= numberPage) {
                    currentPage = currentPage - 1;
                    return false;
                }
            })


            $(".page-item").each(function(i) {
                if (i == currentPage && i <= numberPage) {
                    $(this).addClass("active")
                }
            })

        } else {
            $(this).parent().addClass("active");
            currentPage = $(this).data("page");
        }

        if (currentPage != 1) {
            $(".previousPage").parent().removeClass("disabled").addClass("cursor-pointer");
            if (currentPage == numberPage) {
                $(".nextPage").parent().addClass("disabled");
            } else {
                $(".nextPage").parent().removeClass("disabled");
            }
        } else {
            $(".previousPage").parent().addClass("disabled").removeClass("cursor-pointer");
            $(".nextPage").parent().removeClass("disabled");
        }


        min = currentPage - 1;
        max = currentPage;
        $("#table-content-ads").html("");
        insertTable(arr_data);
    })
}

function nextPage() {
    $("#nextPage").click(() => {
        removeClass(".page-item", "active");
        $(".page-item").each(function(i) {
            if (i == currentPage) {
                alert("das")
                addClass(this, "active")
            }
        })
    })
}

function previousPage() {
    $("#previousPage").click(() => {
        removeClass(".page-item", "active");
    })
}

function insertTable(data) {
    console.log(data)
    if (data.length > 0) { 
        $("#table-content-ads").html("");
        let stt = 1;
        data.forEach((val, i) => {
            let count = i + 1;
            if (count >= min * 10 + 1 && count <= max * 10) {
                stt++;
                $("#table-content-ads").append(`
                <tr class="${stt % 2 == 0 ? "odd" : "even"}">
                    <td scope="row">${count}</td>
                    <td><a data-domain='${val.logData}' href="./?view=website&action=overview.v1&domain=${val.logData}"
                            class="align-self-center font-gg font-14">${val.logData}</a>
                    </td>
                    <td>${moment(val.insertDate).format("H:mm DD/MM/YYYY")}</td>
                    <td>
                        <a data-domain='${val.logData}' href="./?view=website&action=overview.v1&domain=${val.logData}" class="bg-primary rounded-pill text-white px-3 py-2 font-13 cursor-pointer"><i
                                class="fad fa-eye text-white mr-2 font-14 font-weight-bold"></i>Xem
                            kết quả</a>
                    </td>
                    <td>
                        <span class="delete-ads" data-domain='${val.logData}' data-id=${val.logId}>
                            <i class="fad fa-trash cursor-pointer font-14"></i> 
                        </span>
                    </td>
                </tr>`);
            }
        })
    } else {
        addClass(".content-table", "d-none");
    }
}

function spliceArr_data(data, logId) { 
    data.forEach((val, i) => {
        if (val.logId == logId) {
            data.splice(i, 1);
            return false;
        }

    })
}

function deleteAds(this_) { 
    let id = $(this_).data("id"); 
    let url =
        `//localapi.trazk.com/fff/quangcao.php?task=removeFromLog&userToken=${userToken}&toolName=WebsiteTraffic&logId=${id}`
    getData(url).then(data => {
        data = JSON.parse(data);
        let status = data.data.status;
        if (status == "removed") {
            $(this_).parent().parent().hide().fadeIn("slow");
            setTimeout(() => {
                $(this_).parent().parent().remove();
                spliceArr_data(arr_data, id);
                pagiNation(arr_data);
            }, 300);
        }
    })
}
//suggesition
function suggesitionDomain(arrDomain){
    $('#selectWebsiteScrollbar').perfectScrollbar();
    $('#selectWebsiteScrollbar').removeClass('d-none').addClass('d-flex')
    selectWebsite = ''
    $.each(arrDomain, (index, site) => {
        selectWebsite += `<span class="p-2" data-domain="${site}"><img class="p-1 mr-2 border rounded bg-secondary" src="https://www.google.com/s2/favicons?domain=${site}"/>${site}</span>`
    });
    $(".selectWebsite").html(selectWebsite);
    $(".selectWebsite span").click(function () {
        console.log($(this).data("domain"))
        $("#input-submit").val($(this).data("domain"));
        $('#selectWebsiteScrollbar').removeClass('d-flex').addClass('d-none')
    })
}
function suggesition() {
    $("#input-submit").keyup(e => {
        let val = $("#input-submit").val()
        console.log(val)
        let url = `https://localapi.trazk.com/webdata/websiteapi.php?task=getDomainSuggesion&domain=${val}`
        getData(url).then(data => {
            let arrDomain = data.data.domains
            suggesitionDomain(arrDomain)
        })
    });
}
$(document).ready(() => {  
    suggesition()

    let obj_limit = Promise.resolve(checkVIP("WebsiteTraffic"));
    $(".btn-submit").click(async () => {
        let val = getVal("#input-submit"); 
        if (val != "") {     
            obj_limit.then(data => {
               let todayUsed = data.todayUsed;
               let limit = data.limit; 
               if(todayUsed == limit) {
                    showUpVip("0")
                } else {  
                    // insertToLg(select,val);
                    window.location.href = `?view=traffic-website&action=result&domain=${val.replace(" ","")}`;
                }
            }) 
        }
    })
   
    $("#input-submit").keypress(e => {
        if (e.keyCode == 13 && $("#input-submit").val() != '') {
            $(".btn-submit").click();
        }
    })

    $("body").on("click", ".delete-ads", function() {
        deleteAds(this);
    })
})