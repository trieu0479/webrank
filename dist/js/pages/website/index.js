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
  function estmatedWorth(totalTraffic,TrafficMonetization ){
    return 36*(totalTraffic*5.490 + TrafficMonetization*3256)/23500;
}

  $(document).ready(function () {
    const url = new URL(location.href);
    var name = url.searchParams.get("name");
    initDatatable(
      'tablePTDT', {
        ajax: {
          url: (!name) ? "//localapi.trazk.com/webdata/websiteapicat.php?task=getTopWebsiteInVietnam&limit=1000" : `//localapi.trazk.com/webdata/websiteapicat.php?task=getWebsiteInACategoryInVietnam&catName=${name}`,
          dataSrc: function (res) {
            // trId: ele.blockType
            var columns = [];
            $('#tablePTDT_filter').addClass('d-none')
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
                  output.GlobalRank = numeral(v.globalRank).format("0,0");
                  output.LocalRank = numeral(v.localRank).format("0,0");

                  output.TotalTraffic = numeral(v.totalTraffic).format("0,0");
                  output.TrafficMonetization = numeral(v.trafficMonetization).format("0,0");
                  output.estmatedWorth = estmatedWorth(v.totalTraffic,v.trafficMonetization);
                  columns.push(output);
                }
              })
  
            } else {
              $.each(res.data, function (k, v) { 
                  var output = {};
                  domainWithIcon = `
                            <a href="?view=traffic-website&action=result&domain=${v.domain}">
                            <img class='mr-2' src='https://www.google.com/s2/favicons?domain=${v.domain}'>
                            ${v.domain}
                            </a>
                            `;
                  output.domain = domainWithIcon;
                  output.GlobalRank = numeral(v.globalRank).format("0,0");
                  output.LocalRank = numeral(v.localRank).format("0,0");
        
                  output.TotalTraffic = numeral(v.totalTraffic).format("0,0");
                  output.estmatedWorth = estmatedWorth(v.totalTraffic,v.trafficMonetization);
                  columns.push(output); 
              })
            }
  
  
            return columns;
          },
        },
        // drawCallback: function (settings) {
        //   $.get("//localapi.trazk.com/webdata/websiteapicat.php?task=getCategories", function (res) {
        //     res.data.forEach(ele => {
        //       // console.log(ele.name)
        //       $('#dataTable_tablePTDT tr .Categories').each(function (index, row) {
        //           console.log();
                  
        //         if (ele.name == $(this).data("name")) {
        //           $(this).text(ele.title)
        //         }
        //       })
        //     });
        //   })
        // },
        
        columns: [
          {
            title: "Website",
            "data": data => `<div class="font-gg text-dark font-weight-500" style="width: 120px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;">${data.domain}</div>`
          },
         
          {
            title: "Giá trị (USD)",
            "data":data => `<span class="badge  ${data.estmatedWorth <= 5000000 ? data.estmatedWorth <= 1000000 ?'bg-success' : 'bg-warning' : 'bg-danger'}">${numeral(data.estmatedWorth).format('0,0')}</span>`
          },
          {
            title: "Xếp hạng thế giới",
            "data": "GlobalRank"
          },
          {
            title: "Xếp hạng địa phương",
            "data": "LocalRank"
          }
        ],
        // "ordering": true,
        "order":[1,'desc'],
        language,
        info: false,
        autoWidth: false,
        rowId: 'trId',
        processing: true,
        pageLength: 15,
        "lengthChange": false,
        initComplete: function (settings, json) {
          // $(`#dataTable_Topsite .dataTables_scrollBody`).addClass("border-0")
          $(`#tablePTDT`).attr('style', 'margin-top:0!important')
            .find('thead').addClass('bg-primary-2')
            .find('th').each(function (i) {
              $(this).addClass('text-dark text-left font-gg border-0 font-11')
            });
          $('#tablePTDT_wrapper').attr('style', 'overflow: auto;')
          $('.dataTables_wrapper .dataTables_paginate').attr('style','justify-content:center!important').addClass('mt-0')
          $('table.dataTable thead th').attr('style', 'background: #fff;padding: 15px 10px;')
        //   $('#tablePTDT_paginate').css('','')
        }
      }
    )

    let urlCata = `//localapi.trazk.com/fff/tools.php?task=getToolByCategory&userToken=${userToken}&cat=1`;
    $.get(urlCata, function (data) {
        data = JSON.parse(data);
        let html = "";
        data.data.forEach(async el => {

            if (el.type == "FREE")
                el.type = "Miễn Phí";

            html = `
            <a href="${el.targetHref.replace("[userToken]", userToken)}">
             <div id="${el.name}" class="kt-widget6__item">
             <span class="pr-2">${el.icon}</span>
             <span>${el.title}</span>
            </div>
            </a>
                `
            await $("#catalogPT").append(html);
            $(`#${el.name} span`).find("i").css({
                "font-size": "12px",
                "color": `#${el.color}`,
                "padding-top": "3px"
            });

        })
    })


  })