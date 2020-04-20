import ClassFuncs from "./core.js"; 

$(document).ready(() => {

    let classFuncs = new ClassFuncs(); 

    // $(".iframeContainer-maxlead").attr("src",`http://themes.trazk.com/003/maxLead_CallButton/preview_url.php?url=${classFuncs.getWebsite()}&widgetId=5e9275b4dc572`)

    $(".btn-skip,.btn-use").click(function() {
        console.log($(this));
        if($(this).hasClass("btn-use")) { 
            classFuncs.setSession(classFuncs.action,1);
        } else {
            classFuncs.setSession(classFuncs.action,0);
        }

        classFuncs.setAction("google");
        classFuncs.location();
    })

})