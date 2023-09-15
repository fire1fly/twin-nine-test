//Анимация в блоке portfolio
const container = document.querySelector('.portfolio');
const content = document.querySelector('.portfolio__works');

const contentWidth = content.offsetWidth - container.offsetWidth;

gsap.config({ force3D: true });

const scrollAnimation = gsap.to(content, {
	x: -contentWidth,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: container,
		scrub: 1,
		pin: true,
		anticipatePin: 1,
		start: 'top',
		end: `+=${contentWidth}`,
	},
});

// const tl = gsap.timeline();

// tl.fromTo('#work1', { x: '100%' }, { x: '-100%' });
// tl.fromTo('#work2', { x: '-100%' }, { x: '-200%' });
// tl.fromTo('#work3', { x: '-200%' }, { x: '-300%' });

// ScrollTrigger.create({
// 	animation: tl,
// 	ease: 'power2.inOut',
// 	trigger: '.portfolio',
// 	start: 'top',
// 	end: 'bottom',
// 	scrub: true,
// 	pin: true,
// });

//Свечение в блоке why-me
const balls = document.querySelectorAll('.why-me__decor-radial');

balls.forEach((ball, index) => {
	const tl = gsap.timeline({ repeat: -1, yoyo: true });

	tl.to(ball, {
		duration: 2 + index,
		scaleX: 1.5,
		scaleY: 0.7,
		ease: 'elastic.out(1, 0.3)',
	});

	tl.to(
		ball,
		{
			duration: 1 + index * 0.5, // Более медленная смена цвета для разнообразия
			backgroundColor: getRandomColor(),
		},
		'-=1' // Начать анимацию цвета за 1 секунду до окончания предыдущей анимации
	);
});

//Свечение в подвале
const ovals = document.querySelectorAll('.footer__decor-radial');

ovals.forEach((oval, index) => {
	const tl = gsap.timeline({ repeat: -1, yoyo: true });

	tl.to(oval, {
		duration: 2 + index,
		scaleX: 0.7,
		scaleY: 1.4,
		ease: 'elastic.out(1, 0.3)',
	});

	tl.to(
		oval,
		{
			duration: 1 + index * 0.5, // Более медленная смена цвета для разнообразия
			backgroundColor: getRandomColor(),
		},
		'-=1' // Начать анимацию цвета за 1 секунду до окончания предыдущей анимации
	);
});

// Функция для генерации случайного цвета
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
