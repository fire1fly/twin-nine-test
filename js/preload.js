const preloader = document.querySelector('.preloader__shades');
function startLoader() {
	gsap.to('.preloader__shade', 1.5, {
		height: '0%',
		stagger: {
			amount: 0.5,
		},
		ease: 'power4.inOut',
	});
}

document.addEventListener('DOMContentLoaded', function () {
	startLoader();

	setTimeout(function () {
		preloader.style.zIndex = -10;
	}, 2000);
});
