/*! For license information please see 846.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdw=self.webpackChunkdw||[]).push([[846],{846:(t,n,e)=>{function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e.r(n),e.d(n,{CLASSES:()=>ne,CLASS_ACTIVE:()=>Xn,CLASS_ARROW:()=>Rn,CLASS_ARROWS:()=>kn,CLASS_ARROW_NEXT:()=>In,CLASS_ARROW_PREV:()=>Vn,CLASS_CLONE:()=>Dn,CLASS_CONTAINER:()=>On,CLASS_FOCUS_IN:()=>Qn,CLASS_INITIALIZED:()=>Yn,CLASS_LIST:()=>xn,CLASS_LOADING:()=>Jn,CLASS_NEXT:()=>qn,CLASS_OVERFLOW:()=>$n,CLASS_PAGINATION:()=>Mn,CLASS_PAGINATION_PAGE:()=>Gn,CLASS_PREV:()=>Kn,CLASS_PROGRESS:()=>zn,CLASS_PROGRESS_BAR:()=>Wn,CLASS_ROOT:()=>Tn,CLASS_SLIDE:()=>Pn,CLASS_SPINNER:()=>jn,CLASS_SR:()=>Bn,CLASS_TOGGLE:()=>Fn,CLASS_TOGGLE_PAUSE:()=>Un,CLASS_TOGGLE_PLAY:()=>Hn,CLASS_TRACK:()=>Nn,CLASS_VISIBLE:()=>Zn,DEFAULTS:()=>ye,EVENT_ACTIVE:()=>_t,EVENT_ARROWS_MOUNTED:()=>Mt,EVENT_ARROWS_UPDATED:()=>Gt,EVENT_AUTOPLAY_PAUSE:()=>jt,EVENT_AUTOPLAY_PLAY:()=>Ht,EVENT_AUTOPLAY_PLAYING:()=>Ut,EVENT_CLICK:()=>bt,EVENT_DESTROY:()=>It,EVENT_DRAG:()=>Pt,EVENT_DRAGGED:()=>Ot,EVENT_DRAGGING:()=>Dt,EVENT_END_INDEX_CHANGED:()=>Kt,EVENT_HIDDEN:()=>Lt,EVENT_INACTIVE:()=>At,EVENT_LAZYLOAD_LOADED:()=>Bt,EVENT_MOUNTED:()=>mt,EVENT_MOVE:()=>St,EVENT_MOVED:()=>yt,EVENT_NAVIGATION_MOUNTED:()=>Ft,EVENT_OVERFLOW:()=>Vt,EVENT_PAGINATION_MOUNTED:()=>zt,EVENT_PAGINATION_UPDATED:()=>Wt,EVENT_READY:()=>Et,EVENT_REFRESH:()=>wt,EVENT_RESIZE:()=>Nt,EVENT_RESIZED:()=>xt,EVENT_SCROLL:()=>kt,EVENT_SCROLLED:()=>Rt,EVENT_SHIFTED:()=>Xt,EVENT_SLIDE_KEYDOWN:()=>Yt,EVENT_UPDATED:()=>Tt,EVENT_VISIBLE:()=>Ct,EventBinder:()=>gt,EventInterface:()=>qt,FADE:()=>ue,LOOP:()=>se,LTR:()=>on,RTL:()=>sn,RequestInterval:()=>Zt,SLIDE:()=>oe,STATUS_CLASSES:()=>te,Splide:()=>Ae,SplideRenderer:()=>we,State:()=>Jt,TTB:()=>un,Throttle:()=>Qt,default:()=>Ae});var r="(prefers-reduced-motion: reduce)",o={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function s(t){t.length=0}function u(t,n,e){return Array.prototype.slice.call(t,n,e)}function a(t){return t.bind.apply(t,[null].concat(u(arguments,1)))}var c=setTimeout,l=function(){};function f(t){return requestAnimationFrame(t)}function d(t,n){return typeof n===t}function h(t){return!E(t)&&d("object",t)}var p=Array.isArray,v=a(d,"function"),g=a(d,"string"),m=a(d,"undefined");function E(t){return null===t}function S(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function y(t){return p(t)?t:[t]}function b(t,n){y(t).forEach(n)}function _(t,n){return t.indexOf(n)>-1}function A(t,n){return t.push.apply(t,y(n)),t}function C(t,n,e){t&&b(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function L(t,n){C(t,g(n)?n.split(" "):n,!0)}function w(t,n){b(n,t.appendChild.bind(t))}function T(t,n){b(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function N(t,n){return S(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function x(t,n){var e=t?u(t.children):[];return n?e.filter((function(t){return N(t,n)})):e}function P(t,n){return n?x(t,n)[0]:t.firstElementChild}var D=Object.keys;function O(t,n,e){return t&&(e?D(t).reverse():D(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function k(t){return u(arguments,1).forEach((function(n){O(n,(function(e,i){t[i]=n[i]}))})),t}function R(t){return u(arguments,1).forEach((function(n){O(n,(function(n,e){p(n)?t[e]=n.slice():h(n)?t[e]=R({},h(t[e])?t[e]:{},n):t[e]=n}))})),t}function V(t,n){b(n||D(t),(function(n){delete t[n]}))}function I(t,n){b(t,(function(t){b(n,(function(n){t&&t.removeAttribute(n)}))}))}function M(t,n,e){h(n)?O(n,(function(n,e){M(t,e,n)})):b(t,(function(t){E(e)||""===e?I(t,n):t.setAttribute(n,String(e))}))}function G(t,n,e){var i=document.createElement(t);return n&&(g(n)?L(i,n):M(i,n)),e&&w(e,i),i}function z(t,n,e){if(m(e))return getComputedStyle(t)[n];E(e)||(t.style[n]=""+e)}function W(t,n){z(t,"display",n)}function F(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function H(t,n){return t.getAttribute(n)}function U(t,n){return t&&t.classList.contains(n)}function j(t){return t.getBoundingClientRect()}function B(t){b(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function Y(t){return P((new DOMParser).parseFromString(t,"text/html").body)}function X(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function K(t,n){return t&&t.querySelector(n)}function q(t,n){return n?u(t.querySelectorAll(n)):[]}function Z(t,n){C(t,n,!1)}function J(t){return t.timeStamp}function Q(t){return g(t)?t:t?t+"px":""}var $="splide",tt="data-"+$;function nt(t,n){if(!t)throw new Error("["+$+"] "+(n||""))}var et=Math.min,it=Math.max,rt=Math.floor,ot=Math.ceil,st=Math.abs;function ut(t,n,e){return st(t-n)<e}function at(t,n,e,i){var r=et(n,e),o=it(n,e);return i?r<t&&t<o:r<=t&&t<=o}function ct(t,n,e){var i=et(n,e),r=it(n,e);return et(it(i,t),r)}function lt(t){return+(t>0)-+(t<0)}function ft(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function dt(t,n){return b(n,(function(n){t=t.replace("%s",""+n)})),t}function ht(t){return t<10?"0"+t:""+t}var pt={};function vt(t){return""+t+ht(pt[t]=(pt[t]||0)+1)}function gt(){var t=[];function n(t,n,e){b(t,(function(t){t&&b(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){n(e,i,(function(n,e,i){var s="addEventListener"in n,u=s?n.removeEventListener.bind(n,e,r,o):n.removeListener.bind(n,r);s?n.addEventListener(e,r,o):n.addListener(r),t.push([n,e,i,r,u])}))},unbind:function(e,i,r){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),s(t)}}}var mt="mounted",Et="ready",St="move",yt="moved",bt="click",_t="active",At="inactive",Ct="visible",Lt="hidden",wt="refresh",Tt="updated",Nt="resize",xt="resized",Pt="drag",Dt="dragging",Ot="dragged",kt="scroll",Rt="scrolled",Vt="overflow",It="destroy",Mt="arrows:mounted",Gt="arrows:updated",zt="pagination:mounted",Wt="pagination:updated",Ft="navigation:mounted",Ht="autoplay:play",Ut="autoplay:playing",jt="autoplay:pause",Bt="lazyload:loaded",Yt="sk",Xt="sh",Kt="ei";function qt(t){var n=t?t.event.bus:document.createDocumentFragment(),e=gt();return t&&t.event.on(It,e.destroy),k(e,{bus:n,on:function(t,i){e.bind(n,y(t).join(" "),(function(t){i.apply(i,p(t.detail)?t.detail:[])}))},off:a(e.unbind,n),emit:function(t){e.dispatch(n,t,u(arguments,1))}})}function Zt(t,n,e,i){var r,o,s=Date.now,u=0,a=!0,c=0;function l(){if(!a){if(u=t?et((s()-r)/t,1):1,e&&e(u),u>=1&&(n(),r=s(),i&&++c>=i))return d();o=f(l)}}function d(){a=!0}function h(){o&&cancelAnimationFrame(o),u=0,o=0,a=!0}return{start:function(n){n||h(),r=s()-(n?u*t:0),a=!1,o=f(l)},rewind:function(){r=s(),u=0,e&&e(u)},pause:d,cancel:h,set:function(n){t=n},isPaused:function(){return a}}}function Jt(t){var n=t;return{set:function(t){n=t},is:function(t){return _(y(t),n)}}}function Qt(t,n){var e=Zt(n||0,t,null,1);return function(){e.isPaused()&&e.start()}}var $t="Arrow",tn=$t+"Left",nn=$t+"Right",en=$t+"Up",rn=$t+"Down",on="ltr",sn="rtl",un="ttb",an={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[en,nn],ArrowRight:[rn,tn]};function cn(t,n,e){return{resolve:function(t,n,i){var r=(i=i||e.direction)!==sn||n?i===un?0:-1:1;return an[t]&&an[t][r]||t.replace(/width|left|right/i,(function(t,n){var e=an[t.toLowerCase()][r]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*(e.direction===sn?1:-1)}}}var ln="role",fn="tabindex",dn="aria-",hn=dn+"controls",pn=dn+"current",vn=dn+"selected",gn=dn+"label",mn=dn+"labelledby",En=dn+"hidden",Sn=dn+"orientation",yn=dn+"roledescription",bn=dn+"live",_n=dn+"busy",An=dn+"atomic",Cn=[ln,fn,"disabled",hn,pn,gn,mn,En,Sn,yn],Ln=$+"__",wn="is-",Tn=$,Nn=Ln+"track",xn=Ln+"list",Pn=Ln+"slide",Dn=Pn+"--clone",On=Pn+"__container",kn=Ln+"arrows",Rn=Ln+"arrow",Vn=Rn+"--prev",In=Rn+"--next",Mn=Ln+"pagination",Gn=Mn+"__page",zn=Ln+"progress",Wn=zn+"__bar",Fn=Ln+"toggle",Hn=Fn+"__play",Un=Fn+"__pause",jn=Ln+"spinner",Bn=Ln+"sr",Yn=wn+"initialized",Xn=wn+"active",Kn=wn+"prev",qn=wn+"next",Zn=wn+"visible",Jn=wn+"loading",Qn=wn+"focus-in",$n=wn+"overflow",te=[Xn,Zn,Kn,qn,Jn,Qn,$n],ne={slide:Pn,clone:Dn,arrows:kn,arrow:Rn,prev:Vn,next:In,pagination:Mn,page:Gn,spinner:jn},ee="touchstart mousedown",ie="touchmove mousemove",re="touchend touchcancel mouseup click",oe="slide",se="loop",ue="fade";var ae="http://www.w3.org/2000/svg",ce="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",le=tt+"-interval",fe={passive:!1,capture:!0},de={Spacebar:" ",Right:nn,Left:tn,Up:en,Down:rn};function he(t){return t=g(t)?t:t.key,de[t]||t}var pe="keydown",ve=tt+"-lazy",ge=ve+"-srcset",me="["+ve+"], ["+ge+"]",Ee=[" ","Enter"],Se=Object.freeze({__proto__:null,Media:function(t,n,e){var i=t.state,o=e.breakpoints||{},s=e.reducedMotion||{},u=gt(),a=[];function c(t){t&&u.destroy()}function l(t,n){var e=matchMedia(n);u.bind(e,"change",f),a.push([t,e])}function f(){var n=i.is(7),r=e.direction,o=a.reduce((function(t,n){return R(t,n[1].matches?n[0]:{})}),{});V(e),d(o),e.destroy?t.destroy("completely"===e.destroy):n?(c(!0),t.mount()):r!==e.direction&&t.refresh()}function d(n,r,o){R(e,n),r&&R(Object.getPrototypeOf(e),n),!o&&i.is(1)||t.emit(Tt,e)}return{setup:function(){var t="min"===e.mediaQuery;D(o).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){l(o[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),l(s,r),f()},destroy:c,reduce:function(t){matchMedia(r).matches&&(t?R(e,s):V(e,D(s)))},set:d}},Direction:cn,Elements:function(t,n,e){var i,r,o,u=qt(t),a=u.on,c=u.bind,l=t.root,f=e.i18n,d={},h=[],p=[],g=[];function m(){var t,n;i=y("."+Nn),r=P(i,"."+xn),nt(i&&r,"A track/list element is missing."),A(h,x(r,"."+Pn+":not(."+Dn+")")),O({arrows:kn,pagination:Mn,prev:Vn,next:In,bar:Wn,toggle:Fn},(function(t,n){d[n]=y("."+t)})),k(d,{root:l,track:i,list:r,slides:h}),t=l.id||vt($),n=e.role,l.id=t,i.id=i.id||t+"-track",r.id=r.id||t+"-list",!H(l,ln)&&"SECTION"!==l.tagName&&n&&M(l,ln,n),M(l,yn,f.carousel),M(r,ln,"presentation"),S()}function E(t){var n=Cn.concat("style");s(h),Z(l,p),Z(i,g),I([i,r],n),I(l,t?n:["style",yn])}function S(){Z(l,p),Z(i,g),p=b(Tn),g=b(Nn),L(l,p),L(i,g),M(l,gn,e.label),M(l,mn,e.labelledby)}function y(t){var n=K(l,t);return n&&function(t,n){if(v(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!N(e,n);)e=e.parentElement;return e}(n,"."+Tn)===l?n:void 0}function b(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===Tn&&Xn]}return k(d,{setup:m,mount:function(){a(wt,E),a(wt,m),a(Tt,S),c(document,ee+" keydown",(function(t){o="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){C(l,Qn,!!o)}))},destroy:E})},Slides:function(t,n,e){var i=qt(t),r=i.on,o=i.emit,u=i.bind,c=n.Elements,l=c.slides,f=c.list,d=[];function h(){l.forEach((function(t,n){m(t,n,-1)}))}function p(){A((function(t){t.destroy()})),s(d)}function m(n,e,i){var r=function(t,n,e,i){var r,o=qt(t),s=o.on,u=o.emit,c=o.bind,l=t.Components,f=t.root,d=t.options,h=d.isNavigation,p=d.updateOnMove,v=d.i18n,g=d.pagination,m=d.slideFocus,E=l.Direction.resolve,S=H(i,"style"),y=H(i,gn),b=e>-1,_=P(i,"."+On);function A(){var r=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");M(i,gn,dt(v.slideX,(b?e:n)+1)),M(i,hn,r),M(i,ln,m?"button":""),m&&I(i,yn)}function L(){r||w()}function w(){if(!r){var e=t.index;(o=T())!==U(i,Xn)&&(C(i,Xn,o),M(i,pn,h&&o||""),u(o?_t:At,N)),function(){var n=function(){if(t.is(ue))return T();var n=j(l.Elements.track),e=j(i),r=E("left",!0),o=E("right",!0);return rt(n[r])<=ot(e[r])&&rt(e[o])<=ot(n[o])}(),e=!n&&(!T()||b);if(t.state.is([4,5])||M(i,En,e||""),M(q(i,d.focusableNodes||""),fn,e?-1:""),m&&M(i,fn,e?-1:0),n!==U(i,Zn)&&(C(i,Zn,n),u(n?Ct:Lt,N)),!n&&document.activeElement===i){var r=l.Slides.getAt(t.index);r&&F(r.slide)}}(),C(i,Kn,n===e-1),C(i,qn,n===e+1)}var o}function T(){var i=t.index;return i===n||d.cloneStatus&&i===e}var N={index:n,slideIndex:e,slide:i,container:_,isClone:b,mount:function(){b||(i.id=f.id+"-slide"+ht(n+1),M(i,ln,g?"tabpanel":"group"),M(i,yn,v.slide),M(i,gn,y||dt(v.slideLabel,[n+1,t.length]))),c(i,"click",a(u,bt,N)),c(i,"keydown",a(u,Yt,N)),s([yt,Xt,Rt],w),s(Ft,A),p&&s(St,L)},destroy:function(){r=!0,o.destroy(),Z(i,te),I(i,Cn),M(i,"style",S),M(i,gn,y||"")},update:w,style:function(t,n,e){z(e&&_||i,t,n)},isWithin:function(e,i){var r=st(e-n);return b||!d.rewind&&!t.is(se)||(r=et(r,t.length-r)),r<=i}};return N}(t,e,i,n);r.mount(),d.push(r),d.sort((function(t,n){return t.index-n.index}))}function E(t){return t?x((function(t){return!t.isClone})):d}function A(t,n){E(n).forEach(t)}function x(t){return d.filter(v(t)?t:function(n){return g(t)?N(n.slide,t):_(y(t),n.index)})}return{mount:function(){h(),r(wt,p),r(wt,h)},destroy:p,update:function(){A((function(t){t.update()}))},register:m,get:E,getIn:function(t){var i=n.Controller,r=i.toIndex(t),o=i.hasFocus()?1:e.perPage;return x((function(t){return at(t.index,r,r+o-1)}))},getAt:function(t){return x(t)[0]},add:function(t,n){b(t,(function(t){if(g(t)&&(t=Y(t)),S(t)){var i=l[n];i?T(t,i):w(f,t),L(t,e.classes.slide),r=t,s=a(o,Nt),c=q(r,"img"),(d=c.length)?c.forEach((function(t){u(t,"load error",(function(){--d||s()}))})):s()}var r,s,c,d})),o(wt)},remove:function(t){B(x(t).map((function(t){return t.slide}))),o(wt)},forEach:A,filter:x,style:function(t,n,e){A((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(t,n,e){var i,r,o,s=qt(t),u=s.on,c=s.bind,l=s.emit,f=n.Slides,d=n.Direction.resolve,p=n.Elements,v=p.root,g=p.track,m=p.list,E=f.getAt,S=f.style;function y(){i=e.direction===un,z(v,"maxWidth",Q(e.width)),z(g,d("paddingLeft"),_(!1)),z(g,d("paddingRight"),_(!0)),b(!0)}function b(t){var n,s=j(v);(t||r.width!==s.width||r.height!==s.height)&&(z(g,"height",(n="",i&&(nt(n=A(),"height or heightRatio is missing."),n="calc("+n+" - "+_(!1)+" - "+_(!0)+")"),n)),S(d("marginRight"),Q(e.gap)),S("width",e.autoWidth?null:Q(e.fixedWidth)||(i?"":L())),S("height",Q(e.fixedHeight)||(i?e.autoHeight?null:L():A()),!0),r=s,l(xt),o!==(o=D())&&(C(v,$n,o),l(Vt,o)))}function _(t){var n=e.padding,i=d(t?"right":"left");return n&&Q(n[i]||(h(n)?0:n))||"0px"}function A(){return Q(e.height||j(m).width*e.heightRatio)}function L(){var t=Q(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function w(){return j(m)[d("width")]}function T(t,n){var e=E(t||0);return e?j(e.slide)[d("width")]+(n?0:P()):0}function N(t,n){var e=E(t);if(e){var i=j(e.slide)[d("right")],r=j(m)[d("left")];return st(i-r)+(n?0:P())}return 0}function x(n){return N(t.length-1)-N(0)+T(0,n)}function P(){var t=E(0);return t&&parseFloat(z(t.slide,d("marginRight")))||0}function D(){return t.is(ue)||x(!0)>w()}return{mount:function(){y(),c(window,"resize load",Qt(a(l,Nt))),u([Tt,wt],y),u(Nt,b)},resize:b,listSize:w,slideSize:T,sliderSize:x,totalSize:N,getPadding:function(t){return parseFloat(z(g,d("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,n,e){var i,r=qt(t),o=r.on,u=n.Elements,a=n.Slides,c=n.Direction.resolve,l=[];function f(){o(wt,d),o([Tt,Nt],p),(i=v())&&(function(n){var i=a.get().slice(),r=i.length;if(r){for(;i.length<n;)A(i,i);A(i.slice(-n),i.slice(0,n)).forEach((function(o,s){var c=s<n,f=function(n,i){var r=n.cloneNode(!0);return L(r,e.classes.clone),r.id=t.root.id+"-clone"+ht(i+1),r}(o.slide,s);c?T(f,i[0].slide):w(u.list,f),A(l,f),a.register(f,s-n+(c?0:r),o.index)}))}}(i),n.Layout.resize(!0))}function d(){h(),f()}function h(){B(l),s(l),r.destroy()}function p(){var t=v();i!==t&&(i<t||!t)&&r.emit(wt)}function v(){var i=e.clones;if(t.is(se)){if(m(i)){var r=e[c("fixedWidth")]&&n.Layout.slideSize(0);i=r&&ot(j(u.track)[c("width")]/r)||e[c("autoWidth")]&&t.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:h}},Move:function(t,n,e){var i,r=qt(t),o=r.on,s=r.emit,u=t.state.set,a=n.Layout,c=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,h=a.sliderSize,p=n.Direction,v=p.resolve,g=p.orient,E=n.Elements,S=E.list,y=E.track;function b(){n.Controller.isBusy()||(n.Scroll.cancel(),_(t.index),n.Slides.update())}function _(t){A(T(t,!0))}function A(e,i){if(!t.is(ue)){var r=i?e:function(e){if(t.is(se)){var i=w(e),r=i>n.Controller.getEnd();(i<0||r)&&(e=C(e,r))}return e}(e);z(S,"transform","translate"+v("X")+"("+r+"px)"),e!==r&&s(Xt)}}function C(t,n){var e=t-x(n),i=h();return t-g(i*(ot(st(e)/i)||1))*(n?1:-1)}function L(){A(N(),!0),i.cancel()}function w(t){for(var e=n.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var s=e[o].index,u=st(T(s,!0)-t);if(!(u<=r))break;r=u,i=s}return i}function T(n,i){var r=g(f(n-1)-function(t){var n=e.focus;return"center"===n?(d()-c(t,!0))/2:+n*c(t)||0}(n));return i?function(n){return e.trimSpace&&t.is(oe)&&(n=ct(n,0,g(h(!0)-d()))),n}(r):r}function N(){var t=v("left");return j(S)[t]-j(y)[t]+g(l(!1))}function x(t){return T(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,o([mt,xt,Tt,wt],b)},move:function(t,n,e,r){var o,a;t!==n&&(o=t>e,a=g(C(N(),o)),o?a>=0:a<=S[v("scrollWidth")]-j(y)[v("width")])&&(L(),A(C(N(),t>e),!0)),u(4),s(St,n,e,t),i.start(n,(function(){u(3),s(yt,n,e,t),r&&r()}))},jump:_,translate:A,shift:C,cancel:L,toIndex:w,toPosition:T,getPosition:N,getLimit:x,exceededLimit:function(t,n){n=m(n)?N():n;var e=!0!==t&&g(n)<g(x(!1)),i=!1!==t&&g(n)>g(x(!0));return e||i},reposition:b}},Controller:function(t,n,e){var i,r,o,s,u=qt(t),c=u.on,l=u.emit,f=n.Move,d=f.getPosition,h=f.getLimit,p=f.toPosition,v=n.Slides,E=v.isEnough,S=v.getLength,y=e.omitEnd,b=t.is(se),_=t.is(oe),A=a(x,!1),C=a(x,!0),L=e.start||0,w=L;function T(){r=S(!0),o=e.perMove,s=e.perPage,i=O();var t=ct(L,0,y?i:r-1);t!==L&&(L=t,f.reposition())}function N(){i!==O()&&l(Kt)}function x(t,n){var e=o||(I()?1:s),r=P(L+e*(t?-1:1),L,!(o||I()));return-1===r&&_&&!ut(d(),h(!t),1)?t?0:i:n?r:D(r)}function P(n,u,a){if(E()||I()){var c=function(n){if(_&&"move"===e.trimSpace&&n!==L)for(var i=d();i===p(n,!0)&&at(n,0,t.length-1,!e.rewind);)n<L?--n:++n;return n}(n);c!==n&&(u=n,n=c,a=!1),n<0||n>i?n=o||!at(0,n,u,!0)&&!at(i,u,n,!0)?b?a?n<0?-(r%s||s):r:n:e.rewind?n<0?i:0:-1:k(R(n)):a&&n!==u&&(n=k(R(u)+(n<u?-1:1)))}else n=-1;return n}function D(t){return b?(t+r)%r||0:t}function O(){for(var t=r-(I()||b&&o?1:s);y&&t-- >0;)if(p(r-1,!0)!==p(t,!0)){t++;break}return ct(t,0,r-1)}function k(t){return ct(I()?t:s*t,0,i)}function R(t){return I()?et(t,i):rt((t>=i?r-1:t)/s)}function V(t){t!==L&&(w=L,L=t)}function I(){return!m(e.focus)||e.isNavigation}function M(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){T(),c([Tt,wt,Kt],T),c(xt,N)},go:function(t,n,e){if(!M()){var r=function(t){var n=L;if(g(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?n=P(L+ +(""+r+(+o||1)),L):">"===r?n=o?k(+o):A(!0):"<"===r&&(n=C(!0))}else n=b?t:ct(t,0,i);return n}(t),o=D(r);o>-1&&(n||o!==L)&&(V(o),f.move(r,o,w,e))}},scroll:function(t,e,r,o){n.Scroll.scroll(t,e,r,(function(){var t=D(f.toIndex(d()));V(y?et(t,i):t),o&&o()}))},getNext:A,getPrev:C,getAdjacent:x,getEnd:O,setIndex:V,getIndex:function(t){return t?w:L},toIndex:k,toPage:R,toDest:function(t){var n=f.toIndex(t);return _?ct(n,0,i):n},hasFocus:I,isBusy:M}},Arrows:function(t,n,e){var i,r,o=qt(t),s=o.on,u=o.bind,c=o.emit,l=e.classes,f=e.i18n,d=n.Elements,h=n.Controller,p=d.arrows,v=d.track,g=p,m=d.prev,E=d.next,S={};function y(){var t;!(t=e.arrows)||m&&E||(g=p||G("div",l.arrows),m=C(!0),E=C(!1),i=!0,w(g,[m,E]),!p&&T(g,v)),m&&E&&(k(S,{prev:m,next:E}),W(g,t?"":"none"),L(g,r=kn+"--"+e.direction),t&&(s([mt,yt,wt,Rt,Kt],N),u(E,"click",a(A,">")),u(m,"click",a(A,"<")),N(),M([m,E],hn,v.id),c(Mt,m,E))),s(Tt,b)}function b(){_(),y()}function _(){o.destroy(),Z(g,r),i?(B(p?[m,E]:g),m=E=null):I([m,E],Cn)}function A(t){h.go(t,!0)}function C(t){return Y('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="'+ae+'" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||ce)+'" />')}function N(){if(m&&E){var n=t.index,e=h.getPrev(),i=h.getNext(),r=e>-1&&n<e?f.last:f.prev,o=i>-1&&n>i?f.first:f.next;m.disabled=e<0,E.disabled=i<0,M(m,gn,r),M(E,gn,o),c(Gt,m,E,e,i)}}return{arrows:S,mount:y,destroy:_,update:N}},Autoplay:function(t,n,e){var i,r,o=qt(t),s=o.on,u=o.bind,a=o.emit,c=Zt(e.interval,t.go.bind(t,">"),(function(t){var n=f.bar;n&&z(n,"width",100*t+"%"),a(Ut,t)})),l=c.isPaused,f=n.Elements,d=n.Elements,h=d.root,p=d.toggle,v=e.autoplay,g="pause"===v;function m(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,y(),a(Ht))}function E(t){void 0===t&&(t=!0),g=!!t,y(),l()||(c.pause(),a(jt))}function S(){g||(i||r?E(!1):m())}function y(){p&&(C(p,Xn,!g),M(p,gn,e.i18n[g?"play":"pause"]))}function b(t){var i=n.Slides.getAt(t);c.set(i&&+H(i.slide,le)||e.interval)}return{mount:function(){v&&(e.pauseOnHover&&u(h,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,S()})),e.pauseOnFocus&&u(h,"focusin focusout",(function(t){r="focusin"===t.type,S()})),p&&u(p,"click",(function(){g?m():E(!0)})),s([St,kt,wt],c.rewind),s(St,b),p&&M(p,hn,f.track.id),g||m(),y())},destroy:c.cancel,play:m,pause:E,isPaused:l}},Cover:function(t,n,e){var i=qt(t).on;function r(t){n.Slides.forEach((function(n){var e=P(n.container||n.slide,"img");e&&e.src&&o(t,e,n)}))}function o(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),W(n,t?"none":"")}return{mount:function(){e.cover&&(i(Bt,a(o,!0)),i([mt,Tt,wt],a(r,!0)))},destroy:a(r,!1)}},Scroll:function(t,n,e){var i,r,o=qt(t),s=o.on,u=o.emit,c=t.state.set,l=n.Move,f=l.getPosition,d=l.getLimit,h=l.exceededLimit,p=l.translate,v=t.is(oe),g=1;function m(t,e,o,s,d){var p=f();if(y(),o&&(!v||!h())){var m=n.Layout.sliderSize(),b=lt(t)*m*rt(st(t)/m)||0;t=l.toPosition(n.Controller.toDest(t%m))+b}var _=ut(p,t,1);g=1,e=_?0:e||it(st(t-p)/1.5,800),r=s,i=Zt(e,E,a(S,p,t,d),1),c(5),u(kt),i.start()}function E(){c(3),r&&r(),u(Rt)}function S(t,n,i,o){var s,u,a=f(),c=(t+(n-t)*(s=o,(u=e.easingFunc)?u(s):1-Math.pow(1-s,4))-a)*g;p(a+c),v&&!i&&h()&&(g*=.6,st(c)<10&&m(d(h(!0)),600,!1,r,!0))}function y(){i&&i.cancel()}function b(){i&&!i.isPaused()&&(y(),E())}return{mount:function(){s(St,y),s([Tt,wt],b)},destroy:y,scroll:m,cancel:b}},Drag:function(t,n,e){var i,r,o,s,u,a,c,f,d=qt(t),p=d.on,v=d.emit,g=d.bind,m=d.unbind,E=t.state,S=n.Move,y=n.Scroll,b=n.Controller,_=n.Elements.track,A=n.Media.reduce,C=n.Direction,L=C.resolve,w=C.orient,T=S.getPosition,x=S.exceededLimit,P=!1;function D(){var t=e.drag;H(!t),s="free"===t}function O(t){if(a=!1,!c){var n=F(t);i=t.target,r=e.noDrag,N(i,"."+Gn+", ."+Rn)||r&&N(i,r)||!n&&t.button||(b.isBusy()?X(t,!0):(f=n?_:window,u=E.is([4,5]),o=null,g(f,ie,k,fe),g(f,re,R,fe),S.cancel(),y.cancel(),I(t)))}var i,r}function k(n){if(E.is(6)||(E.set(6),v(Pt)),n.cancelable)if(u){S.translate(i+M(n)/(P&&t.is(oe)?5:1));var r=G(n)>200,o=P!==(P=x());(r||o)&&I(n),a=!0,v(Dt),X(n)}else(function(t){return st(M(t))>st(M(t,!0))})(n)&&(u=function(t){var n=e.dragMinThreshold,i=h(n),r=i&&n.mouse||0,o=(i?n.touch:+n)||10;return st(M(t))>(F(t)?o:r)}(n),X(n))}function R(i){E.is(6)&&(E.set(3),v(Ot)),u&&(function(i){var r=function(n){if(t.is(se)||!P){var e=G(n);if(e&&e<200)return M(n)/e}return 0}(i),o=function(t){return T()+lt(t)*et(st(t)*(e.flickPower||600),s?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(r),u=e.rewind&&e.rewindByDrag;A(!1),s?b.scroll(o,0,e.snap):t.is(ue)?b.go(w(lt(r))<0?u?"<":"-":u?">":"+"):t.is(oe)&&P&&u?b.go(x(!0)?">":"<"):b.go(b.toDest(o),!0),A(!0)}(i),X(i)),m(f,ie,k),m(f,re,R),u=!1}function V(t){!c&&a&&X(t,!0)}function I(t){o=r,r=t,i=T()}function M(t,n){return W(t,n)-W(z(t),n)}function G(t){return J(t)-J(z(t))}function z(t){return r===t&&o||r}function W(t,n){return(F(t)?t.changedTouches[0]:t)["page"+L(n?"Y":"X")]}function F(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function H(t){c=t}return{mount:function(){g(_,ie,l,fe),g(_,re,l,fe),g(_,ee,O,fe),g(_,"click",V,{capture:!0}),g(_,"dragstart",X),p([mt,Tt],D)},disable:H,isDragging:function(){return u}}},Keyboard:function(t,n,e){var i,r,o=qt(t),s=o.on,u=o.bind,a=o.unbind,l=t.root,f=n.Direction.resolve;function d(){var t=e.keyboard;t&&(i="global"===t?window:l,u(i,pe,v))}function h(){a(i,pe)}function p(){var t=r;r=!0,c((function(){r=t}))}function v(n){if(!r){var e=he(n);e===f(tn)?t.go("<"):e===f(nn)&&t.go(">")}}return{mount:function(){d(),s(Tt,h),s(Tt,d),s(St,p)},destroy:h,disable:function(t){r=t}}},LazyLoad:function(t,n,e){var i=qt(t),r=i.on,o=i.off,u=i.bind,c=i.emit,l="sequential"===e.lazyLoad,f=[yt,Rt],d=[];function h(){s(d),n.Slides.forEach((function(t){q(t.slide,me).forEach((function(n){var i=H(n,ve),r=H(n,ge);if(i!==n.src||r!==n.srcset){var o=e.classes.spinner,s=n.parentElement,u=P(s,"."+o)||G("span",o,s);d.push([n,t,u]),n.src||W(n,"none")}}))})),l?m():(o(f),r(f,p),p())}function p(){(d=d.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||v(n)}))).length||o(f)}function v(t){var n=t[0];L(t[1].slide,Jn),u(n,"load error",a(g,t)),M(n,"src",H(n,ve)),M(n,"srcset",H(n,ge)),I(n,ve),I(n,ge)}function g(t,n){var e=t[0],i=t[1];Z(i.slide,Jn),"error"!==n.type&&(B(t[2]),W(e,""),c(Bt,e,i),c(Nt)),l&&m()}function m(){d.length&&v(d.shift())}return{mount:function(){e.lazyLoad&&(h(),r(wt,h))},destroy:a(s,d),check:p}},Pagination:function(t,n,e){var i,r,o=qt(t),c=o.on,l=o.emit,f=o.bind,d=n.Slides,h=n.Elements,p=n.Controller,v=p.hasFocus,g=p.getIndex,m=p.go,E=n.Direction.resolve,S=h.pagination,y=[];function b(){i&&(B(S?u(i.children):i),Z(i,r),s(y),i=null),o.destroy()}function _(t){m(">"+t,!0)}function A(t,n){var e=y.length,i=he(n),r=C(),o=-1;i===E(nn,!1,r)?o=++t%e:i===E(tn,!1,r)?o=(--t+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var s=y[o];s&&(F(s.button),m(">"+o),X(n,!0))}function C(){return e.paginationDirection||e.direction}function w(t){return y[p.toPage(t)]}function T(){var t=w(g(!0)),n=w(g());if(t){var e=t.button;Z(e,Xn),I(e,vn),M(e,fn,-1)}if(n){var r=n.button;L(r,Xn),M(r,vn,!0),M(r,fn,"")}l(Wt,{list:i,items:y},t,n)}return{items:y,mount:function n(){b(),c([Tt,wt,Kt],n);var o=e.pagination;S&&W(S,o?"":"none"),o&&(c([St,kt,Rt],T),function(){var n=t.length,o=e.classes,s=e.i18n,u=e.perPage,c=v()?p.getEnd()+1:ot(n/u);L(i=S||G("ul",o.pagination,h.track.parentElement),r=Mn+"--"+C()),M(i,ln,"tablist"),M(i,gn,s.select),M(i,Sn,C()===un?"vertical":"");for(var l=0;l<c;l++){var g=G("li",null,i),m=G("button",{class:o.page,type:"button"},g),E=d.getIn(l).map((function(t){return t.slide.id})),b=!v()&&u>1?s.pageX:s.slideX;f(m,"click",a(_,l)),e.paginationKeyboard&&f(m,"keydown",a(A,l)),M(g,ln,"presentation"),M(m,ln,"tab"),M(m,hn,E.join(" ")),M(m,gn,dt(b,l+1)),M(m,fn,-1),y.push({li:g,button:m,page:l})}}(),T(),l(zt,{list:i,items:y},w(t.index)))},destroy:b,getAt:w,update:T}},Sync:function(t,n,e){var i=e.isNavigation,r=e.slideFocus,o=[];function u(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&((e=(n=qt(t)).on)(bt,d),e(Yt,h),e([mt,Tt],f),o.push(n),n.emit(Ft,t.splides))}function c(){o.forEach((function(t){t.destroy()})),s(o)}function l(t,n){var e=qt(t);e.on(St,(function(t,e,i){n.go(n.is(se)?i:t)})),o.push(e)}function f(){M(n.Elements.list,Sn,e.direction===un?"vertical":"")}function d(n){t.go(n.index)}function h(t,n){_(Ee,he(n))&&(d(t),X(n))}return{setup:a(n.Media.set,{slideFocus:m(r)?i:r},!0),mount:u,destroy:c,remount:function(){c(),u()}}},Wheel:function(t,n,e){var i=qt(t).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,s=o<0,u=J(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;st(o)>a&&u-r>c&&(t.go(s?"<":">"),r=u),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(s)&&X(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",o,fe)}}},Live:function(t,n,e){var i=qt(t).on,r=n.Elements.track,o=e.live&&!e.isNavigation,s=G("span",Bn),u=Zt(90,a(c,!1));function c(t){M(r,_n,t),t?(w(r,s),u.start()):(B(s),u.cancel())}function l(t){o&&M(r,bn,t?"off":"polite")}return{mount:function(){o&&(l(!n.Autoplay.isPaused()),M(r,An,!0),s.textContent="…",i(Ht,a(l,!0)),i(jt,a(l,!1)),i([yt,Rt],a(c,!0)))},disable:l,destroy:function(){I(r,[bn,An,_n]),B(s)}}}}),ye={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:ne,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function be(t,n,e){var i=n.Slides;function r(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){qt(t).on([mt,wt],r)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),c(n)},cancel:l}}function _e(t,n,e){var i,r=n.Move,o=n.Controller,s=n.Scroll,u=n.Elements.list,c=a(z,u,"transition");function l(){c(""),s.cancel()}return{mount:function(){qt(t).bind(u,"transitionend",(function(t){t.target===u&&i&&(l(),i())}))},start:function(n,u){var a=r.toPosition(n,!0),l=r.getPosition(),f=function(n){var i=e.rewindSpeed;if(t.is(oe)&&i){var r=o.getIndex(!0),s=o.getEnd();if(0===r&&n>=s||r>=s&&0===n)return i}return e.speed}(n);st(a-l)>=1&&f>=1?e.useScroll?s.scroll(a,f,!1,u):(c("transform "+f+"ms "+e.easing),r.translate(a,!0),i=u):(r.jump(n),u())},cancel:l}}var Ae=function(){function t(n,e){this.event=qt(),this.Components={},this.state=Jt(1),this.splides=[],this._o={},this._E={};var i=g(n)?K(document,n):n;nt(i,i+" is invalid."),this.root=i,e=R({label:H(i,gn)||"",labelledby:H(i,mn)||""},ye,t.defaults,e||{});try{R(e,JSON.parse(H(i,tt)))}catch(t){nt(!1,"Invalid JSON")}this._o=Object.create(R({},e))}var n,e,r=t.prototype;return r.mount=function(t,n){var e=this,i=this.state,r=this.Components;return nt(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=n||this._T||(this.is(ue)?be:_e),this._E=t||this._E,O(k({},Se,this._E,{Transition:this._T}),(function(t,n){var i=t(e,r,e._o);r[n]=i,i.setup&&i.setup()})),O(r,(function(t){t.mount&&t.mount()})),this.emit(mt),L(this.root,Yn),i.set(3),this.emit(Et),this},r.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},r.go=function(t){return this._C.Controller.go(t),this},r.on=function(t,n){return this.event.on(t,n),this},r.off=function(t){return this.event.off(t),this},r.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(u(arguments,1))),this},r.add=function(t,n){return this._C.Slides.add(t,n),this},r.remove=function(t){return this._C.Slides.remove(t),this},r.is=function(t){return this._o.type===t},r.refresh=function(){return this.emit(wt),this},r.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?qt(this).on(Et,this.destroy.bind(this,t)):(O(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(It),n.destroy(),t&&s(this.splides),e.set(7)),this},n=t,(e=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&i(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();Ae.defaults={},Ae.STATES=o;var Ce={listTag:"ul",slideTag:"li"},Le=function(){function t(t,n){this.styles={},this.id=t,this.options=n}var n=t.prototype;return n.rule=function(t,n,e,i){i=i||"default";var r=this.styles[i]=this.styles[i]||{};(r[t]=r[t]||{})[n]=e},n.build=function(){var t=this,n="";return this.styles.default&&(n+=this.buildSelectors(this.styles.default)),Object.keys(this.styles).sort((function(n,e){return"min"===t.options.mediaQuery?+n-+e:+e-+n})).forEach((function(e){"default"!==e&&(n+="@media screen and (max-width: "+e+"px) {",n+=t.buildSelectors(t.styles[e]),n+="}")})),n},n.buildSelectors=function(t){var n=this,e="";return O(t,(function(t,i){i=("#"+n.id+" "+i).trim(),e+=i+" {",O(t,(function(t,n){(t||0===t)&&(e+=n+": "+t+";")})),e+="}"})),e},t}(),we=function(){function t(t,n,e,i){this.slides=[],this.options={},this.breakpoints=[],R(ye,i||{}),R(R(this.options,ye),n||{}),this.contents=t,this.config=k({},Ce,e||{}),this.id=this.config.id||vt("splide"),this.Style=new Le(this.id,this.options),this.Direction=cn(0,0,this.options),nt(this.contents.length,"Provide at least 1 content."),this.init()}t.clean=function(t){var n=qt(t).on,e=t.root,i=q(e,"."+Dn);n(mt,(function(){B(P(e,"style"))})),B(i)};var n=t.prototype;return n.init=function(){this.parseBreakpoints(),this.initSlides(),this.registerRootStyles(),this.registerTrackStyles(),this.registerSlideStyles(),this.registerListStyles()},n.initSlides=function(){var t=this;A(this.slides,this.contents.map((function(n,e){(n=g(n)?{html:n}:n).styles=n.styles||{},n.attrs=n.attrs||{},t.cover(n);var i=t.options.classes.slide+" "+(0===e?Xn:"");return k(n.attrs,{class:(i+" "+(n.attrs.class||"")).trim(),style:t.buildStyles(n.styles)}),n}))),this.isLoop()&&this.generateClones(this.slides)},n.registerRootStyles=function(){var t=this;this.breakpoints.forEach((function(n){var e=n[0],i=n[1];t.Style.rule(" ","max-width",Q(i.width),e)}))},n.registerTrackStyles=function(){var t=this,n=this.Style,e="."+Nn;this.breakpoints.forEach((function(i){var r=i[0],o=i[1];n.rule(e,t.resolve("paddingLeft"),t.cssPadding(o,!1),r),n.rule(e,t.resolve("paddingRight"),t.cssPadding(o,!0),r),n.rule(e,"height",t.cssTrackHeight(o),r)}))},n.registerListStyles=function(){var t=this,n=this.Style,e="."+xn;this.breakpoints.forEach((function(i){var r=i[0],o=i[1];n.rule(e,"transform",t.buildTranslate(o),r),t.cssSlideHeight(o)||n.rule(e,"aspect-ratio",t.cssAspectRatio(o),r)}))},n.registerSlideStyles=function(){var t=this,n=this.Style,e="."+Pn;this.breakpoints.forEach((function(i){var r=i[0],o=i[1];n.rule(e,"width",t.cssSlideWidth(o),r),n.rule(e,"height",t.cssSlideHeight(o)||"100%",r),n.rule(e,t.resolve("marginRight"),Q(o.gap)||"0px",r),n.rule(e+" > img","display",o.cover?"none":"inline",r)}))},n.buildTranslate=function(t){var n=this.Direction,e=n.resolve,i=n.orient,r=[];return r.push(this.cssOffsetClones(t)),r.push(this.cssOffsetGaps(t)),this.isCenter(t)&&(r.push(this.buildCssValue(i(-50),"%")),r.push.apply(r,this.cssOffsetCenter(t))),r.filter(Boolean).map((function(t){return"translate"+e("X")+"("+t+")"})).join(" ")},n.cssOffsetClones=function(t){var n=this.Direction,e=n.resolve,i=n.orient,r=this.getCloneCount();if(this.isFixedWidth(t)){var o=this.parseCssValue(t[e("fixedWidth")]),s=o.value,u=o.unit;return this.buildCssValue(i(s)*r,u)}return i(100*r/t.perPage)+"%"},n.cssOffsetCenter=function(t){var n=this.Direction,e=n.resolve,i=n.orient;if(this.isFixedWidth(t)){var r=this.parseCssValue(t[e("fixedWidth")]),o=r.value,s=r.unit;return[this.buildCssValue(i(o/2),s)]}var u=[],a=t.perPage,c=t.gap;if(u.push(i(50/a)+"%"),c){var l=this.parseCssValue(c),f=l.value,d=l.unit,h=(f/a-f)/2;u.push(this.buildCssValue(i(h),d))}return u},n.cssOffsetGaps=function(t){var n=this.getCloneCount();if(n&&t.gap){var e=this.Direction.orient,i=this.parseCssValue(t.gap),r=i.value,o=i.unit;if(this.isFixedWidth(t))return this.buildCssValue(e(r*n),o);var s=n/t.perPage;return this.buildCssValue(e(s*r),o)}return""},n.resolve=function(t){return ft(this.Direction.resolve(t))},n.cssPadding=function(t,n){var e=t.padding,i=this.Direction.resolve(n?"right":"left",!0);return e&&Q(e[i]||(h(e)?0:e))||"0px"},n.cssTrackHeight=function(t){var n="";return this.isVertical()&&(nt(n=this.cssHeight(t),'"height" is missing.'),n="calc("+n+" - "+this.cssPadding(t,!1)+" - "+this.cssPadding(t,!0)+")"),n},n.cssHeight=function(t){return Q(t.height)},n.cssSlideWidth=function(t){return t.autoWidth?"":Q(t.fixedWidth)||(this.isVertical()?"":this.cssSlideSize(t))},n.cssSlideHeight=function(t){return Q(t.fixedHeight)||(this.isVertical()?t.autoHeight?"":this.cssSlideSize(t):this.cssHeight(t))},n.cssSlideSize=function(t){var n=Q(t.gap);return"calc((100%"+(n&&" + "+n)+")/"+(t.perPage||1)+(n&&" - "+n)+")"},n.cssAspectRatio=function(t){var n=t.heightRatio;return n?""+1/n:""},n.buildCssValue=function(t,n){return""+t+n},n.parseCssValue=function(t){return g(t)?{value:parseFloat(t)||0,unit:t.replace(/\d*(\.\d*)?/,"")||"px"}:{value:t,unit:"px"}},n.parseBreakpoints=function(){var t=this,n=this.options.breakpoints;this.breakpoints.push(["default",this.options]),n&&O(n,(function(n,e){t.breakpoints.push([e,R(R({},t.options),n)])}))},n.isFixedWidth=function(t){return!!t[this.Direction.resolve("fixedWidth")]},n.isLoop=function(){return this.options.type===se},n.isCenter=function(t){if("center"===t.focus){if(this.isLoop())return!0;if(this.options.type===oe)return!this.options.trimSpace}return!1},n.isVertical=function(){return this.options.direction===un},n.buildClasses=function(){var t=this.options;return[Tn,Tn+"--"+t.type,Tn+"--"+t.direction,t.drag&&Tn+"--draggable",t.isNavigation&&Tn+"--nav",Xn,!this.config.hidden&&"is-rendered"].filter(Boolean).join(" ")},n.buildAttrs=function(t){var n="";return O(t,(function(t,e){n+=t?" "+ft(e)+'="'+t+'"':""})),n.trim()},n.buildStyles=function(t){var n="";return O(t,(function(t,e){n+=" "+ft(e)+":"+t+";"})),n.trim()},n.renderSlides=function(){var t=this,n=this.config.slideTag;return this.slides.map((function(e){return"<"+n+" "+t.buildAttrs(e.attrs)+">"+(e.html||"")+"</"+n+">"})).join("")},n.cover=function(t){var n=t.styles,e=t.html,i=void 0===e?"":e;if(this.options.cover&&!this.options.lazyLoad){var r=i.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);r&&r[2]&&(n.background="center/cover no-repeat url('"+r[2]+"')")}},n.generateClones=function(t){for(var n=this.options.classes,e=this.getCloneCount(),i=t.slice();i.length<e;)A(i,i);A(i.slice(-e).reverse(),i.slice(0,e)).forEach((function(i,r){var o=k({},i.attrs,{class:i.attrs.class+" "+n.clone}),s=k({},i,{attrs:o});r<e?t.unshift(s):t.push(s)}))},n.getCloneCount=function(){if(this.isLoop()){var t=this.options;return t.clones?t.clones:it.apply(void 0,this.breakpoints.map((function(t){return t[1].perPage})))*((t.flickMaxPages||1)+1)}return 0},n.renderArrows=function(){var t="";return t+='<div class="'+this.options.classes.arrows+'">',t+=this.renderArrow(!0),(t+=this.renderArrow(!1))+"</div>"},n.renderArrow=function(t){var n=this.options,e=n.classes,i=n.i18n,r={class:e.arrow+" "+(t?e.prev:e.next),type:"button",ariaLabel:t?i.prev:i.next};return"<button "+this.buildAttrs(r)+'><svg xmlns="'+ae+'" viewBox="0 0 40 40" width="40" height="40"><path d="'+(this.options.arrowPath||ce)+'" /></svg></button>'},n.html=function(){var t=this.config,n=t.rootClass,e=t.listTag,i=t.arrows,r=t.beforeTrack,o=t.afterTrack,s=t.slider,u=t.beforeSlider,a=t.afterSlider,c="";return c+='<div id="'+this.id+'" class="'+this.buildClasses()+" "+(n||"")+'">',c+="<style>"+this.Style.build()+"</style>",s&&(c+=u||"",c+='<div class="splide__slider">'),c+=r||"",i&&(c+=this.renderArrows()),c+='<div class="splide__track">',c+="<"+e+' class="splide__list">',c+=this.renderSlides(),c+="</"+e+">",c+="</div>",c+=o||"",s&&(c+="</div>",c+=a||""),c+="</div>"},t}()}}]);