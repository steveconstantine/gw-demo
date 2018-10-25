exports.id="main",exports.modules={"./src/components/Cart.js":function(e,t,a){"use strict";a.r(t);var r=a("babel-runtime/core-js/object/get-prototype-of"),i=a.n(r),l=a("babel-runtime/helpers/classCallCheck"),o=a.n(l),s=a("babel-runtime/helpers/createClass"),n=a.n(s),c=a("babel-runtime/helpers/possibleConstructorReturn"),m=a.n(c),u=a("babel-runtime/helpers/inherits"),d=a.n(u),p=a("react"),_=a.n(p),N=a("./src/components/LineItem.js"),h=a("gestalt"),f=a("./src/components/RadioButtonGroup/DonationRadioButtonGroup.js"),b=a("underscore"),v=a.n(b),C=(a("ismobilejs"),a("react-modal")),g=a.n(C),E="C:\\apps\\gw\\src\\components\\Cart.js",k=[{value:"0",label:"None"},{value:"10",label:"$10"},{value:"50",label:"$50"},{value:"200",label:"$200"},{value:"1000",label:"$1000"},{value:"more",label:"More"}],x=function(e){function t(e){o()(this,t);var a=m()(this,(t.__proto__||i()(t)).call(this,e));return a.state={order:null,orderExtra:null},a.setDonation=a.setDonation.bind(a),a.setDonationClick=a.setDonationClick.bind(a),a}return d()(t,e),n()(t,[{key:"setDonation",value:function(e){var t=e.value;t<0&&(t=0),this.setState({orderExtra:t});var a=[],r=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){r=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var i=0;i<r.length;i++)"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDIyOTU1NDg1NTk5NA=="==r[i]&&a.push(r[i]);a.length>0&&this.props.setDonationValue(t.replace(/\./g,""),a[0])}}},{key:"setDonationClick",value:function(e){this.setState({order:e,orderExtra:null});var t=[],a=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){a=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var r=0;r<a.length;r++)"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDIyOTU1NDg1NTk5NA=="==a[r]&&t.push(a[r]);"more"!=e&&t.length>0&&this.props.setDonationValue(e.replace(/\./g,""),t[0])}}},{key:"render",value:function(){var e=this,t=[];0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)&&(t=this.props.checkout.lineItems.edges.reduce(function(t,a){return t.push(_.a.createElement(N.default,{removeLineItemInCart:e.props.removeLineItemInCart,updateLineItemInCart:e.props.updateLineItemInCart,key:a.node.id.toString(),line_item:a.node,__source:{fileName:E,lineNumber:89}})),t},[]));var a=!1,r=void 0;"more"==this.state.order?(a=!0,r=this.state.orderExtra):r=this.state.order,null==r&&"more"==this.state.order||null!=this.state.orderExtra&&"more"==this.state.order?r=parseFloat(this.state.orderExtra).toFixed(2):null==this.state.order?r=parseFloat(0).toFixed(2):"more"!=this.state.order&&(r=parseFloat(this.state.order).toFixed(2)),null!=r&&"NaN"!=r||(r=parseFloat(0).toFixed(2));var i=v.a.isNull(this.props.checkout),l=parseFloat(r,10).toFixed(2);return 0==v.a.isNull(this.props.checkout)&&(l=parseFloat(this.props.checkout.totalPrice,10)+parseFloat(r,10)),_.a.createElement("div",{__source:{fileName:E,lineNumber:125}},this.props.isCartOpen&&_.a.createElement(g.a,{isOpen:!0,onRequestClose:this.props.handleCartClose,closeTimeoutMS:50,style:{overlay:{},content:{background:"rgba(255,255,255,0.8)",height:"100vh",minHeight:"100vh",marginBottom:"0 !important",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"0 !important",marginLeft:"auto",marginRight:"auto",width:"100vw",zIndex:"5 !important"}},contentLabel:"Example Modal",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,role:"dialog",aria:{labelledby:"heading",describedby:"full_description"},__source:{fileName:E,lineNumber:127}},_.a.createElement("div",{style:{display:"inline-grid",marginLeft:"0",minHeight:"100vh"},__source:{fileName:E,lineNumber:160}},_.a.createElement("header",{className:"Cart__header",style:{position:"relative",width:"100vw",height:"100%"},__source:{fileName:E,lineNumber:161}},_.a.createElement("h2",{__source:{fileName:E,lineNumber:162}},"Cart"),_.a.createElement("button",{onClick:this.props.handleCartClose,className:"Cart__close",style:{top:"15px !important"},__source:{fileName:E,lineNumber:163}},"\xd7")),_.a.createElement("ul",{className:"Cart__line-items",__source:{fileName:E,lineNumber:169}},t),_.a.createElement("div",{className:"Cart__donations",style:{position:"sticky",width:"100vw"},__source:{fileName:E,lineNumber:172}},_.a.createElement("p",{className:"donations donationsMobile",style:{position:"relative",width:"100vw"},__source:{fileName:E,lineNumber:173}},"Donate Extra"),_.a.createElement(f.default,{items:k,value:"true"==a?"moreSelected":this.state.order,type:"default",onClick:this.setDonationClick,__source:{fileName:E,lineNumber:174}})),1==a?_.a.createElement("div",{className:"Cart__donations__more",style:{position:"sticky",width:"100vw"},__source:{fileName:E,lineNumber:178}},_.a.createElement(h.Box,{padding:3,__source:{fileName:E,lineNumber:179}},_.a.createElement(h.TextField,{id:"donate-more",onChange:this.setDonation,placeholder:"Donate Extra",value:this.state.orderExtra,type:"number",__source:{fileName:E,lineNumber:180}}))):null,_.a.createElement("footer",{className:"Cart__footer",style:{position:"relative",width:"100vw"},__source:{fileName:E,lineNumber:189}},_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:E,lineNumber:190}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:E,lineNumber:191}},"Subtotal"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:E,lineNumber:192}},_.a.createElement("span",{className:"pricing",__source:{fileName:E,lineNumber:193}},"$ ",0==i?this.props.checkout.subtotalPrice:r))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:E,lineNumber:196}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:E,lineNumber:197}},"Extra Donation"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:E,lineNumber:198}},_.a.createElement("span",{className:"pricing",__source:{fileName:E,lineNumber:199}},"$ ",r))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:E,lineNumber:202}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:E,lineNumber:203}},"Taxes"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:E,lineNumber:204}},_.a.createElement("span",{className:"pricing",__source:{fileName:E,lineNumber:205}},"$ ",0==i?this.props.checkout.totalTax:0))),_.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:E,lineNumber:208}},_.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:E,lineNumber:209}},"Total"),_.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:E,lineNumber:210}},_.a.createElement("span",{className:"pricing",__source:{fileName:E,lineNumber:211}},"$ ",0==i?l.toFixed(2):r," "))),_.a.createElement(h.Button,{color:"black",text:"Checkout",onClick:function(){window.open(e.props.checkout.webUrl)},__source:{fileName:E,lineNumber:214}})))))}}]),t}(p.Component);t.default=x}};
//# sourceMappingURL=main.3e865fe734674bba2322.hot-update.js.map