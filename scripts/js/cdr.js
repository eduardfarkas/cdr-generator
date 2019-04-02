function show_cdr_menu_content() {
    var operator = $('input[name=operator]:checked', '.input_form').val();
    var usageType = $('input[name=usage]:checked', '.input_form').val();
    var cdrs = get_data(operator, usageType);
    var groups = get_groups(operator, usageType);

    //for each group fill menu
    for(i = 0; i < groups.length; i++) {

        var box_content =
            "<table class='box_table'>" +
                "<thead>" +
                    "<tr>" +
                        "<th></th>" +
                        "<th></th>" +
                        "<th class='th_name'>Název</th>" +
                        "<th class='th_checkbox'><input type='checkbox' id='group-" + i + "' name='cdr' class='cdr_all " + groups[i] + "' onchange='check_all_by_group(this); show_cdr(); group_check(this); enable_download(); show_info_cdrCount();'></th>" +
                        "<th class='th_comment'>Popis</th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody>";

        //$.each( data, function( data_operator, data_operators ) {
            //if(data_operator == operator) {
                //$.each( data_operators, function( data_usageType, cdr ) {
                    //if(data_usageType == usageType) { //for each group (box)
                        
                        //[id, chargingClass, group, chargingCode]                        
                        var lastCdr =       [-1, 0, -1, 0]; //last used cdr
                        var currentCdr =    [-1, 0, -1, 0];
                        var nextCdr =       [-1, 0, -1, 0, false]; // true = is last, false = not last

                        for(j = 0; j < cdrs.length; j++) { //for each cdr         
                            if(cdrs[j].group == groups[i]) { //set box for each cdrs group
                                
                                currentCdr = [cdrs[j].id, cdrs[j].name.substring(0, 2), groups[i], cdrs[j].name];
                                nextCdr = [
                                    (j+1 == cdr.length) ? (cdrs[j].id) : (cdrs[j+1].id), //id
                                    (j+1 == cdr.length) ? (cdrs[j].name.substring(0, 2)) : (cdrs[j+1].name.substring(0, 2)), //charging class
                                    (j+1 == cdr.length) ? (cdrs[j].group) : (cdrs[j+1].group),
                                    (j+1 == cdr.length) ? (cdrs[j].name) : (cdrs[j+1].name),
                                    (j+1 == cdr.length) ? ( true ) : (false)                                  
                                ];

                                //-------------------------------------
                                // CHARGING CLASS COLUMN
                                //-------------------------------------
                                var chargingClass = "";
  
                                if((currentCdr[0] > lastCdr[0] && currentCdr[1] != lastCdr[1]) || currentCdr[2] != lastCdr[2]) {
                                    if(nextCdr[1] != currentCdr[1] || nextCdr[4] == true) {
                                        chargingClass = "<td class='cdr-chargingClass cdr-chargingClass-start'><input type='checkbox' name='cdr-chargingClass' class='cdr-chargingClass " + groups[i] + " " + cdrs[j].name.substring(0, 2) + "' id='group" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); enable_download(); show_info_cdrCount(); check_all_by_chargingClass(this);'></td>";
                                    }
                                    else {
                                        chargingClass = "<td class='cdr-chargingClass cdr-chargingClass-start'><div><img src='images/charging-class-start.png'></img><input type='checkbox' name='cdr-chargingClass' class='cdr-chargingClass " + groups[i] + " " + cdrs[j].name.substring(0, 2) + "' id='group" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); enable_download(); show_info_cdrCount(); check_all_by_chargingClass(this);'></div></td>";
                                    }
                                }
                                else if((nextCdr[0] > currentCdr[0] && nextCdr[1] != currentCdr[1]) || nextCdr[4] == true || currentCdr[2] != nextCdr[2]) {
                                    chargingClass = "<td class='cdr-chargingClass cdr-chargingClass-end'><div><img src='images/charging-class-end.png'></img></div></td>";
                                } 
                                else {
                                    chargingClass = "<td class='cdr-chargingClass cdr-chargingClass-join'><div><img src='images/charging-class-join.png'></img></div></td>";
                                }                                                          
                                //-------------------------------------

                                //-------------------------------------
                                // CHARGING CODE COLUMN
                                //-------------------------------------
                                var chargingCode = "";

                                //[id, chargingClass, group, chargingCode]                                 
                                if(currentCdr[0] > lastCdr[0] && currentCdr[3] != lastCdr[3]) {
                                    if(nextCdr[3] != currentCdr[3] || nextCdr[4] == true) {
                                        chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-start'></td>";
                                    }
                                    else {
                                        chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-start'><div><img src='images/charging-code-start.png'></img><input type='checkbox' name='cdr_chargingCode' class='cdr-chargingCode " + groups[i] + " " + cdrs[j].name.substring(0, 2) + " " + cdrs[j].name + "' id='group" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); enable_download(); show_info_cdrCount(); check_all_by_chargingCode(this);'></div></td>";
                                    }
                                }
                                else if((nextCdr[0] > currentCdr[0] && nextCdr[3] != currentCdr[3]) || nextCdr[4] == true || currentCdr[2] != nextCdr[2]) {
                                    if(lastCdr[3] != currentCdr[3]) {
                                        chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-end'></td>";
                                    }
                                    else {
                                        chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-end'><div><img src='images/charging-code-end.png'></img></div></td>";
                                    }                                 
                                } 
                                else {
                                    chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-join'><div><img src='images/charging-code-join.png'></img></div></td>";
                                }   
     
                                //-------------------------------------
                                lastCdr = [cdrs[j].id, cdrs[j].name.substring(0, 2), groups[i], cdrs[j].name];

                                box_content +=
                                "<tr class='cdr_tr'>" +
                                    chargingClass +
                                    chargingCode +                            
                                    "<td class='cdr_name' onclick='check_cdr(this);'>" + cdrs[j].name + "</td>" +
                                    "<td class='cdr_checkbox'><input type='checkbox' name='cdr' class='cdr " + groups[i] + " " + cdrs[j].name.substring(0, 2) + " " + cdrs[j].name + "' id='" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); enable_download(); show_info_cdrCount();'></td>" +
                                    "<td class='cdr_comment'>" + cdrs[j].comment + "</td>"
                                "</tr>";
                            }
                        }
                    //}
                //});
            //}
        //});

        box_content += "</tbody></table>";

        //show content in individual tables depending on group
        $( '#box' + i ).html(box_content);
        //document.getElementById(i).innerHTML = box_content;

        //calculate CSS properties, because fuck me sideways, stupid CSS xD
        $( '.box_table > tbody' ).css('height', ($( '.box' ).height() - 22) + "px");
        //$( '.box_table > thead > tr' ).css('width', ($( '.box' ).width()) + "px");
    }
    enable_download();
}


