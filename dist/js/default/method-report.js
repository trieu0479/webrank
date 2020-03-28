// import counterUp from '../counterup2/index.js';
// import counterUp from '../../../../js/pages/keywords/counterup2/index.js';

// const counter = document.querySelector('.counter');

const test = new URL(window.location.href);
var domain = test.searchParams.get("domain");
var arrDomain = [];
var selectWebsite = "";
const key = url.searchParams.get("key");
// function key() {
//     let test = new URL(window.location.href);
//     key = test.searchParams.get("key");
//     if(key){
//         $.ajax({
//             url: `https://localapi.trazk.com/report/index.php?task=getReportByKey&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&key=${key}`,
//             type: "GET"
//         }).then(data => {
//             var dataKey = JSON.parse(data);
//             console.log(dataKey);
//             for (var i=0;i<dataKey.data.reportData.length;i++){
               
//                 var item = dataKey.data.reportData[i];
//                 var datags = {};
//                 console.log(item);
//                 datags.x = item["gs-x"];
//                 datags.y = item["gs-y"];
//                 datags.w = item["gs-width"];
//                 datags.h = item["gs-height"];
//                 loadMiniReport(item['task'],datags.x,datags.y,datags.w,datags.h);
//             }
//         })
//     }
// }
// function loadMiniReport(task,x,y,w,h){
//     console.log(task,x,y,w,h);
    
// }
// key()

const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];

const getHeader = async data => {
    // Get value Header  
    const {
        data: similarHeader,
        website: similarDomain
    } = data.data;

    let {
        icon: similarIcon,
        title: similarTitle,
        description: similarDescription,
        relatedApps: similarRelatedApps,
        imageLarge: similarThumb,
        tags: similarTags,
        globalRanking: similarGlobalRank,
        highestTrafficCountryRanking: similarCountryRank,
    } = similarHeader;

    let similarThumbMobile = similarThumb.replace("t=1", "t=4");
    let similarThumbMapHeat = similarThumb.replace("t=1", "t=3");

    if (!similarThumb.startsWith('http')) {
        similarThumb = 'assets' + similarThumb;
        similarThumbMobile = similarThumb;
    }

    // Check value Header
    if (!similarTags) similarTags = []; // set null = []
    if (similarTags.length <= 0)
        $(".similarHeader .similarTags").addClass("d-none");
    if ($.isEmptyObject(similarRelatedApps))
        $(".similarHeader .similarRelatedApps").addClass("d-none");
    if (!similarRelatedApps)
        similarRelatedApps = [];
    if (!similarTitle)
        similarTitle = "<em>Website này chưa cập nhật tiêu đề</em>";
    if (similarDescription == "")
        similarDescription = "<em>Website này chưa cập nhật mô tả</em>"; 
        
    // Set value Header
    similarIcon = "https://files.fff.com.vn/f.php?url=" + btoa(similarIcon);
    $(".similarHeader .similarIcon").html(
        `<img class="p-1 mr-2 border rounded bg-secondary" src="${similarIcon}" />`
    );
    $(".similarHeader .similarDomain").text(similarDomain);
    $(".similarFooter .similarGlobalRank").text('#' + numeral(similarGlobalRank).format('0,0'));
    $(".similarFooter .similarCountryRank").text('#' + numeral(similarCountryRank).format('0,0'));
    $(".similarHeader .similarTitle").html(similarTitle);
    $(".similarHeader .similarDescription").html(similarDescription);
    $(".similarHeader .similarTags").html(
        '<p class="font-bold mb-2"><i class="far fa-tag font-14"></i> Từ khoá: </p>' +
        similarTags.map(tag => `<span><a href="https://fff.com.vn/ket-qua-phan-tich-tu-khoa/${tag}/"  data-type="keyword" class="changeURL" data-input="${tag}" class="text-muted"><i class="far fa-search"></i> ${tag}</a></span>`).join("")
    );

    $(".similarHeader .similarRelatedAppsTitle").html(
        '<i class="far fa-mobile font-14"></i> Ứng dụng liên quan<br/><span class="font-12 text-muted">CH Play & AppStore</span>'
    );

    let apps = "";
    $.each(similarRelatedApps, (index, item) => {
        const mainApp = item[0];
        const appId =
            (index == "apps_0" ?
                "//play.google.com/store/apps/details?id=" :
                "//itunes.apple.com/us/app/id") + mainApp.id;
        const appIcon = "https://files.fff.com.vn/f.php?url=" + btoa(mainApp.icon);
        const appTitle = mainApp.title;
        apps += `<a target="_blank" class="mr-2" href="${appId}"><img width="32px" src="${appIcon}" /></a>`;
    });

    $(".similarHeader .similarApps").html(
        `<div class="d-flex flex-row">${apps}</div>`
    );

    similarThumb = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumb);
    similarThumbMobile = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumbMobile);
    $(".similarThumb img").attr("src", similarThumb);
    $(".similarThumbMobile img").attr("src", similarThumbMobile);

    // Remove loading state
    $(
        ".similarHeader .similarDomainWrapper," +
        ".similarHeader .similarTitle," +
        ".similarHeader .similarDescription," +
        ".similarHeader .similarTags," +
        ".similarHeader .similarRelatedApps"
    ).removeClass("placeholder-loading");

    
    // Popup nhap website
    const getDomain = async () => {
        const result = await Swal.fire({
        type: "info",
        title: "Hãy nhập một website cần phân tích",
        input: "text",
        position: 'top',
        // showCancelButton: true,
        confirmButtonText: 'Phân Tích', 
        showCloseButton: true,  
        // customClass: {
        //     container: 'pt-6'
        // },
        inputValidator: value => {
            if (!value) {
            return "Bạn hãy nhập website để phân tích!";
            }
        }
        });
        return result;
    };

    // Change website
    $(
        ".similarHeader .changeWebSite, .similarHeader .similarDomain"
    ).click(() => {
        getDomain().then(data => {
            if (data.value) {
                location.href = `?view=traffic-website&action=result&domain=${data.value}`;
            }
        });
    });

    const getDomainCompare = async () => {
        const result = await Swal.fire({ 
            title: 'Hãy nhập website để so sánh',
            width:600,
            padding: '4em',
            position: 'top',
            // customClass: {
            //     container: "pt-6"
            // },
            html: 
              `<input id="swal-input1" class="swal2-input text-lowercase" value=${similarDomain} placeholder="Nhập website của bạn">` + 
              `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>`+
              `<input id="swal-input2" autocomplete="off" class="swal2-input text-lowercase" placeholder="Nhập website của đối thủ">` + 
              `<div id="selectWebsiteScrollbar" class="selectWebsite bg-white d-flex flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: 485px"></div>`,
            focusConfirm: false,
            showCloseButton: true,  
            confirmButtonText: 'So Sánh', 
            onOpen: () => { 

                $('#swal-input1').focus();

                $('#selectWebsiteScrollbar').perfectScrollbar(); 

                $.each(arrDomain, (index,site) => {
                    selectWebsite += `<span class="p-2" data-domain="${site.Domain}"><img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}"/>${site.Domain}</span>`
                });

                $('.swal2-confirm').css("opacity","1");
                $(".selectWebsite").css("opacity","0");

                // $('#swal-input2').focus();
                $('#swal-input2').focus(()=> {  
                    $('.swal2-confirm').css("opacity","0");
                    $(".selectWebsite").css("opacity","1");

                    let temp = $("#swal-input2").val(); 

                    if(temp == "" && arrDomain.length >=4) {
                        $(".selectWebsite").css("height","150px");
                        $(".selectWebsite").addClass("overflow-auto");
                    }else {
                        $(".selectWebsite").html("");
                        $('.swal2-confirm').css("opacity","1");
                        $(".selectWebsite").css("opacity","0"); 
                    }
 
                    $(".selectWebsite").html(selectWebsite);

                    $('#swal-input2').keyup(() => {  

                        $(".selectWebsite").css("opacity","1");
                        $('.swal2-confirm').css("opacity","0");

                        let temp = $("#swal-input2").val(); 
                         
                        let dataNew =  arrDomain.filter((el) =>
                              el.Domain.toLowerCase().indexOf(temp.toLowerCase()) > -1
                            ); 
                        selectWebsite = "";
                        $.each(dataNew, (index,site) => {
                            selectWebsite += `<span class="p-2" data-domain="${site.Domain}"><img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}"/>${site.Domain}</span>`
                        })
    
                        if(dataNew.length >=4) {
                            $(".selectWebsite").css("height","150px");
                            $(".selectWebsite").addClass("overflow-auto");
                        }else {
                            $(".selectWebsite").css("height","auto");
                            $(".selectWebsite").removeClass("overflow-auto");
                        }
    
                        if(dataNew.length == 0) { 
                            $('.swal2-confirm').css("opacity","1")
                            $(".selectWebsite").css("opacity","0")
                        }

                        $(".selectWebsite").html(selectWebsite);

                        $("span").click(function() {
                            $("#swal-input2").val($(this).data("domain"));
                            $(".selectWebsite").html("");
                            $('.swal2-confirm').css("opacity","1")
                            $(".selectWebsite").css("opacity","0")
                           
                        })
                    })

                    $("span").click(function() {
                        $("#swal-input2").val($(this).data("domain"));
                        $(".selectWebsite").html("");
                        $('.swal2-confirm').css("opacity","1");
                        $(".selectWebsite").css("opacity","0"); 
                    })
                });

                $('#swal-input2').blur(()=> {
                    $('.swal2-confirm').css("opacity","1");
                    $(".selectWebsite").css("opacity","0");  
                });  

                 
                $('#swal-input2').keypress(event => (event.which == 13) ? $('.swal2-confirm').click() : null);
            },
            preConfirm: () => {
                if(document.getElementById('swal-input1').value == "" || document.getElementById('swal-input2').value == "")
                {
                    Swal.showValidationMessage(
                        `Vui lòng nhập đủ website`
                      )
                } else {
                    if(document.getElementById('swal-input1').value == document.getElementById('swal-input2').value)
                    {
                        Swal.showValidationMessage(
                            `Hai website không được trùng`
                          )
                    }
                }
               
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ] 
            }
            
          }) 
           
          if (result.dismiss == undefined) { 
                return result;
            
        }
            
    }; 
    
    // Change website
    $(".SubmitCompare").click(() => {
        getDomainCompare().then(data => {
            if (data) { 
                location.href = `?view=traffic-website&action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
                // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
            }
        });
    });
};

const api = async (task, domain, check, object ) => {
    domain;
    let taskName = task;
    
    if(task == "totalTraffic" || task == "getDesktopVsMobile"){
        task = "getDesktopVsMobileVisits";
    }
    if(task == "getOutgoingAds" || task == "getTotalOutgoingAdVisits"){
        task = "getTrafficDisplayPaidOutgoingAds";
    }
    try {
        return await $.ajax({
                url: `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${domain}`,
                type: "GET"
            })
            .then(data => {
                if (task == 'buildFeatureImage') {
                    console.log('buildFeatureImage', data.data.data);
                    return;
                }


                let isEmpty = false;
                let temp = 0;
                // Kiểm tra rỗng
                $.each(data, (index, item) => {
                    if (typeof item == "object") {
                        if (!item || item.length == 0) {
                            isEmpty = true;

                            (task == 'getOrganicKeywordsBrandedTable' || task == 'getOrganicKeywordsNonBrandedTable') ? task = 'getOrganicKeywordsTable': null;
                            if ($(`#${task}`).hasClass('is-loading')) {
                                $(`#${task}`).removeClass('is-loading').addClass('empty-state');
                            } else if ($(`#${task}`).find('.is-loading').length > 0) {
                                $(`#${task}`).find('.is-loading').removeClass('is-loading').addClass('empty-state');
                            } else {
                                $(`#${task}`).addClass('empty-state');
                                $(`#getWebsiteAdsIntelDisplay`).removeClass('empty-state');
                                $(`#getScrapedSearchAds`).removeClass('empty-state');
                                
                            }
                            $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                        } else {
                            $.each(item, (data, website) => {
                                if (!data || data.length == 0) {
                                    isEmpty = true;
                                    if ($(`#${task}`).hasClass('is-loading')) {
                                        $(`#${task}`).removeClass('is-loading').addClass('empty-state');
                                        
                                    } else if ($(`#${task}`).find('.is-loading').length > 0) {
                                        $(`#${task}`).find('.is-loading').removeClass('is-loading').addClass('empty-state');
                                        
                                    } else {
                                        $(`#${task}`).addClass('empty-state');
                                    }
                                }
                            })
                        }
                    }
                });
                if (!isEmpty) {
                    switch (taskName) {
                        case "getHeader":
                            getHeader(data);
                            break;
                        case "totalTraffic":
                            totalTraffic(taskName, data, check, object, domain);
                            break;
                        case "getDesktopVsMobile":
                            getDesktopVsMobile(taskName, data, check, object);
                            break;
                        case "getEngagementVisitsDaily":
                        case "getEngagementVisitsWeekly":
                        case "getEngagementVisitsMonthly":
                            getEngagementVisits(taskName, data);
                            break;
                        case "getWebDemographicsGender":
                            getWebDemographicsGender(taskName, data, check, object);
                            break;
                        case "getWebDemographicsAge":
                            getWebDemographicsAge(taskName, data, check, object);
                            break;
                        case "getTrafficSourcesOverview":
                            getTrafficSourcesOverview(taskName, data, check, object);
                            break;
                        case "getTrafficDisplayAdvertisingAds":
                            getTrafficDisplayAdvertisingAds(taskName, data, check, object);
                            break;
                        case "getTrafficSourcesSocial":
                            getTrafficSourcesSocial(taskName, data, check, object);
                            break;
                        case "getSimilarSites":
                            getSimilarSites(taskName, data);
                            break;
                        case "getOutgoingAds":
                            getOutgoingAds(taskName, data, check, object);
                            break;
                        case "getTotalOutgoingAdVisits":
                            getTotalOutgoingAdVisits(taskName, data, check, object);
                            break;
                        case "getTrafficSourcesSearch":
                            getTrafficSourcesSearch(taskName, data, check, object);
                            break;
                        case "getGetAudienceInterests":
                            getGetAudienceInterests(taskName, data);
                            break;
                        case "getTopReferrals":
                            getTopReferrals(taskName, data);
                            break;
                        case "getTrafficDestinationReferrals":
                            getTrafficDestinationReferrals(taskName, data, check, object);
                            break;
                        case "getTrafficSourcesSearchDetails":
                            getTrafficSourcesSearchDetails(taskName, data, check);
                            break;
                        case "getTopIncomingAds":
                            getTopIncomingAds(taskName, data);
                            break;
                        case "getTrafficDestinationAds":
                            getTrafficDestinationAds(taskName, data, check, object);
                            break;
                        case "getWebsiteGeography":
                            getWebsiteGeography(taskName, data, check, object);
                            break;
                        case "getSearchOrganicPaidOverview":
                            getSearchOrganicPaidOverview(taskName, data, check, object);
                            break;
                        case "getWebsiteAdsIntelDisplay":
                            getWebsiteAdsIntelDisplay(taskName, data, check, object);
                            break;
                        case "getScrapedSearchAds":
                            getScrapedSearchAds(taskName, data, check, object);
                            break;
                        case "getSearchBrandedKeywords":
                            getSearchBrandedKeywords(taskName, data, check, object);
                            break;

                        // 2data 
                        // case "getOrganicKeywordsNonBrandedTable":
                        case "getOrganicKeywordsBrandedTable":
                            getOrganicKeywordsBrandedTable(taskName, data, check, object);
                            break;
                        case "getPaidSearchCompetitorsTable":
                            getPaidSearchCompetitorsTable(taskName, data, check, object);
                            break;
                        case "getPaidKeywordsTable":
                            getPaidKeywordsTable(taskName, data);
                            break;
                        case "getTrendingKeywordsTable":
                            getTrendingKeywordsTable(taskName, data);
                            break;
                        case "getTrafficAndEngagementOverviewMonthly": // mới
                            getTrafficAndEngagementOverviewMonthly(taskName, data, check, object);
                            break;

                        // 3 data
                        case "getTrafficAndEngagementVisitsDaily":
                            getTrafficAndEngagementVisitsDaily(taskName, data, domain);
                            break;
                        case "getTrafficAndEngagementVisitsWeekly":
                            getTrafficAndEngagementVisitsWeekly(taskName, data, domain);
                            break;
                        case "getTrafficAndEngagementVisitsMonthly":
                            getTrafficAndEngagementVisitsMonthly(taskName, data, domain);
                            break;

                        
                        case "getUniqueUsersMonthly":
                            getUniqueUsersMonthly(taskName, data, domain);
                            break;
                        case "getTrafficAndEngagementAvgVisitDurationDaily":
                        case "getTrafficAndEngagementAvgVisitDurationWeekly":
                        case "getTrafficAndEngagementAvgVisitDurationMonthly":
                            getTrafficAndEngagementAvgVisitDuration(taskName, data, domain);
                            break;
                        case "getTrafficAndEngagementPagesPerVisitDaily":
                        case "getTrafficAndEngagementPagesPerVisitWeekly":
                        case "getTrafficAndEngagementPagesPerVisitMonthly":
                            getTrafficAndEngagementPagesPerVisit(taskName, data, domain);
                            break;
                        case "getTrafficAndEngagementBounceRateDaily":
                        case "getTrafficAndEngagementBounceRateWeekly":
                        case "getTrafficAndEngagementBounceRateMonthly":
                            getTrafficAndEngagementBounceRate(taskName, data, domain);
                            break;
                        case "getMarketingMixOverviewDaily":
                            // case "getMarketingMixOverviewWeekly":
                            // case "getMarketingMixOverviewMonthly":
                            getMarketingMixOverviewDaily(taskName, data, check, object);
                            break;
                        case "getTrafficSourcesTotalReferrals":
                            getTrafficSourcesTotalReferrals(taskName, data, check, object);
                            break;
                        case "getTrafficSocial":
                            getTrafficSocial(taskName, data, check, object);
                            break;
                        case "getWebsiteAdsVisitsOverview":
                            getWebsiteAdsVisitsOverview(taskName, data, check, object);
                            break;
                        case "getTrafficDisplayPaidOutgoingAdsTable":
                            getTrafficDisplayPaidOutgoingAdsTable(taskName, data, check, object);
                            break;
                        case "getTrafficDisplayAdvertisingWebsitesTable":
                            getTrafficDisplayAdvertisingWebsitesTable(taskName, data, check, object);
                            break;
                        case "getTrafficSocialTableDetail":
                            getTrafficSocialTableDetail(taskName, data, check, object);
                            break;
                        case "getTrafficSourcesTotalReferralsTable":
                            getTrafficSourcesTotalReferralsTable(taskName, data, check, object);
                            break;
                        case "getTrafficDisplayPaidOutgoingWebsitesTable":
                            getTrafficDisplayPaidOutgoingWebsitesTable(taskName, data, check, object);
                            break;
                        default:
                            break;
                    }
                    // console.log(taskName);
                }
                return;
            });
    } catch (error) {
        console.error(error);
    }
};

