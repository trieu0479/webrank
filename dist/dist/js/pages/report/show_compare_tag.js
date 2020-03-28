 import createCompareTag from '/dist/js/default/report/load-compare-tag.js';

 let myarr = [
    {
        task: 'getBidForecast__Impressions',
       
    }, {
        task: 'getBidForecast__Click'
    }, {
        task:"getBidForecast__CPC" 
    }
    , {
        task:"getBidForecast__Cost"
    },
    { 
        task:"getKeywordsSuggestionV1__History__PC"
    }, {
        task: "getKeywordsSuggestionV1__History__Mobile"
    },
    {
        task: "Chart__Circle"
    },
    {
        task: "Phan__Tich__Seo"
    },
    {
        task: "Phan__Tich__Seo_Chart_A"
    }, 
    {
        task: "Phan__Tich__Seo_Chart_B"
    }

]
    const url = new URL(location.href);
    var keywords1 = url.searchParams.get("keywords1");
    var keywords2 = url.searchParams.get("keywords2");
    let clear = url.searchParams.get("clear");
    var Usertoken ="RTdWS043aUVESmtVelE1Q2dHNDFOL3Iyb25YaSs3SDlCQlJ1U2s3ejkxST06OiAz99wdRZwl_7i7BTbFD_E";
    var key = url.searchParams.get("key");   
    if (!key) {
        $('#addMetric').addClass('d-none')

        const insert_customer = myarr.map(async (ele,index) => {   
            return await createCompareTag(ele,keywords1,keywords2); 
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
            return await createCompareTag(ele,keywords1,keywords2);
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
    let keywords1 = test.searchParams.get("keywords1");
    let keywords2 = test.searchParams.get("keywords2");
    // console.log(keywords);             
    let temp = {task};    
   await createCompareTag(temp,keywords1,keywords2,"false").then( (res)=>$(this).find('i').removeClass('fa-spin'))    
}
)







