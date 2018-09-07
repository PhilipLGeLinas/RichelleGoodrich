<?php
$server = "localhost";
$database = "id6666624_goodrichdb";
$username = "id6666624_r_e_goodrich";
$password = "pawsbl33";
$conn = new mysqli($server, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$fname = $lname = $email = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
}
setcookie("name", $fname . " " . $lname);
setcookie("email", $email);
$insert = "INSERT INTO users (first_name, last_name, email_address) VALUES ('$fname', '$lname', '$email')";
$conn->query($insert);
$conn->close();
?>
<script>
    // Redirect to the Home Page
    window.location = "http://richellegoodrich.000webhostapp.com/index.php";
</script>
