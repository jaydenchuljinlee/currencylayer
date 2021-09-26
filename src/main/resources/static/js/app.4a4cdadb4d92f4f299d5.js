webpackJsonp([1],{"75l9":function(e,t){e.exports={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("zL8q"),s=r.n(a),i=(r("tvR6"),r("M4fF")),o=r("mtWM"),c=r.n(o);var u={name:"App",data:function(){return{result:0,visible:!1,isTrue:!0,selected:"",nationList:[{label:"한국(KRW)",value:"KRW"},{label:"일본(JPY)",value:"JPY"},{label:"필리핀(PHP)",value:"PHP"}],exchangeRate:0,currency:"",remittanceAmount:0,currencyInfo:{},message:""}},mounted:function(){this.selected=this.nationList[0].value},watch:{selected:function(e){Object(i.isNil)(e)||(this.currency=e,this.loadCurrencyInfo())},currencyInfo:function(e){if(!Object(i.isNil)(e)){var t=this.currencyInfo.quotes;Object(i.isNil)(t)||this.getCurrency(t)}}},methods:{submit:function(){var e=this.remittanceAmount<0||isNaN(this.remittanceAmount)||this.remittanceAmount>1e4;this.visible=!0,this.isTrue=!e,e||(this.result=Object(i.round)(this.remittanceAmount*this.exchangeRate,2))},onChange:function(){this.loadCurrencyInfo(),this.visible=!1},getCurrency:function(e){switch(this.currency){case"KRW":this.currency="KRW/USD",this.exchangeRate=Object(i.round)(e.USDKRW,2);break;case"JPY":this.currency="JPY/USD",this.exchangeRate=Object(i.round)(e.USDJPY,2);break;case"PHP":this.currency="PHP/USD",this.exchangeRate=Object(i.round)(e.USDPHP,2)}},loadCurrencyInfo:function(){var e=this;c.a.get("/api/currency/get-currency-info").then(function(t){t.data.success&&(e.currencyInfo=Object(i.isNil)(t.data.data)?{}:t.data.data)}).catch(function(e){throw new Error(e)})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-row",[r("h1",[e._v("환율 계산")])]),e._v(" "),r("el-row",[r("h3",[e._v("송금국가: 미국(USD)")])]),e._v(" "),r("el-row",{attrs:{type:"flex",justify:"center"}},[r("h3",{staticClass:"vertical-center-box"},[e._v("수취국가:\n        "),r("el-select",{attrs:{sytle:"width:70px;"},on:{change:e.onChange},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.nationList,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)]),e._v(" "),r("el-row",[r("h3",[e._v("환율: "+e._s(e.exchangeRate.toLocaleString("ko-KR"))+" "+e._s(e.currency))])]),e._v(" "),r("el-row",{attrs:{type:"flex",justify:"center"}},[r("h3",{staticClass:"vertical-center-box"},[e._v("송금액:\n      "),r("el-input",{attrs:{type:"number"},model:{value:e.remittanceAmount,callback:function(t){e.remittanceAmount=t},expression:"remittanceAmount"}}),e._v(" USD\n    ")],1)]),e._v(" "),r("el-row",[r("el-button",{on:{click:e.submit}},[e._v("Submit")])],1),e._v(" "),r("el-row",[e.visible&&e.isTrue?r("h3",[e._v("수취금액은 "+e._s(e.result.toLocaleString("ko-KR"))+" "+e._s(e.currency)+" 입니다.")]):e._e(),e._v(" "),e.visible&&!e.isTrue?r("h3",{staticStyle:{color:"red"}},[e._v("송금액이 바르지 않습니다")]):e._e()])],1)},staticRenderFns:[]};var h=r("VU/8")(u,l,!1,function(e){r("P7ZW")},"data-v-278d47b8",null).exports,v=r("/ocq"),d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var m=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(e){r("Yd1I")},"data-v-620a0dd8",null).exports;n.default.use(v.a);var p=new v.a({routes:[{path:"/",name:"HelloWorld",component:m}]});n.default.config.productionTip=!1,n.default.use(s.a,{size:"small",zIndex:3e3}),new n.default({el:"#app",router:p,components:{App:h},template:"<App/>"})},P7ZW:function(e,t){},Yd1I:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4a4cdadb4d92f4f299d5.js.map