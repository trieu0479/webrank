$(document).ready(() => {  

   
    var homeStartDate = moment().subtract(90, 'days').startOf('day').format('DD/MM/YYYY');;
    var homeEndDate = moment().format("DD/MM/YYYY");  


    getAdwordsMarketVietnamMobilePC(homeStartDate, homeEndDate);
    //getAdwordsMarketVietnamDeviceChart(homeStartDate, homeEndDate);
    updatedateRange(homeStartDate, homeEndDate);

    getAdwordsMarketVietnamYoutube(homeStartDate, homeEndDate);
    getAdwordsMarketVietnamYoutubeChart(homeStartDate, homeEndDate);
    getAdwordsMarketVietnamGDN(homeStartDate, homeEndDate);
    getAdwordsMarketVietnamGDNChart(homeStartDate, homeEndDate);
    getAdwordsMarketVietnamSearch(homeStartDate, homeEndDate);
    getAdwordsMarketVietnamSearchChart(homeStartDate, homeEndDate);

    //update

    getLocalData().then(res=>{ 
		if(res)
		{
            res = JSON.parse(res)
            googleConstantData(res);
            syncData().then(data => {
                localStorage.setItem('report_data',JSON.stringify(data)); 
            })
		} else {
			loadReportData().then(res=>{ 
                googleConstantData(res);
                localStorage.setItem('report_data',JSON.stringify(res)); 
			})
		}
	})
    // googleConstantData();
    rank(); 

    $('a#backtop').click(function(event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top

        }, 700);

        event.preventDefault();



    });

    $("#backtop").removeClass("backtop");
    $("#backtop").addClass("backtop-scroll");

    $(window).on('scroll', function() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            $("#backtop").removeClass("backtop-scroll");
            $("#backtop").addClass("backtop");
        } else {
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