<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>CDR GENERATOR</title>
        <meta name="description" content="CDR GENERATOR">
        <meta name="author" content="EF">

        <!--FAVICON-->
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
        <link rel="manifest" href="images/site.webmanifest">
        <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">

        <!--FONTS-->
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        
        <!--scripts-->
        <script src="scripts/js/jQuery-v3-3-1.js"></script>
        <script src="scripts/js/notify.js"></script>
        <script src="scripts/js/jszip.js"></script>
        <script src="scripts/js/fileSaver.js"></script>
        <script src="scripts/js/cookie.js"></script>

        <script src="scripts/js/data.js?version=<?php echo date ("YmdHis.", filemtime('scripts/js/data.js')); ?>"></script>
        <script src="scripts/js/stats.js?version=<?php echo date ("YmdHis.", filemtime('scripts/js/stats.js')); ?>"></script>
        <script src="scripts/js/common.js?version=<?php echo date ("YmdHis.", filemtime('scripts/js/common.js')); ?>"></script>
        <script src="scripts/js/boxes.js?version=<?php echo date ("YmdHis.", filemtime('scripts/js/boxes.js')); ?>"></script>
        <script src="scripts/js/cdr.js?version=<?php echo date ("YmdHis.", filemtime('scripts/js/cdr.js')); ?>"></script>
        <script src="scripts/js/side_menu.js?version=<?php echo date ("YmdHis.", filemtime('scripts/js/side_menu.js')); ?>"></script>

        <!--STYLES-->
        <link rel="stylesheet" href="styles/main.css?version=<?php echo date ("YmdHis.", filemtime('styles/main.css')); ?>">
        <link rel="stylesheet" href="styles/form.css?version=<?php echo date ("YmdHis.", filemtime('styles/form.css')); ?>">
        <link rel="stylesheet" href="styles/side_menu.css?version=<?php echo date ("YmdHis.", filemtime('styles/side_menu.css')); ?>">
        <link rel="stylesheet" href="styles/top_menu.css?version=<?php echo date ("YmdHis.", filemtime('styles/top_menu.css')); ?>">
    </head>
    <body>
        <div class="sliding_box_input_data sm_i_d_c">
            <form class="input_form sm_i_d_c">
                <fieldset class="sm_i_d_c">
                    <legend class="sm_i_d_c">Vstupní data</legend>
                    <span class="form_input_name sm_i_d_c">MSISDN</span>
                    <input class="sm_i_d_c" placeholder="MSISDN" min="0" max="999999999999" maxlength="12" id="msisdn" type="number" oninput="check_input('msisdn'); maxLengthCheck(this); show_cdr(); show_info_msisdn();" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)">
                    <span class="form_input_name sm_i_d_c">IMSI</span>
                    <input class="sm_i_d_c" placeholder="IMSI" min="0" max="999999999999999" maxlength="15" type="number" id="imsi" oninput="check_input('imsi'); maxLengthCheck(this); show_cdr(); show_info_imsi();" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)">
                    <span class="form_input_name sm_i_d_c">Jednotky VOICE</span>
                    <input class="sm_i_d_c" placeholder="Jednotky VOICE" value="60" min="0" max="999999" maxlength="6" step="60" type="number" id="voice_units" oninput="check_input('voice'); maxLengthCheck(this); show_cdr();" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)">
                    <span class="form_input_name sm_i_d_c">Jednotky SMS</span>
                    <input class="sm_i_d_c" placeholder="Jednotky SMS" value="1" min="1" max="100" maxlength="3" step="1" type="number" id="sms_units" oninput="check_input('sms'); maxLengthCheck(this); show_cdr();" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)">
                    <span class="form_input_name sm_i_d_c">Jednotky MMS</span>
                    <input class="sm_i_d_c" placeholder="Jednotky MMS" value="1" min="1" max="100" maxlength="3" step="1" type="number"id="mms_units" oninput="check_input('mms'); maxLengthCheck(this); show_cdr();" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)">
                    <span class="form_input_name sm_i_d_c">Jednotky DATA</span>
                    <input class="sm_i_d_c" placeholder="Jednotky DATA" value="1024" min="0" max="19999999998" maxlength="11" step="1024" type="number" id="data_units" oninput="check_input('data'); maxLengthCheck(this); show_cdr();" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)">
                </fieldset>
                <fieldset class="sm_i_d_c">
                    <legend class="sm_i_d_c">Typ operátora</legend>
                    <table class="sm_i_d_c">
                        <tr>
                            <td class="sm_i_d_c">Prepaid</td>
                            <td class="sm_i_d_c number_of_cdrs" id="op_prp_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="operator" id="prepaid" value="prepaid" onchange="show_cdr_menu(); show_info_operator(); show_count_usg_cdr('prepaid');"></td>
                        </tr>
                        <tr>
                            <td class="sm_i_d_c">Postpaid</td>
                            <td class="sm_i_d_c number_of_cdrs" id="op_pop_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="operator" id="postpaid" value="postpaid" onchange="show_cdr_menu(); show_info_operator(); show_count_usg_cdr('postpaid');"></td>
                        </tr>
                        <tr>
                            <td class="sm_i_d_c">M2M</td>
                            <td class="sm_i_d_c number_of_cdrs" id="op_m2m_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="operator" id="m2m" value="m2m" onchange="show_cdr_menu(); show_info_operator(); show_count_usg_cdr('m2m');"></td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset class="sm_i_d_c">
                    <legend class="sm_i_d_c">Typ usage</legend>
                    <table class="sm_i_d_c">
                        <tr>
                            <td class="sm_i_d_c">Voice</td>
                            <td class="sm_i_d_c number_of_cdrs" id="usg_voice_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="usage" id="voice" value="voice" onchange="show_cdr_menu(); show_info_usage();"></td>
                        </tr>
                        <tr>
                            <td class="sm_i_d_c">SMS</td>
                            <td class="sm_i_d_c number_of_cdrs" id="usg_sms_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="usage" id="sms" value="sms" onchange="show_cdr_menu(); show_info_usage();"></td>
                        </tr>
                        <tr>
                            <td class="sm_i_d_c">MMS</td>
                            <td class="sm_i_d_c number_of_cdrs" id="usg_mms_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="usage" id="mms" value="mms" onchange="show_cdr_menu(); show_info_usage();"></td>
                        </tr>
                        <tr>
                            <td class="sm_i_d_c">DATA</td>
                            <td class="sm_i_d_c number_of_cdrs" id="usg_data_cdrs"></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="radio" name="usage" id="data" value="data" onchange="show_cdr_menu(); show_info_usage();"></td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset class="sm_i_d_c">
                    <legend class="sm_i_d_c">Ostatní nastavení</legend>
                    <table class="sm_i_d_c">
                        <tr>
                            <td class="sm_i_d_c">Povolit editaci</td>
                            <td></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="checkbox" name="editation" id="editation" value="" onchange="enable_editation();"></td>
                        </tr>
                        <tr>
                            <td class="sm_i_d_c">Vysouvání menu</td>
                            <td></td>
                            <td class="sm_i_d_c"><input class="sm_i_d_c" type="checkbox" name="sliding" id="sliding" value="" onchange="disable_sliding();"></td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </div>
        <div class="sliding_box_stats tm_s_d_c" id="stats_info">
            <div class="tm_s_d_c">
                <h4 class="tm_s_d_c">Statistiky:</h4>
                <table class="tm_s_d_c">
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">Počet návštěv celkem</td>
                        <td class="tm_s_d_c"></td>
                        <td class="tm_s_d_c stat_value" id="stat_visit_count">
                            x
                        </td>
                    </tr>
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">&nbsp;</td><td></td><td></td>
                    </tr>
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">Počet všech CDR</td>
                        <td class="tm_s_d_c"></td>
                        <td class="stat_value tm_s_d_c" id="stat_cdr_count">
                            x
                        </td>
                    </tr>
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">Počet všech podle operátora</td>
                        <td class="tm_s_d_c">
                            Prepaid <br>
                            Postpaid <br>
                            M2M
                        </td>
                        <td class="tm_s_d_c stat_value" id="stat_cdr_count_operators">
                            x <br>
                            x <br>
                            x
                        </td>
                    </tr>
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">&nbsp;</td><td class="tm_s_d_c"></td><td class="tm_s_d_c"></td>
                    </tr>
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">Počet stáhnutí</td>
                        <td class="tm_s_d_c"></td>
                        <td class="tm_s_d_c stat_value" id="stat_download_count">
                            x
                        </td>
                    </tr>
                    <tr class="tm_s_d_c">
                        <td class="tm_s_d_c">Počet stáhnutých CDR</td>
                        <td class="tm_s_d_c"></td>
                        <td class="tm_s_d_c stat_value" id="stat_download_count_cdrs">
                            x
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="sliding_box_help sm_h_c">
            <div class="sm_h_c help_div">
                <h3 class="sm_h_c">DĚLÁNO PRO CHROME!!!</h3>
                <h4 class="sm_h_c">Stahování</h4>
                <ul class="sm_h_c">
                    <li class="sm_h_c">Musí být zaškrtnuté alespoň jedno CDR, jinak tlačítko DOWNLOAD je vypnuté</li>
                    <li class="sm_h_c">Pokud je zaškrtnuto více než 1 XML, stáhne se .zip s XML</li>
                    <li class="sm_h_c">Název souboru je obvykle "timestamp_generated_.přípona". XML jsou pojmenovávány podle popisu v poznámce (to kvůli unikátnosti jmen při stažení více XML najednou). Přípony jsou generovány na základě skupiny v DB</li>
                    <li class="sm_h_c">Pokud nesouhlasí nějaký input, dojde k varování, ale stáhnout se soubor dá</li>
                </ul>
                <h4 class="sm_h_c">Inputy</h4>
                <ul class="sm_h_c">
                    <li class="sm_h_c">Po načtení stránky se zobrazí menu s inputem, vypnout se dá kliknutím kamkoli jinam, než na menu nebo druhým kliknutím na tlačítko.</li>
                    <li class="sm_h_c">Do všech polí lze vkládat jen čísla! (a to i kopírováním)</li>
                    <li class="sm_h_c">Na horní liště je vidět MSISDN, IMSI a druh zobrazovaných CDR</li>
                    <li class="sm_h_c">V DATA menu je u operátorů vidět kolik obsahují CDR a po kliknutí na nějakého se zobrazí i počet CDR k jednotlivým typům usage</li>
                    <li class="sm_h_c">Voice je v sekundách, SMS a MMS v jednotkách a data v kB</li>
                </ul>
                <h4 class="sm_h_c">CDR menu</h4>
                <ul class="sm_h_c">
                    <li class="sm_h_c">V levém horním rohu je datum poslední aktualizace CDR databáze</li>
                    <li class="sm_h_c">V řádku nadpisu tabulky se dají všechny CDR označit nebo zrušit</li>
                    <li class="sm_h_c">Lze označit vždy CDR jen z jedné skupiny (jedné tabulky)</li>
                    <li class="sm_h_c">Voice a data mají počet jednotek přímo v CDR, SMS a MMS jsou kopírovány (tzn. 2 SMS se zobrazí jako 2x CDR)</li>
                    <li class="sm_h_c">Při přepnutí operátora nebo typu usage se automaticky přizpůsobí menu podle počtu skupin v DB. (Např. PoP SMS mají 3 skupiny - sms, npp, dms, zobrazí se tedy 3 tabulky + tabulka s CDR)</li>
                    <li class="sm_h_c">Pokud v kombinaci operátor/typ usage ještě nejsou CDR, nezobrazí se nic</li>
                    <li class="sm_h_c">V horní liště se ukazuje počet všech CDR v daných kategoriích a současný stav označených CDR ke skupině</li>
                </ul>
                <h4 class="sm_h_c">Při potížích</h4>
                <ul>
                    <li class="sm_h_c">Pokud chybí nějaké CDR, stačí mi poslat příklad a na co je, doplním co nejdřív</li>
                    <li class="sm_h_c">Pokud je nějaké špatně nebo by se hodil lepší popis, řekněte co je v něm špatně a opravím co nejdřív</li>
                </ul>
                <h4 class="sm_h_c">Kontakt na mě</h4>
                <ul class="sm_h_c">
                    <li class="sm_h_c">Email: eduard.farkas@o2.cz</li>
                    <li class="sm_h_c">Skype: eda-farkas95</li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="top_menu_bar">
                <div class="top_menu_item">
                    <div class="info" id="info_msisdn_parent">
                        <div class='info_name'>Databáze updatována</div>
                        <div class="info_value"><?php echo date ("d.m.Y", filemtime('scripts/js/data.js')); ?></div>
                    </div>
                </div>
                <div class="top_menu_item">
                    <div class="info" id="info_msisdn_parent">
                        <div class='info_name'>MSISDN</div>
                        <div class="info_value" id="info_msisdn"></div>
                    </div>
                </div>
                <div class="top_menu_item">
                    <div class="info" id="info_imsi_parent">
                        <div class='info_name'>IMSI</div>
                        <div class="info_value" id="info_imsi"></div>
                    </div>
                </div>
                <div class="top_menu_item">
                    <div class="info">
                        <div class='info_name'>OPERÁTOR</div>
                        <div class="info_value" id="info_operator"></div>
                    </div>
                </div>
                <div class="top_menu_item">
                    <div class="info">
                        <div class='info_name'>TYP USAGE</div>
                        <div class="info_value" id="info_usageType"></div>
                    </div>
                </div>
                <div class="top_menu_item">
                    <div class="info">
                        <div class='info_name'>Celkový počet CDR</div>
                        <div class="info_value" id="info_cdrCount">0</div>
                    </div>
                </div>
                <div class="top_menu_item">
                    <div class="info">
                        <div class='info_name'>Označené CDR ze skupiny</div>
                        <div class="info_value" id="info_checked_cdrCount">0 z 0</div>
                    </div>
                </div>

                <div class="top_menu_item download_button">
                    <input class="xd"  id="download_button" type="button" value="DOWNLOAD" onclick="download_cdr();" disabled>
                </div>
                <div class="top_menu_item stat tm_s_d_c stat_div" onclick="show_stats();">
                    <div class="tm_s_d_c">
                        STATISTIKY
                    </div>
                </div>
            </div>
            <div class="side_menu_bar">
                <div class="side_menu_item input_data sm_i_d_c" onclick="show_input_data_form();">
                    DATA
                </div>
                <div class="side_menu_item help sm_h_c" onclick="show_help();">
                    HELP
                </div>
            </div>
            <div class="wrapper">
                <div class="first_row_boxes">
                    <div class="box_container a">
                        <div class="box" id="box0">

                        </div>
                    </div>
                    <div class="box_container b">
                        <div class="box" id="box1">

                        </div>
                    </div>
                    <div class="box_container c">
                        <div class="box" id="box2">

                        </div>
                    </div>
                </div>
                <div class="second_row_boxes">
                    <div class="box_container d">
                        <div class="box" id="box3">

                        </div>
                    </div>
                    <div class="box_container e">
                        <div class="box" id="box4">

                        </div>
                    </div>
                    <div class="box_container f">
                        <div class="box" id="box5">
                            <textarea id="cdr_container" readonly></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
