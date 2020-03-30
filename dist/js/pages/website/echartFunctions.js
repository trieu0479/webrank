// import counterUp from '../counterup2/index.js';
// import counterUp from '../../../../js/pages/keywords/counterup2/index.js';

// const counter = document.querySelector('.counter');

var domain = '';
var arrDomain = [];
var selectWebsite = "";

const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];
const masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

var domain_name = url.searchParams.get("domain");
$('body').on('click', '.btn-compare', function (event) {
    Swal.fire({
        title: 'Hãy nhập website để so sánh',
        html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${domain_name} placeholder="Nhập website của bạn">` +
            `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
            `<input id="swal-input2" class="swal2-input text-lowercase"  placeholder="Nhập website của đối thủ">`,
        focusConfirm: false,
        showCloseButton: true,
        confirmButtonText: 'So Sánh',
        width: 600,
        padding: '4em',
        onOpen: () => {
            $('#swal-input2').focus()
            $('#swal-input2').keypress(event => {
                if (event.which == 13) {
                    $('.swal2-confirm').click();
                }
            })
        },
        preConfirm: () => {
            if ($('#swal-input1').val() == "" || $('#swal-input2').val() == "") {
                Swal.showValidationMessage(`Vui lòng nhập đủ website`)
            } else {
                if ($('#swal-input1').val() == $('#swal-input2').val()) {
                    Swal.showValidationMessage(`Hai website không được trùng`)
                }
            }
            return [
                $('#swal-input1').val(),
                $('#swal-input2').val()
            ]
        }
    }).then((result) => {
        // console.log(result);
        if (result.value) {
            location.href = `?view=traffic-website&action=compare&domain1=${result.value[0].toLowerCase()}&domain2=${result.value[1].toLowerCase()}`;
        }
    })
})

