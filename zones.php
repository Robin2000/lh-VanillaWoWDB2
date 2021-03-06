<?php

// Необходима функция creatureinfo
require_once('includes/allnpcs.php');

$smarty->config_load($conf_file, 'zones');

@list($type) = extract_values($podrazdel);

$cache_key = cache_key($type);

if(!$zones = load_cache(2, $cache_key))
{

	unset($zones);

	$rows = $DB->select('
		SELECT *, areatableID as area, name_loc'.$_SESSION['locale'].' as name ,type as instance
		FROM aowow_zones
			{WHERE
			type = ?d}
		{LIMIT ?d}
		',
		isset($type) ? $type : DBSIMPLE_SKIP,
		($AoWoWconf['limit']!=0)? $AoWoWconf['limit']: DBSIMPLE_SKIP
	);
	$zones = array();
	foreach ($rows as $row) {
		$zones[] = $row;
	}
	
	save_cache(5, $cache_key, $zones);
}

global $page;
$page = array(
	'Mapper' => false,
	'Book' => false,
	'Title' => $smarty->get_config_vars('Zones'),
	'tab' => 0,
	'type' => 0,
	'typeid' => 0,
	'path' => path(0, 6, $type)
);
$smarty->assign('page', $page);

$smarty->assign('zones', $zones);
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Загружаем страницу
$smarty->display('zones.tpl');

?>