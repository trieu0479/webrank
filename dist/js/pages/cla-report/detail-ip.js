function setLocalStorage(name,value) {
    localStorage.setItem(name, value);
}
  
function getLocalStorage(name) {
return localStorage.getItem(name); 
}

async function getIpInformation(ip) {
    $.get(`//localapi.trazk.com/fff/ip.php?task=getIpInformation&ip=${ip}`).then(data => {
        data = JSON.parse(data);
        // let val = data.data;
        // $(".infoIP").text("Thông Tin IP : " + val.ip);
        // $(".location").html(`
        // <img class="mr-3" src="../../assets/images/${val.country_code}.svg" alt="" width="50px" height="42px">
        // ${val.country_name}, ${val.city}
        // `)


    })
}

async function getIpScore(ip) {
    await $.get(`//localapi.trazk.com/fff/ip.php?task=getIpScore&ip=${ip}`).then(data => {
        data = JSON.parse(data); 

        let score = data.data.score; 
        score = numeral(score).format("0");  

        let result = "";  
        
        if(score <= 95)
            result = `<span id="ketqua" class="px-3 py-1 text-white font-gg font-13 font-weight-bold bg-success rounded-pill">BÌNH THƯỜNG.</span>`
        else if(score == 100)
            result =  `là <span id="ketqua" class="px-3 py-1 text-white font-gg font-13 font-weight-bold rounded-pill" style="background-color: #EA2027">VPN - Proxy.</span>`
        else
            result =  `<span id="ketqua" class="bg-danger px-3 py-1 text-white font-gg font-13 font-weight-bold rounded-pill">HOẠT ĐỘNG NHIỀU.</span>`

        $(".result").html(`Theo 3F, chúng tôi đề xuất IP này ${result}`);  

        if(!getLocalStorage("FirstInDetailIP")){ 
            var info = new Anno([{
                target: '#ketqua',
                content: 'Đây là kết quả 3F đo được.',
                position: "center-right",
                buttons: [{
                    text: 'Tiếp theo',
                    position: "left"
                }]
            },
            {
                target  : '#block-ip',
                position: 'center-right',
                content : "Nếu kết quả 3F đo được không phải BÌNH THƯỜNG thì bạn có thể chặn IP này nếu bạn muốn.",
                buttons: [{
                    text: 'Đóng',
                    position: "left"
                }]
            }]) 

            info.show();

            $("#ketqua").css({
                "width": "auto",
                "height": "auto", 
            });

            setLocalStorage("FirstInDetailIP",true) 
        }

        let ele = document.getElementById("getIpScore");

        let myChart = echarts.init(ele, "light");

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
                title : {
                    textStyle: {     
                        fontWeight: 'bolder',
                        fontSize: 14, 
                        color: '#6c757d',
                        shadowColor : '#fff',
                        shadowBlur: 10
                    }
                },
                detail : {
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
                    value: score,
                    name: 'Điểm',
                }], 
                axisLine: {           
                    lineStyle: {        
                        // color: [[0.09, '#f2d643'],[0.82, '#eb8146'],[1, '#d95850']],
                        // color: [[0.09, '#FCB040'],[0.82, '#F1592A'],[1, '#BF1E2E']],
                        // color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#d63031']],
                        // color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#EA2027']],
                        color: [[0.09, '#AEFDCA'],[0.82, '#48CD92'],[1, '#fd397a']],
                        width: 30,
                        // shadowColor : '#fff',  
                        // shadowBlur: 10
                    }
                },
            }]
        };

        myChart.setOption(option); 


        new ResizeSensor($(`#getIpScore`), function () {
            myChart.resize();
            setTimeout(function () {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }, 1000);
        });
 
    })

    await $("#getIpScore").removeClass("is-loading");
} 


async function getIpHistory(userToken, ip) {
    
    $.get(`//localapi.trazk.com/cla/index.php?task=getIpHistory&userToken=${userToken}&limit=20&ip=${ip}`).then(data => {
        data = JSON.parse(data);   
        let history = data.data.history;
        let totalRecord = data.data.totalRecord;
        $(".click-all").html(`<img class="mr-3" src="../../assets/images/click.svg" alt="" width="20px">` + totalRecord.value);
        $(".all-website").html(`Truy Cập Website Của Toàn Hệ Thống với <span class="rounded-pill px-3 py-1 text-white font-weight-bold bg-danger ml-auto">${totalRecord.value} Click</span>`)

        let status = history[0].status;
        if(status == -2){
            $("#block-ip").html(`<i class="fa fa-check mr-2"></i>Mở chặn IP này`);
            $("#block-ip").removeClass("btn-outline-danger").addClass("btn-outline-success")
        }
 

        $("#block-ip").removeClass("d-none");
   

    })
}

