{include file='header.tpl'}
		<div id="main">

			<div id="main-precontents"></div>
			<div id="main-contents" class="main-contents iteminfo">

				<script type="text/javascript">
					var g_pageInfo = {ldelim}type: {$page.type}, typeId: {$page.typeid}, name: '{$item.name|escape:"quotes"}'{rdelim};
					g_initPath({$page.path});
				</script>


				<div class="text">
					{strip}
					<!--a href="javascript:;" class="button-red" onclick="this.blur(); g_getIngameLink(
						{if $item.quality==0}
							'ff9d9d9d',
						{elseif $item.quality==1}
							'ffffffff',
						{elseif $item.quality==2}
							'ff1eff00',
						{elseif $item.quality==3}
							'ff0070dd',
						{elseif $item.quality==4}
							'ffa335ee',
						{elseif $item.quality==5}
							'ffff8000',
						{elseif $item.quality==6}
							'ffe5cc80',
						{elseif $item.quality==7}
							'ffe5cc80',
						{elseif $item.quality==8}
							'ffffff98',
						{else}
							'ff71d5ff',
						{/if}
						'item:{$item.entry}:0:0:0:0:0:0:0:0', '{$item.name|replace:'"':'\\\\&quot;'}')">
					<em><b><i>Link</i></b><span>{#Game_link#}</span></em></a-->
					{/strip}
					<h1>{$item.name}</h1>

					<div id="icon{$item.entry}-generic" style="float:left"></div>
					<div id="tooltip{$item.entry}-generic" class="tooltip" style="padding-top: 1px;visible:1">
					<table >
					<tr><td>{$item.info}</td><th style="background-position: top right"></th></tr>
					<tr><th style="background-position: bottom left"></th><th style="background-position: bottom right"></th></tr>
					</table>

					</div>




					<script type="text/javascript">
						ge('icon{$item.entry}-generic').appendChild(Icon.create('{$item.iconname}', 2, 0, 0, {$item.stackable}));
						Tooltip.fix(ge('tooltip{$item.entry}-generic'), 1, 1);
					</script>



				<table class="infobox">
					<td>
					<div style="max-width:300px;white-space:normal">
							{if $item.info}
								{$item.info}
							{/if}
					</div>				
					</td>
					</tr>

					<tr><td>
						<div class="infobox-spacer"></div>
						<ul>
							{* Уровень вещи *}
							{if $item.level}<li><div>物品品级: {$item.level}</div></li>{/if}
							{* Стоимость вещи *}
							{if $item.buygold or $item.buysilver or $item.buycopper}
								<li><div>
									{#Buy_for#}:
									{if $item.buygold}<span class="moneygold">{$item.buygold}</span>{/if}
									{if $item.buysilver}<span class="moneysilver">{$item.buysilver}</span>{/if}
									{if $item.buycopper}<span class="moneycopper">{$item.buycopper}</span>{/if}
								</div></li>
							{/if}
							{if $item.sellgold or $item.sellsilver or $item.sellcopper}
								<li><div>
									{#Sells_for#}:
									{if $item.sellgold}<span class="moneygold">{$item.sellgold}</span>{/if}
									{if $item.sellsilver}<span class="moneysilver">{$item.sellsilver}</span>{/if}
									{if $item.sellcopper}<span class="moneycopper">{$item.sellcopper}</span>{/if}
								</div></li>
							{/if}

							{if isset($item.disenchantskill)}<li><div>{#Disenchantable#} (<span class="tip" onmouseover="Tooltip.showAtCursor(event, LANG.tooltip_reqenchanting, 0, 0, 'q')" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">{$item.disenchantskill}</span>)</div></li>{/if}
							{if isset($item.key)}<li><div>{#Can_be_placed_in_the_keyring#}</div></li>{/if}
						</ul>
					</td></tr>
					<tr>
					<td><div class="infobox-spacer"></div>
					{if $item.thumb}
						{if $item.wiki}
						<a target="_blank" href="{$item.wiki}">
						{/if}
					
						{if $item.wiki}
						<p style="text-align:center">百科知识</p>	
						</a>
						{/if}	
					{/if}
					</td>
					</tr>
				</table>

				<div style="clear: left"></div>
{if isset($item.pageTexts)}
	<h3>
	{if $smarty.session.locale==4}
	内容
	{else}
	Content
	{/if}
	</h3>
	<div id="book-generic"></div>
	{strip}
		<script>
			new Book({ldelim} parent: 'book-generic', pages: [
			{foreach from=$item.pageTexts item=pagetext name=j}
				'{$pagetext|escape:"javascript"}'
				{if $smarty.foreach.j.last}{else},{/if}
			{/foreach}
			]{rdelim})
		</script>
	{/strip}
{/if}


<h2>{#Related#}</h2>

</div>

				<div id="tabs-generic"></div>
				<div id="listview-generic" class="listview"></div>
<script type="text/javascript">
{if isset($allitems)}{include			file='bricks/allitems_table.tpl'		data=$allitems			}{/if}
{if isset($allspells)}{include			file='bricks/allspells_table.tpl'		data=$allspells			}{/if}
{if isset($allachievements)}{include	file='bricks/allachievements_table.tpl'	data=$allachievements	}{/if}
var tabsRelated = new Tabs({ldelim}parent: ge('tabs-generic'){rdelim});
{if isset($item.unlocks)}{include				file='bricks/object_table.tpl'			id='unlocks'				tabsid='tabsRelated' data=$item.unlocks				name='unlocks'			}{/if}
{if isset($item.fishedin)}{include				file='bricks/zone_table.tpl'			id='fished-in'				tabsid='tabsRelated' data=$item.fishedin			name='fishedin'			}{/if}
{if isset($item.droppedby)}{include				file='bricks/creature_table.tpl'		id='dropped-by'				tabsid='tabsRelated' data=$item.droppedby			name='droppedby'		}{/if}
{if isset($item.soldby)}{include				file='bricks/creature_table.tpl'		id='sold-by'				tabsid='tabsRelated' data=$item.soldby				name='soldby'			}{/if}
{if isset($item.teaches)}{include				file='bricks/spell_table.tpl'			id='teaches-recipe'			tabsid='tabsRelated' data=$item.teaches				name='teaches'			}{/if}
{if isset($item.containedinobject)}{include		file='bricks/object_table.tpl'			id='contained-in-object'	tabsid='tabsRelated' data=$item.containedinobject	name='containedin'		}{/if}
{if isset($item.minedfromobject)}{include		file='bricks/object_table.tpl'			id='mined-from-object'		tabsid='tabsRelated' data=$item.minedfromobject		name='minedfrom'		}{/if}
{if isset($item.gatheredfromobject)}{include	file='bricks/object_table.tpl'			id='gathered-from-object'	tabsid='tabsRelated' data=$item.gatheredfromobject	name='gatheredfrom'		}{/if}
{if isset($item.containedinitem)}{include		file='bricks/item_table.tpl'			id='contained-in-item'		tabsid='tabsRelated' data=$item.containedinitem		name='containedin'		}{/if}
{if isset($item.contains)}{include				file='bricks/item_table.tpl'			id='contains'				tabsid='tabsRelated' data=$item.contains			name='contains'			}{/if}
{if isset($item.pickpocketingloot)}{include		file='bricks/creature_table.tpl'		id='pick-pocketed-from'		tabsid='tabsRelated' data=$item.pickpocketingloot	name='pickpocketedfrom'	}{/if}
{if isset($item.skinnedfrom)}{include			file='bricks/creature_table.tpl'		id='skinned-from'			tabsid='tabsRelated' data=$item.skinnedfrom			name='skinnedfrom'		}{/if}
{if isset($item.prospectingloot)}{include		file='bricks/item_table.tpl'			id='prospected-from'		tabsid='tabsRelated' data=$item.prospectingloot		name='prospectedfrom'	}{/if}
{if isset($item.canbeplacedin)}{include			file='bricks/item_table.tpl'			id='can-be-placed-in'		tabsid='tabsRelated' data=$item.canbeplacedin		name='canbeplacedin'	}{/if}
{if isset($item.objectiveof)}{include			file='bricks/quest_table.tpl'			id='objective-of'			tabsid='tabsRelated' data=$item.objectiveof			name='objectiveof'		}{/if}
{if isset($item.starts)}{include				file='bricks/quest_table.tpl'			id='starts'					tabsid='tabsRelated' data=$item.starts				name='starts'			}{/if}
{if isset($item.rewardof)}{include				file='bricks/quest_table.tpl'			id='reward-of'				tabsid='tabsRelated' data=$item.rewardof			name='rewardfrom'		}{/if}
{if isset($item.reagentfor)}{include			file='bricks/spell_table.tpl'			id='reagent-for'			tabsid='tabsRelated' data=$item.reagentfor			name='reagentfor'		}{/if}
{if isset($item.createdfrom)}{include			file='bricks/spell_table.tpl'			id='created-by'				tabsid='tabsRelated' data=$item.createdfrom			name='createdby'		}{/if}
{if isset($item.disenchanting)}{include			file='bricks/item_table.tpl'			id='disenchanting'			tabsid='tabsRelated' data=$item.disenchanting		name='disenchanting'	}{/if}
{if isset($item.disenchantedfrom)}{include		file='bricks/item_table.tpl'			id='disenchanting'			tabsid='tabsRelated' data=$item.disenchantedfrom	name='disenchantedfrom'	}{/if}
{if isset($item.milling)}{include				file='bricks/item_table.tpl'			id='milling'				tabsid='tabsRelated' data=$item.milling				name='milling'			}{/if}
{if isset($item.milledfrom)}{include			file='bricks/item_table.tpl'			id='milling'				tabsid='tabsRelated' data=$item.milledfrom			name='milledfrom'		}{/if}
{if isset($item.criteria_of)}{include 			file='bricks/achievement_table.tpl' 	id='criteria-of'			tabsid='tabsRelated' data=$item.criteria_of			name='criteriaof'		}{/if}
tabsRelated.flush();
</script>




<div class="grid" id="mainGrid">
	{foreach from=$item.refnews item=curr name=j}
	<div class="grid-item">
		<div class="thumbnail n-img{$curr.thumbSize}">
		{if ($curr.media_type=='video')}
		<div class="video-box" >
			<video width="100%" height="100%" tabindex="2" mediatype="video" preload="none" src="{$curr.thumb[1]}" poster="{$curr.thumb[0]}" id="video{$curr.nid}">
			</video>
			<div class="video-img" onclick="playVideoNow({$curr.nid})" id="img{$curr.nid}"></div>
			<span style="visibility:hidden" id="part{$curr.nid}">{$curr.part}</span>
		</div>
		{elseif isset($curr.thumb)}
		<div>
			{foreach from=$curr.thumb item=url}
			<a href="/info-{$curr.nid}.html" target="_blank"><img style="width:33.33%;height:75px" src="{$url}" alt=""></a>
			{/foreach}
		</div>
		{/if}
		
			<div class="caption">
				<div class="n-img{$curr.thumbSize}">
					<a href="/info-{$curr.nid}.html" target="_blank">{$curr.title}</a>
				</div> 
				<p><div class="n_tip">{$curr.source}&nbsp;{$curr.author} </div></p>
			</div>
		</div>
	</div>
	{/foreach}
</div><!--row-->                                                            


				{include file='bricks/contribute.tpl'}
			</div>
		</div>

{include file='footer.tpl'}
