(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8074],{93929:function(e,t,n){"use strict";var s=n(85893),r=(n(67294),n(41664));t.Z=function(e){var t=e.breacrumb;return(0,s.jsx)("div",{className:"ps-breadcrumb 2",children:(0,s.jsx)("ul",{className:"breadcrumb",children:t.map((function(e){return e.url?(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:e.url,children:(0,s.jsx)("a",{children:e.text})})},e.text):(0,s.jsx)("li",{children:e.text},e.text)}))})})}},22835:function(e,t,n){"use strict";var s=n(85893);n(67294);t.Z=function(){return(0,s.jsx)("div",{className:"ps-pagination",children:(0,s.jsxs)("ul",{className:"pagination",children:[(0,s.jsx)("li",{className:"active",children:(0,s.jsx)("a",{href:"#",children:"1"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"2"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"3"})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["Next Page",(0,s.jsx)("i",{className:"icon-chevron-right"})]})})]})})}},15211:function(e,t,n){"use strict";var s=n(85893),r=(n(67294),n(41664)),a=n(53378),c=n(1216),i=n(30381),l=n.n(i);t.Z=function(e){var t,n,i=e.post;return i&&(null!==i.thumbnail&&(t=(0,s.jsx)(c.ZP,{children:(0,s.jsx)("img",{src:"".concat(a.$Y).concat(i.thumbnail.url),alt:"img"})})),i.post_categories&&(n=i.post_categories.length>0?i.post_categories.map((function(e){return(0,s.jsx)(r.default,{href:"/category/[slug]",as:"/categories/".concat(e.slug),children:(0,s.jsx)("a",{children:e.name})},e.id)})):(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{children:"Others"})}))),(0,s.jsxs)("article",{className:"ps-post",children:[(0,s.jsxs)("div",{className:"ps-post__thumbnail",children:[(0,s.jsx)(r.default,{href:"/post/[pid]",as:"/post/".concat(i.id),children:(0,s.jsx)("a",{className:"ps-post__overlay"})}),t]}),(0,s.jsxs)("div",{className:"ps-post__content",children:[(0,s.jsx)("div",{className:"ps-post__meta",children:n}),(0,s.jsx)(r.default,{href:"/post/[pid]",as:"/post/".concat(i.id),children:(0,s.jsx)("a",{className:"ps-post__title",children:i.name})}),(0,s.jsxs)("p",{children:[l()(i.created_at).format("ll")," by",(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{href:"#",children:" drfurion"})})]})]})]})}},45973:function(e,t,n){"use strict";var s=n(85893),r=n(9008),a=(n(67294),n(53010)),c=n(33875),i=n(84654),l=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(c.Z,{})]}),o=(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{})});t.Z=function(e){var t,n=e.header,a=void 0===n?l:n,c=e.footer,i=void 0===c?o:c,u=e.children,d=e.title,h=void 0===d?"Page":d;return t=""!==h?"E-needz | "+h:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:t})}),a,u,i]})}},80039:function(e,t,n){"use strict";var s=n(85893);n(67294);t.Z=function(e){var t=e.layout;return(0,s.jsx)("section",{className:"ps-newsletter",children:(0,s.jsx)("div",{className:t&&"container"===t?" container":"ps-container",children:(0,s.jsx)("form",{className:"ps-form--newsletter",action:"do_action",method:"post",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ",children:(0,s.jsxs)("div",{className:"ps-form__left",children:[(0,s.jsx)("h3",{children:"Newsletter"}),(0,s.jsx)("p",{children:"Subcribe to get information about products and coupons"})]})}),(0,s.jsx)("div",{className:"col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ",children:(0,s.jsx)("div",{className:"ps-form__right",children:(0,s.jsxs)("div",{className:"form-group--nest",children:[(0,s.jsx)("input",{className:"form-control",type:"email",placeholder:"Email address"}),(0,s.jsx)("button",{className:"ps-btn",children:"Subscribe"})]})})})]})})})})}},68346:function(e,t,n){"use strict";var s=n(85893),r=(n(67294),n(61614));t.Z=function(){return(0,s.jsx)("footer",{className:"ps-footer",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(r.Z,{})})})}},7587:function(e,t,n){"use strict";var s=n(85893),r=(n(67294),n(41664));t.Z=function(){var e=["Business","Entertaiment","Fashion","Life style","Technology","Others"].map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{children:e})})},e)}));return(0,s.jsxs)("aside",{className:"widget widget--blog widget--categories",children:[(0,s.jsx)("h3",{className:"widget__title",children:"Categories"}),(0,s.jsx)("div",{className:"widget__content",children:(0,s.jsx)("ul",{children:e})})]})}},99367:function(e,t,n){"use strict";var s=n(85893),r=(n(67294),n(41664));t.Z=function(){return(0,s.jsxs)("aside",{className:"widget widget--blog widget--recent-comments",children:[(0,s.jsx)("h3",{className:"widget__title",children:"Recent Comments"}),(0,s.jsxs)("div",{className:"widget__content",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{className:"author",children:"drfurion "})}),"on"," ",(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{children:" Dashboard"})})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{className:"author",children:"logan "})}),"on"," ",(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{children:" Rayban Rounded Sunglass Brown Color"})})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{className:"author",children:"logan "})}),"on"," ",(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{children:" Sound Intone I65 Earphone White Version"})})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{className:"author",children:"logan"})}),"on",(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsx)("a",{children:" Sleeve Linen Blend Caro Pane Shirt"})})]})]})]})}},46543:function(e,t,n){"use strict";var s=n(809),r=n.n(s),a=n(85893),c=n(92447),i=n(67294),l=n(41664),o=n(28645);t.Z=function(){var e,t=(0,i.useState)(!0),n=t[0],s=t[1],u=(0,i.useState)(null),d=u[0],h=u[1];function f(){return(f=(0,c.Z)(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={_limit:4},e.next=3,o.Z.getPosts(t);case 3:if(!(n=e.sent)){e.next=10;break}return setTimeout((function(){s(!1)}),200),h(n),e.abrupt("return",n);case 10:return h(null),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),n?e=(0,a.jsx)("p",{children:"Loading..."}):d&&d.length>0&&(e=d.map((function(e){return(0,a.jsx)(l.default,{href:"/post/[pid]",as:"/post/".concat(e.id),children:(0,a.jsx)("a",{children:e.title})})}))),(0,a.jsxs)("aside",{className:"widget widget--blog widget--recent-post",children:[(0,a.jsx)("h3",{className:"widget__title",children:"Recent Posts"}),(0,a.jsx)("div",{className:"widget__content",children:e})]})}},17446:function(e,t,n){"use strict";var s=n(85893);n(67294);t.Z=function(){return(0,s.jsx)("aside",{className:"widget widget--blog widget--search",children:(0,s.jsxs)("form",{className:"ps-form--widget-search",action:"do_action",method:"get",children:[(0,s.jsx)("input",{className:"form-control",type:"text",placeholder:"Search..."}),(0,s.jsx)("button",{children:(0,s.jsx)("i",{className:"icon-magnifier"})})]})})}},29323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var s=n(85893),r=n(67294),a=n(93929),c=n(17446),i=n(7587),l=n(46543),o=n(99367),u=n(809),d=n.n(u),h=n(92447),f=n(41664),x=n(28645),p=(n(15211),n(22835)),m=n(53378),j=n(1216),g=n(30381),v=n.n(g),b=function(e){var t,n,r=e.post;return r&&(null!==r.thumbnail&&(t=(0,s.jsx)(j.ZP,{children:(0,s.jsx)("img",{src:"".concat(m.$Y).concat(r.thumbnail.url),alt:"img"})})),r.categories&&(n=r.categories.length>0?r.categories.map((function(e){return(0,s.jsx)(f.default,{href:"/category/[slug]",as:"/categories/".concat(e.slug),children:(0,s.jsx)("a",{children:e.name})},e.id)})):(0,s.jsx)(f.default,{href:"/blog",children:(0,s.jsx)("a",{children:"Others"})}))),(0,s.jsxs)("article",{className:"ps-post ps-post--small-thumbnail",children:[(0,s.jsxs)("div",{className:"ps-post__thumbnail",children:[(0,s.jsx)(f.default,{href:"/post/[pid]",as:"/post/".concat(r.id),children:(0,s.jsx)("a",{className:"ps-post__overlay"})}),t]}),(0,s.jsxs)("div",{className:"ps-post__content",children:[(0,s.jsxs)("div",{className:"ps-post__top",children:[(0,s.jsx)("div",{className:"ps-post__meta",children:n}),(0,s.jsx)(f.default,{href:"/post/[pid]",as:"/post/".concat(r.id),children:(0,s.jsx)("a",{className:"ps-post__title",children:r.title})}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, dolor siterim consectetur adipiscing elit. Phasellus duio faucibus est sed\u2026"})]}),(0,s.jsxs)("p",{children:[v()(r.created_at).format("ll")," by",(0,s.jsx)(f.default,{href:"/blog",children:(0,s.jsx)("a",{href:"#",children:" drfurion"})})]})]})]})},N=function(e){var t,n=e.collectionSlug,a=(e.columns,(0,r.useState)(!0)),c=a[0],i=a[1],l=(0,r.useState)(null),o=l[0],u=l[1];function f(){return(f=(0,h.Z)(d().mark((function e(){var t,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n){e.next=7;break}return t={slug_eq:n},e.next=4,x.Z.getPostsByCollectionSlug(t);case 4:s=e.sent,e.next=11;break;case 7:return t={_limit:6},e.next=10,x.Z.getPosts(t);case 10:s=e.sent;case 11:if(!s){e.next=17;break}return setTimeout((function(){i(!1)}),200),u(s),e.abrupt("return",s);case 17:return u(null),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),!c&&o&&(t=o.map((function(e){return(0,s.jsx)(b,{post:e},e.id)}))),(0,s.jsxs)("div",{className:"ps-post-items",children:[(0,s.jsx)("div",{className:"row",children:t}),(0,s.jsx)(p.Z,{})]})},_=n(68346),w=n(45973),Z=n(80039),y=function(){return(0,s.jsxs)(w.Z,{footer:(0,s.jsx)(_.Z,{}),title:"Blog ",children:[(0,s.jsx)("div",{className:"ps-page--blog",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"ps-page__header",children:[(0,s.jsx)("h1",{children:"Our Press"}),(0,s.jsx)(a.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Blog Small Thumbnail"}]})]}),(0,s.jsxs)("div",{className:"ps-blog--sidebar",children:[(0,s.jsx)("div",{className:"ps-blog__left",children:(0,s.jsx)(N,{})}),(0,s.jsxs)("div",{className:"ps-blog__right",children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)(i.Z,{}),(0,s.jsx)(l.Z,{}),(0,s.jsx)(o.Z,{})]})]})]})}),(0,s.jsx)(Z.Z,{layout:"container"})]})}},28645:function(e,t,n){"use strict";var s=n(809),r=n.n(s),a=n(92447),c=n(74047),i=n(52700),l=n(53378),o=function(){function e(t){(0,c.Z)(this,e),this.callback=t}return(0,i.Z)(e,[{key:"getPosts",value:function(){var e=(0,a.Z)(r().mark((function e(t){var n,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="posts?".concat((0,l.Y$)(t)),e.next=3,l.ZP.get("".concat(l.$Y,"/").concat(n)).then((function(e){return e.data.length>0?e.data:null})).catch((function(e){return{error:JSON.stringify(e)}}));case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostBySlug",value:function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.ZP.get("".concat(l.$Y,"/posts?slug=").concat(t)).then((function(e){return e.data.length>0?e.data[0]:null})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostsByCollectionSlug",value:function(){var e=(0,a.Z)(r().mark((function e(t){var n,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="collections?".concat((0,l.Y$)(t)),e.next=3,l.ZP.get("".concat(l.$Y,"/").concat(n)).then((function(e){return e.data&&e.data[0].posts.length>0?e.data[0].posts:null})).catch((function(e){return console.log(JSON.stringify(e)),null}));case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostItemsByKeyword",value:function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.ZP.get("".concat(l.$Y,"/posts?title_contains=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostItemsByCategory",value:function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.ZP.get("".concat(l.$Y,"/posts?title_contains=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=new o},79962:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/blog-small-thumbnail",function(){return n(29323)}])}},function(e){e.O(0,[4885,8116,4740,9774,2888,179],(function(){return t=79962,e(e.s=t);var t}));var t=e.O();_N_E=t}]);