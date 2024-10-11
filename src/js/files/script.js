import { ibg } from "./functions.js";
//когда весь контент загрузится
window.onload = function () {
	ibg();
	document.addEventListener("click", documentActions);
	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target; // кладем в переменную нажатый объект
		const iconMenu = document.querySelector('.icon-menu');
		const header = document.querySelector('.header');

		if (targetElement == iconMenu) {
			if (iconMenu.classList.contains('_active')) {
				iconMenu.classList.remove('_active');
				header.classList.remove('_menu-open');
			} else {
				iconMenu.classList.toggle('_active');
				header.classList.toggle('_menu-open');
			}
		}
	}
	//<BURGER>=================================

	//</BURGER>=================================

}