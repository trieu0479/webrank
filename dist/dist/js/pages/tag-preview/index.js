var min = 0;
var max = 1;
var currentPage = 1;
var numberPage;
var userToken="cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb"
var arr_data = []; 
var getlimit;
$('#table-kw-format_length label').hide();  

// $('.currentday').html()=currentday

$(window).on('load', function() {      
    $('.input_search').show();
    $('#table-kw-format_length label').hide();    
})
$(document).ready(function(){
    $('#table-kw-format_length label').hide();
    var today = new Date();
    var currentday = today.getDate()+'-'+ '0'+(today.getMonth()+1) +'-'+today.getFullYear();       
    $('.currentday').html(currentday);
const submitKeyword = () => {        
    keywords = $('.iptKeyword').val(); 
    console.log(keywords);
    var lang=$('select.selectLanguage option:selected').val();
    var country=$('select.selectCountry option:selected').val();
    var temp ={
        keywords:keywords,
        language:lang,
        country:country
    };     

    let post = {};
    post.logData = JSON.stringify(temp);
    if (keywords == '') {
        Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
    } else {
        $.get("//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=" +userToken +"&toolName=keywords", function( data1 ) {
          var x =JSON.parse(data1)           
         getlimit=x.data.limit; 
            if (x.data.todayUsed>4) {
                showUpVip();                             
            }            
            else {
                var newURL = "index.php?view=keywords&action=keywords-sem&keyword=" + keywords + "&language=" + lang +'&country='+country;
                $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`,post,function(res){
                    console.log(res);           
                    
                 })
                
                window.location.href = newURL;   
            }
          });         
    }
}
$('#taglimited').html('5 từ khóa')
$('.__upgradevip').click( () => showVip("0"))
 

$('.btnSubmitKeyword').click(() => submitKeyword());
$('.iptKeyword').keypress(event => (event.which == 13) ? submitKeyword() : null); //bắt event enter

// getData(
//        `//localapi.trazk.com/fff/quangcao.php?task=getLogByToolName&userToken=${userToken}&toolName=keywords`
        
// )
//     .then(data => {
//         data = JSON.parse(data)
//         console.log('data',data);
//         let domain = data.data.domains;
//         if (domain) {
//             pagiNation(domain);
//             insertTable(domain);
//             removeClass(".content-table", "d-none")
//             clickSeeReport();
//         } else
//             $(".number").text(`0/5`);
//     })
  
// function clickSeeReport() {
//     $(".result").click(function() {
//         sessionStorage.setItem('website', $(this).data("domain").trim());
//         window.location.href =
//             `/?view=ads-preview&action=result&website=${$(this).data("domain").trim()}`;
//     })
// }

// function pagiNation(data) {
//     let pageActive = getText(".page-item.active");
//     if (getText("#table-content-ads") == "") {
//         min = 0;
//         max = 1;
//         currentPage = 1;
//         pageActive = 1;
//     }

//     numberPage = Math.ceil(data.length / 10);

//     let content = `<li class="page-item ${(numberPage) == 1 ? "done" : ""}">
//                         <span class="previousPage page-link">Trước</span>
//                     </li>`;
//     if (pageActive) {
//         for (let i = 1; i <= numberPage; i++) {
//             content += `<li class="page-item ${(i==pageActive) ? "active" : ""}">
//                             <a class="page-link" href="javascript:void(0);" data-page="${i}">${i}</a>
//                         </li>`;
//         }
//     } else {
//         for (let i = 1; i <= numberPage; i++) {
//             content += `<li class="page-item ${(i==pageActive) ? "active" : ""}">
//                             <a class="page-link" href="javascript:void(0);" data-page="${i}">${i}</a>
//                         </li>`;
//         }
//     }


//     content += `<li class="page-item ${(numberPage) == 1 ? "done" : ""}">
//                         <a class="nextPage page-link" href="javascript:void(0);">Sau</a>
//                     </li>`

//     if (numberPage >= 2) {
//         $(".pagination").html(content);
//         if (numberPage == 2) {
//             $(".previousPage").parent().addClass("disabled d-none");
//             $(".nextPage").parent().addClass("disabled d-none");
//         } else if (numberPage > 2) {
//             $(".previousPage").parent().addClass("disabled").removeClass("d-none");
//             $(".nextPage").parent().removeClass(" d-none");
//         }
//     } else {
//         $(".pagination").html("");
//     }

//     arr_data = data;
//     clickPage();
//     insertTable(arr_data);
// }

// function clickPage() {

//     $(".page-link").click(function() {
//         removeClass(".page-item", "active");

//         if ($(this).hasClass("nextPage")) {

//             $(".page-item").each(function(i) {
//                 if (i == currentPage && i < numberPage) {
//                     currentPage = currentPage + 1;
//                     return false;
//                 }
//             })


//             $(".page-item").each(function(i) {
//                 if (i == currentPage && i <= numberPage) {
//                     $(this).addClass("active")
//                 }
//             })

//         } else if ($(this).hasClass("previousPage")) {

//             $(".page-item").each(function(i) {
//                 if (i == currentPage && i <= numberPage) {
//                     currentPage = currentPage - 1;
//                     return false;
//                 }
//             })


//             $(".page-item").each(function(i) {
//                 if (i == currentPage && i <= numberPage) {
//                     $(this).addClass("active")
//                 }
//             })

//         } else {
//             $(this).parent().addClass("active");
//             currentPage = $(this).data("page");
//         }

//         if (currentPage != 1) {
//             $(".previousPage").parent().removeClass("disabled").addClass("cursor-pointer");
//             if (currentPage == numberPage) {
//                 $(".nextPage").parent().addClass("disabled");
//             } else {
//                 $(".nextPage").parent().removeClass("disabled");
//             }
//         } else {
//             $(".previousPage").parent().addClass("disabled").removeClass("cursor-pointer");
//             $(".nextPage").parent().removeClass("disabled");
//         }


//         min = currentPage - 1;
//         max = currentPage;
//         $("#table-content-ads").html("");
//         insertTable(arr_data);
//     })
// }

// function nextPage() {
//     $("#nextPage").click(() => {
//         removeClass(".page-item", "active");
//         $(".page-item").each(function(i) {
//             if (i == currentPage) {
//                 alert("das")
//                 addClass(this, "active")
//             }
//         })
//     })
// }

// function previousPage() {
//     $("#previousPage").click(() => {
//         removeClass(".page-item", "active");
//     })
// }

// function insertTable(data) {
//     if (data.length > 0) {

//         $("#table-content-ads").html("");
//         let stt = 1;
//         data.forEach((val, i) => {
//             let count = i + 1;
//             if (count >= min * 10 + 1 && count <= max * 10) {
//                 stt++;
//                 $("#table-content-ads").append(`
//                 <tr class="${stt % 2 == 0 ? "odd" : "even"}">
//                     <td scope="row">${count}</td>
//                     <td><a data-domain=${val.domain} href="javascript:void(0)"
//                             class="align-self-center font-gg font-14">${val.protocal + val.domain}</a>
//                     </td>
//                     <td>${moment(val.insertDate).format("H:mm DD/MM/YYYY")}</td>
//                     <td>
//                         <a data-domain=${val.domain} href="javascript:void(0)" class="bg-success rounded-pill text-white px-3 py-2 font-13 cursor-pointer"><i
//                                 class="fad fa-poll text-white mr-2 font-14 font-weight-bold"></i>Xem
//                             kết quả</a>
//                     </td>
//                     <td>
//                         <span class="delete-ads" data-domain=${val.domain}>
//                             <i class="fad fa-trash cursor-pointer font-14"></i> 
//                         </span>
//                     </td>
//                 </tr>`);
//             }
//         })
//     } else {
//         addClass(".content-table", "d-none");
//     }
// }

// function spliceArr_data(data, domain) {

//     data.forEach((val, i) => {
//         if (val.domain.trim() == domain.trim()) {
//             data.splice(i, 1);
//             return false;
//         }

//     })
// }

// function deleteAds(this_) {
//     let domain = $(this_).data("domain");

//     let url =
//         `//localapi.trazk.com/fff/quangcao.php?task=removeToolLog&userToken=${userToken}&toolName=ads-preview&domain=${domain}`
//     getData(url).then(data => {
//         data = JSON.parse(data);
//         let status = data.data.status;
//         if (status == "removed") {
//             $(this_).parent().parent().hide().fadeIn("slow");
//             setTimeout(() => {
//                 $(this_).parent().parent().remove();
//                 spliceArr_data(arr_data, domain);
//                 pagiNation(arr_data);
//             }, 300);
//         }
//     })
// }
const language = {
    searchPlaceholder: 'Nhập từ khóa',
    processing: 'Đang xử lý...',
    loadingRecords: '<i class="fad fa-sync-alt fa-spin mr-2"></i> Đang tải dữ liệu, vui lòng chờ...',
    emptyTable: 'Không có dữ liệu hiển thị',
    lengthMenu: '',
    zeroRecords: 'Không tìm thấy dữ liệu',
    info: 'Hiển thị từ START đến END trong tổng TOTAL dòng',
    infoEmpty: 'Hiển thị từ 0 đến 0 trong tổng 0 dòng',
    infoFiltered: '(lọc từ tổng số MAX dòng)',
    search: 'Tìm kiếm:',
    paginate: {
        previous: '<i class="fal fa-angle-double-left"></i>',
        next: '<i class="fal fa-angle-double-right"></i>'
    }
};
var idTable;
const initDatatable = function(select, tableOptions) {
    const table = $(`#${select}`).DataTable(tableOptions);
    idTable = table;
    //$(table.table().header()).addClass('text-center');
    //reload click handle
    $(`.${select}`).click(function(event) {
        $(event.target).addClass('fa-spin');
        $(`.${select}-container`).addClass('is-loading').block({
            overlayCSS: {
                backgroundColor: '#ccc',
                opacity: 0.8,
                zIndex: 1,
                cursor: 'wait'
            },
            message: null
        });
        $(`#${select}`).DataTable().ajax.reload(() => {
            $(`#${select}`).removeClass("is-loading");
            $(`#${select} .dataTables_empty`).text("").addClass("empty-state");
        });
    })
    return table;
};




$(document).ready(() => {   
    initDatatable(        
        'table-kw-format', {
            ajax: {
                url:`//localapi.trazk.com/fff/quangcao.php?task=getLogByToolName&userToken=${userToken}&toolName=keywords`,
                dataSrc: function(res) {
                    // res=JSON.parse(res)
                    console.log(res);
                    
                    columns = [];
                    var stt = 1;
                    $.each(res.data.logs, function(k, v) {
                        console.log(v);                        
                        let logData=JSON.parse(v.logData)     
                        console.log(logData);                                           
                        let output = {};
                        output.stt = stt;
                        output.logid = v.logId;
                        output.cid = logData.keywords;
                        output.lang=logData.language;
                        output.country=logData.country;
                        output.insertDate = v.insertDate;
                        output.trId = 'trId-' + k;
                        stt += 1;
                        columns.push(output)
                    })
                    data_table_ads = columns;
                    console.log(columns);

                    data_stt = stt;
                    return columns;
                },
            },
            drawCallback: function(settings) {},
            columns: [{
                    title: "STT",
                    "data": "stt"
                },
                {
                    title: "Từ khóa",
                    "data": data => `<a href="#">${data.cid}</a>`
                },
                {
                    title: "Ngày tạo",
                    "data": data => {
                        let date_request_date = new Date(data.insertDate);
                        console.log(date_request_date)
                        return date_request_date.format("HH:MM dd/mm/yyyy")
                    }
                },
                {
                    title: "Trạng thái",
                    "data": data => `<span class="btn-result-kq bg-success rounded-pill text-white px-3 py-2 font-13" data-language="${data.lang}" data-country="${data.country}" data-keywords="${data.cid}"><i class="fad fa-poll text-white mr-2 font-14 font-weight-bold"></i>Xem kết quả</span>`
                },
                {
                    title: "Action",
                    "data": data => `<span data-logid="${data.logid}" class="delete-ads"><i class="fad fa-trash pointer"></i></span>`
                }
            ],   
            language,         
            ordering: false,
            rowId: 'trId',           
            info: false,
            autoWidth: false,
            searching: false,
            sorting:false,
            //   scrollY: '350px',
            scrollCollapse: true,
            paging: false,
            processing: false,
            initComplete: function(settings, json) {
                $("table.dataTable thead th").css("padding", "10px");
                $("table.dataTable tbody tr td").css("padding", "15px 10px");
            }
        }
    )
    $('body').on('click', '.btn-result-kq', function() {     
      let data_key=$(this).data('keywords');
      let data_lang=$(this).data('language')
      let data_country=$(this).data('country');
      console.log(data_key,data_lang,data_country);      
      window.location.href="?view=keywords&action=keywords-sem&keyword=" + data_key + "&language=" + data_lang + "&country="+data_country;
    })
    $('body').on('click', '.delete-ads', function() { 
   
        var logid=$(this).data('logid');
                 
        $.get(`//localapi.trazk.com/fff/quangcao.php?task=removeFromLog&userToken=${userToken}&toolName=keywords&logId=${logid}`,function(res){
                    location.reload();
                       
        })
    })



    // let nameVip = "ads-preview-vip";
    // let nameUsed = "ads-preview-count"; 
    // checkVIP(nameVip,nameUsed);  
    // $(".btn-submit").click(async () => {
    //     let select = getVal("#select-http");
    //     let val = getVal("#input-submit");
    //     let url = "";
    //     if (val != "") {   
            
    //         if(parseInt(localStorage.getItem(nameUsed)) == 5 && parseInt(localStorage.getItem(nameVip)) == 0) {
    //             showUpVip()
    //         } else {  
    //             url =
    //                 `//localapi.trazk.com/fff/quangcao.php?task=insertToolLog&userToken=${userToken}&toolName=ads-preview&protocal=${select}&domain=${val}`
    //             getData(url).then(data => {
    //                 data = JSON.parse(data); 
    //                 sessionStorage.setItem('website', val.trim());
    //                 if(parseInt(localStorage.getItem(nameVip)) == 0)
    //                     localStorage.setItem(nameUsed, parseInt(localStorage.getItem(nameUsed)) + 1);
    //                 window.location.href = `/?view=ads-preview&action=result&website=${val.trim()}`;
    //             })
    //         }
    //     }
    // })

    // $("#input-submit").keypress(e => {
    //     if (e.keyCode == 13 && $("#input-submit").val() != '') {
    //         $(".btn-submit").click();

    //     }
    // })

    // $("body").on("click", ".delete-ads", function() {
    //     deleteAds(this);
    // })
})
})