const getTrafficDisplayPaidOutgoingAdsTable = async (task, data, check, object) => {
    if(check == "true"){
    $("#Parent-getTrafficDisplayPaidOutgoingAdsTable").html(``)
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'61':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                </circle>
                                <path
                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                    id="Path-3" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Kênh quảng cáo trên ${domain}
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDisplayPaidOutgoingAdsTable dropdown-item similarReloadTask text-muted" data-task="getTrafficDisplayPaidOutgoingAdsTable" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="pt-5">
                    <div id="Parent-getTrafficDisplayPaidOutgoingAdsTable">
                        <div id="getTrafficDisplayPaidOutgoingAdsTable" class="w-100 rounded"
                            style="height: 200px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    )
    }
    if (data.status == "success") {
        if (data && data.data && data.data.data) {

            let TrafficDisplayPaidOutgoingAdsTable = data.data.data;

            let dataChart = [];

            $.each(TrafficDisplayPaidOutgoingAdsTable, (index, visit) => {
                let item = {
                    value: visit.Share,
                    name: visit.Name == "Google Display Network" ? "GDN" : visit.Name
                };
                dataChart.push(item);
            });

            // render chart

            let ele = document.getElementById("getTrafficDisplayPaidOutgoingAdsTable");

            let myChart = echarts.init(ele);

            let option = {
                color: customColors,
                legend: {
                    top: "15%",
                    left: '60%',
                    // formatter: function (name) {
                    //     return name=="GDN"?"Google Display Network":name;
                    // },
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["30%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChart
                }]
            };
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart[0].name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(`#${task}`).removeClass('empty-state');
        } else {
            $(`#${task}`).removeClass('is-loading');
            $(`#${task}`).addClass('empty-state');
        }
    } else {
        console.log(`${task} failed`);
    }
}
const getWebsiteAdsVisitsOverview = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'35':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Truy cập quảng cáo hiển thị
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getWebsiteAdsVisitsOverview dropdown-item similarReloadTask text-muted" data-task="getWebsiteAdsVisitsOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-getWebsiteAdsVisitsOverview">
                    <div class="row rounded m-0 p-b-10 justify-content-center py-5" style="height: 270px">
                        <div class="col-auto py-5 is-loading font-number h1 text-center"
                            id="getWebsiteAdsVisitsOverview">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`) 
    }
    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data &&
            data.data.data.Data.Data[domain].AdsTotal > 0) {
            let WebsiteAdsVisitsOverview = data.data.data.Data.Data[domain];

            let AdsTotal = WebsiteAdsVisitsOverview.AdsTotal;

            let VolumeTotal = WebsiteAdsVisitsOverview.VolumeTotal;

            $("#getWebsiteAdsVisitsOverview").removeClass("is-loading");
            $("#getWebsiteAdsVisitsOverview").html(`${numeral(AdsTotal).format("0,0")}<br><span class="h4 font-gg text-muted">${numeral(VolumeTotal).format("0.00%")} của tổng lượng truy cập bằng máy tính</span>`);


            await $(`#getWebsiteAdsVisitsOverview`).removeClass('is-loading');
            $(`#getWebsiteAdsVisitsOverview`).parent().removeClass('empty-state');
        } else {
            $(`#getWebsiteAdsVisitsOverview`).removeClass('is-loading');
            $(`#getWebsiteAdsVisitsOverview`).parent().addClass('empty-state');
        }


    } else {
        console.log(`${task} failed`);
    }
}
const getTrafficAndEngagementOverviewMonthly = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                                <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" id="Combined-Shape" fill="#000000" opacity="1"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Lượt Truy cập Khách Hàng</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTrafficAndEngagementOverviewMonthly" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="w-100" id="getTrafficAndEngagementOverviewMonthly">
                    <div class="w-100 rounded pr-3 pl-3 text-muted" style="height: 250px;">
                        <div class="row pt-4 pb-1">
                            <div class="col-auto">
                                <span class=""><i class="far fa-calendar-week fa-lg"></i></span>
                            </div>

                            <div class="col text-left h6 m-0 align-self-center">
                                ượt truy cập hàng tháng</div>

                            <div class="col-4 text-right">
                                <span class="MonthlyVisits h4 font-gg text-favorite font-bold"></span>
                            </div>
                        </div>

                        <div class="row pt-4 pb-1">
                            <div class="col-auto">
                                <span class=""><i class="far fa-clipboard-user fa-lg"></i></span>
                            </div>

                            <div class="col h6 m-0 align-self-center">hách truy cập hàng tháng
                            </div>

                            <div class="col-4 text-right">
                                <span
                                    class="MonthlyUniqueVisitors h4 font-gg text-favorite font-bold"></span>
                            </div>
                        </div>

                        <div class="row pt-4 pb-1">
                            <div class="col-auto">
                                <span class=""><i class="far fa-stopwatch fa-lg"></i></span>
                            </div>

                            <div class="col h6 m-0 align-self-center">
                                hời gian truy cập trung bình</div>

                            <div class="col-4 text-right">
                                <span class="AvgVisitDuration h4 font-gg text-favorite font-bold"></span>
                            </div>
                        </div>

                        <div class="row pt-4 pb-1">
                            <div class="col-auto">
                                <span class=""><i class="far fa-copy fa-lg"></i></span>
                            </div>

                            <div class="col h6 m-0 align-self-center"> ố trang/Lượt truy cập
                            </div>

                            <div class="col-4 text-right">
                                <span class="PagesperVisit h4 font-gg text-favorite font-bold"></span>
                            </div>
                        </div>

                        <div class="row pt-4 pb-1">
                            <div class="col-auto">
                                <span class=""><i class="far fa-external-link fa-lg"></i></span>
                            </div>

                            <div class="col h6 m-0 align-self-center"> ỷ lệ thoát</div>

                            <div class="col-4 text-right">
                                <span class="BounceRate h4 font-gg text-favorite font-bold"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        if (data && data.data && data.data.data &&  data.data.data.Data) {
            var TrafficAndEngagementOverviewMonthly = null
            if (data.data.data.Data.AvgMonthVisits){
                TrafficAndEngagementOverviewMonthly = data.data.data.Data;
            }else{
                TrafficAndEngagementOverviewMonthly = data.data.data.Data.Data[0];
            }

            let MonthlyVisits = numeral(TrafficAndEngagementOverviewMonthly.AvgMonthVisits).format("0,0");
            let MonthlyUniqueVisitors = numeral(TrafficAndEngagementOverviewMonthly.UniqueUsers).format("0,0");
            let AvgVisitDuration = numeral(TrafficAndEngagementOverviewMonthly.AvgVisitDuration).format("0:00:00");
            let PagesperVisit = numeral(TrafficAndEngagementOverviewMonthly.PagesPerVisit).format("0.00");
            let BounceRate = numeral(TrafficAndEngagementOverviewMonthly.BounceRate).format("00.00%");

            $("span.MonthlyVisits").text(MonthlyVisits);
            $("span.MonthlyUniqueVisitors").text(MonthlyUniqueVisitors);
            $("span.AvgVisitDuration").text(AvgVisitDuration);
            $("span.PagesperVisit").text(PagesperVisit);
            $("span.BounceRate").text(BounceRate);
        } else {
            $(`#getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');
            $(`#getTrafficAndEngagementOverviewMonthly`).addClass('empty-state');
        }
    }
}
const getTrafficAndEngagementVisitsMonthly = async (task, data, domain) => {
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="0" data-gs-y="8" data-gs-width="12" data-gs-height="6" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row m-0 pt-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Truy cập theo thời gian
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="ml-auto d-flex no-block align-items-center pr-3" id="TimeChart">
                        <fieldset>
                        <input id="setgetTrafficAndEngagementVisitsMonthly" class="radio-inline__input"
                                type="radio" name="getTrafficAndEngagementVisits"
                                value="setgetTrafficAndEngagementVisitsMonthly"  checked="checked" />
                            <label class="radio-inline__label"
                                for="setgetTrafficAndEngagementVisitsMonthly">
                                Tháng
                            </label>
                            <input id="setgetTrafficAndEngagementVisitsWeekly" class="radio-inline__input"
                                type="radio" name="getTrafficAndEngagementVisits"
                                value="setgetTrafficAndEngagementVisitsWeekly"/>
                            <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsWeekly">
                                Tuần
                            </label>
                        
                            <input id="setgetTrafficAndEngagementVisitsDaily" class="radio-inline__input"
                                type="radio" name="getTrafficAndEngagementVisits"
                                value="setgetTrafficAndEngagementVisitsDaily" />
                            <label class="radio-inline__label" for="setgetTrafficAndEngagementVisitsDaily">
                                Ngày
                            </label>
                        </fieldset>
                    </div>
                </div>
                <div id="getTrafficAndEngagement" class="rounded is-loading" style="min-height:400px">
                    <ul class="nav nav-tabs customtab" role="tablist">
                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                data-task="getTrafficAndEngagementVisits"
                                href="#getTrafficAndEngagement--MonthlyVisits" role="tab"> <span class=""><i
                                        class="far fa-calendar-week fa-lg"></i></span> <span
                                    class="d-none d-md-inline">Lượt truy cập</span></a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="getUniqueUsers"
                                href="#getTrafficAndEngagement--MonthlyUniqueVisitors" role="tab"> <span
                                    class=""><i class="far fa-clipboard-user fa-lg"></i></span> <span
                                    class="d-none d-md-inline">Trung bình khách truy cập hàng tháng
                                </span></a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="getTrafficAndEngagementAvgVisitDuration"
                                href="#getTrafficAndEngagement--AvgVisitDuration" role="tab"> <span
                                    class=""><i class="far fa-stopwatch fa-lg"></i></span> <span
                                    class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a>
                        </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="getTrafficAndEngagementPagesPerVisit"
                                href="#getTrafficAndEngagement--PagesPerVisit" role="tab"> <span class=""><i
                                        class="far fa-copy fa-lg"></i></span> <span
                                    class="d-none d-md-inline">Số trang mỗi lần truy cập</span></a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                data-task="getTrafficAndEngagementBounceRate"
                                href="#getTrafficAndEngagement--BounceRate" role="tab"> <span class=""><i
                                        class="far fa-external-link fa-lg"></i></span> <span
                                    class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="row">
                        <div class="col-12 col-md-12 tab-content mt-1 mt-md-3">
                            <div class="tab-pane px-4 active" id="getTrafficAndEngagement--MonthlyVisits"
                                role="tabpanel" style="height: 300px"></div>
                            <div class="tab-pane px-4 " id="getTrafficAndEngagement--MonthlyUniqueVisitors"
                                role="tabpanel" style="height:300px"></div>
                            <div class="tab-pane px-4" id="getTrafficAndEngagement--AvgVisitDuration"
                                role="tabpanel" style="height:300px"></div>
                            <div class="tab-pane px-4" id="getTrafficAndEngagement--PagesPerVisit"
                                role="tabpanel" style="height:300px"></div>
                            <div class="tab-pane px-4" id="getTrafficAndEngagement--BounceRate"
                                role="tabpanel" style="height:300px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> `)
    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementVisits = Data[domain];

            let Desktop = TrafficAndEngagementVisits.Desktop[0];
            let Mobile = TrafficAndEngagementVisits['Mobile Web'][0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };



            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });

            let ele = document.getElementById("getTrafficAndEngagement--MonthlyVisits");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0,0');
                        val2 = numeral(val2).format('0,0');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                    <br/>
                    ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementVisitsWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01')
                            }
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementVisitsWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementVisitsWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        },

                    },
                }],
                yAxis: [{
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                }, ],
                series: [{
                        name: 'Desktop',
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        symbol: "none",
                        itemStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        data: dataChartDesktop.values
                    },
                    {
                        name: 'Mobile',
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: "rgb(140, 210, 255)"
                        },
                        symbol: "none",
                        itemStyle: {
                            color: "rgb(140, 210, 255)"
                        },
                        data: dataChartMobile.values
                    }
                ]
            };


            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--MonthlyVisits`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('empty-state');

            const lastdate = dataChartMobile.keys.length;
            await $('.similarDates').text(`${moment(dataChartMobile.keys[0]).format("MM/YYYY")} - ${moment(dataChartMobile.keys[lastdate - 1]).format("MM/YYYY")}`);
        } else {
            $(`#getTrafficAndEngagement`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}
