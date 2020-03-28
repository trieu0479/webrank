const getListAdwordsAccount = async () => {
    try {
      //return await axios.get(`//localapi.trazk.com/fff/user.php?task=getUserAdwords&userToken=${userToken}`)
      return await axios.get(`//localapi.trazk.com/fff/user.php?task=getUserAdwords&userToken=1`)
    } catch (error) {
      console.error(error)
    }
  }
function formatAdWordsCid(item){
    if (item.isvip == 1) txtVip = "[VIP]"; else txtVip = "[FREE]";
    return txtVip +" " + item.adwords_cid ;
}
function showAlertSelectAdWords(listAdWordsAccount){
    var options = "";
    for (i=0; i<listAdWordsAccount.length;i++){
        options += `<option value="${formatAdWordsCid(listAdWordsAccount[i]).adwords_cid}">${formatAdWordsCid(listAdWordsAccount[i])}</option>`;
        
    }
    Swal.fire({
        title: 'Vui lòng chọn tài khoản AdWords',
        html:
          `
          <div class="text-left">
          <button type="button" class="btn waves-effect waves-light btn-block  btn-outline-info">Kết nối tài khoản Adwords Mới</button>

          <h5 class="m-t-30 m-b-10"><strong>Hoặc</strong> chọn tài khoản AdWords của bạn</h5>
            <select class="form-control custom-select">
                <option value="0">Chọn tài khoản AdWords</option>
                ${options}
            </select>
            <div class="m-t-15">
            <button type="button" class="btnXemBaoCao btn waves-effect waves-light btn-block  btn-outline-danger">Xem báo cáo</button>
            </div>
          

          </div>
          `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        focusConfirm: false,
        padding:"4em",
        width:"600px",
        position:"top",
       
      })
}

function showAlertConnectNewAdWords(){
    Swal.fire({
        title: 'Bạn cần thêm 1 tài khoản AdWords',
        html:
          `
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
        padding:"3em",
        width:"600px",
        position:"top",
       
      })
}

getListAdwordsAccount().then(response => {
      let listAdWordsAccount = response.data.data.data;
      if (!listAdWordsAccount || listAdWordsAccount.length == 0){
            showAlertConnectNewAdWords();
      }else{
        
        currentAdWordCid = Cookies.get('currentAdWordCid');
        if(!currentAdWordCid){
            showAlertSelectAdWords(listAdWordsAccount);
        }else{
            console.log("Chuyen trang show report");
        }
      }
  });