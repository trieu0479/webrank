import obj from "./obj.js";


export default class Select {

    selectPlatform(type) {
        let platform = obj.platform;
        platform.forEach(val => {
            $(".select-platform").append(`<option ${(type == val.value) ? "selected" : ""} value="${val.value}">${val.name}</option>`);
        })


        $('.select-platform').select2();
        $('.select-platform').on('select2:select', (e) => {
            let val = e.params.data.id;
            this.selectService(val);
        });
    }

    selectService(type) {

        $(".select-service").html("");
        $(".content-service").html("");

        let count = 0;
        let service = obj.service;
        service.forEach((val, index) => {

            if (val.type == type) {

                $(".select-service").append(`<option value="${val.value}">${val.name}</option>`);
                $('.content-service').append(`<div id="${val.value}" class="des ${(count != 0) ? "d-none" : ""}">${val.html}</div>`)
                count++;
            }
        })

        if (!$('.select-service').hasClass("select2-hidden-accessible")) {
            $('.select-service').select2();
            $('.select-service').on('select2:select', function(e) {
                let val = e.params.data.id;
                $('.des').addClass("d-none");
                $(`#${val}`).removeClass("d-none"); 
            });
        }
    }

    selectCountry() {
        let country = obj.country;
        country.forEach(val => {
            $(".select-country").append(`<option ${(val.value == "Vietnam") ? "selected" : ""} value="${val.value}">${val.name}</option>`);
        })

        $('.select-country').select2();
    }
}