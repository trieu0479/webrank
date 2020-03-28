const api = async (task, keywords,check,object) => {
    // console.log(task)
    let taskName = task;
    if (task == "getBidForecast__Impressions" || task == "getBidForecast__Position__CTR" || task == "getBidForecast__Cost" || task =="getBidForecast__Click" || task == "getBidForecast__CPC") {
        task = "getBidForecast"
    }
    if (task == "getKeywordsSuggestionV1__History" || task == "doMainRequest" || task == "Chart__Circle" || task == "Phan__Tich__Seo") {
        task = "getKeywordsSuggestionV1"
    }
    if (task == "Chart__Top5__QC") {
        task = "KeywordAnalysisPaidGraph"
    }
    if (task == "Table_Top10__QC") {
        task = "KeywordAnalysisPaidTable"
    }
    if (task == "Chart__Top5__PageSeo") {
        task = "KeywordAnalysisOrganicGraph"
    }
    if (task == "Table__Top10__PageSeo") {
        task = "KeywordAnalysisOrganicTable"
    }
    if (task == "KeywordRecommendationsPhraseMatch") {
        task = "KeywordRecommendationsPhraseMatch"
    }
    if (task == "KeywordRecommendationsRelated") {
        task = "KeywordRecommendationsRelated"
    }
    // let url = "";
    // if(task == getBidForecastCost){
    //     url = `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${keywords}
    // } else {
    //     url = `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${keywords}`;
    // }
    
    try {
        return await $.ajax({
                url: `//localapi.trazk.com/keywords/keywords.v1.php?task=${task}&keywords=${keywords}&isLogin=true&lang=vn `,
                // type: "GET"
            })
            .then(data => {                            
                // console.log('layapi',data)
                if(!data.data) return true;   
                switch (taskName) {                                   
                    case "getBidForecast__Position__CTR":
                        getBidForecast__Position__CTR(task,data,check,object);
                        break;
                    case "getBidForecast__Cost":
                        getBidForecast__Cost(task,data,check,object);
                        break;
                    case "getBidForecast__Click":
                        getBidForecast__Click(task,data,check,object);
                        break;
                    case "getBidForecast__CPC":
                        getBidForecast__CPC(task,data,check,object);
                        break;
                        // ---------------------------------------------------------------------
                    case "getKeywordsSuggestionV1__History":
                        getKeywordsSuggestionV1__History(task,data,check,object);
                        break;                        
                    case "doMainRequest":
                        doMainRequest(task,data,check,object);
                        break;
                        ////////////////////////////////////chart cir cle/////////////////////////////////////
                    case "Chart__Circle":
                        Chart__Circle(task,data,check,object);
                        break;
                        /////////////////////////////////////
                    case "Google_Ads":
                        Google_Ads(task,data,check,object);
                        break;
                        //////////////////////////////////////////////////////////chart top 5 qc
                    case "Chart__Top5__QC":
                        Chart__Top5__QC(task,data,check,object);
                        break;
                        ////////////////////////////////////////////////////////////////
                    case "Table_Top10__QC":
                        Table_Top10__QC(task,data,check,object);
                        break;
                    case "Phan__Tich__Seo":
                        Phan__Tich__Seo(task,data,keywords,check,object);
                        break;
                    case "Chart__Top5__PageSeo":
                        Chart__Top5__PageSeo(task,data,check,object);
                        break;
                    case "getBidForecast__Impressions":
                        getBidForecast__Impressions(task,data,check,object);
                        break;
                    case "Table__Top10__PageSeo":
                        Table__Top10__PageSeo(task,data,check,object);
                        break;
                        //////////////////////tu khoa lien quan chat che ///////////////////////////
                    case "KeywordRecommendationsPhraseMatch":
                        KeywordRecommendationsPhraseMatch(task,data,check,object);
                    break;
                    case "KeywordRecommendationsRelated":
                        KeywordRecommendationsRelated(task,data,check,object);
                     break;                       
                    default:
                        break;
                }
                return true;
            });
    } catch (error) {
        console.log(error);
    }
};

// *************************************************
const test = new URL(window.location.href);
let keywords = test.searchParams.get("keywords");
const key = url.searchParams.get("key");
// console.log('key methoad tag',key);

const lang = url.searchParams.get("language") || url.pathname.split("/")[2];
const textPhraseMatch = (xxx) => `Có <strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa <strong class="font-gg text-primary font-16">liên quan chặt chẽ</strong> với từ khóa chính “<strong class="font-gg font-16 text-success">${keywords}</strong>”`;
const textRelated = (xxx) => `Có <strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa <strong class="font-gg text-primary font-16">liên quan</strong> với từ khóa chính “<strong class="font-gg font-16 text-success">${keywords}</strong>”`;
const textRecommendation = (xxx) => `FFF gợi ý <strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa liên quan với từ khóa "<strong class="font-gg font-16 text-success">${keywords}</strong>" cho chiến dịch SEO và Google Ads`;
const textalertPimary = (xxx) => `<i class="fas fa-hand-point-right"></i>&nbsp; <strong style="font-size:16px;"> Xem danh sách<strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa liên quan chặt chẽ</strong>`;
const textalertDanger = (xxx) => `<i class="fas fa-hand-point-right"></i>&nbsp; <strong style="font-size:16px;"> Xem danh sách<strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa liên quan </strong>`;
// const excelText = '';
const excelText = '<i class="fas fa-download"></i><span class="d-md-inline"> Tải file Excel</span>';
const texttop10qctukhoa = () => `Top 10 trang quảng cáo từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trả phí qua Google Ads `;
const texttop10qctukhoa_chart = () => `Top 5 trang quảng cáo từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trả phí qua Google Ads trong 3 tháng gần đây`;
const texttop10trangSEO = () => `Top 10 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-success">${keywords}</strong>”(SEO - Truy cập tự nhiên)`;
const texttop10trangseo_chart = () => `Top 5 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trong 3 tháng gần đây`;



