const customColors = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

function appendHtml(arr, name) {
    for (const key in arr) {
        let value = '';
        let val = '';
        if (numeral(arr[key].val / arr[key].totals * 100).format('0,0') < 1) {
            value = "<1%";
            val = "1%"
        } else {
            value = numeral(arr[key].val / arr[key].totals * 100).format('0,0') + '%';
            val = numeral(arr[key].val / arr[key].totals * 100).format('0,0') + '%';
        }

        let html = `
       <tr class="" style="height:35px">
         <td class="pl-3 pl-sm-5 pl-md-3 w-10 w-md-20 text-capitalize">${arr[key].name}</td>
         <td class="w-lg-60 w-55">
         <div class="range-dt">
            <div class="slider-full w-100 mx-2 ml-md-3">
              <div class="slider-fill-${arr[key].name}" style="width:${val}"> </div>
            </div>
         </div>
         </td>
         <td class="w-md-20 w-25 pl-1 pl-md-3">
         <span class="text-percent font-12 pl-0 pl-md-3">${value}</span> <span class="text-score font-12 px-0 px-md-2 text-info">${numeral(arr[key].val).format('0a')}</span>
         </td>
         </tr>
       `
        $(`#${name}`).append(html)
    }
}

function lockedModule(boxWidgetName, level) {
    var freeModule = [];
    var VIPModule = [];
    if (level == 'demo') {
        if (freeModule.includes(boxWidgetName) || VIPModule.includes(boxWidgetName)) {
            $(".parent-" + boxWidgetName).addClass("locked");
            $(".parent-" + boxWidgetName).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
        }
    } else if (level == 'free') {
        if (VIPModule.includes(boxWidgetName)) {
            $(".parent-" + boxWidgetName).parent().prepend(`<div class="center"><a class="btn btn-primary shadow" href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&tools=phantich&userToken=${userToken}" ><i class="fas fa-gem"></i> Nâng VIP để xem data</a></div>`);
        }
    }
}

const apiBackLink = async (method, domain, reload = 0) => {


    let methodName = method;
    if (method == "backLinksOverviews"
        || method == "anchors-cloud"
        || method == "total_backlink"
        || method == "backlinkTypes"
        || method == "referringDomains"
        || method == "categories-refdomains"
    ) {
        method = "backlinksOverview"
    }
    if (method == "backlinksScorical") {
        method = "backlinksScorical"
    }
    if (method == "backlinksKeywords") {
        method = "backlinksKeywords";
    }
    if (method == "backlinksTraffic") {
        method = "backlinksTraffic";
    }
    if (method == "backlinksDetail") {
        method = "backlinksDetail";
    }
    try {
        return await $.ajax({
            url: `//localapi.trazk.com/webdata/v3.php?task=getDomainBackLinkDetail&domain=${domain}&page=1&method[${method}]=true&userToken=${userToken}&reload=${reload}`,
            type: "GET"
        }).then(data => {
            switch (methodName) {
                case "backLinksOverviews":
                    overViewBackLinks(data, method);
                    break;
                case "backlinkTypes":
                    backlinkTypes(data, method);
                    break;
                case "backlinksDetail":
                    backlinksDetail(data, method);
                    break;
                case "anchors-cloud":
                    anchorsOverview(data, method);
                    break;
                case "categories-refdomains":
                    categoriesRefDomain(data, method);
                    break;
                case "referringDomains":
                    referringDomains(data, method);
                    break;
                case "total_backlink":
                    total_backlink(data, method);
                    break;
                case "backlinksScorical":
                    backlinksScorical(data, method)
                    break;
                case "backlinksKeywords":
                    backlinksKeywords(data, method)
                    break;
                case "backlinksTraffic":
                    backlinksTraffic(data, method)
                    break;
                default:
                    break;
            }
            lockedModule(methodName,data.userData.member);
            return true;
        })

    } catch (error) {
        console.log(error);
    }
}

