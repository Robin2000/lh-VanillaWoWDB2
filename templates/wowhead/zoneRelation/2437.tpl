{literal}
<script type="text/javascript">
var tabsRelated = new Tabs({parent: ge('tabs-generic')});
var _ = g_items;
_[15452]={icon:'INV_Bracer_08'};_[15453]={icon:'INV_Bracer_07'};_[15449]={icon:'INV_Pants_14'};_[15450]={icon:'INV_Pants_07'};_[15451]={icon:'INV_Pants_03'};_[14147]={icon:'INV_Bracer_07'};_[14151]={icon:'INV_Weapon_ShortBlade_25'};_[14148]={icon:'INV_Bracer_13'};_[14145]={icon:'INV_Weapon_ShortBlade_12'};_[14150]={icon:'INV_Chest_Cloth_24'};_[14149]={icon:'INV_Misc_Cape_18'};

level_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_minlevel_min
new Listview({template:'npc',id:'npcs',name:LANG.tab_npcs,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'虚无行者爪牙',name_en:"Voidwalker Minion",name_en_num:0,minlevel:47,level_max:47,location:[],type:3,classification:0,react:[0,0],id:8996},{name:'巴札兰',name_en:"Bazzalan",name_en_num:0,minlevel:16,level_max:16,location:["2437"],type:7,classification:1,react:[-1,-1],id:11519},{name:'‘塑能师’耶戈什',name_en:"Jergosh the Invoker",name_en_num:0,minlevel:16,level_max:16,location:["2437"],type:7,classification:3,react:[-1,-1],id:11518},{name:'奥格弗林特',name_en:"Oggleflint",name_en_num:0,tag:'怒焰酋长',minlevel:16,level_max:16,location:["2437"],type:7,classification:1,react:[-1,-1],id:11517},{name:'‘饥饿者’塔拉加曼',name_en:"Taragaman the Hungerer",name_en_num:0,minlevel:16,level_max:16,location:["2437"],type:7,classification:3,react:[-1,-1],id:11520},{name:'玛尔·恐怖图腾',name_en:"Maur Grimtotem",name_en_num:0,minlevel:14,level_max:14,location:["2437"],type:7,classification:0,react:[1,1],id:11834},{name:'钻土虫',name_en:"Earthborer",name_en_num:0,minlevel:13,level_max:14,location:["2437"],type:1,classification:1,react:[-1,-1],id:11320},{name:'熔岩元素',name_en:"Molten Elemental",name_en_num:0,minlevel:13,level_max:15,location:["2437"],type:4,classification:1,react:[-1,-1],id:11321},{name:'怒焰萨满',name_en:"Ragefire Shaman",name_en_num:0,minlevel:13,level_max:15,location:["2437"],type:7,classification:1,react:[-1,-1],id:11319},{name:'怒焰穴居人',name_en:"Ragefire Trogg",name_en_num:0,minlevel:13,level_max:15,location:["2437"],type:7,classification:1,react:[-1,-1],id:11318},{name:'燃刃信徒',name_en:"Searing Blade Cultist",name_en_num:0,minlevel:13,level_max:15,location:["2437"],type:7,classification:1,react:[-1,-1],id:11322},{name:'燃刃执行者',name_en:"Searing Blade Enforcer",name_en_num:0,minlevel:13,level_max:15,location:["2437"],type:7,classification:1,react:[-1,-1],id:11323},{name:'燃刃术士',name_en:"Searing Blade Warlock",name_en_num:0,minlevel:13,level_max:15,location:["2437"],type:7,classification:1,react:[-1,-1],id:11324}]});



