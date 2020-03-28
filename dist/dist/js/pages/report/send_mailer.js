$('[data-toggle="tooltip"]').tooltip()
const url = new URL(location.href);
let action = url.searchParams.get("action");
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
var pngUrl;
if(action == "result"){
	html2canvas(document.querySelector('#sendMail')).then(canvas => {
		pngUrl = canvas.toDataURL();
	})
}
function sendMailer() {
	var url = new URL(location.href);
	if(action != "result"){
		if ($('#subcriber_mail i ').hasClass('fad fa-envelope')) {
			var post = {};
			Swal.fire({
				padding: `0`,
				width: 500,
				showConfirmButton: false,
				showCloseButton: true,
				html: `
				<div class="Swal-header" style="padding: 20px; text-align: left; border-bottom: 1px solid #f0f2f4;">
					<h3 class="text-uppercase font-weight-bold font-14 coppy_title">Nhập Email của bạn để nhận thông báo</h3>
				</div>
				<form>
					<div class="form-group text-left">
						<label>Email</label>
						<input type="email" class="form-control" id="email_receive">
					</div>
					<button type="button" class="btn-submit-data show-swal-cid" id="submit_custom">Nhận thông báo</button>
				</form>`,
				onOpen: () => {
					$('#submit_custom').click(function () {
						let email_receive = $('#email_receive').val();
						if (!email_receive) {
							// $('#email_receive').val("")
							alert('Email không được để trống');
							return true;
						}
						if (!validateEmail(email_receive)) {
							// $('#email_receive').val("")
							alert('Email không đúng định dạng.Vui lòng xem lại');
							return true;
						}
						setTimeout(() => {
							html2canvas(document.querySelector('.page-content')).then(canvas => {
								pngUrl = canvas.toDataURL();
								console.log(canvas.toDataURL())
								post.toEmail = email_receive;
								post.emailTitle = "[3F] Nhận thông báo hàng tuần cho Dashboard của bạn ";
								post.emailContent = `
								<div style="background:#ecf0f3;width:100%; margin: 0 auto;padding: 40px;color:#555;padding:27px 0px ">
									<div style="margin: auto;background-color: #fff;z-index: 2;position: relative; max-width: 600px;border-radius: 5px;padding: 25px;">
										<table style="border-collapse:collapse;border-spacing:0;text-align:left;vertical-align:top;width:100%;padding:0">
											<tbody>
												<tr>
													<th>
														<img src="https://fff.com.vn/wp-content/uploads/2017/03/3F_logoweb.png">
													</th>
													<th>
														<div style="text-align: end;">
															<p style="font-weight: 600">Công ty 3F Solution </p>
															<p style="font-size: .9em;font-weight: 500;">Công cụ phân tích báo cáo</p>
														</div>
													</th>
												</tr>
											</tbody>
										</table>
										<div style="font-size:14.5px">
											<h3 style="font-size:22px;font-family: sans-serif;text-align: center;">Thông
												báo nhận Dashboard của 3F Solutions</h3>
										
											<p style="text-decoration:none;font-size:15px;margin: 0;line-height:22px">Hi&nbsp;<span style="font-weight:500">${email_receive}.</span></p>
										
											<p style="margin: 0;line-height:60px">Lời đầu tiên 3F xin cảm ơn khách hàng đã sử dụng công cụ của chúng tôi.</p>
										
											<p style="margin: 0;line-height:22px"> Nhằm giúp khách hàng phân tích website một cách chi tiết nhất của bản thân hoặc đối thủ, theo dõi hàng
												ngày các lưu lượng truy cập thiết bị,lượng khách rời bỏ trang cũng như chi phí
												quảng cáo cho chiến dịch SEO và Goodle Adsword. <p>
											
											<p style="margin: 0;line-height:22px">Công ty 3F Solution đã cho ra mắt công cụ báo cáo theo report giúp bạn hàng ngày có thể theo dõi
												qua email giúp bạn tìm hiểu một cách khả quan nhất.</p>
											<br>
											<div style="display:flex;justify-content:center;">
												<img src="${pngUrl}" style="max-width: 100%;" >
											</div>
											<br>
											<div style="display:flex;justify-content:center">
												<a href="${url}" style="background-color: #4f8df9;
														border:1px solid #4f8df9;
														font-size: 14px;
														font-weight: bold;
														color: #fff;
														padding: 12px 50px ;
														margin:auto;
														border-radius: 50px;
														text-decoration:none;                                               
														text-align:center;
														">
													Xem Dashboard</a>
											</div>
										</div>
									</div>
								</div>`;
								$.post("http://localapi.trazk.com/2020/sendemail/index.php?task=sendEmail", post, function (data) {
									console.log(data)
								})
							})
						}, 2000)

						$(".swal2-cancel").click();
						$('#subcriber_mail').empty();
						$('#subcriber_mail').append('<i class="fad fa-check mr-2"></i><p class="p_get_notify">Đã đăng ký</p>')
					})
				}
			})

		} else if ($('#subcriber_mail i ').hasClass('fad fa-check')) {
			console.log('this kata ', $(this).children().children());
			Swal.fire({
				padding: `0`,
				width: 500,
				showConfirmButton: false,
				showCloseButton: true,
				html: `
					<div class="Swal-header" style="padding: 12px 17px; text-align: center; border-bottom: 1px solid #f0f2f4;">
						<h3 class="text-uppercase font-weight-bold font-14 coppy_title">Hủy đăng ký nhận Email</h3>
					</div>
					<p class="mt-3 pb-1 font-18  text-capitalize font-gg">Bạn đồng ý hủy Đăng ký?</p> 
					<div class= "d-flex justify-content-around" style="padding: 33px 88px;">
						<button type="button" class="btn-submit-data show-swal-cid" id="huy_subcriber" style="padding: 16px 38px;border: 1px solid #ddd;">Đồng ý</button>           
						<button type="button" class="btn-submit-data show-swal-cid" id="cancel" style="background:#dc3545;padding: 16px 38px;border: 1px solid #ddd; ">Cancel</button>
					</div>`,
				onOpen: () => {
					$('#huy_subcriber').click(function () {
						$(".swal2-cancel").click();
						$('#subcriber_mail').empty();
						$('#subcriber_mail').append(`<i class="fad fa-envelope sync-fa-fi mr-2"></i>
							<p class="p_get_notify">Nhận thông báo</p>`)
					})
					$('#cancel').click(function () {
						$(".swal2-cancel").click();
					})
				}
			})
		}
	}else{
		if ($('#icon_dangky i').hasClass('fad fa-envelope')) {
			var post = {};
			Swal.fire({
				padding: `0`,
				width: 500,
				showConfirmButton: false,
				showCloseButton: true,
				html: `
					<div class="Swal-header" style="padding: 20px; text-align: left; border-bottom: 1px solid #f0f2f4;">
						<h3 class="text-uppercase font-weight-bold font-14 coppy_title">Nhập Email của bạn để nhận thông báo</h3>
					</div>
					<form>
						<div class="form-group text-left">
							<label>Email</label>
							<input type="email" class="form-control" id="email_receive">
						</div>
						<button type="button" class="btn-submit-data show-swal-cid" id="submit_custom">Nhận thông báo</button>
					</form>`,
				onOpen: () => {
					$('#submit_custom').click(function () {
						let email_receive = $('#email_receive').val();
						if (!email_receive) {
							// $('#email_receive').val("")
							alert('Email không được để trống');
							return true;
						}
						if (!validateEmail(email_receive)) {
							// $('#email_receive').val("")
							alert('Email không đúng định dạng.Vui lòng xem lại');
							return true;
						}
						post.toEmail = email_receive;
						post.emailTitle = "[3F] Nhận thông báo hàng tuần cho Dashboard của bạn ";
						post.emailContent = `
							<div style="background:#ecf0f3;width:100%; margin: 0 auto;padding: 40px;color:#555;padding:27px 0px ">
							<div style="margin: auto;background-color: #fff;z-index: 2;position: relative; max-width: 600px;border-radius: 5px;padding: 25px;">
								<table style="border-collapse:collapse;border-spacing:0;text-align:left;vertical-align:top;width:100%;padding:0">
									<tbody>
										<tr>
											<th>
												<img src="https://fff.com.vn/wp-content/uploads/2017/03/3F_logoweb.png">
											</th>
											<th>
												<div style="text-align: end;">
													<p style="font-weight: 600">Công ty 3F Solution </p>
													<p style="font-size: .9em;font-weight: 500;">Công cụ phân tích báo cáo</p>
												</div>
											</th>
										</tr>
									</tbody>
								</table>
								<div style="font-size:14.5px">
									<h3 style="font-size:22px;font-family: sans-serif;text-align: center;">Thông
										báo nhận Dashboard của 3F Solutions</h3>
								
									<p style="text-decoration:none;font-size:15px;margin: 0;line-height:22px">Hi&nbsp;<span style="font-weight:500">${email_receive}.</span></p>
								
									<p style="margin: 0;line-height:60px">Lời đầu tiên 3F xin cảm ơn khách hàng đã sử dụng công cụ của chúng tôi.</p>
								
									<p style="margin: 0;line-height:22px"> Nhằm giúp khách hàng phân tích website một cách chi tiết nhất của bản thân hoặc đối thủ, theo dõi hàng
										ngày các lưu lượng truy cập thiết bị,lượng khách rời bỏ trang cũng như chi phí
										quảng cáo cho chiến dịch SEO và Goodle Adsword. <p>
									
									<p style="margin: 0;line-height:22px">Công ty 3F Solution đã cho ra mắt công cụ báo cáo theo report giúp bạn hàng ngày có thể theo dõi
										qua email giúp bạn tìm hiểu một cách khả quan nhất.</p>
									<br>
									<div style="display:flex;justify-content:center;">
										<img src="${pngUrl}" style="max-width: 100%;" >
									</div>
									<br>
									<div style="display:flex;justify-content:center">
										<a href="${url}" style="background-color: #4f8df9;
												border:1px solid #4f8df9;
												font-size: 14px;
												font-weight: bold;
												color: #fff;
												padding: 12px 50px ;
												margin:auto;
												border-radius: 50px;
												text-decoration:none;                                               
												text-align:center;
												">
											Xem Dashboard</a>
									</div>
								</div>
							</div>
						</div>`;
						$.post("http://localapi.trazk.com/2020/sendemail/index.php?task=sendEmail", post, function (data) {
							console.log(data)
						})
						$(".swal2-cancel").click();
						$('#icon_dangky i ').empty();
						$("#icon_dangky i").removeClass('fad fa-envelope')
						$('#icon_dangky i').append('<i class="fad fa-check"></i>');
						$('.text_sub').html('Đã đăng ký');
					})
				}
			})
		} else if ($('#icon_dangky i').hasClass('fad fa-check')) {
			console.log('this kata ', $(this).children().children());
			Swal.fire({
				padding: `0`,
				width: 500,
				showConfirmButton: false,
				showCloseButton: true,
				html: `
					<div class="Swal-header" style="padding: 12px 17px; text-align: center; border-bottom: 1px solid #f0f2f4;">
						<h3 class="text-uppercase font-weight-bold font-14 coppy_title">Hủy đăng ký nhận Email</h3>
					</div>
					<p class="mt-3 pb-1 font-18  text-capitalize font-gg">Bạn đồng ý hủy Đăng ký?</p> 
					<div class= "d-flex justify-content-around" style="padding: 33px 88px;">
						<button type="button" class="btn-submit-data show-swal-cid" id="huy_subcriber" style="padding: 16px 38px;border: 1px solid #ddd;">Đồng ý</button>           
						<button type="button" class="btn-submit-data show-swal-cid" id="cancel" style="background:#dc3545;padding: 16px 38px;border: 1px solid #ddd; ">Cancel</button>
					</div>`,
				onOpen: () => {
					$('#huy_subcriber').click(function () {
						$(".swal2-cancel").click();
						$('#icon_dangky i ').empty();
						$('#icon_dangky i ').removeClass('fad fa-check');
						$('#icon_dangky i').append('<i class="fad fa-envelope"></i>');
						$('.text_sub').html('Đăng ký');
					})
					$('#cancel').click(function () {
						$(".swal2-cancel").click();
					})
				}
			})
		}
	}
}
$(document).ready(function () {
	$('body').on('click', '.subcriber', function () {
		sendMailer()
	})
	$('.subcriber2').on('click', function () {
		sendMailer()
	})
})
$(window).on("load", (event) => {
	if(action == "result"){
		setTimeout(sendMailer(), 5000);
	}
	if ($('.app-loader').hasClass('d-none')) {
		setTimeout(sendMailer(), 5000);
	}
})