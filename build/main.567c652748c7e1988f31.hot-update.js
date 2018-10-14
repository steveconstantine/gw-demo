exports.id="main",exports.modules={"./src/components/Product.js":function(e,t,a){"use strict";a.r(t);var n=a("babel-runtime/helpers/defineProperty"),o=a.n(n),r=a("babel-runtime/core-js/object/get-prototype-of"),i=a.n(r),s=a("babel-runtime/helpers/classCallCheck"),l=a.n(s),c=a("babel-runtime/helpers/createClass"),d=a.n(c),u=a("babel-runtime/helpers/possibleConstructorReturn"),p=a.n(u),m=a("babel-runtime/helpers/inherits"),h=a.n(m),g=a("react"),f=a.n(g),_=a("./src/components/Product/VariantSelector.js"),b=a("./src/components/Product/TextButtonVariantSelector.js"),N=a("./src/components/Product/SingleVariantSelector.js"),v=a("./src/components/Product/ProductSocial.js"),y=a("./src/components/Product/ProductOptions.js"),x=a("./src/components/Product/ProductTextOptions.js"),C=a("./src/components/Product/ProductDescriptionImage.js"),E=a("gestalt"),k=a("sc-react-router-modal"),S=a("react-swipeable"),P=a.n(S),I=(a("sc-rodal"),a("ismobilejs"),a("react-modal")),O=a.n(I),V=a("underscore"),B=a.n(V),M=a("react-background-image-loader"),R=a.n(M),w="C:\\apps\\gw\\src\\components\\Product.js";O.a.setAppElement("#root");var D=function(e){function t(){var e,a,n,o;l()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return a=n=p()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(s))),n.state={show:!1},o=a,p()(n,o)}return h()(t,e),d()(t,[{key:"render",value:function(){var e=this.props.product,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,a={homeBackground:{backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"400px",minWidth:"200px"}};return f.a.createElement("div",{__source:{fileName:w,lineNumber:47}},0==this.props.isSliding?f.a.createElement(k.ModalLink,{path:"/art/"+e.vendor.replace(" ","-").toLowerCase().toString()+"-"+e.title.replace(" ","-").toLowerCase().toString(),parentPath:"/",component:L,props:{addVariantToCart:this.props.addVariantToCart,client:this.props.client,checkout:this.props.checkout,key:e.id.toString(),product:e,artSize:Math.random()+1,productIDs:this.props.productIDs,productIndex:this.props.productIndex,handleImageLoaded:this.props.handleImageLoaded},__source:{fileName:w,lineNumber:49}},f.a.createElement(R.a,{style:a.homeBackground,src:t,placeholder:t,key:this.props.product.name,__source:{fileName:w,lineNumber:64}},f.a.createElement("div",{className:"Product_title__overlay",style:{borderRadius:"0 5px 5px 0",transform:"translateY(270px)",marginRight:"5%",padding:"1px 0px 1px 0px",background:"rgba(255,255,255,0.44)"},__source:{fileName:w,lineNumber:65}},f.a.createElement("h5",{className:"Product__title",style:{paddingLeft:"16px",marginBottom:"0",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:w,lineNumber:66}},this.props.product.title),f.a.createElement("h5",{className:"Product__vendor",style:{paddingLeft:"16px",marginTop:"2px",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:w,lineNumber:67}},this.props.product.vendor)),f.a.createElement(E.Box,{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",__source:{fileName:w,lineNumber:69}},f.a.createElement(E.Box,{padding:1,__source:{fileName:w,lineNumber:70}})))):f.a.createElement(R.a,{style:a.homeBackground,src:t,placeholder:t,key:this.props.product.name,__source:{fileName:w,lineNumber:74}},f.a.createElement("div",{className:"Product_title__overlay",style:{borderRadius:"0 5px 5px 0",transform:"translateY(270px)",marginRight:"5%",padding:"1px 0px 1px 0px",background:"rgba(255,255,255,0.44)"},__source:{fileName:w,lineNumber:75}},f.a.createElement("h5",{className:"Product__title",style:{paddingLeft:"16px",marginBottom:"0",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:w,lineNumber:76}},this.props.product.title),f.a.createElement("h5",{className:"Product__vendor",style:{paddingLeft:"16px",marginTop:"2px",zIndex:"4",color:"rgba(0,0,0,0.8)"},__source:{fileName:w,lineNumber:77}},this.props.product.vendor)),f.a.createElement(E.Box,{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",__source:{fileName:w,lineNumber:79}},f.a.createElement(E.Box,{padding:1,__source:{fileName:w,lineNumber:80}}))))}}]),t}(f.a.Component),L=function(e){function t(e){l()(this,t);var a=p()(this,(t.__proto__||i()(t)).call(this,e));a.state={order:null};var n={};return a.props.product.options.forEach(function(e){n[e.name]=e.values[0].value}),a.state={cartDisabled:!1,scrollElement:0,isOpen:!1,selectedVariantQuantity:1,showConfirmationToast:0,selectedOptions:n,modalOpen:!1,modalRunning:!0},a.handleModalClose=a.handleModalClose.bind(a),a.handleModalCloseHash=a.handleModalCloseHash.bind(a),a.handleOptionChange=a.handleOptionChange.bind(a),a.handleQuantityChange=a.handleQuantityChange.bind(a),a.findImage=a.findImage.bind(a),a.goPreviousProduct=a.goPreviousProduct.bind(a),a.goNextProduct=a.goNextProduct.bind(a),a.scrollDiv=a.scrollDiv.bind(a),a.componentDidMount=a.componentDidMount.bind(a),a.componentWillMount=a.componentWillMount.bind(a),a}return h()(t,e),d()(t,[{key:"componentWillMount",value:function(){var e=this;this.props.product.options.forEach(function(t){e.setState({selectedOptions:o()({},t.name,t.values[0])})})}},{key:"componentDidMount",value:function(){}},{key:"findImage",value:function(e,t){var a=e[0];return(e.filter(function(e){return e.variant_ids.includes(t)})[0]||a).src}},{key:"handleOptionChange",value:function(e,t){var a=this.state.selectedOptions;if(a[t]=e,null!==e&&0==B.a.isUndefined(this.props.product.variants.edges.find(function(e){return e.node.selectedOptions.every(function(e){return a[e.name]===e.value})}))){var n=this.props.product.variants.edges.find(function(e){return e.node.selectedOptions.every(function(e){return a[e.name]===e.value})}).node;this.setState({cartDisabled:!1}),this.setState({selectedVariant:n,selectedVariantImage:n.image.src})}else this.setState({cartDisabled:!0})}},{key:"handleQuantityChange",value:function(e){var t=e.value;t<1&&(t=1),this.setState({selectedVariantQuantity:t})}},{key:"handleModalClose",value:function(){this.props.history.push("/"),this.setState({modalOpen:!1,modalRunning:!1})}},{key:"handleModalCloseHash",value:function(){this.props.history.push("/cart"),this.setState({modalOpen:!1,modalRunning:!1})}},{key:"goPreviousProduct",value:function(){this.setState({modalRunning:!0});var e=this.props.productIndex;0===e&&(e=this.props.productIDs.length),this.props.history.push("/art/"+this.props.productIDs[e-1][1].replace(" ","-").toLowerCase().toString()+"-"+this.props.productIDs[e-1][2].replace(" ","-").toLowerCase().toString())}},{key:"goNextProduct",value:function(){this.setState({modalRunning:!0});var e=this.props.productIndex;e===this.props.productIDs.length-1&&(e=-1),this.props.history.push("/art/"+this.props.productIDs[e+1][1].replace(" ","-").toLowerCase().toString()+"-"+this.props.productIDs[e+1][2].replace(" ","-").toLowerCase().toString())}},{key:"scrollDiv",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,a=this.state.selectedVariant||this.props.product.variants.edges[0].node,n=this.state.selectedVariantQuantity||1,o=[],r=[];this.props.product.variants.edges[0].node.selectedOptions.length>1?(o=this.props.product.options.map(function(t){return f.a.createElement(E.Box,{paddingX:2,__source:{fileName:w,lineNumber:212}},f.a.createElement(_.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:w,lineNumber:213}}))}),r=this.props.product.options.map(function(t){return f.a.createElement(E.Box,{paddingX:2,__source:{fileName:w,lineNumber:226}},f.a.createElement(b.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:w,lineNumber:227}}))})):(o=this.props.product.options.map(function(t){return f.a.createElement(N.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:w,lineNumber:241}})}),r=this.props.product.options.map(function(t){return f.a.createElement(E.Box,{paddingX:2,__source:{fileName:w,lineNumber:253}},f.a.createElement(b.default,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t,product:e.props.product,variant:a,selectedVariant:e.selectedVariant,__source:{fileName:w,lineNumber:254}}))}));var i=this.props.product.descriptionHtml.split("<h1><span>BIO</span></h1>");return f.a.createElement("div",{id:"top-level-modal",style:{height:"100vh",width:"100vw"},__source:{fileName:w,lineNumber:313}},f.a.createElement(E.Box,{display:"flex",direction:"row",paddingY:2,__source:{fileName:w,lineNumber:314}},f.a.createElement(O.a,{isOpen:this.state.modalRunning,onRequestClose:function(){return e.handleModalClose()},closeTimeoutMS:50,style:{overlay:{},content:{backgroundImage:"url("+t+")",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:w,lineNumber:315}},f.a.createElement("div",{style:{background:"rgba(255,255,255,0.35)",padding:"50px"},__source:{fileName:w,lineNumber:347}},f.a.createElement("div",{className:"just-donate",style:{position:"fixed",right:"22px",top:"22px"},__source:{fileName:w,lineNumber:348}},f.a.createElement(E.Box,{padding:2,__source:{fileName:w,lineNumber:349}},f.a.createElement(E.IconButton,{accessibilityLabel:"Cancel",bgColor:"white",icon:"cancel",iconColor:"black",onClick:function(){e.handleModalClose()},__source:{fileName:w,lineNumber:350}}))),f.a.createElement(P.a,{onSwipingRight:function(){return e.goPreviousProduct()},onSwipingLeft:function(){return e.goNextProduct()},__source:{fileName:w,lineNumber:360}},f.a.createElement(E.Box,{display:"flex",direction:"row",paddingY:2,__source:{fileName:w,lineNumber:363}},f.a.createElement(E.Column,{span:12,__source:{fileName:w,lineNumber:364}},f.a.createElement(E.Box,{padding:2,__source:{fileName:w,lineNumber:365}},f.a.createElement("div",{style:{paddingTop:"25px"},__source:{fileName:w,lineNumber:366}}),this.props.product.images.edges.length?f.a.createElement("img",{onLoad:this.props.handleImageLoaded,src:t,style:{maxHeight:"450px"},alt:this.props.product.title+" product shot",__source:{fileName:w,lineNumber:367}}):null),f.a.createElement(C.default,{variantImage:t,bioDescription:i,product:this.props.product,variant:a,__source:{fileName:w,lineNumber:369}}),f.a.createElement(y.default,{handleQuantityChange:this.handleQuantityChange,selectedVariantQuantity:this.state.selectedVariantQuantity,variant_selectors:o,__source:{fileName:w,lineNumber:370}}),f.a.createElement(E.Button,{color:"gray",disabled:1==this.state.cartDisabled||!1===a.availableForSale,text:!0===a.availableForSale?"Add to Cart":"Out of Stock",onClick:function(){e.props.addVariantToCart(a.id,n),e.handleModalCloseHash()},style:{marginBottom:"12px"},__source:{fileName:w,lineNumber:371}}),f.a.createElement(v.default,{location:this.props.location,product:this.props.product,__source:{fileName:w,lineNumber:372}}))))),f.a.createElement("div",{style:{width:"100vw",height:"86px",position:"fixed",left:"0",bottom:"0",right:"0"},__source:{fileName:w,lineNumber:377}},f.a.createElement(x.default,{handleQuantityChange:this.handleQuantityChange,selectedVariantQuantity:this.state.selectedVariantQuantity,variant_selectors:r,__source:{fileName:w,lineNumber:378}}),f.a.createElement(E.Button,{color:"gray",disabled:1==this.state.cartDisabled||!1===a.availableForSale,text:!0===a.availableForSale?"Add to Cart":"Out of Stock",onClick:function(){e.props.addVariantToCart(a.id,n),e.handleModalCloseHash()},style:{marginBottom:"12px"},__source:{fileName:w,lineNumber:379}})))))}}]),t}(g.Component);t.default=D}};
//# sourceMappingURL=main.567c652748c7e1988f31.hot-update.js.map