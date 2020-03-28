var userToken = ""; //"cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb";
/*
var cid = ""; //5390797993 //6326778549
var MONITOR_ONLY = "";
var BROWSER_RULE = "";
var BIGDATA_RULE = "";
var DISABLE_MOBILE = "FALSE";
var VPN_PROXY_LIST = "";
var EXCLUSION_LIST = "";
var LOCATION_RULE = "";
var IP_RULE = "";
var GROUP_RULE = "";
var network_3G_4G_LIST = "";
var campaigns = "";
var dayNow = new Date();
var now = new Date();
var endDate = now.setDate(now.getDate() - 7);
var startDate = now.setDate(now.getDate() - 14);;
var from;
var to;
var from;
var to_;
*/
var _url = new URL(location.href);
cid = originalCid = _url.searchParams.get("cid")

// set usertoken
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

userToken = url.searchParams.get("userToken");

if (userToken) { 
    console.log("vào")
    setCookie("userToken", userToken, 3);
} else {
    if (!getCookie("userToken")) {
        window.location.href = "https://admin.fff.com.vn"
    } else {
        userToken = getCookie("userToken");
    }
}




//API log kien thuc
// async function getTutorialFraudClick() {
//     return $.get(`//localapi.trazk.com/cla/index.php?task=getTutorialFraudClick&userToken=${userToken}&cid=${cid}`);
// }


// getTutorialFraudClick().then(data => {
//     data = JSON.parse(data);
//     let {
//         knowAdwordsAccountPosition,
//         knowBlockYourIp,
//         knowDownloadIp,
//         knowFFFReport,
//         knowIpBockIPButton,
//         knowIpInfo,
//         knowIpStatus,
//         knowMonitorMode,
//         knowOtherAppPosition,
//         knowSelectCampaignToBlock
//     } = data.data

//     console.log(data.data);
//     if(knowAdwordsAccountPosition == false)
//     { 
//         var info = new Anno({
//             target: '#quanlyAdWords',
//             content: 'Bấm vào để quản lý tài khoản Adwords',
//             position: "bottom",
//             buttons: [{
//                 text: 'Đóng',
//                 position: "bottom"
//             }]
//         })

//         // info.show()
//     }
// })