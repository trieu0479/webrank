import obj from "./obj.js"; 


export default class Select { 

    selectService() { 
        let service = obj.service;

        service.forEach((val, index) => {
            $(".select-service").append(`<option value="${val.value}">${val.name}</option>`);
            $('.content-service').append(`<div id="${val.value}" class="des ${(index != 0) ? "d-none" : ""}"><div class="font-gg font-13">${val.war}</div><div class="font-gg font-13">${val.text1}</div><div class="font-gg font-13">${val.text2}</div><div class="font-gg font-weight-bold font-13">${val.text3}</div> <div class="font-gg font-weight-bold font-13">${val.text4}</div><div class="font-gg font-weight-bold font-13">${val.text5}</div> <div class="font-gg font-weight-bold font-13">${val.text6}</div><div class="font-gg font-weight-bold font-13">${val.text7}</div><div class="font-gg font-weight-bold font-13">${val.text8}</div><div class="font-gg font-13">${val.text9}</div><div class="font-gg font-13">${val.text10}</div><div class="font-gg font-13">${val.text11}</div></div>`)
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