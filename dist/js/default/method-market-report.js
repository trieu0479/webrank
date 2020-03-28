

const api = async (task,startDate,endDate,check,object) => {
    let url;
   if (task == "getAdwordsMarketVietnamSearch") {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=search&startDate=${startDate}&endDate=${endDate}`;
   }
   if (task == "getAdwordsMarketVietnamSearchCPC" || task == "getAdwordsMarketVietnamSearchCTR" || task == "getAdwordsMarketVietnamSearchClick" ) {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=search&startDate=${startDate}&endDate=${endDate}`;
   }
   
   if (task == "getAdwordsMarketVietnamSearchChartBar") {
       url = `//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=search&startDate=${startDate}&endDate=${endDate}`;
   }
   if (task == "getAdwordsMarketVietnamSearchChartLine") {
       url = `//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=search&startDate=${startDate}&endDate=${endDate}`;
   }


   // ----------------------------------------------
   if (task == "getAdwordsMarketVietnamGDN") {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=gdn&startDate=${startDate}&endDate=${endDate}`;
   }
   if (task == 'getAdwordsMarketVietnamGDNCPC' || task == 'getAdwordsMarketVietnamGDNCPM' || task =="getAdwordsMarketVietnamGDNCTR" ) {
       url =`//fff.com.vn/api/getadwordsmarketvietnam.php?type=gdn&startDate=${startDate}&endDate=${endDate}`
   }
   if (task == "getAdwordsMarketVietnamGDNChartBar") {
       url = `//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=gdn&startDate=${startDate}&endDate=${endDate}`;
   }
   if (task == "getAdwordsMarketVietnamGDNChartLine") {
       url = `//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=gdn&startDate=${startDate}&endDate=${endDate}`;
   }
   // --------------------------------------------------------
   if (task == "getAdwordsMarketVietnamYoutube") {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=youtube&startDate=${startDate}&endDate=${endDate}`;
   }
   if(task =="getAdwordsMarketVietnamYoutubeCPC") {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=youtube&startDate=${startDate}&endDate=${endDate}`;
   }
    
   if(task =="getAdwordsMarketVietnamYoutubeCPM" ) {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=youtube&startDate=${startDate}&endDate=${endDate}`;
   }
   if(task =="getAdwordsMarketVietnamYoutubeCPV" ) {
       url = `//fff.com.vn/api/getadwordsmarketvietnam.php?type=youtube&startDate=${startDate}&endDate=${endDate}`;
   }
    
   if (task == "getAdwordsMarketVietnamYoutubeChartBar") {
       url = `//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=youtube&startDate=${startDate}&endDate=${endDate}`;
   }
   if (task == "getAdwordsMarketVietnamYoutubeChartLine") {
       url = `//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=youtube&startDate=${startDate}&endDate=${endDate}`;
   }


   try {
       return await $.ajax({
               url: url
           })
           .then((data) => {
            //    console.log(task);    
               data=JSON.parse(data);
               switch (task) {
                                  
                   // case "getAdwordsMarketVietnamSearch":
                   //     getAdwordsMarketVietnamSearch(task,data,startDate,endDate,check,object);
                   //     break;
                   case "getAdwordsMarketVietnamSearchCPC":
                       getAdwordsMarketVietnamSearchCPC(task,data,startDate,endDate,check,object);
                       break;    
                   case "getAdwordsMarketVietnamSearchCTR":
                       getAdwordsMarketVietnamSearchCTR(task,data,startDate,endDate,check,object);
                       break;    
                   case "getAdwordsMarketVietnamSearchClick":
                       getAdwordsMarketVietnamSearchClick(task,data,startDate,endDate,check,object);
                       break;    
                   case "getAdwordsMarketVietnamSearchChartBar":
                       getAdwordsMarketVietnamSearchChartBar(task,data,startDate,endDate,check,object);
                       break;
                   case "getAdwordsMarketVietnamSearchChartLine":
                       getAdwordsMarketVietnamSearchChartLine(task,data,startDate,endDate,check,object);
                       break;
                   // -----------------------------------------------------------------------------------------------------
                   // case "getAdwordsMarketVietnamGDN":
                   //     getAdwordsMarketVietnamGDN(task,data,startDate,endDate,check,object);
                   //     break;
                   case "getAdwordsMarketVietnamGDNCPC":
                       getAdwordsMarketVietnamGDNCPC(task,data,startDate,endDate,check,object);
                       break;    
                   case "getAdwordsMarketVietnamGDNCPM":
                       getAdwordsMarketVietnamGDNCPM(task,data,startDate,endDate,check,object);
                       break;    
                   case "getAdwordsMarketVietnamGDNCTR":
                       getAdwordsMarketVietnamGDNCTR(task,data,startDate,endDate,check,object);
                       break;    
                   case "getAdwordsMarketVietnamGDNChartBar":
                       getAdwordsMarketVietnamGDNChartBar(task,data,startDate,endDate,check,object);
                       break;
                   case "getAdwordsMarketVietnamGDNChartLine":
                       getAdwordsMarketVietnamGDNChartLine(task,data,startDate,endDate,check,object);
                       break;
               //   ----------------------------------------------------------------------------------------      
                   // case "getAdwordsMarketVietnamYoutube":
                   //     getAdwordsMarketVietnamYoutube(task,data,startDate,endDate,check,object);
                   //     break;
                   case "getAdwordsMarketVietnamYoutubeCPC":
                       getAdwordsMarketVietnamYoutubeCPC(task,data,startDate,endDate,check,object);
                       break;
                     
                   case "getAdwordsMarketVietnamYoutubeCPM":
                       getAdwordsMarketVietnamYoutubeCPM(task,data,startDate,endDate,check,object);
                       break;
                   case "getAdwordsMarketVietnamYoutubeCPV":
                       getAdwordsMarketVietnamYoutubeCPV(task,data,startDate,endDate,check,object);
                       break;
                     
                   case "getAdwordsMarketVietnamYoutubeChartBar":
                       getAdwordsMarketVietnamYoutubeChartBar(task,data,startDate,endDate,check,object);
                       break;
                   case "getAdwordsMarketVietnamYoutubeChartLine":
                       getAdwordsMarketVietnamYoutubeChartLine(task,data,startDate,endDate,check,object);
                       break;
                   
                   default:
                       break;
               }
           })

   } 
   catch (error) {
    //    console.log('catch error', error);
   }


}