function show_cdr() {
    var data = get_data();
    var sms_units = $( '#sms_units').val();
    var mms_units = $( '#mms_units').val();

    var checkedCheckboxes = $( 'input[class^=cdr]:checked');
    var cdrs = "";

    for(i = 0; i < checkedCheckboxes.length; i++) {
        $.each( data, function( data_operator, data_operators ) {
            $.each( data_operators, function( data_usageType, cdr ) {

                for(j = 0; j < cdr.length; j++) { //for each cdr
                    if(cdrs[j].id == checkedCheckboxes[i].id) { //set box for each group

                        if(cdrs[j].group == "xml") {
                            //cdrs += cdrs[j].name + " - " + cdrs[j].comment + ":\r\n";
                            //cdrs += "\r\n";
                            cdrs += cdrs[j].value + "\r\n";
                            cdrs += "----------------------------------------------------------------------------------------------------\r\n";
                        } else {

                            if(data_usageType == "sms") {
                                for(k = 0; k < sms_units; k++) {
                                    cdrs += cdrs[j].value + "\r\n";
                                }
                            }
                            if(data_usageType == "mms") {
                                for(k = 0; k < mms_units; k++) {
                                    cdrs += cdrs[j].value + "\r\n";
                                }
                            }
                            else if(data_usageType != "sms" && data_usageType != "mms") {
                                cdrs += cdrs[j].value + "\r\n";
                            }

                        }

                    }
                }
            });
        });
    }

    $( '#cdr_container').val(cdrs);
}

