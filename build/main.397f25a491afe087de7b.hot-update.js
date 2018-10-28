exports.id="main",exports.modules={"./src/checkout.js":function(e,t,n){"use strict";n.r(t),n.d(t,"createCheckout",function(){return f}),n.d(t,"checkoutLineItemsAdd",function(){return L}),n.d(t,"checkoutLineItemsUpdate",function(){return $}),n.d(t,"checkoutLineItemsRemove",function(){return v}),n.d(t,"checkoutCustomerAssociate",function(){return A}),n.d(t,"addVariantToCart",function(){return U}),n.d(t,"addDonationToCart",function(){return b}),n.d(t,"removeDonationInCart",function(){return D}),n.d(t,"updateLineItemInCart",function(){return F}),n.d(t,"removeLineItemInCart",function(){return T}),n.d(t,"associateCustomerCheckout",function(){return E});var c=n("babel-runtime/core-js/json/stringify"),o=n.n(c),u=n("babel-runtime/helpers/taggedTemplateLiteral"),s=n.n(u),i=n("graphql-tag"),a=n.n(i),r=n("underscore"),h=n.n(r),k=s()(["\n  fragment CheckoutFragment on Checkout {\n    id\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    lineItems (first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n  }\n"],["\n  fragment CheckoutFragment on Checkout {\n    id\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    lineItems (first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n  }\n"]),d=s()(["\n  mutation checkoutCreate ($input: CheckoutCreateInput!){\n    checkoutCreate(input: $input) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"],["\n  mutation checkoutCreate ($input: CheckoutCreateInput!){\n    checkoutCreate(input: $input) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]),m=s()(["\n  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"],["\n  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]),I=s()(["\n  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"],["\n  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]),l=s()(["\n  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"],["\n  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]),p=s()(["\n  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {\n    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {\n      userErrors {\n        field\n        message\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"],["\n  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {\n    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {\n      userErrors {\n        field\n        message\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]),C=n("web-storage")().localStorage,g=a()(k),f=a()(d,g),L=a()(m,g),$=a()(I,g),v=a()(l,g),A=a()(p,g);function U(e,t){var n=this;this.props.checkoutLineItemsAdd({variables:{checkoutId:this.state.checkout.id,lineItems:[{variantId:e,quantity:parseInt(t,10)}]}}).then(function(t){h.a.isNull(e)||h.a.isUndefined(e)||(C.set("checkout",o()(t.data.checkoutLineItemsAdd.checkout)),n.setState({checkout:t.data.checkoutLineItemsAdd.checkout}))}),this.handleCartOpen()}function b(e,t,n){var c=this;this.props.checkoutLineItemsAdd({variables:{checkoutId:this.state.checkout.id,lineItems:[{variantId:e,quantity:parseInt(100*n,10)}]}}).then(function(e){null!=t&&(c.removeDonationInCart(t),C.set("checkout",o()(e.data.checkoutLineItemsAdd.checkout)),c.setState({checkout:e.data.checkoutLineItemsAdd.checkout}))})}function D(e){var t=this;console.log("remove donation initiated"),console.log(e),this.props.checkoutLineItemsUpdate({variables:{checkoutId:this.state.checkout.id,lineItems:[{id:e,quantity:0}]}}).then(function(e){C.set("checkout",o()(e.data.checkoutLineItemsUpdate.checkout)),t.setState({checkout:e.data.checkoutLineItemsUpdate.checkout})})}function F(e,t){var n=this;this.props.checkoutLineItemsUpdate({variables:{checkoutId:this.state.checkout.id,lineItems:[{id:e,quantity:parseInt(t,10)}]}}).then(function(e){C.set("checkout",o()(e.data.checkoutLineItemsUpdate.checkout)),n.setState({checkout:e.data.checkoutLineItemsUpdate.checkout})})}function T(e){var t=this;this.props.checkoutLineItemsRemove({variables:{checkoutId:this.state.checkout.id,lineItemIds:[e]}}).then(function(e){C.set("checkout",o()(e.data.checkoutLineItemsRemove.checkout)),t.setState({checkout:e.data.checkoutLineItemsRemove.checkout})})}function E(e){var t=this;this.props.checkoutCustomerAssociate({variables:{checkoutId:this.state.checkout.id,customerAccessToken:e}}).then(function(e){C.set("checkout",o()(e.data.checkoutCustomerAssociate.checkout)),t.setState({checkout:e.data.checkoutCustomerAssociate.checkout,isCustomerAuthOpen:!1,loggedIn:!0})})}}};
//# sourceMappingURL=main.397f25a491afe087de7b.hot-update.js.map