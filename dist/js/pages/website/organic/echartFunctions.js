// import counterUp from '../counterup2/index.js';
// import counterUp from '../../../../js/pages/keywords/counterup2/index.js';

// const counter = document.querySelector('.counter');

var domain = '';
var arrDomain = [];
var selectWebsite = "";

const customColors = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

const api = async(task, domain, reload = 0) => {
    domain;
    let url = '';
    let method;
    if (task == 'getAdvertisingSearchDetail') {
        method = 'adwordsCompetitors'
    }
    if (task == 'getDomainOrganicDetail') {
        method = 'organicOverview'
    }
    if (task == 'getAdvertisingSearchDetail' || task == 'getDomainOrganicDetail') {
        url = `//localapi.trazk.com/webdata/v3.php?task=${task}&domain=${domain}&page=1&method[${method}]=true&userToken=${userToken}&reload=${reload}`
    } else {
        url = `//localapi.trazk.com/webdata/v3.1.php?task=${task}&domain=${domain}&userToken=${userToken}&reload=${reload}`
    }
    try {
        return await $.ajax({
                url: url,
                type: "GET"
            })
            .then(data => {
                if (task == 'buildFeatureImage') {
                    return;
                }
                let isEmpty = false;
                let temp = 0;
                switch (task) {
                    // case "getHeader":
                    //     getHeader(data);
                    //     break;
                    case "getTrafficSourcesSearch":
                        getTrafficSourcesSearch(task, data);
                        break;
                    case "getAdvertisingSearchDetail":
                        getAdvertisingSearchDetail(task, data);
                        break;
                    case "getDomainOrganicDetail":
                        getDomainOrganicDetail(task, data);
                        break;
                    case "getSearchOrganicPaidOverview":
                        getSearchOrganicPaidOverview(task, data, domain);
                        break;
                    case "getSearchBrandedKeywords":
                        getSearchBrandedKeywords(task, data);
                        break;
                    default:
                        break;

                }
                lockedModule(task, data.userData.member);
                return;
                // }
            });
    } catch (error) {
        console.error(error);
    }
};
// check vip-free-demo user
function lockedModule(boxWidgetName, level) {
    console.log(boxWidgetName,level);
    var freeModule = [];
    var VIPModule = ["trafficKeywordTrend","getAdvertisingSearchDetail", "getTrafficSourcesSearch", "getSearchBrandedKeywords", "getSearchOrganicPaidOverview"];
    if (level == 'demo') {
        if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {
            //ngoai le 
           
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');

            if ( boxWidgetName == "getSearchOrganicPaidOverview"){
                var addOtherBox = "getSearchOrganicPaidOverviewpaid";
                $(".parent-" + addOtherBox).addClass("locked");
                $(".parent-" + addOtherBox).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
            }

        }
    } else if (level == 'free') {
        if (VIPModule.includes(boxWidgetName)) {
            
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
            if ( boxWidgetName == "getSearchOrganicPaidOverview"){
                var addOtherBox = "getSearchOrganicPaidOverviewpaid";
                $(".parent-" + addOtherBox).addClass("locked");
                $(".parent-" + addOtherBox).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
            }
        }
    }
}
//Tỉ lệ truy cập từ tìm kiếm
const getTrafficSourcesSearch = async(task, data) => {
    if (data.status == "success") {
        $(`.${task}`).removeClass('empty-state');
        let {
            data: traffic
        } = data.data;
        let temp = true;

        $.each(traffic, (index, value) => {
            if (index == "Organic") {
                if (value == 0) {
                    temp = false;
                }
            } else {
                if (value != 0) {
                    temp = true;
                }
            }
        })

        if (!temp || traffic == null) {
            await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            // prepare data
            let dataChart = [];
            $.each(traffic, (index, value) => {
                let item = {
                    value: value,
                    name: index == "Organic" ? "Tự nhiên" : "Trả phí"
                };
                dataChart.push(item);
            });
            let option = {
                color: customColors,
                legend: {
                    bottom: "5%",
                    // left: '70%',
                    // itemWidth: 20,
                    // itemHeight: 14,
                    // width: 10,
                    // textStyle: {
                    //     fontFamily: 'Arial',
                    // },
                    formatter: function(name) {
                        let value = name == 'Tự nhiên' ? dataChart[0].value * 100 : dataChart[1].value * 100;
                        return `${name}\n(${value}%)`;
                    }
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["40%", "60%"],
                    center: ["50%", "40%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
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
                    data: dataChart
                }]
            };
            // myChart.setOption(option);
            // Update v7
            var containers = document.getElementsByClassName(task);
            var charts = [];
            for (var i = 0; i < containers.length; i++) {
                var chart = echarts.init(containers[i]);
                chart.setOption(option);
                charts.push(chart);
            }
            window.onresize = function() {
                for (var i = 0; i < charts.length; ++i) {
                    charts[i].resize();
                }
            };
            await $(`.${task}`).removeClass('is-loading');
            //v7
            new ResizeSensor($(`.${task}`), function() {
                chart.resize();
                setTimeout(function() {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });
            setTimeout(function() {
                chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
                chart.on('mouseover', function(params) {
                    if (params.name == dataChart[0].name) {
                        chart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        chart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });
                chart.on('mouseout', function(params) {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);
            await $(`.${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        }
    } else {
        console.log(`${task} failed`);
    }
};
//Chi tiết từ truy cập
const getSearchOrganicPaidOverview = async(task, data) => {
    let task2 = 'getSearchOrganicPaidOverviewpaid';
    
    if (data.status == "success") {
        
        if (data.data.data == null || data.data.haveData == false) {
            let task = 'getSearchOrganicPaidOverviewpaid'
            let task2 = 'getSearchOrganicPaidOverview'
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            $(`#${task}`).removeClass('is-loading').addClass('empty-state').attr('style', 'height:100% !important');
            $(`#${task2}`).removeClass('is-loading').addClass('empty-state');
        } else {
            let website = data.data.website;
            let Data = data.data.data;
            let newData = {};
            if (Data) {
                if (Data[`${website}`]) {
                    newData = Data[`${website}`];
                } else {
                    newData = {};
                }
            }
            if (Object.keys(newData).length > 0) {
                let {
                    TrafficShare,
                    AverageDuration,
                    PagesPerVisit,
                    BounceRate
                } = newData
                const run = async(taskName, task_search) => {
                    let SearchOrganicPaidOverview;
                    switch (taskName) {
                        case 'TrafficShare':
                            SearchOrganicPaidOverview = TrafficShare
                            break;
                        case 'AverageDuration':
                            SearchOrganicPaidOverview = AverageDuration
                            break;
                        case 'PagesPerVisit':
                            SearchOrganicPaidOverview = PagesPerVisit
                            break;
                        case 'BounceRate':
                            SearchOrganicPaidOverview = BounceRate
                            break;
                        default:
                            break;
                    }
                    let dataChart = {
                        keys: [],
                        values: [],
                    };
                    let {
                        BreakDown,
                        Total
                    } = SearchOrganicPaidOverview.Data;
                    let keys = [];
                    let values = {
                        Organic: [],
                        Paid: []
                    };
                    let temp = true;
                    // console.log(BreakDown);

                    $.each(BreakDown, (index, value) => {
                        $.each(value, (name, data) => {
                            if (name == "Organic Search") {
                                if (data == null) {
                                    temp = false;
                                }
                            } else {
                                if (data != null) {
                                    temp = true;
                                }
                            }
                        })
                    })
                    if (!temp) {
                        await $(`#getSearchOrganicPaidOverview`).removeClass('is-loading').addClass('empty-state');
                        // await $(`#getSearchOrganicPaidOverviewpaid`).removeClass('is-loading').addClass('empty-state');
                    } else {
                        $.each(BreakDown, (idx, val) => {
                            keys.push(idx);
                            $.each(val, (name, data) => {
                                (name == 'Organic Search') ?
                                values.Organic.push(data):
                                    values.Paid.push(data)
                            })
                        })
                        $(`#${task_search}--totalTraffic`).html('');
                        $(`#${task_search}`).removeClass('empty-state');
                        $.each(Total, (idx, val) => {
                            let title = idx == "Organic Search" ? 'Trung bình cộng tìm kiếm tự nhiên' : 'Trung bình cộng tìm kiếm trả phí';
                            let color = idx == "Organic Search" ? 'rgb(241, 196, 15)' : 'rgb(26, 188, 156)';
                            switch (taskName) {
                                case 'TrafficShare':
                                    val = numeral(val).format('0,0');
                                    break;
                                case 'AverageDuration':
                                    val = numeral(val).format('00:00:00');
                                    break;
                                case 'PagesPerVisit':
                                    val = numeral(val).format('0');
                                    break;
                                case 'BounceRate':
                                    val = numeral(val).format('0 %');
                                    break;
                                default:
                                    break;
                            }
                            $(`#${task_search}--totalTraffic`).append(`
                        <div class="d-flex no-block flex-column mb-4 pl-5">
                            <span class="text-muted">${title}</span>
                            <span class="display-6" style="color:${color}">${val}</span>
                        </div>
                        `)
                        })
                        dataChart.keys = keys;
                        dataChart.values = values;
                        // render chart
                        let id = 'getSearchOrganicPaidOverview--' + taskName;
                        // console.log(id);
                        let ele = document.getElementById(id);
                        let myChart = echarts.init(ele);
                        let option = {
                            tooltip: {
                                trigger: "axis",
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(93,120,255,1)',
                                borderWidth: 1,
                                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                                formatter: params => {
                                    // console.log(params);
                                    let {
                                        name
                                    } = params[0];
                                    let {
                                        marker: mrkr1,
                                        color: color1,
                                        seriesName: name1,
                                        value: val1
                                    } = params[0];
                                    name = moment(name).format('DD MMMM YYYY');
                                    switch (taskName) {
                                        case 'TrafficShare':
                                            val1 = numeral(val1).format('0,0');
                                            break;
                                        case 'AverageDuration':
                                            val1 = numeral(val1).format('00:00:00');
                                            break;
                                        case 'PagesPerVisit':
                                            val1 = numeral(val1).format('0');
                                            break;
                                        case 'BounceRate':
                                            val1 = numeral(val1).format('0 %');
                                            break;
                                        default:
                                            break;
                                    }
                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">
                                ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                                </div>`;
                                    // <br/>
                                    // ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                                }
                            },
                            // legend: {
                            //     data: ["Tìm kiếm tự nhiên", "Tìm kiếm trả phí"]
                            // },
                            grid: {
                                right: "5%"
                            },
                            xAxis: {
                                type: "category",
                                boundaryGap: false,
                                data: dataChart.keys,
                                axisLine: {
                                    lineStyle: {
                                        color: "#ccc"
                                    }
                                },
                                axisLabel: {
                                    margin: 10,
                                    textStyle: {
                                        color: "#ccc"
                                    },
                                    fontFamily: 'Arial',
                                    formatter: (value, index) => moment(value).format('MM-YYYY')
                                },
                                axisPointer: {
                                    lineStyle: {
                                        color: "rgb(25, 123, 251)",
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
                                    formatter: (value, index) => {
                                        if (taskName == 'TrafficShare') {
                                            return numeral(value).format("0a")
                                        } else if (taskName == 'AverageDuration') {
                                            return numeral(value).format("00:00:00")
                                        } else if (taskName == 'PagesPerVisit') {
                                            return numeral(value).format("0")
                                        } else {
                                            return numeral(value).format("0,0%")
                                        }
                                    },
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: 'rgba(0,0,0,0.1)'
                                    }
                                },
                            },
                            series: [{
                                name: 'Tìm kiếm tự nhiên',
                                data: dataChart.values.Organic,
                                type: "line",
                                // smooth: true,
                                symbol: "circle",
                                symbolSize: 10,
                                showSymbol: true,
                                hoverAnimation: false,
                                lineStyle: {
                                    normal: {
                                        width: 2,
                                        shadowColor: "rgba(0,0,0,0.4)",
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: "rgb(241, 196, 15)",
                                        borderColor: "rgba(241, 196, 15, 0.2)",
                                        borderWidth: 12
                                    }
                                }
                            }, ]
                        };
                        myChart.setOption(option);
                        new ResizeSensor($(`#${task_search}`), function() {
                            myChart.resize();
                        });
                        await $(`#${(task_search == undefined) ? 'getSearchOrganicPaidOverview' : task_search}`).removeClass('is-loading');
                        ////////chart tim kiem tra phi
                    }
                }
                const run_paid = async(taskName, task_search) => {
                    let SearchOrganicPaidOverview;
                    switch (taskName) {
                        case 'TrafficShare':
                            SearchOrganicPaidOverview = TrafficShare
                            break;
                        case 'AverageDuration':
                            SearchOrganicPaidOverview = AverageDuration
                            break;
                        case 'PagesPerVisit':
                            SearchOrganicPaidOverview = PagesPerVisit
                            break;
                        case 'BounceRate':
                            SearchOrganicPaidOverview = BounceRate
                            break;
                        default:
                            break;
                    }
                    let dataChart = {
                        keys: [],
                        values: [],
                    };
                    let {
                        BreakDown,
                        Total
                    } = SearchOrganicPaidOverview.Data;
                    let keys = [];
                    let values = {
                        Organic: [],
                        Paid: []
                    };
                    let temp = true;
                    // console.log(BreakDown);
                    $.each(BreakDown, (index, value) => {
                        $.each(value, (name, data) => {
                            if (name == "Paid Search") {
                                if (data == null) {
                                    temp = false;
                                }
                            } else {
                                if (data != null) {
                                    temp = true;
                                }
                            }
                        })
                    })
                    if (!temp) {
                        await $(`#getSearchOrganicPaidOverviewpaid`).removeClass('is-loading').addClass('empty-state');
                    } else {
                        $.each(BreakDown, (idx, val) => {
                            keys.push(idx);
                            $.each(val, (name, data) => {
                                (name == 'Organic Search') ?
                                values.Organic.push(data):
                                    values.Paid.push(data)
                            })
                        })
                        $(`#${task_search}--totalTraffic`).html('');
                        $(`#${task_search}`).removeClass('empty-state');
                        $.each(Total, (idx, val) => {
                            let title = idx == "Organic Search" ? 'Trung bình cộng tìm kiếm tự nhiên' : 'Trung bình cộng tìm kiếm trả phí';
                            let color = idx == "Organic Search" ? 'rgb(241, 196, 15)' : 'rgb(26, 188, 156)';
                            switch (taskName) {
                                case 'TrafficShare':
                                    val = numeral(val).format('0,0');
                                    break;
                                case 'AverageDuration':
                                    val = numeral(val).format('00:00:00');
                                    break;
                                case 'PagesPerVisit':
                                    val = numeral(val).format('0');
                                    break;
                                case 'BounceRate':
                                    val = numeral(val).format('0 %');
                                    break;
                                default:
                                    break;
                            }
                            $(`#${task_search}--totalTraffic`).append(`
                        <div class="d-flex no-block flex-column mb-4 pl-5">
                            <span class="text-muted">${title}</span>
                            <span class="display-6" style="color:${color}">${val}</span>
                        </div>
                        `)
                        })
                        dataChart.keys = keys;
                        dataChart.values = values;
                        // render chart
                        let id_paid = 'getSearchOrganicPaidOverviewpaid--' + taskName;
                        let ele_paid = document.getElementById(id_paid);
                        let myChart_paid = echarts.init(ele_paid);
                        let option_paid = {
                            tooltip: {
                                trigger: "axis",
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(93,120,255,1)',
                                borderWidth: 1,
                                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                                formatter: params => {
                                    // console.log(params);
                                    let {
                                        name
                                    } = params[0];
                                    let {
                                        marker: mrkr1,
                                        color: color1,
                                        seriesName: name1,
                                        value: val1
                                    } = params[0];
                                    name = moment(name).format('DD MMMM YYYY');
                                    switch (taskName) {
                                        case 'TrafficShare':
                                            val1 = numeral(val1).format('0,0');
                                            break;
                                        case 'AverageDuration':
                                            val1 = numeral(val1).format('00:00:00');
                                            break;
                                        case 'PagesPerVisit':
                                            val1 = numeral(val1).format('0');
                                            break;
                                        case 'BounceRate':
                                            val1 = numeral(val1).format('0 %');
                                            break;
                                        default:
                                            break;
                                    }
                                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">
                                ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                                </div>`;
                                }
                            },
                            grid: {
                                right: "5%"
                            },
                            xAxis: {
                                type: "category",
                                boundaryGap: false,
                                data: dataChart.keys,
                                axisLine: {
                                    lineStyle: {
                                        color: "#ccc"
                                    }
                                },
                                axisLabel: {
                                    margin: 10,
                                    textStyle: {
                                        color: "#ccc"
                                    },
                                    fontFamily: 'Arial',
                                    formatter: (value, index) => moment(value).format('MM-YYYY')
                                },
                                axisPointer: {
                                    lineStyle: {
                                        color: "rgb(25, 123, 251)",
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
                                    formatter: (value, index) => {
                                        if (taskName == 'TrafficShare') {
                                            return numeral(value).format("0a")
                                        } else if (taskName == 'AverageDuration') {
                                            return numeral(value).format("00:00:00")
                                        } else if (taskName == 'PagesPerVisit') {
                                            return numeral(value).format("0")
                                        } else {
                                            return numeral(value).format("0,0%")
                                        }
                                    },
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: 'rgba(0,0,0,0.1)'
                                    }
                                },
                            },
                            series: [{
                                name: 'Tìm kiếm trả phí',
                                data: dataChart.values.Paid,
                                type: "line",
                                // smooth: true,
                                symbol: "circle",
                                symbolSize: 10,
                                showSymbol: true,
                                hoverAnimation: false,
                                lineStyle: {
                                    normal: {
                                        width: 2,
                                        shadowColor: "rgba(0,0,0,0.4)",
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: "rgb(26, 188, 156)",
                                        borderColor: "rgba(26, 188, 156, 0.2)",
                                        borderWidth: 12
                                    }
                                }
                            }]
                        };
                        myChart_paid.setOption(option_paid);
                        new ResizeSensor($(`#${task_search}`), function() {
                            myChart_paid.resize();
                        });
                        await $(`#${(task_search == undefined) ? 'getSearchOrganicPaidOverviewpaid' : task_search}`).removeClass('is-loading');
                    }
                }
                run('TrafficShare');
                run_paid('TrafficShare');
                $('#getSearchOrganicPaidOverview a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                    var taskName = $(e.target).data('task'); // activated tab
                    var task_search = 'getSearchOrganicPaidOverview';
                    run(taskName, task_search);
                });
                $('#getSearchOrganicPaidOverviewpaid a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                    var taskName = $(e.target).data('task'); // activated tab
                    var task_search = 'getSearchOrganicPaidOverviewpaid';
                    run_paid(taskName, task_search);
                });

            } else {
                $(`#${task}`).removeClass('is-loading').addClass('empty-state');
                $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            }
        }
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');

    } else {
        // console.log(`${task} failed`);
    }

};
//Truy cập từ khóa tự nhiên
const getSearchBrandedKeywords = async(task, data) => {
    if (data.status == "success") {
        $(`.${task}`).removeClass('empty-state');
        let {
            data: visits
        } = data.data;
        // prepare data
        if (visits == null) {
            await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            const {
                Branded,
                NoneBranded
            } = visits;
            let dataChart = [{
                    name: 'Có thương hiệu',
                    value: Branded
                },
                {
                    name: 'Không thương hiệu',
                    value: NoneBranded
                }
            ];
            // render chart
            // let ele = document.getElementById(task);
            // let myChart = echarts.init(ele);
            let option = {
                color: customColors,
                legend: {
                    bottom: '5%',
                    left: 'center',
                    data: ['Có thương hiệu', 'Không thương hiệu'],
                    // itemWidth: 20,
                    // itemHeight: 14,
                    // width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                        lineHeight: 16
                    },
                    formatter: function(name) {
                        let value = name == 'Có thương hiệu' ? Branded : NoneBranded;
                        return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                    }
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["40%", "65%"],
                    center: ["50%", "42%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 5,
                        },
                    },
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
                    data: dataChart
                }]
            };
            // myChart.setOption(option);
            // Update v7
            var containers = document.getElementsByClassName(task);
            var charts = [];
            for (var i = 0; i < containers.length; i++) {
                var chart = echarts.init(containers[i]);
                chart.setOption(option);
                charts.push(chart);
            }
            window.onresize = function() {
                for (var i = 0; i < charts.length; ++i) {
                    charts[i].resize();
                }
            };
            await $(`.${task}`).removeClass('is-loading');
            //v7

            new ResizeSensor($(`.${task}`), function() {
                chart.resize();
                setTimeout(function() {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function() {
                chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                chart.on('mouseover', function(params) {
                    if (params.name == dataChart[0].name) {
                        chart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    } else {
                        chart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }
                });

                chart.on('mouseout', function(params) {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);
        }
        await $(`.${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');

    } else {
        console.log(`${task} failed`);
    }
};

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}
const getAdvertisingSearchDetail = async(task, data) => {
    if (data.status == "success") {
        if (data.data.adwordsCompetitors != "" && data.data.adwordsCompetitors != null) {
            let data_traffic = [];
            let series = [];
            let myarrChartName = [];
            data.data.adwordsCompetitors.forEach((v) => {
                data_traffic.push(v.traffic)
            })
            data_traffic.sort(function(a, b) {
                { return b - a }
            });
            data_traffic.length = 10;
            const outputs = data.data.adwordsCompetitors.filter((element, indexOfElement) => {
                    for (let i = 0; i < data_traffic.length; i++) {
                        if (element.traffic == data_traffic[i]) {
                            return data.data.adwordsCompetitors
                        }
                    }
                })
                // phan getCompetitorReportChart
            $.each(outputs, (index, item) => {
                myarrChartName.push(item.domain)
            })
            outputs.forEach((v, i) => {
                let obj = {}
                obj.name = v.domain,
                    obj.type = 'scatter',
                    obj.symbolSize = function(data) {
                        return kFormatter(data[2]);
                    },
                    obj.emphasis = {
                        label: {
                            show: false,
                            formatter: function(param) {
                                return kFormatter(param.data[3]);
                            },
                        },
                        top: '40%'
                    },
                    obj.itemStyle = {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        top: '40%'
                    },
                    obj.data = [
                        [v.adwordsKeywords, v.traffic, v.commonKeywords, v.domain]
                    ]

                series.push(obj)
            });
            let option = {
                color: customColors,
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
                        <div class="text-dark text-left">
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
                    data: myarrChartName,
                    width: 800
                },
                series: series
            };
            var containers = document.getElementsByClassName(task);
            var charts = [];
            for (var i = 0; i < containers.length; i++) {
                var chart = echarts.init(containers[i]);
                chart.setOption(option);
                charts.push(chart);
            }
            window.onresize = function() {
                for (var i = 0; i < charts.length; ++i) {
                    charts[i].resize();
                }
            };
            await $(`.${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
        }

    } else {
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
        console.log(`${task} failed`);
    }
};
const getDomainOrganicDetail = async(task, data) => {
    if (data.status == 'success') {
        if (data.data || data.data.organicOverview) {
            let trend_month = {
                date: [],
                trendtop3: [],
                trendtop10: [],
                trendtop20: [],
                trendtop50: [],
                trendtop100: [],
                totaltrend: [],
            };
            let chart_brandedmonth = {
                key: [],
                val_branded: [],
                val_traffic: [],
            };
            let chart_nonbrandedmonth = {
                key: [],
                val: []
            };
            let trend_date = {
                date: [],
                trendtop3: [],
                trendtop10: [],
                trendtop20: [],
                trendtop50: [],
                trendtop100: [],
                totaltrend: [],
            };
            let chart_brandeddate = {
                key: [],
                val_branded: [],
                val_traffic: [],
            };
            let chart_nonbrandeddate = {
                key: [],
                val: []
            };
            let trafficCostdate = {
                key: [],
                valtraf: [],
                valtraf_cost: []
            };
            let trafficCostmonth = {
                key: [],
                valtraf: [],
                valtraf_cost: []
            };
            $.each(data.data.organicOverview, (index, val) => {
                if (index == 0) {
                    $.each(val.result, (k, v) => {
                        trend_month.date.push(moment(v.date * 1000).format("MM-YYYY"))
                        trend_month.trendtop3.push(v.positionsTrend[0])
                        trend_month.trendtop10.push(v.positionsTrend[1])
                        trend_month.trendtop20.push(v.positionsTrend[2])
                        trend_month.trendtop50.push(v.positionsTrend[3] + v.positionsTrend[4] + v.positionsTrend[5])
                        trend_month.trendtop100.push(v.positionsTrend[6] + v.positionsTrend[7] + v.positionsTrend[8] + v.positionsTrend[9] + v.positionsTrend[10])
                        trend_month.totaltrend.push(v.positionsTrend.reduce((a, b) => a + b, 0))
                        chart_brandedmonth.key.push(moment(v.date * 1000).format("DD-MM-YYYY"))
                        chart_brandedmonth.val_branded.push(v.brandedPositions)
                        chart_brandedmonth.val_traffic.push(v.brandedTraffic)
                        chart_nonbrandedmonth.key.push(moment(v.date * 1000).format("DD-MM-YYYY"))
                        chart_nonbrandedmonth.val.push(v.nonBrandedTraffic)
                        trafficCostmonth.key.push(moment(v.date * 1000).format("MM-YYYY"))
                        trafficCostmonth.valtraf.push(v.traffic)
                        trafficCostmonth.valtraf_cost.push(v.trafficCost)
                    })
                }
                if (index == 1) {
                    $.each(val.result, (k, v) => {
                        trend_date.date.push(moment(v.date * 1000).format("DD-MM-YYYY"))
                        trend_date.trendtop3.push(v.positionsTrend[0])
                        trend_date.trendtop10.push(v.positionsTrend[1])
                        trend_date.trendtop20.push(v.positionsTrend[2])
                        trend_date.trendtop50.push(v.positionsTrend[3] + v.positionsTrend[4] + v.positionsTrend[5])
                        trend_date.trendtop100.push(v.positionsTrend[6] + v.positionsTrend[7] + v.positionsTrend[8] + v.positionsTrend[9] + v.positionsTrend[10])
                        trend_date.totaltrend.push(v.positionsTrend.reduce((a, b) => a + b, 0))
                        chart_brandeddate.key.push(moment(v.date * 1000).format("DD-MM-YYYY"))
                        chart_brandeddate.val_branded.push(v.brandedPositions)
                        chart_brandeddate.val_traffic.push(v.brandedTraffic)
                        chart_nonbrandeddate.key.push(moment(v.date * 1000).format("DD-MM-YYYY"))
                        chart_nonbrandeddate.val.push(v.nonBrandedTraffic)
                        trafficCostdate.key.push(moment(v.date * 1000).format("DD-MM-YYYY"))
                        trafficCostdate.valtraf.push(v.traffic)
                        trafficCostdate.valtraf_cost.push(v.trafficCost)
                    })
                }
            });

            function renderChart(data) {
                let option = {
                    tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            return `<div style="width: 150px !important" class="text-dark text-capitalize text-left border-bottom pb-1">${params[0].name}</div>
                            <div class="text-dark pt-2 text-left">
                                <div class="d-flex justify-content-between">
                                <span>${params[4].marker} Top 3</span><span class="text-right" style="color:${params[4].color};font-weight:bold">${params[4].value}</span></div>
                                <div class="d-flex justify-content-between">
                                <span>${params[3].marker} 4-10</span><span style="color:${params[3].color};font-weight:bold">${params[3].value}</span></div>
                                <div class="d-flex justify-content-between">
                                <span>${params[2].marker} 11-20</span><span style="color:${params[2].color};font-weight:bold">${params[2].value}</span></div>
                                <div class="d-flex justify-content-between">
                                <span>${params[1].marker} 21-50</span><span style="color:${params[1].color};font-weight:bold">${params[1].value}</span></div>
                                <div class="d-flex justify-content-between">
                                <span>${params[0].marker} 51-100</span><span style="color:${params[0].color};font-weight:bold">${params[0].value}</span></div>
                                <div class="d-flex justify-content-between">
                                <span>${params[5].marker} ${params[5].seriesName}</span><span style="color:${params[5].color};font-weight:bold">${params[5].value}</span></div>
                            </div>`;
                        }
                    },
                    legend: {
                        data: ['Top 3', '4-10', '11-20', '21-50', '51-100', 'Tổng']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: data.date,
                        axisLine: {
                            lineStyle: {
                                color: "#ccc"
                            }
                        },
                    }],
                    yAxis: [{
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
                    }, ],
                    series: [{
                            name: 'Top 3',
                            type: 'bar',
                            stack: "0",
                            areaStyle: {
                                color: '#0E75C2'
                            },
                            symbol: "none",
                            itemStyle: {
                                color: '#0E75C2'
                            },
                            data: data.trendtop100,
                        },
                        {
                            name: '4-10',
                            type: 'bar',
                            stack: "0",
                            areaStyle: {
                                color: "#50AEF4"
                            },
                            symbol: "none",
                            itemStyle: {
                                color: "#50AEF4"
                            },
                            data: data.trendtop50,
                        },
                        {
                            name: '11-20',
                            type: 'bar',
                            stack: "0",
                            areaStyle: {
                                color: "#91C7EF"
                            },
                            symbol: "none",
                            itemStyle: {
                                color: "#91C7EF"
                            },
                            data: data.trendtop20,
                        },
                        {
                            name: '21-50',
                            type: 'bar',
                            stack: "0",
                            areaStyle: {
                                color: "#D1E8F8"
                            },
                            symbol: "none",
                            itemStyle: {
                                color: "#D1E8F8"
                            },
                            data: data.trendtop10,

                        },
                        {
                            name: '51-100',
                            type: 'bar',
                            stack: "0",
                            areaStyle: {
                                color: "#FFC83F"
                            },
                            symbol: "none",
                            itemStyle: {
                                color: "#FFC83F"
                            },
                            data: data.trendtop3,
                        },
                        {
                            name: 'Tổng',
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                color: "#7B8C91"
                            },
                            data: data.totaltrend,
                        }
                    ]
                };
                // Update v7
                var containers = document.getElementsByClassName(task);
                var charts = [];
                for (var i = 0; i < containers.length; i++) {
                    var chart = echarts.init(containers[i]);
                    chart.setOption(option);
                    charts.push(chart);
                }
                window.onresize = function() {
                    for (var i = 0; i < charts.length; ++i) {
                        charts[i].resize();
                    }
                };
                //v7
            }
            $(`.similarReloadTask[data-task="${task}"]`).parent().html(`
                <fieldset id="btn-keytrend" style="box-shadow: 0 0 0 1px #eaedef inset !important;border-radius: 5px;">
                    <input id="keywordtrendmonth" class="radio-inline__input" type="radio" name="getTrafficAndEngagementVisits" value="keywordtrendmonth" checked="checked">
                    <label class="radio-inline__label" for="keywordtrendmonth">
                        Tháng
                    </label>
                    <input id="keywordtrendate" class="radio-inline__input" type="radio" name="getTrafficAndEngagementVisits" value="keywordtrendate">
                    <label class="radio-inline__label" for="keywordtrendate">
                        Ngày
                    </label>
                </fieldset>
                <span class="similarReloadTask ml-3" data-task="${task}"><i class="fal fa-sync"></i></span>
            `)

            renderChart(trend_month)
            $('#btn-keytrend input').click(function() {
                    let val = $(this).val()
                    if (val == "keywordtrendate") {
                        renderChart(trend_date)
                    } else if (val == "keywordtrendmonth") {
                        renderChart(trend_month)
                    }
                })
                //chi phí từ khóa trafficKeywordTrend
            function renderKeywordpaid(data) {
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            return `<div style="width: 150px !important" class="text-dark text-capitalize text-left border-bottom pb-1">${params[0].name}</div>
                            <div class="text-dark pt-2 text-left">
                                <div class="d-flex justify-content-between">
                                <span>${params[0].marker} ${params[0].seriesName}</span><span class="text-right" style="color:${params[0].color};font-weight:bold">${numeral(params[0].value).format("0,0")}</span></div>
                                <div class="d-flex justify-content-between">
                                <span>${params[1].marker} ${params[1].seriesName}</span><span class="ml-2" style="color:${params[1].color};font-weight:bold">${numeral(params[1].value).format("0,0")} vnd</span></div>
                            </div>`;
                        }
                    },
                    legend: {
                        data: ['Traffic', 'Traffic Cost'],
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: data.key,
                        axisLine: {
                            lineStyle: {
                                color: "#ccc"
                            }
                        },
                    }],
                    yAxis: [{
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
                    }, ],
                    series: [{
                            name: 'Traffic',
                            type: 'line',
                            stack: "0",
                            areaStyle: {
                                color: 'rgb(79, 141, 249)'
                            },
                            symbol: "none",
                            itemStyle: {
                                color: 'rgb(79, 141, 249)'
                            },
                            symbol: 'none',
                            smooth: true,
                            data: data.valtraf
                        },
                        {

                            name: 'Traffic Cost',
                            type: 'bar',
                            stack: "0",
                            areaStyle: {
                                color: '#fd397a'
                            },
                            
                            symbol: "none",
                            itemStyle: {
                                color: '#fd397a'
                            },
                            symbol: 'none',
                            smooth: true,
                            data: data.valtraf_cost
                        },
                    ]
                };
                // Update v7
                var containers = document.getElementsByClassName('trafficKeywordTrend');
                var charts = [];
                for (var i = 0; i < containers.length; i++) {
                    var chart = echarts.init(containers[i]);
                    chart.setOption(option);
                    charts.push(chart);
                }
                window.onresize = function() {
                    for (var i = 0; i < charts.length; ++i) {
                        charts[i].resize();
                    }
                };
                //v7
            }
            $(`.similarReloadTask[data-task="trafficKeywordTrend"]`).parent().html(`
                    <fieldset id="btn-trafficKeywordTrend" style="box-shadow: 0 0 0 1px #eaedef inset !important;border-radius: 5px;">
                        <input class="checkbox-budget" type="radio" name="budget" id="budget-1" value="trafficKeywordTrend-date" checked="">
                        <label class="for-checkbox-budget" for="budget-1">
                            <span>Ngày</span>
                        </label>
                        <input class="checkbox-budget" type="radio" name="budget" id="budget-2" value="trafficKeywordTrend-month">
                        <label class="for-checkbox-budget" for="budget-2">
                            <span>Tháng</span>
                        </label>
                    </fieldset>
                    <span class="similarReloadTask ml-3" data-task="${task}"><i class="fal fa-sync"></i></span>
                `)
            renderKeywordpaid(trafficCostdate)
            $('#btn-trafficKeywordTrend input').click(function() {
                let val = $(this).val()
                if (val == "trafficKeywordTrend-date") {
                    renderKeywordpaid(trafficCostdate)
                } else if (val == "trafficKeywordTrend-month") {
                    renderKeywordpaid(trafficCostmonth)
                }
            })
            await $(`.trafficKeywordTrend`).removeClass('is-loading');
            await $(`.${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
        }
    } else {
        console.log(`${task} failed`);
    }
}
export default api;
//tổng lượt truy cập với phần trăm nguồn khách hàng Organic search % ==> tỉ lệ truy cập tìm kiếm