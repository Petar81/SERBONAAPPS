<?php
// get the POST parameter from form
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$message = $_POST["message"];
$phone = $_POST["phone"];
$company = $_POST["company"];
$country = $_POST["country"];
$address = $_POST["address"];
$zip = $_POST["zip"];



$to = $email;
$subject = "Serbona Apps has been inquired by ". $firstName . " " . $lastName ;

$email_message = "
<html>
<head>
<title>Serbona Apps Message Center</title>
</head>
<body>
<h1>Serbona Apps Message Center</h1>
<h2>Your email card:</h2>
<h3>Full name: " . $firstName . " " . $lastName . "</h3>
<h3>Email: " . $email . "</h3>
<h3>Phone: " . $phone . "</h3>
<h3>Company: " . $company . "</h3>
<h3>Address: " . $address . "</h3>
<h3>ZIP: " . $zip . "</h3>
<h3>Country: " . $country . "</h3>
<h4>Message: ". $message . "</h4>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <noreply@serbonaapps.com>' . "\r\n";
$headers .= 'Bcc: serbonaapps@gmail.com, info@serbonaapps.com' . "\r\n";


if(mail($to,$subject,$email_message,$headers)){
    // Output "no suggestion" if no hint was found or output correct values
    echo "Hi " . $firstName . ", <br /> Your message is on the way to our inbox. <br /> Thanks for contacting us, we'll reply shortly. <br /> <img src='https://serbonaapps.com/images/serbona-animated-black-bg.gif' width='140' alt='serbona animated sun' />";
};


?>