// -----------------1-------------------------------------------------
const initChart = (device, chartName, key, task) => {
    // console.log('hhere', device[key])
    if (device[key].mobile ==0 || device[key].pc==0 || device[key].mobile ==0  ) {
      
        location.reload();
    
    }
    let data = [{
            name: 'Điện thoại',
            value: device[key].mobile,
            itemStyle: {
                color: '#eb4d4b'
            }
        },
        {
            name: 'Máy tính',
            value: device[key].pc,
            itemStyle: {
                color: '#ff7979'
            }
        },
        {
            name: 'Máy tính bảng',
            value: device[key].tablet,
            itemStyle: {
                color: '#fab1a0'
            }
        },
    ];

    let ele = document.getElementById(`${task}--${chartName}`); //cái ele bị null
    // console.log('zz',ele)
    let myChart = echarts.init(ele);

    let option = (key == 'cost') ? {
        grid: {
            top: 20,
            bottom: 40,
            // left: 0,
            // right: 0
        },
        yAxis: {
            type: 'value',
            show: false
        },
        xAxis: {
            type: 'category',
            data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#DDD'
                }
            },
            axisLabel: {
                color: '#FFF',
                fontFamily: 'Google Sans',
                fontSize: 12
            }
        },
        series: {
            type: 'bar',
            data,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontFamily: 'Google Sans',
                    color: '#EAEAEA',
                    formatter: ({
                        value
                    }) => `${numeral(value).format('0,0')} ${(key == 'cost') ? 'đ' : ''}`
                }
            }
        }
    } : {
        grid: {
            top: 20,
            bottom: 20,
            left: 90,
            right: 60
        },
        xAxis: {
            type: 'value',
            show: false
        },
        yAxis: {
            type: 'category',
            data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#DDD'
                }
            },
            axisLabel: {
                color: '#6c757d',
                fontFamily: 'Google Sans',
                fontSize: 12
            }
        },
        series: {
            type: 'bar',
            data,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    fontFamily: 'Google Sans',
                    formatter: ({
                        value
                    }) => `${numeral(value).format('0,0')} ${(key == 'cost_per_click') ? 'đ' : ''}`
                }
            }
        }
    }
    myChart.setOption(option);

    new ResizeSensor(ele, function () {
        myChart.resize();
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    });

    setTimeout(function () {
        myChart.on('mouseover', function (params) {
            if (params.name == data[0].name) {
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
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    }, 1000);


}
const getBidForecast__Impressions = (task,data,check,object) => {
    
    // console.log('dsas',task);
        if(check == "true") {
    $(".grid-stack").append(`
    <div class="grid-stack-item" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'2':(object['gs-height'])}" style ="min-width:352px!important";min-height:140px!important" data-task ="getBidForecast__Impressions">
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
                <div id="getBidForecast--Impression" class="py-4 pl-4 text-success flex-grow-1" style="color:#2ed0a2!important">
                    <span class="font-gg font-14 text-muted mr-auto">Trung bình tìm kiếm</span>
                </div>
            </div>
        </div>
    </div>
</div> `)
        }
    // $('.grid-stack').gridstack();
    let {
        overview,
        device
    } = data.data;
    var average2 = 0;
    if (overview && device) {
        let {
            avg_cpc,
            avg_position,
            click_through_rate,
            clicks,
            cost,
            impressions
        } = overview;

        console.log('average',average2);


        const eleNumber = (value, format, postfix = '') => $(`<div class="display-6 font-gg counter ml-auto mt-2">${numeral(value).format(format)}${postfix}</div>`);
        if (cost == 0) $(".contentBidForecast").hide();
        let eleImpression = eleNumber(impressions, '0,0'); 
        console.log('ele',eleImpression);
    
        $("h1#_count__number1").html(numeral(impressions).format('0,0'));
        $("#__count___number_2").html(numeral(average2 * impressions).format('0,0'));
        $("h1#count_number_3").html(numeral(avg_cpc).format('0,0') + `<sup class="font-gg">đ</sup>`)

$(`#${task}--Impression`)
    .append(eleImpression)
    .after(`<div class="mx-auto" id="${task}--chartImpression" style="width:50%;height:100%"></div>`)
    .parent().removeClass('is-loading')

if(check == "false"){

    $(`#${task}--chartImpression`).remove();
    // $(`#${task}--Impression`)
    // .append(eleImpression).parent().removeClass('is-loading')
}


    

        initChart(device, 'chartImpression', "impressions", task);
        // Object.keys(device).forEach(key => {
        //     switch (key) {
        //         case 'clicks':
        //             initChart('chartClick', key);
        //             break;
        //         case 'cost':
        //             initChart('chartCost', key);
        //             break;
        //         case 'cost_per_click':
        //             initChart('chartCPC', key);
        //             break;
        //         case 'impressions':
        //             initChart('chartImpression', key);
        //             break;
        //         default:
        //             break;
        //     }
        // })
    }
}
// -------------------2-------------------------------------------------------------------------
const getBidForecast__Position__CTR = (task, data,check,object) => {    
 if(check == "true") {
    $(".grid-stack").append(`
    <div class="grid-stack-item" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'2':(object['gs-y'])}" data-gs-max-height="4" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${ (!key)?'2':(object['gs-height'])}" data-gs-min-width="4" data-gs-min-height ="2" data-task ="getBidForecast__Position__CTR">
        <div class="grid-stack-item-content shadow-gg">                
            <div class=" bg-white border-top-success align-items-center rounded-sm h-100 " style="overflow:hidden">                    
                <div class="dropdown-wrapper d-flex justify-content-end">
                    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="">
                        <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> 
                    </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getBidForecast__Position__CTR dropdown-item similarReloadTask text-muted" data-task="getBidForecast__Position__CTR" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>  
                <div class="d-flex">
                    <div id="getBidForecast--Position" class="p-4 text-success flex-grow-1 border-right">
                        <span class="font-gg font-14 text-muted mr-auto">Vị trí trung bình</span>
                        <div class="display-6 font-gg counter ml-auto mt-2"></div>
                    </div>
                    <div id="getBidForecast--CTR" class="p-4 text-success flex-grow-1">
                        <span class="font-gg font-14 text-muted mr-auto">Tỷ lệ nhấp chuột</span>
                        <div class="display-6 font-gg counter ml-auto mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div> `)
 }
    let {
        overview,
        device
    } = data.data;

    if (overview && device) {
        let {
            avg_cpc,
            avg_position,
            click_through_rate,
            clicks,
            cost,
            impressions
        } = overview;



        const eleNumber = (value, format, postfix = '') => $(`<div class="display-6 font-gg counter ml-auto mt-2">${numeral(value).format(format)}${postfix}</div>`); // phần trăm đây nè
        if (cost == 0) $(".contentBidForecast").hide();
        let elePosition = eleNumber(avg_position, '0.00');
        let eleCTR = eleNumber(click_through_rate, '0', '%');




        $(`#${task}--Position`)
            .append(elePosition)
            .parent().removeClass('is-loading')
            if(check == "false"){
                $(`#${task}--Position`).find("div").remove();
                $(`#${task}--Position`)
                .append(elePosition).parent().removeClass('is-loading')
            }
            
        $(`#${task}--CTR`)
            .append(eleCTR)
            .parent().removeClass('is-loading')
            if(check == "false"){
                $(`#${task}--CTR`).find("div").remove();
                $(`#${task}--CTR`)
                .append(eleCTR).parent().removeClass('is-loading')
            }
            

        // Object.keys(device).forEach(key => {
        //     switch (key) {
        //         case 'clicks':
        //             initChart(device,'chartClick', key,task);
        //             break;
        //         case 'cost':
        //             initChart(device,'chartCost', key,task);
        //             break;
        //         case 'cost_per_click':
        //             initChart(device,'chartCPC', key,task);
        //             break;
        //         case 'impressions':
        //             initChart(device,'chartImpression', key,task);
        //             break;
        //         default:
        //             break;
        //     }
        // })
    }
}





//3---------------------------------------------------------------------------------------------------------
const getBidForecast__Cost = (task, data,check,object) => {

    // console.log(data);
    if( check == "true" ) {
    $(".grid-stack").append(`
    <div class="grid-stack-item" data-gs-max-height="6" data-gs-x="${(!key)?'4':(object['gs-x'])}" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'4':(object['gs-height'])}" data-task ="getBidForecast__Cost"  data-gs-min-width="4" data-gs-min-height ="4" >
    <div class="grid-stack-item-content shadow-gg">
        <div class="bg-dark flex-column rounded-sm h-100" style="overflow:hidden">
        <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #FFF;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getBidForecast__Cost dropdown-item similarReloadTask text-muted" data-task="getBidForecast__Cost" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>
        
                <div id="getBidForecast--Cost" class="py-4 pl-4 text-white flex-grow-1">
                    <span class="font-gg font-14 text-white mr-auto">Chi phí Quảng cáo Adwords</span>
                </div>
        
        </div>
    </div>
</div> `)
    }
    let {
        overview,
        device
    } = data.data;
    //    if(data.data.overview.avg_cpc == 0 || data.data.overview.avg_position || data.data.overview.click_through_rate || data.data.overview.score|| data.data.overview.impressions || data.data.overview.cost || data.data.overview.clicks ) {
    //     Swal.fire('Dữ liệu tạm thời có vẻ đang bị rỗng', 'Hãy reload lại trang này', 'error');
    //         return;
    //    } 
    if (overview && device) {
        let {
            avg_cpc,
            avg_position,
            click_through_rate,
            clicks,
            cost,
            impressions
        } = overview;

        const eleNumber = (value, format, postfix = '') => $(`<div class="display-6 font-gg counter ml-auto mt-2">${numeral(value).format(format)}${postfix}</div>`);
        if (cost == 0) $(".contentBidForecast").hide();
        let eleCPC = eleNumber(avg_cpc, '0,0', '<sup class="font-gg">đ</sup>');
        let elePosition = eleNumber(avg_position, '0.00');
        let eleCTR = eleNumber(click_through_rate, '0', '%');
        let eleClick = eleNumber(clicks, '0,0');
        let eleCost = eleNumber(cost, '0,0', '<sup class="font-gg">đ</sup>');
        let eleImpression = eleNumber(impressions, '0,0'); //cái này á hả uk ko don giản
 
    
        $(`#${task}--Cost`)
            .append(eleCost)
            .after(`<div class="mx-auto" id="${task}--chartCost" style="width:100%;height:50%"></div>`)
            .parent().removeClass('is-loading')

        if(check == "false"){
            $(`#${task}--Cost`).find("div").remove();
            $(`#${task}--Cost`)
            .append(eleCost).parent().removeClass('is-loading')
        }
        

        initChart(device, 'chartCost', "cost", task);
        // const initChart = (chartName, key) => {
        //     let data = [{
        //             name: 'Điện thoại',
        //             value: device[key].mobile,
        //             itemStyle: {
        //                 color: '#eb4d4b'
        //             }
        //         },
        //         {
        //             name: 'Máy tính',
        //             value: device[key].pc,
        //             itemStyle: {
        //                 color: '#ff7979'
        //             }
        //         },
        //         {
        //             name: 'Máy tính bảng',
        //             value: device[key].tablet,
        //             itemStyle: {
        //                 color: '#fab1a0'
        //             }
        //         },
        //     ];

        //     let ele = document.getElementById(`${task}--${chartName}`);

        //     let myChart = echarts.init(ele);

        //     let option = (key == 'cost') ? {
        //         grid: {
        //             top: 20,
        //             bottom: 40,
        //             // left: 0,
        //             // right: 0
        //         },
        //         yAxis: {
        //             type: 'value',
        //             show: false
        //         },
        //         xAxis: {
        //             type: 'category',
        //             data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
        //             axisTick: {
        //                 show: false
        //             },
        //             axisLine: {
        //                 lineStyle: {
        //                     color: '#DDD'
        //                 }
        //             },
        //             axisLabel: {
        //                 color: '#FFF',
        //                 fontFamily: 'Google Sans',
        //                 fontSize: 12
        //             }
        //         },
        //         series: {
        //             type: 'bar',
        //             data,
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'top',
        //                     fontFamily: 'Google Sans',
        //                     color: '#EAEAEA',
        //                     formatter: ({
        //                         value
        //                     }) => `${numeral(value).format('0,0')} ${(key == 'cost') ? 'đ' : ''}`
        //                 }
        //             }
        //         }
        //     } : {
        //         grid: {
        //             top: 20,
        //             bottom: 20,
        //             left: 90,
        //             right: 60
        //         },
        //         xAxis: {
        //             type: 'value',
        //             show: false
        //         },
        //         yAxis: {
        //             type: 'category',
        //             data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
        //             axisTick: {
        //                 show: false
        //             },
        //             axisLine: {
        //                 lineStyle: {
        //                     color: '#DDD'
        //                 }
        //             },
        //             axisLabel: {
        //                 color: '#6c757d',
        //                 fontFamily: 'Google Sans',
        //                 fontSize: 12
        //             }
        //         },
        //         series: {
        //             type: 'bar',
        //             data,
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'right',
        //                     fontFamily: 'Google Sans',
        //                     formatter: ({
        //                         value
        //                     }) => `${numeral(value).format('0,0')} ${(key == 'cost_per_click') ? 'đ' : ''}`
        //                 }
        //             }
        //         }
        //     }
        //     myChart.setOption(option);

        //     new ResizeSensor(ele, function () {
        //         myChart.resize();
        //         myChart.dispatchAction({
        //             type: 'highlight',
        //             seriesIndex: 0,
        //             dataIndex: 0
        //         });
        //     });

        //     setTimeout(function () {
        //         myChart.on('mouseover', function (params) {
        //             if (params.name == data[0].name) {
        //                 myChart.dispatchAction({
        //                     type: 'highlight',
        //                     seriesIndex: 0,
        //                     dataIndex: 0
        //                 });
        //             } else {
        //                 myChart.dispatchAction({
        //                     type: 'downplay',
        //                     seriesIndex: 0,
        //                     dataIndex: 0
        //                 });
        //             }
        //         });

        //         myChart.on('mouseout', function (params) {
        //             myChart.dispatchAction({
        //                 type: 'highlight',
        //                 seriesIndex: 0,
        //                 dataIndex: 0
        //             });
        //         });
        //         myChart.dispatchAction({
        //             type: 'highlight',
        //             seriesIndex: 0,
        //             dataIndex: 0
        //         });
        //     }, 1000);

        // }

        // Object.keys(device).forEach(key => {
        //     switch (key) {
        //         case 'clicks':
        //             initChart('chartClick', key);
        //             break;
        //         case 'cost':
        //             initChart('chartCost', key);
        //             break;
        //         case 'cost_per_click':
        //             initChart('chartCPC', key);
        //             break;
        //         case 'impressions':
        //             initChart('chartImpression', key);
        //             break;
        //         default:
        //             break;
        //     }
        // })
    }
}
//4----------------------------------------------------------------------------------------------------------
const getBidForecast__Click = (task, data,check,object) => {
    // console.log(data);
    if ( check == "true" ) {
    $(".grid-stack").append(`
    <div class="grid-stack-item" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-max-height="4" data-gs-y="${(!key)?'0':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'2':(object['gs-height'])}"   data-gs-min-width="4" data-gs-min-height ="2" data-task ="getBidForecast__Click">
    <div class="grid-stack-item-content shadow-gg">
        <div class="bg-white border-top-success align-items-center rounded-sm h-100" style="overflow:hidden">
        <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getBidForecast__Click dropdown-item similarReloadTask text-muted" data-task="getBidForecast__Click" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>        
        <div class="d-flex">
            <div id="getBidForecast--Click" class="py-4 pl-4 text-success flex-grow-1">
                <span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
            </div>
        </div>    
        </div>
       
    </div>
</div> `) }
    if (!data || !data.data) {
        $('#getBidForecast--Click').hide()
    } else {
        let {
            overview,
            device
        } = data.data;

        if (overview && device) {
            let {
                avg_cpc,
                avg_position,
                click_through_rate,
                clicks,
                cost,
                impressions
            } = overview;



            const eleNumber = (value, format, postfix = '') => $(`<div class="display-6 font-gg counter ml-auto mt-2">${numeral(value).format(format)}${postfix}</div>`);
            if (cost == 0) $(".contentBidForecast").hide();
            let eleCPC = eleNumber(avg_cpc, '0,0', '<sup class="font-gg">đ</sup>');
            let elePosition = eleNumber(avg_position, '0.00');
            let eleCTR = eleNumber(click_through_rate, '0', '%');
            let eleClick = eleNumber(clicks, '0,0');
            let eleCost = eleNumber(cost, '0,0', '<sup class="font-gg">đ</sup>');
            let eleImpression = eleNumber(impressions, '0,0'); //cái này á hả uk ko don giản



            // $(`#${task}--Click`)
            //     .append(eleClick)
            //     .after(`<div class="ml-auto" id="${task}--chartClick" style="width:50%;height:100%"></div>`)
            //     .parent().removeClass('is-loading')
            //     if(check == "false"){
            //         $(`#${task}--chartClick`).find("div").remove();
            //         $(`#${task}--Click`)
            //         .append(eleClick).parent().removeClass('is-loading')
            //     }  
            $(`#${task}--Click`)
            .append(eleClick)
            .after(`<div class="mx-auto" id="${task}--chartClick" style="width:50%;height:100%"></div>`)
            .parent().removeClass('is-loading')
        
        if(check == "false"){
            $(`#${task}--chartClick`).remove();
        }   
            // const initChart = (chartName, key) => {
            //     let data = [{
            //             name: 'Điện thoại',
            //             value: device[key].mobile,
            //             itemStyle: {
            //                 color: '#eb4d4b'
            //             }
            //         },
            //         {
            //             name: 'Máy tính',
            //             value: device[key].pc,
            //             itemStyle: {
            //                 color: '#ff7979'
            //             }
            //         },
            //         {
            //             name: 'Máy tính bảng',
            //             value: device[key].tablet,
            //             itemStyle: {
            //                 color: '#fab1a0'
            //             }
            //         },
            //     ];

            //     let ele = document.getElementById(`${task}--${chartName}`);

            //     let myChart = echarts.init(ele);

            //     let option = (key == 'cost') ? {
            //         grid: {
            //             top: 20,
            //             bottom: 40,
            //             // left: 0,
            //             // right: 0
            //         },
            //         yAxis: {
            //             type: 'value',
            //             show: false
            //         },
            //         xAxis: {
            //             type: 'category',
            //             data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
            //             axisTick: {
            //                 show: false
            //             },
            //             axisLine: {
            //                 lineStyle: {
            //                     color: '#DDD'
            //                 }
            //             },
            //             axisLabel: {
            //                 color: '#FFF',
            //                 fontFamily: 'Google Sans',
            //                 fontSize: 12
            //             }
            //         },
            //         series: {
            //             type: 'bar',
            //             data,
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     position: 'top',
            //                     fontFamily: 'Google Sans',
            //                     color: '#EAEAEA',
            //                     formatter: ({
            //                         value
            //                     }) => `${numeral(value).format('0,0')} ${(key == 'cost') ? 'đ' : ''}`
            //                 }
            //             }
            //         }
            //     } : {
            //         grid: {
            //             top: 20,
            //             bottom: 20,
            //             left: 90,
            //             right: 60
            //         },
            //         xAxis: {
            //             type: 'value',
            //             show: false
            //         },
            //         yAxis: {
            //             type: 'category',
            //             data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
            //             axisTick: {
            //                 show: false
            //             },
            //             axisLine: {
            //                 lineStyle: {
            //                     color: '#DDD'
            //                 }
            //             },
            //             axisLabel: {
            //                 color: '#6c757d',
            //                 fontFamily: 'Google Sans',
            //                 fontSize: 12
            //             }
            //         },
            //         series: {
            //             type: 'bar',
            //             data,
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     position: 'right',
            //                     fontFamily: 'Google Sans',
            //                     formatter: ({
            //                         value
            //                     }) => `${numeral(value).format('0,0')} ${(key == 'cost_per_click') ? 'đ' : ''}`
            //                 }
            //             }
            //         }
            //     }
            //     myChart.setOption(option);

            //     new ResizeSensor(ele, function () {
            //         myChart.resize();
            //         myChart.dispatchAction({
            //             type: 'highlight',
            //             seriesIndex: 0,
            //             dataIndex: 0
            //         });
            //     });

            //     setTimeout(function () {
            //         myChart.on('mouseover', function (params) {
            //             if (params.name == data[0].name) {
            //                 myChart.dispatchAction({
            //                     type: 'highlight',
            //                     seriesIndex: 0,
            //                     dataIndex: 0
            //                 });
            //             } else {
            //                 myChart.dispatchAction({
            //                     type: 'downplay',
            //                     seriesIndex: 0,
            //                     dataIndex: 0
            //                 });
            //             }
            //         });

            //         myChart.on('mouseout', function (params) {
            //             myChart.dispatchAction({
            //                 type: 'highlight',
            //                 seriesIndex: 0,
            //                 dataIndex: 0
            //             });
            //         });
            //         myChart.dispatchAction({
            //             type: 'highlight',
            //             seriesIndex: 0,
            //             dataIndex: 0
            //         });
            //     }, 1000);

            // }
            initChart(device, 'chartClick', 'clicks', task);
            // Object.keys(device).forEach(key => {
            //     switch (key) {
            //         case 'clicks':
            //             initChart('chartClick', key);
            //             break;
            //         case 'cost':
            //             initChart('chartCost', key);
            //             break;
            //         case 'cost_per_click':
            //             initChart('chartCPC', key);
            //             break;
            //         case 'impressions':
            //             initChart('chartImpression', key);
            //             break;
            //         default:
            //             break;
            //     }
            // })
        }
    }
}
//5 -----------------------------------------------------------------------------------------------------------------
const getBidForecast__CPC = (task, data,check,object) => {
   if(check== "true") {
    $(".grid-stack").append(`
    <div class="grid-stack-item" data-gs-x="${(!key)?'8':(object['gs-x'])}" data-gs-max-height="4" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'4':(object['gs-width'])}" data-gs-height="${(!key)?'2':(object['gs-height'])}" data-task ="getBidForecast__CPC"  data-gs-min-width="4" data-gs-min-height ="2">
    <div class="grid-stack-item-content shadow-gg">
      
        <div class="bg-white border-top-success align-items-center rounded-sm  h-100" style="overflow:hidden">
        <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="getBidForecast__CPC dropdown-item similarReloadTask text-muted" data-task="getBidForecast__CPC" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>
        
        <div class="d-flex"> 
            <div id="getBidForecast--CPC" class="py-4 pl-4 text-success flex-grow-1">
                <span class="font-gg font-14 text-muted mr-auto">Chi phí 1 nhấp chuột</span>
            </div>
        </div>
    </div>
    </div>
</div> `)
   }
    if (!data || !data.data) {
        $('#getBidForecast--CPC').hide();
    } else {

        // console.log(data);

        let {
            overview,
            device
        } = data.data;

        if (overview && device) {
            let {
                avg_cpc,
                avg_position,
                click_through_rate,
                clicks,
                cost,
                impressions
            } = overview;



            const eleNumber = (value, format, postfix = '') => $(`<div class="display-6 font-gg counter ml-auto mt-2">${numeral(value).format(format)}${postfix}</div>`);
            if (cost == 0) $(".contentBidForecast").hide();
            let eleCPC = eleNumber(avg_cpc, '0,0', '<sup class="font-gg">đ</sup>');
            let elePosition = eleNumber(avg_position, '0.00');
            let eleCTR = eleNumber(click_through_rate, '0', '%');
            let eleClick = eleNumber(clicks, '0,0');
            let eleCost = eleNumber(cost, '0,0', '<sup class="font-gg">đ</sup>');
            let eleImpression = eleNumber(impressions, '0,0'); //cái này á hả uk ko don giản

            $(`#${task}--CPC`)
            .append(eleCPC)
            .after(`<div class="mx-auto" id="${task}--chartCPC" style="width:50%;height:100%"></div>`)
            .parent().removeClass('is-loading')
        
        if(check == "false"){
            $(`#${task}--chartCPC`).remove();
        }     
            initChart(device, 'chartCPC', 'cost_per_click', task);
        }
    }
}
//6---------------------------lich su truy cap 12 thqang cua -----------------/
const renderMobilePCTraffic = (data) => {

    if( data.data.traffic==null) {
        return true;
    }
    let wrapper = $('#getKeywordsSuggestionV1--eCharts_wrapper');
    let ele = document.getElementById('getKeywordsSuggestionV1--eCharts');

    wrapper.removeClass('is-loading')
        .append(`<div class="flex-center flex-grow-1 display-5 font-gg text-favorite counter"></div>`);

    let dataChart = {
        keys: [],
        values: {
            pc: [],
            mobile: []
        }
    };
    
    data.data.traffic.forEach((item) => {
        dataChart.keys.push(item.time);
        dataChart.values.pc.push(item.pcImpression);
        dataChart.values.mobile.push(item.mobileImpression);
    })

    let option = {
        grid: {
            // bottom: 0,
            left: 80,
            right: 40,
        },
        legend: {
            itemWidth: 16,
            itemHeight: 10,
            itemGap: 16,
            right: 30,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                // fontSize: 12,
                fontFamily: 'Google Sans'
            },
            data: ['Máy tính', 'Điện thoại']
        },
        tooltip: {
            showContent: true,
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(93,120,255,1)',
            borderWidth: 1,
            extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
            formatter: params => {
                // console.log('params',params);

                if (params.length > 0) {

                    let {
                        name
                    } = params[0];

                    name = moment(name).format('MMMM, YYYY');

                    let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

                    params.forEach(param => {

                        let {
                            marker,
                            color,
                            seriesName,
                            value
                        } = param;

                        value = numeral(value).format('0,0')

                        kq += `<div class="text-dark">${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span></div>`
                    })

                    return kq;
                }
            },
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: 'rgba(255, 255, 255, 0.05)'
                }
            }
        },
        xAxis: [{
            type: 'category',
            data: dataChart.keys,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: 12,
                formatter: (data) => moment(data).format('TM, YYYY')
                // margin: 20
            }
        }],
        yAxis: [{
            type: 'value',
            // show: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    // type: 'dashed'
                }
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: 12,
                formatter: (data) => numeral(data).format('0a')
            }
        }, ],
        series: [{
                name: 'Máy tính',
                type: 'bar',
                data: dataChart.values.pc,
                itemStyle: {
                    color: '#1abc9c'
                },
            },
            {
                name: 'Điện thoại',
                type: 'bar',
                data: dataChart.values.mobile,
                itemStyle: {
                    color: '#e74c3c'
                },
            }
        ]
    };

    let myChart = echarts.init(ele);

    myChart.setOption(option);

    new ResizeSensor(ele, function () {
        myChart.resize();
    });

}



