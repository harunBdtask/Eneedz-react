(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1803],{12469:function(e,s,t){"use strict";var r=t(85893),c=t(74047),n=t(52700),i=t(8127),o=t(44102),l=t(20775),a=t(67294),d=t(30381),h=t.n(d);function u(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(s){var c=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return(0,o.Z)(this,t)}}var m=function(e){(0,i.Z)(t,e);var s=u(t);function t(e){var r;return(0,c.Z)(this,t),(r=s.call(this,e)).state={seconds:null,minutes:null,hours:null,days:null},r}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var s=e.props,t=s.timeTillDate,r=s.timeFormat,c=h()(t,r),n=h()(),i=h()(c-n),o=i.format("D"),l=i.format("HH"),a=i.format("mm"),d=i.format("ss");e.setState({days:o,hours:l,minutes:a,seconds:d})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,s=e.days,t=e.hours,c=e.minutes,n=e.seconds;return(0,r.jsxs)("ul",{className:"ps-countdown",children:[(0,r.jsx)("li",{children:(0,r.jsx)("span",{className:"days mr-1",children:s})}),(0,r.jsx)("li",{children:(0,r.jsx)("span",{className:"hours ml-1 mr-1",children:t})}),(0,r.jsx)("li",{children:(0,r.jsx)("span",{className:"minutes ml-1 mr-1",children:c})}),(0,r.jsx)("li",{children:(0,r.jsx)("span",{className:"seconds ml-1",children:n})})]})}}]),t}(a.Component);s.Z=m},87658:function(e,s,t){"use strict";var r=t(85893),c=t(26265),n=t(67294),i=t(41664),o=t(46066),l=t(72091),a=t(7864),d=t(68697),h=t(79264),u=t(12469),m=t(61087);function p(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?p(Object(t),!0).forEach((function(s){(0,c.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}s.Z=function(e){var s,t=e.collectionSlug,c=e.categorySlug,p=e.boxed,j=void 0!==p&&p,g=(0,m.Z)(),f=g.productItems,v=g.loading,y=g.getProductsByCategory,N=g.getProductsByCollection;if((0,n.useEffect)((function(){c&&y(c),t&&N(t)}),[c,t]),v){var b=(0,a.Z)(6).map((function(e){return(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-3 col-6",children:(0,r.jsx)(d.Z,{})},e)}));s=(0,r.jsx)("div",{className:"row",children:b})}else if(f&&f.length>0){var _=f.map((function(e){return(0,r.jsx)(l.Z,{product:e},e.id)}));s=(0,r.jsx)(o.Z,x(x({},h.aL),{},{className:"ps-carousel outside",children:_}))}else s=(0,r.jsx)("p",{children:"No product found."});return(0,r.jsx)("div",{className:"ps-deal-of-day",children:(0,r.jsxs)("div",{className:j?"container":"ps-container",children:[(0,r.jsxs)("div",{className:"ps-section__header",children:[(0,r.jsxs)("div",{className:"ps-block--countdown-deal",children:[(0,r.jsx)("div",{className:"ps-block__left",children:(0,r.jsx)("h3",{children:"Deal of the day"})}),(0,r.jsx)("div",{className:"ps-block__right",children:(0,r.jsxs)("figure",{children:[(0,r.jsx)("figcaption",{children:"End in:"}),(0,r.jsx)(u.Z,{timeTillDate:"12 31 2021, 6:00 am",timeFormat:"MM DD YYYY, h:mm a"})]})})]}),(0,r.jsx)(i.default,{href:"/shop",children:(0,r.jsx)("a",{children:"View all"})})]}),(0,r.jsx)("div",{className:"ps-section__content",children:s})]})})}},57148:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return B}});var r=t(85893),c=t(67294),n=t(87658),i=t(26265),o=t(41664),l=t(46066),a=(t(77113),t(7864)),d=t(68697),h=t(31918),u=t(79264),m=t(61087);function p(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?p(Object(t),!0).forEach((function(s){(0,i.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var j=function(e){var s,t,n=e.collectionSlug,i=e.categorySlug,p=e.links,j=e.title,g=(0,m.Z)(),f=g.productItems,v=g.loading,y=g.getProductsByCategory,N=g.getProductsByCollection;if((0,c.useEffect)((function(){i&&y(i),n&&N(n)}),[i,n]),v){var b=(0,a.Z)(6).map((function(e){return(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-3 col-6",children:(0,r.jsx)(d.Z,{})},e)}));s=(0,r.jsx)("div",{className:"row",children:b})}else if(f&&f.length>0){var _=f.map((function(e){return(0,r.jsx)(h.Z,{product:e},e.id)}));s=(0,r.jsx)(l.Z,x(x({},u.aL),{},{arrows:!1,className:"ps-carousel outside",children:_})),t=p.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/shop",children:(0,r.jsx)("a",{children:"Iphone"})})},e)}))}else s=(0,r.jsx)("p",{children:"No product found."});return(0,r.jsx)("div",{className:"ps-product-list",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"ps-section__header",children:[(0,r.jsx)("h3",{children:j}),(0,r.jsxs)("ul",{className:"ps-section__links",children:[t,(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/shop",children:(0,r.jsx)("a",{children:"View All"})})})]})]}),(0,r.jsx)("div",{className:"ps-section__content",children:s})]})})};function g(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?g(Object(t),!0).forEach((function(s){(0,i.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var v=function(){return(0,r.jsx)("section",{className:"ps-home-banner",children:(0,r.jsxs)(l.Z,f(f({},{dots:!1,arrows:!1,infinite:!0,fade:!0,speed:1e3,slidesToShow:1,slidesToScroll:1}),{},{children:[(0,r.jsxs)("div",{className:"ps-banner--technology",style:{backgroundImage:"url('/static/img/slider/home-10/1.jpg')"},children:[(0,r.jsx)("img",{src:"/static/img/slider/home-10/1.jpg",alt:"E-needz"}),(0,r.jsxs)("div",{className:"ps-banner__content",children:[(0,r.jsx)("h4",{children:"Weekend Promotions"}),(0,r.jsxs)("h3",{children:["Mini Helicopter ",(0,r.jsx)("br",{})," Mini Helicopter ",(0,r.jsx)("br",{})," sale",(0,r.jsx)("strong",{children:" 40% Off"})]}),(0,r.jsx)("a",{className:"ps-btn",href:"#",children:"Shop Now"})]})]}),(0,r.jsxs)("div",{className:"ps-banner--technology",style:{backgroundImage:"url('/static/img/slider/home-10/2.jpg')"},children:[(0,r.jsx)("img",{src:"/static/img/slider/home-10/2.jpg",alt:"E-needz"}),(0,r.jsxs)("div",{className:"ps-banner__content",children:[(0,r.jsx)("h4",{children:"Weekend Promotions"}),(0,r.jsxs)("h3",{children:["iLuv Aud Mini & ",(0,r.jsx)("br",{})," Ultra Slim Pocket-Sized"," ",(0,r.jsx)("br",{})," speaker just",(0,r.jsx)("strong",{children:" 40% Off"})]}),(0,r.jsx)("a",{className:"ps-btn",href:"#",children:"Shop Now"})]})]})]}))})},y=function(){return(0,r.jsx)("div",{className:"ps-site-features",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"ps-block--site-features ps-block--site-features-2",children:[(0,r.jsxs)("div",{className:"ps-block__item",children:[(0,r.jsx)("div",{className:"ps-block__left",children:(0,r.jsx)("i",{className:"icon-rocket"})}),(0,r.jsxs)("div",{className:"ps-block__right",children:[(0,r.jsx)("h4",{children:"Free Delivery"}),(0,r.jsx)("p",{children:"For all oders over $99"})]})]}),(0,r.jsxs)("div",{className:"ps-block__item",children:[(0,r.jsx)("div",{className:"ps-block__left",children:(0,r.jsx)("i",{className:"icon-sync"})}),(0,r.jsxs)("div",{className:"ps-block__right",children:[(0,r.jsx)("h4",{children:"90 Days Return"}),(0,r.jsx)("p",{children:"If goods have problems"})]})]}),(0,r.jsxs)("div",{className:"ps-block__item",children:[(0,r.jsx)("div",{className:"ps-block__left",children:(0,r.jsx)("i",{className:"icon-credit-card"})}),(0,r.jsxs)("div",{className:"ps-block__right",children:[(0,r.jsx)("h4",{children:"Secure Payment"}),(0,r.jsx)("p",{children:"100% secure payment"})]})]}),(0,r.jsxs)("div",{className:"ps-block__item",children:[(0,r.jsx)("div",{className:"ps-block__left",children:(0,r.jsx)("i",{className:"icon-bubbles"})}),(0,r.jsxs)("div",{className:"ps-block__right",children:[(0,r.jsx)("h4",{children:"24/7 Support"}),(0,r.jsx)("p",{children:"Dedicated support"})]})]})]})})})},N=function(){return(0,r.jsx)("div",{className:"ps-home-promotions",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",children:(0,r.jsx)(o.default,{href:"/shop",children:(0,r.jsx)("a",{className:"ps-collection",children:(0,r.jsx)("img",{src:"/static/img/promotions/home-10/1.jpg",alt:"E-needz"})})})}),(0,r.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",children:(0,r.jsx)(o.default,{href:"/shop",children:(0,r.jsx)("a",{className:"ps-collection",children:(0,r.jsx)("img",{src:"/static/img/promotions/home-10/2.jpg",alt:"E-needz"})})})})]})})})},b=function(){return(0,r.jsx)("section",{className:"ps-top-categories",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h3",{children:"Top categories of the month"}),(0,r.jsx)("div",{className:"row",children:[{imagePath:"/static/img/categories/technology/1.jpg",title:"Smartphone"},{imagePath:"/static/img/categories/technology/2.jpg",title:"Tables"},{imagePath:"/static/img/categories/technology/3.jpg",title:"Laptops"},{imagePath:"/static/img/categories/technology/4.jpg",title:"Sounds"},{imagePath:"/static/img/categories/technology/5.jpg",title:"Technology Toys"},{imagePath:"/static/img/categories/technology/6.jpg",title:"Accessories"}].map((function(e){return(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",children:(0,r.jsxs)("div",{className:"ps-block--category","data-mh":"categories",children:[(0,r.jsx)("div",{className:"ps-block__thumbnail",children:(0,r.jsx)("img",{src:e.imagePath,alt:"E-needz"})}),(0,r.jsx)("div",{className:"ps-block__content",children:(0,r.jsx)("p",{children:e.title})})]})},e.title)}))})]})})},_=t(76067),k=t(60318),O=t(41403),S=t(21862),P=t(83255),w=t(76916),Z=function(){(0,c.useEffect)((function(){window.addEventListener("scroll",a._)}),[]);return(0,r.jsxs)("header",{className:"header header--standard header--technology",id:"headerSticky",children:[(0,r.jsx)("div",{className:"header__top",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"header__left",children:(0,r.jsxs)("p",{children:["SHOPPING CENTER",(0,r.jsxs)("strong",{className:"ml-1",children:[" ","for all orders over $100"]})]})}),(0,r.jsx)("div",{className:"header__right",children:(0,r.jsxs)("ul",{className:"header__top-links",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/vendor/store-list",children:(0,r.jsx)("a",{children:"Store Location"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/page/blank",children:(0,r.jsx)("a",{children:"Track Your Order"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)("li",{children:(0,r.jsx)(S.Z,{})})]})})]})}),(0,r.jsx)("div",{className:"header__content",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"header__content-left",children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"ps-logo",children:(0,r.jsx)("img",{src:"/static/icons/logo.svg",alt:"E-needz"})})}),(0,r.jsxs)("div",{className:"menu--product-categories",children:[(0,r.jsx)("div",{className:"menu__toggle",children:(0,r.jsx)("i",{className:"icon-menu"})}),(0,r.jsx)("div",{className:"menu__content",children:(0,r.jsx)(_.Z,{source:w.a,className:"menu--dropdown"})})]})]}),(0,r.jsx)("div",{className:"header__content-center",children:(0,r.jsx)(P.Z,{})}),(0,r.jsx)("div",{className:"header__content-right",children:(0,r.jsx)(O.Z,{})})]})}),(0,r.jsx)("nav",{className:"navigation",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(_.Z,{source:[{text:"Hot Deal",url:"/home/technology",icon:"icon-star"},{text:"Smartphone",url:"/home/technology",icon:"icon-smartphone"},{text:"Tablets",url:"/home/technology",icon:"ion-ipad"},{text:"Laptop",url:"/home/technology",icon:"icon-laptop"},{text:"Sounds",url:"/home/technology",icon:"icon-headphone"},{text:"Technology Toys",url:"/home/technology",icon:"icon-mic2"},{text:"Accesories",url:"/home/technology",icon:"icon-headphones"}],className:"menu menu--technology"})})})]})},D=t(74047),E=t(52700),C=t(8127),T=t(44102),R=t(20775),A=t(52794);function H(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,R.Z)(e);if(s){var c=(0,R.Z)(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return(0,T.Z)(this,t)}}var I=function(e){(0,C.Z)(t,e);var s=H(t);function t(e){var r=e.props;return(0,D.Z)(this,t),s.call(this,r)}return(0,E.Z)(t,[{key:"render",value:function(){return(0,r.jsxs)("header",{className:"header header--mobile technology",children:[(0,r.jsxs)("div",{className:"header__top",children:[(0,r.jsx)("div",{className:"header__left",children:(0,r.jsx)("p",{children:"Welcome to E-needz Online Shopping Store !"})}),(0,r.jsx)("div",{className:"header__right",children:(0,r.jsxs)("ul",{className:"navigation__extra",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/vendor/become-a-vendor",children:(0,r.jsx)("a",{children:"Sell on E-needz"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/account/order-tracking",children:(0,r.jsx)("a",{children:"Tract your order"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)("li",{children:(0,r.jsx)(S.Z,{})})]})})]}),(0,r.jsxs)("div",{className:"navigation--mobile",children:[(0,r.jsx)("div",{className:"navigation__left",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"ps-logo",children:(0,r.jsx)("img",{src:"/static/icons/logo.svg",alt:"E-needz"})})})}),(0,r.jsx)(A.Z,{})]}),(0,r.jsx)("div",{className:"ps-search--mobile",children:(0,r.jsx)("form",{className:"ps-form--search-mobile",action:"/",method:"get",children:(0,r.jsxs)("div",{className:"form-group--nest",children:[(0,r.jsx)("input",{className:"form-control",type:"text",placeholder:"Search something..."}),(0,r.jsx)("button",{children:(0,r.jsx)("i",{className:"icon-magnifier"})})]})})})]})}}]),t}(c.Component),L=t(92248),z=t(45973),B=function(){var e=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z,{}),(0,r.jsx)(I,{})]}),s=(0,r.jsx)(L.Z,{classes:"ps-footer--technology"});return(0,r.jsx)(z.Z,{header:e,footer:s,title:"Homepage Technology",children:(0,r.jsxs)("main",{id:"homepage-10",children:[(0,r.jsx)(v,{}),(0,r.jsx)(y,{}),(0,r.jsx)(n.Z,{categorySlug:"computers-and-technologies",boxed:!0}),(0,r.jsx)(N,{}),(0,r.jsx)(b,{}),(0,r.jsx)(j,{categorySlug:"phones-and-accessories",title:"Popular Smartphones & Tablets",links:["Iphone, Ipad, Samsung"]}),(0,r.jsx)(j,{categorySlug:"computers-and-technologies",title:"Best Seller Laptops & Sounds",links:["Apple","Laptop","Asus","Mashall","Speaker","JBL","Speaker"]}),(0,r.jsx)(j,{collectionSlug:"technology-toys",title:"Technology Toys Recommended For You",links:["Micro","Drone/Flycam","JQOS"]}),(0,r.jsx)(j,{collectionSlug:"technology-good-price",title:"Good Price Accessories",links:["Headphone","Charge","Case USB","Hard Driver","TV Box"]})]})})}},57679:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/technology",function(){return t(57148)}])},76916:function(e){"use strict";e.exports=JSON.parse('{"a":[{"icon":"/static/icons/desktop.svg","text":"Desktop","url":"/desktop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":true,"megaContent":[{"text":"Home Audio & Theathers","url":"/shop"},{"text":"TV & Videos","url":"/shop"},{"text":"Camera, Photos & Videos","url":"/shop"},{"text":"Cellphones & Accessories","url":"/shop"},{"text":"Headphones","url":"/shop"},{"text":"Videosgames","url":"/shop"},{"text":"Wireless Speakers","url":"/shop"},{"text":"Office Electronic","url":"/shop"},{"text":"Digital Cables","url":"/shop"},{"text":"Audio & Video Cables","url":"/shop"},{"text":"Batteries","url":"/shop"}]},{"icon":"/static/icons/joystick.svg","text":"Joystick","url":"/joystick"},{"icon":"/static/icons/webcam-menu.svg","text":"Web Cam","url":"/webcam"},{"icon":"/static/icons/wearless-headphone.svg","text":"Wearless Head Phone","url":"/wearless-head-phone"},{"icon":"/static/icons/motor-bike.svg","text":"Motor Bike","url":"/motor-bike"},{"icon":"/static/icons/refrigerator.svg","text":"Refrigerator","url":"/refrigerator","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","megaContent":[{"text":"Computer & Tablets","url":"/shop"},{"text":"Laptop","url":"/shop"},{"text":"Monitors","url":"/shop"},{"text":"Networking","url":"/shop"},{"text":"Drive & Storages","url":"/shop"},{"text":"Computer Components","url":"/shop"},{"text":"Security & Protection","url":"/shop"},{"text":"Gaming Laptop","url":"/shop"},{"text":"Accessories","url":"/shop"}]},{"icon":"/static/icons/smart-phone.svg","text":"Smart Phone","url":"/smart-phone"},{"icon":"/static/icons/webcam-menu.svg","text":"Smart TV & Android TV","url":"/smart-tv"},{"icon":"/static/icons/wearless-headphone.svg","text":"Speaker","url":"/speaker"},{"icon":"/static/icons/joystick.svg","text":"Split AC","url":"/split-ac"},{"icon":"/static/icons/refrigerator.svg","text":"Gadget Item","url":"/gadgets"},{"icon":"/static/icons/smart-phone.svg","text":"Cloths","url":"/cloths"}]}')}},function(e){e.O(0,[4885,8116,642,6066,2879,453,4740,1069,5786,6040,9774,2888,179],(function(){return s=57679,e(e.s=s);var s}));var s=e.O();_N_E=s}]);