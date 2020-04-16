//US,GB,AU,FR,
const masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

function appendHTML(arr) {
    for (const key in arr) {
        let html = `
        <div class="col-12 mb-0">
                    <div class="row-public-footer d-flex">
                        <div class="row-percent-highlight" style="width:${numeral(arr[key].percentage).format('0,0') + '%'}"></div>
                        <div class="left-public d-flex align-items-center h-100">
                            <div class="category-pb cate-1 font-12 line-height-18">${arr[key].name}</div>
                        </div>
                        <div class="right-public">
                            <div class="percent count-buss text-info">${arr[key].percentage + '%'}</div>
                        </div>
                    </div>
                </div>
        `
        $('#topPublishersCategories').append(html)
    }
}

function lockedModule(boxWidgetName, level) {
    var freeModule = [];
    var VIPModule = ["SampleAdsasHTML", "topPublicSher", "adTypeOverview", "displayDevice"];
    if (level == 'demo') {
        if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {
            //ngoai le 

            //ngoai le 
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
        }
    } else if (level == 'free') {
        if (VIPModule.includes(boxWidgetName)) {
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
            if (boxWidgetName == 'SampleAdsasImage' && boxWidgetName == 'SampleAds') {
                $(".parent-" + boxWidgetName).addClass("locked");
                $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
            }
        }
    }
}
const api = async (method, domain) => {
    let methodName = method;
    if (method == "displayAdsOverview" || method == "adTypeOverview") {
        method = "displayAdsOverview"
    }
    if (method == "SampleAdsasImage") {
        method = "bannerAds"
    }
    if (method == "SampleAdsasHTML") {
        method = "htmlAds"
    }
    if (method == "SampleAdsasText") {
        method = "textAds"
    }
    if (method == "displayDevice") {
        method = "adsCountByDevice"
    }
    if (method == "getDisplayCountryChart") {
        method = "adsCountByCountry"
    }
    if (method == "topPublicSher" || method == "getDisplayGenderChart" || method == "getDisplayAgeChart") {
        method = "publishersOveview"
    }

    try {
        return await $.ajax({
            url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingDisplayDetail&domain=${domain}&page=1&method[${method}]=true&userToken=${userToken}`,
            type: "GET"
        })
            .then(data => {
                //locked:bảng cũ locker:bảng mới
                switch (methodName) {
                    case "displayAdsOverview":
                        displayAdsOverview(data, method);
                        break;
                    case "SampleAdsasImage":
                        SampleAdsasImage(data, method);
                        break;
                    case "SampleAdsasHTML":
                        SampleAdsasHTML(data, method);
                        break;
                    case "SampleAdsasText":
                        SampleAdsasText(data, method);
                        break;
                    case "displayDevice":
                        displayDevice(data, method);
                        break;
                    case "getDisplayCountryChart":
                        getDisplayCountryChart(data, method);
                        break;
                    case "adTypeOverview":
                        adTypeOverview(data, method);
                        break;
                    case "topPublicSher":
                        topPublicSher(data, method);
                        break;
                    case "getDisplayGenderChart":
                        getDisplayGenderChart(data, method);
                        break;
                    case "getDisplayAgeChart":
                        getDisplayAgeChart(data, method);
                        break;
                    default:
                        break;
                }

                lockedModule(methodName, data.userData.member)

                return true;
            })

    } catch (error) {
        console.log(error);

    }
}
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

// header DisPlay
const displayAdsOverview = async (data, method) => {
    let first = new Date(data.data.displayAdsOverview.firstSeen);
    let last = new Date(data.data.displayAdsOverview.lastSeen);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Augu", "Sep", "Oct", "Nov", "Dec"];
    $('.displayAdsOverview').append(`
    <div class="col-12 col-lg-4">
        <div class="bg-white p-3 align-items-center text-center rounded">    
            <div class="pt-5 pb-5">
                <div class="fontsize-14 ">Quảng Cáo</div>
                <div class="money-appr text-info fontsize-32 kwhard ads"></div>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-4 ">
        <div class="bg-white p-3 align-items-center text-center rounded">
    
            <div class="pt-5 pb-5">
                <div class="fontsize-14 ">Publicshers</div>
                <div class="money-appr similarCountryRank text-success publisher fontsize-32"></div>
            </div>
        </div>
    
    </div>
    <div class="col-12 col-lg-4 ">
        <div class="text-center bg-white p-3 align-items-center rounded">
            <div class="pt-5 pb-5">
                <div class="fontsize-14 ">Xuất Hiện</div>
                <div class="money-appr similarGlobalRank text-dark timeseen fontsize-32"></div>
            </div>
        </div>
    </div>
    `
    )
    $('.ads').html(kFormatter(data.data.displayAdsOverview.adsOverall))
    $('.publisher').html(kFormatter(data.data.displayAdsOverview.domainOverall))
    $('.timeseen').html(kFormatter(data.data.displayAdsOverview.timesSeen));
    $('.firstseen').html(first.getDay() + '&nbsp;' + monthNames[first.getMonth()] + ',&nbsp' + first.getFullYear());
    $('.lastseen').html(last.getDay() == 0 ? 31 + '&nbsp;' + monthNames[last.getMonth()] + ',&nbsp' + last.getFullYear() : last.getDay() + '&nbsp;' + monthNames[last.getMonth()] + ',&nbsp' + last.getFullYear());
}

// Mẫu Quảng Cáo
const SampleAdsasImage = async (data, method) => {

    if (data.data.bannerAds == "") {
        $('.sample-image-ads').addClass('empty-state')
        $('#btn-view-image').addClass('d-none')
    }
    data.data.bannerAds.forEach((val, index) => {
        if (index < 5) {
            let html = `<div class="box-all">
            <div class="box-img">
                <div class="image-media">
                    <div class="image-sample">
                         <img src="https://imgcdn.trazk.com/f.php?f=${btoa(val.mediaUrl)}">
                    </div>
                </div>
                <div class="text-sample pt-2">
                    <span class="dayseen">Ghi nhận:<span class="seen-img pl-1 font-11">${val.daysSeen}</span>&nbsp;ngày </span>
                    <span class="image-w-h"> <small class="image-width">${val.width}</small><small class="vs"> x </small> <small class="image-height">${val.height}</small></span>
                </div>
            </div>
        </div>`
            $(".sample-image-ads").append(html)
        }
    })
}

const SampleAdsasHTML = async (data, method) => {
    if (data.data.htmlAds == '') {
        $('.sample-html-ads').addClass('empty-state')
        $('#btn-view-html').addClass('d-none')
    }
    data.data.htmlAds.forEach((val, index) => {
        if (index < 5) {
            let html = `<div class="box-all">
            <div class="box-img">
                <div class="image-media">                   
                    <div class="image-sample">
                     <iframe title="${val.id}" src="${val.documentUrl}?id=${val.id}" scrolling="no" loading="lazy" class="-HtmlItemStyles-item_html-B4E3Yn-" style="min-width: 760px;min-height: 476px;transform: scale(0.237047);transform-origin: center center;border:none"></iframe>   
                    </div>
                    
                </div>
                <div class="text-sample pt-2">
                    <span class="dayseen">Ghi nhận:<span class="seen-img pl-1 font-11">${val.daysSeen}&nbsp;ngày</span> </span>
                    <span class="image-w-h"> <small class="image-width">${val.width}</small><small class="vs"> x </small> <small class="image-height">${val.height}</small></span>
                </div>
            </div>
        </div>`
            $(".sample-html-ads").append(html)
        }
    })

}

const SampleAdsasText = async (data, method) => {
    if (data.data.textAds == '') {
        $('#sample-text-ads').addClass('empty-state')
        $('#btn-view-text').addClass('d-none')
    }
    data.data.textAds.forEach((val, index) => {
        if (index < 5) {
            let html = ` <div class="box-text-all">
            <div class="box-text">
                <div class="body-text">
                    <a href="" class="title-blued">${val.title}</a>
                    <div class="title-greened mt-2">
                        <a href="" class="font-12 smallgreend">${val.visibleUrl}</a>
                        <span class="child-hover delete-ic fal fa-external-link"></span>
                    </div>
                    <a href="#" class="text-contended pt-5">${val.text}</a>
                </div>
                <div class="footer-text mt-2">
                    <a href="#" class="content-small font-12">${val.advertiser}</a>          
                    <p class="tseen">Ghi nhận: <small class="font-11">${val.daysSeen}</small>&nbsp;ngày</p>
                </div>
            </div>
        </div>`
            $(".sample-text-ads").append(html)
        }
        if (!val.visibleUrl) {
            $('.title-greened span.delete-ic').remove('span')

        }
    })
}
//End Mẫu Quảng Cáo

// ----------Quảng Cáo Theo Quốc Gia--------------------
const getDisplayCountryChart = async (data, method) => {
    var res = data.data.adsCountByCountry;
    if (data.status == "success") {
        let {
            adsCountByCountry: datacountry
        } = data.data;
        let value_us, value_gb, value_au, value_fr, value_other = 0;
        for (let i = 0; i < res.length; i++) {
            if (res[i].k == 'US') {
                value_us = res[i].v;
            } else if (res[i].k == 'GB') {
                value_gb = res[i].v;
            } else if (res[i].k == 'AU') {
                value_au = res[i].v;
            } else if (res[i].k == 'FR') {
                value_fr = res[i].v;
            } else {
                value_other += res[i].v;
            }
        }
        if (value_other != 0) {
            let dataChart = [{
                name: 'United States',
                value: value_us
            },
            {
                name: 'United Kingdom',
                value: value_gb
            },
            {
                name: 'Australia',
                value: value_au
            },
            {
                name: 'France',
                value: value_fr
            },
            {
                name: 'Other',
                value: value_other
            },

            ];

            // render chart        
            let myChart = document.getElementsByClassName('getDisplayCountryChart');

            let option = {
                color: masterColor,
                legend: {
                    bottom: '20',
                    orient: 'horizontal',
                    left: '10%',
                    data: ['United States', 'United Kingdom', 'Australia', 'France', 'Other'],

                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["40%", "60%"],
                    center: ["50%", "35%"],
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

            new ResizeSensor($(`.getDisplayCountryChart`), function () {
                chart.resize();
                setTimeout(function () {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                chart.on('mouseover', function (params) {
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

                chart.on('mouseout', function (params) {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`.getDisplayCountryChart`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="getDisplayCountryChart"]`).find('i').removeClass('fa-spin');
            // $(`#totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
        } else {
            $('.getDisplayCountryChart').addClass('empty-state').removeClass('is-loading')
        }


    } else {
        $('.getDisplayCountryChart').addClass('empty-state').removeClass('is-loading')
    }
}

