<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?=$meta['description']?>"> 
    <meta name="author" content="fff.com.vn">
    <!-- Favicon icon -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="assets/images/icon/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/images/icon/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/images/icon/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/images/icon/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="assets/images/icon/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="assets/images/icon/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="assets/images/icon/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="assets/images/icon/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="assets/images/icon/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="assets/images/icon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="assets/images/icon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="assets/images/icon/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="assets/images/icon/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="assets/images/icon/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="assets/images/icon/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="assets/images/icon/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="assets/images/icon/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="assets/images/icon/mstile-310x310.png" />


    <title><?=$meta['title']?></title>
    <!-- Custom CSS -->
    <link href="dist/css/font.min.css" rel="stylesheet">
    <link href="dist/css/bootstrap/style.min.css" rel="stylesheet">
    <link href="dist/css/bootstrap/bootstrap-extension.min.css" rel="stylesheet">
    <link href="dist/css/bootstrap/bootstrap-select.min.css" rel="stylesheet">
    <script src="dist/js/jquery-3.4.1.min.js"></script>
 
    <link rel="stylesheet" href="dist/css/owl.carousel.min.css">
<link rel="stylesheet" href="dist/css/owl.theme.default.min.css">

    <link href="dist/css/extensions/sweetalert2.min.css" rel="stylesheet">
    <link href="dist/css/extensions/daterangepicker.css" rel="stylesheet">



    <link rel="stylesheet" href="dist/css/extensions/jquery.toast.css"> 
    <link rel="stylesheet" href="dist/css/keyplanner.css"> 
    <link rel="stylesheet" href="assets/css/animate.css"> 
    
    <link href="dist/css/pages/website/icon_contry/flag-css.min.css" rel="stylesheet"> 
    <link href="dist/css/pages/website/icon_contry/flag-css.css" rel="stylesheet"> 

    <link href="dist/css/extensions/multi-select.css" rel="stylesheet"> 
    <link href="dist/css/extensions/anno.css" rel="stylesheet" type="text/css" /> 
    <link href="dist/css/extensions/toastr.min.css" rel="stylesheet" type="text/css" />
    
    <link href="dist/css/new-reset.css?v=1.0" rel="stylesheet">
    <link href="dist/css/fff/identity.css" rel="stylesheet">
    <script src="assets/js/jquery.min.js"></script>

    <script src="dist/js/default/controlGlobalValule.js"></script>
    <link rel="stylesheet" href="dist/dist/js/pages/gridstack.min.css"/>
    <script type="text/javascript" src='dist/dist/js/pages/gridstack.js'></script>
    <script type="text/javascript" src='dist/dist/js/pages/gridstack.jQueryUI.js'></script>
    <script type="text/javascript" src='dist/dist/js/pages/jquery-ui.js'></script>
    <script src="dist/js/jquery-3.4.1.min.js"></script>
    <link href="dist/css/swiper.min.css" rel="stylesheet">
    <link href="dist/css/swiper.css" rel="stylesheet">

<!-- -------------------------csss rieng cho gg ads va display ads----------------------------- -->


    <?php
    if (is_file(__DIR__.'/'.$view.'/header.php')) require_once(__DIR__.'/'.$view.'/header.php');?>

<link href="dist/css/fff/reset.css?v=1.0" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<script src='assets/js/socket.io.js' type="text/javascript"></script>  

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MFS4FQC');</script>
<!-- End Google Tag Manager -->
<?php require_once("adwordsLogin.php");?>
</head>