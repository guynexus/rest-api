(this["webpackJsonpplexxis-react-table"]=this["webpackJsonpplexxis-react-table"]||[]).push([[0],{110:function(e,t,n){},119:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(11),s=n.n(i),o=(n(110),n(15)),l=n(12),d=n(64),j=[{Header:"ID",Footer:"ID",accessor:"id"},{Header:"Code",Footer:"Code",accessor:"code"},{Header:"Name",Footer:"Name",accessor:function(e){return"".concat(e.first_name," ").concat(e.last_name)}},{Header:"Profession",Footer:"Profession",accessor:"profession"},{Header:"Color",Footer:"Color",accessor:"color"},{Header:"City",Footer:"City",accessor:"city"},{Header:"Branch",Footer:"Branch",accessor:"branch"},{id:"Assigned",Header:"",Footer:"assigned",accessor:function(e){return 0==e.assigned?"":"assigned"}}],b=n(182),u=n(160),p=n(5),h=n(126),O=n(165),g=n(81),x=n.n(g),f=n(82),m=n.n(f),v=n(164),y=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{position:"absolute",top:100,backgroundColor:"#eee",boxShadow:e.shadows[5]}}})),C=Object(p.a)((function(e){return{root:{backgroundColor:"","&:hover":{backgroundColor:"#fde"}}}}))(v.a);function S(e){var t=y(),n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(C,{onClick:function(){s(!0)},size:"small",children:[e.edit?Object(a.jsx)(x.a,{style:{fontSize:"0.8rem"}}):Object(a.jsx)(m.a,{fontSize:"small"})," "]}),Object(a.jsx)(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:i,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500},children:Object(a.jsx)(h.a,{in:i,children:Object(a.jsx)("div",{className:t.paper,children:e.children})})})]})}var k=n(24),P=n.n(k),w=n(45),N=n(56),F=n(170),B=n(167),H=n(166),T=n(127),D=n(184),E=n(183),I={id:"",first_name:"John",last_name:"Smith",profession:"Fetchit",code:"F000",color:"Purple",city:"Mississauga",branch:"Abacus",assigned:!1},_=Object(u.a)((function(e){return{root:{},paper:{padding:e.spacing(2),textAlign:"center",backgroundColor:"#eee",alignSelf:"center"}}}));function z(e){var t=_(),n="http://localhost:8080/api/employees/",r=Object(c.useState)(e.data||I),i=Object(o.a)(r,2),s=i[0],d=i[1];function j(e){d((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(N.a)({},e.target.name,e.target.value))}))}function b(){d((function(e){return Object(l.a)(Object(l.a)({},e),{},{assigned:!e.assigned})}))}function u(e){e.preventDefault(),window.location.reload()}function p(){return(p=Object(w.a)(P.a.mark((function e(t){var a,c,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),delete(a=s).id,e.prev=3,e.next=6,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:a})});case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,d((function(){return Object(l.a)({},r.data)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function h(){return(h=Object(w.a)(P.a.mark((function e(t){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch(n+s.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:s})});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,d((function(){return Object(l.a)({},c.data)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function O(){return(O=Object(w.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch(n+s.id,{method:"DELETE"});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function g(e){return e.replace(/_/g," ").replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()}))}return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(T.a,{className:t.paper,children:Object(a.jsxs)(H.a,{container:!0,spacing:1,direction:"column",alignContent:"left",children:[Object(a.jsx)(H.a,{item:!0,xs:12,alignItems:"left",justify:"left",children:s.id?"Employee: "+s.id:"New Employee"}),Object.keys(s).map((function(e,t){return Object(a.jsx)(a.Fragment,{children:"id"===e||"deleted_at"===e||"updated_at"===e||"created_at"===e?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(H.a,{item:!0,xs:12,alignContent:"left",children:"assigned"===e?Object(a.jsx)(B.a,{alignSelf:"left",label:g(e),control:Object(a.jsx)(D.a,{alignSelf:"left",id:e,name:e,checked:s.assigned,onChange:b})}):Object(a.jsx)(E.a,{id:e,name:e,defaultValue:Object.values(s)[t],label:g(e),disabled:"code"===e||"status"===e||"updated_at"===e||"created_at"===e,onChange:j,size:"small",variant:"outlined"})})})})),Object(a.jsx)(H.a,{item:!0,xs:12,children:s.id?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F.a,{onClick:function(e){return h.apply(this,arguments)},children:"Update"}),Object(a.jsx)(F.a,{onClick:u,children:"Done"}),Object(a.jsx)(F.a,{onClick:function(e){return O.apply(this,arguments)},children:"Delete"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F.a,{onClick:function(e){return p.apply(this,arguments)},children:"Create"}),Object(a.jsx)(F.a,{onClick:u,children:"Cancel"})]})})]})})})}var A=n(171),L=n(172),R=n(176),M=n(175),G=n(173),J=n(174),U=n(128),q=Object(u.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(1)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function V(e){var t=e.caption,n=e.employees,r=q(),i=Object(c.useState)({pageSize:50,hiddenColumns:["id","color"],sortBy:[{id:"id",desc:!1}]}),s=Object(o.a)(i,2),b=s[0],u=s[1],p=Object(c.useMemo)((function(){return j}),[]),h=Object(c.useMemo)((function(){return n}),[n]),O=Object(d.useTable)({columns:p,data:h,initialState:b},d.useSortBy,d.usePagination),g=O.getTableProps,x=O.state,f=x.pageIndex,m=x.pageSize;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(T.a,{className:r.paper,children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)(L.a,Object(l.a)(Object(l.a)({},g()),{},{size:"small",className:r.table,children:[Object(a.jsx)(W,{tHooks:O,caption:t}),Q(O,n)]}))}),Y(O,u,f,m)]})})}function W(e){var t=e.tHooks,n=e.caption,c=t.headerGroups,r=q();return Object(a.jsxs)(G.a,{children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(M.a,{colSpan:2,style:{textAlign:"left"},children:Object(a.jsx)(U.a,{className:r.title,variant:"h6",id:"tableTitle",component:"div",children:n})}),Object(a.jsx)(M.a,{colSpan:6,padding:"none",style:{textAlign:"right"},children:Object(a.jsx)(S,{children:Object(a.jsx)(z,{})})})]}),c.map((function(e,t){return Object(a.jsxs)(J.a,Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:[e.headers.map((function(e){return Object(a.jsxs)(M.a,Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""]}))})),Object(a.jsx)(M.a,{})]}))}))]})}function Q(e,t){var n=e.page,c=e.prepareRow,r=e.getTableBodyProps;return Object(a.jsx)(R.a,Object(l.a)(Object(l.a)({},r()),{},{children:n.map((function(e){return c(e),Object(a.jsxs)(J.a,Object(l.a)(Object(l.a)({},e.getRowProps()),{},{hover:!0,children:[e.cells.map((function(e){return Object(a.jsx)(M.a,Object(l.a)(Object(l.a)({size:"small"},e.getCellProps()),{},{children:e.render("Cell")}))})),Object(a.jsx)(M.a,{align:"right",padding:"none",children:Object(a.jsx)(S,{edit:!0,children:Object(a.jsx)(z,{data:t[e.id]})})})]}))}))}))}function Y(e,t,n,c){var r=e.allColumns,i=e.pageOptions,s=e.setPageSize,o=e.gotoPage,d=e.canNextPage,j=e.canPreviousPage,b=e.nextPage,u=e.pageCount,p=e.previousPage;return Object(a.jsxs)("div",{align:"center",children:[Object(a.jsxs)("span",{align:"center",children:["Page"," ",n+1," of ",i.length," "]}),Object(a.jsxs)("span",{children:["| Go to page: "," ",Object(a.jsx)("input",{type:"number",min:"1",max:i.length,defaultValue:n+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;o(t)},style:{width:"32px"}}),Object(a.jsx)("select",{value:c,onChange:function(e){s(Number(e.target.value)),t((function(t){return Object(l.a)(Object(l.a)({},t),{},{pageSize:e.target.value})}))},style:{width:"80px"},children:[5,10,25,50].map((function(e){return Object(a.jsxs)("option",{value:e,children:["Show ",e]},e)}))})," "]}),Object(a.jsx)("button",{onClick:function(){return o(0)},disabled:!j,children:"<<"}),Object(a.jsx)("button",{onClick:function(){return p()},disabled:!j,children:"Previous"}),Object(a.jsx)("button",{onClick:function(){return b()},disabled:!d,children:"Next"}),Object(a.jsx)("button",{onClick:function(){return o(u-1)},disabled:!d,children:">>"}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:Object(a.jsx)("strong",{children:"COLUMNS:"})}),r.map((function(e){return Object(a.jsx)("span",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",Object(l.a)({type:"checkbox"},e.getToggleHiddenProps())),e.Header]})},e.id)}))]})}var K=n(181),X=n(185),Z=[{id:"code",numeric:!1,disablePadding:!1,label:"CODE"},{id:"first_name",numeric:!1,disablePadding:!1,label:"NAME"},{id:"profession",numeric:!1,disablePadding:!1,label:"PROFESSION"},{id:"city",numeric:!1,disablePadding:!1,label:"CITY"},{id:"branch",numeric:!1,disablePadding:!1,label:"BRANCH"}];function $(e){var t=e.classes,n=e.order,c=e.orderBy,r=e.orderByID,i=e.onRequestSort,s=e.caption;return Object(a.jsxs)(G.a,{children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(M.a,{colSpan:6,style:{textAlign:"left"},children:Object(a.jsx)(U.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:s})}),Object(a.jsx)(M.a,{colSpan:1,padding:"none",style:{textAlign:"right"},children:Object(a.jsx)(S,{children:Object(a.jsx)(z,{})})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsxs)(M.a,{padding:"none",align:"center",children:[Object(a.jsx)(v.a,{onClick:r})," "]}),Z.map((function(e){return Object(a.jsx)(M.a,{align:(e.numeric,"center"),padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n,children:Object(a.jsxs)(X.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(r=e.id,function(e){i(e,r)}),children:[e.label,c===e.id?Object(a.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r})),Object(a.jsx)(M.a,{align:"right",padding:"none"})]})]})}function ee(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function te(e,t){return"desc"===e?function(e,n){return ee(e,n,t)}:function(e,n){return-ee(e,n,t)}}function ne(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var ae=Object(u.a)((function(e){return{root:{width:"100%",backgroundColor:"#eee"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function ce(e){var t=e.employees,n=e.caption,r=0,i=ae(),s=Object(c.useState)("asc"),l=Object(o.a)(s,2),d=l[0],j=l[1],b=Object(c.useState)("id"),u=Object(o.a)(b,2),p=u[0],h=u[1],O=Object(c.useState)([]),g=Object(o.a)(O,2),x=g[0],f=g[1],m=Object(c.useState)(0),v=Object(o.a)(m,2),y=v[0],C=v[1],k=Object(c.useState)(!0),P=Object(o.a)(k,2),w=P[0],N=P[1],F=Object(c.useState)(5),B=Object(o.a)(F,2),E=B[0],I=B[1],_=function(e){N(e.target.checked)},G=E-Math.min(E,t.length-y*E);return Object(a.jsx)("div",{className:i.root,children:Object(a.jsxs)(T.a,{className:i.paper,children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)(L.a,{className:i.table,"aria-labelledby":"tableTitle",size:w?"small":"medium","aria-label":"enhanced table",children:[Object(a.jsx)($,{caption:n,classes:i,numSelected:x.length,order:d,orderBy:p,onSelectAllClick:function(e){if(e.target.checked){var n=t.map((function(e){return e.name}));f(n)}else f([])},onRequestSort:function(e,t){j(p===t&&"asc"===d?"desc":"asc"),h(t)},rowCount:t.length,orderByID:function(){return h("id")},handleChangeDense:_,dense:w}),Object(a.jsxs)(R.a,{children:[ne(t,te(d,p)).slice(y*E,y*E+E).map((function(e,t){var n,c=(n=e.name,-1!==x.indexOf(n));return Object(a.jsxs)(J.a,{hover:!0,onClick:function(t){return function(e,t){var n=x.indexOf(t),a=[];-1===n?a=a.concat(x,t):0===n?a=a.concat(x.slice(1)):n===x.length-1?a=a.concat(x.slice(0,-1)):n>0&&(a=a.concat(x.slice(0,n),x.slice(n+1))),f(a)}(0,e.name)},role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(a.jsxs)(M.a,{align:"right",padding:"none",children:["\xa0",y*E+ ++r,"\xa0"]}),Object(a.jsx)(M.a,{align:"left",children:e.code}),Object(a.jsxs)(M.a,{align:"left",children:[e.first_name," ",e.last_name]}),Object(a.jsx)(M.a,{align:"left",children:e.profession}),Object(a.jsx)(M.a,{align:"left",children:e.city}),Object(a.jsx)(M.a,{align:"left",children:e.branch}),Object(a.jsxs)(M.a,{align:"right",padding:"none",children:["\xa0\xa0",0==e.assigned?"":"assigned  ",Object(a.jsx)(S,{edit:!0,children:Object(a.jsx)(z,{data:e})})]})]},e.name)})),G>0&&Object(a.jsx)(J.a,{style:{height:(w?33:53)*G},children:Object(a.jsx)(M.a,{colSpan:6})})]})]})}),Object(a.jsxs)(H.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"flex-end",children:[Object(a.jsx)("div",{style:{display:"inline"},children:Object(a.jsx)(K.a,{padding:"none",margin:"none",rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:E,page:y,onChangePage:function(e,t){C(t)},onChangeRowsPerPage:function(e){I(parseInt(e.target.value,10)),C(0)}})}),Object(a.jsx)("div",{style:{margin:"0.8rem 0.2rem"},children:Object(a.jsx)(D.a,{checked:w,size:"small",color:"#eee",padding:"2rem",onChange:_})})]})]})})}var re=n(178),ie=n(177),se=n(83),oe=n.n(se),le=Object(u.a)((function(e){return{root:{flexGrow:1},appBar:{backgroundColor:"#ccc"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function de(){var e=le();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(re.a,{position:"fixed",className:e.appBar,children:Object(a.jsxs)(ie.a,{children:[Object(a.jsx)(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(oe.a,{})}),Object(a.jsx)(U.a,{variant:"h6",className:e.title}),Object(a.jsx)(F.a,{color:"inherit",children:"Login"})]})}),Object(a.jsx)(ie.a,{})]})}var je=n(13);var be=[n.p+"static/media/sqlite.84de32c4.svg",n.p+"static/media/express-dark.bd60c4de.png",n.p+"static/media/react-table.f32934a0.svg",n.p+"static/media/nodejs-icon-1.902e2303.png"];n(119);function ue(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/api/employees/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET"},n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),d=l[0],j=l[1],b=Object(c.useState)(null),u=Object(o.a)(b,2),p=u[0],h=u[1];function O(){return g.apply(this,arguments)}function g(){return(g=Object(w.a)(P.a.mark((function n(){var a,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,fetch(e,t);case 4:return a=n.sent,n.next=7,a.json();case 7:c=n.sent,i(c.data),j(!1),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0),h(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,12]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){O()}),[]),[r,p,d]}(),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[" ",r?Object(a.jsx)("span",{children:"loading..."}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(de,{}),Object(a.jsx)("main",{children:Object(a.jsxs)(je.c,{children:[Object(a.jsx)(je.a,{path:"/",exact:!0,children:Object(a.jsx)(ce,{caption:"Employees",employees:n})}),Object(a.jsx)(je.a,{path:"/react-table",exact:!0,children:Object(a.jsx)(V,{caption:"Employees",employees:n})}),Object(a.jsx)(je.a,{path:"/mui-table",exact:!0,children:Object(a.jsx)(ce,{caption:"Employees",employees:n})})]})}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("img",{alt:"SQLite Logo",src:be[0]}),Object(a.jsx)("img",{alt:"Express Logo",src:be[1]}),Object(a.jsx)("img",{alt:"React Table Logo",style:{margin:"0px 2px"},src:be[2]}),Object(a.jsx)("img",{alt:"Node JS Logo",src:be[3]})]})]})," "]})}var pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},he=n(179),Oe=n(86),ge=n(84),xe=n.n(ge),fe=n(85),me=n.n(fe),ve=Object(Oe.a)({palette:{primary:{main:xe.a[500]},secondary:{main:me.a[500]}}}),ye=n(74);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ye.a,{children:Object(a.jsx)(he.a,{theme:ve,children:Object(a.jsx)(ue,{})})})}),document.getElementById("root")),pe()}},[[124,1,2]]]);
//# sourceMappingURL=main.a9ab24db.chunk.js.map