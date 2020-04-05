//US,GB,AU,FR,
const masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

var localUrl = new URL(location.href);
var domain = localUrl.searchParams.get('domain');

function lockedModule(boxWidgetName, level) {
    var freeModule = [];
    var VIPModule = ["SampleAdsasHTML","topPublicSher","getAllImageTable","PublicSherTable","getWebsiteAdsIntelDisplay","getTrafficDestinationAds","adwordsMonthlyFullTrend","adTypeOverview","displayDevice"];
    if (level == 'demo') {
        if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {
            //ngoai le 
            
            //ngoai le 
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
        }
    } else if (level == 'free') {
        if (VIPModule.includes(boxWidgetName)) {
            if (boxWidgetName == 'SampleAdsasImage') boxWidgetName = 'SampleAds';
            $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
        }
    }
} 
const api = async (method, domain) => {
    let methodName = method;
    if (method == "displayAdsOverview" || method == "adTypeOverview") {
        method = "displayAdsOverview"
    }
    if (method == "SampleAdsasImage" || method == "getAllImageTable") {
        method = "bannerAds"
    }
    if (method == "SampleAdsasHTML" || method == "getAllHTMLTable") {
        method = "htmlAds"
    }
    if (method == "SampleAdsasText" || method == "getAllTextTable") {
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
    if (method =="PublicSherTable") {
        method ="publishersDetail"
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
                        // case "SampleAdsasText":
                        //     SampleAdsasText(data, method);
                        //     break;
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
                    case "getAllImageTable":
                        getAllImageTable(data, method);
                        break;
                    case "getAllHTMLTable":
                        getAllHTMLTable(data, method)
                        break;
                    case "getAllTextTable":
                        getAllTextTable(data, method)
                        break;
                    case "PublicSherTable":
                        
                        PublicSherTable(data, method)
                        break;

                    default:
                        break;
                }

                lockedModule(methodName, data.userData.member)

                return true;
            })

    } catch (error) {
        //console.log(error);

    }
}
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

const language = {
    searchPlaceholder: 'Nhập từ khóa',
    processing: 'Đang xử lý...',
    loadingRecords: 'Đang tải...',
    emptyTable: 'Không có dữ liệu hiển thị',
    lengthMenu: 'Hiển thị: _MENU_ dòng mỗi trang',
    zeroRecords: 'Không tìm thấy dữ liệu',
    info: 'Hiển thị từ _START_ đến _END_ trong tổng _TOTAL_ dòng',
    infoEmpty: 'Hiển thị từ 0 đến 0 trong tổng 0 dòng',
    infoFiltered: '(lọc từ tổng số _MAX_ dòng)',
    search: 'Tìm kiếm:',
    paginate: {
        previous: 'Quay lại',
        next: 'Tiếp theo'
    }
};
const initDatatable = function (select, tableOptions) {
    const table = $(`#${select}`).DataTable(tableOptions);
    let idTable;
    idTable = table;
    //$(table.table().header()).addClass('text-center');
    //reload click handle
    $(`.${select}`).click(function (event) {
        $(event.target).addClass('fa-spin');
        $(`.${select}-container`).addClass('is-loading').block({
            overlayCSS: {
                backgroundColor: '#ccc',
                opacity: 0.8,
                zIndex: 1,
                cursor: 'wait'
            },
            message: null
        });
        $(`#${select}`).DataTable().ajax.reload(() => {
            $(`#${select}`).removeClass("is-loading");
            $(`#${select} .dataTables_empty`).text("").addClass("empty-state");
        });
    })
    return table;
};
const initDatatableClass = function (select, tableOptions) {
    const table = $(`.${select}`).DataTable(tableOptions);
    let idTable;
    idTable = table;    
    $(`.${select}`).click(function (event) {              
        $(`.${select}-container`).addClass('is-loading').block({
            overlayCSS: {
                backgroundColor: '#ccc',
                opacity: 0.8,
                zIndex: 1,
                cursor: 'wait'
            },
            message: null
        });
        $(`#${select}`).DataTable().ajax.reload(() => {
            $(`.${select}`).removeClass("is-loading");
            $(`.${select} .dataTables_empty`).text("").addClass("empty-state");
        });
    })
    return table;
};

