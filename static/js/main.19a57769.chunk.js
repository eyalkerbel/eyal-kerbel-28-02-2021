(this["webpackJsonpherelo-project"]=this["webpackJsonpherelo-project"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(15),a=n.n(i),s=(n(51),n(9)),j=(n.p,n(52),n(6)),l=n(80),o=n(8),d=n(79),b="ADD_ITEMS",u="RECEIVED_ITEMS";var O=r.a.createContext(null),h=r.a.createContext(null),x=n(1);function m(e){var t=Object(o.b)(),n=Object(c.useContext)(h),i=Object(c.useContext)(O);return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)("td",{children:e.index}),Object(x.jsx)("td",{children:e.item.itemName}),Object(x.jsx)("td",{children:e.item.onlineStore}),Object(x.jsx)("td",{children:Math.round(Number(e.item.price)*Number(n[i])*100)/100}),Object(x.jsx)("td",{children:function(e){var t=new Date(e),n=(t.getMonth()+1)%13;return t.getDate()+"/"+n+"/"+t.getFullYear()}(e.item.date)}),Object(x.jsx)("th",{children:Object(x.jsx)(d.a,{onClick:function(){return t((n=e.item,{type:u,item:n}));var n},children:"Recived"})})]})}function f(){var e=Object(o.c)((function(e){return e.items.listItems})),t=r.a.useState("false"),n=Object(s.a)(t,2),i=n[0],a=n[1],j=r.a.useState([]),d=Object(s.a)(j,2),b=d[0],u=d[1],h=Object(c.useContext)(O);Object(c.useEffect)((function(){u(e)}),[e]);var f=function(e){var t;t=b.sort((function(t,n){return t.date<n.date?-e:t.date>n.date?e:0})),u(t)};return Object(x.jsxs)(l.a,{responsive:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Item Name"}),Object(x.jsx)("th",{children:"Online Store"}),Object(x.jsxs)("th",{children:["Price (",h,")"]}),Object(x.jsx)("th",{onClick:function(){var e;"asc"==i?(e="desc",f(-1)):(e="asc",f(1)),a(e)},children:"Date "})]})}),Object(x.jsx)("tbody",{children:b.map((function(e,t){return Object(x.jsx)("tr",{children:Object(x.jsx)(m,{index:t,item:e})})}))})]})}function p(e){var t=Object(c.useContext)(h),n={amazon:0,ebey:0,aliExpress:0},i=Object(c.useContext)(O),a=function(e){return Math.round(Number(e)*Number(t[i])*100)/100};return Object(x.jsx)("div",{children:Object(x.jsxs)(l.a,{responsive:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Store Name"}),Object(x.jsxs)("th",{children:["price(",i,")"]})]})}),Object(x.jsx)("tbody",{children:(e.itemsOriginal.forEach((function(e){n[e.onlineStore]=Number(n[e.onlineStore])+Number(e.price)})),Object(x.jsxs)(r.a.Fragment,{children:[" ",Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"amazon"}),Object(x.jsx)("td",{children:a(n.amazon)})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"ebey"}),Object(x.jsx)("td",{children:a(n.ebey)})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"aliExpress"}),Object(x.jsx)("td",{children:a(n.aliExpress)})]})]}))})]})})}var v=n(81),y=n(82),C=n(41),S=n(85),g=n(83);function I(){var e=Object(j.f)(),t=Object(o.c)((function(e){return e.items.listItems}));return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(v.a,{children:Object(x.jsx)(y.a,{children:Object(x.jsx)(C.a,{children:Object(x.jsxs)(S.a,{defaultActiveKey:"ItemList",id:"controlled-tab-example",children:[Object(x.jsx)(g.a,{eventKey:"ItemList",title:"itemList",children:Object(x.jsx)(f,{})}),Object(x.jsx)(g.a,{eventKey:"storeDetaild",title:"store Detaild",children:Object(x.jsx)(p,{itemsOriginal:t})})]})})})}),Object(x.jsx)(v.a,{style:{marginTop:"10%"},children:Object(x.jsxs)(y.a,{children:[Object(x.jsxs)(C.a,{style:{justifyContent:"center",display:"flex"},children:[" ",Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return e.push("/")},children:"move to Home"})]}),Object(x.jsx)(C.a,{style:{justifyContent:"center",display:"flex"},children:Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return e.push("/Received")},children:"move to Recived"})})]})})]})}function D(e){var t=Object(c.useContext)(h),n=Object(c.useContext)(O);return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)("td",{children:e.index}),Object(x.jsx)("td",{children:e.item.itemName}),Object(x.jsx)("td",{children:e.item.onlineStore}),Object(x.jsx)("td",{children:Math.round(Number(e.item.price)*Number(t[n])*100)/100}),Object(x.jsx)("td",{children:function(e){var t=new Date(e),n=(t.getMonth()+1)%13;return t.getDate()+"/"+n+"/"+t.getFullYear()}(e.item.date)})]})}function E(){var e=Object(o.c)((function(e){return e.items.received})),t=r.a.useState("false"),n=Object(s.a)(t,2),i=n[0],a=n[1],j=r.a.useState([]),d=Object(s.a)(j,2),b=d[0],u=d[1],h=Object(c.useContext)(O);Object(c.useEffect)((function(){u(e)}),[e]);var m=function(t){var n;n=e.sort((function(e,n){return e.date<n.date?-t:e.date>n.date?t:0})),u(n)};return Object(x.jsxs)(l.a,{responsive:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Item Name"}),Object(x.jsx)("th",{children:"Online Store"}),Object(x.jsxs)("th",{children:["Price (",h,")"]}),Object(x.jsx)("th",{onClick:function(){var e;"asc"==i?(e="desc",m(-1)):(e="asc",m(1)),a(e)},children:"Date "})]})}),Object(x.jsx)("tbody",{children:b.map((function(e,t){return Object(x.jsx)("tr",{children:Object(x.jsx)(D,{index:t,item:e})})}))})]})}function L(){var e=Object(j.f)(),t=Object(o.c)((function(e){return e.items.received}));return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(v.a,{children:Object(x.jsx)(y.a,{children:Object(x.jsx)(C.a,{children:Object(x.jsxs)(S.a,{defaultActiveKey:"ItemList",id:"controlled-tab-example",children:[Object(x.jsx)(g.a,{eventKey:"ItemList",title:"itemList",children:Object(x.jsx)(E,{})}),Object(x.jsx)(g.a,{eventKey:"storeDetaild",title:"store Detaild",children:Object(x.jsx)(p,{itemsOriginal:t})})]})})})}),Object(x.jsx)(v.a,{style:{marginTop:"10%"},children:Object(x.jsxs)(y.a,{children:[Object(x.jsxs)(C.a,{style:{justifyContent:"center",display:"flex"},children:[" ",Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return e.push("/")},children:"move to Home"})]}),Object(x.jsx)(C.a,{style:{justifyContent:"center",display:"flex"},children:Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return e.push("/list")},children:"move to List"})})]})})]})}var N=n(84),k=n(44),F=n.n(k);function w(){var e=Object(j.f)(),t=Object(o.b)(),n=r.a.useState(""),c=Object(s.a)(n,2),i=c[0],a=c[1],l=r.a.useState("amazon"),u=Object(s.a)(l,2),O=u[0],h=u[1],m=r.a.useState(0),f=Object(s.a)(m,2),p=f[0],S=f[1],g=r.a.useState(new Date),I=Object(s.a)(g,2),D=I[0],E=I[1],L=function(){var e={itemName:i,onlineStore:O,price:p,date:D,itemID:F.a.generate()};t(function(e){return{type:b,item:e}}(e))};return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(N.a.Label,{children:"item name"}),Object(x.jsx)(N.a.Control,{value:i,onChange:function(e){return a(e.target.value)},type:"text",placeholder:"enter item name"}),Object(x.jsx)(N.a.Text,{className:"text-muted"})]}),Object(x.jsxs)(N.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(x.jsx)(N.a.Label,{children:"Online Store"}),Object(x.jsxs)(N.a.Control,{onChange:function(e){return h(e.target.value)},as:"select",children:[Object(x.jsx)("option",{value:"amazon",children:"amazon"}),Object(x.jsx)("option",{value:"ebey",children:"Ebey"}),Object(x.jsx)("option",{value:"aliExpress",children:"Ali Express"})]})]}),Object(x.jsxs)(N.a.Group,{controlId:"formBasicPassword",children:[Object(x.jsx)(N.a.Label,{children:"price(USD)"}),Object(x.jsx)(N.a.Control,{value:p,onChange:function(e){return S(e.target.value)},type:"number",placeholder:"enter price"})]}),Object(x.jsxs)(N.a.Group,{controlId:"formBasicPassword",children:[Object(x.jsx)(N.a.Label,{children:"enter Date"}),Object(x.jsx)(N.a.Control,{onChange:function(e){return E(e.target.value)},type:"datetime-local",placeholder:"enter date"})]}),Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return L()},children:"Submit"})]}),Object(x.jsx)(v.a,{style:{marginTop:"10%"},children:Object(x.jsxs)(y.a,{children:[Object(x.jsxs)(C.a,{style:{justifyContent:"center",display:"flex"},children:[" ",Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return e.push("/list")},children:"move to List"})]}),Object(x.jsx)(C.a,{style:{justifyContent:"center",display:"flex"},children:Object(x.jsx)(d.a,{variant:"primary",onClick:function(){return e.push("/Received")},children:"move to Recived"})})]})})]})}function P(){return Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:w}),Object(x.jsx)(j.a,{path:"/list",component:I}),Object(x.jsx)(j.a,{path:"/Received",component:L})]})}var M=n(18),T=n(45),R=n.n(T);var _=function(){var e=r.a.useState({USD:1}),t=Object(s.a)(e,2),n=t[0],i=t[1],a=r.a.useState("USD"),j=Object(s.a)(a,2),l=j[0],o=j[1];return Object(c.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,GBP,ILS").then((function(e){return e.json()})).then((function(e){i(e.rates)}))})),R()((function(){o("USD"==l?"ILS":"ILS"==l?"GBP":"USD")}),1e4),Object(x.jsx)(h.Provider,{value:n,children:Object(x.jsx)(O.Provider,{value:l,children:Object(x.jsx)(M.a,{basename:"/eyal-kerbel-28-02-2021",children:Object(x.jsx)(P,{})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},B=(n(74),n(14)),z=(n(75),n(29)),G={listItems:[],received:[]},K=Object(B.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{listItems:[].concat(Object(z.a)(e.listItems),[t.item]),received:[]};case u:return{listItems:Object(z.a)(e.listItems.filter((function(e){return t.item.itemID!=e.itemID}))),received:[].concat(Object(z.a)(e.received),[t.item])};default:return e}}}),A=n(46),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.compose,J=Object(B.createStore)(K,H(Object(B.applyMiddleware)(A.a)));a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(o.a,{store:J,children:Object(x.jsx)(_,{})})}),document.getElementById("root")),U()}},[[76,1,2]]]);
//# sourceMappingURL=main.19a57769.chunk.js.map