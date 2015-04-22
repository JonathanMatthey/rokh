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
    $(".center-col .main-img.show").removeClass('show');
    $(".center-col .main-img").eq(i).addClass('show');
  });

  setTimeout(function(){
    $(".splash").fadeOut(500);
  }, 2000);

  $(".splash").click(function(){
    $(".splash").fadeOut(500);
  });

  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // left
      if($(".center-col .main-img.show").index() > 0){
        $(".center-col .main-img.show").removeClass('show').prev('.main-img').addClass('show');
      }
    }
    else if(e.keyCode == 39) { // right
      if($(".center-col .main-img.show").index() < $(".center-col .main-img").length-1){
        $(".center-col .main-img.show").removeClass('show').next('.main-img').addClass('show');
      }
    }
  });

  // ajax content in
  $(".nav a").click(function(e){
    e.preventDefault();
    var targetPage = $(e.currentTarget).attr('href');
    if (window.location.href.indexOf(targetPage) == -1){
      $("nav").removeClass('open');
      $.ajax({
         url: targetPage,
         data: {},
         success: function (data) {
            $("#main-content").fadeOut(400,function(){
              $("#main-content").html($(data).find("#main-content"));
              $("#main-content").fadeIn(600);
            })
         },
         dataType: 'html'
      });
    }
  });
});