// ------------------------------init function--------------------------

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
const SampleAdsasImage = async (data, method) => {

    if (data.data.bannerAds=="") {        
        $('.sample-image-ads').addClass('empty-state')
    }
    data.data.bannerAds.forEach((val, index) => {
        if (index < 5) {
            $(".sample-image-ads").append(`<div class="box-all">
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
        </div>`)
        }
    })
}
const SampleAdsasHTML = async (data, method) => {
    if (data.data.htmlAds=='') {
        $('.sample-html-ads').addClass('empty-state')
    }
    data.data.htmlAds.forEach((val, index) => {      
        if (index < 5) {
            $(".sample-html-ads").append(`<div class="box-all">
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
        </div>`)
        }
    })

}
const SampleAdsasText = async (data, method) => {
    if (data.data.textAds=='') {
        $('#sample-text-ads').addClass('empty-state')
    }
    data.data.textAds.forEach((val, index) => {
        if (index < 5) {
            $(".sample-text-ads").append(` <div class="box-text-all">
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
        </div>`)
        }
        if (!val.visibleUrl) {
            $('.title-greened span.delete-ic').remove('span')

        }
    })
}

// ---Display by Device----
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
// ----------display chart--------------------
const getDisplayCountryChart = async (data, method) => {

    $('.appendSVG').append(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                                                    <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" id="Path-3" fill="#000000"></path>
                                                </g>
                                            </svg>`)
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
                // top: "5%",
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
        // myChart.setOption(option);
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
       // console.log(`getDisplayCountryChart failed`);
    }
}

// --------------------adtypes overview---------------
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

const topPublicSher = async (data, method) => {   
    var res = data.data.publishersOveview.categories;    
    if (res.length<=0) {
        $('.list-public').addClass('empty-state')
    }
    {
        $('.cate-1').html(res['0'].name)
        $('.count-buss').html(res['0'].percentage + '%')
        $('#hl-buss').css('width', (numeral(res['0'].percentage).format('0,0') + '%'))
    } {
        $('.cate-2').html(res['1'].name)
        $('.count-art').html(res['1'].percentage + '%')
        $('#hl-art').css('width', (numeral(res['1'].percentage).format('0,0') + '%'))
    } {
        $('.cate-3').html(res['2'].name)
        $('.count-internet').html(res['2'].percentage + '%')
        $('#hl-it').css('width', (numeral(res['2'].percentage).format('0,0') + '%'))
    } {
        $('.cate-4').html(res['3'].name)
        $('.count-job').html(res['3'].percentage + '%')
        $('#hl-job').css('width', (numeral(res['3'].percentage).format('0,0') + '%'))
    } {
        $('.cate-5').html(res['4'].name)
        $('.count-people').html(res['4'].percentage + '%')
        $('#hl-pp').css('width', (numeral(res['4'].percentage).format('0,0') + '%'))
    }
    await $(`.similarReloadTask[data-task="topPublicSher"]`).find('i').removeClass('fa-spin');

}

const getDisplayGenderChart = async (data, method) => {
    var res = data.data.publishersOveview.gender;    
    let value_male, value_female;
    value_male = res.male
    value_female = res.female

    let dataChart = [{
            name: 'Male',
            value: value_male
        },
        {
            name: 'Female',
            value: value_female
        }
    ];

    // render chart gender
    if (data.status = "success") {
        let myChart = document.getElementsByClassName('getDisplayGenderChart');

        let option = {
            color: ['#0abb87', '#ffb822'],
            legend: {
                bottom: '20',
                orient: 'horizontal',
                left: '30%',
                // top: "5%",
                // // orient: 'horizontal',
                // left: '60%',
                // data: ['Male', 'Female'],                
                // itemWidth: 20,
                // itemHeight: 14,
                // width: 50,       
                // textStyle: {
                //     fontFamily: 'Arial',
                //     lineHeight: 16,
                //     color:''
                // },
                // formatter: function (name) {
                //     let value = name == 'Male' ? value_male : value_female;
                //     return `${name}\n${value > 1000000 ?+ numeral(value).format('0.0a') : numeral(value).format('0,0') }`;
                // }
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
        //console.log(`getDisplayGenderChart failed`);
    }

}
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
        let myChart = document.getElementsByClassName('getDisplayAgeChart');
        let option = {
            // color:  ["#910BFE", "#1075F1", "#F29016", "#5452CF", "#37A5D3", "#4FD266", "#FFB0E3"],            
            color: ['#646c9a', '#48465b', '#0abb87', '#ffb822', '#fd397a', '#5d78ff'],
            legend: {
                // top: "0%",
                // orient: 'horizontal',
                // left: '60%',
                data: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                bottom: '20',
                orient: 'horizontal',
                left: '10%',
                // itemWidth: 20,
                // itemHeight: 14,
                // width: 50,
                // height:100,
                // textStyle: {
                //     fontFamily: 'Arial',
                //     lineHeight: 16,
                //     color:'#00A0DF'
                // },
                // formatter: function (name) {
                //     let value = name == '18-24' ? value_18 : name=="25-34" ? value_25 : name=="35-44"? value_35 : name=="45-54"? value_45 :name=="55-64"? value_55:value_65;
                //     return `${name}\n${value > 1000000 ? + numeral(value).format('0.0a') : numeral(value).format('0,0') }`;
                // }
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
       // console.log(` getDisplayAgeChart failed`);
    }



}

const getAllImageTable = async (data, method) => {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Augu", "Sep", "Oct", "Nov", "Dec"];   
    initDatatable(
        'getAllImageTable', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingDisplayDetail&domain=${domain}&page=1&method['bannerAds']=true&userToken=${userToken}`,
                dataSrc: function (res) {
                    var res = data.data.bannerAds;
                    if (res.length<=0) {
                        $('.sample-image-ads').addClass('empty-state')
                    }   

                    let columns = [];
                    var stt = 1;
                    $.each(res, function (k, v) {                       
                        let output = {};
                        let first = new Date(v.firstSeen)
                        let firstseen = first.getDay() + '&nbsp;' + monthNames[first.getMonth()] + ',&nbsp' + first.getFullYear()
                        let last = new Date(v.lastSeen)
                        let lastseen = last.getDay() + '&nbsp;' + monthNames[last.getMonth()] + ',&nbsp' + last.getFullYear()
                        let ct = [];
                        v.countries.forEach(res => {                           
                            res = res.toLowerCase();
                            let obj = {
                                values: res
                            }
                            ct.push(obj)
                        })
                        ct.forEach(rsx => {
                            output.stt = stt;
                            output.mediaUrl = v.mediaUrl;
                            output.advertiser = v.advertiser;
                            output.timesSeen = v.timesSeen;
                            output.daysSeen = v.daysSeen
                            output.firstSeen = firstseen;
                            output.lastSeen = lastseen;
                            output.countries = rsx.values;
                            stt += 1;                          
                            columns.push(output)
                        })                       
                    })
                    return columns;
                },
            },
            drawCallback: function (settings) {},
            columns: [{
                    title: "STT",
                    data: 'stt',
                    width: '5%',
                    className: 'align-left'
                },
                {
                    title: "Image Ad",
                    className: 'pr-0',
                    render: (data, type, row) => `
                       <div class="big-cover-image">
                         <div class="image-big-ads">
                            <img src="${row.mediaUrl}"" width="100%" height="auto">  
                         </div> 
                       </div>
                    `,
                    width: '40%'
                },
                {
                    title: "Advertiser",
                    className: 'pr-0',
                    data: data => `<a href="#" class="text-break text-truncate-2">${data.advertiser}<a>`,
                    width: '15%'
                },
                {
                    title: "Times Seen",
                    "data": data => `${data.timesSeen}`,
                    class: 'align-middle',
                    width: '15%'
                },
                {
                    title: "DaysSeen",
                    "data": data => `${(data.daysSeen)}`,
                    class: '',
                    width: '12%'
                },
                {
                    title: "FirstSeen",
                    "data": data => `${(data.firstSeen)}`,
                    class: '',
                    width: '15%'
                },
                {
                    title: "LastSeen",
                    "data": data => `${(data.lastSeen)}`,
                    class: '',
                    width: '15%'
                },
                {
                    title: "Country",
                    "data": data => `<span class="flag flag-${data.countries}"></span>`,
                    class: 'text-right',
                    width: '20%'
                },

            ],
            language,
            ordering: false,
            rowId: 'trId',
            info: false,
            autoWidth: false,
            searching: false,
            sorting: true,
            //   scrollY: '350px',
            scrollCollapse: false,
            // scrollX:true,
            paging: true,
            pageLength: 5,
            processing: false,
            destroy: true,
            initComplete: function (settings, json) {
                $("table.dataTable thead th").css("padding", "10px");
                $("table.dataTable tbody tr td").css("padding", "15px 10px");
                // renderSparkline('PaidPageTable')
            }
        }
    )
    $('#getAllImageTable_wrapper .dataTables_scrollBody').addClass('ps--active-x')
}

