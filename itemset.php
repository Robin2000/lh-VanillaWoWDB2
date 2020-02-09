<?php
require_once('includes/allitems.php');
require_once('includes/allspells.php');


$smarty->config_load($conf_file, 'itemset');

$id = intval($podrazdel);

$cache_key = cache_key($id);

if(!$itemset = load_cache(8, $cache_key))
{
	unset($itemset);

	$row = $DB->selectRow("SELECT * FROM ?_itemset WHERE itemsetID=? LIMIT 1", $id);
	if($row)
	{
		$itemset = array();
		$itemset['entry'] = $row['itemsetID'];
		$itemset['name'] = $row['name_loc'.$_SESSION['locale']];
		$itemset['level_min'] = 255;
		$itemset['level_max'] = 0;
		$itemset['count'] = 0;
		$x = 0;
		$itemset['pieces'] = array();
		for($j=1;$j<=10;$j++)
		{
			if($row['item'.$j])
			{
				$itemset['pieces'][$itemset['count']] = array();
				$itemset['pieces'][$itemset['count']] = iteminfo($row['item'.$j]);

				if($itemset['pieces'][$itemset['count']]['level'] < $itemset['level_min'])
					$itemset['level_min'] = $itemset['pieces'][$itemset['count']]['level'];

				if($itemset['pieces'][$itemset['count']]['level'] > $itemset['level_max'])
					$itemset['level_max'] = $itemset['pieces'][$itemset['count']]['level'];

				$itemset['count']++;
			}
		}
		$itemset['spells'] = array();
		for($j=1;$j<=8;$j++)
			if($row['spell_id'.$j])
			{
				$itemset['spells'][$x] = array();
				$itemset['spells'][$x]['entry'] = $row['spell_id'.$j];
				$itemset['spells'][$x]['tooltip'] = spell_desc($row['spell_id'.$j]);
				$itemset['spells'][$x]['bonus'] = $row['bonus'.$j];
				$x++;
			}
		for($i=0;$i<=$x-1;$i++)
			for($j=$i;$j<=$x-1;$j++)
				if($itemset['spells'][$j]['bonus'] < $itemset['spells'][$i]['bonus'])
				{
					UnSet($tmp);
					$tmp = $itemset['spells'][$i];
					$itemset['spells'][$i] = $itemset['spells'][$j];
					$itemset['spells'][$j] = $tmp;
				}
	}
	save_cache(8, $cache_key, $itemset);
}
$smarty->assign('itemset', $itemset);

global $page;
$page = array(
	'Mapper' => false,
	'Book' => false,
	'Title' => $itemset['name'].' - '.$smarty->get_config_vars('Item_Sets'),
	'tab' => 0,
	'type' => 4,
	'typeid' => $itemset['entry'],
	'path' => '[0, 2]'
);
$smarty->assign('page', $page);

// --Передаем данные шаблонизатору--
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
$smarty->assign('allitems', $allitems);
$smarty->assign('allspells', $allspells);
// Запускаем шаблонизатор
$smarty->display('itemset.tpl');
?>