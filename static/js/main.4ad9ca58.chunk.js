(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(23),r=n.n(s),i=n(7),o=n(2),j=n(3),l=(n(13),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],u=r[1],b=Object(c.useState)(!1),d=Object(j.a)(b,2),O=d[0],m=d[1],h=Object(o.f)();Object(c.useEffect)((function(){var e=localStorage.getItem("accessToken");e&&e.length>0&&h("/home")}),[]);return Object(l.jsxs)("div",{className:"loginWrapper",children:[Object(l.jsx)("div",{className:"loginBox",children:"Login"}),Object(l.jsxs)("div",{className:"username",children:[Object(l.jsx)("label",{children:"Enter Username"}),Object(l.jsx)("input",{value:n,onChange:function(e){return function(e){var t=e.target.value;a(t),m(!1)}(e)}})]}),Object(l.jsxs)("div",{className:"password",children:[Object(l.jsx)("label",{children:"Enter Password"}),Object(l.jsx)("input",{value:i,type:"password",onChange:function(e){return function(e){var t=e.target.value;u(t),m(!1)}(e)}})]}),Object(l.jsx)("button",{className:"submit",onClick:function(){return function(){if("foo"===n.toLowerCase()&&"bar"===i.toLowerCase()){var e=Math.floor(9e4*Math.random())+1e4;localStorage.setItem("accessToken",e),h("/home")}else m(!0)}()},children:"Submit"}),O&&Object(l.jsx)("div",{className:"loginerror",children:"Please enter corrent username and password"})]})},b=n(14),d=n(11),O=n.n(d),m=function(e){var t=e.data;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:t.picture.large,alt:t.name.first,className:"picture"}),Object(l.jsx)("div",{className:"userName",children:"".concat(t.name.first," ").concat(t.name.last)})]})};var h=function(){var e=Object(o.f)();return Object(l.jsx)("div",{className:"logoutWrapper",children:Object(l.jsx)("button",{className:"logout",onClick:function(){return localStorage.removeItem("accessToken"),void e("/login")},children:"Logout"})})},f=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(j.a)(s,2),i=r[0],u=r[1],d=Object(c.useState)(0),f=Object(j.a)(d,2),g=f[0],x=f[1],v=Object(c.useRef)(),p=Object(o.f)(),N=Object(c.useCallback)((function(e){i||(v.current&&v.current.disconnect(),v.current=new IntersectionObserver((function(e){e[0].isIntersecting&&x(g+1)})),e&&v.current.observe(e))}),[i]);Object(c.useEffect)((function(){var e;u(!0),setTimeout((function(){return O()({method:"GET",url:"https://randomuser.me/api/?results=15&seed=abc&inc=gender,name,email,phone,cell,id,picture",cancelToken:new O.a.CancelToken((function(t){return e=t}))}).then((function(e){var t=[].concat(Object(b.a)(n),Object(b.a)(e.data.results));a(t),u(!1)})).catch((function(e){O.a.isCancel(e)})),function(){return e()}}),1e3)}),[g]),Object(c.useEffect)((function(){var e=localStorage.getItem("accessToken");e&&e.length>0?x(g+1):p("/login")}),[]);return n&&n.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"userDetail",children:n.map((function(e,t){return n.length===t+1?Object(l.jsx)("div",{ref:N,className:"user",children:Object(l.jsx)(m,{data:e})},t):Object(l.jsx)("div",{className:"user",children:Object(l.jsx)(m,{data:e})},t)}))}),i&&Object(l.jsx)("div",{className:"loading",children:"Loading..."})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"loading",children:"Loading..."})]})},g=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{path:"login",element:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{path:"home",element:Object(l.jsx)(f,{})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),x()}},[[47,1,2]]]);
//# sourceMappingURL=main.4ad9ca58.chunk.js.map