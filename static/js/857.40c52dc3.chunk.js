"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[857],{857:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var o,t,i,a,c,d,s,u,l=r(9434),x=r(2791),p=function(n){return n.contacts.loading},f=function(n){return n.contacts.items},b=r(168),m=r(5867),g=m.ZP.ul(o||(o=(0,b.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),h=r(3634),j=m.ZP.div(t||(t=(0,b.Z)(["\n  width: 400px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 6px;\n  border: 1px solid #2a2a2a;\n  border-radius: 4px;\n"]))),v=m.ZP.p(i||(i=(0,b.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),Z=m.ZP.button(a||(a=(0,b.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  margin-left: auto;\n  border-radius: 4px;\n  padding: 8px 12px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n    box-shadow: 0 0 0 3px lightskyblue;\n  }\n  &:focus {\n    background-color: red;\n  }\n  &:active {\n    background-color: red;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),k=r(719),y=r(184),w=function(n){var e=n.id,r=n.name,o=n.number,t=(0,l.I0)();return(0,y.jsxs)(j,{children:[(0,y.jsx)(k.EDj,{}),(0,y.jsx)(v,{children:"".concat(r," : ").concat(o)}),(0,y.jsx)(Z,{type:"button",onClick:function(){return t((0,h.GK)(e))},children:"Delete"})]})},P=function(){var n=(0,l.v9)(f);return(0,y.jsx)(g,{children:n.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,y.jsx)("li",{children:(0,y.jsx)(w,{id:e,name:r,number:o})},e)}))})},C=r(7762),_=r(5705),q=(0,m.ZP)(_.l0)(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 10px;\n  border: 1px solid #2a2a2a;\n  border-radius: 4px;\n"]))),F=(0,m.ZP)(_.gN)(d||(d=(0,b.Z)(["\n  width: 100%;\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n"]))),I=(0,m.ZP)(_.Bc)(s||(s=(0,b.Z)(["\n  font-size: 14px;\n  color: red;\n"]))),L=m.ZP.button(u||(u=(0,b.Z)(["\n  height: 40px;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 0 8px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n    box-shadow: 0 0 0 3px lightskyblue;\n  }\n  &:focus {\n    background-color: green;\n  }\n  &:active {\n    background-color: green;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),S=r(6727),z=S.Ry().shape({text:S.Z_().min(3,"Too Short!").max(30,"Too Long!")}),B=function(){var n=(0,l.I0)(),e=(0,l.v9)(f);return(0,y.jsx)(_.J9,{initialValues:{text:"",number:""},validationSchema:z,onSubmit:function(r,o){!function(r,o){if(void 0===function(){var n,o=(0,C.Z)(e);try{for(o.s();!(n=o.n()).done;)if(n.value.name.toLowerCase()===r.text.toLowerCase())return alert("".concat(r.text," is already in contacts.")),!0}catch(t){o.e(t)}finally{o.f()}}())n((0,h.uK)({name:r.text,number:r.number})),o.resetForm()}(r,o)},children:(0,y.jsxs)(q,{autoComplete:"off",children:[(0,y.jsxs)("label",{children:[(0,y.jsx)(F,{type:"text",name:"text",required:!0}),(0,y.jsx)(I,{name:"text",component:"div"})]}),(0,y.jsxs)("label",{children:[(0,y.jsx)(F,{type:"text",name:"number",required:!0}),(0,y.jsx)(I,{name:"number",component:"div"})]}),(0,y.jsx)(L,{type:"submit",children:"Add contact"})]})})},D=r(6907);function E(){var n=(0,l.I0)(),e=(0,l.v9)(p);return(0,x.useEffect)((function(){n((0,h.yF)())}),[n]),(0,y.jsx)(D.B6,{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(D.ql,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsx)(B,{}),(0,y.jsx)("div",{children:e&&"Request in progress..."}),(0,y.jsx)(P,{})]})})}}}]);
//# sourceMappingURL=857.40c52dc3.chunk.js.map