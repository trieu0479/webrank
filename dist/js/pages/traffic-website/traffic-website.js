$(document).ready(function () {
var datawebsite
async function getDataWebsite() {
	let urlDataWebsite = "//localapi.trazk.com/webdata/websiteapicat.php?task=getCategories";
	return await $.get(urlDataWebsite);
}
getDataWebsite().then(res => {
    getTopWebsite(res)
})
function getTopWebsite(res) {
    datawebsite = res.data
    console.log(datawebsite)
    let list = ''
    datawebsite.forEach((ele,index) => {
        
        list += `
        <div class="bg-white shadow-sm top_table mt-3 mt-md-5">
            <div class="widget-top">
                <div class="img-widget" style="background: #${ele.bgColor}">
                    <i class="${ele.icon}" style="color: #${ele.iconColor}"></i>
                </div>
                <div class="widget-content">
                    <div class="widget-head">
                        <h3>${ele.title}</h3>
                        <div class="widget-action">
                            <a href="?view=traffic-website&action=topsites&domain=fff.com.vn&name=${ele.name}" class="btn btn-success btn-sm btn-upper getCategories" style="font-weight: 600;">Khám Phá</a>
                        </div>
                    </div>
                    <div class="widget-info">
                        <div class="widget-desc">
                            <p>${ele.description}</p>
                        </div>
                        <div class="widget-stats">
                            <div class="widget-item">
                                <span class="title">Tổng số web</span>
                                <div class="widget-label">
                                    <span>${$.number(ele.totalWebsite)}</span>
                                </div>
                            </div>
                            <div class="widget-item">
                                <span class="title">Cho phép GDN</span>
                                <div class="widget-label">
                                    <span>${$.number(ele.totalAllowGDN)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget-bottom">
                <div class="widget-item">
                    <i class="fad fa-hand-holding-usd"></i>
                    <div class="widget-details">
                        <h5>Ước tinh thu từ quảng cáo</h5>
                        <span>${$.number(ele.totalTrafficMonetization*6.468/3)} vnd</span>
                    </div>
                </div>
                <div class="widget-item">
                    <i class="fad fa-mobile-alt"></i>
                    <div class="widget-details">
                        <h5>Truy cập từ điện thoại</h5>
                        <span>${$.number(ele.totalMobileTraffic/3)}</span>
                    </div>
                </div>
                <div class="widget-item">
                    <i class="fad fa-window"></i>
                    <div class="widget-details">
                        <h5>Truy cập từ máy tính</h5>
                        <span>${$.number(ele.totalDesktopTraffic/3)}</span>
                    </div>
                </div>
            </div>
        </div>`
    });
	$('#datawebsite').html(list);
}
});