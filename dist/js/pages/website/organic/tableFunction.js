$(document).ready(() => {
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
    // reloadTable
    $('body').on('click', '.similarReloadTasktable', function() {
            $(this).find('i').addClass('fa-spin')
            $('.organicPositions').DataTable().ajax.url(`//localapi.trazk.com/webdata/v3.php?task=getDomainOrganicDetail&domain=${localDomain}&page=1&reload=1&method[organicPositions]=true&userToken=${userToken}`).load();
        })
        // check vip-free-demo user
    function locked(id, data) {
        $(".parent-" + id).addClass("locked");
        if (data == 'demo') {
            $(".parent-" + id).parent().prepend('<div class="center"><a class="btn btn-info shadow btn-showLoginModal" href="#" ><i class="fas fa-unlock"></i> Đăng nhập để xem data</a></div>');
        } else if (data == 'free') {
            $(".parent-" + id).parent().prepend('<div class="center"><a class="btn btn-success shadow" href="//admin.fff.com.vn/account/?view=user&action=payment-table" > <i class="fas fa-gem"></i> Đăng ký để xem data</a></div>');
        }
    }
    //init datatable
    const initDatatable = function(select, tableOptions) {
        const table = $(`.${select}`).DataTable(tableOptions);
        $(table.table().header()).addClass('text-center');
        //reload click handle
        $(`.${select}`).click(function(event) {
            // $(event.target).addClass('fa-spin');
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
            //     $(`.${select}`).removeClass("is-loading");
            //     $(`.${select} .dataTables_empty`).text("").addClass("empty-state");
            // });
        })
        return table;
    }
    initDatatable(
            'getOrganicKeywordsBrandedTable', {
                ajax: {
                    url: `//localapi.trazk.com/webdata/v3.1.php?task=getOrganicKeywordsBrandedTable&domain=${localDomain}&userToken=${userToken}`,
                    dataSrc: (json) => {
                        lockedModule('getOrganicKeywordsBrandedTable', json.userData.member)
                        if (!json.data || !json.data.data) {
                            $('.parent-getOrganicKeywordsBrandedTable').html('').addClass('empty-state').attr('style', 'height: 300px;')
                            return [];
                        } else {
                            let website = json.data.website;
                            let Data = json.data.data.Data;
                            let newData = [];
                            if (Data) {
                                if (Data[`${website}`]) {
                                    newData = Data[`${website}`].Data;
                                } else {
                                    newData = Data
                                }
                            }
                            if (newData.length == undefined)
                                newData = [];

                            return newData.filter(item => item.SearchTerm !== 'grid.upgrade')
                        }

                    },
                },
                columns: [{
                        title: 'Từ khoá',
                        data: data => {
                            const keyWork = data.SearchTerm.length > 15 ? data.SearchTerm.substring(0, 15) : data.SearchTerm;
                            return `<div style="width:100px;word-wrap: break-word;"><a href="?view=keyword-planner&action=result&keywords=${keyWork}&language=vn&country=vn"  data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${keyWork}</a></div>`
                        }
                    },
                    {
                        title: 'Tỉ lệ truy cập',
                        data: data => {
                            // `<div>${numeral(data.TotalShare).format('0.00%')}</div>` },
                            return `<div class="">
            <div class="number-precent ">${numeral(data.TotalShare).format('0.00%')}</div>
            <div class="progress rounded-0 progress-custom w-80 my-auto">
            <div class="progress-bar color-prog" role="progressbar" style="width: ${numeral(data.TotalShare).format('0.00%')}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>`
                        }
                    },
                    { title: 'CPC', data: data => `$${data.CPC}` },
                    { title: 'Vị trí', data: data => (data.PositionPaid[0].Value == -1) ? '1' : data.PositionPaid[0].Value },
                    { title: 'Lượt tìm kiếm', data: data => $.number(data.KwVolume) }
                ],
                "order": [
                    [4, 'desc']
                ],
                language,
                "ordering": false,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '250px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                initComplete: function(settings, json) {
                    $(`.dataTables_scrollBody`).perfectScrollbar();
                    $(`table.getOrganicKeywordsBrandedTable  tbody`).addClass('text-left')
                    $(`table.getOrganicKeywordsBrandedTable`).attr('style', 'width:100% !important')
                    $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd')
                        // $(`.parent-getOrganicKeywordsBrandedTable .dataTables_scrollBody `).attr('style', 'height: 257px !important')
                }
            }
        )
        //getOrganicKeywordsTable
    initDatatable(
        'getOrganicKeywordsNonBrandedTable', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.1.php?task=getOrganicKeywordsNonBrandedTable&domain=${localDomain}&userToken=${userToken}`,
                dataSrc: (json) => {
                    lockedModule('getOrganicKeywordsNonBrandedTable', json.userData.member)
                    if (!json.data || !json.data.data) {
                        $('.parent-getOrganicKeywordsNonBrandedTable').html('').addClass('empty-state').attr('style', 'height: 292px;')
                        return [];
                    } else {
                        let website = json.data.website;
                        let Data = json.data.data.Data;
                        let newData = [];
                        if (Data) {
                            if (Data[`${website}`]) {
                                newData = Data[`${website}`].Data;
                            } else {
                                newData = Data
                            }
                        }
                        if (newData.length == undefined)
                            newData = [];
                        return newData.filter(item => item.SearchTerm !== 'grid.upgrade')
                    }
                },
            },
            columns: [{
                    title: 'Từ khoá',
                    data: data => {
                        const keyWork = data.SearchTerm.length > 15 ? data.SearchTerm.substring(0, 15) : data.SearchTerm;
                        return `<div style="width:100px;word-wrap: break-word;"><a href="?view=keyword-planner&action=result&keywords=${keyWork}&language=vn&country=vn"  data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${keyWork}</a></div>`
                    }
                },
                {
                    title: 'Tỉ lệ truy cập',
                    data: data => {
                        return `<div class="">
            <div class="number-precent ">${numeral(data.TotalShare).format('0.00%')}</div>
            <div class="progress rounded-0 progress-custom w-80 my-auto">
            <div class="progress-bar color-prog" role="progressbar" style="width: ${numeral(data.TotalShare).format('0.00%')}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>`
                    }
                },
                { title: 'CPC', data: data => `$${data.CPC}` },
                { title: 'Vị trí', data: data => (data.PositionPaid[0].Value == -1) ? '1' : data.PositionPaid[0].Value },
                { title: 'Lượt tìm kiếm', data: data => $.number(data.KwVolume) }

            ],
            "order": [
                [4, 'desc']
            ],
            language,
            "ordering": false,

            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '250px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function(settings, json) {
                $(`.dataTables_scrollBody`).perfectScrollbar();
                $('.getOrganicKeywordsNonBrandedTable tbody').addClass('text-left');
            }
        }
    )
    $.getJSON(`//localapi.trazk.com/webdata/v3.php?task=getDomainOrganicDetail&domain=${localDomain}&method[organicSubdomains]=true&userToken=${userToken}`, function(res) {
        if (res.data.organicSubdomains) {
            res.data.organicSubdomains.forEach((v, k) => {
                let number_tracffic = numeral(v.traffic).format('0.0a')
                let traffic_percent = v.trafficPercent.toFixed(1)
                $('.swiper-wrapper').append(`
                    <div class="swiper-slide">
                        <div class="text-left py-3 pl-5">
                            <div class="wap-subdomain text-right"><span class="title-sundomain ${(k % 2 == 0) ? 'color-old' : 'color-even'}  rounded-left">${v.subdomain}</span></div>
                            <div class="traffic-wapper">
                                <h6 class="title-traffic m-0">Tracffic</h6>
                                <div class="number-traffic">${number_tracffic}</div>
                            </div>
                            <div class="wapper-progress d-flex ">
                                <div class="traffic-per mr-2">TRAFFIC PERCENT</div>
                                <div class="progress rounded-0 progress-custom w-50 my-auto">
                                    <div class="progress-bar color-prog" role="progressbar" style="width: ${traffic_percent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="number-precent ml-2">${traffic_percent}%</div>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 480px
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 2,
                },
                // when window width is >= 640px
                960: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                }
            }
        });
    })
    initDatatable(
        'organicCompetitors', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getDomainOrganicDetail&domain=${localDomain}&method[organicCompetitors]=true&userToken=${userToken}`,
                dataSrc: function(res) {
                    lockedModule('organicCompetitors', res.userData.member)
                    if (res.data.organicCompetitors && res.data.organicCompetitors != '') {
                        let columns = [];
                        $.each(res.data.organicCompetitors, function(k, v) {
                                let output = {
                                    commonKeywords: v.commonKeywords,
                                    competitionLvl: v.competitionLvl,
                                    domain: v.domain,
                                    organicKeywords: v.organicKeywords
                                };
                                columns.push(output)
                            })
                            // console.log(columns);
                        return columns;
                    } else {
                        $('.parent-organicCompetitors').html('').addClass('empty-state').attr('style', 'height: 292px;')
                        return [];
                    }
                },
            },
            columns: [{
                    title: 'Website',
                    "data": data => `<a  href="?view=keyword-planner&action=result&keywords=${data.domain}&language=vn&country=vn">${data.domain}</a>`
                },
                {
                    title: 'Từ khóa phổ biến',
                    "data": data => `<span class="badge  ${data.commonKeywords <= 5000 ? data.commonKeywords <= 3000 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${$.number(data.commonKeywords)}</span>`
                },
                {
                    title: 'Từ khóa SE',
                    "data": data => `<span class="badge  ${data.organicKeywords <= 5000 ? data.organicKeywords <= 3000 ? 'bg-success' : 'bg-warning' : 'bg-danger'}">${$.number(data.organicKeywords)}</span>`
                },
                {
                    title: 'Cạnh tranh',
                    "data": data => `
                    <div class="wapper-progress d-flex ">
                        <div class="progress rounded progress-custom w-70 my-auto">
                            <div class="progress-bar text-info" role="progressbar" style="width: ${(data.competitionLvl * 100).toFixed(1)}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="number-precent ml-2">${(data.competitionLvl * 100).toFixed(1)}%</div>
                    </div>
                    `
                },
            ],

            language,
            "ordering": false,
            info: false,
            autoWidth: false,
            searching: false,
            scrollY: '250px',
            scrollCollapse: true,
            paging: false,
            processing: true,
            initComplete: function(settings, json) {
                $(`.dataTables_scrollBody`).perfectScrollbar();
                $('.organicCompetitors tbody').addClass('text-left');
            }
        }
    )
    const renderSparkline = (task) => {
        $(`.organicPositions .sparkline`).each((index, item) => {
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
                barColor: '#5d78ff',
                sliceColors: ['#1abc9c', '#e74c3c'],
                fillColor: 'rgba(61, 133, 222, 0.3)',
            });
        });
    }

    initDatatable(
        'organicPositions', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getDomainOrganicDetail&domain=${localDomain}&page=1&method[organicPositions]=true&userToken=${userToken}`,
                dataSrc: function(res) {
                    lockedModule('organicPositions', res.userData.member)
                    if (res.data.organicPositions && res.data.organicPositions != '') {
                        let columns = [];
                        var stt = 1;
                        $.each(res.data.organicPositions, function(k, v) {
                            let output = {
                                keyword: v.phrase,
                                pos: v.position,
                                pos_previou: v.previousPosition,
                                diff: v.positionDifference,
                                traffic: v.trafficPercent,
                                volume: v.volume,
                                dokho: v.keywordDifficulty,
                                url: v.url,
                                upd: v.crawledTime,
                                trends: v.trends,
                                stt: k + 1
                            };
                            columns.push(output)
                        })
                        return columns;
                    } else {
                        $('.parent-organicPositions').html('').addClass('empty-state')
                        return [];
                    }
                },
            },
            drawCallback: function(settings) {
                $('[data-toggle="tooltip"]').tooltip();

            },
            columns: [{
                    title: "Stt",
                    "data": "stt"
                },
                {
                    title: "KeyWord",
                    "data": data => `<div><a href="">${data.keyword}</a></div>`
                },
                {
                    title: "Pos.",
                    "data": data => `<div><span class="text-black-50">${data.pos}</span> <i class="far fa-arrow-right font-10 text-black-50 mx-1"></i> <span>${data.pos_previou}</span></div>`
                },
                {
                    title: "Diff",
                    "data": "diff"
                },
                {
                    title: "Traffic",
                    "data": "traffic"
                },
                {
                    title: "Volume",
                    "data": data => `${numeral(data.volume).format('0,0')}`
                },
                {
                    title: "Cạnh tranh",
                    "data": data => {
                        return `<div class="bg-ctranh align-self-center ${data.dokho <= 70 ? data.dokho <= 30 ? 'bg-success' : 'bg-danger' : 'bg-warning'}">${data.dokho ? data.dokho : 0}</a>`
                    }
                },
                {
                    title: "Trend",
                    "data": data => {
                        return `<div class="lichsuHienThi d-none d-md-flex sparkline ml-auto" data-sparkline="[${data.trends}]"></div>`
                    },
                    width: '70px'
                },
                {
                    title: "URL",
                    "data": data => `<div class="limit-dot"><i class="far fa-lock text-muted"></i> <a data-toggle="tooltip" title="${data.url}" data-original-title="${data.url}" href="">${data.url}</a></div>`
                },
                {
                    title: "Update",
                    "data": data => `${moment(data.upd * 1000).format("MMM DD")}`
                },
            ],
            language,
            "ordering": false,
            rowId: 'trId',
            language,
            info: false,
            autoWidth: false,
            searching: false,
            // scrollX: true,
            scrollCollapse: true,
            paging: true,
            processing: false,
            pageLength: 15,
            drawCallback: function() {
                renderSparkline("organicPositions");
            },
            initComplete: function(settings, json) {
                $("table.dataTable thead th").css("padding", "10px");
                // $(".parent-organicPositions table.dataTable tbody tr td").css("padding", "15px 10px");
                $(`#table-manager-cidads_wrapper`).css("overflow", "auto")
                $(`.organicPositions`).css("text-align", "left")
                renderSparkline("organicPositions");
                $('.parent-organicPositions .dataTables_wrapper').css({
                    "overflow": "auto",
                    "white-space": "nowrap"
                })
                $('.widget-organicPositions .widgetHeader').append(`<div class="ml-auto d-flex no-block align-items-center pr-3">
                    <span class="similarReloadTasktable" data-task="organicPositions"><i class="fal fa-sync"></i></span>
                </div>`)
                $('.similarReloadTasktable').find('i').removeClass('fa-spin')
            }
        }
    )
})