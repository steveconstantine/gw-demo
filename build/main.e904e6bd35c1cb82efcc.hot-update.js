exports.id="main",exports.modules={"./src/components/Product/VariantSelector.js":function(e,t,n){"use strict";n.r(t);var r=n("babel-runtime/core-js/object/get-prototype-of"),a=n.n(r),o=n("babel-runtime/helpers/classCallCheck"),s=n.n(o),i=n("babel-runtime/helpers/createClass"),l=n.n(i),u=n("babel-runtime/helpers/possibleConstructorReturn"),p=n.n(u),c=n("babel-runtime/helpers/inherits"),m=n.n(c),h=n("react"),b=n.n(h),d=n("./src/components/RadioButtonGroup/RadioButtonGroup.js"),f=n("gestalt"),g="C:\\apps\\gw\\src\\components\\Product\\VariantSelector.js",v=function(e){function t(e){s()(this,t);var n=p()(this,(t.__proto__||a()(t)).call(this,e)),r=[];n.props.option.values.map(function(e,t){return r[t]={value:e.toString(),label:e.toString()}});return n.state={order:null,variantValues:[]},n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=[],t=this.props.option.values.map(function(t,n){return e[n]={value:t.toString(),label:t.toString()}});this.setState({variantValues:t}),this.props.handleOptionChange(null,this.props.option.name)}},{key:"render",value:function(){var e=this,t=this.state.variantValues;return b.a.createElement("div",{__source:{fileName:g,lineNumber:38}},b.a.createElement("span",{className:"Variant_Name",style:{padding:"20px",color:"black",textAlign:"center",opacity:"1",background:"rgba(255,255,255,0.7)"},__source:{fileName:g,lineNumber:39}},b.a.createElement(f.Heading,{color:"lightGray",size:"xs",__source:{fileName:g,lineNumber:39}},this.props.option.name)),b.a.createElement(d.default,{items:t,value:this.state.order,onClick:function(t){e.setState({order:t}),e.props.handleOptionChange(t,e.props.option.name)},type:"default",__source:{fileName:g,lineNumber:40}}))}}]),t}(h.Component);t.default=v}};
//# sourceMappingURL=main.e904e6bd35c1cb82efcc.hot-update.js.map