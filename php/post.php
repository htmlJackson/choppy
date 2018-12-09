<?php
require 'Mail.class.php';
require 'varDefine.php';

$to = "mail@choppy.pro";

$theme  = "Заявка с сайта Choppy";

$objMail = new Mail($to, $theme, $name, $phone, $location);
$objMail->sendMail();
?>
