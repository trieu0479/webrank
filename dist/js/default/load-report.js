import api from './method-report.js'; 


function createReport(object,domain,check = "true") {
    let name_report = object.task; 
    switch (name_report) {
        case "totalTraffic":
            return api("totalTraffic", domain, check, object);
            break;
        case "getDesktopVsMobile":
            return api("getDesktopVsMobile", domain, check, object);
            break;
        case "getWebDemographicsGender":
            return api("getWebDemographicsGender", domain, check, object);
            break;
        case "getTrafficAndEngagementOverviewMonthly":
            return api("getTrafficAndEngagementOverviewMonthly", domain, check, object);
            break;
        case "getWebsiteGeography":
            return api("getWebsiteGeography", domain, check, object);
            break;
        case "getWebDemographicsAge":
            return api("getWebDemographicsAge", domain, check, object);
            break;


        // 3 return api
        case "getTrafficAndEngagementVisitsMonthly":
            return api("getTrafficAndEngagementVisitsMonthly", domain);
            break;
        case "getTrafficAndEngagementVisitsDaily":
            return api("getTrafficAndEngagementVisitsDaily", domain);
            break;
        case "getTrafficAndEngagementVisitsWeekly":
            return api("getTrafficAndEngagementVisitsWeekly", domain);
            break;
        

            
        case "getTrafficSourcesOverview":
            return api("getTrafficSourcesOverview", domain, check, object);
            break;
        case "getMarketingMixOverviewDaily":
            return api("getMarketingMixOverviewDaily", domain, check, object);
            break;
        case "getTrafficSourcesSearch":
            return api("getTrafficSourcesSearch", domain, check, object);
            break;
        case "getSearchOrganicPaidOverview":
            return api("getSearchOrganicPaidOverview", domain, check, object);
            break;
        case "getSearchBrandedKeywords":
            return api("getSearchBrandedKeywords", domain, check, object);
            break;
        // chua ra 
        case "getOrganicKeywordsBrandedTable":
            return api("getOrganicKeywordsBrandedTable", domain, check, object);
            break;
        case "getScrapedSearchAds":
            return api("getScrapedSearchAds", domain, check, object);
            break;
        case "getPaidSearchCompetitorsTable":
            return api("getPaidSearchCompetitorsTable", domain, check, object);
            break;
        case "getWebsiteAdsVisitsOverview":
            return api("getWebsiteAdsVisitsOverview", domain, check, object);
            break;
        case "getTrafficDisplayAdvertisingAds":
            return api("getTrafficDisplayAdvertisingAds", domain, check, object);
            break;
        case "getTrafficDestinationAds":
            return api("getTrafficDestinationAds", domain, check, object);
            break;
        case "getWebsiteAdsIntelDisplay":
            return api("getWebsiteAdsIntelDisplay", domain, check, object);
            break;
        case "getTrafficSocial":
            return api("getTrafficSocial", domain, check, object);
            break;
        case "getTrafficSourcesSocial":
            return api("getTrafficSourcesSocial", domain, check, object);
            break;
        case "getTrafficSourcesTotalReferrals":
            return api("getTrafficSourcesTotalReferrals", domain, check, object);
            break;
        case "getTrafficDisplayPaidOutgoingAdsTable":
            return api("getTrafficDisplayPaidOutgoingAdsTable", domain, check, object);
            break;
        case "getOutgoingAds":
            return api("getOutgoingAds", domain, check, object);
            break;
        case "getTotalOutgoingAdVisits":
            return api("getTotalOutgoingAdVisits", domain, check, object);
            break;
        case "getTrafficDisplayAdvertisingWebsitesTable":
            return api("getTrafficDisplayAdvertisingWebsitesTable", domain, check, object);
            break;
        case "getTrafficSocialTableDetail":
            return api("getTrafficSocialTableDetail", domain, check, object);
            break;
        case "getTrafficSourcesTotalReferralsTable":
            return api("getTrafficSourcesTotalReferralsTable", domain, check, object);
            break;
        case "getTrafficDisplayPaidOutgoingWebsitesTable":
            return api("getTrafficDisplayPaidOutgoingWebsitesTable", domain, check, object);
            break;
        case "getTrafficDestinationReferrals":
            return api("getTrafficDestinationReferrals", domain, check, object);
            break;
    }
}
export default createReport;