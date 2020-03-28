// import counterUp from '../counterup2/index.js';

// const counter = document.querySelector('.counter');

var domain = '';
const test = new URL(window.location.href);
const key = test.searchParams.get("key");
let duty = url.searchParams.get("getTask")
const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];

function getSum(total, num) {
    return total + Math.round(num);
}
const api = async (task, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    var myarr = [{
        domain: domain1
    }, {
        domain: domain2
    }]
    if (domain3) {
        var myarr = [{
            domain: domain1
        }, {
            domain: domain2
        }, {
            domain: domain3
        }]
    }
    if (domain4) {
        var myarr = [{
            domain: domain1
        }, {
            domain: domain2
        }, {
            domain: domain3
        }, {
            domain: domain4
        }]
    }
    if (domain5) {
        var myarr = [{
            domain: domain1
        }, {
            domain: domain2
        }, {
            domain: domain3
        }, {
            domain: domain4
        }, {
            domain: domain5
        }]
    }
    // console.log(myarr)

    let taskName = task;
    if (task == "totalTraffic" || task == "getDesktopVsMobileVisits") {
        task = "getDesktopVsMobileVisits";
    }
    if (task == "getMarketingMixOverviewDaily_TrafficShare" || task == "getMarketingMixOverviewDaily_AverageDuration_Direct" || task == "getMarketingMixOverviewDaily_AverageDuration_Email" ||
        task == "getMarketingMixOverviewDaily_AverageDuration_DisplayAds" || task == "getMarketingMixOverviewDaily_AverageDuration_OrganicSearch" || task == "getMarketingMixOverviewDaily_AverageDuration_PaidSearch" ||
        task == "getMarketingMixOverviewDaily_AverageDuration_Referrals" || task == "getMarketingMixOverviewDaily_AverageDuration_Social" || task == "getMarketingMixOverviewDaily_PagesPerVisit" ||
        task == "getMarketingMixOverviewDaily_BounceRate_Direct" || task == "getMarketingMixOverviewDaily_BounceRate_Email" ||
        task == "getMarketingMixOverviewDaily_BounceRate_DisplayAds" || task == "getMarketingMixOverviewDaily_BounceRate_OrganicSearch" || task == "getMarketingMixOverviewDaily_BounceRate_PaidSearch" ||
        task == "getMarketingMixOverviewDaily_BounceRate_Referrals" || task == "getMarketingMixOverviewDaily_BounceRate_Social") {
        task = "getMarketingMixOverviewDaily";
    }
    if (task == "getSearchOrganicPaidOverviewOrganic" || task == "getSearchOrganicPaidOverviewPaid" || task == "getSearchOrganicPaidOverviewOrganic_AverageDuration" || task == "getSearchOrganicPaidOverviewPaid_AverageDuration" || task == "getSearchOrganicPaidOverviewOrganic_PagesPerVisit" || task == "getSearchOrganicPaidOverviewPaid_PagesPerVisit" || task == "getSearchOrganicPaidOverviewOrganic_BounceRate" || task == "getSearchOrganicPaidOverviewPaid_BounceRate") {
        task = "getSearchOrganicPaidOverview";
    }
    if (task == "getTrafficSocialOverview") {
        task = "getTrafficSocial";
    }
    if (task == "getSearchBrandedKeywordsNoneBranded" || task == "getSearchBrandedKeywords") {
        task = "getSearchBrandedKeywords";
    }
    if (task == "getTrafficSourcesTotalReferralsOverview") {
        task = "getTrafficSourcesTotalReferrals";
    }
    if (task == "getTotalOutgoingAdVisits") {
        task = "getTrafficDisplayPaidOutgoingAds";
    }
    const get_data = myarr.map(async (ele, index) => {
        return await $.get(`//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${ele.domain}`);
    });
    return Promise.all(get_data).then(data => {

        switch (taskName) {
            case "totalTraffic":
                totalTraffic(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficAndEngagementOverviewMonthly":
                getTrafficAndEngagementOverviewMonthly(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getWebsiteGeography":
                getWebsiteGeography(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getWebDemographicsGender":
                getWebDemographicsGender(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getWebDemographicsAge":
                getWebDemographicsAge(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getDesktopVsMobileVisits":
                getDesktopVsMobileVisits(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getUniqueUsersMonthly":
                getUniqueUsersMonthly(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficSourcesOverview":
                getTrafficSourcesOverview(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_TrafficShare":
                getMarketingMixOverviewDaily_TrafficShare(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_Direct":
                getMarketingMixOverviewDaily_AverageDuration_Direct(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_Email":
                getMarketingMixOverviewDaily_AverageDuration_Email(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_DisplayAds":
                getMarketingMixOverviewDaily_AverageDuration_DisplayAds(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_OrganicSearch":
                getMarketingMixOverviewDaily_AverageDuration_OrganicSearch(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_PaidSearch":
                getMarketingMixOverviewDaily_AverageDuration_PaidSearch(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_Referrals":
                getMarketingMixOverviewDaily_AverageDuration_Referrals(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_AverageDuration_Social":
                getMarketingMixOverviewDaily_AverageDuration_Social(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_PagesPerVisit":
                getMarketingMixOverviewDaily_PagesPerVisit(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_Direct":
                getMarketingMixOverviewDaily_BounceRate_Direct(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_Email":
                getMarketingMixOverviewDaily_BounceRate_Email(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_DisplayAds":
                getMarketingMixOverviewDaily_BounceRate_DisplayAds(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_OrganicSearch":
                getMarketingMixOverviewDaily_BounceRate_OrganicSearch(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_PaidSearch":
                getMarketingMixOverviewDaily_BounceRate_PaidSearch(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_Referrals":
                getMarketingMixOverviewDaily_BounceRate_Referrals(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getMarketingMixOverviewDaily_BounceRate_Social":
                getMarketingMixOverviewDaily_BounceRate_Social(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficSourcesSearch":
                getTrafficSourcesSearch(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewOrganic":
                getSearchOrganicPaidOverviewOrganic(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewOrganic_AverageDuration":
                getSearchOrganicPaidOverviewOrganic_AverageDuration(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewOrganic_PagesPerVisit":
                getSearchOrganicPaidOverviewOrganic_PagesPerVisit(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewOrganic_BounceRate":
                getSearchOrganicPaidOverviewOrganic_BounceRate(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewPaid":
                getSearchOrganicPaidOverviewPaid(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewPaid_AverageDuration":
                getSearchOrganicPaidOverviewPaid_AverageDuration(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewPaid_PagesPerVisit":
                getSearchOrganicPaidOverviewPaid_PagesPerVisit(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchOrganicPaidOverviewPaid_BounceRate":
                getSearchOrganicPaidOverviewPaid_BounceRate(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchBrandedKeywords":
                getSearchBrandedKeywords(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getSearchBrandedKeywordsNoneBranded":
                getSearchBrandedKeywordsNoneBranded(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getWebsiteAdsVisitsOverview":
                getWebsiteAdsVisitsOverview(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficSocial":
                getTrafficSocial(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficSocialOverview":
                getTrafficSocialOverview(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficSourcesTotalReferrals":
                getTrafficSourcesTotalReferrals(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficSourcesTotalReferralsOverview":
                getTrafficSourcesTotalReferralsOverview(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTrafficDisplayPaidOutgoingAds":
                getTrafficDisplayPaidOutgoingAds(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
            case "getTotalOutgoingAdVisits":
                getTotalOutgoingAdVisits(taskName, data, domain1, domain2, domain3, domain4, domain5, check, object, active);
                break;
        }
        return true;
    })
}
const getWebsiteAdsVisitsOverview = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;background: rgb(245, 249, 253);z-index: 1;">
            <thead class="text-center">
                <tr>
                    <th scope="col" style="text-align: left;">Domain</th>
                    <th scope="col" style="text-align: left;">Lượng truy cập </th>
                    <th scope="col" style="text-align: left;">Phần Trăm</th>
                </tr>
            </thead>
            <tbody class="tb_${task}">
            </tbody>
        </table>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'12':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Truy cập quảng cáo hiển thị
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getWebsiteAdsVisitsOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th scope="col" style="text-align: left;">Domain</th>
                                    <th scope="col" style="text-align: left;">Lượng truy cập </th>
                                    <th scope="col" style="text-align: left;">Phần Trăm</th>
                                </tr>
                            </thead>
                            <tbody class="tb_${task}">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    let myarray = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let temp = 0;
            let {
                website: domain,
                data: traffic
            } = data[i].data;

            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");
            // if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data && data[i].data.data.Data.Data &&
            //     data[i].data.data.Data.Data[domain].AdsTotal > 0) {
            var worth = {}
            let WebsiteAdsVisitsOverview = data[i].data.data.Data;
            if(WebsiteAdsVisitsOverview){
                worth.AdsTotal = WebsiteAdsVisitsOverview.Data[domain].AdsTotal;
                worth.VolumeTotal = WebsiteAdsVisitsOverview.Data[domain].VolumeTotal;
            }else{
                worth.AdsTotal = 0;
                worth.VolumeTotal = 0;
            }
            worth.similarDomain = domain
            myarray.push(worth)
            if (i == (data.length - 1)) {
                $(`.tb_${task}`).html('')
                myarray.forEach((ele, index) => {
                    $(`.tb_${task}`).append(`
                        <tr role="row" class="odd">
                            <td style="white-space: nowrap"><img class='mr-2' src='https://www.google.com/s2/favicons?domain=${ele.similarDomain}'>
                            ${ele.similarDomain}</td>
                            <td>${numeral(ele.AdsTotal).format("0,0")}</td>
                            <td>${numeral(ele.VolumeTotal).format("0.00%")} của tổng lượng truy cập bằng máy tính</td>
                        </tr>
                    `)
                })
            }
            // }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getTrafficAndEngagementOverviewMonthly = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;background: rgb(245, 249, 253);z-index: 1;">
            <thead class="text-center">
                <tr>
                    <th scope="col" style="text-align: left;">Domain</th>
                    <th scope="col" style="text-align: left;">Lượt truy cập hàng tháng</th>
                    <th scope="col" style="text-align: left;">Khách truy cập hàng tháng</th>
                    <th scope="col" style="text-align: left;">Thời gian truy cập trung bình</th>
                    <th scope="col" style="text-align: left;">Số trang/Lượt truy cập</th>
                    <th scope="col" style="text-align: left;">Tỷ lệ thoát</th>
                </tr>
            </thead>
            <tbody class="tb_getTrafficAndEngagementOverviewMonthly">
            </tbody>
        </table>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Lượt Truy cập Khách Hàng</div>
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
                <div class="row">
                    <div class="col">
                        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th scope="col" style="text-align: left;">Domain</th>
                                    <th scope="col" style="text-align: left;">Lượt truy cập hàng tháng</th>
                                    <th scope="col" style="text-align: left;">Khách truy cập hàng tháng</th>
                                    <th scope="col" style="text-align: left;">Thời gian truy cập trung bình</th>
                                    <th scope="col" style="text-align: left;">Số trang/Lượt truy cập</th>
                                    <th scope="col" style="text-align: left;">Tỷ lệ thoát</th>
                                </tr>
                            </thead>
                            <tbody class="tb_getTrafficAndEngagementOverviewMonthly">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    let myarray = []
    for (let x = 0; x < data.length; x++) {
        if (data[x].status == "success") {
            if (data[x] && data[x].data && data[x].data.data) {
                const {
                    website: similarDomain,
                    data : visits
                } = data[x].data;
                var worth = {}
                worth.similarDomain = similarDomain
                if(visits != null){
                    var TrafficAndEngagementOverviewMonthly = null
                    if (data[x].data.data.Data.AvgMonthVisits) {
                        TrafficAndEngagementOverviewMonthly = data[x].data.data.Data;
                    } else {
                        TrafficAndEngagementOverviewMonthly = data[x].data.data.Data.Data[0];
                    }
                    let MonthlyVisits = numeral(TrafficAndEngagementOverviewMonthly.AvgMonthVisits).format("0,0");
                    let MonthlyUniqueVisitors = numeral(TrafficAndEngagementOverviewMonthly.UniqueUsers).format("0,0");
                    let AvgVisitDuration = numeral(TrafficAndEngagementOverviewMonthly.AvgVisitDuration).format("0:00:00");
                    let PagesperVisit = numeral(TrafficAndEngagementOverviewMonthly.PagesPerVisit).format("0.00");
                    let BounceRate = numeral(TrafficAndEngagementOverviewMonthly.BounceRate).format("00.00%");
                    worth.MonthlyVisits = MonthlyVisits
                    worth.MonthlyUniqueVisitors = MonthlyUniqueVisitors
                    worth.AvgVisitDuration = AvgVisitDuration
                    worth.PagesperVisit = PagesperVisit
                    worth.BounceRate = BounceRate
                }else{
                    worth.MonthlyVisits = 0
                    worth.MonthlyUniqueVisitors = 0
                    worth.AvgVisitDuration = 0
                    worth.PagesperVisit = 0
                    worth.BounceRate = 0
                }
                
                myarray.push(worth)

                if (x == (data.length - 1)) {
                    $(".tb_getTrafficAndEngagementOverviewMonthly").html('')
                    myarray.forEach((ele, index) => {
                        $(".tb_getTrafficAndEngagementOverviewMonthly").append(`
                            <tr role="row" class="odd">
                                <td style="white-space: nowrap"><img class='mr-2' src='https://www.google.com/s2/favicons?domain=${ele.similarDomain}'>
                                ${ele.similarDomain}</td>
                                <td>${ele.MonthlyVisits}</td>
                                <td>${ele.MonthlyUniqueVisitors}</td>
                                <td>${ele.AvgVisitDuration}</td>
                                <td>${ele.PagesperVisit}</td>
                                <td>${ele.BounceRate}</td>
                            </tr>
                        `)
                    })
                }
            }
        }

    }
}
const getUniqueUsersMonthly = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height: 240px;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'12':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded getWebsiteGeography-container h-100">
                <div class="row border-bottom m-0 py-2">
                    <div class="col-auto d-flex no-block align-items-center mx-1">
                        <span class=""><i class="far fa-clipboard-user fa-lg"></i></span>
                    </div>
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold"> Trung bình khách truy cập hàng tháng
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getUniqueUsersMonthly dropdown-item similarReloadTask text-muted" data-task="getUniqueUsersMonthly" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" class="rounded is-loading" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data && data[i].data.data.Data.Data) {
                let {
                    website: domain,
                    data: traffic
                } = data[i].data;

                const {
                    website: similarDomain
                } = data[i].data;

                let {
                    Data
                } = data[i].data.data.Data;

                let worth = {
                    keys: [],
                    values: [],
                    name: domain
                };

                let UniqueUsersMonthly = Data[similarDomain];
                let totals = UniqueUsersMonthly.Total[0];
                totals.map(total => {
                    let key = total.Key;
                    let value = total.Value;
                    worth.keys.push(key);
                    worth.values.push(value);
                });
                dataChart.push(worth);

                let temp = {}
                temp.name = dataChart[i].name
                temp.data = dataChart[i].values
                temp.type = "line",
                    temp.symbol = "circle",
                    temp.symbolSize = 10,
                    temp.showSymbol = true,
                    temp.hoverAnimation = false,
                    temp.lineStyle = {
                        normal: {
                            width: 2,
                            // shadowColor: "rgba(0,0,0,0.4)",
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    temp.itemStyle = {
                        normal: {
                            // color: "#57606f",
                            // borderColor: "rgb(44, 44, 84, 0.2)",
                            borderWidth: 10
                        }
                    }
                series.push(temp)


                if (i == (data.length - 1)) {
                    let ele = document.getElementById(task);

                    let myChart = echarts.init(ele, 'light');

                    new ResizeSensor($(`#getUniqueUsersMonthly`), function () {
                        myChart.resize();
                    });
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
                                params.forEach((p, i) => {
                                    if (p.value == null || p.value == "A")
                                        p.value == 0;
                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = numeral(value).format("0,0");


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                    <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        legend: {
                            data: dataChart.name,
                            textStyle: {
                                fontFamily: 'Arial',
                                lineHeight: 16
                            },
                            formatter: function (name) {
                                return name
                            }
                        },
                        grid: {
                            right: "5%"
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: false,
                            data: dataChart[0].keys,
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
                                formatter: (value, index) => (value = numeral(value).format("0,0"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);

                    await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                    $(`#getUniqueUsersMonthly`).removeClass('empty-state');

                }
            } else {
                $(`#getUniqueUsersMonthly`).removeClass('is-loading')
                $(`#getUniqueUsersMonthly`).addClass('empty-state')
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_TrafficShare = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;background: rgb(245, 249, 253);z-index: 1;">
            <thead class="text-center">
                <tr>
                    <th scope="col" style="text-align: left;">Domain</th>
                    <th scope="col" style="text-align: left;">Direct</th>
                    <th scope="col" style="text-align: left;">Display Ads</th>
                    <th scope="col" style="text-align: left;">Email</th>
                    <th scope="col" style="text-align: left;">Organic Search</th>
                    <th scope="col" style="text-align: left;">Paid Search</th>
                    <th scope="col" style="text-align: left;">Referrals</th>
                    <th scope="col" style="text-align: left;">Social</th>
                </tr>
            </thead>
            <tbody class="tb_${task}">
            </tbody>
        </table>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'80':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng</div>
                        <div class="text-muted font-10">(Tổng Lượng truy cập)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_TrafficShare" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th scope="col" style="text-align: left;">Domain</th>
                                    <th scope="col" style="text-align: left;">Direct</th>
                                    <th scope="col" style="text-align: left;">Display Ads</th>
                                    <th scope="col" style="text-align: left;">Email</th>
                                    <th scope="col" style="text-align: left;">Organic Search</th>
                                    <th scope="col" style="text-align: left;">Paid Search</th>
                                    <th scope="col" style="text-align: left;">Referrals</th>
                                    <th scope="col" style="text-align: left;">Social</th>
                                </tr>
                            </thead>
                            <tbody class="tb_${task}">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data) {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let {
                    WeeklyData,
                } = data[i].data.data.Data;

                if (Object.values(WeeklyData).length != 0) {
                    const run = async (taskName, temp) => {
                        let DataMarket = data[i].data.data.Data.WeeklyData;

                        if (Object.values(DataMarket).length != 0) {
                            // chuyen tab
                            let {
                                TrafficShare,
                                // AverageDuration,
                                // PagesPerVisit,
                                // BounceRate
                            } = DataMarket;

                            let MarketingMixOverview = TrafficShare;
                            let dataChart = {
                                keys: [],
                                values: [],
                                name: domain,
                                sum: []
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
                            myarray.push(dataChart)
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
                            let sum = {}
                            sum.Direct = dataChart.values.Direct.reduce(getSum, 0),
                                sum.DisplayAds = dataChart.values.DisplayAds.reduce(getSum, 0),
                                sum.Email = dataChart.values.Email.reduce(getSum, 0),
                                sum.OrganicSearch = dataChart.values.OrganicSearch.reduce(getSum, 0),
                                sum.PaidSearch = dataChart.values.PaidSearch.reduce(getSum, 0),
                                sum.Referrals = dataChart.values.Referrals.reduce(getSum, 0),
                                sum.Social = dataChart.values.Social.reduce(getSum, 0)
                            dataChart.sum.push(sum)
                            if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                dataChart.values.Social.length == 0) {

                                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                if (i == (data.length - 1)) {
                                    $(`.tb_${task}`).html('')
                                    myarray.forEach((ele, index) => {
                                        $(`.tb_${task}`).append(`
                                            <tr role="row" class="odd">
                                                <td style="white-space: nowrap"><img class='mr-2' src='https://www.google.com/s2/favicons?domain=${ele.name}'>
                                                ${ele.name}</td>
                                                <td>${numeral(ele.sum[0].Direct).format('0,0')}</td>
                                                <td>${numeral(ele.sum[0].DisplayAds).format('0,0')}</td>
                                                <td>${numeral(ele.sum[0].Email).format('0,0')}</td>
                                                <td>${numeral(ele.sum[0].OrganicSearch).format('0,0')}</td>
                                                <td>${numeral(ele.sum[0].PaidSearch).format('0,0')}</td>
                                                <td>${numeral(ele.sum[0].Referrals).format('0,0')}</td>
                                                <td>${numeral(ele.sum[0].Social).format('0,0')}</td>
                                            </tr>
                                        `)
                                    })
                                }
                            }
                        } else {
                            await $(`#${task}`).removeClass('is-loading');
                            $(`#${task}`).removeClass('empty-state');
                        }
                    }
                    run()
                }
            } else {
                await $(`#${task}`).removeClass('is-loading');
                $(`#${task}`).removeClass('empty-state');
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_PagesPerVisit = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;background: rgb(245, 249, 253);">
            <thead class="text-center">
                <tr>
                    <th scope="col" style="text-align: left;">Domain</th>
                    <th scope="col" style="text-align: left;">Direct</th>
                    <th scope="col" style="text-align: left;">Display Ads</th>
                    <th scope="col" style="text-align: left;">Email</th>
                    <th scope="col" style="text-align: left;">Organic Search</th>
                    <th scope="col" style="text-align: left;">Paid Search</th>
                    <th scope="col" style="text-align: left;">Referrals</th>
                    <th scope="col" style="text-align: left;">Social</th>
                </tr>
            </thead>
            <tbody class="tb_${task}">
            </tbody>
        </table>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'84':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng</div>
                        <div class="text-muted font-10">(Tổng số trang/ Tổng Lượt truy cập)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_PagesPerVisit" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table id="${task}" class="table table-striped mb-0" style="width:100%;height:100%;">
                            <thead class="text-center">
                                <tr>
                                    <th scope="col" style="text-align: left;">Domain</th>
                                    <th scope="col" style="text-align: left;">Direct</th>
                                    <th scope="col" style="text-align: left;">Display Ads</th>
                                    <th scope="col" style="text-align: left;">Email</th>
                                    <th scope="col" style="text-align: left;">Organic Search</th>
                                    <th scope="col" style="text-align: left;">Paid Search</th>
                                    <th scope="col" style="text-align: left;">Referrals</th>
                                    <th scope="col" style="text-align: left;">Social</th>
                                </tr>
                            </thead>
                            <tbody class="tb_${task}">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data) {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let {
                    WeeklyData,
                } = data[i].data.data.Data;

                if (Object.values(WeeklyData).length != 0) {
                    const run = async (taskName, temp) => {
                        let DataMarket = data[i].data.data.Data.WeeklyData;

                        if (Object.values(DataMarket).length != 0) {
                            // chuyen tab
                            let {
                                PagesPerVisit,
                                // BounceRate
                            } = DataMarket;

                            let MarketingMixOverview = PagesPerVisit;
                            let dataChart = {
                                keys: [],
                                values: [],
                                name: domain,
                                sum: []
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
                            myarray.push(dataChart)
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
                            let sum = {}
                            sum.Direct = dataChart.values.Direct.reduce(getSum, 0),
                                sum.DisplayAds = dataChart.values.DisplayAds.reduce(getSum, 0),
                                sum.Email = dataChart.values.Email.reduce(getSum, 0),
                                sum.OrganicSearch = dataChart.values.OrganicSearch.reduce(getSum, 0),
                                sum.PaidSearch = dataChart.values.PaidSearch.reduce(getSum, 0),
                                sum.Referrals = dataChart.values.Referrals.reduce(getSum, 0),
                                sum.Social = dataChart.values.Social.reduce(getSum, 0)
                            dataChart.sum.push(sum)

                            if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                dataChart.values.Social.length == 0) {

                                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                if (i == (data.length - 1)) {
                                    $(`.tb_${task}`).html('')
                                    myarray.forEach((ele, index) => {
                                        $(`.tb_${task}`).append(`
                                            <tr role="row" class="odd">
                                                <td style="white-space: nowrap"><img class='mr-2' src='https://www.google.com/s2/favicons?domain=${ele.name}'>
                                                ${ele.name}</td>
                                                <td>${numeral(ele.sum[0].Direct).format('0')}</td>
                                                <td>${numeral(ele.sum[0].DisplayAds).format('0')}</td>
                                                <td>${numeral(ele.sum[0].Email).format('0')}</td>
                                                <td>${numeral(ele.sum[0].OrganicSearch).format('0')}</td>
                                                <td>${numeral(ele.sum[0].PaidSearch).format('0')}</td>
                                                <td>${numeral(ele.sum[0].Referrals).format('0')}</td>
                                                <td>${numeral(ele.sum[0].Social).format('0')}</td>
                                            </tr>
                                        `)
                                    })
                                }
                            }
                        } else {
                            await $(`#${task}`).removeClass('is-loading');
                            $(`#${task}`).removeClass('empty-state');
                        }
                    }
                    run()
                }
            } else {
                await $(`#${task}`).removeClass('is-loading');
                $(`#${task}`).removeClass('empty-state');
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_Direct = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'56':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: Trực tiếp)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_Direct" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    var dates = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");
            let period;
            if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                if (period.length != 0) {
                    const run = async (taskName, temp) => {
                        let DataMarket = data[i].data.data.Data[period];

                        if (Object.values(DataMarket).length != 0) {
                            // chuyen tab
                            let {
                                AverageDuration,
                            } = DataMarket;
                            let dataChart = {
                                keys: [],
                                values: [],
                                name: domain,
                            };
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
                            if(AverageDuration != null){
                                let {
                                    BreakDown,
                                    Total
                                } = AverageDuration.Data;

                                $.each(BreakDown, (idx, val) => {
                                    keys.push(idx);
                                    $.each(val, (name, data) => {
                                        if (name == 'Direct')
                                            values.Direct.push((data == null)?0:data)
                                        if (name == 'Display Ads')
                                            values.DisplayAds.push((data == null)?0:data)
                                        if (name == 'Email')
                                            values.Email.push((data == null)?0:data)
                                        if (name == 'Organic Search')
                                            values.OrganicSearch.push((data == null)?0:data)
                                        if (name == 'Paid Search')
                                            values.PaidSearch.push((data == null)?0:data)
                                        if (name == 'Referrals')
                                            values.Referrals.push((data == null)?0:data)
                                        if (name == 'Social')
                                            values.Social.push((data == null)?0:data)
                                    })
                                })
                                if (keys && keys.length > 0){
                                    dates = keys
                                    console.log(dates)
                                    console.log(Math.max(dates.length))
                                }
                                dataChart.keys = dates;
                                dataChart.values = values;
                                myarray.push(dataChart)
                            }
                            
                            let temporary = {}
                            temporary.name = myarray[i].name,
                                temporary.data = myarray[i].values.Direct,
                                temporary.type = "line",
                                temporary.symbol = "circle",
                                temporary.symbolSize = 10,
                                temporary.showSymbol = true,
                                temporary.hoverAnimation = false,
                                series.push(temporary)
                            if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                dataChart.values.Social.length == 0) {

                                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                if (i == (data.length - 1)) {
                                    let ele = document.getElementById(task)
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
                                                    value = numeral(value).format("00:00:00");


                                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                })
                                                name = moment(name).format('DD MMMM YYYY');
                                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                            }
                                        },
                                        legend: {
                                            data: myarray.name,
                                            textStyle: {
                                                fontFamily: 'Arial',
                                                lineHeight: 16
                                            },
                                            formatter: function (name) {
                                                return name
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
                                                formatter: (value, index) => {
                                                    return numeral(value).format("00:00:00")
                                                },
                                            },
                                            splitLine: {
                                                show: true,
                                                lineStyle: {
                                                    color: 'rgba(0,0,0,0.1)'
                                                }
                                            },
                                        },
                                        series: series
                                    };
                                    myChart.setOption(option);

                                    new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                        myChart.resize();
                                    });
                                }
                            }
                        } else {
                            await $(`#${task}`).removeClass('is-loading');
                            $(`#${task}`).removeClass('empty-state');
                        }
                    }
                    run()
                }
            }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_Email = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'60':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: Email)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_Email" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");

            // chuyen ngay thang nam
            let period;
            if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                if (period.length != 0) {
                    const run = async (taskName, temp) => {
                        let DataMarket = data[i].data.data.Data[period];

                        if (Object.values(DataMarket).length != 0) {
                            let {
                                AverageDuration,
                            } = DataMarket;
                            let dataChart = {
                                keys: [],
                                values: [],
                                name: domain
                            };
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
                            if(AverageDuration != null){
                                let {
                                    BreakDown,
                                    Total
                                } = AverageDuration.Data;
                                $.each(BreakDown, (idx, val) => {
                                    keys.push(idx);
                                    $.each(val, (name, data) => {
                                        if (name == 'Direct')
                                            values.Direct.push((data == null)?0:data)
                                        if (name == 'Display Ads')
                                            values.DisplayAds.push((data == null)?0:data)
                                        if (name == 'Email')
                                            values.Email.push((data == null)?0:data)
                                        if (name == 'Organic Search')
                                            values.OrganicSearch.push((data == null)?0:data)
                                        if (name == 'Paid Search')
                                            values.PaidSearch.push((data == null)?0:data)
                                        if (name == 'Referrals')
                                            values.Referrals.push((data == null)?0:data)
                                        if (name == 'Social')
                                            values.Social.push((data == null)?0:data)
                                    })
                                })
                                dataChart.keys = keys;
                                dataChart.values = values;
                                myarray.push(dataChart)
                            }


                            let temporary = {}
                            temporary.name = myarray[i].name,
                                temporary.data = myarray[i].values.Email,
                                temporary.type = "line",
                                // smooth: true,
                                temporary.symbol = "circle",
                                temporary.symbolSize = 10,
                                temporary.showSymbol = true,
                                temporary.hoverAnimation = false,
                                series.push(temporary)
                            if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                dataChart.values.Social.length == 0) {

                                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                if (i == (data.length - 1)) {
                                    let ele = document.getElementById(task)
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
                                                    value = numeral(value).format("00:00:00");


                                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                <br/>`
                                                })
                                                name = moment(name).format('DD MMMM YYYY');
                                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                        <div class="text-dark pt-2">${detail}`;

                                            }
                                        },
                                        legend: {
                                            data: myarray.name,
                                            textStyle: {
                                                fontFamily: 'Arial',
                                                lineHeight: 16
                                            },
                                            formatter: function (name) {
                                                return name
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
                                                    return numeral(value).format("00:00:00")
                                                },
                                            },
                                            splitLine: {
                                                show: true,
                                                lineStyle: {
                                                    color: 'rgba(0,0,0,0.1)'
                                                }
                                            },
                                        },
                                        series: series
                                    };
                                    myChart.setOption(option);

                                    new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                        myChart.resize();
                                    });
                                }
                            }
                        } else {
                            await $(`#${task}`).removeClass('is-loading');
                            $(`#${task}`).removeClass('empty-state');
                        }
                    }
                    run()
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_DisplayAds = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'64':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: DisplayAds)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_DisplayAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");

            // chuyen ngay thang nam
            let period;
            if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                if (period.length != 0) {
                    const run = async (taskName, temp) => {
                        let DataMarket = data[i].data.data.Data[period];

                        if (Object.values(DataMarket).length != 0) {
                            let {
                                AverageDuration,
                            } = DataMarket;
                            let dataChart = {
                                keys: [],
                                values: [],
                                name: domain
                            };
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
                            if(AverageDuration != null){
                                let {
                                    BreakDown,
                                    Total
                                } = AverageDuration.Data;
                                $.each(BreakDown, (idx, val) => {
                                    keys.push(idx);
                                    $.each(val, (name, data) => {
                                        if (name == 'Direct')
                                            values.Direct.push((data == null)?0:data)
                                        if (name == 'Display Ads')
                                            values.DisplayAds.push((data == null)?0:data)
                                        if (name == 'Email')
                                            values.Email.push((data == null)?0:data)
                                        if (name == 'Organic Search')
                                            values.OrganicSearch.push((data == null)?0:data)
                                        if (name == 'Paid Search')
                                            values.PaidSearch.push((data == null)?0:data)
                                        if (name == 'Referrals')
                                            values.Referrals.push((data == null)?0:data)
                                        if (name == 'Social')
                                            values.Social.push((data == null)?0:data)
                                    })
                                })
                                dataChart.keys = keys;
                                dataChart.values = values;
                                myarray.push(dataChart)
                            }

                            
                            let temporary = {}
                            temporary.name = myarray[i].name,
                                temporary.data = myarray[i].values.DisplayAds,
                                temporary.type = "line",
                                // smooth: true,
                                temporary.symbol = "circle",
                                temporary.symbolSize = 10,
                                temporary.showSymbol = true,
                                temporary.hoverAnimation = false,
                                series.push(temporary)
                            if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                dataChart.values.Social.length == 0) {

                                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                if (i == (data.length - 1)) {
                                    let ele = document.getElementById(task)
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
                                                    value = numeral(value).format("00:00:00");


                                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                <br/>`
                                                })
                                                name = moment(name).format('DD MMMM YYYY');
                                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                        <div class="text-dark pt-2">${detail}`;

                                            }
                                        },
                                        legend: {
                                            data: myarray.name,
                                            textStyle: {
                                                fontFamily: 'Arial',
                                                lineHeight: 16
                                            },
                                            formatter: function (name) {
                                                return name
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
                                                    return numeral(value).format("00:00:00")
                                                },
                                            },
                                            splitLine: {
                                                show: true,
                                                lineStyle: {
                                                    color: 'rgba(0,0,0,0.1)'
                                                }
                                            },
                                        },
                                        series: series
                                    };
                                    myChart.setOption(option);

                                    new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                        myChart.resize();
                                    });
                                }
                            }
                        } else {
                            await $(`#${task}`).removeClass('is-loading');
                            $(`#${task}`).removeClass('empty-state');
                        }
                    }
                    run()
                }
            }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_OrganicSearch = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'68':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: OrganicSearch)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_OrganicSearch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];
                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    AverageDuration,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(AverageDuration != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = AverageDuration.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.OrganicSearch,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00:00:00");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00:00:00")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_PaidSearch = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'72':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: PaidSearch)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_PaidSearch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];
                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    AverageDuration,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(AverageDuration != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = AverageDuration.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.PaidSearch,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00:00:00");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00:00:00")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_Referrals = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'76':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: Referrals)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_Referrals" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    AverageDuration,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(AverageDuration != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = AverageDuration.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.Referrals,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00:00:00");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00:00:00")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_AverageDuration_Social = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'80':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: Social)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_AverageDuration_Social" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    AverageDuration,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(AverageDuration != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = AverageDuration.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.Social,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00:00:00");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00:00:00")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_Direct = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'56':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: Trực tiếp)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_Direct" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.Direct,
                                    temporary.type = "line",
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
                                        let myChart = echarts.init(ele, 'light');

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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                    formatter: (value, index) => {
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_Email = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'60':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: Email)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_Email" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.Email,
                                    temporary.type = "line",
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_DisplayAds = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'64':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: DisplayAds)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_DisplayAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.DisplayAds,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_OrganicSearch = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'68':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: OrganicSearch)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_OrganicSearch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.OrganicSearch,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_PaidSearch = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'72':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: PaidSearch)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_PaidSearch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.PaidSearch,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_Referrals = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'76':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: Referrals)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_Referrals" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.Referrals,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getMarketingMixOverviewDaily_BounceRate_Social = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'80':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Phân tích nguồn khách hàng theo ${(duty == '04')?'tháng':(duty == '05')?'tuần':(duty == '06')?'ngày': ''}</div>
                        <div class="text-muted font-10">(Tỷ lệ thoát: Social)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getMarketingMixOverviewDaily_BounceRate_Social" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                // chuyen ngay thang nam
                let period;
                if ((duty == '05') ? period = "WeeklyData" : (duty == '04') ? period = 'MonthlyData' : (duty == '06') ? period = 'DailyData' : period = '') {
                    if (period.length != 0) {
                        const run = async (taskName, temp) => {
                            let DataMarket = data[i].data.data.Data[period];

                            if (Object.values(DataMarket).length != 0) {
                                let {
                                    BounceRate,
                                } = DataMarket;
                                let dataChart = {
                                    keys: [],
                                    values: [],
                                    name: domain
                                };
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
                                if(BounceRate != null){
                                    let {
                                        BreakDown,
                                        Total
                                    } = BounceRate.Data;
                                    $.each(BreakDown, (idx, val) => {
                                        keys.push(idx);
                                        $.each(val, (name, data) => {
                                            if (name == 'Direct')
                                                values.Direct.push((data == null)?0:data)
                                            if (name == 'Display Ads')
                                                values.DisplayAds.push((data == null)?0:data)
                                            if (name == 'Email')
                                                values.Email.push((data == null)?0:data)
                                            if (name == 'Organic Search')
                                                values.OrganicSearch.push((data == null)?0:data)
                                            if (name == 'Paid Search')
                                                values.PaidSearch.push((data == null)?0:data)
                                            if (name == 'Referrals')
                                                values.Referrals.push((data == null)?0:data)
                                            if (name == 'Social')
                                                values.Social.push((data == null)?0:data)
                                        })
                                    })
                                    dataChart.keys = keys;
                                    dataChart.values = values;
                                    myarray.push(dataChart)
                                }
    
                                
                                let temporary = {}
                                temporary.name = myarray[i].name,
                                    temporary.data = myarray[i].values.Social,
                                    temporary.type = "line",
                                    // smooth: true,
                                    temporary.symbol = "circle",
                                    temporary.symbolSize = 10,
                                    temporary.showSymbol = true,
                                    temporary.hoverAnimation = false,
                                    series.push(temporary)
                                if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                    dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                    dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                    dataChart.values.Social.length == 0) {

                                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                                } else {
                                    if (i == (data.length - 1)) {
                                        let ele = document.getElementById(task)
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
                                                        value = numeral(value).format("00%");


                                                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                    <br/>`
                                                    })
                                                    name = moment(name).format('DD MMMM YYYY');
                                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                            <div class="text-dark pt-2">${detail}`;

                                                }
                                            },
                                            legend: {
                                                data: myarray.name,
                                                textStyle: {
                                                    fontFamily: 'Arial',
                                                    lineHeight: 16
                                                },
                                                formatter: function (name) {
                                                    return name
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
                                                        return numeral(value).format("00%")
                                                    },
                                                },
                                                splitLine: {
                                                    show: true,
                                                    lineStyle: {
                                                        color: 'rgba(0,0,0,0.1)'
                                                    }
                                                },
                                            },
                                            series: series
                                        };
                                        myChart.setOption(option);

                                        new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
                                            myChart.resize();
                                        });
                                    }
                                }
                            } else {
                                await $(`#${task}`).removeClass('is-loading');
                                $(`#${task}`).removeClass('empty-state');
                            }
                        }
                        run()
                    }
                }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getTrafficSocial = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-max-height="4" data-gs-min-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Lượt truy cập mạng xã hội
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTrafficSocial" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    var arr_length = 3
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let worth = {
                keys: [],
                values: [],
                name: domain
            };
            if(traffic){
                let Dates = traffic.Dates;
                let Volue = traffic.Volumes;
                $.each(Dates, (idx, val) => {
                    worth.keys.push(val);
                })

                $.each(Volue, (name, value) => {
                    worth.values.push((value[0] == null) ? 0 : value[0]);
                })
            }else{
                for(let i = 0; i< arr_length; i++){
                    let val = 0;
                    worth.values.push(val);
                }
            }
            dataChart.push(worth)
            let temp = {}
            temp.name = dataChart[i].name
            temp.data = dataChart[i].values
            temp.type = "line",
                temp.symbol = "circle",
                temp.symbolSize = 10,
                temp.showSymbol = true,
                temp.hoverAnimation = false,
                temp.lineStyle = {
                    normal: {
                        width: 2,
                        // shadowColor: "rgba(0,0,0,0.4)",
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    }
                },
                temp.itemStyle = {
                    normal: {
                        // color: "#57606f",
                        // borderColor: "rgb(44, 44, 84, 0.2)",
                        borderWidth: 10
                    }
                }
            series.push(temp)


            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#getUniqueUsersMonthly`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {
                                if (p.value == null || p.value == "A")
                                    p.value == 0;
                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: dataChart.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: dataChart[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0,0"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getWebDemographicsAge = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Độ tuổi khách hàng</div>
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
                <div id="Parent-${task}">
                    <div id="${task}" class="rounded is-loading" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var keys = []
    var age = []
    var series = []
    let arr_length = 6
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data) {

                let {
                    website: domain,
                    data: traffic
                } = data[i].data;
                let worth = {}
                let value = []
                if(traffic){
                    // arr_length = Object.values(traffic).length;
                    for (const key in traffic) {
                        value.push((!traffic[key]) ? 0 : traffic[key])
                    }
                    if (i == (data.length - 1)) {
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
                            keys.push(key)
                        })
                    }
                } else {
                    for(let i = 0; i< arr_length; i++)
                    {
                        let val = 0;
                        value.push(val)
                    }
                }
                worth.value = value
                worth.name = domain
                age.push(worth)

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");
                let temp = {}
                temp.name = age[i].name
                temp.data = age[i].value,
                temp.type = "line",
                temp.symbol = "circle",
                temp.symbolSize = 10,
                temp.showSymbol = true,
                temp.hoverAnimation = false,
                temp.lineStyle = {
                    normal: {
                        width: 2,
                        shadowBlur: 10,
                        shadowOffsetY: 10,
                    }
                },
                temp.itemStyle = {
                    normal: {
                        borderWidth: 10
                    }
                }
                series.push(temp)
                if (i == (data.length - 1)) {
                    let ele = document.getElementById(task);

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
                                params.forEach((p, i) => {

                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = value.toFixed(2) + '%';

                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                        <br/>`
                                })
                                name = "Độ tuổi từ " + name;
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        legend: {
                            data: age.name,
                            textStyle: {
                                fontFamily: 'Arial',
                                lineHeight: 16
                            },
                            formatter: function (name) {
                                return name
                            }
                        },
                        grid: {
                            right: "5%"
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: false,
                            data: keys,
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
                            },
                            axisPointer: {
                                lineStyle: {
                                    color: "rgb(25, 123, 251)",
                                    type: "dashed"
                                }
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
                                formatter: (value, index) => (value = value + '%')
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function () {
                        myChart.resize();
                    });
                    await $(`#${task}`).removeClass('is-loading');
                    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');


                }

            } else {
                if (i != 0) {
                    $(`#${task}`).removeClass('is-loading');
                    $(`#${task}`).addClass('empty-state');
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};
const getWebDemographicsGender = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Giới tính khách hàng</div>
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
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var keys = [
        'Nam',
        'Nữ'
    ]
    var dataChart = []
    var series = []
    let arr_length = 2
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data) {
                let {
                    data: visits,
                    website: domain
                } = data[i].data;
                let worth = {
                    keys: [],
                    values: [],
                    name: domain
                };
                if(visits){
                    for (const key in visits) {
                        worth.values.push((visits[key] == null)?0:(visits[key]).toFixed(2))
                    } 
                }else{
                    for(let i = 0; i< arr_length; i++)
                    {
                        let val = 0;
                        worth.values.push(val)
                    }
                }
                dataChart.push(worth)
                let temp = {}
                temp.name = dataChart[i].name,
                    temp.type = 'bar',
                    temp.barWidth = 60,
                    temp.data = dataChart[i].values,
                    temp.itemStyle = {
                        normal: {
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (p) {
                                    return p.value + '%';
                                }
                            }
                        }
                    }
                series.push(temp)

                if (i == (data.length - 1)) {
                    let ele = document.getElementById(task);

                    let myChart = echarts.init(ele, 'light');

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
                        legend: {
                            data: dataChart.name,
                            textStyle: {
                                fontFamily: 'Arial',
                                lineHeight: 16
                            },
                            formatter: function (name) {
                                return name
                            }
                        },
                        grid: {
                            left: '2%',
                            right: '2%',
                            bottom: '5%',
                            top: '20%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: keys,
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
                                formatter: (value, index) => (value = value + '%')
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function () {
                        myChart.resize();
                    });
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};
const getDesktopVsMobileVisits = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'8':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">
                            Truy cập theo thiết bị
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getDesktopVsMobileVisits" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var keys = [
        'Desktop',
        'mobi'
    ]
    var dataChart = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: visits,
                website: domain
            } = data[i].data;
            let worth = {
                keys: [],
                values: [],
                name: domain,
                totals: []
            };
            if(visits != null){
                $.each(visits, (index, item) => {
                    let key = index;
                    let value = item.toFixed(2);
                    let total = item
                    if (key == "totalDesktop") {
                        worth.totals[0] = total
                    }
                    if (key == "totalMobile") {
                        worth.totals[1] = total
                    }
                    if (key == "percentDesktop") {
                        worth.keys[0] = "Desktop";
                        worth.values[0] = value
                    }
                    if (key == "percentMobile") {
                        worth.keys[1] = "Mobile";
                        worth.values[1] = value;
                    }
                });    
            }else{
                worth.keys[0] = "Desktop";
                worth.values[0] = 0
                worth.keys[1] = "Mobile";
                worth.values[1] = 0;
            }
            dataChart.push(worth)

            let temp = {}
            temp.name = dataChart[i].name,
                temp.type = 'bar',
                temp.barWidth = 60,
                temp.data = dataChart[i].values,
                temp.itemStyle = {
                    normal: {
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p) {
                                return p.value + '%';
                            }
                        }
                    }
                }
            series.push(temp)

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

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
                    legend: {
                        data: dataChart.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: keys,
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
                            formatter: (value, index) => (value = value + '%')
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);


                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
            }
            
        } else {
            console.log(`${task} failed`);
        }
    }
};
const totalTraffic = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-max-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Tổng truy cập</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted d-flex align-items-center" data-task="${task}" href="javascript:;"><i class="fal fa-sync sync-fa-fi mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    let myarray = []
    for (let x = 0; x < data.length; x++) {
        if (data[x].status == "success") {

            let {
                website: domain,
                data: visits
            } = data[x].data;
            let worth = {}
            worth.name = domain
            if(visits != null){
                const totalTraffic = visits.totalTraffic;
                worth.value = totalTraffic
            }else{
                worth.value = 0
            }
            
            myarray.push(worth)

            if (x == (data.length - 1)) {
                let dem = 0;
                var myChart = echarts.init(document.getElementById(`${task}`), 'light')
                // lam ngu
                let value = myarray[dem].value;
                dem++;
                // console.log(value)
                var option = {
                    // color: ['#a29bfe', '#00cec9'],
                    legend: {
                        data: myarray.name,
                        top: "25%",
                        left: '70%',
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            // chu ra 
                            // let value = myarray[dem].value;
                            // dem++;
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
                        data: myarray
                    }]
                };
                myChart.setOption(option);
                // co gian
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
                // active value 0 
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                    myChart.on('mouseover', function (params) {
                        if (params.name == myarray[0].name) {
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
            }
            
        } else {
            console.log(`${task} failed`);
        }
    }
};
const getSearchBrandedKeywordsNoneBranded = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-max-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
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
                        <div class="text-capitalize font-weight-bold">Từ khoá không thương hiệu</div>
                        <div style=" font-size: 10px; color: #adadad; ">(Tự nhiên)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted d-flex align-items-center" data-task="${task}" href="javascript:;"><i class="fal fa-sync sync-fa-fi mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    let dataChart = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            // if (data[i] && data[i].data) {
            let {
                data: visits,
                website: domain
            } = data[i].data;
            let worth = {};
            let temp = true;
            worth.name = domain

            if(visits){
                $.each(visits, (index, value) => {
                    if (index == "NoneBranded") {
                        if (value == 0) {
                            temp = false;
                        }
                    }
                    worth.value = visits.NoneBranded
                })
            }else{
                worth.value = 0
            }
            // $.each(visits, (index, value) => {
            //     if (index == "NoneBranded") {
            //         if (value == 0) {
            //             temp = false;
            //         }
            //     }
            // })
            dataChart.push(worth)

            if (!temp) {
                await $(`#${idDomain+task}`).removeClass('is-loading').addClass('empty-state');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                if (i == (data.length - 1)) {
                    let myChart = echarts.init(document.getElementById(`${task}`))
                    let option = {
                        color: customColors,
                        legend: {
                            data: dataChart.name,
                            top: "25%",
                            left: '70%',
                            itemWidth: 20,
                            itemHeight: 14,
                            width: 10,
                            textStyle: {
                                fontFamily: 'Arial',
                                lineHeight: 16
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
                }
            }
            // }
        } else {
            console.log(`${task} failed`);
        }
    }
};
const getSearchBrandedKeywords = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-max-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
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
                        <div class="text-capitalize font-weight-bold">Từ khoá có thương hiệu</div>
                        <div style=" font-size: 10px; color: #adadad; ">(Tự nhiên)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted d-flex align-items-center" data-task="getSearchBrandedKeywords" href="javascript:;"><i class="fal fa-sync sync-fa-fi mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    let dataChart = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data) {
                let {
                    data: visits,
                    website: domain
                } = data[i].data;
                let temp = true;
                let worth = {};
                worth.name = domain
                if(visits){
                    $.each(visits, (index, value) => {
                        if (index == "Branded") {
                            if (value == 0) {
                                temp = false;
                            }
                        }
                    })
                    worth.value = visits.Branded
                }else{
                    worth.value = 0
                }
                dataChart.push(worth)
                if (i == (data.length - 1)) {
                    let myChart = echarts.init(document.getElementById(`${task}`))
                    let option = {
                        color: customColors,
                        legend: {
                            data: dataChart.name,
                            top: "25%",
                            left: '70%',
                            itemWidth: 20,
                            itemHeight: 14,
                            width: 10,
                            textStyle: {
                                fontFamily: 'Arial',
                                lineHeight: 16
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
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};
const getTrafficSourcesSearch = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    let dataChart = []
    let series = []
    let keysName = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: visits,
                website: domain
            } = data[i].data;
            let temp = true;

            // $.each(visits, (index, value) => {
            //     if (index == "Organic") {
            //         if (value == 0) {
            //             temp = false;
            //         }
            //     }
            // })
            let worth = {
                keys: [],
                values: [],
                name: domain
            };
            if(visits){
                $.each(visits, (index, item) => {
                    let key;
                    let value = item
                    switch (index) {
                        case 'Organic':
                            key = 'Tự nhiên';
                            break;
                        case 'Paid':
                            key = 'Trả phí';
                            break;
                    }
                    worth.keys.push(key)
                    worth.values.push(value)
                })
            }else{
                let val = 0
                worth.values.push(val)
            }
            if (worth.keys && worth.keys.length > 0){
                keysName = worth.keys
            }
            dataChart.push(worth)

            let mystring = {}
            mystring.name = dataChart[i].name,
                mystring.type = 'bar',
                mystring.barWidth = 60,
                mystring.data = dataChart[i].values,
                mystring.itemStyle = {
                    normal: {
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p) {
                                return (p.value * 100) + '%';
                            }
                        }
                    }
                }
            series.push(mystring)

            // if (!temp) {
            //     await $(`#${idDomain+task}`).removeClass('is-loading').addClass('empty-state');
            //     await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            // } else {
                if (i == (data.length - 1)) {
                    let ele = document.getElementById(task);

                    let myChart = echarts.init(ele, 'light');

                    let option = {
                        calculable: true,
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
                        legend: {
                            data: dataChart.name,
                            textStyle: {
                                fontFamily: 'Arial',
                                lineHeight: 16
                            },
                            formatter: function (name) {
                                return name
                            }
                        },
                        grid: {
                            left: '2%',
                            right: '2%',
                            bottom: '5%',
                            top: '20%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: keysName,
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
                                formatter: (value, index) => (value = (value * 100) + '%')
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function () {
                        myChart.resize();
                    });

                    await $(`#${task}`).removeClass('is-loading');
                    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                }
            // }
        } else {
            console.log(`${task} failed`);
        }
    }
};
const getTrafficDisplayPaidOutgoingAds = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'36':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Lượng khách bấm vào quảng cáo </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTrafficDisplayPaidOutgoingAds" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    var arr_length = 3
    let dates=[]

    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: traffic,
                website: domain
            } = data[i].data;
            // if (!data[i] && !data[i].data && !data[i].data.data) {
            //     $(`#${task}`).addClass('empty-state');
            // }
            let worth = {
                keys: [],
                values: [],
                name: ""
            }; 
            worth.name = domain;
            if(traffic.Volumes || traffic.Dates){
                for (const key in traffic) {
                    if(Array.isArray(traffic[key])) {
                        traffic[key].forEach(ele => {
                            if(key == 'Volumes'){
                                worth.values.push(ele[1])
                            }else{
                                worth.keys.push(ele);
                            }
                        });
                    }
                }
            }else{
                for(let i=0; i<3 ; i++){
                    let val = 0
                    worth.values.push(val);
                }
            }

            if (worth.keys && worth.keys.length > 0){
                dates=worth.keys
            }
            dataChart.push(worth)
            let temp = {}
            temp.name = dataChart[i].name
            temp.data = dataChart[i].values
            temp.type = "line",
                temp.symbol = "circle",
                temp.symbolSize = 10,
                temp.showSymbol = true,
                temp.hoverAnimation = false,
                temp.lineStyle = {
                    normal: {
                        width: 2,
                        // shadowColor: "rgba(0,0,0,0.4)",
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    }
                },
                temp.itemStyle = {
                    normal: {
                        // color: "#57606f",
                        // borderColor: "rgb(44, 44, 84, 0.2)",
                        borderWidth: 10
                    }
                }
            series.push(temp)

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: dataChart.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: dates,
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
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
            // } else {
            //     $(`#getUniqueUsersMonthly`).removeClass('is-loading')
            //     $(`#getUniqueUsersMonthly`).addClass('empty-state')
            // }
        } else {
            console.log(`${task} failed`);
        }
    }
}
const getWebsiteGeography = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-max-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Tỷ lệ truy cập ở Việt Nam
                        </div>
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
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: WebsiteGeography,
                website: domain
            } = data[i].data;
            let worth = {}
            if(WebsiteGeography){
                let temp = WebsiteGeography[0].Share;
                worth.value = temp
            }else{
                let temp = 0
                worth.value = temp
            }
            
            let namedomain = domain
            worth.name = namedomain
            dataChart.push(worth)
            if (i == (data.length - 1)) {
                let myChart = echarts.init(document.getElementById(`${task}`))
                let option = {
                    color: customColors,
                    legend: {
                        data: dataChart.name,
                        top: "25%",
                        left: '70%',
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
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
            }
        }
    }
}
const getTrafficSourcesOverview = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'8':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    var arr_length
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: visits,
                website: domain
            } = data[i].data;
            let worth = {
                keys: [],
                values: [],
                name: domain
            };
            if(visits){
                arr_length = Object.values(visits).length;
                $.each(visits, (index, item) => {
                    let key;
                    let value = item
                    switch (index) {
                        case 'Direct':
                            key = 'Trực tiếp';
                            break;
                        case 'Mail':
                            key = 'Mail';
                            break;
                        case 'Organic Search':
                            key = 'Tìm kiếm tự nhiên';
                            break;
                        case 'Paid Referrals':
                            key = 'Quảng cáo hiển thị';
                            break;
                        case 'Paid Search':
                            key = 'Tìm kiếm trả phí';
                            break;
                        case 'Referrals':
                            key = 'Liên kết ngoài';
                            break;
                        case 'Social':
                            key = 'Mạng xã hội';
                            break;
                    }
                    worth.keys.push(key)
                    worth.values.push(value)
                })
            }else{
                for(let i = 0; i< arr_length; i++)
                {
                    let val = 0;
                    worth.values.push(val)
                }
            }
            
            dataChart.push(worth)
            

            let temp = {}
            temp.name = dataChart[i].name,
                temp.type = 'bar',
                temp.stack = 1,
                temp.barWidth = 60,
                temp.data = dataChart[i].values,
                series.push(temp)

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                let option = {
                    calculable: true,
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
                    legend: {
                        data: dataChart.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: dataChart[0].keys,
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
                    series: series
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
    }
};
const getSearchOrganicPaidOverviewOrganic_BounceRate = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'52':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Tỉ Lệ Thoát Trang: Tìm kiếm tự nhiên)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewOrganic_BounceRate" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    BounceRate,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = BounceRate.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Organic
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0%");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0,0%"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }

        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewOrganic_PagesPerVisit = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'48':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Số Trang / Lượt Truy Cập: Tìm kiếm tự nhiên)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewOrganic_PagesPerVisit" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    PagesPerVisit,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = PagesPerVisit.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Organic
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewOrganic_AverageDuration = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'44':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Thời Gian Trung Bình: Tìm kiếm tự nhiên)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewOrganic_AverageDuration" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    AverageDuration,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = AverageDuration.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Organic
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("00:00:00");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("00:00:00"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
            
        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewOrganic = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'40':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Trung bình thời lượng truy cập: Tìm kiếm tự nhiên)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewOrganic" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    TrafficShare,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = TrafficShare.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Organic
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
            
        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewPaid_BounceRate = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'52':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Tỉ Lệ Thoát Trang: Tìm kiếm trả phí)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewPaid_BounceRate" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    BounceRate,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = BounceRate.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Paid
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0%");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0,0%"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
           
        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewPaid_PagesPerVisit = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'48':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Số Trang / Lượt Truy Cập: Tìm kiếm trả phí)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewPaid_PagesPerVisit" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    PagesPerVisit,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = PagesPerVisit.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Paid
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }

        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewPaid_AverageDuration = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'44':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Thời Gian Trung Bình: Tìm kiếm trả phí)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewPaid_AverageDuration" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    AverageDuration,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = AverageDuration.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Paid
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("00:00:00");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("00:00:00"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }

        } else {
            console.log(`${task} failed`);
        }
    }

};
const getSearchOrganicPaidOverviewPaid = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'40':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                        <div class="text-capitalize font-weight-bold">Chi Tiết Truy Cập Từ Tìm Kiếm</div>
                        <div class="text-muted font-10">(Lượng truy cập: Tìm kiếm trả phí)</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getSearchOrganicPaidOverviewPaid" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var myarray = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let dataChart = {
                keys: [],
                values: [],
                name: domain
            };
            
            let keys = [];
            let values = {
                Organic: [],
                Paid: []
            };
            let temp = true;

            if(traffic != null){
                let {
                    TrafficShare,
                } = data[i].data.data;
                let {
                    BreakDown,
                    Total
                } = TrafficShare.Data;
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
                if(BreakDown){
                    $.each(BreakDown, (idx, val) => {
                        keys.push(idx);
                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ? values.Organic.push((data==null)?0:data): values.Paid.push((data==null)?0:data)
                        })
                    })
                }
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    values.Organic.push(val)
                    values.Paid.push(val)
                }
            }
            
            dataChart.keys = keys;
            dataChart.values = values;
            // console.log(dataChart)

            myarray.push(dataChart)

            let temporary = {}
            temporary.name = myarray[i].name
            temporary.data = myarray[i].values.Paid
            temporary.type = "line",
            temporary.symbol = "circle",
            temporary.symbolSize = 10,
            temporary.showSymbol = true,
            temporary.hoverAnimation = false,
            temporary.lineStyle = {
                normal: {
                    width: 2,
                    // shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            temporary.itemStyle = {
                normal: {
                    // color: "#57606f",
                    // borderColor: "rgb(44, 44, 84, 0.2)",
                    borderWidth: 10
                }
            }
            series.push(temporary)

            // render chart

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {

                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: myarray.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: myarray[0].keys,
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
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
        } else {
            console.log(`${task} failed`);
        }
    }

};
const getTrafficSocialOverview = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'12':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Tổng Lượt truy cập mạng xã hội
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTrafficSocialOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            // if (data[i] && data[i].data && data[i].data.data) {
                let {
                    website: domain
                } = data[i].data;
                let worth = {
                    keys: [],
                    values: [],
                    // VolumeTotal: [],
                    name: domain
                };
                // let idDomain = domain.replace(".", "");
                // idDomain = idDomain.replace(".", "");
                let TrafficSocial = data[i].data.data;

                // let SearchTotal = TrafficSocial.SearchTotal;
                // let VolumeTotal = TrafficSocial.VolumeTotal;

                // worth.VolumeTotal.push(VolumeTotal)

                // $(`#${idDomain}TotalSocialVisits`).removeClass("is-loading");
                // $(`#${idDomain}TotalSocialVisits`).html(`Tổng ${numeral(SearchTotal).format("0,0")}`);
                if(TrafficSocial){
                    $.each(TrafficSocial, (index, item) => {
                        let key = index;
                        let value = item;
                        if (key == "SearchTotal") {
                            worth.keys[0] = "Mạng xã hội";
                            worth.values[0] = value;
                        }
                        if (key == "VolumeTotal") {
                            worth.keys[1] = "Khác";
                            worth.values[1] = (value - TrafficSocial.SearchTotal);
                        }
                    });
                }else{
                    var val= 0
                    worth.keys[0] = "Mạng xã hội";
                    worth.values[0] = val;
                    worth.keys[1] = "Khác";
                    worth.values[1] = val;
                }
                
                dataChart.push(worth)
                let temp = {}
                temp.name = dataChart[i].name,
                    temp.type = 'bar',
                    temp.barWidth = 60,
                    temp.data = dataChart[i].values,
                    temp.itemStyle = {
                        normal: {
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (p) {
                                    return numeral(p.value).format("0,0");
                                }
                            }
                        }
                    }
                series.push(temp)

                var legend = {}
                legend.data = dataChart.name,
                    legend.textStyle = {
                        fontFamily: 'Arial',
                        lineHeight: 16
                    },
                    legend.formatter = function (name) {
                        // let value = dataChart.VolumeTotal
                        // console.log(value)
                        // return  `${name}\n(${numeral(value).format('0,0')})`
                        return name
                    }

                // render chart
                if (i == (data.length - 1)) {
                    let ele = document.getElementById(task);

                    let myChart = echarts.init(ele, 'light');

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
                        legend: legend,
                        grid: {
                            left: '2%',
                            right: '2%',
                            bottom: '5%',
                            top: '20%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: dataChart[0].keys,
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
                                formatter: (value, index) => (value = numeral(value).format("0,0"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function () {
                        myChart.resize();
                    });
                }
            // }
        } else {
            console.log(`${task} failed`);
        }
    }

}
const getTrafficSourcesTotalReferrals = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Truy cập từ giới thiệu
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesTotalReferrals" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain
            } = data[i].data;
            // if (data[i] && data[i].data && data[i].data.data) {
            let {
                Data
            } = data[i].data.data;
            let worth = {
                keys: [],
                values: [],
                name: domain
            };
            // console.log(Data)
            if(Data){
                let TrafficSourcesTotalReferrals = Data.dictionary[domain];
                let SearchTotal = TrafficSourcesTotalReferrals.SearchTotal;
                let Dates = TrafficSourcesTotalReferrals.Dates;
                let Volumes = TrafficSourcesTotalReferrals.Volumes;
                $.each(Volumes, (name, value) => {
                    worth.values.push((value[0] == null)?0:value[0]);
                })
                $.each(Dates, (name, value) => {
                    worth.keys.push(value);
                })
            }else{
                for(let i = 0; i<3; i++){
                    let val = 0
                    worth.values.push(val)
                }
            }
            dataChart.push(worth)
            let temp = {}
            temp.name = dataChart[i].name
            temp.data = dataChart[i].values
            temp.type = "line",
                temp.symbol = "circle",
                temp.symbolSize = 10,
                temp.showSymbol = true,
                temp.hoverAnimation = false,
                temp.lineStyle = {
                    normal: {
                        width: 2,
                        // shadowColor: "rgba(0,0,0,0.4)",
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    }
                },
                temp.itemStyle = {
                    normal: {
                        // color: "#57606f",
                        // borderColor: "rgb(44, 44, 84, 0.2)",
                        borderWidth: 10
                    }
                }
            series.push(temp)

            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
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
                            params.forEach((p, i) => {
                                if (p.value == null || p.value == "A")
                                    p.value == 0;
                                let {
                                    marker,
                                    color,
                                    seriesName,
                                    value
                                } = p;

                                value = numeral(value).format("0,0");


                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                <br/>`
                            })
                            name = moment(name).format('DD MMMM YYYY');
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">${detail}</div>`;

                        }
                    },
                    legend: {
                        data: dataChart.name,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            return name
                        }
                    },
                    grid: {
                        right: "5%"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: dataChart[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0,0"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);

                await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                $(`#getUniqueUsersMonthly`).removeClass('empty-state');

            }
            // } else {
            //     $(`#getUniqueUsersMonthly`).removeClass('is-loading')
            //     $(`#getUniqueUsersMonthly`).addClass('empty-state')
            // }
        } else {
            console.log(`${task} failed`);
        }
    }
}
//chua chinh
const getTrafficSourcesTotalReferralsOverview = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'32':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Tổng Truy cập từ giới thiệu
                        </div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTrafficSourcesTotalReferralsOverview" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height: 240px">
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {

            let dataChartDomain1 = {
                keys: [],
                values: []
            };

            let dataChartDomain2 = {
                keys: [],
                values: []
            };
            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");

            // if (data[i] && data[i].data && data[i].data.data) {
            let {
                Data
            } = data[i].data.data;
            let worth = {
                keys: [],
                values: [],
                VolumeTotal: [],
                name: domain
            };

            let TrafficSourcesTotalReferrals = Data.dictionary[domain];

            let SearchTotal = TrafficSourcesTotalReferrals.SearchTotal;
            let VolumeTotal = TrafficSourcesTotalReferrals.VolumeTotal;
            worth.VolumeTotal.push(VolumeTotal)

            let TotalTraffic = SearchTotal / VolumeTotal;


            $(`#${idDomain}TotalReferrals`).removeClass("is-loading");
            $(`#${idDomain}TotalReferrals`).html(`Tổng ${numeral(SearchTotal).format("0,0")}`);

            $.each(TrafficSourcesTotalReferrals, (index, item) => {
                let key = index;
                let value = item;
                if (key == "SearchTotal") {
                    worth.keys[0] = "từ giới thiệu";
                    worth.values[0] = value;
                }
                if (key == "VolumeTotal") {
                    worth.keys[1] = "Khác";
                    worth.values[1] = (value - TrafficSourcesTotalReferrals.SearchTotal);
                }
            });
            dataChart.push(worth)
            let temp = {}
            temp.name = dataChart[i].name,
                temp.type = 'bar',
                temp.barWidth = 60,
                temp.data = dataChart[i].values,
                temp.itemStyle = {
                    normal: {
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p) {
                                return numeral(p.value).format("0,0");
                            }
                        }
                    }
                }
            series.push(temp)

            var legend = {}
            legend.data = dataChart.name,
                legend.textStyle = {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                legend.formatter = function (name) {
                    // let value = dataChart.VolumeTotal
                    // console.log(value)
                    // return  `${name}\n(${numeral(value).format('0,0')})`
                    return name
                }

            // render chart
            if (i == (data.length - 1)) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele, 'light');

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
                    legend: legend,
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: dataChart[0].keys,
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
                            formatter: (value, index) => (value = numeral(value).format("0,0"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },
                    series: series
                };
                myChart.setOption(option);


                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });
            }
            // }
        } else {
            console.log(`${task} failed`);
        }
    }

}
const getTotalOutgoingAdVisits = async (task, data, domain1, domain2, domain3, domain4, domain5, check, object, active) => {
    if(active == "true") {
        $("#step-loader").append(`
                <div id="${task}" class="rounded" style="height:240px;width:100%;background: rgb(245, 249, 253);"></div>
        `)
    }
    if (check == "true") {
        $(".grid-stack").append(`<div class="grid-stack-item" data-gs-min-width="4" data-gs-max-width="6" data-gs-min-height="4" data-gs-max-height="4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'8':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="${task}">
        <div class="grid-stack-item-content">
            <div class="bg-white shadow-sm rounded h-100">
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
                    <div class="col-auto pl-0 d-flex align-items-center">
                        <div class="text-capitalize font-weight-bold">Tổng Lượng Khách Rời Bỏ Trang</div>
                    </div>
                    <div class="dropdown-wrapper ml-auto">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item similarReloadTask text-muted" data-task="getTotalOutgoingAdVisits" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                </div>
                <div id="Parent-${task}">
                    <div id="${task}" style="height:240px;width:100%"></div>
                </div>
            </div>
        </div>
    </div>`);
    }
    var dataChart = []
    var series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let worth = {
                value: [],
                name: domain
            };
            let TrafficDisplayPaidOutgoingAds = data[i].data.data;
            if(traffic){
                let VolumeTotal = TrafficDisplayPaidOutgoingAds.VolumeTotal;
                 worth.value.push((VolumeTotal == null)?0:VolumeTotal)    
            }else{
                let val = 0
                worth.value.push(val)
            }

            dataChart.push(worth)
            if (i == (data.length - 1)) {
                let dem = 0;
                var myChart = echarts.init(document.getElementById(`${task}`), 'light')
                // lam ngu
                let value = dataChart[dem].value;
                dem++;
                // console.log(value)
                var option = {
                    // color: ['#a29bfe', '#00cec9'],
                    legend: {
                        data: dataChart.name,
                        top: "25%",
                        left: '70%',
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        formatter: function (name) {
                            // chu ra 
                            // let value = dataChart[dem].value;
                            // dem++;
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
                // co gian
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
                // active value 0 
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
            }
            
        } else {
            console.log(`${task} failed`);
        }
    }
}
export default api;