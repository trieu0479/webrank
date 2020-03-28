// $(document).ready(() => {
//     load30page();
//     function load30page(){
//        console.log("load 30 page");
//     }
//     function testpagespeed(url){
//         console.log("test website");
//       var urlPc = "//localapi.trazk.com/pagespeed/index.php?task=getWebsitePageSpeed&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&url=" + url;
//       var urlMoblie = "//localapi.trazk.com/pagespeed/index.php?task=getWebsitePageSpeedMobile&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&url=" + url;
//         var website = res.data.data
//         $.getJSON(urlPc, function (res) {
//             console.log(res);
//             sessionStorage.setItem("resDesktop", JSON.stringify(res));
//             JSON.parse(sessionStorage.resDesktop);
//           });
//           $.getJSON(urlMoblie, function (resMoblie) {
//             sessionStorage.setItem("resMoblie", JSON.stringify(resMoblie));
//             JSON.parse(sessionStorage.resMoblie);
//           });
//     }
// });
var datapc;
var datamobi;
var websiteUrl = url.searchParams.get("websiteUrl");
if(websiteUrl.indexOf("http") == -1)
	websiteUrl = websiteUrl.replace('', 'https://');
	
async function getWebsitePageSpeed() {
	let urlPc = "//localapi.trazk.com/pagespeed/index.php?task=getWebsitePageSpeed&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&url=" + websiteUrl;
	return await $.get(urlPc);
}
getWebsitePageSpeed().then(res => {
	// clearInterval( idss);
	$('.progresss').addClass('display-none');
	$('.tab-action').removeClass('display-none');
	$('.main').removeClass('display-none');
	datapc = JSON.parse(res);
	console.log(datapc)
	SpeedWeb(datapc)
})
async function getWebsitePageSpeedMobile() {
	let urlMoblie = "//localapi.trazk.com/pagespeed/index.php?task=getWebsitePageSpeedMobile&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&url=" + websiteUrl;
	return await $.get(urlMoblie);
}
getWebsitePageSpeedMobile().then(res => {
	datamobi = JSON.parse(res)
	console.log(datamobi)
})

function changeColor(bien, lop1, lop2) {
	if (bien < 1.5) {
		lop1.removeClass('vuong');
		lop1.removeClass('tamgiac');
		lop1.addClass('tron');

		lop2.removeClass('red');
		lop2.removeClass('yellow');
		lop2.addClass('green');

	} else if ((bien >= 1.5 && bien <= 3)) {
		lop1.removeClass('tron');
		lop1.removeClass('tamgiac');
		lop1.addClass('vuong');

		lop2.removeClass('red');
		lop2.removeClass('green');
		lop2.addClass('yellow');

	} else {
		lop1.removeClass('tron');
		lop1.removeClass('vuong');
		lop1.addClass('tamgiac');


		lop2.removeClass('green');
		lop2.removeClass('yellow');
		lop2.addClass('red');
	}
}

function changeColorMS(bien, lop1, lop2) {
	if (bien < 150) {
		lop1.removeClass('vuong');
		lop1.removeClass('tamgiac');
		lop1.addClass('tron');

		lop2.removeClass('red');
		lop2.removeClass('yellow');
		lop2.addClass('green');

	} else if ((bien >= 150 && bien <= 300)) {
		lop1.removeClass('tron');
		lop1.removeClass('tamgiac');
		lop1.addClass('vuong');

		lop2.removeClass('red');
		lop2.removeClass('green');
		lop2.addClass('yellow');

	} else {
		lop1.removeClass('tron');
		lop1.removeClass('vuong');
		lop1.addClass('tamgiac');


		lop2.removeClass('green');
		lop2.removeClass('yellow');
		lop2.addClass('red');
	}
}

function changeColorPlus(bien, lop1, lop2, with1) {

	percent = sessionStorage.getItem('checkPoint');
	if (percent == 'Moblie') {
		ok = 5;
	} else {
		ok = 30;
	}
	if (bien <= 1.5) {
		lop1.removeClass('tamgiac');
		lop1.addClass('vuong');
		lop2.removeClass('red');
		lop2.addClass('yellow');
		widthC = bien * ok + '%';
		with1.attr("style", "width:" + widthC + ';' + "background:#ffa400");
	} else {
		lop1.removeClass('vuong');
		lop1.addClass('tamgiac');
		lop2.removeClass('yellow');
		lop2.addClass('red');
		widthC = bien * ok + '%';
		with1.attr("style", "width:" + widthC + ';' + "background:#ff4e42");
	}
}

