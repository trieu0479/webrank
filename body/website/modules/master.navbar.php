<?php
    $navLinks = array(
        "overview" => '<i class="fad fa-globe-europe mr-2"></i>Overview',
        "organic" => '<i class="fad fa-newspaper mr-2"></i>Organic Search',
        "googleads" => '<i class="fad fa-audio-description font-14 text-warning mr-2"></i>Google Ads',
        "displayads" => '<i class="fad fa-browser mr-2"></i> Display Ads',
        "social" => '<i class="fad fa-signal-stream font-14 text-success mr-2"></i>Social',
        "backlink" => '<i class="fad fa-solar-system mr-2"></i>Backlink'
    );
?>
<div class="bg-white">
    <ul class=" nav nav-pills">
        <?php foreach ($navLinks as $k => $v ){
            if ($k == $_GET['action']) $active = "active"; else $active = "";
        ?>
            <li class="nav-item">
            <a class="nav-link <?=$active?>" href="./index.php?view=website&action=<?=$k?>&domain=<?=$_GET['domain']?>"><?=$v?></a>
            </li>
        <?}?>
       
    </ul>
</div>