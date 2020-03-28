import api from './report-compare.js'; 
function createCompare(object,  domain1, domain2, domain3, domain4, domain5, check = "true", active = "true"){
	let name_report = object.task

	switch (name_report) {
		case "totalTraffic":
			return api("totalTraffic", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficAndEngagementOverviewMonthly":
			return api("getTrafficAndEngagementOverviewMonthly", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getWebsiteGeography":
			return api("getWebsiteGeography", domain1, domain2, domain3, domain4, domain5, check, object, active);
		case "getWebDemographicsGender":
			return api("getWebDemographicsGender", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getWebDemographicsAge":
			return api("getWebDemographicsAge", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getDesktopVsMobileVisits":
			return api("getDesktopVsMobileVisits", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getUniqueUsersMonthly":
			return api("getUniqueUsersMonthly", domain1, domain2, domain3, domain4, domain5, check, object, active);
		case "getTrafficSourcesOverview":
			return api("getTrafficSourcesOverview", domain1, domain2, domain3, domain4, domain5, check, object, active);
		case "getMarketingMixOverviewDaily_TrafficShare":
			return api("getMarketingMixOverviewDaily_TrafficShare", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_Direct":
			return api("getMarketingMixOverviewDaily_AverageDuration_Direct", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_Email":
			return api("getMarketingMixOverviewDaily_AverageDuration_Email", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_DisplayAds":
			return api("getMarketingMixOverviewDaily_AverageDuration_DisplayAds", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_OrganicSearch":
			return api("getMarketingMixOverviewDaily_AverageDuration_OrganicSearch", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_PaidSearch":
			return api("getMarketingMixOverviewDaily_AverageDuration_PaidSearch", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_Referrals":
			return api("getMarketingMixOverviewDaily_AverageDuration_Referrals", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_AverageDuration_Social":
			return api("getMarketingMixOverviewDaily_AverageDuration_Social", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_PagesPerVisit":
			return api("getMarketingMixOverviewDaily_PagesPerVisit", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_Direct":
			return api("getMarketingMixOverviewDaily_BounceRate_Direct", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_Email":
			return api("getMarketingMixOverviewDaily_BounceRate_Email", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_DisplayAds":
			return api("getMarketingMixOverviewDaily_BounceRate_DisplayAds", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_OrganicSearch":
			return api("getMarketingMixOverviewDaily_BounceRate_OrganicSearch", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_PaidSearch":
			return api("getMarketingMixOverviewDaily_BounceRate_PaidSearch", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_Referrals":
			return api("getMarketingMixOverviewDaily_BounceRate_Referrals", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getMarketingMixOverviewDaily_BounceRate_Social":
			return api("getMarketingMixOverviewDaily_BounceRate_Social", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficSourcesSearch":
			return api("getTrafficSourcesSearch", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewOrganic":
			return api("getSearchOrganicPaidOverviewOrganic", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewOrganic_AverageDuration":
			return api("getSearchOrganicPaidOverviewOrganic_AverageDuration", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewOrganic_PagesPerVisit":
			return api("getSearchOrganicPaidOverviewOrganic_PagesPerVisit", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewOrganic_BounceRate":
			return api("getSearchOrganicPaidOverviewOrganic_BounceRate", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewPaid":
			return api("getSearchOrganicPaidOverviewPaid", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewPaid_AverageDuration":
			return api("getSearchOrganicPaidOverviewPaid_AverageDuration", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewPaid_PagesPerVisit":
			return api("getSearchOrganicPaidOverviewPaid_PagesPerVisit", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchOrganicPaidOverviewPaid_BounceRate":
			return api("getSearchOrganicPaidOverviewPaid_BounceRate", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchBrandedKeywords":
			return api("getSearchBrandedKeywords", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getSearchBrandedKeywordsNoneBranded":
			return api("getSearchBrandedKeywordsNoneBranded", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getWebsiteAdsVisitsOverview":
			return api("getWebsiteAdsVisitsOverview", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficSocial":
			return api("getTrafficSocial", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficSocialOverview":
			return api("getTrafficSocialOverview", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficSourcesTotalReferrals":
			return api("getTrafficSourcesTotalReferrals", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficSourcesTotalReferralsOverview":
			return api("getTrafficSourcesTotalReferralsOverview", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTrafficDisplayPaidOutgoingAds":
			return api("getTrafficDisplayPaidOutgoingAds", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		case "getTotalOutgoingAdVisits":
			return api("getTotalOutgoingAdVisits", domain1, domain2, domain3, domain4, domain5, check, object, active); 
		// case "getTrafficAndEngagementVisits":
		// 	return api("getTrafficAndEngagementVisits",domain1, domain2, domain3); 
	}
}
export default createCompare;