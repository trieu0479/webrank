import api from './reportFunctions.js.js';

$(document).ready(() => {

  const url = new URL(location.href);
  const originalDomain = url.searchParams.get("domain");

  numeral.locale("vi");
  const counter = document.querySelector('.counter')

  // Popup nhap website
  const getDomain = async () => {
    const result = await Swal.fire({
      type: "info",
      title: "Hãy nhập một website cần phân tích",
      input: "text",
      position: 'top',
      showCancelButton: true,
      inputValidator: value => {
        if (!value) {
          return "Bạn hãy nhập website để phân tích!";
        }
      }
    });
    return result;
  };

  if (!originalDomain) {
    // Hien thi popup
    getDomain().then(data =>
      data.value
        ? (location.href = `?action=result&domain=${data.value}`)
        : (location.href = `?action=index`)
    );
  } else {
    let domain = originalDomain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
    // Get all data

    api("getHeader", domain);
    api("getEngagementVisitsWeekly");
    api("getDesktopVsMobileVisits");
    api("getWebDemographicsGender");
    api("getTrafficSourcesOverview");
    api("getTrafficDisplayAdvertisingAds");
    api("getTrafficSourcesSocial");
    api("getTrafficSourcesSearch");
    api("getGetAudienceInterests");
    api("getWebDemographicsAge");
    api("getTopReferrals");
    api("getTrafficDestinationReferrals");
    api("getTrafficSourcesSearchDetails");
    api("getTrafficDestinationAds");
    api("getTopIncomingAds");
    api("getWebsiteGeography");
    api("getSearchOrganicPaidOverview");
    api("getWebsiteAdsIntelDisplay");
    api("getScrapedSearchAds");
    api("getSearchBrandedKeywords");
    api("getOrganicKeywordsBrandedTable");
    api("getPaidSearchCompetitorsTable");
    api("getPaidKeywordsTable");
    api("getTrendingKeywordsTable");

    api("getTrafficDisplayPaidOutgoingAds");
    api("getSimilarSites");
    setTimeout(() => {
      api("buildFeatureImage");
    }, 5000);

    $("input[type=radio][name=engagementVisits]").change(function () {

      let ele = document.getElementById("getEngagementVisits");

      echarts.dispose(ele);

      $('#getEngagementVisits').addClass('is-loading');
      
      if (this.value == "setEngagementVisitsMonthly") {
        api("getEngagementVisitsMonthly");
      }if (this.value == "setEngagementVisitsWeekly") {
        api("getEngagementVisitsWeekly");
      }if (this.value == "setEngagementVisitsDaily") {
        api("getEngagementVisitsDaily");
      } else {
      }
    });

    $("input[type=radio][name=getOrganicKeywordsTable]").change(function () {

      $('#getOrganicKeywordsTable').html('');

      $('#getOrganicKeywordsTable').removeClass('empty-state').addClass('is-loading');

      this.value == "getOrganicKeywordsNonBrandedTable" ?
        api("getOrganicKeywordsNonBrandedTable") :
        api("getOrganicKeywordsBrandedTable");
    });

    $(".similarReloadTask").click(function () {
      if ($(this).find('i').hasClass('fa-spin')) { $(this).find('i').removeClass('fa-spin'); return; }
      let task = $(this).data("task");
      $(this).find('i').addClass('fa-spin');
      api(task);
    })


  }

});