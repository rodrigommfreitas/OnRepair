import{b as f,r as l,aP as P,j as e,at as h,aQ as j,aR as I,a1 as B,au as E,aS as H,ar as k,ai as b,aT as C,o as R}from"./sanity-14817763.js";const S=f(R)`
  position: relative;
`;function T(s){const{children:o}=s,{collapsed:t}=I();return e.jsx(S,{hidden:t,height:"fill",overflow:"auto",children:o})}function v(s){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=s,{features:a}=B();return!(n!=null&&n.length)&&!i?null:e.jsx(E,{actions:e.jsx(H,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:a.backButton&&t>0&&e.jsx(k,{as:b,"data-as":"a",icon:C,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function g(s){const{index:o,pane:t,paneKey:n,...r}=s,{child:i,component:a,menuItems:c,menuItemGroups:d,type:y,...m}=t,[u,p]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(v,{actionHandlers:u==null?void 0:u.actionHandlers,index:o,menuItems:c,menuItemGroups:d,title:x}),e.jsxs(T,{children:[j.isValidElementType(a)&&l.createElement(a,{...r,...m,ref:p,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{g as default};
