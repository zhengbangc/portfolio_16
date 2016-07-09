var mp4Controllers = angular.module('mp4Controllers', []);

mp4Controllers.controller('homeController', ['$scope' , '$window' , function($scope, $window) {
    $('.experience ul li').click(function(){
       var selection = window.getSelection();
      if(selection.toString().length === 0){
        $(this).children('p').toggleClass('extended');
        if($(this).siblings().children('p').hasClass('extended')){
          $(this).siblings().children('p').removeClass('extended');  
          $(this).siblings().children('span').removeClass('fa-angle-down');
          $(this).siblings().children('span').addClass('fa-angle-right');
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

    $('.thumb_nail').click(function(){
        window.location = $(this).find("a").attr("href"); 
        return false;
    })
    
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

}]);

mp4Controllers.controller('appsController', ['$scope', '$window', function($scope, $window){
  
}]);