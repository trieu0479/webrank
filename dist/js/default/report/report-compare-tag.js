const api = async (task,keywords1,keywords2,check,object,active) => {
    console.log(object);
    
    let myarr = [{
        keywords: keywords1
    }, {
        keywords: keywords2
    }]

    console.log("myarr", myarr);
    let taskName = task;
    if (task == "getBidForecast__Impressions" || task == "getBidForecast__Click" || task == "getBidForecast__CPC" || task == "getBidForecast__Cost") {
        task = "getBidForecast";
    }
    if (task == "getKeywordsSuggestionV1__History__PC" || task == "getKeywordsSuggestionV1__History__Mobile" || task == "Chart__Circle") {
        task = "getKeywordsSuggestionV1"
    }

    const get_data = myarr.map(async (ele, index) => {
        return await $.get(`//localapi.trazk.com/keywords/keywords.v1.php?task=${task}&keywords=${ele.keywords}&isLogin=true&lang=vn`);
    });

    return Promise.all(get_data).then(data => {
        // console.log(data);
        switch (taskName) {
            case "getBidForecast__Impressions":
                getBidForecast__Impressions(task,data,keywords1,keywords2,check,object,active);
                break;
            case "getBidForecast__Click":
                getBidForecast__Click(task,data,keywords1,keywords2,check,object,active);
                break;
            case "getBidForecast__CPC":
                getBidForecast__CPC(task,data,keywords1,keywords2,check,object,active);
                break;
            case "getBidForecast__Cost":
                getBidForecast__Cost(task,data,keywords1,keywords2,check,object,active);
                break;
            case "getKeywordsSuggestionV1__History__PC":
                getKeywordsSuggestionV1__History__PC(task,data,keywords1,keywords2,check,object,active)
                break;
            case "getKeywordsSuggestionV1__History__Mobile":
                getKeywordsSuggestionV1__History__Mobile(task,data,keywords1,keywords2,check,object,active)
                break;
            case "Chart__Circle":
                Chart__Circle(task,data,keywords1,keywords2,check,object,active);
                break;
            case "Phan__Tich__Seo":
                Phan__Tich__Seo(task,data,keywords1,keywords2,check,object,active);
                break;
            case "Phan__Tich__Seo_Chart_A":
                Phan__Tich__Seo_Chart_A(task,data,keywords1,keywords2,check,object,active);
                break;
            case "Phan__Tich__Seo_Chart_B":
                Phan__Tich__Seo_Chart_B(task,data,keywords1,keywords2,check,object,active);
                break;
        }
        return true;
    })

}
const key = url.searchParams.get("key");
const getBidForecast__Impressions = (task, data, keywords1, keywords2,check,object,active ) => {
    if(active == "true") {
        $("#step-loader").append(`
          <div class="test-impress d-flex flex-column" style="" >
            <div class="d-flex">
                <div id="getBidForecast--Impression" class="py-4 pl-4 text-success flex-grow-1">
                    <span class="font-gg font-14 text-muted mr-auto">Trung bình tìm kiếm</span>
                    <div class="key-1 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                </div>
                <div id="getBidForecast--Impression2" class="py-4 pl-4 text-success flex-grow-1">
                <span class="font-gg font-14 text-muted mr-auto">Trung bình tìm kiếm</span>
                <div class="key-2 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                </div>                               
            </div>                 
            <div id="getBidForecastImpression--eCharts"style="background: rgb(245, 249, 253)!important;width:100%;height:350px" class="d-flex flex-colum"></div>  
          </div>  
        `)
    }
    if(check == "true") {
    $(".grid-stack").append(`   
        <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}"  data-task ="getBidForecast__Impressions">
            <div class="grid-stack-item-content shadow-gg">
                <div class="bg-white border-top-success align-items-center rounded-sm h-100" style="overflow:hidden">
                    <div class="dropdown-wrapper d-flex justify-content-end">
                        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="getBidForecast__Impressions dropdown-item similarReloadTask text-muted" data-task="getBidForecast__Impressions" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div id="getBidForecast--Impression" class="py-4 pl-4 text-success flex-grow-1">
                            <span class="font-gg font-14 text-muted mr-auto">Trung bình tìm kiếm</span>
                            <div class="key-1 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                        </div>
                        <div id="getBidForecast--Impression2" class="py-4 pl-4 text-success flex-grow-1">
                        <span class="font-gg font-14 text-muted mr-auto">Trung bình tìm kiếm</span>
                        <div class="key-2 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                        </div>                               
                    </div>                 
                    <div id="getBidForecastImpression--eCharts"  style="width:auto;height:350px"></div>                
                </div>
            </div>
        </div>
    `);
    }

    console.log(data)
    let impressions_1 = data[0].data.overview.impressions;
    let impressions_2 = data[1].data.overview.impressions;

    $(".key-1").text(numeral(impressions_1).format("0,0"));
    $(".key-2").text(numeral(impressions_2).format("0,0"));

    let ele = document.getElementById('getBidForecastImpression--eCharts');

    let option = {
        legend: {
            right: "10%"
        },
        tooltip: {},
        dataset: {
            source: [
                ['product', keywords1, keywords2],
                ['Máy tính bảng', data[0].data.device.impressions.tablet, data[1].data.device.impressions.tablet],
                ['Máy tính', data[0].data.device.impressions.pc, data[1].data.device.impressions.pc],
                ['Điện thoại', data[0].data.device.impressions.mobile, data[0].data.device.impressions.mobile],

            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#ccc"
                },
                fontFamily: 'Arial',
                formatter: (value, index) => (value = numeral(value).format("0a")),
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#CCC'
                },
            },
        },

        series: [{
                type: 'bar',
                color: "#f2a695"
            },
            {
                type: 'bar',
                color: "#61a0a8"
            },

        ]
    };
    let myChart = echarts.init(ele);

    myChart.setOption(option);

    new ResizeSensor(ele, function () {
        myChart.resize();
    });

    //cái nay js mà


}
const getBidForecast__Click = (task, data, keywords1, keywords2,check,object,active ) => {
    if(active == "true") {
        $("#step-loader").append(`
          <div class="d-flex flex-column">
                <div class="d-flex">        
                <div id="getBidForecast__Click" class="py-4 pl-4 text-success flex-grow-1">
                    <span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
                    <div class="clicks-1 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                </div>
                <div id="getBidForecast__Click2" class="py-4 pl-4 text-success flex-grow-1">
                    <span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
                    <div class="clicks-2 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                </div>                               
            </div>                 
            <div id="getBidForecast__Click--eCharts"  style="width:100%;height:350px;background: rgb(245, 249, 253);"></div> 
        </div>  
        `)
    }
    if(check == "true") {
    $(".grid-stack").append(`   
    <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="6" data-gs-x="${(!key)?'9':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}" data-task ="getBidForecast__Click">
    <div class="grid-stack-item-content shadow-gg">
    <div class="bg-white border-top-success align-items-center rounded-sm h-100" style="overflow:hidden">
        <div class="dropdown-wrapper d-flex justify-content-end">
            <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
            </button>
            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a class="getBidForecast__Click dropdown-item similarReloadTask text-muted" data-task="getBidForecast__Click" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
            </div>
        </div>

        <div class="d-flex">
        
            <div id="getBidForecast__Click" class="py-4 pl-4 text-success flex-grow-1">
                <span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
                <div class="clicks-1 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
            </div>
            <div id="getBidForecast__Click2" class="py-4 pl-4 text-success flex-grow-1">
               <span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
               <div class="clicks-2 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
            </div>                               
        </div>                 
        <div id="getBidForecast__Click--eCharts"  style="width:auto;height:350px"></div>                    
</div>
</div>
</div>
`);
    }

    console.log(data)
    let impressions_1 = data[0].data.overview.clicks;
    let impressions_2 = data[1].data.overview.clicks;

    $(".clicks-1").text(numeral(impressions_1).format("0,0"));
    $(".clicks-2").text(numeral(impressions_2).format("0,0"));



    let ele = document.getElementById('getBidForecast__Click--eCharts');
    let option = {
        legend: {
            right: "10%"
        },
        tooltip: {},
        dataset: {
            source: [
                ['product', keywords1, keywords2],
                ['Máy tính bảng', data[0].data.device.clicks.tablet, data[1].data.device.clicks.tablet],
                ['Máy tính', data[0].data.device.clicks.pc, data[1].data.device.clicks.pc],
                ['Điện thoại', data[0].data.device.clicks.mobile, data[0].data.device.clicks.mobile],

            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#ccc"
                },
                fontFamily: 'Arial',
                formatter: (value, index) => (value = numeral(value).format("0a")),
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#CCC'
                },
            },
        },

        series:  [{
            type: 'bar',
            color: "#f2a695"
        },
        {
            type: 'bar',
            color: "#61a0a8"
        },

    ]
    };
    let myChart = echarts.init(ele);

    myChart.setOption(option);

    new ResizeSensor(ele, function () {
        myChart.resize();
    });


}
const getBidForecast__CPC = (task, data, keywords1, keywords2,check,object,active ) => {
    if(active == "true") {
        $("#step-loader").append(`
          <div class="d-flex flex-column">
            <div class="d-flex">                
                <div id="getBidForecast__CPC" class="py-4 pl-4 text-success flex-grow-1">
                    <span class="font-gg font-14 text-muted mr-auto">Chi phí 1 nhấp chuột</span>
                    <div class="cpc-1 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                </div>
                <div id="getBidForecast__CPC2" class="py-4 pl-4 text-success flex-grow-1">
                    <span class="font-gg font-14 text-muted mr-auto">Chi phí 1 nhấp chuột</span>
                    <div class="cpc-2 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
                </div>                               
            </div>                 
            <div id="getBidForecast__CPC--eCharts" style="width:100%;height:350px;background: rgb(245, 249, 253);"></div> 
        </div>  
        `)
    }

    if(check == "true") {
    console.log('data', data);
    $(".grid-stack").append(`   
    <div class="grid-stack-item" data-gs-min-width="4" data-gs-min-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'7':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}" style ="min-width:352px!important";min-height:140px!important" data-task ="getBidForecast__CPC">
    <div class="grid-stack-item-content shadow-gg">
    <div class="bg-white border-top-success align-items-center rounded-sm h-100" style="overflow:hidden">
        <div class="dropdown-wrapper d-flex justify-content-end">
            <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
            </button>
            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a class="getBidForecast__CPC dropdown-item similarReloadTask text-muted" data-task="getBidForecast__CPC" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
            </div>
        </div>

        <div class="d-flex">
        
            <div id="getBidForecast__CPC" class="py-4 pl-4 text-success flex-grow-1">
                <span class="font-gg font-14 text-muted mr-auto">Chi phí 1 nhấp chuột</span>
                <div class="cpc-1 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
            </div>
            <div id="getBidForecast__CPC2" class="py-4 pl-4 text-success flex-grow-1">
               <span class="font-gg font-14 text-muted mr-auto">Chi phí 1 nhấp chuột</span>
               <div class="cpc-2 display-8 font-gg counter ml-auto mt-2" style="color:#2ed0a2"></div>
            </div>                               
        </div>                 
        <div id="getBidForecast__CPC--eCharts"  style="width:auto;height:350px"></div>                    
</div>
</div>
</div>
`);
    }
    console.log(data)
    let impressions_1 = data[0].data.overview.avg_cpc;
    let impressions_2 = data[1].data.overview.avg_cpc;

    $(".cpc-1").text(numeral(impressions_1).format("0,0"));
    $(".cpc-2").text(numeral(impressions_2).format("0,0"));



    let ele = document.getElementById('getBidForecast__CPC--eCharts');


    let option = {
        legend: {
            right: "10%"
        },
        tooltip: {},
        dataset: {
            source: [
                ['product', keywords1, keywords2],
                ['Máy tính bảng', data[0].data.device.cost_per_click.tablet, data[1].data.device.cost_per_click.tablet],
                ['Máy tính', data[0].data.device.cost_per_click.pc, data[1].data.device.cost_per_click.pc],
                ['Điện thoại', data[0].data.device.cost_per_click.mobile, data[0].data.device.cost_per_click.mobile],

            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#ccc"
                },
                fontFamily: 'Arial',
                formatter: (value, index) => (value = numeral(value).format("0a")),
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#CCC'
                },
            },
        },

        series:  [{
            type: 'bar',
            color: "#f2a695"
        },
        {
            type: 'bar',
            color: "#61a0a8"
        },

    ]
    };
    let myChart = echarts.init(ele);

    myChart.setOption(option);

    new ResizeSensor(ele, function () {
        myChart.resize();
    });


}
const getBidForecast__Cost = (task, data, keywords1, keywords2,check,object,active ) => {
    if(active == "true") {
        $("#step-loader").append(`
          <div class="d-flex flex-column">
          <div class="d-flex">
        
                    <div id="getBidForecast__Cost" class="py-4 pl-4 text-white flex-grow-1">
                        <span class="font-gg font-14 text-muted mr-auto">Chi phí Quảng cáo Adwords</span>
                        <div class="cost-1 display-8 font-gg counter ml-auto mt-2 text-success" style="color:#2ed0a2!important" ></div>
                    </div>
                    <div id="getBidForecast__Cost2" class="py-4 pl-4 text-white flex-grow-1">
                        <span class="font-gg font-14 text-muted mr-auto">Chi phí Quảng cáo Adwords</span>
                        <div class="cost-2 display-8 font-gg counter ml-auto mt-2 text-success" style="color:#2ed0a2!important"></div>
                    </div>                               
                </div>                 
                <div id="getBidForecast__Cost--eCharts" style="width:100%;height:350px;background: rgb(245, 249, 253);"></div>   
        </div>  
        `)
    } 




    if(check == "true") {
    $(".grid-stack").append(`   
    <div class="grid-stack-item"  data-gs-min-width="4" data-gs-min-height="5" data-gs-x="${(!key)?'6':(object['gs-x'])}" data-gs-y="${(!key)?'7':(object['gs-y'])}" data-gs-width="${(!key)?'6':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}" style ="min-width:352px!important";min-height:140px!important" data-task ="getBidForecast__Cost">
    <div class="grid-stack-item-content shadow-gg">
    <div class="bg-white border-top-success flex-column rounded-sm h-100" style="overflow:hidden">
        <div class="dropdown-wrapper d-flex justify-content-end">
            <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
            </button>
            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a class="getBidForecast__Cost dropdown-item similarReloadTask text-muted" data-task="getBidForecast__Cost" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
            </div>
        </div>

        <div class="d-flex">
        
            <div id="getBidForecast__Cost" class="py-4 pl-4 text-white flex-grow-1">
                <span class="font-gg font-14 text-muted mr-auto">Chi phí Quảng cáo Adwords</span>
                <div class="cost-1 display-8 font-gg counter ml-auto mt-2 text-success" style="color:#2ed0a2!important" ></div>
            </div>
            <div id="getBidForecast__Cost2" class="py-4 pl-4 text-white flex-grow-1">
               <span class="font-gg font-14 text-muted mr-auto">Chi phí Quảng cáo Adwords</span>
               <div class="cost-2 display-8 font-gg counter ml-auto mt-2 text-success" style="color:#2ed0a2!important"></div>
            </div>                               
        </div>                 
        <div id="getBidForecast__Cost--eCharts" style="width:auto;height:350px"></div>                    
</div>
</div>
</div>
`); }

    let impressions_1 = data[0].data.overview.cost;
    let impressions_2 = data[1].data.overview.cost;

    $(".cost-1").text(numeral(impressions_1).format("0,0"));
    $(".cost-2").text(numeral(impressions_2).format("0,0"));



    let ele = document.getElementById('getBidForecast__Cost--eCharts');


    let option = {
        legend: {
            right: "10%"
        },
        tooltip: {},
        dataset: {
            source: [
                ['product', keywords1, keywords2],
                ['Máy tính bảng', data[0].data.device.cost.tablet, data[1].data.device.cost.tablet],
                ['Máy tính', data[0].data.device.cost.pc, data[1].data.device.cost.pc],
                ['Điện thoại', data[0].data.device.cost.mobile, data[0].data.device.cost.mobile],

            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#ccc"
                },
                fontFamily: 'Arial',
                formatter: (value, index) => (value = numeral(value).format("0a")),
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ccc'
                },
            },
        },

        series:  [{
            type: 'bar',
            color: "#f2a695"
        },
        {
            type: 'bar',
            color: "#61a0a8"
        
    },
    
    ]
    };
    let myChart = echarts.init(ele);

    myChart.setOption(option);

    new ResizeSensor(ele, function () {
        myChart.resize();
    });


}
const getKeywordsSuggestionV1__History__PC = (task, data, keywords1, keywords2,check,object,active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div class="d-flex flex-column">
           <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
           <span class="text-dark font-gg font-16"> Lịch sử truy cập 12 tháng của từ khoá liên quan
               "<strong class="font-gg font-16 text-success" style="color:#2ed0a2!important">${keywords1}</strong>" vs "<strong class="font-gg font-16" style="color:red ">${keywords2}</strong>"theo thiết bị máy tính</span>
          </div>
         <div id="getKeywordsSuggestionV1--eCharts" style="width:100%;height:350px;background: rgb(245, 249, 253);"></div>
        </div>
        `)
    } 
   
  



    if(check == "true") {
    $(".grid-stack").append(`<div class="grid-stack-item my-4" data-gs-min-width="6" data-gs-min-height="6" data-gs-max-height="7" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'14':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height='${(!key)?'7':(object['gs-height'])}' data-task="getKeywordsSuggestionV1__History__PC">
 <div class="grid-stack-item-content shadow-gg">
     <div id="getKeywordsSuggestionV1--eCharts_wrapper" class="d-flex no-block bg-white flex-column rounded-sm h-100" style="overflow:hidden">
             <div class="dropdown-wrapper d-flex justify-content-end">
                 <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="far fa-ellipsis-h" style="color: black;"></i>
                 </button>
                 <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                     <a class="getKeywordsSuggestionV1__History__PC dropdown-item similarReloadTask text-muted" data-task="getKeywordsSuggestionV1__History__PC" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                     <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                 </div>
             </div>
         <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
             <span class="text-dark font-gg font-16"> Lịch sử truy cập 12 tháng của từ khoá liên quan
                 "<strong class="font-gg font-16 text-success" style="color:#2ed0a2!important">${keywords1}</strong>" vs "<strong class="font-gg font-16" style="color:red ">${keywords2}</strong>"theo thiết bị máy tính</span>
         </div>
         <div id="getKeywordsSuggestionV1--eCharts" class="get__pc" style="width:auto;height:350px"></div>
     </div>
 </div>
</div>`) }
if (data[0].data.traffic==null || data[0].data.traffic==null ) {
    $('div#getKeywordsSuggestionV1--eCharts').addClass('empty-state');
  }

    let dataChartA = {
        keys: [],
        values: {
            pc: []
        }
    };
    let dataChartB = {
        keys: [],
        values: {
            pc: []
        }
    };
    console.log('ss', data[0].data);
    if(data[0].data.traffic ==null) {return true}
    data[0].data.traffic.forEach((item) => {
        dataChartA.keys.push(item.time);
        dataChartA.values.pc.push(item.pcImpression);
    })
    data[1].data.traffic.forEach((item) => {
        dataChartB.keys.push(item.time);
        dataChartB.values.pc.push(item.pcImpression);
    })

    // -------------------------
    var option = {
        xAxis: {
            type: 'category',
            data: dataChartA.keys,

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
        legend: {
            data: [`${data[0].keywords}`, `${data[1].keywords}`],
            right: "15%"
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
                name: `${data[0].keywords}`,
                data: dataChartA.values.pc,
                type: 'line',
                symbolSize: 10,
                smooth: true,
                itemStyle: {
                    color: '#00c292',
                    barBorderColor: '#ff4d4d'
                },

            },
            {

                name: `${data[1].keywords}`,
                data: dataChartB.values.pc,
                type: 'line',
                symbolSize: 10,
                smooth: true,
                itemStyle: {
                    color: 'red',
                    barBorderColor: '#ff4d4d'
                }


            }
        ]
    };

    var myChart1 = echarts.init(document.getElementById('getKeywordsSuggestionV1--eCharts'));
    myChart1.setOption(option);
    new ResizeSensor($('#getKeywordsSuggestionV1--eCharts'), () => myChart1.resize());


}
const getKeywordsSuggestionV1__History__Mobile = (task, data, keywords1, keywords2,check,object,active) => {

    if(active == "true") {
        $("#step-loader").append(`
        <div class="d-flex flex-column">
                <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
                <span class="text-dark font-gg font-16"> Lịch sử truy cập 12 tháng của từ khoá liên quan
                    "<strong class="font-gg font-16" style="color:#7bc0e4">${keywords1}</strong>" vs "<strong class="font-gg font-16" style="color:#e377b8">${keywords2}</strong>"theo thiết bị di động</span>
            </div>
            <div id="getKeywordsSuggestionV1--eCharts--mobile" class="" style="width:100%;height:350px;background: rgb(245, 249, 253);"></div>
        </div>
        `)
    } 

    if(check == "true") {
    $(".grid-stack").append(`<div class="grid-stack-item my-4" data-gs-min-width="6" data-gs-min-height="6" data-gs-max-height="7" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'21':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height='${(!key)?'7':(object['gs-height'])}' data-task="getKeywordsSuggestionV1__History__Mobile">
 <div class="grid-stack-item-content shadow-gg">
     <div id="getKeywordsSuggestionV1--eCharts_wrapper" class="d-flex no-block bg-white flex-column rounded-sm h-100" style="overflow:hidden">
             <div class="dropdown-wrapper d-flex justify-content-end">
                 <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="far fa-ellipsis-h" style="color: black;"></i>
                 </button>
                 <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                     <a class="getKeywordsSuggestionV1__History__Mobile dropdown-item similarReloadTask text-muted" data-task="getKeywordsSuggestionV1__History__Mobile" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                     <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                 </div>
             </div>
         <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
             <span class="text-dark font-gg font-16"> Lịch sử truy cập 12 tháng của từ khoá liên quan
                 "<strong class="font-gg font-16" style="color:#7bc0e4">${keywords1}</strong>" vs "<strong class="font-gg font-16" style="color:#e377b8">${keywords2}</strong>"theo thiết bị di động</span>
         </div>
         <div id="getKeywordsSuggestionV1--eCharts--mobile" class="" style="width:auto;height:350px"></div>
     </div>
 </div>
</div>`) }
if (data[0].data.traffic==null || data[0].data.traffic==null ) {
    $('div#getKeywordsSuggestionV1--eCharts--mobile').addClass('empty-state');
  }
    let dataChartA = {
        keys: [],
        values: {
            mobile: []
        }
    }
    let dataChartB = {
        keys: [],
        values: {
            mobile: []
        }
    }
     if(!data[0].data.traffic) {
         return true;
     }
     if(!data[1].data.traffic) {
         return true;
     }
    data[0].data.traffic.forEach(item => {
        dataChartA.keys.push(item.time);
        dataChartA.values.mobile.push(item.mobileImpression)
    })

    data[1].data.traffic.forEach(item => {
        dataChartB.keys.push(item.time);
        dataChartB.values.mobile.push(item.mobileImpression)
    })
    var option = {
        xAxis: {
            type: 'category',
            data: dataChartA.keys,

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
        legend: {
            data: [`${data[0].keywords}`, `${data[1].keywords}`],
            right: "15%"
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
                name: `${data[0].keywords}`,
                data: dataChartA.values.mobile,
                type: 'line',
                symbolSize: 10,
                smooth: true,
                itemStyle: {
                    color: '#7bc0e4',
                    barBorderColor: '#ff4d4d'
                },

            },
            {

                name: `${data[1].keywords}`,
                data: dataChartB.values.mobile,
                type: 'line',
                symbolSize: 10,
                smooth: true,
                itemStyle: {
                    color: '#e377b8',
                    barBorderColor: '#ff4d4d'
                }


            }
        ]
    };

    var myChart1 = echarts.init(document.getElementById('getKeywordsSuggestionV1--eCharts--mobile'));
    myChart1.setOption(option);
    new ResizeSensor($('#getKeywordsSuggestionV1--eCharts--mobile'), () => myChart1.resize());

}
const renderSparkline = (task) => { //task ở đây là id cha
    $(`#${task} .sparkline`).each((index, item) => {
        $(item).sparkline($(item).data('sparkline'), {
            type: $(item).data('sparktype') || 'bar',
            width: '50px',
            height: '16px',
            spotColor: '',
            minSpotColor: '',
            maxSpotColor: '',
            highlightSpotColor: '',
            // tooltipFormatter: (sparkline, options, fields) =>
            //     `<span style="color: ${fields.color}">&#9679;</span> Tháng ${++fields.x}: ${numeral(fields.y).format(0,0)}`,
            barColor: '#74b9ff',
            sliceColors: ['#1abc9c', '#e74c3c'],
            fillColor: 'rgba(61, 133, 222, 0.3)',
        });
    });
}
const Chart__Circle = (task, data, keywords1, keywords2,check,object,active) => {
          
    if(active == "true") {
        $("#step-loader").append(`
        <div class="d-flex flex-column">
        <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
        <div class="d-flex no-block">
            <div class="align-self-center mr-3">
                <i class="fad fa-money-check text-info font30"></i>
            </div>
            <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                PHÂN TÍCH SEM
            </div>

        </div>
        <div class="mt-3 text-muted mb-5 font-16">
            Nâng cao thứ hạng Website trên các công cụ tìm kiếm
        </div>
        <div class="mt-2 text-muted mb-5 text-dark font-gg font-14 font-weight-500 ml-2">
        So sánh "Độ khó" giữa 2 từ khóa <strong class="font-gg font-14" style="color:#91c7ae">${keywords1}</strong> vs <strong class="font-gg font-14" style="color:#d7ab82">${keywords2}</strong>
       </div>             
     <div id='getKeywordsSuggestionV1_2' style="width:100%;height:300px;background: rgb(245, 249, 253);"></div>
</div>      

         
    <div class="row">                           
    <div class="col-12 col-xl-12">                                
        <div class="w-100 p-0 p-md-4">
            <table id="Circle_Table" class="table" style="width:100%;">
                <thead>                           
                    <tr>                                    
                        <th class="text-muted font-10" style="font-size:12px!important">Từ khóa</th>
                        <th class="text-center text-muted font-10" style="font-size:12px!important">Giá đấu thầu trang cao nhất</th>
                        <th class="text-muted font-10" style="font-size:12px!important">Giá đấu thầu trang thấp nhất</th>
                        <th class="text-muted font-10" style="font-size:12px!important">Số lần tìm kiếm trung bình</th>                                    
                    </tr>
                </thead>
               <tbody class="tbody_Circle_Table"></tbody> 
            </table>
        </div>
    </div>
</div>

        </div>
        `)
    }     
     
    if(check == "true") {
        console.log('abc');
        
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'28':(object['gs-y'])}" data-gs-width="${(!key)?'8':(object['gs-width'])}" data-gs-height="${(!key)?'10':(object['gs-height'])}" data-task="Chart__Circle" data-gs-min-width="6" data-gs-min-height ="10" data-gs-max-height ="14">
    <div class="grid-stack-item-content shadow-gg">
    <div class="d-flex no-block bg-white flex-column rounded-sm h-100 chart_circle_rong" style="overflow:hidden">
    
    <div class="dropdown-wrapper d-flex justify-content-end ">
        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-ellipsis-h" style="color: black"></i>
        </button>
        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="Chart__Circle dropdown-item similarReloadTask text-muted" data-task="Chart__Circle" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
        </div>
    </div>
    <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
                    <div class="d-flex no-block">
                        <div class="align-self-center mr-3">
                            <i class="fad fa-money-check text-info font30"></i>
                        </div>
                        <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                            PHÂN TÍCH SEM
                        </div>
        
                    </div>
                    <div class="mt-3 text-muted mb-5 font-16">
                        Nâng cao thứ hạng Website trên các công cụ tìm kiếm
                    </div>
                    <div class="mt-2 text-muted mb-5 text-dark font-gg font-14 font-weight-500 ml-2">
                    So sánh "Độ khó" giữa 2 từ khóa <strong class="font-gg font-14" style="color:#89c3f8">${keywords1}</strong> vs <strong class="font-gg font-14" style="color:#ffb6a3">${keywords2}</strong>
                   </div>             
                 <div id='getKeywordsSuggestionV1_2' style="width:100%;height:300px"></div>
    </div>               

    <div class="row">                           
                <div class="col-12 col-xl-12">                                
                    <div class="w-100 p-0 p-md-4">
                        <table id="Circle_Table" class="table" style="width:100%;">
                            <thead>                           
                                <tr>                                    
                                    <th class="text-muted font-10" style="font-size:12px!important">Từ khóa</th>
                                    <th class="text-center text-muted font-10" style="font-size:12px!important">Giá đấu thầu trang cao nhất</th>
                                    <th class="text-muted font-10" style="font-size:12px!important">Giá đấu thầu trang thấp nhất</th>
                                    <th class="text-muted font-10" style="font-size:12px!important">Số lần tìm kiếm trung bình</th>                                    
                                </tr>
                            </thead>
                           <tbody class="tbody_Circle_Table"></tbody> 
                        </table>
                    </div>
                </div>
        </div>

    </div>
    </div></div> `) }
    if (check =="false") {
        $('.tbody_Circle_Table').html('')
    }

     if(data[0].data.traffic ==null || data[1].data.traffic==null) {
       $('div.chart_circle_rong').addClass('empty-state');
    }
     if(!data[0].data.traffic || !data[1].data.traffic) {
          return true;
    }
    var option = {
        color:[  '#89c3f8','#ffb6a3'] ,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            x: 'right',
            data: [`${data[0].keywords}`, `${data[1].keywords}`]
        },
        series: [{
            name: [`Độ khó của từ khóa`],
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{text|{b}}\n{value|{d}%}',
                    rich: {
                        text: {
                            color: "#666",
                            fontSize: 12,
                            fontFamily: 'Arial',
                            align: 'center',
                            verticalAlign: 'middle',
                            padding: 5
                        },
                        value: {
                            color: "#8693F3",
                            fontSize: 24,
                            align: 'center',
                            verticalAlign: 'middle',
                        },
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 46,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: data[0].data.keywords[0].dokho == null ? '0' : data[0].data.keywords[0].dokho,
                    name: `${data[0].keywords}`
                },
                {
                    value: data[1].data.keywords[0].dokho == null ? '0' : data[1].data.keywords[0].dokho,
                    name: `${data[1].keywords}`
                },

            ]
        }]
    };
    var myChart1 = echarts.init(document.getElementById('getKeywordsSuggestionV1_2'));
    myChart1.setOption(option);
    new ResizeSensor($('#getKeywordsSuggestionV1_2'), () => {
        myChart1.resize()
        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        }, 1000);
        setTimeout(function () {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function (params) {
                if (params.name == dataChart[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function (params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);


    });

    let call_api_0 = data[0].data.keywords[0];
    let call_api_1 = data[1].data.keywords[0];
    // -------------------------------------key word--0-------------------------------------
    let res = `href="javascript:void(0)"class="changeURL font-12"  data-input="${call_api_0.keyword}" data-keyword="${call_api_0.keyword}"`;
    let sparkline = `<div class="d-flex no-block flex-row"> 
   <a data-type="keyword" ${res}">                                             
     ${call_api_0.keyword}
   </a>       
   <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${call_api_0.lichsutimkiemtrungbinh ? Object.values(call_api_0.lichsutimkiemtrungbinh) : [] }]"></div>
   </div>`;
    let cot2 = numeral(call_api_0.giathaudautrangcaonhat).format('0,0');
    let cot3 = numeral(call_api_0.giathaudautrangthapnhat).format('0,0');
    let cot4 = numeral(call_api_0.solantimkiemtrungbinh).format('0,0');
    // -----------------------------------------key word 1-----------------------------
    let res1 = `href="javascript:void(0)"class="changeURL font-12"  data-input="${call_api_1.keyword}" data-keyword="${call_api_1.keyword}"`;
    let sparkline1 = `<div class="d-flex no-block flex-row"> 
   <a data-type="keyword" ${res1}">                                             
     ${call_api_1.keyword}
   </a>       
   <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${call_api_1.lichsutimkiemtrungbinh ? Object.values(call_api_1.lichsutimkiemtrungbinh) : [] }]"></div>
   </div>`;
    let cot2_b = numeral(call_api_1.giathaudautrangcaonhat).format('0,0');
    let cot3_b = numeral(call_api_1.giathaudautrangthapnhat).format('0,0');
    let cot4_b = numeral(call_api_1.solantimkiemtrungbinh).format('0,0');





    // ---------------------------------------------------------------------
    $('.tbody_Circle_Table').append(`<tr>               
