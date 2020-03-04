(function(){
   /*注册事件*/
   $(function(){
      function init(){
         /*菜单点击事件*/
         $('.menu').on('click','li',function(){
            const ele = $(this).find('a');
            if(!ele.hasClass('click-show')){
               ele.addClass('click-show');
               $(this).siblings().find('a').removeClass('click-show');
            };
            const index = $(this).index();
            $('script:gt(1)').remove();
            $('.foot-cloth').removeClass('foot-bottom');
            switch(index){
               case 0:
                  loadHome();
                  break;
               case 1:
                  $('#content').load('110s.html');
                  break;
               case 2:
                  $('#content').load('v610.html');
                  break;
               case 3:
                  $('#content').load('our.html',function(){
                     const ourJS = document.createElement("script");
                     ourJS.src= "../js/our.js";
                     $("body").append(ourJS);
                  });
                  break;
               case 4:
                  $('#content').load('joinUs.html',function(){
                     const joinUsJS = document.createElement("script");
                     joinUsJS.src= "../js/joinUs.js";
                     $("body").append(joinUsJS);
                  });
                  break;
               };
         });
         /*底部菜单*/
         $('.foot-menu').on('click','li',function(){
            const index = $(this).index();
            $(`.menu li:eq(${index})`).click();
         });
      }
      function loadHome(type){
         $('#content').load('home.html',function(){
            const carouselJS = document.createElement("script");
            carouselJS.src= "../js/carousel.js";
            const homeJS = document.createElement("script");
            homeJS.src= "../js/home.js";
            $("body").append(carouselJS);
            $("body").append(homeJS);
            if(type) showBody();
         });
      };
      function showBody(){
         $('.head').show();
         $('.foot-cloth').show();
      };
      init();
      loadHome(1);
   });
})();