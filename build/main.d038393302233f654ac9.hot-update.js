exports.id="main",exports.modules={"./src/components/Product/VariantSelector.js":function(e,t,n){"use strict";n.r(t);var r=n("babel-runtime/core-js/object/get-prototype-of"),a=n.n(r),o=n("babel-runtime/helpers/classCallCheck"),i=n.n(o),s=n("babel-runtime/helpers/createClass"),l=n.n(s),u=n("babel-runtime/helpers/possibleConstructorReturn"),c=n.n(u),p=n("babel-runtime/helpers/inherits"),m=n.n(p),d=n("react"),h=n.n(d),b=n("./src/components/RadioButtonGroup/RadioButtonGroup.js"),f=n("gestalt"),_="C:\\apps\\gw\\src\\components\\Product\\VariantSelector.js",v=function(e){function t(e){i()(this,t);var n=c()(this,(t.__proto__||a()(t)).call(this,e)),r=[];n.props.option.values.map(function(e,t){return r[t]={value:e.toString(),label:e.toString()}});return n.state={order:null,variantValues:[]},n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=[],t=this.props.option.values.map(function(t,n){return e[n]={value:t.toString(),label:t.toString()}});this.setState({variantValues:t}),this.props.handleOptionChange(null,this.props.option.name)}},{key:"render",value:function(){var e=this,t=this.state.variantValues;return h.a.createElement("div",{__source:{fileName:_,lineNumber:38}},h.a.createElement("span",{className:"Variant_Name",style:{color:"black",textAlign:"center",opacity:"1"},__source:{fileName:_,lineNumber:39}},h.a.createElement(f.Heading,{color:"darkGray",size:"xs",__source:{fileName:_,lineNumber:39}},this.props.option.name)),h.a.createElement("div",{style:{color:"black",textAlign:"center",opacity:"1",mixBlendMode:"difference",transform:"translateY(-50px)"},__source:{fileName:_,lineNumber:40}},h.a.createElement(f.Heading,{color:"lightGray",size:"xs",__source:{fileName:_,lineNumber:40}},this.props.option.name)),h.a.createElement(b.default,{items:t,value:this.state.order,onClick:function(t){e.setState({order:t}),e.props.handleOptionChange(t,e.props.option.name)},type:"default",__source:{fileName:_,lineNumber:41}}))}}]),t}(d.Component);t.default=v}};
//# sourceMappingURL=main.d038393302233f654ac9.hot-update.js.map