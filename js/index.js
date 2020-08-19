 /*pic01*/
var pic01 = document.getElementById("pic01");
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(pic01);
var option = {
    animationDuration:4000,
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        right: '4%',
        top: '6%',
        data: ['湖南', '上海', '北京', '浙江', '山东', '江西','深圳','哈尔滨'],
        orient: 'vertical',
        textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 12
        },
        align:'left',
        padding:10

    },
   color:['#2bf8ff','#478af8', '#40f453', '#16f9c2', '#eca00e','#faee04',  '#00479d', '#2f4655'],
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 100],
            center: ['40%', '50%'],
            roseType: 'area',
            data: [
                {value: 20, name: '江西'},
                {value: 18, name: '上海'},
                {value: 16, name: '浙江'},
                {value: 4, name: '山东'},
                {value: 8, name: '北京'},
                {value: 7, name: '湖南'},
                {value: 13, name: '哈尔滨'},
                {value: 14, name: '深圳'}
            ],
            labelLine:{
                normal:{
                    length:10,  // 改变标示线的长度
                    lineStyle: {
                        color: "#c13ada"  // 改变标示线的颜色
                    }
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'  // 改变标示文字的颜色
                    }
                }
            },
        }
    ]

};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
/*pic02*/
 var pic02 = document.getElementById("pic02");
 var myChart2 = echarts.init(pic02);
 var option2 = {
     animationDuration:4000,
     tooltip: {
         trigger: 'item',
         formatter: '{a} <br/>{b}: {c} ({d}%)'
     },

     series: [
         {
             // name:'部门',
             type:'pie',
             radius: ['0%', '20%'],
             color:['#0a0a23'],
             label: {
                 normal: {
                     position: 'center',
                     fontSize: 12,
                     fontFamily:'Microsoft YaHei',
                     color:'#00baff',
                     lineHeight:14
                 }
             },
             data:[
                 {value:22, name:"总收入" + "\n" + "12,000"}
             ]
         },
         {
             // name: '访问来源',
             type: 'pie',
             selectedMode: 'single',
             radius: ['27%', '23%'],
             color:['#3f797d','#7f5111','#b87653', '#70a84b' ],

             label: {
                 position: 'inner',

             },
             labelLine: {
                 show: false
             },
             data: [
                 {value: 24},
                 {value: 21},
                 {value: 18},
                 {value: 27},

             ]
         },
         {
             type: 'pie',
             selectedMode: 'single',
             radius: ['30%', '35%'],
             color:['#3f797d','#7f5111','#b87653', '#70a84b' ],

             label: {
                 position: 'inner'
             },
             labelLine: {
                 show: false
             },
             data: [
                 {value: 24},
                 {value: 21},
                 {value: 18},
                 {value: 27},
             ]
         },
         {
             name: '季度',
             type: 'pie',
             radius: ['40%', '50%'],
             color:['#00a0e9','#f39800', '#ff455b', '#62ff85'],
             labelLine:{
                 normal:{
                     length:30,  // 改变标示线的长度

                 },
             },
             label: {
                 formatter: '{per|{d}%} \n{hr|}\n  {b|{b}}  ',
                 borderRadius: 4,
                 rich: {

                     hr: {
                         borderColor: '#aaa',
                         width: '100%',
                         borderWidth: 0.5,
                         height: 0
                     },
                     b: {
                         fontSize: 12,
                         lineHeight: 33
                     },
                     per: {
                         color: '#eee',
                         padding: [2, 4],
                         borderRadius: 2,
                         lineHeight: 24
                     }
                 }

             },
             data: [
                 {value: 24, name: '第一季度'},
                 {value: 21, name: '第二季度'},
                 {value: 18, name: '第三季度'},
                 {value: 27, name: '第四季度'},

             ]
         }
     ]
 };
 myChart2.setOption(option2);
 /*pic03*/
 var pic03 = document.getElementById("pic03");
 var myChart3 = echarts.init(pic03);
 var option3 = {
     animationDuration:4000,
     tooltip: {
         trigger: 'item',
         formatter: '{a} <br/>{b}: {c} ({d}%)'
     },
     series: [
         {
             type:'pie',
             radius: ['0%', '20%'],
             color:['#0a0a23'],
             label: {
                 normal: {
                     position: 'center',
                     fontSize: 12,
                     fontFamily:'Microsoft YaHei',
                     color:'#00baff',
                     lineHeight:14
                 }
             },
             data:[
                 {value:22, name:"业务利润" + "\n" + "18,900"}
             ]
         },
         {
             type: 'pie',
             selectedMode: 'single',
             radius: ['27%', '23%'],
             color:['#3f797d','#7f5111','#b87653', '#70a84b' ],

             label: {
                 position: 'inner',

             },
             labelLine: {
                 show: false
             },
             data: [
                 {value: 14},
                 {value: 28},
                 {value: 18},
                 {value: 30},

             ]
         },
         {
             type: 'pie',
             selectedMode: 'single',
             radius: ['30%', '35%'],
             color:['#3f797d','#7f5111','#b87653', '#70a84b' ],

             label: {
                 position: 'inner'
             },
             labelLine: {
                 show: false
             },
             data: [
                 {value: 14},
                 {value: 28},
                 {value: 18},
                 {value: 30},
             ]
         },
         {
             name: '季度',
             type: 'pie',
             radius: ['40%', '50%'],
             color:['#00a0e9','#f39800', '#ff455b', '#62ff85'],
             labelLine:{
                 normal:{
                     length:30,  // 改变标示线的长度

                 },
             },
             label: {
                 formatter: '{per|{d}%} \n{hr|}\n  {b|{b}}  ',
                 borderRadius: 4,
                 rich: {

                     hr: {
                         borderColor: '#aaa',
                         width: '100%',
                         borderWidth: 0.5,
                         height: 0
                     },
                     b: {
                         fontSize: 12,
                         lineHeight: 33
                     },
                     per: {
                         color: '#eee',
                         padding: [2, 4],
                         borderRadius: 2,
                         lineHeight: 24
                     }
                 }

             },
             data: [
                 {value: 14, name: '第一季度'},
                 {value: 28, name: '第二季度'},
                 {value: 18, name: '第三季度'},
                 {value: 30, name: '第四季度'},

             ]
         }
     ]
 };
 myChart3.setOption(option3);
 /*pic04  top-left*/
 var leftw = document.getElementById("leftw");
 var myChart4 = echarts.init(leftw);
 var option4 = {
     animationDuration:4000,
     series:[{
     type: 'liquidFill',
     radius: '80%',
     data: [0.5, 0.45, 0.4, 0.3],
     color:['#9b5eee','#9b5eee'],
     backgroundColor:'#2c214f',
     backgroundStyle: {
         color: '#2c214f',       // 内部球背景颜色
         borderWidth: 3,         // 内部球边框宽度
         borderColor: '#b57fff'// 内部球边框颜色
     },
     label: {
         normal: {
             textStyle: {
                 color: '#9556ea',
                 insideColor:'#9556ea',
                 fontSize: 12
             }
         }
     },
         outline: {
             borderDistance: 0, // 外边框与内边框间的距离
             itemStyle: {
                 borderWidth: 7,// 外边框的宽度
                 borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面        // 外边框的颜色（渐变色）
                     offset: 1,
                     color: '#2c214f'
                 }, {
                     offset: 1,
                     color: '#b57fff'
                 }]),
             }
         },
 }]
 };
 myChart4.setOption(option4);
 /*pic04  top-right*/
 var rightw = document.getElementById("rightw");
 var myChart5 = echarts.init(rightw);
 var option5 = {
     animationDuration:4000,
     series:[{
         type: 'liquidFill',
         radius: '80%',
         data: [0.5, 0.45, 0.4, 0.3],
         color:['#496dbf','#7494d5'],
         backgroundColor:'#2c214f',
         backgroundStyle: {
             color: '#082a4b',       // 内部球背景颜色
             borderWidth: 3,         // 内部球边框宽度
             borderColor: '#00a8ec'// 内部球边框颜色
         },
         label: {
             normal: {
                 textStyle: {
                     color: '#4569bd',
                     insideColor:'#4569bd',
                     fontSize: 12
                 }
             }
         },
         outline: {
             borderDistance: 0, // 外边框与内边框间的距离
             itemStyle: {
                 borderWidth: 7,// 外边框的宽度
                 borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面        // 外边框的颜色（渐变色）
                     offset: 1,
                     color: '#082a4b'
                 }, {
                     offset: 1,
                     color: '#b57fff'
                 }]),
             }
         },
     }]
 };
 myChart5.setOption(option5);
 /*pic04  bottom*/
 var bottom1 = document.getElementById("bottom1");
 var myChart6 = echarts.init(bottom1);
 var option6 = {
     animationDuration:4000,
     tooltip: {
         trigger: 'axis',
         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     color:['#00f6ff'],
     grid: {
         left: '3%',
         right: '4%',
         bottom: '20%',
         containLabel: true
     },
     xAxis: {
         type: 'value',
         "show" : false,
         "splitLine": {
             "show": false
         }

     },
     yAxis: {
         type: 'category',
         data: ['北京', '上海', '重庆', '浙江', '深圳'],
         "axisLine":{       //y轴
             "show":false

         },
         "axisTick":{       //y轴刻度线
             "show":false
         },
         "splitLine": {     //网格线
             "show": false
         },
         axisLabel : {
             formatter: '{value}',
             textStyle: {
                 color: '#fff'
             },

         }
     },
     series: [
         {
             type: 'bar',
             stack: '总量',
             label: {
                 show: true,
                 position: 'right',
                 textStyle:{
                     color:"#fff"
                 }

             },
             data: [1320, 800, 1301, 1000, 900],
             barWidth : 15,//柱图宽度
             // barGap:'50%'//柱图间距
             barCategoryGap: '70%'

         },

     ]
 };
 myChart6.setOption(option6);
 /*pic05  bottom*/
 var pic05 = document.getElementById("pic05");
 var myChart7 = echarts.init(pic05);
 var option7 = {
     animationDuration:4000,
     xAxis: {
         type: 'category',
         data: ['北京', '上海', '重庆', '浙江', '深圳'],
         "splitLine": {     //网格线
             "show": false
         },
         axisLabel: {
             color: "#fff" //刻度线标签颜色
         }

     },
     yAxis: {
         type: 'value',
         "axisTick":{       //y轴刻度线
             "show":true
         },
         "splitLine": {     //网格线
             "show": true,
             lineStyle:{
                 color: ['#323244'],
                 width: 1,
                 type: 'solid'
             }
         },
         axisLabel: {
             formatter: function(){
                 return "";
             },

         }
     },
     series: [{
         data: [120, 200, 150, 80, 70, 110, 130],
         type: 'bar',
         barWidth : 30,//柱图宽度
         barGap:'100%',//柱图间距
         label: {
             show: true,
             position: 'top',
             textStyle:{
                 color:"#fff"
             }

         },
         itemStyle: {
             normal: {
                 //每根柱子颜色设置
                 color: function(params) {
                     let colorList = [
                         "#00a0e9",
                         "#1687db",
                         "#00479d",
                         "#14b5e9",
                         "#2bf8ff"
                     ];
                     return colorList[params.dataIndex];
                 }
             }
         },
     }]
 };
 myChart7.setOption(option7);
 /*pic05  bottom*/
 var pic05 = document.getElementById("pic05");
 var myChart7 = echarts.init(pic05);
 var option7 = {
     animationDuration:4000,
     xAxis: {
         type: 'category',
         data: ['北京', '上海', '重庆', '浙江', '深圳'],
         "splitLine": {     //网格线
             "show": false
         },
         axisLabel: {
             color: "#fff" //刻度线标签颜色
         }

     },
     yAxis: {
         type: 'value',
         "axisTick":{       //y轴刻度线
             "show":true
         },
         "splitLine": {     //网格线
             "show": true,
             lineStyle:{
                 color: ['#323244'],
                 width: 1,
                 type: 'solid'
             }
         },
         axisLabel: {
             formatter: function(){
                 return "";
             },

         }
     },
     series: [{
         data: [120, 200, 150, 80, 70, 110, 130],
         type: 'bar',
         barWidth : 30,//柱图宽度
         barGap:'100%',//柱图间距
         label: {
             show: true,
             position: 'top',
             textStyle:{
                 color:"#fff"
             }

         },
         itemStyle: {
             normal: {
                 //每根柱子颜色设置
                 color: function(params) {
                     let colorList = [
                         "#00a0e9",
                         "#1687db",
                         "#00479d",
                         "#14b5e9",
                         "#2bf8ff"
                     ];
                     return colorList[params.dataIndex];
                 }
             }
         },
     }]
 };
 myChart7.setOption(option7);
 /*pic06  top*/
 var top2 = document.getElementById("top2");
 var myChart8 = echarts.init(top2);
 var value1 = 90;
 var option8 = {
     backgroundColor: 'transparent',
     animationDuration:4000,
     title: {
         text: `${value1}度`,
         subtext: '今年发电量',
         left: 'center',
         top: 'center', //top待调整
         textStyle: {
             color: '#fff',
             fontSize: 16,
             fontFamily: 'DINAlternate-Bold',
             lineHeight:24
         },
         subtextStyle: {
             color: '#96e5fb',
             fontSize: 12,
             fontFamily: 'PingFangSC-Regular',
             top: 'center'
         },
         itemGap: -4 //主副标题间距
     },
     xAxis: {
         splitLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         axisLine: {
             show: false
         }
         // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     },
     yAxis: {
         splitLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         axisLine: {
             show: false
         }
     },
     series: [
         // 内圆
         {
             type: 'pie',
             radius: ['0', '50%'],
             center: ['50%', '50%'],
             hoverAnimation:false,
             z: 0,
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#181b7f'
                     },
                         {
                             offset: 0.5,
                             color: '#141faf'
                         },
                         {
                             offset: 1,
                             color: '#223286'
                         }
                     ]),
                     label: {
                         show: false
                     },
                     labelLine: {
                         show: false
                     }
                 },
             },
             label: {
                 normal: {
                     position: "center",

                 }
             },
             data: [100],
         },
         // 进度圈
         {
             type: 'pie',
             clockWise: true,
             radius: ["80%", "55%"],
             hoverAnimation:false,
             data: [{
                 value: value1,
                 itemStyle: {
                     normal: {
                         borderWidth: 10,
                         borderColor: {
                             colorStops: [{
                                 offset: 0,
                                 color: '#01288e' || '#2c0e67' // 0% 处的颜色
                             }, {
                                 offset: 1,
                                 color: '#0B95FF' || '#367bec' // 100% 处的颜色
                             }]
                         },
                         color: { // 完成的圆环的颜色
                             colorStops: [{
                                 offset: 0,
                                 color: '#263bff' || '#2e68d2' // 0% 处的颜色
                             }, {
                                 offset: 1,
                                 color: '#0B95FF' || '#367bec' // 100% 处的颜色
                             }]
                         },
                         label: {
                             show: false
                         },
                         labelLine: {
                             show: false
                         },
                     },
                 }
             },
                 {
                     name: 'gap',
                     value: 100 - value1,
                     itemStyle: {
                         normal: {
                             label: {
                                 show: false
                             },
                             labelLine: {
                                 show: false
                             },
                             color: 'rgba(0, 0, 0, 0)',
                             borderColor: 'rgba(0, 0, 0, 0)',
                             borderWidth: 0,
                         }
                     },
                 }
             ]
         },
         //刻度尺
         {
             // name: "白色圈刻度",
             type: "gauge",
             radius: "67%",
             startAngle: 225, //刻度起始
             endAngle: -134.8, //刻度结束
             z: 4,
             axisTick: {
                 show: true,
                 lineStyle: {
                     width: 2,
                     color: 'rgba(1,244,255, 0.9)'
                 }
             },
             splitLine: {
                 length: 16, //刻度节点线长度
                 lineStyle: {
                     width: 2,
                     color: 'rgba(1,244,255, 0.9)'
                 } //刻度节点线
             },
             axisLabel: {
                 color: 'rgba(255,255,255,0)',
                 fontSize: 12,
             }, //刻度节点文字颜色
             pointer: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     opacity: 0
                 }
             },
             detail: {
                 show: false
             },
             data: [{
                 value: 0,
                 name: ""
             }]
         },

     ]
 };
 myChart8.setOption(option8);
 /*pic06  bottom*/
 var bottom2 = document.getElementById("bottom2");
 var myChart9 = echarts.init(bottom2);
 var value = 80;
 var option9 = {
     backgroundColor: 'transparent',
     animationDuration:4000,
     title: {
         text: `${value}万元`,
         subtext: '今年发电收益',
         left: 'center',
         top: 'center', //top待调整
         textStyle: {
             color: '#fff',
             fontSize: 16,
             fontFamily: 'DINAlternate-Bold',
             lineHeight:24
         },
         subtextStyle: {
             color: '#96e5fb',
             fontSize: 10,
             fontFamily: 'PingFangSC-Regular',
             top: 'center'
         },
         itemGap: -4 //主副标题间距
     },
     xAxis: {
         splitLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         axisLine: {
             show: false
         }
         // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     },
     yAxis: {
         splitLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         axisLine: {
             show: false
         }
     },
     series: [
         // 内圆
         {
             type: 'pie',
             radius: ['0', '50%'],
             center: ['50%', '50%'],
             hoverAnimation:false,
             z: 0,
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#181b7f'
                     },
                         {
                             offset: 0.5,
                             color: '#141faf'
                         },
                         {
                             offset: 1,
                             color: '#223286'
                         }
                     ]),
                     label: {
                         show: false
                     },
                     labelLine: {
                         show: false
                     }
                 },
             },
             label: {
                 normal: {
                     position: "center",

                 }
             },
             data: [100],
         },
         // 进度圈
         {
             type: 'pie',
             clockWise: true,
             radius: ["80%", "55%"],
             hoverAnimation:false,
             data: [{
                 value: value,
                 itemStyle: {
                     normal: {
                         borderWidth: 10,
                         borderColor: {
                             colorStops: [{
                                 offset: 0,
                                 color: '#01288e' || '#2c0e67' // 0% 处的颜色
                             }, {
                                 offset: 1,
                                 color: '#0B95FF' || '#367bec' // 100% 处的颜色
                             }]
                         },
                         color: { // 完成的圆环的颜色
                             colorStops: [{
                                 offset: 0,
                                 color: '#263bff' || '#2e68d2' // 0% 处的颜色
                             }, {
                                 offset: 1,
                                 color: '#0B95FF' || '#367bec' // 100% 处的颜色
                             }]
                         },
                         label: {
                             show: false
                         },
                         labelLine: {
                             show: false
                         },
                     },
                 }
             },
                 {
                     name: 'gap',
                     value: 100 - value,
                     itemStyle: {
                         normal: {
                             label: {
                                 show: false
                             },
                             labelLine: {
                                 show: false
                             },
                             color: 'rgba(0, 0, 0, 0)',
                             borderColor: 'rgba(0, 0, 0, 0)',
                             borderWidth: 0,
                         }
                     },
                 }
             ]
         },
         //刻度尺
         {
             // name: "白色圈刻度",
             type: "gauge",
             radius: "67%",
             startAngle: 225, //刻度起始
             endAngle: -134.8, //刻度结束
             z: 4,
             axisTick: {
                 show: true,
                 lineStyle: {
                     width: 2,
                     color: 'rgba(1,244,255, 0.9)'
                 }
             },
             splitLine: {
                 length: 16, //刻度节点线长度
                 lineStyle: {
                     width: 2,
                     color: 'rgba(1,244,255, 0.9)'
                 } //刻度节点线
             },
             axisLabel: {
                 color: 'rgba(255,255,255,0)',
                 fontSize: 12,
             }, //刻度节点文字颜色
             pointer: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     opacity: 0
                 }
             },
             detail: {
                 show: false
             },
             data: [{
                 value: 0,
                 name: ""
             }]
         },

     ]
 };
 myChart9.setOption(option9);





