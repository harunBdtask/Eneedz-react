(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8116],{21790:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(6610),a=n(5991),o=n(63349),i=n(65255),c=n(81907),l=n(67294),s=n(44958),u=n(42550),p=n(75164),f=0,d={};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=f++,r=t;function a(){(r-=1)<=0?(e(),delete d[n]):d[n]=(0,p.Z)(a)}return d[n]=(0,p.Z)(a),n}m.cancel=function(e){void 0!==e&&(p.Z.cancel(d[e]),delete d[e])},m.ids=d;var v,g=n(65632),y=n(96159);function h(e){return!e||null===e.offsetParent||e.hidden}function b(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var C=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).containerRef=l.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var r,a;if(!(!t||h(t)||t.className.indexOf("-leave")>=0)){var i=e.props.insertExtraNode;e.extraNode=document.createElement("div");var c=(0,o.Z)(e).extraNode,l=e.context.getPrefixCls;c.className="".concat(l(""),"-click-animating-node");var u=e.getAttributeName();if(t.setAttribute(u,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&b(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){c.style.borderColor=n;var p=(null===(r=t.getRootNode)||void 0===r?void 0:r.call(t))||t.ownerDocument,f=p instanceof Document?p.body:null!==(a=p.firstChild)&&void 0!==a?a:p;v=(0,s.h)("\n      [".concat(l(""),"-click-animating-without-extra-node='true']::after, .").concat(l(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:f})}i&&t.appendChild(c),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!h(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),m.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=m((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!l.isValidElement(r))return r;var a=e.containerRef;return(0,u.Yr)(r)&&(a=(0,u.sQ)(r.ref,e.containerRef)),(0,y.Tm)(r,{ref:a})},e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),v&&(v.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return l.createElement(g.C,null,this.renderWave)}}]),n}(l.Component);C.contextType=g.E_},32413:function(e,t,n){"use strict";n.d(t,{n:function(){return A},Z:function(){return L}});var r=n(22122),a=n(96156),o=n(28481),i=n(90484),c=n(67294),l=n(94184),s=n.n(l),u=n(98423),p=n(65632),f=n(6610),d=function e(t){return(0,f.Z)(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=function(e){return c.createElement(p.C,null,(function(t){var n,o=t.getPrefixCls,i=t.direction,l=e.prefixCls,u=e.size,p=e.className,f=m(e,["prefixCls","size","className"]),v=o("btn-group",l),g="";switch(u){case"large":g="lg";break;case"small":g="sm";break;case"middle":case void 0:break;default:console.warn(new d(u))}var y=s()(v,(n={},(0,a.Z)(n,"".concat(v,"-").concat(g),g),(0,a.Z)(n,"".concat(v,"-rtl"),"rtl"===i),n),p);return c.createElement("div",(0,r.Z)({},f,{className:y}))}))},g=n(21790),y=n(93355),h=n(21687),b=n(97647),C=n(60444),E=n(7085),N=function(){return{width:0,opacity:0,transform:"scale(0)"}},x=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},Z=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?c.createElement("span",{className:"".concat(t,"-loading-icon")},c.createElement(E.Z,null)):c.createElement(C.Z,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:N,onAppearActive:x,onEnterStart:N,onEnterActive:x,onLeaveStart:x,onLeaveActive:N},(function(e,n){var r=e.className,a=e.style;return c.createElement("span",{className:"".concat(t,"-loading-icon"),style:a,ref:n},c.createElement(E.Z,{className:r}))}))},w=n(96159),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},k=/^[\u4e00-\u9fa5]{2}$/,S=k.test.bind(k);function P(e){return"text"===e||"link"===e}function T(e,t){if(null!=e){var n,r=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&S(e.props.children)?(0,w.Tm)(e,{children:e.props.children.split("").join(r)}):"string"===typeof e?S(e)?c.createElement("span",null,e.split("").join(r)):c.createElement("span",null,e):(n=e,c.isValidElement(n)&&n.type===c.Fragment?c.createElement("span",null,e):e)}}(0,y.b)("default","primary","ghost","dashed","link","text"),(0,y.b)("circle","round"),(0,y.b)("submit","button","reset");function A(e){return"danger"===e?{danger:!0}:{type:e}}var j=function(e,t){var n,l,f=e.loading,d=void 0!==f&&f,m=e.prefixCls,v=e.type,y=e.danger,C=e.shape,E=e.size,N=e.className,x=e.children,w=e.icon,k=e.ghost,A=void 0!==k&&k,j=e.block,R=void 0!==j&&j,L=e.htmlType,I=void 0===L?"button":L,D=O(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),_=c.useContext(b.Z),W=c.useState(!!d),V=(0,o.Z)(W,2),U=V[0],M=V[1],z=c.useState(!1),B=(0,o.Z)(z,2),$=B[0],F=B[1],G=c.useContext(p.E_),H=G.getPrefixCls,Y=G.autoInsertSpaceInButton,J=G.direction,Q=t||c.createRef(),X=c.useRef(),q=function(){return 1===c.Children.count(x)&&!w&&!P(v)};l="object"===(0,i.Z)(d)&&d.delay?d.delay||!0:!!d,c.useEffect((function(){clearTimeout(X.current),"number"===typeof l?X.current=window.setTimeout((function(){M(l)}),l):M(l)}),[l]),c.useEffect((function(){if(Q&&Q.current&&!1!==Y){var e=Q.current.textContent;q()&&S(e)?$||F(!0):$&&F(!1)}}),[Q]);var K=function(t){var n,r=e.onClick,a=e.disabled;U||a?t.preventDefault():null===(n=r)||void 0===n||n(t)};(0,h.Z)(!("string"===typeof w&&w.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(w,"` at https://ant.design/components/icon")),(0,h.Z)(!(A&&P(v)),"Button","`link` or `text` button can't be a `ghost` button.");var ee=H("btn",m),te=!1!==Y,ne="";switch(E||_){case"large":ne="lg";break;case"small":ne="sm"}var re=U?"loading":w,ae=s()(ee,(n={},(0,a.Z)(n,"".concat(ee,"-").concat(v),v),(0,a.Z)(n,"".concat(ee,"-").concat(C),C),(0,a.Z)(n,"".concat(ee,"-").concat(ne),ne),(0,a.Z)(n,"".concat(ee,"-icon-only"),!x&&0!==x&&!!re),(0,a.Z)(n,"".concat(ee,"-background-ghost"),A&&!P(v)),(0,a.Z)(n,"".concat(ee,"-loading"),U),(0,a.Z)(n,"".concat(ee,"-two-chinese-chars"),$&&te),(0,a.Z)(n,"".concat(ee,"-block"),R),(0,a.Z)(n,"".concat(ee,"-dangerous"),!!y),(0,a.Z)(n,"".concat(ee,"-rtl"),"rtl"===J),n),N),oe=w&&!U?w:c.createElement(Z,{existIcon:!!w,prefixCls:ee,loading:!!U}),ie=x||0===x?function(e,t){var n=!1,r=[];return c.Children.forEach(e,(function(e){var t=(0,i.Z)(e),a="string"===t||"number"===t;if(n&&a){var o=r.length-1,c=r[o];r[o]="".concat(c).concat(e)}else r.push(e);n=a})),c.Children.map(r,(function(e){return T(e,t)}))}(x,q()&&te):null,ce=(0,u.Z)(D,["navigate"]);if(void 0!==ce.href)return c.createElement("a",(0,r.Z)({},ce,{className:ae,onClick:K,ref:Q}),oe,ie);var le=c.createElement("button",(0,r.Z)({},D,{type:I,className:ae,onClick:K,ref:Q}),oe,ie);return P(v)?le:c.createElement(g.Z,null,le)},R=c.forwardRef(j);R.displayName="Button",R.Group=v,R.__ANT_BUTTON=!0;var L=R},71577:function(e,t,n){"use strict";var r=n(32413);t.Z=r.Z},16114:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(22122),a=n(96156),o=n(67294),i=n(70271),c=n(94184),l=n.n(c),s=n(8812),u=n(28481),p=n(44545),f=n(71577),d=n(65632),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=f.Z.Group,g=function(e){var t=o.useContext(d.E_),n=t.getPopupContainer,a=t.getPrefixCls,i=t.direction,c=e.prefixCls,s=e.type,g=e.disabled,y=e.onClick,h=e.htmlType,b=e.children,C=e.className,E=e.overlay,x=e.trigger,Z=e.align,w=e.visible,O=e.onVisibleChange,k=e.placement,S=e.getPopupContainer,P=e.href,T=e.icon,A=void 0===T?o.createElement(p.Z,null):T,j=e.title,R=e.buttonsRender,L=e.mouseEnterDelay,I=e.mouseLeaveDelay,D=e.overlayClassName,_=e.overlayStyle,W=m(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),V=a("dropdown-button",c),U={align:Z,overlay:E,disabled:g,trigger:g?[]:x,onVisibleChange:O,getPopupContainer:S||n,mouseEnterDelay:L,mouseLeaveDelay:I,overlayClassName:D,overlayStyle:_};"visible"in e&&(U.visible=w),U.placement="placement"in e?k:"rtl"===i?"bottomLeft":"bottomRight";var M=R([o.createElement(f.Z,{type:s,disabled:g,onClick:y,htmlType:h,href:P,title:j},b),o.createElement(f.Z,{type:s,icon:A})]),z=(0,u.Z)(M,2),B=z[0],$=z[1];return o.createElement(v,(0,r.Z)({},W,{className:l()(V,C)}),B,o.createElement(N,U,$))};g.__ANT_BUTTON=!0,g.defaultProps={type:"default",buttonsRender:function(e){return e}};var y=g,h=n(21687),b=n(93355),C=n(96159),E=((0,b.b)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n=o.useContext(d.E_),c=n.getPopupContainer,u=n.getPrefixCls,p=n.direction,f=e.arrow,m=e.prefixCls,v=e.children,g=e.trigger,y=e.disabled,b=e.getPopupContainer,E=e.overlayClassName,N=u("dropdown",m),x=o.Children.only(v),Z=(0,C.Tm)(x,{className:l()("".concat(N,"-trigger"),(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===p),x.props.className),disabled:y}),w=l()(E,(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===p)),O=y?[]:g;return O&&-1!==O.indexOf("contextMenu")&&(t=!0),o.createElement(i.Z,(0,r.Z)({arrow:f,alignPoint:t},e,{overlayClassName:w,prefixCls:N,getPopupContainer:b||c,transitionName:function(){var t=u(),n=e.placement,r=void 0===n?"":n,a=e.transitionName;return void 0!==a?a:r.indexOf("top")>=0?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")}(),trigger:O,overlay:function(){return function(t){var n,r=e.overlay;n="function"===typeof r?r():r;var a=(n=o.Children.only("string"===typeof n?o.createElement("span",null,n):n)).props;(0,h.Z)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var i=a.selectable,c=void 0!==i&&i,l=a.expandIcon,u="undefined"!==typeof l&&o.isValidElement(l)?l:o.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},o.createElement(s.Z,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:(0,C.Tm)(n,{mode:"vertical",selectable:c,expandIcon:u})}(N)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===p?"bottomRight":"bottomLeft"}()}),Z)});E.Button=y,E.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var N=E,x=E},11382:function(e,t,n){"use strict";var r=n(22122),a=n(96156),o=n(6610),i=n(5991),c=n(65255),l=n(81907),s=n(67294),u=n(94184),p=n.n(u),f=n(98423),d=n(23279),m=n.n(d),v=n(65632),g=n(93355),y=n(96159),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},b=((0,g.b)("small","default","large"),null);var C=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;(0,o.Z)(this,n),(i=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||i.props).delay;t&&(i.cancelExistingSpin(),i.updateSpinning=m()(i.originalUpdateSpinning,t))},i.updateSpinning=function(){var e=i.props.spinning;i.state.spinning!==e&&i.setState({spinning:e})},i.renderSpin=function(e){var t,n=e.getPrefixCls,o=e.direction,c=i.props,l=c.prefixCls,u=c.className,d=c.size,m=c.tip,v=c.wrapperClassName,g=c.style,C=h(c,["prefixCls","className","size","tip","wrapperClassName","style"]),E=i.state.spinning,N=n("spin",l),x=p()(N,(t={},(0,a.Z)(t,"".concat(N,"-sm"),"small"===d),(0,a.Z)(t,"".concat(N,"-lg"),"large"===d),(0,a.Z)(t,"".concat(N,"-spinning"),E),(0,a.Z)(t,"".concat(N,"-show-text"),!!m),(0,a.Z)(t,"".concat(N,"-rtl"),"rtl"===o),t),u),Z=(0,f.Z)(C,["spinning","delay","indicator"]),w=s.createElement("div",(0,r.Z)({},Z,{style:g,className:x}),function(e,t){var n=t.indicator,r="".concat(e,"-dot");return null===n?null:(0,y.l$)(n)?(0,y.Tm)(n,{className:p()(n.props.className,r)}):(0,y.l$)(b)?(0,y.Tm)(b,{className:p()(b.props.className,r)}):s.createElement("span",{className:p()(r,"".concat(e,"-dot-spin"))},s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}))}(N,i.props),m?s.createElement("div",{className:"".concat(N,"-text")},m):null);if(i.isNestedPattern()){var O=p()("".concat(N,"-container"),(0,a.Z)({},"".concat(N,"-blur"),E));return s.createElement("div",(0,r.Z)({},Z,{className:p()("".concat(N,"-nested-loading"),v)}),E&&s.createElement("div",{key:"loading"},w),s.createElement("div",{className:O,key:"container"},i.props.children))}return w};var c=e.spinning,l=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return i.state={spinning:c&&!l},i.originalUpdateSpinning=i.updateSpinning,i.debouncifyUpdateSpinning(e),i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return s.createElement(v.C,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){b=e}}]),n}(s.Component);C.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.Z=C},27561:function(e,t,n){var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),a=n(7771),o=n(14841),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,p,f,d,m=0,v=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=l,r=s;return l=s=void 0,m=t,p=e.apply(r,n)}function b(e){return m=e,f=setTimeout(E,t),v?h(e):p}function C(e){var n=e-d;return void 0===d||n>=t||n<0||g&&e-m>=u}function E(){var e=a();if(C(e))return N(e);f=setTimeout(E,function(e){var n=t-(e-d);return g?c(n,u-(e-m)):n}(e))}function N(e){return f=void 0,y&&l?h(e):(l=s=void 0,p)}function x(){var e=a(),n=C(e);if(l=arguments,s=this,d=e,n){if(void 0===f)return b(d);if(g)return clearTimeout(f),f=setTimeout(E,t),h(d)}return void 0===f&&(f=setTimeout(E,t)),p}return t=o(t)||0,r(n)&&(v=!!n.leading,u=(g="maxWait"in n)?i(o(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=d=s=f=void 0},x.flush=function(){return void 0===f?p:N(a())},x}},33448:function(e,t,n){var r=n(44239),a=n(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),o=n(33448),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}},70271:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(96156),a=n(28481),o=n(81253),i=n(67294),c=n(18481),l=n(94184),s=n.n(l),u={adjustX:1,adjustY:1},p=[0,0],f={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:p},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:p},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:p},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:p},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:p}};var d=i.forwardRef((function(e,t){var n=e.arrow,l=void 0!==n&&n,u=e.prefixCls,p=void 0===u?"rc-dropdown":u,d=e.transitionName,m=e.animation,v=e.align,g=e.placement,y=void 0===g?"bottomLeft":g,h=e.placements,b=void 0===h?f:h,C=e.getPopupContainer,E=e.showAction,N=e.hideAction,x=e.overlayClassName,Z=e.overlayStyle,w=e.visible,O=e.trigger,k=void 0===O?["hover"]:O,S=(0,o.Z)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),P=i.useState(),T=(0,a.Z)(P,2),A=T[0],j=T[1],R="visible"in e?w:A,L=i.useRef(null);i.useImperativeHandle(t,(function(){return L.current}));var I=function(){var t=e.overlay;return"function"===typeof t?t():t},D=function(t){var n=e.onOverlayClick,r=I().props;j(!1),n&&n(t),r.onClick&&r.onClick(t)},_=function(){var e=I(),t={prefixCls:"".concat(p,"-menu"),onClick:D};return"string"===typeof e.type&&delete t.prefixCls,i.createElement(i.Fragment,null,l&&i.createElement("div",{className:"".concat(p,"-arrow")}),i.cloneElement(e,t))},W=N;return W||-1===k.indexOf("contextMenu")||(W=["click"]),i.createElement(c.Z,Object.assign({},S,{prefixCls:p,ref:L,popupClassName:s()(x,(0,r.Z)({},"".concat(p,"-show-arrow"),l)),popupStyle:Z,builtinPlacements:b,action:k,showAction:E,hideAction:W||[],popupPlacement:y,popupAlign:v,popupTransitionName:d,popupAnimation:m,popupVisible:R,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?_:_(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;j(t),"function"===typeof n&&n(t)},getPopupContainer:C}),function(){var t=e.children,n=t.props?t.props:{},r=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(p,"-open")}());return A&&t?i.cloneElement(t,{className:r}):t}())}))}}]);