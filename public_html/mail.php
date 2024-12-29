<?php
$user =     'goorobets78@worldpedia.cx.ua';
$pass =     'ECodP3EVCo';
$host =     'ssl://MX1.CITYHOST.COM.UA';
$port =     465;
$to =       'goorobets78@gmail.com';
$template="Subject: SMTP лист з сайту ".$_SERVER['SERVER_NAME']."\r\n"."To: $to\r\n"."From: $user\r\n"."Content-Type: text/plain; charset=utf-8\r\n"."Content-Transfer-Encoding: 7bit\r\n"."Лист від SMTP користувача $user\r\n.";
if(smtp_mail($to,$template,$user,$pass,$host,$port))
{echo"<h1 style='color:green'>Листа успішно відправлено на ".$to." о ".date("H:i:s")." з сайту ".$_SERVER["SERVER_NAME"];}
else{echo"<h1 style='color:red'>Помилка! Листа не відправлено";}
function smtp_mail($to,$template,$user,$pass,$host,$port)
{if($h=fsockopen($host,$port)){$data=array(0,"EHLO $host",'AUTH LOGIN',base64_encode($user),base64_encode($pass),"MAIL FROM: <$user>","RCPT TO: <$to>",'DATA',$template);
foreach($data as $c){$c&&fwrite($h,"$c\r\n");
while(substr(fgets($h,256),3,1)!=' '){}}fwrite($h,"QUIT\r\n");return fclose($h);}}