function SpeedWeb(res) {
	$('.column-img').html('');
    $('.Blockresource').html('');
    $('.img-responsive').html('');
    $('.phanphohinhanh').html('');
    $('.trihoanhinh').html('');
    $('.Csskhongdung').html('');
    $('.display-font').html('');
    $('.domsize').html('');
    $('.bootuptime').html('');
    $('.found-table').html('');
    $('.request-table').html('');
    $('.third-party-table').html('');
	var data = res.lighthouseResult;
	info = {
		performance: data.categories.performance.score,
		link: data.finalUrl,
		img: data.audits['final-screenshot'].details.data,
		firstImg: data.audits['first-contentful-paint'].displayValue,
		firstCpuNhanRoi: data.audits["first-cpu-idle"].displayValue,
		firstCoynghiadautien: data.audits["first-meaningful-paint"].displayValue,
		thoidiemTuongTac: data.audits.interactive.displayValue,
		Fidtoida: data.audits["max-potential-fid"].displayValue,
		Speedindex: data.audits["speed-index"].displayValue,
		thaydoikichanhphuhop: data.audits["uses-responsive-images"],
		Keeprequest: data.audits["resource-summary"],
		giamthieudosau: data.audits["critical-request-chains"],
	}


	fontUrl = data.audits["font-display"].details.items;
	cacheArray = data.audits["uses-long-cache-ttl"].details.items;
	Keeprequest = data.audits["resource-summary"];
	ThirdPart = data.audits["third-party-summary"];




	if (typeof res.loadingExperience.metrics != 'undefined') {
		FCPtruong = res.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.percentile;
		FIDtruong = res.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.percentile;
		FCPorigin = res.originLoadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.percentile;
		FIDorigin = res.originLoadingExperience.metrics.FIRST_INPUT_DELAY_MS.percentile;

		// FCP FID-first-percent
		fastFCP1 = (res.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[0].proportion * 100).toFixed(0);
		mediumFCP1 = (res.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[1].proportion * 100).toFixed(0);
		slowFCP1 = (res.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[2].proportion * 100).toFixed(0);
		//  ---------------------
		fastFID1 = (res.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[0].proportion * 100).toFixed(0);
		mediumFID1 = (res.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[1].proportion * 100).toFixed(0);
		slowFID1 = (res.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[2].proportion * 100).toFixed(0);

		// FCP FID-second-percent
		fastFCP2 = (res.originLoadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[0].proportion * 100).toFixed(0);
		mediumFCP2 = (res.originLoadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[1].proportion * 100).toFixed(0);
		slowFCP2 = (res.originLoadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[2].proportion * 100).toFixed(0);
		//  ---------------------
		fastFID2 = (res.originLoadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[0].proportion * 100).toFixed(0);
		mediumFID2 = (res.originLoadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[1].proportion * 100).toFixed(0);
		slowFID2 = (res.originLoadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[2].proportion * 100).toFixed(0);





		// Hiển thị nội dung đầu tiên (FCP-FID)
		//   ------------------------------------------
		FCPfirst = (FCPtruong * 0.001).toFixed(1) + ' s';
		result1 = ((FCPfirst.toString().split(" "))[0]);
		if (result1 < 1.5) {
			colorFeld = "tron";
			fontcolor1 = 'green';
		} else if (result1 > 1.5 && result1 <= 3) {
			colorFeld = "vuong";
			fontcolor1 = 'yellow';

		} else {
			colorFeld = "tamgiac";
			fontcolor1 = 'red';

		}
		//   ------------------------------------------
		FIDfirst = FIDtruong + ' ms';


		result3 = ((FIDfirst.toString().split(" "))[0]);
		if (result3 < 100) {
			colorFeld3 = "tron";
			fontcolor3 = 'green';

		} else if (result3 > 100 && result3 <= 200) {
			colorFeld3 = "vuong";
			fontcolor3 = 'yellow';

		} else {
			colorFeld3 = "tamgiac";
			fontcolor3 = 'red';

		}
		//   ------------------------------------------

		FCPsecond = (FCPorigin * 0.001).toFixed(1) + ' s';

		result2 = ((FCPsecond.toString().split(" "))[0]);
		if (result2 < 1.5) {
			colorFeld2 = "tron";
			fontcolor2 = 'green';

		} else if (result2 > 1.5 && result2 <= 3) {
			colorFeld2 = "vuong";
			fontcolor2 = 'yellow';

		} else {
			colorFeld2 = "tamgiac";
			fontcolor2 = 'red';

		}
		//   ------------------------------------------

		FIDsecond = FIDorigin + ' ms';
		result4 = ((FIDsecond.toString().split(" "))[0]);
		if (result4 < 100) {
			colorFeld4 = "tron";
			fontcolor4 = 'green';

		} else if (result4 > 100 && result4 <= 200) {
			colorFeld4 = "vuong";
			fontcolor4 = 'yellow';

		} else {
			colorFeld4 = "tamgiac";
			fontcolor4 = 'red';

		}



	}
	//  list Img

	listImg = data.audits["screenshot-thumbnails"].details.items;
	for (i = 0; i < listImg.length; i++) {
		list = `<div class="box-img">
					  <img class="imgd" src="${listImg[i].data}">
					  </div>`
		$('.column-img').append(list);
	}



	$('.imgd').attr('src', info.img);
	score = info.performance;
	performance = score * 100;

	$('.link-web').text(info.link);
	$('.link-web').attr('href', info.link);

	// Thu nghiem
	$('.firstImg').text(info.firstImg);
	firstImg = ((info.firstImg.toString().split("s"))[0]);
	lop1 = $('.icon-firstImg');
	lop2 = $('.firstImg');
	changeColor(firstImg, lop1, lop2);

	//  ---------------------------------


	$('.Speedindex').text(info.Speedindex);

	Speedindex = ((info.Speedindex.toString().split("s"))[0]);
	lop3 = $('.icon-Speedindex');
	lop4 = $('.Speedindex');
	changeColor(Speedindex, lop3, lop4);
	//  ---------------------------------

	$('.thoidiemTuongTac').text(info.thoidiemTuongTac);

	thoidiemTuongTac = ((info.thoidiemTuongTac.toString().split("s"))[0]);
	lop5 = $('.icon-thoidiemTuongTac');
	lop6 = $('.thoidiemTuongTac');
	changeColor(thoidiemTuongTac, lop5, lop6);

	//  ---------------------------------

	$('.firstCoynghiadautien').text(info.firstCoynghiadautien);

	firstCoynghiadautien = ((info.firstCoynghiadautien.toString().split("s"))[0]);
	lop7 = $('.icon-firstCoynghiadautien');
	lop8 = $('.firstCoynghiadautien');
	changeColor(firstCoynghiadautien, lop7, lop8);

	//  ---------------------------------

	$('.firstCpuNhanRoi').text(info.firstCpuNhanRoi);


	firstCpuNhanRoi = ((info.firstCpuNhanRoi.toString().split("s"))[0]);
	lop9 = $('.icon-firstCpuNhanRoi');
	lop10 = $('.firstCpuNhanRoi');
	changeColor(firstCpuNhanRoi, lop9, lop10);
	//  ---------------------------------

	$('.Fidtoida').text(info.Fidtoida);

	Fidtoida = ((info.Fidtoida.toString().split("ms"))[0]);
	lop11 = $('.icon-Fidtoida');
	lop12 = $('.Fidtoida');
	changeColorMS(Fidtoida, lop11, lop12);


	//  ---------------------------------


	//Co hoi
	// loại bỏ tài nguyên chặn hiển thị
	Blockresource = res.lighthouseResult.audits["render-blocking-resources"].details.items;
	valueBlockresource = (res.lighthouseResult.audits["render-blocking-resources"].details.overallSavingsMs / 1000).toFixed(2);


	if (valueBlockresource <= 0) {
		$('.block1').addClass('display-none');
	} else {
		$('.block1').removeClass('display-none');
	}


	$('.Blockresource-text').text(valueBlockresource + ' s');
	clas1 = $('.icon-Blockresource');
	clas2 = $('.Blockresource-text');
	width1 = $('.width-Blockresource');
	changeColorPlus(valueBlockresource, clas1, clas2, width1);


	for (var y = 0; y < Blockresource.length; y++) {
		d = Blockresource[y].url.toString().split("/");
		f = (Blockresource[y].totalBytes / 1000).toFixed(0);
		g = Blockresource[y].wastedMs;

		b = '<tr>' +
			'<td>' + "<a style='color:#333' href='" + Blockresource[y].url + "' target='_blank'>" + '../' + d.pop().substr(-40) + "</a>" + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' ms' + '</td>' +
			'</tr>';
		$('.Blockresource').append(b);
	}

	//Thay đổi kích thước ảnh phù hợp.
	ImageResponsive = res.lighthouseResult.audits["uses-responsive-images"].details.items;
	ValueImageResponsive = (res.lighthouseResult.audits["uses-responsive-images"].details.overallSavingsMs / 1000).toFixed(2);
	$('.ImageResponsive-text').text((res.lighthouseResult.audits["uses-responsive-images"].details.overallSavingsMs / 1000).toFixed(2) + ' s');

	if (ValueImageResponsive <= 0) {
		$('.block2').addClass('display-none');
	} else {
		$('.block2').removeClass('display-none');
	}


	clas11 = $('.icon-ImageResponsive');
	clas12 = $('.ImageResponsive-text');
	width9 = $('.width-ImageResponsive');
	changeColorPlus(ValueImageResponsive, clas11, clas12, width9);

	for (var y = 0; y < ImageResponsive.length; y++) {
		d = ImageResponsive[y].url.toString().split("/");
		f = (ImageResponsive[y].totalBytes / 1000).toFixed(0);
		g = (ImageResponsive[y].wastedBytes / 1000).toFixed(0);

		b = '<tr>' +
			'<td>' + '<img src="' + ImageResponsive[y].url + '" style="width:50px; height:50px;">' +
			"<a style='color:#333' href='" + ImageResponsive[y].url + "' target='_blank'>" + '../' + d.pop().substr(-50) + "</a>" + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' KB' + '</td>' +
			'</tr>';
		$('.img-responsive').append(b);
	}


	//Phân phối định dạng hình ảnh

	phanphohinhanh = data.audits["uses-webp-images"].details.items,
		Valuephanphohinhanh = (res.lighthouseResult.audits["uses-webp-images"].details.overallSavingsMs / 1000).toFixed(2);
	$('.phanphohinhanh-text').text((res.lighthouseResult.audits["uses-webp-images"].details.overallSavingsMs / 1000).toFixed(2) + ' s');

	if (Valuephanphohinhanh <= 0) {
		$('.block3').addClass('display-none');
	} else {
		$('.block3').removeClass('display-none');
	}

	clas4 = $('.icon-phanphohinhanh');
	clas3 = $('.phanphohinhanh-text');
	width2 = $('.width-phanphohinhanh');
	changeColorPlus(Valuephanphohinhanh, clas4, clas3, width2);


	for (var y = 0; y < phanphohinhanh.length; y++) {
		d = phanphohinhanh[y].url.toString().split("/");
		f = (phanphohinhanh[y].totalBytes / 1000).toFixed(0);
		g = (phanphohinhanh[y].wastedBytes / 1000).toFixed(0);
		b = '<tr>' +
			'<td>' + '<img src="' + phanphohinhanh[y].url + '" style="width:50px; height:50px;">' +
			"<a style='color:#333' href='" + phanphohinhanh[y].url + "' target='_blank'>" + '../' + d.pop().substr(-50) + "</a>" + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' KB' + '</td>' +
			'</tr>';
		$('.phanphohinhanh').append(b);
	}


	//mahoahinhanh ++

	mahoahinhanh = data.audits["uses-optimized-images"].details.items,
		Valuemahoahinhanh = (res.lighthouseResult.audits["uses-optimized-images"].details.overallSavingsMs / 1000).toFixed(2);
	$('.mahoahinhanh-text').text((res.lighthouseResult.audits["uses-optimized-images"].details.overallSavingsMs / 1000).toFixed(2) + ' s');

	if (Valuemahoahinhanh <= 0) {
		$('.block7').addClass('display-none');
	} else {
		$('.block7').removeClass('display-none');
	}

	clas4 = $('.icon-mahoahinhanh');
	clas3 = $('.mahoahinhanh-text');
	width2 = $('.width-mahoahinhanh');
	changeColorPlus(Valuemahoahinhanh, clas4, clas3, width2);


	for (var y = 0; y < mahoahinhanh.length; y++) {
		d = mahoahinhanh[y].url.toString().split("/");
		f = (mahoahinhanh[y].totalBytes / 1000).toFixed(0);
		g = (mahoahinhanh[y].wastedBytes / 1000).toFixed(0);
		b = '<tr>' +
			'<td>' + '<img src="' + mahoahinhanh[y].url + '" style="width:50px; height:50px;">' +
			"<a style='color:#333' href='" + mahoahinhanh[y].url + "' target='_blank'>" + '../' + d.pop().substr(-50) + "</a>" + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' KB' + '</td>' +
			'</tr>';
		$('.mahoahinhanh').append(b);
	}


	// giảm thời gian phản hồi máy chủ TTFB  ++

	ValueTTFB = (res.lighthouseResult.audits["time-to-first-byte"].details.overallSavingsMs / 1000).toFixed(2);
	$('.TTFB-text').text((res.lighthouseResult.audits["time-to-first-byte"].details.overallSavingsMs / 1000).toFixed(2) + ' s');


	if (ValueTTFB <= 0) {
		$('.block6').addClass('display-none');
	} else {
		$('.block6').removeClass('display-none');
	}

	clas4 = $('.icon-TTFB');
	clas3 = $('.TTFB-text');
	width2 = $('.width-TTFB');
	changeColorPlus(ValueTTFB, clas4, clas3, width2);






	//Trì hoãn hình ảnh ngoài màn hình
	trihoanhinh = data.audits["offscreen-images"].details.items,
		Valuetrihoanhinh = (res.lighthouseResult.audits["offscreen-images"].details.overallSavingsMs / 1000).toFixed(2);
	$('.trihoanhinh-text').text((res.lighthouseResult.audits["offscreen-images"].details.overallSavingsMs / 1000).toFixed(2) + ' s');


	if (Valuetrihoanhinh <= 0) {
		$('.block4').addClass('display-none');
	} else {
		$('.block4').removeClass('display-none');
	}

	clas5 = $('.icon-trihoanhinh');
	clas6 = $('.trihoanhinh-text');
	width3 = $('.width-trihoanhinh');
	changeColorPlus(Valuetrihoanhinh, clas5, clas6, width3);

	for (var y = 0; y < trihoanhinh.length; y++) {
		d = trihoanhinh[y].url.toString().split("/");
		f = (trihoanhinh[y].totalBytes / 1000).toFixed(0);
		g = (trihoanhinh[y].wastedBytes / 1000).toFixed(0);
		b = '<tr>' +
			'<td>' + '<img src="' + trihoanhinh[y].url + '" style="width:50px; height:50px;">' +
			"<a style='color:#333' href='" + trihoanhinh[y].url + "' target='_blank'>" + '../' + d.pop().substr(-30) + "</a>" + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' KB' + '</td>' +
			'</tr>';
		$('.trihoanhinh').append(b);
	}


	//   Xóa biểu định kiểu xếp chồng (CSS) không dùng


	Csskhongdung = data.audits["unused-css-rules"].details.items,
		ValueCsskhongdung = (res.lighthouseResult.audits["unused-css-rules"].details.overallSavingsMs / 1000).toFixed(2);
	$('.Csskhongdung-text').text((res.lighthouseResult.audits["unused-css-rules"].details.overallSavingsMs / 1000).toFixed(2) + ' s');

	if (ValueCsskhongdung <= 0) {
		$('.block5').addClass('display-none');
	} else {
		$('.block5').removeClass('display-none');
	}

	clas7 = $('.icon-Csskhongdung');
	clas8 = $('.Csskhongdung-text');
	width4 = $('.width-Csskhongdung');
	changeColorPlus(ValueCsskhongdung, clas7, clas8, width4);

	for (var y = 0; y < Csskhongdung.length; y++) {
		d = Csskhongdung[y].url.toString().split("/");
		f = (Csskhongdung[y].totalBytes / 1000).toFixed(0);
		g = (Csskhongdung[y].wastedBytes / 1000).toFixed(0);
		b = '<tr>' +
			'<td>' + "<a style='color:#333' href='" + Csskhongdung[y].url + "' target='_blank'>" + '../' + d.pop().substr(-50) + "</a>" + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' KB' + '</td>' +
			'</tr>';
		$('.Csskhongdung').append(b);
	}












	//Chan doan 

	// font url
	for (var i = 0; i < fontUrl.length; i++) {
		d = fontUrl[i].url.toString().split("/");
		f = fontUrl[i].wastedMs.toFixed(0);

		d = '<tr>' +
			'<td>' + '../' + d.pop().substr(-50) + '</td>' +
			'<td>' + f + ' ms' + '</td>' +
			'</tr>';
		$('.display-font').append(d);
	}



	//  Giảm thiểu độ sâu của các yêu cầu quan trọng 
	crc = data.audits["critical-request-chains"].displayValue;
	$('.crc').text(crc);

	//Dom size

	domsize = data.audits["dom-size"].details.items;
	$('.domsize-text').text(data.audits["dom-size"].displayValue);
	ds = '<tr>' +
		'<td>' + 'Tổng số các phần tử DOM' + '</td>' +
		'<td>' + '</td>' +
		'<td>' + domsize[0].value + '</td>' +
		'</tr>' +
		'<tr>' +
		'<td>' + 'Độ sâu DOM tối đa' + '</td>' +
		'<td>' + "<pre>" + domsize[1].element.value + "</pre>" + '</td>' +
		'<td>' + domsize[1].value + '</td>' +
		'</tr>' +
		'<tr>' +
		'<td>' + 'Tổng số các phần tử DOM' + '</td>' +
		'<td>' + "<pre>" + domsize[2].element.value + "</pre>" + '</td>' +
		'<td>' + domsize[2].value + '</td>' +
		'</tr>';
	$('.domsize').append(ds);




	//Javascript boootup
	bootuptime = data.audits["bootup-time"].details.items;
	$('.bootuptime-text').text((data.audits["bootup-time"].details.summary.wastedMs / 1000).toFixed(1) + ' s');

	for (var j = 0; j < bootuptime.length; j++) {
		d = bootuptime[j].url;
		f = (bootuptime[j].total).toFixed(0);
		g = (bootuptime[j].scripting).toFixed(0);
		s = (bootuptime[j].scriptParseCompile).toFixed(0);

		god = '<tr>' +
			'<td>' + '../' + d.substr(-40) + '</td>' +
			'<td>' + f + ' ms' + '</td>' +
			'<td>' + g + ' ms' + '</td>' +
			'<td>' + s + ' ms' + '</td>' +
			'</tr>';
		$('.bootuptime').append(god);
	}



	//Found
	$('.found').text(cacheArray.length);
	for (var j = 0; j < cacheArray.length; j++) {
		d = cacheArray[j].url.toString().split("/");
		f = (cacheArray[j].totalBytes / 1000).toFixed(0);
		g = (cacheArray[j].cacheLifetimeMs / 1000).toFixed(0);
		console.log();
		go = '<tr>' +
			'<td>' + '../' + d.pop().substr(-50) + '</td>' +
			'<td>' + g + ' s' + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'</tr>';
		$('.found-table').append(go);
	}

	// Request table

	Request = Keeprequest.details.items;
	$('.request').text(Keeprequest.displayValue);
	for (var y = 0; y < Request.length; y++) {
		d = Request[y].requestCount;
		f = Request[y].label;
		g = (Request[y].size / 1000).toFixed(0);

		b = '<tr>' +
			'<td>' + f + '</td>' +
			'<td>' + d + '</td>' +
			'<td>' + g + ' KB' + '</td>' +
			'</tr>';
		$('.request-table').append(b);
	}
	//   third-party-table



	$('.third-found').text(ThirdPart.displayValue);
	TP = ThirdPart.details.items;
	for (var v = 0; v < TP.length; v++) {
		d = TP[v].entity.text;
		f = (TP[v].transferSize / 1000).toFixed(0);
		g = (TP[v].mainThreadTime).toFixed(0);

		tf = '<tr>' +
			'<td>' + d + '</td>' +
			'<td>' + f + ' KB' + '</td>' +
			'<td>' + g + ' ms' + '</td>' +
			'</tr>';
		$('.third-party-table').append(tf);
	}






	if (typeof res.loadingExperience.metrics != 'undefined') {


		if (performance <= 49) {
			hh = 'Chậm';
			hc = 'color: red';

		} else if (performance > 49 && performance <= 89) {
			hh = 'Trung bình';
			hc = 'color: orange';
		} else {
			hh = 'Tốt';
			hc = 'color: green';
		}


		FirstContent = `
					<div class="content-header">
					<span class="title-audit">
						Dữ liệu trường
					</span>
	 
					<span class="description-audit">
						 Trong 30 ngày qua,
						dữ liệu trong trường cho thấy trang này có tốc độ <span
							style="${hc}; font-weight: 600">${hh}</span> so với các trang khác trong <a
							href="">Báo
							cáo trải nghiệm người dùng trên Chrome</a>. Chúng tôi đang hiển thị
						<a href=""> phân
							vị thứ 90 của FCP</a> và <a href="">phân vị thứ 95 của FID.</a> 
					</span>
				
	 
				</div>
					<div class="row">
						<div class="col-md-6">
							<hr>
							<div class="field-adit">
							   <span class="${colorFeld2}"></span>
								<span class="field-description">
									Hiển thị nội dung đầu tiên (FCP)
								</span>
	 
								<span class="field-value ${fontcolor2} FCP-F"> 
								${FCPsecond}
								</span>
							</div>
					   
							<div class="progress">
							<div class="progress-bg-xanh" style="width:${fastFCP2}%">
								<div class="progress-bar bg-xanh" aria-label="pro" role="progressbar"
									style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
									${fastFCP2}%</div>
							</div>
							<div class="progress-bg-vang" style="width:${mediumFCP2}%">
								<div class="progress-bar bg-vang" role="progressbar" style="width: 100%"
									aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">${mediumFCP2}%</div>
							</div>
							<div class="progress-bg-do" style="width:${slowFCP2}%">
								<div class="progress-bar bg-do" role="progressbar" style="width:100%"
									aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">${slowFCP2}%</div>
							</div>
						</div>
							<hr>
						</div>
	 
						<div class="col-md-6">
							<hr>
							<div class="field-adit">
							   <span class="${colorFeld4}"></span>
								<span class="field-description">
								   Thời gian phản hồi lần đầu tiên (FID)
								</span>
								<span class="field-value ${fontcolor4} FID-F">
								${FIDsecond}
								</span>
							</div>
							<div class="progress">
							<div class="progress-bg-xanh" style="width:${fastFID2}%">
								<div class="progress-bar bg-xanh" aria-label="pro" role="progressbar"
									style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
									${fastFID2}%</div>
							</div>
							<div class="progress-bg-vang" style="width:${mediumFID2}%">
								<div class="progress-bar bg-vang" role="progressbar" style="width: 100%"
									aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">${mediumFID2}%</div>
							</div>
							<div class="progress-bg-do" style="width:${slowFID2}%">
								<div class="progress-bar bg-do" role="progressbar" style="width:100%"
									aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">${slowFID2}%</div>
							</div>
						</div>
							<hr>
						</div>
					</div>
	 
					<p>
						<!-- <input type="checkbox" class="checkbox-gg"> -->
						<a class="btn-google" data-toggle="collapse" href="#collapseExample" role="button"
							aria-expanded="false" aria-controls="collapseExample">
							Hiển thị tóm tắt nguồn
						</a>
					</p>
					<br>
					<div class="collapse" id="collapseExample">
						<div class="">
							<div class="content-header">
								<span class="title-audit">
									Origin Summary
								</span>
								<span class="description-audit">
									 Trong 30 ngày qua,
									dữ liệu trong trường cho thấy trang này có tốc độ <span
										style="${hc}; font-weight: 600">${hh}</span> so với các trang khác trong
									<a href="">Báo
										cáo trải nghiệm người dùng trên Chrome</a>. Chúng tôi đang hiển thị
									<a href=""> phân
										vị thứ 90 của FCP</a> và <a href="">phân vị thứ 95 của FID.</a>
	 
								</span>
							</div>
							<div class="row">
								<div class="col-md-6">
									<hr>
									<div class="field-adit">
									<span class="${colorFeld}"></span>
	
										<span class="field-description">
											Hiển thị nội dung đầu tiên (FCP)
										</span>
	 
										<span class="field-value ${fontcolor1}">
										${FCPfirst}
										</span>
									</div>
									<div class="progress">
									<div class="progress-bg-xanh" style="width:${fastFCP1}%">
										<div class="progress-bar bg-xanh" aria-label="pro" role="progressbar"
											style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
											${fastFCP1}%</div>
									</div>
									<div class="progress-bg-vang" style="width:${mediumFCP1}%">
										<div class="progress-bar bg-vang" role="progressbar" style="width: 100%"
											aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">${mediumFCP1}%</div>
									</div>
									<div class="progress-bg-do" style="width:${slowFCP1}%">
										<div class="progress-bar bg-do" role="progressbar" style="width:100%"
											aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">${slowFCP1}%</div>
									</div>
								</div>
									<hr>
								</div>
	 
								<div class="col-md-6">
									<hr>
									<div class="field-adit">
										<span class="${colorFeld3}"></span>
										<span class="field-description">
										   Thời gian phản hồi đầu tiên (FID)
										</span>
										<span class="field-value ${fontcolor3}">
										${FIDfirst}
										</span>
									</div>
									<div class="progress">
									<div class="progress-bg-xanh" style="width:${fastFID1}%">
										<div class="progress-bar bg-xanh" aria-label="pro" role="progressbar"
											style="width:100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
											${fastFID1}%</div>
									</div>
									<div class="progress-bg-vang" style="width:${mediumFID1}%">
										<div class="progress-bar bg-vang" role="progressbar" style="width: 100%"
											aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">${mediumFID1}%</div>
									</div>
									<div class="progress-bg-do" style="width:${slowFID1}%">
										<div class="progress-bar bg-do" role="progressbar" style="width:100%"
											aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">${slowFID1}%</div>
									</div>
								</div>
									<hr>
								</div>
							</div>
						</div>
					</div>`;

		$('.audit-column').html(FirstContent);
	} else {

		FirstContentIf = `<div class="content-header">
					<span class="title-audit">
						Dữ liệu trường
					</span>
	 
					<span class="description-audit">
						 Báo cáo trải nghiệm người dùng trên Chrome <a
							href=""> không có đủ dữ liệu tốc độ trong thực tế</a>. cho trang này.
					</span>
				   </div>
	 
					<div class="content-header">
						<span class="title-audit">
								Origin Summary
						</span>
	 
						<span class="description-audit">
							Báo cáo trải nghiệm người dùng trên Chrome <a
								href=""> không có đủ dữ liệu tốc độ trong thực tế</a>. cho trang này.
							   
						</span>
					</div>`;



		$('.audit-column').html(FirstContentIf);

	}


	if (performance <= 49) {
		color = 'background-red';
		number = 'number-red';
		stroke = 'stroke-red';
	} else if (performance > 49 && performance <= 89) {
		color = 'background-orange';
		number = 'number-orange';
		stroke = 'stroke-orange';

	} else {
		color = 'background-green';
		number = 'number-green';
		stroke = 'stroke-green';
	}
	// document.getElementById('ddd').setAttribute('stroke-dasharray', scores[1], 100);
	var li = "";
	li = `<div class="single-chart">
				 <svg viewBox="0 0 36 36" class="circular-chart ${color}   green">'
						  <path class="circle-bg" d="M18 2.0845  
							  a 15.9155 15.9155 0 0 1 0 31.831
							  a 15.9155 15.9155 0 0 1 0 -31.831" />    
						  <path id="ddd" class="circle ${stroke}" stroke-dasharray="${performance},100"  d="M18 2.0845
							  a 15.9155 15.9155 0 0 1 0 31.831
							  a 15.9155 15.9155 0 0 1 0 -31.831" />
						  <text x="50%" y="63%" class="percentage ${number}">${Math.ceil(performance)}</text>
					  </svg>
				 </div> `;

	$('.flex-wrapper').html(li);
}