const overViewBackLinks = async (data, method) => {
    // chart pie
    if (data.status == "success") {
        let myChartinternet_users_percentage = echarts.init(document.getElementById('pieChart'), "light");

        new ResizeSensor($('#pieChart'), () => myChartinternet_users_percentage.resize());
        let frequency_of_internet_use = data.data.backlinksOverview;
        let option = {
            backgroundColor: "#fff",
            series: {
                type: 'pie',
                clockWise: true,
                radius: [20, 30],
                itemStyle: {
                    normal: {
                        color: '#a181fc',
                        shadowColor: '#a181fc',
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: numeral(frequency_of_internet_use.ascore).format("0"),
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: '#a181fc'
                            }
                        }
                    },
                }, {
                    value: 100 - numeral(frequency_of_internet_use.ascore).format("0"),
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: "#e3d9fe"
                        },
                        emphasis: {
                            color: "#e3d9fe"
                        }
                    }
                }]
            }
        }
        myChartinternet_users_percentage.setOption(option);

        $('#domainBacklinks').html('').html(numeral(frequency_of_internet_use.domains).format('0.0a'))
        $('#totalBacklinks').html('').html(numeral(frequency_of_internet_use.total).format('0.0a'))
        // await $(`#${task}`).removeClass('is-loading');
        // await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(data)
    }
}

const backlinksScorical = async (data, method) => {
    // chat line
    if (data.status == "success") {
        // console.log(data.data.backlinksScorical.AScores);


        let lineChartData = data.data.backlinksScorical.AScores;
        let arrAScores = {
            date: [],
            val: []
        }
        for (const keyAScores in lineChartData) {
            let date = moment(keyAScores * 1000).format("DD MMMM YYYY")
            arrAScores.date.push(date);
            arrAScores.val.push(lineChartData[keyAScores])

        }
        let lineChart = echarts.init(document.getElementById('lineChart'));
        let optionLine = {
            color: customColors,
            tooltip: {
                show: false,
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                }
            },
            grid: {
                top: '60%',
                left: '4%',
                right: '4%',
                bottom: '3%',
                containLabel: false,
                // show: false,
            },
            xAxis: [{
                show: false,
                type: 'category',
            }],
            yAxis: [{
                show: false,

            }],
            series: [{
                type: 'line',
                smooth: true,
                symbol: "none",
                areaStyle: {
                },
                data: arrAScores.val
            },


            ]
        };

        lineChart.setOption(optionLine);
    } else {
        console.log('khanh');

    }
}

const backlinksKeywords = async (data, method) => {
    let dataKey = data.data.backlinksKeywords.keywords
    $('#keyWordBackLinks').html('').html(numeral(dataKey).format('0.0a'))
}

const backlinksTraffic = async (data, method) => {
    let dataTraffic = data.data.backlinksTraffic.visits
    $('#trafficBackLinks').html('').html(numeral(dataTraffic).format("0.0a"))
}

const anchorsOverview = async (data, method) => {
    if (data.status == "success") {
        let datas = data.data.backlinksOverview.anchors.data;
        let total = 0;

        for (const item in datas) {
            total += datas[item].backlinks_num
        }
        for (const key in datas) {
            let val = datas[key].backlinks_num / total;
            if (datas[key].anchor == "<EmptyAnchor>") {
                datas[key].anchor = "EmptyAnchor";
            }

            if (numeral(datas[key].backlinks_num / total * 100).format('0,0') > 1) {
                val = numeral(datas[key].backlinks_num / total).format('0.0%')
            } else {
                val = "< 1%"
            }
            let html = `
            <div class="mt-2 list-dt">
            <div class="row">
                <div class="col-12" style="margin-bottom:5px!important">
                    <div class="content-dt font-12 pl-3 pb-2 text-truncate text-left">${datas[key].anchor}</div>
                </div>
                <div class="col-12">
                    <div class="dvc-desktop d-flex align-items-center no-block">
                        <div class="range-dt">
                            <div class="slider-full">
                                <div class="slider-fill-dt" style="width:${(numeral(datas[key].backlinks_num / total * 100).format('0,0') + '%')}"></div>
                            </div>
                        </div>
                        <div class="text-right dvc-percent-all">
                            <div class="dt-percent font-12">
                            ${val}
                            </div>
                        </div>
                        <div class="dvc-score-all text-right">
                            <div class="dt-score font-12">
                                ${numeral(datas[key].backlinks_num).format("0,0")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            `;
            $('.anchors-cloud').append(html)
            $('.anchors-cloud').removeClass('is-loading')
        }
        $('.widget-anchors-cloud .similarReloadTask').addClass('d-none')
    } else {
        $(`.widget-anchors-cloud`).removeClass('is-loading')
        $(`.widget-anchors-cloud`).addClass('empty-state')
    }
}