function enable_download() {
    var checkedCheckboxes = $( 'input[class^=cdr]:checked');
    if(checkedCheckboxes.length > 0) {
        $( '#download_button' ).prop('disabled', false);
    } else {
        $( '#download_button' ).prop('disabled', true);
    }
}

function download_cdr() {
    var confirm_result = true;
    if($( '#msisdn' ).val().toString().length != 12 && $( '#imsi' ).val().toString().length != 15) {
        confirm_result = confirm("MSISDN nemá 12 cifer a IMSI nemá 15 cifer, chceš pokračovat?");
    }
    if($( '#msisdn' ).val().toString().length != 12 && $( '#imsi' ).val().toString().length == 15) {
        confirm_result = confirm("MSISDN nemá 12 cifer, chceš pokračovat?");
    }
    if($( '#imsi' ).val().toString().length != 15 && $( '#msisdn' ).val().toString().length == 12) {
        confirm_result = confirm("IMSI nemá 15 cifer, chceš pokračovat?");
    }
    if($( '#voice_units' ).val() < 1) {
        confirm_result = confirm("VOICE jednotky jsou menší než 1, chceš pokračovat?");
    }
    if($( '#sms_units' ).val() < 1) {
        confirm_result = confirm("SMS jednotky jsou menší než 1, chceš pokračovat?");
    }
    if($( '#mms_units' ).val() < 1) {
        confirm_result = confirm("MMS jednotky jsou menší než 1, chceš pokračovat?");
    }
    if($( '#data_units' ).val() < 1) {
        confirm_result = confirm("DATA jednotky jsou menší než 1, chceš pokračovat?");
    }

    if(confirm_result == true) {
        $.valHooks.textarea = {
            get: function( elem ) {
                return elem.value.replace( /\r?\n/g, "\r\n" );
            }
        };

        var group = $( 'input[class^=cdr]:checked' )[0].classList[1];

        if(group == "xml") {
            var data = get_data();


            if($( 'input[class^=cdr]:checked' ).length > 1) {
                //ZIP files
                var zip = new JSZip();

                var name_array = [];

                for(i = 0; i < $( 'input[class^=cdr]:checked' ).length; i++) {
                    $.each( data, function( data_operator, data_operators ) {
                        $.each( data_operators, function( data_usageType, cdr ) {
                            for(j = 0; j < cdr.length; j++) { //for each cdr
                                if(cdrs[j].id == $( 'input[class^=cdr]:checked' )[i].id) { //set box for each group
                                    name_array[i] = timestamp() + "_" + cdrs[j].comment.split(" ").join("_").replace("->", "to").replace("ČR", "CR") + "." + cdrs[j].group;
                                }
                            }
                        });
                    });
                }

                var cdr_array = $( '#cdr_container' ).val().split("----------------------------------------------------------------------------------------------------\r\n");

                for(i = 0; i < name_array.length; i++) {
                    zip.file(name_array[i], cdr_array[i]);
                }

                zip.generateAsync({type:"blob"}).then(function(content) {
                    saveAs(content, "xml.zip");
                    add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class^=cdr]:checked' )[0].classList[1]);
                });

            } else {
                var content = $( '#cdr_container' ).val().split("----------------------------------------------------------------------------------------------------\r\n")[0];
                var filename = "";
                $.each( data, function( data_operator, data_operators ) {
                    $.each( data_operators, function( data_usageType, cdr ) {
                        for(j = 0; j < cdr.length; j++) { //for each cdr
                            if(cdrs[j].id == $( 'input[class^=cdr]:checked' )[0].id) { //set box for each group
                                filename = timestamp() + "_" + cdrs[j].comment.split(" ").join("_").replace("->", "to").replace("ČR", "CR") + "." + cdrs[j].group;
                            }
                        }
                    });
                });


                var blob = new Blob([content], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
                add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class^=cdr]:checked' )[0].classList[1]);
            }
        } else {
            var operator = $('input[name=operator]:checked', '.input_form').val();
            if(operator == "prepaid") {
                var content = $( '#cdr_container' ).val();
                var filename = "xdr_" + timestamp() + "_cz_" + group + "_.xdr";

                var blob = new Blob([content], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
                add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class^=cdr]:checked' )[0].classList[1]);
            } else {
                var content = $( '#cdr_container' ).val();
                var filename = timestamp() + "_generated_." + group;

                var blob = new Blob([content], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
                add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class^=cdr]:checked' )[0].classList[1]);
            }
        }
    }

}

