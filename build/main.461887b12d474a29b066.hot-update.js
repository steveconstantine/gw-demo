exports.id="main",exports.modules={"./src/server.js":function(e,t,r){"use strict";r.r(t);var n=r("babel-runtime/regenerator"),o=r.n(n),s=r("babel-runtime/core-js/object/get-prototype-of"),a=r.n(s),c=r("babel-runtime/helpers/classCallCheck"),i=r.n(c),l=r("babel-runtime/helpers/createClass"),p=r.n(l),u=r("babel-runtime/helpers/possibleConstructorReturn"),d=r.n(u),h=r("babel-runtime/helpers/inherits"),m=r.n(h),f=r("babel-runtime/helpers/asyncToGenerator"),b=r.n(f),g=r("react"),v=r.n(g),w=r("express"),y=r.n(w),j=r("react-dom/server"),C=r("react-apollo"),x=r("apollo-client"),A=r("apollo-link-http"),k=r("apollo-link-context"),_=r("apollo-cache-inmemory"),S=(r("apollo-cache-persist"),r("isomorphic-fetch")),O=r("./node_modules/react-native-web/dist/index.js"),T=r("@jaredpalmer/after"),R=r("./src/routes.js"),N=r("./src/Document.js");process.browser||(global.fetch=S);var q,D=r("compression"),E=r("express-minify"),M=r("web-storage")().localStorage,H=r("./build/assets.json"),L=y()();L.use(D({level:9})),L.use(E()),L.disable("x-powered-by").use(y.a.static("C:\\apps\\gw\\public")).get("/*",(q=b()(o.a.mark(function e(t,r){var n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){var t,r=new _.InMemoryCache,n=!process.browser,s=Object(A.createHttpLink)({uri:"https://giftingwildinc.myshopify.com/api/graphql",fetch:S}),c=M.get("token"),l=Object(k.setContext)(function(){return{headers:{"X-Shopify-Storefront-Access-Token":"e533f252f3a673c02f85798859530319"},authorization:c?"Bearer "+c:""}}),u=new x.ApolloClient({ssrMode:n,link:l.concat(s),cache:r}),h=function(t){function r(){i()(this,r);var e=d()(this,(r.__proto__||a()(r)).call(this));return e.state={loaded:!1},e}return m()(r,t),p()(r,[{key:"componentDidMount",value:function(){var e=b()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loaded:!0});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loaded?v.a.createElement(C.ApolloProvider,{client:u,__source:{fileName:"C:\\apps\\gw\\src\\server.js",lineNumber:75}},e):v.a.createElement("div",{__source:{fileName:"C:\\apps\\gw\\src\\server.js",lineNumber:73}},"Loading-Server")}}]),r}(v.a.Component);return Object(C.getDataFromTree)(h).then((t=b()(o.a.mark(function e(t){var r,n,s,a,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O.AppRegistry.registerComponent("App",function(){return h}),r=O.AppRegistry.getApplication("App"),n=r.element,s=r.getStyleElement,a=s(),c=u.extract(),i=Object(j.renderToString)(n),e.abrupt("return",{html:i,initialApolloState:c,css:a});case 6:case"end":return e.stop()}},e,void 0)})),function(e){return t.apply(this,arguments)}))},e.prev=1,e.next=4,Object(T.render)({req:t,res:r,routes:R.default,assets:H,customRenderer:n,document:N.default,customThing:"thing"});case 4:s=e.sent,r.send(s),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),r.json(e.t0),console.log("server instantiation error"),console.log(e.t0);case 13:case"end":return e.stop()}},e,void 0,[[1,8]])})),function(e,t){return q.apply(this,arguments)})),L.use(function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}),t.default=L}};
//# sourceMappingURL=main.461887b12d474a29b066.hot-update.js.map