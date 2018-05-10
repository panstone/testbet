
var req = Create();

function ge(id)
{
    return document.getElementById(id);
}

function Create()
{  
    if(navigator.appName == "Microsoft Internet Explorer")
    {  
        req = new ActiveXObject("Microsoft.XMLHTTP");  
    }
    else
    {  
        req = new XMLHttpRequest();  
    }  
return req;  
}  

function Request(query)
{
    req.open('post', 'php/telegram.php' , true );
    req.onreadystatechange = Refresh;
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    req.send(query);  
}

function Refresh()
{
    var a = req.readyState;  
  
    if( a == 4 )
    {   
        var b = req.responseText;
        document.getElementById('ajax').innerHTML = b;
    }
    else
    {  
        document.getElementById('ajax').innerHTML = '<br><center>Отправка.........</center>';
		
    }
}
/////Собераем все элементы формы которые будем отправлять
function Pusk()
{  
    var query;
	 var txt11 = encodeURIComponent(ge('names').value);

    var txt22 = encodeURIComponent(ge('tels').value);
    var txt33 = encodeURIComponent(ge('citys').value);

    var txt44 = encodeURIComponent(ge('streets').value);
    var txt55 = encodeURIComponent(ge('numhomes').value);
    var txt66 = encodeURIComponent(ge('corpss').value);
    var txt77 = encodeURIComponent(ge('comits').value);
   /* var txt88=document.querySelector('#comtr1s').value;*/
    


    query = '&name='+txt11+'&tel='+txt22+'&city='+txt33+'&street='+txt44+'&numhome='+txt55+'&corps='+txt66+'&comit='+txt77;

    Request(query);
}

