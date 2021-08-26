<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Me</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Yanone+Kaffeesatz:wght@300;400;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="stylesheets/application.css" />
    <link rel="stylesheet" href="stylesheets/contact.css" />
  </head>
  <body>
    <header>
      <nav class="container">
        <ul>
          <li>
            <a href="Samuel_G_Munoz_Resume.PDF" download target="_blank">
              Resume
              <img
                src="images/link.svg"
                alt="Resume Link"
                height="20px"
                width="20px"
              />
            </a>
          </li>
          <li><a href="#">Contact Me</a></li>
        </ul>
      </nav>
      <div class="logo" style="width: 64px; height: 64px">
        <div class="underlay"></div>
        <picture>
          <source
            type="image/webp"
            srcset="
              images/samuel-g-munoz-profile_64x64_@1x.webp   1x,
              images/samuel-g-munoz-profile_128x128_@2x.webp 2x,
              images/samuel-g-munoz-profile_192x192_@3x.webp 3x,
              images/samuel-g-munoz-profile_256x256_@4x.webp 4x
            "
          />
          <source
            type="image/png"
            srcset="
              images/samuel-g-munoz-profile_64x64_@1x.png   1x,
              images/samuel-g-munoz-profile_128x128_@2x.png 2x,
              images/samuel-g-munoz-profile_192x192_@3x.png 3x,
              images/samuel-g-munoz-profile_256x256_@4x.png 4x
            "
          />
          <img
            src="images/samuel-g-munoz-profile.png"
            alt="Samuel G Munoz logo"
            width="64px"
            height="64px"
          />
        </picture>
        <div class="logo-border"></div>
      </div>
      <h1>Samuel G. Muñoz</h1>
      <h2>Full-Stack Web Developer</h2>
      <div class="border"></div>
    </header>
    <main>
      <?php
      if (isset($_POST['Email'])) {
          // EDIT THE 2 LINES BELOW AS REQUIRED
          $email_to = "samuel1698500@gmail.com";
          $email_subject = "New Portfolio Email";
          function problem($error)
          {
              echo "We are very sorry, but there were error(s) found with the form you submitted. ";
              echo "These errors appear below.<br><br>";
              echo $error . "<br><br>";
              echo "Please go back and fix these errors.<br><br>";
              die();
          }
          // validation expected data exists
          if (
              !isset($_POST['Name']) ||
              !isset($_POST['Email']) ||
              !isset($_POST['Message'])
          ) {
              problem('We are sorry, but there appears to be a problem with the form you submitted.');
          }
          $name = $_POST['Name']; // required
          $email = $_POST['Email']; // required
          $message = $_POST['Message']; // required
          $type = $_POST['Type']; // Not Required
          $budget = $_POST['Budget']; // Not Required
          $error_message = "";
          $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
          if (!preg_match($email_exp, $email)) {
              $error_message .= 'The Email address you entered does not appear to be valid.<br>';
          }
          $string_exp = "/^[A-Za-z .'-]+$/";
          if (!preg_match($string_exp, $name)) {
              $error_message .= 'The Name you entered does not appear to be valid.<br>';
          }
          if (strlen($message) < 2) {
              $error_message .= 'The Message you entered do not appear to be valid.<br>';
          }
          if (strlen($error_message) > 0) {
              problem($error_message);
          }
          $email_message = "Form details below.\n\n";
          function clean_string($string)
          {
              $bad = array("content-type", "bcc:", "to:", "cc:", "href");
              return str_replace($bad, "", $string);
          }
          $email_message .= "Name: " . clean_string($name) . "\n";
          $email_message .= "Email: " . clean_string($email) . "\n";
          $email_message .= "Type: " . clean_string($type) . "\n";
          $email_message .= "Budget: " . clean_string($budget) . "\n";
          $email_message .= "Message: " . clean_string($message) . "\n";
          // create email headers
          $headers = 'From: ' . $email . "\r\n" .
              'Reply-To: ' . $email . "\r\n" .
              'X-Mailer: PHP/' . phpversion();
          @mail($email_to, $email_subject, $email_message, $headers);
      ?>
          <!-- include your success message below -->
          <p>Thank you for contacting me. I will be in touch with you very soon.</p>
      <?php
      }
      ?>
    </main>
  </body>
</html>