<?php

 
$name = trim($_POST['txtname']);
 

 
// $txtemail = trim($_POST['txtemail']);
 
$phone = trim($_POST['txtphone']);
 
$comment = trim($_POST['txtmessage']);
 
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

if ($sendToTelegram) {
  
  echo <<<HTML

    {$content}
    
 <link rel="stylesheet" href="custom-font/fonts.css" />
       
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/> <!-- bootstrap css -->
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/> <!-- fontawesome css -->
        <link href="css/icon-font.css" rel="stylesheet" type="text/css"/> <!-- icon-font css -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700|Poppins:400,500,700" rel="stylesheet"> <!-- google font -->
        <link href="css/menumaker.css" rel="stylesheet" type="text/css"/> <!-- menu css -->
        <link href="css/owl.carousel.css" rel="stylesheet" type="text/css"/> <!-- owl carousel css -->
        <link href="css/magnific-popup.css" rel="stylesheet" type="text/css"/> <!-- magnify popup css -->
        <link href="css/datepicker.css" rel="stylesheet" type="text/css"/> <!-- datepicker css -->
        <link rel="stylesheet" href="css/bootsnav.css">
        
<link rel="stylesheet" href="http://bootstraptema.ru/snippets/slider/2016/cbpFWSlider/cbpFWSlider.css" />

        <link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css?v=2.1.5" media="screen" /> 
     
        <link rel="stylesheet" href="css/custom.css" />
        <link rel="stylesheet" href="css/form.css" />
    
    
HTML;
    echo "<script type='text/javascript'>
      function redirect() {
      location='http://monolit-garant.ru';
      }
      setTimeout('redirect()', 2000);
    </script>";
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}

?>