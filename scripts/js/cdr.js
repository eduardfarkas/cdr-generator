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
                        "<th class='th_checkbox'><input type='checkbox' id='group-" + i + "' name='cdr' class='cdr_all " + groups[i] + "' onchange='check_all_by_group(this); show_cdr(); group_check(this); enable_download(); show_info_cdrCount(); setBackground();'></th>" +
                        "<th class='th_comment'>Popis</th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody>";

        //[id, chargingClass, group, chargingCode]
        var lastCdr =       [-1, 0, -1, 0]; //last used cdr
        var currentCdr =    [-1, 0, -1, 0, false];
        var nextCdr =       [-1, 0, -1, 0, false]; // true = is last, false = not last

        for(j = 0; j < cdrs.length; j++) { //for each cdr
            if(cdrs[j].group == groups[i]) { //set box for each cdrs group

                currentCdr = [
                    cdrs[j].id,
                    cdrs[j].name.substring(0, 2),
                    groups[i],
                    cdrs[j].name
                ];
                nextCdr = [
                    (j+1 == cdrs.length) ? (cdrs[j].id) : (cdrs[j+1].id), //id
                    (j+1 == cdrs.length) ? (cdrs[j].name.substring(0, 2)) : (cdrs[j+1].name.substring(0, 2)), //charging class
                    (j+1 == cdrs.length) ? (cdrs[j].group) : (cdrs[j+1].group),
                    (j+1 == cdrs.length) ? (cdrs[j].name) : (cdrs[j+1].name),
                    (j+1 == cdrs.length) ? ( true ) : (false)
                ];

                //-------------------------------------
                // CHARGING CLASS COLUMN
                //-------------------------------------
                var chargingClass = "";

                if(
                    (currentCdr[0] > lastCdr[0] && currentCdr[1] != lastCdr[1]) ||
                    currentCdr[2] != lastCdr[2]
                ) {
                    if(
                        (nextCdr[1] == currentCdr[1] && nextCdr[2] == currentCdr[2]) 
                    ) { //show start image
                        chargingClass = "<td class='cdr-chargingClass cdr-chargingClass-start'><div><img src='images/charging-class-start.png'></img><input type='checkbox' name='cdr-chargingClass' class='cdr-chargingClass " + groups[i] + " " + cdrs[j].name.substring(0, 2) + "' id='group" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); show_info_cdrCount(); check_all_by_chargingClass(this); setBackground();'></div></td>";
                    }
                    else { //do not show start image
                        chargingClass = "<td class='cdr-chargingClass cdr-chargingClass-start'><input type='checkbox' name='cdr-chargingClass' class='cdr-chargingClass " + groups[i] + " " + cdrs[j].name.substring(0, 2) + "' id='group" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); enable_download(); show_info_cdrCount(); check_all_by_chargingClass(this); setBackground();'></td>";
                    }
                }
                else if(
                    (nextCdr[0] > currentCdr[0] && nextCdr[1] != currentCdr[1]) ||
                    nextCdr[4] == true ||
                    currentCdr[2] != nextCdr[2]
                ) {
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
                if(
                    currentCdr[0] > lastCdr[0] && currentCdr[3] != lastCdr[3]
                ) {
                    if(
                        nextCdr[3] != currentCdr[3] ||
                        nextCdr[4] == true
                    ) {
                        chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-start'></td>";
                    }
                    else {
                        chargingCode = "<td class='cdr-chargingCode cdr-chargingCode-start'><div><img src='images/charging-code-start.png'></img><input type='checkbox' name='cdr_chargingCode' class='cdr-chargingCode " + groups[i] + " " + cdrs[j].name.substring(0, 2) + " " + cdrs[j].name + "' id='group" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); show_info_cdrCount(); check_all_by_chargingCode(this); setBackground(this);'></div></td>";
                    }
                }
                else if(
                    (nextCdr[0] > currentCdr[0] && nextCdr[3] != currentCdr[3]) ||
                    nextCdr[4] == true ||
                    currentCdr[2] != nextCdr[2]
                ) {
                    if(
                        lastCdr[3] != currentCdr[3]
                    ) {
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
                    "<td class='cdr_checkbox'><input type='checkbox' name='cdr' class='cdr " + groups[i] + " " + cdrs[j].name.substring(0, 2) + " " + cdrs[j].name + " " + cdrs[j].extension + "' id='" + cdrs[j].id + "' oninput='show_cdr(); group_check(this); enable_download(); show_info_cdrCount(); setBackground();'></td>" +
                    "<td class='cdr_comment'>" + cdrs[j].comment + "</td>"
                "</tr>";
            }
        }

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
    var operator = $('input[name=operator]:checked', '.input_form').val();
    var usageType = $('input[name=usage]:checked', '.input_form').val();
    var msisdn = $('#msisdn').val();
    var imsi = $('#imsi').val();
    
    var sms_mms_units = $( '#sms_mms_units').val();

    var checkedCheckboxes = $( 'input[class~=cdr]:checked');
    var content = "";

    if($( '#file_activation' ).prop('disabled') == false && $( '#file_activation' ).prop('checked') == true) {
         /* ----- */
        var fileInput = document.querySelector('input[type=file]');
        var file = fileInput.files[0]; 
        var dataArray = new Array();
        if (file) {
            var reader = new FileReader();
            reader.onload = function(event) { 
                var contents = event.target.result;
                /*console.log( "Got the file.\n" 
                    +"name: " + file.name + "\n"
                    +"type: " + file.type + "\n"
                    +"size: " + file.size + " bytes\n"
                    + "obsah: \n" + contents
                );*/

                dataArray = contents.split("\n").map(function(e) {
                    return e.split("\t").map(String);
                });

                var faultDataRows = "";

                for(d = 0; d < dataArray.length; d++) {
                    if(dataArray[d][0].length != 12 && dataArray[d][1].length != 15) {
                        faultDataRows += "Data na řádku: " + (d+1) + " nejsou validní a jsou přeskočena\n";
                        continue;
                    }
                    var cdrs = get_data(operator, usageType, dataArray[d][0], dataArray[d][1].replace(/(\r\n|\n|\r)/gm, ""), timestamp());
                    
                    for(i = 0; i < checkedCheckboxes.length; i++) {
                        for(j = 0; j < cdrs.length; j++) { //for each cdr
                            if(cdrs[j].id == checkedCheckboxes[i].id) { //set box for each group
                                if(cdrs[j].extension == "xml") {
                                    content += cdrs[j].value + "\r\n";
                                    content += "----------------------------------------------------------------------------------------------------\r\n";
                                } else {
                
                                    if(usageType == "sms" || usageType == "mms") {
                                        for(k = 0; k < sms_mms_units; k++) {
                                            content += cdrs[j].value + "\r\n";
                                        }
                                    }
                                    else if(usageType != "sms" && usageType != "mms") {
                                        content += cdrs[j].value + "\r\n";
                                    }
                                }
                            }
                        }
                    }
                    $( '#cdr_container').val(content);
                } if(faultDataRows != "") {
                    alert(faultDataRows);
                }
            }
            reader.readAsText(file);
        } else { 
            alert("Nepodařilo se načíst soubor.");
        }
        /* ----- */
    }
    else {
        var cdrs = get_data(operator, usageType, msisdn, imsi, timestamp());
        for(i = 0; i < checkedCheckboxes.length; i++) {
            for(j = 0; j < cdrs.length; j++) { //for each cdr
                if(cdrs[j].id == checkedCheckboxes[i].id) { //set box for each group
                    if(cdrs[j].extension == "xml") {
                        content += cdrs[j].value + "\r\n";
                        content += "----------------------------------------------------------------------------------------------------\r\n";
                    } else {
    
                        if(usageType == "sms" || usageType == "mms") {
                            for(k = 0; k < sms_mms_units; k++) {
                                content += cdrs[j].value + "\r\n";
                            }
                        }
                        else if(usageType != "sms" && usageType != "mms") {
                            content += cdrs[j].value + "\r\n";
                        }
                    }
                }
            }
        }
        $( '#cdr_container').val(content);
    }
}

