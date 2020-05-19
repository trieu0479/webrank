import obj from "./obj.js";


export default class Select {

    selectService() {
        let service = obj.service;

        service.forEach((val, index) => {
            $(".select-service").append(`<option value="${val.value}">${val.name}</option>`);
            $('.content-service').append(`<div id="${val.value}" class="des ${(index != 0) ? "d-none" : ""}">${val.html}</div>`)
        })



        $('.select-service').select2();
        $('.select-service').on('select2:select', function(e) {
            let val = e.params.data.id;
            console.log(val)
            $('.des').addClass("d-none");
            $(`#${val}`).removeClass("d-none");
        });
    }

    selectCountry() {
        let country = obj.country;

        country.forEach(val => {
            $(".select-country").append(`<option ${(val.value == "Vietnam") ? "selected" : ""} value="${val.value}">${val.name}</option>`);
        })

        $('.select-country').select2();
    }

    selectPlatform() {
        let platform = obj.platform;
        platform.forEach(val => {
            $(".select-platform").append(`<option value="${val.value}">${val.name}</option>`);
        })

        $('.select-platform').select2();
    }
}