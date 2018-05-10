function checkParams() {
    var name = $('#names').val();
    
    var phone = $('#tels').val();
     
    if(name.length != 0  && phone.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}
$(document).ready(function () {
  var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn'),
        allPrevBtn = $('.prevBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
         // $target.find('input:eq(0)').focus();
      }
  });
  
  allPrevBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

          prevStepWizard.removeAttr('disabled').trigger('click');
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');
});

/*поле с прибавлением и уменьшением значения*/
$(document).ready(function() {
  
           $('.plus').click(function () {
              
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            }); 

           $('.minus').click(function () {
            
                var $input = $(this).parent().find('input');
               // $input.val(parseInt($input.val()) - 1);
                var count = parseInt($input.val()) - 1;
                 count = count < 0 ? 0 : count;
                 $input.val(count);
                $input.change();
                return false;
            });
            
        });
/*подсчет и вывод в закрепленную хню*/
$(document).ready(function() {

var tr1plus = document.getElementById('tr1plus')
var tr1min = document.getElementById('tr1min')
var tr2plus = document.getElementById('tr2plus')
var tr2min = document.getElementById('tr2min')
var tr3plus = document.getElementById('tr3plus')
var tr3min = document.getElementById('tr3min')
var tr4plus = document.getElementById('tr4plus')
var tr4min = document.getElementById('tr4min')
var tr5plus = document.getElementById('tr5plus')
var tr5min = document.getElementById('tr5min')
var tr6plus = document.getElementById('tr6plus')
var tr6min = document.getElementById('tr6min')
var tr7plus = document.getElementById('tr7plus')
var tr7min = document.getElementById('tr7min')
var tr8plus = document.getElementById('tr8plus')
var tr8min = document.getElementById('tr8min')
var tr9plus = document.getElementById('tr9plus')
var tr9min = document.getElementById('tr9min')
var tr10plus = document.getElementById('tr10plus')
var tr10min = document.getElementById('tr10min')
var tr11plus = document.getElementById('tr11plus')
var tr11min = document.getElementById('tr11min')
var tr12plus = document.getElementById('tr12plus')
var tr12min = document.getElementById('tr12min')
var tr13plus = document.getElementById('tr13plus')
var tr13min = document.getElementById('tr13min')
var tr14plus = document.getElementById('tr14plus')
var tr14min = document.getElementById('tr14min')
var tr15plus = document.getElementById('tr15plus')
var tr15min = document.getElementById('tr15min')
var tr16plus = document.getElementById('tr16plus')
var tr16min = document.getElementById('tr16min')
var tr17plus = document.getElementById('tr17plus')
var tr17min = document.getElementById('tr17min')
var tr18plus = document.getElementById('tr18plus')
var tr18min = document.getElementById('tr18min')
var tr19plus = document.getElementById('tr19plus')
var tr19min = document.getElementById('tr19min')
var tr20plus = document.getElementById('tr20plus')
var tr20min = document.getElementById('tr20min')
var tr21plus = document.getElementById('tr21plus')
var tr21min = document.getElementById('tr21min')
var tr22plus = document.getElementById('tr22plus')
var tr22min = document.getElementById('tr22min')
var tr23plus = document.getElementById('tr23plus')
var tr23min = document.getElementById('tr23min')
var tr24plus = document.getElementById('tr24plus')
var tr24min = document.getElementById('tr24min')
var tr25plus = document.getElementById('tr25plus')
var tr25min = document.getElementById('tr25min')
var tr26plus = document.getElementById('tr26plus')
var tr26min = document.getElementById('tr26min')
var tr27plus = document.getElementById('tr27plus')
var tr27min = document.getElementById('tr27min')
var tr28plus = document.getElementById('tr28plus')
var tr28min = document.getElementById('tr28min')
var tr29plus = document.getElementById('tr29plus')
var tr29min = document.getElementById('tr29min')
var tr30plus = document.getElementById('tr30plus')
var tr30min = document.getElementById('tr30min')
var tr31plus = document.getElementById('tr31plus')
var tr31min = document.getElementById('tr31min')
var tr32plus = document.getElementById('tr32plus')
var tr32min = document.getElementById('tr32min')
var tr33plus = document.getElementById('tr33plus')
var tr33min = document.getElementById('tr33min')
var tr34plus = document.getElementById('tr34plus')
var tr34min = document.getElementById('tr34min')
var tr35plus = document.getElementById('tr35plus')
var tr35min = document.getElementById('tr35min')
var tr36plus = document.getElementById('tr36plus')
var tr36min = document.getElementById('tr36min')
var tr37plus = document.getElementById('tr37plus')
var tr37min = document.getElementById('tr37min')
var tr38plus = document.getElementById('tr38plus')
var tr38min = document.getElementById('tr38min')
var tr39plus = document.getElementById('tr39plus')
var tr39min = document.getElementById('tr39min')
var tr40plus = document.getElementById('tr40plus')
var tr40min = document.getElementById('tr40min')
var tr41plus = document.getElementById('tr41plus')
var tr41min = document.getElementById('tr41min')
var tr42plus = document.getElementById('tr42plus')
var tr42min = document.getElementById('tr42min')
var tr43plus = document.getElementById('tr43plus')
var tr43min = document.getElementById('tr43min')
var tr44plus = document.getElementById('tr44plus')
var tr44min = document.getElementById('tr44min')
var tr45plus = document.getElementById('tr45plus')
var tr45min = document.getElementById('tr45min')

var v=document.getElementById('vale');
var ver=document.getElementById('vales');
tr1plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3161;
            $('.tyty').addClass('active');
            }
$.tr1min = function() {
  var tr1 = document.getElementById('tr1').value;
        if(tr1!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3161;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }
}
tr2plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3262;
            $('.tyty').addClass('active');
            }
