import createCompare from '/dist/js/default/report/load-compare.js';
import createCompareTag from '/dist/js/default/report/load-compare-tag.js';
$(document).ready(function () {
    var url = new URL(location.href);
    var domain1 = url.searchParams.get("domain1");
    var domain2 = url.searchParams.get("domain2");
    var domain3 = url.searchParams.get("domain3");
    var domain4 = url.searchParams.get("domain4");
    var domain5 = url.searchParams.get("domain5");
    var keywords1 = url.searchParams.get("keywords1");
    var keywords2 = url.searchParams.get("keywords2");
    var key = url.searchParams.get("key");
    var viewtask;
    var temp
    $('#addMetric').click(function () {
        $('.page-wrapper').load('body/dashboardweb/addmetric.php')

    })
    $('body').on('click', '.button_add', function () {
        let task = $(this).parent().attr('data-stask')
        temp = task
        viewtask = {
            task
        }
        $('.page-wrapper').load('body/dashboardweb/review-metric.php').load(createCompare(viewtask, domain1, domain2, domain3, domain4, domain5, "false", "true")).load(createCompareTag(viewtask,keywords1,keywords2,"false","true"))
    })
    $('body').on('click', '#btnGoBack', function(){
        $('.page-wrapper').load('body/dashboardweb/addmetric.php')
    })
    $('body').on('click', '.create_db', function(){
        var posts = {};
        var post = {};
        var vitri = [];
        post.task = temp
        post['gs-x'] = 0
        post['gs-y'] = 0
        post['gs-width'] = 6
        post['gs-height'] = 4
        vitri.push(post);
        posts.data = vitri
        $.post(`//localapi.trazk.com/report/index.php?userToken=${userToken}&task=addABlockToReport&key=${key}`,posts, function(res){
            console.log(res)
            location.reload()
        })
        
    })
})