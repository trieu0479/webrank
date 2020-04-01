<?php 
require_once("require.php");
$action = @$_REQUEST['action'];
$view = @$_REQUEST['view'];

if (@$_GET['userToken']) $userToken =$_GET['userToken'];else $userToken =  $_COOKIE['userToken'];
if (empty($userToken))  $userToken = $demoToken;
if (empty($view)) $view = "website";
if (empty($action)) $action = "index";
switch ($view) {
    case "market": $meta['title'] = "Dữ liệu quảng cáo thị trường Việt Nam";break;
    case "traffic-website": 
        if ($action == "topsites"){
            $meta['title'] = "Danh sách Top 1,000 Website Tại Việt Nam";
            $meta['description'] = "Bảng xếp hạng các website tại Việt Nam, phân theo ngành nghề, lượng traffic và khả năng chạy quảng cáo Google Display Ads.";
        
        }else if ($action == "categories"){
            $meta['title'] = "Danh sách Website Phân Bổ Theo Ngành  Tại Việt Nam";
            $meta['description'] = "Bảng xếp hạng các website tại Việt Nam, phân theo ngành nghề, lượng traffic và khả năng chạy quảng cáo Google Display Ads.";

        }else if ($action == "result"){
            $meta['title'] = "Kết quả phân tích website: ".$_GET['domain'];
            $meta['img'] = "https://go.fff.com.vn/assets/images/share.png";
            $meta['description'] = "Kết quả phân tích traffic website ".$_GET['domain'];

        }else{
            $meta['title'] = "Phân tích traffic website - Hiểu hơn về website của bạn và đối thủ";
           
            $meta['description'] = "Phân tích traffic website, tìm hiểu cách website thực hiện marketing online: chạy quảng cáo, làm SEO, tối ưu di động ...";
        }

        break;
    case "pagespeed": $meta['title'] = "Kiểm tra tốc độ website - Tối ưu website với Google Speed";break;
    case "keyword-planner":
        if (empty($_GET['action']) ||  $_GET['action'] == "index"){
            $meta['title'] = "Công Cụ phân tích Từ Khóa Miễn Phí - Keyword Planner Free ";
            $meta['description'] = "Công cụ phân tích từ khóa miễn phí từ fff.com.vn - Giải pháp hoàn hảo thay thế Keywords Planner. Kết hợp AI và Bigdata cung cấp hàng triệu từ khóa cho SEOer và Chạy Ads mỗi ngày";
        }else{
            $meta['title'] = "Kết quả phân tích từ khóa: ".$_GET['keywords'];
            $meta['description'] = "Xem kết quả phân tích từ khóa: ".$_GET['keywords']." từ công cụ phân tích từ khóa fff.com.vn hơn Keywords Planner";
        }
        break;
    case "adwords-plan": $meta['title'] = "Lập kế hoạch quảng cáo Google Ads ";break;
    default: $meta['title'] = "Công cụ phân tích - Ngọn hải đăng trong biển rộng Digital Marketing";break;
}


require_once('modules/header.php') ;
?>

<body class="skin-dark"> 
<div id="main-wrapper">
<?php require_once('modules/top.php');?>
<?php require_once("body/".$view."/".$action.".php");?> 
<?php require_once("modules/footer.php");?>