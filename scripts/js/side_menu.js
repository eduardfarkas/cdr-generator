function show_input_data_form() {
    if($( '.input_data' ).attr("id") == "active-el") {
        hide_input_data_form();
    } else {
        $( '.input_data' ).attr('id', 'active-el');
        hide_help();
        hide_stats();
        $( '.sliding_box_input_data' ).css('left', '30px');
        $( '.input_data' ).css('background', 'rgb(29, 33, 41)');
        $( '.input_data' ).css('color', 'white');
    }
}
function hide_input_data_form() {
    if($( '#sliding' ).prop( 'checked' ) == false ) { return; }
    $( '.input_data' ).removeAttr("id");
    $( '.sliding_box_input_data' ).css('left', '-230px');
    setTimeout( function() {
        $( '.input_data' ).css('background', 'rgb(201, 205, 210)');
        $( '.input_data' ).css('color', 'black');
    }, 250);
}
function show_help() {
    if($( '.help' ).attr("id") == "active-el") {
        hide_help();
    } else {
        $( '.help' ).attr('id', 'active-el');
        hide_input_data_form();
        hide_stats();
        $( '.sliding_box_help' ).css('left', '30px');
        $( '.help' ).css('background', 'rgb(29, 33, 41)');
        $( '.help' ).css('color', 'white');
    }
}
function hide_help() {
    $( '.help' ).removeAttr("id");
    $( '.sliding_box_help' ).css('left', '-730px');
    setTimeout( function() {
        $( '.help' ).css('background', 'rgb(201, 205, 210)');
        $( '.help' ).css('color', 'black');
    }, 250);
}
function show_stats() {
    if($( '.stat_div' ).attr("id") == "active-el") {
        hide_stats();
    } else {
        $( '.stat_div' ).attr('id', 'active-el');
        hide_input_data_form();
        hide_help();
        $( '#stats_info' ).css('top', '30px');
        $( '.stat_div' ).css('background', 'orange');
        $( '.stat_div' ).css('height', '28px');
        $( '.stat_div' ).css('color', 'white');
    }
}
function hide_stats() {
    $( '.stat_div' ).removeAttr("id");
    $( '#stats_info' ).css('top', '-1530px');
    setTimeout( function() {
        $( '.stat_div' ).css('background', 'white');
        $( '.stat_div' ).css('height', '27px');
        $( '.stat_div' ).css('color', 'black');
    }, 250);
}

function disable_sliding() {
    if($( '#sliding' ).prop( 'checked' ) == true ) {
        $( '.wrapper' ).css( 'width', 'calc(100% - 30px - 6px)');
        $( '.box_table thead tr' ).css( 'width', '100%');
        $.notify("Vysouvání menu zapnuto", "success");
    } else {
        $( '.wrapper' ).css( 'width', 'calc(100% - 30px - 6px - 230px)');
        $( '.box_table thead tr' ).css( 'width', '100%');
        $.notify("Vysouvání menu vypnuto", "error");
    }
}

$( document ).ready(function() {
    //on load show input data form
    setTimeout( function() {
        show_input_data_form();
    }, 500);
    show_needed_boxes(0);

    //closing side menu on clicking elsewhere
    $('html').click(function(e) {
        /* but be carefull the contained links! to be clickable */
        if(
            $(e.target).hasClass('sm_h_c') ||
            $(e.target).hasClass('help') ||
            $(e.target).hasClass('tm_s_d_c') ||
            $(e.target).hasClass('sm_i_d_c') ||
            $(e.target).hasClass('sm_c_p_c')
        ) {
            return;
        }

        /* here you can code what to do when click on html */
        hide_input_data_form();
        hide_help();
        hide_stats();
        
    });
});
