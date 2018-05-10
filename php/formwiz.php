<!-- <?php
 
//проверяем значения полученые при проверке скриптом формы

$content = "<div class='popup'><div class='close_modal'>x</div><form class='fofm' action='' method='post'><h5>Спасибо за заявку!</h5></form></div>";
 
$name = isset($_POST['name'])?$_POST['name']:NULL;

$tel = isset($_POST['tel'])?$_POST['tel']:NULL;
$city = isset($_POST['city'])?$_POST['city']:NULL;
$street = isset($_POST['street'])?$_POST['street']:NULL;
$numhome = isset($_POST['numhome'])?$_POST['numhome']:NULL;
$corps = isset($_POST['corps'])?$_POST['corps']:NULL;
$comit = isset($_POST['comit'])?$_POST['comit']:NULL;
$comtr1 = isset($_POST['comtr1'])?$_POST['comtr1']:NULL;
// $txtemail = trim($_POST['txtemail']);
 
// $txtphone = trim($_POST['txtphone']);
 
// $txtmessage = trim($_POST['txtmessage']);
 
// $txtorder= trim($_POST['txtorder']);
// от кого
$fromMail = 'info@monolit-garant.ru';
$fromName = 'Ваш менеджер';
 
// Сюда введите Ваш email
$emailTo = 'panaskin.dim@yandex.ru';
 
$subject = 'Заявка с сайта';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
 
// тело письма
$body = "Заявка с сайта monolit-garant.ru\n\nИмя: $name\nТелефон: $tel\nКомментарий: $comit\nГород: $city\nУлица: $street\nНомер дома: $numhome\nКорпус: $corps\nЗаказ: $comtr1";
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );

 

?> -->