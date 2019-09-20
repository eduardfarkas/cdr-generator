<?php
    if(isset($_POST['action'])) {
        $host = "localhost"; // wm61.wedos.net , localhost
        $user = "root"; // w69005_eddie , root
        $password = ""; // r2AbHMfG
        $database = "d69005_eddie"; // d69005_eddie , cdr_generator
        switch($_POST['action']) {
            case "read_count_visits":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT count(*) as c FROM visits";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo $row["c"];
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                break;
            //------------------------------------------------------------------
            case "read_count_downloads":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT count(*) as c FROM downloads";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo $row["c"];
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                break;
            //------------------------------------------------------------------
            case "read_count_downloaded_cdr":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT sum(downloaded_cdrs) as s FROM downloads";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo $row["s"];
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                break;
            //------------------------------------------------------------------
            case "read_count_downloaded_cdr_prepaid":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT sum(downloaded_cdrs) as s FROM downloads WHERE operator_type = 'prepaid'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo $row["s"];
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                break;
            //------------------------------------------------------------------
            case "read_count_downloaded_cdr_postpaid":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT sum(downloaded_cdrs) as s FROM downloads WHERE operator_type = 'postpaid'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo $row["s"];
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                break;
            //------------------------------------------------------------------
            case "read_count_downloaded_cdr_m2m":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT sum(downloaded_cdrs) as s FROM downloads WHERE operator_type = 'm2m'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo $row["s"];
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                break;
            //------------------------------------------------------------------
            case "add_visit_info":  //dodelat na cookie, napr. 20min
                if(!isset($_COOKIE['cdr_generator_visit']) ) {
                    $conn = new mysqli($host, $user, $password, $database);

                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    $ip = $_POST['ip'];
                    $country = $_POST['country'];
                    $sql = "INSERT INTO visits (user_ip, user_country) VALUES ('$ip', '$country')";

                    if ($conn->query($sql) === TRUE) {
                        //echo "New record created successfully";
                    } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }

                    $conn->close();
                }
                break;
            //------------------------------------------------------------------
            case "add_download_info":
                // Create connection
                $conn = new mysqli($host, $user, $password, $database);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $ip = $_POST['ip'];
                $howMany = $_POST['howMany'];
                $op = $_POST['operator'];
                $usg = $_POST['usage'];
                $group = $_POST['group'];
                $sql = "INSERT INTO downloads (user_ip, downloaded_cdrs, operator_type, usage_type, usage_type_group) VALUES ('$ip', '$howMany', '$op', '$usg', '$group')";

                if ($conn->query($sql) === TRUE) {
                    //echo "New record created successfully";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }

                $conn->close();

                break;
            //------------------------------------------------------------------
            //------------------------------------------------------------------
        }
    }

?>
