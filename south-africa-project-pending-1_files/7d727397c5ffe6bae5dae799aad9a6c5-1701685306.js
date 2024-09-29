!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,(function(e,t){"use strict";var n=[],r=Object.getPrototypeOf,i=n.slice,o=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f=c.toString,p=f.call(Object),d={},h=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},v=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||v).createElement("script");if(o.text=e,t)for(r in y)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[l.call(e)]||"object":typeof e}var b="3.6.0",w=function(e,t){return new w.fn.init(e,t)};function T(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!h(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}w.fn=w.prototype={jquery:b,constructor:w,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(w.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(w.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||h(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||w.isPlainObject(n)?n:{},i=!1,a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==l.call(e)||(t=r(e))&&("function"!=typeof(n=c.call(t,"constructor")&&t.constructor)||f.call(n)!==p))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(T(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?w.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(T(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o(s)},guid:1,support:d}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){u["[object "+t+"]"]=t.toLowerCase()}));var C=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,v,y,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ue(),S=ue(),k=ue(),A=ue(),N=function(e,t){return e===t&&(f=!0),0},j={}.hasOwnProperty,D=[],q=D.pop,L=D.push,H=D.push,O=D.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){p()},ae=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{H.apply(D=O.call(w.childNodes),w.childNodes),D[w.childNodes.length].nodeType}catch(t){H={apply:D.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,i){var o,s,l,c,f,h,y,m=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!i&&(p(t),t=t||d,g)){if(11!==w&&(f=Z.exec(e)))if(o=f[1]){if(9===w){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return H.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return H.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!A[e+" "]&&(!v||!v.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(y=e,m=t,1===w&&(U.test(e)||z.test(e))){for((m=ee.test(e)&&ye(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,ie):t.setAttribute("id",c=b)),s=(h=a(e)).length;s--;)h[s]=(c?"#"+c:":scope")+" "+xe(h[s]);y=h.join(",")}try{return H.apply(r,m.querySelectorAll(y)),r}catch(t){A(e,!0)}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace($,"$1"),t,r,i)}function ue(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function le(e){return e[b]=!0,e}function ce(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ve(e){return le((function(t){return t=+t,le((function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))}))}))}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},o=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},p=se.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!=d&&9===a.nodeType&&a.documentElement&&(h=(d=a).documentElement,g=!o(d),w!=d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),n.scope=ce((function(e){return h.appendChild(e).appendChild(d.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=K.test(d.getElementsByClassName),n.getById=ce((function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=K.test(d.querySelectorAll))&&(ce((function(e){var t;h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+b+"-]").length||v.push("~="),(t=d.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")}))),(n.matchesSelector=K.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",F)})),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),t=K.test(h.compareDocumentPosition),x=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},N=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==d||e.ownerDocument==w&&x(w,e)?-1:t==d||t.ownerDocument==w&&x(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==d?-1:t==d?1:i?-1:o?1:c?P(c,e)-P(c,t):0;if(i===o)return pe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?pe(a[r],s[r]):a[r]==w?-1:s[r]==w?1:0}),d},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&g&&!A[t+" "]&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){A(t,!0)}return 0<se(t,d,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=d&&p(e),x(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&j.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(N),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=se.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=se.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&-1<i.indexOf(n):"$="===t?n&&i.slice(-n.length)===n:"~="===t?-1<(" "+i.replace(B," ")+" ").indexOf(n):"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){for(x=(d=(l=(c=(f=(p=v)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++x||(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p!==t)););return(x-=i)===r||x%r==0&&0<=x/r}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return i[b]?i(t):1<i.length?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=P(e,o[a])]=!(n[r]=o[a])})):function(e){return i(e,0,n)}):i}},pseudos:{not:le((function(e){var t=[],n=[],r=s(e.replace($,"$1"));return r[b]?le((function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:le((function(e){return function(t){return 0<se(e,t).length}})),contains:le((function(e){return e=e.replace(te,ne),function(t){return-1<(t.textContent||i(t)).indexOf(e)}})),lang:le((function(e){return V.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve((function(){return[0]})),last:ve((function(e,t){return[t-1]})),eq:ve((function(e,t,n){return[n<0?n+t:n]})),even:ve((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:ve((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:ve((function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e})),gt:ve((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=de(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(f=t[b]||(t[b]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if((c[o]=p)[2]=e(t,n,u))return!0}return!1}}function we(e){return 1<e.length?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(e,t,n,r,i,o){return r&&!r[b]&&(r=Ce(r)),i&&!i[b]&&(i=Ce(i,o)),le((function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),v=!e||!o&&t?g:Te(g,p,e,s,u),y=n?i||(o?e:h||r)?[]:a:v;if(n&&n(v,y,s,u),r)for(l=Te(y,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!(v[d[c]]=f));if(o){if(i||e){if(i){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f);i(null,y=[],l,u)}for(c=y.length;c--;)(f=y[c])&&-1<(l=i?P(o,f):p[c])&&(o[l]=!(a[l]=f))}}else y=Te(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)}))}function Ee(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=be((function(e){return e===t}),s,!0),f=be((function(e){return-1<P(t,e)}),s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[be(we(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return Ce(1<u&&we(p),1<u&&xe(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace($,"$1"),n,u<i&&Ee(e.slice(u,i)),i<o&&Ee(e=e.slice(i)),i<o&&xe(e))}p.push(n)}return we(p)}return me.prototype=r.filters=r.pseudos,r.setFilters=new me,a=se.tokenize=function(e,t){var n,i,o,a,s,u,l,c=S[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=_.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),s=s.slice(n.length)),r.filter)!(i=G[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?se.error(e):S(e,u).slice(0)},s=se.compile=function(e,t){var n,i,o,s,u,c,f=[],h=[],v=k[e+" "];if(!v){for(t||(t=a(e)),n=t.length;n--;)(v=Ee(t[n]))[b]?f.push(v):h.push(v);(v=k(e,(i=h,s=0<(o=f).length,u=0<i.length,c=function(e,t,n,a,c){var f,h,v,y=0,m="0",x=e&&[],b=[],w=l,C=e||u&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,S=C.length;for(c&&(l=t==d||t||c);m!==S&&null!=(f=C[m]);m++){if(u&&f){for(h=0,t||f.ownerDocument==d||(p(f),n=!g);v=i[h++];)if(v(f,t||d,n)){a.push(f);break}c&&(T=E)}s&&((f=!v&&f)&&y--,e&&x.push(f))}if(y+=m,s&&m!==y){for(h=0;v=o[h++];)v(x,b,t,n);if(e){if(0<y)for(;m--;)x[m]||b[m]||(b[m]=q.call(a));b=Te(b)}H.apply(a,b),c&&!e&&0<b.length&&1<y+o.length&&se.uniqueSort(a)}return c&&(T=E,l=w),x},s?le(c):c))).selector=e}return v},u=se.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if(2<(u=d[0]=d[0].slice(0)).length&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=G.needsContext.test(e)?0:u.length;o--&&(l=u[o],!r.relative[c=l.type]);)if((f=r.find[c])&&(i=f(l.matches[0].replace(te,ne),ee.test(u[0].type)&&ye(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&xe(u)))return H.apply(n,i),n;break}}return(p||s(e,d))(i,t,!g,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},n.sortStable=b.split("").sort(N).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||fe("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||fe("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||fe(R,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),se}(e);w.find=C,w.expr=C.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=C.uniqueSort,w.text=C.getText,w.isXMLDoc=C.isXML,w.contains=C.contains,w.escapeSelector=C.escape;var E=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=w.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return h(t)?w.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?w.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?w.grep(e,(function(e){return-1<s.call(t,e)!==n})):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,(function(e){return 1===e.nodeType})))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter((function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return 1<r?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?w(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),N.test(r[1])&&w.isPlainObject(t))for(r in t)h(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=v.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):h(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,D=w(v);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(w(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return E(e,"parentNode")},parentsUntil:function(e,t,n){return E(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return E(e,"nextSibling")},prevAll:function(e){return E(e,"previousSibling")},nextUntil:function(e,t,n){return E(e,"nextSibling",n)},prevUntil:function(e,t,n){return E(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},(function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),1<this.length&&(H[e]||w.uniqueSort(i),L.test(e)&&i.reverse()),this.pushStack(i)}}));var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&h(i=e.promise)?i.call(e).done(t).fail(n):e&&h(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},w.each(t.match(P)||[],(function(e,t){n[t]=!0})),n):w.extend({},e);var r,i,o,a,s=[],u=[],l=-1,c=function(){for(a=a||e.once,o=r=!0;u.length;l=-1)for(i=u.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(l=s.length,i=!1);e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){w.each(n,(function(n,r){h(r)?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==x(r)&&t(r)}))}(arguments),i&&!r&&c()),this},remove:function(){return w.each(arguments,(function(e,t){for(var n;-1<(n=w.inArray(t,s,n));)s.splice(n,1),n<=l&&l--})),this},has:function(e){return e?-1<w.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred((function(t){w.each(n,(function(n,r){var i=h(e[r[4]])&&e[r[4]];o[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&h(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,h(l)?i?l.call(e,a(o,n,R,i),a(o,n,M,i)):(o++,l.call(e,a(o,n,R,i),a(o,n,M,i),a(o,n,R,n.notifyWith))):(r!==R&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),o<=t+1&&(r!==M&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred((function(e){n[0][3].add(a(0,e,h(i)?i:R,e.notifyWith)),n[1][3].add(a(0,e,h(t)?t:R)),n[2][3].add(a(0,e,h(r)?r:M))})).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,(function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add((function(){r=s}),n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith})),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=1<arguments.length?i.call(arguments):n,--t||a.resolveWith(r,o)}};if(t<=1&&(I(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||h(o[n]&&o[n].then)))return a.then();for(;n--;)I(o[n],s(n),a.reject);return a.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&W.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout((function(){throw t}))};var F=w.Deferred();function B(){v.removeEventListener("DOMContentLoaded",B),e.removeEventListener("load",B),w.ready()}w.fn.ready=function(e){return F.then(e).catch((function(e){w.readyException(e)})),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0)!==e&&0<--w.readyWait||F.resolveWith(v,[w])}}),w.ready.then=F.then,"complete"===v.readyState||"loading"!==v.readyState&&!v.documentElement.doScroll?e.setTimeout(w.ready):(v.addEventListener("DOMContentLoaded",B),e.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,h(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=w.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){Q.set(this,e)})):$(this,(function(t){var n;if(o&&void 0===t)return void 0!==(n=Q.get(o,e))||void 0!==(n=Z(o,e))?n:void 0;this.each((function(){Q.set(this,e,t)}))}),null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each((function(){Q.remove(this,e)}))}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){w.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:w.Callbacks("once memory").add((function(){Y.remove(e,[t+"queue",n])}))})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each((function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){w.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=v.documentElement,ie=function(e){return w.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return w.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===w.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=e.nodeType&&(w.cssNumber[t]||"px"!==l&&+u)&&te.exec(w.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=w.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}w.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ae(this)?w(this).show():w(this).hide()}))}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=v.createDocumentFragment().appendChild(v.createElement("div")),(fe=v.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),d.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",d.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",d.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?w.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,d.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&-1<w.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n)for(c=0;o=a[c++];)he.test(o.type||"")&&n.push(o);return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return v.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each((function(){w.event.add(this,t,i,r,n)}))}function Se(e,t,n){n?(Y.set(e,t,!1),w.event.add(e,t,{namespace:!1,handler:function(e){var r,o,a=Y.get(this,t);if(1&e.isTrigger&&this[t]){if(a.length)(w.event.special[t]||{}).delegateType&&e.stopPropagation();else if(a=i.call(arguments),Y.set(this,t,a),r=n(this,t),this[t](),a!==(o=Y.get(this,t))||r?Y.set(this,t,!1):o={},a!==o)return e.stopImmediatePropagation(),e.preventDefault(),o&&o.value}else a.length&&(Y.set(this,t,{value:w.event.trigger(w.extend(a[0],w.Event.prototype),a.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,t)&&w.event.add(e,t,we)}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(e);if(V(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(re,i),n.guid||(n.guid=w.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(t){return void 0!==w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(P)||[""]).length;l--;)d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){for(l=(t=(t||"").match(P)||[""]).length;l--;)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||w.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=w.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=w.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(a=w.event.handlers.call(this,u,l),t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((w.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<w(i,this).index(l):w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:h(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},w.event.addProp),w.each({focus:"focusin",blur:"focusout"},(function(e,t){w.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}})),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||w.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),w.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each((function(){w.event.remove(this,e,n,t)}))}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&w(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)w.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=w.extend({},o),Q.set(t,a))}}function He(e,t,n,r){t=o(t);var i,a,s,u,l,c,f=0,p=e.length,g=p-1,v=t[0],y=h(v);if(y||1<p&&"string"==typeof v&&!d.checkClone&&Ae.test(v))return e.each((function(i){var o=e.eq(i);y&&(t[0]=v.call(this,i,o.html())),He(o,t,n,r)}));if(p&&(a=(i=xe(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=a),a||r)){for(u=(s=w.map(ve(i,"script"),De)).length;f<p;f++)l=i,f!==g&&(l=w.clone(l,!0,!0),u&&w.merge(s,ve(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,qe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!Y.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&!l.noModule&&w._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):m(l.textContent.replace(Ne,""),l,c))}return e}function Oe(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(d.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],"input"===(l=(u=a[r]).nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,(function(e){return void 0===e?w.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return He(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)}))},prepend:function(){return He(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return He(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return He(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return w.clone(this,e,t)}))},html:function(e){return $(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return He(this,arguments,(function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ve(this)),n&&n.replaceChild(t,this))}),e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),w(i[s])[t](n),a.apply(r,n.get());return this.pushStack(r)}}));var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=w.style(e,t)),!d.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",a=36===n(t.right),i=36===n(t.width),c.style.position="absolute",o=12===n(c.offsetWidth/3),re.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u,l=v.createElement("div"),c=v.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",d.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(d,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),o},reliableTrDimensions:function(){var t,n,r,i;return null==s&&(t=v.createElement("table"),n=v.createElement("tr"),r=v.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",r.style.height="9px",r.style.display="block",re.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),s=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,re.removeChild(t)),s}}))}();var Be=["Webkit","Moz","ms"],$e=v.createElement("div").style,_e={};function ze(e){return w.cssProps[e]||_e[e]||(e in $e?e:_e[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Be.length;n--;)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+ne[a]+"Width",!0,i))):(u+=w.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=w.css(e,"border"+ne[a]+"Width",!0,i):s+=w.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!d.boxSizingReliable()||n)&&"border-box"===w.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!d.boxSizingReliable()&&i||!d.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===w.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===w.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),d.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],(function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!Ue.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,t,r):Me(e,Ve,(function(){return Je(e,t,r)}))},set:function(e,n,r){var i,o=Re(e),a=!d.scrollboxSize()&&"absolute"===o.position,s=(a||r)&&"border-box"===w.css(e,"boxSizing",!1,o),u=r?Qe(e,t,r,s,o):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Qe(e,t,"border",!1,o)-.5)),u&&(i=te.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ye(0,n,u)}}})),w.cssHooks.marginLeft=Fe(d.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),w.each({margin:"",padding:"",border:"Width"},(function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ne[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ye)})),w.fn.extend({css:function(e,t){return $(this,(function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)}),e,t,1<arguments.length)}}),((w.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||!w.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=Ke.prototype.init,w.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===v.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(ot):e.setTimeout(ot,w.fx.interval),w.fx.tick())}function at(){return e.setTimeout((function(){Ze=void 0})),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(e,t,n){var r,i,o=0,a=lt.prefilters.length,s=w.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1;for(var t=Ze||at(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ze||at(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=lt.prefilters[o].call(l,e,c,l.opts))return h(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,ut,l),h(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){h(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always((function(){p.always((function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()}))}))),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=w.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done((function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)w.style(e,r,d[r])}))),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||h(e)&&e,duration:e,easing:n&&t||t&&!h(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){h(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=lt(this,w.extend({},e),o);(i||Y.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=Y.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&it.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Y.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),w.each(["toggle","show","hide"],(function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(st(t,!0),e,r,i)}})),w.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),Ze=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){et||(et=!0,ot())},w.fx.stop=function(){et=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx&&w.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}}))},tt=v.createElement("input"),nt=v.createElement("select").appendChild(v.createElement("option")),tt.type="checkbox",d.checkOn=""!==tt.value,d.optSelected=nt.selected,(tt=v.createElement("input")).value="t",tt.type="radio",d.radioValue="t"===tt.value;var ct,ft=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return $(this,w.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each((function(){w.removeAttr(this,e)}))}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!d.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=ft[t]||w.find.attr;ft[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ft[a],ft[a]=i,i=null!=n(e,t,r)?a:null,ft[a]=o),i}}));var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}w.fn.extend({prop:function(e,t){return $(this,w.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each((function(){delete this[w.propFix[e]||e]}))}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){w.propFix[this.toLowerCase()]=this})),w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(h(e))return this.each((function(t){w(this).addClass(e.call(this,t,gt(this)))}));if((t=vt(e)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(h(e))return this.each((function(t){w(this).removeClass(e.call(this,t,gt(this)))}));if(!arguments.length)return this.attr("class","");if((t=vt(e)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){for(a=0;o=t[a++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):h(e)?this.each((function(n){w(this).toggleClass(e.call(this,n,gt(this),t),t)})):this.each((function(){var t,i,o,a;if(r)for(i=0,o=w(this),a=vt(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=gt(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=h(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,(function(e){return null==e?"":e+""}))),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(yt,""):null==n?"":n:void 0}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:ht(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=w.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<w.inArray(w.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],(function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<w.inArray(w(e).val(),t)}},d.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),d.focusin="onfocusin"in e;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,r,i){var o,a,s,u,l,f,p,d,y=[r||v],m=c.call(t,"type")?t.type:t,x=c.call(t,"namespace")?t.namespace.split("."):[];if(a=d=s=r=r||v,3!==r.nodeType&&8!==r.nodeType&&!mt.test(m+w.event.triggered)&&(-1<m.indexOf(".")&&(m=(x=m.split(".")).shift(),x.sort()),l=m.indexOf(":")<0&&"on"+m,(t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:w.makeArray(n,[t]),p=w.event.special[m]||{},i||!p.trigger||!1!==p.trigger.apply(r,n))){if(!i&&!p.noBubble&&!g(r)){for(u=p.delegateType||m,mt.test(u+m)||(a=a.parentNode);a;a=a.parentNode)y.push(a),s=a;s===(r.ownerDocument||v)&&y.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=y[o++])&&!t.isPropagationStopped();)d=a,t.type=1<o?u:p.bindType||m,(f=(Y.get(a,"events")||Object.create(null))[t.type]&&Y.get(a,"handle"))&&f.apply(a,n),(f=l&&a[l])&&f.apply&&V(a)&&(t.result=f.apply(a,n),!1===t.result&&t.preventDefault());return t.type=m,i||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(y.pop(),n)||!V(r)||l&&h(r[m])&&!g(r)&&((s=r[l])&&(r[l]=null),w.event.triggered=m,t.isPropagationStopped()&&d.addEventListener(m,xt),r[m](),t.isPropagationStopped()&&d.removeEventListener(m,xt),w.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each((function(){w.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),d.focusin||w.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=Y.access(r,t);i||r.addEventListener(e,n,!0),Y.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=Y.access(r,t)-1;i?Y.access(r,t,i):(r.removeEventListener(e,n,!0),Y.remove(r,t))}}}));var bt=e.location,wt={guid:Date.now()},Tt=/\?/;w.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(t){}return r=n&&n.getElementsByTagName("parsererror")[0],n&&!r||w.error("Invalid XML: "+(r?w.map(r.childNodes,(function(e){return e.textContent})).join("\n"):t)),n};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(e,t,n,r){var i;if(Array.isArray(t))w.each(t,(function(t,i){n||Ct.test(e)?r(e,i):At(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==x(t))r(e,t);else for(i in t)At(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=h(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,(function(){i(this.name,this.value)}));else for(n in e)At(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))})).map((function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,(function(e){return{name:t.name,value:e.replace(Et,"\r\n")}})):{name:t.name,value:n.replace(Et,"\r\n")}})).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=v.createElement("a");function It(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(P)||[];if(h(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Wt(e,t,n,r){var i={},o=e===Pt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],(function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)})),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Ft(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}Mt.href=bt.href,w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,w.ajaxSettings),t):Ft(w.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f,p,d=w.ajaxSetup({},n),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?w(h):w.event,y=w.Deferred(),m=w.Callbacks("once memory"),x=d.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=qt.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),S(0,t),this}};if(y.promise(E),d.url=((t||d.url||bt.href)+"").replace(Ht,bt.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(P)||[""],null==d.crossDomain){u=v.createElement("a");try{u.href=d.url,u.href=u.href,d.crossDomain=Mt.protocol+"//"+Mt.host!=u.protocol+"//"+u.host}catch(t){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=w.param(d.data,d.traditional)),Wt(Ot,d,n,E),l)return E;for(f in(c=w.event&&d.global)&&0==w.active++&&w.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Lt.test(d.type),i=d.url.replace(jt,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Nt,"+")):(p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(Tt.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace(Dt,"$1"),p=(Tt.test(i)?"&":"?")+"_="+wt.guid+++p),d.url=i+p),d.ifModified&&(w.lastModified[i]&&E.setRequestHeader("If-Modified-Since",w.lastModified[i]),w.etag[i]&&E.setRequestHeader("If-None-Match",w.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&E.setRequestHeader("Content-Type",d.contentType),E.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Rt+"; q=0.01":""):d.accepts["*"]),d.headers)E.setRequestHeader(f,d.headers[f]);if(d.beforeSend&&(!1===d.beforeSend.call(h,E,d)||l))return E.abort();if(C="abort",m.add(d.complete),E.done(d.success),E.fail(d.error),r=Wt(Pt,d,n,E)){if(E.readyState=1,c&&g.trigger("ajaxSend",[E,d]),l)return E;d.async&&0<d.timeout&&(s=e.setTimeout((function(){E.abort("timeout")}),d.timeout));try{l=!1,r.send(b,S)}catch(t){if(l)throw t;S(-1,t)}}else S(-1,"No Transport");function S(t,n,a,u){var f,p,v,b,T,C=n;l||(l=!0,s&&e.clearTimeout(s),r=void 0,o=u||"",E.readyState=0<t?4:0,f=200<=t&&t<300||304===t,a&&(b=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,E,a)),!f&&-1<w.inArray("script",d.dataTypes)&&w.inArray("json",d.dataTypes)<0&&(d.converters["text script"]=function(){}),b=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(d,b,E,f),f?(d.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[i]=T),(T=E.getResponseHeader("etag"))&&(w.etag[i]=T)),204===t||"HEAD"===d.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,f=!(v=b.error))):(v=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",f?y.resolveWith(h,[p,C,E]):y.rejectWith(h,[E,C,v]),E.statusCode(x),x=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[E,d,f?p:v]),m.fireWith(h,[E,C]),c&&(g.trigger("ajaxComplete",[E,d]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],(function(e,t){w[t]=function(e,n,r,i){return h(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}})),w.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),w._evalUrl=function(e,t,n){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){w.globalEval(e,t,n)}})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(h(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return h(e)?this.each((function(t){w(this).wrapInner(e.call(this,t))})):this.each((function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=h(e);return this.each((function(n){w(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){w(this).replaceWith(this.childNodes)})),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=w.ajaxSettings.xhr();d.cors=!!$t&&"withCredentials"in $t,d.ajax=$t=!!$t,w.ajaxTransport((function(t){var n,r;if(d.cors||$t&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Bt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout((function(){n&&r()}))},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(i){if(n)throw i}},abort:function(){n&&n()}}})),w.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),w.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=w("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),v.head.appendChild(t[0])},abort:function(){n&&n()}}}));var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||w.expando+"_"+wt.guid++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",(function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Ut.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=h(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ut,"$1"+i):!1!==t.jsonp&&(t.url+=(Tt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always((function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,zt.push(i)),a&&h(o)&&o(a[0]),a=o=void 0})),"script"})),d.createHTMLDocument=((_t=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),w.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(d.createHTMLDocument?((r=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(r)):t=v),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&w(o).remove(),w.merge([],i.childNodes)));var r,i,o},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),h(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)})).always(n&&function(e,t){a.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},w.expr.pseudos.animated=function(e){return w.grep(w.timers,(function(t){return e===t.elem})).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=w.css(e,"position"),c=w(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=w.css(e,"top"),u=w.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),h(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){w.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===w.css(e,"position");)e=e.offsetParent;return e||re}))}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return $(this,(function(e,r,i){var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),w.each(["top","left"],(function(e,t){w.cssHooks[t]=Fe(d.pixelPosition,(function(e,n){if(n)return n=We(e,t),Pe.test(n)?w(e).position()[t]+"px":n}))})),w.each({Height:"height",Width:"width"},(function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return $(this,(function(t,n,i){var o;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)}),t,a?i:void 0,a)}}))})),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){w.fn[t]=function(e){return this.on(t,e)}})),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){w.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}));var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.proxy=function(e,t){var n,r,o;if("string"==typeof t&&(n=e[t],t=e,e=n),h(e))return r=i.call(arguments,2),(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||w.guid++,o},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=A,w.isFunction=h,w.isWindow=g,w.camelCase=X,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},w.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return w}));var Vt=e.jQuery,Gt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Gt),t&&e.jQuery===w&&(e.jQuery=Vt),w},void 0===t&&(e.jQuery=e.$=w),w}));

