exports.id="main",exports.modules={"./src/styles/app.css":function(n,t,o){(n.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.i,"/* INITIALIZERS + DEFAULTS\n * ============================== */\n\n /*WIDE SCREEN SUPPORT*/\n @media screen and (min-width: 769px) {\n     #App {\n         background-size: cover;\n         background-repeat: no-repeat;\n         width: 100%;\n         height: 0;\n         padding-top: 400%; /* (img-height / img-width * container-width) */\n                     /* (4000 / 100 * 100) */\n     }\n }\n\n /*MOBILE SUPPORT*/\n @media screen and (max-width: 768px) {\n     #App {\n         background-size: contain;\n         background-repeat: no-repeat;\n         width: 100%;\n         height: 0;\n         padding-top: 400%; /* (img-height / img-width * container-width) */\n                     /* (853 / 1280 * 100) */\n     }\n }\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'LiberationSansRegular';\n    src:url('/fonts/Liberation-Sans.ttf.woff') format('woff'),\n        url('/fonts/Liberation-Sans.ttf.svg#Liberation-Sans') format('svg'),\n        url('/fonts/Liberation-Sans.ttf.eot'),\n        url('/fonts/Liberation-Sans.ttf.eot?#iefix') format('embedded-opentype');\n        font-weight: normal;\n        font-style: normal;\n}\n\nbody {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  height: 100vh;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\nhtml {\n  font-size: 85%;\n}\n\nbody ::-webkit-scrollbar {\n    -webkit-appearance: none;\n    display: none;\n    width: 2px !important;\n    height: 10px;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nh1 {\n  font-weight: 300;\n  margin: 0 0 15px;\n  font-size: 3rem;\n}\n\nh5 {\n  font-weight: normal !important;\n  text-decoration: none !important;\n}\nh2 {\n  font-weight: 300;\n  margin: 0;\n  font-size: 2rem;\n}\n\na:active, a:focus, a {\n  outline: 0;\n  border: none;\n  -moz-outline-style: none;\n  text-decoration: none;\n}\n\n:focus {\n    outline: -webkit-focus-ring-color auto 0;\n}\n\n[type=reset], [type=submit], button, html [type=button] {\n    -webkit-appearance: button;\n    opacity: 1;\n}\n\n._si {\n  font-family: 'LiberationSansRegular';\n  font-weight: normal;\n  font-style: normal;\n  font-weight: 20;\n}\n._r7 {\n    padding: 16px 14px;\n}\n\n._3l > div {\n  font-size: 36px;\n  padding: 0 50px;\n}\n\n._6s {\n  position: -webkit-sticky; /* Safari */\nposition: sticky;\nbottom: 15px;\n}\n\n.invis {\n  opacity: 0\n}\n\n.vis {\n  opacity: 1;\n}\n\n.opacity_animation {\n  -webkit-transition: opacity 0.3s ease-in-out;\n  -moz-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out;\n}\n\n\n.tooltip_container > div{\n  top: auto;\n  left: auto;\n  right: auto;\n  bottom: auto;\n}\n\n/* BASE APP\n * ============================== */\n.react-drawer-overlay {\n  z-index: 3;\n}\n\n.react-drawer-drawer {\n  z-index: 4;\n  background: white !important;\n  overflow-y: scroll;\n}\n@media all and (min-width: 1401px) {\n .App {\n     overflow-x: hidden;\n     overflow-y: hidden;\n     position: absolute;\n     left: 0;\n     right: 0;\n     top: 0;\n     bottom: 0;\n     background-size: cover !important;\n     transition: background-image 0.4s ease-in-out;\n     height: 200vh;\n }\n}\n\n @media all and (max-width: 1400px) {\n   .App {\n       overflow-x: hidden;\n       overflow-y: hidden;\n       background-size: cover !important;\n       position: absolute;\n       left: 0;\n       right: 0;\n       top: 0;\n       bottom: 0;\n       height: 200vh;\n }\n}\n\n.App__header {\n  background-color: #222;\n  background-image: url('https://unsplash.it/1000/300?image=823');\n  background-size: cover;\n  color: white;\n  padding: 10px 10px;\n}\n\n.App__nav{\n  width: 100%;\n  list-style: none;\n}\n\n.App__customer-actions {\n  float: left;\n  padding: 10px;\n}\n\n.App__title {\n  padding: 80px 20px;\n  text-align: center;\n}\n\n.Product-wrapper {\n  max-width: 900px;\n  margin: 40px auto 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.App__view-cart-wrapper {\n  float: right;\n}\n\n.App__view-cart {\n  font-size: 15px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: white;\n}\n\n.default.text {\n  color: black !important;\n}\n\n.popup-overlay {\n  border-radius: 5px !important;\n}\n\n#header > div {\n    background-color: #d3d9e054 !important;\n    background-color: none;\n}\n\n.button {\n  background-color: #27b3ff !important;\n  color: white !important;\n  border: none;\n  font-size: 1.2rem;\n  padding: 10px 17px;\n  cursor: pointer;\n}\n\n.button:hover,\n.button:focus {\n  background-color: #222222;\n}\n\n.button:disabled {\n  background: #bfbfbf;\n  cursor: not-allowed;\n}\n\n.login {\n  font-size: 1.2rem;\n  color: #b8b8b8;\n  cursor: pointer;\n}\n\n.login:hover {\n  color: white;\n}\n\n.Flash__message-wrapper {\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  align-items: flex-end;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 227;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.Flash__message {\n  background: rgba(0,0,0,0.88);\n  border-radius: 3px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  color: #ffffff;\n  cursor: default;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: none;\n  pointer-events: auto;\n  position: relative;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 400;\n  padding: 10px 20px;\n  margin: 0;\n}\n\n.Flash__message--open {\n  display: flex;\n}\n\n/* CART\n * ============================== */\n.Cart {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 335px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid #e5e5e5;\n  transform: translateX(100%);\n  transition: transform 0.15s ease-in-out;\n}\n\n.Cart--open {\n  transform: translateX(0);\n  background-color: #d3d9e0df !important;\n  -webkit-transform: translate3d(0,0,0) !important;\n}\n\n.Cart__close *{\n  position: absolute;\n  right: 9px;\n  top: 8px;\n  font-size: 35px;\n  color: #999;\n  border: none;\n  background: transparent;\n  transition: transform 100ms ease;\n  cursor: pointer;\n}\n\n.Cart__header {\n  padding: 20px;\n  border-bottom: 1px solid #e5e5e5;\n  flex: 0 0 auto;\n  display: inline-block;\n}\n\n.Cart__line-items {\n  margin: 0;\n  padding: 40px 20px;\n  max-height: 100%;\n  position: sticky;\nwidth: 100vw;\noverflow-y: scroll;\nbottom: 75px;\n}\n\n.Cart__footer {\n  padding: 20px;\n  border-top: 1px solid #e5e5e5;\n  flex: 0 0 auto;\n}\n\n.Cart__checkout {\n  margin-top: 20px;\n  display: block;\n  width: 100%;\n}\n\n.Cart-info {\n  padding: 15px 20px 10px;\n}\n\n.Cart-info__total {\n  float: left;\n  text-transform: uppercase;\n}\n\n.Cart-info__small {\n  font-size: 11px;\n}\n\n.Cart-info__pricing {\n  float: right;\n}\n\n.pricing {\n  margin-left: 5px;\n  font-size: 16px;\n  color: black;\n}\n\n/* LINE ITEMS\n * ============================== */\n.Line-item {\n  margin-bottom: 20px;\n  overflow: auto;\n  backface-visibility: visible;\n  min-height: 130px;\n  position: relative;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n  list-stylE: none;\n}\n\n.Line-item__img {\n  width: 130px;\n  height: 130px;\n  border-radius: 3px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-color: #e5e5e5;\n  position: absolute;\n}\n\n.Line-item__content {\n  width: 100%;\n  padding-left: 135px;\n}\n\n.Line-item__content-row {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  position: relative;\n}\n\n.Line-item__variant-title {\n  float: right;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  color: #000;\n}\n\n.Line-item__title {\n  color: #000;\n  font-size: 22px;\n  font-weight: 400;\n}\n\n.Line-item__price {\n  line-height: 28px;\n  float: right;\n  font-size: 22px;\n  margin-right: 40px;\n}\n\n.Line-item__quantity-container {\n  border: 1px solid #767676;\n  float: left;\n  border-radius: 3px;\n}\n\n.Line-item__quantity-update {\n  color: #767676;\n  display: block;\n  float: left;\n  height: 21px;\n  line-height: 16px;\n  font-family: monospace;\n  width: 25px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  box-shadow: none;\n  cursor: pointer;\n  font-size: 18px;\n  text-align: center;\n}\n\n.Line-item__quantity-update-form {\n  display: inline;\n}\n\n.Line-item__quantity {\n  color: black;\n  width: 38px;\n  height: 21px;\n  line-height: 23px;\n  font-size: 15px;\n  border: none;\n  text-align: center;\n  -moz-appearance: textfield;\n  background: transparent;\n  border-left: 1px solid #767676;\n  border-right: 1px solid #767676;\n  display: block;\n  float: left;\n  padding: 0;\n  border-radius: 0;\n}\n\n.Line-item__remove {\n  position: absolute;\n  right: 0;\n  top: 0;\n  border: 0;\n  background: 0;\n  font-size: 38px;\n  top: -4px;\n  opacity: 0.5;\n  transform: translateY(-4px);\n}\n\n.Line-item__remove:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.appcontainer {\n  height: 100VH;\n}\n\n/* PRODUCTS\n * ============================== */\n.Product {\n  flex: 0 1 31%;\n}\n\n.Product__title {\n  font-size: 1.3rem;\n  margin-top: 1rem;\n  margin-bottom: 0.4rem;\n  opacity: 0.7;\n}\n\n.Product__price {\n  display: block;\n  font-size: 1.1rem;\n  opacity: 0.5;\n  margin-bottom: 0.4rem;\n}\n\n.Product__option {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.Product__quantity {\n  display: block;\n  width: 15%;\n  margin-bottom: 10px;\n}\n\n.productPriceOptions {\n  color: black;\n  text-align: center;\n  opacity: 1;\n  font-size: 20px;\n  background: rgba(255,255,255,0.7) !important;\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: 1px solid black;\n  width: calc(100% - 20px);\n  margin-left: 10px;\n}\n\n@media all and (min-width: 1041px) {\n.mobileOptions {\n    display: none !important;\n}\n.socialOptions {\n    position: fixed;\n    right: 5px;\n    bottom: -121px;\n}\n.productPriceOptions {\nmargin-top: -25px;\n}\n.variantSelectors > div {\n  display: inline !important;\n  margin-top: -24px;\n}\n#quantity {\n  width: calc(33vw - 156px);\n  margin-left: 70px;\n}\n}\n\n@media all and (max-width: 1040px) {\n.desktopOptions {\n    display: none !important;\n}\n.variantSelectors > div {\n  display: inline !important;\n}\n.drawer {\n  display: none !important;\n}\n\n.socialOptions {\n    position: fixed;\n    right: 5px;\n    bottom: -121px;\n}\n}\n\n#quantity, .product_quantity {\n  background: rgba(255,255,255,0.7) !important;\n  padding: 10px;\n  border-radius: 4px;\n  margin: 10px 5px;\n  font-size: 24px;\n  mix-blend-mode: normal !important;\n}\n\n.product_quantity::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: red;\n    opacity: 1; /* Firefox */\n}\n\n.product_quantity:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: red;\n}\n\n.product_quantity::-ms-input-placeholder { /* Microsoft Edge */\n    color: red;\n}\n\n.product_quantity > h5{\n  color: #121212;\n}\n\n.Variant_Name > h5 {\n   background: rgba(255,255,255,0.7) !important;\n   padding: 5px;\n   border-radius: 4px;\n  margin: 10px 0;\n   border: 1px solid black;\n   mix-blend-mode: luminosity !important;\n}\n\n.donations {\n    font-weight: 500;\n    margin-bottom: 10px;\n    font-size: 15px;\n    color: #efefef;\n}\n\n.donationsMobile {\n  color: black !important;\n  text-align: center;\n}\n\n.drawer-mask {\n  display: none !important;\n}\n\n/* CUSTOMER AUTH\n * ============================== */\n.CustomerAuth {\n  background-color: #d3d9e0df !important;\n  display: none;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  padding: 0 0 65px;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  transition: opacity 150ms;\n  opacity: 1;\n  visibility: visible;\n  z-index: 1000;\n  position: fixed;\n}\n\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\n    background-color: rgb(255, 255, 255) !important;\n    background-image: none !important;\n    color: rgb(0, 0, 0) !important;\n}\n\n[type=reset], [type=submit], button, html [type=button] {\n    -webkit-appearance: button;\n    opacity: 1 !important;\n}\n\n.cartButton {\n  padding-right: 10px;\n}\n\n.CustomerAuth--open {\n  display: block;\n}\n\n.CustomerAuth__close {\n  position: absolute;\n  right: 9px;\n  top: 8px;\n  font-size: 35px;\n  color: #999;\n  border: none;\n  background: transparent;\n  transition: transform 100ms ease;\n  cursor: pointer;\n}\n\n.CustomerAuth__body {\n  padding: 130px 30px;\n  width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  position: relative;\n}\n\n.CustomerAuth__heading {\n  font-size: 24px;\n  font-weight: 500;\n  padding-bottom: 15px;\n}\n\n.CustomerAuth__credential {\n  display: block;\n  position: relative;\n  margin-bottom: 15px;\n  border-radius: 3px;\n}\n\n.CustomerAuth__input {\n  height: 60px;\n  padding: 24px 10px 20px;\n  border: 0px;\n  font-size: 18px;\n  background: #fff;\n  width: 100%;\n}\n\n.CustomerAuth__submit {\n  float: right;\n}\n\n.error {\n  display: block;\n  font-size: 15px;\n  padding: 10px;\n  position: relative;\n  min-height: 2.64286em;\n  background: #fbefee;\n  color: #c23628;\n}\n\n#root > div > div:nth-child(1) > div:nth-child(1) > div > div > div {\n  z-index: 7;\n}\n\n#root > div > div > div > div:nth-child(1) > div:nth-child(1) {\n  overflow: hidden !important;\n}\n\n#root {\n  transform: none !important;\n}\n\n.App > div {\n  width: 100vw !important;\n}\n\n.App > div:nth-child(2) > div {\n    width: 100vw !important;\n    align-self: flex-end;\n}\n\n.react-autosuggest__container {\n  position: relative;\n}\n\n.react-autosuggest__input {\n  width: 100%;\n  height: 45px;\n  padding: 10px 20px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  -webkit-appearance: none;\n}\n\n.react-autosuggest__input--focused {\n  outline: none;\n}\n\n.react-autosuggest__input::-ms-clear {\n  display: none;\n}\n\n.react-autosuggest__input--open {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.react-autosuggest__suggestions-container {\n  display: none;\n}\n\n.react-autosuggest__suggestions-container--open {\n  display: flex;\n  position: absolute;\n  top: 51px;\n  width: 100%;\n  border: 1px solid #aaa;\n  background-color: #fff;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  z-index: 2;\n}\n\n.react-autosuggest__suggestions-list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.react-autosuggest__suggestion {\n  cursor: pointer;\n  padding: 10px 20px;\n}\n\n.react-autosuggest__suggestion--highlighted {\n  background-color: #ddd;\n}\n\n.react-autosuggest__section-container {\n  border-top: 1px dashed #ccc;\n}\n\n.react-autosuggest__section-container--first {\n  border-top: 0;\n}\n\n.react-autosuggest__section-title {\n  padding: 10px 0 0 10px;\n  font-size: 12px;\n  color: #777;\n}\n\n.suggestion-content {\n  display: flex;\n  align-items: center;\n  background-repeat: no-repeat;\n}\n\n.nav-up {\n    top: -69px;\n}\n\n.actions {\n  background: transparent !important;\n  max-height: 250px;\n}\n\n.modal-route-backdrop {\n  background: transparent !important;\n}\n\n#spinner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  height: 200vh;\n  background-repeat: no-repeat;\n  background-size: cover !important;\n  transition: background-image 0.4s ease-in-out;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.custom-modal {\n  width: 400px;\n  top: 100px;\n  overflow-x: hidden;\n}\n@media all and (max-width: 767px) {\n.rodal-dialog {\n  border-radius: 8px;\n}\n\n.rodal-dialog > div {\n padding: 25px 15px 15px 15px;\n background: rgba(255,255,255,0.4);\n  width: 100% !important;\n  margin-top: 0 !important;\n  min-height: 100vh;\n}\n\n}\n\n@media all and (min-width: 768px) {\n.rodal-dialog {\n  border-radius: 0;\n}\n\n.rodal-dialog > div {\n padding: 25px 15px 15px 15px;\n background: rgba(255,255,255,0.4);\n  margin-top: 0 !important;\n}\n\n}\n#header > div > div:nth-child(5) {\n  transform: translateY(4px);\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.Cart--open {\n  overflow-y: scroll;\n}\n\n.addToCartButton {\n  height: 375px;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n    display: flex;\n}\n\nmain {\n    flex-grow: 1;\n}\n\nfooter {\n  flex-shrink: 1;\n}\n\n.drawer-handle {\n  display: none !important;\n}\n\n.rodal-mask {\n  background: rgba(0,0,0, 0.39) !important;\n}\n\n.alice-carousel {\n  padding: 0 !important;\n  width: 100vw !important;\n\n  padding: 3px;\n  padding-bottom: 0px;\n}\n\n.alice-carousel__wrapper {\n  border: 0;\n}\n\n.slick-slide {\n  margin-bottom: 20px;\n  padding: 3px;\n  padding-bottom: 0;\n  padding-right: 3;\n  margin-right: 3;\n\n  box-shadow: 0px 3px 5px #333c4e;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n\n.slick-slide:hover {\n  filter: brightness(150%);\n}\n\n.alice-carousel__play-btn {\n  display: none !important;\n}\n\n.ui.selection.active.dropdown {\n    border-color: #d3d9e0 !important;\n}\n\n.button {\n  background-color: transparent !important;\n}\n\n.ui.labeled.icon.button>.icon, .ui.labeled.icon.buttons>.button>.icon {\n  background: transparent !important;\n}\n\n.ui.multiple.dropdown>.text {\n    position: static;\n    padding: 0;\n    max-width: 100%;\n    margin: .75238095em 0 .45238095em .64285714em;\n    line-height: 1.21428571em;\n}\n\n._8c {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n#header > div > div._0._3i._45._4x._77 > div > div {\n  background-color: transparent !important;\n}\n\n#header > div > div._0._3i._45._4x._77 > div > div {\n  width: 20%;\n}\n\n._0 ._3r ._2u ._7c {\n  display: block;\n  width: 70vw;\n  max-width: 70vw;\n}\n\n._0 ._3r ._2u ._2 ._34 ._6x ._6y ._l {\n  display: inline !important;\n}\n\n._5o {\n    margin-bottom: 10px;\n}\n\n.drawer-content {\n  background: transparent !important;\n}\n\n.scroll-down {\n  opacity: 1;\n  -webkit-transition: all .5s ease-in 3s;\n  transition: all .5s ease-in 3s;\n}\n\n.scroll-down {\n  position: absolute;\n  bottom: 30px;\n  right: -62px;\n  margin-left: -16px;\n  display: block;\n  width: 32px;\n  height: 32px;\n  border: 2px solid #FFF;\n  background-size: 14px auto;\n  border-radius: 50%;\n  z-index: 1001;\n  -webkit-animation: bounce 2s infinite 2s;\n  animation: bounce 2s infinite 2s;\n  -webkit-transition: all .2s ease-in;\n  transition: all .2s ease-in;\n}\n\n.scroll-down:before {\n    position: absolute;\n    top: calc(50% - 8px);\n    left: calc(50% - 6px);\n    transform: rotate(-45deg);\n    display: block;\n    width: 12px;\n    height: 12px;\n    content: \"\";\n    border: 2px solid white;\n    border-width: 0px 0 2px 2px;\n}\n\n@keyframes bounce {\n  0%,\n  100%,\n  20%,\n  50%,\n  80% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-10px);\n    -ms-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n  60% {\n    -webkit-transform: translateY(-5px);\n    -ms-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n}\n\n\n  .ReactModal__Content {\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow-y: scroll;\n  }\n\n@media all and (max-width: 768px) {\n  .ReactModal__Content {\n    width: 100vw !important;\n  }\n}\n\n  .ReactModal__Overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.15);\n  }\n\n.ReactModal__Body--open {\n    overflow: hidden;\n}\n\n.copyright-button {\n  color: white !important;\n  background: transparent !important;\n  border: none !important;\n  font-size: 34px;\n  font-weight: bold;\n}\n\n#App + div {\n  position: fixed !important;\n  bottom: 0 !important;\n  right: 0 !important;\n  background: #d3d9e054 !important;\n}\n\n\n.alice-carousel__prev-btn, .alice-carousel__next-btn {\n display: none;\n}\n\n.arrow-back {\n\n    position: absolute;\n    left: 1%;\n    right: 0;\n    top: 32.5%;\n    width: 0px;\n}\n\n.arrow-forward {\n    position: absolute;\n    right: 1%;\n    top: 32.5%;\n}\n/* Solutions */\n.slick-list,\n.slick-track,\n.slick-slide {\n   height: 100%;\n}\n\n.slide-slide {\n  width: 25vw;\n  height: 400px;\n}\n\n\n.slick-next {\n  right: 25px !important;\n}\n\n.slick-prev {\n  left: 25px !important;\n  z-index: 8 !important;\n}\n\n.blue {\n  position: absolute;\nleft: 0;\ntop: 73px;\nheight: 400px;\nwidth: 100vw;\n}\n\n.react-router-modal__modal, .react-router-modal__backdrop {\n  background: transparent !important;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.product_page_title {\n  width: 100vw;\n  height: 56px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: block;\n  background: rgba(255,255,255,0.55);\n  color: black;\n  mix-blend-mode: luminosity !important;\n}\n",""])}};
//# sourceMappingURL=main.4b30b456992b1a0c4314.hot-update.js.map