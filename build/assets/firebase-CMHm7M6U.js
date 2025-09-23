import{q as Gl,aG as Wl,aH as Kl,_ as st,j as U,l as St,g as Y,k as Ge,h as tt,f as We,r as $,P as Ql,U as Dt,aI as Yl,W as Ke,aJ as Xl,as as ws,w as Jl,v as ai,aK as Zl,aL as Rs,aM as pu,i as th,aN as eh,n as Cs,aO as Qo,ah as nh,m as rh,H as mu,t as sh}from"./index-CR5h1e-W.js";var gu=function(){var n={hasMouse:!1,hasTouchEvents:!1,hasHover:!1,hasTouch:!1};if(!Gl)return n;if(Wl&&!Kl)n.hasMouse=!1,n.hasHover=!1,n.hasTouchEvents=!0,n.hasTouch=!0;else if(n.hasTouchEvents="ontouchstart"in document,n.hasTouch=n.hasTouchEvents||"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,n.hasTouch){var t=!/android|mobile|tablet/i.test(navigator.userAgent);n.hasMouse=typeof window.matchMedia=="function"&&window.matchMedia("(pointer)").matches?matchMedia("(pointer: fine)").matches:t,n.hasHover=n.hasMouse&&(typeof window.matchMedia=="function"&&window.matchMedia("(hover)").matches?matchMedia("(hover: hover)").matches:t)}else n.hasMouse=!0,n.hasHover=!0;return n}(),ih=function(){return gu.hasMouse}(),R_=function(){return gu.hasHover}();function oh(n){return typeof n=="function"}const ah=n=>typeof n=="object"&&n!==null&&n.hasOwnProperty("current");function uh(...n){return n.filter(t=>t).join(" ")}function ch(n){var{width:t=0,height:e=0,display:r="block","aria-hidden":s=!0,className:o,baseClassName:a,getRootRef:c,style:h,title:d,children:p}=n,v=st(n,["width","height","display","aria-hidden","className","baseClassName","getRootRef","style","title","children"]);const y=Math.max(t,e);return U.jsxs("svg",St(Y({"aria-hidden":s,display:r,className:uh(o,"vkuiIcon",`vkuiIcon--${y}`,`vkuiIcon--w-${t}`,`vkuiIcon--h-${e}`,a),width:t,height:e,style:Y({width:t,height:e},h),ref:c},v),{children:[d&&U.jsx("title",{children:d}),p]}))}function C_(n){var{vkuiIconId:t,vkuiAttrs:e,children:r,vkuiProps:s}=n,o=st(n,["vkuiIconId","vkuiAttrs","children","vkuiProps"]);return U.jsxs(ch,St(Y(St(Y({baseClassName:`vkuiIcon--${t}`},o,s),{style:s.fill?Y({color:s.fill},s.style):s.style}),e),{children:[s.children,r]}))}const lh={1:"vkuiTypography__weight1",2:"vkuiTypography__weight2",3:"vkuiTypography__weight3"},_u=n=>{var{weight:t,useAccentWeight:e,Component:r="span",normalize:s,inline:o}=n,a=st(n,["weight","useAccentWeight","Component","normalize","inline"]);return U.jsx(Ge,Y({Component:r,baseClassName:tt("vkuiTypography__host",s&&"vkuiTypography__normalize",o&&"vkuiTypography__inline",t&&lh[t],t&&e&&"vkuiTypography__accent")},a))},hh={1:"vkuiTitle__level1",2:"vkuiTitle__level2",3:"vkuiTitle__level3"},dh={none:"vkuiTitle__sizeYNone",compact:"vkuiTitle__sizeYCompact"},b_=n=>{var{className:t,level:e="1",Component:r="span",normalize:s=!0,inline:o=!1}=n,a=st(n,["className","level","Component","normalize","inline"]);const{sizeY:c="none"}=We();return U.jsx(_u,Y({Component:r,normalize:s,inline:o,className:tt(t,c!=="regular"&&dh[c],hh[e])},a))},fh={none:"vkuiText__sizeYNone",compact:"vkuiText__sizeYCompact"},yu=n=>{var{className:t,Component:e="span",normalize:r=!0,inline:s=!1}=n,o=st(n,["className","Component","normalize","inline"]);const{sizeY:a="none"}=We();return U.jsx(_u,Y({Component:e,normalize:r,inline:s,className:tt(t,"vkuiText__host",a!=="regular"&&fh[a])},o))},S_=n=>{var{as:t,noPadding:e=!1,className:r}=n,s=st(n,["as","noPadding","className"]);return U.jsx(yu,Y({Component:t,normalize:!1,className:tt("vkuiUnstyledTextField__host",e&&"vkuiUnstyledTextField__noPadding",r)},s))},ph=(...n)=>(...t)=>n.filter(e=>typeof e=="function").forEach(e=>e(...t));function ui(...n){const t=n.reduce((e,r)=>(Object.entries(r).forEach(([s,o])=>{e.hasOwnProperty(s)||(e[s]=[]),e[s].push(o)}),e),{});return Object.entries(t).reduce((e,[r,s])=>(e[r]=ph(...s),e),{})}function mh(){const[n,t]=$.useState(!1),{keyboardInput:e}=$.useContext(Ql),r=$.useCallback(a=>{a.stopPropagation(),t(!0)},[t]),s=$.useCallback(a=>{a.stopPropagation(),t(!1)},[t]);return{focusVisible:e&&n,onFocus:r,onBlur:s}}const gh={inside:"vkuistyles__-focus-visible--mode-inside",outside:"vkuistyles__-focus-visible--mode-outside"},_h=n=>n==="inside"||n==="outside";function vu({focusVisible:n=!1,mode:t="inside"}){const e=_h(t)?gh[t]:t;return tt("vkuistyles__-focus-visible",n&&"vkuistyles__-focus-visible--focused",n&&e)}function yh(n,t=0,e=Dt){const[r,s]=$.useState(n),o=$.useRef(void 0),a=$.useCallback(h=>{oh(h)?s(d=>{const p=h(d);return e(p),p}):(s(h),e(h))},[e]),c=$.useCallback((h,d=t)=>{if(clearTimeout(o.current),d===0){a(h);return}o.current=setTimeout(()=>a(h),d)},[t,a]);return[r,c]}const vh=600,Eh=70;function Th({hovered:n,hasHover:t=!0,lockState:e,setParentStateLock:r}){const[s,o]=$.useState(!1),a=$.useRef(void 0),c=$.useCallback(v=>{o(v);const y=n??Ls({hasState:t,isLocked:e,stateValueLocal:v});y!==a.current&&(a.current=y,r(y))},[r,t,n,e]),h=v=>{v.pointerType!=="touch"&&c(!0)},d=()=>{c(!1)};return{isHovered:n??Ls({hasState:t,isLocked:e,stateValueLocal:s}),onPointerEnter:t?h:Dt,onPointerLeave:t?d:Dt}}function Ih({activated:n,activeEffectDelay:t,hasActive:e=!0,lockStateRef:r,setParentStateLock:s}){const[o,a]=yh(!1,0,s),c=$.useMemo(()=>new Set,[]),h=()=>{r.current||(a(!0,Eh),s(!0))},d=y=>{if(c.has(y.pointerId)){c.delete(y.pointerId);return}a(!1)},p=y=>{c.add(y.pointerId),!r.current&&(a(!0),a(!1,t))};return{isActivated:n??Ls({hasState:e,isLocked:r.current,stateValueLocal:o}),onPointerLeave:e?d:Dt,onPointerDown:e?h:Dt,onPointerCancel:e?d:Dt,onPointerUp:e?p:Dt}}const Eu=$.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function Ah(n){const[t,e]=$.useState(!1),r=$.useCallback(s=>{e(s),n(s)},[n]);return[t,n,r]}function wh(n){const t=$.useRef(!1),e=$.useCallback(r=>{t.current=r,n(r)},[n]);return[t,n,e]}function Rh({hovered:n,hasHover:t,activated:e,hasActive:r,activeEffectDelay:s,unlockParentHover:o,hoverClassName:a,activeClassName:c}){const{lockHoverStateBubbling:h=Dt,lockActiveStateBubbling:d=Dt}=$.useContext(Eu),[p,v,y]=Ah(o?Dt:h),[C,P,k]=wh(d),V=Th({hasHover:t,hovered:n,lockState:p,setParentStateLock:v}),{isHovered:F}=V,M=st(V,["isHovered"]),z=Ih({activated:e,hasActive:r,activeEffectDelay:s,lockStateRef:C,setParentStateLock:P}),{isActivated:X}=z,pt=st(z,["isActivated"]),rt=tt(F&&a,X&&c),T=ui(M,pt);return Y({stateClassName:rt,setLockHoverBubblingImmediate:y,setLockActiveBubblingImmediate:k},T)}function Ls({hasState:n,isLocked:t,stateValueLocal:e}){return n&&!t&&e}function Ch(n){var{href:t,onClick:e,onClickCapture:r,activeClassName:s,hoverClassName:o,hasActive:a,hasHover:c,hovered:h,unlockParentHover:d,activated:p,activeEffectDelay:v,focusVisibleMode:y,DefaultComponent:C,Component:P}=n,k=st(n,["href","onClick","onClickCapture","activeClassName","hoverClassName","hasActive","hasHover","hovered","unlockParentHover","activated","activeEffectDelay","focusVisibleMode","DefaultComponent","Component"]);return St(Y({Component:P||C},k),{lockStateContextValue:{lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0}})}function bh(n){var{baseClassName:t,focusVisibleMode:e="inside",activeClassName:r,hoverClassName:s,activeEffectDelay:o=vh,hasHover:a=!0,hasActive:c=!0,hovered:h,activated:d,hasHoverWithChildren:p,unlockParentHover:v,onPointerEnter:y,onPointerLeave:C,onPointerDown:P,onPointerCancel:k,onPointerUp:V,onBlur:F,onFocus:M,onKeyDown:z,DefaultComponent:X}=n,pt=st(n,["baseClassName","focusVisibleMode","activeClassName","hoverClassName","activeEffectDelay","hasHover","hasActive","hovered","activated","hasHoverWithChildren","unlockParentHover","onPointerEnter","onPointerLeave","onPointerDown","onPointerCancel","onPointerUp","onBlur","onFocus","onKeyDown","DefaultComponent"]);const rt=mh(),{focusVisible:T}=rt,m=st(rt,["focusVisible"]),_=vu({focusVisible:T,mode:e}),E=Rh({activeClassName:r,hoverClassName:s,activeEffectDelay:o,hasHover:a,hasActive:c,hovered:h,activated:d,unlockParentHover:v}),{stateClassName:I,setLockHoverBubblingImmediate:w,setLockActiveBubblingImmediate:g}=E,Mt=st(E,["stateClassName","setLockHoverBubblingImmediate","setLockActiveBubblingImmediate"]),ge=ui(m,Mt,{onKeyDown:Yl},{onPointerEnter:y,onPointerLeave:C,onPointerDown:P,onPointerCancel:k,onPointerUp:V,onBlur:F,onFocus:M,onKeyDown:z}),Zr=$.useMemo(()=>({lockHoverStateBubbling:p?Dt:w,lockActiveStateBubbling:g}),[w,g,p]);return St(Y({baseClassName:tt(t,"vkuiClickable__realClickable",_,I)},ge,pt),{lockStateContextValue:Zr})}function Sh(n){const t=Ph(n),e=Tu(n),{baseClassName:r,disabled:s,Component:o}=n,a=st(n,["baseClassName","disabled","Component"]),c=Y({baseClassName:tt(r,"vkuiClickable__host")},t,a),h=bh(c);return e?h:Ch(c)}function Tu(n){return(n.href!==void 0||n.onClick!==void 0||n.onClickCapture!==void 0||n.Component==="a"||n.Component==="button"||n.Component==="label"||n.Component==="input")&&!n.disabled}function Ph({Component:n,DefaultComponent:t="div",onClick:e,onClickCapture:r,href:s,disabled:o}){return n!==void 0?{Component:n,disabled:o}:s!==void 0?Y({Component:"a"},o&&{"aria-disabled":!0,role:"link"}):e!==void 0||r!==void 0?Y({Component:t,role:"button"},o?{"aria-disabled":!0}:{tabIndex:0}):{}}const Vh=n=>{const t=Sh(n),{lockStateContextValue:e,children:r}=t,s=st(t,["lockStateContextValue","children"]);return U.jsx(Ge,St(Y({},s),{children:U.jsx(Eu.Provider,{value:e,children:r})}))};function kh(n){const t=n==null?void 0:n.getBoundingClientRect();return{top:t==null?void 0:t.top,left:t==null?void 0:t.left,width:n==null?void 0:n.offsetWidth,height:n==null?void 0:n.offsetHeight}}const Dh=(n,t)=>Ke()==="android"&&!t&&n==="background",Nh=70,Yo=225,xh=(n,t)=>{const[e,r]=$.useState([]),s=$.useMemo(()=>new Map,[]);$.useEffect(function(){const p=e.length>0?setTimeout(()=>r([]),Yo):null;return function(){p&&clearTimeout(p)}},[e]);function o(d,p,v){const y=Date.now(),C=e.filter(P=>P.id+Yo>y);r([...C,{x:d,y:p,id:y,pointerId:v}]),s.delete(v)}const a=d=>{const{top:p,left:v}=kh(d.currentTarget),y=d.clientX-(v??0),C=d.clientY-(p??0);s.set(d.pointerId,setTimeout(()=>o(y,C,d.pointerId),Nh))},c=d=>{const p=s.get(d.pointerId);clearTimeout(p),s.delete(d.pointerId)},h=(!ih||t===!1)&&n;return{clicks:e,onPointerDown:h?a:Dt,onPointerCancel:h?c:Dt}},Mh=({needRipple:n=!0,clicks:t})=>U.jsx("span",{"aria-hidden":!0,className:tt("vkuiTappable__stateLayer",n&&"vkuiTappable__ripple"),children:t.map(e=>U.jsx("span",{className:"vkuiTappable__wave",style:{top:e.y,left:e.x}},e.id))}),Tr="background",Oh={background:"vkuiTappable__hoveredBackground",opacity:"vkuiTappable__hoveredOpacity",none:""};function Lh(n=Tr){const t=Oh[n];return t!==void 0?t:n}const Fh={background:"vkuiTappable__activatedBackground",opacity:"vkuiTappable__activatedOpacity",none:""};function Uh(n=Tr){const t=Fh[n];return t!==void 0?t:n}const Bh={none:"vkuiTappable__sizeXNone",compact:"vkuiTappable__sizeXCompact"};function jh(n){switch(n){case void 0:return"vkuiTappable__hasPointerNone";case!1:return"vkuiTappable__hasPointerFalse"}}const zh=n=>{var{baseClassName:t,borderRadiusMode:e="auto",children:r,hoverMode:s=Tr,activeMode:o=Tr,onPointerDown:a,onPointerCancel:c}=n,h=st(n,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]);const d=Tu(h),{sizeX:p="none",hasPointer:v}=We(),y=Dh(o,v),C=xh(y,v),{clicks:P}=C,k=st(C,["clicks"]),V=ui(k,{onPointerDown:a,onPointerCancel:c}),F=h.Component==="button"?{type:"button"}:{};return U.jsxs(Vh,St(Y({baseClassName:tt("vkuiInternalTappable",t,"vkuiTappable__host",p!==Xl.REGULAR&&Bh[p],e==="inherit"&&"vkuiTappable__borderRadiusInherit",jh(v)),hoverClassName:Lh(s),activeClassName:Uh(o)},F,V,h),{children:[r,d&&(s==="background"||o==="background")&&U.jsx(Mh,{needRipple:y,clicks:P})]}))},qh={position:"absolute",left:"0",top:"0",zIndex:"-1",width:"100%",height:"100%",pointerEvents:"none",opacity:"0",border:"0"};class Xo{observe(t){return $h(t)?this.observeUsingIframe(t):this.observeUsingMutationObserver(t)}appendToTheDOM(){for(let t of this.records)t.target.appendChild(t.iframe);for(let t of this.records)t.iframe.contentWindow&&t.iframe.contentWindow.addEventListener("resize",this.updateFunction)}observeUsingIframe(t){const e=t.ownerDocument.createElement("iframe");e.ariaHidden="true",e.tabIndex=-1,Object.assign(e.style,qh),this.records.push({target:t,iframe:e})}observeUsingMutationObserver(t){this.mutationObserverFallback||(this.mutationObserverFallback=new MutationObserver(this.updateFunction)),this.mutationObserverFallback.observe(t,{childList:!0,subtree:!0})}disconnect(){this.records.map(({target:t,iframe:e})=>{e.contentWindow&&e.contentWindow.removeEventListener("resize",this.updateFunction),t.removeChild(e)}),this.records=[],this.mutationObserverFallback&&this.mutationObserverFallback.disconnect(),this.mutationObserverFallback=null}constructor(t){ws(this,"records",[]),ws(this,"mutationObserverFallback",null),ws(this,"updateFunction",void 0),this.updateFunction=t}}function $h(n){return getComputedStyle(n).position!=="static"}function Jo(n,t){const e=Jl(t),{window:r}=ai();$.useEffect(function(){if(!n||!r)return;if(n===r){const d=()=>e(n);return n.addEventListener("resize",d),()=>n.removeEventListener("resize",d)}if(!ah(n)||!n.current)return;const o=n.current,a="ResizeObserver"in r&&r.ResizeObserver!==void 0,c=()=>e(o),h=a?new ResizeObserver(c):new Xo(c);return h.observe(o),h instanceof Xo&&h.appendToTheDOM(),()=>h.disconnect()},[n,e,r])}const Hh={top:"vkuiFixedLayout__verticalTop",bottom:tt("vkuiFixedLayout__verticalBottom","vkuiInternalFixedLayout--vertical-bottom")},Gh=n=>{var{children:t,style:e,vertical:r,getRootRef:s,filled:o,className:a,useParentWidth:c}=n,h=st(n,["children","style","vertical","getRootRef","filled","className","useParentWidth"]);const d=Ke(),p=$.useRef(null),[v,y]=$.useState(void 0),{window:C}=ai(),{colRef:P}=$.useContext(Zl),k=$.useRef(null),V=$.useCallback(M=>{M&&(Rs(M,s),Rs(M,p),Rs(M.parentElement,k))},[s]),F=()=>{if(c&&k.current){const M=k.current.getBoundingClientRect().width;y(M?`${M}px`:void 0)}else if(P!=null&&P.current){const M=getComputedStyle(P.current);y(`${P.current.clientWidth-parseFloat(M.paddingLeft||"0")-parseFloat(M.paddingRight||"0")}px`)}else y(void 0)};return $.useEffect(F,[P,d,p,c]),Jo(C,F),Jo(c?k:P,F),U.jsx(pu,St(Y({},h),{fixed:!0,ref:V,className:tt("vkuiFixedLayout__host",d==="ios"&&"vkuiInternalFixedLayout--ios",o&&"vkuiFixedLayout__filled",r&&Hh[r],a),style:Y({width:v},e),children:t}))},Zo=(n,t)=>n.contains(t.activeElement);function Wh(n){const{document:t}=ai(),[e,r]=$.useState(()=>n.current&&t?Zo(n.current,t):!1);return th(function(){if(!t)return;const o=()=>{n.current&&r(Zo(n.current,t))};return o(),t.addEventListener("focus",o,{capture:!0}),t.addEventListener("blur",o,{capture:!0}),()=>{t.removeEventListener("focus",o,{capture:!0}),t.removeEventListener("blur",o,{capture:!0})}},[]),e}const Kh={s:"vkuiButton__sizeS",m:"vkuiButton__sizeM",l:"vkuiButton__sizeL"},Qh={primary:"vkuiButton__modePrimary",secondary:"vkuiButton__modeSecondary",tertiary:"vkuiButton__modeTertiary",outline:"vkuiButton__modeOutline",link:"vkuiButton__modeLink"},Yh={accent:"vkuiButton__appearanceAccent",positive:"vkuiButton__appearancePositive",negative:"vkuiButton__appearanceNegative",neutral:"vkuiButton__appearanceNeutral",overlay:"vkuiButton__appearanceOverlay","accent-invariable":"vkuiButton__appearanceAccentInvariable"},Xh={left:"vkuiButton__alignLeft",right:"vkuiButton__alignRight"},Jh={none:"vkuiButton__sizeYNone",regular:"vkuiButton__sizeYRegular"},P_=n=>{var{size:t="s",mode:e="primary",appearance:r="accent",stretched:s=!1,align:o="center",children:a,before:c,after:h,getRootRef:d,loading:p,onClick:v,disableSpinnerAnimation:y,rounded:C,disabled:P}=n,k=st(n,["size","mode","appearance","stretched","align","children","before","after","getRootRef","loading","onClick","disableSpinnerAnimation","rounded","disabled"]);const V=!a&&!!h!=!!c,{sizeY:F="none"}=We(),M=Ke();return U.jsxs(zh,St(Y({hoverMode:"vkuiButton__hover",activeMode:"vkuiButton__active",Component:k.href?"a":"button",focusVisibleMode:"outside",disabled:p||P},k),{onClick:p?void 0:v,baseClassName:tt("vkuiButton__host",Kh[t],Qh[e],Yh[r],o!=="center"&&Xh[o],F!=="compact"&&Jh[F],M==="ios"&&"vkuiButton__ios",s&&"vkuiButton__stretched",V&&!s&&"vkuiButton__singleIcon",p&&"vkuiButton__loading",C&&"vkuiButton__rounded",P&&"vkuiButton__disabled"),getRootRef:d,children:[p&&U.jsx(eh,{size:"s",className:"vkuiButton__spinner",disableAnimation:y,noColor:!0}),U.jsxs("span",{className:"vkuiButton__in",children:[Cs(c)&&U.jsx("span",{className:"vkuiButton__before",role:"presentation","data-testid":void 0,children:c}),Cs(a)&&U.jsx("span",{className:"vkuiButton__content","data-testid":void 0,children:a}),Cs(h)&&U.jsx("span",{className:"vkuiButton__after",role:"presentation","data-testid":void 0,children:h})]})]}))},Ue={className:""},Zh={className:"vkuistyles__-sizeX--compact-mq"},td={className:"vkuistyles__-sizeX--regular-mq"},ed={className:"vkuistyles__-sizeY--compact-mq"},nd={className:"vkuistyles__-sizeY--regular-mq"},rd={tabletMinus:{className:"vkuistyles__-viewWidth--tabletMinus-mq"},tabletPlus:{className:"vkuistyles__-viewWidth--tabletPlus-mq"}},sd={mobile:{className:"vkuistyles__-deviceType--mobile-mq"},desktop:{className:"vkuistyles__-deviceType--desktop-mq"}},ta=(n,t,e)=>({compact:n===void 0?t:n==="compact"?Ue:!1,regular:n===void 0?e:n==="regular"?Ue:!1}),id=(n,t)=>({tabletMinus:n===void 0?t.tabletMinus:n<Qo.TABLET?Ue:!1,tabletPlus:n===void 0?t.tabletPlus:n>=Qo.TABLET?Ue:!1}),od=(n,t,e,r,s)=>{const o=nh(n,t,e,r);return o===null?{mobile:s.mobile,desktop:s.desktop}:o?{mobile:!1,desktop:Ue}:{mobile:Ue,desktop:!1}},Iu=()=>{const{sizeX:n,sizeY:t,viewWidth:e,viewHeight:r,hasPointer:s}=$.useContext(rh),o=Ke();return $.useMemo(()=>{const a=ta(n,Zh,td),c=ta(t,ed,nd),h=id(e,rd),d=od(e,r,s,o,sd);return{sizeX:a,sizeY:c,viewWidth:h,deviceType:d}},[n,t,e,r,s,o])},V_=({IconCompact:n,IconRegular:t})=>{const{sizeY:e}=Iu();return U.jsxs($.Fragment,{children:[e.compact&&U.jsx(n,{className:e.compact.className}),e.regular&&U.jsx(t,{className:e.regular.className})]})},ad=$.createContext(null),ud=()=>{const n=$.useContext(ad);return n===null?{id:n}:{id:n,labelId:`${n}-label`}},cd={"2xs":"vkuistyles__-spacing--2xs",xs:"vkuistyles__-spacing--xs",s:"vkuistyles__-spacing--s",m:"vkuistyles__-spacing--m",l:"vkuistyles__-spacing--l",xl:"vkuistyles__-spacing--xl","2xl":"vkuistyles__-spacing--2xl","3xl":"vkuistyles__-spacing--3xl","4xl":"vkuistyles__-spacing--4xl"};function Au(n,t){return typeof t=="string"?t.startsWith("--")?[void 0,{[n]:`var(${t})`}]:[cd[t],void 0]:[void 0,typeof t=="number"?{[n]:`${t}px`}:void 0]}const ld="--vkui_internal--spacing_size",hd={primary:"vkuiSeparator__appearancePrimary",secondary:"vkuiSeparator__appearanceSecondary","primary-alpha":"vkuiSeparator__appearancePrimaryAlpha"},dd={horizontal:"vkuiSeparator__directionHorizontal",vertical:"vkuiSeparator__directionVertical"},fd={start:"vkuiSeparator__alignStart",end:"vkuiSeparator__alignEnd"},ea=n=>{var{padding:t=!1,appearance:e="primary",direction:r="horizontal",align:s="center",size:o}=n,a=st(n,["padding","appearance","direction","align","size"]);const[c,h]=Au(ld,o);return U.jsx(Ge,St(Y({},a),{baseClassName:tt(t&&"vkuiSeparator__padded",hd[e],dd[r],o!==void 0&&"vkuiSeparator__sized",s!=="center"&&fd[s],c),baseStyle:h,children:U.jsx("hr",{className:"vkuiSeparator__in"})}))},pd="--vkui_internal--spacing_size",md=n=>{var{size:t="m"}=n,e=st(n,["size"]);const[r,s]=Au(pd,t);return U.jsx(Ge,St(Y({},e),{baseStyle:s,baseClassName:tt("vkuiSpacing__host",r)}))},bs={ios:"vkuiPanelHeader__ios",android:"vkuiPanelHeader__android",vkcom:tt("vkuiPanelHeader__vkcom","vkuiInternalPanelHeader--vkcom")},gd={none:"vkuiPanelHeader__sizeXNone",regular:"vkuiPanelHeader__sizeXRegular"},_d={none:"vkuiPanelHeader__sizeYNone",compact:"vkuiPanelHeader__sizeYCompact"},na=({before:n,after:t,children:e,typographyProps:r={}})=>{const{Component:s="span"}=r,o=st(r,["Component"]),{hasCustomPanelHeaderAfter:a,customPanelHeaderAfterMinWidth:c}=mu(),h=ud().id!==null,d=Ke(),p=!a||h?{children:t}:{style:{minWidth:c}},v=d==="vkcom"?U.jsx(yu,St(Y({weight:"2",Component:s},o),{children:e})):U.jsx(s,St(Y({className:"vkuiPanelHeader__contentIn"},o),{children:e}));return U.jsxs(pu,{fixed:!0,className:"vkuiPanelHeader__in",children:[U.jsx("div",{className:tt("vkuiPanelHeader__before","vkuiInternalPanelHeader__before"),children:n}),U.jsx("div",{className:"vkuiPanelHeader__content",children:v}),U.jsx("div",Y({className:tt("vkuiPanelHeader__after","vkuiInternalPanelHeader__after")},p))]})},k_=n=>{var{before:t,children:e,after:r,float:s=!1,transparent:o=!1,delimiter:a="auto",shadow:c,getRef:h,getRootRef:d,fixed:p,typographyProps:v}=n,y=st(n,["before","children","after","float","transparent","delimiter","shadow","getRef","getRootRef","fixed","typographyProps"]);const C=Ke(),{sizeX:P="none",sizeY:k="none"}=We(),{sizeX:V}=Iu(),F=C==="vkcom",M=p!==void 0?p:!F,z=a==="auto"||a==="separator",X=!s&&z,pt=!s&&(a==="auto"||a==="spacing");return U.jsxs(Ge,St(Y({},y),{baseClassName:tt("vkuiPanelHeader__host","vkuiInternalPanelHeader",bs.hasOwnProperty(C)?bs[C]:bs.android,o&&"vkuiPanelHeader__trnsp",c&&"vkuiPanelHeader__shadow",!s&&tt("vkuiPanelHeader__static","vkuiInternalPanelHeader--static"),X&&tt("vkuiPanelHeader__sep","vkuiInternalPanelHeader--sep"),!t&&tt("vkuiPanelHeader__noBefore","vkuiInternalPanelHeader--no-before"),!r&&"vkuiPanelHeader__noAfter",M&&"vkuiPanelHeader__hasFixed",P!=="compact"&&gd[P],k!=="regular"&&_d[k]),getRootRef:M?d:h,children:[M?U.jsx(Gh,{className:tt("vkuiPanelHeader__fixed","vkuiInternalPanelHeader__fixed"),vertical:"top",getRootRef:h,children:U.jsx(na,{before:t,after:r,typographyProps:v,children:e})}):U.jsx(na,{before:t,after:r,typographyProps:v,children:e}),!F&&U.jsxs(U.Fragment,{children:[X&&V.compact&&U.jsx(ea,{className:V.compact.className,padding:!0}),pt&&V.regular&&U.jsx(md,{className:V.regular.className,size:16})]}),z&&F&&U.jsx(ea,{className:"vkuiPanelHeader__separator"})]}))};function D_(){const{direction:n}=mu();return n||"ltr"}const yd={none:"vkuiFormField__sizeYNone",compact:"vkuiFormField__sizeYCompact"},vd={error:"vkuiFormField__statusError",valid:"vkuiFormField__statusValid"},Ed={center:void 0,start:"vkuiFormField__iconAlignStart",end:"vkuiFormField__iconAlignEnd"},ra=(n,t,e)=>U.jsx("div",{className:"vkuiFormField__iconWrapper",children:U.jsx("span",{className:tt(Ed[t],e),children:n})}),N_=n=>{var{Component:t="span",status:e="default",children:r,getRootRef:s,before:o,after:a,beforeAlign:c="center",afterAlign:h="center",disabled:d,mode:p="default",className:v,maxHeight:y,style:C}=n,P=st(n,["Component","status","children","getRootRef","before","after","beforeAlign","afterAlign","disabled","mode","className","maxHeight","style"]);const k=sh(s),{sizeY:V="none"}=We(),[F,M]=$.useState(!1),z=Wh(k),X=vu({focusVisible:z,mode:"vkuiFormField__focusVisible"}),pt=T=>{T.stopPropagation(),M(!0)},rt=T=>{T.stopPropagation(),M(!1)};return U.jsxs(t,St(Y({},P),{ref:k,style:Y({maxHeight:y},C),onMouseEnter:pt,onMouseLeave:rt,className:tt("vkuiFormField__host",p==="default"&&"vkuiFormField__modeDefault",e!=="default"&&vd[e],V!=="regular"&&yd[V],d&&"vkuiFormField__disabled",!d&&F&&"vkuiFormField__hover",X,v),children:[U.jsxs("div",{className:"vkuiFormField__scrollContainer",children:[o&&ra(o,c,"vkuiFormField__before"),U.jsx("div",{className:"vkuiFormField__content",children:r}),a&&ra(a,h,tt("vkuiFormField__after","vkuiInternalFormField__after"))]}),U.jsx("span",{"aria-hidden":!0,className:"vkuiFormField__border"})]}))},x_=n=>U.jsx(Ge,Y({baseClassName:"vkuiDiv__host"},n)),Td=()=>{};var sa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Id=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|c>>4;let y=(c&15)<<2|d>>6,C=d&63;h||(C=64,a||(y=64)),r.push(e[p],e[v],e[y],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(wu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Id(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||v==null)throw new Ad;const y=o<<2|c>>4;if(r.push(y),d!==64){const C=c<<4&240|d>>2;if(r.push(C),v!==64){const P=d<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ad extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wd=function(n){const t=wu(n);return Ru.encodeByteArray(t,!0)},Ir=function(n){return wd(n).replace(/\./g,"")},Rd=function(n){try{return Ru.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=()=>Cd().__FIREBASE_DEFAULTS__,Sd=()=>{if(typeof process>"u"||typeof sa>"u")return;const n=sa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Rd(n[1]);return t&&JSON.parse(t)},ci=()=>{try{return Td()||bd()||Sd()||Pd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vd=n=>{var t,e;return(e=(t=ci())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},kd=n=>{const t=Vd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Cu=()=>{var n;return(n=ci())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ir(JSON.stringify(e)),Ir(JSON.stringify(a)),""].join(".")}const An={};function Md(){const n={prod:[],emulator:[]};for(const t of Object.keys(An))An[t]?n.emulator.push(t):n.prod.push(t);return n}function Od(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ia=!1;function Ld(n,t){if(typeof window>"u"||typeof document>"u"||!li(window.location.host)||An[n]===t||An[n]||ia)return;An[n]=t;function e(y){return`__firebase__banner__${y}`}const r="__firebase__banner",o=Md().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function h(y,C){y.setAttribute("width","24"),y.setAttribute("id",C),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{ia=!0,a()},y}function p(y,C){y.setAttribute("id",C),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function v(){const y=Od(r),C=e("text"),P=document.getElementById(C)||document.createElement("span"),k=e("learnmore"),V=document.getElementById(k)||document.createElement("a"),F=e("preprendIcon"),M=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const z=y.element;c(z),p(V,k);const X=d();h(M,F),z.append(M,P,V,X),document.body.appendChild(z)}o?(P.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){var t;const n=(t=ci())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bd(){return!Ud()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jd(){try{return typeof indexedDB=="object"}catch{return!1}}function zd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="FirebaseError";class Qe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=qd,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bu.prototype.create)}}class bu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?$d(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Qe(s,c,r)}}function $d(n,t){return n.replace(Hd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Hd=/\{\$([^}]+)}/g;function Ar(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(oa(o)&&oa(a)){if(!Ar(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function oa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){return n&&n._delegate?n._delegate:n}class Sn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Dd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kd(t))try{this.getOrInitializeService({instanceIdentifier:Te})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Te){return this.instances.has(t)}getOptions(t=Te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Te){return this.component?this.component.multipleInstances?t:Te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wd(n){return n===Te?void 0:n}function Kd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Gd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Yd={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Xd=W.INFO,Jd={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Zd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Jd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Su{constructor(t){this.name=t,this._logLevel=Xd,this._logHandler=Zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const tf=(n,t)=>t.some(e=>n instanceof e);let aa,ua;function ef(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nf(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pu=new WeakMap,Fs=new WeakMap,Vu=new WeakMap,Ss=new WeakMap,hi=new WeakMap;function rf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(se(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Pu.set(e,n)}).catch(()=>{}),hi.set(t,n),t}function sf(n){if(Fs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Fs.set(n,t)}let Us={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Fs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Vu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return se(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function of(n){Us=n(Us)}function af(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ps(this),t,...e);return Vu.set(r,t.sort?t.sort():[t]),se(r)}:nf().includes(n)?function(...t){return n.apply(Ps(this),t),se(Pu.get(this))}:function(...t){return se(n.apply(Ps(this),t))}}function uf(n){return typeof n=="function"?af(n):(n instanceof IDBTransaction&&sf(n),tf(n,ef())?new Proxy(n,Us):n)}function se(n){if(n instanceof IDBRequest)return rf(n);if(Ss.has(n))return Ss.get(n);const t=uf(n);return t!==n&&(Ss.set(n,t),hi.set(t,n)),t}const Ps=n=>hi.get(n);function cf(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=se(a);return r&&a.addEventListener("upgradeneeded",h=>{r(se(a.result),h.oldVersion,h.newVersion,se(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const lf=["get","getKey","getAll","getAllKeys","count"],hf=["put","add","delete","clear"],Vs=new Map;function ca(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=hf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lf.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return Vs.set(t,o),o}of(n=>({...n,get:(t,e,r)=>ca(t,e)||n.get(t,e,r),has:(t,e)=>!!ca(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ff(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ff(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bs="@firebase/app",la="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Su("@firebase/app"),pf="@firebase/app-compat",mf="@firebase/analytics-compat",gf="@firebase/analytics",_f="@firebase/app-check-compat",yf="@firebase/app-check",vf="@firebase/auth",Ef="@firebase/auth-compat",Tf="@firebase/database",If="@firebase/data-connect",Af="@firebase/database-compat",wf="@firebase/functions",Rf="@firebase/functions-compat",Cf="@firebase/installations",bf="@firebase/installations-compat",Sf="@firebase/messaging",Pf="@firebase/messaging-compat",Vf="@firebase/performance",kf="@firebase/performance-compat",Df="@firebase/remote-config",Nf="@firebase/remote-config-compat",xf="@firebase/storage",Mf="@firebase/storage-compat",Of="@firebase/firestore",Lf="@firebase/ai",Ff="@firebase/firestore-compat",Uf="firebase",Bf="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="[DEFAULT]",jf={[Bs]:"fire-core",[pf]:"fire-core-compat",[gf]:"fire-analytics",[mf]:"fire-analytics-compat",[yf]:"fire-app-check",[_f]:"fire-app-check-compat",[vf]:"fire-auth",[Ef]:"fire-auth-compat",[Tf]:"fire-rtdb",[If]:"fire-data-connect",[Af]:"fire-rtdb-compat",[wf]:"fire-fn",[Rf]:"fire-fn-compat",[Cf]:"fire-iid",[bf]:"fire-iid-compat",[Sf]:"fire-fcm",[Pf]:"fire-fcm-compat",[Vf]:"fire-perf",[kf]:"fire-perf-compat",[Df]:"fire-rc",[Nf]:"fire-rc-compat",[xf]:"fire-gcs",[Mf]:"fire-gcs-compat",[Of]:"fire-fst",[Ff]:"fire-fst-compat",[Lf]:"fire-vertex","fire-js":"fire-js",[Uf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Map,zf=new Map,zs=new Map;function ha(n,t){try{n.container.addComponent(t)}catch(e){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function wr(n){const t=n.name;if(zs.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;zs.set(t,n);for(const e of Pn.values())ha(e,n);for(const e of zf.values())ha(e,n);return!0}function qf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function $f(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ie=new bu("app","Firebase",Hf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=Bf;function ku(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:js,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ie.create("bad-app-name",{appName:String(s)});if(e||(e=Cu()),!e)throw ie.create("no-options");const o=Pn.get(s);if(o){if(Ar(e,o.options)&&Ar(r,o.config))return o;throw ie.create("duplicate-app",{appName:s})}const a=new Qd(s);for(const h of zs.values())a.addComponent(h);const c=new Gf(e,r,a);return Pn.set(s,c),c}function Du(n=js){const t=Pn.get(n);if(!t&&n===js&&Cu())return ku();if(!t)throw ie.create("no-app",{appName:n});return t}function Kf(){return Array.from(Pn.values())}function Oe(n,t,e){let r=jf[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}wr(new Sn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="firebase-heartbeat-database",Yf=1,Vn="firebase-heartbeat-store";let ks=null;function Nu(){return ks||(ks=cf(Qf,Yf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Vn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ie.create("idb-open",{originalErrorMessage:n.message})})),ks}async function Xf(n){try{const e=(await Nu()).transaction(Vn),r=await e.objectStore(Vn).get(xu(n));return await e.done,r}catch(t){if(t instanceof Qe)Qt.warn(t.message);else{const e=ie.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(e.message)}}}async function da(n,t){try{const r=(await Nu()).transaction(Vn,"readwrite");await r.objectStore(Vn).put(t,xu(n)),await r.done}catch(e){if(e instanceof Qe)Qt.warn(e.message);else{const r=ie.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(r.message)}}}function xu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=1024,Zf=30;class tp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new np(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fa();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Zf){const a=rp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fa(),{heartbeatsToSend:r,unsentEntries:s}=ep(this._heartbeatsCache.heartbeats),o=Ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Qt.warn(e),""}}}function fa(){return new Date().toISOString().substring(0,10)}function ep(n,t=Jf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),pa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),pa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class np{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?zd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Xf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return da(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return da(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function pa(n){return Ir(JSON.stringify({version:2,heartbeats:n})).length}function rp(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){wr(new Sn("platform-logger",t=>new df(t),"PRIVATE")),wr(new Sn("heartbeat",t=>new tp(t),"PRIVATE")),Oe(Bs,la,n),Oe(Bs,la,"esm2020"),Oe("fire-js","")}sp("");var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oe,Mu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,I,w){for(var g=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)g[Mt-2]=arguments[Mt];return m.prototype[I].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],I=T.g[2];var w=T.g[3],g=m+(w^_&(I^w))+E[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+E[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+E[2]+606105819&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+E[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(w^_&(I^w))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+E[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+E[6]+2821735955&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+E[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(w^_&(I^w))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+E[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+E[10]+4294925233&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+E[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(w^_&(I^w))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+E[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+E[14]+2792965006&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+E[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^w&(_^I))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+E[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+E[11]+643717713&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+E[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^w&(_^I))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+E[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+E[15]+3634488961&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+E[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^w&(_^I))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+E[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+E[3]+4107603335&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+E[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^w&(_^I))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+E[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+E[7]+1735328473&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+E[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^w)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+E[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+E[11]+1839030562&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+E[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^w)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+E[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+E[7]+4139469664&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+E[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^w)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+E[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+E[3]+3572445317&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+E[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^w)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+E[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+E[15]+530742520&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+E[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~w))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+E[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+E[14]+2878612391&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+E[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~w))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+E[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+E[10]+4293915773&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+E[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~w))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+E[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+E[6]+2734768916&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+E[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~w))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+E[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+E[2]+718787259&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,E=this.B,I=this.h,w=0;w<m;){if(I==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(E[I++]=T.charCodeAt(w++),I==this.blockSize){s(this,E),I=0;break}}else for(;w<m;)if(E[I++]=T[w++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)T[_++]=this.g[m]>>>E&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],E=!0,I=T.length-1;0<=I;I--){var w=T[I]|0;E&&w==m||(_[I]=w,E=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return V(d(-T));for(var m=[],_=1,E=0;T>=_;E++)m[E]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=v,I=0;I<T.length;I+=8){var w=Math.min(8,T.length-I),g=parseInt(T.substring(I,I+w),m);8>w?(w=d(Math.pow(m,w)),E=E.j(w).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var v=h(0),y=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(k(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,E="";;){var I=X(_,m).g;_=F(_,I.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=I,P(_))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=F(this,T),k(T)?-1:P(T)?0:1};function V(T){for(var m=T.g.length,_=[],E=0;E<m;E++)_[E]=~T.g[E];return new a(_,~T.h).add(y)}n.abs=function(){return k(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0,I=0;I<=m;I++){var w=E+(this.i(I)&65535)+(T.i(I)&65535),g=(w>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=g>>>16,w&=65535,g&=65535,_[I]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function F(T,m){return T.add(V(m))}n.j=function(T){if(P(this)||P(T))return v;if(k(this))return k(T)?V(this).j(V(T)):V(V(this).j(T));if(k(T))return V(this.j(V(T)));if(0>this.l(C)&&0>T.l(C))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var w=this.i(E)>>>16,g=this.i(E)&65535,Mt=T.i(I)>>>16,ge=T.i(I)&65535;_[2*E+2*I]+=g*ge,M(_,2*E+2*I),_[2*E+2*I+1]+=w*ge,M(_,2*E+2*I+1),_[2*E+2*I+1]+=g*Mt,M(_,2*E+2*I+1),_[2*E+2*I+2]+=w*Mt,M(_,2*E+2*I+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function M(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function z(T,m){this.g=T,this.h=m}function X(T,m){if(P(m))throw Error("division by zero");if(P(T))return new z(v,v);if(k(T))return m=X(V(T),m),new z(V(m.g),V(m.h));if(k(m))return m=X(T,V(m)),new z(V(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=m;0>=E.l(T);)_=pt(_),E=pt(E);var I=rt(_,1),w=rt(E,1);for(E=rt(E,2),_=rt(_,2);!P(E);){var g=w.add(E);0>=g.l(T)&&(I=I.add(_),w=g),E=rt(E,1),_=rt(_,1)}return m=F(T,I.j(m)),new z(I,m)}for(I=v;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=d(_),g=w.j(m);k(g)||0<g.l(T);)_-=E,w=d(_),g=w.j(m);P(w)&&(w=y),I=I.add(w),T=F(T,g)}return new z(I,T)}n.A=function(T){return X(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function pt(T){for(var m=T.g.length+1,_=[],E=0;E<m;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function rt(T,m){var _=m>>5;m%=32;for(var E=T.g.length-_,I=[],w=0;w<E;w++)I[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,oe=a}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ou,vn,Lu,mr,qs,Fu,Uu,Bu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof lr=="object"&&lr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in l))break t;l=l[A]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,A={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,l){return i.call.apply(i.bind,arguments)}function v(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(u,A)}}return function(){return i.apply(u,arguments)}}function y(i,u,l){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,y.apply(null,arguments)}function C(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,A,R){for(var D=Array(arguments.length-2),J=2;J<arguments.length;J++)D[J-2]=arguments[J];return u.prototype[A].apply(f,D)}}function k(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const A=i.length||0,R=f.length||0;i.length=A+R;for(let D=0;D<R;D++)i[A+D]=f[D]}else i.push(f)}}class F{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function X(i){return X[" "](i),i}X[" "]=function(){};var pt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function rt(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function I(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function g(){var i=ts;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Mt{constructor(){this.h=this.g=null}add(u,l){const f=ge.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var ge=new F(()=>new Zr,i=>i.reset());class Zr{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,rn=!1,ts=new Mt,Ki=()=>{const i=c.Promise.resolve(void 0);nn=()=>{i.then(dl)}};var dl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){w(l)}var u=ge;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}rn=!1};function Zt(){this.s=this.s,this.C=this.C}Zt.prototype.s=!1,Zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function vt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var fl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function sn(i,u){if(vt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(pt){t:{try{X(u.nodeName);var A=!0;break t}catch{}A=!1}A||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:pl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&sn.aa.h.call(this)}}P(sn,vt);var pl={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),ml=0;function gl(i,u,l,f,A){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=A,this.key=++ml,this.da=this.fa=!1}function Gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Wn(i){this.src=i,this.g={},this.h=0}Wn.prototype.add=function(i,u,l,f,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=ns(i,u,f,A);return-1<D?(u=i[D],l||(u.fa=!1)):(u=new gl(u,this.src,R,!!f,A),u.fa=l,i.push(u)),u};function es(i,u){var l=u.type;if(l in i.g){var f=i.g[l],A=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(Gn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ns(i,u,l,f){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return A}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),ss={};function Qi(i,u,l,f,A){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Qi(i,u[R],l,f,A);return null}return l=Ji(l),i&&i[Hn]?i.K(u,l,d(f)?!!f.capture:!1,A):_l(i,u,l,!1,f,A)}function _l(i,u,l,f,A,R){if(!u)throw Error("Invalid event type");var D=d(A)?!!A.capture:!!A,J=os(i);if(J||(i[rs]=J=new Wn(i)),l=J.add(u,l,f,D,R),l.proxy)return l;if(f=yl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)fl||(A=D),A===void 0&&(A=!1),i.addEventListener(u.toString(),f,A);else if(i.attachEvent)i.attachEvent(Xi(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function yl(){function i(l){return u.call(i.src,i.listener,l)}const u=vl;return i}function Yi(i,u,l,f,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)Yi(i,u[R],l,f,A);else f=d(f)?!!f.capture:!!f,l=Ji(l),i&&i[Hn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=ns(R,l,f,A),-1<l&&(Gn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=os(i))&&(u=i.g[u.toString()],i=-1,u&&(i=ns(u,l,f,A)),(l=-1<i?u[i]:null)&&is(l))}function is(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Hn])es(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(Xi(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=os(u))?(es(l,i),l.h==0&&(l.src=null,u[rs]=null)):Gn(i)}}}function Xi(i){return i in ss?ss[i]:ss[i]="on"+i}function vl(i,u){if(i.da)i=!0;else{u=new sn(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&is(i),i=l.call(f,u)}return i}function os(i){return i=i[rs],i instanceof Wn?i:null}var as="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ji(i){return typeof i=="function"?i:(i[as]||(i[as]=function(u){return i.handleEvent(u)}),i[as])}function Et(){Zt.call(this),this.i=new Wn(this),this.M=this,this.F=null}P(Et,Zt),Et.prototype[Hn]=!0,Et.prototype.removeEventListener=function(i,u,l,f){Yi(this,i,u,l,f)};function Ct(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new vt(u,i);else if(u instanceof vt)u.target=u.target||i;else{var A=u;u=new vt(f,i),E(u,A)}if(A=!0,l)for(var R=l.length-1;0<=R;R--){var D=u.g=l[R];A=Kn(D,f,!0,u)&&A}if(D=u.g=i,A=Kn(D,f,!0,u)&&A,A=Kn(D,f,!1,u)&&A,l)for(R=0;R<l.length;R++)D=u.g=l[R],A=Kn(D,f,!1,u)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Gn(l[f]);delete i.g[u],i.h--}}this.F=null},Et.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},Et.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function Kn(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==l){var J=D.listener,mt=D.ha||D.src;D.fa&&es(i.i,D),A=J.call(mt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Zi(i,u,l){if(typeof i=="function")l&&(i=y(i,l));else if(i&&typeof i.handleEvent=="function")i=y(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function to(i){i.g=Zi(()=>{i.g=null,i.i&&(i.i=!1,to(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class El extends Zt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:to(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){Zt.call(this),this.h=i,this.g={}}P(on,Zt);var eo=[];function no(i){rt(i.g,function(u,l){this.g.hasOwnProperty(l)&&is(u)},i),i.g={}}on.prototype.N=function(){on.aa.N.call(this),no(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var us=c.JSON.stringify,Tl=c.JSON.parse,Il=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function cs(){}cs.prototype.h=null;function ro(i){return i.h||(i.h=i.i())}function so(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ls(){vt.call(this,"d")}P(ls,vt);function hs(){vt.call(this,"c")}P(hs,vt);var _e={},io=null;function Qn(){return io=io||new Et}_e.La="serverreachability";function oo(i){vt.call(this,_e.La,i)}P(oo,vt);function un(i){const u=Qn();Ct(u,new oo(u))}_e.STAT_EVENT="statevent";function ao(i,u){vt.call(this,_e.STAT_EVENT,i),this.stat=u}P(ao,vt);function bt(i){const u=Qn();Ct(u,new ao(u,i))}_e.Ma="timingevent";function uo(i,u){vt.call(this,_e.Ma,i),this.size=u}P(uo,vt);function cn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function ln(){this.g=!0}ln.prototype.xa=function(){this.g=!1};function Al(i,u,l,f,A,R){i.info(function(){if(i.g)if(R)for(var D="",J=R.split("&"),mt=0;mt<J.length;mt++){var K=J[mt].split("=");if(1<K.length){var Tt=K[0];K=K[1];var It=Tt.split("_");D=2<=It.length&&It[1]=="type"?D+(Tt+"="+K+"&"):D+(Tt+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+u+`
`+l+`
`+D})}function wl(i,u,l,f,A,R,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+u+`
`+l+`
`+R+" "+D})}function Se(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cl(i,l)+(f?" "+f:"")})}function Rl(i,u){i.info(function(){return"TIMEOUT: "+u})}ln.prototype.info=function(){};function Cl(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return us(l)}catch{return u}}var Yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},co={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ds;function Xn(){}P(Xn,cs),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},ds=new Xn;function te(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lo}function lo(){this.i=null,this.g="",this.h=!1}var ho={},fs={};function ps(i,u,l){i.L=1,i.v=er(Ht(u)),i.m=l,i.P=!0,fo(i,null)}function fo(i,u){i.F=Date.now(),Jn(i),i.A=Ht(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),bo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new lo,i.g=Ho(i.j,l?u:null,!i.m),0<i.O&&(i.M=new El(y(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(eo[0]=A.toString()),A=eo);for(var R=0;R<A.length;R++){var D=Qi(l,A[R],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),un(),Al(i.i,i.u,i.A,i.l,i.R,i.m)}te.prototype.ca=function(i){i=i.target;const u=this.M;u&&Gt(i)==3?u.j():this.Y(i)},te.prototype.Y=function(i){try{if(i==this.g)t:{const It=Gt(this.g);var u=this.g.Ba();const ke=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||xo(this.g)))){this.J||It!=4||u==7||(u==8||0>=ke?un(3):un(2)),ms(this);var l=this.g.Z();this.X=l;e:if(po(this)){var f=xo(this.g);i="";var A=f.length,R=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ye(this),hn(this);var D="";break e}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==A-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,wl(this.i,this.u,this.A,this.l,this.R,It,l),this.o){if(this.T&&!this.K){e:{if(this.g){var J,mt=this.g;if((J=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(J)){var K=J;break e}}K=null}if(l=K)Se(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,l);else{this.o=!1,this.s=3,bt(12),ye(this),hn(this);break t}}if(this.P){l=!0;let Ot;for(;!this.J&&this.C<D.length;)if(Ot=bl(this,D),Ot==fs){It==4&&(this.s=4,bt(14),l=!1),Se(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==ho){this.s=4,bt(15),Se(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Se(this.i,this.l,Ot,null),gs(this,Ot);if(po(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||D.length!=0||this.h.h||(this.s=1,bt(16),l=!1),this.o=this.o&&l,!l)Se(this.i,this.l,D,"[Invalid Chunked Response]"),ye(this),hn(this);else if(0<D.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Is(Tt),Tt.M=!0,bt(11))}}else Se(this.i,this.l,D,null),gs(this,D);It==4&&ye(this),this.o&&!this.J&&(It==4?jo(this.j,this):(this.o=!1,Jn(this)))}else $l(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),ye(this),hn(this)}}}catch{}finally{}};function po(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function bl(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?fs:(l=Number(u.substring(l,f)),isNaN(l)?ho:(f+=1,f+l>u.length?fs:(u=u.slice(f,f+l),i.C=f+l,u)))}te.prototype.cancel=function(){this.J=!0,ye(this)};function Jn(i){i.S=Date.now()+i.I,mo(i,i.I)}function mo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=cn(y(i.ba,i),u)}function ms(i){i.B&&(c.clearTimeout(i.B),i.B=null)}te.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Rl(this.i,this.A),this.L!=2&&(un(),bt(17)),ye(this),this.s=2,hn(this)):mo(this,this.S-i)};function hn(i){i.j.G==0||i.J||jo(i.j,i)}function ye(i){ms(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,no(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function gs(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||_s(l.h,i))){if(!i.K&&_s(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)ar(l),ir(l);else break t;Ts(l),bt(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=cn(y(l.Za,l),6e3));if(1>=yo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ee(l,11)}else if((i.K||l.g==i)&&ar(l),!M(u))for(A=l.Da.g.parse(u),u=0;u<A.length;u++){let K=A[u];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const Tt=K[3];Tt!=null&&(l.la=Tt,l.j.info("VER="+l.la));const It=K[4];It!=null&&(l.Aa=It,l.j.info("SVER="+l.Aa));const ke=K[5];ke!=null&&typeof ke=="number"&&0<ke&&(f=1.5*ke,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ot=i.g;if(Ot){const cr=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var R=f.h;R.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ys(R,R.h),R.h=null))}if(f.D){const As=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(f.ya=As,et(f.I,f.D,As))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var D=i;if(f.qa=$o(f,f.J?f.ia:null,f.W),D.K){vo(f.h,D);var J=D,mt=f.L;mt&&(J.I=mt),J.B&&(ms(J),Jn(J)),f.g=D}else Uo(f);0<l.i.length&&or(l)}else K[0]!="stop"&&K[0]!="close"||Ee(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Ee(l,7):Es(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}un(4)}catch{}}var Sl=class{constructor(i,u){this.g=i,this.map=u}};function go(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _o(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function yo(i){return i.h?1:i.g?i.g.size:0}function _s(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ys(i,u){i.g?i.g.add(u):i.h=u}function vo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}go.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Eo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return k(i.i)}function Pl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function Vl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function To(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Vl(i),f=Pl(i),A=f.length,R=0;R<A;R++)u.call(void 0,f[R],l&&l[R],i)}var Io=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kl(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),A=null;if(0<=f){var R=i[l].substring(0,f);A=i[l].substring(f+1)}else R=i[l];u(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ve(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ve){this.h=i.h,Zn(this,i.j),this.o=i.o,this.g=i.g,tr(this,i.s),this.l=i.l;var u=i.i,l=new pn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Ao(this,l),this.m=i.m}else i&&(u=String(i).match(Io))?(this.h=!1,Zn(this,u[1]||"",!0),this.o=dn(u[2]||""),this.g=dn(u[3]||"",!0),tr(this,u[4]),this.l=dn(u[5]||"",!0),Ao(this,u[6]||"",!0),this.m=dn(u[7]||"")):(this.h=!1,this.i=new pn(null,this.h))}ve.prototype.toString=function(){var i=[],u=this.j;u&&i.push(fn(u,wo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(fn(u,wo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(fn(l,l.charAt(0)=="/"?xl:Nl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",fn(l,Ol)),i.join("")};function Ht(i){return new ve(i)}function Zn(i,u,l){i.j=l?dn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function tr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Ao(i,u,l){u instanceof pn?(i.i=u,Ll(i.i,i.h)):(l||(u=fn(u,Ml)),i.i=new pn(u,i.h))}function et(i,u,l){i.i.set(u,l)}function er(i){return et(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function fn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Dl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Dl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var wo=/[#\/\?@]/g,Nl=/[#\?:]/g,xl=/[#\?]/g,Ml=/[#\?@]/g,Ol=/#/g;function pn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ee(i){i.g||(i.g=new Map,i.h=0,i.i&&kl(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=pn.prototype,n.add=function(i,u){ee(this),this.i=null,i=Pe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function Ro(i,u){ee(i),u=Pe(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Co(i,u){return ee(i),u=Pe(i,u),i.g.has(u)}n.forEach=function(i,u){ee(this),this.g.forEach(function(l,f){l.forEach(function(A){i.call(u,A,f,this)},this)},this)},n.na=function(){ee(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const A=i[f];for(let R=0;R<A.length;R++)l.push(u[f])}return l},n.V=function(i){ee(this);let u=[];if(typeof i=="string")Co(this,i)&&(u=u.concat(this.g.get(Pe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return ee(this),this.i=null,i=Pe(this,i),Co(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function bo(i,u,l){Ro(i,u),0<l.length&&(i.i=null,i.g.set(Pe(i,u),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var A=R;D[f]!==""&&(A+="="+encodeURIComponent(String(D[f]))),i.push(A)}}return this.i=i.join("&")};function Pe(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Ll(i,u){u&&!i.j&&(ee(i),i.i=null,i.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(Ro(this,f),bo(this,A,l))},i)),i.j=u}function Fl(i,u){const l=new ln;if(c.Image){const f=new Image;f.onload=C(ne,l,"TestLoadImage: loaded",!0,u,f),f.onerror=C(ne,l,"TestLoadImage: error",!1,u,f),f.onabort=C(ne,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=C(ne,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Ul(i,u){const l=new ln,f=new AbortController,A=setTimeout(()=>{f.abort(),ne(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?ne(l,"TestPingServer: ok",!0,u):ne(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),ne(l,"TestPingServer: error",!1,u)})}function ne(i,u,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function Bl(){this.g=new Il}function jl(i,u,l){const f=l||"";try{To(i,function(A,R){let D=A;d(A)&&(D=us(A)),u.push(f+R+"="+encodeURIComponent(D))})}catch(A){throw u.push(f+"type="+encodeURIComponent("_badmap")),A}}function nr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(nr,cs),nr.prototype.g=function(){return new rr(this.l,this.j)},nr.prototype.i=function(i){return function(){return i}}({});function rr(i,u){Et.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(rr,Et),n=rr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,gn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;So(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function So(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?mn(this):gn(this),this.readyState==3&&So(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,mn(this))},n.Qa=function(i){this.g&&(this.response=i,mn(this))},n.ga=function(){this.g&&mn(this)};function mn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,gn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function gn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Po(i){let u="";return rt(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function vs(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Po(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):et(i,u,l))}function ot(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ot,Et);var zl=/^https?$/i,ql=["POST","PUT"];n=ot.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ds.g(),this.v=this.o?ro(this.o):ro(ds),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){Vo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ql,u,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{No(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Vo(this,R)}};function Vo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,ko(i),sr(i)}function ko(i){i.A||(i.A=!0,Ct(i,"complete"),Ct(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Ct(this,"complete"),Ct(this,"abort"),sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sr(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Do(this):this.bb())},n.bb=function(){Do(this)};function Do(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Gt(i)!=4||i.Z()!=2)){if(i.u&&Gt(i)==4)Zi(i.Ea,0,i);else if(Ct(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=D===0){var A=String(i.D).match(Io)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!zl.test(A?A.toLowerCase():"")}l=f}if(l)Ct(i,"complete"),Ct(i,"success");else{i.m=6;try{var R=2<Gt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ko(i)}}finally{sr(i)}}}}function sr(i,u){if(i.g){No(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Ct(i,"ready");try{l.onreadystatechange=f}catch{}}}function No(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Tl(u)}};function xo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function $l(i){const u={};i=(i.g&&2<=Gt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(M(i[f]))continue;var l=I(i[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[A]||[];u[A]=R,R.push(l)}T(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _n(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function Mo(i){this.Aa=0,this.i=[],this.j=new ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,i),this.cb=_n("retryDelaySeedMs",1e4,i),this.Wa=_n("forwardChannelMaxRetries",2,i),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new go(i&&i.concurrentRequestLimit),this.Da=new Bl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){bt(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=$o(this,null,this.W),or(this)};function Es(i){if(Oo(i),i.G==3){var u=i.U++,l=Ht(i.I);if(et(l,"SID",i.K),et(l,"RID",u),et(l,"TYPE","terminate"),yn(i,l),u=new te(i,i.j,u),u.L=2,u.v=er(Ht(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ho(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Jn(u)}qo(i)}function ir(i){i.g&&(Is(i),i.g.cancel(),i.g=null)}function Oo(i){ir(i),i.u&&(c.clearTimeout(i.u),i.u=null),ar(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function or(i){if(!_o(i.h)&&!i.s){i.s=!0;var u=i.Ga;nn||Ki(),rn||(nn(),rn=!0),ts.add(u,i),i.B=0}}function Hl(i,u){return yo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=cn(y(i.Ga,i,u),zo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new te(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Fo(this,A,u),l=Ht(this.I),et(l,"RID",i),et(l,"CVER",22),this.D&&et(l,"X-HTTP-Session-Id",this.D),yn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Po(R)))+"&"+u:this.m&&vs(l,this.m,R)),ys(this.h,A),this.Ua&&et(l,"TYPE","init"),this.P?(et(l,"$req",u),et(l,"SID","null"),A.T=!0,ps(A,l,null)):ps(A,l,u),this.G=2}}else this.G==3&&(i?Lo(this,i):this.i.length==0||_o(this.h)||Lo(this))};function Lo(i,u){var l;u?l=u.l:l=i.U++;const f=Ht(i.I);et(f,"SID",i.K),et(f,"RID",l),et(f,"AID",i.T),yn(i,f),i.m&&i.o&&vs(f,i.m,i.o),l=new te(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Fo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ys(i.h,l),ps(l,f,u)}function yn(i,u){i.H&&rt(i.H,function(l,f){et(u,f,l)}),i.l&&To({},function(l,f){et(u,f,l)})}function Fo(i,u,l){l=Math.min(i.i.length,l);var f=i.l?y(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=A[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let J=!0;for(let mt=0;mt<l;mt++){let K=A[mt].g;const Tt=A[mt].map;if(K-=R,0>K)R=Math.max(0,A[mt].g-100),J=!1;else try{jl(Tt,D,"req"+K+"_")}catch{f&&f(Tt)}}if(J){f=D.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Uo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;nn||Ki(),rn||(nn(),rn=!0),ts.add(u,i),i.v=0}}function Ts(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=cn(y(i.Fa,i),zo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Bo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=cn(y(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),ir(this),Bo(this))};function Is(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Bo(i){i.g=new te(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ht(i.qa);et(u,"RID","rpc"),et(u,"SID",i.K),et(u,"AID",i.T),et(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&et(u,"TO",i.ja),et(u,"TYPE","xmlhttp"),yn(i,u),i.m&&i.o&&vs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=er(Ht(u)),l.m=null,l.P=!0,fo(l,i)}n.Za=function(){this.C!=null&&(this.C=null,ir(this),Ts(this),bt(19))};function ar(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function jo(i,u){var l=null;if(i.g==u){ar(i),Is(i),i.g=null;var f=2}else if(_s(i.h,u))l=u.D,vo(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var A=i.B;f=Qn(),Ct(f,new uo(f,l)),or(i)}else Uo(i);else if(A=u.s,A==3||A==0&&0<u.X||!(f==1&&Hl(i,u)||f==2&&Ts(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),A){case 1:Ee(i,5);break;case 4:Ee(i,10);break;case 3:Ee(i,6);break;default:Ee(i,2)}}}function zo(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function Ee(i,u){if(i.j.info("Error code "+u),u==2){var l=y(i.fb,i),f=i.Xa;const A=!f;f=new ve(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zn(f,"https"),er(f),A?Fl(f.toString(),l):Ul(f.toString(),l)}else bt(2);i.G=0,i.l&&i.l.sa(u),qo(i),Oo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function qo(i){if(i.G=0,i.ka=[],i.l){const u=Eo(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function $o(i,u,l){var f=l instanceof ve?Ht(l):new ve(l);if(f.g!="")u&&(f.g=u+"."+f.g),tr(f,f.s);else{var A=c.location;f=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var R=new ve(null);f&&Zn(R,f),u&&(R.g=u),A&&tr(R,A),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&et(f,l,u),et(f,"VER",i.la),yn(i,f),f}function Ho(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new ot(new nr({eb:l})):new ot(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Go(){}n=Go.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ur(){}ur.prototype.g=function(i,u){return new kt(i,u)};function kt(i,u){Et.call(this),this.g=new Mo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!M(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ve(this)}P(kt,Et),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Es(this.g)},kt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=us(i),i=l);u.i.push(new Sl(u.Ya++,i)),u.G==3&&or(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,Es(this.g),delete this.g,kt.aa.N.call(this)};function Wo(i){ls.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}P(Wo,ls);function Ko(){hs.call(this),this.status=1}P(Ko,hs);function Ve(i){this.g=i}P(Ve,Go),Ve.prototype.ua=function(){Ct(this.g,"a")},Ve.prototype.ta=function(i){Ct(this.g,new Wo(i))},Ve.prototype.sa=function(i){Ct(this.g,new Ko)},Ve.prototype.ra=function(){Ct(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Bu=function(){return new ur},Uu=function(){return Qn()},Fu=_e,qs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yn.NO_ERROR=0,Yn.TIMEOUT=8,Yn.HTTP_ERROR=6,mr=Yn,co.COMPLETE="complete",Lu=co,so.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",Et.prototype.listen=Et.prototype.K,vn=so,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,Ou=ot}).apply(typeof lr<"u"?lr:typeof self<"u"?self:typeof window<"u"?window:{});const ga="@firebase/firestore",_a="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Su("@firebase/firestore");function De(){return we.logLevel}function x(n,...t){if(we.logLevel<=W.DEBUG){const e=t.map(di);we.debug(`Firestore (${Ye}): ${n}`,...e)}}function Yt(n,...t){if(we.logLevel<=W.ERROR){const e=t.map(di);we.error(`Firestore (${Ye}): ${n}`,...e)}}function Be(n,...t){if(we.logLevel<=W.WARN){const e=t.map(di);we.warn(`Firestore (${Ye}): ${n}`,...e)}}function di(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ju(n,r,e)}function ju(n,t,e){let r=`FIRESTORE (${Ye}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Yt(r),new Error(r)}function Q(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||ju(t,s,r)}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Qe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ip{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(wt.UNAUTHENTICATED))}shutdown(){}}class op{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ap{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new zu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string",2055,{h:t}),new wt(t)}}class up{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cp{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new up(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ya{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$f(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ya(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ya(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hp(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function $s(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Ds(s)===Ds(o)?q(s,o):Ds(s)?1:-1}return q(n.length,t.length)}const dp=55296,fp=57343;function Ds(n){const t=n.charCodeAt(0);return t>=dp&&t<=fp}function je(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="__name__";class Ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ut.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=Ut.isNumericId(t),s=Ut.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):$s(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return oe.fromString(t.substring(4,t.length-2))}}class Z extends Ut{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const pp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Ut{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return pp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===va}static keyField(){return new _t([va])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Z.fromString(t))}static fromName(t){return new O(Z.fromString(t).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Z(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mp(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ea(n){if(!O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ta(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $u(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Or(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Xt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Or(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Fn(n,t){if(!$u(n))throw new N(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(b.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=-62135596800,Aa=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Aa);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ia)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Aa}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Fn(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ia;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:lt("string",nt._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new nt(0,0))}static max(){return new B(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=-1;function gp(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new ue(s,O.empty(),t)}function _p(n){return new ue(n.readTime,n.key,kn)}class ue{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ue(B.min(),O.empty(),kn)}static max(){return new ue(B.max(),O.empty(),kn)}}function yp(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ep{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==vp)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++c,c===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Tp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Je(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Lr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=-1;function Fr(n){return n==null}function Rr(n){return n===0&&1/n==-1/0}function Ip(n){return typeof n=="number"&&Number.isInteger(n)&&!Rr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="";function Ap(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=wa(t)),t=wp(n.get(e),t);return wa(t)}function wp(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Hu:e+="";break;default:e+=o}}return e}function wa(n){return n+Hu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function pe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Gu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hr(this.root,t,this.comparator,!1)}getReverseIterator(){return new hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hr(this.root,t,this.comparator,!0)}}class hr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new gt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(t){return new Ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class Ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Nt([])}unionWith(t){let e=new dt(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Nt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wu("Invalid base64 string: "+o):o}}(t);return new yt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Rp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ce(n){if(Q(!!n,39018),typeof n=="string"){let t=0;const e=Rp.exec(n);if(Q(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function le(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="server_timestamp",Qu="__type__",Yu="__previous_value__",Xu="__local_write_time__";function mi(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Qu])==null?void 0:r.stringValue)===Ku}function Ur(n){const t=n.mapValue.fields[Yu];return mi(t)?Ur(t):t}function Dn(n){const t=ce(n.mapValue.fields[Xu].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,e,r,s,o,a,c,h,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Cr="(default)";class Nn{constructor(t,e){this.projectId=t,this.database=e||Cr}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database===Cr}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="__type__",bp="__max__",dr={mapValue:{}},Zu="__vector__",br="value";function he(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mi(n)?4:Pp(n)?9007199254740991:Sp(n)?10:11:L(28295,{value:n})}function $t(n,t){if(n===t)return!0;const e=he(n);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Dn(n).isEqual(Dn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ce(s.timestampValue),c=ce(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return le(s.bytesValue).isEqual(le(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return at(s.geoPointValue.latitude)===at(o.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return at(s.integerValue)===at(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=at(s.doubleValue),c=at(o.doubleValue);return a===c?Rr(a)===Rr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return je(n.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ra(a)!==Ra(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!$t(a[h],c[h])))return!1;return!0}(n,t);default:return L(52216,{left:n})}}function xn(n,t){return(n.values||[]).find(e=>$t(e,t))!==void 0}function ze(n,t){if(n===t)return 0;const e=he(n),r=he(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=at(o.integerValue||o.doubleValue),h=at(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ba(n.timestampValue,t.timestampValue);case 4:return ba(Dn(n),Dn(t));case 5:return $s(n.stringValue,t.stringValue);case 6:return function(o,a){const c=le(o),h=le(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=q(c[d],h[d]);if(p!==0)return p}return q(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=q(at(o.latitude),at(a.latitude));return c!==0?c:q(at(o.longitude),at(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Sa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var y,C,P,k;const c=o.fields||{},h=a.fields||{},d=(y=c[br])==null?void 0:y.arrayValue,p=(C=h[br])==null?void 0:C.arrayValue,v=q(((P=d==null?void 0:d.values)==null?void 0:P.length)||0,((k=p==null?void 0:p.values)==null?void 0:k.length)||0);return v!==0?v:Sa(d,p)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===dr.mapValue&&a===dr.mapValue)return 0;if(o===dr.mapValue)return 1;if(a===dr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const y=$s(h[v],p[v]);if(y!==0)return y;const C=ze(c[h[v]],d[p[v]]);if(C!==0)return C}return q(h.length,p.length)}(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function ba(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ce(n),r=ce(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function Sa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=ze(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function qe(n){return Hs(n)}function Hs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ce(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return le(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Hs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Hs(e.fields[a])}`;return s+"}"}(n.mapValue):L(61005,{value:n})}function gr(n){switch(he(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ur(n);return t?16+gr(t):16;case 5:return 2*n.stringValue.length;case 6:return le(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+gr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return pe(r.fields,(o,a)=>{s+=o.length+gr(a)}),s}(n.mapValue);default:throw L(13486,{value:n})}}function Pa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Gs(n){return!!n&&"integerValue"in n}function gi(n){return!!n&&"arrayValue"in n}function Va(n){return!!n&&"nullValue"in n}function ka(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _r(n){return!!n&&"mapValue"in n}function Sp(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ju])==null?void 0:r.stringValue)===Zu}function wn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return pe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=wn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wn(n.arrayValue.values[e]);return t}return{...n}}function Pp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!_r(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wn(e)}setAll(t){let e=_t.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=wn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());_r(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];_r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){pe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Vt(wn(this.value))}}function tc(n){const t=[];return pe(n.fields,(e,r)=>{const s=new _t([e]);if(_r(r)){const o=tc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Nt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Rt(t,0,B.min(),B.min(),B.min(),Vt.empty(),0)}static newFoundDocument(t,e,r,s){return new Rt(t,1,e,B.min(),r,s,0)}static newNoDocument(t,e){return new Rt(t,2,e,B.min(),B.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,B.min(),B.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e){this.position=t,this.inclusive=e}}function Da(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Na(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!$t(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{}class ct extends ec{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Dp(t,e,r):e==="array-contains"?new Mp(t,r):e==="in"?new Op(t,r):e==="not-in"?new Lp(t,r):e==="array-contains-any"?new Fp(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Np(t,r):new xp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ze(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends ec{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ft(t,e)}matches(t){return nc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nc(n){return n.op==="and"}function rc(n){return kp(n)&&nc(n)}function kp(n){for(const t of n.filters)if(t instanceof Ft)return!1;return!0}function Ws(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+qe(n.value);if(rc(n))return n.filters.map(t=>Ws(t)).join(",");{const t=n.filters.map(e=>Ws(e)).join(",");return`${n.op}(${t})`}}function sc(n,t){return n instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)}(n,t):n instanceof Ft?function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&sc(a,s.filters[c]),!0):!1}(n,t):void L(19439)}function ic(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${qe(e.value)}`}(n):n instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(ic).join(" ,")+"}"}(n):"Filter"}class Dp extends ct{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Np extends ct{constructor(t,e){super(t,"in",e),this.keys=oc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xp extends ct{constructor(t,e){super(t,"not-in",e),this.keys=oc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oc(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Mp extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gi(e)&&xn(e.arrayValue,this.value)}}class Op extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xn(this.value.arrayValue,e)}}class Lp extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!xn(this.value.arrayValue,e)}}class Fp extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>xn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function xa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Up(n,t,e,r,s,o,a)}function _i(n){const t=j(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ws(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Fr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>qe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>qe(r)).join(",")),t.Te=e}return t.Te}function yi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!sc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Na(n.startAt,t.startAt)&&Na(n.endAt,t.endAt)}function Ks(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Bp(n,t,e,r,s,o,a,c){return new Un(n,t,e,r,s,o,a,c)}function vi(n){return new Un(n)}function Ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ac(n){return n.collectionGroup!==null}function Rn(n){const t=j(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new dt(_t.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Pr(o,r))}),e.has(_t.keyField().canonicalString())||t.Ie.push(new Pr(_t.keyField(),r))}return t.Ie}function Bt(n){const t=j(n);return t.Ee||(t.Ee=jp(t,Rn(n))),t.Ee}function jp(n,t){if(n.limitType==="F")return xa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Pr(s.field,o)});const e=n.endAt?new Sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Sr(n.startAt.position,n.startAt.inclusive):null;return xa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qs(n,t){const e=n.filters.concat([t]);return new Un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ys(n,t,e){return new Un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Br(n,t){return yi(Bt(n),Bt(t))&&n.limitType===t.limitType}function uc(n){return`${_i(Bt(n))}|lt:${n.limitType}`}function Ne(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ic(s)).join(", ")}]`),Fr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>qe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>qe(s)).join(",")),`Target(${r})`}(Bt(n))}; limitType=${n.limitType})`}function jr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Rn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=Da(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Rn(r),s)||r.endAt&&!function(a,c,h){const d=Da(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Rn(r),s))}(n,t)}function zp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cc(n){return(t,e)=>{let r=!1;for(const s of Rn(n)){const o=qp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function qp(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?ze(h,d):L(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Gu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new it(O.comparator);function Jt(){return $p}const lc=new it(O.comparator);function En(...n){let t=lc;for(const e of n)t=t.insert(e.key,e);return t}function hc(n){let t=lc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ie(){return Cn()}function dc(){return Cn()}function Cn(){return new Ce(n=>n.toString(),(n,t)=>n.isEqual(t))}const Hp=new it(O.comparator),Gp=new dt(O.comparator);function H(...n){let t=Gp;for(const e of n)t=t.add(e);return t}const Wp=new dt(q);function Kp(){return Wp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rr(t)?"-0":t}}function fc(n){return{integerValue:""+n}}function Qp(n,t){return Ip(t)?fc(t):Ei(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this._=void 0}}function Yp(n,t,e){return n instanceof Mn?function(s,o){const a={fields:{[Qu]:{stringValue:Ku},[Xu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&mi(o)&&(o=Ur(o)),o&&(a.fields[Yu]=o),{mapValue:a}}(e,t):n instanceof On?mc(n,t):n instanceof Ln?gc(n,t):function(s,o){const a=pc(s,o),c=Oa(a)+Oa(s.Ae);return Gs(a)&&Gs(s.Ae)?fc(c):Ei(s.serializer,c)}(n,t)}function Xp(n,t,e){return n instanceof On?mc(n,t):n instanceof Ln?gc(n,t):e}function pc(n,t){return n instanceof Vr?function(r){return Gs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Mn extends zr{}class On extends zr{constructor(t){super(),this.elements=t}}function mc(n,t){const e=_c(t);for(const r of n.elements)e.some(s=>$t(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ln extends zr{constructor(t){super(),this.elements=t}}function gc(n,t){let e=_c(t);for(const r of n.elements)e=e.filter(s=>!$t(s,r));return{arrayValue:{values:e}}}class Vr extends zr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Oa(n){return at(n.integerValue||n.doubleValue)}function _c(n){return gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e){this.field=t,this.transform=e}}function Zp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof On&&s instanceof On||r instanceof Ln&&s instanceof Ln?je(r.elements,s.elements,$t):r instanceof Vr&&s instanceof Vr?$t(r.Ae,s.Ae):r instanceof Mn&&s instanceof Mn}(n.transform,t.transform)}class tm{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class qr{}function yc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ti(n.key,Lt.none()):new Bn(n.key,n.data,Lt.none());{const e=n.data,r=Vt.empty();let s=new dt(_t.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new me(n.key,r,new Nt(s.toArray()),Lt.none())}}function em(n,t,e){n instanceof Bn?function(s,o,a){const c=s.value.clone(),h=Fa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof me?function(s,o,a){if(!yr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Fa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(vc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function bn(n,t,e,r){return n instanceof Bn?function(o,a,c,h){if(!yr(o.precondition,a))return c;const d=o.value.clone(),p=Ua(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof me?function(o,a,c,h){if(!yr(o.precondition,a))return c;const d=Ua(o.fieldTransforms,h,a),p=a.data;return p.setAll(vc(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,c){return yr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function nm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=pc(r.transform,s||null);o!=null&&(e===null&&(e=Vt.empty()),e.set(r.field,o))}return e||null}function La(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&je(r,s,(o,a)=>Zp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Bn extends qr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class me extends qr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Fa(n,t,e){const r=new Map;Q(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Xp(a,c,e[s]))}return r}function Ua(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Yp(o,a,t))}return r}class Ti extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rm extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&em(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=bn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=bn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=dc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=yc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(e,r)=>La(e,r))&&je(this.baseMutations,t.baseMutations,(e,r)=>La(e,r))}}class Ii{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Hp}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ii(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,G;function am(n){switch(n){case b.OK:return L(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Ec(n){if(n===void 0)return Yt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ut.OK:return b.OK;case ut.CANCELLED:return b.CANCELLED;case ut.UNKNOWN:return b.UNKNOWN;case ut.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ut.INTERNAL:return b.INTERNAL;case ut.UNAVAILABLE:return b.UNAVAILABLE;case ut.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ut.NOT_FOUND:return b.NOT_FOUND;case ut.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ut.ABORTED:return b.ABORTED;case ut.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ut.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:n})}}(G=ut||(ut={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new oe([4294967295,4294967295],0);function Ba(n){const t=um().encode(n),e=new Mu;return e.update(t),new Uint8Array(e.digest())}function ja(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new oe([e,r],0),new oe([s,o],0)]}class Ai{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Tn(`Invalid padding: ${e}`);if(r<0)throw new Tn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Tn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Tn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=oe.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(oe.fromNumber(r)));return s.compare(cm)===1&&(s=new oe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Ba(t),[r,s]=ja(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ai(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=Ba(t),[r,s]=ja(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,jn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new $r(B.min(),s,new it(q),Jt(),H())}}class jn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jn(r,e,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Tc{constructor(t,e){this.targetId=t,this.Ce=e}}class Ic{constructor(t,e,r=yt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class za{constructor(){this.ve=0,this.Fe=qa(),this.Me=yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=H(),e=H(),r=H();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}}),new jn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=qa()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class lm{constructor(t){this.Ge=t,this.ze=new Map,this.je=Jt(),this.Je=fr(),this.He=fr(),this.Ye=new it(q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ks(o))if(r===0){const a=new O(o.path);this.et(e,a,Rt.newNoDocument(a,B.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),h=c?this.ct(c,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=le(r).toUint8Array()}catch(h){if(h instanceof Wu)return Be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ai(a,s,o)}catch(h){return Be(h instanceof Tn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const c=this.ot(a);if(c){if(o.current&&Ks(c.target)){const h=new O(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Rt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let r=H();this.He.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new $r(t,e,this.Ye,this.je,r);return this.je=Jt(),this.Je=fr(),this.He=fr(),this.Ye=new it(q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new za,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new dt(q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new dt(q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new za),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function fr(){return new it(O.comparator)}function qa(){return new it(O.comparator)}const hm={asc:"ASCENDING",desc:"DESCENDING"},dm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fm={and:"AND",or:"OR"};class pm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xs(n,t){return n.useProto3Json||Fr(t)?t:{value:t}}function kr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ac(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function mm(n,t){return kr(n,t.toTimestamp())}function jt(n){return Q(!!n,49232),B.fromTimestamp(function(e){const r=ce(e);return new nt(r.seconds,r.nanos)}(n))}function wi(n,t){return Js(n,t).canonicalString()}function Js(n,t){const e=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wc(n){const t=Z.fromString(n);return Q(Pc(t),10190,{key:t.toString()}),t}function Zs(n,t){return wi(n.databaseId,t.path)}function Ns(n,t){const e=wc(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Cc(e))}function Rc(n,t){return wi(n.databaseId,t)}function gm(n){const t=wc(n);return t.length===4?Z.emptyPath():Cc(t)}function ti(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cc(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $a(n,t,e){return{name:Zs(n,t),fields:e.value.mapValue.fields}}function _m(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string",58123),yt.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),yt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const p=d.code===void 0?b.UNKNOWN:Ec(d.code);return new N(p,d.message||"")}(a);e=new Ic(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ns(n,r.document.name),o=jt(r.document.updateTime),a=r.document.createTime?jt(r.document.createTime):B.min(),c=new Vt({mapValue:{fields:r.document.fields}}),h=Rt.newFoundDocument(s,o,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];e=new vr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ns(n,r.document),o=r.readTime?jt(r.readTime):B.min(),a=Rt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new vr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ns(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new om(s,o),c=r.targetId;e=new Tc(c,a)}}return e}function ym(n,t){let e;if(t instanceof Bn)e={update:$a(n,t.key,t.value)};else if(t instanceof Ti)e={delete:Zs(n,t.key)};else if(t instanceof me)e={update:$a(n,t.key,t.data),updateMask:bm(t.fieldMask)};else{if(!(t instanceof rm))return L(16599,{Vt:t.type});e={verify:Zs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Mn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof On)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ln)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw L(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:mm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)}(n,t.precondition)),e}function vm(n,t){return n&&n.length>0?(Q(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?jt(s.updateTime):jt(o);return a.isEqual(B.min())&&(a=jt(o)),new tm(a,s.transformResults||[])}(e,t))):[]}function Em(n,t){return{documents:[Rc(n,t.path)]}}function Tm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Rc(n,s);const o=function(d){if(d.length!==0)return Sc(Ft.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:xe(y.field),direction:wm(y.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Xs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function Im(n){let t=gm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const y=bc(v);return y instanceof Ft&&rc(y)?y.getFilters():[y]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(y=>function(P){return new Pr(Me(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(e.orderBy));let c=null;e.limit&&(c=function(v){let y;return y=typeof v=="object"?v.value:v,Fr(y)?null:y}(e.limit));let h=null;e.startAt&&(h=function(v){const y=!!v.before,C=v.values||[];return new Sr(C,y)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const y=!v.before,C=v.values||[];return new Sr(C,y)}(e.endAt)),Bp(t,s,a,o,c,"F",h,d)}function Am(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Me(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Me(e.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Me(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Me(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(n):n.fieldFilter!==void 0?function(e){return ct.create(Me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(r=>bc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(e.compositeFilter.op))}(n):L(30097,{filter:n})}function wm(n){return hm[n]}function Rm(n){return dm[n]}function Cm(n){return fm[n]}function xe(n){return{fieldPath:n.canonicalString()}}function Me(n){return _t.fromServerFormat(n.fieldPath)}function Sc(n){return n instanceof ct?function(e){if(e.op==="=="){if(ka(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NAN"}};if(Va(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ka(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NOT_NAN"}};if(Va(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xe(e.field),op:Rm(e.op),value:e.value}}}(n):n instanceof Ft?function(e){const r=e.getFilters().map(s=>Sc(s));return r.length===1?r[0]:{compositeFilter:{op:Cm(e.op),filters:r}}}(n):L(54877,{filter:n})}function bm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e,r,s,o=B.min(),a=B.min(),c=yt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.yt=t}}function Pm(n){const t=Im({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ys(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.Cn=new km}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ue.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ue.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class km{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new dt(Z.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new dt(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vc=41943040;class Pt{static withCacheSize(t){return new Pt(t,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Vc,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new $e(0)}static cr(){return new $e(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="LruGarbageCollector",Dm=1048576;function Wa([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class Nm{constructor(t){this.Ir=t,this.buffer=new dt(Wa),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Wa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class xm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){x(Ga,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Je(e)?x(Ga,"Ignoring IndexedDB error during garbage collection: ",e):await Xe(e)}await this.Vr(3e5)})}}class Mm{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Lr.ce);const r=new Nm(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Ha)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ha):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,c,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,c=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(d=Date.now(),De()<=W.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function Om(n,t){return new Mm(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.changes=new Ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&bn(r.mutation,s,Nt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){const s=Ie();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=En();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ie();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Jt();const a=Cn(),c=function(){return Cn()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof me)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),bn(p.mutation,d,p.mutation.getFieldMask(),nt.now())):a.set(d.key,Nt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>c.set(d,new Fm(p,a.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const r=Cn();let s=new it((a,c)=>a-c),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Nt.empty();p=c.applyToLocalView(d,p),r.set(h,p);const v=(s.get(c.batchId)||H()).add(h);s=s.insert(c.batchId,v)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,v=dc();p.forEach(y=>{if(!o.has(y)){const C=yc(e.get(y),r.get(y));C!==null&&v.set(y,C),o=o.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ac(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(Ie());let c=kn,h=o;return a.next(d=>S.forEach(d,(p,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(y=>{h=h.insert(p,y)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,H())).next(p=>({batchId:c,changes:hc(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=En();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=En();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const d=function(v,y){return new Un(y,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((v,y)=>{a=a.insert(v,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Rt.newInvalidDocument(p)))});let c=En();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&bn(p.mutation,d,Nt.empty(),nt.now()),jr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:jt(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:Pm(s.bundledQuery),readTime:jt(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.overlays=new it(O.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ie();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=Ie(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new it((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Ie(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Ie(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return S.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new im(e,r));let o=this.qr.get(e);o===void 0&&(o=H(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.Qr=new dt(ft.$r),this.Ur=new dt(ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new ft(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new O(new Z([])),r=new ft(e,t),s=new ft(e,t+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new Z([])),r=new ft(e,t),s=new ft(e,t+1);let o=H();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ft(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new dt(ft.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sm(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ft(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?pi:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new dt(q);return e.forEach(s=>{const o=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],c=>{r=r.add(c.Yr)})}),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ft(new O(o),0);let c=new dt(q);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Yr)),!0)},a),S.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,s=>{const o=new ft(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new ft(e,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t){this.ri=t,this.docs=function(){return new it(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=Jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Rt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Jt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||yp(_p(p),r)<=0||(s.has(p.key)||jr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ii(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Hm(this)}getSize(t){return S.resolve(this.size)}}class Hm extends Lm{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.persistence=t,this.si=new Ce(e=>_i(e),yi),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new Ri,this.targetCount=0,this.ai=$e.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new $e(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.ui={},this.overlays={},this.ci=new Lr(0),this.li=!1,this.li=!0,this.hi=new zm,this.referenceDelegate=t(this),this.Pi=new Gm(this),this.indexManager=new Vm,this.remoteDocumentCache=function(s){return new $m(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Sm(e),this.Ii=new Bm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new qm(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new Wm(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return S.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class Wm extends Ep{constructor(t){super(),this.currentSequenceNumber=t}}class Ci{constructor(t){this.persistence=t,this.Ri=new Ri,this.Vi=null}static mi(t){return new Ci(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,r=>{const s=O.fromPath(r);return this.gi(t,s).next(o=>{o||e.removeEntry(s,B.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Dr{constructor(t,e){this.persistence=t,this.pi=new Ce(r=>Ap(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Om(this,e)}static mi(t,e){return new Dr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return S.forEach(this.pi,(r,s)=>this.br(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(c=>{c||(r++,o.removeEntry(a,B.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=gr(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=H(),s=H();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new bi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Bd()?8:Tp(Fd())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Km;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>o.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?(De()<=W.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(De()<=W.DEBUG&&x("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(De()<=W.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):S.resolve())}ys(t,e){if(Ma(e))return S.resolve(null);let r=Bt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ys(e,null,"F"),r=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=H(...o);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.Ds(e,c);return this.Cs(e,d,a,h.readTime)?this.ys(t,Ys(e,null,"F")):this.vs(t,d,e,h)}))})))}ws(t,e,r,s){return Ma(e)||s.isEqual(B.min())?S.resolve(null):this.ps.getDocuments(t,r).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?S.resolve(null):(De()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ne(e)),this.vs(t,a,e,gp(s,kn)).next(c=>c))})}Ds(t,e){let r=new dt(cc(t));return e.forEach((s,o)=>{jr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return De()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.ps.getDocumentsMatchingQuery(t,e,ue.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="LocalStore",Ym=3e8;class Xm{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new it(q),this.xs=new Ce(o=>_i(o),yi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Um(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Jm(n,t,e,r){return new Xm(n,t,e,r)}async function Dc(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=H();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function Zm(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const v=d.batch,y=v.keys();let C=S.resolve();return y.forEach(P=>{C=C.next(()=>p.getEntry(h,P)).next(k=>{const V=d.docVersions.get(P);Q(V!==null,48541),k.version.compareTo(V)<0&&(v.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=H();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Nc(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function tg(n,t){const e=j(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach((p,v)=>{const y=s.get(v);if(!y)return;c.push(e.Pi.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Pi.addMatchingKeys(o,p.addedDocuments,v)));let C=y.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?C=C.withResumeToken(yt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),s=s.insert(v,C),function(k,V,F){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ym?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(y,C,p)&&c.push(e.Pi.updateTargetData(o,C))});let h=Jt(),d=H();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(eg(o,a,t.documentUpdates).next(p=>{h=p.ks,d=p.qs})),!r.isEqual(B.min())){const p=e.Pi.getLastRemoteSnapshotVersion(o).next(v=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ms=s,o))}function eg(n,t,e){let r=H(),s=H();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Jt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(B.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x(Si,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:s}})}function ng(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=pi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function rg(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new re(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function ei(n,t,e){const r=j(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Je(a))throw a;x(Si,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Ka(n,t,e){const r=j(n);let s=B.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=j(h),y=v.xs.get(p);return y!==void 0?S.resolve(v.Ms.get(y)):v.Pi.getTargetData(d,p)}(r,a,Bt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:B.min(),e?o:H())).next(c=>(sg(r,zp(t),c),{documents:c,Qs:o})))}function sg(n,t,e){let r=n.Os.get(t)||B.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(t,r)}class Qa{constructor(){this.activeTargetIds=Kp()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ig{constructor(){this.Mo=new Qa,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Qa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="ConnectivityMonitor";class Xa{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Ya,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){x(Ya,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr=null;function ni(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="RestConnection",ag={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ug{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Cr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=ni(),c=this.zo(t,e.toUriEncodedString());x(xs,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(c),p=li(d);return this.Jo(t,c,h,r,p).then(v=>(x(xs,`Received RPC '${t}' ${a}: `,v),v),v=>{throw Be(xs,`RPC '${t}' ${a} failed with error: `,v,"url: ",c,"request:",r),v})}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ye}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const r=ag[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class lg extends ug{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=ni();return new Promise((c,h)=>{const d=new Ou;d.setWithCredentials(!0),d.listenOnce(Lu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case mr.NO_ERROR:const v=d.getResponseJson();x(At,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(v)),c(v);break;case mr.TIMEOUT:x(At,`RPC '${t}' ${a} timed out`),h(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const y=d.getStatus();if(x(At,`RPC '${t}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const k=function(F){const M=F.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(M)>=0?M:b.UNKNOWN}(P.status);h(new N(k,P.message))}else h(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{x(At,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(s);x(At,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)})}T_(t,e,r){const s=ni(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Bu(),c=Uu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");x(At,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);this.I_(v);let y=!1,C=!1;const P=new cg({Yo:V=>{C?x(At,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(y||(x(At,`Opening RPC '${t}' stream ${s} transport.`),v.open(),y=!0),x(At,`RPC '${t}' stream ${s} sending:`,V),v.send(V))},Zo:()=>v.close()}),k=(V,F,M)=>{V.listen(F,z=>{try{M(z)}catch(X){setTimeout(()=>{throw X},0)}})};return k(v,vn.EventType.OPEN,()=>{C||(x(At,`RPC '${t}' stream ${s} transport opened.`),P.o_())}),k(v,vn.EventType.CLOSE,()=>{C||(C=!0,x(At,`RPC '${t}' stream ${s} transport closed`),P.a_(),this.E_(v))}),k(v,vn.EventType.ERROR,V=>{C||(C=!0,Be(At,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.a_(new N(b.UNAVAILABLE,"The operation could not be completed")))}),k(v,vn.EventType.MESSAGE,V=>{var F;if(!C){const M=V.data[0];Q(!!M,16349);const z=M,X=(z==null?void 0:z.error)||((F=z[0])==null?void 0:F.error);if(X){x(At,`RPC '${t}' stream ${s} received error:`,X);const pt=X.status;let rt=function(_){const E=ut[_];if(E!==void 0)return Ec(E)}(pt),T=X.message;rt===void 0&&(rt=b.INTERNAL,T="Unknown error status: "+pt+" with message "+X.message),C=!0,P.a_(new N(rt,T)),v.close()}else x(At,`RPC '${t}' stream ${s} received:`,M),P.u_(M)}}),k(c,Fu.STAT_EVENT,V=>{V.stat===qs.PROXY?x(At,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===qs.NOPROXY&&x(At,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Ms(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){return new pm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="PersistentStream";class Mc{constructor(t,e,r,s,o,a,c,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Yt(e.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return x(Ja,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(x(Ja,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hg extends Mc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=_m(this.serializer,t),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?jt(a.readTime):B.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=ti(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ks(h)?{documents:Em(o,h)}:{query:Tm(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ac(o,a.resumeToken);const d=Xs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=kr(o,a.snapshotVersion.toTimestamp());const d=Xs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Am(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=ti(this.serializer),e.removeTarget=t,this.q_(e)}}class dg extends Mc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=vm(t.writeResults,t.commitTime),r=jt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=ti(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ym(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{}class pg extends fg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,Js(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,Js(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class mg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yt(e),this.aa=!1):x("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="RemoteStore";class gg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{be(this)&&(x(Re,"Restarting streams for network reachability change."),await async function(h){const d=j(h);d.Ea.add(4),await zn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Gr(d)}(this))})}),this.Ra=new mg(r,s)}}async function Gr(n){if(be(n))for(const t of n.da)await t(!0)}async function zn(n){for(const t of n.da)await t(!1)}function Oc(n,t){const e=j(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Di(e)?ki(e):Ze(e).O_()&&Vi(e,t))}function Pi(n,t){const e=j(n),r=Ze(e);e.Ia.delete(t),r.O_()&&Lc(e,t),e.Ia.size===0&&(r.O_()?r.L_():be(e)&&e.Ra.set("Unknown"))}function Vi(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ze(n).Y_(t)}function Lc(n,t){n.Va.Ue(t),Ze(n).Z_(t)}function ki(n){n.Va=new lm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ze(n).start(),n.Ra.ua()}function Di(n){return be(n)&&!Ze(n).x_()&&n.Ia.size>0}function be(n){return j(n).Ea.size===0}function Fc(n){n.Va=void 0}async function _g(n){n.Ra.set("Online")}async function yg(n){n.Ia.forEach((t,e)=>{Vi(n,t)})}async function vg(n,t){Fc(n),Di(n)?(n.Ra.ha(t),ki(n)):n.Ra.set("Unknown")}async function Eg(n,t,e){if(n.Ra.set("Online"),t instanceof Ic&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,t)}catch(r){x(Re,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Nr(n,r)}else if(t instanceof vr?n.Va.Ze(t):t instanceof Tc?n.Va.st(t):n.Va.tt(t),!e.isEqual(B.min()))try{const r=await Nc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Va.Tt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(yt.EMPTY_BYTE_STRING,p.snapshotVersion)),Lc(o,h);const v=new re(p.target,h,d,p.sequenceNumber);Vi(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){x(Re,"Failed to raise snapshot:",r),await Nr(n,r)}}async function Nr(n,t,e){if(!Je(t))throw t;n.Ea.add(1),await zn(n),n.Ra.set("Offline"),e||(e=()=>Nc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Re,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Gr(n)})}function Uc(n,t){return t().catch(e=>Nr(n,e,t))}async function Wr(n){const t=j(n),e=de(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:pi;for(;Tg(t);)try{const s=await ng(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Ig(t,s)}catch(s){await Nr(t,s)}Bc(t)&&jc(t)}function Tg(n){return be(n)&&n.Ta.length<10}function Ig(n,t){n.Ta.push(t);const e=de(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Bc(n){return be(n)&&!de(n).x_()&&n.Ta.length>0}function jc(n){de(n).start()}async function Ag(n){de(n).ra()}async function wg(n){const t=de(n);for(const e of n.Ta)t.ea(e.mutations)}async function Rg(n,t,e){const r=n.Ta.shift(),s=Ii.from(r,t,e);await Uc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Wr(n)}async function Cg(n,t){t&&de(n).X_&&await async function(r,s){if(function(a){return am(a)&&a!==b.ABORTED}(s.code)){const o=r.Ta.shift();de(r).B_(),await Uc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Wr(r)}}(n,t),Bc(n)&&jc(n)}async function Za(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),x(Re,"RemoteStore received new credentials");const r=be(e);e.Ea.add(3),await zn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Gr(e)}async function bg(n,t){const e=j(n);t?(e.Ea.delete(2),await Gr(e)):t||(e.Ea.add(2),await zn(e),e.Ra.set("Unknown"))}function Ze(n){return n.ma||(n.ma=function(e,r,s){const o=j(e);return o.sa(),new hg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:_g.bind(null,n),t_:yg.bind(null,n),r_:vg.bind(null,n),H_:Eg.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),Di(n)?ki(n):n.Ra.set("Unknown")):(await n.ma.stop(),Fc(n))})),n.ma}function de(n){return n.fa||(n.fa=function(e,r,s){const o=j(e);return o.sa(),new dg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ag.bind(null,n),r_:Cg.bind(null,n),ta:wg.bind(null,n),na:Rg.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await Wr(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Re,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Ni(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xi(n,t){if(Yt("AsyncQueue",`${t}: ${n}`),Je(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{static emptySet(t){return new Le(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=En(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.ga=new it(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class He{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new He(t,e,Le.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Pg{constructor(){this.queries=eu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=j(e),o=s.queries;s.queries=eu(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function eu(){return new Ce(n=>uc(n),Br)}async function zc(n,t){const e=j(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new Sg,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=xi(a,`Initialization of query '${Ne(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Mi(e)}async function qc(n,t){const e=j(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Vg(n,t){const e=j(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Mi(e)}function kg(n,t,e){const r=j(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function Mi(n){n.Ca.forEach(t=>{t.next()})}var ri,nu;(nu=ri||(ri={})).Ma="default",nu.Cache="cache";class $c{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new He(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=He.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ri.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.key=t}}class Gc{constructor(t){this.key=t}}class Dg{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=H(),this.mutatedKeys=H(),this.eu=cc(t),this.tu=new Le(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new tu,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const y=s.get(p),C=jr(this.query,v)?v:null,P=!!y&&this.mutatedKeys.has(y.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;y&&C?y.data.isEqual(C.data)?P!==k&&(r.track({type:3,doc:C}),V=!0):this.su(y,C)||(r.track({type:2,doc:C}),V=!0,(h&&this.eu(C,h)>0||d&&this.eu(C,d)<0)&&(c=!0)):!y&&C?(r.track({type:0,doc:C}),V=!0):y&&!C&&(r.track({type:1,doc:y}),V=!0,(h||d)&&(c=!0)),V&&(C?(a=a.add(C),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((p,v)=>function(C,P){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:V})}};return k(C)-k(P)}(p.type,v.type)||this.eu(p.doc,v.doc)),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new He(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new tu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=H(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new Gc(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Hc(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=H();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return He.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Oi="SyncEngine";class Ng{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class xg{constructor(t){this.key=t,this.hu=!1}}class Mg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ce(c=>uc(c),Br),this.Iu=new Map,this.Eu=new Set,this.du=new it(O.comparator),this.Au=new Map,this.Ru=new Ri,this.Vu={},this.mu=new Map,this.fu=$e.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Og(n,t,e=!0){const r=Jc(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Wc(r,t,e,!0),s}async function Lg(n,t){const e=Jc(n);await Wc(e,t,!0,!1)}async function Wc(n,t,e,r){const s=await rg(n.localStore,Bt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Fg(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Oc(n.remoteStore,s),c}async function Fg(n,t,e,r,s){n.pu=(v,y,C)=>async function(k,V,F,M){let z=V.view.ru(F);z.Cs&&(z=await Ka(k.localStore,V.query,!1).then(({documents:T})=>V.view.ru(T,z)));const X=M&&M.targetChanges.get(V.targetId),pt=M&&M.targetMismatches.get(V.targetId)!=null,rt=V.view.applyChanges(z,k.isPrimaryClient,X,pt);return su(k,V.targetId,rt.au),rt.snapshot}(n,v,y,C);const o=await Ka(n.localStore,t,!0),a=new Dg(t,o.Qs),c=a.ru(o.documents),h=jn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);su(n,e,d.au);const p=new Ng(t,e,a);return n.Tu.set(t,p),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Ug(n,t,e){const r=j(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!Br(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ei(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Pi(r.remoteStore,s.targetId),si(r,s.targetId)}).catch(Xe)):(si(r,s.targetId),await ei(r.localStore,s.targetId,!0))}async function Bg(n,t){const e=j(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Pi(e.remoteStore,r.targetId))}async function jg(n,t,e){const r=Kg(n);try{const s=await function(a,c){const h=j(a),d=nt.now(),p=c.reduce((C,P)=>C.add(P.key),H());let v,y;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=Jt(),k=H();return h.Ns.getEntries(C,p).next(V=>{P=V,P.forEach((F,M)=>{M.isValidDocument()||(k=k.add(F))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,P)).next(V=>{v=V;const F=[];for(const M of c){const z=nm(M,v.get(M.key).overlayedDocument);z!=null&&F.push(new me(M.key,z,tc(z.value.mapValue),Lt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,F,c)}).next(V=>{y=V;const F=V.applyToLocalDocumentSet(v,k);return h.documentOverlayCache.saveOverlays(C,V.batchId,F)})}).then(()=>({batchId:y.batchId,changes:hc(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new it(q)),d=d.insert(c,h),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,e),await qn(r,s.changes),await Wr(r.remoteStore)}catch(s){const o=xi(s,"Failed to persist write");e.reject(o)}}async function Kc(n,t){const e=j(n);try{const r=await tg(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Q(a.hu,14607):s.removedDocuments.size>0&&(Q(a.hu,42227),a.hu=!1))}),await qn(e,r,t)}catch(r){await Xe(r)}}function ru(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=j(a);h.onlineState=c;let d=!1;h.queries.forEach((p,v)=>{for(const y of v.Sa)y.va(c)&&(d=!0)}),d&&Mi(h)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zg(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new it(O.comparator);a=a.insert(o,Rt.newNoDocument(o,B.min()));const c=H().add(o),h=new $r(B.min(),new Map,new it(q),a,c);await Kc(r,h),r.du=r.du.remove(o),r.Au.delete(t),Li(r)}else await ei(r.localStore,t,!1).then(()=>si(r,t,e)).catch(Xe)}async function qg(n,t){const e=j(n),r=t.batch.batchId;try{const s=await Zm(e.localStore,t);Yc(e,r,null),Qc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await qn(e,s)}catch(s){await Xe(s)}}async function $g(n,t,e){const r=j(n);try{const s=await function(a,c){const h=j(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(v=>(Q(v!==null,37113),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Yc(r,t,e),Qc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await qn(r,s)}catch(s){await Xe(s)}}function Qc(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Yc(n,t,e){const r=j(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function si(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||Xc(n,r)})}function Xc(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Pi(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Li(n))}function su(n,t,e){for(const r of e)r instanceof Hc?(n.Ru.addReference(r.key,t),Hg(n,r)):r instanceof Gc?(x(Oi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Xc(n,r.key)):L(19791,{wu:r})}function Hg(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(x(Oi,"New document in limbo: "+e),n.Eu.add(r),Li(n))}function Li(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Z.fromString(t)),r=n.fu.next();n.Au.set(r,new xg(e)),n.du=n.du.insert(e,r),Oc(n.remoteStore,new re(Bt(vi(e.path)),r,"TargetPurposeLimboResolution",Lr.ce))}}async function qn(n,t,e){const r=j(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,h)=>{a.push(r.pu(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=bi.As(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,d){const p=j(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>S.forEach(d,y=>S.forEach(y.Es,C=>p.persistence.referenceDelegate.addReference(v,y.targetId,C)).next(()=>S.forEach(y.ds,C=>p.persistence.referenceDelegate.removeReference(v,y.targetId,C)))))}catch(v){if(!Je(v))throw v;x(Si,"Failed to update sequence numbers: "+v)}for(const v of d){const y=v.targetId;if(!v.fromCache){const C=p.Ms.get(y),P=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(P);p.Ms=p.Ms.insert(y,k)}}}(r.localStore,o))}async function Gg(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){x(Oi,"User change. New user:",t.toKey());const r=await Dc(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new N(b.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qn(e,r.Ls)}}function Wg(n,t){const e=j(n),r=e.Au.get(t);if(r&&r.hu)return H().add(r.key);{let s=H();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Jc(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Kc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zg.bind(null,t),t.Pu.H_=Vg.bind(null,t.eventManager),t.Pu.yu=kg.bind(null,t.eventManager),t}function Kg(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$g.bind(null,t),t}class xr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Hr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Jm(this.persistence,new Qm,t.initialUser,this.serializer)}Cu(t){return new kc(Ci.mi,this.serializer)}Du(t){return new ig}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xr.provider={build:()=>new xr};class Qg extends xr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Q(this.persistence.referenceDelegate instanceof Dr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xm(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new kc(r=>Dr.mi(r,e),this.serializer)}}class ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ru(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gg.bind(null,this.syncEngine),await bg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Pg}()}createDatastore(t){const e=Hr(t.databaseInfo.databaseId),r=function(o){return new lg(o)}(t.databaseInfo);return function(o,a,c,h){return new pg(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new gg(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ru(this.syncEngine,e,0),function(){return Xa.v()?new Xa:new og}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,p){const v=new Mg(s,o,a,c,h,d);return p&&(v.gu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=j(s);x(Re,"RemoteStore shutting down."),o.Ea.add(5),await zn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ii.provider={build:()=>new ii};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Yt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="FirestoreClient";class Yg{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=fi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x(fe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(fe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=xi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Os(n,t){n.asyncQueue.verifyOperationInProgress(),x(fe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function iu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Xg(n);x(fe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Za(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Za(t.remoteStore,s)),n._onlineComponents=t}async function Xg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(fe,"Using user provided OfflineComponentProvider");try{await Os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Be("Error using user provided cache. Falling back to memory cache: "+e),await Os(n,new xr)}}else x(fe,"Using default OfflineComponentProvider"),await Os(n,new Qg(void 0));return n._offlineComponents}async function tl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(fe,"Using user provided OnlineComponentProvider"),await iu(n,n._uninitializedComponentsProvider._online)):(x(fe,"Using default OnlineComponentProvider"),await iu(n,new ii))),n._onlineComponents}function Jg(n){return tl(n).then(t=>t.syncEngine)}async function el(n){const t=await tl(n),e=t.eventManager;return e.onListen=Og.bind(null,t.syncEngine),e.onUnlisten=Ug.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Lg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Bg.bind(null,t.syncEngine),e}function Zg(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new Zc({next:y=>{p.Nu(),a.enqueueAndForget(()=>qc(o,v));const C=y.docs.has(c);!C&&y.fromCache?d.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&y.fromCache&&h&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new $c(vi(c.path),p,{includeMetadataChanges:!0,qa:!0});return zc(o,v)}(await el(n),n.asyncQueue,t,e,r)),r.promise}function t_(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new Zc({next:y=>{p.Nu(),a.enqueueAndForget(()=>qc(o,v)),y.fromCache&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new $c(c,p,{includeMetadataChanges:!0,qa:!0});return zc(o,v)}(await el(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="firestore.googleapis.com",au=!0;class uu{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rl,this.ssl=au}else this.host=t.host,this.ssl=t.ssl??au;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Vc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Dm)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nl(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ip;switch(r.type){case"firstParty":return new cp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ou.get(e);r&&(x("ComponentProvider","Removing Datastore"),ou.delete(e),r.terminate())}(this),Promise.resolve()}}function e_(n,t,e,r={}){var d;n=Xt(n,Kr);const s=li(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Nd(`https://${c}`),Ld("Firestore",!0)),o.host!==rl&&o.host!==c&&Be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:s,emulatorOptions:r};if(!Ar(h,a)&&(n._setSettings(h),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=wt.MOCK_USER;else{p=xd(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new wt(y)}n._authCredentials=new op(new zu(p,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new tn(this.firestore,t,this._query)}}class ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Fn(e,ht._jsonSchema))return new ht(t,r||null,new O(Z.fromString(e.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:lt("string",ht._jsonSchemaVersion),referencePath:lt("string")};class ae extends tn{constructor(t,e,r){super(t,e,vi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new O(t))}withConverter(t){return new ae(this.firestore,t,this._path)}}function O_(n,t,...e){if(n=Kt(n),qu("collection","path",t),n instanceof Kr){const r=Z.fromString(t,...e);return Ta(r),new ae(n,null,r)}{if(!(n instanceof ht||n instanceof ae))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Ta(r),new ae(n.firestore,null,r)}}function n_(n,t,...e){if(n=Kt(n),arguments.length===1&&(t=fi.newId()),qu("doc","path",t),n instanceof Kr){const r=Z.fromString(t,...e);return Ea(r),new ht(n,null,new O(r))}{if(!(n instanceof ht||n instanceof ae))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Ea(r),new ht(n.firestore,n instanceof ae?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="AsyncQueue";class lu{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xc(this,"async_queue_retry"),this._c=()=>{const r=Ms();r&&x(cu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ms();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Wt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Je(t))throw t;x(cu,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Yt("INTERNAL UNHANDLED ERROR: ",hu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Ni.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:hu(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function hu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class en extends Kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new lu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lu(t),this._firestoreClient=void 0,await t}}}function r_(n,t){const e=typeof n=="object"?n:Du(),r=typeof n=="string"?n:Cr,s=qf(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=kd("firestore");o&&e_(s,...o)}return s}function Fi(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||s_(n),n._firestoreClient}function s_(n){var r,s,o;const t=n._freezeSettings(),e=function(c,h,d,p){return new Cp(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,nl(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Yg(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xt(yt.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xt(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Fn(t,xt._jsonSchema))return xt.fromBase64String(t.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:lt("string",xt._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(t){if(Fn(t,zt._jsonSchema))return new zt(t.latitude,t.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:lt("string",zt._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Fn(t,qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new qt(t.vectorValues);throw new N(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:lt("string",qt._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=/^__.*__$/;class o_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new me(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}class sl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new me(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function il(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Ui{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ui({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Mr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(il(this.Ac)&&i_.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class a_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Hr(t)}Cc(t,e,r,s=!1){return new Ui({Ac:t,methodName:e,Dc:r,path:_t.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bi(n){const t=n._freezeSettings(),e=Hr(n._databaseId);return new a_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function u_(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);zi("Data must be an object, but it was:",a,r);const c=ol(r,a);let h,d;if(o.merge)h=new Nt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const y=oi(t,v,e);if(!a.contains(y))throw new N(b.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);ul(p,y)||p.push(y)}h=new Nt(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new o_(new Vt(c),h,d)}class Xr extends Yr{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Xr}}class ji extends Yr{_toFieldTransform(t){return new Jp(t.path,new Mn)}isEqual(t){return t instanceof ji}}function c_(n,t,e,r){const s=n.Cc(1,t,e);zi("Data must be an object, but it was:",s,r);const o=[],a=Vt.empty();pe(r,(h,d)=>{const p=qi(t,h,e);d=Kt(d);const v=s.yc(p);if(d instanceof Xr)o.push(p);else{const y=$n(d,v);y!=null&&(o.push(p),a.set(p,y))}});const c=new Nt(o);return new sl(a,c,s.fieldTransforms)}function l_(n,t,e,r,s,o){const a=n.Cc(1,t,e),c=[oi(t,r,e)],h=[s];if(o.length%2!=0)throw new N(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<o.length;y+=2)c.push(oi(t,o[y])),h.push(o[y+1]);const d=[],p=Vt.empty();for(let y=c.length-1;y>=0;--y)if(!ul(d,c[y])){const C=c[y];let P=h[y];P=Kt(P);const k=a.yc(C);if(P instanceof Xr)d.push(C);else{const V=$n(P,k);V!=null&&(d.push(C),p.set(C,V))}}const v=new Nt(d);return new sl(p,v,a.fieldTransforms)}function h_(n,t,e,r=!1){return $n(e,n.Cc(r?4:3,t))}function $n(n,t){if(al(n=Kt(n)))return zi("Unsupported field value:",t,n),ol(n,t);if(n instanceof Yr)return function(r,s){if(!il(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=$n(c,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:kr(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kr(s.serializer,o)}}if(r instanceof zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:Ac(s.serializer,r._byteString)};if(r instanceof ht){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qt)return function(a,c){return{mapValue:{fields:{[Ju]:{stringValue:Zu},[br]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ei(c.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Or(r)}`)}(n,t)}function ol(n,t){const e={};return Gu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(n,(r,s)=>{const o=$n(s,t.mc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function al(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof zt||n instanceof xt||n instanceof ht||n instanceof Yr||n instanceof qt)}function zi(n,t,e){if(!al(e)||!$u(e)){const r=Or(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function oi(n,t,e){if((t=Kt(t))instanceof Qr)return t._internalPath;if(typeof t=="string")return qi(n,t);throw Mr("Field path arguments must be of type string or ",n,!1,void 0,e)}const d_=new RegExp("[~\\*/\\[\\]]");function qi(n,t,e){if(t.search(d_)>=0)throw Mr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Qr(...t.split("."))._internalPath}catch{throw Mr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Mr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(b.INVALID_ARGUMENT,c+n+h)}function ul(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new f_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($i("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class f_ extends cl{data(){return super.data()}}function $i(n,t){return typeof t=="string"?qi(n,t):t instanceof Qr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hi{}class m_ extends Hi{}function L_(n,t,...e){let r=[];t instanceof Hi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Gi).length,c=o.filter(h=>h instanceof Jr).length;if(a>1||a>0&&c>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Jr extends m_{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Jr(t,e,r)}_apply(t){const e=this._parse(t);return ll(t._query,e),new tn(t.firestore,t.converter,Qs(t._query,e))}_parse(t){const e=Bi(t.firestore);return function(o,a,c,h,d,p,v){let y;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){fu(v,p);const P=[];for(const k of v)P.push(du(h,o,k));y={arrayValue:{values:P}}}else y=du(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||fu(v,p),y=h_(c,a,v,p==="in"||p==="not-in");return ct.create(d,p,y)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function F_(n,t,e){const r=t,s=$i("where",n);return Jr._create(s,r,e)}class Gi extends Hi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Gi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ft.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)ll(a,h),a=Qs(a,h)}(t._query,e),new tn(t.firestore,t.converter,Qs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function du(n,t,e){if(typeof(e=Kt(e))=="string"){if(e==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ac(t)&&e.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Z.fromString(e));if(!O.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pa(n,new O(r))}if(e instanceof ht)return Pa(n,e._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Or(e)}.`)}function fu(n,t){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ll(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class g_{convertValue(t,e="none"){switch(he(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(le(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return pe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[br].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>at(a.doubleValue));return new qt(e)}convertGeoPoint(t){return new zt(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ur(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Dn(t));default:return null}}convertTimestamp(t){const e=ce(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);Q(Pc(r),9688,{name:t});const s=new Nn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Yt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class In{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ae extends cl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field($i("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ae._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ae._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ae._jsonSchema={type:lt("string",Ae._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class Er extends Ae{data(t={}){return super.data(t)}}class Fe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new In(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Er(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new Er(s._firestore,s._userDataWriter,c.doc.key,c.doc,new In(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Er(s._firestore,s._userDataWriter,c.doc.key,c.doc,new In(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:y_(c.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Fe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=fi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function y_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){n=Xt(n,ht);const t=Xt(n.firestore,en);return Zg(Fi(t),n._key).then(e=>v_(t,n,e))}Fe._jsonSchemaVersion="firestore/querySnapshot/1.0",Fe._jsonSchema={type:lt("string",Fe._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class hl extends g_{constructor(t){super(),this.firestore=t}convertBytes(t){return new xt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}function B_(n){n=Xt(n,tn);const t=Xt(n.firestore,en),e=Fi(t),r=new hl(t);return p_(n._query),t_(e,n._query).then(s=>new Fe(t,r,n,s))}function j_(n,t,e,...r){n=Xt(n,ht);const s=Xt(n.firestore,en),o=Bi(s);let a;return a=typeof(t=Kt(t))=="string"||t instanceof Qr?l_(o,"updateDoc",n._key,t,e,r):c_(o,"updateDoc",n._key,t),Wi(s,[a.toMutation(n._key,Lt.exists(!0))])}function z_(n){return Wi(Xt(n.firestore,en),[new Ti(n._key,Lt.none())])}function q_(n,t){const e=Xt(n.firestore,en),r=n_(n),s=__(n.converter,t);return Wi(e,[u_(Bi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Wi(n,t){return function(r,s){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>jg(await Jg(r),s,o)),o.promise}(Fi(n),t)}function v_(n,t,e){const r=e.docs.get(t._key),s=new hl(n);return new Ae(n,s,t._key,r,new In(e.hasPendingWrites,e.fromCache),t.converter)}function $_(){return new ji("serverTimestamp")}(function(t,e=!0){(function(s){Ye=s})(Wf),wr(new Sn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new en(new ap(r.getProvider("auth-internal")),new lp(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(d.options.projectId,p)}(a,s),a);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Oe(ga,_a,t),Oe(ga,_a,"esm2020")})();var E_="firebase",T_="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(E_,T_,"app");const I_={apiKey:"AIzaSyBMY82r-CDnprNaJdCJN44ZtektIQ1v0t8",authDomain:"vk-porject.firebaseapp.com",projectId:"vk-porject",storageBucket:"vk-porject.firebasestorage.app",messagingSenderId:"337047664819",appId:"1:337047664819:web:02473350a9188f9fd318c6",measurementId:"G-8B2Z99E0L3"},A_=Kf().length?Du():ku(I_),H_=r_(A_);export{V_ as A,P_ as B,Xo as C,x_ as D,N_ as F,k_ as P,C_ as S,_u as T,S_ as U,q_ as a,B_ as b,O_ as c,H_ as d,z_ as e,n_ as f,U_ as g,D_ as h,ih as i,b_ as j,Jo as k,ph as l,ah as m,zh as n,R_ as o,yu as p,L_ as q,Gh as r,$_ as s,j_ as u,F_ as w};
