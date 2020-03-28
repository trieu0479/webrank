$(document).ready(function(){
    let language = url.searchParams.get("language") ? url.searchParams.get("language") : "vn";
    let country = url.searchParams.get("country") ? url.searchParams.get("country") : "vn";
    let network = url.searchParams.get("network") ? url.searchParams.get("network") : "web";
    updateSelectedLanguge(language);
    updateSelectedCountry(country);
    updateSelectedNetwork(network);
    function updateSelectedLanguge(language){
        $(".selectLanguage option[value="+language+"]").attr('selected','true');
        $(function(){ $(".selectpicker").selectpicker('render'); })

    }
    function updateSelectedCountry(country){
        $(".selectCountry option[value="+country+"]").attr('selected','true');
        $(function(){ $(".selectpicker").selectpicker('render'); })

    }
    function updateSelectedNetwork(network){
        $(".selectNetwork option[value="+network+"]").attr('selected','true');
        $(function(){ $(".selectpicker").selectpicker('render'); })
    }

    const submitKeyword = () => {
        keywords = $('.iptKeyword').val();
        var lang = $('select.selectLanguage option:selected').val();
        var country = $('select.selectCountry option:selected').val();
        var network = $('select.selectNetwork option:selected').val();
        if (keywords == '') {
            Swal.fire('Vui lòng nhập từ khoá', 'VD: tin tuc, bat dong san, mua nha,...', 'error');
        } else {
            $.get("//localapi.trazk.com/fff/quangcao.php?task=getLimitByToolname&userToken=" + userToken + "&toolName=keywords", function (data1) {
                var x = JSON.parse(data1)
                var newURL = "index.php?view=keyword-planner&action=result&keywords=" + keywords + "&language=" + lang + '&country=' + country  + "&network=" +network;
                $.post(`//localapi.trazk.com/fff/quangcao.php?task=insertToLog&userToken=${userToken}&toolName=keywords`, function (res) {

                })
                window.location.href = newURL;
            })
        }
    }

    $('.btnSubmitKeyword').click(() => submitKeyword());


    $('.iptKeyword').keypress(event => (event.which == 13) ? submitKeyword() : null); //bắt event enter


});