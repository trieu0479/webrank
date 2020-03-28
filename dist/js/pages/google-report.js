$(document).ready(() => {
    let dayNow = new Date();
    let now = new Date();
    let endDate = now.setDate(now.getDate() - 7);
    let startDate = now.setDate(now.getDate() - 14);;
    var from = moment(startDate).format("DD-MM-YYYY");
    var to = moment(endDate).format("DD-MM-YYYY");

    $('#input-datepickerV1 span').html(moment(startDate).format("DD/MM/YYYY") + ' - ' + moment(endDate).format("DD/MM/YYYY"));

    $('#input-datepickerV1').daterangepicker({
        startDate: from,
        endDate: to,
        maxDate: moment(dayNow).format("DD/MM/YYYY"),
        autoApply: true,
        opens: 'center',
        alwaysShowCalendars: true,
        locale: {
            format: "DD/MM/YYYY",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Tùy Chỉnh",
            "weekLabel": "W"

        }
    });  

    $('#input-datepickerV1').on('apply.daterangepicker', async (ev, picker) => {

        Swal.fire({
            type: 'success',
            title: 'Thay đổi thành công!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                container: 'mt-6'
            }
        })

        from = picker.startDate.format('DD-MM-YYYY');
        to = picker.endDate.format('DD-MM-YYYY');

        $('#input-datepickerV1 span').html(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));

        api("getValuesDeviceReport",from,to);
        api("getTotalReport",from,to);
        api("getGenderReport",from,to);
        api("getAgeReport",from,to);
        api("getMobileDeviceClickReport",from,to);
        api("getCampaignTypeReport",from,to);
        api("getAdGroupCostReport",from,to);
        api("getClicksAndOrganicClicksReport",from,to);  
        api("getCampaignTypeAndDayReport",from,to);  
        api("get_CAMPAIGN_TYPE_SEARCH_ONLY_Report",from,to);  
        api("getQualityScoreReport",from,to);   
        api("getCampaignClicksReport",from,to);  
        api("getCampaignInvalidClicksReport",from,to);     
        api("getNetworkInvalidClicksReport",from,to);     
        api("getDayInvalidClicksReport",from,to);     
        api("getKeywordReport",from,to);

        initDatatable(
            'getCityClicksReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getCityClicksReport&from=${from}&to=${to}`,
                    dataSrc: (json) => { 
                        let sum = 0;
                        json.data.forEach(ele => {
                            sum += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                        });
    
                        let newData = [];
    
                        json.data.forEach(ele => {
                            let percent = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sum;
                            let dataTemp = {
                                city: ele.city,
                                clicks: parseInt(ele.Clicks.replace(/[\.]/g, "")),
                                percent: percent
                            }
                            newData.push(dataTemp);
                        });
    
                        return newData;
                    },
                },
                drawCallback: function (settings) {
                    $('.getCityClicksReport-container').removeClass('is-loading').unblock();
                    $('.getCityClicksReport-container').find('.fa-spin').removeClass('fa-spin');
                }, 
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Khu vực",
                        data: data => {
                            return `<span class="font-gg text-muted">${data.city}</span>`
                        }
                    },
                    {
                        title: "Số click chuột",
                        data: data => {
                            return `<span class="font-gg text-muted">${data.clicks}</span>`
                        }
                    },
                    {
                        title: "Tỷ lệ",
                        data: data => {
                            return `<div class="row align-items-center" style="width: 130px">
                            <div class="col-4 font-gg text-muted">
                              ${numeral(data.percent).format("0.00%")}
                            </div>
                            <div class="col-8">
                              <div class="progress border">
                                <div class="progress-bar bg-info" style="width: ${numeral(data.percent).format("0.00%")}; height:8px;" role="progressbar"></div>
                              </div>
                            </div>
                          </div>`;
                        },
                    },
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '250px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getCityClicksReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getCityClicksReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                        });
                    $('.getCityClicksReport-container').removeClass('is-loading');
                    $('#getCityClicksReport .dataTables_empty').text("").addClass('empty-state');
                }
            }
        )
    
        initDatatable(
            'getKeywordReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getKeywordReport&from=${from}&to=${to}`,
                    dataSrc: (json) => {
                        let sumClicks = 0;
                        let sumCostPerClick = 0;
                        let sumCost = 0;
                        let sumImpressions = 0;
                        let sumConversionsManyPerClick = 0;
    
                        json.data.forEach(ele => {
                            sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                            sumCostPerClick += parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, ""));
                            sumCost += parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));
                            sumImpressions += parseInt(ele.Impressions.replace(/[\.|\₫]/g, ""));
                            sumConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, ""));
                        });
    
                        let newData = [];
    
                        json.data.forEach(ele => {
                            let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                            let percentCostPerClick = parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, "")) / sumCostPerClick;
                            let percentCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, "")) / sumCost;
                            let percentImpressions = parseInt(ele.Impressions.replace(/[\.|\₫]/g, "")) / sumImpressions;
                            let percentConversionsManyPerClick = parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, "")) / sumConversionsManyPerClick;
    
                            let dataTemp = {
                                name: ele.name,
                                CostPerClick: ele.CostPerClick,
                                Cost: ele.Cost,
                                Impressions: ele.Impressions,
                                Clicks: ele.Clicks,
                                ConversionsManyPerClick: ele.ConversionsManyPerClick,
                                percentCostPerClick: percentCostPerClick,
                                percentCost: percentCost,
                                percentClicks: percentClicks,
                                percentImpressions: percentImpressions,
                                percentConversionsManyPerClick: percentConversionsManyPerClick
                            }
                            newData.push(dataTemp);
                        });
    
                        return newData;
                    },
                },
                drawCallback: function (settings) {
                    $('.getKeywordReport-container').removeClass('is-loading').unblock();
                    $('.getKeywordReport-container').find('.fa-spin').removeClass('fa-spin');
                },
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Từ khóa tìm kiếm",
                        data: data => {
                            return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                        }
                    },
                    {
                        title: "CPC Tr.bình",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.CostPerClick}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-warning" style="width: ${numeral(data.percentCostPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Phí",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.Cost}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-danger" style="width: ${numeral(data.percentCost).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Số lượt hiển thị",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.Impressions}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-primary" style="width: ${numeral(data.percentImpressions).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Số lượt nhấp",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.Clicks}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-success" style="width: ${numeral(data.percentClicks).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Chuyển đổi",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.ConversionsManyPerClick}
                        </div> 
                        </div> `;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-info" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
    
    
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '230px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getKeywordReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getKeywordReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                        });
                    $('.getKeywordReport-container').removeClass('is-loading');
                    $('#getKeywordReport .dataTables_empty').text("").addClass('empty-state');
                }
            }
        )
    
        initDatatable(
            'getQueryReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getQueryReport&from=${from}&to=${to}`,
                    dataSrc: (json) => {
                        let sumClicks = 0;
                        let sumCostPerClick = 0;
                        let sumCost = 0;
                        let sumImpressions = 0;
                        let sumConversionsManyPerClick = 0;
    
                        json.data.forEach(ele => {
                            sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                            sumCostPerClick += parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, ""));
                            sumCost += parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));
                            sumImpressions += parseInt(ele.Impressions.replace(/[\.|\₫]/g, ""));
                            sumConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, ""));
                        });
    
                        let newData = [];
    
                        json.data.forEach(ele => {
                            let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                            let percentCostPerClick = parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, "")) / sumCostPerClick;
                            let percentCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, "")) / sumCost;
                            let percentImpressions = parseInt(ele.Impressions.replace(/[\.|\₫]/g, "")) / sumImpressions;
                            let percentConversionsManyPerClick = parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, "")) / sumConversionsManyPerClick;
    
                            let dataTemp = {
                                name: ele.name,
                                CostPerClick: ele.CostPerClick,
                                Cost: ele.Cost,
                                Impressions: ele.Impressions,
                                Clicks: ele.Clicks,
                                ConversionsManyPerClick: ele.ConversionsManyPerClick,
                                percentCostPerClick: percentCostPerClick,
                                percentCost: percentCost,
                                percentClicks: percentClicks,
                                percentImpressions: percentImpressions,
                                percentConversionsManyPerClick: percentConversionsManyPerClick
                            }
                            newData.push(dataTemp);
                        });
    
                        return newData;
                    },
                },
                drawCallback: function (settings) {
                    $('.getQueryReport-container').removeClass('is-loading').unblock();
                    $('.getQueryReport-container').find('.fa-spin').removeClass('fa-spin');
                },
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Từ khóa tìm kiếm",
                        data: data => {
                            return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                        }
                    },
                    {
                        title: "CPC Tr.bình",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.CostPerClick}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-warning" style="width: ${numeral(data.percentCostPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Phí",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.Cost}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-danger" style="width: ${numeral(data.percentCost).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Số lượt hiển thị",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.Impressions}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-primary" style="width: ${numeral(data.percentImpressions).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Số lượt nhấp",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.Clicks}
                        </div> 
                        </div>`;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-success" style="width: ${numeral(data.percentClicks).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
                    {
                        title: "Chuyển đổi",
                        data: data => {
                            return `<div class="row" style="width: 80px">
                        <div class="col-12 font-gg text-muted">
                          ${data.ConversionsManyPerClick}
                        </div> 
                        </div> `;
                            //     <div class="col-12">
                            //       <div class="progress border">
                            //         <div class="progress-bar bg-info" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                            //       </div>
                            //     </div> 
                            //   </div>`;
                        }
                    },
    
    
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '230px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getQueryReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getQueryReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                        });
                    $('.getQueryReport-container').removeClass('is-loading');
                    $('#getQueryReport .dataTables_empty').text("").addClass('empty-state');
                }
            }
        )
    
        initDatatable(
            'getAdGroupReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getAdGroupReport&from=${from}&to=${to}`,
                    dataSrc: (json) => {
                        let sumClicks = 0;
                        let sumCostPerClick = 0;
                        let sumCost = 0;
                        let sumImpressions = 0;
                        let sumConversionsManyPerClick = 0;
    
                        json.data.forEach(ele => {
                            sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                            sumCostPerClick += parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, ""));
                            sumCost += parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));
                            sumImpressions += parseInt(ele.Impressions.replace(/[\.|\₫]/g, ""));
                            sumConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, ""));
                        });
    
                        let newData = [];
    
                        json.data.forEach(ele => {
                            let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                            let percentCostPerClick = parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, "")) / sumCostPerClick;
                            let percentCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, "")) / sumCost;
                            let percentImpressions = parseInt(ele.Impressions.replace(/[\.|\₫]/g, "")) / sumImpressions;
                            let percentConversionsManyPerClick = parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, "")) / sumConversionsManyPerClick;
    
                            let dataTemp = {
                                name: ele.name,
                                CostPerClick: ele.CostPerClick,
                                Cost: ele.Cost,
                                Impressions: ele.Impressions,
                                Clicks: ele.Clicks,
                                ConversionsManyPerClick: ele.ConversionsManyPerClick,
                                percentCostPerClick: percentCostPerClick,
                                percentCost: percentCost,
                                percentClicks: percentClicks,
                                percentImpressions: percentImpressions,
                                percentConversionsManyPerClick: percentConversionsManyPerClick
                            }
                            newData.push(dataTemp);
                        });
    
                        return newData;
                    },
                },
                drawCallback: function (settings) {
                    $('.getAdGroupReport-container').removeClass('is-loading').unblock();
                    $('.getAdGroupReport-container').find('.fa-spin').removeClass('fa-spin');
                },
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Nhóm quảng cáo",
                        data: data => {
                            return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                        }
                    },
                    {
                        title: "CPC Tr.bình",
                        data: data => {
                            return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentCostPerClick).format("0.00%")}</span>">
                            <div class="col-12 font-gg text-muted">
                              ${data.CostPerClick}
                            </div> 
                            <div class="col-12">
                              <div class="progress border">
                                <div class="progress-bar bg-warning" style="width: ${numeral(data.percentCostPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                              </div>
                            </div> 
                          </div>`;
                        }
                    },
                    {
                        title: "Phí",
                        data: data => {
                            return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentCost).format("0.00%")}</span>">
                            <div class="col-12 font-gg text-muted">
                              ${data.Cost}
                            </div> 
                            <div class="col-12">
                              <div class="progress border">
                                <div class="progress-bar bg-danger" style="width: ${numeral(data.percentCost).format("0.00%")}; height:4px;" role="progressbar"></div>
                              </div>
                            </div> 
                          </div>`;
                        }
                    },
                    {
                        title: "Số lượt hiển thị",
                        data: data => {
                            return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentImpressions).format("0.00%")}</span>">
                            <div class="col-12 font-gg text-muted">
                              ${data.Impressions}
                            </div> 
                            <div class="col-12">
                              <div class="progress border">
                                <div class="progress-bar bg-primary" style="width: ${numeral(data.percentImpressions).format("0.00%")}; height:4px;" role="progressbar"></div>
                              </div>
                            </div> 
                          </div>`;
                        }
                    },
                    {
                        title: "Số lượt nhấp",
                        data: data => {
                            return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentClicks).format("0.00%")}</span>">
                            <div class="col-12 font-gg text-muted">
                              ${data.Clicks}
                            </div> 
                            <div class="col-12">
                              <div class="progress border">
                                <div class="progress-bar bg-success" style="width: ${numeral(data.percentClicks).format("0.00%")}; height:4px;" role="progressbar"></div>
                              </div>
                            </div> 
                          </div>`;
                        }
                    },
                    {
                        title: "Chuyển đổi",
                        data: data => {
                            return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentConversionsManyPerClick).format("0.00%")}</span>">
                            <div class="col-12 font-gg text-muted">
                              ${data.ConversionsManyPerClick}
                            </div> 
                            <div class="col-12">
                              <div class="progress border">
                                <div class="progress-bar bg-info" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                              </div>
                            </div> 
                          </div>`;
                        }
                    },
    
    
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '250px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getAdGroupReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getAdGroupReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                        });
                    $('.getAdGroupReport-container').removeClass('is-loading');
                    $('#getAdGroupReport .dataTables_empty').text("").addClass('empty-state');
                    $('[data-toggle="tooltip"]').tooltip();
                }
            }
        )
    
        initDatatable(
            'getAdGroupStatusReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getAdGroupStatusReport&from=${from}&to=${to}`,
                    dataSrc: (json) => {
                        return json.data;
                    },
                },
                drawCallback: function (settings) {
                    $('.getAdGroupStatusReport-container').removeClass('is-loading').unblock();
                    $('.getAdGroupStatusReport-container').find('.fa-spin').removeClass('fa-spin');
                },
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Nhóm quảng cáo",
                        data: data => {
                            return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                        }
                    },
                    {
                        title: "Lượt hiển thị", 
                        data: data => {
                            return `<span class="font-gg text-muted">${data.Impressions}</span>`
                        }
                    },
                    {
                        title: "Lượt tương tác", 
                        data: data => {
                            return `<span class="font-gg text-muted">${data.Interactions}</span>`
                        }
                    },
                    {
                        title: "Tỷ lệ tương tác",
                        data: data => {
                            return `<div class="row align-items-center" style="width: 150px">
                            <div class="col-4 font-gg text-muted">
                              ${data.InteractionRate.replace(",",".")}
                            </div>
                            <div class="col-8">
                              <div class="progress border">
                                <div class="progress-bar bg-primary" style="width: ${data.InteractionRate.replace(",",".")}; height:8px;" role="progressbar"></div>
                              </div>
                            </div>
                          </div>`;
                        },
                    },
    
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '250px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getAdGroupStatusReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getAdGroupStatusReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                        });
                    $('.getAdGroupStatusReport-container').removeClass('is-loading');
                    $('#getAdGroupStatusReport .dataTables_empty').text("").addClass('empty-state');
                }
            }
        )
    
        initDatatable(
            'getKeywordOrganicQueriesReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getKeywordOrganicQueriesReport&from=${from}&to=${to}`,
                    dataSrc: (json) => {
                        return json.data;
                    },
                },
                drawCallback: function (settings) {
                    $('.getKeywordOrganicQueriesReport-container').removeClass('is-loading').unblock();
                    $('.getKeywordOrganicQueriesReport-container').find('.fa-spin').removeClass('fa-spin');
                },
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Từ khóa tìm kiếm", 
                        data: data => {
                            return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                        }
                    },
                    {
                        title: "Truy vấn không phải trả tiền", 
                        data: data => {
                            return `<span class="font-gg text-muted">${data.OrganicQueries}</span>`
                        }
                    },
                    {
                        title: "Vị trí tr.bình", 
                        data: data => {
                            return `<span class="font-gg text-muted">${data.AveragePosition}</span>`
                        }
                    },
                    {
                        title: "Vị trí trung bình không phải trả tiền", 
                        data: data => {
                            return `<span class="font-gg text-muted">${data.OrganicAveragePosition}</span>`
                        }
                    },
    
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '220px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getKeywordOrganicQueriesReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getKeywordOrganicQueriesReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('font-10 border-top-0 border-bottom')
                        });
                    $('.getKeywordOrganicQueriesReport-container').removeClass('is-loading');
                    $('#getKeywordOrganicQueriesReport .dataTables_empty').text("").addClass('empty-state');
                }
            }
        )
    
        initDatatable(
            'getQueryMatchTypeReport', {
                destroy: true,
                ajax: {
                    url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getQueryMatchTypeReport&from=${from}&to=${to}`,
                    dataSrc: (json) => {
    
                        let sumClicks = 0;
                        let sumImpressions = 0;
                        let sumConversionsManyPerClick = 0;
    
                        json.data.forEach(ele => {
                            sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                            sumImpressions += parseInt(ele.Impressions.replace(/[\.]/g, ""));
                            let index = ele.ConversionsManyPerClick.indexOf(",");
                            let ConversionsManyPerClick = ele.ConversionsManyPerClick.slice(0, index);
                            sumConversionsManyPerClick += parseInt(ConversionsManyPerClick.replace(/[\.]/g, ""));
                        });
    
                        let newData = [];
    
                        json.data.forEach(ele => {
                            let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                            let percentImpressions = parseInt(ele.Impressions.replace(/[\.]/g, "")) / sumImpressions;
                            let index = ele.ConversionsManyPerClick.indexOf(",");
                            let ConversionsManyPerClick = ele.ConversionsManyPerClick.slice(0, index);
                            let percentConversionsManyPerClick = parseInt(ConversionsManyPerClick.replace(/[\.]/g, "")) / sumConversionsManyPerClick;
                            let dataTemp = {
                                name: ele.name,
                                type: ele.type,
                                Clicks: ele.Clicks,
                                Impressions: ele.Impressions,
                                ConversionsManyPerClick: ele.ConversionsManyPerClick,
                                percentClicks: percentClicks,
                                percentImpressions: percentImpressions,
                                percentConversionsManyPerClick: percentConversionsManyPerClick
                            }
                            newData.push(dataTemp);
                        });
     
                        return newData;
                    },
                },
                drawCallback: function (settings) {
                    $('.getQueryMatchTypeReport-container').removeClass('is-loading').unblock();
                    $('.getQueryMatchTypeReport-container').find('.fa-spin').removeClass('fa-spin');
                },
                "ordering": false,
                //   "paging": false, 
                columns: [{
                        title: "Cụm từ tìm kiếm",
                        data: data => {
                            return `<a target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                        }
                    },
                    {
                        title: "Loại đối sánh cụm từ tìm kiếm",
                        data: data => {
                            return (data.type == "Chính xác") ? `<div class="" style="width: 100px"><span class="rounded bg-success-2 p-1 rounded text-success font-10 font-weight-bold">${data.type}</span></div>` :
                                (data.type == "Cụm từ") ? `<div class="" style="width: 100px"><span class="rounded bg-info-2 p-1 rounded text-info font-10 font-weight-bold">${data.type}</span></div>` :
                                `<div class="" style="width: 100px"><span class="rounded bg-danger-2 p-1 rounded text-danger font-10 font-weight-bold">${data.type}</span></div>`
                        },
                    },
                    {
                        title: "Số lượt nhấp",
                        data: data => {
                            return `<div class="row" style="width: 89px">
                            <div class="col-12 text-muted font-gg p-1">
                              ${data.Clicks}
                            </div>
                            </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-info" style="width: ${numeral(data.percentClicks).format("0.0%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div>
                        //   </div>`;
                        }
                    },
                    {
                        title: "Số lượt hiển thị",
                        data: data => {
                            return `<div class="row" style="width: 89px">
                            <div class="col-12 text-muted font-gg p-1">
                              ${data.Impressions}
                            </div>
                            </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-danger" style="width: ${numeral(data.percentImpressions).format("0.0%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div>
                        //   </div>`;
                        }
                    },
                    {
                        title: "Chuyển đổi",
                        data: data => {
                            return `<div class="row" style="width: 89px">
                            <div class="col-12 text-muted font-gg p-1">
                              ${data.ConversionsManyPerClick}
                            </div>
                            </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-warning" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.0%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div>
                        //   </div>`;
                        }
                    },
    
                ],
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '220px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function (settings, json) {
                    $(`#getQueryMatchTypeReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getQueryMatchTypeReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function (i) {
                            $(this).addClass('text-muted font-10 border-top-0 border-bottom')
                        });
                    $('.getQueryMatchTypeReport-container').removeClass('is-loading');
                    $('#getQueryMatchTypeReport .dataTables_empty').text("").addClass('empty-state');
                }
            }
        )
    }); 

    var domain = 'fff.com.vn';
    const apiHeader = async (task, domain) => {
        try {
            return await $.ajax({
                url: `//localapi.trazk.com/webdata/websiteapi.php?task=${task}&domain=${domain}`,
                type: "GET"
            }).then(data => {
                switch (task) {
                    case "getHeader":
                        getHeader(task, data);
                        break;

                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    apiHeader("getHeader", domain);
    const getHeader = async (task, data) => {
        // Get value Header  
        const {
            data: similarHeader,
            website: similarDomain
        } = data.data;

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
            similarTags.map(tag => `<span><a href="https://fff.com.vn/ket-qua-phan-tich-tu-khoa/${tag}/"  data-type="keyword" class="changeURL" data-input="${tag}" class="text-muted"><i class="far fa-search"></i> ${tag}</a></span>`).join("")
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
                showCancelButton: true,
                customClass: {
                    container: 'pt-6'
                },
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
                    location.href = `?action=result&domain=${data.value}`;
                }
            });
        });

        const getDomainCompare = async () => {
            const result = await Swal.fire({
                title: 'Hãy nhập website để so sánh',
                width: 600,
                padding: '4em',
                position: 'top',
                customClass: {
                    container: "pt-6"
                },
                html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${similarDomain} placeholder="Nhập website của bạn">` +
                    `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                    `<input id="swal-input2" autocomplete="off" class="swal2-input text-lowercase" placeholder="Nhập website của đối thủ">` +
                    `<div id="selectWebsiteScrollbar" class="selectWebsite bg-white d-flex flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: 485px"></div>`,
                focusConfirm: false,
                showCloseButton: true,
                confirmButtonText: 'So Sánh',
                // onOpen: function () {
                //     $('#swal-input2').focus();
                //     $('#swal-input2').keypress(event => (event.which == 13) ? $('.swal2-confirm').click() : null);

                //   },
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
                    //location.href = `?action=compare&domain1=${data.value[0]}&domain2=${data.value[1]}`;
                    changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
                }
            });
        });
    };

    const apiCompetitor = async (task) => {
        try {
            return await $.ajax({
                url: `//aapi.trazk.com/private/insight/${task}.php?cid=558-241-1088`,
                type: "GET"
            }).then(data => {
                data = JSON.parse(data);
                switch (task) {
                    case "getAuctionInsight":
                        getAuctionInsight(task, data);
                        break;
                }
            });
        } catch (error) {
            console.error(error);
        }
    };
    apiCompetitor("getAuctionInsight");
    const getAuctionInsight = async (task, data) => {


        let myPosition = data[1].vitritrungbinh;
        let myTopPage = data[1].tiledautrang;

        $("#getBidForecast--Position .Position").text(myPosition);
        $("#getBidForecast--Percent .Percent").text(numeral(myTopPage).format("0%"));

        let Competitor = [];

        data.forEach(el => {
            if (el.domain != "")
                Competitor.push(el);
        })


        $.each(Competitor, (index, el) => {
            if ((index % 3) == 0 && el.domain != "") {
                $(`#getSimilarSites`).append('<div class="similarSites col-6 col-md-6"></div>')
            }
            $(`<a title="${el.domain}" class="d-flex align-items-center" href='https://fff.com.vn/ket-qua-phan-tich-website/${el.domain}/'">
            <img class="p-1 mr-2 border rounded bg-secondary" src="https://logo.clearbit.com/${el.domain}" width="25px">
            <span  data-type="website" data-input="${el.domain}" class="changeURL text-info">${el.domain}</span>
            
        </a>`).appendTo(`#getSimilarSites .similarSites:last-child`)
        })
        // <span>${el.vitritrungbinh}</span>
        // <span>${numeral(el.tiledautrang).format("0%")}</span> 

        await $("#getBidForecast--Position").parent().removeClass("is-loading");
        await $("#getSimilarSites").removeClass("is-loading");


    } 

    const customColors = ["#F2A695", "#89C3F8", "#0984e3", "#8693F3", "#FCC667", "#00cec9", "#ff7675"];

    const api = async (task,from,to) => {
        try {
            return await $.ajax({
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=${task}&from=${from}&to=${to}`,
                type: "GET"
            }).then(data => {
                switch (task) {
                    case "getTopChartReport":
                        getTopChartReport(task, data);
                        break;
                    case "getTotalChartReport":
                        getTotalChartReport(task, data);
                        break;
                    case "getKeywordsSearchReport":
                        getKeywordsSearchReport(task, data);
                        break;
                    case "getAdReport":
                        getAdReport(task, data);
                        break;
                    case "getQueryReport":
                        getQueryReport(task, data);
                        break;
                    case "getAdReport":
                        getAdReport(task, data);
                        break;
                    case "getDemographicReport":
                        getDemographicReport(task, data);
                        break;
                    case "getDeviceReport":
                        getDeviceReport(task, data);
                        break;
                    case "getNetworkReport":
                        getNetworkReport(task, data);
                        break;
                    case "getDayReport":
                        getDayReport(task, data);
                        break;
                    case "getHourReport":
                        getHourReport(task, data);
                        break;
                    case "getValuesDeviceReport":
                        getValuesDeviceReport(task, data);
                        break;
                    case "getTotalReport":
                        getTotalReport(task, data);
                        break;
                    case "getGenderReport":
                        getGenderReport(task, data);
                        break;
                    case "getAgeReport":
                        getAgeReport(task, data);
                        break;
                    case "getMobileDeviceClickReport":
                        getMobileDeviceClickReport(task, data);
                        break;
                    case "getCampaignTypeReport":
                        getCampaignTypeReport(task, data);
                        break;
                    case "getAdGroupCostReport":
                        getAdGroupCostReport(task, data);
                        break;
                    case "getClicksAndOrganicClicksReport":
                        getClicksAndOrganicClicksReport(task, data);
                        break;
                    case "getCampaignTypeAndDayReport":
                        getCampaignTypeAndDayReport(task, data);
                        break;
                    case "get_CAMPAIGN_TYPE_SEARCH_ONLY_Report":
                        get_CAMPAIGN_TYPE_SEARCH_ONLY_Report(task, data);
                        break;
                    case "getQualityScoreReport":
                        getQualityScoreReport(task, data);
                        break;
                    case "getAdGroupStatus_EnabledReport":
                        getAdGroupStatus_EnabledReport(task, data);
                        break;
                    case "getCampaignClicksReport":
                        getCampaignClicksReport(task, data);
                        break;
                    case "getCampaignInvalidClicksReport":
                        getCampaignInvalidClicksReport(task, data);
                        break;
                    case "getNetworkInvalidClicksReport":
                        getNetworkInvalidClicksReport(task, data);
                        break;
                    case "getDayInvalidClicksReport":
                        getDayInvalidClicksReport(task, data);
                        break;
                    case "getKeywordReport":
                        getKeywordReportChart(task, data);
                        break;
                    default:
                        break;

                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    // api("getValuesDeviceReport");
    const getValuesDeviceReportCu = async (task, data) => {
        let Mobile = data.data.value.Mobile;
        let PC = data.data.value.PC;
        let Tablet = data.data.value.Tablet;

        let sumImpressions = parseInt(Mobile.Impressions.replace(/[\.|\₫]/g, "")) + parseInt(PC.Impressions.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.Impressions.replace(/[\.|\₫]/g, ""));
        let sumCost = parseInt(Mobile.Cost.replace(/[\.|\₫]/g, "")) + parseInt(PC.Cost.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.Cost.replace(/[\.|\₫]/g, ""));
        let sumClicks = parseInt(Mobile.Clicks.replace(/[\.|\₫]/g, "")) + parseInt(PC.Clicks.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.Clicks.replace(/[\.|\₫]/g, ""));
        let sumCostPerClick = parseInt(Mobile.CostPerClick.replace(/[\.|\₫]/g, "")) + parseInt(PC.CostPerClick.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.CostPerClick.replace(/[\.|\₫]/g, ""));

        $(`#${task}--Impression .Impression`).text(numeral(sumImpressions).format("0,0"));
        $(`#${task}--Cost .Cost`).text(numeral(sumCost).format("0,0"));
        $(`#${task}--Clicks .Clicks`).text(numeral(sumClicks).format("0,0"));
        $(`#${task}--CostPerClick .CostPerClick`).text(numeral(sumCostPerClick / 3).format("0,0"));


        $(`#getValuesDeviceReport-TotalCost .TotalCost`).text(numeral(sumCost).format("0,0"));


        await $(`#${task}--Impression div`).removeClass("is-loading");
        await $(`#${task}--Cost div`).removeClass("is-loading");
        await $(`#${task}--Clicks div`).removeClass("is-loading");
        await $(`#${task}--CostPerClick div`).removeClass("is-loading");
        await $(`#getValuesDeviceReport-TotalCost`).removeClass("is-loading");

        await $(`.vnd`).removeClass("d-none");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');


        let dataChartImpressions = {
            keys: ["Điện thoại", "Máy tính", "Máy tính bảng"],
            values: [],
        }

        dataChartImpressions.values.push(Mobile.Impressions.replace(/[\.|\₫]/g, ""));
        dataChartImpressions.values.push(PC.Impressions.replace(/[\.|\₫]/g, ""));
        dataChartImpressions.values.push(Tablet.Impressions.replace(/[\.|\₫]/g, ""));

        let dataChartClicks = {
            keys: ["Điện thoại", "Máy tính", "Máy tính bảng"],
            values: [],
        }

        dataChartClicks.values.push(Mobile.Clicks.replace(/[\.|\₫]/g, ""));
        dataChartClicks.values.push(PC.Clicks.replace(/[\.|\₫]/g, ""));
        dataChartClicks.values.push(Tablet.Clicks.replace(/[\.|\₫]/g, ""));

        let dataChartCostPerClick = {
            keys: ["Điện thoại", "Máy tính", "Máy tính bảng"],
            values: [],
        }

        dataChartCostPerClick.values.push(Mobile.CostPerClick.replace(/[\.|\₫]/g, ""));
        dataChartCostPerClick.values.push(PC.CostPerClick.replace(/[\.|\₫]/g, ""));
        dataChartCostPerClick.values.push(Tablet.CostPerClick.replace(/[\.|\₫]/g, ""));

        let dataChartCost = {
            keys: ["Điện thoại", "Máy tính", "Máy tính bảng"],
            values: [],
        }

        dataChartCost.values.push(Mobile.Cost.replace(/[\.|\₫]/g, ""));
        dataChartCost.values.push(PC.Cost.replace(/[\.|\₫]/g, ""));
        dataChartCost.values.push(Tablet.Cost.replace(/[\.|\₫]/g, ""));

        let dataChartPieCost = [
            {
                name: "Điện thoại",
                value: parseInt(Mobile.Cost.replace(/[\.|\₫]/g, ""))
            },
            {
                name: "Máy tính",
                value: parseInt(PC.Cost.replace(/[\.|\₫]/g, ""))
            },
            {
                name: "Máy tính bảng",
                value: parseInt(Tablet.Cost.replace(/[\.|\₫]/g, ""))
            }
        ];


        $(".counter").counterUp();

        let id = task;
        let taskname = "";

        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                taskname = "--chartImpression"

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele);

                let option = {
                    grid: {
                        top: 30,
                        bottom: 30,
                        left: 90,
                        right: 60
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: {
                        show: true,
                        data: dataChartImpressions.keys,
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
                                color: "#9e9e9e"
                            },
                            rich: {}
                        },
                    },
                    series: [{
                        type: 'bar',
                        name: "Số lần hiển thị",
                        data: dataChartImpressions.values,
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                                color: "#ff5452",
                                "label": {
                                    color: "#ff5452",
                                    "show": true,
                                    "position": "right",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                },
                                barBorderColor: "#ff5452"
                            }
                        },
                    }]
                };
                myChart.setOption(option);

                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });
            } else if (i == 1) {
                taskname = "--chartClicks"

                let ele = document.getElementById(id + taskname);

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
        
                                detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${numeral(value).format("0,0")}</span>
                                    <br/>`
                            })
        
                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                            <div class="text-dark pt-2">Số lượt click chuột</div>
                            <div class="text-dark pt-1">${detail}</div>`;
        
                        }
                    },
                    grid: {
                        right: "5%",
                        left: "7%",
                        // bottom: "0%",
                        // top: "0%"
                    }, 
                    xAxis: {
                        type: "category",
                        // show: false,
                        boundaryGap: false,
                        data: dataChartClicks.keys,
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
                            // formatter: (value, index) => moment(value).format('MM-YYYY')
                        },
                        axisPointer: {
                            lineStyle: {
                                color: "rgb(25, 123, 251)",
                                type: "dashed"
                            }
                        }
                    },
                    yAxis: [{
                        type: 'value',
                        // show: false, 
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#ccc"
                            },
                            fontFamily: 'Arial',
                            // formatter: (value, index) => moment(value).format('MM-YYYY')
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    }, ],
                    series: [{ 
                            type: 'line',
                            symbol: "none",
                            smooth: false,
                            data: dataChartClicks.values,
        
                        },
                         
                    ]
                };
                myChart.setOption(option);

                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });
            } else if (i == 2) {
                taskname = "--chartCostPerClick"

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele);

                let option = {
                    grid: {
                        top: 30,
                        bottom: 30,
                        left: 90,
                        right: 60
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: {
                        show: true,
                        data: dataChartCostPerClick.keys,
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
                                color: "#9e9e9e"
                            },
                            rich: {}
                        },
                    },
                    series: [{
                        type: 'bar',
                        data: dataChartCostPerClick.values,
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                                color: "#ff5452",
                                "label": {
                                    color: "#ff5452",
                                    "show": true,
                                    "position": "right",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") + " ₫" : numeral(p.value).format("0,0") + " ₫";
                                    }
                                },
                                barBorderColor: "#ff5452"
                            }
                        },
                    }]
                };
                myChart.setOption(option);

                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });
            } else if (i == 3) {
                taskname = "--chartCost";

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele);

                let option = {
                    grid: {
                        right: "10%",
                        left: "10%"
                    },
                    xAxis: {
                        type: "category",
                        data: dataChartCost.keys,
                        axisLabel: {
                            textStyle: {
                                color: 'white',

                            },
                            fontFamily: 'Arial',
                            fontSize: 11,
                            lineHeight: 22,
                            width: '100%',
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                    },
                    yAxis: {
                        type: 'value',
                        show: false,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'white'
                            },
                        },
                    },
                    series: [{
                        data: dataChartCost.values,
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: "#ff5452",
                                "label": {
                                    color: "white",
                                    "show": true,
                                    "position": "top",
                                    formatter: function (p) {
                                        return numeral(p.value).format("0,0") + " ₫";
                                    }
                                },
                                barBorderColor: "#ff5452"
                            }
                        },

                    }]
                };
                myChart.setOption(option);
                new ResizeSensor($(`#${id + taskname}`), function () {
                    myChart.resize();
                    setTimeout(function () {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

            } else {
                taskname = "--DeviceCost";

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele, 'light');

                let option = {
                    legend: {
                        top: "25%",
                        left: '60%',
                        data: ["Điện thoại", "Máy tính", "Máy tính bảng"],
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        // formatter: function (name) {
                        //     let value = name == 'Máy tính' ? totalDesktop : totalMobile;
                        //     return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                        // }
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
                                formatter: '{value|{d}%}',
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
                        data: dataChartPieCost
                    }]
                };

                myChart.setOption(option);


                new ResizeSensor($(`#${id + taskname}`), function () {
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
                        if (params.name == dataChartPieCost[0].name) {
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

                await $(`#${id + taskname}`).removeClass("is-loading");
            }
        }

    }

    api("getValuesDeviceReport",from,to);
    const getValuesDeviceReport = async (task, data) => {
        let Mobile = data.data.value.Mobile;
        let PC = data.data.value.PC;
        let Tablet = data.data.value.Tablet;

        let sumImpressions = parseInt(Mobile.Impressions.replace(/[\.|\₫]/g, "")) + parseInt(PC.Impressions.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.Impressions.replace(/[\.|\₫]/g, ""));
        let sumCost = parseInt(Mobile.Cost.replace(/[\.|\₫]/g, "")) + parseInt(PC.Cost.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.Cost.replace(/[\.|\₫]/g, ""));
        let sumClicks = parseInt(Mobile.Clicks.replace(/[\.|\₫]/g, "")) + parseInt(PC.Clicks.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.Clicks.replace(/[\.|\₫]/g, ""));
        let sumCostPerClick = parseInt(Mobile.CostPerClick.replace(/[\.|\₫]/g, "")) + parseInt(PC.CostPerClick.replace(/[\.|\₫]/g, "")) + parseInt(Tablet.CostPerClick.replace(/[\.|\₫]/g, ""));

        $(`#${task}--Impression .Impression`).text(numeral(sumImpressions).format("0,0"));
        $(`#${task}--Cost .Cost`).text(numeral(sumCost).format("0,0"));
        $(`#${task}--Clicks .Clicks`).text(numeral(sumClicks).format("0,0"));
        $(`#${task}--CostPerClick .CostPerClick`).text(numeral(sumCostPerClick / 3).format("0,0"));


        $(`#getValuesDeviceReport-TotalCost .TotalCost`).text(numeral(sumCost).format("0,0"));


        await $(`#${task}--Impression`).parent().removeClass("is-loading");
        await $(`#${task}--Cost`).parent().removeClass("is-loading");
        await $(`#${task}--Clicks`).parent().removeClass("is-loading");
        await $(`#${task}--CostPerClick`).parent().removeClass("is-loading");
        await $(`#getValuesDeviceReport-TotalCost`).parent().removeClass("is-loading");

        await $(`.vnd`).removeClass("d-none");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');


        let dataChartImpressions = [
            {name: "Điện thoại",value: Mobile.Impressions.replace(/[\.|\₫]/g, "")},
            {name: "Máy tính",value: PC.Impressions.replace(/[\.|\₫]/g, "")},
            {name: "Máy tính bảng",value: Tablet.Impressions.replace(/[\.|\₫]/g, "")},
        ]; 
         

        let dataChartPieClicks = [
            {name: "Điện thoại",value: Mobile.Clicks.replace(/[\.|\₫]/g, "")},
            {name: "Máy tính",value: PC.Clicks.replace(/[\.|\₫]/g, "")},
            {name: "Máy tính bảng",value: Tablet.Clicks.replace(/[\.|\₫]/g, "")},
        ];

        let dataChartPieCostPerClick = [
            {name: "Điện thoại",value: Mobile.CostPerClick.replace(/[\.|\₫]/g, "")},
            {name: "Máy tính",value: PC.CostPerClick.replace(/[\.|\₫]/g, "")},
            {name: "Máy tính bảng",value: Tablet.CostPerClick.replace(/[\.|\₫]/g, "")},
        ];

        let dataChartPieCost = [
            {
                name: "Điện thoại",
                value: parseInt(Mobile.Cost.replace(/[\.|\₫]/g, ""))
            },
            {
                name: "Máy tính",
                value: parseInt(PC.Cost.replace(/[\.|\₫]/g, ""))
            },
            {
                name: "Máy tính bảng",
                value: parseInt(Tablet.Cost.replace(/[\.|\₫]/g, ""))
            }
        ];

        let dataChartCost = {
            keys: ["Điện thoại", "Máy tính", "Máy tính bảng"],
            values: [],
        }

        dataChartCost.values.push(Mobile.Cost.replace(/[\.|\₫]/g, ""));
        dataChartCost.values.push(PC.Cost.replace(/[\.|\₫]/g, ""));
        dataChartCost.values.push(Tablet.Cost.replace(/[\.|\₫]/g, ""));

        let dataChartClicks = {
            keys: ["Điện thoại", "Máy tính", "Máy tính bảng"],
            values: [],
        }

        dataChartClicks.values.push(Mobile.Clicks.replace(/[\.|\₫]/g, ""));
        dataChartClicks.values.push(PC.Clicks.replace(/[\.|\₫]/g, ""));
        dataChartClicks.values.push(Tablet.Clicks.replace(/[\.|\₫]/g, "")); 

        let id = task; 

        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                let taskname = "--chartImpression"

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele);

                let option = {
                    "color": [
                        "#93b7e3",
                        "#a5e7f0",
                        "#cbb0e3"
                    ],
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 7px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark font-10 font-gg text-capitalize">${name}
                                <br/>
                                ${marker}<span class="font-12 font-gg font-weight-bold">${value}</span> 
                            </div> `;
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        legendHoverLink: false,
                        minAngle: 20,
                        // radius: ["50%", "80%"],
                        center: ["40%", "50%"],
                        animation: false,
                        avoidLabelOverlap: false,
                        // itemStyle: {
                        //     normal: {
                        //         borderColor: '#ffffff',
                        //         borderWidth: 5,
                        //     },
                        // },
                        label: {
                            normal: {
                                show: false,
                                position: 'center',
                                // formatter: '{value|{d}%}',
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
                                show: false,
                                textStyle: {
                                    fontSize: 46,
                                }
                            }
                        },
                        data: dataChartImpressions
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

            } else if (i == 1) {
                let taskname = "--chartClicks"

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele,);

                let option = {
                    // color: ["red"],
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 7px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark font-10 font-gg text-capitalize">${name}
                                <br/>
                                ${marker}<span class="font-12 font-gg font-weight-bold">${value}</span> 
                            </div> `;
                        }
                    },
                    grid: {
                        right: "5%",
                        left: "7%",
                        bottom: "15%",
                        top: "10%"
                    }, 
                    xAxis: {
                        type: "category",
                        show: false,
                        boundaryGap: false,
                        data: dataChartClicks.keys,
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
                            // formatter: (value, index) => moment(value).format('MM-YYYY')
                        },
                        axisPointer: {
                            lineStyle: {
                                color: "rgb(25, 123, 251)",
                                type: "dashed"
                            }
                        }
                    },
                    yAxis: [{
                        type: 'value',
                        show: false, 
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                color: "#ccc"
                            },
                            fontFamily: 'Arial',
                            // formatter: (value, index) => moment(value).format('MM-YYYY')
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    }, ],
                    series: [{ 
                            type: 'line',
                            symbol: "circle",
                            symbolSize: 10,
                            showSymbol: true,
                            hoverAnimation: false,
                            data: dataChartClicks.values,  
                            // smooth: true,
                            // areaStyle: {color: 'rgb(79, 141, 249)'}, 
                           
                            lineStyle: {
                                color: "rgb(79, 141, 249)",
                                normal: {
                                    color: "rgb(79, 141, 249)",
                                    width: 1,
                                    shadowColor: "rgba(0,0,0,0.4)",
                                    shadowBlur: 10,
                                    shadowOffsetY: 10
                                }
                            },
                            itemStyle: { 
                                normal: {
                                    color: value => {  
                                                return (value.value == dataChartClicks.values[0]) ? "#93b7e3" :
                                                (value.value == dataChartClicks.values[1]) ? "#a5e7f0" : "#cbb0e3"
                                            }
                                },
                            }
                        },
                         
                    ]
                };
                myChart.setOption(option);

                new ResizeSensor($(`#${id + taskname}`), function () {
                    myChart.resize();
                });
            } else if (i == 2) {
                let taskname = "--chartCostPerClick"

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele);

                let option = {
                    "color": [
                        "#93b7e3",
                        "#a5e7f0",
                        "#cbb0e3"
                    ],
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 7px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark font-10 font-gg text-capitalize">${name}
                                <br/>
                                ${marker}<span class="font-12 font-gg font-weight-bold">${value} ₫</span> 
                            </div> `;
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        legendHoverLink: false,
                        minAngle: 20, 
                        center: ["40%", "50%"],
                        animation: false,
                        avoidLabelOverlap: false, 
                        label: {
                            normal: {
                                show: false,
                                position: 'center', 
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
                                show: false,
                                textStyle: {
                                    fontSize: 46,
                                }
                            }
                        },
                        data: dataChartPieCostPerClick
                    }]
                };
                myChart.setOption(option);

                new ResizeSensor($(`#${id + taskname}`), function () {
                    myChart.resize();
                });
            } else if (i == 3) {
                let taskname = "--chartCost";

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele);

                let option = {
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 7px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark font-10 font-gg text-capitalize">${name}
                                <br/>
                                ${marker}<span class="font-12 font-gg font-weight-bold">${value} ₫</span> 
                            </div> `;
                        }
                    },
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 80
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: {
                        show: false,
                        data: dataChartCost.keys,
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
                                color: "#9e9e9e",
                                fontSize: 10
                            },
                            rich: {}
                        },
                    },
                    series: [{
                        type: 'bar',
                        // name: "Số lần hiển thị",
                        data: dataChartCost.values,
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                               color: value => {  
                                        return (value.data == dataChartCost.values[0]) ? "#93b7e3" :
                                        (value.data == dataChartCost.values[1]) ? "#a5e7f0" : "#cbb0e3"
                                    },
                                "label": { 
                                    "show": true,
                                    "position": "right",
                                    formatter: function (p) {
                                        return numeral(p.value).format("0,0") + " ₫";
                                    }
                                }, 
                            }
                        },
                    }]
                };

                let option1 = {
                    "color": [
                        "#93b7e3",
                        "#a5e7f0",
                        "#cbb0e3"
                    ],
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 7px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark font-10 font-gg text-capitalize">${name}
                                <br/>
                                ${marker}<span class="font-12 font-gg font-weight-bold">${value} ₫</span> 
                            </div> `;
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        legendHoverLink: false,
                        minAngle: 20, 
                        center: ["40%", "50%"],
                        animation: false,
                        avoidLabelOverlap: false, 
                        label: {
                            normal: {
                                show: false,
                                position: 'center', 
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
                                show: false,
                                textStyle: {
                                    fontSize: 46,
                                }
                            }
                        },
                        data: dataChartPieCost
                    }]
                };

                myChart.setOption(option);

                new ResizeSensor($(`#${id + taskname}`), function () {
                    myChart.resize();
                    setTimeout(function () {
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: 0
                        });
                    }, 1000);
                });

            } else {
                let taskname = "--DeviceCost";

                let ele = document.getElementById(id + taskname);

                let myChart = echarts.init(ele, 'light');

                let option = {
                    legend: {
                        top: "25%",
                        left: '60%',
                        data: ["Điện thoại", "Máy tính", "Máy tính bảng"],
                        itemWidth: 20,
                        itemHeight: 14,
                        width: 10,
                        textStyle: {
                            fontFamily: 'Arial',
                            lineHeight: 16
                        },
                        // formatter: function (name) {
                        //     let value = name == 'Máy tính' ? totalDesktop : totalMobile;
                        //     return `${name}\n(${value > 1000000 ? numeral(value).format('0.0a') : numeral(value).format('0,0')})`;
                        // }
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
                                formatter: '{value|{d}%}',
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
                        data: dataChartPieCost
                    }]
                };

                myChart.setOption(option);


                new ResizeSensor($(`#${id + taskname}`), function () {
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
                        if (params.name == dataChartPieCost[0].name) {
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

                await $(`#${id + taskname}`).removeClass("is-loading");
            }
        }

    }

    api("getTotalReport",from,to);
    const getTotalReport = async (task, data) => {

        let Impressions = data.data[0].Impressions.replace(/[\.|\₫]/g, "");
        let Clicks = data.data[0].Clicks.replace(/[\.|\₫]/g, "");
        let ConversionsManyPerClick = data.data[0].ConversionsManyPerClick;
        let index = ConversionsManyPerClick.indexOf(",");
        ConversionsManyPerClick = ConversionsManyPerClick.slice(0, index);
        ConversionsManyPerClick = ConversionsManyPerClick.replace(/[\.|\₫]/g, "");

        let CostPerClick = data.data[0].CostPerClick.replace(/[\.|\₫]/g, "");
        let CostPerConversionManyPerClick = data.data[0].CostPerConversionManyPerClick.replace(/[\.|\₫]/g, "");



        $(`#${task} .Impressions`).text(numeral(Impressions).format("0,0"));
        $(`#${task} .Clicks`).text(numeral(Clicks).format("0,0"));
        $(`#${task} .ConversionsManyPerClick`).text(numeral(ConversionsManyPerClick).format("0,0"));
        $(`#${task} .CostPerClick`).text(numeral(CostPerClick).format("0,0") + " ₫");
        $(`#${task} .CostPerConversionManyPerClick`).text(numeral(CostPerConversionManyPerClick).format("0,0") + " ₫");

        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getGenderReport",from,to);
    const getGenderReport = async (task, data) => {

        let dataChart = [];

        data.data.forEach(ele => {
            if (ele.gender == "Chưa được xác định")
                ele.gender = "Chưa xác định"
            let dataTemp = {
                name: ele.gender,
                value: ele.Impressions.replace(/[\.]/g, "")
            }

            dataChart.push(dataTemp);

        });

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele);

        let option = {
            "color": [
                "#93b7e3",
                "#a5e7f0",
                "#cbb0e3"
            ],
            legend: {
                top: "25%",
                left: '60%',
                data: ["Nam", "Nữ", "Chưa xác định"],
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
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
                        formatter: '{value|{d}%}',
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
                if (params.name == data.data[0].name) {
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

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getAgeReport",from,to);
    const getAgeReport = async (task, data) => {

        let dataChart = {
            keys: [],
            values: []
        }

        data.data.forEach(ele => {
            dataChart.keys.push(ele.age);
            dataChart.values.push(ele.Impressions.replace(/[\.]/g, ""));
        });

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            grid: {
                top: 0,
                bottom: 0,
                right: 50,
                left: 130,
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
                        formatter: function (p) {
                            return numeral(p.value).format("0,0");
                        },
                    }
                },
            }]
        };
        myChart.setOption(option);

        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getMobileDeviceClickReport",from,to);
    const getMobileDeviceClickReport = async (task, data) => {

        let dataChartPC = {
            keys: [],
            values: [],
        }

        let dataChartOther = {
            keys: [],
            values: [],
        }

        let dataChartTablet = {
            keys: [],
            values: [],
        }

        let dataChartMobile = {
            keys: [],
            values: [],
        }

        data.data.forEach(ele => {
            dataChartPC.keys.push(ele.day);
            dataChartMobile.keys.push(ele.day);

            dataChartPC.values.push(ele.PC.replace(/[\.]/g, ""));
            dataChartOther.values.push(ele.Other.replace(/[\.]/g, ""));
            dataChartTablet.values.push(ele.Tablet.replace(/[\.]/g, ""));
            dataChartMobile.values.push(ele.Mobile.replace(/[\.]/g, ""));
        });

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

                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${numeral(value).format("0,0")}</span>
                            <br/>`
                    })

                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">Số lượt click chuột</div>
                    <div class="text-dark pt-1">${detail}</div>`;

                }
            },
            grid: {
                right: "5%",
                left: "7%",
                // bottom: "0%",
                // top: "0%"
            },
            legend: {
                data: ["Điện thoại", "Máy tính", "Máy tính bảng", "Khác"],
                icon: "rect",
                itemHeight: 5,
                itemWidth: 15,
                top: "5%",
                right: '35%',
                // orient: "vertical" 
              
            },
            xAxis: {
                type: "category",
                // show: false,
                boundaryGap: false,
                data: dataChartPC.keys,
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
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisPointer: {
                    lineStyle: {
                        color: "rgb(25, 123, 251)",
                        type: "dashed"
                    }
                }
            },
            yAxis: [{
                type: 'value',
                // show: false, 
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            }, ],
            series: [{
                    name: 'Điện thoại',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: dataChartMobile.values,
                    areaStyle: {
                        color: "rgba(55,162,218,0.5)"
                    },
                },
                {
                    name: 'Máy tính',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: dataChartPC.values,
                    areaStyle: {
                        color: "rgba(113,246,249,0.5)"
                    },
                },
                {
                    name: 'Máy tính bảng',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: dataChartTablet.values,
                },
                {
                    name: 'Khác',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: dataChartOther.values,
                }
            ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        const startDay = dataChartMobile.keys[0];
        const endDay = dataChartMobile.keys.pop();


        const toDate = (dateStr) => {
            const [day, month, year] = dateStr.split("-")
            return new Date(year, month - 1, day)
        }


        let start = toDate(startDay);
        let end = toDate(endDay);


        $('.similarDates').text(moment(start).format("DD/MM") + ' - ' + moment(end).format("DD/MM/YYYY"));

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getCampaignTypeReport",from,to);
    const getCampaignTypeReport = async (task, data) => {

        let dataChart = {
            keys: [],
            values: [],
        }

        data.data.forEach(ele => {
            dataChart.keys.push(ele.name);
            dataChart.values.push(ele.Cost.replace(/[\.|\₫]/g, ""));
        });


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele);

        let option = {
            "color": [
                "#2ec7c9",
                "#b6a2de",
                "#5ab1ef",
                "#ffb980",
                "#d87a80",
                "#8d98b3",
                "#e5cf0d",
                "#97b552",
                "#95706d",
                "#dc69aa",
                "#07a2a4",
                "#9a7fd1",
                "#588dd5",
                "#f5994e",
                "#c05050",
                "#59678c",
                "#c9ab00",
                "#7eb00a",
                "#6f5553",
                "#c14089"
            ],
            tooltip: {
                trigger: "item",
                position: "top",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    let {
                        marker,
                        seriesName,
                        value,
                        name
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0') + " ₫";

                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${marker} ${seriesName} <span style="font-weight:bold">: ${value}</span>
                    <br/> 
                </div>`;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dataChart.keys,
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "#ccc"
                    }
                },
            },
            yAxis: [{
                type: 'value',
                // show: false, 
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
                    formatter: (value, index) => (value = numeral(value).format("0,0") + " ₫")
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
            }, ],
            series: [{
                name: "Phí",
                data: dataChart.values,
                type: 'bar',
                // itemStyle: {
                //     // color: 'rgb(66, 131, 244)',
                //     // barBorderColor: 'rgb(66, 131, 244)'
                //     normal: {
                //         color: "#00BAD2",
                //         // "label": {
                //         //     color: "#00BAD2",
                //         //     "show": true,
                //         //     "position": "top",
                //         //     formatter: function (p) {
                //         //         return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                //         //     }
                //         // },
                //         barBorderColor: "#00BAD2"
                //     }
                // },

            }, ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getAdGroupCostReport",from,to);
    const getAdGroupCostReport = async (task, data) => {

        let dataChart1 = {
            keys: [],
            values: [],
            name: "Quảng cáo hình ảnh"
        }
        let dataChart2 = {
            keys: [],
            values: [],
            name: "Quảng cáo video"
        }
        let dataChart3 = {
            keys: [],
            values: [],
            name: "Quảng cáo mua sắm"
        }
        let dataChart4 = {
            keys: [],
            values: [],
            name: "Quảng cáo văn bản mở rộng"
        }
        let dataChart5 = {
            keys: [],
            values: [],
            name: "Quảng cáo đáp ứng"
        }
        let dataChart6 = {
            keys: [],
            values: [],
            name: "Quảng cáo Gmail"
        }
        let dataChart7 = {
            keys: [],
            values: [],
            name: "Quảng cáo tìm kiếm động mở rộng"
        }
        let dataChart8 = {
            keys: [],
            values: [],
            name: "Quảng cáo mua sắm thông minh"
        }
        let dataChart9 = {
            keys: [],
            values: [],
            name: "Quảng cáo hiển thị hình ảnh thích ứng"
        }
        let dataChart10 = {
            keys: [],
            values: [],
            name: "Quảng cáo tìm kiếm thích ứng"
        }

        data.data.forEach((ele, index) => {
            dataChart1.values.push(ele.cost[0].replace(/[\.\₫]/g, ""));
            dataChart2.values.push(ele.cost[1].replace(/[\.\₫]/g, ""));
            dataChart3.values.push(ele.cost[2].replace(/[\.\₫]/g, ""));
            dataChart4.values.push(ele.cost[3].replace(/[\.\₫]/g, ""));
            dataChart5.values.push(ele.cost[4].replace(/[\.\₫]/g, ""));
            dataChart6.values.push(ele.cost[5].replace(/[\.\₫]/g, ""));
            dataChart7.values.push(ele.cost[6].replace(/[\.\₫]/g, ""));
            dataChart8.values.push(ele.cost[7].replace(/[\.\₫]/g, ""));
            dataChart9.values.push(ele.cost[8].replace(/[\.\₫]/g, ""));
            dataChart10.values.push(ele.cost[9].replace(/[\.\₫]/g, ""));

            dataChart1.keys.push(ele.day);

        });

        let dataName = [];
        dataName.push(dataChart1.name);
        dataName.push(dataChart2.name);
        dataName.push(dataChart3.name);
        dataName.push(dataChart4.name);
        dataName.push(dataChart5.name);
        dataName.push(dataChart6.name);
        dataName.push(dataChart7.name);
        dataName.push(dataChart8.name);
        dataName.push(dataChart9.name);
        dataName.push(dataChart10.name);

        let dataChart = [];
        dataChart.push(dataChart1.values);
        dataChart.push(dataChart2.values);
        dataChart.push(dataChart3.values);
        dataChart.push(dataChart4.values);
        dataChart.push(dataChart5.values);
        dataChart.push(dataChart6.values);
        dataChart.push(dataChart7.values);
        dataChart.push(dataChart8.values);
        dataChart.push(dataChart9.values);
        dataChart.push(dataChart10.values);

        let dataSeries = [];

        for (let i = 0; i < dataChart.length; i++) {

            let temp = {
                name: dataName[i],
                type: 'line',
                symbol: "none",
                smooth: true,
                // areaStyle: {},
                data: dataChart[i],
            }

            dataSeries.push(temp);

        }


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

                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${numeral(value).format("0,0")}</span>
                            <br/>`
                    })

                    return `<div class="text-left text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-left text-dark pt-2">Phí</div>
                    <div class="text-left text-dark pt-1">${detail}</div>`;

                }
            },
            grid: {
                right: "25%",
                left: "6%",
                // bottom: "0%",
                // top: "0%"
            },
            legend: {
                data: dataName,
                icon: "rect",
                itemHeight: 5,
                itemWidth: 15,
                top: "12%",
                right: '1%',
                orient: "vertical",
                type: "scroll",
                selected: {
                    "Quảng cáo văn bản mở rộng": true,
                    "Quảng cáo tìm kiếm thích ứng": true,
                    "Quảng cáo Gmail": false,
                    "Quảng cáo hình ảnh": false,
                    "Quảng cáo video": false,
                    "Quảng cáo mua sắm": false,
                    "Quảng cáo đáp ứng": false,
                    "Quảng cáo tìm kiếm động mở rộng": false,
                    "Quảng cáo mua sắm thông minh": false,
                    "Quảng cáo hiển thị hình ảnh thích ứng": false,

                }
            },
            xAxis: {
                type: "category",
                // show: false,
                boundaryGap: false,
                data: dataChart1.keys,
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
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisPointer: {
                    lineStyle: {
                        color: "rgb(25, 123, 251)",
                        type: "dashed"
                    }
                }
            },
            yAxis: [{
                type: 'value',
                // show: false, 
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            }, ],
            series: dataSeries
            // [
            //     {  
            //         // name: dataChart1.name,
            //         // type: 'line',
            //         // symbol: "none",
            //         // smooth: false,
            //         // data: dataChart4.values, 
            //     },
            // ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getClicksAndOrganicClicksReport",from,to);
    const getClicksAndOrganicClicksReport = async (task, data) => {

        let Clicks = data.data[0].Clicks.replace(/[\.]/g, "");
        let OrganicClicks = data.data[1].OrganicClicks.replace(/[\.]/g, "");
        let dataChart = [{
                name: "Lượt nhấp chuột",
                value: Clicks
            },
            {
                name: "Nhấp chuột không phải trả tiền",
                value: OrganicClicks
            }
        ]

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            legend: {
                top: "25%",
                left: '50%',
                data: ["Lượt nhấp chuột", "Nhấp chuột không phải trả tiền"],
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["25%", "50%"],
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
                        formatter: '{value|{d}%}',
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getCampaignTypeAndDayReport",from,to);
    const getCampaignTypeAndDayReport = async (task, data) => {
        
        let value = data.data;

        let dataChart1 = {
            keys: [],
            values: []
        }

        let dataChart2 = {
            keys: [],
            values: []
        }

        value.forEach(ele => {
            dataChart1.keys.push(ele.day);
            dataChart1.values.push(ele.Clicks);
            dataChart2.values.push(ele.InvalidClicks);
        });

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

                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${numeral(value).format("0,0")}</span>
                            <br/>`
                    })

                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">Chỉ tìm kiếm</div>
                    <div class="text-dark pt-1">${detail}</div>`;

                }
            },
            grid: {
                right: "10%",
                left: "10%",
                // bottom: "0%",
                // top: "0%"
            },
            legend: {
                data: ["Số lượt nhấp", "Nhấp chuột không hợp lệ"],
                icon: "rect",
                itemHeight: 5,
                itemWidth: 15,
                top: "10%",
                right: '30%',
                // orient: "vertical"
            },
            xAxis: {
                type: "category",
                // show: false,
                boundaryGap: false,
                data: dataChart1.keys,
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
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisPointer: {
                    lineStyle: {
                        color: "rgb(25, 123, 251)",
                        type: "dashed"
                    }
                }
            },
            yAxis: [{
                type: 'value',
                // show: false, 
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: "#ccc"
                    },
                    fontFamily: 'Arial',
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            }, ],
            series: [{
                    name: 'Số lượt nhấp',
                    type: 'line',
                    symbol: "circle",
                    smooth: false,  
                    data: dataChart1.values,
                    // symbolSize: 10,
                    // hoverAnimation: false, 
                    // lineStyle: {
                    //     normal: {
                    //         width: 2,
                    //         shadowColor: "rgba(0,0,0,0.4)",
                    //         shadowBlur: 10,
                    //         shadowOffsetY: 10
                    //     }
                    // },
                    // itemStyle: {
                    //     normal: {
                    //         color: "rgb(55,162,218)",
                    //         borderColor: "rgba(55,162,218,0.2)",
                    //         borderWidth: 12
                    //     }
                    // }

                },
                {
                    name: 'Nhấp chuột không hợp lệ',
                    type: 'line',
                    symbol: "circle", 
                    smooth: false,  
                    data: dataChart2.values,
                    // symbolSize: 10,
                    // hoverAnimation: false, 
                    // lineStyle: {
                    //     normal: {
                    //         width: 2,
                    //         shadowColor: "rgba(0,0,0,0.4)",
                    //         shadowBlur: 10,
                    //         shadowOffsetY: 10
                    //     }
                    // },
                    // itemStyle: {
                    //     normal: {
                    //         color: "rgb(174,253,202)",
                    //         borderColor: "rgba(174,253,202,0.2)",
                    //         borderWidth: 12
                    //     }
                    // }
                },
            ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("get_CAMPAIGN_TYPE_SEARCH_ONLY_Report",from,to);
    const get_CAMPAIGN_TYPE_SEARCH_ONLY_Report = async (task, data) => {

        let dataChart = [];
        let dataLegend = [];
        data.data.forEach((ele, index) => {
            if (index < 10) {
                let newData = {
                    name: ele.name,
                    value: ele.Clicks.replace(/[\.]/g, "")
                }

                dataLegend.push(ele.name);
                dataChart.push(newData);
            }
        });


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1">Số lượt nhấp: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                }
            },
            legend: {
                top: "25%",
                left: '50%',
                data: dataLegend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 10,
                radius: ["50%", "80%"],
                center: ["20%", "60%"],
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
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getQualityScoreReport",from,to);
    const getQualityScoreReport = async (task, data) => {
        let dataChart = [];
        let dataLegend = [];
        data.data.forEach((ele, index) => {
            if (index < 6) {
                let newData = {
                    name: "Điểm chất lượng : " + ele.Score,
                    value: ele.Clicks.replace(/[\.]/g, "")
                }

                dataLegend.push("Điểm chất lượng : " + ele.Score);
                dataChart.push(newData);
            }
        });


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1">Số lượt nhấp: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                }
            },
            legend: {
                top: "25%",
                left: '50%',
                data: dataLegend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["20%", "60%"],
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
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getCampaignClicksReport",from,to);
    const getCampaignClicksReport = async (task, data) => {
        let dataChart = [];
        let dataLegend = [];
        data.data.forEach((ele, index) => {
            if (index < 6) {
                let newData = {
                    name: ele.name,
                    value: ele.Clicks.replace(/[\.]/g, "")
                }

                dataLegend.push(ele.name);
                dataChart.push(newData);
            }
        });


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                position: "right",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1">Số lượt nhấp: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                }
            },
            legend: {
                top: "15%",
                left: '50%',
                data: dataLegend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["20%", "50%"],
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
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getCampaignInvalidClicksReport",from,to);
    const getCampaignInvalidClicksReport = async (task, data) => {
        let dataChart = [];
        let dataLegend = [];
        data.data.forEach((ele) => {
            if (ele.InvalidClicks != "0") {
                let newData = {
                    name: ele.name,
                    value: ele.InvalidClicks.replace(/[\.]/g, "")
                }

                dataLegend.push(ele.name);
                dataChart.push(newData);
            }
        });


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                position: "right",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1">Nhấp chuột không hợp lệ: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                }
            },
            legend: {
                top: "15%",
                left: '50%',
                data: dataLegend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 20,
                radius: ["50%", "80%"],
                center: ["20%", "50%"],
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
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getNetworkInvalidClicksReport",from,to);
    const getNetworkInvalidClicksReport = async (task, data) => {

        let dataChart = {
            keys: [],
            values: [],
        }

        data.data.forEach(ele => {
            dataChart.keys.push(ele.name);
            dataChart.values.push(ele.InvalidClicks.replace(/[\.|\₫]/g, ""));
        });


        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                position: "top",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    let {
                        marker,
                        seriesName,
                        value,
                        name
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                <div class="text-dark pt-2">
                    ${marker} ${seriesName} <span style="font-weight:bold">: ${value}</span>
                    <br/> 
                </div>`;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dataChart.keys,
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "#ccc"
                    }
                },
            },
            yAxis: [{
                type: 'value',
                // show: false, 
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
            }, ],
            series: [{
                name: "Nhấp chuột không hợp lệ",
                data: dataChart.values,
                type: 'bar',
            }, ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getDayInvalidClicksReport",from,to);
    const getDayInvalidClicksReport = async (task, data) => {

        let dataChartCost = {
            keys: [],
            values: [],
        }

        let dataChartInvalidClicks = {
            keys: [],
            values: [],
        }

        let maxInvalidClicks = 100;
        let maxCost = 1000000;

        data.data.forEach(ele => {
            dataChartCost.keys.push(ele.day);
            if(maxCost < parseInt(ele.Cost.replace(/[\.|\₫]/g, "")))
                maxCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));

            if(maxInvalidClicks < parseInt(ele.InvalidClicks.replace(/[\.|\₫]/g, "")))
                maxInvalidClicks = parseInt(ele.InvalidClicks.replace(/[\.|\₫]/g, ""));
            
            dataChartCost.values.push(ele.Cost.replace(/[\.|\₫]/g, ""));
            dataChartInvalidClicks.values.push(ele.InvalidClicks.replace(/[\.|\₫]/g, ""));
        });

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

                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">: ${(seriesName == "Phí") ? numeral(value).format("0,0") + " ₫" : numeral(value).format("0,0")}</span>
                            <br/>`
                    })

                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div> 
                    <div class="text-dark pt-1">${detail}</div>`;

                }
            },
            grid: {
                right: "10%",
                left: "5%",
                // bottom: "0%",
                // top: "0%"
            },
            legend: {
                data: ["Nhấp chuột không hợp lệ", "Phí"],
                icon: "rect",
                itemHeight: 5,
                itemWidth: 15,
                top: "5%",
                right: '35%',
                // orient: "vertical"
            },
            xAxis: [{
                type: "category",
                // show: false, 
                data: dataChartCost.keys,
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
                }
            }],
            yAxis: [{
                    type: 'value',
                    position: 'left',
                    show: false,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    min: 0,
                    max: maxInvalidClicks,
                },
                {
                    type: 'value',
                    position: 'right',
                    show: false,
                    min: 0,
                    max: maxCost,
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: "#ccc"
                        },
                        fontFamily: 'Arial',
                        formatter: (value, index) => (value = numeral(value).format("0,0") + " ₫")
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },

                },
            ],
            series: [{
                    name: 'Nhấp chuột không hợp lệ',
                    type: 'bar',
                    data: dataChartInvalidClicks.values,
                },
                {
                    name: 'Phí',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: dataChartCost.values,
                },

            ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${task}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');
        await $(`.similarReloadTask[data-task="${task}"]`).find('i').removeClass('fa-spin');
    }

    api("getKeywordReport",from,to);
    const getKeywordReportChart = async (task, data) => {
        let dataChart = [];
        let dataLegend = [];

        let sumOther = 0;
        data.data.forEach((ele, index) => {
            if (index < 24) {
                let newData = {
                    name: ele.name,
                    value: ele.Clicks.replace(/[\.]/g, "")
                }

                dataLegend.push(ele.name);
                dataChart.push(newData);
            } else {
                sumOther += parseInt(ele.Clicks.replace(/[\.]/g, ""));
            }
        });

        dataLegend.push("Khác");
        dataChart.push({
            name: "Khác",
            value: sumOther
        });

        let ele = document.getElementById(task + "Chart");

        let myChart = echarts.init(ele, "light");

        let option = {
            tooltip: {
                trigger: "item",
                position: "right",
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {
                    // console.log(params);
                    let {
                        marker,
                        value,
                        name,
                        percent
                    } = params;

                    // name = moment(name).format('DD MMMM YYYY');

                    value = numeral(value).format('0,0');

                    return `
                <div class="text-dark pt-2">
                    <span style="font-weight:bold">${marker} ${name}</span>
                    <br/> 
                </div>
                <div class="text-muted text-capitalize border-top pt-1">Số lượt nhấp: : <span style="font-weight:bold">${value} (${percent}%)</span></div>`;
                }
            },
            legend: {
                top: "15%",
                left: '50%',
                data: dataLegend,
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
                },
                type: 'scroll',
                orient: 'vertical'
            },
            series: [{
                type: 'pie',
                legendHoverLink: false,
                minAngle: 10,
                radius: ["50%", "80%"],
                center: ["20%", "50%"],
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
                        formatter: '{value|{d}%}',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 12,
                                fontFamily: 'Arial',
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 5,
                                show: false,
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}Chart`).removeClass("is-loading");
        await $(`.similarReloadTask[data-task="${task}Chart"]`).find('i').removeClass('fa-spin');
    }



    // api("getAdGroupStatus_EnabledReport");
    const getAdGroupStatus_EnabledReport = async (task, data) => {
        console.log(data);
        let Clicks = data.data[0].Clicks.replace(/[\.]/g, "");
        let OrganicClicks = data.data[1].OrganicClicks.replace(/[\.]/g, "");
        let dataChart = [{
                name: "Số lượt nhấp",
                value: Clicks
            },
            {
                name: "Số nhấp chuột không phải trả tiền",
                value: OrganicClicks
            }
        ]

        let ele = document.getElementById(task);

        let myChart = echarts.init(ele, "light");

        let option = {
            legend: {
                top: "25%",
                left: '60%',
                data: ["Số lượt nhấp", "Số nhấp chuột không phải trả tiền"],
                itemWidth: 20,
                itemHeight: 14,
                width: 10,
                textStyle: {
                    fontFamily: 'Arial',
                    lineHeight: 16
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
                        formatter: '{value|{d}%}',
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
                if (params.name == dataChart.name) {
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

        await $(`#${task}`).removeClass("is-loading");

    } 

    //api("getTotalChartReport");
    const getTotalChartReport = async (task, data) => {
        let values = data.data[0];

        let Click = values.Clicks.replace(/[\.|\₫]/g, "");
        let index = values.ConversionsManyPerClick.indexOf(",");
        let ConversionsManyPerClick = values.ConversionsManyPerClick.slice(0, index);
        ConversionsManyPerClick = ConversionsManyPerClick.replace(/[\.|\₫]/g, "");
        let CostPerConversionManyPerClick = values.CostPerConversionManyPerClick.replace(/[\.|\₫]/g, "");
        let ClickThroughRate = values.ClickThroughRate.replace(/[\,|\%]/g, "");

        $("#chartClick").text(numeral(Click).format("0,0"));
        $("#chartConversion").text(numeral(ConversionsManyPerClick).format("0,0"));
        $("#chartCost").text(numeral(CostPerConversionManyPerClick).format("0,0"));
        $("#chartCTR").text(numeral(ClickThroughRate / 10000).format("0.00%"));

        await $(`#chartClick`).removeClass('is-loading');
        await $(`#chartConversion`).removeClass('is-loading');
        await $(`#chartCost`).removeClass('is-loading');
        await $(`#chartCTR`).removeClass('is-loading');

        $(".counter").counterUp();
    } 

    //api("getTopChartReport");
    const getTopChartReport = async (task, data) => {

        let TopChartReport = data.data;

        let dataClicks = {
            keys: [],
            values: [],
        };

        let dataConversionsManyPerClick = {
            keys: [],
            values: [],
        };

        let dataCostPerConversionManyPerClick = {
            keys: [],
            values: [],
        };

        let dataClickThroughRate = {
            keys: [],
            values: [],
        }

        let dataChart = {
            keys: [],
            values: [],
        };

        let Click = 0;
        let ConversionsManyPerClick = 0;
        let CostPerConversionManyPerClick = 0;
        let ClickThroughRate = 0;

        TopChartReport.forEach(ele => {

            dataClicks.keys.push(ele.day);
            dataClicks.values.push(ele.Clicks.replace(".", ""));
            Click += parseInt(ele.Clicks.replace(".", ""));

            dataConversionsManyPerClick.keys.push(ele.day);
            dataConversionsManyPerClick.values.push(parseInt(ele.ConversionsManyPerClick.replace(",", "")) / 100);
            ConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(".", ""));

            dataCostPerConversionManyPerClick.keys.push(ele.day);
            dataCostPerConversionManyPerClick.values.push(ele.CostPerConversionManyPerClick.replace(/[\.|\₫]/g, ""));
            CostPerConversionManyPerClick += parseFloat(ele.CostPerConversionManyPerClick.replace(".", ""));


            dataClickThroughRate.keys.push(ele.day);
            let value = ele.ClickThroughRate.replace(",", "");
            value = value.replace("%", "");
            dataClickThroughRate.values.push(value / 10000);
            ClickThroughRate += parseInt(value);
        });

        dataChart.keys = dataClicks.keys.reverse();

        dataClicks.values = dataClicks.values.reverse();
        dataConversionsManyPerClick.values = dataConversionsManyPerClick.values.reverse();
        dataCostPerConversionManyPerClick.values = dataCostPerConversionManyPerClick.values.reverse();
        dataClickThroughRate.values = dataClickThroughRate.values.reverse();

        // render chart

        let id = task;

        let ele = document.getElementById(id);

        let myChart = echarts.init(ele);

        let option = {
            // tooltip: {
            //     trigger: "axis",
            //     backgroundColor: 'rgba(255, 255, 255, 1)',
            //     borderColor: 'rgba(93,120,255,1)',
            //     borderWidth: 1,
            //     extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
            //     formatter: params => {
            //         // console.log(params);
            //         let {
            //             name
            //         } = params[0];
            //         let {
            //             marker: mrkr1,
            //             color: color1,
            //             seriesName: name1,
            //             value: val1
            //         } = params[0];

            //         // name = moment(name).format('DD MMMM YYYY');

            //         switch (taskName) {
            //             case 'Clicks':
            //                 val1 = numeral(val1).format('0,0');
            //                 break;
            //             case 'ConversionsManyPerClick':
            //                 val1 = numeral(val1).format('0,0');
            //                 break;
            //             case 'CostPerConversionManyPerClick':
            //                 val1 = val1 + "đ";
            //                 break;
            //             case 'ClickThroughRate':
            //                 val1 = numeral(val1).format('0.00%');
            //                 break;
            //             default:
            //                 break;
            //         }

            //         return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
            //     <div class="text-dark pt-2">
            //         ${mrkr1} ${name1} <span style="color:${color1};font-weight:bold">${val1}</span>
            //         <br/> 
            //     </div>`;
            //     }
            // },
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

                        switch (seriesName) {
                            case 'Số lần click':
                                format = '0,0';
                                break;
                            case 'Chuyển đổi':
                                format = '0,0';
                                break;
                            case 'Chi phí / chuyển đổi':
                                format = '0,0';
                                break;
                            case 'Tỉ lệ nhấp':
                                format = '0.00%';
                                break;
                            default:
                                break;

                        }

                        value = numeral(value).format(format);


                        detail += `${marker} ${seriesName} <span style="color:${color};font-weight:bold">${(seriesName=="Chi phí / chuyển đổi") ? value : value}</span>
                            <br/>`
                    })
                    // name = moment(name).format('DD MMMM YYYY');
                    return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                    <div class="text-dark pt-2">${detail}`;

                }
            },
            grid: {
                right: "5%",
                // left: "0%",
                // bottom: "0%",
                // top: "0%"
            },
            legend: {
                data: ['Số lần click', 'Chuyển đổi', 'Chi phí / chuyển đổi', 'Tỉ lệ nhấp'],
                selected: {
                    'Số lần click': true,
                    'Chuyển đổi': false,
                    'Chi phí / chuyển đổi': false,
                    'Tỉ lệ nhấp': false,
                },
                icon: "circle",
            },
            xAxis: {
                type: "category",
                // show: false,
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
                    // formatter: (value, index) => moment(value).format('MM-YYYY')
                },
                axisPointer: {
                    lineStyle: {
                        color: "rgb(25, 123, 251)",
                        type: "dashed"
                    }
                }
            },
            yAxis: [{
                    type: 'value',
                    name: 'Số lần click',
                    show: false,
                    position: 'right',
                },
                {
                    type: 'value',
                    name: 'Chuyển đổi',
                    show: false,
                    position: 'right',
                    offset: 80,
                },
                {
                    type: 'value',
                    name: 'Chi phí / chuyển đổi',
                    show: false,
                    position: 'left',
                },
                {
                    type: 'value',
                    name: 'Tỉ lệ nhấp',
                    show: false,
                    position: 'left',
                    offset: 80,
                }
            ],
            series: [{
                    name: 'Số lần click',
                    type: 'line',
                    symbol: "none",
                    smooth: false,
                    data: dataClicks.values,
                    lineStyle: {
                        color: "rgba(59,120,231,0.7)"
                    },
                    itemStyle: {
                        color: "rgba(59,120,231,0.7)"
                    },
                    // areaStyle: {
                    //     color: "rgba(59,120,231,0.7)"
                    // }   
                },
                {
                    name: 'Chuyển đổi',
                    type: 'line',
                    symbol: "none",
                    smooth: false,
                    yAxisIndex: 1,
                    data: dataConversionsManyPerClick.values,
                    lineStyle: {
                        color: "rgba(210,63,49,0.7)"
                    },
                    itemStyle: {
                        color: "rgba(210,63,49,0.7)"
                    },
                    // areaStyle: {
                    //     color: "rgba(210,63,49,0.7)"
                    // }   
                },
                {
                    name: 'Chi phí / chuyển đổi',
                    type: 'line',
                    symbol: "none",
                    smooth: false,
                    yAxisIndex: 2,
                    data: dataCostPerConversionManyPerClick.values,
                    lineStyle: {
                        color: "rgba(242,166,0,0.7)"
                    },
                    itemStyle: {
                        color: "rgba(242,166,0,0.7)"
                    },
                    // areaStyle: {
                    //     color: "rgba(242,166,0,0.7)"
                    // }   
                },
                {
                    name: 'Tỉ lệ nhấp',
                    type: 'line',
                    symbol: "none",
                    smooth: false,
                    yAxisIndex: 3,
                    data: dataClickThroughRate.values,
                    lineStyle: {
                        color: "rgba(13,144,79,0.7)"
                    },
                    itemStyle: {
                        color: "rgba(13,144,79,0.7)"
                    },
                    // areaStyle: {
                    //     color: "rgba(13,144,79,0.7)"
                    // }   
                }
            ]
        };
        myChart.setOption(option);


        new ResizeSensor($(`#${id}`), function () {
            myChart.resize();
        });

        await $(`#${task}`).removeClass('is-loading');

        // let taskName = "";

        // for (let i = 0; i < 4; i++) {
        //     if (i == 0)
        //         taskName = "Click";
        //     else if (i == 1)
        //         taskName = "ConversionsManyPerClick";
        //     else if (i == 2)
        //         taskName = "CostPerConversionManyPerClick";
        //     else    
        //         taskName = "ClickThroughRate";

        //         let ele = document.getElementById(task + "--" + taskName);

        //         let myChart = echarts.init(ele);

        //         let option = {
        //             tooltip: {
        //                 trigger: "axis",
        //                 backgroundColor: 'white',
        //                 borderColor: 'rgba(59,120,231,0.4)',
        //                 borderWidth: 1,
        //                 position: "bottom",
        //                 extraCssText: 'padding: 5px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);', 
        //                 formatter: params => {
        //                     // console.log(params);
        //                     let {
        //                         name
        //                     } = params[0];
        //                     let detail = "";
        //                     let format = "";
        //                     params.forEach((p, i) => {
        //                         let {
        //                             marker,
        //                             color,
        //                             seriesName,
        //                             value
        //                         } = p;

        //                         if (seriesName == "click") 
        //                             format = '0,0'; 
        //                         else if (seriesName == "conversions") 
        //                             format = '0,0'; 
        //                         else if (seriesName == "cost") 
        //                             format = '0,0'; 
        //                         else
        //                             format = '0.00%'; 

        //                         value = numeral(value).format(format);


        //                         detail += `<span class="font-12" style="color: ${color};font-weight:bold">
        //                         ${(seriesName=="cost") ? value + " ₫" : value}
        //                         </span>
        //                             <br/>`
        //                     })
        //                     // name = moment(name).format('DD MMMM YYYY');
        //                     return `<div class="text-dark text-capitalize font-10">${name}</div>
        //                     <div class="text-dark">${detail}</div>`;

        //                 }
        //             },
        //             grid: {
        //                 left: '-4%',
        //                 right: '-4%',
        //                 // bottom: "0%",
        //                 // top: "20%"
        //             },
        //             xAxis: {
        //                 type: "category",
        //                 show: false,
        //                 // boundaryGap: false,
        //                 data: dataChart.keys, 
        //             },
        //             yAxis: [{
        //                 type: 'value',
        //                 show: false
        //             }],
        //             series: [{ 
        //                 type: 'line',
        //                 symbol: "none",
        //                 smooth: true,
        //                 name: (taskName=="Click") ? "click" : (taskName=="ConversionsManyPerClick") ? "conversions" : (taskName=="CostPerConversionManyPerClick") ? "cost" : "ctr",
        //                 data: (taskName=="Click") ? dataClicks.values : (taskName=="ConversionsManyPerClick") ? dataConversionsManyPerClick.values : (taskName=="CostPerConversionManyPerClick") ? dataCostPerConversionManyPerClick.values : dataClickThroughRate.values,
        //                 lineStyle: {
        //                     color: (taskName=="Click") ? "rgba(59,120,231,0.4)" : 
        //                     (taskName=="ConversionsManyPerClick") ? "rgba(210,63,49,0.4)" : 
        //                     (taskName=="CostPerConversionManyPerClick") ? "rgba(242,166,0,0.4)" : "rgba(13,144,79,0.4)",
        //                 },
        //                 itemStyle: {
        //                     color: (taskName=="Click") ? "rgba(59,120,231,0.4)" : 
        //                     (taskName=="ConversionsManyPerClick") ? "rgba(210,63,49,0.4)" : 
        //                     (taskName=="CostPerConversionManyPerClick") ? "rgba(242,166,0,0.4)" : "rgba(13,144,79,0.4)",
        //                 },
        //                 areaStyle: {
        //                     color: (taskName=="Click") ? "rgba(59,120,231,0.1)" : 
        //                     (taskName=="ConversionsManyPerClick") ? "rgba(210,63,49,0.1)" : 
        //                     (taskName=="CostPerConversionManyPerClick") ? "rgba(242,166,0,0.1)" : "rgba(13,144,79,0.1)",
        //                 }
        //             }]
        //         };

        //         myChart.setOption(option);
        //         await $(`#${task + "--" + taskName}`).removeClass('is-loading');

        //         new ResizeSensor($(`#${task + "--" + taskName}`), function () {
        //             myChart.resize();
        //         }); 

        // }


    }

    //api("getDemographicReport");
    const getDemographicReport = async (task, data) => {
        let gender = data.data.gender;

        let dataChartGender = {
            keys: ["Nam", "Nữ"],
            values: [],
        }

        let dataChartMale = {
            keys: ["18-24 tuổi", "25-34 tuổi", "35-44 tuổi", "45-54 tuổi", "55-64 tuổi", "65 tuổi trở lên"],
            values: []
        }

        let dataChartFemale = {
            keys: ["18-24 tuổi", "25-34 tuổi", "35-44 tuổi", "45-54 tuổi", "55-64 tuổi", "65 tuổi trở lên"],
            values: []
        }

        let dataChartAge = {
            keys: ["18-24", "25-34", "35-44", "45-54", "55-64", "65 trở lên"],
            values: []
        }

        let sumMale = 0;
        let sumFemale = 0;
        let sumUndefined = 0;
        let sumage = 0;
        let sumGenderAndAge = 0;

        gender.forEach(ele => {
            sumMale += parseInt(ele.Male.replace(".", ""));
            sumFemale += parseInt(ele.Female.replace(".", ""));
            sumUndefined += parseInt(ele.undefined.replace(".", ""));
            let sumAge = parseInt(ele.Male.replace(".", "")) + parseInt(ele.Female.replace(".", "")) + parseInt(ele.undefined.replace(".", ""));
            dataChartAge.values.push(sumAge)
            dataChartMale.values.push(ele.Male.replace(".", ""))
            dataChartFemale.values.push(ele.Female.replace(".", ""))
        })

        let sum = sumFemale + sumMale + sumUndefined;
        let percentGender = (sumFemale + sumMale) / sum;

        dataChartGender.values.push(sumMale);
        dataChartGender.values.push(sumFemale);

        dataChartAge.values.pop();
        dataChartMale.values.pop();
        dataChartFemale.values.pop();

        dataChartMale.values.forEach(ele => {
            sumGenderAndAge += parseInt(ele);
        })

        dataChartFemale.values.forEach(ele => {
            sumGenderAndAge += parseInt(ele);
        })

        dataChartAge.values.forEach(ele => {
            sumage += ele;
        })

        let percentGenderAndAge = sumGenderAndAge / sum;
        let percentAge = sumage / sum;

        const run = async taskName => {


            // render chart

            let id = task + '--' + taskName;

            let ele = document.getElementById(id);

            let myChart = echarts.init(ele);

            if (taskName == "Gender") {
                $("#percent").text(` Dựa trên ${numeral(percentGender).format("0%")} lần hiển thị đã xác định được giới tính.`);
                let option = {
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${name}</div>
                        <div class="text-dark pt-2">
                            ${marker} ${seriesName} <span style="font-weight:bold">${value}</span>
                            <br/> 
                        </div>`;
                        }
                    },
                    grid: {
                        right: "5%",
                        top: "30%",
                        // left: "%"
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: {
                        show: true,
                        data: dataChartGender.keys,
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
                                color: "#9e9e9e"
                            },
                            rich: {}
                        },
                    },
                    series: [{
                        type: 'bar',
                        name: "Số lần hiển thị",
                        data: dataChartGender.values,
                        barWidth: 38,
                        itemStyle: {
                            normal: {
                                color: "#00BAD2",
                                "label": {
                                    color: "#00BAD2",
                                    "show": true,
                                    "position": "right",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                },
                                barBorderColor: "#00BAD2"
                            }
                        },
                        // label: {
                        //     normal: {
                        //         show: true,
                        //         position: 'right',
                        //         // formatter: 'số lần hiển thị {c}',
                        //         formatter: function (p) {
                        //             return "số lần hiển thị " + numeral(p.value).format("0,0");
                        //         },
                        //         color: "#9e9e9e"
                        //     }
                        // },
                    }]
                };
                myChart.setOption(option);
            } else if (taskName == "Age") {
                $("#percent").text(` Dựa trên ${numeral(percentAge).format("0%")} lần hiển thị đã xác định được độ tuổi.`);
                let option = {
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${(name == "65 trở lên") ? "65 tuổi trở lên" : (name + " tuổi")}</div>
                        <div class="text-dark pt-2">
                            ${marker} ${seriesName} <span style="font-weight:bold">${value}</span>
                            <br/> 
                        </div>`;
                        }
                    },
                    grid: {
                        right: "5%",
                        left: "-3%"
                    },
                    xAxis: {
                        type: "category",
                        data: dataChartAge.keys,
                        axisLabel: {
                            textStyle: {
                                color: '#9e9e9e',

                            },
                            fontFamily: 'Arial',
                            fontSize: 11,
                            lineHeight: 22,
                            width: '100%',
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#9e9e9e'
                            },
                        },
                    },
                    yAxis: {
                        type: 'value',
                        show: false,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#9e9e9e'
                            },
                        },
                    },
                    series: [{
                        name: "Số lượt hiển thị",
                        data: dataChartAge.values,
                        type: 'bar',
                        itemStyle: {
                            // color: 'rgb(66, 131, 244)',
                            // barBorderColor: 'rgb(66, 131, 244)'
                            normal: {
                                color: "#00BAD2",
                                "label": {
                                    color: "#00BAD2",
                                    "show": true,
                                    "position": "top",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                },
                                barBorderColor: "#00BAD2"
                            }
                        },
                        // label: {
                        //     show: true,
                        //     position: 'top',
                        //     color: '#9e9e9e', 
                        // }

                    }]
                };
                myChart.setOption(option);
            } else {
                $("#percent").text(` Dựa trên ${numeral(percentGenderAndAge).format("0%")} lần hiển thị đã xác định được giới tính và độ tuổi.`);
                let option = {
                    tooltip: {
                        position: "top",
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}, ${name}</div>
                        <div class="text-dark pt-2">
                            ${marker} Số lần hiển thị <span style="font-weight:bold">: ${numeral(value).format("0,0")}</span>
                            <br/>   
                        </div>`
                        }
                    },
                    legend: {
                        data: [`Nam`, `Nữ`]
                    },
                    grid: {
                        left: '-1%',
                        right: '1%',
                        bottom: '10%',
                        // top: '5%', 
                    },
                    xAxis: {
                        type: 'category',
                        data: dataChartMale.keys,
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
                            formatter: (value, i) => (value = numeral(value).format("0a")),
                            fontFamily: 'Arial'
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    series: [{
                        name: "Nam",
                        type: 'bar',
                        barWidth: 30,
                        barCategoryGap: false,
                        data: dataChartMale.values,
                        itemStyle: {
                            normal: {
                                color: "#00BAD2",
                                "label": {
                                    color: "#00BAD2",
                                    "show": true,
                                    "position": "top",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                },
                                // barBorderColor: "#059BFF"
                            }
                        },
                    }, {
                        name: "Nữ",
                        type: 'bar',
                        barWidth: 30,
                        data: dataChartFemale.values,
                        itemStyle: {
                            normal: {
                                color: "#F83E7D",
                                "label": {
                                    color: "#F83E7D",
                                    "show": true,
                                    "position": "top",
                                    formatter: function (p) {
                                        return p.value > 1000000 ? numeral(p.value).format("0.0a") : numeral(p.value).format("0,0");
                                    }
                                },
                                // barBorderColor: "#FF86A0"
                            },

                        },
                    }]
                };
                myChart.setOption(option);
            }


            // new ResizeSensor($(`#${task}`), function () {
            //     myChart.resize();
            // });

            await $(`#${task}`).removeClass('is-loading');

        }

        run('Gender');

        $('#getDemographicReport a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var taskName = $(e.target).data('task'); // activated tab
            let ele = document.getElementById(`getDemographicReport--${taskName}`);
            echarts.dispose(ele);
            run(taskName);


        });

    }

    //api("getAdReport");
    const getAdReport = async (task, data) => {
        let AdReport = data.data;
        AdReport = AdReport.slice(2, 12);
        let count = AdReport.length;
        let page = Math.ceil(count / 1);
        let currentpage = 1;
        let content = "";
        content = AdReport[currentpage].name;
        AdReport.forEach((el, index) => {
            if (index < 1)
                content = el.name;

        });
        $("#AdReportpage").text(`Trang 1/${page}`);
        $(`#${task}`).html(content);
        $(`.vta-preview-cell`).addClass("rounded shadow px-2 py-2");
        $(`.eta-preview-cell`).addClass("rounded shadow px-2 py-2");
        $(`span.more-text`).addClass("d-none");
        $(`.vta-preview-cell .link `).css("color", "#1a0dab");
        $(`.vta-preview-cell .link `).hover(function () {
            $(this).css("text-decoration", "underline");
        });
        $(`.vta-preview-cell .link `).mouseout(function () {
            $(this).css("text-decoration", "none");
        });
        $(`.eta-preview-cell .link `).css("color", "#1a0dab");
        $(`.eta-preview-cell .link `).hover(function () {
            $(this).css("text-decoration", "underline");
        });
        $(`.eta-preview-cell .link `).mouseout(function () {
            $(this).css("text-decoration", "none");
        });
        $(`.visurl`).prepend("<span style='color: #006621; border: solid 1px #006621' class='px-1 rounded mr-2'>Quảng cáo</span>");
        $(`.visurl`).css("color", "#006621");
        $(`#Impressionss`).text(AdReport[0].Impressionss);
        $(`#Clicks`).text(AdReport[0].Clicks);
        $(`#ClickThroughRate`).text(AdReport[0].ClickThroughRate);

        $(`#AdReporttop`).hover(function () {
            $(this).addClass("pointer")
            $(this).addClass("bg-darken-5");
        })

        $(`#AdReporttop`).mouseout(function () {
            $(this).removeClass("bg-darken-5");
        })

        $(`#AdReportbottom`).hover(function () {
            $(this).addClass("pointer")
            $(this).addClass("bg-darken-5");
        })

        $(`#AdReportbottom`).mouseout(function () {
            $(this).removeClass("bg-darken-5");
        })


        $("#AdReportbottom").click(() => {
            if (currentpage == page) {
                $("#AdReportbottom").addClass("disabled");
            } else {
                currentpage++;
                $("#AdReportpage").text(`Trang ${currentpage}/${page}`);
                AdReport = AdReport.slice(1);
                content = "";
                AdReport.forEach((el, index) => {
                    if (index < 1)
                        content = el.name;

                });
                $(`#${task}`).html(content);
                $(`.vta-preview-cell`).addClass("rounded shadow px-2 py-2");
                $(`.eta-preview-cell`).addClass("rounded shadow px-2 py-2");
                $(`span.more-text`).addClass("d-none");
                $(`.vta-preview-cell .link `).css("color", "#1a0dab");
                $(`.vta-preview-cell .link `).hover(function () {
                    $(this).css("text-decoration", "underline");
                });
                $(`.vta-preview-cell .link `).mouseout(function () {
                    $(this).css("text-decoration", "none");
                });
                $(`.eta-preview-cell .link `).css("color", "#1a0dab");
                $(`.eta-preview-cell .link `).hover(function () {
                    $(this).css("text-decoration", "underline");
                });
                $(`.eta-preview-cell .link `).mouseout(function () {
                    $(this).css("text-decoration", "none");
                });
                $(`.visurl`).prepend("<span style='color: #006621; border: solid 1px #006621' class='px-1 rounded mr-2'>Quảng cáo</span>");
                $(`.visurl`).css("color", "#006621");
                $(`#Impressionss`).text(AdReport[0].Impressionss);
                $(`#Clicks`).text(AdReport[0].Clicks);
                $(`#ClickThroughRate`).text(AdReport[0].ClickThroughRate);
            }

        })


        $("#AdReporttop").click(() => {
            if (currentpage != 1) {
                AdReport = data.data;
                AdReport = AdReport.slice(2, 12);
                currentpage--;
                let slice = (currentpage - 1) * 1;
                $("#AdReportpage").text(`Trang ${currentpage}/${page}`);
                AdReport = AdReport.slice(slice);
                content = "";
                AdReport.forEach((el, index) => {
                    if (index < 1)
                        content = el.name;
                });
                $(`#${task}`).html(content);
                $(`.vta-preview-cell`).addClass("rounded shadow px-2 py-2");
                $(`.eta-preview-cell`).addClass("rounded shadow px-2 py-2");
                $(`span.more-text`).addClass("d-none");
                $(`.vta-preview-cell .link `).css("color", "#1a0dab");
                $(`.vta-preview-cell .link `).hover(function () {
                    $(this).css("text-decoration", "underline");
                });
                $(`.vta-preview-cell .link `).mouseout(function () {
                    $(this).css("text-decoration", "none");
                });
                $(`.eta-preview-cell .link `).css("color", "#1a0dab");
                $(`.eta-preview-cell .link `).hover(function () {
                    $(this).css("text-decoration", "underline");
                });
                $(`.eta-preview-cell .link `).mouseout(function () {
                    $(this).css("text-decoration", "none");
                });
                $(`.visurl`).prepend("<span style='color: #006621; border: solid 1px #006621' class='px-1 rounded mr-2'>Quảng cáo</span>");
                $(`.visurl`).css("color", "#006621");
                $(`#Impressionss`).text(AdReport[0].Impressionss);
                $(`#Clicks`).text(AdReport[0].Clicks);
                $(`#ClickThroughRate`).text(AdReport[0].ClickThroughRate);

            } else {
                $("#AdReporttop").addClass("disabled");
            }

        })

    }

    //api("getDeviceReport");
    const getDeviceReport = async (task, data) => {
        let device = data.data.device;
        let number = data.data.number;
        let sumClick = 0;
        let sumCost = 0;
        let sumconversionsManyPerClick = 0;
        number.forEach((el, index) => {
            if (index != 0) {

                sumClick += parseInt(el.Clicks.replace(".", ""));
                sumCost += parseInt(el.Cost.replace(/[\.|\₫]/g, ""));

                let conversionsManyPerClick = el.ConversionsManyPerClick.replace(".", "");

                let index = conversionsManyPerClick.indexOf(",");
                conversionsManyPerClick = conversionsManyPerClick.slice(0, index);
                sumconversionsManyPerClick += parseInt(conversionsManyPerClick);

            }
        });

        let click1 = parseInt(number[2].Clicks.replace(".", "")) / sumClick;
        let click2 = parseInt(number[3].Clicks.replace(".", "")) / sumClick;
        let click3 = parseInt(number[1].Clicks.replace(".", "")) / sumClick;

        $("#Device-click1").text(numeral(click1).format("0.0%"));
        $("#Device-click2").text(numeral(click2).format("0.0%"));
        $("#Device-click3").text(numeral(click3).format("0.0%"));

        let cost1 = parseInt(number[2].Cost.replace(/[\.|\₫]/g, "")) / sumCost;
        let cost2 = parseInt(number[3].Cost.replace(/[\.|\₫]/g, "")) / sumCost;
        let cost3 = parseInt(number[1].Cost.replace(/[\.|\₫]/g, "")) / sumCost;

        $("#Device-cost1").text(numeral(cost1).format("0.0%"));
        $("#Device-cost2").text(numeral(cost2).format("0.0%"));
        $("#Device-cost3").text(numeral(cost3).format("0.0%"));

        let conversionsManyPerClick1 = parseInt(number[2].ConversionsManyPerClick.replace(/[\.|\₫]/g, "")) / sumconversionsManyPerClick;
        let conversionsManyPerClick2 = parseInt(number[3].ConversionsManyPerClick.replace(/[\.|\₫]/g, "")) / sumconversionsManyPerClick;
        let conversionsManyPerClick3 = parseInt(number[1].ConversionsManyPerClick.replace(/[\.|\₫]/g, "")) / sumconversionsManyPerClick;

        $("#Device-cpc1").text(numeral(conversionsManyPerClick1).format("0.0%"));
        $("#Device-cpc2").text(numeral(conversionsManyPerClick2).format("0.0%"));
        $("#Device-cpc3").text(numeral(conversionsManyPerClick3).format("0.0%"));

        let taskName = "";

        for (let index = 0; index < 3; index++) {

            if (index == 0) {
                taskName = "Clicks";
                let id = task + '--' + taskName;
                let ele = document.getElementById(id);
                let myChart = echarts.init(ele);
                let data1 = number[2].Clicks.replace(".", "");
                let data2 = number[3].Clicks.replace(".", "");
                let data3 = number[1].Clicks.replace(".", "");

                let option = {
                    tooltip: {
                        position: "bottom",
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}</div>
                        <div class="text-dark pt-2">
                            ${marker} ${name}<span style="font-weight:bold">: ${numeral(value).format("0,0")}</span>
                            <br/>  
                            <span style="font-weight:bold">(${numeral(parseInt(value)/parseInt(sumClick)).format("0.0%")} của tổng số)</span>
                        </div>`;
                        }
                    },
                    grid: {
                        left: "5%",
                        right: "-5%",
                        bottom: '0%',
                        top: '1%',
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Số lần click'],
                        show: false

                    },
                    series: [{
                            name: 'Điện thoại di động',
                            type: 'bar',
                            stack: '0',
                            data: [data1],
                            barWidth: 30,
                            color: "rgb(66, 133, 244)",
                            itemStyle: {
                                normal: {
                                    color: "#00BAD2",
                                    barBorderColor: "#4285F4"
                                }
                            },

                        },
                        {
                            name: 'Máy tính bảng',
                            type: 'bar',
                            stack: '0',
                            data: [data2],
                            color: "rgb(219, 68, 55)",
                            itemStyle: {
                                normal: {
                                    color: "#F85521",
                                    barBorderColor: "#F85521"
                                }
                            },
                        },
                        {
                            name: 'Máy tính',
                            type: 'bar',
                            stack: '0',
                            data: [data3],
                            color: "rgb(244, 180, 0)",
                            itemStyle: {
                                normal: {
                                    color: "#FFC007",
                                    barBorderColor: "#FFC007"
                                }
                            },
                        }
                    ]
                };

                myChart.setOption(option);
                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });

            }
            if (index == 1) {
                taskName = "Cost";
                let id = task + '--' + taskName;
                let ele = document.getElementById(id);
                let myChart = echarts.init(ele);
                let data1 = number[2].Cost.replace(/[\.|\₫]/g, "");
                let data2 = number[3].Cost.replace(/[\.|\₫]/g, "");
                let data3 = number[1].Cost.replace(/[\.|\₫]/g, "");
                let option = {
                    tooltip: {
                        position: "bottom",
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}</div>
                        <div class="text-dark pt-2">
                            ${marker} ${name}<span style="font-weight:bold">: ${numeral(value).format("0,0")} ₫</span>
                            <br/>  
                            <span style="font-weight:bold">(${numeral(parseInt(value)/parseInt(sumCost)).format("0.0%")} của tổng số)</span>
                        </div>`;
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '-5%',
                        bottom: '0%',
                        top: '1%',
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Chi phí'],
                        show: false

                    },
                    series: [{
                            name: 'Điện thoại di động',
                            type: 'bar',
                            stack: '0',
                            data: [data1],
                            barWidth: 30,
                            color: "rgb(66, 133, 244)",
                            itemStyle: {
                                normal: {
                                    color: "#00BAD2",
                                    barBorderColor: "#4285F4"
                                }
                            },
                        },
                        {
                            name: 'Máy tính bảng',
                            type: 'bar',
                            stack: '0',
                            data: [data2],
                            color: "rgb(219, 68, 55)",
                            itemStyle: {
                                normal: {
                                    color: "#F85521",
                                    barBorderColor: "#F85521"
                                }
                            },
                        },
                        {
                            name: 'Máy tính',
                            type: 'bar',
                            stack: '0',
                            data: [data3],
                            color: "rgb(244, 180, 0)",
                            itemStyle: {
                                normal: {
                                    color: "#FFC007",
                                    barBorderColor: "#FFC007"
                                }
                            },
                        }
                    ]
                };

                myChart.setOption(option);
                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });
            }
            if (index == 2) {
                taskName = "ConversionsManyPerClick";
                let id = task + '--' + taskName;
                let ele = document.getElementById(id);
                let myChart = echarts.init(ele);
                let data1 = number[2].ConversionsManyPerClick.replace(/[\.|\₫]/g, "");
                let index = data1.indexOf(",");
                data1 = data1.slice(0, index);
                let data2 = number[3].ConversionsManyPerClick.replace(/[\.|\₫]/g, "");
                index = data2.indexOf(",");
                data2 = data2.slice(0, index);
                let data3 = number[1].ConversionsManyPerClick.replace(/[\.|\₫]/g, "");
                index = data3.indexOf(",");
                data3 = data3.slice(0, index);

                let option = {
                    tooltip: {
                        position: "bottom",
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}</div>
                        <div class="text-dark pt-2">
                            ${marker} ${name}<span style="font-weight:bold">: ${numeral(value).format("0,0")}</span>
                            <br/>   
                        </div>`;
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '-8%',
                        bottom: '0%',
                        top: '1%',
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Chuyển đổi'],
                        show: false

                    },
                    series: [{
                            name: 'Điện thoại di động',
                            type: 'bar',
                            stack: '0',
                            data: [data1],
                            barWidth: 30,
                            color: "rgb(66, 133, 244)",
                            itemStyle: {
                                normal: {
                                    color: "#00BAD2",
                                    barBorderColor: "#4285F4"
                                }
                            },
                        },
                        {
                            name: 'Máy tính bảng',
                            type: 'bar',
                            stack: '0',
                            data: [data2],
                            color: "rgb(219, 68, 55)",
                            itemStyle: {
                                normal: {
                                    color: "#F85521",
                                    barBorderColor: "#F85521"
                                }
                            },
                        },
                        {
                            name: 'Máy tính',
                            type: 'bar',
                            stack: '0',
                            data: [data3],
                            color: "rgb(244, 180, 0)",
                            itemStyle: {
                                normal: {
                                    color: "#FFC007",
                                    barBorderColor: "#FFC007"
                                }
                            },
                        }
                    ]
                };

                myChart.setOption(option);
                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });

            }
        }
        await $(`#${task}`).removeClass('is-loading');

    }

    //api("getNetworkReport");
    const getNetworkReport = async (task, data) => {

        let network = data.data.network;
        let number = data.data.number;

        // let dataChartCost = {
        //     keys: [],
        //     values: []
        // }

        // let dataChartClicks = {
        //     keys: [],
        //     values: []
        // }

        // let dataChartCostPerClick = {
        //     keys: [],
        //     values: []
        // }

        // network.forEach(el => {
        //     dataChartCost.keys.push(el.name);
        //     dataChartClicks.keys.push(el.name);
        //     dataChartCostPerClick.keys.push(el.name);
        // });


        // number.forEach((el, index) => {
        //     let cost = el.Cost.replace(".", "");
        //     cost = cost.replace(".", "");
        //     cost = cost.replace("₫", "");
        //     dataChartCost.values.push(cost);

        //     dataChartClicks.values.push(el.Clicks.replace(".", ""));
        //     sum += parseInt(el.Clicks.replace(".", ""));

        //     let CostPerClick = el.CostPerClick.replace(".", "");
        //     CostPerClick = CostPerClick.replace(".", "");
        //     CostPerClick = CostPerClick.replace("₫", "");
        //     dataChartCostPerClick.values.push(CostPerClick);
        // });

        // // dataChartClicks.values = dataChartClicks.values.sort((a, b) => b - a);
        // // dataChartCost.values = dataChartCost.values.sort((a, b) => b - a);
        // // dataChartCostPerClick.values = dataChartCostPerClick.values.sort((a, b) => b - a);

        // dataChartClicks.keys.pop();
        // dataChartClicks.values.pop();
        // dataChartCost.values.pop();
        // dataChartCostPerClick.values.pop();

        let sumClick = 0;
        let sumCost = 0;

        number.forEach((el, index) => {
            sumClick += parseInt(el.Clicks.replace(".", ""));
            sumCost += parseInt(el.Cost.replace(/[\.|\₫]/g, ""));

        });

        let click1 = parseInt(number[0].Clicks.replace(".", "")) / sumClick;
        let click2 = parseInt(number[1].Clicks.replace(".", "")) / sumClick;
        let click3 = parseInt(number[2].Clicks.replace(".", "")) / sumClick;

        $("#click1").text(numeral(click1).format("0.0%"));
        $("#click2").text(numeral(click2).format("0.0%"));
        $("#click3").text(numeral(click3).format("0.0%"));

        let cost1 = parseInt(number[0].Cost.replace(/[\.|\₫]/g, "")) / sumCost;
        let cost2 = parseInt(number[1].Cost.replace(/[\.|\₫]/g, "")) / sumCost;
        let cost3 = parseInt(number[2].Cost.replace(/[\.|\₫]/g, "")) / sumCost;

        $("#cost1").text(numeral(cost1).format("0.0%"));
        $("#cost2").text(numeral(cost2).format("0.0%"));
        $("#cost3").text(numeral(cost3).format("0.0%"));

        let CostPerClick1 = parseInt(number[0].CostPerClick.replace(/[\.|\₫]/g, ""));
        let CostPerClick2 = parseInt(number[1].CostPerClick.replace(/[\.|\₫]/g, ""));
        let CostPerClick3 = parseInt(number[2].CostPerClick.replace(/[\.|\₫]/g, ""));

        $("#cpc1").text(numeral(CostPerClick1).format("0,0") + " ₫");
        $("#cpc2").text(numeral(CostPerClick2).format("0,0") + " ₫");
        $("#cpc3").text(numeral(CostPerClick3).format("0,0") + " ₫");

        let taskName = "";

        for (let index = 0; index < 3; index++) {

            if (index == 0) {
                taskName = "Clicks";
                let id = task + '--' + taskName;
                let ele = document.getElementById(id);
                let myChart = echarts.init(ele);
                let data1 = number[0].Clicks.replace(".", "");
                let data2 = number[1].Clicks.replace(".", "");
                let data3 = number[2].Clicks.replace(".", "");

                let option = {
                    tooltip: {
                        position: "bottom",
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}</div>
                    <div class="text-dark pt-2">
                        ${marker} ${name}<span style="font-weight:bold">: ${numeral(value).format("0,0")}</span>
                        <br/>  
                        <span style="font-weight:bold">(${numeral(parseInt(value)/parseInt(sumClick)).format("0.0%")} của tổng số)</span>
                    </div>`;
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '-5%',
                        bottom: '0%',
                        top: '1%',
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Số lần click'],
                        show: false

                    },
                    series: [{
                            name: 'Tìm kiếm của google',
                            type: 'bar',
                            stack: '0',
                            data: [data1],
                            barWidth: 30,
                            color: "rgb(66, 133, 244)",
                            itemStyle: {
                                normal: {
                                    color: "#27E4FD",
                                    barBorderColor: "#27E4FD"
                                }
                            },
                        },
                        {
                            name: 'Các đối tác tìm kiếm',
                            type: 'bar',
                            stack: '0',
                            data: [data2],
                            color: "rgb(198, 218, 252)",
                            itemStyle: {
                                normal: {
                                    color: "#F83E7D",
                                    barBorderColor: "#F83E7D"
                                }
                            },

                        },
                        {
                            name: 'Mạng hiển thị',
                            type: 'bar',
                            stack: '0',
                            data: [data3],
                            color: "rgb(244, 180, 0)",
                            itemStyle: {
                                normal: {
                                    color: "#6E7ACA",
                                    barBorderColor: "#6E7ACA"
                                }
                            },

                        }
                    ]
                };

                myChart.setOption(option);
                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });

            }
            if (index == 1) {
                taskName = "Cost";
                let id = task + '--' + taskName;
                let ele = document.getElementById(id);
                let myChart = echarts.init(ele);
                let data1 = number[0].Cost.replace(/[\.|\₫]/g, "");
                let data2 = number[1].Cost.replace(/[\.|\₫]/g, "");
                let data3 = number[2].Cost.replace(/[\.|\₫]/g, "");
                let option = {
                    tooltip: {
                        position: "bottom",
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}</div>
                    <div class="text-dark pt-2">
                        ${marker} ${name}<span style="font-weight:bold">: ${numeral(value).format("0,0")} ₫</span>
                        <br/>  
                        <span style="font-weight:bold">(${numeral(parseInt(value)/parseInt(sumCost)).format("0.0%")} của tổng số)</span>
                    </div>`;
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '-5%',
                        bottom: '0%',
                        top: '1%',
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Chi phí'],
                        show: false

                    },
                    series: [{
                            name: 'Tìm kiếm của google',
                            type: 'bar',
                            stack: '0',
                            data: [data1],
                            barWidth: 30,
                            color: "rgb(66, 133, 244)",
                            itemStyle: {
                                normal: {
                                    color: "#27E4FD",
                                    barBorderColor: "#27E4FD"
                                }
                            },
                        },
                        {
                            name: 'Các đối tác tìm kiếm',
                            type: 'bar',
                            stack: '0',
                            data: [data2],
                            color: "rgb(198, 218, 252)",
                            itemStyle: {
                                normal: {
                                    color: "#F83E7D",
                                    barBorderColor: "#F83E7D"
                                }
                            },
                        },
                        {
                            name: 'Mạng hiển thị',
                            type: 'bar',
                            stack: '0',
                            data: [data3],
                            color: "rgb(244, 180, 0)",
                            itemStyle: {
                                normal: {
                                    color: "#6E7ACA",
                                    barBorderColor: "#6E7ACA"
                                }
                            },
                        }
                    ]
                };

                myChart.setOption(option);
                new ResizeSensor($(`#${id}`), function () {
                    myChart.resize();
                });
            }
            // if(index == 2) {
            //     taskName = "CostPerClick"; 
            //     let id = task + '--' + taskName; 
            //     let ele = document.getElementById(id); 
            //     let myChart = echarts.init(ele); 
            //     let data1 = number[0].CostPerClick.replace(/[\.|\₫]/g,"");
            //     let data2 = number[1].CostPerClick.replace(/[\.|\₫]/g,"");
            //     let data3 = number[2].CostPerClick.replace(/[\.|\₫]/g,"");

            //     let option = {
            //     tooltip: {
            //         position: "bottom",
            //         trigger: "item",
            //         backgroundColor: 'rgba(255, 255, 255, 1)',
            //         borderColor: 'rgba(93,120,255,1)',
            //         borderWidth: 1,
            //         extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
            //         formatter: params => { 
            //             let {
            //                 marker,
            //                 seriesName,
            //                 value,
            //                 name
            //             } = params;  

            //             return `<div class="text-dark text-capitalize border-bottom pb-1">${seriesName}</div>
            //         <div class="text-dark pt-2">
            //             ${marker} ${name}<span style="font-weight:bold">: ${numeral(value).format("0,0")} ₫</span>
            //             <br/>   
            //         </div>`;
            //         }
            //     }, 
            //     grid: {
            //         left: '5%',
            //         right: '0%',
            //         bottom: '0%',
            //         top: '1%', 
            //     },
            //     xAxis:  {
            //         type: 'value',
            //         show: false
            //     },
            //     yAxis: {
            //         type: 'category',
            //         data: ['CPC trung bình'],
            //         show: false

            //     },
            //     series: [
            //         {
            //             name: 'Tìm kiếm của google',
            //             type: 'bar',
            //             stack: '0', 
            //             data: [data1],
            //             barWidth: 30,
            //             color: "rgb(66, 133, 244)"
            //         },
            //         {
            //             name: 'Các đối tác tìm kiếm',
            //             type: 'bar',
            //             stack: '0', 
            //             data: [data2],
            //             color: "rgb(198, 218, 252)"
            //         },
            //         {
            //             name: 'Mạng hiển thị',
            //             type: 'bar',
            //             stack: '0', 
            //             data: [data3],
            //             color: "rgb(244, 180, 0)"
            //         }
            //     ]
            //     };

            //     myChart.setOption(option);
            //     new ResizeSensor($(`#${id}`), function () {
            //         myChart.resize();
            //     }); 

            // }




            // let option = {
            //     grid: {
            //         left: '2%',
            //         right: '2%',
            //         bottom: '5%',
            //         top: '20%',
            //         containLabel: true
            //     },
            //     xAxis: {
            //         type: 'category',
            //         data: dataChartClicks.keys,
            //         axisTick: {
            //             show: false
            //         },
            //         axisLine: {
            //             show: false
            //         },
            //         axisLabel: {
            //             color: 'rgba(0,0,0,.54)',
            //             fontFamily: 'Google Sans',
            //             fontSize: 12
            //         }
            //     },
            //     yAxis: {
            //         type: 'value',
            //         show: false
            //     },
            //     series: [{
            //         type: 'bar',
            //         barWidth: 80,
            //         data: (taskName == "Cost") ? dataChartCost.values : (taskName == "Clicks") ? dataChartClicks.values : dataChartCostPerClick.values,
            //         itemStyle: {
            //             normal: {
            //                 color: "rgb(66, 131, 244)",
            //                 "label": {
            //                     "show": true,
            //                     "position": "top",
            //                     color: "rgba(0,0,0,.54)",
            //                     formatter: ({
            //                         value
            //                     }) => {
            //                         if (taskName == "Clicks")
            //                             return numeral(value).format("0,0");
            //                         else
            //                             return numeral(value).format("0,0") + " ₫";
            //                     }
            //                 }
            //             }
            //         },

            //     }, ]
            // };




        }

        await $(`#${task}`).removeClass('is-loading');

    }

    function getValuesForEach(data, row) {
        let Data = [];
        let index = 0;
        let sum = 0;
        let hour = 0;
        data.forEach((el, i) => {
            let value = el.replace(".", "");
            value = value.replace(".", "");
            let temp = [row, index, parseInt(value)];
            Data.push(temp);
            sum += parseInt(value);
            index++;

            if (i == 0)
                hour = parseInt(value);
        });
        Data.push(hour);
        Data.push(sum);
        return Data;
    }

    // api("getDayReport");
    const getDayReport = async (task, data) => {

        let day = data.data.day;
        let values = data.data.values;
        let hour = values.hour;
        let dataDay = day;
        let dataHour = [];
        let dataChartDay = {
            keys: [],
            values: []
        }

        let dataChartHour = {
            keys: [],
            values: [],
        }

        for (let i = 0; i < 24; i++) {
            let temp = 1;
            temp += i;
            dataHour.push(+i + "h - " + temp + "h");
        }

        dataChartHour.keys = dataHour;
        dataChartHour.values = hour;

        let Data = [];

        Data = getValuesForEach(values.t7, 0);
        dataChartDay.values.push(Data.pop());
        Data = Data.concat(getValuesForEach(values.t6, 1));
        dataChartDay.values.push(Data.pop());
        Data = Data.concat(getValuesForEach(values.t5, 2));
        dataChartDay.values.push(Data.pop());
        Data = Data.concat(getValuesForEach(values.t4, 3));
        dataChartDay.values.push(Data.pop());
        Data = Data.concat(getValuesForEach(values.t3, 4));
        dataChartDay.values.push(Data.pop());
        Data = Data.concat(getValuesForEach(values.t2, 5));
        dataChartDay.values.push(Data.pop());
        Data = Data.concat(getValuesForEach(values.cn, 6));
        dataChartDay.values.push(Data.pop());

        Data = Data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });


        dataChartDay.keys = day;
        dataChartDay.values = dataChartDay.values.reverse();
        dataDay = dataDay.reverse();

        const run = async (taskName) => {

            let id = task + '--' + taskName;

            let ele = document.getElementById(id);

            let myChart = echarts.init(ele);
            if (taskName == "All") {
                let option = {
                    tooltip: {
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        position: "bottom",
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value[2] = numeral(value[2]).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">
                                        ${ 
                                            (value[1]==0) ? "Thứ bảy, " + name : (value[1]==1) ? "Thứ sáu, " + name :
                                            (value[1]==2) ? "Thứ năm, " + name : (value[1]==3) ? "Thứ tư, " + name :
                                            (value[1]==4) ? "Thứ ba, " + name : (value[1]==5) ? "Thứ hai, " + name : 
                                            "Chủ nhật, " + name
                                        }
                                    </div>
                        <div class="text-dark pt-2">
                            ${marker} ${seriesName} <span style="font-weight:bold">: ${value[2]}</span>
                            <br/> 
                        </div>`;
                        }

                    },
                    animation: true,
                    grid: {
                        // height: '50%',
                        // y: '10%',
                        left: "5%"
                    },
                    xAxis: {
                        type: 'category',
                        data: dataHour,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(0,0,0,.54)',
                            fontFamily: 'Google Sans',
                            fontSize: 12
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: dataDay,
                        splitArea: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(0,0,0,.54)',
                            fontFamily: 'Google Sans',
                            fontSize: 12
                        }
                    },
                    visualMap: {
                        min: 10,
                        max: 1000,
                        show: false,
                        color: ["#6E7ACA", "#dff9fb", "#ecf0f1"]
                    },
                    series: [{
                        name: 'Số lượt hiển thị',
                        type: 'heatmap',
                        data: Data,
                        progressive: "200",
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                    }]
                };
                myChart.setOption(option);
            } else if (taskName == "Day") {

                let option = {
                    tooltip: {
                        trigger: "item",
                        position: "top",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">
                                        ${
                                            (name=="CN") ? "Chủ Nhật" : (name=="T2") ? "Thứ Hai" :
                                            (name=="T3") ? "Thứ Ba" : (name=="T4") ? "Thứ Tư" :
                                            (name=="T5") ? "Thứ Năm" : (name=="T6") ? "Thứ Sáu" :
                                            "Thứ Bảy"
                                        }
                                    </div>
                        <div class="text-dark pt-2">
                            ${marker} ${seriesName} <span style="font-weight:bold">: ${value}</span>
                            <br/> 
                        </div>`;
                        }
                    },
                    grid: {
                        left: '-10%',
                        right: '0%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: dataChartDay.keys,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(0,0,0,.54)',
                            fontFamily: 'Google Sans',
                            fontSize: 12
                        }
                    },
                    yAxis: {
                        type: 'value',
                        show: false
                    },
                    series: [{
                        name: "Số lần hiển thị",
                        type: 'bar',
                        barWidth: 50,
                        data: dataChartDay.values,
                        itemStyle: {
                            normal: {
                                color: "#6E7ACA",
                                "label": {
                                    "show": true,
                                    "position": "top",
                                    color: "#6E7ACA",
                                    formatter: ({
                                        value
                                    }) => {
                                        return numeral(value).format("0,0");
                                    }
                                },
                                barBorderColor: "#6E7ACA"
                            }
                        },

                    }, ]
                };

                myChart.setOption(option);
            } else {
                let option = {
                    tooltip: {
                        trigger: "item",
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(93,120,255,1)',
                        borderWidth: 1,
                        extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                        position: "top",
                        formatter: params => {
                            // console.log(params);
                            let {
                                marker,
                                seriesName,
                                value,
                                name
                            } = params;

                            // name = moment(name).format('DD MMMM YYYY');

                            value = numeral(value).format('0,0');

                            return `<div class="text-dark text-capitalize border-bottom pb-1">
                                        ${ name }
                                    </div>
                        <div class="text-dark pt-2">
                            ${marker} ${seriesName} <span style="font-weight:bold">: ${value}</span>
                            <br/> 
                        </div>`;
                        }

                    },
                    grid: {
                        left: '-7%',
                        right: '2%',
                        bottom: '5%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: dataChartHour.keys,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(0,0,0,.54)',
                            fontFamily: 'Google Sans',
                            fontSize: 12
                        }
                    },
                    yAxis: {
                        type: 'value',
                        show: false
                    },
                    series: [{
                        name: "Số lần hiển thị",
                        type: 'bar',
                        barWidth: 15,
                        data: dataChartHour.values,
                        itemStyle: {
                            normal: {
                                color: "#6E7ACA",
                                // "label": {
                                //     "show": true,
                                //     "position": "top",
                                //     color: "rgba(0,0,0,.54)",
                                //     formatter: ({
                                //         value
                                //     }) => {
                                //         return numeral(value).format("0,0");
                                //     }
                                // },
                                barBorderColor: "#6E7ACA"
                            }
                        },

                    }, ]
                };

                myChart.setOption(option);
            }
            // // new ResizeSensor($(`#${task}`), function () {
            //     //     myChart.resize();
            //     // });

            await $(`#${task}`).removeClass('is-loading');

        }

        run('Day');

        $('#getDayReport a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var taskName = $(e.target).data('task'); // activated tab
            let ele = document.getElementById(`getDayReport--${taskName}`);
            echarts.dispose(ele);

            run(taskName);


        });

    }

    //api("getQueryReport");
    const getQueryReport = async (task, data) => {

        let QueryReport = data.data;
        let count = QueryReport.length;
        let page = Math.ceil(count / 10);
        let currentpage = 1;
        let content = "";
        QueryReport.forEach((el, index) => {
            if (index < 10)
                content += `<span data-html="true" title="<div class='d-flex flex-column px-2 py-2'><span class='text-left'>Số lần hiển thị ${el.Impressions}</span><span class='text-left'>Số lần nhấp ${el.Clicks}</span></div>" data-toggle="tooltip" data-placement="top" class="rounded-pill border border-info py-2 px-3 mb-2 mr-2">${el.name}
                        </span>`;
        });

        $("#QueryReportpage").text(`Trang 1/${page}`);

        $(`#${task}`).html(content);

        $(`#${task} span`).hover(function () {
            $(this).addClass("pointer")
            $(this).addClass("bg-primary-2");
            $('[data-toggle="tooltip"]').tooltip();
        })

        $(`#${task} span`).mouseout(function () {
            $(this).removeClass("bg-primary-2");
        })

        $(`#QueryReporttop`).hover(function () {
            $(this).addClass("pointer")
            $(this).addClass("bg-darken-5");
        })

        $(`#QueryReporttop`).mouseout(function () {
            $(this).removeClass("bg-darken-5");
        })

        $(`#QueryReportbottom`).hover(function () {
            $(this).addClass("pointer")
            $(this).addClass("bg-darken-5");
        })

        $(`#QueryReportbottom`).mouseout(function () {
            $(this).removeClass("bg-darken-5");
        })



        $("#QueryReportbottom").click(() => {
            if (currentpage == page) {
                $("#QueryReportbottom").addClass("disabled");
            } else {
                currentpage++;
                $("#QueryReportpage").text(`Trang ${currentpage}/${page}`);
                QueryReport = QueryReport.slice(10);
                content = "";
                QueryReport.forEach((el, index) => {
                    if (index < 10)
                        content += `<span data-html="true" title="<div class='d-flex flex-column px-2 py-2'><span class='text-left'>Số lần hiển thị ${el.Impressions}</span><span class='text-left'>Số lần nhấp ${el.Clicks}</span></div>" data-toggle="tooltip" data-placement="top" class="rounded-pill border border-info py-2 px-3 mb-2 mr-2">${el.name}
                        </span>`;
                });
                $(`#${task}`).html(content);

                $(`#${task} span`).hover(function () {
                    $(this).addClass("pointer")
                    $(this).addClass("bg-primary-2");
                    $('[data-toggle="tooltip"]').tooltip();
                })

                $(`#${task} span`).mouseout(function () {
                    $(this).removeClass("bg-primary-2");
                })
            }

        })


        $("#QueryReporttop").click(() => {
            if (currentpage != 1) {
                QueryReport = data.data;
                currentpage--;
                let slice = (currentpage - 1) * 10;
                $("#QueryReportpage").text(`Trang ${currentpage}/${page}`);
                QueryReport = QueryReport.slice(slice);
                content = "";
                QueryReport.forEach((el, index) => {
                    if (index < 10)
                        content += `<span data-html="true" title="<div class='d-flex flex-column px-2 py-2'><span class='text-left'>Số lần hiển thị ${el.Impressions}</span><span class='text-left'>Số lần nhấp ${el.Clicks}</span></div>" data-toggle="tooltip" data-placement="top" class="rounded-pill border border-info py-2 px-3 mb-2 mr-2">${el.name}
                        </span>`;
                });
                $(`#${task}`).html(content);

                $(`#${task} span`).hover(function () {
                    $(this).addClass("pointer")
                    $(this).addClass("bg-primary-2");
                    $('[data-toggle="tooltip"]').tooltip();
                })

                $(`#${task} span`).mouseout(function () {
                    $(this).removeClass("bg-primary-2");
                })

            } else {
                $("#QueryReporttop").addClass("disabled");
            }

        })


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
        $(table.table().header()).addClass('text-center');
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
    }

    initDatatable(
        'getCityClicksReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getCityClicksReport&from=${from}&to=${to}`,
                dataSrc: (json) => { 
                    let sum = 0;
                    json.data.forEach(ele => {
                        sum += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                    });

                    let newData = [];

                    json.data.forEach(ele => {
                        let percent = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sum;
                        let dataTemp = {
                            city: ele.city,
                            clicks: parseInt(ele.Clicks.replace(/[\.]/g, "")),
                            percent: percent
                        }
                        newData.push(dataTemp);
                    });

                    return newData;
                },
            },
            drawCallback: function (settings) {
                $('.getCityClicksReport-container').removeClass('is-loading').unblock();
                $('.getCityClicksReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Khu vực",
                    data: data => {
                        return `<span class="font-gg text-muted">${data.city}</span>`
                    }
                },
                {
                    title: "Số click chuột",
                    data: data => {
                        return `<span class="font-gg text-muted">${data.clicks}</span>`
                    }
                },
                {
                    title: "Tỷ lệ",
                    data: data => {
                        return `<div class="row align-items-center" style="width: 130px">
                        <div class="col-4 font-gg text-muted">
                          ${numeral(data.percent).format("0.00%")}
                        </div>
                        <div class="col-8">
                          <div class="progress border">
                            <div class="progress-bar bg-info" style="width: ${numeral(data.percent).format("0.00%")}; height:8px;" role="progressbar"></div>
                          </div>
                        </div>
                      </div>`;
                    },
                },
            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '250px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getCityClicksReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getCityClicksReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                    });
                $('.getCityClicksReport-container').removeClass('is-loading');
                $('#getCityClicksReport .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    initDatatable(
        'getKeywordReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getKeywordReport&from=${from}&to=${to}`,
                dataSrc: (json) => {
                    let sumClicks = 0;
                    let sumCostPerClick = 0;
                    let sumCost = 0;
                    let sumImpressions = 0;
                    let sumConversionsManyPerClick = 0;

                    json.data.forEach(ele => {
                        sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                        sumCostPerClick += parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, ""));
                        sumCost += parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));
                        sumImpressions += parseInt(ele.Impressions.replace(/[\.|\₫]/g, ""));
                        sumConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, ""));
                    });

                    let newData = [];

                    json.data.forEach(ele => {
                        let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                        let percentCostPerClick = parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, "")) / sumCostPerClick;
                        let percentCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, "")) / sumCost;
                        let percentImpressions = parseInt(ele.Impressions.replace(/[\.|\₫]/g, "")) / sumImpressions;
                        let percentConversionsManyPerClick = parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, "")) / sumConversionsManyPerClick;

                        let dataTemp = {
                            name: ele.name,
                            CostPerClick: ele.CostPerClick,
                            Cost: ele.Cost,
                            Impressions: ele.Impressions,
                            Clicks: ele.Clicks,
                            ConversionsManyPerClick: ele.ConversionsManyPerClick,
                            percentCostPerClick: percentCostPerClick,
                            percentCost: percentCost,
                            percentClicks: percentClicks,
                            percentImpressions: percentImpressions,
                            percentConversionsManyPerClick: percentConversionsManyPerClick
                        }
                        newData.push(dataTemp);
                    });

                    return newData;
                },
            },
            drawCallback: function (settings) {
                $('.getKeywordReport-container').removeClass('is-loading').unblock();
                $('.getKeywordReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Từ khóa tìm kiếm",
                    data: data => {
                        return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                    }
                },
                {
                    title: "CPC Tr.bình",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.CostPerClick}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-warning" style="width: ${numeral(data.percentCostPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Phí",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.Cost}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-danger" style="width: ${numeral(data.percentCost).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Số lượt hiển thị",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.Impressions}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-primary" style="width: ${numeral(data.percentImpressions).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Số lượt nhấp",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.Clicks}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-success" style="width: ${numeral(data.percentClicks).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Chuyển đổi",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.ConversionsManyPerClick}
                    </div> 
                    </div> `;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-info" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },


            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '230px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getKeywordReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getKeywordReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                    });
                $('.getKeywordReport-container').removeClass('is-loading');
                $('#getKeywordReport .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    initDatatable(
        'getQueryReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getQueryReport&from=${from}&to=${to}`,
                dataSrc: (json) => {
                    let sumClicks = 0;
                    let sumCostPerClick = 0;
                    let sumCost = 0;
                    let sumImpressions = 0;
                    let sumConversionsManyPerClick = 0;

                    json.data.forEach(ele => {
                        sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                        sumCostPerClick += parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, ""));
                        sumCost += parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));
                        sumImpressions += parseInt(ele.Impressions.replace(/[\.|\₫]/g, ""));
                        sumConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, ""));
                    });

                    let newData = [];

                    json.data.forEach(ele => {
                        let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                        let percentCostPerClick = parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, "")) / sumCostPerClick;
                        let percentCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, "")) / sumCost;
                        let percentImpressions = parseInt(ele.Impressions.replace(/[\.|\₫]/g, "")) / sumImpressions;
                        let percentConversionsManyPerClick = parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, "")) / sumConversionsManyPerClick;

                        let dataTemp = {
                            name: ele.name,
                            CostPerClick: ele.CostPerClick,
                            Cost: ele.Cost,
                            Impressions: ele.Impressions,
                            Clicks: ele.Clicks,
                            ConversionsManyPerClick: ele.ConversionsManyPerClick,
                            percentCostPerClick: percentCostPerClick,
                            percentCost: percentCost,
                            percentClicks: percentClicks,
                            percentImpressions: percentImpressions,
                            percentConversionsManyPerClick: percentConversionsManyPerClick
                        }
                        newData.push(dataTemp);
                    });

                    return newData;
                },
            },
            drawCallback: function (settings) {
                $('.getQueryReport-container').removeClass('is-loading').unblock();
                $('.getQueryReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Từ khóa tìm kiếm",
                    data: data => {
                        return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                    }
                },
                {
                    title: "CPC Tr.bình",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.CostPerClick}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-warning" style="width: ${numeral(data.percentCostPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Phí",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.Cost}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-danger" style="width: ${numeral(data.percentCost).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Số lượt hiển thị",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.Impressions}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-primary" style="width: ${numeral(data.percentImpressions).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Số lượt nhấp",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.Clicks}
                    </div> 
                    </div>`;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-success" style="width: ${numeral(data.percentClicks).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },
                {
                    title: "Chuyển đổi",
                    data: data => {
                        return `<div class="row" style="width: 80px">
                    <div class="col-12 font-gg text-muted">
                      ${data.ConversionsManyPerClick}
                    </div> 
                    </div> `;
                        //     <div class="col-12">
                        //       <div class="progress border">
                        //         <div class="progress-bar bg-info" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                        //       </div>
                        //     </div> 
                        //   </div>`;
                    }
                },


            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '230px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getQueryReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getQueryReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                    });
                $('.getQueryReport-container').removeClass('is-loading');
                $('#getQueryReport .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    initDatatable(
        'getAdGroupReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getAdGroupReport&from=${from}&to=${to}`,
                dataSrc: (json) => {
                    let sumClicks = 0;
                    let sumCostPerClick = 0;
                    let sumCost = 0;
                    let sumImpressions = 0;
                    let sumConversionsManyPerClick = 0;

                    json.data.forEach(ele => {
                        sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                        sumCostPerClick += parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, ""));
                        sumCost += parseInt(ele.Cost.replace(/[\.|\₫]/g, ""));
                        sumImpressions += parseInt(ele.Impressions.replace(/[\.|\₫]/g, ""));
                        sumConversionsManyPerClick += parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, ""));
                    });

                    let newData = [];

                    json.data.forEach(ele => {
                        let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                        let percentCostPerClick = parseInt(ele.CostPerClick.replace(/[\.|\₫]/g, "")) / sumCostPerClick;
                        let percentCost = parseInt(ele.Cost.replace(/[\.|\₫]/g, "")) / sumCost;
                        let percentImpressions = parseInt(ele.Impressions.replace(/[\.|\₫]/g, "")) / sumImpressions;
                        let percentConversionsManyPerClick = parseInt(ele.ConversionsManyPerClick.replace(/[\.|\,|\₫]/g, "")) / sumConversionsManyPerClick;

                        let dataTemp = {
                            name: ele.name,
                            CostPerClick: ele.CostPerClick,
                            Cost: ele.Cost,
                            Impressions: ele.Impressions,
                            Clicks: ele.Clicks,
                            ConversionsManyPerClick: ele.ConversionsManyPerClick,
                            percentCostPerClick: percentCostPerClick,
                            percentCost: percentCost,
                            percentClicks: percentClicks,
                            percentImpressions: percentImpressions,
                            percentConversionsManyPerClick: percentConversionsManyPerClick
                        }
                        newData.push(dataTemp);
                    });

                    return newData;
                },
            },
            drawCallback: function (settings) {
                $('.getAdGroupReport-container').removeClass('is-loading').unblock();
                $('.getAdGroupReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Nhóm quảng cáo",
                    data: data => {
                        return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                    }
                },
                {
                    title: "CPC Tr.bình",
                    data: data => {
                        return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentCostPerClick).format("0.00%")}</span>">
                        <div class="col-12 font-gg text-muted">
                          ${data.CostPerClick}
                        </div> 
                        <div class="col-12">
                          <div class="progress border">
                            <div class="progress-bar bg-warning" style="width: ${numeral(data.percentCostPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                          </div>
                        </div> 
                      </div>`;
                    }
                },
                {
                    title: "Phí",
                    data: data => {
                        return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentCost).format("0.00%")}</span>">
                        <div class="col-12 font-gg text-muted">
                          ${data.Cost}
                        </div> 
                        <div class="col-12">
                          <div class="progress border">
                            <div class="progress-bar bg-danger" style="width: ${numeral(data.percentCost).format("0.00%")}; height:4px;" role="progressbar"></div>
                          </div>
                        </div> 
                      </div>`;
                    }
                },
                {
                    title: "Số lượt hiển thị",
                    data: data => {
                        return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentImpressions).format("0.00%")}</span>">
                        <div class="col-12 font-gg text-muted">
                          ${data.Impressions}
                        </div> 
                        <div class="col-12">
                          <div class="progress border">
                            <div class="progress-bar bg-primary" style="width: ${numeral(data.percentImpressions).format("0.00%")}; height:4px;" role="progressbar"></div>
                          </div>
                        </div> 
                      </div>`;
                    }
                },
                {
                    title: "Số lượt nhấp",
                    data: data => {
                        return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentClicks).format("0.00%")}</span>">
                        <div class="col-12 font-gg text-muted">
                          ${data.Clicks}
                        </div> 
                        <div class="col-12">
                          <div class="progress border">
                            <div class="progress-bar bg-success" style="width: ${numeral(data.percentClicks).format("0.00%")}; height:4px;" role="progressbar"></div>
                          </div>
                        </div> 
                      </div>`;
                    }
                },
                {
                    title: "Chuyển đổi",
                    data: data => {
                        return `<div class="row m-auto" style="width: 80px" data-toggle="tooltip" data-html="true" title="<span class='font-gg'>${numeral(data.percentConversionsManyPerClick).format("0.00%")}</span>">
                        <div class="col-12 font-gg text-muted">
                          ${data.ConversionsManyPerClick}
                        </div> 
                        <div class="col-12">
                          <div class="progress border">
                            <div class="progress-bar bg-info" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.00%")}; height:4px;" role="progressbar"></div>
                          </div>
                        </div> 
                      </div>`;
                    }
                },


            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '250px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getAdGroupReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getAdGroupReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                    });
                $('.getAdGroupReport-container').removeClass('is-loading');
                $('#getAdGroupReport .dataTables_empty').text("").addClass('empty-state');
                $('[data-toggle="tooltip"]').tooltip();
            }
        }
    )

    initDatatable(
        'getAdGroupStatusReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getAdGroupStatusReport&from=${from}&to=${to}`,
                dataSrc: (json) => {
                    return json.data;
                },
            },
            drawCallback: function (settings) {
                $('.getAdGroupStatusReport-container').removeClass('is-loading').unblock();
                $('.getAdGroupStatusReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Nhóm quảng cáo",
                    data: data => {
                        return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                    }
                },
                {
                    title: "Lượt hiển thị", 
                    data: data => {
                        return `<span class="font-gg text-muted">${data.Impressions}</span>`
                    }
                },
                {
                    title: "Lượt tương tác", 
                    data: data => {
                        return `<span class="font-gg text-muted">${data.Interactions}</span>`
                    }
                },
                {
                    title: "Tỷ lệ tương tác",
                    data: data => {
                        return `<div class="row align-items-center" style="width: 150px">
                        <div class="col-4 font-gg text-muted">
                          ${data.InteractionRate.replace(",",".")}
                        </div>
                        <div class="col-8">
                          <div class="progress border">
                            <div class="progress-bar bg-primary" style="width: ${data.InteractionRate.replace(",",".")}; height:8px;" role="progressbar"></div>
                          </div>
                        </div>
                      </div>`;
                    },
                },

            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '250px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getAdGroupStatusReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getAdGroupStatusReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('font-gg text-muted font-10 border-top-0 border-bottom')
                    });
                $('.getAdGroupStatusReport-container').removeClass('is-loading');
                $('#getAdGroupStatusReport .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    initDatatable(
        'getKeywordOrganicQueriesReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getKeywordOrganicQueriesReport&from=${from}&to=${to}`,
                dataSrc: (json) => {
                    return json.data;
                },
            },
            drawCallback: function (settings) {
                $('.getKeywordOrganicQueriesReport-container').removeClass('is-loading').unblock();
                $('.getKeywordOrganicQueriesReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Từ khóa tìm kiếm", 
                    data: data => {
                        return `<a class="font-gg" target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                    }
                },
                {
                    title: "Truy vấn không phải trả tiền", 
                    data: data => {
                        return `<span class="font-gg text-muted">${data.OrganicQueries}</span>`
                    }
                },
                {
                    title: "Vị trí tr.bình", 
                    data: data => {
                        return `<span class="font-gg text-muted">${data.AveragePosition}</span>`
                    }
                },
                {
                    title: "Vị trí trung bình không phải trả tiền", 
                    data: data => {
                        return `<span class="font-gg text-muted">${data.OrganicAveragePosition}</span>`
                    }
                },

            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '220px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getKeywordOrganicQueriesReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getKeywordOrganicQueriesReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('font-10 border-top-0 border-bottom')
                    });
                $('.getKeywordOrganicQueriesReport-container').removeClass('is-loading');
                $('#getKeywordOrganicQueriesReport .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    initDatatable(
        'getQueryMatchTypeReport', {
            ajax: {
                url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getQueryMatchTypeReport&from=${from}&to=${to}`,
                dataSrc: (json) => {

                    let sumClicks = 0;
                    let sumImpressions = 0;
                    let sumConversionsManyPerClick = 0;

                    json.data.forEach(ele => {
                        sumClicks += parseInt(ele.Clicks.replace(/[\.]/g, ""));
                        sumImpressions += parseInt(ele.Impressions.replace(/[\.]/g, ""));
                        let index = ele.ConversionsManyPerClick.indexOf(",");
                        let ConversionsManyPerClick = ele.ConversionsManyPerClick.slice(0, index);
                        sumConversionsManyPerClick += parseInt(ConversionsManyPerClick.replace(/[\.]/g, ""));
                    });

                    let newData = [];

                    json.data.forEach(ele => {
                        let percentClicks = parseInt(ele.Clicks.replace(/[\.]/g, "")) / sumClicks;
                        let percentImpressions = parseInt(ele.Impressions.replace(/[\.]/g, "")) / sumImpressions;
                        let index = ele.ConversionsManyPerClick.indexOf(",");
                        let ConversionsManyPerClick = ele.ConversionsManyPerClick.slice(0, index);
                        let percentConversionsManyPerClick = parseInt(ConversionsManyPerClick.replace(/[\.]/g, "")) / sumConversionsManyPerClick;
                        let dataTemp = {
                            name: ele.name,
                            type: ele.type,
                            Clicks: ele.Clicks,
                            Impressions: ele.Impressions,
                            ConversionsManyPerClick: ele.ConversionsManyPerClick,
                            percentClicks: percentClicks,
                            percentImpressions: percentImpressions,
                            percentConversionsManyPerClick: percentConversionsManyPerClick
                        }
                        newData.push(dataTemp);
                    });
 
                    return newData;
                },
            },
            drawCallback: function (settings) {
                $('.getQueryMatchTypeReport-container').removeClass('is-loading').unblock();
                $('.getQueryMatchTypeReport-container').find('.fa-spin').removeClass('fa-spin');
            },
            "ordering": false,
            //   "paging": false, 
            columns: [{
                    title: "Cụm từ tìm kiếm",
                    data: data => {
                        return `<a target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}&language=vn">${data.name}</a>`
                    }
                },
                {
                    title: "Loại đối sánh cụm từ tìm kiếm",
                    data: data => {
                        return (data.type == "Chính xác") ? `<div class="" style="width: 100px"><span class="rounded bg-success-2 p-1 rounded text-success font-10 font-weight-bold">${data.type}</span></div>` :
                                (data.type == "Cụm từ") ? `<div class="" style="width: 100px"><span class="rounded bg-info-2 p-1 rounded text-info font-10 font-weight-bold">${data.type}</span></div>` :
                                `<div class="" style="width: 100px"><span class="rounded bg-danger-2 p-1 rounded text-danger font-10 font-weight-bold">${data.type}</span></div>`
                    },
                },
                {
                    title: "Số lượt nhấp",
                    data: data => {
                        return `<div class="row" style="width: 89px">
                        <div class="col-12 text-muted font-gg p-1">
                          ${data.Clicks}
                        </div>
                        </div>`;
                    //     <div class="col-12">
                    //       <div class="progress border">
                    //         <div class="progress-bar bg-info" style="width: ${numeral(data.percentClicks).format("0.0%")}; height:4px;" role="progressbar"></div>
                    //       </div>
                    //     </div>
                    //   </div>`;
                    }
                },
                {
                    title: "Số lượt hiển thị",
                    data: data => {
                        return `<div class="row" style="width: 89px">
                        <div class="col-12 text-muted font-gg p-1">
                          ${data.Impressions}
                        </div>
                        </div>`;
                    //     <div class="col-12">
                    //       <div class="progress border">
                    //         <div class="progress-bar bg-danger" style="width: ${numeral(data.percentImpressions).format("0.0%")}; height:4px;" role="progressbar"></div>
                    //       </div>
                    //     </div>
                    //   </div>`;
                    }
                },
                {
                    title: "Chuyển đổi",
                    data: data => {
                        return `<div class="row" style="width: 89px">
                        <div class="col-12 text-muted font-gg p-1">
                          ${data.ConversionsManyPerClick}
                        </div>
                        </div>`;
                    //     <div class="col-12">
                    //       <div class="progress border">
                    //         <div class="progress-bar bg-warning" style="width: ${numeral(data.percentConversionsManyPerClick).format("0.0%")}; height:4px;" role="progressbar"></div>
                    //       </div>
                    //     </div>
                    //   </div>`;
                    }
                },

            ],
            language,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '220px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function (settings, json) {
                $(`#getQueryMatchTypeReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
                $(`#getQueryMatchTypeReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    // .find('thead').addClass('bg-secondary')
                    .find('th').each(function (i) {
                        $(this).addClass('text-muted font-10 border-top-0 border-bottom')
                    });
                $('.getQueryMatchTypeReport-container').removeClass('is-loading');
                $('#getQueryMatchTypeReport .dataTables_empty').text("").addClass('empty-state');
            }
        }
    )

    $(".similarReloadTask").click(function () {
        if ($(this).find('i').hasClass('fa-spin')) {
            $(this).find('i').removeClass('fa-spin');
            return;
        }
        let task = $(this).data("task");
        $(this).find('i').addClass('fa-spin');
        api(task,from,to); 
    })

    // initDatatable(
    //     'getKeywordsSearchReport', {
    //         ajax: {
    //             url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getKeywordsSearchReport`,
    //             dataSrc: (json) => {
    //                 return json.data;
    //             },
    //         },
    //         drawCallback: function (settings) {
    //             $('.getKeywordsSearchReport-container').removeClass('is-loading').unblock();
    //             $('.getKeywordsSearchReport-container').find('.fa-spin').removeClass('fa-spin');
    //         },
    //         "ordering": false,
    //         //   "paging": false, 
    //         columns: [{
    //                 title: "",
    //                 data: data => {
    //                     return `<a target="_blank" href="keywords-tool.php?view=keywords-analysis&action=result&keyword=${data.name}"> ${data.name}</a>`
    //                 }
    //             },
    //             {
    //                 title: "Chi phí",
    //                 data: "Cost",
    //             },
    //             {
    //                 title: "Số lần nhấp",
    //                 data: "Clicks"
    //             },
    //             {
    //                 title: "CTR",
    //                 data: "ClickThroughRate"
    //             },
    //         ],
    //         language,
    //         info: false,
    //         autoWidth: false,
    //         searching: false,
    //         scrollY: '250px',
    //         scrollCollapse: true,
    //         paging: false,
    //         processing: true,
    //         initComplete: function (settings, json) {
    //             $(`#getKeywordsSearchReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
    //             $(`#getKeywordsSearchReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
    //                 // .find('thead').addClass('bg-secondary')
    //                 .find('th').each(function (i) {
    //                     $(this).addClass('font-10 border-top-0 border-bottom')
    //                 });
    //             $('.getKeywordsSearchReport-container').removeClass('is-loading');
    //             $('#getKeywordsSearchReport .dataTables_empty').text("").addClass('empty-state');
    //         }
    //     }
    // )

    // initDatatable(
    //     'getCampaignReport', {
    //         ajax: {
    //             url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getCampaignReport`,
    //             dataSrc: (json) => {
    //                 return json.data;
    //             },
    //         },
    //         drawCallback: function (settings) {
    //             $('.getCampaignReport-container').removeClass('is-loading').unblock();
    //             $('.getCampaignReport-container').find('.fa-spin').removeClass('fa-spin');
    //         },
    //         "ordering": false,
    //         //   "paging": false, 
    //         columns: [{
    //                 title: "",
    //                 data: "name",
    //                 width: "100px"
    //             },
    //             {
    //                 title: "Chi phí",
    //                 data: "Cost"
    //             },
    //             {
    //                 title: "Chuyển đổi",
    //                 data: "ConversionsManyPerClick"
    //             },
    //             {
    //                 title: "Chi phí / chuyển đổi",
    //                 data: "CostPerConversionManyPerClick"
    //             },
    //         ],
    //         language,
    //         info: false,
    //         autoWidth: false,
    //         searching: false,
    //         scrollY: '250px',
    //         scrollCollapse: true,
    //         paging: false,
    //         processing: true,
    //         initComplete: function (settings, json) {
    //             $(`#getCampaignReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
    //             $(`#getCampaignReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
    //                 // .find('thead').addClass('bg-secondary')
    //                 .find('th').each(function (i) {
    //                     $(this).addClass('font-10 border-top-0 border-bottom')
    //                 });
    //             $('.getCampaignReport-container').removeClass('is-loading');
    //             $('#getCampaignReport .dataTables_empty').text("").addClass('empty-state');
    //         }
    //     }
    // )

    // initDatatable(
    //     'getAdGroupReport', {
    //         ajax: {
    //             url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getAdGroupReport`,
    //             dataSrc: (json) => {
    //                 return json.data;
    //             },
    //         },
    //         drawCallback: function (settings) {
    //             $('.getAdGroupReport-container').removeClass('is-loading').unblock();
    //             $('.getAdGroupReport-container').find('.fa-spin').removeClass('fa-spin');
    //         },
    //         "ordering": false,
    //         //   "paging": false, 
    //         columns: [{
    //                 title: "",
    //                 data: "name",
    //             },
    //             {
    //                 title: "Số lần nhấp",
    //                 data: "Clicks"
    //             },
    //             {
    //                 title: "Số lần hiển thị",
    //                 data: "Impressionss"
    //             },
    //         ],
    //         language,
    //         info: false,
    //         autoWidth: false,
    //         searching: false,
    //         scrollY: '250px',
    //         scrollCollapse: true,
    //         paging: false,
    //         processing: true,
    //         initComplete: function (settings, json) {
    //             $(`#getAdGroupReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
    //             $(`#getAdGroupReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
    //                 // .find('thead').addClass('bg-secondary')
    //                 .find('th').each(function (i) {
    //                     $(this).addClass('font-10 border-top-0 border-bottom')
    //                 });
    //             $('.getAdGroupReport-container').removeClass('is-loading');
    //             $('#getAdGroupReport .dataTables_empty').text("").addClass('empty-state');
    //         }
    //     }
    // )

    // initDatatable(
    //     'getLandingPageReport', {
    //         ajax: {
    //             url: `//localapi.trazk.com/adwords-report/index.php?ocid=278177460&task=getLandingPageReport`,
    //             dataSrc: (json) => {
    //                 return json.data;
    //             },
    //         },
    //         drawCallback: function (settings) {
    //             $('.getLandingPageReport-container').removeClass('is-loading').unblock();
    //             $('.getLandingPageReport-container').find('.fa-spin').removeClass('fa-spin');
    //         },
    //         "ordering": false,
    //         columns: [{
    //                 title: "Website đích",
    //                 data: data => {
    //                     return `<div class="text-truncate" style="width: 200px;"><a target="_blank" href="${data.name}">${data.name}<a></div>`
    //                 }
    //             },
    //             {
    //                 title: "Số lần nhấp",
    //                 data: "Clicks"
    //             },
    //             {
    //                 title: "Chi phí",
    //                 data: "Cost"
    //             },
    //             {
    //                 title: "Tỷ lệ chuyển đổi",
    //                 data: "ConversionRateManyPerClick"
    //             },
    //             {
    //                 title: "CPC trung bình  ",
    //                 data: "CostPerClick"
    //             },

    //         ],
    //         language,
    //         info: false,
    //         autoWidth: false,
    //         searching: false,
    //         scrollY: '220px',
    //         scrollCollapse: true,
    //         paging: false,
    //         processing: true,
    //         initComplete: function (settings, json) {
    //             $(`#getLandingPageReport_wrapper .dataTables_scrollBody`).perfectScrollbar();
    //             $(`#getLandingPageReport_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
    //                 // .find('thead').addClass('bg-secondary')
    //                 .find('th').each(function (i) {
    //                     $(this).addClass('font-10 border-top-0 border-bottom')
    //                 });
    //             $('.getLandingPageReport-container').removeClass('is-loading');
    //             $('#getLandingPageReport .dataTables_empty').text("").addClass('empty-state');
    //         }
    //     }
    // )

    

   

});