////////////////////////////////////////////////////////////////////////////////////
const getKeywordsSuggestionV1__History = (task, data,check,object) => {
      if(check == "true") {
    $(".grid-stack").append(`<div class="grid-stack-item my-4" data-gs-min-width="4" data-gs-min-height="6" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'4':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height='${(!key)?'6':(object['gs-height'])}' data-task="getKeywordsSuggestionV1__History">
    <div class="grid-stack-item-content shadow-gg">
        <div id="getKeywordsSuggestionV1--eCharts_wrapper" class="d-flex no-block bg-dark flex-column rounded-sm is-loading h-100" style="overflow:hidden">
                <div class="dropdown-wrapper d-flex justify-content-end">
                    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="far fa-ellipsis-h" style="color: #fff;"></i>
                    </button>
                    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                        <a class="getKeywordsSuggestionV1__History dropdown-item similarReloadTask text-muted" data-task="getKeywordsSuggestionV1__History" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                        <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                    </div>
                </div>
            <div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4">
                <span class="text-white font-gg font-16"> Lịch sử truy cập 12 tháng của từ khoá liên quan
                    "<strong class="font-gg font-16 text-success">${keywords}</strong>" theo thiết
                    bị</span>
            </div>
            <div id="getKeywordsSuggestionV1--eCharts" class="" style="width:auto;height:350px"></div>
        </div>
    </div>
</div>`)
      }
    renderMobilePCTraffic(data);


}
// ---------------------nhung bieu do nho  ben trai--------------------------------------------------
//1------------------------------------------------------------------------------------------
// const Chart__One___Left = (task, data, keywords) => {
//     $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="0" data-gs-y="9" data-gs-width="4" data-gs-height="6">
//    <div class="grid-stack-item-content shadow-gg">
//        <div class="bg-white rounded-sm shadow-gg h-100" style="over-flow:hidden">
//            <div class="d-flex no-block flex-column px-4 py-4">
//                <span class="text-dark font-gg font-16">Bộ lọc từ khoá</span>
//            </div>

//            <div id="iconLoading" class="col-12 py-5 text-center is-loading"></div>

//            <div id="filterLeft" class="text-center px-4 pb-1" style="display:none">
//                <div class="form-group text-left row">
//                    <label class="col-12 col-form-label font-12 text-muted">Độ dài</label>
//                    <div class="col-12" id="chieuDai"></div>
//                </div>

//                <div class="form-group text-left row">
//                    <label class="col-12 col-form-label align-self-end font-12 text-muted">Cạnh tranh</label>
//                    <div class="col-12" id="canhTranh"></div>
//                </div>

//                <div class="form-group text-left row">
//                    <label class="col-12 col-form-label align-self-end font-12 text-muted">Lượt tìm
//                        kiếm</label>
//                    <div class="col-12" id="luotTimKiem"></div>
//                </div>
//                <div class="form-group text-left row">
//                    <button type="button" class="btn btn-primary col-3 font-14 " style="margin:auto;background:##335de7;border-color:#5578eb " id="filter_tag">Lọc</button>
//                </div>
//            </div>
//        </div>
//    </div>
// </div>
// `);

// }

// const Chart__2___Left = (task, data,keywords) => {
//     $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="0" data-gs-y="14" data-gs-width="4" data-gs-height="4">
//     <div class="grid-stack-item-content shadow-gg" style="overflow:hidden">
//         <div class="d-none d-lg-block">
//         <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/1982_RC01/embed_loader.js"></script> 
//             <script type="text/javascript">
//                 trends.embed.renderExploreWidget("TIMESERIES", {
//                     "comparisonItem": [{
//                         "keywords": "tiki",
//                         "geo": "VN",
//                         "time": "today 3-m"
//                     }],
//                     "category": 0,
//                     "property": ""
//                 }, {
//                     "exploreQuery": "date=today%203-m&geo=VN&q=tiki",
//                     "guestPath": "https://trends.google.com.vn:443/trends/embed/"
//                 });
//             </script>
//         </div>
//     </div>
// </div> `);
// }
// const Chart__3__Left = (task,data,keywords) => {

//     $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="0" data-gs-y="18" data-gs-width="4" data-gs-height="4">
//     <div class="grid-stack-item-content shadow-gg h-95" style="overflow:hidden">
//         <div class="d-none d-lg-block">

//         <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/1982_RC01/embed_loader.js"></script> 

//             <script type="text/javascript">
//                 trends.embed.renderExploreWidget("GEO_MAP", {
//                     "comparisonItem": [{
//                         "keywords": "tiki",
//                         "geo": "VN",
//                         "time": "today 3-m"
//                     }],
//                     "category": 0,
//                     "property": ""
//                 }, {
//                     "exploreQuery": "date=today%203-m&geo=VN&q=tiki",
//                     "guestPath": "https://trends.google.com.vn:443/trends/embed/"
//                 });
//             </script>

//         </div>
//     </div>
// </div>`)
// }
// const Chart__4__Left = (task,data,keywords) => {
//     $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="0" data-gs-y="22" data-gs-width="4" data-gs-height="5">
//     <div class="grid-stack-item-content shadow-gg h-95" style="overflow:hidden">
//         <div class="d-none d-lg-block">

//         <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/1982_RC01/embed_loader.js"></script> 

//             <script type="text/javascript">
//                 trends.embed.renderExploreWidget("RELATED_TOPICS", {
//                     "comparisonItem": [{
//                         "keyword": "tiki",
//                         "geo": "VN",
//                         "time": "today 3-m"
//                     }],
//                     "category": 0,
//                     "property": ""
//                 }, {
//                     "exploreQuery": "date=today%203-m&geo=VN&q=tiki",
//                     "guestPath": "https://trends.google.com.vn:443/trends/embed/"
//                 });
//             </script>

//         </div>
//     </div>
// </div>`)
// }
// const Chart__5__Left = (task,data,keywords) => {
//     $('.grid-stack').append (`<div class="grid-stack-item my-4" data-gs-x="0" data-gs-y="26" data-gs-width="4" data-gs-height="5">
//     <div class="grid-stack-item-content shadow-gg h-95" style="overflow:hidden">
//         <div class="d-none d-lg-block">

//         <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/1982_RC01/embed_loader.js"></script> 

//             <script type="text/javascript">
//                 trends.embed.renderExploreWidget("RELATED_QUERIES", {
//                     "comparisonItem": [{
//                         "keyword": "tiki",
//                         "geo": "VN",
//                         "time": "today 3-m"
//                     }],
//                     "category": 0,
//                     "property": ""
//                 }, {
//                     "exploreQuery": "date=now%203-m&geo=VN&q=tiki",
//                     "guestPath": "https://trends.google.com.vn:443/trends/embed/"
//                 });
//             </script>

//         </div>
//     </div>
// </div>`)

// }
// ------------------------bang ben phải---------------
let isProcessing = false;
// let average2 = 0;
// const getKeywords = (callback) => {
//     const test = new URL(window.location.href);
//     let keywords = test.searchParams.get("keywords");

//     if (keywords == '' && !isProcessing) {
//         Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
//     } else {
//         // $('#searchTerm').text(keywords);
//         if (callback) callback();
//     }
// }
const setProcessing = (isProcessing) => {
    // set state
    isProcessing;
    // animation
    if (isProcessing) {
        $('#filterLeft').slideUp(100, function () {
            $('#iconLoading').slideDown();
        });
    } else {
        $('#iconLoading').slideUp(100, function () {
            $('#filterLeft').slideDown();
        });
    };
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
const renderTable = ({
    task,
    limit,
    keywords,
    dataSrc,
    columns,
    scrollY,
    paging,
    pageLength,
    buttons,
    header
}) => {
    let tableOptions = {
        ajax: {
            url: `//localapi.trazk.com/keywords/keywords.php?task=${task}&keywords=${keywords}&isLogin=true&lang=vn`,
            dataSrc: dataSrc || 'data.Data',
        },


        autoWidth: false,
        // deferRender: true,
        buttons: {
            dom: {
                container: {
                    tag: 'div',
                    className: 'd-flex no-block flex-row'
                },
                button: {
                    tag: 'div',
                    className: 'btn btn-rounded btn-success-2 font-12',
                    width: '135px'
                },
                buttonLiner: {
                    tag: null
                }
            },
            buttons: buttons || [],
        },
        columns,
        // dom: `<"d-flex no-block pl-4 pr-2 py-2 border-bottom"<"#${task}--header.font-gg font-16 align-self-center"><"ml-auto"B>>rtip`,
        dom: `<"d-flex no-block pl-4 pr-2 py-2 mb-3 "<"#${task}--header.font-gg font-16 align-self-center"><"ml-auto"B>>rtip`,
        pageLength,
        info: false,
        paging,
        ordering: false,
        scrollY,
        scrollCollapse: scrollY ? false : null,
        drawCallback: function () {
            // console.log("sda");
            async function getLocalData() {
                return await localStorage.getItem('KeywordRecommendationsRelated');
            }

            async function loadReportData() {
                return await $.get(`//localapi.trazk.com/keywords/keywords.php?task=${task}&keywords=${keywords}&isLogin=true&lang=vn`);
            }

            async function syncData() {
                return await $.get(`//localapi.trazk.com/keywords/keywords.php?task=${task}&keywords=${keywords}&isLogin=true&lang=vn`);
            }

            getLocalData().then(res => {
                if (res) {
                    res = JSON.parse(res);
                    // console.log("res async:", res);
                    // googleConstantData(res);
                    syncData().then(data => {
                        localStorage.setItem('KeywordRecommendationsRelated', JSON.stringify(data));
                    })
                } else {
                    loadReportData().then(res => {
                        // console.log(res);

                        // googleConstantData(res);
                        localStorage.setItem('KeywordRecommendationsRelated', JSON.stringify(res));
                    })
                }
            })


            // ------------------------------------------------------------------------------------
            $('.pagination').addClass('justify-content-center');
            $(`#${task}_paginate`).addClass('border-top p-20');

            $('.page-link').each(function (item) {
                $(this).addClass('font-12');
            });

            // renderSparkline(task);
        },
        initComplete: function () {
            // lọc theo chỉ định 
            if (task == 'KeywordRecommendationsPhraseMatch') {
                $("#KeywordRecommendationsPhraseMatch_wrapper .dataTables_scroll").before(`<div id="filter_dropdown" class="col-sm-12" style="justify-content: space-between;display: flex;">
                 <select id="_dodai_tukhoa" class="my-select font-gg border rounded">
                 <option value="" disabled >Lọc theo độ dài từ khóa </option>
                         <option value="1" selected=true>1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                         <option value="7">7</option>
                         <option value="8">8</option>
                         <option value="9">9</option>
                         <option value="10">10</option>                               
                     </select>
                    
                     <select id="_luottimkiem" class="my-select font-gg border rounded">
                     <option value="" disabled >Lọc theo Lượt tìm kiếm </option>
                         <option value="1" selected=true >0-500</option>
                         <option value="2">501-1,000</option>
                         <option value="3">1,001-5,000</option>
                         <option value="4">5,001-10,000</option>
                         <option value="5">10,000-20,000</option>
                         <option value="6">Trên 20,000</option>
                     </select>
                    

                     <select id="_cotcpc" class="my-select font-gg border rounded">
                     <option value="" disabled>Lọc theo CPC </option>
                         <option value="11" selected=true >0-1,000</option>
                         <option value="12">1,001-2,000</option>
                         <option value="13">2,001-3,000</option>
                         <option value="14">3,001-4,000</option>
                         <option value="15">4,001-5,000</option>
                         <option value="16">5,001-6,000</option>
                         <option value="17">6,001-7,000</option>
                         <option value="18">7,001-8,000</option>
                         <option value="19">8,001-9,000</option>
                         <option value="20">9,001-10,000</option>
                         <option value="21">Trên 10,000</option>
                     </select> 
                     <button class='btn btn-primary _loc' id='loc_cpc'>Lọc</button>

                 </div>`);

                $('.my-select').selectpicker();
                var locLTK = (settings, data, dataIndex) => {
                    let val = $("#_luottimkiem").val();
                    let from;
                    let to;
                    if (val == 1) //0 - 500;
                    {
                        from = 0;
                        to = 500;
                    } else if (val == 2) {
                        //500 - 1000;
                        from = 501;
                        to = 1000;
                    } else if (val == 3) {
                        //1000 - 20000;
                        from = 1001;
                        to = 5000;
                    } else if (val == 4) {

                        from = 5001;
                        to = 10000;
                    } else if (val == 5) {

                        from = 10000;
                        to = 20000;
                    } else if (val == 6) {
                        from = 20000;
                        to = 10000000000000000;
                    }
                    var data = parseFloat(numeral(data[1]).value()) || 0; // use data for the age column 
                    if ((isNaN(from) && isNaN(to)) ||
                        (isNaN(from) && data <= to) ||
                        (from <= data && isNaN(to)) ||
                        (from <= data && data <= to)) {
                        return true;
                    }
                    return false;
                }

                // $("#loc_ltk").click(() => {
                //     $.fn.dataTable.ext.search.push(conditionFunc);
                //     this.api().columns(1).draw();
                // })


                var locCPC = (settings, data, dataIndex) => {
                    let val1 = $("#_cotcpc2").val();
                    let from = 1000 * (val1 - 11) !== 0 ? 1000 * (val1 - 11) + 1 : 0;
                    let to = val1 == 21 ? 10000000000000000000 : 1000 * (val1 - 11) + 1000;
                    var data = parseFloat(numeral(data[2]).value()) || 0; // use data for the age column 
                    if ((isNaN(from) && isNaN(to)) ||
                        (isNaN(from) && data <= to) ||
                        (from <= data && isNaN(to)) ||
                        (from <= data && data <= to)) {
                        return true;
                    }
                    return false;

                }
                var locDDTK = (settings, data, dataIndex, dataSrc) => {
                    // console.log("datasrc", dataSrc.keyword);
                    let val_dodai_tukhoa = $("#_dodai_tukhoa").val();
                    // console.log("val do dai tukhoa", val_dodai_tukhoa);
                    let val = dataSrc.keyword.split(" ").length;
                    if (parseInt(val_dodai_tukhoa) == parseInt(val)) {
                        return true;
                    }
                    return false;
                }

                $("#loc_cpc").click(() => {
                    $.fn.dataTable.ext.search.push(locLTK, locCPC, locDDTK);
                    this.api().columns(0).draw();
                    this.api().columns(1).draw();
                    this.api().columns(2).draw();
                })
            }
            // ==============================================================================================================





            //////loc theo table tu khoa lien quan
            if (task == "KeywordRecommendationsRelated") {
                $("#KeywordRecommendationsRelated_wrapper .dataTables_scroll").before(`<div id="filter2_dropdown" class="col-sm-12"  style="justify-content: space-between;display: flex;">                           
                <select id="_dodai_tukhoa2" class="my-select font-gg border rounded">
                <option value="" disabled >Lọc theo độ dài từ khóa </option>
                        <option selected=true value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>                               
                    </select>
                    

                    <select id="_luottimkiem2" class="my-select font-gg border rounded">
                    <option value="" disabled >Lọc theo Lượt tìm kiếm </option>
                        <option selected=true value="1">0-500</option>
                        <option value="2">501-1,000</option>
                        <option value="3">1,001-5,000</option>
                        <option value="4">5,001-10,000</option>
                        <option value="5">10,000-20,000</option>
                        <option value="6">Trên 20,000</option>
                    </select>
                  
                    <select id="_cotcpc2" class="my-select font-gg border rounded">
                    <option value="" disabled >Lọc theo CPC </option>
                        <option selected=true value="11">0-1,000</option>
                        <option value="12">1,001-2,000</option>
                        <option value="13">2,001-3,000</option>
                        <option value="14">3,001-4,000</option>
                        <option value="15">4,001-5,000</option>
                        <option value="16">5,001-6,000</option>
                        <option value="17">6,001-7,000</option>\
                        <option value="18">7,001-8,000</option>
                        <option value="19">8,001-9,000</option>
                        <option value="20">9,001-10,000</option>
                        <option value="21">Trên 10,000</option>
                    </select> 
                    <button class='btn btn-primary _loc' id='loc_cpc2'>Lọc</button>
                </div>`);
                $('.my-select').selectpicker();
                var conditionFunc = (settings, data, dataIndex) => {
                    let val = $("#_luottimkiem2").val();
                    // console.log("val", val);
                    let from;
                    let to;
                    if (val == 1) //0 - 500;
                    {
                        from = 0;
                        to = 500;
                    } else if (val == 2) {
                        //500 - 1000;
                        from = 501;
                        to = 1000;
                    } else if (val == 3) {
                        //1000 - 20000;
                        from = 1001;
                        to = 5000;
                    } else if (val == 4) {

                        from = 5001;
                        to = 10000;
                    } else if (val == 5) {

                        from = 10000;
                        to = 20000;
                    } else if (val == 6) {

                        from = 20000;
                        to = 10000000000000000;
                    }
                    var data = parseFloat(numeral(data[1]).value()) || 0; // use data for the age column 
                    if ((isNaN(from) && isNaN(to)) ||
                        (isNaN(from) && data <= to) ||
                        (from <= data && isNaN(to)) ||
                        (from <= data && data <= to)) {
                        return true;
                    }
                    return false;
                }



                var conditionFunc2 = (settings, data, dataIndex) => {
                    let val1 = $("#_cotcpc2").val();
                    let from = 1000 * (val1 - 11) !== 0 ? 1000 * (val1 - 11) + 1 : 0;
                    let to = val1 == 21 ? 10000000000000000000 : 1000 * (val1 - 11) + 1000;
                    var data = parseFloat(numeral(data[2]).value()) || 0; // use data for the age column 
                    if ((isNaN(from) && isNaN(to)) ||
                        (isNaN(from) && data <= to) ||
                        (from <= data && isNaN(to)) ||
                        (from <= data && data <= to)) {
                        return true;
                    }
                    return false;

                }
                var conditionFunc3 = (settings, data, dataIndex, dataSrc) => { //nhớ cái này có 5 tham số
                    // console.log("datasrc", dataSrc.keyword);

                    let val_dodai_tukhoa = $("#_dodai_tukhoa2").val();
                    // console.log("val do dai tukhoa", val_dodai_tukhoa);
                    let val = dataSrc.keyword.split(" ").length;
                    if (parseInt(val_dodai_tukhoa) == parseInt(val)) {
                        return true;
                    }
                    return false;
                }

                $("#loc_cpc2").click(() => {
                    $.fn.dataTable.ext.search.push(conditionFunc, conditionFunc2, conditionFunc3);
                    this.api().columns(0).draw();
                    this.api().columns(1).draw();
                    this.api().columns(2).draw();
                })

            }


            if (header) $(`#${task}--header`).text(header);

            $('.dataTables_scrollHeadInner').attr('style', 'padding-right:0px!important')
                .find('table').attr('style', 'border-top-color:transparent!important;margin-top:0px!important')
                .find('th').addClass('font-10 border-top-0 border-bottom text-muted')

            $('.dataTables_scrollBody table th').addClass('border-0');

            $(`.dataTables_scrollBody`).perfectScrollbar();

            // renderSparkline(task);

            if (task == 'getKeywordsSuggestionV1') {

                setProcessing(false);

                $('#filterLeft .spinner-border').hide();

                this.api().columns(2).every(function () {
                    let column = this;
                    let title = $(column.header()).text();
                    let select = $('<select class="form-control custom-select"><option value="">Tất cả ' + title + '</option></select>')
                        .appendTo($('#chieuDai'))
                        .on('change', function () {
                            let val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });

                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>')
                    });
                });
                // console.log(this.api().columns(1).data().unique().toArray());

                let valueLuotTimKiem = this.api().columns(1).data().unique()[0].map((v, i) => numeral(v).value()).sort((a, b) => a - b);
                let valueCanhTranh = this.api().columns(3).data().unique()[0].map((v, i) => numeral(v).value()).sort((a, b) => a - b);

                // console.log('values',values);

                const onRangeChange = (range, index) => {

                    const conditionFunc = (settings, data, dataIndex) => {
                        if (settings.nTable.id !== 'getKeywordsSuggestionV1') {
                            return true;
                        }
                        var min = parseInt(range.from_value, 10);
                        var max = parseInt(range.to_value, 10);
                        var data = parseFloat(numeral(data[index]).value()) || 0; // use data for the age column

                        if ((isNaN(min) && isNaN(max)) ||
                            (isNaN(min) && data <= max) ||
                            (min <= data && isNaN(max)) ||
                            (min <= data && data <= max)) {
                            return true;
                        }
                        return false;
                    }
                    $("#filter_tag").off('click');
                    $("#filter_tag").on('click', () => {

                        $.fn.dataTable.ext.search.push(conditionFunc);
                        this.api().columns(1).draw();
                    });
                }

                $(`<input type="text" class="js-range-slider" name="canhTranh" value=""/>`)
                    .appendTo($('#canhTranh'))
                    .ionRangeSlider({
                        skin: "round",
                        type: "double",
                        grid: true,
                        prettify_separator: ",",
                        values: valueCanhTranh,
                        onChange: (range) => onRangeChange(range, 3),
                    });


                $(`<input type="text" class="js-range-slider" name="luotTimKiem" value=""/>`)
                    .appendTo($('#luotTimKiem'))
                    .ionRangeSlider({
                        skin: "round",
                        type: "double",
                        grid: false,
                        prettify_separator: ",",
                        values: valueLuotTimKiem,
                        onChange: (range) => onRangeChange(range, 1),
                    });

                $('.irs-min, .irs-max, .irs-from, .irs-to, .irs-single').addClass('font-12');

                $(`#filterLeft input[name="canhTranh"]`).change(function () {
                    let val = $(this).val();
                    // console.log(val);
                })
            } // if task == getKeywordsSuggestion
        },
        language: {
            loadingRecords: '<div class="placeholder-loading" style="height:10px"></div>',
            paginate: {
                first: "Đầu",
                last: "Cuối",
                next: "Sau",
                previous: "Trước"
            },
        }
    }
    return $(`#${task}`).DataTable(tableOptions);
}

