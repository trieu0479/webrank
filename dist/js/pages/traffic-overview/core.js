export default class Core {   

    constructor() {
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

    checkType(url) { 
        url = url.toLowerCase();
        console.log(url);
        if (url.indexOf("youtube") != -1) {
            return "youtube";        
        } else if (url.indexOf("facebook") != -1) { 
            return "facebook";
        } else if (url.indexOf("tiktok") != -1) {
            return "tiktok";
        } else {
            return "website";
        }
    }

}