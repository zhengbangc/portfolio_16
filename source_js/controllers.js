var mp4Controllers = angular.module('mp4Controllers', []);

mp4Controllers.controller('homeController', ['$scope' , '$window' , function($scope, $window) {
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

  $('.thumb_nail_container').click(function(){
    var function_context = this;
    $('.home').animate({
      opacity: 0
    }, 500, function(){
      window.location = $(function_context).find("a").attr("href"); 
    });
    return false;
  });

  $(window).scroll(function(){
    if($(window).scrollTop() >= ($('.myworks').offset().top - 150)){
      $('.thumb_nail:nth-child(1)').addClass('appear');
      setTimeout(function(){$('.thumb_nail:nth-child(2)').addClass('appear');},300);
      setTimeout(function(){$('.thumb_nail:nth-child(3)').addClass('appear');},600);
      setTimeout(function(){$('.thumb_nail:nth-child(4)').addClass('appear');},900);
      setTimeout(function(){$('.thumb_nail:nth-child(5)').addClass('appear');},1200);
      setTimeout(function(){$('.thumb_nail:nth-child(6)').addClass('appear');},1500);
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

  var $root = $('html, body');
  $("nav a").click(function(){
      $root.animate({
         scrollTop: $( $.attr(this, 'href')).offset().top
      },500);
      return false;
  });

  $(".intro_container").animate({
    opacity: '1',
    top: '50%'
  }, 600);

  $(document).scroll(function(){
    if($(document).scrollTop() >= 45 && $('nav').offset().top < $('.contactme').offset().top) {
      $('nav').addClass('background_blur');
    }

    if($(document).scrollTop() < 45) {
      $('nav').removeClass('background_blur');
    }
  })

}]);

mp4Controllers.controller('appsController', ['$scope', '$window', function($scope, $window){
  $('.apps').animate({
      opacity: 1
    }, 500);



}]);