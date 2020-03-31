import api from './echartFcgg.js';

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
                // Get all data
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
                    // $('.getWebsiteAdsVisitsOverview').html('')
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
                api("getScrapedSearchAds", domain);               

                api("getTrafficDestinationAds", domain);                

                $("input[type=radio][name=engagementVisits]").change(function() {

                    let ele = document.getElementById("getEngagementVisits");

                    echarts.dispose(ele);

                    $('#getEngagementVisits').addClass('is-loading');

                    if (this.value == "setEngagementVisitsMonthly") {
                        api("getEngagementVisitsMonthly", domain);
                    }
                    if (this.value == "setEngagementVisitsWeekly") {
                        api("getEngagementVisitsWeekly", domain);
                    }
                    if (this.value == "setEngagementVisitsDaily") {
                        api("getEngagementVisitsDaily", domain);
                    } else {}
                });

              
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

                //getTrendingKeywordsTable
                initDatatable(
                    'getTrendingKeywordsTable', {
                        ajax: {
                            url: `//localapi.trazk.com/webdata/v3.1.php?task=getTrendingKeywordsTable&domain=${domain}&userToken=${userToken}`,
                            dataSrc: (json) => {
                                if (!json.data || !json.data.data) {
                                    return [];
                                } else {
                                    let { Data: newData } = json.data.data;
                                    return newData.filter(item => item.SearchTerm !== 'grid.upgrade')
                                }

                            },
                        },
                        drawCallback: function(settings) {
                            $('.getTrendingKeywordsTable-container').removeClass('is-loading').unblock();
                            $('.getTrendingKeywordsTable-container').find('.fa-spin').removeClass('fa-spin');
                        },
                        columns: [
                            { title: 'Từ khoá', data: data => `<a href="#"  data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${data.SearchTerm}</a>` },
                            { title: 'CPC', data: data => `$${data.CPC}` },
                            {
                                title: 'Tự nhiên/Trả phí',
                                data: data => `
            <div class="d-flex no-block flex-row">
              <div>${numeral(data.Organic).format('0%')}</div>
              <div class="progress border w-25 mx-2">
                <div class="progress-bar bg-info h-100" style="width: ${numeral(data.Organic).format('0%')};" role="progressbar"></div>
                <div class="progress-bar bg-warning h-100" style="width: ${numeral(data.Paid).format('0%')};" role="progressbar"></div>
              </div>
              <div>${numeral(data.Paid).format('0%')}</div>
            `
                            },
                            { title: 'Vị trí', data: data => `${data.PositionOrganic[0].Value}/${data.PositionPaid[0].Value}` },
                            { title: 'Số lần tìm kiếm', data: data => $.number(data.KwVolume), className: 'text-right' },
                            {
                                title: 'Tỉ lệ truy cập',
                                data: data => numeral(data.TotalShare).format('0.00%'),
                                className: 'text-center'
                            },
                            {
                                title: 'Website đích',
                                data: data => {
                                    let url = data.DestUrlOrganic[0].Value;
                                    return url == 'N/A' ? '-' : `<a class="text-truncate" href="${url}">${url.length > 30 ? url.substring(0, 30) + '...' : url}</a>`
                                }
                            },
                        ],
                        "order": [
                            [5, 'desc']
                        ],
                        columnDefs: [{
                            targets: 0,
                            width: '250px'
                        }],
                        language,
                        info: false,
                        autoWidth: false,
                        searching: false,
                        scrollY: '350px',
                        scrollCollapse: true,
                        paging: false,
                        processing: true,
                        initComplete: function(settings, json) {
                            $(`#getTrendingKeywordsTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
                            $(`#getTrendingKeywordsTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                                // .find('thead').addClass('bg-secondary')
                                .find('th').each(function(i) { $(this).addClass('border-top-0 border-bottom') });
                            $('.getTrendingKeywordsTable-container').removeClass('is-loading');
                            $('#getTrendingKeywordsTable .dataTables_empty').text("").addClass('empty-state');
                        }
                    }
                )

                //getPaidKeywordsTable
                initDatatable(
                        'getPaidKeywordsTable', {
                            ajax: {
                                url: `//localapi.trazk.com/webdata/v3.1.php?task=getPaidKeywordsTable&domain=${domain}`,
                                dataSrc: (json) => {
                                    if (json === null || !json.data) {
                                        return []
                                    } else {
                                        if (json.data.data === null) {

                                            return []
                                        } else {
                                            let { Data: newData } = json.data.data;
                                            return newData.filter(item => item.SearchTerm !== 'grid.upgrade')
                                        }
                                    }

                                },
                            },
                            drawCallback: function(settings) {
                                if (settings.aoData.length == 0) $("#row-getPaidKeywordsTable").hide();
                                $('.getPaidKeywordsTable-container').removeClass('is-loading').unblock();
                                $('.getPaidKeywordsTable-container').find('.fa-spin').removeClass('fa-spin');
                            },
                            columns: [
                                    { title: 'Từ khoá', data: data => `<div class="text-truncate" style="max-width:350px"><a href="#" data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${data.SearchTerm}</a></div>` },
                                    { title: 'CPC', data: data => `<div class="text-center">$${data.CPC}</div>` },
                                    { title: 'Vị trí', data: data => data.PositionPaid[0].Value },
                                    { title: 'Tìm kiếm', data: data => $.number(data.KwVolume) },
                                    {
                                        title: 'Tỉ lệ',
                                        data: data => numeral(data.TotalShare).format('0.00%')
                                    },
                                    {
                                        title: 'Website đích',
                                        data: data => {
                                                let url = data.DestUrlOrganic[0].Value;
                                                return `<div style="">${url == 'N/A' ? '-' : `<a class="text-truncate" href="${url}">${url.length > 10 ? url.substring(0, 10) + '...' : url}</a>`}</div>`
            }
          },
        ], "order": [[4, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getPaidKeywordsTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getPaidKeywordsTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getPaidKeywordsTable-container').removeClass('is-loading');
          $('#getPaidKeywordsTable .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )

    //getTrafficSourcesSearchDetails
    initDatatable(
      'getTrafficSourcesSearchDetails',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getTrafficSourcesSearchDetails&domain=${domain}`,
          dataSrc: json => {
            if (!json.data || !json.data.data) {
              return [];
            } else {
              return json.data.data;
            }
          }
        },
        drawCallback: function (settings) {
          $('.getTrafficSourcesSearchDetails-container').removeClass('is-loading').unblock();
          $('.getTrafficSourcesSearchDetails-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          { title: 'Từ khoá', data: data => `<div style="width:100px;word-wrap: break-word;"> <a href="#"  data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${data.SearchTerm}</a></div>` },
          { title: 'CPC', data: data => `$${data.CPC}` },
          { title: 'Lượt tìm kiếm', data: data => $.number(data.KwVolume) },
          { title: 'Tỉ lệ truy cập', data: data => `<div>${numeral(data.TotalShare).format('0.00%')}</div>` }
        ], "order": [[3, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getTrafficSourcesSearchDetails_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficSourcesSearchDetails_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });

          $('.getTrafficSourcesSearchDetails-container').removeClass('is-loading');
          $('#getTrafficSourcesSearchDetails .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )

    //getOrganicKeywordsTable
    const getOrganicKeywordsTableTable = initDatatable(
      'getOrganicKeywordsTable',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getOrganicKeywordsBrandedTable&domain=${domain}`,
          dataSrc: (json) => {
            if (!json.data || !json.data.data) {
              return [];
            } else {
              let website = json.data.website;
              let Data = json.data.data.Data;
              let newData = [];
              if (Data) {
                if (Data[`${website}`]) {
                  newData = Data[`${website}`].Data;
                } else {
                  newData = Data
                }
              }
              if (newData.length == undefined)
                newData = [];

              return newData.filter(item => item.SearchTerm !== 'grid.upgrade')
            }

          },
        },
        columns: [
          {
            title: 'Từ khoá', data: data => {
              const keyWork = data.SearchTerm.length > 15 ? data.SearchTerm.substring(0, 15) : data.SearchTerm;
              return `<div style="width:100px;word-wrap: break-word;"><a href="?view=keywords&action=keywords-overview&keyword=${keyWork}&language=vn"  data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${keyWork}</a></div>`
            }
          },
          { title: 'CPC', data: data => `$${data.CPC}` },
          { title: 'Vị trí', data: data => data.PositionPaid[0].Value },
          { title: 'Lượt tìm kiếm', data: data => $.number(data.KwVolume) },
          { title: 'Tỉ lệ truy cập', data: data => `<div>${numeral(data.TotalShare).format('0.00%')}</div>` }
        ], "order": [[4, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getOrganicKeywordsTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getOrganicKeywordsTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('#getOrganicKeywordsTable .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )
    //getOrganicKeywordsTable option handle
    $("input[type=radio][name=getOrganicKeywordsTable]").change(function () {

      $('#getOrganicKeywordsTable').removeClass('empty-state').addClass('is-loading');
      const url = `https://localapi.trazk.com/webdata/v3.1.php?task=${this.value == "getOrganicKeywordsNonBrandedTable" ?
        'getOrganicKeywordsNonBrandedTable' :
        'getOrganicKeywordsBrandedTable'}&domain=${domain}`;
      getOrganicKeywordsTableTable.ajax.url(url).load(() => {
        $('#getOrganicKeywordsTable').removeClass('is-loading');
        $('#getOrganicKeywordsTable .dataTables_empty').text("").addClass('empty-state');
      });
    });


    //chart mới

    $('#getTrafficAndEngagement a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $(`.tab-pane.active`).removeClass('empty-state')
      var taskName = $(e.target).data('task'); // activated tab 
      // console.log(taskName);
      $('.time-access-reloadtask').attr('data-task', taskName)
      if (taskName == "getTrafficAndEngagementVisits" || taskName == "getTrafficAndEngagementAvgVisitDuration" || taskName == "getTrafficAndEngagementPagesPerVisit" || taskName == "getTrafficAndEngagementBounceRate") {
        // console.log("ddddd");
        $("div#TimeChart").html(`<fieldset>
        <input id="set${taskName}Daily" class="radio-inline__input" type="radio"
            name="${taskName}" value="set${taskName}Daily" />
        <label class="radio-inline__label" for="set${taskName}Daily">
            Ngày
        </label>
        <input id="set${taskName}Weekly" class="radio-inline__input" type="radio"
            name="${taskName}" value="set${taskName}Weekly"
            checked="checked" />
        <label class="radio-inline__label" for="set${taskName}Weekly">
            Tuần
        </label>
        <input id="set${taskName}Monthly" class="radio-inline__input" type="radio"
            name="${taskName}" value="set${taskName}Monthly" />
        <label class="radio-inline__label" for="set${taskName}Monthly">
            Tháng
        </label>
    </fieldset>`);
      } else {
        $("div#TimeChart").html("");
      }
      console.log(taskName);
      
      let name_access=taskName;
      let temp = taskName;
      if (taskName == "getTrafficAndEngagementVisits")//lượt truy cập
        taskName = "getTrafficAndEngagement--MonthlyVisits";
      else if (taskName == "getTrafficAndEngagementAvgVisitDuration")//trung bình thời lượng
        taskName = "getTrafficAndEngagement--AvgVisitDuration";
      else if (taskName == "getTrafficAndEngagementPagesPerVisit")//số trang truy cập
        taskName = "getTrafficAndEngagement--PagesPerVisit";
      else if (taskName == "getTrafficAndEngagementBounceRate")//tỷ lệ thoát
        taskName = "getTrafficAndEngagement--BounceRate";
      else
        taskName = "getTrafficAndEngagement--MonthlyUniqueVisitors";

      let ele = document.getElementById(taskName);

      // echarts.dispose(ele);
      $(`#${taskName}`).addClass('is-loading');
      console.log(name_access);
      if (taskName == "getTrafficAndEngagement--MonthlyUniqueVisitors")
        api(temp + "Monthly", domain);
      else
        api(temp + "Weekly", domain);

      //lượt truy cập
      $("input[type=radio][name=getTrafficAndEngagementVisits]").change(function () {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--MonthlyVisits");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--MonthlyVisits').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementVisitsMonthly") {
          api("getTrafficAndEngagementVisitsMonthly", domain);
        } if (this.value == "setgetTrafficAndEngagementVisitsWeekly") {
          api("getTrafficAndEngagementVisitsWeekly", domain);
        } if (this.value == "setgetTrafficAndEngagementVisitsDaily") {
          api("getTrafficAndEngagementVisitsDaily", domain);
        } else {
        }
      });
      //trung bình thời lượng
      $("input[type=radio][name=getTrafficAndEngagementAvgVisitDuration]").change(function () {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--AvgVisitDuration");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--AvgVisitDuration').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementAvgVisitDurationMonthly") {
          api("getTrafficAndEngagementAvgVisitDurationMonthly", domain);
        } if (this.value == "setgetTrafficAndEngagementAvgVisitDurationWeekly") {
          api("getTrafficAndEngagementAvgVisitDurationWeekly", domain);
        } if (this.value == "setgetTrafficAndEngagementAvgVisitDurationDaily") {
          api("getTrafficAndEngagementAvgVisitDurationDaily", domain);
        } else {
        }
      });
      //số trang truy cập
      $("input[type=radio][name=getTrafficAndEngagementPagesPerVisit]").change(function () {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--PagesPerVisit");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--PagesPerVisit').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementPagesPerVisitMonthly") {
          api("getTrafficAndEngagementPagesPerVisitMonthly", domain);
        } if (this.value == "setgetTrafficAndEngagementPagesPerVisitWeekly") {
          api("getTrafficAndEngagementPagesPerVisitWeekly", domain);
        } if (this.value == "setgetTrafficAndEngagementPagesPerVisitDaily") {
          api("getTrafficAndEngagementPagesPerVisitDaily", domain);
        } else {
        }
      });
      //tỷ lệ thoát
      $("input[type=radio][name=getTrafficAndEngagementBounceRate]").change(function () {
        $(`.tab-pane.active`).removeClass('empty-state')
        let ele = document.getElementById("getTrafficAndEngagement--BounceRate");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--BounceRate').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementBounceRateMonthly") {
          api("getTrafficAndEngagementBounceRateMonthly", domain);
        } if (this.value == "setgetTrafficAndEngagementBounceRateWeekly") {
          api("getTrafficAndEngagementBounceRateWeekly", domain);
        } if (this.value == "setgetTrafficAndEngagementBounceRateDaily") {
          api("getTrafficAndEngagementBounceRateDaily", domain);
        } else {
        }
      });
    });

    $("input[type=radio][name=getTrafficAndEngagementVisits]").change(function () {
        let ele = document.getElementById("getTrafficAndEngagement--MonthlyVisits");
        echarts.dispose(ele);
        $('#getTrafficAndEngagement--MonthlyVisits').addClass('is-loading');
        if (this.value == "setgetTrafficAndEngagementVisitsMonthly") {
          api("getTrafficAndEngagementVisitsMonthly", domain);
        } if (this.value == "setgetTrafficAndEngagementVisitsWeekly") {
          api("getTrafficAndEngagementVisitsWeekly", domain);
        } if (this.value == "setgetTrafficAndEngagementVisitsDaily") {
          api("getTrafficAndEngagementVisitsDaily", domain);
        } else {
        }
      });
    
    //getTopReferrals
    initDatatable(
      'getTopReferrals',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getTopReferrals&domain=${domain}`,
          dataSrc: json => {
            if (!json.data || !json.data.data) {
              return [];
            } else {
              return json.data.data.Data;
            }
          }
        },
        drawCallback: function (settings) {
          $('.getTopReferrals-container').removeClass('is-loading').unblock();
          $('.getTopReferrals-container').find('.fa-spin').removeClass('fa-spin')
        },
        columns: [
          {
            title: 'Website',
            data: data => `<div>
                    <img src="${data.Favicon}" class="mr-1"/>
                    <a  data-type="website" class="changeURL" data-input="${data.Domain}" href="#">${data.Domain}</a>
                  </div>`
          },
          {
            title: 'Tỉ lệ',
            data: data => {
              const share = numeral(data.Share).format('0.00%');
              return `<div class="row">
                        <div class="col-4">
                          ${share}
                        </div>
                        <div class="col-8">
                          <div class="progress border">
                            <div class="progress-bar bg-primary" style="width: ${share}; height:14px;" role="progressbar"></div>
                          </div>
                        </div>
                      </div>`;
            }
          }
        ],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        initComplete: function (settings, json) {
          $(`#getTopReferrals_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTopReferrals_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });

          $('.getTopReferrals-container').removeClass('is-loading');
          $('#getTopReferrals .dataTables_empty').text("").addClass('empty-state');

        }
      }
    )

    //getTrafficDestinationReferrals
    initDatatable(
      'getTrafficDestinationReferrals',
      {
        ajax: {
          url: `https://localapi.trazk.com/webdata/v3.1.php?task=getTrafficDestinationReferrals&domain=${domain}`,
          dataSrc: json => {
            if (!json.data || !json.data.data) {
              return [];
            } else {
              return json.data.data;
            }
          }
        },
        drawCallback: function (settings) {
          $('.getTrafficDestinationReferrals-container').removeClass('is-loading').unblock();
          $('.getTrafficDestinationReferrals-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          {
            title: 'Website',
            data: data => `<div>
                    <img src="${data.Favicon}" class="mr-1"/>
                    <a  data-type="website" class="changeURL" data-input="${data.Domain}" href="?view=traffic-website&action=result&domain=${data.Domain}">${data.Domain}</a>
                  </div>`
          },
          {
            title: 'Tỉ lệ',
            data: data => {
              const share = numeral(data.Share).format('0.00%');
              return `<div class="row">
                        <div class="col-4">
                          ${share}
                        </div>
                        <div class="col-8">
                          <div class="progress border">
                            <div class="progress-bar bg-primary" style="width: ${share}; height:14px;" role="progressbar"></div>
                          </div>
                        </div>
                      </div>`;
            }
          }
        ], "order": [[1, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '220px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getTrafficDestinationReferrals_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficDestinationReferrals_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficDestinationReferrals-container').removeClass('is-loading');
          $('#getTrafficDestinationReferrals .dataTables_empty').text("").addClass('empty-state');

        }
      }
    )
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

    //getTopIncomingAds
    initDatatable(
      'getTopIncomingAds',
      {
        ajax: {
          url: `https://localapi.trazk.com/webdata/v3.1.php?task=getTopIncomingAds&domain=${domain}`,
          dataSrc: json => {
            if (!json.data || !json.data.data) {
              return [];
            } else {
              return json.data.data;
            }
          }
        },
        drawCallback: function (settings) {
          $('.getTopIncomingAds-container').removeClass('is-loading').unblock();
          $('.getTopIncomingAds-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          {
            title: 'Website',
            data: data => `<div>
                    <img src="${data.Favicon}" class="mr-1"/>
                    <a  data-type="website" class="changeURL" data-input="${data.Domain}" href="#">${data.Domain}</a>
                  </div>`
          },
          {
            title: 'Tỉ lệ',
            data: data => {
              const share = numeral(data.Share).format('0.00%');
              return `<div class="row">
                        <div class="col-4">
                          ${share}
                        </div>
                        <div class="col-8">
                          <div class="progress border">
                            <div class="progress-bar bg-primary" style="width: ${share}; height:14px;" role="progressbar"></div>
                          </div>
                        </div>
                      </div>`;
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
          $(`#getTopIncomingAds_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTopIncomingAds_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTopIncomingAds-container').removeClass('is-loading');
          $('#getTopIncomingAds .dataTables_empty').text('').addClass('empty-state');
        }
      }
    );

    //getWebsiteGeography
    initDatatable(
      'getWebsiteGeography',
      {
        ajax: {
          url: `https://localapi.trazk.com/webdata/v3.1.php?task=getWebsiteGeography&domain=${domain}`,
          dataSrc: json => {
            if (!json.data || !json.data.data) {
              return [];
            } else {
              return json.data.data.filter(item => item.Country != null);
            }
          }
        },
        drawCallback: function (settings) {
          $('.getWebsiteGeography-container').removeClass('is-loading').unblock();
          $('.getWebsiteGeography-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          {
            title: 'Quốc gia',
            data: data => {
              let icon = '';
              switch (data.Country.icon) {
                case 'flag flag-in': {
                  icon = 'flag flag-hi';
                  break;
                }
                case 'flag flag-us': {
                  icon = 'flag flag-en';
                  break;
                }
                case 'flag flag-kr': {
                  icon = 'flag flag-ko';
                  break;
                }
                default: {
                  icon = data.Country.icon;
                }
              }
              return `<div>
                  <i class="${icon} mr-1"></i>
                  <span>${data.Country.text}</span>
                </div>`
            }
          },
          {
            title: 'Tỉ lệ',
            data: data => {
              const share = numeral(data.Share).format('0.00%');
              return `<div class="tx-medium">
                          ${share}
                      </div>`;
            }
          }
        ], "order": [[1, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '300px',
        scrollCollapse: true,
        paging: false,
        initComplete: function (settings, json) {
          $(`#getWebsiteGeography_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getWebsiteGeography_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-bottom:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getWebsiteGeography-container').removeClass('is-loading');
          $('#getWebsiteGeography .dataTables_empty').text('').addClass('empty-state');
          $('.dataTables_scrollHeadInner thead').removeClass('text-center');
          $('#getWebsiteGeography_wrapper .dataTables_scrollHeadInner').removeClass('text-center');
        }
      }
    )

    initDatatable(
      'getPaidSearchCompetitorsTable',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getPaidSearchCompetitorsTable&domain=${domain}`,
          dataSrc: (json) => {
            // console.log(json)
            if (json && json.data && json.data.data && json.data.data.Data) {
              let { Data: newData } = json.data.data;
              if (newData.Records != undefined)
                return newData.Records.filter(item => item.Domain != "grid.upgrade")
              // return (newData.Records)
            }

            else {
              return [];
            }
            // else{
            //   let website = json.data.website; 
            //   let Data = json.data.data.Data;

            //   let newData = [];
            //   if(Data) {
            //     newData = Data.Records
            //   }
            //   if(newData == undefined)
            //       newData = [];
            //   return newData.filter(item => item.Domain != "grid.upgrade")
            // }
          },
        },
        drawCallback: function (settings) {
          if (settings.aoData.length == 0) $("#row-getPaidSearchCompetitorsTable").hide();
          $('.getPaidSearchCompetitorsTable-container').removeClass('is-loading').unblock();
          $('.getPaidSearchCompetitorsTable-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          { title: 'Trang web', data: data => `<div class="d-flex"><img class="p-1 mr-2 border rounded bg-secondary" src="${data.Favicon}"/><a data-type="website" class="changeURL" data-input="${data.Domain}" href="#">${data.Domain}</a></div>` },
          {
            title: 'Tỉ lệ cạnh tranh', data: data => `
          <div class="row align-items-center">
              <div class="col-4 text-right">${numeral(data.Score).format('0.00%')}</div>
              <div class="col">
                <div class="progress border">
                    <div class="progress-bar bg-info" style="width: ${numeral(data.Score).format('0%')}; height:14px;" role="progressbar"></div> 
                </div>
              </div> 
          </div>`
          }

        ],
        "order": [[1, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '320px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getPaidSearchCompetitorsTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getPaidSearchCompetitorsTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getPaidSearchCompetitorsTable-container').removeClass('is-loading');
          $('#getPaidSearchCompetitorsTable .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )
   
    initDatatable(
      'getTrafficSourcesTotalReferralsTable',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getTrafficSourcesTotalReferralsTable&domain=${domain}`,
          dataSrc: (json) => {
            if (json && json.data && json.data.data && json.data.data.Data) {
              let { Data: newData } = json.data.data;
              return newData.Records.filter(item => item.Domain != "grid.upgrade")
              // return (newData.Records)
            }

            else {
              return [];
            }

          },
        },
        drawCallback: function (settings) {
          $('.getTrafficSourcesTotalReferralsTable-container').removeClass('is-loading').unblock();
          $('.getTrafficSourcesTotalReferralsTable-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          { title: 'Trang web', data: data => `<div class="d-flex"><img class="p-1 mr-2 border rounded bg-secondary" src="${data.Favicon}"/><a data-type="website" class="changeURL" data-input="${data.Domain}" href="?view=traffic-website&action=result&domain=${data.Domain}">${data.Domain}</a></div>` },
          { title: 'Lượt truy cập', data: data => (data.Visits == 0) ? `-` : `${numeral(data.Visits).format("0,0")}` },
          {
            title: 'Tỉ lệ truy cập', data: data => `
          <div class="row align-items-center">
              <div class="col-4 text-right">${numeral(data.Share).format('0.00%')}</div>
              <div class="col">
                <div class="progress border">
                    <div class="progress-bar bg-info" style="width: ${numeral(data.Share).format('0%')}; height:14px;" role="progressbar"></div> 
                </div>
              </div> 
              <div class="col-4">
                ${(data.Change < 0) ? `<div class="negative text-red">${numeral(data.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(data.Change).format('0.00%')}</div>`}
              </div>
          </div>`
          }

        ],
        "order": [[2, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '220px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getTrafficSourcesTotalReferralsTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficSourcesTotalReferralsTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficSourcesTotalReferralsTable-container').removeClass('is-loading');
          $('#getTrafficSourcesTotalReferralsTable .dataTables_empty').text("").addClass('empty-state');
          if ($('#getTrafficSourcesTotalReferralsTable .dataTables_empty').hasClass('empty-state')) {
            $('.getTrafficSourcesTotalReferralsTable-container').parent().addClass('d-none')
          }
        }
      }
    )

    initDatatable(
      'getTrafficSocialTableDetail',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getTrafficSocialTableDetail&domain=${domain}&userToken=${userToken}`,
          dataSrc: (json) => {
            if (json && json.data && json.data.data && json.data.data.Data) {
              let { Data: newData } = json.data.data;
              return newData.Records.filter(item => item.Page != "grid.upgrade")
              // return (newData.Records)
            }

            else {
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
        "order": [[2, 'desc']],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getTrafficSocialTableDetail_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficSocialTableDetail_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficSocialTableDetail-container').removeClass('is-loading');
          $('#getTrafficSocialTableDetail .dataTables_empty').text("").addClass('empty-state');
        }
      }
    )

    initDatatable(
      'getTrafficDisplayPaidOutgoingWebsitesTable',
      {
        ajax: {
          url: `//localapi.trazk.com/webdata/v3.1.php?task=getTrafficDisplayPaidOutgoingWebsitesTable&domain=${domain}`,
          dataSrc: (json) => {
            if (json && json.data && json.data.data && json.data.data.Data) {
              let { Data: newData } = json.data.data;
              return newData.Records.filter(item => item.Domain != "grid.upgrade");
              // return (newData.Records)
            }

            else {
              return [];
            }

          },
        },
        drawCallback: function (settings) {
          $('.getTrafficDisplayPaidOutgoingWebsitesTable-container').removeClass('is-loading').unblock();
          $('.getTrafficDisplayPaidOutgoingWebsitesTable-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [
          { title: 'Trang web', data: data => `<div class="d-flex;width: 200px;word-wrap: break-word;"><img class="p-1 mr-2 border rounded bg-secondary" src="${data.Favicon}"/><a href="./?view=traffic-website&action=result&domain=${data.Domain}">${data.Domain}</a> </div>` },
          { title: 'Lượt truy cập', data: data => (data.Visits == 0) ? `-` : `${numeral(data.Visits).format("0,0")}` },
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
        scrollY: '250px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        initComplete: function (settings, json) {
          $(`#getTrafficDisplayPaidOutgoingWebsitesTable_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getTrafficDisplayPaidOutgoingWebsitesTable_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficDisplayPaidOutgoingWebsitesTable-container').removeClass('is-loading');
          $('#getTrafficDisplayPaidOutgoingWebsitesTable .dataTables_empty').text("").addClass('empty-state');
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
            console.log('ee',json);
             
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
                $('#DataTables_Table_1_wrapper').css('min-height','268px');
                $('#DataTables_Table_1_wrapper').addClass('empty-state')
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
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $('.getTrafficDisplayAdvertisingWebsitesTable-container').removeClass('is-loading');
          $('#getTrafficDisplayAdvertisingWebsitesTable .dataTables_empty').text("").addClass('empty-state');
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
          // tooltipFormatter: (sparkline, options, fields) =>
          //     `<span style="color: ${fields.color}">&#9679;</span> Tháng ${++fields.x}: ${numeral(fields.y).format(0,0)}`,
          barColor: '#74b9ff',
          sliceColors: ['#1abc9c', '#e74c3c'],
          fillColor: 'rgba(61, 133, 222, 0.3)',
        });
      });
    }

    //getTrendingKeywordsTable
    initDatatable(
      'getKeywords',
      {
        ajax: {
          url: `//localapi.trazk.com/keywords/keywords.php?task=keywordPlannerDomain&limit=10&domain=${domain}`,
          dataSrc: (json) => {
            if (json.data.keywords == null) {
              $('#table_getKeywords').addClass('d-none')
            }
            return json.data.keywords;

          },
        },
        drawCallback: function (settings) {
          // $('.getTrendingKeywordsTable-container').removeClass('is-loading').unblock();
          // $('.getTrendingKeywordsTable-container').find('.fa-spin').removeClass('fa-spin');
        },
        columns: [{
          title: 'Từ khoá',
          data: data => `
            <div class="d-flex no-block flex-row">
              <a href="?view=keywords&action=keywords-overview&keyword=${data.keyword}&language=vn"  data-type="keyword" class="changeURL" data-input="${data.keyword}"><i class="child-hover far fa-search mr-1"></i> ${data.keyword}</a>
              <div class="lichsuHienThi d-none d-md-flex sparkline ml-auto" data-sparkline="[${data.lichsutimkiemtrungbinh}]"></div>
            </div>`,
          // width: '180px'
        },
        {
          title: 'Chiều dài',
          data: "chieudai",
          width: '100px'
        },
        {
          title: 'Độ khó',
          data: 'dokho',
          render: (data) =>
            `<div class="round round-sm align-self-center ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning text-dark' : 'round-danger'}">${data ? data : 0}</a>`,
          width: '100px'
        },
        {
          title: 'Trung bình tìm kiếm',
          data: (data) => numeral(data.solantimkiemtrungbinh).format('0,0'),
          width: '100px'
        },
        {
          title: 'Giá thấp nhất',
          data: (data) => numeral(data.giathaudautrangthapnhat * 23000).format('0,0') + 'đ',
          width: '100px'
        },
        {
          title: 'Giá cao nhất',
          data: "giathaudautrangcaonhat",
          data: (data) => numeral(data.giathaudautrangcaonhat * 23000).format('0,0') + 'đ',
          width: '100px'
        },
        ],
        "order": [
          [3, 'desc']
        ],
        columnDefs: [{
          targets: [1, 3, 4, 5],
          className: 'text-center',
          // render: $.fn.dataTable.render.number(',', '.', 0, '')
        }, {
          targets: 2,
          className: 'text-center'
        }],
        language,
        info: false,
        autoWidth: false,
        searching: false,
        scrollY: '350px',
        scrollCollapse: true,
        paging: false,
        processing: true,
        drawCallback: function () {
          // $(`#getKeywords .lichsuHienThi`).each((index, item) => {  
          //   $('.lichsuHienThi').sparkline($(".lichsuHienThi").data("sparkline"), {
          //     type: 'bar',
          //     width: '50px',
          //     height: '16px',
          //     spotColor: '',
          //     minSpotColor: '',
          //     maxSpotColor: '',
          //     highlightSpotColor: '',
          //     barColor: '#74b9ff',
          //     sliceColors: ['#1abc9c','#e74c3c'],
          //     fillColor: 'rgba(61, 133, 222, 0.3)',
          //   })
          // })
          renderSparkline("getKeywords");
        },
        initComplete: function (settings, json) {
          $(`#getKeywords_wrapper .dataTables_scrollBody`).perfectScrollbar();
          $(`#getKeywords_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
            // .find('thead').addClass('bg-secondary')
            .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
          $(`.getKeywords-container`).removeClass('is-loading');
          $(`#getKeywords .dataTables_empty`).text("").addClass('empty-state');
          if ($(`#getKeywords_wrapper #getKeywords .dataTables_empty`).hasClass('empty-state')) {
            $(`#getKeywords_wrapper #getKeywords .dataTables_empty`).parent().parent().addClass('d-none')
          }
          renderSparkline("getKeywords");
        }
      }
    )
    }
  

  $('.btnGoBack').click(() => changeURL('website', null));

  $('.btnKeyWord').click(() => changeURL('keyword', null));

    function locked(id) {
      $("#Parent-" + id + " #" + id).addClass("locked");
      $("#Parent-" + id).prepend('<div class="center"><a class="btn btn-success shadow" href="//admin.fff.com.vn/login.php" target="_blank"> <i class="fas fa-unlock"></i> Đăng ký để xem data hoàn toàn miễn phí</a></div>');
    }
    
    //locked("getTrafficSourcesOverview");
    locked("getMarketingMixOverview");
    locked("getTrafficSourcesSearch");
    locked("getSearchOrganicPaidOverview");
    locked("getSearchBrandedKeywords");
    locked("getOrganicKeywordsTable");
    // locked("getScrapedSearchAds");
    locked("getPaidSearchCompetitorsTable");
    locked("getPaidKeywordsTable");
    // locked("getWebsiteAdsVisitsOverview");
    // locked("getTrafficDisplayAdvertisingAds");
    locked("getTrafficDestinationAds");
    // locked("getWebsiteAdsIntelDisplay");
    locked("getTrafficDisplayAdvertisingWebsitesTable");
    locked("getTrafficSourcesSocial");
    locked("getTrafficSocialTableDetail");
    locked("getTrafficSourcesTotalReferralsTable");
    locked("getTrafficDisplayPaidOutgoingAdsTable");
    locked("getTrafficDisplayPaidOutgoingWebsitesTable");
    locked("getOutgoingAds");
    locked("getTotalOutgoingAdVisits");
    locked("getTrafficDestinationReferrals");
    locked("getReferralVisits");
    locked("TotalReferrals");
    locked("getTotalReferrals");
    locked("getSocialVisits");
    locked("TotalSocialVisits");
    locked("getTotalSocialVisits");
   
  })