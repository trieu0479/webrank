<?
$keyword = $_GET['keywords'];
?>
<div class="page-wrapper ml-0">

	<div class="container pt-5">
		<div class=" keywordsBody mx-auto">
			<a href="?view=keyword-planner&action=index&keywords=&language=<?=$_GET['language']?>&country=<?=$_GET['country']?>&network=<?=$_GET['network']?>" class="position-relative text-white btn-clean btn">
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
									<div class="text-center extensionLogo">
                                         <a target="blank" href="https://chrome.google.com/webstore/detail/ph%C3%A2n-t%C3%ADch-t%E1%BB%AB-kh%C3%B3a-keyword/gamgpnolibdghflagmlghmpncjgonchn"><img src="./dist/images/chrome-extension.png" class="mr-2"></a>
                                        <a target="blank" href="https://addons.mozilla.org/en-US/firefox/addon/keyword-planner/"><img src="./dist/images/firefox-extension.png" class="mr-2"></a>
                                        <a target="blank" href="https://microsoftedge.microsoft.com/addons/detail/gcamcdaeilhnapdifpjhglnoddfponnf"><img src="./dist/images/edge-extension.png" ></a>
                                    </div>
					</div>
					<?require_once(__DIR__."/selectbox.php"); ?>
		

					
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
			<div class="row mt-3 justify-content-center">
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
<script src="dist/js/pages/keyword-planner/result.js?v=<?=$version?>"></script>