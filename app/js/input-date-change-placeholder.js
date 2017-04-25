(function($, undefined){
    $("#input-zaezd").focus(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "0",
                "background-image": "none",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            });
        }
    });
    $("#input-zaezd").blur(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "-9999px",
                "background-image": "url('app/img/zaezd.png')",
                "background-position": "-3% 50%",
                "background-repeat": "no-repeat"
            } );
        }
    });

    $("#input-viezd").focus(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "0",
                "background-image": "none",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            });
        }
    });
    $("#input-viezd").blur(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "-9999px",
                "background-image": "url('app/img/viezd.png')",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            } );
        }
    });

})(jQuery);