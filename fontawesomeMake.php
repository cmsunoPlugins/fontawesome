<?php
if(!isset($_SESSION['cmsuno'])) exit();
?>
<?php
if(strpos($Ucontent, 'class="fa ')!==false)
	{
	$Uhead .= '<link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />'."\r\n";
	}
?>
