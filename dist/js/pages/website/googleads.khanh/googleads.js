//US,GB,AU,FR,
var masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];
const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];

// var localUrl = new URL(location.href);
// var domain = localUrl.searchParams.get('domain');


function lockedModule(boxWidgetName, level) {
    // console.log(boxWidgetName);

    var freeModule = [];
    var VIPModule = ["PositionChart", "CompetitorMapChart", "getScrapedSearchAds", "PaidPageTable", "adwordsMonthlyFullTrend"];
    if (level == 'demo') {
        if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {

            //ngoai le 
            if (boxWidgetName == 'getMarketingMixOverviewDaily') boxWidgetName = 'getMarketingMixOverview';
            if (boxWidgetName == 'SampleAdsasImage') boxWidgetName = 'SampleAds';
            //ngoai le 
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
        }
    } else if (level == 'free') {
        if (VIPModule.includes(boxWidgetName)) {
            $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
        }
    }
}


const api = async (method, domain) => {
    let methodName = method;
    if (method == "ggAdsOverview" || method == "TopPaidKeyword" || method == "PositionChart" || method == "PaidPageTables" || method == "getScrapedSearchAds") {
        method = "adwordsPositions"
    }
    if (method == "adwordsMonthlyFullTrend") {
        method = "adwordsMonthlyFullTrend"
    }
    if (method == "MainCompetitor" || method == "CompetitorMapChart") {
        method = "adwordsCompetitors"
    }
    try {
        return await $.ajax({
            url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingSearchDetail&domain=${domain}&page=1&method[${method}]=true&userToken=${userToken}`,
            type: "GET"
        })
            .then(data => {
                switch (methodName) {
                    case "ggAdsOverview":
                        ggAdsOverview(data, method);
                        break;
                    case 'adwordsMonthlyFullTrend':
                        adwordsMonthlyFullTrend(data, method);
                        break;
                    case 'PositionChart':
                        PositionChart(data, method);
                        break;
                    case "CompetitorMapChart":
                        CompetitorMapChart(data, method)
                        break;
                    case "getScrapedSearchAds":
                        getScrapedSearchAds(data, method);
                        break;
                    default:
                        break;
                }
                lockedModule(methodName, data.userData.member)
                return true;
            })

    } catch (error) {
        // console.log(error);
    }
}


function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}


// ----------init function-----------

const ggAdsOverview = async (data, method) => {
    let res = data.data.adwordsPositions;
    var k, S, c = 0; //k:keword,S=traffic,c:trafficost      
    res.reduce((weight, animal, index, animals) => {
        weight += animal.keywordDifficulty;
        k = weight;
        return k;
    }, 0)
    res.reduce((weight, animal, index, animals) => {
        weight += animal.traffic;
        S = weight;
        return S;
    }, 0)
    res.reduce((weight, animal, index, animals) => {

        weight += animal.trafficCost;
        c = weight;

        return c;
    }, 0)

    let html = `   
    <div class="col-12 col-lg-4 vc ">
    <div class="text-center bg-white p-3 align-items-center rounded">
        <div class="pt-5 pb-5">
            <div class="fontsize-14 ">Traffic Cost</div>
            <div class="money-appr similarGlobalRank text-danger tra-cost fontsize-44"></div>
        </div>
    </div>
    </div> 
       
    
    
    
    <div class="col-12 col-lg-4 ">
        <div class="bg-white p-3 align-items-center text-center rounded">
            <div class="pt-5 pb-5">
                <div class="fontsize-14 ">Traffic</div>
                <div class="money-appr similarCountryRank text-success visit fontsize-44"></div>
            </div>
        </div>
    </div>
    
    <div class="col-12 col-lg-4">
    <div class="bg-white p-3 align-items-center text-center rounded">
        <div class="pt-5 pb-5">
            <div class="fontsize-14 ">Keywords</div>
            <div class="money-appr text-info fontsize-44 kwhard"></div>
        </div>
    </div>
    </div>
    `
    $('.ggAdsOverview').append(html)


    if (res.length <= 0) {
        $('.kwhard').html('0k')
        $('.visit').html('0k')
        $('.tra-cost').html('$' + '0k' + '<span>USD</span>')
    }
    else {
        $('.kwhard').html(kFormatter(k))
        $('.visit').html(kFormatter(S))
        $('.tra-cost').html('$' + kFormatter(c) + '<span>USD</span>')
    }
}


const adwordsMonthlyFullTrend = async (data, method) => {
    $('.widget-PublicSherTable').append(`<div class="ml-auto d-flex no-block align-items-center pr-3">
    <a class="similarReloadTask text-muted" data-task="adwordsMonthlyFullTrend" href="javascript:;"><i class="fal fa-sync"></i></a>
    </div>`)
    if (data.status == "success") {

        if (data && data.data && data.data.adwordsMonthlyFullTrend && data.data.adwordsMonthlyFullTrend.length != 0) {
            var res = data.data.adwordsMonthlyFullTrend;
            console.log(res.length, 'khanh');

            const render = async (name, res) => {
                var gandate, gantraffic, dateString;
                let dataChart = [];
                res.forEach((weight, animal) => {
                    var theDate = new Date(weight.date * 1000);
                    var traffic = (name == "EstimateChart") ? weight.traffic : (name == "CostChart") ? weight.trafficCost : weight.positions;
                    dateString = theDate.toGMTString();
                    dateString = dateString.split(' ').slice(2, 4).join(' ');
                    gandate = dateString;
                    gantraffic = traffic;
                    let obj = {
                        keys: gandate,
                        values: gantraffic,
                        positionsTrend: weight.positionsTrend
                    }
                    dataChart.push(obj);

                })
                dataChart.sort((a, b) => {
                    return new Date(a.keys) - new Date(b.keys)
                })
                dataChart = dataChart.slice(28, 40);
                let dataChart_1 = {
                    keys: [],
                    values: [],
                    positionsTrend: []
                }
                dataChart.forEach(val => {
                    let x;
                    dataChart_1.keys.push(val.keys)
                    dataChart_1.values.push(val.values);
                    dataChart_1.positionsTrend.push(val.positionsTrend);
                    // console.log(dataChart_1);
                })
                //console.log( dataChart_1);


                let series = [{
                    name: name,
                    type: 'bar',
                    // stack: "0",
                    smooth: true,
                    areaStyle: {
                        color: masterColor
                    },
                    label: {
                        show: name != "KeywordsChart" ? true : false,
                        position: 'top',
                        color: 'red',
                        formatter: function (params) {
                            return kFormatter(params.value)
                        },
                    },
                    // symbol: "none",
                    symbolSize: 10,
                    itemStyle: {
                        color: 'rgb(79, 141, 249)'
                    },

                    data: dataChart_1.values
                },];
                if (name == "KeywordsChart") {
                    series.push({
                        name: name,
                        type: 'line',
                        smooth: true,
                        // stack: "0",
                        itemStyle: {
                            color: masterColor
                        },
                        color: masterColor,
                        label: {
                            show: true,
                            position: 'top',
                            color: 'red',
                            formatter: function (params) {
                                return kFormatter(params.value)
                            },
                        },
                        data: dataChart_1.values
                    })
                }

                let ele = document.getElementById(name);
                let myChart = echarts.init(ele);
                let option = {
                    tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgb(255, 255, 255, 1)',
                        borderColor: 'rgb(101,155,250)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {

                            let {
                                name,
                                value,
                                seriesName,
                                marker,
                                color
                            } = params[0];

                            if (seriesName == "EstimateChart") {
                                seriesName = "Traffic"
                            } else if (seriesName == "CostChart") {
                                seriesName = "Traffic Cost"
                            }
                            let tooltip_1 = {
                                name,
                                value,
                                seriesName,
                                marker,
                                color
                            }

                            if (name == "KeywordsChart") {
                                tooltip_1 = params[1];
                            }




                            name = moment(name).format('DD MMMM YYYY');

                            if (seriesName == "KeywordsChart") {
                                let content = "";
                                var top3, top4, top9, total;
                                dataChart_1.values.forEach((val, index) => {
                                    if (val == value) {
                                        dataChart_1.positionsTrend.forEach((v, i) => {
                                            if (index == i) {
                                                top3 = v[0] + v[1] + v[2];
                                                top4 = v[3] + v[4] + v[5] + v[6] + v[7] + v[8];
                                                top9 = v[9] + v[10];
                                                total = top3 + top4 + top9;
                                                // console.log(top3);


                                            }
                                        })
                                        content = `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                      <div class="text-dark pt-2">
                                      <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgb(250,187,50)"></span> Top 3  <span style="color:${color};" class="ml-4">${top3}</span> <br>
                                      <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#AEDFFF"></span>  4-9 &nbsp;&nbsp;&nbsp;<span style="color:${color};" class="ml-4">${top4}</span> <br>
                                      <span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:rgb(79, 141, 249);"></span> 9++ <span style="color:${color};" class="ml-4">&nbsp;&nbsp;&nbsp;${top9}</span> <br>
                                      <div class="text-dark text-capitalize border-top  pt-1">  Total  <span style="display:inline-block;margin-right:5px;width:10px;height:10px;" class="ml-3"></span><span style="color:${color};font-weight:bold" class="ml-2">${total}</span></div>                                            
                                      </div> 
                                      `;
                                    }
                                })
                                return content;
                            } else {
                                // console.log(seriesName);
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                <div class="text-dark pt-2">
                                    ${ marker + " " + seriesName} <span style="color:${color};font-weight:bold">${numeral(value).format('0,0')}</span> 
                                </div> 
                                `;
                            }
                        }
                    },
                    legend: {
                        data: ['']
                    },
                    grid: {
                        left: '0%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        name: '',
                        type: 'category',
                        boundaryGap: false,
                        data: dataChart_1.keys,
                        axisLine: {
                            lineStyle: {
                                color: "#ccc"
                            }
                        },
                        axisTick: {
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#999"
                            },
                            fontFamily: 'Arial',
                        },
                    }],
                    yAxis: [{
                        name: '',
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
                            formatter: (value, index) => (value = numeral(value).format("0a"))
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                    },],
                    series: series
                };


                myChart.setOption(option);
                new ResizeSensor($(`#EstimateChart`), function () {
                    myChart.resize();
                });

                $(`#myTabContent`).removeClass('is-loading');
                $(`#EstimateChart`).removeClass('is-loading');
                $(`#EstimateChart`).removeClass('empty-state');



            }

            render("EstimateChart", res);
            $('#myTabContent a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                let name = $(this).data("task");
                render(name, res);
            });
            await $('.similarReloadTask[data-task="adwordsMonthlyFullTrend"]').find('i').removeClass('fa-spin');
        } else {
            $(`#myTabContent`).removeClass('is-loading');
            $(`#EstimateChart`).removeClass('is-loading');
            $(`#EstimateChart`).addClass('empty-state');
        }

    } else {
        $('#myTabContent').removeClass('is-loading')
        $('#EstimateChart').addClass('empty-state');
        $('#KeywordsChart').addClass('empty-state');
        $('#CostChart').addClass('empty-state');
    }
}

