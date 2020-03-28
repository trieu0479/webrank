$("#sidebarnav li a").each(function () {
    $(this).data("name") == "block-method" ? $(this).addClass("active") : null;
})

const getProxyVPNlist = async () => {
    let Data;
    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getProxyVPNlist&userToken=${userToken}`,
        type: "GET"
    }).then(data => {
        data = JSON.parse(data);
        Data = data.data;
    })
    let content = "";
    let array = [];
    let stt = 1;
    for (const i in Data) {
        if (Data[i] != "") {
            array.push(Data[i])
            content += `
                    <tr>
                        <td class="col-4 text-left font-gg text-muted font-weight-bold">${stt}</td> 
                        <td class="col-8 text-right pr-4 text-danger font-gg font-weight-bold">${Data[i]}</td> 
                    </tr>`
            stt++;
        }
    }

    let myArray = [];

    myArray.push(array);
    myArray.push(content);


    return myArray;
}

const getBigDataFraudIp = async () => {
    let Data;
    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getBigDataFraudIp&limit=50&userToken=${userToken}`,
        type: "GET"
    }).then(data => {
        data = JSON.parse(data);
        Data = data.data;
    })
    let content = "";
    Data.forEach(ele => {
        content += `
        <tr>
            <td class="col-8 text-left font-gg text-muted font-weight-bold">${ele.ip}</td>
            <td class="col-4 font-gg text-danger font-weight-bold">${ele.totalClick}</td>
        </tr>`
    });

    let myArray = [];
    myArray.push(Data);
    myArray.push(content);


    return myArray;
}

const getBigDataFraudBrowser = async () => {
    let Data;
    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getBigDataFraudBrowser&userToken=${userToken}`,
        type: "GET"
    }).then(data => {
        data = JSON.parse(data);
        Data = data.data;
    })

    let config;
    let browser = [];

    await $.get(`//localapi.trazk.com/cla/index.php?task=getConfigFraudClick&userToken=${userToken}&cid=${cid}`).then(data => {
        data = JSON.parse(data);
        if (data.data) {
            config = data.data.config.BROWSER_RULE;

            while (config != "") {
                if (config.indexOf("|") != -1) {

                    let index = config.indexOf("|");
                    let val = config.slice(0, index);
                    config = config.substr(index + 1)
                    browser.push(val);
                } else {
                    browser.push(config);
                    config = "";
                }
            }
        }


    })

    let content = "";
    let content1 = "";
    Data.forEach(ele => { 
        content += `
        <tr data-id="${ele.ip}" class="cursor-pointer">
            <td class="col-8 text-left font-gg text-muted font-weight-bold">${ele.ip}</td>
            <td class="col-4 pr-4 text-right">
                <i title="Chọn" class="add-position text-primary cursor-pointer font-16 fal fa-plus-circle"></i> 
            </td> 
        </tr>`

        content1 += `
        <tr data-id="${ele.ip}" class="d-none cursor-pointer">
            <td class="col-8 text-left font-gg text-muted font-weight-bold">${ele.ip}</td> 
            <td class="col-4 pr-4 text-right">
                <i title="Bỏ chọn" class="destroy-position text-danger fal fa-times-circle cursor-pointer font-16"></i> 
            </td> 
        </tr>`
    });

    let myArray = [];
    myArray.push(browser);
    myArray.push(content);
    myArray.push(content1);


    return myArray;
}

const getAdWordsProvinceVietnam = async () => {
    let Data;
    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getAdWordsProvinceVietnam&userToken=${userToken}`,
        type: "GET"
    }).then(data => {
        data = JSON.parse(data);
        Data = data.data;
    })

    let content = "";
    let content1 = "";

    let config;
    let location = [];

    await $.get(`//localapi.trazk.com/cla/index.php?task=getConfigFraudClick&userToken=${userToken}&cid=${cid}`).then(data => {
        data = JSON.parse(data);
        if (data.data) {
            config = data.data.config.LOCATION_RULE;

            while (config != "") {
                if (config.indexOf("|") != -1) {

                    let index = config.indexOf("|");
                    let val = config.slice(0, index);
                    config = config.substr(index + 1)
                    location.push(val);
                } else {
                    location.push(config);
                    config = "";
                }
            }
        }

    })

    for (let i in Data) {
        content += `<tr data-id="${i}" class="cursor-pointer">
                        <td class="col-8 text-left font-gg text-muted">${Data[i][0]}</td> 
                        <td class="col-4 pr-4 text-right">
                            <i data-id="${i}" title="Chọn" class="add-position text-primary cursor-pointer font-16 fal fa-plus-circle"></i> 
                        </td> 
                    </tr>`;

        content1 += `<tr data-id="${i}" class="cursor-pointer d-none">
                        <td class="col-8 text-left font-gg text-muted">${Data[i][0]}</td> 
                        <td class="col-4 pr-4 text-right">
                            <i data-id="${i}" title="Bỏ chọn" class="destroy-position text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`;

    }

    let myArray = [];

    myArray.push(content);
    myArray.push(content1);
    myArray.push(location);


    return myArray;
}


