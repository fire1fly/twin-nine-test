//Плавный скролл
SmoothScroll({
	// Время скролла 400 = 0.4 секунды
	animationTime: 800,
	// Размер шага в пикселях
	stepSize: 75,

	// Ускорение
	accelerationDelta: 30,
	// Максимальное ускорение
	accelerationMax: 2,

	// Поддержка клавиатуры
	keyboardSupport: true,

	// Шаг скролла стрелками на клавиатуре в пикселях
	arrowScroll: 50,

	pulseAlgorithm: true,
	pulseScale: 4,
	pulseNormalize: 1,

	// Поддержка тачпада
	touchpadSupport: true,
});

function transitionLoader() {
	preloader.style.zIndex = 100;

	const tl = gsap.timeline({
		defaults: { duration: 1.8, ease: 'power4.inOut' },
	});

	tl.to('.preloader__shade', { height: '100%', stagger: 0.04 });

	tl.to('.preloader__shade', { height: '0%', stagger: 0.04 });

	tl.play();

	setTimeout(function () {
		preloader.style.zIndex = -10;
	}, 4000);
}

//Логика перехода к якорю
jQuery(document).ready(function ($) {
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		transitionLoader();
		const target = $(this.getAttribute('href'));

		setTimeout(function () {
			if (target.length) {
				$.scrollTo(target);
				$('.header__menu-button').removeClass('open');
				$('.header__menu-mobile-box').removeClass('open');
				$('.header__inner').removeClass('open');
				$('body').css('overflow', 'auto');
			}
		}, 1900);
	});
});
