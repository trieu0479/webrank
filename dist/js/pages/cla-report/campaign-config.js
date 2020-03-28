$("#sidebarnav li a").each(function () {
    $(this).data("name") == "campaign-config" ? $(this).addClass("active") : null;
})


var dataTest;
var dataSelect = "";
async function getdata() {
    await $.ajax({
        url: `//localapi.trazk.com/cla/index.php?task=getAllCampaign&userToken=${userToken}&cid=${cid}`,
        type: "GET"
    }).then(data => {
        data = JSON.parse(data);
        dataTest = data.data;
    }) 

    dataTest.forEach(ele => {  
       dataSelect +=`<option value='${ele.campaign_id}'>${ele.name}</option>` 
   }); 
}

getdata();

$(document).ready(() => {   
    $(".scrollbar").perfectScrollbar(); 


    $("#clickCampaign").click(async function(){ 

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
            width:700,
            padding: '2em',
            onOpen: () => { 
                
                $('#my-select').multiSelect({ 
                    afterSelect: function(values){  
                        myArray.keys.push(values);
                    },
                    afterDeselect: function(values){   
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

        if(result.dismiss !="overlay" && result.value.keys.length>0) { 
            let kq = result.value.keys;
            let temp = ""; 
            let listCampaigns = "";
            kq.forEach((i,index) => {
                dataTest.forEach(j => {
                    if (i == j.campaign_id){ 
                        listCampaigns += j.campaign_id + "|";

                        temp += `<tr>
                                    <td class="stt col-1 font-gg font-13 font-weight-bold">${index+1}</td>
                                    <td class="col-3 font-gg font-13 font-weight-bold">${j.campaign_id}</td>
                                    <td class="col-4 font-gg font-13">${j.name}</td>
                                    <td class="col-2 font-gg font-13">${moment(new Date()).format("h:mm DD/MM")}</td>
                                    <td class="col-2 font-gg font-13 text-center">
                                        <i data-campaign="${j.campaign_id}" title="Bỏ Chọn" class="destroy-campaign text-danger far fa-times-circle cursor-pointer font-16"></i>
                                    </td>
                                </tr>`
                    }
                })
            }) 
            
            let index = listCampaigns.lastIndexOf("|");
            campaigns = listCampaigns.slice(0,index); 

            $("#tableCampaign").html(temp).parent().removeClass("d-none");
            $("#saveCampaign").parent().removeClass("d-none"); 

            $(".destroy-campaign").click(async function(){
                listCampaigns = "";
                $(this).parent().parent().remove();

                $("#tableCampaign tr td i").each(function(index){  
                    $("#tableCampaign tr .stt").each(function(index){
                        $(this).text(index+1);
                    })
                    let val = $(this).data("campaign");
                    listCampaigns += val + "|";  
                })

                let index = listCampaigns.lastIndexOf("|");
                campaigns = listCampaigns.slice(0,index); 

                if(campaigns==""){
                    $("#tableCampaign").parent().addClass("d-none");
                    $("#saveCampaign").parent().addClass("d-none"); 
                }

                // await $.ajax({
                //     url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid}&campaigns=${campaigns}`,
                //     type: "POST"
                // }).then(data => {
                //     data = JSON.parse(data);
                //     console.log(data); 
                // }) 
            })

        } 
    }) 

    $("#saveCampaign").click(async function(){ 
        listCampaigns = "";  

        $("#tableCampaign tr td i").each(function(){
            let val = $(this).data("campaign");
            listCampaigns += val + "|";  
        })

        let index = listCampaigns.lastIndexOf("|");
        campaigns = listCampaigns.slice(0,index); 

        await $.ajax({
            url: `//localapi.trazk.com/cla/index.php?task=configFraudClick&userToken=${userToken}&cid=${cid="6326778549"}&campaigns=${campaigns}`,
            type: "POST"
        }).then(data => {
            data = JSON.parse(data);
            console.log(data); 
        })  
    })
})