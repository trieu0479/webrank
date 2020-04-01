<?php
    $navLinks = array(
        "overview" => '<span><i class="fad fa-globe-europe mr-2"></i></span> <span class="d-none d-md-inline">Overview</span>',
        "organic" => '<span><i class="fad fa-newspaper mr-2"></i></span> <span class="d-none d-md-inline">Organic Search</span>',
        "googleads" => '<span><i class="fad fa-audio-description font-14 text-warning mr-2"></i></span> <span class="d-none d-md-inline">Google Ads</span>',
        "displayads" => '<span><i class="fad fa-browser mr-2"></i></span><span class="d-none d-md-inline">Display Ads</span> ',
        "social" => '<span><i class="fad fa-signal-stream font-14 text-success mr-2"></i></span> <span class="d-none d-md-inline">Social</span>',
        "backlink" => '<span><i class="fad fa-solar-system mr-2"></i></span> <span class="d-none d-md-inline">Backlink</span>'
    );
?>
<div class="bg-white">
    <ul class=" nav nav-pills">
        <?php foreach ($navLinks as $k => $v ){
            if ($k == $_GET['action']) $active = "active"; else $active = "";
            if ($k == "overview") $linkTarget = $rootDomain."/rank/".$_GET['domain'];
            else  $linkTarget = $rootURL."/index.php?view=website&action=".$k."&domain=".$_GET['domain'];
        ?>
            <li class="nav-item">
            <a class="nav-link <?=$active?>" href="<?=$linkTarget?>"><?=$v?></a>
            </li>
        <?}?>
       
    </ul>
</div>