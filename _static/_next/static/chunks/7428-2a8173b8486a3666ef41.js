(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7428],{47428:function(e,t,n){"use strict";n.d(t,{Z:function(){return ee}});var a=n(22122),r=n(96156),o=n(67294),i=n(28481),c=n(90484),l=n(81253),u=n(28991),s=n(94184),d=n.n(s),f=n(50344),v=n(31131),m=n(21770),h=n(42921),b=n(75164),p=n(4084);function y(e){var t=(0,o.useRef)(),n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return function(){n.current=!0,b.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(b.Z.cancel(t.current),t.current=(0,b.Z)((function(){e.apply(void 0,r)})))}}var Z=n(15105);function g(e,t){var n,a=e.prefixCls,i=e.id,c=e.active,l=e.tab,u=l.key,s=l.tab,f=l.disabled,v=l.closeIcon,m=e.closable,h=e.renderWrapper,b=e.removeAriaLabel,p=e.editable,y=e.onClick,g=e.onRemove,E=e.onFocus,k=e.style,w="".concat(a,"-tab");o.useEffect((function(){return g}),[]);var x=p&&!1!==m&&!f;function C(e){f||y(e)}var N=o.createElement("div",{key:u,ref:t,className:d()(w,(n={},(0,r.Z)(n,"".concat(w,"-with-remove"),x),(0,r.Z)(n,"".concat(w,"-active"),c),(0,r.Z)(n,"".concat(w,"-disabled"),f),n)),style:k,onClick:C},o.createElement("div",{role:"tab","aria-selected":c,id:i&&"".concat(i,"-tab-").concat(u),className:"".concat(w,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[Z.Z.SPACE,Z.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:E},s),x&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),p.onEdit("remove",{key:u,event:t})}},v||p.removeIcon||"\xd7"));return h?h(N):N}var E=o.forwardRef(g),k={width:0,height:0,left:0,top:0};var w={width:0,height:0,left:0,top:0,right:0};var x=n(10985),C=n(70271);function N(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,i=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var T=o.forwardRef(N);function S(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,f=void 0===s?"More":s,v=e.moreTransitionName,m=e.style,h=e.className,b=e.editable,p=e.tabBarGutter,y=e.rtl,g=e.onTabClick,E=(0,o.useState)(!1),k=(0,i.Z)(E,2),w=k[0],N=k[1],S=(0,o.useState)(null),P=(0,i.Z)(S,2),I=P[0],R=P[1],M="".concat(a,"-more-popup"),B="".concat(n,"-dropdown"),L=null!==I?"".concat(M,"-").concat(I):null,A=null===l||void 0===l?void 0:l.dropdownAriaLabel,D=o.createElement(x.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),N(!1)},id:M,tabIndex:-1,role:"listbox","aria-activedescendant":L,selectedKeys:[I],"aria-label":void 0!==A?A:"expanded dropdown"},c.map((function(e){return o.createElement(x.sN,{key:e.key,id:"".concat(M,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function K(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void R(o.key)}}(0,o.useEffect)((function(){var e=document.getElementById(L);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),(0,o.useEffect)((function(){w||R(null)}),[w]);var O=(0,r.Z)({},y?"marginRight":"marginLeft",p);c.length||(O.visibility="hidden",O.order=1);var W=d()((0,r.Z)({},"".concat(B,"-rtl"),y)),j=u?null:o.createElement(C.Z,{prefixCls:B,overlay:D,trigger:["hover"],visible:w,transitionName:v,onVisibleChange:N,overlayClassName:W,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:O,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case Z.Z.UP:K(-1),e.preventDefault();break;case Z.Z.DOWN:K(1),e.preventDefault();break;case Z.Z.ESC:N(!1);break;case Z.Z.SPACE:case Z.Z.ENTER:null!==I&&g(I,e)}else[Z.Z.DOWN,Z.Z.SPACE,Z.Z.ENTER].includes(t)&&(N(!0),e.preventDefault())}},f));return o.createElement("div",{className:d()("".concat(n,"-nav-operations"),h),style:m,ref:t},j,o.createElement(T,{prefixCls:n,locale:l,editable:b}))}var P=o.forwardRef(S),I=(0,o.createContext)(null),R=Math.pow(.995,20);function M(e,t){var n=o.useRef(e),a=o.useState({}),r=(0,i.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var B=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var i={};return r&&"object"===(0,c.Z)(r)&&!o.isValidElement(r)?i=r:i.right=r,"right"===n&&(t=i.right),"left"===n&&(t=i.left),t?o.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function L(e,t){var n,c=o.useContext(I),l=c.prefixCls,s=c.tabs,f=e.className,v=e.style,m=e.id,Z=e.animated,g=e.activeKey,x=e.rtl,C=e.extra,N=e.editable,S=e.locale,L=e.tabPosition,A=e.tabBarGutter,D=e.children,K=e.onTabClick,O=e.onTabScroll,W=(0,o.useRef)(),j=(0,o.useRef)(),_=(0,o.useRef)(),q=(0,o.useRef)(),V=function(){var e=(0,o.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,o.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),z=(0,i.Z)(V,2),H=z[0],G=z[1],Y="top"===L||"bottom"===L,F=M(0,(function(e,t){Y&&O&&O({direction:e>t?"left":"right"})})),X=(0,i.Z)(F,2),U=X[0],J=X[1],Q=M(0,(function(e,t){!Y&&O&&O({direction:e>t?"top":"bottom"})})),$=(0,i.Z)(Q,2),ee=$[0],te=$[1],ne=(0,o.useState)(0),ae=(0,i.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,o.useState)(0),ce=(0,i.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,o.useState)(0),de=(0,i.Z)(se,2),fe=de[0],ve=de[1],me=(0,o.useState)(0),he=(0,i.Z)(me,2),be=he[0],pe=he[1],ye=(0,o.useState)(null),Ze=(0,i.Z)(ye,2),ge=Ze[0],Ee=Ze[1],ke=(0,o.useState)(null),we=(0,i.Z)(ke,2),xe=we[0],Ce=we[1],Ne=(0,o.useState)(0),Te=(0,i.Z)(Ne,2),Se=Te[0],Pe=Te[1],Ie=(0,o.useState)(0),Re=(0,i.Z)(Ie,2),Me=Re[0],Be=Re[1],Le=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),a=(0,i.Z)(n,2)[1],r=(0,o.useRef)("function"===typeof e?e():e),c=y((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Ae=(0,i.Z)(Le,2),De=Ae[0],Ke=Ae[1],Oe=function(e,t,n){return(0,o.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||k,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,s=t.get(l);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||k);var d=a.get(l)||(0,u.Z)({},s);d.right=o-d.left-d.width,a.set(l,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(s,De,re),We="".concat(l,"-nav-operations-hidden"),je=0,_e=0;function qe(e){return e<je?je:e>_e?_e:e}Y?x?(je=0,_e=Math.max(0,re-ge)):(je=Math.min(0,ge-re),_e=0):(je=Math.min(0,xe-le),_e=0);var Ve=(0,o.useRef)(),ze=(0,o.useState)(),He=(0,i.Z)(ze,2),Ge=He[0],Ye=He[1];function Fe(){Ye(Date.now())}function Xe(){window.clearTimeout(Ve.current)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=Oe.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=U;x?t.right<U?n=t.right:t.right+t.width>U+ge&&(n=t.right+t.width-ge):t.left<-U?n=-t.left:t.left+t.width>-U+ge&&(n=-(t.left+t.width-ge)),te(0),J(qe(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+xe&&(a=-(t.top+t.height-xe)),J(0),te(qe(a))}}!function(e,t){var n=(0,o.useState)(),a=(0,i.Z)(n,2),r=a[0],c=a[1],l=(0,o.useState)(0),u=(0,i.Z)(l,2),s=u[0],d=u[1],f=(0,o.useState)(0),v=(0,i.Z)(f,2),m=v[0],h=v[1],b=(0,o.useState)(),p=(0,i.Z)(b,2),y=p[0],Z=p[1],g=(0,o.useRef)(),E=(0,o.useRef)(),k=(0,o.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var u=Date.now();d(u),h(u-s),Z({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),Z(null),y)){var e=y.x/m,n=y.y/m,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;g.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(i*=R),20*(l*=R))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},o.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(W,(function(e,t){function n(e,t){e((function(e){return qe(e+t)}))}if(Y){if(ge>=re)return!1;n(J,e)}else{if(xe>=le)return!1;n(te,t)}return Xe(),Fe(),!0})),(0,o.useEffect)((function(){return Xe(),Ge&&(Ve.current=window.setTimeout((function(){Ye(0)}),100)),Xe}),[Ge]);var Je=function(e,t,n,a,r){var i,c,l,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(i="width",c=d?"right":"left",l=Math.abs(t.left)):(i="height",c="top",l=-t.top);var f=t[i],v=n[i],m=a[i],h=f;return v+m>f&&(h=f-m),(0,o.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||w;if(r[c]+r[i]>l+h){n=a-1;break}}for(var o=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||w)[c]<l){o=s+1;break}return[o,n]}),[e,l,h,s,u.map((function(e){return e.key})).join("_"),d])}(Oe,{width:ge,height:xe,left:U,top:ee},{width:fe,height:be},{width:Se,height:Me},(0,u.Z)((0,u.Z)({},e),{},{tabs:s})),Qe=(0,i.Z)(Je,2),$e=Qe[0],et=Qe[1],tt={};"top"===L||"bottom"===L?tt[x?"marginRight":"marginLeft"]=A:tt.marginTop=A;var nt=s.map((function(e,t){var n=e.key;return o.createElement(E,{id:m,prefixCls:l,key:n,tab:e,style:0===t?void 0:tt,closable:e.closable,editable:N,active:n===g,renderWrapper:D,removeAriaLabel:null===S||void 0===S?void 0:S.removeAriaLabel,ref:H(n),onClick:function(e){K(n,e)},onRemove:function(){G(n)},onFocus:function(){Ue(n),Fe(),W.current&&(x||(W.current.scrollLeft=0),W.current.scrollTop=0)}})})),at=y((function(){var e,t,n,a,r,o,i,c,l,u=(null===(e=W.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=W.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=q.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=q.current)||void 0===a?void 0:a.offsetHeight)||0,m=(null===(r=_.current)||void 0===r?void 0:r.offsetWidth)||0,h=(null===(o=_.current)||void 0===o?void 0:o.offsetHeight)||0;Ee(u),Ce(d),Pe(f),Be(v);var b=((null===(i=j.current)||void 0===i?void 0:i.offsetWidth)||0)-f,p=((null===(c=j.current)||void 0===c?void 0:c.offsetHeight)||0)-v;oe(b),ue(p);var y=null===(l=_.current)||void 0===l?void 0:l.className.includes(We);ve(b-(y?0:m)),pe(p-(y?0:h)),Ke((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=H(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),rt=s.slice(0,$e),ot=s.slice(et+1),it=[].concat((0,h.Z)(rt),(0,h.Z)(ot)),ct=(0,o.useState)(),lt=(0,i.Z)(ct,2),ut=lt[0],st=lt[1],dt=Oe.get(g),ft=(0,o.useRef)();function vt(){b.Z.cancel(ft.current)}(0,o.useEffect)((function(){var e={};return dt&&(Y?(x?e.right=dt.right:e.left=dt.left,e.width=dt.width):(e.top=dt.top,e.height=dt.height)),vt(),ft.current=(0,b.Z)((function(){st(e)})),vt}),[dt,Y,x]),(0,o.useEffect)((function(){Ue()}),[g,dt,Oe,Y]),(0,o.useEffect)((function(){at()}),[x,A,g,s.map((function(e){return e.key})).join("_")]);var mt,ht,bt,pt,yt=!!it.length,Zt="".concat(l,"-nav-wrap");return Y?x?(ht=U>0,mt=U+ge<re):(mt=U<0,ht=-U+ge<re):(bt=ee<0,pt=-ee+xe<le),o.createElement("div",{ref:t,role:"tablist",className:d()("".concat(l,"-nav"),f),style:v,onKeyDown:function(){Fe()}},o.createElement(B,{position:"left",extra:C,prefixCls:l}),o.createElement(p.Z,{onResize:at},o.createElement("div",{className:d()(Zt,(n={},(0,r.Z)(n,"".concat(Zt,"-ping-left"),mt),(0,r.Z)(n,"".concat(Zt,"-ping-right"),ht),(0,r.Z)(n,"".concat(Zt,"-ping-top"),bt),(0,r.Z)(n,"".concat(Zt,"-ping-bottom"),pt),n)),ref:W},o.createElement(p.Z,{onResize:at},o.createElement("div",{ref:j,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Ge?"none":void 0}},nt,o.createElement(T,{ref:q,prefixCls:l,locale:S,editable:N,style:(0,u.Z)((0,u.Z)({},0===nt.length?void 0:tt),{},{visibility:yt?"hidden":null})}),o.createElement("div",{className:d()("".concat(l,"-ink-bar"),(0,r.Z)({},"".concat(l,"-ink-bar-animated"),Z.inkBar)),style:ut}))))),o.createElement(P,(0,a.Z)({},e,{ref:_,prefixCls:l,tabs:it,className:!yt&&We})),o.createElement(B,{position:"right",extra:C,prefixCls:l}))}var A=o.forwardRef(L);function D(e){var t=e.id,n=e.activeKey,a=e.animated,i=e.tabPosition,c=e.rtl,l=e.destroyInactiveTabPane,u=o.useContext(I),s=u.prefixCls,f=u.tabs,v=a.tabPane,m=f.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:d()("".concat(s,"-content-holder"))},o.createElement("div",{className:d()("".concat(s,"-content"),"".concat(s,"-content-").concat(i),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:m&&v?(0,r.Z)({},c?"marginRight":"marginLeft","-".concat(m,"00%")):null},f.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:l})}))))}function K(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,s=e.animated,f=e.destroyInactiveTabPane,v=e.tabKey,m=e.children,h=o.useState(n),b=(0,i.Z)(h,2),p=b[0],y=b[1];o.useEffect((function(){l?y(!0):f&&y(!1)}),[l,f]);var Z={};return l||(s?(Z.visibility="hidden",Z.height=0,Z.overflowY="hidden"):Z.display="none"),o.createElement("div",{id:c&&"".concat(c,"-panel-").concat(v),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(v),"aria-hidden":!l,style:(0,u.Z)((0,u.Z)({},Z),r),className:d()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||p||n)&&m)}var O=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],W=0;function j(e,t){var n,s,h=e.id,b=e.prefixCls,p=void 0===b?"rc-tabs":b,y=e.className,Z=e.children,g=e.direction,E=e.activeKey,k=e.defaultActiveKey,w=e.editable,x=e.animated,C=void 0===x?{inkBar:!0,tabPane:!1}:x,N=e.tabPosition,T=void 0===N?"top":N,S=e.tabBarGutter,P=e.tabBarStyle,R=e.tabBarExtraContent,M=e.locale,B=e.moreIcon,L=e.moreTransitionName,K=e.destroyInactiveTabPane,j=e.renderTabBar,_=e.onChange,q=e.onTabClick,V=e.onTabScroll,z=(0,l.Z)(e,O),H=function(e){return(0,f.Z)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,u.Z)((0,u.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(Z),G="rtl"===g;s=!1===C?{inkBar:!1,tabPane:!1}:!0===C?{inkBar:!0,tabPane:!0}:(0,u.Z)({inkBar:!0,tabPane:!1},"object"===(0,c.Z)(C)?C:{});var Y=(0,o.useState)(!1),F=(0,i.Z)(Y,2),X=F[0],U=F[1];(0,o.useEffect)((function(){U((0,v.Z)())}),[]);var J=(0,m.Z)((function(){var e;return null===(e=H[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:k}),Q=(0,i.Z)(J,2),$=Q[0],ee=Q[1],te=(0,o.useState)((function(){return H.findIndex((function(e){return e.key===$}))})),ne=(0,i.Z)(te,2),ae=ne[0],re=ne[1];(0,o.useEffect)((function(){var e,t=H.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,H.length-1)),ee(null===(e=H[t])||void 0===e?void 0:e.key));re(t)}),[H.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,m.Z)(null,{value:h}),ie=(0,i.Z)(oe,2),ce=ie[0],le=ie[1],ue=T;X&&!["left","right"].includes(T)&&(ue="top"),(0,o.useEffect)((function(){h||(le("rc-tabs-".concat(W)),W+=1)}),[]);var se,de={id:ce,activeKey:$,animated:s,tabPosition:ue,rtl:G,mobile:X},fe=(0,u.Z)((0,u.Z)({},de),{},{editable:w,locale:M,moreIcon:B,moreTransitionName:L,tabBarGutter:S,onTabClick:function(e,t){null===q||void 0===q||q(e,t),ee(e),null===_||void 0===_||_(e)},onTabScroll:V,extra:R,style:P,panes:Z});return se=j?j(fe,A):o.createElement(A,fe),o.createElement(I.Provider,{value:{tabs:H,prefixCls:p}},o.createElement("div",(0,a.Z)({ref:t,id:h,className:d()(p,"".concat(p,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(p,"-mobile"),X),(0,r.Z)(n,"".concat(p,"-editable"),w),(0,r.Z)(n,"".concat(p,"-rtl"),G),n),y)},z),se,o.createElement(D,(0,a.Z)({destroyInactiveTabPane:K},de,{animated:s}))))}var _=o.forwardRef(j);_.TabPane=K;var q=_,V=n(44545),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},H=n(30076),G=function(e,t){return o.createElement(H.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:z}))};G.displayName="PlusOutlined";var Y=o.forwardRef(G),F=n(54549),X=n(21687),U=n(65632),J=n(97647),Q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function $(e){var t,n=e.type,i=e.className,c=e.size,l=e.onEdit,u=e.hideAdd,s=e.centered,f=e.addIcon,v=Q(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=v.prefixCls,h=v.moreIcon,b=void 0===h?o.createElement(V.Z,null):h,p=o.useContext(U.E_),y=p.getPrefixCls,Z=p.direction,g=y("tabs",m);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===l||void 0===l||l("add"===e?a:n,e)},removeIcon:o.createElement(F.Z,null),addIcon:f||o.createElement(Y,null),showAdd:!0!==u});var E=y();return(0,X.Z)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(J.Z.Consumer,null,(function(e){var l,u=void 0!==c?c:e;return o.createElement(q,(0,a.Z)({direction:Z,moreTransitionName:"".concat(E,"-slide-up")},v,{className:d()((l={},(0,r.Z)(l,"".concat(g,"-").concat(u),u),(0,r.Z)(l,"".concat(g,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(l,"".concat(g,"-editable-card"),"editable-card"===n),(0,r.Z)(l,"".concat(g,"-centered"),s),l),i),editable:t,moreIcon:b,prefixCls:g}))}))}$.TabPane=K;var ee=$}}]);