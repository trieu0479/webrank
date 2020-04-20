import ClassFuncs from "./core.js"; 

$(document).ready(() => {

    let classFuncs = new ClassFuncs(); 


    $(".btn-skip,.btn-use").click(function() {
        console.log($(this));
        if($(this).hasClass("btn-use")) { 
            classFuncs.setSession(classFuncs.action,1);
        } else {
            classFuncs.setSession(classFuncs.action,0);
        }

        classFuncs.setAction("cost");
        classFuncs.location();
    })

})