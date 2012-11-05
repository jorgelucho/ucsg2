<?php 
header('content-type: application/json; charset=utf-8');

/*-- Captura de variables --*/
$cnames = strip_tags($_POST['cnames']);
$cemail = strip_tags($_POST['cemail']);
$cmobilephone = strip_tags($_POST['cmobilephone']);
$cmessage = strip_tags($_POST['cmessage']);

/*-- Variables extras --*/
$ip = $_SERVER['REMOTE_ADDR'];
$httpref = $_SERVER['HTTP_REFERER'];
$httpagent = $_SERVER['HTTP_USER_AGENT'];
$today = date("F j, Y, g:i a");

/*-- Cabeceras de email --*/
$recipient = $cemail;
$subject = 'Envio de contacto';
$header = "MIME-VERSION: 1.0\r\n";
$header .= "Content-type: text/html; charset=UTF-8\r\n";
$header .= "From: UCSG <irecarolina@hotmail.com>\r\n";
$header .= "Reply-To: ". $cnames . " <" . $cemail . ">\r\n"; 
$header .= "Bcc: vittosheva@hotmail.com, irecarolina@hotmail.com, misha_1984@hotmail.com \r\n";

$mailbody = "<b>Nombre y Apellidos:</b> $cnames<br />
<b>Email:</b> $cemail<br />
<b>Celular:</b> $cmobilephone<br />
<b>Mensaje:</b> $cmessage<br />

<br /><br />

<b>IP:</b> $ip<br />
<b>Navegador:</b> $httpagent<br />
<b>Referido:</b> $httpref<br />
<b>Enviado:</b> $today<br />";

$result = 'success';

if (mail($recipient, $subject, $mailbody, $header)) {
	echo json_encode($result);
}
?>