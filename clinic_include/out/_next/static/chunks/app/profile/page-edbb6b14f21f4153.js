(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4178],{37883:function(e,t,s){Promise.resolve().then(s.bind(s,94481))},63090:function(e,t,s){"use strict";function n(e){for(var t=arguments.length,s=Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];try{let t=s.map(e=>{if("object"==typeof e)try{return JSON.stringify(e,null,2)}catch(e){return"[Complex Object]"}return String(e)}).join(" ");console.log("".concat(e,": ").concat(t))}catch(e){console.error("Logger Error:",e)}}s.d(t,{k:function(){return a}});let a={info:function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),a=1;a<t;a++)s[a-1]=arguments[a];return n("ℹ️ [".concat(e,"]"),...s)},success:function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),a=1;a<t;a++)s[a-1]=arguments[a];return n("✅ [".concat(e,"]"),...s)},warn:function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),a=1;a<t;a++)s[a-1]=arguments[a];return n("⚠️ [".concat(e,"]"),...s)},error:function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),a=1;a<t;a++)s[a-1]=arguments[a];return n("❌ [".concat(e,"]"),...s)},debug:function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),a=1;a<t;a++)s[a-1]=arguments[a];return n("\uD83D\uDD35 [".concat(e,"]"),...s)}}},94481:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var n,a,i=s(57437),r=s(2265),l=s(66648),c=()=>(0,i.jsxs)("div",{className:"flex flex-col items-center gap-[16px]",children:[(0,i.jsx)("div",{className:"relative w-[150px] h-[150px]",children:(0,i.jsx)(l.default,{src:"/assets/images/profile/profile_sm.png",alt:"Profile",fill:!0,className:"object-cover rounded-full bg-primary-bg",priority:!0})}),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h2",{className:"text-[28px] font-bold mb-[2px]",children:"Coach Kim"}),(0,i.jsx)("p",{className:"text-[14px] font-medium text-[#ddd] opacity-50",children:"Sehwa Middle School 2nd Grade"})]})]}),o=e=>{let{isActive:t}=e,[s,n]=(0,r.useState)({x:0,y:0}),[a,o]=(0,r.useState)({x:50,y:50}),[d,x]=(0,r.useState)(!1),u=(0,r.useRef)(null),[h,f]=(0,r.useState)(!1),p=(0,r.useCallback)(()=>{!h&&t&&(f(!0),x(!d),n({x:0,y:0}),o({x:50,y:50}),setTimeout(()=>{f(!1)},300))},[d,h,t]);return(0,i.jsx)("div",{className:"w-[336px] aspect-[336/504] mx-auto",style:{perspective:"1000px"},children:(0,i.jsx)("div",{className:"card-container",onClick:p,style:{transform:d?"translate3d(0,0,0) rotateY(180deg)":"translate3d(0,0,0) rotateY(0deg)",WebkitTransform:d?"translate3d(0,0,0) rotateY(180deg)":"translate3d(0,0,0) rotateY(0deg)"},children:(0,i.jsxs)("div",{ref:u,className:"relative transition-all duration-500 preserve-3d cursor-pointer w-full h-full",style:{transform:d?"none":"rotateX(".concat(s.x,"deg) rotateY(").concat(s.y,"deg)")},onMouseMove:e=>{if(!u.current||d||!t)return;let s=u.current.getBoundingClientRect(),a=e.clientX-s.left,i=e.clientY-s.top,r=(i-s.height/2)/s.height*25,l=(a-s.width/2)/s.width*25,c=a/s.width*100,x=i/s.height*100;n({x:r,y:l}),o({x:c,y:x})},onMouseLeave:()=>{d||(n({x:0,y:0}),o({x:50,y:50}))},children:[(0,i.jsxs)("div",{className:"backface-hidden transition-all duration-500 text-white rounded-[16px] translate-z-[4px] relative overflow-hidden",style:{opacity:d?0:1,visibility:d?"hidden":"visible"},children:[(0,i.jsxs)("div",{className:"px-[24px] pt-[16px] pb-[28px] h-full relative z-[2] flex flex-col justify-between",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex justify-between items-center mb-[22px]",children:(0,i.jsx)("span",{className:"text-[12px] font-abc",children:"Boardingpass"})}),(0,i.jsx)(c,{}),(0,i.jsxs)("div",{className:"space-y-[12px] mt-[30px]",children:[(0,i.jsxs)("div",{className:"flex justify-between text-[14px]",children:[(0,i.jsx)("span",{className:"font-medium",children:"Email"}),(0,i.jsx)("span",{className:"font-abc",children:"themighty1@chalk.com"})]}),(0,i.jsxs)("div",{className:"flex justify-between text-[14px]",children:[(0,i.jsx)("span",{className:"font-medium",children:"Phone"}),(0,i.jsx)("span",{className:"font-abc",children:"010-1234-3254"})]}),(0,i.jsxs)("div",{className:"flex justify-between text-[14px]",children:[(0,i.jsx)("span",{className:"font-medium",children:"Parent Phone"}),(0,i.jsxs)("div",{className:"text-right",children:[(0,i.jsx)("div",{className:"font-abc",children:"010-3452-3243"}),(0,i.jsx)("div",{className:"font-medium text-[12px] text-gray-eight",children:"Report Receiving Agreement"})]})]})]})]}),(0,i.jsxs)("div",{className:"flex justify-between text-[12px]",children:[(0,i.jsx)("span",{className:"font-abc",children:"Reg. 2024.11.20"}),(0,i.jsx)("span",{children:"< < < < < < < < <"})]})]}),(0,i.jsx)("div",{className:"absolute top-full blur-3xl rounded-full -z-[1] -translate-y-[20%] w-[150%] h-[150%] left-1/2 -translate-x-1/2",children:(0,i.jsx)(l.default,{src:"/assets/images/profile/profile_sm.png",alt:"blur",fill:!0,priority:!0})})]}),(0,i.jsx)("div",{className:"backface-hidden transition-all duration-500",style:{transform:"rotateY(180deg)",background:"black",borderRadius:"16px",opacity:d?1:0,visibility:d?"visible":"hidden"},children:(0,i.jsxs)("div",{className:"relative bg-black text-white w-full h-full rounded-[16px] px-[23px] pt-[16px] pb-[28px] transition-all duration-300 ease-out transform-gpu preserve-3d flex flex-col justify-between",style:{background:"\n                    url('/assets/images/profile/profile_card.png') right bottom / 350px no-repeat,\n                    linear-gradient(to bottom, \n                      rgba(0,0,0,0) 0%,\n                      rgba(0,0,0,0) 40%,\n                      rgba(205, 167, 115, 0.3) 80%,\n                      rgba(205, 167, 115, 0.5) 100%\n                    ),\n                    black\n                  "},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex justify-between items-center mb-[35px]",children:(0,i.jsx)("span",{className:"text-[12px] font-abc",children:"Boardingpass"})}),(0,i.jsxs)("div",{className:"flex flex-col gap-[24px]",children:[(0,i.jsx)("div",{className:"text-[20px] font-bold",children:"Coach Kim's"}),(0,i.jsxs)("div",{className:"font-bold text-[65px] leading-none",children:["Boarding",(0,i.jsx)("br",{}),"Pass"]})]})]}),(0,i.jsxs)("div",{className:"flex justify-between text-[12px]",children:[(0,i.jsx)("span",{className:"font-abc",children:"Reg. 2024.11.20"}),(0,i.jsx)("span",{children:"< < < < < < < < <"})]})]})})]})})})},d=s(53267),x=s(87805);s(43034),s(72169),s(17322),s(32954);var u=e=>{let{isActive:t}=e;return(0,i.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,i.jsxs)("div",{className:"flex flex-col gap-[47px] items-center",children:[(0,i.jsx)("div",{className:"aspect-[238/320] w-[238px] relative",children:(0,i.jsx)(l.default,{src:"/assets/images/profile/book4.png",alt:"book",fill:!0,className:"object-cover rounded-[6px]"})}),(0,i.jsxs)("div",{className:"text-[22px] font-bold  transition-all duration-300 text-center ".concat(t?"translate-y-0 opacity-100":"-translate-y-[200px] opacity-0"),children:["Sehwa, 8th Grade, 1",(0,i.jsx)("br",{}),"Progressed up to Level 2-2."]})]})})},h=e=>{let{isActive:t}=e;return(0,i.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,i.jsxs)("div",{className:"flex flex-col gap-[85px] items-center",children:[(0,i.jsxs)("div",{className:"grid grid-cols-3 gap-[24px] w-[492px] relative",children:[(0,i.jsx)("div",{className:"relative aspect-[148/240]",children:(0,i.jsx)(l.default,{src:"/assets/images/profile/book1.png",alt:"book",fill:!0,className:"object-cover rounded-[6px]"})}),(0,i.jsx)("div",{className:"relative aspect-[148/240]",children:(0,i.jsx)(l.default,{src:"/assets/images/profile/book2.png",alt:"book",fill:!0,className:"object-cover rounded-[6px]"})}),(0,i.jsx)("div",{className:"relative aspect-[148/240]",children:(0,i.jsx)(l.default,{src:"/assets/images/profile/book3.png",alt:"book",fill:!0,className:"object-cover rounded-[6px]"})})]}),(0,i.jsxs)("div",{className:"transition-all duration-300 font-bold text-[22px] text-center  ".concat(t?"translate-y-0 opacity-100":"-translate-y-[200px] opacity-0"),children:[(0,i.jsx)("div",{children:"Daechi Entrance Academy"}),(0,i.jsxs)("div",{children:["Advanced Class ",(0,i.jsx)("span",{className:"text-white/50",children:"Study"}),(0,i.jsx)("span",{className:"text-white/50",children:"Book"})]})]})]})})},f=s(37440),p=s(56106),m=s(30219),N=s(74697),j=e=>{let{isActive:t=!0,isEdit:s=!1,onClose:n,onSubmit:a,teacher:r}=e;return(0,i.jsxs)("div",{className:"aspect-[336/504] bg-white/10 rounded-[16px] relative overflow-hidden py-[28px] px-[24px] transition-opacity duration-500 flex flex-col ".concat(t?"":"opacity-20"," ").concat(s?"justify-between":"h-full justify-center"),children:[s&&(0,i.jsx)("div",{}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center gap-[40px]",children:[(0,i.jsx)(l.default,{src:r.src,alt:r.name,width:160,height:160}),(0,i.jsxs)("div",{className:"font-bold text-center",children:[r.name," will ",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"text-white/50",children:"be with you!"})]})]}),s&&(0,i.jsxs)("div",{className:"flex items-center justify-end gap-[16px]",children:[(0,i.jsx)("button",{className:"text-[14px] py-[10px] px-[16px]",type:"button",onClick:n,children:"Cancel"}),(0,i.jsx)("button",{className:"text-[14px] py-[10px] px-[16px] rounded-full bg-white/10 text-white/50",type:"button",onClick:()=>null==a?void 0:a(r.id),children:"Edit"})]}),(0,i.jsx)("div",{className:"absolute blur-3xl rounded-full -z-[1] top-full -translate-y-[15%] w-[150%] h-[150%] left-1/2 -translate-x-1/2 ".concat(s?"opacity-40":""),children:(0,i.jsx)(l.default,{className:"",src:r.src,alt:r.name,fill:!0})})]})},v=e=>{let{onClose:t,initialTeacherId:s}=e,n=e=>{(0,f.dz)(p.Q.FTOW_TEACHER_ID,e),t()};return(0,i.jsxs)(m.E.div,{className:"fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:[(0,i.jsx)("button",{className:"absolute right-4 top-4",onClick:t,children:(0,i.jsx)(N.Z,{})}),(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)(d.tq,{slidesPerView:"auto",spaceBetween:100,centeredSlides:!0,initialSlide:I.findIndex(e=>e.id===s),children:I.map(e=>(0,i.jsx)(d.o5,{style:{width:"32vw"},onClick:e=>e.stopPropagation(),children:(0,i.jsx)(j,{isEdit:!0,teacher:e,onClose:t,onSubmit:n})},e.id))})})]})},E=s(48034);(n=a||(a={})).SANG="TCH0000000001",n.TAE="TCH0000000002",n.SEOK="TCH0000000003";let T={TCH0000000001:"Mr. Brooks",TCH0000000002:"Ms. Wise",TCH0000000003:"Prof. Leo"};var _=s(34446),g=s(95634),y=()=>(0,i.jsx)("div",{className:"w-full h-full flex justify-center",children:(0,i.jsxs)("div",{className:"flex flex-col justify-end items-center gap-[94px]",children:[(0,i.jsx)(g.J.Univ,{}),(0,i.jsxs)("div",{className:"text-center font-bold text-[22px] ",children:["The goal is MIT University,",(0,i.jsx)("div",{className:"text-white/50",children:"let's achieve it together!"})]})]})}),b=()=>{let[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(0),[l,c]=(0,r.useState)(!1),[f,m]=(0,r.useState)(a.SEOK);return(0,r.useEffect)(()=>{function e(e){if(!e.detail)return;let{type:t,data:s}=e.detail;if(t===p.Q.FTOW_TEACHER_ID){if(!Object.values(a).includes(s)){console.warn("유효하지 않은 teacherId:",s);return}s&&m(s)}}return window.addEventListener(p.Q.FTOW_EVENT_NAME,e),E.d.onEvent(e=>{window.dispatchEvent(new CustomEvent(p.Q.FTOW_EVENT_NAME,{detail:{type:e.type,data:e.data}}))}),E.d.setReady(),()=>{window.removeEventListener(p.Q.FTOW_EVENT_NAME,e)}},[]),(0,i.jsxs)("div",{className:"w-full relative",children:[(0,i.jsxs)("div",{className:"flex items-center gap-[3px] fixed top-2 left-5",children:[(0,i.jsx)("div",{className:"font-bold text-[28px] text-[#ddd]",children:"Nice to meet you, Coach Kim!"}),0!==s&&(0,i.jsx)("button",{className:"bg-white/10 rounded-full flex items-center justify-center w-[46px] h-[26px] text-[12px] font-abc",onClick:()=>{c(!0)},children:"edit"})]}),(0,i.jsx)(_.M,{children:l&&(0,i.jsx)(v,{onClose:()=>c(!1),initialTeacherId:f})}),(0,i.jsx)(d.tq,{onInit:()=>{t(!0)},onSlideChange:e=>{n(e.activeIndex)},loop:e,pagination:!0,modules:[x.tl],className:"profile-swiper",children:e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.o5,{style:{height:504},children:(0,i.jsx)(y,{})}),(0,i.jsx)(d.o5,{style:{height:504},children:(0,i.jsx)("div",{className:"w-[336px] mx-auto",children:(0,i.jsx)(j,{teacher:I.find(e=>e.id===f)||I[0]})})}),(0,i.jsx)(d.o5,{style:{height:504},children:e=>{let{isActive:t}=e;return(0,i.jsx)(o,{isActive:t})}}),(0,i.jsx)(d.o5,{style:{height:504},children:e=>{let{isActive:t}=e;return(0,i.jsx)(u,{isActive:t})}}),(0,i.jsx)(d.o5,{style:{height:504},children:e=>{let{isActive:t}=e;return(0,i.jsx)(h,{isActive:t})}})]})})]})};let I=[{id:a.SANG,name:T[a.SANG],src:"/assets/images/profile/a-teacher.png"},{id:a.TAE,name:T[a.TAE],src:"/assets/images/profile/b-teacher.png"},{id:a.SEOK,name:T[a.SEOK],src:"/assets/images/profile/c-teacher.png"}];var C=()=>((0,r.useEffect)(()=>{window.learnScreenEventChannel=function(e,t){E.d.addEvent({type:e,data:JSON.parse(JSON.stringify(t))})}},[]),(0,i.jsx)("div",{className:"font-pretendard text-white min-h-screen flex items-center justify-center overflow-hidden",children:(0,i.jsx)(b,{})}))},37440:function(e,t,s){"use strict";s.d(t,{cn:function(){return l},dz:function(){return o},l_:function(){return d},lr:function(){return u},q1:function(){return x}});var n=s(48388);s(7395);var a=s(44839),i=s(96164),r=s(27776);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,i.m6)((0,a.W)(t))}let c=()=>!!window.flutter_inappwebview,o=async function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];if(c())try{return JSON.parse(await window.flutter_inappwebview.callHandler(e,...s.map(e=>JSON.stringify(e))))}catch(e){throw console.error("Error calling Flutter handler:",e),e}return null},d=e=>{let t=document.createElement("img");return t.id="question-result-mark",t.src=e,t.className="question-is-correct-mark",t.style.width="60px",t.style.height="60px",t.style.margin="0px",t},x=e=>null!=e?e.replace(/\$\$(.*?)\$\$|\$(.*?)\$/g,(e,t,s)=>{let a=e.startsWith("$$");try{return n.Z.renderToString(t||s,{displayMode:a,throwOnError:!1,macros:{"\\frac":"\\dfrac"}})}catch(e){return console.error("LaTeX rendering error:",e),'<span style="color: red;">[LaTeX Error: '.concat(e instanceof Error?e.message:String(e),"]</span>")}}):e,u=()=>{(0,r.A)("Coming Soon",{duration:1500})}},48034:function(e,t,s){"use strict";s.d(t,{d:function(){return i}});var n=s(63090);class a{static getInstance(){return a.instance||(a.instance=new a),a.instance}addEvent(e){n.k.info("[EventStore] Adding event:",e),this.isReady?this.callbacks.forEach(t=>t(e)):this.eventQueue.push(e)}setReady(){this.isReady=!0,this.processQueue()}onEvent(e){this.callbacks.push(e)}processQueue(){for(;this.eventQueue.length>0;){let e=this.eventQueue.shift();e&&this.callbacks.forEach(t=>t(e))}}constructor(){this.eventQueue=[],this.isReady=!1,this.callbacks=[]}}let i=a.getInstance()},56106:function(e,t,s){"use strict";var n,a;s.d(t,{Q:function(){return n}}),(a=n||(n={})).FTOW_EVENT_NAME="flutterEvent",a.FTOW_DRAW_QUESTION="DRAW_QUESTION",a.FTOW_SELECT_ANSWER="SELECT_ANSWER",a.FTOW_QUESTION_LIST="QUESTION_PREVIEW_LIST",a.FTOW_RESULT_LIST="RESULT_PREVIEW_LIST",a.FTOW_CHAT_INPUT="CHAT_INPUT",a.WTOF_GENERATE_BUTTONS="GENERATE_BUTTONS",a.WTOF_PAGE_HEIGHT="PAGE_HEIGHT",a.WTOF_HIGHLIGHT="HIGHLIGHT",a.FTOW_CLINIC_DATA="FTOW_CLINIC_DATA",a.FTOW_CLINIC_DE_DATA="FTOW_CLINIC_DE_DATA",a.WTOF_CLINIC_TYPE_CHANGE="CLINIC_TYPE_CHANGE",a.WTOF_REQUEST_DE_DATA="REQUEST_DE_DATA",a.WTOF_REQUEST_KEYWORD="REQUEST_KEYWORD",a.FTOW_KEYWORD_DATA="KEYWORD_DATA",a.FTOW_CLINICK="CILINIC_INIT",a.WTOF_CLINICK_HIGHLIGHT="CLINIC_HIGHLIGHT",a.FTOW_EXPLAIN="EXPLAIN",a.FTOW_DRAW_QUIZ="DRAW_QUIZ",a.FTOW_CHECK_QUIZ="CHECK_QUIZ",a.WTOF_RESULT_QUIZ="RESULT_QUIZ",a.WTOF_CHAT_VIDEO_CLICK="CHAT_VIDEO_CLICK",a.FTOW_TEACHER_ID="TEACHER_ID",a.CTOF_CLINIC_HIGHTLIGHT="CLINIC_HIGHLIGHT_FOR_FLUTTER",a.FTOW_QUIZ_ANSWER="QUIZ_INPUT",a.CTOF_CLINIC_EVENT_RESPOONSE="CLINIC_EVENT_RESPOONSE_FOR_FLUTTER",a.FTOW_CLINIC_START_MIDLE_QUESTION="CLINIC_START_MIDLE_QUESTION"},32954:function(){}},function(e){e.O(0,[342,7131,9610,6860,5864,3954,1351,4868,8173,2803,446,5634,2971,7023,1744],function(){return e(e.s=37883)}),_N_E=e.O()}]);