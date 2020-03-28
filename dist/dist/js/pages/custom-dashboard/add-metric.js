filterSelection('all');
function filterSelection(f){
  var newActiveFilter=$(".filters ."+f);
  if(newActiveFilter.hasClass('active')){
    //do nothing
  } else {
    //update filter
    $('.active').removeClass('active');
    newActiveFilter.addClass('active');
    //apply filter
    if(f=='all'){
      $('.filterDivs').children().removeClass('hide');
    } else {
     $('.filterDivs').children("."+f).removeClass('hide');
     $('.filterDivs').children().not("."+f).addClass('hide');
    }
  }
}
var arr_task = [];
$(".filterDivs li").each(function(){
  let temp = {
      id: $(this),
      task: $(this).find(".add-Metric").data('stask')
    }
  arr_task.push(temp)
})
$(document).ready(function(){
  var url = new URL(location.href);
  var key = url.searchParams.get("key");
  var keywords1 = url.searchParams.get('keywords1')
  if(keywords1){
    $(".filterDivs li.ptwebsite,li.apps").addClass('d-none')
    $(".filterDivs li:nth-child(2),li:nth-child(1)").addClass('mt-0')
    $(".filter.ptwebsite,.filter.apps,.filter.all").addClass('d-none')
  }else{
    $(".filterDivs li.pttukhoa").addClass('d-none')
  }
  $.get(`//localapi.trazk.com/report/index.php?task=getReportByKey&userToken=${userToken}&key=${key}`,function(data){
    data = JSON.parse(data);
    let reporttask = data.data.reportData
    reporttask.forEach((ele1,index1) => {
      arr_task.forEach((ele2,index2) => {
        if(ele1.task == ele2.task){
          ele2.id.addClass('d-none')
        }
      });
    });
  })
})