"use strict";(self.webpackChunkvcube=self.webpackChunkvcube||[]).push([[4455],{49277:(e,n,i)=>{i.d(n,{A:()=>r});var t=i(66734),a=i(70579);const r=(0,t.A)((0,a.jsx)("path",{d:"M11 3.18v17.64c0 .64-.59 1.12-1.21.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8c.62-.14 1.21.34 1.21.98m2.03 0v6.81c0 .55.45 1 1 1h6.79c.64 0 1.12-.59.98-1.22-.85-3.76-3.8-6.72-7.55-7.57-.63-.14-1.22.34-1.22.98m0 10.83v6.81c0 .64.59 1.12 1.22.98 3.76-.85 6.71-3.82 7.56-7.58.14-.62-.35-1.22-.98-1.22h-6.79c-.56.01-1.01.46-1.01 1.01"}),"PieChartRounded")},80774:(e,n,i)=>{i.d(n,{A:()=>r});var t=i(66734),a=i(70579);const r=(0,t.A)((0,a.jsx)("path",{d:"m3.4 20.4 17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91"}),"SendRounded")},77748:(e,n,i)=>{i.d(n,{r:()=>R});var t=i(58168),a=i(98587),r=i(65043),s=i(34535),d=i(75166),l=i(88297),o=i(73880),u=i(65650),c=i(22983),g=i(70579);const h=["width","height","margin","title","desc","value","valueMin","valueMax","startAngle","endAngle","outerRadius","innerRadius","cornerRadius","cx","cy","children"],A=(0,s.Ay)("div",{name:"MuiGauge",slot:"Container"})((e=>{let{ownerState:n,theme:i}=e;return{width:n.width??"100%",height:n.height??"100%",display:"flex",position:"relative",flexGrow:1,flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden","&>svg":{width:"100%",height:"100%"},"& text":{fill:(i.vars||i).palette.text.primary}}})),R=r.forwardRef((function(e,n){const{width:i,height:s,margin:R,title:p,desc:x,value:f,valueMin:m=0,valueMax:y=100,startAngle:v,endAngle:b,outerRadius:M,innerRadius:P,cornerRadius:F,cx:L,cy:k,children:w}=e,j=(0,a.A)(e,h),{containerRef:I,width:N,height:C}=(0,l.q)(i,s),H=r.useRef(null),T=(0,d.A)(n,H);return(0,g.jsx)(A,(0,t.A)({ref:I,ownerState:{width:i,height:s},role:"meter","aria-valuenow":null===f?void 0:f,"aria-valuemin":m,"aria-valuemax":y},j,{children:N&&C?(0,g.jsx)(u.QN,{width:N,height:C,margin:(0,t.A)({left:10,right:10,top:10,bottom:10},R),svgRef:H,children:(0,g.jsx)(c.pu,{value:f,valueMin:m,valueMax:y,startAngle:v,endAngle:b,outerRadius:M,innerRadius:P,cornerRadius:F,cx:L,cy:k,children:(0,g.jsx)(o.B,{width:N,height:C,ref:T,title:p,desc:x,disableAxisListener:!0,"aria-hidden":"true",children:w})})}):null}))}))},22983:(e,n,i)=>{i.d(n,{pu:()=>o,_Q:()=>u});var t=i(65043),a=i(58716);function r(e){const n=function(e){return Math.PI*e/180}(e);return[Math.sin(n),-Math.cos(n)]}var s=i(70713),d=i(70579);const l=t.createContext({value:null,valueMin:0,valueMax:0,startAngle:0,endAngle:0,innerRadius:0,outerRadius:0,cornerRadius:0,cx:0,cy:0,maxRadius:0,valueAngle:null});function o(e){const{value:n=null,valueMin:i=0,valueMax:o=100,startAngle:u=0,endAngle:c=360,outerRadius:g,innerRadius:h,cornerRadius:A,cx:R,cy:p,children:x}=e,{left:f,top:m,width:y,height:v}=(0,s.N)(),b=function(e,n){const i=[[0,0],r(e),r(n)],t=Math.min(e,n),a=Math.max(e,n),s=90*Math.floor(t/90);for(let c=1;c<=4;c+=1){const e=s+90*c;e<a&&i.push(r(e))}const d=Math.min(...i.map((e=>{let[n]=e;return n}))),l=Math.max(...i.map((e=>{let[n]=e;return n}))),o=Math.min(...i.map((e=>{let[,n]=e;return n}))),u=Math.max(...i.map((e=>{let[,n]=e;return n})));return{cx:-d/(l-d),cy:-o/(u-o),minX:d,maxX:l,minY:o,maxY:u}}(u,c),M=R?(0,a.c)(R,y):b.cx*y,P=p?(0,a.c)(p,v):b.cy*v;let F=f+M,L=m+P;const k=function(e,n,i,t,a){let{minX:r,maxX:s,minY:d,maxY:l}=a;return Math.min(...[{ratio:Math.abs(r),space:e},{ratio:Math.abs(s),space:i-e},{ratio:Math.abs(d),space:n},{ratio:Math.abs(l),space:t-n}].map((e=>{let{ratio:n,space:i}=e;return n<1e-5?1/0:i/n})))}(M,P,y,v,b);if(void 0===R){const e=k*(b.maxX-b.minX);F=f+(y-e)/2+b.cx*e}if(void 0===p){const e=k*(b.maxY-b.minY);L=m+(v-e)/2+b.cy*e}const w=(0,a.c)(g??k,k),j=(0,a.c)(h??"80%",k),I=(0,a.c)(A??0,w-j),N=t.useMemo((()=>{const e=Math.PI*u/180,t=Math.PI*c/180;return{value:n,valueMin:i,valueMax:o,startAngle:e,endAngle:t,outerRadius:w,innerRadius:j,cornerRadius:I,cx:F,cy:L,maxRadius:k,valueAngle:null===n?null:e+(t-e)*(n-i)/(o-i)}}),[n,i,o,u,c,w,j,I,F,L,k]);return(0,d.jsx)(l.Provider,{value:N,children:x})}function u(){return t.useContext(l)}},61320:(e,n,i)=>{i.d(n,{z:()=>o});var t=i(58168),a=(i(65043),i(45453)),r=i(34535),s=i(22983),d=i(70579);const l=(0,r.Ay)("path",{name:"MuiGauge",slot:"ReferenceArc",overridesResolver:(e,n)=>n.referenceArc})((e=>{let{theme:n}=e;return{fill:(n.vars||n).palette.divider}}));function o(e){const{startAngle:n,endAngle:i,outerRadius:r,innerRadius:o,cornerRadius:u,cx:c,cy:g}=(0,s._Q)();return(0,d.jsx)(l,(0,t.A)({transform:`translate(${c}, ${g})`,d:(0,a.A)().cornerRadius(u)({startAngle:n,endAngle:i,innerRadius:o,outerRadius:r})},e))}},97516:(e,n,i)=>{i.d(n,{D:()=>o});var t=i(58168),a=(i(65043),i(45453)),r=i(34535),s=i(22983),d=i(70579);const l=(0,r.Ay)("path",{name:"MuiGauge",slot:"ReferenceArc",overridesResolver:(e,n)=>n.referenceArc})((e=>{let{theme:n}=e;return{fill:(n.vars||n).palette.primary.main}}));function o(e){const{value:n,valueMin:i,valueMax:r,startAngle:o,endAngle:u,outerRadius:c,innerRadius:g,cornerRadius:h,cx:A,cy:R}=(0,s._Q)();if(null===n)return null;const p=o+(n-i)/(r-i)*(u-o);return(0,d.jsx)(l,(0,t.A)({transform:`translate(${A}, ${R})`,d:(0,a.A)().cornerRadius(h)({startAngle:o,endAngle:p,innerRadius:g,outerRadius:c})},e))}},63388:(e,n,i)=>{i.d(n,{r:()=>K});var t=i(58168),a=i(98587),r=i(65043),s=i(8295),d=i(72876),l=i(13443),o=i(84999),u=i(62886),c=i(30532),g=i(8782),h=i(41827),A=i(65650),R=i(8696),p=i(45453),x=i(19854),f=i(3375),m=i(34535),y=i(75248),v=i(43883),b=i(70579);const M=["classes","color","cornerRadius","dataIndex","endAngle","id","innerRadius","isFaded","isHighlighted","onClick","outerRadius","paddingAngle","startAngle","highlightScope"];function P(e){return(0,f.Ay)("MuiPieArc",e)}(0,y.A)("MuiPieArc",["root","highlighted","faded"]);const F=(0,m.Ay)(R.CS.path,{name:"MuiPieArc",slot:"Root",overridesResolver:(e,n)=>n.arc})((e=>{let{theme:n}=e;return{stroke:(n.vars||n).palette.background.paper,strokeWidth:1,strokeLinejoin:"round"}}));function L(e){const{classes:n,color:i,cornerRadius:r,dataIndex:s,endAngle:d,id:l,innerRadius:o,isFaded:u,isHighlighted:c,onClick:g,outerRadius:h,paddingAngle:A,startAngle:f}=e,m=(0,a.A)(e,M),y={id:l,dataIndex:s,classes:n,color:i,isFaded:u,isHighlighted:c},L=(e=>{const{classes:n,id:i,isFaded:t,isHighlighted:a}=e,r={root:["root",`series-${i}`,a&&"highlighted",t&&"faded"]};return(0,x.A)(r,P,n)})(y),k=(0,v.D)();return(0,b.jsx)(F,(0,t.A)({d:(0,R.to)([f,d,A,o,h,r],((e,n,i,t,a,r)=>(0,p.A)().cornerRadius(r)({padAngle:i,startAngle:e,endAngle:n,innerRadius:t,outerRadius:a}))),visibility:(0,R.to)([f,d],((e,n)=>e===n?"hidden":"visible")),onClick:g,cursor:g?"pointer":"unset",ownerState:y,className:L.root},m,k({type:"pie",seriesId:l,dataIndex:s})))}const k={keys:e=>e.id,from:e=>{let{innerRadius:n,outerRadius:i,cornerRadius:t,startAngle:a,endAngle:r,paddingAngle:s,color:d,isFaded:l}=e;return{innerRadius:n,outerRadius:(n+i)/2,cornerRadius:t,startAngle:(a+r)/2,endAngle:(a+r)/2,paddingAngle:s,fill:d,opacity:l?.3:1}},leave:e=>{let{innerRadius:n,startAngle:i,endAngle:t}=e;return{innerRadius:n,outerRadius:n,startAngle:(i+t)/2,endAngle:(i+t)/2}},enter:e=>{let{innerRadius:n,outerRadius:i,startAngle:t,endAngle:a}=e;return{innerRadius:n,outerRadius:i,startAngle:t,endAngle:a}},update:e=>{let{innerRadius:n,outerRadius:i,cornerRadius:t,startAngle:a,endAngle:r,paddingAngle:s,color:d,isFaded:l}=e;return{innerRadius:n,outerRadius:i,cornerRadius:t,startAngle:a,endAngle:r,paddingAngle:s,fill:d,opacity:l?.3:1}},config:{tension:120,friction:14,clamp:!0}},w={keys:e=>e.id,from:e=>{let{innerRadius:n,outerRadius:i,arcLabelRadius:t,cornerRadius:a,startAngle:r,endAngle:s,paddingAngle:d}=e;return{innerRadius:n,outerRadius:(n+i)/2,cornerRadius:a,arcLabelRadius:t,startAngle:(r+s)/2,endAngle:(r+s)/2,paddingAngle:d,opacity:0}},leave:e=>{let{innerRadius:n,startAngle:i,endAngle:t}=e;return{innerRadius:n,outerRadius:n,arcLabelRadius:n,startAngle:(i+t)/2,endAngle:(i+t)/2,opacity:0}},enter:e=>{let{innerRadius:n,outerRadius:i,startAngle:t,endAngle:a,arcLabelRadius:r}=e;return{innerRadius:n,outerRadius:i,startAngle:t,endAngle:a,arcLabelRadius:r,opacity:1}},update:e=>{let{innerRadius:n,outerRadius:i,cornerRadius:t,startAngle:a,endAngle:r,paddingAngle:s,arcLabelRadius:d}=e;return{innerRadius:n,outerRadius:i,cornerRadius:t,startAngle:a,endAngle:r,paddingAngle:s,arcLabelRadius:d,opacity:1}},config:{tension:120,friction:14,clamp:!0}};var j=i(27999);function I(e){const{id:n,data:i,faded:a,highlighted:s,paddingAngle:d=0,innerRadius:l=0,arcLabelRadius:o,outerRadius:u,cornerRadius:c=0}=e,{isFaded:g,isHighlighted:h}=(0,j.Z)();return r.useMemo((()=>i.map(((e,i)=>{const r={seriesId:n,dataIndex:i},A=h(r),R=!A&&g(r),p=(0,t.A)({additionalRadius:0},R&&a||A&&s||{}),x=Math.max(0,Math.PI*(p.paddingAngle??d)/180),f=Math.max(0,p.innerRadius??l),m=Math.max(0,p.outerRadius??u+p.additionalRadius),y=p.cornerRadius??c,v=p.arcLabelRadius??o??(f+m)/2;return(0,t.A)({},e,p,{isFaded:R,isHighlighted:A,paddingAngle:x,innerRadius:f,outerRadius:m,cornerRadius:y,arcLabelRadius:v})}))),[c,l,u,d,o,i,a,s,g,h,n])}const N=["slots","slotProps","innerRadius","outerRadius","cornerRadius","paddingAngle","id","highlighted","faded","data","onItemClick","skipAnimation"],C=["startAngle","endAngle","paddingAngle","innerRadius","arcLabelRadius","outerRadius","cornerRadius"];function H(e){const{slots:n,slotProps:i,innerRadius:r=0,outerRadius:s,cornerRadius:d=0,paddingAngle:l=0,id:o,highlighted:u,faded:c={additionalRadius:-5},data:g,onItemClick:h,skipAnimation:A}=e,p=(0,a.A)(e,N),x=I({innerRadius:r,outerRadius:s,cornerRadius:d,paddingAngle:l,id:o,highlighted:u,faded:c,data:g}),f=(0,R.pn)(x,(0,t.A)({},k,{immediate:A})),{highlightScope:m}=(0,j.Z)();if(0===g.length)return null;const y=n?.pieArc??L;return(0,b.jsx)("g",(0,t.A)({},p,{children:f(((e,n,r,s)=>{let{startAngle:d,endAngle:l,paddingAngle:u,innerRadius:c,outerRadius:g,cornerRadius:A}=e,R=(0,a.A)(e,C);return(0,b.jsx)(y,(0,t.A)({startAngle:d,endAngle:l,paddingAngle:u,innerRadius:c,outerRadius:g,cornerRadius:A,style:R,id:o,color:n.color,dataIndex:s,highlightScope:m,isFaded:n.isFaded,isHighlighted:n.isHighlighted,onClick:h&&(e=>{h(e,{type:"pie",seriesId:o,dataIndex:s},n)})},i?.pieArc))}))}))}const T=["id","classes","color","startAngle","endAngle","paddingAngle","arcLabelRadius","innerRadius","outerRadius","cornerRadius","formattedArcLabel","isHighlighted","isFaded","style"];function $(e){return(0,f.Ay)("MuiPieArcLabel",e)}(0,y.A)("MuiPieArcLabel",["root","highlighted","faded"]);const S=(0,m.Ay)(R.CS.text,{name:"MuiPieArcLabel",slot:"Root",overridesResolver:(e,n)=>n.root})((e=>{let{theme:n}=e;return{fill:(n.vars||n).palette.text.primary,textAnchor:"middle",dominantBaseline:"middle",pointerEvents:"none"}})),Z=(e,n)=>(i,t,a,r,s)=>{if(!e)return 0;const[d,l]=(0,p.A)().cornerRadius(s).centroid({padAngle:a,startAngle:i,endAngle:t,innerRadius:r,outerRadius:r});return"x"===n?d:l};function X(e){const{id:n,classes:i,color:r,startAngle:s,endAngle:d,paddingAngle:l,arcLabelRadius:o,cornerRadius:u,formattedArcLabel:c,isHighlighted:g,isFaded:h,style:A}=e,p=(0,a.A)(e,T),f=(e=>{const{classes:n,id:i,isFaded:t,isHighlighted:a}=e,r={root:["root",`series-${i}`,a&&"highlighted",t&&"faded"]};return(0,x.A)(r,$,n)})({id:n,classes:i,color:r,isFaded:h,isHighlighted:g});return(0,b.jsx)(S,(0,t.A)({className:f.root},p,{style:(0,t.A)({x:(0,R.to)([s,d,l,o,u],Z(c,"x")),y:(0,R.to)([s,d,l,o,u],Z(c,"y"))},A),children:c}))}var W=i(5011);const Y=["arcLabel","arcLabelMinAngle","arcLabelRadius","cornerRadius","data","faded","highlighted","id","innerRadius","outerRadius","paddingAngle","skipAnimation","slotProps","slots"],Q=["startAngle","endAngle","paddingAngle","innerRadius","outerRadius","arcLabelRadius","cornerRadius"],G=180/Math.PI;function q(e,n,i){if(!e)return null;if((i.endAngle-i.startAngle)*G<n)return null;switch(e){case"label":return(0,W.p)(i.label,"arc");case"value":return i.value?.toString();case"formattedValue":return i.formattedValue;default:return e((0,t.A)({},i,{label:(0,W.p)(i.label,"arc")}))}}function D(e){const{arcLabel:n,arcLabelMinAngle:i=0,arcLabelRadius:r,cornerRadius:s=0,data:d,faded:l={additionalRadius:-5},highlighted:o,id:u,innerRadius:c,outerRadius:g,paddingAngle:h=0,skipAnimation:A,slotProps:p,slots:x}=e,f=(0,a.A)(e,Y),m=I({innerRadius:c,outerRadius:g,arcLabelRadius:r,cornerRadius:s,paddingAngle:h,id:u,highlighted:o,faded:l,data:d}),y=(0,R.pn)(m,(0,t.A)({},w,{immediate:A}));if(0===d.length)return null;const v=x?.pieArcLabel??X;return(0,b.jsx)("g",(0,t.A)({},f,{children:y(((e,r)=>{let{startAngle:s,endAngle:d,paddingAngle:l,innerRadius:o,outerRadius:c,arcLabelRadius:g,cornerRadius:h}=e,A=(0,a.A)(e,Q);return(0,b.jsx)(v,(0,t.A)({startAngle:s,endAngle:d,paddingAngle:l,innerRadius:o,outerRadius:c,arcLabelRadius:g,cornerRadius:h,style:A,id:u,color:r.color,isFaded:r.isFaded,isHighlighted:r.isHighlighted,formattedArcLabel:q(n,i,r)},p?.pieArcLabel))}))}))}var E=i(58716);function _(e,n){const{height:i,width:t}=n,{cx:a,cy:r}=e,s=Math.min(t,i)/2;return{cx:(0,E.c)(a??"50%",t),cy:(0,E.c)(r??"50%",i),availableRadius:s}}var z=i(14977);function B(e){const{skipAnimation:n,slots:i,slotProps:t,onItemClick:a}=e,s=(0,z.P6)(),{left:d,top:l,width:o,height:u}=r.useContext(A.wf);if(void 0===s)return null;const{series:c,seriesOrder:g}=s;return(0,b.jsxs)("g",{children:[g.map((e=>{const{innerRadius:r,outerRadius:s,cornerRadius:g,paddingAngle:h,data:A,cx:R,cy:p,highlighted:x,faded:f}=c[e],{cx:m,cy:y,availableRadius:v}=_({cx:R,cy:p},{width:o,height:u}),M=(0,E.c)(s??v,v),P=(0,E.c)(r??0,v);return(0,b.jsx)("g",{transform:`translate(${d+m}, ${l+y})`,children:(0,b.jsx)(H,{innerRadius:P,outerRadius:M,cornerRadius:g,paddingAngle:h,id:e,data:A,skipAnimation:n,highlighted:x,faded:f,onItemClick:a,slots:i,slotProps:t})},e)})),g.map((e=>{const{innerRadius:a,outerRadius:r,arcLabelRadius:s,cornerRadius:g,paddingAngle:h,arcLabel:A,arcLabelMinAngle:R,data:p,cx:x,cy:f}=c[e],{cx:m,cy:y,availableRadius:v}=_({cx:x,cy:f},{width:o,height:u}),M=(0,E.c)(r??v,v),P=(0,E.c)(a??0,v),F=void 0===s?(M+P)/2:(0,E.c)(s,v);return(0,b.jsx)("g",{transform:`translate(${d+m}, ${l+y})`,children:(0,b.jsx)(D,{innerRadius:P,outerRadius:M??v,arcLabelRadius:F,cornerRadius:g,paddingAngle:h,id:e,data:p,skipAnimation:n,arcLabel:A,arcLabelMinAngle:R,slots:i,slotProps:t})},e)}))]})}var V=i(74226);const O=["xAxis","yAxis","series","width","height","margin","colors","sx","tooltip","axisHighlight","skipAnimation","legend","topAxis","leftAxis","rightAxis","bottomAxis","children","slots","slotProps","onItemClick","loading","highlightedItem","onHighlightChange","className"],U={top:5,bottom:5,left:5,right:100},J={top:5,bottom:5,left:100,right:5},K=r.forwardRef((function(e,n){const i=(0,d.A)({props:e,name:"MuiPieChart"}),{xAxis:r,yAxis:A,series:R,width:p,height:x,margin:f,colors:m,sx:y,tooltip:v={trigger:"item"},axisHighlight:M={x:"none",y:"none"},skipAnimation:P,legend:F,topAxis:L=null,leftAxis:k=null,rightAxis:w=null,bottomAxis:j=null,children:I,slots:N,slotProps:C,onItemClick:H,loading:T,highlightedItem:$,onHighlightChange:S,className:Z}=i,X=(0,a.A)(i,O),W=(0,s.I)(),Y=(0,t.A)({},W?J:U,f),Q=(0,t.A)({direction:"column",position:{vertical:"middle",horizontal:W?"left":"right"}},F);return(0,b.jsxs)(l.E,(0,t.A)({},X,{ref:n,series:R.map((e=>(0,t.A)({type:"pie"},e))),width:p,height:x,margin:Y,xAxis:r??[{id:u.nW,scaleType:"point",data:[...new Array(Math.max(...R.map((e=>e.data.length))))].map(((e,n)=>n))}],yAxis:A,colors:m,sx:y,disableAxisListener:"axis"!==v?.trigger&&"none"===M?.x&&"none"===M?.y,highlightedItem:$,onHighlightChange:S,className:Z,children:[(0,b.jsx)(o.x,{topAxis:L,leftAxis:k,rightAxis:w,bottomAxis:j,slots:N,slotProps:C}),(0,b.jsx)(B,{slots:N,slotProps:C,onItemClick:H,skipAnimation:P}),(0,b.jsx)(V.g,{loading:T,slots:N,slotProps:C}),(0,b.jsx)(g.Z,(0,t.A)({},Q,{slots:N,slotProps:C})),(0,b.jsx)(h.R9,(0,t.A)({},M)),!T&&(0,b.jsx)(c.b,(0,t.A)({},v,{slots:N,slotProps:C})),I]}))}))},58716:(e,n,i)=>{function t(e,n){if("number"===typeof e)return e;if("100%"===e)return n;if(e.endsWith("%")){const i=Number.parseFloat(e.slice(0,e.length-1));if(!Number.isNaN(i))return i*n/100}if(e.endsWith("px")){const n=Number.parseFloat(e.slice(0,e.length-2));if(!Number.isNaN(n))return n}throw Error(`MUI X: Received an unknown value "${e}". It should be a number, or a string with a percentage value.`)}i.d(n,{c:()=>t})},45453:(e,n,i)=>{i.d(n,{A:()=>g});var t=i(13809),a=i(6739),r=i(17371);function s(e){return e.innerRadius}function d(e){return e.outerRadius}function l(e){return e.startAngle}function o(e){return e.endAngle}function u(e){return e&&e.padAngle}function c(e,n,i,t,r,s,d){var l=e-i,o=n-t,u=(d?s:-s)/(0,a.RZ)(l*l+o*o),c=u*o,g=-u*l,h=e+c,A=n+g,R=i+c,p=t+g,x=(h+R)/2,f=(A+p)/2,m=R-h,y=p-A,v=m*m+y*y,b=r-s,M=h*p-R*A,P=(y<0?-1:1)*(0,a.RZ)((0,a.T9)(0,b*b*v-M*M)),F=(M*y-m*P)/v,L=(-M*m-y*P)/v,k=(M*y+m*P)/v,w=(-M*m+y*P)/v,j=F-x,I=L-f,N=k-x,C=w-f;return j*j+I*I>N*N+C*C&&(F=k,L=w),{cx:F,cy:L,x01:-c,y01:-g,x11:F*(r/b-1),y11:L*(r/b-1)}}function g(){var e=s,n=d,i=(0,t.A)(0),g=null,h=l,A=o,R=u,p=null,x=(0,r.i)(f);function f(){var t,r,s=+e.apply(this,arguments),d=+n.apply(this,arguments),l=h.apply(this,arguments)-a.TW,o=A.apply(this,arguments)-a.TW,u=(0,a.tn)(o-l),f=o>l;if(p||(p=t=x()),d<s&&(r=d,d=s,s=r),d>a.Ni)if(u>a.FA-a.Ni)p.moveTo(d*(0,a.gn)(l),d*(0,a.F8)(l)),p.arc(0,0,d,l,o,!f),s>a.Ni&&(p.moveTo(s*(0,a.gn)(o),s*(0,a.F8)(o)),p.arc(0,0,s,o,l,f));else{var m,y,v=l,b=o,M=l,P=o,F=u,L=u,k=R.apply(this,arguments)/2,w=k>a.Ni&&(g?+g.apply(this,arguments):(0,a.RZ)(s*s+d*d)),j=(0,a.jk)((0,a.tn)(d-s)/2,+i.apply(this,arguments)),I=j,N=j;if(w>a.Ni){var C=(0,a.qR)(w/s*(0,a.F8)(k)),H=(0,a.qR)(w/d*(0,a.F8)(k));(F-=2*C)>a.Ni?(M+=C*=f?1:-1,P-=C):(F=0,M=P=(l+o)/2),(L-=2*H)>a.Ni?(v+=H*=f?1:-1,b-=H):(L=0,v=b=(l+o)/2)}var T=d*(0,a.gn)(v),$=d*(0,a.F8)(v),S=s*(0,a.gn)(P),Z=s*(0,a.F8)(P);if(j>a.Ni){var X,W=d*(0,a.gn)(b),Y=d*(0,a.F8)(b),Q=s*(0,a.gn)(M),G=s*(0,a.F8)(M);if(u<a.pi)if(X=function(e,n,i,t,r,s,d,l){var o=i-e,u=t-n,c=d-r,g=l-s,h=g*o-c*u;if(!(h*h<a.Ni))return[e+(h=(c*(n-s)-g*(e-r))/h)*o,n+h*u]}(T,$,Q,G,W,Y,S,Z)){var q=T-X[0],D=$-X[1],E=W-X[0],_=Y-X[1],z=1/(0,a.F8)((0,a.HQ)((q*E+D*_)/((0,a.RZ)(q*q+D*D)*(0,a.RZ)(E*E+_*_)))/2),B=(0,a.RZ)(X[0]*X[0]+X[1]*X[1]);I=(0,a.jk)(j,(s-B)/(z-1)),N=(0,a.jk)(j,(d-B)/(z+1))}else I=N=0}L>a.Ni?N>a.Ni?(m=c(Q,G,T,$,d,N,f),y=c(W,Y,S,Z,d,N,f),p.moveTo(m.cx+m.x01,m.cy+m.y01),N<j?p.arc(m.cx,m.cy,N,(0,a.FP)(m.y01,m.x01),(0,a.FP)(y.y01,y.x01),!f):(p.arc(m.cx,m.cy,N,(0,a.FP)(m.y01,m.x01),(0,a.FP)(m.y11,m.x11),!f),p.arc(0,0,d,(0,a.FP)(m.cy+m.y11,m.cx+m.x11),(0,a.FP)(y.cy+y.y11,y.cx+y.x11),!f),p.arc(y.cx,y.cy,N,(0,a.FP)(y.y11,y.x11),(0,a.FP)(y.y01,y.x01),!f))):(p.moveTo(T,$),p.arc(0,0,d,v,b,!f)):p.moveTo(T,$),s>a.Ni&&F>a.Ni?I>a.Ni?(m=c(S,Z,W,Y,s,-I,f),y=c(T,$,Q,G,s,-I,f),p.lineTo(m.cx+m.x01,m.cy+m.y01),I<j?p.arc(m.cx,m.cy,I,(0,a.FP)(m.y01,m.x01),(0,a.FP)(y.y01,y.x01),!f):(p.arc(m.cx,m.cy,I,(0,a.FP)(m.y01,m.x01),(0,a.FP)(m.y11,m.x11),!f),p.arc(0,0,s,(0,a.FP)(m.cy+m.y11,m.cx+m.x11),(0,a.FP)(y.cy+y.y11,y.cx+y.x11),f),p.arc(y.cx,y.cy,I,(0,a.FP)(y.y11,y.x11),(0,a.FP)(y.y01,y.x01),!f))):p.arc(0,0,s,P,M,f):p.lineTo(S,Z)}else p.moveTo(0,0);if(p.closePath(),t)return p=null,t+""||null}return f.centroid=function(){var i=(+e.apply(this,arguments)+ +n.apply(this,arguments))/2,t=(+h.apply(this,arguments)+ +A.apply(this,arguments))/2-a.pi/2;return[(0,a.gn)(t)*i,(0,a.F8)(t)*i]},f.innerRadius=function(n){return arguments.length?(e="function"===typeof n?n:(0,t.A)(+n),f):e},f.outerRadius=function(e){return arguments.length?(n="function"===typeof e?e:(0,t.A)(+e),f):n},f.cornerRadius=function(e){return arguments.length?(i="function"===typeof e?e:(0,t.A)(+e),f):i},f.padRadius=function(e){return arguments.length?(g=null==e?null:"function"===typeof e?e:(0,t.A)(+e),f):g},f.startAngle=function(e){return arguments.length?(h="function"===typeof e?e:(0,t.A)(+e),f):h},f.endAngle=function(e){return arguments.length?(A="function"===typeof e?e:(0,t.A)(+e),f):A},f.padAngle=function(e){return arguments.length?(R="function"===typeof e?e:(0,t.A)(+e),f):R},f.context=function(e){return arguments.length?(p=null==e?null:e,f):p},f}}}]);
//# sourceMappingURL=4455.23041359.chunk.js.map