const PositionChart = async (data, method) => {
    $(".PositionChart").attr('style', 'height:300px!important')
    if (data.status = "success") {
        if (data && data.data) {
            if (data.data.adwordsPositions == null) {
                $('.PositionChart').addClass('empty-state');
                $('.PositionChart').removeClass('is-loading');
            } else {
                var res = data.data.adwordsPositions;

                let dataChart = {
                    keys: ['1', '2-3', 'Others'],
                    values: [],
                    counted: []
                }
                let count = [0, 0, 0];
                let counted = [0, 0, 0];
                for (let i = 0; i < res.length; i++) {
                    if (res[i].position == 1) {
                        count[0]++;

                    } else if (res[i].position == 2 || res[i].position == 3) {
                        count[1]++;

                    } else {
                        count[2]++;
                    }
                }

                counted = [100 - count[0], 100 - count[1], 100 - count[2]]
                dataChart.values.push(count)
                dataChart.counted.push(counted)

                let yMax = 100;
                for (var i = 0; i < data.length; i++) {
                    dataChart.push(yMax);
                }
                let option = {
                    xAxis: {
                        type: 'category',
                        data: dataChart.keys,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        stack: 0,

                    },
                    color: customColors,
                    yAxis: {
                        type: 'value',
                        data: ['0', '50', '100'],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        stack: 0,
                        axisLabel: {
                            formatter: (value, index) => (value = value + '%'),
                        },
                    },
                    tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgb(255, 255, 255, 1)',
                        borderColor: 'rgb(101,155,250)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: params => {
                            let {
                                name,
                                value,
                                seriesName,
                                marker,
                                color,
                                dataIndex
                            } = params[0];

                            return `
                            <div class="text-dark">
                            <div class="text-dark border-bottom pb-1 text-center">${name} <span style="color:${color};font-weight:bold;opacity:.8"></span> <br> </div>
                         <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#AEDFFF"></span>   ${ 'Paid positions'} <span style="color:${color};font-weight:bold">${(value)}</span> <br>
                               
                            </div> 
                            `;

                        }
                    },
                    series: [{
                        data: dataChart.values[0],
                        type: 'bar',
                        stack: '广告',
                    },
                    {
                        data: dataChart.counted[0],
                        type: 'bar',
                        stack: '广告',
                        color: '#FFE5CD'
                    }
                    ]
                };
                var myChart = document.getElementsByClassName('PositionChart');
                var charts = [];
                for (var i = 0; i < myChart.length; i++) {
                    var chart = echarts.init(myChart[i]);
                    chart.setOption(option);
                    charts.push(chart);
                }


                window.onresize = function () {
                    for (var i = 0; i < charts.length; ++i) {
                        charts[i].resize();
                    }
                };
                await $(`.PositionChart`).removeClass('is-loading');
            }

        } else {
            $(`.PositionChart`).removeClass('is-loading');
            $(`.PositionChart`).addClass('empty-state');
        }


    } else {
        $(`.PositionChart`).removeClass('is-loading');
        $(`.PositionChart`).addClass('empty-state');

    }
}