// ----------Quảng Cáo Theo Giới Tính--------------------
const getDisplayGenderChart = async (data, method) => {
    var res = data.data.publishersOveview.gender;
    let value_male, value_female;
    value_male = res.male
    value_female = res.female

    // render chart gender
    if (data.status = "success") {
        if (value_male != 0 && value_female != 0 && res.length != 0) {


            let dataChart = [{
                name: 'Male',
                value: value_male
            },
            {
                name: 'Female',
                value: value_female
            }
            ];
            let myChart = document.getElementsByClassName('getDisplayGenderChart');

            let option = {
                color: ['#0abb87', '#ffb822'],
                legend: {
                    bottom: '20',
                    orient: 'horizontal',
                    left: '30%',
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["40%", "60%"],
                    center: ["50%", "35%"],
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
            }
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


            new ResizeSensor($(`.getDisplayGenderChart`), function () {
                chart.resize();
                setTimeout(function () {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                chart.on('mouseover', function (params) {
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

                chart.on('mouseout', function (params) {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`.getDisplayGenderChart`).removeClass('is-loading');

        } else {
            $('.getDisplayGenderChart').addClass('empty-state').removeClass('is-loading')
        }
    } else {
        $('.getDisplayGenderChart').addClass('empty-state').removeClass('is-loading')
    }

}
// ----------Quảng Cáo Theo Độ Tuổi--------------------
const getDisplayAgeChart = async (data, method) => {
    var res = data.data.publishersOveview.age;
    let value_18, value_25, value_35, value_45, value_55, value_65;
    value_18 = res["18-24"];
    value_25 = res["25-34"];
    value_35 = res["35-44"];
    value_45 = res["45-54"];
    value_55 = res["55-64"];
    value_65 = res["65+"];
    let dataChart = [{
        name: '18-24',
        value: value_18
    },
    {
        name: '25-34',
        value: value_25
    },
    {
        name: '35-44',
        value: value_35
    },
    {
        name: '45-54',
        value: value_45
    },
    {
        name: '55-64',
        value: value_55
    },
    {
        name: '65+',
        value: value_65
    },

    ];

    if (data.status == "success") {
        // render chart
        if (value_18 != 0 && value_25 != 0 && value_35 != 0 && value_45 != 0 && value_55 != 0 && value_65 != 0 && res.length != 0) {
            let myChart = document.getElementsByClassName('getDisplayAgeChart');
            let option = {
                color: ['#646c9a', '#48465b', '#0abb87', '#ffb822', '#fd397a', '#5d78ff'],
                legend: {
                    data: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                    bottom: '20',
                    orient: 'horizontal',
                    left: '10%',

                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["40%", "60%"],
                    center: ["50%", "35%"],
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


            new ResizeSensor($(`.getDisplayAgeChart`), function () {
                chart.resize();
                setTimeout(function () {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

            setTimeout(function () {
                chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });

                chart.on('mouseover', function (params) {
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

                chart.on('mouseout', function (params) {
                    chart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });
            }, 1000);

            await $(`.getDisplayAgeChart`).removeClass('is-loading');
            // await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            // $(`#totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
        } else {
            $('.getDisplayAgeChart').addClass('empty-state').removeClass('is-loading')
        }

    } else {
        $('.getDisplayAgeChart').addClass('empty-state')
    }



}

// ----------------Top Publisher's Categories------------
const topPublicSher = async (data, method) => {
    var res = data.data.publishersOveview.categories;
    if (res.length == 0) {
        $('.list-public').addClass('empty-state')
    } else {
        appendHTML(res)
    }
    await $(`.similarReloadTask[data-task="topPublicSher"]`).find('i').removeClass('fa-spin');

}

// --------------------Loại Quảng Cáo---------------
const adTypeOverview = async (data, method) => {
    var xyz = data.data.displayAdsOverview;
    var total = xyz.mediaAdsOverall + xyz.htmlAdsOverall + xyz.textAdsOverall
    $('#count-img-type').html(xyz.mediaAdsOverall)
    $('#count-html-type').html(xyz.htmlAdsOverall)
    $('#count-text-type').html(xyz.textAdsOverall)
    $('.count-percent-blue').html(numeral(xyz.mediaAdsOverall * 100 / total).format('0,0') + '%')
    $('.count-percent-orange').html(numeral(xyz.htmlAdsOverall * 100 / total).format('0,0') + '%')
    $('.count-percent-green').html(numeral(xyz.textAdsOverall * 100 / total).format('0,0') + '%')
    $('#fill-blue').css("height", numeral(xyz.mediaAdsOverall * 100 / total).format('0,0') + '%')
    $('#fill-orange').css("height", numeral(xyz.htmlAdsOverall * 100 / total).format('0,0') + '%')
    $('#fill-green').css("height", numeral(xyz.textAdsOverall * 100 / total).format('0,0') + '%')
    await $(`.similarReloadTask[data-task="adTypeOverview"]`).find('i').removeClass('fa-spin');
}

// ---Quảng Cáo Theo Thiết Bị----
const displayDevice = async (data, method) => {
    var res = data.data.adsCountByDevice;
    var temp = 0;
    for (let xy of res) {
        temp += xy.v;
    }
    res.forEach(val => {
        if (val.k == "desktop") {
            $('.dt-score').html(val.v);
            $('.dt-percent').html(numeral(val.v * 100 / temp).format('0,0') + '%')
            $('.slider-fill-dt').css('width', (numeral(val.v * 100 / temp).format('0,0') + '%'))
        } else if (val.k == "tabletApple") {
            $('.tb-score').html(val.v)
            $('.tb-percent').html(numeral(val.v * 100 / temp).format('0,0') + '%')
            $('.slider-fill-tb').css('width', (numeral(val.v * 100 / temp).format('0,0') + '%'))
        } else if (val.k == "tabletAndroid") {
            $('.ar-score').html(val.v)
            $('.ar-percent').html(numeral(val.v * 100 / temp).format('0,0') + '%')
            $('.slider-fill-ar').css('width', (numeral(val.v * 100 / temp).format('0,0') + '%'))
        } else if (val.k == "smartphoneApple") {
            $('.ap-score').html(val.v)
            $('.ap-percent').html(numeral(val.v * 100 / temp).format('0,0') + '%')
            $('.slider-fill-ap').css('width', (numeral(val.v * 100 / temp).format('0,0') + '%'))
        } else if (val.k == "smartphoneAndroid") {
            $('.mb-score').html(val.v)
            $('.mb-percent').html(numeral(val.v * 100 / temp).format('0,0') + '%')
            $('.slider-fill-mb').css('width', (numeral(val.v * 100 / temp).format('0,0') + '%'))
        }
    })
    await $(`.similarReloadTask[data-task="displayDevice"]`).find('i').removeClass('fa-spin');

}

$(document).ready(function () {
    let domain = url.searchParams.get("domain");
    $('body').on('click', '.similarReloadTask', async function () {
        let task = $(this).data("task");

        $(this).find('i').addClass('fa-spin');
        if (task == "SampleAds") {
            $('.sample-image-ads').html('')
            $('.sample-html-ads').html('')
            $('.sample-text-ads').html('')
            $('.sample-image-ads').html('')
            await api("SampleAdsasImage", domain).then((res) => $(this).find('i').removeClass('fa-spin'))
            await api("SampleAdsasHTML", domain).then((res) => $(this).find('i').removeClass('fa-spin'))
            await api("SampleAdsasText", domain).then((res) => $(this).find('i').removeClass('fa-spin'))
        } else {
            await api(task, domain).then((res) => $(this).find('i').removeClass('fa-spin'))
        }


    })

    $('#Tabsample a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        // alert(target);
        if (target == "#sample_html") {
            $('#btn-view-html').removeClass('d-none');
        }
        if (target == "#sample_text") {
            $('#btn-view-text').removeClass('d-none');
        }
    });


    $('#img-tab').click(function () {
        $('#btn-view-image').show()
        $("#btn-view-text").hide()
        $("#btn-view-html").hide()
    })
    $('#html-tab').click(function () {
        $('#btn-view-image').hide()
        $("#btn-view-text").hide()
        $("#btn-view-html").show()
    })
    $('#text-tab').click(function () {
        $('#btn-view-image').hide()
        $("#btn-view-text").show()
        $("#btn-view-html").hide()
    })

})
export default api;