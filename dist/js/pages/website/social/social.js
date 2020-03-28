import api from './socialFunctions.js';
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

  numeral.locale("en");

  //init datatable
  const initDatatable = function (select, tableOptions) {
    const table = $(`#${select}`).DataTable(tableOptions);
    $(table.table().header()).addClass('text-center');
    //reload click handle
    $(`.${select}`).click(function (event) {
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
    // Get all data

    api("getTrafficSocial", domain);
    api("getHeader", domain);
    api("getTrafficDisplayAdvertisingAds", domain);
    api("getTrafficSourcesSocial", domain);
    api("getSimilarSites", domain);
    // api("getSimilarRegionalAds",domain);

    $(".similarReloadTask").click(function () {
      if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
      let task = $(this).data("task");
      $(this).find('i').addClass('fa-spin');
      api(task, domain, 1);
    })

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

    // Trang Web Xã Hội 
    initDatatable(
      'getTrafficSocialTableDetail',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/websiteapi.php?task=getTrafficSocialTableDetail&domain=${domain}`,
          dataSrc: (json) => {
            console.log(json);
            
            if (json && json.data && json.data.data && json.data.data.Data) {
              let { Data: newData } = json.data.data;
              $(`#getTrafficSocialTableDetail_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none')
              // dataNew = ;
              // console.log(json);
              return newData.Records.filter(item => item.Page != "grid.upgrade")
              // return (newData.Records)
            }
            else {
              $('#getTrafficSocialTableDetail_processing thead').addClass('d-none')
              return [];
            }

          },
        },
        drawCallback: function (settings) {
          $('.getTrafficSocialTableDetail-container').removeClass('is-loading').unblock();
          $('.getTrafficSocialTableDetail-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          { title: 'Trang web', data: data => `<div style="width: 200px;word-wrap: break-word;"><a href="./?view=traffic-website&action=result&domain=${data.Page}">${data.Page}</a></div>` },
          { title: 'Lượt truy cập', data: data => (data.Visits == 0) ? `-` : `${numeral(data.Visits).format("0,0")}` },
          {
            title: 'Tỉ lệ truy cập', data: 'Share',
            render: (data, type, row) => `
          <div class="row align-items-center" style="width:150px">
              <div class="col-4">${numeral(data).format('0.00%')}</div>
              <div class="col">
                <div class="progress border">
                    <div class="progress-bar bg-info" style="width: ${numeral(data).format('0%')}; height:14px;" role="progressbar"></div> 
                </div>
              </div>
              <div class="col-4">
                ${(row.Change == null) ? `  -` : (row.Change < 0) ? `<div class="negative text-red">${numeral(row.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(data.Change).format('0.00%')}</div>`}
              </div>
          </div>`
          },
        ],
        "ordering": true,
        language,
        info: false,
        autoWidth: true,
        searching: false,
        // responsive:true,
        scrollY: "230px",
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getTrafficSocialTableDetail_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficSocialTableDetail_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
          $(`#getTrafficSocialTableDetail_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-none')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficSocialTableDetail-container').removeClass('is-loading');
          $('#getTrafficSocialTableDetail .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )





    const renderSparkline = (task) => {
      $(`#${task} .sparkline`).each((index, item) => {
        $(item).sparkline($(item).data('sparkline'), {
          type: $(item).data('sparktype') || 'bar',
          width: '50px',
          height: '16px',
          spotColor: '',
          minSpotColor: '',
          maxSpotColor: '',
          highlightSpotColor: '',
          barColor: '#74b9ff',
          sliceColors: ['#1abc9c', '#e74c3c'],
          fillColor: 'rgba(61, 133, 222, 0.3)',
        });
      });
    }
  }

  $('.btnGoBack').click(() => changeURL('website', null));

  $('.btnKeyWord').click(() => changeURL('keyword', null));



  if (isLogin == 'false') {
    function locked(id) {
      $("#Parent-" + id + " #" + id).addClass("locked");
      $("#Parent-" + id).prepend('<div class="center"><a class="btn btn-success shadow" href="//admin.fff.com.vn/login.php" target="_blank"> <i class="fas fa-unlock"></i> Đăng ký để xem data hoàn toàn miễn phí</a></div>');
    }
    locked("getTrafficDisplayAdvertisingAds");
    locked("getTrafficSourcesSocial");
    locked("getTrafficSocialTableDetail");
    locked("getSocialVisits");
    locked("TotalSocialVisits");
    locked("getTotalSocialVisits");
    // locked("getSimilarRegionalAds");
  }

});