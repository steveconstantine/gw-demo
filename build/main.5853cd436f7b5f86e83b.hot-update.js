exports.id="main",exports.modules={"./src/components/Cart.js":function(e,t,a){"use strict";a.r(t);var i=a("babel-runtime/core-js/object/get-prototype-of"),r=a.n(i),o=a("babel-runtime/helpers/classCallCheck"),n=a.n(o),l=a("babel-runtime/helpers/createClass"),s=a.n(l),c=a("babel-runtime/helpers/possibleConstructorReturn"),m=a.n(c),u=a("babel-runtime/helpers/inherits"),d=a.n(u),p=a("react"),_=a.n(p),h=a("./src/components/LineItem.js"),N=a("gestalt"),f=a("./src/components/RadioButtonGroup/DonationRadioButtonGroup.js"),b=a("underscore"),v=a.n(b),C=(a("ismobilejs"),a("react-modal")),g=a.n(C),E=a("react-tiny-virtual-list"),k=a.n(E),x="C:\\apps\\gw\\src\\components\\Cart.js",I=[{value:"0",label:"None"},{value:"10",label:"$10"},{value:"50",label:"$50"},{value:"200",label:"$200"},{value:"1000",label:"$1000"},{value:"more",label:"More"}],y=function(e){function t(e){n()(this,t);var a=m()(this,(t.__proto__||r()(t)).call(this,e));return a.state={order:"",orderExtra:null,donationId:null,donationValue:0},a.setDonation=a.setDonation.bind(a),a.setDonationClick=a.setDonationClick.bind(a),a}return d()(t,e),s()(t,[{key:"setDonation",value:function(e){var t=e.value;t<0&&(t=0),this.setState({orderExtra:t});var a=[],i=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){i=this.props.checkout.lineItems.edges.map(function(e){return console.log(e),e.node.variant.id.toString()},this);for(var r=0;r<i.length;r++)i[r]==this.props.donationId&&a.push(i[r]);this.props.removeLineItemInCart(a[0]),"more"!=t&&a.length>0?this.setState({donationValue:100*t,donationLineItemId:a[0]}):this.setState({donationValue:100*t,donationLineItemId:null})}}},{key:"setDonationClick",value:function(e){this.setState({order:e,orderExtra:null});var t=[],a=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){a=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var i=0;i<a.length;i++)a[i]==this.props.donationId&&t.push(a[i]);this.props.removeLineItemInCart(t[0]),"more"!=e&&t.length>0?this.setState({donationValue:100*e.replace(/\./g,""),donationLineItemId:t[0]}):this.setState({donationValue:100*e.replace(/\./g,""),donationLineItemId:null})}}},{key:"render",value:function(){var e=this;v.a.isNull(this.props.checkout)&&console.log("null checkout");var t=[];0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)&&(t=this.props.checkout.lineItems.edges.reduce(function(t,a){return a.node.variant.id.toString()!=e.props.donationId&&t.push(_.a.createElement(h.default,{removeLineItemInCart:e.props.removeLineItemInCart,updateLineItemInCart:e.props.updateLineItemInCart,key:a.node.id.toString(),line_item:a.node,__source:{fileName:x,lineNumber:117}})),t},[]));var a=!1,i=void 0;"more"==this.state.order?(a=!0,i=this.state.orderExtra):i=this.state.order,null==i&&"more"==this.state.order||null!=this.state.orderExtra&&"more"==this.state.order?i=parseFloat(this.state.orderExtra).toFixed(2):null==this.state.order?i=parseFloat(0).toFixed(2):"more"!=this.state.order&&(i=parseFloat(this.state.order).toFixed(2)),null!=i&&"NaN"!=i||(i=parseFloat(0).toFixed(2));var r=v.a.isNull(this.props.checkout),o=parseFloat(i,10).toFixed(2);return 0==v.a.isNull(this.props.checkout)&&(o=parseFloat(this.props.checkout.totalPrice,10)+parseFloat(i,10)),t.length<1&&t.push(_.a.createElement("div",{className:"addToCartButton",__source:{fileName:x,lineNumber:154}},_.a.createElement(N.Box,{padding:2,justifyContent:"center",alignItems:"center",display:"flex",marginTop:"100px",__source:{fileName:x,lineNumber:155}},_.a.createElement(N.Button,{dangerouslySetInlineStyle:{__style:{fontSize:"36px !important",padding:"0 50px !important"}},size:"lg",color:"transparent",text:"Add Items To Cart",onClick:this.props.handleCartClose,__source:{fileName:x,lineNumber:156}})))),_.a.createElement("div",{__source:{fileName:x,lineNumber:169}},this.props.isCartOpen&&_.a.createElement(g.a,{isOpen:!0,onRequestClose:this.props.handleCartClose,closeTimeoutMS:50,style:{overlay:{},content:{background:"rgba(255,255,255,0.4)",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:x,lineNumber:171}},_.a.createElement("div",{style:{display:"inline-grid",marginLeft:"0",minHeight:"100vh"},__source:{fileName:x,lineNumber:204}},_.a.createElement("header",{className:"Cart__header",style:{position:"relative",width:"100vw",height:"100%"},__source:{fileName:x,lineNumber:205}},_.a.createElement("div",{className:"just-donate",style:{position:"fixed",right:"12px",top:"2px",zIndex:"9999"},__source:{fileName:x,lineNumber:206}},_.a.createElement(N.Box,{padding:2,__source:{fileName:x,lineNumber:207}},_.a.createElement(N.IconButton,{accessibilityLabel:"Cancel",bgColor:"white",icon:"cancel",iconColor:"darkGray",onClick:this.props.handleCartClose,__source:{fileName:x,lineNumber:208}})))),_.a.createElement(k.a,{width:"100%",height:375,itemCount:t.length,itemSize:150,renderItem:function(e){var a=e.index;return _.a.createElement("div",{key:a,style:a%2==0?{background:"rgba(255, 255, 255, 0.5)",padding:"20px"}:{background:"rgba(123, 123, 255, 0.123)",padding:"20px"},__source:{fileName:x,lineNumber:224}},t[a])},__source:{fileName:x,lineNumber:218}}),_.a.createElement("div",{className:"Cart__donations",style:{position:"sticky",width:"100vw"},__source:{fileName:x,lineNumber:229}},_.a.createElement("p",{className:"donations donationsMobile",style:{position:"relative",width:"100vw"},__source:{fileName:x,lineNumber:230}},"Donate Extra"),_.a.createElement(f.default,{items:I,value:"true"==a?"moreSelected":this.state.order,type:"default",onClick:this.setDonationClick,__source:{fileName:x,lineNumber:231}})),1==a?_.a.createElement("div",{className:"Cart__donations__more",style:{position:"sticky",width:"100vw"},__source:{fileName:x,lineNumber:235}},_.a.createElement(N.Box,{padding:3,__source:{fileName:x,lineNumber:236}},_.a.createElement(N.TextField,{id:"donate-more",onChange:this.setDonation,placeholder:"Donate Extra",value:this.state.orderExtra,type:"number",__source:{fileName:x,lineNumber:237}}))):null,_.a.createElement("footer",{className:"Cart__footer",style:{position:"relative",width:"100vw"},__source:{fileName:x,lineNumber:246}},_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:247}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:248}},"Subtotal"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:249}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:250}},"$ ",0==r?this.props.checkout.subtotalPrice:i))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:253}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:254}},"Extra Donation"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:255}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:256}},"$ ",i))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:259}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:260}},"Taxes"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:261}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:262}},"$ ",0==r?this.props.checkout.totalTax:0))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:265}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:266}},"Total"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:267}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:268}},"$ ",0==r?o.toFixed(2):i," "))),_.a.createElement(N.Button,{color:"black",text:"Checkout",onClick:function(){e.props.setDonationValue(e.state.donationValue,e.state.donationId),window.open(e.props.checkout.webUrl)},__source:{fileName:x,lineNumber:271}})))))}}]),t}(p.Component);t.default=y}};
//# sourceMappingURL=main.5853cd436f7b5f86e83b.hot-update.js.map