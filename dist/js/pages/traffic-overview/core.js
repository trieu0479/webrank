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
            this.showPopupOrder("Youtube");
            
        } else if (url.indexOf("facebook") != -1) { 
            this.showPopupOrder("Facebook");

        } else if (url.indexOf("tiktok") != -1) {
            this.showPopupOrder("Tiktok");

        } else {
            this.showPopupOrder("Website");
        }
    } 
}