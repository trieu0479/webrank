//input keywords: keyword1, keyword2
$(window).on('load', function () {
    $('.input_search').show()
})
$(document).ready(() => {
    let keywords = url.searchParams.get("keywords");
    let language = url.searchParams.get("language") ? url.searchParams.get("language") : "vn";
    let country = url.searchParams.get("country") ? url.searchParams.get("country") : "vn";
    let sortBy = url.searchParams.get("sortBy") ? url.searchParams.get("sortBy") : "resultDESC";
    const excelText = '<i class="fas fa-download"></i><span class="d-md-inline"> Tải file Excel</span>';

    if (keywords == "") {
        createError("emptyKeyword");
    } else {
        var arrKeywords = keywords.split(",").map(function (item) {
            return item.trim();
        });
        getBidForcast(arrKeywords);
        renderTableSuggesstion(arrKeywords);
        //renderTableSuggesstion_Main(arrKeywords);
        //renderTableSuggesstion_Related(arrKeywords)
        //renderTableSuggesstion_Widen(arrKeywords)
    }
    // -----------------------------------------------------------
    ////        function default
    // ----------------------------------------------------------------------------
    function initDatatable(select, tableOptions) {
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
    const renderSparkline = (task) => { //task ở đây là id cha
        $(`#${task} .sparkline`).each((index, item) => {
            $(item).sparkline($(item).data('sparkline'), {
                type: $(item).data('sparktype') || 'bar',
                width: '50px',
                height: '16px',
                spotColor: '',
                minSpotColor: '',
                maxSpotColor: '',
                highlightSpotColor: '',
                // tooltipFormatter: (sparkline, options, fields) =>
                //     `<span style="color: ${fields.color}">&#9679;</span> Tháng ${++fields.x}: ${numeral(fields.y).format(0,0)}`,
                barColor: '#74b9ff',
                sliceColors: ['#1abc9c', '#e74c3c'],
                fillColor: 'rgba(61, 133, 222, 0.3)',
            });
        });
    }

    const submitKeyword = () => {
        keywords = $('.iptKeyword').val();
        var lang = $('select.selectLanguage option:selected').val();
        var country = $('select.selectCountry option:selected').val();
        if (keywords == '') {
            Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
        } else {
            $.get("//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=" + userToken + "&toolName=keywords", function (data1) {
                var x = JSON.parse(data1)
                var newURL = "index.php?view=keyword-planner&action=result&keywords=" + keywords + "&language=" + language + '&country=' + country;
                $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`, function (res) {
                    console.log(res);

                })
                window.location.href = newURL;
            })
        }
    }

    $('.btnSubmitKeyword').click(() => submitKeyword());
    // $('#show-seo').click(() => {
    //     var newURL = "index.php?view=keywords&action=keywords-seo&keyword=" + keywords + "&language=" + lang + '&country=' + country;
    //     window.location.href = newURL
    // });


    $('.iptKeyword').keypress(event => (event.which == 13) ? submitKeyword() : null); //bắt event enter
    $('.iconBackBtn').click(function () {
        clickBackIcon();
    })

    function clickBackIcon() {
        var newURL = "";
        newURL = "index.php?view=keywords&action=index";
        window.location.href = newURL;
    }




    // --------------------------------------------------------------------------------------------- 
    //           viet cac function moi
    // ---------------------------------------------------------------------------------------------

    function addDownExcel() {
        $('#getKeywordsSuggestion_wrapper').append('<div class="ml-auto"><div class="d-flex no-block flex-row"><div class="btn btn-rounded btn-success-2 font-12 buttons-excel buttons-html5" tabindex="0" aria-controls="getKeywordsSuggestionV1"><i class="fas fa-download"></i><span class="d-md-inline"> Tải file Excel</span></div> </div></div>')
    }


    function createBidForcast(keywordinfused) {
        let {
            overview,
            device
        } = keywordinfused;

        if (overview && device) {
            let {
                avg_cpc,
                avg_position,
                click_through_rate,
                clicks,
                cost,
                impressions
            } = overview;


            const eleNumber = (value, format, postfix = '') => $(`<div class="display-6 font-gg counter ml-auto mt-2">${numeral(value).format(format)}${postfix}</div>`);
            if (cost == 0) $(".contentBidForecast").hide();
            let eleCPC = eleNumber(avg_cpc, '0,0', '<sup class="font-gg">đ</sup>');
            let elePosition = eleNumber(avg_position, '0.00');
            let eleCTR = eleNumber(click_through_rate, '0', '%');
            let eleClick = eleNumber(clicks, '0,0');
            let eleCost = eleNumber(cost, '0,0', '<sup class="font-gg">đ</sup>');
            let eleImpression = eleNumber(impressions, '0,0');

            $("#_count__number1").html(numeral(impressions).format('0,0'));
            $("h1#count_number_3").html(numeral(avg_cpc).format('0,0') + `<sup class="font-gg">đ</sup>`)

            $(`#getBidForecast--Position`)
                .append(elePosition)
                .parent().removeClass('is-loading')

            $(`#getBidForecast--CTR`)
                .append(eleCTR)
                .parent().removeClass('is-loading')

            $(`#getBidForecast--CPC`)
                .append(eleCPC)
                .after(`<div class="ml-auto" id="getBidForecast--chartCPC" style="width:50%;height:100%"></div>`)
                .parent().removeClass('is-loading')

            $(`#getBidForecast--Click`)
                .append(eleClick)
                .after(`<div class="ml-auto" id="getBidForecast--chartClick" style="width:50%;height:100%"></div>`)
                .parent().removeClass('is-loading')

            $(`#getBidForecast--Cost`)
                .append(eleCost)
                .after(`<div class="mx-auto" id="getBidForecast--chartCost" style="width:100%;height:100%"></div>`)
                .parent().removeClass('is-loading')

            $(`#getBidForecast--Impression`)
                .append(eleImpression)
                .after(`<div class="ml-auto" id="getBidForecast--chartImpression" style="width:50%;height:100%"></div>`)
                .parent().removeClass('is-loading')
            const initChart = (chartName, key) => {
                let data = [{
                        name: 'Điện thoại',
                        value: device[key].mobile,
                        itemStyle: {
                            color: '#eb4d4b'
                        }
                    },
                    {
                        name: 'Máy tính',
                        value: device[key].pc,
                        itemStyle: {
                            color: '#ff7979'
                        }
                    },
                    {
                        name: 'Máy tính bảng',
                        value: device[key].tablet,
                        itemStyle: {
                            color: '#fab1a0'
                        }
                    },
                ];

                let ele = document.getElementById(`getBidForecast--${chartName}`);

                let myChart = echarts.init(ele);

                let option = (key == 'cost') ? {
                    grid: {
                        top: 20,
                        bottom: 40,
                        // left: 0,
                        // right: 0
                    },
                    yAxis: {
                        type: 'value',
                        show: false
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#DDD'
                            }
                        },
                        axisLabel: {
                            color: '#FFF',
                            fontFamily: 'Google Sans',
                            fontSize: 12
                        }
                    },
                    series: {
                        type: 'bar',
                        data,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                fontFamily: 'Google Sans',
                                color: '#EAEAEA',
                                formatter: ({
                                    value
                                }) => `${numeral(value).format('0,0')} ${(key == 'cost') ? 'đ' : ''}`
                            }
                        }
                    }
                } : {
                    grid: {
                        top: 20,
                        bottom: 20,
                        left: 90,
                        right: 60
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Điện thoại', 'Máy tính', 'Máy tính bảng'],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#DDD'
                            }
                        },
                        axisLabel: {
                            color: '#6c757d',
                            fontFamily: 'Google Sans',
                            fontSize: 12
                        }
                    },
                    series: {
                        type: 'bar',
                        data,
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                fontFamily: 'Google Sans',
                                formatter: ({
                                    value
                                }) => `${numeral(value).format('0,0')} ${(key == 'cost_per_click') ? 'đ' : ''}`
                            }
                        }
                    }
                }
                myChart.setOption(option);

                new ResizeSensor(ele, function () {
                    myChart.resize();
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                });

                setTimeout(function () {
                    myChart.on('mouseover', function (params) {
                        if (params.name == data[0].name) {
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
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }, 1000);


            }
            Object.keys(device).forEach(key => {
                switch (key) {
                    case 'clicks':
                        initChart('chartClick', key);
                        break;
                    case 'cost':
                        initChart('chartCost', key);
                        break;
                    case 'cost_per_click':
                        initChart('chartCPC', key);
                        break;
                    case 'impressions':
                        initChart('chartImpression', key);
                        break;
                    default:
                        break;
                }
            })


        }



    }



    function getBidForcast(keywords) {
        var postData = {
            keywords
        };
        var url = `//localapi.trazk.com/keywords/v2.php?task=getBidForecast&lang=${language}&country=${country}&userToken=${userToken}&limit=1000`;
        $.post(url, postData, function (res) {
            // log(res);
            if (!res.data) {
                createError("emptyDataKeywordBidforcast");
            } else {
                $('#searchTerm').text(keywords);
                createBidForcast(res.data);

            }
        })
    }


    
    function showKeywordData(v){
        let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${v.keyword}" class="changeURL font-12" data-input="${v.keyword}" data-keyword="${v.keyword}"`;
        let isquestion = v.isQuestion;

        return `<div class="d-flex no-block flex-row">
                <a data-type="keyword" ${v.keyword == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
                    <i class="child-hover far fa-search mr-2"></i>
                    ${ v.keyword == '[Hidden]'
                    ? showLoginModal()
                    : v.keyword  }
                </a>   ${isquestion == 1 ? '<small class="text-info ml-1 font-13 text-center">?</small>' : ''}
                <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${v.trend}]"></div>
            </div> `;
    }
    function renderTableSuggesstion(keywords) {
        var postData = {
            keywords
        }
        initDatatable(
            'getKeywordsSuggestion', {
                ajax: {
                    url: `//localapi.trazk.com/keywords/v2.php?task=getKeywordsSuggestion&limit=5000&lang=${language}&country=${country}&userToken=${userToken}&sortBy=${sortBy}`,
                    type: "POST",
                    data: postData,
                    dataSrc: function (res) {
                        console.log(res.data);
                        let {
                            keywords: dsTuKhoa,
                            traffic
                        } = res.data;
                        if (traffic) {
                            renderMobilePCTraffic(traffic);
                        }
                        if (res.data.totalData <= 0) {
                            createError("emptyDataKeywordSuggesstion");
                        }
                        for (i in res.data.keywords){

                        }
                        $('#count__key_all').html(res.data.totalData)

                                            
                        var columns =[];
                        var keyworExact = 0;
                        var keyworPhrase = 0;
                        var keyworBroad = 0;
                        $.each(res.data.keywords,function (k,v){
                            var output = {};
                            output.keyword = showKeywordData(v);
                            //output.sparkline = v.sparkline;
                            output.results =  numeral(v.results).format('0,0');
                            output.difficulty = v.difficulty;
                            output.length = v.length;
                            output.competition_level = v.competition_level;
                            output.minCPC = v.minCPC;
                            output.maxCPC = v.maxCPC;
                            if (v.keywordType == "exact" ) keyworExact +=1;
                            else if (v.keywordType == "phrase" ) keyworPhrase +=1;
                            else if (v.keywordType == "broad" ) keyworBroad +=1;

                            columns.push(output);
                        })
                        log(keyworExact);
                        appendKeywordType(keyworExact,keyworPhrase,keyworBroad);
                        return columns;
                        
                        //return res.data.keywords;
                    },
                },

                drawCallback: function (settings) {},
                columns: [{
                        title: 'Từ khoá',
                        data: 'keyword',
                        className: 'parent-hover pr-0',
                        width: '30%',
                    },
                    {
                        title: 'KR (Tìm kiếm)',
                        data: 'results',
                        className: 'text-right'

                    },
                    {
                        title: 'KD (Độ khó)',
                        data: 'difficulty',
                        render: (data) => `<span style="width: 40px" id="score_difficulty" class=" ${data <= 70 ? data <= 30 ? 'badge badge-success' : 'badge badge-warning' : 'badge badge-danger'}">${data <= 70 ? data <= 30 ? 'Dễ' : 'TB' : 'Cao'}</span>`,
                        className: 'text-right'

                    },
                    {
                        title: 'KL (Độ dài)',
                        data: 'length',
                        className: 'text-right'

                    },
                    {
                        title: 'KC (Cạnh tranh)',
                        data: 'competition_level',
                        render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,

                    },
                    {
                        title: 'Min CPC (đ)',
                        data: (data) => numeral(data.minCPC).format('0,0'),
                        className: 'text-right',
                    },
                    {
                        title: 'Max CPC (đ)',
                        data: (data) => numeral(data.maxCPC).format('0,0'),
                        className: 'text-right'
                    }
                ],
                buttons: [{
                    extend: 'excel',
                    text: excelText,
                    filename: 'fff_com_vn_TatCaTuKhoa'
                }],
                dom: 'Bfrtip',
                paging: true,
                pageLength: 50,
                ordering: true,
                "order": [[ 1, 'asc' ]],
                info: true,
                searching: true,
                sorting: true,
                keywords,
                initComplete: function (settings, json) {
                    $("table.dataTable thead th").css("padding", "10px");
                    $("table.dataTable tbody tr td").css("padding", "15px 10px");
                    renderSparkline('getKeywordsSuggestion')
                },
                language: {
                    loadingRecords: '<div class="placeholder-loading" style="height:10px"></div>',
                    paginate: {
                        first: "Đầu",
                        last: "Cuối",
                        next: "Sau",
                        previous: "Trước"
                    },
                    search: 'Tìm kiếm <span class="ml-1"></span>:',
                    searchPlaceholder: 'Nhập từ khóa ...',
                    processing: 'Đang xử lý...',
                    loadingRecords: 'Đang tải...',
                    emptyTable: 'Không có dữ liệu hiển thị',
                    lengthMenu: '<div class="ml-4 font-gg"> Hiển thị <span class="ml-1">:</span>  <span class="ml-2" style="border:.5px solid #eee;padding: 4px 8px!important;">_MENU_</span> <span class="ml-1">kết quả </span></div>',
                    zeroRecords: 'Không tìm thấy dữ liệu',
                    info: '<div class="ml-4 font-gg mt-3">Hiển thị từ _START_ đến _END_ trong _TOTAL_ kết quả</div>',
                    infoEmpty: '',
                    infoFiltered: '(lọc từ tổng số _MAX_ dòng)',
                }
            }
        )


    }


    function appendKeywordType(keyworExact,keyworPhrase,keyworBroad){
        $(".count__key_main").html(keyworExact);
        $(".count_key_related").html(keyworPhrase);
        $(".count_key_widen").html(keyworBroad);
    }
    const renderMobilePCTraffic = (data) => {

        let wrapper = $('#getKeywordsSuggestion--eCharts_wrapper');
        let ele = document.getElementById('getKeywordsSuggestion--eCharts');

        wrapper.removeClass('is-loading')
            .append(`<div class="flex-center flex-grow-1 display-5 font-gg text-favorite counter"></div>`);

        let dataChart = {
            keys: [],
            values: {
                pc: [],
                mobile: []
            }
        };

        data.forEach(item => {
            dataChart.keys.push(item.time);
            dataChart.values.pc.push(item.pcImpression);
            dataChart.values.mobile.push(item.mobileImpression);
        })

        let option = {
            grid: {
                // bottom: 0,
                left: 80,
                right: 40,
            },
            legend: {
                itemWidth: 16,
                itemHeight: 10,
                itemGap: 16,
                right: 30,
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    // fontSize: 12,
                    fontFamily: 'Google Sans'
                },
                data: ['Máy tính', 'Điện thoại']
            },
            tooltip: {
                showContent: true,
                trigger: 'axis',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(93,120,255,1)',
                borderWidth: 1,
                extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                formatter: params => {

                    if (params.length > 0) {

                        let {
                            name
                        } = params[0];

                        name = moment(name).format('MMMM, YYYY');

                        let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

                        params.forEach(param => {

                            let {
                                marker,
                                color,
                                seriesName,
                                value
                            } = param;

                            value = numeral(value).format('0,0')

                            kq += `<div class="text-dark">${marker} ${seriesName} <span style="color:${color};font-weight:bold">${value}</span></div>`
                        })

                        return kq;
                    }
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            },
            xAxis: [{
                type: 'category',
                data: dataChart.keys,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: 12,
                    formatter: (data) => moment(data).format('TM, YYYY')
                    // margin: 20
                }
            }],
            yAxis: [{
                type: 'value',
                // show: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        // type: 'dashed'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: 12,
                    formatter: (data) => numeral(data).format('0a')
                }
            }, ],
            series: [{
                    name: 'Máy tính',
                    type: 'bar',
                    data: dataChart.values.pc,
                    itemStyle: {
                        color: '#1abc9c'
                    },
                },
                {
                    name: 'Điện thoại',
                    type: 'bar',
                    data: dataChart.values.mobile,
                    itemStyle: {
                        color: '#e74c3c'
                    },
                }
            ]
        };

        let myChart = echarts.init(ele);

        myChart.setOption(option);

        new ResizeSensor(ele, function () {
            myChart.resize();
        });
        setTimeout(function () {
            myChart.on('mouseover', function (params) {
                if (params.name == data[0].name) {
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
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        }, 1000);
    }


























    function createError(e) {
        switch (e) {
            case "emptyKeyword":
                Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
                break;
            case "emptyDataKeywordBidforcast":
                Swal.fire('ko co data truyen vao Bifrocast', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
                break;
            case "emptyDataKeywordSuggesstion":
                Swal.fire('ko co data truyen vao Suggesstion', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
                break;

        }

    }

    function log(e) {
        console.log(e);
    }




});