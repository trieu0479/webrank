import api from './method-market-report.js';

function createMarketReport(object,check = "true") {
  let startDate = moment().subtract(90, 'days').startOf('day').format('DD/MM/YYYY');;
  let endDate = moment().format("DD/MM/YYYY");    
  let name_report = object.task;
  switch (name_report) {
    case "getAdwordsMarketVietnamSearch":
      return api("getAdwordsMarketVietnamSearch",startDate,endDate,check,object);
    case "getAdwordsMarketVietnamSearchCPC":
      return api('getAdwordsMarketVietnamSearchCPC',startDate,endDate,check,object);
    case "getAdwordsMarketVietnamSearchCTR":
      return api('getAdwordsMarketVietnamSearchCTR',startDate,endDate,check,object);
    case "getAdwordsMarketVietnamSearchClick":
      return api('getAdwordsMarketVietnamSearchClick',startDate,endDate,check,object);
  //  --------------------------------------------------------------------------------------------   
    case "getAdwordsMarketVietnamSearchChartBar":
      return api("getAdwordsMarketVietnamSearchChartBar",startDate,endDate,check,object);
    case "getAdwordsMarketVietnamSearchChartLine":
      return api("getAdwordsMarketVietnamSearchChartLine",startDate,endDate,check, object)
      // --------------------------------------------
    case "getAdwordsMarketVietnamGDN":
      return api("getAdwordsMarketVietnamGDN",startDate,endDate,check,object);      
    case "getAdwordsMarketVietnamGDNCPC":
      return api("getAdwordsMarketVietnamGDNCPC",startDate,endDate,check,object);
    case "getAdwordsMarketVietnamGDNCPM":
      return api('getAdwordsMarketVietnamGDNCPM',startDate,endDate,check,object)  
    case "getAdwordsMarketVietnamGDNCTR":
      return api('getAdwordsMarketVietnamGDNCTR',startDate,endDate,check,object)  
    case "getAdwordsMarketVietnamGDNChartBar":
      return api("getAdwordsMarketVietnamGDNChartBar",startDate,endDate,check,object);
    case "getAdwordsMarketVietnamGDNChartLine":
      return api("getAdwordsMarketVietnamGDNChartLine",startDate,endDate,check,object)
      // -------------------------------------------------
    case "getAdwordsMarketVietnamYoutube":
      return api("getAdwordsMarketVietnamYoutube",startDate,endDate,check,object);
    case "getAdwordsMarketVietnamYoutubeCPC":
       return api('getAdwordsMarketVietnamYoutubeCPC',startDate,endDate,check,object)  
    case "getAdwordsMarketVietnamYoutubeCPM":
       return api('getAdwordsMarketVietnamYoutubeCPM',startDate,endDate,check,object)  
    case "getAdwordsMarketVietnamYoutubeCPV":
       return api('getAdwordsMarketVietnamYoutubeCPV',startDate,endDate,check,object)  
    case "getAdwordsMarketVietnamYoutubeChartBar":
      return api("getAdwordsMarketVietnamYoutubeChartBar",startDate,endDate,check,object);
    case "getAdwordsMarketVietnamYoutubeChartLine":
      return api("getAdwordsMarketVietnamYoutubeChartLine",startDate,endDate,check,object)

  }

}
export default createMarketReport;