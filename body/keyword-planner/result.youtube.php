<?
$keyword = $_GET['keywords'];
?>
<div class="page-wrapper ml-0">

	<div class="container pt-5">
		<div class=" keywordsBody mx-auto">
			<a href="?view=keyword-planner&action=index&keywords=<?=$_GET['keywords']?>&language=vn&country=vn#" class="position-relative text-white btn-clean btn">
				<i class="far fa-angle-left m-r-5"></i> Quay lại
			</a>
			<div class="row justify-content-center">
				<div class="col-12" style="max-width:900px">
					<div class="mb-5 text-center ">
					<div class="font-gg font-weight-500 fontsize-16 text-success text-center">
                                        Keyword Planner
                                    </div>
                                    <div class="font-gg font-weight-400 fontsize-32 text-center">
                                        Phân Tích Từ Khóa Cho SEOer và SEM

									</div>
									<div class="text-center">
                                         <a target="blank" href="https://chrome.google.com/webstore/detail/ph%C3%A2n-t%C3%ADch-t%E1%BB%AB-kh%C3%B3a-keyword/gamgpnolibdghflagmlghmpncjgonchn"><img src="./dist/images/chrome-extension.png" height="30px" class="mr-2"></a>
                                        <a target="blank" href="https://addons.mozilla.org/en-US/firefox/addon/keyword-planner/"><img src="./dist/images/firefox-extension.png" height="30px"  class="mr-2"></a>
                                        <a target="blank" href="https://microsoftedge.microsoft.com/addons/detail/gcamcdaeilhnapdifpjhglnoddfponnf"><img src="./dist/images/edge-extension.png" height="30px"></a>
                                    </div>
					</div>
					<div class="text-center mt-5 mb-0">
						<div class="input-group keywordSearchBox">
							<div class="input-group-prepend">
								<select class="form-control selectNetwork">
									<option value="">Web</option>
									<option value="i">Image</option>
									<option value="n">Tin tức </option>
									<option value="yt">Youtube</option>
									<option value="sh">Amazon</option>
								</select>
							</div>
							<input type="text" class="form-control ml-1 font-14  iptKeyword" aria-label="" value="<?=$_GET['keywords']?>">
							<select class="border mr-1 ml-1 selectpicker selectLanguage fixWithSelectBox" data-live-search="true">
								<option value="ar"> Arabic </option>
								<option value="bn"> Bengali </option>
								<option value="bg"> Bulgarian </option>
								<option value="ca"> Catalan </option>
								<option value="zh_TW">Chinese</option>
								<option value="hr"> Croatian </option>
								<option value="cs"> Czech </option>
								<option value="da"> Danish </option>
								<option value="nl"> Dutch </option>
								<option value="en"> English </option>
								<option value="et"> Estonian </option>
								<option value="tl"> Filipino </option>
								<option value="fi">Finnish</option>
								<option value="fr">French</option>
								<option value="de">German</option>
								<option value="el">Greek</option>
								<option value="iw"> Hebrew</option>
								<option value="hi">Hindi</option>
								<option value="hu"> Hungarian</option>
								<option value="is">Icelandic</option>
								<option value="id">Indonesian</option>
								<option value="it">Italian</option>
								<option value="ja">Japanese</option>
								<option value="ko">Korean</option>
								<option value="lv">Latvian</option>
								<option value="lt"> Lithuanian</option>
								<option value="ms"> Malay</option>
								<option value="no">Norwegian</option>
								<option value="fa">Persian</option>
								<option value="pl">Polish</option>
								<option value="pt"> Portuguese</option>
								<option value="ro">Romanian</option>
								<option value="ru"> Russian</option>
								<option value="sr"> Serbian</option>
								<option value="sk"> Slovak</option>
								<option value="sl"> Slovenian</option>
								<option value="es"> Spanish</option>
								<option value="sv"> Swedish</option>
								<option value="ta"> Tamil</option>
								<option value="te">Telugu</option>
								<option value="th">Thai</option>
								<option value="tr"> Turkish</option>
								<option value="uk"> Ukrainian</option>
								<option value="ur"> Urdu</option>
								<option value="vn"> Tiếng Việt</option>
							</select>
							<select class="border mr-1 selectpicker selectCountry fixWithSelectBox" data-live-search="true">
								<option value="af">	Afghanistan	</option>
								<option value="">Åland Islands	</option>
								<option value="al">Albania	</option>
								<option value="dz">	Algeria	</option>
								<option value="as">	American Samoa	</option>
								<option value="ad">	Andorra	</option>
								<option value="ao">	Angola	</option>
								<option value="ai">	Anguilla	</option>
								<option value="aq">	Antarctica	</option>
								<option value="ag">	Antigua and Barbuda	</option>
								<option value="ar">	Argentina	</option>
								<option value="am">	Armenia	</option>
								<option value="aw">	Aruba	</option>
								<option value="au">	Australia	</option>
								<option value="at">	Austria	</option>
								<option value="az">	Azerbaijan	</option>
								<option value="bs">	Bahamas	</option>
								<option value="bh">	Bahrain	</option>
								<option value="bd">	Bangladesh	</option>
								<option value="bb">	Barbados	</option>
								<option value="by">	Belarus	</option>
								<option value="be">	Belgium	</option>
								<option value="bz">	Belize	</option>
								<option value="bj">	Benin	</option>
								<option value="bm">	Bermuda	</option>
								<option value="bt">	Bhutan	</option>
								<option value="bo">	Bolivia	</option>
								<option value="ba">	Bosnia and Herzegovina	</option>
								<option value="bw">	Botswana	</option>
								<option value="bv">	Bouvet Island	</option>
								<option value="br">	Brazil	</option>
								<option value="io">	British Indian Ocean Territory	</option>
								<option value="bn">	Brunei 	</option>
								<option value="bg">	Bulgaria	</option>
								<option value="bf">	Burkina Faso	</option>
								<option value="bi">	Burundi	</option>
								<option value="kh">	Cambodia	</option>
								<option value="cm">	Cameroon	</option>
								<option value="ca">	Canada	</option>
								<option value="cv">	Cape Verde	</option>
								<option value="ky">	Cayman Islands	</option>
								<option value="cf">	Central African Republic	</option>
								<option value="td">	Chad	</option>
								<option value="cl">	Chile	</option>
								<option value="cn">	China	</option>
								<option value="cx">	Christmas Island	</option>
								<option value="cc">	Cocos (Keeling) Islands	</option>
								<option value="co">	Colombia	</option>
								<option value="km">	Comoros	</option>
								<option value="cg">	Congo	</option>
								<option value="cd">	Congo, The Democratic Republic of The	</option>
								<option value="ck">	Cook Islands	</option>
								<option value="cr">	Costa Rica	</option>
								<option value="ci">	Cote D'ivoire	</option>
								<option value="hr">	Croatia	</option>
								<option value="cu">	Cuba	</option>
								<option value="cw">	Cyprus	</option>
								<option value="cz">	Czech Republic	</option>
								<option value="dk">	Denmark	</option>
								<option value="dj">	Djibouti	</option>
								<option value="dm">	Dominica	</option>
								<option value="do">	Dominican Republic	</option>
								<option value="ec">	Ecuador	</option>
								<option value="eg">	Egypt	</option>
								<option value="sv">	El Salvador	</option>
								<option value="gq">	Equatorial Guinea	</option>
								<option value="er">	Eritrea	</option>
								<option value="ee">	Estonia	</option>
								<option value="et">	Ethiopia	</option>
								<option value="fk">	Falkland Islands (Malvinas)	</option>
								<option value="fo">	Faroe Islands	</option>
								<option value="fj">	Fiji	</option>
								<option value="fi">	Finland	</option>
								<option value="fr">	France	</option>
								<option value="gf">	French Guiana	</option>
								<option value="pf">	French Polynesia	</option>
								<option value="tf">	French Southern Territories	</option>
								<option value="ga">	Gabon	</option>
								<option value="gm">	Gambia	</option>
								<option value="ge">	Georgia	</option>
								<option value="de">	Germany	</option>
								<option value="gh">	Ghana	</option>
								<option value="gi">	Gibraltar	</option>
								<option value="gr">	Greece	</option>
								<option value="gl">	Greenland	</option>
								<option value="gd">	Grenada	</option>
								<option value="gp">	Guadeloupe	</option>
								<option value="gu">	Guam	</option>
								<option value="gt">	Guatemala	</option>
								<option value="gg">	Guernsey	</option>
								<option value="gn">	Guinea	</option>
								<option value="gw">	Guinea-bissau	</option>
								<option value="gy">	Guyana	</option>
								<option value="ht">	Haiti	</option>
								<option value="hm">	Heard Island and Mcdonald Islands	</option>
								<option value="hn">	Honduras	</option>
								<option value="hk">	Hong Kong	</option>
								<option value="hu">	Hungary	</option>
								<option value="is">	Iceland	</option>
								<option value="in">	India	</option>
								<option value="id">	Indonesia	</option>
								<option value="ir">	Iran, Islamic Republic of	</option>
								<option value="iq">	Iraq	</option>
								<option value="ie">	Ireland	</option>
								<option value="il">	Israel	</option>
								<option value="it">	Italy	</option>
								<option value="jm">	Jamaica	</option>
								<option value="jp">	Japan	</option>
								<option value="je">	Jersey	</option>
								<option value="jo">	Jordan	</option>
								<option value="kz">	Kazakhstan	</option>
								<option value="ke">	Kenya	</option>
								<option value="ki">	Kiribati	</option>p                                                                
														
								<option value="ki">	Kuwait	</option>
								<option value="kw">	Kyrgyzstan	</option>
								<option value="la">	Lao People's Democratic Republic	</option>
								<option value="lb">	Latvia	</option>
								<option value="lv">	Lebanon	</option>
								<option value="ls">	Lesotho	</option>
								<option value="lr">	Liberia	</option>
								<option value="li">	Libyan Arab Jamahiriya	</option>
								<option value="ly">	Liechtenstein	</option>
								<option value="lt">	Lithuania	</option>
								<option value="lu">	Luxembourg	</option>
								<option value="mo">	Macao	</option>
								<option value="mk">	Macedonia, The Former Yugoslav Republic of	</option>
								<option value="mg">	Madagascar	</option>
								<option value="mw">	Malawi	</option>
								<option value="my">	Malaysia	</option>
								<option value="mv">	Maldives	</option>
								<option value="ml">	Mali	</option>
								<option value="mt">	Malta	</option>
								<option value="mh">	Marshall Islands	</option>
								<option value="mq">	Martinique	</option>
								<option value="mr">	Mauritania	</option>
								<option value="mu">	Mauritius	</option>
								<option value="yt">	Mayotte	</option>
								<option value="mx">	Mexico	</option>
								<option value="fm">	Micronesia, Federated States of	</option>
								<option value="md">	Moldova, Republic of	</option>
								<option value="mc">	Monaco	</option>
								<option value="mn">	Mongolia	</option>
								<option value="me">	Montenegro	</option>
								<option value="ms">	Montserrat	</option>
								<option value="ma">	Morocco	</option>
								<option value="mz">	Mozambique	</option>
								<option value="mm">	Myanmar	</option>
								<option value="na">	Namibia	</option>
								<option value="nr">	Nauru	</option>
								<option value="np">	Nepal	</option>
								<option value="nl">	Netherlands	</option>
								<option value="an">	Netherlands Antilles	</option>
								<option value="nc">	New Caledonia	</option>
								<option value="nz">	New Zealand	</option>
								<option value="ni">	Nicaragua	</option>
								<option value="ne">	Niger	</option>
								<option value="ng">	Nigeria	</option>
								<option value="nu">	Niue	</option>
								<option value="nf">	Norfolk Island	</option>
								<option value="kp">	North Korean</option>
								<option value="mp">	Northern Mariana Islands	</option>
								<option value="no">	Norway	</option>
								<option value="om">	Oman	</option>
								<option value="pk">	Pakistan	</option>
								<option value="pw">	Palau	</option>
								<option value="ps">	Palestinian Territory, Occupied	</option>
								<option value="pa">	Panama	</option>
								<option value="pg">	Papua New Guinea	</option>
								<option value="py">	Paraguay	</option>
								<option value="pe">	Peru	</option>
								<option value="ph">	Philippines	</option>
								<option value="pn">	Pitcairn	</option>
								<option value="pl">	Poland	</option>
								<option value="pt">	Portugal	</option>
								<option value="pr">	Puerto Rico	</option>
								<option value="qa">	Qatar	</option>
								<option value="xk">	Republic of Kosovo</option>
								<option value="re">	Reunion	</option>
								<option value="ro">	Romania	</option>
								<option value="ru">	Russian Federation	</option>
								<option value="rw">	Rwanda	</option>
								<option value="lc">	Saint Lucia	</option>
								<option value="kn">	Saint Kitts and Nevis	</option>
								<option value="vc">	Saint Vincent and The Grenadines	</option>
								<option value="ws">	Samoa	</option>
								<option value="sm">	San Marino	</option>
								<option value="st">	Sao Tome and Principe	</option>
								<option value="sa">	Saudi Arabia	</option>
								<option value="sn">	Senegal	</option>
								<option value="rs">	Serbia	</option>
								<option value="sc">	Seychelles	</option>
								<option value="sl">	Sierra Leone	</option>
								<option value="sr">	Singapore	</option>
								<option value="sx">	Slovakia	</option>
								<option value="sk">	Slovenia	</option>
								<option value="si">	Solomon Islands	</option>
								<option value="sb">	Somalia	</option>
								<option value="za">	South Africa	</option>
								<option value="gs">	South Georgia and The South Sandwich Islands	</option>
								<option value="es">	Spain	</option>
								<option value="lk">	Sri Lanka	</option>
								<option value="sd">	Sudan	</option>
								<option value="sr">	Suriname	</option>
								<option value="sj">	Svalbard and Jan Mayen	</option>
								<option value="sz">	Swaziland	</option>
								<option value="se">	Sweden	</option>
								<option value="ch">	Switzerland	</option>
								<option value="sy">	Syrian Arab Republic	</option>
								<option value="tw">	Taiwan (ROC)	</option>
								<option value="bs"> The Bahamas</option>
								<option value="tj">	Tajikistan	</option>
								<option value="tz">	Tanzania, United Republic of	</option>
								<option value="th">	Thailand	</option>
								<option value="t">	Timor-leste	</option>
								<option value="tg">	Togo	</option>
								<option value="tk">	Tokelau	</option>
								<option value="to">	Tonga	</option>
								<option value="tt">	Trinidad and Tobago	</option>
								<option value="tn">	Tunisia	</option>
								<option value="tr">	Turkey	</option>
								<option value="tm">	Turkmenistan	</option>
								<option value="tc">	Turks and Caicos Islands	</option>
								<option value="tv">	Tuvalu	</option>
								<option value="ug">	Uganda	</option>
								<option value="ua">	Ukraine	</option>
								<option value="ae">	United Arab Emirates	</option>
								<option value="gb">	United Kingdom	</option>
								<option value="us">	United States	</option>
								<option value="um">	United States Minor Outlying Islands	</option>
								<option value="uy">	Uruguay	</option>
								<option value="uz">	Uzbekistan	</option>
								<option value="vu">	Vanuatu	</option>
								<option value="ve">	Venezuela	</option>
								<option value="vn">Việt Nam</option>
								<option value="vg">	Virgin Islands, British	</option>
								<option value="vi">	Virgin Islands, U.S.	</option>
								<option value="wf">	Wallis and Futuna	</option>
								<option value="eh">	Western Sahara	</option>
								<option value="ye">	Yemen	</option>
								<option value="zm">	Zambia	</option>
								<option value="zw">	Zimbabwe	</option>
							</select>
							<div class="input-group-append">
								<button class="btnSubmitKeyword btn btn-success font-gg font-weight-500 rounded shadow-sm" type="button"><i class="font-13 far fa-search fa-lg fa-fw text-white"></i>Phân Tích</button>
							</div>
						</div>
					</div>

		

					
				</div>
			</div>
			<div class=" contentBidForecast position-relative mb-3 mt-4 text-muted font-gg text-center text-md-left">
				<strong class='font-gg'>30 ngày tới </strong><i>(<?=date("d/m/Y")." - ".date("d/m/Y",strtotime("+30 days"));?>)</i> dự báo từ khóa
				<span class="text-info text-lowercase font-bold font-16"><?=$_GET['keywords']?></span> sẽ có
				
			</div>
			<div class="row contentBidForecast">
				<div class="col-12 col-lg-4">
					<div class="row">
						<div class="col-12 col-md-6 col-lg-12 pl-4">
							<div class="d-flex no-block bg-white border-top-success align-items-center rounded-sm shadow-gg is-loading mb-4" style="height:150px;margin-left: -11px;">
								<div id="getBidForecast--Impression" class="py-4 pl-4 text-success flex-grow-1">
									<span class="font-gg font-14 text-muted mr-auto">Trung bình tìm kiếm</span>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-12">
							<div class="d-flex no-block bg-white border-top-success align-items-center rounded-sm shadow-gg is-loading mb-4" style="height:150px">
								<div id="getBidForecast--Position" class="p-4 text-success flex-grow-1 border-right">
									<span class="font-gg font-14 text-muted mr-auto">Vị trí trung bình</span>
								</div>
								<div id="getBidForecast--CTR" class="p-4 text-success flex-grow-1">
									<span class="font-gg font-14 text-muted mr-auto">Tỷ lệ nhấp chuột</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-4">
					<div class="row">
						<div class="col-12">
							<div class="d-flex no-block bg-dark flex-column rounded-sm shadow-gg is-loading mb-4" style="height:321px">
								<div id="getBidForecast--Cost" class="py-4 pl-4 text-white flex-grow-1">
									<span class="font-gg font-14 text-white mr-auto">Chi phí Quảng cáo Adwords</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-4">
					<div class="row">
						<div class="col-12 col-md-6 col-lg-12">
							<div class="d-flex no-block bg-white border-top-success align-items-center rounded-sm shadow-gg is-loading mb-4" style="height:150px">
								<div id="getBidForecast--Click" class="py-4 pl-4 text-success flex-grow-1">
									<span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-12">
							<div class="d-flex no-block bg-white border-top-success align-items-center rounded-sm shadow-gg is-loading mb-4" style="height:150px">
								<div id="getBidForecast--CPC" class="py-4 pl-4 text-success flex-grow-1">
									<span class="font-gg font-14 text-muted mr-auto">Chi phí 1 nhấp chuột</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row historyByMonthKeywords d-none ">
				<div class="col-12">
					<div id="historyByMonthKeywords" class="d-flex no-block bg-dark flex-column rounded-sm shadow-gg my-4" style="min-height:400px">
						<div class="d-flex no-block flex-column pt-3 px-3 pt-md-4 px-md-4 ">
							<span class="text-white font-gg font-16"> Nhu cầu tìm kiếm 12 tháng của 
								<strong class="tukhoaLienQuan font-gg font-16 text-info"></strong> từ khoá liên quan
                                "
								<strong class="font-gg font-16 text-success">
									<?= $keyword ?>
								</strong>" theo thiết
                                bị
							</span>
						</div>
						<div id="getKeywordsSuggestion--eCharts" class="" style="width:auto;height:350px"></div>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-12 col-lg-12">
					<div class="d-flex bg-white flex-column">
						
						<ul class="nav nav-tabs customTabColor border-0" role="tablist">
							<li class="nav-item">
								<a class="nav-link active filterKWtype" data-kwtype="all" data-toggle="tab" data-task="all_keyword" href="#all_keyword" role="tab">
									<strong class=" d-lg-inline font-13 ml-2">Tất cả:</strong>
										<span class="text-primary font-weight-bold pl-1 count_key_all" id ="count__key_all"></span>
									
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link filterKWtype" data-kwtype="exact" data-toggle="tab" data-task="main_keyword" href="#main_keyword" role="tab">
									<strong class=" d-lg-inline font-13  ml-2"> Từ khóa chính:</strong>
									<span class="text-danger font-weight-bold pl-1 count__key_main" id="count__key_main"></span>
									<i class="far fa-question-circle custom-font-13 ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bắt đầu bằng từ khóa chính"></i>
									
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link filterKWtype" data-kwtype="phrase" data-toggle="tab" data-task="related_keyword" href="#related_keyword" role="tab">
									<strong class=" d-lg-inline font-13  ml-2"><strong class="hiddenMobile">Từ khóa</strong> liên quan:</strong>
									<span class="text-danger font-weight-bold pl-1 count_key_related" id="count__key_related"></span>
									<i class="far fa-question-circle custom-font-13 ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Gần giống với đối sánh cụm từ"></i>
									
									
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link filterKWtype" data-kwtype="broad" data-toggle="tab" data-task="widen_keyword" href="#widen_keyword" role="tab">
									<strong class=" d-lg-inline font-13  ml-2"><strong class="hiddenMobile">Từ khóa</strong> mở rộng:</strong>
									<span class="text-danger font-weight-bold pl-1 count_key_widen" id="count__key_widen"></span>
									<i class="far fa-question-circle custom-font-13 ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sử dụng AI đề xuất các từ mở rộng"></i>
									
									
								</a>
							</li>
						</ul>
					</div>
					<div class="row mb-5">
						<div class="col-12 col-md-12 tab-content">
							<div class="tab-pane active" id="all_keyword" role="tabpanel">
								<div class="row ">
									<div class="col-12">
										<div class="bg-white px-lg-1 py-1">
											<div>
												<table id="getKeywordsSuggestion" class="table table-striped" style="width:100%;"></table>
											</div>
										</div>
									</div>
								</div>
							</div>
						
						
						</div>
					</div>
				</div>
			</div>
			<!-- ----------------------------------top 10 chart---------------------------------------------------------- -->
		
			<!-- ------------------------------xem them------------------- -->
			
		</div>
		
	</div>
</div>

<script src="assets/js/jquery.sparkline.min.js"></script>
<script src="dist/js/pages/keyword-planner/initfunction.js?v=<?=$version?>"></script> 
<script src="dist/js/pages/keyword-planner/init-function.js"></script>
<script src="dist/js/pages/keyword-planner/result.youtube.js?v=<?=$version?>"></script>