(this["webpackJsonpmy-hooks-todo-app"]=this["webpackJsonpmy-hooks-todo-app"]||[]).push([[0],{55:function(e,t,a){e.exports=a(68)},60:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(60),a(61),a(23)),i=a(13),u=a(10);var m=a(30),s=a.n(m),d=a(69),f=a(102),E=a(107);var h=function(e,t){switch(t.type){default:return e;case"ADD":return[].concat(Object(i.a)(e),[{id:s()(),task:t.task,completed:!1}]);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(o.a)({},e,{completed:!e.completed}):e}));case"EDIT":return e.map((function(e){return e.id===t.id?Object(o.a)({},e,{task:t.newTask}):e}))}},g=[{id:1,task:"Wash the clothes",completed:!1},{id:2,task:"Iron the clothes",completed:!0}],v=Object(n.createContext)(),p=Object(n.createContext)();function O(e){var t=function(e,t,a){var r=Object(n.useReducer)(a,t,(function(){var a;try{a=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(n){a=t}return a})),c=Object(u.a)(r,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(l))}),[l]),[l,o]}("todos",g,h),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(v.Provider,{value:c},r.a.createElement(p.Provider,{value:l},e.children))}var b=function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1];return[r,function(e){c(e.target.value)},function(){c("")}]},j=a(111);var k=function(e){var t=e.task,a=e.id,c=e.toggle,l=Object(n.useContext)(p),o=b(t),i=Object(u.a)(o,3),m=i[0],s=i[1],d=i[2];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l({type:"EDIT",id:a,newTask:m}),d(),c()},style:{marginLeft:"1rem",width:"100%"}},r.a.createElement(j.a,{margin:"normal",value:m,onChange:s,fullWidth:!0,autoFocus:!0}))};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],l=function(){c(!r)};return[r,l]},w=a(103),x=a(105),C=a(112),D=a(104),S=a(43),T=a.n(S),I=a(44),W=a.n(I),G=a(106);var J=Object(n.memo)((function(e){var t=e.id,a=e.task,c=e.completed,l=Object(n.useContext)(p),o=y(!1),i=Object(u.a)(o,2),m=i[0],s=i[1];return r.a.createElement(w.a,{style:{height:"64px"}},m?r.a.createElement(k,{id:t,task:a,toggle:s}):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{tabIndex:-1,onClick:function(){return l({type:"TOGGLE",id:t})},checked:c}),r.a.createElement(x.a,{style:{textDecoration:c?"line-through":"none"}},a),r.a.createElement(G.a,null,r.a.createElement(D.a,{"aria-label":"Delete",onClick:function(){return l({type:"REMOVE",id:t})}},r.a.createElement(T.a,null)),r.a.createElement(D.a,{"aria-label":"Edit",onClick:s},r.a.createElement(W.a,null)))))}));var A=function(){var e=Object(n.useContext)(v);return e.length?r.a.createElement(d.a,null,r.a.createElement(f.a,null,e.map((function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,Object.assign({},t,{key:t.id})),a<e.length-1&&r.a.createElement(E.a,null))})))):null};function F(){var e=b(""),t=Object(u.a)(e,3),a=t[0],c=t[1],l=t[2],o=Object(n.useContext)(p);return r.a.createElement(d.a,{style:{margin:"1rem 0",padding:"0 1rem"}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"ADD",task:a}),l()}},r.a.createElement(j.a,{value:a,onChange:c,margin:"normal",label:"Add New Todo",fullWidth:!0})))}var L=a(34),N=a(108),R=a(109),B=a(110);function H(){return r.a.createElement(d.a,{style:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"},elevation:0},r.a.createElement(N.a,{color:"primary",position:"static",style:{height:"64px"}},r.a.createElement(R.a,null,r.a.createElement(L.a,{color:"inherit"},"TODOS WITH HOOKS"))),r.a.createElement(B.a,{container:!0,justify:"center",style:{marginTop:"1rem"}},r.a.createElement(B.a,{item:!0,xs:11,md:8,lg:4},r.a.createElement(O,null,r.a.createElement(F,null),r.a.createElement(A,null)))))}var M=function(){return r.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.418ee391.chunk.js.map