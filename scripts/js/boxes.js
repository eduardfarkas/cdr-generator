function show_needed_boxes(number_of_needed_boxes) {
    if(number_of_needed_boxes == 0) {
        $( '.a' ).css("width", "0px");
        $( '.b' ).css("width", "0px");
        $( '.c' ).css("width", "0px");
        $( '.d' ).css("width", "0px");
        $( '.e' ).css("width", "0px");
        $( '.f' ).css("width", "0px");
    }
    if(number_of_needed_boxes == 1) {
        $( '.a' ).css("width", "100%");
        $( '.b' ).css("width", "0px");
        $( '.c' ).css("width", "0px");
        $( '.d' ).css("width", "0px");
        $( '.e' ).css("width", "0px");
        $( '.f' ).css("width", "100%");
    }
    if(number_of_needed_boxes == 2) {
        $( '.a' ).css("width", "50%");
        $( '.b' ).css("width", "50%");
        $( '.c' ).css("width", "0px");
        $( '.d' ).css("width", "0px");
        $( '.e' ).css("width", "0px");
        $( '.f' ).css("width", "100%");
    }
    if(number_of_needed_boxes == 3) {
        $( '.a' ).css("width", "33.333%");
        $( '.b' ).css("width", "33.333%");
        $( '.c' ).css("width", "33.333%");
        $( '.d' ).css("width", "0px");
        $( '.e' ).css("width", "0px");
        $( '.f' ).css("width", "100%");
    }
    if(number_of_needed_boxes == 4) {
        $( '.a' ).css("width", "33.333%");
        $( '.b' ).css("width", "33.333%");
        $( '.c' ).css("width", "33.333%");
        $( '.d' ).css("width", "33.333%");
        $( '.e' ).css("width", "0px");
        $( '.f' ).css("width", "66.666%");
    }
    if(number_of_needed_boxes == 5) {
        $( '.a' ).css("width", "33.333%");
        $( '.b' ).css("width", "33.333%");
        $( '.c' ).css("width", "33.333%");
        $( '.d' ).css("width", "33.333%");
        $( '.e' ).css("width", "33.333%");
        $( '.f' ).css("width", "33.333%");
    }
}

function get_groups(operator, usageType) {
    var data = get_data();

    Array.prototype.unique = function() {
      return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    };

    var groups;

    $.each( data, function( data_operator, data_operators ) {
        if(data_operator == operator) {
            $.each( data_operators, function( data_usageType, data_usageTypes ) {
                if(data_usageType == usageType) {
                    groups = data_usageTypes.map(x => x.group);
                }
            });
        }
    });

    return( groups.unique() );
}

function number_of_groups(operator, usageType) {
    return get_groups(operator, usageType).length;
}

function show_cdr_menu() {
    var operator = $('input[name=operator]:checked', '.input_form').val();
    var usageType = $('input[name=usage]:checked', '.input_form').val();

    if(operator == ""|| operator == null || usageType == "" || usageType == null) {
        return;
    } else {
        show_needed_boxes(number_of_groups(operator, usageType));
        clean_boxes()
        setTimeout( function() {
            show_cdr_menu_content();
        }, 500);
    }
}

function clean_boxes() {
    $( '.box_table' ).css({ 'opacity' : 0 });;
    setTimeout( function() {
        $( '#box0' ).html("");
        $( '#box1' ).html("");
        $( '#box2' ).html("");
        $( '#box3' ).html("");
        $( '#box4' ).html("");
        $( '#cdr_container' ).val("");
        $( '.box_table' ).css({ 'opacity' : 1 });;
    }, 500);

}

$( window ).on('resize', function(){
    $( '.box_table > tbody' ).css('height', ($( '.box' ).height() - 22) + "px");
    $( '.box_table > thead > tr' ).css('width', ($( '.box' ).width()) + "px");
});