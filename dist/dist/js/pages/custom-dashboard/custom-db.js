$(document).ready(function () {
    $('.ip_2').hide();
    var mangobject = [];
    var id = mangobject.length === 0 ? 1 : mangobject[mangobject.length].id;
    var url = new URL(location.href);
    var keyword = url.searchParams.get("name");
    if (keyword == 'keywords') {
        $('.mota_content').append(`<div class="setting font-weight-500 font-18 font-gg">Mô tả</div>
                <div class="font-13 font-gg">Các phần chi tiết của các từ khóa đưa vào lưu lượng tìm kiếm nhất cho bạn và đối thủ cạnh tranh. Theo dõi các từ khóa mà bạn đang mất đi đối thủ cạnh tranh của bạn và xác định các từ khóa được giá trị xây dựng chiến lược SEO của bạn xung quanh.</div>
                <ul class="add__contend pt-4 pl-0 list-style-none"> Các tính năng chính:
                    <li class="features d-flex flex-row pl-3 pt-3">
                        <i class="fal fa-diamond pt-1"></i>
                        <p class=" pl-2 ">Lượt tìm kiếm từ khóa</p>
                    </li>
                    <li class="features d-flex flex-row pl-3 pt-2">
                        <i class="fal fa-diamond pt-1"></i>
                        <p class="pl-2">Chi phí quảng cáo</p>
                    </li>
                    <li class="features d-flex flex-row pl-3 pt-2">
                        <i class="fal fa-diamond pt-1"></i>
                        <p class="pl-2">Mức độ cạnh tranh</p>
                    </li>
                </ul>
                <div class="text-center img-small mt-3 mb-3 ">
                    <img src="https://static-us-west-2.similarcdn.com/build/20200105.10395.f45cf2a/dist/images/dashboard/metrics/WebDemographicsAge.png"
                        alt="" style="max-width:250px">
                </div>`)
    } else {
        $('.mota_content').append(`<div class="setting font-weight-500 font-18 font-gg">Mô tả</div>
    <div class="font-13 font-gg">Theo dõi sát sao điểm chuẩn của đối tượng của bạn so với đối thủ cạnh tranh để tăng phạm vi tiếp cận và tối ưu hóa cơ hội tăng trưởng lưu lượng truy cập.</div>
    <ul class="add__contend pt-4 pl-0 list-style-none">Các tính năng chính:
        <li class="features d-flex flex-row pl-3 pt-3">
            <i class="fal fa-diamond pt-1"></i>
            <p class=" pl-2 ">Tỉ lệ truy cập </p>
        </li>
        <li class="features d-flex flex-row pl-3 pt-2">
            <i class="fal fa-diamond pt-1"></i>
            <p class="pl-2">Lượt truy cập </p>
        </li>
        <li class="features d-flex flex-row pl-3 pt-2">
            <i class="fal fa-diamond pt-1"></i>
            <p class="pl-2">Nguồn khách hàng </p>
        </li>
    </ul>
    <div class="text-center img-small mt-3 mb-3 ">
        <img src="https://static-us-west-2.similarcdn.com/build/20200105.10395.f45cf2a/dist/images/dashboard/metrics/WebDemographicsAge.png"
            alt="" style="max-width:250px">
    </div>`)
    }
    $('.input-group-1').on('keypress', function (e) {
        if (e.which == 13) {
            if ($('.ip_1').val() == '') {
                alert('sdabsdkjasbd')
            } else {
                let ip_1 = $('.ip_1').val();
                if (keyword != 'keywords') {
                    html = `<div id ="element_${id}" class="add-web-domain">
                        <div class="bo-goc d-inline-flex">
                            <div class="img-avatar d-flex align-items-center justify-content-center"> 
                                <img src="http://www.google.com/s2/favicons?domain=${ip_1}" class="text-center" alt="" srcset="">
                            </div>
                            <div class=" domain-row d-flex flex-row" >
                                <span style="opacity:.9;font-size:13px" class="font-gg">${ip_1}</span>
                                <span class="quit_domain"><i class="fad fa-times-circle"></i></<i></span>
                            </div>
                        </div>
                    </div>`
                }else{
                    html = `<div id="element_${id}" class="add-web-domain">
                        <div class="bo-goc d-inline-flex">
                            <div class="d-flex flex-row" style="padding: 5px 10px;">
                                <span style="opacity:.9;font-size:13px" class="font-gg">${ip_1}</span>
                                <span class="quit_domain mr-0 ml-2"><i class="fad fa-times-circle"></i></<i></span>
                            </div>
                        </div>
                    </div>`
                }
                mangobject.push({
                    id: id++,
                    html,
                    domain: ip_1
                })
                if (keyword != 'keywords') {

                    if (mangobject.length < 5) {
                        $(".ip_1").prop('disabled', false);
                        $('.ip_1').val('');
                    } else {
                        $(".ip_1").show()
                        $('.ip_1').val('Bạn chỉ có tối đa 5 domain để phân tích.');
                        $(".ip_1").prop('disabled', true);
                    }
                } else {
                    if (mangobject.length < 2) {
                        $(".ip_1").prop('disabled', false);
                        $('.ip_1').val('');
                    } else {
                        $(".ip_1").show()
                        $('.ip_1').val('Bạn chỉ có tối đa 2 từ khóa để phân tích.');
                        $(".ip_1").prop('disabled', true);
                    }

                }
                $('.ip_2').show();
                $('.input-group-2').append(html);
                e.preventDefault();
            }
        }
    });
    $('body').on('click', '.quit_domain', function () {
        let temp = $(this).parent().parent().parent().attr('id');
        $(`#${temp}`).remove();
        mangobject = mangobject.filter(v => v.id != Number(temp.replace('element_', '')));

        if (mangobject.length < 5) {
            $(".ip_1").prop('disabled', false);
            $('.ip_1').val('');
        } else {
            $(".ip_1").show()
            $('.ip_1').val('Bạn chỉ có tối đa 5 domain để phân tích.');
            $(".ip_1").prop('disabled', true);
        }
    })
    $('#getSunmit').on('click', function () {
        const getTask = url.searchParams.get("task")
        if (mangobject.length < 2) {
            if (keyword != 'keywords') {
                alert('Mời bạn nhập thêm 1 domain');
            } else {
                alert('Mời bạn nhập thêm 1 từ khóa');
            }
        } else {
            if (keyword != 'keywords') {
                let str_domain = "";
                mangobject.forEach((ele, index) => {
                    str_domain += `domain${index+1}=${ele.domain}&`;
                });
                window.location.href = `?view=report&action=compare&${str_domain}getTask=${getTask}`
            } else {
                let str_keyword = "";
                mangobject.forEach((ele, index) => {
                    str_keyword += `keywords${index+1}=${ele.domain}&`;
                });
                window.location.href = `?view=report&action=compare-tag&${str_keyword}`
            }
        }
    })
})