async function getAllCampaign() {

    let Data;
    let content = "";
    let content1 = "";
    let myArray = [];
    let Listcampaign;
    let Arrcampaign = [];

    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getAllCampaign&userToken=${userToken}&cid=${cid}`,
        type: "GET"
    }).then(data => {
        data = JSON.parse(data);
        Data = data.data;
    })

    // Data.forEach(ele => {
    //     dataSelect += `<option value='${ele.campaign_id}'>${ele.name}</option>`
    // });

    await $.get(`//localapi.trazk.com/cla/index.php?task=getConfigFraudClick&userToken=${userToken}&cid=${cid}`).then(data => {
        data = JSON.parse(data);
        if (data.data) { 

            Listcampaign = data.data.campaigns;

            while (Listcampaign != "") {
                if (Listcampaign.indexOf("|") != -1) {

                    let index = Listcampaign.indexOf("|");
                    let val = Listcampaign.slice(0, index);
                    Listcampaign = Listcampaign.substr(index + 1)
                    Arrcampaign.push(val);
                } else {
                    Arrcampaign.push(Listcampaign);
                    Listcampaign = "";
                }
            }
        }

    })

    Data.forEach(ele => {
        content += `<tr data-id="${ele.campaign_id}" class="cursor-pointer">
                        <td class="col-8 text-left font-gg text-muted">${ele.name}</td> 
                        <td class="col-4 pr-4 text-right">
                            <i data-id="${ele.campaign_id}" title="Chọn" class="add-campaign text-primary cursor-pointer font-16 fal fa-plus-circle"></i> 
                        </td> 
                    </tr>`;

        content1 += `<tr data-id="${ele.campaign_id}" class="d-none">
                        <td class="col-8 text-left font-gg text-muted">${ele.name}</td> 
                        <td class="col-4 pr-4 text-right">
                            <i data-id="${ele.campaign_id}" title="Bỏ chọn" class="destroy-campaign text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`;
    });

    myArray.push(Arrcampaign);
    myArray.push(content);
    myArray.push(content1);

    return myArray;

}


function sliceString(data, string) {
    let index = data.lastIndexOf(string);
    return data.slice(0, index);
}

