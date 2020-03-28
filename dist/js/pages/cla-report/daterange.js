$(document).ready(function () {
    const url = new URL(location.href);
    fromSelect = url.searchParams.get("from")
    toSelect = url.searchParams.get("to")

    if (fromSelect == undefined || fromSelect == "") from = moment().subtract(15, 'days').startOf('day').format('DD/MM');
    else from = moment(fromSelect, "DD/MM/YYYY").format('DD/MM')
    if (toSelect == undefined || toSelect == "") to = moment().subtract(1, 'days').startOf('day').format('DD/MM/YYYY');
    else to = moment(toSelect, "DD/MM/YYYY").format('DD/MM/YYYY')

    $('.dateReport').html(from + ' - ' + to);  


    if (fromSelect == undefined || fromSelect == "") fromSelect = moment().subtract(15, 'days').startOf('day').format('DD/MM/YYYY');
    if (toSelect == undefined || toSelect == "") toSelect = moment().subtract(1, 'days').startOf('day').format('DD/MM/YYYY'); 

    $("#rangeDate").flatpickr({
        locale: "vn",
        mode: 'range',
        dateFormat: "d/m/Y",
        maxDate: new Date(),
        defaultDate: [fromSelect, toSelect],
        onClose: function (date) { 

            var startDay = flatpickr.formatDate(date[0], "d/m/Y");
            var endDay = flatpickr.formatDate(date[1], "d/m/Y"); 

            
            if(startDay != fromSelect || endDay != toSelect){ 
                action = originalCid = url.searchParams.get("action");
                if (action == "" || action === undefined ||action == null) action = "overview-report";
                userToken = originalCid = url.searchParams.get("userToken");
                cid = url.searchParams.get("cid");
                newUrl = "?action=" + action + "&cid=" + cid + "&from=" + startDay + "&to=" + endDay;
                window.location.href = newUrl;
            } 

        }
    })
});