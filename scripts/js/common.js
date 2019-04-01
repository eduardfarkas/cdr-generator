//--------e and E can not be placed in input tag-----------//
function FilterInput(event) {
    var keyCode = ('which' in event) ? event.which : event.keyCode;

    isNotWanted = (keyCode == 69 || keyCode == 109 || keyCode == 107 || keyCode == 187 || keyCode == 189 || keyCode == 190 || keyCode == 188 || keyCode == 110);
    return !isNotWanted;
}
function handlePaste (e) {
    var clipboardData, pastedData;

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text').toUpperCase();

    if(
        pastedData.indexOf('E') > -1 ||
        pastedData.indexOf('-') > -1 ||
        pastedData.indexOf(',') > -1 ||
        pastedData.indexOf('.') > -1 ||
        pastedData.indexOf('+') > -1) {
        //alert('found an E');
        e.stopPropagation();
        e.preventDefault();
    }
}
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
 }
//---------------------MARK WRONG INPUTS---------------------//
function check_input(which) {
    var msisdn = $( '#msisdn' ).val();
    var imsi = $( '#imsi' ).val();
    var data_units = $( '#data_units' ).val();
    var voice_units = $( '#voice_units' ).val();
    var sms_units = $( '#sms_units' ).val();
    var mms_units = $( '#mms_units' ).val();

    switch(which) {
        case "msisdn":
            if(msisdn.toString().length > 12) {
                $( '#msisdn' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#msisdn' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#msisdn' ).notify("Maximum 12 znaků", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
            }
            if(msisdn.toString().length < 12) {
                $( '#msisdn' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#msisdn' ).css('border', '1px solid rgba(255, 0, 0, 1)');

            } else {
                $( '#msisdn' ).css('box-shadow', '0px 0px 5px rgba(43, 163, 6, 1)');
                $( '#msisdn' ).css('border', '1px solid rgba(43, 163, 6, 1)');
            }
            break;
        case "imsi":
            if(imsi.toString().length > 15) {
                $( '#imsi' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#imsi' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#imsi' ).notify("Maximum 15 znaků", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
            }
            if(imsi.toString().length < 15) {
                $( '#imsi' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#imsi' ).css('border', '1px solid rgba(255, 0, 0, 1)');

            } else {
                $( '#imsi' ).css('box-shadow', '0px 0px 5px rgba(43, 163, 6, 1)');
                $( '#imsi' ).css('border', '1px solid rgba(43, 163, 6, 1)');
            }
            break;
        case "data":
            if(data_units < 1) {
                $( '#data_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#data_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#data_units' ).notify("Usage musí být alespoň 1", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
            } else if(data_units > 19999999998 || data_units.toString().length > 11) {
                $( '#data_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#data_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#data_units' ).notify("Usage je moc velká (max. 19999999998)", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
                $( '#data_units' ).val("19999999998");
                $( '#data_units' ).text("19999999998");
                setTimeout( function() {
                    check_input('data');
                }, 3000);
            } else {
                $( '#data_units' ).css('box-shadow', '0px 0px 5px rgba(43, 163, 6, 1)');
                $( '#data_units' ).css('border', '1px solid rgba(43, 163, 6, 1)');
            }
            break
        case "voice":
            if(voice_units < 1) {
                $( '#voice_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#voice_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#voice_units' ).notify("Usage musí být alespoň 1", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
            } else if(voice_units > 999999 || voice_units.toString().length > 6) {
                $( '#voice_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#voice_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#voice_units' ).notify("Usage je moc velká (max. 999999)", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
                $( '#voice_units' ).val("999999");
                $( '#voice_units' ).text("999999");
                setTimeout( function() {
                    check_input('voice');
                }, 3000);
            } else {
                $( '#voice_units' ).css('box-shadow', '0px 0px 5px rgba(43, 163, 6, 1)');
                $( '#voice_units' ).css('border', '1px solid rgba(43, 163, 6, 1)');
            }
            break
        case "sms":
            if(sms_units < 1) {
                $( '#sms_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#sms_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#sms_units' ).notify("Usage musí být alespoň 1", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
            } else if(sms_units > 100 || sms_units.toString().length > 3) {
                $( '#sms_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#sms_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#sms_units' ).notify("Usage je moc velká (max. 100)", {
                        className: "error",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        position: "right",
                        elementPosition: "right"
                });
                $( '#sms_units' ).val("100");
                $( '#sms_units' ).text("100");
                setTimeout( function() {
                    check_input('sms');
                }, 3000);
            } else {
                $( '#sms_units' ).css('box-shadow', '0px 0px 5px rgba(43, 163, 6, 1)');
                $( '#sms_units' ).css('border', '1px solid rgba(43, 163, 6, 1)');
            }
            break
        case "mms":
            if(mms_units < 1) {
                $( '#mms_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#mms_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#mms_units' ).notify("Usage musí být alespoň 1", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
            } else if(mms_units > 100 || mms_units.toString().length > 3) {
                $( '#mms_units' ).css('box-shadow', '0px 0px 5px rgba(255, 0, 0, 1)');
                $( '#mms_units' ).css('border', '1px solid rgba(255, 0, 0, 1)');
                $( '#mms_units' ).notify("Usage je moc velká (max. 100)", {
                        className: "error",
                        position: "right",
                        clickToHide: true,
                        autoHideDelay: 3000,
                        elementPosition: "right"
                });
                $( '#mms_units' ).val("100");
                $( '#mms_units' ).text("100");
                setTimeout( function() {
                    check_input('mms');
                }, 3000);
            } else {
                $( '#mms_units' ).css('box-shadow', '0px 0px 5px rgba(43, 163, 6, 1)');
                $( '#mms_units' ).css('border', '1px solid rgba(43, 163, 6, 1)');
            }
            break
    }
}
//---------------------TIMESTAMP---------------------//
function add_zero_if_less_than_10(number) {
    return (number < 10) ? ("0" + number.toString()) : number.toString();
}
function timestamp() { //STRING
    var dateObj = new Date();

    var month = add_zero_if_less_than_10((dateObj.getUTCMonth() + 1)); //months from 1-12
    var day = add_zero_if_less_than_10(dateObj.getUTCDate());
    var year = add_zero_if_less_than_10(dateObj.getUTCFullYear());
    var seconds = add_zero_if_less_than_10(dateObj.getSeconds());
    var minutes = add_zero_if_less_than_10(dateObj.getMinutes());
    var hour = add_zero_if_less_than_10(dateObj.getHours());

    return  (year + month + day + hour + minutes + seconds);
}
//-------------------FORMAT VOICE UNITS---------------------//
function format_voice_units(number) {
    n = number.toString().length;
    var spaces = "";
    for(i = 0; i < (6 - n); i++) {
        spaces += " ";
    }
    return (number.toString() + spaces);
}
//------------------DOWNLOAD / UPLOAD USAGE-----------------//
function add_zeros_to_10_cifers(number) {
    n = number.toString().length;
    if(n < 11) {
        var zeros = "";
        for(i = 0; i < (10 - n); i++) {
            zeros += "0";
        }
        return (zeros + number.toString());
    }
}
function format_usage(volume) {
    var download = 0;
    var upload = 0;
    if(volume < 19999999999) {
        if(volume % 2 == 0) {
            download = volume / 2;
            upload = volume / 2;
        } else {
            download = ((volume / 2) + 1) - 0.5;
            upload = (volume / 2) - 0.5;
        }
        return (add_zeros_to_10_cifers(download) + add_zeros_to_10_cifers(upload));
    }
}
//------------INFO----------//
function show_info_msisdn() {
    $( '#info_msisdn' ).text( $( '#msisdn' ).val() );
    if($( '#msisdn' ).val().toString().length != 12) {
        $( '#info_msisdn_parent' ).css('background', 'rgba(255, 0, 0, 0.1)');
    } else {
        $( '#info_msisdn_parent' ).css('background', 'transparent');
    }

}
function show_info_imsi() {
    $( '#info_imsi' ).text( $( '#imsi' ).val() );
    if($( '#imsi' ).val().toString().length != 15) {
        $( '#info_imsi_parent' ).css('background', 'rgba(255, 0, 0, 0.1)');
    } else {
        $( '#info_imsi_parent' ).css('background', 'transparent');
    }
}
function show_info_operator() {
    $( '#info_operator' ).text( $( 'input[name=operator]:checked' ).val().toUpperCase() );
    show_info_cdrCount();
}
function show_info_usage() {
    $( '#info_usageType' ).text( $( 'input[name=usage]:checked' ).val().toUpperCase() );
    show_info_cdrCount();
}
function show_info_cdrCount() {
    setTimeout(function () {
        $( '#info_cdrCount' ).text( $( '.cdr').length );
        if($( $( 'input[class^=cdr]:checked' )[0]).length < 1) {
            $( '#info_checked_cdrCount' ).text( $( 'input[name^=cdr]:checked').length + " z 0");
        } else {
            var clicked_group = $( 'input[class^=cdr]:checked' )[0].classList[1];
            $( '#info_checked_cdrCount' ).text( $( '.cdr:checked').length + " z " + $( '.cdr.' + clicked_group ).length);
        }
    }, 600);
}
