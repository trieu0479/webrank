import api from './displayAdsTable.js';

function insertToLg(data) {
    let post = {};
    post.logData = data;
    $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=WebsiteTraffic`, post, function(data) {
        data = JSON.parse(data);
    })
}
var fullWebsite = new URL(location.href);
var website = fullWebsite.searchParams.get("domain");
let obj_limit = Promise.resolve(checkVIP("WebsiteTraffic"));
obj_limit.then(data => {
    let todayUsed = data.todayUsed;
    let limit = data.limit;
    if (todayUsed == limit) {
        showUpVip("1")
    } else {
        insertToLg(website)
    }
})

$(document).ready(() => {           
            const url = new URL(location.href);
            const originalDomain = url.searchParams.get("domain") || url.pathname.split("/")[2];
            const language = {
                searchPlaceholder: 'Nhập từ khóa',
                processing: 'Đang xử lý...',
                loadingRecords: 'Đang tải...',
                emptyTable: 'Không có dữ liệu hiển thị',
                lengthMenu: 'Hiển thị: _MENU_ dòng mỗi trang',
                zeroRecords: 'Không tìm thấy dữ liệu',
                info: 'Hiển thị từ _START_ đến _END_ trong tổng _TOTAL_ dòng',
                infoEmpty: 'Hiển thị từ 0 đến 0 trong tổng 0 dòng',
                infoFiltered: '(lọc từ tổng số _MAX_ dòng)',
                search: 'Tìm kiếm:',
                paginate: {
                    previous: 'Quay lại',
                    next: 'Tiếp theo'
                }
            };
            numeral.locale("vi");                       
            //init datatable
            const initDatatable = function(select, tableOptions) {
              const table = $(`.${select}`).DataTable(tableOptions);
              $(table.table().header()).addClass('text-center');
              //reload click handle
              $(`.${select}`).click(function(event) {
                  // $(event.target).addClass('fa-spin');
                  $(`.${select}-container`).addClass('is-loading').block({
                      overlayCSS: {
                          backgroundColor: '#ccc',
                          opacity: 0.8,
                          zIndex: 1,
                          cursor: 'wait'
                      },
                      message: null
                  });
                  // $(`.${select}`).DataTable().ajax.reload(() => {
                  //     $(`.${select}`).removeClass("is-loading");
                  //     $(`.${select} .dataTables_empty`).text("").addClass("empty-state");
                  // });
              })
              return table;
          }
            if (!originalDomain) {
                // Hien thi popup
                getDomain().then(data =>
                    data.value ?
                    (location.href = `?action=result&domain=${data.value}`) :
                    (location.href = `?action=index`)
                );
            } else {
                let domain = originalDomain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];            
                $('body').on('click','.similarReloadTask',async function () {   
                  let task = $(this).data("task");   
                  $(this).find('i').addClass('fa-spin');         
                  if (task =="getTrafficDisplayAdvertisingAds")  {            
                await api('getTrafficDisplayAdvertisingAds', domain, 1).then( (res) =>$(this).find('i').removeClass('fa-spin'))
                  }
                  else if (task =="getTrafficDestinationAds")  {            
                await api('getTrafficDestinationAds', domain, 1).then( (res) =>$(this).find('i').removeClass('fa-spin'))
                  }
                  else if (task =="getWebsiteAdsVisitsOverview")  {                               
                await api('getWebsiteAdsVisitsOverview', domain, 1).then( (res) =>$(this).find('i').removeClass('fa-spin'),  $('.getWebsiteAdsVisitsOverview').html('') )
                  }
                 else  if (task =="getTrafficDisplayAdvertisingWebsitesTable")  {            
                await api('getTrafficDisplayAdvertisingWebsitesTable', domain, 1).then( (res) =>$(this).find('i').removeClass('fa-spin'))
                  }
                   
                })                            
                api("getWebsiteAdsVisitsOverview", domain);
                api("getHeader", domain);               
                api("getTrafficDisplayAdvertisingAds", domain);              
                api("getWebsiteAdsIntelDisplay", domain);                         
                api("getTrafficDestinationAds", domain);                               
                $('.share-social').click(event => {
                    event.preventDefault();
                    const url = $(event.target).closest('a').attr('dhref');
                    var top = window.screen.height;
                    top = (top > 0 ? top / 2 : 0) - 300;

                    var left = window.screen.width;
                    left = (left > 0 ? left / 2 : 0) - 400;

                    let strWindowFeatures = `location=yes,width=800,height=400,top=${top},left=${left},scrollbars=yes,status=yes`;
                    window.open(url, "_blank", strWindowFeatures);
                });


    //table mới

     $('.widget-getTrafficDestinationAds .widgetHeader').append(`<div class="ml-auto d-flex no-block align-items-center pr-3">
     <span class="similarReloadTask" data-task="getTrafficDestinationAds"><i class="fal fa-sync"></i></span>
 </div>`)
    //getTrafficDestinationAds
    initDatatable(
      'getTrafficDestinationAds',
      {
        ajax: {
          url: `https://localapi.trazk.com/webdata/v3.1.php?task=getTrafficDestinationAds&domain=${domain}&userToken=${userToken}`,
          dataSrc: json => {
            console.log(json);            
              if(!json.data || !json.data.data){
              $('#DataTables_Table_0_wrapper').css('min-height','299px');
              $('#DataTables_Table_0_wrapper').addClass('empty-state')
              $('table.getTrafficDestinationAds tbody tr td.dataTables_empty').addClass('d-none')
                return [];
              }
              else{
                return json.data.data.data;
              }
             
          }
        },
        drawCallback: function (settings) {
          $('.getTrafficDestinationAds-container').removeClass('is-loading').unblock();
          $('.getTrafficDestinationAds-container').find('.fa-spin').removeClass('fa-spin');
          $('table.getTrafficDestinationAds tbody tr td.dataTables_empty').addClass('d-none')
        },
        columns: [
          { 
            title: 'Website', 
            data: data => `<div>
                    <img src="${data.Favicon}" class="mr-1"/>
                    <a data-type="website" class="changeURL" data-input="${data.Domain}" href="?view=traffic-website&action=result&domain=${data.Domain}">${data.Domain}</a>
                  </div>`,
             className:'text-left' 
            }
           ,
          {
            title: '(%)',
            data: data => {
              const share = numeral(data.Share).format('0.00%');
              return `<div class="">
                          ${share}
                        </div>                        
                     `;
            },
            className:'text-left' 
          },
          {
            title: 'Tỉ lệ',
            data: data => {
              const share = numeral(data.Share).format('0.00%');
              return `                       
                       
                          <div class="progress border">
                            <div class="progress-bar bg-success" style="width: ${share}; height:7px;" role="progressbar"></div>
                          </div>
                        
                     `;
            }
          }
        ],"order": [[ 1, 'desc' ]],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        initComplete: function (settings, json) {
          $(`.dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficDestinationAds_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficDestinationAds_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficDestinationAds-container').removeClass('is-loading');
          // $('#getTrafficDestinationAds .dataTables_empty').text('').addClass('empty-state');
        }
      }
    )
    $('.widget-getTrafficDisplayAdvertisingWebsitesTable .widgetHeader').append(`<div class="ml-auto d-flex no-block align-items-center pr-3">
    <span class="similarReloadTask" data-task="getTrafficDisplayAdvertisingWebsitesTable"><i class="fal fa-sync"></i></span>
</div>`)
    initDatatable(
      'getTrafficDisplayAdvertisingWebsitesTable', 
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getTrafficDisplayAdvertisingWebsitesTable&domain=${domain}&userToken=${userToken}`,
          dataSrc: (json) => {          
               lockedModule('getTrafficDisplayAdvertisingWebsitesTable', json.userData.member);  
          if (json.data.data.Data.Records.length<=0) {
            $('#DataTables_Table_1_wrapper').css('min-height','268px');
            $('#DataTables_Table_1_wrapper').addClass('empty-state')
            $('table.getTrafficDisplayAdvertisingWebsitesTable tbody tr td.dataTables_empty').addClass('d-none')
          }
            if (json && json.data && json.data.data && json.data.data.Data) {
              let { Data: newData } = json.data.data;
              if (newData.Records.length > 0) {
                return newData.Records.filter(item => item.Domain != "grid.upgrade")
              } else {
                $("#row-getTrafficDisplayAdvertisingWebsitesTable").hide();
                return [];
              }
              // return (newData.Records)
            }
    
            else {        
                $('.parent-getTrafficDisplayAdvertisingWebsitesTable #DataTables_Table_1_wrapper').css('min-height','268px');
                $('.parent-getTrafficDisplayAdvertisingWebsitesTable #DataTables_Table_1_wrapper').addClass('empty-state')
                $('table.getTrafficDisplayAdvertisingWebsitesTable tbody tr td.dataTables_empty').addClass('d-none')
              return [];
            }

          },
        },
        drawCallback: function (settings) {
          $('.getTrafficDisplayAdvertisingWebsitesTable-container').removeClass('is-loading').unblock();
          $('.getTrafficDisplayAdvertisingWebsitesTable-container').find('.fa-spin').removeClass('fa-spin');
          $('table.getTrafficDisplayAdvertisingWebsitesTable tbody tr td.dataTables_empty').addClass('d-none')
        },
        columns: [
          { title: 'Trang web',
           data: data => `<div class="d-flex"><img class="p-1 mr-2 border rounded bg-secondary" src="${data.Favicon}"/>${data.Domain} </div>`,
            width: "30%",
            className:'text-left'
           },

          { title: 'Lượt truy cập', data: data => (data.Visits == 0) ? `-` : `${numeral(data.Visits).format("0,0")}`,className:'text-left' },
          {
            title: 'Tỉ lệ truy cập', data: data => `
          <div class="row align-items-center" style="width:150px">
              <div class="col-4">${numeral(data.Share).format('0.00%')}</div>
              <div class="col">
                <div class="progress border">
                    <div class="progress-bar bg-info" style="width: ${numeral(data.Share).format('0%')}; height:14px;" role="progressbar"></div> 
                </div>
              </div>
              <div class="col-4">
              ${(data.Change == 0 || data.Change == null) ? `-` : (data.Change < 0) ? `<div class="negative text-red">${numeral(data.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(data.Change).format('0.00%')}</div>`}
              </div>
          </div>`
          },
        ],
        "order": [[2, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '230px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`.dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficDisplayAdvertisingWebsitesTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficDisplayAdvertisingWebsitesTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')         
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficDisplayAdvertisingWebsitesTable-container').removeClass('is-loading');
          $('#getTrafficDisplayAdvertisingWebsitesTable .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )
    }  
  $('.btnGoBack').click(() => changeURL('website', null));
  $('.btnKeyWord').click(() => changeURL('keyword', null));
    
  })