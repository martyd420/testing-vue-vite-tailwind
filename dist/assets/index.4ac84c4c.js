import{o as a,c as p,a as s,t as u,d as f,r as m,b as _,w as b,F as v,e as q}from"./vendor.8cc17ed6.js";const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}};x();var h=(n,e)=>{const o=n.__vccOpts||n;for(const[r,t]of e)o[r]=t;return o};const w={props:{title:{type:String},description:{type:String,default:""}}};function y(n,e,o,r,t,i){return a(),p("article",null,[s("h3",null,u(o.title),1),s("p",null,u(o.description),1)])}var g=h(w,[["render",y],["__scopeId","data-v-44a4b654"]]);const k={components:{Item:g,draggable:f},emits:["next-move","solved"],props:["id","question","answers"],created:function(){this.rlist=this.randomizeArray(this.answers)},data(){return{count:0,rlist:[]}},watch:{answers(){this.rlist=this.randomizeArray(this.answers)}},methods:{onDrop:function(n){this.$emit("next-move");let e="";this.rlist.forEach(o=>{e+=o.id}),"0123456789".includes(e)&&(console.log("Question "+this.id+" solved."),this.$emit("solved"))},onMove:function(n){},dbgDumpList:function(){console.log("Aktualni stav pole:"),this.rlist.forEach(n=>{console.log(n.id)})},randomizeArray:function(n){let e=n.length,o;for(;e!=0;)o=Math.floor(Math.random()*e),e--,[n[e],n[o]]=[n[o],n[e]];return n}}},j={class:"text-shadow font-bold shadow-2xl text-center text-xl m-4 mb-6 p-3 border-2 border-opacity-95 rounded-md bg-orange-500 text-white"},A={id:"qlist"};function L(n,e,o,r,t,i){const d=m("Item"),c=m("draggable");return a(),p(v,null,[s("h1",j,u(o.question),1),s("section",A,[_(c,{onEnd:i.onDrop,modelValue:t.rlist,"onUpdate:modelValue":e[0]||(e[0]=l=>t.rlist=l),group:"qlist","item-key":"id"},{item:b(({element:l})=>[_(d,{title:l.title,description:l.description},null,8,["title","description"])]),_:1},8,["onEnd","modelValue"])]),s("button",{onClick:e[1]||(e[1]=(...l)=>i.dbgDumpList&&i.dbgDumpList(...l))},"dump")],64)}var N=h(k,[["render",L]]);const E={components:{Question:N,Item:g,draggable:f},created:function(){setInterval(()=>{this.timeout==0?(this.timeout=2,++this.fails==3&&this.gameOver(),this.nextQuestion()):--this.timeout},1e3)},methods:{nextQuestion:function(){this.timeout+=8;var n=Math.floor(Math.random()*this.questions.length),e=this.questions.at(n);this.current_question_id=e.current_question_id,this.current_question=e.current_question,this.current_answers=e.current_answers},gameOver:function(){this.count=0,this.count_solved=0,alert("GAME OVER"),this.fails=0,this.nextQuestion()}},watch:{count_solved(){console.log("this.watch.count_solved"),this.nextQuestion()}},data(){return{timeout:10,count:0,count_solved:0,fails:0,current_question_id:1,current_question:"SE\u0158A\u010E TO! [pseudogame]",current_answers:[{id:"1",title:"Prvn\xED",description:"P\u0159esu\u0148te na prvn\xED m\xEDsto"},{id:"2",title:"Ne t\u0159et\xED",description:"Tahle polo\u017Eka bude druh\xE1"},{id:"3",title:"P\u0159edposledn\xED",description:"P\u0159esu\u0148te na 3. m\xEDsto"},{id:"4",title:"4.",description:"\u010Cty\u0159ka by mo\u017En\xE1 mohla b\xFDt posledn\xED"}],questions:[{current_question_id:32,current_question:"Se\u0159e\u010Fte logicky jednotliv\xE9 p\u0159\xEDkazy",current_answers:[{id:"1",title:"init",description:"git init"},{id:"2",title:"add",description:"git add ."},{id:"3",title:"commit",description:'git commit -m "Allahv\xE1\u010D Nabar!"'},{id:"4",title:"push",description:"git push origin master"}]},{current_question_id:42,current_question:"Zadruh\xED sem \u0159ek",current_answers:[{id:"1",title:"Prvn\xED",description:"To je ten p\u0159ed druh\xFDm"},{id:"2",title:"Ne \u010Dtvrt\xFD",description:"Nen\xED na 4 m\xEDst\u011B"},{id:"3",title:"ne posledn\xED",description:"Posledn\xED je jin\xFD"},{id:"4",title:"\u010Ctvrt\xFD",description:"H\xE1dej, m\u016F\u017Ee\u0161 jednou"}]},{current_question_id:64,current_question:"Se\u0159e\u010Fte v\xFDvojov\xE9 st\xE1dia",current_answers:[{id:"1",title:"Vaj\xED\u010Dko",description:"Ale velikono\u010Dn\xED nen\xED"},{id:"2",title:"Larva",description:"Nen\xED prvn\xED"},{id:"3",title:"Kukla",description:"Posledn\xED je jin\xFD"},{id:"4",title:"Imago",description:"H\xE1dej, m\u016F\u017Ee\u0161 jednou"}]}]}}},I=s("br",null,null,-1),O={class:"pr-6"},P={class:"pr-6"},Q={class:"pr-6"},M={class:"pr-6"};function S(n,e,o,r,t,i){const d=m("Question");return a(),p(v,null,[_(d,{onNextMove:e[0]||(e[0]=c=>++t.count),onSolved:e[1]||(e[1]=c=>++t.count_solved),id:t.current_question_id,question:t.current_question,answers:t.current_answers},null,8,["id","question","answers"]),s("footer",null,[s("button",{onClick:e[2]||(e[2]=(...c)=>i.nextQuestion&&i.nextQuestion(...c))},"next"),I,s("span",O,"Po\u010Det tah\u016F: "+u(t.count),1),s("span",P,"Zb\xFDvaj\xEDc\xED \u010Das: "+u(t.timeout),1),s("span",Q,"Chyby: "+u(t.fails)+"/3",1),s("span",M,"Vy\u0159e\u0161eno: "+u(t.count_solved),1)])],64)}var V=h(E,[["render",S]]);q(V).mount("#app");document.addEventListener("DOMContentLoaded",function(n){});