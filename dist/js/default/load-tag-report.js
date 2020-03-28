import api from './method-tag-report.js';

function createTagReport(object,keywords,check="true") {    
    // console.log('object ',object);    
    let name_report = object.task;
    console.log(name_report)
    switch (name_report) {               
        case "getBidForecast__Position__CTR":            
            return api("getBidForecast__Position__CTR",keywords,check,object);
        case "getBidForecast__Cost":
            return api("getBidForecast__Cost",keywords,check,object);
        case "getBidForecast__Click":
            return api("getBidForecast__Click",keywords,check,object);
        case "getBidForecast__CPC": 
            return api("getBidForecast__CPC",keywords,check,object);
        case "getKeywordsSuggestionV1__History":
            return api("getKeywordsSuggestionV1__History",keywords,check,object);
        // case "Chart__One___Left":
        //     return api("Chart__One___Left",keywords);
        // case "Chart__2___Left":
        //     return api("Chart__2___Left",keywords);  
        // case "Chart__3__Left":
        //     return api("Chart__3__Left",keywords);
        // case "Chart__4__Left":   
        //     return api("Chart__4__Left",keywords); 
        // case "Chart__5__Left":
        //     return api("Chart__5__Left",keywords);    
        //   ---------------------------------------------------
        case "doMainRequest":
             return api("doMainRequest",keywords,check,object);
        //    ---------------------------------chart cirvle----------------
        case "Chart__Circle":
            return api("Chart__Circle",keywords,check,object);        
        case "Google_Ads":
            return api("Google_Ads",keywords,check,object);
        ///////////////////////chart top 5 qc
        case "Chart__Top5__QC":
            return api("Chart__Top5__QC",keywords,check,object);
        case "Table_Top10__QC":
            return api("Table_Top10__QC",keywords,check,object);  
        case "Phan__Tich__Seo":
            return api("Phan__Tich__Seo",keywords,check,object);   
        case "Chart__Top5__PageSeo":
            return api("Chart__Top5__PageSeo",keywords,check,object);
        case "Table__Top10__PageSeo" :
            return api("Table__Top10__PageSeo",keywords,check,object);
        case "KeywordRecommendationsPhraseMatch":
            return api("KeywordRecommendationsPhraseMatch",keywords,check,object);
        case "KeywordRecommendationsRelated":
            return api("KeywordRecommendationsRelated",keywords,check,object);      
        case "getBidForecast__Impressions":
          return api("getBidForecast__Impressions",keywords,check,object);                 
}
}



export default createTagReport;