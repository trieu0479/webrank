$("#sidebarnav li a").each(function () {
    $(this).data("name") == "overview-report" ? $(this).addClass("active") : null;
})

$(document).ready(() => {

    
    const url = new URL(location.href);
    fromSelect = url.searchParams.get("from")
    toSelect = url.searchParams.get("to");

    if (fromSelect == undefined || fromSelect == "") from = moment().subtract(15, 'days').startOf('day').format('YYYY/MM/DD');
    else from = moment(fromSelect, "DD/MM/YYYY").format('YYYY/MM/DD')
    if (toSelect == undefined || toSelect == "") to = moment().subtract(1, 'days').startOf('day').format('YYYY/MM/DD');
    else to = moment(toSelect, "DD/MM/YYYY").format('YYYY/MM/DD')

    cid = url.searchParams.get("cid");
    if (cid != "" && cid != null) { 
        console.log(userToken)
        apicla("getClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)
        apicla("getInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`);
        apicla("getCostReport", `//localapi.trazk.com/adwords-report/index.php?task=getCostReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`);
        apicla("getDayClicksAndInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getDayClicksAndInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`);
        apicla("getCampaignInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getCampaignInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)
        apicla("getNetworkInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getNetworkInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)

        apicla("getCampaignsAndTotalBlockedIp",`//localapi.trazk.com/cla/index.php?task=getCampaignsAndTotalBlockedIp&userToken=${userToken}&cid=${cid}`)

        apicla("getReportIpBlockByDateLine", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDate&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)
            .then(data => {
                if (data != null) {
                    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                        if (data != null) {
                            var taskName = $(e.target).data('task');
                            if (taskName == "report-3F") {
                                data.resize();
                                data = null
                            }
                        }
                    });
                }
            })

        apicla("getReportIpClickByDate", `//localapi.trazk.com/cla/index.php?task=getReportIpClickByDate&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)
            .then(data => {
                if (data != null) {
                    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                        if (data != null) {
                            var taskName = $(e.target).data('task');
                            if (taskName == "report-3F") {
                                data.resize();
                                data = null
                            }
                        }
                    });
                }
            })

        apicla("getCostSavingByDate", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDate&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`, from, to)
            .then(data => {
                if (data != null) {
                    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                        if (data != null) {
                            var taskName = $(e.target).data('task');
                            if (taskName == "report-3F") {
                                data.resize();
                                data = null
                            }
                        }
                    });
                }
            })

        apicla("getReportIpBlockByDate", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDate&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`, from, to)
            .then(data => {
                if (data != null) {
                    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                        if (data != null) {
                            var taskName = $(e.target).data('task');
                            if (taskName == "report-3F") {
                                data.resize();
                                data = null
                            }
                        }
                    });
                }
            })
    }





    // $('#input-datepickerV1').daterangepicker({
    //     startDate: from,
    //     endDate: to,
    //     maxDate: moment(dayNow).format("DD/MM/YYYY"),
    //     autoApply: true,
    //     opens: 'center',
    //     alwaysShowCalendars: true,
    //     locale: {
    //         format: "DD/MM/YYYY",
    //         "applyLabel": "Apply",
    //         "cancelLabel": "Cancel",
    //         "fromLabel": "From",
    //         "toLabel": "To",
    //         "customRangeLabel": "Tùy Chỉnh",
    //         "weekLabel": "W"

    //     }
    // });

    // $('#input-datepickerV1').on('apply.daterangepicker', async (ev, picker) => {

    //     from = picker.startDate.format('DD/MM/YYYY');
    //     to = picker.endDate.format('DD/MM/YYYY');

    //     setCookie("fromcla", from, 1);
    //     setCookie("tocla", to, 1);

    //     let dataTask = $(`a.nav-link.active`).data("task");

    //     if (dataTask == "report-google") {

    //         // remove chart
    //         $(".img").remove();
    //         let getClicksReport = document.getElementById("getClicksReport");
    //         echarts.dispose(getClicksReport);
    //         // $(".img").remove();
    //         $(`#getClicksReport`).parent().removeClass("d-none").addClass("d-flex");
    //         $("#getClicksReport-Total").text("").parent().parent().addClass("is-loading");

    //         let getCostReport = document.getElementById("getCostReport");
    //         echarts.dispose(getCostReport);
    //         $(`#getCostReport`).parent().removeClass("d-none").addClass("d-flex");
    //         $("#getCostReport-Total").text("").parent().parent().addClass("is-loading");

    //         let getInvalidClicksReport = document.getElementById("getInvalidClicksReport");
    //         echarts.dispose(getInvalidClicksReport);
    //         $(`#getInvalidClicksReport`).parent().removeClass("d-none").addClass("d-flex");
    //         $("#getInvalidClicksReport-Total").text("").parent().parent().addClass("is-loading");

    //         let getDayClicksAndInvalidClicksReport = document.getElementById("getDayClicksAndInvalidClicksReport");
    //         echarts.dispose(getDayClicksAndInvalidClicksReport);
    //         $("#getDayClicksAndInvalidClicksReport").addClass("is-loading");

    //         let getCampaignInvalidClicksReport = document.getElementById("getCampaignInvalidClicksReport");
    //         echarts.dispose(getCampaignInvalidClicksReport);
    //         $("#getCampaignInvalidClicksReport").addClass("is-loading");

    //         let getNetworkInvalidClicksReport = document.getElementById("getNetworkInvalidClicksReport");
    //         echarts.dispose(getNetworkInvalidClicksReport);
    //         $("#getNetworkInvalidClicksReport").addClass("is-loading");

    //     }

    //     $(".img-3f").remove();
    //     let getReportIpBlockByDateLine = document.getElementById("getReportIpBlockByDateLine");
    //     echarts.dispose(getReportIpBlockByDateLine);
    //     $(`#getReportIpBlockByDateLine`).parent().removeClass("d-none").addClass("d-flex");
    //     $("#getReportIpBlockByDateLine-Total").text("").parent().parent().addClass("is-loading");

    //     let getReportIpClickByDate = document.getElementById("getReportIpClickByDate");
    //     echarts.dispose(getReportIpClickByDate);
    //     $(`#getReportIpClickByDate`).parent().removeClass("d-none").addClass("d-flex");
    //     $("#getReportIpClickByDate-Total").text("").parent().parent().addClass("is-loading");

    //     let getCostSavingByDate = document.getElementById("getCostSavingByDate");
    //     echarts.dispose(getCostSavingByDate);
    //     $(`#getCostSavingByDate`).parent().removeClass("d-none").addClass("d-flex");
    //     $("#getCostSavingByDate-Total").text("").parent().parent().addClass("is-loading");

    //     let getReportIpBlockByDate = document.getElementById("getReportIpBlockByDate");
    //     echarts.dispose(getReportIpBlockByDate);
    //     $("#getReportIpBlockByDate").addClass("is-loading");

    //     let getReportIpBlockByDevice = document.getElementById("getReportIpBlockByDevice");
    //     echarts.dispose(getReportIpBlockByDevice);
    //     $("#getReportIpBlockByDevice").addClass("is-loading");

    //     let getReportIpBlockByLocation = document.getElementById("getReportIpBlockByLocation");
    //     echarts.dispose(getReportIpBlockByLocation);
    //     $("#getReportIpBlockByLocation").addClass("is-loading");

    //     let from_ = moment(from, "DD/MM/YYYY").format("YYYY/MM/DD");
    //     let to_ = moment(to, "DD/MM/YYYY").format("YYYY/MM/DD");

    //     to_ = to_.replace(/[\-]/g, "/");
    //     let date = new Date(to_);
    //     date = date.setDate(date.getDate() + 1);
    //     to_ = moment(date).format("YYYY/MM/DD");

    //     apicla("getReportIpBlockByDateLine", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDate&userToken=${userToken}&cid=${cid}&from=${from_}&to=${to_}`)
    //         .then(data => {
    //             if (data != null) {
    //                 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //                     if (data != null) {
    //                         var taskName = $(e.target).data('task');
    //                         if (taskName == "report-3F") {
    //                             data.resize();
    //                             data = null
    //                         }
    //                     }
    //                 });
    //             }
    //         })

    //     apicla("getReportIpClickByDate", `//localapi.trazk.com/cla/index.php?task=getReportIpClickByDate&userToken=${userToken}&cid=${cid}&from=${from_}&to=${to_}`)
    //         .then(data => {
    //             if (data != null) {
    //                 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //                     if (data != null) {
    //                         var taskName = $(e.target).data('task');
    //                         if (taskName == "report-3F") {
    //                             data.resize();
    //                             data = null
    //                         }
    //                     }
    //                 });
    //             }
    //         })

    //     apicla("getCostSavingByDate", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDate&userToken=${userToken}&cid=${cid}&from=${from_}&to=${to_}`, from_, to_)
    //         .then(data => {
    //             if (data != null) {
    //                 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //                     if (data != null) {
    //                         var taskName = $(e.target).data('task');
    //                         if (taskName == "report-3F") {
    //                             data.resize();
    //                             data = null
    //                         }
    //                     }
    //                 });
    //             }
    //         })

    //     apicla("getReportIpBlockByDate", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDate&userToken=${userToken}&cid=${cid}&from=${from_}&to=${to_}`, from_, to_)
    //         .then(data => {
    //             if (data != null) {
    //                 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //                     if (data != null) {
    //                         var taskName = $(e.target).data('task');
    //                         if (taskName == "report-3F") {
    //                             data.resize();
    //                             data = null
    //                         }
    //                     }
    //                 });
    //             }
    //         })

    //     apicla("getReportIpBlockByDevice", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByDevice&userToken=${userToken}&cid=${cid}&from=${from_}&to=${to_}`)
    //         .then(data => {
    //             if (data != null) {
    //                 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //                     if (data != null) {
    //                         var taskName = $(e.target).data('task');
    //                         if (taskName == "report-3F") {
    //                             data.resize();
    //                             data = null
    //                         }
    //                     }
    //                 });
    //             }
    //         })

    //     apicla("getReportIpBlockByLocation", `//localapi.trazk.com/cla/index.php?task=getReportIpBlockByLocation&userToken=${userToken}&cid=${cid}&from=${from_}&to=${to_}`)
    //         .then(data => {
    //             if (data != null) {
    //                 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //                     if (data != null) {
    //                         var taskName = $(e.target).data('task');
    //                         if (taskName == "report-3F") {
    //                             data.resize();
    //                             data = null
    //                         }
    //                     }
    //                 });
    //             }
    //         })

    //     apicla("getClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)
    //     apicla("getInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`);
    //     apicla("getCostReport", `//localapi.trazk.com/adwords-report/index.php?task=getCostReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`);
    //     apicla("getDayClicksAndInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getDayClicksAndInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`);
    //     apicla("getCampaignInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getCampaignInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)
    //     apicla("getNetworkInvalidClicksReport", `//localapi.trazk.com/adwords-report/index.php?task=getNetworkInvalidClicksReport&userToken=${userToken}&cid=${cid}&from=${from}&to=${to}`)


    //     $('#input-datepickerV1 span').html(picker.startDate.format('DD/MM') +
    //         ' - ' + picker.endDate.format('DD/MM/YYYY'));

    //     $(".dateReport").text(picker.startDate.format('DD/MM') +
    //         ' - ' + picker.endDate.format('DD/MM/YYYY'));
    // })






})