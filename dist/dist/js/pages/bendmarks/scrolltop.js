$(document).ready(() => { 
    $('a#backtop').click(function(event) {
        // console.log($.attr(this, 'href'));
        // $($.attr(this, 'href')).offset().top;
        $('html, body').animate({
             scrollTop: 60,
        }, 700);
        event.preventDefault();

    });

    $("#backtop").removeClass("backtop");
    $("#backtop").addClass("backtop-scroll");

    $(window).on('scroll',function() {
        // console.log(window.scrollTop);
        if ($(this).scrollTop() > 1000 ) {
            
            $("#backtop").removeClass("backtop-scroll");
            $("#backtop").addClass("backtop");
        }
         else {
            $("#backtop").removeClass("backtop");
            $("#backtop").addClass("backtop-scroll");
        }
    })
    $("#content-tool div").click(function(){
        let location = $(this).data("href");
        if(location)
            window.location.href = location;
    })
})