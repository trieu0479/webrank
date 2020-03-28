var userTokenDemo = "ZGdZVktsdE91by9qOUtndjc4MjYwTHdQeXllT3NKTS9ZUHVzdThJYTNWST06OhMNb7G48NOo6noCn1JFw0I"; //demo@fff.com.vn 
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
let dayNow = new Date();
let now = new Date();
var endDate = now.setDate(now.getDate() - 7);
var startDate = now.setDate(now.getDate() - 14);;
var from;
var to;
var from;
var to_;

const url = new URL(location.href);
cid = originalCid = url.searchParams.get("cid")

// set usertoken
function setCookie(cname, cvalue, exdays,domain='.fff.com.vn') {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    // document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=" + domain + ";path=/";
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

/*overight default token */
//userToken = url.searchParams.get("userToken");

if (url.searchParams.get("userToken")){
    userToken = url.searchParams.get("userToken");
    
    setCookie("userToken", userToken, 3);
}else{
    userToken = getCookie("userToken");
}
if (!userToken) userToken = userTokenDemo;

// truong hop con lai se la default token 
/*overight default token */

async function getListAdwordsAccount() {
    try {
        return await $.get(`//localapi.trazk.com/fff/user.php?task=getUserAdwords&userToken=${userToken}`)
    } catch (error) {
        console.error(error)
    }
}

function formatAdWordsCid(item) {
    if (item.isvip == 1) txtVip = "[VIP]";
    else txtVip = "[FREE]";
    return txtVip + " " + item.adwords_cid;
}

async function showAlertSelectAdWords(listAdWordsAccount) {
    var options = "";
    for (i = 0; i < listAdWordsAccount.length; i++) {
        options += `<option value="${listAdWordsAccount[i].adwords_cid}">${formatAdWordsCid(listAdWordsAccount[i])}</option>`;

    }

    const result = await Swal.fire({
        title: 'Vui lòng chọn tài khoản AdWords',
        html: `
          <div class="text-left mb-2">
          <button type="button" class="btnKetNoi btn waves-effect waves-light btn-block  btn-outline-info">Kết nối tài khoản Adwords Mới</button>

          <h5 class="m-t-30 m-b-30"><strong>Hoặc</strong> chọn tài khoản AdWords của bạn 
            <span class="float-right"><a target="blank" href="https://admin.fff.com.vn/adwords.php?view=config&amp;action=quan-ly-tai-khoan">Toàn bộ tài khoản</a></span>
          </h5>
            <select id="select-cid" class="form-control custom-select">
                <option value="0">Chọn tài khoản AdWords</option>
                ${options}
            </select> 
          </div>
        <div class="mt-5">
            <button type="button" class="btnXemBaoCao btn waves-effect waves-light btn-block  btn-outline-danger">Xem báo cáo</button>
        </div> `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Tiếp theo',
        focusConfirm: false,
        padding: "4em",
        width: "600px",
        position: "top",
        onOpen: () => {
            $("#select-cid").on("change", function () {
                // setCookie("selected-cid",$(this).val(),1); 

            });

            $(".btnKetNoi").click(function () {
                window.location.href = "https://admin.fff.com.vn/popup.php?view=popup&action=connect-adwords";
            })

            $(".btnXemBaoCao").click(function () {

                $(".swal2-confirm").click()
            })
        },
        preConfirm: async () => {
            if ($("#select-cid").val() == 0) {
                Swal.showValidationMessage(
                    `Vui lòng chọn cid !`
                )
            } 

            return $("#select-cid").val();
        }
    })

    if (result.value) {
        cid = result.value;
        window.location.href = `?cid=${cid}`;
    }

}

function showAlertConnectNewAdWords() {
    Swal.fire({
        title: 'Bạn cần thêm 1 tài khoản AdWords',
        html: `
          <div>
            <div class="text-center p-t-10 p-b-10">
              <i class="flaticon-presentation-1 font64"></i>
            </div>
            <p>Để xem report (báo cáo) quảng cáo Google Ads bạn cần kết nối tài khoản Google Ads vào hệ thống</p>
            <div>
              <button type="button" class="btn waves-effect waves-light btn-info">Liên Kết AdWords</button>
            </div>
          </div>
          `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        focusConfirm: false,
        padding: "3em",
        width: "600px",
        position: "top",

    })
}

getListAdwordsAccount().then(data => {
    data = JSON.parse(data);
    if (data.data.data) {
        let option = "";

        data.data.data.forEach((ele, index) => {
            if (ele.adwords_cid == cid) {
                option += `<option selected="selected" value="${ele.adwords_cid}">${formatAdWordsCid(ele)}</option>`;
            } else {
                if (index == 0)
                    option += `<option selected="selected" value="${ele.adwords_cid}">${formatAdWordsCid(ele)}</option>`;
                else
                    option += `<option value="${ele.adwords_cid}">${formatAdWordsCid(ele)}</option>`;
            }
        })

        $("#selectListAdwordsAccount").html(option)
    }
})

async function getMySupporter() {
    return await $.get(`//localapi.trazk.com/fff/user.php?task=getMySupporter&userToken=${userToken}`);
}

$(document).ready(() => {

    $('.chatOnline').hide();

    $("#quanlyAdWords").click(function () {
        getListAdwordsAccount().then(response => {
            response = JSON.parse(response);
            let listAdWordsAccount = response.data.data;
            if (!listAdWordsAccount || listAdWordsAccount.length == 0) {
                showAlertConnectNewAdWords();
            } else {
                currentAdWordCid = Cookies.get('currentAdWordCid');
                if (!currentAdWordCid) {
                    showAlertSelectAdWords(listAdWordsAccount);
                } else {
                    console.log("Chuyen trang show report");
                }
            }
        });
    })

    getMySupporter().then(data => {
        data = JSON.parse(data);
        let {
            fullname,
            phone,
            hotline,
            avatar
        } = data.data.data;
        $("#support").click(() => {
            $("#support").removeClass("active");
            Swal.fire({
                html: `   
                <div class="card text-left m-auto">
                    <img class="m-auto card-img-top rounded-pill" src="${avatar}" alt="Card image" style="width:30%">
                    <div class="card-body m-auto">
                        <h4 class="card-title text-center font-weight-bold font-gg font-20">
                            ${fullname}
                        </h4>  
                        <div class="mt-2 text-center font-16 font-gg text-muted font-weight-bold">
                             <i class="fas fa-map-marker-alt mr-2"></i>320/9 Trường Chinh - F13 - Tân Bình, Hồ Chí Minh 
                        </div>   
                        <div class="d-flex mt-4">
                            <a href="tel:${phone}" class="px-2 ml-3 btn btn-outline-primary font-13 font-gg font-weight-bold mr-3 mr-lg-3 w-90">
                                <i class="fas fa-phone-alt font-18 mr-2"></i> 
                                ${phone}
                            </a>
                            
                            <a href="https://chat.zalo.me/?phone=84788888539" class="mr-0 mr-lg-3 px-2 mt-3 mt-lg-0 ml-lg-auto btn btn-outline-primary font-13 font-gg font-weight-bold ml-3 ml-lg-0 w-90"> 
                                <img class="mr-2" src="https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png" width="20px"/>
                                Chat Zalo
                            </a>
                        </div>
                    </div>
                    <div class="text-center mb-2">
                        Nếu bạn không thể liên hệ với hỗ trợ viên, vui lòng gọi Hotline 
                        <span class="font-13 font-gg text-danger font-weight-bold">
                            ${hotline[0] + " - " + hotline[1]}
                        </span>
                    </div>
                </div>`,
                onOpen: () => {
                    $("#support").removeClass("active");
                },
                onClose: () => {
                    $("#support").removeClass("active");
                },
                width: 400,
                showConfirmButton: false,
                showCloseButton: true,
            })

        })
    })

    $.get(`//localapi.trazk.com/fff/user.php?task=getUserWebsites&userToken=${userToken}`,function(res) {
        res = JSON.parse(res);
        if(res.data.data.length) {
            let web = res.data.data[0].website;

            var FFF_SOCKET_URL_LIST = "https://ws.fff.com.vn/smartchat-agent-monitor";
            var tongOnline = 0;
            fff_chat_socket_monitor = io.connect(FFF_SOCKET_URL_LIST);
            fff_chat_socket_monitor.on('connect', () => {
                fff_chat_socket_monitor.emit('connected', { agentId: web });
            });
        
            fff_chat_socket_monitor.on('user-online', data => { 
                if(data.count_online == 0) {
                    $('.chatOnline').hide();
                } else {
                    if (data.count_online < 10 ) data.count_online = "0"+data.count_online;
                    $('.chatOnline').show();
                    $('.chatOnline').html(`${data.count_online}`);
                }
            });
            
            fff_chat_socket_monitor.on('new-client-chat', data => {  
                if (data.fromClient == 1){
                    id = data.clientId;
                    var newname = "Khách_" + id.substr(-4);
                    $.toast({
                        heading: 'Lời nhắn từ ' + newname,
                        icon: 'info',
                        text: data.content,
                        chatClientId: id,
                        position: 'top-right',
                        textColor: '#343a40',
                        loaderBg: '#4a8afb',
                        bgColor: 'aliceblue',
                        icon: 'chat',
                        hideAfter: 9000,
                        stack: 15
                    });
                }
            });
        }

    })

    $('body').on('click', '.jq-toast-wrap', function() {
        var clientId = $(this).attr("data-clientId");
        var url = `//admin.fff.com.vn/livechat.php#client=${clientId}`;
        window.location.href = url;
});


})