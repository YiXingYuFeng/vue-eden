(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f992"],{f992:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=a("313e"),r=a.n(s),o=(a("817d"),a("b893")),l=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],h={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"380px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object}},data:function(){return{chart:null,updatefn:null}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.chartResizeHandle=Object(o["a"])(function(){t.chart&&t.chart.resize()},50),window.addEventListener("resize",this.chartResizeHandle));var e=document.getElementsByClassName("el-aside")[0];e.addEventListener("transitionend",this.chartResizeHandle),this.updatefn=setInterval(function(){var e=t.chartData,a=e.PS4PlayerData,i=e.NSPlayerData;a.shift(),i.shift(),a.push(Object(o["c"])(2e3,4600)),i.push(Object(o["c"])(2e3,4600)),t.chart.setOption({series:[{name:"PS4 Player",data:a},{name:"NS Player",data:i}]})},3100)},beforeDestroy:function(){this.chart&&this.autoResize&&window.removeEventListener("resize",this.chartResizeHandle);var t=document.getElementsByClassName("el-aside")[0];t&&t.removeEventListener("transitionend",this.chartResizeHandle),this.chart.dispose(),this.chart=null,clearInterval(this.updatefn)},watch:{chartData:{deep:!0,handler:function(t){this.setChartOptions(t)}}},methods:{setChartOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.PS4PlayerData,a=t.NSPlayerData;this.chart.setOption({xAxis:{data:l,boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["PS4 Player","NS Player"]},series:[{name:"PS4 Player",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:e,animationDuration:2800,animationEasing:"cubicInOut"},{name:"NS Player",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.setChartOptions(this.chartData)}}},c=h,d=a("2877"),u=Object(d["a"])(c,i,n,!1,null,null,null);u.options.__file="index.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=f992.426de59b.js.map