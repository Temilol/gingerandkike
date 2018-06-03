<?php
  extract($_POST);
  $to = 'temz4rill@gmail.com';
//   $to = 'aderibigbe.temilola@yahoo.com';
  $subject = $name.' RSVP';
  $msg = 'Hello, '."\n\n"
    .'Congratulation on your celebration.'."\n"
    .'I will be attending your wedding.'."\n\n"
    .'Name: '.$name."\n"
    .'Contact number: '.$phone."\n\n"
    ."Regards.";
  // send email

  mail($to,$subject,$msg)
  
//   var_dump(mail($to,$subject,$msg));
//   die();

?>