import{Q as H,a as A,b as N,c as E,d as M}from"./QLayout.056c7495.js";import{s as T,r as B,p as L,u as z,v as $,o as R,h as o,x as j,g as D,y as K,z as I,A as O,B as J,C as U,D as G,E as Y,_ as W,G as X,j as Z,H as ee,I as n,d as r,J as V,K as g,L as b,Q as te,M as q,N as F,O as ae,P as oe}from"./index.be0ba1f9.js";import{Q as se}from"./QPage.32354602.js";import{u as re}from"./use-quasar.6e419a9d.js";var ne=T({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:s,emit:m}){const p=D(),i=B(null);let d=0;const l=[];function y(e){const f=typeof e=="boolean"?e:t.noErrorFocus!==!0,v=++d,S=(a,u)=>{m("validation"+(a===!0?"Success":"Error"),u)},Q=a=>{const u=a.validate();return typeof u.then=="function"?u.then(c=>({valid:c,comp:a}),c=>({valid:!1,comp:a,err:c})):Promise.resolve({valid:u,comp:a})};return(t.greedy===!0?Promise.all(l.map(Q)).then(a=>a.filter(u=>u.valid!==!0)):l.reduce((a,u)=>a.then(()=>Q(u).then(c=>{if(c.valid===!1)return Promise.reject(c)})),Promise.resolve()).catch(a=>[a])).then(a=>{if(a===void 0||a.length===0)return v===d&&S(!0),!0;if(v===d){const{comp:u,err:c}=a[0];if(c!==void 0&&console.error(c),S(!1,u),f===!0){const P=a.find(({comp:k})=>typeof k.focus=="function"&&K(k.$)===!1);P!==void 0&&P.comp.focus()}}return!1})}function _(){d++,l.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function C(e){e!==void 0&&I(e);const f=d+1;y().then(v=>{f===d&&v===!0&&(t.onSubmit!==void 0?m("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function w(e){e!==void 0&&I(e),m("reset"),O(()=>{_(),t.autofocus===!0&&t.noResetFocus!==!0&&h()})}function h(){J(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),f=>f.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}L(U,{bindComponent(e){l.push(e)},unbindComponent(e){const f=l.indexOf(e);f>-1&&l.splice(f,1)}});let x=!1;return z(()=>{x=!0}),$(()=>{x===!0&&t.autofocus===!0&&h()}),R(()=>{t.autofocus===!0&&h()}),Object.assign(p.proxy,{validate:y,resetValidation:_,submit:C,reset:w,focus:h,getValidationComponents:()=>l}),()=>o("form",{class:"q-form",ref:i,onSubmit:C,onReset:w},j(s.default))}});const ie=[o("g",[o("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),o("clipPath",{id:"uil-hourglass-clip1"},[o("rect",{x:"15",y:"20",width:" 70",height:"25"},[o("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),o("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),o("clipPath",{id:"uil-hourglass-clip2"},[o("rect",{x:"15",y:"55",width:" 70",height:"25"},[o("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),o("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),o("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),o("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),o("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var le=T({name:"QSpinnerHourglass",props:G,setup(t){const{cSize:s,classes:m}=Y(t);return()=>o("svg",{class:m.value,width:s.value,height:s.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},ie)}});const ue={name:"LoginPage",setup(){const t=X(),{notify:s}=re();return{notify:s,loggingIn:B(!1),store:t}},data(){return{account:{email:"",password:""}}},methods:{async submitForm(){this.loggingIn=!0;try{const t={email:this.account.email,password:this.account.password,rememberMe:!0},s=await this.store.login(t);s.success?this.$router.replace("/"):console.error(s.message[0])}catch(t){console.error(t),this.notify({message:this.$t("loginFailed"),color:"red"})}finally{this.loggingIn=!1}}}},ce={class:"column"},de={class:"row"},fe={class:"text-h5 text-white q-my-md"},me={class:"row"},ge={class:"text-grey-6"};function pe(t,s,m,p,i,d){return Z(),ee(H,{view:"lHh Lpr lFf"},{default:n(()=>[r(E,{elevated:""},{default:n(()=>[r(A,null,{default:n(()=>[r(N,null,{default:n(()=>[V(" eKatasterJam ")]),_:1})]),_:1})]),_:1}),r(M,null,{default:n(()=>[r(se,{class:"bg-light-blue row justify-center items-center"},{default:n(()=>[g("div",ce,[g("div",de,[g("h5",fe,b(t.$t("logIn")),1)]),g("div",me,[r(te,{bordered:"",class:"q-pa-lg shadow-1"},{default:n(()=>[r(q,null,{default:n(()=>[r(ne,{class:"q-gutter-md"},{default:n(()=>[r(F,{square:"",filled:"",clearable:"",modelValue:i.account.email,"onUpdate:modelValue":s[0]||(s[0]=l=>i.account.email=l),type:"email",label:t.$t("email")},null,8,["modelValue","label"]),r(F,{square:"",filled:"",clearable:"",modelValue:i.account.password,"onUpdate:modelValue":s[1]||(s[1]=l=>i.account.password=l),type:"password",label:t.$t("password")},null,8,["modelValue","label"])]),_:1})]),_:1}),r(ae,{class:"q-px-md"},{default:n(()=>[r(oe,{disable:p.loggingIn,loading:p.loggingIn,unelevated:"",color:"light-blue-7",size:"lg",class:"full-width",label:t.$t("loginLabel"),onClick:d.submitForm,type:"submit"},{loading:n(()=>[r(le,{class:"on-right"}),V(" "+b(t.$t("loggingIn")),1)]),_:1},8,["disable","loading","label","onClick"])]),_:1}),r(q,{class:"text-center q-pa-none"},{default:n(()=>[g("p",ge,b(t.$t("register")),1)]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})}var Ce=W(ue,[["render",pe]]);export{Ce as default};