const getAllHTMLTable = async (data, method) => {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Augu", "Sep", "Oct", "Nov", "Dec"];
    initDatatable(
        'getAllHTMLTable', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingDisplayDetail&domain=${domain}&page=1&method['htmlAds']=true&userToken=${userToken}`,
                dataSrc: function (res) {
                    var res = data.data.htmlAds;
                    let columns = [];
                    var stt = 1;
                    if (res.length<=0) {
                        $('.sample-html-ads').addClass('empty-state')
                    }   
                    $.each(res, function (k, v) {
                        let output = {};
                        let first = new Date(v.firstSeen)
                        let firstseen = first.getDay() + '&nbsp;' + monthNames[first.getMonth()] + ',&nbsp' + first.getFullYear()
                        let last = new Date(v.lastSeen)
                        let lastseen = last.getDay() + '&nbsp;' + monthNames[last.getMonth()] + ',&nbsp' + last.getFullYear()
                        let ct = [];
                        

                        v.countries.forEach(res => {                           
                            res = res.toLowerCase();
                            let obj = {
                                values: res
                            }
                            ct.push(obj)
                        })
                        ct.forEach(rsx => {
                            output.stt = stt;
                            output.id = v.id;
                            output.documentUrl = v.documentUrl;
                            output.advertiser = v.advertiser;
                            output.timesSeen = v.timesSeen;
                            output.daysSeen = v.daysSeen
                            output.firstSeen = firstseen;
                            output.lastSeen = lastseen;
                            output.countries = rsx.values;
                            stt += 1;
                            
                            columns.push(output)
                        })                      
                    })
                    return columns;
                },
            },
            drawCallback: function (settings) {},
            columns: [{
                    title: "STT",
                    data: 'stt',
                    width: '5%',
                    className: 'align-left'
                },
                {
                    title: "HTML Ad",
                    className: 'pr-0',
                    render: (data, type, row) => `
                    <div class="image-media image-media-table">                   
                        <div class="image-sample image-sample-table">
                        <iframe title="${row.id}" src="${row.documentUrl}?id=${row.id}" scrolling="no" loading="lazy" class="-HtmlItemStyles-item_html-B4E3Yn- hvtb" style="min-width: 800px;min-height: 400px;transform: scale(0.32);transform-origin: center center;border:none"></iframe>   
                        </div>
                    
                </div>
                    `,
                    width: '40%'
                },
                {
                    title: "Advertiser",
                    className: 'pr-0',
                    data: data => `<a href="#" class="text-break text-truncate-2">${data.advertiser}<a>`,
                    width: '15%'
                },
                {
                    title: "Times Seen",
                    "data": data => `${data.timesSeen}`,
                    class: 'align-middle',
                    width: '15%'
                },
                {
                    title: "DaysSeen",
                    "data": data => `${(data.daysSeen)}`,
                    class: '',
                    width: '12%'
                },
                {
                    title: "FirstSeen",
                    "data": data => `${(data.firstSeen)}`,
                    class: '',
                    width: '15%'
                },
                {
                    title: "LastSeen",
                    "data": data => `${(data.lastSeen)}`,
                    class: '',
                    width: '15%'
                },
                {
                    title: "Country",
                    "data": data => `<span class="flag flag-${data.countries}"></span>`,
                    class: 'text-right',
                    width: '20%'
                },

            ],
            language,
            ordering: false,
            rowId: 'trId',
            info: false,
            autoWidth: false,
            searching: false,
            sorting: true,
            //   scrollY: '350px',
            scrollCollapse: false,
            // scrollX: true,            
            paging: true,
            pageLength: 5,
            processing: false,
            destroy: true,
            initComplete: function (settings, json) {
                $("table.dataTable thead th").css("padding", "10px");
                $("table.dataTable tbody tr td").css("padding", "15px 10px");
                // renderSparkline('PaidPageTable')
            }
        }
    )

    
}
const getAllTextTable = async (data, method) => {
  //  console.log(data);
    
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Augu", "Sep", "Oct", "Nov", "Dec"];
    initDatatable(
        'getAllTextTable', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingDisplayDetail&domain=${domain}&page=1&method['textAds']=true&userToken=${userToken}`,
                dataSrc: function (res) {
                    var res = data.data.textAds;
                    let columns = [];
                    var stt = 1;         
                    if (res.length<=0) {
                        $('.sample-text-ads').addClass('empty-state')
                    }                          
                    $.each(res, function (k, v) {                        
                        let output = {};
                        let first = new Date(v.firstSeen)
                        let firstseen = first.getDay() + '&nbsp;' + monthNames[first.getMonth()] + ',&nbsp' + first.getFullYear()
                        let last = new Date(v.lastSeen)
                        let lastseen = last.getDay() + '&nbsp;' + monthNames[last.getMonth()] + ',&nbsp' + last.getFullYear()
                        let ct = [];
                        v.countries.forEach(data => {
                            data = data.toLowerCase();
                            let obj = {
                                values: data
                            }
                            ct.push(obj)
                        })
                        ct.forEach(rsx => {
                            output.stt = stt;
                            output.title = v.title;
                            output.text = v.text;
                            output.width = v.width;
                            output.height = v.height;
                            output.targetUrl = v.targetUrl;
                            output.advertiser = v.advertiser;
                            output.timesSeen = v.timesSeen;
                            output.daysSeen = v.daysSeen
                            output.firstSeen = firstseen;
                            output.lastSeen = lastseen;
                            output.countries = rsx.values;
                            stt += 1;
                            
                            columns.push(output)
                        })
                       
                    })

                    return columns;
                },
            },
            drawCallback: function (settings) {},
            columns: [{
                    title: "STT",
                    data: 'stt',
                    width: '5%',
                    className: 'align-left'
                },
                {
                    title: "Text Ads",
                    className: 'pr-0',
                    data:data => {return `
                         <div class="box-text-table">
                            <div class="title-text-table  text-decoration-none font-gg">     
                                ${data.title}                                     
                            </div>
                            <div class="content-text-table pt-5 font-12">  
                                <span class="content-small-text-table">  
                                ${data.text}                           
                                </span>
                               <span> <a href="${data.targetUrl}" target="_blank" class="text-break text-truncate-2"><i class="fal fa-external-link"></i></a></span>                                                    
                                <div class="text-wh-table font-12"> 
                                  ${data.width}<small>x</small>${data.height}                                                                       
                                </div>
                                <div class="pb-1"></div>  
                            </div>
                           
                        </div>
                    `},
                    width: '40%'
                },
                {
                    title: "Advertiser",
                    className: 'pr-0',
                    data: data => `<a href="#" class="text-break text-truncate-2">${data.advertiser}<a>`,
                    width: '15%'
                },
                {
                    title: "Times Seen",
                    "data": data => `${data.timesSeen}`,
                    class: 'align-middle',
                    width: '15%'
                },
                {
                    title: "DaysSeen",
                    "data": data => `${(data.daysSeen)}`,
                    class: '',
                    width: '12%'
                },
                {
                    title: "FirstSeen",
                    "data": data => `${(data.firstSeen)}`,
                    class: '',
                    width: '15%'
                },
                {
                    title: "LastSeen",
                    "data": data => `${(data.lastSeen)}`,
                    class: '',
                    width: '15%'
                },
                {
                    title: "Country",
                    "data": data => `<span class="flag flag-${data.countries}"></span>`,
                    class: 'text-right',
                    width: '20%'
                },

            ],
            language,
            ordering: false,
            rowId: 'trId',
            info: false,
            autoWidth: false,
            searching: false,
            sorting: true,
            //   scrollY: '350px',
            scrollCollapse: false,
            paging: true,
            pageLength: 5,
            processing: false,
            destroy: true,
            initComplete: function (settings, json) {
                $("table.dataTable thead th").css("padding", "10px");
                $("table.dataTable tbody tr td").css("padding", "15px 10px");
                // renderSparkline('PaidPageTable')
            }
        }
    )
}