const getHeader = async data => {
    // Get value Header  
    const {
        data: similarHeader,
    } = data.data;
    var similarDomain = null;
    if (data.data.website) similarDomain = data.data.website;
    else similarDomain = url.searchParams.get("domain")
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
    $(".similarHeader .similarIcon").html(
        `<img class="p-1 mr-2 border rounded bg-secondary" src="${similarIcon}" />`
    );
    $(".similarHeader .similarDomain").text(similarDomain);
    $(".similarFooter .similarGlobalRank").text('#' + numeral(similarGlobalRank).format('0,0'));
    $(".similarFooter .similarCountryRank").text('#' + numeral(similarCountryRank).format('0,0'));
    $(".similarHeader .similarTitle").html(similarTitle);
    $(".similarHeader .similarDescription").html(similarDescription);
    $(".similarHeader .similarTags").html(
        '<p class="font-bold mb-2"><i class="far fa-tag font-14"></i> Từ khoá: </p>' +
        similarTags.map(tag => `<span><a href="./index.php?view=keywords&action=keywords-overview&keyword=${tag}"  data-type="keyword" class="changeURL" data-input="${tag}" class="text-muted"><i class="far fa-search"></i> ${tag}</a></span>`).join("")
    );

    var metaTitle = "Website " + similarDomain + " được xếp hạng " + numeral(similarCountryRank).format('0,0') + "/98.000 website tại Việt Nam";
    document.title = metaTitle;
    $('meta[name="og:title"]').attr("content", metaTitle);

    $(".similarHeader .similarRelatedAppsTitle").html(
        '<i class="far fa-mobile font-14"></i> Ứng dụng liên quan<br/><span class="font-12 text-muted">CH Play & AppStore</span>'
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

    $(".similarHeader .similarApps").html(
        `<div class="d-flex flex-row">${apps}</div>`
    );

    similarThumb = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumb);
    similarThumbMobile = "https://files.fff.com.vn/f.php?url=" + btoa(similarThumbMobile);
    $(".similarThumb img").attr("src", similarThumb);
    $(".similarThumbMobile img").attr("src", similarThumbMobile);

    // Remove loading state
    $(
        ".similarHeader .similarDomainWrapper," +
        ".similarHeader .similarTitle," +
        ".similarHeader .similarDescription," +
        ".similarHeader .similarTags," +
        ".similarHeader .similarRelatedApps"
    ).removeClass("placeholder-loading");


    // Popup nhap website
    const getDomain = async () => {
        const result = await Swal.fire({
            type: "info",
            title: "Hãy nhập một website cần phân tích",
            input: "text",
            position: 'top',
            // showCancelButton: true,
            confirmButtonText: 'Phân Tích',
            showCloseButton: true,
            // customClass: {
            //     container: 'pt-6'
            // },
            inputValidator: value => {
                if (!value) {
                    return "Bạn hãy nhập website để phân tích!";
                }
            }
        });
        return result;
    };

    // Change website
    $(
        ".similarHeader .changeWebSite, .similarHeader .similarDomain"
    ).click(() => {
        getDomain().then(data => {
            if (data.value) {
                location.href = `?view=traffic-website&action=result&domain=${data.value}`;
            }
        });
    });

    const getDomainCompare = async () => {
        const result = await Swal.fire({
            title: 'Hãy nhập website để so sánh',
            width: 600,
            padding: '4em',
            position: 'top',
            // customClass: {
            //     container: "pt-6"
            // },
            html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${similarDomain} placeholder="Nhập website của bạn">` +
                `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                `<input id="swal-input2" autocomplete="off" class="swal2-input text-lowercase" placeholder="Nhập website của đối thủ">` +
                `<div id="selectWebsiteScrollbar" class="selectWebsite bg-white d-flex flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: 485px"></div>`,
            focusConfirm: false,
            showCloseButton: true,
            confirmButtonText: 'So Sánh',
            onOpen: () => {

                $('#swal-input1').focus();

                $('#selectWebsiteScrollbar').perfectScrollbar();

                $.each(arrDomain, (index, site) => {
                    selectWebsite += `<span class="p-2" data-domain="${site.Domain}"><img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}"/>${site.Domain}</span>`
                });

                $('.swal2-confirm').css("opacity", "1");
                $(".selectWebsite").css("opacity", "0");

                // $('#swal-input2').focus();
                $('#swal-input2').focus(() => {
                    $('.swal2-confirm').css("opacity", "0");
                    $(".selectWebsite").css("opacity", "1");

                    let temp = $("#swal-input2").val();

                    if (temp == "" && arrDomain.length >= 4) {
                        $(".selectWebsite").css("height", "150px");
                        $(".selectWebsite").addClass("overflow-auto");
                    } else {
                        $(".selectWebsite").html("");
                        $('.swal2-confirm').css("opacity", "1");
                        $(".selectWebsite").css("opacity", "0");
                    }

                    $(".selectWebsite").html(selectWebsite);

                    $('#swal-input2').keyup(() => {

                        $(".selectWebsite").css("opacity", "1");
                        $('.swal2-confirm').css("opacity", "0");

                        let temp = $("#swal-input2").val();

                        let dataNew = arrDomain.filter((el) =>
                            el.Domain.toLowerCase().indexOf(temp.toLowerCase()) > -1
                        );
                        selectWebsite = "";
                        $.each(dataNew, (index, site) => {
                            selectWebsite += `<span class="p-2" data-domain="${site.Domain}"><img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}"/>${site.Domain}</span>`
                        })

                        if (dataNew.length >= 4) {
                            $(".selectWebsite").css("height", "150px");
                            $(".selectWebsite").addClass("overflow-auto");
                        } else {
                            $(".selectWebsite").css("height", "auto");
                            $(".selectWebsite").removeClass("overflow-auto");
                        }

                        if (dataNew.length == 0) {
                            $('.swal2-confirm').css("opacity", "1")
                            $(".selectWebsite").css("opacity", "0")
                        }

                        $(".selectWebsite").html(selectWebsite);

                        $("span").click(function () {
                            $("#swal-input2").val($(this).data("domain"));
                            $(".selectWebsite").html("");
                            $('.swal2-confirm').css("opacity", "1")
                            $(".selectWebsite").css("opacity", "0")

                        })
                    })

                    $("span").click(function () {
                        $("#swal-input2").val($(this).data("domain"));
                        $(".selectWebsite").html("");
                        $('.swal2-confirm').css("opacity", "1");
                        $(".selectWebsite").css("opacity", "0");
                    })
                });

                $('#swal-input2').blur(() => {
                    $('.swal2-confirm').css("opacity", "1");
                    $(".selectWebsite").css("opacity", "0");
                });


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
            return result;

        }

    };

    // Change website
    $(".SubmitCompare").click(() => {
        getDomainCompare().then(data => {
            if (data) {
                location.href = `?view=traffic-website&action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
                // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
            }
        });
    });
};



const api = async (task, domain, reload = 0) => {
    domain;

    try {
        return await $.ajax({
            url: `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${domain}&reload=${reload}`,
            type: "GET"
        })
            .then(data => {
                if (task == 'buildFeatureImage') {
                    return;
                }
                // if (spinClass)spinClass.find('i').addClass('fa-spin'); 
                let isEmpty = false;
                let temp = 0;

                // Kiểm tra rỗng
                // $.each(data, (index, item) => {
                //     if (typeof item == "object") {
                //         if (!item || item.length == 0) {
                //             isEmpty = true;

                //             (task == 'getOrganicKeywordsBrandedTable' || task == 'getOrganicKeywordsNonBrandedTable') ? task = 'getOrganicKeywordsTable': null;
                //             if ($(`#${task}`).hasClass('is-loading')) {
                //                 $(`#${task}`).removeClass('is-loading').addClass('empty-state');
                //             } else if ($(`#${task}`).find('.is-loading').length > 0) {
                //                 $(`#${task}`).find('.is-loading').removeClass('is-loading').addClass('empty-state');
                //             } else {
                //                 $(`#${task}`).addClass('empty-state');
                //                 $(`#getWebsiteAdsIntelDisplay`).removeClass('empty-state');
                //                 $(`#getScrapedSearchAds`).removeClass('empty-state');

                //             }
                //             $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
                //         } else {
                //             $.each(item, (data, website) => {
                //                 if (!data || data.length == 0) {
                //                     isEmpty = true;
                //                     if ($(`#${task}`).hasClass('is-loading')) {
                //                         $(`#${task}`).removeClass('is-loading').addClass('empty-state');

                //                     } else if ($(`#${task}`).find('.is-loading').length > 0) {
                //                         $(`#${task}`).find('.is-loading').removeClass('is-loading').addClass('empty-state');

                //                     } else {
                //                         $(`#${task}`).addClass('empty-state');

                //                     }
                //                 }
                //             })
                //         }
                //     }
                // });

                // if (isEmpty) {
                switch (task) {
                    case "getHeader":
                        getHeader(data);
                        break;
                    case "getDesktopVsMobileVisits": //sử dụng
                        getDesktopVsMobileVisits(task, data);
                        break;
                    case "getWebDemographicsGender": //sử dung
                        getWebDemographicsGender(task, data);
                        break;
                    case "getWebDemographicsAge": //sử dụng
                        getWebDemographicsAge(task, data);
                        break;
                    case "getTrafficSourcesOverview": //sử dụng
                        getTrafficSourcesOverview(task, data);
                        break;
                    case "getSimilarSites": //sử dụng
                        getSimilarSites(task, data);
                        break;
                    case "getWebsiteGeography": //sử dụng
                        getWebsiteGeography(task, data);
                        break;
                    case "getTrafficAndEngagementOverviewMonthly": // mới sử dụng
                        getTrafficAndEngagementOverviewMonthly(task, data);
                        break;
                    case "getTrafficAndEngagementVisitsDaily":
                    case "getTrafficAndEngagementVisitsWeekly":
                    case "getTrafficAndEngagementVisitsMonthly":
                        getTrafficAndEngagementVisits(task, data, domain);
                        break;
                    case "getUniqueUsersMonthly":
                        getUniqueUsersMonthly(task, data, domain);
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
                        break; //hết sử dụng truy cập thời gian

                    case "getTrafficSocial":
                        getTrafficSocial(task, data, domain);
                        break;
                    case "getTrafficSourcesSocial":
                        getTrafficSourcesSocial(task, data);
                        break;

                    default:
                        break;

                }
                return;
                // }
            });
    } catch (error) {
        console.error(error);
    }
};

//sử dung truy cập theo tháng

const getTrafficAndEngagementOverviewMonthly = async (task, data) => {
    // $('.date-access').html(moment(data.data.lastUpdate).format("MM.YYYY"))
    console.log("1");
    // if (data.status == "success") {
    //     if (data && data.data && data.data.data && data.data.data.Data) {
    //         console.log('2');
    //         var TrafficAndEngagementOverviewMonthly = null
    //         if (data.data.data.Data.AvgMonthVisits) {
    //             TrafficAndEngagementOverviewMonthly = data.data.data.Data;
    //         } else {
    //             TrafficAndEngagementOverviewMonthly = data.data.data.Data.Data[0];
    //         }
    //         console.log('3');
    //         $(`.getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');
    //         // $(`#totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
    //         // let MonthlyVisits = numeral(TrafficAndEngagementOverviewMonthly.AvgMonthVisits).format("0,0");
    //         // let MonthlyUniqueVisitors = numeral(TrafficAndEngagementOverviewMonthly.UniqueUsers).format("0,0");
    //         // let AvgVisitDuration = numeral(TrafficAndEngagementOverviewMonthly.AvgVisitDuration).format("0:00:00");
    //         // let PagesperVisit = numeral(TrafficAndEngagementOverviewMonthly.PagesPerVisit).format("0.00");
    //         // let BounceRate = numeral(TrafficAndEngagementOverviewMonthly.BounceRate).format("00.00%");
    //         // $("span.MonthlyVisits").text(MonthlyVisits);
    //         // $(`#totalTraffic h1`).text(MonthlyVisits >= 1000000 ? numeral(MonthlyVisits).format('0.00a') : numeral(MonthlyVisits).format("0.00a"));
    //         // $("span.MonthlyUniqueVisitors").text(MonthlyUniqueVisitors);
    //         // $("span.AvgVisitDuration").text(AvgVisitDuration);
    //         // $("span.PagesperVisit").text(PagesperVisit);
    //         // $("span.BounceRate").text(BounceRate);
    //         // var newDescription = "Website " + data.data.website + " có lượng người cập hàng tháng vào khoảng " + MonthlyVisits + " visitors và thời gian truy cập trung bình: " + AvgVisitDuration + " giây. Tỉ lệ thoát trang (bounce rate) hiện là " + BounceRate + "...";
    //         // $('meta[name="description"]').attr("content", newDescription);
    //         // $('meta[name="og:description"]').attr("content", newDescription);
    //         let html = `
    //             <div class="traffic-all-access"style="height: 300px;">
    //                 <div class="px-3 py-4" >
    //                     <div class="title-ttc text-center mb-1 font-15">Tổng lượt truy cập</div>
    //                     <div class="d-flex ">
    //                         <div id="totalTraffic" class="d-flex no-block m-auto">
    //                         <h1 class="counter font-gg fontsize-48 mr-1"></h1>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-table-kh px-3 border-top">
    //                     <div class="row padding-y-12 border-bottom ">
    //                         <div class="col h6 m-0 align-self-center text-muted">
    //                             Thời gian truy cập trung bình</div>
    //                         <div class="col-4 text-right">
    //                             <span class="AvgVisitDuration h5 font-gg text-favorite "></span>
    //                         </div>
    //                     </div>
    //                     <div class="row padding-y-12 border-bottom">
    //                         <div class="col h6 m-0 align-self-center text-muted"> Số trang/Lượt truy cập
    //                         </div>
    //                         <div class="col-4 text-right">
    //                             <span class="PagesperVisit h5 font-gg text-favorite "></span>
    //                         </div>
    //                     </div>
    //                     <div class="row padding-y-12">
    //                         <div class="col h6 m-0 align-self-center text-muted"> Tỷ lệ thoát</div>
    //                         <div class="col-4 text-right">
    //                             <span class="BounceRate h5 font-gg text-favorite "></span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //         $('.getTrafficAndEngagementOverviewMonthly').html(html)


    //         // await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    //     } else {
    //         $(`#getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');
    //         $(`#getTrafficAndEngagementOverviewMonthly`).addClass('empty-state');
    //         await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    //     }
    // } else {
    //     await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    // }
    // }
}
//done
// TRUY CAP THEO THỜI GIAN -LƯỢT TRUY CẬP
const getTrafficAndEngagementVisits = async (task, data, domain) => {
    // console.log(data);
    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;
            let TrafficAndEngagementVisits = Data[domain];
            // console.log(TrafficAndEngagementVisits);
            let Desktop = TrafficAndEngagementVisits.Desktop[0];
            let Mobile = TrafficAndEngagementVisits['Mobile Web'][0];
            let dataChartDesktop = {
                keys: [],
                values: []
            };
            let dataChartMobile = {
                keys: [],
                values: []
            };
            let sum_time_access = {
                keys: [],
                values: []
            };
            if (Desktop == null || Mobile == null) {
                $(`#getTrafficAndEngagement`).removeClass('is-loading');
                $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('is-loading');
                $(`#getTrafficAndEngagement--MonthlyVisits`).addClass('empty-state');
            } else {
                Desktop.map(desktop => {
                    let key = desktop.Key;
                    let value = desktop.Value;
                    dataChartDesktop.keys.push(key);
                    dataChartDesktop.values.push(value);
                });
                Mobile.map(mobile => {
                    let key = mobile.Key;
                    let value = mobile.Value;
                    dataChartMobile.keys.push(key);
                    dataChartMobile.values.push(value);
                });
                Desktop.map(function (num, idx) {
                    let value = num.Value + dataChartMobile.values[idx];
                    sum_time_access.keys.push(num.Key)
                    sum_time_access.values.push(value)
                });
                // console.log(sum_time_access);
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
                            let {
                                marker: mrkr3,
                                color: color3,
                                seriesName: name3,
                                value: val3
                            } = params[2];

                            name = moment(name).format('DD MMMM YYYY');
                            val1 = numeral(val1).format('0,0');
                            val2 = numeral(val2).format('0,0');
                            val3 = numeral(val3).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">
                        ${mrkr3} ${name3} <span style="color:${color3};font-weight:bold">${val3}</span>
                        <br/>
                        ${mrkr2} ${name2} <span style="color:${color2};font-weight:bold">${val2}</span>
                        <br/>
                        ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
                    </div>`;
                        }
                    },
                    legend: {
                        data: ['Desktop', 'Mobile', 'Tổng']
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
                    },],
                    series: [{
                        name: 'Desktop',
                        type: 'bar',
                        stack: "0",
                        areaStyle: {
                            color: '#5D78FF'
                        },
                        symbol: "none",
                        itemStyle: {
                            color: '#5D78FF'
                        },
                        data: dataChartDesktop.values,
                        // areaStyle: {
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: 'rgb(79, 141, 249)'
                        //     }, {
                        //         offset: 1,
                        //         color: '#fff'
                        //     }])
                        // },
                    },
                    {
                        name: 'Mobile',
                        type: 'bar',
                        stack: "0",
                        areaStyle: {
                            color: "#34BFA3"
                        },
                        symbol: "none",
                        itemStyle: {
                            color: "#34BFA3"
                        },
                        data: dataChartMobile.values,
                        // areaStyle: {
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: 'rgb(140, 210, 255)'
                        //     }, {
                        //         offset: 1,
                        //         color: '#fff'
                        //     }])
                        // },
                    },
                    {
                        name: 'Tổng',
                        type: 'line',
                        stack: "0",
                        // areaStyle: {
                        //     color: "rgb(255, 241, 240)"
                        // },
                        // symbol: "none",
                        // itemStyle: {
                        //     color: "rgb(242, 62, 51)"
                        // },
                        data: sum_time_access.values,
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
                                color: "#FFB822",
                                borderColor: "rgba(241, 196, 15, 0.2)",
                                borderWidth: 10
                            }
                        }
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
            }
        } else {
            $(`#getTrafficAndEngagement`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyVisits`).addClass('empty-state');
        }

    } else {
        console.log(`${task} failed`);
    }
}
//done
const getUniqueUsersMonthly = async (task, data, domain) => {

    if (data.status == "success") {
        if (data && data.data && data.data.data && data.data.data.Data && data.data.data.Data.Data) {
            let {
                Data
            } = data.data.data.Data;

            let UniqueUsersMonthly = Data[domain];

            let totals = UniqueUsersMonthly.Total[0];

            let dataChart = {
                keys: [],
                values: []
            };

            totals.map(total => {
                let key = total.Key;
                let value = total.Value;
                dataChart.keys.push(key);
                dataChart.values.push(value);
            });

            let ele = document.getElementById("getTrafficAndEngagement--MonthlyUniqueVisitors");

            let myChart = echarts.init(ele);

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
                        let {
                            marker: mrkr1,
                            color: color1,
                            seriesName: name1,
                            value: val1
                        } = params[0];

                        name = moment(name).format('DD MMMM YYYY');

                        val1 = numeral(val1).format('0,0');

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
                    name: domain,
                    data: dataChart.values,
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
                            color: "rgb(79, 141, 249)",
                            borderColor: "rgba(79, 141, 249, 0.2)",
                            borderWidth: 10
                        }
                    }
                },

                ]
            };
            myChart.setOption(option);
            new ResizeSensor($(`#getTrafficAndEngagement--MonthlyUniqueVisitors`), function () {
                myChart.resize();
            });

            await $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).removeClass('is-loading')
            $(`#getTrafficAndEngagement--MonthlyUniqueVisitors`).addClass('empty-state')
        }



    } else {
        console.log(`${task} failed`);
    }
}

