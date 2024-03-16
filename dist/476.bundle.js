"use strict";(self.webpackChunkdw=self.webpackChunkdw||[]).push([[476],{476:(t,e,r)=>{var n,i;function o(t){return"object"==typeof t&&"function"==typeof t.to}function s(t){t.parentElement.removeChild(t)}function a(t){return null!=t}function l(t){t.preventDefault()}function u(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function c(t,e,r){r>0&&(d(t,e),setTimeout((function(){m(t,e)}),r))}function p(t){return Math.max(Math.min(t,100),0)}function f(t){return Array.isArray(t)?t:[t]}function h(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function d(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function m(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function g(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function v(t,e){return 100/(e-t)}function b(t,e,r){return 100*e/(t[r+1]-t[r])}function S(t,e){for(var r=1;t>=e[r];)r+=1;return r}r.r(e),r.d(e,{PipsMode:()=>n,PipsType:()=>i,create:()=>J,cssClasses:()=>w,default:()=>K}),function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"}(n||(n={})),function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"}(i||(i={}));var x=function(){function t(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var i=[];for(Object.keys(t).forEach((function(e){i.push([f(t[e]),e])})),i.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=b(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++,null===e&&(e=[]);var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);s>0;)a=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*n>100?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),s=e[i+c]*o;return t+u},t.prototype.toStepping=function(t){return function(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=S(r,t),i=t[n-1],o=t[n],s=e[n-1],a=e[n];return s+function(t,e){return b(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([i,o],r)/v(s,a)}(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=S(r,e),i=t[n-1],o=t[n],s=e[n-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([i,o],(r-s)*v(s,e[n]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return function(t,e,r,n){if(100===n)return n;var i=S(n,t),o=t[i-1],s=t[i];return r?n-o>(s-o)/2?s:o:e[i-1]?t[i-1]+function(t,e){return Math.round(t/e)*e}(n-t[i-1],e[i-1]):n}(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=S(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){var e=S(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(h);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var r;if(!u(r="min"===t?0:"max"===t?100:parseFloat(t))||!u(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(e[0]);var n=Number(e[1]);r?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=b([this.xVal[t],this.xVal[t+1]],e,0)/v(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(r.toFixed(3))-1),i=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=i}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),y={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},w={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},E={tooltips:".__tooltips",aria:".__aria"};function C(t,e){if(!u(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function N(t,e){if(!u(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function P(t,e){if(!u(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function V(t,e){if(!u(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function k(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new x(e,t.snap||!1,t.singleStep)}function A(t,e){if(e=f(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function U(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function M(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function D(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function O(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function L(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function z(t,e){if(!u(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function j(t,e){if(!u(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function H(t,e){var r;if(!u(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!u(e[0])&&!u(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function F(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function R(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");z(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:u,fixed:i,snap:o,hover:s,unconstrained:a}}function T(t,e){if(!1!==e)if(!0===e||o(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=f(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!o(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function _(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function B(t,e){if(!o(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function q(t,e){if(!function(t){return o(t)&&"function"==typeof t.from}(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function X(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function Y(t,e){t.documentElement=e}function I(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function W(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(r){t.cssClasses[r]=t.cssPrefix+e[r]}))):t.cssClasses=e}function $(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:y,format:y},r={step:{r:!1,t:C},keyboardPageMultiplier:{r:!1,t:N},keyboardMultiplier:{r:!1,t:P},keyboardDefaultStep:{r:!1,t:V},start:{r:!0,t:A},connect:{r:!0,t:O},direction:{r:!0,t:F},snap:{r:!1,t:U},animate:{r:!1,t:M},animationDuration:{r:!1,t:D},range:{r:!0,t:k},orientation:{r:!1,t:L},margin:{r:!1,t:z},limit:{r:!1,t:j},padding:{r:!1,t:H},behaviour:{r:!0,t:R},ariaFormat:{r:!1,t:B},format:{r:!1,t:q},tooltips:{r:!1,t:T},keyboardSupport:{r:!0,t:X},documentElement:{r:!1,t:Y},cssPrefix:{r:!0,t:I},cssClasses:{r:!0,t:W},handleAttributes:{r:!1,t:_}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:w,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach((function(i){if(a(t[i])||void 0!==n[i])r[i].t(e,a(t[i])?t[i]:n[i]);else if(r[i].r)throw new Error("noUiSlider: '"+i+"' is required.")})),e.pips=t.pips;var i=document.createElement("div"),o=void 0!==i.style.msTransform,s=void 0!==i.style.transform;return e.transformRule=s?"transform":o?"msTransform":"webkitTransform",e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function G(t,e,r){var o,u,h,v,b,S,x,y=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),C=t,N=e.spectrum,P=[],V=[],k=[],A=0,U={},M=t.ownerDocument,D=e.documentElement||M.documentElement,O=M.body,L="rtl"===M.dir||1===e.ort?0:100;function z(t,e){var r=M.createElement("div");return e&&d(r,e),t.appendChild(r),r}function j(t,r){var n=z(t,e.cssClasses.origin),i=z(n,e.cssClasses.handle);if(z(i,e.cssClasses.touchArea),i.setAttribute("data-handle",String(r)),e.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",(function(t){return function(t,r){if(R()||T(r))return!1;var n=["Left","Right"],i=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(i.reverse(),o.reverse());var a,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===i[0]||l===n[0]||u,f=l===i[1]||l===n[1]||c,h=l===s[1];if(!(p||f||l===s[0]||h))return!0;if(t.preventDefault(),f||p){var d=p?0:1,m=ht(r)[d];if(null===m)return!1;!1===m&&(m=N.getDefaultStep(V[r],p,e.keyboardDefaultStep)),m*=c||u?e.keyboardPageMultiplier:e.keyboardMultiplier,m=Math.max(m,1e-7),m*=p?-1:1,a=P[r]+m}else a=h?e.spectrum.xVal[e.spectrum.xVal.length-1]:e.spectrum.xVal[0];return lt(r,N.toStepping(a),!0,!0),rt("slide",r),rt("update",r),rt("change",r),rt("set",r),!1}(t,r)}))),void 0!==e.handleAttributes){var o=e.handleAttributes[r];Object.keys(o).forEach((function(t){i.setAttribute(t,o[t])}))}return i.setAttribute("role","slider"),i.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===r?d(i,e.cssClasses.handleLower):r===e.handles-1&&d(i,e.cssClasses.handleUpper),n.handle=i,n}function H(t,r){return!!r&&z(t,e.cssClasses.connect)}function F(t,r){return!(!e.tooltips||!e.tooltips[r])&&z(t.firstChild,e.cssClasses.tooltip)}function R(){return C.hasAttribute("disabled")}function T(t){return u[t].hasAttribute("disabled")}function _(){b&&(et("update"+E.tooltips),b.forEach((function(t){t&&s(t)})),b=null)}function B(){_(),b=u.map(F),tt("update"+E.tooltips,(function(t,r,n){if(b&&e.tooltips&&!1!==b[r]){var i=t[r];!0!==e.tooltips[r]&&(i=e.tooltips[r].to(n[r])),b[r].innerHTML=i}}))}function q(t,e){return t.map((function(t){return N.fromStepping(e?N.getStep(t):t)}))}function X(){v&&(s(v),v=null)}function Y(t){X();var r=function(t){var e,r=function(t){if(t.mode===n.Range||t.mode===n.Steps)return N.xVal;if(t.mode===n.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,i=[];e--;)i[e]=e*r;return i.push(100),q(i,t.stepped)}return t.mode===n.Positions?q(t.values,t.stepped):t.mode===n.Values?t.stepped?t.values.map((function(t){return N.fromStepping(N.getStep(N.toStepping(t)))})):t.values:[]}(t),o={},s=N.xVal[0],a=N.xVal[N.xVal.length-1],l=!1,u=!1,c=0;return e=r.slice().sort((function(t,e){return t-e})),(r=e.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==s&&(r.unshift(s),l=!0),r[r.length-1]!==a&&(r.push(a),u=!0),r.forEach((function(e,s){var a,p,f,h,d,m,g,v,b,S,x=e,y=r[s+1],w=t.mode===n.Steps;for(w&&(a=N.xNumSteps[s]),a||(a=y-x),void 0===y&&(y=x),a=Math.max(a,1e-7),p=x;p<=y;p=Number((p+a).toFixed(7))){for(v=(d=(h=N.toStepping(p))-c)/(t.density||1),S=d/(b=Math.round(v)),f=1;f<=b;f+=1)o[(m=c+f*S).toFixed(5)]=[N.fromStepping(m),0];g=r.indexOf(p)>-1?i.LargeValue:w?i.SmallValue:i.NoValue,!s&&l&&p!==y&&(g=0),p===y&&u||(o[h.toFixed(5)]=[p,g]),c=h}})),o}(t),o=t.filter,s=t.format||{to:function(t){return String(Math.round(t))}};return v=C.appendChild(function(t,r,n){var o,s,a=M.createElement("div"),l=((o={})[i.None]="",o[i.NoValue]=e.cssClasses.valueNormal,o[i.LargeValue]=e.cssClasses.valueLarge,o[i.SmallValue]=e.cssClasses.valueSub,o),u=((s={})[i.None]="",s[i.NoValue]=e.cssClasses.markerNormal,s[i.LargeValue]=e.cssClasses.markerLarge,s[i.SmallValue]=e.cssClasses.markerSub,s),c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],p=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];function f(t,r){var n=r===e.cssClasses.value,i=n?l:u;return r+" "+(n?c:p)[e.ort]+" "+i[t]}return d(a,e.cssClasses.pips),d(a,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(t).forEach((function(o){!function(t,o,s){if((s=r?r(o,s):s)!==i.None){var l=z(a,!1);l.className=f(s,e.cssClasses.marker),l.style[e.style]=t+"%",s>i.NoValue&&((l=z(a,!1)).className=f(s,e.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[e.style]=t+"%",l.innerHTML=String(n.to(o)))}}(o,t[o][0],t[o][1])})),a}(r,o,s))}function I(){var t=o.getBoundingClientRect(),r="offset"+["Width","Height"][e.ort];return 0===e.ort?t.width||o[r]:t.height||o[r]}function W(t,r,n,i){var o=function(o){var s,a,l=function(t,e,r){var n=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),s=0,a=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){var n=e.target;return n===r||r.contains(n)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;s=u[0].pageX,a=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;s=c.pageX,a=c.pageY}}return e=e||g(M),(i||o)&&(s=t.clientX+e.x,a=t.clientY+e.y),t.pageOffset=e,t.points=[s,a],t.cursor=i||o,t}(o,i.pageOffset,i.target||r);return!!l&&!(R()&&!i.doNotReject)&&(s=C,a=e.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!i.doNotReject)&&!(t===y.start&&void 0!==l.buttons&&l.buttons>1)&&(!i.hover||!l.buttons)&&(w||l.preventDefault(),l.calcPoint=l.points[e.ort],void n(l,i)))},s=[];return t.split(" ").forEach((function(t){r.addEventListener(t,o,!!w&&{passive:!0}),s.push([t,o])})),s}function G(t){var r,n,i,s,a,l,u=100*(t-(r=o,n=e.ort,i=r.getBoundingClientRect(),a=(s=r.ownerDocument).documentElement,l=g(s),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),n?i.top+l.y-a.clientTop:i.left+l.x-a.clientLeft))/I();return u=p(u),e.dir?100-u:u}function J(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&Q(t,e)}function K(t,r){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==r.buttonsProperty)return Q(t,r);var n=(e.dir?-1:1)*(t.calcPoint-r.startCalcPoint);ot(n>0,100*n/r.baseSize,r.locations,r.handleNumbers,r.connect)}function Q(t,r){r.handle&&(m(r.handle,e.cssClasses.active),A-=1),r.listeners.forEach((function(t){D.removeEventListener(t[0],t[1])})),0===A&&(m(C,e.cssClasses.drag),at(),t.cursor&&(O.style.cursor="",O.removeEventListener("selectstart",l))),e.events.smoothSteps&&(r.handleNumbers.forEach((function(t){lt(t,V[t],!0,!0,!1,!1)})),r.handleNumbers.forEach((function(t){rt("update",t)}))),r.handleNumbers.forEach((function(t){rt("change",t),rt("set",t),rt("end",t)}))}function Z(t,r){if(!r.handleNumbers.some(T)){var n;1===r.handleNumbers.length&&(n=u[r.handleNumbers[0]].children[0],A+=1,d(n,e.cssClasses.active)),t.stopPropagation();var i=[],o=W(y.move,D,K,{target:t.target,handle:n,connect:r.connect,listeners:i,startCalcPoint:t.calcPoint,baseSize:I(),pageOffset:t.pageOffset,handleNumbers:r.handleNumbers,buttonsProperty:t.buttons,locations:V.slice()}),s=W(y.end,D,Q,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:r.handleNumbers}),a=W("mouseout",D,J,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:r.handleNumbers});i.push.apply(i,o.concat(s,a)),t.cursor&&(O.style.cursor=getComputedStyle(t.target).cursor,u.length>1&&d(C,e.cssClasses.drag),O.addEventListener("selectstart",l,!1)),r.handleNumbers.forEach((function(t){rt("start",t)}))}}function tt(t,e){U[t]=U[t]||[],U[t].push(e),"update"===t.split(".")[0]&&u.forEach((function(t,e){rt("update",e)}))}function et(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(U).forEach((function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||function(t){return t===E.aria||t===E.tooltips}(i)&&r!==i||delete U[t]}))}function rt(t,r,n){Object.keys(U).forEach((function(i){var o=i.split(".")[0];t===o&&U[i].forEach((function(t){t.call(dt,P.map(e.format.to),r,P.slice(),n||!1,V.slice(),dt)}))}))}function nt(t,r,n,i,o,s,a){var l;return u.length>1&&!e.events.unconstrained&&(i&&r>0&&(l=N.getAbsoluteDistance(t[r-1],e.margin,!1),n=Math.max(n,l)),o&&r<u.length-1&&(l=N.getAbsoluteDistance(t[r+1],e.margin,!0),n=Math.min(n,l))),u.length>1&&e.limit&&(i&&r>0&&(l=N.getAbsoluteDistance(t[r-1],e.limit,!1),n=Math.min(n,l)),o&&r<u.length-1&&(l=N.getAbsoluteDistance(t[r+1],e.limit,!0),n=Math.max(n,l))),e.padding&&(0===r&&(l=N.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,l)),r===u.length-1&&(l=N.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,l))),a||(n=N.getStep(n)),!((n=p(n))===t[r]&&!s)&&n}function it(t,r){var n=e.ort;return(n?r:t)+", "+(n?t:r)}function ot(t,r,n,i,o){var s=n.slice(),a=i[0],l=e.events.smoothSteps,u=[!t,t],c=[t,!t];i=i.slice(),t&&i.reverse(),i.length>1?i.forEach((function(t,e){var n=nt(s,t,s[t]+r,u[e],c[e],!1,l);!1===n?r=0:(r=n-s[t],s[t]=n)})):u=c=[!0];var p=!1;i.forEach((function(t,e){p=lt(t,n[t]+r,u[e],c[e],!1,l)||p})),p&&(i.forEach((function(t){rt("update",t),rt("slide",t)})),null!=o&&rt("drag",a))}function st(t,r){return e.dir?100-t-r:t}function at(){k.forEach((function(t){var e=V[t]>50?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=String(r)}))}function lt(t,r,n,i,o,s){return o||(r=nt(V,t,r,n,i,!1,s)),!1!==r&&(function(t,r){V[t]=r,P[t]=N.fromStepping(r);var n="translate("+it(st(r,0)-L+"%","0")+")";u[t].style[e.transformRule]=n,ut(t),ut(t+1)}(t,r),!0)}function ut(t){if(h[t]){var r=0,n=100;0!==t&&(r=V[t-1]),t!==h.length-1&&(n=V[t]);var i=n-r,o="translate("+it(st(r,i)+"%","0")+")",s="scale("+it(i/100,"1")+")";h[t].style[e.transformRule]=o+" "+s}}function ct(t,r){return null===t||!1===t||void 0===t?V[r]:("number"==typeof t&&(t=String(t)),!1!==(t=e.format.from(t))&&(t=N.toStepping(t)),!1===t||isNaN(t)?V[r]:t)}function pt(t,r,n){var i=f(t),o=void 0===V[0];r=void 0===r||r,e.animate&&!o&&c(C,e.cssClasses.tap,e.animationDuration),k.forEach((function(t){lt(t,ct(i[t],t),!0,!1,n)}));var s=1===k.length?0:1;if(o&&N.hasNoSize()&&(n=!0,V[0]=0,k.length>1)){var a=100/(k.length-1);k.forEach((function(t){V[t]=t*a}))}for(;s<k.length;++s)k.forEach((function(t){lt(t,V[t],!0,!0,n)}));at(),k.forEach((function(t){rt("update",t),null!==i[t]&&r&&rt("set",t)}))}function ft(t){if(void 0===t&&(t=!1),t)return 1===P.length?P[0]:P.slice(0);var r=P.map(e.format.to);return 1===r.length?r[0]:r}function ht(t){var r=V[t],n=N.getNearbySteps(r),i=P[t],o=n.thisStep.step,s=null;if(e.snap)return[i-n.stepBefore.startValue||null,n.stepAfter.startValue-i||null];!1!==o&&i+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-i),s=i>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&i-n.stepBefore.highestStep,100===r?o=null:0===r&&(s=null);var a=N.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}d(S=C,e.cssClasses.target),0===e.dir?d(S,e.cssClasses.ltr):d(S,e.cssClasses.rtl),0===e.ort?d(S,e.cssClasses.horizontal):d(S,e.cssClasses.vertical),d(S,"rtl"===getComputedStyle(S).direction?e.cssClasses.textDirectionRtl:e.cssClasses.textDirectionLtr),o=z(S,e.cssClasses.base),function(t,r){var n=z(r,e.cssClasses.connects);u=[],(h=[]).push(H(n,t[0]));for(var i=0;i<e.handles;i++)u.push(j(r,i)),k[i]=i,h.push(H(n,t[i+1]))}(e.connect,o),(x=e.events).fixed||u.forEach((function(t,e){W(y.start,t.children[0],Z,{handleNumbers:[e]})})),x.tap&&W(y.start,o,(function(t){t.stopPropagation();var r=G(t.calcPoint),n=function(t){var e=100,r=!1;return u.forEach((function(n,i){if(!T(i)){var o=V[i],s=Math.abs(o-t);(s<e||s<=e&&t>o||100===s&&100===e)&&(r=i,e=s)}})),r}(r);!1!==n&&(e.events.snap||c(C,e.cssClasses.tap,e.animationDuration),lt(n,r,!0,!0),at(),rt("slide",n,!0),rt("update",n,!0),e.events.snap?Z(t,{handleNumbers:[n]}):(rt("change",n,!0),rt("set",n,!0)))}),{}),x.hover&&W(y.move,o,(function(t){var e=G(t.calcPoint),r=N.getStep(e),n=N.fromStepping(r);Object.keys(U).forEach((function(t){"hover"===t.split(".")[0]&&U[t].forEach((function(t){t.call(dt,n)}))}))}),{hover:!0}),x.drag&&h.forEach((function(t,r){if(!1!==t&&0!==r&&r!==h.length-1){var n=u[r-1],i=u[r],o=[t],s=[n,i],a=[r-1,r];d(t,e.cssClasses.draggable),x.fixed&&(o.push(n.children[0]),o.push(i.children[0])),x.dragAll&&(s=u,a=k),o.forEach((function(e){W(y.start,e,Z,{handles:s,handleNumbers:a,connect:t})}))}})),pt(e.start),e.pips&&Y(e.pips),e.tooltips&&B(),et("update"+E.aria),tt("update"+E.aria,(function(t,r,n,i,o){k.forEach((function(t){var r=u[t],i=nt(V,t,0,!0,!0,!0),s=nt(V,t,100,!0,!0,!0),a=o[t],l=String(e.ariaFormat.to(n[t]));i=N.fromStepping(i).toFixed(1),s=N.fromStepping(s).toFixed(1),a=N.fromStepping(a).toFixed(1),r.children[0].setAttribute("aria-valuemin",i),r.children[0].setAttribute("aria-valuemax",s),r.children[0].setAttribute("aria-valuenow",a),r.children[0].setAttribute("aria-valuetext",l)}))}));var dt={destroy:function(){for(et(E.aria),et(E.tooltips),Object.keys(e.cssClasses).forEach((function(t){m(C,e.cssClasses[t])}));C.firstChild;)C.removeChild(C.firstChild);delete C.noUiSlider},steps:function(){return k.map(ht)},on:tt,off:et,get:ft,set:pt,setHandle:function(t,e,r,n){if(!((t=Number(t))>=0&&t<k.length))throw new Error("noUiSlider: invalid handle number, got: "+t);lt(t,ct(e,t),!0,!0,n),rt("update",t),r&&rt("set",t)},reset:function(t){pt(e.start,t)},disable:function(t){null!=t?(u[t].setAttribute("disabled",""),u[t].handle.removeAttribute("tabindex")):(C.setAttribute("disabled",""),u.forEach((function(t){t.handle.removeAttribute("tabindex")})))},enable:function(t){null!=t?(u[t].removeAttribute("disabled"),u[t].handle.setAttribute("tabindex","0")):(C.removeAttribute("disabled"),u.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))},__moveHandles:function(t,e,r){ot(t,e,V,r)},options:r,updateOptions:function(t,n){var i=ft(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(r[e]=t[e])}));var s=$(r);o.forEach((function(r){void 0!==t[r]&&(e[r]=s[r])})),N=s.spectrum,e.margin=s.margin,e.limit=s.limit,e.padding=s.padding,e.pips?Y(e.pips):X(),e.tooltips?B():_(),V=[],pt(a(t.start)?t.start:i,n)},target:C,removePips:X,removeTooltips:_,getPositions:function(){return V.slice()},getTooltips:function(){return b},getOrigins:function(){return u},pips:Y};return dt}function J(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=G(t,$(e),e);return t.noUiSlider=r,r}const K={__spectrum:x,cssClasses:w,create:J}}}]);