(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2188],{32230:function(e,n,t){"use strict";var s=t(85893),i=t(41664);t(67294);n.Z=function(e){var n=e.breacrumb,t=e.layout,r=e.campaign_name;return(0,s.jsx)("div",{className:"ps-breadcrumb",children:(0,s.jsx)("div",{className:"fullwidth"===t?"ps-container":"container",children:(0,s.jsxs)("ul",{className:"breadcrumb",children:[n.map((function(e,n){return e.url?(0,s.jsx)("li",{children:(0,s.jsx)(i.default,{href:e.url,children:(0,s.jsx)("a",{children:e.text})})},e.text):(0,s.jsx)("li",{children:e.text},n)})),r&&(0,s.jsx)("li",{children:(0,s.jsx)("strong",{children:r})})]})})})}},45973:function(e,n,t){"use strict";var s=t(85893),i=t(9008),r=(t(67294),t(53010)),a=t(33875),l=t(84654),c=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(a.Z,{})]}),d=(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{})});n.Z=function(e){var n,t=e.header,r=void 0===t?c:t,a=e.footer,l=void 0===a?d:a,o=e.children,u=e.title,h=void 0===u?"Page":u;return n=""!==h?"E-needz | "+h:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:n})}),r,o,l]})}},13701:function(e,n,t){"use strict";var s=t(809),i=t.n(s),r=t(85893),a=t(92447),l=t(67294);n.Z=function(e){var n=e.page_id,t=(0,l.useState)(null),s=t[0],c=t[1],d=(0,l.useState)(""),o=d[0],u=d[1];function h(){return(h=(0,a.Z)(i().mark((function e(){var t,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(new FormData).append("page_id",n),e.next=4,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/link_page"),{method:"POST",body:JSON.stringify({page_id:n})});case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,console.log("page",s),200===(null===s||void 0===s?void 0:s.response_status)?c(null===s||void 0===s?void 0:s.data[0]):204===(null===s||void 0===s?void 0:s.response_status)&&u(null===s||void 0===s?void 0:s.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),(0,r.jsx)("div",{className:"ps-section--custom",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"section-white p-5",children:[(null===s||void 0===s?void 0:s.headlines)&&(0,r.jsx)("div",{className:"ps-section__header",dangerouslySetInnerHTML:{__html:null===s||void 0===s?void 0:s.headlines}}),(null===s||void 0===s?void 0:s.image)&&(0,r.jsx)("img",{src:s.image,alt:"",width:200}),null!==s&&void 0!==s&&s.details?(0,r.jsx)("div",{className:"ps-section__content",dangerouslySetInnerHTML:{__html:null===s||void 0===s?void 0:s.details}}):(0,r.jsx)("p",{children:o})]})})})}},54986:function(e,n,t){"use strict";t.r(n);var s=t(85893),i=(t(67294),t(32230)),r=t(45973),a=t(13701),l=t(53010);n.default=function(){return(0,s.jsx)(r.Z,{footer:(0,s.jsx)(l.Z,{}),title:"Who We Are",children:(0,s.jsxs)("div",{className:"ps-page--single",children:[(0,s.jsx)(i.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Who We Are"}],layout:"fullwidth"}),(0,s.jsx)(a.Z,{page_id:"who-we-are"})]})})}},55070:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/who-we-are",function(){return t(54986)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return n=55070,e(e.s=n);var n}));var n=e.O();_N_E=n}]);