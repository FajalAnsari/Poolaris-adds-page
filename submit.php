<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
  $countyCode = filter_var($_POST['countryCode'], FILTER_SANITIZE_STRING);

  // email recipient
  $to = 'fajal@polariserp.com';

  $subject = 'Polaris ERP Inquiry - ' . $name;
  $message = "Name: $name\n";
  $message .= "Email: $email\n";
  $message .= (empty($phone)) ? '' : "Phone: $phone\n";

  $headers = 'From: Polaris Website <no-reply@polariserp.com>' . "\r\n" .
             'Reply-To: ' . $email . "\r\n" .
             'Content-Type: text/plain; charset=UTF-8';

  if (mail($to, $subject, $message, $headers)) {
    echo '<script>alert("Your form has been submitted successfully!");';
    echo 'window.location.href = "https://polariserp.com/thank-you/";</script>';
    exit;
  } else {
    echo '<script>alert("There was an error sending your message. Please try again later.");';
    echo 'window.location.href = "https://polariserp.com/thank-you/";</script>';
    exit;
  }
} else {
  echo 'Invalid request.';
}
?>
