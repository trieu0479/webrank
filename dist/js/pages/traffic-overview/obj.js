const obj = {
    service: [{
            name: "Gói tăng lượt xem thường",
            value: "YTNORMAL",
            html: `
                <div class="font-gg font-13">Tình trạng dịch vụ: Đang làm việc</div>
                <div class="font-gg font-13">Chất lượng dịch vụ: Giữ 1-2 phút</div>
                <div class="font-gg font-13">Thời gian bắt đầu: Bắt đầu tức thì</div>
                <div class="font-gg font-13">Tốc độ: 10k-30k Lượt xem mỗi ngày</div>
                <div class="font-gg font-13">Tốc độ: 100 - 500 mỗi ngày</div>
                <div class="font-gg font-13">Đảm bảo: 100 ngày</div>
                <div class="font-gg font-13">Các nút lệnh: Không</div>
                <div class="font-gg font-13">Thông tin thêm: Chỉ cho phép tối đa 5 phút video. Video được chiếu, video phát trực tiếp không được chấp nhận.</div>
            `

        },
        {
            name: "Gói tăng lượt xem thường - Tăng chậm",
            value: "YTSLOW",
            html: `
                <div class="font-gg font-13">Tình trạng dịch vụ: Đang làm việc</div>
                <div class="font-gg font-13">Chất lượng dịch vụ: Lượt xem thực, Giữ 1 đến 5 phút, Ổn định</div>
                <div class="font-gg font-13">Thời gian bắt đầu: tức thì</div>
                <div class="font-gg font-13">Tốc độ mỗi ngày: 10k đến 20k</div>
                <div class="font-gg font-13">Đảm bảo: Thời gian hoàn trả</div>
                <div class="font-gg font-13">Đảm bảo: 100 ngày</div>
                <div class="font-gg font-13">Các nút lệnh: Không</div>
                <div class="font-gg font-13">Thông tin thêm: Phải không bị giới hạn và mở cho tất cả các quốc gia. Video phải được nhúng Kích hoạt.</div>`

        },
        {
            name: "Gói tăng lượt xem theo giờ - 4.000 giờ xem",
            value: "YT4KSEEN",
            html: `
                <div class="font-gg font-13">Tình trạng dịch vụ: Đang làm việc</div>
                <div class="font-gg font-13">Chất lượng phục vụ : Thời gian bắt đầu: 1-2 giờ</div>
                <div class="font-gg font-13">Tốc độ: Đơn hàng sẽ được thực hiện trong vòng 72 giờ</div>
                <div class="font-gg font-13">Đảm bảo: Nạp lại 30 ngày</div>
                <div class="font-gg font-13">Các nút lệnh:</div>
                <div class="font-gg font-13">Thông tin thêm: Video phải dài 1 giờ + độ dài phải. Không đặt video ở chế độ riêng tư sau khi nhận Thời gian xem và cố gắng tạo nội dung gốc</div>
            `
        },
        {
            name: "Gói SEO Youtube View - Xem theo từ khóa",
            value: "YTVIEWKEY",
            html: `
                <div class="font-gg font-13">Tình trạng dịch vụ: Đang làm việc</div>
                <div class="font-gg font-13">Chất lượng dịch vụ: 10 đến 15 phút Thời gian xem</div>
                <div class="font-gg font-13">Thời gian bắt đầu: tức thì</div>
                <div class="font-gg font-13">Tốc độ: 300 - 500 mỗi ngày</div>
                <div class="font-gg font-13">Đảm bảo: Nạp lại 30 ngày</div>
                <div class="font-gg font-13">Các nút lệnh: Không</div>
                <div class="font-gg font-13">Thông tin thêm: Tên người dùng của chủ sở hữu nhận xét = Từ khóa. Vui lòng đặt từ khóa, keyword1, ... (Mỗi từ khóa được phân tách bằng dấu phẩy)</div>
                <div class="font-gg font-13">http://prntscr.com/rjf6ns</div>
            `
        },
        {
            name: "Gói SEO Youtube View - Xem theo đề xuất",
            value: "YTVIEWOFFER",
            html: `
                <div class="font-gg font-13">Tình trạng dịch vụ: Đang làm việc</div>
                <div class="font-gg font-13">Chất lượng dịch vụ: 10 đến 15 phút Thời gian xem</div>
                <div class="font-gg font-13">Thời gian bắt đầu: tức thì</div>
                <div class="font-gg font-13">Tốc độ: 300 - 500 mỗi ngày</div>
                <div class="font-gg font-13">Đảm bảo: Nạp lại 30 ngày</div>
                <div class="font-gg font-13">Các nút lệnh: Không</div>
                <div class="font-gg font-13">Thông tin bổ sung :</div>
                <div class="font-gg font-13">- Đề xuất danh sách video (id, id1, ...) (Chỉ cần đặt video ID, liên kết không đầy đủ)</div>
                <div class="font-gg font-13">- Tên người dùng của chủ sở hữu nhận xét = video ID. Vui lòng đặt video ID, video ID, ... (Mỗi ID được phân tách bằng dấu phẩy)</div>
                <div class="font-gg font-13">- http://prntscr.com/rjf6ag</div>
                
            `
        },
        {
            name: "Google Ads - Youtube View - Việt Nam",
            value: "GGYTVN",
            html: `
                <div class="font-gg font-13">Tình trạng dịch vụ: Đang làm việc</div>
                <div class="font-gg font-13">Chất lượng phục vụ : Thời gian bắt đầu: 24h - 48 giờ (thời gian phê duyệt chiến dịch của Google).</div>
                <div class="font-gg font-13">Tốc độ: Trung bình 50K + mỗi ngày sau khi bắt đầu</div>
                <div class="font-gg font-13">Đảm bảo: Không bỏ</div>
                <div class="font-gg font-13">Các nút lệnh: Không</div>
                <div class="font-gg font-13">Thông tin bổ sung :</div>
                <div class="font-gg font-13">- Video không thể dài hơn 9 phút</div>
                <div class="font-gg font-13">- Không có bản quyền</div>
                <div class="font-gg font-13">- Không có người lớn</div>
                <div class="font-gg font-13">- Không có từ khóa lạm dụng [Ví dụ- quái]</div>
                <div class="font-gg font-13">- Không có hình ảnh trần trụi</div>
                <div class="font-gg font-13">- Không có video tiếng Ba Tư</div>
                <div class="font-gg font-13">- Không súng / Ma túy / Máu / Chính trị</div>
            `
        },
    ],
    country: [{
            name: "Việt Nam",
            value: "Vietnam",
        },
        {
            name: "Châu Á",
            value: "Asia",
        },
        {
            name: "Hoa Kỳ",
            value: "United States",
        },
        {
            name: "Châu Âu",
            value: "Europe",
        },
        {
            name: "Châu Mỹ",
            value: "Americas",

        },
        {
            name: "Canada",
            value: "Canada",
        },
        {
            name: "Đức",
            value: "Germany",
        },
        {
            name: "Pháp",
            value: "France",
        }

    ],
    platform: [{
            name: "Yotube",
            value: "youtube"
        },
        {
            name: "Facebook",
            value: "facebook"
        },
        {
            name: "TikTok",
            value: "tiktok"
        },
        {
            name: "Website",
            value: "website"
        },
    ]
}


export default obj;