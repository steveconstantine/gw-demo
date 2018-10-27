exports.id="main",exports.modules={"./src/server.js":function(e,t,r){"use strict";r.r(t);var n=r("babel-runtime/regenerator"),o=r.n(n),s=r("babel-runtime/core-js/object/get-prototype-of"),a=r.n(s),c=r("babel-runtime/helpers/classCallCheck"),i=r.n(c),l=r("babel-runtime/helpers/createClass"),p=r.n(l),u=r("babel-runtime/helpers/possibleConstructorReturn"),d=r.n(u),h=r("babel-runtime/helpers/inherits"),m=r.n(h),f=r("babel-runtime/helpers/asyncToGenerator"),b=r.n(f),g=r("react"),v=r.n(g),w=r("express"),y=r.n(w),j=r("react-dom/server"),A=r("react-apollo"),C=r("apollo-client"),x=r("apollo-link-http"),_=r("apollo-link-context"),k=r("apollo-cache-inmemory"),O=(r("apollo-cache-persist"),r("isomorphic-fetch")),S=r("./node_modules/react-native-web/dist/index.js"),T=r("@jaredpalmer/after"),R=r("./src/routes.js"),E=r("./src/Document.js");process.browser||(global.fetch=O);var L,N=r("compression"),q=r("express-minify"),D=r("web-storage")().localStorage,M=r("./build/assets.json"),H=y()();H.use(N({level:9})),H.use(q()),H.disable("x-powered-by").use(y.a.static("C:\\apps\\gw\\public")).get("/*",(L=b()(o.a.mark(function e(t,r){var n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){var t,r=new k.InMemoryCache,n=!process.browser,s=Object(x.createHttpLink)({uri:"https://giftingwildinc.myshopify.com/api/graphql",fetch:O}),c=D.get("token"),l=Object(_.setContext)(function(){return{headers:{"X-Shopify-Storefront-Access-Token":"e533f252f3a673c02f85798859530319"},authorization:c?"Bearer "+c:""}}),u=new C.ApolloClient({ssrMode:n,link:l.concat(s),cache:n?r:new r.restore(window.__APOLLO_STATE__)}),h=function(t){function r(e){i()(this,r);var t=d()(this,(r.__proto__||a()(r)).call(this,e));return console.log(e),t.state={client:null,loaded:!1},t}return m()(r,t),p()(r,[{key:"componentDidMount",value:function(){var e=b()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({client:u,loaded:!0});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loaded?v.a.createElement(A.ApolloProvider,{client:this.state.client,__source:{fileName:"C:\\apps\\gw\\src\\server.js",lineNumber:79}},e):v.a.createElement("div",{__source:{fileName:"C:\\apps\\gw\\src\\server.js",lineNumber:77}},"Loading-Server")}}]),r}(v.a.Component);return Object(A.getDataFromTree)(h).then((t=b()(o.a.mark(function e(t){var r,n,s,a,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return S.AppRegistry.registerComponent("App",function(){return h}),r=S.AppRegistry.getApplication("App"),n=r.element,s=r.getStyleElement,a=s(),c=u.extract(),i=Object(j.renderToString)(n),e.abrupt("return",{html:i,initialApolloState:c,css:a});case 6:case"end":return e.stop()}},e,void 0)})),function(e){return t.apply(this,arguments)}))},e.prev=1,e.next=4,Object(T.render)({req:t,res:r,routes:R.default,assets:M,customRenderer:n,document:E.default,customThing:"thing"});case 4:s=e.sent,r.send(s),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),r.json(e.t0),console.log("server instantiation error"),console.log(e.t0);case 13:case"end":return e.stop()}},e,void 0,[[1,8]])})),function(e,t){return L.apply(this,arguments)})),H.use(function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}),t.default=H}};
//# sourceMappingURL=main.9fac4949950a64c82b47.hot-update.js.map