(function($, undefined){
    var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.c-tabs-nav__link',
        tabContentContainers: '.c-tab'
    });

    myTabs.init();
})(jQuery);