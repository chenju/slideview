<?php

require 'xml2json.php';
$cid = $_GET['catalogid'];
//$m=$_GET['m'];
$url = 'http://api.mulubao.com/mulubao_xml_html5.php?m=' . 'pages&' . 'catalogid=' . $cid;
$xmlNode = simplexml_load_file($url);
$arrayData = xmlToArray($xmlNode);
echo json_encode($arrayData);
