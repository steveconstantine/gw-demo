exports.id="main",exports.modules={"./src/components/Cart.js":function(e,t,a){"use strict";a.r(t);var o=a("babel-runtime/core-js/object/get-prototype-of"),n=a.n(o),i=a("babel-runtime/helpers/classCallCheck"),r=a.n(i),l=a("babel-runtime/helpers/createClass"),s=a.n(l),c=a("babel-runtime/helpers/possibleConstructorReturn"),m=a.n(c),u=a("babel-runtime/helpers/inherits"),d=a.n(u),p=a("react"),_=a.n(p),h=a("./src/components/LineItem.js"),N=a("gestalt"),f=a("./src/components/RadioButtonGroup/DonationRadioButtonGroup.js"),b=a("underscore"),g=a.n(b),v=(a("ismobilejs"),a("react-modal")),C=a.n(v),E=a("react-tiny-virtual-list"),I=a.n(E),k="C:\\apps\\gw\\src\\components\\Cart.js",x=[{value:"0",label:"None"},{value:"10",label:"$10"},{value:"50",label:"$50"},{value:"200",label:"$200"},{value:"1000",label:"$1000"},{value:"more",label:"More"}],y=function(e){function t(e){r()(this,t);var a=m()(this,(t.__proto__||n()(t)).call(this,e));return a.state={order:"",orderExtra:null,donationId:a.props.donationId,donationValue:0},a.setDonation=a.setDonation.bind(a),a.setDonationClick=a.setDonationClick.bind(a),a}return d()(t,e),s()(t,[{key:"setDonation",value:function(e){var t=this,a=e.value;a<0&&(a=0),this.setState({orderExtra:a});var o=[],n=[];if(0==g.a.isNull(this.props.checkout)&&0==g.a.isUndefined(this.props.checkout.lineItems)){n=this.props.checkout.lineItems.edges.map(function(e){return console.log(e),console.log(t.props.donationId),e.node.variant.id.toString()},this);for(var i=0;i<n.length;i++)n[i]==this.props.donationId&&o.push(n[i]);this.props.removeLineItemInCart(o[0]),"more"!=a&&o.length>0?(console.log("attempting update 1st loop"),this.setState({donationValue:100*a,donationLineItemId:o[0]}),this.props.setDonationValue(a.replace(/\./g,""),this.state.donationId)):(console.log("attempting update 2nd loop"),this.setState({donationValue:100*a,donationLineItemId:null}))}}},{key:"setDonationClick",value:function(e){var t=this;this.setState({order:e,orderExtra:null});var a=[],o=[];if(0==g.a.isNull(this.props.checkout)&&0==g.a.isUndefined(this.props.checkout.lineItems)){o=this.props.checkout.lineItems.edges.map(function(e){return console.log("line_item"),console.log(t.props.donationId),e.node.variant.id.toString()},this);for(var n=0;n<o.length;n++)o[n]==this.props.donationId&&a.push(o[n]);this.props.removeLineItemInCart(a[0]),"more"!=e&&a.length>0?(console.log("attempting update 1st loop"),this.setState({donationValue:100*e,donationLineItemId:a[0]}),this.props.setDonationValue(e.replace(/\./g,""),this.props.donationId)):(console.log("attempting update 2nd loop"),this.setState({donationValue:100*e,donationLineItemId:null}))}}},{key:"render",value:function(){var e=this;g.a.isNull(this.props.checkout)&&console.log("null checkout");var t=[];0==g.a.isNull(this.props.checkout)&&0==g.a.isUndefined(this.props.checkout.lineItems)&&(t=this.props.checkout.lineItems.edges.reduce(function(t,a){return a.node.variant.id.toString()!=e.props.donationId&&t.push(_.a.createElement(h.default,{removeLineItemInCart:e.props.removeLineItemInCart,updateLineItemInCart:e.props.updateLineItemInCart,key:a.node.id.toString(),line_item:a.node,__source:{fileName:k,lineNumber:124}})),t},[]));var a=!1,o=void 0;"more"==this.state.order?(a=!0,o=this.state.orderExtra):o=this.state.order,null==o&&"more"==this.state.order||null!=this.state.orderExtra&&"more"==this.state.order?o=parseFloat(this.state.orderExtra).toFixed(2):null==this.state.order?o=parseFloat(0).toFixed(2):"more"!=this.state.order&&(o=parseFloat(this.state.order).toFixed(2)),null!=o&&"NaN"!=o||(o=parseFloat(0).toFixed(2));var n=g.a.isNull(this.props.checkout),i=parseFloat(o,10).toFixed(2);return 0==g.a.isNull(this.props.checkout)&&(i=parseFloat(this.props.checkout.totalPrice,10)+parseFloat(o,10)),t.length<1&&t.push(_.a.createElement("div",{className:"addToCartButton",__source:{fileName:k,lineNumber:161}},_.a.createElement(N.Box,{padding:2,justifyContent:"center",alignItems:"center",display:"flex",marginTop:"100px",__source:{fileName:k,lineNumber:162}},_.a.createElement(N.Button,{dangerouslySetInlineStyle:{__style:{fontSize:"36px !important",padding:"0 50px !important"}},size:"lg",color:"transparent",text:"Add Items To Cart",onClick:this.props.handleCartClose,__source:{fileName:k,lineNumber:163}})))),_.a.createElement("div",{__source:{fileName:k,lineNumber:176}},this.props.isCartOpen&&_.a.createElement(C.a,{isOpen:!0,onRequestClose:this.props.handleCartClose,closeTimeoutMS:50,style:{overlay:{},content:{background:"rgba(255,255,255,0.4)",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:k,lineNumber:178}},_.a.createElement("div",{style:{display:"inline-grid",marginLeft:"0",minHeight:"100vh"},__source:{fileName:k,lineNumber:211}},_.a.createElement("header",{className:"Cart__header",style:{position:"relative",width:"100vw",height:"100%"},__source:{fileName:k,lineNumber:212}},_.a.createElement("div",{className:"just-donate",style:{position:"fixed",right:"12px",top:"2px",zIndex:"9999"},__source:{fileName:k,lineNumber:213}},_.a.createElement(N.Box,{padding:2,__source:{fileName:k,lineNumber:214}},_.a.createElement(N.IconButton,{accessibilityLabel:"Cancel",bgColor:"white",icon:"cancel",iconColor:"darkGray",onClick:this.props.handleCartClose,__source:{fileName:k,lineNumber:215}})))),_.a.createElement(I.a,{width:"100%",height:375,itemCount:t.length,itemSize:150,renderItem:function(e){var a=e.index;return _.a.createElement("div",{key:a,style:a%2==0?{background:"rgba(255, 255, 255, 0.5)",padding:"20px"}:{background:"rgba(123, 123, 255, 0.123)",padding:"20px"},__source:{fileName:k,lineNumber:231}},t[a])},__source:{fileName:k,lineNumber:225}}),_.a.createElement("div",{className:"Cart__donations",style:{position:"sticky",width:"100vw"},__source:{fileName:k,lineNumber:236}},_.a.createElement("p",{className:"donations donationsMobile",style:{position:"relative",width:"100vw"},__source:{fileName:k,lineNumber:237}},"Donate Extra"),_.a.createElement(f.default,{items:x,value:"true"==a?"moreSelected":this.state.order,type:"default",onClick:this.setDonationClick,__source:{fileName:k,lineNumber:238}})),1==a?_.a.createElement("div",{className:"Cart__donations__more",style:{position:"sticky",width:"100vw"},__source:{fileName:k,lineNumber:242}},_.a.createElement(N.Box,{padding:3,__source:{fileName:k,lineNumber:243}},_.a.createElement(N.TextField,{id:"donate-more",onChange:this.setDonation,placeholder:"Donate Extra",value:this.state.orderExtra,type:"number",__source:{fileName:k,lineNumber:244}}))):null,_.a.createElement("footer",{className:"Cart__footer",style:{position:"relative",width:"100vw"},__source:{fileName:k,lineNumber:253}},_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:k,lineNumber:254}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:k,lineNumber:255}},"Subtotal"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:k,lineNumber:256}},_.a.createElement("span",{className:"pricing",__source:{fileName:k,lineNumber:257}},"$ ",0==n?this.props.checkout.subtotalPrice:o))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:k,lineNumber:260}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:k,lineNumber:261}},"Extra Donation"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:k,lineNumber:262}},_.a.createElement("span",{className:"pricing",__source:{fileName:k,lineNumber:263}},"$ ",o))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:k,lineNumber:266}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:k,lineNumber:267}},"Taxes"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:k,lineNumber:268}},_.a.createElement("span",{className:"pricing",__source:{fileName:k,lineNumber:269}},"$ ",0==n?this.props.checkout.totalTax:0))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:k,lineNumber:272}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:k,lineNumber:273}},"Total"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:k,lineNumber:274}},_.a.createElement("span",{className:"pricing",__source:{fileName:k,lineNumber:275}},"$ ",0==n?i.toFixed(2):o," "))),_.a.createElement(N.Button,{color:"black",text:"Checkout",onClick:function(){e.props.setDonationValue(e.state.donationValue,e.state.donationId),window.open(e.props.checkout.webUrl)},__source:{fileName:k,lineNumber:278}})))))}}]),t}(p.Component);t.default=y}};
//# sourceMappingURL=main.582b97a2d636d2778879.hot-update.js.map