async function getIpHistoryAnAccount(userToken, cid, ip) {
    $.get(`//localapi.trazk.com/cla/index.php?task=getIpHistoryAnAccount&userToken=${userToken}&limit=20&cid=${cid}&ip=${ip}`).then(data => {
        data = JSON.parse(data);  

        let history = data.data.history;
        let totalRecord = data.data.totalRecord;

        let ip = history[0].ip;
        let country = history[0].country;
        let city = history[0].city;
        let check = history[0].is_virtual_click;
        let network = history[0].network_name;
        let os = history[0].os;
        let network_connection_type = history[0].network_connection_type;
        let device = history[0].device;
        let time = history[0].created;

        (device == "Computer") ? device = `<i class="fad fa-laptop mr-3" style="color: #5ca5c3"></i> Máy Tính` : (device == "Phone") ?
        device = `<i class="ml-1 fas fa-mobile-alt mr-3 font-15" style="color: #5ca5c3"></i>Di Động` :
        device = `<img class="mr-2" src="../../assets/images/no.svg" alt="" width="15px"> Unknown`

        let OS = "";
        
        (os.indexOf("Windows") == 0) ? OS = `<img class="mr-2" src="../../assets/images/windows.svg" alt="" width="15px"> ${os}`:
        (os.indexOf("Android") == 0) ? OS = `<img class="mr-2" src="../../assets/images/android.svg" alt="" width="20px"> ${os}`:
        (os.indexOf("Unknown OS") == 0) ? OS = `<img class="mr-2" src="../../assets/images/no.svg" alt="" width="15px"> ${os}` :
        OS = `<img class="mr-2" src="../../assets/images/apple.svg" alt="" width="20px"> ${os}` 

        // (network == "VNPT") ? network = `<span class="font-gg font-14 font-weight-bold" style="color: #0063AE;">VNPT</span>`:
        // (network == "VIETTEL") ? network = `<span class="font-gg font-14 font-weight-bold" style="color: #008D88;">VIETTEL</span>` :
        // (network == "FPT") ? network = `<span class="font-gg font-14 font-weight-bold" style="color: #EC6D21;">FPT</span>` :
        // (network == "MOBIFONE") ? network = `<span class="font-gg font-14 font-weight-bold" style="color: #E71B23;">MOBIFONE</span>` :
        // (network == "VIETNAMMOBILE") ? network = `<span class="font-gg font-14 font-weight-bold" style="color: #F85E00;">VIETNAMMOBILE</span>` :
        // (network == "UNKNOWN") ? network = `<span class="font-gg font-14 font-weight-bold text-muted" style="">UNKNOWN</span>` : network = `<span class="font-gg font-14 font-weight-bold" style="color: #009DDE;">VINAPHONE</span>`;


        if (check == 0)
            check = `Hợp lệ`;
        else if (check == -1)
            check = `Click ảo`;
        else
            check = `Nghi vấn`;

        // (network_connection_type == "3G") ? network_connection_type = `<img src="./assets/images/3G.png" class="bg-white" width="20px"/>`: network_connection_type = `<img src="./assets/images/WIFI.png"/>`
        (network_connection_type == "3G") ? network_connection_type = `3G`: network_connection_type = `WIFI`


        $(".infoIP").text("Thông Tin IP : " + ip);
        $(".location").html(`
        <img class="mr-3" src="../../assets/images/${country}.svg" alt="" width="50px" height="42px">
        ${country}, ${city}
        `)


        $(".os").html(OS)
        $(".device").html(device)  
        $(".browser").html(`<img class="mr-3" src="../../assets/images/chrome.svg" alt="" width="15px">${history[0].browser}`)
        $(".network_connection_type").html(`<img class="mr-3" src="../../assets/images/connect.svg" alt="" width="15px">` + network_connection_type);
          $(".network_name").html(`<img class="mr-3" src="../../assets/images/network.svg" alt="" width="15px">` + network)
        $(".is_virtual_click").html(`<img class="mr-3" src="../../assets/images/eye.svg" alt="" width="20px">` + check) 
        $(".click-your-web").html(`<img class="mr-2" src="../../assets/images/click.svg" alt="" width="20px">` + totalRecord.value);
        $(".time").html(`<img class="mr-3" src="../../assets/images/time.svg" alt="" width="15px">` + moment(time).format("h:mm DD/MM"));

        $(".your-website").html(`Truy Cập Website Của Bạn Với <span class="rounded-pill px-3 py-1 text-white font-weight-bold bg-success ml-auto">${totalRecord.value} Click</span>`)
    })
}
 

