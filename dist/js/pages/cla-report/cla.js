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

          <h5 class="m-t-30 m-b-30"><strong>Hoặc</strong> chọn tài khoản AdWords của bạn</h5>
            <select id="select-cid" class="form-control custom-select">
                <option value="0">Chọn tài khoản AdWords</option>
                ${options}
            </select> 
          </div>
        <div class="mt-5">
            <button type="button" class="btnXemBaoCao btn waves-effect waves-light btn-block  btn-outline-danger">Xem báo cáo</button>
        </div>
          `,
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
            setLocalStorage("moivao", true)

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

async function showAlertPromotion() {
    const result = await Swal.fire({
        title: 'Chào mừng bạn đến với tính năng chặn click ảo mới',
        html: `
          <div>
            <div class="text-center p-t-10 p-b-10">
                <img width="128px" src="assets/images/cla/cpm.png">
            </div>
            <p class="mt-4">Bạn cần liên hết tài khoản Google Ads vào hệ thống để trải nghiệm tính năng.</p> 
          </div>
          `,
        // showCloseButton: true,
        showCancelButton: false,
        allowOutsideClick: false,
        // showConfirmButton: false,
        confirmButtonText: 'Tiếp theo',
        focusConfirm: false,
        padding: "3em",
        width: "600px",
        position: "top",
        preConfirm: () => {

        }
    })

    if (result.value) {
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
    }
}

async function getYourIP() {
    try {
        return await $.get('//api.ipify.org?format=json')
    } catch (error) {
        console.error(error)
    }
}

async function showAlertTestIP(ip) {
    const result = await Swal.fire({
        title: 'Để thấy sự vi diệu của tính năng chặn click ảo, 3F mời bạn thử chặn IP của bạn.',
        //     html: ` 
        //   <input id="swal-input1" class="swal2-input">  
        //   `,
        showCloseButton: true,
        showCancelButton: false,
        // showConfirmButton: false,
        confirmButtonText: 'Tiếp theo',
        focusConfirm: false,
        padding: "3em",
        width: "600px",
        position: "top",
        onOpen: () => {
            $("#swal-input1").val(ip);
        },
        preConfirm: () => {

        }
    })


    if (result.value) {
        window.location.href = `?action=block-one-ip`;
    }


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

function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function getLocalStorage(name) {
    return localStorage.getItem(name);
}

$(document).ready(() => {



    cid = url.searchParams.get("cid");
    if (cid == "" || cid == null) {
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
    }


    // if (getCookie("fromcla")) {
    //     from = getCookie("fromcla");
    //     to = getCookie("tocla");
    //     $('#input-datepickerV1 span').html(moment(from, 'YYYY-MM-DD').format("DD/MM") + " - " + moment(to, 'YYYY-MM-DD').format("DD/MM/YYYY"));
    //     $('.dateReport').html(moment(from, 'YYYY-MM-DD').format("DD/MM") + ' - ' + moment(to, 'YYYY-MM-DD').format("DD/MM/YYYY"));

    // } else {
    //     from = moment(startDate).format("DD-MM-YYYY");
    //     to = moment(endDate).format("DD-MM-YYYY");

    //     $('#input-datepickerV1 span').html(moment(startDate).format("DD/MM") + ' - ' + moment(
    //         endDate).format("DD/MM/YYYY"));
    // }



    $("#selectListAdwordsAccount").on("change", function () {
        let val = $(this).val();
        cid = val;
        window.location.href = `?cid=${cid}`;
    })


   





})