new Listview({template:'quest',id:'quests',name:LANG.tab_quests,tabs:tabsRelated,parent:'listview-generic',data:[{id:'5728',name:'隐藏的敌人',name_en:"Hidden Enemies",name_en_num: 0,name_zh: '<span>中文：</span>',level:'16',reqlevel:9,side:'3',xp:180,money:Array,category:2437,category2:2,type:81},{id:'5724',name:'归还背包',name_en:"Returning the Lost Satchel",name_en_num: 0,name_zh: '<span>中文：</span>',level:'16',reqlevel:9,side:'2',itemchoices:[[15452,1],[15453,1]],icons:"inv_bracer_08,inv_bracer_07",xp:180,category:2437,category2:2,type:81},{id:'5722',name:'寻找背包',name_en:"Searching for the Lost Satchel",name_en_num: 0,name_zh: '<span>中文：</span>',level:'16',reqlevel:9,side:'2',xp:90,category:2437,category2:2,type:81},{id:'5761',name:'饥饿者塔拉加曼',name_en:"Slaying the Beast",name_en_num: 0,name_zh: '<span>中文：</span>',level:'16',reqlevel:9,side:'3',xp:180,money:Array,category:2437,category2:2,type:81},{id:'5723',name:'试探敌人',name_en:"Testing an Enemy's Strength",name_en_num: 0,name_zh: '<span>中文：</span>',level:'15',reqlevel:9,side:'2',xp:160,money:Array,category:2437,category2:2,type:81},{id:'5725',name:'毁灭之力',name_en:"The Power to Destroy...",name_en_num: 0,name_zh: '<span>中文：</span>',level:'16',reqlevel:9,side:'2',itemchoices:[[15449,1],[15450,1],[15451,1]],icons:"inv_pants_14,inv_pants_07,inv_pants_03",xp:180,category:2437,category2:2,type:81}]});

new Listview({template:'item',id:'item_quest_reward',name:LANG.tab_quest_reward,tabs:tabsRelated,parent:'listview-generic',extraCols:[],visibleCols:['armor', 'slot'],hiddenCols:['source'],sort:['name_en'],data:[{name:"5泥泞护腿",name_en: "Dredgemire Leggings",name_en_num: 1,level:18,classs:4,subclass:2,armor:65,slot:7,id:15450},{name:"5羽珠护腕",name_en: "Featherbead Bracers",name_en_num: 1,level:18,classs:4,subclass:1,armor:14,slot:9,id:15452},{name:"5石像鬼护腿",name_en: "Gargoyle Leggings",name_en_num: 1,level:18,classs:4,subclass:3,armor:141,slot:7,id:15451},{name:"5苍白长裤",name_en: "Ghastly Trousers",name_en_num: 1,level:18,classs:4,subclass:1,armor:28,slot:7,id:15449},{name:"5草原狮护腕",name_en: "Savannah Bracers",name_en_num: 1,level:18,classs:4,subclass:2,armor:33,slot:9,id:15453}]});


// 掉落level_minlevel_min
new Listview({template:'item',id:'item_drop',name:LANG.tab_drops,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:['source'],sort:['name_en'],data:[{name:"5被诅咒的魔刃",name_en: "Cursed Felblade",name_en_num: 1,level:18,reqlevel:13,classs:2,subclass:7,id:14145},{name:"5洞穴护腕",name_en: "Cavedweller Bracers",name_en_num: 1,level:18,reqlevel:13,classs:4,subclass:3,id:14147},{name:"5水晶腕轮",name_en: "Crystalline Cuffs",name_en_num: 1,level:18,reqlevel:13,classs:4,subclass:1,id:14148},{name:"5地下斗篷",name_en: "Subterranean Cape",name_en_num: 1,level:18,reqlevel:13,classs:4,subclass:1,id:14149},{name:"5招魂法袍",name_en: "Robe of Evocation",name_en_num: 1,level:18,reqlevel:13,classs:4,subclass:1,id:14150},{name:"5圣歌之刃",name_en: "Chanting Blade",name_en_num: 1,level:18,reqlevel:13,classs:2,subclass:15,id:14151}]});


new Listview({template:'npc',id:'bosses',name:LANG.tab_bosses,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'‘塑能师’耶戈什',name_en:"Jergosh the Invoker",name_en_num:0,minlevel:16,level_max:16,location:["2437"],type:7,classification:3,react:[-1,-1],id:11518},{name:'‘饥饿者’塔拉加曼',name_en:"Taragaman the Hungerer",name_en_num:0,minlevel:16,level_max:16,location:["2437"],type:7,classification:3,react:[-1,-1],id:11520}]});




// new Listview({template: 'comment', id: 'comments', name: LANG.tab_comments, tabs: tabsRelated, parent: 'listview-generic', data: lv_comments});

tabsRelated.flush();
</script>
{/literal}