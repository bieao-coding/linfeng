(function(){
	const joinUsHeight = $('.join-us').height();
	const joinInfoHeight = $('.join-info').height();
	const footHeight = $('.foot-cloth').height();
	const windowHeight = $(window).height();
	if((windowHeight - joinUsHeight - joinInfoHeight - 80) > footHeight){
		$('.foot-cloth').addClass('foot-bottom');
	}else{
		$('.foot-cloth').removeClass('foot-bottom');
	}
})()