import{_ as Z}from"./chunks/preload-helper-aa6bc0ce.js";import{S as Me,i as He,s as We,a as Xe,e as x,c as Ye,b as z,g as le,t as B,d as ce,f as J,h as F,j as Qe,o as ye,k as Ze,l as et,m as tt,n as ge,p as V,q as nt,r as at,u as rt,v as M,w as Re,x as H,y as W,z as Ce}from"./chunks/index-3ab74435.js";import{g as xe,f as Be,s as K,a as be,b as st,i as ot}from"./chunks/singletons-92ef429a.js";function it(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function lt(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(a,e){const t=new URL(a);for(const i of ct){let l=t[i];Object.defineProperty(t,i,{get(){return e(),l},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(i,l,d)=>d(a,l),ut(t),t}function ut(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(a){let e=5381;if(typeof a=="string"){let t=a.length;for(;t;)e=e*33^a.charCodeAt(--t)}else if(ArrayBuffer.isView(a)){const t=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=t.length;for(;i;)e=e*33^t[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;ie.delete(i)}return Se(a,e)};const ie=new Map;function pt(a,e,t){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(l+=`[data-hash="${dt(t.body)}"]`);const d=document.querySelector(l);if(d!=null&&d.textContent){const{body:r,...u}=JSON.parse(d.textContent),g=d.getAttribute("data-ttl");return g&&ie.set(e,{body:r,init:u,ttl:1e3*Number(g)}),Promise.resolve(new Response(r,u))}return Se(a,t)}function ht(a,e){const t=ie.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ie.delete(a)}return Se(a,e)}const mt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(a){const e=[],t=[];let i=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(gt).map((d,r,u)=>{const g=decodeURIComponent(d),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(g);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=r===u.length-1;return g&&"/"+g.split(/\[(.+?)\]/).map((L,R)=>{if(R%2){const T=mt.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,q,N]=T;return e.push(q),t.push(N),D?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(i=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:t}}function gt(a){return!/^\([^)]+\)$/.test(a)}function wt(a,e,t,i){const l={};for(let d=0;d<e.length;d+=1){const r=e[d],u=t[d],g=a[d+1]||"";if(u){const m=i[u];if(!m)throw new Error(`Missing "${u}" param matcher`);if(!m(g))return}l[r]=g}return l}function yt(a,e,t,i){const l=new Set(e);return Object.entries(t).map(([u,[g,m,y]])=>{const{pattern:L,names:R,types:T}=_t(u),D={id:u,exec:q=>{const N=L.exec(q);if(N)return wt(N,R,T,i)},errors:[1,...y||[]].map(q=>a[q]),layouts:[0,...m||[]].map(r),leaf:d(g)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function d(u){const g=u<0;return g&&(u=~u),[g,a[u]]}function r(u){return u===void 0?u:[l.has(u),a[u]]}}function bt(a){let e,t,i;var l=a[0][0];function d(r){return{props:{data:r[2],form:r[1]}}}return l&&(e=new l(d(a))),{c(){e&&M(e.$$.fragment),t=x()},l(r){e&&Re(e.$$.fragment,r),t=x()},m(r,u){e&&H(e,r,u),z(r,t,u),i=!0},p(r,u){const g={};if(u&4&&(g.data=r[2]),u&2&&(g.form=r[1]),l!==(l=r[0][0])){if(e){le();const m=e;B(m.$$.fragment,1,0,()=>{W(m,1)}),ce()}l?(e=new l(d(r)),M(e.$$.fragment),J(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else l&&e.$set(g)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&F(t),e&&W(e,r)}}}function vt(a){let e,t,i;var l=a[0][0];function d(r){return{props:{data:r[2],$$slots:{default:[kt]},$$scope:{ctx:r}}}}return l&&(e=new l(d(a))),{c(){e&&M(e.$$.fragment),t=x()},l(r){e&&Re(e.$$.fragment,r),t=x()},m(r,u){e&&H(e,r,u),z(r,t,u),i=!0},p(r,u){const g={};if(u&4&&(g.data=r[2]),u&523&&(g.$$scope={dirty:u,ctx:r}),l!==(l=r[0][0])){if(e){le();const m=e;B(m.$$.fragment,1,0,()=>{W(m,1)}),ce()}l?(e=new l(d(r)),M(e.$$.fragment),J(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else l&&e.$set(g)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&F(t),e&&W(e,r)}}}function kt(a){let e,t,i;var l=a[0][1];function d(r){return{props:{data:r[3],form:r[1]}}}return l&&(e=new l(d(a))),{c(){e&&M(e.$$.fragment),t=x()},l(r){e&&Re(e.$$.fragment,r),t=x()},m(r,u){e&&H(e,r,u),z(r,t,u),i=!0},p(r,u){const g={};if(u&8&&(g.data=r[3]),u&2&&(g.form=r[1]),l!==(l=r[0][1])){if(e){le();const m=e;B(m.$$.fragment,1,0,()=>{W(m,1)}),ce()}l?(e=new l(d(r)),M(e.$$.fragment),J(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else l&&e.$set(g)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&F(t),e&&W(e,r)}}}function Je(a){let e,t=a[5]&&Fe(a);return{c(){e=Ze("div"),t&&t.c(),this.h()},l(i){e=et(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=tt(e);t&&t.l(l),l.forEach(F),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(i,l){z(i,e,l),t&&t.m(e,null)},p(i,l){i[5]?t?t.p(i,l):(t=Fe(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&F(e),t&&t.d()}}}function Fe(a){let e;return{c(){e=nt(a[6])},l(t){e=at(t,a[6])},m(t,i){z(t,e,i)},p(t,i){i&64&&rt(e,t[6])},d(t){t&&F(e)}}}function Et(a){let e,t,i,l,d;const r=[vt,bt],u=[];function g(y,L){return y[0][1]?0:1}e=g(a),t=u[e]=r[e](a);let m=a[4]&&Je(a);return{c(){t.c(),i=Xe(),m&&m.c(),l=x()},l(y){t.l(y),i=Ye(y),m&&m.l(y),l=x()},m(y,L){u[e].m(y,L),z(y,i,L),m&&m.m(y,L),z(y,l,L),d=!0},p(y,[L]){let R=e;e=g(y),e===R?u[e].p(y,L):(le(),B(u[R],1,1,()=>{u[R]=null}),ce(),t=u[e],t?t.p(y,L):(t=u[e]=r[e](y),t.c()),J(t,1),t.m(i.parentNode,i)),y[4]?m?m.p(y,L):(m=Je(y),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null)},i(y){d||(J(t),d=!0)},o(y){B(t),d=!1},d(y){u[e].d(y),y&&F(i),m&&m.d(y),y&&F(l)}}}function Rt(a,e,t){let{stores:i}=e,{page:l}=e,{components:d}=e,{form:r}=e,{data_0:u=null}=e,{data_1:g=null}=e;Qe(i.page.notify);let m=!1,y=!1,L=null;return ye(()=>{const R=i.page.subscribe(()=>{m&&(t(5,y=!0),t(6,L=document.title||"untitled page"))});return t(4,m=!0),R}),a.$$set=R=>{"stores"in R&&t(7,i=R.stores),"page"in R&&t(8,l=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,g=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(l)},[d,r,u,g,m,y,L,i,l]}class St extends Me{constructor(e){super(),He(this,e,Rt,Et,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t={},fe=[()=>Z(()=>import("./chunks/0-4852ab58.js"),["chunks/0-4852ab58.js","chunks/_layout-74980f65.js","chunks/preload-helper-aa6bc0ce.js","chunks/runtime.esm-ebacd809.js","chunks/index-5bbdb34d.js","chunks/index-3ab74435.js","components/layout.svelte-dec2f24c.js"],import.meta.url),()=>Z(()=>import("./chunks/1-c86edb3d.js"),["chunks/1-c86edb3d.js","components/error.svelte-eadc9d9c.js","chunks/index-3ab74435.js","chunks/singletons-92ef429a.js","chunks/index-5bbdb34d.js"],import.meta.url),()=>Z(()=>import("./chunks/2-59badf7d.js"),["chunks/2-59badf7d.js","components/pages/_page.svelte-5243b06c.js","assets/_page-f529c1c5.css","chunks/index-3ab74435.js","chunks/runtime.esm-ebacd809.js","chunks/index-5bbdb34d.js","chunks/en-4f74be34.js","chunks/de-4fc73553.js","chunks/iconwithblob-dff402ff.js","assets/iconwithblob-ea0faa67.css","chunks/singletons-92ef429a.js"],import.meta.url),()=>Z(()=>import("./chunks/3-40c9d298.js"),["chunks/3-40c9d298.js","components/pages/icon/_page.svelte-f7180e34.js","chunks/index-3ab74435.js","chunks/iconwithblob-dff402ff.js","assets/iconwithblob-ea0faa67.css","chunks/index-5bbdb34d.js"],import.meta.url)],Lt=[],Ot={"":[2],icon:[3]},Pt={handleError:({error:a})=>{console.error(a)}};class ve{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(e,t){this.status=e,this.location=t}}const At="/__data.js";async function It(a){var e;for(const t in a)if(typeof((e=a[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,l])=>[i,await l])));return a}const Ge="sveltekit:scroll",C="sveltekit:index",re=yt(fe,Lt,Ot,$t),ke=fe[0],Ee=fe[1];ke();Ee();let ee={};try{ee=JSON.parse(sessionStorage[Ge])}catch{}function we(a){ee[a]=be()}function Ut({target:a,base:e,trailing_slash:t}){var De;const i=[];let l=null;const d={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},u=!1,g=!1,m=!0,y=!1,L=!1,R,T=(De=history.state)==null?void 0:De[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const D=ee[T];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let q=!1,N,$e,te;async function Le(){te=te||Promise.resolve(),await te,te=null;const n=new URL(location.href),c=he(n,!0);l=null,await Pe(c,n,[])}async function ue(n,{noscroll:c=!1,replaceState:f=!1,keepfocus:s=!1,state:o={}},p,h){return typeof n=="string"&&(n=new URL(n,xe(document))),me({url:n,scroll:c?be():null,keepfocus:s,redirect_chain:p,details:{state:o,replaceState:f},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(n){const c=he(n,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return l={id:c.id,promise:Ue(c)},l.promise}async function Pe(n,c,f,s,o={},p){var k,v;$e=o;let h=n&&await Ue(n);if(h||(h=await Ne(c,null,Q(new Error(`Not found: ${c.pathname}`),{url:c,params:{},routeId:null}),404)),c=(n==null?void 0:n.url)||c,$e!==o)return!1;if(h.type==="redirect")if(f.length>10||f.includes(c.pathname))h=await ne({status:500,error:Q(new Error("Redirect loop"),{url:c,params:{},routeId:null}),url:c,routeId:null});else return ue(new URL(h.location,c).href,{},[...f,c.pathname],o),!1;else((v=(k=h.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await ae(c);if(i.length=0,L=!1,y=!0,s&&s.details){const{details:w}=s,b=w.replaceState?0:1;w.state[C]=T+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",c)}if(l=null,g){r=h.state,h.props.page&&(h.props.page.url=c);const w=oe();R.$set(h.props),w()}else Ae(h);if(s){const{scroll:w,keepfocus:b}=s;if(!b){const S=document.body,O=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var P;(P=getSelection())==null||P.removeAllRanges()}),O!==null?S.setAttribute("tabindex",O):S.removeAttribute("tabindex")}if(await Ce(),m){const S=c.hash&&document.getElementById(c.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Ce();m=!0,h.props.page&&(N=h.props.page),p&&p(),y=!1}function Ae(n){var o,p;r=n.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),N=n.props.page;const f=oe();R=new St({target:a,props:{...n.props,stores:K},hydrate:!0}),f();const s={from:null,to:se("to",{params:r.params,routeId:(p=(o=r.route)==null?void 0:o.id)!=null?p:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(h=>h(s)),g=!0}async function X({url:n,params:c,branch:f,status:s,error:o,route:p,form:h}){var O;const k=f.filter(Boolean),v={type:"loaded",state:{url:n,params:c,branch:f,error:o,route:p},props:{components:k.map(P=>P.node.component)}};h!==void 0&&(v.props.form=h);let w={},b=!N;for(let P=0;P<k.length;P+=1){const U=k[P];w={...w,...U.data},(b||!r.branch.some(j=>j===U))&&(v.props[`data_${P}`]=w,b=b||Object.keys((O=U.data)!=null?O:{}).length>0)}if(b||(b=Object.keys(N.data).length!==Object.keys(w).length),!r.url||n.href!==r.url.href||r.error!==o||h!==void 0||b){v.props.page={error:o,params:c,routeId:p&&p.id,status:s,url:n,form:h,data:b?w:N.data};const P=(U,j)=>{Object.defineProperty(v.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${j}`)}})};P("origin","origin"),P("path","pathname"),P("query","searchParams")}return v}async function de({loader:n,parent:c,url:f,params:s,routeId:o,server_data_node:p}){var w,b,S,O,P;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await n();if((w=v.shared)!=null&&w.load){let U=function(...$){for(const _ of $){const{href:E}=new URL(_,f);k.dependencies.add(E)}};const j={routeId:o,params:new Proxy(s,{get:($,_)=>(k.params.add(_),$[_])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:ft(f,()=>{k.url=!0}),async fetch($,_){let E;$ instanceof Request?(E=$.url,_={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,..._}):E=$;const I=new URL(E,f).href;return U(I),g?ht(I,_):pt(E,I,_)},setHeaders:()=>{},depends:U,parent(){return k.parent=!0,c()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(S=await v.shared.load.call(null,j))!=null?S:null,h=h?await It(h):null}return{node:v,loader:n,server:p,shared:(O=v.shared)!=null&&O.load?{type:"data",data:h,uses:k}:null,data:(P=h!=null?h:p==null?void 0:p.data)!=null?P:null}}function Ie(n,c,f,s){if(L)return!0;if(!f)return!1;if(f.parent&&c||f.url&&n)return!0;for(const o of f.params)if(s[o]!==r.params[o])return!0;for(const o of f.dependencies)if(i.some(p=>p(new URL(o))))return!0;return!1}function pe(n,c){var f,s;return(n==null?void 0:n.type)==="data"?{type:"data",data:n.data,uses:{dependencies:new Set((f=n.uses.dependencies)!=null?f:[]),params:new Set((s=n.uses.params)!=null?s:[]),parent:!!n.uses.parent,url:!!n.uses.url}}:(n==null?void 0:n.type)==="skip"&&c!=null?c:null}async function Ue({id:n,invalidating:c,url:f,params:s,route:o}){var $;if((l==null?void 0:l.id)===n)return l.promise;const{errors:p,layouts:h,leaf:k}=o,v=[...h,k];p.forEach(_=>_==null?void 0:_().catch(()=>{})),v.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let w=null;const b=r.url?n!==r.url.pathname+r.url.search:!1,S=v.reduce((_,E,I)=>{var Y;const A=r.branch[I],G=!!(E!=null&&E[0])&&((A==null?void 0:A.loader)!==E[1]||Ie(b,_.some(Boolean),(Y=A.server)==null?void 0:Y.uses,s));return _.push(G),_},[]);if(S.some(Boolean)){try{w=await ze(f,S)}catch(_){return ne({status:500,error:Q(_,{url:f,params:s,routeId:o.id}),url:f,routeId:o.id})}if(w.type==="redirect")return w}const O=w==null?void 0:w.nodes;let P=!1;const U=v.map(async(_,E)=>{var Y;if(!_)return;const I=r.branch[E],A=O==null?void 0:O[E];if((!A||A.type==="skip")&&_[1]===(I==null?void 0:I.loader)&&!Ie(b,P,(Y=I.shared)==null?void 0:Y.uses,s))return I;if(P=!0,(A==null?void 0:A.type)==="error")throw A;return de({loader:_[1],url:f,params:s,routeId:o.id,parent:async()=>{var Ve;const qe={};for(let _e=0;_e<E;_e+=1)Object.assign(qe,(Ve=await U[_e])==null?void 0:Ve.data);return qe},server_data_node:pe(A===void 0&&_[0]?{type:"skip"}:A!=null?A:null,I==null?void 0:I.server)})});for(const _ of U)_.catch(()=>{});const j=[];for(let _=0;_<v.length;_+=1)if(v[_])try{j.push(await U[_])}catch(E){if(E instanceof Ke)return{type:"redirect",location:E.location};let I=500,A;O!=null&&O.includes(E)?(I=($=E.status)!=null?$:I,A=E.error):E instanceof ve?(I=E.status,A=E.body):A=Q(E,{params:s,url:f,routeId:o.id});const G=await je(_,j,p);return G?await X({url:f,params:s,branch:j.slice(0,G.idx).concat(G.node),status:I,error:A,route:o}):await Ne(f,o.id,A,I)}else j.push(void 0);return await X({url:f,params:s,branch:j,status:200,error:null,route:o,form:c?void 0:null})}async function je(n,c,f){for(;n--;)if(f[n]){let s=n;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await f[n](),loader:f[n],data:{},server:null,shared:null}}}catch{continue}}}async function ne({status:n,error:c,url:f,routeId:s}){var w;const o={},p=await ke();let h=null;if(p.server)try{const b=await ze(f,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(w=b.nodes[0])!=null?w:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||u)&&await ae(f)}const k=await de({loader:ke,url:f,params:o,routeId:s,parent:()=>Promise.resolve({}),server_data_node:pe(h)}),v={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await X({url:f,params:o,branch:[k,v],status:n,error:c,route:null})}function he(n,c){if(Te(n))return;const f=decodeURI(n.pathname.slice(e.length)||"/");for(const s of re){const o=s.exec(f);if(o){const p=new URL(n.origin+it(n.pathname,t)+n.search+n.hash);return{id:p.pathname+p.search,invalidating:c,route:s,params:lt(o),url:p}}}}function Te(n){return n.origin!==location.origin||!n.pathname.startsWith(e)}async function me({url:n,scroll:c,keepfocus:f,redirect_chain:s,details:o,type:p,delta:h,nav_token:k,accepted:v,blocked:w}){var U,j,$,_;let b=!1;const S=he(n,!1),O={from:se("from",{params:r.params,routeId:(j=(U=r.route)==null?void 0:U.id)!=null?j:null,url:r.url}),to:se("to",{params:($=S==null?void 0:S.params)!=null?$:null,routeId:(_=S==null?void 0:S.route.id)!=null?_:null,url:n}),type:p};h!==void 0&&(O.delta=h);const P={...O,cancel:()=>{b=!0}};if(d.before_navigate.forEach(E=>E(P)),b){w();return}we(T),v(),g&&K.navigating.set(O),await Pe(S,n,s,{scroll:c,keepfocus:f,details:o},k,()=>{d.after_navigate.forEach(E=>E(O)),K.navigating.set(null)})}async function Ne(n,c,f,s){return n.origin===location.origin&&n.pathname===location.pathname&&!u?await ne({status:s,error:f,url:n,routeId:c}):await ae(n)}function ae(n){return location.href=n.href,new Promise(()=>{})}return{after_navigate:n=>{ye(()=>(d.after_navigate.push(n),()=>{const c=d.after_navigate.indexOf(n);d.after_navigate.splice(c,1)}))},before_navigate:n=>{ye(()=>(d.before_navigate.push(n),()=>{const c=d.before_navigate.indexOf(n);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(y||!g)&&(m=!1)},goto:(n,c={})=>ue(n,c,[]),invalidate:n=>{if(n===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof n=="function")i.push(n);else{const{href:c}=new URL(n,location.href);i.push(f=>f.href===c)}return Le()},invalidateAll:()=>(L=!0,Le()),prefetch:async n=>{const c=new URL(n,xe(document));await Oe(c)},prefetch_routes:async n=>{const f=(n?re.filter(s=>n.some(o=>s.exec(o))):re).map(s=>Promise.all([...s.layouts,s.leaf].map(o=>o==null?void 0:o[1]())));await Promise.all(f)},apply_action:async n=>{if(n.type==="error"){const c=new URL(location.href),{branch:f,route:s}=r;if(!s)return;const o=await je(r.branch.length,f,s.errors);if(o){const p=await X({url:c,params:r.params,branch:f.slice(0,o.idx).concat(o.node),status:500,error:n.error,route:s});r=p.state;const h=oe();R.$set(p.props),h()}}else if(n.type==="redirect")ue(n.location,{},[]);else{const c={form:n.data,page:{...N,form:n.data,status:n.status}},f=oe();R.$set(c),f()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,k;let o=!1;const p={from:se("from",{params:r.params,routeId:(k=(h=r.route)==null?void 0:h.id)!=null?k:null,url:r.url}),to:null,type:"unload",cancel:()=>o=!0};d.before_navigate.forEach(v=>v(p)),o?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(T);try{sessionStorage[Ge]=JSON.stringify(ee)}catch{}}});const n=s=>{const{url:o,options:p}=Be(s);if(o&&p.prefetch){if(Te(o))return;Oe(o)}};let c;const f=s=>{clearTimeout(c),c=setTimeout(()=>{var o;(o=s.target)==null||o.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",n),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",n),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:o,url:p,options:h}=Be(s);if(!o||!p)return;const k=o instanceof SVGAElement;if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(o.getAttribute("rel")||"").split(/\s+/);if(o.hasAttribute("download")||v.includes("external")||h.reload||(k?o.target.baseVal:o.target))return;const[w,b]=p.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){q=!0,we(T),r.url=p,K.page.set({...N,url:p}),K.page.notify();return}me({url:p,scroll:h.noscroll?be():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===T)return;const o=s.state[C]-T;me({url:new URL(location.href),scroll:ee[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=s.state[C]},blocked:()=>{history.go(-o)},type:"popstate",delta:o})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:n,error:c,node_ids:f,params:s,routeId:o,data:p,form:h})=>{var w;u=!0;const k=new URL(location.href);let v;try{const b=f.map(async(S,O)=>{const P=p[O];return de({loader:fe[S],url:k,params:s,routeId:o,parent:async()=>{const U={};for(let j=0;j<O;j+=1)Object.assign(U,(await b[j]).data);return U},server_data_node:pe(P)})});v=await X({url:k,params:s,branch:await Promise.all(b),status:n,error:c,form:h,route:(w=re.find(S=>S.id===o))!=null?w:null})}catch(b){if(b instanceof Ke){await ae(new URL(b.location,location.href));return}v=await ne({status:b instanceof ve?b.status:500,error:Q(b,{url:k,params:s,routeId:o}),url:k,routeId:o})}Ae(v)}}}let jt=1;async function ze(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+At,t.searchParams.set("__invalid",e.map(l=>l?"y":"n").join("")),t.searchParams.set("__id",String(jt++)),await Z(()=>import(t.href),[],import.meta.url);const i=window.__sveltekit_data;return delete window.__sveltekit_data,i}function Q(a,e){var t;return a instanceof ve?a.body:(t=Pt.handleError({error:a,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Tt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(a,e){for(const t of Tt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function Vt({env:a,hydrate:e,paths:t,target:i,trailing_slash:l}){st(t);const d=Ut({target:i,base:t.base,trailing_slash:l});ot({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Vt as start};
