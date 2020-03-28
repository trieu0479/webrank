import createReport from '/dist/js/default/load-report.js';
let myarr = [
    {
        task: 'totalTraffic'
    },
    {
        task: 'getDesktopVsMobile'
    }, 
    {
        task: 'getWebDemographicsGender'
    }, 
    {
        task: 'getTrafficAndEngagementOverviewMonthly'
    }, 
    {
        task: 'getWebsiteGeography'
    }, 
    {
        task: 'getWebDemographicsAge'
    }, 
    {
        task: 'getTrafficAndEngagementVisitsMonthly'
    }, 
    {
        task: 'getTrafficSourcesOverview'
    }, 
    {
        task: 'getMarketingMixOverviewDaily'
    }, 
    {
        task: 'getTrafficSourcesSearch'
    }, 
    {
        task: 'getSearchOrganicPaidOverview'
    }, 
    {
        task: 'getSearchBrandedKeywords'
    }, 
    {
        task: 'getOrganicKeywordsBrandedTable'
    }, 
    {
        task: 'getScrapedSearchAds'
    }, 
    {
        task: 'getPaidSearchCompetitorsTable'
    }, 
    {
        task: 'getWebsiteAdsVisitsOverview'
    }, 
    {
        task: 'getTrafficDisplayAdvertisingAds'
    }, 
    {
        task: 'getTrafficDestinationAds'
    }, 
    {
        task: 'getWebsiteAdsIntelDisplay'
    }, 
    {
        task: 'getTrafficSocial'
    }, 
    {
        task: 'getTrafficSourcesSocial'
    }, 
    {
        task: 'getTrafficSourcesTotalReferrals'
    }, 
    {
        task: 'getTrafficDisplayPaidOutgoingAdsTable'
    }, 
    {
        task: 'getOutgoingAds'
    }, 
    {
        task: 'getTotalOutgoingAdVisits'
    }, 
    {
        task: 'getTrafficDisplayAdvertisingWebsitesTable'
    }, 
    {
        task: 'getTrafficSocialTableDetail'
    }, 
    {
        task: 'getTrafficSourcesTotalReferralsTable'
    },
    {
        task: "getTrafficDestinationReferrals"
    },
    {
        task: "getTrafficDisplayPaidOutgoingWebsitesTable"
    }
]


$(document).ready(() => {
    const url = new URL(location.href);
    const originalDomain = url.searchParams.get("domain") || url.pathtask.split("/")[2];
    numeral.locale("vi");
    let domain = originalDomain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];  
    let key = url.searchParams.get("key");
    let clear = url.searchParams.get("clear");
    if(!key){
        const load_all_report = myarr.map(async (ele,index) => {  
            return await createReport(ele,domain);
        });

        Promise.all(load_all_report).then(data => { 
            if(!clear){
                $('.grid-stack').gridstack();
            }else{
                $('.information-wrapper').removeClass('d-flex').addClass('d-none')
                $('.dropdown-wrapper').addClass('d-none')
                $('.grid-stack').gridstack({
                    staticGrid: true,
                    disableDrag: true,
                    disableResize: true
                });
            }
            $('.app-loader').removeClass('d-flex').addClass('d-none'); 
        });
    }
    $('body').on('click','.similarReloadTask',function () { 
        let task = $(this).data("task");
        if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
        $(this).find('i').addClass('fa-spin');
        createReport(task,domain,"false");
    })
    if(key){
        $.get(`//localapi.trazk.com/report/index.php?task=getReportByKey&userToken=${userToken}&key=${key}`,function(data){
            data = JSON.parse(data);
            const load_all_report = data.data.reportData.map(async (ele,index) => {   
                return await createReport(ele,domain);
            });
            Promise.all(load_all_report).then(data => { 

                if(!clear){
                    $('.grid-stack').gridstack();
                }else{
                    $('.information-wrapper').removeClass('d-flex').addClass('d-none')
                    $('.dropdown-wrapper').addClass('d-none')
                    $('.grid-stack').gridstack({
                        staticGrid: true,
                        disableDrag: true,
                        disableResize: true
                    });
                }
                $('.app-loader').removeClass('d-flex').addClass('d-none'); 
            });


            var reportInfo = data.data.reportInfo
            $('#reportInfo').html(`
                <div class="slect-custom d-flex align-items-center">
                    <div class="logo p-2 d-flex justify-content-center align-items-center" style="text-align: center;">
                        <div class="avatar-preview"> 
                            <div id="imagePreviewContactForm" data-url="${reportInfo.reportLogo}" style="background-image: url(${reportInfo.reportLogo});"></div> 
                        </div>
                    </div>
                    <div id="custom_slect">
                        <h3 class="text-uppercase font-weight-bold font-14 coppy_titles">${reportInfo.reportName}</h3>
                        <div class="date">
                            <span class="text-muted coppy_date">${reportInfo.reportDes}</span>
                        </div>
                    </div>
                </div>
                <a href="javascripvoild:0" id="custom_title"><i class="fal fa-pencil p-2"></i></a>
            `)
        })
    }
})