const categoriesRefDomain = async (data, method) => {
    // console.log('backlinksDetail', data.data);
    if (data.status == "success") {
        let cataDomain = data.data.backlinksOverview.categories;
        $.each(cataDomain, (index, item) => {
            let string = index.slice(1);
            let cutStr = string.replace(/\//g, ' > ');
            let html = `
            <div class="mt-2 list-dt cataDomain-child" >
            <div class="row">
                <div class="col-12" style="margin-bottom:5px!important">
                    <div class="content-dt font-12 pl-3 pb-2 text-truncate text-left">${cutStr}</div>
                </div>
                <div class="col-12" style="margin-bottom:0px!important">
                    <div class="dvc-desktop d-flex align-items-center no-block">
                        <div class="range-dt">
                            <div class="slider-full">
                                <div class="slider-fill-dt" style="width:${(numeral(item).format('0.0%'))}"></div>
                            </div>
                        </div>
                        <div class="text-right dvc-percent-all">
                            <div class="dt-percent font-12">
                            ${numeral(item).format('0%')}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
            `;
            $('.categories-refdomains').append(html)
            $('.categories-refdomains').removeClass('is-loading')
        })
        $('.widget-categories-refdomains .similarReloadTask').addClass('d-none')
        await $(`.similarReloadTask[data-task="categories-refdomains"]`).find('i').removeClass('fa-spin');
    } else {
        $(`#showRefDomain`).removeClass('is-loading')
        $(`#showRefDomain`).addClass('empty-state')
    }
}

const referringDomains = async (data, method) => {
    if (data.status == "success") {
        let refDomains = data.data.backlinksOverview.historical.domain_stat
        let newLinksByWeeks = [];
        let lostLinksByWeeks = [];
        let dateWeeks = [];
        let newLinksByMonths = [];
        let lostLinksByMonths = [];
        let dateMonths = [];
        $.each(refDomains, (index, item) => {
            //   console.log('dsss',refDomains[index]);
            if (index == "weeks") {
                for (const key in item) {
                    dateWeeks.push(moment(key * 1000).format('MMM DD'))
                    newLinksByWeeks.push(item[key].newRefDomains)
                    lostLinksByWeeks.push(-item[key].lostRefDomains)
                }
            }
            if (index == "months") {
                for (const key in item) {
                    newLinksByMonths.push(item[key].newRefDomains)
                    lostLinksByMonths.push(-item[key].lostRefDomains)
                    dateMonths.push(moment(key * 1000).format('MMM DD'))
                }
            }
        })

        let ele = document.getElementById("showRefDomain");
        let myChart = echarts.init(ele, 'light');
        function renderChart(data, data1, Name) {
            let option = {
                color: customColors,
                legend: {
                    show: false,
                    data: ['bar', 'bar2']
                },

                tooltip: {},
                xAxis: {
                    data: Name,
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    axisLine: {
                        show: false
                    }
                },
                series: [{
                    name: 'New',
                    type: 'bar',
                    stack: true,
                    data: data,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: 'Lost',
                    stack: true,
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                }
            };

            myChart.setOption(option);
            new ResizeSensor($(`#showGetAccountReportByDate`), function () {
                myChart.resize();
            });
        }

        renderChart(newLinksByWeeks, lostLinksByWeeks, dateWeeks)
        $('#btnShowRefDomain input').click(function () {
            let val = $(this).val()
            if (val == "option1") {
                renderChart(newLinksByWeeks, lostLinksByWeeks, dateWeeks)
            } else if (val == "option2") {
                renderChart(newLinksByMonths, lostLinksByMonths, dateMonths)
            }
        })
        await $('#showRefDomain').removeClass('is-loading');
        await $('.similarReloadTask[data-task="categories-refdomains"]').find('i').removeClass('fa-spin');
    } else {
        $(`#showTotalBackLink`).removeClass('is-loading')
        $(`#showTotalBackLink`).addClass('empty-state')
    }
}


const total_backlink = async (data, method) => {
    if (data.status == "success") {
        let totalBacklinks = data.data.backlinksOverview.historical.domain_stat;
        let totalByWeeks = [];
        let dateWeeks = [];
        let totalByMonths = [];
        let dateMonths = [];
        $.each(totalBacklinks, (index, item) => {
            //   console.log('dsss',refDomains[index]);
            if (index == "weeks") {
                for (const key in item) {
                    dateWeeks.push(moment(key * 1000).format('DD MMM'))
                    totalByWeeks.push(item[key].totalLinks)
                }
            }
            if (index == "months") {
                for (const key in item) {
                    totalByMonths.push(item[key].totalLinks)
                    dateMonths.push(moment(key * 1000).format('DD MMM'))
                }
            }
        });
        let ele = document.getElementById("showTotalBackLink");
        let myChart = echarts.init(ele, 'light');
        function renderChart(data, Name) {
            let option = {
                color: customColors,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: [''],
                    show: false
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: Name
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        silent: true,
                        axisLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: 'Total Backlinks',
                        type: 'line',
                        smooth: true,
                        areaStyle: {},
                        data: data
                    },


                ]
            };


            myChart.setOption(option);
            new ResizeSensor($(`#showTotalBackLink`), function () {
                myChart.resize();
            });
        };
        renderChart(totalByWeeks, dateWeeks)
        $('#btnTotalBackLink input').click(function () {
            let val = $(this).val()

            if (val == "option12") {
                renderChart(totalByWeeks, dateWeeks)
            } else if (val == "option21") {
                renderChart(totalByMonths, dateMonths)
            }
        })
        await $('#showTotalBackLink').removeClass('is-loading');
        await $('.similarReloadTask[data-task="total_backlink"]').find('i').removeClass('fa-spin');
    } else {
        $(`#showRefDomain`).removeClass('is-loading')
        $(`#showRefDomain`).addClass('empty-state')
    }
}

