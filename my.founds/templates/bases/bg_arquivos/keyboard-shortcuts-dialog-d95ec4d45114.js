"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["keyboard-shortcuts-dialog"],{26855:(e,t,n)=>{let r;function a(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{Kd:()=>i,dU:()=>a}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},4412:(e,t,n)=>{n.d(t,{C:()=>i,x:()=>a});var r=n(86283);let a=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},46426:(e,t,n)=>{n.d(t,{$:()=>d,c:()=>l});var r=n(15205),a=n(26855),i=n(86283);function o(){let e=(0,a.dU)().featureFlags,t=e.map(e=>e.toUpperCase());return new Set(t)}let s=i.W6?o:(0,r.Z)(o);function l(e){return s().has(e.toUpperCase())}let d={isFeatureEnabled:l}},17920:(e,t,n)=>{n.d(t,{eE:()=>i});var r=n(86283);let a={Android:"Android",iOS:"iOS",macOS:"macOS",Windows:"Windows",Linux:"Linux",Unknown:"Unknown"};function i(){return function(){let e=a.Unknown,t=!1;if(r.iG){let n=r.iG.navigator,i=n.userAgent,o=n?.userAgentData?.platform||n.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K","macOS"].indexOf(o)?e=a.macOS:-1!==["iPhone","iPad","iPod"].indexOf(o)?e=a.iOS:-1!==["Win32","Win64","Windows","WinCE"].indexOf(o)?e=a.Windows:/Android/.test(i)?e=a.Android:/Linux/.test(o)&&(e=a.Linux),t=n?.userAgentData?.mobile??(e===a.Android||e===a.iOS)}return{os:e,isAndroid:e===a.Android,isIOS:e===a.iOS,isMacOS:e===a.macOS,isWindows:e===a.Windows,isLinux:e===a.Linux,isDesktop:e===a.macOS||e===a.Windows||e===a.Linux,isMobile:t}}().isMacOS}},67044:(e,t,n)=>{n.d(t,{DV:()=>i,D_:()=>r.D_,EL:()=>r.EL,N9:()=>r.N9,Tz:()=>r.Tz,k0:()=>r.k0});var r=n(11793);let a=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function i(e){return Array.from(e.matchAll(a)).map(([,e])=>e)}},76134:(e,t,n)=>{n.d(t,{Ty:()=>i,YE:()=>o,Zf:()=>l});var r=n(46426),a=n(67044);let i=()=>{let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},o=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),s=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),l=e=>{let t=(0,a.EL)(e),n=function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=e.getAttribute("type")?.toLowerCase()??"text",r="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!s.has(n)||e.isContentEditable)&&!r}(e.target)&&(0,r.c)("no_character_key_shortcuts_in_inputs"),l=i()&&!n;return o(t)||l}},62072:(e,t,n)=>{var r=n(9067),a=n(85893),i=n(67294),o=n(54484),s=n(59841),l=n(42483),d=n(74121),c=n(88216),u=n(59148),m=n(24319);function p({group:{service:{name:e},commands:t}}){let n=(0,i.useId)();return(0,a.jsxs)(l.Z,{sx:{borderRadius:2,border:"1px solid",borderColor:"border.default",overflow:"hidden"},children:[(0,a.jsx)(l.Z,{as:"h3",id:n,sx:{bg:"canvas.subtle",fontWeight:"bold",py:2,px:3,fontSize:1},children:e}),(0,a.jsx)(l.Z,{as:"ul",role:"list","aria-labelledby":n,sx:{listStyleType:"none"},children:t.map(({id:e,name:t,keybinding:n})=>(0,a.jsxs)(l.Z,{as:"li",sx:{borderTop:"1px solid",borderColor:"border.default",py:2,px:3,display:"flex",gap:2,justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(l.Z,{children:t}),(0,a.jsx)(l.Z,{sx:{textAlign:"right"},children:(Array.isArray(n)?n:[n]).map((e,t)=>(0,a.jsxs)(i.Fragment,{children:[t>0&&" or ",(0,a.jsx)(m.u,{keys:e})]},e))})]},e))})]})}try{p.displayName||(p.displayName="ShortcutsGroupList")}catch{}let f={keyboardShortcuts:"Keyboard shortcuts",siteWideShortcuts:"Site-wide shortcuts",loading:"Loading"};var h=n(45504);n(21630);var g=n(89445),y=n(67044);let b=()=>(0,a.jsxs)(l.Z,{role:"status",sx:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(d.Z,{size:"large"}),(0,a.jsx)(s.T,{children:f.loading})]}),v=e=>Array.isArray(e)?e.map(e=>(0,y.D_)(e)):(0,y.D_)(e??""),w=({children:e})=>(0,a.jsx)(l.Z,{sx:{display:"flex",flexDirection:"row",gap:2,flexWrap:"wrap"},children:e}),x=({children:e})=>(0,a.jsx)(l.Z,{sx:{flex:"250px",display:"flex",flexDirection:"column",gap:2},children:e}),k=({visible:e,onVisibleChange:t})=>{let[n,r]=(0,i.useState)({service:{id:"global",name:"Global"},commands:[]}),[o,s]=(0,i.useState)([]),[l,d]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let t=(0,h.e)(),n=async()=>{d(!0);let e=document.querySelector("meta[name=github-keyboard-shortcuts]");if(!e)throw Error('The "github-keyboard-shortcuts" meta tag must be present');let n={contexts:e.content},a=`/site/keyboard_shortcuts?${new URLSearchParams(n).toString()}`,i=await (0,g.v)(a,{method:"GET"});if(i.ok){let e=await i.json(),{global:n,...a}=e.commands;r({service:{id:"global",name:f.siteWideShortcuts},commands:[...n.commands,...t.find(e=>"global"===e.service.id)?.commands??[]].map(e=>({...e,keybinding:v(e.keybinding)}))});let o=[...Object.values(a),...t].map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:v(e.keybinding)}))}));s(o)}else s(t.map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:v(e.keybinding)}))})));d(!1)};e&&n()},[e]),e)?(0,a.jsx)(u.V,{title:f.keyboardShortcuts,"aria-modal":"true",width:"xlarge",height:"large",onClose:()=>t(!1),sx:{color:"fg.default"},children:l?(0,a.jsx)(b,{}):(0,a.jsxs)(w,{children:[(0,a.jsx)(x,{children:o.map(e=>(0,a.jsx)(p,{group:e},e.service.id))}),(0,a.jsxs)(x,{children:[(0,a.jsx)(p,{group:n},n.service.id),(0,a.jsx)(c.r,{as:"a",href:"https://docs.github.com/get-started/accessibility/keyboard-shortcuts",sx:{width:"100%"},children:"View all keyboard shortcuts"})]})]})}):null};try{b.displayName||(b.displayName="LoadingState")}catch{}try{w.displayName||(w.displayName="Columns")}catch{}try{x.displayName||(x.displayName="Column")}catch{}try{k.displayName||(k.displayName="ShortcutsDialog")}catch{}var S=n(46426);function E(){let[e,t]=(0,i.useState)(!1);return(0,S.c)("react_keyboard_shortcuts_dialog")?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.xN,{commands:{"keyboard-shortcuts-dialog:show-dialog":()=>t(!0)}}),(0,a.jsx)(k,{visible:e,onVisibleChange:t})]}):(0,a.jsx)(a.Fragment,{})}try{E.displayName||(E.displayName="KeyboardShortcutsDialog")}catch{}(0,r.t)("keyboard-shortcuts-dialog",{Component:E})},9067:(e,t,n)=>{n.d(t,{t:()=>c});var r=n(96843);let a=new r.e;var i=n(85893),o=n(76006),s=n(88003),l=n(32369);let d=class ReactPartialElement extends s.S{async getReactNode(e){var t;let{Component:n}=await (t=this.name,a.getRegistration(t));return(0,i.jsx)(l.S,{partialName:this.name,embeddedData:e,Component:n,wasServerRendered:this.hasSSRContent,ssrError:!!this.ssrError})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function c(e,t){a.register(e,t)}d=function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}([o.Ih],d)},53729:(e,t,n)=>{n.d(t,{A7:()=>l,ko:()=>s,q1:()=>o});var r=n(15205),a=n(86283);let i=(0,r.Z)(function(){return a.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),o=(0,r.Z)(function(){return a.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),s=(0,r.Z)(function(){return"enterprise"===i()}),l="webpack"},44544:(e,t,n)=>{n.d(t,{Z:()=>o,_:()=>s});var r=n(86283),a=n(71643);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function o(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,o=e=>e,s=e=>e){let l;try{if(!n)throw Error();l=n[e]||new i}catch{l=new i}let{throwQuotaErrorsOnSet:d}=t;function c(e){t.sendCacheStats&&(0,a.b)({incrementKey:e})}function u(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,a=Number(l.getItem(r));if(a&&t>a)return u(e),u(r),c("SAFE_STORAGE_VALUE_EXPIRED"),null;return c("SAFE_STORAGE_VALUE_WITHIN_TTL"),o(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,s(n)),t.ttl){let n=`${e}:expiry`,a=r+t.ttl;l.setItem(n,a.toString())}}catch(e){if(d&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return o(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>a.iG,n4:()=>a.n4,ssrSafeLocation:()=>a.jX,zu:()=>a.zu});var r=n(35647),a=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>a,jX:()=>o,n4:()=>r,zu:()=>i});let r="undefined"==typeof document?void 0:document,a="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,o="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>i,W6:()=>a,cF:()=>o});var r=n(73614);let a=void 0===r.n4,i=!a;function o(){return!!a||!!r.n4.querySelector('react-app[data-ssr="true"]')}},71643:(e,t,n)=>{n.d(t,{B:()=>m,b:()=>l});var r=n(86283),a=n(4412),i=n(53729),o=n(46426);let s=[];function l(e,t=!1,n=1){if(!0!==(0,o.c)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=i.A7,Math.random()<n&&s.push(e),t?u():c()}}let d=null;async function c(){await a.C,null==d&&(d=window.requestIdleCallback(u))}function u(){if(d=null,!s.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let a=e.shift();n.push(a),r+=t}else break}return n}(n));return t}(s);for(let n of t)!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${n.join(",")}] }`);s=[]}function m(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",u),r.n4?.addEventListener("visibilitychange",u)},18865:(e,t,n)=>{n.d(t,{M:()=>CommandEvent,c:()=>a});var r=n(21630);let CommandEvent=class CommandEvent{constructor(e){this.commandId=e}};let a={entries:e=>Object.entries(e).filter(e=>r.mm.is(e[0])&&void 0!==e[1]),keys:e=>Object.keys(e).filter(r.mm.is)}},45504:(e,t,n)=>{n.d(t,{V:()=>l,e:()=>s});var r=n(67294),a=n(18865),i=n(21630);let o=new Map;function s(){let e=new Map;for(let t of new Set(Array.from(o.values()).flat())){let n=i.mm.getServiceId(t);if(!e.has(n)){let t=(0,i.C6)(n);e.set(n,{service:{id:t.id,name:t.name},commands:[]})}let r=(0,i.gm)(t);r&&r.defaultBinding&&e.get(n)?.commands.push({id:t,name:r.name,description:r.description,keybinding:r.defaultBinding})}return Array.from(e.values())}let l=e=>{let t=(0,r.useId)();(0,r.useEffect)(()=>(o.set(t,a.c.keys(e)),()=>{o.delete(t)}),[e,t])}},21630:(e,t,n)=>{n.d(t,{mm:()=>d,gm:()=>c,gF:()=>m,g_:()=>p,C6:()=>u});var r=n(67044),a=n(46426);let i=JSON.parse('{"services":{"github":{"id":"github","name":"GitHub (site-wide)","commandIds":["github:submit-form","github:open-context-menu"]},"keyboard-shortcuts-dialog":{"id":"keyboard-shortcuts-dialog","name":"Keyboard Shortcuts Dialog","commandIds":["keyboard-shortcuts-dialog:show-dialog"]},"pull-requests-diff-view":{"id":"pull-requests-diff-view","name":"Pull requests - \'Files changed\' view","commandIds":["pull-requests-diff-view:copy-original-code","pull-requests-diff-view:copy-modified-code","pull-requests-diff-view:expand-all-hunks","pull-requests-diff-view:expand-hunk-up","pull-requests-diff-view:expand-hunk-down","pull-requests-diff-view:copy-anchor-link","pull-requests-diff-view:start-conversation-current"]},"react-sandbox":{"id":"react-sandbox","name":"React Sandbox","commandIds":["react-sandbox:example-command"]}},"commands":{"github:open-context-menu":{"name":"Open context menu","description":"Open a context menu if one is available","defaultBinding":"Alt+Shift+C"},"github:submit-form":{"name":"Submit form","description":"Submit the current form","defaultBinding":"Mod+Enter"},"keyboard-shortcuts-dialog:show-dialog":{"name":"Show Keyboard Shortcuts Dialog","description":"Display the keyboard shortcuts help dialog","defaultBinding":"Shift+?"},"pull-requests-diff-view:copy-anchor-link":{"name":"Copy anchor link","description":"Copy link to the current line","defaultBinding":"Mod+Alt+y","featureFlag":"prx"},"pull-requests-diff-view:copy-modified-code":{"name":"Copy modified code","description":"Copy the modified code for the current line","defaultBinding":"Mod+c","featureFlag":"prx"},"pull-requests-diff-view:copy-original-code":{"name":"Copy original code","description":"Copy the original code for the current line","defaultBinding":"Mod+Shift+C","featureFlag":"prx"},"pull-requests-diff-view:expand-all-hunks":{"name":"Expand all","description":"Expand all hunks in the current file","defaultBinding":"Mod+Shift+ArrowLeft","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-down":{"name":"Expand below","description":"Expand the current hunk downward","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-up":{"name":"Expand above","description":"Expand the current hunk upward","featureFlag":"prx"},"pull-requests-diff-view:start-conversation-current":{"name":"Start conversation on line","description":"Start a conversation on the current line","featureFlag":"prx"},"react-sandbox:example-command":{"name":"React Sandbox Example Command","description":"Do something.","defaultBinding":"Mod+Shift+Enter"}}}'),{commands:o,services:s}=i,l=new Set(Object.keys(o)),d={is:e=>l.has(e),getServiceId:e=>e.split(":")[0]},c=e=>{let t=o[e];return!t.featureFlag||(0,a.c)(t.featureFlag.toUpperCase())?t:void 0},u=e=>s[e],m=e=>{let t=c(e);return t?.defaultBinding?(0,r.D_)(t.defaultBinding):void 0},p=e=>new Map(e.map(e=>[e,m(e)]).filter(e=>void 0!==e[1]))},54484:(e,t,n)=>{n.d(t,{hj:()=>F,xN:()=>x,FU:()=>_});var r,a=n(21630),i=n(85893),o=n(17521),s=n(69848),l=n(67294),d=n(18865),c=n(86058);let u=new c.R({collectorUrl:"https://collector.githubapp.com/ui-commands/collect"}),m={TYPE:"command.trigger",send(e){u.sendEvent(m.TYPE,e)}};function p(e,t){m.send({command_id:e.commandId,trigger_type:t instanceof KeyboardEvent?"keybinding":"click",target_element_html:t.target instanceof HTMLElement?function(e){let t=e.tagName.toLowerCase(),n=Array.from(e.attributes).map(e=>`${e.name}="${e.value.replaceAll('"','\\"')}"`).join(" ");return`<${t}${n?` ${n}`:""}>`}(t.target):void 0,keybinding:(0,a.gF)(e.commandId)})}let f=new Map;function h(e,t){let n=(0,l.useMemo)(()=>new Map,[]),r="global"===e?f:n;(0,l.useEffect)(()=>{for(let[e,n]of(0,a.g_)(d.c.keys(t))){let t=r.get(n)??[];t.length&&console.warn(`The keybinding (${n}) for the "${e}" command conflicts with the keybinding for the already-registered command(s) "${t.join(", ")}". This may result in unpredictable behavior.`),r.set(n,t.concat(e))}return()=>{for(let[e,n]of(0,a.g_)(d.c.keys(t))){let t=function(e,t){let n=!1;return e.filter(e=>e!==t||!!n||(n=!0,!1))}(r.get(n)??[],e);t?.length?r.set(n,t):r.delete(n)}}},[t,r])}var g=n(67044),y=n(76134);function b(e,t){let n=(0,l.useMemo)(()=>new g.k0,[]),r=(0,l.useMemo)(()=>{let t=new Map;for(let n of e){let e=(0,a.gF)(n);e&&t.set(e,n)}return t},[e]),i=(0,l.useRef)(null);return(0,l.useCallback)(e=>{let a="nativeEvent"in e?e.nativeEvent:e;if(i.current===a)return;if(i.current=a,!(0,y.Zf)(a)){n.reset();return}n.registerKeypress(a);let o=r.get(n.sequence)??r.get((0,g.EL)(a));o&&(n.reset(),e.preventDefault(),e.stopPropagation(),t(o,a))},[r,n,t])}var v=n(45504);let w="ui-command-trigger",x=({commands:e})=>{let t=(0,l.useCallback)((t,n)=>{let r=e[t];if(r){let e=new d.M(t);try{r(e)}finally{p(e,n)}}},[e]),n=b(d.c.keys(e),t);return h("global",e),(0,v.V)(e),(0,l.useEffect)(()=>{let e=e=>{let n="detail"in e&&"object"==typeof e.detail?e.detail:void 0;if(!n)return;let r="commandId"in n&&"string"==typeof n.commandId&&a.mm.is(n.commandId)?n.commandId:void 0,i="domEvent"in n&&(n.domEvent instanceof KeyboardEvent||n.domEvent instanceof MouseEvent)?n.domEvent:void 0;r&&i&&t(r,i)};return document.addEventListener("keydown",n),document.addEventListener(w,e),()=>{document.removeEventListener("keydown",n),document.removeEventListener(w,e)}},[n,t]),null};try{x.displayName||(x.displayName="GlobalCommands")}catch{}let k=(0,l.createContext)({triggerCommand:function(e,t){document.dispatchEvent(new CustomEvent(w,{detail:{commandId:e,domEvent:t}}))}}),S=k.Provider,E=()=>(0,l.useContext)(k),_=({commands:e,children:t})=>{let n=(0,l.useRef)(e);(0,s.Z)(()=>{n.current=e},[e]);let r=E(),a=(0,l.useCallback)((e,t)=>{let a=n.current[e];if(a){let n=new d.M(e);try{a(n)}finally{p(n,t)}}else r.triggerCommand(e,t)},[r]);h("scoped",e),(0,v.V)(e);let c=(0,l.useMemo)(()=>({triggerCommand:a}),[a]),u=b(d.c.keys(e),a),m=(0,o.u)(u),f=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=f.current,t=m.onKeyDown;if(e)return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}),(0,i.jsx)(S,{value:c,children:(0,i.jsx)("div",{style:{display:"contents"},ref:f,...m,children:t})})};try{_.displayName||(_.displayName="ScopedCommands")}catch{}var j=n(88216),C=n(24319);let A=({commandId:e,...t})=>{let n=(0,a.gF)(e);return n?(0,i.jsx)(C.u,{keys:n,...t}):null};try{A.displayName||(A.displayName="CommandKeybindingHint")}catch{}var N=n(59841);let L=(0,l.forwardRef)(({commandId:e,children:t,trailingVisual:n,showKeybindingHint:r=!1,...o},s)=>{let l=(0,a.gm)(e),{triggerCommand:d}=E();return l?(0,i.jsx)(j.r,{...o,onClick:t=>d(e,t.nativeEvent),trailingVisual:n??r?()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.T,{children:"("}),(0,i.jsx)(A,{commandId:e,format:"condensed"}),(0,i.jsx)(N.T,{children:")"})]}):void 0,ref:s,children:t??l.name}):null});L.displayName="CommandButton";try{(r=HintVisual).displayName||(r.displayName="HintVisual")}catch{}var I=n(50919);let O=(0,l.forwardRef)(({commandId:e,"aria-label":t,...n},r)=>{let o=(0,a.gm)(e),{triggerCommand:s}=E();return o?(0,i.jsx)(I.h,{...n,"aria-label":t??o.name,onClick:t=>s(e,t.nativeEvent),ref:r}):null});O.displayName="CommandIconButton";var q=n(52516);let F=(0,l.forwardRef)(({commandId:e,children:t,description:n,leadingVisual:r,trailingVisual:o,...s},l)=>{let d=(0,a.gm)(e),{triggerCommand:c}=E();return d?(0,i.jsxs)(q.S.Item,{...s,onSelect:t=>c(e,t.nativeEvent),ref:l,children:[t??d.name,n&&(0,i.jsx)(q.S.Description,{children:n}),r&&(0,i.jsx)(q.S.LeadingVisual,{children:r}),null!==o&&(0,i.jsx)(q.S.TrailingVisual,{children:o??(0,i.jsx)(A,{commandId:e,format:"condensed"})})]}):null});F.displayName="ActionList.CommandItem"},17521:(e,t,n)=>{n.d(t,{u:()=>o});var r=n(17920),a=n(67294);let i=new Set(["enter","tab"]),o=e=>{let t=(0,a.useRef)(!1),n=(0,a.useRef)(!1),o=(0,a.useCallback)(e=>{"compositionstart"===e.type&&(t.current=!0,n.current=!1),"compositionend"===e.type&&(t.current=!1,n.current=!0)},[]),s=(0,a.useCallback)(a=>{if(!i.has(a.key.toLowerCase())||!t.current){if((0,r.eE)()&&229===a.keyCode&&n.current){n.current=!1;return}e(a)}},[e]),l=(0,a.useMemo)(()=>({onCompositionStart:o,onCompositionEnd:o,onKeyDown:s}),[o,s]);return l}},89445:(e,t,n)=>{function r(e,t={}){if(e.match(/^(https?:|\/\/)/))throw Error("Can not make cross-origin requests from verifiedFetch");let n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:n})}function a(e,t){let n=t?.headers??{},a={...n,Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return r(e,{...t,body:i,headers:a})}n.d(t,{Q:()=>r,v:()=>a})},24319:(e,t,n)=>{n.d(t,{u:()=>b});var r=n(85893),a=n(97011),i=n(28975),o=n(67294),s=n(59841),l=n(17920);let d={alt:(0,l.eE)()?"\u2325":"Alt",control:"\u2303",shift:"\u21E7",meta:(0,l.eE)()?"\u2318":"Win",mod:(0,l.eE)()?"\u2318":"\u2303",pageup:"PgUp",pagedown:"PgDn",arrowup:"\u2191",arrowdown:"\u2193",arrowleft:"\u2190",arrowright:"\u2192",plus:"+",backspace:"\u232B",delete:"Del",space:"\u2423",tab:"\u21E5",enter:"\u23CE",escape:"Esc",function:"Fn",capslock:"CapsLock",insert:"Ins",printscreen:"PrtScn"},c={alt:(0,l.eE)()?"Option":"Alt",mod:(0,l.eE)()?"Command":"Control","+":"Plus",pageup:"Page Up",pagedown:"Page Down",arrowup:"Up Arrow",arrowdown:"Down Arrow",arrowleft:"Left Arrow",arrowright:"Right Arrow",capslock:"Caps Lock",printscreen:"Print Screen"},u={alt:(0,l.eE)()?"option":"alt",meta:(0,l.eE)()?"command":"Windows",mod:(0,l.eE)()?"command":"control",pageup:"page up",pagedown:"page down",arrowup:"up arrow",arrowdown:"down arrow",arrowleft:"left arrow",arrowright:"right arrow",capslock:"caps lock",printscreen:"print screen","`":"backtick","~":"tilde","!":"exclamation point","@":"at","#":"hash",$:"dollar sign","%":"percent","^":"caret","&":"ampersand","*":"asterisk","(":"left parenthesis",")":"right parenthesis",_:"underscore","-":"dash","+":"plus","=":"equals","[":"left bracket","{":"left curly brace","]":"right bracket","}":"right curly brace","\\":"backslash","|":"pipe",";":"semicolon",":":"colon","'":"single quote",'"':"double quote",",":"comma","<":"left angle bracket",".":"period",">":"right angle bracket","/":"forward slash","?":"question mark"," ":"space"},m={control:1,meta:2,alt:3,option:4,shift:5,function:6,DEFAULT:7};function p(e){return e in m?m[e]:m.DEFAULT}let f=({children:e})=>(0,r.jsx)(a.Z,{as:"kbd",sx:{color:"inherit",fontFamily:"inherit",fontSize:"inherit",border:"none",background:"none",boxShadow:"none",p:0,lineHeight:"unset",position:"relative",overflow:"visible"},children:e}),h=({name:e,format:t})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.T,{children:u[e]||e}),(0,r.jsx)("span",{"aria-hidden":!0,children:("condensed"===t?d[e]:c[e])??(0,i.Z)(e)})]}),g=(e,t)=>p(e)-p(t),y=({keys:e,format:t="condensed"})=>(0,r.jsx)(a.Z,{sx:{display:"inline-flex",bg:"canvas.default",color:"fg.muted",border:"1px solid",borderColor:"border.default",borderRadius:2,fontWeight:"normal",fontFamily:"normal",fontSize:0,p:1,gap:"0.5ch",boxShadow:"none",verticalAlign:"baseline",overflow:"hidden",lineHeight:"10px"},children:e.split("+").map(e=>e.toLowerCase()).sort(g).map((e,n)=>(0,r.jsxs)(o.Fragment,{children:[n>0&&"full"===t?(0,r.jsx)("span",{"aria-hidden":!0,children:" + "}):" ",(0,r.jsx)(h,{name:e,format:t})]},n))}),b=(0,o.memo)(({keys:e,format:t="condensed"})=>(0,r.jsx)(f,{children:e.split(" ").map((e,n)=>(0,r.jsxs)(o.Fragment,{children:[n>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.T,{children:", then"})," "]}),(0,r.jsx)(y,{keys:e,format:t})]},n))}));b.displayName="KeyboardKey";try{f.displayName||(f.displayName="Kbd")}catch{}try{y.displayName||(y.displayName="Chord")}catch{}},32369:(e,t,n)=>{n.d(t,{S:()=>p});var r=n(85893),a=n(67294),i=n(1343),o=n(12599),s=n(58989),l=n(89250),d=n(78249);function c({children:e,history:t}){let[n,i]=(0,a.useState)({location:t.location});return(0,d.g)(()=>t.listen(i),[t]),(0,r.jsx)(l.F0,{location:n.location,navigator:t,children:e})}try{c.displayName||(c.displayName="PartialRouter")}catch{}var u=n(33011),m=n(59112);function p({partialName:e,embeddedData:t,Component:n,wasServerRendered:l,ssrError:d}){let p=a.useRef(),f=globalThis.window;p.current||(p.current=f?(0,m.l)({window:f}):(0,o.PP)({initialEntries:[{pathname:"/"}]}));let h=p.current;return(0,r.jsx)(i.R,{appName:e,wasServerRendered:l,children:(0,r.jsx)(s.i,{history:h,routes:[],children:(0,r.jsxs)(c,{history:h,children:[(0,r.jsx)(n,{...t.props}),(0,r.jsx)(u.P,{ssrError:d})]})})})}try{p.displayName||(p.displayName="PartialEntry")}catch{}},59841:(e,t,n)=>{n.d(t,{T:()=>a});var r=n(15388);let a=r.ZP.span.withConfig({displayName:"VisuallyHidden",componentId:"sc-ea4b9adb-0"})`
  border: 0;
  clip: rect(0 0 0 0);
  /* Elements without a height and width aren't accessible to screen readers
  * however, the negative margin trick is used to hide the element by removing
  * the same amount of margin as the height and width
  * */
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_Button_IconButton_js-node_modules_primer_react_lib--23bcad","ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92"],()=>t(62072)),e.O()}]);
//# sourceMappingURL=keyboard-shortcuts-dialog-b79011bcf160.js.map