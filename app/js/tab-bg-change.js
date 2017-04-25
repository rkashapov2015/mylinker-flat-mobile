(function() {
    $( '.c-tabs-nav__link' ).click(function() {
        $( '.c-tabs-nav' ).toggleClass( "bg-show" );
        $( '.new' ).toggleClass( "new-hide" );
    });
})(jQuery);