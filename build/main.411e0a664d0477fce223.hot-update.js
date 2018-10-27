exports.id="main",exports.modules={"./src/App.js":function(e,t,n){"use strict";n.r(t);var a=n("babel-runtime/helpers/taggedTemplateLiteral"),i=n.n(a),s=n("babel-runtime/helpers/extends"),o=n.n(s),r=n("babel-runtime/core-js/object/get-prototype-of"),l=n.n(r),c=n("babel-runtime/helpers/classCallCheck"),u=n.n(c),d=n("babel-runtime/helpers/createClass"),m=n.n(d),h=n("babel-runtime/helpers/possibleConstructorReturn"),p=n.n(h),f=n("babel-runtime/helpers/inherits"),g=n.n(f),b=n("react"),_=n.n(b),C=n("prop-types"),N=n.n(C),v=n("react-apollo"),k=n("./src/components/Cart.js"),y=n("graphql-tag"),x=n.n(y),I=n("./src/checkout.js"),E=(n("react-loader-spinner"),n("gestalt")),S=(n("react-custom-scrollbars"),n("react-headroom")),T=n.n(S),A=n("rc-drawer-menu"),w=n.n(A),O=n("./src/components/Product.js"),D=n("react-ionicons"),L=n.n(D),B=n("react-slick"),j=n.n(B),V=n("react-router-dom"),q=(n("react-background-image-loader"),n("sc-hide-scrollbar-react")),P=n.n(q),R=(n("./src/styles/DonationRadioButtonGroup.css"),n("./src/styles/gestalt.css"),n("./src/styles/RadioButtonGroup.css"),n("./src/styles/rc-drawer-menu.css"),n("./src/styles/react-router-modal.css"),n("./src/styles/rodal.css"),n("./src/styles/slick.css"),n("./src/styles/slick-theme.css"),n("./src/styles/app.css"),n("./src/styles/Scrollable.css"),"C:\\apps\\gw\\src\\App.js"),z=i()(["\nquery shopQuery {\n  shop {\n    name\n    products(first:15) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          title\n          vendor\n          handle\n          productType\n          options {\n            id\n            name\n            values\n          }\n          variants(first: 250) {\n            edges {\n              node {\n                id\n                title\n                selectedOptions {\n                  name\n                  value\n                }\n                image {\n                  src\n                }\n                availableForSale\n                price\n              }\n            }\n          }\n          images(first:10) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                src\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"],["\nquery shopQuery {\n  shop {\n    name\n    products(first:15) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          title\n          vendor\n          handle\n          productType\n          options {\n            id\n            name\n            values\n          }\n          variants(first: 250) {\n            edges {\n              node {\n                id\n                title\n                selectedOptions {\n                  name\n                  value\n                }\n                image {\n                  src\n                }\n                availableForSale\n                price\n              }\n            }\n          }\n          images(first:10) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                src\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]),W=n("web-storage")().localStorage,F=function(e){function t(){u()(this,t);var e=p()(this,(t.__proto__||l()(t)).call(this));return e.responsive={0:{items:2},1024:{items:4}},e.onChange=function(t,n){var a=n.newValue;e.setState({value:a})},e.state={opentool:!1,isFull:!1,isCartOpen:!1,isCustomerAuthOpen:!1,activeIndex:0,isNewCustomer:!1,loggedIn:!!W.get("token"),products:[],checkout:{lineItems:{edges:[]}},suggestions:[],value:"",shop:{},delta:5,navbarHeight:69,open:!1,infoOpen:!1,hasMore:!0,modalLinks:e.props&&e.props.data?e.generateElements():[],itemIndex:0,items:["Our Story","Campaign"],isSliding:!1,direction:!1,imagesLoaded:!1},e.handleCartClose=e.handleCartClose.bind(e),e.handleCartOpen=e.handleCartOpen.bind(e),e.openCustomerAuth=e.openCustomerAuth.bind(e),e.closeCustomerAuth=e.closeCustomerAuth.bind(e),e.closeCustomerAuthVerified=e.closeCustomerAuthVerified.bind(e),e.addVariantToCart=I.addVariantToCart.bind(e),e.addDonationToCart=I.addDonationToCart.bind(e),e.removeDonationInCart=I.removeDonationInCart.bind(e),e.updateLineItemInCart=I.updateLineItemInCart.bind(e),e.removeLineItemInCart=I.removeLineItemInCart.bind(e),e.showAccountVerificationMessage=e.showAccountVerificationMessage.bind(e),e.associateCustomerCheckout=I.associateCustomerCheckout.bind(e),e.handleClick=e._handleClick.bind(e),e.handleClickTooltip=e._handleClickTooltip.bind(e),e.handleDismiss=e._handleDismiss.bind(e),e.handleDismissTooltip=e._handleDismissTooltip.bind(e),e.handleInfoClick=e._handleInfoClick.bind(e),e.handleInfoDismiss=e._handleInfoDismiss.bind(e),e.handleTabsChange=e._handleTabsChange.bind(e),e.handleItemChange=e.handleItemChange.bind(e),e.preventClickAfter=e.preventClickAfter.bind(e),e.setSwipeDirection=e.setSwipeDirection.bind(e),e.handleImageLoaded=e.handleImageLoaded.bind(e),e.imagesLoaded=e.imagesLoaded.bind(e),e}return g()(t,e),m()(t,[{key:"componentWillMount",value:function(){var e=this;W.remove("checkout"),this.props.createCheckout({variables:{input:{}}}).then(function(t){var n=W.get("checkout")||t.data.checkoutCreate.checkout;e.setState({checkout:n})}),this.setState({imagesLoaded:!0})}},{key:"componentDidMount",value:function(){}},{key:"handleItemChange",value:function(e){var t=e.activeIndex;this.setState(function(e){return{itemIndex:t}})}},{key:"handleCartOpen",value:function(){this.props.history.push("/cart"),this.setState({isCartOpen:!0})}},{key:"handleCartClose",value:function(){this.props.history.push("/"),this.setState({isCartOpen:!1})}},{key:"openCustomerAuth",value:function(e){"new-customer"===e.target.getAttribute("data-customer-type")?this.setState({isNewCustomer:!0,isCustomerAuthOpen:!0}):this.setState({isNewCustomer:!1,isCustomerAuthOpen:!0})}},{key:"showAccountVerificationMessage",value:function(){var e=this;this.setState({accountVerificationMessage:!0}),setTimeout(function(){e.setState({accountVerificationMessage:!1})},5e3)}},{key:"closeCustomerAuth",value:function(){this.setState({isCustomerAuthOpen:!1})}},{key:"closeCustomerAuthVerified",value:function(){this.setState({isCustomerAuthOpen:!1})}},{key:"_handleClick",value:function(){var e=this;this.setState(function(){return{open:!e.state.open}})}},{key:"_handleDismiss",value:function(){this.setState(function(){return{open:!1}})}},{key:"_handleClickTooltip",value:function(){this.setState(function(){return{opentool:!0}})}},{key:"_handleDismissTooltip",value:function(){this.setState(function(){return{opentool:!1}})}},{key:"_handleInfoClick",value:function(){var e=this;this.setState(function(){return{infoOpen:!e.state.infoOpen}})}},{key:"_handleInfoDismiss",value:function(){this.setState(function(){return{infoOpen:!1}})}},{key:"_handleTabsChange",value:function(e){var t=e.activeTabIndex;e.event.preventDefault(),this.setState({activeIndex:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"selectedVariant",value:function(e){this.setState({selectedVariant:e})}},{key:"preventClickAfter",value:function(e){e.preventDefault()}},{key:"setSwipeDirection",value:function(e,t,n){"left"==n?this.setState({direction:!0}):this.setState({direction:!1})}},{key:"handleImageLoaded",value:function(e){this.setState({imagesLoaded:!0})}},{key:"imagesLoaded",value:function(){this.state.imagesLoaded;return!0}},{key:"render",value:function(){var e=this;if(this.props.data.loading)return _.a.createElement("div",{id:"spinner",style:{background:"url(/skye-whalesong8x32.jpg)"},__source:{fileName:R,lineNumber:262}});if(this.props.data.error)return _.a.createElement("p",{__source:{fileName:R,lineNumber:265}},this.props.data.error.message);var t=this.props.data.shop.products.edges.reduce(function(e,t){return"donation"!=t.node.handle&&e.push([t.node.id,t.node.vendor,t.node.title]),e},[]),n={dots:!0,infinite:!0,accessibility:!0,speed:500,autoplay:!1,autoplaySpeed:1800,slidesToShow:4,slidesToScroll:4,rtl:this.state.direction,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}}],beforeChange:function(){return e.setState({isSliding:!0})},afterChange:function(){return e.setState({isSliding:!1})}},a="",i=this.props.data.shop.products.edges.reduce(function(n,i,s){return"donation"!=i.node.handle?n.push(_.a.createElement(O.default,{addVariantToCart:e.addVariantToCart,checkout:e.state.checkout,client:e.props.client,key:i.node.id.toString(),product:i.node,productIDs:t,productIndex:s,search:e.state.search,artSize:Math.random()+1,selectedVariant:e.selectedVariant,isSliding:e.state.isSliding,handleImageLoaded:!0,cartOpen:1==e.state.isCartOpen,__source:{fileName:R,lineNumber:303}})):a=i.node.variants.edges[0].node.id,n},[]);return _.a.createElement(P.a,{__source:{fileName:R,lineNumber:325}},_.a.createElement(T.a,{id:"header",className:"header nav-down",style:{WebkitTransition:"all .5s ease-in-out",MozTransition:"all .5s ease-in-out",OTransition:"all .5s ease-in-out",transition:"all .5s ease-in-out",position:"fixed",height:"0",zIndex:"8"},__source:{fileName:R,lineNumber:326}},this.state.open&&_.a.createElement(E.Flyout,{anchor:this.anchor,idealDirection:"down",message:"Hi There!",onDismiss:this.handleDismiss,size:"md",__source:{fileName:R,lineNumber:337}},_.a.createElement(E.Box,{padding:3,__source:{fileName:R,lineNumber:344}},_.a.createElement(E.Text,{bold:!0,align:"center",__source:{fileName:R,lineNumber:345}},"Accounts are coming! Don't worry, by staying logged in we've got your orders on file."),_.a.createElement(E.Box,{paddingX:2,marginTop:3,__source:{fileName:R,lineNumber:348}},_.a.createElement(E.Button,{color:"red",text:"Ask us anything",__source:{fileName:R,lineNumber:349}})),_.a.createElement(E.Box,{paddingX:2,marginTop:3,__source:{fileName:R,lineNumber:351}},_.a.createElement(E.Button,{color:"blue",text:"Log out",onClick:function(){W.removeItem("token"),e.setState({loggedIn:!1})},__source:{fileName:R,lineNumber:352}})))),this.state.infoOpen&&_.a.createElement(E.Flyout,{anchor:this.infoAnchor,idealDirection:"down",message:"Hi There!",onDismiss:this.handleInfoDismiss,size:"md",__source:{fileName:R,lineNumber:357}},_.a.createElement(E.Box,{maxWidth:300,marginTop:2,marginBottom:2,__source:{fileName:R,lineNumber:364}},_.a.createElement("div",{style:{paddingTop:"8px"},__source:{fileName:R,lineNumber:365}}),_.a.createElement(E.SegmentedControl,{items:this.state.items,selectedItemIndex:this.state.itemIndex,onChange:this.handleItemChange,__source:{fileName:R,lineNumber:366}}),0===this.state.itemIndex?_.a.createElement(E.Box,{paddingY:2,__source:{fileName:R,lineNumber:371}},_.a.createElement(E.Heading,{size:"xs",__source:{fileName:R,lineNumber:372}},"We feel like helping clean up ocean pollution. ",_.a.createElement("br",{__source:{fileName:R,lineNumber:373}}),"Our goals include enabling participation and innovation with organised cleanup efforts. It is a gift to be part of something good!")):null,1===this.state.itemIndex?_.a.createElement(E.Box,{paddingY:2,__source:{fileName:R,lineNumber:377}},_.a.createElement(E.Heading,{size:"xs",__source:{fileName:R,lineNumber:378}},"Funds raised go to direct action involved with cleaning the ocean. ",_.a.createElement("br",{__source:{fileName:R,lineNumber:379}})," Our spotlight is on proven action by   ............................ You are invited to please visit their website - ............. .com")):null)),_.a.createElement(w.a,{level:["body > h1","#root"],placement:"right",handleChild:_.a.createElement("div",{__source:{fileName:R,lineNumber:387}}),handleStyle:{top:"100px",display:"none !important"},open:!(!this.state.isCartOpen||"/cart"!=this.props.location.pathname),onMaskClick:function(){return e.handleCartClose()},onHandleClick:function(){return e.handleCartClose()},__source:{fileName:R,lineNumber:385}},_.a.createElement(E.Box,{padding:3,__source:{fileName:R,lineNumber:393}},_.a.createElement(k.default,{setDonationValue:function(t,n){return e.addDonationToCart(a,n,t)},removeLineItemInCart:this.removeLineItemInCart,updateLineItemInCart:this.updateLineItemInCart,checkout:this.state.checkout,isCartOpen:!(!this.state.isCartOpen||"/cart"!=this.props.location.pathname),handleCartClose:this.handleCartClose,customerAccessToken:this.state.customerAccessToken,__source:{fileName:R,lineNumber:394}}))),_.a.createElement(E.Box,{color:"transparent",padding:1,display:"flex",direction:"row",alignItems:"center",__source:{fileName:R,lineNumber:405}},_.a.createElement(E.Box,{paddingX:2,__source:{fileName:R,lineNumber:406}},_.a.createElement("img",{style:{maxWidth:"55px"},src:"/gw-logo.png",alt:"Gifting Wild",border:"0",__source:{fileName:R,lineNumber:407}})),_.a.createElement(E.Box,{flex:"grow",paddingX:5,__source:{fileName:R,lineNumber:409}},_.a.createElement("img",{style:{maxWidth:"105px",transform:"translate(-20px,3px)"},src:"/Gift_W_top.png",alt:"Gifting Wild",border:"0",__source:{fileName:R,lineNumber:410}})),_.a.createElement(E.Box,{paddingX:2,__source:{fileName:R,lineNumber:412}},_.a.createElement("div",{className:"questionButton",ref:function(t){e.infoAnchor=t},__source:{fileName:R,lineNumber:413}},_.a.createElement(E.IconButton,{accessibilityLabel:"Information About Us",icon:"question-mark",size:"md",iconColor:"white",onClick:this.handleInfoClick,__source:{fileName:R,lineNumber:416}}))),_.a.createElement(E.Box,{paddingX:2,paddingY:5,__source:{fileName:R,lineNumber:425}},_.a.createElement("div",{className:"cartButton",__source:{fileName:R,lineNumber:426}},_.a.createElement(L.a,{icon:"ios-cart",fontSize:"24px",color:(this.state.isCartOpen,"#FFF"),onClick:function(){return e.handleCartOpen()},__source:{fileName:R,lineNumber:427}}))))),_.a.createElement("div",{className:"App",id:"App",style:{background:"url(/skye-whalesong8x32.jpg)"},__source:{fileName:R,lineNumber:432}},_.a.createElement("div",{className:"Flash__message-wrapper",__source:{fileName:R,lineNumber:433}},_.a.createElement("p",{className:"Flash__message "+(this.state.accountVerificationMessage?"Flash__message--open":""),__source:{fileName:R,lineNumber:434}},"We have sent you an email, please click the link included to verify your email address")),_.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"65px"},__source:{fileName:R,lineNumber:436}},_.a.createElement(E.Box,{maxWidth:"100vw",display:"flex",direction:"row",justifyContent:"around",__source:{fileName:R,lineNumber:437}},_.a.createElement("div",{className:"blue",__source:{fileName:R,lineNumber:438}},_.a.createElement(j.a,o()({},n,{__source:{fileName:R,lineNumber:439}}),i)))),_.a.createElement("div",{className:"just-donate",style:{display:"flex",justifyContent:"flex-end",marginTop:"420px"},__source:{fileName:R,lineNumber:445}},_.a.createElement(E.Box,{padding:2,__source:{fileName:R,lineNumber:446}},0==this.state.isCartOpen?_.a.createElement(E.Button,{color:"transparent",text:"Donate Extra",size:"lg",onClick:this.handleCartOpen,__source:{fileName:R,lineNumber:447}}):null)),_.a.createElement(E.Box,{__source:{fileName:R,lineNumber:450}},_.a.createElement("div",{style:{position:"fixed",bottom:"15px",right:"15px",borderRadius:"45px"},ref:function(t){e.anchortool=t},__source:{fileName:R,lineNumber:451}},0==this.state.opentool?_.a.createElement("button",{className:"copyright-button",onClick:this.handleClickTooltip,__source:{fileName:R,lineNumber:457}},"\xa9"):_.a.createElement(E.IconButton,{accessibilityLabel:"Close Copyright Information",icon:"cancel",size:"md",iconColor:"white",onClick:function(){return e.setState({opentool:!1})},__source:{fileName:R,lineNumber:459}})),this.state.opentool&&_.a.createElement("div",{className:"tooltip_container",style:{position:"fixed",bottom:"100px",right:"440px",borderRadius:"45px"},__source:{fileName:R,lineNumber:469}},_.a.createElement(E.Tooltip,{size:"xl",anchor:this.anchortool,idealDirection:"left",onDismiss:this.handleDismissTooltip,__source:{fileName:R,lineNumber:470}},_.a.createElement(E.Text,{bold:!0,color:"white",size:"md",__source:{fileName:R,lineNumber:476}},"Copyright \xa9 2018 - Gifting Wild Inc. Art and Their Prints Are Trademark / Registered / Copyright of Respective Artist(s)."))))))}}]),t}(b.Component);F.propTypes={data:N.a.shape({loading:N.a.bool,error:N.a.object,shop:N.a.object}).isRequired,createCheckout:N.a.func.isRequired,checkoutLineItemsAdd:N.a.func.isRequired,checkoutLineItemsUpdate:N.a.func.isRequired};var M=x()(z),G=Object(v.compose)(Object(v.graphql)(M),Object(v.graphql)(I.createCheckout,{name:"createCheckout"}),Object(v.graphql)(I.checkoutLineItemsAdd,{name:"checkoutLineItemsAdd"}),Object(v.graphql)(I.checkoutLineItemsUpdate,{name:"checkoutLineItemsUpdate"}),Object(v.graphql)(I.checkoutLineItemsRemove,{name:"checkoutLineItemsRemove"}),Object(v.graphql)(I.checkoutCustomerAssociate,{name:"checkoutCustomerAssociate"}))(F);t.default=Object(V.withRouter)(G)}};
//# sourceMappingURL=main.411e0a664d0477fce223.hot-update.js.map