{literal}
<script type="text/javascript">
var tabsRelated = new Tabs({parent: getElement('tabs-generic')});
var _ = g_items;
_[13757]={icon:'INV_Misc_Fish_12'};_[13758]={icon:'INV_Misc_Fish_06'};_[13759]={icon:'INV_Misc_Fish_23'};_[13760]={icon:'INV_Misc_Fish_19'};_[13889]={icon:'INV_Misc_Fish_20'};_[13890]={icon:'INV_Misc_Fish_04'};


new Listview({template:'npc',id:'npcs',name:LANG.tab_npcs,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'‘吞噬者’特雷姆斯',name_en:"Teremus the Devourer",name_en_num:0,minlevel:63,maxlevel:63,location:["4"],type:2,classification:3,react:[-1,-1],id:7846},{name:'灵魂医者',name_en:"Spirit Healer",name_en_num:0,minlevel:60,maxlevel:60,location:["495","440","17","14","85","12","1377","490","1","357","15","215","36","406","16","66","141","33","10","51","3","400","11","47","2597","331","148","41","4","8","40","44","46","38","45","405","130","28","361","618","493"],type:7,classification:0,react:[1,1],id:6491},{name:'被诅咒的灵魂',name_en:"Damned Soul",name_en_num:0,minlevel:59,maxlevel:60,location:["41"],type:6,classification:0,react:[-1,-1],id:12378},{name:'不死的看守者',name_en:"Unliving Caretaker",name_en_num:0,minlevel:59,maxlevel:60,location:["41"],type:6,classification:0,react:[-1,-1],id:12379},{name:'不死的居民',name_en:"Unliving Resident",name_en_num:0,minlevel:59,maxlevel:60,location:["41"],type:6,classification:0,react:[-1,-1],id:12380},{name:'不安宁的阴影',name_en:"Restless Shade",name_en_num:0,minlevel:58,maxlevel:60,location:["41"],type:6,classification:0,react:[-1,-1],id:7370},{name:'哀嚎的幽灵',name_en:"Wailing Spectre",name_en_num:0,minlevel:58,maxlevel:60,location:["41"],type:6,classification:0,react:[-1,-1],id:12377},{name:'逆风术士',name_en:"Deadwind Warlock",name_en_num:0,minlevel:57,maxlevel:58,location:["41","4"],type:7,classification:0,react:[-1,-1],id:7372},{name:'鬼能精魂',name_en:"Ley Sprite",name_en_num:0,minlevel:57,maxlevel:58,location:[],type:7,classification:0,react:[-1,-1],id:12381},{name:'逆风虐待者',name_en:"Deadwind Mauler",name_en_num:0,minlevel:56,maxlevel:57,location:["41","4"],type:7,classification:0,react:[-1,-1],id:7371},{name:'法力精魂',name_en:"Mana Sprite",name_en_num:0,minlevel:56,maxlevel:57,location:[],type:7,classification:0,react:[-1,-1],id:12382},{name:'逆风蛮兵',name_en:"Deadwind Brute",name_en_num:0,minlevel:55,maxlevel:56,location:["41"],type:7,classification:0,react:[-1,-1],id:7369},{name:'逆风巨魔法师',name_en:"Deadwind Ogre Mage",name_en_num:0,minlevel:55,maxlevel:57,location:["41"],type:7,classification:0,react:[-1,-1],id:7379},{name:'暗影鹫',name_en:"Sky Shadow",name_en_num:0,minlevel:55,maxlevel:56,location:["41"],type:1,classification:0,react:[-1,-1],id:7376}]});






// 掉落


new Listview({template:'zone',id:'zones',name:LANG.tab_zones,tabs:tabsRelated,parent:'listview-generic',data:[{id:'2558',name:'逆风谷',name_en:'Deadwind Ravine',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2559',name:'钻石河',name_en:'Diamondhead River',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2560',name:'埃瑞丁营地',name_en:'Ariden\'s Camp',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2561',name:'罪恶谷',name_en:'The Vice',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2562',name:'卡拉赞',name_en:'Karazhan',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2563',name:'摩根墓场',name_en:'Morgan\'s Plot',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2697',name:'死者十字',name_en:'Deadman\'s Crossing',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2837',name:'主宰的庇护所',name_en:'The Master\'s Cellar',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2937',name:'格罗高克营地',name_en:'Grosh\'gok Compound',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,},{id:'2938',name:'沉睡峡谷',name_en:'Sleeping Gorge',name_en_num:0,minlevel:'50',maxlevel:'60',instance:'0',category:'0',territory:2,}]});


new Listview({template:'item',id:'fishing',name:LANG.tab_fishing,tabs:tabsRelated,parent:'listview-generic',extraCols:[Listview.extraCols.percent],hiddenCols:['source'],sort:['-percent','name_en'],data:[{name:"6电鳗",name_en: "Lightning Eel",name_en_num: 1,icons:"inv_misc_fish_12",level:45,classs:5,subclass:0,percent:7.0678,id:13757},{name:"6新鲜的红腮鱼",name_en: "Raw Redgill",name_en_num: 1,icons:"inv_misc_fish_06",level:45,reqlevel:35,classs:0,subclass:0,percent:1.3102,id:13758},{name:"6新鲜的夜鳞鲷鱼",name_en: "Raw Nightfin Snapper",name_en_num: 1,icons:"inv_misc_fish_23",level:45,reqlevel:35,classs:0,subclass:0,percent:3.1252,id:13759},{name:"6新鲜的阳鳞鲑鱼",name_en: "Raw Sunscale Salmon",name_en_num: 1,icons:"inv_misc_fish_19",level:45,reqlevel:35,classs:0,subclass:3,percent:3.9762,id:13760},{name:"6新鲜的白鳞鲑鱼",name_en: "Raw Whitescale Salmon",name_en_num: 1,icons:"inv_misc_fish_20",level:55,reqlevel:45,classs:0,subclass:3,percent:10.0776,id:13889},{name:"6板鳞鱼",name_en: "Plated Armorfish",name_en_num: 1,icons:"inv_misc_fish_04",level:55,classs:5,subclass:0,percent:3.2743,id:13890}]});


// new Listview({template: 'comment', id: 'comments', name: LANG.tab_comments, tabs: tabsRelated, parent: 'listview-generic', data: lv_comments});

tabsRelated.flush();
</script>
{/literal}