const doMainRequest = (task, data,check,object) => {
     if(check == "true") {
    $('.grid-stack').append(`
  <div class="grid-stack-item my-4"  data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'10':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'9':(object['gs-height'])}" data-task="doMainRequest" data-gs-min-width ="6" data-gs-min-height="${(!key)?'8':'9'}">
  <div class="grid-stack-item-content shadow-gg" >
  <div class="bg-white rounded-sm shadow-gg h-100" >
  <div class="dropdown-wrapper d-flex justify-content-end">
  <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
  </button>
  <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
      <a class="doMainRequest dropdown-item similarReloadTask text-muted" data-task="doMainRequest" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
      <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
  </div>
</div>
      <table id="getKeywordsSuggestionV1" class="table table-striped" style="width:100%;">    
      <thead>
      <tr role="row"><span class="font-16 font-gg ml-3">FFF gợi ý <strong class="font-gg font-16 text-primary">10</strong> từ khóa liên quan với từ khóa "<strong class="font-gg font-16 text-success">${keywords}</strong>" cho chiến dịch SEO và Google Ads</span></tr>               
                    <tr>
                    <th class="text-muted font-10" style="width:30%">Từ khoá</th>
                    <th style="width:20%" class="text-muted font-10">Tìm kiếm</th>
                    <th style="width:15%" class="text-muted font-10">Độ dài</th>
                    <th class="text-muted font-10"  style="width:20%">Cạnh tranh</th>
                    <th class="text-muted font-10" style="width:25%">CPC</th>                  
      </tr>
      </thead>
      <tbody class="tbody__getKeywordsSuggestionV1"></tbody>      
      </table>

  </div>
  </div>
</div>`)}
if (check =="false") {
    $('.tbody__getKeywordsSuggestionV1').html('')
}
let call_api = data.data.keywords;
console.log('KeywordRecommendationsRelated', data.data);
 if (!call_api) { 
    // $("#getKeywordsSuggestionV1").parent().hide();    
    return true
    
    };
 call_api.forEach((key, index) => { 
   if (index<10)
 {     let res = `href="index.php?view=keywords&action=keywords-overview&keyword=${key.keyword}"class="changeURL font-12"  data-input="${key.keyword}" data-keyword="${key.keyword}"`;
 let sparkline = `<div class="d-flex no-block flex-row"> 
<a data-type="keyword" ${res}"><i class="child-hover far fa-search mr-2"></i>                                               
  ${key.keyword}
</a>       
<div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${key.lichsutimkiemtrungbinh ? Object.values(key.lichsutimkiemtrungbinh) : [] }]"></div>
</div>`;
    //  let cot1= key.keyword;
     let cot2=numeral(key.solantimkiemtrungbinh).format('0,0');
     let cot3=`<div class="">${key.chieudai}</div>`;
     let cot4=`<div class="round round-sm ${key.dokho <= 70 ? key.dokho <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${key.dokho ? key.dokho : 0}</a>`;
     let cot5=numeral(key.giathaudautrangthapnhat).format('0,0') + ' - ' + numeral(key.giathaudautrangcaonhat).format('0,0');
         $('.tbody__getKeywordsSuggestionV1').append(`<tr>               
                <td style ="white-space:nowrap">${sparkline}</td>
                <td>${cot2}</td>
                <td>${cot3}</td>
                <td>${cot4}</td>
                <td style ="white-space:nowrap">${cot5}</td>      
        </tr>`)
 }
 
 })
 $('#getKeywordsSuggestionV1').DataTable({
    "paging": false,        
    "searching": false,
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false,
    "pageLength":10,
    "ordering": false,
    "info": false,
    "sorting":false
  });
        renderSparkline(task);         
        // renderChart('getBidForecast');
        // renderChart('KeywordAnalysisOrganicGraph');
        // renderChart('KeywordAnalysisOrganicTable');
        // renderChart('KeywordAnalysisPaidGraph');
        // renderChart('KeywordAnalysisPaidTable');
        // renderChart('KeywordRecommendationsPhraseMatch');
        // renderChart('KeywordRecommendationsRelated');
}


    
    // getKeywords(() => {
    //     renderTable({
    //         task,
    //         limit: 2000,
    //         paging: false,
    //         pageLength: 10,
    //         keywords,
    //         // dataSrc: 'data',
    //         dataSrc: res => {
    //             // console.log('res :', res);
    //             let {
    //                 keywords: dsTuKhoa,
    //                 traffic
    //             } = res.data;


    //             // if (traffic) {
    //             //     renderMobilePCTraffic(traffic);
    //             // }

    //             if (dsTuKhoa) {
    //                 let header = textRecommendation(dsTuKhoa.length);
    //                 $(`#${task}--header`).html(header);
    //                 $(".tukhoaLienQuan").text(dsTuKhoa.length);
    //                 // let excel1 = excelText;
    //                 // $(".ml-auto").html(excel1);
    //                 return dsTuKhoa;
    //             }
    //             return [];
    //         },
    //         columns: [{
    //                 title: 'Từ khoá',
    //                 data: 'keyword',
    //                 render: (data, type, row) => {
    //                     let res = `href="index.php?view=keywords&action=keywords-overview&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
    //                     return `<div class="d-flex no-block flex-row">
    //                         <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
    //                             <i class="child-hover far fa-search mr-2"></i>
    //                             ${data == '[Hidden]'
    //                             ? '[Đăng ký tài khoản miễn phí để xem]'
    //                             : data}
    //                         </a>
    //                         <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.lichsutimkiemtrungbinh}]"></div>
    //                     </div>`
    //                 },
    //                 className: 'parent-hover pr-0',
    //                 width: '50%',
    //             },
    //             {
    //                 title: 'Tìm kiếm',
    //                 data: 'solantimkiemtrungbinh',
    //                 render: (data) => numeral(data).format('0,0'),
    //                 className: 'text-right'
    //                 // render: (data) => `<div class="text-right">${numeral(data).format('0,0')}</div>`,
    //                 // width: '44px',
    //             },
    //             {
    //                 title: 'Độ dài',
    //                 data: 'chieudai',
    //                 className: 'text-right'
    //                 // render: (data) => `<div class="text-right">${data}</div>`,
    //                 // width: '31px',
    //             },
    //             {
    //                 title: 'Cạnh tranh',
    //                 data: 'dokho',
    //                 render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,
    //                 // width: '52px',
    //             },
    //             {
    //                 title: 'CPC (đ)',
    //                 data: (data) => numeral(data.giathaudautrangthapnhat).format('0,0') + ' - ' + numeral(data.giathaudautrangcaonhat).format('0,0'),
    //                 // width: '42px',
    //                 className: 'text-center'
    //             }
    //         ],
    //         // buttons: [{
    //         //     extend: 'excel',
    //         //     text: excelText,
    //         //     filename: 'fff_com_vn_CongCuTuKhoa'
    //         // }],
    //     })


    //     renderSparkline(task);        
    //     renderChart('getBidForecast');
    //     renderChart('KeywordAnalysisOrganicGraph');
    //     renderChart('KeywordAnalysisOrganicTable');
    //     renderChart('KeywordAnalysisPaidGraph');
    //     renderChart('KeywordAnalysisPaidTable');
    //     renderChart('KeywordRecommendationsPhraseMatch');
    //     renderChart('KeywordRecommendationsRelated');

    // });
// }

// const renderChart = (task) => {

//     switch (task) {
//         case 'KeywordAnalysisOrganicTable': //id
//             var t = renderTable({
//                 task,
//                 keywords,
//                 limit: 0,
//                 paging: true,
//                 pageLength: 10,
//                 pagingType: 'full_numbers',
//                 // dataSrc: res => console.log((JSON.parse(res.data).Data).filter(item => item.Domain != 'grid.upgrade')),
//                 dataSrc: res => {
//                     // console.log("res asd",res.data);
//                     // let excel1 = excelText;
//                     // $(".ml-auto").html(excel1);

//                     if (res.data.Data == null) {
//                         $("#organicgraph_table1").hide();
//                         // console.log("KeywordAnalysisOrganicTable");
//                     } else if ((res.data).Data.length > 0) {
//                         let header = texttop10trangSEO();
//                         $(`#${task}--header`).html(header);
//                         return ((res.data).Data).filter(item => item.Domain != 'grid.upgrade')

//                     } else {
//                         // console.log("data KeywordAnalysisOrganicTable", data);
//                         $("#KeywordAnalysisOrganicTable").hide();
//                         $("#KeywordAnalysisOrganicGraph").append("<h2>Không có dữ liệu cần tìm</h2>");
//                         emptyState('#KeywordAnalysisOrganicGraph');
//                         return [];

//                     }
//                 },
//                 columns: [{
//                         data: null,
//                         // render: (data) => {
//                         //     switch (data) {
//                         //         case 1:
//                         //             return `<div class="round round-sm round-success font-bold">${data}</div>`
//                         //         case 2:
//                         //             return `<div class="round round-sm round-warning font-bold">${data}</div>`
//                         //         case 3:
//                         //             return `<div class="round round-sm round-primary font-bold">${data}</div>`
//                         //         default:
//                         //             return `<span class="text-muted">${data ? data : ''}</span>`;
//                         //     }
//                         // },
//                         className: 'align-middle',
//                         width: '12px'
//                     },
//                     {
//                         data: 'Domain',
//                         render: (data, type, row) => `
//                                 <div class="d-flex no-block flex-row">
//                                     <a  data-type="website" class="changeURL" data-input="${data}">
//                                         <img src="${row.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />
//                                         ${data}</a>
//                                 </div>`,
//                         className: 'align-middle',
//                         width: '150px',
//                     },
//                     {
//                         data: 'TotalShare',
//                         render: (data, type, row) => {
//                             data = numeral(data).format('0%');
//                             let change = `
//                                 <span class="font-10 ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">
//                                     ${numeral(Math.abs(row.Change)).format('0%')}
//                                 </span>`

//                             return `
//                             <div class="row">
//                                 <div class="col-3">${data}</div>
//                                 <div class="col align-self-center">
//                                     <div class="progress bg-dark-2">
//                                         <div class="progress-bar bg-success" style="width:${data};height:6px;" role="progressbar"></div>
//                                     </div>
//                                 </div>
//                             </div>`
//                         },
//                         width: '120px',
//                         className: 'align-middle'
//                     },
//                     {
//                         data: 'Change',
//                         render: (data, type, row) => {
//                             data = numeral(data).format("0%");
//                             let change = `<span class=" d-flex font-10 arrow_compare justify-center ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">                                      
//                             ${numeral(Math.abs(row.Change)).format('0%')}
//                             </span>`
//                             return `
//                            <div class="row">                                                                      
//                                <div class="col-8 text">${change}</div>                                   
//                            </div>`
//                         },
//                         className: 'align-middle'
//                     },

//                     {
//                         data: 'Position',
//                         render: (data, type, row) => `<p>${data}</> `,
//                         className: 'align-middle'
//                     },


//                     {
//                         data: 'Url',
//                         render: data => data == "N/A" ? '' : `
//                             <a href="${data}" target="_blank" class="text-break text-truncate-2">${data} <i class="child-hover fal fa-external-link"></i></a>
//                         `,
//                         className: 'align-middle parent-hover',
//                     },
//                 ],
//                 buttons: [{
//                     extend: 'excel',
//                     text: excelText,
//                     filename: 'fff_com_vn_CongCuTuKhoa'
//                 }],
//                 scrollY: 'auto'
//             });
//             t.on('order.dt search.dt', function () {
//                 t.column(0, {
//                     search: 'applied',
//                     order: 'applied'
//                 }).nodes().each(function (cell, i) {
//                     cell.innerHTML = i + 1;
//                 });
//             }).draw();
//             break;

//         case 'KeywordAnalysisPaidTable':
//             var t = renderTable({
//                 task,
//                 keywords,
//                 limit: 0,
//                 paging: true,
//                 pageLength: 10,
//                 // dataSrc: res => console.log((JSON.parse(res.data).Data).filter(item => item.Domain != 'grid.upgrade')),
//                 dataSrc: res => {
//                     // console.log("hay1");


//                     if (res.data.Data == null) {
//                         // console.log("'KeywordAnalysisPaidTable");
//                         $("#paidgraph_table").hide();
//                     } else if (res.data.Data.length > 0) {
//                         // console.log("hay2");
//                         let header = texttop10qctukhoa();                        
//                         $(`#${task}--header`).html(header);
//                         return (res.data.Data).filter(item => item.Domain != 'grid.upgrade')
//                     } else {
//                         // console.log("vao day1 ");
//                         // $("#KeywordAnalysisPaidGraph").append("<p>Khong co du lieu  can tim</p>");
//                         // console.log("deo co data");
//                         emptyState('#KeywordAnalysisPaidGraph');
//                         return [];
//                         // $("#KeywordAnalysisPaidGraph").hide();