(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.amdO={};var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,i,o;return n=e,o=[{key:"load",value:function(t,n){return(new e).loadCollection(t,n)}}],(i=[{key:"loadCollection",value:function(e,t){var n=this,i=e.js?e.js:[],o=e.css?e.css:[],a=e.img?e.img:[];i=r(i,(function(e){return!document.querySelector('head script[src="'+e+'"]')})),o=r(o,(function(e){return!document.querySelector('head link[href="'+e+'"]')}));var s=0,u=!1,l=!1;function c(){return!!l&&!!u&&!(s<o.length)&&void(t&&t())}0!==i.length||0!==o.length||0!==a.length?(this.loadJavaScript(i,(function(){u=!0,c()})),o.forEach((function(e){n.loadStyleSheet(e,(function(){s++,c()}))})),this.loadImage(a,(function(){l=!0,c()}))):t&&t()}},{key:"loadStyleSheet",value:function(e,t){var n=document.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.addEventListener("load",t,!1),void 0!==n&&document.getElementsByTagName("head")[0].appendChild(n),n}},{key:"loadJavaScript",value:function(e,t){if(e.length<=0)return t();var n=this,r=e.shift(),i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src",r),i.addEventListener("load",(function(){n.loadJavaScript(e,t)}),!1),void 0!==i&&document.getElementsByTagName("head")[0].appendChild(i)}},{key:"loadImage",value:function(e,t){if(e.length<=0)return t();var n=0;e.forEach((function(r){var i=new Image;i.onload=function(){++n==e.length&&t&&t()},i.src=r}))}}])&&t(n.prototype,i),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=[],r=e.length,i=0;i<r;i++)t(e[i])&&n.push(e[i]);return n}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)throw new Error("The request handler name is not specified.");if(!t.match(/^(?:\w+\:{2})?on*/))throw new Error('Invalid handler name. The correct handler name format is: "onEvent".');if("undefined"==typeof FormData)throw new Error("The browser does not support the FormData interface.");this.options=n,this.handler=t}var t,n,r;return t=e,n=[{key:"getRequestOptions",value:function(){return{method:"POST",url:this.options.url?this.options.url:window.location.href,headers:this.buildHeaders(),responseType:!1===this.options.download?"":"blob"}}},{key:"buildHeaders",value:function(){var e=this.handler,t=this.options,n={"X-Requested-With":"XMLHttpRequest","X-OCTOBER-REQUEST-HANDLER":e};t.files||(n["Content-Type"]=t.bulk?"application/json":"application/x-www-form-urlencoded"),t.flash&&(n["X-OCTOBER-REQUEST-FLASH"]=1),t.partial&&(n["X-OCTOBER-REQUEST-PARTIAL"]=t.partial);var r=this.extractPartials(t.update,t.partial);r&&(n["X-OCTOBER-REQUEST-PARTIALS"]=r);var i=this.getXSRFToken();i&&(n["X-XSRF-TOKEN"]=i);var o=this.getCSRFToken();return o&&(n["X-CSRF-TOKEN"]=o),t.headers&&t.headers.constructor==={}.constructor&&Object.assign(n,t.headers),n}},{key:"extractPartials",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=[];if(e){if("object"!==i(e))throw new Error("Invalid update value. The correct format is an object ({...})");for(var r in e)"_self"===r&&t?n.push(t):n.push(r)}return n.join("&")}},{key:"getCSRFToken",value:function(){var e=document.querySelector('meta[name="csrf-token"]');return e?e.getAttribute("content"):null}},{key:"getXSRFToken",value:function(){var e=null;if(document.cookie&&""!=document.cookie)for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].replace(/^([\s]*)|([\s]*)$/g,"");if("XSRF-TOKEN="==r.substring(0,11)){e=decodeURIComponent(r.substring(11));break}}return e}}],r=[{key:"fetch",value:function(e,t){return new this(e,t).getRequestOptions()}}],n&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?document:n,i=t.detail,o=void 0===i?{}:i,a=t.bubbles,s=void 0===a||a,u=t.cancelable,l=void 0===u||u,c=new CustomEvent(e,{detail:o,bubbles:s,cancelable:l});return r.dispatchEvent(c),c}function u(e){return e.replace(/^\n/,"")}function l(e,t){return e.reduce((function(e,n,r){return e+n+(null==t[r]?"":t[r])}),"")}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=/[^.]*(?=\..*)\.|.*/,v=/\..*/,g=/::\d+$/,m={},b=1,w={mouseenter:"mouseover",mouseleave:"mouseout"},E=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]),k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"on",value:function(e,t,n,r,i){S(e,t,n,r,i,!1)}},{key:"one",value:function(e,t,n,r,i){S(e,t,n,r,i,!0)}},{key:"off",value:function(e,t,n,r,i){if("string"==typeof t&&e){var o=f(x(t,n,r,i),4),a=o[0],s=o[1],u=o[2],l=o[3],c=u!==t,d=O(e),h=d[u]||{},p=t.startsWith(".");if(void 0===s){if(p)for(var y=0,v=Object.keys(d);y<v.length;y++)q(e,d,v[y],t.slice(1));for(var m=0,b=Object.keys(h);m<b.length;m++){var w=b[m],E=w.replace(g,"");if(!c||t.includes(E)){var k=h[w];T(e,d,u,k.callable,k.delegationSelector,l)}}}else{if(!h)return;T(e,d,u,s,a?n:null,l)}}}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?document:n,i=t.detail,o=void 0===i?{}:i,a=t.bubbles,u=void 0===a||a,l=t.cancelable,c=void 0===l||l;return s(e,{target:r,detail:o,bubbles:u,cancelable:c})}}],(n=null)&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){return t&&"".concat(t,"::").concat(b++)||e.uidEvent||b++}function O(e){var t=j(e);return e.uidEvent=t,m[t]=m[t]||{},m[t]}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.values(e).find((function(e){return e.callable===t&&e.delegationSelector===n}))}function x(e,t,n,r){var i,o="string"==typeof t,a=o?n:t,s=o?r:n,u=(i=(i=e).replace(v,""),w[i]||i);return E.has(u)||(u=e),[o,a,u,s]}function S(e,t,n,r,i,o){if("string"==typeof t&&e){var a=f(x(t,n,r,i),4),s=a[0],u=a[1],l=a[2],d=a[3];if(t in w){u=function(e){return function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)}}(u)}var h=O(e),p=h[l]||(h[l]={}),v=A(p,u,s?n:null);if(v)v.oneOff=v.oneOff&&o;else{var g=j(u,t.replace(y,"")),m=s?function(e,t,n){return function r(i){for(var o=e.querySelectorAll(t),a=i.target;a&&a!==this;a=a.parentNode){var s,u=c(o);try{for(u.s();!(s=u.n()).done;){if(s.value===a)return i.delegateTarget=a,r.oneOff&&k.off(e,i.type,t,n),n.apply(a,[i])}}catch(e){u.e(e)}finally{u.f()}}}}(e,n,u):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&k.off(e,r.type,t),t.apply(e,[r])}}(e,u);m.delegationSelector=s?n:null,m.callable=u,m.oneOff=o,m.uidEvent=g,p[g]=m,e.addEventListener(l,m,d)}}}function T(e,t,n,r,i,o){var a=A(t[n],r,i);a&&(e.removeEventListener(n,a,o),delete t[n][a.uidEvent])}function q(e,t,n,r){for(var i=t[n]||{},o=0,a=Object.keys(i);o<a.length;o++){var s=a[o];if(s.includes(r)){var u=i[s];T(e,t,n,u.callable,u.delegationSelector)}}}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=0,F=-1,P=-2,D=-3,B=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.failed=!1,this.progress=0,this.sent=!1,this.delegate=t,this.url=n,this.options=r,this.headers=r.headers||{},this.method=r.method||"GET",this.responseType=r.responseType||"",this.data=r.data,this.timeout=r.timeout||0,this.requestProgressed=function(e){e.lengthComputable&&i.setProgress(e.loaded/e.total)},this.requestLoaded=function(){i.endRequest((function(e){i.processResponseData(e,(function(e,t){var n=e.getResponseHeader("Content-Type"),r=function(e){return(e||"").includes("application/json")}(n)?JSON.parse(t):t;if(i.options.htmlOnly&&!function(e){return(e||"").match(/^text\/html|^application\/xhtml\+xml/)}(n))return i.failed=!0,void i.delegate.requestFailedWithStatusCode(P);e.status>=200&&e.status<300?i.delegate.requestCompletedWithResponse(r,e.status,function(e,t){if(e.getResponseHeader("X-OCTOBER-LOCATION"))return e.getResponseHeader("X-OCTOBER-LOCATION");var n=t.match(/^(.*)#/);return(n?n[1]:t)!==e.responseURL?e.responseURL:null}(e,i.url)):(i.failed=!0,i.delegate.requestFailedWithStatusCode(e.status,r))}))}))},this.requestFailed=function(){i.endRequest((function(){i.failed=!0,i.delegate.requestFailedWithStatusCode(C)}))},this.requestTimedOut=function(){i.endRequest((function(){i.failed=!0,i.delegate.requestFailedWithStatusCode(F)}))},this.requestCanceled=function(){i.options.trackAbort?i.endRequest((function(){i.failed=!0,i.delegate.requestFailedWithStatusCode(D)})):i.endRequest()},this.createXHR()}var t,n,r;return t=e,n=[{key:"send",value:function(){this.xhr&&!this.sent&&(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(this.data||null),this.sent=!0,this.delegate.requestStarted())}},{key:"abort",value:function(){this.xhr&&this.sent&&this.xhr.abort()}},{key:"notifyApplicationBeforeRequestStart",value:function(){k.dispatch("ajax:request-start",{detail:{url:this.url,xhr:this.xhr},cancelable:!1})}},{key:"notifyApplicationAfterRequestEnd",value:function(){k.dispatch("ajax:request-end",{detail:{url:this.url,xhr:this.xhr},cancelable:!1})}},{key:"createXHR",value:function(){var e=this.xhr=new XMLHttpRequest;for(var t in e.open(this.method,this.url,!0),e.responseType=this.responseType,e.onprogress=this.requestProgressed,e.onload=this.requestLoaded,e.onerror=this.requestFailed,e.ontimeout=this.requestTimedOut,e.onabort=this.requestCanceled,this.timeout&&(e.timeout=1e3*this.timeout),this.headers)e.setRequestHeader(t,this.headers[t]);return e}},{key:"endRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.xhr&&(this.notifyApplicationAfterRequestEnd(),e(this.xhr),this.destroy())}},{key:"setProgress",value:function(e){this.progress=e,this.delegate.requestProgressed(e)}},{key:"destroy",value:function(){this.setProgress(1),this.delegate.requestFinished()}},{key:"processResponseData",value:function(e,t){if("blob"===this.responseType){var n=e.getResponseHeader("Content-Disposition")||"";if(0!==n.indexOf("attachment")&&0!==n.indexOf("inline")){var r=new FileReader;r.addEventListener("load",(function(){t(e,r.result)})),r.readAsText(e.response)}else t(e,e.response)}else t(e,e.responseText)}}],n&&R(t.prototype,n),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L="pending",U="rejected",N="resolved",J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t||{},this.stateStr=L,this.successFuncs=[],this.failureFuncs=[],this.progressFuncs=[],this.resolveArgs=[],this.rejectArgs=[],this.progressArgs=[],this.isProgressNotified=!1}var t,n,r;return t=e,n=[{key:"resolve",value:function(){return this.stateStr===L&&(this.resolveArgs=arguments,this.callFunction.call(this,this.successFuncs,this.resolveArgs),this.stateStr=N),this}},{key:"reject",value:function(){return this.stateStr===L&&(this.rejectArgs=arguments,this.callFunction.call(this,this.failureFuncs,this.rejectArgs),this.stateStr=U),this}},{key:"notify",value:function(){return this.stateStr===L&&(this.progressArgs=arguments,this.callFunction.call(this,this.progressFuncs,this.progressArgs),this.isProgressNotified=!0),this}},{key:"abort",value:function(){this.options.delegate&&this.options.delegate.abort()}},{key:"done",value:function(){var e=Array.prototype.slice.call(arguments);return this.successFuncs=this.successFuncs.concat(e),this.stateStr===N&&this.callFunction.call(this,e,this.resolveArgs),this}},{key:"fail",value:function(){var e=Array.prototype.slice.call(arguments);return this.failureFuncs=this.failureFuncs.concat(e),this.stateStr===U&&this.callFunction.call(this,e,this.rejectArgs),this}},{key:"progress",value:function(){var e=Array.prototype.slice.call(arguments);return this.progressFuncs=this.progressFuncs.concat(e),this.stateStr===L&&this.isProgressNotified&&this.callFunction.call(this,e,this.progressArgs),this}},{key:"always",value:function(){var e=Array.prototype.slice.call(arguments);return this.successFuncs=this.successFuncs.concat(e),this.failureFuncs=this.failureFuncs.concat(e),this.stateStr!==L&&this.callFunction.call(this,e,this.resolveArgs||this.rejectArgs),this}},{key:"then",value:function(){var e=[];for(var t in arguments){var n;n=Array.isArray(arguments[t])?arguments[t]:[arguments[t]],e.push(n)}return this.done.apply(this,e[0]),this.fail.apply(this,e[1]),this.progress.apply(this,e[2]),this}},{key:"promise",value:function(){var e=["resolve","reject","promise","notify"],t={};for(var n in this)-1===e.indexOf(n)&&(t[n]=this[n]);return t}},{key:"state",value:function(){return arguments.length>0&&(stateStr=arguments[0]),stateStr}},{key:"callFunction",value:function(e,t,n){var r=(n=n||{}).scope||this;for(var i in e){var o=e[i];"function"==typeof o&&o.apply(r,t)}}}],n&&I(t.prototype,n),r&&I(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K="replace",W="prepend",z="append",G="update",Z=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t.el,this.delegate=t,this.context=n,this.options=r,this.context.start=this.start.bind(this),this.context.success=this.success.bind(this),this.context.error=this.error.bind(this),this.context.complete=this.complete.bind(this),this.context.cancel=this.cancel.bind(this)}var t,r,i;return t=e,(r=[{key:"invoke",value:function(e,t){return this.options[e]?this.options[e].apply(this.context,t):this[e]?this[e].apply(this,H(t)):void 0}},{key:"invokeFunc",value:function(e,t){if(this.options[e])return this.options[e](this.el,t)}},{key:"start",value:function(e){this.invoke("markAsUpdating",[!0])}},{key:"success",value:function(e,t,n){var r=this,i=new J;if(!1===this.invoke("beforeUpdate",[e,t,n]))return i;if(!1===this.invokeFunc("beforeUpdateFunc",e))return i;if(!this.delegate.applicationAllowsUpdate(e,t,n))return i;if(this.delegate.options.download&&e instanceof Blob&&this.invoke("handleFileDownload",[e,n]))return i;if(this.delegate.options.flash&&e.X_OCTOBER_FLASH_MESSAGES)for(var o in e.X_OCTOBER_FLASH_MESSAGES)this.invoke("handleFlashMessage",[e.X_OCTOBER_FLASH_MESSAGES[o],o]);return e.X_OCTOBER_DISPATCHES&&this.invoke("handleBrowserEvents",[e.X_OCTOBER_DISPATCHES])||(i=this.invoke("handleUpdateResponse",[e,t,n])).done((function(){r.delegate.notifyApplicationRequestSuccess(e,t,n),r.invokeFunc("successFunc",e)})),i}},{key:"error",value:function(e,t,n){var r,i=this,o=new J;if(void 0!==window.ocUnloading&&window.ocUnloading||t==D)return o;if(this.delegate.toggleRedirect(!1),406==t&&e){if(e.X_OCTOBER_DISPATCHES&&this.invoke("handleBrowserEvents",[e.X_OCTOBER_DISPATCHES]))return o;r=e.X_OCTOBER_ERROR_MESSAGE,o=this.invoke("handleUpdateResponse",[e,t,n])}else r=e,o.resolve();return o.done((function(){i.el!==document&&i.el.setAttribute("data-error-message",r),i.delegate.applicationAllowsError(e,t,n)&&!1!==i.invokeFunc("errorFunc",e)&&i.invoke("handleErrorMessage",[r])})),o}},{key:"complete",value:function(e,t,n){this.delegate.notifyApplicationRequestComplete(e,t,n),this.invokeFunc("completeFunc",e),this.invoke("markAsUpdating",[!1])}},{key:"cancel",value:function(){this.invokeFunc("cancelFunc")}},{key:"handleConfirmMessage",value:function(e){var t=this,n=new J;if(n.done((function(){t.delegate.sendInternal()})).fail((function(){t.invoke("cancel")})),this.delegate.notifyApplicationConfirmMessage(e,n).defaultPrevented)return!1;if(e){var r=confirm(e);return r||this.invoke("cancel"),r}}},{key:"handleFlashMessage",value:function(e,t){}},{key:"handleErrorMessage",value:function(e){this.delegate.notifyApplicationErrorMessage(e).defaultPrevented||e&&alert(e)}},{key:"handleValidationMessage",value:function(e,t){if(this.delegate.notifyApplicationBeforeValidate(e,t),this.delegate.formEl){var n=!0;for(var r in t){var i,o=[];i=r.replace(/\.(\w+)/g,"[$1]"),o.push('[name="'+i+'"]:not([disabled])'),o.push('[name="'+i+'[]"]:not([disabled])'),i=("."+r).replace(/\.(\w+)/g,"[$1]"),o.push('[name$="'+i+'"]:not([disabled])'),o.push('[name$="'+i+'[]"]:not([disabled])');var a=r.replace(/\.[0-9]+$/g,"");r!==a&&(i=a.replace(/\.(\w+)/g,"[$1]"),o.push('[name="'+i+'[]"]:not([disabled])'),i=("."+a).replace(/\.(\w+)/g,"[$1]"),o.push('[name$="'+i+'[]"]:not([disabled])'));var s=this.delegate.formEl.querySelector(o.join(", "));if(s){var u=this.delegate.notifyApplicationFieldInvalid(s,r,t[r],n);n&&(u.defaultPrevented||s.focus(),n=!1)}}}}},{key:"handleBrowserEvents",value:function(e){var t=this;if(!e||!e.length)return!1;var n=!1;return e.forEach((function(e){t.delegate.notifyApplicationCustomEvent(e.event,M(M({},e.data||{}),{},{context:t.context})).defaultPrevented&&(n=!0)})),n}},{key:"handleRedirectResponse",value:function(e){this.delegate.notifyApplicationBeforeRedirect().defaultPrevented||(oc.useTurbo&&oc.useTurbo()?oc.visit(e):location.assign(e))}},{key:"markAsUpdating",value:function(e){var t=this.options.update||{};for(var n in t){var r=t[n],i=[];t._self&&n==this.options.partial&&this.delegate.partialEl?(r=t._self,i=[this.delegate.partialEl]):i=Y(r,'[data-ajax-partial="'+n+'"]'),i.forEach((function(t){e?t.setAttribute("data-ajax-updating",""):t.removeAttribute("data-ajax-updating")}))}}},{key:"handleUpdateResponse",value:function(e,t,r){var i=this,o=this.options.update||{},a=new J;return a.done((function(){var n=function(){var n=o[a]||a,s=[];o._self&&a==i.options.partial&&i.delegate.partialEl?(n=o._self,s=[i.delegate.partialEl]):s=Y(n,'[data-ajax-partial="'+a+'"]'),s.forEach((function(o){var s=function(e,t){if("string"==typeof e){if("!"===e.charAt(0))return K;if("@"===e.charAt(0))return z;if("^"===e.charAt(0))return W}return void 0!==t.dataset.ajaxUpdateMode?t.dataset.ajaxUpdateMode:G}(n,o);if(s===K){var u=o.parentNode;o.insertAdjacentHTML("afterEnd",e[a]),u.removeChild(o),ee(u,e[a])}else s===z?(o.insertAdjacentHTML("beforeEnd",e[a]),ee(o,e[a])):s===W?(o.insertAdjacentHTML("afterBegin",e[a]),ee(o,e[a])):(i.delegate.notifyApplicationBeforeReplace(o),o.innerHTML=e[a],function(e){Array.from(e.querySelectorAll("script")).forEach((function(e){var t=document.createElement("script");Array.from(e.attributes).forEach((function(e){return t.setAttribute(e.name,e.value)})),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)}))}(o));i.delegate.notifyApplicationAjaxUpdate(o,e,t,r)}))};for(var a in e)n();setTimeout((function(){i.delegate.notifyApplicationUpdateComplete(e,t,r),i.invoke("afterUpdate",[e,t,r]),i.invokeFunc("afterUpdateFunc",e)}),0)})),e.X_OCTOBER_REDIRECT&&this.delegate.toggleRedirect(e.X_OCTOBER_REDIRECT),this.delegate.isRedirect&&this.invoke("handleRedirectResponse",[this.delegate.options.redirect]),e.X_OCTOBER_ERROR_FIELDS&&this.invoke("handleValidationMessage",[e.X_OCTOBER_ERROR_MESSAGE,e.X_OCTOBER_ERROR_FIELDS]),e.X_OCTOBER_ASSETS?n.load(e.X_OCTOBER_ASSETS,(function(){return a.resolve()})):a.resolve(),a}},{key:"handleFileDownload",value:function(e,t){if(this.options.browserTarget)return window.open(window.URL.createObjectURL(e),this.options.browserTarget),!0;var n="string"==typeof this.options.download?this.options.download:function(e){var t=e.getResponseHeader("Content-Disposition");if(!t)return null;for(var n=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/g,r=null,i=null;null!==(i=n.exec(t));)r=i;return null!==r&&r[1]?null===/filename[^;*=\n]*\*=[^']*''/.exec(r[0])?r[1].replace(/['"]/g,""):decodeURIComponent(r[1].substring(r[1].indexOf("''")+2)):null}(t);if(n){var r=document.createElement("a");return r.href=window.URL.createObjectURL(e),r.download=n,r.target="_blank",r.click(),window.URL.revokeObjectURL(r.href),!0}}},{key:"applyQueryToUrl",value:function(e){for(var t=new URLSearchParams(window.location.search),n=function(){var n=i[r],o=e[n];Array.isArray(o)?(t.delete(n),t.delete("".concat(n,"[]")),o.forEach((function(e){return t.append("".concat(n,"[]"),e)}))):null===o?(t.delete(n),t.delete("".concat(n,"[]"))):t.set(n,o)},r=0,i=Object.keys(e);r<i.length;r++)n();var o=window.location.pathname;t.toString()&&(o+="?"+t.toString().replaceAll("%5B%5D=","[]=")),oc.useTurbo&&oc.useTurbo()?oc.visit(o,{action:"swap",scroll:!1}):(history.replaceState(null,"",o),localStorage.setItem("ocPushStateReferrer",o))}}])&&V(t.prototype,r),i&&V(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){return!0===e?document.querySelectorAll(t):"string"!=typeof e?[e]:-1===["#",".","@","^","!","="].indexOf(e.charAt(0))?[]:(-1!==["@","^","!","="].indexOf(e.charAt(0))&&(e=e.substring(1)),e||(e=t),document.querySelectorAll(e))}function ee(e,t){var n=document.createElement("div");n.innerHTML=t,Array.from(n.querySelectorAll("script")).forEach((function(t){var n=document.createElement("script");Array.from(t.attributes).forEach((function(e){return n.setAttribute(e.name,e.value)})),n.appendChild(document.createTextNode(t.innerHTML)),e.appendChild(n),e.removeChild(n)}))}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"assignToObj",value:function(t,n,r){(new e).assignObjectInternal(t,n,r)}},{key:"serializeJSON",value:function(t){return(new e).parseContainer(t)}}],(n=[{key:"parseContainer",value:function(e){var t=this,n={};return e.querySelectorAll("input, textarea, select").forEach((function(e){if(!(!e.name||e.disabled||["file","reset","submit","button"].indexOf(e.type)>-1)&&(!(["checkbox","radio"].indexOf(e.type)>-1)||e.checked)){if("select-multiple"===e.type){var r=[];return Array.from(e.options).forEach((function(t){t.selected&&r.push({name:e.name,value:t.value})})),void t.assignObjectInternal(n,e.name,r)}t.assignObjectInternal(n,e.name,e.value)}})),n}},{key:"assignObjectInternal",value:function(e,t,n){this.assignObjectNested(e,this.nameToArray(t),n)}},{key:"assignObjectNested",value:function(e,t,n){var r=e,i=t.length-1;t.forEach((function(e,t){void 0===r[e]&&(r[e]={}),t===i&&(r[e]=n),r=r[e]}))}},{key:"nameToArray",value:function(e){for(var t,n=/([^\]\[]+)/g,r=[];t=n.exec(e);)r.push(t[0]);return r}}])&&te(t.prototype,n),r&&te(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie,oe=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userData=t||{},this.targetEl=n,this.formEl=r}var t,n,r;return t=e,(n=[{key:"getRequestData",value:function(){var e;return e=this.formEl?new FormData(this.formEl):new FormData,this.appendSingleInputElement(e),e}},{key:"getAsFormData",value:function(){return this.appendJsonToFormData(this.getRequestData(),this.userData)}},{key:"getAsQueryString",value:function(){return this.convertFormDataToQuery(this.getAsFormData())}},{key:"getAsJsonData",value:function(){return JSON.stringify(this.convertFormDataToJson(this.getAsFormData()))}},{key:"appendSingleInputElement",value:function(e){if(!this.formEl&&this.targetEl&&(t=this.targetEl,["input","select","textarea"].includes((t.tagName||"").toLowerCase()))){var t,n=this.targetEl.name;n&&void 0===this.userData[n]&&("file"===this.targetEl.type?this.targetEl.files.forEach((function(t){e.append(n,t)})):e.append(n,this.targetEl.value))}}},{key:"appendJsonToFormData",value:function(e,t,n){var r=this;for(var i in t){var o=i;n&&(o=n+"["+i+"]");var a=t[i];a&&a.constructor==={}.constructor?this.appendJsonToFormData(e,a,o):a&&a.constructor===[].constructor?a.forEach((function(t,n){t.constructor==={}.constructor||t.constructor===[].constructor?r.appendJsonToFormData(e,t,o+"["+n+"]"):e.append(o+"[]",r.castJsonToFormData(t))})):e.append(o,this.castJsonToFormData(a))}return e}},{key:"convertFormDataToQuery",value:function(e){var t=this.formDataToArray(e);return Object.keys(t).map((function(e){return e.endsWith("[]")?t[e].map((function(t){return encodeURIComponent(e)+"="+encodeURIComponent(t)})).join("&"):encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")}},{key:"convertFormDataToJson",value:function(e){var t=this.formDataToArray(e),n={};for(var r in t)ne.assignToObj(n,r,t[r]);return n}},{key:"formDataToArray",value:function(e){return Object.fromEntries(Array.from(e.keys()).map((function(t){return[t,t.endsWith("[]")?e.getAll(t):e.getAll(t).pop()]})))}},{key:"castJsonToFormData",value:function(e){return null===e?"":!0===e?"1":!1===e?"0":e}}])&&re(t.prototype,n),r&&re(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement(),this.hiding=!1,this.value=0,this.visible=!1,this.trickle=function(){t.setValue(t.value+Math.random()/100)}}var t,n,r;return t=e,n=[{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.cssClass&&this.progressElement.classList.add(e.cssClass),this.visible||(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())}},{key:"hide",value:function(){var e=this;this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement((function(){e.uninstallProgressElement(),e.stopTrickling(),e.visible=!1,e.hiding=!1})))}},{key:"setValue",value:function(e){this.value=e,this.refresh()}},{key:"installStylesheetElement",value:function(){e.stylesheetReady||(document.head.insertBefore(this.stylesheetElement,document.head.firstChild),e.stylesheetReady=!0)}},{key:"installProgressElement",value:function(){this.progressElement.style.width="0",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()}},{key:"fadeProgressElement",value:function(t){this.progressElement.style.opacity="0",setTimeout(t,1.5*e.animationDuration)}},{key:"uninstallProgressElement",value:function(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}},{key:"startTrickling",value:function(){this.trickleInterval||(this.trickleInterval=setInterval(this.trickle,e.animationDuration))}},{key:"stopTrickling",value:function(){clearInterval(this.trickleInterval),delete this.trickleInterval}},{key:"refresh",value:function(){var e=this;requestAnimationFrame((function(){e.progressElement.style.width="".concat(10+90*e.value,"%")}))}},{key:"createStylesheetElement",value:function(){var t=document.createElement("style");return t.textContent=e.defaultCSS,t}},{key:"createProgressElement",value:function(){var e=document.createElement("div");return e.className="oc-progress-bar",e}}],r=[{key:"defaultCSS",get:function(){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=u(l(e,n)).split("\n"),o=i[0].match(/^\s+/),a=o?o[0].length:0;return i.map((function(e){return e.slice(a)})).join("\n")}(ie||(t=["\n        .oc-progress-bar {\n            position: fixed;\n            display: block;\n            top: 0;\n            left: 0;\n            height: 3px;\n            background: #0076ff;\n            z-index: 9999;\n            transition:\n                width ","ms ease-out,\n                opacity ","ms ","ms ease-in;\n            transform: translate3d(0, 0, 0);\n        }\n    "],n||(n=t.slice(0)),ie=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),e.animationDuration,e.animationDuration/2,e.animationDuration/2);var t,n}},{key:"progressBar",get:function(){return{show:function(){var e=le();e.setValue(0),e.show()},hide:function(){var e=le();e.setValue(100),e.hide()}}}}],n&&ae(t.prototype,n),r&&ae(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function le(){return ue.instance||(ue.instance=new ue),ue.instance}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}se(ue,"instance",null),se(ue,"stylesheetReady",!1),se(ue,"animationDuration",300);const pe=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.handler=n,this.options=fe(fe({},this.constructor.DEFAULTS),r||{}),this.context={el:t,handler:n,options:this.options},this.progressBar=new ue,this.showProgressBar=function(){i.progressBar.show({cssClass:"is-ajax"})}}var t,n,r;return t=e,r=[{key:"DEFAULTS",get:function(){return{handler:null,update:{},files:!1,bulk:!1,download:!1,browserValidate:!1,browserTarget:null,progressBarDelay:500,progressBar:null}}},{key:"send",value:function(t,n){return new e(document,t,n).start()}},{key:"sendElement",value:function(t,n,r){return"string"==typeof t&&(t=document.querySelector(t)),new e(t,n,r).start()}}],(n=[{key:"start",value:function(){if(this.notifyApplicationAjaxSetup(),this.initOtherElements(),this.preprocessOptions(),this.actions=new Z(this,this.context,this.options),this.validateClientSideForm()&&this.applicationAllowsRequest()&&(!this.options.confirm||this.actions.invoke("handleConfirmMessage",[this.options.confirm])))return this.sendInternal(),this.options.async?this.wrapInAsyncPromise(this.promise):this.promise}},{key:"sendInternal",value:function(){var e,t=this,n=new oe(this.options.data,this.el,this.formEl);e=this.options.files?n.getAsFormData():this.options.bulk?n.getAsJsonData():n.getAsQueryString(),this.options.query&&this.actions.invoke("applyQueryToUrl",[this.options.query]);var r=a.fetch(this.handler,this.options),i=r.url,o=r.headers,s=r.method,u=r.responseType;this.request=new B(this,i,{method:s,headers:o,responseType:u,data:e,trackAbort:!0}),this.promise=new J({delegate:this.request}),this.isRedirect=this.options.redirect&&this.options.redirect.length>0,this.notifyApplicationBeforeSend(),this.notifyApplicationAjaxPromise(),this.promise.fail((function(e,n,r){t.isRedirect||t.notifyApplicationAjaxFail(e,n,r)})).done((function(e,n,r){t.isRedirect||t.notifyApplicationAjaxDone(e,n,r)})).always((function(e,n,r){t.notifyApplicationAjaxAlways(e,n,r)})),this.request.send()}},{key:"toggleRedirect",value:function(e){e?(this.options.redirect=e,this.isRedirect=!0):(this.options.redirect=null,this.isRedirect=!1)}},{key:"applicationAllowsRequest",value:function(){return!this.notifyApplicationBeforeRequest().defaultPrevented}},{key:"applicationAllowsUpdate",value:function(e,t,n){return!this.notifyApplicationBeforeUpdate(e,t,n).defaultPrevented}},{key:"applicationAllowsError",value:function(e,t,n){return!this.notifyApplicationRequestError(e,t,n).defaultPrevented}},{key:"notifyApplicationAjaxSetup",value:function(){return s("ajax:setup",{target:this.el,detail:{context:this.context}})}},{key:"notifyApplicationAjaxPromise",value:function(){return s("ajax:promise",{target:this.el,detail:{context:this.context}})}},{key:"notifyApplicationAjaxFail",value:function(e,t,n){return s("ajax:fail",{target:this.el,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationAjaxDone",value:function(e,t,n){return s("ajax:done",{target:this.el,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationAjaxAlways",value:function(e,t,n){return s("ajax:always",{target:this.el,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationAjaxUpdate",value:function(e,t,n,r){return s("ajax:update",{target:e,detail:{context:this.context,data:t,responseCode:n,xhr:r}})}},{key:"notifyApplicationBeforeRedirect",value:function(){return s("ajax:before-redirect",{target:this.el})}},{key:"notifyApplicationBeforeRequest",value:function(){return s("ajax:before-request",{target:this.triggerEl,detail:{context:this.context}})}},{key:"notifyApplicationBeforeUpdate",value:function(e,t,n){return s("ajax:before-update",{target:this.triggerEl,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationRequestSuccess",value:function(e,t,n){return s("ajax:request-success",{target:this.triggerEl,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationRequestError",value:function(e,t,n){return s("ajax:request-error",{target:this.triggerEl,detail:{context:this.context,message:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationRequestComplete",value:function(e,t,n){return s("ajax:request-complete",{target:this.triggerEl,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationBeforeValidate",value:function(e,t){return s("ajax:before-validate",{target:this.triggerEl,detail:{context:this.context,message:e,fields:t}})}},{key:"notifyApplicationBeforeReplace",value:function(e){return s("ajax:before-replace",{target:e})}},{key:"notifyApplicationBeforeSend",value:function(){return s("ajax:before-send",{target:window,detail:{context:this.context}})}},{key:"notifyApplicationUpdateComplete",value:function(e,t,n){return s("ajax:update-complete",{target:window,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationFieldInvalid",value:function(e,t,n,r){return s("ajax:invalid-field",{target:window,detail:{element:e,fieldName:t,errorMsg:n,isFirst:r}})}},{key:"notifyApplicationConfirmMessage",value:function(e,t){return s("ajax:confirm-message",{target:window,detail:{message:e,promise:t}})}},{key:"notifyApplicationErrorMessage",value:function(e){return s("ajax:error-message",{target:window,detail:{message:e}})}},{key:"notifyApplicationCustomEvent",value:function(e,t){return s(e,{target:this.el,detail:t})}},{key:"requestStarted",value:function(){this.markAsProgress(!0),this.toggleLoadingElement(!0),this.options.progressBar&&this.showProgressBarAfterDelay(),this.actions.invoke("start",[this.request.xhr])}},{key:"requestProgressed",value:function(e){this.promise.notify(e)}},{key:"requestCompletedWithResponse",value:function(e,t){this.actions.invoke("success",[e,t,this.request.xhr]),this.actions.invoke("complete",[e,t,this.request.xhr]),this.promise.resolve(e,t,this.request.xhr)}},{key:"requestFailedWithStatusCode",value:function(e,t){this.actions.invoke("error",[t,e,this.request.xhr]),this.actions.invoke("complete",[t,e,this.request.xhr]),this.promise.reject(t,e,this.request.xhr)}},{key:"requestFinished",value:function(){this.markAsProgress(!1),this.toggleLoadingElement(!1),this.options.progressBar&&this.hideProgressBar()}},{key:"initOtherElements",value:function(){"string"==typeof this.options.form?this.formEl=document.querySelector(this.options.form):this.options.form?this.formEl=this.options.form:this.formEl=this.el&&this.el!==document?this.el.closest("form"):null,this.triggerEl=this.formEl?this.formEl:this.el,this.partialEl=this.el&&this.el!==document?this.el.closest("[data-ajax-partial]"):null,this.loadingEl="string"==typeof this.options.loading?document.querySelector(this.options.loading):this.options.loading}},{key:"preprocessOptions",value:function(){void 0===this.options.partial&&this.partialEl&&void 0!==this.partialEl.dataset.ajaxPartial&&(this.options.partial=this.partialEl.dataset.ajaxPartial||!0)}},{key:"validateClientSideForm",value:function(){return!(this.options.browserValidate&&"function"==typeof document.createElement("input").reportValidity&&this.formEl&&!this.formEl.checkValidity()&&(this.formEl.reportValidity(),1))}},{key:"toggleLoadingElement",value:function(e){this.loadingEl&&("function"==typeof this.loadingEl.show&&"function"==typeof this.loadingEl.hide?e?this.loadingEl.show():this.loadingEl.hide():this.loadingEl.style.display=e?"block":"none")}},{key:"showProgressBarAfterDelay",value:function(){this.progressBar.setValue(0),this.progressBarTimeout=window.setTimeout(this.showProgressBar,this.options.progressBarDelay)}},{key:"hideProgressBar",value:function(){this.progressBar.setValue(100),this.progressBar.hide(),null!=this.progressBarTimeout&&(window.clearTimeout(this.progressBarTimeout),delete this.progressBarTimeout)}},{key:"markAsProgress",value:function(e){e?(document.documentElement.setAttribute("data-ajax-progress",""),this.formEl&&this.formEl.setAttribute("data-ajax-progress",this.handler)):(document.documentElement.removeAttribute("data-ajax-progress"),this.formEl&&this.formEl.removeAttribute("data-ajax-progress"))}},{key:"wrapInAsyncPromise",value:function(e){return new Promise((function(t,n,r){e.fail((function(e){n(e)})).done((function(e){t(e)})),r((function(){e.abort()}))}))}}])&&he(t.prototype,n),r&&he(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ye(e){return ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}window.oc||(window.oc={}),window.oc.AjaxRequest||(window.oc.AjaxRequest=pe,window.oc.AssetManager=n,window.oc.ajax=pe.send,window.oc.request||(window.oc.request=pe.sendElement));var ge=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"paramToObj",value:function(e,t){if(void 0===t&&(t=""),"object"===ye(t))return t;"{"!==t.charAt(0)&&(t="{"+t+"}");try{return this.parseJSON(t)}catch(t){throw new Error("Error parsing the "+e+" attribute value. "+t)}}},{key:"parseJSON",value:function(t){return JSON.parse((new e).parseString(t))}}],(n=[{key:"parseString",value:function(e){if(!(e=e.trim()).length)throw new Error("Broken JSON object.");for(var t="";e&&","===e[0];)e=e.substr(1);if('"'===e[0]||"'"===e[0]){if(e[e.length-1]!==e[0])throw new Error("Invalid string JSON object.");for(var n='"',r=1;r<e.length;r++)if("\\"===e[r])"'"===e[r+1]||(n+=e[r]),n+=e[r+1],r++;else{if(e[r]===e[0])return n+='"';'"'===e[r]?n+='\\"':n+=e[r]}throw new Error("Invalid string JSON object.")}if("true"===e||"false"===e)return e;if("null"===e)return"null";var i=parseFloat(e);if(!isNaN(i))return i.toString();if("{"===e[0]){var o="needKey";for(t="{",r=1;r<e.length;r++)if(!this.isBlankChar(e[r]))if("needKey"!==o||'"'!==e[r]&&"'"!==e[r]){if("needKey"===o&&this.canBeKeyHead(e[r])){var a;t+='"',t+=a=this.parseKey(e,r),t+='"',r+=a.length-1,o="afterKey"}else if("afterKey"===o&&":"===e[r])t+=":",o=":";else if(":"===o)r=r+(n=this.getBody(e,r)).originLength-1,t+=this.parseString(n.body),o="afterBody";else if("afterBody"===o||"needKey"===o){for(var s=r;","===e[s]||this.isBlankChar(e[s]);)s++;if("}"===e[s]&&s===e.length-1){for(;","===t[t.length-1];)t=t.substr(0,t.length-1);return t+="}"}s!==r&&"{"!==t&&(t+=",",o="needKey",r=s-1)}}else t+='"'+(a=this.parseKey(e,r+1,e[r]))+'"',r+=a.length,r+=1,o="afterKey";throw new Error("Broken JSON object near "+t)}if("["===e[0]){for(t="[",o="needBody",r=1;r<e.length;r++)if(" "!==e[r]&&"\n"!==e[r]&&"\t"!==e[r])if("needBody"===o){if(","===e[r]){t+="null,";continue}if("]"===e[r]&&r===e.length-1)return","===t[t.length-1]&&(t=t.substr(0,t.length-1)),t+="]";r=r+(n=this.getBody(e,r)).originLength-1,t+=this.parseString(n.body),o="afterBody"}else if("afterBody"===o)if(","===e[r])for(t+=",",o="needBody";","===e[r+1]||this.isBlankChar(e[r+1]);)","===e[r+1]&&(t+="null,"),r++;else if("]"===e[r]&&r===e.length-1)return t+="]";throw new Error("Broken JSON array near "+t)}}},{key:"parseKey",value:function(e,t,n){for(var r="",i=t;i<e.length;i++){if(n&&n===e[i])return r;if(!n&&(" "===e[i]||":"===e[i]))return r;r+=e[i],"\\"===e[i]&&i+1<e.length&&(r+=e[i+1],i++)}throw new Error("Broken JSON syntax near "+r)}},{key:"getBody",value:function(e,t){if('"'===e[t]||"'"===e[t]){for(var n=e[t],r=t+1;r<e.length;r++)if("\\"===e[r])n+=e[r],r+1<e.length&&(n+=e[r+1]),r++;else{if(e[r]===e[t])return{originLength:(n+=e[t]).length,body:n};n+=e[r]}throw new Error("Broken JSON string body near "+n)}if("t"===e[t]){if(e.indexOf("true",t)===t)return{originLength:"true".length,body:"true"};throw new Error("Broken JSON boolean body near "+e.substr(0,t+10))}if("f"===e[t]){if(e.indexOf("f",t)===t)return{originLength:"false".length,body:"false"};throw new Error("Broken JSON boolean body near "+e.substr(0,t+10))}if("n"===e[t]){if(e.indexOf("null",t)===t)return{originLength:"null".length,body:"null"};throw new Error("Broken JSON boolean body near "+e.substr(0,t+10))}if("-"===e[t]||"+"===e[t]||"."===e[t]||e[t]>="0"&&e[t]<="9"){for(n="",r=t;r<e.length;r++){if(!("-"===e[r]||"+"===e[r]||"."===e[r]||e[r]>="0"&&e[r]<="9"))return{originLength:n.length,body:n};n+=e[r]}throw new Error("Broken JSON number body near "+n)}if("{"===e[t]||"["===e[t]){var i=[e[t]];for(n=e[t],r=t+1;r<e.length;r++){if(n+=e[r],"\\"===e[r])r+1<e.length&&(n+=e[r+1]),r++;else if('"'===e[r])'"'===i[i.length-1]?i.pop():"'"!==i[i.length-1]&&i.push(e[r]);else if("'"===e[r])"'"===i[i.length-1]?i.pop():'"'!==i[i.length-1]&&i.push(e[r]);else if('"'!==i[i.length-1]&&"'"!==i[i.length-1])if("{"===e[r])i.push("{");else if("}"===e[r]){if("{"!==i[i.length-1])throw new Error("Broken JSON "+("{"===e[t]?"object":"array")+" body near "+n);i.pop()}else if("["===e[r])i.push("[");else if("]"===e[r]){if("["!==i[i.length-1])throw new Error("Broken JSON "+("{"===e[t]?"object":"array")+" body near "+n);i.pop()}if(!i.length)return{originLength:r-t,body:n}}throw new Error("Broken JSON "+("{"===e[t]?"object":"array")+" body near "+n)}throw new Error("Broken JSON body near "+e.substr(t-5>=0?t-5:0,50))}},{key:"canBeKeyHead",value:function(e){return"\\"!==e[0]&&(e[0]>="a"&&e[0]<="z"||e[0]>="A"&&e[0]<="Z"||"_"===e[0]||e[0]>="0"&&e[0]<="9"||"$"===e[0]||e.charCodeAt(0)>255)}},{key:"isBlankChar",value:function(e){return" "===e||"\n"===e||"\t"===e}}])&&ve(t.prototype,n),r&&ve(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ke=function(){function e(t,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r||{},this.ogElement=t,this.element=this.findElement(t),this.element?(this.assignAsEval("beforeUpdateFunc","requestBeforeUpdate"),this.assignAsEval("afterUpdateFunc","requestAfterUpdate"),this.assignAsEval("successFunc","requestSuccess"),this.assignAsEval("errorFunc","requestError"),this.assignAsEval("cancelFunc","requestCancel"),this.assignAsEval("completeFunc","requestComplete"),this.assignAsData("progressBar","requestProgressBar"),this.assignAsData("confirm","requestConfirm"),this.assignAsData("redirect","requestRedirect"),this.assignAsData("loading","requestLoading"),this.assignAsData("form","requestForm"),this.assignAsData("url","requestUrl"),this.assignAsData("bulk","requestBulk",{emptyAsTrue:!0}),this.assignAsData("files","requestFiles",{emptyAsTrue:!0}),this.assignAsData("flash","requestFlash",{emptyAsTrue:!0}),this.assignAsData("download","requestDownload",{emptyAsTrue:!0}),this.assignAsData("update","requestUpdate",{parseJson:!0}),this.assignAsData("query","requestQuery",{parseJson:!0}),this.assignAsData("browserTarget","browserTarget"),this.assignAsData("browserValidate","browserValidate",{emptyAsTrue:!0}),this.assignAsMetaData("update","ajaxRequestUpdate",{parseJson:!0,mergeValue:!0}),this.assignRequestData(),n||(n=this.getHandlerName()),pe.sendElement(this.element,n,this.options)):pe.send(n,this.options)}var t,n,r;return t=e,n=[{key:"findElement",value:function(e){if(!e||e===document)return null;if(e.matches("[data-request]"))return e;var t=e.closest("[data-request]");return t||e}},{key:"getHandlerName",value:function(){return this.element.dataset.dataRequest?this.element.dataset.dataRequest:this.element.getAttribute("data-request")}},{key:"assignAsEval",value:function(e,t){var n;void 0===this.options[e]&&(n=this.element.dataset[t]?this.element.dataset[t]:this.element.getAttribute("data-"+je(t)))&&(this.options[e]=function(e,t){return new Function("data",n).apply(e,[t])})}},{key:"assignAsData",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.parseJson,o=void 0!==i&&i,a=r.emptyAsTrue,s=void 0!==a&&a;void 0===this.options[e]&&null!==(n=this.element.dataset[t]?this.element.dataset[t]:this.element.getAttribute("data-"+je(t)))&&(this.options[e]=o?ge.paramToObj("data-"+je(t),n):this.castAttrToOption(n,s))}},{key:"assignAsMetaData",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.mergeValue,i=void 0===r||r,o=n.parseJson,a=void 0!==o&&o,s=n.emptyAsTrue,u=void 0!==s&&s,l=document.documentElement.querySelector('head meta[name="'+je(t)+'"]');if(l){var c=l.getAttribute("content");c=a?ge.paramToObj(je(t),c):this.castAttrToOption(c,u),this.options[e]=i?be(be({},this.options[e]||{}),c):c}}},{key:"castAttrToOption",value:function(e,t){return!(!t||""!==e)||"true"===e||"1"===e||"false"!==e&&"0"!==e&&e}},{key:"assignRequestData",value:function(){var e={};this.options.data&&Object.assign(e,this.options.data);var t=this.ogElement.getAttribute("data-request-data");t&&Object.assign(e,ge.paramToObj("data-request-data",t)),function(e,t){var n=[];if(!e.parentNode)return n;for(var r=e.parentNode.closest(t);r;)n.push(r),r=r.parentNode.closest(t);return n}(this.ogElement,"[data-request-data]").reverse().forEach((function(t){Object.assign(e,ge.paramToObj("data-request-data",t.getAttribute("data-request-data")))})),this.options.data=e}}],r=[{key:"fromElement",value:function(t,n,r){return"string"==typeof t&&(t=document.querySelector(t)),new e(t,n,r)}}],n&&Ee(t.prototype,n),r&&Ee(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function je(e){return e.replace(/[A-Z]/g,(function(e){return"-".concat(e.toLowerCase())}))}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ae=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.started=!1,this.documentVisible=!0}var t,n,r;return t=e,(n=[{key:"start",value:function(){var e=this;this.started||(window.onbeforeunload=this.documentOnBeforeUnload,addEventListener("DOMContentLoaded",(function(){return e.render()})),addEventListener("page:updated",(function(){return e.render()})),addEventListener("ajax:update-complete",(function(){return e.render()})),addEventListener("visibilitychange",(function(){return e.documentOnVisibilityChange()})),k.on(document,"submit","[data-request]",this.documentOnSubmit),k.on(document,"input","input[data-request][data-track-input]",this.documentOnKeyup),k.on(document,"change","select[data-request], input[type=radio][data-request], input[type=checkbox][data-request], input[type=file][data-request]",this.documentOnChange),k.on(document,"keydown","input[type=text][data-request], input[type=submit][data-request], input[type=password][data-request]",this.documentOnKeydown),k.on(document,"click","a[data-request], button[data-request], input[type=button][data-request], input[type=submit][data-request]",this.documentOnClick),this.started=!0)}},{key:"stop",value:function(){this.started&&(this.started=!1)}},{key:"render",value:function(e){k.dispatch("before-render"),k.dispatch("render"),dispatchEvent(new Event("resize")),this.documentOnRender(e)}},{key:"documentOnVisibilityChange",value:function(e){this.documentVisible=!document.hidden,this.documentVisible&&this.documentOnRender()}},{key:"documentOnRender",value:function(e){this.documentVisible&&document.querySelectorAll("[data-auto-submit]").forEach((function(e){var t=e.dataset.autoSubmit||0;e.removeAttribute("data-auto-submit"),setTimeout((function(){ke.fromElement(e)}),t)}))}},{key:"documentOnSubmit",value:function(e){e.preventDefault(),ke.fromElement(e.target)}},{key:"documentOnClick",value:function(e){e.preventDefault(),ke.fromElement(e.target)}},{key:"documentOnChange",value:function(e){ke.fromElement(e.target)}},{key:"documentOnKeyup",value:function(e){var t=e.target,n=t.dataset.ocLastValue;if(-1!==["email","number","password","search","text"].indexOf(t.type)&&(void 0===n||n!=t.value)){t.dataset.ocLastValue=t.value,void 0!==this.dataTrackInputTimer&&clearTimeout(this.dataTrackInputTimer);var r=t.getAttribute("data-track-input");r||(r=300);var i=this;this.dataTrackInputTimer=setTimeout((function(){i.lastDataTrackInputRequest&&i.lastDataTrackInputRequest.abort(),i.lastDataTrackInputRequest=ke.fromElement(t)}),r)}}},{key:"documentOnKeydown",value:function(e){"Enter"===e.key&&(e.preventDefault(),void 0!==this.dataTrackInputTimer&&clearTimeout(this.dataTrackInputTimer),ke.fromElement(e.target))}},{key:"documentOnBeforeUnload",value:function(e){window.ocUnloading=!0}}])&&Oe(t.prototype,n),r&&Oe(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function xe(e){return xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xe(e)}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Te=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=[{key:"bind",value:function(){this.bindRequestFunc(),this.bindRenderFunc(),this.bindjQueryEvents()}},{key:"bindRequestFunc",value:function(){var e=$.fn.request;$.fn.request=function(e,t){var n="object"===xe(t)?t:{};return new ke(this.get(0),e,n)},$.fn.request.Constructor=ke,$.request=function(e,t){return $(document).request(e,t)},$.fn.request.noConflict=function(){return $.fn.request=e,this}}},{key:"bindRenderFunc",value:function(){$.fn.render=function(e){$(document).on("render",e)}}},{key:"bindjQueryEvents",value:function(){this.migratejQueryEvent(document,"ajax:setup","ajaxSetup",["context"]),this.migratejQueryEvent(document,"ajax:promise","ajaxPromise",["context"]),this.migratejQueryEvent(document,"ajax:fail","ajaxFail",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:done","ajaxDone",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:always","ajaxAlways",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:before-redirect","ajaxRedirect"),this.migratejQueryEvent(document,"ajax:update","ajaxUpdate",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:before-replace","ajaxBeforeReplace"),this.migratejQueryEvent(document,"ajax:before-request","oc.beforeRequest",["context"]),this.migratejQueryEvent(document,"ajax:before-update","ajaxBeforeUpdate",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:request-success","ajaxSuccess",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:request-complete","ajaxComplete",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:request-error","ajaxError",["context","message","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:before-validate","ajaxValidation",["context","message","fields"]),this.migratejQueryEvent(window,"ajax:before-send","ajaxBeforeSend",["context"]),this.migratejQueryEvent(window,"ajax:update-complete","ajaxUpdateComplete",["context","data","responseCode","xhr"]),this.migratejQueryEvent(window,"ajax:invalid-field","ajaxInvalidField",["element","fieldName","errorMsg","isFirst"]),this.migratejQueryEvent(window,"ajax:confirm-message","ajaxConfirmMessage",["message","promise"]),this.migratejQueryEvent(window,"ajax:error-message","ajaxErrorMessage",["message"]),this.migratejQueryAttachData(document,"ajax:setup","a[data-request], button[data-request], form[data-request], a[data-handler], button[data-handler]")}},{key:"migratejQueryEvent",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=this;$(e).on(t,(function(e){i.triggerjQueryEvent(e.originalEvent,n,r)}))}},{key:"triggerjQueryEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=$.Event(t),i=this.buildDetailArgs(e,n);$(e.target).trigger(r,i),r.isDefaultPrevented()&&e.preventDefault()}},{key:"buildDetailArgs",value:function(e,t){var n=[];return t.forEach((function(t){n.push(e.detail[t])})),n}},{key:"migratejQueryAttachData",value:function(e,t,n){$(e).on(t,n,(function(e){var t=$(this).data("request-data");if(t){var n=e.detail.context.options;t.constructor==={}.constructor?Object.assign(n.data,t):"string"==typeof t&&Object.assign(n.data,ge.paramToObj("request-data",t))}}))}}],n&&Se(t.prototype,n),r&&Se(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),qe=new Ae;const Re={controller:qe,parseJSON:ge.parseJSON,serializeJSON:ne.serializeJSON,requestElement:ke.fromElement,start:function(){qe.start(),window.jQuery&&(new Te).bind()},stop:function(){qe.stop()}};function Ce(e){return Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(e)}window.oc||(window.oc={}),window.oc.AjaxFramework||(window.oc.AjaxFramework=Re,window.oc.request=Re.requestElement,window.oc.parseJSON=Re.parseJSON,window.oc.serializeJSON=Re.serializeJSON,window.oc.Events=k,"function"==typeof define&&e.amdO||"object"==("undefined"==typeof exports?"undefined":Ce(exports))||Re.start())})();
(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.amdO={};var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,o,i;return n=e,i=[{key:"load",value:function(t,n){return(new e).loadCollection(t,n)}}],(o=[{key:"loadCollection",value:function(e,t){var n=this,o=e.js?e.js:[],i=e.css?e.css:[],a=e.img?e.img:[];o=r(o,(function(e){return!document.querySelector('head script[src="'+e+'"]')})),i=r(i,(function(e){return!document.querySelector('head link[href="'+e+'"]')}));var s=0,u=!1,l=!1;function c(){return!!l&&!!u&&!(s<i.length)&&void(t&&t())}0!==o.length||0!==i.length||0!==a.length?(this.loadJavaScript(o,(function(){u=!0,c()})),i.forEach((function(e){n.loadStyleSheet(e,(function(){s++,c()}))})),this.loadImage(a,(function(){l=!0,c()}))):t&&t()}},{key:"loadStyleSheet",value:function(e,t){var n=document.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.addEventListener("load",t,!1),void 0!==n&&document.getElementsByTagName("head")[0].appendChild(n),n}},{key:"loadJavaScript",value:function(e,t){if(e.length<=0)return t();var n=this,r=e.shift(),o=document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("src",r),o.addEventListener("load",(function(){n.loadJavaScript(e,t)}),!1),void 0!==o&&document.getElementsByTagName("head")[0].appendChild(o)}},{key:"loadImage",value:function(e,t){if(e.length<=0)return t();var n=0;e.forEach((function(r){var o=new Image;o.onload=function(){++n==e.length&&t&&t()},o.src=r}))}}])&&t(n.prototype,o),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=[],r=e.length,o=0;o<r;o++)t(e[o])&&n.push(e[o]);return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)throw new Error("The request handler name is not specified.");if(!t.match(/^(?:\w+\:{2})?on*/))throw new Error('Invalid handler name. The correct handler name format is: "onEvent".');if("undefined"==typeof FormData)throw new Error("The browser does not support the FormData interface.");this.options=n,this.handler=t}var t,n,r;return t=e,n=[{key:"getRequestOptions",value:function(){return{method:"POST",url:this.options.url?this.options.url:window.location.href,headers:this.buildHeaders(),responseType:!1===this.options.download?"":"blob"}}},{key:"buildHeaders",value:function(){var e=this.handler,t=this.options,n={"X-Requested-With":"XMLHttpRequest","X-OCTOBER-REQUEST-HANDLER":e};t.files||(n["Content-Type"]=t.bulk?"application/json":"application/x-www-form-urlencoded"),t.flash&&(n["X-OCTOBER-REQUEST-FLASH"]=1),t.partial&&(n["X-OCTOBER-REQUEST-PARTIAL"]=t.partial);var r=this.extractPartials(t.update,t.partial);r&&(n["X-OCTOBER-REQUEST-PARTIALS"]=r);var o=this.getXSRFToken();o&&(n["X-XSRF-TOKEN"]=o);var i=this.getCSRFToken();return i&&(n["X-CSRF-TOKEN"]=i),t.headers&&t.headers.constructor==={}.constructor&&Object.assign(n,t.headers),n}},{key:"extractPartials",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=[];if(e){if("object"!==o(e))throw new Error("Invalid update value. The correct format is an object ({...})");for(var r in e)"_self"===r&&t?n.push(t):n.push(r)}return n.join("&")}},{key:"getCSRFToken",value:function(){var e=document.querySelector('meta[name="csrf-token"]');return e?e.getAttribute("content"):null}},{key:"getXSRFToken",value:function(){var e=null;if(document.cookie&&""!=document.cookie)for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].replace(/^([\s]*)|([\s]*)$/g,"");if("XSRF-TOKEN="==r.substring(0,11)){e=decodeURIComponent(r.substring(11));break}}return e}}],r=[{key:"fetch",value:function(e,t){return new this(e,t).getRequestOptions()}}],n&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?document:n,o=t.detail,i=void 0===o?{}:o,a=t.bubbles,s=void 0===a||a,u=t.cancelable,l=void 0===u||u,c=new CustomEvent(e,{detail:i,bubbles:s,cancelable:l});return r.dispatchEvent(c),c}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=l(c(e,n)).split("\n"),i=o[0].match(/^\s+/),a=i?i[0].length:0;return o.map((function(e){return e.slice(a)})).join("\n")}function l(e){return e.replace(/^\n/,"")}function c(e,t){return e.reduce((function(e,n,r){return e+n+(null==t[r]?"":t[r])}),"")}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=/[^.]*(?=\..*)\.|.*/,m=/\..*/,g=/::\d+$/,b={},k=1,w={mouseenter:"mouseover",mouseleave:"mouseout"},E=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]),A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"on",value:function(e,t,n,r,o){T(e,t,n,r,o,!1)}},{key:"one",value:function(e,t,n,r,o){T(e,t,n,r,o,!0)}},{key:"off",value:function(e,t,n,r,o){if("string"==typeof t&&e){var i=h(S(t,n,r,o),4),a=i[0],s=i[1],u=i[2],l=i[3],c=u!==t,f=j(e),d=f[u]||{},p=t.startsWith(".");if(void 0===s){if(p)for(var y=0,v=Object.keys(f);y<v.length;y++)B(e,f,v[y],t.slice(1));for(var m=0,b=Object.keys(d);m<b.length;m++){var k=b[m],w=k.replace(g,"");if(!c||t.includes(w)){var E=d[k];C(e,f,u,E.callable,E.delegationSelector,l)}}}else{if(!d)return;C(e,f,u,s,a?n:null,l)}}}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?document:n,o=t.detail,i=void 0===o?{}:o,a=t.bubbles,u=void 0===a||a,l=t.cancelable,c=void 0===l||l;return s(e,{target:r,detail:i,bubbles:u,cancelable:c})}}],(n=null)&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){return t&&"".concat(t,"::").concat(k++)||e.uidEvent||k++}function j(e){var t=O(e);return e.uidEvent=t,b[t]=b[t]||{},b[t]}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.values(e).find((function(e){return e.callable===t&&e.delegationSelector===n}))}function S(e,t,n,r){var o,i="string"==typeof t,a=i?n:t,s=i?r:n,u=(o=(o=e).replace(m,""),w[o]||o);return E.has(u)||(u=e),[i,a,u,s]}function T(e,t,n,r,o,i){if("string"==typeof t&&e){var a=h(S(t,n,r,o),4),s=a[0],u=a[1],l=a[2],c=a[3];if(t in w){u=function(e){return function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)}}(u)}var d=j(e),p=d[l]||(d[l]={}),y=x(p,u,s?n:null);if(y)y.oneOff=y.oneOff&&i;else{var m=O(u,t.replace(v,"")),g=s?function(e,t,n){return function r(o){for(var i=e.querySelectorAll(t),a=o.target;a&&a!==this;a=a.parentNode){var s,u=f(i);try{for(u.s();!(s=u.n()).done;){if(s.value===a)return o.delegateTarget=a,r.oneOff&&A.off(e,o.type,t,n),n.apply(a,[o])}}catch(e){u.e(e)}finally{u.f()}}}}(e,n,u):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&A.off(e,r.type,t),t.apply(e,[r])}}(e,u);g.delegationSelector=s?n:null,g.callable=u,g.oneOff=i,g.uidEvent=m,p[m]=g,e.addEventListener(l,g,c)}}}function C(e,t,n,r,o,i){var a=x(t[n],r,o);a&&(e.removeEventListener(n,a,i),delete t[n][a.uidEvent])}function B(e,t,n,r){for(var o=t[n]||{},i=0,a=Object.keys(o);i<a.length;i++){var s=a[i];if(s.includes(r)){var u=o[s];C(e,t,n,u.callable,u.delegationSelector)}}}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=0,R=-1,F=-2,L=-3,I=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.failed=!1,this.progress=0,this.sent=!1,this.delegate=t,this.url=n,this.options=r,this.headers=r.headers||{},this.method=r.method||"GET",this.responseType=r.responseType||"",this.data=r.data,this.timeout=r.timeout||0,this.requestProgressed=function(e){e.lengthComputable&&o.setProgress(e.loaded/e.total)},this.requestLoaded=function(){o.endRequest((function(e){o.processResponseData(e,(function(e,t){var n=e.getResponseHeader("Content-Type"),r=function(e){return(e||"").includes("application/json")}(n)?JSON.parse(t):t;if(o.options.htmlOnly&&!function(e){return(e||"").match(/^text\/html|^application\/xhtml\+xml/)}(n))return o.failed=!0,void o.delegate.requestFailedWithStatusCode(F);e.status>=200&&e.status<300?o.delegate.requestCompletedWithResponse(r,e.status,function(e,t){if(e.getResponseHeader("X-OCTOBER-LOCATION"))return e.getResponseHeader("X-OCTOBER-LOCATION");var n=t.match(/^(.*)#/);return(n?n[1]:t)!==e.responseURL?e.responseURL:null}(e,o.url)):(o.failed=!0,o.delegate.requestFailedWithStatusCode(e.status,r))}))}))},this.requestFailed=function(){o.endRequest((function(){o.failed=!0,o.delegate.requestFailedWithStatusCode(P)}))},this.requestTimedOut=function(){o.endRequest((function(){o.failed=!0,o.delegate.requestFailedWithStatusCode(R)}))},this.requestCanceled=function(){o.options.trackAbort?o.endRequest((function(){o.failed=!0,o.delegate.requestFailedWithStatusCode(L)})):o.endRequest()},this.createXHR()}var t,n,r;return t=e,n=[{key:"send",value:function(){this.xhr&&!this.sent&&(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(this.data||null),this.sent=!0,this.delegate.requestStarted())}},{key:"abort",value:function(){this.xhr&&this.sent&&this.xhr.abort()}},{key:"notifyApplicationBeforeRequestStart",value:function(){A.dispatch("ajax:request-start",{detail:{url:this.url,xhr:this.xhr},cancelable:!1})}},{key:"notifyApplicationAfterRequestEnd",value:function(){A.dispatch("ajax:request-end",{detail:{url:this.url,xhr:this.xhr},cancelable:!1})}},{key:"createXHR",value:function(){var e=this.xhr=new XMLHttpRequest;for(var t in e.open(this.method,this.url,!0),e.responseType=this.responseType,e.onprogress=this.requestProgressed,e.onload=this.requestLoaded,e.onerror=this.requestFailed,e.ontimeout=this.requestTimedOut,e.onabort=this.requestCanceled,this.timeout&&(e.timeout=1e3*this.timeout),this.headers)e.setRequestHeader(t,this.headers[t]);return e}},{key:"endRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.xhr&&(this.notifyApplicationAfterRequestEnd(),e(this.xhr),this.destroy())}},{key:"setProgress",value:function(e){this.progress=e,this.delegate.requestProgressed(e)}},{key:"destroy",value:function(){this.setProgress(1),this.delegate.requestFinished()}},{key:"processResponseData",value:function(e,t){if("blob"===this.responseType){var n=e.getResponseHeader("Content-Disposition")||"";if(0!==n.indexOf("attachment")&&0!==n.indexOf("inline")){var r=new FileReader;r.addEventListener("load",(function(){t(e,r.result)})),r.readAsText(e.response)}else t(e,e.response)}else t(e,e.responseText)}}],n&&q(t.prototype,n),r&&q(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D="pending",N="rejected",U="resolved",J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t||{},this.stateStr=D,this.successFuncs=[],this.failureFuncs=[],this.progressFuncs=[],this.resolveArgs=[],this.rejectArgs=[],this.progressArgs=[],this.isProgressNotified=!1}var t,n,r;return t=e,n=[{key:"resolve",value:function(){return this.stateStr===D&&(this.resolveArgs=arguments,this.callFunction.call(this,this.successFuncs,this.resolveArgs),this.stateStr=U),this}},{key:"reject",value:function(){return this.stateStr===D&&(this.rejectArgs=arguments,this.callFunction.call(this,this.failureFuncs,this.rejectArgs),this.stateStr=N),this}},{key:"notify",value:function(){return this.stateStr===D&&(this.progressArgs=arguments,this.callFunction.call(this,this.progressFuncs,this.progressArgs),this.isProgressNotified=!0),this}},{key:"abort",value:function(){this.options.delegate&&this.options.delegate.abort()}},{key:"done",value:function(){var e=Array.prototype.slice.call(arguments);return this.successFuncs=this.successFuncs.concat(e),this.stateStr===U&&this.callFunction.call(this,e,this.resolveArgs),this}},{key:"fail",value:function(){var e=Array.prototype.slice.call(arguments);return this.failureFuncs=this.failureFuncs.concat(e),this.stateStr===N&&this.callFunction.call(this,e,this.rejectArgs),this}},{key:"progress",value:function(){var e=Array.prototype.slice.call(arguments);return this.progressFuncs=this.progressFuncs.concat(e),this.stateStr===D&&this.isProgressNotified&&this.callFunction.call(this,e,this.progressArgs),this}},{key:"always",value:function(){var e=Array.prototype.slice.call(arguments);return this.successFuncs=this.successFuncs.concat(e),this.failureFuncs=this.failureFuncs.concat(e),this.stateStr!==D&&this.callFunction.call(this,e,this.resolveArgs||this.rejectArgs),this}},{key:"then",value:function(){var e=[];for(var t in arguments){var n;n=Array.isArray(arguments[t])?arguments[t]:[arguments[t]],e.push(n)}return this.done.apply(this,e[0]),this.fail.apply(this,e[1]),this.progress.apply(this,e[2]),this}},{key:"promise",value:function(){var e=["resolve","reject","promise","notify"],t={};for(var n in this)-1===e.indexOf(n)&&(t[n]=this[n]);return t}},{key:"state",value:function(){return arguments.length>0&&(stateStr=arguments[0]),stateStr}},{key:"callFunction",value:function(e,t,n){var r=(n=n||{}).scope||this;for(var o in e){var i=e[o];"function"==typeof i&&i.apply(r,t)}}}],n&&M(t.prototype,n),r&&M(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W="replace",G="prepend",Z="append",Y="update",ee=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t.el,this.delegate=t,this.context=n,this.options=r,this.context.start=this.start.bind(this),this.context.success=this.success.bind(this),this.context.error=this.error.bind(this),this.context.complete=this.complete.bind(this),this.context.cancel=this.cancel.bind(this)}var t,r,o;return t=e,(r=[{key:"invoke",value:function(e,t){return this.options[e]?this.options[e].apply(this.context,t):this[e]?this[e].apply(this,H(t)):void 0}},{key:"invokeFunc",value:function(e,t){if(this.options[e])return this.options[e](this.el,t)}},{key:"start",value:function(e){this.invoke("markAsUpdating",[!0])}},{key:"success",value:function(e,t,n){var r=this,o=new J;if(!1===this.invoke("beforeUpdate",[e,t,n]))return o;if(!1===this.invokeFunc("beforeUpdateFunc",e))return o;if(!this.delegate.applicationAllowsUpdate(e,t,n))return o;if(this.delegate.options.download&&e instanceof Blob&&this.invoke("handleFileDownload",[e,n]))return o;if(this.delegate.options.flash&&e.X_OCTOBER_FLASH_MESSAGES)for(var i in e.X_OCTOBER_FLASH_MESSAGES)this.invoke("handleFlashMessage",[e.X_OCTOBER_FLASH_MESSAGES[i],i]);return e.X_OCTOBER_DISPATCHES&&this.invoke("handleBrowserEvents",[e.X_OCTOBER_DISPATCHES])||(o=this.invoke("handleUpdateResponse",[e,t,n])).done((function(){r.delegate.notifyApplicationRequestSuccess(e,t,n),r.invokeFunc("successFunc",e)})),o}},{key:"error",value:function(e,t,n){var r,o=this,i=new J;if(void 0!==window.ocUnloading&&window.ocUnloading||t==L)return i;if(this.delegate.toggleRedirect(!1),406==t&&e){if(e.X_OCTOBER_DISPATCHES&&this.invoke("handleBrowserEvents",[e.X_OCTOBER_DISPATCHES]))return i;r=e.X_OCTOBER_ERROR_MESSAGE,i=this.invoke("handleUpdateResponse",[e,t,n])}else r=e,i.resolve();return i.done((function(){o.el!==document&&o.el.setAttribute("data-error-message",r),o.delegate.applicationAllowsError(e,t,n)&&!1!==o.invokeFunc("errorFunc",e)&&o.invoke("handleErrorMessage",[r])})),i}},{key:"complete",value:function(e,t,n){this.delegate.notifyApplicationRequestComplete(e,t,n),this.invokeFunc("completeFunc",e),this.invoke("markAsUpdating",[!1])}},{key:"cancel",value:function(){this.invokeFunc("cancelFunc")}},{key:"handleConfirmMessage",value:function(e){var t=this,n=new J;if(n.done((function(){t.delegate.sendInternal()})).fail((function(){t.invoke("cancel")})),this.delegate.notifyApplicationConfirmMessage(e,n).defaultPrevented)return!1;if(e){var r=confirm(e);return r||this.invoke("cancel"),r}}},{key:"handleFlashMessage",value:function(e,t){}},{key:"handleErrorMessage",value:function(e){this.delegate.notifyApplicationErrorMessage(e).defaultPrevented||e&&alert(e)}},{key:"handleValidationMessage",value:function(e,t){if(this.delegate.notifyApplicationBeforeValidate(e,t),this.delegate.formEl){var n=!0;for(var r in t){var o,i=[];o=r.replace(/\.(\w+)/g,"[$1]"),i.push('[name="'+o+'"]:not([disabled])'),i.push('[name="'+o+'[]"]:not([disabled])'),o=("."+r).replace(/\.(\w+)/g,"[$1]"),i.push('[name$="'+o+'"]:not([disabled])'),i.push('[name$="'+o+'[]"]:not([disabled])');var a=r.replace(/\.[0-9]+$/g,"");r!==a&&(o=a.replace(/\.(\w+)/g,"[$1]"),i.push('[name="'+o+'[]"]:not([disabled])'),o=("."+a).replace(/\.(\w+)/g,"[$1]"),i.push('[name$="'+o+'[]"]:not([disabled])'));var s=this.delegate.formEl.querySelector(i.join(", "));if(s){var u=this.delegate.notifyApplicationFieldInvalid(s,r,t[r],n);n&&(u.defaultPrevented||s.focus(),n=!1)}}}}},{key:"handleBrowserEvents",value:function(e){var t=this;if(!e||!e.length)return!1;var n=!1;return e.forEach((function(e){t.delegate.notifyApplicationCustomEvent(e.event,K(K({},e.data||{}),{},{context:t.context})).defaultPrevented&&(n=!0)})),n}},{key:"handleRedirectResponse",value:function(e){this.delegate.notifyApplicationBeforeRedirect().defaultPrevented||(oc.useTurbo&&oc.useTurbo()?oc.visit(e):location.assign(e))}},{key:"markAsUpdating",value:function(e){var t=this.options.update||{};for(var n in t){var r=t[n],o=[];t._self&&n==this.options.partial&&this.delegate.partialEl?(r=t._self,o=[this.delegate.partialEl]):o=te(r,'[data-ajax-partial="'+n+'"]'),o.forEach((function(t){e?t.setAttribute("data-ajax-updating",""):t.removeAttribute("data-ajax-updating")}))}}},{key:"handleUpdateResponse",value:function(e,t,r){var o=this,i=this.options.update||{},a=new J;return a.done((function(){var n=function(){var n=i[a]||a,s=[];i._self&&a==o.options.partial&&o.delegate.partialEl?(n=i._self,s=[o.delegate.partialEl]):s=te(n,'[data-ajax-partial="'+a+'"]'),s.forEach((function(i){var s=function(e,t){if("string"==typeof e){if("!"===e.charAt(0))return W;if("@"===e.charAt(0))return Z;if("^"===e.charAt(0))return G}return void 0!==t.dataset.ajaxUpdateMode?t.dataset.ajaxUpdateMode:Y}(n,i);if(s===W){var u=i.parentNode;i.insertAdjacentHTML("afterEnd",e[a]),u.removeChild(i),ne(u,e[a])}else s===Z?(i.insertAdjacentHTML("beforeEnd",e[a]),ne(i,e[a])):s===G?(i.insertAdjacentHTML("afterBegin",e[a]),ne(i,e[a])):(o.delegate.notifyApplicationBeforeReplace(i),i.innerHTML=e[a],function(e){Array.from(e.querySelectorAll("script")).forEach((function(e){var t=document.createElement("script");Array.from(e.attributes).forEach((function(e){return t.setAttribute(e.name,e.value)})),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)}))}(i));o.delegate.notifyApplicationAjaxUpdate(i,e,t,r)}))};for(var a in e)n();setTimeout((function(){o.delegate.notifyApplicationUpdateComplete(e,t,r),o.invoke("afterUpdate",[e,t,r]),o.invokeFunc("afterUpdateFunc",e)}),0)})),e.X_OCTOBER_REDIRECT&&this.delegate.toggleRedirect(e.X_OCTOBER_REDIRECT),this.delegate.isRedirect&&this.invoke("handleRedirectResponse",[this.delegate.options.redirect]),e.X_OCTOBER_ERROR_FIELDS&&this.invoke("handleValidationMessage",[e.X_OCTOBER_ERROR_MESSAGE,e.X_OCTOBER_ERROR_FIELDS]),e.X_OCTOBER_ASSETS?n.load(e.X_OCTOBER_ASSETS,(function(){return a.resolve()})):a.resolve(),a}},{key:"handleFileDownload",value:function(e,t){if(this.options.browserTarget)return window.open(window.URL.createObjectURL(e),this.options.browserTarget),!0;var n="string"==typeof this.options.download?this.options.download:function(e){var t=e.getResponseHeader("Content-Disposition");if(!t)return null;for(var n=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/g,r=null,o=null;null!==(o=n.exec(t));)r=o;return null!==r&&r[1]?null===/filename[^;*=\n]*\*=[^']*''/.exec(r[0])?r[1].replace(/['"]/g,""):decodeURIComponent(r[1].substring(r[1].indexOf("''")+2)):null}(t);if(n){var r=document.createElement("a");return r.href=window.URL.createObjectURL(e),r.download=n,r.target="_blank",r.click(),window.URL.revokeObjectURL(r.href),!0}}},{key:"applyQueryToUrl",value:function(e){for(var t=new URLSearchParams(window.location.search),n=function(){var n=o[r],i=e[n];Array.isArray(i)?(t.delete(n),t.delete("".concat(n,"[]")),i.forEach((function(e){return t.append("".concat(n,"[]"),e)}))):null===i?(t.delete(n),t.delete("".concat(n,"[]"))):t.set(n,i)},r=0,o=Object.keys(e);r<o.length;r++)n();var i=window.location.pathname;t.toString()&&(i+="?"+t.toString().replaceAll("%5B%5D=","[]=")),oc.useTurbo&&oc.useTurbo()?oc.visit(i,{action:"swap",scroll:!1}):(history.replaceState(null,"",i),localStorage.setItem("ocPushStateReferrer",i))}}])&&z(t.prototype,r),o&&z(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t){return!0===e?document.querySelectorAll(t):"string"!=typeof e?[e]:-1===["#",".","@","^","!","="].indexOf(e.charAt(0))?[]:(-1!==["@","^","!","="].indexOf(e.charAt(0))&&(e=e.substring(1)),e||(e=t),document.querySelectorAll(e))}function ne(e,t){var n=document.createElement("div");n.innerHTML=t,Array.from(n.querySelectorAll("script")).forEach((function(t){var n=document.createElement("script");Array.from(t.attributes).forEach((function(e){return n.setAttribute(e.name,e.value)})),n.appendChild(document.createTextNode(t.innerHTML)),e.appendChild(n),e.removeChild(n)}))}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var oe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"assignToObj",value:function(t,n,r){(new e).assignObjectInternal(t,n,r)}},{key:"serializeJSON",value:function(t){return(new e).parseContainer(t)}}],(n=[{key:"parseContainer",value:function(e){var t=this,n={};return e.querySelectorAll("input, textarea, select").forEach((function(e){if(!(!e.name||e.disabled||["file","reset","submit","button"].indexOf(e.type)>-1)&&(!(["checkbox","radio"].indexOf(e.type)>-1)||e.checked)){if("select-multiple"===e.type){var r=[];return Array.from(e.options).forEach((function(t){t.selected&&r.push({name:e.name,value:t.value})})),void t.assignObjectInternal(n,e.name,r)}t.assignObjectInternal(n,e.name,e.value)}})),n}},{key:"assignObjectInternal",value:function(e,t,n){this.assignObjectNested(e,this.nameToArray(t),n)}},{key:"assignObjectNested",value:function(e,t,n){var r=e,o=t.length-1;t.forEach((function(e,t){void 0===r[e]&&(r[e]={}),t===o&&(r[e]=n),r=r[e]}))}},{key:"nameToArray",value:function(e){for(var t,n=/([^\]\[]+)/g,r=[];t=n.exec(e);)r.push(t[0]);return r}}])&&re(t.prototype,n),r&&re(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ae,se=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userData=t||{},this.targetEl=n,this.formEl=r}var t,n,r;return t=e,(n=[{key:"getRequestData",value:function(){var e;return e=this.formEl?new FormData(this.formEl):new FormData,this.appendSingleInputElement(e),e}},{key:"getAsFormData",value:function(){return this.appendJsonToFormData(this.getRequestData(),this.userData)}},{key:"getAsQueryString",value:function(){return this.convertFormDataToQuery(this.getAsFormData())}},{key:"getAsJsonData",value:function(){return JSON.stringify(this.convertFormDataToJson(this.getAsFormData()))}},{key:"appendSingleInputElement",value:function(e){if(!this.formEl&&this.targetEl&&(t=this.targetEl,["input","select","textarea"].includes((t.tagName||"").toLowerCase()))){var t,n=this.targetEl.name;n&&void 0===this.userData[n]&&("file"===this.targetEl.type?this.targetEl.files.forEach((function(t){e.append(n,t)})):e.append(n,this.targetEl.value))}}},{key:"appendJsonToFormData",value:function(e,t,n){var r=this;for(var o in t){var i=o;n&&(i=n+"["+o+"]");var a=t[o];a&&a.constructor==={}.constructor?this.appendJsonToFormData(e,a,i):a&&a.constructor===[].constructor?a.forEach((function(t,n){t.constructor==={}.constructor||t.constructor===[].constructor?r.appendJsonToFormData(e,t,i+"["+n+"]"):e.append(i+"[]",r.castJsonToFormData(t))})):e.append(i,this.castJsonToFormData(a))}return e}},{key:"convertFormDataToQuery",value:function(e){var t=this.formDataToArray(e);return Object.keys(t).map((function(e){return e.endsWith("[]")?t[e].map((function(t){return encodeURIComponent(e)+"="+encodeURIComponent(t)})).join("&"):encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")}},{key:"convertFormDataToJson",value:function(e){var t=this.formDataToArray(e),n={};for(var r in t)oe.assignToObj(n,r,t[r]);return n}},{key:"formDataToArray",value:function(e){return Object.fromEntries(Array.from(e.keys()).map((function(t){return[t,t.endsWith("[]")?e.getAll(t):e.getAll(t).pop()]})))}},{key:"castJsonToFormData",value:function(e){return null===e?"":!0===e?"1":!1===e?"0":e}}])&&ie(t.prototype,n),r&&ie(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ce=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement(),this.hiding=!1,this.value=0,this.visible=!1,this.trickle=function(){t.setValue(t.value+Math.random()/100)}}var t,n,r;return t=e,n=[{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.cssClass&&this.progressElement.classList.add(e.cssClass),this.visible||(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())}},{key:"hide",value:function(){var e=this;this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement((function(){e.uninstallProgressElement(),e.stopTrickling(),e.visible=!1,e.hiding=!1})))}},{key:"setValue",value:function(e){this.value=e,this.refresh()}},{key:"installStylesheetElement",value:function(){e.stylesheetReady||(document.head.insertBefore(this.stylesheetElement,document.head.firstChild),e.stylesheetReady=!0)}},{key:"installProgressElement",value:function(){this.progressElement.style.width="0",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()}},{key:"fadeProgressElement",value:function(t){this.progressElement.style.opacity="0",setTimeout(t,1.5*e.animationDuration)}},{key:"uninstallProgressElement",value:function(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}},{key:"startTrickling",value:function(){this.trickleInterval||(this.trickleInterval=setInterval(this.trickle,e.animationDuration))}},{key:"stopTrickling",value:function(){clearInterval(this.trickleInterval),delete this.trickleInterval}},{key:"refresh",value:function(){var e=this;requestAnimationFrame((function(){e.progressElement.style.width="".concat(10+90*e.value,"%")}))}},{key:"createStylesheetElement",value:function(){var t=document.createElement("style");return t.textContent=e.defaultCSS,t}},{key:"createProgressElement",value:function(){var e=document.createElement("div");return e.className="oc-progress-bar",e}}],r=[{key:"defaultCSS",get:function(){return u(ae||(t=["\n        .oc-progress-bar {\n            position: fixed;\n            display: block;\n            top: 0;\n            left: 0;\n            height: 3px;\n            background: #0076ff;\n            z-index: 9999;\n            transition:\n                width ","ms ease-out,\n                opacity ","ms ","ms ease-in;\n            transform: translate3d(0, 0, 0);\n        }\n    "],n||(n=t.slice(0)),ae=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),e.animationDuration,e.animationDuration/2,e.animationDuration/2);var t,n}},{key:"progressBar",get:function(){return{show:function(){var e=fe();e.setValue(0),e.show()},hide:function(){var e=fe();e.setValue(100),e.hide()}}}}],n&&ue(t.prototype,n),r&&ue(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function fe(){return ce.instance||(ce.instance=new ce),ce.instance}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}le(ce,"instance",null),le(ce,"stylesheetReady",!1),le(ce,"animationDuration",300);const ve=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.handler=n,this.options=de(de({},this.constructor.DEFAULTS),r||{}),this.context={el:t,handler:n,options:this.options},this.progressBar=new ce,this.showProgressBar=function(){o.progressBar.show({cssClass:"is-ajax"})}}var t,n,r;return t=e,r=[{key:"DEFAULTS",get:function(){return{handler:null,update:{},files:!1,bulk:!1,download:!1,browserValidate:!1,browserTarget:null,progressBarDelay:500,progressBar:null}}},{key:"send",value:function(t,n){return new e(document,t,n).start()}},{key:"sendElement",value:function(t,n,r){return"string"==typeof t&&(t=document.querySelector(t)),new e(t,n,r).start()}}],(n=[{key:"start",value:function(){if(this.notifyApplicationAjaxSetup(),this.initOtherElements(),this.preprocessOptions(),this.actions=new ee(this,this.context,this.options),this.validateClientSideForm()&&this.applicationAllowsRequest()&&(!this.options.confirm||this.actions.invoke("handleConfirmMessage",[this.options.confirm])))return this.sendInternal(),this.options.async?this.wrapInAsyncPromise(this.promise):this.promise}},{key:"sendInternal",value:function(){var e,t=this,n=new se(this.options.data,this.el,this.formEl);e=this.options.files?n.getAsFormData():this.options.bulk?n.getAsJsonData():n.getAsQueryString(),this.options.query&&this.actions.invoke("applyQueryToUrl",[this.options.query]);var r=a.fetch(this.handler,this.options),o=r.url,i=r.headers,s=r.method,u=r.responseType;this.request=new I(this,o,{method:s,headers:i,responseType:u,data:e,trackAbort:!0}),this.promise=new J({delegate:this.request}),this.isRedirect=this.options.redirect&&this.options.redirect.length>0,this.notifyApplicationBeforeSend(),this.notifyApplicationAjaxPromise(),this.promise.fail((function(e,n,r){t.isRedirect||t.notifyApplicationAjaxFail(e,n,r)})).done((function(e,n,r){t.isRedirect||t.notifyApplicationAjaxDone(e,n,r)})).always((function(e,n,r){t.notifyApplicationAjaxAlways(e,n,r)})),this.request.send()}},{key:"toggleRedirect",value:function(e){e?(this.options.redirect=e,this.isRedirect=!0):(this.options.redirect=null,this.isRedirect=!1)}},{key:"applicationAllowsRequest",value:function(){return!this.notifyApplicationBeforeRequest().defaultPrevented}},{key:"applicationAllowsUpdate",value:function(e,t,n){return!this.notifyApplicationBeforeUpdate(e,t,n).defaultPrevented}},{key:"applicationAllowsError",value:function(e,t,n){return!this.notifyApplicationRequestError(e,t,n).defaultPrevented}},{key:"notifyApplicationAjaxSetup",value:function(){return s("ajax:setup",{target:this.el,detail:{context:this.context}})}},{key:"notifyApplicationAjaxPromise",value:function(){return s("ajax:promise",{target:this.el,detail:{context:this.context}})}},{key:"notifyApplicationAjaxFail",value:function(e,t,n){return s("ajax:fail",{target:this.el,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationAjaxDone",value:function(e,t,n){return s("ajax:done",{target:this.el,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationAjaxAlways",value:function(e,t,n){return s("ajax:always",{target:this.el,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationAjaxUpdate",value:function(e,t,n,r){return s("ajax:update",{target:e,detail:{context:this.context,data:t,responseCode:n,xhr:r}})}},{key:"notifyApplicationBeforeRedirect",value:function(){return s("ajax:before-redirect",{target:this.el})}},{key:"notifyApplicationBeforeRequest",value:function(){return s("ajax:before-request",{target:this.triggerEl,detail:{context:this.context}})}},{key:"notifyApplicationBeforeUpdate",value:function(e,t,n){return s("ajax:before-update",{target:this.triggerEl,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationRequestSuccess",value:function(e,t,n){return s("ajax:request-success",{target:this.triggerEl,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationRequestError",value:function(e,t,n){return s("ajax:request-error",{target:this.triggerEl,detail:{context:this.context,message:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationRequestComplete",value:function(e,t,n){return s("ajax:request-complete",{target:this.triggerEl,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationBeforeValidate",value:function(e,t){return s("ajax:before-validate",{target:this.triggerEl,detail:{context:this.context,message:e,fields:t}})}},{key:"notifyApplicationBeforeReplace",value:function(e){return s("ajax:before-replace",{target:e})}},{key:"notifyApplicationBeforeSend",value:function(){return s("ajax:before-send",{target:window,detail:{context:this.context}})}},{key:"notifyApplicationUpdateComplete",value:function(e,t,n){return s("ajax:update-complete",{target:window,detail:{context:this.context,data:e,responseCode:t,xhr:n}})}},{key:"notifyApplicationFieldInvalid",value:function(e,t,n,r){return s("ajax:invalid-field",{target:window,detail:{element:e,fieldName:t,errorMsg:n,isFirst:r}})}},{key:"notifyApplicationConfirmMessage",value:function(e,t){return s("ajax:confirm-message",{target:window,detail:{message:e,promise:t}})}},{key:"notifyApplicationErrorMessage",value:function(e){return s("ajax:error-message",{target:window,detail:{message:e}})}},{key:"notifyApplicationCustomEvent",value:function(e,t){return s(e,{target:this.el,detail:t})}},{key:"requestStarted",value:function(){this.markAsProgress(!0),this.toggleLoadingElement(!0),this.options.progressBar&&this.showProgressBarAfterDelay(),this.actions.invoke("start",[this.request.xhr])}},{key:"requestProgressed",value:function(e){this.promise.notify(e)}},{key:"requestCompletedWithResponse",value:function(e,t){this.actions.invoke("success",[e,t,this.request.xhr]),this.actions.invoke("complete",[e,t,this.request.xhr]),this.promise.resolve(e,t,this.request.xhr)}},{key:"requestFailedWithStatusCode",value:function(e,t){this.actions.invoke("error",[t,e,this.request.xhr]),this.actions.invoke("complete",[t,e,this.request.xhr]),this.promise.reject(t,e,this.request.xhr)}},{key:"requestFinished",value:function(){this.markAsProgress(!1),this.toggleLoadingElement(!1),this.options.progressBar&&this.hideProgressBar()}},{key:"initOtherElements",value:function(){"string"==typeof this.options.form?this.formEl=document.querySelector(this.options.form):this.options.form?this.formEl=this.options.form:this.formEl=this.el&&this.el!==document?this.el.closest("form"):null,this.triggerEl=this.formEl?this.formEl:this.el,this.partialEl=this.el&&this.el!==document?this.el.closest("[data-ajax-partial]"):null,this.loadingEl="string"==typeof this.options.loading?document.querySelector(this.options.loading):this.options.loading}},{key:"preprocessOptions",value:function(){void 0===this.options.partial&&this.partialEl&&void 0!==this.partialEl.dataset.ajaxPartial&&(this.options.partial=this.partialEl.dataset.ajaxPartial||!0)}},{key:"validateClientSideForm",value:function(){return!(this.options.browserValidate&&"function"==typeof document.createElement("input").reportValidity&&this.formEl&&!this.formEl.checkValidity()&&(this.formEl.reportValidity(),1))}},{key:"toggleLoadingElement",value:function(e){this.loadingEl&&("function"==typeof this.loadingEl.show&&"function"==typeof this.loadingEl.hide?e?this.loadingEl.show():this.loadingEl.hide():this.loadingEl.style.display=e?"block":"none")}},{key:"showProgressBarAfterDelay",value:function(){this.progressBar.setValue(0),this.progressBarTimeout=window.setTimeout(this.showProgressBar,this.options.progressBarDelay)}},{key:"hideProgressBar",value:function(){this.progressBar.setValue(100),this.progressBar.hide(),null!=this.progressBarTimeout&&(window.clearTimeout(this.progressBarTimeout),delete this.progressBarTimeout)}},{key:"markAsProgress",value:function(e){e?(document.documentElement.setAttribute("data-ajax-progress",""),this.formEl&&this.formEl.setAttribute("data-ajax-progress",this.handler)):(document.documentElement.removeAttribute("data-ajax-progress"),this.formEl&&this.formEl.removeAttribute("data-ajax-progress"))}},{key:"wrapInAsyncPromise",value:function(e){return new Promise((function(t,n,r){e.fail((function(e){n(e)})).done((function(e){t(e)})),r((function(){e.abort()}))}))}}])&&ye(t.prototype,n),r&&ye(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}window.oc||(window.oc={}),window.oc.AjaxRequest||(window.oc.AjaxRequest=ve,window.oc.AssetManager=n,window.oc.ajax=ve.send,window.oc.request||(window.oc.request=ve.sendElement));var be=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"paramToObj",value:function(e,t){if(void 0===t&&(t=""),"object"===me(t))return t;"{"!==t.charAt(0)&&(t="{"+t+"}");try{return this.parseJSON(t)}catch(t){throw new Error("Error parsing the "+e+" attribute value. "+t)}}},{key:"parseJSON",value:function(t){return JSON.parse((new e).parseString(t))}}],(n=[{key:"parseString",value:function(e){if(!(e=e.trim()).length)throw new Error("Broken JSON object.");for(var t="";e&&","===e[0];)e=e.substr(1);if('"'===e[0]||"'"===e[0]){if(e[e.length-1]!==e[0])throw new Error("Invalid string JSON object.");for(var n='"',r=1;r<e.length;r++)if("\\"===e[r])"'"===e[r+1]||(n+=e[r]),n+=e[r+1],r++;else{if(e[r]===e[0])return n+='"';'"'===e[r]?n+='\\"':n+=e[r]}throw new Error("Invalid string JSON object.")}if("true"===e||"false"===e)return e;if("null"===e)return"null";var o=parseFloat(e);if(!isNaN(o))return o.toString();if("{"===e[0]){var i="needKey";for(t="{",r=1;r<e.length;r++)if(!this.isBlankChar(e[r]))if("needKey"!==i||'"'!==e[r]&&"'"!==e[r]){if("needKey"===i&&this.canBeKeyHead(e[r])){var a;t+='"',t+=a=this.parseKey(e,r),t+='"',r+=a.length-1,i="afterKey"}else if("afterKey"===i&&":"===e[r])t+=":",i=":";else if(":"===i)r=r+(n=this.getBody(e,r)).originLength-1,t+=this.parseString(n.body),i="afterBody";else if("afterBody"===i||"needKey"===i){for(var s=r;","===e[s]||this.isBlankChar(e[s]);)s++;if("}"===e[s]&&s===e.length-1){for(;","===t[t.length-1];)t=t.substr(0,t.length-1);return t+="}"}s!==r&&"{"!==t&&(t+=",",i="needKey",r=s-1)}}else t+='"'+(a=this.parseKey(e,r+1,e[r]))+'"',r+=a.length,r+=1,i="afterKey";throw new Error("Broken JSON object near "+t)}if("["===e[0]){for(t="[",i="needBody",r=1;r<e.length;r++)if(" "!==e[r]&&"\n"!==e[r]&&"\t"!==e[r])if("needBody"===i){if(","===e[r]){t+="null,";continue}if("]"===e[r]&&r===e.length-1)return","===t[t.length-1]&&(t=t.substr(0,t.length-1)),t+="]";r=r+(n=this.getBody(e,r)).originLength-1,t+=this.parseString(n.body),i="afterBody"}else if("afterBody"===i)if(","===e[r])for(t+=",",i="needBody";","===e[r+1]||this.isBlankChar(e[r+1]);)","===e[r+1]&&(t+="null,"),r++;else if("]"===e[r]&&r===e.length-1)return t+="]";throw new Error("Broken JSON array near "+t)}}},{key:"parseKey",value:function(e,t,n){for(var r="",o=t;o<e.length;o++){if(n&&n===e[o])return r;if(!n&&(" "===e[o]||":"===e[o]))return r;r+=e[o],"\\"===e[o]&&o+1<e.length&&(r+=e[o+1],o++)}throw new Error("Broken JSON syntax near "+r)}},{key:"getBody",value:function(e,t){if('"'===e[t]||"'"===e[t]){for(var n=e[t],r=t+1;r<e.length;r++)if("\\"===e[r])n+=e[r],r+1<e.length&&(n+=e[r+1]),r++;else{if(e[r]===e[t])return{originLength:(n+=e[t]).length,body:n};n+=e[r]}throw new Error("Broken JSON string body near "+n)}if("t"===e[t]){if(e.indexOf("true",t)===t)return{originLength:"true".length,body:"true"};throw new Error("Broken JSON boolean body near "+e.substr(0,t+10))}if("f"===e[t]){if(e.indexOf("f",t)===t)return{originLength:"false".length,body:"false"};throw new Error("Broken JSON boolean body near "+e.substr(0,t+10))}if("n"===e[t]){if(e.indexOf("null",t)===t)return{originLength:"null".length,body:"null"};throw new Error("Broken JSON boolean body near "+e.substr(0,t+10))}if("-"===e[t]||"+"===e[t]||"."===e[t]||e[t]>="0"&&e[t]<="9"){for(n="",r=t;r<e.length;r++){if(!("-"===e[r]||"+"===e[r]||"."===e[r]||e[r]>="0"&&e[r]<="9"))return{originLength:n.length,body:n};n+=e[r]}throw new Error("Broken JSON number body near "+n)}if("{"===e[t]||"["===e[t]){var o=[e[t]];for(n=e[t],r=t+1;r<e.length;r++){if(n+=e[r],"\\"===e[r])r+1<e.length&&(n+=e[r+1]),r++;else if('"'===e[r])'"'===o[o.length-1]?o.pop():"'"!==o[o.length-1]&&o.push(e[r]);else if("'"===e[r])"'"===o[o.length-1]?o.pop():'"'!==o[o.length-1]&&o.push(e[r]);else if('"'!==o[o.length-1]&&"'"!==o[o.length-1])if("{"===e[r])o.push("{");else if("}"===e[r]){if("{"!==o[o.length-1])throw new Error("Broken JSON "+("{"===e[t]?"object":"array")+" body near "+n);o.pop()}else if("["===e[r])o.push("[");else if("]"===e[r]){if("["!==o[o.length-1])throw new Error("Broken JSON "+("{"===e[t]?"object":"array")+" body near "+n);o.pop()}if(!o.length)return{originLength:r-t,body:n}}throw new Error("Broken JSON "+("{"===e[t]?"object":"array")+" body near "+n)}throw new Error("Broken JSON body near "+e.substr(t-5>=0?t-5:0,50))}},{key:"canBeKeyHead",value:function(e){return"\\"!==e[0]&&(e[0]>="a"&&e[0]<="z"||e[0]>="A"&&e[0]<="Z"||"_"===e[0]||e[0]>="0"&&e[0]<="9"||"$"===e[0]||e.charCodeAt(0)>255)}},{key:"isBlankChar",value:function(e){return" "===e||"\n"===e||"\t"===e}}])&&ge(t.prototype,n),r&&ge(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Oe=function(){function e(t,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r||{},this.ogElement=t,this.element=this.findElement(t),this.element?(this.assignAsEval("beforeUpdateFunc","requestBeforeUpdate"),this.assignAsEval("afterUpdateFunc","requestAfterUpdate"),this.assignAsEval("successFunc","requestSuccess"),this.assignAsEval("errorFunc","requestError"),this.assignAsEval("cancelFunc","requestCancel"),this.assignAsEval("completeFunc","requestComplete"),this.assignAsData("progressBar","requestProgressBar"),this.assignAsData("confirm","requestConfirm"),this.assignAsData("redirect","requestRedirect"),this.assignAsData("loading","requestLoading"),this.assignAsData("form","requestForm"),this.assignAsData("url","requestUrl"),this.assignAsData("bulk","requestBulk",{emptyAsTrue:!0}),this.assignAsData("files","requestFiles",{emptyAsTrue:!0}),this.assignAsData("flash","requestFlash",{emptyAsTrue:!0}),this.assignAsData("download","requestDownload",{emptyAsTrue:!0}),this.assignAsData("update","requestUpdate",{parseJson:!0}),this.assignAsData("query","requestQuery",{parseJson:!0}),this.assignAsData("browserTarget","browserTarget"),this.assignAsData("browserValidate","browserValidate",{emptyAsTrue:!0}),this.assignAsMetaData("update","ajaxRequestUpdate",{parseJson:!0,mergeValue:!0}),this.assignRequestData(),n||(n=this.getHandlerName()),ve.sendElement(this.element,n,this.options)):ve.send(n,this.options)}var t,n,r;return t=e,n=[{key:"findElement",value:function(e){if(!e||e===document)return null;if(e.matches("[data-request]"))return e;var t=e.closest("[data-request]");return t||e}},{key:"getHandlerName",value:function(){return this.element.dataset.dataRequest?this.element.dataset.dataRequest:this.element.getAttribute("data-request")}},{key:"assignAsEval",value:function(e,t){var n;void 0===this.options[e]&&(n=this.element.dataset[t]?this.element.dataset[t]:this.element.getAttribute("data-"+je(t)))&&(this.options[e]=function(e,t){return new Function("data",n).apply(e,[t])})}},{key:"assignAsData",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.parseJson,i=void 0!==o&&o,a=r.emptyAsTrue,s=void 0!==a&&a;void 0===this.options[e]&&null!==(n=this.element.dataset[t]?this.element.dataset[t]:this.element.getAttribute("data-"+je(t)))&&(this.options[e]=i?be.paramToObj("data-"+je(t),n):this.castAttrToOption(n,s))}},{key:"assignAsMetaData",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.mergeValue,o=void 0===r||r,i=n.parseJson,a=void 0!==i&&i,s=n.emptyAsTrue,u=void 0!==s&&s,l=document.documentElement.querySelector('head meta[name="'+je(t)+'"]');if(l){var c=l.getAttribute("content");c=a?be.paramToObj(je(t),c):this.castAttrToOption(c,u),this.options[e]=o?we(we({},this.options[e]||{}),c):c}}},{key:"castAttrToOption",value:function(e,t){return!(!t||""!==e)||"true"===e||"1"===e||"false"!==e&&"0"!==e&&e}},{key:"assignRequestData",value:function(){var e={};this.options.data&&Object.assign(e,this.options.data);var t=this.ogElement.getAttribute("data-request-data");t&&Object.assign(e,be.paramToObj("data-request-data",t)),function(e,t){var n=[];if(!e.parentNode)return n;for(var r=e.parentNode.closest(t);r;)n.push(r),r=r.parentNode.closest(t);return n}(this.ogElement,"[data-request-data]").reverse().forEach((function(t){Object.assign(e,be.paramToObj("data-request-data",t.getAttribute("data-request-data")))})),this.options.data=e}}],r=[{key:"fromElement",value:function(t,n,r){return"string"==typeof t&&(t=document.querySelector(t)),new e(t,n,r)}}],n&&Ae(t.prototype,n),r&&Ae(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function je(e){return e.replace(/[A-Z]/g,(function(e){return"-".concat(e.toLowerCase())}))}function xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Se=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.started=!1,this.documentVisible=!0}var t,n,r;return t=e,(n=[{key:"start",value:function(){var e=this;this.started||(window.onbeforeunload=this.documentOnBeforeUnload,addEventListener("DOMContentLoaded",(function(){return e.render()})),addEventListener("page:updated",(function(){return e.render()})),addEventListener("ajax:update-complete",(function(){return e.render()})),addEventListener("visibilitychange",(function(){return e.documentOnVisibilityChange()})),A.on(document,"submit","[data-request]",this.documentOnSubmit),A.on(document,"input","input[data-request][data-track-input]",this.documentOnKeyup),A.on(document,"change","select[data-request], input[type=radio][data-request], input[type=checkbox][data-request], input[type=file][data-request]",this.documentOnChange),A.on(document,"keydown","input[type=text][data-request], input[type=submit][data-request], input[type=password][data-request]",this.documentOnKeydown),A.on(document,"click","a[data-request], button[data-request], input[type=button][data-request], input[type=submit][data-request]",this.documentOnClick),this.started=!0)}},{key:"stop",value:function(){this.started&&(this.started=!1)}},{key:"render",value:function(e){A.dispatch("before-render"),A.dispatch("render"),dispatchEvent(new Event("resize")),this.documentOnRender(e)}},{key:"documentOnVisibilityChange",value:function(e){this.documentVisible=!document.hidden,this.documentVisible&&this.documentOnRender()}},{key:"documentOnRender",value:function(e){this.documentVisible&&document.querySelectorAll("[data-auto-submit]").forEach((function(e){var t=e.dataset.autoSubmit||0;e.removeAttribute("data-auto-submit"),setTimeout((function(){Oe.fromElement(e)}),t)}))}},{key:"documentOnSubmit",value:function(e){e.preventDefault(),Oe.fromElement(e.target)}},{key:"documentOnClick",value:function(e){e.preventDefault(),Oe.fromElement(e.target)}},{key:"documentOnChange",value:function(e){Oe.fromElement(e.target)}},{key:"documentOnKeyup",value:function(e){var t=e.target,n=t.dataset.ocLastValue;if(-1!==["email","number","password","search","text"].indexOf(t.type)&&(void 0===n||n!=t.value)){t.dataset.ocLastValue=t.value,void 0!==this.dataTrackInputTimer&&clearTimeout(this.dataTrackInputTimer);var r=t.getAttribute("data-track-input");r||(r=300);var o=this;this.dataTrackInputTimer=setTimeout((function(){o.lastDataTrackInputRequest&&o.lastDataTrackInputRequest.abort(),o.lastDataTrackInputRequest=Oe.fromElement(t)}),r)}}},{key:"documentOnKeydown",value:function(e){"Enter"===e.key&&(e.preventDefault(),void 0!==this.dataTrackInputTimer&&clearTimeout(this.dataTrackInputTimer),Oe.fromElement(e.target))}},{key:"documentOnBeforeUnload",value:function(e){window.ocUnloading=!0}}])&&xe(t.prototype,n),r&&xe(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Te(e){return Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Te(e)}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Be=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=[{key:"bind",value:function(){this.bindRequestFunc(),this.bindRenderFunc(),this.bindjQueryEvents()}},{key:"bindRequestFunc",value:function(){var e=$.fn.request;$.fn.request=function(e,t){var n="object"===Te(t)?t:{};return new Oe(this.get(0),e,n)},$.fn.request.Constructor=Oe,$.request=function(e,t){return $(document).request(e,t)},$.fn.request.noConflict=function(){return $.fn.request=e,this}}},{key:"bindRenderFunc",value:function(){$.fn.render=function(e){$(document).on("render",e)}}},{key:"bindjQueryEvents",value:function(){this.migratejQueryEvent(document,"ajax:setup","ajaxSetup",["context"]),this.migratejQueryEvent(document,"ajax:promise","ajaxPromise",["context"]),this.migratejQueryEvent(document,"ajax:fail","ajaxFail",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:done","ajaxDone",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:always","ajaxAlways",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:before-redirect","ajaxRedirect"),this.migratejQueryEvent(document,"ajax:update","ajaxUpdate",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:before-replace","ajaxBeforeReplace"),this.migratejQueryEvent(document,"ajax:before-request","oc.beforeRequest",["context"]),this.migratejQueryEvent(document,"ajax:before-update","ajaxBeforeUpdate",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:request-success","ajaxSuccess",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:request-complete","ajaxComplete",["context","data","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:request-error","ajaxError",["context","message","responseCode","xhr"]),this.migratejQueryEvent(document,"ajax:before-validate","ajaxValidation",["context","message","fields"]),this.migratejQueryEvent(window,"ajax:before-send","ajaxBeforeSend",["context"]),this.migratejQueryEvent(window,"ajax:update-complete","ajaxUpdateComplete",["context","data","responseCode","xhr"]),this.migratejQueryEvent(window,"ajax:invalid-field","ajaxInvalidField",["element","fieldName","errorMsg","isFirst"]),this.migratejQueryEvent(window,"ajax:confirm-message","ajaxConfirmMessage",["message","promise"]),this.migratejQueryEvent(window,"ajax:error-message","ajaxErrorMessage",["message"]),this.migratejQueryAttachData(document,"ajax:setup","a[data-request], button[data-request], form[data-request], a[data-handler], button[data-handler]")}},{key:"migratejQueryEvent",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=this;$(e).on(t,(function(e){o.triggerjQueryEvent(e.originalEvent,n,r)}))}},{key:"triggerjQueryEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=$.Event(t),o=this.buildDetailArgs(e,n);$(e.target).trigger(r,o),r.isDefaultPrevented()&&e.preventDefault()}},{key:"buildDetailArgs",value:function(e,t){var n=[];return t.forEach((function(t){n.push(e.detail[t])})),n}},{key:"migratejQueryAttachData",value:function(e,t,n){$(e).on(t,n,(function(e){var t=$(this).data("request-data");if(t){var n=e.detail.context.options;t.constructor==={}.constructor?Object.assign(n.data,t):"string"==typeof t&&Object.assign(n.data,be.paramToObj("request-data",t))}}))}}],n&&Ce(t.prototype,n),r&&Ce(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),qe=new Se;const Pe={controller:qe,parseJSON:be.parseJSON,serializeJSON:oe.serializeJSON,requestElement:Oe.fromElement,start:function(){qe.start(),window.jQuery&&(new Be).bind()},stop:function(){qe.stop()}};function Re(e){return Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(e)}function Fe(e){return function(e){if(Array.isArray(e))return Le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Le(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}window.oc||(window.oc={}),window.oc.AjaxFramework||(window.oc.AjaxFramework=Pe,window.oc.request=Pe.requestElement,window.oc.parseJSON=Pe.parseJSON,window.oc.serializeJSON=Pe.serializeJSON,window.oc.Events=A,"function"==typeof define&&e.amdO||"object"==("undefined"==typeof exports?"undefined":Re(exports))||Pe.start());var Me,De=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"submit",value:function(e){var t=e.closest("form");t&&(t.querySelectorAll("[data-validate-for]").forEach((function(e){e.classList.remove("oc-visible")})),t.querySelectorAll("[data-validate-error]").forEach((function(e){e.classList.remove("oc-visible")})))}},{key:"validate",value:function(e,t,n,r){var o=e.closest("form"),i=[];if(o){for(var a in t){var s=t[a];i=[].concat(Fe(i),Fe(s));var u=o.querySelector('[data-validate-for="'+a+'"]');u&&(u.innerHTML&&!u.dataset.emptyMode||(u.dataset.emptyMode=!0,u.innerHTML=s.join(", ")),u.classList.add("oc-visible"))}var l=o.querySelector("[data-validate-error]");if(l){l.classList.add("oc-visible");var c=l.querySelectorAll("[data-message]");if(c.length>0){var f=c[0];i.forEach((function(e){var t=f.cloneNode(!0);t.innerHTML=e,f.parentNode.insertBefore(t,f.nextSibling)})),c.forEach((function(e){e.remove()}))}else l.innerHTML=n}r||A.one(o,"ajax:request-error",(function(e){e.preventDefault()}))}}}])&&Ie(t.prototype,n),r&&Ie(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ue,Ve,Je,_e,Ke=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stylesheetElement=this.createStylesheetElement()}var t,n,r;return t=e,r=[{key:"defaultCSS",get:function(){return u(Me||(e=["\n        .oc-attach-loader:after {\n            content: '';\n            display: inline-block;\n            vertical-align: middle;\n            margin-left: .4em;\n            height: 1em;\n            width: 1em;\n            animation: oc-rotate-loader 0.8s infinite linear;\n            border: .2em solid currentColor;\n            border-right-color: transparent;\n            border-radius: 50%;\n            opacity: .5;\n        }\n\n        @keyframes oc-rotate-loader {\n            0%    { transform: rotate(0deg); }\n            100%  { transform: rotate(360deg); }\n        }\n    "],t||(t=e.slice(0)),Me=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}},{key:"attachLoader",get:function(){return{show:function(t){(new e).show(He(t))},hide:function(t){(new e).hide(He(t))},hideAll:function(){(new e).hideAll()}}}}],(n=[{key:"show",value:function(e){if(this.installStylesheetElement(),Qe(e)){var t=document.createElement("span");t.className="oc-attach-loader is-inline",e.parentNode.insertBefore(t,e.nextSibling)}else e.classList.add("oc-attach-loader"),e.disabled=!0}},{key:"hide",value:function(e){Qe(e)?e.nextSibling.classList.contains("oc-attach-loader")&&e.nextSibling.remove():(e.classList.remove("oc-attach-loader"),e.disabled=!1)}},{key:"hideAll",value:function(){document.querySelectorAll(".oc-attach-loader.is-inline").forEach((function(e){e.remove()})),document.querySelectorAll(".oc-attach-loader").forEach((function(e){e.classList.remove("oc-attach-loader"),e.disabled=!1}))}},{key:"showForm",value:function(e){if(void 0!==e.dataset.attachLoading&&this.show(e),e.matches("form")){var t=this;e.querySelectorAll("[data-attach-loading]").forEach((function(e){Qe(e)||t.show(e)}))}}},{key:"hideForm",value:function(e){if(void 0!==e.dataset.attachLoading&&this.hide(e),e.matches("form")){var t=this;e.querySelectorAll("[data-attach-loading]").forEach((function(e){Qe(e)||t.hide(e)}))}}},{key:"installStylesheetElement",value:function(){e.stylesheetReady||(document.head.insertBefore(this.stylesheetElement,document.head.firstChild),e.stylesheetReady=!0)}},{key:"createStylesheetElement",value:function(){var t=document.createElement("style");return t.textContent=e.defaultCSS,t}}])&&Ne(t.prototype,n),r&&Ne(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Qe(e){return["input","select","textarea"].includes((e.tagName||"").toLowerCase())}function He(e){if("string"==typeof e&&(e=document.querySelector(e)),!e)throw new Error("Invalid element for attach loader.");return e}function $e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(n),!0).forEach((function(t){We(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Je=!1,(Ve="stylesheetReady")in(Ue=Ke)?Object.defineProperty(Ue,Ve,{value:Je,enumerable:!0,configurable:!0,writable:!0}):Ue[Ve]=Je;var Ge=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stylesheetElement=this.createStylesheetElement()}var t,n,r;return t=e,n=[{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.installStylesheetElement();var t=e.message,n=void 0===t?"":t,r=e.type,o=void 0===r?"info":r,i=e.target,a=void 0===i?null:i,s=e.interval,u=void 0===s?5:s;e.text&&(n=e.text),e.class&&(o=e.class),a&&a.removeAttribute("data-control"),"error"===o&&this.deleteFlashMessages();var l,c=this.createFlashElement(n,o);function f(){clearInterval(l),c.removeEventListener("click",h),c.removeEventListener("extras:flash-remove",f),c.querySelector(".flash-close").removeEventListener("click",f),c.classList.remove("flash-show"),setTimeout((function(){c.remove()}),1e3)}function h(){clearInterval(l)}document.body.appendChild(c),setTimeout((function(){c.classList.add("flash-show")}),100),c.addEventListener("click",h),c.addEventListener("extras:flash-remove",f),c.querySelector(".flash-close").addEventListener("click",f),u&&0!==u&&(l=setTimeout(f,1e3*u))}},{key:"render",value:function(){var e=this;document.querySelectorAll("[data-control=flash-message]").forEach((function(t){e.show(Xe(Xe({},t.dataset),{},{target:t,message:t.innerHTML})),t.remove()}))}},{key:"deleteFlashMessages",value:function(){document.querySelectorAll(".oc-flash-message").forEach((function(e){e.dispatchEvent(new Event("extras:flash-remove"))}))}},{key:"createFlashElement",value:function(e,t){var n=document.createElement("div");return n.className="oc-flash-message "+t,n.innerHTML="<span>"+e+'</span><a class="flash-close"></a>',n}},{key:"installStylesheetElement",value:function(){e.stylesheetReady||(document.head.insertBefore(this.stylesheetElement,document.head.firstChild),e.stylesheetReady=!0)}},{key:"createStylesheetElement",value:function(){var t=document.createElement("style");return t.textContent=e.defaultCSS,t}}],r=[{key:"defaultCSS",get:function(){return u(_e||(e=["\n        .oc-flash-message {\n            position: fixed;\n            z-index: 10300;\n            width: 500px;\n            left: 50%;\n            top: 50px;\n            margin-left: -250px;\n            color: #fff;\n            font-size: 1rem;\n            padding: 10px 30px 10px 15px;\n            border-radius: 5px;\n\n            opacity: 0;\n            transition: all 0.5s, width 0s;\n            transform: scale(0.9);\n        }\n        .oc-flash-message.flash-show {\n            opacity: 1;\n            transform: scale(1);\n        }\n        .oc-flash-message.success {\n            background: #86cB43;\n        }\n        .oc-flash-message.error {\n            background: #cc3300;\n        }\n        .oc-flash-message.warning {\n            background: #f0ad4e;\n        }\n        .oc-flash-message.info {\n            background: #5fb6f5;\n        }\n        .oc-flash-message a.flash-close {\n            box-sizing: content-box;\n            width: 1em;\n            height: 1em;\n            padding: .25em .25em;\n            background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n            border: 0;\n            border-radius: .25rem;\n            opacity: .5;\n            text-decoration: none;\n            position: absolute;\n            right: .7rem;\n            top: .7rem;\n            cursor: pointer;\n        }\n        .oc-flash-message a.flash-close:hover,\n        .oc-flash-message a.flash-close:focus {\n            opacity: 1;\n        }\n        html[data-turbo-preview] .oc-flash-message {\n            opacity: 0;\n        }\n        @media (max-width: 768px) {\n            .oc-flash-message {\n                left: 1rem;\n                right: 1rem;\n                top: 1rem;\n                margin-left: 0;\n                width: auto;\n            }\n        }\n    "],t||(t=e.slice(0)),_e=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}},{key:"flashMsg",value:function(t){return(new e).show(t)}}],n&&ze(t.prototype,n),r&&ze(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}We(Ge,"stylesheetReady",!1);var Ye=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.started=!1,this.enableProgressBar=function(e){var t=e.detail.context.options;null===t.progressBar&&(t.progressBar=!0)},this.showAttachLoader=function(e){t.attachLoader.showForm(e.target)},this.hideAttachLoader=function(e){t.attachLoader.hideForm(e.target)},this.hideAllAttachLoaders=function(e){t.attachLoader.hideAll()},this.validatorSubmit=function(e){t.validator.submit(e.target)},this.validatorValidate=function(e){t.validator.validate(e.target,e.detail.fields,e.detail.message,et(e.detail.context.options.flash,"validate"))},this.flashMessageBind=function(e){var n=e.detail.context.options,r=t;n.flash&&(n.handleErrorMessage=function(e){(e&&et(n.flash,"error")||et(n.flash,"validate"))&&r.flashMessage.show({message:e,type:"error"})},n.handleFlashMessage=function(e,t){e&&et(n.flash,t)&&r.flashMessage.show({message:e,type:t})})},this.flashMessageRender=function(e){t.flashMessage.render()},this.handleBrowserRedirect=function(e){if(!e.defaultPrevented)if(oc.useTurbo&&oc.useTurbo()){var t=oc.AjaxTurbo.controller.getLastVisitUrl();t&&(e.preventDefault(),oc.visit(t))}else{var n=function(){if(!document.referrer)return null;try{var e=new URL(document.referrer);if(e.origin!==location.origin)return null;var t=localStorage.getItem("ocPushStateReferrer");return t&&0===t.indexOf(e.pathname)?t:document.referrer}catch(e){}}();n&&(e.preventDefault(),location.assign(n))}}}var t,n,r;return t=e,(n=[{key:"start",value:function(){this.started||(addEventListener("ajax:setup",this.enableProgressBar),this.attachLoader=new Ke,A.on(document,"ajax:promise","form, [data-attach-loading]",this.showAttachLoader),A.on(document,"ajax:fail","form, [data-attach-loading]",this.hideAttachLoader),A.on(document,"ajax:done","form, [data-attach-loading]",this.hideAttachLoader),addEventListener("page:before-cache",this.hideAllAttachLoaders),this.validator=new De,A.on(document,"ajax:before-validate","[data-request-validate]",this.validatorValidate),A.on(document,"ajax:promise","[data-request-validate]",this.validatorSubmit),this.flashMessage=new Ge,addEventListener("render",this.flashMessageRender),addEventListener("ajax:setup",this.flashMessageBind),A.on(document,"click","[data-browser-redirect-back]",this.handleBrowserRedirect),A.on(document,"ajax:before-redirect","[data-browser-redirect-back]",this.handleBrowserRedirect),this.started=!0)}},{key:"stop",value:function(){this.started&&(removeEventListener("ajax:setup",this.enableProgressBar),this.attachLoader=null,A.off(document,"ajax:promise","form, [data-attach-loading]",this.showAttachLoader),A.off(document,"ajax:fail","form, [data-attach-loading]",this.hideAttachLoader),A.off(document,"ajax:done","form, [data-attach-loading]",this.hideAttachLoader),removeEventListener("page:before-cache",this.hideAllAttachLoaders),this.validator=null,A.off(document,"ajax:before-validate","[data-request-validate]",this.validatorValidate),A.off(document,"ajax:promise","[data-request-validate]",this.validatorSubmit),this.flashMessage=null,removeEventListener("render",this.flashMessageRender),removeEventListener("ajax:setup",this.flashMessageBind),A.off(document,"click","[data-browser-redirect-back]",this.handleBrowserRedirect),A.off(document,"ajax:before-redirect","[data-browser-redirect-back]",this.handleBrowserRedirect),this.started=!1)}}])&&Ze(t.prototype,n),r&&Ze(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function et(e,t){if(!0===e&&"validate"!==t)return!0;if("string"!=typeof e)return!1;if("*"===e)return!0;var n=!1;return e.split(",").forEach((function(e){e.trim()===t&&(n=!0)})),n}function tt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var nt=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"bind",value:function(){void 0===$.oc&&($.oc={}),$.oc.flashMsg=window.oc.flashMsg,$.oc.stripeLoadIndicator=window.oc.progressBar}}])&&tt(t.prototype,n),r&&tt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),rt=new Ye;const ot={controller:rt,flashMsg:Ge.flashMsg,progressBar:ce.progressBar,attachLoader:Ke.attachLoader,start:function(){rt.start(),window.jQuery&&(new nt).bind()},stop:function(){rt.stop()}};function it(e){return it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(e)}function at(e){return function(e){if(Array.isArray(e))return st(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return st(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return st(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function st(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ut(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}window.oc||(window.oc={}),window.oc.AjaxExtras||(window.oc.AjaxExtras=ot,window.oc.flashMsg=ot.flashMsg,window.oc.progressBar=ot.progressBar,window.oc.attachLoader=ot.attachLoader,"function"==typeof define&&e.amdO||"object"==("undefined"==typeof exports?"undefined":it(exports))||ot.start());var lt=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.context=t}var t,n,r;return t=e,n=[{key:"application",get:function(){return this.context.application}},{key:"scope",get:function(){return this.context.scope}},{key:"element",get:function(){return this.scope.element}},{key:"config",get:function(){return this.scope.element.dataset}},{key:"identifier",get:function(){return this.scope.identifier}},{key:"init",value:function(){}},{key:"connect",value:function(){}},{key:"disconnect",value:function(){}},{key:"initBefore",value:function(){this.proxiedEvents={},this.proxiedMethods={}}},{key:"initAfter",value:function(){}},{key:"connectBefore",value:function(){}},{key:"connectAfter",value:function(){}},{key:"disconnectBefore",value:function(){}},{key:"disconnectAfter",value:function(){for(var e in this.proxiedEvents)this.forget.apply(this,at(this.proxiedEvents[e])),delete this.proxiedEvents[e];for(var t in this.proxiedMethods)this.proxiedMethods[t]=void 0}},{key:"listen",value:function(t,n,r,o){"string"==typeof n?oc.Events.on(this.element,t,n,this.proxy(r),o):n instanceof Element?oc.Events.on(n,t,this.proxy(r),o):oc.Events.on(this.element,t,this.proxy(n),r),e.proxyCounter++,this.proxiedEvents[e.proxyCounter]=arguments}},{key:"forget",value:function(e,t,n,r){"string"==typeof t?oc.Events.off(this.element,e,t,this.proxy(n),r):t instanceof Element?oc.Events.off(t,e,this.proxy(n),r):oc.Events.off(this.element,e,this.proxy(t),n);var o=function(e,t){if(e.length===t.length)for(var n=0;n<e.length;n++)if(e[n]===t[n])return!0;return!1};for(var i in this.proxiedEvents)o(arguments,this.proxiedEvents[i])&&delete this.proxiedEvents[i]}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?this.element:n,o=t.detail,i=void 0===o?{}:o,a=t.prefix,s=void 0===a?this.identifier:a,u=t.bubbles,l=void 0===u||u,c=t.cancelable,f=void 0===c||c,h=s?"".concat(s,":").concat(e):e,d=new CustomEvent(h,{detail:i,bubbles:l,cancelable:f});return r.dispatchEvent(d),d}},{key:"proxy",value:function(t){return void 0===t.ocProxyId&&(e.proxyCounter++,t.ocProxyId=e.proxyCounter),void 0!==this.proxiedMethods[t.ocProxyId]||(this.proxiedMethods[t.ocProxyId]=t.bind(this)),this.proxiedMethods[t.ocProxyId]}}],r=[{key:"shouldLoad",get:function(){return!0}},{key:"afterLoad",value:function(e,t){}}],n&&ut(t.prototype,n),r&&ut(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ct(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return ft(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ft(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function ft(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ht(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(lt,"proxyCounter",0);var dt=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventTarget=t,this.eventName=n,this.eventOptions=r,this.unorderedBindings=new Set}var t,n,r;return t=e,(n=[{key:"connect",value:function(){this.eventTarget.addEventListener(this.eventName,this,this.eventOptions)}},{key:"disconnect",value:function(){this.eventTarget.removeEventListener(this.eventName,this,this.eventOptions)}},{key:"bindingConnected",value:function(e){this.unorderedBindings.add(e)}},{key:"bindingDisconnected",value:function(e){this.unorderedBindings.delete(e)}},{key:"handleEvent",value:function(e){var t,n=function(e){if("immediatePropagationStopped"in e)return e;var t=e.stopImmediatePropagation;return Object.assign(e,{immediatePropagationStopped:!1,stopImmediatePropagation:function(){this.immediatePropagationStopped=!0,t.call(this)}})}(e),r=ct(this.bindings);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(n.immediatePropagationStopped)break;o.handleEvent(n)}}catch(e){r.e(e)}finally{r.f()}}},{key:"hasBindings",value:function(){return this.unorderedBindings.size>0}},{key:"bindings",get:function(){return Array.from(this.unorderedBindings).sort((function(e,t){var n=e.index,r=t.index;return n<r?-1:n>r?1:0}))}}])&&ht(t.prototype,n),r&&ht(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function pt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var yt=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.application=t,this.eventListenerMaps=new Map,this.started=!1}var t,n,r;return t=e,n=[{key:"start",value:function(){this.started||(this.started=!0,this.eventListeners.forEach((function(e){return e.connect()})))}},{key:"stop",value:function(){this.started&&(this.started=!1,this.eventListeners.forEach((function(e){return e.disconnect()})))}},{key:"eventListeners",get:function(){return Array.from(this.eventListenerMaps.values()).reduce((function(e,t){return e.concat(Array.from(t.values()))}),[])}},{key:"bindingConnected",value:function(e){this.fetchEventListenerForBinding(e).bindingConnected(e)}},{key:"bindingDisconnected",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.fetchEventListenerForBinding(e).bindingDisconnected(e),t&&this.clearEventListenersForBinding(e)}},{key:"handleError",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.application.handleError(e,"Error ".concat(t),n)}},{key:"clearEventListenersForBinding",value:function(e){var t=this.fetchEventListenerForBinding(e);t.hasBindings()||(t.disconnect(),this.removeMappedEventListenerFor(e))}},{key:"removeMappedEventListenerFor",value:function(e){var t=e.eventTarget,n=e.eventName,r=e.eventOptions,o=this.fetchEventListenerMapForEventTarget(t),i=this.cacheKey(n,r);o.delete(i),0==o.size&&this.eventListenerMaps.delete(t)}},{key:"fetchEventListenerForBinding",value:function(e){var t=e.eventTarget,n=e.eventName,r=e.eventOptions;return this.fetchEventListener(t,n,r)}},{key:"fetchEventListener",value:function(e,t,n){var r=this.fetchEventListenerMapForEventTarget(e),o=this.cacheKey(t,n),i=r.get(o);return i||(i=this.createEventListener(e,t,n),r.set(o,i)),i}},{key:"createEventListener",value:function(e,t,n){var r=new dt(e,t,n);return this.started&&r.connect(),r}},{key:"fetchEventListenerMapForEventTarget",value:function(e){var t=this.eventListenerMaps.get(e);return t||(t=new Map,this.eventListenerMaps.set(e,t)),t}},{key:"cacheKey",value:function(e,t){var n=[e];return Object.keys(t).sort().forEach((function(e){n.push("".concat(t[e]?"":"!").concat(e))})),n.join(":")}}],n&&pt(t.prototype,n),r&&pt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function vt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var mt=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.module=t,this.scope=n,this.control=new t.controlConstructor(this);try{this.control.initBefore(),this.control.init(),this.control.initAfter()}catch(e){this.handleError(e,"initializing control")}}var t,n,r;return t=e,n=[{key:"connect",value:function(){try{this.control.connectBefore(),this.control.connect(),this.control.connectAfter()}catch(e){this.handleError(e,"connecting control")}}},{key:"refresh",value:function(){}},{key:"disconnect",value:function(){try{this.control.disconnectBefore(),this.control.disconnect(),this.control.disconnectAfter()}catch(e){this.handleError(e,"disconnecting control")}}},{key:"application",get:function(){return this.module.application}},{key:"identifier",get:function(){return this.module.identifier}},{key:"dispatcher",get:function(){return this.application.dispatcher}},{key:"element",get:function(){return this.scope.element}},{key:"parentElement",get:function(){return this.element.parentElement}},{key:"handleError",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.identifier,o=this.control,i=this.element;n=Object.assign({identifier:r,control:o,element:i},n),this.application.handleError(e,"Error ".concat(t),n)}}],n&&vt(t.prototype,n),r&&vt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function gt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var bt=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.application=t,this.definition=function(e){return{identifier:e.identifier,controlConstructor:e.controlConstructor}}(n),this.contextsByScope=new WeakMap,this.connectedContexts=new Set}var t,n,r;return t=e,(n=[{key:"identifier",get:function(){return this.definition.identifier}},{key:"controlConstructor",get:function(){return this.definition.controlConstructor}},{key:"contexts",get:function(){return Array.from(this.connectedContexts)}},{key:"connectContextForScope",value:function(e){var t=this.fetchContextForScope(e);this.connectedContexts.add(t),t.connect()}},{key:"disconnectContextForScope",value:function(e){var t=this.contextsByScope.get(e);t&&(this.connectedContexts.delete(t),t.disconnect())}},{key:"fetchContextForScope",value:function(e){var t=this.contextsByScope.get(e);return t||(t=new mt(this,e),this.contextsByScope.set(e,t)),t}}])&&gt(t.prototype,n),r&&gt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function kt(e){return function(e){if(Array.isArray(e))return wt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return wt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Et(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var At=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.identifier=n,this.containsElement=function(e){return e.closest(r.controlSelector)===r.element}}var t,n,r;return t=e,(n=[{key:"findElement",value:function(e){return this.element.matches(e)?this.element:this.queryElements(e).find(this.containsElement)}},{key:"findAllElements",value:function(e){return[].concat(kt(this.element.matches(e)?[this.element]:[]),kt(this.queryElements(e).filter(this.containsElement)))}},{key:"queryElements",value:function(e){return Array.from(this.element.querySelectorAll(e))}},{key:"controlSelector",get:function(){return e="data-control",t=this.identifier,"[".concat(e,'~="').concat(t,'"]');var e,t}},{key:"isDocumentScope",get:function(){return this.element===document.documentElement}},{key:"documentScope",get:function(){return this.isDocumentScope?this:new e(document.documentElement,this.identifier)}}])&&Et(t.prototype,n),r&&Et(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Ot(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return jt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jt(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var St=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mutationObserverInit={attributes:!0,childList:!0,subtree:!0},this.element=t,this.started=!1,this.delegate=n,this.elements=new Set,this.mutationObserver=new MutationObserver((function(e){return r.processMutations(e)}))}var t,n,r;return t=e,n=[{key:"start",value:function(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,this.mutationObserverInit),this.refresh())}},{key:"pause",value:function(e){this.started&&(this.mutationObserver.disconnect(),this.started=!1),e(),this.started||(this.mutationObserver.observe(this.element,this.mutationObserverInit),this.started=!0)}},{key:"stop",value:function(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}},{key:"refresh",value:function(){if(this.started){for(var e=new Set(this.matchElementsInTree()),t=0,n=Array.from(this.elements);t<n.length;t++){var r=n[t];e.has(r)||this.removeElement(r)}for(var o=0,i=Array.from(e);o<i.length;o++){var a=i[o];this.addElement(a)}}}},{key:"processMutations",value:function(e){if(this.started){var t,n=Ot(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;this.processMutation(r)}}catch(e){n.e(e)}finally{n.f()}}}},{key:"processMutation",value:function(e){"attributes"==e.type?this.processAttributeChange(e.target,e.attributeName):"childList"==e.type&&(this.processRemovedNodes(e.removedNodes),this.processAddedNodes(e.addedNodes))}},{key:"processAttributeChange",value:function(e,t){this.elements.has(e)?this.delegate.elementAttributeChanged&&this.matchElement(e)?this.delegate.elementAttributeChanged(e,t):this.removeElement(e):this.matchElement(e)&&this.addElement(e)}},{key:"processRemovedNodes",value:function(e){for(var t=0,n=Array.from(e);t<n.length;t++){var r=n[t],o=this.elementFromNode(r);o&&this.processTree(o,this.removeElement)}}},{key:"processAddedNodes",value:function(e){for(var t=0,n=Array.from(e);t<n.length;t++){var r=n[t],o=this.elementFromNode(r);o&&this.elementIsActive(o)&&this.processTree(o,this.addElement)}}},{key:"matchElement",value:function(e){return this.delegate.matchElement(e)}},{key:"matchElementsInTree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.element;return this.delegate.matchElementsInTree(e)}},{key:"processTree",value:function(e,t){var n,r=Ot(this.matchElementsInTree(e));try{for(r.s();!(n=r.n()).done;){var o=n.value;t.call(this,o)}}catch(e){r.e(e)}finally{r.f()}}},{key:"elementFromNode",value:function(e){if(e.nodeType==Node.ELEMENT_NODE)return e}},{key:"elementIsActive",value:function(e){return e.isConnected==this.element.isConnected&&this.element.contains(e)}},{key:"addElement",value:function(e){this.elements.has(e)||this.elementIsActive(e)&&(this.elements.add(e),this.delegate.elementMatched&&this.delegate.elementMatched(e))}},{key:"removeElement",value:function(e){this.elements.has(e)&&(this.elements.delete(e),this.delegate.elementUnmatched&&this.delegate.elementUnmatched(e))}}],n&&xt(t.prototype,n),r&&xt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Tt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ct=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.delegate=r,this.attributeName=n,this.elementObserver=new St(t,this)}var t,n,r;return t=e,(n=[{key:"element",get:function(){return this.elementObserver.element}},{key:"selector",get:function(){return"[".concat(this.attributeName,"]")}},{key:"start",value:function(){this.elementObserver.start()}},{key:"pause",value:function(e){this.elementObserver.pause(e)}},{key:"stop",value:function(){this.elementObserver.stop()}},{key:"refresh",value:function(){this.elementObserver.refresh()}},{key:"started",get:function(){return this.elementObserver.started}},{key:"matchElement",value:function(e){return e.hasAttribute(this.attributeName)}},{key:"matchElementsInTree",value:function(e){var t=this.matchElement(e)?[e]:[],n=Array.from(e.querySelectorAll(this.selector));return t.concat(n)}},{key:"elementMatched",value:function(e){this.delegate.elementMatchedAttribute&&this.delegate.elementMatchedAttribute(e,this.attributeName)}},{key:"elementUnmatched",value:function(e){this.delegate.elementUnmatchedAttribute&&this.delegate.elementUnmatchedAttribute(e,this.attributeName)}},{key:"elementAttributeChanged",value:function(e,t){this.delegate.elementAttributeValueChanged&&this.attributeName==t&&this.delegate.elementAttributeValueChanged(e,t)}}])&&Tt(t.prototype,n),r&&Tt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Bt(e,t){var n=e.get(t);return n||(n=new Set,e.set(t,n)),n}function qt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ft=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.valuesByKey=new Map}var t,n,r;return t=e,n=[{key:"keys",get:function(){return Array.from(this.valuesByKey.keys())}},{key:"values",get:function(){return Array.from(this.valuesByKey.values()).reduce((function(e,t){return e.concat(Array.from(t))}),React.createElement(V,null),[]>[])}},{key:"size",get:function(){return Array.from(this.valuesByKey.values()).reduce((function(e,t){return e+t.size}),0)}},{key:"add",value:function(e,t){!function(e,t,n){Bt(e,t).add(n)}(this.valuesByKey,e,t)}},{key:"delete",value:function(e,t){!function(e,t,n){Bt(e,t).delete(n),function(e,t){var n=e.get(t);null!=n&&0==n.size&&e.delete(t)}(e,t)}(this.valuesByKey,e,t)}},{key:"has",value:function(e,t){var n=this.valuesByKey.get(e);return null!=n&&n.has(t)}},{key:"hasKey",value:function(e){return this.valuesByKey.has(e)}},{key:"hasValue",value:function(e){return Array.from(this.valuesByKey.values()).some((function(t){return t.has(e)}))}},{key:"getValuesForKey",value:function(e){var t=this.valuesByKey.get(e);return t?Array.from(t):[]}},{key:"getKeysForValue",value:function(e){return Array.from(this.valuesByKey).filter((function(t){var n=qt(t,2);return n[0],n[1].has(e)})).map((function(e){var t=qt(e,2),n=t[0];return t[1],n}))}}],n&&Rt(t.prototype,n),r&&Rt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Lt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return It(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return It(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function It(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Dt=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.delegate=r,this.attributeObserver=new Ct(t,n,this),this.tokensByElement=new Ft}var t,n,r;return t=e,(n=[{key:"started",get:function(){return this.attributeObserver.started}},{key:"start",value:function(){this.attributeObserver.start()}},{key:"pause",value:function(e){this.attributeObserver.pause(e)}},{key:"stop",value:function(){this.attributeObserver.stop()}},{key:"refresh",value:function(){this.attributeObserver.refresh()}},{key:"element",get:function(){return this.attributeObserver.element}},{key:"attributeName",get:function(){return this.attributeObserver.attributeName}},{key:"elementMatchedAttribute",value:function(e){this.tokensMatched(this.readTokensForElement(e))}},{key:"elementAttributeValueChanged",value:function(e){var t=Lt(this.refreshTokensForElement(e),2),n=t[0],r=t[1];this.tokensUnmatched(n),this.tokensMatched(r)}},{key:"elementUnmatchedAttribute",value:function(e){this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))}},{key:"tokensMatched",value:function(e){var t=this;e.forEach((function(e){return t.tokenMatched(e)}))}},{key:"tokensUnmatched",value:function(e){var t=this;e.forEach((function(e){return t.tokenUnmatched(e)}))}},{key:"tokenMatched",value:function(e){this.delegate.tokenMatched(e),this.tokensByElement.add(e.element,e)}},{key:"tokenUnmatched",value:function(e){this.delegate.tokenUnmatched(e),this.tokensByElement.delete(e.element,e)}},{key:"refreshTokensForElement",value:function(e){var t,n,r,o=this.tokensByElement.getValuesForKey(e),i=this.readTokensForElement(e),a=(t=o,n=i,r=Math.max(t.length,n.length),Array.from({length:r},(function(e,r){return[t[r],n[r]]}))).findIndex((function(e){var t=Lt(e,2);return!function(e,t){return e&&t&&e.index==t.index&&e.content==t.content}(t[0],t[1])}));return-1==a?[[],[]]:[o.slice(a),i.slice(a)]}},{key:"readTokensForElement",value:function(e){var t=this.attributeName;return function(e,t,n){return e.trim().split(/\s+/).filter((function(e){return e.length})).map((function(e,r){return{element:t,attributeName:n,content:e,index:r}}))}(e.getAttribute(t)||"",e,t)}}])&&Mt(t.prototype,n),r&&Mt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Nt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ut=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tokenListObserver=new Dt(t,n,this),this.delegate=r,this.parseResultsByToken=new WeakMap,this.valuesByTokenByElement=new WeakMap}var t,n,r;return t=e,n=[{key:"started",get:function(){return this.tokenListObserver.started}},{key:"start",value:function(){this.tokenListObserver.start()}},{key:"stop",value:function(){this.tokenListObserver.stop()}},{key:"refresh",value:function(){this.tokenListObserver.refresh()}},{key:"element",get:function(){return this.tokenListObserver.element}},{key:"attributeName",get:function(){return this.tokenListObserver.attributeName}},{key:"tokenMatched",value:function(e){var t=e.element,n=this.fetchParseResultForToken(e).value;n&&(this.fetchValuesByTokenForElement(t).set(e,n),this.delegate.elementMatchedValue(t,n))}},{key:"tokenUnmatched",value:function(e){var t=e.element,n=this.fetchParseResultForToken(e).value;n&&(this.fetchValuesByTokenForElement(t).delete(e),this.delegate.elementUnmatchedValue(t,n))}},{key:"fetchParseResultForToken",value:function(e){var t=this.parseResultsByToken.get(e);return t||(t=this.parseToken(e),this.parseResultsByToken.set(e,t)),t}},{key:"fetchValuesByTokenForElement",value:function(e){var t=this.valuesByTokenByElement.get(e);return t||(t=new Map,this.valuesByTokenByElement.set(e,t)),t}},{key:"parseToken",value:function(e){try{return{value:this.delegate.parseValueForToken(e)}}catch(e){return{error:e}}}}],n&&Nt(t.prototype,n),r&&Nt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Vt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Jt=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.delegate=n,this.valueListObserver=new Ut(this.element,this.controlAttribute,this),this.scopesByIdentifierByElement=new WeakMap,this.scopeReferenceCounts=new WeakMap}var t,n,r;return t=e,n=[{key:"start",value:function(){this.valueListObserver.start()}},{key:"stop",value:function(){this.valueListObserver.stop()}},{key:"controlAttribute",get:function(){return"data-control"}},{key:"parseValueForToken",value:function(e){var t=e.element,n=e.content,r=this.fetchScopesByIdentifierForElement(t),o=r.get(n);return o||(o=this.delegate.createScopeForElementAndIdentifier(t,n),r.set(n,o)),o}},{key:"elementMatchedValue",value:function(e,t){var n=(this.scopeReferenceCounts.get(t)||0)+1;this.scopeReferenceCounts.set(t,n),1==n&&this.delegate.scopeConnected(t)}},{key:"elementUnmatchedValue",value:function(e,t){var n=this.scopeReferenceCounts.get(t);n&&(this.scopeReferenceCounts.set(t,n-1),1==n&&this.delegate.scopeDisconnected(t))}},{key:"fetchScopesByIdentifierForElement",value:function(e){var t=this.scopesByIdentifierByElement.get(e);return t||(t=new Map,this.scopesByIdentifierByElement.set(e,t)),t}}],n&&Vt(t.prototype,n),r&&Vt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Kt=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.application=t,this.scopeObserver=new Jt(this.element,this),this.scopesByIdentifier=new Ft,this.modulesByIdentifier=new Map}var t,n,r;return t=e,(n=[{key:"element",get:function(){return this.application.element}},{key:"modules",get:function(){return Array.from(this.modulesByIdentifier.values())}},{key:"contexts",get:function(){return this.modules.reduce((function(e,t){return e.concat(t.contexts)}),[])}},{key:"start",value:function(){this.scopeObserver.start()}},{key:"stop",value:function(){this.scopeObserver.stop()}},{key:"loadDefinition",value:function(e){this.unloadIdentifier(e.identifier);var t=new bt(this.application,e);this.connectModule(t);var n=e.controlConstructor.afterLoad;n&&n.call(e.controlConstructor,e.identifier,this.application)}},{key:"unloadIdentifier",value:function(e){var t=this.modulesByIdentifier.get(e);t&&this.disconnectModule(t)}},{key:"getModuleForIdentifier",value:function(e){return this.modulesByIdentifier.get(e)}},{key:"getContextForElementAndIdentifier",value:function(e,t){var n=this.modulesByIdentifier.get(t);if(n)return n.contexts.find((function(t){return t.element==e}))}},{key:"handleError",value:function(e,t,n){this.application.handleError(e,t,n)}},{key:"createScopeForElementAndIdentifier",value:function(e,t){return new At(e,t)}},{key:"scopeConnected",value:function(e){this.scopesByIdentifier.add(e.identifier,e);var t=this.modulesByIdentifier.get(e.identifier);t&&t.connectContextForScope(e)}},{key:"scopeDisconnected",value:function(e){this.scopesByIdentifier.delete(e.identifier,e);var t=this.modulesByIdentifier.get(e.identifier);t&&t.disconnectContextForScope(e)}},{key:"connectModule",value:function(e){this.modulesByIdentifier.set(e.identifier,e),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach((function(t){return e.connectContextForScope(t)}))}},{key:"disconnectModule",value:function(e){this.modulesByIdentifier.delete(e.identifier),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach((function(t){return e.disconnectContextForScope(t)}))}}])&&_t(t.prototype,n),r&&_t(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Qt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ht=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.started=!1,this.element=document.documentElement,this.dispatcher=new yt(this),this.container=new Kt(this)}var t,n,r;return t=e,n=[{key:"startAsync",value:function(){var e=this;new Promise((function(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(function(){return e()})):e()})).then((function(){e.start()}))}},{key:"start",value:function(){this.started||(this.started=!0,this.dispatcher.start(),this.container.start())}},{key:"stop",value:function(){this.started&&(this.dispatcher.stop(),this.container.stop(),this.started=!1)}},{key:"register",value:function(e,t){this.load({identifier:e,controlConstructor:t})}},{key:"import",value:function(e){var t=this.container.getModuleForIdentifier(e);if(!t)throw new Error("Control is not registered: "+e);return t.controlConstructor}},{key:"fetch",value:function(e,t){return"string"==typeof e&&(e=document.querySelector(e)),t||(t=e.dataset.control),e?this.getControlForElementAndIdentifier(e,t):null}},{key:"fetchAll",value:function(e,t){var n=this;"string"==typeof e&&(e=document.querySelectorAll(e));var r=[];return e.forEach((function(e){var o=n.fetch(e,t);o&&r.push(o)})),r}},{key:"load",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=Array.isArray(e)?e:[e].concat(r);i.forEach((function(e){e.controlConstructor.shouldLoad&&t.container.loadDefinition(e)}))}},{key:"unload",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=Array.isArray(e)?e:[e].concat(r);i.forEach((function(e){return t.container.unloadIdentifier(e)}))}},{key:"controls",get:function(){return this.container.contexts.map((function(e){return e.control}))}},{key:"getControlForElementAndIdentifier",value:function(e,t){var n=this.container.getContextForElementAndIdentifier(e,t);return n?n.control:null}},{key:"handleError",value:function(e,t,n){var r;console.error("%s\n\n%o\n\n%o",t,e,n),null===(r=window.onerror)||void 0===r||r.call(window,t,"",0,0,e)}}],n&&Qt(t.prototype,n),r&&Qt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}());const $t={application:Ht,registerControl:function(e,t){return Ht.register(e,t)},importControl:function(e){return Ht.import(e)},fetchControl:function(e){return Ht.fetch(e)},fetchControls:function(e){return Ht.fetchAll(e)},start:function(){Ht.startAsync()},stop:function(){Ht.stop()}};function Xt(e){return Xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xt(e)}window.oc||(window.oc={}),window.oc.AjaxObserve||(window.oc.AjaxObserve=$t,window.oc.registerControl=$t.registerControl,window.oc.importControl=$t.importControl,window.oc.fetchControl=$t.fetchControl,window.oc.fetchControls=$t.fetchControls,window.oc.ControlBase=lt,"function"==typeof define&&e.amdO||"object"==("undefined"==typeof exports?"undefined":Xt(exports))||$t.start())})();
/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.2';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.5.2';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName !== 'LABEL' || inputBtn && inputBtn.type !== 'checkbox') {
        Button._jQueryInterface.call($(button), 'toggle');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.2';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $(this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.2';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.2';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.2';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._element).off(Util.TRANSITION_END);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $(_this3._element).one(Util.TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.2): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.2';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.2';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.2';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.2';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.5.2';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $(this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i="fslightbox-",r="".concat(i,"styles"),s="".concat(i,"cursor-grabbing"),a="".concat(i,"full-dimension"),c="".concat(i,"flex-centered"),l="".concat(i,"open"),u="".concat(i,"transform-transition"),d="".concat(i,"absoluted"),p="".concat(i,"slide-btn"),f="".concat(p,"-container"),h="".concat(i,"fade-in"),m="".concat(i,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(i,"opacity-"),x="".concat(b,"1"),y="".concat(i,"source");function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"object"===("undefined"==typeof document?"undefined":S(document))&&((o=document.createElement("style")).className=r,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),document.head.appendChild(o));function w(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:r(e)},this.handleReceivedSourceTypeForUrl=function(e,n){!1===i[n]&&(o--,"invalid"!==e?i[n]=e:delete i[n],0===o&&(!function(e,t){for(var n in t)e[n]=t[n]}(t,i),localStorage.setItem("fslightbox-types",JSON.stringify(t))))};var r=function(e){o++,i[e]=!1};n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem("fslightbox-types")))||(t={},this.getSourceTypeFromLocalStorageByUrl=r)}function L(e,t,n,o){var i=e.data,r=e.elements.sources,s=n/o,a=0;this.adjustSize=function(){if((a=i.maxSourceWidth/s)<i.maxSourceHeight)return n<i.maxSourceWidth&&(a=o),c();a=o>i.maxSourceHeight?i.maxSourceHeight:o,c()};var c=function(){r[t].style.width=a*s+"px",r[t].style.height=a+"px"}}function C(e,t){var n=this,o=e.collections.sourceSizers,i=e.elements,r=i.sourceAnimationWrappers,s=i.sourceMainWrappers,a=i.sources,c=e.resolve;function l(e,n){o[t]=c(L,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){a[t].classList.add(x),r[t].classList.add(g),s[t].removeChild(s[t].firstChild),l(e,o),n.runActions=l}}function F(e,t){var n,o=this,i=e.elements.sources,r=e.props,s=(0,e.resolve)(C,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;s.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,i=t.videoHeight;n=!0,s.runActions(o,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;r.maxYoutubeDimensions&&(e=r.maxYoutubeDimensions.width,t=r.maxYoutubeDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){setTimeout((function(){var e=i[t];s.runActions(e.offsetWidth,e.offsetHeight)}))}}function A(e,t,n){var o=e.elements.sources,i=e.props.customClasses,r=i[t]?i[t]:"";o[t].className=n+" "+r}function E(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var i in o[t])n[t].setAttribute(i,o[t][i])}function I(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=document.createElement("img"),A(e,t,y),i[t].src=s[t],i[t].onload=n[t].handleImageLoad,E(e,t),r[t].appendChild(i[t])}function T(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props,a=s.sources,c=s.videosPosters;i[t]=document.createElement("video"),A(e,t,y),i[t].src=a[t],i[t].onloadedmetadata=function(e){n[t].handleVideoLoad(e)},i[t].controls=!0,E(e,t),c[t]&&(i[t].poster=c[t]);var l=document.createElement("source");l.src=a[t],i[t].appendChild(l),setTimeout(n[t].handleNotMetaDatedVideoLoad,3e3),r[t].appendChild(i[t])}function W(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,s=o.sourceAnimationWrappers,a=e.props.sources;r[t]=document.createElement("iframe"),A(e,t,"".concat(y," ").concat(i,"youtube-iframe")),r[t].src="https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]),r[t].allowFullscreen=!0,E(e,t),s[t].appendChild(r[t]),n[t].handleYoutubeLoad()}function N(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=s[t],A(e,t,"".concat(i[t].className," ").concat(y)),r[t].appendChild(i[t]),n[t].handleCustomLoad()}function z(e,t){var n=e.elements,o=n.sources,r=n.sourceAnimationWrappers,s=n.sourceMainWrappers;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(i,"invalid-file-wrapper ").concat(c),o[t].innerHTML="Invalid source",r[t].classList.add(g),r[t].appendChild(o[t]),s[t].removeChild(s[t].firstChild)}function M(e){var t=e.collections,n=t.sourceLoadHandlers,o=t.sourcesRenderFunctions,i=e.core.sourceDisplayFacade,r=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,s){var a;switch("invalid"!==t&&(n[s]=r(F,[s])),t){case"image":a=I;break;case"video":a=T;break;case"youtube":a=W;break;case"custom":a=N;break;default:a=z}o[s]=function(){return a(e,s)},i.displaySourcesWhichShouldBeDisplayed()}}function H(){var e,t,n,o={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function i(){if(4!==n.readyState){if(2===n.readyState){var e;switch(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(r){if(o.isUrlYoutubeOne(e))return r("youtube");t=r,(n=new XMLHttpRequest).onreadystatechange=i,n.open("GET",e,!0),n.send()}}function k(e,t,n){var o=e.props,i=o.types,r=o.type,s=o.sources,a=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:r&&(t=r),t},this.retrieveTypeWithXhrForIndex=function(e){var o=a(H);o.setUrlToCheck(s[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function O(e,t){var n=e.componentsServices.hideSourceLoaderIfNotYetCollection,o=e.elements,i=o.sourceWrappersContainer,r=o.sourceMainWrappers;r[t]=document.createElement("div"),r[t].className="".concat(d," ").concat(a," ").concat(c),r[t].innerHTML='<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';var s=r[t].firstChild;n[t]=function(){r[t].contains(s)&&r[t].removeChild(s)},i.appendChild(r[t]),function(e,t){var n=e.elements,o=n.sourceMainWrappers,i=n.sourceAnimationWrappers;i[t]=document.createElement("div"),o[t].appendChild(i[t])}(e,t)}function R(e,t,n,o){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width",t),r.setAttributeNS(null,"height",t),r.setAttributeNS(null,"viewBox",n);var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttributeNS(null,"class","".concat(i,"svg-path")),s.setAttributeNS(null,"d",o),r.appendChild(s),e.appendChild(r),r}function D(e,t){var n=document.createElement("div");return n.className="".concat(i,"toolbar-button ").concat(c),n.title=t,e.appendChild(n),n}function j(e,t){var n=document.createElement("div");n.className="".concat(i,"toolbar"),t.appendChild(n),function(e,t){var n=e.componentsServices,o=e.core.fullscreenToggler,i=e.data,r="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",s=D(t);s.title="Enter fullscreen";var a=R(s,"20px","0 0 18 18",r);n.enterFullscreen=function(){i.isFullscreenOpen=!0,s.title="Exit fullscreen",a.setAttributeNS(null,"width","24px"),a.setAttributeNS(null,"height","24px"),a.setAttributeNS(null,"viewBox","0 0 950 1024"),a.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},n.exitFullscreen=function(){i.isFullscreenOpen=!1,s.title="Enter fullscreen",a.setAttributeNS(null,"width","20px"),a.setAttributeNS(null,"height","20px"),a.setAttributeNS(null,"viewBox","0 0 18 18"),a.firstChild.setAttributeNS(null,"d",r)},s.onclick=function(){i.isFullscreenOpen?o.exitFullscreen():o.enterFullscreen()}}(e,n),function(e,t){var n=D(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,R(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function P(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(i,"nav"),n.appendChild(o),j(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,r=(e.stageIndexes,document.createElement("div"));r.className="".concat(i,"slide-number-container");var s=document.createElement("div");s.className=c;var a=document.createElement("span");n.setSlideNumber=function(e){return a.innerHTML=e};var l=document.createElement("span");l.className="".concat(i,"slash");var u=document.createElement("div");u.innerHTML=o.length,r.appendChild(s),s.appendChild(a),s.appendChild(l),s.appendChild(u),t.appendChild(r),setTimeout((function(){s.offsetWidth>55&&(r.style.justifyContent="flex-start")}))}(e,o)}function X(e,t){var n=this,o=e.elements.sourceMainWrappers,i=e.props,r=0;this.byValue=function(e){return r=e,n},this.negative=function(){s(-a())},this.zero=function(){s(0)},this.positive=function(){s(a())};var s=function(e){o[t].style.transform="translateX(".concat(e+r,"px)"),r=0},a=function(){return(1+i.slideDistance)*innerWidth}}function B(e,t,n,o){var i=e.elements.container,r=n.charAt(0).toUpperCase()+n.slice(1),s=document.createElement("div");s.className="".concat(f," ").concat(f,"-").concat(n),s.title="".concat(r," slide"),s.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(p," ").concat(c),R(n,"20px","0 0 20 20",t),e.appendChild(n)}(s,o),i.appendChild(s)}function U(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function V(e){var t=this,n=e.core,o=n.eventsDispatcher,i=n.fullscreenToggler,r=n.globalEventsController,s=n.scrollbarRecompensor,a=e.data,c=e.elements,u=e.props,d=e.slideSwipingProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,c.container.classList.add(v),r.removeListeners(),u.exitFullscreenOnClose&&a.isFullscreenOpen&&i.exitFullscreen(),setTimeout((function(){t.isLightboxFadingOut=!1,d.isSwiping=!1,c.container.classList.remove(v),document.documentElement.classList.remove(l),s.removeRecompense(),document.body.removeChild(c.container),o.dispatch("onClose")}),220)}}function Y(e){var t,n,o,i=e.collections.sourceMainWrappersTransformers,r=e.componentsServices,s=e.core,a=s.classFacade,c=s.slideIndexChanger,l=s.sourceDisplayFacade,d=s.stageManager,p=e.elements.sourceAnimationWrappers,f=e.stageIndexes,v=(t=function(){a.removeFromEachElementClassIfContains("sourceAnimationWrappers",m)},n=250,o=[],function(){o.push(!0),setTimeout((function(){o.pop(),o.length||t()}),n)});c.changeTo=function(e){f.current=e,d.updateStageIndexes(),r.setSlideNumber(e+1),l.displaySourcesWhichShouldBeDisplayed()},c.jumpTo=function(e){var t=f.current;c.changeTo(e),a.removeFromEachElementClassIfContains("sourceMainWrappers",u),U(p[t],g),U(p[t],h),p[t].classList.add(m),U(p[e],g),U(p[e],m),p[e].classList.add(h),v(),i[e].zero(),setTimeout((function(){t!==f.current&&i[t].negative()}),220)}}function q(e){return e.touches?e.touches[0].clientX:e.clientX}function _(e){var t=e.core,n=t.lightboxCloser,o=t.fullscreenToggler,i=t.slideChangeFacade;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":i.changeToPrevious();break;case"ArrowRight":i.changeToNext();break;case"F11":e.preventDefault(),o.enterFullscreen()}}}function J(e){var t=e.collections.sourceMainWrappersTransformers,n=e.elements,o=e.slideSwipingProps,i=e.stageIndexes;this.runActionsForEvent=function(e){var t,a,c;n.container.contains(n.slideSwipingHoverer)||n.container.appendChild(n.slideSwipingHoverer),t=n.container,a=s,(c=t.classList).contains(a)||c.add(a),o.swipedX=q(e)-o.downClientX,r(i.current,"zero"),void 0!==i.previous&&o.swipedX>0?r(i.previous,"negative"):void 0!==i.next&&o.swipedX<0&&r(i.next,"positive")};var r=function(e,n){t[e].byValue(o.swipedX)[n]()}}function G(e){var t,n=e.props.sources,o=e.resolve,i=e.slideSwipingProps,r=o(J),s=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});1===n.length?this.listener=function(){i.swipedX=1}:this.listener=function(e){i.isSwiping&&s()&&r.runActionsForEvent(e)}}function $(e){var t=e.collections.sourceMainWrappersTransformers,n=e.core.slideIndexChanger,o=e.elements.sourceMainWrappers,i=e.stageIndexes;this.runPositiveSwipedXActions=function(){void 0===i.previous||(r("positive"),n.changeTo(i.previous)),r("zero")},this.runNegativeSwipedXActions=function(){void 0===i.next||(r("negative"),n.changeTo(i.next)),r("zero")};var r=function(e){o[i.current].classList.add(u),t[i.current][e]()}}function K(e,t){e.contains(t)&&e.removeChild(t)}function Q(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,i=e.slideSwipingProps,r=o($);this.runNoSwipeActions=function(){K(n.container,n.slideSwipingHoverer),i.isSourceDownEventTarget||t.closeLightbox(),i.isSwiping=!1},this.runActions=function(){i.swipedX>0?r.runPositiveSwipedXActions():r.runNegativeSwipedXActions(),K(n.container,n.slideSwipingHoverer),n.container.classList.remove(s),i.isSwiping=!1}}function Z(e){var t=e.resolve,n=e.slideSwipingProps,o=t(Q);this.listener=function(){n.isSwiping&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function ee(e){var t,n,o;n=(t=e).core.classFacade,o=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<o[e].length;n++)U(o[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices,n=e.core.fullscreenToggler;n.enterFullscreen=function(){t.enterFullscreen();var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.exitFullscreen(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.resolve,r=i(_),s=i(G),a=i(Z);n.attachListeners=function(){document.addEventListener("mousemove",s.listener),document.addEventListener("touchmove",s.listener,{passive:!0}),document.addEventListener("mouseup",a.listener),document.addEventListener("touchend",a.listener,{passive:!0}),addEventListener("resize",o.runActions),document.addEventListener("keydown",r.listener)},n.removeListeners=function(){document.removeEventListener("mousemove",s.listener),document.removeEventListener("touchmove",s.listener),document.removeEventListener("mouseup",a.listener),document.removeEventListener("touchend",a.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",r.listener)}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)(V);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),ne(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))};var o=function(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),Y(e),function(e){var t=e.core,n=t.classFacade,o=t.slideSwipingDown,i=e.elements.sources,r=e.slideSwipingProps,s=e.stageIndexes;o.listener=function(e){r.isSwiping=!0,r.downClientX=q(e),r.swipedX=0,"VIDEO"===e.target.tagName||e.touches||e.preventDefault();var t=i[s.current];t&&t.contains(e.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1,n.removeFromEachElementClassIfContains("sourceMainWrappers",u)}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props,i=e.stageIndexes;function r(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o.loadOnlyCurrentSource)r(i.current);else for(var e in i)r(i[e])}}(e),function(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.isSourceInStage=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var i=n-e;return-1===i||0===i||1===i}}(e),function(e){var t=e.collections,n=t.sourceMainWrappersTransformers,o=t.sourceSizers,i=e.core.windowResizeActioner,r=e.data,s=e.elements.sourceMainWrappers,a=e.props,c=e.stageIndexes;i.runActions=function(){innerWidth<992?r.maxSourceWidth=innerWidth:r.maxSourceWidth=.9*innerWidth,r.maxSourceHeight=.9*innerHeight;for(var e=0;e<a.sources.length;e++)U(s[e],u),e!==c.current&&n[e].negative(),o[e]&&o[e].adjustSize()}}(e)}function te(e){var t=e.core.eventsDispatcher,n=e.data,o=e.elements,r=e.props.sources;n.isInitialized=!0,function(e){for(var t=e.collections.sourceMainWrappersTransformers,n=e.props.sources,o=e.resolve,i=0;i<n.length;i++)t[i]=o(X,[i])}(e),ee(e),o.container=document.createElement("div"),o.container.className="".concat(i,"container ").concat(a," ").concat(g),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(i,"slide-swiping-hoverer ").concat(a," ").concat(d)}(e),P(e),function(e){var t=e.core.slideSwipingDown,n=e.elements,o=e.props.sources;n.sourceWrappersContainer=document.createElement("div"),n.sourceWrappersContainer.className="".concat(d," ").concat(a),n.container.appendChild(n.sourceWrappersContainer),n.sourceWrappersContainer.addEventListener("mousedown",t.listener),n.sourceWrappersContainer.addEventListener("touchstart",t.listener,{passive:!0});for(var i=0;i<o.length;i++)O(e,i)}(e),r.length>1&&function(e){var t=e.core.slideChangeFacade;B(e,t.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),B(e,t.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")}(e),function(e){for(var t=e.props.sources,n=e.resolve,o=n(w),i=n(M),r=n(k,[o,i]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=r.getTypeSetByClientForIndex(s);if(a)i.runActionsForSourceTypeAndIndex(a,s);else{var c=o.getSourceTypeFromLocalStorageByUrl(t[s]);c?i.runActionsForSourceTypeAndIndex(c,s):r.retrieveTypeWithXhrForIndex(s)}}else i.runActionsForSourceTypeAndIndex("custom",s)}(e),t.dispatch("onInit")}function ne(e){var t=e.collections.sourceMainWrappersTransformers,n=e.componentsServices,o=e.core,i=o.eventsDispatcher,r=o.lightboxOpener,s=o.globalEventsController,a=o.scrollbarRecompensor,c=o.sourceDisplayFacade,u=o.stageManager,d=o.windowResizeActioner,p=e.data,f=e.elements,h=e.stageIndexes;r.open=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;h.current=o,p.isInitialized?i.dispatch("onShow"):te(e),u.updateStageIndexes(),c.displaySourcesWhichShouldBeDisplayed(),n.setSlideNumber(o+1),document.body.appendChild(f.container),document.documentElement.classList.add(l),a.addRecompense(),s.attachListeners(),d.runActions(),t[h.current].zero(),i.dispatch("onOpen")}}function oe(){var e=localStorage.getItem("fslightbox-scrollbar-width");if(e)return e;var t=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),n=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(t);var o=t.offsetWidth;t.appendChild(n);var i=n.offsetWidth;document.body.removeChild(t);var r=o-i;return localStorage.setItem("fslightbox-scrollbar-width",r.toString()),r}function ie(e,t,n){return(ie=re()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&se(i,n.prototype),i}).apply(null,arguments)}function re(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function le(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].getAttribute("data-fslightbox"),o=e[t].getAttribute("href");fsLightboxInstances[n]||(fsLightboxInstances[n]=new FsLightbox);var i=null;i="#"===o.charAt(0)?document.getElementById(o.substring(1)):o,fsLightboxInstances[n].props.sources.push(i),fsLightboxInstances[n].elements.a.push(e[t]);var r=fsLightboxInstances[n].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[n].open(r)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class");for(var s=["href","data-fslightbox","data-type","data-video-poster","data-class","data-custom-class"],a=e[t].attributes,c=fsLightboxInstances[n].props.customAttributes,l=0;l<a.length;l++)if(-1===s.indexOf(a[l].name)&&"data-"===a[l].name.substr(0,5)){c[r]||(c[r]={});var u=a[l].name.substr(5);c[r][u]=a[l].value}function d(o,i){e[t].hasAttribute(i)&&(fsLightboxInstances[n].props[o][r]=e[t].getAttribute(i))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],types:[],videosPosters:[],slideDistance:.3},this.data={isInitialized:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:oe(),isFullscreenOpen:!1},this.slideSwipingProps={isSwiping:!1,downClientX:null,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,sourceWrappersContainer:null,sources:[],sourceMainWrappers:[],sourceAnimationWrappers:[]},this.componentsServices={enterFullscreen:null,exitFullscreen:null,hideSourceLoaderIfNotYetCollection:[],setSlideNumber:function(){}},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),ie(t,ae(n))},this.collections={sourceMainWrappersTransformers:[],sourceLoadHandlers:[],sourcesRenderFunctions:[],sourceSizers:[]},this.core={classFacade:{},eventsDispatcher:{},fullscreenToggler:{},globalEventsController:{},lightboxCloser:{},lightboxOpener:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},slideSwipingDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},ne(this),this.open=function(t){return e.core.lightboxOpener.open(t)},this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},le(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}le()}}])}));
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (u) {
    u.extend(u.fn, {
        validate: function (t) {
            if (this.length) {
                var s = u.data(this[0], "validator");
                return s ? s : (this.attr("novalidate", "novalidate"), s = new u.validator(t, this[0]), u.data(this[0], "validator", s), s.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                    s.submitButton = t.currentTarget, u(this).hasClass("cancel") && (s.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (s.cancelSubmit = !0)
                }), this.on("submit.validate", function (i) {
                    function t() {
                        var t, e;
                        return s.submitButton && (s.settings.submitHandler || s.formSubmitted) && (t = u("<input type='hidden'/>").attr("name", s.submitButton.name).val(u(s.submitButton).val()).appendTo(s.currentForm)), !(s.settings.submitHandler && !s.settings.debug) || (e = s.settings.submitHandler.call(s, s.currentForm, i), t && t.remove(), void 0 !== e && e)
                    }

                    return s.settings.debug && i.preventDefault(), s.cancelSubmit ? (s.cancelSubmit = !1, t()) : s.form() ? s.pendingRequest ? !(s.formSubmitted = !0) : t() : (s.focusInvalid(), !1)
                })), s)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        }, valid: function () {
            var t, e, i;
            return u(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = u(this[0].form).validate(), this.each(function () {
                (t = e.element(this) && t) || (i = i.concat(e.errorList))
            }), e.errorList = i), t
        }, rules: function (t, e) {
            var i, s, n, r, a = this[0],
                o = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != a && (!a.form && o && (a.form = this.closest("form")[0], a.name = this.attr("name")), null != a.form)) {
                if (t) switch (o = (i = u.data(a.form, "validator").settings).rules, s = u.validator.staticRules(a), t) {
                    case"add":
                        u.extend(s, u.validator.normalizeRule(e)), delete s.messages, o[a.name] = s, e.messages && (i.messages[a.name] = u.extend(i.messages[a.name], e.messages));
                        break;
                    case"remove":
                        return e ? (r = {}, u.each(e.split(/\s/), function (t, e) {
                            r[e] = s[e], delete s[e]
                        }), r) : (delete o[a.name], s)
                }
                return (a = u.validator.normalizeRules(u.extend({}, u.validator.classRules(a), u.validator.attributeRules(a), u.validator.dataRules(a), u.validator.staticRules(a)), a)).required && (n = a.required, delete a.required, a = u.extend({required: n}, a)), a.remote && (n = a.remote, delete a.remote, a = u.extend(a, {remote: n})), a
            }
        }
    });

    function e(t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    var i;
    u.extend(u.expr.pseudos || u.expr[":"], {
        blank: function (t) {
            return !e("" + u(t).val())
        }, filled: function (t) {
            t = u(t).val();
            return null !== t && !!e("" + t)
        }, unchecked: function (t) {
            return !u(t).prop("checked")
        }
    }), u.validator = function (t, e) {
        this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init()
    }, u.validator.format = function (i, t) {
        return 1 === arguments.length ? function () {
            var t = u.makeArray(arguments);
            return t.unshift(i), u.validator.format.apply(this, t)
        } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function (t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return e
            })
        })), i)
    }, u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(i)
            },
            unhighlight: function (t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(i)
            }
        },
        setDefaults: function (t) {
            u.extend(u.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.currentForm, s = this.groups = {};

                function t(t) {
                    var e, i,
                        s = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");
                    !this.form && s && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name")), n === this.form && (e = u.data(this.form, "validator"), i = "on" + t.type.replace(/^validate/, ""), (s = e.settings)[i] && !u(this).is(s.ignore) && s[i].call(e, this, t))
                }

                u.each(this.settings.groups, function (i, t) {
                    "string" == typeof t && (t = t.split(/\s/)), u.each(t, function (t, e) {
                        s[e] = i
                    })
                }), i = this.settings.rules, u.each(i, function (t, e) {
                    i[t] = u.validator.normalizeRule(e)
                }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            }, element: function (t) {
                var e, i, s = this.clean(t), n = this.validationTargetFor(s), r = this, a = !0;
                return void 0 === n ? delete this.invalid[s.name] : (this.prepareElement(n), this.currentElements = u(n), (i = this.groups[n.name]) && u.each(this.groups, function (t, e) {
                    e === i && t !== n.name && (s = r.validationTargetFor(r.clean(r.findByName(t)))) && s.name in r.invalid && (r.currentElements.push(s), a = r.check(s) && a)
                }), e = !1 !== this.check(n), a = a && e, this.invalid[n.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(t).attr("aria-invalid", !e)), a
            }, showErrors: function (e) {
                var i;
                e && (i = this, u.extend(this.errorMap, e), this.errorList = u.map(this.errorMap, function (t, e) {
                    return {message: t, element: i.findByName(e)[0]}
                }), this.successList = u.grep(this.successList, function (t) {
                    return !(t.name in e)
                })), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            }, resetElements: function (t) {
                var e;
                if (this.settings.unhighlight) for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass); else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (t) {
                var e, i = 0;
                for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                return i
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (t) {
                }
            }, findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === u.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            }, elements: function () {
                var i = this, s = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var t = this.name || u(this).attr("name"),
                        e = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");
                    return !t && i.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = u(this).closest("form")[0], this.name = t), this.form === i.currentForm && (!(t in s || !i.objectLength(u(this).rules())) && (s[t] = !0))
                })
            }, clean: function (t) {
                return u(t)[0]
            }, errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + t, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = u([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function (t) {
                var e = u(t), i = t.type,
                    s = void 0 !== e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === i || "checkbox" === i ? this.findByName(t.name).filter(":checked").val() : "number" === i && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = s ? e.text() : e.val(), "file" === i ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) || 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            }, check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, s, n, r = u(e).rules(), a = u.map(r, function (t, e) {
                    return e
                }).length, o = !1, l = this.elementValue(e);
                for (i in "function" == typeof r.normalizer ? n = r.normalizer : "function" == typeof this.settings.normalizer && (n = this.settings.normalizer), n && (l = n.call(e, l), delete r.normalizer), r) {
                    s = {method: i, parameters: r[i]};
                    try {
                        if ("dependency-mismatch" === (t = u.validator.methods[i].call(this, l, e, s.parameters)) && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === t) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t) return this.formatAndAdd(e, s), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method."), t
                    }
                }
                if (!o) return this.objectLength(r) && this.successList.push(e), !0
            }, customDataMessage: function (t, e) {
                return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
            }, customMessage: function (t, e) {
                t = this.settings.messages[t];
                return t && (t.constructor === String ? t : t[e])
            }, findDefined: function () {
                for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t]
            }, defaultMessage: function (t, e) {
                "string" == typeof e && (e = {method: e});
                var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    s = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, e.parameters, t) : s.test(i) && (i = u.validator.format(i.replace(s, "{$1}"), e.parameters)), i
            }, formatAndAdd: function (t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            }, addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function () {
                for (var t, e, i = 0; this.errorList[i]; i++) e = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
                if (this.settings.unhighlight) for (i = 0, t = this.validElements(); t[i]; i++) this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return u(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (t, e) {
                var i, s, n, r = this.errorsFor(t), a = this.idOrName(t), o = u(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(e)) : (i = r = u("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(t)) : i.insertAfter(t), r.is("label") ? r.attr("for", a) : 0 === r.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (a = r.attr("id"), o ? o.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (o += " " + a) : o = a, u(t).attr("aria-describedby", o), (s = this.groups[t.name]) && (n = this, u.each(n.groups, function (t, e) {
                    e === s && u("[name='" + n.escapeCssMeta(t) + "']", n.currentForm).attr("aria-describedby", r.attr("id"))
                })))), !e && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
            }, errorsFor: function (t) {
                var e = this.escapeCssMeta(this.idOrName(t)), t = u(t).attr("aria-describedby"),
                    e = "label[for='" + e + "'], label[for='" + e + "'] *";
                return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")), this.errors().filter(e)
            }, escapeCssMeta: function (t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (t) {
                return this.groups[t.name] || !this.checkable(t) && t.id || t.name
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0]
            }, checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            }, findByName: function (t) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            }, getLength: function (t, e) {
                switch (e.nodeName.toLowerCase()) {
                    case"select":
                        return u("option:selected", e).length;
                    case"input":
                        if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            }, depend: function (t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            }, dependTypes: {
                boolean: function (t) {
                    return t
                }, string: function (t, e) {
                    return !!u(t, e.form).length
                }, function: function (t, e) {
                    return t(e)
                }
            }, optional: function (t) {
                var e = this.elementValue(t);
                return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            }, stopRequest: function (t, e) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (t, e) {
                return e = "string" == typeof e && e || "remote", u.data(t, "previousValue") || u.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {method: e})
                })
            }, destroy: function () {
                this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var e = {}, t = u(t).attr("class");
            return t && u.each(t.split(" "), function () {
                this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
            }), e
        },
        normalizeAttributeRule: function (t, e, i, s) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function (t) {
            var e, i, s = {}, n = u(t), r = t.getAttribute("type");
            for (e in u.validator.methods) i = "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0), !!i) : n.attr(e), this.normalizeAttributeRule(s, r, e, i);
            return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
        },
        dataRules: function (t) {
            var e, i, s = {}, n = u(t), r = t.getAttribute("type");
            for (e in u.validator.methods) "" === (i = n.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(s, r, e, i);
            return s
        },
        staticRules: function (t) {
            var e = {}, i = u.data(t.form, "validator");
            return i.settings.rules && (e = u.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
        },
        normalizeRules: function (s, n) {
            return u.each(s, function (t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                            case"string":
                                i = !!u(e.depends, n.form).length;
                                break;
                            case"function":
                                i = e.depends.call(n, n)
                        }
                        i ? s[t] = void 0 === e.param || e.param : (u.data(n.form, "validator").resetElements(u(n)), delete s[t])
                    }
                } else delete s[t]
            }), u.each(s, function (t, e) {
                s[t] = u.isFunction(e) && "normalizer" !== t ? e(n) : e
            }), u.each(["minlength", "maxlength"], function () {
                s[this] && (s[this] = Number(s[this]))
            }), u.each(["rangelength", "range"], function () {
                var t;
                s[this] && (u.isArray(s[this]) ? s[this] = [Number(s[this][0]), Number(s[this][1])] : "string" == typeof s[this] && (t = s[this].replace(/[\[\]]/g, "").split(/[\s,]+/), s[this] = [Number(t[0]), Number(t[1])]))
            }), u.validator.autoCreateRanges && (null != s.min && null != s.max && (s.range = [s.min, s.max], delete s.min, delete s.max), null != s.minlength && null != s.maxlength && (s.rangelength = [s.minlength, s.maxlength], delete s.minlength, delete s.maxlength)), s
        },
        normalizeRule: function (t) {
            var e;
            return "string" == typeof t && (e = {}, u.each(t.split(/\s/), function () {
                e[this] = !0
            }), t = e), t
        },
        addMethod: function (t, e, i) {
            u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, e, i) {
                if (!this.depend(i, e)) return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : null != t && 0 < t.length;
                e = u(e).val();
                return e && 0 < e.length
            }, email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            }, url: function (t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            }, date: (i = !1, function (t, e) {
                return i || (i = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }), dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            }, number: function (t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, minlength: function (t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= t
            }, maxlength: function (t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t <= i
            }, rangelength: function (t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t >= i[0] && t <= i[1]
            }, min: function (t, e, i) {
                return this.optional(e) || i <= t
            }, max: function (t, e, i) {
                return this.optional(e) || t <= i
            }, range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            }, step: function (t, e, i) {
                function s(t) {
                    return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
                }

                function n(t) {
                    return Math.round(t * Math.pow(10, r))
                }

                var r, a = u(e).attr("type"), o = "Step attribute on input type " + a + " is not supported.",
                    l = new RegExp("\\b" + a + "\\b"), h = !0;
                if (a && !l.test(["text", "number", "range"].join())) throw new Error(o);
                return r = s(i), (s(t) > r || n(t) % n(i) != 0) && (h = !1), this.optional(e) || h
            }, equalTo: function (t, e, i) {
                i = u(i);
                return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    u(e).valid()
                }), t === i.val()
            }, remote: function (s, n, t, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var a, e, o = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), o.originalMessage = o.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = o.message, t = "string" == typeof t ? {url: t} : t, e = u.param(u.extend({data: s}, t.data)), o.old === e ? o.valid : (o.old = e, (a = this).startRequest(n), (e = {})[n.name] = s, u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: e,
                    context: a.currentForm,
                    success: function (t) {
                        var e, i = !0 === t || "true" === t;
                        a.settings.messages[n.name][r] = o.originalMessage, i ? (e = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(n), a.formSubmitted = e, a.successList.push(n), a.invalid[n.name] = !1, a.showErrors()) : (e = {}, t = t || a.defaultMessage(n, {
                            method: r,
                            parameters: s
                        }), e[n.name] = o.message = t, a.invalid[n.name] = !0, a.showErrors(e)), o.valid = i, a.stopRequest(n, i)
                    }
                }, t)), "pending")
            }
        }
    });
    var s, n = {};
    return u.ajaxPrefilter ? u.ajaxPrefilter(function (t, e, i) {
        var s = t.port;
        "abort" === t.mode && (n[s] && n[s].abort(), n[s] = i)
    }) : (s = u.ajax, u.ajax = function (t) {
        var e = ("mode" in t ? t : u.ajaxSettings).mode, i = ("port" in t ? t : u.ajaxSettings).port;
        return "abort" === e ? (n[i] && n[i].abort(), n[i] = s.apply(this, arguments), n[i]) : s.apply(this, arguments)
    }), u
}), jQuery.validator.setDefaults({
    errorElement: "span", errorPlacement: function (t, e) {
        t.addClass("invalid-feedback"), e.closest(".form-group").append(t)
    }, highlight: function (t, e, i) {
        $(t).addClass("is-invalid")
    }, unhighlight: function (t, e, i) {
        $(t).removeClass("is-invalid")
    }
}), $(document).on("click", 'a[href^="#"]', function (t) {
    t.preventDefault(), $("html, body").animate({scrollTop: $($.attr(this, "href")).offset().top}, 500)
}), jQuery(document).ready(function (t) {
    jQuery(".third-button").on("click", function () {
        jQuery(".animated-icon3").toggleClass("open");
        jQuery('body').toggleClass('active');
    })
});