const key = url.searchParams.get("key");

const getAdwordsMarketVietnamSearch = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="6"  data-gs-min-height="6" data-gs-max-height="6"  data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="getAdwordsMarketVietnamSearch">
       <div class="grid-stack-item-content shadow-gg">
       <div class="SearchMarket justify-content-center h-100">        
       <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">
       <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamSearch dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamSearch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
                   <div class="d-flex no-block text-success h3 font-gg font-weight-500">
                                   <div class="align-self-end mr-3">
                                       <i class="far fa-search font-20"></i>
                                   </div>
                                   Quảng Cáo Google Search
                   </div>
                   <div class="mt-4 text-muted mb-5">
                       Quảng cáo Google Search là quảng cáo xuất hiện khi người dùng tìm kiếm các từ khóa trên Google.com
                       <span class="dateRange"></span>
                   </div>
               <div class="row">
                       <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                           <div class="d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
                               <div class="d-flex no-block justify-content-center">
                                   <span class="cpc display-7 font-number"></span>
                               </div>
                               <div class="text-muted text-uppercase text-center mt-4">
                                   CPC Chi phí click trung bình
                               </div>
                           </div>
                       </div>

                       <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                           <div class="bg-success-2 d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5 text-success">
                               <div class="d-flex no-block justify-content-center">
                                   <span class="ctr display-7 font-number"></span>
                               </div>

                               <div class="text-success text-uppercase text-center mt-4">
                                   CTR Tỷ lệ nhấp
                               </div>

                           </div>
                       </div>

                       <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                           <div class="d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
                                   <div class="d-flex no-block justify-content-center">
                                       <span class="invalidclick display-7 font-number"></span>
                                   </div>
                                   <div class="text-muted text-uppercase text-center mt-4">
                                       Invalid Click
                                   </div>
                           </div>
                       </div>
               </div>   
       </div>       
         
       </div>
       </div>
   </div>`)
   }
   $(".SearchMarket .cpc").html(data.cpc);
   $(".SearchMarket .ctr").html(data.ctr);
   $(".SearchMarket .invalidclick").html(data.invalidclick);
//    console.log('aaa',data);
   
}


const getAdwordsMarketVietnamSearchCPC = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamSearchCPC">
       <div class="grid-stack-item-content shadow-gg">
       <div class="SearchMarket justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamSearchCPC dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamSearchCPC" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-success h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5" style="color:#2ed0a2!important">
                           <div class="align-self-end">
                               <i class="far fa-search font-16"></i>
                           </div>
                           Quảng Cáo Google Search
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            CPC Chi phí click trung bình
                           </div>
                             <div class="d-flex no-block justify-content-center mt-5">
                                   <span class="cpc display-6 font-number font-18"></span>
                               </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   
   $(".SearchMarket .cpc").html(data.cpc);
   $(".SearchMarket .ctr").html(data.ctr);
   $(".SearchMarket .invalidclick").html(data.invalidclick);
}
const getAdwordsMarketVietnamSearchClick = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamSearchClick">
       <div class="grid-stack-item-content shadow-gg">
       <div class="SearchMarket justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamSearchClick dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamSearchClick" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-success h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5" style="color:#2ed0a2!important" >
                           <div class="align-self-end">
                               <i class="far fa-search font-16"></i>
                           </div>
                           Quảng Cáo Google Search
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            invalid click
                           </div>
                           <div class="d-flex no-block justify-content-center mt-5">
                              <span class="invalidclick display-6 font-18 font-number"></span>
                          </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   
   $(".SearchMarket .cpc").html(data.cpc);
   $(".SearchMarket .ctr").html(data.ctr);
   $(".SearchMarket .invalidclick").html(data.invalidclick);
}
const getAdwordsMarketVietnamSearchCTR = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamSearchCTR">
       <div class="grid-stack-item-content shadow-gg">
       <div class="SearchMarket justify-content-center h-100">                                            
                           <div class="bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamSearchCTR dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamSearchCTR" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-success h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5" style="color:#2ed0a2!important" >
                           <div class="align-self-end">
                               <i class="far fa-search font-16"></i>
                           </div>
                           Quảng Cáo Google Search
                            </div>
                            <div class="text-muted text-uppercase text-center text-success mt-2">
                            CTR Tỷ lệ nhấp
                           </div>
                           <div class="d-flex no-block justify-content-center mt-5">
                              <span class="ctr display-6 font-number text-success"></span>
                           </div>                                                            
                           </div>        
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   
   $(".SearchMarket .cpc").html(data.cpc);
   $(".SearchMarket .ctr").html(data.ctr);
   $(".SearchMarket .invalidclick").html(data.invalidclick);
}





const getAdwordsMarketVietnamSearchChartBar = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="8" data-gs-max-height="9" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'6':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="getAdwordsMarketVietnamSearchChartBar">
       <div class="grid-stack-item-content shadow-gg">       
       <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">
       <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamSearchChartBar dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamSearchChartBar" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
           <div class="h4 font-gg font-weight-500">
           CPC Google Search Theo Ngành Nghề
           <div class="adwordsMarketVietnamChart">
               <div id="adwordsMarketVietnamSearchCPCChart" style="width:100%; height:400px;">
               </div>
           </div>
           <div class="mt-4 font-12 text-muted text-center">
               Biểu đồ chi phí trung bình cho mỗi click chuột theo ngành nghề khi quảng cáo trên Google Search
           </div>

       </div>
                   
      
       </div>
       </div>
   </div>`)
   }