//                     }
//                 },
//                 columns: [{
//                         data: null,
//                         // render: (data, row) => ` `,
//                         className: 'align-middle',
//                         // width:'20px'

//                     },
//                     {
//                         data: 'Domain',
//                         render: (data, type, row) => `
//                                 <div class="d-flex no-block flex-row">
//                                     <a data-type="website" class="changeURL" data-input="${data}" href="#">
//                                         <img src="${row.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />
//                                         ${data}</a>
//                                 </div>`,
//                         className: 'align-middle'
//                         // ,width: '290px',
//                     },
//                     {
//                         data: 'TotalShare',
//                         render: (data, type, row) => {
//                             data = numeral(data).format('0%');
//                             let change = `
//                                 <span class="font-10 arrow_compare ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">                                      
//                                 </span>`
//                             return `
//                             <div class="row">
//                                 <div class="col-3">${data}</div>
//                                 <div class="col align-self-center">
//                                     <div class="progress bg-dark-2">
//                                         <div class="progress-bar bg-danger" style="width:${data};height:6px;" role="progressbar"></div>
//                                     </div>
//                                 </div>                                  
//                             </div>`
//                         },
//                         className: 'align-middle',
//                         // width:'390px'
//                     },
//                     {
//                         data: 'Change',
//                         render: (data, type, row) => {
//                             data = numeral(data).format('0%');
//                             let change = `<span class=" d-flex font-10 arrow_compare justify-center ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">                                      
//                              ${numeral(Math.abs(row.Change)).format('0%')}
//                              </span>`
//                             return `
//                             <div class="row">                                                                      
//                                 <div class="col-8 text">${change}</div>                                   
//                             </div>`
//                         },
//                         className: 'align-middle'
//                     },

//                     {
//                         data: 'Position',
//                         render: (data, type, row) => `<p>${data}</> `,
//                         className: 'align-middle'
//                     },


//                     {
//                         data: 'Url',
//                         render: data => data == "N/A" ? '' : `
//                             <a href="${data}" target="_blank" class="text-break text-truncate-2">${data} <i class="child-hover fal fa-external-link"></i></a>
//                         `,
//                         className: 'align-middle parent-hover',
//                     },
//                 ],
//                 buttons: [{
//                     extend: 'excel',
//                     text: excelText,
//                     filename: 'fff_com_vn_CongCuTuKhoa'
//                 }],
//                 scrollY: 'auto'
//             });
//             t.on('order.dt search.dt', function () {
//                 t.column(0, {
//                     search: 'applied',
//                     order: 'applied'
//                 }).nodes().each(function (cell, i) {
//                     cell.innerHTML = i + 1;
//                 });
//             }).draw();
//             break;


//        case 'KeywordRecommendationsPhraseMatch':
           
//             // if (!$(`#${task}`)) {
//             //     $.ajax({
//             //         url: `localapi.trazk.com/keywords/keywords.v1.php?task=${task}&limit=${limit}&keywords=${keywords}&isLogin=${isLogin}&lang=${lang}`
//             //     }).done(res => {
//             //         // console.log(res)
//             //     })
//             // } else {

//             //     /////////////////////////////###############
//                 renderTable({
//                     task,
//                     keywords,
//                     limit: 0,
//                     // paging: true,
//                     pageLength: 5,
//                     dataSrc: res => {
//                         let {
//                             records,
//                             totalRecords,
//                             totalVisits
//                         } = (res.data);
//                         if (records.length > 0 && totalRecords && totalVisits) {
//                             let header = textPhraseMatch(totalRecords);
//                             $(".rowKeywordRecommendationsPhraseMatch").show();
//                             $(`#${task}--header`).html(header);

//                             let header1 = textalertPimary(totalRecords);
//                             // $("#alert_primary").show();
//                             $('#alert_primary').html(header1);
//                             // console.log("sddds",header1);
//                             return records;
//                         } else {

//                             emptyState($(`#${task}_wrapper`).parent());
//                             return [];
//                         }
//                     },
//                     // dataSrc: res => (JSON.parse(res.data)).records,
//                     columns: [{
//                             data: 'keyword',
//                             width: '30%',
//                             render: (data, type, row) => {
//                                 let res = `href="index.php?view=keywords&action=keywords-overview&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
//                                 return `                                   
//                                 <div class="d-flex no-block flex-row">
//                                         <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" class="text-muted font-12"' : res}">
//                                             <i class="child-hover far fa-search mr-2"></i>
//                                             ${data == '[Hidden]'
//                                             ? '[Tạo tài khoản miễn phí để xem nội dung này]'
//                                             : data}
//                                         </a>
//                                         <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.volumeTrend ? Object.values(row.volumeTrend) : []}]"></div>
//                                     </div>`
//                             },
//                             className: 'parent-hover'
//                         },
//                         {
//                             data: 'volume',
//                             render: data => numeral(data).format('0,0'),
//                             className: 'text-right'
//                         },
//                         {
//                             data: 'cpc',
//                             render: data => numeral(data * 23500).format('0,0') + 'đ',
//                             className: 'text-right'
//                         },
//                         {
//                             data: 'leadingSite',
//                             render: (data, type, row) => `
//                                 <div class="d-flex no-block flex-row">
//                                     <a  data-type="website" class="changeURL" data-input="${data}" href="#">
//                                         <img src="${row.favicon}" class="p-1 mr-2 border rounded bg-secondary" />
//                                         ${data}</a>
//                                 </div>`,
//                         },
//                         {
//                             data: 'totalVisits',
//                             render: (data, type, row) => numeral(data).format('0,0'),
//                             className: 'text-right'
//                         },
//                         {
//                             data: (data) => numeral(data.organicShare).format('0%'),
//                             render: (data) => `<div class="progress bg-danger">
//                                     <div class="progress-bar bg-success" style="width:${data};height:6px;" role="progressbar"></div>
//                                 </div>`
//                         },
//                     ],
//                     buttons: [{
//                         extend: 'excel',
//                         text: excelText,
//                         filename: 'fff_com_vn_CongCuTuKhoa'
//                     }],
//                     // scrollY: '300px' 
//                 });
//             // }

//             break;
//         case 'KeywordRecommendationsRelated':
//             // console.log("data dang kiem bi rong");

//             renderTable({
//                 task,
//                 keywords,
//                 limit: 0,
//                 // paging: true,
//                 pageLength: 5,
//                 dataSrc: res => {



//                     let {
//                         records,
//                         totalRecords,
//                         totalVisits,
//                         maxScore
//                     } = res.data;
//                     if (records.length > 0 && totalRecords && totalVisits) {
//                         let header = textRelated(totalRecords);
//                         $(".rowKeywordRecommendationsRelated").show();
//                         $(`#${task}--header`).html(header);

//                         let header2 = textalertDanger(totalRecords);
//                         $("#alert_danger").html(header2);
//                         // console.log("sdds",header2);

//                         return records;
//                     } else {
//                         emptyState($(`#${task}_wrapper`).parent());
//                         return [];
//                     }
//                 },

//                 // dataSrc: res => (JSON.parse(res.data)).records,
//                 columns: [{
//                         data: 'keyword',
//                         width: '30%',
//                         render: (data, type, row) => {
//                             let res = `href="index.php?view=keywords&action=keywords-overview&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;

//                             return `<div class="d-flex no-block flex-row">
//                                     <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php"  target="top" class="text-muted font-12"' : res}">
//                                         <i class="child-hover far fa-search mr-2"></i>
//                                         ${data == '[Hidden]'
//                                         ? '[Tạo tài khoản miễn phí để xem]'
//                                         : data}
//                                     </a>
//                                     <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.volumeTrend ? Object.values(row.volumeTrend) : []}]"></div>
//                                 </div>`
//                         },
//                         className: 'parent-hover'
//                     },
//                     {
//                         data: 'volume',
//                         render: data => numeral(data).format('0,0'),
//                         className: 'text-right'
//                     },
//                     {
//                         data: 'cpc',
//                         render: data => numeral(data * 23500).format('0,0') + 'đ',
//                         className: 'text-right'
//                     },
//                     {
//                         data: 'leadingSite',
//                         render: (data, type, row) => `
//                             <div class="d-flex no-block flex-row">
//                                 <a  data-type="website" class="changeURL" data-input="${data}" href="#">
//                                     <img src="${row.favicon}" class="p-1 mr-2 border rounded bg-secondary" />
//                                     ${data}</a>
//                             </div>`,
//                     },
//                     {
//                         data: 'score',
//                         render: (data, type, row) => numeral(data).format('0%'),
//                         className: 'text-right'
//                     },
//                     {
//                         data: 'totalVisits',
//                         render: (data, type, row) => `${numeral(data).format('0,0')}`,
//                         className: 'text-right'
//                     },
//                     {
//                         data: (data) => numeral(data.organicShare).format('0%'),
//                         render: (data) => `<div class="progress bg-danger">
//                                 <div class="progress-bar bg-success" style="width:${data};height:6px;" role="progressbar"></div>
//                             </div>`
//                     },
//                 ],
//                 buttons: [{
//                     extend: 'excel',
//                     text: excelText,
//                     filename: 'fff_com_vn_CongCuTuKhoa'
//                 }],
//                 // scrollY: '300px'
//             });

//             break;

//         default:
//             $.ajax(`//localapi.trazk.com/keywords/keywords.v1.php?task=${task}&keywords=${keywords}&isLogin=true&lang=vn`)

//                 .done(function (data) {

//                     if (data.data == "") {
//                         // console.log("ko co data default");
//                         $("#" + task).append("<h2 style='text-align:center;text-align:center;left:37%;bottom: 47%;position: absolute'>Không có dữ liệu cần tìm</h2>");
//                         // // $("#das").remove();
//                         // $("#KeywordAnalysisOrganicGraph").append("<h1 id='das' style='text-align:center'>Khong co du lieu  can tim</h1>");
//                         // $("#KeywordAnalysisPaidGraph--eCharts").hide();
//                         $(".rowKeywordAnalysisPaidGraph").hide();
//                         $("#KeywordAnalysisPaidGraph").hide();
//                         // $("#KeywordAnalysisOrganicTable").hide();
//                         $("#KeywordAnalysisPaidTable_wrapper").hide();
//                         // $("#KeywordAnalysisPaidTable").hide();
//                         $("#KeywordAnalysisOrganicTable_wrapper").hide();
//                         // $("#xyzmnrelative").hide();
//                         $("#KeywordRecommendationsPhraseMatch").hide();
//                         $("#xinthuarelative").hide();
//                         $("#KeywordRecommendationsRelated").hide();
//                         $("#alert_primary").hide();
//                         $("#alert_danger").hide();
//                         $(`#${task}`).removeClass('is-loading');

//                         // location.reload();

//                     } else {
//                         // console.log (" is login ",data.data);
//                         // let { keywords: resKw } = data;

//                         switch (task) {
//                             case 'KeywordAnalysisOrganicGraph':
//                                 // console.log(task, Data);
//                                 var {
//                                     Data
//                                 } = (data.data);

//                                 $('#KeywordAnalysisOrganicGraph').prepend(' <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="Chart__Top5__PageSeo dropdown-item similarReloadTask text-muted" data-task="Chart__Top5__PageSeo" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item remove__chart text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>   <span class="text_top_chart_header">Top 5 trang SEO tốt nhất từ khoá ”<strong class="font-gg font-17 text-success">' + keywords + '</strong>” trong 3 tháng gần đây</span>');
//                                 // Top 5 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trong 3 tháng gần đây
//                                 if (Data && Object.values(Data).length > 0) {
//                                     // console.log("data", data);
//                                     $(".rowKeywordAnalysisOrganicGraph").show();
//                                     let dataWebsites = {
//                                         keys: [],
//                                         series: []
//                                     };

//                                     let colors = [' #fd397a', '#0abb87', '#03a9f3', '#5d78ff', '#ffb822']

//                                     Object.values(Data).forEach((item, index) => {
//                                         let name, data = [];
//                                         item.Total[0].forEach(val => {
//                                             let {
//                                                 Key,
//                                                 Value
//                                             } = val;
//                                             if (index == 0) {
//                                                 dataWebsites.keys.push(Key)
//                                             }
//                                             name = Object.keys(Data)[index];
//                                             // console.log("haha:",Object.keys(Data)[index]);
//                                             data.push(Value.Share);
//                                         })

//                                         dataWebsites.series.push({
//                                             name,
//                                             data,
//                                             type: "line",
//                                             stack: 'trafficShare',
//                                             itemStyle: {
//                                                 color: colors[index]
//                                             },
//                                             areaStyle: {
//                                                 opacity: 0.8
//                                             },
//                                             smooth: true,
//                                             // symbol: "circle",
//                                             // symbolSize: 10,
//                                             // showSymbol: true,
//                                             // hoverAnimation: false,
//                                         })

//                                     })

//                                     dataWebsites.series = dataWebsites.series.reverse();

//                                     $(`#${task}`).removeClass('is-loading');

//                                     let ele = document.getElementById(`${task}--eCharts`);

//                                     let myChart = echarts.init(ele, 'light');

//                                     let option = {
//                                         tooltip: {
//                                             trigger: "axis",
//                                             backgroundColor: 'rgba(255, 255, 255, 1)',
//                                             borderColor: 'rgba(93,120,255,1)',
//                                             borderWidth: 1,
//                                             extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
//                                             formatter: params => {
//                                                 // console.log('params',params);

//                                                 if (params.length > 0) {

//                                                     let {
//                                                         name
//                                                     } = params[0];

//                                                     name = moment(name).format('MMMM YYYY');

//                                                     let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

//                                                     params.forEach(param => {

//                                                         let {
//                                                             marker,
//                                                             color,
//                                                             seriesName,
//                                                             value
//                                                         } = param;

//                                                         value = numeral(value).format('0.00%');

//                                                         kq += `<div class="text-dark my-1">${marker} ${seriesName} <span class="font-bold" style="color:${color}">${value}</span></div>`
//                                                     })

//                                                     return kq;
//                                                 }
//                                             },
//                                         },
//                                         legend: {

//                                             top: '7%',
//                                             align: 'left',
//                                             // itemGap: 15,
//                                             data: Object.keys(Data),
//                                             textStyle: {

//                                                 fontFamily: 'Arial',
//                                                 fontSize: 12,
//                                             }
//                                         },
//                                         grid: {
//                                             // top: 20,
//                                             // left: '30%',
//                                             // right: "5%",
//                                             // bottom: 40,
//                                             top: '30%'
//                                         },
//                                         xAxis: {
//                                             type: "category",
//                                             boundaryGap: false,
//                                             data: dataWebsites.keys,
//                                             axisLine: {
//                                                 lineStyle: {
//                                                     color: "#ccc",
//                                                 }
//                                             },
//                                             axisLabel: {
//                                                 margin: 10,
//                                                 textStyle: {
//                                                     color: "#ccc"
//                                                 },
//                                                 fontFamily: 'Arial',
//                                                 formatter: (value, index) => moment(value).format('MM-YYYY'),

//                                             },
//                                             axisPointer: {
//                                                 lineStyle: {
//                                                     color: "rgba(93,120,255,1)",
//                                                     type: "dashed"
//                                                 }
//                                             }
//                                         },
//                                         yAxis: {
//                                             type: "value",
//                                             axisLine: {
//                                                 show: false
//                                             },
//                                             axisTick: {
//                                                 show: false
//                                             },
//                                             axisLabel: {
//                                                 margin: 10,
//                                                 textStyle: {
//                                                     color: "#ccc"
//                                                 },
//                                                 fontFamily: 'Arial',
//                                                 formatter: (value, index) => (value = numeral(value).format("0%")),
//                                             },
//                                             splitNumber: 3,
//                                             splitLine: {
//                                                 show: true,
//                                                 lineStyle: {
//                                                     type: 'dashed',
//                                                     color: 'rgba(0,0,0,0.1)'
//                                                 }
//                                             },
//                                         },
//                                         series: dataWebsites.series
//                                     };
//                                     myChart.setOption(option);

//                                     new ResizeSensor(ele, function () {
//                                         myChart.resize();
//                                     });
//                                 } else {

//                                     $('.rowKeywordAnalysisOrganicGraph').hide();
//                                     $(`#${task}`).removeClass('is-loading');
//                                     emptyState(`#${task}--eCharts`);
//                                 }

