// import counterUp from '../counterup2/index.js';

// const counter = document.querySelector('.counter');

var domain = '';

const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];

const getHeader = async data => {
    // Get value Header 

    let {
        website: domain1
    } = data[0].data;

    let {
        website: domain2
    } = data[1].data;

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
        const getDomain = async () => {
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

const api = async (task, domain1, domain2) => {
    domain;

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
                                    case "getEngagementVisitsDaily":
                                    case "getEngagementVisitsWeekly":
                                    case "getEngagementVisitsMonthly":
                                        getEngagementVisits(task, data);
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
                                    case "getGetAudienceInterests":
                                        getGetAudienceInterests(task, data);
                                        break;
                                    case "getTopReferrals":
                                        getTopReferrals(task, data);
                                        break;
                                    case "getTrafficDestinationReferrals":
                                        getTrafficDestinationReferrals(task, data);
                                        break;
                                    case "getTrafficSourcesSearchDetails":
                                        getTrafficSourcesSearchDetails(task, data);
                                        break;
                                    case "getTopIncomingAds":
                                        getTopIncomingAds(task, data);
                                        break;
                                    case "getTrafficDestinationAds":
                                        getTrafficDestinationAds(task, data);
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
                                    case "getOrganicKeywordsNonBrandedTable":
                                    case "getOrganicKeywordsBrandedTable":
                                        getOrganicKeywordsTable(task, data);
                                        break;
                                    case "getPaidSearchCompetitorsTable":
                                        getPaidSearchCompetitorsTable(task, data);
                                        break;
                                    case "getPaidKeywordsTable":
                                        getPaidKeywordsTable(task, data);
                                        break;
                                    case "getTrendingKeywordsTable":
                                        getTrendingKeywordsTable(task, data);
                                        break;
                                    case "getTrafficAndEngagementOverviewMonthly": // mới
                                        getTrafficAndEngagementOverviewMonthly(task, dataCompare);
                                        break;
                                    case "getTrafficAndEngagementVisitsDaily":
                                    case "getTrafficAndEngagementVisitsWeekly":
                                    case "getTrafficAndEngagementVisitsMonthly":
                                        getTrafficAndEngagementVisits(task, data, domain);
                                        break;
                                    case "getUniqueUsersMonthly":
                                        getUniqueUsersMonthly(task, dataCompare);
                                        break;
                                    case "getTrafficAndEngagementAvgVisitDurationDaily":
                                    case "getTrafficAndEngagementAvgVisitDurationWeekly":
                                    case "getTrafficAndEngagementAvgVisitDurationMonthly":
                                        getTrafficAndEngagementAvgVisitDuration(task, data, domain);
                                        break;
                                    case "getTrafficAndEngagementPagesPerVisitDaily":
                                    case "getTrafficAndEngagementPagesPerVisitWeekly":
                                    case "getTrafficAndEngagementPagesPerVisitMonthly":
                                        getTrafficAndEngagementPagesPerVisit(task, data, domain);
                                        break;
                                    case "getTrafficAndEngagementBounceRateDaily":
                                    case "getTrafficAndEngagementBounceRateWeekly":
                                    case "getTrafficAndEngagementBounceRateMonthly":
                                        getTrafficAndEngagementBounceRate(task, data, domain);
                                        break;
                                    case "getMarketingMixOverviewDaily":
                                        // case "getMarketingMixOverviewWeekly":
                                        // case "getMarketingMixOverviewMonthly":
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

const getTrafficDisplayPaidOutgoingAdsTable = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {
        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");
        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        let temp = 0; // check null all

        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data && data[i].data.data) {

                let {
                    website: domain
                } = data[i].data;

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

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


                new ResizeSensor($(`#${idDomain + task}`), function () {
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

const getWebsiteAdsVisitsOverview = async (task, data) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let temp = 0;

        for (let i = 0; i < data.length; i++) {

            let {
                website: domain
            } = data[i].data;

            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");


            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data && data[i].data.data.Data.Data &&
                data[i].data.data.Data.Data[domain].AdsTotal > 0) {

                let WebsiteAdsVisitsOverview = data[i].data.data.Data.Data[domain];

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

const getTrafficAndEngagementOverviewMonthly = async (task, data) => {

    if (data[0].status == "success" && data[1].status == "success") {
        for (let i = 0; i < data.length; i++) {
            const {
                website: domain1
            } = data[0].data;

            const {
                website: domain2
            } = data[1].data;

            let idDomain1 = domain1.replace(".", "");
            idDomain1 = idDomain1.replace(".", "");
            let idDomain2 = domain2.replace(".", "");
            idDomain2 = idDomain2.replace(".", "");

            if (data[i] && data[i].data && data[i].data.data) {
                const {
                    website: similarDomain
                } = data[i].data;

                let idDomain = similarDomain.replace(".", "");
                idDomain = idDomain.replace(".", "");
                /*
                let {
                    Data
                } = data[i].data.data.Data;
                //let TrafficAndEngagementOverviewMonthly = Data[0];
                */

                var TrafficAndEngagementOverviewMonthly = null
                if (data[i].data.data.Data.AvgMonthVisits){
                    TrafficAndEngagementOverviewMonthly = data[i].data.data.Data;
                }else{
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

const getTrafficAndEngagementVisits = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementVisits = Data[domain];

            let Desktop = TrafficAndEngagementVisits.Desktop[0];
            let Mobile = TrafficAndEngagementVisits['Mobile Web'][0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };



            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });

            let ele = document.getElementById("getTrafficAndEngagement--MonthlyVisits");

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
                    <div class="text-dark pt-2">${detail}</div>`;

                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
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
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementVisitsWeekly') {
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
                            if (task == 'getTrafficAndEngagementVisitsWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementVisitsWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        },

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
                        name: 'Desktop',
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        symbol: "none",
                        itemStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        data: dataChartDesktop.values
                    },
                    {
                        name: 'Mobile',
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: "rgb(140, 210, 255)"
                        },
                        symbol: "none",
                        itemStyle: {
                            color: "rgb(140, 210, 255)"
                        },
                        data: dataChartMobile.values
                    }
                ]
            };


            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--MonthlyVisits`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('empty-state');

            const lastdate = dataChartMobile.keys.length;
            $('.similarDates').text(`${moment(dataChartMobile.keys[0]).format("MM/YYYY")} - ${moment(dataChartMobile.keys[lastdate - 1]).format("MM/YYYY")}`);
        } else {
            $(`#getTrafficAndEngagement`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}

const getUniqueUsersMonthly = async (task, data) => {

    if (data[0].status == "success" && data[0].status == "success") {
        const {
            website: domain1
        } = data[0].data;

        const {
            website: domain2
        } = data[1].data;
        let idDomain1 = domain1.replace(".", "");
        let idDomain2 = domain2.replace(".", "");

        let dataChartDomain1 = {
            keys: [],
            values: []
        };

        let dataChartDomain2 = {
            keys: [],
            values: []
        };
        for (let i = 0; i < data.length; i++) {

            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data && data[i].data.data.Data.Data) {

                const {
                    website: similarDomain
                } = data[i].data;

                let {
                    Data
                } = data[i].data.data.Data;

                let UniqueUsersMonthly = Data[similarDomain];
                let totals = UniqueUsersMonthly.Total[0];

                if (domain1 == similarDomain) {
                    totals.map(total => {
                        let key = total.Key;
                        let value = total.Value;
                        dataChartDomain1.keys.push(key);
                        dataChartDomain1.values.push(value);
                    });
                }

                if (domain2 == similarDomain) {
                    totals.map(total => {
                        let key = total.Key;
                        let value = total.Value;
                        dataChartDomain2.keys.push(key);
                        dataChartDomain2.values.push(value);
                    });
                }


                if (i != 0) {
                    let ele = document.getElementById(task);

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
                                formatter: (value, index) => (value = numeral(value).format("0,0"))
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(0,0,0,0.1)'
                                }
                            },
                        },
                        series: [{
                            name: domain1,
                            data: dataChartDomain1.values,
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
                                    borderColor: "rgb(44, 44, 84, 0.2)",
                                    borderWidth: 10
                                }
                            }
                        }, {
                            name: domain2,
                            data: dataChartDomain2.values,
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
                        }, ]
                    };
                    myChart.setOption(option);
                    new ResizeSensor($(`#getUniqueUsersMonthly`), function () {
                        myChart.resize();
                    });

                    const lastdate = dataChartDomain1.keys.length;
                    $('.similarDates').text(`${moment(dataChartDomain1.keys[0]).format("MM/YYYY")} - ${moment(dataChartDomain1.keys[lastdate - 1]).format("MM/YYYY")}`);

                    await $(`#getUniqueUsersMonthly`).removeClass('is-loading');
                    $(`#getUniqueUsersMonthly`).removeClass('empty-state');

                }
            } else {
                $(`#getUniqueUsersMonthly`).removeClass('is-loading')
                $(`#getUniqueUsersMonthly`).addClass('empty-state')
            }
        }



    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficAndEngagementAvgVisitDuration = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementAvgVisitDuration = Data[domain];

            let Desktop = TrafficAndEngagementAvgVisitDuration.Desktop[0];
            let Mobile = TrafficAndEngagementAvgVisitDuration.MobileWeb[0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };



            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });


            let ele = document.getElementById("getTrafficAndEngagement--AvgVisitDuration");

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
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('00:00:00');
                        val2 = numeral(val2).format('00:00:00');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementAvgVisitDurationWeekly') {
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
                            if (task == 'getTrafficAndEngagementAvgVisitDurationWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementAvgVisitDurationWeekly') {
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
                        formatter: (value, index) => (value = numeral(value).format("00:00:00"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: 'Desktop',
                        data: dataChartDesktop.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementAvgVisitDurationDaily") ? "none" : "circle",
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
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgb(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },
                    {
                        name: 'Mobile',
                        data: dataChartMobile.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementAvgVisitDurationDaily") ? "none" : "circle",
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
                                color: "rgb(140, 210, 255)",
                                borderColor: "rgb(140, 210, 255, 0.2)",
                                borderWidth: 10
                            }
                        }

                    }
                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--AvgVisitDuration`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--AvgVisitDuration`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--AvgVisitDuration`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--AvgVisitDuration`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--AvgVisitDuration`).addClass('empty-state');
        }
    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficAndEngagementPagesPerVisit = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementPagesPerVisit = Data[domain];

            let Desktop = TrafficAndEngagementPagesPerVisit.Desktop[0];
            let Mobile = TrafficAndEngagementPagesPerVisit.MobileWeb[0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };

            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });


            let ele = document.getElementById("getTrafficAndEngagement--PagesPerVisit");

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
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0.00');
                        val2 = numeral(val2).format('0.00');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementPagesPerVisitWeekly') {
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
                            if (task == 'getTrafficAndEngagementPagesPerVisitWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementPagesPerVisitWeekly') {
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
                        // formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: 'Desktop',
                        data: dataChartDesktop.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementPagesPerVisitDaily") ? "none" : "circle",
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
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgb(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },
                    {
                        name: 'Mobile',
                        data: dataChartMobile.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementPagesPerVisitDaily") ? "none" : "circle",
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
                                color: "rgb(140, 210, 255)",
                                borderColor: "rgb(140, 210, 255, 0.2)",
                                borderWidth: 10
                            }
                        }

                    }
                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--PagesPerVisit`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--PagesPerVisit`).removeClass('is-loading');
            $(`#getTrafficAndEngagement---PagesPerVisit`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--PagesPerVisit`).removeClass('is-loading');
            $(`#getTrafficAndEngagement---PagesPerVisit`).addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficAndEngagementBounceRate = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let TrafficAndEngagementBounceRate = Data[domain];

            let Desktop = TrafficAndEngagementBounceRate.Desktop[0];
            let Mobile = TrafficAndEngagementBounceRate.MobileWeb[0];

            let dataChartDesktop = {
                keys: [],
                values: []
            };

            Desktop.map(desktop => {
                let key = desktop.Key;
                let value = desktop.Value;
                dataChartDesktop.keys.push(key);
                dataChartDesktop.values.push(value);
            });

            let dataChartMobile = {
                keys: [],
                values: []
            };

            Mobile.map(mobile => {
                let key = mobile.Key;
                let value = mobile.Value;
                dataChartMobile.keys.push(key);
                dataChartMobile.values.push(value);
            });


            let ele = document.getElementById("getTrafficAndEngagement--BounceRate");

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
                        let {
                            marker: mrkr2,
                            color: color2,
                            seriesName: name2,
                            value: val2
                        } = params[1];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0.00%');
                        val2 = numeral(val2).format('0.00%');

                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                    </div>`;
                    }
                },
                legend: {
                    data: ['Desktop', 'Mobile']
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: dataChartDesktop.keys,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    },
                    axisTick: {
                        interval: (i, v) => {
                            if (task == 'getTrafficAndEngagementBounceRateWeekly') {
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
                            if (task == 'getTrafficAndEngagementBounceRateWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getTrafficAndEngagementBounceRateWeekly') {
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
                        formatter: (value, index) => (value = numeral(value).format("0%"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                },
                series: [{
                        name: 'Desktop',
                        data: dataChartDesktop.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementBounceRateDaily") ? "none" : "circle",
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
                                color: "rgb(79, 141, 249)",
                                borderColor: "rgb(79, 141, 249, 0.2)",
                                borderWidth: 10
                            }
                        }
                    },
                    {
                        name: 'Mobile',
                        data: dataChartMobile.values,
                        type: "line",
                        symbol: (task == "getTrafficAndEngagementBounceRateDaily") ? "none" : "circle",
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
                                color: "rgb(140, 210, 255)",
                                borderColor: "rgb(140, 210, 255, 0.2)",
                                borderWidth: 10
                            }
                        }

                    }
                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--BounceRate`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--BounceRate`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--BounceRate`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--BounceRate`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--BounceRate`).addClass('empty-state');
        }
    } else {
        console.log(`${task} failed`);
    }
}

