(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1839ea84"],{"004c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",{attrs:{avatar:t.avatar,title:!1}},[a("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title"},[t._v(t._s(t.timeFix)+"，"+t._s(t.user.name)),a("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])]),a("div",[t._v("前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台")])]),a("div",{attrs:{slot:"extra"},slot:"extra"},[a("a-row",{staticClass:"more-info"},[a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"项目",content:"56",center:!1,bordered:!1}})],1),a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"团队排名",content:"8/24",center:!1,bordered:!1}})],1),a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"项目数",content:"2,223",center:!1}})],1)],1)],1),a("div",[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[a("a",{attrs:{slot:"extra"},slot:"extra"},[t._v("全部项目")]),a("div",t._l(t.projects,function(e,r){return a("a-card-grid",{key:r,staticClass:"project-card-grid"},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("a-card-meta",[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-avatar",{attrs:{size:"small",src:e.cover}}),a("a",[t._v(t._s(e.title))])],1),a("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v("\n                    "+t._s(e.description)+"\n                  ")])]),a("div",{staticClass:"project-item"},[a("a",{attrs:{href:"/#/"}},[t._v("科学搬砖组")]),a("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)}),1)]),a("a-card",{attrs:{loading:t.loading,title:"动态",bordered:!1}},[a("a-list",t._l(t.activities,function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:e.user.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.user.nickname))]),t._v(" \n                  在 "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.name))]),t._v(" \n                  "),a("span",[t._v(t._s(e.project.action))]),t._v(" \n                  "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.event))])]),a("div",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.time))])],1)],1)}),1)],1)],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"快速开始 / 便捷导航",bordered:!1,"body-style":{padding:0}}},[a("div",{staticClass:"item-group"},[a("a",[t._v("操作一")]),a("a",[t._v("操作二")]),a("a",[t._v("操作三")]),a("a",[t._v("操作四")]),a("a",[t._v("操作五")]),a("a",[t._v("操作六")]),a("a-button",{attrs:{size:"small",type:"primary",ghost:"",icon:"plus"}},[t._v("添加")])],1)]),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"XX 指数",loading:t.radarLoading,bordered:!1,"body-style":{padding:0}}},[a("div",{staticStyle:{"min-height":"400px"}},[a("radar",{attrs:{data:t.radarData}})],1)]),a("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[a("div",{staticClass:"members"},[a("a-row",t._l(t.teams,function(e,r){return a("a-col",{key:r,attrs:{span:12}},[a("a",[a("a-avatar",{attrs:{size:"small",src:e.avatar}}),a("span",{staticClass:"member"},[t._v(t._s(e.name))])],1)])}),1)],1)])],1)],1)],1)])},s=[],i=a("cebc"),n=a("ca00"),o=a("5880"),c=a("680a"),l=a("81d1"),d=a("2af9"),u=a("0fea"),p=a("7104"),m={name:"Workplace",components:{PageView:c["c"],HeadInfo:l["a"],Radar:d["n"]},data:function(){return{timeFix:Object(n["a"])(),avatar:"",user:{},projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:Object(i["a"])({},Object(o["mapState"])({nickname:function(t){return t.user.nickname},welcome:function(t){return t.user.welcome}}),{userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.user=this.userInfo,this.avatar=this.userInfo.avatar,Object(u["c"])().then(function(t){}),Object(u["d"])().then(function(t){})},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:{getProjects:function(){var t=this;this.$http.get("/list/search/projects").then(function(e){t.projects=e.result&&e.result.data,t.loading=!1})},getActivity:function(){var t=this;this.$http.get("/workplace/activity").then(function(e){t.activities=e.result})},getTeams:function(){var t=this;this.$http.get("/workplace/teams").then(function(e){t.teams=e.result})},initRadar:function(){var t=this;this.radarLoading=!0,this.$http.get("/workplace/radar").then(function(e){var a=(new p.View).source(e.result);a.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=a.rows,t.radarLoading=!1})}}},v=m,f=(a("cfce"),a("2877")),g=Object(f["a"])(v,r,s,!1,null,"160fcebf",null);e["default"]=g.exports},"0fea":function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"d",function(){return n}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return c});var r=a("b775"),s={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function i(t){return Object(r["b"])({url:s.role,method:"get",params:t})}function n(t){return Object(r["b"])({url:s.service,method:"get",params:t})}function o(t){return Object(r["b"])({url:s.permissionNoPager,method:"get",params:t})}function c(t){return Object(r["b"])({url:s.orgTree,method:"get",params:t})}},5818:function(t,e,a){"use strict";var r=a("fc8c"),s=a.n(r);s.a},"81d1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info",class:t.center&&"center"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))]),t.bordered?a("em"):t._e()])},s=[],i={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},n=i,o=(a("5818"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,"432d5786",null);e["a"]=c.exports},cfce:function(t,e,a){"use strict";var r=a("f54e"),s=a.n(r);s.a},f54e:function(t,e,a){},fc8c:function(t,e,a){}}]);