$(document).ready(function(){

  var thumbSliderOffset = 308;

  $("nav .btn-menu").click(function(){
    $("nav").toggleClass('open');
  });

  $(".thumbs-arrow-up").click(function(){
    var y = parseInt($(".thumb-slider-inner").css('top'),10);
    if (y > -5) {

    } else {
      $(".thumb-slider-inner").css('top',y+thumbSliderOffset);
    }
  });

  $(".thumbs-arrow-down").click(function(){
    var y = parseInt($(".thumb-slider-inner").css('top'),10);
    if (y < -1200) {

    } else {
      $(".thumb-slider-inner").css('top',y-thumbSliderOffset);
    }
  });

  $(".thumb").click(function(e){
    var i = $(e.target).index();
    $(".center-col .main-img:visible").removeClass('show');
    $(".center-col .main-img").eq(i).addClass('show');
  });

  setTimeout(function(){
    $(".splash").fadeOut(1000);
  },1000);

});
