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
                    url: `//localapi.trazk.com/webdata/websiteapi.php?task=getOrganicKeywordsBrandedTable&domain=${localDomain}&userToken=${userToken}`,
                    dataSrc: (json) => {
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
                    { title: 'Vị trí', data: data => data.PositionPaid[0].Value },
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
                url: `//localapi.trazk.com/webdata/websiteapi.php?task=getOrganicKeywordsNonBrandedTable&domain=${localDomain}&userToken=${userToken}`,
                dataSrc: (json) => {
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
                { title: 'Vị trí', data: data => data.PositionPaid[0].Value },
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
    $.getJSON(`//localapi.trazk.com/webdata/v2.php?task=getDomainOrganicDetail&domain=${localDomain}&method[organicSubdomains]=true&userToken=${userToken}`, function(res) {
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
            slidesPerGroup: 3,
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
                    spaceBetween: 20
                },
                // when window width is >= 640px
                960: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
    })
    initDatatable(
        'organicCompetitors', {
            ajax: {
                url: `//localapi.trazk.com/webdata/v2.php?task=getDomainOrganicDetail&domain=${localDomain}&method[organicCompetitors]=true&userToken=${userToken}`,
                dataSrc: function(res) {
                    // console.log(res.data.data);
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
                        console.log(columns);
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
})