const getMarketingMixOverview = async (task, data) => {
    if (data[0].status == "success" && data[0].status == "success") {
        let {
            website: domain1
        } = data[0].data;
        let {
            website: domain2
        } = data[0].data;

        let idDomain1 = domain1.replace(".", "");
        let idDomain2 = domain2.replace(".", "");

        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data && data[i].data.data && data[i].data.data.Data) {
                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                let {
                    DailyData,
                    WeeklyData,
                    MonthlyData
                } = data[i].data.data.Data;

                if (Object.values(DailyData).length != 0 || Object.values(WeeklyData).length != 0 || Object.values(MonthlyData).length != 0) {
                    // let { TrafficShare, AverageDuration, PagesPerVisit, BounceRate } = DataMarket; 
                    const run = async (taskName, temp) => {
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

                                new ResizeSensor($(`#${idDomain}getMarketingMixOverview--${taskName}`), function () {
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

                    $(`#getMarketingMixOverview a[data-toggle="tab"]`).on('shown.bs.tab', function (e) {


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

                        
                        $("input[type=radio][name=getMarketingMixOverview]").change(function () {
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

                    $("input[type=radio][name=getMarketingMixOverview]").change(function () {

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
        }
    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficSourcesTotalReferrals = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");
        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        let dataChartDomain1 = {
            keys: [],
            values: []
        };

        let dataChartDomain2 = {
            keys: [],
            values: []
        };


        for (let i = 0; i < data.length; i++) {

            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");

            if (data[i] && data[i].data && data[i].data.data) {

                let {
                    Data
                } = data[i].data.data;

                let TrafficSourcesTotalReferrals = Data.dictionary[domain];

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
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] :
                        ['#4b7bec', 'rgba(0,112,220,0.5)'],
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


                new ResizeSensor($(`#${idDomain}getTotalSocialVisits`), function () {
                    myChartPie.resize();
                    setTimeout(function () {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function () {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChartPie.on('mouseover', function (params) {
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

                    myChartPie.on('mouseout', function (params) {
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


                if (domain1 == domain) {
                    $.each(Dates, (idx, val) => {
                        dataChartDomain1.keys.push(val);
                    })

                    $.each(Volumes, (name, data) => {
                        dataChartDomain1.values.push(data[0]);
                    })
                } else {
                    $.each(Dates, (idx, val) => {
                        dataChartDomain2.keys.push(val);
                    })

                    $.each(Volumes, (name, data) => {
                        dataChartDomain2.values.push(data[0]);
                    })
                }

                if (i != 0) {
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
                    new ResizeSensor($(`#getReferralVisits`), function () {
                        myChart.resize();
                    });

                    await $(`#getReferralVisits`).removeClass('is-loading');
                    $(`#getReferralVisits`).removeClass('empty-state');
                }
            } else {
                if (dataChartDomain1.keys.length > 0 || dataChartDomain2.keys.length > 0) {
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
                    new ResizeSensor($(`#getReferralVisits`), function () {
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
        }

    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficSocial = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        let dataChartDomain1 = {
            keys: [],
            values: []
        };

        let dataChartDomain2 = {
            keys: [],
            values: []
        };

        for (let i = 0; i < data.length; i++) {

            if (data[i] && data[i].data && data[i].data.data) {

                let {
                    website: domain
                } = data[i].data;
                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");
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
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] :
                        ['#4b7bec', 'rgba(0,112,220,0.5)'],
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


                new ResizeSensor($(`#${idDomain}getTotalSocialVisits`), function () {
                    myChartPie.resize();
                    setTimeout(function () {
                        myChartPie.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

                setTimeout(function () {
                    myChartPie.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });

                    myChartPie.on('mouseover', function (params) {
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

                    myChartPie.on('mouseout', function (params) {
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

                if (domain1 == domain) {

                    $.each(Dates, (idx, val) => {
                        dataChartDomain1.keys.push(val);
                    })

                    $.each(Volumes, (name, value) => {
                        dataChartDomain1.values.push(value[0]);
                    })
                } else {

                    $.each(Dates, (idx, val) => {

                        dataChartDomain2.keys.push(val);

                    })

                    $.each(Volumes, (name, value) => {
                        dataChartDomain2.values.push(value[0]);
                    })
                }


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
                    new ResizeSensor($(`#getSocialVisits`), function () {
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
        }

    } else {
        console.log(`${task} failed`);
    }
}

const getEngagementVisits = async (task, data) => {
    if (data.status == "success") {

        let {
            data: EngagementVisits
        } = data.data;

        // prepare data

        let visits = EngagementVisits[0];

        let temp = true;

        visits.map(visit => {
            if (visit.Value == null) {
                temp = false;
            }
        });

        if (!temp) {
            await $(`#getEngagementVisits`).removeClass("is-loading").addClass('empty-state');
            await $(`.similarReloadTask[data-task="getEngagementVisits"]`).find('i').removeClass('fa-spin');
        } else {

            let dataChart = {
                keys: [],
                values: []
            };

            visits.map(visit => {
                let key = visit.Key;
                let value = numeral(visit.Value).format("0");
                dataChart.keys.push(key);
                dataChart.values.push(value);
            });

            // render chart

            let ele = document.getElementById("getEngagementVisits");

            let myChart = echarts.init(ele);

            let option = {
                tooltip: {
                    trigger: "axis",
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(93,120,255,1)',
                    borderWidth: 1,
                    formatter: (params) => {
                        let {
                            name,
                            value
                        } = params[0];
                        name = moment(name).format("DD MMMM YYYY");
                        value = numeral(value).format('0,0');
                        return `<div class="text-capitalize border-bottom pb-1 text-dark">${name}</div>
                <div class="text-dark pt-2">${domain} <span class="font-weight-bold text-success">${value}</span></div>`;
                    },
                    extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);'
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
                            if (task == 'getEngagementVisitsWeekly') {
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
                            if (task == 'getEngagementVisitsWeekly') {
                                return (parseInt(v.slice(-2)) < 7)
                            } else {
                                return (v.slice(-2) == '01') ? moment(v).format("MM-YYYY") : ''
                            }
                        },
                        formatter: (value, index) => {
                            if (task == 'getEngagementVisitsWeekly') {
                                return moment(value).format('MM-YYYY');
                            } else {
                                return (value.slice(-2) == '01') ? moment(value).format("MM-YYYY") : ''
                            }
                        }
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "#5d78ff",
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
                            color: "#999"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0a"))
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                },
                series: [{
                    data: dataChart.values,
                    type: "line",
                    // smooth: true,
                    symbol: "circle",
                    symbolSize: 10,
                    hoverAnimation: false,
                    showSymbol: (task == 'getEngagementVisitsWeekly' || task == 'getEngagementVisitsMonthly') ? true : false,
                    // lineStyle: {
                    //   normal: {
                    //     width: 2,
                    //     shadowColor: "rgba(0,0,0,0.4)",
                    //     shadowBlur: 10,
                    //     shadowOffsetY: 10
                    //   }
                    // },
                    // itemStyle: {
                    //   normal: {
                    //     color: "rgb(25, 123, 251)",
                    //     borderColor: "rgba(25, 123, 251, 0.2)",
                    //     borderWidth: 12
                    //   }
                    // }
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(93,120,255,.5)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(93,120,255,.05)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(93,120,255,1)',
                            borderColor: 'rgba(93,120,255,.2)',
                            borderWidth: 12
                        }
                    },
                }]
            };
            myChart.setOption(option);

            new ResizeSensor($(`#getEngagementVisits`), function () {
                myChart.resize();
            });

            await $(`#getEngagementVisits`).removeClass("is-loading");
            await $(`.similarReloadTask[data-task="getEngagementVisits"]`).find('i').removeClass('fa-spin');

            const lastdate = dataChart.keys.length;
            $('.similarDates').text(`${moment(dataChart.keys[0]).format("MM/YYYY")} - ${moment(dataChart.keys[lastdate - 1]).format("MM/YYYY")}`);
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getWebDemographicsAge = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        let dataChartDomain1 = {
            keys: [],
            values: []
        };

        let dataChartDomain2 = {
            keys: [],
            values: []
        };

        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data) {

                let {
                    website: domain,
                    data: traffic
                } = data[i].data;

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                let temp = true;

                $.each(traffic, (index, item) => {
                    if (item == null) {
                        temp = false;
                    }
                })


                // prepare data
                if (domain1 == domain) {

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
                        dataChartDomain1.keys.push(key);
                        dataChartDomain1.values.push(value);
                    });
                } else {


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
                        dataChartDomain2.keys.push(key);
                        dataChartDomain2.values.push(value);
                    });
                }

                // render chart

                if (i != 0) {

                    let ele = document.getElementById(task);

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
                        series: [{
                            name: domain1,
                            data: dataChartDomain1.values,
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
                                    shadowOffsetY: 10,
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
                            name: domain2,
                            data: dataChartDomain2.values,
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
                        }, ]
                    };
                    myChart.setOption(option);


                    new ResizeSensor($(`#${task}`), function () {
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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getTrafficSourcesOverview = async (task, data) => {
    if (data[0].status == "success" && data[1].status == "success") {

        const {
            website: domain1
        } = data[0].data;

        const {
            website: domain2
        } = data[1].data;
        let idDomain1 = domain1.replace(".", "");
        let idDomain2 = domain2.replace(".", "");

        let dataChartDomain1 = {
            keys: [],
            values: []
        };

        let dataChartDomain2 = {
            keys: [],
            values: []
        };

        for (let i = 0; i < data.length; i++) {

            let {
                website: domain,
                data: traffic
            } = data[i].data;

            // prepare data

            if (domain1 == domain) {
                $.each(traffic, (index, item) => {
                    let key = index;
                    let value = numeral(item).format("0");
                    if (key == "Organic Search") {
                        dataChartDomain1.keys[0] = "Tìm kiếm tự nhiên";
                        dataChartDomain1.values[0] = value;
                    }

                    if (key == "Paid Search") {
                        dataChartDomain1.keys[1] = "Tìm kiếm trả phí";
                        dataChartDomain1.values[1] = value;
                    }

                    if (key == "Paid Referrals") {
                        dataChartDomain1.keys[2] = "Quảng cáo hiển thị";
                        dataChartDomain1.values[2] = value;
                    }

                    if (key == "Social") {
                        dataChartDomain1.keys[3] = "Mạng xã hội";
                        dataChartDomain1.values[3] = value;
                    }

                    if (key == "Referrals") {
                        dataChartDomain1.keys[4] = "Liên kết ngoài";
                        dataChartDomain1.values[4] = value;
                    }

                    if (key == "Mail") {
                        dataChartDomain1.keys[5] = "Mail";
                        dataChartDomain1.values[5] = value;
                    }

                    if (key == "Direct") {
                        dataChartDomain1.keys[6] = "Trực tiếp";
                        dataChartDomain1.values[6] = value;
                    }

                });
            }

            if (domain2 == domain) {
                $.each(traffic, (index, item) => {
                    let key = index;
                    let value = numeral(item).format("0");
                    if (key == "Organic Search") {
                        dataChartDomain2.keys[0] = "Tìm kiếm tự nhiên";
                        dataChartDomain2.values[0] = value;
                    }

                    if (key == "Paid Search") {
                        dataChartDomain2.keys[1] = "Tìm kiếm trả phí";
                        dataChartDomain2.values[1] = value;
                    }

                    if (key == "Paid Referrals") {
                        dataChartDomain2.keys[2] = "Quảng cáo hiển thị";
                        dataChartDomain2.values[2] = value;
                    }

                    if (key == "Social") {
                        dataChartDomain2.keys[3] = "Mạng xã hội";
                        dataChartDomain2.values[3] = value;
                    }

                    if (key == "Referrals") {
                        dataChartDomain2.keys[4] = "Liên kết ngoài";
                        dataChartDomain2.values[4] = value;
                    }

                    if (key == "Mail") {
                        dataChartDomain2.keys[5] = "Mail";
                        dataChartDomain2.values[5] = value;
                    }

                    if (key == "Direct") {
                        dataChartDomain2.keys[6] = "Trực tiếp";
                        dataChartDomain2.values[6] = value;
                    }
                });
            }

            // render chart

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
                        data: dataChartDomain1.keys,
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
                    series: [{
                        name: domain1,
                        type: 'bar',
                        barWidth: 60,
                        data: dataChartDomain1.values,
                        itemStyle: {
                            normal: {
                                color: "#57606f",
                                // color: function (params) {
                                //     var num = customColors.length;
                                //     return customColors[params.dataIndex % num]
                                // },
                                "label": {
                                    "show": true,
                                    "position": "top",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                }
                            }
                        },
                    }, {
                        name: domain2,
                        type: 'bar',
                        barWidth: 60,
                        data: dataChartDomain2.values,
                        itemStyle: {
                            normal: {
                                color: "#4b7bec",
                                // color: function (params) {
                                //     var num = customColors.length;
                                //     return customColors[params.dataIndex % num]
                                // },
                                "label": {
                                    "show": true,
                                    "position": "top",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                }
                            }
                        },
                    }]
                };
                myChart.setOption(option);


                new ResizeSensor($(`#${task}`), function () {
                    myChart.resize();
                });

                await $(`#${task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            }
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getWebDemographicsGender = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        for (let i = 0; i < data.length; i++) {

            if (data[i] && data[i].data) {

                let {
                    data: visits,
                    website: domain
                } = data[i].data;

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

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
                        color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] :
                            ['#4b7bec', 'rgba(0,112,220,0.5)'],
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


                    new ResizeSensor($(`#${idDomain + task}`), function () {
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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getDesktopVsMobileVisits = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        for (let i = 0; i < data.length; i++) {


            let {
                website: domain,
                data: visits
            } = data[i].data;

            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");

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
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] :
                        ['#4b7bec', 'rgba(0,112,220,0.5)'],
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


                new ResizeSensor($(`#${idDomain + task}`), function () {
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

                await $(`#${idDomain + task}, #totalTraffic`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                $(`.${idDomain} #totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));

                // Start counting, do this on DOM ready or with Waypoints.
                // counterUp(counter, {
                //     duration: 1000,
                //     delay: 16,
                // })
            }
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getSearchBrandedKeywords = async (task, data, domain1, domain2) => {

    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data) {

                let {
                    data: visits,
                    website: domain
                } = data[i].data;

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

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
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] :
                        ['#4b7bec', 'rgba(0,112,220,0.5)'],
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
                        formatter: function (name) {
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


                new ResizeSensor($(`#${idDomain + task}`), function () {
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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getOrganicKeywordsTable = async (task, data) => {
    const renderName = '#getOrganicKeywordsTable';

    let {
        Data: item
    } = data.data.data;

    if (item[0].SearchTerm == "grid.upgrade") {
        $(renderName).addClass('empty-state');
    } else {
        $(renderName).html(`
        <div class="row mx-0 px-2 align-items-center text-muted">
            <div class="col-2 font-10">Từ khoá</div>
            <div class="col-1 font-10">CPC</div>
            <div class="col-1 font-10 text-right">Vị trí</div>
            <div class="col-2 font-10 text-right">Lượt tìm kiếm</div>
            <div class="col-6 font-10 text-center">Tỷ lệ truy cập</div>
        </div>
        `);

        $.each(item, (index, keyword) => {

            let {
                CPC,
                DestUrlOrganic,
                SearchTerm,
                KwVolume,
                TotalShare,
                Change,
                PositionOrganic
            } = keyword;

            DestUrlOrganic[0].Value == "N/A" ? DestUrlOrganic = 'javascript:;' : DestUrlOrganic = DestUrlOrganic[0].Value;
            PositionOrganic = PositionOrganic[0].Value;
            if (SearchTerm == "grid.upgrade") return;
            if (!Change) Change = 'NaN';

            $(renderName).append(`
        <div class="row mx-0 p-2 align-items-center">
            <div class="col-2 text-truncate pb-0"><a href="${DestUrlOrganic}" title="${DestUrlOrganic == 'javascript:;' ? SearchTerm : DestUrlOrganic}">${SearchTerm}</a></div>
            <div class="col-1">$${CPC}</div>
            <div class="col-1 text-right">${PositionOrganic}</div>
            <div class="col-2 text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-2 text-right">${numeral(TotalShare).format('0.00%')}</div>
            <div class="col-2">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(TotalShare).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
        </div>
        `);
        })
    }

    $(renderName).perfectScrollbar();

    await $(renderName).removeClass('is-loading');
}

const getTrendingKeywordsTable = async (task, data) => {

    let {
        Data: item
    } = data.data.data;

    if (item[0].SearchTerm == "grid.upgrade") {
        $(`#${task}`).addClass('empty-state');
    } else {
        $(`#${task}`).html(`
        <div class="row mx-0 px-2 align-items-center text-muted">
            <div class="col-2 font-10">Từ khoá</div>
            <div class="col-auto font-10 px-3">CPC</div>
            <div class="col-2 font-10 text-center">Tự nhiên / Trả phí</div>
            <div class="col-1 font-10 text-center">Vị trí</div>
            <div class="col-1 font-10 text-right">Lượt tìm kiếm</div>
            <div class="col-3 font-10 text-center">Tỷ lệ truy cập</div>
            <div class="col font-10">Website đích</div>
        </div>
        `);

        $.each(item, (index, keyword) => {

            let {
                CPC,
                Organic,
                Paid,
                DestUrlOrganic,
                DestUrlPaid,
                SearchTerm,
                KwVolume,
                TotalShare,
                Change,
                PositionOrganic,
                PositionPaid
            } = keyword;

            let DestUrl = DestUrlOrganic[0].Value == "N/A" ? (DestUrlPaid[0].Value == "N/A" ? 'javascript:;' : DestUrlPaid[0].Value) : DestUrlOrganic[0].Value;

            PositionOrganic = PositionOrganic[0].Value;
            PositionPaid = PositionPaid[0].Value;
            if (SearchTerm == "grid.upgrade") return;
            if (!Change) Change = 'NaN';

            $(`#${task}`).append(`
        <div class="row mx-0 p-2 align-items-center">
            <div class="col-2 text-truncate pb-0">${SearchTerm}</div>
            <div class="col-auto">$${numeral(CPC).format('0.00')}</div>
            <div class="col-2 d-inline-flex">${numeral(Organic).format('0.00%')}
                <div class="progress w-50 mx-2">
                <div class="progress-bar bg-primary" style="width: ${numeral(Organic).format('0.00%')}; height:19px;" role="progressbar"></div>
                </div>
                ${numeral(Paid).format('0.00%')}
            </div>
            <div class="col-1 text-center">${PositionOrganic} / ${PositionPaid}</div>
            <div class="col-1 text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-1 text-right">${numeral(TotalShare).format('0.00%')}</div>
            <div class="col-1">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(TotalShare).format('0.00%')}; height:19px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-1 text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
            <div class="col text-truncate pb-0"><a href="${DestUrl}" title="${DestUrl == 'javascript:;' ? SearchTerm : DestUrl}">${DestUrl == 'javascript:;' ? '-' : DestUrl}</a></div>
        </div>
        `);
        })
    }

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
}

const getTrafficSourcesSearch = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");
        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        for (let i = 0; i < data.length; i++) {

            let {
                website: domain,
                data: traffic
            } = data[i].data;
            let temp = true;

            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");
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

                // prepare data

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
                    color: (domain1 == domain) ? ['#57606f', 'rgba(44, 44, 84,0.5)'] :
                        ['#4b7bec', 'rgba(0,112,220,0.5)'],
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


                new ResizeSensor($(`#${idDomain+task}`), function () {
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

                await $(`#${idDomain+task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            }
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getTrafficDisplayAdvertisingAds = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        $(`#${idDomain1 + task}`).removeClass('is-loading');
        $(`#${idDomain1 + task}`).removeClass('empty-state');

        $(`#${idDomain2 + task}`).removeClass('is-loading');
        $(`#${idDomain2 + task}`).removeClass('empty-state');

        let temp = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data) {

                let {
                    data: traffic,
                    website: domain
                } = data[i].data;

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");
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


                new ResizeSensor($(`#${idDomain + task}`), function () {
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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getTrafficSourcesSocial = async (task, data, domain1, domain2) => {

    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");


        for (let i = 0; i < data.length; i++) {

            if (data[i] && data[i].data) {

                let {
                    data: traffic,
                    website: domain
                } = data[i].data;

                let idDomain = domain.replace(".", "");
                idDomain = idDomain.replace(".", "");

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


                new ResizeSensor($(`#${idDomain + task}`), function () {
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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getTrafficDisplayPaidOutgoingAds = async (task, data) => {

    if (data[0].status == "success" && data[1].status == "success") {
        let {
            website: domain1
        } = data[0].data;
        let {
            website: domain2
        } = data[1].data;

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        let dataChartDomain1 = {
            keys: [],
            values: []
        };

        let dataChartDomain2 = {
            keys: [],
            values: []
        };

        let temp = 0; // check null all

        for (let i = 0; i < data.length; i++) {
            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");
            if (data[i] && data[i].data && data[i].data.data) {

                let TrafficDisplayPaidOutgoingAds = data[i].data.data;
                if (TrafficDisplayPaidOutgoingAds.Dates && TrafficDisplayPaidOutgoingAds.VolumeTotal && TrafficDisplayPaidOutgoingAds.Volumes) {

                    let VolumeTotal = TrafficDisplayPaidOutgoingAds.VolumeTotal;

                    $(`#${idDomain}getTotalOutgoingAdVisits`).removeClass("is-loading");
                    $(`#${idDomain}getTotalOutgoingAdVisits`).html(`${numeral(VolumeTotal).format("0,0")}`);



                    let Dates = TrafficDisplayPaidOutgoingAds.Dates;

                    let Volumes = TrafficDisplayPaidOutgoingAds.Volumes;

                    if (domain1 == domain) {
                        $.each(Dates, (idx, val) => {
                            dataChartDomain1.keys.push(val);
                        })

                        $.each(Volumes, (name, data) => {
                            dataChartDomain1.values.push(data[1]);
                        })
                    } else {
                        $.each(Dates, (idx, val) => {
                            dataChartDomain2.keys.push(val);
                        })

                        $.each(Volumes, (name, data) => {
                            dataChartDomain2.values.push(data[1]);
                        })
                    }


                    if (i != 0) {
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
                            grid: {
                                right: "5%"
                            },
                            legend: {
                                data: [`${idDomain1}`, `${idDomain2}`]
                            },
                            xAxis: {
                                type: "category",
                                boundaryGap: false,
                                data: (dataChartDomain1.keys.length > 0) ? dataChartDomain1.keys : dataChartDomain2.keys,
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
                        new ResizeSensor($(`#getOutgoingAds`), function () {
                            myChart.resize();
                        });

                        await $(`#getOutgoingAds`).removeClass('is-loading');
                        $(`#getOutgoingAds`).removeClass('empty-state');
                    }
                } else {
                    if (dataChartDomain1.keys.length > 0 || dataChartDomain2.keys.length > 0) {
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
                            grid: {
                                right: "5%"
                            },
                            legend: {
                                data: [`${idDomain1}`, `${idDomain2}`]
                            },
                            xAxis: {
                                type: "category",
                                boundaryGap: false,
                                data: (dataChartDomain1.keys.length > 0) ? dataChartDomain1.keys : dataChartDomain2.keys,
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
                                            color: "rgb(79, 141, 249)",
                                            borderColor: "rgb(79, 141, 249, 0.2)",
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
                                            color: "rgb(140, 210, 255)",
                                            borderColor: "rgb(140, 210, 255, 0.2)",
                                            borderWidth: 10
                                        }
                                    }
                                },

                            ]
                        };
                        myChart.setOption(option);
                        new ResizeSensor($(`#getOutgoingAds`), function () {
                            myChart.resize();
                        });

                        await $(`#getOutgoingAds`).removeClass('is-loading');
                        $(`#getOutgoingAds`).removeClass('empty-state');
                    } else {
                        $(`#getOutgoingAds`).removeClass('is-loading');
                        $(`#getOutgoingAds`).addClass('empty-state');
                    }

                    temp++;

                    if (temp == 2) {
                        $(`.getTotalOutgoingAdVisits`).addClass("d-none");
                        $(`.getOutgoingAds`).addClass("d-none");
                    }

                    $(`#${idDomain}getTotalOutgoingAdVisits`).removeClass('is-loading');
                    $(`#${idDomain}getTotalOutgoingAdVisits`).parent().addClass('empty-state');
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
        }


    } else {
        console.log(`${task} failed`);
    }


}

const getGetAudienceInterests = async (task, data) => {
    if (data.status == "success") {
        const {
            data: traffic
        } = data.data;

        var dataChart = [];

        $.each(traffic, (index, visit) => {
            dataChart.push([
                visit.Name,
                numeral(numeral(visit.Value).format('0.0%').replace('%', '').replace('.', '')).format('0') * 3
            ]);
        });

        WordCloud(document.getElementById(task), {
            list: dataChart,
            fontFamily: 'Google Sans',
            color: 'random-dark'
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        console.log(`${task} failed`);
    }

}

const getTopReferrals = async (task, data) => {
    $(`#${task}`).html('');
    let {
        Data: topReferrals
    } = data.data.data;

    if (!topReferrals || topReferrals.length == 0) {
        $(`#${task}`).removeClass('is-loading').addClass('empty-state');
        return;
    }

    $.each(topReferrals, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        site.Favicon = "https://files.fff.com.vn/f.php?url=" + btoa(site.Favicon);
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${site.Change == 'NaN' ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${site.Change == 'NaN' ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const getPaidSearchCompetitorsTable = async (task, data) => {
    $(`#${task}`).html('');
    let {
        Data
    } = data.data.data;

    if (!Data) {
        $(`#${task}`).addClass('empty-state');
    } else {

        let {
            Records,
            TotalCount
        } = Data;

        if ((Records[0] && Records[0].Domain && Records[0].Domain == "grid.upgrade") || Records.length == 0) {
            $(`#${task}`).addClass('empty-state');
        } else {
            $.each(Records, (index, site) => {
                let {
                    Category,
                    Domain,
                    Favicon,
                    Score: Share
                } = site;
                if (Domain == "grid.upgrade") return;
                $(`#${task}`).append(`
            <div class="row m-0 p-10 align-items-center">
                <div class="col-6 text-truncate pb-0"><a title="${Domain}" href="website-analysis.php?view=similar&action=result&domain=${Domain}"><img src="${Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${Domain}</a></div>
                <div class="col-2 text-right">${numeral(Share).format('0.00%')}</div>
                <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
                </div>
            </div>
            </div>
            `);
            })
        }
    }

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const deduplicate = arr => {

    let isExist = (arr, x) => arr.includes(x);
    let ans = [];

    arr.forEach(element => {
        if (!isExist(ans, element)) ans.push(element);
    });

    return ans;
}

const getWebsiteGeography = async (task, data) => {
    let {
        website: domain1
    } = data[0].data;

    let {
        website: domain2
    } = data[1].data;

    for (let i = 0; i < data.length; i++) {

        let dataChart = [];

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

        let idDomain = domain.replace(".", "");
        idDomain = idDomain.replace(".", "");

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
        new ResizeSensor($(`#${idDomain}getWebsiteGeography`), function () {
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

        await $(`#${idDomain}getWebsiteGeography`).removeClass('is-loading');
        $(`#${idDomain}getWebsiteGeography`).removeClass('empty-state');
    }



}

const getTrafficDestinationAds = async (task, data) => {
    $(`#${task}`).html('');
    let {
        data: TrafficDestinationAds
    } = data.data;

    $.each(TrafficDestinationAds, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${(!site.Change) ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${(!site.Change) ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const getTopIncomingAds = async (task, data) => {
    $(`#${task}`).html('');

    let {
        data: TopIncomingAds
    } = data.data;

    $.each(TopIncomingAds, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${!site.Change ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${!site.Change ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })


    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const getTrafficSourcesSearchDetails = async (task, data) => {
    $(`#${task}`).html(`
    <div class="row mx-0 px-2 align-items-center text-muted">
        <div class="col-3 font-10">Từ khoá</div>
        <div class="col-1 font-10">CPC</div>
        <div class="col-2 font-10 text-right">Lượt tìm kiếm</div>
        <div class="col-6 font-10 text-center">Truy cập</div>
    </div>
    `);
    let {
        data: TrafficSourcesSearchDetails
    } = data.data;



    $.each(TrafficSourcesSearchDetails, (index, site) => {

        let {
            CPC,
            SearchTerm,
            KwVolume,
            Domain,
            Change,
            Share
        } = site;

        // console.log(CPC, SearchTerm, KwVolume, Domain, Change, Share);

        if (Domain == "grid.upgrade") return;
        if (!Change) Change = 'NaN';

        $(`#${task}`).append(`
        <div class="row mx-0 p-10 align-items-center">
            <div class="col-3 text-truncate pb-0" title="${SearchTerm}">${SearchTerm}</div>
            <div class="col-1">$${CPC}</div>
            <div class="col-2 text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-2 text-right">${numeral(Share).format('0.00%')}</div>
            <div class="col-2">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
        </div>
        `);
    })

    $(`#${task}`).perfectScrollbar();

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const getPaidKeywordsTable = async (task, data) => {

    let {
        Data
    } = data.data.data;

    if (Data[0].SearchTerm == 'grid.upgrade') {
        $(`#${task}`).addClass('empty-state');
    } else {
        $(`#${task}`).html(`
        <div class="row mx-0 px-2 align-items-center text-muted">
            <div class="col-2 font-10">Từ khoá</div>
            <div class="col-1 font-10">CPC</div>
            <div class="col-1 font-10 text-center">Vị trí</div>
            <div class="col-auto font-10">Lượt tìm kiếm</div>
            <div class="col font-10 text-center">Truy cập</div>
            <div class="col font-10">Website đích</div>
        </div>
        `);


        $.each(Data, (index, site) => {

            let {
                CPC,
                SearchTerm,
                KwVolume,
                Domain,
                Change,
                TotalShare,
                PositionPaid,
                DestUrlPaid
            } = site;

            DestUrlPaid = DestUrlPaid[0].Value == "N/A" ? '-' : DestUrlPaid[0].Value;

            if (SearchTerm == "grid.upgrade") return;
            if (!Change) Change = 'NaN';

            $(`#${task}`).append(`
        <div class="row mb-1 mx-0 p-10 align-items-center">
            <div class="col-2 text-truncate pb-0" title="${SearchTerm}">${SearchTerm}</div>
            <div class="col-1">$${CPC}</div>
            <div class="col-1 text-center">${PositionPaid[0].Value}</div>
            <div class="col text-right">${numeral(KwVolume).format('0,0')}</div>
            <div class="col-1 text-right">${numeral(TotalShare).format('0.00%')}</div>
            <div class="col-1">
            <div class="progress">
                <div class="progress-bar bg-primary" style="width: ${numeral(TotalShare).format('0.00%')}; height:14px;" role="progressbar"></div>
            </div>
            </div>
            <div class="col text-right ${Change == 'NaN' ? 'text-muted' : (Change > 0 ? 'text-success positive' : 'text-danger negative')}">${Change == 'NaN' ? '-' : ((Change.toString().charAt(0) === '-' ? numeral(Math.abs(Change)).format('0.00%') : numeral(Change).format('0.00%')))}</div>
            <div class="col-3 text-truncate pb-0"><a target="_blank" href="${DestUrlPaid == '-' ? '#' : DestUrlPaid}" title="${DestUrlPaid == '-' ? '' : DestUrlPaid}">${DestUrlPaid == '-' ? DestUrlPaid : DestUrlPaid + '<i class="fal fa-external-link fa-1x ml-1"></i>'}</a></div>
            </div>
        `);
        })
    }
    $(`#${task}`).perfectScrollbar();
    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const getTrafficDestinationReferrals = async (task, data) => {
    $(`#${task}`).html('');
    let {
        data: TrafficDestinationReferrals
    } = data.data;

    $.each(TrafficDestinationReferrals, (index, site) => {
        if (site.Domain == "grid.upgrade") return;
        $(`#${task}`).append(`
        <div class="row m-0 p-10 align-items-center">
            <div class="col-4 text-truncate pb-0"><a title="${site.Domain}" href="website-analysis.php?view=similar&action=result&domain=${site.Domain}"><img src="${site.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />${site.Domain}</a></div>
            <div class="col-2 text-right">${numeral(site.Share).format('0.00%')}</div>
            <div class="col-4">
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: ${numeral(site.Share).format('0.00%')}; height:14px;" role="progressbar"></div>
                </div>
            </div>
            <div class="col-2 text-right ${site.Change == 'NaN' ? 'text-muted' : (site.Change > 0 ? 'text-success positive' : 'text-danger negative')}">${site.Change == 'NaN' ? '-' : ((site.Change.toString().charAt(0) === '-' ? numeral(Math.abs(site.Change)).format('0.00%') : numeral(site.Change).format('0.00%')))}</div>
        </div>
        `);
    })

    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}

const getSearchOrganicPaidOverview = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[0].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        for (let i = 0; i < data.length; i++) {
            let {
                website: domain
            } = data[i].data;
            let idDomain = domain.replace(".", "");
            idDomain = idDomain.replace(".", "");
            if (data[i] && data[i].data) {
                let {
                    TrafficShare,
                    AverageDuration,
                    PagesPerVisit,
                    BounceRate
                } = data[i].data.data;

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

                    // console.log(SearchOrganicPaidOverview);



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


                    new ResizeSensor($(`#${task}`), function () {
                        myChart.resize();
                    });

                    await $(`#${idDomain + id}`).removeClass('is-loading');
                    await $(`#${idDomain + id}`).removeClass('empty-state');
                }


                run('TrafficShare');

                $('#getSearchOrganicPaidOverview a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getWebsiteAdsIntelDisplay = async (task, data, domain1, domain2) => {  
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        $(`#${idDomain1 + task} .carousel-inner`).removeClass('is-loading');
        $(`#${idDomain1 + task} .carousel-inner `).removeClass('empty-state');

        $(`#${idDomain2 + task} .carousel-inner`).removeClass('is-loading');
        $(`#${idDomain2 + task} .carousel-inner `).removeClass('empty-state');

        let temp = 0; 
               
        for(let i = 0; i < data.length; i++) {
            if(data && data[i].data)
            {  
                let {
                    data: WebsiteAdsIntelDisplay,
                    website: domain
                } = data[i].data;

                let idDomain = domain.replace(".","");
                    idDomain = idDomain.replace(".","");

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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getScrapedSearchAds = async (task, data, domain1, domain2) => {
    if (data[0].status == "success" && data[1].status == "success") {

        let idDomain1 = domain1.replace(".", "");
        idDomain1 = idDomain1.replace(".", "");

        let idDomain2 = domain2.replace(".", "");
        idDomain2 = idDomain2.replace(".", "");

        $(`#${idDomain1 + task} .carousel-inner`).removeClass('is-loading');
        $(`#${idDomain1 + task} .carousel-inner `).removeClass('empty-state');

        $(`#${idDomain2 + task} .carousel-inner`).removeClass('is-loading');
        $(`#${idDomain2 + task} .carousel-inner `).removeClass('empty-state');

        let temp = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].data) {

                let {
                    data: SearchAds,
                    website: webdomain
                } = data[i].data;

                let idDomain = webdomain.replace(".", "");
                idDomain = idDomain.replace(".", "");

                $(`#${idDomain + task} .carousel-inner`).html('');
                $(`#${idDomain + task} .carousel-indicators`).html('');

                await $.each(SearchAds, (index, value) => {

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
        }
    } else {
        console.log(`${task} failed`);
    }
};

const getSimilarSites = async (task, data, domain1) => {
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
            compareNode.click(function (e) {
                e.preventDefault(); 
                domain2 = $(this).data('domain');
               
            });
        })

          // Popup nhap website
          const getDomain = async () => {
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
                        if(event.which == 13) {
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