import createTagReport from '/dist/js/default/load-tag-report.js';

let  getBidForecast__Impressions= {
    task: 'getBidForecast__Impressions'
}
let getBidForecast__Position__CTR = {
    task :"getBidForecast__Position__CTR"
}

let getBidForecast__Cost = {
    task : 'getBidForecast__Cost'
}

let getBidForecast__Click = {
    task: 'getBidForecast__Click'
}
let getBidForecast__CPC = {
    task: "getBidForecast__CPC"
}
let getKeywordsSuggestionV1__History  = {
    task : "getKeywordsSuggestionV1__History"
}


let doMainRequest = {
    task : "doMainRequest"
}
let Chart__Circle = {
    task : "Chart__Circle"
}
let  Google_Ads ={
    task :"Google_Ads"
}

let Chart__Top5__QC = {
    task: "Chart__Top5__QC"
}
let Table_Top10__QC = {
    task: "Table_Top10__QC"
}
let Phan__Tich__Seo = {
    task:"Phan__Tich__Seo"
}

let Chart__Top5__PageSeo = {
    task : "Chart__Top5__PageSeo"
}
let Table__Top10__PageSeo  = {
    task: "Table__Top10__PageSeo"
}
let KeywordRecommendationsPhraseMatch  ={
    task:"KeywordRecommendationsPhraseMatch"
}
let KeywordRecommendationsRelated = {
    task:"KeywordRecommendationsRelated"
}

const chart = async () =>{    
    console.log(keywords);
    createTagReport(getBidForecast__Position__CTR,keywords)
    createTagReport(getBidForecast__Cost,keywords)
    createTagReport(getBidForecast__Click,keywords)
    createTagReport(getBidForecast__CPC,keywords)
    createTagReport(getKeywordsSuggestionV1__History,keywords)    
    createTagReport(doMainRequest,keywords)
    createTagReport(Chart__Circle,keywords)
    createTagReport(Google_Ads,keywords)
    createTagReport(Chart__Top5__QC,keywords)
    createTagReport(Table_Top10__QC,keywords)
    createTagReport(Phan__Tich__Seo,keywords)
    createTagReport(Chart__Top5__PageSeo,keywords)
    createTagReport(Table__Top10__PageSeo,keywords)
    createTagReport(KeywordRecommendationsPhraseMatch,keywords)
    createTagReport(KeywordRecommendationsRelated,keywords)
    createTagReport(getBidForecast__Impressions,keywords); 
}
const test = new URL(window.location.href);
let keywords = test.searchParams.get("keywords");
var key = url.searchParams.get("key");
var clear =test.searchParams.get("clear");

console.log('clear',clear);
var Usertoken ="RTdWS043aUVESmtVelE1Q2dHNDFOL3Iyb25YaSs3SDlCQlJ1U2s3ejkxST06OiAz99wdRZwl_7i7BTbFD_E";
    if(!key ) {   
       let myarr = [
        {
            task: "getBidForecast__Position__CTR",
        },
        {
            task: "getBidForecast__Cost",
        },
        {
            task: "getBidForecast__Click",
        },
        {
            task: "getBidForecast__CPC",
        },
        {
            task: "getKeywordsSuggestionV1__History",
        },
        {
            task: "doMainRequest",
        }
        , {
            task: "Chart__Circle",
        }
        , {
            task: "Google_Ads",
        }
        , {
            task: "Chart__Top5__QC",
        }, {
            task: "Table__Top10__PageSeo",
        }, {
            task: "KeywordRecommendationsPhraseMatch",
        }, {
            task: "KeywordRecommendationsRelated",
        }, {
            task: "getBidForecast__Impressions",
        }, {
            task: "Table_Top10__QC",
        }, {
            task: "Phan__Tich__Seo",
        }, {
            task: "Chart__Top5__PageSeo",
        }
    ];
   
    console.log('my arr',myarr)
        
    const insert_customer = myarr.map(async (ele,index) => {   
        return await createTagReport(ele,keywords); 
    });
      
    Promise.all(insert_customer).then(data => {        
        console.log("xong rá»“i nha");
        $('.app-loader').removeClass('d-flex').addClass('d-none'); 

        if(clear){ 
            $('.dropdown-wrapper').removeClass("d-flex").addClass('d-none')
            $('.grid-stack').gridstack({
                staticGrid: true,
                disableDrag: true,
                disableResize: true
            });  
        } else {
               $('.grid-stack').gridstack();   
        }
    });
    
   
}

if(key){
    $.get(`//localapi.trazk.com/report/index.php?task=getReportByKey&userToken=${Usertoken}&key=${key}`,function(data){
        data = JSON.parse(data);                
        const insert_customer = data.data.reportData.map(async (ele,index) => {                 
            return await createTagReport(ele,keywords);
        });

        Promise.all(insert_customer).then(data => { 
            console.log(data)
            console.log("xong rá»“i nha");
            $('.app-loader').removeClass('d-flex').addClass('d-none');
         
           
            if(clear){ 
                $('.dropdown-wrapper').removeClass("d-flex").addClass('d-none')
                $('.grid-stack').gridstack({
                    staticGrid: true,
                    disableDrag: true,
                    disableResize: true
                });  
            } else {
                   $('.grid-stack').gridstack();   
            }
        });
    }) 
   
}



$('body').on('click','.similarReloadTask',async function () { 
    let task = $(this).data("task");    
    $(this).find('i').addClass('fa-spin');      
    const test = new URL(window.location.href);
    let keywords = test.searchParams.get("keywords");
    // console.log(keywords);       
      
    let temp = {task};    
   await createTagReport(temp,keywords,"false").then( (res)=>$(this).find('i').removeClass('fa-spin'))    
})

// var loadScriptAsync = function(uri) {
//     return new Promise((resolve, reject) => {
//         var tag = document.createElement('script');
//         tag.src = uri;
//         tag.async = true;
//         tag.onload = () => {
//             resolve();
//         };
//         var firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     });
// }



// $(document).ready(() => {          

    
// })                                                          