//input keywords: keyword1, keyword2

$(document).ready(() => {

    let keywords = url.searchParams.get("keywords");
    let language = url.searchParams.get("language") ? url.searchParams.get("language") : "vn";
    let country = url.searchParams.get("country") ? url.searchParams.get("country") : "vn";
    let sortBy = url.searchParams.get("sortBy") ? url.searchParams.get("sortBy") : "resultDESC";
    let network = url.searchParams.get("network") ? url.searchParams.get("network") : "yt";
    const excelText = '<i class="fas fa-download"></i><span class="d-md-inline"> Tải file Excel</span>';
    if (keywords == "") {
        createError("emptyKeyword");
    } else {
        var arrKeywords = keywords.split(",").map(function (item) {
            return item.trim();
        });
        getBidForcast(arrKeywords);
        getKeywordsSuggestion(arrKeywords);
        logUserSearch();
        //renderTableSuggesstion_Main(arrKeywords);
        //renderTableSuggesstion_Related(arrKeywords)
        //renderTableSuggesstion_Widen(arrKeywords)
    }
    $('[data-toggle="tooltip"]').tooltip();

    // -----------------------------------------------------------
    ////        function default
    // ----------------------------------------------------------------------------
    function logUserSearch(){
        var temp ={
            keywords:keywords,
            language:language,
            country:country,
            sortBy:sortBy,
            network:network,
        };     
    
        let post = {};
        post.logData = JSON.stringify(temp);
        $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`,post)  ;
    }
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
        $(".filterKWtype").on("click", function(a) {
            a.preventDefault();
            var kwtype = $(this).data("kwtype");
            if (kwtype != "all") table.column(10).search(kwtype).draw(); else table.column(10).search("").draw();
            
        })
        return table;
    }


    const submitKeyword = () => {
        keywords = $('.iptKeyword').val();
        var lang = $('select.selectLanguage option:selected').val();
        var country = $('select.selectCountry option:selected').val();
        var network = $('select.selectNetwork option:selected').val();
        if (keywords == '') {
            Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
        } else {
            $.get("//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=" + userToken + "&toolName=keywords", function (data1) {
                var x = JSON.parse(data1)
                var newURL = "index.php?view=keyword-planner&action=result&keywords=" + keywords + "&language=" + lang + '&country=' + country  + "&network=" +network;
                $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`, function (res) {

                })
                window.location.href = newURL;
            })
        }
    }

    $('.btnSubmitKeyword').click(() => submitKeyword());


    $('.iptKeyword').keypress(event => (event.which == 13) ? submitKeyword() : null); //bắt event enter



    // --------------------------------------------------------------------------------------------- 
    //           viet cac function moi
    // ---------------------------------------------------------------------------------------------

    function getKeywordsSuggestion(keywords){
        q = keywords[0];

        $.getJSON("https://suggestqueries.google.com/complete/search?callback=?",
            {
                "hl":"vi", 
                "ds":"", 
                "jsonp":"suggestCallBack", 
                "q":q, 
                "client":"youtube"
            }
        );
        suggestCallBack = function (data) {
            var suggestions = [];
            $.each(data[1], function(key, val) {
                keywords.push(val[0]);
            });
            renderTableSuggesstion(keywords);
        };
        
    }

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
            if (!res.data) {
                createError("emptyDataKeywordBidforcast");
            } else {
                $('#searchTerm').text(keywords);
                createBidForcast(res.data);

            }
        })
    }


    function renderSparkline(){ //task ở đây là id cha
        $(`.sparkline`).each((index, item) => {
            $(item).html('');
            $(item).sparkline($(item).data('value'), {
                type: 'bar',
                width: '50px',
                height: '16px',
                // tooltipFormatter: (sparkline, options, fields) =>
                //     `<span style="color: ${fields.color}">&#9679;</span> Tháng ${++fields.x}: ${numeral(fields.y).format(0,0)}`,
                barColor: '#3366cc',
            });
        });
    }

    function showRequestLoginOrUpdateVip(userData){
        if (userData.member == "demo") return "Đăng nhập để xem";
        else if (userData.member == "free") return "Nâng VIP để xem";
    }
    function showKeywordData(v,userData){
        let res = `href="index.php?view=keyword-planner&action=result&keyword=${v.keyword}" class="font-12"`;
        if (v.keyword == '[Hidden]'){
            if (userData.member == "demo"){
                $oo = `<span class='text-danger pointer' onclick="showLoginModal()"> Đăng nhập để xem data </span>`;
            }else if (userData.member == "free"){
                $oo = `<a href="https://admin.fff.com.vn/account/index.php?view=user&action=payment-table&userToken=${userToken}" class='text-warning'> Nâng VIP mở khóa data </a>`;
            }
        }else{
            $oo = `<a href="./?view=keyword-planner&action=result&keywords=${v.keyword}&lang=${language}&country=${country}&userToken=${userToken}&sortBy=${sortBy}" class="font-12">${v.keyword}</a>`;
        }
        return $oo;
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
                        

                                            
                        var columns =[];
                        var keyworExact = 0;
                        var keyworPhrase = 0;
                        var keyworBroad = 0;
                        var userData = res.data.userData;
                        $.each(res.data.keywords,function (k,v){
                            var output = {};
                            output.keyword = showKeywordData(v,userData);
                            output.domain = `<span class='keywordToDomain domain-${change_alias(v.keyword)}' data-alias='${change_alias(v.keyword)}'><i class="fas fa-spin fa-spinner"></i></span>`;
                            output.trends = `<span data-value="[${v.trend}]" class="sparkline">${v.trend}</span>`;
                            if (v.isQuestion == 1) output.question ='<span class="badge bg-success">YES</span>'; else output.question = '';
                            output.results =  numeral(v.results).format('0,0');
                            output.difficulty = v.difficulty;
                            output.length = v.length;
                            output.competition_level = v.competition_level;
                            output.minCPC = v.minCPC;
                            output.maxCPC = v.maxCPC;
                            if (v.keywordType == "exact" ) keyworExact +=1;
                            else if (v.keywordType == "phrase" ) keyworPhrase +=1;
                            else if (v.keywordType == "broad" ) keyworBroad +=1;
                            output.keywordType = v.keywordType;
                            columns.push(output);
                        })
                        appendKeywordType(keyworExact,keyworPhrase,keyworBroad);
                        return columns;
                        
                        //return res.data.keywords;
                    },
                },

                drawCallback: function (settings) {},
                columns: [{
                        title: '<strong>Từ khoá</strong>',
                        data: 'keyword',
                        className: 'parent-hover pr-0',
                       
                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Kiểm tra domain .com của từ khoá">Có Domain</strong>',
                        data: 'domain',
                        className: 'text-left',
                       
                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Keyword Result: Số lượng tìm kiếm">KR</strong>',
                        data: 'results',
                        className: 'text-center',
                        width: '70px',

                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Question: Từ khóa có phải là câu hỏi">Question</strong>',
                        data: 'question',
                        className: 'text-center',
                        width: '60px',

                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Keyword Lenght: Chiều dài từ khóa">KL</strong>',
                        data: 'length',
                        className: 'text-left',
                        width: '40px',

                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Trend: Xu hướng tìm kiếm 12 tháng qua">Trend</strong>',
                        data: 'trends',
                        width: '80px',
                        className: 'text-left',
                    },
                   
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Keyword Difficulty: Độ khó từ khóa dành cho SEOer">KD</strong>',
                        data: 'difficulty',
                        render: (data) =>  `<span class="badge  ${data <= 70 ? data <= 30 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${data ? data : 0}</span>`,
                        className: 'text-center',
                        width: '50px',

                    },
                  
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Keyword Competitor: Cạnh tranh quảng cáo AdWords">KC</strong>',
                        data: 'competition_level',
                        render: (data) => `<span class="round round-sm ${data <= 70 ? data <= 30 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${data ? data : 0}</span>`,
                        width: '50',
                        className: 'text-center',
                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Min CPC: đấu giá AdWords thấp nhất 30 ngày qua">Min CPC (đ)</strong>',
                        data: (data) => numeral(data.minCPC).format('0,0'),
                        className: 'text-center',
                        width: '80px',
                    },
                    {
                        title: '<strong data-toggle="tooltip" data-placement="top" title="Min CPC: đấu giá AdWords cao nhất 30 ngày qua">Max CPC (đ)</strong>',
                        data: (data) => numeral(data.maxCPC).format('0,0'),
                        className: 'text-center',
                        width: '80px',
                    },
                    {
                        title: 'KW Type',
                        data: 'keywordType',
                        visible: false,
                    }
                ],
                buttons: [{
                    extend: 'excelHtml5',
                    text: '<i class="fad fa-arrow-down mr-1"></i> Download',
                    filename: 'fff_com_vn_TatCaTuKhoa'
                }],
                
                dom: 'Bfrtip',
                paging: true,
                autoWidth: false,
                pageLength: 50,
                ordering: true,
                "order": [[ 1, 'DESC' ]],
                info: true,
                responsive: true,
                searching: true,
                sorting: true,
                responsive: true,
                
                initComplete: function (settings, json) {
                    $("table.dataTable thead th").css("padding", "10px");
                    $("table.dataTable tbody tr td").css("padding", "15px 10px");
                    $('.sparkline').show();
                    //socketCheckDomain();
                },
                drawCallback: function (row,data) {
                    renderSparkline();
                    socketCheckDomain();
                },
                language: {
                    loadingRecords: '<div class="placeholder-loading" style="height:10px">Đang tải</div>',
                    paginate: {
                        first: "Đầu",
                        last: "Cuối",
                        next: '<i class="fas fa-angle-right"></i>',
                        previous: '<i class="fas fa-angle-left"></i>'
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
    var socketDomain = io('https://www.namemesh.com:2083');
    socketDomain.on('checkres', function(d, ctx) {
        var kq = JSON.parse(d);
        var domainName = `<a class="resultDomain" target='blank' href='https://www.namesilo.com/domain_results.php?rid=e6c7362en&domain_search=${ctx}.com'><i class="fal fa-external-link-square-alt mr-1"></i> ${ctx}.com </a>`
        if (kq.available == 1) $(".domain-" + ctx).html(domainName); else $(".domain-" + ctx).html("");
        
     });
    function socketCheckDomain(){
        $(".keywordToDomain").each(function(k,v){
            var alias = $(this).data("alias");
            socketDomain.emit('checkreq',alias,'com',alias)
        })
        
        
    }
    function change_alias(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.replace(/ + /g," ");
        str = str.replace(/\s/g,"");  
        str = str.trim(); 
        
        return str;
    }



    function appendKeywordType(keyworExact,keyworPhrase,keyworBroad){
        $(".count__key_main").html($.number(keyworExact));
        $(".count_key_related").html($.number(keyworPhrase));
        $(".count_key_widen").html($.number(keyworBroad));
        $('#count__key_all').html($.number(keyworExact+keyworPhrase+keyworBroad));
        
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
                mobile: [],
                total: []
            }
        };

        data.forEach(item => {
            dataChart.keys.push(item.time);
            dataChart.values.pc.push(item.pcImpression);
            dataChart.values.mobile.push(item.mobileImpression);
            dataChart.values.total.push(parseInt(item.mobileImpression) + parseInt(item.pcImpression));
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
                data: ['Máy tính', 'Điện thoại', 'Tổng']
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
                },
                {
                    name: 'Tổng',
                    type: 'line',
                    data: dataChart.values.total,
                    smooth: true,
                    symbolSize: 15,
                    itemStyle: {
                        color: '#667388'
                    },
                }
            ]
        };
        $(".historyByMonthKeywords").removeClass("d-none");
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