//    console.log('data',data);    
   var option = {
       xAxis: {
           type: 'category',
           data: data.data.nganhnghe,
           axisLabel: {
               textStyle: {
                   color: '#666',

               },
               fontFamily: 'Arial',
               fontSize: 11,
               lineHeight: 22,
               width: '100%',
               interval: 0,
           },

           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       yAxis: {
           type: 'value',
           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross',
               label: {
                   backgroundColor: '#6a7985'
               }
           }
       },
       series: [{
           name: 'CPC',
           data: data.data.cpc,
           type: 'bar',
           itemStyle: {
               color: '#1dd1a1',
               barBorderColor: '#1dd1a1'
           },
           label: {
               show: true,
               position: 'top',
               color: '#1dd1a1',
               formatter: function (params) {
                   return params.value.toLocaleString('en-US');
               },
           },
           barMaxWidth: '55%'
       }]
   };

   var myChart = echarts.init(document.getElementById('adwordsMarketVietnamSearchCPCChart'));
   myChart.setOption(option);
   new ResizeSensor($('#adwordsMarketVietnamSearchCPCChart'), () => myChart.resize());

}

const getAdwordsMarketVietnamSearchChartLine = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item"  data-gs-min-width="6" data-gs-min-height="8" data-gs-max-height="9" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'14':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="getAdwordsMarketVietnamSearchChartLine">
       <div class="grid-stack-item-content shadow-gg">
       <div class="SearchMarket h-100 justify-content-center">
               <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100 ">  
               <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamSearchChartLine dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamSearchChartLine" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                 
                       <div class="h4  font-gg font-weight-500">
                       CTR  Google Search Theo Ngành Nghề

                       <div class="adwordsMarketVietnamChart ">
                           <div id="adwordsMarketVietnamSearchCTRChart" style="width:100%; height:400px;">
                           </div>
                       </div>

                       <div class="mt-4 font-12 text-muted text-center">
                           Biểu đồ tỷ lệ nhấp theo ngành nghề khi quảng cáo trên Google Search
                       </div>

                       </div>                            
               </div>         
       </div>
       </div>
   </div>`)
   }
   var option = {
       xAxis: {
           type: 'category',
           data: data.data.nganhnghe,

           axisLabel: {
               textStyle: {
                   color: '#666',

               },
               fontFamily: 'Arial',
               fontSize: 11,
               lineHeight: 22,
               width: '100%',
               interval: 0,
           },

           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       yAxis: {
           type: 'value',
           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross',
               label: {
                   backgroundColor: '#6a7985'
               }
           }
       },
       series: [{
           name: 'CTR',
           data: data.data.ctr,
           type: 'line',
           symbolSize: 10,
           smooth: true,
           itemStyle: {
               color: '#1dd1a1',
               barBorderColor: '#1dd1a1'
           },
           label: {
               show: true,
               position: 'top',
               color: '#1dd1a1',
               formatter: function (params) {
                   return params.value.toLocaleString('en-US') + " %";
               },
           }
       }]
   };
   var myChart1 = echarts.init(document.getElementById('adwordsMarketVietnamSearchCTRChart'));
   myChart1.setOption(option);
   new ResizeSensor($('#adwordsMarketVietnamSearchCTRChart'), () => myChart1.resize());
}
// ------------------------------------------------------------------------
const getAdwordsMarketVietnamGDN = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="6"  data-gs-max-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'22':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="getAdwordsMarketVietnamGDN">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN h-100 justify-content-center">
       <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">
       <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class=" getAdwordsMarketVietnamGDN dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamGDN" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
           <div class="d-flex no-block text-info h3 font-gg font-weight-500">
               <div class="align-self-end mr-3">
                   <i class="far fa-browser font-20"></i>
               </div>
               Quảng Cáo Google Display
           </div>

           <div class="mt-4 text-muted mb-5">
               Quảng cáo xuất hiện dưới dạng các banner ở các website đối tác của Google
               <span class="dateRange"></span>
           </div>
    

          <div class="row">
       <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
       <div class="d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
           <div class="d-flex no-block justify-content-center">
               <span class="cpc display-7 font-number"></span>
           </div>
           <div class="text-muted text-uppercase text-center mt-4">
               CPC Chi phí click trung bình
           </div>
         </div>
       </div>

   <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
       <div class="d-flex no-block align-items-center justify-content-center flex-column bg-info-2 text-info rounded shadow h-100 py-4 py-md-5">
           <div class="d-flex no-block justify-content-center">
               <span class="cpm display-7 font-number"></span>
           </div>
           <div class="text-info text-uppercase text-center mt-4 w-80">
               CPM Giá mỗi 1,000 lần hiển thị
           </div>
       </div>
   </div>

   <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
       <div class="d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
           <div class="d-flex no-block justify-content-center">
               <span class="ctr display-7 font-number"></span>
           </div>

           <div class="text-muted text-uppercase text-center mt-4">
               CTR Tỷ lệ nhấp
           </div>

       </div>
   </div>
                   
   </div>
       </div>         
       </div>
       </div>
   </div>`)
   }
   $(".GDN .cpc").html(data.cpc);
   $(".GDN .ctr").html(data.ctr);
   $(".GDN .cpm").html(data.cpm);
}
const getAdwordsMarketVietnamGDNCPC = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'22':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamGDNCPC">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamGDNCPC dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamGDNCPC" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-info h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5">
                           <div class="align-self-end pr-2">
                               <i class="far fa-browser font-16"></i>
                           </div>
                           Quảng Cáo Google Display
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            CPC Chi phí click trung bình
                           </div>
                             <div class="d-flex no-block justify-content-center mt-5">
                                   <span class="cpc display-6 font-number font-18"></span>
                               </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   $(".GDN .cpc").html(data.cpc);
   $(".GDN .ctr").html(data.ctr);
   $(".GDN .cpm").html(data.cpm);
}
const getAdwordsMarketVietnamGDNCTR = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'22':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamGDNCTR">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamGDNCTR dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamGDNCTR" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-info h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5">
                           <div class="align-self-end pr-2">
                               <i class="far fa-browser font-16"></i>
                           </div>
                           Quảng Cáo Google Display
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            CTR tỉ lệ nhấp
                           </div>
                           <div class="d-flex no-block justify-content-center mt-5">
                                   <span class="ctr display-6 font-number font-18"></span>
                           </div>
                                                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   $(".GDN .cpc").html(data.cpc);
   $(".GDN .ctr").html(data.ctr);
   $(".GDN .cpm").html(data.cpm);
}
const getAdwordsMarketVietnamGDNCPM = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'22':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamGDNCPM">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamGDNCPM dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamGDNCPM" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-info h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5">
                           <div class="align-self-end pr-2">
                               <i class="far fa-browser font-16"></i>
                           </div>
                           Quảng Cáo Google Display
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2 ">
                              CPM Giá mỗi 1,000 lần hiển thị
                           </div>
                             <div class="d-flex no-block justify-content-center mt-5">
                                   <span class=" text-info cpm display-6 font-number font-18"></span>
                               </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   $(".GDN .cpc").html(data.cpc);
   $(".GDN .ctr").html(data.ctr);
   $(".GDN .cpm").html(data.cpm);
}




