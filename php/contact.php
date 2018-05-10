<?php
 
//проверяем значения полученые при проверке скриптом формы
if (trim($_POST['valTrFal'])!='valTrFal_true') {
echo 'fasle';
}
else {
 
$name = trim($_POST['txtname']);
 
$txtNameValue = trim($_POST['name_class_value']);
 
// $txtemail = trim($_POST['txtemail']);
 
$phone = trim($_POST['txtphone']);
 
$comment = trim($_POST['txtmessage']);
 
$txtorder= trim($_POST['txtorder']);
 

$token = "595033508:AAGVCAbEGPDO7qVdZ7OtZb21e527Few_LDQ";
$chat_id = "-288836349";
#$token = "487120577:AAGgzbHA-3Avt--7TzUrJc90kp3YWd0BBuY";
#$chat_id = "-289205189";

$content = " <div class='popup2'><div class='close_modal'>x</div><div class='window'><div class='insText'><h5>запрос отправлен</h5><p><strong>Ваш запрос отправлен.</strong>Наш менеджер свяжется с вами в ближайшее время!</p></div></div></div>";

$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $commentFieldset => $comment
);
foreach($arr as $key => $value) {
  
  $txt = " <b>📞Запрос на обратный звонок с сайта</b> "." <b>Имя пославшего:  </b> ".$name."%0A"."<b> Телефон: </b> ".$phone."%0A"."<b> Комментарий: </b> ".$comment."%0A"; 
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
// // от кого
// $fromMail = 'info@monolit-garant.ru';
// $fromName = 'Ваш менеджер';
 
// // Сюда введите Ваш email
// $emailTo = 'zakaz@monolit-garant.ru';
 
// $subject = 'Заявка с сайта';
// $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
// $headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
// $headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
 
// // тело письма
// $body = "Заявка с сайта monolit-garant.ru\n\nИмя: $txtname\nТелефон: $txtphone\nЧто написали: $txtmessage";
// $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
 
 
echo 'ok';
}
?>