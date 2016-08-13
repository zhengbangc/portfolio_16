var mp4Controllers = angular.module('mp4Controllers', ['duScroll']);

mp4Controllers.controller('homeController', ['$scope' , '$window', '$document', function($scope, $window, $document) {
  $(document).scroll(function(){
    if($(window).width() > 800) {
      if($(window).scrollTop() >= ($('.myworks').offset().top - 300)){
        $('.thumb_nail:nth-child(1)').addClass('appear');
        setTimeout(function(){$('.thumb_nail:nth-child(2)').addClass('appear');},300);
        setTimeout(function(){$('.thumb_nail:nth-child(3)').addClass('appear');},600);
        setTimeout(function(){$('.thumb_nail:nth-child(4)').addClass('appear');},900);
        setTimeout(function(){$('.thumb_nail:nth-child(5)').addClass('appear');},1200);
        setTimeout(function(){$('.thumb_nail:nth-child(6)').addClass('appear');},1500);
        setTimeout(function(){$('.thumb_nail:nth-child(7)').addClass('appear');},1800);
        setTimeout(function(){$('.thumb_nail:nth-child(8)').addClass('appear');},2100);
      }
      if($(window).scrollTop() >= $('.aboutme').offset().top) {
        $('.intro').addClass('lower_intro_background_level');
      } else {
        $('.intro').removeClass('lower_intro_background_level');
      }
    }
    if($(document).scrollTop() >= 55 && $('nav').offset().top < $('.contactme').offset().top) {
      $('nav').addClass('background_blur');
    }
    if($(document).scrollTop() < 55) {
      $('nav').removeClass('background_blur');
    }
  });


  $(".intro_container").animate({
    opacity: '1',
    top: '50%'
  }, 600);

  if($(window).width() > 800) {
    var nav_top = $('.intro_container p').offset().top + 40 + 'px';
    $("nav").animate({
      opacity: '1',
      top: nav_top
    }, 600); 
  }

  $(window).resize(function() {
    if ($(window).width() >= 500) {
      var nav_top = $('.intro_container p').offset().top + 40 + 'px';
      $('nav').css({top: nav_top});  
    }
    if($(window).width() < 500) {
      $('nav').css({bottom: 0});
      $('nav').css({top: 'auto'});
    }
  });

  // Text Rotator
  $('.rotate').each(function(){
    var el = $(this);
    var text = $(this).html().split(",");
    el.html(text[0]);
    setInterval(function() {
      el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 700 , function() {
              index = $.inArray(el.html(), text)
              if((index + 1) == text.length) index = -1
              el.text(text[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 700 );
            });
    }, 2400);
  });

  $('.experience ul li').click(function(){
     var selection = window.getSelection();
    if(selection.toString().length === 0){
      $(this).children('p').toggleClass('extended');
      $(this).children('h5').toggleClass('extended');
      if($(this).siblings().children('p').hasClass('extended')){
        $(this).siblings().children('p').removeClass('extended');  
        $(this).siblings().children('span').removeClass('fa-angle-down');
        $(this).siblings().children('span').addClass('fa-angle-right');
      }
      if($(this).siblings().children('h5').hasClass('extended')){
        $(this).siblings().children('h5').removeClass('extended');  
      }
      if($(this).children('span').hasClass('fa-angle-right')){
        $(this).children('span').removeClass('fa-angle-right');
        $(this).children('span').addClass('fa-angle-down');
      }
      else if($(this).children('span').hasClass('fa-angle-down')){
        $(this).children('span').removeClass('fa-angle-down');
        $(this).children('span').addClass('fa-angle-right');
      }
    }
  })

  $('.thumb_nail').css({'height': $('.thumb_nail').width() * 0.9+'px'});
  $('.thumb_nail_container').click(function(){
    var function_context = this;
    window.location = $(function_context).find("a").attr("href"); 
    return false;
  });




}]);

mp4Controllers.controller('appsController', ['$scope', '$window', function($scope, $window){
  $('.apps').animate({
      opacity: 1
    }, 500);



}]);