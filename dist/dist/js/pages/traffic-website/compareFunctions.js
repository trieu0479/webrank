// import counterUp from '../counterup2/index.js';

// const counter = document.querySelector('.counter');
const url = new URL(location.href);
let domain1 = url.searchParams.get("domain1")
let domain2 = url.searchParams.get("domain2")
let website = [domain1, domain2]
var domain
const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];

const getHeader = async data => {
    // Get value Header 
    for (var i = 0; i < data.length; i++) {
        domain = data[i];

        const {
            data: similarHeader,
            website: similarDomain
        } = domain.data;


        let {
            icon: similarIcon,
            title: similarTitle,
            description: similarDescription,
            relatedApps: similarRelatedApps,
            imageLarge: similarThumb,
            tags: similarTags,
            globalRanking: similarGlobalRank,
            highestTrafficCountryRanking: similarCountryRank,
        } = similarHeader;

        let similarThumbMobile = similarThumb.replace("t=1", "t=4");
        let similarThumbMapHeat = similarThumb.replace("t=1", "t=3");

        if (!similarThumb.startsWith('http')) {
            similarThumb = 'assets' + similarThumb;
            similarThumbMobile = similarThumb;
        }

        // Check value Header
        if (!similarTags) similarTags = []; // set null = []
        if (similarTags.length <= 0)
            $(".similarHeader .similarTags").addClass("d-none");
        if ($.isEmptyObject(similarRelatedApps))
            $(".similarHeader .similarRelatedApps").addClass("d-none");
        if (!similarRelatedApps)
            similarRelatedApps = [];
        if (!similarTitle)
            similarTitle = "<em>Website này chưa cập nhật tiêu đề</em>";
        if (similarDescription == "")
            similarDescription = "<em>Website này chưa cập nhật mô tả</em>";

        // Set value Header
        similarIcon = "https://files.fff.com.vn/f.php?url=" + btoa(similarIcon);

        let idDomain = similarDomain.replace(".", "");
        idDomain = idDomain.replace(".", "");
        $(`.${idDomain} .similarHeader .similarIcon`).html(
            `<img class="p-1 mr-2 border rounded bg-secondary" src="${similarIcon}" />`
        );
        $(`.${idDomain} .similarHeader .similarDomain`).text(similarDomain);
        $(`.${idDomain} .similarFooter .similarGlobalRank`).text('#' + numeral(similarGlobalRank).format('0,0'));
        $(`.${idDomain} .similarFooter .similarCountryRank`).text('#' + numeral(similarCountryRank).format('0,0'));
        $(`.${idDomain} .similarHeader .similarTitle`).html(similarTitle);
        $(`.${idDomain} .similarHeader .similarDescription`).html(similarDescription);
        $(`.${idDomain} .similarHeader .similarTags`).html(
            '<p class="font-bold mb-2"><i class="far fa-tag font-14"></i> Từ khoá: </p>' +
            similarTags.map(tag => `<span><a href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${tag}" class="text-muted"><i class="far fa-search"></i> ${tag}</a></span>`).join("")
        );

        $(`.${idDomain} .similarHeader .similarRelatedAppsTitle`).html(
            '<i class="far fa-mobile font-14"></i> Ứng dụng liên quan<br/><span class="font-12 text-white">CH Play & AppStore</span>'
        );

        let apps = "";
        $.each(similarRelatedApps, (index, item) => {
            const mainApp = item[0];
            const appId =
                (index == "apps_0" ?
                    "//play.google.com/store/apps/details?id=" :
                    "//itunes.apple.com/us/app/id") + mainApp.id;
            const appIcon = "https://files.fff.com.vn/f.php?url=" + btoa(mainApp.icon);
            const appTitle = mainApp.title;
            apps += `<a target="_blank" class="mr-2" href="${appId}"><img width="32px" src="${appIcon}" /></a>`;
        });

        $(`.${idDomain} .similarHeader .similarApps`).html(
            `<div class="d-flex flex-row">${apps}</div>`
        );

        similarThumb = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumb);
        similarThumbMobile = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumbMobile);
        $(`.${idDomain} .similarThumb img`).attr("src", similarThumb);
        $(`.${idDomain} .similarThumbMobile img`).attr("src", similarThumbMobile);

        // Remove loading state
        $(
            `.${idDomain} .similarHeader .similarDomainWrapper,` +
            `.${idDomain} .similarHeader .similarTitle,` +
            `.${idDomain} .similarHeader .similarDescription,` +
            `.${idDomain} .similarHeader .similarTags,` +
            `.${idDomain} .similarHeader .similarRelatedApps`
        ).removeClass("placeholder-loading");


        // Popup nhap website
        const getDomain = async() => {
            const result = await Swal.fire({
                title: 'Hãy nhập website để so sánh',
                html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${domain1} placeholder="Nhập website của bạn">` +
                    `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                    `<input id="swal-input2" class="swal2-input text-lowercase" value=${domain2} placeholder="Nhập website của đối thủ">`,
                focusConfirm: false,
                showCloseButton: true,
                confirmButtonText: 'So Sánh',
                width: 600,
                padding: '4em',
                position: 'top',
                // customClass: {
                //     container: "pt-6"
                // },
                onOpen: () => {
                    $('#swal-input2').focus();
                    $('#swal-input2').keypress(event => (event.which == 13) ? $('.swal2-confirm').click() : null);

                },
                preConfirm: () => {
                    if (document.getElementById('swal-input1').value == "" || document.getElementById('swal-input2').value == "") {
                        Swal.showValidationMessage(
                            `Vui lòng nhập đủ website`
                        )
                    } else {
                        if (document.getElementById('swal-input1').value == document.getElementById('swal-input2').value) {
                            Swal.showValidationMessage(
                                `Hai website không được trùng`
                            )
                        }
                    }

                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value
                    ]
                }
            })

            if (result.dismiss == undefined) {
                if (result.value[0] == domain1 && result.value[1] == domain2)
                    return;
                else
                    return result;

            }

        };

        // Change website
        $(
            `.${idDomain} .similarHeader .changeWebSite`
        ).click(() => {
            getDomain().then(data => {
                if (data) {
                    location.href = `?view=traffic-website&action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
                    // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
                }
            });
        });

        $(`.vs-box`).click(() => {
            getDomain().then(data => {
                if (data) {
                    location.href = `?view=traffic-website&action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
                    // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
                }
            });
        });


    }
};

