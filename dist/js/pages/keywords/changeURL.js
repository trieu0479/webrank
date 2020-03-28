function changeURL(type,input=null,lang='vn'){
   var newURL ='';
   if (type == "keyword"){
      if (input){
         if (isLogin == "false"){
            newURL ='https://fff.com.vn/ket-qua-phan-tich-tu-khoa/' + input +'/'+lang+'/';
         }else{
            newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis&action=result&keyword='+input+'&language='+lang;
         }
      }else{
         if (isLogin == "false"){
            newURL ='https://fff.com.vn/cong-cu-phan-tich-tu-khoa-fff-keywords-tools/';
         }else{
            newURL = 'http://insight.fff:82/keywords-tool.php?view=keywords-analysis&action=index';
         }
      }
   }else if (type == "website"){
      if (input){
         if (isLogin == "false"){
            newURL ='https://fff.com.vn/ket-qua-phan-tich-website/' + input +'/';
         }else{
           newURL = 'https://admin.fff.com.vn/v5/website-analysis.php?view=similar&action=result&domain='+input;
         }
      }else{
         if (isLogin == "false"){
            newURL ='https://fff.com.vn/cong-cu-phan-tich-doi-thu/';
         }else{
           newURL = 'https://admin.fff.com.vn/v5/website-analysis.php';
         }
      }
   }
  
   top.window.location.href= newURL;
   return false;
  }
  function changeURLCompare(url1,url2){
      if (isLogin == "false"){
         newURL ='https://fff.com.vn/so-sanh-doi-thu/'+url1+'/'+url2+'/';
      }else{
         newURL = 'https://admin.fff.com.vn/v5/website-analysis.php?action=compare&domain1='+url1+'&domain2='+url2;
      }
      top.window.location.href= newURL;
   return false;
  }
$(document).ready(() => {
    $("body").on("click",".changeURL",function(){
        var type = $(this).attr("data-type");
        var input = $(this).attr("data-input");
        var countryData = $("#country").countrySelect("getSelectedCountryData");
       
        changeURL(type,input,countryData.iso2);
        return false;
     })
});