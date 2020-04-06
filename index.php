<?php 
require_once("require.php");
$action = @$_REQUEST['action'];
$view = @$_REQUEST['view'];

if (@$_GET['userToken']) $userToken =$_GET['userToken'];else $userToken =  $_COOKIE['userToken'];
if (empty($userToken))  $userToken = $demoToken;
if (empty($view)) $view = "website";
if (empty($action)) $action = "index";


switch ($action) {
    case "index": 
        $meta['title'] = "Công cụ phân tích website - phân tích đối thủ";
        $meta['description'] = "Phân tích và xác định giá trị của website đựa trên traffic, chi phí quảng cáo, nguồn khách hàng, backlink, giúp bạn hiểu rõ về website của mình và đối thủ cạnh tranh. ";
        $meta['image'] = "https://imgcdn.trazk.com/thumb/?domain=fff.com.vn";
    break;
    case "overview": 
        $data = file_get_contents("http://local.api.trazk.com/webdata/websiteapi.php?task=getHeaderFromCache&domain=".$_GET['domain']."&userToken=".$userToken);
        $data = json_decode($data,true);
        if ($data['data']['data']){
            $meta['image'] = "https://imgcdn.trazk.com/thumb/?domain=".$_GET['domain'];
            $highestTrafficCountryRanking = $data['data']['data']['highestTrafficCountryRanking'];

            $data = file_get_contents("http://local.api.trazk.com/webdata/websiteapi.php?task=estmatedWorth&domain=".$_GET['domain']."&userToken=".$userToken);
            $data = json_decode($data,true);
            $estmatedWorth = $data['data'];
        }
        $meta['title'] = "Website ".$_GET['domain']." được định giá ".number_format($estmatedWorth)."$ - Xếp hạng " . number_format($highestTrafficCountryRanking) . " tại Việt Nam";
    break;
    case "organic": $meta['title'] = "Kết quả phân tích organic traffic website ".$_GET['domain'];break;
    case "googleads": $meta['title'] = "Kết quả phân tích google ads - traffic website ".$_GET['domain'];break;
    case "displayads": $meta['title'] = "Kết quả phân tích display ads - traffic website ".$_GET['domain'];break;
    case "social": $meta['title'] = "Kết quả phân tích social - traffic website ".$_GET['domain'];break;
    case "backlink": $meta['title'] = "Kết quả phân tích backlink - traffic website ".$_GET['domain'];break;
    case "top-website-vietnam": 
        $meta['title'] = "Top website tại Việt Nam - Bảng xếp hạng 100k website Việt ";
        $meta['description'] = "Bảng xếp hạng hơn 100k website tại Việt Nam, phân loại theo giá trị (USD), traffic, cho phép quảng cáo GDN và nhiều thông tin khác";

    break;
   }


require_once('modules/header.php') ;
?>

<body class="skin-dark"> 
<div id="main-wrapper">
<?php require_once('modules/top.php');?>
<?php require_once("body/".$view."/".$action.".php");?> 
<?php require_once("modules/footer.php");?>