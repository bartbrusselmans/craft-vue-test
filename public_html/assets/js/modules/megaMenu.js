
export default class megaMenu {
	constructor(element) {
		this.$element = element;
		this.$root = element.querySelectorAll('.menu__root')[0];
		this.eventListenerReferences = {};
	}
	static bindEventHandlers() {
		this.element.addEventListener('click', 'menu__link--parent', this.goDeeper.bind(this));
		this.element.addEventListener('click', 'menu__back-link', this.goUp.bind(this));
		this.element.addEventListener('click', 'menu__item', this.addHandledByMegaMenuToEvent.bind(this));
	}
	static goDeeper(e) {
		e.preventDefault();
		const $menuLink = document.querySelector(event.currentTarget);
		const $currentMenu = this.getCurrentMenuForLink($menuLink);
		const $subMenu = this.getSubMenuForLink($menuLink);
		const newDepth = this.getMenuDepth($subMenu);
	}
	static goUp(e) {
		e.preventDefault();
		const $backLink = document.querySelector(event.currentTarget);
		const $currentMenu = this.getCurrentMenuForLink($backLink);
		const newDepth = this.getMenuDepth($currentMenu) - 1;

		this.navigateToDepth(newDepth);

		e.originalEvent.handledByMegaMenu = true;
	}
	static addHandledByMegaMenuToEvent(e) {
		e.originalEvent.handledByMegaMenu = true;
	}
	/**
	 * Closes submenus if you click next to them. This method
	 * should not close submenus if the MegaMenu script itself
	 * is already taking care of it.
	 */
	static onDocumentClick(e) {
		if (e.handledByMegaMenu === true) {
			return;
		}
		this.$root.querySelector('.is-active').classList.remove('is-active');
		this.removeDepthClasses();
	}
	static addDepthClass(depth) {
		this.$root.classList.add(`menu__root--depth-${depth}`);
	}
	static removeDepthClasses() {
		// OPKUISEN!
		this.$root.removeClass(function (i, className) {
			return (className.match(/menu__root--depth-\d$/) || []).join(' ');
		});
	}
	static navigateToDepth(depth) {
		this.removeDepthClasses();
		this.addDepthClass(depth);
	}
	static getSubMenuForLink($menuLink) {
		// OPKUISEN
		return $menuLink.parent('li').children('.menu__sub, .menu__mega');
	}
	static getCurrentMenuForLink($menuLink) {
		// OPKUISEN
		return $menuLink.closest('ul, .menu__mega');
	}
	static getMenuDepth($menu) {
		// OPKUISEN
		return $menu.parentsUntil(this.$root, 'li').length;
	}
	static showMenu($menu) {
		$menu.classList('is-active');
	}
	hideAllOpenMenusInMenu($menu) {
		$menu.find('.menu__sub.is-active, .menu__mega.is-active').removeClass('is-active');
	}
	initMegaMenu() {
		this.bindEventHandlers();
		this.bindBp1EventHandlers();
	}
}
