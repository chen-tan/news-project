(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f53acf8"],{"3fb9":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error",class:{hide:!e.err,"txt-center":e.isCenter}},[e._v(" "+e._s(e.err)+" ")])},o=[],i={props:{err:{type:String,default:""},isCenter:{type:Boolean,default:!1}}},a=i,s=(r("e5a8"),r("2877")),u=Object(s["a"])(a,n,o,!1,null,"39d0c1be",null);t["a"]=u.exports},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Center",[r("form",{staticClass:"login-container",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-item"},[r("div",{staticClass:"input"},[r("label",{attrs:{for:"loginId"}},[e._v("用户名：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.loginId,expression:"userInfo.loginId"}],attrs:{type:"text",id:"loginId",autocomplete:"off",maxlength:"20",minlength:"3"},domProps:{value:e.userInfo.loginId},on:{input:[function(t){t.target.composing||e.$set(e.userInfo,"loginId",t.target.value)},function(t){return e.validateEmpty("loginId","用户名不能为空")}]}})]),r("error",{attrs:{err:e.errorInfo.loginId}})],1),r("div",{staticClass:"form-item"},[r("div",{staticClass:"input"},[r("label",{attrs:{for:"loginPwd"}},[e._v("密码：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.loginPwd,expression:"userInfo.loginPwd"}],attrs:{type:"password",id:"loginPwd",autocomplete:"off",maxlength:"20",minlength:"3"},domProps:{value:e.userInfo.loginPwd},on:{input:[function(t){t.target.composing||e.$set(e.userInfo,"loginPwd",t.target.value)},function(t){return e.validateEmpty("loginPwd","密码不能为空")}]}})]),r("error",{attrs:{err:e.errorInfo.loginPwd}})],1),r("div",{staticClass:"form-item"},[r("button",{staticClass:"btn"},[e._v(e._s(e.isLoading?"loading...":"登录"))]),r("error",{attrs:{err:e.errorInfo.server,isCenter:!0}})],1)])])},o=[],i=(r("96cf"),r("1da1")),a=r("5530"),s=r("2f62"),u=r("4181"),l=r("3fb9"),c={components:{Center:u["a"],Error:l["a"]},data:function(){return{userInfo:{loginId:"",loginPwd:""},errorInfo:{loginId:"",loginPwd:"",server:""}}},computed:Object(a["a"])({},Object(s["b"])("loginUser",["data","isLoading"])),methods:{validateEmpty:function(e,t){return this.userInfo[e]?(this.errorInfo[e]="",!0):(this.errorInfo[e]=t,!1)},handleSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.validateEmpty("loginId","用户名不能为空"),n=e.validateEmpty("loginPwd","密码不能为空"),!r||!n){t.next=13;break}return t.next=5,e.$store.dispatch("loginUser/login",e.userInfo);case 5:if(o=t.sent,!o){t.next=11;break}i=e.$route.query.returnurl,i?e.$router.push(i):e.$router.push("/"),t.next=13;break;case 11:return e.errorInfo.server=e.data,t.abrupt("return");case 13:case"end":return t.stop()}}),t)})))()}}},d=c,f=(r("e352"),r("2877")),p=Object(f["a"])(d,n,o,!1,null,"ce0fbb28",null);t["default"]=p.exports},be99:function(e,t,r){},c761:function(e,t,r){},e352:function(e,t,r){"use strict";r("be99")},e5a8:function(e,t,r){"use strict";r("c761")}}]);
//# sourceMappingURL=chunk-3f53acf8.b5173071.js.map