const CompetitorMapChart = async (data, method) => {
    if (data.status == "success") {
        if (data && data.data) {
            console.log(data, 'đâsdsad');

            if (data.data.adwordsCompetitors != null && data.data.adwordsCompetitors.length != 0) {
                let myarr = []
                let myarrchart = []
                let myarrChartName = [];
                let series = [];
                var res = data.data.adwordsCompetitors;
                $.each(res, (index, item) => {
                    if (index < 7) {
                        let obj = {}
                        obj.domain = item.domain
                        obj.adwordsKeywords = item.adwordsKeywords
                        obj.traffic = item.traffic
                        obj.commonKeywords = item.commonKeywords
                        myarr.push(obj)

                    }
                })
                var filterArr = myarr.filter(function (myarr) {
                    return myarr.domain != "";
                });

                // phan getCompetitorReportChart
                $.each(filterArr, (index, item) => {
                    if (index < 7) {
                        let arr = []
                        arr.push(item.adwordsKeywords)
                        arr.push((item.traffic))
                        arr.push(item.commonKeywords)
                        arr.push(item.domain)
                        myarrchart.push(arr)
                        myarrChartName.push(item.domain)
                    }
                })


                myarrchart.forEach((v, i) => {
                    if (i < 7) {
                        let obj = {}
                        //  console.log(v);

                        obj.name = v[3],
                            obj.type = 'scatter',
                            obj.symbolSize = function (data) {
                                // console.log(data);
                                return kFormatter(data[2]);
                            },
                            obj.emphasis = {
                                label: {
                                    show: false,
                                    formatter: function (param) {
                                        return kFormatter(param.data[3]);
                                    },
                                    // position: 'top'
                                },
                                top: '40%'

                            },
                            obj.itemStyle = {
                                shadowBlur: 10,
                                shadowColor: 'rgba(120, 36, 50, 0.5)',
                                shadowOffsetY: 5,
                                // radius: ["40%", "60%"],
                                // center: ["50%", "35%"],
                                top: '40%'
                            },
                            obj.data = [v]
                        series.push(obj)
                    }
                });
                let myChart = document.getElementsByClassName(`CompetitorMapChart`);
                let option = {
                    tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgb(255, 255, 255, 1)',
                        borderColor: 'rgb(101,155,250)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {

                            let {
                                name,
                                value,
                                seriesName,
                                marker,
                                color
                            } = params[0];

                            // name = moment(name).format('DD MMMM YYYY');

                            return `
                                <div class="text-dark">
                                <div class="text-dark  border-bottom pb-1">${ marker + " " + seriesName} <span style="color:${color};font-weight:bold;opacity:.8"></span> <br> </div>
                                    ${ 'Keywords'} <span style="color:${color};font-weight:bold">${kFormatter(value[0])}</span> <br>
                                    ${ 'Traffic'} <span style="color:${color};font-weight:bold">${kFormatter(value[1])}</span> <br>
                                    ${ 'Common Keywords'} <span style="color:${color};font-weight:bold">${kFormatter(value[2])}</span> <br>
                                </div> 
                                `;

                        }
                    },

                    xAxis: {
                        splitLine: {
                            lineStyle: {
                                type: 'category'
                            },
                            axisTick: {
                                show: false
                            },
                        },
                        axisLabel: {
                            formatter: (value, index) => (value = kFormatter(value)),
                        },
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                type: 'value'
                            },
                            axisTick: {
                                show: false
                            },

                        },
                        axisLabel: {
                            formatter: (value, index) => (value = kFormatter(value)),
                        },
                        scale: true
                    },
                    legend: {
                        left: 30,
                        data: myarrChartName
                    },
                    series: series
                };

                var charts = [];
                for (var i = 0; i < myChart.length; i++) {
                    var chart = echarts.init(myChart[i]);
                    chart.setOption(option);
                    charts.push(chart);
                }


                window.onresize = function () {
                    for (var i = 0; i < charts.length; ++i) {
                        charts[i].resize();
                    }
                };
                new ResizeSensor($(`.CompetitorMapChart`), function () {
                    chart.resize();
                });
                await $(`.similarReloadTask[data-task="CompetitorMapChart"]`).find('i').removeClass('fa-spin');
                await $(`.CompetitorMapChart`).removeClass('is-loading');
            } else {
                $('.CompetitorMapChart').addClass('empty-state').attr('style', 'height:305px!important');
                $('.CompetitorMapChart').removeClass('is-loading');
            }

        } else {
            $(`.CompetitorMapChart`).removeClass('is-loading').attr('style', 'height:305px!important');
            $(`.CompetitorMapChart`).addClass('empty-state');

        }
    } else {
        $(`.CompetitorMapChart`).removeClass('is-loading').attr('style', 'height:305px!important');
        $(`.CompetitorMapChart`).addClass('empty-state');

    }





}

