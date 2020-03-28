import createCompare from '/dist/js/default/report/load-compare.js';
numeral.locale("vi");
const url = new URL(location.href);
let duty = url.searchParams.get("getTask");
let worth = {
    myarr : []
};
if(duty == '03'){
    let get03 = [
        {
            task: 'getWebDemographicsAge'
        },
        {
            task: 'getWebsiteGeography'
        },
        {
            task: 'getWebDemographicsGender'
        },
        {
            task: 'getTrafficSourcesOverview'
        },
        {
            task: 'getWebsiteAdsVisitsOverview'
        },
        {
            task: 'getTrafficSocial'
        },
        {
            task: 'getTrafficSocialOverview'
        },
        {
            task: 'getTrafficDisplayPaidOutgoingAds'
        },
        {
            task: 'getTotalOutgoingAdVisits'
        },

    ]
    worth.myarr.push(get03)
}else if(duty == '07'){
    let get07 = [
        {
            task: 'getSearchBrandedKeywords'
        },
        {
            task: 'getSearchBrandedKeywordsNoneBranded'
        },
        {
            task: 'getTrafficSourcesSearch'
        },
        {
            task: 'getTrafficSourcesTotalReferrals'
        },
        {
            task: 'getTrafficSourcesTotalReferralsOverview'
        },
        {
            task: 'getSearchOrganicPaidOverviewOrganic'
        },
        {
            task: 'getSearchOrganicPaidOverviewOrganic_AverageDuration'
        },
        {
            task: 'getSearchOrganicPaidOverviewOrganic_PagesPerVisit'
        },
        {
            task: 'getSearchOrganicPaidOverviewOrganic_BounceRate'
        },
        {
            task: 'getSearchOrganicPaidOverviewPaid'
        },
        {
            task: 'getSearchOrganicPaidOverviewPaid_AverageDuration'
        },
        {
            task: 'getSearchOrganicPaidOverviewPaid_PagesPerVisit'
        },
        {
            task: 'getSearchOrganicPaidOverviewPaid_BounceRate'
        },

    ]
    worth.myarr.push(get07)
}else if(duty == '04' || duty == '05' || duty == '06'){
    let value = [
        {
            task: 'getMarketingMixOverviewDaily_TrafficShare'
        },
        {
            task: 'getMarketingMixOverviewDaily_PagesPerVisit'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_Direct'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_Email'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_DisplayAds'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_OrganicSearch'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_PaidSearch'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_Referrals'
        },
        {
            task: 'getMarketingMixOverviewDaily_AverageDuration_Social'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_Direct'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_Email'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_DisplayAds'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_OrganicSearch'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_PaidSearch'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_Referrals'
        },
        {
            task: 'getMarketingMixOverviewDaily_BounceRate_Social'
        },
    ]
    worth.myarr.push(value)
}else if(duty == '08'){
    let get08 = [
        {
            task: 'totalTraffic'
        },
        {
            task: 'getTrafficAndEngagementOverviewMonthly'
        },
        {
            task: 'getDesktopVsMobileVisits'
        },
        {
            task: 'getUniqueUsersMonthly'
        },
        {
            task: 'getMarketingMixOverviewDaily_PagesPerVisit'
        },
        {
            task: 'getMarketingMixOverviewDaily_TrafficShare'
        },
        {
            task: 'getTrafficSourcesSearch'
        },
        {
            task: 'getWebsiteAdsVisitsOverview'
        },
        {
            task: 'getTrafficSourcesOverview'
        },
        {
            task: 'getTotalOutgoingAdVisits'
        },
    ]
    worth.myarr.push(get08)
}
$(document).ready(() => {
    var domain1 = url.searchParams.get("domain1");
    var domain2 = url.searchParams.get("domain2");
    var domain3 = url.searchParams.get("domain3");
    var domain4 = url.searchParams.get("domain4");
    var domain5 = url.searchParams.get("domain5");
    let clear = url.searchParams.get("clear");
    let key = url.searchParams.get("key");
    if(!key){
        $('#addMetric').addClass('d-none')

        const aaaaa = worth.myarr[0].map(async (ele,index) => {  
            return await createCompare(ele, domain1, domain2, domain3, domain4, domain5);
        });

        Promise.all(aaaaa).then(data => { 
        
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
        let temp = {task}
        console.log(temp)
        createCompare(temp,  domain1, domain2, domain3, domain4, domain5, "false");
    })
    if(key){
        $.get(`//localapi.trazk.com/report/index.php?task=getReportByKey&userToken=${userToken}&key=${key}`,function(data){
            data = JSON.parse(data);
            const aaaaa = data.data.reportData.map(async (ele,index) => {  
                return await createCompare(ele, domain1, domain2, domain3, domain4, domain5);
            });
            Promise.all(aaaaa).then(data => { 
            
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