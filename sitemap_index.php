<?php 
$t = '<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="//webrank.vn/main-sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
for($i=1;$i<11;$i++){
	$sitemap .= '<sitemap>
		<loc>https://fff.com.vn/rank-sitemap-'.$i.'.xml</loc>
		<lastmod>2020-04-03T03:38:14+00:00</lastmod>
	</sitemap>';
}	
echo $t.$sitemap.'</sitemapindex>';