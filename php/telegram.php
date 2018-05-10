<?php
// $fio = $_POST['fio'];
 $name = $_POST['name'];

$tel = isset($_POST['tel'])?$_POST['tel']:NULL;
$city = isset($_POST['city'])?$_POST['city']:NULL;
$street = isset($_POST['street'])?$_POST['street']:NULL;
$numhome = isset($_POST['numhome'])?$_POST['numhome']:NULL;
$corps = isset($_POST['corps'])?$_POST['corps']:NULL;
$comit = isset($_POST['comit'])?$_POST['comit']:NULL;

$comtr1 = isset($_POST['comtr1'])?$_POST['comtr1']:NULL;
$comtr2 = isset($_POST['comtr2'])?$_POST['comtr2']:NULL;
$comtr3 = isset($_POST['comtr3'])?$_POST['comtr3']:NULL;
$comtr4 = isset($_POST['comtr4'])?$_POST['comtr4']:NULL;
$comtr5 = isset($_POST['comtr5'])?$_POST['comtr5']:NULL;
$comtr6 = isset($_POST['comtr6'])?$_POST['comtr6']:NULL;
$comtr7 = isset($_POST['comtr7'])?$_POST['comtr7']:NULL;
$comtr8 = isset($_POST['comtr8'])?$_POST['comtr8']:NULL;
$comtr9 = isset($_POST['comtr9'])?$_POST['comtr9']:NULL;
$comtr10 = isset($_POST['comtr10'])?$_POST['comtr10']:NULL;
$comtr11 = isset($_POST['comtr11'])?$_POST['comtr11']:NULL;
$comtr12 = isset($_POST['comtr12'])?$_POST['comtr12']:NULL;
$comtr13 = isset($_POST['comtr13'])?$_POST['comtr13']:NULL;
$comtr14 = isset($_POST['comtr14'])?$_POST['comtr14']:NULL;
$comtr15 = isset($_POST['comtr15'])?$_POST['comtr15']:NULL;
$comtr16 = isset($_POST['comtr16'])?$_POST['comtr16']:NULL;
$comtr17 = isset($_POST['comtr17'])?$_POST['comtr17']:NULL;
$comtr18 = isset($_POST['comtr18'])?$_POST['comtr18']:NULL;
$comtr19 = isset($_POST['comtr19'])?$_POST['comtr19']:NULL;
$comtr20 = isset($_POST['comtr20'])?$_POST['comtr20']:NULL;
$comtr21 = isset($_POST['comtr21'])?$_POST['comtr21']:NULL;
$comtr22 = isset($_POST['comtr22'])?$_POST['comtr22']:NULL;
$comtr23 = isset($_POST['comtr23'])?$_POST['comtr23']:NULL;
$comtr24 = isset($_POST['comtr24'])?$_POST['comtr24']:NULL;
$comtr25 = isset($_POST['comtr25'])?$_POST['comtr25']:NULL;
$comtr26 = isset($_POST['comtr26'])?$_POST['comtr26']:NULL;
$comtr27 = isset($_POST['comtr27'])?$_POST['comtr27']:NULL;
$comtr28 = isset($_POST['comtr28'])?$_POST['comtr28']:NULL;
$comtr29 = isset($_POST['comtr29'])?$_POST['comtr29']:NULL;
$comtr30 = isset($_POST['comtr30'])?$_POST['comtr30']:NULL;
$comtr31 = isset($_POST['comtr31'])?$_POST['comtr31']:NULL;
$comtr32 = isset($_POST['comtr32'])?$_POST['comtr32']:NULL;
$comtr33 = isset($_POST['comtr33'])?$_POST['comtr33']:NULL;
$comtr34 = isset($_POST['comtr34'])?$_POST['comtr34']:NULL;
$comtr35 = isset($_POST['comtr35'])?$_POST['comtr35']:NULL;
$comtr36 = isset($_POST['comtr36'])?$_POST['comtr36']:NULL;
$comtr37 = isset($_POST['comtr37'])?$_POST['comtr37']:NULL;
$comtr38 = isset($_POST['comtr38'])?$_POST['comtr38']:NULL;
$comtr39 = isset($_POST['comtr39'])?$_POST['comtr39']:NULL;
$comtr40 = isset($_POST['comtr40'])?$_POST['comtr40']:NULL;
$comtr41 = isset($_POST['comtr41'])?$_POST['comtr41']:NULL;
$comtr42 = isset($_POST['comtr42'])?$_POST['comtr42']:NULL;
// $comtr43 = isset($_POST['comtr1'])?$_POST['comtr1']:NULL;
// $comtr44 = isset($_POST['comtr1'])?$_POST['comtr1']:NULL;
// $comtr45 = isset($_POST['comtr1'])?$_POST['comtr1']:NULL;


