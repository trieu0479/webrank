// $(document).ready(() => {
//     loadpage();
//     function loadpage(){
//         var loadpage = `//localapi.trazk.com/pagespeed/index.php?task=getLastAllTestPageSpeed&userToken=${userToken}&limit=30`
//         $.getJSON(loadpage, function (res) {
//           var website = res.data
//           console.log(website)
//           var web = ''
//           website.forEach(ele => {
//             web += `
//               <div class="changeURL">
//                 <div class="p-20">
//                     <a href="?websiteUrl=${ele.url}&view=pagespeed&action=result">
//                         <div class="img">
//                             <img src="https://www.google.com/s2/favicons?domain=${ele.url}" alt="">
//                         </div>
//                         <p>${ele.rootUrl}</p>
//                     </a>
//                     <div class="main-average w-100">
                        
                        
//                     </div>
//                 </div>
//               </div>
//             `
//           });
//           $("#getSiteWeb").append(web)
//         });
//     }
// });
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
        previous: '<i class="fal fa-angle-double-left"></i>',
        next: '<i class="fal fa-angle-double-right"></i>'
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
};
$(document).ready(function () {

    initDatatable(
        'getSiteWeb', {
            ajax: {
                url: `//localapi.trazk.com/pagespeed/index.php?task=getLastMyTestPageSpeed&userToken=${userToken}`,
                dataSrc: function (res) {
                    // trId: ele.blockType
                    var columns = [];
                    var stt = 1;
                    if(res.data == '' || res.data == null){
                        $('.SiteWeb').addClass('d-none')
                    }else{
                        $.each(res.data, function (k, v) {
                            var output = {};
                            domainWithIcon = `
                                <div>
                                    <img class='mr-2' src='https://www.google.com/s2/favicons?domain=${v.rootUrl}'>
                                    ${v.rootUrl}
                                </div>
                                `;
                            output.rootUrl = domainWithIcon;
                            output.pcScore = v.pcScore;
                            output.mobileScore = v.mobileScore;
                            output.insertTime = v.insertTime;
                            output.url = v.url;
                            output.stt = stt;
                            trId: "fb-" + k;
                            stt += 1;
                            columns.push(output);

                        })
                    }
                    return columns;
                },
            },
            columns: [{
                    title: "STT",
                    "data": "stt"
                },
                {
                    title: "Time", 
                    "data": data => {
                        return moment(data.insertTime,"YYYY-MM-DD h:mm:ss").format('LT, DD/MM/YYYY');
                    }
                },
                {
                    title: "Website",
                    "data": data => {
                        return `<div style="white-space: nowrap">${data.rootUrl}</div>`
                    }
                },
                {
                    title: "url",
                    "data": data => {
                        return `
                            <a href="?websiteUrl=${data.url}&view=pagespeed&action=result">${data.url}</a>
                        `
                    }
                },
                {
                    title: "Mobile  Score",
                    "data": data => {
                        return `
                        <div class="average display-6 font-gg" style="width: 150px;">
                            <div class="d-flex w-100 m-auto no-block">
                                <div class="font-13 text-muted font-gg pb-1">
                                    Mobi 
                                </div>
                                <div class="ml-auto font-13 text-muted font-gg">
                                ${data.mobileScore}%
                                </div>
                            </div>
                            <div class="progress w-100 m-auto" >
                                <div class="progress-bar bg-info" style="height: 8px; width: ${data.mobileScore}%;" role="progressbar" aria-valuenow="${data.mobileScore}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> 
                        </div>
                        `
                    }
                },
                {
                    title: "PC  Score",
                    "data": data => {
                        return `
                        <div class="average display-6 font-gg" style="width: 150px;">
                            <div class="d-flex w-100 m-auto no-block">
                                <div class="font-13 text-muted font-gg pb-1">
                                    Pc
                                </div>
                                <div class="ml-auto font-13 text-muted font-gg">
                                ${data.pcScore}%
                                </div>
                            </div>
                            <div class="progress w-100 m-auto" >
                                <div class="progress-bar bg-success" style="height: 8px; width: ${data.pcScore}%;" role="progressbar" aria-valuenow="${data.pcScore}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> 
                        </div>
                        `
                    }
                },
            ],
            "ordering": true,
            language,
            info: false,
            autoWidth: false,
            rowId: 'trId',
            // searching: false,
            "scrollX": true,
            // scrollY: '350px', 
            // scrollCollapse: true,
            // paging: false,
            // responsive: true,
            processing: true,
            pageLength: 30,
            "lengthChange": false,
            initComplete: function (settings, json) {
                $(`#getSiteWeb`).attr('style', 'margin-top:0!important')
                    .find('thead').addClass('bg-primary-2')
                    .find('th').each(function (i) {
                        $(this).addClass('text-dark text-left font-gg border-0 font-11')
                    });
                $('table.dataTable thead').attr('style', 'text-align: left!important; text-transform: uppercase;')
                $('table.dataTable thead .sorting_asc').attr('style', 'padding: 0 10px !important;white-space: nowrap;')
                // $('table.dataTable thead .sorting').attr('style', '')
                $('.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td').attr('style', 'padding: 10px 18px')
            }
        }
    )
})