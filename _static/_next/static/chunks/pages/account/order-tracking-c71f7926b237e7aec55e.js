(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4862],{32230:function(e,r,n){"use strict";var s=n(85893),t=n(41664);n(67294);r.Z=function(e){var r=e.breacrumb,n=e.layout,c=e.campaign_name;return(0,s.jsx)("div",{className:"ps-breadcrumb",children:(0,s.jsx)("div",{className:"fullwidth"===n?"ps-container":"container",children:(0,s.jsxs)("ul",{className:"breadcrumb",children:[r.map((function(e,r){return e.url?(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:e.url,children:(0,s.jsx)("a",{children:e.text})})},e.text):(0,s.jsx)("li",{children:e.text},r)})),c&&(0,s.jsx)("li",{children:(0,s.jsx)("strong",{children:c})})]})})})}},45973:function(e,r,n){"use strict";var s=n(85893),t=n(9008),c=(n(67294),n(53010)),a=n(33875),i=n(84654),o=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(a.Z,{})]}),l=(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.Z,{})});r.Z=function(e){var r,n=e.header,c=void 0===n?o:n,a=e.footer,i=void 0===a?l:a,d=e.children,u=e.title,h=void 0===u?"Page":u;return r=""!==h?"E-needz | "+h:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.default,{children:(0,s.jsx)("title",{children:r})}),c,d,i]})}},9941:function(e,r,n){"use strict";var s=n(85893),t=n(64121),c=n(36808),a=n(41664),i=n(11163),o=(n(67294),n(6645)),l=n(14494),d=n(39249),u=n(20301);r.Z=function(e){var r,n,h,m,x,p=e.data,v=(0,l.I0)(),j=(0,o.Z)(["auth"]),f=(0,t.Z)(j,2),g=f[0],_=f[1],N=(0,i.useRouter)();return(0,s.jsxs)("aside",{className:"ps-widget--account-dashboard",children:[(0,s.jsxs)("div",{className:"ps-widget__header",children:[(0,s.jsx)("div",{className:"profile-image",children:null!==g&&void 0!==g&&g.auth?(0,s.jsx)("img",{src:null===(r=g.auth)||void 0===r?void 0:r.image,alt:null===(n=g.auth)||void 0===n?void 0:n.name}):(0,s.jsx)("img",{src:"/static/img/users/3.jpg",alt:null===(h=g.auth)||void 0===h?void 0:h.name})}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("figcaption",{children:null===(m=g.auth)||void 0===m?void 0:m.name}),(0,s.jsx)("p",{children:null===(x=g.auth)||void 0===x?void 0:x.mobile})]})]}),(0,s.jsx)("div",{className:"ps-widget__content",children:(0,s.jsxs)("ul",{children:[p.map((function(e){return(0,s.jsx)("li",{className:e.active?"active":"",children:(0,s.jsx)(a.default,{href:e.url,children:(0,s.jsxs)("a",{children:[(0,s.jsx)("i",{className:e.icon}),e.text]})})},e.text)})),(0,s.jsx)("li",{className:"/account/review"==N.pathname?"active":"",children:(0,s.jsx)(a.default,{href:"review",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("i",{className:"icon-book"}),"Review"]})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"#",children:(0,s.jsxs)("a",{onClick:function(e){e.preventDefault(),_("auth"),v((0,u.Gd)()),(0,c.remove)("auth"),d.Am.success("You successfully logged out!"),localStorage.removeItem("paymentInfo"),localStorage.removeItem("paymentGateway"),localStorage.removeItem("p_info"),N.push("/")},children:[(0,s.jsx)("i",{className:"icon-exit"}),"Logout"]})})})]})})]})}},84448:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var s=n(85893),t=n(11163),c=n(67294),a=n(14494),i=n(32230),o=n(45973),l=n(9941),d=n(809),u=n.n(d),h=n(92447),m=n(64121),x=n(6645),p=n(39249),v=function(){var e=(0,c.useState)(""),r=e[0],n=e[1],i=(0,x.Z)(["auth"]),o=((0,m.Z)(i,1)[0],(0,a.v9)((function(e){return e.auth})).isLoggedIn),l=(0,t.useRouter)(),d=(0,c.useState)(!1),v=d[0],j=d[1],f=function(){var e=(0,h.Z)(u().mark((function e(n){var s,t,c,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),j(!0),(s=new FormData).append("order_no",r),t={method:"POST",body:s,redirect:"follow"},e.next=7,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/customer_dashboard","/order_tracking"),t);case 7:return c=e.sent,e.next=10,c.json();case 10:200===(a=e.sent).response_status?(o?l.push("/account/invoice-details/".concat(a.data.order_id)):l.push("/account/order-tracking/".concat(r)),j(!1)):204===a.response_status?(p.Am.error(a.message),j(!1)):(console.log("order_tracking error",a),j(!1));case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"ps-order-tracking mb-5",children:[(0,s.jsxs)("div",{className:"ps-section__header flex-column justify-content-center",children:[(0,s.jsx)("h3",{className:"mb-5",children:"Order Tracking"}),(0,s.jsxs)("p",{children:["To track your order please enter your ",(0,s.jsx)("strong",{children:"Order No"}),' in the box below and press the "Track Your Order" button. This was given to you on your receipt and in the confirmation email you should have received.']})]}),(0,s.jsx)("div",{className:"ps-section__content",children:(0,s.jsxs)("form",{className:"ps-form--order-tracking",onSubmit:f,children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"order_no",children:"Order No"}),(0,s.jsx)("input",{id:"order_no",name:"order_no",className:"form-control",type:"text",placeholder:"Order No",value:r,onChange:function(e){return n(e.target.value)}})]}),(0,s.jsx)("div",{className:"form-group",children:(0,s.jsx)("button",{className:"ps-btn ps-btn--fullwidth",type:"submit",disabled:v,children:"Track Your Order"})})]})})]})},j=n(53010),f=function(){var e=(0,a.v9)((function(e){return e})),r=((0,t.useRouter)(),(0,c.useState)(!1)),n=r[0],d=r[1];(0,c.useEffect)((function(){e.auth.isLoggedIn&&d(!0)}),[e]);return(0,s.jsx)(o.Z,{footer:(0,s.jsx)(j.Z,{}),title:"Order Tracking",children:(0,s.jsxs)("div",{className:"ps-page--simple",children:[(0,s.jsx)(i.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Order Tracking"}]}),(0,s.jsx)("section",{className:"ps-my-account ps-page--account",children:(0,s.jsx)("div",{className:"ps-container",children:(0,s.jsxs)("div",{className:"row",children:[n&&(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsx)("div",{className:"ps-page__left",children:(0,s.jsx)(l.Z,{data:[{text:"Account Information",url:"/account/user-information",icon:"icon-user"},{text:"Invoices",url:"/account/invoices",icon:"icon-papers"},{text:"Track Order",url:"/account/order-tracking",icon:"icon-papers",active:!0},{text:"Payment History",url:"/account/payment-history",icon:"icon-cog"},{text:"Address",url:"/account/address",icon:"icon-map-marker"},{text:"Change Password",url:"/account/change-password",icon:"icon-lock"}],active:!0})})}),(0,s.jsx)("div",{className:"".concat(n?"col-lg-9":"col-lg-8 offset-lg-2"),children:(0,s.jsx)("div",{className:"ps-page__content",children:(0,s.jsxs)("div",{className:"ps-section--account-setting",children:[(0,s.jsx)("div",{className:"ps-section__header",children:(0,s.jsx)("h3",{children:"Track Your Order"})}),(0,s.jsx)("div",{className:"ps-section__content",children:(0,s.jsx)(v,{})})]})})})]})})})]})})}},85986:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/order-tracking",function(){return n(84448)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return r=85986,e(e.s=r);var r}));var r=e.O();_N_E=r}]);