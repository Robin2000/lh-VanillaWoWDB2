<?php
global $page;

$title = "趣味魔兽世界小故事";

$c=$podrazdel;

$tplfile = 'story/'.$c.'.tpl';

$page = array(
	'Mapper' => false,
	'Book' => false,
	'Talent' => true,
	'Title' => $title,
	'tab' => 1,
	'type' => 0,
	'typeid' => $c,
	'path' => path(1, $c)
);
$smarty->assign('page', $page);

$smarty->display($tplfile);

?>