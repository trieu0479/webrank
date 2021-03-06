<?

$keyword = $_GET['keyword'];

?>

<div class="page-wrapper ml-0">
    <div class="bg-keyword">
        <div class="moon-bg d-none d-md-block"></div>
        <div id="particles-bg"></div>
    </div>
    <div class="container pt-5">
    <div class="page-content keywordsBody mx-auto" style="max-width: 1400px;">

<div class="row justify-content-center">
    <div class="col-12" style="max-width: 868px">
    <a target="_top" href="#" class="iconBackBtn position-relative text-white bg-info rounded" id="iconBackBtn_1" style ="padding:9px"><i class="far fa-angle-left m-r-5"></i> Quay lại</a>
    <div class="mb-5 text-center ">                                    
                        <div class="display-6 font-weight-500 text-capitalize font-qs">
                        Phân tích Từ khóa
                        </div>
                       
                        <div class="font-qs text-muted font-18 text-center mt-4 font-weight-500">
                            Khám phá các từ khóa mới giúp bạn  <span class=" font-18 font-qs text-warning">cải thiện hiệu suất tìm kiếm </span>
                          để thành công hơn trong chiến dịch SEO và quảng cáo Google Ads
                       </div> 
                        </div>
                        <div class="text-center mt-5 input_search mb-0" style="display:none;">
                            <div class="input-group mt-5 w-100">
                                <div class="input-group-prepend w-100"  style="height:42px!important">
                                    <input id="input-submit" type="text" class="p-10 font-14 font-gg border w-50 iptKeyword" autocomplete="off" placeholder="Nhập từ khóa bạn muốn phân tích">                                                                                                   
                                <select class="border mr-2 ml-3 selectpicker selectLanguage" data-live-search="true">
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
                                            <option value="vn" selected="true"> Tiếng Việt</option>                                                                                                  
                                </select>
                                <select class="border mr-4 ml-2 selectpicker selectCountry" data-live-search="true">
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
                                                    <option value="vn" selected="true">Việt Nam</option>
                                                    <option value="vg">	Virgin Islands, British	</option>
                                                    <option value="vi">	Virgin Islands, U.S.	</option>
                                                    <option value="wf">	Wallis and Futuna	</option>
                                                    <option value="eh">	Western Sahara	</option>
                                                    <option value="ye">	Yemen	</option>
                                                    <option value="zm">	Zambia	</option>
                                                    <option value="zw">	Zimbabwe	</option>

                                   </select>                                                 
                                    <a href="javascript:void(0);" id="btnSubmitKeyword" class="btnSubmitKeyword w-20 btn btn-success font-gg font-weight-500 rounded shadow-sm" style="color:#fff!important"><i class="font-13 far fa-search fa-lg fa-fw text-white"></i>Phân tích</a>
                                </div>
                            </div>
                        </div>                                   
                    </div>
    </div>
