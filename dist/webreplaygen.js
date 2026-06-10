(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{attentionMarkers:()=>en,contentInitial:()=>Qt,disable:()=>tn,document:()=>Kt,flow:()=>Jt,flowInitial:()=>Zt,insideSpan:()=>Gt,string:()=>Xt,text:()=>Yt});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=window,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new s(n,e,r)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,r))(t)})(e):e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var c;const u=window,h=u.trustedTypes,d=h?h.emptyScript:"",p=u.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},m=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m},v="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Ep(n,t);void 0!==i&&(this._$Ev.set(i,n),e.push(i))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),r=n.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=g){var i;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:f).toAttribute(t,n.type);this._$El=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:f;this._$El=r,this[r]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;b[v]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:b}),(null!==(c=u.reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.6.2");const x=window,_=x.trustedTypes,k=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,w="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,A="?"+S,$=`<${A}>`,C=document,E=()=>C.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,I=e=>M(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),z="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,O=/>/g,D=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,B=/"/g,j=/^(?:script|style|textarea|title)$/i,R=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),N=R(1),U=R(2),V=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),q=new WeakMap,W=C.createTreeWalker(C,129,null,!1),K=(e,t)=>{const n=e.length-1,i=[];let r,o=2===t?"<svg>":"",s=L;for(let t=0;t<n;t++){const n=e[t];let l,a,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,a=s.exec(n),null!==a);)u=s.lastIndex,s===L?"!--"===a[1]?s=T:void 0!==a[1]?s=O:void 0!==a[2]?(j.test(a[2])&&(r=RegExp("</"+a[2],"g")),s=D):void 0!==a[3]&&(s=D):s===D?">"===a[0]?(s=null!=r?r:L,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?D:'"'===a[3]?B:P):s===B||s===P?s=D:s===T||s===O?s=L:(s=D,r=void 0);const h=s===D&&e[t+1].startsWith("/>")?" ":"";o+=s===L?n+$:c>=0?(i.push(l),n.slice(0,c)+w+n.slice(c)+S+h):n+S+(-2===c?(i.push(void 0),t):h)}const l=o+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(l):l,i]};class Q{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0;const s=e.length-1,l=this.parts,[a,c]=K(e,t);if(this.el=Q.createElement(a,n),W.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=W.nextNode())&&l.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith(w)||t.startsWith(S)){const n=c[o++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+w).split(S),t=/([.?@])?(.*)/.exec(n);l.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?te:"@"===t[1]?ne:Y})}else l.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(j.test(i.tagName)){const e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=_?_.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],E()),W.nextNode(),l.push({type:2,index:++r});i.append(e[t],E())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(S,e+1));)l.push({type:7,index:r}),e+=S.length-1}r++}}static createElement(e,t){const n=C.createElement("template");return n.innerHTML=e,n}}function Z(e,t,n=e,i){var r,o,s,l;if(t===V)return t;let a=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const c=F(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,n,i)),void 0!==i?(null!==(s=(l=n)._$Co)&&void 0!==s?s:l._$Co=[])[i]=a:n._$Cl=a),void 0!==a&&(t=Z(e,a._$AS(e,t.values),a,i)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(n,!0);W.currentNode=r;let o=W.nextNode(),s=0,l=0,a=i[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new X(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new ie(o,this,e)),this._$AV.push(t),a=i[++l]}s!==(null==a?void 0:a.index)&&(o=W.nextNode(),s++)}return W.currentNode=C,r}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class X{constructor(e,t,n,i){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),F(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):I(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(n);else{const e=new J(r,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Q(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new X(this.k(E()),this.k(E()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,n,i,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let o=!1;if(void 0===r)e=Z(this,e,t,0),o=!F(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const i=e;let s,l;for(e=r[0],s=0;s<r.length-1;s++)l=Z(this,i[n+s],t,s),l===V&&(l=this._$AH[s]),o||(o=!F(l)||l!==this._$AH[s]),l===H?e=H:e!==H&&(e+=(null!=l?l:"")+r[s+1]),this._$AH[s]=l}o&&!i&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const ee=_?_.emptyScript:"";class te extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ne extends Y{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Z(this,e,t,0))&&void 0!==n?n:H)===V)return;const i=this._$AH,r=e===H&&i!==H||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const re={O:w,P:S,A,C:1,M:K,L:J,D:I,R:Z,I:X,V:Y,H:te,N:ne,U:G,F:ie},oe=x.litHtmlPolyfillSupport;null==oe||oe(Q,X),(null!==(y=x.litHtmlVersions)&&void 0!==y?y:x.litHtmlVersions=[]).push("2.7.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var se,le;class ae extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var i,r;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let s=o._$litPart$;if(void 0===s){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new X(t.insertBefore(E(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return V}}ae.finalized=!0,ae._$litElement$=!0,null===(se=globalThis.litElementHydrateSupport)||void 0===se||se.call(globalThis,{LitElement:ae});const ce=globalThis.litElementPolyfillSupport;null==ce||ce({LitElement:ae});(null!==(le=globalThis.litElementVersions)&&void 0!==le?le:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=Symbol.for(""),he=e=>{if((null==e?void 0:e.r)===ue)return null==e?void 0:e._$litStatic$},de=new Map,pe=e=>(t,...n)=>{const i=n.length;let r,o;const s=[],l=[];let a,c=0,u=!1;for(;c<i;){for(a=t[c];c<i&&void 0!==(o=n[c],r=he(o));)a+=r+t[++c],u=!0;c!==i&&l.push(o),s.push(a),c++}if(c===i&&s.push(t[i]),u){const e=s.join("$$lit$$");void 0===(t=de.get(e))&&(s.raw=s,de.set(e,t=s)),n=l}return e(t,...n)},fe=pe(N);pe(U);class me{constructor({title:e,logoSrc:t=""}){this.title=e||"Web Archives",this.logoSrc=t}}class ge{constructor({name:e,url:t="",description:n=""}){this.url=t,this.description=n,this.name=e||t.slice(t.lastIndexOf("/")+1,t.lastIndexOf("."))}}class ve{constructor({embed:e,replayBase:t}){this.embed=e||"embed",this.replayBase=t||"../replay/"}}function be(e,t){let n,i;if("string"==typeof e?i=e:"object"==typeof e&&e.constructor===Object&&e.name&&e.url&&(n=e.name,i=e.url),i)return new ge({name:n,url:i,description:e.description});console.error(`Invalid WACZ data at index ${t||"unknown"}, skipping`)}class ye{constructor(e){this.inited=this.load(e+"wrg-config.json")}async load(e){const t=await fetch(e),n=await t.json();this.init(n)}init({site:e,replay:t,archives:n}){this.site=new me(e||{}),this.replay=new ve(t||{}),this.archives=(n||[]).map(be)}}let xe=null;const _e=async function(e){return xe||(xe=new ye(e)),await xe.inited,xe},ke=document.createElement("i");function we(e){const t="&"+e+";";ke.innerHTML=t;const n=ke.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}function Se(e,t,n,i){const r=e.length;let o,s=0;if(t=t<0?-t>r?0:r+t:t>r?r:t,n=n>0?n:0,i.length<1e4)o=Array.from(i),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);s<i.length;)o=i.slice(s,s+1e4),o.unshift(t,0),e.splice(...o),s+=1e4,t+=1e4}function Ae(e,t){return e.length>0?(Se(e,e.length,0,t),e):t}const $e={}.hasOwnProperty;function Ce(e,t){let n;for(n in t){const i=($e.call(e,n)?e[n]:void 0)||(e[n]={}),r=t[n];let o;if(r)for(o in r){$e.call(i,o)||(i[o]=[]);const e=r[o];Ee(i[o],Array.isArray(e)?e:e?[e]:[])}}}function Ee(e,t){let n=-1;const i=[];for(;++n<t.length;)("after"===t[n].add?e:i).push(t[n]);Se(e,0,0,i)}function Fe(e,t){let n;for(n in t){const i=($e.call(e,n)?e[n]:void 0)||(e[n]={}),r=t[n];let o;if(r)for(o in r)i[o]=r[o]}}const Me={'"':"quot","&":"amp","<":"lt",">":"gt"};function Ie(e){return e.replace(/["&<>]/g,(function(e){return"&"+Me[e]+";"}))}function ze(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Le=qe(/[A-Za-z]/),Te=qe(/[\dA-Za-z]/),Oe=qe(/[#-'*+\--9=?A-Z^-~]/);function De(e){return null!==e&&(e<32||127===e)}const Pe=qe(/\d/),Be=qe(/[\dA-Fa-f]/),je=qe(/[!-/:-@[-`{-~]/);function Re(e){return null!==e&&e<-2}function Ne(e){return null!==e&&(e<0||32===e)}function Ue(e){return-2===e||-1===e||32===e}const Ve=qe(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),He=qe(/\s/);function qe(e){return function(t){return null!==t&&e.test(String.fromCharCode(t))}}function We(e,t){const n=Ie(function(e){const t=[];let n=-1,i=0,r=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(37===o&&Te(e.charCodeAt(n+1))&&Te(e.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const t=e.charCodeAt(n+1);o<56320&&t>56319&&t<57344?(s=String.fromCharCode(o,t),r=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return t.join("")+e.slice(i)}(e||""));if(!t)return n;const i=n.indexOf(":"),r=n.indexOf("?"),o=n.indexOf("#"),s=n.indexOf("/");return i<0||s>-1&&i>s||r>-1&&i>r||o>-1&&i>o||t.test(n.slice(0,i))?n:""}const Ke={}.hasOwnProperty,Qe=/^(https?|ircs?|mailto|xmpp)$/i,Ze=/^https?$/i;function Je(e){const t=e||{};let n=!0;const i={},r=[[]],o=[],s=[],l=function(e){const t={};let n=-1;for(;++n<e.length;)Fe(t,e[n]);return t}([{enter:{blockQuote:function(){s.push(!1),y(),g("<blockquote>")},codeFenced:function(){y(),g("<pre><code"),d("fencesCount",0)},codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:function(){y(),g("<pre><code>")},codeText:function(){d("inCodeText",!0),g("<code>")},content:function(){d("slurpAllLineEndings",!0)},definition:function(){f(),o.push({})},definitionDestinationString:function(){f(),d("ignoreEncode",!0)},definitionLabelString:f,definitionTitleString:f,emphasis:function(){g("<em>")},htmlFlow:function(){y(),C()},htmlText:C,image:function(){o.push({image:!0}),n=void 0},label:f,link:function(){o.push({})},listItemMarker:function(){p("expectFirstItem")?g(">"):_();y(),g("<li>"),d("expectFirstItem"),d("lastWasTag")},listItemValue:function(e){if(p("expectFirstItem")){const t=Number.parseInt(this.sliceSerialize(e),10);1!==t&&g(' start="'+x(String(t))+'"')}},listOrdered:function(e){s.push(!e._loose),y(),g("<ol"),d("expectFirstItem",!0)},listUnordered:function(e){s.push(!e._loose),y(),g("<ul"),d("expectFirstItem",!0)},paragraph:function(){s[s.length-1]||(y(),g("<p>"));d("slurpAllLineEndings")},reference:f,resource:function(){f(),o[o.length-1].destination=""},resourceDestinationString:function(){f(),d("ignoreEncode",!0)},resourceTitleString:f,setextHeading:function(){f(),d("slurpAllLineEndings")},strong:function(){g("<strong>")}},exit:{atxHeading:function(){g("</h"+p("headingRank")+">"),d("headingRank")},atxHeadingSequence:function(e){if(p("headingRank"))return;d("headingRank",this.sliceSerialize(e).length),y(),g("<h"+p("headingRank")+">")},autolinkEmail:function(e){const t=this.sliceSerialize(e);g('<a href="'+We("mailto:"+t)+'">'),v(x(t)),g("</a>")},autolinkProtocol:function(e){const n=this.sliceSerialize(e);g('<a href="'+We(n,t.allowDangerousProtocol?void 0:Qe)+'">'),v(x(n)),g("</a>")},blockQuote:function(){s.pop(),y(),g("</blockquote>"),d("slurpAllLineEndings")},characterEscapeValue:S,characterReferenceMarkerHexadecimal:E,characterReferenceMarkerNumeric:E,characterReferenceValue:function(e){let t=this.sliceSerialize(e);t=p("characterReferenceType")?function(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535==(65535&n)||65534==(65535&n)||n>1114111?"�":String.fromCharCode(n)}(t,"characterReferenceMarkerNumeric"===p("characterReferenceType")?10:16):we(t),v(x(t)),d("characterReferenceType")},codeFenced:k,codeFencedFence:function(){const e=p("fencesCount")||0;e||(g(">"),d("slurpOneLineEnding",!0));d("fencesCount",e+1)},codeFencedFenceInfo:function(){g(' class="language-'+m()+'"')},codeFencedFenceMeta:m,codeFlowValue:function(e){v(x(this.sliceSerialize(e))),d("flowCodeSeenData",!0)},codeIndented:k,codeText:function(){d("inCodeText"),g("</code>")},codeTextData:S,data:S,definition:function(){const e=ze(o[o.length-1].labelId);m(),Ke.call(i,e)||(i[e]=o[o.length-1]);o.pop()},definitionDestinationString:function(){o[o.length-1].destination=m(),d("ignoreEncode")},definitionLabelString:function(e){m(),o[o.length-1].labelId=this.sliceSerialize(e)},definitionTitleString:function(){o[o.length-1].title=m()},emphasis:function(){g("</em>")},hardBreakEscape:A,hardBreakTrailing:A,htmlFlow:$,htmlFlowData:S,htmlText:$,htmlTextData:S,image:w,label:function(){o[o.length-1].label=m()},labelText:function(e){o[o.length-1].labelId=this.sliceSerialize(e)},lineEnding:function(e){if(p("slurpAllLineEndings"))return;if(p("slurpOneLineEnding"))return void d("slurpOneLineEnding");if(p("inCodeText"))return void v(" ");v(x(this.sliceSerialize(e)))},link:w,listOrdered:function(){_(),s.pop(),b(),g("</ol>")},listUnordered:function(){_(),s.pop(),b(),g("</ul>")},paragraph:function(){s[s.length-1]?d("slurpAllLineEndings",!0):g("</p>")},reference:m,referenceString:function(e){o[o.length-1].referenceId=this.sliceSerialize(e)},resource:m,resourceDestinationString:function(){o[o.length-1].destination=m(),d("ignoreEncode")},resourceTitleString:function(){o[o.length-1].title=m()},setextHeading:function(){const e=m();y(),g("<h"+p("headingRank")+">"),v(e),g("</h"+p("headingRank")+">"),d("slurpAllLineEndings"),d("headingRank")},setextHeadingLineSequence:function(e){d("headingRank",61===this.sliceSerialize(e).charCodeAt(0)?1:2)},setextHeadingText:function(){d("slurpAllLineEndings",!0)},strong:function(){g("</strong>")},thematicBreak:function(){y(),g("<hr />")}}}].concat(t.htmlExtensions||[])),a={tightStack:s,definitions:i},c={lineEndingIfNeeded:y,options:t,encode:x,raw:v,tag:g,buffer:f,resume:m,setData:d,getData:p};let u=t.defaultLineEnding;return function(e){let t=-1,n=0;const i=[];let o=[],s=[];for(;++t<e.length;)u||"lineEnding"!==e[t][1].type&&"lineEndingBlank"!==e[t][1].type||(u=e[t][2].sliceSerialize(e[t][1])),"listOrdered"!==e[t][1].type&&"listUnordered"!==e[t][1].type||("enter"===e[t][0]?i.push(t):h(e.slice(i.pop(),t))),"definition"===e[t][1].type&&("enter"===e[t][0]?(s=Ae(s,e.slice(n,t)),n=t):(o=Ae(o,e.slice(n,t+1)),n=t+1));o=Ae(o,s),o=Ae(o,e.slice(n)),t=-1;const a=o;l.enter.null&&l.enter.null.call(c);for(;++t<e.length;){const e=l[a[t][0]],n=a[t][1].type,i=e[n];Ke.call(e,n)&&i&&i.call(Object.assign({sliceSerialize:a[t][2].sliceSerialize},c),a[t][1])}l.exit.null&&l.exit.null.call(c);return r[0].join("")};function h(e){const t=e.length;let n,i=0,r=0,o=!1;for(;++i<t;){const t=e[i];if(t[1]._container)n=void 0,"enter"===t[0]?r++:r--;else switch(t[1].type){case"listItemPrefix":"exit"===t[0]&&(n=!0);break;case"linePrefix":break;case"lineEndingBlank":"enter"!==t[0]||r||(n?n=void 0:o=!0);break;default:n=void 0}}e[0][1]._loose=o}function d(e,t){a[e]=t}function p(e){return a[e]}function f(){r.push([])}function m(){return r.pop().join("")}function g(e){n&&(d("lastWasTag",!0),r[r.length-1].push(e))}function v(e){d("lastWasTag"),r[r.length-1].push(e)}function b(){v(u||"\n")}function y(){const e=r[r.length-1],t=e[e.length-1],n=t?t.charCodeAt(t.length-1):null;10!==n&&13!==n&&null!==n&&b()}function x(e){return p("ignoreEncode")?e:Ie(e)}function _(){p("lastWasTag")&&!p("slurpAllLineEndings")&&y(),g("</li>"),d("slurpAllLineEndings")}function k(){const e=p("fencesCount");void 0!==e&&e<2&&a.tightStack.length>0&&!p("lastWasTag")&&b(),p("flowCodeSeenData")&&y(),g("</code></pre>"),void 0!==e&&e<2&&y(),d("flowCodeSeenData"),d("fencesCount"),d("slurpOneLineEnding")}function w(){let e=o.length-1;const r=o[e],s=r.referenceId||r.labelId,l=void 0===r.destination?i[ze(s)]:r;for(n=!0;e--;)if(o[e].image){n=void 0;break}r.image?(g('<img src="'+We(l.destination,t.allowDangerousProtocol?void 0:Ze)+'" alt="'),v(r.label),g('"')):g('<a href="'+We(l.destination,t.allowDangerousProtocol?void 0:Qe)+'"'),g(l.title?' title="'+l.title+'"':""),r.image?g(" />"):(g(">"),v(r.label),g("</a>")),o.pop()}function S(e){v(x(this.sliceSerialize(e)))}function A(){g("<br />")}function $(){d("ignoreEncode")}function C(){t.allowDangerousHtml&&d("ignoreEncode",!0)}function E(e){d("characterReferenceType",e.type)}}function Xe(e,t,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return function(i){if(Ue(i))return e.enter(n),s(i);return t(i)};function s(i){return Ue(i)&&o++<r?(e.consume(i),s):(e.exit(n),t(i))}}const Ye={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Xe(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),i(t)}));let n;return t;function i(t){const i=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=i),n=i,r(t)}function r(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):Re(t)?(e.consume(t),e.exit("chunkText"),i):(e.consume(t),r)}}};const Ge={tokenize:function(e){const t=this,n=[];let i,r,o,s=0;return l;function l(i){if(s<n.length){const r=n[s];return t.containerState=r[1],e.attempt(r[0].continuation,a,c)(i)}return c(i)}function a(e){if(s++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&b();const n=t.events.length;let r,o=n;for(;o--;)if("exit"===t.events[o][0]&&"chunkFlow"===t.events[o][1].type){r=t.events[o][1].end;break}v(s);let l=n;for(;l<t.events.length;)t.events[l][1].end=Object.assign({},r),l++;return Se(t.events,o+1,0,t.events.slice(n)),t.events.length=l,c(e)}return l(e)}function c(r){if(s===n.length){if(!i)return d(r);if(i.currentConstruct&&i.currentConstruct.concrete)return f(r);t.interrupt=Boolean(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(et,u,h)(r)}function u(e){return i&&b(),v(s),d(e)}function h(e){return t.parser.lazy[t.now().line]=s!==n.length,o=t.now().offset,f(e)}function d(n){return t.containerState={},e.attempt(et,p,f)(n)}function p(e){return s++,n.push([t.currentConstruct,t.containerState]),d(e)}function f(n){return null===n?(i&&b(),v(0),void e.consume(n)):(i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:r,_tokenizer:i}),m(n))}function m(n){return null===n?(g(e.exit("chunkFlow"),!0),v(0),void e.consume(n)):Re(n)?(e.consume(n),g(e.exit("chunkFlow")),s=0,t.interrupt=void 0,l):(e.consume(n),m)}function g(e,n){const l=t.sliceStream(e);if(n&&l.push(null),e.previous=r,r&&(r.next=e),r=e,i.defineSkip(e.start),i.write(l),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;const n=t.events.length;let r,l,a=n;for(;a--;)if("exit"===t.events[a][0]&&"chunkFlow"===t.events[a][1].type){if(r){l=t.events[a][1].end;break}r=!0}for(v(s),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},l),e++;Se(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function v(i){let r=n.length;for(;r-- >i;){const i=n[r];t.containerState=i[1],i[0].exit.call(t,e)}n.length=i}function b(){i.write([null]),r=void 0,i=void 0,t.containerState._closeFlow=void 0}}},et={tokenize:function(e,t,n){return Xe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const tt={tokenize:function(e,t,n){return function(t){return Ue(t)?Xe(e,i,"linePrefix")(t):i(t)};function i(e){return null===e||Re(e)?t(e):n(e)}},partial:!0};function nt(e){const t={};let n,i,r,o,s,l,a,c=-1;for(;++c<e.length;){for(;c in t;)c=t[c];if(n=e[c],c&&"chunkFlow"===n[1].type&&"listItemPrefix"===e[c-1][1].type&&(l=n[1]._tokenizer.events,r=0,r<l.length&&"lineEndingBlank"===l[r][1].type&&(r+=2),r<l.length&&"content"===l[r][1].type))for(;++r<l.length&&"content"!==l[r][1].type;)"chunkText"===l[r][1].type&&(l[r][1]._isInFirstContentOfListItem=!0,r++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,it(e,c)),c=t[c],a=!0);else if(n[1]._container){for(r=c,i=void 0;r--&&(o=e[r],"lineEnding"===o[1].type||"lineEndingBlank"===o[1].type);)"enter"===o[0]&&(i&&(e[i][1].type="lineEndingBlank"),o[1].type="lineEnding",i=r);i&&(n[1].end=Object.assign({},e[i][1].start),s=e.slice(i,c),s.unshift(n),Se(e,i,c-i+1,s))}}return!a}function it(e,t){const n=e[t][1],i=e[t][2];let r=t-1;const o=[],s=n._tokenizer||i.parser[n.contentType](n.start),l=s.events,a=[],c={};let u,h,d=-1,p=n,f=0,m=0;const g=[m];for(;p;){for(;e[++r][1]!==p;);o.push(r),p._tokenizer||(u=i.sliceStream(p),p.next||u.push(null),h&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(u),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=n;++d<l.length;)"exit"===l[d][0]&&"enter"===l[d-1][0]&&l[d][1].type===l[d-1][1].type&&l[d][1].start.line!==l[d][1].end.line&&(m=d+1,g.push(m),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),d=g.length;d--;){const t=l.slice(g[d],g[d+1]),n=o.pop();a.unshift([n,n+t.length-1]),Se(e,n,2,t)}for(d=-1;++d<a.length;)c[f+a[d][0]]=f+a[d][1],f+=a[d][1]-a[d][0]-1;return c}const rt={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(t)};function i(t){return null===t?r(t):Re(t)?e.check(ot,o,r)(t):(e.consume(t),i)}function r(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function o(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}},resolve:function(e){return nt(e),e}},ot={tokenize:function(e,t,n){const i=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Xe(e,r,"linePrefix")};function r(r){if(null===r||Re(r))return n(r);const o=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(r):e.interrupt(i.parser.constructs.flow,n,t)(r)}},partial:!0};const st={tokenize:function(e){const t=this,n=e.attempt(tt,(function(i){if(null===i)return void e.consume(i);return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,i,Xe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(rt,i)),"linePrefix")));return n;function i(i){if(null!==i)return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(i)}}};const lt={resolveAll:ht()},at=ut("string"),ct=ut("text");function ut(e){return{tokenize:function(t){const n=this,i=this.parser.constructs[e],r=t.attempt(i,o,s);return o;function o(e){return a(e)?r(e):s(e)}function s(e){if(null!==e)return t.enter("data"),t.consume(e),l;t.consume(e)}function l(e){return a(e)?(t.exit("data"),r(e)):(t.consume(e),l)}function a(e){if(null===e)return!0;const t=i[e];let r=-1;if(t)for(;++r<t.length;){const e=t[r];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:ht("text"===e?dt:void 0)}}function ht(e){return function(t,n){let i,r=-1;for(;++r<=t.length;)void 0===i?t[r]&&"data"===t[r][1].type&&(i=r,r++):t[r]&&"data"===t[r][1].type||(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function dt(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const i=e[n-1][1],r=t.sliceStream(i);let o,s=r.length,l=-1,a=0;for(;s--;){const e=r[s];if("string"==typeof e){for(l=e.length;32===e.charCodeAt(l-1);)a++,l--;if(l)break;l=-1}else if(-2===e)o=!0,a++;else if(-1!==e){s++;break}}if(a){const r={type:n===e.length||o||a<2?"lineSuffix":"hardBreakTrailing",start:{line:i.end.line,column:i.end.column-a,offset:i.end.offset-a,_index:i.start._index+s,_bufferIndex:s?l:i.start._bufferIndex+l},end:Object.assign({},i.end)};i.end=Object.assign({},r.start),i.start.offset===i.end.offset?Object.assign(i,r):(e.splice(n,0,["enter",r,t],["exit",r,t]),n+=2)}n++}return e}function pt(e,t,n){const i=[];let r=-1;for(;++r<e.length;){const o=e[r].resolveAll;o&&!i.includes(o)&&(t=o(t,n),i.push(o))}return t}function ft(e,t,n){let i=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const r={},o=[];let s=[],l=[],a=!0;const c={consume:function(e){Re(e)?(i.line++,i.column=1,i.offset+=-3===e?2:1,x()):-1!==e&&(i.column++,i.offset++);i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++));u.previous=e,a=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=f(),u.events.push(["enter",n,u]),l.push(n),n},exit:function(e){const t=l.pop();return t.end=f(),u.events.push(["exit",t,u]),t},attempt:b((function(e,t){y(e,t.from)})),check:b(v),interrupt:b(v,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:function(e,t){return function(e,t){let n=-1;const i=[];let r;for(;++n<e.length;){const o=e[n];let s;if("string"==typeof o)s=o;else switch(o){case-5:s="\r";break;case-4:s="\n";break;case-3:s="\r\n";break;case-2:s=t?" ":"\t";break;case-1:if(!t&&r)continue;s=" ";break;default:s=String.fromCharCode(o)}r=-2===o,i.push(s)}return i.join("")}(p(e),t)},now:f,defineSkip:function(e){r[e.line]=e.column,x()},write:function(e){if(s=Ae(s,e),m(),null!==s[s.length-1])return[];return y(t,0),u.events=pt(o,u.events,u),u.events}};let h,d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(e){return function(e,t){const n=t.start._index,i=t.start._bufferIndex,r=t.end._index,o=t.end._bufferIndex;let s;if(n===r)s=[e[n].slice(i,o)];else{if(s=e.slice(n,r),i>-1){const e=s[0];"string"==typeof e?s[0]=e.slice(i):s.shift()}o>0&&s.push(e[r].slice(0,o))}return s}(s,e)}function f(){const{line:e,column:t,offset:n,_index:r,_bufferIndex:o}=i;return{line:e,column:t,offset:n,_index:r,_bufferIndex:o}}function m(){let e;for(;i._index<s.length;){const t=s[i._index];if("string"==typeof t)for(e=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===e&&i._bufferIndex<t.length;)g(t.charCodeAt(i._bufferIndex));else g(t)}}function g(e){a=void 0,h=e,d=d(e)}function v(e,t){t.restore()}function b(e,t){return function(n,r,o){let s,h,d,p;return Array.isArray(n)?m(n):"tokenize"in n?m([n]):function(e){return t;function t(t){const n=null!==t&&e[t],i=null!==t&&e.null;return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(i)?i:i?[i]:[]])(t)}}(n);function m(e){return s=e,h=0,0===e.length?o:g(e[h])}function g(e){return function(n){p=function(){const e=f(),t=u.previous,n=u.currentConstruct,r=u.events.length,o=Array.from(l);return{restore:s,from:r};function s(){i=e,u.previous=t,u.currentConstruct=n,u.events.length=r,l=o,x()}}(),d=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return b(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,c,v,b)(n)}}function v(t){return a=!0,e(d,p),r}function b(e){return a=!0,p.restore(),++h<s.length?g(s[h]):o}}}function y(e,t){e.resolveAll&&!o.includes(e)&&o.push(e),e.resolve&&Se(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function x(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}const mt={name:"thematicBreak",tokenize:function(e,t,n){let i,r=0;return function(t){return e.enter("thematicBreak"),function(e){return i=e,o(e)}(t)};function o(o){return o===i?(e.enter("thematicBreakSequence"),s(o)):r>=3&&(null===o||Re(o))?(e.exit("thematicBreak"),t(o)):n(o)}function s(t){return t===i?(e.consume(t),r++,s):(e.exit("thematicBreakSequence"),Ue(t)?Xe(e,o,"whitespace")(t):o(t))}}};const gt={name:"list",tokenize:function(e,t,n){const i=this,r=i.events[i.events.length-1];let o=r&&"linePrefix"===r[1].type?r[2].sliceSerialize(r[1],!0).length:0,s=0;return function(t){const r=i.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===r?!i.containerState.marker||t===i.containerState.marker:Pe(t)){if(i.containerState.type||(i.containerState.type=r,e.enter(r,{_container:!0})),"listUnordered"===r)return e.enter("listItemPrefix"),42===t||45===t?e.check(mt,n,a)(t):a(t);if(!i.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(t)}return n(t)};function l(t){return Pe(t)&&++s<10?(e.consume(t),l):(!i.interrupt||s<2)&&(i.containerState.marker?t===i.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),a(t)):n(t)}function a(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||t,e.check(tt,i.interrupt?n:c,e.attempt(vt,h,u))}function c(e){return i.containerState.initialBlankLine=!0,o++,h(e)}function u(t){return Ue(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),h):n(t)}function h(n){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){const i=this;return i.containerState._closeFlow=void 0,e.check(tt,(function(n){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Xe(e,t,"listItemIndent",i.containerState.size+1)(n)}),(function(n){if(i.containerState.furtherBlankLines||!Ue(n))return i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,r(n);return i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(bt,t,r)(n)}));function r(r){return i.containerState._closeFlow=!0,i.interrupt=void 0,Xe(e,e.attempt(gt,t,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(r)}}},exit:function(e){e.exit(this.containerState.type)}},vt={tokenize:function(e,t,n){const i=this;return Xe(e,(function(e){const r=i.events[i.events.length-1];return!Ue(e)&&r&&"listItemPrefixWhitespace"===r[1].type?t(e):n(e)}),"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},bt={tokenize:function(e,t,n){const i=this;return Xe(e,(function(e){const r=i.events[i.events.length-1];return r&&"listItemIndent"===r[1].type&&r[2].sliceSerialize(r[1],!0).length===i.containerState.size?t(e):n(e)}),"listItemIndent",i.containerState.size+1)},partial:!0};const yt={name:"blockQuote",tokenize:function(e,t,n){const i=this;return function(t){if(62===t){const n=i.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),r}return n(t)};function r(n){return Ue(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){const i=this;return function(t){if(Ue(t))return Xe(e,r,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return r(t)};function r(i){return e.attempt(yt,t,n)(i)}}},exit:function(e){e.exit("blockQuote")}};function xt(e,t,n,i,r,o,s,l,a){const c=a||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(i),e.enter(r),e.enter(o),e.consume(t),e.exit(o),h;if(null===t||32===t||41===t||De(t))return n(t);return e.enter(i),e.enter(s),e.enter(l),e.enter("chunkString",{contentType:"string"}),f(t)};function h(n){return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(r),e.exit(i),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),d(n))}function d(t){return 62===t?(e.exit("chunkString"),e.exit(l),h(t)):null===t||60===t||Re(t)?n(t):(e.consume(t),92===t?p:d)}function p(t){return 60===t||62===t||92===t?(e.consume(t),d):d(t)}function f(r){return u||null!==r&&41!==r&&!Ne(r)?u<c&&40===r?(e.consume(r),u++,f):41===r?(e.consume(r),u--,f):null===r||32===r||40===r||De(r)?n(r):(e.consume(r),92===r?m:f):(e.exit("chunkString"),e.exit(l),e.exit(s),e.exit(i),t(r))}function m(t){return 40===t||41===t||92===t?(e.consume(t),f):f(t)}}function _t(e,t,n,i,r,o){const s=this;let l,a=0;return function(t){return e.enter(i),e.enter(r),e.consume(t),e.exit(r),e.enter(o),c};function c(h){return a>999||null===h||91===h||93===h&&!l||94===h&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(h):93===h?(e.exit(o),e.enter(r),e.consume(h),e.exit(r),e.exit(i),t):Re(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(h))}function u(t){return null===t||91===t||93===t||Re(t)||a++>999?(e.exit("chunkString"),c(t)):(e.consume(t),l||(l=!Ue(t)),92===t?h:u)}function h(t){return 91===t||92===t||93===t?(e.consume(t),a++,u):u(t)}}function kt(e,t,n,i,r,o){let s;return function(t){if(34===t||39===t||40===t)return e.enter(i),e.enter(r),e.consume(t),e.exit(r),s=40===t?41:t,l;return n(t)};function l(n){return n===s?(e.enter(r),e.consume(n),e.exit(r),e.exit(i),t):(e.enter(o),a(n))}function a(t){return t===s?(e.exit(o),l(s)):null===t?n(t):Re(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Xe(e,a,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===s||null===t||Re(t)?(e.exit("chunkString"),a(t)):(e.consume(t),92===t?u:c)}function u(t){return t===s||92===t?(e.consume(t),c):c(t)}}function wt(e,t){let n;return function i(r){if(Re(r))return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,i;if(Ue(r))return Xe(e,i,n?"linePrefix":"lineSuffix")(r);return t(r)}}const St={name:"definition",tokenize:function(e,t,n){const i=this;let r;return function(t){return e.enter("definition"),function(t){return _t.call(i,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function o(t){return r=ze(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),s):n(t)}function s(t){return Ne(t)?wt(e,l)(t):l(t)}function l(t){return xt(e,a,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function a(t){return e.attempt(At,c,c)(t)}function c(t){return Ue(t)?Xe(e,u,"whitespace")(t):u(t)}function u(o){return null===o||Re(o)?(e.exit("definition"),i.parser.defined.push(r),t(o)):n(o)}}},At={tokenize:function(e,t,n){return function(t){return Ne(t)?wt(e,i)(t):n(t)};function i(t){return kt(e,r,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function r(t){return Ue(t)?Xe(e,o,"whitespace")(t):o(t)}function o(e){return null===e||Re(e)?t(e):n(e)}},partial:!0};const $t={name:"codeIndented",tokenize:function(e,t,n){const i=this;return function(t){return e.enter("codeIndented"),Xe(e,r,"linePrefix",5)(t)};function r(e){const t=i.events[i.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return null===t?l(t):Re(t)?e.attempt(Ct,o,l)(t):(e.enter("codeFlowValue"),s(t))}function s(t){return null===t||Re(t)?(e.exit("codeFlowValue"),o(t)):(e.consume(t),s)}function l(n){return e.exit("codeIndented"),t(n)}}},Ct={tokenize:function(e,t,n){const i=this;return r;function r(t){return i.parser.lazy[i.now().line]?n(t):Re(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r):Xe(e,o,"linePrefix",5)(t)}function o(e){const o=i.events[i.events.length-1];return o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(e):Re(e)?r(e):n(e)}},partial:!0};const Et={name:"headingAtx",tokenize:function(e,t,n){let i=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),r(t)}(t)};function r(t){return 35===t&&i++<6?(e.consume(t),r):null===t||Ne(t)?(e.exit("atxHeadingSequence"),o(t)):n(t)}function o(n){return 35===n?(e.enter("atxHeadingSequence"),s(n)):null===n||Re(n)?(e.exit("atxHeading"),t(n)):Ue(n)?Xe(e,o,"whitespace")(n):(e.enter("atxHeadingText"),l(n))}function s(t){return 35===t?(e.consume(t),s):(e.exit("atxHeadingSequence"),o(t))}function l(t){return null===t||35===t||Ne(t)?(e.exit("atxHeadingText"),o(t)):(e.consume(t),l)}},resolve:function(e,t){let n,i,r=e.length-2,o=3;"whitespace"===e[o][1].type&&(o+=2);r-2>o&&"whitespace"===e[r][1].type&&(r-=2);"atxHeadingSequence"===e[r][1].type&&(o===r-1||r-4>o&&"whitespace"===e[r-2][1].type)&&(r-=o+1===r?2:4);r>o&&(n={type:"atxHeadingText",start:e[o][1].start,end:e[r][1].end},i={type:"chunkText",start:e[o][1].start,end:e[r][1].end,contentType:"text"},Se(e,o,r-o+1,[["enter",n,t],["enter",i,t],["exit",i,t],["exit",n,t]]));return e}};const Ft={name:"setextUnderline",tokenize:function(e,t,n){const i=this;let r;return function(t){let s,l=i.events.length;for(;l--;)if("lineEnding"!==i.events[l][1].type&&"linePrefix"!==i.events[l][1].type&&"content"!==i.events[l][1].type){s="paragraph"===i.events[l][1].type;break}if(!i.parser.lazy[i.now().line]&&(i.interrupt||s))return e.enter("setextHeadingLine"),r=t,function(t){return e.enter("setextHeadingLineSequence"),o(t)}(t);return n(t)};function o(t){return t===r?(e.consume(t),o):(e.exit("setextHeadingLineSequence"),Ue(t)?Xe(e,s,"lineSuffix")(t):s(t))}function s(i){return null===i||Re(i)?(e.exit("setextHeadingLine"),t(i)):n(i)}},resolveTo:function(e,t){let n,i,r,o=e.length;for(;o--;)if("enter"===e[o][0]){if("content"===e[o][1].type){n=o;break}"paragraph"===e[o][1].type&&(i=o)}else"content"===e[o][1].type&&e.splice(o,1),r||"definition"!==e[o][1].type||(r=o);const s={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};e[i][1].type="setextHeadingText",r?(e.splice(i,0,["enter",s,t]),e.splice(r+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[r][1].end)):e[n][1]=s;return e.push(["exit",s,t]),e}};const Mt=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],It=["pre","script","style","textarea"],zt={name:"htmlFlow",tokenize:function(e,t,n){const i=this;let r,o,s,l,a;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(l){return 33===l?(e.consume(l),u):47===l?(e.consume(l),o=!0,p):63===l?(e.consume(l),r=3,i.interrupt?t:T):Le(l)?(e.consume(l),s=String.fromCharCode(l),f):n(l)}function u(o){return 45===o?(e.consume(o),r=2,h):91===o?(e.consume(o),r=5,l=0,d):Le(o)?(e.consume(o),r=4,i.interrupt?t:T):n(o)}function h(r){return 45===r?(e.consume(r),i.interrupt?t:T):n(r)}function d(r){const o="CDATA[";return r===o.charCodeAt(l++)?(e.consume(r),6===l?i.interrupt?t:$:d):n(r)}function p(t){return Le(t)?(e.consume(t),s=String.fromCharCode(t),f):n(t)}function f(l){if(null===l||47===l||62===l||Ne(l)){const a=47===l,c=s.toLowerCase();return a||o||!It.includes(c)?Mt.includes(s.toLowerCase())?(r=6,a?(e.consume(l),m):i.interrupt?t(l):$(l)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(l):o?g(l):v(l)):(r=1,i.interrupt?t(l):$(l))}return 45===l||Te(l)?(e.consume(l),s+=String.fromCharCode(l),f):n(l)}function m(r){return 62===r?(e.consume(r),i.interrupt?t:$):n(r)}function g(t){return Ue(t)?(e.consume(t),g):S(t)}function v(t){return 47===t?(e.consume(t),S):58===t||95===t||Le(t)?(e.consume(t),b):Ue(t)?(e.consume(t),v):S(t)}function b(t){return 45===t||46===t||58===t||95===t||Te(t)?(e.consume(t),b):y(t)}function y(t){return 61===t?(e.consume(t),x):Ue(t)?(e.consume(t),y):v(t)}function x(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),a=t,_):Ue(t)?(e.consume(t),x):k(t)}function _(t){return t===a?(e.consume(t),a=null,w):null===t||Re(t)?n(t):(e.consume(t),_)}function k(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||Ne(t)?y(t):(e.consume(t),k)}function w(e){return 47===e||62===e||Ue(e)?v(e):n(e)}function S(t){return 62===t?(e.consume(t),A):n(t)}function A(t){return null===t||Re(t)?$(t):Ue(t)?(e.consume(t),A):n(t)}function $(t){return 45===t&&2===r?(e.consume(t),M):60===t&&1===r?(e.consume(t),I):62===t&&4===r?(e.consume(t),O):63===t&&3===r?(e.consume(t),T):93===t&&5===r?(e.consume(t),L):!Re(t)||6!==r&&7!==r?null===t||Re(t)?(e.exit("htmlFlowData"),C(t)):(e.consume(t),$):(e.exit("htmlFlowData"),e.check(Lt,D,C)(t))}function C(t){return e.check(Tt,E,D)(t)}function E(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),F}function F(t){return null===t||Re(t)?C(t):(e.enter("htmlFlowData"),$(t))}function M(t){return 45===t?(e.consume(t),T):$(t)}function I(t){return 47===t?(e.consume(t),s="",z):$(t)}function z(t){if(62===t){const n=s.toLowerCase();return It.includes(n)?(e.consume(t),O):$(t)}return Le(t)&&s.length<8?(e.consume(t),s+=String.fromCharCode(t),z):$(t)}function L(t){return 93===t?(e.consume(t),T):$(t)}function T(t){return 62===t?(e.consume(t),O):45===t&&2===r?(e.consume(t),T):$(t)}function O(t){return null===t||Re(t)?(e.exit("htmlFlowData"),D(t)):(e.consume(t),O)}function D(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},concrete:!0},Lt={tokenize:function(e,t,n){return function(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(tt,t,n)}},partial:!0},Tt={tokenize:function(e,t,n){const i=this;return function(t){if(Re(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r;return n(t)};function r(e){return i.parser.lazy[i.now().line]?n(e):t(e)}},partial:!0};const Ot={tokenize:function(e,t,n){const i=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r};function r(e){return i.parser.lazy[i.now().line]?n(e):t(e)}},partial:!0},Dt={name:"codeFenced",tokenize:function(e,t,n){const i=this,r={tokenize:function(e,t,n){let r=0;return s;function s(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),a}function a(t){return e.enter("codeFencedFence"),Ue(t)?Xe(e,c,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===o?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===o?(r++,e.consume(t),u):r>=l?(e.exit("codeFencedFenceSequence"),Ue(t)?Xe(e,h,"whitespace")(t):h(t)):n(t)}function h(i){return null===i||Re(i)?(e.exit("codeFencedFence"),t(i)):n(i)}},partial:!0};let o,s=0,l=0;return function(t){return function(t){const n=i.events[i.events.length-1];return s=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,o=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),a(t)}(t)};function a(t){return t===o?(l++,e.consume(t),a):l<3?n(t):(e.exit("codeFencedFenceSequence"),Ue(t)?Xe(e,c,"whitespace")(t):c(t))}function c(n){return null===n||Re(n)?(e.exit("codeFencedFence"),i.interrupt?t(n):e.check(Ot,p,b)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||Re(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):Ue(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Xe(e,h,"whitespace")(t)):96===t&&t===o?n(t):(e.consume(t),u)}function h(t){return null===t||Re(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),d(t))}function d(t){return null===t||Re(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===o?n(t):(e.consume(t),d)}function p(t){return e.attempt(r,b,f)(t)}function f(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),m}function m(t){return s>0&&Ue(t)?Xe(e,g,"linePrefix",s+1)(t):g(t)}function g(t){return null===t||Re(t)?e.check(Ot,p,b)(t):(e.enter("codeFlowValue"),v(t))}function v(t){return null===t||Re(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),v)}function b(n){return e.exit("codeFenced"),t(n)}},concrete:!0};const Pt={name:"characterReference",tokenize:function(e,t,n){const i=this;let r,o,s=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),l};function l(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),a):(e.enter("characterReferenceValue"),r=31,o=Te,c(t))}function a(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,o=Be,c):(e.enter("characterReferenceValue"),r=7,o=Pe,c(t))}function c(l){if(59===l&&s){const r=e.exit("characterReferenceValue");return o!==Te||we(i.sliceSerialize(r))?(e.enter("characterReferenceMarker"),e.consume(l),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(l)}return o(l)&&s++<r?(e.consume(l),c):n(l)}}};const Bt={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),i};function i(i){return je(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}};const jt={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Xe(e,t,"linePrefix")}}};const Rt={name:"labelEnd",tokenize:function(e,t,n){const i=this;let r,o,s=i.events.length;for(;s--;)if(("labelImage"===i.events[s][1].type||"labelLink"===i.events[s][1].type)&&!i.events[s][1]._balanced){r=i.events[s][1];break}return function(t){if(!r)return n(t);if(r._inactive)return u(t);return o=i.parser.defined.includes(ze(i.sliceSerialize({start:r.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),l};function l(t){return 40===t?e.attempt(Nt,c,o?c:u)(t):91===t?e.attempt(Ut,c,o?a:u)(t):o?c(t):u(t)}function a(t){return e.attempt(Vt,c,u)(t)}function c(e){return t(e)}function u(e){return r._balanced=!0,n(e)}},resolveTo:function(e,t){let n,i,r,o,s=e.length,l=0;for(;s--;)if(n=e[s][1],i){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[s][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(r){if("enter"===e[s][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(i=s,"labelLink"!==n.type)){l=2;break}}else"labelEnd"===n.type&&(r=s);const a={type:"labelLink"===e[i][1].type?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[r][1].end)},u={type:"labelText",start:Object.assign({},e[i+l+2][1].end),end:Object.assign({},e[r-2][1].start)};return o=[["enter",a,t],["enter",c,t]],o=Ae(o,e.slice(i+1,i+l+3)),o=Ae(o,[["enter",u,t]]),o=Ae(o,pt(t.parser.constructs.insideSpan.null,e.slice(i+l+4,r-3),t)),o=Ae(o,[["exit",u,t],e[r-2],e[r-1],["exit",c,t]]),o=Ae(o,e.slice(r+1)),o=Ae(o,[["exit",a,t]]),Se(e,i,e.length,o),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){const n=e[t][1];"labelImage"!==n.type&&"labelLink"!==n.type&&"labelEnd"!==n.type||(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},Nt={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),i};function i(t){return Ne(t)?wt(e,r)(t):r(t)}function r(t){return 41===t?c(t):xt(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function o(t){return Ne(t)?wt(e,l)(t):c(t)}function s(e){return n(e)}function l(t){return 34===t||39===t||40===t?kt(e,a,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function a(t){return Ne(t)?wt(e,c)(t):c(t)}function c(i){return 41===i?(e.enter("resourceMarker"),e.consume(i),e.exit("resourceMarker"),e.exit("resource"),t):n(i)}}},Ut={tokenize:function(e,t,n){const i=this;return function(t){return _t.call(i,e,r,o,"reference","referenceMarker","referenceString")(t)};function r(e){return i.parser.defined.includes(ze(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}},Vt={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),i};function i(i){return 93===i?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}};function Ht(e){return null===e||Ne(e)||He(e)?1:Ve(e)?2:void 0}const qt={name:"attention",tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Ht(i);let o;return function(t){return o=t,e.enter("attentionSequence"),s(t)};function s(l){if(l===o)return e.consume(l),s;const a=e.exit("attentionSequence"),c=Ht(l),u=!c||2===c&&r||n.includes(l),h=!r||2===r&&c||n.includes(i);return a._open=Boolean(42===o?u:u&&(r||!h)),a._close=Boolean(42===o?h:h&&(c||!u)),t(l)}},resolveAll:function(e,t){let n,i,r,o,s,l,a,c,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;l=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const h=Object.assign({},e[n][1].end),d=Object.assign({},e[u][1].start);Wt(h,-l),Wt(d,l),o={type:l>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},e[n][1].end)},s={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[u][1].start),end:d},r={type:l>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[u][1].start)},i={type:l>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},s.end)},e[n][1].end=Object.assign({},o.start),e[u][1].start=Object.assign({},s.end),a=[],e[n][1].end.offset-e[n][1].start.offset&&(a=Ae(a,[["enter",e[n][1],t],["exit",e[n][1],t]])),a=Ae(a,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",r,t]]),a=Ae(a,pt(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),a=Ae(a,[["exit",r,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[u][1].end.offset-e[u][1].start.offset?(c=2,a=Ae(a,[["enter",e[u][1],t],["exit",e[u][1],t]])):c=0,Se(e,n-1,u-n+3,a),u=n+a.length-c-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e}};function Wt(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Kt={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:yt},Qt={91:St},Zt={[-2]:$t,[-1]:$t,32:$t},Jt={35:Et,42:mt,45:[Ft,mt],60:zt,61:Ft,95:mt,96:Dt,126:Dt},Xt={38:Pt,92:Bt},Yt={[-5]:jt,[-4]:jt,[-3]:jt,33:{name:"labelStartImage",tokenize:function(e,t,n){const i=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),r};function r(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),o):n(t)}function o(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?n(e):t(e)}},resolveAll:Rt.resolveAll},38:Pt,42:qt,60:[{name:"autolink",tokenize:function(e,t,n){let i=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r};function r(t){return Le(t)?(e.consume(t),o):a(t)}function o(e){return 43===e||45===e||46===e||Te(e)?(i=1,s(e)):a(e)}function s(t){return 58===t?(e.consume(t),i=0,l):(43===t||45===t||46===t||Te(t))&&i++<32?(e.consume(t),s):(i=0,a(t))}function l(i){return 62===i?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),t):null===i||32===i||60===i||De(i)?n(i):(e.consume(i),l)}function a(t){return 64===t?(e.consume(t),c):Oe(t)?(e.consume(t),a):n(t)}function c(e){return Te(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),i=0,c):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):h(n)}function h(t){if((45===t||Te(t))&&i++<63){const n=45===t?h:u;return e.consume(t),n}return n(t)}}},{name:"htmlText",tokenize:function(e,t,n){const i=this;let r,o,s;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),l};function l(t){return 33===t?(e.consume(t),a):47===t?(e.consume(t),x):63===t?(e.consume(t),b):Le(t)?(e.consume(t),w):n(t)}function a(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),o=0,p):Le(t)?(e.consume(t),v):n(t)}function c(t){return 45===t?(e.consume(t),d):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),h):Re(t)?(s=u,z(t)):(e.consume(t),u)}function h(t){return 45===t?(e.consume(t),d):u(t)}function d(e){return 62===e?I(e):45===e?h(e):u(e)}function p(t){const i="CDATA[";return t===i.charCodeAt(o++)?(e.consume(t),6===o?f:p):n(t)}function f(t){return null===t?n(t):93===t?(e.consume(t),m):Re(t)?(s=f,z(t)):(e.consume(t),f)}function m(t){return 93===t?(e.consume(t),g):f(t)}function g(t){return 62===t?I(t):93===t?(e.consume(t),g):f(t)}function v(t){return null===t||62===t?I(t):Re(t)?(s=v,z(t)):(e.consume(t),v)}function b(t){return null===t?n(t):63===t?(e.consume(t),y):Re(t)?(s=b,z(t)):(e.consume(t),b)}function y(e){return 62===e?I(e):b(e)}function x(t){return Le(t)?(e.consume(t),_):n(t)}function _(t){return 45===t||Te(t)?(e.consume(t),_):k(t)}function k(t){return Re(t)?(s=k,z(t)):Ue(t)?(e.consume(t),k):I(t)}function w(t){return 45===t||Te(t)?(e.consume(t),w):47===t||62===t||Ne(t)?S(t):n(t)}function S(t){return 47===t?(e.consume(t),I):58===t||95===t||Le(t)?(e.consume(t),A):Re(t)?(s=S,z(t)):Ue(t)?(e.consume(t),S):I(t)}function A(t){return 45===t||46===t||58===t||95===t||Te(t)?(e.consume(t),A):$(t)}function $(t){return 61===t?(e.consume(t),C):Re(t)?(s=$,z(t)):Ue(t)?(e.consume(t),$):S(t)}function C(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),r=t,E):Re(t)?(s=C,z(t)):Ue(t)?(e.consume(t),C):(e.consume(t),F)}function E(t){return t===r?(e.consume(t),r=void 0,M):null===t?n(t):Re(t)?(s=E,z(t)):(e.consume(t),E)}function F(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||Ne(t)?S(t):(e.consume(t),F)}function M(e){return 47===e||62===e||Ne(e)?S(e):n(e)}function I(i){return 62===i?(e.consume(i),e.exit("htmlTextData"),e.exit("htmlText"),t):n(i)}function z(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),L}function L(t){return Ue(t)?Xe(e,T,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):T(t)}function T(t){return e.enter("htmlTextData"),s(t)}}}],91:{name:"labelStartLink",tokenize:function(e,t,n){const i=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),r};function r(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?n(e):t(e)}},resolveAll:Rt.resolveAll},92:[{name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),i};function i(i){return Re(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}},Bt],93:Rt,95:qt,96:{name:"codeText",tokenize:function(e,t,n){let i,r,o=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),s(t)};function s(t){return 96===t?(e.consume(t),o++,s):(e.exit("codeTextSequence"),l(t))}function l(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),l):96===t?(r=e.enter("codeTextSequence"),i=0,c(t)):Re(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):(e.enter("codeTextData"),a(t))}function a(t){return null===t||32===t||96===t||Re(t)?(e.exit("codeTextData"),l(t)):(e.consume(t),a)}function c(n){return 96===n?(e.consume(n),i++,c):i===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(r.type="codeTextData",a(n))}},resolve:function(e){let t,n,i=e.length-4,r=3;if(!("lineEnding"!==e[r][1].type&&"space"!==e[r][1].type||"lineEnding"!==e[i][1].type&&"space"!==e[i][1].type))for(t=r;++t<i;)if("codeTextData"===e[t][1].type){e[r][1].type="codeTextPadding",e[i][1].type="codeTextPadding",r+=2,i-=2;break}t=r-1,i++;for(;++t<=i;)void 0===n?t!==i&&"lineEnding"!==e[t][1].type&&(n=t):t!==i&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),i-=t-n-2,t=n+2),n=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}}},Gt={null:[qt,lt]},en={null:[42,95]},tn={null:[]};function nn(e){const n={defined:[],lazy:{},constructs:function(e){const t={};let n=-1;for(;++n<e.length;)Ce(t,e[n]);return t}([t,...(e||{}).extensions||[]]),content:i(Ye),document:i(Ge),flow:i(st),string:i(at),text:i(ct)};return n;function i(e){return function(t){return ft(n,e,t)}}}const rn=/[\0\t\n\r]/g;function on(e,t,n){return"string"!=typeof t&&(n=t,t=void 0),Je(n)(function(e){for(;!nt(e););return e}(nn(n).document().write(function(){let e,t=1,n="",i=!0;return function(r,o,s){const l=[];let a,c,u,h,d;for(r=n+r.toString(o),u=0,n="",i&&(65279===r.charCodeAt(0)&&u++,i=void 0);u<r.length;){if(rn.lastIndex=u,a=rn.exec(r),h=a&&void 0!==a.index?a.index:r.length,d=r.charCodeAt(h),!a){n=r.slice(u);break}if(10===d&&u===h&&e)l.push(-3),e=void 0;else switch(e&&(l.push(-5),e=void 0),u<h&&(l.push(r.slice(u,h)),t+=h-u),d){case 0:l.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),l.push(-2);t++<c;)l.push(-1);break;case 10:l.push(-4),t=1;break;default:e=!0,t=1}u=h+1}return s&&(e&&l.push(-5),n&&l.push(n),l.push(null)),l}}()(e,t,!0))))}function sn(e){return Array.isArray?Array.isArray(e):"[object Array]"===mn(e)}customElements.define("wrg-index",class extends ae{static properties={_archives:{type:Object}};static styles=l`
      ul {
        border: var(--sl-panel-border-width) solid var(--sl-panel-border-color);
        border-radius: var(--sl-border-radius-medium);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li:not(:first-child) {
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
      }

      a {
        display: block;
        padding: var(--sl-spacing-small);
        line-height: 1;
        color: var(--sl-color-neutral-700);
        text-decoration: none;
      }

      a:hover {
        background-color: var(--sl-color-neutral-50);
      }

      .archive {
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        flex-direction: column;
      }

      .name {
        flex: 1;
        font-size: 24px;
      }

      .desc {
        margin-top: 10px;
      }
    `;async firstUpdated(){const e=await _e();this._archives=e.archives}render(){return this._archives?N`
        <ul>
          ${this._archives.map((e=>N`
              <li>
                <a
                  href="./archive/?source=${encodeURIComponent(e.url)}"
                  title=${e.description}
                >
                  <div class="archive">
                    <div class="name">${e.name}</div>
                    <div class="desc">
                    ${fe`${(e=>({_$litStatic$:e,r:ue}))(on(e.description))}`}
                    </div>
                  </div>
                </a>
              </li>
            `))}
        </ul>
      `:""}}),customElements.define("wrg-archive-name",class extends ae{static properties={title:{type:String}};async firstUpdated(){const e=await _e();this.title=e&&e.site&&e.site.title}render(){return N`<b>${this.title}</b>`}}),customElements.define("wrg-archives-count",class extends ae{static properties={archives:{type:Object}};async firstUpdated(){const e=await _e();this.archives=e.archives}render(){if(this.archives)return N` ${this.archives.length}`}}),customElements.define("wrg-header",class extends ae{static properties={homeUrl:{type:String},_title:{type:String},_logoSrc:{type:String}};static styles=l`
      header {
        padding: var(--sl-spacing-x-small);
      }

      .home-link {
        display: inline-flex;
        align-items: center;
        color: var(--sl-color-neutral-700);
        text-decoration: none;
      }

      .logo-wrapper {
        height: 2.25rem;
        width: 2.25rem;
        margin-right: var(--sl-spacing-x-small);
      }

      .logo {
        height: 100%;
        width: 100%;
      }

      .title {
        font-weight: 600;
      }
    `;async firstUpdated(){const e=await _e(this.homeUrl);this._title=e.site.title,this._logoSrc=e.site.logoSrc}render(){return N`
        <header>
          <a class="home-link" href="${this.homeUrl}">
            ${this._logoSrc?N`
                  <div class="logo-wrapper">
                    <img
                      class="logo"
                      src="${this._logoSrc}"
                      alt="${this._title} logo"
                      loading="lazy"
                    />
                  </div>
                `:""}
            <div class="title">${this._title}</div>
          </a>
        </header>
      `}}),customElements.define("wrg-replay",class extends ae{static properties={replayBase:{type:String},replayOpts:{type:Object},_replaySource:{state:!0,type:String},_error:{state:!0,type:String}};static styles=l`
      :host {
        display: inline-block;
        width: 100%;
        height: 100%;
      }

      replay-web-page {
        display: block;
      }
    `;async firstUpdated(){const e=await _e();this.replayOpts=e.replay;const t=new URL(window.location.href);try{let e=window.decodeURIComponent(t.searchParams.get("source"));const n=new URL("../",window.location.href).href;this._replaySource=new URL(e,n).href}catch(e){console.error(e),this._error="Invalid WACZ URL"}}render(){return this._error?N` ${this._error} `:this._replaySource?N`
        <replay-web-page
          source=${this._replaySource}
          replayBase=${this.replayOpts.replayBase}
          embed=${this.replayOpts.embed}
          deepLink
        ></replay-web-page>
      `:void 0}});const ln=1/0;function an(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-ln?"-0":t}(e)}function cn(e){return"string"==typeof e}function un(e){return"number"==typeof e}function hn(e){return!0===e||!1===e||function(e){return dn(e)&&null!==e}(e)&&"[object Boolean]"==mn(e)}function dn(e){return"object"==typeof e}function pn(e){return null!=e}function fn(e){return!e.trim().length}function mn(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const gn=e=>`Missing ${e} property in key`,vn=e=>`Property 'weight' in key '${e}' must be a positive integer`,bn=Object.prototype.hasOwnProperty;class yn{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=xn(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function xn(e){let t=null,n=null,i=null,r=1,o=null;if(cn(e)||sn(e))i=e,t=_n(e),n=kn(e);else{if(!bn.call(e,"name"))throw new Error(gn("name"));const s=e.name;if(i=s,bn.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(vn(s));t=_n(s),n=kn(s),o=e.getFn}return{path:t,id:n,weight:r,src:i,getFn:o}}function _n(e){return sn(e)?e:e.split(".")}function kn(e){return sn(e)?e.join("."):e}const wn={useExtendedSearch:!1,getFn:function(e,t){let n=[],i=!1;const r=(e,t,o)=>{if(pn(e))if(t[o]){const s=e[t[o]];if(!pn(s))return;if(o===t.length-1&&(cn(s)||un(s)||hn(s)))n.push(an(s));else if(sn(s)){i=!0;for(let e=0,n=s.length;e<n;e+=1)r(s[e],t,o+1)}else t.length&&r(s,t,o+1)}else n.push(e)};return r(e,cn(t)?t.split("."):t,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Sn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...wn};const An=/[^ ]+/g;class $n{constructor({getFn:e=Sn.getFn,fieldNormWeight:t=Sn.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(t){const r=t.match(An).length;if(n.has(r))return n.get(r);const o=1/Math.pow(r,.5*e),s=parseFloat(Math.round(o*i)/i);return n.set(r,s),s},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,cn(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();cn(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!pn(e)||fn(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,i)=>{let r=t.getFn?t.getFn(e):this.getFn(e,t.path);if(pn(r))if(sn(r)){let e=[];const t=[{nestedArrIndex:-1,value:r}];for(;t.length;){const{nestedArrIndex:n,value:i}=t.pop();if(pn(i))if(cn(i)&&!fn(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else sn(i)&&i.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[i]=e}else if(cn(r)&&!fn(r)){let e={v:r,n:this.norm.get(r)};n.$[i]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Cn(e,t,{getFn:n=Sn.getFn,fieldNormWeight:i=Sn.fieldNormWeight}={}){const r=new $n({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(xn)),r.setSources(t),r.create(),r}function En(e,{errors:t=0,currentLocation:n=0,expectedLocation:i=0,distance:r=Sn.distance,ignoreLocation:o=Sn.ignoreLocation}={}){const s=t/e.length;if(o)return s;const l=Math.abs(i-n);return r?s+l/r:l?1:s}const Fn=32;function Mn(e,t,n,{location:i=Sn.location,distance:r=Sn.distance,threshold:o=Sn.threshold,findAllMatches:s=Sn.findAllMatches,minMatchCharLength:l=Sn.minMatchCharLength,includeMatches:a=Sn.includeMatches,ignoreLocation:c=Sn.ignoreLocation}={}){if(t.length>Fn)throw new Error(`Pattern length exceeds max of ${Fn}.`);const u=t.length,h=e.length,d=Math.max(0,Math.min(i,h));let p=o,f=d;const m=l>1||a,g=m?Array(h):[];let v;for(;(v=e.indexOf(t,f))>-1;){let e=En(t,{currentLocation:v,expectedLocation:d,distance:r,ignoreLocation:c});if(p=Math.min(e,p),f=v+u,m){let e=0;for(;e<u;)g[v+e]=1,e+=1}}f=-1;let b=[],y=1,x=u+h;const _=1<<u-1;for(let i=0;i<u;i+=1){let o=0,l=x;for(;o<l;){En(t,{errors:i,currentLocation:d+l,expectedLocation:d,distance:r,ignoreLocation:c})<=p?o=l:x=l,l=Math.floor((x-o)/2+o)}x=l;let a=Math.max(1,d-l+1),v=s?h:Math.min(d+l,h)+u,k=Array(v+2);k[v+1]=(1<<i)-1;for(let o=v;o>=a;o-=1){let s=o-1,l=n[e.charAt(s)];if(m&&(g[s]=+!!l),k[o]=(k[o+1]<<1|1)&l,i&&(k[o]|=(b[o+1]|b[o])<<1|1|b[o+1]),k[o]&_&&(y=En(t,{errors:i,currentLocation:s,expectedLocation:d,distance:r,ignoreLocation:c}),y<=p)){if(p=y,f=s,f<=d)break;a=Math.max(1,2*d-f)}}if(En(t,{errors:i+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:c})>p)break;b=k}const k={isMatch:f>=0,score:Math.max(.001,y)};if(m){const e=function(e=[],t=Sn.minMatchCharLength){let n=[],i=-1,r=-1,o=0;for(let s=e.length;o<s;o+=1){let s=e[o];s&&-1===i?i=o:s||-1===i||(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}(g,l);e.length?a&&(k.indices=e):k.isMatch=!1}return k}function In(e){let t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}class zn{constructor(e,{location:t=Sn.location,threshold:n=Sn.threshold,distance:i=Sn.distance,includeMatches:r=Sn.includeMatches,findAllMatches:o=Sn.findAllMatches,minMatchCharLength:s=Sn.minMatchCharLength,isCaseSensitive:l=Sn.isCaseSensitive,ignoreLocation:a=Sn.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:a},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const c=(e,t)=>{this.chunks.push({pattern:e,alphabet:In(e),startIndex:t})},u=this.pattern.length;if(u>Fn){let e=0;const t=u%Fn,n=u-t;for(;e<n;)c(this.pattern.substr(e,Fn),e),e+=Fn;if(t){const e=u-Fn;c(this.pattern.substr(e),e)}}else c(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:i,distance:r,threshold:o,findAllMatches:s,minMatchCharLength:l,ignoreLocation:a}=this.options;let c=[],u=0,h=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:f,score:m,indices:g}=Mn(e,t,d,{location:i+p,distance:r,threshold:o,findAllMatches:s,minMatchCharLength:l,includeMatches:n,ignoreLocation:a});f&&(h=!0),u+=m,f&&g&&(c=[...c,...g])}));let d={isMatch:h,score:h?u/this.chunks.length:1};return h&&n&&(d.indices=c),d}}class Ln{constructor(e){this.pattern=e}static isMultiMatch(e){return Tn(e,this.multiRegex)}static isSingleMatch(e){return Tn(e,this.singleRegex)}search(){}}function Tn(e,t){const n=e.match(t);return n?n[1]:null}class On extends Ln{constructor(e,{location:t=Sn.location,threshold:n=Sn.threshold,distance:i=Sn.distance,includeMatches:r=Sn.includeMatches,findAllMatches:o=Sn.findAllMatches,minMatchCharLength:s=Sn.minMatchCharLength,isCaseSensitive:l=Sn.isCaseSensitive,ignoreLocation:a=Sn.ignoreLocation}={}){super(e),this._bitapSearch=new zn(e,{location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Dn extends Ln{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const i=[],r=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+r,i.push([t,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const Pn=[class extends Ln{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},Dn,class extends Ln{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends Ln{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends Ln{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends Ln{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends Ln{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},On],Bn=Pn.length,jn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const Rn=new Set([On.type,Dn.type]);class Nn{constructor(e,{isCaseSensitive:t=Sn.isCaseSensitive,includeMatches:n=Sn.includeMatches,minMatchCharLength:i=Sn.minMatchCharLength,ignoreLocation:r=Sn.ignoreLocation,findAllMatches:o=Sn.findAllMatches,location:s=Sn.location,threshold:l=Sn.threshold,distance:a=Sn.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:i,findAllMatches:o,ignoreLocation:r,location:s,threshold:l,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(jn).filter((e=>e&&!!e.trim())),i=[];for(let e=0,r=n.length;e<r;e+=1){const r=n[e];let o=!1,s=-1;for(;!o&&++s<Bn;){const e=Pn[s];let n=e.isMultiMatch(r);n&&(i.push(new e(n,t)),o=!0)}if(!o)for(s=-1;++s<Bn;){const e=Pn[s];let n=e.isSingleMatch(r);if(n){i.push(new e(n,t));break}}}return i}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let r=0,o=[],s=0;for(let i=0,l=t.length;i<l;i+=1){const l=t[i];o.length=0,r=0;for(let t=0,i=l.length;t<i;t+=1){const i=l[t],{isMatch:a,indices:c,score:u}=i.search(e);if(!a){s=0,r=0,o.length=0;break}if(r+=1,s+=u,n){const e=i.constructor.type;Rn.has(e)?o=[...o,...c]:o.push(c)}}if(r){let e={isMatch:!0,score:s/r};return n&&(e.indices=o),e}}return{isMatch:!1,score:1}}}const Un=[];function Vn(e,t){for(let n=0,i=Un.length;n<i;n+=1){let i=Un[n];if(i.condition(e,t))return new i(e,t)}return new zn(e,t)}const Hn="$and",qn="$or",Wn="$path",Kn="$val",Qn=e=>!(!e[Hn]&&!e[qn]),Zn=e=>({[Hn]:Object.keys(e).map((t=>({[t]:e[t]})))});function Jn(e,t,{auto:n=!0}={}){const i=e=>{let r=Object.keys(e);const o=(e=>!!e[Wn])(e);if(!o&&r.length>1&&!Qn(e))return i(Zn(e));if((e=>!sn(e)&&dn(e)&&!Qn(e))(e)){const i=o?e[Wn]:r[0],s=o?e[Kn]:e[i];if(!cn(s))throw new Error((e=>`Invalid value for key ${e}`)(i));const l={keyId:kn(i),pattern:s};return n&&(l.searcher=Vn(s,t)),l}let s={children:[],operator:r[0]};return r.forEach((t=>{const n=e[t];sn(n)&&n.forEach((e=>{s.children.push(i(e))}))})),s};return Qn(e)||(e=Zn(e)),i(e)}function Xn(e,t){const n=e.matches;t.matches=[],pn(n)&&n.forEach((e=>{if(!pn(e.indices)||!e.indices.length)return;const{indices:n,value:i}=e;let r={indices:n,value:i};e.key&&(r.key=e.key.src),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)}))}function Yn(e,t){t.score=e.score}class Gn{constructor(e,t={},n){this.options={...Sn,...t},this.options.useExtendedSearch,this._keyStore=new yn(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof $n))throw new Error("Incorrect 'index' type");this._myIndex=t||Cn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){pn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,i=this._docs.length;n<i;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,i-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:r,sortFn:o,ignoreFieldNorm:s}=this.options;let l=cn(e)?cn(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=Sn.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:i,score:r})=>{const o=e?e.weight:null;n*=Math.pow(0===r&&o?Number.EPSILON:r,(o||1)*(t?1:i))})),e.score=n}))}(l,{ignoreFieldNorm:s}),r&&l.sort(o),un(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:n=Sn.includeMatches,includeScore:i=Sn.includeScore}={}){const r=[];return n&&r.push(Xn),i&&r.push(Yn),e.map((e=>{const{idx:n}=e,i={item:t[n],refIndex:n};return r.length&&r.forEach((t=>{t(e,i)})),i}))}(l,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(e){const t=Vn(e,this.options),{records:n}=this._myIndex,i=[];return n.forEach((({v:e,i:n,n:r})=>{if(!pn(e))return;const{isMatch:o,score:s,indices:l}=t.searchIn(e);o&&i.push({item:e,idx:n,matches:[{score:s,value:e,norm:r,indices:l}]})})),i}_searchLogical(e){const t=Jn(e,this.options),n=(e,t,i)=>{if(!e.children){const{keyId:n,searcher:r}=e,o=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:r});return o&&o.length?[{idx:i,item:t,matches:o}]:[]}const r=[];for(let o=0,s=e.children.length;o<s;o+=1){const s=e.children[o],l=n(s,t,i);if(l.length)r.push(...l);else if(e.operator===Hn)return[]}return r},i=this._myIndex.records,r={},o=[];return i.forEach((({$:e,i})=>{if(pn(e)){let s=n(t,e,i);s.length&&(r[i]||(r[i]={idx:i,item:e,matches:[]},o.push(r[i])),s.forEach((({matches:e})=>{r[i].matches.push(...e)})))}})),o}_searchObjectList(e){const t=Vn(e,this.options),{keys:n,records:i}=this._myIndex,r=[];return i.forEach((({$:e,i})=>{if(!pn(e))return;let o=[];n.forEach(((n,i)=>{o.push(...this._findMatches({key:n,value:e[i],searcher:t}))})),o.length&&r.push({idx:i,item:e,matches:o})})),r}_findMatches({key:e,value:t,searcher:n}){if(!pn(t))return[];let i=[];if(sn(t))t.forEach((({v:t,i:r,n:o})=>{if(!pn(t))return;const{isMatch:s,score:l,indices:a}=n.searchIn(t);s&&i.push({score:l,key:e,value:t,idx:r,norm:o,indices:a})}));else{const{v:r,n:o}=t,{isMatch:s,score:l,indices:a}=n.searchIn(r);s&&i.push({score:l,key:e,value:r,norm:o,indices:a})}return i}}Gn.version="6.6.2",Gn.createIndex=Cn,Gn.parseIndex=function(e,{getFn:t=Sn.getFn,fieldNormWeight:n=Sn.fieldNormWeight}={}){const{keys:i,records:r}=e,o=new $n({getFn:t,fieldNormWeight:n});return o.setKeys(i),o.setIndexRecords(r),o},Gn.config=Sn,Gn.parseQuery=Jn,function(...e){Un.push(...e)}(Nn);var ei=Object.defineProperty,ti=(Object.defineProperties,Object.getOwnPropertyDescriptor),ni=(Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,(e,t,n,i)=>{for(var r,o=i>1?void 0:i?ti(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(i?r(t,n,o):r(o))||o);return i&&o&&ei(t,n,o),o});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ii=1,ri=3,oi=4,si=e=>(...t)=>({_$litDirective$:e,values:t});class li{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ai=si(class extends li{constructor(e){var t;if(super(e),e.type!==ii||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.nt)||void 0===n?void 0:n.has(e))&&this.it.add(e);return this.render(t)}const r=e.element.classList;this.it.forEach((e=>{e in t||(r.remove(e),this.it.delete(e))}));for(const e in t){const n=!!t[e];n===this.it.has(e)||(null===(i=this.nt)||void 0===i?void 0:i.has(e))||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return V}}),ci=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){customElements.define(e,t)}}})(e,t),ui=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},hi=(e,t,n)=>{t.constructor.createProperty(n,e)};function di(e){return(t,n)=>void 0!==n?hi(e,t,n):ui(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function pi(e){return di({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function fi(e,t){return(({finisher:e,descriptor:t})=>(n,i)=>{var r;if(void 0===i){const i=null!==(r=n.originalKey)&&void 0!==r?r:n.key,o=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return null!=e&&(o.finisher=function(t){e(t,i)}),o}{const r=n.constructor;void 0!==t&&Object.defineProperty(n,i,t(i)),null==e||e(r,i)}})({descriptor:n=>{const i={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;i.get=function(){var n,i;return void 0===this[t]&&(this[t]=null!==(i=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var mi;null===(mi=window.HTMLSlotElement)||void 0===mi||mi.prototype.assignedElements;class gi{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}var vi=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};class bi extends ae{emit(e,t){const n=new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}}vi([di()],bi.prototype,"dir",void 0),vi([di()],bi.prototype,"lang",void 0);const yi=l`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var xi=l`
  ${yi}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;let _i=class extends bi{constructor(){super(...arguments),this.hasSlotController=new gi(this,"footer","header","image")}render(){return N`
      <div
        part="base"
        class=${ai({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};_i.styles=xi,_i=ni([ci("sl-card")],_i);var ki=l`
  ${yi}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;let wi=class extends bi{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=e.target.closest("sl-menu-item");!t||t.disabled||t.inert||("checkbox"===t.type&&(t.checked=!t.checked),this.emit("sl-select",{detail:{item:t}}))}handleKeyDown(e){if("Enter"===e.key){const t=this.getCurrentItem();e.preventDefault(),null==t||t.click()}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let i=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),"ArrowDown"===e.key?i++:"ArrowUp"===e.key?i--:"Home"===e.key?i=0:"End"===e.key&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>!(e.inert||!this.isMenuItem(e))))}getCurrentItem(){return this.getAllItems().find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){this.getAllItems().forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};wi.styles=ki,ni([fi("slot")],wi.prototype,"defaultSlot",2),wi=ni([ci("sl-menu")],wi);let Si="";function Ai(e){Si=e}const $i={name:"default",resolver:e=>function(e=""){if(!Si){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)Ai(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let n="";t&&(n=t.getAttribute("src")),Ai(n.split("/").slice(0,-1).join("/"))}}return Si.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)};const Ci={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '};let Ei=[$i,{name:"system",resolver:e=>e in Ci?`data:image/svg+xml,${encodeURIComponent(Ci[e])}`:""}],Fi=[];function Mi(e){return Ei.find((t=>t.name===e))}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:Ii}=re,zi={};function Li(e,t){const n=Object.assign({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:r}=t,o=Array.isArray(e)?e:[e];t.update=function(e){o.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),o=this[r];t!==o&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,o))}})),r.call(this,e)}}}var Ti=l`
  ${yi}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;const Oi=Symbol(),Di=Symbol();let Pi;const Bi=new Map;let ji=class extends bi{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let i;if(null==t?void 0:t.spriteSheet)return N`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return 410===i.status?Oi:Di}catch(e){return Di}try{const e=document.createElement("div");e.innerHTML=await i.text();const t=e.firstElementChild;if("svg"!==(null==(n=null==t?void 0:t.tagName)?void 0:n.toLowerCase()))return Oi;Pi||(Pi=new DOMParser);const r=Pi.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):Oi}catch(e){return Oi}}connectedCallback(){var e;super.connectedCallback(),e=this,Fi.push(e)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Fi=Fi.filter((t=>t!==e))}getUrl(){const e=Mi(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Mi(this.library),n=this.getUrl();if(!n)return void(this.svg=null);let i=Bi.get(n);if(i||(i=this.resolveIcon(n,t),Bi.set(n,i)),!this.initialRender)return;const r=await i;if(r===Di&&Bi.delete(n),n===this.getUrl())if(((e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t)(r))this.svg=r;else switch(r){case Di:case Oi:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(e=null==t?void 0:t.mutator)||e.call(t,this.svg),this.emit("sl-load")}}render(){return this.svg}};ji.styles=Ti,ni([pi()],ji.prototype,"svg",2),ni([di({reflect:!0})],ji.prototype,"name",2),ni([di()],ji.prototype,"src",2),ni([di()],ji.prototype,"label",2),ni([di({reflect:!0})],ji.prototype,"library",2),ni([Li("label")],ji.prototype,"handleLabelChange",1),ni([Li(["name","src","library"])],ji.prototype,"setIcon",1),ji=ni([ci("sl-icon")],ji);var Ri=l`
  ${yi}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;let Ni=class extends bi{constructor(){super(),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let n="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)})),n}(this.defaultSlot)}render(){return N`
      <div
        part="base"
        class=${ai({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Ni.styles=Ri,ni([fi("slot:not([name])")],Ni.prototype,"defaultSlot",2),ni([fi(".menu-item")],Ni.prototype,"menuItem",2),ni([di()],Ni.prototype,"type",2),ni([di({type:Boolean,reflect:!0})],Ni.prototype,"checked",2),ni([di()],Ni.prototype,"value",2),ni([di({type:Boolean,reflect:!0})],Ni.prototype,"disabled",2),ni([Li("checked")],Ni.prototype,"handleCheckedChange",1),ni([Li("disabled")],Ni.prototype,"handleDisabledChange",1),ni([Li("type")],Ni.prototype,"handleTypeChange",1),Ni=ni([ci("sl-menu-item")],Ni);var Ui=l`
  ${yi}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`;let Vi=class extends bi{render(){return N` <slot part="base" class="menu-label"></slot> `}};Vi.styles=Ui,Vi=ni([ci("sl-menu-label")],Vi);const Hi=new WeakMap,qi=new WeakMap,Wi=new WeakSet,Ki=new WeakMap;class Qi{constructor(e,t){(this.host=e).addController(this),this.options=Object.assign({form:e=>{if(e.hasAttribute("form")&&""!==e.getAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");if(n)return t.getElementById(n)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!==(t=e.disabled)&&void 0!==t&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ki.set(this.host,[]),this.options.assumeInteractionOn.forEach((e=>{this.host.addEventListener(e,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Ki.delete(this.host),this.options.assumeInteractionOn.forEach((e=>{this.host.removeEventListener(e,this.handleInteraction)}))}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Hi.has(this.form)?Hi.get(this.form).add(this.host):Hi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qi.has(this.form)||(qi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&(null===(e=Hi.get(this.form))||void 0===e||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qi.has(this.form)&&(this.form.reportValidity=qi.get(this.form),qi.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),n=this.options.name(this.host),i=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();!t&&!r&&"string"==typeof n&&n.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((t=>{e.formData.append(n,t.toString())})):e.formData.append(n,i.toString()))}handleFormSubmit(e){var t;const n=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null===(t=Hi.get(this.form))||void 0===t||t.forEach((e=>{this.setUserInteracted(e,!0)}))),!this.form||this.form.noValidate||n||i(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ki.set(this.host,[])}handleInteraction(e){const t=Ki.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){t?Wi.add(e):Wi.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))}))),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return null!==(e=this.form)&&void 0!==e?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=Boolean(Wi.has(t)),i=Boolean(t.required);t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}}const Zi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ji=(Object.freeze(Object.assign(Object.assign({},Zi),{valid:!1,valueMissing:!0})),Object.freeze(Object.assign(Object.assign({},Zi),{valid:!1,customError:!0})),e=>null!=e?e:H),Xi=si(class extends li{constructor(e){if(super(e),e.type!==ri&&e.type!==ii&&e.type!==oi)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===V||t===H)return t;const n=e.element,i=e.name;if(e.type===ri){if(t===n[i])return V}else if(e.type===oi){if(!!t===n.hasAttribute(i))return V}else if(e.type===ii&&n.getAttribute(i)===t+"")return V;return((e,t=zi)=>{e._$AH=t})(e),t}}),Yi=new Set,Gi=new MutationObserver(rr),er=new Map;let tr,nr=document.documentElement.dir||"ltr",ir=document.documentElement.lang||navigator.language;function rr(){nr=document.documentElement.dir||"ltr",ir=document.documentElement.lang||navigator.language,[...Yi.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}Gi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class or{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Yi.add(this.host)}hostDisconnected(){Yi.delete(this.host)}dir(){return`${this.host.dir||nr}`.toLowerCase()}lang(){return`${this.host.lang||ir}`.toLowerCase()}getTranslationData(e){var t,n;const i=new Intl.Locale(e),r=null==i?void 0:i.language.toLowerCase(),o=null!==(n=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:i,language:r,region:o,primary:er.get(`${r}-${o}`),secondary:er.get(r)}}exists(e,t){var n;const{primary:i,secondary:r}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||r&&r[e]||t.includeFallback&&tr&&tr[e])}term(e,...t){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let r;if(n&&n[e])r=n[e];else if(i&&i[e])r=i[e];else{if(!tr||!tr[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=tr[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}const sr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};!function(...e){e.map((e=>{const t=e.$code.toLowerCase();er.has(t)?er.set(t,Object.assign(Object.assign({},er.get(t)),e)):er.set(t,e),tr||(tr=e)})),rr()}(sr);class lr extends or{}const ar=l`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var cr=l`
  ${yi}
  ${ar}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;let ur=class extends bi{constructor(){super(...arguments),this.formControlController=new Qi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gi(this,"help-text","label"),this.localize=new lr(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.value=this.value,(null==(e=this.input)?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,(null==(e=this.input)?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;"Enter"!==e.key||t||setTimeout((()=>{e.defaultPrevented||e.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,i){this.input.setRangeText(e,t,n,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=!!this.label||!!e,i=!!this.helpText||!!t,r=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return N`
      <div
        part="form-control"
        class=${ai({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":n,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ai({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${Ji(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Ji(this.placeholder)}
              minlength=${Ji(this.minlength)}
              maxlength=${Ji(this.maxlength)}
              min=${Ji(this.min)}
              max=${Ji(this.max)}
              step=${Ji(this.step)}
              .value=${Xi(this.value)}
              autocapitalize=${Ji(this.autocapitalize)}
              autocomplete=${Ji(this.autocomplete)}
              autocorrect=${Ji(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Ji(this.pattern)}
              enterkeyhint=${Ji(this.enterkeyhint)}
              inputmode=${Ji(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?N`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?N`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?N`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:N`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};ur.styles=cr,ni([fi(".input__control")],ur.prototype,"input",2),ni([pi()],ur.prototype,"hasFocus",2),ni([di()],ur.prototype,"title",2),ni([di({reflect:!0})],ur.prototype,"type",2),ni([di()],ur.prototype,"name",2),ni([di()],ur.prototype,"value",2),ni([((e="value")=>(t,n)=>{const i=t.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(t,o,s){var l;const a=i.getPropertyOptions(e);if(t===("string"==typeof a.attribute?a.attribute:e)){const t=a.converter||f,i=("function"==typeof t?t:null!==(l=null==t?void 0:t.fromAttribute)&&void 0!==l?l:f.fromAttribute)(s,a.type);this[e]!==i&&(this[n]=i)}r.call(this,t,o,s)}})()],ur.prototype,"defaultValue",2),ni([di({reflect:!0})],ur.prototype,"size",2),ni([di({type:Boolean,reflect:!0})],ur.prototype,"filled",2),ni([di({type:Boolean,reflect:!0})],ur.prototype,"pill",2),ni([di()],ur.prototype,"label",2),ni([di({attribute:"help-text"})],ur.prototype,"helpText",2),ni([di({type:Boolean})],ur.prototype,"clearable",2),ni([di({type:Boolean,reflect:!0})],ur.prototype,"disabled",2),ni([di()],ur.prototype,"placeholder",2),ni([di({type:Boolean,reflect:!0})],ur.prototype,"readonly",2),ni([di({attribute:"password-toggle",type:Boolean})],ur.prototype,"passwordToggle",2),ni([di({attribute:"password-visible",type:Boolean})],ur.prototype,"passwordVisible",2),ni([di({attribute:"no-spin-buttons",type:Boolean})],ur.prototype,"noSpinButtons",2),ni([di({reflect:!0})],ur.prototype,"form",2),ni([di({type:Boolean,reflect:!0})],ur.prototype,"required",2),ni([di()],ur.prototype,"pattern",2),ni([di({type:Number})],ur.prototype,"minlength",2),ni([di({type:Number})],ur.prototype,"maxlength",2),ni([di()],ur.prototype,"min",2),ni([di()],ur.prototype,"max",2),ni([di()],ur.prototype,"step",2),ni([di()],ur.prototype,"autocapitalize",2),ni([di()],ur.prototype,"autocorrect",2),ni([di()],ur.prototype,"autocomplete",2),ni([di({type:Boolean})],ur.prototype,"autofocus",2),ni([di()],ur.prototype,"enterkeyhint",2),ni([di({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],ur.prototype,"spellcheck",2),ni([di()],ur.prototype,"inputmode",2),ni([Li("disabled",{waitUntilFirstUpdate:!0})],ur.prototype,"handleDisabledChange",1),ni([Li("step",{waitUntilFirstUpdate:!0})],ur.prototype,"handleStepChange",1),ni([Li("value",{waitUntilFirstUpdate:!0})],ur.prototype,"handleValueChange",1),ur=ni([ci("sl-input")],ur),customElements.define("wrg-search",class extends ae{static properties={_isMenuVisible:{state:!0,type:Boolean},_search:{state:!0,type:String},_selectedArchive:{state:!0,type:Object},_fuse:{state:!0,type:Object},_archives:{state:!0,type:Object}};static styles=l`
      sl-menu,
      sl-card {
        width: 100%;
        margin-top: 8px;
      }

      .menu-wrapper {
        position: relative;
      }

      sl-input {
        box-shadow: var(--sl-shadow-medium);
      }

      sl-menu {
        position: absolute;
        box-shadow: var(--sl-shadow-large);
      }

      a {
        color: var(--sl-color-blue-600);
        font-weight: var(--sl-font-weight-semibold);
        text-decoration: none;
        padding: var(--sl-input-spacing-small);
      }

      a:hover,
      a:active {
        text-decoration: underline;
      }

      .card-heading {
        margin-top: 0;
        margin-bottom: 4px;
        font-size: var(--sl-font-size-large);
        font-weight: var(--sl-font-weight-semibold);
      }

      .url {
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-400);
        margin-bottom: var(--sl-spacing-small);
      }

      .description {
        color: var(--sl-color-neutral-600);
        margin-bottom: var(--sl-spacing-small);
      }

      footer {
        text-align: right;
      }
    `;async firstUpdated(){const e=await _e();this._archives=e.archives,this._fuse=new Gn(this._archives,{keys:["name"],shouldSort:!1,threshold:.4})}render(){return N`
        <sl-input
          value=${this._search||""}
          placeholder="Search web archive collections by name..."
          size="large"
          clearable
          type="search"
          role="searchbox"
          aria-description="search results will appear below"
          @sl-input=${e=>{const{value:t}=e.target;(!t||t.length>1)&&(this._search=t,this._isMenuVisible=!0)}}
        ></sl-input>

        ${this.renderMenu()} ${this.renderSelection()}
      `}renderMenu(){if(!this._isMenuVisible||!this._search)return;const e=this._fuse.search(this._search).map((({item:e})=>e));return N`
        <div class="menu-wrapper">
          <sl-menu
            @sl-select=${e=>{const{item:t}=e.detail;this._search=t.innerText,this._selectedArchive=this._archives.find((({url:e})=>e===t.value)),this._isMenuVisible=!1}}
          >
            ${e.length?N`
                  <sl-menu-label
                    >${e.length}
                    match${1===e.length?"":"es"}</sl-menu-label
                  >

                  ${e.map((e=>N`
                        <sl-menu-item value=${e.url}
                          >${e.name}</sl-menu-item
                        >
                      `))}
                `:N`<sl-menu-label
                  >No matching archives found.</sl-menu-label
                >`}
          </sl-menu>
        </div>
      `}renderSelection(){var e;if(this._selectedArchive)return N`
        <sl-card>
          <h3 class="card-heading">${this._selectedArchive.name}</h3>
          <div class="url">${this._selectedArchive.url}</div>
          ${this._selectedArchive.description?N`<div class="description">
                ${this._selectedArchive.description}
              </div>`:""}
          <footer>
            <a href=${e=this._selectedArchive.url,`../archive/?source=${encodeURIComponent(e)}`}>View Archive</a>
          </footer>
        </sl-card>
      `}})})();