const getAdwordsMarketVietnamGDNChartBar = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item"  data-gs-min-width="6"  data-gs-min-height="8" data-gs-max-height="9" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'28':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="getAdwordsMarketVietnamGDNChartBar">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN h-100 justify-content-center">
       <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">
       <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamGDNChartBar dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamGDNChartBar" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
           <div class="h4  font-gg font-weight-500">
               CPC  Google Display Theo Ngành Nghề

               <div class="adwordsMarketVietnamChart ">
                   <div id="adwordsMarketVietnamGDNCPCChart" style="width:100%; height:400px;"></div>
               </div>

               <div class="mt-4 font-12 text-muted text-center">
                   Biểu đồ chi phí trung bình cho mỗi click chuột theo ngành nghề khi quảng cáo trên Google Display
               </div>
           </div>


       </div>         
       </div>
       </div>
   </div>`)
   }
//   console.log('data chart',data)
   var option = {
       xAxis: {
           type: 'category',
           data: data.data.nganhnghe,

           axisLabel: {
               textStyle: {
                   color: '#797979',

               },
               fontFamily: 'Arial',
               fontSize: 11,
               lineHeight: 22,
               width: '100%',
               interval: 0,
           },

           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       yAxis: {
           type: 'value',
           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross',
               label: {
                   backgroundColor: '#6a7985'
               }
           }
       },
       series: [{
           name: 'CPC',
           data: data.data.cpc,
           type: 'bar',
           itemStyle: {
               color: '#54a0ff',
               barBorderColor: '#54a0ff'
           },
           label: {
               show: true,
               position: 'top',
               color: '#54a0ff',
               formatter: function (params) {
                   return params.value.toLocaleString('en-US');
               },
           },
           barMaxWidth: '55%'
       }]
   };

   var myChart = echarts.init(document.getElementById('adwordsMarketVietnamGDNCPCChart'));
   myChart.setOption(option);

   new ResizeSensor($('#adwordsMarketVietnamGDNCPCChart'), () => myChart.resize());


}

const getAdwordsMarketVietnamGDNChartLine = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item"  data-gs-min-width="6" data-gs-min-height="8" data-gs-max-height="9" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'36':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="getAdwordsMarketVietnamGDNChartLine">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN h-100 justify-content-center">
               <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">   
               <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamGDNChartLine dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamGDNChartLine" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                
                       <div class="h4  font-gg font-weight-500">
                       CTR  Google Display Theo Ngành Nghề

                       <div class="adwordsMarketVietnamChart">
                           <div id="adwordsMarketVietnamGDNCTRChart" style="width:100%; height:400px;"></div>
                       </div>

                       <div class="mt-4 font-12 text-muted text-center">
                           Biểu đồ ỷ lệ nhấp theo ngành nghề khi quảng cáo trên Google Display
                       </div>
                   </div>                          
               </div>         
       </div>
       </div>
   </div>`)
   var option = {
       xAxis: {
           type : 'category',
           data: data.data.nganhnghe,
           
           axisLabel: {						
               textStyle: {
                   color: '#797979',
                   
               },
               fontFamily: 'Arial',
               fontSize: 11,
               lineHeight:22,
               width:'100%',
               interval: 0, 
           },
           
           axisLine: {
               show: false,
               lineStyle: {
               color: '#CCC'
               },
            },
       },
       yAxis: {
           type: 'value',
            axisLine: {
               show: false,
               lineStyle: {
               color: '#CCC'
               },
            },
       },
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross',
               label: {
                   backgroundColor: '#6a7985'
               }
           }
       },
       series: [{
           name: 'CTR',
           data: data.data.ctr,
           type: 'line',
           symbolSize: 10,
           smooth: true,
           itemStyle: {
               color: '#54a0ff',
               width: 5,
           },
           
           label: {
               show: true,
               position: 'top',
               color: '#54a0ff',
               formatter: function(params) {
                   return params.value.toLocaleString('en-US')+" %";
               },
           }
       }]
   };

    var myChart1 = echarts.init(document.getElementById('adwordsMarketVietnamGDNCTRChart'));
      myChart1.setOption(option);


   new ResizeSensor($('#adwordsMarketVietnamGDNCTRChart'), () => myChart1.resize());


   }
 
}
/////////////////////////////////////////////////////////////
const getAdwordsMarketVietnamYoutube = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="6"  data-gs-max-height="6"  data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'44':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="getAdwordsMarketVietnamYoutube">
       <div class="grid-stack-item-content shadow-gg">
       <div class="Youtube justify-content-center h-100">
       <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">
       <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamYoutube  dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamYoutube" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
                            <div class="w-15 d-none">
                               <img class="img-fluid" src="../assets/images/logoyoutube.png" alt="log">
                           </div>
                           <div class="d-flex no-block text-red h3 font-gg font-weight-500">
                               <div class="align-self-end mr-3">                                   
                                   <img src="assets/images/youtube.svg" width="25px" alt="">
                               </div>
                               Quảng Cáo Youtube
                           </div>
                           <div class="mt-4 text-muted mb-5">
                               Quảng cáo xuất hiện khi bắt đầu xem video trên Youtube hoặc banner trên Youtube
                               <span class="dateRange"></span>
                           </div>
                           <div class="row">

                               <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                                   <div
                                       class="d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
                                       <div class="d-flex no-block justify-content-center">
                                           <span class="cpc display-7 font-number"></span>
                                       </div>
                                       <div class="text-muted text-uppercase text-center mt-4">
                                           CPC Chi phí click trung bình
                                       </div>
                                   </div>
                               </div>

                               <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                                   <div
                                       class="bg-danger-2 d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
                                       <div class="d-flex no-block justify-content-center">
                                           <span class="cpm display-7 font-number text-red"></span>
                                       </div>
                                       <div class="text-red text-uppercase text-center mt-4">
                                           CPM Giá mỗi 1,000 lần hiển thị
                                       </div>
                                   </div>
                               </div>

                               <div class="col-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                                   <div
                                       class="d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5">
                                       <div class="d-flex no-block justify-content-center">
                                           <span class="cpv display-7 font-number"></span>
                                       </div>
                                       <div class="text-muted text-uppercase text-center mt-4">
                                           CPV Chi phí mỗi lần xem video
                                       </div>
                                   </div>
                               </div>
                           </div>    
       </div>         
       </div>
       </div>
   </div>`)
       $(".Youtube .cpc").html(data.cpc);
       $(".Youtube .cpv").html(data.cpv);
       $(".Youtube .cpm").html(data.cpm);
   }

}
const getAdwordsMarketVietnamYoutubeCPC = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'44':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamYoutubeCPC">
       <div class="grid-stack-item-content shadow-gg">
       <div class="Youtube justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamYoutubeCPC  dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamYoutubeCPC " href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-red h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5">
                           <div class="align-self-end pr-2">
                                <img src="assets/images/youtube.svg" width="25px" alt="">
                           </div>
                           Quảng Cáo Youtube
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            CPC Chi phí click trung bình
                           </div>
                             <div class="d-flex no-block justify-content-center mt-5">
                                   <span class="cpc display-6 font-number font-18"></span>
                               </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   $(".Youtube .cpc").html(data.cpc);
 
}
const getAdwordsMarketVietnamYoutubeCPM = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'44':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamYoutubeCPM">
       <div class="grid-stack-item-content shadow-gg">
       <div class="Youtube justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamYoutubeCPM  dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamYoutubeCPM " href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-red h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5">
                           <div class="align-self-end pr-2">
                                <img src="assets/images/youtube.svg" width="25px" alt="">
                           </div>
                           Quảng Cáo Youtube
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            CPM Giá mỗi 1,000 lần hiển thị
                           </div>
                             <div class="d-flex no-block justify-content-center mt-5">
                                   <span class=" text-red cpm display-6 font-number font-18"></span>
                               </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   $(".Youtube .cpv").html(data.cpv);
   $(".Youtube .cpm").html(data.cpm);
 
}
const getAdwordsMarketVietnamYoutubeCPV = (task,data,startDate,endDate,check,object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="4" data-gs-max-height="6" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'44':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task="getAdwordsMarketVietnamYoutubeCPV">
       <div class="grid-stack-item-content shadow-gg">
       <div class="Youtube justify-content-center h-100">                                            
                           <div class=" bg-white rounded shadow h-100 overflow-hidden">
                           <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamYoutubeCPV  dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamYoutubeCPV " href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>                            
                           <div class="d-flex no-block text-red h3 font-gg font-weight-500 mt-4 ml-2 font-18 pl-5">
                           <div class="align-self-end pr-2">
                                <img src="assets/images/youtube.svg" width="25px" alt="">
                           </div>
                           Quảng Cáo Youtube
                            </div>
                            <div class="text-muted text-uppercase text-center mt-2">
                            CPM chi phí mỗi lần xem video
                           </div>
                             <div class="d-flex no-block justify-content-center mt-5">
                                   <span class="cpv display-6 font-number font-18"></span>
                               </div>
                               
                              
                           </div>
       
          </div>                                    
       </div>
   </div>`)
   }