$.tr2min = function() {
  var tr2 = document.getElementById('tr2').value;
        if(tr2!=0){
         var v=document.getElementById('vale');

         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3262;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }
}
tr3plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3363;
            $('.tyty').addClass('active');
            }
$.tr3min = function() {
  var tr3 = document.getElementById('tr3').value;
        if(tr3!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3363;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }
}
tr4plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3469;
           $('.tyty').addClass('active');
            }
$.tr4min = function() {
  var tr4 = document.getElementById('tr4').value;
        if(tr4!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3469;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }
     }
tr5plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3568;
            $('.tyty').addClass('active');
            }
$.tr5min = function() {
  var tr5 = document.getElementById('tr5').value;
        if(tr5!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3568;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }
     }
tr6plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3669;
            $('.tyty').addClass('active');
            }
$.tr6min = function() {
  var tr6 = document.getElementById('tr6').value;
        if(tr6!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3669;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr7plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3768;
           $('.tyty').addClass('active');
            }
$.tr7min = function() {
  var tr7 = document.getElementById('tr7').value;
        if(tr7!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3768;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr8plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3967;
            $('.tyty').addClass('active');
            }
$.tr8min = function() {
  var tr8 = document.getElementById('tr8').value;
        if(tr8!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3967;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr9plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3565;
            $('.tyty').addClass('active');
            }
$.tr9min = function() {
  var tr9 = document.getElementById('tr9').value;
        if(tr9!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3565;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr10plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3664;
            $('.tyty').addClass('active');
            }
$.tr10min = function() {
  var tr10 = document.getElementById('tr10').value;
        if(tr10!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3664;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr11plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3766;
            $('.tyty').addClass('active');
            }
$.tr11min = function() {
  var tr11 = document.getElementById('tr11').value;
        if(tr11!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3766;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr12plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3867;
            $('.tyty').addClass('active');
            }
$.tr12min = function() {
  var tr12 = document.getElementById('tr12').value;
        if(tr12!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3867;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr13plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3961;
            $('.tyty').addClass('active');
            }
$.tr13min = function() {
  var tr13 = document.getElementById('tr13').value;
        if(tr13!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3961;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr14plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4062;
            $('.tyty').addClass('active');
            }
$.tr14min = function() {
  var tr14 = document.getElementById('tr14').value;
        if(tr14!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4062;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr15plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4163 ;
            $('.tyty').addClass('active');
            }
$.tr15min = function() {
  var tr15 = document.getElementById('tr15').value;
        if(tr15!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4163;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr16plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4264 ;
           $('.tyty').addClass('active');
            }
$.tr16min = function() {
  var tr16 = document.getElementById('tr16').value;
        if(tr16!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4264;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr17plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4365 ;
            $('.tyty').addClass('active');
            }
$.tr17min = function() {
  var tr17 = document.getElementById('tr17').value;
        if(tr17!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4365;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr18plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4615 ;
           $('.tyty').addClass('active');
            }
$.tr18min = function() {
  var tr18 = document.getElementById('tr18').value;
        if(tr18!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4615;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr19plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4911 ;
            $('.tyty').addClass('active');
            }
$.tr19min = function() {
  var tr19 = document.getElementById('tr19').value;
        if(tr19!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4911;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr20plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4872 ;
            $('.tyty').addClass('active');
            }
$.tr20min = function() {
  var tr20 = document.getElementById('tr20').value;
        if(tr20!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4872;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr21plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-5614 ;
            $('.tyty').addClass('active');
            }
$.tr21min = function() {
  var tr21 = document.getElementById('tr21').value;
        if(tr21!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=5614;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr22plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-6113 ;
            $('.tyty').addClass('active');
            }
$.tr22min = function() {
  var tr22 = document.getElementById('tr22').value;
        if(tr22!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=6113;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr23plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-6619 ;
            $('.tyty').addClass('active');
            }
$.tr23min = function() {
  var tr23 = document.getElementById('tr23').value;
        if(tr23!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=6619;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr24plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-7612 ;
            $('.tyty').addClass('active');
            }
$.tr24min = function() {
  var tr24 = document.getElementById('tr24').value;
        if(tr24!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=7612;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr25plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-2869 ;
           $('.tyty').addClass('active');
            }
$.tr25min = function() {
  var tr25 = document.getElementById('tr25').value;
        if(tr25!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=2869;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr26plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-2967 ;
            $('.tyty').addClass('active');
            }
$.tr26min = function() {
  var tr26 = document.getElementById('tr26').value;
        if(tr26!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=2967;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr27plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3061 ;
            $('.tyty').addClass('active');
            }
$.tr27min = function() {
  var tr27 = document.getElementById('tr27').value;
        if(tr27!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3061;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr28plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3972 ;
            $('.tyty').addClass('active');
            }
$.tr28min = function() {
  var tr28 = document.getElementById('tr28').value;
        if(tr28!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3972;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr29plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3225 ;
            $('.tyty').addClass('active');
            }
$.tr29min = function() {
  var tr29 = document.getElementById('tr29').value;
        if(tr29!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3225;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr30plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3412 ;
            $('.tyty').addClass('active');
            }
$.tr30min = function() {
  var tr30 = document.getElementById('tr30').value;
        if(tr30!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3412;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr31plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3168 ;
            $('.tyty').addClass('active');
            }
$.tr31min = function() {
  var tr31 = document.getElementById('tr31').value;
        if(tr31!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3168;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr32plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3366 ;
            $('.tyty').addClass('active');
            }
$.tr32min = function() {
  var tr32 = document.getElementById('tr32').value;
        if(tr32!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3366;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr33plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3461 ;
            $('.tyty').addClass('active');
            }
$.tr33min = function() {
  var tr33 = document.getElementById('tr33').value;
        if(tr33!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3461;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr34plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4266 ;
            $('.tyty').addClass('active');
            }
$.tr34min = function() {
  var tr34 = document.getElementById('tr34').value;
        if(tr34!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4266;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr35plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4414 ;
            $('.tyty').addClass('active');
            }
$.tr35min = function() {
  var tr35 = document.getElementById('tr35').value;
        if(tr35!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4414;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr36plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4617 ;
            $('.tyty').addClass('active');
            }
$.tr36min = function() {
  var tr36 = document.getElementById('tr36').value;
        if(tr36!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4617;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr37plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-4818 ;
            $('.tyty').addClass('active');
            }
$.tr37min = function() {
  var tr37 = document.getElementById('tr37').value;
        if(tr37!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=4818;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr38plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-5139 ;
            $('.tyty').addClass('active');
            }
$.tr38min = function() {
  var tr38 = document.getElementById('tr38').value;
        if(tr38!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=5139;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr39plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3265 ;
            $('.tyty').addClass('active');
            }
$.tr39min = function() {
  var tr39 = document.getElementById('tr39').value;
        if(tr39!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3265;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr40plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3466 ;
            $('.tyty').addClass('active');
            }
$.tr40min = function() {
  var tr40 = document.getElementById('tr40').value;
        if(tr40!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3466;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr41plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3563 ;
            $('.tyty').addClass('active');
            }
$.tr41min = function() {
  var tr41 = document.getElementById('tr41').value;
        if(tr41!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3563;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr42plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-3768 ;
            $('.tyty').addClass('active');
            }
$.tr42min = function() {
  var tr42 = document.getElementById('tr42').value;
        if(tr42!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=3768;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr43plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-2379 ;
            $('.tyty').addClass('active');
            }
$.tr43min = function() {
  var tr43 = document.getElementById('tr43').value;
        if(tr43!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=2379;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr44plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-2478 ;
            $('.tyty').addClass('active');
            }
$.tr44min = function() {
  var tr44 = document.getElementById('tr44').value;
        if(tr44!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=2478;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
tr45plus.onclick = function(){
            v.innerText-=-1;
            ver.innerText-=-2571 ;
            $('.tyty').addClass('active');
            }
$.tr45min = function() {
  var tr45 = document.getElementById('tr45').value;
        if(tr45!=0){
         var v=document.getElementById('vale');
         v.innerText-=1;
         var ver=document.getElementById('vales');
         ver.innerText-=2571;
         if(v.innerText==0){
           $('.tyty').removeClass('active');
         }
       }else{
        return false;
       }
}
  
  });
// $(document).ready(function() {
//   var v=Number(document.getElementById('vale'));
//   console.log(typeof(v));
//    if(v == 1){
//     $("div.tyty").html("<p style='width=100px;background-color: #ffcb0f;'>sdadsadsad</p>");
//    }

// });