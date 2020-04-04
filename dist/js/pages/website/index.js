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
    <a class="dropdown-item" href="${rootURL}/top-website-vietnam">
    <button class="dropdown-item btn btn-info text-center" type="button">
    Toàn bộ
    </button>  
    </a>
    `;
    list = `
      <a href="${rootURL}/top-website-vietnam">
            <div id="" class="kt-widget6__item">
            <span class="pr-2"><i class="fad fa-globe-asia text-info"></i></span>
            <span>Toàn bộ</span>
           </div>
         </a>
       `;
    $('.catalogPTMB').append(all)
    datawebsite.forEach((ele, index) => {
      // <a href="${ele.targetHref.replace("[userToken]", userToken)}">
      
      list += `
       <a href="${rootURL}/top-website-vietnam/${ele.name}">
             <div id="${ele.name}" class="kt-widget6__item">
             <span class="pr-2"><i class="${ele.icon}" style="color: #${ele.iconColor}"></i></span>
             <span>${ele.title}</span>
            </div>
          </a>
        `

      dropdownMenu = `
        <a class="dropdown-item" href="${rootURL}/top-website-vietnam/${ele.name}">
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
  if (location.href.indexOf("/top-website-vietnam/") > 1) {
    name = location.href.substring(location.href.indexOf("/top-website-vietnam/") + 21);
    console.log(name);
  } 
  
  initDatatable(
    'tablePTDT', {
    ajax: {
      url: (!name) ? "//localapi.trazk.com/webdata/websiteapicat.php?task=getTopWebsiteInVietnamServer&limit=50" : `//localapi.trazk.com/webdata/websiteapicat.php?task=getWebsiteInACategoryInVietnamServer&catName=${name}&limit=50`,
      dataSrc: function (res) {
        // trId: ele.blockType
        // console.log(res)
        var columns = [];
        var stt = parseInt(res.from) + 1;


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
                          <a href="${rootURL}/rank/${v.domain}">
                          <img class='mr-2' src='https://www.google.com/s2/favicons?domain=${v.domain}'>
                          ${v.domain} 
                          </a>
                          <a target="blank" href="https://${v.domain}"><i class="fal fa-external-link-square-alt text-muted ml-1"></i></a>
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
                          <a href="${rootURL}/rank/${v.domain}">
                          <img class='mr-2' src='https://www.google.com/s2/favicons?domain=${v.domain}'>
                          ${v.domain}
                          </a>
                          <a target="blank" href="https://${v.domain}"><i class="fal text-muted fa-external-link-square-alt ml-1"></i></a>

                          `;
            output.domain = domainWithIcon;
            // console.log(AllowGDN)
            // output.AllowGDN = allowGDN;
            output.AllowGDN = v.allowGDN;
            output.CategoryRank = numeral(v.categoryRank).format("0,0");
            output.GlobalRank = numeral(v.globalRank).format("0,0");
            output.LocalRank = numeral(v.localRank).format("0,0");
            output.DesktopVsMobile = `
                        <div class="no-block" style="width: 100%;justify-content: center; align-items: center;">
                            <h6 class="percentMobilePC">${Math.ceil(desktop)}%</h6>
                            <div class="progress" style="flex: 0 0 60px; height:5px">
                                <div class="progress-bg-xanh" style="width:${desktop}%">
                                    <div class="progress-bar bg-xanh" aria-label="pro" role="progressbar" style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress-bg-do" style="width:${mobile}%">
                                    <div class="progress-bar bg-do" role="progressbar" style="width:100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            
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
      "data": "stt",
      width: '20',
      class:'text-center',
    },
    {
      title: "Website",
      "data": data => `<div class="font-gg text-dark font-weight-500" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;">${data.domain.replace("?view=traffic-website&action=result&domain", "?view=website&action=overview&domain")}</div>`
    },
    {
      title: "Danh Mục",
      className: 'hiddenMobile',
      "data": data => {
        return `<a data-name="${data.category1}" href="?view=traffic-website&action=topsites&domain=fff.com.vn&name=${data.category1}" class="Categories"></a>`
      }
    },
    {
      title: "Hạng thế giới ",
      "data": "GlobalRank",
      class:'text-right hiddenMobile',
    },
    {
      title: "PC vs Mobile",
      className: 'hiddenMobile',
      data: "DesktopVsMobile",
      width: '150',
    },
    {
      title: "Traffic",
      "data": data => `<div class="pl-3 ">${data.TotalTraffic}</div>`,
      class:'text-right',

    },
    {
      title: `Money Traffic <i class="fad fa-question-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lưu lượng có thể kiếm tiền được"></i>`,
      "data": data => `<div>${data.TrafficMonetization}</div>`,
      class:'text-right hiddenMobile',
    },
    {
      title: "GDN",
      className: 'hiddenMobile',
      "data": data => {
        return (data.TrafficMonetization == 0) ? "<span class='px-3 py-1 text-white' style='background: #fd397a; border-radius: 5px;font-weight: 600; font-size: 12px;'>No<span>" : "<span class='px-3 py-1 text-white' style='background: #5867dd; border-radius: 5px;font-weight: 600; font-size: 12px;'>Yes<span>";
      }
    },
    ],
    language,
    ordering:false,
    info: false,
    rowId: 'trId',
    autoWidth: false,
    processing: true,
    pageLength: 50,
    lengthChange: false,
    serverSide: true,
    initComplete: function (settings, json) {
      // $(`#dataTable_Topsite .dataTables_scrollBody`).addClass("border-0")
      $(`#tablePTDT`).attr('style', 'margin-top:0!important')
        .find('thead').addClass('bg-primary-2')
        .find('th').each(function (i) {
          $(this).addClass('text-white text-left font-gg border-0 font-12 bg-dark')
        });
      $('#tablePTDT_wrapper').attr('style', 'overflow: auto;')
      $('.dataTables_wrapper .dataTables_paginate').attr('style', 'margin-top: 0')
     // $('table.dataTable thead th').attr('style', 'background: #fff;padding: 15px 10px;word-wrap:normal')
    }
  }
  )
})