//                                 break;
//                             case 'KeywordAnalysisPaidGraph':
//                                 var {
//                                     Data
//                                 } = (data.data);
//                                 // console.log("1",data.data);
//                                 // console.log("2",{Data});
//                                 // console.log("3",Data);
//                                 $('#KeywordAnalysisPaidGraph').prepend(' <div class="rowKeywordAnalysisPaidGraph" style="" id="paidgraph_chart"><div class="dropdown-wrapper d-flex justify-content-end"><button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-ellipsis-h" style="color: #2c2952;"></i></button><div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"><a class="Chart__Top5__PageSeo dropdown-item similarReloadTask text-muted" data-task="Chart__Top5__PageSeo" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a><a class="dropdown-item remove__chart text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a></div></div> <span class="text_top_chart_header">Top 5 trang quảng cáo từ khoá ”<strong class="font-gg font-17 text-danger">' + keywords + '</strong>” trả phí qua Google Ads trong 3 tháng gần đây</span>');
//                                 // console.log("Object: ", Object.values(data));
//                                 if (Data && Object.values(Data).length > 0) {
//                                     // let header = texttop10qctukhoa_chart();
//                                     // $(`#${task}--header`).html(header);    
//                                     $(".rowKeywordAnalysisPaidGraph").show();
//                                     let dataWebsites = {
//                                         keys: [],
//                                         series: []
//                                     };
//                                     // console.log("asdsda");

//                                     let colors = ['red', '#0abb87', '#03a9f3', '#5d78ff', '#ffb822'];

//                                     Object.values(Data).forEach((item, index) => {
//                                         // console.log("item: ", item, "index: ", index); //item:ngay thang ,index: 0 12345
//                                         // console.log("item Total 0 :",item.Total[0]);  
//                                         let name, data = [];
//                                         item.Total[0].forEach(val => {
//                                             let {
//                                                 Key,
//                                                 Value
//                                             } = val;
//                                             if (index == 0) {
//                                                 dataWebsites.keys.push(Key)
//                                                 // console.log("Key:", Key); //ngay thang
//                                                 // console.log("Value:", Value); //ti le % Share
//                                             }
//                                             name = Object.keys(Data)[index];
//                                             data.push(Value.Share);
//                                         })

//                                         dataWebsites.series.push({

//                                             name,
//                                             data,
//                                             type: "line",
//                                             stack: 'trafficShare',
//                                             areaStyle: {
//                                                 // opacity: 0.1
//                                             },
//                                             lineStyle: {
//                                                 width: 0
//                                             },
//                                             itemStyle: {
//                                                 color: colors[index]
//                                             },
//                                             smooth: true,
//                                             // symbol: "circle",
//                                             // symbolSize: 10,
//                                             // showSymbol: true,
//                                             // hoverAnimation: false,
//                                         })

//                                     })

//                                     dataWebsites.series = dataWebsites.series.reverse();
//                                     // console.log(dataWebsites);

//                                     $(`#${task}`).removeClass('is-loading');

//                                     let ele = document.getElementById(`${task}--eCharts`);

//                                     let myChart = echarts.init(ele, 'light');

//                                     let option = {
//                                         tooltip: {
//                                             trigger: "axis",
//                                             backgroundColor: 'rgba(255, 255, 255, 1)',
//                                             borderColor: 'rgba(93,120,255,1)',
//                                             borderWidth: 1,
//                                             extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
//                                             formatter: params => {
//                                                 // console.log('params',params);

//                                                 if (params.length > 0) {

//                                                     let {
//                                                         name
//                                                     } = params[0];

//                                                     name = moment(name).format('MMMM YYYY');

//                                                     let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

//                                                     params.forEach(param => {

//                                                         let {
//                                                             marker,
//                                                             color,
//                                                             seriesName,
//                                                             value
//                                                         } = param;

//                                                         value = numeral(value).format('0.00%');

//                                                         kq += `<div class="text-dark my-1">${marker} ${seriesName} <span class="font-bold" style="color:${color}">${value}</span></div>`
//                                                     })

//                                                     return kq;
//                                                 }
//                                             },
//                                         },

//                                         legend: { //phan nam trên
//                                             // orient: 'vertical',
//                                             // left: 'center',
//                                             top: '7%',
//                                             align: 'left',
//                                             // right:'0%',
//                                             // itemGap: 15,
//                                             data: Object.keys(Data),
//                                             // textStyle: {
//                                             //     // fontFamily: 'Google Sans',
//                                             //     fontFamily: 'Arial',
//                                             //     fontSize: 12,
//                                             // }
//                                         },
//                                         grid: { //bieu do
//                                             // top: 20,
//                                             // left: '30%',
//                                             // right: "5%",
//                                             // bottom: 40,
//                                             top: '25%'
//                                         },
//                                         xAxis: {
//                                             type: "category",
//                                             boundaryGap: false,
//                                             data: dataWebsites.keys,
//                                             axisLine: {
//                                                 lineStyle: {
//                                                     color: "#ccc",
//                                                 }
//                                             },
//                                             axisLabel: {
//                                                 margin: 10,
//                                                 textStyle: {
//                                                     color: "#ccc"
//                                                 },
//                                                 fontFamily: 'Arial',
//                                                 formatter: (value, index) => moment(value).format('MM-YYYY'),

//                                             },
//                                             axisPointer: {
//                                                 lineStyle: {
//                                                     color: "rgba(93,120,255,1)",
//                                                     type: "dashed"
//                                                 }
//                                             }
//                                         },
//                                         yAxis: {
//                                             type: "value",
//                                             axisLine: {
//                                                 show: false
//                                             },
//                                             axisTick: {
//                                                 show: false
//                                             },
//                                             axisLabel: {
//                                                 margin: 10,
//                                                 textStyle: {
//                                                     color: "#ccc"
//                                                 },
//                                                 fontFamily: 'Arial',
//                                                 formatter: (value, index) => (value = numeral(value).format("0%")),
//                                             },
//                                             splitLine: {
//                                                 show: true,
//                                                 lineStyle: {
//                                                     color: 'rgba(0,0,0,0.1)'
//                                                 }
//                                             },
//                                         },
//                                         series: dataWebsites.series
//                                     };
//                                     myChart.setOption(option);

//                                     new ResizeSensor(ele, function () {
//                                         myChart.resize();
//                                     });
//                                 } else { //ko co data 
//                                     // console.log("ko co data");
//                                     $(`#${task}`).removeClass('is-loading');
//                                     emptyState(`#${task}--eCharts`);
//                                     // $("#KeywordAnalysisPaidGraph").append("<p>Khong co du lieu  can tim</p>");
//                                     // //dóng char
//                                     // $("#KeywordAnalysisPaidGraph--eCharts").hide();
//                                     // $(".dataTables_scroll").hide();
//                                     $(".rowKeywordAnalysisPaidGraph").hide();
//                                 }

//                                 break;
//                             default:
//                                 break;
//                         } //switch case

//                     }

//                 })
//             break;
//     }

// }
const emptyState = (selector) => {
    let $this = $(selector);

    $this.attr('class', 'd-none');
}


// ----------------------------------
const Chart__Circle = (task, data,check,object) => {
       if (check == "true") {
    $('.grid-stack').append(` <div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'21':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'8':(object['gs-height'])}" data-task="Chart__Circle" data-gs-min-width="6" data-gs-min-height ="8">
<div class="grid-stack-item-content shadow-gg">
<div class="row chart_circle no-block rounded-sm shadow-gg  h-100 ">
<div class="dropdown-wrapper d-flex justify-content-end ml-auto">
<button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="margin: -39px -19px;">
    <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
</button>
<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
    <a class="Chart__Circle dropdown-item similarReloadTask text-muted" data-task="Chart__Circle" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
    <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
</div>
</div>
<div class="col-12 col-lg-12">
    <div class="row">
        <div class="col-12 col-lg-12">
            <div class="d-flex no-block">
                <div class="align-self-center mr-3">
                    <i class="fad fa-money-check text-info font30"></i>
                </div>
                <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                    PHÂN TÍCH SEM
                </div>

            </div>
            <div class="mt-3 text-muted mb-5">
                Nâng cao thứ hạng Website trên các công cụ tìm kiếm
            </div>
        </div>
    </div>
</div>

<div class="col-12 col-lg-12">
    <div class="row">
        <div class="col-3 col-lg-3"></div>
        <div class="col-6 col-md-6 col-lg-6" style="margin-top:-2.3rem">
            <div class="row">
                <!-- <div class="col-12 col-lg-12">
                    <div class="score_ratio">
                        <p class="your_score">Độ khó của từ khóa </p>
                        <h2 class="_rating"></h2>
                    </div>
                </div> -->
                <div class="col-12 col-lg-12">
                    <div id='getKeywordsSuggestionV1_2' style="width:100%;height:300px"></div>
                </div>
            </div>
        </div>
        <div class="col-3 col-lg-3"></div>
    </div>
</div>
<!-- ---------3 cai alert--------------------- -->
<div class="col-12 col-lg-12">
    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div class="text-center" id="giadt_cao">
                <!-- <div class="font-14 font-weight-bold text-muted font-gg pb-4">
                  Giá đầu thầu trang cao nhất
                </div>
                <div class="display-6 font-gg">
                    4.3
                </div>
                <div class="mt-2">
                    <div class="progress w-70 m-auto">
                        <div class="progress-bar bg-success" style="height: 8px; width: 71.6667%" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="col-xs-12 col-md-4">
            <div class="text-center" style="border-left: 1px solid #e9ecef!important;border-right: 1px solid #e9ecef!important;" id="giadt_thap">
                <!-- <div class="font-14 font-weight-bold text-muted font-gg pb-4">
                    Giá đầu thầu trang thấp nhất
                </div>
                <div class="display-6 font-gg">
                    4.3
                </div>
                <div class="mt-2">
                    <div class="progress w-70 m-auto">
                        <div class="progress-bar bg-danger" style="height: 8px; width: 71.6667%" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="col-xs-12 col-md-4">
            <div class="text-center" id="solantk_tb">
                <!-- <div class="font-14 font-weight-bold text-muted font-gg pb-4">
                    Số lần tìm kiếm trung bình
                </div>
                <div class="display-6 font-gg">
                    4.3
                </div>
                <div class="mt-2">
                    <div class="progress w-70 m-auto">
                        <div class="progress-bar bg-warning" style="height: 8px; width: 71.6667%" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div> -->
            </div>
        </div>

    </div>
</div>



</div>
</div></div>`) }
if(check =="false") {
    $("#getKeywordsSuggestionV1_2").find("p").remove();
    $("#giadt_cao").find("div").remove()
    $("#giadt_thap").find("div").remove()
    $("#solantk_tb").find("div").remove()
  }
    Api_For_Circle()
}
const Api_For_Circle = () => {
    $.ajax({
            url: '//localapi.trazk.com/keywords/keywords.v1.php?task=getKeywordsSuggestionV1&keywords=' + keywords + '&isLogin=true&lang=vn',
            dataType: 'json'
        })
        .done(res => {
            let ele = document.getElementById(`getKeywordsSuggestionV1_2`);
            let myChart = echarts.init(ele, 'light');
            // console.log('do kho', res.data.keywords);
            if(!res.data.keywords)return true;
            // console.log(res.data.keywords[0].dokho);
            if (res.data.keywords[0].dokho == null) {
                // console.log ("thap");
                // $("._rating").html("Thấp");
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'><span class='hard_score_ text-muted font-weight-bold'></span></p>");
                // $("._rating").css({"color": "lime","padding-left":"28px"});
            } else if (res.data.keywords[0].dokho >= 30 && res.data.keywords[0].dokho < 70) {
                // $("._rating").html("Trung bình");
                // console.log ("TB");
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_ text-muted font-weight-bold'>trung bình</span></p>");
                // $("._rating").css("color","#1e90ff");

            } else if (res.data.keywords[0].dokho < 30) {
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_ text-muted font-weight-bold'>thấp</span></p>");
            } else {
                // console.log ("CAO");
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_ font-weight-bold text-muted'>cao</span></p>");
                // $("._rating").html("Cao");
                // $("._rating").css({"color":"#ff4500","padding-left":"28px"});
            }

            $("#giadau_cao").html(numeral(res.data.keywords[0].giathaudautrangcaonhat).format('0,0'));
            $("#giadau_thap").html(numeral(res.data.keywords[0].giathaudautrangthapnhat).format('0,0'));
            $("#giadau_trungbinh").html(numeral(res.data.keywords[0].solantimkiemtrungbinh).format('0,0'));

            $("#giadt_cao").append('<div class="font-14 font-weight-bold text-muted font-gg pb-4">Giá đầu thầu trang cao nhất</div><div class="display-8 font-gg">' + numeral(res.data.keywords[0].giathaudautrangcaonhat).format('0,0') + '</div><div class="mt-2"><div class="progress w-70 m-auto pr_reponsive"><div class="progress-bar bg-success" style="height: 8px; width:' + ((numeral(res.data.keywords[0].giathaudautrangcaonhat).format('0.0')) / 1000) + '%!important' + '" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="1000000000"></div></div></div>');
            $("#giadt_thap").append('<div class="font-14 font-weight-bold text-muted font-gg pb-4">Giá đầu thầu trang thấp nhất</div><div class="display-8 font-gg">' + numeral(res.data.keywords[0].giathaudautrangthapnhat).format('0,0') + '</div><div class="mt-2"><div class="progress w-70 m-auto pr_reponsive"><div class="progress-bar bg-danger" style="height: 8px; width:' + ((numeral(res.data.keywords[0].giathaudautrangthapnhat).format('0.0')) / 1000) + '%!important' + '" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="1000000000"></div></div></div>');
            $("#solantk_tb").append('<div class="font-14 font-weight-bold text-muted font-gg pb-4">Số lần tìm kiếm trung bình</div><div class="display-8 font-gg">' + numeral(res.data.keywords[0].solantimkiemtrungbinh).format('0,0') + '</div><div class="mt-2"><div class="progress w-70 m-auto pr_reponsive"><div class="progress-bar bg-warning" style="height: 8px; width:' + ((numeral(res.data.keywords[0].solantimkiemtrungbinh).format('0.0')) / 100) + '%!important' + '" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="1000000000"></div></div></div>');
            //  $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_'>Cao</span></p>");
         
            // console.log(res.data.keywords[0].dokho)

            let option = {
                series: [{
                    name: 'Điểm',
                    type: 'gauge',
                    // radius: ["50%", "80%"],
                    radius: '100%',
                    center: ["50%", "55%"],
                    min: 0,
                    max: 100,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitNumber: 4,
                    title: {
                        textStyle: {
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#6c757d',
                            shadowColor: '#fff',
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        // backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        // borderColor: '#fff',
                        // shadowColor : '#fff', 
                        // shadowBlur: 5,
                        // offsetCenter: [0, '50%'],        
                        // textStyle: {        
                        //     fontWeight: 'bolder',
                        //     color: '#fff'
                        // }  
                    },
                    data: [{
                        value: `${(res.data.keywords[0].dokho==null) ? 0: res.data.keywords[0].dokho }`,
                        // name: 'Điểm',

                    }],
                    axisLine: {
                        lineStyle: {
                            // color: [[0.09, '#f2d643'],[0.82, '#eb8146'],[1, '#d95850']],
                            // color: [[0.09, '#FCB040'],[0.82, '#F1592A'],[1, '#BF1E2E']],
                            // color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#d63031']],
                            // color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#EA2027']],
                            color: [
                                [0.3, '#AEFDCA'],
                                [0.7, '#48CD92'],
                                [1, '#fd397a']
                            ],
                            width: 30,
                            // shadowColor : '#fff',  
                            // shadowBlur: 10
                        }
                    },
                }]
            };
            myChart.setOption(option);

            new ResizeSensor(ele, function () {
                myChart.resize();
            });

        })
}
//----------------------------------------
const Google_Ads = (task, data,check,object) => {
    if (check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'29':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="Google_Ads" data-gs-min-width="6" data-gs-min-height="5">
    <div class="grid-stack-item-content shadow-gg">
    <div class="h-100 template_ads no-block bg-white rounded-sm shadow-gg">
    <div class="dropdown-wrapper d-flex justify-content-end">
    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="margin: -21px -30px;">
        <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
    </button>
    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
        <a class="Google_Ads dropdown-item similarReloadTask text-muted" data-task="Google_Ads" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
        <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
    </div>
    </div>
    <div class="row " id="template_ads">
    <div class="col-12 col-lg-12 mb-5">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="d-flex no-block">
                    <div class="align-self-center mr-3">
                        <i class="fad fa-ad text-info font30"></i>

                    </div>
                    <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                        Mẫu Quảng cáo <span class="align-self-center text-capitalize font-18 font-gg font-weight-500">GOOGLE</span>
                    </div>

                </div>
                <div class="mt-3 text-muted ">
                    Mẫu quảng cáo Google Adwords là nội dung sẽ hiện ra khi khách hàng tìm kiếm trên các công cụ tìm kiếm.
                </div>
            </div>
        </div>
    </div>
    </div>    
    </div>
    </div>
    </div>`)
    }
    Api_For_GoogleAds()
}
const Api_For_GoogleAds = () => {
    //  ----template ads------------------

    $.ajax({  
            // url: "http://localapi.trazk.com/webdata/websiteapi.php?task=getScrapedSearchAds&domain=etrip4u.com"
            url: "//localapi.trazk.com/serp/index.php?task=getAdwordsResults&q=" + keywords,
            dataType: 'json',
        })

        .done(function (res) {
            // console.log("getAdwordsResults", res);
            if(!res.data) return true;
            if (res.data == "") {
                $("#template_ads").hide();
            } else {
                var empty = "";
                res.data.topAds.forEach((key, index) => {
                    // console.log('key',key.title);
                    // console.log('index',index);
                    // console.log(res.data.topAds);
                    if(index<=2) {
                    empty += ` <div class="col-12 col-lg-6">
               <div class="row">
                   <div class="col-12 col-lg-12 "><div class="cards-ads" style=""><div class="title_ads"><span class="round round-sm align-self-center round-success" style="margin-left: -28px;
                   margin-bottom: -22px;">${index+1}</span>${key.title}</div><div class="title_small_ads mt-1"><span class="_Ad">Ad </span><span class="_domains_ads">${key.url}</span></div><span class="_description mt-1">${key.description}</span>
        </div> </div>
        </div>
        </div>` 
                }}) 
                $("#template_ads").append(empty);
            }
        })
        .fail(res => {
            console.log("getAdwordsResults that bai");

        })
}

///////////////////chart top 5 quang cao///////////////////////////////////
const Chart__Top5__QC = (task, data,check,object) => {
    if (check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'34':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="Chart__Top5__QC" data-gs-min-width ="5" data-gs-min-height ="6">
                                <div class="grid-stack-item-content shadow-gg">                                                                                              
                                <div class="row h-100">
                                    <div class="col-12 h-100">
                                        <div id="KeywordAnalysisPaidGraph" class="h-100 d-flex no-block bg-white border-top-danger flex-column rounded-sm shadow-gg is-loading" style="min-height:400px">
                                          <div class="row">
                                                <div class="col-12 col-xl-12 h-100">                
                                                    <div id="KeywordAnalysisPaidGraph--eCharts" class="w-100" style="min-height:450px"></div>               
                                                </div>                    
                                            </div>                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                                </div>
                                `)
    }
    // console.log('data', data);

    Api__For__Top5QC(task, data);
}
const Api__For__Top5QC = (task, data) => {
    // console.log('data', data);
    var {
        Data
    } = (data.data);

    if (Data && Object.values(Data).length > 0) {
        $(".rowKeywordAnalysisPaidGraph").show();
        let dataWebsites = {
            keys: [],
            series: []
        };
        // console.log("asdsda");

        let colors = ['red', '#0abb87', '#03a9f3', '#5d78ff', '#ffb822'];

        Object.values(Data).forEach((item, index) => {

            let name, data = [];
            item.Total[0].forEach(val => {
                let {
                    Key,
                    Value
                } = val;
                if (index == 0) {
                    dataWebsites.keys.push(Key)
                }
                name = Object.keys(Data)[index];
                data.push(Value.Share);
            })

            dataWebsites.series.push({

                name,
                data,
                type: "line",
                stack: 'trafficShare',
                areaStyle: {
                    // opacity: 0.1
                },
                lineStyle: {
                    width: 0
                },
                itemStyle: {
                    color: colors[index]
                },
                smooth: true,
            })

        })

        dataWebsites.series = dataWebsites.series.reverse();

        $(`#${task}`).removeClass('is-loading');

        let ele = document.getElementById(`${task}--eCharts`);

        let myChart = echarts.init(ele, 'light');

        let option = {
            tooltip: {
                trigger: "axis",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log('params',params);

                    if (params.length > 0) {

                        let {
                            name
                        } = params[0];

                        name = moment(name).format('MMMM YYYY');

                        let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

                        params.forEach(param => {

                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = param;

                            value = numeral(value).format('0.00%');

                            kq += `<div class="text-dark my-1">${marker} ${seriesName} <span class="font-bold" style="color:${color}">${value}</span></div>`
                        })

                        return kq;
                    }
                },
            },

            legend: { //phan nam trên
                // orient: 'vertical',
                // left: 'center',
                top: '7%',
                align: 'left',
                // right:'0%',
                // itemGap: 15,
                data: Object.keys(Data),
                // textStyle: {
                //     // fontFamily: 'Google Sans',
                //     fontFamily: 'Arial',
                //     fontSize: 12,
                // }
            },
            grid: { //bieu do
                // top: 20,
                // left: '30%',
                // right: "5%",
                // bottom: 40,
                top: '25%'
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: dataWebsites.keys,
                axisLine: {
                    lineStyle: {
                        color: "#ccc",
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    formatter: (value, index) => moment(value).format('MM-YYYY'),

                },
                axisPointer: {
                    lineStyle: {
                        color: "rgba(93,120,255,1)",
                        type: "dashed"
                    }
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    formatter: (value, index) => (value = numeral(value).format("0%")),
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
            },
            series: dataWebsites.series
        };
        myChart.setOption(option);

        new ResizeSensor(ele, function () {
            myChart.resize();
        });
    } else { //ko co data 
        // console.log("ko co data");
        $(`#${task}`).removeClass('is-loading');
        emptyState(`#${task}--eCharts`);
        // $("#KeywordAnalysisPaidGraph").append("<p>Khong co du lieu  can tim</p>");
        // //dóng char
        // $("#KeywordAnalysisPaidGraph--eCharts").hide();
        // $(".dataTables_scroll").hide();
        $(".rowKeywordAnalysisPaidGraph").hide();
    }

}
//table top 10 qc qua  google ads //////////////////////////////////////////////
const Table_Top10__QC = (task, data,check,object) => {
    if (check =="false") {
        $('.tbody_KeywordAnalysisPaidGraph').html("");
        
      } 
    if (check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'42':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="Table_Top10__QC" data-gs-min-width ="8" data-gs-min-height ="4" >
    <div class="grid-stack-item-content shadow-gg ">  
    <div class="row rowKeywordAnalysisPaidGraph h-100" id="paidgraph_table">
       
                <div class="col-12">
                    <div id="KeywordAnalysisPaidGraph" class="d-flex no-block bg-white border-top-danger flex-column rounded-sm h-100" >
                        
                    <div class="dropdown-wrapper d-flex justify-content-end">
                    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="">
                        <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                    </button>
                    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                        <a class="Table_Top10__QC dropdown-item similarReloadTask text-muted" data-task="Table_Top10__QC" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                        <a class="dropdown-item remove__chart text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
                    </div>
                    </div>
                     <div class="row">                           
                            <div class="col-12 col-xl-12">                                
                                <div class="w-100 p-0 p-md-4">
                                    <table id="KeywordAnalysisPaidTable" class="table table-bordered table-striped">
                                        <thead>
                                         <tr> <span class ="font-16 font-gg mb-4" style ="display:inline-block!important;">Top 10 trang quảng cáo từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trả phí qua Google Ads </span></tr>
                                            <tr>
                                                <th class="text-muted font-10" style="font-size:12px!important"></th>
                                                <th class="text-muted font-10" style="font-size:12px!important">Domain </th>
                                                <th class="text-center text-muted font-10" style="font-size:12px!important">Trafic Share </th>
                                                <th class="text-muted font-10" style="font-size:12px!important">Change</th>
                                                <th class="text-muted font-10" style="font-size:12px!important">Position</th>
                                                <th class="w-40 text-muted font-10" style="font-size:12px!important">Destination URL</th>
                                            </tr>
                                        </thead>
                                       <tbody class ="tbody_KeywordAnalysisPaidGraph">
                                       
                                       </tbody> 
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
    
        </div> </div>
    `)
    }
    // console.log(data);

    let callapi = data.data.Data;
    // console.log(callapi);
   if(!callapi) return true;
    callapi.forEach((key, index) => { 
        if ( index <10 ) {
        let share = numeral(key.Share).format('0%')
        let change = numeral(key.Change).format('0%');
        let change2 = `<span class="d-flex font-10 arrow_compare justify-center ${(key.Change> 0 ? 'text-success positive' : 'text-danger negative')}>${numeral(Math.abs(key.Change)).format('0%')}</span>`
        let destinationurl = `<a href="${key.Url}" target="_blank" class="text-break text-truncate-2">${key.Url} <i class="child-hover fal fa-external-link"></i></a>`;
        // let url = "N/A" ? '': destinationurl ;
        $('.tbody_KeywordAnalysisPaidGraph').append(`
        <tr> 
            <td>${index+1}</td>
            <td >
                <div class="d-flex no-block flex-row">
                <a data-type="website" class="changeURL" href="#">
                    <img src="${key.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />
                    ${key.Domain}</a>
                </div>
            </td>
            <td>
          
           <div class="row"><div class="col-3">${share}</div><div class="col align-self-center" style ="width:150px"><div class="progress bg-dark-2"><div class="progress-bar bg-danger" style="width:${share};height:6px;" role="progressbar"></div></div></div> </div>            
            </td>
            <td >  
                              ${change2}                                               
                                <div class="row">                                                                      
                                    <div class="col-8 text">${change}</div>                                   
                                </div>
            </td>
            <td><p>${key.Position}<p/></td>
            <td>            
                ${destinationurl}                         
            </td>
        </tr>
      `)
        }
       
    })
}
///////////////////////phân tich seo

