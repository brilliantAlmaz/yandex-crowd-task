const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let swiperWrap = document.querySelector('.swiper-wrapper');
let swiperItems = document.querySelectorAll('.swiper-slide');
function init() {
	swiperWrap.style.minWidth = swiperItems.length * (window.innerWidth + 30) + 'px';
	swiperItems.forEach(function (item) {
		item.style.minWidth =
			window.innerWidth - 2 * parseInt(window.getComputedStyle(document.querySelector('.container'), null).getPropertyValue('padding-left')) + 'px';

	})
};

init();

window.addEventListener('resize', init);
