exports.id="main",exports.modules={"./src/components/Product.js":function(e,t,a){"use strict";a.r(t);var n=a("babel-runtime/helpers/defineProperty"),r=a.n(n),o=a("babel-runtime/core-js/object/get-prototype-of"),i=a.n(o),l=a("babel-runtime/helpers/classCallCheck"),s=a.n(l),c=a("babel-runtime/helpers/createClass"),d=a.n(c),u=a("babel-runtime/helpers/possibleConstructorReturn"),p=a.n(u),m=a("babel-runtime/helpers/inherits"),h=a.n(m),g=a("react"),f=a.n(g),_=a("./src/components/Product/VariantSelector.js"),b=a("./src/components/Product/SingleVariantSelector.js"),N=a("./src/components/Product/ProductSocial.js"),v=a("./src/components/Product/ProductOptions.js"),y=a("./src/components/Product/ProductDescriptionImage.js"),x=a("gestalt"),C=a("sc-react-router-modal"),E=a("react-swipeable"),k=a.n(E),S=(a("sc-rodal"),a("ismobilejs"),a("react-modal")),P=a.n(S),I=a("underscore"),O=a.n(I),w=a("react-background-image-loader"),M=a.n(w),R="C:\\apps\\gw\\src\\components\\Product.js";P.a.setAppElement("#root");var V=function(e){function t(){var e,a,n,r;s()(this,t);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return a=n=p()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(l))),n.state={show:!1},r=a,p()(n,r)}return h()(t,e),d()(t,[{key:"render",value:function(){var e=this.props.product,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,a={homeBackground:{backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"calc(200px + 25vh)",minWidth:"185px",minHeight:"200px",maxHeight:"400px"}};return f.a.createElement("div",{__source:{fileName:R,lineNumber:47}},0==this.props.isSliding?f.a.createElement(C.ModalLink,{path:"/art/"+e.vendor.replace(" ","-").toLowerCase().toString()+"-"+e.title.replace(" ","-").toLowerCase().toString(),parentPath:"/",component:B,props:{addVariantToCart:this.props.addVariantToCart,client:this.props.client,checkout:this.props.checkout,key:e.id.toString(),product:e,artSize:Math.random()+1,productIDs:this.props.productIDs,productIndex:this.props.productIndex,handleImageLoaded:this.props.handleImageLoaded},__source:{fileName:R,lineNumber:49}},f.a.createElement(M.a,{style:a.homeBackground,src:t,placeholder:t,key:this.props.product.name,__source:{fileName:R,lineNumber:64}},f.a.createElement("div",{className:"Product_title__overlay",style:{borderRadius:"0 5px 5px 0",transform:"translateY(200px)",marginRight:"5%",padding:"1px 0px 1px 0px",background:"rgba(255,255,255,0.44)"},__source:{fileName:R,lineNumber:65}},f.a.createElement("h5",{className:"Product__title",style:{paddingLeft:"16px",marginBottom:"0",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:66}},this.props.product.title),f.a.createElement("h5",{className:"Product__vendor",style:{paddingLeft:"16px",marginTop:"2px",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:67}},this.props.product.vendor)),f.a.createElement(x.Box,{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",__source:{fileName:R,lineNumber:69}},f.a.createElement(x.Box,{padding:1,__source:{fileName:R,lineNumber:70}})))):f.a.createElement(M.a,{style:a.homeBackground,src:t,placeholder:t,key:this.props.product.name,__source:{fileName:R,lineNumber:74}},f.a.createElement("div",{className:"Product_title__overlay",style:{borderRadius:"0 5px 5px 0",transform:"translateY(200px)",marginRight:"5%",padding:"1px 0px 1px 0px",background:"rgba(255,255,255,0.44)"},__source:{fileName:R,lineNumber:75}},f.a.createElement("h5",{className:"Product__title",style:{paddingLeft:"16px",marginBottom:"0",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:76}},this.props.product.title),f.a.createElement("h5",{className:"Product__vendor",style:{paddingLeft:"16px",marginTop:"2px",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:77}},this.props.product.vendor)),f.a.createElement(x.Box,{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",__source:{fileName:R,lineNumber:79}},f.a.createElement(x.Box,{padding:1,__source:{fileName:R,lineNumber:80}}))))}}]),t}(f.a.Component),B=function(e){function t(e){s()(this,t);var a=p()(this,(t.__proto__||i()(t)).call(this,e));a.state={order:null};var n={};return a.props.product.options.forEach(function(e){n[e.name]=e.values[0].value}),a.state={cartDisabled:!1,scrollElement:0,isOpen:!1,selectedVariantQuantity:1,showConfirmationToast:0,selectedOptions:n,modalOpen:!1,modalRunning:!0},a.handleModalClose=a.handleModalClose.bind(a),a.handleModalCloseHash=a.handleModalCloseHash.bind(a),a.handleOptionChange=a.handleOptionChange.bind(a),a.handleQuantityChange=a.handleQuantityChange.bind(a),a.findImage=a.findImage.bind(a),a.goPreviousProduct=a.goPreviousProduct.bind(a),a.goNextProduct=a.goNextProduct.bind(a),a.scrollDiv=a.scrollDiv.bind(a),a.componentDidMount=a.componentDidMount.bind(a),a.componentWillMount=a.componentWillMount.bind(a),a}return h()(t,e),d()(t,[{key:"componentWillMount",value:function(){var e=this;this.props.product.options.forEach(function(t){e.setState({selectedOptions:r()({},t.name,t.values[0])})})}},{key:"componentDidMount",value:function(){}},{key:"findImage",value:function(e,t){var a=e[0];return(e.filter(function(e){return e.variant_ids.includes(t)})[0]||a).src}},{key:"handleOptionChange",value:function(e,t){var a=this.state.selectedOptions;if(a[t]=e,null!==e&&0==O.a.isUndefined(this.props.product.variants.edges.find(function(e){return e.node.selectedOptions.every(function(e){return a[e.name]===e.value})}))){var n=this.props.product.variants.edges.find(function(e){return e.node.selectedOptions.every(function(e){return a[e.name]===e.value})}).node;this.setState({cartDisabled:!1}),this.setState({selectedVariant:n,selectedVariantImage:n.image.src})}else this.setState({cartDisabled:!0})}},{key:"handleQuantityChange",value:function(e){var t=e.value;t<1&&(t=1),this.setState({selectedVariantQuantity:t})}},{key:"handleModalClose",value:function(){this.props.history.push("/"),this.setState({modalOpen:!1,modalRunning:!1})}},{key:"handleModalCloseHash",value:function(){this.props.history.push("/cart"),this.setState({modalOpen:!1,modalRunning:!1})}},{key:"goPreviousProduct",value:function(){this.setState({modalRunning:!0});var e=this.props.productIndex;0===e&&(e=this.props.productIDs.length),this.props.history.push("/art/"+this.props.productIDs[e-1][1].replace(" ","-").toLowerCase().toString()+"-"+this.props.productIDs[e-1][2].replace(" ","-").toLowerCase().toString())}},{key:"goNextProduct",value:function(){this.setState({modalRunning:!0});var e=this.props.productIndex;e===this.props.productIDs.length-1&&(e=-1),this.props.history.push("/art/"+this.props.productIDs[e+1][1].replace(" ","-").toLowerCase().toString()+"-"+this.props.productIDs[e+1][2].replace(" ","-").toLowerCase().toString())}},{key:"scrollDiv",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,a=this.state.selectedVariant||this.props.product.variants.edges[0].node,n=this.state.selectedVariantQuantity||1,r=[];r=this.props.product.variants.edges[0].node.selectedOptions.length>1?this.props.product.options.map(function(t){return f.a.createElement(x.Box,{paddingX:2,__source:{fileName:R,lineNumber:212}},f.a.createElement(_.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:R,lineNumber:213}}))}):this.props.product.options.map(function(t){return f.a.createElement(b.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:R,lineNumber:227}})});var o=this.props.product.descriptionHtml.split("<h1><span>BIO</span></h1>");return f.a.createElement("div",{id:"top-level-modal",style:{height:"100vh",width:"100vw"},__source:{fileName:R,lineNumber:285}},f.a.createElement(x.Box,{display:"flex",direction:"row",paddingY:2,__source:{fileName:R,lineNumber:286}},f.a.createElement(P.a,{isOpen:this.state.modalRunning,onRequestClose:function(){return e.handleModalClose()},closeTimeoutMS:50,style:{overlay:{},content:{backgroundImage:"url("+t+")",backgroudnBlendMode:"difference",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:R,lineNumber:287}},f.a.createElement("div",{style:{background:"rgba(255,255,255,0.35)",padding:"25px",minHeight:"100vh"},__source:{fileName:R,lineNumber:320}},f.a.createElement("div",{className:"just-donate",style:{position:"fixed",right:"2px",top:"2px",zIndex:"9999"},__source:{fileName:R,lineNumber:321}},f.a.createElement(x.Box,{padding:2,__source:{fileName:R,lineNumber:322}},f.a.createElement(x.IconButton,{accessibilityLabel:"Cancel",bgColor:"white",icon:"cancel",iconColor:"darkGray",onClick:function(){e.handleModalClose()},__source:{fileName:R,lineNumber:323}}))),f.a.createElement(k.a,{onSwipingRight:function(){return e.goPreviousProduct()},onSwipingLeft:function(){return e.goNextProduct()},__source:{fileName:R,lineNumber:333}},f.a.createElement(x.Box,{display:"flex",direction:"row",paddingY:2,__source:{fileName:R,lineNumber:336}},f.a.createElement(x.Column,{span:12,__source:{fileName:R,lineNumber:337}},f.a.createElement(x.Box,{padding:2,__source:{fileName:R,lineNumber:338}},f.a.createElement(y.default,{variantImage:t,bioDescription:o,product:this.props.product,variant:a,__source:{fileName:R,lineNumber:339}}),this.props.product.images.edges.length?f.a.createElement("img",{onLoad:this.props.handleImageLoaded,src:t,style:{maxHeight:"450px",paddingTop:"50px"},alt:this.props.product.title+" product shot",__source:{fileName:R,lineNumber:340}}):null,f.a.createElement("div",{className:"mobileOptions",__source:{fileName:R,lineNumber:341}},f.a.createElement(v.default,{handleQuantityChange:this.handleQuantityChange,selectedVariantQuantity:this.state.selectedVariantQuantity,variant_selectors:r,__source:{fileName:R,lineNumber:342}}),f.a.createElement("label",{className:"Product__option",__source:{fileName:R,lineNumber:343}},f.a.createElement("div",{style:{maxWidth:"100%"},__source:{fileName:R,lineNumber:344}},f.a.createElement(x.TextField,{id:"quantity",min:"1",onChange:function(t){return e.props.handleQuantityChange(t)},placeholder:"Quantity",value:this.props.selectedVariantQuantity,type:"number",__source:{fileName:R,lineNumber:345}}))),f.a.createElement("p",{className:"productPriceOptions",__source:{fileName:R,lineNumber:355}},f.a.createElement("span",{style:{color:"black"},__source:{fileName:R,lineNumber:355}}," ",1==a.availableForSale?"$"+a.price.toString()+" / ea":a.title.toString()+" is Out of Stock")),f.a.createElement(x.Button,{color:"gray",disabled:1==this.state.cartDisabled||!1===a.availableForSale,text:!0===a.availableForSale?"Add to Cart":"Out of Stock",onClick:function(){e.props.addVariantToCart(a.id,n),e.handleModalCloseHash()},style:{marginBottom:"12px",position:"fixed",right:"5px",bottom:"0",left:"5px"},__source:{fileName:R,lineNumber:356}}))))))),f.a.createElement("div",{className:"desktopOptions",style:{width:"33vw",height:"100vh",position:"fixed",top:"56px",right:"0",display:"block",background:"rgba(0,0,0,0.45)",color:"white"},__source:{fileName:R,lineNumber:363}},f.a.createElement(v.default,{handleQuantityChange:this.handleQuantityChange,selectedVariantQuantity:this.state.selectedVariantQuantity,variant_selectors:r,__source:{fileName:R,lineNumber:364}}),f.a.createElement("div",{style:{display:"inline"},__source:{fileName:R,lineNumber:365}},f.a.createElement("p",{className:"productPriceOptions",__source:{fileName:R,lineNumber:366}},f.a.createElement("span",{style:{color:"#222",fontFamily:"LiberationSansRegular"},__source:{fileName:R,lineNumber:366}}," ",1==a.availableForSale?"$"+a.price.toString():a.title.toString()+" is Out of Stock"))),f.a.createElement("div",{style:{display:"inline",width:"33vw"},__source:{fileName:R,lineNumber:368}},f.a.createElement("label",{className:"Product__option",__source:{fileName:R,lineNumber:369}},f.a.createElement("div",{style:{maxWidth:"22vw"},__source:{fileName:R,lineNumber:370}},f.a.createElement(x.TextField,{id:"quantity",min:"1",onChange:function(t){return e.props.handleQuantityChange(t)},placeholder:"Quantity",value:this.props.selectedVariantQuantity,type:"number",__source:{fileName:R,lineNumber:371}})),f.a.createElement("div",{style:{width:"9vw",marginLeft:"calc(23vw + 4px)",transform:"translateY(-56px)"},__source:{fileName:R,lineNumber:380}},f.a.createElement(x.Button,{color:"gray",disabled:1==this.state.cartDisabled||!1===a.availableForSale,text:!0===a.availableForSale?"Add to Cart":"Out of Stock",onClick:function(){e.props.addVariantToCart(a.id,n),e.handleModalCloseHash()},style:{marginBottom:"12px",position:"fixed !important",right:"5px",bottom:"0",left:"5px"},__source:{fileName:R,lineNumber:381}}))))),f.a.createElement(N.default,{location:this.props.location,product:this.props.product,__source:{fileName:R,lineNumber:386}}))))}}]),t}(g.Component);t.default=V}};
//# sourceMappingURL=main.6c3ef372df065daea7c5.hot-update.js.map