const Phan__Tich__Seo = (task,data,keywords,check,object) => {
    if (check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'52':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}"  min-width="705px" min-height="380px" data-task="Phan__Tich__Seo">
    <div class="grid-stack-item-content shadow-gg"> 
    <div class="row chart_circle h-100 no-block rounded-sm">
     
    <div class="col-lg-12">
         <div class="dropdown-wrapper d-flex justify-content-end">
            <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="margin: -36px -33px;">
                <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
            </button>
            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a class="Phan__Tich__Seo dropdown-item similarReloadTask text-muted" data-task="Phan__Tich__Seo" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
                <a class="dropdown-item similarRemove text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
            </div>
            </div>
        <div class="d-flex no-block">
            <div class="align-self-center mr-3">
                <i class="fad fa-columns text-info font30"></i>
            </div>
        <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                PHÂN TÍCH SEO
        </div>

        </div>
        <div class="text-muted ">
            Tối ưu hóa Website với các công cụ tìm kiếm
        </div>

    </div>
    <!-- </div>
<div class="row"> -->

    <div class="col-lg-4">
        <div class="kt-portlet kt-iconbox kt-iconbox--animate _boxseo bg-info-2">
            <div class="search_volume d-flex flex-row align-items-start">
                <h3 class="h3_search">Số Lượng Tìm Kiếm<i class="far fa-info-circle __circle_right text-info"></i> <br>
                    <span class="a_year">Trung bình hàng năm của <br> mỗi tháng</span>
                </h3>
                <i class="fas fa-plus plus___right"></i>
            </div>
            <div class="number_volumn d-flex flex-row align-items-center" id="number_volumn" style="margin-top:116px;">
                <h1 class="count___number" id="_count__number1"></h1>
                <!-- <div class="sparkline chart_volumn" style="margin-left: auto" data-sparkline="[1,2,3,4]">aaaaaaaaaa</div> -->
            </div>
        </div>
    </div>
    <!-- -------------------------#########col-lg-4-1------------------------------->

    <div class="col-lg-4">
        <div class="kt-portlet kt-iconbox kt-iconbox--animate _boxseo bg-success-2">
            <div class="search_volume d-flex flex-row align-items-start">
                <h3 class="h3_search">Lượt Tìm Kiếm<i class="far fa-info-circle __circle_right text-info"></i> <br>
                    <span class="a_year d-flex flex-row align-items-start" style="margin-top:8px"><small style="font-size:.88rem;padding-right: 0px;">Trung bình hàng tháng trong 3 tháng gần nhất</small>
                        <i class="fas fa-plus plus___right1" style=""></i>
                    </span>
                    <div class="_organic__paid d-flex flex-row">
                        <div class="__organic">
                            <span class="_circle__blue" style=""></span>&nbsp;
                            <!-- <span class="organic_title">Organic 94.51%</span> -->
                        </div>

                        <div class="__paid">
                            <span class="_circle__blue light-blue"></span>&nbsp;
                            <!-- <span class="paid_title">Paid 94.51% </span> -->
                        </div>
                    </div>
                </h3>
            </div>
            <div class="number_volumn d-flex flex-row align-items-center" id="number_volumn2" style="margin-top:101px">
                <h1 class="count___number" id="__count___number_2"></h1>
                <div id="__botay" class="d-flex flex-row" style="margin-left:auto"></div>
               
            </div>

        </div>
    </div>
    <!-- -------------------------####col-lg-4 -2----------------------------- -->

    <div class="col-lg-4">
        <div class="kt-portlet kt-iconbox kt-iconbox--animate _boxseo bg-danger-2">
            <div class="search_volume d-flex flex-row align-items-start">
                <h3 class="h3_search">Chi phí Click <i class="far fa-info-circle __circle_right text-info skewed"></i> <br>
                    <span class="a_year d-flex flex-row align-items-start" style="margin-top:8px"><small style="font-size:.88rem;padding-right: 0px;">Trung bình chi phí mỗi lần click chuột</small>
                        <i class="fas fa-plus plus___right1 ___plus_right2" style=""></i>
                    </span>

                </h3>
            </div>
            <div class="number_volumn d-flex flex-row align-items-center" style="margin-top:122px;">
                <h1 class="count___number" id="count_number_3"><small style="font-size:0.4em">Loading...</small></h1>                           
            </div>



        </div>
    </div>

    <!-- -------------------------#####col-lg-4# 3----------------------------- -->
</div>
    </div></div>`)
    }
    if (check =="false") {
        // $('#number_volumn').html('');
        // renderSparkline('number_volumn').html('');
        $(".__organic").html('');
        $(".__paid").html('');
        $('#_chart1').remove()
    }
    Api1_For_PTSeo(task, keywords);
    Api2_For_PTSeo(task, keywords);
}
const Api1_For_PTSeo = (task, keywords) => {
    $.ajax({
            url: '//localapi.trazk.com/keywords/keywords.v1.php?task=getKeywordsSuggestionV1&limit=1&keywords=' + keywords + '&isLogin=true&lang=vn'
        })
        .done(res => {
            var empty1 = "";
            // console.log(res.data.keywords , 'abc')
            if(!res.data.keywords) return true;
            res.data.keywords.forEach(key => {
                // console.log("abcde:",key.lichsutimkiemtrungbinh);
                empty1 += `<div class="sparkline chart_volumn" id="_chart1" data-sparkline="[${key.lichsutimkiemtrungbinh}]"></div>`
                // $("#_count__number1").html(numeral(key.solantimkiemtrungbinh).format('0,0,0'));
            })
         

            $("#number_volumn").append(empty1);
            // $(".count___number").html(key.solantimkiemtrungbinh);
            renderSparkline('number_volumn');
        })
}

const Api2_For_PTSeo = (task, keywords) => {
    let total = 0,
        total2 = 0,
        total3;
    let average1 = 0;
    let average2 = 0;
    let average3 = 0;



    $.ajax({
            url: '//localapi.trazk.com/keywords/keywords.v1.php?task=KeywordAnalysisTrafficShareOverTime&keywords=' + keywords + '&isLogin=true&lang=vn' + '&limit=1',
            dataType: 'json'
        })

        .done(res => {
            var empty = '';
            if (res.data.Data) {
                var a = [];
                // console.log(Object.values(res.data.Data)[0].TotalVisits); //Object.values:"TotalVisits","OrganicShare","PaidShare"
                for (let key in res.data.Data) {
                    a.push(numeral(res.data.Data[key].TotalVisits).format('0')); //Push: thêm element vào cuối array          
                    // console.log(res.data.Data[key].TotalVisits);
                    total += res.data.Data[key].TotalVisits;
                    total2 += res.data.Data[key].OrganicShare;
                    total3 = res.data.Data[key].PaidShare;
                }
                average1 += total / Object.keys(res.data.Data).length;
                average2 += total2 / Object.keys(res.data.Data).length;
                average3 += total3 / Object.keys(res.data.Data).length;
            }
            empty += `<div class="sparkline chart_volumn" id="_chart_2" data-sparkline="[${a}]"></div>`;


            $(".__organic").append(`<span class='organic_title'>Organic ${numeral(average2).format('0.00')}</span>`);
            $(".__paid").append(`<span class="paid_title">Paid ${numeral(average3).format('0.00')}</span>`);

            $("#__botay").append(empty);
            renderSparkline('__botay');
        })

}

/// chart top 5 trang seo /////////////////////
const Chart__Top5__PageSeo = (task, data,check,object) => {
    // console.log('saas',object);
    
    if (check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'60':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'6':(object['gs-height'])}" data-task="Chart__Top5__PageSeo" data-gs-min-width ="6" data-gs-min-height ="6">
    <div class="grid-stack-item-content shadow-gg"> 
    <div class="row rowKeywordAnalysisOrganicGraph h-100">
    <div class="col-12">
        <div id="KeywordAnalysisOrganicGraph" class="h-100 d-flex no-block bg-white border-top-success flex-column rounded-sm shadow-gg is-loading" style="min-height:400px">


            <div class="row">
                <div class="col-12">

                    <div id="KeywordAnalysisOrganicGraph--eCharts" class="w-100 h-100" style="min-height:450px"></div>

                </div>
            </div>
        </div>
    </div>
</div>
    </div></div>
    `) }
    Api__For__Top5Seo(task, data);
}
const Api__For__Top5Seo = (task, data) => {
    var {
        Data
    } = (data.data);

    // $('#KeywordAnalysisOrganicGraph').prepend('<span class="text_top_chart_header">Top 5 trang SEO tốt nhất từ khoá ”<strong class="font-gg font-17 text-success">' + keywords + '</strong>” trong 3 tháng gần đây</span>');    
    if (Data && Object.values(Data).length > 0) {
        // console.log("data", data);
        $(".rowKeywordAnalysisOrganicGraph").show();
        let dataWebsites = {
            keys: [],
            series: []
        };

        let colors = [' #fd397a', '#0abb87', '#03a9f3', '#5d78ff', '#ffb822']

        Object.values(Data).forEach((item, index) => {
            let name, data = [];
            item.Total[0].forEach(val => {
                let {
                    Key,
                    Value
                } = val;
                if (index == 0) {
                    dataWebsites.keys.push(Key)
                }
                name = Object.keys(Data)[index];
                // console.log("haha:",Object.keys(Data)[index]);
                data.push(Value.Share);
            })

            dataWebsites.series.push({
                name,
                data,
                type: "line",
                stack: 'trafficShare',
                itemStyle: {
                    color: colors[index]
                },
                areaStyle: {
                    opacity: 0.8
                },
                smooth: true,
                // symbol: "circle",
                // symbolSize: 10,
                // showSymbol: true,
                // hoverAnimation: false,
            })

        })

        dataWebsites.series = dataWebsites.series.reverse();

        $(`#${task}`).removeClass('is-loading');

        let ele = document.getElementById(`${task}--eCharts`);

        let myChart = echarts.init(ele, 'light');

        let option = {
            tooltip: {
                trigger: "axis",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log('params',params);

                    if (params.length > 0) {

                        let {
                            name
                        } = params[0];

                        name = moment(name).format('MMMM YYYY');

                        let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

                        params.forEach(param => {

                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = param;

                            value = numeral(value).format('0.00%');

                            kq += `<div class="text-dark my-1">${marker} ${seriesName} <span class="font-bold" style="color:${color}">${value}</span></div>`
                        })

                        return kq;
                    }
                },
            },
            legend: {

                top: '7%',
                align: 'left',
                // itemGap: 15,
                data: Object.keys(Data),
                textStyle: {

                    fontFamily: 'Arial',
                    fontSize: 12,
                }
            },
            grid: {
                // top: 20,
                // left: '30%',
                // right: "5%",
                // bottom: 40,
                top: '30%'
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: dataWebsites.keys,
                axisLine: {
                    lineStyle: {
                        color: "#ccc",
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    formatter: (value, index) => moment(value).format('MM-YYYY'),

                },
                axisPointer: {
                    lineStyle: {
                        color: "rgba(93,120,255,1)",
                        type: "dashed"
                    }
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    formatter: (value, index) => (value = numeral(value).format("0%")),
                },
                splitNumber: 3,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
            },
            series: dataWebsites.series
        };
        myChart.setOption(option);

        new ResizeSensor(ele, function () {
            myChart.resize();
        });
    } else {

        $('.rowKeywordAnalysisOrganicGraph').hide();
        $(`#${task}`).removeClass('is-loading');
        emptyState(`#${task}--eCharts`);
    }

}
////table top 10 trang seo//////////////////////////
const Table__Top10__PageSeo = (task, data,check,object) => {

    if (check == "true") { 
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'68':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'5':(object['gs-height'])}" data-task="Table__Top10__PageSeo" data-gs-min-width ="8" data-gs-min-height ="4">
    <div class="grid-stack-item-content shadow-gg">        
    <div class="row rowKeywordAnalysisOrganicGraph h-100" id="organicgraph_table1" >
    <div class="col-12">
        <div class=" h-100 d-flex no-block bg-white border-top-success flex-column rounded-sm">
        <div class="dropdown-wrapper d-flex justify-content-end">
        <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="">
            <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
        </button>
        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="Table__Top10__PageSeo dropdown-item similarReloadTask text-muted" data-task="Table__Top10__PageSeo" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a>
            <a class="dropdown-item remove__chart text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a>
        </div>
        </div>
            <div class="row">
                <div class="col-12">
                    <div class="w-100 p-0 p-md-4">
                        <table id="KeywordAnalysisOrganicTable" class="table table-bordered table-striped">
                            <thead>
                            <tr><span class ="font-16 font-gg mb-4" style ="display:inline-block!important;">Top 10 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-success">${keywords}</strong>” (SEO - Truy cập tự nhiên)
                            </span></tr>
                                <tr> 
                                    <th class="text-muted font-10" style="font-size:12px!important"></th>
                                    <th class="text-muted font-10" style="font-size:12px!important">Domain </th>
                                    <th class="text-center text-muted font-10" style="font-size:12px!important">Trafic Share </th>
                                    <th class="text-muted font-10" style="font-size:12px!important">Change</th>
                                    <th class="text-muted font-10" style="font-size:12px!important">Position</th>
                                    <th class="w-40 text-muted font-10" style="font-size:12px!important">Destination URL</th>
                                </tr>
                            </thead>
                            <tbody class="tbody_KeywordAnalysisOrganicGraph"></tbody> 
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div></div>
    `)
    }
    if (check =="false") {
        $('.tbody_KeywordAnalysisOrganicGraph').html("");
        
      }
    let call_api = data.data.Data;

    call_api.forEach((key, index) => {
        // console.log('index',index);
        
        if (index < 10) {
            let share = numeral(key.Share).format('0%')
            let change = numeral(key.Change).format('0%');
            let change2 = `<span class="d-flex font-10 arrow_compare justify-center ${(key.Change> 0 ? 'text-success positive' : 'text-danger negative')}>${numeral(Math.abs(key.Change)).format('0%')}</span>`
            let destinationurl = `<a href="${key.Url}" target="_blank" class="text-break text-truncate-2">${key.Url} <i class="child-hover fal fa-external-link"></i></a>`;
            $(".tbody_KeywordAnalysisOrganicGraph").append(`
      <tr> 
      <td>${index+1}</td>
      <td>
          <div class="d-flex no-block flex-row">
          <a data-type="website" class="changeURL" href="#">
              <img src="${key.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />
              ${key.Domain}</a>
          </div>
      </td>
      <td >
    
     <div class="row"><div class="col-3">${share}</div><div class="col align-self-center" style="width:153px"><div class="progress bg-success-2"><div class="progress-bar bg-success" style="width:${share};height:6px;" role="progressbar"></div></div></div> </div>            
      </td>
      <td>  
                        ${change2}                                               
                          <div class="row">                                                                      
                              <div class="col-8 text">${change}</div>                                   
                          </div>
      </td>
      <td><p>${key.Position}<p/></td>
      <td>            
          ${destinationurl}                         
      </td>
  </tr>
      `)
        }

    })
}

