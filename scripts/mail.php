<?php
if(isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['email']) 
	&& !empty($_POST['email']) && isset($_POST['subject']) && !empty($_POST['subject'])
	&& isset($_POST['message']) && !empty($_POST['message'])) {
	if(preg_match("#^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $_POST['email'])) {
		$mail = 'etienne.jodry@hotmail.fr';
	    if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail))
	    	$line_feed = "\r\n";
	    else
	    	$line_feed = "\n";
	    $name=$_POST['name'];
	    $message_txt = $_POST['message'];
	    $message_html = "<html><head></head><body> $message_txt </body></html>";
	    $boundary = "-----=".md5(rand());
	    $subject = $_POST['subject'];
	    $header = "From: \"$name\" <".$_POST['email'].">".$line_feed;
	    $header.= "MIME-Version: 1.0".$line_feed;
	    $header.= "Content-Type: multipart/alternative;".$line_feed." boundary=\"$boundary\"".$line_feed;
	    $message = $line_feed."--".$boundary.$line_feed;
	    $message.= "Content-Type: text/plain; charset=\"Content-Transfer-Encoding: 8bit\"".$line_feed;
	    $message.= "Content-Transfer-Encoding: 8bit".$line_feed;
	    $message.= $line_feed.$message_txt.$line_feed;
	    $message.= $line_feed."--".$boundary.$line_feed;
	    $message.= "Content-Type: text/html; charset=\"Content-Transfer-Encoding: 8bit\"".$line_feed;
	    $message.= "Content-Transfer-Encoding: 8bit".$line_feed;
	    $message.= $line_feed.$message_html.$line_feed;
	    $message.= $line_feed."--".$boundary."--".$line_feed;
	    $message.= $line_feed."--".$boundary."--".$line_feed;
	    mail($mail,$subject,$message,$header);
	    echo true;
	} else {
		echo "The mail isn't valid";
	}
} else {
	echo "Please fill all the fileds";
}
?>