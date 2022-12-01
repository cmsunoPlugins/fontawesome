<?php
session_start(); 
if(!isset($_POST['unox']) || $_POST['unox']!=$_SESSION['unox']) {sleep(2);exit;} // appel depuis uno.php
?>
<?php
include('../../config.php');
include('lang/lang.php');
// ********************* actions *************************************************************************
if(isset($_POST['action'])) {
	switch($_POST['action']) {
		// ********************************************************************************************
		case 'plugin': ?>
		<div class="blocForm fontawesome">
			<h2><?php echo T_("Font Awesome");?></h2>
			<p><?php echo T_("This plugin allows you to insert FontAwesome icons into the page content.");?></p>
			<p><?php echo T_("It is used with the button") .'<img src="uno/plugins/fontawesome/fawesome/icons/fawesome.png" style="border:1px solid #aaa;padding:3px;margin:0 6px -5px;border-radius:2px;" />' . T_("added to the text editor when the plugin is enabled.");?></p>
			<div class="clear"></div>
		</div>
		<?php break;
		// ********************************************************************************************
	}
	clearstatcache();
	exit;
}
?>
