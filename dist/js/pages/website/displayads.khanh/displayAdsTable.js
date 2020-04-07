const masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

function lockedModule(boxWidgetName, level) {
    var freeModule = [];
    var VIPModule = ["getWebsiteAdsVisitsOverview","getTrafficDestinationAds","getTrafficDisplayAdvertisingAds","getWebsiteAdsIntelDisplay","getScrapedSearchAds"];
    if (level == 'demo') {
        if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {            
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

const api = async (task, domain,reload=0) => {
    domain;
    try {
        return await $.ajax({
                url: `//localapi.trazk.com/webdata/v3.1.php?task=${task}&domain=${domain}&reload=${reload}&userToken=${userToken}`,
                type: "GET"
            })
            .then(data => {              
                    switch (task) {                      
                        case "getDesktopVsMobileVisits":
                            getDesktopVsMobileVisits(task, data);
                            break;
                     
                        case "getTrafficDisplayAdvertisingAds":                           
                            getTrafficDisplayAdvertisingAds(task, data);
                            break;                                                                                                                              
                        case "getTrafficSourcesSearchDetails":
                            getTrafficSourcesSearchDetails(task, data);
                            break;                        
                        case "getTrafficDestinationAds":                           
                            getTrafficDestinationAds(task, data);
                            break;                        
                        case "getWebsiteAdsVisitsOverview":                          
                            getWebsiteAdsVisitsOverview(task, data, domain);
                            break;                       
                        default:
                            break;
                    }
                    lockedModule(task, data.userData.member)
                    return;                
            });
    } catch (error) {
        console.error(error);
    }
};

//done
const getWebsiteAdsVisitsOverview = async (task, data, domain) => {    
    let html = `<div class="bg-white shadow-sm rounded h-100">
    <div class="row border-bottom m-0 py-2">
        <div class="col-auto d-flex no-block align-items-center mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect id="bound" x="0" y="0" width="24" height="24" />
                    <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" id="Path-92" fill="#000000" fill-rule="nonzero" />
                </g>
            </svg>
        </div>
        <div class="col-auto pl-0">
            <div class="text-capitalize font-weight-bold">Truy cập quảng cáo hiển thị 
            </div>
            <div class="text-muted similarDates font-10">03/2019 - 02/2020</div>
        </div>
        <div class="ml-auto d-flex no-block align-items-center pr-3">
            <a class="similarReloadTask text-muted" data-task="getWebsiteAdsVisitsOverview"><i class="fal fa-sync"></i></a>
        </div>
    </div>
    <div id="Parent-getWebsiteAdsVisitsOverview">
        <div class="row rounded m-0 p-b-10 justify-content-center py-5" style="height: 270px">
            <div class="col-auto py-5 is-loading font-number h1 text-center parent-getWebsiteAdsVisitsOverview" id="getWebsiteAdsVisitsOverview">
            </div>
        </div>
    </div>
   </div>`

 $('.getWebsiteAdsVisitsOverview').append(html)
 

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data &&
            data.data.data.Data.Data[domain].AdsTotal > 0) {
            let WebsiteAdsVisitsOverview = data.data.data.Data.Data[domain];

            let AdsTotal = WebsiteAdsVisitsOverview.AdsTotal;

            let VolumeTotal = WebsiteAdsVisitsOverview.VolumeTotal;

            $("#getWebsiteAdsVisitsOverview").removeClass("is-loading");
            $("#getWebsiteAdsVisitsOverview").html(`${numeral(AdsTotal).format("0,0")}<br><span class="h4 font-gg text-muted">${numeral(VolumeTotal).format("0.00%")} của tổng lượng truy cập bằng máy tính</span>`);

            await $(`#getWebsiteAdsVisitsOverview`).removeClass('is-loading');
            $(`#getWebsiteAdsVisitsOverview`).parent().removeClass('empty-state');
        } else {
            $(`#getWebsiteAdsVisitsOverview`).removeClass('is-loading');
              $('#Parent-getWebsiteAdsVisitsOverview').addClass('empty-state')
              $('#Parent-getWebsiteAdsVisitsOverview').css('min-height','268px')
        }
    } else {
        console.log(`${task} failed`);
    }
}
const getDesktopVsMobileVisits = async (task, data) => {
    if (data.status == "success") {
        let {
            data: visits
        } = data.data;

        if (visits == null || visits.percentDesktop == 0 && visits.percentMobile == 0 && visits.totalDesktop == 0 && visits.totalMobile == 0 && visits.totalTraffic == 0) {
            await $(`#${task}, #totalTraffic`).removeClass('is-loading').addClass("empty-state");
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            const {
                percentDesktop,
                percentMobile,
                totalDesktop,
                totalMobile,
                totalTraffic
            } = visits;

            let dataChart = [{
                    name: 'Máy tính',
                    value: percentDesktop
                },
                {
                    name: 'Điện thoại',
                    value: percentMobile
                }
            ];

            // render chart

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                color: ['#a29bfe', '#00cec9'],
                legend: {
                    top: "25%",
                    left: '60%',
                    data: ['Máy tính', 'Điện thoại'],
                    itemWidth: 20,
                    itemHeight: 14,
                    width: 10,
                    textStyle: {
                        fontFamily: 'Arial',
                        lineHeight: 16
                    },
                    formatter: function (name) {
                        let value = name == 'Máy tính' ? totalDesktop : totalMobile;
                        return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                    }
                },
                series: [{
                    type: 'pie',
                    legendHoverLink: false,
                    minAngle: 20,
                    radius: ["50%", "80%"],
                    center: ["30%", "50%"],
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
            myChart.setOption(option);


            new ResizeSensor($(`#${task}`), function () {
                myChart.resize();
                setTimeout(function () {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);
            });

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

            await $(`#${task}, #totalTraffic`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            $(`#totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
        }
    } else {
        console.log(`${task} failed`);
    }
};
const getTrafficDisplayAdvertisingAds = async (task, data) => {
    
    if (data.status == "success") {
        let {
            data: traffic
        } = data.data;

        let dataChart = [];
        if (traffic == null) {
            await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            let others = 0;
            $.each(traffic, (index, visit) => {
                others += visit.Share;
                let item = {
                    value: visit.Share,
                    name: visit.Name == "Google Display Network" ? "GDN" : visit.Name
                };
                dataChart.push(item);
            });

            if (others < 1) {
                let itemOther = {
                    value: (1 - others),
                    name: 'Khác',
                    itemStyle: {
                        color: '#95a5a6'
                    }
                };
                dataChart.push(itemOther);
            }

            // render chart            

            let myChart = document.getElementsByClassName('getTrafficDisplayAdvertisingAds')

            let option = {
                color: masterColor,
                legend: {
                    bottom:'5',
                    orient: 'horizontal',
                    left: '5%',
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
    
    

            new ResizeSensor($(`.${task}`), function () {
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
        }


        await $(`.${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }
};
const getTrafficDestinationAds = async (task, data) => {
    if (data.data.data.data.length<=0) { 
        alert('rrr')
        $('.parent-getTrafficDestinationAds').addClass('empty-state')
    }
    $(`#${task}`).html('');
    let {
        data: TrafficDestinationAds
    } = data.data.data;
    
    $.each(TrafficDestinationAds, (index, site) => {
        
        if (site != null){
        if (site.Domain == "grid.upgrade") return;
        $(`#${task}`).append(`
        <tr>
            <td><a title="${site.Domain}" href="index.php?view=traffic-website&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></td>
            <td class="text-right">${numeral(site.Share).format('0.00%')}</td>
            <td>
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </td>
            <!--<div class="col-2 text-right ${(!site.Change) ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${(!site.Change) ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div> -->
        </tr>
        `);
        }
    })

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

export default api;