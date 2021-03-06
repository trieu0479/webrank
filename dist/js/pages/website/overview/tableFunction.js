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
    // check vip-free-vip user
    //init datatable
    let reloaddata = 0;
    const initDatatable = function(select, tableOptions) {
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
        //getWebsiteGeography
    var arrNameContry = [];
    $.get(`//localapi.trazk.com/webdata/v3.php?task=countryIsoName&userToken=${userToken}`, function(res) {
        arrNameContry = res.data
    })
    initDatatable(
            'getWebsiteGeography-table', {
                ajax: {
                    url: `//localapi.trazk.com/webdata/v3.php?task=getTrafficOverview&domain=${localDomain}&page=1&method[all]=true&userToken=${userToken}`,
                    dataSrc: json => {
                        lockedModule('getWebsiteGeography', json.userData.member)
                        let contry = []
                        let columns = []
                        $.each(arrNameContry, (index, item) => {
                                let nameCountry = {
                                    ele: index.toLowerCase(),
                                    name: item
                                }
                                contry.push(nameCountry)
                            })
                            // console.log(contry);
                        $.each(json.data.trafficByGeo, (i, v) => {
                            $.each(contry, (k, val) => {
                                if (v.country == val.ele) {
                                    let obj = {
                                        id: val.ele,
                                        name: val.name,
                                        traffic: numeral(v.traffic_value).format('0.0a'),
                                        value: numeral(v.traffic * 100).format('0.00')
                                    }
                                    columns.push(obj)
                                }
                            })
                        })
                        return columns;
                    }
                },
                drawCallback: function(settings) {
                    $('.getWebsiteGeography-container').removeClass('is-loading').unblock();
                    $('.getWebsiteGeography-container').find('.fa-spin').removeClass('fa-spin');

                },
                columns: [{
                        title: 'Quốc gia',
                        data: data => {
                            return `<div  class="d-flex align-items-baseline">
                    <span class="flag flag-${data.id} mr-2"></span>
                    <span>${data.name}</span>
                </div>`
                        }
                    },
                    {
                        title: 'Tỉ lệ',
                        data: data => {
                            return `<div class=""><span class="text-muted mr-1">${data.value}%</span></div>`;
                        }
                    }
                ],
                "order": [
                    [1, 'desc']
                ],
                "ordering": false,
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '300px',
                scrollCollapse: true,
                paging: false,
                initComplete: function(settings, json) {
                    $(`.getWebsiteGeography_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`.getWebsiteGeography_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-bottom:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function(i) { $(this).addClass('border-top-0 border-bottom') });
                    $('.getWebsiteGeography-container').removeClass('is-loading');
                    $('.getWebsiteGeography .dataTables_empty').text('').addClass('empty-state');
                    $('.dataTables_scrollHeadInner thead').removeClass('text-center');
                    $('.getWebsiteGeography_wrapper .dataTables_scrollHeadInner').removeClass('text-center');
                    $('.dataTables_scrollHead').addClass('border-bottom');
                    // $(".similarReloadTaskaaaaa").click(function() {
                    //     table.ajax.url('simple3.php').load();
                    // })
                }
            }
        )
        //getTrendingKeywordsTable
    const renderSparkline = (task) => {
        $(`.getKeywords .sparkline`).each((index, item) => {
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
            'getKeywords', {
                ajax: {
                    url: `//localapi.trazk.com/keywords/v2.php?task=getKeywordsFromDomain&limit=&domain=${localDomain}&userToken=${userToken}`,
                    dataSrc: (json) => {
                        lockedModule('getKeywords', json.data.userData.member)
                        if (json.data.keywords == null) {
                            $('.parent-getKeywords').html('').addClass('empty-state')
                            return []
                        } else {
                            let columns = [];
                            var stt = 1;
                            $.each(json.data.keywords, function(k, v) {
                                if (v.maxCPC) var maxCPC = v.maxCPC;
                                else var maxCPC = v.minCPC * 1.5;
                                let output = {
                                    stt: stt++,
                                    keyword: v.keyword,
                                    length: v.length,
                                    trungbinhtimkiem: v.results,
                                    trend: v.trend,
                                    dokho: v.competition_level,
                                    giathapnhat: v.minCPC,
                                    gicaonhat: maxCPC,
                                }
                                columns.push(output)
                            })
                            return columns;
                        }
                    },
                },
                drawCallback: function(settings) {
                    // $('.getTrendingKeywordsTable-container').removeClass('is-loading').unblock();
                    // $('.getTrendingKeywordsTable-container').find('.fa-spin').removeClass('fa-spin');
                },
                columns: [{
                        title: 'STT',
                        data: data => data.stt,
                        width: '20px',
                    },
                    {
                        title: 'Từ khoá',
                        data: data => `
                <div class="text-left flex-row" style="width: 200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
              <a class="font-12 ml-2" href="./index.php?view=keyword-planner&action=result&keywords=${data.keyword}&language=vn&country=vn&network=web"  data-type="keyword" class="changeURL" data-input="${data.keyword}">${data.keyword}</a>
              </div>`,
                        // width: '180px'
                    },
                    {
                        title: 'Trend',
                        data: data => `<div class="lichsuHienThi d-none d-md-flex sparkline ml-auto" data-sparkline="[${data.trend}]"></div>`,
                        width: '100px',
                    },
                    {
                        title: 'Chiều dài',
                        data: "length",
                        width: '100px'
                    },
                    {
                        title: 'Độ khó',
                        data: 'dokho',
                        render: (data) =>
                            `<div class="round round-sm align-self-center ${data <= 70 ? data <= 30 ? 'bg-success' : 'bg-danger' : 'bg-warning'}">${data ? data : 0}</a>`,
                        width: '100px'
                    },
                    {
                        title: 'Trung bình tìm kiếm',
                        data: (data) => numeral(data.trungbinhtimkiem).format('0,0'),
                        width: '100px'
                    },
                    {
                        title: 'Giá thấp nhất',
                        data: (data) => numeral(data.giathapnhat).format('0,0') + 'đ',
                        width: '100px'
                    },
                    {
                        title: 'Giá cao nhất',
                        data: "giathaudautrangcaonhat",
                        data: (data) => numeral(data.gicaonhat).format('0,0') + 'đ',
                        width: '100px'
                    },
                ],
                "order": [
                    [3, 'desc']
                ],
                columnDefs: [{
                    targets: [3, 4, 5],
                    className: 'text-center',
                    // render: $.fn.dataTable.render.number(',', '.', 0, '')
                }, {
                    targets: 2,
                    className: 'text-center'
                }, {
                    targets: 1,
                    className: 'text-left'
                }],
                "ordering": false,
                language,
                info: false,
                autoWidth: false,
                searching: false,
                scrollY: '350px',
                scrollCollapse: true,
                paging: false,
                processing: true,
                drawCallback: function() {
                    renderSparkline("getKeywords");
                },
                initComplete: function(settings, json) {
                    $(`.parent-getKeywords .dataTables_scrollBody`).perfectScrollbar();
                    $(`.getKeywords_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                        // .find('thead').addClass('bg-secondary')
                        .find('th').each(function(i) { $(this).addClass('border-top-0 border-bottom') });
                    $(`.getKeywords-container`).removeClass('is-loading');
                    $(`.getKeywords .dataTables_empty`).text("").addClass('empty-state');
                    $(`.getKeywords `).css("white-space", "nowrap");
                    if ($(`.getKeywords_wrapper .getKeywords .dataTables_empty`).hasClass('empty-state')) {
                        $(`.getKeywords_wrapper .getKeywords .dataTables_empty`).parent().parent().addClass('d-none')
                    }
                    renderSparkline("getKeywords");
                    let html_keywords = `
                    <div class="bg-white pl-4 pt-3 pb-3 pr-4 mx-3 mt-4 mb-0 alert alert-success alert-rounded  d-flex" style="border-top: 3px solid #0abb87; border-color: #0abb87 !important;">
                        <div class="adsSearch font-gg font-14 text-dark font-weight-500" style="max-width: 900px;">
                            <h4 style="text-transform: capitalize;" class="text-left font-15 font-weight-bold">Cải thiện từ khóa - SEO</h4>
                            <div class="">Theo dõi và cải thiện chất lượng chiến dịch SEO (tối ưu Google Search) chỉ 199,000 vnd/tháng</div>
                        </div>
                        <div class="px-4 px-md-0 pb-2 pb-md-0 no-block ml-auto d-flex align-items-center pr-4">
                            <a class="font-gg font-13 font-weight-500 bagSuccess ml-auto ml-md-0" data-toggle="tooltip" data-placement="top" title="" href="">Cải thiện SEO</a>
                        </div>
                    </div>
                    `
                    $('.parent-getKeywords').parent().append(html_keywords).addClass('pb-3')
                }
            }
        )
        //banckLinksOverview
    initDatatable(
        'banckLinksOverview', {
            ajax: {

                url: `//localapi.trazk.com/webdata/v3.php?task=getDomainBackLinkDetail&domain=${localDomain}&method[backlinksDetail]=true&userToken=${userToken}`,
                dataSrc: function(res) {
                    // console.log(res.data.banckLinksOverview.backlinks.data);
                    lockedModule('banckLinksOverview', res.userData.member);
                    let columns = [];
                    var stt = 0;
                    $.each(res.data.backlinksDetail, function(k, v) {
                        if (stt < 10) {
                            let output = {
                                source_url: v.source_url,
                                source_title: v.source_title,
                                target_url: v.target_url,
                                anchor: v.anchor,
                                target_title: v.target_title,
                                nofollow: v.nofollow,
                            };
                            columns.push(output)
                            stt++;
                        }
                    })
                    return columns;
                },
            },
            columns: [{
                    title: 'Referring Page Title / Referring Page URL',
                    "data": data => `
                    <div>
                        <div class="dot-table-referring">${data.source_title}</div>
                        <a target="_blank" class="dot-table-referring"  href="${data.source_url}">${data.source_url}</a>
                    </div>
                    `
                },
                {
                    title: 'Anchor Text / Link URL',
                    "data": data => `
                    <div>
                        <div class="dot-table-referring">${data.anchor}</div>
                        <a target="_blank" class="dot-table-referring" href="${data.target_url}">${data.target_url}</a>
                    </div>
                    `
                },
                {
                    title: 'Type',
                    "data": data => `<div>${(data.nofollow == true) ? '<div class="bg-warning px-2 py-1 rounded-pill font-weight-bold">nofollow</div>' : '<div class="bg-info px-2 py-1 rounded-pill font-weight-bold">follow</div>'}</div>`
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
                $('.parent-banckLinksOverview .dataTables_scrollBody ').attr('style', 'max-height: 303px;');
                $('.widget-banckLinksOverview .widgetHeader').remove()
            }
        }
    )
    initDatatable(
        'getAdvertisingSearchDetail', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getDomainOverview&domain=${localDomain}&page=1&method[googleAdsGDNOverview]=true&userToken=${userToken}`,
                dataSrc: function(res) {

                    lockedModule('getAdvertisingSearchDetail', res.userData.member);
                    if (res.data.adwordsCompetitors && res.data.adwordsCompetitors != '') {
                        let columns = [];
                        $.each(res.data.adwordsCompetitors, function(k, v) {
                            let output = {};
                            output.domain = v.domain;
                            output.competitionLvl = v.competitionLvl;
                            output.commonKeywords = v.commonKeywords;
                            output.adwordsKeywords = v.adwordsKeywords;
                            columns.push(output)
                        })
                        return columns;
                    } else {
                        $('.parent-getAdvertisingSearchDetail').html('').addClass('empty-state d-table-row')
                        return [];
                    }
                },
            },
            drawCallback: function(settings) {},
            columns: [{
                    title: "Competitor",
                    "data": data => `<a href="${rootURL}/rank/${data.domain}"><div class="dot-table-a">${data.domain}</div></a>`,
                    class: 'text-left'
                },
                {
                    title: "Com.Level",
                    "data": data => `<div class="progress rounded progress-custom w-100 my-auto">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${(data.competitionLvl * 1000).toFixed(1)}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>`,
                    class: 'text-left'
                },
                {
                    title: "Com.Keywords",
                    "data": data => `${numeral(data.commonKeywords).format('0,0')}`,
                    class: 'text-center'
                },
                {
                    title: "Paid Keywords ",
                    "data": data => `${data.adwordsKeywords}`,
                    class: 'text-center'
                },
            ],
            language,
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

            }
        }
    )


    initDatatable(
        'getOrganicKeywordsBrandedTable', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.1.php?task=getOrganicKeywordsBrandedTable&domain=${localDomain}&userToken=${userToken}`,
                dataSrc: (json) => {
                    lockedModule('getOrganicKeywordsBrandedTable', json.userData.member);
                    $('.similarDates-organickeyno').html(`${moment(json.data.lastUpdate).format("DD-MM-YYYY")}`)
                    if (!json.data || !json.data.data) {
                        $('.parent-getOrganicKeywordsBrandedTable').html('').addClass('empty-state')
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
                        return `<div style="width:100px;word-wrap: break-word;"><a href="./index.php?view=keyword-planner&action=result&keywords=${keyWork}&language=vn&country=vn&network=web"  data-type="keyword" class="changeURL" data-input="${data.SearchTerm}">${keyWork}</a></div>`
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
                $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;')
                    // $(`.parent-getOrganicKeywordsBrandedTable`).attr('style', 'height:295px!important')
            }
        }
    )
    $.get(`//localapi.trazk.com/webdata/facebook.php?task=findFanpageByDomain&domain=${localDomain}&userToken=${userToken}`, function(res) {
        let fbId = res.data.fbId;
        let logo = res.data.imageURI;
        let name = res.data.name;
        let iconBlue = '';
        if (fbId != undefined) {
            if (res.data.verification == "blue_verified") {
                iconBlue = rootURL + "/dist/images/check.png";
            } else {
                iconBlue = "";
            }
            let html = `
            <div class="imgPageAds d-flex align-items-end"
                style="--cover-photo-uri: url('${res.data.pageCoverPhoto}');background-size: contain;height: 300px;width: 100%;background-position: center;background-repeat: no-repeat;background-image:linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .8)), var(--cover-photo-uri);padding: 20px!important;">
                        <div class="p-2 mb-4 rounded-circle bg-primary" style="width:115px;height:115px;background-image: url('${res.data.imageURI}');background-size: cover;background-position: center;background-repeat: no-repeat;border:2px solid white"></div>
                        <div class="p-2 mb-5 pl-3">
                        <div class="font-16 font-weight-bold text-white">${res.data.name} <img class="ml-n1" src="${iconBlue}" style="width:20px">

                        </div>
                        <div class="font-12 text-white">@${res.data.pageAlias}</div>
                        <div class="font-12 text-white">${res.data.category} - <span>${numeral(res.data.likes).format("0,0")} likes</span></div>
                        </div>
                        <div class="ml-auto mb-5">
                        <div class="bg-white" style="border-radius: 5px;padding: 5px 10px 5px 10px;">
                        <div class="font-12 text-dark p-5"><i class="far fa-flag-alt"></i> Trang được tạo <span>${moment(res.data.pageCreationDate).format('MMMM DD YYYY')}</span><div>
                        </div>
                        </div>


            </div>
            `;
            $('#bannerPageAds').append(html);
            $('#logo-company').append(`<img src="${res.data.imageURI}" class="" alt="" style="border-radius: 11px;">`)
        }
    })
    initDatatable(
        'getSubdomains', {
            // data: data.data.trafficBySubDomain,
            ajax: {
                url: `//localapi.trazk.com/webdata/v3.php?task=getTrafficOverview&domain=${localDomain}&page=1&method[all]=true&userToken=${userToken}`,
                dataSrc: (json) => {
                    lockedModule('getSubdomains', json.userData.member);
                    if (json.data.trafficBySubDomain && json.data.trafficBySubDomain != undefined) {
                        return json.data.trafficBySubDomain
                    } else {
                        $('.parent-getSubdomains').html('').addClass('empty-state')
                        return []
                    }
                },
            },
            drawCallback: function(settings) {},
            columns: [{
                    title: "Subdomain",
                    "data": data => `<a href="${rootURL}/rank/${data.subdomain}"><div class=""><img class="p-1 mr-2 border rounded bg-secondary" src="https://www.google.com/s2/favicons?domain=${data.subdomain}"> ${data.subdomain}</div></a>`,
                },
                {
                    title: `<i class="fal fa-phone-laptop"></i> Mọi thiết bị`,
                    "data": data => `${numeral(data.traffic_value).format("0.0a")}`,
                },
                {
                    title: `<i class="fal fa-desktop"></i> Desktop`,
                    "data": data => `<div style="color:#ffb822">${numeral(data.desktop_share).format('00.00%')}</div>`,
                },
                {
                    title: `<i class="fal fa-mobile"></i> Mobile`,
                    "data": data => `<div style="color:#0abb87">${numeral(data.mobile_share).format('00.00%')}</div>`,
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
                // $("table.dataTable thead th").css("padding", "10px");
                $("table.dataTable tbody tr td").css("padding", "10px 18px");
                $("table.dataTable tbody").css("text-align", "left");
            }
        }
    )

    function swalsosanh(domain) {
        Swal.fire({
            title: 'Hãy nhập website để so sánh',
            html: `<input id="swal-input1" class="swal2-input text-lowercase" value=${domain} placeholder="Nhập website của bạn">` +
                `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                `<input id="swal-input2" value="" class="swal2-input text-lowercase"  placeholder="Nhập website của đối thủ">`,
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
    }
    $.getJSON(`//localapi.trazk.com/bigdata/index.php?task=getDomainInformationWithBigData&domain=${localDomain}&userToken=${userToken}`, function(res) {
        let domainData = res.data.domainData
        let websiteContact = res.data.websiteContact
        var email = websiteContact.email.replace(/[\(\)\[\]{}'"]/g, "");
        if (email == null || email == 'null') email = "chưa xác định";

        var phone = websiteContact.phone.replace(/[\(\)\[\]{}'"]/g, "");
        if (phone == null || phone == 'null') phone = "chưa xác định";


        let html_left = `
                <div class="title-logo">${domainData.domain}</div>
                <span class="email-infoweb mr-3" style=""><i class="fad fa-envelope mr-1  font-15" style="color: #74788d;"></i> ${email}</span>
                <span class="email-infoweb"><i class="fal fa-phone-alt mr-1 font-15"></i>${phone}</span>
            `;

        let html_info = `
            <div><strong>Địa chỉ:</strong> <i class="fas fa-map-marker-alt mr-2 text-info"></i>${(domainData.owner.address != undefined) ? domainData.owner.address:'Chưa cập nhật'}</div>
            <div><strong>Sở hữu:</strong> ${(domainData.owner.ownerName == '') ? domainData.registrarName : domainData.owner.ownerName}</div>
            <div><strong>Phone:</strong> ${phone}</div>
            <div class="email-infoweb"><strong>Email:</strong> ${email}</div>
            <div><strong>Thành lập ngảy:</strong> ${moment(domainData.creationDate).format('DD MMMM YYYY')}</div>
        `
        $('.wapper-decrip').html(html_left)
        $('.info-user-api').html(html_info)
        $('.btn-truycap').attr('href', `https://${domainData.domain}`)
        $('body').on('click', '.btn-sosanh', function() {
            swalsosanh(domainData.domain)
        })
    })


})