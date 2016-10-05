$(document).ready(function(){
  $("#list-icon a").css({
    height: $("#list-icon").width() / 2,
    lineHeight: $("#list-icon").width() / 2 + "px"
  });
  $(".xp .kiri .tahun").each(function(){
    $(this).height($(this).parent().parent().height());
    $(this).css('lineHeight',$(this).parent().parent().height() + "px");
  });

  $(".xp").each(function(){
    var kecil = $(this).children('.dalam').children('.penjelasan').children('small');
    if(kecil.text()=='Education'){
      $(this).children('.dalam').children('.kiri').children('.tahun').css('background','#2196F3');
    }else if(kecil.text()=='Project'){
      $(this).children('.dalam').children('.kiri').children('.tahun').css('background','#00BFA5');
    }
  });
})
