import counterUp from './counterup2/index.js';
//notice line 291 add excel text
$(window).on('load', function() {
    $('.input_search').show()
})
$(document).ready(() => {     
    checkLimited()
    $('.input_search').hide()
    let isProcessing = false;
    const url = new URL(location.href);
    let keywords = url.searchParams.get("keyword");
    console.log(keywords);
    
    const lang = url.searchParams.get("language") || url.pathname.split("/")[2];
    const country =url.searchParams.get('country') ||  url.pathname.split("/")[2]    
    // var country = url.searchParams.get('country');
    const textPhraseMatch = (xxx) => `Có <strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa <strong class="font-gg text-primary font-16">liên quan chặt chẽ</strong> với từ khóa chính “<strong class="font-gg font-16 text-success">${keywords}</strong>”`;
    const textRelated = (xxx) => `Có <strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa <strong class="font-gg text-primary font-16">liên quan</strong> với từ khóa chính “<strong class="font-gg font-16 text-success">${keywords}</strong>”`;
    const textRecommendation = (xxx) => `FFF gợi ý <strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa liên quan với từ khóa "<strong class="font-gg font-16 text-success">${keywords}</strong>" cho chiến dịch SEO và Google Ads`;
    const textalertPimary = (xxx) => `<i class="fas fa-hand-point-right"></i>&nbsp; <strong style="font-size:16px;"> Xem danh sách<strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa liên quan chặt chẽ</strong>`;
    const textalertDanger = (xxx) => `<i class="fas fa-hand-point-right"></i>&nbsp; <strong style="font-size:16px;"> Xem danh sách<strong class="font-gg font-16 text-primary">${numeral(xxx).format('0,0')}</strong> từ khóa liên quan </strong>`;
    const excelText = '<i class="fas fa-download"></i><span class="d-md-inline"> Tải file Excel</span>';
    const texttop10qctukhoa = () => `Top 10 trang quảng cáo từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trả phí qua Google Ads `;
    const texttop10qctukhoa_chart = () => `Top 5 trang quảng cáo từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trả phí qua Google Ads trong 3 tháng gần đây`;
    const texttop10trangSEO = () => `Top 10 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-success">${keywords}</strong>”(SEO - Truy cập tự nhiên)`;
    const texttop10trangseo_chart = () => `Top 5 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trong 3 tháng gần đây`;    
    document.getElementById('input-submit').value=`${keywords}`;     
    $('#getKeywordsSuggestionV2_wrapper.ml-auto').css ('margin-top','-57px!important')
    // document.getElementsByClassName('selectLanguage').value=`${lang}`;     
    $('.selectLanguage').val(lang)
    $('.selectCountry').val(country)    
    

    $("#country").countrySelect({
        defaultCountry: lang,
        onlyCountries: ['us', 'kr', 'jp', 'es', 'id', 'vn'],
        preferredCountries: ['vn'],
        responsiveDropdown: false,
    });
    // const language = {
    //     searchPlaceholder: 'Nhập từ khóa',
    //     processing: 'Đang xử lý...',
    //     loadingRecords: 'Đang tải...',
    //     emptyTable: 'Không có dữ liệu hiển thị',
    //     lengthMenu: 'Hiển thị: _MENU_ dòng mỗi trang',
    //     zeroRecords: 'Không tìm thấy dữ liệu',
    //     info: 'Hiển thị từ _START_ đến _END_ trong tổng _TOTAL_ dòng',
    //     infoEmpty: 'Hiển thị từ 0 đến 0 trong tổng 0 dòng',
    //     infoFiltered: '(lọc từ tổng số _MAX_ dòng)',
    //     search: 'Tìm kiếm:',
    //     paginate: {
    //       previous: '<i class="fal fa-angle-double-left"></i>',
    //       next: '<i class="fal fa-angle-double-right"></i>'
    //     }
    //   };
    const setProcessing = (isProcessing) => {
        // set state
        isProcessing;
        // animation
        if (isProcessing) {
            $('#filterLeft').slideUp(100, function () {
                $('#iconLoading').slideDown();
            });
        } else {
            $('#iconLoading').slideUp(100, function () {
                $('#filterLeft').slideDown();
            });
        };
    }
 
    const getKeywords = (callback) => {
        // keywords = $('.iptKeyword').val();
        if (keywords == '' && !isProcessing) {
            Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
        } else {
            $('#searchTerm').text(keywords);
            if (callback) callback();
        }
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

    const renderTable = ({
        task,       
        limit,
        keywords,
        dataSrc,
        columns,
        scrollY,
        paging,
        pageLength,
        buttons,
        header,
        language
    }) => {




        let count = 0;
          console.log(count )
        if(task == "getKeywordsSuggestionV2_Main" )  {
            task = "getKeywordsSuggestionV2"; 
            count = 1;
        }   

        if(task == "getKeywordsSuggestionV2_Related") {
            task = "getKeywordsSuggestionV2"; 
            count = 2;
        }
        if (task == "getKeywordsSuggestionV2_Widen") {
            task = "getKeywordsSuggestionV2"; 
            count = 3;
        }
        if (task == "KeywordAnalysisOrganicTable" ) {
            task="KeywordAnalysisOrganicTable";
            count=4;

        }  
        let tableOptions = {
            ajax: {
                url: `//localapi.trazk.com/keywords/keywords.php?task=${task}&limit=${limit}&keywords=${keywords}&isLogin=${isLogin}&lang=${lang}&country=${country}`,
                dataSrc: dataSrc || 'data.Data',
            },
            autoWidth: false,
            // deferRender: true,
            buttons: {
                dom: {
                    container: {
                        tag: 'div',
                        className: 'd-flex no-block flex-row'
                    },
                    button: {
                        tag: 'div',
                        className: 'btn btn-rounded btn-success-2 font-12',
                        width: '135px'
                    },
                    buttonLiner: {
                        tag: null
                    }
                },
                buttons: buttons || [],
            },
            columns,
            // dom: `<"d-flex no-block pl-4 pr-2 py-2 border-bottom"<"#${task}--header.font-gg font-16 align-self-center"><"ml-auto"B>>rtip`,
            dom: `<"d-flex no-block mb-1"<"#${task}--header.font-gg font-16 align-self-center"><"ml-auto abc"B>>lftipr`,
            // dom:'Bftiplr',
            pageLength,
            info: true,
            ordering: task != "KeywordAnalysisOrganicTable" ? (task !="KeywordRecommendationsPhraseMatch" ? true:false ): false,
            pageLength:40,
            // sorting:true,
            paging,                        
            scrollY,
            scrollCollapse: scrollY ? false : null,
            language,
            drawCallback: function () {

                async function getLocalData() {
                    return await localStorage.getItem('KeywordRecommendationsRelated');
                }

                async function loadReportData() {
                    return await $.get(`//localapi.trazk.com/keywords/keywords.php?task=${task}&keywords=${keywords}&isLogin=${isLogin}&lang=${lang}&country=${country}`);
                }

                async function syncData() {
                    return await $.get(`//localapi.trazk.com/keywords/keywords.php?task=${task}&keywords=${keywords}&isLogin=${isLogin}&lang=${lang}&country=${country}`);
                }

                getLocalData().then(res => {
                    if (res) {
                        res = JSON.parse(res);
                        // console.log("res async:",res);
                        // googleConstantData(res);
                        syncData().then(data => {
                            localStorage.setItem('KeywordRecommendationsRelated', JSON.stringify(data));
                        })
                    } else {
                        loadReportData().then(res => {
                            console.log(res);

                            // googleConstantData(res);
                            localStorage.setItem('KeywordRecommendationsRelated', JSON.stringify(res));
                        })
                    }
                })


                // ------------------------------------------------------------------------------------
                $('.pagination').addClass('justify-content-center');
                $(`#${task}_paginate`).addClass('border-top p-20');

                $('.page-link').each(function (item) {
                    $(this).addClass('font-12');
                });

                renderSparkline(task);
            },
            initComplete: function () {
                // lọc theo chỉ định 
                if (task == 'KeywordRecommendationsPhraseMatch') {
                    $("#KeywordRecommendationsPhraseMatch_wrapper .dataTables_scroll").before(`<div id="filter_dropdown" class="col-sm-12" style="justify-content: space-between;display: flex;">
                     <select id="_dodai_tukhoa" class="my-select font-gg border rounded">
                     <option value="" disabled >Lọc theo độ dài từ khóa </option>
                             <option value="1" selected=true>1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                             <option value="6">6</option>
                             <option value="7">7</option>
                             <option value="8">8</option>
                             <option value="9">9</option>
                             <option value="10">10</option>                               
                         </select>
                        
                         <select id="_luottimkiem" class="my-select font-gg border rounded">
                         <option value="" disabled >Lọc theo Lượt tìm kiếm </option>
                             <option value="1" selected=true >0-500</option>
                             <option value="2">501-1,000</option>
                             <option value="3">1,001-5,000</option>
                             <option value="4">5,001-10,000</option>
                             <option value="5">10,000-20,000</option>
                             <option value="6">Trên 20,000</option>
                         </select>
                        

                         <select id="_cotcpc" class="my-select font-gg border rounded">
                         <option value="" disabled>Lọc theo CPC </option>
                             <option value="11" selected=true >0-1,000</option>
                             <option value="12">1,001-2,000</option>
                             <option value="13">2,001-3,000</option>
                             <option value="14">3,001-4,000</option>
                             <option value="15">4,001-5,000</option>
                             <option value="16">5,001-6,000</option>
                             <option value="17">6,001-7,000</option>
                             <option value="18">7,001-8,000</option>
                             <option value="19">8,001-9,000</option>
                             <option value="20">9,001-10,000</option>
                             <option value="21">Trên 10,000</option>
                         </select> 
                         <button class='btn btn-primary _loc' id='loc_cpc'>Lọc</button>

                     </div>`);

                    $('.my-select').selectpicker();
                    var locLTK = (settings, data, dataIndex) => {
                        let val = $("#_luottimkiem").val();
                        let from;
                        let to;
                        if (val == 1) //0 - 500;
                        {
                            from = 0;
                            to = 500;
                        } else if (val == 2) {
                            //500 - 1000;
                            from = 501;
                            to = 1000;
                        } else if (val == 3) {
                            //1000 - 20000;
                            from = 1001;
                            to = 5000;
                        } else if (val == 4) {

                            from = 5001;
                            to = 10000;
                        } else if (val == 5) {

                            from = 10000;
                            to = 20000;
                        } else if (val == 6) {
                            from = 20000;
                            to = 10000000000000000;
                        }
                        var data = parseFloat(numeral(data[1]).value()) || 0; // use data for the age column 
                        if ((isNaN(from) && isNaN(to)) ||
                            (isNaN(from) && data <= to) ||
                            (from <= data && isNaN(to)) ||
                            (from <= data && data <= to)) {
                            return true;
                        }
                        return false;
                    }

                    // $("#loc_ltk").click(() => {
                    //     $.fn.dataTable.ext.search.push(conditionFunc);
                    //     this.api().columns(1).draw();
                    // })


                    var locCPC = (settings, data, dataIndex) => {
                        let val1 = $("#_cotcpc2").val();
                        let from = 1000 * (val1 - 11) !== 0 ? 1000 * (val1 - 11) + 1 : 0;
                        let to = val1 == 21 ? 10000000000000000000 : 1000 * (val1 - 11) + 1000;
                        var data = parseFloat(numeral(data[2]).value()) || 0; // use data for the age column 
                        if ((isNaN(from) && isNaN(to)) ||
                            (isNaN(from) && data <= to) ||
                            (from <= data && isNaN(to)) ||
                            (from <= data && data <= to)) {
                            return true;
                        }
                        return false;

                    }
                    var locDDTK = (settings, data, dataIndex, dataSrc) => {
                        console.log("datasrc", dataSrc.keyword);
                        let val_dodai_tukhoa = $("#_dodai_tukhoa").val();
                        console.log("val do dai tukhoa", val_dodai_tukhoa);
                        let val = dataSrc.keyword.split(" ").length;
                        if (parseInt(val_dodai_tukhoa) == parseInt(val)) {
                            return true;
                        }
                        return false;
                    }

                    $("#loc_cpc").click(() => {
                        $.fn.dataTable.ext.search.push(locLTK, locCPC, locDDTK);
                        this.api().columns(0).draw();
                        this.api().columns(1).draw();
                        this.api().columns(2).draw();
                    })
                }
                // ==============================================================================================================





                //////loc theo table tu khoa lien quan
                if (task == "KeywordRecommendationsRelated") {
                    $("#KeywordRecommendationsRelated_wrapper .dataTables_scroll").before(`<div id="filter2_dropdown" class="col-sm-12"  style="justify-content: space-between;display: flex;">                           
                    <select id="_dodai_tukhoa2" class="my-select font-gg border rounded">
                    <option value="" disabled >Lọc theo độ dài từ khóa </option>
                            <option selected=true value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>                               
                        </select>
                        

                        <select id="_luottimkiem2" class="my-select font-gg border rounded">
                        <option value="" disabled >Lọc theo Lượt tìm kiếm </option>
                            <option selected=true value="1">0-500</option>
                            <option value="2">501-1,000</option>
                            <option value="3">1,001-5,000</option>
                            <option value="4">5,001-10,000</option>
                            <option value="5">10,000-20,000</option>
                            <option value="6">Trên 20,000</option>
                        </select>
                      
                        <select id="_cotcpc2" class="my-select font-gg border rounded">
                        <option value="" disabled >Lọc theo CPC </option>
                            <option selected=true value="11">0-1,000</option>
                            <option value="12">1,001-2,000</option>
                            <option value="13">2,001-3,000</option>
                            <option value="14">3,001-4,000</option>
                            <option value="15">4,001-5,000</option>
                            <option value="16">5,001-6,000</option>
                            <option value="17">6,001-7,000</option>\
                            <option value="18">7,001-8,000</option>
                            <option value="19">8,001-9,000</option>
                            <option value="20">9,001-10,000</option>
                            <option value="21">Trên 10,000</option>
                        </select> 
                        <button class='btn btn-primary _loc' id='loc_cpc2'>Lọc</button>
                    </div>`);
                    $('.my-select').selectpicker();
                    var conditionFunc = (settings, data, dataIndex) => {
                        let val = $("#_luottimkiem2").val();
                        console.log("val", val);
                        let from;
                        let to;
                        if (val == 1) //0 - 500;
                        {
                            from = 0;
                            to = 500;
                        } else if (val == 2) {
                            //500 - 1000;
                            from = 501;
                            to = 1000;
                        } else if (val == 3) {
                            //1000 - 20000;
                            from = 1001;
                            to = 5000;
                        } else if (val == 4) {

                            from = 5001;
                            to = 10000;
                        } else if (val == 5) {

                            from = 10000;
                            to = 20000;
                        } else if (val == 6) {

                            from = 20000;
                            to = 10000000000000000;
                        }
                        var data = parseFloat(numeral(data[1]).value()) || 0; // use data for the age column 
                        if ((isNaN(from) && isNaN(to)) ||
                            (isNaN(from) && data <= to) ||
                            (from <= data && isNaN(to)) ||
                            (from <= data && data <= to)) {
                            return true;
                        }
                        return false;
                    }



                    var conditionFunc2 = (settings, data, dataIndex) => {
                        let val1 = $("#_cotcpc2").val();
                        let from = 1000 * (val1 - 11) !== 0 ? 1000 * (val1 - 11) + 1 : 0;
                        let to = val1 == 21 ? 10000000000000000000 : 1000 * (val1 - 11) + 1000;
                        var data = parseFloat(numeral(data[2]).value()) || 0; // use data for the age column 
                        if ((isNaN(from) && isNaN(to)) ||
                            (isNaN(from) && data <= to) ||
                            (from <= data && isNaN(to)) ||
                            (from <= data && data <= to)) {
                            return true;
                        }
                        return false;

                    }
                    var conditionFunc3 = (settings, data, dataIndex, dataSrc) => { //nhớ cái này có 5 tham số
                        console.log("datasrc", dataSrc.keyword);

                        let val_dodai_tukhoa = $("#_dodai_tukhoa2").val();
                        console.log("val do dai tukhoa", val_dodai_tukhoa);
                        let val = dataSrc.keyword.split(" ").length;
                        if (parseInt(val_dodai_tukhoa) == parseInt(val)) {
                            return true;
                        }
                        return false;
                    }

                    $("#loc_cpc2").click(() => {
                        $.fn.dataTable.ext.search.push(conditionFunc, conditionFunc2, conditionFunc3);
                        this.api().columns(0).draw();
                        this.api().columns(1).draw();
                        this.api().columns(2).draw();
                    })

                }


















                if (header) $(`#${task}--header`).text(header);

                $('.dataTables_scrollHeadInner').attr('style', 'padding-right:0px!important')
                    .find('table').attr('style', 'border-top-color:transparent!important;margin-top:0px!important')
                    .find('th').addClass('font-10 border-top-0 border-bottom text-muted')

                $('.dataTables_scrollBody table th').addClass('border-0');

                $(`.dataTables_scrollBody`).perfectScrollbar();

                renderSparkline(task);

                if (task == 'getKeywordsSuggestionV1') {

                    setProcessing(false);

                    $('#filterLeft .spinner-border').hide();

                    this.api().columns(2).every(function () {
                        let column = this;
                        let title = $(column.header()).text();
                        let select = $('<select class="form-control custom-select"><option value="">Tất cả ' + title + '</option></select>')
                            .appendTo($('#chieuDai'))
                            .on('change', function () {
                                let val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );
                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>')
                        });
                    });
                    // console.log(this.api().columns(1).data().unique().toArray());

                    let valueLuotTimKiem = this.api().columns(1).data().unique()[0].map((v, i) => numeral(v).value()).sort((a, b) => a - b);
                    let valueCanhTranh = this.api().columns(3).data().unique()[0].map((v, i) => numeral(v).value()).sort((a, b) => a - b);

                    // console.log('values',values);

                    const onRangeChange = (range, index) => {

                        const conditionFunc = (settings, data, dataIndex) => {
                            if (settings.nTable.id !== 'getKeywordsSuggestionV1') {
                                return true;
                            }
                            var min = parseInt(range.from_value, 10);
                            var max = parseInt(range.to_value, 10);
                            var data = parseFloat(numeral(data[index]).value()) || 0; // use data for the age column

                            if ((isNaN(min) && isNaN(max)) ||
                                (isNaN(min) && data <= max) ||
                                (min <= data && isNaN(max)) ||
                                (min <= data && data <= max)) {
                                return true;
                            }
                            return false;
                        }
                        $("#filter_tag").off('click');
                        $("#filter_tag").on('click', () => {

                            $.fn.dataTable.ext.search.push(conditionFunc);
                            this.api().columns(1).draw();
                        });
                    }

                    $(`<input type="text" class="js-range-slider" name="canhTranh" value=""/>`)
                        .appendTo($('#canhTranh'))
                        .ionRangeSlider({
                            skin: "round",
                            type: "double",
                            grid: true,
                            prettify_separator: ",",
                            values: valueCanhTranh,
                            onChange: (range) => onRangeChange(range, 3),
                        });


                    $(`<input type="text" class="js-range-slider" name="luotTimKiem" value=""/>`)
                        .appendTo($('#luotTimKiem'))
                        .ionRangeSlider({
                            skin: "round",
                            type: "double",
                            grid: false,
                            prettify_separator: ",",
                            values: valueLuotTimKiem,
                            onChange: (range) => onRangeChange(range, 1),
                        });
                    $('.irs-min, .irs-max, .irs-from, .irs-to, .irs-single').addClass('font-12');

                    $(`#filterLeft input[name="canhTranh"]`).change(function () {
                        let val = $(this).val();
                        // console.log(val);
                    })
                } // if task == getKeywordsSuggestion
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

        if(count == 1) {
            task = "getKeywordsSuggestionV2_Main"; 
        } else if (count == 2) {
            task= "getKeywordsSuggestionV2_Related";
        }
        else if (count == 3) {
            task= "getKeywordsSuggestionV2_Widen";
        }
        else if (count==4) {
            task="KeywordAnalysisOrganicTable"
        }
        return $(`#${task}`).DataTable(tableOptions);
    }

    const emptyState = (selector) => {
        let $this = $(selector);

        $this.attr('class', 'd-none');
    }

    const renderChart = (task) => {
       
        switch (task) {
            case 'KeywordAnalysisOrganicTable': //id
                var t = renderTable({
                    task,
                    keywords,
                    limit: 0,
                    paging: true,
                    pageLength: 10,
                    pagingType: 'full_numbers',
                    searching:false,    
                    ordering:false,
                    info:false,
                    sorting:false,                
                    dataSrc: res => {    
                        // var ng=JSON.parse(res);                     
                        console.log(task);
                        console.log(JSON.parse(res.data));     
                        var x = JSON.parse(res.data);       
                        $('#KeywordAnalysisOrganicTable_length').hide();
                        $('#KeywordAnalysisOrganicTable_info').hide()
                        $('#KeywordAnalysisOrganicTable_filter').hide()
                        
                        if (x.Data == null) {
                            $("#organicgraph_table1").hide();                          
                        } else if ((x).Data.length > 0) {
                            let header = texttop10trangSEO();
                            $(`#${task}--header`).html(header);
                            return ((x).Data).filter(item => item.Domain != 'grid.upgrade')

                        } 
                        else {
                            $("#KeywordAnalysisOrganicTable").hide();
                            $("#KeywordAnalysisOrganicGraph").addClass("empty-state");
                            emptyState('#KeywordAnalysisOrganicGraph');
                            return [];
                        }                       
                        return x.Data;
                    },
                    columns: [{
                            data: null,
                            // render: (data) => {
                            //     switch (data) {
                            //         case 1:
                            //             return `<div class="round round-sm round-success font-bold">${data}</div>`
                            //         case 2:
                            //             return `<div class="round round-sm round-warning font-bold">${data}</div>`
                            //         case 3:
                            //             return `<div class="round round-sm round-primary font-bold">${data}</div>`
                            //         default:
                            //             return `<span class="text-muted">${data ? data : ''}</span>`;
                            //     }
                            // },
                            className: 'align-middle',
                            width: '12px'
                        },
                        {
                            data: 'Domain',
                            render: (data, type, row) => `
                                    <div class="d-flex no-block flex-row">
                                        <a  data-type="website" class="changeURL" data-input="${data}">
                                            <img src="${row.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />
                                            ${data}</a>
                                    </div>`,
                            className: 'align-middle',
                            width: '150px',
                        },
                        {
                            data: 'TotalShare',
                            render: (data, type, row) => {
                                data = numeral(data).format('0%');
                                let change = `
                                    <span class="font-10 ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">
                                        ${numeral(Math.abs(row.Change)).format('0%')}
                                    </span>`

                                return `
                                <div class="row">
                                    <div class="col-3">${data}</div>
                                    <div class="col align-self-center">
                                        <div class="progress bg-dark-2" style="height:6px">
                                            <div class="progress-bar bg-success" style="width:${data};height:6px;" role="progressbar"></div>
                                        </div>
                                    </div>
                                </div>`
                            },
                            width: '120px',
                            className: 'align-middle'
                        },
                        {
                            data: 'Change',
                            render: (data, type, row) => {
                                data = numeral(data).format("0%");
                                let change = `<span class=" d-flex font-10 arrow_compare justify-center ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">                                      
                                ${numeral(Math.abs(row.Change)).format('0%')}
                                </span>`
                                return `
                               <div class="row">                                                                      
                                   <div class="col-8 text">${change}</div>                                   
                               </div>`
                            },
                            className: 'align-middle'
                        },

                        {
                            data: 'Position',
                            render: (data, type, row) => `<p>${data}</so> `,
                            className: 'align-middle'
                        },


                        {
                            data: 'Url',
                            render: data => data == "N/A" ? '' : `
                                <a href="${data}" target="_blank" class="text-break text-truncate-2">${data} <i class="child-hover fal fa-external-link"></i></a>
                            `,
                            className: 'align-middle parent-hover',
                        },
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_CongCuTuKhoa'
                    }],
                    scrollY: 'auto'
                });
                t.on('order.dt search.dt', function () {
                    t.column(0, {
                        search: 'applied',
                        order: 'applied'
                    }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
                break;

            case 'KeywordAnalysisPaidTable':
                var t = renderTable({
                    task,
                    keywords,
                    limit: 0,
                    paging: true,
                    pageLength: 10,
                    // dataSrc: res => console.log((JSON.parse(res.data).Data).filter(item => item.Domain != 'grid.upgrade')),
                    dataSrc: res => {
                        // console.log("hay1");


                        if (res.data.Data == null) {
                            $("#paidgraph_table").hide();
                        } else if (res.data.Data.length > 0) {
                            // console.log("hay2");
                            let header = texttop10qctukhoa();
                            // $(".rowKeywordRecommendationsPhraseMatch").show();
                            $(`#${task}--header`).html(header);
                            return (res.data.Data).filter(item => item.Domain != 'grid.upgrade')
                        } else {
                            // console.log("vao day1 ");
                            // $("#KeywordAnalysisPaidGraph").append("<p>Khong co du lieu  can tim</p>");
                            console.log("deo co data");
                            emptyState('#KeywordAnalysisPaidGraph');
                            return [];
                            // $("#KeywordAnalysisPaidGraph").hide();

                        }
                    },
                    columns: [{
                            data: null,
                            // render: (data, row) => ` `,
                            className: 'align-middle',
                            // width:'20px'

                        },
                        {
                            data: 'Domain',
                            render: (data, type, row) => `
                                    <div class="d-flex no-block flex-row">
                                        <a data-type="website" class="changeURL" data-input="${data}" href="#">
                                            <img src="${row.Favicon}" class="p-1 mr-2 border rounded bg-secondary" />
                                            ${data}</a>
                                    </div>`,
                            className: 'align-middle'
                            // ,width: '290px',
                        },
                        {
                            data: 'TotalShare',
                            render: (data, type, row) => {
                                data = numeral(data).format('0%');
                                let change = `
                                    <span class="font-10 arrow_compare ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">                                      
                                    </span>`
                                return `
                                <div class="row">
                                    <div class="col-3">${data}</div>
                                    <div class="col align-self-center">
                                        <div class="progress bg-dark-2" style="height:6px">
                                            <div class="progress-bar bg-danger" style="width:${data};height:6px;" role="progressbar"></div>
                                        </div>
                                    </div>                                  
                                </div>`
                            },
                            className: 'align-middle',
                            // width:'390px'
                        },
                        {
                            data: 'Change',
                            render: (data, type, row) => {
                                data = numeral(data).format('0%');
                                let change = `<span class=" d-flex font-10 arrow_compare justify-center ${(row.Change > 0 ? 'text-success positive' : 'text-danger negative')}">                                      
                                 ${numeral(Math.abs(row.Change)).format('0%')}
                                 </span>`
                                return `
                                <div class="row">                                                                      
                                    <div class="col-8 text">${change}</div>                                   
                                </div>`
                            },
                            className: 'align-middle'
                        },

                        {
                            data: 'Position',
                            render: (data, type, row) => `<p>${data}</> `,
                            className: 'align-middle'
                        },


                        {
                            data: 'Url',
                            render: data => data == "N/A" ? '' : `
                                <a href="${data}" target="_blank" class="text-break text-truncate-2">${data} <i class="child-hover fal fa-external-link"></i></a>
                            `,
                            className: 'align-middle parent-hover',
                        },
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_CongCuTuKhoa'
                    }],
                    scrollY: 'auto'
                });
                t.on('order.dt search.dt', function () {
                    t.column(0, {
                        search: 'applied',
                        order: 'applied'
                    }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
                break;


            case 'KeywordRecommendationsPhraseMatch':
                // console.log(task,$(`#${task}`));
                if (!$(`#${task}`)) {
                    $.ajax({
                        url: `localapi.trazk.com/keywords/keywords.v1.php?task=${task}&limit=${limit}&keywords=${keywords}&isLogin=${isLogin}&lang=${lang}&country=${country}`
                    }).done(res => {
                        console.log('hgt',res)
                    })
                } else {

                    renderTable({
                        task,
                        keywords,
                        limit: 0,
                        paging: true,
                        pageLength: 5,
                        ordering:false,
                        info:false,
                        searching:false,
                        dataSrc: res => {
                            var ng=JSON.parse(res.data);
                            let {
                                records,
                                totalRecords,
                                totalVisits
                            } = (ng);
                              console.log(ng);
                              $('#KeywordRecommendationsPhraseMatch_length').hide()
                              $('#KeywordRecommendationsPhraseMatch_info').hide()
                              $('#KeywordRecommendationsPhraseMatch_filter').hide()
                            if (records.length > 0 && totalRecords && totalVisits) {
                                let header = textPhraseMatch(totalRecords);
                                // $(".rowKeywordRecommendationsPhraseMatch").show();
                                $(`#${task}--header`).html(header);
                                let header1 = textalertPimary(totalRecords);                               
                                $('#alert_primary').html(header1);
                               
                                return records;
                            } else {
                                emptyState($(`#${task}_wrapper`).parent());
                                return [];
                            }
                        },                        
                        columns: [{
                                data: 'keyword',
                                width: '30%',
                                render: (data, type, row) => {
                                    let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
                                    return `                                   
                                    <div class="d-flex no-block flex-row">
                                            <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" class="text-muted font-12"' : res}">
                                                <i class="child-hover far fa-search mr-2"></i>
                                                ${data == '[Hidden]'
                                                ? '[Tạo tài khoản miễn phí để xem nội dung này]'
                                                : data}
                                            </a>
                                            <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.volumeTrend ? Object.values(row.volumeTrend) : []}]"></div>
                                        </div>`
                                },
                                className: 'parent-hover'
                            },
                            {
                                data: 'volume',
                                render: data => numeral(data).format('0,0'),
                                className: 'text-right'
                            },
                            {
                                data: 'cpc',
                                render: data => numeral(data * 23500).format('0,0') + 'đ',
                                className: 'text-right'
                            },
                            {
                                data: 'leadingSite',
                                render: (data, type, row) => `
                                    <div class="d-flex no-block flex-row">
                                        <a  data-type="website" class="changeURL" data-input="${data}" href="#">
                                            <img src="${row.favicon}" class="p-1 mr-2 border rounded bg-secondary" />
                                            ${data}</a>
                                    </div>`,
                            },
                            {
                                data: 'totalVisits',
                                render: (data, type, row) => numeral(data).format('0,0'),
                                className: 'text-right'
                            },
                            {
                                data: (data) => numeral(data.organicShare).format('0%'),
                                render: (data) => `<div class="progress bg-danger" style="height:6px">
                                        <div class="progress-bar bg-success" style="width:${data};height:6px;" role="progressbar"></div>
                                    </div>`
                            },
                        ],
                        buttons: [{
                            extend: 'excel',
                            text: excelText,
                            filename: 'fff_com_vn_CongCuTuKhoa'
                        }],
                        // scrollY: '300px' 
                    });
                }

                break;
            case 'KeywordRecommendationsRelated':
                renderTable({
                    task,
                    keywords,
                    limit: 0,
                    paging: true,
                    pageLength: 5,
                    dataSrc: res => {
                        //   console.log('res',res);


                        if (res.data == null) {
                            $('table#KeywordRecommendationsRelated tbody tr.odd').addClass('empty-state');
                            $('table#KeywordRecommendationsRelated tbody tr.odd td').find('div').remove('div');

                        }


                        let {
                            records,
                            totalRecords,
                            totalVisits,
                            maxScore
                        } = res.data;
                        if (records.length > 0 && totalRecords && totalVisits) {
                            let header = textRelated(totalRecords);
                            $(".rowKeywordRecommendationsRelated").show();
                            $(`#${task}--header`).html(header);

                            let header2 = textalertDanger(totalRecords);
                            $("#alert_danger").html(header2);
                            // console.log("sdds",header2);

                            return records;
                        } else {
                            emptyState($(`#${task}_wrapper`).parent());
                            return [];
                        }
                    },

                    // dataSrc: res => (JSON.parse(res.data)).records,
                    columns: [{
                            data: 'keyword',
                            width: '30%',
                            render: (data, type, row) => {
                                console.log('as', data, type, row)
                                let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;

                                return `<div class="d-flex no-block flex-row">
                                        <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php"  target="top" class="text-muted font-12"' : res}">
                                            <i class="child-hover far fa-search mr-2"></i>
                                            ${data == '[Hidden]'
                                            ? '[Tạo tài khoản miễn phí để xem]'
                                            : data}
                                        </a>
                                        <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.volumeTrend ? Object.values(row.volumeTrend) : []}]"></div>
                                    </div>`
                            },
                            className: 'parent-hover'
                        },
                        {
                            data: 'volume',
                            render: data => numeral(data).format('0,0'),
                            className: 'text-right'
                        },
                        {
                            data: 'cpc',
                            render: data => numeral(data * 23500).format('0,0') + 'đ',
                            className: 'text-right'
                        },
                        {
                            data: 'leadingSite',
                            render: (data, type, row) => `
                                <div class="d-flex no-block flex-row">
                                    <a  data-type="website" class="changeURL" data-input="${data}" href="#">
                                        <img src="${row.favicon}" class="p-1 mr-2 border rounded bg-secondary" />
                                        ${data}</a>
                                </div>`,
                        },
                        {
                            data: 'score',
                            render: (data, type, row) => numeral(data).format('0%'),
                            className: 'text-right'
                        },
                        {
                            data: 'totalVisits',
                            render: (data, type, row) => `${numeral(data).format('0,0')}`,
                            className: 'text-right'
                        },
                        {
                            data: (data) => numeral(data.organicShare).format('0%'),
                            render: (data) => `<div class="progress bg-danger" style="height:6px">
                                    <div class="progress-bar bg-success" style="width:${data};height:6px;" role="progressbar"></div>
                                </div>`
                        },
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_CongCuTuKhoa'
                    }],
                    // scrollY: '300px'
                });

                break;

            case "getKeywordsSuggestionV1":
                renderTable({
                    task,
                    limit: 2000,
                    paging: true,
                    pageLength: 45,
                    keywords,
                    dataSrc: res => {
                        let {
                            keywords: dsTuKhoa,
                            traffic
                        } = res.data;

                        console.log('res', res.data);
                        if (traffic) {
                            renderMobilePCTraffic(traffic);
                        }

                        // return res.data.keywords;
                    },
                    columns: [{
                            title: 'Từ khoá zsss',
                            data: 'keyword',
                            render: (data, type, row) => {
                                let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;

                                return `<div class="d-flex no-block flex-row">
                                        <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
                                            <i class="child-hover far fa-search mr-2"></i>
                                            ${data == '[Hidden]'
                                            ? ``
                                            : data}
                                        </a>
                                        <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.lichsutimkiemtrungbinh}]"></div>
                                    </div>`
                            },
                            className: 'parent-hover pr-0',
                            width: '50%',
                        },
                        {
                            title: 'Tìm kiếm',
                            data: 'solantimkiemtrungbinh',
                            render: (data) => numeral(data).format('0,0'),
                            className: 'text-right'

                        },
                        {
                            title: 'Độ dài',
                            data: 'chieudai',
                            className: 'text-right'

                        },
                        {
                            title: 'Cạnh tranh',
                            data: 'dokho',
                            render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,

                        },
                        {
                            title: 'CPC (đ)',
                            data: (data) => numeral(data.giathaudautrangthapnhat).format('0,0') + ' - ' + numeral(data.giathaudautrangcaonhat).format('0,0'),
                            className: 'text-center'
                        }
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_CongCuTuKhoa'
                    }],
                })
                break;

                // ------------------------4 tabindex cho table---------------------            
            case "getKeywordsSuggestionV2":
                renderTable({
                    task,
                    limit: 2000,
                    paging: true,
                    pageLength: 45,
                    ordering: true,
                    info:     true,
                    searching: true,
                    sorting:true,                   
                    keywords,
                    dataSrc: res => {
                        let {
                            keywords: dsTuKhoa,
                            traffic
                        } = res.data;
                        if (traffic) {
                            renderMobilePCTraffic(traffic);
                        }                        
                         console.log('ss',res.data.keywords);
                         
                        $('#count__key_all').html(res.data.keywords.length)
                        return res.data.keywords;
                    },
                    columns: [{
                            title: 'Từ khoá v2',
                            data: 'keyword',
                            render: (data, type, row) => {
                                let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
                                let isquestion =row.isQuestion;                                
                               
                                return `<div class="d-flex no-block flex-row">
                                            <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
                                                <i class="child-hover far fa-search mr-2"></i>
                                                ${ data == '[Hidden]'
                                                ? showLoginModal()
                                                : data  }
                                            </a>   ${isquestion == 1 ? '<small class="text-info ml-1 font-13 text-center">?</small>' : ''}
                                            <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.lichsutimkiemtrungbinh}]"></div>
                                        </div> `
                            },
                            className: 'parent-hover pr-0',
                            width: '30%',
                        },
                        {
                            title: 'Tìm kiếm',
                            data: 'solantimkiemtrungbinh',
                            render: (data) => numeral(data).format('0,0'),
                            className: 'text-right'

                        },
                        {
                            title: 'Độ khó',
                            data: 'dokho',
                            render: (data) => `<span style="width: 40px" id="score_difficulty" class=" ${data <= 70 ? data <= 30 ? 'badge badge-success' : 'badge badge-warning' : 'badge badge-danger'}">${data <= 70 ? data <= 30 ? 'Dễ' : 'TB' : 'Cao'}</span>`,
                            className: 'text-right'

                        },
                        {
                            title: 'Độ dài',
                            data: 'chieudai',
                            className: 'text-right'

                        },
                        {
                            title: 'Cạnh tranh',
                            data: 'dokho',
                            render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,

                        },
                        {
                            title: 'CPC thấp nhất (đ)',
                            data: (data) => numeral(data.giathaudautrangthapnhat).format('0,0'),
                            className: 'text-right',
                        },
                        {
                            title: 'CPC cao nhất(đ)',
                            data: (data) =>numeral(data.giathaudautrangcaonhat).format('0,0'),
                            className: 'text-right'
                        }
                    ],                   
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_TatCaTuKhoa'
                    }],
                })
                break;
            case "getKeywordsSuggestionV2_Main":
                renderTable({
                    task,
                    limit: 2000,
                    paging: true,
                    pageLength: 45,
                    ordering: true,
                    info:     true,
                    searching: true,
                    sorting:true,
                    keywords,
                    dataSrc: res => { 

                        let newData = [];
                  
                        res.data.keywords.forEach((val) => {
                            if(val.keywordType == 1)
                                newData.push(val);
                        })

                        console.log(newData.length)
                        $('#count__key_main').html(newData.length)
                        return newData;
                    },
                    columns: [{
                            title: 'Từ khoá v2_main',
                            data: 'keyword',
                            render: (data, type, row) => {
                                let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
                                let isquestion =row.isQuestion;       
                                return `<div class="d-flex no-block flex-row">
                                <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
                                    <i class="child-hover far fa-search mr-2"></i>
                                    ${ data == '[Hidden]'
                                    ? showLoginModal()
                                    : data  }
                                </a>   ${isquestion == 1 ? '<small class="text-info ml-1 font-13 text-center">?</small>' : ''}
                                <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.lichsutimkiemtrungbinh}]"></div>
                            </div> `
                            },
                            className: 'parent-hover pr-0',
                            width: '30%',
                        },
                        {
                            title: 'Tìm kiếm',
                            data: 'solantimkiemtrungbinh',
                            render: (data) => numeral(data).format('0,0'),
                            className: 'text-right'

                        },
                        {
                            title: 'Độ khó',
                            data: 'dokho',
                            render: (data) => `<span style="width: 40px" id="score_difficulty" class=" ${data <= 70 ? data <= 30 ? 'badge badge-success' : 'badge badge-warning' : 'badge badge-danger'}">${data <= 70 ? data <= 30 ? 'Dễ' : 'TB' : 'Cao'}</span>`,
                            className: 'text-right'

                        },
                        {
                            title: 'Độ dài',
                            data: 'chieudai',
                            className: 'text-right'

                        },
                        {
                            title: 'Cạnh tranh',
                            data: 'dokho',
                            render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,

                        },
                        {
                            title: 'CPC thấp nhất (đ)',
                            data: (data) => numeral(data.giathaudautrangthapnhat).format('0,0'),
                            className: 'text-right',
                        },
                        {
                            title: 'CPC cao nhất(đ)',
                            data: (data) =>numeral(data.giathaudautrangcaonhat).format('0,0'),
                            className: 'text-right'
                        }
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_TuKhoaChinh'
                    }],
                })
                break;
            case "getKeywordsSuggestionV2_Related":
                renderTable({
                    task,
                    limit: 2000,
                    paging: true,
                    pageLength: 45,
                    ordering: true,
                    info:     true,
                    searching: true,
                    sorting:true,
                    keywords,
                    dataSrc: res => { 

                        let newData = [];

                        res.data.keywords.forEach((val) => {
                            if(val.keywordType == 2)
                                newData.push(val);
                        })
                        
                        $('#count__key_related').html(newData.length)
                        return newData;
                    },
                    columns: [{
                            title: 'Từ khoá v2_related',
                            data: 'keyword',
                            render: (data, type, row) => {
                                let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
                                let isquestion =row.isQuestion;       
                                return `<div class="d-flex no-block flex-row">
                                            <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
                                                <i class="child-hover far fa-search mr-2"></i>
                                                ${ data == '[Hidden]'
                                                ? showLoginModal()
                                                : data  }
                                            </a>   ${isquestion == 1 ? '<small class="text-info ml-1 font-13 text-center">?</small>' : ''}
                                            <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.lichsutimkiemtrungbinh}]"></div>
                                        </div> `
                            },
                            className: 'parent-hover pr-0',
                            width: '30%',
                        },
                        {
                            title: 'Tìm kiếm',
                            data: 'solantimkiemtrungbinh',
                            render: (data) => numeral(data).format('0,0'),
                            className: 'text-right'

                        },
                        {
                            title: 'Độ khó',
                            data: 'dokho',
                            render: (data) => `<span style="width: 40px" id="score_difficulty" class=" ${data <= 70 ? data <= 30 ? 'badge badge-success' : 'badge badge-warning' : 'badge badge-danger'}">${data <= 70 ? data <= 30 ? 'Dễ' : 'TB' : 'Cao'}</span>`,
                            className: 'text-right'

                        },
                        {
                            title: 'Độ dài',
                            data: 'chieudai',
                            className: 'text-right'

                        },
                        {
                            title: 'Cạnh tranh',
                            data: 'dokho',
                            render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,

                        },
                        {
                            title: 'CPC thấp nhất (đ)',
                            data: (data) => numeral(data.giathaudautrangthapnhat).format('0,0'),
                            className: 'text-right',
                        },
                        {
                            title: 'CPC cao nhất(đ)',
                            data: (data) =>numeral(data.giathaudautrangcaonhat).format('0,0'),
                            className: 'text-right'
                        }
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_TuKhoaLienQuan'
                    }],
                })
                break;
            case "getKeywordsSuggestionV2_Widen":
                renderTable({
                    task,
                    limit: 2000,
                    paging: true,
                    pageLength: 45,
                    ordering: true,
                    info:     true,
                    searching: true,
                    sorting:true,
                    keywords,
                    dataSrc: res => { 
                        let newData = [];
                        res.data.keywords.forEach((val) => {
                            if(val.keywordType == 3)
                                newData.push(val);
                        })

                        console.log('wwq',res.data.keywords.length)
                        $('#count__key_widen').html(newData.length)
                        return newData;
                    },
                    columns: [{
                            title: 'Từ khoá v2_widen',
                            data: 'keyword',
                            render: (data, type, row) => {
                                let res = `href="index.php?view=keywords&action=keywords-seo&keyword=${data}" class="changeURL font-12" data-input="${data}" data-keyword="${data}"`;
                                let isquestion =row.isQuestion;       
                                return `<div class="d-flex no-block flex-row">
                                <a data-type="keyword" ${data == '[Hidden]' ? 'href="https://admin.fff.com.vn/login.php" target="top" class="text-muted font-12"' : res}">
                                    <i class="child-hover far fa-search mr-2"></i>
                                    ${ data == '[Hidden]'
                                    ? showLoginModal()
                                    : data  }
                                </a>   ${isquestion == 1 ? '<small class="text-info ml-1 font-13 text-center">?</small>' : ''}
                                <div class="d-none d-md-flex sparkline ml-auto" data-sparkline="[${row.lichsutimkiemtrungbinh}]"></div>
                            </div> `
                            },
                            className: 'parent-hover pr-0',
                            width: '30%',
                        },
                        {
                            title: 'Tìm kiếm',
                            data: 'solantimkiemtrungbinh',
                            render: (data) => numeral(data).format('0,0'),
                            className: 'text-right'

                        },
                        {
                            title: 'Độ khó',
                            data: 'dokho',
                            render: (data) => `<span style="width: 40px" id="score_difficulty" class=" ${data <= 70 ? data <= 30 ? 'badge badge-success' : 'badge badge-warning' : 'badge badge-danger'}">${data <= 70 ? data <= 30 ? 'Dễ' : 'TB' : 'Cao'}</span>`,
                            className: 'text-right'

                        },
                        {
                            title: 'Độ dài',
                            data: 'chieudai',
                            className: 'text-right'

                        },
                        {
                            title: 'Cạnh tranh',
                            data: 'dokho',
                            render: (data) => `<div class="round round-sm ${data <= 70 ? data <= 30 ? 'round-success' : 'round-warning' : 'round-danger'}">${data ? data : 0}</a>`,

                        },
                        {
                            title: 'CPC thấp nhất (đ)',
                            data: (data) => numeral(data.giathaudautrangthapnhat).format('0,0'),
                            className: 'text-right',
                        },
                        {
                            title: 'CPC cao nhất(đ)',
                            data: (data) =>numeral(data.giathaudautrangcaonhat).format('0,0'),
                            className: 'text-right'
                        }
                    ],
                    buttons: [{
                        extend: 'excel',
                        text: excelText,
                        filename: 'fff_com_vn_TuKhoaMoRong'
                    }],
                })
                break;

            default:
                $.ajax(`//localapi.trazk.com/keywords/keywords.php?task=${task}&keywords=${keywords}&isLogin=${isLogin}&lang=${lang}&country=${country}`)

                    .done(function (data) {
                        // console.log(task)
                        // console.log("data+", data);
                        if (data.data == "") {
                            // console.log("ko co data default");
                            $("#" + task).addClass("empty-state");
                            // // $("#das").remove();
                            // $("#KeywordAnalysisOrganicGraph").append("<h1 id='das' style='text-align:center'>Khong co du lieu  can tim</h1>");
                            // $("#KeywordAnalysisPaidGraph--eCharts").hide();
                            // $(".rowKeywordAnalysisPaidGraph").hide();
                            // $("#KeywordAnalysisPaidGraph").hide();
                            // $("#KeywordAnalysisOrganicTable").hide();
                            // $("#KeywordAnalysisPaidTable_wrapper").hide();
                            // $("#KeywordAnalysisPaidTable").hide();
                            // $("#KeywordAnalysisOrganicTable_wrapper").hide();
                            // $("#xyzmnrelative").hide();
                            // $("#KeywordRecommendationsPhraseMatch").hide();
                            $("#xinthuarelative").hide();
                            // $("#KeywordRecommendationsRelated").hide();
                            $("#alert_primary").hide();
                            $("#alert_danger").hide();
                            $(`#${task}`).removeClass('is-loading');

                            // location.reload();

                        } else {
                            // console.log (" is login ",data.data);
                            // let { keywords: resKw } = data;

                            switch (task) {
                                case 'getBidForecast':

                                    // console.log(data)
                                    let {
                                        overview, device
                                    } = data.data;

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
                                        // $("#__count___number_2").html(numeral(average2*impressions).format('0,0'));
                                        $("h1#count_number_3").html(numeral(avg_cpc).format('0,0') + `<sup class="font-gg">đ</sup>`)

                                        $(`#${task}--Position`)
                                            .append(elePosition)
                                            .parent().removeClass('is-loading')

                                        $(`#${task}--CTR`)
                                            .append(eleCTR)
                                            .parent().removeClass('is-loading')

                                        $(`#${task}--CPC`)
                                            .append(eleCPC)
                                            .after(`<div class="ml-auto" id="${task}--chartCPC" style="width:50%;height:100%"></div>`)
                                            .parent().removeClass('is-loading')

                                        $(`#${task}--Click`)
                                            .append(eleClick)
                                            .after(`<div class="ml-auto" id="${task}--chartClick" style="width:50%;height:100%"></div>`)
                                            .parent().removeClass('is-loading')

                                        $(`#${task}--Cost`)
                                            .append(eleCost)
                                            .after(`<div class="mx-auto" id="${task}--chartCost" style="width:100%;height:100%"></div>`)
                                            .parent().removeClass('is-loading')

                                        $(`#${task}--Impression`)
                                            .append(eleImpression)
                                            .after(`<div class="ml-auto" id="${task}--chartImpression" style="width:50%;height:100%"></div>`)
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

                                            let ele = document.getElementById(`${task}--${chartName}`);

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

                                    break;
                                case 'KeywordAnalysisOrganicGraph':
                                    // console.log(task, Data);
                                    // var {
                                    //     Data
                                    // } = JSON.parse(data.data);

                                    // $('#KeywordAnalysisOrganicGraph').prepend('<span class="text_top_chart_header">Top 5 trang SEO tốt nhất từ khoá ”<strong class="font-gg font-17 text-success">' + keywords + '</strong>” trong 3 tháng gần đây</span>');
                                    // // Top 5 trang SEO tốt nhất từ khoá “<strong class="font-gg font-16 text-danger">${keywords}</strong>” trong 3 tháng gần đây
                                    // if (Data && Object.values(Data).length > 0) {
                                    //     // console.log("data", data);
                                    //     // $(".rowKeywordAnalysisOrganicGraph").show();
                                    //     let dataWebsites = {
                                    //         keys: [],
                                    //         series: []
                                    //     };

                                    //     let colors = [' #fd397a', '#0abb87', '#03a9f3', '#5d78ff', '#ffb822']

                                    //     Object.values(Data).forEach((item, index) => {
                                    //         let name, data = [];
                                    //         item.Total[0].forEach(val => {
                                    //             let {
                                    //                 Key,
                                    //                 Value
                                    //             } = val;
                                    //             if (index == 0) {
                                    //                 dataWebsites.keys.push(Key)
                                    //             }
                                    //             name = Object.keys(Data)[index];
                                    //             // console.log("haha:",Object.keys(Data)[index]);
                                    //             data.push(Value.Share);
                                    //         })

                                    //         dataWebsites.series.push({
                                    //             name,
                                    //             data,
                                    //             type: "line",
                                    //             stack: 'trafficShare',
                                    //             itemStyle: {
                                    //                 color: colors[index]
                                    //             },
                                    //             areaStyle: {
                                    //                 opacity: 0.8
                                    //             },
                                    //             smooth: true,
                                    //             // symbol: "circle",
                                    //             // symbolSize: 10,
                                    //             // showSymbol: true,
                                    //             // hoverAnimation: false,
                                    //         })

                                    //     })

                                    //     dataWebsites.series = dataWebsites.series.reverse();

                                    //     $(`#${task}`).removeClass('is-loading');

                                    //     let ele = document.getElementById(`${task}--eCharts`);

                                    //     let myChart = echarts.init(ele, 'light');

                                    //     let option = {
                                    //         tooltip: {
                                    //             trigger: "axis",
                                    //             backgroundColor: 'rgba(255, 255, 255, 1)',
                                    //             borderColor: 'rgba(93,120,255,1)',
                                    //             borderWidth: 1,
                                    //             extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                                    //             formatter: params => {
                                    //                 // console.log('params',params);

                                    //                 if (params.length > 0) {

                                    //                     let {
                                    //                         name
                                    //                     } = params[0];

                                    //                     name = moment(name).format('MMMM YYYY');

                                    //                     let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

                                    //                     params.forEach(param => {

                                    //                         let {
                                    //                             marker,
                                    //                             color,
                                    //                             seriesName,
                                    //                             value
                                    //                         } = param;

                                    //                         value = numeral(value).format('0.00%');

                                    //                         kq += `<div class="text-dark my-1">${marker} ${seriesName} <span class="font-bold" style="color:${color}">${value}</span></div>`
                                    //                     })

                                    //                     return kq;
                                    //                 }
                                    //             },
                                    //         },
                                    //         legend: {

                                    //             top: '7%',
                                    //             align: 'left',
                                    //             // itemGap: 15,
                                    //             data: Object.keys(Data),
                                    //             textStyle: {

                                    //                 fontFamily: 'Arial',
                                    //                 fontSize: 12,
                                    //             }
                                    //         },
                                    //         grid: {
                                    //             // top: 20,
                                    //             // left: '30%',
                                    //             // right: "5%",
                                    //             // bottom: 40,
                                    //             top: '30%'
                                    //         },
                                    //         xAxis: {
                                    //             type: "category",
                                    //             boundaryGap: false,
                                    //             data: dataWebsites.keys,
                                    //             axisLine: {
                                    //                 lineStyle: {
                                    //                     color: "#ccc",
                                    //                 }
                                    //             },
                                    //             axisLabel: {
                                    //                 margin: 10,
                                    //                 textStyle: {
                                    //                     color: "#ccc"
                                    //                 },
                                    //                 fontFamily: 'Arial',
                                    //                 formatter: (value, index) => moment(value).format('MM-YYYY'),

                                    //             },
                                    //             axisPointer: {
                                    //                 lineStyle: {
                                    //                     color: "rgba(93,120,255,1)",
                                    //                     type: "dashed"
                                    //                 }
                                    //             }
                                    //         },
                                    //         yAxis: {
                                    //             type: "value",
                                    //             axisLine: {
                                    //                 show: false
                                    //             },
                                    //             axisTick: {
                                    //                 show: false
                                    //             },
                                    //             axisLabel: {
                                    //                 margin: 10,
                                    //                 textStyle: {
                                    //                     color: "#ccc"
                                    //                 },
                                    //                 fontFamily: 'Arial',
                                    //                 formatter: (value, index) => (value = numeral(value).format("0%")),
                                    //             },
                                    //             splitNumber: 3,
                                    //             splitLine: {
                                    //                 show: true,
                                    //                 lineStyle: {
                                    //                     type: 'dashed',
                                    //                     color: 'rgba(0,0,0,0.1)'
                                    //                 }
                                    //             },
                                    //         },
                                    //         series: dataWebsites.series
                                    //     };
                                    //     myChart.setOption(option);

                                    //     new ResizeSensor(ele, function () {
                                    //         myChart.resize();
                                    //     });
                                    // } else {

                                    //     $('.rowKeywordAnalysisOrganicGraph').hide();
                                    //     $(`#${task}`).removeClass('is-loading');
                                    //     emptyState(`#${task}--eCharts`);
                                    // }

                                    // break;
                                case 'KeywordAnalysisPaidGraph':
                                    // var {
                                    //     Data
                                    // } = JSON.parse(data.data);
                                    // // console.log("1",data.data);
                                    // // console.log("2",{Data});
                                    // // console.log("3",Data);
                                    // $('#KeywordAnalysisPaidGraph').prepend('<span class="text_top_chart_header">Top 5 trang quảng cáo từ khoá ”<strong class="font-gg font-17 text-danger">' + keywords + '</strong>” trả phí qua Google Ads trong 3 tháng gần đây</span>');
                                    // // console.log("Object: ", Object.values(data));
                                    // if (Data && Object.values(Data).length > 0) {
                                    //     // let header = texttop10qctukhoa_chart();
                                    //     // $(`#${task}--header`).html(header);    
                                    //     $(".rowKeywordAnalysisPaidGraph").show();
                                    //     let dataWebsites = {
                                    //         keys: [],
                                    //         series: []
                                    //     };
                                    //     // console.log("asdsda");

                                    //     let colors = ['red', '#0abb87', '#03a9f3', '#5d78ff', '#ffb822'];

                                    //     Object.values(Data).forEach((item, index) => {
                                    //         // console.log("item: ", item, "index: ", index); //item:ngay thang ,index: 0 12345
                                    //         // console.log("item Total 0 :",item.Total[0]);  
                                    //         let name, data = [];
                                    //         item.Total[0].forEach(val => {
                                    //             let {
                                    //                 Key,
                                    //                 Value
                                    //             } = val;
                                    //             if (index == 0) {
                                    //                 dataWebsites.keys.push(Key)
                                    //                 // console.log("Key:", Key); //ngay thang
                                    //                 // console.log("Value:", Value); //ti le % Share
                                    //             }
                                    //             name = Object.keys(Data)[index];
                                    //             data.push(Value.Share);
                                    //         })

                                    //         dataWebsites.series.push({

                                    //             name,
                                    //             data,
                                    //             type: "line",
                                    //             stack: 'trafficShare',
                                    //             areaStyle: {
                                    //                 // opacity: 0.1
                                    //             },
                                    //             lineStyle: {
                                    //                 width: 0
                                    //             },
                                    //             itemStyle: {
                                    //                 color: colors[index]
                                    //             },
                                    //             smooth: true,
                                    //             // symbol: "circle",
                                    //             // symbolSize: 10,
                                    //             // showSymbol: true,
                                    //             // hoverAnimation: false,
                                    //         })

                                    //     })

                                    //     dataWebsites.series = dataWebsites.series.reverse();
                                    //     // console.log(dataWebsites);

                                    //     $(`#${task}`).removeClass('is-loading');

                                    //     let ele = document.getElementById(`${task}--eCharts`);

                                    //     let myChart = echarts.init(ele, 'light');

                                    //     let option = {
                                    //         tooltip: {
                                    //             trigger: "axis",
                                    //             backgroundColor: 'rgba(255, 255, 255, 1)',
                                    //             borderColor: 'rgba(93,120,255,1)',
                                    //             borderWidth: 1,
                                    //             extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
                                    //             formatter: params => {
                                    //                 // console.log('params',params);

                                    //                 if (params.length > 0) {

                                    //                     let {
                                    //                         name
                                    //                     } = params[0];

                                    //                     name = moment(name).format('MMMM YYYY');

                                    //                     let kq = `<div class="text-dark text-capitalize border-bottom pb-1 mb-2">${name}</div>`

                                    //                     params.forEach(param => {

                                    //                         let {
                                    //                             marker,
                                    //                             color,
                                    //                             seriesName,
                                    //                             value
                                    //                         } = param;

                                    //                         value = numeral(value).format('0.00%');

                                    //                         kq += `<div class="text-dark my-1">${marker} ${seriesName} <span class="font-bold" style="color:${color}">${value}</span></div>`
                                    //                     })

                                    //                     return kq;
                                    //                 }
                                    //             },
                                    //         },

                                    //         legend: { //phan nam trên
                                    //             // orient: 'vertical',
                                    //             // left: 'center',
                                    //             top: '7%',
                                    //             align: 'left',
                                    //             // right:'0%',
                                    //             // itemGap: 15,
                                    //             data: Object.keys(Data),
                                    //             // textStyle: {
                                    //             //     // fontFamily: 'Google Sans',
                                    //             //     fontFamily: 'Arial',
                                    //             //     fontSize: 12,
                                    //             // }
                                    //         },
                                    //         grid: { //bieu do
                                    //             // top: 20,
                                    //             // left: '30%',
                                    //             // right: "5%",
                                    //             // bottom: 40,
                                    //             top: '25%'
                                    //         },
                                    //         xAxis: {
                                    //             type: "category",
                                    //             boundaryGap: false,
                                    //             data: dataWebsites.keys,
                                    //             axisLine: {
                                    //                 lineStyle: {
                                    //                     color: "#ccc",
                                    //                 }
                                    //             },
                                    //             axisLabel: {
                                    //                 margin: 10,
                                    //                 textStyle: {
                                    //                     color: "#ccc"
                                    //                 },
                                    //                 fontFamily: 'Arial',
                                    //                 formatter: (value, index) => moment(value).format('MM-YYYY'),

                                    //             },
                                    //             axisPointer: {
                                    //                 lineStyle: {
                                    //                     color: "rgba(93,120,255,1)",
                                    //                     type: "dashed"
                                    //                 }
                                    //             }
                                    //         },
                                    //         yAxis: {
                                    //             type: "value",
                                    //             axisLine: {
                                    //                 show: false
                                    //             },
                                    //             axisTick: {
                                    //                 show: false
                                    //             },
                                    //             axisLabel: {
                                    //                 margin: 10,
                                    //                 textStyle: {
                                    //                     color: "#ccc"
                                    //                 },
                                    //                 fontFamily: 'Arial',
                                    //                 formatter: (value, index) => (value = numeral(value).format("0%")),
                                    //             },
                                    //             splitLine: {
                                    //                 show: true,
                                    //                 lineStyle: {
                                    //                     color: 'rgba(0,0,0,0.1)'
                                    //                 }
                                    //             },
                                    //         },
                                    //         series: dataWebsites.series
                                    //     };
                                    //     myChart.setOption(option);

                                    //     new ResizeSensor(ele, function () {
                                    //         myChart.resize();
                                    //     });
                                    // } else { //ko co data 
                                    //     // console.log("ko co data");
                                    //     $(`#${task}`).removeClass('is-loading');
                                    //     emptyState(`#${task}--eCharts`);
                                    //     // $("#KeywordAnalysisPaidGraph").append("<p>Khong co du lieu  can tim</p>");
                                    //     // //dóng char
                                    //     // $("#KeywordAnalysisPaidGraph--eCharts").hide();
                                    //     // $(".dataTables_scroll").hide();
                                    //     $(".rowKeywordAnalysisPaidGraph").hide();
                                    // }

                                    // break;
                                default:
                                    break;
                            } //switch case

                        }

                    })
                break;
        }

    }

    const renderMobilePCTraffic = (data) => {

        let wrapper = $('#getKeywordsSuggestionV1--eCharts_wrapper');
        let ele = document.getElementById('getKeywordsSuggestionV1--eCharts');

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
                    // console.log('params',params);

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

    const doMainRequest = () => {

        // let task = 'getKeywordsSuggestionV1';       
        getKeywords(() => {
            renderChart('getKeywordsSuggestionV1')
            renderChart('getKeywordsSuggestionV2')
            renderChart('getKeywordsSuggestionV2_Main')
            renderChart('getKeywordsSuggestionV2_Related')
            renderChart('getKeywordsSuggestionV2_Widen')
            renderChart('getBidForecast');
            renderChart('KeywordAnalysisOrganicGraph');
            renderChart('KeywordAnalysisOrganicTable');
            renderChart('KeywordAnalysisPaidGraph');
            renderChart('KeywordAnalysisPaidTable');
            renderChart('KeywordRecommendationsPhraseMatch');
            renderChart('KeywordRecommendationsRelated');
        });
    }

    const submitKeyword = () => {
        keywords = $('.iptKeyword').val();
        // var lang = $("#country").countrySelect("getSelectedCountryData").iso2;
        var lang = $('select.selectLanguage option:selected').val();
        var country = $('select.selectCountry option:selected').val();
        if (keywords == '') {
            Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
        } else {
            $.get("//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=" +userToken +"&toolName=keywords", function( data1 ) {
              var x =JSON.parse(data1)           
             
                if (x.data.todayUsed>4) {
                    showUpVip();                             
                }            
                else {
                    var newURL = "index.php?view=keywords&action=keywords-sem&keyword=" + keywords + "&language=" + lang +'&country='+country;
                    $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`,post,function(res){
                        console.log(res);           
                        
                     })
                    
                    window.location.href = newURL;   
                }
              });         
        }
    }      
    doMainRequest();


    const clickPhantichSEM = (type, input = $("#iptKeyword").val(), lang = 'vn') => {

        var newURL = '';
        // if (type == "keyword"){
        //     console.log("keyword");

        //    if (input){
        //        console.log("asa");

        //       if (isLogin == "false"){
        //          newURL ='https://fff.com.vn/ket-qua-phan-tich-tu-khoa/' + input +'/'+lang+'/';
        //       }else{
        newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis2&action=result&keyword=' + input + '&language=' + lang;
        //       }
        //    }else{
        //        console.log("wue");
        //       if (isLogin == "false"){
        //          newURL ='https://fff.com.vn/cong-cu-phan-tich-tu-khoa-fff-keywords-tools/';
        //       }else{
        //          newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis&action=index';
        //       }
        //    }
        // }
        top.window.location.href = newURL;
        return false;
    }
    const clickPhantichSEO = (type, input = $("#iptKeyword").val(), lang = 'vn') => {
        var newURL = '';
        newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis3&action=result&keyword=' + input + '&language=' + lang;
        top.window.location.href = newURL;
        return false;
    }

    const clickBack = (type, input = $("#iptKeyword").val(), lang = 'vn') => {
        var newURl = '';
        newURl = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis&action=result&keyword=' + input + '&language=' + lang;
        window.location.href = newURl;
    }
    const clickgoiytagtrangngoai = (type, lang = 'vn') => {
        var newURL = '';
        newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis&action=result&keyword=&language=' + lang;
        window.location.href = newURL;
    }
    const clickptsemtrangngoai = (type, lang = 'vn') => {
        var newURL = '';
        newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis2&action=result&keyword=&language=' + lang;
        window.location.href = newURL;
    }
    const clickptseotrangngoai = (type, lang = 'vn') => {
        var newURL = '';
        newURL =
            window.location.href = newURL;
    }
    const clicktagtren = () => {
        var newURL = 'index.php?view=keywords&action=keyword-seo&keyword=' + keywords;
        window.location.href = newURL;
    }

    const clicksemtren = () => {
        var newURL = 'index.php?view=keywords&action=keywords-sem&keyword=' + keywords;
        window.location.href = newURL;
    }
    const clickseotren = () => {
        var newURL = '';
        newURL = 'index.php?view=keywords&action=keywords-seo&keyword=' + keywords;
        window.location.href = newURL;
    }

    function clickBackIcon() {
        var newURL = "";
        newURL = "index.php?view=keywords&action=index";
        window.location.href = newURL;
    }

    $('.iptKeyword').keypress(event => (event.which == 13) ? submitKeyword() : null); //bắt event enter
    $('.iconBackBtn').click(function () {
        clickBackIcon();
    })
    $('.btnSubmitKeyword').click(() => submitKeyword());
    $('#show-seo').click(() =>{
        var newURL = "index.php?view=keywords&action=keywords-seo&keyword=" + keywords + "&language=" + lang + '&country=' + country;        
         window.location.href=newURL
    });

  


    $("#__goiytukhoa").click(() => clickgoiytagtrangngoai());
    $('#phantichsem').click(() => clickptsemtrangngoai());
    $('#phantichseo').click(() => clickptseotrangngoai())
    $('#tag_tren').click(() => clicktagtren());
    $('#sem_tren').click(() => clicksemtren());
    $('#seo_tren').click(() => clickseotren());
    // ------------analysis 2-------------------------  
    // --------point--------------------
    // $.ajax({
    //         url: '//localapi.trazk.com/keywords/keywords.php?task=getBidForecast&keywords=ban%20oto&isLogin=false&lang=' + lang,
    //     })
    //     .done(res => {
    //         //   console.log("res",res.data.overview.score);
    //         if (res.data.overview.score < 4) {
    //             $(".point_threat").html("L");
    //         } else if (res.data.overview.score >= 4 && res.data.overview.score < 10) {
    //             $(".point_threat").html("M");
    //         } else {
    //             $(".point_threat").html("H");
    //         }
    //         $("#_competitor").text(res.data.overview.clicks);
    //         $("#_cpc").text(res.data.overview.avg_cpc);
    //         $("#_impression").text(res.data.overview.impressions);
    //     })
    // //  ----template ads------------------
    // var query1 = $(".iptKeyword").val();
    // var load = $.ajax({

    //         url: "//localapi.trazk.com/serp/index.php?task=getAdwordsResults&q=" + query1,
    //         dataType: 'json',
    //     })

    //     .done(function (res) {
    //         console.log("getAdwordsResults", res);
    //         if (res.data == "") {
    //             $("#template_ads").hide();
    //         } else {
    //             var empty = "";
    //             res.data.topAds.forEach((key, index) => {
    //                 // console.log('key',key.title);
    //                 // console.log('index',index);
    //                 // console.log(res.data.topAds);
    //                 empty += ` <div class="col-12 col-lg-6">
    //             <div class="row">
    //                 <div class="col-12 col-lg-12 "><div class="cards-ads" style=""><div class="title_ads"><span class="round round-sm align-self-center round-success" style="margin-left: -28px;
    //                 margin-bottom: -22px;">${index+1}</span>${key.title}</div><div class="title_small_ads mt-1"><span class="_Ad">Ad </span><span class="_domains_ads">${key.url}</span></div><span class="_description mt-1">${key.description}</span>
    //      </div> </div>
    //      </div>
    //      </div>`
    //             })
    //             $("#template_ads").append(empty);
    //         }
    //     })
    //     .fail(res => {
    //         console.log("getAdwordsResults that bai");

    //     })
    // ////////// analysis ---3///////////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////////////////////
    // // -------------------------template---1--KeywordAnalysisOrganicGraph--------------- 
    // //spark line:bieu do xanh nho
    // $.ajax({
    //         url: '//localapi.trazk.com/keywords/keywords.php?task=getKeywordsSuggestionV1&limit=1&keywords=' + keywords + '&isLogin=true&lang=' + lang + '&_=1568798595678'
    //     })
    //     .done(res => {
    //         var empty1 = "";
    //         res.data.keywords.forEach(key => {
    //             // console.log("abcde:",key.lichsutimkiemtrungbinh);
    //             empty1 += `<div class="sparkline chart_volumn" id="_chart1" data-sparkline="[${key.lichsutimkiemtrungbinh}]"></div>`
    //             // $("#_count__number1").html(numeral(key.solantimkiemtrungbinh).format('0,0,0'));
    //         })
    //         $("#number_volumn").append(empty1);
    //         // $(".count___number").html(key.solantimkiemtrungbinh);
    //         renderSparkline('number_volumn');
    //     })
    // // -------------------------template---2--KeywordAnalysisOrganicGraph--------------- 
    // let total = 0,
    //     total2 = 0,
    //     total3;
    // let average1 = 0;
    // let average2 = 0;
    // let average3 = 0;
    // $.ajax({
    //         url: '//localapi.trazk.com/keywords/keywords.v1.php?task=KeywordAnalysisTrafficShareOverTime&keywords=' + keywords + '&isLogin=true&lang=' + lang + '&limit=1',
    //         dataType: 'json'
    //     })

    //     .done(res => {
    //         var empty = '';
    //         if (res.data.Data) {
    //             var a = [];
    //             // console.log(Object.values(res.data.Data)[0].TotalVisits); //Object.values:"TotalVisits","OrganicShare","PaidShare"
    //             for (let key in res.data.Data) {
    //                 a.push(numeral(res.data.Data[key].TotalVisits).format('0')); //Push: thêm element vào cuối array          
    //                 // console.log(res.data.Data[key].TotalVisits);
    //                 total += res.data.Data[key].TotalVisits;
    //                 total2 += res.data.Data[key].OrganicShare;
    //                 total3 = res.data.Data[key].PaidShare;
    //             }
    //             average1 += total / Object.keys(res.data.Data).length;
    //             average2 += total2 / Object.keys(res.data.Data).length;
    //             average3 += total3 / Object.keys(res.data.Data).length;
    //         }

    //         // _.each(res.data.Data, function (item) {
    //         empty += `<div class="sparkline chart_volumn" id="_chart_2" data-sparkline="[${a}]"></div>`;
    //         // console.log("sssa",numeral(item.TotalVisits).format(''));
    //         // })

    //         $(".__organic").append(`<span class='organic_title'>Organic ${numeral(average2).format('0.00')}</span>`);
    //         $(".__paid").append(`<span class="paid_title">Paid ${numeral(average3).format('0.00')}</span>`);

    //         $("#__botay").append(empty);
    //         renderSparkline('__botay');

    //     })

    // //     let total = 0,
    // //     average = 0;
    // //   if (data.Data) {
    // //   for (let key in data.Data) {
    // //   total += data.Data[key].TotalVisits;
    // //   }

    // //   average = total / Object.keys(data.Data);

    // //   }

    // // -------------------------------------------------------------2b--------------------------------------------------------------
    $.ajax({
            url: '//localapi.trazk.com/keywords/keywords.v1.php?task=getKeywordsSuggestionV1&keywords=' + keywords + '&isLogin=true&lang=' + lang + "&country="+country,
            dataType: 'json'
        })
        .done(res => {
            let ele = document.getElementById(`getKeywordsSuggestionV1_2`);
            let myChart = echarts.init(ele, 'light');
            console.log('do kho', res);
            // console.log(res.data.keywords[0].dokho);
            if (res.data.keywords[0].dokho ==null) {
                // console.log ("thap");
                // $("._rating").html("Thấp");
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'><span class='hard_score_ text-muted font-weight-bold'></span></p>");
                // $("._rating").css({"color": "lime","padding-left":"28px"});
            } else if (res.data.keywords[0].dokho >= 30 && res.data.keywords[0].dokho < 70) {
                // $("._rating").html("Trung bình");
                // console.log ("TB");
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_ text-muted font-weight-bold'>trung bình</span></p>");
                // $("._rating").css("color","#1e90ff");

            } else if (res.data.keywords[0].dokho <30 ) {
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_ text-muted font-weight-bold'>thấp</span></p>");
            } else {
                // console.log ("CAO");
                $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_score_ font-weight-bold text-muted'>cao</span></p>");
                // $("._rating").html("Cao");
                // $("._rating").css({"color":"#ff4500","padding-left":"28px"});
            }

            $("#giadau_cao").html(numeral(res.data.keywords[0].giathaudautrangcaonhat).format('0,0'));
            $("#giadau_thap").html(numeral(res.data.keywords[0].giathaudautrangthapnhat).format('0,0'));
            $("#giadau_trungbinh").html(numeral(res.data.keywords[0].solantimkiemtrungbinh).format('0,0'));

            $("#giadt_cao").append('<div class="font-14 font-weight-bold text-muted font-gg pb-4">Giá đầu thầu trang cao nhất</div><div class="display-8 font-gg">' + numeral(res.data.keywords[0].giathaudautrangcaonhat).format('0,0') + '</div><div class="mt-2"><div class="progress w-70 m-auto pr_reponsive" style="height:9px"><div class="progress-bar bg-success" style="height: 20px; width:' + ((numeral(res.data.keywords[0].giathaudautrangcaonhat).format('0.0')) / 1000) + '%!important' + '" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="1000000000"></div></div></div>');
            $("#giadt_thap").append('<div class="font-14 font-weight-bold text-muted font-gg pb-4">Giá đầu thầu trang thấp nhất</div><div class="display-8 font-gg">' + numeral(res.data.keywords[0].giathaudautrangthapnhat).format('0,0') + '</div><div class="mt-2"><div class="progress w-70 m-auto pr_reponsive" style="height:9px"><div class="progress-bar bg-danger" style="height: 20px; width:' + ((numeral(res.data.keywords[0].giathaudautrangthapnhat).format('0.0')) / 1000) + '%!important' + '" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="1000000000"></div></div></div>');
            $("#solantk_tb").append('<div class="font-14 font-weight-bold text-muted font-gg pb-4">Số lần tìm kiếm trung bình</div><div class="display-8 fon20-gg">' + numeral(res.data.keywords[0].solantimkiemtrungbinh).format('0,0') + '</div><div class="mt-2"><div class="progress w-70 m-auto pr_reponsive" style="height:9px"><div class="progress-bar bg-warning" style="height: 20px; width:' + ((numeral(res.data.keywords[0].solantimkiemtrungbinh).format('0.0')) / 100) + '%!important' + '" role="progressbar" aria-valuenow="71.6667" aria-valuemin="0" aria-valuemax="1000000000"></div></div></div>');
            //  $("#getKeywordsSuggestionV1_2").append("<p class='font-weight-bold text-muted dokho__chart' id='dokho__chart'>Độ khó <span class='hard_sc20re_'>Cao</span></p>");

            console.log(res.data.keywords[0].dokho)
            console.log(ele)    
            let option = {
                series: [{
                    name: 'Điểm',
                    type: 'gauge',
                    // radius: ["50%", "80%"],
                    radius: '100%',
                    center: ["50%", "55%"],
                    min: 0,
                    max: 100,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitNumber: 4,
                    title: {
                        textStyle: {
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#6c757d',
                            shadowColor: '#fff',
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        // backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        // borderColor: '#fff',
                        // shadowColor : '#fff', 
                        // shadowBlur: 5,
                        // offsetCenter: [0, '50%'],        
                        // textStyle: {        
                        //     fontWeight: 'bolder',
                        //     color: '#fff'
                        // }  
                    },
                    data: [{
                        value: `${(res.data.keywords[0].dokho==null) ? 0 : res.data.keywords[0].dokho}`,
                        // name: 'Điểm',

                    }],
                    axisLine: {
                        lineStyle: {
                            // color: [[0.09, '#f2d643'],[0.82, '#eb8146'],[1, '#d95850']],
                            // color: [[0.09, '#FCB040'],[0.82, '#F1592A'],[1, '#BF1E2E']],
                            // color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#d63031']],
                            // color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#EA2027']],
                            color: [
                                [0.3, '#AEFDCA'],
                                [0.7, '#48CD92'],
                                [1, '#fd397a']
                            ],
                            width: 30,
                            // shadowColor : '#fff',  
                            // shadowBlur: 10
                        }
                    },
                }]
            };                
             myChart.setOption(option);
            new ResizeSensor(ele, function () {
                // console.log('324');
                
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
            return myChart;
        })

    // // ########################################################################2b##################################

    // // -------------------------template---3--KeywordAnalysisOrganicGraph--------------- 


})









//scroll top
$('a#backtop').click(function (event) {
    $('html, body').animate({
        scrollTop: 60,
    }, 700);
    event.preventDefault();

});

$("#backtop").removeClass("backtop");
$("#backtop").addClass("backtop-scroll");

$(window).on('scroll', function () {
    // console.log(window.scrollTop);
    if ($(this).scrollTop() > 1000) {

        $("#backtop").removeClass("backtop-scroll");
        $("#backtop").addClass("backtop");
    } else {
        $("#backtop").removeClass("backtop");
        $("#backtop").addClass("backtop-scroll");
    }
})