$(document).ready(async () => {

    if (cid != "" && cid != null) {
        apicla("getConfigFraudClick", `//localapi.trazk.com/cla/index.php?task=getConfigFraudClick&userToken=${userToken}&cid=${cid}`)



        $("#choose-campaign").click(function () {
            $(".choose-campaign").removeClass("d-none");
            $(".choose-campaign").hide();
            $(".choose-campaign").fadeIn('slow');

            $(".all-campaign").addClass("d-none");
        })

        $("#all-campaign").click(function () {
            $(".all-campaign").removeClass("d-none");
            $(".all-campaign").hide();
            $(".all-campaign").fadeIn('slow');

            $(".choose-campaign").addClass("d-none");

        })


        $(".scrollbar").perfectScrollbar();


        $("#add-IP").click(async function () {

            let myArray = [];

            const isIPv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

            const result = await Swal.fire({
                title: '<div class="font-gg font-18 font-weight-bold text-info mt-5"><i class="font-20 mr-2 fas fa-user-cog"></i>Vui lòng nhập IP bạn muốn chặn.</div>',
                html: `
                <input id="swal-input1" class="swal2-input">
                <div class="text-left">
                    <a id="click-add-IP" class="font-gg font-12 text-underline text-left font-weight-bold" href="javascript:void(0)">Thêm 1 IP nữa</a>
                </div>
                `,
                showCloseButton: true,
                confirmButtonText: 'Chặn',
                focusConfirm: false,
                width: 700,
                padding: '2em',
                onOpen: () => {

                    $("#swal-input1").focus();

                    $(".swal2-confirm").addClass("mb-5");

                    $("#click-add-IP").click(() => {
                        $("#swal-input1").focus();
                        let val = $("#swal-input1").val();
                        if (isIPv4.test(val)) {
                            $(".swal2-validation-message").addClass("d-none")
                            let dem = 0;

                            $("#table-IP > tbody > tr > th").each(function () {
                                if (val == $(this).text()) {
                                    dem = 1;
                                }
                            })

                            if (dem == 1) {
                                $(".swal2-validation-message").removeClass("d-none")
                                Swal.showValidationMessage(
                                    `IP này đã có trong danh sách !`
                                )
                            } else {

                                let count = 0;

                                let temp = {
                                    name: val,
                                    times: moment(new Date()).format("h:mm DD/MM")
                                }

                                myArray.forEach(ele => {
                                    if (ele.name == val) {
                                        count = 1;
                                    }
                                });

                                if (count != 1) {
                                    myArray.push(temp);
                                }

                                $("#swal-input1").val("");

                            }
                        } else {

                            $(".swal2-validation-message").removeClass("d-none")
                            Swal.showValidationMessage(
                                `IP không hợp lệ !`
                            )
                        }
                    })

                },
                preConfirm: () => {
                    $("#swal-input1").focus();
                    if (isIPv4.test($("#swal-input1").val())) {
                        let val = $("#swal-input1").val();
                        let dem = 0;

                        $("#table-IP > tbody > tr > td").each(function () {
                            if (val == $(this).data("ip")) {
                                dem = 1;
                            }
                        })

                        if (dem == 1) {
                            $(".swal2-validation-message").removeClass("d-none")
                            Swal.showValidationMessage(
                                `IP này đã có trong danh sách !`
                            )
                        } else {

                            let count = 0;

                            let temp = {
                                name: $("#swal-input1").val(),
                                times: moment(new Date()).format("h:mm DD/MM")
                            }

                            myArray.forEach(ele => {
                                if (ele.name == val) {
                                    count = 1;
                                }
                            });

                            if (count != 1) {
                                myArray.push(temp);
                            }

                            return myArray
                        }
                    } else {
                        $(".swal2-validation-message").removeClass("d-none")
                        Swal.showValidationMessage(
                            `IP không hợp lệ !`
                        )
                    }
                }
            })


            if (result.dismiss != "overlay" && result.value.length > 0) {
                let val = result.value;
                let content = "";

                let listIp = "";

                val.forEach((ele, index) => {
                    if (index != val.length - 1)
                        listIp += ele.name + "|";
                    else
                        listIp += ele.name;
                    content += `
                    <tr>
                        <td class="stt col-2 font-gg font-13">${index+1}</td> 
                        <td data-ip="${ele.name}" class="col-4 font-gg font-13">${ele.name}</td> 
                        <td class="col-3 font-gg font-13 text-center">${ele.times}</td> 
                        <td class="col-3 font-gg font-13 text-right pr-5">
                            <i data-id="${ele.name}" title="Bỏ Chặn" class="destroy-ip text-danger fal fa-times-circle cursor-pointer font-16"></i> 
                        </td> 
                    </tr>`
                });

                $("#table-tbody-IP").append(content).parent().removeClass("d-none");
                $("#save-IP").parent().removeClass("d-none");

                // EXCLUSION_LIST = listIp;

                $("#table-IP tr .stt").each(function (index) {
                    $(this).text(index + 1);
                })

                $(".destroy-ip").click(async function () {
                    $(this).parent().parent().remove();
                    listIp = "";
                    $("#table-tbody-IP tr td").each(function () {
                        $("#table-IP tr .stt").each(function (index) {
                            $(this).text(index + 1);
                        })
                        let val = $(this).data("ip");
                        listIp += val + "|";
                    })

                    EXCLUSION_LIST = sliceString(listIp, "|");

                    if (EXCLUSION_LIST == "") {
                        $("#table-tbody-IP").parent().addClass("d-none");
                        $("#save-IP").parent().addClass("d-none");
                    }
                })
            }
        })

        $("input[type=checkbox][name=network_3G_4G_LIST]").change(async function () {

            if ($(this).prop("checked")) {
                let check = $(`input[name="check-network"]:checked`).length;
                let list_3G_4G = "";

                if (check != 0) {
                    $.each($("input[name='check-network']:checked"), function () {
                        list_3G_4G += $(this).val() + "|";
                    });

                    let index = list_3G_4G.lastIndexOf("|");
                    network_3G_4G_LIST = list_3G_4G.slice(0, index);

                } else {
                    alert("Bạn chưa chọn nhà mạng muốn chặn !");
                    $(this).prop("checked", false);
                }

            } else {
                network_3G_4G_LIST = "";
            }

        });

        getAdWordsProvinceVietnam().then(data => {
            $("#add-position").click(async function () {

                let myArray = [];
                const result = await Swal.fire({
                    title: '<div class="font-gg font-18 font-weight-bold"><i class="font-20 mr-2 fas fa-map-marker-alt"></i>Vui lòng chọn khu vực bạn muốn chặn.</div>',
                    html: `
                    <div class="d-flex">  
                        <div class="mt-3" style="width: 45%"> 
                            <table id="table-position" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-8 font-gg font-12 font-weight-bold text-muted text-left"
                                            scope="col">Danh sách vị trí
                                        </th> 
                                        <th class="col-4 font-gg font-12 font-weight-bold text-muted text-right"
                                            scope="col">Chọn
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody id="position-add" class="scrollbar" style="height: 200px">
                                        ${data[0]}
                                </tbody>
                            </table>
                        </div>

                        <div class="ml-auto mt-3" style="width: 45%">
                            <table id="table-position" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-8 font-gg font-12 font-weight-bold text-muted text-left"
                                            scope="col">Vị trí được chọn
                                        </th> 
                                        <th class="col-4 font-gg font-12 font-weight-bold text-muted text-right"
                                            scope="col">Bỏ
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody id="position-destroy" class="scrollbar" style="height: 200px">
                                        ${data[1]}
                                </tbody>
                            </table>    
                        </div>
                    </div>
                    <div class="mt-3">
                        <button id="save-position" type="button" class="btn waves-effect waves-light btn-block btn-outline-success">Lưu Khu Vực</button>
                    </div>`,
                    showCloseButton: true,
                    showConfirmButton: false,
                    confirmButtonText: 'Chặn',
                    focusConfirm: false,
                    width: 700,
                    padding: '2em',
                    onOpen: async function () {
                        data[2].forEach(ele => {
                            $("#position-destroy tr").each(function () {
                                if (ele == $(this).data("id")) {
                                    $(this).removeClass("d-none");
                                }
                            })

                            $("#position-add tr").each(function () {
                                if (ele == $(this).data("id")) {
                                    $(this).addClass("d-none");
                                }
                            })
                        });


                        $(".scrollbar").perfectScrollbar();

                        $("#position-add tr").click(function () {
                            let val = $(this).data("id");
                            $(this).addClass("d-none");

                            $("#position-destroy tr").each(function () {
                                if (val == $(this).data("id")) {
                                    $(this).removeClass("d-none")
                                }
                            })
                        })

                        $("#position-destroy tr").click(function () {
                            let val = $(this).data("id");
                            $(this).addClass("d-none");

                            $("#position-add tr").each(function () {
                                if (val == $(this).data("id")) {
                                    $(this).removeClass("d-none")

                                }
                            })
                        })

                        $("#save-position").click(function () {
                            $('.swal2-confirm').click()
                        })
                    },
                    preConfirm: () => {
                        $("#position-destroy tr").each(function () {
                            if (!$(this).hasClass("d-none")) {

                                let val = $(this).data("id");

                                let temp = {
                                    name: val,
                                    times: moment(new Date()).format("h:mm DD/MM")
                                }

                                myArray.push(temp);
                            }
                        })

                        return myArray
                    }
                })


                if (result.dismiss != "overlay" && result.dismiss != "esc" && result.dismiss != "close") {
                    let data = result.value;
                    let content = "";
                    let listPosition = "";
                    data.forEach((i, index) => {
                        if (index != data.length - 1)
                            listPosition += i.name + "|";
                        else
                            listPosition += i.name;

                    })




                    LOCATION_RULE = listPosition;

                    console.log(LOCATION_RULE)


                }
            })



        });

        getBigDataFraudIp().then(data => {
            $('#list-bigdata').click(async function () {
                const result = await Swal.fire({
                    title: '<div class="font-gg font-18 font-weight-bold mt-2"><i class="font-16 mr-2 fas flaticon-safe-shield-protection"></i>Danh sách IP thống kê của 3F.</div>',
                    html: ` 
                    <div class="m-auto" style="height: 300px; width: 400px;">   
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="col-8 font-gg font-12 text-left font-weight-bold" scope="col">IP</th>  
                                    <th class="col-4 font-gg font-12 text-right font-weight-bold" scope="col">Số lần click</th>  
                                </tr>
                            </thead> 
                            <tbody class="scrollbar" style="height:250px">
                                ${data[1]}
                            </tbody > 
                        </table> 
                    </div>`,
                    showCloseButton: true,
                    showConfirmButton: false,
                    focusConfirm: false,
                    width: 450,
                    padding: '2em',
                    onOpen: () => {
                        $(".scrollbar").perfectScrollbar();

                    },
                    preConfirm: () => {

                    }
                })
            })
            $("input[type=checkbox][name=BIGDATA_RULE]").change(async function () {

                let listBigdata = "";

                if ($("input:checked[name=BIGDATA_RULE]").prop("checked")) {

                    let count = data[0].length;


                    data[0].forEach((ele, index) => {
                        if (index != count - 1)
                            listBigdata += ele.ip + "|";
                        else
                            listBigdata += ele.ip;
                    });

                    BIGDATA_RULE = listBigdata;


                } else {
                    BIGDATA_RULE = "";
                }
            });
        })

        getProxyVPNlist().then(data => {
            $('#list-VPN-Proxy').click(async function () {
                const result = await Swal.fire({
                    title: '<div class="font-gg font-18 font-weight-bold mt-2"><i class="font-20 mr-2 fas flaticon-safe-shield-protection"></i>Danh sách IP được 3F xác định là VPN và Proxy.</div>',
                    html: ` 
                    <div class="m-auto" style="height: 300px; width: 400px;">   
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="col-4 font-gg font-12 font-weight-bold text-dark text-left"
                                        scope="col">STT
                                    </th> 
                                    <th class="col-8 font-gg font-12 font-weight-bold text-dark text-right"
                                        scope="col">IP
                                    </th> 
                                </tr>
                            </thead> 
                            <tbody class="scrollbar" style="height: 250px">
                                ${data[1]}
                            </tbody > 
                        </table> 
                    </div>`,
                    showCloseButton: true,
                    showConfirmButton: false,
                    focusConfirm: false,
                    width: 450,
                    padding: '2em',
                    onOpen: () => {
                        $(".scrollbar").perfectScrollbar();
                    },
                    preConfirm: () => {

                    }
                })
            })
            $('input[type="checkbox"][name=VPN_PROXY_LIST]').click(async function () {
                let listVPNProxy = "";
                if ($(this).prop("checked")) {

                    let count = data[0].length;

                    data[0].forEach((ele, index) => {

                        if (index != count - 1)
                            listVPNProxy += ele + "|";
                        else
                            listVPNProxy += ele;
                    });

                    VPN_PROXY_LIST = listVPNProxy;

                    // await $.ajax({
                    //     url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[%27VPN_PROXY_LIST]=${VPN_PROXY_LIST}`,
                    //     type: "POST"
                    // }).then(data => {
                    //     data = JSON.parse(data);
                    //     console.log(data);

                    // })


                } else {
                    VPN_PROXY_LIST = "";
                    // await $.ajax({
                    //     url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[%27VPN_PROXY_LIST]=${VPN_PROXY_LIST}`,
                    //     type: "POST"
                    // }).then(data => {
                    //     data = JSON.parse(data);
                    //     console.log(data); 
                    // })

                }
            })
        });


        $("input[type=checkbox][name=DISABLE_MOBILE]").change(async function () {
            if ($(this).prop("checked")) {
                DISABLE_MOBILE = "TRUE";
            } else {

                DISABLE_MOBILE = "FALSE";
            }

        });

        getBigDataFraudBrowser().then(data => {
            $('#list-browser').click(async function () {

                let myArray = [];

                const result = await Swal.fire({
                    title: '<div class="font-gg font-18 font-weight-bold mt-2 "><i class="fas flaticon-safe-shield-protection font-20 mr-2"></i>Chọn các trình duyệt cũ mà bạn muốn chặn.</div>',
                    html: `
                    <div class="d-flex">  
                        <div class="mt-3" style="width: 45%"> 
                            <table id="table-browser" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-8 font-gg font-12 text-left font-weight-bold" scope="col">Trình duyệt</th>  
                                        <th class="col-4 font-gg font-12 text-right font-weight-bold" scope="col">Chọn</th>   
                                    </tr>
                                </thead>
                                <tbody id="browser-add" class="scrollbar" style="height: 200px">
                                        ${data[1]}
                                </tbody>
                            </table>
                        </div>

                        <div class="ml-auto mt-3" style="width: 45%">
                            <table id="table-browser" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-8 font-gg font-12 text-left font-weight-bold" scope="col">Trình duyệt đã chọn</th>  
                                        <th class="col-4 font-gg font-12 text-right font-weight-bold" scope="col">Bỏ</th>  
                                    </tr>
                                </thead>
                                <tbody id="browser-destroy" class="scrollbar" style="height: 200px">
                                        ${data[2]}
                                </tbody>
                            </table>    
                        </div>
                    </div>
                    <div class="mt-3">
                        <button id="save-browser" type="button" class="btn waves-effect waves-light btn-block btn-outline-success">Lưu Cài Đặt</button>
                    </div>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    showConfirmButton: false,
                    width: 700,
                    padding: '2em',
                    onOpen: () => {
                        $(".scrollbar").perfectScrollbar();

                        data[0].forEach(ele => {
                            $("#browser-add tr").each(function () {
                                if (ele == $(this).data("id")) {
                                    $(this).addClass("d-none")
                                }
                            })

                            $("#browser-destroy tr").each(function () {
                                if (ele == $(this).data("id")) {
                                    $(this).removeClass("d-none")
                                }
                            })
                        })


                        $("#browser-add tr").click(function () {
                            $(this).addClass("d-none");
                            let val = $(this).data("id");
                            $("#browser-destroy tr").each(function () {
                                if (val == $(this).data("id")) {
                                    $(this).removeClass("d-none")
                                }
                            })

                        })

                        $("#browser-destroy tr").click(function () {
                            $(this).addClass("d-none");
                            let val = $(this).data("id");
                            $("#browser-add tr").each(function () {
                                if (val == $(this).data("id")) {
                                    $(this).removeClass("d-none")
                                }
                            })

                        })

                        $("#save-browser").click(function () {
                            $('.swal2-confirm').click()
                        })

                    },
                    preConfirm: () => {
                        $("#browser-destroy tr").each(function () {
                            if (!$(this).hasClass("d-none")) {

                                let val = $(this).data("id");
                                myArray.push(val);
                            }
                        })

                        return myArray
                    }
                })

                if (result.dismiss != "overlay" && result.dismiss != "esc" && result.dismiss != "close") {

                    let data = result.value;
                    let listBrowser = "";

                    data.forEach((i, index) => {
                        if (index != data.length - 1)
                            listBrowser += i + "|";
                        else
                            listBrowser += i;

                    })

                    BROWSER_RULE = listBrowser;
                }
            })

            // $("input[type=checkbox][name=BROWSER_RULE]").change(async function () {

            //     let listBrowser = "";

            //     if ($("input:checked[name=BROWSER_RULE]").length != 0) {

            //         let count = data[0].length;


            //         data[0].forEach((ele, index) => {
            //             if (index != count - 1)
            //                 listBrowser += ele.ip + "|";
            //             else
            //                 listBrowser += ele.ip;
            //         });

            //         BROWSER_RULE = listBrowser; 

            //     } else {

            //         BROWSER_RULE = listBrowser; 
            //     }

            // });
        })

        $("#clickCampaign").click(async function () {

            let myArray = {
                keys: [],
                values: []
            };
            const result = await Swal.fire({
                title: '<div class="font-gg font-18 font-weight-bold text-muted"><i class="font-16 mr-2 fas flaticon-safe-shield-protection"></i>Vui lòng chọn các chiến dịch bạn muốn hạn chế !</div>',
                html: ` 
                <select multiple="multiple" id="my-select" name="my-select[]">
                    ${dataSelect}
                </select> `,
                showCloseButton: true,
                focusConfirm: false,
                width: 700,
                padding: '2em',
                onOpen: () => {

                    $('#my-select').multiSelect({
                        afterSelect: function (values) {
                            myArray.keys.push(values);
                        },
                        afterDeselect: function (values) {
                            myArray.keys.pop(values);
                        }
                    });

                    $(".ms-container").addClass("d-flex justify-content-center");

                    $(".ms-selectable").addClass("mr-5");

                    $(".ms-selectable .ms-list").addClass("text-left mb-3").before(`<div class="font-gg font-14 font-weight-bold mt-3 mb-4 text-muted text-left"><i class="font-16 mr-2 fal fa-list-alt"></i>Tên chiến dịch</div>`)

                    $(".ms-selection .ms-list").addClass("text-left").before(`<div class="font-gg font-14 font-weight-bold mt-3 mb-4 text-muted text-left"><i class="font-16 mr-2 fal fa-list-alt"></i>Chiến dịch đã chọn</div>`)

                },
                preConfirm: () => {

                    return myArray
                }
            })

            if (result.dismiss != "overlay" && result.value.keys.length > 0) {
                let kq = result.value.keys;
                let temp = "";
                let listCampaigns = "";
                kq.forEach((i, index) => {
                    dataTest.forEach(j => {
                        if (i == j.campaign_id) {
                            listCampaigns += j.campaign_id + "|";

                            temp += `<tr>
                                    <td class="stt col-1 font-gg font-13 font-weight-bold">${index+1}</td>
                                    <td data-campaign="${j.campaign_id}" class="col-3 font-gg font-13 font-weight-bold">${j.campaign_id}</td>
                                    <td class="col-4 font-gg font-13">${j.name}</td>
                                    <td class="col-2 font-gg font-13">${moment(new Date()).format("h:mm DD/MM")}</td>
                                    <td class="col-2 font-gg font-13 text-center">
                                        <i data-campaign="${j.campaign_id}" title="Bỏ Chọn" class="destroy-campaign text-danger fal fa-times-circle cursor-pointer font-16"></i>
                                    </td>
                                </tr>`
                        }
                    })
                })

                let index = listCampaigns.lastIndexOf("|");
                campaigns = listCampaigns.slice(0, index);

                $("#tableCampaign").html(temp).parent().removeClass("d-none");
                $("#saveCampaign").parent().removeClass("d-none");

                $(".destroy-campaign").click(async function () {
                    listCampaigns = "";
                    $(this).parent().parent().remove();

                    $("#tableCampaign tr td i").each(function (index) {
                        $("#tableCampaign tr .stt").each(function (index) {
                            $(this).text(index + 1);
                        })
                        let val = $(this).data("campaign");
                        listCampaigns += val + "|";
                    })

                    let index = listCampaigns.lastIndexOf("|");
                    campaigns = listCampaigns.slice(0, index);

                    if (campaigns == "") {
                        $("#tableCampaign").parent().addClass("d-none");
                    }
                })

            }
        })

        //lưu cấu hình cũ tạm bỏ
        $("#btn-save-setting").click(async function () {

            if ($(this).text() == "Lưu Cấu Hình") {

                $(this).html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang xử lý`);

                if (!$(".all-campaign").hasClass("d-none")) {
                    if ($("input[type=checkbox][name=MONITOR_ONLY]").prop("checked")) {
                        MONITOR_ONLY = "TRUE";
                        campaigns = "";
                    } else {
                        MONITOR_ONLY = "FALSE";
                    }
                } else {
                    MONITOR_ONLY = "FALSE";

                    campaigns = "";

                    $("#tableCampaign tr td").each(function () {
                        let val = $(this).data("campaign");
                        (val) ? campaigns += val + "|": null;
                    })

                    campaigns = sliceString(campaigns, "|");
                }


                if ($("input[type=checkbox][name=network_3G_4G_LIST]").prop("checked")) {
                    let check = $(`input[name="check-network"]:checked`).length;
                    let list_3G_4G = "";

                    if (check != 0) {
                        $.each($("input[name='check-network']:checked"), function () {
                            list_3G_4G += $(this).val() + "|";
                        });

                        let index = list_3G_4G.lastIndexOf("|");
                        network_3G_4G_LIST = list_3G_4G.slice(0, index);

                    } else {
                        alert("Bạn chưa chọn nhà mạng muốn chặn !");
                        $(this).prop("checked", false);
                    }


                } else {
                    network_3G_4G_LIST = "";
                }


                if ($("input[type=checkbox][name=realtime]").prop("checked")) {
                    IP_RULE = `[${$("#select-click-IP_RULE").val()}|${$("#select-time-IP_RULE").val()}]`;
                    GROUP_RULE = `[${$("#select-click-GROUP_RULE").val()}|${$("#select-time-GROUP_RULE").val()}]`;
                } else {
                    IP_RULE = `[|]`;
                    GROUP_RULE = `[|]`;
                }



                EXCLUSION_LIST = "";

                $("#table-IP tr td").each(function () {
                    let val = $(this).data("ip");
                    (val) ? EXCLUSION_LIST += val + "|": null;
                })

                EXCLUSION_LIST = sliceString(EXCLUSION_LIST, "|");

                LOCATION_RULE = "";

                $("#table-position tr td").each(function () {
                    let val = $(this).data("position");
                    (val) ? LOCATION_RULE += val + "|": null;
                })

                LOCATION_RULE = sliceString(LOCATION_RULE, "|");


                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[MONITOR_ONLY]=${MONITOR_ONLY}&config[BROWSER_RULE]=${BROWSER_RULE}&config[BIGDATA_RULE]=${BIGDATA_RULE}&config[DISABLE_MOBILE]=${DISABLE_MOBILE}&config[VPN_PROXY_LIST]=${VPN_PROXY_LIST}&config[%27EXCLUSION_LIST]=${EXCLUSION_LIST}&config[IP_RULE]=${IP_RULE}&config[GROUP_RULE]=${GROUP_RULE}&config[3G_4G_LIST]=${network_3G_4G_LIST}&config[LOCATION_RULE]=${LOCATION_RULE}&campaigns=${campaigns}`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data);

                })

                setTimeout(async () => {
                    await $(this).html(`<i class="fa fa-check mr-2"></i>Lưu Cấu Hình`);

                    Swal.fire({
                        type: "success",
                        title: 'Lưu Cấu Hình Thành Công.',
                        // html: ` 
                        //     <img src="https://image.flaticon.com/icons/svg/1047/1047690.svg" width="150px"/>
                        // `, 
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

                }, 2000)

            }

        })

        // code 26-09-2019

        getAllCampaign().then(res => { 
            $("#campaign").change(async function () {
                if ($(this).prop("checked")) {

                    let checkVIP = "free"

                    await $.ajax({
                        url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&campaigns=${campaigns}`,
                        type: "POST"
                    }).then(data => {
                        data = JSON.parse(data);
                        if (data.data.status == "error") {
                            Swal.fire({
                                type: 'error',
                                title: '<div class="font-gg font-16 font-weight-bold">Có Lỗi</div>',
                                html: ` 
                                <div class="m-auto" style="width: 300px"> 
                                    Tài khoản miễn phí không thể sử dụng tính năng chặn tự động. 
                                </div> 
                                <div class="pt-3 pb-3 m-auto" style="width: 300px">
                                    Vui lòng <a href= "https://admin.fff.com.vn/account.php?view=payment&action=vip_payment" class="text-danger">nâng cấp VIP</a> để sử dụng tính năng này
                                </div>
                                <div class="m-auto pt-3 pb-3" style="width: 280px">
                                <a href="https://admin.fff.com.vn/account.php?view=payment&action=vip_payment    " class="btn waves-effect waves-light btn-block btn-outline-danger">Nâng VIP</a>
                                </div>`,
                                showCloseButton: true,
                                showConfirmButton: false,
                                focusConfirm: false,
                                width: 350,
                                padding: '1em',
                                onOpen: () => {

                                },
                                onClose: () => {
                                    $(this).prop("checked", false)
                                }
                            })
                        } else {
                            checkVIP = "VIP"
                        }
                    })

                    if (checkVIP == "VIP") {
                        let myArray = [];

                        const result = await Swal.fire({
                            title: '<div class="font-gg font-16 font-weight-bold"><i class="fas fa-bullseye align-self-center font-14"></i> Vui lòng chọn các chiến dịch bạn muốn hạn chế !</div>',
                            // html: ` 
                            //     <select multiple="multiple" id="my-select" name="my-select[]">
                            //         ${dataSelect}
                            //     </select> 

                            //     <div class="mt-3">
                            //      <button id="save-campaign" type="button" class="btn waves-effect waves-light btn-block btn-outline-success">Lưu Chiến Dịch</button>
                            //     </div>`,
                            html: `
                            <div class="d-flex">  
                                <div class="mt-3" style="width: 45%"> 
                                    <table id="table-campaign" class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="col-8 font-gg font-12 text-left font-weight-bold" scope="col">Chiến dịch</th>  
                                                <th class="col-4 font-gg font-12 text-right font-weight-bold" scope="col">Chọn</th>  
                                            </tr>
                                        </thead>
                                        <tbody id="campaign-add" class="scrollbar" style="height: 200px">
                                                ${res[1]}
                                        </tbody>
                                    </table>
                                </div>

                                <div class="ml-auto mt-3" style="width: 45%">
                                    <table id="table-campaign" class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="col-8 font-gg font-12 text-left font-weight-bold" scope="col">Chiến dịch đã chọn</th>  
                                                <th class="col-4 font-gg font-12 text-right font-weight-bold" scope="col">Bỏ</th>  
                                            </tr>
                                        </thead>
                                        <tbody id="campaign-destroy" class="scrollbar" style="height: 200px">
                                                ${res[2]}
                                        </tbody>
                                    </table>    
                                </div>
                            </div>
                            <div class="mt-3">
                                <button id="save-campaign" type="button" class="btn waves-effect waves-light btn-block btn-outline-success">Lưu Cài Đặt</button>
                            </div>`,
                            showCloseButton: true,
                            showConfirmButton: false,
                            focusConfirm: false,
                            width: 600,
                            padding: '2em',
                            onOpen: () => {

                                $(".scrollbar").perfectScrollbar();

                                res[0].forEach(ele => {
                                    $("#campaign-add tr").each(function () {
                                        if (ele == $(this).data("id")) {
                                            $(this).addClass("d-none")
                                        }
                                    })
        
                                    $("#campaign-destroy tr").each(function () {
                                        if (ele == $(this).data("id")) {
                                            $(this).removeClass("d-none")
                                        }
                                    })
                                })
        
        
                                $("#campaign-add tr").click(function () {
                                    $(this).addClass("d-none");
                                    let val = $(this).data("id");
                                    $("#campaign-destroy tr").each(function () {
                                        if (val == $(this).data("id")) {
                                            $(this).removeClass("d-none")
                                        }
                                    })
        
                                })
        
                                $("#campaign-destroy tr").click(function () {
                                    $(this).addClass("d-none");
                                    let val = $(this).data("id");
                                    $("#campaign-add tr").each(function () {
                                        if (val == $(this).data("id")) {
                                            $(this).removeClass("d-none")
                                        }
                                    })
        
                                })
        
                                $("#save-campaign").click(function () {
                                    $('.swal2-confirm').click()
                                })
                            },
                            // onOpen: () => {

                            //     $('#my-select').multiSelect({
                            //         afterSelect: function (values) {
                            //             myArray.push(values);
                            //         },
                            //         afterDeselect: function (values) {
                            //             myArray.pop(values);
                            //         }
                            //     });

                            //     $(".ms-container").addClass("d-flex");

                            //     $(".ms-selectable").addClass("mr-5").css("width", "200px");

                            //     $(".ms-selection").css("width", "200px");

                            //     $(".ms-selectable .ms-list").addClass("text-left mb-3 scrollbar").before(`<div class="font-gg font-14 font-weight-bold mt-3 mb-4 text-muted text-left"><i class="font-16 mr-2 fal fa-list-alt"></i>Tên chiến dịch</div>`)

                            //     $(".ms-selection .ms-list").addClass("text-left scrollbar").before(`<div class="font-gg font-14 font-weight-bold mt-3 mb-4 text-muted text-left"><i class="font-16 mr-2 fal fa-list-alt"></i>Chiến dịch đã chọn</div>`)

                            //     $(".scrollbar").perfectScrollbar();

                            //     $("#save-campaign").click(function () {
                            //         if (myArray.length == 0) {
                            //             Swal.showValidationMessage(
                            //                 `Bạn phải chọn chiến dịch trước rồi mới lưu được !`
                            //             )
                            //         } else {
                            //             $('.swal2-confirm').click()
                            //         }
                            //     })
                            // },

                            preConfirm: () => {
                                $("#campaign-destroy tr").each(function () {
                                    if (!$(this).hasClass("d-none")) {
        
                                        let val = $(this).data("id");
                                        myArray.push(val);
                                    }
                                })
                                return myArray
                            }
                        })

                        if (result.dismiss != "overlay" && result.dismiss != "esc" && result.dismiss != "close") {
                            if (result.value.length > 0) {
                                let data = result.value;
                                let listCampaigns = "";

                                data.forEach((i, index) => {
                                    if (index != data.length - 1)
                                        listCampaigns += i + "|";
                                    else
                                        listCampaigns += i;

                                })

                                campaigns = listCampaigns; 
                                
                                await $.ajax({
                                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&campaigns=${campaigns}`,
                                    type: "POST"
                                }).then(data => {
                                    data = JSON.parse(data);
                                    console.log(data);
                                })
                            }

                        }
                    }


                }

            });

        });

        $("#all-campaign").change(async function () {
            if ($(this).prop("checked")) {

                campaigns = "All"

                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&campaigns=${campaigns}`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data);
                    if (data.data.status == "error") {
                        Swal.fire({
                            type: 'error',
                            title: '<div class="font-gg font-16 font-weight-bold">Có Lỗi</div>',
                            html: ` 
                                <div class="m-auto" style="width: 300px"> 
                                    Tài khoản miễn phí không thể sử dụng tính năng chặn tự động. 
                                </div> 
                                <div class="pt-3 pb-3 m-auto" style="width: 300px">
                                    Vui lòng <a href= "https://admin.fff.com.vn/account.php?view=payment&action=vip_payment" class="text-danger">nâng cấp VIP</a> để sử dụng tính năng này
                                </div>
                                <div class="m-auto pt-3 pb-3" style="width: 280px">
                                <a href="https://admin.fff.com.vn/account.php?view=payment&action=vip_payment    " class="btn waves-effect waves-light btn-block btn-outline-danger">Nâng VIP</a>
                                </div>`,
                            showCloseButton: true,
                            showConfirmButton: false,
                            focusConfirm: false,
                            width: 350,
                            padding: '1em',
                            onOpen: () => {

                            },
                            onClose: () => {
                                $(this).prop("checked", false)
                            }
                        })
                    }
                })
            }
        })

        $(".goto-option").click(() => {
            if (!$("#campaign").prop("checked") && !$("#all-campaign").prop("checked")) {
                Swal.fire({
                    type: 'error',
                    title: '<div class="font-gg font-16 font-weight-bold">Có Lỗi</div>',
                    html: ` 
                        <div class="m-auto font-gg font-14 pb-3" style="width: 300px"> 
                            Bạn phải chọn tầm vực muốn kích hoạt tính năng chặn click ảo rồi mới tiếp tục được.
                        </div> `,
                    showCloseButton: true,
                    showConfirmButton: false,
                    focusConfirm: false,
                    width: 350,
                    padding: '1em',
                    onOpen: () => {

                    },
                    onClose: () => {
                        $(this).prop("checked", false)
                    }
                })
            } else {
                window.location.href = `?cid=${cid}&action=block-option`;
            }
        })

        $("input[type=checkbox][name=MONITOR_ONLY]").change(async function () {
            if ($(this).prop("checked")) {

                MONITOR_ONLY = "TRUE";
                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[MONITOR_ONLY]=${MONITOR_ONLY}`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data);
                })
            } else {

                MONITOR_ONLY = "FALSE";
                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[MONITOR_ONLY]=${MONITOR_ONLY}`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data);
                })
            }

        });

        $("#save-AI").click(async function () {

            if ($(this).text() == "Lưu Cấu Hình AI" || $(this).text() == "Lưu Cấu Hình AI Thành Công") {

                $(this).removeClass("btn-danger").addClass("btn-success")
                $(this).addClass("text-white").html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`);

                let list_3G_4G = "";
                $.each($("input[name='check-network']:checked"), function () {
                    list_3G_4G += $(this).val() + "|";
                });

                let index = list_3G_4G.lastIndexOf("|");
                network_3G_4G_LIST = list_3G_4G.slice(0, index);
                

                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[BIGDATA_RULE]=${BIGDATA_RULE}&config[DISABLE_MOBILE]=${DISABLE_MOBILE}&config[VPN_PROXY_LIST]=${VPN_PROXY_LIST}&config[3G_4G_LIST]=${network_3G_4G_LIST}`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data);
                })

                await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Lưu Cấu Hình AI Thành Công`);
            }
        })

        $("#save-realtime").click(async function () {
            if ($(this).text() == "Lưu Cấu Hình Realtime" || $(this).text() == "Lưu Cấu Hình Realtime Thành Công") {

                $(this).removeClass("btn-danger").addClass("btn-success")
                $(this).addClass("text-white").html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`);

                if ($("input[type=checkbox][name=realtime]").prop("checked")) {
                    IP_RULE = `[${$("#select-click-IP_RULE").val()}|${$("#select-time-IP_RULE").val()}]`;
                    GROUP_RULE = `[${$("#select-click-GROUP_RULE").val()}|${$("#select-time-GROUP_RULE").val()}]`;
                } else {
                    IP_RULE = `[|]`;
                    GROUP_RULE = `[|]`;
                }

                await $.ajax({
                    url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[BROWSER_RULE]=${BROWSER_RULE}&config[IP_RULE]=${IP_RULE}&config[GROUP_RULE]=${GROUP_RULE}&config[LOCATION_RULE]=${LOCATION_RULE}`,
                    type: "POST"
                }).then(data => {
                    data = JSON.parse(data);
                    console.log(data);

                })
                await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Lưu Cấu Hình Realtime Thành Công`);
            }

        })

        $("#save-tuychinh").click(async function () {
            if ($("#listIP").val() == "") {
                $("#list-empty").removeClass("d-none");
            } else {
                $("#list-empty").addClass("d-none");
                if ($(this).text() == "Lưu Cấu Hình IP Tùy Chỉnh" || $(this).text() == "Lưu Cấu Hình Thành Công IP Tùy Chỉnh") {
                    const isIPv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

                    $(this).removeClass("btn-danger").addClass("btn-success")
                    $(this).addClass("text-white").html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`);

                    if (($(listIP).not($("#listIP").val().split("\n")).length === 0 && $($("#listIP").val().split("\n")).not(listIP).length === 0) != true) {
                        listIP = $("#listIP").val().split("\n")
                        let list = "";

                        await listIP.forEach(async ele => {
                            if (isIPv4.test(ele)) {
                                let ip = ele;

                                list += ip + "|"

                                EXCLUSION_LIST = list
                                // await $(this).removeClass("btn-success").addClass("btn-danger");
                                // await $(".list-ip").removeClass("d-none")
                                // await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Chặn Thành Công`); 
                            }
                        });

                        let index = EXCLUSION_LIST.lastIndexOf("|");

                        EXCLUSION_LIST = EXCLUSION_LIST.slice(0, index)

                        await $.ajax({
                            url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&config[EXCLUSION_LIST]=${EXCLUSION_LIST}`,
                            type: "POST"
                        }).then(data => {
                            data = JSON.parse(data);
                            console.log(data);

                        })

                        await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Lưu Cấu Hình IP Tùy Chỉnh Thành Công`);


                    } else {
                        await $(".list-ip").removeClass("d-none")
                        await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Lưu Cấu Hình IP Tùy Chỉnh Thành Công`);
                    }

                }
            }


        })

    }
})