function enable_download() {
    var checkedCheckboxes = $( 'input[class~=cdr]:checked');
    if(checkedCheckboxes.length > 0) {
        $( '#download_button' ).prop('disabled', false);
    } else {
        $( '#download_button' ).prop('disabled', true);
    }
}

function download_cdr() {
    var confirm_result = true;
    if(($( '#file_activation' ).prop('disabled') == true) || ($( '#file_activation' ).prop('disabled') == false && $( '#file_activation' ).prop('checked') == false)) {
        if($( '#msisdn' ).val().toString().length != 12 && $( '#imsi' ).val().toString().length != 15) {
            confirm_result = confirm("MSISDN nemá 12 cifer a IMSI nemá 15 cifer, chceš pokračovat?");
        }
        if($( '#msisdn' ).val().toString().length != 12 && $( '#imsi' ).val().toString().length == 15) {
            confirm_result = confirm("MSISDN nemá 12 cifer, chceš pokračovat?");
        }
        if($( '#imsi' ).val().toString().length != 15 && $( '#msisdn' ).val().toString().length == 12) {
            confirm_result = confirm("IMSI nemá 15 cifer, chceš pokračovat?");
        }
    }
    
    if($( '#voice_units' ).val() < 1) {
        confirm_result = confirm("VOICE jednotky jsou menší než 1, chceš pokračovat?");
    }
    if($( '#sms_mms_units' ).val() < 1) {
        confirm_result = confirm("SMS jednotky jsou menší než 1, chceš pokračovat?");
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

        //vymyslet jak vytáhnout koncovku
        var extension = $( 'input[class~=cdr]:checked' )[0].classList[4];
       

        if(extension == "xml") {
            var data = get_data("all", "all");


            if($( 'input[class~=cdr]:checked' ).length > 1) {
                //ZIP files
                var zip = new JSZip();

                var name_array = [];

                for(i = 0; i < $( 'input[class~=cdr]:checked' ).length; i++) {
                    $.each( data, function( data_operator, data_operators ) {
                        $.each( data_operators, function( data_usageType, cdr ) {
                            for(j = 0; j < cdr.length; j++) { //for each cdr
                                if(cdr[j].id == $( 'input[class~=cdr]:checked' )[i].id) { //set box for each group
                                    name_array[i] = timestamp() + "_" + cdr[j].comment.split(" ").join("_").replace("->", "to").replace("ČR", "CR") + "." + cdr[j].extension;
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
                    add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class~=cdr]:checked' )[0].classList[4]);
                });

            } else {
                var content = $( '#cdr_container' ).val().split("----------------------------------------------------------------------------------------------------\r\n")[0];
                var filename = "";
                $.each( data, function( data_operator, data_operators ) {
                    $.each( data_operators, function( data_usageType, cdr ) {
                        for(j = 0; j < cdr.length; j++) { //for each cdr
                            if(cdr[j].id == $( 'input[class~=cdr]:checked' )[0].id) { //set box for each group
                                filename = timestamp() + "_" + cdr[j].comment.split(" ").join("_").replace("->", "to").replace("ČR", "CR") +"." + cdr[j].extension;
                            }
                        }
                    });
                });


                var blob = new Blob([content], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
                add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class~=cdr]:checked' )[0].classList[4]);
            }
        } else {
            var operator = $('input[name=operator]:checked', '.input_form').val();
            if(operator == "prepaid") {
                var content = $( '#cdr_container' ).val();
                var filename = "xdr_" + timestamp() + "_cz_" + extension + "_" + $( '#msisdn' ).val() + ".xdr";

                var blob = new Blob([content], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
                if($('input[name=usage]:checked', '.input_form').val() == "sms") {
                    add_download_info(($( '.cdr:checked' ).length) * $( '#sms_mms_units' ).val(), $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class~=cdr]:checked' )[0].classList[4]);
                    console.log("sms, mms usage download info");
                }
                if ($('input[name=usage]:checked', '.input_form').val() == "voice" || $('input[name=usage]:checked', '.input_form').val() == "data") {
                    add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class~=cdr]:checked' )[0].classList[4]);
                    console.log("voice/data usage download info");
                }
            } else {
                var content = $( '#cdr_container' ).val();
                var filename = timestamp() + "_" +$( '#msisdn' ).val() + "." + extension;

                var blob = new Blob([content], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
                if($('input[name=usage]:checked', '.input_form').val() == "sms") {
                    add_download_info(($( '.cdr:checked' ).length) * $( '#sms_mms_units' ).val(), $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class~=cdr]:checked' )[0].classList[4]);
                    console.log("sms usage download info");
                }
                if ($('input[name=usage]:checked', '.input_form').val() == "voice" || $('input[name=usage]:checked', '.input_form').val() == "data") {
                    add_download_info($( '.cdr:checked' ).length, $( 'input[name=operator]:checked' ).val(), $( 'input[name=usage]:checked' ).val(), $( 'input[class~=cdr]:checked' )[0].classList[4]);
                    console.log("voice/data usage download info");
                }
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
    enable_download();
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
    enable_download();
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
    setBackground();
}
/**-----------------FILE INPUT---------------/ */

//check for right extension
function checkFile(sender) {
    var fileInput = document.querySelector('input[type=file]');
    var filenameContainer = document.querySelector('#filename');

    var validExts = new Array(".txt");
    var fileExt = sender.value;
    

    fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
    
    if (validExts.indexOf(fileExt) < 0 && fileExt != "") {
        alert("Nevalidní formát. Hoď sem " +
                 validExts.toString());
        $(sender).val("");

        filenameContainer.innerText = "Vybrat soubor";
        $.notify("Soubor nenahrán", "error");
        $( '#file_activation' ).prop('disabled', true);
        $( 'div.input_file' ).css('background-color', 'orange');
        
        return false;
    }
    if (fileExt == null || fileExt == "") {
        filenameContainer.innerText = "Vybrat soubor";
        $.notify("Soubor nenahrán", "error");
        $( '#file_activation' ).prop('disabled', true);
        $( 'div.input_file' ).css('background-color', 'orange');
        alert("Nezvolen žádný soubor");

        return false;
    }
    else {    
        filenameContainer.innerText = fileInput.value.split('\\').pop();
        $.notify("Nahrán soubor: " + fileInput.value.split('\\').pop(), "success");
        $( '#file_activation' ).prop('disabled', false);
        $( 'div.input_file' ).css('background-color', 'green');  

        return true; 
    }
}
function fileInput() {
    if($( '#file_activation' ).prop('disabled') == false && $( '#file_activation' ).prop('checked') == true) {
        $( '#msisdn' ).prop( "disabled", true );
        $( '#imsi' ).prop( "disabled", true );

        $( '#msisdn' ).css('background-color', 'rgb(180, 180, 180)');
        $( '#msisdn' ).css('border', '1px solid rgb(180, 180, 180)');
        $( '#imsi' ).css('background-color', 'rgb(180, 180, 180)');
        $( '#imsi' ).css('border', '1px solid rgb(180, 180, 180)');

        $.notify("Načítání ze souboru je aktivní", "success");
    }
    else {
        $( '#msisdn' ).prop( "disabled", false );
        $( '#imsi' ).prop( "disabled", false );

        $( '#msisdn' ).css('background-color', 'white');
        $( '#msisdn' ).css('border', '1px solid #DDDDDD')
        $( '#imsi' ).css('background-color', 'white');
        $( '#imsi' ).css('border', '1px solid #DDDDDD');

        $.notify("Načítání ze souboru je neaktivní", "error");
    }
}

