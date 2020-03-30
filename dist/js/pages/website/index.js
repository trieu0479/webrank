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
    previous: '<i class="fal fa-angle-double-left"></i>',
    next: '<i class="fal fa-angle-double-right"></i>'
  }
};
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
};
function estmatedWorth(totalTraffic, TrafficMonetization) {
  return 36 * (totalTraffic * 5.490 + TrafficMonetization * 3256) / 23500;
}

$(document).ready(function () {
  const url = new URL(location.href);
  // Danh mục
  var datawebsite
  async function getDataWebsite() {
    let urlDataWebsite = "//localapi.trazk.com/webdata/websiteapicat.php?task=getCategories";
    return await $.get(urlDataWebsite);
  }
  getDataWebsite().then(res => {
    getTopWebsite(res)
  })
  function getTopWebsite(res) {
    datawebsite = res.data
    // console.log(datawebsite)
    let list = '';
    let dropdownMenu = '';
    let all = `
    <a class="dropdown-item" href="?view=website&action=index">
    <button class="dropdown-item btn btn-info text-center" type="button">
    Toàn bộ
    </button>  
    </a>
    `;
    $('.catalogPTMB').append(all)
    datawebsite.forEach((ele, index) => {
      // <a href="${ele.targetHref.replace("[userToken]", userToken)}">
      list += `
       <a href="?view=website&action=index&name=${ele.name}">
             <div id="${ele.name}" class="kt-widget6__item">
             <span class="pr-2"><i class="${ele.icon}" style="color: #${ele.iconColor}"></i></span>
             <span>${ele.title}</span>
            </div>
          </a>
        `

      dropdownMenu = `
        <a class="dropdown-item" href="?view=website&action=index&name=${ele.name}">
        <button class="dropdown-item" type="button">
              <span class="pr-2"><i class="${ele.icon}" style="color: #${ele.iconColor}"></i></span>
              <span>${ele.title}</span>
              </button>  
           </a>
         `
         $('.catalogPTMB').append(dropdownMenu);
    });
    $('#catalogPT').html(list);
   
    
   
  }

  // Table Topwebsite
  var name = url.searchParams.get("name");
  initDatatable(
    'tablePTDT', {
    ajax: {
      url: (!name) ? "//localapi.trazk.com/webdata/websiteapicat.php?task=getTopWebsiteInVietnam&limit=1000" : `//localapi.trazk.com/webdata/websiteapicat.php?task=getWebsiteInACategoryInVietnam&catName=${name}`,
      dataSrc: function (res) {
        // trId: ele.blockType
        // console.log(res)
        var columns = [];
        var stt = 1;


        let urlCategories = new URL(window.location.href);
        let urlCategories1 = urlCategories.searchParams.get("name");
        if (urlCategories1) {

          $.each(res.data, function (k, v) {

            if (v.category1 == urlCategories1) {
              var tong = v.desktopTraffic + v.mobileTraffic;
              if (tong == 0) {
                desktop = "0"
                mobile = "0"
              } else {
                var desktop = (v.desktopTraffic / tong) * 100
                var mobile = (v.mobileTraffic / tong) * 100
              }
              var output = {};
              output.stt = stt;
              domainWithIcon = `
                          <a href="?view=traffic-website&action=result&domain=${v.domain}">
                          <img class='mr-2' src='https://www.google.com/s2/favicons?domain=${v.domain}'>
                          ${v.domain}
                          </a>
                          `;
              output.domain = domainWithIcon;
              output.AllowGDN = v.allowGDN;
              output.CategoryRank = numeral(v.categoryRank).format("0,0");
              output.GlobalRank = numeral(v.globalRank).format("0,0");
              output.LocalRank = numeral(v.localRank).format("0,0");
              output.DesktopVsMobile = `
                        <div class="d-flex no-block" style="width: 100%;justify-content: center; align-items: center;">
                            <h5 class="mr-2">${Math.ceil(desktop)}%</h5>
                            <div class="progress" style="flex: 0 0 60px">
                                <div class="progress-bg-xanh" style="width:${desktop}%">
                                    <div class="progress-bar bg-xanh" aria-label="pro" role="progressbar" style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress-bg-do" style="width:${mobile}%">
                                    <div class="progress-bar bg-do" role="progressbar" style="width:100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <h5 class="ml-2">${Math.ceil(mobile)}%</h5>
                        </div>
                      `;
              output.TotalTraffic = numeral(v.totalTraffic).format("0,0");
              output.TrafficMonetization = numeral(v.trafficMonetization).format("0,0");
              output.category1 = v.category1;
              output.trId = "row-" + stt;
              stt += 1;
              columns.push(output);
            }
          })

        } else {
          $.each(res.data, function (k, v) {
            var tong = v.desktopTraffic + v.mobileTraffic;
            if (tong == 0) {
              desktop = "0"
              mobile = "0"
            } else {
              var desktop = (v.desktopTraffic / tong) * 100
              var mobile = (v.mobileTraffic / tong) * 100
            }
            var output = {};
            output.stt = stt;
            domainWithIcon = `
                          <a href="?view=traffic-website&action=result&domain=${v.domain}">
                          <img class='mr-2' src='https://www.google.com/s2/favicons?domain=${v.domain}'>
                          ${v.domain}
                          </a>
                          `;
            output.domain = domainWithIcon;
            // console.log(AllowGDN)
            // output.AllowGDN = allowGDN;
            output.AllowGDN = v.allowGDN;
            output.CategoryRank = numeral(v.categoryRank).format("0,0");
            output.GlobalRank = numeral(v.globalRank).format("0,0");
            output.LocalRank = numeral(v.localRank).format("0,0");
            output.DesktopVsMobile = `
                        <div class="d-flex no-block" style="width: 100%;justify-content: center; align-items: center;">
                            <h6 class="mr-2">${Math.ceil(desktop)}%</h6>
                            <div class="progress" style="flex: 0 0 60px; height:5px">
                                <div class="progress-bg-xanh" style="width:${desktop}%">
                                    <div class="progress-bar bg-xanh" aria-label="pro" role="progressbar" style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress-bg-do" style="width:${mobile}%">
                                    <div class="progress-bar bg-do" role="progressbar" style="width:100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <h6 class="ml-2">${Math.ceil(mobile)}%</h6>
                        </div>
                      `;
            output.TotalTraffic = numeral(v.totalTraffic).format("0,0");
            output.TrafficMonetization = numeral(v.trafficMonetization).format("0,0");
            output.category1 = v.category1;
            output.trId = "row-" + stt;
            stt += 1;
            columns.push(output);
          })
        }


        return columns;
      },
    },
    drawCallback: function (settings) {
      $.get("//localapi.trazk.com/webdata/websiteapicat.php?task=getCategories", function (res) {
        res.data.forEach(ele => {
          // console.log(ele.name)
          $('#tablePTDT .Categories').each(function (index, row) {
            if (ele.name == $(this).data("name")) {
              $(this).text(ele.title)
            }
          })
        });
      })

    },
    columns: [{
      title: "STT",
      "data": "stt"
    },
    {
      title: "Website",
      "data": data => `<div class="font-gg text-dark font-weight-500" style="width: 120px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;">${data.domain.replace("?view=traffic-website&action=result&domain", "?view=website&action=overview&domain")}</div>`
    },
    {
      title: "Danh Mục",
      "data": data => {
        return `<a data-name="${data.category1}" href="?view=traffic-website&action=topsites&domain=fff.com.vn&name=${data.category1}" class="Categories"></a>`
      }
    },
    {
      title: "Xếp hàng toàn cầu",
      "data": "GlobalRank"
    },
    {
      title: "Xếp hạng địa phương",
      "data": "LocalRank"
    },
    {
      title: "PC vs Mobile",
      "data": "DesktopVsMobile"
    },
    {
      title: "Tổng Traffic",
      "data": data => `<div class="pl-3 ">${data.TotalTraffic}</div>`
    },
    {
      title: `Traffic kiếm tiền <i class="fad fa-question-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lưu lượng có thể kiếm tiền được"></i>`,
      "data": data => `<div>${data.TrafficMonetization}</div>`
    },
    {
      title: "GDN",
      "data": data => {
        return (data.TrafficMonetization == 0) ? "<span class='px-3 py-1 text-white' style='background: #fd397a; border-radius: 5px;font-weight: 600; font-size: 12px;'>Không<span>" : "<span class='px-3 py-1 text-white' style='background: #0abb87; border-radius: 5px;font-weight: 600; font-size: 12px;'>Có<span>";
      }
    },
    ],
    "ordering": true,
    language,
    info: false,
    autoWidth: true,
    rowId: 'trId',
    processing: true,
    responsive: true,
    pageLength: 50,
    "lengthChange": false,
    initComplete: function (settings, json) {
      // $(`#dataTable_Topsite .dataTables_scrollBody`).addClass("border-0")
      $(`#tablePTDT`).attr('style', 'margin-top:0!important')
        .find('thead').addClass('bg-primary-2')
        .find('th').each(function (i) {
          $(this).addClass('text-dark text-left font-gg border-0 font-11 bg-primary-2')
        });
      $('#tablePTDT_wrapper').attr('style', 'overflow: auto;')
      $('.dataTables_wrapper .dataTables_paginate').attr('style', 'margin-top: 0')
      $('table.dataTable thead th').attr('style', 'background: #fff;padding: 15px 10px;')
    }
  }
  )
})