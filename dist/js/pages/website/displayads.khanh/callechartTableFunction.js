import api from './displayAdsTable.js';

function insertToLg(data) {
  let post = {};
  post.logData = data;
  $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=WebsiteTraffic`, post, function (data) {
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

  var localUrl = new URL(location.href);
  var originalDomain = localUrl.searchParams.get('domain');


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
  const initDatatable = function (select, tableOptions) {
    const table = $(`.${select}`).DataTable(tableOptions);
    $(table.table().header()).addClass('text-center');
    //reload click handle
    $(`.${select}`).click(function (event) {
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
    $('body').on('click', '.similarReloadTask', async function () {
      let task = $(this).data("task");
      $(this).find('i').addClass('fa-spin');
      if (task == "getTrafficDisplayAdvertisingAds") {
        await api('getTrafficDisplayAdvertisingAds', domain, 1).then((res) => $(this).find('i').removeClass('fa-spin'))
      }
      else if (task == "getTrafficDestinationAds") {
        await api('getTrafficDestinationAds', domain, 1).then((res) => $(this).find('i').removeClass('fa-spin'))
      }
      else if (task == "getWebsiteAdsVisitsOverview") {
        await api('getWebsiteAdsVisitsOverview', domain, 1).then((res) => $(this).find('i').removeClass('fa-spin'))
      }
      else if (task == "getTrafficDisplayAdvertisingWebsitesTable") {
        await api('getTrafficDisplayAdvertisingWebsitesTable', domain, 1).then((res) => $(this).find('i').removeClass('fa-spin'))
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


    //các table 

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
            // console.log(json);
            if (!json.data || !json.data.data) {
              $('#DataTables_Table_0_wrapper').css('min-height', '299px');
              $('#DataTables_Table_0_wrapper').addClass('empty-state')
              $('table.getTrafficDestinationAds tbody tr td.dataTables_empty').addClass('d-none')
              return [];
            }
            else {
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
            className: 'text-left'
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
            className: 'text-left'
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
        ], "order": [[1, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        initComplete: function (settings, json) {
          $(`.dataTables_scrollBody`).perfectScrollbar();
          $('#DataTables_Table_0 thead').addClass('d-none')
          $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd');
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
            console.log(json.data.data.Data, 'dsdasdasdsa');

            if (json.data.data.Data.Records.length <= 0) {
              $('#DataTables_Table_1_wrapper').css('min-height', '268px');
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
              $('.parent-getTrafficDisplayAdvertisingWebsitesTable #DataTables_Table_1_wrapper').css('min-height', '268px');
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
          {
            title: 'Trang web',
            data: data => `<div class="d-flex"><img class="p-1 mr-2 border rounded bg-secondary" src="${data.Favicon}"/>${data.Domain} </div>`,
            width: "30%",
            className: 'text-left'
          },

          { title: 'Lượt truy cập', data: data => (data.Visits == 0) ? `-` : `${numeral(data.Visits).format("0,0")}`, className: 'text-left' },
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


      initDatatable(
        'PublicSherTable', {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingDisplayDetail&domain=${domain}&page=1&method[publishersDetail]=true&userToken=${userToken}`,
          dataSrc: function (res) {
            if (res.data.publishersDetail == null) {
              $('.parent-PublicSherTable #DataTables_Table_2_wrapper').addClass('empty-state');
              $('.parent-PublicSherTable #DataTables_Table_2_wrapper').removeClass('is-loading');
              $('.parent-PublicSherTable #DataTables_Table_2_wrapper tbody tr td').html('')
              return;
            }

            let arrPublicSherTable = res.data.publishersDetail.data;
            let columns = [];
            var stt = 1;
            $('.parent-PublicSherTable #DataTables_Table_2_wrapper .dt-buttons').addClass('resize-dl')
            $.each(arrPublicSherTable, function (k, v) {
              let output = {};
              output.stt = stt;
              output.domain = v.domain;
              output.title = v.title;
              output.description = v.description;
              output.adsCount = v.adsCount;
              output.mediaAdsCount = v.mediaAdsCount;
              output.htmlAdsCount = v.htmlAdsCount;
              output.textAdsCount = v.textAdsCount;
              output.timesSeen = v.timesSeen;
              output.media = numeral(v.mediaAdsCount * 100 / (v.mediaAdsCount + v.htmlAdsCount + v.textAdsCount)).format('0,0')
              output.html = numeral(v.htmlAdsCount * 100 / (v.mediaAdsCount + v.htmlAdsCount + v.textAdsCount)).format('0,0')
              output.text = numeral(v.textAdsCount * 100 / (v.mediaAdsCount + v.htmlAdsCount + v.textAdsCount)).format('0,0')

              stt += 1;
              columns.push(output)
            })
            return columns;
          },
        },
        drawCallback: function (settings) { },
        columns: [{
          title: "STT",
          data: 'stt',
          width: '5%',
          className: 'align-middle ml-5 pl-3 font-12'
        },
        {
          title: "Title & URL",
          className: 'parent-hover pr-0 text-left align-middle font-12',
          render: (data, type, row) => `<span class="font-14">${row.title}</span><a href=" http://${row.domain}" target="_blank" class="text-break text-truncate-2">${row.domain} <i class="fal fa-external-link"></i></a>`,
          width: '30%'
        },
        {
          title: "Content",
          className: 'parent-hover pr-0 align-middle text-left font-12 ',
          "data": data => `<span class=""font-14>${data.description}</span>`,
          width: '30%'
        },
        {
          title: "Ads",
          "data": data => `<div class="badge font-10 ml-2 ${data.adsCount <= 100 ? data.adsCount <= 10 ? 'bg-warning' : 'bg-danger' : 'bg-success'}">${data.adsCount ? numeral(data.adsCount).format('0,0') : 0}</a>`,
          width: '10%',
          className: 'text-left align-middle font-12 '
        },
        {
          title: "Image-HTML-Text",
          render: (data, type, row) => ` 
                  <span class= "${row.media > 0 ? 'text-info' : ''}"> ${row.media > 0 ? row.media + '%' : row.media}</span ><span class="pl-1">-</span>
                  <span class= "${row.html > 0 ? 'text-info' : ''}"> ${row.html > 0 ? row.html + '%' : row.html}</span><span class="pl-1">-</span>
                  <span class="${row.text > 0 ? 'text-info' : ''}"> ${row.text > 0 ? row.text + '%' : row.text} </span>
                 
                  `,
          class: 'align-middle text-left font-12 ml-1',
          width: '14%'
        },
        {
          title: "TimesSeen ",
          "data": data => `<div class="round round-sm font-10 ${data.timesSeen <= 100 ? data.timesSeen <= 10 ? 'bg-success' : 'bg-danger' : 'bg-warning'}">${data.timesSeen ? numeral(data.timesSeen).format('0,0') : 0}</a>`,
          class: 'align-middle font-12',
          width: '9%'
        },

        ],
        buttons: [{
          extend: 'excelHtml5',
          text: '<i class="fad fa-arrow-down mr-1"></i> Download',
          filename: 'fff_com_vn_TatCaNoiDungQuangCao'
        }],
        dom: 'Bfrtip',
        ordering: false,
        rowId: 'trId',
        info: false,
        autoWidth: false,
        searching: false,
        sorting: true,
        //   scrollY: '350px',
        scrollCollapse: false,
        paging: true,
        pageLength: 5,
        processing: false,
        destroy: true,
        pageLength: 10,
        initComplete: function (settings, json) {
          $("table.dataTable thead th").css("padding", "10px");
          $("table.dataTable tbody tr td").css("padding", "15px 10px");
          // renderSparkline('PaidPageTable')
        }
      }
      )
    }
    $('.btnGoBack').click(() => changeURL('website', null));
    $('.btnKeyWord').click(() => changeURL('keyword', null));

  })