///tu khoa lien quan chat che //////////////////////
const KeywordRecommendationsPhraseMatch = function (task,data,check,object) {
    if (check == "true") {
    $('.grid-stack').append(`<div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'78':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}" data-task="KeywordRecommendationsPhraseMatch" data-gs-min-width ="7" data-gs-min-height="5">
    <div class="grid-stack-item-content shadow-gg">               
    <div class="row rowKeywordRecommendationsPhraseMatch h-100">       
    <div class="col-12">
        <div class="d-flex no-block bg-white flex-column rounded-sm shadow-gg overflow-hidden h-100" style="z-index:3;position:relative">
        <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="KeywordRecommendationsPhraseMatch dropdown-item similarReloadTask text-muted" data-task="KeywordRecommendationsPhraseMatch" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item remove__chart text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>
            <table id="KeywordRecommendationsPhraseMatch" class="table table-borderless table-striped">             
                <thead>
                <tr><span class ="font-16 font-gg mt-3 ml-3" style ="display:inline-block!important;">FFF gợi ý &nbsp;<strong class="font-gg font-16 text-primary">100</strong> từ khóa có <strong class="font-gg text-primary font-16">liên quan chặt chẽ</strong> với từ khóa chính “<strong class="font-gg font-16 text-success">${keywords}</strong>”</span></tr>
                    <tr>
                        <th class="text-muted font-10" style="width:17%">Từ khoá</th>
                        <th class="text-muted font-10" style="width:17%">Lượt tìm kiếm</th>
                        <th style="width:16%" class="text-muted font-10">CPC</th>
                        <th class="text-muted font-10" style="width:12%">Website hàng đầu</th>
                        <th style="width:25%" class="text-muted font-10">Lượt truy cập</th>
                        <th style="width:12%" class="text-muted font-10">Loại truy cập</th>
                    </tr>
                </thead>
                <tbody class="tbody__KeywordRecommendationsPhraseMatch">
                    
                </tbody>
            </table>
        </div>
    </div>
</div> 
</div>
</div>`)
    }
    if(check=="false") {
        $('.tbody__KeywordRecommendationsPhraseMatch').html("");
    }
    // console.log('KeywordRecommendationsPhraseMatch: ', data);
    let call_api = data.data.records;
    call_api.forEach((key, index) => {
           if (index<=100) {
        let res = `href="index.php?view=keywords&action=keywords-overview&keyword=${key.keyword}"class="changeURL font-12" style= "display:inline-flex" data-input="${key.keyword}" data-keyword="${key.keyword}"`;
        let sparkline = `<div class="d-flex no-block flex-row"> 
    <a data-type="keyword" ${res}"><i class="child-hover far fa-search mr-2"></i>                                               
         ${key.keyword}
    </a>       
    <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${key.volumeTrend ? Object.values(key.volumeTrend) : [] }]"></div>
    </div>`;
        let cot2 = numeral(key.volume).format('0,0');
        let cot3 = numeral(key.cpc * 23500).format('0,0') + 'đ';
        let cot4 = `<div class="d-flex no-block flex-row">
    <a  data-type="website" class="changeURL" data-input="${key.leadingSite}" href="#">
        <img src="${key.favicon}" class="p-1 mr-2 border rounded bg-secondary" />
        ${key.leadingSite}</a>
</div>`;
        let cot5 = numeral(key.totalVisits).format('0,0');
        let organic = numeral(key.organicShare).format('0%');
        let cot6 = `<div class="progress bg-danger">
  <div class="progress-bar bg-success" style="width:${organic};height:6px;" role="progressbar"></div>
</div>`;
        $('.tbody__KeywordRecommendationsPhraseMatch').append(`
       <tr>
       <td>${sparkline}</td>
       <td>${cot2}</td>
       <td>${cot3}</td>
       <td style ="white-space:nowrap">${cot4}</td>
       <td>${cot5}</td>
       <td>${cot6}</td>
       </tr>    
    `) }
    })
    $('#KeywordRecommendationsPhraseMatch').DataTable({
        "paging": true,
        "searching": false,
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        "pageLength":5,
        "ordering": false,
        "info": false,
        "sorting":false
      });
    renderSparkline(task);
}


const KeywordRecommendationsRelated = (task, data,check,object) => {
    // if(data.data ==null) {               
    //     setTimeout(function(){ Swal.fire('Dữ liệu tạm thời có vẻ đang bị rỗng', 'Trang sẽ được reload !', 'error');
    //     location.reload();
    //     return; }, 10000)
      
    // }
   
    if (check == "true") {
    $('.grid-stack').append(`
    <div class="grid-stack-item my-4" data-gs-x="${(!key)?'0':(object['gs-x'])}" data-gs-y="${(!key)?'86':(object['gs-y'])}" data-gs-width="${(!key)?'12':(object['gs-width'])}" data-gs-height="${(!key)?'7':(object['gs-height'])}" data-task="KeywordRecommendationsRelated" data-gs-min-width ="7" data-gs-min-height="5">
    <div class="grid-stack-item-content shadow-gg">
    <div class="row rowKeywordRecommendationsRelated h-100">
    <div class="col-12">
        <div class="h-100 d-flex no-block bg-white flex-column rounded-sm shadow-gg overflow-hidden" style="z-index:3;position:relative">
            <div class="dropdown-wrapper d-flex justify-content-end"> <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style =""> <i class="far fa-ellipsis-h" style="color: #2c2952;"></i> </button> <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(1082px, 56px, 0px); top: 0px; left: 0px; will-change: transform;"> <a class="KeywordRecommendationsRelated dropdown-item similarReloadTask text-muted" data-task="KeywordRecommendationsRelated" href="javascript:;"><i class="fal fa-sync mr-2"></i><span>Reload</span></a> <a class="dropdown-item remove__chart text-muted d-flex align-items-center" href="javascript:;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove</span></a> </div> </div>
            <table id="KeywordRecommendationsRelated" class="table table-borderless table-striped">
                <thead>
                <tr role="row"><span class ="font-16 font-gg mt-3 ml-3" style ="display:inline-block!important;">FFF gợi ý &nbsp;<strong class="font-gg font-16 text-primary">100</strong> từ khóa có <strong class="font-gg text-primary font-16">liên quan</strong>&nbsp;với từ khóa chính “<strong class="font-gg font-16 text-success">${keywords}</strong>”</span></tr>               
                    <tr>
                    <th class="text-muted font-10" style="width:17%">Từ khoá</th>
                    <th style="width:16%" class="text-muted font-10">Lượt tìm kiếm</th>
                    <th style="width:16%" class="text-muted font-10">CPC</th>
                    <th class="text-muted font-10"  style="width:10%">Website hàng đầu</th>
                    <th class="text-muted font-10" style="width:11%">Độ liên quan</th>
                    <th style="width:21%" class="text-muted font-10">Lượt truy cập</th>
                    <th style="width:24%" class="text-muted font-10">Loại truy cập</th>
                    </tr>
                </thead>
                <tbody class="tbody__KeywordRecommendationsRelated"></tbody>
            </table>
        </div>
    </div>
</div>
</div> 
</div>
`) }
if (check == "false") {
    $('.tbody__KeywordRecommendationsRelated').html("");
}
    // console.log('ss', data);

   
    let call_api = data.data.records;
    // console.log('KeywordRecommendationsRelated', data.data);
     if (!call_api) return true;
    call_api.forEach((key, index) => {
        if (index<=100) {
        let res = `href="index.php?view=keywords&action=keywords-overview&keyword=${key.keyword}"class="changeURL font-12" style= "display:inline-flex" data-input="${key.keyword}" data-keyword="${key.keyword}"`;
        let sparkline = `<div class="d-flex no-block flex-row"> 
    <a data-type="keyword" ${res}"><i class="child-hover far fa-search mr-2"></i>                                               
         ${key.keyword}
    </a>       
    <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${key.volumeTrend ? Object.values(key.volumeTrend) : [] }]"></div>
    </div>`;
        let cot2 = numeral(key.volume).format('0,0');
        let cot3 = numeral(key.cpc * 23500).format('0,0') + 'đ';
        let cot4 = `<div class="d-flex no-block flex-row">
    <a  data-type="website" class="changeURL" data-input="${key.leadingSite}" href="#">
        <img src="${key.favicon}" class="p-1 mr-2 border rounded bg-secondary" />
        ${key.leadingSite}</a>
</div>`;
        let cot5 = numeral(key.totalVisits).format('0,0');
        let organic = numeral(key.organicShare).format('0%');
        let cot5a = numeral(key.score).format('0%');
        let cot6 = `<div class="progress bg-danger">
  <div class="progress-bar bg-success" style="width:${organic};height:6px;" role="progressbar"></div>
</div>`;
        $('.tbody__KeywordRecommendationsRelated').append(`
       <tr>
       <td>${sparkline}</td>
       <td>${cot2}</td>
       <td>${cot3}</td>
       <td style ="white-space:nowrap">${cot4}</td>
       <td>${cot5}</td>
       <td>${cot5a}</td>
       <td>${cot6}</td>
       </tr>    
    `) }
    })
    $('#KeywordRecommendationsRelated').DataTable({
        "paging": true,        
        "searching": false,
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        "pageLength":5,
        "ordering": false,
        "info": false,
        "sorting":false
      });
    //   $('.dataTables_length').addClass('bs-select');
    renderSparkline(task);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default api;