<td class="">${sparkline}</td>
<td class ="text-success">${cot2}</td>
<td class ="text-danger">${cot3}</td>
<td class="text-warning">${cot4}</td>   
</tr>
<tr>               
<td class="">${sparkline1}</td>
<td class ="text-success">${cot2_b}</td>
<td class ="text-danger">${cot3_b}</td>
<td class="text-warning">${cot4_b}</td>   
</tr>



`)
    renderSparkline("Circle_Table");
}
// ----------------------------------------------------------------------
const Phan__Tich__Seo = (task, data, keywords1, keywords2,check,object,active) => {
    console.log(object);
    if(active == "true") {
        $("#step-loader").append(`
        <div class="d-flex flex-column mt-4">
            <div class=" text-muted mb-5 text-dark font-gg font-14 font-weight-500 ">
            Chi phí Click giữa 2 từ khóa <strong class="font-gg font-14" style="color:#797b7f">${keywords1}</strong> vs <strong class="font-gg font-14" style="color:#91c7ae">${keywords2}</strong>
        </div>                                          

        <div id='Seo_Cost'style="width:100%;height:300px;background: rgb(245, 249, 253);"></div>
        </div>
        `)
    } 



    if(check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-y="${(!key)?'28':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-gs-min-width="4" data-gs-min-height ="8" data-gs-max-height ="10" data-task="Phan__Tich__Seo">
    <div class="grid-stack-item-content shadow-gg">
    <div class="d-flex no-block bg-white flex-column rounded-sm h-100" style="overflow:hidden">
    
    <div class="dropdown-wrapper d-flex justify-content-end ">
        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-ellipsis-h" style="color: black"></i>
        </button>
        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="Phan__Tich__Seo dropdown-item similarReloadTask text-muted" data-task="Phan__Tich__Seo" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
        </div>
    </div>
    <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">

                   
                        <div class=" text-muted mb-5 text-dark font-gg font-14 font-weight-500 ">
                            Chi phí Click giữa 2 từ khóa <strong class="font-gg font-14" style="color:#797b7f">${keywords1}</strong> vs <strong class="font-gg font-14" style="color:#91c7ae">${keywords2}</strong>
                        </div>                                          
                    
                        <div id='Seo_Cost'style="width:100%;height:300px"></div>
                    
    </div>  
    </div>
    </div></div>
    `) }
    //  -------------chart 1----------   
    let myarr = [{
        keywords: keywords1
    }, {
        keywords: keywords2
    }]

    const get_getBidForecast = myarr.map(async (ele, index) => {
        return await $.get(`//localapi.trazk.com/keywords/keywords.v1.php?task=getBidForecast&keywords=${ele.keywords}&isLogin=true&lang=vn`)
    })
    Promise.all(get_getBidForecast).then(data => {
        var option = {
            color:[  '#797b7f','#91c7ae'] ,        
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'center',
                data: [`${data[0].keywords}`, `${data[1].keywords}`]
            },
            series: [{
                name: [`Chi phí click`],
                type: 'pie',
                radius: ['50%', '70%'],
                center:['50%','60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 46,
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: data[0].data.overview.avg_cpc == 0 ? 0 : data[0].data.overview.avg_cpc,
                        name: `${data[0].keywords}`
                    },
                    {
                        value: data[1].data.overview.avg_cpc == 0 ? 0 : data[1].data.overview.avg_cpc,
                        name: `${data[1].keywords}`
                    },

                ]
            }]
        };
        var myChart = echarts.init(document.getElementById('Seo_Cost'));
        myChart.setOption(option);
        new ResizeSensor($('#Seo_Cost'), () => {
            myChart1.resize()
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                myChart.on('mouseover', function (params) {
                    if (params.name == dataChart[0].name) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                myChart.on('mouseout', function (params) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);


        });
    })

}
const Phan__Tich__Seo_Chart_A = (task, data, keywords1, keywords2,check,object,active) => {
    if(active == "true") {
        $("#step-loader").append(`
        <div class="d-flex flex-column">
                <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
                <div class=" text-muted mb-5 text-dark font-gg font-14 font-weight-500 ">
                    Top 5 trang SEO tốt nhất từ khóa <strong class="font-gg font-14" style="color:#89c3f8">${keywords1}</strong>
                </div>                                                              
                <div id='Seo_Chart_A'style="width:120%;height:300px;background: rgb(245, 249, 253);"></div>
        </div> 
        </div>
        `)
    } 


    if(check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-min-width="4" data-gs-min-height ="7" data-gs-max-height ="10" data-gs-x='${(!key)?'8':(object['gs-x'])}' data-gs-y="${(!key)?'14':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}"  data-task="Phan__Tich__Seo_Chart_A">
    <div class="grid-stack-item-content shadow-gg">
    <div class="d-flex no-block bg-white flex-column rounded-sm h-100" style="overflow:hidden">
    
    <div class="dropdown-wrapper d-flex justify-content-end ">
        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-ellipsis-h" style="color: black"></i>
        </button>
        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="Phan__Tich__Seo_Chart_A dropdown-item similarReloadTask text-muted" data-task="Phan__Tich__Seo_Chart_A" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
        </div>
    </div>
    <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
                        <div class=" text-muted mb-5 text-dark font-gg font-14 font-weight-500 ">
                             Top 5 trang SEO tốt nhất từ khóa <strong class="font-gg font-14" style="color:#89c3f8">${keywords1}</strong>
                        </div>                                                              
                        <div id='Seo_Chart_A'style="width:120%;height:300px"></div>
    </div>  
    </div>
    </div></div>
    `) }
    //  -------------chart 1----------   
    let myarr = [{
        keywords: keywords1
    }, {
        keywords: keywords2
    }]
    const get_KeywordAnalysisOrganicGraph = myarr.map(async (ele, index) => {
        return await $.get(`//localapi.trazk.com/keywords/keywords.v1.php?task=KeywordAnalysisOrganicGraph&keywords=${ele.keywords}&isLogin=true&lang=vn`)
    })
    Promise.all(get_KeywordAnalysisOrganicGraph).then(data => {
        let {Data: data_key1} = data[0].data;
        let {Data: data_key2} = data[1].data;
        console.log("mydata", data_key1);
        console.log("myss", data_key2);
        // console.log('Data',{Data});
        
        let legends = [];
        let data_share = [];
        let legendsb = [];
        let data_shareb = [];

        for (let item in data_key1) {
            legends.push(item);
            data_key1[item].Total[0].forEach((ele, index) => {
                if (index == 2) {
                    data_share.push(ele.Value.Share * 100);

                    var option = {
                        color:[ '#d7ab82', '#797b7f','#d87c7c','#edafda','#91c7ae'] ,                        
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                       
                        legend: {
                            // orient: 'vertical',
                            x:'left',
                            data: [`${legends[0]}`, `${legends[1]}`, `${legends[2]}`, `${legends[3]}`, `${legends[4]}`]
                        },
                        series: [{
                            name: ['Từ khóa'],
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            center: ['50%','60%'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center',
                                    formatter: '{text|{b}}\n{value|{d}%}',
                                    rich: {
                                        text: {
                                            color: "#666",
                                            fontSize: 12,
                                            fontFamily: 'Arial',
                                            align: 'center',
                                            verticalAlign: 'middle',
                                            padding: 5
                                        },
                                        value: {
                                            color: "#8693F3",
                                            fontSize: 24,
                                            align: 'center',
                                            verticalAlign: 'middle',
                                        },
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 46,
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                    value: data_share[0],
                                    name: `${legends[0]}`
                                },
                                {
                                    value: data_share[1],
                                    name: `${legends[1]}`
                                },
                                {
                                    value: data_share[2],
                                    name: `${legends[2]}`
                                },
                                {
                                    value: data_share[3],
                                    name: `${legends[3]}`
                                },
                                {
                                    value: data_share[4],
                                    name: `${legends[4]}`
                                }

                            ]
                        }]
                    };
                    var myChart1 = echarts.init(document.getElementById('Seo_Chart_A'));
                    myChart1.setOption(option);
                    new ResizeSensor($('#Seo_Chart_A'), () => {
                        myChart1.resize()
                        setTimeout(function () {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        }, 1000);
                        setTimeout(function () {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });

                            myChart.on('mouseover', function (params) {
                                if (params.name == dataChart[0].name) {
                                    myChart.dispatchAction({
                                        type: 'highlight',
                                        seriesIndex: 0,
                                        dataIndex: 0
                                    });
                                } else {
                                    myChart.dispatchAction({
                                        type: 'downplay',
                                        seriesIndex: 0,
                                        dataIndex: 0
                                    });
                                }
                            });

                            myChart.on('mouseout', function (params) {
                                myChart.dispatchAction({
                                    type: 'highlight',
                                    seriesIndex: 0,
                                    dataIndex: 0
                                });
                            });
                        }, 1000);
                    });



                }
            })
        }
    })
}
const Phan__Tich__Seo_Chart_B = (task, data, keywords1, keywords2,check,object,active) => {
    if(check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-min-width="4" data-gs-min-height ="7" data-gs-max-height ="10" data-gs-x='${(!key)?'8':(object['gs-x'])}' data-gs-y="${(!key)?'21':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}"  data-task="Phan__Tich__Seo_Chart_B">
    <div class="grid-stack-item-content shadow-gg">
    <div class="d-flex no-block bg-white flex-column rounded-sm h-100" style="overflow:hidden">
    
    <div class="dropdown-wrapper d-flex justify-content-end ">
        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-ellipsis-h" style="color: black"></i>
        </button>
        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="Phan__Tich__Seo_Chart_B dropdown-item similarReloadTask text-muted" data-task="Phan__Tich__Seo_Chart_B" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
            <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
        </div>
    </div>
    <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
                        <div class=" text-muted mb-5 text-dark font-gg font-14 font-weight-500 ">
                             Top 5 trang SEO tốt nhất từ khóa <strong class="font-gg font-14" style="color:#89c3f8">${keywords2}</strong>
                        </div>                                                              
                        <div id='Seo_Chart_B'style="width:100%;height:300px;background: rgb(245, 249, 253);"></div>
    </div>  
    </div>
    </div></div>
    `) }
    //  -------------chart 1----------   
    let myarr = [{
        keywords: keywords1
    }, {
        keywords: keywords2
    }]
    const get_KeywordAnalysisOrganicGraph = myarr.map(async (ele, index) => {
        return await $.get(`//localapi.trazk.com/keywords/keywords.v1.php?task=KeywordAnalysisOrganicGraph&keywords=${ele.keywords}&isLogin=true&lang=vn`)
    })
    Promise.all(get_KeywordAnalysisOrganicGraph).then(data => {
        let {
            Data: data_key1
        } = data[0].data;
        let {
            Data: data_key2
        } = data[1].data;
        console.log("mydata", data_key1);
        console.log("myss", data_key2);

        let legends = [];
        let data_share = [];
        let legendsb = [];
        let data_shareb = [];
        for (let itemb in data_key2) {
            legendsb.push(itemb);
            data_key2[itemb].Total[0].forEach((ele, index) => {

                if (index == 2) {
                    data_shareb.push(ele.Value.Share * 100);
                    
                    var option = {
                        color:[ '#d7ab82', '#797b7f','#d87c7c','#edafda','#91c7ae'] ,  
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                            // orient: 'vertical',
                            x: 'right',
                            data: [`${legendsb[0]}`, `${legendsb[1]}`, `${legendsb[2]}`, `${legendsb[3]}`, `${legendsb[4]}`]
                        },

                        series: [{
                            name: ['Từ khóa'],
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            center:['50%','60%'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center',
                                    formatter: '{text|{b}}\n{value|{d}%}',
                                    rich: {
                                        text: {
                                            color: "#666",
                                            fontSize: 12,
                                            fontFamily: 'Arial',
                                            align: 'center',
                                            verticalAlign: 'middle',
                                            padding: 5
                                        },
                                        value: {
                                            color: "#8693F3",
                                            fontSize: 24,
                                            align: 'center',
                                            verticalAlign: 'middle',
                                        },
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 46,
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                    value: data_shareb[0],
                                    name: `${legendsb[0]}`
                                },
                                {
                                    value: data_shareb[1],
                                    name: `${legendsb[1]}`
                                },
                                {
                                    value: data_shareb[2],
                                    name: `${legendsb[2]}`
                                },
                                {
                                    value: data_shareb[3],
                                    name: `${legendsb[3]}`
                                },
                                {
                                    value: data_shareb[4],
                                    name: `${legendsb[4]}`
                                }

                            ]
                        }]
                    };
                    var myChart1 = echarts.init(document.getElementById('Seo_Chart_B'));
                    myChart1.setOption(option);
                    new ResizeSensor($('#Seo_Chart_B'), () => {
                        myChart1.resize()
                        setTimeout(function () {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        }, 1000);
                        setTimeout(function () {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });

                            myChart.on('mouseover', function (params) {
                                if (params.name == dataChart[0].name) {
                                    myChart.dispatchAction({
                                        type: 'highlight',
                                        seriesIndex: 0,
                                        dataIndex: 0
                                    });
                                } else {
                                    myChart.dispatchAction({
                                        type: 'downplay',
                                        seriesIndex: 0,
                                        dataIndex: 0
                                    });
                                }
                            });

                            myChart.on('mouseout', function (params) {
                                myChart.dispatchAction({
                                    type: 'highlight',
                                    seriesIndex: 0,
                                    dataIndex: 0
                                });
                            });
                        }, 1000);
                    });
                }
            })
        }

    })
}

//trang giao diện đâu rồi
//đây
export default api;



















// http://codepad.org/NiB6YOMR