function enable_editation() {
    if($( '#editation' ).prop( 'checked' ) == true ) {
        $( '#cdr_container' ).prop( 'readonly', false);
        $.notify("Editace povolena", "success");
    } else {
        $( '#cdr_container' ).prop( 'readonly', true);
        $.notify("Editace zakázána", "error");
    }
}

//only one group can be checked at a time
function group_check(checkbox) {
    var clicked_group = checkbox.classList[1];
    var clicked_chargingClass = checkbox.classList[2];
    var clicked_chargingCode = checkbox.classList[3];
    if(checkbox.checked == false) {
        //if any unchecked CDR exists, uncheck parent group
        $( '.cdr_all' ).not(checkbox).prop('checked', false);
        $( '.' + clicked_chargingCode + '.cdr-chargingCode' ).not(checkbox).prop('checked', false);
        $( '.' + clicked_chargingClass + '.cdr-chargingClass' ).not(checkbox).prop('checked', false);
    }


    var checkedCheckboxes = $( 'input[name^=cdr]:checked');
    //var checkedCheckboxes2 = $( 'input[name^=cdr_all]:checked');

    for(i = 0; i < checkedCheckboxes.length; i++) {
        if(checkedCheckboxes[i].classList[1] != clicked_group) {
            $( "#" + checkedCheckboxes[i].id ).prop('checked', false);

        }
    }

    show_cdr();
}
//check all checkboxes by group (box)
function check_all_by_group(checkbox) {
    var clicked_group = checkbox.classList[1];
    if(checkbox.checked == true) {
        $( "." + clicked_group ).not(checkbox).prop('checked', true);
    } else {
        $( "." + clicked_group ).not(checkbox).prop('checked', false);
    }
}

function check_all_by_chargingClass(checkbox) {
    var clicked_group = checkbox.classList[1];
    var clicked_chargingClass = checkbox.classList[2];
    
    //dodelat podminku, aby se zaskrtly jen CDR v danem boxu
    if(checkbox.checked == true) {
        $( "." + clicked_chargingClass + "." + clicked_group).not(checkbox).prop('checked', true);
        show_cdr();
    } else {
        $( "." + clicked_chargingClass + "." + clicked_group ).not(checkbox).prop('checked', false);
        show_cdr();
    }

}

function check_all_by_chargingCode(checkbox) {
    var clicked_group = checkbox.classList[1];
    var clicked_chargingCode = checkbox.classList[3];

    if(checkbox.checked == true) {
        $( "." + clicked_chargingCode + "." + clicked_group ).not(checkbox).prop('checked', true);
        show_cdr();
    } else {
        $( "." + clicked_chargingCode + "." + clicked_group ).not(checkbox).prop('checked', false);
        show_cdr();
    }
    
}

//clicking on name cell
function check_cdr(table_td) {
   
    var checkbox = $( table_td ).parent().find('input.cdr:checkbox');
    //console.log(checkbox);
    

    if(checkbox.prop('checked') == false) {
        checkbox.prop('checked', true);

        var clicked_group = checkbox.attr('class').split(" ")[1];

        var checkedCheckboxes = $( 'input[name^=cdr]:checked');
        

        for(i = 0; i < checkedCheckboxes.length; i++) {
            if(checkedCheckboxes[i].classList[1] != clicked_group) {
                $( "#" + checkedCheckboxes[i].id ).prop('checked', false);

            }
        }

    } else {
        //if any unchecked CDR exists, uncheck parent group
        var clicked_chargingClass = checkbox.attr('class').split(" ")[2];
        var clicked_chargingCode = checkbox.attr('class').split(" ")[3];

        $( '.cdr_all' ).not(checkbox).prop('checked', false);
        $( '.' + clicked_chargingCode + '.cdr-chargingCode' ).not(checkbox).prop('checked', false);
        $( '.' + clicked_chargingClass + '.cdr-chargingClass' ).not(checkbox).prop('checked', false);
        checkbox.prop('checked', false);
        
    }
    show_cdr();
    show_info_cdrCount();
    enable_download();

}



