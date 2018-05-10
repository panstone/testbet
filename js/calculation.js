
$( document ).ready(function(){
	$.resultwiz = function() {
/*М100	В7,5	П3 F50 W2 (на гравии)	3 161 руб.-->id:tr1,class="ctr1"*/
var tr1 = document.getElementById('tr1').value;
var tr1calc = 0;
	if(tr1!=0){
		var tr1calc = tr1*3161;
		$("div.ctr1").html("<label class='control-label' id='comtr1s' style='width: 370px;''>М100	В7,5	П3 F50 W2 (на гравии)	3 161 руб.</label> <input id='tr1' type='text' class='min' value='"+tr1+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr1calc+"  руб.</label><input type='hidden' name='comtr1' value='М100	В7,5	П3 F50 W2 (на гравии) в кол-ве "+tr1+" куб.'>");
	}


/*М150	В 10	П4 F75 W4 (на гравии)	3 262 руб. -->id:tr2,class="ctr2"*/
var tr2 = document.getElementById('tr2').value;
var tr2calc = 0;
	if(tr2!=0){
		var tr2calc = tr2*3262;
		$("div.ctr2").html("<label class='control-label' style='width: 370px;''>М150	В 10	П4 F75 W4 (на гравии)	3 262 руб.</label> <input id='tr2' type='text' class='min' value='"+tr2+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr2calc+"  руб.</label><input type='hidden' name='comtr2' value='М150	В 10	П4 F75 W4 (на гравии) в кол-ве "+tr2+" куб.'>");
	}


/*М150	В 12.5	П4 F75 W4 (на гравии)	3 363 руб.-->id:tr3,class="ctr3"*/
var tr3 = document.getElementById('tr3').value;
var tr3calc = 0;
	if(tr3!=0){
		var tr3calc = tr3*3363;
		$("div.ctr3").html("<label class='control-label' style='width: 370px;''>М150	В 12.5	П4 F75 W4 (на гравии)	3 363 руб.</label> <input id='tr3' type='text' class='min' value='"+tr3+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr3calc+"  руб.</label><input type='hidden' name='comtr3' value='М150	В 12.5	П4 F75 W4 (на гравии) в кол-ве "+tr3+" куб.'>");
	}


/*М200	В 15	П4 F100 W4 (на гравии)	3 469 руб. -->id:tr4,class="ctr4"*/
var tr4 = document.getElementById('tr4').value;
var tr4calc = 0;
	if(tr4!=0){
		var tr4calc = tr4*3469;
		$("div.ctr4").html("<label class='control-label' style='width: 370px;''>М200	В 15	П4 F100 W4 (на гравии)	3 469 руб.</label> <input id='tr4' type='text' class='min' value='"+tr4+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr4calc+"  руб.</label><input type='hidden' name='comtr4' value='М200	В 15	П4 F100 W4 (на гравии) в кол-ве "+tr4+" куб.'>");
	}


/*М250	В 20	П4 F150 W4 (на гравии)	3 568 руб. -->id:tr5,class="ctr5"*/
var tr5 = document.getElementById('tr5').value;
var tr5calc = 0;
	if(tr5!=0){
		var tr5calc = tr5*3568;
		$("div.ctr5").html("<label class='control-label' style='width: 370px;''>М250	В 20	П4 F150 W4 (на гравии)	3 568 руб.</label> <input id='tr5' type='text' class='min' value='"+tr5+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr5calc+"  руб.</label><input type='hidden' name='comtr5' value='М250	В 20	П4 F150 W4 (на гравии) в кол-ве "+tr5+" куб.'>");
	}


/*М300	В 22.5	П4 F150 W6 (на гравии)	3 669 руб. -->id:tr6,class="ctr6"*/
var tr6 = document.getElementById('tr6').value;
var tr6calc = 0;
	if(tr6!=0){
		var tr6calc = tr6*3669;
		$("div.ctr6").html("<label class='control-label' style='width: 370px;''>М300	В 22.5	П4 F150 W6 (на гравии)	3 669 руб.</label> <input id='tr6' type='text' class='min' value='"+tr6+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr6calc+"  руб.</label><input type='hidden' name='comtr6' value='М300	В 22.5	П4 F150 W6 (на гравии) в кол-ве "+tr6+" куб.'>");
	}


/*М350	В 25	П4 F200 W8 (на гравии)	3 768 руб.-->id:tr7,class="ctr7"*/
var tr7 = document.getElementById('tr7').value;
var tr7calc = 0;
	if(tr7!=0){
		var tr7calc = tr7*3768;
		$("div.ctr7").html("<label class='control-label' style='width: 370px;''>М350	В 25	П4 F200 W8 (на гравии)	3 768 руб.</label> <input id='tr7' type='text' class='min' value='"+tr7+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr7calc+"  руб.</label><input type='hidden' name='comtr7' value='М350	В 25	П4 F200 W8 (на гравии) в кол-ве "+tr7+" куб.'>");
	}


/*М400	В 30	П4 F200 W8 (на гравии)	3 967 руб. -->id:tr8,class="ctr8"*/
var tr8 = document.getElementById('tr8').value;
var tr8calc = 0;
	if(tr8!=0){
		var tr8calc = tr8*3967;
		$("div.ctr8").html("<label class='control-label' style='width: 370px;''>М400	В 30	П4 F200 W8 (на гравии)	3 967 руб.</label> <input id='tr8' type='text' class='min' value='"+tr8+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr8calc+"  руб.</label><input type='hidden' name='comtr8' value='М400	В 30	П4 F200 W8 (на гравии) в кол-ве "+tr8+" куб.'>");
	}


/*М100	В 7.5	П3 F50 W4 (на граните)	3 565 руб.*/
var tr9 = document.getElementById('tr9').value;
var tr9calc = 0;
	if(tr9!=0){
		var tr9calc = tr9*3565;
		$("div.ctr9").html("<label class='control-label' style='width: 370px;''>М100	В 7.5	П3 F50 W4 (на граните)	3 565 руб.</label> <input id='tr9' type='text' class='min' value='"+tr9+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr9calc+"  руб.</label><input type='hidden' name='comtr9' value='М100	В 7.5	П3 F50 W4 (на граните) в кол-ве "+tr9+" куб.'>");
	}


/*М150	В 10	П4 F75 W4 (на граните)	3 664 руб.*/
var tr10 = document.getElementById('tr10').value;
var tr10calc = 0;
	if(tr10!=0){
		var tr10calc = tr10*3664;
		$("div.ctr10").html("<label class='control-label' style='width: 370px;''>М150	В 10	П4 F75 W4 (на граните)	3 664 руб.</label> <input id='tr10' type='text' class='min' value='"+tr10+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr10calc+"  руб.</label><input type='hidden' name='comtr10' value='М150	В 10	П4 F75 W4 (на граните) в кол-ве "+tr10+" куб.'>");
	}


/*М150	В 12.5	П4 F75 W4 (на граните)	3 766 руб.*/
var tr11 = document.getElementById('tr11').value;
var tr11calc = 0;
	if(tr11!=0){
		var tr11calc = tr11*3766;
		$("div.ctr11").html("<label class='control-label' style='width: 370px;''>М150	В 12.5	П4 F75 W4 (на граните)	3 766 руб.</label> <input id='tr11' type='text' class='min' value='"+tr11+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr11calc+"  руб.</label><input type='hidden' name='comtr11' value='М150	В 12.5	П4 F75 W4 (на граните)  в кол-ве"+tr11+" куб.'>");
	}


/*М200	В 15	П4 F100 W4 (на граните)	3 867 руб.*/
var tr12 = document.getElementById('tr12').value;
var tr12calc = 0;
	if(tr12!=0){
		var tr12calc = tr12*3867;
		$("div.ctr12").html("<label class='control-label' style='width: 370px;''>М200	В 15	П4 F100 W4 (на граните)	3 867 руб.</label> <input id='tr12' type='text' class='min' value='"+tr12+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr12calc+"  руб.</label><input type='hidden' name='comtr12' value='М200	В 15	П4 F100 W4 (на граните) в кол-ве "+tr12+" куб.'>");
	}


/*М250	В 20	П4 F150 W4 (на граните)	3 961 руб.*/
var tr13 = document.getElementById('tr13').value;
var tr13calc = 0;
	if(tr13!=0){
		var tr13calc = tr13*3961;
		$("div.ctr13").html("<label class='control-label' style='width: 370px;''>М250	В 20	П4 F150 W4 (на граните)	3 961 руб.</label> <input id='tr13' type='text' class='min' value='"+tr13+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr13calc+"  руб.</label><input type='hidden' name='comtr13' value='М250	В 20	П4 F150 W4 (на граните) в кол-ве "+tr13+" куб.'>");
	}


/*М300	В 22.5	П4 F150 W6 (на граните)	4 062 руб.*/
var tr14 = document.getElementById('tr14').value;
var tr14calc = 0;
	if(tr14!=0){
		var tr14calc = tr14*4062;
		$("div.ctr14").html("<label class='control-label' style='width: 370px;''>М300	В 22.5	П4 F150 W6 (на граните)	4 062 руб.</label> <input id='tr14' type='text' class='min' value='"+tr14+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr14calc+"  руб.</label><input type='hidden' name='comtr14' value='М300	В 22.5	П4 F150 W6 (на граните) в кол-ве "+tr14+" куб.'>");
	}


/*М350	В 25	П4 F200 W8 (на граните)	4 163 руб.*/
var tr15 = document.getElementById('tr15').value;
var tr15calc = 0;
	if(tr15!=0){
		var tr15calc = tr15*4163;
		$("div.ctr15").html("<label class='control-label' style='width: 370px;''>М350	В 25	П4 F200 W8 (на граните)	4 163 руб.</label> <input id='tr15' type='text' class='min' value='"+tr15+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr15calc+"  руб.</label><input type='hidden' name='comtr15' value='М350	В 25	П4 F200 W8 (на граните) в кол-ве  "+tr15+" куб.'>");
	}


/*М400	В 30	П4 F200 W8 (на граните)	4 264 руб.*/
var tr16 = document.getElementById('tr16').value;
var tr16calc = 0;
	if(tr16!=0){
		var tr16calc = tr16*4264;
		$("div.ctr16").html("<label class='control-label' style='width: 370px;''>М400	В 30	П4 F200 W8 (на граните)	4 264 руб.</label> <input id='tr16' type='text' class='min' value='"+tr16+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr16calc+"  руб.</label><input type='hidden' name='comtr16' value='М400	В 30	П4 F200 W8 (на граните) в кол-ве  "+tr16+" куб.'>");
	}

/*М400	В 30	П5 F300 W12 (на граните)	4 365 руб.*/
var tr17 = document.getElementById('tr17').value;
var tr17calc = 0;
	if(tr17!=0){
		var tr1calc = tr17*4365;
		$("div.ctr17").html("<label class='control-label' style='width: 370px;''>М400	В 30	П5 F300 W12 (на граните)	4 365 руб.</label> <input id='tr17' type='text' class='min' value='"+tr17+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr17calc+"  руб.</label><input type='hidden' name='comtr17' value='М400	В 30	П5 F300 W12 (на граните) в кол-ве  "+tr17+" куб.'>");
	}


/*М450	В 35	П4 F200 W12 (на граните)	4 615 руб.*/
var tr18 = document.getElementById('tr18').value;
var tr18calc = 0;
	if(tr18!=0){
		var tr18calc = tr18*4615;
		$("div.ctr18").html("<label class='control-label' style='width: 370px;''>М450	В 35	П4 F200 W12 (на граните)	4 615 руб.</label> <input id='tr18' type='text' class='min' value='"+tr18+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr18calc+"  руб.</label><input type='hidden' name='comtr18' value='М450	В 35	П4 F200 W12 (на граните) в кол-ве  "+tr18+" куб.'>");
	}


/*М500	В 40	П5 F300 W12 (на граните)	4 911 руб.*/
var tr19 = document.getElementById('tr19').value;
var tr19calc = 0;
	if(tr19!=0){
		var tr19calc = tr19*4911;
		$("div.ctr19").html("<label class='control-label' style='width: 370px;''>М500	В 40	П5 F300 W12 (на граните)	4 911 руб.</label> <input id='tr19' type='text' class='min' value='"+tr19+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr19calc+"  руб.</label><input type='hidden' name='comtr19' value='М500	В 40	П5 F300 W12 (на граните) в кол-ве  "+tr19+" куб.'>");
	}


/*М550	В 40	П5 F300 W12 (на граните)	4 872 руб.*/
var tr20 = document.getElementById('tr20').value;
var tr20calc = 0;
	if(tr20!=0){
		var tr20calc = tr20*4872;
		$("div.ctr20").html("<label class='control-label' style='width: 370px;''>М550	В 40	П5 F300 W12 (на граните)	4 872 руб.</label> <input id='tr20' type='text' class='min' value='"+tr20+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr20calc+"  руб.</label><input type='hidden' name='comtr20' value='М550	В 40	П5 F300 W12 (на граните) в кол-ве  "+tr20+" куб.'>");
	}


/*М600	В 45	П5 F300 W20 (на граните)	5 614 руб.*/
var tr21 = document.getElementById('tr21').value;
var tr21calc = 0;
	if(tr21!=0){
		var tr21calc = tr21*5614;
		$("div.ctr21").html("<label class='control-label' style='width: 370px;''>М600	В 45	П5 F300 W20 (на граните)	5 614 руб.</label><input id='tr21' type='text' class='min' value='"+tr21+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr21calc+"  руб.</label><input type='hidden' name='comtr21' value='М600	В 45	П5 F300 W20 (на граните) в кол-ве  "+tr21+" куб.'>");
	}


/*М700	В 50	П5 F300 W20 (на граните)	6 113 руб.*/
var tr22 = document.getElementById('tr22').value;
var tr22calc = 0;
	if(tr22!=0){
		var tr22calc = tr22*6113;
		$("div.ctr22").html("<label class='control-label' style='width: 370px;''>М700	В 50	П5 F300 W20 (на граните)	6 113 руб.</label><input id='tr22' type='text' class='min' value='"+tr22+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr22calc+"  руб.</label><input type='hidden' name='comtr22' value='М700	В 50	П5 F300 W20 (на граните) в кол-ве  "+tr22+" куб.'>");
	}


/*М800	В 60	П5 F300 W20 (на граните)	6 619 руб.*/
var tr23 = document.getElementById('tr23').value;
var tr23calc = 0;
	if(tr23!=0){
		var tr23calc = tr23*6619;
		$("div.ctr23").html("<label class='control-label' style='width: 370px;''>М800	В 60	П5 F300 W20 (на граните)	6 619 руб.</label> <input id='tr23' type='text' class='min' value='"+tr23+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr23calc+"  руб.</label><input type='hidden' name='comtr23' value='М800	В 60	П5 F300 W20 (на граните) в кол-ве  "+tr23+" куб.'>");
	}


/*М1000	В 80	П5 F300 W20 (на граните)	7 612 руб.*/
var tr24 = document.getElementById('tr24').value;
var tr24calc = 0;
	if(tr24!=0){
		var tr24calc = tr24*7612;
		$("div.ctr24").html("<label class='control-label' style='width: 370px;''>М1000	В 80	П5 F300 W20 (на граните)	7 612 руб.</label> <input id='tr24' type='text' class='min' value='"+tr24+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr24calc+"  руб.</label><input type='hidden' name='comtr24' value='М1000	В 80	П5 F300 W20 (на граните) в кол-ве  "+tr24+" куб.'>");
	}

/*M100	Раствор цементно-песчаный Пк 3/4	2 869 руб.*/
var tr25 = document.getElementById('tr25').value;
var tr25calc = 0;
	if(tr25!=0){
		var tr25calc = tr25*2869;
		$("div.ctr25").html("<label class='control-label' style='width: 370px;''>M100	Раствор цементно-песчаный Пк 3/4	2 869 руб.</label> <input id='tr25' type='text' class='min' value='"+tr25+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr25calc+"  руб.</label><input type='hidden' name='comtr25' value='M100	Раствор цементно-песчаный Пк 3/4 в кол-ве  "+tr25+" куб.'>");
	}


/*M150	Раствор цементно-песчаный Пк 3/4	2 967 руб.*/
var tr26 = document.getElementById('tr26').value;
var tr26calc = 0;
	if(tr26!=0){
		var tr26calc = tr26*2967;
		$("div.ctr26").html("<label class='control-label' style='width: 370px;''>M150	Раствор цементно-песчаный Пк 3/4	2 967 руб.</label> <input id='tr26' type='text' class='min' value='"+tr26+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr26calc+"  руб.</label><input type='hidden' name='comtr26' value='M150	Раствор цементно-песчаный Пк 3/4  в кол-ве "+tr26+" куб.'>");
	}


/*M200	Раствор цементно-песчаный Пк 3/4	3 061 руб.*/
var tr27 = document.getElementById('tr27').value;
var tr27calc = 0;
	if(tr27!=0){
		var tr27calc = tr27*3061;
		$("div.ctr27").html("<label class='control-label' style='width: 370px;''>M200	Раствор цементно-песчаный Пк 3/4	3 061 руб.</label> <input id='tr27' type='text' class='min' value='"+tr27+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr27calc+"  руб.</label><input type='hidden' name='comtr27' value='M200	Раствор цементно-песчаный Пк 3/4  в кол-ве "+tr27+" куб.'>");
	}


/*Молоко	Цементное молоко	3 972 руб.*/
var tr28 = document.getElementById('tr28').value;
var tr28calc = 0;
	if(tr28!=0){
		var tr28calc = tr28*3972;
		$("div.ctr28").html("<label class='control-label' style='width: 370px;''>Молоко	Цементное молоко	3 972 руб.</label> <input id='tr28' type='text' class='min' value='"+tr28+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr28calc+"  руб.</label><input type='hidden' name='comtr28' value='Молоко	Цементное молоко  в кол-ве "+tr28+" куб.'>");
	}
	/*M250	M250 Раствор цементно-песчаный Пк 3/4 (ПескоБетон)	3 225 руб.*/
var tr29 = document.getElementById('tr29').value;
var tr29calc = 0;
	if(tr29!=0){
		var tr29calc = tr29*3225;
		$("div.ctr29").html("<label class='control-label' style='width: 370px;''>M250 Раствор цементно-песчаный Пк 3/4 (ПескоБетон)	3 225 руб.</label> <input id='tr29' type='text' class='min' value='"+tr29+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr29calc+"  руб.</label><input type='hidden' name='comtr29' value='M250 Раствор цементно-песчаный Пк 3/4 (ПескоБетон)  в кол-ве "+tr29+" куб.'>");
	}


/*M300	M300 Раствор цементно-песчаный Пк 3/4 (ПескоБетон)	3 412 руб.*/
var tr30 = document.getElementById('tr30').value;
var tr30calc = 0;
	if(tr30!=0){
		var tr30calc = tr30*3412;
		$("div.ctr30").html("<label class='control-label' style='width: 370px;''>M300 Раствор цементно-песчаный Пк 3/4 (ПескоБетон)	3 412 руб.</label> <input id='tr30' type='text' class='min' value='"+tr30+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr30calc+"  руб.</label><input type='hidden' name='comtr30' value='M300 Раствор цементно-песчаный Пк 3/4 (ПескоБетон)  в кол-ве "+tr30+" куб.'>");
	}
	/*М100	B 7,5 Ж4 F50 W2 (на гравии)	3 168 руб.*/
var tr31 = document.getElementById('tr31').value;
var tr31calc = 0;
	if(tr31!=0){
		var tr31calc = tr31*3168;
		$("div.ctr31").html("<label class='control-label' style='width: 370px;''>М100	B 7,5 Ж4 F50 W2 (на гравии)	3 168 руб.</label> <input id='tr31' type='text' class='min' value='"+tr31+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr31calc+"  руб.</label><input type='hidden' name='comtr31' value='М100	B 7,5 Ж4 F50 W2 (на гравии)  в кол-ве "+tr31+" куб.'>");
	}
	/*М150	В 12,5 Ж4 F75 W4 (на гравии)	3 366 руб.*/
var tr32 = document.getElementById('tr32').value;
var tr32calc = 0;
	if(tr32!=0){
		var tr32calc = tr32*3366;
		$("div.ctr32").html("<label class='control-label' style='width: 370px;''>М150	В 12,5 Ж4 F75 W4 (на гравии)	3 366 руб.</label> <input id='tr32' type='text' class='min' value='"+tr32+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr32calc+"  руб.</label><input type='hidden' name='comtr32' value='М150	В 12,5 Ж4 F75 W4 (на гравии)  в кол-ве "+tr32+" куб.'>");
	}


/*М200	В 15 Ж4 F100 W4 (на гравии)	3 461 руб.*/
var tr33 = document.getElementById('tr33').value;
var tr33calc = 0;
	if(tr33!=0){
		var tr33calc = tr33*3461;
		$("div.ctr33").html("<label class='control-label' style='width: 370px;''>М200	В 15 Ж4 F100 W4 (на гравии)	3 461 руб.</label> <input id='tr33' type='text' class='min' value='"+tr33+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr33calc+"  руб.</label><input type='hidden' name='comtr33' value='М200	В 15 Ж4 F100 W4 (на гравии)  в кол-ве "+tr33+" куб.'>");
	}

/*M350	B 25 П4 F 300 W (II) 10	4 266 руб.*/
var tr34 = document.getElementById('tr34').value;
var tr34calc = 0;
	if(tr34!=0){
		var tr34calc = tr34*4266;
		$("div.ctr29").html("<label class='control-label' style='width: 370px;''>M350	B 25 П4 F 300 W (II) 10	4 266 руб.</label> <input id='tr34' type='text' class='min' value='"+tr34+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr34calc+"  руб.</label><input type='hidden' name='comtr34' value='M350	B 25 П4 F 300 W (II) 10  в кол-ве "+tr34+" куб.'>");
	}


/*M400	B 30 П4 F 300 W (II) 10	4 414 руб.*/
var tr35 = document.getElementById('tr35').value;
var tr35calc = 0;
	if(tr35!=0){
		var tr35calc = tr35*4414;
		$("div.ctr35").html("<label class='control-label' style='width: 370px;''>M400	B 30 П4 F 300 W (II) 10	4 414 руб.</label> <input id='tr35' type='text' class='min' value='"+tr35+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr35calc+"  руб.</label><input type='hidden' name='comtr35' value='M400	B 30 П4 F 300 W (II) 10  в кол-ве "+tr35+" куб.'>");
	}
	/*M450	B 35 П4 F 300 W (II) 12	4 617 руб.*/
var tr36 = document.getElementById('tr31').value;
var tr36calc = 0;
	if(tr36!=0){
		var tr36calc = tr36*4617;
		$("div.ctr36").html("<label class='control-label' style='width: 370px;''>M450	B 35 П4 F 300 W (II) 12	4 617 руб.</label> <input id='tr36' type='text' class='min' value='"+tr36+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr36calc+"  руб.</label><input type='hidden' name='comtr36' value='M450	B 35 П4 F 300 W (II) 12  в кол-ве "+tr36+" куб.'>");
	}
	/*M550	B 40 П4 F 300 W (II) 14	4 818 руб.*/
var tr37 = document.getElementById('tr37').value;
var tr37calc = 0;
	if(tr37!=0){
		var tr37calc = tr37*4818;
		$("div.ctr37").html("<label class='control-label' style='width: 370px;''>M550	B 40 П4 F 300 W (II) 14	4 818 руб.</label> <input id='tr37' type='text' class='min' value='"+tr37+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr37calc+"  руб.</label><input type='hidden' name='comtr37' value='M550	B 40 П4 F 300 W (II) 14 в кол-ве "+tr37+" куб.'>");
	}


/*M600	B 45 П4 F 300 W (II) 14	5 139 руб.*/
var tr38 = document.getElementById('tr38').value;
var tr38calc = 0;
	if(tr38!=0){
		var tr38calc = tr38*5139;
		$("div.ctr38").html("<label class='control-label' style='width: 370px;''>M600	B 45 П4 F 300 W (II) 14	5 139 руб.</label> <input id='tr38' type='text' class='min' value='"+tr38+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr38calc+"  руб.</label><input type='hidden' name='comtr38' value='M600	B 45 П4 F 300 W (II) 14 в кол-ве "+tr38+" куб.'>");
	}
	/*М100	В 7,5 D1600	3 065 руб.*/
var tr39 = document.getElementById('tr39').value;
var tr39calc = 0;
	if(tr39!=0){
		var tr39calc = tr39*3265;
		$("div.ctr39").html("<label class='control-label' style='width: 370px;''>М100	В 7,5 D1600	3 265 руб.</label> <input id='tr39' type='text' class='min' value='"+tr39+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr39calc+"  руб.</label><input type='hidden' name='comtr39' value='М100	В 7,5 D1600 в кол-ве "+tr39+" куб.'>");
	}
	/*М150	В12,5 D1600	3 266 руб.*/
var tr40 = document.getElementById('tr40').value;
var tr40calc = 0;
	if(tr40!=0){
		var tr40calc = tr40*3466;
		$("div.ctr40").html("<label class='control-label' style='width: 370px;''>М150	В12,5 D1600	3 466 руб.</label> <input id='tr40' type='text' class='min' value='"+tr40+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr40calc+"  руб.</label><input type='hidden' name='comtr40' value='М150	В12,5 D1600 в кол-ве "+tr40+" куб.'>");
	}
	/*М200	В 15 D1600	3 363 руб.*/
var tr41 = document.getElementById('tr41').value;
var tr41calc = 0;
	if(tr41!=0){
		var tr41calc = tr41*3563;
		$("div.ctr41").html("<label class='control-label' style='width: 370px;''>М200	В 15 D1600	3 563 руб.</label> <input id='tr41' type='text' class='min' value='"+tr41+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr41calc+"  руб.</label><input type='hidden' name='comtr41' value='М200	В 15 D1600 в кол-ве "+tr41+" куб.'>");
	}


/*М250	В 20 D1600	3 568 руб.*/
var tr42 = document.getElementById('tr42').value;
var tr42calc = 0;
	if(tr42!=0){
		var tr42calc = tr42*3768;
		$("div.ctr42").html("<label class='control-label' style='width: 370px;''>М250	В 20 D1600	3 768 руб.</label> <input id='tr42' type='text' class='min' value='"+tr42+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr42calc+"  руб.</label><input type='hidden' name='comtr42' value='М250	В 20 D1600 в кол-ве "+tr42+" куб.'>");
	}
	/*M100	Сухая смесь цементно-песчаная 3/4	2 379 руб.*/
var tr43 = document.getElementById('tr43').value;
var tr43calc = 0;
	if(tr43!=0){
		var tr43calc = tr43*2379;
		$("div.ctr43").html("<label class='control-label' style='width: 370px;''>M100	Сухая смесь цементно-песчаная 3/4	2 379 руб.</label> <input id='tr43' type='text' class='min' value='"+tr43+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr43calc+"  руб.</label><input type='hidden' name='comtr43' value='M100	Сухая смесь цементно-песчаная 3/4 в кол-ве "+tr43+" куб.'>");
	}
	/*M150	Сухая смесь цементно-песчаная 3/4	2 478 руб.*/
var tr44 = document.getElementById('tr44').value;
var tr44calc = 0;
	if(tr44!=0){
		var tr44calc = tr44*2478;
		$("div.ctr44").html("<label class='control-label' style='width: 370px;''>M150	Сухая смесь цементно-песчаная 3/4	2 478 руб.</label> <input id='tr44' type='text' class='min' value='"+tr44+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr44calc+"  руб.</label><input type='hidden' name='comtr44' value='M150	Сухая смесь цементно-песчаная 3/4 в кол-ве "+tr44+" куб.'>");
	}


/*M200	Сухая смесь цементно-песчаная 3/4	2 571 руб.*/
var tr45 = document.getElementById('tr45').value;
var tr45calc = 0;
	if(tr45!=0){
		var tr45calc = tr45*2571;
		$("div.ctr45").html("<label class='control-label' style='width: 370px;''>M200	Сухая смесь цементно-песчаная 3/4	2 571 руб.</label> <input id='tr45' type='text' class='min' value='"+tr45+"' size='5' disabled/><label class='control-label''>&nbsp;&nbsp;&nbsp;&nbsp;"+tr45calc+"  руб.</label><input type='hidden' name='comtr45' value='M200	Сухая смесь цементно-песчаная 3/4 в кол-ве "+tr45+" куб.'>");
	}
// var itog = tr1calc+tr2calc+tr3calc+tr4calc+tr5calc+tr6calc+tr7calc+tr8calc+tr9calc+tr10calc+tr11calc+tr12calc+tr13calc+tr14calc+tr15calc+tr16calc+tr17calc+tr18calc+tr19calc+tr20calc+tr21calc+tr22calc+tr23calc+tr24calc+tr25calc+tr26calc+tr27calc+tr28calc+tr29calc+tr30calc+tr31calc+tr32calc+tr33calc+tr34calc+tr35calc+tr36calc+tr37calc+tr38calc+tr39calc+tr40calc+tr41calc+tr42calc+tr43calc+tr44calc+tr45calc;
// 	document.getElementById('rezult').innerHTML = itog+" руб.";



}

});