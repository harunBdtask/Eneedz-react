(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9396],{32230:function(e,n,i){"use strict";var t=i(85893),s=i(41664);i(67294);n.Z=function(e){var n=e.breacrumb,i=e.layout,r=e.campaign_name;return(0,t.jsx)("div",{className:"ps-breadcrumb",children:(0,t.jsx)("div",{className:"fullwidth"===i?"ps-container":"container",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[n.map((function(e,n){return e.url?(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:e.url,children:(0,t.jsx)("a",{children:e.text})})},e.text):(0,t.jsx)("li",{children:e.text},n)})),r&&(0,t.jsx)("li",{children:(0,t.jsx)("strong",{children:r})})]})})})}},45973:function(e,n,i){"use strict";var t=i(85893),s=i(9008),r=(i(67294),i(53010)),a=i(33875),c=i(84654),l=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{}),(0,t.jsx)(a.Z,{})]}),d=(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.Z,{})});n.Z=function(e){var n,i=e.header,r=void 0===i?l:i,a=e.footer,c=void 0===a?d:a,o=e.children,u=e.title,h=void 0===u?"Page":u;return n=""!==h?"E-needz | "+h:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.default,{children:(0,t.jsx)("title",{children:n})}),r,o,c]})}},13701:function(e,n,i){"use strict";var t=i(809),s=i.n(t),r=i(85893),a=i(92447),c=i(67294);n.Z=function(e){var n=e.page_id,i=(0,c.useState)(null),t=i[0],l=i[1],d=(0,c.useState)(""),o=d[0],u=d[1];function h(){return(h=(0,a.Z)(s().mark((function e(){var i,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(new FormData).append("page_id",n),e.next=4,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/link_page"),{method:"POST",body:JSON.stringify({page_id:n})});case 4:return i=e.sent,e.next=7,i.json();case 7:t=e.sent,console.log("page",t),200===(null===t||void 0===t?void 0:t.response_status)?l(null===t||void 0===t?void 0:t.data[0]):204===(null===t||void 0===t?void 0:t.response_status)&&u(null===t||void 0===t?void 0:t.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),(0,r.jsx)("div",{className:"ps-section--custom",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"section-white p-5",children:[(null===t||void 0===t?void 0:t.headlines)&&(0,r.jsx)("div",{className:"ps-section__header",dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.headlines}}),(null===t||void 0===t?void 0:t.image)&&(0,r.jsx)("img",{src:t.image,alt:"",width:200}),null!==t&&void 0!==t&&t.details?(0,r.jsx)("div",{className:"ps-section__content",dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.details}}):(0,r.jsx)("p",{children:o})]})})})}},57198:function(e,n,i){"use strict";i.r(n);var t=i(85893),s=(i(67294),i(32230)),r=i(45973),a=i(13701),c=i(53010);n.default=function(){return(0,t.jsx)(r.Z,{footer:(0,t.jsx)(c.Z,{}),title:"Privacy Policy",children:(0,t.jsxs)("div",{className:"ps-page--single",children:[(0,t.jsx)(s.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Privacy Policy"}],layout:"fullwidth"}),(0,t.jsx)(a.Z,{page_id:"4"})]})})}},75970:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return i(57198)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return n=75970,e(e.s=n);var n}));var n=e.O();_N_E=n}]);