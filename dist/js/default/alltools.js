$(document).ready(() => {
    $(".allTools").click(function(res){
        showAllToolsModal();
    })
    function showAllToolsModal(){
        Swal.fire({
            html:
            `
            <div class="allToolsControler" id="allTool">
                <ul>
                    <li class="tool1">
                        <a target="blank" href=" https://admin.fff.com.vn/phantich/userToken=${userToken}">
                            <img src="https://admin.fff.com.vn/account/assets/images/logo/phantich.svg" width="60px">

                            <h3>Phân Tích</h3>
                            <p>Phân tích dữ liệu thị trường quảng cáo, đối thủ cạnh tranh, từ khóa quan trọng</p>
                        </a>    
                    </li>
                    <li class="tool2">
                        <a  target="blank"  href="https://admin.fff.com.vn/quangcao/?userToken=${userToken}">
                        <img src="https://admin.fff.com.vn/account/assets/images/logo/quangcao.svg" width="60px">
                            <h3>Quảng Cáo</h3>
                            <p>Theo dõi quảng cáo, tối ưu chi phí và click chuột, nhanh chóng, hiệu quả </p>
                        </a>
                    </li>
                    <li   class="tool3">
                        <a  target="blank"  href="https://admin.fff.com.vn/timkhach/?userToken=${userToken}">
                            <img src="https://admin.fff.com.vn/account/assets/images/logo/timkhach.svg" width="60px">
                            <h3>Tìm Khách</h3>
                            <p>Tìm khách hàng từ website, url, trang vàng nhanh chóng, hợp lệ </p>
                        </a>
                    </li>
                </ul> 
                <ul>
                    <li class="tool4">
                        <a href="https://admin.fff.com.vn/hutkhach/userToken=${userToken}">
                            <img src="https://admin.fff.com.vn/account/assets/images/logo/hutkhach.svg" width="60px">
                            <h3>Hút Khách</h3>
                            <p>Bộ 40 công cụ, tăng tỉ lệ khách trở thành khách hàng trên website của bạn </p>
                        </a>    
                    </li>
                    <li  class="tool5">
                        <a  target="blank"  href="https://admin.fff.com.vn/chamkhach/userToken=${userToken}">
                            <img src="https://admin.fff.com.vn/account/assets/images/logo/chamkhach.svg" width="60px">
                            <h3>Chăm Khách</h3>
                            <p>Hỗ trợ khách hàng bằng AI kết hợp với quản lý data nhanh chóng cả trên PC lẫn Mobile</p>
                        </a>    
                    </li>
                    <li class="tool6">
                        <a  target="blank" href="https://admin.fff.com.vn/datakhach/userToken=${userToken}">
                            <img src="https://admin.fff.com.vn/account/assets/images/logo/datakhach.svg" width="60px">
                            <h3>Data Khách</h3>
                            <p>Quản lý thông tin khách hàng của bạn, gửi email, tin nhắn cho khách nhanh chóng, tiện lợi</p>
                        </a>    
                    </li>
                </ul>  
            </div>  
            `,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            focusConfirm: false,
            width:800,
            padding: '1.25em 2em'
            
        })
    }
});