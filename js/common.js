$(document).ready(function(){//시작

  $(".planet3 .planet3-img img:last-child").hide();
  $(".planet3 .planet3-click a").click(function(){
    $(".planet3 .planet3-img img:last-child").fadeIn();
    $(this).hide();
    $(".planet3 .planet3-img img:first-child").hide();
  });

  $(".planet3 .planet3-img img:first-child").click(function(){
    $(".planet3 .planet3-img img:last-child").fadeIn();
    $(this).hide();
    $(".planet3 .planet3-click a").hide();
  });

  $(".planet3 .planet3-img img:last-child").click(function(){
    $(this).fadeOut();
    $(".planet3 .planet3-img img:first-child").fadeIn();
    $(".planet3 .planet3-click a").fadeIn();
  });
});//끝