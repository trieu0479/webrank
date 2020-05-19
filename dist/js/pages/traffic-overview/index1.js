import Core from "./core.js";


$(document).ready(function() {

    const core = new Core();

    $("#btnSubmitUrl").click(() => {
        let val = $("#inputUrl").val();

        if (val != "") {
            core.checkTypeAndShowPopupOrder(val);
        } else {
            core.showPopupAlert("error", "Vui lòng nhập url !");
        }

    })

    $("#inputUrl").keypress(e => {
        if (e.keyCode == 13) {
            $("#btnSubmitUrl").click();
        }
    })









})