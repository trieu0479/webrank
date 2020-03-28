function suggesitionCompareDomain(arrDomain,vitri){
    console.log(vitri)
    $(`#selectWebsiteScrollbar${vitri == "#input-submit1" ? 1 : 2}`).perfectScrollbar();
    $(`#selectWebsiteScrollbar${vitri == "#input-submit1" ? 1 : 2}`).removeClass('d-none').addClass('d-flex')
    selectWebsite = ''
    $.each(arrDomain, (index, site) => {
        selectWebsite += `<span class="p-2" data-domain="${site}"><img class="p-1 mr-2 border rounded bg-secondary" src="https://www.google.com/s2/favicons?domain=${site}"/>${site}</span>`
    });
    $(".selectWebsite").html(selectWebsite);
    $(".selectWebsite span").click(function () {
        console.log($(this).data("domain"))
        $(`#input-submit${(vitri == "#input-submit1") ? 1 : 2}`).val($(this).data("domain"));
        $(`#selectWebsiteScrollbar${(vitri == "#input-submit1") ? 1 : 2}`).removeClass('d-flex').addClass('d-none')
    })
}
function suggesitionCompare() {
    $("#input-submit1").keyup(e => {
        let val = $("#input-submit1").val()
        let vitri = $("#input-submit1").selector
        let url = `https://localapi.trazk.com/webdata/websiteapi.php?task=getDomainSuggesion&domain=${val}`
        getData(url).then(data => {
            let arrDomain = data.data.domains
            suggesitionCompareDomain(arrDomain,vitri)
        })
    });
    $("#input-submit2").keyup(e => {
        let val = $("#input-submit2").val()
        let vitri = $("#input-submit2").selector
        let url = `https://localapi.trazk.com/webdata/websiteapi.php?task=getDomainSuggesion&domain=${val}`
        getData(url).then(data => {
            let arrDomain = data.data.domains
            suggesitionCompareDomain(arrDomain,vitri)
        })
    });
}
const getDomainCompare = async () => {
    const result = await Swal.fire({
        title: 'Hãy nhập website để so sánh',
        width: 600,
        padding: '4em',
        position: 'top',
        html: 
            `<div class="mb-3" style="position: relative;">
                <input id="input-submit1" type="text" class="input-submit p-10 font-14 font-gg w-100 border" autocomplete="off" placeholder="Nhập tên miền website của bạn vào đây">
                <div id="selectWebsiteScrollbar1" class="selectWebsite bg-white d-none flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: 100%; bottom: 0; transform: translateY(100%);z-index:100"></div>
            </div>` +
            `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
            `<div class="mt-3" style="position: relative;">
                <input id="input-submit2" type="text" class="input-submit p-10 font-14 font-gg w-100 border" autocomplete="off" placeholder="Nhập tên miền website của bạn vào đây">
                <div id="selectWebsiteScrollbar2" class="selectWebsite bg-white d-none flex-column text-left m-auto overflow-auto rounded shadow-sm pb-3" style="height: auto; position: absolute; width: 100%; bottom: 0; transform: translateY(100%);z-index:100"></div>
            </div>`,
        focusConfirm: false,
        showCloseButton: true,
        confirmButtonText: 'So Sánh',
        onOpen: () => {
            suggesitionCompare()
            // $('#input-submit2').keypress(event => (event.which == 13) ? $('.swal2-confirm').click() : null);
        },
        preConfirm: () => {
            if (document.getElementById('input-submit1').value == "" || document.getElementById('input-submit2').value == "") {
                Swal.showValidationMessage(
                    `Vui lòng nhập đủ website`
                )
            } else {
                if (document.getElementById('input-submit1').value == document.getElementById('input-submit2').value) {
                    Swal.showValidationMessage(
                        `Hai website không được trùng`
                    )
                }
            }

            return [
                document.getElementById('input-submit1').value,
                document.getElementById('input-submit2').value
            ]
        }

    })

    if (result.dismiss == undefined) {
        return result;

    }

};

// Change website
$(".SubmitCompare").click(() => {
    getDomainCompare().then(data => {
        if (data) {
            location.href = `?view=traffic-website&action=compare&domain1=${data.value[0].toLowerCase()}&domain2=${data.value[1].toLowerCase()}`;
            // changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
        }
    });
});