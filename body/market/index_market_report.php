<!-- <script src="./dist/dist/js/pages/bendmarks/bendmarks.js"></script> -->
<div class="page-wrapper">
    <div class="app-loader d-flex justify-content-center align-items-center">
        <div class="logo"><img width="250px" src="./assets/images/3F_logoweb.png" alt=""></div>
    </div>
    <div class="container BendmarksTool" id="export">
        <!-- <div class="row justify-content-center pt-5">
            <div class="col-12 col-lg-10 text-center text-white">            
                <div class="display-7 font-weight-500 text-capitalize font-gg">Dữ liệu Thị Trường Digital Việt Nam
                </div>
                <div class="font-16 mt-4 font-gg">
                    Cung cấp tất cả những thông tin bạn cần để nghiên cứu thị trường Digital Marketing tại Việt Nam
                </div>
            </div>
        </div> -->

        <div class="row">
            <div class="col mt-5">
                <div class="header-custom-page bg-white rounded d-flex py-2 px-2">
                    <div class="left-information w-100" style="color: #2c2952;">
                        <div class="top d-flex align-items-center w-100 h-100" style="justify-content: space-between;">
                            <div class="custom_text d-flex" id="reportInfo">
                                <div class="slect-custom d-flex align-items-center">
                                    <div class="logo p-2 d-flex justify-content-center align-items-center" style="text-align: center;">
                                        <div class="avatar-preview">
                                            <div id="imagePreviewContactForm" data-url="http://localhost/assets/images/logo_admin.png" style="background-image: url('../../assets/images/logo_admin.png');"></div>
                                        </div>
                                    </div>
                                    <div id="custom_slect">
                                        <h3 class="text-uppercase font-weight-bold font-14 coppy_titles">traffic-website dashboard demo</h3>
                                        <div class="date">
                                            <span class="text-muted coppy_date">08/11/2019</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascripvoild:0" id="custom_title"><i class="fal fa-pencil p-2"></i></a>
                            </div>
                            <!-- ------------------------------------------ -->
                       <div class="information-wrapper d-flex align-items-center justify-content-center ml-auto mr-2">
                                <div class="subcriber d-flex">
                                    <button type="button" data-placement="bottom" data-toggle="tooltip" title="Nhận thông báo qua email của bạn cho Dashboard này" id="subcriber_mail" class="bg-primary-2 d-flex align-items-center text-primary primary-hover" style="transition: .5s all ease-in-out;">
                                        <i class="fad fa-envelope sync-fa-fi mr-2"></i>
                                        <p class="p_get_notify">Nhận thông báo</p>
                                    </button>
                                 
                                </div>
                               
                            </div>
                       <!-- ---------------------------------------------------- -->
                            <div class="information-wrapper d-flex align-items-center justify-content-center">
                                <div class="information d-flex">
                                    <button id="saveLink" class="icon-pdf bg-success-2 mr-2 d-flex align-items-center text-success success-hover" style="transition: .5s all ease-in-out;">
                                        <i class="fad fa-cloud-upload sync-fa-fi mr-2"></i>
                                        <p>Lưu</p>
                                    </button>
                                </div>
                                <div class="dropdown-wrapper">
                                    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                                    </button>
                                    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item" id="export-pdf" style="cursor:pointer"><i class="fad fa-file-pdf sync-fa-fi mr-2"></i><span>Tải file PDF</span></a>
                                        <!-- <span class="dropdown-item remove-all" href="javascriptvoild:0;"><i class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove All</span></a> -->
                                        <a class="dropdown-item" id="shareLink" href="javascriptvoild:0;"><i class="fad fa-share-square mr-2"></i><span>Share Link</span></a>
                                        <!-- <a class="dropdown-item" href="?view=dashboardweb&action=addmetric"><i
                                                class="fad fa-plus-square mr-2"></i><span>Add Metric</span></a> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="page-content pt-5 pb-5">
            <div class="grid-stack">
                 

            </div>
        </div>
    </div>


    <!-- ########################################################################################################################################### -->


</div>

<link rel="stylesheet" href="dist/css/pages/report/report.css?<?=$version?>">  
<!-- <link rel="stylesheet" href="dist/css/pages/keywords/traffic-website.css"> -->


<!-- <script src="./dist/dist/js/pages/bendmarks/call_bendmarks.js"></script> -->
<script src="assets/js/wordcloud2.js"></script>
<script src="assets/js/ResizeSensor.js"></script>
<script>
    var isLogin = '<?= $isLogin ?>';
</script>

<script type="module" src="dist/dist/js/pages/report/dist_reportmarket.js?<?= $version ?>"></script>
<script src="dist/dist/js/pages/bendmarks/scrolltop.js"></script>
<!-- <link href="dist/css/pages/keywords/cssrieng.css?2.2" rel="stylesheet"> -->
<script type="module" src="dist/dist/js/pages/report/send_mailer.js?<?= $version ?>"></script>
<link href="dist/css/pages/keywords/cssrieng.css?2.2" rel="stylesheet"> 
<script src="dist/js/pages/report/clickmarket_report.js"></script>
<script>
    $(window).on("load", (event) => {
        $("#export-pdf").click(function() {
            let body = document.body;
            let html = document.documentElement
            let height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight)
            let element = document.querySelector('#export')
            let heightCM = height / 35.35;
            html2pdf(element, {
                margin: 1,
                filename: 'export.pdf',
                html2canvas: {
                    dpi: 192,
                    letterRendering: true,
                    scale: 2,
                },
                jsPDF: {
                    orientation: 'portrait',
                    unit: 'cm',
                    format: [heightCM, 40]
                }
            })
        })

    });
</script>