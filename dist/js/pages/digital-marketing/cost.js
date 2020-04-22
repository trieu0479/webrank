import ClassFuncs from "./core.js"; 


$(document).ready(() => { 
    let classFuncs = new ClassFuncs();  

    let obj_tool = [
        {
            name: "FFF Contact",
            price: 199000,
            id: "FFFcontact",
            nameTool: "tool-widget"
        },
        {
            name: "FFF Chat",
            price: 199000,
            id: "FFFchat",
            nameTool: "tool-chatbot"
        },
        {
            name: "Mua Tài Khoản Google Ads",
            price: 2500000,
            id: "FFFgoogle-ads",
            nameTool: "google"
        },
        {
            name: "FFF Traffic",
            price: 199000,
            id: "FFFtraffic",
            nameTool: "traffic-website",
        },
        {
            name: "FFF CRM",
            price: 199000,
            id: "FFFcrm",
            nameTool: "data-customer",
        }
    ]; 
    
    classFuncs.renderTableTool(obj_tool); 

    $("body").on("change",".fff-tool",function() {
        classFuncs.eventCheckbox($(this),obj_tool);
    })

    $(".btn-pay-later,.btn-pay-now").click(function() {
        if (userToken == userTokenDemo) {
            showLoginModal();

        } else {
            let arr_checked_tool = classFuncs.arrayCheckedTool(); 

            let tools = [];

            arr_checked_tool.forEach((val,index) => {
                let temp = {
                    toolName: val.toolName,
                    status: val.status
                }

                tools.push(temp);
            })

            
            let post = {
                domain: classFuncs.website,
                tools
            }

            classFuncs.createNewOrder(post).then(res => {
               return res; 
            }).then(res => {
                if(res != "") {
                    let post = {
                        toolKey: res,
                        totalCost: classFuncs.sumPrice,
                        discountCost: 0
                    }
                    classFuncs.updateOrderCost(post).then(data => {
                        console.log(data);
                    })
                }
            })
            
            // classFuncs.getListMyOrder().then(data => console.log(data));
            // if($(this).hasClass("btn-pay-now")) { 
            //     classFuncs.showPopupRecharge(classFuncs.getSumPrice());
            // } else {
                
            // }
        }
    })
    
})