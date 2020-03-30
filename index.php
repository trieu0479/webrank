<?php 
require_once("require.php");
$action = @$_REQUEST['action'];
$view = @$_REQUEST['view'];

if (@$_GET['userToken']) $userToken =$_GET['userToken'];else $userToken =  $_COOKIE['userToken'];
if (empty($userToken))  $userToken = $demoToken;
if (empty($view)) $view = "website";
if (empty($action)) $action = "index";


switch ($action) {
    case "index": $meta['title'] = "Công cụ phân tích website - phân tích đối thủ";break;
    case "overview": $meta['title'] = "";break;
    case "organic": $meta['title'] = "Kết quả phân tích organic traffic website ".$_GET['domain'];break;
    case "googleads": $meta['title'] = "Kết quả phân tích google ads - traffic website ".$_GET['domain'];break;
    case "displayads": $meta['title'] = "Kết quả phân tích display ads - traffic website ".$_GET['domain'];break;
    case "social": $meta['title'] = "Kết quả phân tích social - traffic website ".$_GET['domain'];break;
    case "backlink": $meta['title'] = "Kết quả phân tích backlink - traffic website ".$_GET['domain'];break;
   }


require_once('modules/header.php') ;
?>

<body class="skin-dark"> 
<div id="main-wrapper">
<?php require_once('modules/top.php');?>
<?php require_once("body/".$view."/".$action.".php");?> 
<?php require_once("modules/footer.php");?>