(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=n(9),s=n(34),i=n(10),u=n(12),l=n.n(u),j=n(21),d=n(17),b=n.n(d),m="https://calendar-mern-ste.herokuapp.com/api/auth",O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},f="[ui] Open modal",v="[ui] Close modal",h="[event] Set Active",x="[event] Logout event",g="[event] Add New",y="[event] Clear active event",w="[event] Event updated",N="[event] Event deleted",k="[event] Event loaded",E="[auth] Finish cheking login state",S="[auth] Login",C="[auth] Logout",D=n(5),P=n(19),T=n.n(P),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:T()(e.end).toDate(),start:T()(e.start).toDate()})}))},I=function(e){return{type:g,payload:e}},_=function(){return{type:y}},L=function(e){return{type:w,payload:e}},G=function(){return{type:N}},R=function(e){return{type:k,payload:e}},J=function(){return{type:E}},V=function(e){return{type:S,payload:e}},F=function(){return function(e){localStorage.clear(),e(H()),e({type:x})}},H=function(){return{type:C}},M=n(16),U=n(25),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(M.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},c),{},Object(U.a)({},t.name,t.value)))};return[c,s,o]},q=(n(86),n(2)),z=function(){var e=Object(o.b)(),t=X({lEmail:"steven@gmail.com",lPassword:"123456"}),n=Object(M.a)(t,2),a=n[0],c=n[1],r=X({rEmail:"nando@gmail.com",rName:"nando",rPassword1:"123456",rPassword2:"123456"}),s=Object(M.a)(r,2),i=s[0],u=s[1],d=a.lEmail,m=a.lPassword,p=i.rEmail,f=i.rPassword1,v=i.rPassword2,h=i.rName;return Object(q.jsx)("div",{className:"container login-container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(q.jsx)("h3",{children:"Sign In"}),Object(q.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=d,a=m,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok&&(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime())),t(V({uid:r.uid,name:r.name}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:d,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"lPassword",value:m,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(q.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(q.jsx)("h3",{children:"Register"}),Object(q.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),f!==v)return b.a.fire("Error","Passwords are not same","error");var n,a,c;e((n=p,a=f,c=h,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:if(!(o=e.sent).ok){e.next=12;break}localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name})),e.next=13;break;case 12:return e.abrupt("return",b.a.fire("Error",o.msg,"error"));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"rName",value:h,onChange:u})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:p,onChange:u})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"rPassword1",value:f,onChange:u})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Password Confirm",name:"rPassword2",value:v,onChange:u})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"New account"})})]})]})]})})},B=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(q.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(q.jsx)("span",{className:"navbar-brand",children:e}),Object(q.jsxs)("button",{onClick:function(){t(F())},className:"btn btn-outline-danger",children:[Object(q.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(q.jsx)("span",{children:" Salir"})]})]})},W=n(51),K=(n(88),function(e){var t=e.event,n=t.title,a=t.user;return Object(q.jsxs)("div",{children:[Object(q.jsxs)("span",{children:[" ",n," "]}),Object(q.jsxs)("strong",{children:["- ",a.name]})]})}),Q=n(47),Y=n.n(Q),Z=n(48),$=n.n(Z),ee=function(){return{type:f}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ne=T()().minutes(0).seconds(0).add(1,"hours"),ae=ne.clone().add(1,"hours"),ce={title:"",notes:"",start:ne.toDate(),end:ae.toDate()},re=function(){var e=Object(a.useState)(ne.toDate()),t=Object(M.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(ae.toDate()),s=Object(M.a)(r,2),i=s[0],u=s[1],d=Object(a.useState)(!0),m=Object(M.a)(d,2),O=m[0],f=m[1],h=Object(o.c)((function(e){return e.calendar})).activeEvent,x=Object(o.c)((function(e){return e.ui})).modalOpen,g=Object(o.b)(),y=Object(a.useState)(ce),w=Object(M.a)(y,2),N=w[0],k=w[1],E=N.title,S=N.notes,C=N.start,P=N.end;Object(a.useEffect)((function(){k(h||ce)}),[k,h]);var A=function(e){var t=e.target;k(Object(D.a)(Object(D.a)({},N),{},Object(U.a)({},t.name,t.value)))},G=function(){g({type:v}),g(_()),k(ce)};return Object(q.jsxs)(Y.a,{isOpen:x,closeTimeoutMS:200,onRequestClose:G,style:te,className:"modal",overlayClassName:"modal-fondo",children:[Object(q.jsxs)("h1",{children:[" ",h?"Edit Event":"New Event"," "]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n=T()(C),a=T()(P);return n.isSameOrAfter(a)?b.a.fire("Error","The end date must be greater than the start date","error"):E.trim().length<2?f(!1):(g(h?(t=N,function(){var e=Object(j.a)(l.a.mark((function e(n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).ok?n(L(t)):b.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var c,r,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,p("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:r,name:o},n(I(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(N)),f(!0),void G())},children:[Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Start date and time"}),Object(q.jsx)($.a,{className:"form-control",onChange:function(e){c(e),k(Object(D.a)(Object(D.a)({},N),{},{start:e}))},value:n})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"End date and time"}),Object(q.jsx)($.a,{className:"form-control",onChange:function(e){u(e),k(Object(D.a)(Object(D.a)({},N),{},{end:e}))},value:i,minDate:n})]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Title and notes"}),Object(q.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"Title of event",name:"title",autoComplete:"off",value:E,onChange:A}),Object(q.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Description"})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:S,onChange:A}),Object(q.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Additional Information"})]}),Object(q.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(q.jsx)("i",{className:"far fa-save"}),Object(q.jsx)("span",{children:" Save"})]})]})]})},oe=function(){var e=Object(o.b)();return Object(q.jsx)("button",{onClick:function(){e(ee())},className:"btn btn-primary fab",children:Object(q.jsx)("i",{className:"fas fa-plus"})})},se=function(){var e=Object(o.b)();return Object(q.jsxs)("button",{onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(G()):b.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},className:"btn btn-danger fab-danger",children:[Object(q.jsx)("i",{className:"fas fa-trash"}),Object(q.jsx)("span",{children:" Delete event"})]})},ie=Object(W.b)(T.a),ue=function(){var e=Object(a.useState)(localStorage.getItem("lastView")||"month"),t=Object(M.a)(e,2),n=t[0],c=t[1],r=Object(o.b)(),s=Object(o.c)((function(e){return e.auth})).uid,i=Object(o.c)((function(e){return e.calendar})),u=i.events,d=i.activeEvent;Object(a.useEffect)((function(){r(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=A(a.events),t(R(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(q.jsxs)("div",{className:"calendar-screen",children:[Object(q.jsx)(B,{}),Object(q.jsx)(W.a,{localizer:ie,events:u,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:s===e.user._id?"#367CF7":"#455660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){r(ee())},onSelectEvent:function(e){r({type:h,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},view:n,components:{event:K},onSelectSlot:function(){r(_())},selectable:!0}),Object(q.jsx)(oe,{}),d&&Object(q.jsx)(se,{}),Object(q.jsx)(re,{})]})},le=n(37),je=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,je);return Object(q.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(D.a)({},e)):Object(q.jsx)(i.a,{to:"/login"})}}))},be=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,be);return Object(q.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(q.jsx)(i.a,{to:"/"}):Object(q.jsx)(n,Object(D.a)({},e))}}))},Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/renew",{});case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:a.uid,name:a.name}))):t(J());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(q.jsx)("h2",{children:"Wait..."}):Object(q.jsx)(s.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(i.d,{children:[Object(q.jsx)(me,{exact:!0,path:"/login",component:z,isAuthenticated:!!c}),Object(q.jsx)(de,{exact:!0,path:"/",component:ue,isAuthenticated:!!c}),Object(q.jsx)(i.a,{to:"/login"})]})})})},pe=n(30),fe=n(66),ve={checking:!0},he=n(52),xe={events:[],activeEvent:null},ge={modalOpen:!1},ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,we=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case g:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(he.a)(e.events),[t.payload])});case y:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(D.a)(Object(D.a)({},e),{},{events:Object(he.a)(t.payload)});case x:return Object(D.a)({},xe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case E:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),Ne=Object(pe.d)(we,ye(Object(pe.a)(fe.a))),ke=function(){return Object(q.jsx)(o.a,{store:Ne,children:Object(q.jsx)(Oe,{})})};n(118);r.a.render(Object(q.jsx)(ke,{}),document.getElementById("root"))},86:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.6bb41c49.chunk.js.map