$(document).ready(() => {

  
    if (cid != "" && cid != null) { 
        let index = window.location.search.indexOf("ip=");
        let ip = window.location.search.slice(index + 3)

        // getIpInformation(ip);
        getIpScore(ip);
        getIpHistory(userToken,ip);
        getIpHistoryAnAccount(userToken, cid, ip);
        
        
        $("#block-ip").click(async function (){
            if($(this).text() == "Chặn IP Này"){    

                $(this).html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`); 

                let content = `<table class="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col" class="col-6 text-left font-gg font-12 font-weight-bold">STT</th>
                        <th scope="col" class="col-6 text-right font-gg font-12 font-weight-bold">Tên Chiến Dịch</th> 
                    </tr>
                </thead>
                <tbody class="scrollbar" style="height:150px">`;            


                let sumcampaign = 0;
                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=blockIpToAllCampaigns&userToken=${userToken}&ip=${ip}&cid=${cid}&blockType=CLICKMANUALLY`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);  
                    data.data.forEach((ele,index) => {
                        sumcampaign ++;
                        content += ` <tr>
                                        <td class="col-6 text-left font-gg font-13">${sumcampaign}</td>
                                        <td class="col-6 text-right pr-4 font-gg font-13">${ele.campaignName}</td> 
                                    </tr>`
                    })

                    content += `</tbody></table>`
                })    

                // Chặn thành công 115.79.4.128 vào tổng 11 chiến dịch: 
                $(this).html(`<i class="fa fa-check mr-2"></i>Mở chặn IP này`);
                $(this).removeClass("btn-outline-danger").addClass("btn-outline-success")
                $(".detailTestCLA").removeClass("d-none");
                Swal.fire({
                    type: "success",
                    title: 'Hoàn tất chặn IP.', 
                    html: `
                        <div class="font-gg font-weight-bold text-muted">Chặn thành công ip <span class="text-info font-gg font-weight-bold">${ip}</span>
                            vào tổng <span class="text-danger font-gg font-weight-bold">${sumcampaign}</span> chiến dịch: 
                        </div>
                        <div class="m-auto" style="width: 365px">${content}</div>
                    `, 
                    showCloseButton: true,
                    showCancelButton: false,
                    // showConfirmButton: false,
                    confirmButtonText: 'OK',
                    focusConfirm: false,
                    padding: "3em",
                    width: "600px",
                    position: "top", 
                    onOpen: () => {
                        $(".scrollbar").perfectScrollbar(); 
                    },
                    preConfirm: () => { 
                    }
                }) 

            } else {

                $(this).html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`);

                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=unblockIpAllCampaigns&userToken=${userToken}&cid=${cid}&ip=${ip}&blockType=CLICKMANUALLY&ipKey=`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data); 
                })     

                $(this).html(`<i class="fad fa-ban mr-2 font-16"></i>Chặn IP Này`);
                $(this).removeClass("btn-outline-success").addClass("btn-outline-danger")
                $(".detailTestCLA").addClass("d-none");
                Swal.fire({
                    type: "success",
                    title: 'Hoàn tất chặn IP.', 
                    html: `<div class="font-gg font-weight-bold text-muted">Mở chặn thành công ip <span class="text-info font-gg font-weight-bold">${ip}</span> trên các chiến dịch khóa</div>`,
                    showCloseButton: true,
                    showCancelButton: false,
                    // showConfirmButton: false,
                    confirmButtonText: 'OK',
                    focusConfirm: false,
                    padding: "3em",
                    width: "500px",
                    position: "top", 
                    preConfirm: () => { 
                    }
                }) 
            }
        })


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
                previous: 'Sau',
                next: 'Trước'
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
            'getIpHistoryAnAccount', {
                ajax: {
                    url: `//localapi.trazk.com/cla/index.php?task=getIpHistoryAnAccount&userToken=${userToken}&limit=20&cid=${cid}&ip=${ip}`,
                    dataSrc: (json) => { 
                        // console.log(json.data)
                        if(json.data.history != null)
                            return json.data.history;
                        else
                            return [];
                    },
                },
                drawCallback: function (settings) {
                    $('.getIpHistoryAnAccount-container').removeClass('is-loading').unblock();
                    $('.getIpHistoryAnAccount-container').find('.fa-spin').removeClass('fa-spin');
                },
                columns: [
                    {
                        title: 'Thời gian',
                        data: data => `<div class="text-left">${moment(data.created).format("h:mm DD/MM")}</div>`
                    }, 
                    // {
                    //     title: 'Lần Click',
                    //     data: data => `<div class="text-left pl-3">${data.click}</div>`
                    // }, 
                    // {
                    //     title: 'Nhận diện',
                    //     data: data => `<div class="text-left pl-3" style="width: 100px">${(data.is_virtual_click == 0) ? `<span style="background-color: #1bbc9b; padding: 5px 12px" class="text-white rounded-pill font-11 font-gg font-weight-bold">Hợp Lệ</span>` : 
                    //                     (data.is_virtual_click == -1) ? `<span style="padding: 5px 12px" class="bg-danger text-white rounded-pill font-11 font-gg font-weight-bold">Click ảo</span>` :
                    //                     `<span style="padding: 5px 12px" class="bg-warning text-white rounded-pill font-11 font-gg font-weight-bold">Nghi vấn</span>` }
                    //                     </div>`
                    // }, 
                    {
                        title: 'Từ Khoá',
                        data: data => `<div class="text-left">${(data.keyword) ? data.keyword : "-"}</div>`
                    }, 
                    {
                        title: 'Chiến dịch',
                        data: data => `<div class="font-12 text-left">${data.ads_network}</div>`
                    }, 
                    {
                        title: 'Mục tiêu',
                        data: data => `<div style="width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                        <a href="${data.target}">${data.target}</a>
                                    </div>`
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
                initComplete: function (settings, json) { 
                    
                    $(`#getIpHistoryAnAccount_wrapper .dataTables_scrollBody`).addClass("border-0")
                    $(`#getIpHistoryAnAccount_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getIpHistoryAnAccount_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    .find('thead').addClass('text-left').removeClass("text-center")
                    .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
                    
                    $('.getIpHistoryAnAccount-container').removeClass('is-loading');
                    // $('#getIpHistoryAnAccount .dataTables_empty').text("").addClass('empty-state');  
                
                }
            }
        )

        initDatatable(
            'getIpHistory', {
                ajax: {
                    url: `//localapi.trazk.com/cla/index.php?task=getIpHistory&userToken=${userToken}&limit=20&ip=${ip}`,
                    dataSrc: (json) => { 
                        console.log(json.data)  
                        if(json.data.history != null)
                            return json.data.history;
                        else
                            return [];
                    },
                },
                drawCallback: function (settings) {
                    $('.getIpHistory-container').removeClass('is-loading').unblock();
                    $('.getIpHistory-container').find('.fa-spin').removeClass('fa-spin');
                },
                columns: [
                    {
                        title: 'Thời gian',
                        data: data => `<div class="text-left">${moment(data.created).format("h:mm DD/MM")}</div>`
                    }, 
                    // {
                    //     title: 'Lần Click',
                    //     data: data => `<div class="text-left pl-3">${data.click}</div>`
                    // }, 
                    // {
                    //     title: 'Nhận diện',
                    //     data: data => `<div class="text-left pl-3" style="width: 100px">${(data.is_virtual_click == 0) ? `<span style="background-color: #1bbc9b; padding: 5px 12px" class="text-white rounded-pill font-11 font-gg font-weight-bold">Hợp Lệ</span>` : 
                    //                     (data.is_virtual_click == -1) ? `<span style="padding: 5px 12px" class="bg-danger text-white rounded-pill font-11 font-gg font-weight-bold">Click ảo</span>` :
                    //                     `<span style="padding: 5px 12px" class="bg-warning text-white rounded-pill font-11 font-gg font-weight-bold">Nghi vấn</span>` }
                    //                     </div>`
                    // }, 
                    {
                        title: 'Từ Khoá',
                        data: data => `<div class="text-left">${(data.keyword) ? data.keyword : "-"}</div>`
                    }, 
                    {
                        title: 'Chiến dịch',
                        data: data => `<div class="text-left font-12">${data.ads_network}</div>`
                    }, 
                    // {
                    //     title: 'Vị trí',
                    //     // data: data => `<div style="width: 200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                    //     //                 <a href="${data.target}">${data.target}</a>
                    //     //             </div>`
                    //     data: data => `<div class="text-left">${data.city}</div>`
                    // },
                    {
                        title: 'Mục tiêu',
                        data: data => `<div style="width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                        <a href="javascript:void(0)">https://******</a>
                                    </div>`
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
                initComplete: function (settings, json) { 
                    
                    $(`#getIpHistory_wrapper .dataTables_scrollBody`).addClass("border-0")
                    $(`#getIpHistory_wrapper .dataTables_scrollBody`).perfectScrollbar();
                    $(`#getIpHistory_wrapper .dataTables_scrollHead table.dataTable`).attr('style', 'margin-top:0!important')
                    .find('thead').addClass('text-left').removeClass("text-center")
                    .find('th').each(function (i) { $(this).addClass('border-top-0 border-bottom') });
                    
                    $('.getIpHistory-container').removeClass('is-loading');
                    // $('#getIpHistory .dataTables_empty').text("").addClass('empty-state');
                
                }
            }
        )
    }

})