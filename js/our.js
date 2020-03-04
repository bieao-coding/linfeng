(function(){
	$('.our-tabs').on('click','li',function(){
        const ele = $(this).find('a');
        if(!ele.hasClass('click-our-tabs')){
           ele.addClass('click-our-tabs');
           $(this).siblings().find('a').removeClass('click-our-tabs');
        }
        const index = $(this).index();
        switch(index){
		    case 0:
					$('.company-jianjie').show();
					$('.company-wenhua').hide();
					$('.company-tuandui').hide();
				break;
		    case 1:
			        $('.company-jianjie').hide();
					$('.company-wenhua').show();
					$('.company-tuandui').hide();
		        break;
		    case 2:
					$('.company-jianjie').hide();
					$('.company-wenhua').hide();
					$('.company-tuandui').show();
		      	break;
		    default:
		      break;
		}
    });  
	$('#play-btn').click(function(){
		$(this).hide();
		$('#video').attr('controls','controls');
		$('#video')[0].play();

	})
})()