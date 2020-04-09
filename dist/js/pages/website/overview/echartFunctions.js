// import counterUp from '../counterup2/index.js';
// import counterUp from '../../../../js/pages/keywords/counterup2/index.js';

// const counter = document.querySelector('.counter');
var domain = "";
if (location.href.indexOf("/rank/") > 1) {
    domain = location.href.substring(location.href.indexOf("/rank/") + 6);
} else {
    domain = url.searchParams.get("domain");
}
domain = extractHostname(domain);

function extractHostname(url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

var arrNameContry = [];
$.get(`//localapi.trazk.com/webdata/v3.php?task=countryIsoName&userToken=${userToken}`, function(res) {
    arrNameContry = res.data

})
var domain_name = domain;

var arrDomain = [];
var selectWebsite = "";

// const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];
const masterColor = ['#5d78ff', '#fd397a', '#ffb822', '#0abb87', '#48465b', '#646c9a'];

$('body').on('click', '.btn-compare', function(event) {
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

function updateMetaTitle(text) {
    var metaTitle = text + document.title;
    document.title = metaTitle;
    $('meta[name="og:title"]').attr("content", metaTitle);

}
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

    // Set value Headerhttps://www.google.com/s2/favicons?domain=news.zing.vn
    similarIcon = "https://www.google.com/s2/favicons?domain=" + similarDomain;
    $(".similarHeader .similarIcon").html(
        `<img class="p-1 mr-2 border rounded bg-secondary" src="${similarIcon}" />`
    );
    $(".similarHeader .similarDomain").text(similarDomain);
    $(".similarRank .similarGlobalRank").text('#' + numeral(similarGlobalRank).format('0,0'));
    $(".similarRank .similarCountryRank").text('#' + numeral(similarCountryRank).format('0,0'));
    $(".similarHeader .similarTitle").html(similarTitle);
    $(".similarHeader .similarDescription").html(similarDescription);
    $(".similarHeader .similarTags").html(
        '<p class="font-bold mb-2"><i class="far fa-tag font-14"></i> Từ khoá: </p>' +
        similarTags.map(tag => `<span><a href="./index.php?view=keywords&action=keywords-overview&keyword=${tag}"  data-type="keyword" class="changeURL" data-input="${tag}" class="text-muted"><i class="far fa-search"></i> ${tag}</a></span>`).join("")
    );


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
        const appIcon = "https://imgcdn.trazk.com/f.php?f=" + btoa(mainApp.icon);
        const appTitle = mainApp.title;
        apps += `<a target="_blank" class="mr-2" href="${appId}"><img width="32px" src="${appIcon}" /></a>`;
    });

    $(".similarHeader .similarApps").html(
        `<div class="d-flex flex-row">${apps}</div>`
    );

    similarThumb = "https://imgcdn.trazk.com/f.php?f=" + btoa(similarThumb);
    similarThumbMobile = "https://imgcdn.trazk.com/f.php?f=" + btoa(similarThumbMobile);
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
    const getDomain = async() => {
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

    const getDomainCompare = async() => {
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

                        $("span").click(function() {
                            $("#swal-input2").val($(this).data("domain"));
                            $(".selectWebsite").html("");
                            $('.swal2-confirm').css("opacity", "1")
                            $(".selectWebsite").css("opacity", "0")

                        })
                    })

                    $("span").click(function() {
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



const api = async(task, domain, reload = 0) => {
    domain;
    let url = "";
    let method = '';
    let taskname = '';
    if (task == "googleAdsGDNOverview" || task == "getAllImageTable") {
        taskname = 'getDomainOverview';
        method = "googleAdsGDNOverview"
    }
    if (task == "SampleAdsasHTML" || task == "getAllHTMLTable") {
        taskname = 'getDomainOverview';
        method = "googleAdsGDNOverview"
    }
    if (task == "SampleAdsasText" || task == "getAllTextTable") {
        taskname = 'getDomainOverview';
        method = "googleAdsGDNOverview"
    }
    if (task == "googleAdsGDNOverview") {
        taskname = 'getDomainOverview';
        method = "googleAdsGDNOverview"
    }
    if (task == 'getDomainBackLinkDetail') {
        taskname = 'getDomainBackLinkDetail'
        method = 'backlinksOverview'
    }
    if (task == 'getTraffic30Days') {
        taskname = 'getDomainOverview'
        method = 'ranksHistory'
    }
    if (task == 'getScrapedSearchAds') {
        taskname = 'getDomainOverview'
        method = 'adwordsPositionsOverview'
    }
    if (task == 'getDomainOverviewV2') {
        taskname = 'getDomainOverviewV2'
        method = 'all'
    }
    if (task == 'getTrafficOverview') {
        taskname = 'getTrafficOverview'
        method = 'all'

    }

    // console.log(taskname);

    if (taskname == 'getDomainBackLinkDetail' || taskname == 'getAdvertisingDisplayDetail' || taskname == 'getDomainOverview' || taskname == 'getDomainOverviewV2' || taskname == 'getTrafficOverview') {
        // taskname = task;
        url = `//localapi.trazk.com/webdata/v3.php?task=${taskname}&domain=${domain}&page=1&method[${method}]=true&reload=${reload}&userToken=${userToken}`
    } else {
        url = `//localapi.trazk.com/webdata/v3.1.php?task=${task}&domain=${domain}&reload=${reload}&userToken=${userToken}`
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
                // if (spinClass)spinClass.find('i').addClass('fa-spin'); 
                let isEmpty = false;
                let temp = 0;
                switch (task) {
                    case "getTrafficOverview": // thêm chart moi nhât
                        getTrafficOverview(task, data);
                        break;
                    case "getHeader":
                        getHeader(data);
                        break;
                    case "estmatedWorth":
                        estmatedWorth(task, data);
                        break;
                    case "getTrafficSocial":
                        getTrafficSocial(task, data);
                        break;
                    case "getScrapedSearchAds":
                        getScrapedSearchAds(task, data);
                        break;
                    case "adwordsCompetitorsOverview":
                        adwordsCompetitorsOverview(task, data);
                        break;
                    case "getTrafficSourcesSearch":
                        getTrafficSourcesSearch(task, data);
                        break;
                    case "getDomainBackLinkDetail":
                        getDomainBackLinkDetail(task, data);
                        break;
                    case "getDomainOverviewV2":
                        getDomainOverviewV2(task, data);
                        break;
                    case "SampleAdsasImage":
                        SampleAdsasImage(task, data);
                        break;
                    case "googleAdsGDNOverview":
                        googleAdsGDNOverview(task, data);
                        break;
                    case "SampleAdsasHTML":
                        SampleAdsasHTML(task, data);
                        break;
                    case "SampleAdsasText":
                        SampleAdsasText(task, data);
                        break;
                        // case "getDesktopVsMobileVisits": //sử dụng
                        //     getDesktopVsMobileVisits(task, data);
                        //     break;
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
                        // case "getWebsiteGeography": //sử dụng
                        //     getWebsiteGeography(task, data);
                        //     break;
                    case "getTraffic30Days": //sử dụng
                        getTraffic30Days(task, data);
                        break;
                    case "getMarketingMixOverviewDaily":
                        // case "getMarketingMixOverviewWeekly":
                        // case "getMarketingMixOverviewMonthly":
                        getMarketingMixOverview(task, data);
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
                    default:
                        break;

                }
                lockedModule(task, data.userData.member);
                return;
                // }
            });
    } catch (error) {
        // console.error(error);
    }
};
const estmatedWorth = async(task, data) => {
    if (data.status == "success") {
        $('.money-website-price').html(`${numeral(data.data).format('0,0')}<span>USD</span>`);
    }
}

// check vip-free-demo user
function lockedModule(boxWidgetName, level) {
    var freeModule = ["getDesktopVsMobileVisits", "getWebDemographicsGender", "getWebDemographicsAge", "getDomainBackLinkDetail", "getMarketingMixOverviewDaily", "getTrafficSocial", "getTrafficSourcesSearch", "SampleAdsasImage", "SampleAds", "getScrapedSearchAds", "getSimilarSites", 'getListGoogleAdsCompetitor'];
    var VIPModule = [];
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
//sử dung truy cập theo tháng
const getTrafficAndEngagementOverviewMonthly = async(task, data, domain) => {

        // locked(id, data)
        $('.date-access').html(moment(data.data.lastUpdate).format("MM.YYYY"))
        if (data.status == "success") {
            if (data && data.data && data.data.data && data.data.data.Data) {
                var TrafficAndEngagementOverviewMonthly = null
                if (data.data.data.Data.AvgMonthVisits) {
                    TrafficAndEngagementOverviewMonthly = data.data.data.Data;
                } else {
                    TrafficAndEngagementOverviewMonthly = data.data.data.Data;
                }
                let MonthlyVisits = numeral(TrafficAndEngagementOverviewMonthly.AvgMonthVisits).format("0,0");
                let html = `
                        <div class="px-3 py-4" >
                            <div class="title-ttc text-center mb-1 font-15">Tổng lượt truy cập</div>
                            <div class="">
                                <div id="totalTraffic" class="text-center no-block m-auto">
                                <span class="counter font-gg fontsize-48 mr-1">${MonthlyVisits >= 1000000 ? numeral(MonthlyVisits).format('0.00a') : numeral(MonthlyVisits).format("0.00a")}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-table-kh px-3 border-top text-left">
                            <div class="row padding-y-12 border-bottom ">
                                <div class="col h6 m-0 align-self-center text-muted">
                                    Thời gian truy cập trung bình</div>
                                <div class="col-4 text-right">
                                    <span class="AvgVisitDuration h5 font-gg text-favorite ">${numeral(TrafficAndEngagementOverviewMonthly.AvgVisitDuration).format("0:00:00")}</span>
                                </div>
                            </div>
                            <div class="row padding-y-12 border-bottom text-left">
                                <div class="col h6 m-0 align-self-center text-muted"> Số trang/Lượt truy cập
                                </div>
                                <div class="col-4 text-right">
                                    <span class="PagesperVisit h5 font-gg text-favorite ">${numeral(TrafficAndEngagementOverviewMonthly.PagesPerVisit).format("0.00")}</span>
                                </div>
                            </div>
                            <div class="row padding-y-12 text-left">
                                <div class="col h6 m-0 align-self-center text-muted"> Tỷ lệ thoát</div>
                                <div class="col-4 text-right">
                                    <span class="BounceRate h5 font-gg text-favorite ">${numeral(TrafficAndEngagementOverviewMonthly.BounceRate).format("00.00%")}</span>
                                </div>
                            </div>
                        </div>
                `;
                $('.getTrafficAndEngagementOverviewMonthly').html(html)
                $(`.getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');

                let AvgVisitDuration = numeral(TrafficAndEngagementOverviewMonthly.AvgVisitDuration).format("0:00:00");
                let PagesperVisit = numeral(TrafficAndEngagementOverviewMonthly.PagesPerVisit).format("0.00");
                let BounceRate = numeral(TrafficAndEngagementOverviewMonthly.BounceRate).format("00.00%");


                var newDescription = "Website " + data.data.website + " có lượng người cập hàng tháng vào khoảng " + MonthlyVisits + " visitors và thời gian truy cập trung bình: " + AvgVisitDuration + " giây. Tỉ lệ thoát trang (bounce rate) hiện là " + BounceRate + "...";
                $('meta[name="description"]').attr("content", newDescription);
                $('meta[name="og:description"]').attr("content", newDescription);

            } else {
                // $(`#getTrafficAndEngagementOverviewMonthly`).removeClass('is-loading');
                // $(`#getTrafficAndEngagementOverviewMonthly`).addClass('empty-state');
                // await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
            }
        } else {
            // await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        }
    }
    //done
    // TRUY CAP THEO THỜI GIAN -LƯỢT TRUY CẬP
const getTrafficAndEngagementVisits = async(task, data, domain) => {
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
                    Desktop.map(function(num, idx) {
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
                        }, ],
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

                            },
                            {
                                name: 'Tổng',
                                type: 'line',
                                stack: "0",

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
                    new ResizeSensor($(`#getTrafficAndEngagement--MonthlyVisits`), function() {
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
const getUniqueUsersMonthly = async(task, data, domain) => {

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
            new ResizeSensor($(`#getTrafficAndEngagement--MonthlyUniqueVisitors`), function() {
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

const getTrafficAndEngagementAvgVisitDuration = async(task, data, domain) => {
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
            new ResizeSensor($(`#getTrafficAndEngagement--AvgVisitDuration`), function() {
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

const getTrafficAndEngagementPagesPerVisit = async(task, data, domain) => {

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
                new ResizeSensor($(`#getTrafficAndEngagement--PagesPerVisit`), function() {
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
    //Tỉ lệ truy cập từ tìm kiếm
const getTrafficSourcesSearch = async(task, data) => {

    $(`.${task}`).parents().parents().parents().removeClass('rounded').addClass('rounded-top')
        // $(`.${task}`).attr('style', 'height: 250px;');
    $('.precent-organicoverview').removeClass('d-none')
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
                color: masterColor,
                legend: {
                    bottom: "5%",
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
const getTrafficAndEngagementBounceRate = async(task, data, domain) => {

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
                new ResizeSensor($(`#getTrafficAndEngagement--BounceRate`), function() {
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
const getWebDemographicsAge = async(task, data) => {
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
            await $(`.${task}`).removeClass('is-loading').addClass("empty-state");
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        } else {
            // prepare data
            let dataChart = {
                keys: [],
                values: []
            };
            $(`.${task}`).addClass('p-20')
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
                            color: function(value, index) {
                                var num = masterColor.length;
                                return masterColor[index % num]
                            }
                        },
                        formatter: function(value, index) {
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
                            color: function(params) {
                                var num = masterColor.length;
                                return masterColor[params.dataIndex % num]
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
            // myChart.setOption(option);


            // new ResizeSensor($(`#${task}`), function() {
            //     myChart.resize();
            // });
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
            // await $(`#${task}`).removeClass('is-loading');
            await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
        }
    } else {
        console.log(`${task} failed`);
    }
};
// SỬ DỤNG NGUỒN KHÁCH HÀNG
const getTrafficSourcesOverview = async(task, data) => {
    $('.getTrafficSourcesOverview ').attr('style', 'min-height:300px')
    if (data.status == "success" && data.data.data) {
        $(`.${task}`).removeClass('empty-state');
        let {
            data: traffic
        } = data.data;
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
        // console.log(traffic.Social);
        $('.precent-organicoverview').html(`${numeral((traffic.Social).toFixed(2)).format("0,0")}/${numeral(total).format("0,0")}`)
            // render chart
        let data_params_legend;
        let option = {
            color: masterColor,
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
                formatter: function(name) {
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
        window.onresize = function() {
            for (var i = 0; i < charts.length; ++i) {
                charts[i].resize();
            }
        };
        await $(`.${task}`).removeClass('is-loading');
        //* update v7*/
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    } else {
        $(`.${task}`).removeClass('is-loading').addClass('empty-state');
    }
};
// SỬ DỤNG
const getWebDemographicsGender = async(task, data) => {
    // console.log(data);
    if (data.status == "success") {
        // console.log("ddd");
        $(`.${task}`).removeClass('empty-state');
        let {
            data: visits
        } = data.data;
        if (data.data.data == null || data.data == null || data.data.data.Male == null) {
            await $(`.${task}`).removeClass('is-loading').addClass('empty-state');
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
            let option = {
                color: ['#ffb822', '#0abb87'],
                legend: {
                    bottom: '5%',
                    left: 'center',
                    data: ['Nam', 'Nữ'],
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
            //* update v7*/
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
            //* update v7*/
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
// SỬ DỤNG

// SỬ DỤNG
const getSimilarSites = async(task, data) => {
    if (data.status == 'success') {
        $(`.${task}`).addClass('text-left')
        if (data.data.data && data.data.haveData == true) {
            $(`.${task}`).addClass('row');
            $(`.${task}`).attr('style', 'min-height:300px !important');
            // console.log("sssss");
            $(`.${task}`).html('');
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
                    $(`.${task}`).append('<div class="similarSites col-12 col-md-4"></div>')
                }
                var compareNode = $(`<span  data-domain="${site.Domain}" class="changeWebSite text-primary bg-info-2 rounded-pill px-2 font-10 align-self-center ml-auto text-uppercase">+ so sánh</span>`);
                $(`<a title="${site.Domain}" class="d-flex align-items-center" href='${rootURL}/rank/${site.Domain}'">
            <img class="p-1 mr-2 border rounded bg-secondary" src="https://www.google.com/s2/favicons?domain=${site.Domain}">
            <span  data-type="website" data-input="${site.Domain}" >${site.Domain}</span>
        </a>`).appendTo(`.${task} .similarSites:last-child`)
                    .append(compareNode);
                compareNode.click(function(e) {
                    e.preventDefault();
                    domain2 = $(this).data('domain');
                    // if (domain_name && domain2) {
                    //     location.href = `?view=traffic-website&action=compare&domain1=${domain_name.toLowerCase()}&domain2=${domain2.toLowerCase()}`;
                    // }
                    Swal.fire({
                        title: 'Hãy nhập website để so sánh',
                        html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${domain_name} placeholder="Nhập website của bạn">` +
                            `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                            `<input id="swal-input2" value="${domain2}" class="swal2-input text-lowercase"  placeholder="Nhập website của đối thủ">`,
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
                            location.href = `${rootURL}/?view=traffic-website&action=compare&domain1=${result.value[0].toLowerCase()}&domain2=${result.value[1].toLowerCase()}`;
                        }
                    })
                });
            })







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

// getDomainBackLinkDetail
const getDomainBackLinkDetail = async(task, data) => {
        // console.log(data);
        if (data.status == 'success') {
            let dataBacklinkTypes = data.data.backlinksOverview;
            let total = dataBacklinkTypes.text + dataBacklinkTypes.frame + dataBacklinkTypes.form + dataBacklinkTypes.image
            let text = '';
            let img = ''
            let form = ''
            let frame = ''
            if (numeral(dataBacklinkTypes.text * 100 / total).format('0,0') < 1) {
                text = "<1";
            } else {
                text = numeral(dataBacklinkTypes.text * 100 / total).format('0,0');
            }
            if (numeral(dataBacklinkTypes.image * 100 / total).format('0,0') < 1) {
                img = "<1";
            } else {
                img = numeral(dataBacklinkTypes.image * 100 / total).format('0,0');
            }
            if (numeral(dataBacklinkTypes.form * 100 / total).format('0,0') < 1) {
                form = "<1";
            } else {
                from = numeral(dataBacklinkTypes.form * 100 / total).format('0,0');
            }
            if (numeral(dataBacklinkTypes.frame * 100 / total).format('0,0') < 1) {
                frame = "<1";
            } else {
                frame = numeral(dataBacklinkTypes.frame * 100 / total).format('0,0');
            }
            // Text
            $('.text-score').html((numeral(dataBacklinkTypes.text).format('0.0a')));
            $('.text-percent').html(text + '%')
            $('.slider-fill-text').css('width', (numeral(dataBacklinkTypes.text * 100 / total).format('0,0') + '%'))
                // Image
            $('.image-score').html((numeral(dataBacklinkTypes.image).format('0.0a')));
            $('.image-percent').html(img + '%')
            $('.slider-fill-image').css('width', (numeral(dataBacklinkTypes.image * 100 / total).format('0,0') + '%'))
                // Form
            $('.form-score').html((numeral(dataBacklinkTypes.form).format('0.0a')));
            $('.form-percent').html(form + '%')
            $('.slider-fill-form').css('width', (numeral(dataBacklinkTypes.form * 100 / total).format('0,0') + '%'))
                //  Frame
            $('.frame-score').html((numeral(dataBacklinkTypes.frame).format('0.0a')));
            $('.frame-percent').html(frame + '%')
            $('.slider-fill-frame').css('width', (numeral(dataBacklinkTypes.frame * 100 / total).format('0,0') + '%'))

            // ////////////////
            // let datachart = [];
            let api_chart = data.data.backlinksOverview

            let option = {
                color: ['#5d78ff', '#ffb822'],
                legend: {
                    top: "30%",
                    left: '60%',

                    data: ['Follow', 'NoFollow'],
                    formatter: function(name) {

                        let value = name == 'Follow' ? api_chart.follow : api_chart.nofollow;
                        return `${name}\t\t\t ${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')}`;
                    }
                },
                series: [{
                    type: 'pie',
                    minAngle: 20,
                    radius: ["40%", "70%"],
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
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    data: [
                        { value: api_chart.follow, name: 'Follow' },
                        { value: api_chart.nofollow, name: 'NoFollow' },
                    ]
                }]
            };
            // myChart.setOption(option);
            // Update v7
            var containers = document.getElementsByClassName('chart-followvsnofollow');
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
            await $(`.chart-followvsnofollow `).removeClass('is-loading');
            //v7
        }
    }
    //done
const getDomainOverviewV2 = async(boxName, data) => {
    getScrapedSearchAds('getScrapedSearchAds', data)
    getTraffic30Days('getTraffic30Days', data)
    getListGoogleAdsCompetitor('getListGoogleAdsCompetitor', data)
    lockedModule('getScrapedSearchAds', data.userData.member);
    lockedModule('getListGoogleAdsCompetitor', data.userData.member);
};
const getScrapedSearchAds = async(boxName, data) => {

    if (data.data.adwordsPositionsOverview.length == 0) {
        $('#getScrapedSearchAds').addClass('empty-state')
    }
    if (data.status == "success") {
        var SearchAds = data.data.adwordsPositionsOverview;
        //  console.log(SearchAds);        
        $(`#getScrapedSearchAds .carousel-inner`).html('');
        $(`#getScrapedSearchAds .carousel-indicators`).html('');
        $("#row-getPaidSearchCompetitorsTableV1").show();
        await $.each(SearchAds, (index, value) => {
            if (value) {


                let carouselItem = ''; {
                    let {
                        description,
                        visibleUrl,
                        phrase,
                        keywordDifficulty,
                        position,
                        title,
                        traffic,
                        trafficCost,
                        trafficPercent,
                        crawledTime,
                    } = value;


                    (description != '') ? description = '<div class="text-muted">' + description + '</div>': null;
                    carouselItem = `
                         <div class="carousel-item p-20 p-l-40 p-r-40 ${index == 0 ? 'active' : ''}">
                         <div class="similarAdsText rounded">
                             <div class="d-flex no-block align-items-center justify-content-center bg-secondary p-10" style="height:185px">
                             <div class="bg-white shadow p-10 w-100">
                                 <a href="javascript:;" target="_blank" title="${visibleUrl}">
                                 ${title}
                                 </a>   
                                 <div class="text-success text-truncate pb-0">${visibleUrl}</div>                         
                                 ${description}
                             </div>
                             </div>
                             <div class="similarAdsDetails p-20 border-top">
                             <div class="row">
                                 <div class="col text-muted font-10">Traffic: <span>${numeral(traffic).format('0,0')}</span></div>
                                 <div class="col text-muted font-10">Tỉ lệ traffic: <span>${numeral(trafficPercent).format('0,0')} <sup>%</sup></span></div>
                                 <div class="col text-muted font-10">Chi phí: <span>${numeral(trafficCost).format('0,0')} <sup>$</sup></span></div>
                             </div>
                             
                             <div class="mt-3 text-truncate pb-0"><span class="mr-1 bagInfo font-10 ">${moment.unix(crawledTime).format("DD MMM YYYY")}</span> <span class="font-10 text-muted">  Từ khoá: ${phrase}</span></div>
                             </div>
                         </div>
                         </div>
                         `

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

// Lượt Truy Cập Xã Hội
const getTrafficSocial = async(task, data, domain) => {
        if (data.status == "success") {
            if (data && data.data && data.data.data) {
                let TrafficSocial = data.data.data;

                let SearchTotal = TrafficSocial.SearchTotal;
                let VolumeTotal = TrafficSocial.VolumeTotal;
                let TotalDesktopTraffic = SearchTotal / VolumeTotal;

                $("#TotalSocialVisits").removeClass("is-loading");
                $("#TotalSocialVisits").html(`Tổng ${numeral(SearchTotal).format("0,0")}`);

                // Tổng Số Lượt Truy Cập Xã Hội 
                $("#totalSocailVisits").html(`${numeral(SearchTotal).format("0.000a")}`);
                $("#percenTotalSocailVisits").html(`${numeral(TotalDesktopTraffic).format('0.00%')}`);

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
                        formatter: function(name) {
                            let value = name == 'Tổng' ? dataChartPie[1].value : dataChartPie[0].value;
                            return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                        }
                    },
                    series: [{
                        type: 'pie',
                        legendHoverLink: false,
                        minAngle: 20,
                        radius: ["45%", "70%"],
                        center: ["45%", "45%"],
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


                new ResizeSensor($(`#getTotalSocialVisits`), function() {
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
                ${mrkr1} Traffic <span style="color:${color1};font-weight:bold">${val1}</span>
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
                new ResizeSensor($(`#getSocialVisits`), function() {
                    myChart.resize();
                });

                await $(`#getSocialVisits`).removeClass('is-loading');
                $(`#getSocialVisits`).removeClass('empty-state');
                $(`#getTotalSocialVisits`).parent().removeClass('empty-state');
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
    //getMarketingMixOverview
const getMarketingMixOverview = async(task, data) => {
        if (data.status == "success") {
            if (data && data.data && data.data.data && data.data.data.Data) {
                let {
                    DailyData,
                    WeeklyData,
                    MonthlyData
                } = data.data.data.Data;

                if (Object.values(DailyData).length != 0 || Object.values(WeeklyData).length != 0 || Object.values(MonthlyData).length != 0) {
                    // let { TrafficShare, AverageDuration, PagesPerVisit, BounceRate } = DataMarket; 
                    const run = async(taskName, temp) => {
                        let DataMarket;
                        if (temp == "Daily") {
                            DataMarket = data.data.data.Data.DailyData;
                        } else if (temp == "Weekly") {
                            DataMarket = data.data.data.Data.WeeklyData;
                        } else {
                            DataMarket = data.data.data.Data.MonthlyData;
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

                                $(`#getMarketingMixOverview`).removeClass('is-loading');
                                $(`#getMarketingMixOverview`).addClass('empty-state');
                            } else {
                                let ele = document.getElementById(`getMarketingMixOverview--${taskName}`);

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

                                new ResizeSensor($(`#getMarketingMixOverview--${taskName}`), function() {
                                    myChart.resize();
                                });
                                await $(`.similarReloadTask[data-task="getMarketingMixOverviewDaily"]`).find('i').removeClass('fa-spin');
                                await $(`#getMarketingMixOverview--${taskName}`).removeClass('is-loading');
                                await $(`#getMarketingMixOverview`).removeClass('is-loading');
                                await $(`#getMarketingMixOverview`).removeClass('empty-state');

                            }
                        } else {
                            $(`#getMarketingMixOverview`).removeClass('is-loading');
                            $(`#getMarketingMixOverview`).addClass('empty-state');
                            await $(`.similarReloadTask[data-task="getMarketingMixOverviewDaily"]`).find('i').removeClass('fa-spin');
                        }

                    }


                    run('TrafficShare', "Weekly");

                    $('#getMarketingMixOverview a[data-toggle="tab"]').on('shown.bs.tab', function(e) {


                        var taskName = $(e.target).data('task'); // activated tab 
                        let ele = document.getElementById(`getMarketingMixOverview--${taskName}`);

                        run(taskName, "Weekly");

                        $("#TimeChartMarket").html("");

                        $("#TimeChartMarket").html(`<fieldset>
                    <input id="setgetMarketingMixOverviewDaily" class="radio-inline__input" type="radio"
                        name="getMarketingMixOverview" value="setgetMarketingMixOverviewDaily" />
                    <label class="radio-inline__label" for="setgetMarketingMixOverviewDaily">
                        Ngày
                    </label>
                    <input id="setgetMarketingMixOverviewWeekly" class="radio-inline__input" type="radio"
                        name="getMarketingMixOverview" value="setgetMarketingMixOverviewWeekly"
                        checked="checked" />
                    <label class="radio-inline__label" for="setgetMarketingMixOverviewWeekly">
                        Tuần
                    </label>
                    <input id="setgetMarketingMixOverviewMonthly" class="radio-inline__input" type="radio"
                        name="getMarketingMixOverview" value="setgetMarketingMixOverviewMonthly" />
                    <label class="radio-inline__label" for="setgetMarketingMixOverviewMonthly">
                        Tháng
                    </label>
                </fieldset>`)

                        $("input[type=radio][name=getMarketingMixOverview]").change(function() {

                            let ele = document.getElementById(`getMarketingMixOverview--${taskName}`);

                            echarts.dispose(ele);
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

                        let ele = document.getElementById(`getMarketingMixOverview--TrafficShare`);
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
                    $(`#getMarketingMixOverview`).removeClass('is-loading');
                    $(`#getMarketingMixOverview`).addClass('empty-state');
                    await $(`.similarReloadTask[data-task="getMarketingMixOverviewDaily"]`).find('i').removeClass('fa-spin');
                }

            } else {
                $(`#getMarketingMixOverview`).removeClass('is-loading');
                $(`#getMarketingMixOverview`).addClass('empty-state');
                await $(`.similarReloadTask[data-task="getMarketingMixOverviewDaily"]`).find('i').removeClass('fa-spin');
            }

        } else {
            console.log(`${task} failed`);
        }
    }
    // DISPLAY ADS
const SampleAdsasImage = async(task, data) => {
        $('.footer--bt-view').remove()
        if (data.data.googleAdsGDNOverview.media.data.length == 0) {
            $('.sample-image-ads').addClass('empty-state')
        } else {
            data.data.googleAdsGDNOverview.media.data.forEach((val, index) => {
                if (index < 5) {
                    $(".sample-image-ads").append(`<div class="box-all">
                <div class="box-img">
                    <div class="image-media">
                        <div class="image-sample">
                            <img src="https://imgcdn.trazk.com/f.php?f=${btoa(val.mediaUrl)}">
                        </div>
                    </div>
                    
                </div>
            </div>`)
                }
            })
        }
    } // DISPLAY ADS
const googleAdsGDNOverview = async(task, data) => {
    lockedModule('SampleAds', data.userData.member);
    if (data.data.googleAdsGDNOverview.media.data.length == 0) {
        $('.sample-image-ads').addClass('empty-state')
    } else {

        $(".count-image").html(`(${data.data.googleAdsGDNOverview.media.total})`);
        data.data.googleAdsGDNOverview.media.data.forEach((val, index) => {

            $(".sample-image-ads").append(`<div class="box-all">
                <div class="box-img">
                    <div class="image-media">
                        <div class="image-sample">
                            <img src="https://imgcdn.trazk.com/f.php?f=${btoa(val.mediaUrl)}">
                        </div>
                    </div>
                    
                </div>
            </div>`)
        })
        $(".count-text").html(`(${data.data.googleAdsGDNOverview.text.total})`);
        data.data.googleAdsGDNOverview.text.data.forEach((val, index) => {

            $(".sample-text-ads").append(` <div class="box-text-all">
            <div class="box-text">
                <div class="body-text-overview">
                    <a href="" class="title-blued">${val.title}</a>
                    <div class="title-greened mt-2">
                        <a href="${val.targetUrl}" class="font-12 smallgreend">${val.targetUrl}</a>
                        <span class="child-hover delete-ic fal fa-external-link"></span>
                    </div>
                    <a href="#" class="text-contended pt-5">${val.text}</a>
                </div>
               
            </div>
        </div>`)

        })

    }
}
const SampleAdsasHTML = async(task, data) => {
    $('.footer--bt-view').remove()
    if (data.data.htmlAds == '') {
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
                    <span class="dayseen">Xuất hiện:<span class="seen-img pl-1 font-12">${val.daysSeen}</span> ngày</span>
                    <span class="image-w-h"> <small class="image-width">${val.width}</small><small class="vs"> x </small> <small class="image-height">${val.height}</small></span>
                </div>
            </div>
        </div>`)
        }
    })
}
const SampleAdsasText = async(task, data) => {
    $('.footer--bt-view').remove();
    console.log(data);

    if (data.data.googleAdsGDNOverview.text.data.length == '') {
        $('.sample-text-ads').addClass('empty-state')
    }
    data.data.googleAdsGDNOverview.text.data.forEach((val, index) => {
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
                    <p class="tseen">Xuất hiện: <small class="font-12">1</small>${val.daysSeen} ngày</p>
                </div>
            </div>
        </div>`)
        }
        if (!val.visibleUrl) {
            $('.title-greened span.delete-ic').remove('span')

        }
    })
}


function kFormatter(x) {
    if (isNaN(x)) return x;

    if (x < 9999) {
        return x;
    }

    if (x < 1000000) {
        return Math.round(x / 1000) + "K";
    }
    if (x < 10000000) {
        return (x / 1000000).toFixed(2) + "M";
    }

    if (x < 1000000000) {
        return Math.round((x / 1000000)) + "M";
    }

    if (x < 1000000000000) {
        return Math.round((x / 1000000000)) + "B";
    }

    return "1T+";

}
const getTraffic30Days = async(task, data) => {

    if (data.status == "success") {
        let ranksHistory = data.data.ranksHistory;
        let adsTraffic = [];
        let organicTraffic = [];
        let date30 = [];
        // console.log(ranksHistory);
        ranksHistory = ranksHistory.reverse();
        for (var i = 2; i < ranksHistory.length; i = i + 7) {
            var item = null;
            var adsTraffic7Day = 0;
            var trafficDay = 0;
            var item01 = ranksHistory[i];
            for (var k = 0; k < 7; k++) {
                if (ranksHistory[i + k]) {
                    item = ranksHistory[i + k];

                    adsTraffic7Day = adsTraffic7Day + item.adsTraffic;
                    trafficDay = trafficDay + item.traffic;
                    // console.log(item.traffic);
                    // console.log(trafficDay);
                }
            }
            date30.push(moment(item01.date).format('DD.MM') + " - " + moment(item.date).format('DD.MM'))
            adsTraffic.push(adsTraffic7Day)
            organicTraffic.push(trafficDay)
        }
        // date30 = date30.reverse();
        // adsTraffic = adsTraffic.reverse();
        // organicTraffic = organicTraffic.reverse();
        let ele = document.getElementById("showTraffic30Days");
        let myChart = echarts.init(ele, 'light');

        function renderChart(date30, organicTraffic, adsTraffic) {
            let option = {
                color: masterColor,
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
                    data: ['Organic Traffic', 'Paid Traffic'],
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
                    data: date30
                }],
                yAxis: [{
                    type: 'value',
                    silent: true,
                    axisLine: {
                        show: false
                    }
                }],
                series: [{
                        name: 'Paid Traffic',
                        data: adsTraffic,
                        type: 'bar',
                        smooth: true,
                        symbolSize: 10,
                        label: {
                            show: true,
                            position: 'top',
                            formatter: function(params) {
                                return kFormatter(params.value)
                            },
                        },
                    },
                    {
                        name: 'Organic Traffic',
                        data: organicTraffic,
                        type: 'line',
                        smooth: true,
                        symbolSize: 10,
                        label: {
                            show: true,
                            position: 'top',
                            formatter: function(params) {
                                return kFormatter(params.value)
                            },
                        },


                    },




                ]
            };


            myChart.setOption(option);
            new ResizeSensor($(`#showTraffic30Days`), function() {
                myChart.resize();
            });
        };
        renderChart(date30, organicTraffic, adsTraffic)

        await $('#showTraffic30Days').removeClass('is-loading');
        await $('.similarReloadTask[data-task="total_backlink"]').find('i').removeClass('fa-spin');
    } else {
        $(`#showRefDomain`).removeClass('is-loading')
        $(`#showRefDomain`).addClass('empty-state')
    }
}

const getListGoogleAdsCompetitor = async(task, data) => {
    var initDatatable = function(select, tableOptions) {
        const table = $(`.${select}`).DataTable(tableOptions);
        $(table.table().header()).addClass('text-center');
        $(`.${select}`).click(function(event) {
            $(`.${select}-container`).addClass('is-loading').block({
                overlayCSS: {
                    backgroundColor: '#ccc',
                    opacity: 0.8,
                    zIndex: 1,
                    cursor: 'wait'
                },
                message: null
            });
            // $(`.${select}`).DataTable().ajax.reload(() => {
            //     reloaddata = 1
            // });
        })
        return table;
    }
    initDatatable(
        'getListGoogleAdsCompetitor', {
            data: data.data.adwordsCompetitorsOverview,
            drawCallback: function(settings) {},
            columns: [{
                    title: "Đối thủ",
                    "data": data => `<a href="${rootURL}/rank/${data.domain}"><div class=""><img class="p-1 mr-2 border rounded bg-secondary" src="https://www.google.com/s2/favicons?domain=${data.domain}"> ${data.domain}</div></a>`,
                    class: 'text-left',

                },
                {
                    title: "Level",
                    "data": data => `<div class="progress rounded progress-custom w-100 my-auto">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${(data.competitionLvl * 1000).toFixed(1)}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>`,
                    class: 'text-left',
                    width: '50'
                },
                {
                    title: "Adwords",
                    "data": data => `${numeral(data.adwordsKeywords).format('0,0')}`,
                    class: 'text-right',
                    width: '50'
                },
                {
                    title: "Organic",
                    "data": data => `${numeral(data.organicKeywords).format('0,0')}`,
                    class: 'text-right',
                    width: '50'
                },
            ],
            "ordering": false,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '325px',
            scrollCollapse: true,
            paging: false,
            processing: true,

            initComplete: function(settings, json) {
                $("table.getAdvertisingSearchDetail thead th").css("padding", "10px");
                // $(".dataTables_scrollBody table.getAdvertisingSearchDetail thead").html('')
                $(".getAdvertisingSearchDetail tbody tr td").css("padding", "15px 10px!important");
                $(".getAdvertisingSearchDetail tbody tr td:first-child").attr("style", "width:60px!important");
                // $(".parent-getAdvertisingSearchDetail .dataTables_scrollBody ").attr("style", "height:325px!important");
                if (data.data.adwordsCompetitorsTotal > 0) {
                    $(".parent-getListGoogleAdsCompetitor").append(`
                   <div class="text-right mt-4 pr-2"><a href="https://webrank.vn/index.php?view=website&amp;action=displayads&amp;domain=tiki.vn&amp;userToken=V3gxbEZwK0tXU3NMcXVQSnZyZ1R2OXpzUDVyMGU1Qi8yWUlPTUtraXI3OD06Orsjp4yqccrrQ4PR08Jl_F8"><button class="btn btn-primary btn-sm " style="padding: 4px 13px;">
                <span class="content-btn">Xem toàn bộ (${data.data.adwordsCompetitorsTotal}) </span>
            </button></a></div>`)
                } else {
                    $(`.widget-getListGoogleAdsCompetitor`).addClass('empty-state');
                    $(`.parent-getListGoogleAdsCompetitor`).hide();
                }
            }
        }
    )
}

const getTrafficOverview = async(task, data) => {
        getAccessMonthly('getTrafficOverview', data);
        getTrafficOverviewCustomerResources('getTrafficOverviewCustomerResources', data);
        getTrafficOverviewCustomerSourceAnalysis('getTrafficOverviewCustomerSourceAnalysis ', data);
        getTimeMobileDesktop('getTimeMobileDesktop', data);
        getCrunchBase('getCrunchBase', data);
        trafficByGeo('trafficByGeo', data);
        getDesktopVsMobileVisits('getDesktopVsMobileVisits', data);
        lockedModule('getDesktopVsMobileVisits', data.userData.member);
    }
    //--------Truy Cập Theo Tháng
const getAccessMonthly = async(task, data) => {
        if (data.status == "success") {
            if (data.data && data.data.trafficTrend) {
                let items0 = data.data.trafficTrend.items[0];
                let items6 = data.data.trafficTrend.items;

                let MonthlyVisits = numeral(items0.visits).format("0,0");
                let html = `
                    <div class="px-3 py-4 pb-5" >
                        <div class="title-ttc text-center mb-1 font-15">Tổng lượt truy cập</div>
                        <div class="d-flex ">
                            <div id="totalTraffic" class="d-flex no-block m-auto">
                            <h1 class="counter font-gg fontsize-48 mr-1">${MonthlyVisits >= 1000000 ? numeral(MonthlyVisits).format('0.00a') : numeral(MonthlyVisits).format("0.00a")}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-table-kh px-3 border-top text-left">
                        <div class="row padding-y-12 border-bottom ">
                            <div class="col h6 m-0 align-self-center text-muted">
                                Thời gian truy cập trung bình</div>
                            <div class="col-4 text-right">
                                <span class="AvgVisitDuration h5 font-gg text-favorite ">${numeral(items0.time_on_site).format("0:00:00")}</span>
                            </div>
                        </div>
                        <div class="row padding-y-12 border-bottom text-left">
                            <div class="col h6 m-0 align-self-center text-muted"> Số trang/Lượt truy cập
                            </div>
                            <div class="col-4 text-right">
                                <span class="PagesperVisit h5 font-gg text-favorite ">${numeral(items0.pages).format("0.00")}</span>
                            </div>
                        </div>
                        <div class="row padding-y-12 text-left">
                            <div class="col h6 m-0 align-self-center text-muted"> Tỷ lệ thoát</div>
                            <div class="col-4 text-right">
                                <span class="BounceRate h5 font-gg text-favorite ">${numeral(items0.bounce_rate).format("00.00%")}</span>
                            </div>
                        </div>
                    </div>
                `;
                $('.getTrafficOverview').html(html)
                $(`.getTrafficOverview`).removeClass('is-loading');
                //Hết Truy Cập Theo Tháng
            } else {

            }
        } else { console.log("error", task); }
    }
    //-------Nguồn Khách Hàng
const getTrafficOverviewCustomerResources = async(task, data) => {
    $('.similarReloadTask[data-task="getTrafficOverviewCustomerResources"]').attr('data-task', 'getTrafficOverview')

    if (data.status == "success") {
        if (data.data && data.data.trafficTrend) {
            let items0 = data.data.trafficTrend.items[0];
            $(`.getTrafficOverviewCustomerResources `).removeClass('empty-state');
            $('.getTrafficOverviewCustomerResources ').attr('style', 'min-height:300px')
            let dataTrafficSources = ["social", "direct", "referral", "paid", "rank", "search"];
            let dataChart = [];
            let datanamechart = [];
            $.each(items0, (index, item) => {
                if (dataTrafficSources.includes(index)) {
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
                    datanamechart.push(data_namechart);
                    dataChart.push(obj);
                }
            })
            let data_params_legend;
            let option = {
                color: masterColor,
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
                    width: 500,
                    //right: 100,
                    //top: 50,
                    //bottom: 20,
                    data: datanamechart,
                    formatter: function(name) {
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
            var containers = document.getElementsByClassName('getTrafficOverviewCustomerResources');
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
            await $(`.getTrafficOverviewCustomerResources `).removeClass('is-loading');
            //* update v7*/
            await $(`.similarReloadTask[data-task="getTrafficOverviewCustomerResources "]`).find('i').removeClass('fa-spin');
            //Hết Nguồn Khách Hàng
        } else {}
    } else { console.log("error", task); }
}
const getTrafficOverviewCustomerSourceAnalysis = async(task, data) => {
    $('.similarReloadTask[data-task="getTrafficOverviewCustomerSourceAnalysis"]').attr('data-task', 'getTrafficOverview')
    if (data.status == "success") {
        if (data.data && data.data.trafficTrend) {
            let items6 = data.data.trafficTrend.items;
            let chartmarketing = {
                keys: [],
                social: [],
                direct: [],
                referral: [],
                paid: [],
                rank: [],
                search: []
            }
            $.each(items6, (i, item) => {
                    $.each(item, (index, data) => {
                        if (index == 'date')
                            chartmarketing.keys.push(moment(data).format('MMM YYYY'))
                        if (index == 'social')
                            chartmarketing.social.push(data)
                        if (index == 'direct')
                            chartmarketing.direct.push(data)
                        if (index == 'referral')
                            chartmarketing.referral.push(data)
                        if (index == 'paid')
                            chartmarketing.paid.push(data)
                        if (index == 'rank')
                            chartmarketing.rank.push(data)
                        if (index == 'search')
                            chartmarketing.search.push(data)
                    })
                    return i < 5
                })
                // console.log(chartmarketing)
            let optionmarketing = {
                color: masterColor,
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

                            value = numeral(value).format(format);
                            detail += `<div class="d-flex justify-content-between"><span class="mr-2">${marker} ${seriesName}</span> <span style="color:${color};font-weight:bold">${value}</span></div>`
                        })
                        return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">${detail}`;
                    }
                },
                legend: {
                    data: ["Trực tiếp", "Liên kết ngoài", "Mạng xã hội", "Xếp hạng", "Trả phí", "Tìm kiếm"],
                },
                grid: {
                    right: "5%"
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: chartmarketing.keys.reverse(),
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
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
                        formatter: (value, index) => (value = numeral(value).format("0a")),
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
                        data: chartmarketing.direct.reverse(),
                        type: "line",
                        symbol: "circle",
                        smooth: true,
                        symbolSize: 1,
                        showSymbol: true,
                        hoverAnimation: true,

                    },
                    {
                        name: 'Mạng xã hội',
                        data: chartmarketing.social.reverse(),
                        type: "line",
                        symbol: "circle",
                        smooth: true,
                        symbolSize: 1,
                        showSymbol: true,
                        hoverAnimation: true,

                    },
                    {
                        name: 'Liên kết ngoài',
                        data: chartmarketing.referral.reverse(),
                        type: "line",
                        symbol: "circle",
                        smooth: true,
                        symbolSize: 1,
                        showSymbol: true,
                        hoverAnimation: true,

                    },
                    {
                        name: 'Xếp hạng',
                        data: chartmarketing.rank.reverse(),
                        type: "line",
                        symbol: "circle",
                        smooth: true,
                        symbolSize: 1,
                        showSymbol: true,
                        hoverAnimation: true,

                    },
                    {
                        name: 'Trả phí',
                        data: chartmarketing.paid.reverse(),
                        type: "line",
                        symbol: "circle",
                        smooth: true,
                        symbolSize: 1,
                        showSymbol: true,
                        hoverAnimation: true,

                    },
                    {
                        name: 'Tìm kiếm',
                        data: chartmarketing.search.reverse(),
                        type: "line",
                        symbol: "circle",
                        smooth: true,
                        symbolSize: 1,
                        showSymbol: true,
                        hoverAnimation: true,

                    }
                ]
            };
            //* update v7*/
            var containers = document.getElementsByClassName('getTrafficOverviewCustomerSourceAnalysis');
            var charts = [];
            for (var i = 0; i < containers.length; i++) {
                var chart = echarts.init(containers[i]);
                chart.setOption(optionmarketing);
                charts.push(chart);
            }
            window.onresize = function() {
                for (var i = 0; i < charts.length; ++i) {
                    charts[i].resize();
                }
            };
            await $(`.getTrafficOverviewCustomerSourceAnalysis `).removeClass('is-loading');
            //* update v7*/          
            //hết Phân tsích nguồn khách hàng
        } else {

        }
    } else { console.log("error", task); }
}
const getTimeMobileDesktop = async(task, data) => {
    let desktop = data.data.trafficTrend.desktop.items;
    let mobile = data.data.trafficTrend.mobile.items;
    let alldevices = data.data.trafficTrend.items;
    const run = async(taskName, nameData) => {
        if (taskName == "visit") {
            $('#getTimedes-mob-btn li a').removeClass('active')
            $('#getTimedes-mob-btn li a[data-task="TrafficShare"]').addClass('active')
        }
        let chartMobileDesktop = {
            keys: [],
            desktop: [],
            mobile: [],
            tong: []
        }
        $.each(desktop, (i, item) => {
            $.each(item, (index, data) => {
                if (index == nameData)
                    chartMobileDesktop.desktop.push(data)
            })
            chartMobileDesktop.keys.push(moment(item.date).format('MM YYYY'))
            return i < 5
        })
        $.each(mobile, (i, item) => {
            $.each(item, (index, data) => {
                if (index == nameData)
                    chartMobileDesktop.mobile.push(data)
            })
            return i < 5
        })
        $.each(alldevices, (i, item) => {
            $.each(item, (index, data) => {
                if (index == nameData)
                    chartMobileDesktop.tong.push(data)
            })
            return i < 5
        })
        let optiondesktopmobile = {
            color: masterColor,
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
                            case 'visit':
                                format = '0,0';
                                break;
                            case 'timeonsite':
                                format = '00:00:00';
                                break;
                            case 'users':
                                format = '0,0';
                                break;
                            case 'BounceRate':
                                format = '00.00%';
                                break;
                            default:
                                break;
                        }
                        value = numeral(value).format(format);
                        detail += `<div class="d-flex justify-content-between"><span class="mr-2">${marker} ${seriesName}</span> <span style="color:${color};font-weight:bold">${value}</span></div>`
                    })
                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">${detail}`;
                }
            },
            legend: {
                data: ["Desktop", "Mobile", "Tổng"],
            },
            grid: {
                right: "1%",
                left: "4%"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: chartMobileDesktop.keys.reverse(),
                axisLine: {
                    lineStyle: {
                        color: "#ccc"
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
                    formatter: (value, index) => {
                        if (taskName == 'visit') {
                            return numeral(value).format("0a")
                        } else if (taskName == 'timeonsite') {
                            return numeral(value).format("00:00:00")
                        } else if (taskName == 'users') {
                            return numeral(value).format("0a")
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
                    name: 'Desktop',
                    data: chartMobileDesktop.desktop.reverse(),
                    type: "line",
                    symbol: "circle",
                    smooth: true,
                    symbolSize: 1,
                    showSymbol: true,
                    hoverAnimation: true,
                    lineStyle: {
                        width: 3
                    },
                },
                {
                    name: 'Mobile',
                    data: chartMobileDesktop.mobile.reverse(),
                    type: "line",
                    symbol: "circle",
                    smooth: true,
                    symbolSize: 1,
                    showSymbol: true,
                    hoverAnimation: true,
                    lineStyle: {
                        width: 3
                    },
                },
                {
                    name: 'Tổng',
                    data: chartMobileDesktop.tong.reverse(),
                    type: "line",
                    symbol: "circle",
                    smooth: true,
                    symbolSize: 1,
                    showSymbol: true,
                    hoverAnimation: true,
                    lineStyle: {
                        width: 3
                    },
                }
            ]
        };
        //* update v7*/
        var containers = document.getElementsByClassName('getTimeMobileDesktopvisits');
        var charts = [];
        for (var i = 0; i < containers.length; i++) {
            var chart = echarts.init(containers[i]);
            chart.setOption(optiondesktopmobile);
            charts.push(chart);
        }
        window.onresize = function() {
            for (var i = 0; i < charts.length; ++i) {
                charts[i].resize();
            }
        };
    }
    run('visit', 'visits')
    $('#getTimedes-mob-btn li').click(function() {
        let idtab = $(this).find('a').attr('href')
        if (idtab == '#getTimeMobileDesktop--TrafficShare') {
            run('visit', 'visits')
        } else if (idtab == '#getTimeMobileDesktop--AverageDuration') {
            run('users', 'users')
        } else if (idtab == '#getTimeMobileDesktop--PagesPerVisit') {
            run('timeonsite', 'time_on_site')
        } else if (idtab == '#getTimeMobileDesktop--BounceRate') {
            run('BounceRate', 'bounce_rate')
        }
    })
    await $(`#getTimeMobileDesktop `).removeClass('is-loading');
}
const getCrunchBase = async(task, data) => {
    if (data.data.crunchbase[0].domain) {
        let dataweb = data.data.crunchbase[0]
        let category = data.data.crunchbase[0].category_list.replace(/[\"|\[\]]/g, "").split(",")
        let html = `
        <div class="row">
            <div class="col-2">
                <div class="logo-company">
                    <img src="${dataweb.logo_url}" alt="" class="w-100">
                </div>
            </div>
            <div class="col-10">
                <div>
                    <div class="title-companyweb d-flex justify-content-start">
                        <span class="titlenameweb">${dataweb.name}</span>
                        <div class="social-network" style="line-height: 24px;">
                            <span class="iconsfb"><a href="${dataweb.facebook_url}"><i class="fab fa-facebook-f font-16 text-black-50 mx-1"></i></a></span>
                            <span class="iconstwitter"><a href="${dataweb.linkedin_url}"><i class="fab fa-twitter font-16 text-black-50 mx-1"></i></a></span>
                            <span class="iconslinked"><a href="${dataweb.twitter_url}"><i class="fab fa-linkedin-in font-16 text-black-50 mx-1"></i></a></span>
                        </div>
                    </div>
                    <div class="content-website">${dataweb.short_description}</div>
                    <div class="category-web">
                    </div>
                    <div class="wapper-companyinfo mt-3">
                        <div class="info-comp d-flex justify-content-start">
                            <span data-toggle="tooltip" data-placement="left" title="Địa chỉ công ty"><i class="fas fa-map-marker-alt mr-2"></i></span>
                            <p>${dataweb.address_full}</p>
                        </div>
                        <div class="info-comp d-flex justify-content-start">
                            <span  data-toggle="tooltip" data-placement="left" title="Số lượng nhân viên">
                                <i class="fas fa-users"></i>
                            </span>
                            <p>${dataweb.employee_count}</p>
                        </div>
                        <div class="info-comp d-flex justify-content-start">
                            <span  data-toggle="tooltip" data-placement="left" title="Tổng số vốn">
                                <i class="fas fa-sack"></i>
                            </span>
                            <span>$${numeral(dataweb.total_funding_usd).format("0,0")}</span>
                        </div>
                        <div class="font-13 mt-2">
                            Ngày thành lập: ${moment(dataweb.founded_on).format('DD MMMM YYYY')}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        $('.wapper-companyweb').html(html)
        category.forEach((v) => {
            $('.category-web').append(`<span class="wapper-category mr-1">${v}</span>`)
        })
    } else {
        $('.wapper-widget-company .wapper-companyweb').addClass('empty-state')
    }
}
const trafficByGeo = async(task, data) => {
    let percentcont = data.data.trafficByGeo
    console.log(percentcont);
    let contry = []
    let chartmap_data = []
    $.each(arrNameContry, (index, item) => {
            let nameCountry = {
                ele: index.toLowerCase(),
                name: item
            }
            contry.push(nameCountry)
        })
        // console.log(contry);
    $.each(percentcont, (i, v) => {
        $.each(contry, (k, val) => {
            if (v.country == val.ele) {
                let obj = {
                    name: val.name,
                    value: numeral(v.traffic * 100).format('0.00')
                }
                chartmap_data.push(obj)
            }
        })
    })
    console.log(chartmap_data);
    var containers = document.getElementsByClassName(task);
    var charts = [];
    for (var i = 0; i < containers.length; i++) {
        var chart = echarts.init(containers[i]);
        charts.push(chart);
        chart.showLoading();
    }
    window.onresize = function() {
        for (var i = 0; i < charts.length; ++i) {
            charts[i].resize();
        }
    };
    await $(`.${task}`).removeClass('is-loading');
    //* update v7*/
    $.getJSON(rootURL + '/assets/mapworld.geo.json', function(usaJson) {
        // console.log(usaJson)
        chart.hideLoading();
        echarts.registerMap('World', usaJson, {});
        let option = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function(params) {
                    let valueaaaa = (params.value != NaN) ? `${numeral(params.value).format('0.00')}` : 0;
                    if ((params.value == NaN)) {
                        // console.log("Đá")
                    }
                    return params.name + ': ' + valueaaaa + '%';
                }
            },
            visualMap: {
                left: 'right',
                min: 500000,
                max: 38000000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
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
            }]
        };
        chart.setOption(option);
    })
}
const getDesktopVsMobileVisits = async(task, data) => {
    $('.similarReloadTask[data-task="getDesktopVsMobileVisits"]').attr('data-task', 'getTrafficOverview')
    let percent = data.data.trafficTrend.items[0]
    let dataChart = [{
            name: 'Máy tính',
            value: percent.desktop_share * 100
        },
        {
            name: 'Điện thoại',
            value: percent.mobile_share * 100
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
    window.onresize = function() {
        for (var i = 0; i < charts.length; ++i) {
            charts[i].resize();
        }
    };
    await $(`.${task}`).removeClass('is-loading');
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
};
export default api;