const getUniqueUsersMonthly = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let UniqueUsersMonthly = Data[domain];

            let totals = UniqueUsersMonthly.Total[0];

            let dataChart = {
                keys: [],
                values: []
            };

            totals.map(total => {
                let key = total.Key;
                let value = total.Value;
                dataChart.keys.push(key);
                dataChart.values.push(value);
            });

            let ele = document.getElementById("getTrafficAndEngagement--MonthlyUniqueVisitors");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {

                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0,0');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                </div>`;
                    }
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: domain,
                        data: dataChart.values,
                        type: "line",
                        // smooth: true,
                        symbol: "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgba(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },

                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--MonthlyUniqueVisitors`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).removeClass('is-loading')
            $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).addClass('empty-state')
        }



    } else {
        console.log(`${task} failed`);
    }
}
const getTrafficAndEngagementAvgVisitDuration = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementAvgVisitDuration = Data[domain];

            let Desktop = TrafficAndEngagementAvgVisitDuration.Desktop[0];
            let Mobile = TrafficAndEngagementAvgVisitDuration.MobileWeb[0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };



            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });


            let ele = document.getElementById("getTrafficAndEngagement--AvgVisitDuration");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('00:00:00');
                        val2 = numeral(val2).format('00:00:00');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementAvgVisitDurationWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01')
                            }
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementAvgVisitDurationWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementAvgVisitDurationWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        },

                    },
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("00:00:00"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: 'Desktop',
                        data: dataChartDesktop.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementAvgVisitDurationDaily") ? "none" : "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgb(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },
                    {
                        name: 'Mobile',
                        data: dataChartMobile.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementAvgVisitDurationDaily") ? "none" : "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(140, 210, 255)",
                                borderColor: "rgb(140, 210, 255, 0.2)",
                                borderWidth: 10
                            }
                        }

                    }
                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--AvgVisitDuration`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--AvgVisitDuration`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--AvgVisitDuration`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--AvgVisitDuration`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--AvgVisitDuration`).addClass('empty-state');
        }
    } else {
        console.log(`${task} failed`);
    }
}
const getTrafficAndEngagementPagesPerVisit = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementPagesPerVisit = Data[domain];

            let Desktop = TrafficAndEngagementPagesPerVisit.Desktop[0];
            let Mobile = TrafficAndEngagementPagesPerVisit.MobileWeb[0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };

            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });


            let ele = document.getElementById("getTrafficAndEngagement--PagesPerVisit");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0.00');
                        val2 = numeral(val2).format('0.00');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementPagesPerVisitWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01')
                            }
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementPagesPerVisitWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementPagesPerVisitWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        },

                    },
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        // formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: 'Desktop',
                        data: dataChartDesktop.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementPagesPerVisitDaily") ? "none" : "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgb(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },
                    {
                        name: 'Mobile',
                        data: dataChartMobile.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementPagesPerVisitDaily") ? "none" : "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(140, 210, 255)",
                                borderColor: "rgb(140, 210, 255, 0.2)",
                                borderWidth: 10
                            }
                        }

                    }
                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--PagesPerVisit`), function () {
                myChart.resize();
            });

            

            await $(`#getTrafficAndEngagement--PagesPerVisit`).removeClass('is-loading');
            $(`#getTrafficAndEngagement---PagesPerVisit`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--PagesPerVisit`).removeClass('is-loading');
            $(`#getTrafficAndEngagement---PagesPerVisit`).addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}
const getTrafficAndEngagementBounceRate = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementBounceRate = Data[domain];

            let Desktop = TrafficAndEngagementBounceRate.Desktop[0];
            let Mobile = TrafficAndEngagementBounceRate.MobileWeb[0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };

            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });


            let ele = document.getElementById("getTrafficAndEngagement--BounceRate");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {
                        // console.log(params);
                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0.00%');
                        val2 = numeral(val2).format('0.00%');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementBounceRateWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01')
                            }
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementBounceRateWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementBounceRateWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        },

                    },
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0%"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: 'Desktop',
                        data: dataChartDesktop.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementBounceRateDaily") ? "none" : "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgb(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },
                    {
                        name: 'Mobile',
                        data: dataChartMobile.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementBounceRateDaily") ? "none" : "circle",
                        symbolSize: 10,
                        showSymbol: true,
                        hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                shadowColor: "rgba(0,0,0,0.4)",
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgb(140, 210, 255)",
                                borderColor: "rgb(140, 210, 255, 0.2)",
                                borderWidth: 10
                            }
                        }

                    }
                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--BounceRate`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--BounceRate`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--BounceRate`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--BounceRate`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--BounceRate`).addClass('empty-state');
        }
    } else {
        console.log(`${task} failed`);
    }
} 
const getMarketingMixOverviewDaily = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'13':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row m-0 pt-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="ml-auto d-flex no-block align-items-center pr-3" id="TimeChartMarket">
                        <fieldset>
                            <input id="setgetMarketingMixOverviewDaily" class="radio-inline__input"
                                type="radio" name="getMarketingMixOverview"
                                value="setgetMarketingMixOverviewDaily" />
                            <label class="radio-inline__label" for="setgetMarketingMixOverviewDaily">
                                Ngày
                            </label>
                            <input id="setgetMarketingMixOverviewWeekly" class="radio-inline__input"
                                type="radio" name="getMarketingMixOverview"
                                value="setgetMarketingMixOverviewWeekly" checked="checked" />
                            <label class="radio-inline__label" for="setgetMarketingMixOverviewWeekly">
                                Tuần
                            </label>
                            <input id="setgetMarketingMixOverviewMonthly" class="radio-inline__input"
                                type="radio" name="getMarketingMixOverview"
                                value="setgetMarketingMixOverviewMonthly" />
                            <label class="radio-inline__label" for="setgetMarketingMixOverviewMonthly">
                                Tháng
                            </label>
                        </fieldset>
                        <div class="dropdown-wrapper ml-auto">
                            <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                            </button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <a class="getMarketingMixOverview dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                                <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Parent-getMarketingMixOverview">
                    <div id="getMarketingMixOverview" class="rounded is-loading" style="min-height:400px">
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                    data-task="TrafficShare" href="#getMarketingMixOverview--TrafficShare"
                                    role="tab"><span class=""><i
                                            class="fal fa-chart-pie-alt fa-1x"></i></span> <span
                                        class="d-none d-md-inline">Truy cập</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                    data-task="AverageDuration"
                                    href="#getMarketingMixOverview--AverageDuration" role="tab"><span
                                        class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span
                                        class="d-none d-md-inline">Trung bình thời lượng truy cập</span></a>
                            </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                    data-task="PagesPerVisit" href="#getMarketingMixOverview--PagesPerVisit"
                                    role="tab"><span class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                        class="d-none d-md-inline">Số trang/Lượt truy cập</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                    data-task="BounceRate" href="#getMarketingMixOverview--BounceRate"
                                    role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                    <span class="d-none d-md-inline">Tỷ lệ thoát</span></a> </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="row">
                            <div class="col-12 col-md-12 mt-1 mt-md-2">
                                <span></span>
                            </div>
                            <div class="col-12 col-md-12 tab-content mt-1 mt-md-3">
                                <div class="tab-pane px-4 active" id="getMarketingMixOverview--TrafficShare"
                                    role="tabpanel" style="height:350px"></div>
                                <div class="tab-pane px-4" id="getMarketingMixOverview--AverageDuration"
                                    role="tabpanel" style="height:350px"></div>
                                <div class="tab-pane px-4" id="getMarketingMixOverview--PagesPerVisit"
                                    role="tabpanel" style="height:350px"></div>
                                <div class="tab-pane px-4" id="getMarketingMixOverview--BounceRate"
                                    role="tabpanel" style="height:350px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data) {
            let {
                DailyData,
                WeeklyData,
                MonthlyData
            } = data.data.data.Data;

            if (Object.values(DailyData).length != 0 || Object.values(WeeklyData).length != 0 || Object.values(MonthlyData).length != 0) {
                // let { TrafficShare, AverageDuration, PagesPerVisit, BounceRate } = DataMarket; 
                const run = async (taskName, temp) => {
                    let DataMarket;
                    if (temp == "Daily") {
                        DataMarket = data.data.data.Data.DailyData;
                    } else if (temp == "Weekly") {
                        DataMarket = data.data.data.Data.WeeklyData;
                    } else {
                        DataMarket = data.data.data.Data.MonthlyData;
                    }

                    if (Object.values(DataMarket).length != 0) {
                        let {
                            TrafficShare,
                            AverageDuration,
                            PagesPerVisit,
                            BounceRate
                        } = DataMarket;

                        let MarketingMixOverview;

                        switch (taskName) {
                            case 'TrafficShare':
                                MarketingMixOverview = TrafficShare
                                break;
                            case 'AverageDuration':
                                MarketingMixOverview = AverageDuration
                                break;
                            case 'PagesPerVisit':
                                MarketingMixOverview = PagesPerVisit
                                break;
                            case 'BounceRate':
                                MarketingMixOverview = BounceRate
                                break;
                            default:
                                break;
                        }

                        //console.log(MarketingMixOverview.Data); 

                        let dataChart = {
                            keys: [],
                            values: [],
                        };



                        let {
                            BreakDown,
                            Total
                        } = MarketingMixOverview.Data;

                        let keys = [];
                        let values = {
                            Direct: [],
                            DisplayAds: [],
                            Email: [],
                            OrganicSearch: [],
                            PaidSearch: [],
                            Referrals: [],
                            Social: [],
                        };

                        
                        $.each(BreakDown, (idx, val) => { 
                            keys.push(idx); 

                            $.each(val, (name, data) => { 
                                if (name == 'Direct' && data) 
                                    values.Direct.push(data)  
                                if (name == 'Display Ads' && data)
                                    values.DisplayAds.push(data)
                                if (name == 'Email' && data)
                                    values.Email.push(data)
                                if (name == 'Organic Search' && data)
                                    values.OrganicSearch.push(data)
                                if (name == 'Paid Search' && data)
                                    values.PaidSearch.push(data)
                                if (name == 'Referrals' && data)
                                    values.Referrals.push(data)
                                if (name == 'Social' && data)
                                    values.Social.push(data)
                            })

                        })

                        dataChart.keys = keys;
                        dataChart.values = values;   

                        if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                            dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                            dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                            dataChart.values.Social.length == 0) {

                            $(`#getMarketingMixOverview`).removeClass('is-loading');
                            $(`#getMarketingMixOverview`).addClass('empty-state');
                        } else {
                            let ele = document.getElementById(`getMarketingMixOverview--${taskName}`);

                            let myChart = echarts.init(ele, 'light');

                            let option = {
                                tooltip: {
                                    trigger: "axis",
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
                                    borderColor: 'rgba(93,120,255,1)',
                                    borderWidth: 1,
                                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                                    formatter: params => {
                                        // console.log(params);
                                        let {
                                            name
                                        } = params[0];
                                        let detail = "";
                                        let format = "";
                                        params.forEach((p, i) => {
                                            if (p.value == null || p.value == "A")
                                                p.value == 0;
                                            let {
                                                marker,
                                                color,
                                                seriesName,
                                                value
                                            } = p;

                                            switch (taskName) {
                                                case 'TrafficShare':
                                                    format = '0,0';
                                                    break;
                                                case 'AverageDuration':
                                                    format = '00:00:00';
                                                    break;
                                                case 'PagesPerVisit':
                                                    format = '0';
                                                    break;
                                                case 'BounceRate':
                                                    format = '00.00%';
                                                    break;
                                                default:
                                                    break;

                                            }
                                            value = numeral(value).format(format);


                                            detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                            <br/>`
                                        })
                                        name = moment(name).format('DD MMMM YYYY');
                                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                    <div class="text-dark pt-2">${detail}`;

                                    }
                                },
                                legend: {
                                    data: ["Trực tiếp", "Mail", "Liên kết ngoài", "Mạng xã hội", "Tìm kiếm tự nhiên", "Tìm kiếm trả phí", "Quảng cáo hiển thị"],

                                },
                                grid: {
                                    right: "5%"
                                },
                                xAxis: {
                                    type: "category",
                                    boundaryGap: false,
                                    data: dataChart.keys,
                                    axisLine: {
                                        lineStyle: {
                                            color: "#ccc"
                                        }
                                    },
                                    axisTick: {
                                        interval: (i, v) => {
                                            if (task == 'Weekly') {
                                                return (parseInt(v.slice(-2)) < 7)
                                            } else {
                                                return (v.slice(-2) == '01')
                                            }
                                        },
                                    },
                                    axisLabel: {
                                        margin: 10,
                                        textStyle: {
                                            color: "#999"
                                        },
                                        fontFamily: 'Arial',
                                        interval: (i, v) => {
                                            if (temp == 'Weekly') {
                                                return (parseInt(v.slice(-2)) < 7)
                                            } else {
                                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                                            }
                                        },
                                        formatter: (value, index) => {
                                            if (task == 'Weekly') {
                                                return moment(value).format('MM-YYYY');
                                            } else {
                                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                                            }
                                        },

                                    },
                                },
                                yAxis: {
                                    type: "value",
                                    axisLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        margin: 10,
                                        textStyle: {
                                            color: "#ccc"
                                        },
                                        fontFamily: 'Arial',
                                        // formatter: (value, index) => (value = numeral(value).format("0a")),
                                        formatter: (value, index) => {
                                            if (taskName == 'TrafficShare') {
                                                return numeral(value).format("0a")
                                            } else if (taskName == 'AverageDuration') {
                                                return numeral(value).format("00:00:00")
                                            } else if (taskName == 'PagesPerVisit') {
                                                return numeral(value).format("0")
                                            } else {
                                                return numeral(value).format("00%")
                                            }
                                        },
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: 'rgba(0,0,0,0.1)'
                                        }
                                    },
                                },
                                series: [{
                                        name: 'Trực tiếp',
                                        data: (dataChart.values.Direct) ? dataChart.values.Direct : 0,
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    },
                                    {
                                        name: 'Mail',
                                        data: dataChart.values.Email,
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    },
                                    {
                                        name: 'Liên kết ngoài',
                                        data: dataChart.values.Referrals,
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    },
                                    {
                                        name: 'Mạng xã hội',
                                        data: dataChart.values.Social,
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    },
                                    {
                                        name: 'Tìm kiếm tự nhiên',
                                        data: dataChart.values.OrganicSearch,
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    },
                                    {
                                        name: 'Tìm kiếm trả phí',
                                        data: dataChart.values.PaidSearch,
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    },
                                    {
                                        name: 'Quảng cáo hiển thị',
                                        data: (dataChart.values.DisplayAds != 0) ? dataChart.values.DisplayAds : "NA",
                                        type: "line",
                                        // smooth: true,
                                        symbol: (temp == "Daily") ? "none" : "circle",
                                        symbolSize: 10,
                                        showSymbol: true,
                                        hoverAnimation: false,

                                    }
                                ]
                            };
                            myChart.setOption(option);

                            new ResizeSensor($(`#getMarketingMixOverview--${taskName}`), function () {
                                myChart.resize();
                            });

                            const lastdate = dataChart.keys.length;
                            $('.similarDates').text(`${moment(dataChart.keys[0]).format("MM/YYYY")} - ${moment(dataChart.keys[lastdate - 1]).format("MM/YYYY")}`);
                            
                            await $(`#getMarketingMixOverview--${taskName}`).removeClass('is-loading');
                            await $(`#getMarketingMixOverview`).removeClass('is-loading');
                            await $(`#getMarketingMixOverview`).removeClass('empty-state');
                            
                        }
                    } else {
                        $(`#getMarketingMixOverview`).removeClass('is-loading');
                        $(`#getMarketingMixOverview`).addClass('empty-state');
                    }

                }


                run('TrafficShare', "Weekly");

                $('#getMarketingMixOverview a[data-toggle="tab"]').on('shown.bs.tab', function (e) {


                    var taskName = $(e.target).data('task'); // activated tab 
                    let ele = document.getElementById(`getMarketingMixOverview--${taskName}`);

                    run(taskName, "Weekly");

                    $("#TimeChartMarket").html("");

                    $("#TimeChartMarket").html(`<fieldset>
                    <input id="setgetMarketingMixOverviewDaily" class="radio-inline__input" type="radio"
                        name="getMarketingMixOverview" value="setgetMarketingMixOverviewDaily" />
                    <label class="radio-inline__label" for="setgetMarketingMixOverviewDaily">
                        Ngày
                    </label>
                    <input id="setgetMarketingMixOverviewWeekly" class="radio-inline__input" type="radio"
                        name="getMarketingMixOverview" value="setgetMarketingMixOverviewWeekly"
                        checked="checked" />
                    <label class="radio-inline__label" for="setgetMarketingMixOverviewWeekly">
                        Tuần
                    </label>
                    <input id="setgetMarketingMixOverviewMonthly" class="radio-inline__input" type="radio"
                        name="getMarketingMixOverview" value="setgetMarketingMixOverviewMonthly" />
                    <label class="radio-inline__label" for="setgetMarketingMixOverviewMonthly">
                        Tháng
                    </label>
                </fieldset>`)

                    $("input[type=radio][name=getMarketingMixOverview]").change(function () {

                        let ele = document.getElementById(`getMarketingMixOverview--${taskName}`);

                        echarts.dispose(ele);
                        if (this.value == "setgetMarketingMixOverviewDaily") {
                            run(taskName, "Daily");
                        } else if (this.value == "setgetMarketingMixOverviewWeekly") {
                            run(taskName, "Weekly");
                        } else
                            run(taskName, "Monthly");
                    })
                });

                $("input[type=radio][name=getMarketingMixOverview]").change(function () {

                    //alert(this.value); 

                    let ele = document.getElementById(`getMarketingMixOverview--TrafficShare`);
                    echarts.dispose(ele);
                    if (this.value == "setgetMarketingMixOverviewDaily") {
                        run("TrafficShare", "Daily");
                    } else if (this.value == "setgetMarketingMixOverviewWeekly") {
                        run("TrafficShare", "Weekly");
                    } else {
                        run("TrafficShare", "Monthly");
                    }
                })
            } else {
                $(`#getMarketingMixOverview`).removeClass('is-loading');
                $(`#getMarketingMixOverview`).addClass('empty-state');
            }

        } else {
            $(`#getMarketingMixOverview`).removeClass('is-loading');
            $(`#getMarketingMixOverview`).addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}
