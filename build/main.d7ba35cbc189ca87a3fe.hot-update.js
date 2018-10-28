exports.id="main",exports.modules={"./src/components/Cart.js":function(e,t,a){"use strict";a.r(t);var r=a("babel-runtime/core-js/object/get-prototype-of"),i=a.n(r),o=a("babel-runtime/helpers/classCallCheck"),l=a.n(o),n=a("babel-runtime/helpers/createClass"),s=a.n(n),c=a("babel-runtime/helpers/possibleConstructorReturn"),m=a.n(c),u=a("babel-runtime/helpers/inherits"),d=a.n(u),p=a("react"),_=a.n(p),N=a("./src/components/LineItem.js"),h=a("gestalt"),f=a("./src/components/RadioButtonGroup/DonationRadioButtonGroup.js"),b=a("underscore"),v=a.n(b),g=(a("ismobilejs"),a("react-modal")),C=a.n(g),E=a("react-tiny-virtual-list"),k=a.n(E),x="C:\\apps\\gw\\src\\components\\Cart.js",y=[{value:"0",label:"None"},{value:"10",label:"$10"},{value:"50",label:"$50"},{value:"200",label:"$200"},{value:"1000",label:"$1000"},{value:"more",label:"More"}],I=function(e){function t(e){l()(this,t);var a=m()(this,(t.__proto__||i()(t)).call(this,e));return a.state={order:null,orderExtra:null},a.setDonation=a.setDonation.bind(a),a.setDonationClick=a.setDonationClick.bind(a),a}return d()(t,e),s()(t,[{key:"setDonation",value:function(e){console.log("entering donation function");var t=e.value;t<0&&(t=0),this.setState({orderExtra:t});var a=[],r=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){console.log("past if statement"),r=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var i=0;i<r.length;i++)"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTM4MTYyMTkzMjEwNQ=="==r[i]&&a.push(r[i]);a.length>0&&this.props.setDonationValue(t.replace(/\./g,""),a[0])}}},{key:"setDonationClick",value:function(e){console.log("entering donation click function"),this.setState({order:e,orderExtra:null});var t=[],a=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){console.log("past if statement"),a=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var r=0;r<a.length;r++)"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTM4MTYyMTkzMjEwNQ=="==a[r]&&t.push(a[r]);"more"!=e&&t.length>0&&this.props.setDonationValue(e.replace(/\./g,""),t[0])}}},{key:"render",value:function(){var e=this;v.a.isNull(this.props.checkout)&&console.log("null checkout");var t=[];0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)&&(t=this.props.checkout.lineItems.edges.reduce(function(t,a){return t.push(_.a.createElement(N.default,{removeLineItemInCart:e.props.removeLineItemInCart,updateLineItemInCart:e.props.updateLineItemInCart,key:a.node.id.toString(),line_item:a.node,__source:{fileName:x,lineNumber:97}})),t},[]));var a=!1,r=void 0;"more"==this.state.order?(a=!0,r=this.state.orderExtra):r=this.state.order,null==r&&"more"==this.state.order||null!=this.state.orderExtra&&"more"==this.state.order?r=parseFloat(this.state.orderExtra).toFixed(2):null==this.state.order?r=parseFloat(0).toFixed(2):"more"!=this.state.order&&(r=parseFloat(this.state.order).toFixed(2)),null!=r&&"NaN"!=r||(r=parseFloat(0).toFixed(2));var i=v.a.isNull(this.props.checkout),o=parseFloat(r,10).toFixed(2);return 0==v.a.isNull(this.props.checkout)&&(o=parseFloat(this.props.checkout.totalPrice,10)+parseFloat(r,10)),t.length<1&&t.push(_.a.createElement("div",{className:"addToCartButton",__source:{fileName:x,lineNumber:133}},_.a.createElement(h.Box,{padding:2,justifyContent:"center",alignItems:"center",display:"flex",marginTop:"100px",__source:{fileName:x,lineNumber:134}},_.a.createElement(h.Button,{dangerouslySetInlineStyle:{__style:{fontSize:"36px !important",padding:"0 50px !important"}},size:"lg",color:"transparent",text:"Add Items To Cart",onClick:this.props.handleCartClose,__source:{fileName:x,lineNumber:135}})))),_.a.createElement("div",{__source:{fileName:x,lineNumber:148}},this.props.isCartOpen&&_.a.createElement(C.a,{isOpen:!0,onRequestClose:this.props.handleCartClose,closeTimeoutMS:50,style:{overlay:{},content:{background:"rgba(255,255,255,0.4)",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:x,lineNumber:150}},_.a.createElement("div",{style:{display:"inline-grid",marginLeft:"0",minHeight:"100vh"},__source:{fileName:x,lineNumber:183}},_.a.createElement("header",{className:"Cart__header",style:{position:"relative",width:"100vw",height:"100%"},__source:{fileName:x,lineNumber:184}},_.a.createElement("div",{className:"just-donate",style:{position:"fixed",right:"12px",top:"2px",zIndex:"9999"},__source:{fileName:x,lineNumber:185}},_.a.createElement(h.Box,{padding:2,__source:{fileName:x,lineNumber:186}},_.a.createElement(h.IconButton,{accessibilityLabel:"Cancel",bgColor:"white",icon:"cancel",iconColor:"darkGray",onClick:this.props.handleCartClose,__source:{fileName:x,lineNumber:187}})))),_.a.createElement(k.a,{width:"100%",height:375,itemCount:t.length,itemSize:150,renderItem:function(e){var a=e.index;return _.a.createElement("div",{key:a,style:a%2==0?{background:"rgba(255, 255, 255, 0.5)",padding:"20px"}:{background:"rgba(123, 123, 255, 0.123)",padding:"20px"},__source:{fileName:x,lineNumber:203}},t[a])},__source:{fileName:x,lineNumber:197}}),_.a.createElement("div",{className:"Cart__donations",style:{position:"sticky",width:"100vw"},__source:{fileName:x,lineNumber:208}},_.a.createElement("p",{className:"donations donationsMobile",style:{position:"relative",width:"100vw"},__source:{fileName:x,lineNumber:209}},"Donate Extra"),_.a.createElement(f.default,{items:y,value:"true"==a?"moreSelected":this.state.order,type:"default",onClick:this.setDonationClick,__source:{fileName:x,lineNumber:210}})),1==a?_.a.createElement("div",{className:"Cart__donations__more",style:{position:"sticky",width:"100vw"},__source:{fileName:x,lineNumber:214}},_.a.createElement(h.Box,{padding:3,__source:{fileName:x,lineNumber:215}},_.a.createElement(h.TextField,{id:"donate-more",onChange:this.setDonation,placeholder:"Donate Extra",value:this.state.orderExtra,type:"number",__source:{fileName:x,lineNumber:216}}))):null,_.a.createElement("footer",{className:"Cart__footer",style:{position:"relative",width:"100vw"},__source:{fileName:x,lineNumber:225}},_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:226}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:227}},"Subtotal"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:228}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:229}},"$ ",0==i?this.props.checkout.subtotalPrice:r))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:232}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:233}},"Extra Donation"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:234}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:235}},"$ ",r))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:238}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:239}},"Taxes"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:240}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:241}},"$ ",0==i?this.props.checkout.totalTax:0))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:x,lineNumber:244}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:x,lineNumber:245}},"Total"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:x,lineNumber:246}},_.a.createElement("span",{className:"pricing",__source:{fileName:x,lineNumber:247}},"$ ",0==i?o.toFixed(2):r," "))),_.a.createElement(h.Button,{color:"black",text:"Checkout",onClick:function(){window.open(e.props.checkout.webUrl)},__source:{fileName:x,lineNumber:250}})))))}}]),t}(p.Component);t.default=I}};
//# sourceMappingURL=main.d7ba35cbc189ca87a3fe.hot-update.js.map