const getTrafficAndEngagementAvgVisitDuration = async (task, data, domain) => {
    // console.log(data);

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
            $(`#getTrafficAndEngagement--PagesPerVisit`).removeClass('empty-state');
        } else {
            $(`#getTrafficAndEngagement--PagesPerVisit`).removeClass('is-loading');
            $(`#getTrafficAndEngagement--PagesPerVisit`).addClass('empty-state');
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
// hết sử dụng truy cập thời gian
// SỬ DỤNG
const getWebDemographicsAge = async (task, data) => {
    if (data.status == "success") {

        let {
            data: traffic
        } = data.data;

        let temp = true;

        $.each(traffic, (index, item) => {
            if (item == null) {
                temp = false;
            }
        })

        if (!temp || traffic == null) {
            await $(`#${task}`).removeClass('is-loading').addClass("empty-state");
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            // prepare data

            let dataChart = {
                keys: [],
                values: []
            };

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
                dataChart.values.push(value);
            });

            // render chart

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                grid: {
                    top: 0,
                    bottom: 0,
                    right: 40,
                    left: 70,
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: true,
                    data: dataChart.keys,
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: function (value, index) {
                                var num = customColors.length;
                                return customColors[index % num]
                            }
                        },
                        formatter: function (value, index) {
                            return [
                                '{title|' + value + '} '
                            ].join('\n')
                        },
                        rich: {}
                    },

                },
                series: [{
                    type: 'bar',
                    data: dataChart.values,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 30,
                            color: function (params) {
                                var num = customColors.length;
                                return customColors[params.dataIndex % num]
                            },
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{c}%'
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
    } else {
        console.log(`${task} failed`);
    }
};
// SỬ DỤNG NGUỒN KHÁCH HÀNG
const getTrafficSourcesOverview = async (task, data) => {
    // console.log(data);
    let custumcolor = ["#910BFE", "#1075F1", "#F29016", "#5452CF", "#37A5D3", "#4FD266", "#FFB0E3"]
    if (data.status == "success" && data.data.data) {
        let {
            data: traffic
        } = data.data;
        // prepare data
        // let dataChart = {
        //     keys: [],
        //     values: []
        // };
        let dataChart = [];
        let datanamechart = [];

        let dataChartname = { key: [] };
        let total = 0;
        $.each(traffic, (index, item) => {
            let key = index;
            let value = +numeral(item).format("0");
            let obj = {
                name: key,
                value: value
            }
            let data_namechart = {
                name: key,
                icon: 'circle',
            }

            total += value;
            datanamechart.push(data_namechart);
            dataChart.push(obj);
            dataChartname.key.push(key);
        });

        // render chart

        let data_params_legend;
        let option = {
            color: custumcolor,
            tooltip: {
                trigger: 'item',
                // formatter: '{a} <br/>{b}: {c} ({d}%)',
                formatter: params => {
                    data_params_legend = params
                    return `
                    <div class="text-dark pt-2">
                        <span style="background-color:${params.color}" class=" pill-dot rounded-pill mr-1"></span>
                        <span style="color:#fff;font-weight:400">${params.name}  ${params.percent}%</span>
                    </div>`
                }
            },
            legend: {
                //orient: 'vertical',
                bottom: '5%',
                left: 'center',
                orient: 'horizontal',
                //right: 100,
                //top: 50,
                //bottom: 20,
                data: datanamechart,
                formatter: function (name) {
                    let temp = dataChart.filter((val) => {
                        if (name == val.name)
                            return val;
                    })
                    return name + "\t\t" + numeral(temp[0].value).format("0,00");
                }
            },
            series: [{
                name: 'Nguồn khách hàng',
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: dataChart
            }]
        };
        //* update v7*/
        var containers = document.getElementsByClassName(task);
        var charts = [];
        for (var i = 0; i < containers.length; i++) {
            var chart = echarts.init(containers[i]);
            chart.setOption(option);
            charts.push(chart);
        }
        window.onresize = function () {
            for (var i = 0; i < charts.length; ++i) {
                charts[i].resize();
            }
        };


        await $(`.${task}`).removeClass('is-loading');
        //* update v7*/
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        $(`#${task}`).removeClass('is-loading').addClass('empty-state');;
    }
};
// SỬ DỤNG
const getWebDemographicsGender = async (task, data) => {
    if (data.status == "success") {

        let {
            data: visits
        } = data.data;

        if (data.data.data == null || data.data == null) {
            await $(`#${task}`).removeClass('is-loading').addClass('empty-state');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            const {
                Male,
                Female
            } = visits;
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

            let ele = document.getElementById(task);

            let myChart = echarts.init(ele);

            let option = {
                color: ['#3498db', '#FDA7DF'],
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

            await $(`#${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');

            // Start counting, do this on DOM ready or with Waypoints.
            // counterUp(counter, {
            //     duration: 1000,
            //     delay: 16,
            // })
        }
    } else {
        console.log(`${task} failed`);
    }
};
// SỬ DỤNG
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
            let option = {
                color: masterColor,
                legend: {
                    left: 'center',
                    bottom: '5%',
                    data: ['Máy tính', 'Điện thoại'],
                    textStyle: {
                        fontFamily: 'Google Sans,sans-serif',
                        lineHeight: 12
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
                    radius: ["40%", "60%"],
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


            var containers = document.getElementsByClassName(task);
            var charts = [];
            for (var i = 0; i < containers.length; i++) {
                var chart = echarts.init(containers[i]);
                chart.setOption(option);
                charts.push(chart);
            }



            window.onresize = function () {
                for (var i = 0; i < charts.length; ++i) {
                    charts[i].resize();
                }
            };


            await $(`.${task}`).removeClass('is-loading');

            // new ResizeSensor($(`#${task}`), function() {
            //     myChart.resize();
            //     setTimeout(function() {
            //         myChart.dispatchAction({
            //             type: 'highlight',
            //             seriesIndex: 0,
            //             dataIndex: 0
            //         });
            //     }, 1000);
            // });
            // setTimeout(function() {
            //     myChart.dispatchAction({
            //         type: 'highlight',
            //         seriesIndex: 0,
            //         dataIndex: 0
            //     });
            //     myChart.on('mouseover', function(params) {
            //         if (params.name == dataChart[0].name) {
            //             myChart.dispatchAction({
            //                 type: 'highlight',
            //                 seriesIndex: 0,
            //                 dataIndex: 0
            //             });
            //         } else {
            //             myChart.dispatchAction({
            //                 type: 'downplay',
            //                 seriesIndex: 0,
            //                 dataIndex: 0
            //             });
            //         }
            //     });
            //     myChart.on('mouseout', function(params) {
            //         myChart.dispatchAction({
            //             type: 'highlight',
            //             seriesIndex: 0,
            //             dataIndex: 0
            //         });
            //     });
            // }, 1000);
            await $(`.${task}, #totalTraffic`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            // $(`#totalTraffic h1`).text(totalTraffic >= 1000000 ? numeral(totalTraffic).format('0.00a') : numeral(totalTraffic).format("0,0"));
            // Start counting, do this on DOM ready or with Waypoints.
            // counterUp(counter, {
            //     duration: 1000,
            //     delay: 16,
            // })
        }
    } else {
        console.log(`${task} failed`);
    }
};
// SỬ DỤNG
const getSimilarSites = async (task, data) => {
    $(`#${task}`).html('');
    let {
        data: SimilarSites,
        website: domain
    } = data.data;
    let domain2;
    $.each(SimilarSites, (index, site) => {
        let temp = {
            Domain: site.Domain,
            Favicon: site.Favicon
        }
        arrDomain.push(temp);
        if ((index % 7) == 0) {
            $(`#${task}`).append('<div class="similarSites col-12 col-md-4"></div>')
        }
        var compareNode = $(`<span  data-domain="${site.Domain}" class="changeWebSite text-primary bg-info-2 rounded-pill px-2 font-10 align-self-center ml-auto text-uppercase">+ so sánh</span>`);
        $(`<a title="${site.Domain}" class="d-flex align-items-center" href='?view=traffic-website&action=result&domain=${site.Domain}'">
            <img class="p-1 mr-2 border rounded bg-secondary" src="${site.Favicon}" />
            <span  data-type="website" data-input="${site.Domain}" >${site.Domain}</span>
        </a>`).appendTo(`#${task} .similarSites:last-child`)
            .append(compareNode);
        compareNode.click(function (e) {
            e.preventDefault();
            domain2 = $(this).data('domain');
            if (domain_name && domain2) {
                location.href = `?view=traffic-website&action=compare&domain1=${domain_name.toLowerCase()}&domain2=${domain2.toLowerCase()}`;
            }
        });
    })
    await $(`#${task}`).removeClass('is-loading');
    await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
}
const getWebsiteGeography = async (task, data) => {
    console.log(data);
    if (!data.data || !data.data.data) {
        data = [];
    } else {
        data = data.data.data.filter(item => item.Country != null);
    }
    let chartmap_data = [];
    data.forEach((ele) => {
        // let value_percent = numeral(ele.Share * 100).format('0.00')
        // console.log(value_percent);
        let obj = {
            name: ele.Country.text,
            value: numeral(ele.Share * 100).format('0.00')
        }
        chartmap_data.push(obj)
    })
    console.log(chartmap_data);

    let ele = document.getElementById("map");
    let myChart = echarts.init(ele);
    myChart.showLoading();
    $.getJSON('assets/mapworld.geo.json', function (usaJson) {
        console.log(usaJson)
        myChart.hideLoading();
        echarts.registerMap('World', usaJson, {});
        let option = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    // console.log(params.value);

                    let value = (params.value == NaN) ? '0' : `${numeral(params.value).format('0.00')}`
                    // console.log(value);

                    // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                    return params.name + ': ' + value + '%';
                }
            },
            visualMap: {
                left: 'right',
                min: 500000,
                max: 38000000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'], // 文本，默认为数值文本
                calculable: false
            },
            toolbox: {
                show: true,
                //orient: 'vertical',
                left: 'left',
                top: 'top',
            },
            visualMap: {
                min: 0,
                max: 100,
                text: ['High', 'Low'],
                realtime: false,
                show: false,
                calculable: false,
                inRange: {
                    color: ['lightskyblue', '#0984e3']
                }
            },
            mapStyle: {
                color: "#000",
            },
            series: [{
                name: 'Truy cập theo quốc gia',
                type: 'map',
                roam: true,
                map: 'World',
                zoom: 1.2,
                emphasis: {
                    label: {
                        show: true,
                        areaColor: '#EBECFD'
                    }
                },
                itemStyle: {
                    borderWidth: 0.8,
                    borderColor: '#fff',
                    areaColor: '#EBECFD'
                },
                data: chartmap_data
                // [
                //     { name: 'Vietnam', value: 43 },
                //     { name: 'china', value: 49 },
                //     { name: 'Russia', value: 65 },
                //     { name: 'Canada', value: 31 },
                // ]
            }]
        };
        myChart.setOption(option);
        new ResizeSensor($('map'), function () {
            myChart.resize();
        });
    });
}


