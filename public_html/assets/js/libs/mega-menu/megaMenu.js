var MegaMenu = function (element) {
    this.$element = $(element);
    this.$root = this.$element.find('.menu__root');
    this.mqlBp1 = window.matchMedia('(min-width: 700px)');
    this.eventListenerReferences = {};

    this.bindEventHandlers();
    this.bindBp1EventHandlers();
};

MegaMenu.prototype = {
    bindEventHandlers: function () {
        this.$element.on('click', '.menu__link--parent', this.goDeeper.bind(this));
        this.$element.on('click', '.menu__back-link', this.goUp.bind(this));
        this.$element.on('click', '.menu__item', this.addHandledByMegaMenuToEvent.bind(this));
        this.mqlBp1.addListener(this.bindBp1EventHandlers.bind(this));
    },
    bindDesktopOnlyEventHandlers: function () {
        this.eventListenerReferences.onDocumentClick = this.onDocumentClick.bind(this);
        document.addEventListener('click', this.eventListenerReferences.onDocumentClick);
    },
    unbindDesktopOnlyEventHandlers: function () {
       document.removeEventListener('click', this.eventListenerReferences.onDocumentClick);
    },
    bindBp1EventHandlers: function () {
        if (this.mqlBp1.matches) {
            this.bindDesktopOnlyEventHandlers();
        } else {
            this.unbindDesktopOnlyEventHandlers();
        }
    },
    goDeeper: function (event) {
        event.preventDefault();

        var $menuLink = $(event.currentTarget);
        var $currentMenu = this.getCurrentMenuForLink($menuLink);
        var $subMenu = this.getSubMenuForLink($menuLink);
        var newDepth = this.getMenuDepth($subMenu);

        /**
         * Only close the open menus in the current menu. If we closed
         * all the open menus, we would also close the current menu.
         * That would make it impossible to show a child (the submenu)
         * in the current menu.
         */
        this.hideAllOpenMenusInMenu($currentMenu);

        this.showMenu($subMenu);
        this.navigateToDepth(newDepth);

        event.originalEvent.handledByMegaMenu = true;
    },
    goUp: function (event) {
        event.preventDefault();

        var $backLink = $(event.currentTarget);
        var $currentMenu = this.getCurrentMenuForLink($backLink);
        var newDepth = this.getMenuDepth($currentMenu) - 1;

        this.navigateToDepth(newDepth);

        event.originalEvent.handledByMegaMenu = true;
    },
    addHandledByMegaMenuToEvent: function (event) {
        event.originalEvent.handledByMegaMenu = true;
    },
    /**
     * Closes submenus if you click next to them. This method
     * should not close submenus if the MegaMenu script itself
     * is already taking care of it.
     */
    onDocumentClick: function (event) {
        if (event.handledByMegaMenu === true) {
            return;
        }

        this.$root.find('.is-active').removeClass('is-active');
        this.removeDepthClasses();
    },
    addDepthClass: function (depth) {
        this.$root.addClass('menu__root--depth-' + depth);
    },
    removeDepthClasses: function () {
        this.$root.removeClass(function (i, className) {
            return (className.match(/menu__root--depth-\d$/) || []).join(' ');
        });
    },
    navigateToDepth: function (depth) {
        this.removeDepthClasses();
        this.addDepthClass(depth);
    },
    getSubMenuForLink: function ($menuLink) {
        return $menuLink.parent('li').children('.menu__sub, .menu__mega');
    },
    getCurrentMenuForLink: function ($menuLink) {
        return $menuLink.closest('ul, .menu__mega');
    },
    getMenuDepth: function ($menu) {
        return $menu.parentsUntil(this.$root, 'li').length;
    },
    showMenu: function ($menu) {
        $menu.addClass('is-active');
    },
    hideAllOpenMenusInMenu: function ($menu) {
        $menu
            .find('.menu__sub.is-active, .menu__mega.is-active')
            .removeClass('is-active');
    }
};
