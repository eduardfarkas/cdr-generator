function save_visit_info() {
    if(Cookies.get('cdr_generator_visit') == null) {
        //$.getJSON('https://ipinfo.io/json', function(data) {
            $.ajax({
                type: 'post',
                url: 'scripts/php/stats.php',
                data: {
                    action: "add_visit_info",
                    ip: "out of order",//data.ip,
                    country: "out of order"//data.country
                },
                success: function (response) {
                    console.log('Written in DB: ' + new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"}));
                    var date = new Date();
                    date.setTime(date.getTime() + (10 * 60 * 1000)); //10min
                    Cookies.set('cdr_generator_visit', 'visited', { expires: date });
                }
            });
        //});
    } else {
        console.log('already visited: ' + new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"}));
        var date = new Date();
        date.setTime(date.getTime() + (10 * 60 * 1000)); //10min
        Cookies.set('cdr_generator_visit', 'visited', { expires: date });
    }
}

$( document ).ready( function() {
    //----------------------------------CDR-----------------------------------//
    var data = get_data();

    var count_cdr = 0;
    var prp_count_cdr = 0;
    var pop_count_cdr = 0;
    var m2m_count_cdr = 0;

    $.each( data, function( data_operator, data_operators ) {
        $.each( data_operators, function( data_usageType, cdr ) {
            for(j = 0; j < cdr.length; j++) { //for each cdr
                if(data_operator == "prepaid") {prp_count_cdr++;}
                if(data_operator == "postpaid") {pop_count_cdr++;}
                if(data_operator == "m2m") {m2m_count_cdr++;}
                count_cdr++;
            }
        });
    });

    $( '#op_prp_cdrs' ).html( prp_count_cdr );
    $( '#op_pop_cdrs' ).html( pop_count_cdr );
    $( '#op_m2m_cdrs' ).html( m2m_count_cdr );

    //console.log(m2m_count_cdr);
    $( '#stat_cdr_count' ).html( count_cdr );
    $( '#stat_cdr_count_operators' ).html( prp_count_cdr + "<br>" + pop_count_cdr + "<br>" + m2m_count_cdr);

    //save visit info
    save_visit_info();
    setInterval( function() {
        save_visit_info();
    }, 1000 * 9 * 60); //9min

    //read info
    //visit count
    $.ajax({
        type: 'post',
        url: 'scripts/php/stats.php',
        data: {
            action: "read_count_visits"
        },
        success: function (response) {
            // We get the element having id of display_info and put the response inside it
            $( '#stat_visit_count' ).html(response);
        }
    });
    //downloads count
    $.ajax({
        type: 'post',
        url: 'scripts/php/stats.php',
        data: {
            action: "read_count_downloads"
        },
        success: function (response) {
            // We get the element having id of display_info and put the response inside it
            $( '#stat_download_count' ).html(response);
        }
    });
    //downloaded cdrs count
    $.ajax({
        type: 'post',
        url: 'scripts/php/stats.php',
        data: {
            action: "read_count_downloaded_cdr"
        },
        success: function (response) {
            // We get the element having id of display_info and put the response inside it
            $( '#stat_download_count_cdrs' ).html(response);
        }
    });
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
});

function add_download_info(howMany, operator, usage, group) {
    //$.getJSON('https://ipinfo.io/json', function(data) {
        $.ajax({
            type: 'post',
            url: 'scripts/php/stats.php',
            data: {
                action: "add_download_info",
                ip: "out of order",//data.ip,
                howMany: howMany,
                operator: operator,
                usage: usage,
                group: group
            },
            success: function (response) {
                //downloads count
                $.ajax({
                    type: 'post',
                    url: 'scripts/php/stats.php',
                    data: {
                        action: "read_count_downloads"
                    },
                    success: function (response) {
                        // We get the element having id of display_info and put the response inside it
                        $( '#stat_download_count' ).html(response);
                    }
                });
                //downloaded cdrs count
                $.ajax({
                    type: 'post',
                    url: 'scripts/php/stats.php',
                    data: {
                        action: "read_count_downloaded_cdr"
                    },
                    success: function (response) {
                        // We get the element having id of display_info and put the response inside it
                        $( '#stat_download_count_cdrs' ).html(response);
                    }
                });
            }
        });
    //});
}

function show_count_usg_cdr(operator) {
    var data = get_data();

    var count_voice = 0;
    var count_sms = 0;
    var count_mms = 0;
    var count_data = 0;

    $.each( data, function( data_operator, data_operators ) {
        $.each( data_operators, function( data_usageType, cdr ) {
            for(j = 0; j < cdr.length; j++) { //for each cdr
                if(data_operator == operator) {
                    if(data_usageType == "voice") { count_voice++; }
                    if(data_usageType == "sms") { count_sms++; }
                    if(data_usageType == "mms") { count_mms++; }
                    if(data_usageType == "data") { count_data++; }
                }
            }
        });
    });

    //console.log(count_voice + " - " + count_sms + " - " + count_mms + " - " + count_data);
    $( '#usg_voice_cdrs' ).html( count_voice );
    $( '#usg_sms_cdrs' ).html( count_sms );
    $( '#usg_mms_cdrs' ).html( count_mms );
    $( '#usg_data_cdrs' ).html( count_data );

}
