(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7619],{5025:function(e,t,r){Promise.resolve().then(r.bind(r,24732))},78664:function(e,t,r){"use strict";var s=r(57437);t.Z=e=>{let{categories:t,selectedCategories:r,setCategories:n}=e;return(0,s.jsx)("div",{className:"flex gap-[10px] grow",children:t.map(e=>(0,s.jsx)("button",{className:"text-[14px] font-semibold rounded-full py-[8px] px-[13px] bg-dark-bg transition-colors  ".concat(r.includes(e)?"text-white":"text-gray-eight"),onClick:()=>n(e),children:e},e))})}},24732:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var s=r(57437),n=r(2265),a=r(87592),o=e=>{let{href:t,children:r,chev:n=!0}=e;return(0,s.jsxs)("a",{href:t,className:"flex items-center justify-center gap-[2px] bg-dark-bg rounded-full py-[10px] pl-[18px] pr-[12px]",children:[(0,s.jsx)("span",{className:"text-[16px] font-semibold font-pretendard text-white",children:r}),n&&(0,s.jsx)(a.Z,{className:"text-white"})]})};function i(){return(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h1",{className:"font-bold text-white text-[20px]",children:"Address your weaknesses"}),(0,s.jsx)(o,{href:"/incorrect-note",children:"Incorrect note"})]})}var l=r(40325),c=r(78664),d=r(95634),u=r(37440);let f=["Concept weakness","TypeWeakness","Weakness topic"];function p(e){let{notes:t}=e,[r,a]=(0,n.useState)(f),[o,i]=(0,n.useState)("recent");return(0,s.jsxs)("div",{className:"pt-[22px] flex flex-col gap-[16px]",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(c.Z,{categories:f,selectedCategories:r,setCategories:e=>{a(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])}}),(0,s.jsx)(l.Z,{sortType:o,setSortType:i})]}),(0,s.jsx)("div",{className:"grid grid-cols-3 gap-[20px]",children:t.filter(e=>r.includes(e.category)).map(e=>(0,s.jsxs)("div",{className:"relative bg-[#1d1d1d] rounded-[16px] overflow-hidden",children:[(0,s.jsxs)("div",{className:"relative z-[2] p-[16px] aspect-[264/324] flex flex-col justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-[20px] ",children:[(0,s.jsx)("div",{className:"py-[7px] px-[10px] rounded-full text-[10px] bg-white bg-opacity-[0.08] flex items-center justify-center w-fit ".concat(e.category.includes("Concept")?"text-tag-green":"text-tag-yellow"),children:e.category}),(0,s.jsxs)("div",{className:"flex flex-col gap-[8px] break-keep",children:[(0,s.jsx)("div",{className:"font-bold text-white text-[18px]",children:e.title}),(0,s.jsx)("div",{className:"text-[12px] text-gray-eight",children:(0,s.jsxs)("div",{children:["Number of incorrect answers"," ",(0,s.jsx)("span",{className:"font-abc",children:"2"})," |"," ",(0,s.jsx)("span",{className:"font-abc",children:"24.11.15"})]})})]}),(0,s.jsxs)("div",{className:"flex gap-[6px] opacity-50",children:[(0,s.jsx)(d.J.WeaknessNoteVideoIcon,{}),(0,s.jsx)(d.J.WeaknessNoteQuizIcon,{}),(0,s.jsx)(d.J.WeaknessNoteQuestionIcon,{}),(0,s.jsx)(d.J.WeaknessNoteTwinIcon,{})]})]}),(0,s.jsx)("button",{onClick:u.lr,className:"flex items-center justify-center text-white bg-[#303030] rounded-[8px] py-[13px] w-full transition-colors hover:bg-[#ea2a47] relative z-[3]",children:(0,s.jsx)("span",{className:"font-bold text-white text-[18px]",children:"Resolve"})})]}),(0,s.jsxs)("div",{className:"absolute z-[1] right-0 bottom-0 mt-[24px] -mr-[30px]",children:[(0,s.jsx)(d.J.WeaknessNoteCategoryIcon,{className:"aspect-square w-[245px] h-[235px] opacity-[0.08] -rotate-[25deg]"}),(0,s.jsx)("div",{className:"absolute bg-gradient-to-t from-primary-bg to-transparent w-full h-full top-0 left-0"})]})]},e.id))})]})}function x(){return(0,s.jsxs)("div",{className:"text-center py-12",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)("span",{className:"text-4xl",children:"\uD83D\uDCDD"})}),(0,s.jsx)("h2",{className:"text-xl font-medium mb-2",children:"아직 약점 노트가 없습니다"}),(0,s.jsx)("p",{className:"text-gray-600",children:"문제를 풀면서 틀린 문제들을 약점 노트에 추가해보세요"})]})}var m=r(70426);function h(){return(0,s.jsxs)("div",{className:"py-[32px] font-pretendard min-h-screen text-white",children:[(0,s.jsx)(m.default,{}),(0,s.jsx)(i,{}),_.length>0?(0,s.jsx)(p,{notes:_}):(0,s.jsx)(x,{})]})}let _=[{id:"1",title:"Number of cases where two events A and B occur simultaneously",category:"Concept weakness",date:"24.11.15",frequency:3,linkCode:"PROB_001",status:"unsolved"},{id:"2",title:"Number of cases where two events A and B occur simultaneously",category:"TypeWeakness",date:"24.11.15",frequency:2,linkCode:"PROB_002",status:"reviewing"},{id:"3",title:"Number of cases where two events A and B occur simultaneously",category:"Weakness topic",date:"24.11.15",frequency:1,linkCode:"PROB_003",status:"mastered"},{id:"4",title:"Number of cases where two events A and B occur simultaneously",category:"TypeWeakness",date:"24.11.15",frequency:4,linkCode:"PROB_004",status:"unsolved"},{id:"5",title:"Number of cases where two events A and B occur simultaneously",category:"TypeWeakness",date:"24.11.15",frequency:2,linkCode:"PROB_005",status:"reviewing"},{id:"6",title:"Use of letters - real-life use (concentration)",category:"Concept weakness",date:"24.11.15",frequency:1,linkCode:"PROB_006",status:"mastered"}]},40325:function(e,t,r){"use strict";var s=r(57437),n=r(95634),a=r(46294);t.Z=e=>{let{sortType:t,setSortType:r}=e;return(0,s.jsxs)(a.Ph,{value:t,onValueChange:r,children:[(0,s.jsx)(a.i4,{className:"flex items-center justify-center w-[42px] h-[42px] rounded-full bg-dark-bg [&_.lucide-chevron-down]:hidden p-0",children:(0,s.jsx)(n.J.SortIcon,{width:24,height:24})}),(0,s.jsxs)(a.Bw,{className:"w-56",children:[(0,s.jsx)(a.Ql,{value:"recent",children:"Recent"}),(0,s.jsx)(a.Ql,{value:"latest",children:"Latest"})]})]})}},70426:function(e,t,r){"use strict";var s=r(57437),n=r(2265),a=r(37440),o=r(56106);t.default=()=>((0,n.useEffect)(()=>{(0,a.dz)(o.Q.WTOF_PAGE_HEIGHT,{height:document.documentElement.scrollHeight||document.body.scrollHeight})},[]),(0,s.jsx)(s.Fragment,{}))},46294:function(e,t,r){"use strict";r.d(t,{Bw:function(){return x},Ph:function(){return d},Ql:function(){return m},i4:function(){return u}});var s=r(57437),n=r(2265),a=r(77241),o=r(42421),i=r(14392),l=r(22468),c=r(37440);let d=a.fC;a.ZA,a.B4;let u=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,s.jsxs)(a.xz,{ref:t,className:(0,c.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...i,children:[n,(0,s.jsx)(a.JO,{asChild:!0,children:(0,s.jsx)(o.Z,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=a.xz.displayName;let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...n,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});f.displayName=a.u_.displayName;let p=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...n,children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})});p.displayName=a.$G.displayName;let x=n.forwardRef((e,t)=>{let{className:r,children:n,position:o="popper",...i}=e;return(0,s.jsx)(a.h_,{children:(0,s.jsxs)(a.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-[#0a0a0a] text-white/70 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===o&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:o,...i,children:[(0,s.jsx)(f,{}),(0,s.jsx)(a.l_,{className:(0,c.cn)("p-1","popper"===o&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,s.jsx)(p,{})]})})});x.displayName=a.VY.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",r),...n})}).displayName=a.__.displayName;let m=n.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,s.jsxs)(a.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-white/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(a.wU,{children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(a.eT,{children:n})]})});m.displayName=a.ck.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...n})}).displayName=a.Z0.displayName},37440:function(e,t,r){"use strict";r.d(t,{cn:function(){return i},dz:function(){return c},l_:function(){return d},lr:function(){return f},q1:function(){return u}});var s=r(48388);r(7395);var n=r(44839),a=r(96164),o=r(27776);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}let l=()=>!!window.flutter_inappwebview,c=async function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];if(l())try{return JSON.parse(await window.flutter_inappwebview.callHandler(e,...r.map(e=>JSON.stringify(e))))}catch(e){throw console.error("Error calling Flutter handler:",e),e}return null},d=e=>{let t=document.createElement("img");return t.id="question-result-mark",t.src=e,t.className="question-is-correct-mark",t.style.width="60px",t.style.height="60px",t.style.margin="0px",t},u=e=>null!=e?e.replace(/\$\$(.*?)\$\$|\$(.*?)\$/g,(e,t,r)=>{let n=e.startsWith("$$");try{return s.Z.renderToString(t||r,{displayMode:n,throwOnError:!1,macros:{"\\frac":"\\dfrac"}})}catch(e){return console.error("LaTeX rendering error:",e),'<span style="color: red;">[LaTeX Error: '.concat(e instanceof Error?e.message:String(e),"]</span>")}}):e,f=()=>{(0,o.A)("Some features limited due to network restrictions. This is the CES version of Chalk",{duration:3e3,id:"develop"})}},87592:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});let s=(0,r(78030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},37830:function(e,t){"use strict";var r=Symbol.for("react.element"),s=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function o(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||s}function i(){}function l(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||s}o.prototype.isReactComponent={},o.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var c=l.prototype=new i;c.constructor=l,n(c,o.prototype),c.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,s){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)d.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=s;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:r,type:e,key:o,ref:i,props:a,_owner:null}}},4410:function(e,t,r){"use strict";e.exports=r(37830)},56106:function(e,t,r){"use strict";var s,n;r.d(t,{Q:function(){return s}}),(n=s||(s={})).FTOW_EVENT_NAME="flutterEvent",n.FTOW_DRAW_QUESTION="DRAW_QUESTION",n.FTOW_SELECT_ANSWER="SELECT_ANSWER",n.FTOW_QUESTION_LIST="QUESTION_PREVIEW_LIST",n.FTOW_RESULT_LIST="RESULT_PREVIEW_LIST",n.FTOW_CHAT_INPUT="CHAT_INPUT",n.WTOF_GENERATE_BUTTONS="GENERATE_BUTTONS",n.WTOF_PAGE_HEIGHT="PAGE_HEIGHT",n.WTOF_HIGHLIGHT="HIGHLIGHT",n.FTOW_CLINIC_DATA="FTOW_CLINIC_DATA",n.FTOW_CLINIC_DE_DATA="FTOW_CLINIC_DE_DATA",n.WTOF_CLINIC_TYPE_CHANGE="CLINIC_TYPE_CHANGE",n.WTOF_REQUEST_DE_DATA="REQUEST_DE_DATA",n.WTOF_REQUEST_KEYWORD="REQUEST_KEYWORD",n.FTOW_KEYWORD_DATA="KEYWORD_DATA",n.FTOW_CLINICK="CILINIC_INIT",n.WTOF_CLINICK_HIGHLIGHT="CLINIC_HIGHLIGHT",n.FTOW_EXPLAIN="EXPLAIN",n.FTOW_DRAW_QUIZ="DRAW_QUIZ",n.FTOW_CHECK_QUIZ="CHECK_QUIZ",n.WTOF_RESULT_QUIZ="RESULT_QUIZ",n.WTOF_CHAT_VIDEO_CLICK="CHAT_VIDEO_CLICK",n.FTOW_TEACHER_ID="TEACHER_ID",n.CTOF_CLINIC_HIGHTLIGHT="CLINIC_HIGHLIGHT_FOR_FLUTTER",n.FTOW_QUIZ_ANSWER="QUIZ_INPUT",n.CTOF_CLINIC_EVENT_RESPOONSE="CLINIC_EVENT_RESPOONSE_FOR_FLUTTER",n.FTOW_CLINIC_START_MIDLE_QUESTION="CLINIC_START_MIDLE_QUESTION"}},function(e){e.O(0,[5864,3954,1351,4868,8789,5634,2971,7023,1744],function(){return e(e.s=5025)}),_N_E=e.O()}]);