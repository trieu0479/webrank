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

            if($(this).hasClass("btn-pay-now")) { 
                classFuncs.showPopupRecharge(classFuncs.getSumPrice());
            } else {
                
            }
        }
    })
    
})