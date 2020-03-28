<div class="page-wrapper">
    <div class="app-loader d-flex justify-content-center align-items-center">
        <div class="logo"><img width="200px" src="./assets/images/1555919893386-3F_logo.png" alt=""></div>
    </div>
    <div class="container BendmarksTool" id="export">
        <div class="row">
            <div class="col mt-5">
                <div class="header-custom-page bg-white rounded d-flex py-2 px-2">
                    <div class="left-information w-100" style="color: #2c2952;">
                        <div class="top d-flex align-items-center w-100 h-100" style="justify-content: space-between;">
                            <div class="custom_text d-flex" id="reportInfo">
                                <div class="slect-custom d-flex align-items-center">
                                    <div class="logo p-2 d-flex justify-content-center align-items-center" style="text-align: center;">
                                        <div class="avatar-preview"> 
                                            <div id="imagePreviewContactForm" data-url="../../assets/images/logo_admin.png" style="background-image: url('../../assets/images/logo_admin.png');"></div> 
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
                                    <button id="saveLink"
                                        class="icon-pdf bg-success-2 mr-2 d-flex align-items-center text-success success-hover" style="transition: .5s all ease-in-out;">
                                        <i class="fad fa-cloud-upload sync-fa-fi mr-2"></i>
                                        <p>Lưu</p>
                                    </button>
                                </div>
                                <div class="dropdown-wrapper">
                                    <button class="btn btn-circle waves-effect wave-dark" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="far fa-ellipsis-h" style="color: #2c2952;"></i>
                                    </button>
                                    <div class="dropdown-menu" x-placement="bottom-start"
                                        style="position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item" id="export-pdf" style="cursor:pointer"><i
                                                class="fad fa-file-pdf sync-fa-fi mr-2"></i><span>Tải file PDF</span></a>
                                        <!-- <a class="dropdown-item remove-all" href="javascriptvoild:0;"><i
                                                class="fad fa-trash-alt sync-fa-fi mr-2"></i><span>Remove All</span></a> -->
                                        <a class="dropdown-item" id="shareLink" href="javascriptvoild:0;"><i
                                                class="fad fa-share-square mr-2"></i><span>Share Link</span></a>
                                        <a class="dropdown-item" id="addMetric" href="javascripvoild:0"><i class="fad fa-plus-square mr-2"></i><span>Add Metric</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="bottom h-50 d-flex align-items-center w-100 p-4" style="background: #4e4e94b3;">
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="loading rounded is-loading"></div> -->
        <div class="page-content pt-5 pb-5" style="margin: 0 -10px !important;">
            <div class="grid-stack">
            </div>
        </div>
    </div>
</div>
<script type="module" src="dist/dist/js/pages/report/show_compare_tag.js?<?= $version ?>"></script>
<script src="dist/js/pages/report/click-compare.js"></script>
<!-- <link href="dist/css/pages/keywords/cssrieng.css?2.2" rel="stylesheet"> -->
<script type="module" src="dist/js/pages/report/compare-action.js"></script>
<script type="module" src="dist/dist/js/pages/report/send_mailer.js?<?= $version ?>"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
<script>
$(document).ready(()=>{
    $('[data-toggle="tooltip"]').tooltip();
})

$(window).on("load",(event) => {
      
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
<link rel="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">