const PublicSherTable = async(data,method) => {
    $('.widget-PublicSherTable .widgetHeader').append(`<div class="ml-auto d-flex no-block align-items-center pr-3">
    <a class="similarReloadTask text-muted" data-task="PublicSherTable" href="javascript:;"><i class="fal fa-sync"></i></a>
</div>`)
    
    initDatatableClass(
        'PublicSherTable', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getAdvertisingDisplayDetail&domain=${domain}&page=1&method['publishersDetail']=true&userToken=${userToken}`,
                dataSrc: function(res) {                  
                    
                    if (data.data.publishersDetail == null) {
                        $('.parent-PublicSherTable #DataTables_Table_2_wrapper').addClass('empty-state');
                        $('.parent-PublicSherTable #DataTables_Table_2_wrapper').removeClass('is-loading');
                        $('.parent-PublicSherTable #DataTables_Table_2_wrapper tbody tr td').html('')
                        return;
                    }                                            
                                                    
                    var res = data.data.publishersDetail.data;
                    let columns = [];
                    var stt = 1;
                    $('.parent-PublicSherTable #DataTables_Table_2_wrapper .dt-buttons').addClass('resize-dl')
                    $.each(res, function(k, v) {                       
                        let output = {};
                        output.stt = stt;
                        output.domain = v.domain;
                        output.title = v.title;
                        output.description = v.description;
                        output.adsCount = v.adsCount;
                        output.mediaAdsCount = v.mediaAdsCount;
                        output.htmlAdsCount = v.htmlAdsCount;
                        output.textAdsCount = v.textAdsCount;                       
                        output.timesSeen = v.timesSeen;    
                        output.media = numeral(v.mediaAdsCount*100/(v.mediaAdsCount+v.htmlAdsCount+v.textAdsCount)).format('0,0')    
                        output.html = numeral(v.htmlAdsCount*100/(v.mediaAdsCount+v.htmlAdsCount+v.textAdsCount)).format('0,0')    
                        output.text = numeral(v.textAdsCount*100/(v.mediaAdsCount+v.htmlAdsCount+v.textAdsCount)).format('0,0')    
                                           
                        stt += 1;                                               
                        columns.push(output)
                    })                   
                    return columns;
                },
            },
            drawCallback: function(settings) { },
            columns: [{
                    title: "STT",
                    data: 'stt',
                    width:'5%',
                    className: 'align-middle ml-5 pl-3 font-12'
                },
                {
                    title: "Title & URL",
                    className: 'parent-hover pr-0 text-left align-middle font-12',                   
                    render: (data, type, row) => `<span class="font-14">${row.title}</span><a href=" http://${row.domain}" target="_blank" class="text-break text-truncate-2">${row.domain} <i class="fal fa-external-link"></i></a>`,
                    width: '30%'
                },                
                {
                    title: "Content",
                    className: 'parent-hover pr-0 align-middle text-left font-12 ',
                    "data": data => `<span class=""font-14>${data.description}</span>`,
                    width: '30%'
                },
                {
                    title: "Ads",                    
                    "data": data => `<div class="badge font-10 ml-2 ${data.adsCount <= 100 ? data.adsCount <= 10 ? 'bg-warning' : 'bg-danger' : 'bg-success'}">${data.adsCount ? numeral(data.adsCount).format('0,0') : 0}</a>`,
                    width:'10%',
                    className: 'text-left align-middle font-12 '
                },
                {
                    title: "Image-HTML-Text",                   
                    render: (data, type, row) => ` 
                    <span class= "${row.media > 0 ? 'text-info':'' }"> ${row.media > 0 ? row.media+'%' :row.media}</span ><span class="pl-1">-</span>
                    <span class= "${row.html > 0 ? 'text-info':'' }"> ${row.html > 0 ? row.html+'%' : row.html}</span><span class="pl-1">-</span>
                    <span class="${row.text > 0 ? 'text-info':'' }"> ${row.text > 0 ? row.text+'%' :row.text} </span>
                   
                    `,
                    class: 'align-middle text-left font-12 ml-1',
                    width: '14%'
                },
                {
                    title: "TimesSeen ",
                    "data": data =>  `<div class="round round-sm font-10 ${data.timesSeen <= 100 ? data.timesSeen <= 10 ? 'bg-success' : 'bg-danger' : 'bg-warning'}">${data.timesSeen ? numeral(data.timesSeen).format('0,0') : 0}</a>`,
                    class: 'align-middle font-12',
                    width: '9%'
                },

            ],
            buttons: [{
                extend: 'excelHtml5',
                text: '<i class="fad fa-arrow-down mr-1"></i> Download',
                filename: 'fff_com_vn_TatCaNoiDungQuangCao'
            }],
            dom: 'Bfrtip',
            ordering: false,
            rowId: 'trId',
            info: false,
            autoWidth: false,
            searching: false,
            sorting: true,
            //   scrollY: '350px',
            scrollCollapse: false,
            paging: true,
            pageLength: 5,
            processing: false,
            destroy: true,
            pageLength: 10,
            initComplete: function(settings, json) {
                $("table.dataTable thead th").css("padding", "10px");
                $("table.dataTable tbody tr td").css("padding", "15px 10px");
                // renderSparkline('PaidPageTable')
            }
        }
    )

}

$(document).ready(function () {
    let domain = url.searchParams.get("domain");    
    $(".similarReloadTask").click(function() {
        if ($(this).find('i').hasClass('fa-spin')) {$(this).find('i').removeClass('fa-spin'); return; }
        let task = $(this).data("task");       
        $(this).find('i').addClass('fa-spin');
        api(task, domain);
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