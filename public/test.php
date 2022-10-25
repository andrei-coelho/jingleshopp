<?php 

$pessoa = "Andrei";
$url = "";
$link = "#";
$email = "andreifcoelho@gmail.com";

$html = file_get_contents('../src/email_html_template.html');
$html = str_replace('{{pessoa}}', $pessoa, $html);
$html = str_replace('{{url}}', $url, $html);
$html = str_replace('{{link}}', $link, $html);
$html = str_replace('{{email}}', $email, $html);

echo $html;