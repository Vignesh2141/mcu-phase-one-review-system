$(document).ready(function(){
  $("body").on('click','#one',function(){
    $(this).attr('class','fa fa-star aria-hidden=true');
    $("#two,#three,#four,#five").attr('class','fa fa-star-o aria-hidden=true');
  });
  $("body").on('click','#two',function(){
    $("#one,#two").attr('class','fa fa-star aria-hidden=true');
    $("#three,#four,#five").attr('click','fa fa-star-o aria-hidden=true');
  });

  $("body").on('click','#three',function(){
    $("#one,#two,#three").attr('class','fa fa-star aria-hidden=true');
    $("#four,#five").attr('click','fa fa-star-o aria-hidden=true');
  });
  $("body").on('click','#four',function(){
    $("#one,#two,#three,#four").attr('class','fa fa-star aria-hidden=true');
    $("#five").attr('click','fa fa-star-o aria-hidden=true');
  });
  $("body").on('click','#five',function(){
    $("#one,#two,#three,#four,#five").attr('class','fa fa-star aria-hidden=true');
  });
   $("body").on('click','#submit',function(){
     $("#submit").alert("thanks for reviewing");
   });

  
});
