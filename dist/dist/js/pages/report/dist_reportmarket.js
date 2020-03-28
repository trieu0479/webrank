import createMarketReport from '/dist/js/default/load-market-report.js';

let getAdwordsMarketVietnamSearch = {
    task: "getAdwordsMarketVietnamSearch"
}
let getAdwordsMarketVietnamSearchChartBar = {
    task: "getAdwordsMarketVietnamSearchChartBar"
}
let getAdwordsMarketVietnamSearchChartLine = {
    task: "getAdwordsMarketVietnamSearchChartLine"
}
// ----------------------------------------
let getAdwordsMarketVietnamGDN = {
    task: "getAdwordsMarketVietnamGDN"
}
let getAdwordsMarketVietnamGDNChartBar = {
    task: "getAdwordsMarketVietnamGDNChartBar"
}
let getAdwordsMarketVietnamGDNChartLine = {
    task: "getAdwordsMarketVietnamGDNChartLine"
}
// ----------------------------------------------
let getAdwordsMarketVietnamYoutube = {
    task: "getAdwordsMarketVietnamYoutube"
}
let getAdwordsMarketVietnamYoutubeChartBar = {
    task: "getAdwordsMarketVietnamYoutubeChartBar"
}
let getAdwordsMarketVietnamYoutubeChartLine = {
    task: "getAdwordsMarketVietnamYoutubeChartLine"
}
let getAdwordsMarketVietnamSearchCPC = {
    task: 'getAdwordsMarketVietnamSearchCPC'
}

// createMarketReport(getAdwordsMarketVietnamSearch);
// createMarketReport(getAdwordsMarketVietnamSearchChartBar);
// createMarketReport(getAdwordsMarketVietnamSearchChartLine);

// createMarketReport(getAdwordsMarketVietnamGDN);
// createMarketReport(getAdwordsMarketVietnamGDNChartBar);
// createMarketReport(getAdwordsMarketVietnamGDNChartLine);

// createMarketReport(getAdwordsMarketVietnamYoutube);
// createMarketReport(getAdwordsMarketVietnamYoutubeChartBar);
// createMarketReport(getAdwordsMarketVietnamYoutubeChartLine);

var key = url.searchParams.get("key");
const test = new URL(window.location.href);
var clear =test.searchParams.get("clear");
console.log('clear',clear);
console.log('key',key);

var Usertoken ="RTdWS043aUVESmtVelE1Q2dHNDFOL3Iyb25YaSs3SDlCQlJ1U2s3ejkxST06OiAz99wdRZwl_7i7BTbFD_E";
if(!key ) {   
    let myarr = [
     {
         task: "getAdwordsMarketVietnamSearch",
     },
      {
         task: 'getAdwordsMarketVietnamSearchCPC'         
     },
      {
         task: 'getAdwordsMarketVietnamSearchCTR'         
     },
     {
         task: 'getAdwordsMarketVietnamSearchClick'         
     },
     {
         task: "getAdwordsMarketVietnamSearchChartBar",
     },
     {
         task: "getAdwordsMarketVietnamSearchChartLine",
     },
     {
         task: "getAdwordsMarketVietnamGDN",
     },
     {
        task: 'getAdwordsMarketVietnamGDNCPC'
     },
     {
        task: 'getAdwordsMarketVietnamGDNCPM'
     },
     {
        task: 'getAdwordsMarketVietnamGDNCTR'
     },
     {
         task: "getAdwordsMarketVietnamGDNChartBar",
     },
     {
         task: "getAdwordsMarketVietnamGDNChartLine",
     }
     , {
         task: "getAdwordsMarketVietnamYoutube",
     }, {
        task: "getAdwordsMarketVietnamYoutubeCPC",
    },
      {
        task: "getAdwordsMarketVietnamYoutubeCPM",
    },
      {
        task: "getAdwordsMarketVietnamYoutubeCPV",
    },
      {
         task: "getAdwordsMarketVietnamYoutubeChartBar",
     }
     , {
         task: "getAdwordsMarketVietnamYoutubeChartLine",
      }
     ];
 console.log('my arr',myarr)
     
 const insert_customer = myarr.map(async (ele,index) => {   
     return await createMarketReport(ele); 
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
        console.log('data re',data);
               
        const insert_customer = data.data.reportData.map(async (ele,index) => {                 
            return await createMarketReport(ele);
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
    let temp = {task};    
   await createMarketReport(temp,"false").then( (res) =>$(this).find('i').removeClass('fa-spin'))
})