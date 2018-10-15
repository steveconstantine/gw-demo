exports.id="main",exports.modules={"./src/components/Product.js":function(e,t,a){"use strict";a.r(t);var o=a("babel-runtime/helpers/defineProperty"),n=a.n(o),r=a("babel-runtime/core-js/object/get-prototype-of"),i=a.n(r),s=a("babel-runtime/helpers/classCallCheck"),l=a.n(s),c=a("babel-runtime/helpers/createClass"),d=a.n(c),p=a("babel-runtime/helpers/possibleConstructorReturn"),u=a.n(p),m=a("babel-runtime/helpers/inherits"),h=a.n(m),g=a("react"),f=a.n(g),b=a("./src/components/Product/VariantSelector.js"),_=a("./src/components/Product/SingleVariantSelector.js"),N=a("./src/components/Product/ProductSocial.js"),v=a("./src/components/Product/ProductOptions.js"),y=a("./src/components/Product/ProductDescriptionImage.js"),x=a("gestalt"),C=a("sc-react-router-modal"),k=a("react-swipeable"),E=a.n(k),S=(a("sc-rodal"),a("ismobilejs"),a("react-modal")),I=a.n(S),P=a("underscore"),O=a.n(P),M=a("react-background-image-loader"),w=a.n(M),R="C:\\apps\\gw\\src\\components\\Product.js";I.a.setAppElement("#root");var B=function(e){function t(){var e,a,o,n;l()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return a=o=u()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(s))),o.state={show:!1},n=a,u()(o,n)}return h()(t,e),d()(t,[{key:"render",value:function(){var e=this.props.product,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,a={homeBackground:{backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"calc(200px + 25vh)",minWidth:"185px",minHeight:"200px",maxHeight:"400px"}};return f.a.createElement("div",{__source:{fileName:R,lineNumber:47}},0==this.props.isSliding?f.a.createElement(C.ModalLink,{path:"/art/"+e.vendor.replace(" ","-").toLowerCase().toString()+"-"+e.title.replace(" ","-").toLowerCase().toString(),parentPath:"/",component:V,props:{addVariantToCart:this.props.addVariantToCart,client:this.props.client,checkout:this.props.checkout,key:e.id.toString(),product:e,artSize:Math.random()+1,productIDs:this.props.productIDs,productIndex:this.props.productIndex,handleImageLoaded:this.props.handleImageLoaded},__source:{fileName:R,lineNumber:49}},f.a.createElement(w.a,{style:a.homeBackground,src:t,placeholder:t,key:this.props.product.name,__source:{fileName:R,lineNumber:64}},f.a.createElement("div",{className:"Product_title__overlay",style:{borderRadius:"0 5px 5px 0",transform:"translateY(200px)",marginRight:"5%",padding:"1px 0px 1px 0px",background:"rgba(255,255,255,0.44)"},__source:{fileName:R,lineNumber:65}},f.a.createElement("h5",{className:"Product__title",style:{paddingLeft:"16px",marginBottom:"0",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:66}},this.props.product.title),f.a.createElement("h5",{className:"Product__vendor",style:{paddingLeft:"16px",marginTop:"2px",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:67}},this.props.product.vendor)),f.a.createElement(x.Box,{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",__source:{fileName:R,lineNumber:69}},f.a.createElement(x.Box,{padding:1,__source:{fileName:R,lineNumber:70}})))):f.a.createElement(w.a,{style:a.homeBackground,src:t,placeholder:t,key:this.props.product.name,__source:{fileName:R,lineNumber:74}},f.a.createElement("div",{className:"Product_title__overlay",style:{borderRadius:"0 5px 5px 0",transform:"translateY(200px)",marginRight:"5%",padding:"1px 0px 1px 0px",background:"rgba(255,255,255,0.44)"},__source:{fileName:R,lineNumber:75}},f.a.createElement("h5",{className:"Product__title",style:{paddingLeft:"16px",marginBottom:"0",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:76}},this.props.product.title),f.a.createElement("h5",{className:"Product__vendor",style:{paddingLeft:"16px",marginTop:"2px",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:R,lineNumber:77}},this.props.product.vendor)),f.a.createElement(x.Box,{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",__source:{fileName:R,lineNumber:79}},f.a.createElement(x.Box,{padding:1,__source:{fileName:R,lineNumber:80}}))))}}]),t}(f.a.Component),V=function(e){function t(e){l()(this,t);var a=u()(this,(t.__proto__||i()(t)).call(this,e));a.state={order:null};var o={};return a.props.product.options.forEach(function(e){o[e.name]=e.values[0].value}),a.state={cartDisabled:!1,scrollElement:0,isOpen:!1,selectedVariantQuantity:1,showConfirmationToast:0,selectedOptions:o,modalOpen:!1,modalRunning:!0},a.handleModalClose=a.handleModalClose.bind(a),a.handleModalCloseHash=a.handleModalCloseHash.bind(a),a.handleOptionChange=a.handleOptionChange.bind(a),a.handleQuantityChange=a.handleQuantityChange.bind(a),a.findImage=a.findImage.bind(a),a.goPreviousProduct=a.goPreviousProduct.bind(a),a.goNextProduct=a.goNextProduct.bind(a),a.scrollDiv=a.scrollDiv.bind(a),a.componentDidMount=a.componentDidMount.bind(a),a.componentWillMount=a.componentWillMount.bind(a),a}return h()(t,e),d()(t,[{key:"componentWillMount",value:function(){var e=this;this.props.product.options.forEach(function(t){e.setState({selectedOptions:n()({},t.name,t.values[0])})})}},{key:"componentDidMount",value:function(){}},{key:"findImage",value:function(e,t){var a=e[0];return(e.filter(function(e){return e.variant_ids.includes(t)})[0]||a).src}},{key:"handleOptionChange",value:function(e,t){var a=this.state.selectedOptions;if(a[t]=e,null!==e&&0==O.a.isUndefined(this.props.product.variants.edges.find(function(e){return e.node.selectedOptions.every(function(e){return a[e.name]===e.value})}))){var o=this.props.product.variants.edges.find(function(e){return e.node.selectedOptions.every(function(e){return a[e.name]===e.value})}).node;this.setState({cartDisabled:!1}),this.setState({selectedVariant:o,selectedVariantImage:o.image.src})}else this.setState({cartDisabled:!0})}},{key:"handleQuantityChange",value:function(e){var t=e.value;t<1&&(t=1),this.setState({selectedVariantQuantity:t})}},{key:"handleModalClose",value:function(){this.props.history.push("/"),this.setState({modalOpen:!1,modalRunning:!1})}},{key:"handleModalCloseHash",value:function(){this.props.history.push("/cart"),this.setState({modalOpen:!1,modalRunning:!1})}},{key:"goPreviousProduct",value:function(){this.setState({modalRunning:!0});var e=this.props.productIndex;0===e&&(e=this.props.productIDs.length),this.props.history.push("/art/"+this.props.productIDs[e-1][1].replace(" ","-").toLowerCase().toString()+"-"+this.props.productIDs[e-1][2].replace(" ","-").toLowerCase().toString())}},{key:"goNextProduct",value:function(){this.setState({modalRunning:!0});var e=this.props.productIndex;e===this.props.productIDs.length-1&&(e=-1),this.props.history.push("/art/"+this.props.productIDs[e+1][1].replace(" ","-").toLowerCase().toString()+"-"+this.props.productIDs[e+1][2].replace(" ","-").toLowerCase().toString())}},{key:"scrollDiv",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,a=this.state.selectedVariant||this.props.product.variants.edges[0].node,o=this.state.selectedVariantQuantity||1,n=[];n=this.props.product.variants.edges[0].node.selectedOptions.length>1?this.props.product.options.map(function(t){return f.a.createElement(x.Box,{paddingX:2,__source:{fileName:R,lineNumber:212}},f.a.createElement(b.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:R,lineNumber:213}}))}):this.props.product.options.map(function(t){return f.a.createElement(_.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:R,lineNumber:227}})});var r=this.props.product.descriptionHtml.split("<h1><span>BIO</span></h1>");return f.a.createElement("div",{id:"top-level-modal",style:{height:"100vh",width:"100vw"},__source:{fileName:R,lineNumber:285}},f.a.createElement(x.Box,{display:"flex",direction:"row",paddingY:2,__source:{fileName:R,lineNumber:286}},f.a.createElement(I.a,{isOpen:this.state.modalRunning,onRequestClose:function(){return e.handleModalClose()},closeTimeoutMS:50,style:{overlay:{},content:{backgroundImage:"url("+t+")",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:R,lineNumber:287}},f.a.createElement("div",{style:{background:"rgba(255,255,255,0.35)",padding:"25px"},__source:{fileName:R,lineNumber:319}},f.a.createElement("div",{className:"just-donate",style:{position:"fixed",right:"2px",top:"2px",zIndex:"9999"},__source:{fileName:R,lineNumber:320}},f.a.createElement(x.Box,{padding:2,__source:{fileName:R,lineNumber:321}},f.a.createElement(x.IconButton,{accessibilityLabel:"Cancel",bgColor:"white",icon:"cancel",iconColor:"darkGray",onClick:function(){e.handleModalClose()},__source:{fileName:R,lineNumber:322}}))),f.a.createElement(E.a,{onSwipingRight:function(){return e.goPreviousProduct()},onSwipingLeft:function(){return e.goNextProduct()},__source:{fileName:R,lineNumber:332}},f.a.createElement(x.Box,{display:"flex",direction:"row",paddingY:2,__source:{fileName:R,lineNumber:335}},f.a.createElement(x.Column,{span:12,__source:{fileName:R,lineNumber:336}},f.a.createElement(x.Box,{padding:2,__source:{fileName:R,lineNumber:337}},f.a.createElement(y.default,{variantImage:t,bioDescription:r,product:this.props.product,variant:a,__source:{fileName:R,lineNumber:338}}),this.props.product.images.edges.length?f.a.createElement("img",{onLoad:this.props.handleImageLoaded,src:t,style:{maxHeight:"450px",paddingTop:"50px"},alt:this.props.product.title+" product shot",__source:{fileName:R,lineNumber:339}}):null,f.a.createElement("div",{className:"mobileOptions",__source:{fileName:R,lineNumber:340}},f.a.createElement(v.default,{handleQuantityChange:this.handleQuantityChange,selectedVariantQuantity:this.state.selectedVariantQuantity,variant_selectors:n,__source:{fileName:R,lineNumber:341}}),f.a.createElement(x.Button,{color:"gray",disabled:1==this.state.cartDisabled||!1===a.availableForSale,text:!0===a.availableForSale?"Add to Cart":"Out of Stock",onClick:function(){e.props.addVariantToCart(a.id,o),e.handleModalCloseHash()},style:{marginBottom:"12px",position:"fixed",right:"5px",bottom:"0",left:"5px"},__source:{fileName:R,lineNumber:342}}))),f.a.createElement(N.default,{location:this.props.location,product:this.props.product,__source:{fileName:R,lineNumber:345}}))))),f.a.createElement("div",{className:"desktopOptions",style:{width:"100vw",height:"126px",position:"fixed",left:"0",bottom:"0",right:"0",display:"block",background:"rgba(0,0,0,0.45)",color:"white"},__source:{fileName:R,lineNumber:350}},f.a.createElement(v.default,{handleQuantityChange:this.handleQuantityChange,selectedVariantQuantity:this.state.selectedVariantQuantity,variant_selectors:n,__source:{fileName:R,lineNumber:351}}),f.a.createElement("div",{style:{position:"fixed",bottom:"26px",right:"16px",width:"84px"},__source:{fileName:R,lineNumber:352}},f.a.createElement(x.Button,{color:"gray",disabled:1==this.state.cartDisabled||!1===a.availableForSale,text:!0===a.availableForSale?"Add to Cart":"Out of Stock",onClick:function(){e.props.addVariantToCart(a.id,o),e.handleModalCloseHash()},style:{marginBottom:"12px",position:"fixed !important",right:"5px",bottom:"0",left:"5px"},__source:{fileName:R,lineNumber:353}}))))))}}]),t}(g.Component);t.default=B}};
//# sourceMappingURL=main.0654a05f85556d99e4c0.hot-update.js.map