</div>

           
            <div class="contentBidForecast position-relative mb-5  mt-4 font-16 text-muted text-capitalize font-gg text-center text-md-left">
                <?= _("Dự báo nhu cầu <strong class='font-16 font-gg'>30 ngày</strong> tới của Từ Khóa: ") ?>
                <div class="rounded-pill bg-info-2 px-3 py-2 ml-1 d-inline-flex align-items-center">
                    <div id="searchTerm" class="font-16 font-gg text-info text-lowercase font-bold"></div>
                    
                </div>
            </div>

            <div class="row contentBidForecast chart_circle mt-4 no-block rounded-sm shadow-gg my-4 ">
                <!-- <div class="col-12 col-lg-4">
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
                </div> -->
                <div class="col-12 col-lg-12">
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <div class="d-flex no-block">
                                <div class="align-self-center mr-3">
                                    <i class="fad fa-analytics text-info font30"></i>
                                </div>
                                <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                                    PHÂN TÍCH SEO
                                </div>

                            </div>
                            <div class="mt-3 text-muted mb-5">
                                Nâng cao thứ hạng Website trên các công cụ tìm kiếm
                            </div>
                        </div>
                        <!-- <div class="col-12 col-md-4 col-lg-4">
                            <div class="d-flex no-block bg-white border-top-success align-items-center rounded-sm shadow-gg is-loading mb-4" style="height:150px">
                                <div id="getBidForecast--Click" class="py-4 pl-4 text-success flex-grow-1">
                                    <span class="font-gg font-14 text-muted mr-auto">Số nhấp chuột</span>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class=" border-top-success d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5" style="height:150px">

                                <div id="KeywordSerpAnalysis--CPC1" class="d-flex no-block justify-content-center cpc display-7 font-number">
                                </div>
                                <div class="text-muted text-uppercase text-center mt-3">Độ khó của từ khóa</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class=" border-top-success d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5" style="height:150px;background-color:rgba(3,169,243,.1)!important">

                                <div id="KeywordSerpAnalysis--CPC2" class="d-flex no-block justify-content-center cpc display-7 font-number" style= "color:green">
                                </div>
                                <div class="text-muted text-uppercase text-center mt-3">Độ khó từ khóa theo Backlink</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class=" border-top-success d-flex no-block align-items-center justify-content-center flex-column bg-white rounded shadow h-100 py-4 py-md-5" style="height:150px">

                                <div id="KeywordSerpAnalysis--CPC3" class="d-flex no-block justify-content-center cpc display-7 font-number">
                                </div>
                                <div class="text-muted text-uppercase text-center mt-3">Độ khó từ khóa theo Nội dung</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <!-- bang phan tich tu khoa -->
            <div class="row justify-content-center">
                <div class="col-12 col-lg-12 my-1 abc">
                    <div class="font-17 font-weight-bold " style="">
                        <ul class="nav nav-tabs customTable border-0 mt-4 bg-white" id="customTable" role="tablist">
                            <li class="nav-item tab-custom">
                                <a class="nav-link active tass" id = "nav-tag-table" data-toggle="tab" data-task="table___tag" href="#table__tag" role="tab">
                                    <strong class=" d-lg-inline font-13 ml-2"> Bảng Từ khóa </strong>
                                </a>
                            </li>
                            <li class="nav-item tab-custom">
                                <a class="nav-link tass" id = "nav-competitor-table"  data-toggle="tab" data-task="table__competitor" href="#table__competitor" role="tab">
                                    <strong class=" d-lg-inline font-13 ml-2">Bảng Đối Thủ </strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content col-12 col-lg-12" id="nav-tabContent">
                    <!-- ------------------- table tag-->
                    <div class="col-12 col-lg-12 my-1">
                        <div id="table__tag" class="tab-pane" role="tabpanel">
                            <div class="d-flex bg-white flex-column">
                                <ul class="nav nav-tabs customTabColor border-0 mt-2" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" data-task="all_keyword" href="#all_keyword" role="tab">
                                            <strong class=" d-lg-inline font-13 ml-2">Tất cả <span class="text-primary font-weight-bold pl-1">-</span><span class="text-primary font-weight-bold pl-1 count_key_all" id="count__key_all"></span> </strong>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" data-task="main_keyword" href="#main_keyword" role="tab">
                                            <strong class=" d-lg-inline font-13  ml-2"> Từ khóa chính</strong><i class="far fa-question-circle custom-font-13 ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bộ từ khóa được xây dựng trên từ khóa chính nhập vào"></i><span class="text-primary font-weight-bold pl-1">-</span><span class="text-primary font-weight-bold pl-1 count__key_main" id="count__key_main"></span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" data-task="related_keyword" href="#related_keyword" role="tab">
                                            <strong class=" d-lg-inline font-13  ml-2"> Từ khóa liên quan</strong><i class="far fa-question-circle custom-font-13 ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bộ từ khóa liên quan với từ khóa chính nhập vào"></i><span class="text-primary font-weight-bold pl-1">-</span><span class="text-primary font-weight-bold pl-1 count_key_related" id="count__key_related"></span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" data-task="widen_keyword" href="#widen_keyword" role="tab">
                                            <strong class=" d-lg-inline font-13  ml-2"> Từ khóa mở rộng</strong> <i class="far fa-question-circle custom-font-13 ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Bộ từ khóa mở rộng so với từ khóa chính nhập vào"></i><span class="text-primary font-weight-bold pl-1">-</span><span class="text-primary font-weight-bold pl-1 count_key_widen" id="count__key_widen"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-12 tab-content">
                                    <div class="tab-pane active" id="all_keyword" role="tabpanel">
                                        <div class="row ">
                                            <div class="col-12">
                                                <div class="bg-white px-lg-1 py-1">
                                                    <div class="bg-white rounded-sm shadow-gg ">
                                                        <table id="getKeywordsSuggestionV2" class="table table-striped" style="width:100%;">

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="main_keyword" role="tabpanel">
                                        <div class="row ">
                                            <div class="col-12">
                                                <div class="bg-white px-lg-1 py-1">
                                                    <div class="bg-white rounded-sm shadow-gg ">
                                                        <table id="getKeywordsSuggestionV2_Main" class="table table-striped" style="width:100%;">

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="related_keyword" role="tabpanel">
                                        <div class="row ">
                                            <div class="col-12">
                                                <div class="bg-white px-lg-1 py-1">
                                                    <div class="bg-white rounded-sm shadow-gg ">
                                                        <table id="getKeywordsSuggestionV2_Related" class="table table-striped" style="width:100%;">

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="widen_keyword" role="tabpanel">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="bg-white px-lg-1 py-1">
                                                    <div class="bg-white rounded-sm shadow-gg">
                                                        <table id="getKeywordsSuggestionV2_Widen" class="table table-striped" style="width:100%;">

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="table__competitor" class="tab-pane" role="tabpanel">
                            <div class="row ">
                                <div class="col-12">
                                    <div class="bg-white px-lg-1 py-1">
                                        <div class="bg-white rounded-sm shadow-gg ">
                                            <table id="KeywordSerpAnalysis" class="table table-stripped table-bordered " style="width:100%;">
                                            <thead>
                                                <tr>
                                                    <th class="" style="font-size:12px!important"></th>
                                                    <th class="w-30" style="font-size:12px!important">Domain </th>
                                                    <th class="text-center w-15" style="font-size:12px!important">Content Perfomance </th>
                                                    <th class="" style="font-size:12px!important">No.OfWords</th>
                                                    <th class="" style="font-size:12px!important">Focus Keywords</th>                                                    
                                                    <th class="" style="font-size:12px!important">Domains To Url</th>
                                                    <th class="" style="font-size:12px!important">Domains To Site</th>
                                                    <th class="" style="font-size:12px!important">Date Published</th>
                                                </tr>
                                        </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- -------------------table -competitor  -->
                    <!-- <div class="col-12 col-lg-12 my-1">
                       
                    </div> -->
                    <!-- #################################### -->
                </div>
                <!-- ##tab content# -->
            </div>




            <!-- //load more------------ -->

            <!-- =======================================================================trang 2 ================================================================             -->
            <!-- -----------------------------chart-----gauge ----------------------------------------------------------------------             -->





            <!-- <div class="row chart_circle mt-4 no-block rounded-sm shadow-gg my-4 " id="">

                <div class="col-12 col-lg-12">
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <div class="d-flex no-block">
                                <div class="align-self-center mr-3">
                                    <i class="fad fa-money-check text-info font30"></i>
                                </div>
                                <div class="align-self-center text-capitalize font-20 font-gg font-weight-500">
                                    PHÂN TÍCH SEO
                                </div>

                            </div>
                            <div class="mt-3 text-muted mb-5">
                                Nâng cao thứ hạng Website trên các công cụ tìm kiếm
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-12">
                    <div class="row">
                        <div class="col-3 col-lg-3"></div>
                        <div class="col-6 col-md-6 col-lg-6" style="margin-top:-2.3rem">
                            <div class="row">

                                <div class="col-12 col-lg-12">
                                    <div id='getKeywordsSuggestionV1_2' style="width:500px;height:300px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 col-lg-3"></div>
                    </div>
                </div>
               
                <div class="col-12 col-lg-12">
                    <div class="row">
                        <div class="col-xs-12 col-md-4">
                            <div class="text-center" id="giadt_cao">

                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <div class="text-center" style="border-left: 1px solid #e9ecef!important;border-right: 1px solid #e9ecef!important;" id="giadt_thap">

                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <div class="text-center" id="solantk_tb">

                            </div>
                        </div>

                    </div>
                </div>





            </div> -->
            <!-- =================================================back----link -->


            <!-- ############################################### -->
            <!-- ###################################################################chart ----gauge---------------------------------- -->




            <!-- ----------------------------------top 10 chart---------------------------------------------------------- -->
            <div class="row charttop10trangSEO  d-none">
                <div class="col-12 col-lg-12">

                </div>

            </div>


            <!-- =================================4 cục dưới=========================================================================             -->


            <div class="row rowKeywordAnalysisOrganicGraph " id="organicgraph_table1">
                <div class="col-12">
                    <div class="d-flex no-block bg-white border-top-success flex-column rounded-sm shadow-gg my-4" style="min-height:400px">
                        <div class="row">
                            <div class="col-12">

                                <div class="w-100 p-0 p-md-4">
                                    <table id="KeywordAnalysisOrganicTable" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th class="" style="font-size:12px!important"></th>
                                                <th class="" style="font-size:12px!important">Domain </th>
                                                <th class="text-center" style="font-size:12px!important">Trafic Share </th>
                                                <th class="" style="font-size:12px!important">Change</th>
                                                <th class="" style="font-size:12px!important">Position</th>
                                                <th class="w-40" style="font-size:12px!important">Destination URL</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ====================================================trang 3 ====================================================================================== -->



            <!-- ------------------------------------------######10 trang qc SEO----------------------------------------- -->


            <div class="row rowKeywordRecommendationsPhraseMatch ">
                <div class="col-12">
                    <div class="d-flex no-block bg-white flex-column rounded-sm shadow-gg overflow-hidden my-4" style="height:auto;z-index:3;position:relative">
                        <table id="KeywordRecommendationsPhraseMatch" class="table table-borderless table-striped">
                            <thead>
                                <tr>
                                    <th>Từ khoá</th>
                                    <th>Lượt tìm kiếm</th>
                                    <th>CPC</th>
                                    <th>Website hàng đầu</th>
                                    <th>Lượt truy cập</th>
                                    <th>Loại truy cập</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <!-- ------------------------------xem them------------------- -->
            <div class="row">
                <div class="col-12 col-lg-12 mb-1 mt-1">
                    <div class="d-flex no-block justify-content-center">
                        <div class="align-self-center text-center text-capitalize font-14 font-gg font-weight-500 mb-3">
                            <a type="button" class="btn btn-primary show-more text-white" id="show-sem">Xem Phân tích SEM <i class="fad fa-arrow-circle-right font-13"></i> </a>
                        </div>

                    </div>
                </div>
            </div>

            <? //require_once(__DIR__ . "/keywords-footer.php"); 
            ?>
        </div>
        <div class="container BendmarksTool"><a href="#page-wrapper" class="backtop" id="backtop"><i class="far fa-angle-up display-7"></i></a></div>
    </div>
</div>
</div>
<script>
    var isLogin = 'true';
</script>
<script type="module" src="dist/js/pages/keywords/keywordseo.js?v=<?= $version ?>"></script>
<script src="assets/js/countrySelect.min.js"></script>
<script src="assets/js/jquery.sparkline.min.js"></script>
<!-- <link href="dist/css/pages/keywords/cssrieng.css?2.5" rel="stylesheet"> -->
<!-- <link href="dist/css/pages/keywords/stylefresh-body.css?2.5" rel="stylesheet"> -->
<script src="dist/dist/js/pages/tag-preview/init-function.js"></script>
<script>  
    document.getElementById('table__competitor').style.display ="none";
    document.getElementById("nav-tag-table").addEventListener("click",TagTb);
    function TagTb() {
        document.getElementById('table__competitor').style.display ="none";
        document.getElementById('table__tag').style.display ="block";
    }
    document.getElementById("nav-competitor-table").addEventListener("click",CompeTb);
    function CompeTb() {
        document.getElementById('table__tag').style.display ="none";
        document.getElementById('table__competitor').style.display ="block";
        
    }
    
</script>