const backlinkTypes = async (data, method) => {
    if (data.status == "success") {
        let dataBacklinkTypes = data.data.backlinksOverview;
        // console.log(dataBacklinkTypes);

        let total = dataBacklinkTypes.text + dataBacklinkTypes.frame + dataBacklinkTypes.form + dataBacklinkTypes.image
        let arrBackLink = [];
        let arrLink = [];
        for (const keyBackLink in dataBacklinkTypes) {
            if (keyBackLink == 'text') {
                let tempText = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrBackLink.push(tempText)
            }
            if (keyBackLink == 'image') {
                let tempImg = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrBackLink.push(tempImg)
            }
            if (keyBackLink == 'form') {
                let tempForm = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrBackLink.push(tempForm)
            }
            if (keyBackLink == 'frame') {
                let tempFrame = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrBackLink.push(tempFrame)
            }
            if (keyBackLink == 'follow') {
                let tempFrame = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrLink.push(tempFrame)
            }
            if (keyBackLink == 'nofollow') {
                let tempFrame = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrLink.push(tempFrame)
            }
            if (keyBackLink == 'sponsored') {
                let tempFrame = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrLink.push(tempFrame)
            }
            if (keyBackLink == 'ugc') {
                let tempFrame = {
                    name: keyBackLink,
                    val: dataBacklinkTypes[keyBackLink],
                    totals: total
                }
                arrLink.push(tempFrame)
            }
        }
        appendHtml(arrBackLink, 'backlinkTypes')
        appendHtml(arrLink, 'linkAttributes')

    } else {
        $('#backlinkTypes').addClass('empty-state');
        $('#linkAttributes').addClass('empty-state');

    }
}

const backlinksDetail = async (data, method) => {
    console.log(data);

}

export default apiBackLink;