const getScrapedSearchAds = async (data, method) => {
    if (data.data.adwordsPositions.length <= 0) {
        $('#getScrapedSearchAds').addClass('empty-state')
    }

    if (data.status == "success") {
        var SearchAds = data.data.adwordsPositions;
        //  console.log(SearchAds);        
        $(`#getScrapedSearchAds .carousel-inner`).html('');
        $(`#getScrapedSearchAds .carousel-indicators`).html('');
        $("#row-getPaidSearchCompetitorsTableV1").show();
        await $.each(SearchAds, (index, value) => {
            if (value) {
                if (index < 5) {
                    $(`#getScrapedSearchAds .carousel-indicators`).append(`
                <li data-target="#getScrapedSearchAds" data-slide-to="${index}" class="my-0 border-0 bg-favorite text-white text-center rounded-circle ${index == 0 ? 'active' : ''}" style="width:20px;height:20px;text-indent:0;">${index + 1}</li>
                `);
                }

                let carouselItem = '';
                {
                    let {
                        description,
                        visibleUrl,
                        phrase,
                        keywordDifficulty,
                        position,
                        title,
                    } = value;

                    if (index < 5) {
                        (description != '') ? description = '<div class="text-muted">' + description + '</div>' : null;
                        carouselItem = `
                    <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                    <div class="similarAdsText border rounded">
                        <div class="d-flex no-block align-items-center justify-content-center bg-secondary p-10" style="height:185px">
                        <div class="border bg-white shadow p-10 w-100">
                            <a href="javascript:;" target="_blank" title="${visibleUrl}">
                            ${title}
                            </a>   
                            <div class="text-success text-truncate pb-0">${visibleUrl}</div>                         
                            ${description}
                        </div>
                        </div>
                        <div class="similarAdsDetails p-20 border-top">
                        <div class="row">
                            <div class="col text-muted font-10">Vị trí trung bình</div>
                            <div class="col text-muted font-10">Độ khó từ khoá</div>
                            <div class="col text-muted font-10">Website đích</div>
                        </div>
                        <div class="row">
                            <div class="col">${numeral(position).format('0')}</div>
                            <div class="col">${numeral(keywordDifficulty).format('0,0')}</div>
                            <div class="col text-truncate pb-0">${visibleUrl}</div>
                        </div>
                        <div class="mt-3 text-truncate pb-0"><div class="font-10 text-muted">Từ khoá</div>${phrase}</div>
                        </div>
                    </div>
                    </div>
                    `
                    }
                }

                $(`#getScrapedSearchAds .carousel-inner`).append(carouselItem);
            }
        });

        $('.keywords-list').perfectScrollbar();

        await $(`#getScrapedSearchAds .carousel-inner`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="getScrapedSearchAds"]`).find('i').removeClass('fa-spin');
    } else {
        //  console.log(`getScrapedSearchAds failed`);
    }
};


export default api;