const api = async(task, domain1, domain2) => {
    var dataCompare = [];
    // dataCompare['domains'] = [domain1, domain2]; 

    try {
        return await $.ajax({
                url: `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${domain1}`,
                type: "GET"
            })
            // .then(res => JSON.parse(res))
            .then(res => {
                if (checkData(res, task) == false) {
                    dataCompare[0] = res;
                    $.ajax({
                            url: `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${domain2}`,
                            type: "GET"
                        })
                        // .then(data => JSON.parse(data))
                        .then(data => {
                            if (checkData(data, task) == false) {
                                dataCompare[1] = data;

                                switch (task) {
                                    case "getHeader":
                                        getHeader(dataCompare);
                                        break;
                                    case "getDesktopVsMobileVisits":
                                        getDesktopVsMobileVisits(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getWebDemographicsGender":
                                        getWebDemographicsGender(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getWebDemographicsAge":
                                        getWebDemographicsAge(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getTrafficSourcesOverview":
                                        getTrafficSourcesOverview(task, dataCompare);
                                        break;
                                    case "getTrafficDisplayAdvertisingAds":
                                        getTrafficDisplayAdvertisingAds(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getTrafficSourcesSocial":
                                        getTrafficSourcesSocial(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getSimilarSites":
                                        getSimilarSites(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getTrafficDisplayPaidOutgoingAds":
                                        getTrafficDisplayPaidOutgoingAds(task, dataCompare);
                                        break;
                                    case "getTrafficSourcesSearch":
                                        getTrafficSourcesSearch(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getWebsiteGeography":
                                        getWebsiteGeography(task, dataCompare);
                                        break;
                                    case "getSearchOrganicPaidOverview":
                                        getSearchOrganicPaidOverview(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getWebsiteAdsIntelDisplay":
                                        getWebsiteAdsIntelDisplay(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getScrapedSearchAds":
                                        getScrapedSearchAds(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getSearchBrandedKeywords":
                                        getSearchBrandedKeywords(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getTrafficAndEngagementOverviewMonthly": // mới
                                        getTrafficAndEngagementOverviewMonthly(task, dataCompare);
                                        break;
                                    case "getUniqueUsersMonthly":
                                        getUniqueUsersMonthly(task, dataCompare);
                                        break;
                                    case "getMarketingMixOverviewDaily":
                                        getMarketingMixOverview(task, dataCompare);
                                        break;
                                    case "getTrafficSourcesTotalReferrals":
                                        getTrafficSourcesTotalReferrals(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getTrafficSocial":
                                        getTrafficSocial(task, dataCompare, domain1, domain2);
                                        break;
                                    case "getWebsiteAdsVisitsOverview":
                                        getWebsiteAdsVisitsOverview(task, dataCompare);
                                        break;
                                    case "getTrafficDisplayPaidOutgoingAdsTable":
                                        getTrafficDisplayPaidOutgoingAdsTable(task, dataCompare, domain1, domain2);
                                        break;
                                    default:
                                        break;

                                }
                                return;
                            }
                        });
                    // console.log(dataCompare);

                    if (task == 'buildFeatureImage') {
                        console.log('buildFeatureImage', data.data.data);
                        return;
                    }
                }
            });
    } catch (error) {
        console.error(error);
    }
};

const checkData = (data, task) => {
    //Kiểm tra rỗng
    $.each(data, (index, item) => {
        if (typeof item == "object") {
            if (!item || item.length == 0) {

                (task == 'getOrganicKeywordsBrandedTable' || task == 'getOrganicKeywordsNonBrandedTable') ? task = 'getOrganicKeywordsTable': null;
                if ($(`#${task}`).hasClass('is-loading')) {
                    $(`#${task}`).removeClass('is-loading').addClass('empty-state');
                } else if ($(`#${task}`).find('.is-loading').length > 0) {
                    $(`#${task}`).find('.is-loading').removeClass('is-loading').addClass('empty-state');
                } else {
                    $(`#${task}`).addClass('empty-state');
                    $(`#getWebsiteAdsIntelDisplay`).removeClass('empty-state');
                    $(`#getScrapedSearchAds`).removeClass('empty-state');

                }
                $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                return true;
            } else {
                $.each(item, (data, website) => {
                    if (!data || data.length == 0) {
                        if ($(`#${task}`).hasClass('is-loading')) {
                            $(`#${task}`).removeClass('is-loading').addClass('empty-state');

                        } else if ($(`#${task}`).find('.is-loading').length > 0) {
                            $(`#${task}`).find('.is-loading').removeClass('is-loading').addClass('empty-state');

                        } else {
                            $(`#${task}`).addClass('empty-state');

                        }
                        return true;
                    }
                })
            }
        }
    });

    return false;
}

const getTrafficDisplayPaidOutgoingAdsTable = async(task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {
        let idDomain1 = domain1.replace(/\./g, "");
        let idDomain2 = domain2.replace(/\./g, "");

        let temp = 0; // check null all

        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data && data[i].data.data) {
                let idDomain = website[i].replace(/\./g, "");

                let TrafficDisplayPaidOutgoingAdsTable = data[i].data.data;

                let dataChart = [];

                $.each(TrafficDisplayPaidOutgoingAdsTable, (index, visit) => {
                    let item = {
                        value: visit.Share,
                        name: visit.Name == "Google Display Network" ? "GDN" : visit.Name
                    };
                    dataChart.push(item);
                });

                // render chart

                let ele = document.getElementById(`${idDomain}getTrafficDisplayPaidOutgoingAdsTable`);

                let myChart = echarts.init(ele);

                let option = {
                    color: customColors,
                    legend: {
                        top: "15%",
                        left: '60%',
                        // formatter: function (name) {
                        //     return name=="GDN"?"Google Display Network":name;
                        // },
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10
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


                new ResizeSensor($(`#${idDomain + task}`), function() {
                    myChart.resize();
                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
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

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain + task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                await $(`#${idDomain + task}`).removeClass('empty-state');
            } else {
                temp++;
                if (i == 0) {
                    $(`#${idDomain1 + task}`).removeClass('is-loading');
                    $(`#${idDomain1 + task}`).addClass('empty-state');
                } else {
                    $(`#${idDomain2 + task}`).removeClass('is-loading');
                    $(`#${idDomain2 + task}`).addClass('empty-state');
                }

                if (temp == 2) {
                    $(`.${task}`).addClass("d-none");
                }

            }
        }
    } else {
        console.log(`${task} failed`);
    }
}

const getWebsiteAdsVisitsOverview = async(task, data) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let temp = 0;

        for (let i = 0; i < data.length; i++) {

            let {
                website: domain
            } = data[i].data;

            let idDomain = website[i].replace(/\./g, "");
            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data && data[i].data.data.Data.Data &&
                data[i].data.data.Data.Data[website[i]].AdsTotal > 0) {

                let WebsiteAdsVisitsOverview = data[i].data.data.Data.Data[website[i]];

                let AdsTotal = WebsiteAdsVisitsOverview.AdsTotal;

                let VolumeTotal = WebsiteAdsVisitsOverview.VolumeTotal;


                $(`#${idDomain}getWebsiteAdsVisitsOverview`).removeClass("is-loading");
                $(`#${idDomain}getWebsiteAdsVisitsOverview`).html(`${numeral(AdsTotal).format("0,0")}<br><span class="h4 font-gg text-muted">${numeral(VolumeTotal).format("0.00%")} của tổng lượng truy cập bằng máy tính</span>`);


                await $(`#${idDomain}getWebsiteAdsVisitsOverview`).removeClass('is-loading');
                $(`#${idDomain}getWebsiteAdsVisitsOverview`).parent().removeClass('empty-state');
            } else {
                temp++;
                $(`#${idDomain}getWebsiteAdsVisitsOverview`).removeClass('is-loading');
                $(`#${idDomain}getWebsiteAdsVisitsOverview`).parent().addClass('empty-state');
                if (temp == 2) {
                    $("#getWebsiteAdsVisitsOverview").addClass("d-none");
                }
            }
        }


    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficAndEngagementOverviewMonthly = async(task, data) => {

    if (data[0].status == "success" && data[1].status == "success") {
        for (let i = 0; i < data.length; i++) {
            const {
                website: domain1
            } = data[0].data;

            const {
                website: domain2
            } = data[1].data;

            let idDomain1 = domain1.replace(/\./g, "")
            let idDomain2 = domain2.replace(/\./g, "")
            if (data[i] && data[i].data && data[i].data.data) {
                let idDomain = website[i].replace(/\./g, "")
                    /*
                    let {
                        Data
                    } = data[i].data.data.Data;
                    //let TrafficAndEngagementOverviewMonthly = Data[0];
                    */

                var TrafficAndEngagementOverviewMonthly = null
                if (data[i].data.data.Data.AvgMonthVisits) {
                    TrafficAndEngagementOverviewMonthly = data[i].data.data.Data;
                } else {
                    TrafficAndEngagementOverviewMonthly = data[i].data.data.Data.Data[0];
                }

                let MonthlyVisits = numeral(TrafficAndEngagementOverviewMonthly.AvgMonthVisits).format("0,0");
                let MonthlyUniqueVisitors = numeral(TrafficAndEngagementOverviewMonthly.UniqueUsers).format("0,0");
                let AvgVisitDuration = numeral(TrafficAndEngagementOverviewMonthly.AvgVisitDuration).format("0:00:00");
                let PagesperVisit = numeral(TrafficAndEngagementOverviewMonthly.PagesPerVisit).format("0.00");
                let BounceRate = numeral(TrafficAndEngagementOverviewMonthly.BounceRate).format("00.00%");

                $(`.${idDomain} span.MonthlyVisits`).text(MonthlyVisits);
                $(`.${idDomain} span.MonthlyUniqueVisitors`).text(MonthlyUniqueVisitors);
                $(`.${idDomain} span.AvgVisitDuration`).text(AvgVisitDuration);
                $(`.${idDomain} span.PagesperVisit`).text(PagesperVisit);
                $(`.${idDomain} span.BounceRate`).text(BounceRate);
            } else {
                $(`.${idDomain1} #getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');
                $(`.${idDomain1} #getTrafficAndEngagementOverviewMonthly`).addClass('empty-state');
                $(`.${idDomain2} #getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');
                $(`.${idDomain2} #getTrafficAndEngagementOverviewMonthly`).addClass('empty-state');
            }
        }

    }
}

const getUniqueUsersMonthly = async(task, data) => {
    let series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let dataChart = {
                keys: [],
                values: []
            };

            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data && data[i].data.data.Data.Data) {

                let {
                    Data
                } = data[i].data.data.Data;


                let UniqueUsersMonthly = Data[website[i]];
                let totals = UniqueUsersMonthly.Total[0];

                totals.map(total => {
                    let key = total.Key;
                    let value = total.Value;
                    dataChart.keys.push(key);
                    dataChart.values.push((value == null) ? 0 : value);
                });
                let temp = {}
                temp.name = website[i],
                    temp.data = (dataChart.values.length > 0) ? dataChart.values : [0, 0, 0],
                    temp.type = "line",
                    temp.symbol = "circle",
                    temp.symbolSize = 10,
                    temp.showSymbol = true,
                    temp.hoverAnimation = false,
                    temp.lineStyle = {
                        normal: {
                            width: 2,
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    temp.itemStyle = {
                        normal: {
                            borderWidth: 10
                        }
                    }
                series.push(temp)
                if (i != 0) {
                    let ele = document.getElementById(task);

                    let myChart = echarts.init(ele, "light");

                    let option = {
                        tooltip: {
                            trigger: "axis",
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderColor: 'rgba(93,120,255,1)',
                            borderWidth: 1,
                            extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                            formatter: params => {
                                let {
                                    name
                                } = params[0];
                                let detail = "";
                                params.forEach((p, i) => {
                                    if (p.value == null || p.value == "A")
                                        p.value == 0;
                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = numeral(value).format("0,0");


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                    <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        legend: {
                            data: [`${domain1}`, `${domain2}`]
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
                                formatter: (value, index) => (value = numeral(value).format("0,0"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);
                    new ResizeSensor($(`#getUniqueUsersMonthly`), function() {
                        myChart.resize();
                    });

                    const lastdate = dataChart.keys.length;
                    $('.similarDates').text(`${moment(dataChart.keys[0]).format("MM/YYYY")} - ${moment(dataChart.keys[lastdate - 1]).format("MM/YYYY")}`);

                    await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                    $(`#getUniqueUsersMonthly`).removeClass('empty-state');

                }
            } else {
                $(`#getUniqueUsersMonthly`).removeClass('is-loading')
                $(`#getUniqueUsersMonthly`).addClass('empty-state')
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}

const getMarketingMixOverview = async(task, data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data) {
                let idDomain = website[i].replace(/\./g, "")

                let {
                    DailyData,
                    WeeklyData,
                    MonthlyData
                } = data[i].data.data.Data;

                if (Object.values(DailyData).length != 0 || Object.values(WeeklyData).length != 0 || Object.values(MonthlyData).length != 0) {
                    const run = async(taskName, temp) => {
                        let DataMarket;
                        if (temp == "Daily") {
                            DataMarket = data[i].data.data.Data.DailyData;
                        } else if (temp == "Weekly") {
                            DataMarket = data[i].data.data.Data.WeeklyData;
                        } else {
                            DataMarket = data[i].data.data.Data.MonthlyData;
                        }

                        if (Object.values(DataMarket).length != 0) {
                            let {
                                TrafficShare,
                                AverageDuration,
                                PagesPerVisit,
                                BounceRate
                            } = DataMarket;

                            let MarketingMixOverview;

                            switch (taskName) {
                                case 'TrafficShare':
                                    MarketingMixOverview = TrafficShare
                                    break;
                                case 'AverageDuration':
                                    MarketingMixOverview = AverageDuration
                                    break;
                                case 'PagesPerVisit':
                                    MarketingMixOverview = PagesPerVisit
                                    break;
                                case 'BounceRate':
                                    MarketingMixOverview = BounceRate
                                    break;
                                default:
                                    break;
                            }

                            //console.log(MarketingMixOverview.Data); 

                            let dataChart = {
                                keys: [],
                                values: [],
                            };



                            let {
                                BreakDown,
                                Total
                            } = MarketingMixOverview.Data;

                            let keys = [];
                            let values = {
                                Direct: [],
                                DisplayAds: [],
                                Email: [],
                                OrganicSearch: [],
                                PaidSearch: [],
                                Referrals: [],
                                Social: [],
                            };


                            $.each(BreakDown, (idx, val) => {
                                keys.push(idx);

                                $.each(val, (name, data) => {
                                    if (name == 'Direct' && data)
                                        values.Direct.push(data)
                                    if (name == 'Display Ads' && data)
                                        values.DisplayAds.push(data)
                                    if (name == 'Email' && data)
                                        values.Email.push(data)
                                    if (name == 'Organic Search' && data)
                                        values.OrganicSearch.push(data)
                                    if (name == 'Paid Search' && data)
                                        values.PaidSearch.push(data)
                                    if (name == 'Referrals' && data)
                                        values.Referrals.push(data)
                                    if (name == 'Social' && data)
                                        values.Social.push(data)
                                })

                            })

                            dataChart.keys = keys;
                            dataChart.values = values;

                            if (dataChart.values.Direct.length == 0 && dataChart.values.DisplayAds.length == 0 &&
                                dataChart.values.Email.length == 0 && dataChart.values.OrganicSearch.length == 0 &&
                                dataChart.values.PaidSearch.length == 0 && dataChart.values.Referrals.length == 0 &&
                                dataChart.values.Social.length == 0) {

                                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                let ele = document.getElementById(`${idDomain}getMarketingMixOverview--${taskName}`);

                                let myChart = echarts.init(ele, 'light');

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
                                            let detail = "";
                                            let format = "";
                                            params.forEach((p, i) => {
                                                if (p.value == null || p.value == "A")
                                                    p.value == 0;
                                                let {
                                                    marker,
                                                    color,
                                                    seriesName,
                                                    value
                                                } = p;

                                                switch (taskName) {
                                                    case 'TrafficShare':
                                                        format = '0,0';
                                                        break;
                                                    case 'AverageDuration':
                                                        format = '00:00:00';
                                                        break;
                                                    case 'PagesPerVisit':
                                                        format = '0';
                                                        break;
                                                    case 'BounceRate':
                                                        format = '00.00%';
                                                        break;
                                                    default:
                                                        break;

                                                }
                                                value = numeral(value).format(format);


                                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                                <br/>`
                                            })
                                            name = moment(name).format('DD MMMM YYYY');
                                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                        <div class="text-dark pt-2">${detail}`;

                                        }
                                    },
                                    legend: {
                                        data: ["Trực tiếp", "Mail", "Liên kết ngoài", "Mạng xã hội", "Tìm kiếm tự nhiên", "Tìm kiếm trả phí", "Quảng cáo hiển thị"],

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
                                        axisTick: {
                                            interval: (i, v) => {
                                                if (task == 'Weekly') {
                                                    return (parseInt(v.slice(-2)) < 7)
                                                } else {
                                                    return (v.slice(-2) == '01')
                                                }
                                            },
                                        },
                                        axisLabel: {
                                            margin: 10,
                                            textStyle: {
                                                color: "#999"
                                            },
                                            fontFamily: 'Arial',
                                            interval: (i, v) => {
                                                if (temp == 'Weekly') {
                                                    return (parseInt(v.slice(-2)) < 7)
                                                } else {
                                                    return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                                                }
                                            },
                                            formatter: (value, index) => {
                                                if (task == 'Weekly') {
                                                    return moment(value).format('MM-YYYY');
                                                } else {
                                                    return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                                                }
                                            },

                                        },
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
                                            // formatter: (value, index) => (value = numeral(value).format("0a")),
                                            formatter: (value, index) => {
                                                if (taskName == 'TrafficShare') {
                                                    return numeral(value).format("0a")
                                                } else if (taskName == 'AverageDuration') {
                                                    return numeral(value).format("00:00:00")
                                                } else if (taskName == 'PagesPerVisit') {
                                                    return numeral(value).format("0")
                                                } else {
                                                    return numeral(value).format("00%")
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
                                            name: 'Trực tiếp',
                                            data: (dataChart.values.Direct) ? dataChart.values.Direct : 0,
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        },
                                        {
                                            name: 'Mail',
                                            data: dataChart.values.Email,
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        },
                                        {
                                            name: 'Liên kết ngoài',
                                            data: dataChart.values.Referrals,
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        },
                                        {
                                            name: 'Mạng xã hội',
                                            data: dataChart.values.Social,
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        },
                                        {
                                            name: 'Tìm kiếm tự nhiên',
                                            data: dataChart.values.OrganicSearch,
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        },
                                        {
                                            name: 'Tìm kiếm trả phí',
                                            data: dataChart.values.PaidSearch,
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        },
                                        {
                                            name: 'Quảng cáo hiển thị',
                                            data: (dataChart.values.DisplayAds != 0) ? dataChart.values.DisplayAds : "NA",
                                            type: "line",
                                            // smooth: true,
                                            symbol: (temp == "Daily") ? "none" : "circle",
                                            symbolSize: 10,
                                            showSymbol: true,
                                            hoverAnimation: false,

                                        }
                                    ]
                                };
                                myChart.setOption(option);

                                new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function() {
                                    myChart.resize();
                                });

                                await $(`#${idDomain}getMarketingMixOverview--${taskName}`).removeClass('is-loading');
                                await $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                                await $(`#${idDomain}getMarketingMixOverview`).removeClass('empty-state');
                            }
                        } else {
                            $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                            $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                        }

                    }


                    run('TrafficShare', "Weekly");

                    $(`#getMarketingMixOverview a[data-toggle="tab"]`).on('shown.bs.tab', function(e) {


                        var taskName = $(e.target).data('task'); // activated tab 
                        let ele = document.getElementById(`${idDomain}getMarketingMixOverview--${taskName}`);
                        echarts.dispose(ele);


                        run(taskName, "Weekly");

                        //     $("#TimeChartMarket").html(""); 

                        //     $("#TimeChartMarket").html(`<fieldset>
                        //     <input id="setgetMarketingMixOverviewDaily" class="radio-inline__input" type="radio"
                        //         name="getMarketingMixOverview" value="setgetMarketingMixOverviewDaily" />
                        //     <label class="radio-inline__label" for="setgetMarketingMixOverviewDaily">
                        //         Ngày
                        //     </label>
                        //     <input id="setgetMarketingMixOverviewWeekly" class="radio-inline__input" type="radio"
                        //         name="getMarketingMixOverview" value="setgetMarketingMixOverviewWeekly"
                        //         checked="checked" />
                        //     <label class="radio-inline__label" for="setgetMarketingMixOverviewWeekly">
                        //         Tuần
                        //     </label>
                        //     <input id="setgetMarketingMixOverviewMonthly" class="radio-inline__input" type="radio"
                        //         name="getMarketingMixOverview" value="setgetMarketingMixOverviewMonthly" />
                        //     <label class="radio-inline__label" for="setgetMarketingMixOverviewMonthly">
                        //         Tháng
                        //     </label>
                        // </fieldset>`)


                        $("input[type=radio][name=getMarketingMixOverview]").change(function() {
                            let ele2 = document.getElementById(`${idDomain}getMarketingMixOverview--${taskName}`);
                            echarts.dispose(ele2);
                            if (this.value == "setgetMarketingMixOverviewDaily") {
                                run(taskName, "Daily");
                            } else if (this.value == "setgetMarketingMixOverviewWeekly") {
                                run(taskName, "Weekly");
                            } else
                                run(taskName, "Monthly");

                        })
                    });

                    $("input[type=radio][name=getMarketingMixOverview]").change(function() {

                        //alert(this.value); 

                        let ele = document.getElementById(`${idDomain}getMarketingMixOverview--TrafficShare`);
                        echarts.dispose(ele);
                        if (this.value == "setgetMarketingMixOverviewDaily") {
                            run("TrafficShare", "Daily");
                        } else if (this.value == "setgetMarketingMixOverviewWeekly") {
                            run("TrafficShare", "Weekly");
                        } else {
                            run("TrafficShare", "Monthly");
                        }
                    })
                } else {
                    $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                    $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
                }

            } else {
                $(`#${idDomain}getMarketingMixOverview`).removeClass('is-loading');
                $(`#${idDomain}getMarketingMixOverview`).addClass('empty-state');
            }

        } else {
            console.log(`${task} failed`);
        }
    }
}

const getTrafficSourcesTotalReferrals = async(task, data, domain1, domain2) => {
    let series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let idDomain1 = website[0].replace(/\./g, "")
            let idDomain2 = website[1].replace(/\./g, "")

            let dataChart = {
                keys: [],
                values: []
            };
            let idDomain = website[i].replace(/\./g, "")

            if (data[i] && data[i].data && data[i].data.data) {

                let {
                    Data
                } = data[i].data.data;

                let TrafficSourcesTotalReferrals = Data.dictionary[website[i]];

                let SearchTotal = TrafficSourcesTotalReferrals.SearchTotal;
                let VolumeTotal = TrafficSourcesTotalReferrals.VolumeTotal;

                let TotalTraffic = SearchTotal / VolumeTotal;

                $(`#${idDomain}TotalReferrals`).removeClass("is-loading");
                $(`#${idDomain}TotalReferrals`).html(`Tổng ${numeral(SearchTotal).format("0,0")}`);

                let dataChartPie = [{
                        name: "Từ giới thiệu",
                        value: SearchTotal
                    },
                    {
                        name: "Khác",
                        value: VolumeTotal - SearchTotal
                    }
                ]

                // render chart

                let elePie = document.getElementById(`${idDomain}getTotalReferrals`);

                let myChartPie = echarts.init(elePie);

                let optionPie = {
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] : ['#4b7bec', 'rgba(0,112,220,0.5)'],
                    legend: {
                        bottom: "-2%",
                        right: "30%",
                        // top: "0%",
                        // left: '10%',
                        // // formatter: function (name) {
                        // //     return name=="GDN"?"Google Display Network":name;
                        // // },
                        // itemWidth: 20,
                        // itemHeight: 14,
                        // width: 10
                    },
                    series: [{
                        type: 'pie',
                        legendHoverLink: false,
                        minAngle: 20,
                        radius: ["50%", "80%"],
                        center: ["50%", "45%"],
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
                        data: dataChartPie
                    }]
                };
                myChartPie.setOption(optionPie);


                new ResizeSensor($(`#${idDomain}getTotalSocialVisits`), function() {
                    myChartPie.resize();
                    setTimeout(function() {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChartPie.on('mouseover', function(params) {
                        if (params.name == dataChartPie[0].name) {
                            myChartPie.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        } else {
                            myChartPie.dispatchAction({
                                type: 'downplay',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        }
                    });

                    myChartPie.on('mouseout', function(params) {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain}getTotalReferrals`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                await $(`#${idDomain}getTotalReferrals`).removeClass('empty-state');


                let Dates = TrafficSourcesTotalReferrals.Dates;

                let Volumes = TrafficSourcesTotalReferrals.Volumes;
                $.each(Dates, (idx, val) => {
                    dataChart.keys.push(val);
                })

                $.each(Volumes, (name, data) => {
                    // console.log(data)
                    dataChart.values.push((data[0] == null) ? 0 : data[0]);
                })
                let temp = {}
                temp.name = website[i],
                    temp.data = (dataChart.values.length > 0) ? dataChart.values : [0, 0, 0],
                    temp.type = 'line',
                    temp.symbol = "circle",
                    temp.symbolSize = 10,
                    temp.showSymbol = true,
                    temp.hoverAnimation = false,
                    temp.lineStyle = {
                        normal: {
                            width: 2,
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    temp.itemStyle = {
                        normal: {
                            borderWidth: 10
                        }
                    }
                series.push(temp)
                if (i != 0) {
                    let ele = document.getElementById(`getReferralVisits`);

                    let myChart = echarts.init(ele, "light");

                    let option = {
                        tooltip: {
                            trigger: "axis",
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderColor: 'rgba(93,120,255,1)',
                            borderWidth: 1,
                            extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                            formatter: params => {
                                let {
                                    name
                                } = params[0];
                                let detail = "";
                                params.forEach((p, i) => {

                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = numeral(value).format("0,0");


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                    <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">${detail}`;

                            }
                        },
                        grid: {
                            right: "5%"
                        },
                        legend: {
                            data: website
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
                                formatter: (value, index) => (value = numeral(value).format("0a"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);
                    new ResizeSensor($(`#getReferralVisits`), function() {
                        myChart.resize();
                    });

                    await $(`#getReferralVisits`).removeClass('is-loading');
                    $(`#getReferralVisits`).removeClass('empty-state');
                }
            } else {
                if (dataChartDomain1.keys.length > 0 || dataChartDomain2.keys.length > 0) {
                    console.log(idDomain1)
                    let ele = document.getElementById(`getReferralVisits`);

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
                                let detail = "";
                                params.forEach((p, i) => {

                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = numeral(value).format("0,0");


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                    <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">${detail}`;

                            }
                        },
                        grid: {
                            right: "5%"
                        },
                        legend: {
                            data: [`${idDomain1}`, `${idDomain2}`]
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: false,
                            data: dataChartDomain1.keys,
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
                                formatter: (value, index) => (value = numeral(value).format("0a"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: [{
                                name: idDomain1,
                                data: dataChartDomain1.values,
                                type: 'line',
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
                                        color: "#57606f",
                                        borderColor: "rgb(44, 44, 84, 0.2)",
                                        borderWidth: 10
                                    }
                                }
                            }, {
                                name: idDomain2,
                                data: dataChartDomain2.values,
                                type: 'line',
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
                                        color: "#4b7bec",
                                        borderColor: "rgba(0,112,220,0.2)",
                                        borderWidth: 10
                                    }
                                }
                            },

                        ]
                    };
                    myChart.setOption(option);
                    new ResizeSensor($(`#getReferralVisits`), function() {
                        myChart.resize();
                    });

                    await $(`#getReferralVisits`).removeClass('is-loading');
                    $(`#getReferralVisits`).removeClass('empty-state');
                    $(`#${idDomain}getTotalReferralVisits`).parent().removeClass('empty-state');
                }
                $(`#getReferralVisits`).removeClass('is-loading');
                $(`#getReferralVisits`).addClass('empty-state');
                $(`#${idDomain}getTotalReferralVisits`).removeClass('is-loading');
                $(`#${idDomain}getTotalReferralVisits`).parent().addClass('empty-state');
            }

        } else {
            console.log(`${task} failed`);
        }
    }
}

const getTrafficSocial = async(task, data, domain1, domain2) => {
    let series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {

            let idDomain1 = website[0].replace(/\./g, "")
            let idDomain2 = website[1].replace(/\./g, "")
            let dataChart = {
                keys: [],
                values: []
            };
            if (data[i] && data[i].data && data[i].data.data) {

                let {
                    website: domain
                } = data[i].data;
                let idDomain = website[i].replace(/\./g, "")
                let TrafficSocial = data[i].data.data;

                let SearchTotal = TrafficSocial.SearchTotal;

                let VolumeTotal = TrafficSocial.VolumeTotal;

                let TotalDesktopTraffic = SearchTotal / VolumeTotal;

                $(`#${idDomain}TotalSocialVisits`).removeClass("is-loading");
                $(`#${idDomain}TotalSocialVisits`).html(`Tổng ${numeral(SearchTotal).format("0,0")}`);

                let dataChartPie = [{
                        name: "Mạng xã hội",
                        value: SearchTotal
                    },
                    {
                        name: "Khác",
                        value: VolumeTotal - SearchTotal
                    }
                ]

                // render chart

                let elePie = document.getElementById(`${idDomain}getTotalSocialVisits`);

                let myChartPie = echarts.init(elePie);

                let optionPie = {
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] : ['#4b7bec', 'rgba(0,112,220,0.5)'],
                    legend: {
                        bottom: "-2%",
                        right: "35%",
                        // top: "15%",
                        // left: '60%',
                        // // formatter: function (name) {
                        // //     return name=="GDN"?"Google Display Network":name;
                        // // },
                        // itemWidth: 20,
                        // itemHeight: 14,
                        // width: 10
                    },
                    series: [{
                        type: 'pie',
                        legendHoverLink: false,
                        minAngle: 20,
                        radius: ["50%", "80%"],
                        center: ["50%", "45%"],
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
                        data: dataChartPie
                    }]
                };
                myChartPie.setOption(optionPie);


                new ResizeSensor($(`#${idDomain}getTotalSocialVisits`), function() {
                    myChartPie.resize();
                    setTimeout(function() {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChartPie.on('mouseover', function(params) {
                        if (params.name == dataChartPie[0].name) {
                            myChartPie.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        } else {
                            myChartPie.dispatchAction({
                                type: 'downplay',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        }
                    });

                    myChartPie.on('mouseout', function(params) {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain}getTotalSocialVisits`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                await $(`#${idDomain}getTotalSocialVisits`).removeClass('empty-state');

                //
                let Dates = TrafficSocial.Dates;

                let Volumes = TrafficSocial.Volumes;
                $.each(Dates, (idx, val) => {
                    dataChart.keys.push(val);
                })

                $.each(Volumes, (name, value) => {
                    dataChart.values.push((value[0] == null) ? 0 : value[0]);
                })
                let temp = {}
                temp.name = website[i],
                    temp.data = (dataChart.values.length > 0) ? dataChart.values : [0, 0, 0],
                    temp.type = 'line',
                    temp.symbol = "circle",
                    temp.symbolSize = 10,
                    temp.showSymbol = true,
                    temp.hoverAnimation = false,
                    temp.lineStyle = {
                        normal: {
                            width: 2,
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    temp.itemStyle = {
                        normal: {
                            borderWidth: 10
                        }
                    }
                series.push(temp)
                if (i != 0) {
                    let ele = document.getElementById("getSocialVisits");

                    let myChart = echarts.init(ele, "light");

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
                                let detail = "";
                                params.forEach((p, i) => {

                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = numeral(value).format("0,0");


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                    <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        legend: {
                            data: [`${idDomain1}`, `${idDomain2}`]
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
                                formatter: (value, index) => (value = numeral(value).format("0a"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);
                    new ResizeSensor($(`#getSocialVisits`), function() {
                        myChart.resize();
                    });

                    await $(`#getSocialVisits`).removeClass('is-loading');
                    $(`#getSocialVisits`).removeClass('empty-state');
                    $(`#getTotalSocialVisits`).parent().removeClass('empty-state');
                }
            } else {
                $(`#getSocialVisits`).removeClass('is-loading');
                $(`#getSocialVisits`).addClass('empty-state');
                $(`#getTotalSocialVisits`).removeClass('is-loading');
                $(`#getTotalSocialVisits`).parent().addClass('empty-state');

            }


        } else {
            console.log(`${task} failed`);
        }
    }
}

const getWebDemographicsAge = async(task, data, domain1, domain2) => {
    let series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let dataChart = {
                keys: [],
                values: []
            };
            if (data[i] && data[i].data) {
                let {
                    data: traffic
                } = data[i].data;
                $.each(traffic, (index, item) => {
                        if (item == null) {
                            temp = false;
                        }
                    })
                    // prepare data
                $.each(traffic, (index, item) => {
                    let key, value;
                    switch (index) {
                        case 'Age18To24':
                            key = '18 - 24';
                            break;
                        case 'Age25To34':
                            key = '25 - 34';
                            break;
                        case 'Age35To44':
                            key = '35 - 44';
                            break;
                        case 'Age45To54':
                            key = '45 - 54';
                            break;
                        case 'Age55To64':
                            key = '55 - 64';
                            break;
                        default:
                            key = '65 trở lên';
                            break;
                    }
                    value = numeral(item).format("0.0");
                    dataChart.keys.push(key);
                    dataChart.values.push((value == null) ? 0 : value);
                });

                let tem = {}
                tem.name = website[i],
                    tem.data = dataChart.values,
                    tem.type = "line",
                    // smooth = true,
                    tem.symbol = "circle",
                    tem.symbolSize = 10,
                    tem.showSymbol = true,
                    tem.hoverAnimation = false,
                    series.push(tem)
                    // render chart

                if (i != 0) {

                    let ele = document.getElementById(task);

                    let myChart = echarts.init(ele, "light");

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
                                let detail = "";
                                params.forEach((p, i) => {

                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = value + '%';


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                        <br/>`
                                })
                                name = "Độ tuổi từ " + name;
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        legend: {
                            data: [`${domain1}`, `${domain2}`]
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
                            },
                            axisPointer: {
                                lineStyle: {
                                    color: "rgb(25, 123, 251)",
                                    type: "dashed"
                                }
                            },
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
                                formatter: (value, index) => (value = value + '%')
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function() {
                        myChart.resize();
                    });

                    await $(`#${task}`).removeClass('is-loading');
                    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');

                }

            } else {
                if (i != 0) {
                    $(`#${task}`).removeClass('is-loading');
                    $(`#${task}`).addClass('empty-state');
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getTrafficSourcesOverview = async(task, data) => {
    let series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let dataChart = {
                keys: [],
                values: []
            };
            let {
                data: traffic
            } = data[i].data;

            // prepare data
            $.each(traffic, (index, item) => {
                let key = index;
                let value = numeral(item).format("0");
                if (key == "Organic Search") {
                    dataChart.keys[0] = "Tìm kiếm tự nhiên";
                    dataChart.values[0] = value;
                }

                if (key == "Paid Search") {
                    dataChart.keys[1] = "Tìm kiếm trả phí";
                    dataChart.values[1] = value;
                }

                if (key == "Paid Referrals") {
                    dataChart.keys[2] = "Quảng cáo hiển thị";
                    dataChart.values[2] = value;
                }

                if (key == "Social") {
                    dataChart.keys[3] = "Mạng xã hội";
                    dataChart.values[3] = value;
                }

                if (key == "Referrals") {
                    dataChart.keys[4] = "Liên kết ngoài";
                    dataChart.values[4] = value;
                }

                if (key == "Mail") {
                    dataChart.keys[5] = "Mail";
                    dataChart.values[5] = value;
                }

                if (key == "Direct") {
                    dataChart.keys[6] = "Trực tiếp";
                    dataChart.values[6] = value;
                }

            });
            // render chart
            let temp = {}
            temp.name = website[i],
                temp.type = 'bar',
                temp.barWidth = 60,
                temp.data = dataChart.values,
                temp.itemStyle = {
                    normal: {
                        // color: "#57606f",
                        // color: function (params) {
                        //     var num = customColors.length;
                        //     return customColors[params.dataIndex % num]
                        // },
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function(p) {
                                return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                            }
                        }
                    }
                }
            series.push(temp)
            if (i != 0) {
                let ele = document.getElementById(task);

                let myChart = echarts.init(ele);

                let option = {
                    color: customColors,
                    tooltip: {
                        trigger: 'axis',
                        textStyle: {
                            fontFamily: 'Arial',
                        },
                        axisPointer: {
                            type: 'shadow',
                            shadowStyle: {
                                color: 'rgba(0,0,0,.05)'
                            }
                        }
                    },
                    legend: {
                        data: [`${domain1}`, `${domain2}`]
                    },
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: dataChart.keys,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(0,0,0,0.05)'
                            }
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#666',
                            fontFamily: 'Arial',
                            interval: 0,
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                        axisLabel: {
                            show: false,
                            formatter: (value, index) => (value = numeral(value).format("0a")),
                            fontFamily: 'Arial'
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    series: series
                };
                myChart.setOption(option);


                new ResizeSensor($(`#${task}`), function() {
                    myChart.resize();
                });

                await $(`#${task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getWebDemographicsGender = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[0].status == "success" && data[1].status == "success") {

            let idDomain1 = domain1.replace(/\./g, "")

            let idDomain2 = domain2.replace(/\./g, "")


            if (data[i] && data[i].data) {
                let {
                    data: visits,
                } = data[i].data;

                let idDomain = website[i].replace(/\./g, "")

                // prepare data

                const {
                    Male,
                    Female
                } = visits;

                if (Male && Female) {
                    let dataChart = [{
                            name: 'Nam',
                            value: Male
                        },
                        {
                            name: 'Nữ',
                            value: Female
                        }
                    ];

                    // render chart 
                    let ele = document.getElementById(idDomain + task);

                    let myChart = echarts.init(ele);

                    let option = {
                        color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] : ['#4b7bec', 'rgba(0,112,220,0.5)'],
                        legend: {
                            top: "30%",
                            left: '65%',
                            data: ['Nam', 'Nữ'],
                            itemWidth: 20,
                            itemHeight: 14,
                            width: 10,
                            textStyle: {
                                fontFamily: 'Arial',
                            },
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


                    new ResizeSensor($(`#${idDomain + task}`), function() {
                        myChart.resize();
                        setTimeout(function() {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        }, 1000);
                    });

                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });

                        myChart.on('mouseover', function(params) {
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

                        myChart.on('mouseout', function(params) {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 0,
                                dataIndex: 0
                            });
                        });
                    }, 1000);

                    await $(`#${idDomain + task}`).removeClass('is-loading');
                    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');

                    // Start counting, do this on DOM ready or with Waypoints.
                    // counterUp(counter, {
                    //     duration: 1000,
                    //     delay: 16,
                    // })
                } else {
                    if (i == 0) {
                        $(`#${idDomain + task}`).removeClass('is-loading');
                        $(`#${idDomain + task}`).addClass('empty-state');
                    } else {
                        $(`#${idDomain + task}`).removeClass('is-loading');
                        $(`#${idDomain + task}`).addClass('empty-state');
                    }
                }

            } else {
                if (i == 0) {
                    $(`#${idDomain1 + task}`).removeClass('is-loading');
                    $(`#${idDomain1 + task}`).addClass('empty-state');
                } else {
                    $(`#${idDomain2 + task}`).removeClass('is-loading');
                    $(`#${idDomain2+ task}`).addClass('empty-state');
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getDesktopVsMobileVisits = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: visits
            } = data[i].data;

            let idDomain = website[i].replace(/\./g, "")
                // prepare data
            const {
                percentDesktop,
                percentMobile,
                totalDesktop,
                totalMobile,
                totalTraffic
            } = visits;
            if (percentDesktop == 0 && percentMobile == 0 && totalDesktop == 0 && totalMobile == 0 && totalTraffic == 0) {
                await $(`#${task}, #totalTraffic`).removeClass('is-loading').addClass("empty-state");
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
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
                let ele = document.getElementById(idDomain + task);

                let myChart = echarts.init(ele);

                let option = {
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] : ['#4b7bec', 'rgba(0,112,220,0.5)'],
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
                        formatter: function(name) {
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


                new ResizeSensor($(`#${idDomain + task}`), function() {
                    myChart.resize();
                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
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

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain + task}, #totalTraffic`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                $(`.${idDomain} #totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getSearchBrandedKeywords = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[0].status == "success" && data[1].status == "success") {
            let idDomain1 = domain1.replace(/\./g, "");
            let idDomain2 = domain2.replace(/\./g, "");
            if (data[i] && data[i].data) {
                let {
                    data: visits,
                } = data[i].data;

                let idDomain = website[i].replace(/\./g, "");

                // prepare data

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

                let ele = document.getElementById(idDomain + task);

                let myChart = echarts.init(ele);

                let option = {
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] : ['#4b7bec', 'rgba(0,112,220,0.5)'],
                    legend: {
                        top: "25%",
                        left: '60%',
                        data: ['Có thương hiệu', 'Không thương hiệu'],
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
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


                new ResizeSensor($(`#${idDomain + task}`), function() {
                    myChart.resize();
                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
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

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain + task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                if (i == 0) {
                    $(`#${idDomain1 + task}`).removeClass('is-loading');
                    $(`#${idDomain1 + task}`).addClass('empty-state');
                } else {
                    $(`#${idDomain2 + task}`).removeClass('is-loading');
                    $(`#${idDomain2+ task}`).addClass('empty-state');
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getTrafficSourcesSearch = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let {
                data: traffic
            } = data[i].data;
            let temp = true;

            let idDomain = website[i].replace(/\./g, "");
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

            if (!temp) {
                await $(`#${idDomain+task}`).removeClass('is-loading').addClass('empty-state');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {

                let dataChart = [];

                $.each(traffic, (index, value) => {
                    let item = {
                        value: value,
                        name: index == "Organic" ? "Tự nhiên" : "Trả phí"
                    };
                    dataChart.push(item);
                });

                // render chart

                let ele = document.getElementById(idDomain + task);

                let myChart = echarts.init(ele);

                let option = {
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] : ['#4b7bec', 'rgba(0,112,220,0.5)'],
                    legend: {
                        top: "20%",
                        left: '60%',
                        // formatter: function (name) {
                        //     return name=="GDN"?"Google Display Network":name;
                        // },
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
                        textStyle: {
                            fontFamily: 'Arial',
                        },
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


                new ResizeSensor($(`#${idDomain+task}`), function() {
                    myChart.resize();
                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
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

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain+task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getTrafficDisplayAdvertisingAds = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {

            let idDomain1 = domain1.replace(/\./g, "");

            let idDomain2 = domain2.replace(/\./g, "");

            $(`#${idDomain1 + task}`).removeClass('is-loading');
            $(`#${idDomain1 + task}`).removeClass('empty-state');

            $(`#${idDomain2 + task}`).removeClass('is-loading');
            $(`#${idDomain2 + task}`).removeClass('empty-state');

            let temp = 0;
            if (data[i] && data[i].data) {
                let {
                    data: traffic,
                } = data[i].data;

                let idDomain = website[i].replace(/\./g, "");
                // prepare data

                let dataChart = [];

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

                let ele = document.getElementById(idDomain + task);

                let myChart = echarts.init(ele);

                let option = {
                    color: customColors,
                    legend: {
                        top: "15%",
                        left: '60%',
                        // formatter: function (name) {
                        //     return name=="GDN"?"Google Display Network":name;
                        // },
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10
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


                new ResizeSensor($(`#${idDomain + task}`), function() {
                    myChart.resize();
                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
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

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain + task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                temp++;
                if (i == 0) {
                    $(`#${idDomain1 + task}`).addClass('empty-state');
                } else {
                    $(`#${idDomain2+ task}`).addClass('empty-state');
                }

                if (temp == 2) {
                    $(".getTrafficDisplayAdvertisingAds").addClass("d-none");
                }
            }

        } else {
            console.log(`${task} failed`);
        }
    }
};

const getTrafficSourcesSocial = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[0].status == "success" && data[1].status == "success") {

            let idDomain1 = domain1.replace(/\./g, "");

            let idDomain2 = domain2.replace(/\./g, "");
            if (data[i] && data[i].data) {
                let {
                    data: traffic,
                } = data[i].data;

                let idDomain = website[i].replace(/\./g, "");

                // prepare data

                let dataChart = [];

                let others = 0;

                let legend = [];

                let colors = [];

                $.each(traffic, (index, visit) => {
                    others += visit.Share;
                    let icon = {
                        name: index,
                        icon: 'image://' + visit.Favicon,
                    }
                    legend.push(icon);
                    let item = {
                        value: visit.Share,
                        name: index
                    };
                    dataChart.push(item);
                    switch (index) {
                        case 'Facebook':
                            colors.push('#0984e3');
                            break;
                        case 'Youtube':
                            colors.push('#eb2f06');
                            break;
                        case 'Pinterest':
                            colors.push('#e74c3c');
                            break;
                        case 'Reddit':
                            colors.push('#e67e22');
                            break;
                        case 'Twitter':
                            colors.push('#74b9ff');
                            break;
                        case 'VKontakte':
                            colors.push('#6a89cc');
                            break;
                        case 'Stack Exchange':
                            colors.push('#6a89cc');
                            break;
                        case 'WhatsApp Webapp':
                            colors.push('#2ecc71');
                            break;
                        case 'Stack Overflow':
                            colors.push('#f1c40f');
                            break;
                        case 'Instagram':
                            colors.push('#9b59b6');
                            break;
                        default:
                            colors.push('#7f8c8d');
                            break;
                    }
                });

                if (others < 1) {
                    let itemOther = {
                        value: (1 - others),
                        name: 'Khác'
                    };
                    dataChart.push(itemOther);
                    legend.push('Khác');
                    colors.push('#95a5a6');
                }

                // render chart 
                let ele = document.getElementById(idDomain + task);

                let myChart = echarts.init(ele);

                let option = {
                    color: colors,
                    legend: {
                        top: "15%",
                        left: '60%',
                        width: 10,
                        data: legend,
                        itemWidth: 14,
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


                new ResizeSensor($(`#${idDomain + task}`), function() {
                    myChart.resize();
                    setTimeout(function() {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChart.on('mouseover', function(params) {
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

                    myChart.on('mouseout', function(params) {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    });
                }, 1000);

                await $(`#${idDomain + task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                if (i == 0) {
                    $(`#${idDomain1 + task}`).removeClass("is-loading");
                    $(`#${idDomain1 + task}`).addClass("empty-state");
                } else {
                    $(`#${idDomain2 + task}`).removeClass("is-loading");
                    $(`#${idDomain2 + task}`).addClass("empty-state");
                }
            }

        } else {
            console.log(`${task} failed`);
        }
    }
};

const getTrafficDisplayPaidOutgoingAds = async(task, data) => {
    let series = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let dataChart = {
                keys: [],
                values: []
            };
            let temp = 0; // check null all
            let idDomain = website[i].replace(/\./g, "");
            if (data[i] && data[i].data && data[i].data.data) {
                let TrafficDisplayPaidOutgoingAds = data[i].data.data;
                let VolumeTotal = TrafficDisplayPaidOutgoingAds.VolumeTotal;
                $(`#${idDomain}getTotalOutgoingAdVisits`).removeClass("is-loading");
                $(`#${idDomain}getTotalOutgoingAdVisits`).html(`${numeral(VolumeTotal).format("0,0")}`);
                let Dates = TrafficDisplayPaidOutgoingAds.Dates;
                let Volumes = TrafficDisplayPaidOutgoingAds.Volumes;

                $.each(Dates, (idx, val) => {
                    dataChart.keys.push(val);
                })
                $.each(Volumes, (name, data) => {
                    dataChart.values.push(data[1]);
                })
                let tem = {}
                tem.name = website[i],
                    tem.data = (dataChart.values.length > 0) ? dataChart.values : [0, 0, 0],
                    tem.type = 'line',
                    tem.symbol = "circle",
                    tem.symbolSize = 10,
                    tem.showSymbol = true,
                    tem.hoverAnimation = false,
                    series.push(tem)
                if (i == (data.length - 1)) {
                    let ele = document.getElementById("getOutgoingAds");
                    let myChart = echarts.init(ele, "light");
                    let option = {
                        tooltip: {
                            trigger: "axis",
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderColor: 'rgba(93,120,255,1)',
                            borderWidth: 1,
                            extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                            formatter: params => {
                                let {
                                    name
                                } = params[0];
                                let detail = "";
                                params.forEach((p, i) => {

                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    value = numeral(value).format("0,0");


                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                    <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        grid: {
                            right: "5%"
                        },
                        legend: {
                            data: [`${domain1}`, `${domain2}`]
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
                                formatter: (value, index) => (value = numeral(value).format("0a"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: series
                    };
                    myChart.setOption(option);
                    new ResizeSensor($(`#getOutgoingAds`), function() {
                        myChart.resize();
                    });
                    await $(`#getOutgoingAds`).removeClass('is-loading');
                    $(`#getOutgoingAds`).removeClass('empty-state');
                }
            } else {
                $(`#getOutgoingAds`).removeClass('is-loading');
                $(`#getOutgoingAds`).addClass('empty-state');
                $(`#${idDomain}getTotalOutgoingAdVisits`).removeClass('is-loading');
                $(`#${idDomain}getTotalOutgoingAdVisits`).parent().addClass('empty-state');

                temp++;

                if (temp == 2) {
                    $(`.getTotalOutgoingAdVisits`).addClass("d-none");
                    $(`.getOutgoingAds`).addClass("d-none");
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
}

const deduplicate = arr => {

    let isExist = (arr, x) => arr.includes(x);
    let ans = [];

    arr.forEach(element => {
        if (!isExist(ans, element)) ans.push(element);
    });

    return ans;
}

const getWebsiteGeography = async(task, data) => {
    let dataChart = [];

    for (let i = 0; i < data.length; i++) {

        let others = 0;
        let {
            data: WebsiteGeography,
            website: domain
        } = data[i].data;
        let temp = WebsiteGeography;


        $.each(temp, (index, val) => {
            if (val.Country) {
                others += val.Share;

                let data = {
                    value: val.Share,
                    name: val.Country.text,

                };
                dataChart.push(data);
            }
        })

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

        let idDomain = website[i].replace(/\./g, "");

        let ele = document.getElementById(`${idDomain}getWebsiteGeography`);

        let myChart = echarts.init(ele);

        let option = {
            color: customColors,
            legend: {
                top: "0%",
                left: '60%',
                // formatter: function (name) {
                //     return name=="GDN"?"Google Display Network":name;
                // },
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
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
        new ResizeSensor($(`#${idDomain}getWebsiteGeography`), function() {
            myChart.resize();
            setTimeout(function() {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });

        setTimeout(function() {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });

            myChart.on('mouseover', function(params) {
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

            myChart.on('mouseout', function(params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
        }, 1000);

        await $(`#${idDomain}getWebsiteGeography`).removeClass('is-loading');
        $(`#${idDomain}getWebsiteGeography`).removeClass('empty-state');
    }
}

const getSearchOrganicPaidOverview = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {
            let idDomain = website[i].replace(/\./g, "");
            if (data[i] && data[i].data) {
                let {
                    TrafficShare,
                    AverageDuration,
                    PagesPerVisit,
                    BounceRate
                } = data[i].data.data[website[i]];
                const run = async taskName => {
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

                    // prepare data

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


                    $.each(BreakDown, (idx, val) => {

                        keys.push(idx);

                        $.each(val, (name, data) => {
                            (name == 'Organic Search') ?
                            values.Organic.push(data):
                                values.Paid.push(data)
                        })

                    })

                    $(`#${task}--totalTraffic`).html('');
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
                        $(`#${task}--totalTraffic`).append(`
                        <div class="d-flex no-block flex-column mb-4 pl-5">
                            <span class="text-muted">${title}</span>
                            <span class="display-6" style="color:${color}">${val}</span>
                        </div>
                        `)
                    })

                    dataChart.keys = keys;
                    dataChart.values = values;

                    // render chart

                    var id = task + '--' + taskName;
                    let ele = document.getElementById(idDomain + id);

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
                                let detail = "";
                                let format = "";
                                params.forEach((p, i) => {
                                    let {
                                        marker,
                                        color,
                                        seriesName,
                                        value
                                    } = p;

                                    switch (taskName) {
                                        case 'TrafficShare':
                                            format = "0,0";
                                            break;
                                        case 'AverageDuration':
                                            format = "00:00:00";
                                            break;
                                        case 'PagesPerVisit':
                                            format = "0'";
                                            break;
                                        case 'BounceRate':
                                            format = "0.00%";
                                            break;
                                        default:
                                            break;
                                    }
                                    value = numeral(value).format(format);

                                    detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span>
                                        <br/>`
                                })
                                name = moment(name).format('DD MMMM YYYY');
                                return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                                <div class="text-dark pt-2">${detail}</div>`;

                            }
                        },
                        legend: {
                            data: ["Tìm kiếm tự nhiên", "Tìm kiếm trả phí"]
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
                                        color: "#57606f",
                                        borderColor: "rgba(44, 44, 84, 0.2)",
                                        borderWidth: 10
                                    }
                                }
                                // lineStyle: {
                                //   normal: {
                                //     width: 1
                                //   }
                                // },
                                // areaStyle: {
                                //   normal: {
                                //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                //       offset: 0,
                                //       color: 'rgba(0, 136, 212, 0.3)'
                                //     }, {
                                //       offset: 0.8,
                                //       color: 'rgba(0, 136, 212, 0)'
                                //     }], false),
                                //     shadowColor: 'rgba(0, 0, 0, 0.1)',
                                //     shadowBlur: 10
                                //   }
                                // },
                                // itemStyle: {
                                //   normal: {
                                //     color: 'rgb(0,136,212)',
                                //     borderColor: 'rgba(0,136,212,0.2)',
                                //     borderWidth: 12

                                //   }
                                // },
                            },
                            {
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
                                        color: "#4b7bec",
                                        borderColor: "rgba(0,112,220,0.2)",
                                        borderWidth: 10
                                    }
                                }
                                // lineStyle: {
                                //   normal: {
                                //     width: 1
                                //   }
                                // },
                                // areaStyle: {
                                //   normal: {
                                //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                //       offset: 0,
                                //       color: 'rgba(0, 136, 212, 0.3)'
                                //     }, {
                                //       offset: 0.8,
                                //       color: 'rgba(0, 136, 212, 0)'
                                //     }], false),
                                //     shadowColor: 'rgba(0, 0, 0, 0.1)',
                                //     shadowBlur: 10
                                //   }
                                // },
                                // itemStyle: {
                                //   normal: {
                                //     color: 'rgb(0,136,212)',
                                //     borderColor: 'rgba(0,136,212,0.2)',
                                //     borderWidth: 12

                                //   }
                                // },
                            }
                        ]
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function() {
                        myChart.resize();
                    });

                    await $(`#${idDomain + id}`).removeClass('is-loading');
                    await $(`#${idDomain + id}`).removeClass('empty-state');
                }


                run('TrafficShare');

                $('#getSearchOrganicPaidOverview a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                    var taskName = $(e.target).data('task'); // activated tab 
                    run(taskName);
                });

                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                if (i == 0) {
                    $(`#${idDomain + id}`).removeClass('is-loading');
                    $(`#${idDomain + id}`).addClass('empty-state');
                } else {
                    $(`#${idDomain + id}`).removeClass('is-loading');
                    $(`#${idDomain + id}`).addClass('empty-state');
                }
            }
        } else {
            console.log(`${task} failed`);
        }
    }
};

const getWebsiteAdsIntelDisplay = async(task, data, domain1, domain2) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {

            let idDomain1 = domain1.replace(/\./g, "");

            let idDomain2 = domain2.replace(/\./g, "");

            $(`#${idDomain1 + task} .carousel-inner`).removeClass('is-loading');
            $(`#${idDomain1 + task} .carousel-inner `).removeClass('empty-state');

            $(`#${idDomain2 + task} .carousel-inner`).removeClass('is-loading');
            $(`#${idDomain2 + task} .carousel-inner `).removeClass('empty-state');

            let temp = 0;

            if (data && data[i].data) {
                let {
                    data: WebsiteAdsIntelDisplay,
                } = data[i].data;

                let idDomain = website[i].replace(/\./g, "");

                $(`#${idDomain + task} .carousel-inner`).html('');
                $(`#${idDomain + task} .carousel-indicators`).html('');

                await $.each(WebsiteAdsIntelDisplay, (index, value) => {
                    let {
                        ActiveDays: activeDay,
                        CampaignTitle,
                        CampaignUrl,
                        FirstDetected: firstSeen,
                        HasPermission,
                        Height,
                        LastDetected: lastSeen,
                        Url,
                        UrlVideo,
                        VideoDuration,
                        Width
                    } = value;

                    // console.log('getWebsiteAdsIntelDisplay video: ', UrlVideo, VideoDuration);

                    (CampaignTitle != 'No title') ?
                    CampaignTitle = `<div class="text-truncate"><div class="font-10 text-muted">Tên chiến dịch</div><span title="${CampaignTitle}">${CampaignTitle}</span></div>`:
                        CampaignTitle = ''

                    if (index < 5) {
                        $(`#${idDomain + task} .carousel-indicators`).append(`
                    <li data-target="#${idDomain+ task}" data-slide-to="${index}" class="my-0 border-0 bg-favorite text-white text-center rounded-circle ${index == 0 ? 'active' : ''}" style="width:20px;height:20px;text-indent:0;">${index + 1}</li>
                    `);
                    }
                    $(`#${idDomain + task} .carousel-inner`).append(`
                <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                    <div class="similarAdsTile border rounded">
                    <div class="similarImgAndLink bg-secondary">
                        <div class="similarImg p-10">
                        <span class="d-flex no-block justify-content-center w-100" style="height:140px">
                            <img class="img-responsive align-self-center cursor-pointer shadow mh-100" src="${Url}" />
                        </span>
                        </div>
                        <a target="_blank" href="${CampaignUrl}" title="${CampaignUrl}" class="d-flex flex-row justify-content-center">
                        <span class="d-block mw-100 ml-5 text-truncate">${CampaignUrl}</span>
                        <i class="fal fa-external-link ml-1 mr-5 pt-1"></i>
                        </a>
                    </div>
                    <div class="similarAdsDetails p-20 border-top">
                        ${CampaignTitle}
                        <div class="row">
                        <div class="col text-muted font-10">Ngày bắt đầu</div>
                        <div class="col text-muted font-10">Ngày kết thúc</div>
                        <div class="col text-muted font-10">Số ngày hoạt động</div>
                        <div class="col text-muted font-10">Kích thước</div>
                        </div>
                        <div class="row">
                        <div class="col">${moment(firstSeen).format('DD-MM-YYYY')}</div>
                        <div class="col">${moment(lastSeen).format('DD-MM-YYYY')}</div>
                        <div class="col">${activeDay}</div>
                        <div class="col">${Width}x${Height}</div>
                        </div>
                    </div>
                    </div>
                </div>
                `);
                });

                await $(`#${idDomain + task} .carousel-inner`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${idDomain + task}"]`).find('i').removeClass('fa-spin');
            } else {
                temp++;
                if (i == 0) {
                    $(`#${idDomain1 + task} .carousel-inner `).addClass('empty-state');
                } else {
                    $(`#${idDomain2 + task} .carousel-inner `).addClass('empty-state');
                }


                if (temp == 2) {
                    $("#getWebsiteAdsIntelDisplay").addClass("d-none");
                }
            }

        } else {
            console.log(`${task} failed`);
        }
    }
};

const getScrapedSearchAds = async(task, data, domain1, domain2) => {
    // console.log(data)
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "success") {

            let idDomain1 = domain1.replace(/\./g, "");

            let idDomain2 = domain2.replace(/\./g, "");

            $(`#${idDomain1 + task} .carousel-inner`).removeClass('is-loading');
            $(`#${idDomain1 + task} .carousel-inner `).removeClass('empty-state');

            $(`#${idDomain2 + task} .carousel-inner`).removeClass('is-loading');
            $(`#${idDomain2 + task} .carousel-inner `).removeClass('empty-state');

            let temp = 0;
            if (data[i] && data[i].data) {

                let {
                    data: SearchAds,
                } = data[i].data;

                let idDomain = website[i].replace(/\./g, "");

                $(`#${idDomain + task} .carousel-inner`).html('');
                $(`#${idDomain + task} .carousel-indicators`).html('');
                // console.log(SearchAds)
                $.each((SearchAds) ? SearchAds : SearchAds[`${website[i]}`], (index, value) => {
                    // console.log(value)
                    if (index < 5) {
                        $(`#${idDomain + task} .carousel-indicators`).append(`
                    <li data-target="#${idDomain + task}" data-slide-to="${index}" class="my-0 border-0 bg-favorite text-white text-center rounded-circle ${index == 0 ? 'active' : ''}" style="width:20px;height:20px;text-indent:0;">${index + 1}</li>
                    `);
                    }
                    let {
                        Type
                    } = value;
                    let carouselItem = '';
                    if (Type == "Text") {
                        let {
                            Description,
                            DestUrl,
                            FullPage,
                            Keywords,
                            NumberOfKeywords,
                            Page,
                            Position,
                            Title,
                        } = value;

                        if (index < 5) {

                            Page = Page || FullPage;
                            (Description != '') ? Description = '<div class="text-muted">' + Description + '</div>': null;

                            carouselItem = `
                        <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                        <div class="similarAdsText border rounded">
                            <div class="d-flex no-block align-items-center justify-content-center bg-secondary p-10" style="height:185px">
                            <div class="border bg-white shadow p-10 w-100">
                                <a href="javascript:;" target="_blank" title="${DestUrl}">
                                ${Title}
                                </a>
                                ${Page != '' ? '<div class="text-success text-truncate pb-0">' + Page + '</div>' : ''}
                                ${Description}
                            </div>
                            </div>
                            <div class="similarAdsDetails p-20 border-top">
                            <div class="row">
                                <div class="col text-muted font-10">Vị trí trung bình</div>
                                <div class="col text-muted font-10">Số lượng từ khoá</div>
                                <div class="col text-muted font-10">Website đích</div>
                            </div>
                            <div class="row">
                                <div class="col">${numeral(Position).format('0')}</div>
                                <div class="col">${NumberOfKeywords}</div>
                                <div class="col text-truncate pb-0">${DestUrl == '' ? domain : DestUrl}</div>
                            </div>
                            <div class="mt-3 text-truncate pb-0"><div class="font-10 text-muted">Từ khoá</div>${Keywords.join(',')}</div>
                            </div>
                        </div>
                        </div>
                        `
                        }
                    } else {
                        // Google shopping
                        let {
                            Brand,
                            DestUrl,
                            ImageUrl,
                            Keywords,
                            NumberOfKeywords,
                            Position,
                            Price,
                            Title,
                        } = value;

                        if (index < 5) {
                            DestUrl == '' ? DestUrl = domain : null;

                            carouselItem = `
                    <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                        <div class="similarAdsShopping border rounded">
                        <div class="row">
                            <div class="col-5">
                            <div class="d-flex no-block flex-column bg-favorite-2 h-100 align-items-center justify-content-center px-4">
                                <div class="w-100 border rounded bg-secondary shadow">
                                <img width="121px" height="121px" class="d-flex no-block img-responsive align-self-center mh-100 my-2 mx-auto shadow" src="${ImageUrl.replace(/\\x3d/g, '')}" />
                                <div class="p-10 border-top bg-white rounded-bottom">
                                    <a href="javascript:;" target="_blank" title="${DestUrl}">
                                    ${Title}
                                    </a>
                                    <div class="font-weight-bold">${Price}</div>
                                    <div class="text-success">${Brand}</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-7 p-10">
                            <div class="row">
                                <div class="col text-muted font-10">Vị trí trung bình</div>
                                <div class="col text-muted font-10">Số lượng từ khoá</div>
                            </div>
                            <div class="row">
                                <div class="col">${numeral(Position).format('0')}</div>
                                <div class="col">${NumberOfKeywords}</div>
                            </div>
                            <div class="row mt-2">
                                <div class="col text-muted font-10">Website đích</div>
                            </div>
                            <div class="row">
                                <div class="col text-truncate"><a target="_blank" href="${DestUrl}" title="${DestUrl}">${DestUrl} <i class="fal fa-external-link ml-auto"></i></a></div>
                            </div>
                            <div class="row">
                                <div class="col text-muted font-10">Từ khoá</div>
                            </div>
                            <div class="row">
                                <div class="col"><div class="position-relative p-r-10 w-100 keywords-list" style="height:190px;word-wrap:break-word;">${Keywords.join(', ')}</div></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    `
                        }
                    }
                    $(`#${idDomain + task} .carousel-inner`).append(carouselItem);
                });

                $('.keywords-list').perfectScrollbar();

                await $(`#${idDomain + task} .carousel-inner`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                temp++;
                if (i == 0) {
                    $(`#${idDomain1 + task} .carousel-inner `).addClass('empty-state');
                } else {
                    $(`#${idDomain2 + task} .carousel-inner `).addClass('empty-state');
                }


                if (temp == 2) {
                    $("#getScrapedSearchAds").addClass("d-none");
                }
            }

        } else {
            console.log(`${task} failed`);
        }
    }
};

const getSimilarSites = async(task, data, domain1) => {
    if (data[0] && data[0].data) {
        $(`#${task}`).html('');
        let {
            data: SimilarSites
        } = data[0].data;

        let domain2;
        $.each(SimilarSites, (index, site) => {
            if ((index % 7) == 0) {
                $(`#${task}`).append('<div class="similarSites col-12 col-md-4"></div>')
            }
            var compareNode = $(`<span data-domain="${site.Domain}"  class="changeWebSite text-primary bg-info-2 rounded-pill px-2 font-10 align-self-center ml-auto text-uppercase">+ so sánh</span>`);
            $(`<a title="${site.Domain}" class="d-flex align-items-center"  href='?view=traffic-website&action=result&domain=${site.Domain}'">
                <img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}" />
                <span class="changeURL" data-type="website" data-input="${site.Domain}">${site.Domain}</span>
            </a>`).appendTo(`#${task} .similarSites:last-child`)
                .append(compareNode);
            compareNode.click(function(e) {
                e.preventDefault();
                domain2 = $(this).data('domain');

            });
        })

        // Popup nhap website
        const getDomain = async() => {
            const result = await Swal.fire({
                title: 'Hãy nhập website để so sánh',
                html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${domain1} placeholder="Nhập website của bạn">` +
                    `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                    `<input id="swal-input2" class="swal2-input text-lowercase" value=${domain2} placeholder="Nhập website của đối thủ">`,
                focusConfirm: false,
                showCloseButton: true,
                confirmButtonText: 'So Sánh',
                width: 600,
                padding: '4em',
                position: 'bottom',
                // customClass: {
                //     container: "pb-6"
                // },
                onOpen: () => {
                    $('#swal-input2').focus()
                    $('#swal-input2').keypress(event => {
                        if (event.which == 13) {
                            $('.swal2-confirm').click();
                        }
                    })
                },
                preConfirm: () => {
                    if (document.getElementById('swal-input1').value == "" || document.getElementById('swal-input2').value == "") {
                        Swal.showValidationMessage(
                            `Vui lòng nhập đủ website`
                        )
                    } else {
                        if (document.getElementById('swal-input1').value == document.getElementById('swal-input2').value) {
                            Swal.showValidationMessage(
                                `Hai website không được trùng`
                            )
                        }
                    }

                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value
                    ]
                }
            })
            if (result.dismiss == undefined) {
                return result;
            }

        };

        // Change website
        $(
            `.similarSites  .changeWebSite`
        ).click(() => {
            getDomain().then(data => {
                if (data) {
                    location.href = `?action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
                    // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
                }
            });
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }
}

export default api;