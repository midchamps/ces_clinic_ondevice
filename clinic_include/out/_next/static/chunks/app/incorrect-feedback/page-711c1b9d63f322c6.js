(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1784],{97955:function(t,e,n){Promise.resolve().then(n.bind(n,33724))},63090:function(t,e,n){"use strict";function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];try{let e=n.map(t=>{if("object"==typeof t)try{return JSON.stringify(t,null,2)}catch(t){return"[Complex Object]"}return String(t)}).join(" ");console.log("".concat(t,": ").concat(e))}catch(t){console.error("Logger Error:",t)}}n.d(e,{k:function(){return o}});let o={info:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r("ℹ️ [".concat(t,"]"),...n)},success:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r("✅ [".concat(t,"]"),...n)},warn:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r("⚠️ [".concat(t,"]"),...n)},error:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r("❌ [".concat(t,"]"),...n)},debug:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r("\uD83D\uDD35 [".concat(t,"]"),...n)}}},33724:function(t,e,n){"use strict";var r=n(57437),o=n(37440),s=n(48034),c=n(56106),_=n(1402),i=n(2265);e.default=()=>{let[t,e]=(0,i.useState)([]);(0,i.useEffect)(()=>{async function t(t){if(!t.detail)return;let{type:n,data:r}=t.detail;n===c.Q.FTOW_QUESTION_LIST&&e(r)}return window.addEventListener(c.Q.FTOW_EVENT_NAME,t),s.d.onEvent(t=>{window.dispatchEvent(new CustomEvent(c.Q.FTOW_EVENT_NAME,{detail:{type:t.type,data:t.data}}))}),s.d.setReady(),window.learnScreenEventChannel=function(t,e){s.d.addEvent({type:t,data:JSON.parse(JSON.stringify(e))})},()=>{window.removeEventListener(c.Q.FTOW_EVENT_NAME,t)}},[]),(0,i.useEffect)(()=>{let t=null,e=document.querySelectorAll(".question-container"),n=[];e.forEach(t=>{n.push(t.getBoundingClientRect())}),t=n.map((t,e)=>({index:e,width:t.width,height:t.height,top:t.top,left:t.left})),(0,o.dz)(c.Q.WTOF_GENERATE_BUTTONS,{buttonList:t})},[]);let n=t.length>0?t:a;return(0,r.jsx)("div",{className:"overflow-y-auto flex flex-col items-center gap-[14px]",children:n.length>0&&n.map(t=>(0,r.jsx)("div",{className:"min-w-[340px] shrink-0 w-fit aspect-[340/95] rounded-[7px] bg-white overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]",children:(0,r.jsx)(_.K,{content:t.content,questionType:t.question_type,answers:t.answer,answerType:t.answer_type,className:"w-full h-full origin-top-left pt-2 px-4 text-black"})},t.question_id))})};let a=[{question_id:"QUS0000000201",question_index:1,content:"<p>다음 식을 인수분해 하시오. $x^2+6x+9$</p>",question_type:"opt-qus-txt",answer:[{content:"<p>$(x+3)^2$</p>",answer_no:1,is_correct:!0}],answer_type:"opt-qus-txt",selected_index_list:[1],correct_list:[1],is_correct:!0},{question_id:"QUS0000000202",question_index:2,content:"<p>다음 중 완전제곱식이 아닌 것은?</p>",question_type:"opt-qus-cho",answer:[{content:"<p>$x^2+4x+4$</p>",answer_no:1,is_correct:!1},{content:"<p>$x^2-2x+1$</p>",answer_no:2,is_correct:!1},{content:"<p>$4x^2-4x+2$</p>",answer_no:3,is_correct:!0},{content:"<p>$9x^2+12x+4$</p>",answer_no:4,is_correct:!1},{content:"<p>$9x^2+12x+4$</p>",answer_no:5,is_correct:!1}],answer_type:"opt-qus-cho-4",selected_index_list:[2],correct_list:[1,2,3,4],is_correct:!0},{question_id:"QUS0000000203",question_index:3,content:"<p>다음 식을 전개하시오.$(2x-3)(x+1)$</p>",question_type:"opt-qus-txt",answer:[{content:"<p>$2x^2-x-3$</p>",answer_no:1,is_correct:!0}],answer_type:"opt-qus-txt",selected_index_list:[1],correct_list:[1],is_correct:!0},{question_id:"QUS0000000204",question_index:4,content:"<p>다음 중 인수분해가 잘못된 것은?</p>",question_type:"opt-qus-cho",answer:[{content:"<p>$x^2-1=(x+1)(x-1)$</p>",answer_no:1,is_correct:!1},{content:"<p>$x^2+2x+1=(x+1)^2$</p>",answer_no:2,is_correct:!1},{content:"<p>$2x^2-5x+2=(2x-2)(x-1)$</p>",answer_no:3,is_correct:!0}],answer_type:"opt-qus-cho-3",selected_index_list:[2],correct_list:[1,2,3],is_correct:!0},{question_id:"QUS0000000205",question_index:5,content:"<p>다음 식을 전개하시오. $(x+2)^2$</p>",question_type:"opt-qus-txt",answer:[{content:"<p>$x^2+4x+4$</p>",answer_no:1,is_correct:!0}],answer_type:"opt-qus-txt",selected_index_list:[0],correct_list:[1],is_correct:!1},{question_id:"QUS0000000206",question_index:6,content:"<p>다음 중 인수분해가 올바른 것은?</p>",question_type:"opt-qus-cho",answer:[{content:"<p>$x^2+x-2=(x-1)(x+2)$</p>",answer_no:1,is_correct:!0},{content:"<p>$x^2-3x+2=(x-1)(x-1)$</p>",answer_no:2,is_correct:!1},{content:"<p>$x^2+4x+3=(x+1)(x+2)$</p>",answer_no:3,is_correct:!1},{content:"<p>$x^2+4x+3=(x+1)(x+2)$</p>",answer_no:4,is_correct:!1},{content:"<p>$x^2+4x+3=(x+1)(x+2)$</p>",answer_no:5,is_correct:!1}],answer_type:"opt-qus-cho-3",selected_index_list:[0],correct_list:[1,2,3],is_correct:!0},{question_id:"QUS0000000207",question_index:7,content:"<p>다음 식의 전개식을 구하시오.$(3x-2)(x+1)$</p>",question_type:"opt-qus-txt",answer:[{content:"<p>$3x^2+x-2$</p>",answer_no:1,is_correct:!0}],answer_type:"opt-qus-txt",selected_index_list:[1],correct_list:[1],is_correct:!0},{question_id:"QUS0000000208",question_index:8,content:"<p>다음 중 완전제곱식인 것은?</p>",question_type:"opt-qus-cho",answer:[{content:"<p>$x^2+2x+2$</p>",answer_no:1,is_correct:!1},{content:"<p>$x^2-4x+4$</p>",answer_no:2,is_correct:!0},{content:"<p>$x^2+x+1$</p>",answer_no:3,is_correct:!1},{content:"<p>$x^2+x+1$</p>",answer_no:4,is_correct:!1},{content:"<p>$x^2+x+1$</p>",answer_no:5,is_correct:!1}],answer_type:"opt-qus-cho-3",selected_index_list:[1],correct_list:[1,2,3],is_correct:!0},{question_id:"QUS0000000209",question_index:9,content:"<p>다음 식을 인수분해 하시오.$x^2-5x+6$</p>",question_type:"opt-qus-txt",answer:[{content:"<p>$(x-2)(x-3)$</p>",answer_no:1,is_correct:!0}],answer_type:"opt-qus-txt",selected_index_list:[0],correct_list:[1],is_correct:!1},{question_id:"QUS0000000210",question_index:10,content:"<p>다음 중 인수분해가 잘못된 것은?</p>",question_type:"opt-qus-cho",answer:[{content:"<p>$x^2-4=(x+2)(x-2)$</p>",answer_no:1,is_correct:!1},{content:"<p>$x^2+6x+9=(x+3)(x+3)$</p>",answer_no:2,is_correct:!1},{content:"<p>$x^2-x-2=(x+1)(x-2)$</p>",answer_no:3,is_correct:!0},{content:"<p>$x^2-x-2=(x+1)(x-2)$</p>",answer_no:4,is_correct:!0},{content:"<p>$x^2-x-2=(x+1)(x-2)$</p>",answer_no:5,is_correct:!0}],answer_type:"opt-qus-cho-3",selected_index_list:[2],correct_list:[1,2,3],is_correct:!0}]},37440:function(t,e,n){"use strict";n.d(e,{cn:function(){return _},dz:function(){return a},l_:function(){return p},lr:function(){return x},q1:function(){return u}});var r=n(48388);n(7395);var o=n(44839),s=n(96164),c=n(27776);function _(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,s.m6)((0,o.W)(e))}let i=()=>!!window.flutter_inappwebview,a=async function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(i())try{return JSON.parse(await window.flutter_inappwebview.callHandler(t,...n.map(t=>JSON.stringify(t))))}catch(t){throw console.error("Error calling Flutter handler:",t),t}return null},p=t=>{let e=document.createElement("img");return e.id="question-result-mark",e.src=t,e.className="question-is-correct-mark",e.style.width="60px",e.style.height="60px",e.style.margin="0px",e},u=t=>null!=t?t.replace(/\$\$(.*?)\$\$|\$(.*?)\$/g,(t,e,n)=>{let o=t.startsWith("$$");try{return r.Z.renderToString(e||n,{displayMode:o,throwOnError:!1,macros:{"\\frac":"\\dfrac"}})}catch(t){return console.error("LaTeX rendering error:",t),'<span style="color: red;">[LaTeX Error: '.concat(t instanceof Error?t.message:String(t),"]</span>")}}):t,x=()=>{(0,c.A)("Some features limited due to network restrictions. This is the CES version of Chalk",{duration:3e3,id:"develop"})}},48034:function(t,e,n){"use strict";n.d(e,{d:function(){return s}});var r=n(63090);class o{static getInstance(){return o.instance||(o.instance=new o),o.instance}addEvent(t){r.k.info("[EventStore] Adding event:",t),this.isReady?this.callbacks.forEach(e=>e(t)):this.eventQueue.push(t)}setReady(){this.isReady=!0,this.processQueue()}onEvent(t){this.callbacks.push(t)}processQueue(){for(;this.eventQueue.length>0;){let t=this.eventQueue.shift();t&&this.callbacks.forEach(e=>e(t))}}constructor(){this.eventQueue=[],this.isReady=!1,this.callbacks=[]}}let s=o.getInstance()},56106:function(t,e,n){"use strict";var r,o;n.d(e,{Q:function(){return r}}),(o=r||(r={})).FTOW_EVENT_NAME="flutterEvent",o.FTOW_DRAW_QUESTION="DRAW_QUESTION",o.FTOW_SELECT_ANSWER="SELECT_ANSWER",o.FTOW_QUESTION_LIST="QUESTION_PREVIEW_LIST",o.FTOW_RESULT_LIST="RESULT_PREVIEW_LIST",o.FTOW_CHAT_INPUT="CHAT_INPUT",o.WTOF_GENERATE_BUTTONS="GENERATE_BUTTONS",o.WTOF_PAGE_HEIGHT="PAGE_HEIGHT",o.WTOF_HIGHLIGHT="HIGHLIGHT",o.FTOW_CLINIC_DATA="FTOW_CLINIC_DATA",o.FTOW_CLINIC_DE_DATA="FTOW_CLINIC_DE_DATA",o.WTOF_CLINIC_TYPE_CHANGE="CLINIC_TYPE_CHANGE",o.WTOF_REQUEST_DE_DATA="REQUEST_DE_DATA",o.WTOF_REQUEST_KEYWORD="REQUEST_KEYWORD",o.FTOW_KEYWORD_DATA="KEYWORD_DATA",o.FTOW_CLINICK="CILINIC_INIT",o.WTOF_CLINICK_HIGHLIGHT="CLINIC_HIGHLIGHT",o.FTOW_EXPLAIN="EXPLAIN",o.FTOW_DRAW_QUIZ="DRAW_QUIZ",o.FTOW_CHECK_QUIZ="CHECK_QUIZ",o.WTOF_RESULT_QUIZ="RESULT_QUIZ",o.WTOF_CHAT_VIDEO_CLICK="CHAT_VIDEO_CLICK",o.FTOW_TEACHER_ID="TEACHER_ID",o.CTOF_CLINIC_HIGHTLIGHT="CLINIC_HIGHLIGHT_FOR_FLUTTER",o.FTOW_QUIZ_ANSWER="QUIZ_INPUT",o.CTOF_CLINIC_EVENT_RESPOONSE="CLINIC_EVENT_RESPOONSE_FOR_FLUTTER",o.FTOW_CLINIC_START_MIDLE_QUESTION="CLINIC_START_MIDLE_QUESTION"}},function(t){t.O(0,[5864,3954,1213,1351,4868,2971,7023,1744],function(){return t(t.s=97955)}),_N_E=t.O()}]);