//    console.log('sss',data);
   $(".Youtube .cpv").html(data.cpv);
   $(".Youtube .cpm").html(data.cpm);
 
}


const getAdwordsMarketVietnamYoutubeChartBar = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item" data-gs-min-width="6" data-gs-min-height="8" data-gs-max-height="9" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'50':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="getAdwordsMarketVietnamYoutubeChartBar">
       <div class="grid-stack-item-content shadow-gg">
       <div class="GDN h-100 justify-content-center">
       <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">
       <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamYoutubeChartBar dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamYoutubeChartBar" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
       <div class="h4  font-gg font-weight-500">
       CPM Youtube Theo Ngành Nghề
       <div class="adwordsMarketVietnamChart ">
           <div id="adwordsMarketVietnamYoutubeCPMChart" style="width:100%; height:400px;">
           </div>
       </div>

       <div class="mt-4 font-12 text-muted text-center">
           Biểu đồ chi phí trung bình cho 1,000 lần hiển thị quảng cáo xem theo ngành nghề khi quảng cáo trên Youtube
       </div>
   </div>
       </div>         
       </div>
       </div>
   </div>`)
   }
   var option = {
       xAxis: {
           type: 'category',
           data: data.data.nganhnghe,

           axisLabel: {
               textStyle: {
                   color: '#797979',

               },
               fontFamily: 'Arial',
               fontSize: 11,
               lineHeight: 22,
               width: '100%',
               interval: 0,
           },

           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
       },
       yAxis: {
           type: 'value',
           axisLine: {
               show: false,
               lineStyle: {
                   color: '#CCC'
               },
           },
           axisLabel: {
               color: '#797979',
           },
       },
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross',
               label: {
                   backgroundColor: '#6a7985'
               }
           }
       },
       series: [{
           name: 'CPM',
           data: data.data.cpm,
           type: 'bar',
           itemStyle: {
               color: '#ff4d4d',
               barBorderColor: '#ff4d4d'
           },
           label: {
               show: true,
               position: 'top',
               color: '#ff4d4d',
               formatter: function (params) {
                   return params.value.toLocaleString('en-US');
               },
           },
           barMaxWidth: '55%'
       }]
   };

   var myChart = echarts.init(document.getElementById('adwordsMarketVietnamYoutubeCPMChart'));
   myChart.setOption(option);
   new ResizeSensor($('#adwordsMarketVietnamYoutubeCPMChart'), () => myChart.resize());



}


const getAdwordsMarketVietnamYoutubeChartLine = (task,data, startDate, endDate, check, object) => {
   if (check == "true") {
       $(".grid-stack").append(`
       <div class="grid-stack-item"  data-gs-min-width="6" data-gs-min-height="8" data-gs-max-height="9"   data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'58':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="getAdwordsMarketVietnamYoutubeChartLine">
       <div class="grid-stack-item-content shadow-gg">
       <div class="Youtube h-100 justify-content-center">
               <div class="bg-white px-4 px-md-5 py-4 py-md-5 rounded shadow-sm h-100">           
               <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getAdwordsMarketVietnamYoutubeChartLine dropdown-item similarReloadTask text-muted" data-task="getAdwordsMarketVietnamYoutubeChartLine" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
               <div class="h4 font-gg font-weight-500">
               CPV Youtube Theo Ngành Nghề

               <div class="adwordsMarketVietnamChart">
                   <div id="adwordsMarketVietnamYoutubeCPVChart" style="width:100%; height:400px;">
                   </div>
               </div>

               <div class="mt-4 font-12 text-muted text-center">
                   Biểu đồ CPV on Youtube ads by industry
               </div>
               
                 </div>
                             
               </div>         
       </div>
       </div>
   </div>`)
//    console.log('data',data);
  
   var option = { 
       xAxis: {
           type : 'category',
           data: data.data.nganhnghe,
           
           axisLabel: {						
               textStyle: {
                   color: '#797979',
                   
               },
               fontFamily: 'Arial',
               fontSize: 11,
               lineHeight:22,
               width:'100%',
               interval: 0, 
           },
           
           axisLine: {
               show: false,
               lineStyle: {
               color: '#CCC'
               },
            },
       },
       yAxis: {
           type: 'value',
            axisLine: {
               show: false,
               lineStyle: {
               color: '#CCC'
               },
            },
            axisLabel: {
               color:'#797979',
           },
       },
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross',
               label: {
                   backgroundColor: '#6a7985'
               }
           }
       },
       series: [{
           name: 'CPV',
           data: data.data.cpv,
           type: 'line',
           symbolSize: 10,
           smooth: true,
           itemStyle: {
               color: '#ff4d4d',
               barBorderColor: '#ff4d4d'
           },
           
           label: {
               show: true,
               position: 'top',
               color: '#ff4d4d',
               formatter: function(params) {
                   return params.value.toLocaleString('en-US');
               },
           }, 
       }]
   };

   var myChart1 = echarts.init(document.getElementById('adwordsMarketVietnamYoutubeCPVChart'));
   myChart1.setOption(option);
   new ResizeSensor($('#adwordsMarketVietnamYoutubeCPVChart'), () => myChart1.resize());
   }

}

export default api;