const getTrafficSourcesTotalReferrals = async (task, data, check, object) => { 
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'56':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Truy cập từ giới thiệu
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficSourcesTotalReferrals dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesTotalReferrals" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div id="Parent-getReferralVisits">
                            <div id="getReferralVisits" class="row rounded m-0 p-b-10 is-loading"
                                style="height: 270px">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                            <div id="Parent-TotalReferrals">
                                <div id="TotalReferrals"
                                    class="d-none d-lg-block text-center h4 font-bold text-info"> </div>
                            </div>
                            <div id="Parent-getTotalReferrals">
                                <div id="getTotalReferrals" class="w-100 rounded" style="height: 200px">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        if (data && data.data && data.data.data) {
            let {
                Data
            } = data.data.data;

            let TrafficSourcesTotalReferrals = Data.dictionary[domain];

            let SearchTotal = TrafficSourcesTotalReferrals.SearchTotal;
            let VolumeTotal = TrafficSourcesTotalReferrals.VolumeTotal;

            let TotalTraffic = SearchTotal / VolumeTotal;

            $("#TotalReferrals").removeClass("is-loading");
            $("#TotalReferrals").html(`Tổng ${numeral(SearchTotal).format("0,0")}`);
            
            let dataChartPie = [
                {name: "Từ giới thiệu", value: SearchTotal},
                {name: "Tổng", value: VolumeTotal-SearchTotal}
            ]
 
            // render chart

            let elePie = document.getElementById("getTotalReferrals");

            let myChartPie = echarts.init(elePie);

            let optionPie = {
                color: customColors,
                legend: {
                    bottom: "-2%",
                    right: "20%",
                    // top: "0%",
                    // left: '10%',
                    // // formatter: function (name) {
                    // //     return name=="GDN"?"Google Display Network":name;
                    // // },
                    // itemWidth: 20,
                    // itemHeight: 14,
                    // width: 10
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["50%", "45%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChartPie
                }]
            };
            myChartPie.setOption(optionPie);


            new ResizeSensor($(`#getTotalSocialVisits`), function () {
                myChartPie.resize();
                setTimeout(function () {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChartPie.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChartPie.on('mouseover', function (params) {
                    if (params.name == dataChartPie[0].name) {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChartPie.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChartPie.on('mouseout', function (params) {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#getTotalSocialVisits`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(`#getTotalSocialVisits`).removeClass('empty-state');


            let Dates = TrafficSourcesTotalReferrals.Dates;

            let Volumes = TrafficSourcesTotalReferrals.Volumes;

            let dataChart = {
                keys: [],
                values: []
            };

            $.each(Dates, (idx, val) => {

                dataChart.keys.push(val);

            })

            $.each(Volumes, (name, data) => {
                dataChart.values.push(data[0]);
            })

            let ele = document.getElementById("getReferralVisits");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {

                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0,0');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                </div>`;
                    }
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: domain,
                        data: dataChart.values,
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        symbol: "none",
                        itemStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                    },

                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getReferralVisits`), function () {
                myChart.resize();
            });

            await $(`#getReferralVisits`).removeClass('is-loading');
            $(`#getReferralVisits`).removeClass('empty-state');
            $(`#getTotalReferralVisits`).parent().removeClass('empty-state');
        } else {
            $(`#getReferralVisits`).removeClass('is-loading');
            $(`#getReferralVisits`).addClass('empty-state');
            $("#getTotalReferralVisits").removeClass('is-loading');
            $(`#getTotalReferralVisits`).parent().addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}
const getTrafficSocial = async (task, data, check, object) => {  
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'46':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Lượt truy cập xã hội</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficSocial dropdown-item similarReloadTask text-muted" data-task="getTrafficSocial" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div id="Parent-getSocialVisits">
                            <div id="getSocialVisits" class="row rounded m-0 p-b-10 is-loading"
                                style="height: 270px">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="pt-0 pt-lg-4 pb-4 pb-lg-0">
                            <div id="Parent-TotalSocialVisits">
                                <div id="TotalSocialVisits"
                                    class="d-none d-lg-block h4 text-center text-info font-bold"> </div>
                            </div>
                            <div id="Parent-getTotalSocialVisits">
                                <div id="getTotalSocialVisits" class="w-100 rounded" style="height: 200px">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {

        if (data && data.data && data.data.data) {
            let TrafficSocial = data.data.data;

            let SearchTotal = TrafficSocial.SearchTotal;

            let VolumeTotal = TrafficSocial.VolumeTotal;

            let TotalDesktopTraffic = SearchTotal / VolumeTotal;

            $("#TotalSocialVisits").removeClass("is-loading");
            $("#TotalSocialVisits").html(`Tổng ${numeral(SearchTotal).format("0,0")}`);
            
            let dataChartPie = [
                {name: "Mạng xã hội", value: SearchTotal},
                {name: "Tổng", value: VolumeTotal-SearchTotal}
            ]
 
            // render chart

            let elePie = document.getElementById("getTotalSocialVisits");

            let myChartPie = echarts.init(elePie);

            let optionPie = {
                color: customColors,
                legend: {
                    bottom: "-2%",
                    right: "25%",
                    // top: "15%",
                    // left: '60%',
                    // // formatter: function (name) {
                    // //     return name=="GDN"?"Google Display Network":name;
                    // // },
                    // itemWidth: 20,
                    // itemHeight: 14,
                    // width: 10
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["50%", "45%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChartPie
                }]
            };
            myChartPie.setOption(optionPie);


            new ResizeSensor($(`#getTotalSocialVisits`), function () {
                myChartPie.resize();
                setTimeout(function () {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChartPie.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChartPie.on('mouseover', function (params) {
                    if (params.name == dataChartPie[0].name) {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChartPie.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChartPie.on('mouseout', function (params) {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#getTotalSocialVisits`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(`#getTotalSocialVisits`).removeClass('empty-state');

            //
            let Dates = TrafficSocial.Dates;

            let Volumes = TrafficSocial.Volumes;

            let dataChart = {
                keys: [],
                values: []
            };

            $.each(Dates, (idx, val) => {

                dataChart.keys.push(val);

            })

            $.each(Volumes, (name, data) => {
                dataChart.values.push(data[0]);
            })
            
            let ele = document.getElementById("getSocialVisits");

            let myChart = echarts.init(ele, "light");

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                    formatter: params => {

                        let {
                            name
                        } = params[0];
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0,0');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                </div>`;
                    }
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => moment(value).format('MM-YYYY')
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgb(25, 123, 251)",
                            type: "dashed"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: domain,
                        data: dataChart.values,
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        symbol: "none",
                        itemStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                    },

                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getSocialVisits`), function () {
                myChart.resize();
            });

            await $(`#getSocialVisits`).removeClass('is-loading');
            $(`#getSocialVisits`).removeClass('empty-state');
            $(`#getTotalSocialVisits`).parent().removeClass('empty-state');
        } else {
            $(`#getSocialVisits`).removeClass('is-loading');
            $(`#getSocialVisits`).addClass('empty-state');
            $(`#getTotalSocialVisits`).removeClass('is-loading');
            $(`#getTotalSocialVisits`).parent().addClass('empty-state');

        }


    } else {
        console.log(`${task} failed`);
    }
}
const getEngagementVisits = async (task, data) => {
    if (data.status == "success") {

        let {
            data: EngagementVisits
        } = data.data;

        // prepare data

        let visits = EngagementVisits[0];

        let temp = true;

        visits.map(visit => {
            if (visit.Value == null) {
                temp = false;
            }
        });

        if (!temp) {
            await $(`#getEngagementVisits`).removeClass("is-loading").addClass('empty-state');
            await $(`.similarReloadTask[data-task="getEngagementVisits"]`).find('i').removeClass('fa-spin');
        } else {

            let dataChart = {
                keys: [],
                values: []
            };

            visits.map(visit => {
                let key = visit.Key;
                let value = numeral(visit.Value).format("0");
                dataChart.keys.push(key);
                dataChart.values.push(value);
            });

            // render chart

            let ele = document.getElementById("getEngagementVisits");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    formatter: (params) => {
                        let {
                            name,
                            value
                        } = params[0];
                        name = moment(name).format("DD MMMM YYYY");
                        value = numeral(value).format('0,0');
                        return `<div class="text-capitalize border-bottom pb-1 text-dark">${name}</div>
                <div class="text-dark pt-2">${domain} <span class="font-weight-bold text-success">${value}</span></div>`;
                    },
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);'
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChart.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getEngagementVisitsWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01')
                            }
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        interval: (i, v) => {
                            if (task == 'getEngagementVisitsWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getEngagementVisitsWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        }
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "#5d78ff",
                            type: "dashed"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                },
                series: [{
                    data: dataChart.values,
                    type: "line",
                    // smooth: true,
                    symbol: "circle",
                    symbolSize: 10,
                    hoverAnimation: false,
                    showSymbol: (task == 'getEngagementVisitsWeekly' || task == 'getEngagementVisitsMonthly') ? true : false,
                    // lineStyle: {
                    //   normal: {
                    //     width: 2,
                    //     shadowColor: "rgba(0,0,0,0.4)",
                    //     shadowBlur: 10,
                    //     shadowOffsetY: 10
                    //   }
                    // },
                    // itemStyle: {
                    //   normal: {
                    //     color: "rgb(25, 123, 251)",
                    //     borderColor: "rgba(25, 123, 251, 0.2)",
                    //     borderWidth: 12
                    //   }
                    // }
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(93,120,255,.5)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(93,120,255,.05)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(93,120,255,1)',
                            borderColor: 'rgba(93,120,255,.2)',
                            borderWidth: 12
                        }
                    },
                }]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#getEngagementVisits`), function () {
                myChart.resize();
            });

            await $(`#getEngagementVisits`).removeClass("is-loading");
            await $(`.similarReloadTask[data-task="getEngagementVisits"]`).find('i').removeClass('fa-spin');

            const lastdate = dataChart.keys.length;
            $('.similarDates').text(`${moment(dataChart.keys[0]).format("MM/YYYY")} - ${moment(dataChart.keys[lastdate - 1]).format("MM/YYYY")}`);
        }
    } else {
        console.log(`${task} failed`);
    }
};
const getWebDemographicsAge = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <path
                                    d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z"
                                    id="Mask" fill="#000000" opacity="0.3"></path>
                                <path
                                    d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z"
                                    id="Path-107" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Độ tuổi khách hàng</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getWebDemographicsAge dropdown-item similarReloadTask text-muted" data-task="getWebDemographicsAge" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="p-20" style="height:300px;overflow: auto;">
                    <div id="getWebDemographicsAge" class="rounded is-loading" style="height: 250px"></div>
                </div> 
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {

        let {
            data: traffic
        } = data.data;
        let temp = true;

        $.each(traffic, (index, item) => {
            if (item == null) {
                temp = false;
            }
        })

        if (!temp) {
            await $(`#${task}`).removeClass('is-loading').addClass("empty-state");
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            // prepare data

            let dataChart = {
                keys: [],
                values: []
            };

            $.each(traffic, (index, item) => {
                let key, value;
                switch (index) {
                    case 'Age18To24':
                        key = '18 - 24';
                        break;
                    case 'Age25To34':
                        key = '25 - 34';
                        break;
                    case 'Age35To44':
                        key = '35 - 44';
                        break;
                    case 'Age45To54':
                        key = '45 - 54';
                        break;
                    case 'Age55To64':
                        key = '55 - 64';
                        break;
                    default:
                        key = '65 trở lên';
                        break;
                }
                value = numeral(item).format("0.0");
                dataChart.keys.push(key);
                dataChart.values.push(value);
            });

            // render chart

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                grid: {
                    top: 0,
                    bottom: 0,
                    right: 40,
                    left: 70,
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: true,
                    data: dataChart.keys,
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: function (value, index) {
                                var num = customColors.length;
                                return customColors[index % num]
                            }
                        },
                        formatter: function (value, index) {
                            return [
                                '{title|' + value + '} '
                            ].join('\n')
                        },
                        rich: {}
                    },

                },
                series: [{
                    type: 'bar',
                    data: dataChart.values,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 30,
                            color: function (params) {
                                var num = customColors.length;
                                return customColors[params.dataIndex % num]
                            },
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{c}%'
                        }
                    },
                }]
            };
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
            });

            await $(`#${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        }
    } else {
        console.log(`${task} failed`);
    }
};
const getTrafficSourcesOverview = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'8':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <path
                                    d="M3.5,21 L20.5,21 C21.3284271,21 22,20.3284271 22,19.5 L22,8.5 C22,7.67157288 21.3284271,7 20.5,7 L10,7 L7.43933983,4.43933983 C7.15803526,4.15803526 6.77650439,4 6.37867966,4 L3.5,4 C2.67157288,4 2,4.67157288 2,5.5 L2,19.5 C2,20.3284271 2.67157288,21 3.5,21 Z"
                                    id="Combined-Shape" fill="#000000" opacity="0.3" />
                                <path
                                    d="M12,13 C10.8954305,13 10,12.1045695 10,11 C10,9.8954305 10.8954305,9 12,9 C13.1045695,9 14,9.8954305 14,11 C14,12.1045695 13.1045695,13 12,13 Z"
                                    id="Mask" fill="#000000" opacity="1" />
                                <path
                                    d="M7.00036205,18.4995035 C7.21569918,15.5165724 9.36772908,14 11.9907452,14 C14.6506758,14 16.8360465,15.4332455 16.9988413,18.5 C17.0053266,18.6221713 16.9988413,19 16.5815,19 C14.5228466,19 11.463736,19 7.4041679,19 C7.26484009,19 6.98863236,18.6619875 7.00036205,18.4995035 Z"
                                    id="Mask-Copy" fill="#000000" opacity="1" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Nguồn khách hàng</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficSourcesOverview dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div id="Parent-getTrafficSourcesOverview">
                        <div id="getTrafficSourcesOverview" class="w-100 rounded is-loading"
                            style="height: 250px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> `)
    }
    if (data.status == "success") {
        let {
            data: traffic
        } = data.data;

        // prepare data

        let dataChart = {
            keys: [],
            values: []
        };

        $.each(traffic, (index, item) => {
            let key = index;
            let value = numeral(item).format("0");
            dataChart.keys.push(key);
            dataChart.values.push(value);
        });

        // render chart

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele);

        let option = {
            color: customColors,
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontFamily: 'Arial',
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0,0,0,.05)'
                    }
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '5%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Mạng xã hội', 'Mail', 'Liên kết trả tiền', 'Trực tiếp', 'Liên kết ngoài', 'Tìm kiếm tự nhiên', 'Tìm kiếm trả phí'],
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: '#666',
                    fontFamily: 'Arial',
                    interval: 0,
                },
            },

            yAxis: {
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                axisLabel: {
                    show: false,
                    formatter: (value, index) => (value = numeral(value).format("0a")),
                    fontFamily: 'Arial'
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                type: 'bar',
                barWidth: 60,
                data: dataChart.values,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = customColors.length;
                            return customColors[params.dataIndex % num]
                        },
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p) {
                                return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                            }
                        }
                    }
                },
            }]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }
};
const getWebDemographicsGender = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12"
                                    r="10" />
                                <path
                                    d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                    id="Combined-Shape" fill="#000000" opacity="1" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Giới tính khách hàng</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getWebDemographicsGender dropdown-item similarReloadTask text-muted" data-task="getWebDemographicsGender" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="p-20">
                    <div id="getWebDemographicsGender" class="rounded is-loading" style="height: 200px;">
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        
        let {
            data: visits
        } = data.data;

        // prepare data

        const {
            Male,
            Female
        } = visits;

        if (Male == null && Female == null) {

            await $(`#${task}`).removeClass('is-loading').addClass('empty-state');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {

            let dataChart = [{
                    name: 'Nam',
                    value: Male
                },
                {
                    name: 'Nữ',
                    value: Female
                }
            ];

            // render chart

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                color: ['#3498db', '#FDA7DF'],
                legend: {
                    top: "30%",
                    left: '65%',
                    data: ['Nam', 'Nữ'],
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                    },
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["30%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    fontFamily: 'Arial',
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChart
                }]
            };
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart[0].name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(".similarReloadTask").click(function () { 
                if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
                let task = $(this).data("task");
                $(this).find('i').addClass('fa-spin');
                api(task, domain);
              })
        }
    } else {
        console.log(`${task} failed`);
    }
};
const getDesktopVsMobile = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                    rx="1" />
                                <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                    rx="1" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Truy cập theo thiết bị
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getDesktopVsMobile" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div id="Parent-getDesktopVsMobileVisits">
                        <div id="getDesktopVsMobile" class="w-100 rounded is-loading"
                            style="height: 200px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        let {
            data: visits
        } = data.data;

        // prepare data

        const {
            percentDesktop,
            percentMobile,
            totalDesktop,
            totalMobile,
            totalTraffic
        } = visits;
        if (percentDesktop == 0 && percentMobile == 0 && totalDesktop == 0 && totalMobile == 0 && totalTraffic == 0) {
            await $(`#${task}, #totalTraffic`).removeClass('is-loading').addClass("empty-state");
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            let dataChart = [{
                    name: 'Máy tính',
                    value: percentDesktop
                },
                {
                    name: 'Điện thoại',
                    value: percentMobile
                }
            ];

            // render chart

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                color: ['#a29bfe', '#00cec9'],
                legend: {
                    top: "25%",
                    left: '60%',
                    data: ['Máy tính', 'Điện thoại'],
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                        lineHeight: 16
                    },
                    formatter: function (name) {
                        console.log(name)
                        let value = name == 'Máy tính' ? totalDesktop : totalMobile;
                        console.log(value)
                        // return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                    }
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["30%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    fontFamily: 'Arial',
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChart
                }]
            };
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart[0].name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#${task}, #totalTraffic`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            $(`#totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
        }
    } else {
        console.log(`${task} failed`);
    }
};
const totalTraffic = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                    id="Path-3" fill="#000000" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Tổng truy cập</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted d-flex align-items-center" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync sync-fa-fi mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div id="totalTraffic" class="d-flex no-block align-items-center justify-content-center is-loading" style="height: 200px;">
                        <h1 class="counter font-gg"></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        if (data.data.data.VolumeTotal != "") {    
            $(`#totalTraffic h1`).text(data.data.data.totalTraffic >= 1000000 ? numeral(data.data.data.totalTraffic).format('0.00a') : numeral(data.data.data.totalTraffic).format("0,0"));
            $(`#totalTraffic`).removeClass('is-loading')
        }
    } else {
        console.log(`${task} failed`);
    }
};
const getSearchBrandedKeywords = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'24':(object['gs-y'])}" data-gs-width="${(!key)?'5':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="h-100 bg-white shadow-sm rounded">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                    rx="1" />
                                <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                    rx="1" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Tỉ lệ truy cập theo từ khoá tự nhiên</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getSearchBrandedKeywords dropdown-item similarReloadTask text-muted" data-task="getSearchBrandedKeywords" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="p-t-20">
                    <div id="Parent-getSearchBrandedKeywords">
                        <div id="getSearchBrandedKeywords" class="w-100 rounded is-loading"
                            style="height: 250px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        let {
            data: visits
        } = data.data;

        // prepare data

        const {
            Branded,
            NoneBranded
        } = visits;

        let dataChart = [{
                name: 'Có thương hiệu',
                value: Branded
            },
            {
                name: 'Không thương hiệu',
                value: NoneBranded
            }
        ];

        // render chart

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele);

        let option = {
            color: ['#a29bfe', '#00cec9'],
            legend: {
                top: "25%",
                left: '60%',
                data: ['Có thương hiệu', 'Không thương hiệu'],
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                formatter: function (name) {
                    let value = name == 'Có thương hiệu' ? Branded : NoneBranded;
                    return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                }
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["30%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 5,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 46,
                        }
                    }
                },
                data: dataChart
            }]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });

        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function (params) {
                if (params.name == dataChart[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function (params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        
    } else {
        console.log(`${task} failed`);
    }
};
const getTrendingKeywordsTable = async (task, data) => {

    let {
        Data: item
    } = data.data.data;

    if (item[0].SearchTerm == "grid.upgrade") {
        $(`#${task}`).addClass('empty-state');
    } else {
        $(`#${task}`).html(`
        <div class="row mx-0 px-2 align-items-center text-muted">
            <div class="col-2 font-10">Từ khoá</div>
            <div class="col-auto font-10 px-3">CPC</div>
            <div class="col-2 font-10 text-center">Tự nhiên / Trả phí</div>
            <div class="col-1 font-10 text-center">Vị trí</div>
            <div class="col-1 font-10 text-right">Lượt tìm kiếm</div>
            <div class="col-3 font-10 text-center">Tỷ lệ truy cập</div>
            <div class="col font-10">Website đích</div>
        </div>
        `);

        $.each(item, (index, keyword) => {

            let {
                CPC,
                Organic,
                Paid,
                DestUrlOrganic,
                DestUrlPaid,
                SearchTerm,
                KwVolume,
                TotalShare,
                Change,
                PositionOrganic,
                PositionPaid
            } = keyword;

            let DestUrl = DestUrlOrganic[0].Value == "N/A" ? (DestUrlPaid[0].Value == "N/A" ? 'javascript:;' : DestUrlPaid[0].Value) : DestUrlOrganic[0].Value;

            PositionOrganic = PositionOrganic[0].Value;
            PositionPaid = PositionPaid[0].Value;
            if (SearchTerm == "grid.upgrade") return;
            if (!Change) Change = 'NaN';

            $(`#${task}`).append(`
        <div class="row mx-0 p-2 align-items-center">
            <div class="col-2 text-truncate pb-0">${SearchTerm}</div>
            <div class="col-auto">$${numeral(CPC).format('0.00')}</div>
            <div class="col-2 d-inline-flex">${numeral(Organic).format('0.00%')}
                <div class="progress w-50 mx-2">
                <div class="progress-bar bg-primary" style="width: ${numeral(Organic).format('0.00%')}; height:19px;" role="progressbar"></div>
                </div>
                ${numeral(Paid).format('0.00%')}
            </div>
            <div class="col-1 text-center">${PositionOrganic} / ${PositionPaid}</div>
            <div class="col-1 text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-1 text-right">${numeral(TotalShare).format('0.00%')}</div>
            <div class="col-1">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(TotalShare).format('0.00%')}; height:19px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-1 text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
            <div class="col text-truncate pb-0"><a href="${DestUrl}" title="${DestUrl == 'javascript:;' ? SearchTerm : DestUrl}">${DestUrl == 'javascript:;' ? '-' : DestUrl}</a></div>
        </div>
        `);
        })
    }

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
}
const getTrafficSourcesSearch = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'19':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7"
                                    rx="1" />
                                <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2"
                                    rx="1" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Tỉ lệ truy cập từ tìm kiếm
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficSourcesSearch dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesSearch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="p-20">
                    <div id="Parent-getTrafficSourcesSearch">
                        <div id="getTrafficSourcesSearch" class="w-100 rounded is-loading"
                            style="height: 200px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {

        let {
            data: traffic
        } = data.data;
        let temp = true;

        $.each(traffic, (index, value) => {
            if (index == "Organic") {
                if (value == 0) {
                    temp = false;
                }
            } else {
                if (value != 0) {
                    temp = true;
                }
            }
        })

        if (!temp) {
            await $(`#${task}`).removeClass('is-loading').addClass('empty-state');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {

            // prepare data

            let dataChart = [];

            $.each(traffic, (index, value) => {
                let item = {
                    value: value,
                    name: index == "Organic" ? "Tự nhiên" : "Trả phí"
                };
                dataChart.push(item);
            });

            // render chart

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                color: customColors,
                legend: {
                    top: "20%",
                    left: '60%',
                    // formatter: function (name) {
                    //     return name=="GDN"?"Google Display Network":name;
                    // },
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                    },
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["30%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '{text|{b}}\n{value|{d}%}',
                            rich: {
                                text: {
                                    color: "#666",
                                    fontSize: 12,
                                    fontFamily: 'Arial',
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: 5
                                },
                                value: {
                                    color: "#8693F3",
                                    fontSize: 24,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                },
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 46,
                            }
                        }
                    },
                    data: dataChart
                }]
            };
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart[0].name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`#${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        }
    } else {
        console.log(`${task} failed`);
    }
};
const getTrafficDisplayAdvertisingAds = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'35':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                </circle>
                                <path
                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                    id="Path-3" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Kênh quảng cáo</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDisplayAdvertisingAds dropdown-item similarReloadTask text-muted" data-task="getTrafficDisplayAdvertisingAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="pt-5">
                    <div id="Parent-getTrafficDisplayAdvertisingAds">
                        <div id="getTrafficDisplayAdvertisingAds" class="w-100 rounded"
                            style="height: 200px; -webkit-tap-highlight-color: transparent; user-select: none;"
                            _echarts_instance_="ec_1562726526957">
                            <div
                                style="position: relative; overflow: hidden; width: 360px; height: 200px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                                <canvas data-zr-dom-id="zr_0" width="360" height="200"
                                    style="position: absolute; left: 0px; top: 0px; width: 360px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                            </div>
                            <div class="resize-sensor"
                                style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                                <div class="resize-sensor-expand"
                                    style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                    <div
                                        style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 100000px; height: 100000px;">
                                    </div>
                                </div>
                                <div class="resize-sensor-shrink"
                                    style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                    <div
                                        style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        let {
            data: traffic
        } = data.data;

        // prepare data

        let dataChart = [];

        let others = 0;
        if (traffic === null) return;
        $.each(traffic, (index, visit) => {
            others += visit.Share;
            let item = {
                value: visit.Share,
                name: visit.Name == "Google Display Network" ? "GDN" : visit.Name
            };
            dataChart.push(item);
        });

        if (others < 1) {
            let itemOther = {
                value: (1 - others),
                name: 'Khác',
                itemStyle: {
                    color: '#95a5a6'
                }
            };
            dataChart.push(itemOther);
        }

        // render chart

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele);

        let option = {
            color: customColors,
            legend: {
                top: "15%",
                left: '60%',
                // formatter: function (name) {
                //     return name=="GDN"?"Google Display Network":name;
                // },
                itemWidth: 20,
                itemHeight: 14,
                width: 10
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["30%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 5,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 46,
                        }
                    }
                },
                data: dataChart
            }]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });

        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function (params) {
                if (params.name == dataChart[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function (params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }
};
const getTrafficSourcesSocial = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'51':(object['gs-y'])}" data-gs-width="${(!key)?'5':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10">
                                </circle>
                                <path
                                    d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z"
                                    id="Path-3" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Kênh xã hội</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficSourcesSocial dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesSocial" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="pt-5">
                    <div id="Parent-getTrafficSourcesSocial">
                        <div id="getTrafficSourcesSocial" class="w-100 rounded"
                            style="height: 200px; -webkit-tap-highlight-color: transparent; user-select: none;"
                            _echarts_instance_="ec_1562726526957">
                            <div
                                style="position: relative; overflow: hidden; width: 360px; height: 200px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                                <canvas data-zr-dom-id="zr_0" width="360" height="200"
                                    style="position: absolute; left: 0px; top: 0px; width: 360px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                            </div>
                            <div class="resize-sensor"
                                style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                                <div class="resize-sensor-expand"
                                    style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                    <div
                                        style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 100000px; height: 100000px;">
                                    </div>
                                </div>
                                <div class="resize-sensor-shrink"
                                    style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                    <div
                                        style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        let {
            data: traffic
        } = data.data;


        // prepare data

        let dataChart = [];

        let others = 0;

        let legend = [];

        let colors = [];

        $.each(traffic, (index, visit) => {
            others += visit.Share;
            let icon = {
                name: index,
                icon: 'image://' + visit.Favicon,
            }
            legend.push(icon);
            let item = {
                value: visit.Share,
                name: index
            };
            dataChart.push(item);
            switch (index) {
                case 'Facebook':
                    colors.push('#0984e3');
                    break;
                case 'Youtube':
                    colors.push('#eb2f06');
                    break;
                case 'Pinterest':
                    colors.push('#e74c3c');
                    break;
                case 'Reddit':
                    colors.push('#e67e22');
                    break;
                case 'Twitter':
                    colors.push('#74b9ff');
                    break;
                case 'VKontakte':
                    colors.push('#6a89cc');
                    break;
                case 'Stack Exchange':
                    colors.push('#6a89cc');
                    break;
                case 'WhatsApp Webapp':
                    colors.push('#2ecc71');
                    break;
                case 'Stack Overflow':
                    colors.push('#f1c40f');
                    break;
                case 'Instagram':
                    colors.push('#9b59b6');
                    break;
                default:
                    colors.push('#7f8c8d');
                    break;
            }
        });

        if (others < 1) {
            let itemOther = {
                value: (1 - others),
                name: 'Khác'
            };
            dataChart.push(itemOther);
            legend.push('Khác');
            colors.push('#95a5a6');
        }

        // render chart

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele);

        let option = {
            color: colors,
            legend: {
                top: "15%",
                left: '60%',
                width: 10,
                // data: legend,
                itemWidth: 14,
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["30%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 5,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 46,
                        }
                    }
                },
                data: dataChart
            }]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });

        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function (params) {
                if (params.name == dataChart[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function (params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }
};
const getOutgoingAds = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'72':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Lượng khách bấm vào quảng cáo trên ${domain}</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDisplayPaidOutgoingAds dropdown-item similarReloadTask text-muted" data-task="getOutgoingAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-getOutgoingAds">
                    <div id="getOutgoingAds" class="row rounded m-0 p-b-10 is-loading"
                        style="height: 270px">
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        if (data && data.data && data.data.data) {
            let TrafficDisplayPaidOutgoingAds = data.data.data;

            if (TrafficDisplayPaidOutgoingAds.Dates && TrafficDisplayPaidOutgoingAds.VolumeTotal && TrafficDisplayPaidOutgoingAds.Volumes) {
                
                let VolumeTotal = TrafficDisplayPaidOutgoingAds.VolumeTotal;

                $("#getTotalOutgoingAdVisits").removeClass("is-loading");
                $("#getTotalOutgoingAdVisits").html(`${numeral(VolumeTotal).format("0,0")}`);



                let Dates = TrafficDisplayPaidOutgoingAds.Dates;

                let Volumes = TrafficDisplayPaidOutgoingAds.Volumes;

                let dataChart = {
                    keys: [],
                    values: []
                };

                $.each(Dates, (idx, val) => {

                    dataChart.keys.push(val);

                })

                $.each(Volumes, (name, data) => {
                    dataChart.values.push(data[1]);
                })

                let ele = document.getElementById("getOutgoingAds");

                let myChart = echarts.init(ele, "light");

                let option = {
                    tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {

                            let {
                                name
                            } = params[0];
                            let {
                                marker: mrkr1,
                                color: color1,
                                seriesName: name1,
                                value: val1
                            } = params[0];

                            name = moment(name).format('DD MMMM YYYY');

                            val1 = numeral(val1).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                    </div>`;
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: dataChart.keys,
                        axisLine: {
                            lineStyle: {
                                color: "#ccc"
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#ccc"
                            },
                            fontFamily: 'Arial',
                            formatter: (value, index) => moment(value).format('MM-YYYY')
                        },
                        axisPointer: {
                            lineStyle: {
                                color: "rgb(25, 123, 251)",
                                type: "dashed"
                            }
                        }
                    },
                    yAxis: {
                        type: "value",
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#ccc"
                            },
                            fontFamily: 'Arial',
                            formatter: (value, index) => (value = numeral(value).format("0a"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: [{
                            name: domain,
                            data: dataChart.values,
                            type: 'line',
                            stack: "0",
                            areaStyle: {
                                color: 'rgb(79, 141, 249)'
                            },
                            symbol: "none",
                            itemStyle: {
                                color: 'rgb(79, 141, 249)'
                            },
                        },

                    ]
                };
                myChart.setOption(option);
                new ResizeSensor($(`#getOutgoingAds`), function () {
                    myChart.resize();
                });

                await $(`#getOutgoingAds`).removeClass('is-loading');
                $(`#getOutgoingAds`).removeClass('empty-state');
            } else {
                $(`#getOutgoingAds`).removeClass('is-loading');
                // $(`#getOutgoingAds`).addClass('empty-state').parent().parent().parent().addClass('d-none');
                $(`#getTotalOutgoingAdVisits`).removeClass('is-loading');
                $(`#getTotalOutgoingAdVisits`).parent().addClass('empty-state');
            }
        } else {
            $(`#getOutgoingAds`).removeClass('is-loading');
            $(`#getOutgoingAds`).addClass('empty-state');
            $(`#getTotalOutgoingAdVisits`).removeClass('is-loading');
            $(`#getTotalOutgoingAdVisits`).parent().addClass('empty-state');

        }


    } else {
        console.log(`${task} failed`);
    }


}
const getTotalOutgoingAdVisits = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'71':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Tổng lượng khách rời bỏ trang</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDisplayPaidOutgoingAds dropdown-item similarReloadTask text-muted" data-task="getTotalOutgoingAdVisits" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-getTotalOutgoingAdVisits">
                    <div class="row rounded m-0 p-b-10 justify-content-center py-5">
                        <div class="col-auto py-5 is-loading font-number h1 text-center"
                            id="getTotalOutgoingAdVisits">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        if (data.data.data.VolumeTotal != "") {
            $(`#getTotalOutgoingAdVisits`).text(numeral(data.data.data.VolumeTotal).format("0,0"));
            $(`#getTotalOutgoingAdVisits`).removeClass('is-loading')
        }
    } else {
        console.log(`${task} failed`);
    }


}
const getGetAudienceInterests = async (task, data) => {
    if (data.status == "success") {
        const {
            data: traffic
        } = data.data;

        var dataChart = [];

        $.each(traffic, (index, visit) => {
            dataChart.push([
                visit.Name,
                numeral(numeral(visit.Value).format('0.0%').replace('%', '').replace('.', '')).format('0') * 3
            ]);
        });

        WordCloud(document.getElementById(task), {
            list: dataChart,
            fontFamily: 'Google Sans',
            color: 'random-dark'
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }

}
const getTopReferrals = async (task, data) => {
    $(`#${task}`).html('');
    let {
        Data: topReferrals
    } = data.data.data;

    if (!topReferrals || topReferrals.length == 0) {
        $(`#${task}`).removeClass('is-loading').addClass('empty-state');
        return;
    }

    $.each(topReferrals, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        site.Favicon = "https://files.fff.com.vn/f.php?url=" + btoa(site.Favicon);
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${site.Change == 'NaN' ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${site.Change == 'NaN' ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    
}
const getPaidSearchCompetitorsTable = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'29':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getPaidSearchCompetitorsTable-container h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Đối thủ tìm kiếm trả phí
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getPaidSearchCompetitorsTable dropdown-item similarReloadTask text-muted" data-task="getPaidSearchCompetitorsTable" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="height:370px;overflow: auto">
                    <div id="Parent-getPaidSearchCompetitorsTable">
                        <table id="getPaidSearchCompetitorsTable" class="table table-striped"
                            style="width:100%;height:370px;"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    $(`#${task}`).html('');
    let {
        Data
    } = data.data.data;

    if (!Data) {
        $(`#${task}`).addClass('empty-state');
    } else {

        let {
            Records,
            TotalCount
        } = Data;

        if ((Records[0] && Records[0].Domain && Records[0].Domain == "grid.upgrade") || Records.length == 0) {
            $(`#${task}`).addClass('empty-state');
            $("#row-getPaidSearchCompetitorsTableV1").hide();
        } else {
            $.each(Records, (index, site) => {
                let {
                    Category,
                    Domain,
                    Favicon,
                    Score: Share
                } = site;
                if (Domain == "grid.upgrade") return;
                $(`#${task}`).append(`
            <div class="row m-0 p-10 align-items-center">
                <div class="col-6 text-truncate pb-0"><a title="${Domain}" href="website-analysis.php?view=similar&action=result&domain=${Domain}"><img src="${Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${Domain}</a></div>
                <div class="col-2 text-right">${numeral(Share).format('0.00%')}</div>
                <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
                </div>
            </div>
            </div>
            `);
            })
            
        }
    }

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getWebsiteGeography = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getWebsiteGeography-container h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Truy cập theo quốc gia
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getWebsiteGeography dropdown-item similarReloadTask text-muted" data-task="getWebsiteGeography" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="height:300px;overflow: auto;">
                    <table id="getWebsiteGeography" class="table table-striped "
                        style="width:100%;height:100%;"></table>
                </div>
            </div>
        </div>
    </div>`)
    }
    $(`#${task}`).html('');
    let {
        data: WebsiteGeography
    } = data.data;

    $.each(WebsiteGeography, (index, value) => {

        let {
            Country,
            Change,
            Share
        } = value;

        if (!Country) return;
        if (Country.icon == "flag flag-us") Country.icon = "flag flag-en";
        if (Country.icon == "flag flag-kr") Country.icon = "flag flag-ko";
        if (Country.icon == "flag flag-in") Country.icon = "flag flag-hi";
        if (!Change) Change = 'NaN';

        $(`#${task}`).append(`
        <div class="row mx-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><span class="${Country.icon} mr-2"></span>${Country.text}</div>
            <div class="col-2 text-right">${numeral(Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
        </div>
        `);
    })

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getTrafficDestinationAds = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'35':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getTrafficDestinationAds-container h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Nguồn quảng cáo</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDestinationAds dropdown-item similarReloadTask text-muted" data-task="getTrafficDestinationAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="overflow: auto;">
                    <div style="height:300px;">
                        <div id="Parent-getTrafficDestinationAds">
                            <table id="getTrafficDestinationAds" class="table table-striped"
                                style="width:100%;height:100%;"></table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    $(`#${task}`).html('');
    let {
        data: TrafficDestinationAds
    } = data.data;

    $.each(TrafficDestinationAds, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${(!site.Change) ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${(!site.Change) ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    
}
const getTopIncomingAds = async (task, data) => {
    $(`#${task}`).html('');

    let {
        data: TopIncomingAds
    } = data.data;

    $.each(TopIncomingAds, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${!site.Change ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${!site.Change ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })


    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getTrafficSourcesSearchDetails = async (task, data) => {
    $(`#${task}`).html(`
    <div class="row mx-0 px-2 align-items-center text-muted">
        <div class="col-3 font-10">Từ khoá</div>
        <div class="col-1 font-10">CPC</div>
        <div class="col-2 font-10 text-right">Lượt tìm kiếm</div>
        <div class="col-6 font-10 text-center">Truy cập</div>
    </div>
    `);
    let {
        data: TrafficSourcesSearchDetails
    } = data.data;



    $.each(TrafficSourcesSearchDetails, (index, site) => {

        let {
            CPC,
            SearchTerm,
            KwVolume,
            Domain,
            Change,
            Share
        } = site;

        // console.log(CPC, SearchTerm, KwVolume, Domain, Change, Share);

        if (Domain == "grid.upgrade") return;
        if (!Change) Change = 'NaN';

        $(`#${task}`).append(`
        <div class="row mx-0 p-10 align-items-center">
            <div class="col-3 text-truncate pb-0" title="${SearchTerm}">${SearchTerm}</div>
            <div class="col-1">$${CPC}</div>
            <div class="col-2 text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-2 text-right">${numeral(Share).format('0.00%')}</div>
            <div class="col-2">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
        </div>
        `);
    })

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getPaidKeywordsTable = async (task, data) => {
    
    let {
        Data
    } = data.data.data;
   
    if (Data[0].SearchTerm == 'grid.upgrade') {
        $(`#${task}`).addClass('empty-state');
    } else {
        $(`#${task}`).html(`
        <div class="row mx-0 px-2 align-items-center text-muted">
            <div class="col-2 font-10">Từ khoá</div>
            <div class="col-1 font-10">CPC</div>
            <div class="col-1 font-10 text-center">Vị trí</div>
            <div class="col-auto font-10">Lượt tìm kiếm</div>
            <div class="col font-10 text-center">Truy cập</div>
            <div class="col font-10">Website đích</div>
        </div>
        `);


        $.each(Data, (index, site) => {

            let {
                CPC,
                SearchTerm,
                KwVolume,
                Domain,
                Change,
                TotalShare,
                PositionPaid,
                DestUrlPaid
            } = site;

            DestUrlPaid = DestUrlPaid[0].Value == "N/A" ? '-' : DestUrlPaid[0].Value;

            if (SearchTerm == "grid.upgrade") return;
            if (!Change) Change = 'NaN';

            $(`#${task}`).append(`
        <div class="row mb-1 mx-0 p-10 align-items-center">
            <div class="col-2 text-truncate pb-0" title="${SearchTerm}">${SearchTerm}</div>
            <div class="col-1">$${CPC}</div>
            <div class="col-1 text-center">${PositionPaid[0].Value}</div>
            <div class="col text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-1 text-right">${numeral(TotalShare).format('0.00%')}</div>
            <div class="col-1">
            <div class="progress">
                <div class="progress-bar bg-primary" style="width: ${numeral(TotalShare).format('0.00%')}; height:14px;" role="progressbar"></div>
            </div>
            </div>
            <div class="col text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
            <div class="col-3 text-truncate pb-0"><a target="_blank" href="${DestUrlPaid == '-' ? '#' : DestUrlPaid}" title="${DestUrlPaid == '-' ? '' : DestUrlPaid}">${DestUrlPaid == '-' ? DestUrlPaid : DestUrlPaid + '<i class="fal fa-external-link fa-1x ml-1"></i>'}</a></div>
            </div>
        `);
        })
    }
    $(`#${task}`).perfectScrollbar();
    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getSearchOrganicPaidOverview = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'19':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row m-0 pt-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Chi tiết truy cập từ tìm kiếm</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getSearchOrganicPaidOverview dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-getSearchOrganicPaidOverview">
                    <div id="getSearchOrganicPaidOverview" class="rounded is-loading"
                        style="min-height:250px">
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab"
                                    data-task="TrafficShare"
                                    href="#getSearchOrganicPaidOverview--TrafficShare" role="tab"><span
                                        class=""><i class="fal fa-chart-pie-alt fa-1x"></i></span> <span
                                        class="d-none d-md-inline">Lượng Truy Cập</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                    data-task="AverageDuration"
                                    href="#getSearchOrganicPaidOverview--AverageDuration" role="tab"><span
                                        class=""><i class="fal fa-stopwatch fa-1x"></i></span> <span
                                        class="d-none d-md-inline">Thời Gian Trung Bình</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                    data-task="PagesPerVisit"
                                    href="#getSearchOrganicPaidOverview--PagesPerVisit" role="tab"><span
                                        class=""><i class="fal fa-copy fa-1x"></i></span> <span
                                        class="d-none d-md-inline">Số Trang / Lượt Truy Cập</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab"
                                    data-task="BounceRate" href="#getSearchOrganicPaidOverview--BounceRate"
                                    role="tab"><span class=""><i class="fal fa-sign-out fa-1x"></i></span>
                                    <span class="d-none d-md-inline">Tỉ Lệ Thoát Trang</span></a> </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="custom" style="height:250px; overflow: auto">
                            <div class="row">
                                <div class="col-12 tab-content mt-1 mt-md-3">
                                    <div class="tab-pane px-4 active"
                                        id="getSearchOrganicPaidOverview--TrafficShare" role="tabpanel"
                                        style="height:250px"></div>
                                    <div class="tab-pane px-4"
                                        id="getSearchOrganicPaidOverview--AverageDuration" role="tabpanel"
                                        style="height:250px"></div>
                                    <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--PagesPerVisit"
                                        role="tabpanel" style="height:250px"></div>
                                    <div class="tab-pane px-4" id="getSearchOrganicPaidOverview--BounceRate"
                                        role="tabpanel" style="height:250px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {
        let {
            TrafficShare,
            AverageDuration,
            PagesPerVisit,
            BounceRate
        } = data.data.data;

        const run = async taskName => {

            let SearchOrganicPaidOverview;

            switch (taskName) {
                case 'TrafficShare':
                    SearchOrganicPaidOverview = TrafficShare
                    break;
                case 'AverageDuration':
                    SearchOrganicPaidOverview = AverageDuration
                    break;
                case 'PagesPerVisit':
                    SearchOrganicPaidOverview = PagesPerVisit
                    break;
                case 'BounceRate':
                    SearchOrganicPaidOverview = BounceRate
                    break;
                default:
                    break;
            }

            // console.log(SearchOrganicPaidOverview);



            // prepare data

            let dataChart = {
                keys: [],
                values: [],
            };

            let {
                BreakDown,
                Total
            } = SearchOrganicPaidOverview.Data;
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };

            let temp = true;

            $.each(BreakDown, (index, value) => {

                $.each(value, (name, data) => {
                    if (name == "Organic Search") {
                        if (data == null) {
                            temp = false;
                        }
                    } else {
                        if (data != null) {
                            temp = true;
                        }
                    }
                })
            })

            if (!temp) {
                await $(`#${task}`).removeClass('is-loading').addClass('empty-state');
            } else {
                $.each(BreakDown, (idx, val) => {

                    keys.push(idx);

                    $.each(val, (name, data) => {
                        (name == 'Organic Search') ?
                        values.Organic.push(data):
                            values.Paid.push(data)
                    })

                })

                $(`#${task}--totalTraffic`).html('');
                $.each(Total, (idx, val) => {
                    let title = idx == "Organic Search" ? 'Trung bình cộng tìm kiếm tự nhiên' : 'Trung bình cộng tìm kiếm trả phí';
                    let color = idx == "Organic Search" ? 'rgb(241, 196, 15)' : 'rgb(26, 188, 156)';
                    switch (taskName) {
                        case 'TrafficShare':
                            val = numeral(val).format('0,0');
                            break;
                        case 'AverageDuration':
                            val = numeral(val).format('00:00:00');
                            break;
                        case 'PagesPerVisit':
                            val = numeral(val).format('0');
                            break;
                        case 'BounceRate':
                            val = numeral(val).format('0 %');
                            break;
                        default:
                            break;
                    }
                    $(`#${task}--totalTraffic`).append(`
                <div class="d-flex no-block flex-column mb-4 pl-5">
                    <span class="text-muted">${title}</span>
                    <span class="display-6" style="color:${color}">${val}</span>
                </div>
                `)
                })

                dataChart.keys = keys;
                dataChart.values = values;

                // render chart

                let id = task + '--' + taskName;

                let ele = document.getElementById(id);

                let myChart = echarts.init(ele);

                let option = {
                    tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                name
                            } = params[0];
                            let {
                                marker: mrkr1,
                                color: color1,
                                seriesName: name1,
                                value: val1
                            } = params[0];
                            let {
                                marker: mrkr2,
                                color: color2,
                                seriesName: name2,
                                value: val2
                            } = params[1];

                            name = moment(name).format('DD MMMM YYYY');

                            switch (taskName) {
                                case 'TrafficShare':
                                    val1 = numeral(val1).format('0,0');
                                    val2 = numeral(val2).format('0,0');
                                    break;
                                case 'AverageDuration':
                                    val1 = numeral(val1).format('00:00:00');
                                    val2 = numeral(val2).format('00:00:00');
                                    break;
                                case 'PagesPerVisit':
                                    val1 = numeral(val1).format('0');
                                    val2 = numeral(val2).format('0');
                                    break;
                                case 'BounceRate':
                                    val1 = numeral(val1).format('0 %');
                                    val2 = numeral(val2).format('0 %');
                                    break;
                                default:
                                    break;
                            }

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                        }
                    },
                    legend: {
                        data: ["Tìm kiếm tự nhiên", "Tìm kiếm trả phí"]
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: dataChart.keys,
                        axisLine: {
                            lineStyle: {
                                color: "#ccc"
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#ccc"
                            },
                            fontFamily: 'Arial',
                            formatter: (value, index) => moment(value).format('MM-YYYY')
                        },
                        axisPointer: {
                            lineStyle: {
                                color: "rgb(25, 123, 251)",
                                type: "dashed"
                            }
                        }
                    },
                    yAxis: {
                        type: "value",
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#ccc"
                            },
                            fontFamily: 'Arial', 
                            formatter: (value, index) => {
                                if (taskName == 'TrafficShare') {
                                    return numeral(value).format("0a")
                                } else if (taskName == 'AverageDuration') {
                                    return numeral(value).format("00:00:00")
                                } else if (taskName == 'PagesPerVisit') {
                                    return numeral(value).format("0")
                                } else {
                                    return numeral(value).format("0,0%")
                                }
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: [{
                            name: 'Tìm kiếm tự nhiên',
                            data: dataChart.values.Organic,
                            type: "line",
                            // smooth: true,
                            symbol: "circle",
                            symbolSize: 10,
                            showSymbol: true,
                            hoverAnimation: false,
                            lineStyle: {
                                normal: {
                                    width: 2,
                                    shadowColor: "rgba(0,0,0,0.4)",
                                    shadowBlur: 10,
                                    shadowOffsetY: 10
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgb(241, 196, 15)",
                                    borderColor: "rgba(241, 196, 15, 0.2)",
                                    borderWidth: 12
                                }
                            }
                            // lineStyle: {
                            //   normal: {
                            //     width: 1
                            //   }
                            // },
                            // areaStyle: {
                            //   normal: {
                            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //       offset: 0,
                            //       color: 'rgba(0, 136, 212, 0.3)'
                            //     }, {
                            //       offset: 0.8,
                            //       color: 'rgba(0, 136, 212, 0)'
                            //     }], false),
                            //     shadowColor: 'rgba(0, 0, 0, 0.1)',
                            //     shadowBlur: 10
                            //   }
                            // },
                            // itemStyle: {
                            //   normal: {
                            //     color: 'rgb(0,136,212)',
                            //     borderColor: 'rgba(0,136,212,0.2)',
                            //     borderWidth: 12

                            //   }
                            // },
                        },
                        {
                            name: 'Tìm kiếm trả phí',
                            data: dataChart.values.Paid,
                            type: "line",
                            // smooth: true,
                            symbol: "circle",
                            symbolSize: 10,
                            showSymbol: true,
                            hoverAnimation: false,
                            lineStyle: {
                                normal: {
                                    width: 2,
                                    shadowColor: "rgba(0,0,0,0.4)",
                                    shadowBlur: 10,
                                    shadowOffsetY: 10
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgb(26, 188, 156)",
                                    borderColor: "rgba(26, 188, 156, 0.2)",
                                    borderWidth: 12
                                }
                            }
                            // lineStyle: {
                            //   normal: {
                            //     width: 1
                            //   }
                            // },
                            // areaStyle: {
                            //   normal: {
                            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //       offset: 0,
                            //       color: 'rgba(0, 136, 212, 0.3)'
                            //     }, {
                            //       offset: 0.8,
                            //       color: 'rgba(0, 136, 212, 0)'
                            //     }], false),
                            //     shadowColor: 'rgba(0, 0, 0, 0.1)',
                            //     shadowBlur: 10
                            //   }
                            // },
                            // itemStyle: {
                            //   normal: {
                            //     color: 'rgb(0,136,212)',
                            //     borderColor: 'rgba(0,136,212,0.2)',
                            //     borderWidth: 12

                            //   }
                            // },
                        }
                    ]
                };
                myChart.setOption(option);


                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });

                await $(`#${task}`).removeClass('is-loading');
            }
        }

        run('TrafficShare');

        $('#getSearchOrganicPaidOverview a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var taskName = $(e.target).data('task'); // activated tab
            run(taskName);
        });

        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        
    } else {
        console.log(`${task} failed`);
    }
};
const getWebsiteAdsIntelDisplay = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'40':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Mẫu quảng cáo hiển thị
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getWebsiteAdsIntelDisplay dropdown-item similarReloadTask text-muted" data-task="getWebsiteAdsIntelDisplay" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-getWebsiteAdsIntelDisplay">
                    <div id="getWebsiteAdsIntelDisplay" class="carousel slide" data-interval="false">
                        <ol class="carousel-indicators">
                        </ol>
                        <div class="carousel-inner rounded-bottom is-loading" role="listbox"
                            style="height: 370px">
                        </div>
                        <a class="carousel-control-prev" href="#getWebsiteAdsIntelDisplay" role="button"
                            data-slide="prev">
                            <i
                                class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                        </a>
                        <a class="carousel-control-next" href="#getWebsiteAdsIntelDisplay" role="button"
                            data-slide="next">
                            <i
                                class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                        </a>
                    </div>
                </div>
            </div>
    </div>`)
    }
    if (data.status == "success") {

        let {
            data: WebsiteAdsIntelDisplay
        } = data.data;

        $(`#${task} .carousel-inner`).html('');
        $(`#${task} .carousel-indicators`).html('');

        await $.each(WebsiteAdsIntelDisplay, (index, value) => {
            let {
                ActiveDays: activeDay,
                CampaignTitle,
                CampaignUrl,
                FirstDetected: firstSeen,
                HasPermission,
                Height,
                LastDetected: lastSeen,
                Url,
                UrlVideo,
                VideoDuration,
                Width
            } = value;

            // console.log('getWebsiteAdsIntelDisplay video: ', UrlVideo, VideoDuration);

            (CampaignTitle != 'No title') ?
            CampaignTitle = `<div class="text-truncate"><div class="font-10 text-muted">Tên chiến dịch</div><span title="${CampaignTitle}">${CampaignTitle}</span></div>`:
                CampaignTitle = ''

            if (index < 5) {
                $(`#${task} .carousel-indicators`).append(`
            <li data-target="#${task}" data-slide-to="${index}" class="my-0 border-0 bg-favorite text-white text-center rounded-circle ${index == 0 ? 'active' : ''}" style="width:20px;height:20px;text-indent:0;">${index + 1}</li>
            `);
            }
            $(`#${task} .carousel-inner`).append(`
        <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
            <div class="similarAdsTile border rounded">
            <div class="similarImgAndLink bg-secondary">
                <div class="similarImg p-10">
                <span class="d-flex no-block justify-content-center w-100" style="height:140px">
                    <img class="img-responsive align-self-center cursor-pointer shadow mh-100" src="${Url}" />
                </span>
                </div>
                <a target="_blank" href="${CampaignUrl}" title="${CampaignUrl}" class="d-flex flex-row justify-content-center">
                <span class="d-block mw-100 ml-5 text-truncate">${CampaignUrl}</span>
                <i class="fal fa-external-link ml-1 mr-5 pt-1"></i>
                </a>
            </div>
            <div class="similarAdsDetails p-20 border-top">
                ${CampaignTitle}
                <div class="row">
                <div class="col text-muted font-10">Ngày bắt đầu</div>
                <div class="col text-muted font-10">Ngày kết thúc</div>
                <div class="col text-muted font-10">Số ngày hoạt động</div>
                <div class="col text-muted font-10">Kích thước</div>
                </div>
                <div class="row">
                <div class="col">${moment(firstSeen).format('DD-MM-YYYY')}</div>
                <div class="col">${moment(lastSeen).format('DD-MM-YYYY')}</div>
                <div class="col">${activeDay}</div>
                <div class="col">${Width}x${Height}</div>
                </div>
            </div>
            </div>
        </div>
        `);
        });

        await $(`#${task} .carousel-inner`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin'); 
    } else {
        console.log(`${task} failed`);
    }
};
const getScrapedSearchAds = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'29':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                             Mẫu quảng cáo tìm kiếm trả phí</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getScrapedSearchAds dropdown-item similarReloadTask text-muted" data-task="getScrapedSearchAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-getScrapedSearchAds">
                    <div id="getScrapedSearchAds" class="carousel slide" data-interval="false">
                        <ol class="carousel-indicators">
                        </ol>
                        <div class="carousel-inner rounded-bottom is-loading" role="listbox"
                            style="height: 370px">
                        </div>
                        <a class="carousel-control-prev" href="#getScrapedSearchAds" role="button"
                            data-slide="prev">
                            <i
                                class="fas fa-angle-left font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                        </a>
                        <a class="carousel-control-next" href="#getScrapedSearchAds" role="button"
                            data-slide="next">
                            <i
                                class="fas fa-angle-right font-20 text-dark rounded-circle bg-white shadow p-15 p-l-20 p-r-20"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    if (data.status == "success") {

        let {
            data: SearchAds
        } = data.data;

        $(`#${task} .carousel-inner`).html('');
        $(`#${task} .carousel-indicators`).html('');

        await $.each(SearchAds, (index, value) => {

            if (index < 5) {
                $(`#${task} .carousel-indicators`).append(`
            <li data-target="#${task}" data-slide-to="${index}" class="my-0 border-0 bg-favorite text-white text-center rounded-circle ${index == 0 ? 'active' : ''}" style="width:20px;height:20px;text-indent:0;">${index + 1}</li>
            `);
            }

            let {
                Type
            } = value;

            let carouselItem = '';

            if (Type == "Text") {
                let {
                    Description,
                    DestUrl,
                    FullPage,
                    Keywords,
                    NumberOfKeywords,
                    Page,
                    Position,
                    Title,
                } = value;

                if (index < 5) {

                    Page = Page || FullPage;
                    (Description != '') ? Description = '<div class="text-muted">' + Description + '</div>': null;

                    carouselItem = `
                <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                <div class="similarAdsText border rounded">
                    <div class="d-flex no-block align-items-center justify-content-center bg-secondary p-10" style="height:185px">
                    <div class="border bg-white shadow p-10 w-100">
                        <a href="javascript:;" target="_blank" title="${DestUrl}">
                        ${Title}
                        </a>
                        ${Page != '' ? '<div class="text-success text-truncate pb-0">' + Page + '</div>' : ''}
                        ${Description}
                    </div>
                    </div>
                    <div class="similarAdsDetails p-20 border-top">
                    <div class="row">
                        <div class="col text-muted font-10">Vị trí trung bình</div>
                        <div class="col text-muted font-10">Số lượng từ khoá</div>
                        <div class="col text-muted font-10">Website đích</div>
                    </div>
                    <div class="row">
                        <div class="col">${numeral(Position).format('0')}</div>
                        <div class="col">${NumberOfKeywords}</div>
                        <div class="col text-truncate pb-0">${DestUrl == '' ? domain : DestUrl}</div>
                    </div>
                    <div class="mt-3 text-truncate pb-0"><div class="font-10 text-muted">Từ khoá</div>${Keywords.join(',')}</div>
                    </div>
                </div>
                </div>
                `
                }
            } else {
                // Google shopping
                let {
                    Brand,
                    DestUrl,
                    ImageUrl,
                    Keywords,
                    NumberOfKeywords,
                    Position,
                    Price,
                    Title,
                } = value;

                if (index < 5) {
                    DestUrl == '' ? DestUrl = domain : null;

                    carouselItem = `
            <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                <div class="similarAdsShopping border rounded">
                <div class="row">
                    <div class="col-5">
                    <div class="d-flex no-block flex-column bg-favorite-2 h-100 align-items-center justify-content-center px-4">
                        <div class="w-100 border rounded bg-secondary shadow">
                        <img width="121px" height="121px" class="d-flex no-block img-responsive align-self-center mh-100 my-2 mx-auto shadow" src="${ImageUrl.replace(/\\x3d/g, '')}" />
                        <div class="p-10 border-top bg-white rounded-bottom">
                            <a href="javascript:;" target="_blank" title="${DestUrl}">
                            ${Title}
                            </a>
                            <div class="font-weight-bold">${Price}</div>
                            <div class="text-success">${Brand}</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-7 p-10">
                    <div class="row">
                        <div class="col text-muted font-10">Vị trí trung bình</div>
                        <div class="col text-muted font-10">Số lượng từ khoá</div>
                    </div>
                    <div class="row">
                        <div class="col">${numeral(Position).format('0')}</div>
                        <div class="col">${NumberOfKeywords}</div>
                    </div>
                    <div class="row mt-2">
                        <div class="col text-muted font-10">Website đích</div>
                    </div>
                    <div class="row">
                        <div class="col text-truncate"><a target="_blank" href="${DestUrl}" title="${DestUrl}">${DestUrl} <i class="fal fa-external-link ml-auto"></i></a></div>
                    </div>
                    <div class="row">
                        <div class="col text-muted font-10">Từ khoá</div>
                    </div>
                    <div class="row">
                        <div class="col"><div class="position-relative p-r-10 w-100 keywords-list" style="height:190px;word-wrap:break-word;">${Keywords.join(', ')}</div></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            `
                }
            }
            $(`#${task} .carousel-inner`).append(carouselItem);
        });

        $('.keywords-list').perfectScrollbar();

        await $(`#${task} .carousel-inner`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }
};
const getSimilarSites = async (task, data) => { 
    $(`#${task}`).html('');
    let {
        data: SimilarSites,
        website: domain
    } = data.data;

    let domain2;
    $.each(SimilarSites, (index, site) => {

        let temp = {
            Domain: site.Domain,
            Favicon: site.Favicon
        }

        arrDomain.push(temp); 

        if ((index % 7) == 0) {
            $(`#${task}`).append('<div class="similarSites col-12 col-md-4"></div>')
        }
        var compareNode = $(`<span  data-domain="${site.Domain}" class="changeWebSite text-primary bg-info-2 rounded-pill px-2 font-10 align-self-center ml-auto text-uppercase">+ so sánh</span>`);
        $(`<a title="${site.Domain}" class="d-flex align-items-center" href='?view=traffic-website&action=result&domain=${site.Domain}'">
            <img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}" />
            <span  data-type="website" data-input="${site.Domain}" class="changeURL">${site.Domain}</span>
        </a>`).appendTo(`#${task} .similarSites:last-child`)
        .append(compareNode);
        compareNode.click(function(e) {
            e.preventDefault();
            domain2 = $(this).data('domain');
            // let url1 = $(this).data('url1');
            // let url2 = $(this).data('url2');
            // changeURLCompare(url1,url2);
            // return false;
        });
    })

    // Popup nhap website
    const getDomain = async () => {
        const result = await Swal.fire({
            title: 'Hãy nhập website để so sánh',
            html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${domain} placeholder="Nhập website của bạn">` +
                `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                `<input id="swal-input2" class="swal2-input text-lowercase" value=${domain2} placeholder="Nhập website của đối thủ">`,
            focusConfirm: false,
            showCloseButton: true,
            confirmButtonText: 'So Sánh',
            width: 600,
            padding: '4em',
            position: 'bottom',
            // customClass: {
            //     container: "pb-6"
            // },
            onOpen: () => {
                $('#swal-input2').focus()
                $('#swal-input2').keypress(event => {
                    if(event.which == 13) {
                        $('.swal2-confirm').click(); 
                    }
                })
            },
            preConfirm: () => {
                if (document.getElementById('swal-input1').value == "" || document.getElementById('swal-input2').value == "") {
                    Swal.showValidationMessage(
                        `Vui lòng nhập đủ website`
                    )
                } else {
                    if (document.getElementById('swal-input1').value == document.getElementById('swal-input2').value) {
                        Swal.showValidationMessage(
                            `Hai website không được trùng`
                        )
                    }
                }

                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }
        }) 
        if (result.dismiss == undefined) { 
            return result; 
        }

    };

    // Change website
    $(
        `.similarSites  .changeWebSite`
    ).click(() => { 
        getDomain().then(data => { 
            if (data) {
                location.href = `?view=traffic-website&action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
                // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
            }
        });
    });

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getTrafficDisplayAdvertisingWebsitesTable = async (task, data, check, object) => { 
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'40':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="${task}">
    <div class="grid-stack-item-content">
        <div class="bg-white shadow-sm rounded getTrafficDisplayAdvertisingWebsitesTable-container h-100" style=" overflow: hidden;">
            <div class="row border-bottom m-0 py-2">
                <div class="col-auto d-flex no-block align-items-center mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20" height="20" viewBox="0 0 24 24" version="1.1"
                        class="svg-icon text-primary mb-1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect id="bound" x="0" y="0" width="24" height="24" />
                            <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                            <path
                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                id="Path-92" fill="#000000" fill-rule="nonzero" />
                        </g>
                    </svg>
                </div>
                <div class="col-auto pl-0">
                    <div class="text-capitalize font-weight-bold">
                        Trang nguồn quảng cáo hiển thị</div>
                    <div class="text-muted similarDates font-10"></div>
                </div>
                <div class="dropdown-wrapper ml-auto">
                    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                    </button>
                    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                        <a class="text-muted getTrafficDisplayAdvertisingWebsitesTable" data-task="getTrafficDisplayAdvertisingWebsitesTable" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                        <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                    </div>
                </div>
            </div>
            <div style="height:370px;overflow: auto;">
                <div id="Parent-getTrafficDisplayAdvertisingWebsitesTable">
                    <table id="getTrafficDisplayAdvertisingWebsitesTable" class="table table-striped"
                        style="width:100%;height:370px;">
                        <thead class="text-center">
                            <tr>
                                <th scope="col" style="text-align: left;">Trang web</th>
                                <th scope="col" style="text-align: left;">Lượt truy cập</th>
                                <th scope="col">Tỉ lệ truy cập</th>
                            </tr>
                        </thead>
                        <tbody class="tb_getTrafficDisplayAdvertisingWebsitesTable">
                        </tbody>
                    </table>
                </div>
            </div>
    </div>`)
    }
    let dataReport = ()=>{
        if(data && data.data && data.data.data && data.data.data.Data){
            let { Data: newData } = data.data.data;
            return newData.Records.filter(item => item.Domain != "grid.upgrade")
            // return (newData.Records)
        }else{
            return [];
        }
    }
    dataReport().forEach((ele, index)=> {
        $(".tb_getTrafficDisplayAdvertisingWebsitesTable").append(`
        <tr role="row" class="odd">
            <td>
                <div class="d-flex">
                    <img class="p-1 mr-2 border rounded bg-secondary" src="${ele.Favicon}">${ele.Domain}</div>
            </td>
            <td>${(ele.Visits == 0) ? `-` : `${numeral(ele.Visits).format("0,0")}`}</td>
            <td class="sorting_1">
                <div class="row align-items-center" style="width:150px">
                    <div class="col-4">${numeral(ele.Share).format('0.00%')}</div>
                    <div class="col">
                    <div class="progress border">
                        <div class="progress-bar bg-info" style="width: ${numeral(ele.Share).format('0%')}; height:14px;" role="progressbar"></div> 
                    </div>
                    </div>
                    <div class="col-4">
                    ${(ele.Change==0 || ele.Change==null) ? `-` : (ele.Change<0) ? `<div class="negative text-red">${numeral(ele.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(ele.Change).format('0.00%')}</div>`}
                    </div>
                </div>
            </td>
        </tr>
        `)
    });
}
const getTrafficSocialTableDetail = async (task, data, check, object) => { 
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'5':(object['gs-x'])}" data-gs-y="${(!key)?'51':(object['gs-y'])}" data-gs-width="${(!key)?'7':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getTrafficSocialTableDetail-container h-100" style=" overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">Trang web xã hội</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item text-muted getTrafficSocialTableDetail" data-task="getTrafficSocialTableDetail" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="height:300px;overflow: auto;">
                    <div id="Parent-getTrafficSocialTableDetail">
                        <table id="getTrafficSocialTableDetail" class="table table-striped"
                            style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th style="text-align: left;">Trang web</th>
                                    <th style="text-align: left;">Lượt truy cập</th>
                                    <th>Tỉ lệ truy cập</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    let dataReport = ()=>{
        if(data && data.data && data.data.data && data.data.data.Data){
            let { Data: newData } = data.data.data;
            return newData.Records.filter(item => item.Page != "grid.upgrade")
            // return (newData.Records)
        }else{
            return [];
        }
    }
    dataReport().forEach((ele,index) => {
        $("tbody").append(`
            <tr role="row" class="odd">
                <td>
                    <div class="d-flex">${ele.Page}</div>
                </td>
                <td>${(ele.Visits == 0) ? `-` : `${numeral(ele.Visits).format("0,0")}`}</td>
                <td class="sorting_1">
                    <div class="row align-items-center" style="width:150px">
                        <div class="col-4">${numeral(ele.Share).format('0.00%')}</div>
                        <div class="col">
                        <div class="progress border">
                            <div class="progress-bar bg-info" style="width: ${numeral(ele.Share).format('0%')}; height:14px;" role="progressbar"></div> 
                        </div>
                        </div>
                        <div class="col-4">
                        ${(ele.Change==0 || ele.Change==null) ? `-` : (ele.Change<0) ? `<div class="negative text-red">${numeral(ele.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(ele.Change).format('0.00%')}</div>`}
                        </div>
                    </div>
                </td>
            </tr>
        `)
    });
}
const getTrafficSourcesTotalReferralsTable = async (task, data, check, object) => { 
    if(check == "true"){
    $(".grid-stack").append(` <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'66':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content h-100">
            <div class="bg-white shadow-sm rounded getTrafficSourcesTotalReferralsTable-container h-100" style=" overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Website nguồn truy cập giới thiệu</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficSourcesTotalReferralsTable dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesTotalReferralsTable" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="height:270px; overflow: auto">
                    <div id="Parent-getTrafficSourcesTotalReferralsTable">
                        <table id="getTrafficSourcesTotalReferralsTable" class="table table-striped"
                            style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th style="text-align: left;">Trang web</th>
                                    <th style="text-align: left;">Lượt truy cập</th>
                                    <th style="text-align: left;">Tỉ lệ truy cập</th>
                                </tr>
                            </thead>
                            <tbody class="tb_getTrafficSourcesTotalReferralsTable">
                            </tbody>    
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    let dataReport = ()=>{
        if(data && data.data && data.data.data && data.data.data.Data){
            let { Data: newData } = data.data.data;
            return newData.Records.filter(item => item.Domain != "grid.upgrade")
            // return (newData.Records)
        }else{
            return [];
        }
    }
    dataReport().forEach((ele, index) => {
        $(".tb_getTrafficSourcesTotalReferralsTable").append(`
            <tr role="row" class="odd">
                <td>
                    <div class="d-flex"><img class="p-1 mr-2 border rounded bg-secondary" src="${ele.Favicon}">${ele.Domain}</div>
                </td>
                <td>${(ele.Visits == 0) ? `-` : `${numeral(ele.Visits).format("0,0")}`}</td>
                <td class="sorting_1">
                    <div class="row align-items-center" style="width:150px">
                        <div class="col-4">${numeral(ele.Share).format('0.00%')}</div>
                        <div class="col">
                        <div class="progress border">
                            <div class="progress-bar bg-info" style="width: ${numeral(ele.Share).format('0%')}; height:14px;" role="progressbar"></div> 
                        </div>
                        </div>
                        <div class="col-4">
                        ${(ele.Change==0 || ele.Change==null) ? `-` : (ele.Change<0) ? `<div class="negative text-red">${numeral(ele.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(ele.Change).format('0.00%')}</div>`}
                        </div>
                    </div>
                </td>
            </tr>
        `)
    });
}
const getTrafficDisplayPaidOutgoingWebsitesTable = async (task, data, check, object) => { 
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'61':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getTrafficDisplayPaidOutgoingWebsitesTable-container h-100" style=" overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Trang web được quảng cáo trên ${domain}</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDisplayPaidOutgoingWebsitesTable dropdown-item similarReloadTask text-muted" data-task="getTrafficDisplayPaidOutgoingWebsitesTable" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="height:300px;overflow: auto;">
                    <div id="Parent-getTrafficDisplayPaidOutgoingWebsitesTable">
                        <table id="getTrafficDisplayPaidOutgoingWebsitesTable" class="table table-striped"
                            style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th style="text-align: left;">Trang web</th>
                                    <th style="text-align: left;">Lượt truy cập</th>
                                    <th style="text-align: left;">Tỉ lệ truy cập</th>
                                </tr>
                            </thead>
                            <tbody class="tb_getTrafficDisplayPaidOutgoingWebsitesTable">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    let dataReport = ()=>{
        if(data && data.data && data.data.data && data.data.data.Data){
            let { Data: newData } = data.data.data;
            return newData.Records.filter(item => item.Domain != "grid.upgrade")
            // return (newData.Records)
        }else{
            return [];
        }
    }
    dataReport().forEach((ele, index) => {
        $(".tb_getTrafficDisplayPaidOutgoingWebsitesTable").append(`
            <tr role="row" class="odd">
                <td>
                    <div class="d-flex"><img class="p-1 mr-2 border rounded bg-secondary" src="${ele.Favicon}">${ele.Domain}</div>
                </td>
                <td>${(ele.Visits == 0) ? `-` : `${numeral(ele.Visits).format("0,0")}`}</td>
                <td class="sorting_1">
                    <div class="row align-items-center" style="width:150px">
                        <div class="col-4">${numeral(ele.Share).format('0.00%')}</div>
                        <div class="col">
                        <div class="progress border">
                            <div class="progress-bar bg-info" style="width: ${numeral(ele.Share).format('0%')}; height:14px;" role="progressbar"></div> 
                        </div>
                        </div>
                        <div class="col-4">
                        ${(ele.Change==0 || ele.Change==null) ? `-` : (ele.Change<0) ? `<div class="negative text-red">${numeral(ele.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(ele.Change).format('0.00%')}</div>`}
                        </div>
                    </div>
                </td>
            </tr>
        `)
    });
}
const getTrafficDestinationReferrals = async (task, data, check, object) => { 
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'71':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getTrafficDestinationReferrals-container h-100" style="overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <path
                                    d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                    id="Path-92" fill="#000000" fill-rule="nonzero" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold"> Website đích sau khi rời bỏ
                        </div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getTrafficDestinationReferrals dropdown-item similarReloadTask text-muted" data-task="getTrafficDestinationReferrals" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div style="height:270px;overflow: auto;">
                    <div id="Parent-getTrafficDestinationReferrals">
                        <table id="getTrafficDestinationReferrals" class="table table-striped"
                            style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th scope="col" style="text-align: left;">Website</th>
                                    <th scope="col" style="text-align: left;">Tỉ lệ</th>
                                </tr>
                            </thead>
                            <tbody class="tb_getTrafficDestinationReferrals">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    let dataReport = data.data.data;
    dataReport.forEach((ele, index) => {
        $(".tb_getTrafficDestinationReferrals").append(`
        <tr role="row" class="odd">
            <td>
                <div> 
                    <img src="${ele.Favicon}" class="mr-1">
                    <a data-type="website" class="changeURL" data-input="${ele.Domain}" href="?view=traffic-website&amp;action=result&amp;domain=${ele.Domain}">${ele.Domain}</a>
                </div>
            </td>
            <td class="sorting_1">
                <div class="row">
                    <div class="col-4"> ${numeral(ele.Share).format('0.00%')}%</div>
                    <div class="col-8">
                        <div class="progress border">
                            <div class="progress-bar bg-primary" style="width: ${numeral(ele.Share).format('0.00%')}%; height:14px;" role="progressbar"></div>
                        </div>
                    </div>
                </div>
            </td>
          </tr>
        `)
    });
}
const getOrganicKeywordsBrandedTable = async (task, data, check, object) => {
    if(check == "true"){
    $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-x="${(!key)?'5':(object['gs-x'])}" data-gs-y="${(!key)?'24':(object['gs-y'])}" data-gs-width="${(!key)?'7':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="container bg-white shadow-sm rounded h-100" style=" overflow: hidden;">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20" height="20" viewBox="0 0 24 24" version="1.1"
                            class="svg-icon text-primary mb-1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <circle id="Combined-Shape" fill="#000000" opacity="0.3" cx="12" cy="12"
                                    r="10" />
                                <path
                                    d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                    id="Combined-Shape" fill="#000000" opacity="1" />
                            </g>
                        </svg>
                    </div>
                    <div class="col-auto pl-0">
                        <div class="text-capitalize font-weight-bold">
                            Chi tiết truy cập theo từ khoá tự nhiên</div>
                        <div class="text-muted similarDates font-10"></div>
                    </div>
                    <div class="ml-auto pr-2 d-flex align-items-center">
                        <fieldset>
                            <input id="getOrganicKeywordsBrandedTable" class="radio-inline__input"
                                type="radio" name="getOrganicKeywordsTable"
                                value="getOrganicKeywordsBrandedTable" checked="checked" />
                            <label class="radio-inline__label mb-0" for="getOrganicKeywordsBrandedTable">
                                Có thương hiệu
                            </label>
                            <input id="getOrganicKeywordsNonBrandedTable" class="radio-inline__input"
                                type="radio" name="getOrganicKeywordsTable"
                                value="getOrganicKeywordsNonBrandedTable" />
                            <label class="radio-inline__label mb-0" for="getOrganicKeywordsNonBrandedTable">
                                Không thương hiệu
                            </label>
                        </fieldset>
                        <div class="dropdown-wrapper ml-auto">
                            <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                            </button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <a class="getOrganicKeywordsTable dropdown-item similarReloadTask text-muted" data-task="getOrganicKeywordsBrandedTable" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                                <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="height:300px;overflow: auto;">
                    <div id="Parent-getOrganicKeywordsTable">
                        <table id="getOrganicKeywordsTable" class="table table-striped"
                            style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th scope="col" style="text-align: left; max-width: 169px">Từ khoá</th>
                                    <th scope="col" style="text-align: left;">CPC</th>
                                    <th scope="col" style="text-align: left;">Vị trí</th>
                                    <th scope="col" style="text-align: left;">Lượt tìm kiếm</th>
                                    <th scope="col" style="text-align: left;">Tỉ lệ truy cập</th>
                                </tr>
                            </thead>
                            <tbody class="tb_getOrganicKeywordsBrandedTable">
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
    let dataReport = data.data.data.Data
    dataReport.forEach((ele, index) => {
        if(index<=50){
            $(".tb_getOrganicKeywordsBrandedTable").append(`
            <tr role="row" class="odd">
                <td style="max-width: 169px">
                    <div class="text-truncate pb-0">
                        <a href="${ele.DestUrlOrganic[0].Value}">${ele.SearchTerm}</a>
                    </div>
                </td>
                <td>
                    <div>$${ele.CPC}</div>
                </td>
                <td>
                    <div>${ele.PositionOrganic[0].Value}</div>
                </td>
                <td>
                    <div>${numeral(ele.KwVolume).format('0,0')}</div>
                </td>
                <td class="d-flex align-items-center">
                    <div>${numeral(ele.TotalShare).format('0.00%')}</div>
                    <div class="ml-2 text-left ${ele.Change == 'NaN' ? 'text-muted' : (ele.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${ele.Change == 'NaN' ? '-' : ((ele.Change === '-' ? numeral(Math.abs(ele.Change)).format('0.00%') : numeral(ele.Change).format('0.00%')))}</div>
                </td>
            </tr>
            `)
        }
    });
    
}
export default api;

