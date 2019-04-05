$( function() {
    $( "#resizable" ).resizable({
        handles: 's', //south = bottom
        minHeight: 120,
        maxHeight: 670,
        resize: (function() { //on resize trigger this function
            var firstRow = $( '.first_row_boxes' ).height();                      
            var wrapper = $( '.wrapper' ).height();
            
            $( '.second_row_boxes' ).css('height', (wrapper - firstRow) + "px");

            $( '.box_table > tbody' ).css('height', ($( '.box' ).height() - 22) + "px");
            $( '.box_table > thead > tr' ).css('width', ($( '.box' ).width()) + "px");
        })                    
    });
});