// Social 

// Lượt Truy Cập Xã Hội
const getTrafficSocial = async (task, data, domain) => {

    if (data.status == "success") {


        if (data && data.data && data.data.data) {
            let TrafficSocial = data.data.data;
            let SearchTotal = TrafficSocial.SearchTotal;
            let VolumeTotal = TrafficSocial.VolumeTotal;
            let TotalDesktopTraffic = SearchTotal / VolumeTotal;

            $("#TotalSocialVisits").removeClass("is-loading");
            $("#TotalSocialVisits").html(`Tổng ${numeral(SearchTotal).format("0,0")}`);

            // Tổng Số Lượt Truy Cập Xã Hội 
            $('.trafficSocial').html('').html(numeral(SearchTotal).format("0.0a"))
            $('.costTrafficSocial').html('').html(numeral(SearchTotal*0.12).format('0,0$'))

            let dataChartPie = [{
                name: "Mạng xã hội",
                value: SearchTotal
            },
            {
                name: "Tổng",
                value: VolumeTotal - SearchTotal
            }
            ]
            // render chart
            let elePie = document.getElementById("getTotalSocialVisits");
            let myChartPie = echarts.init(elePie);

            let optionPie = {
                color: masterColor,
                legend: {
                    bottom: "-2%",
                    right: "25%",
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


            new ResizeSensor($(`#getTotalSocialVisits`), function () {
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

            await $(`#getTotalSocialVisits`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            await $(`#getTotalSocialVisits`).removeClass('empty-state');

            //
            let Dates = TrafficSocial.Dates;

            let dem = 0;
            for (let i = 0; i < Dates.length; i++) {
                dem += i
            }
            // Date socail visits
            let to = moment(Dates[0]).format('DD-YYYY');
            let from = moment(Dates[dem]).format('DD-YYYY');
            $('.similarDates').html(` ${to} - ${from}`)

            let Volumes = TrafficSocial.Volumes;
            let tempss = [];
            $.each(Volumes, (name, data) => {
                if (data[0] == null) {
                    tempss.push('null');
                } else {
                    tempss.push('');
                }
            })

            if (tempss[0] == 'null') {
                $('#getSocialVisits').addClass('empty-state').removeClass('is-loading')
            } else {
                let dataChart = {
                    keys: [],
                    values: []
                };

                $.each(Dates, (idx, val) => {
                    dataChart.keys.push(val);
                })

                $.each(Volumes, (name, data) => {
                    dataChart.values.push(data[0]);
                })

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

                            val1 = numeral(val1).format('0,0');

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
                        name: domain,
                        data: dataChart.values,
                        type: 'line',
                        stack: "0",
                        areaStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
                        symbol: "none",
                        itemStyle: {
                            color: 'rgb(79, 141, 249)'
                        },
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
    } else {
        console.log(`${task} failed`);
    }
}


// Kênh Xã Hội
const getTrafficSourcesSocial = async (task, data) => {
    // console.log(data);

    if (data.status == "success") {
        if (data.data.haveData == false) {
            $('.getTrafficSourcesSocial').addClass('empty-state').removeClass('is-loading')
        } else {
            let {
                data: traffic
            } = data.data;
            
            $(`.${task}`).css('height','235px')
            $(`.widget-${task} .bg-white `).addClass('h-100')
            $(`.widget-${task} .widgetBody `).addClass('pt-5 pb-4')
            // console.log(traffic);

            if (traffic != null) {
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

                let option = {
                    color: masterColor,
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
                // myChart.setOption(option);
                //* update v7*/
                var myChart = document.getElementsByClassName('getTrafficSourcesSocial');
                // console.log(myChart);
                
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


                await $(`.${task}`).removeClass('is-loading');
                await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            } else {
                $('#Parent-getTrafficDisplayAdvertisingAds').addClass('empty-state')
                $('#getTrafficDisplayAdvertisingAds').addClass('d-none')
            }
        }

    } else {
        console.log(`${task} failed`);
    }
};

export default api;
