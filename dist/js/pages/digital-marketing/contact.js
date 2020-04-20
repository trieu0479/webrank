// import {showPopupError} from "./core.js"; 
import ClassFuncs from "./core.js"; 


$(document).ready(() => {
    let classFuncs = new ClassFuncs(); 

    $(".btn-next").click(() => {

        let name = classFuncs.getVal("#input-name");
        let phone = classFuncs.getVal("#input-phone");
        let email = classFuncs.getVal("#input-email"); 

        if(name == "" || phone == "" || email == "") {
            classFuncs.showPopupError("Vui lòng nhập đủ thông tin !");
        } else {
            
            if(classFuncs.checkIsValidEmail(email) && classFuncs.checkIsValidPhone(phone)) { 
                classFuncs.setAction("tool-widget");
                classFuncs.location();

            } else {
                if (!classFuncs.checkIsValidPhone(phone)) {
                    classFuncs.showPopupError("Số điện thoại không hợp lệ !");
                    
                } else if(!classFuncs.checkIsValidEmail(email)) {
                    classFuncs.showPopupError("Email không hợp lệ !");
                } 
            }
        }

    })

})