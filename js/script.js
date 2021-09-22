const header = document.querySelector('#menu-personalizado'),wallpaper = document.querySelector('#main-menu')
window.addEventListener('scroll', () => {
	if(window.scrollY >= wallpaper.offsetHeight) {
		header.classList.add('fixed-top')
		header.classList.remove('header-hidden')
	}
	else {
		header.classList.remove('fixed-top')
		header.classList.add('header-hidden')
	}
})

jQuery(document).ready(function($) { 
	$(".scroll").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
	});
});