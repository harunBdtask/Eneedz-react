(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7239],{32230:function(e,n,s){"use strict";var t=s(85893),i=s(41664);s(67294);n.Z=function(e){var n=e.breacrumb,s=e.layout,a=e.campaign_name;return(0,t.jsx)("div",{className:"ps-breadcrumb",children:(0,t.jsx)("div",{className:"fullwidth"===s?"ps-container":"container",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[n.map((function(e,n){return e.url?(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:e.url,children:(0,t.jsx)("a",{children:e.text})})},e.text):(0,t.jsx)("li",{children:e.text},n)})),a&&(0,t.jsx)("li",{children:(0,t.jsx)("strong",{children:a})})]})})})}},45973:function(e,n,s){"use strict";var t=s(85893),i=s(9008),a=(s(67294),s(53010)),r=s(33875),l=s(84654),c=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{}),(0,t.jsx)(r.Z,{})]}),d=(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.Z,{})});n.Z=function(e){var n,s=e.header,a=void 0===s?c:s,r=e.footer,l=void 0===r?d:r,o=e.children,u=e.title,h=void 0===u?"Page":u;return n=""!==h?"E-needz | "+h:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:n})}),a,o,l]})}},13701:function(e,n,s){"use strict";var t=s(809),i=s.n(t),a=s(85893),r=s(92447),l=s(67294);n.Z=function(e){var n=e.page_id,s=(0,l.useState)(null),t=s[0],c=s[1],d=(0,l.useState)(""),o=d[0],u=d[1];function h(){return(h=(0,r.Z)(i().mark((function e(){var s,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(new FormData).append("page_id",n),e.next=4,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/link_page"),{method:"POST",body:JSON.stringify({page_id:n})});case 4:return s=e.sent,e.next=7,s.json();case 7:t=e.sent,console.log("page",t),200===(null===t||void 0===t?void 0:t.response_status)?c(null===t||void 0===t?void 0:t.data[0]):204===(null===t||void 0===t?void 0:t.response_status)&&u(null===t||void 0===t?void 0:t.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),(0,a.jsx)("div",{className:"ps-section--custom",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"section-white p-5",children:[(null===t||void 0===t?void 0:t.headlines)&&(0,a.jsx)("div",{className:"ps-section__header",dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.headlines}}),(null===t||void 0===t?void 0:t.image)&&(0,a.jsx)("img",{src:t.image,alt:"",width:200}),null!==t&&void 0!==t&&t.details?(0,a.jsx)("div",{className:"ps-section__content",dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.details}}):(0,a.jsx)("p",{children:o})]})})})}},55999:function(e,n,s){"use strict";s.r(n);var t=s(85893),i=(s(67294),s(32230)),a=s(45973),r=s(13701),l=s(53010);n.default=function(){return(0,t.jsx)(a.Z,{footer:(0,t.jsx)(l.Z,{}),title:"General sales conditions",children:(0,t.jsxs)("div",{className:"ps-page--single",children:[(0,t.jsx)(i.Z,{breacrumb:[{text:"Home",url:"/"},{text:"General sales conditions"}],layout:"fullwidth"}),(0,t.jsx)(r.Z,{page_id:"general-sales-conditions"})]})})}},18771:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/general-sales-conditions",function(){return s(55999)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return n=18771,e(e.s=n);var n}));var n=e.O();_N_E=n}]);