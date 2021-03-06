{include file='header.tpl'}
	<div id="main">

		<div id="main-precontents"></div>
		<div id="main-contents" class="main-contents">

			<script type="text/javascript">
				var g_pageInfo = {ldelim}type: 1, typeId: {$npc.entry}, name: '{$npc.name|escape:"quotes"}'{rdelim};
				g_initPath([0,4,{$npc.type}]);
			</script>

			<div class="text">				
				<h1>{$npc.name}{if $npc.subname} &lt;{$npc.subname}&gt;{/if}</h1>

			<div class="infobox">
				<div>{#Quick_Facts#}</div>
				<div class="infobox-spacer"></div>
				<div>
					<ul>
						<li><div>{#Level#}: {if $npc.minlevel<>$npc.maxlevel}{$npc.minlevel} - {/if}{$npc.maxlevel}</div></li>
						<li><div>{#Classification#}: {$npc.rank}</div></li>
						<li><div>{#React#}: <span class="q{if $npc.A==-1}10{elseif $npc.A==1}2{else}{/if}">A</span> <span class="q{if $npc.H==-1}10{elseif $npc.H==1}2{else}{/if}">H</span></div></li>
						<li><div>{#Faction#}: <a href="http://www.topwow.top/faction-{$npc.faction_num}.html">{$npc.faction}</a></div></li>
						<li><div>{#Health#}: {if $npc.minhealth<>$npc.maxhealth}{$npc.minhealth} - {/if}{$npc.maxhealth}</div></li>
						{if ($npc.minmana or $npc.maxmana)}
						<li><div>{#Mana#}: {if $npc.minmana<>$npc.maxmana}{$npc.minmana} - {/if}{$npc.maxmana}</div></li>
						{/if}
						{if ($npc.moneysilver>0) or ($npc.moneygold>0) or ($npc.moneycopper>0)}
												<li><div>{#Wealth#}:{if ($npc.moneygold>0)}
						 <span class="moneygold">{$npc.moneygold}</span>{/if}
						{if ($npc.moneysilver>0)}
						 <span class="moneysilver">{$npc.moneysilver}</span>{/if}
						{if ($npc.moneycopper>0)}
						 <span class="moneycopper">{$npc.moneycopper}</span>{/if}
						</div></li>
						{/if}
						{if $npc.mindmg > 0 and $npc.maxdmg > 0 and $npc.dps > 0}
												<li><div>{#Damage#}: {$npc.mindmg} - {$npc.maxdmg} <br> ({$npc.dps} dps)</div></li>
						{elseif $npc.mindmg > 0 and $npc.maxdmg > 0}
												<li><div>{#Damage#}: {$npc.mindmg} - {$npc.maxdmg}</div></li>
						{/if} 
						{if $npc.attackspeed > 0}
												<li><div>{#AttackSpeed#}: {$npc.attackspeed} {#sec#}</div></li>
						{/if} 
						{if $npc.armor > 0}
												<li><div>{#Armor#}: {$npc.armor}</div></li>
						{/if} 
						</ul>

					</div>
					<div>{#Resistances#}</div>
					<div class="infobox-spacer"></div>
					
					<div>
						{if $npc.resistance1 eq 0 and $npc.resistance2 eq 0 and $npc.resistance3 eq 0 and $npc.resistance4 eq 0 and $npc.resistance5 eq 0 and $npc.resistance6 eq 0}
							<div><center>{#None#}</center></div>
						{else}
						<ul>
							{if $npc.resistance1 > 0}
								<li><div>{#Resistance1#}: {$npc.resistance1}</div></li>
							{elseif $npc.resistance1 < 0}
								<li><div>{#Resistance1#}: {#Immune#}</div></li>
							{/if}
							{if $npc.resistance2 > 0}
								<li><div>{#Resistance2#}: {$npc.resistance2}</div></li>
							{elseif $npc.resistance2 < 0}
								<li><div>{#Resistance2#}: {#Immune#}</div></li>
							{/if}
							{if $npc.resistance3 > 0}
								<li><div>{#Resistance3#}: {$npc.resistance3}</div></li>
							{elseif $npc.resistance3 < 0}
								<li><div>{#Resistance3#}: {#Immune#}</div></li>
							{/if}
							{if $npc.resistance4 > 0}
								<li><div>{#Resistance4#}: {$npc.resistance4}</div></li>
							{elseif $npc.resistance4 < 0}
								<li><div>{#Resistance4#}: {#Immune#}</div></li>
							{/if}
							{if $npc.resistance5 > 0}
								<li><div>{#Resistance5#}: {$npc.resistance5}</div></li>
							{elseif $npc.resistance5 < 0}
								<li><div>{#Resistance5#}: {#Immune#}</div></li>
							{/if}
							{if $npc.resistance6 > 0}
								<li><div>{#Resistance6#}: {$npc.resistance6}</div></li>
							{elseif $npc.resistance6 < 0}
								<li><div>{#Resistance6#}: {#Immune#}</div></li>
							{/if}
						</ul>
						{/if}
					
				</div>
				<div class="infobox-spacer">&nbsp;</div>
				<div style="width:165px;overflow:hidden">
					<div style="padding-top:15px;">

						<img id="thumbimg" onclick="showbig()" onerror="this.style.display='none'" onload="this.style.display=''" style="width:177px;cursor:pointer"/>

						<div id="bigbg" style="display:none" onClick="this.style.display='none'">
							<img id='bigimg' src='' style="height:80%;margin-top:5%">
						</div>

						{if $npc.wiki}
							<a target="_blank" href="{$npc.wiki}">
							<p style="text-align:center">百科知识</p>	
							</a>
						{/if}	

					</div>
				</div>
			</div>

{if $npc.heroic}
				<div>{if $npc.heroic.type == 1}{#This_is_heroic_NPC#}{else}{#This_is_normal_NPC#}{/if} <a href="http://www.topwow.top/npc-{$npc.heroic.entry}.html">{$npc.heroic.name}</a>.</div>
				<div class="pad"></div>
{/if}

{if $npc.position}
				<div>{#This_NPC_can_be_found_in#} {strip}<span id="locations">
					{foreach from=$npc.position item=zone name=zone}
						<a href="javascript:;" onclick="
						{if $zone.atid}
							myMapper.update(
								{ldelim}
									zone:{$zone.atid}
									{if $zone.points}
										,
									{/if}
								{if $zone.points}
									coords:[
										{foreach from=$zone.points item=point name=point}
												[{$point.x},{$point.y},
												{ldelim}
													label:'$<br>
													<div class=q0>
														<small>
															{if $point.type == 0}
																{#Respawn#}:
																{if isset($point.r.h)} {$point.r.h}{#hr#}{/if}
																{if isset($point.r.m)} {$point.r.m}{#min#}{/if}
																{if isset($point.r.s)} {$point.r.s}{#sec#}{/if} -
																{if isset($point.rmax.h)} {$point.rmax.h}{#hr#}{/if}
																{if isset($point.rmax.m)} {$point.rmax.m}{#min#}{/if}
																{if isset($point.rmax.s)} {$point.rmax.s}{#sec#}{/if}
															{else}
																{#Waypoint#}
															{/if}
														</small>
													</div>',type:'{$point.type}'
												{rdelim}]
												{if !$smarty.foreach.point.last},{/if}
										{/foreach}
									]
								{/if}
								{rdelim});
							ge('mapper-generic').style.display='block';
						{else}
							ge('mapper-generic').style.display='none';
						{/if}
								g_setSelectedLink(this, 'mapper'); return false" onmousedown="return false">
							{$zone.name}</a>{if $zone.population > 1}&nbsp;({$zone.population}){/if}{if $smarty.foreach.zone.last}.{else}, {/if}
					{/foreach}
				</span></div>
{/strip}
				<div id="mapper-generic"></div>

				<div class="clear"></div>

				<script type="text/javascript">
					var myMapper = new Mapper({ldelim}parent: 'mapper-generic', zone: '{$npc.position[0].atid}'{rdelim});
					gE(ge('locations'), 'a')[0].onclick();
				</script>
{else}
				{#This_NPC_cant_be_found#}
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
{if isset($npc.sells)}{include 			file='bricks/item_table.tpl'			id='sells'				name='sells'			tabsid='tabsRelated' data=$npc.sells			}{/if}
{if isset($npc.drop)}{include 			file='bricks/item_table.tpl'			id='drop'				name='drops'			tabsid='tabsRelated' data=$npc.drop				}{/if}
{if isset($npc.pickpocketing)}{include	file='bricks/item_table.tpl'			id='pick-pocketing'		name='pickpocketing'	tabsid='tabsRelated' data=$npc.pickpocketing	}{/if}
{if isset($npc.skinning)}{include		file='bricks/item_table.tpl'			id='skinning'			name='skinning'			tabsid='tabsRelated' data=$npc.skinning			}{/if}
{if isset($npc.starts)}{include			file='bricks/quest_table.tpl'			id='starts'				name='starts'			tabsid='tabsRelated' data=$npc.starts			}{/if}
{if isset($npc.ends)}{include			file='bricks/quest_table.tpl'			id='ends'				name='ends'				tabsid='tabsRelated' data=$npc.ends				}{/if}
{if isset($npc.abilities)}{include		file='bricks/spell_table.tpl'			id='abilities'			name='abilities'		tabsid='tabsRelated' data=$npc.abilities		}{/if}
{if isset($npc.objectiveof)}{include	file='bricks/quest_table.tpl'			id='objective-of'		name='objectiveof'		tabsid='tabsRelated' data=$npc.objectiveof		}{/if}
{if isset($npc.teaches)}{include		file='bricks/spell_table.tpl'			id='teaches-ability'	name='teaches'			tabsid='tabsRelated' data=$npc.teaches			}{/if}
{if isset($npc.criteria_of)}{include 	file='bricks/achievement_table.tpl' 	id='criteria-of'		name='criteriaof'		tabsid='tabsRelated' data=$npc.criteria_of		}{/if}
{if isset($npc.event_ai)}{include 		file='bricks/event_ai.tpl' 				id='event_ai'			name='eventai'			tabsid='tabsRelated' data=$npc.event_ai			}{/if}

tabsRelated.flush();
</script>


<div class="grid" id="mainGrid">
	{foreach from=$npc.refnews item=curr name=j}
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

<!---->
{if $map0Poi}
  <h2>东部王国地图</h2>
  <script>
  var map0Poi=[{foreach from=$map0Poi item=zone name=zone}[{$zone.x}, {$zone.y}],{/foreach}];
  </script>
  <iframe allowfullscreen="true" style="overflow:hidden" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="500px" src="http://www.topwow.top/wowgis/map-0.html"></iframe>
{/if} 

{if $map1Poi}
  <h2>卡利姆多地图</h2>
  <script>
  var map1Poi=[{foreach from=$map1Poi item=zone name=zone}[{$zone.x}, {$zone.y}],{/foreach}];
  </script>
  <iframe allowfullscreen="true" style="overflow:hidden" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="500px" src="http://www.topwow.top/wowgis/map-1.html"></iframe>
{/if}
<!---->

			{include file='bricks/contribute.tpl'}

			<div class="clear"></div>
		</div>
	</div>

{include file='footer.tpl'}