$token = "595033508:AAGVCAbEGPDO7qVdZ7OtZb21e527Few_LDQ";
$chat_id = "-288836349";

#тест$token = "487120577:AAGgzbHA-3Avt--7TzUrJc90kp3YWd0BBuY";
#$chat_id = "-289205189";
#подакро$token = "435265781:AAGz2RFXvsm0BD245fg4fhcv2Yswbw31pGM";
#$chat_id = "-281830997";
$content = "<div class='parent' style='width: 100%;height: 100%;position: absolute;top: 0;left: 0;overflow: auto;'><div class='block' style='width: 250px;height: 250px;position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;'><h5 style='color:black;''>Запрос отправлен</h5><p style='color:black;''><strong>Ваш запрос отправлен.</strong><br>Наш менеджер свяжется с вами в ближайшее время!</p></div></div>";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $tel,
  $themeFieldset => $comit,
  $pointOneFieldset => $city,
  $pointTwoFieldset => $street,
  $point1Fieldset => $numhome,
  $point2Fieldset => $corps,
  $ppcomtr1 => $comtr1
);
foreach($arr as $key => $value) {
  
  $txt = " <b>📞Запрос на обратный звонок с сайта</b> "."%0A"." <b>Имя пославшего:  </b> ".$name."%0A"."<b> Телефон: </b> ".$tel."%0A"."<b> Город: </b> ".$city."%0A"."<b> Улица: </b> ".$street."%0A"."<b> Дом: </b> ".$numhome."%0A"."<b> Корпус: </b> ".$corps."%0A"."<b>Комментарий: </b> ".$comit."%0A"."<b>Заказ: </b> ".$comtr1."%0A".$comtr2."%0A".$comtr3."%0A".$comtr4."%0A".$comtr5."%0A".$comtr6."%0A".$comtr7."%0A".$comtr8."%0A".$comtr9."%0A".$comtr10."%0A".$comtr11."%0A".$comtr12."%0A".$comtr13."%0A".$comtr14."%0A".$comtr15."%0A".$comtr16."%0A".$comtr17."%0A".$comtr18."%0A".$comtr19."%0A".$comtr20."%0A".$comtr21."%0A".$comtr22."%0A".$comtr23."%0A".$comtr24."%0A".$comtr25."%0A".$comtr26."%0A".$comtr27."%0A".$comtr28."%0A".$comtr29."%0A".$comtr30."%0A".$comtr31."%0A".$comtr32."%0A".$comtr33."%0A".$comtr34."%0A".$comtr35."%0A".$comtr36."%0A".$comtr37."%0A".$comtr38."%0A".$comtr39."%0A".$comtr40."%0A".$comtr41."%0A".$comtr42."%0A"; 
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  
  echo <<<HTML
    {$content}
    
  <link rel="stylesheet" href="custom-font/fonts.css" />
        
        <link rel="stylesheet" href="css/bootstrap.min.css" />
       
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/> 
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/> 
        <link href="css/icon-font.css" rel="stylesheet" type="text/css"/> 
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700|Poppins:400,500,700" rel="stylesheet"> 
        <link href="css/menumaker.css" rel="stylesheet" type="text/css"/> 
        <link href="css/owl.carousel.css" rel="stylesheet" type="text/css"/> 
        <link href="css/magnific-popup.css" rel="stylesheet" type="text/css"/> 
        <link href="css/datepicker.css" rel="stylesheet" type="text/css"/>
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
} 

// header ("Location: /");

?>