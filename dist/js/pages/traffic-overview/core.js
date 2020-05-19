import Popup from "./popup.js"; 

export default class Core extends Popup{   

    constructor() { 
        super();
        this.order = {};  
    }

    setOrder(obj) {
        this.order = obj;
    }

    getOrder() {
        return this.order;
    }

    async getJSON(url) {
        return await $.getJSON(url);
    }
    
    async postJSON(url,data) {
        return await $.post(url,data);
    }

    renderTable(data) {

    }

    checkTypeAndShowPopupOrder(url) { 
        url = url.toLowerCase(); 
        if (url.indexOf("youtube") != -1) {
            this.showPopupOrder("youtube");
            
        } else if (url.indexOf("facebook") != -1) { 
            this.showPopupOrder("facebook");

        } else if (url.indexOf("tiktok") != -1) {
            this.showPopupOrder("tiktok");

        } else {

            if(this.checkWebsite(url)) {
                this.showPopupOrder("website");
            } else {
                this.showPopupAlert("error","Url không hợp lệ !")
            }
        }
    } 

    checkWebsite(website) {
        var reg = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
        return website.match(reg);
    }
}