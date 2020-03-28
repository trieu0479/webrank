import api from "./report-compare-tag.js";
function createCompareTag (object,keywords1,keywords2,check="true",active = "true") {
let name_report=object.task;
switch (name_report) {
    case "getBidForecast__Impressions":
        return api("getBidForecast__Impressions",keywords1,keywords2,check,object,active);
    case 'getBidForecast__Click':
        return api('getBidForecast__Click',keywords1,keywords2,check,object,active);
    case 'getBidForecast__CPC' :
         return api('getBidForecast__CPC',keywords1,keywords2,check,object,active);
    case "getBidForecast__Cost" :
        return api('getBidForecast__Cost',keywords1,keywords2,check,object,active);
    case "getKeywordsSuggestionV1__History__PC":
        return api("getKeywordsSuggestionV1__History__PC",keywords1,keywords2,check,object,active);
    case "getKeywordsSuggestionV1__History__Mobile":
        return api("getKeywordsSuggestionV1__History__Mobile",keywords1,keywords2,check,object,active);
    case "Chart__Circle":
      return api("Chart__Circle",keywords1,keywords2,check,object,active);
    case "Phan__Tich__Seo":
      return api("Phan__Tich__Seo",keywords1,keywords2,check,object,active); 
    case "Phan__Tich__Seo_Chart_A":
      return api("Phan__Tich__Seo_Chart_A",keywords1,keywords2,check,object,active);
    case "Phan__Tich__Seo_Chart_B":
     return api("Phan__Tich__Seo_Chart_B",keywords1,keywords2,check,object,active);  
}
}
export default createCompareTag;