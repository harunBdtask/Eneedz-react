(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4618],{45973:function(e,s,r){"use strict";var o=r(85893),t=r(9008),n=(r(67294),r(53010)),a=r(33875),c=r(84654),i=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{}),(0,o.jsx)(a.Z,{})]}),d=(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.Z,{})});s.Z=function(e){var s,r=e.header,n=void 0===r?i:r,a=e.footer,c=void 0===a?d:a,l=e.children,p=e.title,u=void 0===p?"Page":p;return s=""!==u?"E-needz | "+u:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.default,{children:(0,o.jsx)("title",{children:s})}),n,l,c]})}},13805:function(e,s,r){"use strict";r.r(s);var o=r(85893),t=r(809),n=r.n(t),a=r(92447),c=r(26265),i=r(64121),d=r(11163),l=r(67294),p=r(6645),u=r(39249),m=r(45973),f=r(53010);function w(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,o)}return r}function h(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?w(Object(r),!0).forEach((function(s){(0,c.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}s.default=function(){var e=(0,p.Z)(["auth"]),s=((0,i.Z)(e,1)[0],(0,l.useState)(!1)),r=s[0],t=s[1],w=(0,l.useState)(""),j=w[0],v=w[1],x=(0,d.useRouter)(),P=(0,l.useState)({otpCode:"",newPassword:"",confirmPassword:""}),b=P[0],g=P[1];(0,l.useEffect)((function(){var e=localStorage.getItem("_p");if(null===e&&void 0===e)return x.push("/");v(e)}),[j]);var _=function(e){var s=e.target,r=s.name,o=s.value;g(h(h({},b),{},(0,c.Z)({},r,o)))},N=function(){var e=(0,a.Z)(n().mark((function e(s){var r,o,a,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),t(!0),(r=new FormData).append("customer_mobile",j),r.append("otp",b.otpCode),r.append("password",b.newPassword),r.append("cpassword",b.confirmPassword),o={method:"POST",body:r,redirect:"follow"},e.next=10,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/confirm_otp_password"),o);case 10:return a=e.sent,e.next=13,a.json();case 13:c=e.sent,console.log("confirm_otp_password",c),200===c.response_status?(u.Am.success(c.message),t(!1),g({otpCode:"",newPassword:"",confirmPassword:""}),x.push("/account/login")):(u.Am.error(c.message),t(!1),g({otpCode:"",newPassword:"",confirmPassword:""}));case 16:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,o.jsx)(m.Z,{footer:(0,o.jsx)(f.Z,{}),title:"Reset Password",children:(0,o.jsx)("section",{className:"ps-my-account ps-page--account",children:(0,o.jsx)("div",{className:"ps-container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-lg-6 offset-lg-3",children:(0,o.jsx)("div",{className:"ps-page__content",children:(0,o.jsxs)("form",{className:"ps-form--account-setting",onSubmit:N,autoComplete:"off",children:[(0,o.jsx)("div",{className:"ps-form__header",children:(0,o.jsx)("h3",{className:"text-center",children:"Reset Password"})}),(0,o.jsxs)("div",{className:"ps-form__content",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-sm-12",children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"otpCode",children:"OTP Code"}),(0,o.jsx)("input",{id:"otpCode",name:"otpCode",className:"form-control",type:"text",placeholder:"OTP Code",value:b.otpCode,onChange:_})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"newPassword",children:"New Password"}),(0,o.jsx)("input",{id:"newPassword",name:"newPassword",className:"form-control",type:"password",placeholder:"New Password",value:b.newPassword,onChange:_})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"confirmPassword",children:"Retype Password"}),(0,o.jsx)("input",{id:"confirmPassword",name:"confirmPassword",className:"form-control",type:"password",placeholder:"Confirm Password",value:b.confirmPassword,onChange:_})]})]})}),(0,o.jsx)("div",{className:"ps-form__submit",children:(0,o.jsx)("button",{className:"ps-btn success",type:"submit",disabled:r,children:"Reset Password"})})]})]})})})})})})})}},89018:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/reset-password",function(){return r(13805)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return s=89018,e(e.s=s);var s}));var s=e.O();_N_E=s}]);