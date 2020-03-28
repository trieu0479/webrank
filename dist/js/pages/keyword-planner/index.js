var min = 0;
var max = 1;
var currentPage = 1;
var numberPage;
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

$('#taglimited').html('5 từ khóa')
$('.__upgradevip').click( () => showVip("0"))
 


const language = {
    searchPlaceholder: 'Nhập từ khóa',
    processing: 'Đang xử lý...',
    loadingRecords: '<i class="fad fa-sync-alt fa-spin mr-2"></i> Đang tải dữ liệu, vui lòng chờ...',
    emptyTable: 'Chưa có từ khóa nào trong lịch sử phân tích từ khóa',
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
    const table = $(`.${select}`).DataTable(tableOptions);
    idTable = table;
    return table;
};



$(document).ready(() => {   

    get30DayYoutubeSearchTrend();
    loadKeywordFromLog();
    get30DayWebSearchTrend();

   
    function loadKeywordFromLog(){
        initDatatable(        
            'table-kw-format', {
                ajax: {
                    url:`//localapi.trazk.com/fff/quangcao.php?task=getLogByToolNameV2&userToken=${userToken}&toolName=keywords&limit=10`,
                    dataSrc: function(res) {
                        
                        columns = [];
                        var stt = 1;
                        $.each(res.data.logs, function(k, v) {
                            
                        let logData=JSON.parse(v.logData)     
                        if (logData && logData.keywords){  
                            let output = {};
                            output.stt = stt;
                            output.logid = v.logId;
                            output.logKey = v.logKey;
                            output.keyword = logData.keywords;
                            output.lang=logData.language;
                            output.country=logData.country;
                            output.insertDate = v.insertDate;
                            output.trId = 'trId-' + k;
                            stt += 1;
                            columns.push(output)
                            }
                        })
                        data_table_ads = columns;
    
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
                        "data": data => `<a href="./?view=keyword-planner&action=result&keywords=${data.keyword}&language=${data.lang}&country=${data.country}">${data.keyword}</a>`
                    },
                    {
                        title: "Ngày tạo",
                        "data": data => moment(data.insertDate).format('LT l'),
                    },
                    {
                        title: "Trạng thái",
                        "data": data => `<a href="./?view=keyword-planner&action=result&keywords=${data.keyword}&language=${data.lang}&country=${data.country}"><span class="btn-result-kq btn-default btn-sm rounded-pill px-3 py-2 font-13" data-language="${data.lang}" data-country="${data.country}" data-keywords="${data.cid}"><i class="fad fa-eye text-info mr-2 font-14 font-weight-bold"></i>Xem kết quả</span></a>`
                    },
                    {
                        title: "Action",
                        "data": data => `<span data-logKey="${data.logKey}" class="delete-ads"><i class="fad fa-trash pointer"></i></span>`
                    }
                ],   
                language,         
                ordering: false,
                rowId: 'trId',           
                info: false,
                autoWidth: false,
                searching: false,
                sorting:false,
                scrollCollapse: true,
                paging: false,
                processing: false,
                initComplete: function(settings, json) {
                    $("table.dataTable thead th").css("padding", "10px");
                    $("table.dataTable tbody tr td").css("padding", "15px 10px");
                }
            }
        )
    }
    function get30DayYoutubeSearchTrend(){
        initDatatable(        
            'get30DayYoutubeSearchTrend', {
                ajax: {
                    url:`//localapi.trazk.com/keywords/keywords.php?task=get30DayYoutubeSearchTrend`,


                dataSrc: (res) => {
                    columns = [];
                    stt = 1;
                    $.each(res.data, function(k, v) {
                        console.log(v);
                        var output = {}
                        output.trId = 'trId-' + k;
                        output.query = v.query;
                        output.growthrate = v.growthrate;
                        output.stt = stt++;
                        columns.push(output)
                    });
                    console.log(columns);
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
                        "data": data => `<a href="./?view=keyword-planner&action=result&keywords=${data.query}&language=vn&country=vn&network=yt">${data.query}</a>`,
                         className:"text-left",
                    },
                    {
                        title: "Tăng trưởng",
                        "data":data => `<a href="./?view=keyword-planner&action=result&keywords=${data.query}&language=vn&country=vn"><span class="badge  ${data.growthrate <= 5000 ? data.growthrate <= 3000 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${$.number(data.growthrate)}</span></a>`
                    }
                ],   
                language,         
                ordering: false,
                rowId: 'trId',           
                info: false,
                autoWidth: false,
                searching: false,
                sorting:false,
                scrollCollapse: true,
                paging: false,
                processing: false,
                initComplete: function(settings, json) {
                    $("table.dataTable thead th").css("padding", "10px");
                    $("table.dataTable tbody tr td").css("padding", "15px 10px");
                }
            }
        )
    }
   
    function get30DayWebSearchTrend(){
        initDatatable(        
            'get30DayWebSearchTrend', {
                ajax: {
                    url:`//localapi.trazk.com/keywords/keywords.php?task=get30DayWebSearchTrend`,


                dataSrc: (res) => {
                    columns = [];
                    stt = 1;
                    $.each(res.data, function(k, v) {
                        console.log(v);
                        var output = {}
                        output.trId = 'trId-' + k;
                        output.query = v.query;
                        output.growthrate = v.growthrate;
                        output.stt = stt++;
                        columns.push(output)
                    });
                    console.log(columns);
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
                        "data": data => `<a href="./?view=keyword-planner&action=result&keywords=${data.query}&language=vn&country=vn">${data.query}</a>`,
                         className:"text-left",
                    },
                    {
                        title: "Tăng trưởng",
                        "data":data => `<a href="./?view=keyword-planner&action=result&keywords=${data.query}&language=vn&country=vn"><span class="badge  ${data.growthrate <= 5000 ? data.growthrate <= 3000 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${$.number(data.growthrate)}</span></a>`
                    }
                ],   
                language,         
                ordering: false,
                rowId: 'trId',           
                info: false,
                autoWidth: false,
                searching: false,
                sorting:false,
                scrollCollapse: true,
                paging: false,
                processing: false,
                initComplete: function(settings, json) {
                    $("table.dataTable thead th").css("padding", "10px");
                    $("table.dataTable tbody tr td").css("padding", "15px 10px");
                }
            }
        )
    }

    
    $('body').on('click', '.delete-ads', function() { 
   
        var logKey=$(this).data('logkey');
                 
        $.get(`//localapi.trazk.com/fff/quangcao.php?task=removeFromLogV2&userToken=${userToken}&toolName=keywords&logKey=${logKey}`,function(res){
                    location.reload();
                       
        })
    })

})
})