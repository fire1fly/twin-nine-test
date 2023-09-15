const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu-mobile-box');
const menuInner = document.querySelector('.header__inner');
const body = document.querySelector('body');

menuButton.addEventListener('click', () => {
	const isOpen = menu.classList.contains('open');

	if (isOpen) {
		menu.classList.remove('open');
		menuButton.classList.remove('open');
		menuInner.classList.remove('open');
		body.style.overflow = 'auto';
	} else {
		menu.classList.add('open');
		menuButton.classList.add('open');
		menuInner.classList.add('open');
		body.style.overflow = 'hidden';
	}
});
