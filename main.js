var row=0;
var col=8;
var cityE=new Array();
var flag=0;

$(document).ready(function() {
    var cityArray=new Array(2649);
     city(cityArray);
     $('button').click(function(event) {
        queryButton(cityArray);
     });

    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e.keyCode==13){
           $('button').click();
        }
    }
    setInterval(function(){  var dat=Date();
    $('.date').text(dat);},1000);
  

 });



function city(cityArray){    
    var cityJson={
success: "1",
result: {
1: {
weaid: "1",
citynm: "北京",
cityno: "beijing",
cityid: "101010100",
area_1: "北京",
area_2: "城区",
area_3: ""
},
2:{
weaid: "2",
citynm: "朝阳",
cityno: "bjchaoyang",
cityid: "101010300",
area_1: "北京",
area_2: "朝阳",
area_3: ""
},
3: {
weaid: "3",
citynm: "顺义",
cityno: "shunyi",
cityid: "101010400",
area_1: "北京",
area_2: "顺义",
area_3: ""
},
4: {
weaid: "4",
citynm: "怀柔",
cityno: "huairou",
cityid: "101010500",
area_1: "北京",
area_2: "怀柔",
area_3: ""
},
5: {
weaid: "5",
citynm: "通州",
cityno: "tongzhou",
cityid: "101010600",
area_1: "北京",
area_2: "通州",
area_3: ""
},
6: {
weaid: "6",
citynm: "昌平",
cityno: "changping",
cityid: "101010700",
area_1: "北京",
area_2: "昌平",
area_3: ""
},
7: {
weaid: "7",
citynm: "延庆",
cityno: "yanqing",
cityid: "101010800",
area_1: "北京",
area_2: "延庆",
area_3: ""
},
8: {
weaid: "8",
citynm: "丰台",
cityno: "fengtai",
cityid: "101010900",
area_1: "北京",
area_2: "丰台",
area_3: ""
},
9: {
weaid: "9",
citynm: "石景山",
cityno: "shijingshan",
cityid: "101011000",
area_1: "北京",
area_2: "石景山",
area_3: ""
},
10: {
weaid: "10",
citynm: "大兴",
cityno: "daxing",
cityid: "101011100",
area_1: "北京",
area_2: "大兴",
area_3: ""
},
11: {
weaid: "11",
citynm: "房山",
cityno: "fangshan",
cityid: "101011200",
area_1: "北京",
area_2: "房山",
area_3: ""
},
12: {
weaid: "12",
citynm: "密云",
cityno: "miyun",
cityid: "101011300",
area_1: "北京",
area_2: "密云",
area_3: ""
},
13: {
weaid: "13",
citynm: "门头沟",
cityno: "mentougou",
cityid: "101011400",
area_1: "北京",
area_2: "门头沟",
area_3: ""
},
14: {
weaid: "14",
citynm: "平谷",
cityno: "pinggu",
cityid: "101011500",
area_1: "北京",
area_2: "平谷",
area_3: ""
},
22: {
weaid: "22",
citynm: "海淀",
cityno: "haidian",
cityid: "101010200",
area_1: "北京",
area_2: "海淀",
area_3: ""
},
23: {
weaid: "23",
citynm: "天津",
cityno: "tianjin",
cityid: "101030100",
area_1: "天津",
area_2: "城区",
area_3: ""
},
24: {
weaid: "24",
citynm: "宝坻",
cityno: "baodi",
cityid: "101030300",
area_1: "天津",
area_2: "宝坻",
area_3: ""
},
25: {
weaid: "25",
citynm: "东丽",
cityno: "dongli",
cityid: "101030400",
area_1: "天津",
area_2: "东丽",
area_3: ""
},
26: {
weaid: "26",
citynm: "西青",
cityno: "xiqing",
cityid: "101030500",
area_1: "天津",
area_2: "西青",
area_3: ""
},
27: {
weaid: "27",
citynm: "北辰",
cityno: "beichen",
cityid: "101030600",
area_1: "天津",
area_2: "北辰",
area_3: ""
},
28: {
weaid: "28",
citynm: "蓟县",
cityno: "tjjixian",
cityid: "101031400",
area_1: "天津",
area_2: "蓟县",
area_3: ""
},
30: {
weaid: "30",
citynm: "静海",
cityno: "jinghai",
cityid: "101030900",
area_1: "天津",
area_2: "静海",
area_3: ""
},
31: {
weaid: "31",
citynm: "津南",
cityno: "jinnan",
cityid: "101031000",
area_1: "天津",
area_2: "津南",
area_3: ""
},
32: {
weaid: "32",
citynm: "滨海新区",
cityno: "binhaixinqu",
cityid: "101031100",
area_1: "天津",
area_2: "滨海新区",
area_3: ""
},
34: {
weaid: "34",
citynm: "武清",
cityno: "wuqing",
cityid: "101030200",
area_1: "天津",
area_2: "武清",
area_3: ""
},
35: {
weaid: "35",
citynm: "宁河",
cityno: "ninghe",
cityid: "101030700",
area_1: "天津",
area_2: "宁河",
area_3: ""
},
36: {
weaid: "36",
citynm: "上海",
cityno: "shanghai",
cityid: "101020100",
area_1: "上海",
area_2: "城区",
area_3: ""
},
37: {
weaid: "37",
citynm: "宝山",
cityno: "shbaoshan",
cityid: "101020300",
area_1: "上海",
area_2: "宝山",
area_3: ""
},
38: {
weaid: "38",
citynm: "嘉定",
cityno: "jiading",
cityid: "101020500",
area_1: "上海",
area_2: "嘉定",
area_3: ""
},
40: {
weaid: "40",
citynm: "浦东新区",
cityno: "pudongxinqu",
cityid: "101020600",
area_1: "上海",
area_2: "浦东新区",
area_3: ""
},
41: {
weaid: "41",
citynm: "青浦",
cityno: "qingpu",
cityid: "101020800",
area_1: "上海",
area_2: "青浦",
area_3: ""
},
42: {
weaid: "42",
citynm: "松江",
cityno: "songjiang",
cityid: "101020900",
area_1: "上海",
area_2: "松江",
area_3: ""
},
43: {
weaid: "43",
citynm: "奉贤",
cityno: "fengxian",
cityid: "101021000",
area_1: "上海",
area_2: "奉贤",
area_3: ""
},
44: {
weaid: "44",
citynm: "崇明",
cityno: "chongming",
cityid: "101021100",
area_1: "上海",
area_2: "崇明",
area_3: ""
},
45: {
weaid: "45",
citynm: "徐汇",
cityno: "xuhui",
cityid: "101021200",
area_1: "上海",
area_2: "徐汇",
area_3: ""
},
46: {
weaid: "46",
citynm: "闵行",
cityno: "minhang",
cityid: "101020200",
area_1: "上海",
area_2: "闵行",
area_3: ""
},
47: {
weaid: "47",
citynm: "金山",
cityno: "jinshan",
cityid: "101020700",
area_1: "上海",
area_2: "金山",
area_3: ""
},
48: {
weaid: "48",
citynm: "石家庄",
cityno: "shijiazhuang",
cityid: "101090101",
area_1: "河北",
area_2: "石家庄",
area_3: "城区"
},
49: {
weaid: "49",
citynm: "张家口",
cityno: "zhangjiakou",
cityid: "101090301",
area_1: "河北",
area_2: "张家口",
area_3: "城区"
},
50: {
weaid: "50",
citynm: "承德",
cityno: "chengde",
cityid: "101090402",
area_1: "河北",
area_2: "承德",
area_3: "城区"
},
51: {
weaid: "51",
citynm: "唐山",
cityno: "tangshan",
cityid: "101090501",
area_1: "河北",
area_2: "唐山",
area_3: "城区"
},
52: {
weaid: "52",
citynm: "秦皇岛",
cityno: "qinhuangdao",
cityid: "101091101",
area_1: "河北",
area_2: "秦皇岛",
area_3: "城区"
},
53: {
weaid: "53",
citynm: "沧州",
cityno: "cangzhou",
cityid: "101090701",
area_1: "河北",
area_2: "沧州",
area_3: "城区"
},
54: {
weaid: "54",
citynm: "衡水",
cityno: "hengshui",
cityid: "101090801",
area_1: "河北",
area_2: "衡水",
area_3: "城区"
},
55: {
weaid: "55",
citynm: "邢台",
cityno: "xingtai",
cityid: "101090901",
area_1: "河北",
area_2: "邢台",
area_3: "城区"
},
56: {
weaid: "56",
citynm: "邯郸",
cityno: "handan",
cityid: "101091001",
area_1: "河北",
area_2: "邯郸",
area_3: "城区"
},
57: {
weaid: "57",
citynm: "保定",
cityno: "baoding",
cityid: "101090201",
area_1: "河北",
area_2: "保定",
area_3: "城区"
},
58: {
weaid: "58",
citynm: "廊坊",
cityno: "langfang",
cityid: "101090601",
area_1: "河北",
area_2: "廊坊",
area_3: "城区"
},
59: {
weaid: "59",
citynm: "郑州",
cityno: "zhengzhou",
cityid: "101180101",
area_1: "河南",
area_2: "郑州",
area_3: "城区"
},
60: {
weaid: "60",
citynm: "新乡",
cityno: "xinxiang",
cityid: "101180301",
area_1: "河南",
area_2: "新乡",
area_3: "城区"
},
61: {
weaid: "61",
citynm: "许昌",
cityno: "xuchang",
cityid: "101180401",
area_1: "河南",
area_2: "许昌",
area_3: "城区"
},
62: {
weaid: "62",
citynm: "平顶山",
cityno: "pingdingshan",
cityid: "101180501",
area_1: "河南",
area_2: "平顶山",
area_3: "城区"
},
63: {
weaid: "63",
citynm: "信阳",
cityno: "xinyang",
cityid: "101180601",
area_1: "河南",
area_2: "信阳",
area_3: "城区"
},
64: {
weaid: "64",
citynm: "南阳",
cityno: "nanyang",
cityid: "101180701",
area_1: "河南",
area_2: "南阳",
area_3: "城区"
},
65: {
weaid: "65",
citynm: "开封",
cityno: "kaifeng",
cityid: "101180801",
area_1: "河南",
area_2: "开封",
area_3: "城区"
},
66: {
weaid: "66",
citynm: "洛阳",
cityno: "luoyang",
cityid: "101180901",
area_1: "河南",
area_2: "洛阳",
area_3: "城区"
},
67: {
weaid: "67",
citynm: "商丘",
cityno: "shangqiu",
cityid: "101181001",
area_1: "河南",
area_2: "商丘",
area_3: "城区"
},
68: {
weaid: "68",
citynm: "焦作",
cityno: "jiaozuo",
cityid: "101181101",
area_1: "河南",
area_2: "焦作",
area_3: "城区"
},
69: {
weaid: "69",
citynm: "鹤壁",
cityno: "hebi",
cityid: "101181201",
area_1: "河南",
area_2: "鹤壁",
area_3: "城区"
},
70: {
weaid: "70",
citynm: "濮阳",
cityno: "puyang",
cityid: "101181301",
area_1: "河南",
area_2: "濮阳",
area_3: "城区"
},
71: {
weaid: "71",
citynm: "周口",
cityno: "zhoukou",
cityid: "101181401",
area_1: "河南",
area_2: "周口",
area_3: "城区"
},
72: {
weaid: "72",
citynm: "漯河",
cityno: "luohe",
cityid: "101181501",
area_1: "河南",
area_2: "漯河",
area_3: "城区"
},
73: {
weaid: "73",
citynm: "驻马店",
cityno: "zhumadian",
cityid: "101181601",
area_1: "河南",
area_2: "驻马店",
area_3: "城区"
},
74: {
weaid: "74",
citynm: "三门峡",
cityno: "sanmenxia",
cityid: "101181701",
area_1: "河南",
area_2: "三门峡",
area_3: "城区"
},
75: {
weaid: "75",
citynm: "济源",
cityno: "jiyuan",
cityid: "101181801",
area_1: "河南",
area_2: "济源",
area_3: "城区"
},
76: {
weaid: "76",
citynm: "安阳",
cityno: "anyang",
cityid: "101180201",
area_1: "河南",
area_2: "安阳",
area_3: "城区"
},
77: {
weaid: "77",
citynm: "合肥",
cityno: "hefei",
cityid: "101220101",
area_1: "安徽",
area_2: "合肥",
area_3: "城区"
},
78: {
weaid: "78",
citynm: "芜湖",
cityno: "wuhu",
cityid: "101220301",
area_1: "安徽",
area_2: "芜湖",
area_3: "城区"
},
79: {
weaid: "79",
citynm: "淮南",
cityno: "huainan",
cityid: "101220401",
area_1: "安徽",
area_2: "淮南",
area_3: "城区"
},
80: {
weaid: "80",
citynm: "马鞍山",
cityno: "maanshan",
cityid: "101220501",
area_1: "安徽",
area_2: "马鞍山",
area_3: "城区"
},
81: {
weaid: "81",
citynm: "安庆",
cityno: "anqing",
cityid: "101220601",
area_1: "安徽",
area_2: "安庆",
area_3: "城区"
},
82: {
weaid: "82",
citynm: "宿州",
cityno: "ahsuzhou",
cityid: "101220701",
area_1: "安徽",
area_2: "宿州",
area_3: "城区"
},
83: {
weaid: "83",
citynm: "阜阳",
cityno: "ahfuyang",
cityid: "101220801",
area_1: "安徽",
area_2: "阜阳",
area_3: "城区"
},
84: {
weaid: "84",
citynm: "亳州",
cityno: "bozhou",
cityid: "101220901",
area_1: "安徽",
area_2: "亳州",
area_3: "城区"
},
85: {
weaid: "85",
citynm: "黄山",
cityno: "huangshan",
cityid: "101221001",
area_1: "安徽",
area_2: "黄山",
area_3: "城区"
},
86: {
weaid: "86",
citynm: "滁州",
cityno: "chuzhou",
cityid: "101221101",
area_1: "安徽",
area_2: "滁州",
area_3: "城区"
},
87: {
weaid: "87",
citynm: "淮北",
cityno: "huaibei",
cityid: "101221201",
area_1: "安徽",
area_2: "淮北",
area_3: "城区"
},
88: {
weaid: "88",
citynm: "铜陵",
cityno: "tongling",
cityid: "101221301",
area_1: "安徽",
area_2: "铜陵",
area_3: "城区"
},
89: {
weaid: "89",
citynm: "宣城",
cityno: "xuancheng",
cityid: "101221401",
area_1: "安徽",
area_2: "宣城",
area_3: "城区"
},
90: {
weaid: "90",
citynm: "六安",
cityno: "luan",
cityid: "101221501",
area_1: "安徽",
area_2: "六安",
area_3: "城区"
},
92: {
weaid: "92",
citynm: "池州",
cityno: "chizhou",
cityid: "101221701",
area_1: "安徽",
area_2: "池州",
area_3: "城区"
},
93: {
weaid: "93",
citynm: "蚌埠",
cityno: "bengbu",
cityid: "101220201",
area_1: "安徽",
area_2: "蚌埠",
area_3: "城区"
},
94: {
weaid: "94",
citynm: "杭州",
cityno: "hangzhou",
cityid: "101210101",
area_1: "浙江",
area_2: "杭州",
area_3: "城区"
},
95: {
weaid: "95",
citynm: "舟山",
cityno: "zhoushan",
cityid: "101211101",
area_1: "浙江",
area_2: "舟山",
area_3: "城区"
},
96: {
weaid: "96",
citynm: "湖州",
cityno: "huzhou",
cityid: "101210201",
area_1: "浙江",
area_2: "湖州",
area_3: "城区"
},
97: {
weaid: "97",
citynm: "嘉兴",
cityno: "jiaxing",
cityid: "101210301",
area_1: "浙江",
area_2: "嘉兴",
area_3: "城区"
},
98: {
weaid: "98",
citynm: "金华",
cityno: "jinhua",
cityid: "101210901",
area_1: "浙江",
area_2: "金华",
area_3: "城区"
},
99: {
weaid: "99",
citynm: "绍兴",
cityno: "shaoxing",
cityid: "101210501",
area_1: "浙江",
area_2: "绍兴",
area_3: "越城"
},
100: {
weaid: "100",
citynm: "台州",
cityno: "zjtaizhou",
cityid: "101210601",
area_1: "浙江",
area_2: "台州",
area_3: "城区"
},
101: {
weaid: "101",
citynm: "温州",
cityno: "wenzhou",
cityid: "101210701",
area_1: "浙江",
area_2: "温州",
area_3: "城区"
},
102: {
weaid: "102",
citynm: "丽水",
cityno: "zjlishui",
cityid: "101210801",
area_1: "浙江",
area_2: "丽水",
area_3: "城区"
},
103: {
weaid: "103",
citynm: "衢州",
cityno: "zjquzhou",
cityid: "101211001",
area_1: "浙江",
area_2: "衢州",
area_3: "城区"
},
104: {
weaid: "104",
citynm: "宁波",
cityno: "ningbo",
cityid: "101210401",
area_1: "浙江",
area_2: "宁波",
area_3: "城区"
},
105: {
weaid: "105",
citynm: "重庆",
cityno: "chongqing",
cityid: "101040100",
area_1: "重庆",
area_2: "城区",
area_3: ""
},
106: {
weaid: "106",
citynm: "合川",
cityno: "hechuan",
cityid: "101040300",
area_1: "重庆",
area_2: "合川",
area_3: ""
},
107: {
weaid: "107",
citynm: "南川",
cityno: "nanchuan",
cityid: "101040400",
area_1: "重庆",
area_2: "南川",
area_3: ""
},
108: {
weaid: "108",
citynm: "江津",
cityno: "jiangjin",
cityid: "101040500",
area_1: "重庆",
area_2: "江津",
area_3: ""
},
110: {
weaid: "110",
citynm: "渝北",
cityno: "yubei",
cityid: "101040700",
area_1: "重庆",
area_2: "渝北",
area_3: ""
},
111: {
weaid: "111",
citynm: "北碚",
cityno: "beibei",
cityid: "101040800",
area_1: "重庆",
area_2: "北碚",
area_3: ""
},
112: {
weaid: "112",
citynm: "巴南",
cityno: "banan",
cityid: "101040900",
area_1: "重庆",
area_2: "巴南",
area_3: ""
},
113: {
weaid: "113",
citynm: "长寿",
cityno: "changshou",
cityid: "101041000",
area_1: "重庆",
area_2: "长寿",
area_3: ""
},
114: {
weaid: "114",
citynm: "黔江",
cityno: "cqqianjiang",
cityid: "101041100",
area_1: "重庆",
area_2: "黔江",
area_3: ""
},
116: {
weaid: "116",
citynm: "万州",
cityno: "wanzhou",
cityid: "101041300",
area_1: "重庆",
area_2: "万州",
area_3: ""
},
117: {
weaid: "117",
citynm: "涪陵",
cityno: "fuling",
cityid: "101041400",
area_1: "重庆",
area_2: "涪陵",
area_3: ""
},
118: {
weaid: "118",
citynm: "开县",
cityno: "kaixian",
cityid: "101041500",
area_1: "重庆",
area_2: "开县",
area_3: ""
},
119: {
weaid: "119",
citynm: "城口",
cityno: "chengkou",
cityid: "101041600",
area_1: "重庆",
area_2: "城口",
area_3: ""
},
120: {
weaid: "120",
citynm: "云阳",
cityno: "yunyang",
cityid: "101041700",
area_1: "重庆",
area_2: "云阳",
area_3: ""
},
121: {
weaid: "121",
citynm: "巫溪",
cityno: "cqwuxi",
cityid: "101041800",
area_1: "重庆",
area_2: "巫溪",
area_3: ""
},
122: {
weaid: "122",
citynm: "奉节",
cityno: "fengjie",
cityid: "101041900",
area_1: "重庆",
area_2: "奉节",
area_3: ""
},
123: {
weaid: "123",
citynm: "巫山",
cityno: "cqwushan",
cityid: "101042000",
area_1: "重庆",
area_2: "巫山",
area_3: ""
},
124: {
weaid: "124",
citynm: "潼南",
cityno: "tongnan",
cityid: "101042100",
area_1: "重庆",
area_2: "潼南",
area_3: ""
},
125: {
weaid: "125",
citynm: "垫江",
cityno: "dianjiang",
cityid: "101042200",
area_1: "重庆",
area_2: "垫江",
area_3: ""
},
126: {
weaid: "126",
citynm: "梁平",
cityno: "liangping",
cityid: "101042300",
area_1: "重庆",
area_2: "梁平",
area_3: ""
},
127: {
weaid: "127",
citynm: "忠县",
cityno: "zhongxian",
cityid: "101042400",
area_1: "重庆",
area_2: "忠县",
area_3: ""
},
128: {
weaid: "128",
citynm: "石柱",
cityno: "shizhu",
cityid: "101042500",
area_1: "重庆",
area_2: "石柱",
area_3: ""
},
129: {
weaid: "129",
citynm: "大足",
cityno: "dazu",
cityid: "101042600",
area_1: "重庆",
area_2: "大足",
area_3: ""
},
130: {
weaid: "130",
citynm: "荣昌",
cityno: "rongchang",
cityid: "101042700",
area_1: "重庆",
area_2: "荣昌",
area_3: ""
},
131: {
weaid: "131",
citynm: "铜梁",
cityno: "tongliang",
cityid: "101042800",
area_1: "重庆",
area_2: "铜梁",
area_3: ""
},
132: {
weaid: "132",
citynm: "璧山",
cityno: "bishan",
cityid: "101042900",
area_1: "重庆",
area_2: "璧山",
area_3: ""
},
133: {
weaid: "133",
citynm: "丰都",
cityno: "fengdu",
cityid: "101043000",
area_1: "重庆",
area_2: "丰都",
area_3: ""
},
134: {
weaid: "134",
citynm: "武隆",
cityno: "wulong",
cityid: "101043100",
area_1: "重庆",
area_2: "武隆",
area_3: ""
},
135: {
weaid: "135",
citynm: "彭水",
cityno: "pengshui",
cityid: "101043200",
area_1: "重庆",
area_2: "彭水",
area_3: ""
},
136: {
weaid: "136",
citynm: "綦江",
cityno: "qijiang",
cityid: "101043300",
area_1: "重庆",
area_2: "綦江",
area_3: ""
},
137: {
weaid: "137",
citynm: "酉阳",
cityno: "youyang",
cityid: "101043400",
area_1: "重庆",
area_2: "酉阳",
area_3: ""
},
138: {
weaid: "138",
citynm: "秀山",
cityno: "xiushan",
cityid: "101043600",
area_1: "重庆",
area_2: "秀山",
area_3: ""
},
140: {
weaid: "140",
citynm: "永川",
cityno: "yongchuan",
cityid: "101040200",
area_1: "重庆",
area_2: "永川",
area_3: ""
},
141: {
weaid: "141",
citynm: "福州",
cityno: "fjfuzhou",
cityid: "101230101",
area_1: "福建",
area_2: "福州",
area_3: "城区"
},
142: {
weaid: "142",
citynm: "泉州",
cityno: "quanzhou",
cityid: "101230501",
area_1: "福建",
area_2: "泉州",
area_3: "城区"
},
143: {
weaid: "143",
citynm: "漳州",
cityno: "zhangzhou",
cityid: "101230601",
area_1: "福建",
area_2: "漳州",
area_3: "城区"
},
144: {
weaid: "144",
citynm: "龙岩",
cityno: "longyan",
cityid: "101230701",
area_1: "福建",
area_2: "龙岩",
area_3: "城区"
},
145: {
weaid: "145",
citynm: "晋江",
cityno: "jinjiang",
cityid: "101230509",
area_1: "福建",
area_2: "泉州",
area_3: "晋江"
},
146: {
weaid: "146",
citynm: "南平",
cityno: "nanping",
cityid: "101230901",
area_1: "福建",
area_2: "南平",
area_3: "城区"
},
147: {
weaid: "147",
citynm: "厦门",
cityno: "xiamen",
cityid: "101230201",
area_1: "福建",
area_2: "厦门",
area_3: "城区"
},
148: {
weaid: "148",
citynm: "宁德",
cityno: "ningde",
cityid: "101230301",
area_1: "福建",
area_2: "宁德",
area_3: "城区"
},
149: {
weaid: "149",
citynm: "莆田",
cityno: "putian",
cityid: "101230401",
area_1: "福建",
area_2: "莆田",
area_3: "城区"
},
150: {
weaid: "150",
citynm: "三明",
cityno: "sanming",
cityid: "101230801",
area_1: "福建",
area_2: "三明",
area_3: "城区"
},
151: {
weaid: "151",
citynm: "兰州",
cityno: "lanzhou",
cityid: "101160101",
area_1: "甘肃",
area_2: "兰州",
area_3: "城区"
},
152: {
weaid: "152",
citynm: "平凉",
cityno: "pingliang",
cityid: "101160301",
area_1: "甘肃",
area_2: "平凉",
area_3: "城区"
},
153: {
weaid: "153",
citynm: "庆阳",
cityno: "gsqingyang",
cityid: "101160401",
area_1: "甘肃",
area_2: "庆阳",
area_3: "城区"
},
154: {
weaid: "154",
citynm: "武威",
cityno: "gswuwei",
cityid: "101160501",
area_1: "甘肃",
area_2: "武威",
area_3: "城区"
},
155: {
weaid: "155",
citynm: "金昌",
cityno: "jinchang",
cityid: "101160601",
area_1: "甘肃",
area_2: "金昌",
area_3: "城区"
},
156: {
weaid: "156",
citynm: "嘉峪关",
cityno: "jiayuguan",
cityid: "101161401",
area_1: "甘肃",
area_2: "嘉峪关",
area_3: "城区"
},
157: {
weaid: "157",
citynm: "酒泉",
cityno: "jiuquan",
cityid: "101160801",
area_1: "甘肃",
area_2: "酒泉",
area_3: "城区"
},
158: {
weaid: "158",
citynm: "天水",
cityno: "tianshui",
cityid: "101160901",
area_1: "甘肃",
area_2: "天水",
area_3: "城区"
},
159: {
weaid: "159",
citynm: "武都",
cityno: "wudu",
cityid: "101161001",
area_1: "甘肃",
area_2: "陇南",
area_3: "武都"
},
160: {
weaid: "160",
citynm: "临夏",
cityno: "linxia",
cityid: "101161101",
area_1: "甘肃",
area_2: "临夏",
area_3: "城区"
},
161: {
weaid: "161",
citynm: "合作",
cityno: "hezuo",
cityid: "101161201",
area_1: "甘肃",
area_2: "甘南",
area_3: "合作"
},
162: {
weaid: "162",
citynm: "白银",
cityno: "baiyin",
cityid: "101161301",
area_1: "甘肃",
area_2: "白银",
area_3: "城区"
},
163: {
weaid: "163",
citynm: "定西",
cityno: "dingxi",
cityid: "101160201",
area_1: "甘肃",
area_2: "定西",
area_3: "城区"
},
164: {
weaid: "164",
citynm: "张掖",
cityno: "zhangye",
cityid: "101160701",
area_1: "甘肃",
area_2: "张掖",
area_3: "城区"
},
165: {
weaid: "165",
citynm: "广州",
cityno: "guangzhou",
cityid: "101280101",
area_1: "广东",
area_2: "广州",
area_3: "城区"
},
166: {
weaid: "166",
citynm: "惠州",
cityno: "huizhou",
cityid: "101280301",
area_1: "广东",
area_2: "惠州",
area_3: "城区"
},
167: {
weaid: "167",
citynm: "梅州",
cityno: "meizhou",
cityid: "101280401",
area_1: "广东",
area_2: "梅州",
area_3: "城区"
},
168: {
weaid: "168",
citynm: "汕头",
cityno: "shantou",
cityid: "101280501",
area_1: "广东",
area_2: "汕头",
area_3: "城区"
},
169: {
weaid: "169",
citynm: "深圳",
cityno: "shenzhen",
cityid: "101280601",
area_1: "广东",
area_2: "深圳",
area_3: "城区"
},
170: {
weaid: "170",
citynm: "珠海",
cityno: "zhuhai",
cityid: "101280701",
area_1: "广东",
area_2: "珠海",
area_3: "城区"
},
171: {
weaid: "171",
citynm: "佛山",
cityno: "foshan",
cityid: "101280800",
area_1: "广东",
area_2: "佛山",
area_3: "城区"
},
172: {
weaid: "172",
citynm: "肇庆",
cityno: "zhaoqing",
cityid: "101280901",
area_1: "广东",
area_2: "肇庆",
area_3: "城区"
},
173: {
weaid: "173",
citynm: "湛江",
cityno: "zhanjiang",
cityid: "101281001",
area_1: "广东",
area_2: "湛江",
area_3: "城区"
},
174: {
weaid: "174",
citynm: "江门",
cityno: "jiangmen",
cityid: "101281101",
area_1: "广东",
area_2: "江门",
area_3: "城区"
},
175: {
weaid: "175",
citynm: "河源",
cityno: "heyuan",
cityid: "101281201",
area_1: "广东",
area_2: "河源",
area_3: "城区"
},
176: {
weaid: "176",
citynm: "清远",
cityno: "gdqingyuan",
cityid: "101281301",
area_1: "广东",
area_2: "清远",
area_3: "城区"
},
177: {
weaid: "177",
citynm: "云浮",
cityno: "yunfu",
cityid: "101281401",
area_1: "广东",
area_2: "云浮",
area_3: "城区"
},
178: {
weaid: "178",
citynm: "潮州",
cityno: "chaozhou",
cityid: "101281501",
area_1: "广东",
area_2: "潮州",
area_3: "城区"
},
179: {
weaid: "179",
citynm: "东莞",
cityno: "dongguan",
cityid: "101281601",
area_1: "广东",
area_2: "东莞",
area_3: "城区"
},
180: {
weaid: "180",
citynm: "中山",
cityno: "gdzhongshan",
cityid: "101281701",
area_1: "广东",
area_2: "中山",
area_3: "城区"
},
181: {
weaid: "181",
citynm: "阳江",
cityno: "yangjiang",
cityid: "101281801",
area_1: "广东",
area_2: "阳江",
area_3: "城区"
},
182: {
weaid: "182",
citynm: "揭阳",
cityno: "jieyang",
cityid: "101281901",
area_1: "广东",
area_2: "揭阳",
area_3: "城区"
},
183: {
weaid: "183",
citynm: "茂名",
cityno: "maoming",
cityid: "101282001",
area_1: "广东",
area_2: "茂名",
area_3: "城区"
},
184: {
weaid: "184",
citynm: "汕尾",
cityno: "shanwei",
cityid: "101282101",
area_1: "广东",
area_2: "汕尾",
area_3: "城区"
},
185: {
weaid: "185",
citynm: "韶关",
cityno: "shaoguan",
cityid: "101280201",
area_1: "广东",
area_2: "韶关",
area_3: "城区"
},
186: {
weaid: "186",
citynm: "南宁",
cityno: "nanning",
cityid: "101300101",
area_1: "广西",
area_2: "南宁",
area_3: "城区"
},
187: {
weaid: "187",
citynm: "柳州",
cityno: "liuzhou",
cityid: "101300301",
area_1: "广西",
area_2: "柳州",
area_3: "城区"
},
188: {
weaid: "188",
citynm: "来宾",
cityno: "laibin",
cityid: "101300401",
area_1: "广西",
area_2: "来宾",
area_3: "城区"
},
189: {
weaid: "189",
citynm: "桂林",
cityno: "guilin",
cityid: "101300501",
area_1: "广西",
area_2: "桂林",
area_3: "城区"
},
190: {
weaid: "190",
citynm: "梧州",
cityno: "wuzhou",
cityid: "101300601",
area_1: "广西",
area_2: "梧州",
area_3: "城区"
},
191: {
weaid: "191",
citynm: "防城港",
cityno: "fangchenggang",
cityid: "101301401",
area_1: "广西",
area_2: "防城港",
area_3: "城区"
},
192: {
weaid: "192",
citynm: "贵港",
cityno: "guigang",
cityid: "101300801",
area_1: "广西",
area_2: "贵港",
area_3: "城区"
},
193: {
weaid: "193",
citynm: "玉林",
cityno: "gxyulin",
cityid: "101300901",
area_1: "广西",
area_2: "玉林",
area_3: "城区"
},
194: {
weaid: "194",
citynm: "百色",
cityno: "baise",
cityid: "101301001",
area_1: "广西",
area_2: "百色",
area_3: "城区"
},
195: {
weaid: "195",
citynm: "钦州",
cityno: "qinzhou",
cityid: "101301101",
area_1: "广西",
area_2: "钦州",
area_3: "城区"
},
196: {
weaid: "196",
citynm: "河池",
cityno: "hechi",
cityid: "101301201",
area_1: "广西",
area_2: "河池",
area_3: "城区"
},
197: {
weaid: "197",
citynm: "北海",
cityno: "beihai",
cityid: "101301301",
area_1: "广西",
area_2: "北海",
area_3: "城区"
},
198: {
weaid: "198",
citynm: "崇左",
cityno: "chongzuo",
cityid: "101300201",
area_1: "广西",
area_2: "崇左",
area_3: "城区"
},
199: {
weaid: "199",
citynm: "贺州",
cityno: "hezhou",
cityid: "101300701",
area_1: "广西",
area_2: "贺州",
area_3: "城区"
},
200: {
weaid: "200",
citynm: "贵阳",
cityno: "guiyang",
cityid: "101260101",
area_1: "贵州",
area_2: "贵阳",
area_3: "城区"
},
201: {
weaid: "201",
citynm: "安顺",
cityno: "anshun",
cityid: "101260301",
area_1: "贵州",
area_2: "安顺",
area_3: "城区"
},
202: {
weaid: "202",
citynm: "都匀",
cityno: "duyun",
cityid: "101260401",
area_1: "贵州",
area_2: "黔南",
area_3: "都匀"
},
204: {
weaid: "204",
citynm: "铜仁",
cityno: "tongren",
cityid: "101260601",
area_1: "贵州",
area_2: "铜仁",
area_3: "城区"
},
205: {
weaid: "205",
citynm: "毕节",
cityno: "bijie",
cityid: "101260701",
area_1: "贵州",
area_2: "毕节",
area_3: "城区"
},
206: {
weaid: "206",
citynm: "六盘水",
cityno: "shuicheng",
cityid: "101260801",
area_1: "贵州",
area_2: "六盘水",
area_3: "水城"
},
207: {
weaid: "207",
citynm: "遵义",
cityno: "zunyi",
cityid: "101260201",
area_1: "贵州",
area_2: "遵义",
area_3: "城区"
},
208: {
weaid: "208",
citynm: "凯里",
cityno: "kaili",
cityid: "101260501",
area_1: "贵州",
area_2: "黔东南",
area_3: "凯里"
},
209: {
weaid: "209",
citynm: "昆明",
cityno: "kunming",
cityid: "101290101",
area_1: "云南",
area_2: "昆明",
area_3: "城区"
},
210: {
weaid: "210",
citynm: "红河",
cityno: "honghe",
cityid: "101290301",
area_1: "云南",
area_2: "红河",
area_3: "城区"
},
211: {
weaid: "211",
citynm: "文山",
cityno: "wenshan",
cityid: "101290601",
area_1: "云南",
area_2: "文山",
area_3: "城区"
},
212: {
weaid: "212",
citynm: "玉溪",
cityno: "yuxi",
cityid: "101290701",
area_1: "云南",
area_2: "玉溪",
area_3: "城区"
},
213: {
weaid: "213",
citynm: "楚雄",
cityno: "chuxiong",
cityid: "101290801",
area_1: "云南",
area_2: "楚雄",
area_3: "城区"
},
214: {
weaid: "214",
citynm: "普洱",
cityno: "puer",
cityid: "101290901",
area_1: "云南",
area_2: "普洱",
area_3: "城区"
},
215: {
weaid: "215",
citynm: "昭通",
cityno: "zhaotong",
cityid: "101291001",
area_1: "云南",
area_2: "昭通",
area_3: "城区"
},
216: {
weaid: "216",
citynm: "临沧",
cityno: "lincang",
cityid: "101291101",
area_1: "云南",
area_2: "临沧",
area_3: "城区"
},
217: {
weaid: "217",
citynm: "怒江",
cityno: "nujiang",
cityid: "101291201",
area_1: "云南",
area_2: "怒江",
area_3: "城区"
},
218: {
weaid: "218",
citynm: "香格里拉",
cityno: "xianggelila",
cityid: "101291301",
area_1: "云南",
area_2: "迪庆",
area_3: "香格里拉"
},
219: {
weaid: "219",
citynm: "丽江",
cityno: "lijiang",
cityid: "101291401",
area_1: "云南",
area_2: "丽江",
area_3: "城区"
},
220: {
weaid: "220",
citynm: "德宏",
cityno: "dehong",
cityid: "101291501",
area_1: "云南",
area_2: "德宏",
area_3: "城区"
},
221: {
weaid: "221",
citynm: "景洪",
cityno: "jinghong",
cityid: "101291601",
area_1: "云南",
area_2: "西双版纳",
area_3: "景洪"
},
222: {
weaid: "222",
citynm: "大理",
cityno: "yndali",
cityid: "101290201",
area_1: "云南",
area_2: "大理",
area_3: "城区"
},
223: {
weaid: "223",
citynm: "曲靖",
cityno: "qujing",
cityid: "101290401",
area_1: "云南",
area_2: "曲靖",
area_3: "城区"
},
224: {
weaid: "224",
citynm: "保山",
cityno: "ynbaoshan",
cityid: "101290501",
area_1: "云南",
area_2: "保山",
area_3: "城区"
},
225: {
weaid: "225",
citynm: "呼和浩特",
cityno: "huhehaote",
cityid: "101080101",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "城区"
},
226: {
weaid: "226",
citynm: "乌海",
cityno: "wuhai",
cityid: "101080301",
area_1: "内蒙古",
area_2: "乌海",
area_3: "城区"
},
227: {
weaid: "227",
citynm: "集宁",
cityno: "nmgjining",
cityid: "101080401",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "集宁"
},
228: {
weaid: "228",
citynm: "通辽",
cityno: "tongliao",
cityid: "101080501",
area_1: "内蒙古",
area_2: "通辽",
area_3: "城区"
},
229: {
weaid: "229",
citynm: "阿拉善左旗",
cityno: "azuoqi",
cityid: "101081201",
area_1: "内蒙古",
area_2: "阿拉善盟",
area_3: "阿左旗"
},
230: {
weaid: "230",
citynm: "鄂尔多斯",
cityno: "eerduosi",
cityid: "101080701",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "城区"
},
231: {
weaid: "231",
citynm: "临河",
cityno: "linhe",
cityid: "101080801",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "临河"
},
232: {
weaid: "232",
citynm: "锡林浩特",
cityno: "xilinhaote",
cityid: "101080901",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "锡林浩特"
},
234: {
weaid: "234",
citynm: "乌兰浩特",
cityno: "wulanhaote",
cityid: "101081101",
area_1: "内蒙古",
area_2: "兴安盟",
area_3: "乌兰浩特"
},
235: {
weaid: "235",
citynm: "包头",
cityno: "baotou",
cityid: "101080201",
area_1: "内蒙古",
area_2: "包头",
area_3: "城区"
},
236: {
weaid: "236",
citynm: "赤峰",
cityno: "chifeng",
cityid: "101080601",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "城区"
},
237: {
weaid: "237",
citynm: "南昌",
cityno: "nanchang",
cityid: "101240101",
area_1: "江西",
area_2: "南昌",
area_3: "城区"
},
238: {
weaid: "238",
citynm: "上饶",
cityno: "shangrao",
cityid: "101240301",
area_1: "江西",
area_2: "上饶",
area_3: "城区"
},
239: {
weaid: "239",
citynm: "抚州",
cityno: "fuzhou",
cityid: "101240401",
area_1: "江西",
area_2: "抚州",
area_3: "城区"
},
240: {
weaid: "240",
citynm: "宜春",
cityno: "jxyichun",
cityid: "101240501",
area_1: "江西",
area_2: "宜春",
area_3: "城区"
},
241: {
weaid: "241",
citynm: "鹰潭",
cityno: "yingtan",
cityid: "101241101",
area_1: "江西",
area_2: "鹰潭",
area_3: "城区"
},
242: {
weaid: "242",
citynm: "赣州",
cityno: "ganzhou",
cityid: "101240701",
area_1: "江西",
area_2: "赣州",
area_3: "城区"
},
243: {
weaid: "243",
citynm: "景德镇",
cityno: "jingdezhen",
cityid: "101240801",
area_1: "江西",
area_2: "景德镇",
area_3: "城区"
},
244: {
weaid: "244",
citynm: "萍乡",
cityno: "jxpingxiang",
cityid: "101240901",
area_1: "江西",
area_2: "萍乡",
area_3: "城区"
},
245: {
weaid: "245",
citynm: "新余",
cityno: "xinyu",
cityid: "101241001",
area_1: "江西",
area_2: "新余",
area_3: "城区"
},
246: {
weaid: "246",
citynm: "九江",
cityno: "jiujiang",
cityid: "101240201",
area_1: "江西",
area_2: "九江",
area_3: "城区"
},
247: {
weaid: "247",
citynm: "吉安",
cityno: "jxjian",
cityid: "101240601",
area_1: "江西",
area_2: "吉安",
area_3: "城区"
},
248: {
weaid: "248",
citynm: "武汉",
cityno: "wuhan",
cityid: "101200101",
area_1: "湖北",
area_2: "武汉",
area_3: "城区"
},
249: {
weaid: "249",
citynm: "黄冈",
cityno: "huanggang",
cityid: "101200501",
area_1: "湖北",
area_2: "黄冈",
area_3: "城区"
},
250: {
weaid: "250",
citynm: "荆州",
cityno: "hbjingzhou",
cityid: "101200801",
area_1: "湖北",
area_2: "荆州",
area_3: "城区"
},
251: {
weaid: "251",
citynm: "宜昌",
cityno: "yichang",
cityid: "101200901",
area_1: "湖北",
area_2: "宜昌",
area_3: "城区"
},
252: {
weaid: "252",
citynm: "恩施",
cityno: "enshi",
cityid: "101201001",
area_1: "湖北",
area_2: "恩施",
area_3: "城区"
},
253: {
weaid: "253",
citynm: "十堰",
cityno: "shiyan",
cityid: "101201101",
area_1: "湖北",
area_2: "十堰",
area_3: "城区"
},
254: {
weaid: "254",
citynm: "神农架",
cityno: "shennongjia",
cityid: "101201201",
area_1: "湖北",
area_2: "神农架",
area_3: "城区"
},
255: {
weaid: "255",
citynm: "随州",
cityno: "suizhou",
cityid: "101201301",
area_1: "湖北",
area_2: "随州",
area_3: "城区"
},
256: {
weaid: "256",
citynm: "荆门",
cityno: "jingmen",
cityid: "101201401",
area_1: "湖北",
area_2: "荆门",
area_3: "城区"
},
257: {
weaid: "257",
citynm: "天门",
cityno: "tianmen",
cityid: "101201501",
area_1: "湖北",
area_2: "天门",
area_3: "城区"
},
258: {
weaid: "258",
citynm: "仙桃",
cityno: "xiantao",
cityid: "101201601",
area_1: "湖北",
area_2: "仙桃",
area_3: "城区"
},
259: {
weaid: "259",
citynm: "潜江",
cityno: "hbqianjiang",
cityid: "101201701",
area_1: "湖北",
area_2: "潜江",
area_3: "城区"
},
260: {
weaid: "260",
citynm: "襄阳",
cityno: "xiangyang",
cityid: "101200201",
area_1: "湖北",
area_2: "襄阳",
area_3: "城区"
},
261: {
weaid: "261",
citynm: "鄂州",
cityno: "ezhou",
cityid: "101200301",
area_1: "湖北",
area_2: "鄂州",
area_3: "城区"
},
262: {
weaid: "262",
citynm: "孝感",
cityno: "xiaogan",
cityid: "101200401",
area_1: "湖北",
area_2: "孝感",
area_3: "城区"
},
263: {
weaid: "263",
citynm: "黄石",
cityno: "huangshi",
cityid: "101200601",
area_1: "湖北",
area_2: "黄石",
area_3: "城区"
},
264: {
weaid: "264",
citynm: "咸宁",
cityno: "xianning",
cityid: "101200701",
area_1: "湖北",
area_2: "咸宁",
area_3: "城区"
},
265: {
weaid: "265",
citynm: "成都",
cityno: "chengdu",
cityid: "101270101",
area_1: "四川",
area_2: "成都",
area_3: "城区"
},
266: {
weaid: "266",
citynm: "自贡",
cityno: "zigong",
cityid: "101270301",
area_1: "四川",
area_2: "自贡",
area_3: "城区"
},
267: {
weaid: "267",
citynm: "绵阳",
cityno: "mianyang",
cityid: "101270401",
area_1: "四川",
area_2: "绵阳",
area_3: "城区"
},
268: {
weaid: "268",
citynm: "南充",
cityno: "nanchong",
cityid: "101270501",
area_1: "四川",
area_2: "南充",
area_3: "城区"
},
269: {
weaid: "269",
citynm: "达州",
cityno: "dazhou",
cityid: "101270601",
area_1: "四川",
area_2: "达州",
area_3: "城区"
},
270: {
weaid: "270",
citynm: "遂宁",
cityno: "scsuining",
cityid: "101270701",
area_1: "四川",
area_2: "遂宁",
area_3: "城区"
},
271: {
weaid: "271",
citynm: "广安",
cityno: "guangan",
cityid: "101270801",
area_1: "四川",
area_2: "广安",
area_3: "城区"
},
272: {
weaid: "272",
citynm: "巴中",
cityno: "bazhong",
cityid: "101270901",
area_1: "四川",
area_2: "巴中",
area_3: "城区"
},
273: {
weaid: "273",
citynm: "泸州",
cityno: "luzhou",
cityid: "101271001",
area_1: "四川",
area_2: "泸州",
area_3: "城区"
},
274: {
weaid: "274",
citynm: "宜宾",
cityno: "yibin",
cityid: "101271101",
area_1: "四川",
area_2: "宜宾",
area_3: "城区"
},
275: {
weaid: "275",
citynm: "内江",
cityno: "neijiang",
cityid: "101271201",
area_1: "四川",
area_2: "内江",
area_3: "城区"
},
276: {
weaid: "276",
citynm: "资阳",
cityno: "scziyang",
cityid: "101271301",
area_1: "四川",
area_2: "资阳",
area_3: "城区"
},
277: {
weaid: "277",
citynm: "乐山",
cityno: "leshan",
cityid: "101271401",
area_1: "四川",
area_2: "乐山",
area_3: "城区"
},
278: {
weaid: "278",
citynm: "眉山",
cityno: "meishan",
cityid: "101271501",
area_1: "四川",
area_2: "眉山",
area_3: "城区"
},
279: {
weaid: "279",
citynm: "凉山",
cityno: "scliangshan",
cityid: "101271601",
area_1: "四川",
area_2: "凉山",
area_3: "城区"
},
280: {
weaid: "280",
citynm: "雅安",
cityno: "yaan",
cityid: "101271701",
area_1: "四川",
area_2: "雅安",
area_3: "城区"
},
281: {
weaid: "281",
citynm: "甘孜",
cityno: "ganzi",
cityid: "101271801",
area_1: "四川",
area_2: "甘孜",
area_3: "城区"
},
282: {
weaid: "282",
citynm: "阿坝",
cityno: "aba",
cityid: "101271901",
area_1: "四川",
area_2: "阿坝",
area_3: "城区"
},
283: {
weaid: "283",
citynm: "德阳",
cityno: "deyang",
cityid: "101272001",
area_1: "四川",
area_2: "德阳",
area_3: "城区"
},
284: {
weaid: "284",
citynm: "广元",
cityno: "guangyuan",
cityid: "101272101",
area_1: "四川",
area_2: "广元",
area_3: "城区"
},
285: {
weaid: "285",
citynm: "攀枝花",
cityno: "panzhihua",
cityid: "101270201",
area_1: "四川",
area_2: "攀枝花",
area_3: "城区"
},
286: {
weaid: "286",
citynm: "银川",
cityno: "yinchuan",
cityid: "101170101",
area_1: "宁夏",
area_2: "银川",
area_3: "城区"
},
287: {
weaid: "287",
citynm: "中卫",
cityno: "zhongwei",
cityid: "101170501",
area_1: "宁夏",
area_2: "中卫",
area_3: "城区"
},
288: {
weaid: "288",
citynm: "固原",
cityno: "guyuan",
cityid: "101170401",
area_1: "宁夏",
area_2: "固原",
area_3: "城区"
},
289: {
weaid: "289",
citynm: "石嘴山",
cityno: "shizuishan",
cityid: "101170201",
area_1: "宁夏",
area_2: "石嘴山",
area_3: "城区"
},
290: {
weaid: "290",
citynm: "吴忠",
cityno: "wuzhong",
cityid: "101170301",
area_1: "宁夏",
area_2: "吴忠",
area_3: "城区"
},
291: {
weaid: "291",
citynm: "西宁",
cityno: "xining",
cityid: "101150101",
area_1: "青海",
area_2: "西宁",
area_3: "城区"
},
292: {
weaid: "292",
citynm: "黄南",
cityno: "huangnan",
cityid: "101150301",
area_1: "青海",
area_2: "黄南",
area_3: "同仁"
},
293: {
weaid: "293",
citynm: "海北",
cityno: "haibei",
cityid: "101150801",
area_1: "青海",
area_2: "海北",
area_3: "海晏"
},
294: {
weaid: "294",
citynm: "果洛",
cityno: "guoluo",
cityid: "101150501",
area_1: "青海",
area_2: "果洛",
area_3: "玛沁"
},
295: {
weaid: "295",
citynm: "玉树",
cityno: "qhyushu",
cityid: "101150601",
area_1: "青海",
area_2: "玉树",
area_3: "城区"
},
296: {
weaid: "296",
citynm: "海西",
cityno: "haixi",
cityid: "101150701",
area_1: "青海",
area_2: "海西",
area_3: "德令哈"
},
297: {
weaid: "297",
citynm: "海东",
cityno: "haidong",
cityid: "101150201",
area_1: "青海",
area_2: "海东",
area_3: "平安"
},
298: {
weaid: "298",
citynm: "海南",
cityno: "hainan",
cityid: "101150401",
area_1: "青海",
area_2: "海南",
area_3: "共和"
},
299: {
weaid: "299",
citynm: "济南",
cityno: "jinan",
cityid: "101120101",
area_1: "山东",
area_2: "济南",
area_3: "城区"
},
300: {
weaid: "300",
citynm: "潍坊",
cityno: "weifang",
cityid: "101120601",
area_1: "山东",
area_2: "潍坊",
area_3: "城区"
},
301: {
weaid: "301",
citynm: "临沂",
cityno: "sdlinyi",
cityid: "101120901",
area_1: "山东",
area_2: "临沂",
area_3: "城区"
},
302: {
weaid: "302",
citynm: "菏泽",
cityno: "heze",
cityid: "101121001",
area_1: "山东",
area_2: "菏泽",
area_3: "城区"
},
303: {
weaid: "303",
citynm: "滨州",
cityno: "binzhou",
cityid: "101121101",
area_1: "山东",
area_2: "滨州",
area_3: "城区"
},
304: {
weaid: "304",
citynm: "东营",
cityno: "dongying",
cityid: "101121201",
area_1: "山东",
area_2: "东营",
area_3: "城区"
},
305: {
weaid: "305",
citynm: "威海",
cityno: "weihai",
cityid: "101121301",
area_1: "山东",
area_2: "威海",
area_3: "城区"
},
306: {
weaid: "306",
citynm: "枣庄",
cityno: "zaozhuang",
cityid: "101121401",
area_1: "山东",
area_2: "枣庄",
area_3: "城区"
},
307: {
weaid: "307",
citynm: "日照",
cityno: "rizhao",
cityid: "101121501",
area_1: "山东",
area_2: "日照",
area_3: "城区"
},
308: {
weaid: "308",
citynm: "莱芜",
cityno: "laiwu",
cityid: "101121601",
area_1: "山东",
area_2: "莱芜",
area_3: "城区"
},
309: {
weaid: "309",
citynm: "聊城",
cityno: "liaocheng",
cityid: "101121701",
area_1: "山东",
area_2: "聊城",
area_3: "城区"
},
310: {
weaid: "310",
citynm: "青岛",
cityno: "qingdao",
cityid: "101120201",
area_1: "山东",
area_2: "青岛",
area_3: "城区"
},
311: {
weaid: "311",
citynm: "淄博",
cityno: "zibo",
cityid: "101120301",
area_1: "山东",
area_2: "淄博",
area_3: "城区"
},
312: {
weaid: "312",
citynm: "德州",
cityno: "dezhou",
cityid: "101120401",
area_1: "山东",
area_2: "德州",
area_3: "城区"
},
313: {
weaid: "313",
citynm: "烟台",
cityno: "yantai",
cityid: "101120501",
area_1: "山东",
area_2: "烟台",
area_3: "城区"
},
314: {
weaid: "314",
citynm: "济宁",
cityno: "sdjining",
cityid: "101120701",
area_1: "山东",
area_2: "济宁",
area_3: "城区"
},
315: {
weaid: "315",
citynm: "泰安",
cityno: "sdtaian",
cityid: "101120801",
area_1: "山东",
area_2: "泰安",
area_3: "城区"
},
316: {
weaid: "316",
citynm: "西安",
cityno: "xian",
cityid: "101110101",
area_1: "陕西",
area_2: "西安",
area_3: "城区"
},
317: {
weaid: "317",
citynm: "延安",
cityno: "yanan",
cityid: "101110300",
area_1: "陕西",
area_2: "延安",
area_3: "城区"
},
318: {
weaid: "318",
citynm: "榆林",
cityno: "sxyulin",
cityid: "101110401",
area_1: "陕西",
area_2: "榆林",
area_3: "城区"
},
319: {
weaid: "319",
citynm: "铜川",
cityno: "tongchuan",
cityid: "101111001",
area_1: "陕西",
area_2: "铜川",
area_3: "城区"
},
320: {
weaid: "320",
citynm: "商洛",
cityno: "shangluo",
cityid: "101110601",
area_1: "陕西",
area_2: "商洛",
area_3: "城区"
},
321: {
weaid: "321",
citynm: "安康",
cityno: "ankang",
cityid: "101110701",
area_1: "陕西",
area_2: "安康",
area_3: "城区"
},
322: {
weaid: "322",
citynm: "汉中",
cityno: "hanzhong",
cityid: "101110801",
area_1: "陕西",
area_2: "汉中",
area_3: "城区"
},
323: {
weaid: "323",
citynm: "宝鸡",
cityno: "baoji",
cityid: "101110901",
area_1: "陕西",
area_2: "宝鸡",
area_3: "城区"
},
324: {
weaid: "324",
citynm: "咸阳",
cityno: "xianyang",
cityid: "101110200",
area_1: "陕西",
area_2: "咸阳",
area_3: "城区"
},
325: {
weaid: "325",
citynm: "渭南",
cityno: "weinan",
cityid: "101110501",
area_1: "陕西",
area_2: "渭南",
area_3: "城区"
},
326: {
weaid: "326",
citynm: "太原",
cityno: "taiyuan",
cityid: "101100101",
area_1: "山西",
area_2: "太原",
area_3: "城区"
},
327: {
weaid: "327",
citynm: "临汾",
cityno: "linfen",
cityid: "101100701",
area_1: "山西",
area_2: "临汾",
area_3: "城区"
},
328: {
weaid: "328",
citynm: "运城",
cityno: "yuncheng",
cityid: "101100801",
area_1: "山西",
area_2: "运城",
area_3: "城区"
},
329: {
weaid: "329",
citynm: "朔州",
cityno: "shuozhou",
cityid: "101100901",
area_1: "山西",
area_2: "朔州",
area_3: "城区"
},
330: {
weaid: "330",
citynm: "忻州",
cityno: "sxxinzhou",
cityid: "101101001",
area_1: "山西",
area_2: "忻州",
area_3: "城区"
},
331: {
weaid: "331",
citynm: "长治",
cityno: "changzhi",
cityid: "101100501",
area_1: "山西",
area_2: "长治",
area_3: "城区"
},
332: {
weaid: "332",
citynm: "大同",
cityno: "sxdatong",
cityid: "101100201",
area_1: "山西",
area_2: "大同",
area_3: "城区"
},
333: {
weaid: "333",
citynm: "阳泉",
cityno: "yangquan",
cityid: "101100301",
area_1: "山西",
area_2: "阳泉",
area_3: "城区"
},
334: {
weaid: "334",
citynm: "晋中",
cityno: "jinzhong",
cityid: "101100401",
area_1: "山西",
area_2: "晋中",
area_3: "城区"
},
335: {
weaid: "335",
citynm: "晋城",
cityno: "jincheng",
cityid: "101100601",
area_1: "山西",
area_2: "晋城",
area_3: "城区"
},
336: {
weaid: "336",
citynm: "吕梁",
cityno: "lvliang",
cityid: "101101100",
area_1: "山西",
area_2: "吕梁",
area_3: "城区"
},
337: {
weaid: "337",
citynm: "乌鲁木齐",
cityno: "wulumuqi",
cityid: "101130101",
area_1: "新疆",
area_2: "乌鲁木齐",
area_3: "城区"
},
338: {
weaid: "338",
citynm: "石河子",
cityno: "shihezi",
cityid: "101130301",
area_1: "新疆",
area_2: "石河子",
area_3: "城区"
},
339: {
weaid: "339",
citynm: "昌吉",
cityno: "changji",
cityid: "101130401",
area_1: "新疆",
area_2: "昌吉",
area_3: "城区"
},
340: {
weaid: "340",
citynm: "吐鲁番",
cityno: "tulufan",
cityid: "101130501",
area_1: "新疆",
area_2: "吐鲁番",
area_3: "城区"
},
341: {
weaid: "341",
citynm: "库尔勒",
cityno: "kuerle",
cityid: "101130601",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "库尔勒"
},
342: {
weaid: "342",
citynm: "阿拉尔",
cityno: "alaer",
cityid: "101130701",
area_1: "新疆",
area_2: "阿拉尔",
area_3: "城区"
},
343: {
weaid: "343",
citynm: "阿克苏",
cityno: "akesu",
cityid: "101130801",
area_1: "新疆",
area_2: "阿克苏",
area_3: "城区"
},
344: {
weaid: "344",
citynm: "喀什",
cityno: "kashi",
cityid: "101130901",
area_1: "新疆",
area_2: "喀什",
area_3: "城区"
},
345: {
weaid: "345",
citynm: "伊宁",
cityno: "yining",
cityid: "101131001",
area_1: "新疆",
area_2: "伊犁",
area_3: "伊宁"
},
346: {
weaid: "346",
citynm: "塔城",
cityno: "tacheng",
cityid: "101131101",
area_1: "新疆",
area_2: "塔城",
area_3: "城区"
},
347: {
weaid: "347",
citynm: "哈密",
cityno: "hami",
cityid: "101131201",
area_1: "新疆",
area_2: "哈密",
area_3: "城区"
},
348: {
weaid: "348",
citynm: "和田",
cityno: "hetian",
cityid: "101131301",
area_1: "新疆",
area_2: "和田",
area_3: "城区"
},
349: {
weaid: "349",
citynm: "阿勒泰",
cityno: "aletai",
cityid: "101131401",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "城区"
},
350: {
weaid: "350",
citynm: "阿图什",
cityno: "atushi",
cityid: "101131501",
area_1: "新疆",
area_2: "克州",
area_3: "阿图什"
},
351: {
weaid: "351",
citynm: "博乐",
cityno: "bole",
cityid: "101131601",
area_1: "新疆",
area_2: "博尔塔拉",
area_3: "博乐"
},
352: {
weaid: "352",
citynm: "克拉玛依",
cityno: "kelamayi",
cityid: "101130201",
area_1: "新疆",
area_2: "克拉玛依",
area_3: "城区"
},
353: {
weaid: "353",
citynm: "拉萨",
cityno: "lasa",
cityid: "101140101",
area_1: "西藏",
area_2: "拉萨",
area_3: "城区"
},
354: {
weaid: "354",
citynm: "山南",
cityno: "shannan",
cityid: "101140301",
area_1: "西藏",
area_2: "山南",
area_3: "城区"
},
355: {
weaid: "355",
citynm: "阿里",
cityno: "ali",
cityid: "101140701",
area_1: "西藏",
area_2: "阿里",
area_3: "城区"
},
356: {
weaid: "356",
citynm: "昌都",
cityno: "changdu",
cityid: "101140501",
area_1: "西藏",
area_2: "昌都",
area_3: "城区"
},
357: {
weaid: "357",
citynm: "那曲",
cityno: "naqu",
cityid: "101140601",
area_1: "西藏",
area_2: "那曲",
area_3: "城区"
},
358: {
weaid: "358",
citynm: "日喀则",
cityno: "rikaze",
cityid: "101140201",
area_1: "西藏",
area_2: "日喀则",
area_3: "城区"
},
359: {
weaid: "359",
citynm: "林芝",
cityno: "linzhi",
cityid: "101140401",
area_1: "西藏",
area_2: "林芝",
area_3: "城区"
},
360: {
weaid: "360",
citynm: "台北县",
cityno: "taibeixian",
cityid: "101340101",
area_1: "台湾",
area_2: "台北",
area_3: "城区"
},
361: {
weaid: "361",
citynm: "高雄",
cityno: "gaoxiong",
cityid: "101340201",
area_1: "台湾",
area_2: "高雄",
area_3: "城区"
},
362: {
weaid: "362",
citynm: "台中",
cityno: "taizhong",
cityid: "101340401",
area_1: "台湾",
area_2: "台中",
area_3: "城区"
},
363: {
weaid: "363",
citynm: "海口",
cityno: "haikou",
cityid: "101310101",
area_1: "海南",
area_2: "海口",
area_3: ""
},
364: {
weaid: "364",
citynm: "三亚",
cityno: "sanya",
cityid: "101310201",
area_1: "海南",
area_2: "三亚",
area_3: ""
},
365: {
weaid: "365",
citynm: "东方",
cityno: "dongfang",
cityid: "101310202",
area_1: "海南",
area_2: "东方",
area_3: ""
},
366: {
weaid: "366",
citynm: "临高",
cityno: "lingao",
cityid: "101310203",
area_1: "海南",
area_2: "临高",
area_3: ""
},
367: {
weaid: "367",
citynm: "澄迈",
cityno: "chengmai",
cityid: "101310204",
area_1: "海南",
area_2: "澄迈",
area_3: ""
},
368: {
weaid: "368",
citynm: "儋州",
cityno: "danzhou",
cityid: "101310205",
area_1: "海南",
area_2: "儋州",
area_3: ""
},
369: {
weaid: "369",
citynm: "昌江",
cityno: "changjiang",
cityid: "101310206",
area_1: "海南",
area_2: "昌江",
area_3: ""
},
370: {
weaid: "370",
citynm: "白沙",
cityno: "baisha",
cityid: "101310207",
area_1: "海南",
area_2: "白沙",
area_3: ""
},
371: {
weaid: "371",
citynm: "琼中",
cityno: "qiongzhong",
cityid: "101310208",
area_1: "海南",
area_2: "琼中",
area_3: ""
},
372: {
weaid: "372",
citynm: "定安",
cityno: "dingan",
cityid: "101310209",
area_1: "海南",
area_2: "定安",
area_3: ""
},
373: {
weaid: "373",
citynm: "屯昌",
cityno: "tunchang",
cityid: "101310210",
area_1: "海南",
area_2: "屯昌",
area_3: ""
},
374: {
weaid: "374",
citynm: "琼海",
cityno: "qionghai",
cityid: "101310211",
area_1: "海南",
area_2: "琼海",
area_3: ""
},
375: {
weaid: "375",
citynm: "文昌",
cityno: "wenchang",
cityid: "101310212",
area_1: "海南",
area_2: "文昌",
area_3: ""
},
376: {
weaid: "376",
citynm: "保亭",
cityno: "baoting",
cityid: "101310214",
area_1: "海南",
area_2: "保亭",
area_3: ""
},
377: {
weaid: "377",
citynm: "万宁",
cityno: "wanning",
cityid: "101310215",
area_1: "海南",
area_2: "万宁",
area_3: ""
},
378: {
weaid: "378",
citynm: "陵水",
cityno: "lingshui",
cityid: "101310216",
area_1: "海南",
area_2: "陵水",
area_3: ""
},
381: {
weaid: "381",
citynm: "乐东",
cityno: "ledong",
cityid: "101310221",
area_1: "海南",
area_2: "乐东",
area_3: ""
},
382: {
weaid: "382",
citynm: "五指山",
cityno: "wuzhishan",
cityid: "101310222",
area_1: "海南",
area_2: "五指山",
area_3: ""
},
384: {
weaid: "384",
citynm: "长沙",
cityno: "changsha",
cityid: "101250101",
area_1: "湖南",
area_2: "长沙",
area_3: "城区"
},
385: {
weaid: "385",
citynm: "株洲",
cityno: "zhuzhou",
cityid: "101250301",
area_1: "湖南",
area_2: "株洲",
area_3: "城区"
},
386: {
weaid: "386",
citynm: "衡阳",
cityno: "hengyang",
cityid: "101250401",
area_1: "湖南",
area_2: "衡阳",
area_3: "城区"
},
387: {
weaid: "387",
citynm: "郴州",
cityno: "chenzhou",
cityid: "101250501",
area_1: "湖南",
area_2: "郴州",
area_3: "城区"
},
388: {
weaid: "388",
citynm: "常德",
cityno: "changde",
cityid: "101250601",
area_1: "湖南",
area_2: "常德",
area_3: "城区"
},
389: {
weaid: "389",
citynm: "益阳",
cityno: "hnyiyang",
cityid: "101250700",
area_1: "湖南",
area_2: "益阳",
area_3: "城区"
},
390: {
weaid: "390",
citynm: "娄底",
cityno: "loudi",
cityid: "101250801",
area_1: "湖南",
area_2: "娄底",
area_3: "城区"
},
391: {
weaid: "391",
citynm: "邵阳",
cityno: "shaoyang",
cityid: "101250901",
area_1: "湖南",
area_2: "邵阳",
area_3: "城区"
},
392: {
weaid: "392",
citynm: "岳阳",
cityno: "yueyang",
cityid: "101251001",
area_1: "湖南",
area_2: "岳阳",
area_3: "城区"
},
393: {
weaid: "393",
citynm: "张家界",
cityno: "zhangjiajie",
cityid: "101251101",
area_1: "湖南",
area_2: "张家界",
area_3: "城区"
},
394: {
weaid: "394",
citynm: "怀化",
cityno: "huaihua",
cityid: "101251201",
area_1: "湖南",
area_2: "怀化",
area_3: "城区"
},
396: {
weaid: "396",
citynm: "永州",
cityno: "yongzhou",
cityid: "101251401",
area_1: "湖南",
area_2: "永州",
area_3: "城区"
},
397: {
weaid: "397",
citynm: "吉首",
cityno: "jishou",
cityid: "101251501",
area_1: "湖南",
area_2: "湘西",
area_3: "吉首"
},
398: {
weaid: "398",
citynm: "湘潭",
cityno: "xiangtan",
cityid: "101250201",
area_1: "湖南",
area_2: "湘潭",
area_3: "城区"
},
399: {
weaid: "399",
citynm: "南京",
cityno: "nanjing",
cityid: "101190101",
area_1: "江苏",
area_2: "南京",
area_3: "城区"
},
400: {
weaid: "400",
citynm: "镇江",
cityno: "zhenjiang",
cityid: "101190301",
area_1: "江苏",
area_2: "镇江",
area_3: "城区"
},
401: {
weaid: "401",
citynm: "苏州",
cityno: "jssuzhou",
cityid: "101190401",
area_1: "江苏",
area_2: "苏州",
area_3: "城区"
},
402: {
weaid: "402",
citynm: "南通",
cityno: "nantong",
cityid: "101190501",
area_1: "江苏",
area_2: "南通",
area_3: "城区"
},
403: {
weaid: "403",
citynm: "扬州",
cityno: "yangzhou",
cityid: "101190601",
area_1: "江苏",
area_2: "扬州",
area_3: "城区"
},
404: {
weaid: "404",
citynm: "宿迁",
cityno: "suqian",
cityid: "101191301",
area_1: "江苏",
area_2: "宿迁",
area_3: "城区"
},
405: {
weaid: "405",
citynm: "徐州",
cityno: "xuzhou",
cityid: "101190801",
area_1: "江苏",
area_2: "徐州",
area_3: "城区"
},
406: {
weaid: "406",
citynm: "淮安",
cityno: "huaian",
cityid: "101190901",
area_1: "江苏",
area_2: "淮安",
area_3: "城区"
},
407: {
weaid: "407",
citynm: "连云港",
cityno: "lianyungang",
cityid: "101191001",
area_1: "江苏",
area_2: "连云港",
area_3: "城区"
},
408: {
weaid: "408",
citynm: "常州",
cityno: "changzhou",
cityid: "101191101",
area_1: "江苏",
area_2: "常州",
area_3: "城区"
},
409: {
weaid: "409",
citynm: "泰州",
cityno: "jstaizhou",
cityid: "101191201",
area_1: "江苏",
area_2: "泰州",
area_3: "城区"
},
410: {
weaid: "410",
citynm: "无锡",
cityno: "jswuxi",
cityid: "101190201",
area_1: "江苏",
area_2: "无锡",
area_3: "城区"
},
411: {
weaid: "411",
citynm: "盐城",
cityno: "yancheng",
cityid: "101190701",
area_1: "江苏",
area_2: "盐城",
area_3: "城区"
},
412: {
weaid: "412",
citynm: "哈尔滨",
cityno: "haerbin",
cityid: "101050101",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "城区"
},
413: {
weaid: "413",
citynm: "牡丹江",
cityno: "mudanjiang",
cityid: "101050301",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "城区"
},
414: {
weaid: "414",
citynm: "佳木斯",
cityno: "jiamusi",
cityid: "101050401",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "城区"
},
415: {
weaid: "415",
citynm: "绥化",
cityno: "suihua",
cityid: "101050501",
area_1: "黑龙江",
area_2: "绥化",
area_3: "城区"
},
416: {
weaid: "416",
citynm: "黑河",
cityno: "heihe",
cityid: "101050601",
area_1: "黑龙江",
area_2: "黑河",
area_3: "城区"
},
417: {
weaid: "417",
citynm: "双鸭山",
cityno: "shuangyashan",
cityid: "101051301",
area_1: "黑龙江",
area_2: "双鸭山",
area_3: "城区"
},
418: {
weaid: "418",
citynm: "伊春",
cityno: "hljyichun",
cityid: "101050801",
area_1: "黑龙江",
area_2: "伊春",
area_3: "城区"
},
419: {
weaid: "419",
citynm: "大庆",
cityno: "daqing",
cityid: "101050901",
area_1: "黑龙江",
area_2: "大庆",
area_3: "城区"
},
420: {
weaid: "420",
citynm: "七台河",
cityno: "qitaihe",
cityid: "101051002",
area_1: "黑龙江",
area_2: "七台河",
area_3: "城区"
},
421: {
weaid: "421",
citynm: "鸡西",
cityno: "jixi",
cityid: "101051101",
area_1: "黑龙江",
area_2: "鸡西",
area_3: "城区"
},
422: {
weaid: "422",
citynm: "鹤岗",
cityno: "hegang",
cityid: "101051201",
area_1: "黑龙江",
area_2: "鹤岗",
area_3: "城区"
},
423: {
weaid: "423",
citynm: "齐齐哈尔",
cityno: "qiqihaer",
cityid: "101050201",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "城区"
},
424: {
weaid: "424",
citynm: "大兴安岭",
cityno: "daxinganling",
cityid: "101050701",
area_1: "黑龙江",
area_2: "大兴安岭",
area_3: "城区"
},
425: {
weaid: "425",
citynm: "长春",
cityno: "changchun",
cityid: "101060101",
area_1: "吉林",
area_2: "长春",
area_3: "城区"
},
426: {
weaid: "426",
citynm: "延吉",
cityno: "yanji",
cityid: "101060301",
area_1: "吉林",
area_2: "延边",
area_3: "延吉"
},
427: {
weaid: "427",
citynm: "四平",
cityno: "siping",
cityid: "101060401",
area_1: "吉林",
area_2: "四平",
area_3: "城区"
},
428: {
weaid: "428",
citynm: "白山",
cityno: "baishan",
cityid: "101060901",
area_1: "吉林",
area_2: "白山",
area_3: "城区"
},
429: {
weaid: "429",
citynm: "白城",
cityno: "baicheng",
cityid: "101060601",
area_1: "吉林",
area_2: "白城",
area_3: "城区"
},
430: {
weaid: "430",
citynm: "辽源",
cityno: "liaoyuan",
cityid: "101060701",
area_1: "吉林",
area_2: "辽源",
area_3: "城区"
},
431: {
weaid: "431",
citynm: "松原",
cityno: "songyuan",
cityid: "101060801",
area_1: "吉林",
area_2: "松原",
area_3: "城区"
},
432: {
weaid: "432",
citynm: "吉林",
cityno: "jilin",
cityid: "101060201",
area_1: "吉林",
area_2: "城区",
area_3: ""
},
433: {
weaid: "433",
citynm: "通化",
cityno: "tonghua",
cityid: "101060501",
area_1: "吉林",
area_2: "通化",
area_3: "城区"
},
434: {
weaid: "434",
citynm: "沈阳",
cityno: "shenyang",
cityid: "101070101",
area_1: "辽宁",
area_2: "沈阳",
area_3: "城区"
},
435: {
weaid: "435",
citynm: "鞍山",
cityno: "anshan",
cityid: "101070301",
area_1: "辽宁",
area_2: "鞍山",
area_3: "城区"
},
436: {
weaid: "436",
citynm: "抚顺",
cityno: "fushun",
cityid: "101070401",
area_1: "辽宁",
area_2: "抚顺",
area_3: "城区"
},
437: {
weaid: "437",
citynm: "本溪",
cityno: "benxi",
cityid: "101070501",
area_1: "辽宁",
area_2: "本溪",
area_3: "城区"
},
438: {
weaid: "438",
citynm: "丹东",
cityno: "dandong",
cityid: "101070601",
area_1: "辽宁",
area_2: "丹东",
area_3: "城区"
},
439: {
weaid: "439",
citynm: "葫芦岛",
cityno: "huludao",
cityid: "101071401",
area_1: "辽宁",
area_2: "葫芦岛",
area_3: "城区"
},
440: {
weaid: "440",
citynm: "营口",
cityno: "yingkou",
cityid: "101070801",
area_1: "辽宁",
area_2: "营口",
area_3: "城区"
},
441: {
weaid: "441",
citynm: "阜新",
cityno: "fuxin",
cityid: "101070901",
area_1: "辽宁",
area_2: "阜新",
area_3: "城区"
},
442: {
weaid: "442",
citynm: "辽阳",
cityno: "liaoyang",
cityid: "101071001",
area_1: "辽宁",
area_2: "辽阳",
area_3: "城区"
},
443: {
weaid: "443",
citynm: "铁岭",
cityno: "tieling",
cityid: "101071101",
area_1: "辽宁",
area_2: "铁岭",
area_3: "城区"
},
444: {
weaid: "444",
citynm: "朝阳",
cityno: "lnchaoyang",
cityid: "101071201",
area_1: "辽宁",
area_2: "朝阳",
area_3: "城区"
},
445: {
weaid: "445",
citynm: "盘锦",
cityno: "panjin",
cityid: "101071301",
area_1: "辽宁",
area_2: "盘锦",
area_3: "城区"
},
446: {
weaid: "446",
citynm: "大连",
cityno: "dalian",
cityid: "101070201",
area_1: "辽宁",
area_2: "大连",
area_3: "城区"
},
447: {
weaid: "447",
citynm: "锦州",
cityno: "jinzhou",
cityid: "101070701",
area_1: "辽宁",
area_2: "锦州",
area_3: "城区"
},
448: {
weaid: "448",
citynm: "阿城",
cityno: "acheng",
cityid: "101050104",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "阿城"
},
449: {
weaid: "449",
citynm: "安达",
cityno: "anda",
cityid: "101050503",
area_1: "黑龙江",
area_2: "绥化",
area_3: "安达"
},
450: {
weaid: "450",
citynm: "安定",
cityno: "anding",
cityid: "101160208",
area_1: "甘肃",
area_2: "定西",
area_3: "安定"
},
452: {
weaid: "452",
citynm: "阿尔山",
cityno: "aershan",
cityid: "101081102",
area_1: "内蒙古",
area_2: "兴安盟",
area_3: "阿尔山"
},
453: {
weaid: "453",
citynm: "安福",
cityno: "anfu",
cityid: "101240612",
area_1: "江西",
area_2: "吉安",
area_3: "安福"
},
454: {
weaid: "454",
citynm: "安国",
cityno: "anguo",
cityid: "101090220",
area_1: "河北",
area_2: "保定",
area_3: "安国"
},
455: {
weaid: "455",
citynm: "敖汉旗",
cityno: "aohanqi",
cityid: "101080614",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "敖汉"
},
456: {
weaid: "456",
citynm: "阿合奇",
cityno: "aheqi",
cityid: "101131504",
area_1: "新疆",
area_2: "克州",
area_3: "阿合奇"
},
457: {
weaid: "457",
citynm: "安化",
cityno: "anhua",
cityid: "101250704",
area_1: "湖南",
area_2: "益阳",
area_3: "安化"
},
458: {
weaid: "458",
citynm: "安吉",
cityno: "anji",
cityid: "101210203",
area_1: "浙江",
area_2: "湖州",
area_3: "安吉"
},
459: {
weaid: "459",
citynm: "阿荣旗",
cityno: "arongqi",
cityid: "101081003",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "阿荣旗"
},
460: {
weaid: "460",
citynm: "阿克陶",
cityno: "aketao",
cityid: "101131503",
area_1: "新疆",
area_2: "克州",
area_3: "阿克陶"
},
461: {
weaid: "461",
citynm: "安龙",
cityno: "anlong",
cityid: "101260907",
area_1: "贵州",
area_2: "黔西南",
area_3: "安龙"
},
462: {
weaid: "462",
citynm: "阿拉善右旗",
cityno: "alashanyouqi",
cityid: "101081202",
area_1: "内蒙古",
area_2: "阿拉善盟",
area_3: "阿右旗"
},
463: {
weaid: "463",
citynm: "安陆",
cityno: "anlu",
cityid: "101200402",
area_1: "湖北",
area_2: "孝感",
area_3: "安陆"
},
464: {
weaid: "464",
citynm: "安宁",
cityno: "anning",
cityid: "101290112",
area_1: "云南",
area_2: "昆明",
area_3: "安宁"
},
465: {
weaid: "465",
citynm: "安平",
cityno: "anping",
cityid: "101090806",
area_1: "河北",
area_2: "衡水",
area_3: "安平"
},
466: {
weaid: "466",
citynm: "安丘",
cityno: "anqiu",
cityid: "101120607",
area_1: "山东",
area_2: "潍坊",
area_3: "安丘"
},
467: {
weaid: "467",
citynm: "安仁",
cityno: "anren",
cityid: "101250509",
area_1: "湖南",
area_2: "郴州",
area_3: "安仁"
},
468: {
weaid: "468",
citynm: "安塞",
cityno: "ansai",
cityid: "101110307",
area_1: "陕西",
area_2: "延安",
area_3: "安塞"
},
469: {
weaid: "469",
citynm: "安图",
cityno: "antu",
cityid: "101060303",
area_1: "吉林",
area_2: "延边",
area_3: "安图"
},
470: {
weaid: "470",
citynm: "阿瓦提",
cityno: "awati",
cityid: "101130809",
area_1: "新疆",
area_2: "阿克苏",
area_3: "阿瓦提"
},
471: {
weaid: "471",
citynm: "安新",
cityno: "anxin",
cityid: "101090211",
area_1: "河北",
area_2: "保定",
area_3: "安新"
},
472: {
weaid: "472",
citynm: "安溪",
cityno: "anxi",
cityid: "101230502",
area_1: "福建",
area_2: "泉州",
area_3: "安溪"
},
473: {
weaid: "473",
citynm: "安乡",
cityno: "anxiang",
cityid: "101250602",
area_1: "湖南",
area_2: "常德",
area_3: "安乡"
},
474: {
weaid: "474",
citynm: "安县",
cityno: "anxian",
cityid: "101270404",
area_1: "四川",
area_2: "绵阳",
area_3: "安县"
},
475: {
weaid: "475",
citynm: "安义",
cityno: "anyi",
cityid: "101240104",
area_1: "江西",
area_2: "南昌",
area_3: "安义"
},
476: {
weaid: "476",
citynm: "安远",
cityno: "anyuan",
cityid: "101240712",
area_1: "江西",
area_2: "赣州",
area_3: "安远"
},
477: {
weaid: "477",
citynm: "安岳",
cityno: "anyue",
cityid: "101271302",
area_1: "四川",
area_2: "资阳",
area_3: "安岳"
},
478: {
weaid: "478",
citynm: "安泽",
cityno: "anze",
cityid: "101100716",
area_1: "山西",
area_2: "临汾",
area_3: "安泽"
},
479: {
weaid: "479",
citynm: "博爱",
cityno: "boai",
cityid: "101181106",
area_1: "河南",
area_2: "焦作",
area_3: "博爱"
},
480: {
weaid: "480",
citynm: "北安",
cityno: "beian",
cityid: "101050606",
area_1: "黑龙江",
area_2: "黑河",
area_3: "北安"
},
481: {
weaid: "481",
citynm: "博白",
cityno: "bobai",
cityid: "101300902",
area_1: "广西",
area_2: "玉林",
area_3: "博白"
},
482: {
weaid: "482",
citynm: "宾川",
cityno: "binchuan",
cityid: "101290205",
area_1: "云南",
area_2: "大理",
area_3: "宾川"
},
483: {
weaid: "483",
citynm: "拜城",
cityno: "xjbaicheng",
cityid: "101130804",
area_1: "新疆",
area_2: "阿克苏",
area_3: "拜城"
},
484: {
weaid: "484",
citynm: "巴楚",
cityno: "bachu",
cityid: "101130908",
area_1: "新疆",
area_2: "喀什",
area_3: "巴楚"
},
485: {
weaid: "485",
citynm: "保德",
cityno: "baode",
cityid: "101101011",
area_1: "山西",
area_2: "忻州",
area_3: "保德"
},
486: {
weaid: "486",
citynm: "巴东",
cityno: "badong",
cityid: "101201008",
area_1: "湖北",
area_2: "恩施",
area_3: "巴东"
},
487: {
weaid: "487",
citynm: "布尔津",
cityno: "buerjin",
cityid: "101131406",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "布尔津"
},
488: {
weaid: "488",
citynm: "宝丰",
cityno: "baofen",
cityid: "101180503",
area_1: "河南",
area_2: "平顶山",
area_3: "宝丰"
},
489: {
weaid: "489",
citynm: "班戈",
cityno: "bange",
cityid: "101140604",
area_1: "西藏",
area_2: "那曲",
area_3: "班戈"
},
490: {
weaid: "490",
citynm: "普格",
cityno: "puge",
cityid: "101271609",
area_1: "四川",
area_2: "凉山",
area_3: "普格"
},
491: {
weaid: "491",
citynm: "滨海",
cityno: "binhai",
cityid: "101190703",
area_1: "江苏",
area_2: "盐城",
area_3: "滨海"
},
492: {
weaid: "492",
citynm: "白河",
cityno: "baihe",
cityid: "101110708",
area_1: "陕西",
area_2: "安康",
area_3: "白河"
},
494: {
weaid: "494",
citynm: "博湖",
cityno: "bohu",
cityid: "101130612",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "博湖"
},
495: {
weaid: "495",
citynm: "保靖",
cityno: "baojing",
cityid: "101251502",
area_1: "湖南",
area_2: "湘西",
area_3: "保靖"
},
496: {
weaid: "496",
citynm: "保康",
cityno: "baokang",
cityid: "101200203",
area_1: "湖北",
area_2: "襄阳",
area_3: "保康"
},
498: {
weaid: "498",
citynm: "勃利",
cityno: "boli",
cityid: "101051003",
area_1: "黑龙江",
area_2: "七台河",
area_3: "勃利"
},
499: {
weaid: "499",
citynm: "北流",
cityno: "beiliu",
cityid: "101300903",
area_1: "广西",
area_2: "玉林",
area_3: "北流"
},
500: {
weaid: "500",
citynm: "木里",
cityno: "muli",
cityid: "101271603",
area_1: "四川",
area_2: "凉山",
area_3: "木里"
},
501: {
weaid: "501",
citynm: "巴里坤",
cityno: "balikun",
cityid: "101131203",
area_1: "新疆",
area_2: "哈密",
area_3: "巴里坤"
},
502: {
weaid: "502",
citynm: "巴林左旗",
cityno: "balinzuoqi",
cityid: "101080605",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "巴林左旗"
},
503: {
weaid: "503",
citynm: "巴林右旗",
cityno: "balinyouqi",
cityid: "101080606",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "巴林右旗"
},
504: {
weaid: "504",
citynm: "博罗",
cityno: "boluo",
cityid: "101280302",
area_1: "广东",
area_2: "惠州",
area_3: "博罗"
},
505: {
weaid: "505",
citynm: "巴马",
cityno: "bama",
cityid: "101301204",
area_1: "广西",
area_2: "河池",
area_3: "巴马"
},
506: {
weaid: "506",
citynm: "班玛",
cityno: "banma",
cityid: "101150502",
area_1: "青海",
area_2: "果洛",
area_3: "班玛"
},
508: {
weaid: "508",
citynm: "北票",
cityno: "beipiao",
cityid: "101071205",
area_1: "辽宁",
area_2: "朝阳",
area_3: "北票"
},
509: {
weaid: "509",
citynm: "宝清",
cityno: "baoqin",
cityid: "101051303",
area_1: "黑龙江",
area_2: "双鸭山",
area_3: "宝清"
},
510: {
weaid: "510",
citynm: "拜泉",
cityno: "baiquan",
cityid: "101050207",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "拜泉"
},
511: {
weaid: "511",
citynm: "白水",
cityno: "baishiu",
cityid: "101110505",
area_1: "陕西",
area_2: "渭南",
area_3: "白水"
},
512: {
weaid: "512",
citynm: "泊头",
cityno: "botou",
cityid: "101090711",
area_1: "河北",
area_2: "沧州",
area_3: "泊头"
},
513: {
weaid: "513",
citynm: "布拖",
cityno: "butuo",
cityid: "101271619",
area_1: "四川",
area_2: "凉山",
area_3: "布拖"
},
514: {
weaid: "514",
citynm: "宾县",
cityno: "binxian",
cityid: "101050105",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "宾县"
},
515: {
weaid: "515",
citynm: "博兴",
cityno: "boxin",
cityid: "101121102",
area_1: "山东",
area_2: "滨州",
area_3: "博兴"
},
516: {
weaid: "516",
citynm: "彬县",
cityno: "sxbinxian",
cityid: "101110208",
area_1: "陕西",
area_2: "咸阳",
area_3: "彬县"
},
517: {
weaid: "517",
citynm: "宝兴",
cityno: "baoxing",
cityid: "101271708",
area_1: "四川",
area_2: "雅安",
area_3: "宝兴"
},
518: {
weaid: "518",
citynm: "本溪县",
cityno: "benxixian",
cityid: "101070502",
area_1: "辽宁",
area_2: "本溪",
area_3: "本溪县"
},
519: {
weaid: "519",
citynm: "巴彦",
cityno: "bayan",
cityid: "101050107",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "巴彦"
},
520: {
weaid: "520",
citynm: "泌阳",
cityno: "biyang",
cityid: "101181606",
area_1: "河南",
area_2: "驻马店",
area_3: "泌阳"
},
521: {
weaid: "521",
citynm: "白云鄂博",
cityno: "baiyunebo",
cityid: "101080202",
area_1: "内蒙古",
area_2: "包头",
area_3: "白云鄂博"
},
522: {
weaid: "522",
citynm: "宝应",
cityno: "baoying",
cityid: "101190602",
area_1: "江苏",
area_2: "扬州",
area_3: "宝应"
},
523: {
weaid: "523",
citynm: "霸州",
cityno: "bazhou",
cityid: "101090608",
area_1: "河北",
area_2: "廊坊",
area_3: "霸州"
},
524: {
weaid: "524",
citynm: "淳安",
cityno: "chunan",
cityid: "101210104",
area_1: "浙江",
area_2: "杭州",
area_3: "淳安"
},
525: {
weaid: "525",
citynm: "长安",
cityno: "changan",
cityid: "101110102",
area_1: "陕西",
area_2: "西安",
area_3: "长安"
},
526: {
weaid: "526",
citynm: "错那",
cityno: "cuona",
cityid: "101140306",
area_1: "西藏",
area_2: "山南",
area_3: "错那"
},
527: {
weaid: "527",
citynm: "察布查尔",
cityno: "chabuchaer",
cityid: "101131002",
area_1: "新疆",
area_2: "伊犁",
area_3: "察布查尔"
},
528: {
weaid: "528",
citynm: "赤壁",
cityno: "chibi",
cityid: "101200702",
area_1: "湖北",
area_2: "咸宁",
area_3: "赤壁"
},
529: {
weaid: "529",
citynm: "陈巴尔虎旗",
cityno: "chenbaerhuqi",
cityid: "101081007",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "陈旗"
},
530: {
weaid: "530",
citynm: "城步",
cityno: "chengbu",
cityid: "101250909",
area_1: "湖南",
area_2: "邵阳",
area_3: "城步"
},
531: {
weaid: "531",
citynm: "赤城",
cityno: "chicheng",
cityid: "101090313",
area_1: "河北",
area_2: "张家口",
area_3: "赤城"
},
532: {
weaid: "532",
citynm: "澄城",
cityno: "chengcheng",
cityid: "101110508",
area_1: "陕西",
area_2: "渭南",
area_3: "澄城"
},
534: {
weaid: "534",
citynm: "长岛",
cityno: "changdao",
cityid: "101120503",
area_1: "山东",
area_2: "烟台",
area_3: "长岛"
},
535: {
weaid: "535",
citynm: "蔡甸",
cityno: "caidian",
cityid: "101200102",
area_1: "湖北",
area_2: "武汉",
area_3: "蔡甸"
},
536: {
weaid: "536",
citynm: "长丰",
cityno: "changfeng",
cityid: "101220102",
area_1: "安徽",
area_2: "合肥",
area_3: "长丰"
},
537: {
weaid: "537",
citynm: "长葛",
cityno: "changge",
cityid: "101180404",
area_1: "河南",
area_2: "许昌",
area_3: "长葛"
},
538: {
weaid: "538",
citynm: "岑巩",
cityno: "cengong",
cityid: "101260502",
area_1: "贵州",
area_2: "黔东南",
area_3: "岑巩"
},
539: {
weaid: "539",
citynm: "呈贡",
cityno: "chenggong",
cityid: "101290108",
area_1: "云南",
area_2: "昆明",
area_3: "呈贡"
},
540: {
weaid: "540",
citynm: "城固",
cityno: "chenggu",
cityid: "101110806",
area_1: "陕西",
area_2: "汉中",
area_3: "城固"
},
541: {
weaid: "541",
citynm: "长海",
cityno: "changhai",
cityid: "101070206",
area_1: "辽宁",
area_2: "大连",
area_3: "长海"
},
542: {
weaid: "542",
citynm: "册亨",
cityno: "ceheng",
cityid: "101260908",
area_1: "贵州",
area_2: "黔西南",
area_3: "册亨"
},
543: {
weaid: "543",
citynm: "察哈尔右翼前旗",
cityno: "chahaeryouyiqianqi",
cityid: "101080408",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "察右前旗"
},
544: {
weaid: "544",
citynm: "察哈尔右翼中旗",
cityno: "chahaeryouyizhongqi",
cityid: "101080409",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "察右中旗"
},
545: {
weaid: "545",
citynm: "察哈尔右翼后旗",
cityno: "chahaeryouyihouqi",
cityid: "101080410",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "察右后旗"
},
546: {
weaid: "546",
citynm: "从化",
cityno: "conghua",
cityid: "101280103",
area_1: "广东",
area_2: "广州",
area_3: "从化"
},
547: {
weaid: "547",
citynm: "淳化",
cityno: "chunhua",
cityid: "101110204",
area_1: "陕西",
area_2: "咸阳",
area_3: "淳化"
},
548: {
weaid: "548",
citynm: "从江",
cityno: "congjiang",
cityid: "101260517",
area_1: "贵州",
area_2: "黔东南",
area_3: "从江"
},
549: {
weaid: "549",
citynm: "澄江",
cityno: "chengjiang",
cityid: "101290702",
area_1: "云南",
area_2: "玉溪",
area_3: "澄江"
},
550: {
weaid: "550",
citynm: "昌乐",
cityno: "changle",
cityid: "101120605",
area_1: "山东",
area_2: "潍坊",
area_3: "昌乐"
},
551: {
weaid: "551",
citynm: "长乐",
cityno: "zhangle",
cityid: "101230110",
area_1: "福建",
area_2: "福州",
area_3: "长乐"
},
552: {
weaid: "552",
citynm: "策勒",
cityno: "cele",
cityid: "101131303",
area_1: "新疆",
area_2: "和田",
area_3: "策勒"
},
553: {
weaid: "553",
citynm: "长岭",
cityno: "changling",
cityid: "101060804",
area_1: "吉林",
area_2: "松原",
area_3: "长岭"
},
554: {
weaid: "554",
citynm: "昌黎",
cityno: "changli",
cityid: "101091103",
area_1: "河北",
area_2: "秦皇岛",
area_3: "昌黎"
},
555: {
weaid: "555",
citynm: "崇礼",
cityno: "chongli",
cityid: "101090314",
area_1: "河北",
area_2: "张家口",
area_3: "崇礼"
},
556: {
weaid: "556",
citynm: "茶陵",
cityno: "chaling",
cityid: "101250305",
area_1: "湖南",
area_2: "株洲",
area_3: "茶陵"
},
557: {
weaid: "557",
citynm: "慈利",
cityno: "cili",
cityid: "101251103",
area_1: "湖南",
area_2: "张家界",
area_3: "慈利"
},
558: {
weaid: "558",
citynm: "长白",
cityno: "changbai",
cityid: "101060905",
area_1: "吉林",
area_2: "白山",
area_3: "长白"
},
559: {
weaid: "559",
citynm: "苍南",
cityno: "cangnan",
cityid: "101210709",
area_1: "浙江",
area_2: "温州",
area_3: "苍南"
},
561: {
weaid: "561",
citynm: "常宁",
cityno: "changning",
cityid: "101250406",
area_1: "湖南",
area_2: "衡阳",
area_3: "常宁"
},
562: {
weaid: "562",
citynm: "长宁",
cityno: "scchangning",
cityid: "101271106",
area_1: "四川",
area_2: "宜宾",
area_3: "长宁"
},
563: {
weaid: "563",
citynm: "昌宁",
cityno: "ynchangning",
cityid: "101290505",
area_1: "云南",
area_2: "保山",
area_3: "昌宁"
},
564: {
weaid: "564",
citynm: "遂平",
cityno: "suiping",
cityid: "101181603",
area_1: "河南",
area_2: "驻马店",
area_3: "遂平"
},
566: {
weaid: "566",
citynm: "长清",
cityno: "changqing",
cityid: "101120102",
area_1: "山东",
area_2: "济南",
area_3: "长清"
},
567: {
weaid: "567",
citynm: "崇仁",
cityno: "chongren",
cityid: "101240404",
area_1: "江西",
area_2: "抚州",
area_3: "崇仁"
},
568: {
weaid: "568",
citynm: "临沂兰陵",
cityno: "linyilanling",
cityid: "101120904",
area_1: "山东",
area_2: "临沂",
area_3: "兰陵"
},
569: {
weaid: "569",
citynm: "常熟",
cityno: "changshu",
cityid: "101190402",
area_1: "江苏",
area_2: "苏州",
area_3: "常熟"
},
570: {
weaid: "570",
citynm: "常山",
cityno: "changshan",
cityid: "101211002",
area_1: "浙江",
area_2: "衢州",
area_3: "常山"
},
571: {
weaid: "571",
citynm: "赤水",
cityno: "chishui",
cityid: "101260208",
area_1: "贵州",
area_2: "遵义",
area_3: "赤水"
},
572: {
weaid: "572",
citynm: "长顺",
cityno: "changshun",
cityid: "101260404",
area_1: "贵州",
area_2: "黔南",
area_3: "长顺"
},
573: {
weaid: "573",
citynm: "长泰",
cityno: "changtai",
cityid: "101230602",
area_1: "福建",
area_2: "漳州",
area_3: "长泰"
},
574: {
weaid: "574",
citynm: "长汀",
cityno: "changting",
cityid: "101230702",
area_1: "福建",
area_2: "龙岩",
area_3: "长汀"
},
576: {
weaid: "576",
citynm: "昌图",
cityno: "changtu",
cityid: "101071103",
area_1: "辽宁",
area_2: "铁岭",
area_3: "昌图"
},
577: {
weaid: "577",
citynm: "成武",
cityno: "chengwu",
cityid: "101121008",
area_1: "山东",
area_2: "菏泽",
area_3: "成武"
},
578: {
weaid: "578",
citynm: "苍梧",
cityno: "cangwu",
cityid: "101300604",
area_1: "广西",
area_2: "梧州",
area_3: "苍梧"
},
579: {
weaid: "579",
citynm: "长武",
cityno: "changwu",
cityid: "101110209",
area_1: "陕西",
area_2: "咸阳",
area_3: "长武"
},
580: {
weaid: "580",
citynm: "曹县",
cityno: "caoxian",
cityid: "101121007",
area_1: "山东",
area_2: "菏泽",
area_3: "曹县"
},
581: {
weaid: "581",
citynm: "长兴",
cityno: "changxing",
cityid: "101210202",
area_1: "浙江",
area_2: "湖州",
area_3: "长兴"
},
582: {
weaid: "582",
citynm: "慈溪",
cityno: "cixi",
cityid: "101210403",
area_1: "浙江",
area_2: "宁波",
area_3: "慈溪"
},
583: {
weaid: "583",
citynm: "辰溪",
cityno: "chenxi",
cityid: "101251204",
area_1: "湖南",
area_2: "怀化",
area_3: "辰溪"
},
584: {
weaid: "584",
citynm: "岑溪",
cityno: "cenxi",
cityid: "101300606",
area_1: "广西",
area_2: "梧州",
area_3: "岑溪"
},
585: {
weaid: "585",
citynm: "崇信",
cityno: "chongxin",
cityid: "101160304",
area_1: "甘肃",
area_2: "平凉",
area_3: "崇信"
},
586: {
weaid: "586",
citynm: "成县",
cityno: "chengxian",
cityid: "101161002",
area_1: "甘肃",
area_2: "陇南",
area_3: "成县"
},
587: {
weaid: "587",
citynm: "苍溪",
cityno: "cangxi",
cityid: "101272105",
area_1: "四川",
area_2: "广元",
area_3: "苍溪"
},
588: {
weaid: "588",
citynm: "崇阳",
cityno: "chongyang",
cityid: "101200704",
area_1: "湖北",
area_2: "咸宁",
area_3: "崇阳"
},
589: {
weaid: "589",
citynm: "长阳",
cityno: "changyang",
cityid: "101200908",
area_1: "湖北",
area_2: "宜昌",
area_3: "长阳"
},
590: {
weaid: "590",
citynm: "潮阳",
cityno: "chaoyang",
cityid: "101280502",
area_1: "广东",
area_2: "汕头",
area_3: "潮阳"
},
591: {
weaid: "591",
citynm: "昌邑",
cityno: "changyi",
cityid: "101120606",
area_1: "山东",
area_2: "潍坊",
area_3: "昌邑"
},
592: {
weaid: "592",
citynm: "崇义",
cityno: "chongyi",
cityid: "101240702",
area_1: "江西",
area_2: "赣州",
area_3: "崇义"
},
593: {
weaid: "593",
citynm: "长垣",
cityno: "changyuan",
cityid: "101180308",
area_1: "河南",
area_2: "新乡",
area_3: "长垣"
},
594: {
weaid: "594",
citynm: "沧源",
cityno: "cangyuan",
cityid: "101291102",
area_1: "云南",
area_2: "临沧",
area_3: "沧源"
},
595: {
weaid: "595",
citynm: "崇州",
cityno: "chongzhou",
cityid: "101270114",
area_1: "四川",
area_2: "成都",
area_3: "崇州"
},
596: {
weaid: "596",
citynm: "长子",
cityno: "changzi",
cityid: "101100509",
area_1: "山西",
area_2: "长治",
area_3: "长子"
},
597: {
weaid: "597",
citynm: "大安",
cityno: "daan",
cityid: "101060603",
area_1: "吉林",
area_2: "白城",
area_3: "大安"
},
598: {
weaid: "598",
citynm: "德安",
cityno: "dean",
cityid: "101240205",
area_1: "江西",
area_2: "九江",
area_3: "德安"
},
599: {
weaid: "599",
citynm: "东安",
cityno: "dongan",
cityid: "101251403",
area_1: "湖南",
area_2: "永州",
area_3: "东安"
},
600: {
weaid: "600",
citynm: "都安",
cityno: "duan",
cityid: "101301210",
area_1: "广西",
area_2: "河池",
area_3: "都安"
},
601: {
weaid: "601",
citynm: "电白",
cityno: "dianbai",
cityid: "101282004",
area_1: "广东",
area_2: "茂名",
area_3: "电白"
},
602: {
weaid: "602",
citynm: "德保",
cityno: "debao",
cityid: "101301004",
area_1: "广西",
area_2: "百色",
area_3: "德保"
},
603: {
weaid: "603",
citynm: "定边",
cityno: "dingbian",
cityid: "101110405",
area_1: "陕西",
area_2: "榆林",
area_3: "定边"
},
604: {
weaid: "604",
citynm: "迭部",
cityno: "diebu",
cityid: "101161205",
area_1: "甘肃",
area_2: "甘南",
area_3: "迭部"
},
605: {
weaid: "605",
citynm: "大柴旦",
cityno: "dachaidan",
cityid: "101150713",
area_1: "青海",
area_2: "海西",
area_3: "大柴旦"
},
606: {
weaid: "606",
citynm: "都昌",
cityno: "duchang",
cityid: "101240210",
area_1: "江西",
area_2: "九江",
area_3: "都昌"
},
607: {
weaid: "607",
citynm: "郸城",
cityno: "dancheng",
cityid: "101181408",
area_1: "河南",
area_2: "周口",
area_3: "郸城"
},
608: {
weaid: "608",
citynm: "东川",
cityno: "dongchuan",
cityid: "101290103",
area_1: "云南",
area_2: "昆明",
area_3: "东川"
},
609: {
weaid: "609",
citynm: "大城",
cityno: "dacheng",
cityid: "101090605",
area_1: "河北",
area_2: "廊坊",
area_3: "大城"
},
610: {
weaid: "610",
citynm: "大厂",
cityno: "dachang",
cityid: "101090607",
area_1: "河北",
area_2: "廊坊",
area_3: "大厂"
},
611: {
weaid: "611",
citynm: "德昌",
cityno: "dechang",
cityid: "101271605",
area_1: "四川",
area_2: "凉山",
area_3: "德昌"
},
612: {
weaid: "612",
citynm: "杜尔伯特",
cityno: "duerbote",
cityid: "101050905",
area_1: "黑龙江",
area_2: "大庆",
area_3: "杜尔伯特"
},
613: {
weaid: "613",
citynm: "大方",
cityno: "dafang",
cityid: "101260705",
area_1: "贵州",
area_2: "毕节",
area_3: "大方"
},
614: {
weaid: "614",
citynm: "东丰",
cityno: "dongfeng",
cityid: "101060702",
area_1: "吉林",
area_2: "辽源",
area_3: "东丰"
},
615: {
weaid: "615",
citynm: "大丰",
cityno: "dafeng",
cityid: "101190708",
area_1: "江苏",
area_2: "盐城",
area_3: "大丰"
},
616: {
weaid: "616",
citynm: "登封",
cityno: "dengfeng",
cityid: "101180104",
area_1: "河南",
area_2: "郑州",
area_3: "登封"
},
617: {
weaid: "617",
citynm: "丹凤",
cityno: "danfeng",
cityid: "101110606",
area_1: "陕西",
area_2: "商洛",
area_3: "丹凤"
},
618: {
weaid: "618",
citynm: "东港",
cityno: "donggang",
cityid: "101070604",
area_1: "辽宁",
area_2: "丹东",
area_3: "东港"
},
619: {
weaid: "619",
citynm: "东光",
cityno: "dongguang",
cityid: "101090703",
area_1: "河北",
area_2: "沧州",
area_3: "东光"
},
620: {
weaid: "620",
citynm: "大关",
cityno: "daguan",
cityid: "101291010",
area_1: "云南",
area_2: "昭通",
area_3: "大关"
},
621: {
weaid: "621",
citynm: "东海",
cityno: "donghai",
cityid: "101191002",
area_1: "江苏",
area_2: "连云港",
area_3: "东海"
},
622: {
weaid: "622",
citynm: "澄海",
cityno: "chenghai",
cityid: "101280503",
area_1: "广东",
area_2: "汕头",
area_3: "澄海"
},
623: {
weaid: "623",
citynm: "德惠",
cityno: "dehui",
cityid: "101060103",
area_1: "吉林",
area_2: "长春",
area_3: "德惠"
},
624: {
weaid: "624",
citynm: "敦化",
cityno: "dunhua",
cityid: "101060302",
area_1: "吉林",
area_2: "延边",
area_3: "敦化"
},
625: {
weaid: "625",
citynm: "德化",
cityno: "dehua",
cityid: "101230505",
area_1: "福建",
area_2: "泉州",
area_3: "德化"
},
626: {
weaid: "626",
citynm: "敦煌",
cityno: "dunhuang",
cityid: "101160808",
area_1: "甘肃",
area_2: "酒泉",
area_3: "敦煌"
},
627: {
weaid: "627",
citynm: "德江",
cityno: "dejiang",
cityid: "101260610",
area_1: "贵州",
area_2: "铜仁",
area_3: "德江"
},
628: {
weaid: "628",
citynm: "丹江口",
cityno: "danjiangkou",
cityid: "101201107",
area_1: "湖北",
area_2: "十堰",
area_3: "丹江口"
},
629: {
weaid: "629",
citynm: "都江堰",
cityno: "dujiangyan",
cityid: "101270111",
area_1: "四川",
area_2: "成都",
area_3: "都江堰"
},
630: {
weaid: "630",
citynm: "磴口",
cityno: "dengkou",
cityid: "101080803",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "磴口"
},
631: {
weaid: "631",
citynm: "洞口",
cityno: "dongkou",
cityid: "101250903",
area_1: "湖南",
area_2: "邵阳",
area_3: "洞口"
},
632: {
weaid: "632",
citynm: "东兰",
cityno: "donglan",
cityid: "101301203",
area_1: "广西",
area_2: "河池",
area_3: "东兰"
},
634: {
weaid: "634",
citynm: "海西冷湖",
cityno: "haixilenghu",
cityid: "101150716",
area_1: "青海",
area_2: "海西",
area_3: "冷湖"
},
635: {
weaid: "635",
citynm: "大荔",
cityno: "dali",
cityid: "101110504",
area_1: "陕西",
area_2: "渭南",
area_3: "大荔"
},
636: {
weaid: "636",
citynm: "丹棱",
cityno: "danling",
cityid: "101271505",
area_1: "四川",
area_2: "眉山",
area_3: "丹棱"
},
637: {
weaid: "637",
citynm: "鄂尔多斯达拉特",
cityno: "dalateqi",
cityid: "101080703",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "达拉特"
},
638: {
weaid: "638",
citynm: "多伦",
cityno: "duolun",
cityid: "101080915",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "多伦"
},
639: {
weaid: "639",
citynm: "斗门",
cityno: "doumen",
cityid: "101280702",
area_1: "广东",
area_2: "珠海",
area_3: "斗门"
},
640: {
weaid: "640",
citynm: "东明",
cityno: "dongming",
cityid: "101121004",
area_1: "山东",
area_2: "菏泽",
area_3: "东明"
},
641: {
weaid: "641",
citynm: "定南",
cityno: "dingnan",
cityid: "101240715",
area_1: "江西",
area_2: "赣州",
area_3: "定南"
},
642: {
weaid: "642",
citynm: "东宁",
cityno: "dongning",
cityid: "101050307",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "东宁"
},
643: {
weaid: "643",
citynm: "大宁",
cityno: "daning",
cityid: "101100705",
area_1: "山西",
area_2: "临汾",
area_3: "大宁"
},
644: {
weaid: "644",
citynm: "东平",
cityno: "dongping",
cityid: "101120805",
area_1: "山东",
area_2: "泰安",
area_3: "东平"
},
645: {
weaid: "645",
citynm: "大埔",
cityno: "dapu",
cityid: "101280404",
area_1: "广东",
area_2: "梅州",
area_3: "大埔"
},
646: {
weaid: "646",
citynm: "德清",
cityno: "deqing",
cityid: "101210204",
area_1: "浙江",
area_2: "湖州",
area_3: "德清"
},
647: {
weaid: "647",
citynm: "德庆",
cityno: "gddeqing",
cityid: "101280905",
area_1: "广东",
area_2: "肇庆",
area_3: "德庆"
},
648: {
weaid: "648",
citynm: "丁青",
cityno: "dingqing",
cityid: "101140502",
area_1: "西藏",
area_2: "昌都",
area_3: "丁青"
},
649: {
weaid: "649",
citynm: "德钦",
cityno: "deqin",
cityid: "101291302",
area_1: "云南",
area_2: "迪庆",
area_3: "德钦"
},
650: {
weaid: "650",
citynm: "达日",
cityno: "dari",
cityid: "101150504",
area_1: "青海",
area_2: "果洛",
area_3: "达日"
},
651: {
weaid: "651",
citynm: "定日",
cityno: "dingri",
cityid: "101140205",
area_1: "西藏",
area_2: "日喀则",
area_3: "定日"
},
652: {
weaid: "652",
citynm: "东胜",
cityno: "dongsheng",
cityid: "101080713",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "东胜"
},
653: {
weaid: "653",
citynm: "砀山",
cityno: "dangshan",
cityid: "101220702",
area_1: "安徽",
area_2: "宿州",
area_3: "砀山"
},
655: {
weaid: "655",
citynm: "岱山",
cityno: "daishan",
cityid: "101211104",
area_1: "浙江",
area_2: "舟山",
area_3: "岱山"
},
656: {
weaid: "656",
citynm: "东山",
cityno: "dongshan",
cityid: "101230608",
area_1: "福建",
area_2: "漳州",
area_3: "东山"
},
657: {
weaid: "657",
citynm: "独山",
cityno: "dushan",
cityid: "101260410",
area_1: "贵州",
area_2: "黔南",
area_3: "独山"
},
658: {
weaid: "658",
citynm: "大石桥",
cityno: "dashiqiao",
cityid: "101070802",
area_1: "辽宁",
area_2: "营口",
area_3: "大石桥"
},
659: {
weaid: "659",
citynm: "灯塔",
cityno: "dengta",
cityid: "101071003",
area_1: "辽宁",
area_2: "辽阳",
area_3: "灯塔"
},
660: {
weaid: "660",
citynm: "定陶",
cityno: "dingtao",
cityid: "101121005",
area_1: "山东",
area_2: "菏泽",
area_3: "定陶"
},
661: {
weaid: "661",
citynm: "东台",
cityno: "dongtai",
cityid: "101190707",
area_1: "江苏",
area_2: "盐城",
area_3: "东台"
},
662: {
weaid: "662",
citynm: "大田",
cityno: "datian",
cityid: "101230811",
area_1: "福建",
area_2: "三明",
area_3: "大田"
},
663: {
weaid: "663",
citynm: "洞头",
cityno: "dongtou",
cityid: "101210706",
area_1: "浙江",
area_2: "温州",
area_3: "洞头"
},
664: {
weaid: "664",
citynm: "大通",
cityno: "datong",
cityid: "101150102",
area_1: "青海",
area_2: "西宁",
area_3: "大通"
},
665: {
weaid: "665",
citynm: "当涂",
cityno: "dangtu",
cityid: "101220502",
area_1: "安徽",
area_2: "马鞍山",
area_3: "当涂"
},
666: {
weaid: "666",
citynm: "大洼",
cityno: "dawa",
cityid: "101071302",
area_1: "辽宁",
area_2: "盘锦",
area_3: "大洼"
},
668: {
weaid: "668",
citynm: "锡林郭勒东乌旗",
cityno: "dongwuzhumuqinqi",
cityid: "101080909",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "东乌旗"
},
669: {
weaid: "669",
citynm: "大悟",
cityno: "dawu",
cityid: "101200404",
area_1: "湖北",
area_2: "孝感",
area_3: "大悟"
},
670: {
weaid: "670",
citynm: "定襄",
cityno: "dingxiang",
cityid: "101101002",
area_1: "山西",
area_2: "忻州",
area_3: "定襄"
},
671: {
weaid: "671",
citynm: "代县",
cityno: "daixian",
cityid: "101101008",
area_1: "山西",
area_2: "忻州",
area_3: "代县"
},
672: {
weaid: "672",
citynm: "德兴",
cityno: "dexing",
cityid: "101240307",
area_1: "江西",
area_2: "上饶",
area_3: "德兴"
},
673: {
weaid: "673",
citynm: "东乡",
cityno: "dongxiang",
cityid: "101240411",
area_1: "江西",
area_2: "抚州",
area_3: "东乡"
},
674: {
weaid: "674",
citynm: "道县",
cityno: "daoxian",
cityid: "101251405",
area_1: "湖南",
area_2: "永州",
area_3: "道县"
},
675: {
weaid: "675",
citynm: "大新",
cityno: "daxin",
cityid: "101300205",
area_1: "广西",
area_2: "崇左",
area_3: "大新"
},
678: {
weaid: "678",
citynm: "丹阳",
cityno: "danyang",
cityid: "101190302",
area_1: "江苏",
area_2: "镇江",
area_3: "丹阳"
},
679: {
weaid: "679",
citynm: "东阳",
cityno: "dongyang",
cityid: "101210905",
area_1: "浙江",
area_2: "金华",
area_3: "东阳"
},
680: {
weaid: "680",
citynm: "当阳",
cityno: "dangyang",
cityid: "101200907",
area_1: "湖北",
area_2: "宜昌",
area_3: "当阳"
},
681: {
weaid: "681",
citynm: "大姚",
cityno: "dayao",
cityid: "101290802",
area_1: "云南",
area_2: "楚雄",
area_3: "大姚"
},
682: {
weaid: "682",
citynm: "大冶",
cityno: "daye",
cityid: "101200602",
area_1: "湖北",
area_2: "黄石",
area_3: "大冶"
},
683: {
weaid: "683",
citynm: "大邑",
cityno: "dayi",
cityid: "101270108",
area_1: "四川",
area_2: "成都",
area_3: "大邑"
},
684: {
weaid: "684",
citynm: "定远",
cityno: "dingyuan",
cityid: "101221104",
area_1: "安徽",
area_2: "滁州",
area_3: "定远"
},
685: {
weaid: "685",
citynm: "大余",
cityno: "dayu",
cityid: "101240705",
area_1: "江西",
area_2: "赣州",
area_3: "大余"
},
686: {
weaid: "686",
citynm: "定州",
cityno: "dingzhou",
cityid: "101090219",
area_1: "河北",
area_2: "保定",
area_3: "定州"
},
687: {
weaid: "687",
citynm: "东至",
cityno: "dongzhi",
cityid: "101221702",
area_1: "安徽",
area_2: "池州",
area_3: "东至"
},
688: {
weaid: "688",
citynm: "邓州",
cityno: "dengzhou",
cityid: "101180711",
area_1: "河南",
area_2: "南阳",
area_3: "邓州"
},
689: {
weaid: "689",
citynm: "大竹",
cityno: "dazhu",
cityid: "101270604",
area_1: "四川",
area_2: "达州",
area_3: "大竹"
},
690: {
weaid: "690",
citynm: "道真",
cityno: "daozhen",
cityid: "101260210",
area_1: "贵州",
area_2: "遵义",
area_3: "道真"
},
691: {
weaid: "691",
citynm: "丹寨",
cityno: "danzhai",
cityid: "101260508",
area_1: "贵州",
area_2: "黔东南",
area_3: "丹寨"
},
692: {
weaid: "692",
citynm: "峨边",
cityno: "ebian",
cityid: "101271406",
area_1: "四川",
area_2: "乐山",
area_3: "峨边"
},
693: {
weaid: "693",
citynm: "阿拉善盟额济纳",
cityno: "ejinaqi",
cityid: "101081203",
area_1: "内蒙古",
area_2: "阿拉善盟",
area_3: "额济纳"
},
694: {
weaid: "694",
citynm: "二连浩特",
cityno: "erlianhaote",
cityid: "101080903",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "二连浩特"
},
695: {
weaid: "695",
citynm: "额敏",
cityno: "emin",
cityid: "101131103",
area_1: "新疆",
area_2: "塔城",
area_3: "额敏"
},
696: {
weaid: "696",
citynm: "峨眉山",
cityno: "emeishan",
cityid: "101271409",
area_1: "四川",
area_2: "乐山",
area_3: "峨眉山"
},
697: {
weaid: "697",
citynm: "恩平",
cityno: "enping",
cityid: "101281105",
area_1: "广东",
area_2: "江门",
area_3: "恩平"
},
698: {
weaid: "698",
citynm: "峨山",
cityno: "eshan",
cityid: "101290708",
area_1: "云南",
area_2: "玉溪",
area_3: "峨山"
},
699: {
weaid: "699",
citynm: "鄂尔多斯鄂托克",
cityno: "etuokeqi",
cityid: "101080708",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "鄂托克"
},
700: {
weaid: "700",
citynm: "鄂尔多斯鄂前旗",
cityno: "etuokeqianqi",
cityid: "101080705",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "鄂前旗"
},
701: {
weaid: "701",
citynm: "洱源",
cityno: "eryuan",
cityid: "101290210",
area_1: "云南",
area_2: "大理",
area_3: "洱源"
},
702: {
weaid: "702",
citynm: "福安",
cityno: "fuan",
cityid: "101230306",
area_1: "福建",
area_2: "宁德",
area_3: "福安"
},
703: {
weaid: "703",
citynm: "凤城",
cityno: "fengcheng",
cityid: "101070602",
area_1: "辽宁",
area_2: "丹东",
area_3: "凤城"
},
704: {
weaid: "704",
citynm: "肥城",
cityno: "feicheng",
cityid: "101120804",
area_1: "山东",
area_2: "泰安",
area_3: "肥城"
},
705: {
weaid: "705",
citynm: "繁昌",
cityno: "fanchang",
cityid: "101220302",
area_1: "安徽",
area_2: "芜湖",
area_3: "繁昌"
},
706: {
weaid: "706",
citynm: "丰城",
cityno: "jxfengcheng",
cityid: "101240510",
area_1: "江西",
area_2: "宜春",
area_3: "丰城"
},
707: {
weaid: "707",
citynm: "方城",
cityno: "fangcheng",
cityid: "101180703",
area_1: "河南",
area_2: "南阳",
area_3: "方城"
},
708: {
weaid: "708",
citynm: "富川",
cityno: "fuchuan",
cityid: "101300703",
area_1: "广西",
area_2: "贺州",
area_3: "富川"
},
709: {
weaid: "709",
citynm: "福鼎",
cityno: "fuding",
cityid: "101230308",
area_1: "福建",
area_2: "宁德",
area_3: "福鼎"
},
710: {
weaid: "710",
citynm: "肥东",
cityno: "feidong",
cityid: "101220103",
area_1: "安徽",
area_2: "合肥",
area_3: "肥东"
},
711: {
weaid: "711",
citynm: "扶风",
cityno: "fufeng",
cityid: "101110907",
area_1: "陕西",
area_2: "宝鸡",
area_3: "扶风"
},
712: {
weaid: "712",
citynm: "佛冈",
cityno: "fugang",
cityid: "101281306",
area_1: "广东",
area_2: "清远",
area_3: "佛冈"
},
713: {
weaid: "713",
citynm: "凤冈",
cityno: "fenggang",
cityid: "101260206",
area_1: "贵州",
area_2: "遵义",
area_3: "凤冈"
},
714: {
weaid: "714",
citynm: "扶沟",
cityno: "fugou",
cityid: "101181402",
area_1: "河南",
area_2: "周口",
area_3: "扶沟"
},
715: {
weaid: "715",
citynm: "福贡",
cityno: "fugong",
cityid: "101291203",
area_1: "云南",
area_2: "怒江",
area_3: "福贡"
},
716: {
weaid: "716",
citynm: "府谷",
cityno: "fugu",
cityid: "101110402",
area_1: "陕西",
area_2: "榆林",
area_3: "府谷"
},
717: {
weaid: "717",
citynm: "福海",
cityno: "fuhai",
cityid: "101131407",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "福海"
},
718: {
weaid: "718",
citynm: "奉化",
cityno: "fenghua",
cityid: "101210405",
area_1: "浙江",
area_2: "宁波",
area_3: "奉化"
},
719: {
weaid: "719",
citynm: "凤凰",
cityno: "fenghuang",
cityid: "101251505",
area_1: "湖南",
area_2: "湘西",
area_3: "凤凰"
},
720: {
weaid: "720",
citynm: "富锦",
cityno: "fujin",
cityid: "101050407",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "富锦"
},
721: {
weaid: "721",
citynm: "封开",
cityno: "fengkai",
cityid: "101280907",
area_1: "广东",
area_2: "肇庆",
area_3: "封开"
},
722: {
weaid: "722",
citynm: "阜康",
cityno: "fukang",
cityid: "101130404",
area_1: "新疆",
area_2: "昌吉",
area_3: "阜康"
},
723: {
weaid: "723",
citynm: "法库",
cityno: "faku",
cityid: "101070105",
area_1: "辽宁",
area_2: "沈阳",
area_3: "法库"
},
724: {
weaid: "724",
citynm: "富民",
cityno: "fumin",
cityid: "101290109",
area_1: "云南",
area_2: "昆明",
area_3: "富民"
},
725: {
weaid: "725",
citynm: "丰南",
cityno: "fengnan",
cityid: "101090502",
area_1: "河北",
area_2: "唐山",
area_3: "丰南"
},
726: {
weaid: "726",
citynm: "阜南",
cityno: "funan",
cityid: "101220802",
area_1: "安徽",
area_2: "阜阳",
area_3: "阜南"
},
727: {
weaid: "727",
citynm: "阜宁",
cityno: "jsfuning",
cityid: "101190704",
area_1: "江苏",
area_2: "盐城",
area_3: "阜宁"
},
728: {
weaid: "728",
citynm: "富宁",
cityno: "funing",
cityid: "101290608",
area_1: "云南",
area_2: "文山",
area_3: "富宁"
},
729: {
weaid: "729",
citynm: "丰宁",
cityno: "fengning",
cityid: "101090408",
area_1: "河北",
area_2: "承德",
area_3: "丰宁"
},
730: {
weaid: "730",
citynm: "阜平",
cityno: "hbfuping",
cityid: "101090203",
area_1: "河北",
area_2: "保定",
area_3: "阜平"
},
731: {
weaid: "731",
citynm: "富平",
cityno: "fuping",
cityid: "101110506",
area_1: "陕西",
area_2: "渭南",
area_3: "富平"
},
732: {
weaid: "732",
citynm: "佛坪",
cityno: "sxfuping",
cityid: "101110808",
area_1: "陕西",
area_2: "汉中",
area_3: "佛坪"
},
733: {
weaid: "733",
citynm: "福清",
cityno: "fuqing",
cityid: "101230111",
area_1: "福建",
area_2: "福州",
area_3: "福清"
},
734: {
weaid: "734",
citynm: "封丘",
cityno: "fengqiu",
cityid: "101180307",
area_1: "河南",
area_2: "新乡",
area_3: "封丘"
},
735: {
weaid: "735",
citynm: "凤庆",
cityno: "fengqing",
cityid: "101291105",
area_1: "云南",
area_2: "临沧",
area_3: "凤庆"
},
736: {
weaid: "736",
citynm: "福泉",
cityno: "fuquan",
cityid: "101260405",
area_1: "贵州",
area_2: "黔南",
area_3: "福泉"
},
737: {
weaid: "737",
citynm: "丰润",
cityno: "fengrun",
cityid: "101090503",
area_1: "河北",
area_2: "唐山",
area_3: "丰润"
},
738: {
weaid: "738",
citynm: "抚远",
cityno: "hljfuyuan",
cityid: "101050403",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "抚远"
},
739: {
weaid: "739",
citynm: "浮山",
cityno: "fushan",
cityid: "101100715",
area_1: "山西",
area_2: "临汾",
area_3: "浮山"
},
740: {
weaid: "740",
citynm: "方山",
cityno: "sxfangshan",
cityid: "101101107",
area_1: "山西",
area_2: "吕梁",
area_3: "方山"
},
741: {
weaid: "741",
citynm: "丰顺",
cityno: "fengshun",
cityid: "101280406",
area_1: "广东",
area_2: "梅州",
area_3: "丰顺"
},
742: {
weaid: "742",
citynm: "凤山",
cityno: "fengshan",
cityid: "101301208",
area_1: "广西",
area_2: "河池",
area_3: "凤山"
},
743: {
weaid: "743",
citynm: "富顺",
cityno: "scfushun",
cityid: "101270302",
area_1: "四川",
area_2: "自贡",
area_3: "富顺"
},
744: {
weaid: "744",
citynm: "扶绥",
cityno: "fusui",
cityid: "101300206",
area_1: "广西",
area_2: "崇左",
area_3: "扶绥"
},
745: {
weaid: "745",
citynm: "凤台",
cityno: "ahfengtai",
cityid: "101220402",
area_1: "安徽",
area_2: "淮南",
area_3: "凤台"
},
746: {
weaid: "746",
citynm: "肥乡",
cityno: "feixiang",
cityid: "101091008",
area_1: "河北",
area_2: "邯郸",
area_3: "肥乡"
},
747: {
weaid: "747",
citynm: "汾西",
cityno: "fenxi",
cityid: "101100709",
area_1: "山西",
area_2: "临汾",
area_3: "汾西"
},
748: {
weaid: "748",
citynm: "费县",
cityno: "feixian",
cityid: "101120909",
area_1: "山东",
area_2: "临沂",
area_3: "费县"
},
749: {
weaid: "749",
citynm: "丰县",
cityno: "jsfengxian",
cityid: "101190803",
area_1: "江苏",
area_2: "徐州",
area_3: "丰县"
},
750: {
weaid: "750",
citynm: "肥西",
cityno: "feixi",
cityid: "101220104",
area_1: "安徽",
area_2: "合肥",
area_3: "肥西"
},
751: {
weaid: "751",
citynm: "奉新",
cityno: "fengxin",
cityid: "101240507",
area_1: "江西",
area_2: "宜春",
area_3: "奉新"
},
752: {
weaid: "752",
citynm: "范县",
cityno: "fanxian",
cityid: "101181305",
area_1: "河南",
area_2: "濮阳",
area_3: "范县"
},
753: {
weaid: "753",
citynm: "房县",
cityno: "fangxian",
cityid: "101201106",
area_1: "湖北",
area_2: "十堰",
area_3: "房县"
},
754: {
weaid: "754",
citynm: "富县",
cityno: "fuxian",
cityid: "101110305",
area_1: "陕西",
area_2: "延安",
area_3: "富县"
},
755: {
weaid: "755",
citynm: "凤县",
cityno: "sxfengxian",
cityid: "101110910",
area_1: "陕西",
area_2: "宝鸡",
area_3: "凤县"
},
756: {
weaid: "756",
citynm: "凤翔",
cityno: "fengxiang",
cityid: "101110906",
area_1: "陕西",
area_2: "宝鸡",
area_3: "凤翔"
},
757: {
weaid: "757",
citynm: "汾阳",
cityno: "fenyang",
cityid: "101101111",
area_1: "山西",
area_2: "吕梁",
area_3: "汾阳"
},
758: {
weaid: "758",
citynm: "凤阳",
cityno: "fengyang",
cityid: "101221102",
area_1: "安徽",
area_2: "滁州",
area_3: "凤阳"
},
759: {
weaid: "759",
citynm: "富阳",
cityno: "fuyang",
cityid: "101210108",
area_1: "浙江",
area_2: "杭州",
area_3: "富阳"
},
760: {
weaid: "760",
citynm: "分宜",
cityno: "fenyi",
cityid: "101241002",
area_1: "江西",
area_2: "新余",
area_3: "分宜"
},
761: {
weaid: "761",
citynm: "富裕",
cityno: "hljfuyu",
cityid: "101050205",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "富裕"
},
762: {
weaid: "762",
citynm: "扶余",
cityno: "fuyu",
cityid: "101060805",
area_1: "吉林",
area_2: "松原",
area_3: "扶余"
},
763: {
weaid: "763",
citynm: "番禺",
cityno: "fanyu",
cityid: "101280102",
area_1: "广东",
area_2: "广州",
area_3: "番禺"
},
764: {
weaid: "764",
citynm: "富源",
cityno: "fuyuan",
cityid: "101290404",
area_1: "云南",
area_2: "曲靖",
area_3: "富源"
},
765: {
weaid: "765",
citynm: "富蕴",
cityno: "fuyun",
cityid: "101131408",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "富蕴"
},
766: {
weaid: "766",
citynm: "方正",
cityno: "fangzheng",
cityid: "101050109",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "方正"
},
767: {
weaid: "767",
citynm: "繁峙",
cityno: "fanzhi",
cityid: "101101009",
area_1: "山西",
area_2: "忻州",
area_3: "繁峙"
},
768: {
weaid: "768",
citynm: "丰镇",
cityno: "fengzhen",
cityid: "101080412",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "丰镇"
},
770: {
weaid: "770",
citynm: "高安",
cityno: "gaoan",
cityid: "101240508",
area_1: "江西",
area_2: "宜春",
area_3: "高安"
},
771: {
weaid: "771",
citynm: "公安",
cityno: "gongan",
cityid: "101200803",
area_1: "湖北",
area_2: "荆州",
area_3: "公安"
},
772: {
weaid: "772",
citynm: "固安",
cityno: "guan",
cityid: "101090602",
area_1: "河北",
area_2: "廊坊",
area_3: "固安"
},
773: {
weaid: "773",
citynm: "高碑店",
cityno: "gaobeidian",
cityid: "101090221",
area_1: "河北",
area_2: "保定",
area_3: "高碑店"
},
774: {
weaid: "774",
citynm: "藁城",
cityno: "gaocheng",
cityid: "101090115",
area_1: "河北",
area_2: "石家庄",
area_3: "藁城"
},
775: {
weaid: "775",
citynm: "高淳",
cityno: "gaochun",
cityid: "101190103",
area_1: "江苏",
area_2: "南京",
area_3: "高淳"
},
776: {
weaid: "776",
citynm: "谷城",
cityno: "gucheng",
cityid: "101200207",
area_1: "湖北",
area_2: "襄阳",
area_3: "谷城"
},
777: {
weaid: "777",
citynm: "恭城",
cityno: "gongcheng",
cityid: "101300511",
area_1: "广西",
area_2: "桂林",
area_3: "恭城"
},
778: {
weaid: "778",
citynm: "刚察",
cityno: "gangcha",
cityid: "101150806",
area_1: "青海",
area_2: "海北",
area_3: "刚察"
},
779: {
weaid: "779",
citynm: "广德",
cityno: "guangde",
cityid: "101221406",
area_1: "安徽",
area_2: "宣城",
area_3: "广德"
},
780: {
weaid: "780",
citynm: "广昌",
cityno: "guangchang",
cityid: "101240402",
area_1: "江西",
area_2: "抚州",
area_3: "广昌"
},
781: {
weaid: "781",
citynm: "贵德",
cityno: "guide",
cityid: "101150404",
area_1: "青海",
area_2: "海南",
area_3: "贵德"
},
782: {
weaid: "782",
citynm: "甘德",
cityno: "gande",
cityid: "101150503",
area_1: "青海",
area_2: "果洛",
area_3: "甘德"
},
783: {
weaid: "783",
citynm: "贵定",
cityno: "guiding",
cityid: "101260402",
area_1: "贵州",
area_2: "黔南",
area_3: "贵定"
},
784: {
weaid: "784",
citynm: "桂东",
cityno: "guidong",
cityid: "101250511",
area_1: "湖南",
area_2: "郴州",
area_3: "桂东"
},
785: {
weaid: "785",
citynm: "广丰",
cityno: "guangfeng",
cityid: "101240313",
area_1: "江西",
area_2: "上饶",
area_3: "广丰"
},
786: {
weaid: "786",
citynm: "甘谷",
cityno: "gangu",
cityid: "101160905",
area_1: "甘肃",
area_2: "天水",
area_3: "甘谷"
},
787: {
weaid: "787",
citynm: "广汉",
cityno: "guanghan",
cityid: "101272003",
area_1: "四川",
area_2: "德阳",
area_3: "广汉"
},
788: {
weaid: "788",
citynm: "根河",
cityno: "genhe",
cityid: "101081015",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "根河"
},
789: {
weaid: "789",
citynm: "广河",
cityno: "guanghe",
cityid: "101161104",
area_1: "甘肃",
area_2: "临夏",
area_3: "广河"
},
791: {
weaid: "791",
citynm: "个旧",
cityno: "gejiu",
cityid: "101290308",
area_1: "云南",
area_2: "红河",
area_3: "个旧"
},
792: {
weaid: "792",
citynm: "昭觉",
cityno: "zhaojue",
cityid: "101271612",
area_1: "四川",
area_2: "凉山",
area_3: "昭觉"
},
793: {
weaid: "793",
citynm: "皋兰",
cityno: "gaolan",
cityid: "101160102",
area_1: "甘肃",
area_2: "兰州",
area_3: "皋兰"
},
794: {
weaid: "794",
citynm: "庄浪",
cityno: "zhuanglang",
cityid: "101160306",
area_1: "甘肃",
area_2: "平凉",
area_3: "庄浪"
},
795: {
weaid: "795",
citynm: "古浪",
cityno: "gulang",
cityid: "101160503",
area_1: "甘肃",
area_2: "武威",
area_3: "古浪"
},
796: {
weaid: "796",
citynm: "广灵",
cityno: "guangling",
cityid: "101100205",
area_1: "山西",
area_2: "大同",
area_3: "广灵"
},
797: {
weaid: "797",
citynm: "古蔺",
cityno: "gulin",
cityid: "101271006",
area_1: "四川",
area_2: "泸州",
area_3: "古蔺"
},
798: {
weaid: "798",
citynm: "关岭",
cityno: "guanling",
cityid: "101260306",
area_1: "贵州",
area_2: "安顺",
area_3: "关岭"
},
799: {
weaid: "799",
citynm: "高陵",
cityno: "gaoling",
cityid: "101110107",
area_1: "陕西",
area_2: "西安",
area_3: "高陵"
},
800: {
weaid: "800",
citynm: "巩留",
cityno: "gongliu",
cityid: "101131005",
area_1: "新疆",
area_2: "伊犁",
area_3: "巩留"
},
801: {
weaid: "801",
citynm: "甘洛",
cityno: "ganluo",
cityid: "101271616",
area_1: "四川",
area_2: "凉山",
area_3: "甘洛"
},
802: {
weaid: "802",
citynm: "耿马",
cityno: "gengma",
cityid: "101291103",
area_1: "云南",
area_2: "临沧",
area_3: "耿马"
},
803: {
weaid: "803",
citynm: "高密",
cityno: "gaomi",
cityid: "101120608",
area_1: "山东",
area_2: "潍坊",
area_3: "高密"
},
804: {
weaid: "804",
citynm: "灌南",
cityno: "guannan",
cityid: "101191005",
area_1: "江苏",
area_2: "连云港",
area_3: "灌南"
},
805: {
weaid: "805",
citynm: "广南",
cityno: "guangnan",
cityid: "101290607",
area_1: "云南",
area_2: "文山",
area_3: "广南"
},
806: {
weaid: "806",
citynm: "贵南",
cityno: "guinan",
cityid: "101150407",
area_1: "青海",
area_2: "海南",
area_3: "贵南"
},
807: {
weaid: "807",
citynm: "广宁",
cityno: "guangning",
cityid: "101280902",
area_1: "广东",
area_2: "肇庆",
area_3: "广宁"
},
808: {
weaid: "808",
citynm: "广平",
cityno: "guangping",
cityid: "101091012",
area_1: "河北",
area_2: "邯郸",
area_3: "广平"
},
809: {
weaid: "809",
citynm: "高平",
cityno: "gaoping",
cityid: "101100605",
area_1: "山西",
area_2: "晋城",
area_3: "高平"
},
810: {
weaid: "810",
citynm: "桂平",
cityno: "guiping",
cityid: "101300802",
area_1: "广西",
area_2: "贵港",
area_3: "桂平"
},
811: {
weaid: "811",
citynm: "高青",
cityno: "gaoqing",
cityid: "101120304",
area_1: "山东",
area_2: "淄博",
area_3: "高青"
},
812: {
weaid: "812",
citynm: "甘泉",
cityno: "ganquan",
cityid: "101110308",
area_1: "陕西",
area_2: "延安",
area_3: "甘泉"
},
813: {
weaid: "813",
citynm: "广饶",
cityno: "guangrao",
cityid: "101121205",
area_1: "山东",
area_2: "东营",
area_3: "广饶"
},
814: {
weaid: "814",
citynm: "广水",
cityno: "guangshui",
cityid: "101201302",
area_1: "湖北",
area_2: "随州",
area_3: "广水"
},
815: {
weaid: "815",
citynm: "固始",
cityno: "gushi",
cityid: "101180608",
area_1: "河南",
area_2: "信阳",
area_3: "固始"
},
816: {
weaid: "816",
citynm: "光山",
cityno: "guangshan",
cityid: "101180604",
area_1: "河南",
area_2: "信阳",
area_3: "光山"
},
817: {
weaid: "817",
citynm: "贡山",
cityno: "gongshan",
cityid: "101291207",
area_1: "云南",
area_2: "怒江",
area_3: "贡山"
},
818: {
weaid: "818",
citynm: "馆陶",
cityno: "guantao",
cityid: "101091013",
area_1: "河北",
area_2: "邯郸",
area_3: "馆陶"
},
819: {
weaid: "819",
citynm: "高台",
cityno: "gaotai",
cityid: "101160705",
area_1: "甘肃",
area_2: "张掖",
area_3: "高台"
},
820: {
weaid: "820",
citynm: "古田",
cityno: "gutian",
cityid: "101230302",
area_1: "福建",
area_2: "宁德",
area_3: "古田"
},
821: {
weaid: "821",
citynm: "古县",
cityno: "guxian",
cityid: "101100717",
area_1: "山西",
area_2: "临汾",
area_3: "古县"
},
822: {
weaid: "822",
citynm: "贵溪",
cityno: "guixi",
cityid: "101241103",
area_1: "江西",
area_2: "鹰潭",
area_3: "贵溪"
},
823: {
weaid: "823",
citynm: "高县",
cityno: "gaoxian",
cityid: "101271107",
area_1: "四川",
area_2: "宜宾",
area_3: "高县"
},
824: {
weaid: "824",
citynm: "珙县",
cityno: "gongxian",
cityid: "101271108",
area_1: "四川",
area_2: "宜宾",
area_3: "珙县"
},
825: {
weaid: "825",
citynm: "乾县",
cityno: "qianxian",
cityid: "101110207",
area_1: "陕西",
area_2: "咸阳",
area_3: "乾县"
},
826: {
weaid: "826",
citynm: "高阳",
cityno: "gaoyang",
cityid: "101090206",
area_1: "河北",
area_2: "保定",
area_3: "高阳"
},
827: {
weaid: "827",
citynm: "固阳",
cityno: "guyang",
cityid: "101080205",
area_1: "内蒙古",
area_2: "包头",
area_3: "固阳"
},
828: {
weaid: "828",
citynm: "涡阳",
cityno: "woyang",
cityid: "101220902",
area_1: "安徽",
area_2: "亳州",
area_3: "涡阳"
},
829: {
weaid: "829",
citynm: "桂阳",
cityno: "hnguiyang",
cityid: "101250502",
area_1: "湖南",
area_2: "郴州",
area_3: "桂阳"
},
830: {
weaid: "830",
citynm: "高要",
cityno: "gaoyao",
cityid: "101280908",
area_1: "广东",
area_2: "肇庆",
area_3: "高要"
},
831: {
weaid: "831",
citynm: "灌阳",
cityno: "guanyang",
cityid: "101300509",
area_1: "广西",
area_2: "桂林",
area_3: "灌阳"
},
832: {
weaid: "832",
citynm: "高邑",
cityno: "gaoyi",
cityid: "101090107",
area_1: "河北",
area_2: "石家庄",
area_3: "高邑"
},
833: {
weaid: "833",
citynm: "巩义",
cityno: "gongyi",
cityid: "101180102",
area_1: "河南",
area_2: "郑州",
area_3: "巩义"
},
834: {
weaid: "834",
citynm: "高邮",
cityno: "gaoyou",
cityid: "101190604",
area_1: "江苏",
area_2: "扬州",
area_3: "高邮"
},
835: {
weaid: "835",
citynm: "沽源",
cityno: "hbguyuan",
cityid: "101090305",
area_1: "河北",
area_2: "张家口",
area_3: "沽源"
},
836: {
weaid: "836",
citynm: "赣榆",
cityno: "ganyu",
cityid: "101191003",
area_1: "江苏",
area_2: "连云港",
area_3: "赣榆"
},
837: {
weaid: "837",
citynm: "灌云",
cityno: "guanyun",
cityid: "101191004",
area_1: "江苏",
area_2: "连云港",
area_3: "灌云"
},
838: {
weaid: "838",
citynm: "光泽",
cityno: "guangze",
cityid: "101230903",
area_1: "福建",
area_2: "南平",
area_3: "光泽"
},
839: {
weaid: "839",
citynm: "改则",
cityno: "gaize",
cityid: "101140702",
area_1: "西藏",
area_2: "阿里",
area_3: "改则"
},
840: {
weaid: "840",
citynm: "盖州",
cityno: "gaizhou",
cityid: "101070803",
area_1: "辽宁",
area_2: "营口",
area_3: "盖州"
},
841: {
weaid: "841",
citynm: "固镇",
cityno: "guzhen",
cityid: "101220203",
area_1: "安徽",
area_2: "蚌埠",
area_3: "固镇"
},
842: {
weaid: "842",
citynm: "古丈",
cityno: "guzhang",
cityid: "101251504",
area_1: "湖南",
area_2: "湘西",
area_3: "古丈"
},
843: {
weaid: "843",
citynm: "高州",
cityno: "gaozhou",
cityid: "101282002",
area_1: "广东",
area_2: "茂名",
area_3: "高州"
},
845: {
weaid: "845",
citynm: "瓜州",
cityno: "guazhou",
cityid: "101160805",
area_1: "甘肃",
area_2: "酒泉",
area_3: "瓜州"
},
846: {
weaid: "846",
citynm: "公主岭",
cityno: "gongzhuling",
cityid: "101060404",
area_1: "吉林",
area_2: "四平",
area_3: "公主岭"
},
847: {
weaid: "847",
citynm: "怀安",
cityno: "hbhuaian",
cityid: "101090309",
area_1: "河北",
area_2: "张家口",
area_3: "怀安"
},
848: {
weaid: "848",
citynm: "海安",
cityno: "haian",
cityid: "101190502",
area_1: "江苏",
area_2: "南通",
area_3: "海安"
},
849: {
weaid: "849",
citynm: "华安",
cityno: "huaan",
cityid: "101230610",
area_1: "福建",
area_2: "漳州",
area_3: "华安"
},
850: {
weaid: "850",
citynm: "红安",
cityno: "hongan",
cityid: "101200502",
area_1: "湖北",
area_2: "黄冈",
area_3: "红安"
},
851: {
weaid: "851",
citynm: "和布克赛尔",
cityno: "hebukesaier",
cityid: "101131104",
area_1: "新疆",
area_2: "塔城",
area_3: "和布克赛尔"
},
852: {
weaid: "852",
citynm: "哈巴河",
cityno: "habahe",
cityid: "101131402",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "哈巴河"
},
853: {
weaid: "853",
citynm: "淮滨",
cityno: "huaibin",
cityid: "101180606",
area_1: "河南",
area_2: "信阳",
area_3: "淮滨"
},
854: {
weaid: "854",
citynm: "桦川",
cityno: "huachuan",
cityid: "101050404",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "桦川"
},
855: {
weaid: "855",
citynm: "珲春",
cityno: "huichun",
cityid: "101060308",
area_1: "吉林",
area_2: "延边",
area_3: "珲春"
},
856: {
weaid: "856",
citynm: "海城",
cityno: "haicheng",
cityid: "101070304",
area_1: "辽宁",
area_2: "鞍山",
area_3: "海城"
},
857: {
weaid: "857",
citynm: "会昌",
cityno: "huichang",
cityid: "101240711",
area_1: "江西",
area_2: "赣州",
area_3: "会昌"
},
858: {
weaid: "858",
citynm: "汉川",
cityno: "hanchuan",
cityid: "101200406",
area_1: "湖北",
area_2: "孝感",
area_3: "汉川"
},
859: {
weaid: "859",
citynm: "韩城",
cityno: "hancheng",
cityid: "101110510",
area_1: "陕西",
area_2: "渭南",
area_3: "韩城"
},
860: {
weaid: "860",
citynm: "华池",
cityno: "huachi",
cityid: "101160404",
area_1: "甘肃",
area_2: "庆阳",
area_3: "华池"
},
861: {
weaid: "861",
citynm: "霍城",
cityno: "huocheng",
cityid: "101131009",
area_1: "新疆",
area_2: "伊犁",
area_3: "霍城"
},
862: {
weaid: "862",
citynm: "潢川",
cityno: "huangchuan",
cityid: "101180607",
area_1: "河南",
area_2: "信阳",
area_3: "潢川"
},
863: {
weaid: "863",
citynm: "化德",
cityno: "huade",
cityid: "101080403",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "化德"
},
864: {
weaid: "864",
citynm: "桦甸",
cityno: "huadian",
cityid: "101060206",
area_1: "吉林",
area_2: "桦甸",
area_3: ""
},
865: {
weaid: "865",
citynm: "衡东",
cityno: "hengdong",
cityid: "101250403",
area_1: "湖南",
area_2: "衡阳",
area_3: "衡东"
},
866: {
weaid: "866",
citynm: "惠东",
cityno: "huidong",
cityid: "101280304",
area_1: "广东",
area_2: "惠州",
area_3: "惠东"
},
867: {
weaid: "867",
citynm: "会东",
cityno: "schuidong",
cityid: "101271607",
area_1: "四川",
area_2: "凉山",
area_3: "会东"
},
868: {
weaid: "868",
citynm: "花都",
cityno: "huadu",
cityid: "101280105",
area_1: "广东",
area_2: "广州",
area_3: "花都"
},
869: {
weaid: "869",
citynm: "横峰",
cityno: "hengfeng",
cityid: "101240310",
area_1: "江西",
area_2: "上饶",
area_3: "横峰"
},
870: {
weaid: "870",
citynm: "鹤峰",
cityno: "hefeng",
cityid: "101201006",
area_1: "湖北",
area_2: "恩施",
area_3: "鹤峰"
},
871: {
weaid: "871",
citynm: "海丰",
cityno: "haifeng",
cityid: "101282102",
area_1: "广东",
area_2: "汕尾",
area_3: "海丰"
},
872: {
weaid: "872",
citynm: "壶关",
cityno: "huguan",
cityid: "101100511",
area_1: "山西",
area_2: "长治",
area_3: "壶关"
},
873: {
weaid: "873",
citynm: "花垣",
cityno: "huayuan",
cityid: "101251508",
area_1: "湖南",
area_2: "湘西",
area_3: "花垣"
},
874: {
weaid: "874",
citynm: "黄骅",
cityno: "huanghua",
cityid: "101090713",
area_1: "河北",
area_2: "沧州",
area_3: "黄骅"
},
875: {
weaid: "875",
citynm: "洪湖",
cityno: "honghu",
cityid: "101200806",
area_1: "湖北",
area_2: "荆州",
area_3: "洪湖"
},
876: {
weaid: "876",
citynm: "河间",
cityno: "hejian",
cityid: "101090714",
area_1: "河北",
area_2: "沧州",
area_3: "河间"
},
877: {
weaid: "877",
citynm: "河津",
cityno: "hejin",
cityid: "101100805",
area_1: "山西",
area_2: "运城",
area_3: "河津"
},
878: {
weaid: "878",
citynm: "获嘉",
cityno: "huojia",
cityid: "101180302",
area_1: "河南",
area_2: "新乡",
area_3: "获嘉"
},
880: {
weaid: "880",
citynm: "怀集",
cityno: "huaiji",
cityid: "101280906",
area_1: "广东",
area_2: "肇庆",
area_3: "怀集"
},
881: {
weaid: "881",
citynm: "环江",
cityno: "huanjiang",
cityid: "101301205",
area_1: "广西",
area_2: "河池",
area_3: "环江"
},
882: {
weaid: "882",
citynm: "合江",
cityno: "hejiang",
cityid: "101271004",
area_1: "四川",
area_2: "泸州",
area_3: "合江"
},
883: {
weaid: "883",
citynm: "和静",
cityno: "hejing",
cityid: "101130606",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "和静"
},
884: {
weaid: "884",
citynm: "杭锦后旗",
cityno: "hangjinhouqi",
cityid: "101080810",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "杭锦后旗"
},
885: {
weaid: "885",
citynm: "湖口",
cityno: "hukou",
cityid: "101240207",
area_1: "江西",
area_2: "九江",
area_3: "湖口"
},
886: {
weaid: "886",
citynm: "河口",
cityno: "hekou",
cityid: "101121202",
area_1: "山东",
area_2: "东营",
area_3: "河口"
},
887: {
weaid: "887",
citynm: "呼兰",
cityno: "hulan",
cityid: "101050103",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "呼兰"
},
888: {
weaid: "888",
citynm: "怀来",
cityno: "huailai",
cityid: "101090311",
area_1: "河北",
area_2: "张家口",
area_3: "怀来"
},
889: {
weaid: "889",
citynm: "惠来",
cityno: "huilai",
cityid: "101281904",
area_1: "广东",
area_2: "揭阳",
area_3: "惠来"
},
890: {
weaid: "890",
citynm: "贺兰",
cityno: "helan",
cityid: "101170104",
area_1: "宁夏",
area_2: "银川",
area_3: "贺兰"
},
891: {
weaid: "891",
citynm: "海拉尔",
cityno: "hailaer",
cityid: "101081001",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "海拉尔"
},
892: {
weaid: "892",
citynm: "呼和浩特和林",
cityno: "helingeer",
cityid: "101080104",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "和林"
},
893: {
weaid: "893",
citynm: "虎林",
cityno: "hulin",
cityid: "101051102",
area_1: "黑龙江",
area_2: "鸡西",
area_3: "虎林"
},
894: {
weaid: "894",
citynm: "海林",
cityno: "hailin",
cityid: "101050302",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "海林"
},
895: {
weaid: "895",
citynm: "黄陵",
cityno: "huangling",
cityid: "101110310",
area_1: "陕西",
area_2: "延安",
area_3: "黄陵"
},
896: {
weaid: "896",
citynm: "会理",
cityno: "huili",
cityid: "101271606",
area_1: "四川",
area_2: "凉山",
area_3: "会理"
},
898: {
weaid: "898",
citynm: "和龙",
cityno: "helong",
cityid: "101060305",
area_1: "吉林",
area_2: "延边",
area_3: "和龙"
},
899: {
weaid: "899",
citynm: "黄龙",
cityno: "huanglong",
cityid: "101110311",
area_1: "陕西",
area_2: "延安",
area_3: "黄龙"
},
900: {
weaid: "900",
citynm: "化隆",
cityno: "hualong",
cityid: "101150205",
area_1: "青海",
area_2: "海东",
area_3: "化隆"
},
901: {
weaid: "901",
citynm: "海伦",
cityno: "hailun",
cityid: "101050504",
area_1: "黑龙江",
area_2: "绥化",
area_3: "海伦"
},
902: {
weaid: "902",
citynm: "呼玛",
cityno: "huma",
cityid: "101050704",
area_1: "黑龙江",
area_2: "大兴安岭",
area_3: "呼玛"
},
903: {
weaid: "903",
citynm: "海门",
cityno: "haimen",
cityid: "101190508",
area_1: "江苏",
area_2: "南通",
area_3: "海门"
},
904: {
weaid: "904",
citynm: "黄梅",
cityno: "huangmei",
cityid: "101200508",
area_1: "湖北",
area_2: "黄冈",
area_3: "黄梅"
},
905: {
weaid: "905",
citynm: "桦南",
cityno: "huanan",
cityid: "101050405",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "桦南"
},
906: {
weaid: "906",
citynm: "辉南",
cityno: "huinan",
cityid: "101060504",
area_1: "吉林",
area_2: "通化",
area_3: "辉南"
},
907: {
weaid: "907",
citynm: "衡南",
cityno: "hengnan",
cityid: "101250407",
area_1: "湖南",
area_2: "衡阳",
area_3: "衡南"
},
908: {
weaid: "908",
citynm: "河南",
cityno: "henan",
cityid: "101150304",
area_1: "青海",
area_2: "黄南",
area_3: "河南"
},
909: {
weaid: "909",
citynm: "怀宁",
cityno: "huaining",
cityid: "101220605",
area_1: "安徽",
area_2: "安庆",
area_3: "怀宁"
},
910: {
weaid: "910",
citynm: "海宁",
cityno: "haining",
cityid: "101210303",
area_1: "浙江",
area_2: "嘉兴",
area_3: "海宁"
},
911: {
weaid: "911",
citynm: "华宁",
cityno: "huaning",
cityid: "101290705",
area_1: "云南",
area_2: "玉溪",
area_3: "华宁"
},
912: {
weaid: "912",
citynm: "会宁",
cityno: "huining",
cityid: "101161303",
area_1: "甘肃",
area_2: "白银",
area_3: "会宁"
},
913: {
weaid: "913",
citynm: "惠农",
cityno: "huinong",
cityid: "101170202",
area_1: "宁夏",
area_2: "石嘴山",
area_3: "惠农"
},
914: {
weaid: "914",
citynm: "和平",
cityno: "heping",
cityid: "101281204",
area_1: "广东",
area_2: "河源",
area_3: "和平"
},
915: {
weaid: "915",
citynm: "黄平",
cityno: "huangping",
cityid: "101260505",
area_1: "贵州",
area_2: "黔东南",
area_3: "黄平"
},
916: {
weaid: "916",
citynm: "华坪",
cityno: "huaping",
cityid: "101291403",
area_1: "云南",
area_2: "丽江",
area_3: "华坪"
},
917: {
weaid: "917",
citynm: "黄陂",
cityno: "huangbei",
cityid: "101200103",
area_1: "湖北",
area_2: "武汉",
area_3: "黄陂"
},
918: {
weaid: "918",
citynm: "合浦",
cityno: "hepu",
cityid: "101301302",
area_1: "广西",
area_2: "北海",
area_3: "合浦"
},
919: {
weaid: "919",
citynm: "霍邱",
cityno: "huoqiu",
cityid: "101221502",
area_1: "安徽",
area_2: "六安",
area_3: "霍邱"
},
920: {
weaid: "920",
citynm: "鹤庆",
cityno: "heqing",
cityid: "101290211",
area_1: "云南",
area_2: "大理",
area_3: "鹤庆"
},
921: {
weaid: "921",
citynm: "河曲",
cityno: "hequ",
cityid: "101101004",
area_1: "山西",
area_2: "忻州",
area_3: "河曲"
},
922: {
weaid: "922",
citynm: "桓仁",
cityno: "huanren",
cityid: "101070504",
area_1: "辽宁",
area_2: "本溪",
area_3: "桓仁"
},
923: {
weaid: "923",
citynm: "怀仁",
cityno: "huairen",
cityid: "101100906",
area_1: "山西",
area_2: "朔州",
area_3: "怀仁"
},
924: {
weaid: "924",
citynm: "华容",
cityno: "huarong",
cityid: "101251002",
area_1: "湖南",
area_2: "岳阳",
area_3: "华容"
},
925: {
weaid: "925",
citynm: "黑山",
cityno: "heishan",
cityid: "101070705",
area_1: "辽宁",
area_2: "锦州",
area_3: "黑山"
},
926: {
weaid: "926",
citynm: "和顺",
cityno: "heshun",
cityid: "101100405",
area_1: "山西",
area_2: "晋中",
area_3: "和顺"
},
928: {
weaid: "928",
citynm: "霍山",
cityno: "huoshan",
cityid: "101221506",
area_1: "安徽",
area_2: "六安",
area_3: "霍山"
},
929: {
weaid: "929",
citynm: "衡山",
cityno: "hnhengshan",
cityid: "101250402",
area_1: "湖南",
area_2: "衡阳",
area_3: "衡山"
},
930: {
weaid: "930",
citynm: "汉寿",
cityno: "hanshou",
cityid: "101250604",
area_1: "湖南",
area_2: "常德",
area_3: "汉寿"
},
931: {
weaid: "931",
citynm: "鹤山",
cityno: "heshan",
cityid: "101281108",
area_1: "广东",
area_2: "江门",
area_3: "鹤山"
},
932: {
weaid: "932",
citynm: "惠水",
cityno: "huishui",
cityid: "101260406",
area_1: "贵州",
area_2: "黔南",
area_3: "惠水"
},
933: {
weaid: "933",
citynm: "横山",
cityno: "hengshan",
cityid: "101110407",
area_1: "陕西",
area_2: "榆林",
area_3: "横山"
},
934: {
weaid: "934",
citynm: "合水",
cityno: "heshui",
cityid: "101160405",
area_1: "甘肃",
area_2: "庆阳",
area_3: "合水"
},
935: {
weaid: "935",
citynm: "和硕",
cityno: "heshuo",
cityid: "101130608",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "和硕"
},
936: {
weaid: "936",
citynm: "桓台",
cityno: "huantai",
cityid: "101120307",
area_1: "山东",
area_2: "淄博",
area_3: "桓台"
},
937: {
weaid: "937",
citynm: "呼图壁",
cityno: "hutubi",
cityid: "101130402",
area_1: "新疆",
area_2: "昌吉",
area_3: "呼图壁"
},
938: {
weaid: "938",
citynm: "华亭",
cityno: "huating",
cityid: "101160305",
area_1: "甘肃",
area_2: "平凉",
area_3: "华亭"
},
939: {
weaid: "939",
citynm: "洪洞",
cityno: "hongdong",
cityid: "101100710",
area_1: "山西",
area_2: "临汾",
area_3: "洪洞"
},
940: {
weaid: "940",
citynm: "会同",
cityno: "huitong",
cityid: "101251206",
area_1: "湖南",
area_2: "怀化",
area_3: "会同"
},
942: {
weaid: "942",
citynm: "滑县",
cityno: "huaxian",
cityid: "101180203",
area_1: "河南",
area_2: "安阳",
area_3: "滑县"
},
943: {
weaid: "943",
citynm: "辉县",
cityno: "hnhuixian",
cityid: "101180304",
area_1: "河南",
area_2: "新乡",
area_3: "辉县"
},
944: {
weaid: "944",
citynm: "横县",
cityno: "hengxian",
cityid: "101300104",
area_1: "广西",
area_2: "南宁",
area_3: "横县"
},
945: {
weaid: "945",
citynm: "户县",
cityno: "huxian",
cityid: "101110106",
area_1: "陕西",
area_2: "西安",
area_3: "户县"
},
946: {
weaid: "946",
citynm: "华县",
cityno: "sxhuaxian",
cityid: "101110502",
area_1: "陕西",
area_2: "渭南",
area_3: "华县"
},
947: {
weaid: "947",
citynm: "环县",
cityno: "huanxian",
cityid: "101160403",
area_1: "甘肃",
area_2: "庆阳",
area_3: "环县"
},
948: {
weaid: "948",
citynm: "徽县",
cityno: "huixian",
cityid: "101161008",
area_1: "甘肃",
area_2: "陇南",
area_3: "徽县"
},
949: {
weaid: "949",
citynm: "海阳",
cityno: "haiyang",
cityid: "101120511",
area_1: "山东",
area_2: "烟台",
area_3: "海阳"
},
950: {
weaid: "950",
citynm: "海盐",
cityno: "zjhaiyan",
cityid: "101210306",
area_1: "浙江",
area_2: "嘉兴",
area_3: "海盐"
},
951: {
weaid: "951",
citynm: "黄岩",
cityno: "huangyan",
cityid: "101210612",
area_1: "浙江",
area_2: "台州",
area_3: "黄岩"
},
952: {
weaid: "952",
citynm: "淮阳",
cityno: "huaiyang",
cityid: "101181404",
area_1: "河南",
area_2: "周口",
area_3: "淮阳"
},
953: {
weaid: "953",
citynm: "惠阳",
cityno: "huiyang",
cityid: "101280303",
area_1: "广东",
area_2: "惠州",
area_3: "惠阳"
},
954: {
weaid: "954",
citynm: "合阳",
cityno: "heyang",
cityid: "101110509",
area_1: "陕西",
area_2: "渭南",
area_3: "合阳"
},
956: {
weaid: "956",
citynm: "洪雅",
cityno: "hongya",
cityid: "101271504",
area_1: "四川",
area_2: "眉山",
area_3: "洪雅"
},
958: {
weaid: "958",
citynm: "华阴",
cityno: "huayin",
cityid: "101110511",
area_1: "陕西",
area_2: "渭南",
area_3: "华阴"
},
959: {
weaid: "959",
citynm: "汉阴",
cityno: "hanyin",
cityid: "101110704",
area_1: "陕西",
area_2: "安康",
area_3: "汉阴"
},
960: {
weaid: "960",
citynm: "浑源",
cityno: "hunyuan",
cityid: "101100207",
area_1: "山西",
area_2: "大同",
area_3: "浑源"
},
961: {
weaid: "961",
citynm: "怀远",
cityno: "huaiyuan",
cityid: "101220202",
area_1: "安徽",
area_2: "蚌埠",
area_3: "怀远"
},
962: {
weaid: "962",
citynm: "湟源",
cityno: "huangyuan",
cityid: "101150103",
area_1: "青海",
area_2: "西宁",
area_3: "湟源"
},
963: {
weaid: "963",
citynm: "海原",
cityno: "haiyuan",
cityid: "101170504",
area_1: "宁夏",
area_2: "中卫",
area_3: "海原"
},
964: {
weaid: "964",
citynm: "汉源",
cityno: "hanyuan",
cityid: "101271704",
area_1: "四川",
area_2: "雅安",
area_3: "汉源"
},
965: {
weaid: "965",
citynm: "洪泽",
cityno: "hongze",
cityid: "101190904",
area_1: "江苏",
area_2: "淮安",
area_3: "洪泽"
},
966: {
weaid: "966",
citynm: "会泽",
cityno: "huize",
cityid: "101290408",
area_1: "云南",
area_2: "曲靖",
area_3: "会泽"
},
967: {
weaid: "967",
citynm: "霍州",
cityno: "huozhou",
cityid: "101100711",
area_1: "山西",
area_2: "临汾",
area_3: "霍州"
},
968: {
weaid: "968",
citynm: "化州",
cityno: "huazhou",
cityid: "101282003",
area_1: "广东",
area_2: "茂名",
area_3: "化州"
},
969: {
weaid: "969",
citynm: "赫章",
cityno: "hezhang",
cityid: "101260702",
area_1: "贵州",
area_2: "毕节",
area_3: "赫章"
},
970: {
weaid: "970",
citynm: "和政",
cityno: "hezheng",
cityid: "101161105",
area_1: "甘肃",
area_2: "临夏",
area_3: "和政"
},
972: {
weaid: "972",
citynm: "集安",
cityno: "jian",
cityid: "101060505",
area_1: "吉林",
area_2: "通化",
area_3: "集安"
},
973: {
weaid: "973",
citynm: "靖安",
cityno: "jingan",
cityid: "101240506",
area_1: "江西",
area_2: "宜春",
area_3: "靖安"
},
974: {
weaid: "974",
citynm: "江安",
cityno: "jiangan",
cityid: "101271105",
area_1: "四川",
area_2: "宜宾",
area_3: "江安"
},
975: {
weaid: "975",
citynm: "靖边",
cityno: "jingbian",
cityid: "101110406",
area_1: "陕西",
area_2: "榆林",
area_3: "靖边"
},
976: {
weaid: "976",
citynm: "吉木乃",
cityno: "jimunai",
cityid: "101131405",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "吉木乃"
},
977: {
weaid: "977",
citynm: "建昌",
cityno: "jianchang",
cityid: "101071402",
area_1: "辽宁",
area_2: "葫芦岛",
area_3: "建昌"
},
978: {
weaid: "978",
citynm: "鄄城",
cityno: "juancheng",
cityid: "101121002",
area_1: "山东",
area_2: "菏泽",
area_3: "鄄城"
},
979: {
weaid: "979",
citynm: "剑川",
cityno: "jianchuan",
cityid: "101290209",
area_1: "云南",
area_2: "大理",
area_3: "剑川"
},
980: {
weaid: "980",
citynm: "江川",
cityno: "jiangchuan",
cityid: "101290703",
area_1: "云南",
area_2: "玉溪",
area_3: "江川"
},
981: {
weaid: "981",
citynm: "江城",
cityno: "jiangcheng",
cityid: "101290907",
area_1: "云南",
area_2: "普洱",
area_3: "江城"
},
982: {
weaid: "982",
citynm: "泾川",
cityno: "jingchuan",
cityid: "101160302",
area_1: "甘肃",
area_2: "平凉",
area_3: "泾川"
},
983: {
weaid: "983",
citynm: "旌德",
cityno: "jingde",
cityid: "101221403",
area_1: "安徽",
area_2: "宣城",
area_3: "旌德"
},
984: {
weaid: "984",
citynm: "建德",
cityno: "jiande",
cityid: "101210105",
area_1: "浙江",
area_2: "杭州",
area_3: "建德"
},
985: {
weaid: "985",
citynm: "鸡东",
cityno: "jidong",
cityid: "101051104",
area_1: "黑龙江",
area_2: "鸡西",
area_3: "鸡东"
},
986: {
weaid: "986",
citynm: "景东",
cityno: "jingdong",
cityid: "101290903",
area_1: "云南",
area_2: "普洱",
area_3: "景东"
},
987: {
weaid: "987",
citynm: "江都",
cityno: "jiangdu",
cityid: "101190605",
area_1: "江苏",
area_2: "扬州",
area_3: "江都"
},
988: {
weaid: "988",
citynm: "剑阁",
cityno: "jiange",
cityid: "101272104",
area_1: "四川",
area_2: "广元",
area_3: "剑阁"
},
990: {
weaid: "990",
citynm: "井冈山",
cityno: "jinggangshan",
cityid: "101240608",
area_1: "江西",
area_2: "吉安",
area_3: "井冈山"
},
991: {
weaid: "991",
citynm: "景谷",
cityno: "jinggu",
cityid: "101290902",
area_1: "云南",
area_2: "普洱",
area_3: "景谷"
},
992: {
weaid: "992",
citynm: "交城",
cityno: "jiaocheng",
cityid: "101101113",
area_1: "山西",
area_2: "吕梁",
area_3: "交城"
},
993: {
weaid: "993",
citynm: "蛟河",
cityno: "jiaohe",
cityid: "101060204",
area_1: "吉林",
area_2: "蛟河",
area_3: ""
},
994: {
weaid: "994",
citynm: "嘉禾",
cityno: "jiahe",
cityid: "101250503",
area_1: "湖南",
area_2: "郴州",
area_3: "嘉禾"
},
995: {
weaid: "995",
citynm: "剑河",
cityno: "jianhe",
cityid: "101260511",
area_1: "贵州",
area_2: "黔东南",
area_3: "剑河"
},
996: {
weaid: "996",
citynm: "精河",
cityno: "jinghe",
cityid: "101131603",
area_1: "新疆",
area_2: "博尔塔拉",
area_3: "精河"
},
997: {
weaid: "997",
citynm: "建湖",
cityno: "jianhu",
cityid: "101190706",
area_1: "江苏",
area_2: "盐城",
area_3: "建湖"
},
998: {
weaid: "998",
citynm: "金湖",
cityno: "jinhu",
cityid: "101190902",
area_1: "江苏",
area_2: "淮安",
area_3: "金湖"
},
999: {
weaid: "999",
citynm: "江华",
cityno: "jianghua",
cityid: "101251410",
area_1: "湖南",
area_2: "永州",
area_3: "江华"
},
1000: {
weaid: "1000",
citynm: "井陉",
cityno: "jingxing",
cityid: "101090102",
area_1: "河北",
area_2: "石家庄",
area_3: "井陉"
},
1001: {
weaid: "1001",
citynm: "靖江",
cityno: "jingjiang",
cityid: "101191205",
area_1: "江苏",
area_2: "泰州",
area_3: "靖江"
},
1002: {
weaid: "1002",
citynm: "椒江",
cityno: "jiaojiang",
cityid: "101210611",
area_1: "浙江",
area_2: "台州",
area_3: "椒江"
},
1003: {
weaid: "1003",
citynm: "夹江",
cityno: "jiajiang",
cityid: "101271404",
area_1: "四川",
area_2: "乐山",
area_3: "夹江"
},
1004: {
weaid: "1004",
citynm: "交口",
cityno: "jiaokou",
cityid: "101101108",
area_1: "山西",
area_2: "吕梁",
area_3: "交口"
},
1005: {
weaid: "1005",
citynm: "江口",
cityno: "jiangkou",
cityid: "101260602",
area_1: "贵州",
area_2: "铜仁",
area_3: "江口"
},
1006: {
weaid: "1006",
citynm: "将乐",
cityno: "jiangle",
cityid: "101230805",
area_1: "福建",
area_2: "三明",
area_3: "将乐"
},
1007: {
weaid: "1007",
citynm: "监利",
cityno: "jianli",
cityid: "101200805",
area_1: "湖北",
area_2: "荆州",
area_3: "监利"
},
1008: {
weaid: "1008",
citynm: "江陵",
cityno: "jiangling",
cityid: "101200802",
area_1: "湖北",
area_2: "荆州",
area_3: "江陵"
},
1009: {
weaid: "1009",
citynm: "蕉岭",
cityno: "jiaoling",
cityid: "101280403",
area_1: "广东",
area_2: "梅州",
area_3: "蕉岭"
},
1010: {
weaid: "1010",
citynm: "嘉黎",
cityno: "jiali",
cityid: "101140603",
area_1: "西藏",
area_2: "那曲",
area_3: "嘉黎"
},
1011: {
weaid: "1011",
citynm: "吉木萨尔",
cityno: "jimusaer",
cityid: "101130405",
area_1: "新疆",
area_2: "昌吉",
area_3: "吉木萨尔"
},
1012: {
weaid: "1012",
citynm: "即墨",
cityno: "jimo",
cityid: "101120204",
area_1: "山东",
area_2: "青岛",
area_3: "即墨"
},
1013: {
weaid: "1013",
citynm: "青岛黄岛",
cityno: "huangdao",
cityid: "101120206",
area_1: "山东",
area_2: "青岛",
area_3: "黄岛"
},
1014: {
weaid: "1014",
citynm: "莒南",
cityno: "junan",
cityid: "101120902",
area_1: "山东",
area_2: "临沂",
area_3: "莒南"
},
1015: {
weaid: "1015",
citynm: "江宁",
cityno: "jiangning",
cityid: "101190104",
area_1: "江苏",
area_2: "南京",
area_3: "江宁"
},
1016: {
weaid: "1016",
citynm: "景宁",
cityno: "jingning",
cityid: "101210809",
area_1: "浙江",
area_2: "丽水",
area_3: "景宁"
},
1017: {
weaid: "1017",
citynm: "建宁",
cityno: "jianning",
cityid: "101230806",
area_1: "福建",
area_2: "三明",
area_3: "建宁"
},
1018: {
weaid: "1018",
citynm: "晋宁",
cityno: "jinning",
cityid: "101290105",
area_1: "云南",
area_2: "昆明",
area_3: "晋宁"
},
1019: {
weaid: "1019",
citynm: "静宁",
cityno: "gsjingning",
cityid: "101160307",
area_1: "甘肃",
area_2: "平凉",
area_3: "静宁"
},
1020: {
weaid: "1020",
citynm: "建瓯",
cityno: "jianou",
cityid: "101230910",
area_1: "福建",
area_2: "南平",
area_3: "建瓯"
},
1021: {
weaid: "1021",
citynm: "锦屏",
cityno: "gzjinping",
cityid: "101260515",
area_1: "贵州",
area_2: "黔东南",
area_3: "锦屏"
},
1022: {
weaid: "1022",
citynm: "金平",
cityno: "jinping",
cityid: "101290312",
area_1: "云南",
area_2: "红河",
area_3: "金平"
},
1024: {
weaid: "1024",
citynm: "句容",
cityno: "jurong",
cityid: "101190304",
area_1: "江苏",
area_2: "镇江",
area_3: "句容"
},
1025: {
weaid: "1025",
citynm: "稷山",
cityno: "jishan",
cityid: "101100803",
area_1: "山西",
area_2: "运城",
area_3: "稷山"
},
1026: {
weaid: "1026",
citynm: "界首",
cityno: "jieshou",
cityid: "101220805",
area_1: "安徽",
area_2: "阜阳",
area_3: "界首"
},
1027: {
weaid: "1027",
citynm: "江山",
cityno: "jiangshan",
cityid: "101211005",
area_1: "浙江",
area_2: "衢州",
area_3: "江山"
},
1028: {
weaid: "1028",
citynm: "嘉善",
cityno: "jiashan",
cityid: "101210302",
area_1: "浙江",
area_2: "嘉兴",
area_3: "嘉善"
},
1029: {
weaid: "1029",
citynm: "吉水",
cityno: "jishui",
cityid: "101240603",
area_1: "江西",
area_2: "吉安",
area_3: "吉水"
},
1030: {
weaid: "1030",
citynm: "建始",
cityno: "jianshi",
cityid: "101201003",
area_1: "湖北",
area_2: "恩施",
area_3: "建始"
},
1031: {
weaid: "1031",
citynm: "京山",
cityno: "jingshan",
cityid: "101201403",
area_1: "湖北",
area_2: "荆门",
area_3: "京山"
},
1032: {
weaid: "1032",
citynm: "金沙",
cityno: "jinsha",
cityid: "101260703",
area_1: "贵州",
area_2: "毕节",
area_3: "金沙"
},
1033: {
weaid: "1033",
citynm: "建水",
cityno: "jianshui",
cityid: "101290303",
area_1: "云南",
area_2: "红河",
area_3: "建水"
},
1034: {
weaid: "1034",
citynm: "伽师",
cityno: "jiashi",
cityid: "101130910",
area_1: "新疆",
area_2: "喀什",
area_3: "伽师"
},
1035: {
weaid: "1035",
citynm: "九台",
cityno: "jiutai",
cityid: "101060104",
area_1: "吉林",
area_2: "长春",
area_3: "九台"
},
1036: {
weaid: "1036",
citynm: "金坛",
cityno: "jintan",
cityid: "101191103",
area_1: "江苏",
area_2: "常州",
area_3: "金坛"
},
1037: {
weaid: "1037",
citynm: "金堂",
cityno: "jintang",
cityid: "101270105",
area_1: "四川",
area_2: "成都",
area_3: "金堂"
},
1038: {
weaid: "1038",
citynm: "金塔",
cityno: "jinta",
cityid: "101160803",
area_1: "甘肃",
area_2: "酒泉",
area_3: "金塔"
},
1039: {
weaid: "1039",
citynm: "景泰",
cityno: "jingtai",
cityid: "101161305",
area_1: "甘肃",
area_2: "白银",
area_3: "景泰"
},
1040: {
weaid: "1040",
citynm: "犍为",
cityno: "jianwei",
cityid: "101271402",
area_1: "四川",
area_2: "乐山",
area_3: "犍为"
},
1041: {
weaid: "1041",
citynm: "集贤",
cityno: "jixian",
cityid: "101051302",
area_1: "黑龙江",
area_2: "双鸭山",
area_3: "集贤"
},
1042: {
weaid: "1042",
citynm: "介休",
cityno: "jiexiu",
cityid: "101100412",
area_1: "山西",
area_2: "晋中",
area_3: "介休"
},
1043: {
weaid: "1043",
citynm: "吉县",
cityno: "sxjixian",
cityid: "101100706",
area_1: "山西",
area_2: "临汾",
area_3: "吉县"
},
1044: {
weaid: "1044",
citynm: "金乡",
cityno: "jinxiang",
cityid: "101120706",
area_1: "山东",
area_2: "济宁",
area_3: "金乡"
},
1045: {
weaid: "1045",
citynm: "嘉祥",
cityno: "jiaxiang",
cityid: "101120702",
area_1: "山东",
area_2: "济宁",
area_3: "嘉祥"
},
1046: {
weaid: "1046",
citynm: "莒县",
cityno: "juxian",
cityid: "101121503",
area_1: "山东",
area_2: "日照",
area_3: "莒县"
},
1047: {
weaid: "1047",
citynm: "绩溪",
cityno: "ahjixi",
cityid: "101221405",
area_1: "安徽",
area_2: "宣城",
area_3: "绩溪"
},
1048: {
weaid: "1048",
citynm: "泾县",
cityno: "jingxian",
cityid: "101221402",
area_1: "安徽",
area_2: "宣城",
area_3: "泾县"
},
1049: {
weaid: "1049",
citynm: "进贤",
cityno: "jinxian",
cityid: "101240105",
area_1: "江西",
area_2: "南昌",
area_3: "进贤"
},
1050: {
weaid: "1050",
citynm: "金溪",
cityno: "jinxi",
cityid: "101240405",
area_1: "江西",
area_2: "抚州",
area_3: "金溪"
},
1051: {
weaid: "1051",
citynm: "郏县",
cityno: "jiaxian",
cityid: "101180502",
area_1: "河南",
area_2: "平顶山",
area_3: "郏县"
},
1052: {
weaid: "1052",
citynm: "浚县",
cityno: "junxian",
cityid: "101181202",
area_1: "河南",
area_2: "鹤壁",
area_3: "浚县"
},
1053: {
weaid: "1053",
citynm: "江夏",
cityno: "jiangxia",
cityid: "101200105",
area_1: "湖北",
area_2: "武汉",
area_3: "江夏"
},
1054: {
weaid: "1054",
citynm: "揭西",
cityno: "jiexi",
cityid: "101281902",
area_1: "广东",
area_2: "揭阳",
area_3: "揭西"
},
1055: {
weaid: "1055",
citynm: "金秀",
cityno: "jinxiu",
cityid: "101300403",
area_1: "广西",
area_2: "来宾",
area_3: "金秀"
},
1056: {
weaid: "1056",
citynm: "靖西",
cityno: "jingxi",
cityid: "101301005",
area_1: "广西",
area_2: "百色",
area_3: "靖西"
},
1057: {
weaid: "1057",
citynm: "佳县",
cityno: "sxjiaxian",
cityid: "101110404",
area_1: "陕西",
area_2: "榆林",
area_3: "佳县"
},
1058: {
weaid: "1058",
citynm: "济阳",
cityno: "jiyang",
cityid: "101120106",
area_1: "山东",
area_2: "济南",
area_3: "济阳"
},
1059: {
weaid: "1059",
citynm: "姜堰",
cityno: "jiangyan",
cityid: "101191204",
area_1: "江苏",
area_2: "泰州",
area_3: "姜堰"
},
1060: {
weaid: "1060",
citynm: "建阳",
cityno: "jianyang",
cityid: "101230907",
area_1: "福建",
area_2: "南平",
area_3: "建阳"
},
1062: {
weaid: "1062",
citynm: "泾阳",
cityno: "jingyang",
cityid: "101110205",
area_1: "陕西",
area_2: "咸阳",
area_3: "泾阳"
},
1063: {
weaid: "1063",
citynm: "井研",
cityno: "jingyan",
cityid: "101271403",
area_1: "四川",
area_2: "乐山",
area_3: "井研"
},
1064: {
weaid: "1064",
citynm: "金阳",
cityno: "jinyang",
cityid: "101271611",
area_1: "四川",
area_2: "凉山",
area_3: "金阳"
},
1065: {
weaid: "1065",
citynm: "巨野",
cityno: "juye",
cityid: "101121006",
area_1: "山东",
area_2: "菏泽",
area_3: "巨野"
},
1066: {
weaid: "1066",
citynm: "嘉荫",
cityno: "jiayin",
cityid: "101050805",
area_1: "黑龙江",
area_2: "伊春",
area_3: "嘉荫"
},
1067: {
weaid: "1067",
citynm: "江阴",
cityno: "jiangyin",
cityid: "101190202",
area_1: "江苏",
area_2: "无锡",
area_3: "江阴"
},
1068: {
weaid: "1068",
citynm: "江永",
cityno: "jiangyong",
cityid: "101251407",
area_1: "湖南",
area_2: "永州",
area_3: "江永"
},
1069: {
weaid: "1069",
citynm: "江油",
cityno: "jiangyou",
cityid: "101270408",
area_1: "四川",
area_2: "绵阳",
area_3: "江油"
},
1070: {
weaid: "1070",
citynm: "靖宇",
cityno: "jingyu",
cityid: "101060902",
area_1: "吉林",
area_2: "白山",
area_3: "靖宇"
},
1071: {
weaid: "1071",
citynm: "缙云",
cityno: "jinyun",
cityid: "101210804",
area_1: "浙江",
area_2: "丽水",
area_3: "缙云"
},
1072: {
weaid: "1072",
citynm: "嘉鱼",
cityno: "jiayu",
cityid: "101200703",
area_1: "湖北",
area_2: "咸宁",
area_3: "嘉鱼"
},
1073: {
weaid: "1073",
citynm: "靖远",
cityno: "jingyuan",
cityid: "101161302",
area_1: "甘肃",
area_2: "白银",
area_3: "靖远"
},
1074: {
weaid: "1074",
citynm: "泾源",
cityno: "nxjingyuan",
cityid: "101170404",
area_1: "宁夏",
area_2: "固原",
area_3: "泾源"
},
1075: {
weaid: "1075",
citynm: "晋州",
cityno: "hbjinzhou",
cityid: "101090116",
area_1: "河北",
area_2: "石家庄",
area_3: "晋州"
},
1076: {
weaid: "1076",
citynm: "胶州",
cityno: "jiaozhou",
cityid: "101120205",
area_1: "山东",
area_2: "青岛",
area_3: "胶州"
},
1077: {
weaid: "1077",
citynm: "金寨",
cityno: "jinzhai",
cityid: "101221505",
area_1: "安徽",
area_2: "六安",
area_3: "金寨"
},
1078: {
weaid: "1078",
citynm: "靖州",
cityno: "jingzhou",
cityid: "101251205",
area_1: "湖南",
area_2: "怀化",
area_3: "靖州"
},
1079: {
weaid: "1079",
citynm: "尖扎",
cityno: "jianzha",
cityid: "101150302",
area_1: "青海",
area_2: "黄南",
area_3: "尖扎"
},
1080: {
weaid: "1080",
citynm: "久治",
cityno: "jiuzhi",
cityid: "101150505",
area_1: "青海",
area_2: "果洛",
area_3: "久治"
},
1081: {
weaid: "1081",
citynm: "康保",
cityno: "kangbao",
cityid: "101090304",
area_1: "河北",
area_2: "张家口",
area_3: "康保"
},
1082: {
weaid: "1082",
citynm: "库车",
cityno: "kuche",
cityid: "101130807",
area_1: "新疆",
area_2: "阿克苏",
area_3: "库车"
},
1083: {
weaid: "1083",
citynm: "宽城",
cityno: "kuancheng",
cityid: "101090409",
area_1: "河北",
area_2: "承德",
area_3: "宽城"
},
1084: {
weaid: "1084",
citynm: "宽甸",
cityno: "kuandian",
cityid: "101070603",
area_1: "辽宁",
area_2: "丹东",
area_3: "宽甸"
},
1085: {
weaid: "1085",
citynm: "康定",
cityno: "kangding",
cityid: "101271802",
area_1: "四川",
area_2: "甘孜",
area_3: "康定"
},
1086: {
weaid: "1086",
citynm: "克东",
cityno: "kedong",
cityid: "101050209",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "克东"
},
1087: {
weaid: "1087",
citynm: "通辽科左中旗",
cityno: "tongliaokezuozho",
cityid: "101080503",
area_1: "内蒙古",
area_2: "通辽",
area_3: "科左中旗"
},
1088: {
weaid: "1088",
citynm: "通辽科左后旗",
cityno: "tongliaokezuohou",
cityid: "101080504",
area_1: "内蒙古",
area_2: "通辽",
area_3: "科左后旗"
},
1089: {
weaid: "1089",
citynm: "开化",
cityno: "kaihua",
cityid: "101211003",
area_1: "浙江",
area_2: "衢州",
area_3: "开化"
},
1090: {
weaid: "1090",
citynm: "开江",
cityno: "kaijiang",
cityid: "101270603",
area_1: "四川",
area_2: "达州",
area_3: "开江"
},
1091: {
weaid: "1091",
citynm: "岢岚",
cityno: "kelan",
cityid: "101101013",
area_1: "山西",
area_2: "忻州",
area_3: "岢岚"
},
1092: {
weaid: "1092",
citynm: "康乐",
cityno: "kangle",
cityid: "101161102",
area_1: "甘肃",
area_2: "临夏",
area_3: "康乐"
},
1093: {
weaid: "1093",
citynm: "通辽库伦",
cityno: "kulun",
cityid: "101080507",
area_1: "内蒙古",
area_2: "通辽",
area_3: "库伦"
},
1094: {
weaid: "1094",
citynm: "喀喇沁旗",
cityno: "kalaqinqi",
cityid: "101080611",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "喀喇沁"
},
1095: {
weaid: "1095",
citynm: "开鲁",
cityno: "kailu",
cityid: "101080506",
area_1: "内蒙古",
area_2: "通辽",
area_3: "开鲁"
},
1096: {
weaid: "1096",
citynm: "康平",
cityno: "kangping",
cityid: "101070104",
area_1: "辽宁",
area_2: "沈阳",
area_3: "康平"
},
1097: {
weaid: "1097",
citynm: "开平",
cityno: "kaiping",
cityid: "101281103",
area_1: "广东",
area_2: "江门",
area_3: "开平"
},
1098: {
weaid: "1098",
citynm: "柯坪",
cityno: "keping",
cityid: "101130808",
area_1: "新疆",
area_2: "阿克苏",
area_3: "柯坪"
},
1099: {
weaid: "1099",
citynm: "克山",
cityno: "keshan",
cityid: "101050208",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "克山"
},
1100: {
weaid: "1100",
citynm: "昆山",
cityno: "kunshan",
cityid: "101190404",
area_1: "江苏",
area_2: "苏州",
area_3: "昆山"
},
1101: {
weaid: "1101",
citynm: "克什克腾旗",
cityno: "keshiketengqi",
cityid: "101080608",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "克什克腾"
},
1102: {
weaid: "1102",
citynm: "康县",
cityno: "kangxian",
cityid: "101161005",
area_1: "甘肃",
area_2: "陇南",
area_3: "康县"
},
1103: {
weaid: "1103",
citynm: "开原",
cityno: "lnkaiyuan",
cityid: "101071102",
area_1: "辽宁",
area_2: "铁岭",
area_3: "开原"
},
1104: {
weaid: "1104",
citynm: "开远",
cityno: "kaiyuan",
cityid: "101290307",
area_1: "云南",
area_2: "红河",
area_3: "开远"
},
1105: {
weaid: "1105",
citynm: "来安",
cityno: "laian",
cityid: "101221106",
area_1: "安徽",
area_2: "滁州",
area_3: "来安"
},
1106: {
weaid: "1106",
citynm: "临安",
cityno: "linan",
cityid: "101210107",
area_1: "浙江",
area_2: "杭州",
area_3: "临安"
},
1107: {
weaid: "1107",
citynm: "隆安",
cityno: "longan",
cityid: "101300105",
area_1: "广西",
area_2: "南宁",
area_3: "隆安"
},
1108: {
weaid: "1108",
citynm: "留坝",
cityno: "liuba",
cityid: "101110804",
area_1: "陕西",
area_2: "汉中",
area_3: "留坝"
},
1109: {
weaid: "1109",
citynm: "灵宝",
cityno: "lingbao",
cityid: "101181702",
area_1: "河南",
area_2: "三门峡",
area_3: "灵宝"
},
1110: {
weaid: "1110",
citynm: "萝北",
cityno: "luobei",
cityid: "101051203",
area_1: "黑龙江",
area_2: "鹤岗",
area_3: "萝北"
},
1111: {
weaid: "1111",
citynm: "荔波",
cityno: "libo",
cityid: "101260412",
area_1: "贵州",
area_2: "黔南",
area_3: "荔波"
},
1112: {
weaid: "1112",
citynm: "雷波",
cityno: "leibo",
cityid: "101271617",
area_1: "四川",
area_2: "凉山",
area_3: "雷波"
},
1113: {
weaid: "1113",
citynm: "澜沧",
cityno: "lancang",
cityid: "101290904",
area_1: "云南",
area_2: "普洱",
area_3: "澜沧"
},
1114: {
weaid: "1114",
citynm: "栾城",
cityno: "luancheng",
cityid: "101090104",
area_1: "河北",
area_2: "石家庄",
area_3: "栾城"
},
1115: {
weaid: "1115",
citynm: "黎城",
cityno: "licheng",
cityid: "101100502",
area_1: "山西",
area_2: "长治",
area_3: "黎城"
},
1116: {
weaid: "1116",
citynm: "潞城",
cityno: "lucheng",
cityid: "101100504",
area_1: "山西",
area_2: "长治",
area_3: "潞城"
},
1117: {
weaid: "1117",
citynm: "陵川",
cityno: "lingchuan",
cityid: "101100604",
area_1: "山西",
area_2: "晋城",
area_3: "陵川"
},
1118: {
weaid: "1118",
citynm: "凉城",
cityno: "liangcheng",
cityid: "101080407",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "凉城"
},
1119: {
weaid: "1119",
citynm: "连城",
cityno: "liancheng",
cityid: "101230703",
area_1: "福建",
area_2: "龙岩",
area_3: "连城"
},
1120: {
weaid: "1120",
citynm: "黎川",
cityno: "jxlichuan",
cityid: "101240410",
area_1: "江西",
area_2: "抚州",
area_3: "黎川"
},
1121: {
weaid: "1121",
citynm: "栾川",
cityno: "luanchuan",
cityid: "101180909",
area_1: "河南",
area_2: "洛阳",
area_3: "栾川"
},
1122: {
weaid: "1122",
citynm: "利川",
cityno: "lichuan",
cityid: "101201002",
area_1: "湖北",
area_2: "恩施",
area_3: "利川"
},
1123: {
weaid: "1123",
citynm: "乐昌",
cityno: "lechang",
cityid: "101280205",
area_1: "广东",
area_2: "韶关",
area_3: "乐昌"
},
1124: {
weaid: "1124",
citynm: "龙川",
cityno: "longchuan",
cityid: "101281205",
area_1: "广东",
area_2: "河源",
area_3: "龙川"
},
1125: {
weaid: "1125",
citynm: "柳城",
cityno: "liucheng",
cityid: "101300302",
area_1: "广西",
area_2: "柳州",
area_3: "柳城"
},
1126: {
weaid: "1126",
citynm: "灵川",
cityno: "gxlingchuan",
cityid: "101300507",
area_1: "广西",
area_2: "桂林",
area_3: "灵川"
},
1127: {
weaid: "1127",
citynm: "陆川",
cityno: "luchuan",
cityid: "101300905",
area_1: "广西",
area_2: "玉林",
area_3: "陆川"
},
1128: {
weaid: "1128",
citynm: "罗城",
cityno: "luocheng",
cityid: "101301206",
area_1: "广西",
area_2: "河池",
area_3: "罗城"
},
1129: {
weaid: "1129",
citynm: "隆昌",
cityno: "longchang",
cityid: "101271205",
area_1: "四川",
area_2: "内江",
area_3: "隆昌"
},
1130: {
weaid: "1130",
citynm: "陇川",
cityno: "ynlongchuan",
cityid: "101291503",
area_1: "云南",
area_2: "德宏",
area_3: "陇川"
},
1131: {
weaid: "1131",
citynm: "绿春",
cityno: "lvchun",
cityid: "101290306",
area_1: "云南",
area_2: "红河",
area_3: "绿春"
},
1132: {
weaid: "1132",
citynm: "洛川",
cityno: "luochuan",
cityid: "101110309",
area_1: "陕西",
area_2: "延安",
area_3: "洛川"
},
1133: {
weaid: "1133",
citynm: "两当",
cityno: "liangdang",
cityid: "101161009",
area_1: "甘肃",
area_2: "陇南",
area_3: "两当"
},
1134: {
weaid: "1134",
citynm: "隆德",
cityno: "longde",
cityid: "101170403",
area_1: "宁夏",
area_2: "固原",
area_3: "隆德"
},
1135: {
weaid: "1135",
citynm: "林甸",
cityno: "lindian",
cityid: "101050902",
area_1: "黑龙江",
area_2: "大庆",
area_3: "林甸"
},
1136: {
weaid: "1136",
citynm: "罗定",
cityno: "luoding",
cityid: "101281402",
area_1: "广东",
area_2: "云浮",
area_3: "罗定"
},
1137: {
weaid: "1137",
citynm: "罗甸",
cityno: "luodian",
cityid: "101260408",
area_1: "贵州",
area_2: "黔南",
area_3: "罗甸"
},
1138: {
weaid: "1138",
citynm: "鲁甸",
cityno: "ludian",
cityid: "101291002",
area_1: "云南",
area_2: "昭通",
area_3: "鲁甸"
},
1139: {
weaid: "1139",
citynm: "蓝田",
cityno: "lantian",
cityid: "101110104",
area_1: "陕西",
area_2: "西安",
area_3: "蓝田"
},
1140: {
weaid: "1140",
citynm: "乐都",
cityno: "ledu",
cityid: "101150202",
area_1: "青海",
area_2: "海东",
area_3: "乐都"
},
1141: {
weaid: "1141",
citynm: "娄烦",
cityno: "loufan",
cityid: "101100104",
area_1: "山西",
area_2: "太原",
area_3: "娄烦"
},
1142: {
weaid: "1142",
citynm: "来凤",
cityno: "laifeng",
cityid: "101201007",
area_1: "湖北",
area_2: "恩施",
area_3: "来凤"
},
1143: {
weaid: "1143",
citynm: "陆丰",
cityno: "lufeng",
cityid: "101282103",
area_1: "广东",
area_2: "汕尾",
area_3: "陆丰"
},
1144: {
weaid: "1144",
citynm: "禄丰",
cityno: "ynlufeng",
cityid: "101290808",
area_1: "云南",
area_2: "楚雄",
area_3: "禄丰"
},
1145: {
weaid: "1145",
citynm: "岚皋",
cityno: "langao",
cityid: "101110706",
area_1: "陕西",
area_2: "安康",
area_3: "岚皋"
},
1146: {
weaid: "1146",
citynm: "临桂",
cityno: "lingui",
cityid: "101300505",
area_1: "广西",
area_2: "桂林",
area_3: "临桂"
},
1147: {
weaid: "1147",
citynm: "凌海",
cityno: "linghai",
cityid: "101070702",
area_1: "辽宁",
area_2: "锦州",
area_3: "凌海"
},
1148: {
weaid: "1148",
citynm: "临海",
cityno: "linhai",
cityid: "101210610",
area_1: "浙江",
area_2: "台州",
area_3: "临海"
},
1149: {
weaid: "1149",
citynm: "龙海",
cityno: "longhai",
cityid: "101230605",
area_1: "福建",
area_2: "漳州",
area_3: "龙海"
},
1150: {
weaid: "1150",
citynm: "柳河",
cityno: "jlliuhe",
cityid: "101060503",
area_1: "吉林",
area_2: "通化",
area_3: "柳河"
},
1151: {
weaid: "1151",
citynm: "六合",
cityno: "liuhe",
cityid: "101190105",
area_1: "江苏",
area_2: "南京",
area_3: "六合"
},
1152: {
weaid: "1152",
citynm: "梁河",
cityno: "lianghe",
cityid: "101291507",
area_1: "云南",
area_2: "德宏",
area_3: "梁河"
},
1153: {
weaid: "1153",
citynm: "老河口",
cityno: "laohekou",
cityid: "101200206",
area_1: "湖北",
area_2: "襄阳",
area_3: "老河口"
},
1154: {
weaid: "1154",
citynm: "隆化",
cityno: "longhua",
cityid: "101090407",
area_1: "河北",
area_2: "承德",
area_3: "隆化"
},
1155: {
weaid: "1155",
citynm: "莲花",
cityno: "lianhua",
cityid: "101240902",
area_1: "江西",
area_2: "萍乡",
area_3: "莲花"
},
1156: {
weaid: "1156",
citynm: "隆回",
cityno: "longhui",
cityid: "101250902",
area_1: "湖南",
area_2: "邵阳",
area_3: "隆回"
},
1158: {
weaid: "1158",
citynm: "龙江",
cityno: "longjiang",
cityid: "101050203",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "龙江"
},
1159: {
weaid: "1159",
citynm: "龙井",
cityno: "longjing",
cityid: "101060307",
area_1: "吉林",
area_2: "延边",
area_3: "龙井"
},
1160: {
weaid: "1160",
citynm: "临江",
cityno: "linjiang",
cityid: "101060903",
area_1: "吉林",
area_2: "白山",
area_3: "临江"
},
1161: {
weaid: "1161",
citynm: "利津",
cityno: "lijin",
cityid: "101121204",
area_1: "山东",
area_2: "东营",
area_3: "利津"
},
1163: {
weaid: "1163",
citynm: "连江",
cityno: "fjlianjiang",
cityid: "101230105",
area_1: "福建",
area_2: "福州",
area_3: "连江"
},
1164: {
weaid: "1164",
citynm: "廉江",
cityno: "lianjiang",
cityid: "101281005",
area_1: "广东",
area_2: "湛江",
area_3: "廉江"
},
1165: {
weaid: "1165",
citynm: "柳江",
cityno: "liujiang",
cityid: "101300305",
area_1: "广西",
area_2: "柳州",
area_3: "柳江"
},
1166: {
weaid: "1166",
citynm: "兰考",
cityno: "lankao",
cityid: "101180805",
area_1: "河南",
area_2: "开封",
area_3: "兰考"
},
1167: {
weaid: "1167",
citynm: "林口",
cityno: "linkou",
cityid: "101050304",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "林口"
},
1168: {
weaid: "1168",
citynm: "龙口",
cityno: "longkou",
cityid: "101120505",
area_1: "山东",
area_2: "烟台",
area_3: "龙口"
},
1170: {
weaid: "1170",
citynm: "浪卡子",
cityno: "langkazi",
cityid: "101140305",
area_1: "西藏",
area_2: "山南",
area_3: "浪卡子"
},
1171: {
weaid: "1171",
citynm: "柳林",
cityno: "liulin",
cityid: "101101105",
area_1: "山西",
area_2: "吕梁",
area_3: "柳林"
},
1172: {
weaid: "1172",
citynm: "乐陵",
cityno: "leling",
cityid: "101120406",
area_1: "山东",
area_2: "德州",
area_3: "乐陵"
},
1173: {
weaid: "1173",
citynm: "醴陵",
cityno: "liling",
cityid: "101250303",
area_1: "湖南",
area_2: "株洲",
area_3: "醴陵"
},
1174: {
weaid: "1174",
citynm: "临澧",
cityno: "linli",
cityid: "101250606",
area_1: "湖南",
area_2: "常德",
area_3: "临澧"
},
1175: {
weaid: "1175",
citynm: "隆林",
cityno: "longlin",
cityid: "101301008",
area_1: "广西",
area_2: "百色",
area_3: "隆林"
},
1176: {
weaid: "1176",
citynm: "龙里",
cityno: "longli",
cityid: "101260407",
area_1: "贵州",
area_2: "黔南",
area_3: "龙里"
},
1177: {
weaid: "1177",
citynm: "陆良",
cityno: "luliang",
cityid: "101290403",
area_1: "云南",
area_2: "曲靖",
area_3: "陆良"
},
1178: {
weaid: "1178",
citynm: "龙陵",
cityno: "longling",
cityid: "101290503",
area_1: "云南",
area_2: "保山",
area_3: "龙陵"
},
1179: {
weaid: "1179",
citynm: "洛隆",
cityno: "luolong",
cityid: "101140504",
area_1: "西藏",
area_2: "昌都",
area_3: "洛隆"
},
1180: {
weaid: "1180",
citynm: "龙门",
cityno: "longmen",
cityid: "101280305",
area_1: "广东",
area_2: "惠州",
area_3: "龙门"
},
1181: {
weaid: "1181",
citynm: "龙南",
cityno: "longnan",
cityid: "101240714",
area_1: "江西",
area_2: "赣州",
area_3: "龙南"
},
1182: {
weaid: "1182",
citynm: "连南",
cityno: "liannan",
cityid: "101281302",
area_1: "广东",
area_2: "清远",
area_3: "连南"
},
1183: {
weaid: "1183",
citynm: "洛南",
cityno: "luonan",
cityid: "101110602",
area_1: "陕西",
area_2: "商洛",
area_3: "洛南"
},
1184: {
weaid: "1184",
citynm: "滦南",
cityno: "luannan",
cityid: "101090505",
area_1: "河北",
area_2: "唐山",
area_3: "滦南"
},
1185: {
weaid: "1185",
citynm: "洛宁",
cityno: "luoning",
cityid: "101180905",
area_1: "河南",
area_2: "洛阳",
area_3: "洛宁"
},
1186: {
weaid: "1186",
citynm: "乐平",
cityno: "leping",
cityid: "101240802",
area_1: "江西",
area_2: "景德镇",
area_3: "乐平"
},
1187: {
weaid: "1187",
citynm: "连平",
cityno: "lianping",
cityid: "101281203",
area_1: "广东",
area_2: "河源",
area_3: "连平"
},
1188: {
weaid: "1188",
citynm: "黎平",
cityno: "liping",
cityid: "101260513",
area_1: "贵州",
area_2: "黔东南",
area_3: "黎平"
},
1189: {
weaid: "1189",
citynm: "罗平",
cityno: "luoping",
cityid: "101290407",
area_1: "云南",
area_2: "曲靖",
area_3: "罗平"
},
1190: {
weaid: "1190",
citynm: "兰坪",
cityno: "lanping",
cityid: "101291204",
area_1: "云南",
area_2: "怒江",
area_3: "兰坪"
},
1191: {
weaid: "1191",
citynm: "荔浦",
cityno: "lipu",
cityid: "101300513",
area_1: "广西",
area_2: "桂林",
area_3: "荔浦"
},
1192: {
weaid: "1192",
citynm: "洛浦",
cityno: "luopu",
cityid: "101131305",
area_1: "新疆",
area_2: "和田",
area_3: "洛浦"
},
1193: {
weaid: "1193",
citynm: "临清",
cityno: "linqing",
cityid: "101121707",
area_1: "山东",
area_2: "聊城",
area_3: "临清"
},
1194: {
weaid: "1194",
citynm: "乐清",
cityno: "leqing",
cityid: "101210707",
area_1: "浙江",
area_2: "温州",
area_3: "乐清"
},
1195: {
weaid: "1195",
citynm: "临朐",
cityno: "linchun",
cityid: "101120604",
area_1: "山东",
area_2: "潍坊",
area_3: "临朐"
},
1196: {
weaid: "1196",
citynm: "临泉",
cityno: "linquan",
cityid: "101220804",
area_1: "安徽",
area_2: "阜阳",
area_3: "临泉"
},
1197: {
weaid: "1197",
citynm: "龙泉",
cityno: "longquan",
cityid: "101210803",
area_1: "浙江",
area_2: "丽水",
area_3: "龙泉"
},
1198: {
weaid: "1198",
citynm: "礼泉",
cityno: "liquan",
cityid: "101110202",
area_1: "陕西",
area_2: "咸阳",
area_3: "礼泉"
},
1199: {
weaid: "1199",
citynm: "碌曲",
cityno: "luqu",
cityid: "101161207",
area_1: "甘肃",
area_2: "甘南",
area_3: "碌曲"
},
1200: {
weaid: "1200",
citynm: "灵寿",
cityno: "lingshou",
cityid: "101090106",
area_1: "河北",
area_2: "石家庄",
area_3: "灵寿"
},
1201: {
weaid: "1201",
citynm: "灵石",
cityno: "lingshi",
cityid: "101100411",
area_1: "山西",
area_2: "晋中",
area_3: "灵石"
},
1202: {
weaid: "1202",
citynm: "离石",
cityno: "lishi",
cityid: "101101101",
area_1: "山西",
area_2: "吕梁",
area_3: "离石"
},
1203: {
weaid: "1203",
citynm: "梁山",
cityno: "liangshan",
cityid: "101120709",
area_1: "山东",
area_2: "济宁",
area_3: "梁山"
},
1204: {
weaid: "1204",
citynm: "临沭",
cityno: "linshu",
cityid: "101120905",
area_1: "山东",
area_2: "临沂",
area_3: "临沭"
},
1205: {
weaid: "1205",
citynm: "溧水",
cityno: "lishui",
cityid: "101190102",
area_1: "江苏",
area_2: "南京",
area_3: "溧水"
},
1206: {
weaid: "1206",
citynm: "涟水",
cityno: "lianshui",
cityid: "101190905",
area_1: "江苏",
area_2: "淮安",
area_3: "涟水"
},
1207: {
weaid: "1207",
citynm: "庐山",
cityno: "jxlushan",
cityid: "101240203",
area_1: "江西",
area_2: "九江",
area_3: "庐山"
},
1208: {
weaid: "1208",
citynm: "鲁山",
cityno: "lushan",
cityid: "101180507",
area_1: "河南",
area_2: "平顶山",
area_3: "鲁山"
},
1209: {
weaid: "1209",
citynm: "罗山",
cityno: "luoshan",
cityid: "101180603",
area_1: "河南",
area_2: "信阳",
area_3: "罗山"
},
1210: {
weaid: "1210",
citynm: "龙山",
cityno: "longshan",
cityid: "101251507",
area_1: "湖南",
area_2: "湘西",
area_3: "龙山"
},
1211: {
weaid: "1211",
citynm: "蓝山",
cityno: "lanshan",
cityid: "101251408",
area_1: "湖南",
area_2: "永州",
area_3: "蓝山"
},
1212: {
weaid: "1212",
citynm: "连山",
cityno: "lianshan",
cityid: "101281304",
area_1: "广东",
area_2: "清远",
area_3: "连山"
},
1213: {
weaid: "1213",
citynm: "龙胜",
cityno: "longsheng",
cityid: "101300503",
area_1: "广西",
area_2: "桂林",
area_3: "龙胜"
},
1214: {
weaid: "1214",
citynm: "灵山",
cityno: "lingshan",
cityid: "101301103",
area_1: "广西",
area_2: "钦州",
area_3: "灵山"
},
1215: {
weaid: "1215",
citynm: "邻水",
cityno: "linshui",
cityid: "101270804",
area_1: "四川",
area_2: "广安",
area_3: "邻水"
},
1216: {
weaid: "1216",
citynm: "雷山",
cityno: "leishan",
cityid: "101260512",
area_1: "贵州",
area_2: "黔东南",
area_3: "雷山"
},
1217: {
weaid: "1217",
citynm: "卢氏",
cityno: "lushi",
cityid: "101181704",
area_1: "河南",
area_2: "三门峡",
area_3: "卢氏"
},
1218: {
weaid: "1218",
citynm: "芦山",
cityno: "sclushan",
cityid: "101271707",
area_1: "四川",
area_2: "雅安",
area_3: "芦山"
},
1219: {
weaid: "1219",
citynm: "泸水",
cityno: "lushui",
cityid: "101291205",
area_1: "云南",
area_2: "怒江",
area_3: "泸水"
},
1220: {
weaid: "1220",
citynm: "冷水江",
cityno: "lingshuijiang",
cityid: "101250803",
area_1: "湖南",
area_2: "娄底",
area_3: "冷水江"
},
1222: {
weaid: "1222",
citynm: "临洮",
cityno: "lindao",
cityid: "101160205",
area_1: "甘肃",
area_2: "定西",
area_3: "临洮"
},
1223: {
weaid: "1223",
citynm: "灵台",
cityno: "lingtai",
cityid: "101160303",
area_1: "甘肃",
area_2: "平凉",
area_3: "灵台"
},
1224: {
weaid: "1224",
citynm: "临潭",
cityno: "lintan",
cityid: "101161202",
area_1: "甘肃",
area_2: "甘南",
area_3: "临潭"
},
1225: {
weaid: "1225",
citynm: "轮台",
cityno: "luntai",
cityid: "101130602",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "轮台"
},
1226: {
weaid: "1226",
citynm: "罗田",
cityno: "luotian",
cityid: "101200504",
area_1: "湖北",
area_2: "黄冈",
area_3: "罗田"
},
1227: {
weaid: "1227",
citynm: "乐亭",
cityno: "leting",
cityid: "101090506",
area_1: "河北",
area_2: "唐山",
area_3: "乐亭"
},
1228: {
weaid: "1228",
citynm: "临潼",
cityno: "lintong",
cityid: "101110103",
area_1: "陕西",
area_2: "西安",
area_3: "临潼"
},
1229: {
weaid: "1229",
citynm: "临武",
cityno: "linwu",
cityid: "101250505",
area_1: "湖南",
area_2: "郴州",
area_3: "临武"
},
1230: {
weaid: "1230",
citynm: "灵武",
cityno: "lingwu",
cityid: "101170103",
area_1: "宁夏",
area_2: "银川",
area_3: "灵武"
},
1231: {
weaid: "1231",
citynm: "兰西",
cityno: "hljlanxi",
cityid: "101050507",
area_1: "黑龙江",
area_2: "绥化",
area_3: "兰西"
},
1232: {
weaid: "1232",
citynm: "蠡县",
cityno: "lixian",
cityid: "101090215",
area_1: "河北",
area_2: "保定",
area_3: "蠡县"
},
1233: {
weaid: "1233",
citynm: "临县",
cityno: "linxian",
cityid: "101101102",
area_1: "山西",
area_2: "吕梁",
area_3: "临县"
},
1234: {
weaid: "1234",
citynm: "岚县",
cityno: "lanxian",
cityid: "101101104",
area_1: "山西",
area_2: "吕梁",
area_3: "岚县"
},
1235: {
weaid: "1235",
citynm: "林西",
cityno: "linxi",
cityid: "101080607",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "林西"
},
1236: {
weaid: "1236",
citynm: "莱西",
cityno: "laixi",
cityid: "101120207",
area_1: "山东",
area_2: "青岛",
area_3: "莱西"
},
1238: {
weaid: "1238",
citynm: "郎溪",
cityno: "langxi",
cityid: "101221407",
area_1: "安徽",
area_2: "宣城",
area_3: "郎溪"
},
1239: {
weaid: "1239",
citynm: "利辛",
cityno: "lixin",
cityid: "101220903",
area_1: "安徽",
area_2: "亳州",
area_3: "利辛"
},
1240: {
weaid: "1240",
citynm: "兰溪",
cityno: "lanxi",
cityid: "101210903",
area_1: "浙江",
area_2: "金华",
area_3: "兰溪"
},
1242: {
weaid: "1242",
citynm: "临湘",
cityno: "linxiang",
cityid: "101251006",
area_1: "湖南",
area_2: "岳阳",
area_3: "临湘"
},
1243: {
weaid: "1243",
citynm: "澧县",
cityno: "hnlixian",
cityid: "101250605",
area_1: "湖南",
area_2: "常德",
area_3: "澧县"
},
1244: {
weaid: "1244",
citynm: "泸溪",
cityno: "luxi",
cityid: "101251506",
area_1: "湖南",
area_2: "湘西",
area_3: "泸溪"
},
1245: {
weaid: "1245",
citynm: "芒市",
cityno: "mangshi",
cityid: "101291508",
area_1: "云南",
area_2: "德宏",
area_3: "芒市"
},
1246: {
weaid: "1246",
citynm: "泸西",
cityno: "ynhhluxi",
cityid: "101290311",
area_1: "云南",
area_2: "红河",
area_3: "泸西"
},
1247: {
weaid: "1247",
citynm: "陇县",
cityno: "longxian",
cityid: "101110911",
area_1: "陕西",
area_2: "宝鸡",
area_3: "陇县"
},
1248: {
weaid: "1248",
citynm: "陇西",
cityno: "longxi",
cityid: "101160203",
area_1: "甘肃",
area_2: "定西",
area_3: "陇西"
},
1249: {
weaid: "1249",
citynm: "礼县",
cityno: "gslixian",
cityid: "101161007",
area_1: "甘肃",
area_2: "陇南",
area_3: "礼县"
},
1250: {
weaid: "1250",
citynm: "理县",
cityno: "sclixian",
cityid: "101271903",
area_1: "四川",
area_2: "阿坝",
area_3: "理县"
},
1251: {
weaid: "1251",
citynm: "禄劝",
cityno: "luquan",
cityid: "101290111",
area_1: "云南",
area_2: "昆明",
area_3: "禄劝"
},
1252: {
weaid: "1252",
citynm: "莱阳",
cityno: "laiyang",
cityid: "101120510",
area_1: "山东",
area_2: "烟台",
area_3: "莱阳"
},
1253: {
weaid: "1253",
citynm: "溧阳",
cityno: "liyang",
cityid: "101191102",
area_1: "江苏",
area_2: "常州",
area_3: "溧阳"
},
1254: {
weaid: "1254",
citynm: "耒阳",
cityno: "leiyang",
cityid: "101250408",
area_1: "湖南",
area_2: "衡阳",
area_3: "耒阳"
},
1255: {
weaid: "1255",
citynm: "浏阳",
cityno: "liuyang",
cityid: "101250103",
area_1: "湖南",
area_2: "长沙",
area_3: "浏阳"
},
1256: {
weaid: "1256",
citynm: "开阳",
cityno: "kaiyang",
cityid: "101260106",
area_1: "贵州",
area_2: "贵阳",
area_3: "开阳"
},
1257: {
weaid: "1257",
citynm: "略阳",
cityno: "lueyang",
cityid: "101110802",
area_1: "陕西",
area_2: "汉中",
area_3: "略阳"
},
1258: {
weaid: "1258",
citynm: "乐业",
cityno: "leye",
cityid: "101301010",
area_1: "广西",
area_2: "百色",
area_3: "乐业"
},
1259: {
weaid: "1259",
citynm: "临猗",
cityno: "linyi",
cityid: "101100802",
area_1: "山西",
area_2: "运城",
area_3: "临猗"
},
1260: {
weaid: "1260",
citynm: "鹿邑",
cityno: "luyi",
cityid: "101181409",
area_1: "河南",
area_2: "周口",
area_3: "鹿邑"
},
1261: {
weaid: "1261",
citynm: "临颍",
cityno: "linying",
cityid: "101181502",
area_1: "河南",
area_2: "漯河",
area_3: "临颍"
},
1262: {
weaid: "1262",
citynm: "龙游",
cityno: "longyou",
cityid: "101211004",
area_1: "浙江",
area_2: "衢州",
area_3: "龙游"
},
1263: {
weaid: "1263",
citynm: "麟游",
cityno: "linyou",
cityid: "101110904",
area_1: "陕西",
area_2: "宝鸡",
area_3: "麟游"
},
1264: {
weaid: "1264",
citynm: "凌源",
cityno: "lingyuan",
cityid: "101071203",
area_1: "辽宁",
area_2: "朝阳",
area_3: "凌源"
},
1265: {
weaid: "1265",
citynm: "涞源",
cityno: "laiyuan",
cityid: "101090209",
area_1: "河北",
area_2: "保定",
area_3: "涞源"
},
1266: {
weaid: "1266",
citynm: "罗源",
cityno: "luoyuan",
cityid: "101230104",
area_1: "福建",
area_2: "福州",
area_3: "罗源"
},
1267: {
weaid: "1267",
citynm: "涟源",
cityno: "lianyuan",
cityid: "101250806",
area_1: "湖南",
area_2: "娄底",
area_3: "涟源"
},
1268: {
weaid: "1268",
citynm: "凌云",
cityno: "lingyun",
cityid: "101301011",
area_1: "广西",
area_2: "百色",
area_3: "凌云"
},
1269: {
weaid: "1269",
citynm: "盐源",
cityno: "yanyuan",
cityid: "101271604",
area_1: "四川",
area_2: "凉山",
area_3: "盐源"
},
1270: {
weaid: "1270",
citynm: "临泽",
cityno: "linze",
cityid: "101160704",
area_1: "甘肃",
area_2: "张掖",
area_3: "临泽"
},
1271: {
weaid: "1271",
citynm: "辽中",
cityno: "liaozhong",
cityid: "101070103",
area_1: "辽宁",
area_2: "沈阳",
area_3: "辽中"
},
1272: {
weaid: "1272",
citynm: "莱州",
cityno: "laizhou",
cityid: "101120502",
area_1: "山东",
area_2: "烟台",
area_3: "莱州"
},
1273: {
weaid: "1273",
citynm: "连州",
cityno: "lianzhou",
cityid: "101281303",
area_1: "广东",
area_2: "清远",
area_3: "连州"
},
1274: {
weaid: "1274",
citynm: "龙州",
cityno: "longzhou",
cityid: "101300203",
area_1: "广西",
area_2: "崇左",
area_3: "龙州"
},
1275: {
weaid: "1275",
citynm: "鹿寨",
cityno: "luzhai",
cityid: "101300304",
area_1: "广西",
area_2: "柳州",
area_3: "鹿寨"
},
1276: {
weaid: "1276",
citynm: "乐至",
cityno: "lezhi",
cityid: "101271303",
area_1: "四川",
area_2: "资阳",
area_3: "乐至"
},
1277: {
weaid: "1277",
citynm: "六枝",
cityno: "liuzhi",
cityid: "101260802",
area_1: "贵州",
area_2: "六盘水",
area_3: "六枝"
},
1278: {
weaid: "1278",
citynm: "雷州",
cityno: "leizhou",
cityid: "101281003",
area_1: "广东",
area_2: "湛江",
area_3: "雷州"
},
1279: {
weaid: "1279",
citynm: "拉孜",
cityno: "lazi",
cityid: "101140202",
area_1: "西藏",
area_2: "日喀则",
area_3: "拉孜"
},
1280: {
weaid: "1280",
citynm: "隆子",
cityno: "longzi",
cityid: "101140307",
area_1: "西藏",
area_2: "山南",
area_3: "隆子"
},
1281: {
weaid: "1281",
citynm: "临淄",
cityno: "linzi",
cityid: "101120308",
area_1: "山东",
area_2: "淄博",
area_3: "临淄"
},
1282: {
weaid: "1282",
citynm: "马边",
cityno: "mabian",
cityid: "101271407",
area_1: "四川",
area_2: "乐山",
area_3: "马边"
},
1283: {
weaid: "1283",
citynm: "满城",
cityno: "mancheng",
cityid: "101090202",
area_1: "河北",
area_2: "保定",
area_3: "满城"
},
1284: {
weaid: "1284",
citynm: "蒙城",
cityno: "mengcheng",
cityid: "101220904",
area_1: "安徽",
area_2: "亳州",
area_3: "蒙城"
},
1285: {
weaid: "1285",
citynm: "麻城",
cityno: "macheng",
cityid: "101200503",
area_1: "湖北",
area_2: "黄冈",
area_3: "麻城"
},
1286: {
weaid: "1286",
citynm: "渑池",
cityno: "shengchi",
cityid: "101181703",
area_1: "河南",
area_2: "三门峡",
area_3: "渑池"
},
1287: {
weaid: "1287",
citynm: "沐川",
cityno: "muchuan",
cityid: "101271405",
area_1: "四川",
area_2: "乐山",
area_3: "沐川"
},
1288: {
weaid: "1288",
citynm: "牟定",
cityno: "mouding",
cityid: "101290805",
area_1: "云南",
area_2: "楚雄",
area_3: "牟定"
},
1289: {
weaid: "1289",
citynm: "弥渡",
cityno: "midu",
cityid: "101290206",
area_1: "云南",
area_2: "大理",
area_3: "弥渡"
},
1290: {
weaid: "1290",
citynm: "玛多",
cityno: "maduo",
cityid: "101150506",
area_1: "青海",
area_2: "果洛",
area_3: "玛多"
},
1291: {
weaid: "1291",
citynm: "马尔康",
cityno: "maerkang",
cityid: "101271910",
area_1: "四川",
area_2: "阿坝",
area_3: "马尔康"
},
1292: {
weaid: "1292",
citynm: "民丰",
cityno: "minfeng",
cityid: "101131306",
area_1: "新疆",
area_2: "和田",
area_3: "民丰"
},
1293: {
weaid: "1293",
citynm: "麦盖提",
cityno: "maigaiti",
cityid: "101130904",
area_1: "新疆",
area_2: "喀什",
area_3: "麦盖提"
},
1294: {
weaid: "1294",
citynm: "明光",
cityno: "mingguang",
cityid: "101221103",
area_1: "安徽",
area_2: "滁州",
area_3: "明光"
},
1295: {
weaid: "1295",
citynm: "马关",
cityno: "maguan",
cityid: "101290603",
area_1: "云南",
area_2: "文山",
area_3: "马关"
},
1296: {
weaid: "1296",
citynm: "美姑",
cityno: "meigu",
cityid: "101271618",
area_1: "四川",
area_2: "凉山",
area_3: "美姑"
},
1297: {
weaid: "1297",
citynm: "勐海",
cityno: "menghai",
cityid: "101291603",
area_1: "云南",
area_2: "西双版纳",
area_3: "勐海"
},
1298: {
weaid: "1298",
citynm: "民和",
cityno: "minhe",
cityid: "101150203",
area_1: "青海",
area_2: "海东",
area_3: "民和"
},
1299: {
weaid: "1299",
citynm: "漠河",
cityno: "mohe",
cityid: "101050703",
area_1: "黑龙江",
area_2: "大兴安岭",
area_3: "漠河"
},
1300: {
weaid: "1300",
citynm: "梅河口",
cityno: "meihekou",
cityid: "101060502",
area_1: "吉林",
area_2: "通化",
area_3: "梅河口"
},
1301: {
weaid: "1301",
citynm: "麻江",
cityno: "majiang",
cityid: "101260507",
area_1: "贵州",
area_2: "黔东南",
area_3: "麻江"
},
1302: {
weaid: "1302",
citynm: "墨江",
cityno: "mojiang",
cityid: "101290906",
area_1: "云南",
area_2: "普洱",
area_3: "墨江"
},
1303: {
weaid: "1303",
citynm: "芒康",
cityno: "mangkang",
cityid: "101140506",
area_1: "西藏",
area_2: "昌都",
area_3: "芒康"
},
1304: {
weaid: "1304",
citynm: "木兰",
cityno: "mulan",
cityid: "101050113",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "木兰"
},
1305: {
weaid: "1305",
citynm: "勐腊",
cityno: "mengla",
cityid: "101291605",
area_1: "云南",
area_2: "西双版纳",
area_3: "勐腊"
},
1306: {
weaid: "1306",
citynm: "弥勒",
cityno: "mile",
cityid: "101290304",
area_1: "云南",
area_2: "红河",
area_3: "弥勒"
},
1307: {
weaid: "1307",
citynm: "民乐",
cityno: "minle",
cityid: "101160703",
area_1: "甘肃",
area_2: "张掖",
area_3: "民乐"
},
1308: {
weaid: "1308",
citynm: "木垒",
cityno: "mulei",
cityid: "101130408",
area_1: "新疆",
area_2: "昌吉",
area_3: "木垒"
},
1309: {
weaid: "1309",
citynm: "穆棱",
cityno: "muling",
cityid: "101050303",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "穆棱"
},
1310: {
weaid: "1310",
citynm: "孟连",
cityno: "menglian",
cityid: "101290908",
area_1: "云南",
area_2: "普洱",
area_3: "孟连"
},
1311: {
weaid: "1311",
citynm: "平湖",
cityno: "pinghu",
cityid: "101210305",
area_1: "浙江",
area_2: "嘉兴",
area_3: "平湖"
},
1312: {
weaid: "1312",
citynm: "马龙",
cityno: "malong",
cityid: "101290405",
area_1: "云南",
area_2: "曲靖",
area_3: "马龙"
},
1315: {
weaid: "1315",
citynm: "麻栗坡",
cityno: "malipo",
cityid: "101290604",
area_1: "云南",
area_2: "文山",
area_3: "麻栗坡"
},
1316: {
weaid: "1316",
citynm: "莫力达瓦旗",
cityno: "molidawaqi",
cityid: "101081004",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "莫力达瓦"
},
1317: {
weaid: "1317",
citynm: "汨罗",
cityno: "miluo",
cityid: "101251004",
area_1: "湖南",
area_2: "岳阳",
area_3: "汨罗"
},
1318: {
weaid: "1318",
citynm: "冕宁",
cityno: "mianning",
cityid: "101271614",
area_1: "四川",
area_2: "凉山",
area_3: "冕宁"
},
1319: {
weaid: "1319",
citynm: "玛纳斯",
cityno: "manasi",
cityid: "101130407",
area_1: "新疆",
area_2: "昌吉",
area_3: "玛纳斯"
},
1320: {
weaid: "1320",
citynm: "牟平",
cityno: "mouping",
cityid: "101120509",
area_1: "山东",
area_2: "烟台",
area_3: "牟平"
},
1321: {
weaid: "1321",
citynm: "闽清",
cityno: "minqing",
cityid: "101230102",
area_1: "福建",
area_2: "福州",
area_3: "闽清"
},
1322: {
weaid: "1322",
citynm: "民勤",
cityno: "minqin",
cityid: "101160502",
area_1: "甘肃",
area_2: "武威",
area_3: "民勤"
},
1324: {
weaid: "1324",
citynm: "民权",
cityno: "minquan",
cityid: "101181004",
area_1: "河南",
area_2: "商丘",
area_3: "民权"
},
1325: {
weaid: "1325",
citynm: "玛曲",
cityno: "maqu",
cityid: "101161206",
area_1: "甘肃",
area_2: "甘南",
area_3: "玛曲"
},
1327: {
weaid: "1327",
citynm: "密山",
cityno: "mishan",
cityid: "101051103",
area_1: "黑龙江",
area_2: "鸡西",
area_3: "密山"
},
1328: {
weaid: "1328",
citynm: "明水",
cityno: "mingshui",
cityid: "101050505",
area_1: "黑龙江",
area_2: "绥化",
area_3: "明水"
},
1329: {
weaid: "1329",
citynm: "马山",
cityno: "mashan",
cityid: "101300106",
area_1: "广西",
area_2: "南宁",
area_3: "马山"
},
1330: {
weaid: "1330",
citynm: "蒙山",
cityno: "mengshan",
cityid: "101300605",
area_1: "广西",
area_2: "梧州",
area_3: "蒙山"
},
1331: {
weaid: "1331",
citynm: "名山",
cityno: "mingshan",
cityid: "101271702",
area_1: "四川",
area_2: "雅安",
area_3: "名山"
},
1332: {
weaid: "1332",
citynm: "湄潭",
cityno: "meitan",
cityid: "101260205",
area_1: "贵州",
area_2: "遵义",
area_3: "湄潭"
},
1333: {
weaid: "1333",
citynm: "明溪",
cityno: "mingxi",
cityid: "101230807",
area_1: "福建",
area_2: "三明",
area_3: "明溪"
},
1334: {
weaid: "1334",
citynm: "勉县",
cityno: "mianxian",
cityid: "101110803",
area_1: "陕西",
area_2: "汉中",
area_3: "勉县"
},
1335: {
weaid: "1335",
citynm: "眉县",
cityno: "meixian",
cityid: "101110908",
area_1: "陕西",
area_2: "宝鸡",
area_3: "眉县"
},
1336: {
weaid: "1336",
citynm: "岷县",
cityno: "minxian",
cityid: "101160207",
area_1: "甘肃",
area_2: "定西",
area_3: "岷县"
},
1337: {
weaid: "1337",
citynm: "茂县",
cityno: "maoxian",
cityid: "101271904",
area_1: "四川",
area_2: "阿坝",
area_3: "茂县"
},
1338: {
weaid: "1338",
citynm: "麻阳",
cityno: "mayang",
cityid: "101251208",
area_1: "湖南",
area_2: "怀化",
area_3: "麻阳"
},
1339: {
weaid: "1339",
citynm: "茫崖",
cityno: "mangya",
cityid: "101150712",
area_1: "青海",
area_2: "海西",
area_3: "茫崖"
},
1340: {
weaid: "1340",
citynm: "蒙阴",
cityno: "mengyin",
cityid: "101120907",
area_1: "山东",
area_2: "临沂",
area_3: "蒙阴"
},
1341: {
weaid: "1341",
citynm: "米易",
cityno: "miyi",
cityid: "101270203",
area_1: "四川",
area_2: "攀枝花",
area_3: "米易"
},
1342: {
weaid: "1342",
citynm: "门源",
cityno: "menyuan",
cityid: "101150802",
area_1: "青海",
area_2: "海北",
area_3: "门源"
},
1343: {
weaid: "1343",
citynm: "墨玉",
cityno: "moyu",
cityid: "101131304",
area_1: "新疆",
area_2: "和田",
area_3: "墨玉"
},
1344: {
weaid: "1344",
citynm: "米脂",
cityno: "mizhi",
cityid: "101110408",
area_1: "陕西",
area_2: "榆林",
area_3: "米脂"
},
1345: {
weaid: "1345",
citynm: "绵竹",
cityno: "mianzhu",
cityid: "101272005",
area_1: "四川",
area_2: "德阳",
area_3: "绵竹"
},
1346: {
weaid: "1346",
citynm: "蒙自",
cityno: "mengzi",
cityid: "101290309",
area_1: "云南",
area_2: "红河",
area_3: "蒙自"
},
1347: {
weaid: "1347",
citynm: "满洲里",
cityno: "manzhouli",
cityid: "101081010",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "满洲里"
},
1348: {
weaid: "1348",
citynm: "宁安",
cityno: "ningan",
cityid: "101050306",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "宁安"
},
1349: {
weaid: "1349",
citynm: "农安",
cityno: "nongan",
cityid: "101060102",
area_1: "吉林",
area_2: "长春",
area_3: "农安"
},
1350: {
weaid: "1350",
citynm: "南安",
cityno: "nanan",
cityid: "101230506",
area_1: "福建",
area_2: "泉州",
area_3: "南安"
},
1351: {
weaid: "1351",
citynm: "南澳",
cityno: "nanao",
cityid: "101280504",
area_1: "广东",
area_2: "汕头",
area_3: "南澳"
},
1352: {
weaid: "1352",
citynm: "那坡",
cityno: "napo",
cityid: "101301002",
area_1: "广西",
area_2: "百色",
area_3: "那坡"
},
1353: {
weaid: "1353",
citynm: "南部",
cityno: "nanbu",
cityid: "101270502",
area_1: "四川",
area_2: "南充",
area_3: "南部"
},
1354: {
weaid: "1354",
citynm: "宁城",
cityno: "ningcheng",
cityid: "101080613",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "宁城"
},
1355: {
weaid: "1355",
citynm: "南城",
cityno: "nancheng",
cityid: "101240408",
area_1: "江西",
area_2: "抚州",
area_3: "南城"
},
1356: {
weaid: "1356",
citynm: "南丹",
cityno: "nandan",
cityid: "101301209",
area_1: "广西",
area_2: "河池",
area_3: "南丹"
},
1357: {
weaid: "1357",
citynm: "宁都",
cityno: "ningdu",
cityid: "101240707",
area_1: "江西",
area_2: "赣州",
area_3: "宁都"
},
1358: {
weaid: "1358",
citynm: "南丰",
cityno: "nanfeng",
cityid: "101240409",
area_1: "江西",
area_2: "抚州",
area_3: "南丰"
},
1360: {
weaid: "1360",
citynm: "南宫",
cityno: "nangong",
cityid: "101090916",
area_1: "河北",
area_2: "邢台",
area_3: "南宫"
},
1361: {
weaid: "1361",
citynm: "宁国",
cityno: "ningguo",
cityid: "101221404",
area_1: "安徽",
area_2: "宣城",
area_3: "宁国"
},
1362: {
weaid: "1362",
citynm: "宁海",
cityno: "ninghai",
cityid: "101210408",
area_1: "浙江",
area_2: "宁波",
area_3: "宁海"
},
1363: {
weaid: "1363",
citynm: "南海",
cityno: "nanhai",
cityid: "101280803",
area_1: "广东",
area_2: "佛山",
area_3: "南海"
},
1364: {
weaid: "1364",
citynm: "讷河",
cityno: "nehe",
cityid: "101050202",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "讷河"
},
1365: {
weaid: "1365",
citynm: "宁化",
cityno: "ninghua",
cityid: "101230802",
area_1: "福建",
area_2: "三明",
area_3: "宁化"
},
1366: {
weaid: "1366",
citynm: "内黄",
cityno: "nahuang",
cityid: "101180204",
area_1: "河南",
area_2: "安阳",
area_3: "内黄"
},
1367: {
weaid: "1367",
citynm: "南华",
cityno: "nanhua",
cityid: "101290806",
area_1: "云南",
area_2: "楚雄",
area_3: "南华"
},
1368: {
weaid: "1368",
citynm: "嫩江",
cityno: "nenjiang",
cityid: "101050602",
area_1: "黑龙江",
area_2: "黑河",
area_3: "嫩江"
},
1369: {
weaid: "1369",
citynm: "宁津",
cityno: "ningjin",
cityid: "101120409",
area_1: "山东",
area_2: "德州",
area_3: "宁津"
},
1370: {
weaid: "1370",
citynm: "南靖",
cityno: "fjnanjing",
cityid: "101230603",
area_1: "福建",
area_2: "漳州",
area_3: "南靖"
},
1371: {
weaid: "1371",
citynm: "南江",
cityno: "nanjiang",
cityid: "101270903",
area_1: "四川",
area_2: "巴中",
area_3: "南江"
},
1372: {
weaid: "1372",
citynm: "南涧",
cityno: "nanjian",
cityid: "101290212",
area_1: "云南",
area_2: "大理",
area_3: "南涧"
},
1373: {
weaid: "1373",
citynm: "南康",
cityno: "nankang",
cityid: "101240704",
area_1: "江西",
area_2: "赣州",
area_3: "南康"
},
1374: {
weaid: "1374",
citynm: "宁蒗",
cityno: "ninglang",
cityid: "101291404",
area_1: "云南",
area_2: "丽江",
area_3: "宁蒗"
},
1375: {
weaid: "1375",
citynm: "南乐",
cityno: "nanle",
cityid: "101181303",
area_1: "河南",
area_2: "濮阳",
area_3: "南乐"
},
1376: {
weaid: "1376",
citynm: "南陵",
cityno: "nanling",
cityid: "101220304",
area_1: "安徽",
area_2: "芜湖",
area_3: "南陵"
},
1377: {
weaid: "1377",
citynm: "宁陵",
cityno: "ningling",
cityid: "101181007",
area_1: "河南",
area_2: "商丘",
area_3: "宁陵"
},
1378: {
weaid: "1378",
citynm: "尼勒克",
cityno: "nileke",
cityid: "101131003",
area_1: "新疆",
area_2: "伊犁",
area_3: "尼勒克"
},
1379: {
weaid: "1379",
citynm: "聂拉木",
cityno: "nielamu",
cityid: "101140204",
area_1: "西藏",
area_2: "日喀则",
area_3: "聂拉木"
},
1380: {
weaid: "1380",
citynm: "宁明",
cityno: "ningming",
cityid: "101300207",
area_1: "广西",
area_2: "崇左",
area_3: "宁明"
},
1381: {
weaid: "1381",
citynm: "南木林",
cityno: "nanmulin",
cityid: "101140203",
area_1: "西藏",
area_2: "日喀则",
area_3: "南木林"
},
1382: {
weaid: "1382",
citynm: "奈曼旗",
cityno: "naimanqi",
cityid: "101080508",
area_1: "内蒙古",
area_2: "通辽",
area_3: "奈曼"
},
1383: {
weaid: "1383",
citynm: "尼木",
cityno: "nimu",
cityid: "101140103",
area_1: "西藏",
area_2: "拉萨",
area_3: "尼木"
},
1384: {
weaid: "1384",
citynm: "宁南",
cityno: "ningnan",
cityid: "101271608",
area_1: "四川",
area_2: "凉山",
area_3: "宁南"
},
1386: {
weaid: "1386",
citynm: "宁强",
cityno: "ningqiang",
cityid: "101110809",
area_1: "陕西",
area_2: "汉中",
area_3: "宁强"
},
1387: {
weaid: "1387",
citynm: "宁陕",
cityno: "ningshan",
cityid: "101110710",
area_1: "陕西",
area_2: "安康",
area_3: "宁陕"
},
1388: {
weaid: "1388",
citynm: "宁武",
cityno: "ningwu",
cityid: "101101007",
area_1: "山西",
area_2: "忻州",
area_3: "宁武"
},
1389: {
weaid: "1389",
citynm: "内乡",
cityno: "naxiang",
cityid: "101180706",
area_1: "河南",
area_2: "南阳",
area_3: "内乡"
},
1390: {
weaid: "1390",
citynm: "宁乡",
cityno: "ningxiang",
cityid: "101250102",
area_1: "湖南",
area_2: "长沙",
area_3: "宁乡"
},
1391: {
weaid: "1391",
citynm: "南县",
cityno: "nanxian",
cityid: "101250702",
area_1: "湖南",
area_2: "益阳",
area_3: "南县"
},
1392: {
weaid: "1392",
citynm: "南雄",
cityno: "nanxiong",
cityid: "101280207",
area_1: "广东",
area_2: "韶关",
area_3: "南雄"
},
1393: {
weaid: "1393",
citynm: "纳溪",
cityno: "naxi",
cityid: "101271007",
area_1: "四川",
area_2: "泸州",
area_3: "纳溪"
},
1394: {
weaid: "1394",
citynm: "南溪",
cityno: "nanxi",
cityid: "101271104",
area_1: "四川",
area_2: "宜宾",
area_3: "南溪"
},
1395: {
weaid: "1395",
citynm: "宁县",
cityno: "ningxian",
cityid: "101160407",
area_1: "甘肃",
area_2: "庆阳",
area_3: "宁县"
},
1396: {
weaid: "1396",
citynm: "宁阳",
cityno: "ningyang",
cityid: "101120806",
area_1: "山东",
area_2: "泰安",
area_3: "宁阳"
},
1397: {
weaid: "1397",
citynm: "纳雍",
cityno: "nayong",
cityid: "101260706",
area_1: "贵州",
area_2: "毕节",
area_3: "纳雍"
},
1398: {
weaid: "1398",
citynm: "宁远",
cityno: "ningyuan",
cityid: "101251406",
area_1: "湖南",
area_2: "永州",
area_3: "宁远"
},
1399: {
weaid: "1399",
citynm: "南召",
cityno: "nanzhao",
cityid: "101180702",
area_1: "河南",
area_2: "南阳",
area_3: "南召"
},
1400: {
weaid: "1400",
citynm: "南漳",
cityno: "nanzhang",
cityid: "101200204",
area_1: "湖北",
area_2: "襄阳",
area_3: "南漳"
},
1401: {
weaid: "1401",
citynm: "南郑",
cityno: "nanzheng",
cityid: "101110810",
area_1: "陕西",
area_2: "汉中",
area_3: "南郑"
},
1402: {
weaid: "1402",
citynm: "磐安",
cityno: "panan",
cityid: "101210908",
area_1: "浙江",
area_2: "金华",
area_3: "磐安"
},
1403: {
weaid: "1403",
citynm: "蓬安",
cityno: "pengan",
cityid: "101270504",
area_1: "四川",
area_2: "南充",
area_3: "蓬安"
},
1404: {
weaid: "1404",
citynm: "普安",
cityno: "puan",
cityid: "101260909",
area_1: "贵州",
area_2: "黔西南",
area_3: "普安"
},
1406: {
weaid: "1406",
citynm: "平坝",
cityno: "pingba",
cityid: "101260304",
area_1: "贵州",
area_2: "安顺",
area_3: "平坝"
},
1407: {
weaid: "1407",
citynm: "浦北",
cityno: "pubei",
cityid: "101301102",
area_1: "广西",
area_2: "钦州",
area_3: "浦北"
},
1408: {
weaid: "1408",
citynm: "屏边",
cityno: "pingbian",
cityid: "101290310",
area_1: "云南",
area_2: "红河",
area_3: "屏边"
},
1409: {
weaid: "1409",
citynm: "浦城",
cityno: "fjpucheng",
cityid: "101230906",
area_1: "福建",
area_2: "南平",
area_3: "浦城"
},
1410: {
weaid: "1410",
citynm: "平昌",
cityno: "pingchang",
cityid: "101270904",
area_1: "四川",
area_2: "巴中",
area_3: "平昌"
},
1411: {
weaid: "1411",
citynm: "蒲城",
cityno: "pucheng",
cityid: "101110507",
area_1: "陕西",
area_2: "渭南",
area_3: "蒲城"
},
1412: {
weaid: "1412",
citynm: "平定",
cityno: "pingding",
cityid: "101100303",
area_1: "山西",
area_2: "阳泉",
area_3: "平定"
},
1413: {
weaid: "1413",
citynm: "普定",
cityno: "puding",
cityid: "101260302",
area_1: "贵州",
area_2: "安顺",
area_3: "普定"
},
1414: {
weaid: "1414",
citynm: "平度",
cityno: "pingdu",
cityid: "101120208",
area_1: "山东",
area_2: "青岛",
area_3: "平度"
},
1415: {
weaid: "1415",
citynm: "偏关",
cityno: "pianguan",
cityid: "101101005",
area_1: "山西",
area_2: "忻州",
area_3: "偏关"
},
1416: {
weaid: "1416",
citynm: "平果",
cityno: "pingguo",
cityid: "101301007",
area_1: "广西",
area_2: "百色",
area_3: "平果"
},
1417: {
weaid: "1417",
citynm: "平和",
cityno: "pinghe",
cityid: "101230604",
area_1: "福建",
area_2: "漳州",
area_3: "平和"
},
1418: {
weaid: "1418",
citynm: "浦江",
cityno: "zjpujiang",
cityid: "101210902",
area_1: "浙江",
area_2: "金华",
area_3: "浦江"
},
1419: {
weaid: "1419",
citynm: "平江",
cityno: "pingjiang",
cityid: "101251005",
area_1: "湖南",
area_2: "岳阳",
area_3: "平江"
},
1420: {
weaid: "1420",
citynm: "蒲江",
cityno: "pujiang",
cityid: "101270109",
area_1: "四川",
area_2: "成都",
area_3: "蒲江"
},
1421: {
weaid: "1421",
citynm: "蓬莱",
cityno: "penglai",
cityid: "101120504",
area_1: "山东",
area_2: "烟台",
area_3: "蓬莱"
},
1422: {
weaid: "1422",
citynm: "普兰",
cityno: "pulan",
cityid: "101140705",
area_1: "西藏",
area_2: "阿里",
area_3: "普兰"
},
1423: {
weaid: "1423",
citynm: "普兰店",
cityno: "pulandian",
cityid: "101070204",
area_1: "辽宁",
area_2: "大连",
area_3: "普兰店"
},
1424: {
weaid: "1424",
citynm: "平乐",
cityno: "pingle",
cityid: "101300512",
area_1: "广西",
area_2: "桂林",
area_3: "平乐"
},
1425: {
weaid: "1425",
citynm: "平利",
cityno: "pingli",
cityid: "101110707",
area_1: "陕西",
area_2: "安康",
area_3: "平利"
},
1426: {
weaid: "1426",
citynm: "平陆",
cityno: "pinglu",
cityid: "101100813",
area_1: "山西",
area_2: "运城",
area_3: "平陆"
},
1427: {
weaid: "1427",
citynm: "平罗",
cityno: "pingluo",
cityid: "101170203",
area_1: "宁夏",
area_2: "石嘴山",
area_3: "平罗"
},
1428: {
weaid: "1428",
citynm: "屏南",
cityno: "pingnan",
cityid: "101230309",
area_1: "福建",
area_2: "宁德",
area_3: "屏南"
},
1429: {
weaid: "1429",
citynm: "平南",
cityno: "gxpingnan",
cityid: "101300803",
area_1: "广西",
area_2: "贵港",
area_3: "平南"
},
1430: {
weaid: "1430",
citynm: "普宁",
cityno: "puning",
cityid: "101281903",
area_1: "广东",
area_2: "揭阳",
area_3: "普宁"
},
1431: {
weaid: "1431",
citynm: "平泉",
cityno: "pingquan",
cityid: "101090405",
area_1: "河北",
area_2: "承德",
area_3: "平泉"
},
1432: {
weaid: "1432",
citynm: "磐石",
cityno: "panshi",
cityid: "101060205",
area_1: "吉林",
area_2: "磐石",
area_3: ""
},
1433: {
weaid: "1433",
citynm: "盘山",
cityno: "panshan",
cityid: "101071303",
area_1: "辽宁",
area_2: "盘锦",
area_3: "盘山"
},
1434: {
weaid: "1434",
citynm: "平山",
cityno: "pingshan",
cityid: "101090111",
area_1: "河北",
area_2: "石家庄",
area_3: "平山"
},
1435: {
weaid: "1435",
citynm: "平顺",
cityno: "pingshun",
cityid: "101100506",
area_1: "山西",
area_2: "长治",
area_3: "平顺"
},
1436: {
weaid: "1436",
citynm: "屏山",
cityno: "scpingshan",
cityid: "101271111",
area_1: "四川",
area_2: "宜宾",
area_3: "屏山"
},
1437: {
weaid: "1437",
citynm: "皮山",
cityno: "pishan",
cityid: "101131302",
area_1: "新疆",
area_2: "和田",
area_3: "皮山"
},
1438: {
weaid: "1438",
citynm: "彭山",
cityno: "pengshan",
cityid: "101271503",
area_1: "四川",
area_2: "眉山",
area_3: "彭山"
},
1440: {
weaid: "1440",
citynm: "平潭",
cityno: "pingtan",
cityid: "101230108",
area_1: "福建",
area_2: "福州",
area_3: "平潭"
},
1441: {
weaid: "1441",
citynm: "平塘",
cityno: "pingtang",
cityid: "101260409",
area_1: "贵州",
area_2: "黔南",
area_3: "平塘"
},
1442: {
weaid: "1442",
citynm: "普陀",
cityno: "putuo",
cityid: "101211105",
area_1: "浙江",
area_2: "舟山",
area_3: "普陀"
},
1443: {
weaid: "1443",
citynm: "平武",
cityno: "pingwu",
cityid: "101270407",
area_1: "四川",
area_2: "绵阳",
area_3: "平武"
},
1444: {
weaid: "1444",
citynm: "蒲县",
cityno: "puxian",
cityid: "101100708",
area_1: "山西",
area_2: "临汾",
area_3: "蒲县"
},
1445: {
weaid: "1445",
citynm: "沛县",
cityno: "peixian",
cityid: "101190804",
area_1: "江苏",
area_2: "徐州",
area_3: "沛县"
},
1446: {
weaid: "1446",
citynm: "凭祥",
cityno: "pingxiang",
cityid: "101300204",
area_1: "广西",
area_2: "崇左",
area_3: "凭祥"
},
1447: {
weaid: "1447",
citynm: "郫县",
cityno: "pixian",
cityid: "101270107",
area_1: "四川",
area_2: "成都",
area_3: "郫县"
},
1448: {
weaid: "1448",
citynm: "蓬溪",
cityno: "pengxi",
cityid: "101270702",
area_1: "四川",
area_2: "遂宁",
area_3: "蓬溪"
},
1449: {
weaid: "1449",
citynm: "盘县",
cityno: "panxian",
cityid: "101260804",
area_1: "贵州",
area_2: "六盘水",
area_3: "盘县"
},
1450: {
weaid: "1450",
citynm: "平遥",
cityno: "pingyao",
cityid: "101100410",
area_1: "山西",
area_2: "晋中",
area_3: "平遥"
},
1451: {
weaid: "1451",
citynm: "平阳",
cityno: "pingyang",
cityid: "101210704",
area_1: "浙江",
area_2: "温州",
area_3: "平阳"
},
1453: {
weaid: "1453",
citynm: "宾阳",
cityno: "binyang",
cityid: "101300109",
area_1: "广西",
area_2: "南宁",
area_3: "宾阳"
},
1454: {
weaid: "1454",
citynm: "彭阳",
cityno: "pengyang",
cityid: "101170406",
area_1: "宁夏",
area_2: "固原",
area_3: "彭阳"
},
1455: {
weaid: "1455",
citynm: "平阴",
cityno: "pingyin",
cityid: "101120105",
area_1: "山东",
area_2: "济南",
area_3: "平阴"
},
1456: {
weaid: "1456",
citynm: "平邑",
cityno: "pingyi",
cityid: "101120908",
area_1: "山东",
area_2: "临沂",
area_3: "平邑"
},
1457: {
weaid: "1457",
citynm: "平原",
cityno: "sdpingyuan",
cityid: "101120408",
area_1: "山东",
area_2: "德州",
area_3: "平原"
},
1458: {
weaid: "1458",
citynm: "平远",
cityno: "pingyuan",
cityid: "101280407",
area_1: "广东",
area_2: "梅州",
area_3: "平远"
},
1459: {
weaid: "1459",
citynm: "平舆",
cityno: "pingyu",
cityid: "101181607",
area_1: "河南",
area_2: "驻马店",
area_3: "平舆"
},
1460: {
weaid: "1460",
citynm: "彭泽",
cityno: "pengze",
cityid: "101240208",
area_1: "江西",
area_2: "九江",
area_3: "彭泽"
},
1461: {
weaid: "1461",
citynm: "邳州",
cityno: "pizhou",
cityid: "101190805",
area_1: "江苏",
area_2: "徐州",
area_3: "邳州"
},
1462: {
weaid: "1462",
citynm: "彭州",
cityno: "pengzhou",
cityid: "101270112",
area_1: "四川",
area_2: "成都",
area_3: "彭州"
},
1463: {
weaid: "1463",
citynm: "庆安",
cityno: "qingan",
cityid: "101050509",
area_1: "黑龙江",
area_2: "绥化",
area_3: "庆安"
},
1464: {
weaid: "1464",
citynm: "乾安",
cityno: "jlqianan",
cityid: "101060802",
area_1: "吉林",
area_2: "松原",
area_3: "乾安"
},
1465: {
weaid: "1465",
citynm: "秦安",
cityno: "qinan",
cityid: "101160904",
area_1: "甘肃",
area_2: "天水",
area_3: "秦安"
},
1466: {
weaid: "1466",
citynm: "迁安",
cityno: "qianan",
cityid: "101090511",
area_1: "河北",
area_2: "唐山",
area_3: "迁安"
},
1467: {
weaid: "1467",
citynm: "丘北",
cityno: "qiubei",
cityid: "101290606",
area_1: "云南",
area_2: "文山",
area_3: "丘北"
},
1468: {
weaid: "1468",
citynm: "蕲春",
cityno: "qinchun",
cityid: "101200507",
area_1: "湖北",
area_2: "黄冈",
area_3: "蕲春"
},
1469: {
weaid: "1469",
citynm: "青川",
cityno: "qingchuan",
cityid: "101272103",
area_1: "四川",
area_2: "广元",
area_3: "青川"
},
1470: {
weaid: "1470",
citynm: "启东",
cityno: "jsqidong",
cityid: "101190507",
area_1: "江苏",
area_2: "南通",
area_3: "启东"
},
1471: {
weaid: "1471",
citynm: "祁东",
cityno: "qidong",
cityid: "101250404",
area_1: "湖南",
area_2: "衡阳",
area_3: "祁东"
},
1472: {
weaid: "1472",
citynm: "清丰",
cityno: "qingfeng",
cityid: "101181304",
area_1: "河南",
area_2: "濮阳",
area_3: "清丰"
},
1473: {
weaid: "1473",
citynm: "曲阜",
cityno: "qufu",
cityid: "101120710",
area_1: "山东",
area_2: "济宁",
area_3: "曲阜"
},
1474: {
weaid: "1474",
citynm: "青冈",
cityno: "qinggang",
cityid: "101050508",
area_1: "黑龙江",
area_2: "绥化",
area_3: "青冈"
},
1475: {
weaid: "1475",
citynm: "青河",
cityno: "qinghe",
cityid: "101131409",
area_1: "新疆",
area_2: "阿勒泰",
area_3: "青河"
},
1476: {
weaid: "1476",
citynm: "全椒",
cityno: "quanjiao",
cityid: "101221105",
area_1: "安徽",
area_2: "滁州",
area_3: "全椒"
},
1477: {
weaid: "1477",
citynm: "曲江",
cityno: "qujiang",
cityid: "101280209",
area_1: "广东",
area_2: "韶关",
area_3: "曲江"
},
1478: {
weaid: "1478",
citynm: "巧家",
cityno: "qiaojia",
cityid: "101291006",
area_1: "云南",
area_2: "昭通",
area_3: "巧家"
},
1479: {
weaid: "1479",
citynm: "清涧",
cityno: "qingjian",
cityid: "101110412",
area_1: "陕西",
area_2: "榆林",
area_3: "清涧"
},
1480: {
weaid: "1480",
citynm: "邛崃",
cityno: "qionglai",
cityid: "101270113",
area_1: "四川",
area_2: "成都",
area_3: "邛崃"
},
1481: {
weaid: "1481",
citynm: "祁连",
cityno: "qilian",
cityid: "101150803",
area_1: "青海",
area_2: "海北",
area_3: "祁连"
},
1482: {
weaid: "1482",
citynm: "清流",
cityno: "qingliu",
cityid: "101230803",
area_1: "福建",
area_2: "三明",
area_3: "清流"
},
1483: {
weaid: "1483",
citynm: "晴隆",
cityno: "qinglong",
cityid: "101260902",
area_1: "贵州",
area_2: "黔西南",
area_3: "晴隆"
},
1484: {
weaid: "1484",
citynm: "祁门",
cityno: "qimen",
cityid: "101221004",
area_1: "安徽",
area_2: "黄山",
area_3: "祁门"
},
1485: {
weaid: "1485",
citynm: "曲麻莱",
cityno: "qumalai",
cityid: "101150606",
area_1: "青海",
area_2: "玉树",
area_3: "曲麻莱"
},
1486: {
weaid: "1486",
citynm: "且末",
cityno: "qiemo",
cityid: "101130605",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "且末"
},
1487: {
weaid: "1487",
citynm: "全南",
cityno: "quannan",
cityid: "101240713",
area_1: "江西",
area_2: "赣州",
area_3: "全南"
},
1488: {
weaid: "1488",
citynm: "沁水",
cityno: "qinshui",
cityid: "101100602",
area_1: "山西",
area_2: "晋城",
area_3: "沁水"
},
1490: {
weaid: "1490",
citynm: "潜山",
cityno: "ahqianshan",
cityid: "101220604",
area_1: "安徽",
area_2: "安庆",
area_3: "潜山"
},
1491: {
weaid: "1491",
citynm: "铅山",
cityno: "qianshan",
cityid: "101240311",
area_1: "江西",
area_2: "上饶",
area_3: "铅山"
},
1492: {
weaid: "1492",
citynm: "岐山",
cityno: "qishan",
cityid: "101110905",
area_1: "陕西",
area_2: "宝鸡",
area_3: "岐山"
},
1493: {
weaid: "1493",
citynm: "清水",
cityno: "qingshui",
cityid: "101160903",
area_1: "甘肃",
area_2: "天水",
area_3: "清水"
},
1494: {
weaid: "1494",
citynm: "确山",
cityno: "queshan",
cityid: "101181609",
area_1: "河南",
area_2: "驻马店",
area_3: "确山"
},
1495: {
weaid: "1495",
citynm: "青神",
cityno: "qingshen",
cityid: "101271506",
area_1: "四川",
area_2: "眉山",
area_3: "青神"
},
1496: {
weaid: "1496",
citynm: "奇台",
cityno: "qitai",
cityid: "101130406",
area_1: "新疆",
area_2: "昌吉",
area_3: "奇台"
},
1497: {
weaid: "1497",
citynm: "青田",
cityno: "qingtian",
cityid: "101210805",
area_1: "浙江",
area_2: "丽水",
area_3: "青田"
},
1498: {
weaid: "1498",
citynm: "青铜峡",
cityno: "qingtongxia",
cityid: "101170306",
area_1: "宁夏",
area_2: "吴忠",
area_3: "青铜峡"
},
1499: {
weaid: "1499",
citynm: "曲沃",
cityno: "quwo",
cityid: "101100702",
area_1: "山西",
area_2: "临汾",
area_3: "曲沃"
},
1500: {
weaid: "1500",
citynm: "迁西",
cityno: "qianxi",
cityid: "101090507",
area_1: "河北",
area_2: "唐山",
area_3: "迁西"
},
1501: {
weaid: "1501",
citynm: "青县",
cityno: "qingxian",
cityid: "101090702",
area_1: "河北",
area_2: "沧州",
area_3: "青县"
},
1502: {
weaid: "1502",
citynm: "祁县",
cityno: "sxqixian",
cityid: "101100409",
area_1: "山西",
area_2: "晋中",
area_3: "祁县"
},
1503: {
weaid: "1503",
citynm: "沁县",
cityno: "qinxian",
cityid: "101100508",
area_1: "山西",
area_2: "长治",
area_3: "沁县"
},
1504: {
weaid: "1504",
citynm: "栖霞",
cityno: "qixia",
cityid: "101120507",
area_1: "山东",
area_2: "烟台",
area_3: "栖霞"
},
1506: {
weaid: "1506",
citynm: "杞县",
cityno: "hnkfqixian",
cityid: "101180802",
area_1: "河南",
area_2: "开封",
area_3: "杞县"
},
1507: {
weaid: "1507",
citynm: "淇县",
cityno: "hnqixian",
cityid: "101181203",
area_1: "河南",
area_2: "鹤壁",
area_3: "淇县"
},
1508: {
weaid: "1508",
citynm: "渠县",
cityno: "quxian",
cityid: "101270605",
area_1: "四川",
area_2: "达州",
area_3: "渠县"
},
1509: {
weaid: "1509",
citynm: "清徐",
cityno: "qingxu",
cityid: "101100102",
area_1: "山西",
area_2: "太原",
area_3: "清徐"
},
1510: {
weaid: "1510",
citynm: "曲阳",
cityno: "quyang",
cityid: "101090214",
area_1: "河北",
area_2: "保定",
area_3: "曲阳"
},
1511: {
weaid: "1511",
citynm: "青阳",
cityno: "qingyang",
cityid: "101221703",
area_1: "安徽",
area_2: "池州",
area_3: "青阳"
},
1512: {
weaid: "1512",
citynm: "沁阳",
cityno: "qinyang",
cityid: "101181104",
area_1: "河南",
area_2: "焦作",
area_3: "沁阳"
},
1514: {
weaid: "1514",
citynm: "祁阳",
cityno: "qiyang",
cityid: "101251402",
area_1: "湖南",
area_2: "永州",
area_3: "祁阳"
},
1515: {
weaid: "1515",
citynm: "千阳",
cityno: "sxqianyang",
cityid: "101110903",
area_1: "陕西",
area_2: "宝鸡",
area_3: "千阳"
},
1516: {
weaid: "1516",
citynm: "清原",
cityno: "lnqingyuan",
cityid: "101070403",
area_1: "辽宁",
area_2: "抚顺",
area_3: "清原"
},
1517: {
weaid: "1517",
citynm: "清苑",
cityno: "hbqingyuan",
cityid: "101090224",
area_1: "河北",
area_2: "保定",
area_3: "清苑"
},
1518: {
weaid: "1518",
citynm: "沁源",
cityno: "qinyuan",
cityid: "101100510",
area_1: "山西",
area_2: "长治",
area_3: "沁源"
},
1519: {
weaid: "1519",
citynm: "庆云",
cityno: "qingyun",
cityid: "101120407",
area_1: "山东",
area_2: "德州",
area_3: "庆云"
},
1520: {
weaid: "1520",
citynm: "庆元",
cityno: "zjqingyuan",
cityid: "101210807",
area_1: "浙江",
area_2: "丽水",
area_3: "庆元"
},
1521: {
weaid: "1521",
citynm: "曲周",
cityno: "hbquzhou",
cityid: "101091015",
area_1: "河北",
area_2: "邯郸",
area_3: "曲周"
},
1522: {
weaid: "1522",
citynm: "青州",
cityno: "qingzhou",
cityid: "101120602",
area_1: "山东",
area_2: "潍坊",
area_3: "青州"
},
1523: {
weaid: "1523",
citynm: "全州",
cityno: "gxquanzhou",
cityid: "101300508",
area_1: "广西",
area_2: "桂林",
area_3: "全州"
},
1524: {
weaid: "1524",
citynm: "清镇",
cityno: "qingzhen",
cityid: "101260108",
area_1: "贵州",
area_2: "贵阳",
area_3: "清镇"
},
1525: {
weaid: "1525",
citynm: "瑞安",
cityno: "ruian",
cityid: "101210705",
area_1: "浙江",
area_2: "温州",
area_3: "瑞安"
},
1526: {
weaid: "1526",
citynm: "融安",
cityno: "rongan",
cityid: "101300306",
area_1: "广西",
area_2: "柳州",
area_3: "融安"
},
1527: {
weaid: "1527",
citynm: "容城",
cityno: "rongcheng",
cityid: "101090207",
area_1: "河北",
area_2: "保定",
area_3: "容城"
},
1528: {
weaid: "1528",
citynm: "瑞昌",
cityno: "ruichang",
cityid: "101240202",
area_1: "江西",
area_2: "九江",
area_3: "瑞昌"
},
1529: {
weaid: "1529",
citynm: "汝城",
cityno: "rucheng",
cityid: "101250508",
area_1: "湖南",
area_2: "郴州",
area_3: "汝城"
},
1530: {
weaid: "1530",
citynm: "如东",
cityno: "rudong",
cityid: "101190504",
area_1: "江苏",
area_2: "南通",
area_3: "如东"
},
1531: {
weaid: "1531",
citynm: "如皋",
cityno: "rugao",
cityid: "101190503",
area_1: "江苏",
area_2: "南通",
area_3: "如皋"
},
1532: {
weaid: "1532",
citynm: "仁化",
cityno: "renhua",
cityid: "101280206",
area_1: "广东",
area_2: "韶关",
area_3: "仁化"
},
1533: {
weaid: "1533",
citynm: "仁怀",
cityno: "renhuai",
cityid: "101260203",
area_1: "贵州",
area_2: "遵义",
area_3: "仁怀"
},
1534: {
weaid: "1534",
citynm: "瑞金",
cityno: "ruijin",
cityid: "101240709",
area_1: "江西",
area_2: "赣州",
area_3: "瑞金"
},
1535: {
weaid: "1535",
citynm: "榕江",
cityno: "rongjiang",
cityid: "101260516",
area_1: "贵州",
area_2: "黔东南",
area_3: "榕江"
},
1536: {
weaid: "1536",
citynm: "瑞丽",
cityno: "ruili",
cityid: "101291506",
area_1: "云南",
area_2: "德宏",
area_3: "瑞丽"
},
1537: {
weaid: "1537",
citynm: "汝南",
cityno: "runan",
cityid: "101181605",
area_1: "河南",
area_2: "驻马店",
area_3: "汝南"
},
1538: {
weaid: "1538",
citynm: "滦平",
cityno: "luanping",
cityid: "101090406",
area_1: "河北",
area_2: "承德",
area_3: "滦平"
},
1539: {
weaid: "1539",
citynm: "饶平",
cityno: "raoping",
cityid: "101281502",
area_1: "广东",
area_2: "潮州",
area_3: "饶平"
},
1540: {
weaid: "1540",
citynm: "任丘",
cityno: "renqiu",
cityid: "101090712",
area_1: "河北",
area_2: "沧州",
area_3: "任丘"
},
1541: {
weaid: "1541",
citynm: "若羌",
cityno: "ruoqiang",
cityid: "101130604",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "若羌"
},
1542: {
weaid: "1542",
citynm: "融水",
cityno: "rongshui",
cityid: "101300307",
area_1: "广西",
area_2: "柳州",
area_3: "融水"
},
1543: {
weaid: "1543",
citynm: "仁寿",
cityno: "renshou",
cityid: "101271502",
area_1: "四川",
area_2: "眉山",
area_3: "仁寿"
},
1544: {
weaid: "1544",
citynm: "滦县",
cityno: "luanxian",
cityid: "101090504",
area_1: "河北",
area_2: "唐山",
area_3: "滦县"
},
1545: {
weaid: "1545",
citynm: "芮城",
cityno: "ruicheng",
cityid: "101100811",
area_1: "山西",
area_2: "运城",
area_3: "芮城"
},
1546: {
weaid: "1546",
citynm: "容县",
cityno: "gxrongxian",
cityid: "101300904",
area_1: "广西",
area_2: "玉林",
area_3: "容县"
},
1547: {
weaid: "1547",
citynm: "荣县",
cityno: "scrongxian",
cityid: "101270303",
area_1: "四川",
area_2: "自贡",
area_3: "荣县"
},
1548: {
weaid: "1548",
citynm: "汝阳",
cityno: "ruyang",
cityid: "101180910",
area_1: "河南",
area_2: "洛阳",
area_3: "汝阳"
},
1549: {
weaid: "1549",
citynm: "乳源",
cityno: "ruyuan",
cityid: "101280202",
area_1: "广东",
area_2: "韶关",
area_3: "乳源"
},
1550: {
weaid: "1550",
citynm: "汝州",
cityno: "ruzhou",
cityid: "101180504",
area_1: "河南",
area_2: "平顶山",
area_3: "汝州"
},
1551: {
weaid: "1551",
citynm: "双柏",
cityno: "shuangbai",
cityid: "101290809",
area_1: "云南",
area_2: "楚雄",
area_3: "双柏"
},
1552: {
weaid: "1552",
citynm: "肃北",
cityno: "subei",
cityid: "101160806",
area_1: "甘肃",
area_2: "酒泉",
area_3: "肃北"
},
1553: {
weaid: "1553",
citynm: "绥滨",
cityno: "suibin",
cityid: "101051202",
area_1: "黑龙江",
area_2: "鹤岗",
area_3: "绥滨"
},
1554: {
weaid: "1554",
citynm: "施秉",
cityno: "shibing",
cityid: "101260503",
area_1: "贵州",
area_2: "黔东南",
area_3: "施秉"
},
1555: {
weaid: "1555",
citynm: "上蔡",
cityno: "shangcai",
cityid: "101181604",
area_1: "河南",
area_2: "驻马店",
area_3: "上蔡"
},
1556: {
weaid: "1556",
citynm: "双城",
cityno: "shuangcheng",
cityid: "101050102",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "双城"
},
1557: {
weaid: "1557",
citynm: "神池",
cityno: "shenchi",
cityid: "101101006",
area_1: "山西",
area_2: "忻州",
area_3: "神池"
},
1558: {
weaid: "1558",
citynm: "舒城",
cityno: "shucheng",
cityid: "101221507",
area_1: "安徽",
area_2: "六安",
area_3: "舒城"
},
1559: {
weaid: "1559",
citynm: "遂昌",
cityno: "suichang",
cityid: "101210802",
area_1: "浙江",
area_2: "丽水",
area_3: "遂昌"
},
1560: {
weaid: "1560",
citynm: "顺昌",
cityno: "shunchang",
cityid: "101230902",
area_1: "福建",
area_2: "南平",
area_3: "顺昌"
},
1561: {
weaid: "1561",
citynm: "沙县",
cityno: "shaxian",
cityid: "101230808",
area_1: "福建",
area_2: "三明",
area_3: "沙县"
},
1563: {
weaid: "1563",
citynm: "遂川",
cityno: "suichuan",
cityid: "101240610",
area_1: "江西",
area_2: "吉安",
area_3: "遂川"
},
1564: {
weaid: "1564",
citynm: "石城",
cityno: "shicheng",
cityid: "101240708",
area_1: "江西",
area_2: "赣州",
area_3: "石城"
},
1565: {
weaid: "1565",
citynm: "莎车",
cityno: "shache",
cityid: "101130905",
area_1: "新疆",
area_2: "喀什",
area_3: "莎车"
},
1566: {
weaid: "1566",
citynm: "商城",
cityno: "shangcheng",
cityid: "101180609",
area_1: "河南",
area_2: "信阳",
area_3: "商城"
},
1567: {
weaid: "1567",
citynm: "山丹",
cityno: "shandan",
cityid: "101160706",
area_1: "甘肃",
area_2: "张掖",
area_3: "山丹"
},
1568: {
weaid: "1568",
citynm: "顺德",
cityno: "shunde",
cityid: "101280801",
area_1: "广东",
area_2: "佛山",
area_3: "顺德"
},
1569: {
weaid: "1569",
citynm: "绥德",
cityno: "suide",
cityid: "101110410",
area_1: "陕西",
area_2: "榆林",
area_3: "绥德"
},
1570: {
weaid: "1570",
citynm: "施甸",
cityno: "shidian",
cityid: "101290504",
area_1: "云南",
area_2: "保山",
area_3: "施甸"
},
1571: {
weaid: "1571",
citynm: "邵东",
cityno: "shaodong",
cityid: "101250905",
area_1: "湖南",
area_2: "邵阳",
area_3: "邵东"
},
1572: {
weaid: "1572",
citynm: "商都",
cityno: "shangdu",
cityid: "101080404",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "商都"
},
1573: {
weaid: "1573",
citynm: "三都",
cityno: "sandu",
cityid: "101260411",
area_1: "贵州",
area_2: "黔南",
area_3: "三都"
},
1574: {
weaid: "1574",
citynm: "什邡",
cityno: "shifang",
cityid: "101272004",
area_1: "四川",
area_2: "德阳",
area_3: "什邡"
},
1575: {
weaid: "1575",
citynm: "双峰",
cityno: "shuangfeng",
cityid: "101250802",
area_1: "湖南",
area_2: "娄底",
area_3: "双峰"
},
1576: {
weaid: "1576",
citynm: "绥芬河",
cityno: "suifenhe",
cityid: "101050305",
area_1: "黑龙江",
area_2: "牡丹江",
area_3: "绥芬河"
},
1577: {
weaid: "1577",
citynm: "上高",
cityno: "shanggao",
cityid: "101240505",
area_1: "江西",
area_2: "宜春",
area_3: "上高"
},
1578: {
weaid: "1578",
citynm: "寿光",
cityno: "shouguang",
cityid: "101120603",
area_1: "山东",
area_2: "潍坊",
area_3: "寿光"
},
1579: {
weaid: "1579",
citynm: "上杭",
cityno: "shanghang",
cityid: "101230705",
area_1: "福建",
area_2: "龙岩",
area_3: "上杭"
},
1580: {
weaid: "1580",
citynm: "三河",
cityno: "sanhe",
cityid: "101090609",
area_1: "河北",
area_2: "廊坊",
area_3: "三河"
},
1581: {
weaid: "1581",
citynm: "沙河",
cityno: "shahe",
cityid: "101090917",
area_1: "河北",
area_2: "邢台",
area_3: "沙河"
},
1582: {
weaid: "1582",
citynm: "商河",
cityno: "shanghe",
cityid: "101120103",
area_1: "山东",
area_2: "济南",
area_3: "商河"
},
1583: {
weaid: "1583",
citynm: "泗洪",
cityno: "sihong",
cityid: "101191304",
area_1: "江苏",
area_2: "宿迁",
area_3: "泗洪"
},
1584: {
weaid: "1584",
citynm: "射洪",
cityno: "shehong",
cityid: "101270703",
area_1: "四川",
area_2: "遂宁",
area_3: "射洪"
},
1585: {
weaid: "1585",
citynm: "四会",
cityno: "sihui",
cityid: "101280903",
area_1: "广东",
area_2: "肇庆",
area_3: "四会"
},
1586: {
weaid: "1586",
citynm: "三穗",
cityno: "sansui",
cityid: "101260509",
area_1: "贵州",
area_2: "黔东南",
area_3: "三穗"
},
1587: {
weaid: "1587",
citynm: "三江",
cityno: "sanjiang",
cityid: "101300308",
area_1: "广西",
area_2: "柳州",
area_3: "三江"
},
1588: {
weaid: "1588",
citynm: "绥江",
cityno: "suijiang",
cityid: "101291007",
area_1: "云南",
area_2: "昭通",
area_3: "绥江"
},
1589: {
weaid: "1589",
citynm: "双江",
cityno: "shuangjiang",
cityid: "101291104",
area_1: "云南",
area_2: "临沧",
area_3: "双江"
},
1590: {
weaid: "1590",
citynm: "舒兰",
cityno: "shulan",
cityid: "101060202",
area_1: "吉林",
area_2: "舒兰",
area_3: ""
},
1591: {
weaid: "1591",
citynm: "绥棱",
cityno: "suiling",
cityid: "101050510",
area_1: "黑龙江",
area_2: "绥化",
area_3: "绥棱"
},
1592: {
weaid: "1592",
citynm: "双辽",
cityno: "shuangliao",
cityid: "101060402",
area_1: "吉林",
area_2: "四平",
area_3: "双辽"
},
1593: {
weaid: "1593",
citynm: "上林",
cityno: "shanglin",
cityid: "101300107",
area_1: "广西",
area_2: "南宁",
area_3: "上林"
},
1594: {
weaid: "1594",
citynm: "双流",
cityno: "shuangliu",
cityid: "101270106",
area_1: "四川",
area_2: "成都",
area_3: "双流"
},
1595: {
weaid: "1595",
citynm: "石林",
cityno: "shilin",
cityid: "101290107",
area_1: "云南",
area_2: "昆明",
area_3: "石林"
},
1596: {
weaid: "1596",
citynm: "石楼",
cityno: "shilou",
cityid: "101101106",
area_1: "山西",
area_2: "吕梁",
area_3: "石楼"
},
1597: {
weaid: "1597",
citynm: "三门",
cityno: "sanmen",
cityid: "101210604",
area_1: "浙江",
area_2: "台州",
area_3: "三门"
},
1598: {
weaid: "1598",
citynm: "石门",
cityno: "shimen",
cityid: "101250607",
area_1: "湖南",
area_2: "常德",
area_3: "石门"
},
1599: {
weaid: "1599",
citynm: "嵩明",
cityno: "songming",
cityid: "101290110",
area_1: "云南",
area_2: "昆明",
area_3: "嵩明"
},
1600: {
weaid: "1600",
citynm: "石棉",
cityno: "shimian",
cityid: "101271705",
area_1: "四川",
area_2: "雅安",
area_3: "石棉"
},
1601: {
weaid: "1601",
citynm: "神木",
cityno: "shenmu",
cityid: "101110403",
area_1: "陕西",
area_2: "榆林",
area_3: "神木"
},
1602: {
weaid: "1602",
citynm: "思南",
cityno: "sinan",
cityid: "101260605",
area_1: "贵州",
area_2: "铜仁",
area_3: "思南"
},
1603: {
weaid: "1603",
citynm: "商南",
cityno: "shangnan",
cityid: "101110607",
area_1: "陕西",
area_2: "商洛",
area_3: "商南"
},
1604: {
weaid: "1604",
citynm: "肃南",
cityno: "sunan",
cityid: "101160702",
area_1: "甘肃",
area_2: "张掖",
area_3: "肃南"
},
1605: {
weaid: "1605",
citynm: "睢宁",
cityno: "jssuining",
cityid: "101190806",
area_1: "江苏",
area_2: "徐州",
area_3: "睢宁"
},
1606: {
weaid: "1606",
citynm: "寿宁",
cityno: "shouning",
cityid: "101230304",
area_1: "福建",
area_2: "宁德",
area_3: "寿宁"
},
1607: {
weaid: "1607",
citynm: "绥宁",
cityno: "hnsuining",
cityid: "101250906",
area_1: "湖南",
area_2: "邵阳",
area_3: "绥宁"
},
1608: {
weaid: "1608",
citynm: "苏尼特左旗",
cityno: "sunitezuoqi",
cityid: "101080906",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "苏左旗"
},
1609: {
weaid: "1609",
citynm: "苏尼特右旗",
cityno: "suniteyouqi",
cityid: "101080907",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "苏右旗"
},
1610: {
weaid: "1610",
citynm: "双牌",
cityno: "shuangpai",
cityid: "101251404",
area_1: "湖南",
area_2: "永州",
area_3: "双牌"
},
1611: {
weaid: "1611",
citynm: "松潘",
cityno: "songpan",
cityid: "101271905",
area_1: "四川",
area_2: "阿坝",
area_3: "松潘"
},
1613: {
weaid: "1613",
citynm: "顺平",
cityno: "shunping",
cityid: "101090216",
area_1: "河北",
area_2: "保定",
area_3: "顺平"
},
1614: {
weaid: "1614",
citynm: "石屏",
cityno: "shiping",
cityid: "101290302",
area_1: "云南",
area_2: "红河",
area_3: "石屏"
},
1615: {
weaid: "1615",
citynm: "社旗",
cityno: "sheqi",
cityid: "101180704",
area_1: "河南",
area_2: "南阳",
area_3: "社旗"
},
1616: {
weaid: "1616",
citynm: "石阡",
cityno: "shiqian",
cityid: "101260608",
area_1: "贵州",
area_2: "铜仁",
area_3: "石阡"
},
1617: {
weaid: "1617",
citynm: "沈丘",
cityno: "shenqiu",
cityid: "101181410",
area_1: "河南",
area_2: "周口",
area_3: "沈丘"
},
1618: {
weaid: "1618",
citynm: "石泉",
cityno: "shiquan",
cityid: "101110703",
area_1: "陕西",
area_2: "安康",
area_3: "石泉"
},
1619: {
weaid: "1619",
citynm: "泗水",
cityno: "sishui",
cityid: "101120708",
area_1: "山东",
area_2: "济宁",
area_3: "泗水"
},
1620: {
weaid: "1620",
citynm: "商水",
cityno: "shangshui",
cityid: "101181406",
area_1: "河南",
area_2: "周口",
area_3: "商水"
},
1621: {
weaid: "1621",
citynm: "石首",
cityno: "shishou",
cityid: "101200804",
area_1: "湖北",
area_2: "荆州",
area_3: "石首"
},
1622: {
weaid: "1622",
citynm: "韶山",
cityno: "shaoshan",
cityid: "101250202",
area_1: "湖南",
area_2: "湘潭",
area_3: "韶山"
},
1623: {
weaid: "1623",
citynm: "三水",
cityno: "sanshui",
cityid: "101280802",
area_1: "广东",
area_2: "佛山",
area_3: "三水"
},
1624: {
weaid: "1624",
citynm: "鄯善",
cityno: "shanshan",
cityid: "101130504",
area_1: "新疆",
area_2: "吐鲁番",
area_3: "鄯善"
},
1625: {
weaid: "1625",
citynm: "嵊泗",
cityno: "chengsi",
cityid: "101211102",
area_1: "浙江",
area_2: "舟山",
area_3: "嵊泗"
},
1626: {
weaid: "1626",
citynm: "上思",
cityno: "shangsi",
cityid: "101301402",
area_1: "广西",
area_2: "防城港",
area_3: "上思"
},
1627: {
weaid: "1627",
citynm: "宿松",
cityno: "susong",
cityid: "101220606",
area_1: "安徽",
area_2: "安庆",
area_3: "宿松"
},
1628: {
weaid: "1628",
citynm: "石台",
cityno: "shitai",
cityid: "101221705",
area_1: "安徽",
area_2: "池州",
area_3: "石台"
},
1629: {
weaid: "1629",
citynm: "三台",
cityno: "santai",
cityid: "101270402",
area_1: "四川",
area_2: "绵阳",
area_3: "三台"
},
1630: {
weaid: "1630",
citynm: "松桃",
cityno: "songtao",
cityid: "101260611",
area_1: "贵州",
area_2: "铜仁",
area_3: "松桃"
},
1631: {
weaid: "1631",
citynm: "沙湾",
cityno: "shawan",
cityid: "101131107",
area_1: "新疆",
area_2: "塔城",
area_3: "沙湾"
},
1632: {
weaid: "1632",
citynm: "孙吴",
cityno: "sunwu",
cityid: "101050603",
area_1: "黑龙江",
area_2: "黑河",
area_3: "孙吴"
},
1633: {
weaid: "1633",
citynm: "邵武",
cityno: "shaowu",
cityid: "101230904",
area_1: "福建",
area_2: "南平",
area_3: "邵武"
},
1634: {
weaid: "1634",
citynm: "涉县",
cityno: "shexian",
cityid: "101091006",
area_1: "河北",
area_2: "邯郸",
area_3: "涉县"
},
1635: {
weaid: "1635",
citynm: "单县",
cityno: "danxian",
cityid: "101121009",
area_1: "山东",
area_2: "菏泽",
area_3: "单县"
},
1637: {
weaid: "1637",
citynm: "濉溪",
cityno: "ahsuixi",
cityid: "101221202",
area_1: "安徽",
area_2: "淮北",
area_3: "濉溪"
},
1638: {
weaid: "1638",
citynm: "歙县",
cityno: "xiexian",
cityid: "101221006",
area_1: "安徽",
area_2: "黄山",
area_3: "歙县"
},
1639: {
weaid: "1639",
citynm: "泗县",
cityno: "sixian",
cityid: "101220704",
area_1: "安徽",
area_2: "宿州",
area_3: "泗县"
},
1640: {
weaid: "1640",
citynm: "松溪",
cityno: "songxi",
cityid: "101230908",
area_1: "福建",
area_2: "南平",
area_3: "松溪"
},
1641: {
weaid: "1641",
citynm: "睢县",
cityno: "suixian",
cityid: "101181003",
area_1: "河南",
area_2: "商丘",
area_3: "睢县"
},
1642: {
weaid: "1642",
citynm: "嵩县",
cityno: "songxian",
cityid: "101180907",
area_1: "河南",
area_2: "洛阳",
area_3: "嵩县"
},
1643: {
weaid: "1643",
citynm: "始兴",
cityno: "shixing",
cityid: "101280203",
area_1: "广东",
area_2: "韶关",
area_3: "始兴"
},
1644: {
weaid: "1644",
citynm: "遂溪",
cityno: "gdsuixi",
cityid: "101281007",
area_1: "广东",
area_2: "湛江",
area_3: "遂溪"
},
1645: {
weaid: "1645",
citynm: "双阳",
cityno: "shuangyang",
cityid: "101060106",
area_1: "吉林",
area_2: "长春",
area_3: "双阳"
},
1646: {
weaid: "1646",
citynm: "寿阳",
cityno: "shouyang",
cityid: "101100407",
area_1: "山西",
area_2: "晋中",
area_3: "寿阳"
},
1647: {
weaid: "1647",
citynm: "射阳",
cityno: "sheyang",
cityid: "101190705",
area_1: "江苏",
area_2: "盐城",
area_3: "射阳"
},
1648: {
weaid: "1648",
citynm: "泗阳",
cityno: "siyang",
cityid: "101191303",
area_1: "江苏",
area_2: "宿迁",
area_3: "泗阳"
},
1649: {
weaid: "1649",
citynm: "松阳",
cityno: "songyang",
cityid: "101210808",
area_1: "浙江",
area_2: "丽水",
area_3: "松阳"
},
1650: {
weaid: "1650",
citynm: "绥阳",
cityno: "suiyang",
cityid: "101260204",
area_1: "贵州",
area_2: "遵义",
area_3: "绥阳"
},
1651: {
weaid: "1651",
citynm: "山阳",
cityno: "shanyang",
cityid: "101110608",
area_1: "陕西",
area_2: "商洛",
area_3: "山阳"
},
1652: {
weaid: "1652",
citynm: "沙雅",
cityno: "shaya",
cityid: "101130806",
area_1: "新疆",
area_2: "阿克苏",
area_3: "沙雅"
},
1653: {
weaid: "1653",
citynm: "尚义",
cityno: "shangyi",
cityid: "101090306",
area_1: "河北",
area_2: "张家口",
area_3: "尚义"
},
1654: {
weaid: "1654",
citynm: "山阴",
cityno: "shanyin",
cityid: "101100903",
area_1: "山西",
area_2: "朔州",
area_3: "山阴"
},
1655: {
weaid: "1655",
citynm: "上犹",
cityno: "shangyou",
cityid: "101240703",
area_1: "江西",
area_2: "赣州",
area_3: "上犹"
},
1656: {
weaid: "1656",
citynm: "上虞",
cityno: "shangyu",
cityid: "101210503",
area_1: "浙江",
area_2: "绍兴",
area_3: "上虞"
},
1658: {
weaid: "1658",
citynm: "三原",
cityno: "sanyuan",
cityid: "101110201",
area_1: "陕西",
area_2: "咸阳",
area_3: "三原"
},
1660: {
weaid: "1660",
citynm: "深泽",
cityno: "shenze",
cityid: "101090108",
area_1: "河北",
area_2: "石家庄",
area_3: "深泽"
},
1661: {
weaid: "1661",
citynm: "尚志",
cityno: "shangzhi",
cityid: "101050111",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "尚志"
},
1662: {
weaid: "1662",
citynm: "绥中",
cityno: "suizhong",
cityid: "101071403",
area_1: "辽宁",
area_2: "葫芦岛",
area_3: "绥中"
},
1663: {
weaid: "1663",
citynm: "桑植",
cityno: "sangzhi",
cityid: "101251102",
area_1: "湖南",
area_2: "张家界",
area_3: "桑植"
},
1664: {
weaid: "1664",
citynm: "松滋",
cityno: "songzi",
cityid: "101200807",
area_1: "湖北",
area_2: "荆州",
area_3: "松滋"
},
1665: {
weaid: "1665",
citynm: "师宗",
cityno: "shizong",
cityid: "101290406",
area_1: "云南",
area_2: "曲靖",
area_3: "师宗"
},
1666: {
weaid: "1666",
citynm: "四子王旗",
cityno: "siziwangqi",
cityid: "101080411",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "四子王旗"
},
1667: {
weaid: "1667",
citynm: "台安",
cityno: "lntaian",
cityid: "101070302",
area_1: "辽宁",
area_2: "鞍山",
area_3: "台安"
},
1668: {
weaid: "1668",
citynm: "同安",
cityno: "tongan",
cityid: "101230202",
area_1: "福建",
area_2: "厦门",
area_3: "同安"
},
1669: {
weaid: "1669",
citynm: "桐柏",
cityno: "tongbai",
cityid: "101180712",
area_1: "河南",
area_2: "南阳",
area_3: "桐柏"
},
1670: {
weaid: "1670",
citynm: "太白",
cityno: "taibai",
cityid: "101110909",
area_1: "陕西",
area_2: "宝鸡",
area_3: "太白"
},
1671: {
weaid: "1671",
citynm: "太仓",
cityno: "taicang",
cityid: "101190408",
area_1: "江苏",
area_2: "苏州",
area_3: "太仓"
},
1672: {
weaid: "1672",
citynm: "郯城",
cityno: "tancheng",
cityid: "101120906",
area_1: "山东",
area_2: "临沂",
area_3: "郯城"
},
1673: {
weaid: "1673",
citynm: "桐城",
cityno: "ahtongcheng",
cityid: "101220609",
area_1: "安徽",
area_2: "安庆",
area_3: "桐城"
},
1674: {
weaid: "1674",
citynm: "天长",
cityno: "tianchang",
cityid: "101221107",
area_1: "安徽",
area_2: "滁州",
area_3: "天长"
},
1675: {
weaid: "1675",
citynm: "柘城",
cityno: "zhecheng",
cityid: "101181006",
area_1: "河南",
area_2: "商丘",
area_3: "柘城"
},
1676: {
weaid: "1676",
citynm: "通城",
cityno: "tongcheng",
cityid: "101200705",
area_1: "湖北",
area_2: "咸宁",
area_3: "通城"
},
1677: {
weaid: "1677",
citynm: "腾冲",
cityno: "tengchong",
cityid: "101290506",
area_1: "云南",
area_2: "保山",
area_3: "腾冲"
},
1678: {
weaid: "1678",
citynm: "通道",
cityno: "tongdao",
cityid: "101251207",
area_1: "湖南",
area_2: "怀化",
area_3: "通道"
},
1679: {
weaid: "1679",
citynm: "天等",
cityno: "tiandeng",
cityid: "101300202",
area_1: "广西",
area_2: "崇左",
area_3: "天等"
},
1680: {
weaid: "1680",
citynm: "同德",
cityno: "tongde",
cityid: "101150408",
area_1: "青海",
area_2: "海南",
area_3: "同德"
},
1681: {
weaid: "1681",
citynm: "田东",
cityno: "tiandong",
cityid: "101301006",
area_1: "广西",
area_2: "百色",
area_3: "田东"
},
1682: {
weaid: "1682",
citynm: "天峨",
cityno: "tiane",
cityid: "101301202",
area_1: "广西",
area_2: "河池",
area_3: "天峨"
},
1683: {
weaid: "1683",
citynm: "太谷",
cityno: "taigu",
cityid: "101100408",
area_1: "山西",
area_2: "晋中",
area_3: "太谷"
},
1684: {
weaid: "1684",
citynm: "铜鼓",
cityno: "tonggu",
cityid: "101240502",
area_1: "江西",
area_2: "宜春",
area_3: "铜鼓"
},
1685: {
weaid: "1685",
citynm: "潼关",
cityno: "tongguan",
cityid: "101110503",
area_1: "陕西",
area_2: "渭南",
area_3: "潼关"
},
1686: {
weaid: "1686",
citynm: "通海",
cityno: "tonghai",
cityid: "101290704",
area_1: "云南",
area_2: "玉溪",
area_3: "通海"
},
1687: {
weaid: "1687",
citynm: "唐海",
cityno: "tanghai",
cityid: "101090509",
area_1: "河北",
area_2: "唐山",
area_3: "曹妃甸"
},
1688: {
weaid: "1688",
citynm: "塔河",
cityno: "tahe",
cityid: "101050702",
area_1: "黑龙江",
area_2: "大兴安岭",
area_3: "塔河"
},
1689: {
weaid: "1689",
citynm: "通河",
cityno: "tonghe",
cityid: "101050108",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "通河"
},
1690: {
weaid: "1690",
citynm: "太和",
cityno: "ahtaihe",
cityid: "101220806",
area_1: "安徽",
area_2: "阜阳",
area_3: "太和"
},
1691: {
weaid: "1691",
citynm: "泰和",
cityno: "jxtaihe",
cityid: "101240611",
area_1: "江西",
area_2: "吉安",
area_3: "泰和"
},
1692: {
weaid: "1692",
citynm: "唐河",
cityno: "tanghe",
cityid: "101180710",
area_1: "河南",
area_2: "南阳",
area_3: "唐河"
},
1693: {
weaid: "1693",
citynm: "太湖",
cityno: "taihu",
cityid: "101220603",
area_1: "安徽",
area_2: "安庆",
area_3: "太湖"
},
1694: {
weaid: "1694",
citynm: "通化县",
cityno: "tonghuaxian",
cityid: "101060506",
area_1: "吉林",
area_2: "通化",
area_3: "通化县"
},
1695: {
weaid: "1695",
citynm: "同江",
cityno: "hljtongjiang",
cityid: "101050406",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "同江"
},
1696: {
weaid: "1696",
citynm: "桃江",
cityno: "taojiang",
cityid: "101250703",
area_1: "湖南",
area_2: "益阳",
area_3: "桃江"
},
1697: {
weaid: "1697",
citynm: "通江",
cityno: "tongjiang",
cityid: "101270902",
area_1: "四川",
area_2: "巴中",
area_3: "通江"
},
1698: {
weaid: "1698",
citynm: "台江",
cityno: "taijiang",
cityid: "101260510",
area_1: "贵州",
area_2: "黔东南",
area_3: "台江"
},
1699: {
weaid: "1699",
citynm: "天峻",
cityno: "tianjun",
cityid: "101150708",
area_1: "青海",
area_2: "海西",
area_3: "天峻"
},
1700: {
weaid: "1700",
citynm: "太康",
cityno: "taikang",
cityid: "101181403",
area_1: "河南",
area_2: "周口",
area_3: "太康"
},
1701: {
weaid: "1701",
citynm: "特克斯",
cityno: "tekesi",
cityid: "101131008",
area_1: "新疆",
area_2: "伊犁",
area_3: "特克斯"
},
1702: {
weaid: "1702",
citynm: "托克托",
cityno: "tuoketuo",
cityid: "101080103",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "托县"
},
1703: {
weaid: "1703",
citynm: "托克逊",
cityno: "tuokexun",
cityid: "101130502",
area_1: "新疆",
area_2: "吐鲁番",
area_3: "托克逊"
},
1704: {
weaid: "1704",
citynm: "泰来",
cityno: "tailai",
cityid: "101050210",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "泰来"
},
1707: {
weaid: "1707",
citynm: "铁力",
cityno: "tieli",
cityid: "101050804",
area_1: "黑龙江",
area_2: "伊春",
area_3: "铁力"
},
1708: {
weaid: "1708",
citynm: "屯留",
cityno: "tunliu",
cityid: "101100503",
area_1: "山西",
area_2: "长治",
area_3: "屯留"
},
1709: {
weaid: "1709",
citynm: "田林",
cityno: "tianlin",
cityid: "101301012",
area_1: "广西",
area_2: "百色",
area_3: "田林"
},
1710: {
weaid: "1710",
citynm: "托里",
cityno: "tuoli",
cityid: "101131105",
area_1: "新疆",
area_2: "塔城",
area_3: "托里"
},
1711: {
weaid: "1711",
citynm: "桐庐",
cityno: "tonglu",
cityid: "101210103",
area_1: "浙江",
area_2: "杭州",
area_3: "桐庐"
},
1712: {
weaid: "1712",
citynm: "图们",
cityno: "tumen",
cityid: "101060309",
area_1: "吉林",
area_2: "延边",
area_3: "图们"
},
1713: {
weaid: "1713",
citynm: "土默特左旗",
cityno: "tumotezuoqi",
cityid: "101080102",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "土左旗"
},
1714: {
weaid: "1714",
citynm: "土默特右旗",
cityno: "tumoteyouqi",
cityid: "101080204",
area_1: "内蒙古",
area_2: "包头",
area_3: "土右旗"
},
1715: {
weaid: "1715",
citynm: "洮南",
cityno: "daonan",
cityid: "101060602",
area_1: "吉林",
area_2: "白城",
area_3: "洮南"
},
1716: {
weaid: "1716",
citynm: "泰宁",
cityno: "taining",
cityid: "101230804",
area_1: "福建",
area_2: "三明",
area_3: "泰宁"
},
1717: {
weaid: "1717",
citynm: "太仆寺旗",
cityno: "taipusiqi",
cityid: "101080911",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "太仆寺"
},
1718: {
weaid: "1718",
citynm: "台前",
cityno: "taiqian",
cityid: "101181302",
area_1: "河南",
area_2: "濮阳",
area_3: "台前"
},
1719: {
weaid: "1719",
citynm: "突泉",
cityno: "tuquan",
cityid: "101081107",
area_1: "内蒙古",
area_2: "兴安盟",
area_3: "突泉"
},
1720: {
weaid: "1720",
citynm: "天全",
cityno: "tianquan",
cityid: "101271706",
area_1: "四川",
area_2: "雅安",
area_3: "天全"
},
1721: {
weaid: "1721",
citynm: "柘荣",
cityno: "zherong",
cityid: "101230307",
area_1: "福建",
area_2: "宁德",
area_3: "柘荣"
},
1722: {
weaid: "1722",
citynm: "塔什库尔干",
cityno: "tashikuergan",
cityid: "101130903",
area_1: "新疆",
area_2: "喀什",
area_3: "塔什库尔干"
},
1723: {
weaid: "1723",
citynm: "泰顺",
cityno: "taishun",
cityid: "101210702",
area_1: "浙江",
area_2: "温州",
area_3: "泰顺"
},
1724: {
weaid: "1724",
citynm: "通山",
cityno: "tongshan",
cityid: "101200706",
area_1: "湖北",
area_2: "咸宁",
area_3: "通山"
},
1725: {
weaid: "1725",
citynm: "台山",
cityno: "taishan",
cityid: "101281106",
area_1: "广东",
area_2: "江门",
area_3: "台山"
},
1727: {
weaid: "1727",
citynm: "天台",
cityno: "tiantai",
cityid: "101210605",
area_1: "浙江",
area_2: "台州",
area_3: "天台"
},
1728: {
weaid: "1728",
citynm: "通渭",
cityno: "tongwei",
cityid: "101160202",
area_1: "甘肃",
area_2: "定西",
area_3: "通渭"
},
1729: {
weaid: "1729",
citynm: "唐县",
cityno: "tangxian",
cityid: "101090205",
area_1: "河北",
area_2: "保定",
area_3: "唐县"
},
1730: {
weaid: "1730",
citynm: "泰兴",
cityno: "taixing",
cityid: "101191203",
area_1: "江苏",
area_2: "泰州",
area_3: "泰兴"
},
1731: {
weaid: "1731",
citynm: "桐乡",
cityno: "tongxiang",
cityid: "101210304",
area_1: "浙江",
area_2: "嘉兴",
area_3: "桐乡"
},
1732: {
weaid: "1732",
citynm: "藤县",
cityno: "tengxian",
cityid: "101300602",
area_1: "广西",
area_2: "梧州",
area_3: "藤县"
},
1733: {
weaid: "1733",
citynm: "同心",
cityno: "tongxin",
cityid: "101170302",
area_1: "宁夏",
area_2: "吴忠",
area_3: "同心"
},
1734: {
weaid: "1734",
citynm: "通许",
cityno: "tongxu",
cityid: "101180804",
area_1: "河南",
area_2: "开封",
area_3: "通许"
},
1735: {
weaid: "1735",
citynm: "田阳",
cityno: "tianyang",
cityid: "101301003",
area_1: "广西",
area_2: "百色",
area_3: "田阳"
},
1736: {
weaid: "1736",
citynm: "汤阴",
cityno: "tangyin",
cityid: "101180202",
area_1: "河南",
area_2: "安阳",
area_3: "汤阴"
},
1737: {
weaid: "1737",
citynm: "汤原",
cityno: "tangyuan",
cityid: "101050402",
area_1: "黑龙江",
area_2: "佳木斯",
area_3: "汤原"
},
1738: {
weaid: "1738",
citynm: "通榆",
cityno: "tongyu",
cityid: "101060605",
area_1: "吉林",
area_2: "白城",
area_3: "通榆"
},
1739: {
weaid: "1739",
citynm: "桃源",
cityno: "taoyuan",
cityid: "101250603",
area_1: "湖南",
area_2: "常德",
area_3: "桃源"
},
1740: {
weaid: "1740",
citynm: "天镇",
cityno: "tianzhen",
cityid: "101100204",
area_1: "山西",
area_2: "大同",
area_3: "天镇"
},
1741: {
weaid: "1741",
citynm: "滕州",
cityno: "tengzhou",
cityid: "101121405",
area_1: "山东",
area_2: "枣庄",
area_3: "滕州"
},
1742: {
weaid: "1742",
citynm: "天柱",
cityno: "gztianzhu",
cityid: "101260514",
area_1: "贵州",
area_2: "黔东南",
area_3: "天柱"
},
1743: {
weaid: "1743",
citynm: "天祝",
cityno: "gstianzhu",
cityid: "101160505",
area_1: "甘肃",
area_2: "武威",
area_3: "天祝"
},
1744: {
weaid: "1744",
citynm: "桐梓",
cityno: "tongzi",
cityid: "101260207",
area_1: "贵州",
area_2: "遵义",
area_3: "桐梓"
},
1745: {
weaid: "1745",
citynm: "武安",
cityno: "wuan",
cityid: "101091016",
area_1: "河北",
area_2: "邯郸",
area_3: "武安"
},
1746: {
weaid: "1746",
citynm: "万安",
cityno: "wanan",
cityid: "101240609",
area_1: "江西",
area_2: "吉安",
area_3: "万安"
},
1747: {
weaid: "1747",
citynm: "文安",
cityno: "wenan",
cityid: "101090606",
area_1: "河北",
area_2: "廊坊",
area_3: "文安"
},
1748: {
weaid: "1748",
citynm: "舞阳",
cityno: "wuyang",
cityid: "101181503",
area_1: "河南",
area_2: "漯河",
area_3: "舞阳"
},
1749: {
weaid: "1749",
citynm: "吴堡",
cityno: "wubao",
cityid: "101110411",
area_1: "陕西",
area_2: "榆林",
area_3: "吴堡"
},
1750: {
weaid: "1750",
citynm: "旺苍",
cityno: "wangcang",
cityid: "101272102",
area_1: "四川",
area_2: "广元",
area_3: "旺苍"
},
1751: {
weaid: "1751",
citynm: "五常",
cityno: "wuchang",
cityid: "101050112",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "五常"
},
1752: {
weaid: "1752",
citynm: "围场",
cityno: "weichang",
cityid: "101090410",
area_1: "河北",
area_2: "承德",
area_3: "围场"
},
1753: {
weaid: "1753",
citynm: "武川",
cityno: "nmgwuchuan",
cityid: "101080107",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "武川"
},
1754: {
weaid: "1754",
citynm: "武城",
cityno: "wucheng",
cityid: "101120402",
area_1: "山东",
area_2: "德州",
area_3: "武城"
},
1755: {
weaid: "1755",
citynm: "文成",
cityno: "wencheng",
cityid: "101210703",
area_1: "浙江",
area_2: "温州",
area_3: "文成"
},
1756: {
weaid: "1756",
citynm: "吴川",
cityno: "gdwuchuan",
cityid: "101281002",
area_1: "广东",
area_2: "湛江",
area_3: "吴川"
},
1757: {
weaid: "1757",
citynm: "务川",
cityno: "gzwuchuan",
cityid: "101260212",
area_1: "贵州",
area_2: "遵义",
area_3: "务川"
},
1758: {
weaid: "1758",
citynm: "汶川",
cityno: "wenchuan",
cityid: "101271902",
area_1: "四川",
area_2: "阿坝",
area_3: "汶川"
},
1759: {
weaid: "1759",
citynm: "五大连池",
cityno: "wudalianchi",
cityid: "101050605",
area_1: "黑龙江",
area_2: "黑河",
area_3: "五大连池"
},
1760: {
weaid: "1760",
citynm: "无棣",
cityno: "wudi",
cityid: "101121103",
area_1: "山东",
area_2: "滨州",
area_3: "无棣"
},
1761: {
weaid: "1761",
citynm: "武定",
cityno: "wuding",
cityid: "101290807",
area_1: "云南",
area_2: "楚雄",
area_3: "武定"
},
1762: {
weaid: "1762",
citynm: "望都",
cityno: "wangdu",
cityid: "101090210",
area_1: "河北",
area_2: "保定",
area_3: "望都"
},
1763: {
weaid: "1763",
citynm: "瓦房店",
cityno: "wafangdian",
cityid: "101070202",
area_1: "辽宁",
area_2: "大连",
area_3: "瓦房店"
},
1764: {
weaid: "1764",
citynm: "五峰",
cityno: "wufeng",
cityid: "101200906",
area_1: "湖北",
area_2: "宜昌",
area_3: "五峰"
},
1765: {
weaid: "1765",
citynm: "舞钢",
cityno: "hnwugang",
cityid: "101180506",
area_1: "河南",
area_2: "平顶山",
area_3: "舞钢"
},
1766: {
weaid: "1766",
citynm: "武冈",
cityno: "hnsywugang",
cityid: "101250908",
area_1: "湖南",
area_2: "邵阳",
area_3: "武冈"
},
1767: {
weaid: "1767",
citynm: "武功",
cityno: "wugong",
cityid: "101110206",
area_1: "陕西",
area_2: "咸阳",
area_3: "武功"
},
1768: {
weaid: "1768",
citynm: "五河",
cityno: "wuhe",
cityid: "101220204",
area_1: "安徽",
area_2: "蚌埠",
area_3: "五河"
},
1769: {
weaid: "1769",
citynm: "卫辉",
cityno: "weihui",
cityid: "101180305",
area_1: "河南",
area_2: "新乡",
area_3: "卫辉"
},
1770: {
weaid: "1770",
citynm: "五华",
cityno: "wuhua",
cityid: "101280408",
area_1: "广东",
area_2: "梅州",
area_3: "五华"
},
1771: {
weaid: "1771",
citynm: "无极",
cityno: "wuji",
cityid: "101090110",
area_1: "河北",
area_2: "石家庄",
area_3: "无极"
},
1772: {
weaid: "1772",
citynm: "吴江",
cityno: "wujiang",
cityid: "101190407",
area_1: "江苏",
area_2: "苏州",
area_3: "吴江"
},
1773: {
weaid: "1773",
citynm: "望江",
cityno: "wangjiang",
cityid: "101220607",
area_1: "安徽",
area_2: "安庆",
area_3: "望江"
},
1774: {
weaid: "1774",
citynm: "孟津",
cityno: "mengjin",
cityid: "101180903",
area_1: "河南",
area_2: "洛阳",
area_3: "孟津"
},
1775: {
weaid: "1775",
citynm: "温江",
cityno: "wenjiang",
cityid: "101270104",
area_1: "四川",
area_2: "成都",
area_3: "温江"
},
1776: {
weaid: "1776",
citynm: "望奎",
cityno: "wangkui",
cityid: "101050506",
area_1: "黑龙江",
area_2: "绥化",
area_3: "望奎"
},
1777: {
weaid: "1777",
citynm: "乌兰",
cityno: "wulan",
cityid: "101150709",
area_1: "青海",
area_2: "海西",
area_3: "乌兰"
},
1778: {
weaid: "1778",
citynm: "温岭",
cityno: "wenling",
cityid: "101210607",
area_1: "浙江",
area_2: "台州",
area_3: "温岭"
},
1779: {
weaid: "1779",
citynm: "尉犁",
cityno: "weili",
cityid: "101130603",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "尉犁"
},
1780: {
weaid: "1780",
citynm: "乌拉特前旗",
cityno: "wulateqianqi",
cityid: "101080804",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "乌前旗"
},
1781: {
weaid: "1781",
citynm: "乌拉特中旗",
cityno: "wulatezhongqi",
cityid: "101080806",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "乌中旗"
},
1782: {
weaid: "1782",
citynm: "乌拉特后旗",
cityno: "wulatehouqi",
cityid: "101080807",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "乌后旗"
},
1783: {
weaid: "1783",
citynm: "惠民",
cityno: "huimin",
cityid: "101121105",
area_1: "山东",
area_2: "滨州",
area_3: "惠民"
},
1784: {
weaid: "1784",
citynm: "武鸣",
cityno: "wuming",
cityid: "101300108",
area_1: "广西",
area_2: "南宁",
area_3: "武鸣"
},
1785: {
weaid: "1785",
citynm: "望谟",
cityno: "wangmo",
cityid: "101260905",
area_1: "贵州",
area_2: "黔西南",
area_3: "望谟"
},
1786: {
weaid: "1786",
citynm: "武宁",
cityno: "wuning",
cityid: "101240204",
area_1: "江西",
area_2: "九江",
area_3: "武宁"
},
1787: {
weaid: "1787",
citynm: "万年",
cityno: "wannian",
cityid: "101240306",
area_1: "江西",
area_2: "上饶",
area_3: "万年"
},
1788: {
weaid: "1788",
citynm: "威宁",
cityno: "weining",
cityid: "101260704",
area_1: "贵州",
area_2: "毕节",
area_3: "威宁"
},
1789: {
weaid: "1789",
citynm: "翁牛特旗",
cityno: "wengniuteqi",
cityid: "101080609",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "翁牛特"
},
1790: {
weaid: "1790",
citynm: "武平",
cityno: "wuping",
cityid: "101230704",
area_1: "福建",
area_2: "龙岩",
area_3: "武平"
},
1791: {
weaid: "1791",
citynm: "汪清",
cityno: "wangqing",
cityid: "101060304",
area_1: "吉林",
area_2: "延边",
area_3: "汪清"
},
1792: {
weaid: "1792",
citynm: "吴桥",
cityno: "wuqiao",
cityid: "101090708",
area_1: "河北",
area_2: "沧州",
area_3: "吴桥"
},
1793: {
weaid: "1793",
citynm: "乌恰",
cityno: "wuqia",
cityid: "101131502",
area_1: "新疆",
area_2: "克州",
area_3: "乌恰"
},
1794: {
weaid: "1794",
citynm: "万全",
cityno: "wanquan",
cityid: "101090310",
area_1: "河北",
area_2: "张家口",
area_3: "万全"
},
1795: {
weaid: "1795",
citynm: "温泉",
cityno: "wenquan",
cityid: "101131602",
area_1: "新疆",
area_2: "博尔塔拉",
area_3: "温泉"
},
1796: {
weaid: "1796",
citynm: "万荣",
cityno: "wanrong",
cityid: "101100804",
area_1: "山西",
area_2: "运城",
area_3: "万荣"
},
1797: {
weaid: "1797",
citynm: "文水",
cityno: "wenshui",
cityid: "101101112",
area_1: "山西",
area_2: "吕梁",
area_3: "文水"
},
1798: {
weaid: "1798",
citynm: "微山",
cityno: "sdweishan",
cityid: "101120703",
area_1: "山东",
area_2: "济宁",
area_3: "微山"
},
1799: {
weaid: "1799",
citynm: "汶上",
cityno: "wenshang",
cityid: "101120707",
area_1: "山东",
area_2: "济宁",
area_3: "汶上"
},
1800: {
weaid: "1800",
citynm: "尉氏",
cityno: "weishi",
cityid: "101180803",
area_1: "河南",
area_2: "开封",
area_3: "尉氏"
},
1801: {
weaid: "1801",
citynm: "武胜",
cityno: "wusheng",
cityid: "101270803",
area_1: "四川",
area_2: "广安",
area_3: "武胜"
},
1802: {
weaid: "1802",
citynm: "万山",
cityno: "wanshan",
cityid: "101260604",
area_1: "贵州",
area_2: "铜仁",
area_3: "万山"
},
1803: {
weaid: "1803",
citynm: "巍山",
cityno: "weishan",
cityid: "101290208",
area_1: "云南",
area_2: "大理",
area_3: "巍山"
},
1804: {
weaid: "1804",
citynm: "武山",
cityno: "gswushan",
cityid: "101160906",
area_1: "甘肃",
area_2: "天水",
area_3: "武山"
},
1805: {
weaid: "1805",
citynm: "乌什",
cityno: "wushi",
cityid: "101130802",
area_1: "新疆",
area_2: "阿克苏",
area_3: "乌什"
},
1806: {
weaid: "1806",
citynm: "乌苏",
cityno: "wusu",
cityid: "101131106",
area_1: "新疆",
area_2: "塔城",
area_3: "乌苏"
},
1807: {
weaid: "1807",
citynm: "温宿",
cityno: "wensu",
cityid: "101130803",
area_1: "新疆",
area_2: "阿克苏",
area_3: "温宿"
},
1809: {
weaid: "1809",
citynm: "蔚县",
cityno: "weixian",
cityid: "101090307",
area_1: "河北",
area_2: "张家口",
area_3: "蔚县"
},
1810: {
weaid: "1810",
citynm: "武乡",
cityno: "wuxiang",
cityid: "101100507",
area_1: "山西",
area_2: "长治",
area_3: "武乡"
},
1811: {
weaid: "1811",
citynm: "温县",
cityno: "hnwenxian",
cityid: "101181107",
area_1: "河南",
area_2: "焦作",
area_3: "温县"
},
1812: {
weaid: "1812",
citynm: "威信",
cityno: "weixin",
cityid: "101291005",
area_1: "云南",
area_2: "昭通",
area_3: "威信"
},
1813: {
weaid: "1813",
citynm: "文县",
cityno: "wenxian",
cityid: "101161003",
area_1: "甘肃",
area_2: "陇南",
area_3: "文县"
},
1814: {
weaid: "1814",
citynm: "维西",
cityno: "weixi",
cityid: "101291303",
area_1: "云南",
area_2: "迪庆",
area_3: "维西"
},
1815: {
weaid: "1815",
citynm: "武穴",
cityno: "wuxue",
cityid: "101200509",
area_1: "湖北",
area_2: "黄冈",
area_3: "武穴"
},
1816: {
weaid: "1816",
citynm: "武宣",
cityno: "wuxuan",
cityid: "101300405",
area_1: "广西",
area_2: "来宾",
area_3: "武宣"
},
1817: {
weaid: "1817",
citynm: "武义",
cityno: "wuyi",
cityid: "101210906",
area_1: "浙江",
area_2: "金华",
area_3: "武义"
},
1818: {
weaid: "1818",
citynm: "五营",
cityno: "wuying",
cityid: "101050803",
area_1: "黑龙江",
area_2: "伊春",
area_3: "五营"
},
1819: {
weaid: "1819",
citynm: "乌伊岭",
cityno: "wuyiling",
cityid: "101050802",
area_1: "黑龙江",
area_2: "伊春",
area_3: "乌伊岭"
},
1820: {
weaid: "1820",
citynm: "武夷山",
cityno: "wuyishan",
cityid: "101230905",
area_1: "福建",
area_2: "南平",
area_3: "武夷山"
},
1821: {
weaid: "1821",
citynm: "五原",
cityno: "wuyuan",
cityid: "101080802",
area_1: "内蒙古",
area_2: "巴彦淖尔",
area_3: "五原"
},
1822: {
weaid: "1822",
citynm: "婺源",
cityno: "mouyuan",
cityid: "101240303",
area_1: "江西",
area_2: "上饶",
area_3: "婺源"
},
1823: {
weaid: "1823",
citynm: "翁源",
cityno: "wengyuan",
cityid: "101280204",
area_1: "广东",
area_2: "韶关",
area_3: "翁源"
},
1824: {
weaid: "1824",
citynm: "万源",
cityno: "wanyuan",
cityid: "101270606",
area_1: "四川",
area_2: "达州",
area_3: "万源"
},
1825: {
weaid: "1825",
citynm: "渭源",
cityno: "gsweiyuan",
cityid: "101160204",
area_1: "甘肃",
area_2: "定西",
area_3: "渭源"
},
1826: {
weaid: "1826",
citynm: "威远",
cityno: "weiyuan",
cityid: "101271203",
area_1: "四川",
area_2: "内江",
area_3: "威远"
},
1827: {
weaid: "1827",
citynm: "万载",
cityno: "wanzai",
cityid: "101240504",
area_1: "江西",
area_2: "宜春",
area_3: "万载"
},
1828: {
weaid: "1828",
citynm: "五寨",
cityno: "wuzhai",
cityid: "101101014",
area_1: "山西",
area_2: "忻州",
area_3: "五寨"
},
1829: {
weaid: "1829",
citynm: "武陟",
cityno: "wuzhi",
cityid: "101181103",
area_1: "河南",
area_2: "焦作",
area_3: "武陟"
},
1830: {
weaid: "1830",
citynm: "互助",
cityno: "huzhu",
cityid: "101150204",
area_1: "青海",
area_2: "海东",
area_3: "互助"
},
1831: {
weaid: "1831",
citynm: "新安",
cityno: "xinan",
cityid: "101180902",
area_1: "河南",
area_2: "洛阳",
area_3: "新安"
},
1832: {
weaid: "1832",
citynm: "新巴尔虎左旗",
cityno: "xinbaerhuzuoqi",
cityid: "101081008",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "新左旗"
},
1833: {
weaid: "1833",
citynm: "新巴尔虎右旗",
cityno: "xinbaerhuyouqi",
cityid: "101081009",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "新右旗"
},
1834: {
weaid: "1834",
citynm: "新蔡",
cityno: "xincai",
cityid: "101181608",
area_1: "河南",
area_2: "驻马店",
area_3: "新蔡"
},
1835: {
weaid: "1835",
citynm: "兴城",
cityno: "xingcheng",
cityid: "101071404",
area_1: "辽宁",
area_2: "葫芦岛",
area_3: "兴城"
},
1836: {
weaid: "1836",
citynm: "新昌",
cityno: "xinchang",
cityid: "101210504",
area_1: "浙江",
area_2: "绍兴",
area_3: "新昌"
},
1837: {
weaid: "1837",
citynm: "襄城",
cityno: "hnxcxiangcheng",
cityid: "101180403",
area_1: "河南",
area_2: "许昌",
area_3: "襄城"
},
1838: {
weaid: "1838",
citynm: "淅川",
cityno: "xichuan",
cityid: "101180708",
area_1: "河南",
area_2: "南阳",
area_3: "淅川"
},
1839: {
weaid: "1839",
citynm: "忻城",
cityno: "xincheng",
cityid: "101300402",
area_1: "广西",
area_2: "来宾",
area_3: "忻城"
},
1840: {
weaid: "1840",
citynm: "西昌",
cityno: "xichang",
cityid: "101271610",
area_1: "四川",
area_2: "凉山",
area_3: "西昌"
},
1841: {
weaid: "1841",
citynm: "西充",
cityno: "xichong",
cityid: "101270506",
area_1: "四川",
area_2: "南充",
area_3: "西充"
},
1842: {
weaid: "1842",
citynm: "西畴",
cityno: "xichou",
cityid: "101290602",
area_1: "云南",
area_2: "文山",
area_3: "西畴"
},
1843: {
weaid: "1843",
citynm: "项城",
cityno: "hnxiangcheng",
cityid: "101181407",
area_1: "河南",
area_2: "周口",
area_3: "项城"
},
1844: {
weaid: "1844",
citynm: "喜德",
cityno: "xide",
cityid: "101271613",
area_1: "四川",
area_2: "凉山",
area_3: "喜德"
},
1845: {
weaid: "1845",
citynm: "寻甸",
cityno: "xundian",
cityid: "101290104",
area_1: "云南",
area_2: "昆明",
area_3: "寻甸"
},
1846: {
weaid: "1846",
citynm: "新都",
cityno: "xindu",
cityid: "101270103",
area_1: "四川",
area_2: "成都",
area_3: "新都"
},
1847: {
weaid: "1847",
citynm: "宣恩",
cityno: "xuanen",
cityid: "101201005",
area_1: "湖北",
area_2: "恩施",
area_3: "宣恩"
},
1848: {
weaid: "1848",
citynm: "西丰",
cityno: "xifeng",
cityid: "101071104",
area_1: "辽宁",
area_2: "铁岭",
area_3: "西丰"
},
1849: {
weaid: "1849",
citynm: "襄汾",
cityno: "xiangfen",
cityid: "101100707",
area_1: "山西",
area_2: "临汾",
area_3: "襄汾"
},
1850: {
weaid: "1850",
citynm: "信丰",
cityno: "jxxinfeng",
cityid: "101240706",
area_1: "江西",
area_2: "赣州",
area_3: "信丰"
},
1851: {
weaid: "1851",
citynm: "咸丰",
cityno: "xianfeng",
cityid: "101201004",
area_1: "湖北",
area_2: "恩施",
area_3: "咸丰"
},
1852: {
weaid: "1852",
citynm: "新丰",
cityno: "xinfeng",
cityid: "101280208",
area_1: "广东",
area_2: "韶关",
area_3: "新丰"
},
1853: {
weaid: "1853",
citynm: "息烽",
cityno: "gzxifeng",
cityid: "101260105",
area_1: "贵州",
area_2: "贵阳",
area_3: "息烽"
},
1855: {
weaid: "1855",
citynm: "新干",
cityno: "xingan",
cityid: "101240604",
area_1: "江西",
area_2: "吉安",
area_3: "新干"
},
1856: {
weaid: "1856",
citynm: "兴国",
cityno: "xingguo",
cityid: "101240717",
area_1: "江西",
area_2: "赣州",
area_3: "兴国"
},
1857: {
weaid: "1857",
citynm: "宣汉",
cityno: "xuanhan",
cityid: "101270602",
area_1: "四川",
area_2: "达州",
area_3: "宣汉"
},
1858: {
weaid: "1858",
citynm: "兴海",
cityno: "xinghai",
cityid: "101150406",
area_1: "青海",
area_2: "海南",
area_3: "兴海"
},
1859: {
weaid: "1859",
citynm: "兴和",
cityno: "xinghe",
cityid: "101080406",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "兴和"
},
1860: {
weaid: "1860",
citynm: "西和",
cityno: "xihe",
cityid: "101161006",
area_1: "甘肃",
area_2: "陇南",
area_3: "西和"
},
1861: {
weaid: "1861",
citynm: "夏河",
cityno: "xiahe",
cityid: "101161208",
area_1: "甘肃",
area_2: "甘南",
area_3: "夏河"
},
1862: {
weaid: "1862",
citynm: "新和",
cityno: "xinhe",
cityid: "101130805",
area_1: "新疆",
area_2: "阿克苏",
area_3: "新和"
},
1863: {
weaid: "1863",
citynm: "香河",
cityno: "xianghe",
cityid: "101090604",
area_1: "河北",
area_2: "廊坊",
area_3: "香河"
},
1864: {
weaid: "1864",
citynm: "镶黄旗",
cityno: "xianghuangqi",
cityid: "101080912",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "镶黄旗"
},
1865: {
weaid: "1865",
citynm: "宣化",
cityno: "xuanhua",
cityid: "101090302",
area_1: "河北",
area_2: "张家口",
area_3: "宣化"
},
1866: {
weaid: "1866",
citynm: "兴化",
cityno: "xinghua",
cityid: "101191202",
area_1: "江苏",
area_2: "泰州",
area_3: "兴化"
},
1867: {
weaid: "1867",
citynm: "新化",
cityno: "xinhua",
cityid: "101250805",
area_1: "湖南",
area_2: "娄底",
area_3: "新化"
},
1868: {
weaid: "1868",
citynm: "新晃",
cityno: "xinhuang",
cityid: "101251209",
area_1: "湖南",
area_2: "怀化",
area_3: "新晃"
},
1869: {
weaid: "1869",
citynm: "新会",
cityno: "xinhui",
cityid: "101281104",
area_1: "广东",
area_2: "江门",
area_3: "新会"
},
1870: {
weaid: "1870",
citynm: "循化",
cityno: "xunhua",
cityid: "101150206",
area_1: "青海",
area_2: "海东",
area_3: "循化"
},
1871: {
weaid: "1871",
citynm: "西华",
cityno: "xihua",
cityid: "101181405",
area_1: "河南",
area_2: "周口",
area_3: "西华"
},
1872: {
weaid: "1872",
citynm: "辛集",
cityno: "xinji",
cityid: "101090114",
area_1: "河北",
area_2: "石家庄",
area_3: "辛集"
},
1873: {
weaid: "1873",
citynm: "新绛",
cityno: "xinjiang",
cityid: "101100806",
area_1: "山西",
area_2: "运城",
area_3: "新绛"
},
1874: {
weaid: "1874",
citynm: "夏津",
cityno: "xiajin",
cityid: "101120410",
area_1: "山东",
area_2: "德州",
area_3: "夏津"
},
1875: {
weaid: "1875",
citynm: "新建",
cityno: "xinjian",
cityid: "101240102",
area_1: "江西",
area_2: "南昌",
area_3: "新建"
},
1876: {
weaid: "1876",
citynm: "峡江",
cityno: "xiajiang",
cityid: "101240605",
area_1: "江西",
area_2: "吉安",
area_3: "峡江"
},
1877: {
weaid: "1877",
citynm: "新津",
cityno: "xinjin",
cityid: "101270110",
area_1: "四川",
area_2: "成都",
area_3: "新津"
},
1878: {
weaid: "1878",
citynm: "西吉",
cityno: "xiji",
cityid: "101170402",
area_1: "宁夏",
area_2: "固原",
area_3: "西吉"
},
1879: {
weaid: "1879",
citynm: "小金",
cityno: "xiaojin",
cityid: "101271908",
area_1: "四川",
area_2: "阿坝",
area_3: "小金"
},
1880: {
weaid: "1880",
citynm: "仙居",
cityno: "xianji",
cityid: "101210606",
area_1: "浙江",
area_2: "台州",
area_3: "仙居"
},
1881: {
weaid: "1881",
citynm: "逊克",
cityno: "xunke",
cityid: "101050604",
area_1: "黑龙江",
area_2: "黑河",
area_3: "逊克"
},
1882: {
weaid: "1882",
citynm: "新乐",
cityno: "xinle",
cityid: "101090117",
area_1: "河北",
area_2: "石家庄",
area_3: "新乐"
},
1883: {
weaid: "1883",
citynm: "西林",
cityno: "xilin",
cityid: "101301009",
area_1: "广西",
area_2: "百色",
area_3: "西林"
},
1885: {
weaid: "1885",
citynm: "兴隆",
cityno: "xinglong",
cityid: "101090404",
area_1: "河北",
area_2: "承德",
area_3: "兴隆"
},
1886: {
weaid: "1886",
citynm: "西盟",
cityno: "ximeng",
cityid: "101290909",
area_1: "云南",
area_2: "普洱",
area_3: "西盟"
},
1887: {
weaid: "1887",
citynm: "新民",
cityno: "xinmin",
cityid: "101070106",
area_1: "辽宁",
area_2: "沈阳",
area_3: "新民"
},
1888: {
weaid: "1888",
citynm: "新密",
cityno: "xinmi",
cityid: "101180105",
area_1: "河南",
area_2: "郑州",
area_3: "新密"
},
1889: {
weaid: "1889",
citynm: "乡宁",
cityno: "xiangning",
cityid: "101100712",
area_1: "山西",
area_2: "临汾",
area_3: "乡宁"
},
1890: {
weaid: "1890",
citynm: "休宁",
cityno: "xiuning",
cityid: "101221007",
area_1: "安徽",
area_2: "黄山",
area_3: "休宁"
},
1891: {
weaid: "1891",
citynm: "新宁",
cityno: "xinning",
cityid: "101250907",
area_1: "湖南",
area_2: "邵阳",
area_3: "新宁"
},
1892: {
weaid: "1892",
citynm: "兴宁",
cityno: "xingning",
cityid: "101280402",
area_1: "广东",
area_2: "梅州",
area_3: "兴宁"
},
1893: {
weaid: "1893",
citynm: "新平",
cityno: "xinping",
cityid: "101290706",
area_1: "云南",
area_2: "玉溪",
area_3: "新平"
},
1894: {
weaid: "1894",
citynm: "兴平",
cityno: "xingping",
cityid: "101110211",
area_1: "陕西",
area_2: "咸阳",
area_3: "兴平"
},
1895: {
weaid: "1895",
citynm: "西平",
cityno: "xiping",
cityid: "101181602",
area_1: "河南",
area_2: "驻马店",
area_3: "西平"
},
1896: {
weaid: "1896",
citynm: "霞浦",
cityno: "xiapu",
cityid: "101230303",
area_1: "福建",
area_2: "宁德",
area_3: "霞浦"
},
1897: {
weaid: "1897",
citynm: "溆浦",
cityno: "xupu",
cityid: "101251211",
area_1: "湖南",
area_2: "怀化",
area_3: "溆浦"
},
1898: {
weaid: "1898",
citynm: "兴仁",
cityno: "xingren",
cityid: "101260903",
area_1: "贵州",
area_2: "黔西南",
area_3: "兴仁"
},
1899: {
weaid: "1899",
citynm: "徐水",
cityno: "xushui",
cityid: "101090204",
area_1: "河北",
area_2: "保定",
area_3: "徐水"
},
1900: {
weaid: "1900",
citynm: "响水",
cityno: "xiangshui",
cityid: "101190702",
area_1: "江苏",
area_2: "盐城",
area_3: "响水"
},
1901: {
weaid: "1901",
citynm: "萧山",
cityno: "xiaoshan",
cityid: "101210102",
area_1: "浙江",
area_2: "杭州",
area_3: "萧山"
},
1902: {
weaid: "1902",
citynm: "修水",
cityno: "xiushui",
cityid: "101240212",
area_1: "江西",
area_2: "九江",
area_3: "修水"
},
1903: {
weaid: "1903",
citynm: "浠水",
cityno: "hbxishui",
cityid: "101200506",
area_1: "湖北",
area_2: "黄冈",
area_3: "浠水"
},
1904: {
weaid: "1904",
citynm: "兴山",
cityno: "xingshan",
cityid: "101200904",
area_1: "湖北",
area_2: "宜昌",
area_3: "兴山"
},
1905: {
weaid: "1905",
citynm: "新邵",
cityno: "xinshao",
cityid: "101250904",
area_1: "湖南",
area_2: "邵阳",
area_3: "新邵"
},
1906: {
weaid: "1906",
citynm: "习水",
cityno: "gzxishui",
cityid: "101260209",
area_1: "贵州",
area_2: "遵义",
area_3: "习水"
},
1907: {
weaid: "1907",
citynm: "行唐",
cityno: "xingtang",
cityid: "101090105",
area_1: "河北",
area_2: "石家庄",
area_3: "行唐"
},
1908: {
weaid: "1908",
citynm: "新泰",
cityno: "xintai",
cityid: "101120802",
area_1: "山东",
area_2: "泰安",
area_3: "新泰"
},
1909: {
weaid: "1909",
citynm: "新田",
cityno: "xintian",
cityid: "101251409",
area_1: "湖南",
area_2: "永州",
area_3: "新田"
},
1910: {
weaid: "1910",
citynm: "徐闻",
cityno: "xuwen",
cityid: "101281004",
area_1: "广东",
area_2: "湛江",
area_3: "徐闻"
},
1911: {
weaid: "1911",
citynm: "兴文",
cityno: "xingwen",
cityid: "101271110",
area_1: "四川",
area_2: "宜宾",
area_3: "兴文"
},
1912: {
weaid: "1912",
citynm: "修文",
cityno: "xiuwen",
cityid: "101260107",
area_1: "贵州",
area_2: "贵阳",
area_3: "修文"
},
1913: {
weaid: "1913",
citynm: "宣威",
cityno: "xuanwei",
cityid: "101290409",
area_1: "云南",
area_2: "曲靖",
area_3: "宣威"
},
1914: {
weaid: "1914",
citynm: "西乌珠穆沁旗",
cityno: "xiwuzhumuqinqi",
cityid: "101080910",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "西乌旗"
},
1915: {
weaid: "1915",
citynm: "寻乌",
cityno: "xunwu",
cityid: "101240716",
area_1: "江西",
area_2: "赣州",
area_3: "寻乌"
},
1916: {
weaid: "1916",
citynm: "修武",
cityno: "xiuwu",
cityid: "101181102",
area_1: "河南",
area_2: "焦作",
area_3: "修武"
},
1917: {
weaid: "1917",
citynm: "雄县",
cityno: "xiongxian",
cityid: "101090217",
area_1: "河北",
area_2: "保定",
area_3: "雄县"
},
1918: {
weaid: "1918",
citynm: "隰县",
cityno: "sxxixian",
cityid: "101100704",
area_1: "山西",
area_2: "临汾",
area_3: "隰县"
},
1919: {
weaid: "1919",
citynm: "兴县",
cityno: "xingxian",
cityid: "101101103",
area_1: "山西",
area_2: "吕梁",
area_3: "兴县"
},
1920: {
weaid: "1920",
citynm: "萧县",
cityno: "xiaoxian",
cityid: "101220705",
area_1: "安徽",
area_2: "宿州",
area_3: "萧县"
},
1921: {
weaid: "1921",
citynm: "西峡",
cityno: "xixia",
cityid: "101180705",
area_1: "河南",
area_2: "南阳",
area_3: "西峡"
},
1922: {
weaid: "1922",
citynm: "湘乡",
cityno: "xiangxiang",
cityid: "101250203",
area_1: "湖南",
area_2: "湘潭",
area_3: "湘乡"
},
1923: {
weaid: "1923",
citynm: "新兴",
cityno: "xinxing",
cityid: "101281403",
area_1: "广东",
area_2: "云浮",
area_3: "新兴"
},
1924: {
weaid: "1924",
citynm: "西乡",
cityno: "xixiang",
cityid: "101110807",
area_1: "陕西",
area_2: "汉中",
area_3: "西乡"
},
1925: {
weaid: "1925",
citynm: "息县",
cityno: "hnxixian",
cityid: "101180602",
area_1: "河南",
area_2: "信阳",
area_3: "息县"
},
1926: {
weaid: "1926",
citynm: "新县",
cityno: "xinxian",
cityid: "101180605",
area_1: "河南",
area_2: "信阳",
area_3: "新县"
},
1927: {
weaid: "1927",
citynm: "攸县",
cityno: "youxian",
cityid: "101250302",
area_1: "湖南",
area_2: "株洲",
area_3: "攸县"
},
1928: {
weaid: "1928",
citynm: "昔阳",
cityno: "xiyang",
cityid: "101100406",
area_1: "山西",
area_2: "晋中",
area_3: "昔阳"
},
1929: {
weaid: "1929",
citynm: "荥阳",
cityno: "xingyang",
cityid: "101180103",
area_1: "河南",
area_2: "郑州",
area_3: "荥阳"
},
1930: {
weaid: "1930",
citynm: "旬阳",
cityno: "xunyang",
cityid: "101110705",
area_1: "陕西",
area_2: "安康",
area_3: "旬阳"
},
1931: {
weaid: "1931",
citynm: "新野",
cityno: "xinye",
cityid: "101180709",
area_1: "河南",
area_2: "南阳",
area_3: "新野"
},
1932: {
weaid: "1932",
citynm: "孝义",
cityno: "xiaoyi",
cityid: "101101110",
area_1: "山西",
area_2: "吕梁",
area_3: "孝义"
},
1933: {
weaid: "1933",
citynm: "新沂",
cityno: "jsxinyi",
cityid: "101190807",
area_1: "江苏",
area_2: "徐州",
area_3: "新沂"
},
1934: {
weaid: "1934",
citynm: "夏邑",
cityno: "xiayi",
cityid: "101181008",
area_1: "河南",
area_2: "商丘",
area_3: "夏邑"
},
1935: {
weaid: "1935",
citynm: "湘阴",
cityno: "xiangyin",
cityid: "101251003",
area_1: "湖南",
area_2: "岳阳",
area_3: "湘阴"
},
1936: {
weaid: "1936",
citynm: "信宜",
cityno: "gdxinyi",
cityid: "101282005",
area_1: "广东",
area_2: "茂名",
area_3: "信宜"
},
1938: {
weaid: "1938",
citynm: "旬邑",
cityno: "xunyi",
cityid: "101110210",
area_1: "陕西",
area_2: "咸阳",
area_3: "旬邑"
},
1939: {
weaid: "1939",
citynm: "仙游",
cityno: "xianyou",
cityid: "101230402",
area_1: "福建",
area_2: "莆田",
area_3: "仙游"
},
1940: {
weaid: "1940",
citynm: "叙永",
cityno: "xuyong",
cityid: "101271005",
area_1: "四川",
area_2: "泸州",
area_3: "叙永"
},
1941: {
weaid: "1941",
citynm: "襄垣",
cityno: "xiangyuan",
cityid: "101100505",
area_1: "山西",
area_2: "长治",
area_3: "襄垣"
},
1942: {
weaid: "1942",
citynm: "祥云",
cityno: "xiangyun",
cityid: "101290207",
area_1: "云南",
area_2: "大理",
area_3: "祥云"
},
1943: {
weaid: "1943",
citynm: "新源",
cityno: "xinyuan",
cityid: "101131006",
area_1: "新疆",
area_2: "伊犁",
area_3: "新源"
},
1945: {
weaid: "1945",
citynm: "新郑",
cityno: "xinzheng",
cityid: "101180106",
area_1: "河南",
area_2: "郑州",
area_3: "新郑"
},
1946: {
weaid: "1946",
citynm: "新洲",
cityno: "hbxinzhou",
cityid: "101200104",
area_1: "湖北",
area_2: "武汉",
area_3: "新洲"
},
1947: {
weaid: "1947",
citynm: "象州",
cityno: "xiangzhou",
cityid: "101300404",
area_1: "广西",
area_2: "来宾",
area_3: "象州"
},
1948: {
weaid: "1948",
citynm: "星子",
cityno: "xingzi",
cityid: "101240209",
area_1: "江西",
area_2: "九江",
area_3: "星子"
},
1949: {
weaid: "1949",
citynm: "依安",
cityno: "yian",
cityid: "101050206",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "依安"
},
1950: {
weaid: "1950",
citynm: "永安",
cityno: "yongan",
cityid: "101230810",
area_1: "福建",
area_2: "三明",
area_3: "永安"
},
1951: {
weaid: "1951",
citynm: "远安",
cityno: "yuanan",
cityid: "101200902",
area_1: "湖北",
area_2: "宜昌",
area_3: "远安"
},
1952: {
weaid: "1952",
citynm: "姚安",
cityno: "yaoan",
cityid: "101290804",
area_1: "云南",
area_2: "楚雄",
area_3: "姚安"
},
1953: {
weaid: "1953",
citynm: "盐边",
cityno: "yanbian",
cityid: "101270204",
area_1: "四川",
area_2: "攀枝花",
area_3: "盐边"
},
1954: {
weaid: "1954",
citynm: "漾濞",
cityno: "yangbi",
cityid: "101290203",
area_1: "云南",
area_2: "大理",
area_3: "漾濞"
},
1955: {
weaid: "1955",
citynm: "阳城",
cityno: "yangcheng",
cityid: "101100603",
area_1: "山西",
area_2: "晋城",
area_3: "阳城"
},
1956: {
weaid: "1956",
citynm: "翼城",
cityno: "sxyicheng",
cityid: "101100713",
area_1: "山西",
area_2: "临汾",
area_3: "翼城"
},
1957: {
weaid: "1957",
citynm: "郓城",
cityno: "sdyuncheng",
cityid: "101121003",
area_1: "山东",
area_2: "菏泽",
area_3: "郓城"
},
1958: {
weaid: "1958",
citynm: "禹城",
cityno: "sdyucheng",
cityid: "101120411",
area_1: "山东",
area_2: "德州",
area_3: "禹城"
},
1959: {
weaid: "1959",
citynm: "永春",
cityno: "yongchun",
cityid: "101230504",
area_1: "福建",
area_2: "泉州",
area_3: "永春"
},
1960: {
weaid: "1960",
citynm: "永城",
cityno: "yongcheng",
cityid: "101181009",
area_1: "河南",
area_2: "商丘",
area_3: "永城"
},
1961: {
weaid: "1961",
citynm: "虞城",
cityno: "hnyucheng",
cityid: "101181005",
area_1: "河南",
area_2: "商丘",
area_3: "虞城"
},
1962: {
weaid: "1962",
citynm: "伊川",
cityno: "hnyichuan",
cityid: "101180906",
area_1: "河南",
area_2: "洛阳",
area_3: "伊川"
},
1963: {
weaid: "1963",
citynm: "应城",
cityno: "yingcheng",
cityid: "101200405",
area_1: "湖北",
area_2: "孝感",
area_3: "应城"
},
1964: {
weaid: "1964",
citynm: "宜城",
cityno: "hbyicheng",
cityid: "101200205",
area_1: "湖北",
area_2: "襄阳",
area_3: "宜城"
},
1965: {
weaid: "1965",
citynm: "阳春",
cityno: "yangchun",
cityid: "101281802",
area_1: "广东",
area_2: "阳江",
area_3: "阳春"
},
1966: {
weaid: "1966",
citynm: "岳池",
cityno: "yuechi",
cityid: "101270802",
area_1: "四川",
area_2: "广安",
area_3: "岳池"
},
1967: {
weaid: "1967",
citynm: "延长",
cityno: "yanchang",
cityid: "101110301",
area_1: "陕西",
area_2: "延安",
area_3: "延长"
},
1968: {
weaid: "1968",
citynm: "延川",
cityno: "yanchuan",
cityid: "101110302",
area_1: "陕西",
area_2: "延安",
area_3: "延川"
},
1969: {
weaid: "1969",
citynm: "宜川",
cityno: "sxyichuan",
cityid: "101110304",
area_1: "陕西",
area_2: "延安",
area_3: "宜川"
},
1970: {
weaid: "1970",
citynm: "永昌",
cityno: "yongchang",
cityid: "101160602",
area_1: "甘肃",
area_2: "金昌",
area_3: "永昌"
},
1971: {
weaid: "1971",
citynm: "盐池",
cityno: "yanchi",
cityid: "101170303",
area_1: "宁夏",
area_2: "吴忠",
area_3: "盐池"
},
1972: {
weaid: "1972",
citynm: "叶城",
cityno: "yecheng",
cityid: "101130906",
area_1: "新疆",
area_2: "喀什",
area_3: "叶城"
},
1973: {
weaid: "1973",
citynm: "榆次",
cityno: "yuci",
cityid: "101100402",
area_1: "山西",
area_2: "晋中",
area_3: "榆次"
},
1974: {
weaid: "1974",
citynm: "英德",
cityno: "yingde",
cityid: "101281307",
area_1: "广东",
area_2: "清远",
area_3: "英德"
},
1975: {
weaid: "1975",
citynm: "永登",
cityno: "yongdeng",
cityid: "101160103",
area_1: "甘肃",
area_2: "兰州",
area_3: "永登"
},
1976: {
weaid: "1976",
citynm: "永德",
cityno: "yongde",
cityid: "101291106",
area_1: "云南",
area_2: "临沧",
area_3: "永德"
},
1977: {
weaid: "1977",
citynm: "永定",
cityno: "yongding",
cityid: "101230706",
area_1: "福建",
area_2: "龙岩",
area_3: "永定"
},
1978: {
weaid: "1978",
citynm: "于都",
cityno: "yudu",
cityid: "101240710",
area_1: "江西",
area_2: "赣州",
area_3: "于都"
},
1979: {
weaid: "1979",
citynm: "宜丰",
cityno: "yifeng",
cityid: "101240503",
area_1: "江西",
area_2: "宜春",
area_3: "宜丰"
},
1980: {
weaid: "1980",
citynm: "永丰",
cityno: "yongfeng",
cityid: "101240606",
area_1: "江西",
area_2: "吉安",
area_3: "永丰"
},
1981: {
weaid: "1981",
citynm: "永福",
cityno: "yongfu",
cityid: "101300504",
area_1: "广西",
area_2: "桂林",
area_3: "永福"
},
1982: {
weaid: "1982",
citynm: "余干",
cityno: "yugan",
cityid: "101240305",
area_1: "江西",
area_2: "上饶",
area_3: "余干"
},
1983: {
weaid: "1983",
citynm: "余杭",
cityno: "yuhang",
cityid: "101210106",
area_1: "浙江",
area_2: "杭州",
area_3: "余杭"
},
1984: {
weaid: "1984",
citynm: "饶河",
cityno: "raohe",
cityid: "101051304",
area_1: "黑龙江",
area_2: "双鸭山",
area_3: "饶河"
},
1985: {
weaid: "1985",
citynm: "永和",
cityno: "yonghe",
cityid: "101100703",
area_1: "山西",
area_2: "临汾",
area_3: "永和"
},
1986: {
weaid: "1986",
citynm: "云和",
cityno: "yunhe",
cityid: "101210806",
area_1: "浙江",
area_2: "丽水",
area_3: "云和"
},
1987: {
weaid: "1987",
citynm: "沿河",
cityno: "yanhe",
cityid: "101260609",
area_1: "贵州",
area_2: "铜仁",
area_3: "沿河"
},
1988: {
weaid: "1988",
citynm: "玉环",
cityno: "yuhuan",
cityid: "101210603",
area_1: "浙江",
area_2: "台州",
area_3: "玉环"
},
1989: {
weaid: "1989",
citynm: "宜黄",
cityno: "yihuang",
cityid: "101240407",
area_1: "江西",
area_2: "抚州",
area_3: "宜黄"
},
1990: {
weaid: "1990",
citynm: "永吉",
cityno: "jlyongji",
cityid: "101060203",
area_1: "吉林",
area_2: "永吉",
area_3: ""
},
1991: {
weaid: "1991",
citynm: "永嘉",
cityno: "yongjia",
cityid: "101210708",
area_1: "浙江",
area_2: "温州",
area_3: "永嘉"
},
1992: {
weaid: "1992",
citynm: "余江",
cityno: "yujiang",
cityid: "101241102",
area_1: "江西",
area_2: "鹰潭",
area_3: "余江"
},
1993: {
weaid: "1993",
citynm: "延津",
cityno: "hnyanjin",
cityid: "101180306",
area_1: "河南",
area_2: "新乡",
area_3: "延津"
},
1994: {
weaid: "1994",
citynm: "沅江",
cityno: "hnyuanjiang",
cityid: "101250705",
area_1: "湖南",
area_2: "益阳",
area_3: "沅江"
},
1995: {
weaid: "1995",
citynm: "印江",
cityno: "yinjiang",
cityid: "101260607",
area_1: "贵州",
area_2: "铜仁",
area_3: "印江"
},
1996: {
weaid: "1996",
citynm: "盈江",
cityno: "yingjiang",
cityid: "101291504",
area_1: "云南",
area_2: "德宏",
area_3: "盈江"
},
1997: {
weaid: "1997",
citynm: "盐津",
cityno: "ynyanjin",
cityid: "101291009",
area_1: "云南",
area_2: "昭通",
area_3: "盐津"
},
1998: {
weaid: "1998",
citynm: "元江",
cityno: "ynyuanjiang",
cityid: "101290709",
area_1: "云南",
area_2: "玉溪",
area_3: "元江"
},
1999: {
weaid: "1999",
citynm: "永靖",
cityno: "yongjing",
cityid: "101161103",
area_1: "甘肃",
area_2: "临夏",
area_3: "永靖"
},
2000: {
weaid: "2000",
citynm: "永济",
cityno: "sxyongji",
cityid: "101100810",
area_1: "山西",
area_2: "运城",
area_3: "永济"
},
2001: {
weaid: "2001",
citynm: "伊金霍洛旗",
cityno: "yijinhuoluoqi",
cityid: "101080711",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "伊金霍洛"
},
2002: {
weaid: "2002",
citynm: "英吉沙",
cityno: "yingjisha",
cityid: "101130902",
area_1: "新疆",
area_2: "喀什",
area_3: "英吉沙"
},
2003: {
weaid: "2003",
citynm: "宜君",
cityno: "yijun",
cityid: "101111003",
area_1: "陕西",
area_2: "铜川",
area_3: "宜君"
},
2004: {
weaid: "2004",
citynm: "永康",
cityno: "yongkang",
cityid: "101210907",
area_1: "浙江",
area_2: "金华",
area_3: "永康"
},
2005: {
weaid: "2005",
citynm: "牙克石",
cityno: "yakeshi",
cityid: "101081011",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "牙克石"
},
2006: {
weaid: "2006",
citynm: "依兰",
cityno: "yilan",
cityid: "101050106",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "依兰"
},
2007: {
weaid: "2007",
citynm: "鄢陵",
cityno: "hnxcyanling",
cityid: "101180402",
area_1: "河南",
area_2: "许昌",
area_3: "鄢陵"
},
2008: {
weaid: "2008",
citynm: "炎陵",
cityno: "hnyanling",
cityid: "101250306",
area_1: "湖南",
area_2: "株洲",
area_3: "炎陵"
},
2009: {
weaid: "2009",
citynm: "沅陵",
cityno: "yuanling",
cityid: "101251203",
area_1: "湖南",
area_2: "怀化",
area_3: "沅陵"
},
2010: {
weaid: "2010",
citynm: "筠连",
cityno: "junlian",
cityid: "101271109",
area_1: "四川",
area_2: "宜宾",
area_3: "筠连"
},
2011: {
weaid: "2011",
citynm: "彝良",
cityno: "ynstyiliang",
cityid: "101291003",
area_1: "云南",
area_2: "昭通",
area_3: "彝良"
},
2012: {
weaid: "2012",
citynm: "宜良",
cityno: "ynyiliang",
cityid: "101290106",
area_1: "云南",
area_2: "昆明",
area_3: "宜良"
},
2013: {
weaid: "2013",
citynm: "仪陇",
cityno: "yilong",
cityid: "101270505",
area_1: "四川",
area_2: "南充",
area_3: "仪陇"
},
2014: {
weaid: "2014",
citynm: "云梦",
cityno: "yunmeng",
cityid: "101200403",
area_1: "湖北",
area_2: "孝感",
area_3: "云梦"
},
2015: {
weaid: "2015",
citynm: "易门",
cityno: "yimen",
cityid: "101290707",
area_1: "云南",
area_2: "玉溪",
area_3: "易门"
},
2016: {
weaid: "2016",
citynm: "玉门",
cityno: "yumen",
cityid: "101160807",
area_1: "甘肃",
area_2: "酒泉",
area_3: "玉门"
},
2017: {
weaid: "2017",
citynm: "裕民",
cityno: "yumin",
cityid: "101131102",
area_1: "新疆",
area_2: "塔城",
area_3: "裕民"
},
2018: {
weaid: "2018",
citynm: "元谋",
cityno: "yuanmou",
cityid: "101290803",
area_1: "云南",
area_2: "楚雄",
area_3: "元谋"
},
2019: {
weaid: "2019",
citynm: "沂南",
cityno: "yinan",
cityid: "101120903",
area_1: "山东",
area_2: "临沂",
area_3: "沂南"
},
2020: {
weaid: "2020",
citynm: "郁南",
cityno: "yunan",
cityid: "101281404",
area_1: "广东",
area_2: "云浮",
area_3: "郁南"
},
2021: {
weaid: "2021",
citynm: "永年",
cityno: "yongnian",
cityid: "101091009",
area_1: "河北",
area_2: "邯郸",
area_3: "永年"
},
2022: {
weaid: "2022",
citynm: "邕宁",
cityno: "gxyongning",
cityid: "101300103",
area_1: "广西",
area_2: "南宁",
area_3: "邕宁"
},
2023: {
weaid: "2023",
citynm: "永宁",
cityno: "nxyongning",
cityid: "101170102",
area_1: "宁夏",
area_2: "银川",
area_3: "永宁"
},
2024: {
weaid: "2024",
citynm: "岳普湖",
cityno: "yuepuhu",
cityid: "101130909",
area_1: "新疆",
area_2: "喀什",
area_3: "岳普湖"
},
2025: {
weaid: "2025",
citynm: "原平",
cityno: "yuanping",
cityid: "101101015",
area_1: "山西",
area_2: "忻州",
area_3: "原平"
},
2026: {
weaid: "2026",
citynm: "玉屏",
cityno: "yuping",
cityid: "101260603",
area_1: "贵州",
area_2: "铜仁",
area_3: "玉屏"
},
2027: {
weaid: "2027",
citynm: "永平",
cityno: "yongping",
cityid: "101290204",
area_1: "云南",
area_2: "大理",
area_3: "永平"
},
2028: {
weaid: "2028",
citynm: "余庆",
cityno: "yuqing",
cityid: "101260213",
area_1: "贵州",
area_2: "遵义",
area_3: "余庆"
},
2029: {
weaid: "2029",
citynm: "焉耆",
cityno: "xjyanshi",
cityid: "101130607",
area_1: "新疆",
area_2: "巴音郭楞",
area_3: "焉耆"
},
2030: {
weaid: "2030",
citynm: "永清",
cityno: "yongqing",
cityid: "101090603",
area_1: "河北",
area_2: "廊坊",
area_3: "永清"
},
2031: {
weaid: "2031",
citynm: "阳曲",
cityno: "yangqu",
cityid: "101100103",
area_1: "山西",
area_2: "太原",
area_3: "阳曲"
},
2032: {
weaid: "2032",
citynm: "垣曲",
cityno: "yuanqu",
cityid: "101100809",
area_1: "山西",
area_2: "运城",
area_3: "垣曲"
},
2033: {
weaid: "2033",
citynm: "永仁",
cityno: "yongren",
cityid: "101290810",
area_1: "云南",
area_2: "楚雄",
area_3: "永仁"
},
2034: {
weaid: "2034",
citynm: "延寿",
cityno: "yanshou",
cityid: "101050110",
area_1: "黑龙江",
area_2: "哈尔滨",
area_3: "延寿"
},
2035: {
weaid: "2035",
citynm: "榆树",
cityno: "jlyushu",
cityid: "101060105",
area_1: "吉林",
area_2: "长春",
area_3: "榆树"
},
2036: {
weaid: "2036",
citynm: "元氏",
cityno: "yuanshi",
cityid: "101090112",
area_1: "河北",
area_2: "石家庄",
area_3: "元氏"
},
2037: {
weaid: "2037",
citynm: "榆社",
cityno: "yushe",
cityid: "101100403",
area_1: "山西",
area_2: "晋中",
area_3: "榆社"
},
2038: {
weaid: "2038",
citynm: "沂水",
cityno: "yishui",
cityid: "101120910",
area_1: "山东",
area_2: "临沂",
area_3: "沂水"
},
2039: {
weaid: "2039",
citynm: "颍上",
cityno: "yingshang",
cityid: "101220803",
area_1: "安徽",
area_2: "阜阳",
area_3: "颍上"
},
2040: {
weaid: "2040",
citynm: "玉山",
cityno: "yushan",
cityid: "101240312",
area_1: "江西",
area_2: "上饶",
area_3: "玉山"
},
2041: {
weaid: "2041",
citynm: "偃师",
cityno: "hnyanshi",
cityid: "101180908",
area_1: "河南",
area_2: "洛阳",
area_3: "偃师"
},
2042: {
weaid: "2042",
citynm: "英山",
cityno: "hbyingshan",
cityid: "101200505",
area_1: "湖北",
area_2: "黄冈",
area_3: "英山"
},
2043: {
weaid: "2043",
citynm: "永顺",
cityno: "yongshun",
cityid: "101251503",
area_1: "湖南",
area_2: "湘西",
area_3: "永顺"
},
2044: {
weaid: "2044",
citynm: "阳山",
cityno: "yangshan",
cityid: "101281305",
area_1: "广东",
area_2: "清远",
area_3: "阳山"
},
2045: {
weaid: "2045",
citynm: "阳朔",
cityno: "yangshuo",
cityid: "101300510",
area_1: "广西",
area_2: "桂林",
area_3: "阳朔"
},
2046: {
weaid: "2046",
citynm: "营山",
cityno: "scyingshan",
cityid: "101270503",
area_1: "四川",
area_2: "南充",
area_3: "营山"
},
2047: {
weaid: "2047",
citynm: "永善",
cityno: "yongshan",
cityid: "101291008",
area_1: "云南",
area_2: "昭通",
area_3: "永善"
},
2048: {
weaid: "2048",
citynm: "砚山",
cityno: "yanshan",
cityid: "101290605",
area_1: "云南",
area_2: "文山",
area_3: "砚山"
},
2049: {
weaid: "2049",
citynm: "永寿",
cityno: "yongshou",
cityid: "101110203",
area_1: "陕西",
area_2: "咸阳",
area_3: "永寿"
},
2050: {
weaid: "2050",
citynm: "永胜",
cityno: "yongsheng",
cityid: "101291402",
area_1: "云南",
area_2: "丽江",
area_3: "永胜"
},
2051: {
weaid: "2051",
citynm: "鱼台",
cityno: "yutai",
cityid: "101120704",
area_1: "山东",
area_2: "济宁",
area_3: "鱼台"
},
2052: {
weaid: "2052",
citynm: "盱眙",
cityno: "xuchi",
cityid: "101190903",
area_1: "江苏",
area_2: "淮安",
area_3: "盱眙"
},
2053: {
weaid: "2053",
citynm: "永泰",
cityno: "yongtai",
cityid: "101230107",
area_1: "福建",
area_2: "福州",
area_3: "永泰"
},
2054: {
weaid: "2054",
citynm: "盐亭",
cityno: "yanting",
cityid: "101270403",
area_1: "四川",
area_2: "绵阳",
area_3: "盐亭"
},
2055: {
weaid: "2055",
citynm: "于田",
cityno: "xjyutian",
cityid: "101131307",
area_1: "新疆",
area_2: "和田",
area_3: "于田"
},
2056: {
weaid: "2056",
citynm: "玉田",
cityno: "hbyutian",
cityid: "101090508",
area_1: "河北",
area_2: "唐山",
area_3: "玉田"
},
2057: {
weaid: "2057",
citynm: "义乌",
cityno: "zjyiwu",
cityid: "101210904",
area_1: "浙江",
area_2: "金华",
area_3: "义乌"
},
2058: {
weaid: "2058",
citynm: "伊吾",
cityno: "xjyiwu",
cityid: "101131204",
area_1: "新疆",
area_2: "哈密",
area_3: "伊吾"
},
2059: {
weaid: "2059",
citynm: "义县",
cityno: "lnyixian",
cityid: "101070704",
area_1: "辽宁",
area_2: "锦州",
area_3: "义县"
},
2060: {
weaid: "2060",
citynm: "易县",
cityno: "hbyixian",
cityid: "101090212",
area_1: "河北",
area_2: "保定",
area_3: "易县"
},
2061: {
weaid: "2061",
citynm: "应县",
cityno: "yingxian",
cityid: "101100905",
area_1: "山西",
area_2: "朔州",
area_3: "应县"
},
2062: {
weaid: "2062",
citynm: "阳信",
cityno: "hnyangxin",
cityid: "101121104",
area_1: "山东",
area_2: "滨州",
area_3: "阳信"
},
2063: {
weaid: "2063",
citynm: "宜兴",
cityno: "yixing",
cityid: "101190203",
area_1: "江苏",
area_2: "无锡",
area_3: "宜兴"
},
2064: {
weaid: "2064",
citynm: "黟县",
cityno: "ahyixian",
cityid: "101221005",
area_1: "安徽",
area_2: "黄山",
area_3: "黟县"
},
2065: {
weaid: "2065",
citynm: "岳西",
cityno: "ahyuexi",
cityid: "101220608",
area_1: "安徽",
area_2: "安庆",
area_3: "岳西"
},
2066: {
weaid: "2066",
citynm: "云霄",
cityno: "yunxiao",
cityid: "101230609",
area_1: "福建",
area_2: "漳州",
area_3: "云霄"
},
2067: {
weaid: "2067",
citynm: "尤溪",
cityno: "youxi",
cityid: "101230809",
area_1: "福建",
area_2: "三明",
area_3: "尤溪"
},
2068: {
weaid: "2068",
citynm: "永新",
cityno: "yongxin",
cityid: "101240607",
area_1: "江西",
area_2: "吉安",
area_3: "永新"
},
2069: {
weaid: "2069",
citynm: "永修",
cityno: "yongxiu",
cityid: "101240206",
area_1: "江西",
area_2: "九江",
area_3: "永修"
},
2070: {
weaid: "2070",
citynm: "叶县",
cityno: "yexian",
cityid: "101180505",
area_1: "河南",
area_2: "平顶山",
area_3: "叶县"
},
2071: {
weaid: "2071",
citynm: "阳新",
cityno: "hbyangxin",
cityid: "101200603",
area_1: "湖北",
area_2: "黄石",
area_3: "阳新"
},
2072: {
weaid: "2072",
citynm: "郧西",
cityno: "yunxi",
cityid: "101201103",
area_1: "湖北",
area_2: "十堰",
area_3: "郧西"
},
2073: {
weaid: "2073",
citynm: "郧县",
cityno: "yunxian",
cityid: "101201104",
area_1: "湖北",
area_2: "十堰",
area_3: "郧阳"
},
2074: {
weaid: "2074",
citynm: "永兴",
cityno: "yongxing",
cityid: "101250510",
area_1: "湖南",
area_2: "郴州",
area_3: "永兴"
},
2075: {
weaid: "2075",
citynm: "越西",
cityno: "scyuexi",
cityid: "101271615",
area_1: "四川",
area_2: "凉山",
area_3: "越西"
},
2076: {
weaid: "2076",
citynm: "洋县",
cityno: "yangxian",
cityid: "101110805",
area_1: "陕西",
area_2: "汉中",
area_3: "洋县"
},
2079: {
weaid: "2079",
citynm: "岫岩",
cityno: "xiuyan",
cityid: "101070303",
area_1: "辽宁",
area_2: "鞍山",
area_3: "岫岩"
},
2080: {
weaid: "2080",
citynm: "余姚",
cityno: "yuyao",
cityid: "101210404",
area_1: "浙江",
area_2: "宁波",
area_3: "余姚"
},
2081: {
weaid: "2081",
citynm: "弋阳",
cityno: "jxyiyang",
cityid: "101240309",
area_1: "江西",
area_2: "上饶",
area_3: "弋阳"
},
2082: {
weaid: "2082",
citynm: "原阳",
cityno: "hnyuanyang",
cityid: "101180303",
area_1: "河南",
area_2: "新乡",
area_3: "原阳"
},
2083: {
weaid: "2083",
citynm: "宜阳",
cityno: "hnlyyiyang",
cityid: "101180904",
area_1: "河南",
area_2: "洛阳",
area_3: "宜阳"
},
2084: {
weaid: "2084",
citynm: "元阳",
cityno: "ynyuanyang",
cityid: "101290305",
area_1: "云南",
area_2: "红河",
area_3: "元阳"
},
2085: {
weaid: "2085",
citynm: "阳原",
cityno: "yangyuan",
cityid: "101090308",
area_1: "河北",
area_2: "张家口",
area_3: "阳原"
},
2086: {
weaid: "2086",
citynm: "右玉",
cityno: "youyu",
cityid: "101100904",
area_1: "山西",
area_2: "朔州",
area_3: "右玉"
},
2087: {
weaid: "2087",
citynm: "沂源",
cityno: "yiyuan",
cityid: "101120306",
area_1: "山东",
area_2: "淄博",
area_3: "沂源"
},
2088: {
weaid: "2088",
citynm: "兖州",
cityno: "yanzhou",
cityid: "101120705",
area_1: "山东",
area_2: "济宁",
area_3: "兖州"
},
2089: {
weaid: "2089",
citynm: "扬中",
cityno: "yangzhong",
cityid: "101190303",
area_1: "江苏",
area_2: "镇江",
area_3: "扬中"
},
2090: {
weaid: "2090",
citynm: "仪征",
cityno: "yizheng",
cityid: "101190603",
area_1: "江苏",
area_2: "扬州",
area_3: "仪征"
},
2091: {
weaid: "2091",
citynm: "禹州",
cityno: "yuzhou",
cityid: "101180405",
area_1: "河南",
area_2: "许昌",
area_3: "禹州"
},
2092: {
weaid: "2092",
citynm: "宜章",
cityno: "yizhang",
cityid: "101250504",
area_1: "湖南",
area_2: "郴州",
area_3: "宜章"
},
2093: {
weaid: "2093",
citynm: "宜州",
cityno: "yizhou",
cityid: "101301207",
area_1: "广西",
area_2: "河池",
area_3: "宜州"
},
2094: {
weaid: "2094",
citynm: "榆中",
cityno: "yuzhong",
cityid: "101160104",
area_1: "甘肃",
area_2: "兰州",
area_3: "榆中"
},
2095: {
weaid: "2095",
citynm: "诏安",
cityno: "zhaoan",
cityid: "101230607",
area_1: "福建",
area_2: "漳州",
area_3: "诏安"
},
2096: {
weaid: "2096",
citynm: "正安",
cityno: "zhengan",
cityid: "101260211",
area_1: "贵州",
area_2: "遵义",
area_3: "正安"
},
2097: {
weaid: "2097",
citynm: "镇安",
cityno: "zhenan",
cityid: "101110605",
area_1: "陕西",
area_2: "商洛",
area_3: "镇安"
},
2098: {
weaid: "2098",
citynm: "镇巴",
cityno: "zhenba",
cityid: "101110811",
area_1: "陕西",
area_2: "汉中",
area_3: "镇巴"
},
2099: {
weaid: "2099",
citynm: "张北",
cityno: "zhangbei",
cityid: "101090303",
area_1: "河北",
area_2: "张家口",
area_3: "张北"
},
2100: {
weaid: "2100",
citynm: "邹城",
cityno: "zoucheng",
cityid: "101120711",
area_1: "山东",
area_2: "济宁",
area_3: "邹城"
},
2101: {
weaid: "2101",
citynm: "诸城",
cityno: "zhucheng",
cityid: "101120609",
area_1: "山东",
area_2: "潍坊",
area_3: "诸城"
},
2102: {
weaid: "2102",
citynm: "增城",
cityno: "zengcheng",
cityid: "101280104",
area_1: "广东",
area_2: "广州",
area_3: "增城"
},
2103: {
weaid: "2103",
citynm: "子长",
cityno: "zichang",
cityid: "101110303",
area_1: "陕西",
area_2: "延安",
area_3: "子长"
},
2104: {
weaid: "2104",
citynm: "正定",
cityno: "zhengding",
cityid: "101090103",
area_1: "河北",
area_2: "石家庄",
area_3: "正定"
},
2106: {
weaid: "2106",
citynm: "肇东",
cityno: "zhaodong",
cityid: "101050502",
area_1: "黑龙江",
area_2: "绥化",
area_3: "肇东"
},
2107: {
weaid: "2107",
citynm: "治多",
cityno: "zhiduo",
cityid: "101150603",
area_1: "青海",
area_2: "玉树",
area_3: "治多"
},
2108: {
weaid: "2108",
citynm: "杂多",
cityno: "zaduo",
cityid: "101150604",
area_1: "青海",
area_2: "玉树",
area_3: "杂多"
},
2109: {
weaid: "2109",
citynm: "贞丰",
cityno: "zhenfeng",
cityid: "101260904",
area_1: "贵州",
area_2: "黔西南",
area_3: "贞丰"
},
2110: {
weaid: "2110",
citynm: "左贡",
cityno: "zuogong",
cityid: "101140505",
area_1: "西藏",
area_2: "昌都",
area_3: "左贡"
},
2111: {
weaid: "2111",
citynm: "准格尔旗",
cityno: "zhungeerqi",
cityid: "101080704",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "准格尔"
},
2112: {
weaid: "2112",
citynm: "秭归",
cityno: "zigui",
cityid: "101200903",
area_1: "湖北",
area_2: "宜昌",
area_3: "秭归"
},
2113: {
weaid: "2113",
citynm: "镇海",
cityno: "zhenhai",
cityid: "101210412",
area_1: "浙江",
area_2: "宁波",
area_3: "镇海"
},
2114: {
weaid: "2114",
citynm: "庄河",
cityno: "zhuanghe",
cityid: "101070207",
area_1: "辽宁",
area_2: "大连",
area_3: "庄河"
},
2115: {
weaid: "2115",
citynm: "政和",
cityno: "zhenghe",
cityid: "101230909",
area_1: "福建",
area_2: "南平",
area_3: "政和"
},
2116: {
weaid: "2116",
citynm: "遵化",
cityno: "zunhua",
cityid: "101090510",
area_1: "河北",
area_2: "唐山",
area_3: "遵化"
},
2117: {
weaid: "2117",
citynm: "赞皇",
cityno: "zanhuang",
cityid: "101090109",
area_1: "河北",
area_2: "石家庄",
area_3: "赞皇"
},
2118: {
weaid: "2118",
citynm: "沾化",
cityno: "zhanhua",
cityid: "101121106",
area_1: "山东",
area_2: "滨州",
area_3: "沾化"
},
2119: {
weaid: "2119",
citynm: "张家川",
cityno: "zhangjiachuan",
cityid: "101160907",
area_1: "甘肃",
area_2: "天水",
area_3: "张家川"
},
2120: {
weaid: "2120",
citynm: "诸暨",
cityno: "zhuji",
cityid: "101210502",
area_1: "浙江",
area_2: "绍兴",
area_3: "诸暨"
},
2121: {
weaid: "2121",
citynm: "枝江",
cityno: "hbzhijiang",
cityid: "101200910",
area_1: "湖北",
area_2: "宜昌",
area_3: "枝江"
},
2122: {
weaid: "2122",
citynm: "芷江",
cityno: "hnzhijiang",
cityid: "101251210",
area_1: "湖南",
area_2: "怀化",
area_3: "芷江"
},
2123: {
weaid: "2123",
citynm: "紫金",
cityno: "zijin",
cityid: "101281202",
area_1: "广东",
area_2: "河源",
area_3: "紫金"
},
2124: {
weaid: "2124",
citynm: "织金",
cityno: "zhijin",
cityid: "101260707",
area_1: "贵州",
area_2: "毕节",
area_3: "织金"
},
2125: {
weaid: "2125",
citynm: "中江",
cityno: "zhongjiang",
cityid: "101272002",
area_1: "四川",
area_2: "德阳",
area_3: "中江"
},
2126: {
weaid: "2126",
citynm: "张家港",
cityno: "zhangjiagang",
cityid: "101190403",
area_1: "江苏",
area_2: "苏州",
area_3: "张家港"
},
2127: {
weaid: "2127",
citynm: "镇康",
cityno: "zhenkang",
cityid: "101291108",
area_1: "云南",
area_2: "临沧",
area_3: "镇康"
},
2128: {
weaid: "2128",
citynm: "泽库",
cityno: "zeku",
cityid: "101150303",
area_1: "青海",
area_2: "黄南",
area_3: "泽库"
},
2129: {
weaid: "2129",
citynm: "镇赉",
cityno: "zhenlai",
cityid: "101060604",
area_1: "吉林",
area_2: "白城",
area_3: "镇赉"
},
2130: {
weaid: "2130",
citynm: "扎鲁特旗",
cityno: "zhaluteqi",
cityid: "101080509",
area_1: "内蒙古",
area_2: "通辽",
area_3: "扎鲁特"
},
2131: {
weaid: "2131",
citynm: "扎赉特旗",
cityno: "zhalaiteqi",
cityid: "101081105",
area_1: "内蒙古",
area_2: "兴安盟",
area_3: "扎赉特"
},
2132: {
weaid: "2132",
citynm: "扎兰屯",
cityno: "zhalantun",
cityid: "101081012",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "扎兰屯"
},
2133: {
weaid: "2133",
citynm: "涿鹿",
cityno: "zhuolu",
cityid: "101090312",
area_1: "河北",
area_2: "张家口",
area_3: "涿鹿"
},
2134: {
weaid: "2134",
citynm: "中牟",
cityno: "zhongmou",
cityid: "101180107",
area_1: "河南",
area_2: "郑州",
area_3: "中牟"
},
2135: {
weaid: "2135",
citynm: "周宁",
cityno: "zhouning",
cityid: "101230305",
area_1: "福建",
area_2: "宁德",
area_3: "周宁"
},
2136: {
weaid: "2136",
citynm: "镇宁",
cityno: "zhenning",
cityid: "101260303",
area_1: "贵州",
area_2: "安顺",
area_3: "镇宁"
},
2137: {
weaid: "2137",
citynm: "正宁",
cityno: "zhengning",
cityid: "101160406",
area_1: "甘肃",
area_2: "庆阳",
area_3: "正宁"
},
2138: {
weaid: "2138",
citynm: "卓尼",
cityno: "zhuoni",
cityid: "101161203",
area_1: "甘肃",
area_2: "甘南",
area_3: "卓尼"
},
2139: {
weaid: "2139",
citynm: "中宁",
cityno: "zhongning",
cityid: "101170502",
area_1: "宁夏",
area_2: "中卫",
area_3: "中宁"
},
2140: {
weaid: "2140",
citynm: "邹平",
cityno: "zouping",
cityid: "101121107",
area_1: "山东",
area_2: "滨州",
area_3: "邹平"
},
2141: {
weaid: "2141",
citynm: "漳平",
cityno: "zhangping",
cityid: "101230707",
area_1: "福建",
area_2: "龙岩",
area_3: "漳平"
},
2142: {
weaid: "2142",
citynm: "镇平",
cityno: "hnzhenping",
cityid: "101180707",
area_1: "河南",
area_2: "南阳",
area_3: "镇平"
},
2143: {
weaid: "2143",
citynm: "昭平",
cityno: "zhaoping",
cityid: "101300702",
area_1: "广西",
area_2: "贺州",
area_3: "昭平"
},
2144: {
weaid: "2144",
citynm: "镇坪",
cityno: "sxzhenping",
cityid: "101110709",
area_1: "陕西",
area_2: "安康",
area_3: "镇坪"
},
2145: {
weaid: "2145",
citynm: "漳浦",
cityno: "zhangpu",
cityid: "101230606",
area_1: "福建",
area_2: "漳州",
area_3: "漳浦"
},
2146: {
weaid: "2146",
citynm: "泽普",
cityno: "zepu",
cityid: "101130907",
area_1: "新疆",
area_2: "喀什",
area_3: "泽普"
},
2147: {
weaid: "2147",
citynm: "章丘",
cityno: "zhangqiu",
cityid: "101120104",
area_1: "山东",
area_2: "济南",
area_3: "章丘"
},
2148: {
weaid: "2148",
citynm: "左权",
cityno: "zuoquan",
cityid: "101100404",
area_1: "山西",
area_2: "晋中",
area_3: "左权"
},
2149: {
weaid: "2149",
citynm: "舟曲",
cityno: "zhouqu",
cityid: "101161204",
area_1: "甘肃",
area_2: "甘南",
area_3: "舟曲"
},
2150: {
weaid: "2150",
citynm: "樟树",
cityno: "zhangshu",
cityid: "101240509",
area_1: "江西",
area_2: "宜春",
area_3: "樟树"
},
2151: {
weaid: "2151",
citynm: "竹山",
cityno: "zhushan",
cityid: "101201105",
area_1: "湖北",
area_2: "十堰",
area_3: "竹山"
},
2152: {
weaid: "2152",
citynm: "钟山",
cityno: "gxzhongshan",
cityid: "101300704",
area_1: "广西",
area_2: "贺州",
area_3: "钟山"
},
2153: {
weaid: "2153",
citynm: "柞水",
cityno: "zuoshui",
cityid: "101110603",
area_1: "陕西",
area_2: "商洛",
area_3: "柞水"
},
2154: {
weaid: "2154",
citynm: "昭苏",
cityno: "zhaosu",
cityid: "101131007",
area_1: "新疆",
area_2: "伊犁",
area_3: "昭苏"
},
2155: {
weaid: "2155",
citynm: "梓潼",
cityno: "zitong",
cityid: "101270405",
area_1: "四川",
area_2: "绵阳",
area_3: "梓潼"
},
2156: {
weaid: "2156",
citynm: "彰武",
cityno: "zhangwu",
cityid: "101070902",
area_1: "辽宁",
area_2: "阜新",
area_3: "彰武"
},
2157: {
weaid: "2157",
citynm: "赵县",
cityno: "zhaoxian",
cityid: "101090113",
area_1: "河北",
area_2: "石家庄",
area_3: "赵县"
},
2158: {
weaid: "2158",
citynm: "资溪",
cityno: "zixi",
cityid: "101240406",
area_1: "江西",
area_2: "抚州",
area_3: "资溪"
},
2159: {
weaid: "2159",
citynm: "竹溪",
cityno: "zhuxi",
cityid: "101201102",
area_1: "湖北",
area_2: "十堰",
area_3: "竹溪"
},
2160: {
weaid: "2160",
citynm: "钟祥",
cityno: "zhongxiang",
cityid: "101201402",
area_1: "湖北",
area_2: "荆门",
area_3: "钟祥"
},
2161: {
weaid: "2161",
citynm: "资兴",
cityno: "zixing",
cityid: "101250507",
area_1: "湖南",
area_2: "郴州",
area_3: "资兴"
},
2162: {
weaid: "2162",
citynm: "镇雄",
cityno: "zhenxiong",
cityid: "101291004",
area_1: "云南",
area_2: "昭通",
area_3: "镇雄"
},
2163: {
weaid: "2163",
citynm: "漳县",
cityno: "zhangxian",
cityid: "101160206",
area_1: "甘肃",
area_2: "定西",
area_3: "漳县"
},
2164: {
weaid: "2164",
citynm: "正镶白旗",
cityno: "zhengxiangbaiqi",
cityid: "101080913",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "正镶白旗"
},
2165: {
weaid: "2165",
citynm: "中阳",
cityno: "zhongyang",
cityid: "101101109",
area_1: "山西",
area_2: "吕梁",
area_3: "中阳"
},
2167: {
weaid: "2167",
citynm: "枣阳",
cityno: "zaoyang",
cityid: "101200208",
area_1: "湖北",
area_2: "襄阳",
area_3: "枣阳"
},
2168: {
weaid: "2168",
citynm: "紫阳",
cityno: "sxziyang",
cityid: "101110702",
area_1: "陕西",
area_2: "安康",
area_3: "紫阳"
},
2169: {
weaid: "2169",
citynm: "正阳",
cityno: "zhengyang",
cityid: "101181610",
area_1: "河南",
area_2: "驻马店",
area_3: "正阳"
},
2170: {
weaid: "2170",
citynm: "沾益",
cityno: "zhanyi",
cityid: "101290402",
area_1: "云南",
area_2: "曲靖",
area_3: "沾益"
},
2171: {
weaid: "2171",
citynm: "肇源",
cityno: "hljzhaoyuan",
cityid: "101050904",
area_1: "黑龙江",
area_2: "大庆",
area_3: "肇源"
},
2172: {
weaid: "2172",
citynm: "左云",
cityno: "zuoyun",
cityid: "101100208",
area_1: "山西",
area_2: "大同",
area_3: "左云"
},
2173: {
weaid: "2173",
citynm: "招远",
cityno: "sdzhaoyuan",
cityid: "101120506",
area_1: "山东",
area_2: "烟台",
area_3: "招远"
},
2174: {
weaid: "2174",
citynm: "资源",
cityno: "ziyuan",
cityid: "101300514",
area_1: "广西",
area_2: "桂林",
area_3: "资源"
},
2175: {
weaid: "2175",
citynm: "镇远",
cityno: "gzzhenyuan",
cityid: "101260504",
area_1: "贵州",
area_2: "黔东南",
area_3: "镇远"
},
2176: {
weaid: "2176",
citynm: "紫云",
cityno: "ziyun",
cityid: "101260305",
area_1: "贵州",
area_2: "安顺",
area_3: "紫云"
},
2177: {
weaid: "2177",
citynm: "镇原",
cityno: "gszhenyuan",
cityid: "101160408",
area_1: "甘肃",
area_2: "庆阳",
area_3: "镇原"
},
2178: {
weaid: "2178",
citynm: "镇沅",
cityno: "ynzhenyuan",
cityid: "101290911",
area_1: "云南",
area_2: "普洱",
area_3: "镇沅"
},
2179: {
weaid: "2179",
citynm: "肇州",
cityno: "zhaozhou",
cityid: "101050903",
area_1: "黑龙江",
area_2: "大庆",
area_3: "肇州"
},
2180: {
weaid: "2180",
citynm: "涿州",
cityno: "zhuozhou",
cityid: "101090218",
area_1: "河北",
area_2: "保定",
area_3: "涿州"
},
2181: {
weaid: "2181",
citynm: "子洲",
cityno: "zizhou",
cityid: "101110409",
area_1: "陕西",
area_2: "榆林",
area_3: "子洲"
},
2182: {
weaid: "2182",
citynm: "周至",
cityno: "zhouzhi",
cityid: "101110105",
area_1: "陕西",
area_2: "西安",
area_3: "周至"
},
2183: {
weaid: "2183",
citynm: "资中",
cityno: "zizhong",
cityid: "101271204",
area_1: "四川",
area_2: "内江",
area_3: "资中"
},
2184: {
weaid: "2184",
citynm: "卓资",
cityno: "zhuozi",
cityid: "101080402",
area_1: "内蒙古",
area_2: "乌兰察布",
area_3: "卓资"
},
2185: {
weaid: "2185",
citynm: "灵璧",
cityno: "lingbi",
cityid: "101220703",
area_1: "安徽",
area_2: "宿州",
area_3: "灵璧"
},
2186: {
weaid: "2186",
citynm: "首尔",
cityno: "seoul",
cityid: "102010100",
area_1: "韩国",
area_2: "首尔（Seoul）",
area_3: ""
},
2187: {
weaid: "2187",
citynm: "新加坡",
cityno: "singapore",
cityid: "104010100",
area_1: "新加坡",
area_2: "新加坡（Singapore）",
area_3: ""
},
2188: {
weaid: "2188",
citynm: "曼谷",
cityno: "bangkok",
cityid: "106010100",
area_1: "泰国",
area_2: "曼谷（Bangkok）",
area_3: ""
},
2189: {
weaid: "2189",
citynm: "纽约",
cityno: "newyork",
cityid: "401110101",
area_1: "美国",
area_2: "纽约（NewYork）",
area_3: ""
},
2190: {
weaid: "2190",
citynm: "迪拜",
cityno: "dubai",
cityid: "124020100",
area_1: "阿拉伯联合酋长国",
area_2: "迪拜（Dubai）",
area_3: ""
},
2191: {
weaid: "2191",
citynm: "大阪",
cityno: "osaka",
cityid: "103163100",
area_1: "日本",
area_2: "大阪（Osaka）",
area_3: ""
},
2192: {
weaid: "2192",
citynm: "悉尼",
cityno: "sydney",
cityid: "601020101",
area_1: "澳大利亚",
area_2: "悉尼（Sydney）",
area_3: ""
},
2193: {
weaid: "2193",
citynm: "墨尔本",
cityno: "melbourne",
cityid: "601060101",
area_1: "澳大利亚",
area_2: "墨尔本（Melbourne）",
area_3: ""
},
2194: {
weaid: "2194",
citynm: "洛杉矶",
cityno: "losangeles",
cityid: "401040101",
area_1: "美国",
area_2: "洛杉矶（LosAngeles）",
area_3: ""
},
2195: {
weaid: "2195",
citynm: "吉隆坡",
cityno: "kualalumpur",
cityid: "105010100",
area_1: "马来西亚",
area_2: "吉隆坡（KualaLumpur）",
area_3: ""
},
2196: {
weaid: "2196",
citynm: "伦敦",
cityno: "london",
cityid: "201010100",
area_1: "英国",
area_2: "伦敦（London）",
area_3: ""
},
2197: {
weaid: "2197",
citynm: "芝加哥",
cityno: "chicago",
cityid: "401070101",
area_1: "美国",
area_2: "芝加哥（Chicago）",
area_3: ""
},
2198: {
weaid: "2198",
citynm: "法兰克福",
cityno: "frankfurt",
cityid: "203020100",
area_1: "德国",
area_2: "法兰克福（Frankfurt）",
area_3: ""
},
2199: {
weaid: "2199",
citynm: "华盛顿",
cityno: "washington",
cityid: "401620100",
area_1: "美国",
area_2: "华盛顿（WashingtonD.C）",
area_3: ""
},
2200: {
weaid: "2200",
citynm: "莫斯科",
cityno: "moscow",
cityid: "208010100",
area_1: "俄罗斯",
area_2: "莫斯科（Moscow）",
area_3: ""
},
2201: {
weaid: "2201",
citynm: "东京",
cityno: "tokyo",
cityid: "103010100",
area_1: "日本",
area_2: "东京（Tokyo）",
area_3: ""
},
2202: {
weaid: "2202",
citynm: "慕尼黑",
cityno: "munich",
cityid: "203038900",
area_1: "德国",
area_2: "慕尼黑（Munich）",
area_3: ""
},
2203: {
weaid: "2203",
citynm: "波士顿",
cityno: "boston",
cityid: "401060100",
area_1: "美国",
area_2: "波士顿（Boston）",
area_3: ""
},
2204: {
weaid: "2204",
citynm: "拉斯维加斯",
cityno: "lasvegas",
cityid: "401370100",
area_1: "美国",
area_2: "拉斯维加斯（Lasvegas）",
area_3: ""
},
2205: {
weaid: "2205",
citynm: "巴黎",
cityno: "paris",
cityid: "202010100",
area_1: "法国",
area_2: "巴黎（Paris）",
area_3: ""
},
2206: {
weaid: "2206",
citynm: "温哥华",
cityno: "vancouver",
cityid: "404430100",
area_1: "加拿大",
area_2: "温哥华港（VancouverHarbour）",
area_3: ""
},
2207: {
weaid: "2207",
citynm: "京都",
cityno: "kyoto",
cityid: "103090100",
area_1: "日本",
area_2: "京都（Kyoto）",
area_3: ""
},
2208: {
weaid: "2208",
citynm: "旧金山",
cityno: "sanfrancisco",
cityid: "401640100",
area_1: "美国",
area_2: "旧金山（Sanfrancisco）",
area_3: ""
},
2209: {
weaid: "2209",
citynm: "惠灵顿",
cityno: "wellington",
cityid: "601365100",
area_1: "澳大利亚",
area_2: "惠灵顿（Wellington）",
area_3: ""
},
2210: {
weaid: "2210",
citynm: "河内",
cityno: "hanoi",
cityid: "107010100",
area_1: "越南",
area_2: "河内（Hanoi）",
area_3: ""
},
2211: {
weaid: "2211",
citynm: "岘港",
cityno: "danang",
cityid: "107130100",
area_1: "越南",
area_2: "岘港（Danang）",
area_3: ""
},
2212: {
weaid: "2212",
citynm: "深州",
cityno: "shenzhou",
cityid: "101090811",
area_1: "河北",
area_2: "衡水",
area_3: "深州"
},
2213: {
weaid: "2213",
citynm: "奎屯",
cityno: "kuizhun",
cityid: "101131011",
area_1: "新疆",
area_2: "伊犁",
area_3: "奎屯"
},
2214: {
weaid: "2214",
citynm: "甘南",
cityno: "gannan",
cityid: "101050204",
area_1: "黑龙江",
area_2: "齐齐哈尔",
area_3: "甘南"
},
2215: {
weaid: "2215",
citynm: "友谊",
cityno: "youyi",
cityid: "101051305",
area_1: "黑龙江",
area_2: "双鸭山",
area_3: "友谊"
},
2216: {
weaid: "2216",
citynm: "梨树",
cityno: "lishu",
cityid: "101060403",
area_1: "吉林",
area_2: "四平",
area_3: "梨树"
},
2217: {
weaid: "2217",
citynm: "伊通",
cityno: "yitong",
cityid: "101060405",
area_1: "吉林",
area_2: "四平",
area_3: "伊通"
},
2218: {
weaid: "2218",
citynm: "东辽",
cityno: "dongliao",
cityid: "101060703",
area_1: "吉林",
area_2: "辽源",
area_3: "东辽"
},
2219: {
weaid: "2219",
citynm: "前郭",
cityno: "qianguo",
cityid: "101060803",
area_1: "吉林",
area_2: "松原",
area_3: "前郭"
},
2221: {
weaid: "2221",
citynm: "抚松",
cityno: "fusong",
cityid: "101060906",
area_1: "吉林",
area_2: "白山",
area_3: "抚松"
},
2222: {
weaid: "2222",
citynm: "江源",
cityno: "jiangyuan",
cityid: "101060907",
area_1: "吉林",
area_2: "白山",
area_3: "江源"
},
2223: {
weaid: "2223",
citynm: "金州",
cityno: "jinzhou",
cityid: "101070203",
area_1: "辽宁",
area_2: "大连",
area_3: "金州"
},
2224: {
weaid: "2224",
citynm: "旅顺",
cityno: "lvshun",
cityid: "101070205",
area_1: "辽宁",
area_2: "大连",
area_3: "旅顺"
},
2225: {
weaid: "2225",
citynm: "新宾",
cityno: "xinbin",
cityid: "101070402",
area_1: "辽宁",
area_2: "抚顺",
area_3: "新宾"
},
2227: {
weaid: "2227",
citynm: "北镇",
cityno: "beizhen",
cityid: "101070706",
area_1: "辽宁",
area_2: "锦州",
area_3: "北镇"
},
2228: {
weaid: "2228",
citynm: "辽阳县",
cityno: "liaoyangxian",
cityid: "101071002",
area_1: "辽宁",
area_2: "辽阳",
area_3: "辽阳县"
},
2229: {
weaid: "2229",
citynm: "弓长岭",
cityno: "gongchangling",
cityid: "101071004",
area_1: "辽宁",
area_2: "辽阳",
area_3: "弓长岭"
},
2230: {
weaid: "2230",
citynm: "调兵山",
cityno: "tiefa",
cityid: "101071105",
area_1: "辽宁",
area_2: "铁岭",
area_3: "调兵山"
},
2231: {
weaid: "2231",
citynm: "喀左",
cityno: "kazuo",
cityid: "101071204",
area_1: "辽宁",
area_2: "朝阳",
area_3: "喀左"
},
2232: {
weaid: "2232",
citynm: "建平县",
cityno: "jianpingxian",
cityid: "101071207",
area_1: "辽宁",
area_2: "朝阳",
area_3: "建平县"
},
2233: {
weaid: "2233",
citynm: "清水河",
cityno: "qingshuihe",
cityid: "101080105",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "清水河"
},
2234: {
weaid: "2234",
citynm: "呼市郊区",
cityno: "hushijiaoqu",
cityid: "101080106",
area_1: "内蒙古",
area_2: "呼和浩特",
area_3: "赛罕"
},
2236: {
weaid: "2236",
citynm: "达茂旗",
cityno: "damaoqi",
cityid: "101080206",
area_1: "内蒙古",
area_2: "包头",
area_3: "达茂旗"
},
2242: {
weaid: "2242",
citynm: "阿鲁旗",
cityno: "aluqi",
cityid: "101080603",
area_1: "内蒙古",
area_2: "赤峰",
area_3: "阿鲁旗"
},
2249: {
weaid: "2249",
citynm: "杭锦旗",
cityno: "hangjinqi",
cityid: "101080709",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "杭锦旗"
},
2250: {
weaid: "2250",
citynm: "乌审旗",
cityno: "wushenqi",
cityid: "101080710",
area_1: "内蒙古",
area_2: "鄂尔多斯",
area_3: "乌审旗"
},
2255: {
weaid: "2255",
citynm: "阿巴嘎",
cityno: "abaga",
cityid: "101080904",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "阿巴嘎"
},
2257: {
weaid: "2257",
citynm: "正蓝旗",
cityno: "zhenglanqi",
cityid: "101080914",
area_1: "内蒙古",
area_2: "锡林郭勒",
area_3: "正蓝旗"
},
2260: {
weaid: "2260",
citynm: "鄂伦春旗",
cityno: "elunchunqi",
cityid: "101081005",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "鄂伦春旗"
},
2261: {
weaid: "2261",
citynm: "鄂温克旗",
cityno: "ewenkeqi",
cityid: "101081006",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "鄂温克旗"
},
2262: {
weaid: "2262",
citynm: "额尔古纳",
cityno: "eerguna",
cityid: "101081014",
area_1: "内蒙古",
area_2: "呼伦贝尔",
area_3: "额尔古纳"
},
2263: {
weaid: "2263",
citynm: "科右中旗",
cityno: "keyouzhongqi",
cityid: "101081103",
area_1: "内蒙古",
area_2: "兴安盟",
area_3: "科右中旗"
},
2266: {
weaid: "2266",
citynm: "科右前旗",
cityno: "keyouqianqi",
cityid: "101081109",
area_1: "内蒙古",
area_2: "兴安盟",
area_3: "科右前旗"
},
2276: {
weaid: "2276",
citynm: "鹿泉",
cityno: "luquan",
cityid: "101090118",
area_1: "河北",
area_2: "石家庄",
area_3: "鹿泉"
},
2277: {
weaid: "2277",
citynm: "涞水",
cityno: "laishui",
cityid: "101090222",
area_1: "河北",
area_2: "保定",
area_3: "涞水"
},
2278: {
weaid: "2278",
citynm: "定兴",
cityno: "dingxing",
cityid: "101090223",
area_1: "河北",
area_2: "保定",
area_3: "定兴"
},
2279: {
weaid: "2279",
citynm: "博野",
cityno: "boye",
cityid: "101090225",
area_1: "河北",
area_2: "保定",
area_3: "博野"
},
2280: {
weaid: "2280",
citynm: "承德县",
cityno: "chengdexian",
cityid: "101090403",
area_1: "河北",
area_2: "承德",
area_3: "承德县"
},
2282: {
weaid: "2282",
citynm: "海兴",
cityno: "haixing",
cityid: "101090704",
area_1: "河北",
area_2: "沧州",
area_3: "海兴"
},
2283: {
weaid: "2283",
citynm: "盐山",
cityno: "yanshan",
cityid: "101090705",
area_1: "河北",
area_2: "沧州",
area_3: "盐山"
},
2284: {
weaid: "2284",
citynm: "肃宁",
cityno: "suning",
cityid: "101090706",
area_1: "河北",
area_2: "沧州",
area_3: "肃宁"
},
2285: {
weaid: "2285",
citynm: "南皮",
cityno: "nanpi",
cityid: "101090707",
area_1: "河北",
area_2: "沧州",
area_3: "南皮"
},
2286: {
weaid: "2286",
citynm: "献县",
cityno: "xianxian",
cityid: "101090709",
area_1: "河北",
area_2: "沧州",
area_3: "献县"
},
2287: {
weaid: "2287",
citynm: "孟村",
cityno: "mengcun",
cityid: "101090710",
area_1: "河北",
area_2: "沧州",
area_3: "孟村"
},
2288: {
weaid: "2288",
citynm: "沧县",
cityno: "cangxian",
cityid: "101090716",
area_1: "河北",
area_2: "沧州",
area_3: "沧县"
},
2289: {
weaid: "2289",
citynm: "枣强",
cityno: "zaoqiang",
cityid: "101090802",
area_1: "河北",
area_2: "衡水",
area_3: "枣强"
},
2290: {
weaid: "2290",
citynm: "武邑",
cityno: "wuyi",
cityid: "101090803",
area_1: "河北",
area_2: "衡水",
area_3: "武邑"
},
2291: {
weaid: "2291",
citynm: "武强",
cityno: "wuqiang",
cityid: "101090804",
area_1: "河北",
area_2: "衡水",
area_3: "武强"
},
2292: {
weaid: "2292",
citynm: "饶阳",
cityno: "raoyang",
cityid: "101090805",
area_1: "河北",
area_2: "衡水",
area_3: "饶阳"
},
2293: {
weaid: "2293",
citynm: "故城",
cityno: "gucheng",
cityid: "101090807",
area_1: "河北",
area_2: "衡水",
area_3: "故城"
},
2294: {
weaid: "2294",
citynm: "景县",
cityno: "jingxian",
cityid: "101090808",
area_1: "河北",
area_2: "衡水",
area_3: "景县"
},
2295: {
weaid: "2295",
citynm: "阜城",
cityno: "fucheng",
cityid: "101090809",
area_1: "河北",
area_2: "衡水",
area_3: "阜城"
},
2296: {
weaid: "2296",
citynm: "冀州",
cityno: "jizhou",
cityid: "101090810",
area_1: "河北",
area_2: "衡水",
area_3: "冀州"
},
2297: {
weaid: "2297",
citynm: "临城",
cityno: "lincheng",
cityid: "101090902",
area_1: "河北",
area_2: "邢台",
area_3: "临城"
},
2298: {
weaid: "2298",
citynm: "内丘",
cityno: "neiqiu",
cityid: "101090904",
area_1: "河北",
area_2: "邢台",
area_3: "内丘"
},
2299: {
weaid: "2299",
citynm: "柏乡",
cityno: "baixiang",
cityid: "101090905",
area_1: "河北",
area_2: "邢台",
area_3: "柏乡"
},
2300: {
weaid: "2300",
citynm: "隆尧",
cityno: "longyao",
cityid: "101090906",
area_1: "河北",
area_2: "邢台",
area_3: "隆尧"
},
2301: {
weaid: "2301",
citynm: "南和",
cityno: "nanhe",
cityid: "101090907",
area_1: "河北",
area_2: "邢台",
area_3: "南和"
},
2302: {
weaid: "2302",
citynm: "宁晋",
cityno: "ningjin",
cityid: "101090908",
area_1: "河北",
area_2: "邢台",
area_3: "宁晋"
},
2303: {
weaid: "2303",
citynm: "巨鹿",
cityno: "julu",
cityid: "101090909",
area_1: "河北",
area_2: "邢台",
area_3: "巨鹿"
},
2304: {
weaid: "2304",
citynm: "新河",
cityno: "xinhe",
cityid: "101090910",
area_1: "河北",
area_2: "邢台",
area_3: "新河"
},
2305: {
weaid: "2305",
citynm: "广宗",
cityno: "guangzong",
cityid: "101090911",
area_1: "河北",
area_2: "邢台",
area_3: "广宗"
},
2306: {
weaid: "2306",
citynm: "平乡",
cityno: "pingxiang",
cityid: "101090912",
area_1: "河北",
area_2: "邢台",
area_3: "平乡"
},
2307: {
weaid: "2307",
citynm: "威县",
cityno: "weixian",
cityid: "101090913",
area_1: "河北",
area_2: "邢台",
area_3: "威县"
},
2308: {
weaid: "2308",
citynm: "清河",
cityno: "qinghe",
cityid: "101090914",
area_1: "河北",
area_2: "邢台",
area_3: "清河"
},
2309: {
weaid: "2309",
citynm: "临西",
cityno: "linxi",
cityid: "101090915",
area_1: "河北",
area_2: "邢台",
area_3: "临西"
},
2310: {
weaid: "2310",
citynm: "任县",
cityno: "renxian",
cityid: "101090918",
area_1: "河北",
area_2: "邢台",
area_3: "任县"
},
2311: {
weaid: "2311",
citynm: "峰峰",
cityno: "fengfeng",
cityid: "101091002",
area_1: "河北",
area_2: "邯郸",
area_3: "峰峰"
},
2312: {
weaid: "2312",
citynm: "临漳",
cityno: "linzhang",
cityid: "101091003",
area_1: "河北",
area_2: "邯郸",
area_3: "临漳"
},
2313: {
weaid: "2313",
citynm: "成安",
cityno: "chengan",
cityid: "101091004",
area_1: "河北",
area_2: "邯郸",
area_3: "成安"
},
2314: {
weaid: "2314",
citynm: "大名",
cityno: "daming",
cityid: "101091005",
area_1: "河北",
area_2: "邯郸",
area_3: "大名"
},
2315: {
weaid: "2315",
citynm: "磁县",
cityno: "cixian",
cityid: "101091007",
area_1: "河北",
area_2: "邯郸",
area_3: "磁县"
},
2316: {
weaid: "2316",
citynm: "邱县",
cityno: "qiuxian",
cityid: "101091010",
area_1: "河北",
area_2: "邯郸",
area_3: "邱县"
},
2317: {
weaid: "2317",
citynm: "鸡泽",
cityno: "jize",
cityid: "101091011",
area_1: "河北",
area_2: "邯郸",
area_3: "鸡泽"
},
2318: {
weaid: "2318",
citynm: "魏县",
cityno: "weixian",
cityid: "101091014",
area_1: "河北",
area_2: "邯郸",
area_3: "魏县"
},
2319: {
weaid: "2319",
citynm: "青龙",
cityno: "qinglong",
cityid: "101091102",
area_1: "河北",
area_2: "秦皇岛",
area_3: "青龙"
},
2320: {
weaid: "2320",
citynm: "抚宁",
cityno: "funing",
cityid: "101091104",
area_1: "河北",
area_2: "秦皇岛",
area_3: "抚宁"
},
2321: {
weaid: "2321",
citynm: "卢龙",
cityno: "lulong",
cityid: "101091105",
area_1: "河北",
area_2: "秦皇岛",
area_3: "卢龙"
},
2322: {
weaid: "2322",
citynm: "北戴河",
cityno: "beidaihe",
cityid: "101091106",
area_1: "河北",
area_2: "秦皇岛",
area_3: "北戴河"
},
2323: {
weaid: "2323",
citynm: "古交",
cityno: "gujiao",
cityid: "101100105",
area_1: "山西",
area_2: "太原",
area_3: "古交"
},
2324: {
weaid: "2324",
citynm: "尖草坪区",
cityno: "jiancaopingqu",
cityid: "101100106",
area_1: "山西",
area_2: "太原",
area_3: "尖草坪区"
},
2325: {
weaid: "2325",
citynm: "小店区",
cityno: "xiaodianqu",
cityid: "101100107",
area_1: "山西",
area_2: "太原",
area_3: "小店区"
},
2326: {
weaid: "2326",
citynm: "阳高",
cityno: "yanggao",
cityid: "101100202",
area_1: "山西",
area_2: "大同",
area_3: "阳高"
},
2327: {
weaid: "2327",
citynm: "大同县",
cityno: "datongxian",
cityid: "101100203",
area_1: "山西",
area_2: "大同",
area_3: "大同县"
},
2328: {
weaid: "2328",
citynm: "灵丘",
cityno: "lingqiu",
cityid: "101100206",
area_1: "山西",
area_2: "大同",
area_3: "灵丘"
},
2329: {
weaid: "2329",
citynm: "盂县",
cityno: "yuxian",
cityid: "101100302",
area_1: "山西",
area_2: "阳泉",
area_3: "盂县"
},
2330: {
weaid: "2330",
citynm: "泽州",
cityno: "zezhou",
cityid: "101100606",
area_1: "山西",
area_2: "晋城",
area_3: "泽州"
},
2331: {
weaid: "2331",
citynm: "侯马",
cityno: "houma",
cityid: "101100714",
area_1: "山西",
area_2: "临汾",
area_3: "侯马"
},
2332: {
weaid: "2332",
citynm: "绛县",
cityno: "jiangxian",
cityid: "101100807",
area_1: "山西",
area_2: "运城",
area_3: "绛县"
},
2333: {
weaid: "2333",
citynm: "闻喜",
cityno: "wenxi",
cityid: "101100808",
area_1: "山西",
area_2: "运城",
area_3: "闻喜"
},
2334: {
weaid: "2334",
citynm: "夏县",
cityno: "xiaxian",
cityid: "101100812",
area_1: "山西",
area_2: "运城",
area_3: "夏县"
},
2335: {
weaid: "2335",
citynm: "平鲁",
cityno: "pinglu",
cityid: "101100902",
area_1: "山西",
area_2: "朔州",
area_3: "平鲁"
},
2336: {
weaid: "2336",
citynm: "五台县",
cityno: "wutaixian",
cityid: "101101003",
area_1: "山西",
area_2: "忻州",
area_3: "五台县"
},
2338: {
weaid: "2338",
citynm: "静乐",
cityno: "jingle",
cityid: "101101012",
area_1: "山西",
area_2: "忻州",
area_3: "静乐"
},
2339: {
weaid: "2339",
citynm: "志丹",
cityno: "zhidan",
cityid: "101110306",
area_1: "陕西",
area_2: "延安",
area_3: "志丹"
},
2340: {
weaid: "2340",
citynm: "吴起",
cityno: "wuqi",
cityid: "101110312",
area_1: "陕西",
area_2: "延安",
area_3: "吴起"
},
2341: {
weaid: "2341",
citynm: "榆阳",
cityno: "yuyang",
cityid: "101110413",
area_1: "陕西",
area_2: "榆林",
area_3: "榆阳"
},
2342: {
weaid: "2342",
citynm: "商州",
cityno: "shangzhou",
cityid: "101110604",
area_1: "陕西",
area_2: "商洛",
area_3: "商州"
},
2343: {
weaid: "2343",
citynm: "陈仓",
cityno: "chencang",
cityid: "101110912",
area_1: "陕西",
area_2: "宝鸡",
area_3: "陈仓"
},
2344: {
weaid: "2344",
citynm: "耀州",
cityno: "yaozhou",
cityid: "101111004",
area_1: "陕西",
area_2: "铜川",
area_3: "耀州"
},
2345: {
weaid: "2345",
citynm: "杨凌",
cityno: "yangling",
cityid: "101111101",
area_1: "陕西",
area_2: "杨凌",
area_3: "城区"
},
2346: {
weaid: "2346",
citynm: "崂山",
cityno: "laoshan",
cityid: "101120202",
area_1: "山东",
area_2: "青岛",
area_3: "崂山"
},
2347: {
weaid: "2347",
citynm: "淄川",
cityno: "zichuan",
cityid: "101120302",
area_1: "山东",
area_2: "淄博",
area_3: "淄川"
},
2348: {
weaid: "2348",
citynm: "博山",
cityno: "boshan",
cityid: "101120303",
area_1: "山东",
area_2: "淄博",
area_3: "博山"
},
2349: {
weaid: "2349",
citynm: "周村",
cityno: "zhoucun",
cityid: "101120305",
area_1: "山东",
area_2: "淄博",
area_3: "周村"
},
2350: {
weaid: "2350",
citynm: "临邑",
cityno: "linyi",
cityid: "101120403",
area_1: "山东",
area_2: "德州",
area_3: "临邑"
},
2351: {
weaid: "2351",
citynm: "齐河",
cityno: "qihe",
cityid: "101120405",
area_1: "山东",
area_2: "德州",
area_3: "齐河"
},
2352: {
weaid: "2352",
citynm: "福山",
cityno: "fushan",
cityid: "101120508",
area_1: "山东",
area_2: "烟台",
area_3: "福山"
},
2353: {
weaid: "2353",
citynm: "垦利",
cityno: "kenli",
cityid: "101121203",
area_1: "山东",
area_2: "东营",
area_3: "垦利"
},
2354: {
weaid: "2354",
citynm: "文登",
cityno: "wendeng",
cityid: "101121302",
area_1: "山东",
area_2: "威海",
area_3: "文登"
},
2355: {
weaid: "2355",
citynm: "荣成",
cityno: "rongcheng",
cityid: "101121303",
area_1: "山东",
area_2: "威海",
area_3: "荣成"
},
2356: {
weaid: "2356",
citynm: "乳山",
cityno: "rushan",
cityid: "101121304",
area_1: "山东",
area_2: "威海",
area_3: "乳山"
},
2359: {
weaid: "2359",
citynm: "薛城",
cityno: "xuecheng",
cityid: "101121402",
area_1: "山东",
area_2: "枣庄",
area_3: "薛城"
},
2360: {
weaid: "2360",
citynm: "峄城",
cityno: "yicheng",
cityid: "101121403",
area_1: "山东",
area_2: "枣庄",
area_3: "峄城"
},
2361: {
weaid: "2361",
citynm: "台儿庄",
cityno: "taierzhuang",
cityid: "101121404",
area_1: "山东",
area_2: "枣庄",
area_3: "台儿庄"
},
2362: {
weaid: "2362",
citynm: "五莲",
cityno: "wulian",
cityid: "101121502",
area_1: "山东",
area_2: "日照",
area_3: "五莲"
},
2363: {
weaid: "2363",
citynm: "冠县",
cityno: "guanxian",
cityid: "101121702",
area_1: "山东",
area_2: "聊城",
area_3: "冠县"
},
2364: {
weaid: "2364",
citynm: "阳谷",
cityno: "yanggu",
cityid: "101121703",
area_1: "山东",
area_2: "聊城",
area_3: "阳谷"
},
2365: {
weaid: "2365",
citynm: "高唐",
cityno: "gaotang",
cityid: "101121704",
area_1: "山东",
area_2: "聊城",
area_3: "高唐"
},
2366: {
weaid: "2366",
citynm: "茌平",
cityno: "chiping",
cityid: "101121705",
area_1: "山东",
area_2: "聊城",
area_3: "茌平"
},
2367: {
weaid: "2367",
citynm: "东阿",
cityno: "donge",
cityid: "101121706",
area_1: "山东",
area_2: "聊城",
area_3: "东阿"
},
2368: {
weaid: "2368",
citynm: "莘县",
cityno: "shenxian",
cityid: "101121709",
area_1: "山东",
area_2: "聊城",
area_3: "莘县"
},
2370: {
weaid: "2370",
citynm: "达坂城",
cityno: "dabancheng",
cityid: "101130105",
area_1: "新疆",
area_2: "乌鲁木齐",
area_3: "达坂城"
},
2374: {
weaid: "2374",
citynm: "乌尔禾",
cityno: "wuerhe",
cityid: "101130202",
area_1: "新疆",
area_2: "克拉玛依",
area_3: "乌尔禾"
},
2375: {
weaid: "2375",
citynm: "白碱滩",
cityno: "baijiantan",
cityid: "101130203",
area_1: "新疆",
area_2: "克拉玛依",
area_3: "白碱滩"
},
2383: {
weaid: "2383",
citynm: "疏附",
cityno: "shufu",
cityid: "101130911",
area_1: "新疆",
area_2: "喀什",
area_3: "疏附"
},
2384: {
weaid: "2384",
citynm: "疏勒",
cityno: "shule",
cityid: "101130912",
area_1: "新疆",
area_2: "喀什",
area_3: "疏勒"
},
2385: {
weaid: "2385",
citynm: "伊宁县",
cityno: "yiningxian",
cityid: "101131004",
area_1: "新疆",
area_2: "伊犁",
area_3: "伊宁县"
},
2386: {
weaid: "2386",
citynm: "霍尔果斯",
cityno: "huoerguosi",
cityid: "101131010",
area_1: "新疆",
area_2: "伊犁",
area_3: "霍尔果斯"
},
2387: {
weaid: "2387",
citynm: "阿拉山口",
cityno: "alashankou",
cityid: "101131606",
area_1: "新疆",
area_2: "博尔塔拉",
area_3: "阿拉山口"
},
2388: {
weaid: "2388",
citynm: "当雄",
cityno: "dangxiong",
cityid: "101140102",
area_1: "西藏",
area_2: "拉萨",
area_3: "当雄"
},
2389: {
weaid: "2389",
citynm: "林周",
cityno: "linzhou",
cityid: "101140104",
area_1: "西藏",
area_2: "拉萨",
area_3: "林周"
},
2390: {
weaid: "2390",
citynm: "堆龙德庆",
cityno: "duilongdeqing",
cityid: "101140105",
area_1: "西藏",
area_2: "拉萨",
area_3: "堆龙德庆"
},
2391: {
weaid: "2391",
citynm: "曲水",
cityno: "qushui",
cityid: "101140106",
area_1: "西藏",
area_2: "拉萨",
area_3: "曲水"
},
2392: {
weaid: "2392",
citynm: "达孜",
cityno: "dazi",
cityid: "101140107",
area_1: "西藏",
area_2: "拉萨",
area_3: "达孜"
},
2393: {
weaid: "2393",
citynm: "墨竹工卡",
cityno: "mozhugongka",
cityid: "101140108",
area_1: "西藏",
area_2: "拉萨",
area_3: "墨竹工卡"
},
2394: {
weaid: "2394",
citynm: "江孜",
cityno: "jiangzi",
cityid: "101140206",
area_1: "西藏",
area_2: "日喀则",
area_3: "江孜"
},
2396: {
weaid: "2396",
citynm: "仲巴",
cityno: "zhongba",
cityid: "101140208",
area_1: "西藏",
area_2: "日喀则",
area_3: "仲巴"
},
2397: {
weaid: "2397",
citynm: "萨嘎",
cityno: "saga",
cityid: "101140209",
area_1: "西藏",
area_2: "日喀则",
area_3: "萨嘎"
},
2398: {
weaid: "2398",
citynm: "吉隆",
cityno: "jilong",
cityid: "101140210",
area_1: "西藏",
area_2: "日喀则",
area_3: "吉隆"
},
2399: {
weaid: "2399",
citynm: "昂仁",
cityno: "angren",
cityid: "101140211",
area_1: "西藏",
area_2: "日喀则",
area_3: "昂仁"
},
2400: {
weaid: "2400",
citynm: "定结",
cityno: "dingjie",
cityid: "101140212",
area_1: "西藏",
area_2: "日喀则",
area_3: "定结"
},
2401: {
weaid: "2401",
citynm: "萨迦",
cityno: "sajia",
cityid: "101140213",
area_1: "西藏",
area_2: "日喀则",
area_3: "萨迦"
},
2402: {
weaid: "2402",
citynm: "谢通门",
cityno: "xietongmen",
cityid: "101140214",
area_1: "西藏",
area_2: "日喀则",
area_3: "谢通门"
},
2403: {
weaid: "2403",
citynm: "岗巴",
cityno: "gangba",
cityid: "101140216",
area_1: "西藏",
area_2: "日喀则",
area_3: "岗巴"
},
2404: {
weaid: "2404",
citynm: "白朗",
cityno: "bailang",
cityid: "101140217",
area_1: "西藏",
area_2: "日喀则",
area_3: "白朗"
},
2405: {
weaid: "2405",
citynm: "亚东",
cityno: "yadong",
cityid: "101140218",
area_1: "西藏",
area_2: "日喀则",
area_3: "亚东"
},
2406: {
weaid: "2406",
citynm: "康马",
cityno: "kangma",
cityid: "101140219",
area_1: "西藏",
area_2: "日喀则",
area_3: "康马"
},
2407: {
weaid: "2407",
citynm: "仁布",
cityno: "renbu",
cityid: "101140220",
area_1: "西藏",
area_2: "日喀则",
area_3: "仁布"
},
2408: {
weaid: "2408",
citynm: "贡嘎",
cityno: "gongga",
cityid: "101140302",
area_1: "西藏",
area_2: "山南",
area_3: "贡嘎"
},
2409: {
weaid: "2409",
citynm: "札囊",
cityno: "zhanan",
cityid: "101140303",
area_1: "西藏",
area_2: "山南",
area_3: "扎囊"
},
2410: {
weaid: "2410",
citynm: "加查",
cityno: "jiacha",
cityid: "101140304",
area_1: "西藏",
area_2: "山南",
area_3: "加查"
},
2412: {
weaid: "2412",
citynm: "乃东",
cityno: "naidong",
cityid: "101140309",
area_1: "西藏",
area_2: "山南",
area_3: "乃东"
},
2413: {
weaid: "2413",
citynm: "桑日",
cityno: "sangri",
cityid: "101140310",
area_1: "西藏",
area_2: "山南",
area_3: "桑日"
},
2414: {
weaid: "2414",
citynm: "洛扎",
cityno: "luozha",
cityid: "101140311",
area_1: "西藏",
area_2: "山南",
area_3: "洛扎"
},
2415: {
weaid: "2415",
citynm: "措美",
cityno: "cuomei",
cityid: "101140312",
area_1: "西藏",
area_2: "山南",
area_3: "措美"
},
2416: {
weaid: "2416",
citynm: "琼结",
cityno: "qiongjie",
cityid: "101140313",
area_1: "西藏",
area_2: "山南",
area_3: "琼结"
},
2417: {
weaid: "2417",
citynm: "曲松",
cityno: "qusong",
cityid: "101140314",
area_1: "西藏",
area_2: "山南",
area_3: "曲松"
},
2418: {
weaid: "2418",
citynm: "波密",
cityno: "bomi",
cityid: "101140402",
area_1: "西藏",
area_2: "林芝",
area_3: "波密"
},
2419: {
weaid: "2419",
citynm: "米林",
cityno: "milin",
cityid: "101140403",
area_1: "西藏",
area_2: "林芝",
area_3: "米林"
},
2420: {
weaid: "2420",
citynm: "察隅",
cityno: "chayu",
cityid: "101140404",
area_1: "西藏",
area_2: "林芝",
area_3: "察隅"
},
2421: {
weaid: "2421",
citynm: "工布江达",
cityno: "gongbujiangda",
cityid: "101140405",
area_1: "西藏",
area_2: "林芝",
area_3: "工布江达"
},
2422: {
weaid: "2422",
citynm: "朗县",
cityno: "langxian",
cityid: "101140406",
area_1: "西藏",
area_2: "林芝",
area_3: "朗县"
},
2423: {
weaid: "2423",
citynm: "墨脱",
cityno: "motuo",
cityid: "101140407",
area_1: "西藏",
area_2: "林芝",
area_3: "墨脱"
},
2424: {
weaid: "2424",
citynm: "边坝",
cityno: "bianba",
cityid: "101140503",
area_1: "西藏",
area_2: "昌都",
area_3: "边坝"
},
2425: {
weaid: "2425",
citynm: "类乌齐",
cityno: "leiwuqi",
cityid: "101140507",
area_1: "西藏",
area_2: "昌都",
area_3: "类乌齐"
},
2426: {
weaid: "2426",
citynm: "八宿",
cityno: "basu",
cityid: "101140508",
area_1: "西藏",
area_2: "昌都",
area_3: "八宿"
},
2427: {
weaid: "2427",
citynm: "江达",
cityno: "jiangda",
cityid: "101140509",
area_1: "西藏",
area_2: "昌都",
area_3: "江达"
},
2428: {
weaid: "2428",
citynm: "察雅",
cityno: "chaya",
cityid: "101140510",
area_1: "西藏",
area_2: "昌都",
area_3: "察雅"
},
2429: {
weaid: "2429",
citynm: "贡觉",
cityno: "gongjue",
cityid: "101140511",
area_1: "西藏",
area_2: "昌都",
area_3: "贡觉"
},
2430: {
weaid: "2430",
citynm: "尼玛",
cityno: "nima",
cityid: "101140602",
area_1: "西藏",
area_2: "那曲",
area_3: "尼玛"
},
2431: {
weaid: "2431",
citynm: "安多",
cityno: "anduo",
cityid: "101140605",
area_1: "西藏",
area_2: "那曲",
area_3: "安多"
},
2432: {
weaid: "2432",
citynm: "索县",
cityno: "suoxian",
cityid: "101140606",
area_1: "西藏",
area_2: "那曲",
area_3: "索县"
},
2433: {
weaid: "2433",
citynm: "聂荣",
cityno: "nierong",
cityid: "101140607",
area_1: "西藏",
area_2: "那曲",
area_3: "聂荣"
},
2434: {
weaid: "2434",
citynm: "巴青",
cityno: "baqing",
cityid: "101140608",
area_1: "西藏",
area_2: "那曲",
area_3: "巴青"
},
2435: {
weaid: "2435",
citynm: "比如",
cityno: "biru",
cityid: "101140609",
area_1: "西藏",
area_2: "那曲",
area_3: "比如"
},
2436: {
weaid: "2436",
citynm: "双湖",
cityno: "shuanghu",
cityid: "101140610",
area_1: "西藏",
area_2: "那曲",
area_3: "双湖"
},
2438: {
weaid: "2438",
citynm: "札达",
cityno: "zhada",
cityid: "101140706",
area_1: "西藏",
area_2: "阿里",
area_3: "札达"
},
2439: {
weaid: "2439",
citynm: "噶尔",
cityno: "gaer",
cityid: "101140707",
area_1: "西藏",
area_2: "阿里",
area_3: "噶尔"
},
2440: {
weaid: "2440",
citynm: "日土",
cityno: "ritu",
cityid: "101140708",
area_1: "西藏",
area_2: "阿里",
area_3: "日土"
},
2441: {
weaid: "2441",
citynm: "革吉",
cityno: "geji",
cityid: "101140709",
area_1: "西藏",
area_2: "阿里",
area_3: "革吉"
},
2442: {
weaid: "2442",
citynm: "措勤",
cityno: "cuoqin",
cityid: "101140710",
area_1: "西藏",
area_2: "阿里",
area_3: "措勤"
},
2443: {
weaid: "2443",
citynm: "湟中",
cityno: "huangzhong",
cityid: "101150104",
area_1: "青海",
area_2: "西宁",
area_3: "湟中"
},
2445: {
weaid: "2445",
citynm: "称多",
cityno: "chenduo",
cityid: "101150602",
area_1: "青海",
area_2: "玉树",
area_3: "称多"
},
2446: {
weaid: "2446",
citynm: "囊谦",
cityno: "nangqian",
cityid: "101150605",
area_1: "青海",
area_2: "玉树",
area_3: "囊谦"
},
2449: {
weaid: "2449",
citynm: "崆峒",
cityno: "kongtong",
cityid: "101160308",
area_1: "甘肃",
area_2: "平凉",
area_3: "崆峒"
},
2450: {
weaid: "2450",
citynm: "庆城",
cityno: "qingcheng",
cityid: "101160409",
area_1: "甘肃",
area_2: "庆阳",
area_3: "庆城"
},
2451: {
weaid: "2451",
citynm: "阿克塞",
cityno: "akesai",
cityid: "101160804",
area_1: "甘肃",
area_2: "酒泉",
area_3: "阿克塞"
},
2452: {
weaid: "2452",
citynm: "麦积",
cityno: "maiji",
cityid: "101160908",
area_1: "甘肃",
area_2: "天水",
area_3: "麦积"
},
2453: {
weaid: "2453",
citynm: "宕昌",
cityno: "dangchang",
cityid: "101161004",
area_1: "甘肃",
area_2: "陇南",
area_3: "宕昌"
},
2454: {
weaid: "2454",
citynm: "东乡",
cityno: "dongxiang",
cityid: "101161106",
area_1: "甘肃",
area_2: "临夏",
area_3: "东乡"
},
2455: {
weaid: "2455",
citynm: "积石山",
cityno: "jishishan",
cityid: "101161107",
area_1: "甘肃",
area_2: "临夏",
area_3: "积石山"
},
2456: {
weaid: "2456",
citynm: "平川",
cityno: "pingchuan",
cityid: "101161304",
area_1: "甘肃",
area_2: "白银",
area_3: "平川"
},
2457: {
weaid: "2457",
citynm: "上街",
cityno: "shangjie",
cityid: "101180108",
area_1: "河南",
area_2: "郑州",
area_3: "上街"
},
2458: {
weaid: "2458",
citynm: "林州",
cityno: "linzhou",
cityid: "101180205",
area_1: "河南",
area_2: "安阳",
area_3: "林州"
},
2459: {
weaid: "2459",
citynm: "石龙",
cityno: "shilong",
cityid: "101180508",
area_1: "河南",
area_2: "平顶山",
area_3: "石龙"
},
2460: {
weaid: "2460",
citynm: "吉利",
cityno: "jili",
cityid: "101180911",
area_1: "河南",
area_2: "洛阳",
area_3: "吉利"
},
2461: {
weaid: "2461",
citynm: "孟州",
cityno: "mengzhou",
cityid: "101181108",
area_1: "河南",
area_2: "焦作",
area_3: "孟州"
},
2462: {
weaid: "2462",
citynm: "义马",
cityno: "yima",
cityid: "101181705",
area_1: "河南",
area_2: "三门峡",
area_3: "义马"
},
2463: {
weaid: "2463",
citynm: "陕县",
cityno: "shanxian",
cityid: "101181706",
area_1: "河南",
area_2: "三门峡",
area_3: "陕县"
},
2464: {
weaid: "2464",
citynm: "浦口",
cityno: "pukou",
cityid: "101190107",
area_1: "江苏",
area_2: "南京",
area_3: "浦口"
},
2465: {
weaid: "2465",
citynm: "锡山",
cityno: "xishan",
cityid: "101190204",
area_1: "江苏",
area_2: "无锡",
area_3: "锡山"
},
2466: {
weaid: "2466",
citynm: "丹徒",
cityno: "dantu",
cityid: "101190305",
area_1: "江苏",
area_2: "镇江",
area_3: "丹徒"
},
2467: {
weaid: "2467",
citynm: "吴中",
cityno: "wuzhong",
cityid: "101190405",
area_1: "江苏",
area_2: "苏州",
area_3: "吴中"
},
2468: {
weaid: "2468",
citynm: "通州",
cityno: "tongzhou",
cityid: "101190509",
area_1: "江苏",
area_2: "南通",
area_3: "通州"
},
2469: {
weaid: "2469",
citynm: "邗江",
cityno: "hanjiang",
cityid: "101190606",
area_1: "江苏",
area_2: "扬州",
area_3: "邗江"
},
2470: {
weaid: "2470",
citynm: "盐都",
cityno: "yandu",
cityid: "101190709",
area_1: "江苏",
area_2: "盐城",
area_3: "盐都"
},
2471: {
weaid: "2471",
citynm: "铜山",
cityno: "tongshan",
cityid: "101190802",
area_1: "江苏",
area_2: "徐州",
area_3: "铜山"
},
2472: {
weaid: "2472",
citynm: "淮阴区",
cityno: "huaiyinqu",
cityid: "101190906",
area_1: "江苏",
area_2: "淮安",
area_3: "淮阴区"
},
2473: {
weaid: "2473",
citynm: "淮安区",
cityno: "huaianqu",
cityid: "101190908",
area_1: "江苏",
area_2: "淮安",
area_3: "淮安区"
},
2474: {
weaid: "2474",
citynm: "武进",
cityno: "wujin",
cityid: "101191104",
area_1: "江苏",
area_2: "常州",
area_3: "武进"
},
2475: {
weaid: "2475",
citynm: "沭阳",
cityno: "shuyang",
cityid: "101191302",
area_1: "江苏",
area_2: "宿迁",
area_3: "沭阳"
},
2476: {
weaid: "2476",
citynm: "宿豫",
cityno: "suyu",
cityid: "101191305",
area_1: "江苏",
area_2: "宿迁",
area_3: "宿豫"
},
2477: {
weaid: "2477",
citynm: "东西湖",
cityno: "dongxihu",
cityid: "101200106",
area_1: "湖北",
area_2: "武汉",
area_3: "东西湖"
},
2478: {
weaid: "2478",
citynm: "襄州",
cityno: "xiangzhou",
cityid: "101200202",
area_1: "湖北",
area_2: "襄阳",
area_3: "襄州"
},
2479: {
weaid: "2479",
citynm: "梁子湖",
cityno: "liangzihu",
cityid: "101200302",
area_1: "湖北",
area_2: "鄂州",
area_3: "梁子湖"
},
2480: {
weaid: "2480",
citynm: "孝昌",
cityno: "xiaochang",
cityid: "101200407",
area_1: "湖北",
area_2: "孝感",
area_3: "孝昌"
},
2481: {
weaid: "2481",
citynm: "团风",
cityno: "tuanfeng",
cityid: "101200510",
area_1: "湖北",
area_2: "黄冈",
area_3: "团风"
},
2482: {
weaid: "2482",
citynm: "铁山",
cityno: "tieshan",
cityid: "101200604",
area_1: "湖北",
area_2: "黄石",
area_3: "铁山"
},
2483: {
weaid: "2483",
citynm: "下陆",
cityno: "xialu",
cityid: "101200605",
area_1: "湖北",
area_2: "黄石",
area_3: "下陆"
},
2484: {
weaid: "2484",
citynm: "西塞山",
cityno: "xisaishan",
cityid: "101200606",
area_1: "湖北",
area_2: "黄石",
area_3: "西塞山"
},
2485: {
weaid: "2485",
citynm: "宜都",
cityno: "yidu",
cityid: "101200909",
area_1: "湖北",
area_2: "宜昌",
area_3: "宜都"
},
2487: {
weaid: "2487",
citynm: "夷陵",
cityno: "yiling",
cityid: "101200912",
area_1: "湖北",
area_2: "宜昌",
area_3: "夷陵"
},
2488: {
weaid: "2488",
citynm: "茅箭",
cityno: "maojian",
cityid: "101201108",
area_1: "湖北",
area_2: "十堰",
area_3: "茅箭"
},
2489: {
weaid: "2489",
citynm: "张湾",
cityno: "zhangwan",
cityid: "101201109",
area_1: "湖北",
area_2: "十堰",
area_3: "张湾"
},
2490: {
weaid: "2490",
citynm: "掇刀",
cityno: "duodao",
cityid: "101201404",
area_1: "湖北",
area_2: "荆门",
area_3: "掇刀"
},
2491: {
weaid: "2491",
citynm: "沙洋",
cityno: "shayang",
cityid: "101201405",
area_1: "湖北",
area_2: "荆门",
area_3: "沙洋"
},
2493: {
weaid: "2493",
citynm: "象山",
cityno: "xiangshan",
cityid: "101210406",
area_1: "浙江",
area_2: "宁波",
area_3: "象山"
},
2494: {
weaid: "2494",
citynm: "北仑",
cityno: "beilun",
cityid: "101210410",
area_1: "浙江",
area_2: "宁波",
area_3: "北仑"
},
2495: {
weaid: "2495",
citynm: "鄞州",
cityno: "yinzhou",
cityid: "101210411",
area_1: "浙江",
area_2: "宁波",
area_3: "鄞州"
},
2496: {
weaid: "2496",
citynm: "嵊州",
cityno: "shengzhou",
cityid: "101210505",
area_1: "浙江",
area_2: "绍兴",
area_3: "嵊州"
},
2497: {
weaid: "2497",
citynm: "柯桥",
cityno: "keqiao",
cityid: "101210506",
area_1: "浙江",
area_2: "绍兴",
area_3: "柯桥"
},
2499: {
weaid: "2499",
citynm: "路桥",
cityno: "luqiao",
cityid: "101210613",
area_1: "浙江",
area_2: "台州",
area_3: "路桥"
},
2500: {
weaid: "2500",
citynm: "衢江",
cityno: "qujiang",
cityid: "101211006",
area_1: "浙江",
area_2: "衢州",
area_3: "衢江"
},
2501: {
weaid: "2501",
citynm: "定海",
cityno: "dinghai",
cityid: "101211106",
area_1: "浙江",
area_2: "舟山",
area_3: "定海"
},
2502: {
weaid: "2502",
citynm: "巢湖",
cityno: "chaohu",
cityid: "101220105",
area_1: "安徽",
area_2: "合肥",
area_3: "巢湖"
},
2503: {
weaid: "2503",
citynm: "庐江",
cityno: "lujiang",
cityid: "101220106",
area_1: "安徽",
area_2: "合肥",
area_3: "庐江"
},
2504: {
weaid: "2504",
citynm: "芜湖县",
cityno: "wuhuxian",
cityid: "101220303",
area_1: "安徽",
area_2: "芜湖",
area_3: "芜湖县"
},
2505: {
weaid: "2505",
citynm: "无为",
cityno: "wuwei",
cityid: "101220305",
area_1: "安徽",
area_2: "芜湖",
area_3: "无为"
},
2506: {
weaid: "2506",
citynm: "潘集",
cityno: "panji",
cityid: "101220403",
area_1: "安徽",
area_2: "淮南",
area_3: "潘集"
},
2507: {
weaid: "2507",
citynm: "含山",
cityno: "hanshan",
cityid: "101220503",
area_1: "安徽",
area_2: "马鞍山",
area_3: "含山"
},
2508: {
weaid: "2508",
citynm: "和县",
cityno: "hexian",
cityid: "101220504",
area_1: "安徽",
area_2: "马鞍山",
area_3: "和县"
},
2509: {
weaid: "2509",
citynm: "黄山区",
cityno: "huangshanqu",
cityid: "101221002",
area_1: "安徽",
area_2: "黄山",
area_3: "黄山区"
},
2510: {
weaid: "2510",
citynm: "屯溪",
cityno: "tunxi",
cityid: "101221003",
area_1: "安徽",
area_2: "黄山",
area_3: "屯溪"
},
2512: {
weaid: "2512",
citynm: "九华山",
cityno: "jiuhuashan",
cityid: "101221704",
area_1: "安徽",
area_2: "池州",
area_3: "九华山"
},
2513: {
weaid: "2513",
citynm: "闽侯",
cityno: "minhou",
cityid: "101230103",
area_1: "福建",
area_2: "福州",
area_3: "闽侯"
},
2515: {
weaid: "2515",
citynm: "涵江",
cityno: "hanjiang",
cityid: "101230404",
area_1: "福建",
area_2: "莆田",
area_3: "涵江"
},
2516: {
weaid: "2516",
citynm: "秀屿",
cityno: "xiuyu",
cityid: "101230405",
area_1: "福建",
area_2: "莆田",
area_3: "秀屿"
},
2517: {
weaid: "2517",
citynm: "荔城",
cityno: "licheng",
cityid: "101230406",
area_1: "福建",
area_2: "莆田",
area_3: "荔城"
},
2518: {
weaid: "2518",
citynm: "城厢",
cityno: "chengxiang",
cityid: "101230407",
area_1: "福建",
area_2: "莆田",
area_3: "城厢"
},
2520: {
weaid: "2520",
citynm: "惠安",
cityno: "huian",
cityid: "101230508",
area_1: "福建",
area_2: "泉州",
area_3: "惠安"
},
2521: {
weaid: "2521",
citynm: "石狮",
cityno: "shishi",
cityid: "101230510",
area_1: "福建",
area_2: "泉州",
area_3: "石狮"
},
2522: {
weaid: "2522",
citynm: "钓鱼岛",
cityno: "diaoyudao",
cityid: "101231001",
area_1: "福建",
area_2: "钓鱼岛",
area_3: "城区"
},
2523: {
weaid: "2523",
citynm: "南昌县",
cityno: "nanchangxian",
cityid: "101240103",
area_1: "江西",
area_2: "南昌",
area_3: "南昌县"
},
2524: {
weaid: "2524",
citynm: "鄱阳",
cityno: "poyang",
cityid: "101240302",
area_1: "江西",
area_2: "上饶",
area_3: "鄱阳"
},
2525: {
weaid: "2525",
citynm: "上饶县",
cityno: "shangraoxian",
cityid: "101240308",
area_1: "江西",
area_2: "上饶",
area_3: "上饶县"
},
2526: {
weaid: "2526",
citynm: "乐安",
cityno: "anle",
cityid: "101240403",
area_1: "江西",
area_2: "抚州",
area_3: "乐安"
},
2527: {
weaid: "2527",
citynm: "吉安县",
cityno: "jianxian",
cityid: "101240602",
area_1: "江西",
area_2: "吉安",
area_3: "吉安县"
},
2528: {
weaid: "2528",
citynm: "赣县",
cityno: "ganxian",
cityid: "101240718",
area_1: "江西",
area_2: "赣州",
area_3: "赣县"
},
2529: {
weaid: "2529",
citynm: "浮梁",
cityno: "fuliang",
cityid: "101240803",
area_1: "江西",
area_2: "景德镇",
area_3: "浮梁"
},
2530: {
weaid: "2530",
citynm: "上栗",
cityno: "shangli",
cityid: "101240903",
area_1: "江西",
area_2: "萍乡",
area_3: "上栗"
},
2531: {
weaid: "2531",
citynm: "安源",
cityno: "anyuan",
cityid: "101240904",
area_1: "江西",
area_2: "萍乡",
area_3: "安源"
},
2532: {
weaid: "2532",
citynm: "芦溪",
cityno: "luxi",
cityid: "101240905",
area_1: "江西",
area_2: "萍乡",
area_3: "芦溪"
},
2533: {
weaid: "2533",
citynm: "湘东",
cityno: "xiangdong",
cityid: "101240906",
area_1: "江西",
area_2: "萍乡",
area_3: "湘东"
},
2534: {
weaid: "2534",
citynm: "湘江新区",
cityno: "xiangjiangxinqu",
cityid: "101250104",
area_1: "湖南",
area_2: "长沙",
area_3: "湘江新区"
},
2535: {
weaid: "2535",
citynm: "望城",
cityno: "wangcheng",
cityid: "101250105",
area_1: "湖南",
area_2: "长沙",
area_3: "望城"
},
2536: {
weaid: "2536",
citynm: "衡阳县",
cityno: "hengyangxian",
cityid: "101250405",
area_1: "湖南",
area_2: "衡阳",
area_3: "衡阳县"
},
2537: {
weaid: "2537",
citynm: "南岳",
cityno: "nanyue",
cityid: "101250409",
area_1: "湖南",
area_2: "衡阳",
area_3: "南岳"
},
2538: {
weaid: "2538",
citynm: "苏仙",
cityno: "suxian",
cityid: "101250512",
area_1: "湖南",
area_2: "郴州",
area_3: "苏仙"
},
2539: {
weaid: "2539",
citynm: "津市",
cityno: "jinshi",
cityid: "101250608",
area_1: "湖南",
area_2: "常德",
area_3: "津市"
},
2540: {
weaid: "2540",
citynm: "赫山区",
cityno: "heshanqu",
cityid: "101250701",
area_1: "湖南",
area_2: "益阳",
area_3: "赫山区"
},
2541: {
weaid: "2541",
citynm: "邵阳县",
cityno: "shaoyangxian",
cityid: "101250910",
area_1: "湖南",
area_2: "邵阳",
area_3: "邵阳县"
},
2542: {
weaid: "2542",
citynm: "武陵源",
cityno: "wulingyuan",
cityid: "101251104",
area_1: "湖南",
area_2: "张家界",
area_3: "武陵源"
},
2543: {
weaid: "2543",
citynm: "中方",
cityno: "zhongfang",
cityid: "101251212",
area_1: "湖南",
area_2: "怀化",
area_3: "中方"
},
2544: {
weaid: "2544",
citynm: "洪江",
cityno: "hongjiang",
cityid: "101251213",
area_1: "湖南",
area_2: "怀化",
area_3: "洪江"
},
2545: {
weaid: "2545",
citynm: "冷水滩",
cityno: "lengshuitan",
cityid: "101251411",
area_1: "湖南",
area_2: "永州",
area_3: "冷水滩"
},
2546: {
weaid: "2546",
citynm: "白云",
cityno: "baiyun",
cityid: "101260102",
area_1: "贵州",
area_2: "贵阳",
area_3: "白云"
},
2547: {
weaid: "2547",
citynm: "花溪",
cityno: "huaxi",
cityid: "101260103",
area_1: "贵州",
area_2: "贵阳",
area_3: "花溪"
},
2548: {
weaid: "2548",
citynm: "乌当",
cityno: "wudang",
cityid: "101260104",
area_1: "贵州",
area_2: "贵阳",
area_3: "乌当"
},
2550: {
weaid: "2550",
citynm: "云岩",
cityno: "yunyan",
cityid: "101260110",
area_1: "贵州",
area_2: "贵阳",
area_3: "云岩"
},
2551: {
weaid: "2551",
citynm: "南明",
cityno: "nanming",
cityid: "101260111",
area_1: "贵州",
area_2: "贵阳",
area_3: "南明"
},
2552: {
weaid: "2552",
citynm: "遵义县",
cityno: "zunyixian",
cityid: "101260202",
area_1: "贵州",
area_2: "遵义",
area_3: "遵义县"
},
2553: {
weaid: "2553",
citynm: "汇川",
cityno: "huichuan",
cityid: "101260214",
area_1: "贵州",
area_2: "遵义",
area_3: "汇川"
},
2554: {
weaid: "2554",
citynm: "红花岗",
cityno: "honghuagang",
cityid: "101260215",
area_1: "贵州",
area_2: "遵义",
area_3: "红花岗"
},
2555: {
weaid: "2555",
citynm: "瓮安",
cityno: "wengan",
cityid: "101260403",
area_1: "贵州",
area_2: "黔南",
area_3: "瓮安"
},
2556: {
weaid: "2556",
citynm: "黔西",
cityno: "qianxi",
cityid: "101260708",
area_1: "贵州",
area_2: "毕节",
area_3: "黔西"
},
2557: {
weaid: "2557",
citynm: "兴义",
cityno: "xingyi",
cityid: "101260901",
area_1: "贵州",
area_2: "黔西南",
area_3: "兴义"
},
2558: {
weaid: "2558",
citynm: "龙泉驿",
cityno: "longquanyi",
cityid: "101270102",
area_1: "四川",
area_2: "成都",
area_3: "龙泉驿"
},
2559: {
weaid: "2559",
citynm: "青白江",
cityno: "qingbaijiang",
cityid: "101270115",
area_1: "四川",
area_2: "成都",
area_3: "青白江"
},
2560: {
weaid: "2560",
citynm: "仁和",
cityno: "renhe",
cityid: "101270202",
area_1: "四川",
area_2: "攀枝花",
area_3: "仁和"
},
2561: {
weaid: "2561",
citynm: "北川",
cityno: "beichuan",
cityid: "101270406",
area_1: "四川",
area_2: "绵阳",
area_3: "北川"
},
2562: {
weaid: "2562",
citynm: "阆中",
cityno: "langzhong",
cityid: "101270507",
area_1: "四川",
area_2: "南充",
area_3: "阆中"
},
2563: {
weaid: "2563",
citynm: "通川",
cityno: "tongchuan",
cityid: "101270607",
area_1: "四川",
area_2: "达州",
area_3: "通川"
},
2564: {
weaid: "2564",
citynm: "达川",
cityno: "dachuan",
cityid: "101270608",
area_1: "四川",
area_2: "达州",
area_3: "达川"
},
2565: {
weaid: "2565",
citynm: "华蓥",
cityno: "huaying",
cityid: "101270805",
area_1: "四川",
area_2: "广安",
area_3: "华蓥"
},
2566: {
weaid: "2566",
citynm: "泸县",
cityno: "luxian",
cityid: "101271003",
area_1: "四川",
area_2: "泸州",
area_3: "泸县"
},
2567: {
weaid: "2567",
citynm: "宜宾县",
cityno: "yibinxian",
cityid: "101271103",
area_1: "四川",
area_2: "宜宾",
area_3: "宜宾县"
},
2568: {
weaid: "2568",
citynm: "东兴",
cityno: "dongxing",
cityid: "101271202",
area_1: "四川",
area_2: "内江",
area_3: "东兴"
},
2570: {
weaid: "2570",
citynm: "荥经",
cityno: "yingjing",
cityid: "101271703",
area_1: "四川",
area_2: "雅安",
area_3: "荥经"
},
2571: {
weaid: "2571",
citynm: "泸定",
cityno: "luding",
cityid: "101271803",
area_1: "四川",
area_2: "甘孜",
area_3: "泸定"
},
2572: {
weaid: "2572",
citynm: "丹巴",
cityno: "danba",
cityid: "101271804",
area_1: "四川",
area_2: "甘孜",
area_3: "丹巴"
},
2573: {
weaid: "2573",
citynm: "九龙",
cityno: "jiulong",
cityid: "101271805",
area_1: "四川",
area_2: "甘孜",
area_3: "九龙"
},
2574: {
weaid: "2574",
citynm: "雅江",
cityno: "yajiang",
cityid: "101271806",
area_1: "四川",
area_2: "甘孜",
area_3: "雅江"
},
2575: {
weaid: "2575",
citynm: "道孚",
cityno: "daofu",
cityid: "101271807",
area_1: "四川",
area_2: "甘孜",
area_3: "道孚"
},
2576: {
weaid: "2576",
citynm: "炉霍",
cityno: "luhuo",
cityid: "101271808",
area_1: "四川",
area_2: "甘孜",
area_3: "炉霍"
},
2577: {
weaid: "2577",
citynm: "新龙",
cityno: "xinlong",
cityid: "101271809",
area_1: "四川",
area_2: "甘孜",
area_3: "新龙"
},
2578: {
weaid: "2578",
citynm: "德格",
cityno: "dege",
cityid: "101271810",
area_1: "四川",
area_2: "甘孜",
area_3: "德格"
},
2579: {
weaid: "2579",
citynm: "白玉",
cityno: "baiyu",
cityid: "101271811",
area_1: "四川",
area_2: "甘孜",
area_3: "白玉"
},
2580: {
weaid: "2580",
citynm: "石渠",
cityno: "shiqu",
cityid: "101271812",
area_1: "四川",
area_2: "甘孜",
area_3: "石渠"
},
2581: {
weaid: "2581",
citynm: "色达",
cityno: "seda",
cityid: "101271813",
area_1: "四川",
area_2: "甘孜",
area_3: "色达"
},
2582: {
weaid: "2582",
citynm: "理塘",
cityno: "litang",
cityid: "101271814",
area_1: "四川",
area_2: "甘孜",
area_3: "理塘"
},
2583: {
weaid: "2583",
citynm: "巴塘",
cityno: "batang",
cityid: "101271815",
area_1: "四川",
area_2: "甘孜",
area_3: "巴塘"
},
2584: {
weaid: "2584",
citynm: "乡城",
cityno: "xiangcheng",
cityid: "101271816",
area_1: "四川",
area_2: "甘孜",
area_3: "乡城"
},
2585: {
weaid: "2585",
citynm: "稻城",
cityno: "daocheng",
cityid: "101271817",
area_1: "四川",
area_2: "甘孜",
area_3: "稻城"
},
2586: {
weaid: "2586",
citynm: "得荣",
cityno: "derong",
cityid: "101271818",
area_1: "四川",
area_2: "甘孜",
area_3: "得荣"
},
2587: {
weaid: "2587",
citynm: "九寨沟",
cityno: "jiuzhaigou",
cityid: "101271906",
area_1: "四川",
area_2: "阿坝",
area_3: "九寨沟"
},
2588: {
weaid: "2588",
citynm: "金川",
cityno: "jinchuan",
cityid: "101271907",
area_1: "四川",
area_2: "阿坝",
area_3: "金川"
},
2589: {
weaid: "2589",
citynm: "黑水",
cityno: "heishui",
cityid: "101271909",
area_1: "四川",
area_2: "阿坝",
area_3: "黑水"
},
2590: {
weaid: "2590",
citynm: "壤塘",
cityno: "rangtang",
cityid: "101271911",
area_1: "四川",
area_2: "阿坝",
area_3: "壤塘"
},
2591: {
weaid: "2591",
citynm: "若尔盖",
cityno: "nuoergai",
cityid: "101271912",
area_1: "四川",
area_2: "阿坝",
area_3: "若尔盖"
},
2592: {
weaid: "2592",
citynm: "红原",
cityno: "hongyuan",
cityid: "101271913",
area_1: "四川",
area_2: "阿坝",
area_3: "红原"
},
2593: {
weaid: "2593",
citynm: "罗江",
cityno: "luojiang",
cityid: "101272006",
area_1: "四川",
area_2: "德阳",
area_3: "罗江"
},
2594: {
weaid: "2594",
citynm: "浈江",
cityno: "zhenjiang",
cityid: "101280210",
area_1: "广东",
area_2: "韶关",
area_3: "浈江"
},
2595: {
weaid: "2595",
citynm: "武江",
cityno: "wujiang",
cityid: "101280211",
area_1: "广东",
area_2: "韶关",
area_3: "武江"
},
2596: {
weaid: "2596",
citynm: "梅县",
cityno: "meixian",
cityid: "101280409",
area_1: "广东",
area_2: "梅州",
area_3: "梅县"
},
2597: {
weaid: "2597",
citynm: "金湾",
cityno: "jinwan",
cityid: "101280703",
area_1: "广东",
area_2: "珠海",
area_3: "金湾"
},
2598: {
weaid: "2598",
citynm: "高明",
cityno: "gaoming",
cityid: "101280804",
area_1: "广东",
area_2: "佛山",
area_3: "高明"
},
2599: {
weaid: "2599",
citynm: "赤坎",
cityno: "chikan",
cityid: "101281006",
area_1: "广东",
area_2: "湛江",
area_3: "赤坎"
},
2600: {
weaid: "2600",
citynm: "坡头",
cityno: "potou",
cityid: "101281008",
area_1: "广东",
area_2: "湛江",
area_3: "坡头"
},
2601: {
weaid: "2601",
citynm: "霞山",
cityno: "xiashan",
cityid: "101281009",
area_1: "广东",
area_2: "湛江",
area_3: "霞山"
},
2602: {
weaid: "2602",
citynm: "麻章",
cityno: "mazhang",
cityid: "101281010",
area_1: "广东",
area_2: "湛江",
area_3: "麻章"
},
2603: {
weaid: "2603",
citynm: "蓬江",
cityno: "pengjiang",
cityid: "101281107",
area_1: "广东",
area_2: "江门",
area_3: "蓬江"
},
2604: {
weaid: "2604",
citynm: "江海",
cityno: "jianghai",
cityid: "101281109",
area_1: "广东",
area_2: "江门",
area_3: "江海"
},
2605: {
weaid: "2605",
citynm: "东源",
cityno: "dongyuan",
cityid: "101281206",
area_1: "广东",
area_2: "河源",
area_3: "东源"
},
2606: {
weaid: "2606",
citynm: "清新",
cityno: "qingxin",
cityid: "101281308",
area_1: "广东",
area_2: "清远",
area_3: "清新"
},
2607: {
weaid: "2607",
citynm: "云安",
cityno: "yunan",
cityid: "101281406",
area_1: "广东",
area_2: "云浮",
area_3: "云安"
},
2608: {
weaid: "2608",
citynm: "潮安",
cityno: "chaoan",
cityid: "101281503",
area_1: "广东",
area_2: "潮州",
area_3: "潮安"
},
2609: {
weaid: "2609",
citynm: "阳东",
cityno: "yangdong",
cityid: "101281803",
area_1: "广东",
area_2: "阳江",
area_3: "阳东"
},
2610: {
weaid: "2610",
citynm: "阳西",
cityno: "yangxi",
cityid: "101281804",
area_1: "广东",
area_2: "阳江",
area_3: "阳西"
},
2611: {
weaid: "2611",
citynm: "揭东",
cityno: "jiedong",
cityid: "101281905",
area_1: "广东",
area_2: "揭阳",
area_3: "揭东"
},
2613: {
weaid: "2613",
citynm: "陆河",
cityno: "luhe",
cityid: "101282104",
area_1: "广东",
area_2: "汕尾",
area_3: "陆河"
},
2615: {
weaid: "2615",
citynm: "云龙",
cityno: "yunlong",
cityid: "101290202",
area_1: "云南",
area_2: "大理",
area_3: "云龙"
},
2616: {
weaid: "2616",
citynm: "河口",
cityno: "hekou",
cityid: "101290313",
area_1: "云南",
area_2: "红河",
area_3: "河口"
},
2617: {
weaid: "2617",
citynm: "宁洱",
cityno: "ninger",
cityid: "101290912",
area_1: "云南",
area_2: "普洱",
area_3: "宁洱"
},
2618: {
weaid: "2618",
citynm: "水富",
cityno: "shuifu",
cityid: "101291011",
area_1: "云南",
area_2: "昭通",
area_3: "水富"
},
2619: {
weaid: "2619",
citynm: "云县",
cityno: "yunxian",
cityid: "101291107",
area_1: "云南",
area_2: "临沧",
area_3: "云县"
},
2620: {
weaid: "2620",
citynm: "合山",
cityno: "heshan",
cityid: "101300406",
area_1: "广西",
area_2: "来宾",
area_3: "合山"
},
2621: {
weaid: "2621",
citynm: "兴安",
cityno: "xingan",
cityid: "101300506",
area_1: "广西",
area_2: "桂林",
area_3: "兴安"
},
2622: {
weaid: "2622",
citynm: "兴业",
cityno: "xingye",
cityid: "101300906",
area_1: "广西",
area_2: "玉林",
area_3: "兴业"
},
2623: {
weaid: "2623",
citynm: "大化",
cityno: "dahua",
cityid: "101301211",
area_1: "广西",
area_2: "河池",
area_3: "大化"
},
2625: {
weaid: "2625",
citynm: "东兴",
cityno: "dongxing",
cityid: "101301403",
area_1: "广西",
area_2: "防城港",
area_3: "东兴"
},
2626: {
weaid: "2626",
citynm: "防城",
cityno: "fangcheng",
cityid: "101301405",
area_1: "广西",
area_2: "防城港",
area_3: "防城"
},
2628: {
weaid: "2628",
citynm: "香港",
cityno: "hongkong",
cityid: "101320101",
area_1: "香港",
area_2: "城区",
area_3: ""
},
2629: {
weaid: "2629",
citynm: "九龙",
cityno: "jiulong",
cityid: "101320102",
area_1: "香港",
area_2: "九龙",
area_3: ""
},
2630: {
weaid: "2630",
citynm: "新界",
cityno: "xinjie",
cityid: "101320103",
area_1: "香港",
area_2: "新界",
area_3: ""
},
2631: {
weaid: "2631",
citynm: "澳门",
cityno: "macao",
cityid: "101330101",
area_1: "澳门",
area_2: "城区",
area_3: ""
},
2632: {
weaid: "2632",
citynm: "氹仔岛",
cityno: "dangzidao",
cityid: "101330102",
area_1: "澳门",
area_2: "氹仔岛",
area_3: ""
},
2633: {
weaid: "2633",
citynm: "路环岛",
cityno: "luhuandao",
cityid: "101330103",
area_1: "澳门",
area_2: "路环岛",
area_3: ""
},
2634: {
weaid: "2634",
citynm: "桃园",
cityno: "taoyuan",
cityid: "101340102",
area_1: "台湾",
area_2: "台北",
area_3: "桃园"
},
2635: {
weaid: "2635",
citynm: "新竹",
cityno: "xinzhu",
cityid: "101340103",
area_1: "台湾",
area_2: "台北",
area_3: "新竹"
},
2636: {
weaid: "2636",
citynm: "宜兰",
cityno: "yilan",
cityid: "101340104",
area_1: "台湾",
area_2: "台北",
area_3: "宜兰"
},
2637: {
weaid: "2637",
citynm: "嘉义",
cityno: "jiayi",
cityid: "101340202",
area_1: "台湾",
area_2: "高雄",
area_3: "嘉义"
},
2638: {
weaid: "2638",
citynm: "台南",
cityno: "tainan",
cityid: "101340203",
area_1: "台湾",
area_2: "高雄",
area_3: "台南"
},
2639: {
weaid: "2639",
citynm: "台东",
cityno: "taidong",
cityid: "101340204",
area_1: "台湾",
area_2: "高雄",
area_3: "台东"
},
2640: {
weaid: "2640",
citynm: "屏东",
cityno: "pingdong",
cityid: "101340205",
area_1: "台湾",
area_2: "高雄",
area_3: "屏东"
},
2641: {
weaid: "2641",
citynm: "苗栗",
cityno: "miaoli",
cityid: "101340402",
area_1: "台湾",
area_2: "台中",
area_3: "苗栗"
},
2642: {
weaid: "2642",
citynm: "彰化",
cityno: "zhanghua",
cityid: "101340403",
area_1: "台湾",
area_2: "台中",
area_3: "彰化"
},
2643: {
weaid: "2643",
citynm: "南投",
cityno: "nantou",
cityid: "101340404",
area_1: "台湾",
area_2: "台中",
area_3: "南投"
},
2644: {
weaid: "2644",
citynm: "花莲",
cityno: "hualian",
cityid: "101340405",
area_1: "台湾",
area_2: "台中",
area_3: "花莲"
},
2645: {
weaid: "2645",
citynm: "云林",
cityno: "yunlin",
cityid: "101340406",
area_1: "台湾",
area_2: "台中",
area_3: "云林"
},
2648: {
weaid: "2648",
citynm: "多伦多",
cityno: "duolunduo",
cityid: "404040100",
area_1: "加拿大",
area_2: "多伦多(Toronto)",
area_3: ""
}
}
}
    $.each(cityJson,function(index,content){
       if(index=="result"){
        $.each(content,function(i,con){
            for(var id=0;id<2649;id++)
          {
            cityArray[parseInt(i)]=con.citynm;
          }
          
        });
       }
    });
};

function queryButton(cityArray){

    var cityName=$('.city')[0].value;
    $('.city')[0].value='';
    var cityArrayTemp=new Array();
    cityArrayTemp=cityName.split(' ');
    
    for(var n=0;n<cityArrayTemp.length;n++)
    {
        for(var i=1;i<2649;i++)
        {

            if(cityArray[i]==cityArrayTemp[n])
                break;
        }   
         query(i);  
    }
    
}

function query(cityid){
    if(cityid==2649)
    {
        alert("无此城市，请重新输入");
    }
    else
    {
        $.ajax({
         url: "http://api.k780.com:88/?app=weather.today&weaid="+cityid+"&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=?&"+Math.random(),
         dataType: "jsonp",
         type:"Post",
         jsonpCallback: "jsonpCallback",
         success: function (data) {

             $.each(data, function (i, v) {
                 if (i=="result")
                 {  
                    for(var x=0;x<cityE.length;x++)
                    {
                     if(cityE[x]==v.citynm)
                            break;
                    }
                    if(x<cityE.length&&cityE.length)
                    {
                        alert('已经查询过该城市');
                    }
                    else
                    {
                      cityE.push(v.citynm);  
                    var htmlTh='<tr><td>'+v.citynm
                    +'</td><td>'+v.weather+'<img src="'+v.weather_icon+'" alt="">'
                    +'</td><td>'+v.days
                    +'</td><td>'+v.temp_high
                    +'</td><td>'+v.temp_low
                    +'</td><td>'+v.humidity
                    +'</td><td>'+v.wind
                    +'</td><td>'+v.winp
                    +'</td></tr>';
                    $('tr:last').after(
                        htmlTh
                        );
                    
                    row++;
                    tableClass();
                    addSubtract();
                    order();         
                    }
                   
                 }
                
             });
         },
         error: function (responseText, textStatus, XMLHttpRequest) {
             alert(textStatus);
         }
         });
    }
}

function tableClass(){
    $("#con tr:odd").addClass('odd');
    $("#con tr:even").removeClass('odd');
    $("#con tr").hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });

}

function addSubtract(){
    $("#con tr").hover(function() {
        $(this).find('td:last').append('<span  class="subtract"></span>');
        $("span.subtract").click(function(event) {
        $(this).parent().parent().remove();
        row--;
        row_col();
        tableClass()
    });
    }, function() {
        $(this).find('.subtract').remove();
    });
}


function order(){
    $(".order,.reverse" ).click(function(event) {

        /* Act on the event */
        var flag=1;
        if( $(this).attr('class')=="reverse" )
        {

            flag=0;
        }
        var i=$(this).parent().index(); 
        var temp=new Array();
        for(var n=0;n<row;n++)
        {
            var m=n+1;
            temp[n]=$("tr:eq("+m+") td:eq("+i+")").text();
            
        }   
        var reg = /^\d+$/;

        for(var inp=0;inp<row-1;inp++)
        {
            for(var j=0;j<row-inp-1;j++)
            {
                if( temp[j].match(reg)&& temp[j+1].match(reg) )  //如果字符串全为数字
                {   
                    if(temp[j]==''||temp[j+1]=='')  {continue;}
                    
                    if ( flag? parseInt(temp[j])>parseInt(temp[j+1]) : parseInt(temp[j])<parseInt(temp[j+1])) 
                    {
                    var temp0;
                    temp0=temp[j];
                    temp[j]=temp[j+1];
                    temp[j+1]=temp0;

                    $("tr:eq("+(j+2)+")").insertBefore("tr:eq("+(j+1)+")");
                    
                    }

                }
                else
                {
                    if(temp[j]==''||temp[j+1]=='')  {continue;}
                    if ( flag? temp[j]>temp[j+1] : temp[j]<temp[j+1] ) 
                    {
                    var temp0;
                    temp0=temp[j];
                    temp[j]=temp[j+1];
                    temp[j+1]=temp0;

                    $("tr:eq("+(j+2)+")").insertBefore("tr:eq("+(j+1)+")");
                    }
                }
            }
        }
        tableClass();
    });


}