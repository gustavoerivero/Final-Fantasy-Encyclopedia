(this["webpackJsonpfinalfantasy-project"]=this["webpackJsonpfinalfantasy-project"]||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),s=a.n(i),r=a(37),l=a(12),j=a(105),o=Object(j.a)({overrides:{MuiCssBaseline:{"@global":{body:{scrollbarColor:"#f5f7ff #c0d3fc","&::-webkit-scrollbar, & *::-webkit-scrollbar":{backgroundColor:"black"},"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":{borderRadius:1,backgroundColor:"#2A0944",minHeight:10,border:".5px solid black"},"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":{backgroundColor:"#2A0944"},"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":{backgroundColor:"#2A0944"},"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":{backgroundColor:"#2A0944"},"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":{backgroundColor:"#2A0944"}}}}},palette:{primary:{light:"#6fedf7",main:"#32C1CD",dark:"#18868f"},secondary:{light:"#c94040",main:"#BC8CF2",dark:"#380101"},text:{primary:"#FFFFFF",secondary:"#d500f9",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},background:{paper:"#544179",default:"#2A0944"}},typography:{fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif","Krona One","Space Mono"]}}),b=a(195),d=a(196),h=a(49),x=a(96),O=a(50),u=a(78),m=a(97),p=a.n(m),f=a(79),g=a(80),v="TOGGLE_FAVORITE",k={favorites:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;if(t.type===v){var a=t.payload,n=e.favorites.find((function(e){return a.id===e.id}));return Object(g.a)(Object(g.a)({},e),{},{favorites:n?Object(f.a)(e.favorites.filter((function(e){return e.id!==n.id}))):[].concat(Object(f.a)(e.favorites),[t.payload])})}return e},N={key:"root",storage:p.a},y=Object(u.a)(N,w),C=Object(O.b)(y),F=Object(u.b)(C),A=a(181),S=a(183),E=a(109),I=a(179),B=a(2),P=Object(I.a)((function(e){return{AppBar:{backgroundColor:"black"},Link:{textDecoration:"none"},title:{cursor:"pointer",color:"white",fontFamily:"Krona One"}}}));function W(){var e=P();return Object(B.jsx)(A.a,{position:"fixed",className:e.AppBar,children:Object(B.jsxs)(S.a,{children:[Object(B.jsx)(r.b,{to:"/Final-Fantasy-Encyclopedia",className:e.Link,children:Object(B.jsx)(E.a,{className:e.title,variant:"h6",children:"Final Fantasy Encyclopedia"})}),Object(B.jsx)(E.a,{style:{marginLeft:15,color:"white"},children:"/"}),Object(B.jsx)(r.b,{to:"/favorites",className:e.Link,children:Object(B.jsx)(E.a,{className:e.title,variant:"subtitle1",style:{marginLeft:15},children:"Favorites"})})]})})}var D=a(198),H=a(184),L=a(185),z=a(101),G=a.n(z),M=a(100),R=a.n(M),J=a(102),T=a.n(J),q=Object(I.a)((function(e){return{footer:{backgroundColor:"black",margin:"1em 0em 0em 0em",paddingTop:"2.5em",width:"100vw",minHeight:"12em",alignContent:"center",alignItems:"center",alignSelf:"center"},gitHub:{color:"white",width:"30px",height:"30px","&:hover":{color:"gray"}},instagram:{color:"white",width:"30px",height:"30px","&:hover":{color:"#d5303e"}},facebook:{color:"white",width:"30px",height:"30px","&:hover":{color:"#3b5998"}}}}));function K(){var e=q();return Object(B.jsx)(A.a,{position:"static",className:e.footer,children:Object(B.jsx)(D.a,{children:Object(B.jsxs)(H.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(L.a,{href:"https://www.facebook.com/goosecode",children:Object(B.jsx)(E.a,{children:Object(B.jsx)(R.a,{className:e.facebook})})})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(L.a,{href:"https://www.instagram.com/gustavoerivero",children:Object(B.jsx)(E.a,{children:Object(B.jsx)(G.a,{className:e.instagram})})})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(L.a,{href:"https://github.com/gustavoerivero",children:Object(B.jsx)(E.a,{children:Object(B.jsx)(T.a,{className:e.gitHub})})})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{style:{color:"white"},variant:"body2",align:"center",children:["\xa9 Gustavo Rivero | 2021",Object(B.jsx)("br",{}),Object(B.jsx)(L.a,{href:"https://www.moogleapi.com/",children:Object(B.jsx)(E.a,{style:{color:"gray",paddingBottom:"2em"},variant:"caption",children:"moogleAPI"})})]})})]})})})}var V=a(22),_=a(32),Q=a.n(_),U=a(197),X=a(190),Y=a(108),Z=a(199),$=a(191),ee=a(192),te=a(193),ae=a(186),ne=a(187),ce=a(188),ie=Object(I.a)((function(e){return{card:{cursor:"pointer",color:"white","&:hover":{backgroundColor:e.palette.primary.main}},cardMedia:{margin:"auto",width:100,height:100},cardContent:{textAlign:"center"},link:{textDecoration:"none"}}}));function se(e){var t=e.character,a=e.picture,n=t.id,c=t.name,i=ie();return Object(B.jsx)(H.a,{item:!0,xs:6,sm:4,md:2,children:Object(B.jsx)(r.b,{to:"/character/".concat(c),className:i.link,children:Object(B.jsxs)(ae.a,{className:i.card,elevation:5,id:n,children:[Object(B.jsx)(ne.a,{image:a,className:i.cardMedia}),Object(B.jsx)(ce.a,{className:i.cardContent,children:Object(B.jsx)(E.a,{children:Object(B.jsx)("b",{children:c})})})]})})})}var re=a(25),le=a(200),je=a(189),oe=a(53),be=a.n(oe),de=a(54),he=a.n(de),xe=Object(I.a)((function(e){return{root:{maxWidth:"100vw",flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,maxWidth:"50vw",overflow:"hidden",width:"100%",alignItems:"center",alignContent:"center"},span:{fontWeight:"bold",textShadow:"1.5px 1.5px 1.5px #2A0944",fontSize:18,color:e.palette.secondary.main}}}));function Oe(e){var t=e.props,a=xe(),n=Object(re.a)(),i=c.a.useState(0),s=Object(V.a)(i,2),r=s[0],l=s[1],j=t.length;return Object(B.jsxs)("div",{className:a.root,children:[Object(B.jsx)(Y.a,{elevation:5,className:a.header,children:Object(B.jsx)(E.a,{children:Object(B.jsx)("b",{children:t[r].name})})}),Object(B.jsx)(Y.a,{square:!0,children:Object(B.jsxs)(H.a,{container:!0,spacing:2,children:[Object(B.jsx)(H.a,{item:!0,xs:12,sm:12,md:6,children:Object(B.jsx)("img",{className:a.img,src:t[r].picture?t[r].picture:null,alt:t[r].name})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:12,md:6,children:Object(B.jsxs)(H.a,{container:!0,children:[Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Japanese name: "})})," ",t[r].japaneseName]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Description: "})})," ",t[r].description]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Elemental Affinity: "})})," ",t[r].elementalAffinity]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Elemental Weakness: "})})," ",t[r].elementalWeakness]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Hit Points: "})})," ",t[r].hitPoints]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Mana Points: "})})," ",t[r].manaPoints]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Attack: "})})," ",t[r].attack]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Defense: "})})," ",t[r].defense]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Game: "})})," ",t[r].game]})})]})})]})}),Object(B.jsx)(le.a,{steps:j,position:"static",variant:"text",activeStep:r,nextButton:Object(B.jsxs)(je.a,{size:"small",onClick:function(){l((function(e){return e+1}))},disabled:r===j-1,children:["Next","rtl"===n.direction?Object(B.jsx)(be.a,{}):Object(B.jsx)(he.a,{})]}),backButton:Object(B.jsxs)(je.a,{size:"small",onClick:function(){l((function(e){return e-1}))},disabled:0===r,children:["rtl"===n.direction?Object(B.jsx)(he.a,{}):Object(B.jsx)(be.a,{}),"Back"]})})]})}var ue=Object(I.a)((function(e){return{root:{maxWidth:"100vw",flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,maxWidth:"50vw",overflow:"hidden",width:"100%",alignItems:"center",alignContent:"center"},span:{fontWeight:"bold",textShadow:"1.5px 1.5px 1.5px #2A0944",fontSize:18,color:e.palette.secondary.main}}}));function me(e){var t=e.props,a=ue(),n=Object(re.a)(),i=c.a.useState(0),s=Object(V.a)(i,2),r=s[0],l=s[1],j=t.length;return Object(B.jsxs)("div",{className:a.root,children:[Object(B.jsx)(Y.a,{elevation:5,className:a.header,children:Object(B.jsx)(E.a,{children:Object(B.jsx)("b",{children:t[r].title})})}),Object(B.jsx)(Y.a,{square:!0,children:Object(B.jsxs)(H.a,{container:!0,spacing:2,children:[Object(B.jsx)(H.a,{item:!0,xs:12,sm:12,md:6,children:Object(B.jsx)("img",{className:a.img,src:t[r].picture?t[r].picture:null,alt:t[r].title})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:12,md:6,children:Object(B.jsxs)(H.a,{container:!0,children:[Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Platform: "})})," ",t[r].platform]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Release Date: "})})," ",t[r].releaseDate]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:a.span,children:Object(B.jsx)("b",{children:"Description: "})})," ",t[r].description]})})]})})]})}),Object(B.jsx)(le.a,{steps:j,position:"static",variant:"text",activeStep:r,nextButton:Object(B.jsxs)(je.a,{size:"small",onClick:function(){l((function(e){return e+1}))},disabled:r===j-1,children:["Next","rtl"===n.direction?Object(B.jsx)(be.a,{}):Object(B.jsx)(he.a,{})]}),backButton:Object(B.jsxs)(je.a,{size:"small",onClick:function(){l((function(e){return e-1}))},disabled:0===r,children:["rtl"===n.direction?Object(B.jsx)(he.a,{}):Object(B.jsx)(be.a,{}),"Back"]})})]})}var pe="https://www.moogleapi.com/api/v1/",fe=function(e){return pe+"characters/search?name=".concat(e)},ge=a(73),ve=a.n(ge),ke=a(103),we=a.n(ke);a(76);function Ne(){var e=Object(I.a)((function(e){return{container:{textAlign:"center",padding:"80px 10px 0px 10px",minHeight:"72vh"}}}))(),t=Object(n.useState)(null),a=Object(V.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(null),r=Object(V.a)(s,2),l=r[0],j=r[1],o=Object(n.useState)(null),b=Object(V.a)(o,2),d=b[0],h=b[1],x=Object(n.useState)(null),O=Object(V.a)(x,2),u=O[0],m=O[1];return Object(n.useEffect)((function(){var e;null===u||""===u?(Q.a.get(pe+"characters").then((function(e){if(e.status>=200&&e.status<300){var t=[];e.data.forEach((function(e,a){var n={id:++a,name:e.name,picture:e.pictures[0]?e.pictures[0].url:null};t.push(n)})),i(t)}})),Q.a.get(pe+"monsters").then((function(e){if(e.status>=200&&e.status<300){var t=[];e.data.forEach((function(e,a){var n={id:++a,name:e.name,japaneseName:e.japaneseName,description:e.description,elementalAffinity:e.elementalAffinity,elementalWeakness:e.elementalWeakness,hitPoints:e.hitPoints,manaPoints:e.manaPoints,attack:e.attack,defense:e.defense,game:e.game,picture:e.picture?e.picture:null};t.push(n)})),j(t)}})),Q.a.get(pe+"games").then((function(e){if(e.status>=200&&e.status<300){var t=[];e.data.forEach((function(e,a){var n={id:++a,title:e.title,platform:e.platform,releaseDate:e.releaseDate,description:e.description,picture:e.picture?e.picture:null};t.push(n)})),h(t)}}))):(Q.a.get(fe(u)).then((function(e){if(e.status>=200&&e.status<300){var t=[];e.data.forEach((function(e,a){var n={id:++a,name:e.name,picture:e.pictures[0]?e.pictures[0].url:null};t.push(n)})),i(t)}})),Q.a.get((e=u,pe+"monsters/search?name=".concat(e))).then((function(e){if(e.status>=200&&e.status<300){var t=[];e.data.forEach((function(e,a){var n={id:++a,name:e.name,picture:e.picture?e.picture:null};t.push(n)})),j(t)}})),Q.a.get(pe+"games").then((function(e){if(e.status>=200&&e.status<300){var t=[];e.data.forEach((function(e,a){var n={id:++a,title:e.title,picture:e.picture?e.picture:null};t.push(n)})),h(t)}})))}),[u]),Object(B.jsx)(D.a,{children:c&&l&&d?Object(B.jsxs)(H.a,{container:!0,spacing:1,className:e.container,justifyContent:"center",alignContent:"flex-start",children:[Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(U.a,{variant:"outlined",fullWidth:!0,label:"Filter the information about Final Fantasy that you want to find.",onChange:function(e){return m(e.target.value)},InputProps:{startAdornment:Object(B.jsx)(X.a,{position:"start",children:Object(B.jsx)(we.a,{})})}})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(Y.a,{elevation:0,variant:"outlined",children:Object(B.jsxs)(H.a,{container:!0,spacing:1,children:[Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(Z.a,{children:[Object(B.jsx)($.a,{expandIcon:Object(B.jsx)(ve.a,{}),children:Object(B.jsx)(E.a,{children:"Characters"})}),Object(B.jsx)(ee.a,{children:Object(B.jsx)(H.a,{container:!0,spacing:2,children:c.map((function(e,t){return Object(B.jsx)(se,{character:e,picture:e.picture},t)}))})})]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(Z.a,{children:[Object(B.jsx)($.a,{expandIcon:Object(B.jsx)(ve.a,{}),children:Object(B.jsx)(E.a,{children:"Monsters"})}),Object(B.jsx)(ee.a,{children:Object(B.jsx)(H.a,{container:!0,spacing:2,children:Object(B.jsx)(H.a,{item:!0,xs:12,children:l.length>0?Object(B.jsx)(Oe,{props:l}):null})})})]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(Z.a,{children:[Object(B.jsx)($.a,{expandIcon:Object(B.jsx)(ve.a,{}),children:Object(B.jsx)(E.a,{children:"Games"})}),Object(B.jsx)(ee.a,{children:Object(B.jsx)(H.a,{container:!0,spacing:2,children:Object(B.jsx)(H.a,{item:!0,xs:12,children:d.length>0?Object(B.jsx)(me,{props:d}):null})})})]})})]})})})]}):Object(B.jsx)(H.a,{container:!0,alignItems:"center",justifyContent:"center",alignContent:"center",className:e.container,children:Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(te.a,{})})})})}var ye=a(194),Ce=a(153),Fe=a(104),Ae=a.n(Fe);var Se=Object(h.b)((function(e){return{favorites:e.favorites}}),(function(e){return{toggleFavorite:function(t){return e(function(e){return{type:v,payload:e}}(t))}}}))((function(e){var t=Object(I.a)((function(e){return{container:{textAlign:"center",padding:"70px 10px 0px 10px",minHeight:"75vh"},paper:{minHeight:"80vh",minWidth:"85vw",padding:20},title:{fontFamily:"Space Mono",textShadow:"1.5px 1.5px 1.5px #2A0944"},image:{height:"45vh"},fav:{height:50,width:50},span:{fontWeight:"bold",textShadow:"1.5px 1.5px 1.5px #2A0944",fontSize:18,color:e.palette.secondary.main}}}))(),a=Object(n.useState)(null),c=Object(V.a)(a,2),i=c[0],s=c[1],r=Object(l.f)().name;return Object(n.useEffect)((function(){Q.a.get(fe(r)).then((function(e){e.status>=200&&e.status<300&&s(e.data[0])})).catch((function(e){return console.log("Error: ",e)}))}),[r]),Object(B.jsx)("div",{children:Object(B.jsx)(H.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,className:t.container,children:i?Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(Y.a,{elevation:5,className:t.paper,children:Object(B.jsxs)(H.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(E.a,{variant:"h4",component:"h2",className:t.title,children:i.name})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(ye.a,{})}),Object(B.jsx)(H.a,{item:!0,xs:12,md:8,children:Object(B.jsxs)(H.a,{container:!0,children:[Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Japanese name: "})})," ",i.japaneseName]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Description: "})})," ",i.description]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Job: "})})," ",i.job]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Origin: "})})," ",i.origin]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Race: "})})," ",i.race]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Gender: "})})," ",i.gender]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Age: "})})," ",i.age]})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsxs)(E.a,{align:"left",children:[Object(B.jsx)("span",{className:t.span,children:Object(B.jsx)("b",{children:"Height: "})})," ",i.height]})})]})}),Object(B.jsx)(H.a,{item:!0,xs:12,md:4,children:Object(B.jsx)("img",{src:i.pictures[0]?i.pictures[0].url:null,className:t.image,alt:i.name})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(ye.a,{})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(Ce.a,{className:t.fav,onClick:function(){return e.toggleFavorite(i)},children:Object(B.jsx)(Ae.a,{style:{fontSize:50,color:function(t){var a=!1;return e.favorites.map((function(e){return a=e.id===t.id})),a}(i)?"red":"white"}})})})]})})}):Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(te.a,{})})})})}));var Ee=Object(h.b)((function(e){return{favorites:e.favorites}}),(function(e){return{}}))((function(e){var t=Object(I.a)((function(e){return{container:{textAlign:"center",padding:"70px 10px 0px 10px",minHeight:"75vh"}}}))();return Object(B.jsx)(D.a,{children:Object(B.jsx)(H.a,{container:!0,spacing:2,className:t.container,children:e.favorites.map((function(e,t){return Object(B.jsx)(se,{character:e,picture:e.pictures[0]?e.pictures[0].url:null},t)}))})})}));function Ie(){return Object(B.jsx)(h.a,{store:C,children:Object(B.jsx)(x.a,{loading:null,persistor:F,children:Object(B.jsx)(b.a,{theme:o,children:Object(B.jsxs)(r.a,{children:[Object(B.jsx)(d.a,{}),Object(B.jsx)(W,{}),Object(B.jsx)(l.b,{exact:!0,path:"/Final-Fantasy-Encyclopedia",component:Ne}),Object(B.jsx)(l.b,{exact:!0,path:"/character/:name",component:Se}),Object(B.jsx)(l.b,{exact:!0,path:"/favorites",component:Ee}),Object(B.jsx)(l.a,{from:"*",to:"/Final-Fantasy-Encyclopedia"}),Object(B.jsx)(K,{})]})})})})}var Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,203)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(Ie,{})}),document.getElementById("root")),Be()},76:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.f5ddd5f3.chunk.js.map