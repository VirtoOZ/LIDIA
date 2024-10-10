import { ibg } from "./functions.js";
//когда весь контент загрузится
window.onload = function () {
	ibg();
	document.addEventListener("click", documentActions);
	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target; // кладем в переменную нажатый объект
		const iconMenu = document.querySelector('.icon-menu');
		const menuBody = document.querySelector('.menu-body');
		const wrapperHeader = document.querySelector('.header__wrapper');

		if (targetElement == iconMenu) {
			if (iconMenu.classList.contains('_active')) {
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				wrapperHeader.classList.remove('_active');
			} else {
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
				wrapperHeader.classList.toggle('_active');
			}
		}
	}
	//<BURGER>=================================

	//</BURGER>=================================

}