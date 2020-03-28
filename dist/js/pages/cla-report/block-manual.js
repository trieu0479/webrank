$("#sidebarnav li a").each(function () {
    $(this).data("name") == "block-manual" ? $(this).addClass("active") : null;
})

$(document).ready(()=>{

    const isIPv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

    let list_campaign = "";

    let listIP = [];

    $.get(`//localapi.trazk.com/cla/index.php?task=getAllCampaign&userToken=${userToken}&cid=${cid}&cache=nocache`).then(data => {
        data = JSON.parse(data)
        data.data.forEach((ele,index) => {
            if(index != data.data.length-1)
                list_campaign += ele.name + ", ";
            else
                list_campaign += ele.name + ".";
        })  
    })

    $("#listIP").autofocus;

    $("#btn-block-listIP").click(async function(){ 
        if($("#listIP").val() == ""){
            $("#list-empty").removeClass("d-none");
        } else {
            $("#list-empty").addClass("d-none");
            if($(this).text() == "Chặn Thủ Công Danh Sách IP" || $(this).text() == "Chặn Thành Công"){

                $(this).removeClass("btn-danger").addClass("btn-success")
                $(this).html(`<i class="fa fa-spin fa-spinner mr-2"></i>Đang Xử Lý. Vui Lòng Đợi`); 
                
                if(($(listIP).not($("#listIP").val().split("\n")).length === 0 && $($("#listIP").val().split("\n")).not(listIP).length === 0) != true)
                {
                    listIP = $("#listIP").val().split("\n")    
    
                    await listIP.forEach(async ele => {
                        if(isIPv4.test(ele)){ 
                            let ip = ele;
                            await $.ajax({
                                url: `//localapi.trazk.com/cla/index.php?task=blockIpToAllCampaigns&userToken=${userToken}&ip=${ip}&cid=${cid}&blockType=CLICKMANUALLY`,
                                type: "POST"
                            }).then(data => {
                                data = JSON.parse(data);
                                console.log(data) 
                                let content = ` <tr> 
                                                    <td data-ip="${ip}" style="vertical-align: middle;" class="font-gg font-13 text-info">${ip}</td>
                                                    <td style="vertical-align: middle;" id="getLastIp" class="font-gg font-13">
                                                        <label style="line-height: 10px;" class="switch mb-0" title="Click để mở chặn">
                                                            <input data-ip="127.0.0.1" name="block" type="checkbox" checked="true">
                                                            <span class="slider rounds"></span>
                                                        </label>
                                                    </td>
                                                    <td style="vertical-align: middle;" class="font-gg font-13">12 Chiến Dịch</td>
                                                    <td style="vertical-align: middle;" class="font-gg font-13">${list_campaign}</td>
                                                </tr>`;
    
                                $("#list-ip-blocking").append(content)
                               
                            })  
                            
                           
    
                            // await $(this).removeClass("btn-success").addClass("btn-danger");
                            await $(".list-ip").removeClass("d-none")
                            await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Chặn Thành Công`); 
                        }
                    });   

                } else {
                    await $(".list-ip").removeClass("d-none")
                    await $(this).html(`<i class="fa fa-check mr-2 font-16"></i>Chặn Thành Công`); 
                }



               

            //     <tr>
            //     <th scope="row">1</th>
            //     <td>Mark</td>
            //     <td>Otto</td>
            //     <td>@mdo</td>
            // </tr>
                 
            } 
        }

      
    })
})