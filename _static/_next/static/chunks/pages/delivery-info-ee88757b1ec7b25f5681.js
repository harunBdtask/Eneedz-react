(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7024],{32230:function(e,n,t){"use strict";var i=t(85893),s=t(41664);t(67294);n.Z=function(e){var n=e.breacrumb,t=e.layout,r=e.campaign_name;return(0,i.jsx)("div",{className:"ps-breadcrumb",children:(0,i.jsx)("div",{className:"fullwidth"===t?"ps-container":"container",children:(0,i.jsxs)("ul",{className:"breadcrumb",children:[n.map((function(e,n){return e.url?(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:e.url,children:(0,i.jsx)("a",{children:e.text})})},e.text):(0,i.jsx)("li",{children:e.text},n)})),r&&(0,i.jsx)("li",{children:(0,i.jsx)("strong",{children:r})})]})})})}},45973:function(e,n,t){"use strict";var i=t(85893),s=t(9008),r=(t(67294),t(53010)),a=t(33875),l=t(84654),c=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(a.Z,{})]}),d=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{})});n.Z=function(e){var n,t=e.header,r=void 0===t?c:t,a=e.footer,l=void 0===a?d:a,o=e.children,u=e.title,h=void 0===u?"Page":u;return n=""!==h?"E-needz | "+h:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{children:(0,i.jsx)("title",{children:n})}),r,o,l]})}},13701:function(e,n,t){"use strict";var i=t(809),s=t.n(i),r=t(85893),a=t(92447),l=t(67294);n.Z=function(e){var n=e.page_id,t=(0,l.useState)(null),i=t[0],c=t[1],d=(0,l.useState)(""),o=d[0],u=d[1];function h(){return(h=(0,a.Z)(s().mark((function e(){var t,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(new FormData).append("page_id",n),e.next=4,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/link_page"),{method:"POST",body:JSON.stringify({page_id:n})});case 4:return t=e.sent,e.next=7,t.json();case 7:i=e.sent,console.log("page",i),200===(null===i||void 0===i?void 0:i.response_status)?c(null===i||void 0===i?void 0:i.data[0]):204===(null===i||void 0===i?void 0:i.response_status)&&u(null===i||void 0===i?void 0:i.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),(0,r.jsx)("div",{className:"ps-section--custom",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"section-white p-5",children:[(null===i||void 0===i?void 0:i.headlines)&&(0,r.jsx)("div",{className:"ps-section__header",dangerouslySetInnerHTML:{__html:null===i||void 0===i?void 0:i.headlines}}),(null===i||void 0===i?void 0:i.image)&&(0,r.jsx)("img",{src:i.image,alt:"",width:200}),null!==i&&void 0!==i&&i.details?(0,r.jsx)("div",{className:"ps-section__content",dangerouslySetInnerHTML:{__html:null===i||void 0===i?void 0:i.details}}):(0,r.jsx)("p",{children:o})]})})})}},55393:function(e,n,t){"use strict";t.r(n);var i=t(85893),s=(t(67294),t(32230)),r=t(45973),a=t(13701),l=t(53010);n.default=function(){return(0,i.jsx)(r.Z,{footer:(0,i.jsx)(l.Z,{}),title:"Blank page",children:(0,i.jsxs)("div",{className:"ps-page--single",children:[(0,i.jsx)(s.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Delivery Info"}],layout:"fullwidth"}),(0,i.jsx)(a.Z,{page_id:"3"})]})})}},95074:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/delivery-info",function(){return t(55393)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return n=95074,e(e.s=n);var n}));var n=e.O();_N_E=n}]);