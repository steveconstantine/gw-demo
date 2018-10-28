exports.id="main",exports.modules={"./src/App.js":function(e,t,n){"use strict";n.r(t);var a=n("babel-runtime/helpers/taggedTemplateLiteral"),i=n.n(a),o=n("babel-runtime/helpers/extends"),s=n.n(o),r=n("babel-runtime/core-js/object/get-prototype-of"),l=n.n(r),c=n("babel-runtime/helpers/classCallCheck"),u=n.n(c),d=n("babel-runtime/helpers/createClass"),m=n.n(d),h=n("babel-runtime/helpers/possibleConstructorReturn"),p=n.n(h),f=n("babel-runtime/helpers/inherits"),g=n.n(f),b=n("react"),_=n.n(b),C=n("prop-types"),N=n.n(C),v=n("react-apollo"),k=n("./src/components/Cart.js"),y=n("graphql-tag"),I=n.n(y),x=n("./src/checkout.js"),E=(n("react-loader-spinner"),n("gestalt")),S=(n("react-custom-scrollbars"),n("react-headroom")),D=n.n(S),T=n("rc-drawer-menu"),w=n.n(T),A=n("./src/components/Product.js"),O=n("react-ionicons"),L=n.n(O),B=n("react-slick"),j=n.n(B),V=n("react-router-dom"),q=(n("react-background-image-loader"),n("sc-hide-scrollbar-react")),P=n.n(q),z=(n("./src/styles/DonationRadioButtonGroup.css"),n("./src/styles/gestalt.css"),n("./src/styles/RadioButtonGroup.css"),n("./src/styles/rc-drawer-menu.css"),n("./src/styles/react-router-modal.css"),n("./src/styles/rodal.css"),n("./src/styles/slick.css"),n("./src/styles/slick-theme.css"),n("./src/styles/app.css"),n("./src/styles/Scrollable.css"),"C:\\apps\\gw\\src\\App.js"),R=i()(["\nquery shopQuery {\n  shop {\n    name\n    products(first:15) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          title\n          vendor\n          handle\n          productType\n          descriptionHtml\n          options {\n            id\n            name\n            values\n          }\n          variants(first: 30) {\n            edges {\n              node {\n                id\n                title\n                selectedOptions {\n                  name\n                  value\n                }\n                image {\n                  src\n                }\n                availableForSale\n                price\n              }\n            }\n          }\n          images(first:30) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                src\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"],["\nquery shopQuery {\n  shop {\n    name\n    products(first:15) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          title\n          vendor\n          handle\n          productType\n          descriptionHtml\n          options {\n            id\n            name\n            values\n          }\n          variants(first: 30) {\n            edges {\n              node {\n                id\n                title\n                selectedOptions {\n                  name\n                  value\n                }\n                image {\n                  src\n                }\n                availableForSale\n                price\n              }\n            }\n          }\n          images(first:30) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                src\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]),W=n("web-storage")().localStorage,F=function(e){function t(){u()(this,t);var e=p()(this,(t.__proto__||l()(t)).call(this));return e.responsive={0:{items:2},1024:{items:4}},e.onChange=function(t,n){var a=n.newValue;e.setState({value:a})},e.state={opentool:!1,isFull:!1,isCartOpen:!1,isCustomerAuthOpen:!1,activeIndex:0,isNewCustomer:!1,loggedIn:!!W.get("token"),products:[],checkout:{lineItems:{edges:[]}},suggestions:[],value:"",shop:{},delta:5,navbarHeight:69,open:!1,infoOpen:!1,hasMore:!0,modalLinks:e.props&&e.props.data?e.generateElements():[],itemIndex:0,items:["Our Story","Campaign"],isSliding:!1,direction:!1,imagesLoaded:!1},e.handleCartClose=e.handleCartClose.bind(e),e.handleCartOpen=e.handleCartOpen.bind(e),e.openCustomerAuth=e.openCustomerAuth.bind(e),e.closeCustomerAuth=e.closeCustomerAuth.bind(e),e.closeCustomerAuthVerified=e.closeCustomerAuthVerified.bind(e),e.addVariantToCart=x.addVariantToCart.bind(e),e.addDonationToCart=x.addDonationToCart.bind(e),e.updateDonationInCart=x.updateDonationInCart.bind(e),e.removeDonationInCart=x.removeDonationInCart.bind(e),e.updateLineItemInCart=x.updateLineItemInCart.bind(e),e.removeLineItemInCart=x.removeLineItemInCart.bind(e),e.handleDonations=e.handleDonations.bind(e),e.showAccountVerificationMessage=e.showAccountVerificationMessage.bind(e),e.associateCustomerCheckout=x.associateCustomerCheckout.bind(e),e.handleClick=e._handleClick.bind(e),e.handleClickTooltip=e._handleClickTooltip.bind(e),e.handleDismiss=e._handleDismiss.bind(e),e.handleDismissTooltip=e._handleDismissTooltip.bind(e),e.handleInfoClick=e._handleInfoClick.bind(e),e.handleInfoDismiss=e._handleInfoDismiss.bind(e),e.handleTabsChange=e._handleTabsChange.bind(e),e.handleItemChange=e.handleItemChange.bind(e),e.preventClickAfter=e.preventClickAfter.bind(e),e.setSwipeDirection=e.setSwipeDirection.bind(e),e.handleImageLoaded=e.handleImageLoaded.bind(e),e.imagesLoaded=e.imagesLoaded.bind(e),e}return g()(t,e),m()(t,[{key:"componentWillMount",value:function(){var e=this;W.remove("checkout"),this.props.createCheckout({variables:{input:{}}}).then(function(t){var n=W.get("checkout")||t.data.checkoutCreate.checkout;e.setState({checkout:n})}),this.setState({imagesLoaded:!0})}},{key:"componentDidMount",value:function(){}},{key:"handleItemChange",value:function(e){var t=e.activeIndex;this.setState(function(e){return{itemIndex:t}})}},{key:"handleCartOpen",value:function(){this.props.history.push("/cart"),this.setState({isCartOpen:!0})}},{key:"handleCartClose",value:function(){this.props.history.push("/"),this.setState({isCartOpen:!1})}},{key:"openCustomerAuth",value:function(e){"new-customer"===e.target.getAttribute("data-customer-type")?this.setState({isNewCustomer:!0,isCustomerAuthOpen:!0}):this.setState({isNewCustomer:!1,isCustomerAuthOpen:!0})}},{key:"showAccountVerificationMessage",value:function(){var e=this;this.setState({accountVerificationMessage:!0}),setTimeout(function(){e.setState({accountVerificationMessage:!1})},5e3)}},{key:"closeCustomerAuth",value:function(){this.setState({isCustomerAuthOpen:!1})}},{key:"closeCustomerAuthVerified",value:function(){this.setState({isCustomerAuthOpen:!1})}},{key:"_handleClick",value:function(){var e=this;this.setState(function(){return{open:!e.state.open}})}},{key:"_handleDismiss",value:function(){this.setState(function(){return{open:!1}})}},{key:"_handleClickTooltip",value:function(){this.setState(function(){return{opentool:!0}})}},{key:"_handleDismissTooltip",value:function(){this.setState(function(){return{opentool:!1}})}},{key:"_handleInfoClick",value:function(){var e=this;this.setState(function(){return{infoOpen:!e.state.infoOpen}})}},{key:"_handleInfoDismiss",value:function(){this.setState(function(){return{infoOpen:!1}})}},{key:"_handleTabsChange",value:function(e){var t=e.activeTabIndex;e.event.preventDefault(),this.setState({activeIndex:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"selectedVariant",value:function(e){this.setState({selectedVariant:e})}},{key:"preventClickAfter",value:function(e){e.preventDefault()}},{key:"setSwipeDirection",value:function(e,t,n){"left"==n?this.setState({direction:!0}):this.setState({direction:!1})}},{key:"handleImageLoaded",value:function(e){this.setState({imagesLoaded:!0})}},{key:"imagesLoaded",value:function(){this.state.imagesLoaded;return!0}},{key:"handleDonations",value:function(e,t,n){"new add"!=n?(console.log("handleDonations 1st if"),this.removeDonationInCart(n),this.addDonationToCart(e,n,t)):(console.log("handleDonations 2nd if"),this.removeDonationInCart(n),this.addDonationToCart(e,t))}},{key:"render",value:function(){var e=this;if(this.props.data.loading)return _.a.createElement("div",{id:"spinner",style:{background:"url(/skye-whalesong8x32.jpg)"},__source:{fileName:z,lineNumber:277}});if(this.props.data.error)return _.a.createElement("p",{__source:{fileName:z,lineNumber:280}},this.props.data.error.message);console.log("Home - render method"),console.log(this.state.checkout);var t=this.props.data.shop.products.edges.reduce(function(e,t){return"donation"!=t.node.handle&&e.push([t.node.id,t.node.vendor,t.node.title]),e},[]),n={dots:!0,infinite:!0,accessibility:!0,speed:500,autoplay:!1,autoplaySpeed:1800,slidesToShow:4,slidesToScroll:4,rtl:this.state.direction,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}}],beforeChange:function(){return e.setState({isSliding:!0})},afterChange:function(){return e.setState({isSliding:!1})}},a="",i=this.props.data.shop.products.edges.reduce(function(n,i,o){return"donation"!=i.node.handle?n.push(_.a.createElement(A.default,{addVariantToCart:e.addVariantToCart,checkout:e.state.checkout,client:e.props.client,key:i.node.id.toString(),product:i.node,productIDs:t,productIndex:o,search:e.state.search,artSize:Math.random()+1,selectedVariant:e.selectedVariant,isSliding:e.state.isSliding,handleImageLoaded:!0,cartOpen:1==e.state.isCartOpen,__source:{fileName:z,lineNumber:321}})):a=i.node.variants.edges[0].node.id,n},[]);return _.a.createElement(P.a,{__source:{fileName:z,lineNumber:343}},_.a.createElement(D.a,{id:"header",className:"header nav-down",style:{WebkitTransition:"all .5s ease-in-out",MozTransition:"all .5s ease-in-out",OTransition:"all .5s ease-in-out",transition:"all .5s ease-in-out",position:"fixed",height:"0",zIndex:"8"},__source:{fileName:z,lineNumber:344}},this.state.open&&_.a.createElement(E.Flyout,{anchor:this.anchor,idealDirection:"down",message:"Hi There!",onDismiss:this.handleDismiss,size:"md",__source:{fileName:z,lineNumber:355}},_.a.createElement(E.Box,{padding:3,__source:{fileName:z,lineNumber:362}},_.a.createElement(E.Text,{bold:!0,align:"center",__source:{fileName:z,lineNumber:363}},"Accounts are coming! Don't worry, by staying logged in we've got your orders on file."),_.a.createElement(E.Box,{paddingX:2,marginTop:3,__source:{fileName:z,lineNumber:366}},_.a.createElement(E.Button,{color:"red",text:"Ask us anything",__source:{fileName:z,lineNumber:367}})),_.a.createElement(E.Box,{paddingX:2,marginTop:3,__source:{fileName:z,lineNumber:369}},_.a.createElement(E.Button,{color:"blue",text:"Log out",onClick:function(){W.removeItem("token"),e.setState({loggedIn:!1})},__source:{fileName:z,lineNumber:370}})))),this.state.infoOpen&&_.a.createElement(E.Flyout,{anchor:this.infoAnchor,idealDirection:"down",message:"Hi There!",onDismiss:this.handleInfoDismiss,size:"md",__source:{fileName:z,lineNumber:375}},_.a.createElement(E.Box,{maxWidth:300,marginTop:2,marginBottom:2,__source:{fileName:z,lineNumber:382}},_.a.createElement("div",{style:{paddingTop:"8px"},__source:{fileName:z,lineNumber:383}}),_.a.createElement(E.SegmentedControl,{items:this.state.items,selectedItemIndex:this.state.itemIndex,onChange:this.handleItemChange,__source:{fileName:z,lineNumber:384}}),0===this.state.itemIndex?_.a.createElement(E.Box,{paddingY:2,__source:{fileName:z,lineNumber:389}},_.a.createElement(E.Heading,{size:"xs",__source:{fileName:z,lineNumber:390}},"We feel like helping clean up ocean pollution. ",_.a.createElement("br",{__source:{fileName:z,lineNumber:391}}),"Our goals include enabling participation and innovation with organised cleanup efforts. It is a gift to be part of something good!")):null,1===this.state.itemIndex?_.a.createElement(E.Box,{paddingY:2,__source:{fileName:z,lineNumber:395}},_.a.createElement(E.Heading,{size:"xs",__source:{fileName:z,lineNumber:396}},"Funds raised go to direct action involved with cleaning the ocean. ",_.a.createElement("br",{__source:{fileName:z,lineNumber:397}})," Our spotlight is on proven action by   ............................ You are invited to please visit their website - ............. .com")):null)),_.a.createElement(w.a,{level:["body > h1","#root"],placement:"right",handleChild:_.a.createElement("div",{__source:{fileName:z,lineNumber:405}}),handleStyle:{top:"100px",display:"none !important"},open:!(!this.state.isCartOpen||"/cart"!=this.props.location.pathname),onMaskClick:function(){return e.handleCartClose()},onHandleClick:function(){return e.handleCartClose()},__source:{fileName:z,lineNumber:403}},_.a.createElement(E.Box,{padding:3,__source:{fileName:z,lineNumber:411}},_.a.createElement(k.default,{setDonationValue:function(t,n){e.handleDonations(a,t,n)},removeDonationInCart:function(t){e.removeDonationInCart(t)},removeLineItemInCart:this.removeLineItemInCart,updateLineItemInCart:this.updateLineItemInCart,checkout:this.state.checkout,isCartOpen:!(!this.state.isCartOpen||"/cart"!=this.props.location.pathname),handleCartClose:this.handleCartClose,customerAccessToken:this.state.customerAccessToken,donationId:a,__source:{fileName:z,lineNumber:412}}))),_.a.createElement(E.Box,{color:"transparent",padding:1,display:"flex",direction:"row",alignItems:"center",__source:{fileName:z,lineNumber:425}},_.a.createElement(E.Box,{paddingX:2,__source:{fileName:z,lineNumber:426}},_.a.createElement("img",{style:{maxWidth:"55px"},src:"/gw-logo.png",alt:"Gifting Wild",border:"0",__source:{fileName:z,lineNumber:427}})),_.a.createElement(E.Box,{flex:"grow",paddingX:5,__source:{fileName:z,lineNumber:429}},_.a.createElement("img",{style:{maxWidth:"105px",transform:"translate(-20px,3px)"},src:"/Gift_W_top.png",alt:"Gifting Wild",border:"0",__source:{fileName:z,lineNumber:430}})),_.a.createElement(E.Box,{paddingX:2,__source:{fileName:z,lineNumber:432}},_.a.createElement("div",{className:"questionButton",ref:function(t){e.infoAnchor=t},__source:{fileName:z,lineNumber:433}},_.a.createElement(E.IconButton,{accessibilityLabel:"Information About Us",icon:"question-mark",size:"md",iconColor:"white",onClick:this.handleInfoClick,__source:{fileName:z,lineNumber:436}}))),_.a.createElement(E.Box,{paddingX:2,paddingY:5,__source:{fileName:z,lineNumber:445}},_.a.createElement("div",{className:"cartButton",__source:{fileName:z,lineNumber:446}},_.a.createElement(L.a,{icon:"ios-cart",fontSize:"24px",color:(this.state.isCartOpen,"#FFF"),onClick:function(){return e.handleCartOpen()},__source:{fileName:z,lineNumber:447}}))))),_.a.createElement("div",{className:"App",id:"App",style:{background:"url(/skye-whalesong8x32.jpg)"},__source:{fileName:z,lineNumber:452}},_.a.createElement("div",{className:"Flash__message-wrapper",__source:{fileName:z,lineNumber:453}},_.a.createElement("p",{className:"Flash__message "+(this.state.accountVerificationMessage?"Flash__message--open":""),__source:{fileName:z,lineNumber:454}},"We have sent you an email, please click the link included to verify your email address")),_.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"65px"},__source:{fileName:z,lineNumber:456}},_.a.createElement(E.Box,{maxWidth:"100vw",display:"flex",direction:"row",justifyContent:"around",__source:{fileName:z,lineNumber:457}},_.a.createElement("div",{className:"blue",__source:{fileName:z,lineNumber:458}},_.a.createElement(j.a,s()({},n,{__source:{fileName:z,lineNumber:459}}),i)))),_.a.createElement("div",{className:"just-donate",style:{display:"flex",justifyContent:"flex-end",marginTop:"420px"},__source:{fileName:z,lineNumber:465}},_.a.createElement(E.Box,{padding:2,__source:{fileName:z,lineNumber:466}},0==this.state.isCartOpen?_.a.createElement(E.Button,{color:"transparent",text:"Donate Extra",size:"lg",onClick:this.handleCartOpen,__source:{fileName:z,lineNumber:467}}):null)),_.a.createElement(E.Box,{__source:{fileName:z,lineNumber:470}},_.a.createElement("div",{style:{position:"absolute",top:"193vh",right:"15px",borderRadius:"45px"},ref:function(t){e.anchortool=t},__source:{fileName:z,lineNumber:471}},0==this.state.opentool?_.a.createElement("button",{className:"copyright-button",onClick:this.handleClickTooltip,__source:{fileName:z,lineNumber:477}},"\xa9"):_.a.createElement(E.IconButton,{accessibilityLabel:"Close Copyright Information",icon:"cancel",size:"md",iconColor:"white",onClick:function(){return e.setState({opentool:!1})},__source:{fileName:z,lineNumber:479}})),this.state.opentool&&_.a.createElement("div",{__source:{fileName:z,lineNumber:489}},_.a.createElement(E.Tooltip,{size:"xl",anchor:this.anchortool,idealDirection:"left",onDismiss:this.handleDismissTooltip,__source:{fileName:z,lineNumber:490}},_.a.createElement(E.Text,{bold:!0,color:"white",size:"md",__source:{fileName:z,lineNumber:496}},"Copyright \xa9 2018 - Gifting Wild Inc. Art and Their Prints Are Trademark / Registered / Copyright of Respective Artist(s)."))))))}}]),t}(b.Component);F.propTypes={data:N.a.shape({loading:N.a.bool,error:N.a.object,shop:N.a.object}).isRequired,createCheckout:N.a.func.isRequired,checkoutLineItemsAdd:N.a.func.isRequired,checkoutLineItemsUpdate:N.a.func.isRequired};var M=I()(R),H=Object(v.compose)(Object(v.graphql)(M),Object(v.graphql)(x.createCheckout,{name:"createCheckout"}),Object(v.graphql)(x.checkoutLineItemsAdd,{name:"checkoutLineItemsAdd"}),Object(v.graphql)(x.checkoutLineItemsUpdate,{name:"checkoutLineItemsUpdate"}),Object(v.graphql)(x.checkoutLineItemsRemove,{name:"checkoutLineItemsRemove"}),Object(v.graphql)(x.checkoutCustomerAssociate,{name:"checkoutCustomerAssociate"}))(F);t.default=Object(V.withRouter)(H)}};
//# sourceMappingURL=main.2b43101edeb9b6aca629.hot-update.js.map