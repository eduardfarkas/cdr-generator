function get_data(checked_operator, checked_usageType) {
  /*

    group = extension of file

  */
  var msisdn = $('#msisdn').val();
  var imsi = $('#imsi').val();
  var data_units = format_usage($('#data_units').val());
  var voice_units = $('#voice_units').val();
  var formated_voice_units = format_voice_units($('#voice_units').val());
  var formated_apn_name = format_apn($('#apn').val());

  /*--------------------------------*/
  /*-------KOMENTÁŘ K ŘAZENÍ--------*/
  /*--------------------------------*/
  //pro správné fungování, musí všechny CDR být seřazeny podle chargingCode (tady pod "name")
  //dále je ale dělíme na GROUPy
  //tedy vždy připisujeme nové CDR ke správné GROUP a vždy SEŘAZENĚ

  var data =
  {
    prepaid: {
      voice: [  //groups: vmo_fdr10
        //**************************************
        //group vmo_fdr10
        //**************************************
        {
          name: "11001",
          comment: "voice do O2",
          value: "1020|" + msisdn + "||E0232420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11002",
          comment: "voice do T-Mobile",
          value: "1020|" + msisdn + "||E0205420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11003",
          comment: "voice do Vodafone",
          value: "1020|" + msisdn + "||E0213420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11004",
          comment: "voice do Ufon",
          value: "1020|" + msisdn + "||E0262420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11005",
          comment: "voice do VOA",
          value: "1020|" + msisdn + "||E2700420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11006",
          comment: "voice do VOB",
          value: "1020|" + msisdn + "||E2701420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11007",
          comment: "voice do VOC",
          value: "1020|" + msisdn + "||E2702420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11009",
          comment: "voice do VOF",
          value: "1020|" + msisdn + "||E2705420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11010",
          comment: "voice do VOE1",
          value: "1020|" + msisdn + "||E2707420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11011",
          comment: "voice do VOE2",
          value: "1020|" + msisdn + "||E2706420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11013",
          comment: "voice do VOD",
          value: "1020|" + msisdn + "||E2703420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11014",
          comment: "voice do Vectone",
          value: "1020|" + msisdn + "||E0265420777123456||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "11999",
          comment: "Voice/sms/mms to Unknown mobile",
          value: "1020|" + msisdn + "||E2708420602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "12099",
          comment: "voice fix",
          value: "1020|" + msisdn + "||420223456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13001",
          comment: "Voice InfoLines 1180",
          value: "1020|" + msisdn + "||4201180||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13002",
          comment: "Voice InfoLines 1181",
          value: "1020|" + msisdn + "||4201181||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13003",
          comment: "Voice InfoLines 1188",
          value: "1020|" + msisdn + "||4201188||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13004",
          comment: "Voice InfoLines 1224",
          value: "1020|" + msisdn + "||4201224||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13005",
          comment: "12xx 4 digits starts 12 (excluding 1224)",
          value: "1020|" + msisdn + "||4201211||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13006",
          comment: "12xxx five digits starts 12",
          value: "1020|" + msisdn + "||42012123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13007",
          comment: "13xxx five digits starts 13",
          value: "1020|" + msisdn + "||42013123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13008",
          comment: "141xx five digits starts 141",
          value: "1020|" + msisdn + "||42014112||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13009",
          comment: "14xxx 5 digits starts 14 except 141xx",
          value: "1020|" + msisdn + "||42014234||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "13010",
          comment: "606000606 exact match",
          value: "1020|" + msisdn + "||420606000606||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "14001",
          comment: "Voice to GreenLines",
          value: "1020|" + msisdn + "||420800000606||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "14002",
          comment: "Voice Emergency (15x 112)",
          value: "1020|" + msisdn + "||420158||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "14003",
          comment: "Voice Free HelpLines 116xxx",
          value: "1020|" + msisdn + "||420116123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17001",
          comment: "Voice Services with shared pay",
          value: "1020|" + msisdn + "||420813456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17002",
          comment: "Voice Services with universal number",
          value: "1020|" + msisdn + "||420841456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17003",
          comment: "Voice Virtual Call Cards 82%",
          value: "1020|" + msisdn + "||420823456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17004",
          comment: "Voice Others VoIP 91%",
          value: "1020|" + msisdn + "||420913456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17005",
          comment: "Voice Others Voicemail 93%, 96%",
          value: "1020|" + msisdn + "||420933456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17006",
          comment: "Voice Others Private Nets 95%, 97%",
          value: "1020|" + msisdn + "||420953456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "17007",
          comment: "Voice Services others 8%",
          value: "1020|" + msisdn + "||420893456789||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        /*
        {
            name: "18001",
            comment: "",
            value: "1020|" + msisdn + "||420447537410297||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
            group: "vmo_fdr10"
        },
        */
        {
          name: "18002",
          comment: "Voice to IVR (*30)",
          value: "1020|" + msisdn + "||420A30||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18003",
          comment: "Voice to IVR (*33)",
          value: "1020|" + msisdn + "||420A33||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18101",
          comment: "CC VOA",
          value: "1020|" + msisdn + "||420267267061||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18101",
          comment: "CC VOB",
          value: "1020|" + msisdn + "||420841112255||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18101",
          comment: "CC VOD",
          value: "1020|" + msisdn + "||420778820820||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18103",
          comment: "IVR VOA",
          value: "1020|" + msisdn + "||420A61||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18103",
          comment: "IVR VOB",
          value: "1020|" + msisdn + "||420A25||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "18103",
          comment: "IVR VOD",
          value: "1020|" + msisdn + "||420A88||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19001",
          comment: "VOA + VOB",
          value: "1020|" + msisdn + "||48602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19002",
          comment: "VOA + VOB",
          value: "1020|" + msisdn + "||86602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Albánie",
          value: "1020|" + msisdn + "||355602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Andorra",
          value: "1020|" + msisdn + "||376602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Bělorusko",
          value: "1020|" + msisdn + "||375602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Bosna a Hercegovina",
          value: "1020|" + msisdn + "||387602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Černá Hora",
          value: "1020|" + msisdn + "||382602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Makedonie",
          value: "1020|" + msisdn + "||389602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Moldavsko",
          value: "1020|" + msisdn + "||373602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Monako",
          value: "1020|" + msisdn + "||377602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB San Marino",
          value: "1020|" + msisdn + "||378602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Srbsko",
          value: "1020|" + msisdn + "||381602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Švýcarsko",
          value: "1020|" + msisdn + "||41602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Ukrajina",
          value: "1020|" + msisdn + "||380602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19004",
          comment: "VOA + VOB Wallis a Futuna",
          value: "1020|" + msisdn + "||681602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19022",
          comment: "VOD Vietnam",
          value: "1020|" + msisdn + "||84602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19023",
          comment: "VOD Ukrajina",
          value: "1020|" + msisdn + "||380602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19024",
          comment: "VOD Rusko",
          value: "1020|" + msisdn + "||7602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19025",
          comment: "VOD Polsko",
          value: "1020|" + msisdn + "||48602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19026",
          comment: "VOD Německo",
          value: "1020|" + msisdn + "||49602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19027",
          comment: "VOD Slovensko",
          value: "1020|" + msisdn + "||421602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19028",
          comment: "VOD Čína",
          value: "1020|" + msisdn + "||86602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19029",
          comment: "VOD Bulharsko + EU (mimo državy)",
          value: "1020|" + msisdn + "||359602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19030",
          comment: "VOD Rumunsko",
          value: "1020|" + msisdn + "||40602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19031",
          comment: "VOD Rakousko",
          value: "1020|" + msisdn + "||43602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19032",
          comment: "VOD International 1",
          value: "1020|" + msisdn + "||61602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19033",
          comment: "VOD International 2",
          value: "1020|" + msisdn + "||35502123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19034",
          comment: "VOD International 3",
          value: "1020|" + msisdn + "||53602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19035",
          comment: "VOD International 4",
          value: "1020|" + msisdn + "||247602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "19999",
          comment: "Voice/sms/mms from ČR to unknown international",
          value: "1020|" + msisdn + "||883602123123||42060202510||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20601",
          comment: "roam voice MO EU -> ČR",
          value: "1020|" + msisdn + "||420602020000||46602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20602",
          comment: "roam voice MO EU -> EU",
          value: "1020|" + msisdn + "||460123123123||46602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20603",
          comment: "roam voice MO EU -> nonEU",
          value: "1020|" + msisdn + "||355123123123||46602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20604",
          comment: "roam voice MO EU -> WORLD",
          value: "1020|" + msisdn + "||100123123123||46602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20605",
          comment: "roam voice MO EU -> UNKNOWN",
          value: "1020|" + msisdn + "||214602020000||46602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20606",
          comment: "roam voice MO nonEU -> ČR",
          value: "1020|" + msisdn + "||420602020000||355602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20607",
          comment: "roam voice MO nonEU -> EU",
          value: "1020|" + msisdn + "||460123123123||355602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20608",
          comment: "roam voice MO nonEU -> nonEU",
          value: "1020|" + msisdn + "||355123123123||355602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20609",
          comment: "roam voice MO nonEU -> WORLD",
          value: "1020|" + msisdn + "||100123123123||355602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20610",
          comment: "roam voice MO nonEU -> UNKNOWN",
          value: "1020|" + msisdn + "||214602020000||355602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20611",
          comment: "roam voice MO WORLD -> ČR",
          value: "1020|" + msisdn + "||420602020000||120602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20612",
          comment: "roam voice MO WORLD -> EU",
          value: "1020|" + msisdn + "||460123123123||120602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20613",
          comment: "roam voice MO WORLD -> nonEU",
          value: "1020|" + msisdn + "||355123123123||120602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20614",
          comment: "roam voice MO WORLD -> WORLD",
          value: "1020|" + msisdn + "||100123123123||120602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20615",
          comment: "roam voice MO WORLD -> UNKNOWN",
          value: "1020|" + msisdn + "||214602020000||120602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        {
          name: "20997",
          comment: "Voice/sms/mms from other unknown",
          value: "1020|" + msisdn + "||46602020000||214602020000||0|" + voice_units + "|401D413804210A||" + timestamp() + "|",
          group: "vmo_fdr10"
        },
        //**************************************
        //group vmt_fdr10
        //**************************************
        {
          name: "20601",
          comment: "VOA roam voice MT EU -> ČR",
          value: "1015|421602020001|" + msisdn + "|421123123123|0|" + voice_units + "|424101361244BE||" + timestamp() + "|",
          group: "vmt_fdr10"
        },
        {
          name: "20601",
          comment: "VOB roam voice MT EU -> ČR",
          value: "1025|421602020001|" + msisdn + "|421123123123|0|" + voice_units + "|424101361244BE||" + timestamp() + "|",
          group: "vmt_fdr10"
        }
      ],
      sms: [ //groups: smo_umts06, smo_umts08, smo_gsm41
        //**************************************
        //group smo_gsm41
        //**************************************
        {
          name: "10003",
          comment: "Premium SMS ordering SMS",
          value: msisdn + "|42090145|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11001",
          comment: "sms do O2",
          value: msisdn + "|E0232420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11002",
          comment: "sms do T-Mobile",
          value: msisdn + "|E0205420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11003",
          comment: "sms do Vodafone",
          value: msisdn + "|E0213420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11004",
          comment: "sms do Ufon",
          value: msisdn + "|E0262420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11005",
          comment: "sms do VOA",
          value: msisdn + "|E2700420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11006",
          comment: "sms do VOB",
          value: msisdn + "|E2701420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11007",
          comment: "sms do VOC",
          value: msisdn + "|E2702420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11009",
          comment: "sms do VOF",
          value: msisdn + "|E2705420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11010",
          comment: "sms do VOE1",
          value: msisdn + "|E2707420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11011",
          comment: "sms do VOE2",
          value: msisdn + "|E2706420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11013",
          comment: "sms do VOD",
          value: msisdn + "|E2703420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11014",
          comment: "sms do Vecotone",
          value: msisdn + "|E0265420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "11999",
          comment: "Voice/sms/mms to Unknown mobile",
          value: msisdn + "|E2708420602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "12099",
          comment: "sms fix",
          value: msisdn + "|420223456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13004",
          comment: "InfoLines 1224",
          value: msisdn + "|4201224|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13005",
          comment: "12xx 4 digits starts 12 (excluding 1224)",
          value: msisdn + "|4201211|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13006",
          comment: "12xxx five digits starts 12",
          value: msisdn + "|42012123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13007",
          comment: "13xxx five digits starts 13",
          value: msisdn + "|42013123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13008",
          comment: "141xx five digits starts 141",
          value: msisdn + "|42014112|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13009",
          comment: "14xxx 5 digits starts 14 except 141xx",
          value: msisdn + "|42014234|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "13010",
          comment: "606000606 exact match",
          value: msisdn + "|420606000606|E270042060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "14001",
          comment: "GreenLines",
          value: msisdn + "|420800000606|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "14003",
          comment: "Free HelpLines 116xxx",
          value: msisdn + "|420116123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "15051",
          comment: "dms 87777 order",
          value: msisdn + "|42087777|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17001",
          comment: "Voice Services with shared pay",
          value: msisdn + "|420813456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17002",
          comment: "Voice Services with universal number",
          value: msisdn + "|420841456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17003",
          comment: "Voice Virtual Call Cards 82%",
          value: msisdn + "|420823456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17004",
          comment: "Voice Others VoIP 91%",
          value: msisdn + "|420913456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17005",
          comment: "Voice Others Voicemail 93%, 96%",
          value: msisdn + "|420933456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17006",
          comment: "Voice Others Private Nets 95%, 97%",
          value: msisdn + "|420953456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "17007",
          comment: "Voice Services others 8%",
          value: msisdn + "|420893456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18001",
          comment: "smazaný key E2700",
          value: msisdn + "|447537410297|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18004",
          comment: "999555",
          value: msisdn + "|420999555|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18005",
          comment: "999888",
          value: msisdn + "|420999888|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18006",
          comment: "999333",
          value: msisdn + "|420999333|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18007",
          comment: "999222",
          value: msisdn + "|420999222|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18008",
          comment: "999111",
          value: msisdn + "|420999111|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18009",
          comment: "999xxx exact length",
          value: msisdn + "|420999123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18021",
          comment: "SMS s doručenkou (876xy)",
          value: msisdn + "|42087655|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18101",
          comment: "VOA",
          value: msisdn + "|420267267061|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18101",
          comment: "VOB",
          value: msisdn + "|420841112255|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18101",
          comment: "VOD",
          value: msisdn + "|420778820820|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18102",
          comment: "VOA",
          value: msisdn + "|420999340|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18102",
          comment: "VOB",
          value: msisdn + "|420999346|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "18102",
          comment: "VOD",
          value: msisdn + "|420999348|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19001",
          comment: "Voice/sms/mms from ČR to INTL zone 1",
          value: msisdn + "|48602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19002",
          comment: "Voice/sms/mms from ČR to INTL zone 2",
          value: msisdn + "|86602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19003",
          comment: "Voice/sms/mms from ČR to INTL zone 3",
          value: msisdn + "|8818602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Albánie",
          value: msisdn + "|355602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Andorra",
          value: msisdn + "|376602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Bělorusko",
          value: msisdn + "|375602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Bosna a Hercegovina",
          value: msisdn + "|387602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Černá Hora",
          value: msisdn + "|382602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Makedonie",
          value: msisdn + "|389602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Moldavsko",
          value: msisdn + "|373602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Monako",
          value: msisdn + "|377602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB San Marino",
          value: msisdn + "|378602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Srbsko",
          value: msisdn + "|381602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Švýcarsko",
          value: msisdn + "|41602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Ukrajina",
          value: msisdn + "|380602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19004",
          comment: "VOA + VOB Wallis a Futuna",
          value: msisdn + "|681602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19022",
          comment: "VOD Vietnam",
          value: msisdn + "|84602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19023",
          comment: "VOD Ukrajina",
          value: msisdn + "|380602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19024",
          comment: "VOD Rusko",
          value: msisdn + "|7602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19025",
          comment: "VOD Polsko",
          value: msisdn + "|48602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19026",
          comment: "VOD Německo",
          value: msisdn + "|49602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19027",
          comment: "VOD Slovensko",
          value: msisdn + "|421602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19028",
          comment: "VOD Čína",
          value: msisdn + "|86602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19029",
          comment: "VOD Bulharsko",
          value: msisdn + "|359602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19030",
          comment: "VOD Rumunsko",
          value: msisdn + "|40602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19031",
          comment: "VOD Rakousko",
          value: msisdn + "|43602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19032",
          comment: "VOD International 1",
          value: msisdn + "|61602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19033",
          comment: "VOD International 2",
          value: msisdn + "|35502123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19034",
          comment: "VOD International 3",
          value: msisdn + "|53602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19035",
          comment: "VOD International 4",
          value: msisdn + "|247602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "19999",
          comment: "Voice/sms/mms from ČR to unknown international",
          value: msisdn + "|883602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20601",
          comment: "roam EU -> ČR",
          value: msisdn + "|420602020000|46602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20602",
          comment: "roam EU -> EU",
          value: msisdn + "|46123123123|46602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20603",
          comment: "roam EU -> nonEU",
          value: msisdn + "|355123123123|46602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20604",
          comment: "roam EU -> WORLD",
          value: msisdn + "|100123123123|46602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20605",
          comment: "roam EU -> UNKNOWN",
          value: msisdn + "|214602020000|46602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20606",
          comment: "roam nonEU -> ČR",
          value: msisdn + "|420602020000|355602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20607",
          comment: "roam nonEU -> EU",
          value: msisdn + "|46123123123|355602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20608",
          comment: "roam nonEU -> nonEU",
          value: msisdn + "|355123123123|355602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20609",
          comment: "roam nonEU -> WORLD",
          value: msisdn + "|100123123123|355602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20610",
          comment: "roam nonEU -> UNKNOWN",
          value: msisdn + "|214602020000|355602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20611",
          comment: "roam WORLD -> ČR",
          value: msisdn + "|420602020000|120602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20612",
          comment: "roam WORLD -> EU",
          value: msisdn + "|46123123123|120602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20613",
          comment: "roam WORLD -> nonEU",
          value: msisdn + "|355123123123|120602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20614",
          comment: "roam WORLD -> WORLD",
          value: msisdn + "|100123123123|120602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20615",
          comment: "roam WORLD -> UNKNOWN",
          value: msisdn + "|214602020000|120602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        {
          name: "20997",
          comment: "Voice/sms/mms from other unknown",
          value: msisdn + "|46602020000|214602020000|401D413804210A||" + timestamp() + "|",
          group: "smo_gsm41"
        },
        //**************************************
        //group vas_npp01
        //**************************************
        {
          name: "15001",
          comment: "Premium Lines 900%",
          value: msisdn + "|36||10300||0|90010|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15002",
          comment: "Premium Lines 901%",
          value: msisdn + "|36||11300||0|90111|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15003",
          comment: "Premium Lines 902%",
          value: msisdn + "|36||12300||0|90212|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15004",
          comment: "Premium Lines 903%",
          value: msisdn + "|36||13300||0|90313|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15005",
          comment: "Premium Lines 904%",
          value: msisdn + "|36||14300||0|90414|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15006",
          comment: "Premium Lines 905%",
          value: msisdn + "|36||15300||0|90515|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15007",
          comment: "Premium Lines 906%",
          value: msisdn + "|36||16300||0|90616|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15008",
          comment: "Premium Lines 907%",
          value: msisdn + "|36||17300||0|90717|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15009",
          comment: "Premium Lines 908%",
          value: msisdn + "|36||18300||0|90818|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        {
          name: "15010",
          comment: "Premium Lines 909%",
          value: msisdn + "|36||19300||0|90919|||" + timestamp() + "|",
          group: "vas_npp01"
        },
        //**************************************
        //group vas_cdp03
        //**************************************
        {
          name: "15050",
          comment: "dms 87777 příjem obsahu",
          value: msisdn + "|35|SS30|||0|000000000000000000|||" + timestamp() + "|",
          group: "vas_cdp03"
        },
        {
          name: "15052",
          comment: "dms 87777 příjem obsahu",
          value: msisdn + "|35|SS60|||0|000000000000000000|||" + timestamp() + "|",
          group: "vas_cdp03"
        },
        {
          name: "15053",
          comment: "dms 87777 příjem obsahu",
          value: msisdn + "|35|SS90|||0|000000000000000000|||" + timestamp() + "|",
          group: "vas_cdp03"
        }
      ],
      mms: [ //groups: mmo_mms01
        //**************************************
        //group mmo_mms01
        //**************************************
        {
          name: "10002",
          comment: "MMS na email",
          value: msisdn + "|nejaky.email@o2.cz|420602020000|H0FkVcYSGwHnFwAAkLsg3h4EAAAAAAAA||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11001",
          comment: "sms do O2",
          value: msisdn + "|E0232420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11002",
          comment: "sms do T-Mobile",
          value: msisdn + "|E0205420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11003",
          comment: "sms do Vodafone",
          value: msisdn + "|E0213420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11004",
          comment: "sms do Ufon",
          value: msisdn + "|E0262420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11005",
          comment: "sms do VOA",
          value: msisdn + "|E2700420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11006",
          comment: "sms do VOB",
          value: msisdn + "|E2701420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11007",
          comment: "sms do VOC",
          value: msisdn + "|E2702420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11009",
          comment: "sms do VOF",
          value: msisdn + "|E2705420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11010",
          comment: "sms do VOE1",
          value: msisdn + "|E2707420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11011",
          comment: "sms do VOE2",
          value: msisdn + "|E2706420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11013",
          comment: "sms do VOD",
          value: msisdn + "|E2703420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11014",
          comment: "sms do Vecotone",
          value: msisdn + "|E0265420777123456|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "11999",
          comment: "Voice/sms/mms to Unknown mobile",
          value: msisdn + "|E2708420602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "12099",
          comment: "sms fix",
          value: msisdn + "|420223456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13004",
          comment: "InfoLines 1224",
          value: msisdn + "|4201224|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13005",
          comment: "12xx 4 digits starts 12 (excluding 1224)",
          value: msisdn + "|4201211|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13006",
          comment: "12xxx five digits starts 12",
          value: msisdn + "|42012123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13007",
          comment: "13xxx five digits starts 13",
          value: msisdn + "|42013123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13008",
          comment: "141xx five digits starts 141",
          value: msisdn + "|42014112|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13009",
          comment: "14xxx 5 digits starts 14 except 141xx",
          value: msisdn + "|42014234|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "13010",
          comment: "606000606 exact match",
          value: msisdn + "|420606000606|E270042060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "14001",
          comment: "GreenLines",
          value: msisdn + "|420800000606|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "14003",
          comment: "Free HelpLines 116xxx",
          value: msisdn + "|420116123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17001",
          comment: "Voice Services with shared pay",
          value: msisdn + "|420813456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17002",
          comment: "Voice Services with universal number",
          value: msisdn + "|420841456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17003",
          comment: "Voice Virtual Call Cards 82%",
          value: msisdn + "|420823456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17004",
          comment: "Voice Others VoIP 91%",
          value: msisdn + "|420913456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17005",
          comment: "Voice Others Voicemail 93%, 96%",
          value: msisdn + "|420933456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17006",
          comment: "Voice Others Private Nets 95%, 97%",
          value: msisdn + "|420953456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "17007",
          comment: "Voice Services others 8%",
          value: msisdn + "|420893456789|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18001",
          comment: "smazaný key E2700",
          value: msisdn + "|447537410297|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18004",
          comment: "999555",
          value: msisdn + "|420999555|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18005",
          comment: "999888",
          value: msisdn + "|420999888|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18006",
          comment: "999333",
          value: msisdn + "|420999333|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18007",
          comment: "999222",
          value: msisdn + "|420999222|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18008",
          comment: "999111",
          value: msisdn + "|420999111|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18009",
          comment: "999xxx exact length",
          value: msisdn + "|420999123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18021",
          comment: "SMS s doručenkou (876xy)",
          value: msisdn + "|42087655|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18101",
          comment: "VOA",
          value: msisdn + "|420267267061|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18101",
          comment: "VOB",
          value: msisdn + "|420841112255|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18101",
          comment: "VOD",
          value: msisdn + "|420778820820|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18102",
          comment: "VOA",
          value: msisdn + "|420999340|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18102",
          comment: "VOB",
          value: msisdn + "|420999346|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "18102",
          comment: "VOD",
          value: msisdn + "|420999348|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19001",
          comment: "Voice/sms/mms from ČR to INTL zone 1",
          value: msisdn + "|48602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19002",
          comment: "Voice/sms/mms from ČR to INTL zone 2",
          value: msisdn + "|86602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19003",
          comment: "Voice/sms/mms from ČR to INTL zone 3",
          value: msisdn + "|8818602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Albánie",
          value: msisdn + "|355602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Andorra",
          value: msisdn + "|376602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Bělorusko",
          value: msisdn + "|375602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Bosna a Hercegovina",
          value: msisdn + "|387602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Černá Hora",
          value: msisdn + "|382602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Makedonie",
          value: msisdn + "|389602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Moldavsko",
          value: msisdn + "|373602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Monako",
          value: msisdn + "|377602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB San Marino",
          value: msisdn + "|378602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Srbsko",
          value: msisdn + "|381602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Švýcarsko",
          value: msisdn + "|41602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Ukrajina",
          value: msisdn + "|380602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19004",
          comment: "VOA + VOB Wallis a Futuna",
          value: msisdn + "|681602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19022",
          comment: "VOD Vietnam",
          value: msisdn + "|84602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19023",
          comment: "VOD Ukrajina",
          value: msisdn + "|380602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19024",
          comment: "VOD Rusko",
          value: msisdn + "|7602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19025",
          comment: "VOD Polsko",
          value: msisdn + "|48602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19026",
          comment: "VOD Německo",
          value: msisdn + "|49602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19027",
          comment: "VOD Slovensko",
          value: msisdn + "|421602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19028",
          comment: "VOD Čína",
          value: msisdn + "|86602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19029",
          comment: "VOD Bulharsko",
          value: msisdn + "|359602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19030",
          comment: "VOD Rumunsko",
          value: msisdn + "|40602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19031",
          comment: "VOD Rakousko",
          value: msisdn + "|43602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19032",
          comment: "VOD International 1",
          value: msisdn + "|61602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19033",
          comment: "VOD International 2",
          value: msisdn + "|35502123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19034",
          comment: "VOD International 3",
          value: msisdn + "|53602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19035",
          comment: "VOD International 4",
          value: msisdn + "|247602123123|420602023000|4542F00729||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "19999",
          comment: "Voice/sms/mms from ČR to unknown international",
          value: msisdn + "|883602123123|42060202510|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20601",
          comment: "roam EU -> ČR",
          value: msisdn + "|420602020000|46602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20602",
          comment: "roam EU -> EU",
          value: msisdn + "|46123123123|46602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20603",
          comment: "roam EU -> nonEU",
          value: msisdn + "|355123123123|46602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20604",
          comment: "roam EU -> WORLD",
          value: msisdn + "|100123123123|46602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20605",
          comment: "roam EU -> UNKNOWN",
          value: msisdn + "|214602020000|46602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20606",
          comment: "roam nonEU -> ČR",
          value: msisdn + "|420602020000|355602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20607",
          comment: "roam nonEU -> EU",
          value: msisdn + "|46123123123|355602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20608",
          comment: "roam nonEU -> nonEU",
          value: msisdn + "|355123123123|355602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20609",
          comment: "roam nonEU -> WORLD",
          value: msisdn + "|100123123123|355602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20610",
          comment: "roam nonEU -> UNKNOWN",
          value: msisdn + "|214602020000|355602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20611",
          comment: "roam WORLD -> ČR",
          value: msisdn + "|420602020000|120602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20612",
          comment: "roam WORLD -> EU",
          value: msisdn + "|46123123123|120602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20613",
          comment: "roam WORLD -> nonEU",
          value: msisdn + "|355123123123|120602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20614",
          comment: "roam WORLD -> WORLD",
          value: msisdn + "|100123123123|120602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20615",
          comment: "roam WORLD -> UNKNOWN",
          value: msisdn + "|214602020000|120602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20620",
          comment: "roam nonEU -> email",
          value: msisdn + "|nejaky.email@o2.cz|355602020000|H0FkVcYSGwHnFwAAkLsg3h4EAAAAAAAA||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20621",
          comment: "roam WORLD -> email",
          value: msisdn + "|nejaky.email@o2.cz|120602020000|H0FkVcYSGwHnFwAAkLsg3h4EAAAAAAAA||" + timestamp() + "|",
          group: "mmo_mms01"
        },
        {
          name: "20997",
          comment: "Voice/sms/mms from other unknown",
          value: msisdn + "|46602020000|214602020000|401D413804210A||" + timestamp() + "|",
          group: "mmo_mms01"
        }
      ],
      data: [ //groups: dti_grds03, dtu_grds03
        //**************************************
        //group dti_grds03
        //**************************************
        {
          name: "10004",
          comment: "PayGo 333",
          value: msisdn + "|10004|498591620|UTRAN||1897886976||" + timestamp() + "|",
          group: "dti_grds03"
        },
        /*
        {
          name: "20616",
          comment: "Data consumption in EU - 444",
          value: msisdn + "|212.77.15.194|20|" + data_units + "|1118591620|UTRAN||1897886976||" + timestamp() + "|",
          group: "dtu_grds03"
        },
        */
        {
          name: "20616",
          comment: "Data consumption in EU - 444",
          value: msisdn + "|20616|498591620|UTRAN||1897886976||" + timestamp() + "|",
          group: "dti_grds03"
        },
        //**************************************
        //group dti_grds03
        //**************************************
        {
          name: "20617",
          comment: "Data consumption in nonEU - 444",
          value: msisdn + "|193.239.182.193|20|" + data_units + "|1118591620|UTRAN||1897886976||" + timestamp() + "|",
          group: "dtu_grds03"
        },
        {
          name: "20618",
          comment: "Data consumption in WORLD - 444",
          value: msisdn + "|193.27.231.1|20|" + data_units + "|1118591620|UTRAN||1897886976||" + timestamp() + "|",
          group: "dtu_grds03"
        },
        {
          name: "20998",
          comment: "Data consumption in OTHER UNKNOWN - 444",
          value: msisdn + "|93.186.142.2|20|" + data_units + "|1118591620|UTRAN||1897886976||" + timestamp() + "|",
          group: "dtu_grds03"
        }
      ]
    },
    postpaid: {
      voice: [ //groups: gvoice, xml
        //**************************************
        //group gvoice
        //**************************************
        {
          name: "11001",
          comment: "voice do O2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11002",
          comment: "voice do T-MOBILE",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2301  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11003",
          comment: "voice do Vodafone",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2303  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11004",
          comment: "mobilkom / Ufon",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2304  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11005",
          comment: "voice do VOA",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2305  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11006",
          comment: "voice do VOB",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2306  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11007",
          comment: "voice do VOC",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2307  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11009",
          comment: "voice do VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2310  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11010",
          comment: "voice do voe01",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2330  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11011",
          comment: "voice do voe02",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2331  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11013",
          comment: "voice do VOD",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2308  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "11014",
          comment: "voice do VECTONE",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2311  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "12099",
          comment: "fix",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420223456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13001",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               4201180                 5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13002",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               4201181                 5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13003",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               4201188                 5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13004",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               4201224                 5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13005",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               4201211                 5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13006",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               42012123                5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13007",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               42013123                5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13008",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               42014112                5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13009",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               42014234                5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "13010",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420606000606            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "14001",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420800000606            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "14002",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420158                  5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "14003",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420116123               5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "15001",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               9002001                 4  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "15007",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               9065013                 4  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "15009",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               9086017                 4  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "15010",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               9096519                 4  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17001",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420813456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17002",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420841456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17003",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420823456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17004",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420913456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17005",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420933456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17006",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420953456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "17007",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420893456789            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "18001",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               447537410297            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "18002",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               B30                     5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "18003",
          comment: "",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               B33                     5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        /*
        {
            name: "18101",
            comment: "VOA CC",
            value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420267267061            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
            group: "gvoice"
        },
        {
            name: "18101",
            comment: "VOB CC",
            value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420841112255            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
            group: "gvoice"
        },
        */
        {
          name: "18101",
          comment: "VOC CC",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420840840840            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        /*
        {
            name: "18101",
            comment: "VOD CC",
            value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420778820820            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
            group: "gvoice"
        },
        */
        {
          name: "18101",
          comment: "VOE1 CC",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420558530900            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "18101",
          comment: "VOE2 CC",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420727610123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "18101",
          comment: "VOF CC",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420380900380            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        /*
        {
            name: "18103",
            comment: "VOA IVR",
            value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               B61                     5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
            group: "gvoice"
        },
        {
            name: "18103",
            comment: "VOB IVR",
            value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               B25                     5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
            group: "gvoice"
        },
        */
        {
          name: "18103",
          comment: "VOC IVR",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               B84                     5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        /*
        {
            name: "18103",
            comment: "VOD IVR",
            value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               B88                     5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
            group: "gvoice"
        },
        */
        {
          name: "18104",
          comment: "VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               420602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19001",
          comment: "VOE1 T1 a T2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               48602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19002",
          comment: "VOE1 T1 a T2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               86602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //-----------------------------------------
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Belgie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               32602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Bulharsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               359602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Dánsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               45602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Estonsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               372602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Finsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               358602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Francie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               33602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Gibraltar",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               350602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Chorvatsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               385602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Irsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               353602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Island",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               354602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Itálie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               39602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Vatikán",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               379602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Kypr",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               357602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lichtenštejnsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               423602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Litva",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               370602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lotyšsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               371602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lucembursko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               352602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Maďarsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               36602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Malta",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               356602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Německo",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               49602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Nizozemsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               31602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Norsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               47602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Polsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               48602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Portugalsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               351602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Rakousko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               43602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Rumunsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               40602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Řecko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               30602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 San Marino",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               378602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Slovensko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               421602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Slovinsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               386602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Španělsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               34602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Švédsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               46602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Velká Británie a Severní Irsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               44602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Francouzská Guyana",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               594602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Guandeloupe",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               590602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Martinik",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               596602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Réunion",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               262602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //-----------------------------------------
        {
          name: "19010",
          comment: "VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               48602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19011",
          comment: "VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               47602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19012",
          comment: "VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               86602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19013",
          comment: "VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               267602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19014",
          comment: "VOF",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               883602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19015",
          comment: "VOE2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               86602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19016",
          comment: "VOE2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               48602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19017",
          comment: "VOE2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               47602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19018",
          comment: "VOE2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               267602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19020",
          comment: "VOE2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               33602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19021",
          comment: "VOE2",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               61602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19036",
          comment: "VOC T1 a T2 INTL zone 1",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               421602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //-----------------------------------------
        {
          name: "19037",
          comment: "VOC Edice1 Belgie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               32602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Bulharsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               359602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Dánsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               45602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Estonsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               372602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Finsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               358602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Francie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               33602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Gibraltar",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               350602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Chorvatsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               385602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Irsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               353602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Island",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               354602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Itálie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               39602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Vatikán",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               379602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Kypr",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               357602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lichtenštejnsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               423602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Litva",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               370602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lotyšsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               371602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lucembursko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               352602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Maďarsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               36602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Malta",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               356602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Nizozemsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               31602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Norsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               47602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Portugalsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               351602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Rumunsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               40602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Řecko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               30602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 San Marino",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               378602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Slovinsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               386602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Španělsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               34602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Švédsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               46602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Velká Británie a Severní Irsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               44602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Francouzská Guyana",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               594602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Guandeloupe",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               590602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Martinik",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               596602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Réunion",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               262602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //-----------------------------------------
        {
          name: "19038",
          comment: "VOC T1 a T2 INTL zone 3",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               353602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19039",
          comment: "VOC T1 a T2 INTL zone 4",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               212602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19040",
          comment: "VOC T1 a T2 INTL zone 5",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               673602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19041",
          comment: "VOC T1 a T2 INTL zone 6",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               883602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //-----------------------------------------
        {
          name: "19042",
          comment: "VOE2 Belgie",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               32602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Bulharsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               359602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Estonsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               372602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Gibraltar",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               350602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Chorvatsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               385602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Irsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               353602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Island",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               354602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Vatikán",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               379602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Kypr",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               357602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Lichtenštejnsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               423602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Litva",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               370602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Lotyšsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               371602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Lucembursko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               352602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Malta",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               356602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Norsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               47602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Portugalsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               351602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Rumunsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               40602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Řecko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               30602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 San Marino",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               378602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Slovinsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               386602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Španělsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               34602999999             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Francouzská Guyana",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               594602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Guandeloupe",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               590602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Martinik",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               596602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19042",
          comment: "VOE2 Réunion",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               262602999999            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2300  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //-----------------------------------------
        {
          name: "19043",
          comment: "VOF Švýcarsko",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               41602123123             5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "19999",
          comment: "VOE1",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               883602123123            5  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  2302  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "24001",
          comment: "VPN on-net",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               602123123               6  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  1601  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "24002",
          comment: "VPN TEF mobile + other VOX",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               602123123               6  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  1605  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "24003",
          comment: "VPN other mobile operators",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               602123123               6  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  1606  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "24004",
          comment: "VPN fix",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               602123123               6  0  17 135168    0         " + timestamp() + formated_voice_units + "premi900  1620  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        {
          name: "24005",
          comment: "VPN others (e.g. Int. number)",
          value: "3  898857230  420602041000        1 0  " + imsi + "                 " + msisdn + "        5  " + msisdn + "               421602123123            5  0  19 135168    0         " + timestamp() + formated_voice_units + "premi900  1620  226020400100FFFFFFFFFFFFFFFFFFFF1D05A8CB0143 774691192           6  ",
          group: "gvoice"
        },
        //**************************************
        //group xml
        //**************************************
        {
          name: "10008",
          comment: "roam voice MO EU -> ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>420777123456</calledNumber>\n\
            <dialledDigits>+420111222333</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20101",
          comment: "roam voice MO EU -> EU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>46123</calledNumber>\n\
            <dialledDigits>+46123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20102",
          comment: "roam voice MO EU -> nonEU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>41123</calledNumber>\n\
            <dialledDigits>+41123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20103",
          comment: "roam voice MO EU -> WORLD",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>263123</calledNumber>\n\
            <dialledDigits>+263123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20201",
          comment: "roam voice MO nonEU -> ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>420777123456</calledNumber>\n\
            <dialledDigits>+420111222333</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20201",
          comment: "roam voice MO nonEU -> EU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>420777123456</calledNumber>\n\
            <dialledDigits>+420111222333</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20201",
          comment: "roam voice MO nonEU -> nonEU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>41123</calledNumber>\n\
            <dialledDigits>+41123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20202",
          comment: "roam voice MO nonEU -> WORLD",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>500123</calledNumber>\n\
            <dialledDigits>+500123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20301",
          comment: "roam voice MO WORLD -> ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>420777123456</calledNumber>\n\
            <dialledDigits>+420111222333</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20301",
          comment: "roam voice MO WORLD -> EU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>420777123456</calledNumber>\n\
            <dialledDigits>+420111222333</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20301",
          comment: "roam voice MO WORLD -> nonEU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>41123</calledNumber>\n\
            <dialledDigits>+41123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20301",
          comment: "roam voice MO WORLD -> WORLD",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>18087</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0200</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
      <specificationVersionNumber>3</specificationVersionNumber>\n\
      <releaseVersionNumber>10</releaseVersionNumber>\n\
    </batchControlInfo>\n\
    <accountingInfo>\n\
      <taxation>\n\
        <Taxation>\n\
          <taxCode>0</taxCode>\n\
          <taxType>13</taxType>\n\
          <taxRate>0000000</taxRate>\n\
        </Taxation>\n\
      </taxation>\n\
      <localCurrency>EUR</localCurrency>\n\
      <currencyConversionInfo>\n\
        <CurrencyConversion>\n\
          <exchangeRateCode>0</exchangeRateCode>\n\
          <numberOfDecimalPlaces>5</numberOfDecimalPlaces>\n\
          <exchangeRate>113847</exchangeRate>\n\
        </CurrencyConversion>\n\
      </currencyConversionInfo>\n\
      <tapDecimalPlaces>4</tapDecimalPlaces>\n\
    </accountingInfo>\n\
    <networkInfo>\n\
      <utcTimeOffsetInfo>\n\
        <UtcTimeOffsetInfo>\n\
          <utcTimeOffsetCode>0</utcTimeOffsetCode>\n\
          <utcTimeOffset>+0200</utcTimeOffset>\n\
        </UtcTimeOffsetInfo>\n\
      </utcTimeOffsetInfo>\n\
      <recEntityInfo>\n\
        <RecEntityInformation>\n\
          <recEntityCode>0</recEntityCode>\n\
          <recEntityType>1</recEntityType>\n\
          <msisdn>336603001003</msisdn>\n\
        </RecEntityInformation>\n\
      </recEntityInfo>\n\
      <networkType>1</networkType>\n\
      <calledNumAnalysis>\n\
        <CalledNumAnalysis>\n\
          <calledNumAnalysisCode>0</calledNumAnalysisCode>\n\
          <countryCodeTable>\n\
            <CountryCode>33</CountryCode>\n\
          </countryCodeTable>\n\
          <iacTable>\n\
            <Iac>00</Iac>\n\
          </iacTable>\n\
        </CalledNumAnalysis>\n\
      </calledNumAnalysis>\n\
    </networkInfo>\n\
\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>213777123456</calledNumber>\n\
            <dialledDigits>+213777123456</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0200</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20101-MT",
          comment: "roam voice MT EU -> ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>69698</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileTerminatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <callOriginator>\n\
            <callingNumber>48949726111</callingNumber>\n\
          </callOriginator>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffset>+0000</utcTimeOffset>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>7</recEntityCode>\n\
            <callReference>4369180c05</callReference>\n\
            <locationArea>86</locationArea>\n\
            <cellId>32701</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <imei>358087047501790</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <chargeType>0</chargeType>\n\
                    <chargeableUnits>66</chargeableUnits>\n\
                    <chargedUnits>66</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileTerminatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20201-MT",
          comment: "roam voice MT nonEU -> ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>67460</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileTerminatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <callOriginator>\n\
            <callingNumber>48949726111</callingNumber>\n\
          </callOriginator>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffset>+0000</utcTimeOffset>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>7</recEntityCode>\n\
            <callReference>4369180c05</callReference>\n\
            <locationArea>86</locationArea>\n\
            <cellId>32701</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <imei>358087047501790</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <chargeType>0</chargeType>\n\
                    <chargeableUnits>66</chargeableUnits>\n\
                    <chargedUnits>66</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileTerminatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20301-MT",
          comment: "roam voice MT WORLD -> ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>77559</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileTerminatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <callOriginator>\n\
            <callingNumber>48949726111</callingNumber>\n\
          </callOriginator>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffset>+0000</utcTimeOffset>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>7</recEntityCode>\n\
            <callReference>4369180c05</callReference>\n\
            <locationArea>86</locationArea>\n\
            <cellId>32701</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <imei>358087047501790</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <chargeType>0</chargeType>\n\
                    <chargeableUnits>66</chargeableUnits>\n\
                    <chargedUnits>66</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileTerminatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        }
      ],
      sms: [ //groups: sms, npp, dms
        //**************************************
        //group sms
        //**************************************
        {
          name: "10003",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420900302522                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "10008",
          comment: "roam EU -> ČR",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  46602020000         2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11001",
          comment: "O2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11002",
          comment: "T-Mobile",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2301  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11003",
          comment: "Vodafone",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2303  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11004",
          comment: "mobilkom / Ufon",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2304  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11005",
          comment: "VOA",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2305  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11006",
          comment: "VOB",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2306  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11007",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2307  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11009",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2310  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11010",
          comment: "VOE1",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2330  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11011",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2331  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11013",
          comment: "VOD",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2308  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "11014",
          comment: "VECTONE",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420602302522                  5  5  420602020000        2311  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "12099",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420223456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13001",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  4201180                       5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13002",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  4201181                       5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13003",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  4201188                       5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13004",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  4201224                       5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13005",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  4201211                       5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13006",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  42012123                      5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13007",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  42013123                      5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13008",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  42014112                      5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13009",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  42014234                      5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "13010",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420606000606                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "14001",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420800000606                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "14002",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420158                        5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "14003",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420116123                     5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "15190",
          comment: "asi nic nedělá",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  42099962030                   5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17001",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420813456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17002",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420841456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17003",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420823456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17004",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420913456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17005",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420933456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17006",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420953456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "17007",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420893456789                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18001",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  447537410297                  5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18004",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999555                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18005",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999888                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18006",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999333                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18007",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999222                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18008",
          comment: "možná neimplementováno, generuje 18007?",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999111                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18009",
          comment: "možná neimplementováno, generuje 18007?",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999123                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18010",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420199                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18021",
          comment: "",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  87655                         5  4  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18101",
          comment: "VOE1",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  558530900                     5  4  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18101",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  727610123                     5  4  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18101",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  380900380                     5  4  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        /*
        {
            name: "18102",
            comment: "VOA",
            value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999340                        5  2  420602020000        2300  0  1542550  " + timestamp(),
            group: "sms"
        },
        {
            name: "18102",
            comment: "VOB",
            value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999346                        5  2  420602020000        2300  0  1542550  " + timestamp(),
            group: "sms"
        },
        */
        {
          name: "18102",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999345                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        /*
        {
            name: "18102",
            comment: "VOD",
            value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999348                        5  2  420602020000        2300  0  1542550  " + timestamp(),
            group: "sms"
        },
        */
        {
          name: "18102",
          comment: "VOE1",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999343                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18102",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  999342                        5  2  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18102",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  601587541                     5  5  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "18104",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  602999999                     5  4  420602020000        2300  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19001",
          comment: "VOE1",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  421602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19002",
          comment: "VOE1",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  866602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19003",
          comment: "VOE1",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  883602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //---------------------------------------
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Belgie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  32602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Bulharsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  359602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Dánsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  45602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Estonsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  372602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Finsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  358602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Francie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  33602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Gibraltar",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  350602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Chorvatsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  385602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Irsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  353602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Island",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  354602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Itálie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  39602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Vatikán",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  379602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Kypr",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  357602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lichtenštejnsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  423602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Litva",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  370602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lotyšsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  371602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lucembursko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  352602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Maďarsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  36602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Malta",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  356602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Německo",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  49602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Nizozemsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  31602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Norsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  47602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Polsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  48602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Portugalsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  351602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Rakousko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  43602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Rumunsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  40602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Řecko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  30602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 San Marino",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  378602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Slovensko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  421602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Slovinsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  386602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Španělsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  34602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Švédsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  46602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Velká Británie a Severní Irsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  44602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Francouzská Guyana",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  594602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Guandeloupe",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  590602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Martinik",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  596602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Réunion",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  262602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //---------------------------------------
        {
          name: "19010",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  48602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19011",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  47602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19012",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  86602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19013",
          comment: "VOF",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  267602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19015",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  86602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19016",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  48602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19017",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  47602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19018",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  267602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19020",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  33602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19021",
          comment: "VOE2",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  61602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19036",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  421602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //---------------------------------------
        {
          name: "19037",
          comment: "VOC Edice1 Belgie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  32602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Bulharsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  359602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Dánsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  45602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Estonsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  372602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Finsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  358602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Francie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  33602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Gibraltar",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  350602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Chorvatsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  385602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Irsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  353602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Island",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  354602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Itálie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  39602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Vatikán",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  379602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Kypr",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  357602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lichtenštejnsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  423602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Litva",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  370602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lotyšsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  371602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lucembursko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  352602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Maďarsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  36602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Malta",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  356602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Nizozemsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  31602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Norsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  47602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Portugalsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  351602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Rumunsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  40602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Řecko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  30602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 San Marino",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  378602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Slovinsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  386602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Španělsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  34602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Švédsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  46602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Velká Británie a Severní Irsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  44602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Francouzská Guyana",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  594602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Guandeloupe",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  590602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Martinik",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  596602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Réunion",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  262602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //---------------------------------------
        {
          name: "19038",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  353602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19039",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  212602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19040",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  673602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19041",
          comment: "VOC",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  883602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //---------------------------------------
        {
          name: "19042",
          comment: "VOE2 Belgie",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  32602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Bulharsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  359602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Estonsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  372602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Gibraltar",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  350602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Chorvatsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  385602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Irsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  353602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Island",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  354602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Vatikán",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  379602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Kypr",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  357602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Lichtenštejnsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  423602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Litva",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  370602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Lotyšsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  371602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Lucembursko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  352602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Malta",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  356602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Norsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  47602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Portugalsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  351602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Rumunsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  40602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Řecko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  30602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 San Marino",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  378602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Slovinsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  386602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Španělsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  34602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Francouzská Guyana",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  594602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Guandeloupe",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  590602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Martinik",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  596602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "19042",
          comment: "VOE2 Réunion",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  262602302522                  5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //---------------------------------------
        {
          name: "19043",
          comment: "VOF Švýcarsko",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  41602302522                   5  5  420602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20101",
          comment: "roam EU -> EU",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  460123123123                  5  5  46602020000         2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20102",
          comment: "roam EU -> nonEU",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  355123123123                  5  5  46602020000         2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20103",
          comment: "roam EU -> WORLD",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  100123123123                  5  5  46602020000         2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20201",
          comment: "roam nonEU -> ČR",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420123123123                  5  5  355602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20201",
          comment: "roam nonEU -> EU",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  460123123123                  5  5  355602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20201",
          comment: "roam nonEU -> nonEU",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  355123123123                  5  5  355602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20202",
          comment: "roam nonEU -> WORLD",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  100123123123                  5  5  355602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20301",
          comment: "roam WORLD -> ČR",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  420123123123                  5  5  120602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20301",
          comment: "roam WORLD -> EU",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  460123123123                  5  5  120602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20301",
          comment: "roam WORLD -> nonEU",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  355123123123                  5  5  120602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        {
          name: "20301",
          comment: "roam WORLD -> WORLD",
          value: "165  8  83984   0  185396543910904420602020000        " + imsi + " 500161112488810 " + msisdn + "        0  3  420602302522            420602909909        11   509  " + timestamp() + "0         0  34 3  1  100123123123                  5  5  120602020000        2302  0  1542550  " + timestamp(),
          group: "sms"
        },
        //**************************************
        //group npp
        //**************************************
        {
          name: "15001",
          comment: "",
          value: "79                " + msisdn + "      9001503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        {
          name: "15002",
          comment: "",
          value: "79                " + msisdn + "      9011503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        {
          name: "15003",
          comment: "",
          value: "79                " + msisdn + "      9021503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        {
          name: "15004",
          comment: "",
          value: "79                " + msisdn + "      9031503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        {
          name: "15005",
          comment: "",
          value: "79                " + msisdn + "      9041503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        /*
        {
            name: "15006",
            comment: "asi nejde / nemělo by procházet ???",
            value: "79                " + msisdn + "      9051503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
            group: "npp"
        },
        */
        {
          name: "15007",
          comment: "",
          value: "79                " + msisdn + "      9061503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        {
          name: "15008",
          comment: "",
          value: "79                " + msisdn + "      9071503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        /*
        {
            name: "15009",
            comment: "asi nejde / nemělo by procházet ???",
            value: "79                " + msisdn + "      9081503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
            group: "npp"
        },
        */
        {
          name: "15010",
          comment: "",
          value: "79                " + msisdn + "      9091503                                                         9011503                                                         " + timestamp() + "000001      0899                             00000000000000000000000030000000000000                                      0000prepaid",
          group: "npp"
        },
        //**************************************
        //group dms
        //**************************************
        {
          name: "15050",
          comment: "DMS",
          value: "75                " + msisdn + "      87777                                                           000000000000000000                                              " + timestamp() + "000001SS30  0101                             00000000000000000000000000000000000000MMSH                                  0000",
          group: "dms"
        },
        {
          name: "15052",
          comment: "DMS",
          value: "75                " + msisdn + "      87777                                                           000000000000000000                                              " + timestamp() + "000001SS60  0101                             00000000000000000000000000000000000000MMSH                                  0000",
          group: "dms"
        },
        {
          name: "15053",
          comment: "DMS",
          value: "75                " + msisdn + "      87777                                                           000000000000000000                                              " + timestamp() + "000001SS90  0101                             00000000000000000000000000000000000000MMSH                                  0000",
          group: "dms"
        }
      ],
      mms: [ //groups: mms
        {
          name: "10002",
          comment: "email",
          value: "06" + imsi + " " + msisdn + "      email-a@b.cz                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                23110",
          group: "mms"
        },
        {
          name: "10008",
          comment: "EU -> ČR",
          value: "07" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                23110",
          group: "mms"
        },
        {
          name: "11001",
          comment: "O2",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2302",
          group: "mms"
        },
        {
          name: "11002",
          comment: "T-Mobile",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2301",
          group: "mms"
        },
        {
          name: "11003",
          comment: "Vodafone",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2303",
          group: "mms"
        },
        {
          name: "11004",
          comment: "Mobilkom / Ufon",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2304",
          group: "mms"
        },
        {
          name: "11005",
          comment: "VOA",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2305",
          group: "mms"
        },
        {
          name: "11006",
          comment: "VOB",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2306",
          group: "mms"
        },
        {
          name: "11007",
          comment: "VOC",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2307",
          group: "mms"
        },
        {
          name: "11009",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2310",
          group: "mms"
        },
        {
          name: "11010",
          comment: "VOE1",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2330",
          group: "mms"
        },
        {
          name: "11011",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2331",
          group: "mms"
        },
        {
          name: "11013",
          comment: "VOD",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2308",
          group: "mms"
        },
        {
          name: "11014",
          comment: "VECTONE",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2311",
          group: "mms"
        },
        {
          name: "12099",
          comment: "asi není naimplementovaná",
          value: "06" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13001",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      4201180                                                                                                                         " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13002",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      4201181                                                                                                                         " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13003",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      4201188                                                                                                                         " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13004",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      4201224                                                                                                                         " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13005",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      4201211                                                                                                                         " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13006",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      42012123                                                                                                                        " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13007",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      42013123                                                                                                                        " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13008",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      42014112                                                                                                                        " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13009",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      42014234                                                                                                                        " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "13010",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420606000606                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "14001",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420800000606                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "14002",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420158                                                                                                                          " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "14003",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420116123                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17001",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420813456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17002",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420841456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17003",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420823456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17004",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420913456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17005",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420933456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17006",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420953456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "17007",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420893456789                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18001",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      447537410297                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18004",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420999555                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18005",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420999888                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18006",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420999333                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18007",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420999222                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18008",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420999111                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18009",
          comment: "",
          value: "06" + imsi + " " + msisdn + "      420999123                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18101",
          comment: "VOE1",
          value: "06" + imsi + " " + msisdn + "      420558530900                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18101",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      420727610123                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18101",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      420380900380                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18102",
          comment: "VOE1",
          value: "06" + imsi + " " + msisdn + "      420999343                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18102",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      420999342                                                                                                                       " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18102",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      420601587541                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "18104",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      420602999999                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                2300",
          group: "mms"
        },
        {
          name: "19001",
          comment: "VOE1",
          value: "06" + imsi + " " + msisdn + "      421772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19002",
          comment: "VOE1",
          value: "06" + imsi + " " + msisdn + "      866772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        //--------------------------------------
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Belgie",
          value: "06" + imsi + " " + msisdn + "      32772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Bulharsko",
          value: "06" + imsi + " " + msisdn + "      359772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Dánsko",
          value: "06" + imsi + " " + msisdn + "      45772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Estonsko",
          value: "06" + imsi + " " + msisdn + "      372772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Finsko",
          value: "06" + imsi + " " + msisdn + "      358772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Francie",
          value: "06" + imsi + " " + msisdn + "      33772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Gibraltar",
          value: "06" + imsi + " " + msisdn + "      350772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Chorvatsko",
          value: "06" + imsi + " " + msisdn + "      385772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Irsko",
          value: "06" + imsi + " " + msisdn + "      353772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Island",
          value: "06" + imsi + " " + msisdn + "      354772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Itálie",
          value: "06" + imsi + " " + msisdn + "      39772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Vatikán",
          value: "06" + imsi + " " + msisdn + "      379772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Kypr",
          value: "06" + imsi + " " + msisdn + "      357772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lichtenštejnsko",
          value: "06" + imsi + " " + msisdn + "      423772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Litva",
          value: "06" + imsi + " " + msisdn + "      370772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lotyšsko",
          value: "06" + imsi + " " + msisdn + "      371772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Lucembursko",
          value: "06" + imsi + " " + msisdn + "      352772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Maďarsko",
          value: "06" + imsi + " " + msisdn + "      36772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Malta",
          value: "06" + imsi + " " + msisdn + "      356772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Německo",
          value: "06" + imsi + " " + msisdn + "      49772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Nizozemsko",
          value: "06" + imsi + " " + msisdn + "      31772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Norsko",
          value: "06" + imsi + " " + msisdn + "      47772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Polsko",
          value: "06" + imsi + " " + msisdn + "      48772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Portugalsko",
          value: "06" + imsi + " " + msisdn + "      351772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Rakousko",
          value: "06" + imsi + " " + msisdn + "      43772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Rumunsko",
          value: "06" + imsi + " " + msisdn + "      40772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Řecko",
          value: "06" + imsi + " " + msisdn + "      30772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 San Marino",
          value: "06" + imsi + " " + msisdn + "      378772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Slovensko",
          value: "06" + imsi + " " + msisdn + "      421772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Slovinsko",
          value: "06" + imsi + " " + msisdn + "      386772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Španělsko",
          value: "06" + imsi + " " + msisdn + "      34772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Švédsko",
          value: "06" + imsi + " " + msisdn + "      46772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Velká Británie a Severní Irsko",
          value: "06" + imsi + " " + msisdn + "      44772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Francouzská Guyana",
          value: "06" + imsi + " " + msisdn + "      594772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Guandeloupe",
          value: "06" + imsi + " " + msisdn + "      590772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Martinik",
          value: "06" + imsi + " " + msisdn + "      596772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19005",
          comment: "VOC Edice2 + VOE1 Réunion",
          value: "06" + imsi + " " + msisdn + "      262772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        //--------------------------------------
        {
          name: "19003",
          comment: "VOE1",
          value: "06" + imsi + " " + msisdn + "      883772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19010",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      48772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19011",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      47772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19012",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      86772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19013",
          comment: "VOF",
          value: "06" + imsi + " " + msisdn + "      267772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19015",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      86772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19016",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      48772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19017",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      47772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19018",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      267772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19020",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      33772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19021",
          comment: "VOE2",
          value: "06" + imsi + " " + msisdn + "      61772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19036",
          comment: "VOC",
          value: "06" + imsi + " " + msisdn + "      421772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        //--------------------------------------
        {
          name: "19037",
          comment: "VOC Edice1 Belgie",
          value: "06" + imsi + " " + msisdn + "      32772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Bulharsko",
          value: "06" + imsi + " " + msisdn + "      359772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Dánsko",
          value: "06" + imsi + " " + msisdn + "      45772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Estonsko",
          value: "06" + imsi + " " + msisdn + "      372772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Finsko",
          value: "06" + imsi + " " + msisdn + "      358772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Francie",
          value: "06" + imsi + " " + msisdn + "      33772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Gibraltar",
          value: "06" + imsi + " " + msisdn + "      350772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Chorvatsko",
          value: "06" + imsi + " " + msisdn + "      385772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Irsko",
          value: "06" + imsi + " " + msisdn + "      353772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Island",
          value: "06" + imsi + " " + msisdn + "      354772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Itálie",
          value: "06" + imsi + " " + msisdn + "      39772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Vatikán",
          value: "06" + imsi + " " + msisdn + "      379772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Kypr",
          value: "06" + imsi + " " + msisdn + "      357772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lichtenštejnsko",
          value: "06" + imsi + " " + msisdn + "      423772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Litva",
          value: "06" + imsi + " " + msisdn + "      370772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lotyšsko",
          value: "06" + imsi + " " + msisdn + "      371772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Lucembursko",
          value: "06" + imsi + " " + msisdn + "      352772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Maďarsko",
          value: "06" + imsi + " " + msisdn + "      36772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Malta",
          value: "06" + imsi + " " + msisdn + "      356772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Nizozemsko",
          value: "06" + imsi + " " + msisdn + "      31772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Norsko",
          value: "06" + imsi + " " + msisdn + "      47772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Portugalsko",
          value: "06" + imsi + " " + msisdn + "      351772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Rumunsko",
          value: "06" + imsi + " " + msisdn + "      40772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Řecko",
          value: "06" + imsi + " " + msisdn + "      30772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 San Marino",
          value: "06" + imsi + " " + msisdn + "      378772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Slovinsko",
          value: "06" + imsi + " " + msisdn + "      386772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Španělsko",
          value: "06" + imsi + " " + msisdn + "      34772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Švédsko",
          value: "06" + imsi + " " + msisdn + "      46772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Velká Británie a Severní Irsko",
          value: "06" + imsi + " " + msisdn + "      44772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Francouzská Guyana",
          value: "06" + imsi + " " + msisdn + "      594772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Guandeloupe",
          value: "06" + imsi + " " + msisdn + "      590772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Martinik",
          value: "06" + imsi + " " + msisdn + "      596772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19037",
          comment: "VOC Edice1 Réunion",
          value: "06" + imsi + " " + msisdn + "      262772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        //--------------------------------------
        {
          name: "19039",
          comment: "VOC",
          value: "06" + imsi + " " + msisdn + "      212772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19040",
          comment: "VOC",
          value: "06" + imsi + " " + msisdn + "      673772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19041",
          comment: "VOC",
          value: "06" + imsi + " " + msisdn + "      883772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        //--------------------------------------
        {
          name: "19042",
          comment: "VOE2 Belgie",
          value: "06" + imsi + " " + msisdn + "      32772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Bulharsko",
          value: "06" + imsi + " " + msisdn + "      359772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Estonsko",
          value: "06" + imsi + " " + msisdn + "      372772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Gibraltar",
          value: "06" + imsi + " " + msisdn + "      350772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Chorvatsko",
          value: "06" + imsi + " " + msisdn + "      385772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Irsko",
          value: "06" + imsi + " " + msisdn + "      353772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Island",
          value: "06" + imsi + " " + msisdn + "      354772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Vatikán",
          value: "06" + imsi + " " + msisdn + "      379772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Kypr",
          value: "06" + imsi + " " + msisdn + "      357772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Lichtenštejnsko",
          value: "06" + imsi + " " + msisdn + "      423772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Litva",
          value: "06" + imsi + " " + msisdn + "      370772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Lotyšsko",
          value: "06" + imsi + " " + msisdn + "      371772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Lucembursko",
          value: "06" + imsi + " " + msisdn + "      352772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Malta",
          value: "06" + imsi + " " + msisdn + "      356772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Norsko",
          value: "06" + imsi + " " + msisdn + "      47772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Portugalsko",
          value: "06" + imsi + " " + msisdn + "      351772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Rumunsko",
          value: "06" + imsi + " " + msisdn + "      40772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Řecko",
          value: "06" + imsi + " " + msisdn + "      30772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 San Marino",
          value: "06" + imsi + " " + msisdn + "      378772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Slovinsko",
          value: "06" + imsi + " " + msisdn + "      386772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Španělsko",
          value: "06" + imsi + " " + msisdn + "      34772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Francouzská Guyana",
          value: "06" + imsi + " " + msisdn + "      594772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Guandeloupe",
          value: "06" + imsi + " " + msisdn + "      590772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Martinik",
          value: "06" + imsi + " " + msisdn + "      596772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "19042",
          comment: "VOE2 Réunion",
          value: "06" + imsi + " " + msisdn + "      262772569856                                                                                                                    " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        //--------------------------------------
        {
          name: "19043",
          comment: "VOF Švýcarsko",
          value: "06" + imsi + " " + msisdn + "      41772569856                                                                                                                     " + timestamp() + "                4216020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "20101",
          comment: "EU -> EU",
          value: "07" + imsi + " " + msisdn + "      460772569856                                                                                                                    " + timestamp() + "                4606020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "20102",
          comment: "EU -> nonEU",
          value: "07" + imsi + " " + msisdn + "      355772569856                                                                                                                    " + timestamp() + "                4606020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "20103",
          comment: "EU -> WORLD",
          value: "07" + imsi + " " + msisdn + "      100772569856                                                                                                                    " + timestamp() + "                4606020230                                                         4606020230                                23110",
          group: "mms"
        },
        {
          name: "20201",
          comment: "nonEU -> ČR",
          value: "07" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                3556020230                                                         3556020230                                23110",
          group: "mms"
        },
        {
          name: "20201",
          comment: "nonEU -> EU",
          value: "07" + imsi + " " + msisdn + "      460772569856                                                                                                                    " + timestamp() + "                3556020230                                                         3556020230                                23110",
          group: "mms"
        },
        {
          name: "20201",
          comment: "nonEU -> nonEU",
          value: "07" + imsi + " " + msisdn + "      355772569856                                                                                                                    " + timestamp() + "                3556020230                                                         3556020230                                23110",
          group: "mms"
        },
        {
          name: "20202",
          comment: "nonEU -> WORLD",
          value: "07" + imsi + " " + msisdn + "      100772569856                                                                                                                    " + timestamp() + "                3556020230                                                         3556020230                                23110",
          group: "mms"
        },
        {
          name: "20301",
          comment: "WORLD -> ČR",
          value: "07" + imsi + " " + msisdn + "      420772569856                                                                                                                    " + timestamp() + "                1206020230                                                         1206020230                                23110",
          group: "mms"
        },
        {
          name: "20301",
          comment: "WORLD -> EU",
          value: "07" + imsi + " " + msisdn + "      460772569856                                                                                                                    " + timestamp() + "                1206020230                                                         1206020230                                23110",
          group: "mms"
        },
        {
          name: "20301",
          comment: "WORLD -> nonEU",
          value: "07" + imsi + " " + msisdn + "      355772569856                                                                                                                    " + timestamp() + "                1206020230                                                         1206020230                                23110",
          group: "mms"
        },
        {
          name: "20301",
          comment: "WORLD -> WORLD",
          value: "07" + imsi + " " + msisdn + "      100772569856                                                                                                                    " + timestamp() + "                1206020230                                                         1206020230                                23110",
          group: "mms"
        },
        {
          name: "20401",
          comment: "email",
          value: "07" + imsi + " " + msisdn + "      email-a@b.cz                                                                                                                    " + timestamp() + "                4216020230                                                         4206020230                                23110",
          group: "mms"
        }
      ],
      data: [ //lte
        {
          name: "data",
          comment: "data home placene",
          value: "04" + imsi + " " + msisdn + "      GOternet                                                                                                                        " + timestamp() + "000001000000PG57160.218.032.0680000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data home zdarma",
          value: "04" + imsi + " " + msisdn + "      internet_zdarmaCAP                                                                                                              " + timestamp() + "000001000000FL57160.218.032.0680000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data eu placene",
          value: "04" + imsi + " " + msisdn + "      GOternet                                                                                                                        " + timestamp() + "000001000000PG60093.186.142.0020000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data eu zdarma PG",
          value: "04" + imsi + " " + msisdn + "      internet_zdarmaCAP                                                                                                              " + timestamp() + "000001000000PG60093.186.142.0020000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data eu_fl",
          value: "04" + imsi + " " + msisdn + "      internet_zdarmaCAP                                                                                                              " + timestamp() + "000001000000FL60093.186.142.0020000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data z2 free",
          value: "06" + imsi + " " + msisdn + "      internet_zdarmaCAP                                                                                                              " + timestamp() + "000001000000FL57193.239.182.1930000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data z2 placene",
          value: "05" + imsi + " " + msisdn + "      GOternet                                                                                                                        " + timestamp() + "000001000000PG57193.239.182.1930000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data z3 free - IP 193.027.231.001 upravena (přidaná 0 před 27)",
          value: "06" + imsi + " " + msisdn + "      internet_zdarmaCAP                                                                                                              " + timestamp() + "000001000000FL57193.027.231.0010000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        },
        {
          name: "data",
          comment: "data z3 placene - IP 193.027.231.001 upravena (přidaná 0 před 27)",
          value: "05" + imsi + " " + msisdn + "      GOternet                                                                                                                        " + timestamp() + "000001000000PG57193.027.231.0010000000000000023020000" + data_units + "000000000000000000160.218.032.06800000000000000000000000000000000000",
          group: "lte"
        }
      ]
    },
    m2m: {
      voice: [ //groups: gvoice
        //**************************************
        //group gvoice
        //**************************************
        {
          name: "10001",
          comment: "Volání do sítě VOA",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602302522            5  420602302522            5     17                     " + timestamp() + formated_voice_units + "          2305  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě VOB",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2306  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě VOC",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2307  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě VOD",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2308  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě VOE1",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2330  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě VOE2",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2331  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě VOF",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2310  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání do sítě M2M (VECTONE)",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2311  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "10001",
          comment: "Volání v síti O2",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2302  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "11002",
          comment: "Volání do sítě T-Mobile",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2301  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "11003",
          comment: "Volání do sítě Vodafone",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2303  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "11004",
          comment: "Volání do sítě U-Fon",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420602123123            5  420602123123            5     17                     " + timestamp() + formated_voice_units + "          2304  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "12099",
          comment: "Volání na pevnou síť v ČR",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420223456789            5  420223456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13001",
          comment: "INFO_VOICE_1180",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  4201180                 5  4201180                 5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13002",
          comment: "INFO_VOICE_1181",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  4201181                 5  4201181                 5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13003",
          comment: "INFO_VOICE_1188",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  4201188                 5  4201188                 5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13004",
          comment: "INFO_VOICE_1224",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  4201224                 5  4201224                 5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13005",
          comment: "INFO_VOICE_12xx",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  4201211                 5  4201211                 5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13006",
          comment: "INFO_VOICE_12xxx",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  42012123                5  42012123                5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13007",
          comment: "INFO_VOICE_13xxx",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  42013123                5  42013123                5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13008",
          comment: "INFO_VOICE_141xx",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  42014112                5  42014112                5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13009",
          comment: "INFO_VOICE_14xxx",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  42014234                5  42014234                5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "13010",
          comment: "INFO_VOICE_TIMEINFO",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420606000606            5  420606000606            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "14001",
          comment: "GREENLINE_VOICE",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420800000606            5  420800000606            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "14002",
          comment: "EMERGENCY_VOICE",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420158                  5  420158                  5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "14003",
          comment: "HELPLINE_VOICE",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420116123               5  420116123               5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17001",
          comment: "OTHER_VOICE_SHARED_PAY",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420813456789            5  420813456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17002",
          comment: "OTHER_VOICE_UNIVERSAL_NUM",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420841456789            5  420841456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17003",
          comment: "OTHER_VOICE_VIRTUAL_CARDS",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420823456789            5  420823456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17004",
          comment: "OTHER_VOICE_VOIP",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420913456789            5  420913456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17005",
          comment: "OTHER_VOICE_VOICEMAIL",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420933456789            5  420933456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17006",
          comment: "OTHER_VOICE_PRIVATE_NETS",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420953456789            5  420953456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "17007",
          comment: "OTHER_VOICE_OTHER_SERVICES",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  420893456789            5  420893456789            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "18001",
          comment: "INT_VOICE_APPLE",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  447537410297            5  447537410297            5     17                     " + timestamp() + formated_voice_units + "          2300  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "19001",
          comment: "INT_VOICE_ZONE_A",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  460123123123            5  460123123123            5     17                     " + timestamp() + formated_voice_units + "          2302  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "19002",
          comment: "INT_VOICE_ZONE_B",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  355123123123            5  355123123123            5     17                     " + timestamp() + formated_voice_units + "          2302  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        {
          name: "19003",
          comment: "INT_VOICE_ZONE_C",
          value: "3                                 1 0  " + imsi + "                 " + msisdn + "        5  100123123123            5  100123123123            5     17                     " + timestamp() + formated_voice_units + "          2302  " + timestamp() + "BABA" + msisdn + "               " + msisdn + "        5  ",
          group: "gvoice"
        },
        //**************************************
        //group xml
        //**************************************
        {
          name: "20011",
          comment: "roam voice MO EU -> EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>9592</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>46123123123</calledNumber>\n\
            <dialledDigits>46123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>   \n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20012",
          comment: "roam voice MO EU -> nonEU",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>9592</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>      \n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>100123123123</calledNumber>\n\
            <dialledDigits>100123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20013",
          comment: "roam voice MO EU -> WORLD",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>9592</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>355123123123</calledNumber>\n\
            <dialledDigits>355123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20021",
          comment: "roam voice MO nonEU -> EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>55895</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>46123123123</calledNumber>\n\
            <dialledDigits>46123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20021",
          comment: "roam voice MO nonEU -> nonEU + EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>55895</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>100123123123</calledNumber>\n\
            <dialledDigits>100123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20022",
          comment: "roam voice MO nonEU -> WORLD",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>55895</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>355123123123</calledNumber>\n\
            <dialledDigits>355123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20031",
          comment: "roam voice MO WORLD -> EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>2763</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>46123123123</calledNumber>\n\
            <dialledDigits>46123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20031",
          comment: "roam voice MO WORLD -> nonEU + EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>2763</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>100123123123</calledNumber>\n\
            <dialledDigits>100123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20031",
          comment: "roam voice MO WORLD -> WORLD + nonEU + EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>2763</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileOriginatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <destination>\n\
            <calledNumber>355123123123</calledNumber>\n\
            <dialledDigits>355123123123</dialledDigits>\n\
          </destination>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffsetCode>+0000</utcTimeOffsetCode>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>0</recEntityCode>\n\
            <callReference>1b4d08</callReference>\n\
            <locationArea>213</locationArea>\n\
            <cellId>12052</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <mobileStationClassMark>1</mobileStationClassMark>\n\
          <imei>357194041943710</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
              <radioChannelRequested>0</radioChannelRequested>\n\
              <radioChannelUsed>0</radioChannelUsed>\n\
              <transparencyIndicator>0</transparencyIndicator>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <callTypeGroup>\n\
                  <callTypeLevel1>2</callTypeLevel1>\n\
                  <callTypeLevel2>0</callTypeLevel2>\n\
                  <callTypeLevel3>0</callTypeLevel3>\n\
                  <calledCountryCode>CZE</calledCountryCode>\n\
                </callTypeGroup>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <charge>952</charge>\n\
                    <chargeableUnits>120</chargeableUnits>\n\
                    <chargedUnits>120</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
                <taxInformation>\n\
                  <TaxInformation>\n\
                    <taxCode>0</taxCode>\n\
                    <taxValue>0</taxValue>\n\
                  </TaxInformation>\n\
                </taxInformation>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileOriginatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20311",
          comment: "roam voice MT EU -> EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>SWEEP</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>9592</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileTerminatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <callOriginator>\n\
            <callingNumber>48949726111</callingNumber>\n\
          </callOriginator>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffset>+0000</utcTimeOffset>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>7</recEntityCode>\n\
            <callReference>4369180c05</callReference>\n\
            <locationArea>86</locationArea>\n\
            <cellId>32701</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <imei>358087047501790</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <chargeType>0</chargeType>\n\
                    <chargeableUnits>66</chargeableUnits>\n\
                    <chargedUnits>66</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileTerminatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20321",
          comment: "roam voice MT nonEU -> nonEU + EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>CHNCT</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>55895</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileTerminatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <callOriginator>\n\
            <callingNumber>48949726111</callingNumber>\n\
          </callOriginator>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffset>+0000</utcTimeOffset>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>7</recEntityCode>\n\
            <callReference>4369180c05</callReference>\n\
            <locationArea>86</locationArea>\n\
            <cellId>32701</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <imei>358087047501790</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <chargeType>0</chargeType>\n\
                    <chargeableUnits>66</chargeableUnits>\n\
                    <chargedUnits>66</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileTerminatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        },
        {
          name: "20331",
          comment: "roam voice MT WORLD -> WORLD + nonEU + EU + ČR",
          value: "\
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<DataInterChange>\n\
  <transferBatch>\n\
    <batchControlInfo>\n\
      <sender>BLRMD</sender>\n\
      <recipient>CZEET</recipient>\n\
      <fileSequenceNumber>2763</fileSequenceNumber>\n\
      <fileCreationTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileCreationTimeStamp>\n\
      <transferCutOffTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </transferCutOffTimeStamp>\n\
      <fileAvailableTimeStamp>\n\
        <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
        <utcTimeOffset>+0000</utcTimeOffset>\n\
      </fileAvailableTimeStamp>\n\
    </batchControlInfo>\n\
    <callEventDetails>\n\
      <mobileTerminatedCall>\n\
        <basicCallInformation>\n\
          <simChargeableSubscriber>\n\
            <imsi>" + imsi + "</imsi>\n\
            <msisdn>" + msisdn + "</msisdn>\n\
          </simChargeableSubscriber>\n\
          <callOriginator>\n\
            <callingNumber>48949726111</callingNumber>\n\
          </callOriginator>\n\
          <callEventStartTimeStamp>\n\
            <localTimeStamp>" + timestamp() + "</localTimeStamp>\n\
            <utcTimeOffset>+0000</utcTimeOffset>\n\
          </callEventStartTimeStamp>\n\
          <totalCallEventDuration>" + voice_units + "</totalCallEventDuration>\n\
        </basicCallInformation>\n\
        <locationInformation>\n\
          <networkLocation>\n\
            <recEntityCode>7</recEntityCode>\n\
            <callReference>4369180c05</callReference>\n\
            <locationArea>86</locationArea>\n\
            <cellId>32701</cellId>\n\
          </networkLocation>\n\
        </locationInformation>\n\
        <equipmentInformation>\n\
          <imei>358087047501790</imei>\n\
        </equipmentInformation>\n\
        <basicServiceUsedList>\n\
          <BasicServiceUsed>\n\
            <basicService>\n\
              <teleServiceCode>11</teleServiceCode>\n\
            </basicService>\n\
            <chargeInformationList>\n\
              <ChargeInformation>\n\
                <chargedItem>D</chargedItem>\n\
                <exchangeRateCode>0</exchangeRateCode>\n\
                <chargeDetailList>\n\
                  <ChargeDetail>\n\
                    <chargeType>00</chargeType>\n\
                    <chargeType>0</chargeType>\n\
                    <chargeableUnits>66</chargeableUnits>\n\
                    <chargedUnits>66</chargedUnits>\n\
                    <dayCategory>I</dayCategory>\n\
                    <timeBand>I</timeBand>\n\
                  </ChargeDetail>\n\
                </chargeDetailList>\n\
              </ChargeInformation>\n\
            </chargeInformationList>\n\
          </BasicServiceUsed>\n\
        </basicServiceUsedList>\n\
      </mobileTerminatedCall>\n\
    </callEventDetails>\n\
  </transferBatch>\n\
</DataInterChange>",
          group: "xml"
        }
      ],
      sms: [ //groups: sms
        {
          name: "10101",
          comment: "SMS do sítě VOA",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2305                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VOB",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2306                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VOC",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2307                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VOD",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2308                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VOE1",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2330                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VOE2",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2331                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VOF",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2310                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě VECTONE",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2311                            ",
          group: "sms"
        },
        {
          name: "10101",
          comment: "SMS do sítě O2",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2302                            ",
          group: "sms"
        },
        {
          name: "11102",
          comment: "SMS do sítě T-Mobile",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2301                            ",
          group: "sms"
        },
        {
          name: "11103",
          comment: "SMS do sítě Vodafone",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2303                            ",
          group: "sms"
        },
        {
          name: "11104",
          comment: "SMS do sítě U-Fon",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  " + msisdn + "        2304                            ",
          group: "sms"
        },
        {
          name: "12199",
          comment: "SMS do pevné sítě v ČR",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420223456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13101",
          comment: "INFO_SMS_1180",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      4201180                       5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13102",
          comment: "INFO_SMS_1181",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      4201181                       5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13103",
          comment: "INFO_SMS_1188",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      4201188                       5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13104",
          comment: "INFO_SMS_1224",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      4201224                       5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13105",
          comment: "INFO_SMS_12xx",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      4201211                       5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13106",
          comment: "INFO_SMS_12xxx",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      42012123                      5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13107",
          comment: "INFO_SMS_13xxx",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      42013123                      5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13108",
          comment: "INFO_SMS_141xx",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      42014112                      5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13109",
          comment: "INFO_SMS_14xxx",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      42014234                      5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "13110",
          comment: "INFO_SMS_TIMEINFO",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420606000606                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "14101",
          comment: "GREENLINE_SMS",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420800000606                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "14102",
          comment: "EMERGENCY_SMS",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420158                        5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "14103",
          comment: "HELPLINE_SMS",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420116123                     5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "15190",
          comment: "ICQ_SMS",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      42099962030                   5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17101",
          comment: "OTHER_SMS_SHARED_PAY",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420813456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17102",
          comment: "OTHER_SMS_UNIVERSAL_NUM",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420841456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17103",
          comment: "OTHER_SMS_VIRTUAL_CARDS",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420823456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17104",
          comment: "OTHER_SMS_VOIP",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420913456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17105",
          comment: "OTHER_SMS_VOICEMAIL",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420933456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17106",
          comment: "OTHER_SMS_PRIVATE_NETS",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420953456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "17107",
          comment: "OTHER_SMS_OTHER_SERVICES",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420893456789                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "18101",
          comment: "INT_SMS_APPLE",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      447537410297                  5  5  " + msisdn + "        2300                            ",
          group: "sms"
        },
        {
          name: "20111",
          comment: "roam EU -> ČR",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      420602302522                  5  5  460602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20111",
          comment: "roam EU -> EU",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      460123123123                  5  5  460602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20112",
          comment: "roam EU -> nonEU",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      100123123123                  5  5  460602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20113",
          comment: "roam EU -> WORLD",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      355123123123                  5  5  460602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20121",
          comment: "roam nonEU -> EU",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      460123123123                  5  5  355602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20121",
          comment: "roam nonEU -> nonEU",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      100123123123                  5  5  355602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20122",
          comment: "roam nonEU -> WORLD",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      355123123123                  5  5  355602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20131",
          comment: "roam WORLD -> EU",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      460123123123                  5  5  120602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20131",
          comment: "roam WORLD -> nonEU",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      100123123123                  5  5  120602020000        2302                            ",
          group: "sms"
        },
        {
          name: "20131",
          comment: "roam WORLD -> WORLD",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      355123123123                  5  5  120602020000        2302                            ",
          group: "sms"
        },
        {
          name: "19101",
          comment: "INT_SMS_ZONE_A",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      460602302522                  5  5  " + msisdn + "        2302                            ",
          group: "sms"
        },
        {
          name: "19102",
          comment: "INT_SMS_ZONE_B",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      355602302522                  5  5  " + msisdn + "        2302                            ",
          group: "sms"
        },
        {
          name: "19103",
          comment: "INT_SMS_ZONE_C",
          value: "     8                                                " + imsi + "                 " + msisdn + "                                                                    " + timestamp() + "                      100602302522                  5  5  " + msisdn + "        2302                            ",
          group: "sms"
        }
      ],
      mms: [ //groups: mms

      ],
      data: [ //groups: lte
        {
          name: "home",
          comment: "",
          value: "07" + imsi + " " + msisdn + "      " + formated_apn_name + "                                                                " + timestamp() + "000001          160.218.032.068                      " + data_units + "                  160.218.032.068                                  ",
          group: "lte"
        },
        {
          name: "ROAM z1",
          comment: "",
          value: "05" + imsi + " " + msisdn + "      " + formated_apn_name + "                                                                " + timestamp() + "000001          193.016.219.096                      " + data_units + "                  160.218.032.068                                  ",
          group: "lte"
        },
        {
          name: "ROAM z2",
          comment: "",
          value: "05" + imsi + " " + msisdn + "      " + formated_apn_name + "                                                                " + timestamp() + "000001          193.239.182.193                      " + data_units + "                  160.218.032.068                                  ",
          group: "lte"
        },
        {
          name: "ROAM z3",
          comment: "",
          value: "05" + imsi + " " + msisdn + "      " + formated_apn_name + "                                                                " + timestamp() + "000001          193.027.231.001                      " + data_units + "                  160.218.032.068                                  ",
          group: "lte"
        }
      ]
    }
  };

  var index = 0;
  $.each(data, function (operator, operators) {
    $.each(operators, function (usageType, usageTypes) {
      for (i = 0; i < usageTypes.length; i++) {
        usageTypes[i].id = index;
        index++;
      }
    });
  });

  if (checked_operator == "all" && checked_usageType == "all") {
    return data;
  }
  if (checked_operator == "postpaid") {
    if (checked_usageType == "voice") {
      return data.postpaid.voice;
    }
    if (checked_usageType == "sms") {
      return data.postpaid.sms;
    }
    if (checked_usageType == "mms") {
      return data.postpaid.mms;
    }
    if (checked_usageType == "data") {
      return data.postpaid.data;
    }
  }
  if (checked_operator == "prepaid") {
    if (checked_usageType == "voice") {
      return data.prepaid.voice;
    }
    if (checked_usageType == "sms") {
      return data.prepaid.sms;
    }
    if (checked_usageType == "mms") {
      return data.prepaid.mms;
    }
    if (checked_usageType == "data") {
      return data.prepaid.data;
    }
  }
  if (checked_operator == "m2m") {
    if (checked_usageType == "voice") {
      return data.m2m.voice;
    }
    if (checked_usageType == "sms") {
      return data.m2m.sms;
    }
    if (checked_usageType == "mms") {
      return data.m2m.mms;
    }
    if (checked_usageType == "data") {
      return data.m2m.data;
    }
  }
}
