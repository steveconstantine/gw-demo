exports.id="main",exports.modules={"./src/components/Cart.js":function(e,t,a){"use strict";a.r(t);var r=a("babel-runtime/core-js/object/get-prototype-of"),i=a.n(r),l=a("babel-runtime/helpers/classCallCheck"),o=a.n(l),n=a("babel-runtime/helpers/createClass"),s=a.n(n),c=a("babel-runtime/helpers/possibleConstructorReturn"),m=a.n(c),u=a("babel-runtime/helpers/inherits"),_=a.n(u),N=a("react"),p=a.n(N),d=a("./src/components/LineItem.js"),h=a("gestalt"),f=a("./src/components/RadioButtonGroup/DonationRadioButtonGroup.js"),b=a("underscore"),v=a.n(b),C=(a("ismobilejs"),"C:\\apps\\gw\\src\\components\\Cart.js"),E=[{value:"0",label:"None"},{value:"10",label:"$10"},{value:"50",label:"$50"},{value:"200",label:"$200"},{value:"1000",label:"$1000"},{value:"more",label:"More"}],k=function(e){function t(e){o()(this,t);var a=m()(this,(t.__proto__||i()(t)).call(this,e));return a.state={order:null,orderExtra:null},a.setDonation=a.setDonation.bind(a),a.setDonationClick=a.setDonationClick.bind(a),a}return _()(t,e),s()(t,[{key:"setDonation",value:function(e){var t=e.value;t<0&&(t=0),this.setState({orderExtra:t});var a=[],r=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){r=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var i=0;i<r.length;i++)"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDIyOTU1NDg1NTk5NA=="==r[i]&&a.push(r[i]);a.length>0&&this.props.setDonationValue(t.replace(/\./g,""),a[0])}}},{key:"setDonationClick",value:function(e){this.setState({order:e,orderExtra:null});var t=[],a=[];if(0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)){a=this.props.checkout.lineItems.edges.map(function(e){return e.node.variant.id.toString()},this);for(var r=0;r<a.length;r++)"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDIyOTU1NDg1NTk5NA=="==a[r]&&t.push(a[r]);"more"!=e&&t.length>0&&this.props.setDonationValue(e.replace(/\./g,""),t[0])}}},{key:"render",value:function(){var e=this,t=[];0==v.a.isNull(this.props.checkout)&&0==v.a.isUndefined(this.props.checkout.lineItems)&&(t=this.props.checkout.lineItems.edges.reduce(function(t,a){return t.push(p.a.createElement(d.default,{removeLineItemInCart:e.props.removeLineItemInCart,updateLineItemInCart:e.props.updateLineItemInCart,key:a.node.id.toString(),line_item:a.node,__source:{fileName:C,lineNumber:88}})),t},[]));var a=!1,r=void 0;"more"==this.state.order?(a=!0,r=this.state.orderExtra):r=this.state.order,null==r&&"more"==this.state.order||null!=this.state.orderExtra&&"more"==this.state.order?r=parseFloat(this.state.orderExtra).toFixed(2):null==this.state.order?r=parseFloat(0).toFixed(2):"more"!=this.state.order&&(r=parseFloat(this.state.order).toFixed(2)),null!=r&&"NaN"!=r||(r=parseFloat(0).toFixed(2));var i=v.a.isNull(this.props.checkout),l=parseFloat(r,10).toFixed(2);return 0==v.a.isNull(this.props.checkout)&&(l=parseFloat(this.props.checkout.totalPrice,10)+parseFloat(r,10)),p.a.createElement("div",{__source:{fileName:C,lineNumber:124}},this.props.isCartOpen&&p.a.createElement(h.Layer,{__source:{fileName:C,lineNumber:126}},p.a.createElement("div",{style:{background:"white",display:"grid",marginLeft:"35vw",minHeight:"100vh"},__source:{fileName:C,lineNumber:127}},p.a.createElement("header",{className:"Cart__header",style:{position:"relative",width:"65vw",background:"white"},__source:{fileName:C,lineNumber:128}},p.a.createElement("h2",{__source:{fileName:C,lineNumber:129}},"Cart"),p.a.createElement("button",{onClick:this.props.handleCartClose,className:"Cart__close",style:{top:"15px !important"},__source:{fileName:C,lineNumber:130}},"\xd7")),p.a.createElement("ul",{className:"Cart__line-items",style:{position:"relative",width:"65vw",background:"white"},__source:{fileName:C,lineNumber:136}},t),p.a.createElement("div",{className:"Cart__donations",style:{position:"relative",width:"65vw",background:"white"},__source:{fileName:C,lineNumber:139}},p.a.createElement("p",{className:"donations donationsMobile",style:{position:"relative",width:"65vw",background:"white"},__source:{fileName:C,lineNumber:140}},"Donate Extra"),p.a.createElement("br",{__source:{fileName:C,lineNumber:140}}),p.a.createElement(f.default,{items:E,value:"true"==a?"moreSelected":this.state.order,type:"default",onClick:this.setDonationClick,__source:{fileName:C,lineNumber:141}})),1==a?p.a.createElement("div",{className:"Cart__donations__more",style:{position:"relative",width:"65vw",background:"white"},__source:{fileName:C,lineNumber:145}},p.a.createElement(h.Box,{padding:3,__source:{fileName:C,lineNumber:146}},p.a.createElement(h.TextField,{id:"donate-more",onChange:this.setDonation,placeholder:"Donate Extra",value:this.state.orderExtra,type:"number",__source:{fileName:C,lineNumber:147}}))):null,p.a.createElement("footer",{className:"Cart__footer",style:{position:"relative",width:"65vw",background:"white"},__source:{fileName:C,lineNumber:156}},p.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:C,lineNumber:157}},p.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:C,lineNumber:158}},"Subtotal"),p.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:C,lineNumber:159}},p.a.createElement("span",{className:"pricing",__source:{fileName:C,lineNumber:160}},"$ ",0==i?this.props.checkout.subtotalPrice:r))),p.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:C,lineNumber:163}},p.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:C,lineNumber:164}},"Extra Donation"),p.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:C,lineNumber:165}},p.a.createElement("span",{className:"pricing",__source:{fileName:C,lineNumber:166}},"$ ",r))),p.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:C,lineNumber:169}},p.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:C,lineNumber:170}},"Taxes"),p.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:C,lineNumber:171}},p.a.createElement("span",{className:"pricing",__source:{fileName:C,lineNumber:172}},"$ ",0==i?this.props.checkout.totalTax:0))),p.a.createElement("div",{className:"Cart-info clearfix",__source:{fileName:C,lineNumber:175}},p.a.createElement("div",{className:"Cart-info__total Cart-info__small",__source:{fileName:C,lineNumber:176}},"Total"),p.a.createElement("div",{className:"Cart-info__pricing",__source:{fileName:C,lineNumber:177}},p.a.createElement("span",{className:"pricing",__source:{fileName:C,lineNumber:178}},"$ ",0==i?l.toFixed(2):r," "))),p.a.createElement(h.Button,{color:"black",text:"Checkout",onClick:function(){window.open(e.props.checkout.webUrl)},__source:{fileName:C,lineNumber:181}})))))}}]),t}(N.Component);t.default=k}};
//# sourceMappingURL=main.c03fe94bf79df5aba780.hot-update.js.map