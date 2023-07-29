$(document).ready(function(){
   $(".icon-next").click(function(){
    $(".first-slide").hide();
    $(".second-slide").show();
    $(".second-slide").css("display", "flex");
   });

   $(".icon-prev").click(function(){
    $(".second-slide").hide();
    $(".first-slide").show();
   });
})