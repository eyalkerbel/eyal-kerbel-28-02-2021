(this["webpackJsonpherelo-project"]=this["webpackJsonpherelo-project"]||[]).push([[0],{146:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(26),a=c.n(i),s=(c(84),c(9)),j=(c.p,c(85),c(10)),l=c(22),o=c(43),d=c(40),b=c.n(d),u=c(166),O=c(65),h=c(175),x=c(172),m=c(167),f=c(165),p=c(171),v=c(164),y=c(14),C=c(174),S="ADD_ITEMS",g="RECEIVED_ITEMS";var E=r.a.createContext(null),I=r.a.createContext(null),N=c(2);function D(e){var t=Object(y.b)(),c=Object(n.useContext)(I),i=Object(n.useContext)(E);return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsx)("td",{children:e.index}),Object(N.jsx)("td",{children:e.item.itemName}),Object(N.jsx)("td",{children:e.item.onlineStore}),Object(N.jsx)("td",{children:Math.round(Number(e.item.price)*Number(c[i])*100)/100}),Object(N.jsx)("td",{children:function(e){var t=new Date(e),c=(t.getMonth()+1)%13;return t.getDate()+"/"+c+"/"+t.getFullYear()}(e.item.date)}),Object(N.jsx)("th",{children:Object(N.jsx)(C.a,{onClick:function(){return t((c=e.item,{type:g,item:c}));var c},children:"Recived"})})]})}c(110);var w=c(48),k=c.n(w);function L(){var e=Object(y.c)((function(e){return e.items.listItems})),t=r.a.useState("false"),c=Object(s.a)(t,2),i=c[0],a=c[1],j=r.a.useState([]),l=Object(s.a)(j,2),o=l[0],d=l[1],b=Object(n.useContext)(E);Object(n.useEffect)((function(){d(e)}));var u=function(e){var t;t=o.sort((function(t,c){return t.date<c.date?-e:t.date>c.date?e:0})),d(t)};return Object(N.jsxs)(v.a,{responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:"Item Name"}),Object(N.jsx)("th",{children:"Online Store"}),Object(N.jsxs)("th",{children:["Price (",b,")"]}),Object(N.jsx)("th",{onClick:function(){var e;"asc"==i?(e="desc",u(-1)):(e="asc",u(1)),a(e)},children:"Date "})]})}),Object(N.jsx)("tbody",{children:o.map((function(e,t){return Object(N.jsx)("tr",{children:Object(N.jsx)(D,{index:t,item:e})})}))})]})}function F(e){var t=Object(n.useContext)(I),c=Object(n.useContext)(E),i=Object(y.c)((function(e){return e.items.listItems})),a=r.a.useState({amazon:0,ebey:0,aliExpress:0}),j=Object(s.a)(a,2),l=j[0],o=j[1];Object(n.useEffect)((function(){var e={amazon:0,ebey:0,aliExpress:0};i.forEach((function(t){e[t.onlineStore]=Number(e[t.onlineStore])+Number(t.price)})),o(e)}));var d=function(e){return Math.round(Number(e)*Number(t[c])*100)/100};return Object(N.jsx)("div",{children:Object(N.jsxs)(v.a,{responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Store Name"}),Object(N.jsxs)("th",{children:["price(",c,")"]})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"amazon"}),Object(N.jsx)("td",{children:d(l.amazon)})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"ebey"}),Object(N.jsx)("td",{children:d(l.ebey)})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"aliExpress"}),Object(N.jsx)("td",{children:d(l.aliExpress)})]})]})]})})}var M=c(168),P=c(169),z=c(66);function R(e){var t=e.children,c=e.value,n=e.index,r=Object(o.a)(e,["children","value","index"]);return Object(N.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:c!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),{},{children:c===n&&Object(N.jsx)(p.a,{p:3,children:Object(N.jsx)(f.a,{children:t})})}))}function T(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var _=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500}}}));function U(){var e=Object(j.f)(),t=_(),c=Object(O.a)(),n=r.a.useState(0),i=Object(s.a)(n,2),a=i[0],o=i[1];return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(h.a,{position:"static",color:"default",children:Object(N.jsxs)(x.a,{value:a,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(N.jsx)(m.a,Object(l.a)({label:"Item List"},T(0))),Object(N.jsx)(m.a,Object(l.a)({label:"Store List"},T(1)))]})}),Object(N.jsxs)(b.a,{axis:"rtl"===c.direction?"x-reverse":"x",index:a,onChangeIndex:function(e){o(e)},children:[Object(N.jsx)(R,{value:a,index:0,dir:c.direction,children:Object(N.jsx)(L,{})}),Object(N.jsx)(R,{value:a,index:1,dir:c.direction,children:Object(N.jsx)(F,{})})]})]}),Object(N.jsx)(M.a,{style:{marginTop:"10%"},children:Object(N.jsxs)(P.a,{children:[Object(N.jsxs)(z.a,{style:{justifyContent:"center",display:"flex"},children:[" ",Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return e.push("/")},children:"move to Home"})]}),Object(N.jsx)(z.a,{style:{justifyContent:"center",display:"flex"},children:Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return e.push("/Received")},children:"move to Recived"})})]})})]})}function B(e){var t=Object(n.useContext)(I),c=Object(n.useContext)(E);return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsx)("td",{children:e.index}),Object(N.jsx)("td",{children:e.item.itemName}),Object(N.jsx)("td",{children:e.item.onlineStore}),Object(N.jsx)("td",{children:Math.round(Number(e.item.price)*Number(t[c])*100)/100}),Object(N.jsx)("td",{children:function(e){var t=new Date(e),c=(t.getMonth()+1)%13;return t.getDate()+"/"+c+"/"+t.getFullYear()}(e.item.date)})]})}function G(){var e=Object(y.c)((function(e){return e.items.received})),t=r.a.useState("false"),c=Object(s.a)(t,2),i=c[0],a=c[1],j=r.a.useState([]),l=Object(s.a)(j,2),o=l[0],d=l[1],b=Object(n.useContext)(E);Object(n.useEffect)((function(){d(e)}));var u=function(e){var t;t=o.sort((function(t,c){return t.date<c.date?-e:t.date>c.date?e:0})),d(t)};return Object(N.jsxs)(v.a,{responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:"Item Name"}),Object(N.jsx)("th",{children:"Online Store"}),Object(N.jsxs)("th",{children:["Price (",b,")"]}),Object(N.jsx)("th",{onClick:function(){var e;"asc"==i?(e="desc",u(-1)):(e="asc",u(1)),a(e)},children:"Date "})]})}),Object(N.jsx)("tbody",{children:o.map((function(e,t){return Object(N.jsx)("tr",{children:Object(N.jsx)(B,{index:t,item:e})})}))})]})}function A(e){var t=Object(n.useContext)(I),c=Object(n.useContext)(E),i=Object(y.c)((function(e){return e.items.received})),a=r.a.useState({amazon:0,ebey:0,aliExpress:0}),j=Object(s.a)(a,2),l=j[0],o=j[1];Object(n.useEffect)((function(){var e={amazon:0,ebey:0,aliExpress:0};i.forEach((function(t){e[t.onlineStore]=Number(e[t.onlineStore])+Number(t.price)})),o(e)}));var d=function(e){return Math.round(Number(e)*Number(t[c])*100)/100};return Object(N.jsxs)(v.a,{responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Store Name"}),Object(N.jsxs)("th",{children:["price(",c,")"]})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"amazon"}),Object(N.jsx)("td",{children:d(l.amazon)})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"ebey"}),Object(N.jsx)("td",{children:d(l.ebey)})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"aliExpress"}),Object(N.jsx)("td",{children:d(l.aliExpress)})]})]})]})}function H(e){var t=e.children,c=e.value,n=e.index,r=Object(o.a)(e,["children","value","index"]);return Object(N.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:c!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),{},{children:c===n&&Object(N.jsx)(p.a,{p:3,children:Object(N.jsx)(f.a,{children:t})})}))}function J(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var V=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500}}}));function W(){var e=Object(j.f)(),t=V(),c=Object(O.a)(),n=r.a.useState(0),i=Object(s.a)(n,2),a=i[0],o=i[1];return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(h.a,{position:"static",color:"default",children:Object(N.jsxs)(x.a,{value:a,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(N.jsx)(m.a,Object(l.a)({label:"Item (recevied) List"},J(0))),Object(N.jsx)(m.a,Object(l.a)({label:"Store (recevied) List"},J(1)))]})}),Object(N.jsxs)(b.a,{axis:"rtl"===c.direction?"x-reverse":"x",index:a,onChangeIndex:function(e){o(e)},children:[Object(N.jsx)(H,{value:a,index:0,dir:c.direction,children:Object(N.jsx)(G,{})}),Object(N.jsx)(H,{value:a,index:1,dir:c.direction,children:Object(N.jsx)(A,{})})]})]}),Object(N.jsx)(M.a,{style:{marginTop:"10%"},children:Object(N.jsxs)(P.a,{children:[Object(N.jsxs)(z.a,{style:{justifyContent:"center",display:"flex"},children:[" ",Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return e.push("/")},children:"move to Home"})]}),Object(N.jsx)(z.a,{style:{justifyContent:"center",display:"flex"},children:Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return e.push("/list")},children:"move to List"})})]})})]})}var X=c(170),Y=c(67),q=c.n(Y);function K(){var e=Object(j.f)(),t=Object(y.b)(),c=r.a.useState(""),n=Object(s.a)(c,2),i=n[0],a=n[1],l=r.a.useState(0),o=Object(s.a)(l,2),d=o[0],b=o[1],u=r.a.useState(0),O=Object(s.a)(u,2),h=O[0],x=O[1],m=r.a.useState(null),f=Object(s.a)(m,2),p=f[0],v=f[1],g=function(){var e={itemName:i,onlineStore:d,price:h,date:p,itemID:q.a.generate()};t(function(e){return{type:S,item:e}}(e))};return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsxs)(X.a,{children:[Object(N.jsxs)(X.a.Group,{controlId:"formBasicEmail",children:[Object(N.jsx)(X.a.Label,{children:"item name"}),Object(N.jsx)(X.a.Control,{value:i,onChange:function(e){return a(e.target.value)},type:"text",placeholder:"enter item name"}),Object(N.jsx)(X.a.Text,{className:"text-muted"})]}),Object(N.jsxs)(X.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(N.jsx)(X.a.Label,{children:"Online Store"}),Object(N.jsxs)(X.a.Control,{onChange:function(e){return b(e.target.value)},as:"select",children:[Object(N.jsx)("option",{value:"amazon",children:"amazon"}),Object(N.jsx)("option",{value:"ebey",children:"Ebey"}),Object(N.jsx)("option",{value:"aliExpress",children:"Ali Express"})]})]}),Object(N.jsxs)(X.a.Group,{controlId:"formBasicPassword",children:[Object(N.jsx)(X.a.Label,{children:"price(USD)"}),Object(N.jsx)(X.a.Control,{value:h,onChange:function(e){return x(e.target.value)},type:"number",placeholder:"enter price"})]}),Object(N.jsxs)(X.a.Group,{controlId:"formBasicPassword",children:[Object(N.jsx)(X.a.Label,{children:"enter Date"}),Object(N.jsx)(X.a.Control,{onChange:function(e){return v(e.target.value)},type:"datetime-local",placeholder:"enter date"})]}),Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return g()},children:"Submit"})]}),Object(N.jsx)(M.a,{style:{marginTop:"10%"},children:Object(N.jsxs)(P.a,{children:[Object(N.jsxs)(z.a,{style:{justifyContent:"center",display:"flex"},children:[" ",Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return e.push("/list")},children:"move to List"})]}),Object(N.jsx)(z.a,{style:{justifyContent:"center",display:"flex"},children:Object(N.jsx)(C.a,{variant:"primary",onClick:function(){return e.push("/Received")},children:"move to Recived"})})]})})]})}function Q(){return Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{exact:!0,path:"/",component:K}),Object(N.jsx)(j.a,{path:"/list",component:U}),Object(N.jsx)(j.a,{path:"/Received",component:W})]})}var Z=c(30);var $=function(){var e=r.a.useState({USD:1}),t=Object(s.a)(e,2),c=t[0],i=t[1],a=r.a.useState("USD"),j=Object(s.a)(a,2),l=j[0],o=j[1];return Object(n.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,GBP,ILS").then((function(e){return e.json()})).then((function(e){i(e.rates)}))})),k()((function(){console.log("changeRate",l),o("USD"==l?"ILS":"ILS"==l?"GBP":"USD")}),1e4),Object(N.jsx)(I.Provider,{value:c,children:Object(N.jsx)(E.Provider,{value:l,children:Object(N.jsx)(Z.a,{children:Object(N.jsx)(Q,{})})})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,176)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))},te=(c(144),c(21)),ce=(c(145),c(44)),ne={listItems:[],received:[]},re=Object(te.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{listItems:[].concat(Object(ce.a)(e.listItems),[t.item]),received:[]};case g:return{listItems:Object(ce.a)(e.listItems.filter((function(e){return t.item.itemID!=e.itemID}))),received:[].concat(Object(ce.a)(e.received),[t.item])};default:return e}}}),ie=c(68),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.compose,se=Object(te.createStore)(re,ae(Object(te.applyMiddleware)(ie.a)));a.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(y.a,{store:se,children:Object(N.jsx)($,{})})}),document.getElementById("root")),ee()},84:function(e,t,c){},85:function(e,t,c){}},[[146,1,2]]]);
//# sourceMappingURL=main.f4a5d38c.chunk.js.map