import api from '/dist/dist/js/pages/traffic-website/compareFunctions.js';

$(document).ready(() => {
    // console.log(1)
    const url = new URL(location.href);
    const originalDomain1 = url.searchParams.get("domain1") || url.pathname.split("/")[2];
    const originalDomain2 = url.searchParams.get("domain2") || url.pathname.split("/")[2];

    numeral.locale("vi");

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
    const initDatatable = function(select, tableOptions) {
        const table = $(`#${select}`).DataTable(tableOptions);
        $(table.table().header()).addClass('text-center');
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
    }

    if (!originalDomain1 || !originalDomain2) {
        // Hien thi popup
        getDomain().then(data =>
            data.value ?
            (location.href = `?action=result&domain=${data.value}`) :
            (location.href = `?action=index`)
        );
    } else {
        let domain1 = originalDomain1.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
        let domain2 = originalDomain2.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        api("getHeader", domain1, domain2);
        api("getDesktopVsMobileVisits", domain1, domain2);
        api("getTrafficAndEngagementOverviewMonthly", domain1, domain2);
        api("getWebsiteGeography", domain1, domain2);
        api("getUniqueUsersMonthly", domain1, domain2);
        api("getTrafficSourcesOverview", domain1, domain2);
        api("getMarketingMixOverviewDaily", domain1, domain2);
        api("getTrafficSourcesSearch", domain1, domain2);
        api("getSearchOrganicPaidOverview", domain1, domain2);
        api("getWebDemographicsAge", domain1, domain2);
        api("getWebDemographicsGender", domain1, domain2);
        api("getSearchBrandedKeywords", domain1, domain2);
        api("getScrapedSearchAds", domain1, domain2);
        api("getWebsiteAdsVisitsOverview", domain1, domain2);
        api("getTrafficDisplayAdvertisingAds", domain1, domain2);
        api("getTrafficSocial", domain1, domain2);
        api("getTrafficSourcesSocial", domain1, domain2);
        api("getTrafficSourcesTotalReferrals", domain1, domain2);
        api("getTrafficDisplayPaidOutgoingAds", domain1, domain2);
        api("getTrafficDisplayPaidOutgoingAdsTable", domain1, domain2);
        api("getSimilarSites", domain1, domain2);
        api("getWebsiteAdsIntelDisplay", domain1, domain2);


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


        // $('.btnKeyWord').click(() => changeURL('keyword',null));

        if (isLogin == 'false') {
            function locked(id) {
                $("#Parent-" + id + " #" + id).addClass("locked");
                $("#Parent-" + id).prepend('<div class="center"><a class="btn btn-success shadow" href="//admin.fff.com.vn/login.php" target="_blank"> <i class="fas fa-unlock"></i> Đăng ký để xem data hoàn toàn miễn phí </a></div>');
            }

            // locked("getWebDemographicsAge");
            // locked(`${idDomain1}getDesktopVsMobileVisits`);
            // locked(`${idDomain2}getDesktopVsMobileVisits`);
            locked(`getUniqueUsersMonthly`);
            locked(`getTrafficSourcesOverview`);
            locked(`getMarketingMixOverview`);
            locked(`getTrafficSourcesSearch`);
            locked(`getSearchOrganicPaidOverview`);
            locked(`getSearchBrandedKeywords`);
            locked(`getScrapedSearchAds`);
            locked(`getWebsiteAdsVisitsOverview`);
            locked(`getTrafficDisplayAdvertisingAds`);
            locked(`getSocialVisits`);
            locked(`SocialVisits`);
            locked(`getTrafficSourcesSocial`);
            locked(`getReferralVisits`);
            locked(`ReferralVisits`);
            locked(`getOutgoingAds`);
            locked(`getTrafficDisplayPaidOutgoingAdsTable`);
            locked(`getTotalOutgoingAdVisits`);

        }

        //getTrendingKeywordsTable
        // initDatatable(
        //     'getKeywords', {
        //         ajax: {
        //             url: `//aapi.trazk.com/private/keywords/keywordPlannerDomain.php?limit=10&domain=${domain1}`,
        //             dataSrc: 'data',
        //         },
        //         drawCallback: function(settings) {
        //             // $('.getTrendingKeywordsTable-container').removeClass('is-loading').unblock();
        //             // $('.getTrendingKeywordsTable-container').find('.fa-spin').removeClass('fa-spin');
        //         },
        //         columns: [{
        //                 title: 'Từ khoá',
        //                 data: 0,
        //                 render: data => `<a href="?view=keywords&action=keywords-overview&keyword=${data}&language=vn"  data-type="keyword" class="changeURL" data-input="${data}"><i class="child-hover far fa-search mr-1"></i> ${data}</a>`,
        //                 // width: '180px'
        //             },
        //             {
        //                 title: 'Xu hướng',
        //                 data: 1,
        //                 width: '100px'
        //             },
        //             {
        //                 title: 'Điểm cạnh tranh',
        //                 data: 2,
        //                 width: '100px'
        //             },
        //             {
        //                 title: 'Hiển thị',
        //                 data: 3,
        //                 width: '100px'
        //             },
        //             {
        //                 title: 'Giá thấp nhất',
        //                 data: 4,
        //                 width: '100px'
        //             },
        //             {
        //                 title: 'Giá cao nhất',
        //                 data: 5,
        //                 width: '100px'
        //             },
        //         ],
        //         "order": [
        //             [3, 'desc']
        //         ],
        //         columnDefs: [{
        //             targets: [3, 4, 5],
        //             className: 'text-right',
        //             render: $.fn.dataTable.render.number(',', '.', 0, '')
        //         }, {
        //             targets: 2,
        //             className: 'text-center'
        //         }],
        //         language,
        //         info: false,
        //         autoWidth: false,
        //         searching: false,
        //         scrollY: '350px',
        //         scrollCollapse: true,
        //         paging: false,
        //         processing: true,
        //         drawCallback: function() {
        //             $('.lichsuHienThi').sparkline('html', {
        //                 type: 'bar',
        //                 width: '50px',
        //                 height: '16px',
        //                 spotColor: '',
        //                 minSpotColor: '',
        //                 maxSpotColor: '',
        //                 highlightSpotColor: '',
        //                 barColor: '#74b9ff',
        //                 sliceColors: ['#1abc9c', '#e74c3c'],
        //                 fillColor: 'rgba(61, 133, 222, 0.3)',
        //             })
        //         },
        //         initComplete: function(settings, json) {
        //             $(`#getKeywords_wrapper .dataTables_scrollBody`).perfectScrollbar();
        //             $(`#getKeywords_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
        //                 // .find('thead').addClass('bg-secondary')
        //                 .find('th').each(function(i) { $(this).addClass('border-top-0 border-bottom') });
        //             $(`.getKeywords-container`).removeClass('is-loading');
        //             $(`#getKeywords .dataTables_empty`).text("").addClass('empty-state');
        //         }
        //     }
        // )



        //getWebsiteGeography
        //   initDatatable(
        //   'getWebsiteGeography',
        //   {
        //     ajax: {
        //       url: `https://aapi.trazk.com/private/website/websiteapi.php?task=getWebsiteGeography&domain=${domain1}`,
        //       dataSrc: json =>{
        //         if(!json.data || !json.data.data) {
        //           return [];
        //         } else{
        //           return json.data.data.filter(item=> item.Country != null);
        //         }
        //       } 
        //     },
        //     drawCallback: function (settings) {
        //       $('.getWebsiteGeography-container').removeClass('is-loading').unblock();
        //       $('.getWebsiteGeography-container').find('.fa-spin').removeClass('fa-spin');
        //     },
        //     columns: [
        //       { 
        //         title: 'Quốc gia', 
        //         data : data => {
        //           let icon = '';
        //           switch (data.Country.icon){
        //             case 'flag flag-in':{
        //               icon = 'flag flag-hi';
        //               break;
        //             }
        //             case 'flag flag-us':{
        //               icon = 'flag flag-en';
        //               break;
        //             }
        //             case 'flag flag-kr':{
        //               icon = 'flag flag-ko';
        //               break;
        //             }
        //             default:{
        //               icon = data.Country.icon;
        //             }     
        //           }
        //           return `<div>
        //               <i class="${icon} mr-1"></i>
        //               <span>${data.Country.text}</span>
        //             </div>`
        //         }
        //       },
        //       {
        //         title: 'Tỉ lệ',
        //         data: data => {
        //           const share = numeral(data.Share).format('0.00%');
        //           return `<div class="row">
        //                     <div class="col-4">
        //                       ${share}
        //                     </div>
        //                     <div class="col-8">
        //                       <div class="progress border">
        //                         <div class="progress-bar bg-primary" style="width: ${share}; height:14px;" role="progressbar"></div>
        //                       </div>
        //                     </div>
        //                   </div>`;
        //         }
        //       }
        //     ],"order": [[ 1, 'desc' ]],
        //     language,
        //     info: false,
        //     autoWidth: false,
        //     searching: false,
        //     scrollY: '250px',
        //     scrollCollapse: true,
        //     paging: false,
        //     initComplete: function (settings, json) {
        //       $(`#getWebsiteGeography_wrapper .dataTables_scrollBody`).perfectScrollbar();
        //       $(`#getWebsiteGeography_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
        //         // .find('thead').addClass('bg-secondary')
        //         .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
        //       $(`.getWebsiteGeography-container`).removeClass('is-loading');
        //       $(`#getWebsiteGeography .dataTables_empty`).text('').addClass('empty-state');
        //     }
        //   } 
        // )

        //   initDatatable(
        //     'getWebsiteGeography1',
        //     {
        //       ajax: {
        //         url: `https://aapi.trazk.com/private/website/websiteapi.php?task=getWebsiteGeography&domain=${domain2}`,
        //         dataSrc: json =>{
        //           if(!json.data || !json.data.data) {
        //             return [];
        //           } else{
        //             return json.data.data.filter(item=> item.Country != null);
        //           }
        //         } 
        //       },
        //       drawCallback: function (settings) {
        //         $('.getWebsiteGeography-container').removeClass('is-loading').unblock();
        //         $('.getWebsiteGeography-container').find('.fa-spin').removeClass('fa-spin');
        //       },
        //       columns: [
        //         { 
        //           title: 'Quốc gia', 
        //           data : data => {
        //             let icon = '';
        //             switch (data.Country.icon){
        //               case 'flag flag-in':{
        //                 icon = 'flag flag-hi';
        //                 break;
        //               }
        //               case 'flag flag-us':{
        //                 icon = 'flag flag-en';
        //                 break;
        //               }
        //               case 'flag flag-kr':{
        //                 icon = 'flag flag-ko';
        //                 break;
        //               }
        //               default:{
        //                 icon = data.Country.icon;
        //               }     
        //             }
        //             return `<div>
        //                 <i class="${icon} mr-1"></i>
        //                 <span>${data.Country.text}</span>
        //               </div>`
        //           }
        //         },
        //         {
        //           title: 'Tỉ lệ',
        //           data: data => {
        //             const share = numeral(data.Share).format('0.00%');
        //             return `<div class="row">
        //                       <div class="col-4">
        //                         ${share}
        //                       </div>
        //                       <div class="col-8">
        //                         <div class="progress border">
        //                           <div class="progress-bar bg-primary" style="width: ${share}; height:14px;" role="progressbar"></div>
        //                         </div>
        //                       </div>
        //                     </div>`;
        //           }
        //         }
        //       ],"order": [[ 1, 'desc' ]],
        //       language,
        //       info: false,
        //       autoWidth: false,
        //       searching: false,
        //       scrollY: '250px',
        //       scrollCollapse: true,
        //       paging: false,
        //       initComplete: function (settings, json) {
        //         $(`#getWebsiteGeography1_wrapper .dataTables_scrollBody`).perfectScrollbar();
        //         $(`#getWebsiteGeography1_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
        //           // .find('thead').addClass('bg-secondary')
        //           .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
        //         $(`.getWebsiteGeography-container`).removeClass('is-loading');
        //         $(`#getWebsiteGeography1 .dataTables_empty`).text('').addClass('empty-state');
        //       }
        //     } 
        //   )


        $(window).on('scroll', function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                $(".scroll-down").removeClass("d-none")
            } else {
                $(".scroll-down").addClass("d-none")
            }
        })
    }


});