function move() {
	$('.main').addClass('display-none');
	$('.tab-action').addClass('display-none');
	var elem = document.getElementById("myBar");
	var percent = document.getElementById("percent");
	var width = 0
	var id = setInterval(frame1, 60);
	var idss = setInterval(frame2, 600);
	setTimeout(idss, 3000)
	function frame1() {
		if (width >= 50) {
			clearInterval( id);
			// $('.progresss').addClass('display-none');
			// $('.tab-action').removeClass('display-none');
			// $('.main').removeClass('display-none');

		} else {
			width++;
			elem.style.width = width + '%';
			percent.innerHTML = width * 1 + '%' + ' Hoàn tất';
		}
	}
	function frame2() {
		if (width >= 100) {
			clearInterval( idss);
			// $('.progresss').addClass('display-none');
			// $('.tab-action').removeClass('display-none');
			// $('.main').removeClass('display-none');

		} else {
			width++;
			elem.style.width = width + '%';
			percent.innerHTML = width * 1 + '%' + ' Hoàn tất';
		}
	}
}
$(document).ready(() => {

	testPageSpeed();

	function testPageSpeed() {
		var url = new URL(window.location.href);
		var websiteUrl = url.searchParams.get("websiteUrl");
		doTestPagesPeed(websiteUrl);

	}


	function doTestPagesPeed() {
		move();
		// var urlPc = "//localapi.trazk.com/pagespeed/index.php?task=getWebsitePageSpeed&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&url=" + url;
		// var urlMoblie = "//localapi.trazk.com/pagespeed/index.php?task=getWebsitePageSpeedMobile&userToken=cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb&url=" + url;
		// $.getJSON(urlPc, function (res) {
		//   if(typeof res == "string")
		//     res = JSON.parse(res)
		//   SpeedWeb(res);
		// });
		// $.getJSON(urlMoblie, function (resMoblie) {
		//   if(typeof res == "string")
		//     datamobi = JSON.parse(resMoblie);
		// //   SpeedWeb(resMoblie);
		// });
	}

	$('#pc').addClass('activever')
	$('#pc').click(function() {
		$(this).addClass('activever')
		$('#similar').addClass('similarThumbPc')
		$('#similar').removeClass('similarThumbMobile')
		$('#mobi').removeClass('activever')
		SpeedWeb(datapc);
	})
	$('#mobi').click(function() {
		$(this).addClass('activever')
		$('#similar').removeClass('similarThumbPc')
		$('#similar').addClass('similarThumbMobile')
		$('#pc').removeClass('activever')
		SpeedWeb(datamobi)
	})
	$('#nav-1').addClass('active-nav-links active-nav-links > a > i');
	$('#nav-1').click(function () {
		$(this).addClass('active-nav-links active-nav-links > a > i');
		$('#nav-2').removeClass('active-nav-links active-nav-links > a > i');
	})
	$('#nav-2').click(function () {
		$(this).addClass('active-nav-links active-nav-links > a > i');
		$('#nav-1').removeClass('active-nav-links active-nav-links > a > i');
	})
});