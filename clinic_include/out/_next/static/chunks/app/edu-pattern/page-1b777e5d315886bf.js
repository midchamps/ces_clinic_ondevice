(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5385],{33234:function(e,t,i){Promise.resolve().then(i.bind(i,80463)),Promise.resolve().then(i.bind(i,84298)),Promise.resolve().then(i.bind(i,70426))},80463:function(e,t,i){"use strict";i.d(t,{default:function(){return S}});var s=i(57437),n=i(2265),d=i(57818),a=i(87592),r=i(62737),l=i.n(r),o=i(37440),c=e=>{let{startWeek:t,weeklyLog:i}=e,n=(e,t)=>{let i=parseInt(e.split(":")[0]),s=parseInt(e.split(":")[1]),n=parseInt(t.split(":")[0]),d=parseInt(t.split(":")[1]);return{left:"".concat((60*i+s)/1440*100,"%"),width:"".concat(((n-i)*60+(d-s))/1440*100,"%")}},d=e=>{let[t,i]=e.split(":").map(Number);return 60*t+i},r=e=>{let t=e.studies.reduce((e,t)=>{let i=d(t.start);return e+(d(t.end)-i)},0);return"".concat(Math.floor(t/60).toString(),"h ").concat((t%60).toString().padStart(2,"0"),"m")};return i?(0,s.jsxs)("div",{className:"grow border border-white/10 rounded-[16px] bg-black/5 px-[15px] py-[20px]",children:[(0,s.jsxs)("p",{className:"font-bold text-[20px] pl-[3px]",children:["Coach Kim studies late",(0,s.jsx)("br",{}),"often \uD83E\uDD89"]}),(0,s.jsxs)("div",{className:"pt-[24px] pb-[20px] flex items-center justify-end gap-[20px]",children:[(0,s.jsxs)("div",{className:"flex items-center gap-[6px]",children:[(0,s.jsx)("div",{className:"w-[12px] h-[12px] rounded-[2px] bg-tag-green"}),(0,s.jsx)("div",{className:"font-medium text-[12px] text-white/50",children:"Study Time"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-[6px]",children:[(0,s.jsx)("div",{className:"h-[12px] w-[12px] rounded-[2px] overflow-hidden relative",children:(0,s.jsx)(u,{width:"12px",left:"0"})}),(0,s.jsx)("div",{className:"font-medium text-[12px] text-white/50",children:"Connection Time"})]})]}),i.map((e,i)=>{let d=l()(t).add(i,"day").isSame(l()(),"day"),c=l()(t).add(i,"day").isAfter(l()(),"day");return(0,s.jsxs)("div",{className:"border-b border-white/10 pb-[18px] mb-[18px] flex justify-between items-center text-white/50",children:[(0,s.jsx)("div",{className:"w-[52px] text-center flex-shrink-0 font-abc text-[14px] leading-none ".concat(d?"text-white":""),children:e.day}),!c&&(0,s.jsxs)("div",{className:"flex-1 rounded-[4px] h-[16px] relative ".concat(d?"bg-[#7D7D7D]":c?"bg-transparent":"bg-[#1f1f1f]"),children:[e.connections.map(e=>{let{left:t,width:i}=n(e.start,e.end);return(0,s.jsx)(u,{width:i,left:t},e.id)}),e.studies.map(e=>{let{left:t,width:i}=n(e.start,e.end);return(0,s.jsx)("div",{className:"absolute top-0 h-full bg-tag-green group  cursor-pointer transition-all duration-200 hover:shadow-md",style:{left:t,width:i}},e.id)})]}),(0,s.jsxs)("div",{className:"flex gap-[7px] items-center justify-end font-abc text-[14px] w-[101px] ".concat(d?"text-white":""),onClick:o.lr,children:[d?"Studying":c?"Scheduled":r(e),(0,s.jsx)(a.Z,{})]})]},e.day+i)}),(0,s.jsxs)("div",{className:"flex items-center justify-between pl-[52px] pr-[101px] font-abc text-[12px] text-white/50 ",children:[(0,s.jsx)("span",{children:"0am"}),(0,s.jsx)("span",{children:"12pm"}),(0,s.jsx)("span",{children:"24pm"})]})]}):(0,s.jsx)("div",{className:"grow border border-white/10 rounded-[16px] bg-black/5 px-[15px] py-[20px]",children:"No learning history."})};let u=e=>{let{width:t,left:i}=e;return(0,s.jsxs)("svg",{className:"absolute inset-y-0",style:{left:i,width:t},width:t,height:"100%",preserveAspectRatio:"xMidYMid slice",children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"diagonal-stripe",width:"4",height:"5",patternUnits:"userSpaceOnUse",patternTransform:"rotate(25)",x:"0",y:"0",children:(0,s.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"20",stroke:"#434343",strokeWidth:"1"})})}),(0,s.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#diagonal-stripe)",patternContentUnits:"objectBoundingBox"})]})};var x=e=>{let{progress:t,size:i=175,strokeWidth:d=6,animationDuration:a=1e3}=e,[r,l]=(0,n.useState)(0),o=i/2,c=(i-d)/2,u=2*Math.PI*c;return(0,n.useEffect)(()=>{let e=setTimeout(()=>{l(t)},100);return()=>clearTimeout(e)},[t]),(0,s.jsxs)("div",{className:"relative",style:{width:i,height:i},children:[(0,s.jsxs)("svg",{className:"transform -rotate-90",width:i,height:i,children:[(0,s.jsx)("circle",{className:"text-gray-700",stroke:"currentColor",strokeWidth:d,fill:"transparent",r:c,cx:o,cy:o}),(0,s.jsx)("circle",{className:"text-white transition-all duration-1000 ease-out",stroke:"currentColor",strokeWidth:d,strokeLinecap:"round",fill:"transparent",r:c,cx:o,cy:o,style:{strokeDasharray:u,strokeDashoffset:u-r/100*u}})]}),(0,s.jsx)("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:(0,s.jsxs)("span",{className:"text-[75px] font-bold text-white font-graphik",children:[r,(0,s.jsx)("span",{className:"opacity-50 text-[22px] font-normal",children:"%"})]})})]})},p=e=>{let{weeklyStats:t}=e;if(t)return(0,s.jsxs)("div",{className:"flex flex-col gap-[40px]",children:[(0,s.jsxs)("div",{className:"flex justify-between pl-[24px]",children:[(0,s.jsxs)("div",{className:"text-[20px] font-bold -tracking-[1%]",children:["Coach Kim, ranked ",t.rank,"th",(0,s.jsx)("br",{}),"in effort this week \uD83D\uDCAA\uD83C\uDFFC"]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-y-[4px] gap-x-[20px] text-[16px] font-abc",children:[(0,s.jsxs)("div",{className:"h-fit",children:[(0,s.jsx)("span",{className:"opacity-50 font-pretendard",children:"Avg. Study Time"})," ",t.averageStudyTime,"h"]}),(0,s.jsxs)("div",{className:"h-fit",children:[(0,s.jsx)("span",{className:"opacity-50 font-pretendard",children:"Total Time"})," ",t.totalTime,"h"]}),(0,s.jsxs)("div",{className:"h-fit",children:[(0,s.jsx)("span",{className:"opacity-50 font-pretendard",children:"Most Productive"})," ",t.productiveDay]}),(0,s.jsxs)("div",{className:"h-fit",children:[(0,s.jsx)("span",{className:"opacity-50 font-pretendard",children:"Most Focused"})," ",t.focusedDay]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-[20px] h-[320px]",children:[(0,s.jsxs)("div",{className:"h-full w-full border border-white/10 rounded-[16px] bg-black/5 flex flex-col gap-[42px] p-[20px]",children:[(0,s.jsx)("p",{className:"font-bold text-[20px]",children:"Weekly Progress"}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(x,{progress:t.recommendedProgress})})]}),(0,s.jsxs)("div",{className:"h-full w-full border border-white/10 rounded-[16px] bg-black/5 flex flex-col gap-[42px] p-[20px] justify-between",children:[(0,s.jsx)("p",{className:"font-bold text-[20px]",children:"Weekly Content Achievement"}),(0,s.jsxs)("div",{children:[t.contentCompletion.completed,"% Complete!",(0,s.jsx)("br",{}),t.contentCompletion.total-t.contentCompletion.completed," ","items remaining \uD83D\uDC4F\uD83C\uDFFB"]}),(0,s.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,s.jsxs)("div",{className:"flex justify-end",children:[t.contentCompletion.completed,(0,s.jsxs)("span",{className:"opacity-50",children:["/",t.contentCompletion.total]})]}),(0,s.jsx)("div",{className:"bg-white/10 rounded-full h-[6px]",children:(0,s.jsx)("div",{className:"h-full bg-white rounded-full transition-all",style:{width:"".concat(t.contentCompletion.completed/t.contentCompletion.total*100,"%")}})})]})]})]})]})},m=i(88989),h=e=>{let{selectedWeek:t,onWeekChange:i}=e;return(0,s.jsx)(m._W,{className:"edu-week-picker",showOutsideDays:!0,classNames:{months:"relative bg-primary-bg rounded-[16px] p-[18px] pt-[24px] font-abc text-[12px]",caption_label:"pl-[6px]",month_caption:"mb-[24px]",nav:"absolute top-[24px] right-[24px] flex gap-[24px] items-center",chevron:"fill-white w-[12px] h-[12px]",month_grid:"w-full",week:"h-[28px]",day:"text-center text-[#757575] aria-selected:text-gray-ccc",selected:"bg-[#d9d9d9]/10 first:rounded-l-[4px] last:rounded-r-[4px]"},ISOWeek:!0,modifiers:{selected:t,range_start:null==t?void 0:t.from,range_end:null==t?void 0:t.to,range_middle:e=>!!t&&(0,m.CO)(t,e)},onDayClick:i,formatters:{formatWeekdayName:e=>e.toLocaleDateString("en-US",{weekday:"narrow"})}})},y=i(66648),f=i(49727),g=i(65499),T=i(51620),v=i(75280),w=()=>{let[e,t]=(0,n.useState)({from:(0,g.z)(new Date,{weekStartsOn:1}),to:(0,T.v)(new Date,{weekStartsOn:1})}),i=(null==e?void 0:e.from)||new Date,d=v.m[l()(i).format("YYYYMMDD")];return(0,s.jsxs)("div",{className:"flex gap-[8px] pt-[20px] relative overflow-hidden",children:[(0,s.jsx)("div",{className:"w-[256px] shrink-0 sticky top-0 z-[2]",children:(0,s.jsx)("div",{className:"sticky",children:(0,s.jsx)(h,{selectedWeek:e,onWeekChange:e=>{t({from:(0,g.z)(e,{weekStartsOn:1}),to:(0,T.v)(e,{weekStartsOn:1})})}})})}),(0,s.jsxs)("div",{className:"grow flex flex-col gap-[64px] relative z-[2] h-full overflow-y-auto max-h-[calc(100vh-68px)] pb-[100px]",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-[72px]",children:[(0,s.jsx)(c,{startWeek:i,weeklyLog:null==d?void 0:d.weeklyData}),(0,s.jsx)(p,{weeklyStats:null==d?void 0:d.weeklyStats})]}),(0,s.jsx)(f.Z,{})]}),(0,s.jsx)("div",{className:"absolute top-[397px] left-full -ml-[309px] min-w-max z-[1]",children:(0,s.jsx)(y.default,{className:"object-cover",src:"/assets/images/blur.png",alt:"blur",width:707,height:707,priority:!0})})]})};let N=(0,d.default)(()=>Promise.all([i.e(342),i.e(2792),i.e(541),i.e(5939),i.e(3983)]).then(i.bind(i,13983)),{loadableGenerated:{webpack:()=>[13983]},ssr:!1,loading:()=>(0,s.jsx)("div",{})}),j=()=>{let[e,t]=(0,n.useState)("weekly");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"font-semibold text-[16px] flex items-center gap-[24px]",children:[(0,s.jsx)("button",{onClick:()=>t("weekly"),className:"font-medium ".concat("weekly"===e?"":"text-gray-eight"),children:"Daily Learning Records"}),(0,s.jsx)("button",{onClick:()=>t("monthly"),className:"font-medium ".concat("monthly"===e?"":"text-gray-eight"),children:"Monthly Learning Records"})]}),"monthly"!==e?(0,s.jsx)(w,{}):(0,s.jsx)(N,{})]})};var S=()=>(0,s.jsx)("div",{className:"pt-[24px] snap-start sticky top-0 z-10",children:(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{}),children:(0,s.jsx)(j,{})})})},84298:function(e,t,i){"use strict";i.d(t,{default:function(){return d}});var s=i(57437),n=e=>{let{title:t,my:i,everage:n,width:d}=e;return(0,s.jsxs)("div",{className:"h-full w-full rounded-[16px] bg-primary-bg py-[20px] px-[18px] flex flex-col justify-between",children:[(0,s.jsx)("div",{className:"font-bold text-[20px]",children:t}),(0,s.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between text-[16px] font-abc",children:[(0,s.jsx)("span",{children:i}),(0,s.jsx)("span",{className:"text-gray-d8",children:n})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-[6px] h-[6px]",children:[(0,s.jsx)("div",{className:"h-full rounded-full bg-white",style:{width:d}}),(0,s.jsx)("div",{className:"h-full rounded-full bg-gray-d8 grow"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between text-[16px]",children:[(0,s.jsx)("span",{children:"Me"}),(0,s.jsx)("span",{className:"text-gray-d8",children:"Average"})]})]})]})},d=()=>(0,s.jsxs)("div",{className:"h-[186px] flex pt-[20px] gap-[8px] justify-between snap-start",children:[(0,s.jsx)("div",{className:"h-screen w-[256px] pt-[12px]",children:(0,s.jsx)("div",{className:"font-bold text-[20px]",children:"Coach Kim, you have an excellent learning focus! \uD83C\uDF89"})}),(0,s.jsxs)("div",{className:"flex gap-[20px] grow",children:[(0,s.jsx)(n,{title:"Weekly Learning Days",my:"4.5d",everage:"2.5d",width:"".concat(4.5/7*100,"%")}),(0,s.jsx)(n,{title:"Daily Learning Time",my:"12H 50M",everage:"14H 30M",width:"".concat(12.5/27*100,"%")})]})]})},49727:function(e,t,i){"use strict";var s=i(57437),n=i(48475);t.Z=()=>(0,s.jsxs)("div",{className:"flex flex-col items-center gap-[16px]",children:[(0,s.jsxs)("div",{className:"text-center text-[12px]",children:["Great work this week! \uD83D\uDC4F\uD83C\uDFFB",(0,s.jsx)("br",{}),"Let's keep going strong"]}),(0,s.jsx)(n.default,{})]})},75280:function(e,t,i){"use strict";i.d(t,{k:function(){return n},m:function(){return s}});let s={20241125:{weeklyData:[{day:"M",connections:[{id:101,start:"09:00",end:"15:00",title:"접속"}],studies:[{id:101,start:"09:30",end:"11:30",title:"Midterm Test Review"},{id:102,start:"13:00",end:"14:30",title:"Advanced Math"}]},{day:"T",connections:[{id:103,start:"14:00",end:"20:00",title:"접속"}],studies:[{id:103,start:"14:30",end:"16:30",title:"English Reading"},{id:104,start:"17:00",end:"19:30",title:"Science Experiment"}]},{day:"W",connections:[{id:105,start:"10:00",end:"16:00",title:"접속"}],studies:[{id:105,start:"10:30",end:"12:30",title:"Math Problem Solving"},{id:106,start:"13:30",end:"15:30",title:"English Writing"}]},{day:"T",connections:[{id:107,start:"13:00",end:"18:00",title:"접속"}],studies:[{id:107,start:"13:30",end:"15:30",title:"Science Theory"},{id:108,start:"16:00",end:"17:30",title:"Math Supplementary"}]},{day:"F",connections:[{id:109,start:"15:00",end:"21:00",title:"접속"}],studies:[{id:109,start:"15:30",end:"17:30",title:"Mock Test"},{id:110,start:"18:00",end:"20:30",title:"Weakness Review"}]},{day:"S",connections:[{id:111,start:"14:00",end:"17:00",title:"접속"}],studies:[{id:111,start:"14:30",end:"16:30",title:"Weekly Review"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:112,averageStudyTime:3,totalTime:21,productiveDay:"Friday",focusedDay:"Wednesday",recommendedProgress:62,contentCompletion:{completed:16,total:35}}},20241202:{weeklyData:[{day:"M",connections:[{id:1,start:"09:00",end:"12:00",title:"접속"},{id:2,start:"14:00",end:"18:30",title:"접속"}],studies:[{id:1,start:"09:30",end:"11:45",title:"Math Lecture"},{id:2,start:"14:30",end:"17:00",title:"Science Experiment"}]},{day:"T",connections:[{id:3,start:"13:00",end:"20:00",title:"접속"}],studies:[{id:3,start:"13:30",end:"15:30",title:"English Grammar"},{id:4,start:"16:00",end:"19:30",title:"Math Problem Solving"}]},{day:"W",connections:[{id:5,start:"10:00",end:"17:00",title:"접속"}],studies:[{id:5,start:"10:15",end:"12:00",title:"Science Theory"},{id:6,start:"14:00",end:"16:45",title:"Mock Test"}]},{day:"T",connections:[{id:7,start:"15:00",end:"21:00",title:"접속"}],studies:[{id:7,start:"15:30",end:"17:30",title:"English Listening"},{id:8,start:"18:00",end:"20:30",title:"Advanced Math"}]},{day:"F",connections:[{id:9,start:"09:30",end:"16:00",title:"접속"}],studies:[{id:9,start:"10:00",end:"12:30",title:"Science Experiment"},{id:10,start:"13:30",end:"15:30",title:"English Writing"}]},{day:"S",connections:[{id:11,start:"14:00",end:"18:00",title:"접속"}],studies:[{id:11,start:"14:30",end:"17:30",title:"Weekly Review"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:89,averageStudyTime:3.2,totalTime:22.4,productiveDay:"Tuesday",focusedDay:"Wednesday",recommendedProgress:65,contentCompletion:{completed:15,total:35}}},20241209:{weeklyData:[{day:"M",connections:[{id:12,start:"11:00",end:"16:00",title:"접속"},{id:13,start:"19:00",end:"22:00",title:"접속"}],studies:[{id:12,start:"11:30",end:"13:30",title:"Basic Math"},{id:13,start:"14:00",end:"15:30",title:"English Reading"},{id:14,start:"19:30",end:"21:30",title:"Advanced Science"}]},{day:"T",connections:[{id:15,start:"09:00",end:"15:00",title:"접속"}],studies:[{id:15,start:"09:30",end:"11:30",title:"Math Problem Solving"},{id:16,start:"12:30",end:"14:30",title:"English Listening"}]},{day:"W",connections:[{id:17,start:"14:00",end:"20:00",title:"접속"}],studies:[{id:17,start:"14:30",end:"16:30",title:"Science Experiment"},{id:18,start:"17:00",end:"19:30",title:"Math Lecture"}]},{day:"T",connections:[{id:19,start:"13:00",end:"18:00",title:"접속"}],studies:[{id:19,start:"13:30",end:"15:30",title:"English Grammar"},{id:20,start:"16:00",end:"17:30",title:"Science Theory"}]},{day:"F",connections:[{id:21,start:"10:00",end:"17:00",title:"접속"}],studies:[{id:21,start:"10:30",end:"12:30",title:"Mock Test"},{id:22,start:"14:00",end:"16:30",title:"Error Analysis"}]},{day:"S",connections:[{id:23,start:"15:00",end:"18:00",title:"접속"}],studies:[{id:23,start:"15:30",end:"17:30",title:"Weekly Review"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:124,averageStudyTime:2.8,totalTime:19.6,productiveDay:"Tuesday",focusedDay:"Friday",recommendedProgress:58,contentCompletion:{completed:12,total:35}}},20241216:{weeklyData:[{day:"M",connections:[{id:24,start:"13:00",end:"19:00",title:"접속"}],studies:[{id:24,start:"13:30",end:"15:30",title:"Advanced Science"},{id:25,start:"16:00",end:"18:30",title:"Math Problem Bank"}]},{day:"T",connections:[{id:26,start:"10:00",end:"16:00",title:"접속"},{id:27,start:"19:00",end:"21:00",title:"접속"}],studies:[{id:26,start:"10:30",end:"12:30",title:"English Writing"},{id:27,start:"13:30",end:"15:30",title:"Science Experiment"},{id:28,start:"19:30",end:"20:30",title:"Math Supplementary"}]},{day:"W",connections:[{id:29,start:"09:00",end:"14:00",title:"접속"}],studies:[{id:29,start:"09:30",end:"11:30",title:"Mock Test"},{id:30,start:"12:00",end:"13:30",title:"Error Analysis"}]},{day:"T",connections:[{id:31,start:"14:00",end:"20:00",title:"접속"}],studies:[{id:31,start:"14:30",end:"16:30",title:"English Reading"},{id:32,start:"17:00",end:"19:30",title:"Advanced Math"}]},{day:"F",connections:[{id:33,start:"11:00",end:"17:00",title:"접속"}],studies:[{id:33,start:"11:30",end:"13:30",title:"Science Theory"},{id:34,start:"14:30",end:"16:30",title:"English Listening"}]},{day:"S",connections:[{id:35,start:"13:00",end:"16:00",title:"접속"}],studies:[{id:35,start:"13:30",end:"15:30",title:"Weekly Review"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:156,averageStudyTime:2.5,totalTime:17.5,productiveDay:"Thursday",focusedDay:"Monday",recommendedProgress:45,contentCompletion:{completed:18,total:35}}},20241223:{weeklyData:[{day:"M",connections:[{id:36,start:"10:00",end:"15:00",title:"접속"}],studies:[{id:36,start:"10:30",end:"12:30",title:"Math Final Exam Prep"},{id:37,start:"13:00",end:"14:30",title:"English Vocabulary Test"}]},{day:"T",connections:[{id:38,start:"14:00",end:"19:00",title:"접속"}],studies:[{id:38,start:"14:30",end:"16:30",title:"Math Final Exam Prep"},{id:39,start:"17:00",end:"18:30",title:"Math Problem Solving"}]},{day:"W",connections:[{id:40,start:"09:00",end:"12:00",title:"접속"}],studies:[{id:40,start:"09:30",end:"11:30",title:"Final Exam"}]},{day:"T",connections:[{id:41,start:"13:00",end:"16:00",title:"접속"}],studies:[{id:41,start:"13:30",end:"15:30",title:"Final Exam"}]},{day:"F",connections:[{id:42,start:"15:00",end:"18:00",title:"접속"}],studies:[{id:42,start:"15:30",end:"17:30",title:"Vacation Planning"}]},{day:"S",connections:[],studies:[]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:201,averageStudyTime:2.1,totalTime:14.7,productiveDay:"Wednesday",focusedDay:"Tuesday",recommendedProgress:42,contentCompletion:{completed:10,total:35}}},20241230:{weeklyData:[{day:"M",connections:[{id:43,start:"10:00",end:"16:00",title:"접속"}],studies:[{id:43,start:"10:30",end:"12:30",title:"Winter Break Preview"},{id:44,start:"13:30",end:"15:30",title:"First Semester Review Plan"}]},{day:"T",connections:[{id:45,start:"13:00",end:"17:00",title:"접속"}],studies:[{id:45,start:"13:30",end:"15:30",title:"Annual Study Summary"},{id:46,start:"16:00",end:"16:30",title:"New Year Goal Setting"}]},{day:"W",connections:[{id:47,start:"14:00",end:"18:00",title:"접속"}],studies:[{id:47,start:"14:30",end:"16:30",title:"New Year Special Lecture"},{id:48,start:"17:00",end:"17:30",title:"Study Planning"}]},{day:"T",connections:[{id:49,start:"10:00",end:"15:00",title:"접속"}],studies:[{id:49,start:"10:30",end:"12:30",title:"Math Preview"},{id:50,start:"13:30",end:"14:30",title:"English Preview"}]},{day:"F",connections:[{id:51,start:"13:00",end:"18:00",title:"접속"}],studies:[{id:51,start:"13:30",end:"15:30",title:"Science Lab Prep"},{id:52,start:"16:00",end:"17:30",title:"Concept Review"}]},{day:"S",connections:[{id:53,start:"14:00",end:"17:00",title:"접속"}],studies:[{id:53,start:"14:30",end:"16:30",title:"Weekly Study Summary"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:167,averageStudyTime:2.4,totalTime:16.8,productiveDay:"Monday",focusedDay:"Tuesday",recommendedProgress:51,contentCompletion:{completed:14,total:35}}},20250106:{weeklyData:[{day:"M",connections:[{id:54,start:"09:00",end:"15:00",title:"접속"}],studies:[{id:54,start:"09:30",end:"11:30",title:"New Term Orientation"},{id:55,start:"13:00",end:"14:30",title:"Math Foundation"}]},{day:"T",connections:[{id:56,start:"13:00",end:"19:00",title:"접속"}],studies:[{id:56,start:"13:30",end:"15:30",title:"Science Introduction"},{id:57,start:"16:00",end:"18:30",title:"English Assessment"}]},{day:"W",connections:[{id:58,start:"10:00",end:"16:00",title:"접속"}],studies:[{id:58,start:"10:30",end:"12:30",title:"Math Basic Course"},{id:59,start:"13:30",end:"15:30",title:"English Speaking"}]},{day:"T",connections:[{id:60,start:"14:00",end:"20:00",title:"접속"}],studies:[{id:60,start:"14:30",end:"16:30",title:"Science Theory"},{id:61,start:"17:00",end:"19:30",title:"Math Advanced"}]},{day:"F",connections:[{id:62,start:"09:00",end:"15:00",title:"접속"}],studies:[{id:62,start:"09:30",end:"11:30",title:"Diagnostic Test"},{id:63,start:"13:00",end:"14:30",title:"Study Planning"}]},{day:"S",connections:[{id:64,start:"14:00",end:"17:00",title:"접속"}],studies:[{id:64,start:"14:30",end:"16:30",title:"Weekly Review"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:145,averageStudyTime:2.6,totalTime:18.2,productiveDay:"Thursday",focusedDay:"Monday",recommendedProgress:55,contentCompletion:{completed:16,total:35}}},20250113:{weeklyData:[{day:"M",connections:[{id:65,start:"10:00",end:"16:00",title:"접속"}],studies:[{id:65,start:"10:30",end:"12:30",title:"Math Regular Course"},{id:66,start:"13:30",end:"15:30",title:"English Reading"}]},{day:"T",connections:[{id:67,start:"13:00",end:"19:00",title:"접속"}],studies:[{id:67,start:"13:30",end:"15:30",title:"Science Lab"},{id:68,start:"16:00",end:"18:30",title:"Math Practice"}]},{day:"W",connections:[{id:69,start:"09:00",end:"15:00",title:"접속"}],studies:[{id:69,start:"09:30",end:"11:30",title:"English Writing"},{id:70,start:"13:00",end:"14:30",title:"Science Theory"}]},{day:"T",connections:[{id:71,start:"14:00",end:"20:00",title:"접속"}],studies:[{id:71,start:"14:30",end:"16:30",title:"Math Advanced"},{id:72,start:"17:00",end:"19:30",title:"English Grammar"}]},{day:"F",connections:[{id:73,start:"10:00",end:"16:00",title:"접속"}],studies:[{id:73,start:"10:30",end:"12:30",title:"Progress Test"},{id:74,start:"13:30",end:"15:30",title:"Review Session"}]},{day:"S",connections:[{id:75,start:"14:00",end:"17:00",title:"접속"}],studies:[{id:75,start:"14:30",end:"16:30",title:"Weekly Review"}]},{day:"S",connections:[],studies:[]}],weeklyStats:{rank:132,averageStudyTime:2.8,totalTime:19.6,productiveDay:"Tuesday",focusedDay:"Thursday",recommendedProgress:58,contentCompletion:{completed:19,total:35}}}},n={241127:{video:!0,quiz:!1,question:!1,twin:!0},241205:{video:!0,quiz:!1,question:!1,twin:!0},241219:{video:!0,quiz:!0,question:!0,twin:!0},241222:{video:!1,quiz:!1,question:!0,twin:!0},241225:{video:!0,quiz:!0,question:!0,twin:!1},250103:{video:!0,quiz:!0,question:!0,twin:!1}}},70426:function(e,t,i){"use strict";var s=i(57437),n=i(2265),d=i(37440),a=i(56106);t.default=()=>((0,n.useEffect)(()=>{(0,d.dz)(a.Q.WTOF_PAGE_HEIGHT,{height:document.documentElement.scrollHeight||document.body.scrollHeight})},[]),(0,s.jsx)(s.Fragment,{}))},48475:function(e,t,i){"use strict";var s=i(57437);i(2265);var n=i(95634);t.default=()=>(0,s.jsx)("button",{type:"button",className:"w-[44px] h-[44px] rounded-full bg-white/10  flex items-center justify-center",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,s.jsx)(n.J.ScrollUp,{})})},37440:function(e,t,i){"use strict";i.d(t,{cn:function(){return r},dz:function(){return o},l_:function(){return c},lr:function(){return x},q1:function(){return u}});var s=i(48388);i(7395);var n=i(44839),d=i(96164),a=i(27776);function r(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,d.m6)((0,n.W)(t))}let l=()=>!!window.flutter_inappwebview,o=async function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];if(l())try{return JSON.parse(await window.flutter_inappwebview.callHandler(e,...i.map(e=>JSON.stringify(e))))}catch(e){throw console.error("Error calling Flutter handler:",e),e}return null},c=e=>{let t=document.createElement("img");return t.id="question-result-mark",t.src=e,t.className="question-is-correct-mark",t.style.width="60px",t.style.height="60px",t.style.margin="0px",t},u=e=>null!=e?e.replace(/\$\$(.*?)\$\$|\$(.*?)\$/g,(e,t,i)=>{let n=e.startsWith("$$");try{return s.Z.renderToString(t||i,{displayMode:n,throwOnError:!1,macros:{"\\frac":"\\dfrac"}})}catch(e){return console.error("LaTeX rendering error:",e),'<span style="color: red;">[LaTeX Error: '.concat(e instanceof Error?e.message:String(e),"]</span>")}}):e,x=()=>{(0,a.A)("Some features limited due to network restrictions. This is the CES version of Chalk",{duration:3e3,id:"develop"})}},56106:function(e,t,i){"use strict";var s,n;i.d(t,{Q:function(){return s}}),(n=s||(s={})).FTOW_EVENT_NAME="flutterEvent",n.FTOW_DRAW_QUESTION="DRAW_QUESTION",n.FTOW_SELECT_ANSWER="SELECT_ANSWER",n.FTOW_QUESTION_LIST="QUESTION_PREVIEW_LIST",n.FTOW_RESULT_LIST="RESULT_PREVIEW_LIST",n.FTOW_CHAT_INPUT="CHAT_INPUT",n.WTOF_GENERATE_BUTTONS="GENERATE_BUTTONS",n.WTOF_PAGE_HEIGHT="PAGE_HEIGHT",n.WTOF_HIGHLIGHT="HIGHLIGHT",n.FTOW_CLINIC_DATA="FTOW_CLINIC_DATA",n.FTOW_CLINIC_DE_DATA="FTOW_CLINIC_DE_DATA",n.WTOF_CLINIC_TYPE_CHANGE="CLINIC_TYPE_CHANGE",n.WTOF_REQUEST_DE_DATA="REQUEST_DE_DATA",n.WTOF_REQUEST_KEYWORD="REQUEST_KEYWORD",n.FTOW_KEYWORD_DATA="KEYWORD_DATA",n.FTOW_CLINICK="CILINIC_INIT",n.WTOF_CLINICK_HIGHLIGHT="CLINIC_HIGHLIGHT",n.FTOW_EXPLAIN="EXPLAIN",n.FTOW_DRAW_QUIZ="DRAW_QUIZ",n.FTOW_CHECK_QUIZ="CHECK_QUIZ",n.WTOF_RESULT_QUIZ="RESULT_QUIZ",n.WTOF_CHAT_VIDEO_CLICK="CHAT_VIDEO_CLICK",n.FTOW_TEACHER_ID="TEACHER_ID",n.CTOF_CLINIC_HIGHTLIGHT="CLINIC_HIGHLIGHT_FOR_FLUTTER",n.FTOW_QUIZ_ANSWER="QUIZ_INPUT",n.CTOF_CLINIC_EVENT_RESPOONSE="CLINIC_EVENT_RESPOONSE_FOR_FLUTTER",n.FTOW_CLINIC_START_MIDLE_QUESTION="CLINIC_START_MIDLE_QUESTION"}},function(e){e.O(0,[5864,3954,1351,4868,8173,1424,5634,2971,7023,1744],function(){return e(e.s=33234)}),_N_E=e.O()}]);