/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});

/*
 * =======================================================================
 * KindleBookResourceUrlTranslator
 *
 * This class creates a resource url translator.  This translator can
 * convert urls to dataURIs.
 *
 * SkeletonBuilder API:
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */


function KindleBookResourceUrlTranslator(resourceManager, manifest) {
  var that = {};
  that.resourceManger =  resourceManager;
  that.compositeResourceMap = {};

  var compositeResourceManifest;
  if (manifest) {
    that.resourceManifest = manifest.resourceManifest;
    compositeResourceManifest = manifest.compositeResourceManifest;
  } else {
    that.resourceManifest = {};
    compositeResourceManifest = {};
  }
  for (var resourceId in compositeResourceManifest) {
    that.resourceManifest[resourceId] = compositeResourceManifest[resourceId];
    var parentName = compositeResourceManifest[resourceId].parent;
    if (!that.compositeResourceMap[parentName]) {
      that.compositeResourceMap[parentName] = [];
    }
    that.compositeResourceMap[parentName].push(resourceId);
  }

  // reverse lookup stores resources keyed by their name and have the value be the resource Id.
  // eg. {"dir/file0":0, "dir/file1":1, ...}.
  that.reverseLookup = {};
  for (resourceId in that.resourceManifest) {
    that.reverseLookup[that.resourceManifest[resourceId].name] = resourceId;
  }

  /**
   * This function is used to get a set of resources from the resource manager.
   * @param resources an array of resources specified by their names, eg. ["dir/file0", "dir/file1", ...]
   * @param successCallback the function to call when we have the dataURI for the resource name. The parameter
   * it expects is a key value pair of the resource and the data URI. eg. {"dir/file0" : "data:..."}
   * @param errorCallback the function to call in the case of an error. This function may be called
   * back with a text message explaining the error.
   */
  that.getResourceUrls = function(resources, successCallback, errorCallback) {
    // Collects the resources.  When they and the skeleton are ready, calls process...
    function resourceHandler(resource) {
      var resourceName = resourceManifest[resource.metadata.id].name;
      var result = {};
      result[resourceName] = resource.data;
      successCallback(result);
    }

    var resourceIds = [];
    for (var idx=0; idx<resources.length; idx++) {
      var resourceId = this.reverseLookup[resources[idx]];
      if (resourceId !== undefined) {
        resourceIds.push(resourceId);
      }
    }

    var resourceManifest = this.resourceManifest;

    if (resourceIds.length !== resources.length) {
      errorCallback();
    }

    if (resourceIds.length > 0) {
      this.resourceManger.getPieces(resourceIds, resourceHandler, errorCallback);
    } else {
      successCallback({});
    }
  };

  return that;
}

/**
 * =======================================================================
 * KindleCompression
 * Compression and decompression library.
 *
 * Revision: $Revision: $
 * Last Changed: $Date: ${TIME} $
 * Changed By: $Author: billeva $
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */

var KindleCompression = (function() {
  /*

   We don't use the default dictionary, and this string is HUGE.  Comment it out, so that minification will remove it.

  var defaultDictionaryString = 'data:image/png;base64,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loadFragment415({"fragmentData":"<p class="c17" id="a:HH"><span id="293866" class="amazon-word-span">As</span><span id="293869" class="amazon-word-span">Turkey </span><span id="293876" class="amazon-word-span">and </span><span id="293880" class="amazon-word-span">Iran </span><span id="293885" class="amazon-word-span">compete </span><span id="293893" class="amazon-word-span">in </span><span id="293896" class="amazon-word-span">the </span><span id="293900" class="amazon-word-span">next </span><span id="293905" class="amazon-word-span">decade, </span><span id="293913" class="amazon-word-span">Israel</span><span id="293920" class="amazon-word-span">and </span><span id="293924" class="amazon-word-span">Pakistan</span><span id="293933" class="amazon-word-span">will </span><span id="293938" class="amazon-word-span">be </span><span id="293941" class="amazon-word-span">concerned </span><span id="293951" class="amazon-word-span">with </span><span id="293956" class="amazon-word-span">local </span><span id="293962" class="amazon-word-span">balances</span><span id="293971" class="amazon-word-span">of </span><span id="293974" class="amazon-word-span">power. </span><span id="293981" class="amazon-word-span">In </span><span id="293984" class="amazon-word-span">the </span><span id="293988" class="amazon-word-span">long </span><span id="293993" class="amazon-word-span">run, </span><span id="293998" class="amazon-word-span">Turkey </span><span id="294005" class="amazon-word-span">cannot </span><span id="294012" class="amazon-word-span">be </span><span id="294015" class="amazon-word-span">contained </span><span id="294025" class="amazon-word-span">by </span><span id="294028" class="amazon-word-span">Iran. </span><span id="294034" class="amazon-word-span">Turkey </span><span id="294041" class="amazon-word-span">is</span><span id="294044" class="amazon-word-span">by </span><span id="294047" class="amazon-word-span">far </span><span id="294051" class="amazon-word-span">the </span><span id="294055" class="amazon-word-span">more </span><span id="294060" class="amazon-word-span">dynamic </span><span id="294068" class="amazon-word-span">country </span><span id="294076" class="amazon-word-span">economically, </span><span id="294090" class="amazon-word-span">and </span><span id="294094" class="amazon-word-span">therefore </span><span id="294104" class="amazon-word-span">it </span><span id="294107" class="amazon-word-span">can </span><span id="294111" class="amazon-word-span">support</span><span id="294119" class="amazon-word-span">a </span><span id="294121" class="amazon-word-span">more </span><span id="294126" class="amazon-word-span">sophisticated</span><span id="294140" class="amazon-word-span">military. </span><span id="294150" class="amazon-word-span">More </span><span id="294155" class="amazon-word-span">important, </span><span id="294166" class="amazon-word-span">whereas</span><span id="294174" class="amazon-word-span">Iran </span><span id="294179" class="amazon-word-span">has</span><span id="294183" class="amazon-word-span">geographically </span><span id="294198" class="amazon-word-span">limited </span><span id="294206" class="amazon-word-span">regional </span><span id="294215" class="amazon-word-span">options,</span><span id="294224" class="amazon-word-span">Turkey </span><span id="294231" class="amazon-word-span">reaches</span><span id="294239" class="amazon-word-span">into </span><span id="294244" class="amazon-word-span">the </span><span id="294248" class="amazon-word-span">Caucasus,</span><span id="294258" class="amazon-word-span">the </span><span id="294262" class="amazon-word-span">Balkans,</span><span id="294271" class="amazon-word-span">Central </span><span id="294279" class="amazon-word-span">Asia,</span><span id="294285" class="amazon-word-span">and </span><span id="294289" class="amazon-word-span">ultimately </span><span id="294300" class="amazon-word-span">the </span><span id="294304" class="amazon-word-span">Mediterranean </span><span id="294318" class="amazon-word-span">and </span><span id="294322" class="amazon-word-span">North </span><span id="294328" class="amazon-word-span">Africa, </span><span id="294336" class="amazon-word-span">which </span><span id="294342" class="amazon-word-span">provides</span><span id="294351" class="amazon-word-span">opportunities</span><span id="294365" class="amazon-word-span">and </span><span id="294369" class="amazon-word-span">allies</span><span id="294376" class="amazon-word-span">denied </span><span id="294383" class="amazon-word-span">the </span><span id="294387" class="amazon-word-span">Iranians.</span><span id="294397" class="amazon-word-span">Iran </span><span id="294402" class="amazon-word-span">has</span><span id="294406" class="amazon-word-span">never </span><span id="294412" class="amazon-word-span">been </span><span id="294417" class="amazon-word-span">a </span><span id="294419" class="amazon-word-span">significant</span><span id="294431" class="amazon-word-span">naval </span><span id="294437" class="amazon-word-span">power </span><span id="294443" class="amazon-word-span">since</span><span id="294449" class="amazon-word-span">antiquity, </span><span id="294460" class="amazon-word-span">and </span><span id="294464" class="amazon-word-span">because</span><span id="294472" class="amazon-word-span">of </span><span id="294475" class="amazon-word-span">the </span><span id="294479" class="amazon-word-span">location </span><span id="294488" class="amazon-word-span">of </span><span id="294491" class="amazon-word-span">its</span><span id="294495" class="amazon-word-span">ports,</span><span id="294502" class="amazon-word-span">it </span><span id="294505" class="amazon-word-span">can </span><span id="294509" class="amazon-word-span">never </span><span id="294515" class="amazon-word-span">really </span><span id="294522" class="amazon-word-span">be </span><span id="294525" class="amazon-word-span">one </span><span id="294529" class="amazon-word-span">in </span><span id="294532" class="amazon-word-span">the </span><span id="294536" class="amazon-word-span">future. </span><span id="294544" class="amazon-word-span">Turkey, </span><span id="294552" class="amazon-word-span">in </span><span id="294555" class="amazon-word-span">contrast,</span><span id="294565" class="amazon-word-span">has</span><span id="294569" class="amazon-word-span">frequently </span><span id="294580" class="amazon-word-span">been </span><span id="294585" class="amazon-word-span">the </span><span id="294589" class="amazon-word-span">dominant </span><span id="294598" class="amazon-word-span">power </span><span id="294604" class="amazon-word-span">in </span><span id="294607" class="amazon-word-span">the </span><span id="294611" class="amazon-word-span">Mediterranean </span><span id="294625" class="amazon-word-span">and </span><span id="294629" class="amazon-word-span">will </span><span id="294634" class="amazon-word-span">be </span><span id="294637" class="amazon-word-span">so</span><span id="294640" class="amazon-word-span">again. </span><span id="294647" class="amazon-word-span">Over </span><span id="294652" class="amazon-word-span">the </span><span id="294656" class="amazon-word-span">next </span><span id="294661" class="amazon-word-span">decade </span><span id="294668" class="amazon-word-span">we </span><span id="294671" class="amazon-word-span">will </span><span id="294676" class="amazon-word-span">see</span><span id="294680" class="amazon-word-span">the </span><span id="294684" class="amazon-word-span">beginning </span><span id="294694" class="amazon-word-span">of </span>Turkey<span id="294703" class="amazon-word-span">&#8217;</span><span id="294711" class="amazon-word-span">s</span><span id="294713" class="amazon-word-span">rise</span><span id="294718" class="amazon-word-span">to </span><span id="294721" class="amazon-word-span">dominance </span><span id="294731" class="amazon-word-span">in </span><span id="294734" class="amazon-word-span">the </span><span id="294738" class="amazon-word-span">region. </span><span id="294746" class="amazon-word-span">It </span><span id="294749" class="amazon-word-span">is</span><span id="294752" class="amazon-word-span">interesting</span><span id="294764" class="amazon-word-span">to </span><span id="294767" class="amazon-word-span">note </span><span id="294772" class="amazon-word-span">that </span><span id="294777" class="amazon-word-span">while </span><span id="294783" class="amazon-word-span">we </span>can<span id="294789" class="amazon-word-span">&#8217;</span><span id="294797" class="amazon-word-span">t </span><span id="294799" class="amazon-word-span">think </span><span id="294805" class="amazon-word-span">of </span><span id="294808" class="amazon-word-span">the </span><span id="294812" class="amazon-word-span">century </span><span id="294820" class="amazon-word-span">without </span><span id="294828" class="amazon-word-span">Turkey </span><span id="294835" class="amazon-word-span">playing </span><span id="294843" class="amazon-word-span">an </span><span id="294846" class="amazon-word-span">extremely </span><span id="294856" class="amazon-word-span">important </span><span id="294866" class="amazon-word-span">role, </span><span id="294872" class="amazon-word-span">this</span><span id="294877" class="amazon-word-span">decade </span><span id="294884" class="amazon-word-span">will </span><span id="294889" class="amazon-word-span">be </span><span id="294892" class="amazon-word-span">one </span><span id="294896" class="amazon-word-span">of </span><span id="294899" class="amazon-word-span">preparation. </span><span id="294912" class="amazon-word-span">Turkey </span><span id="294919" class="amazon-word-span">will </span><span id="294924" class="amazon-word-span">have </span><span id="294929" class="amazon-word-span">to </span><span id="294932" class="amazon-word-span">come </span><span id="294937" class="amazon-word-span">to </span><span id="294940" class="amazon-word-span">terms</span><span id="294946" class="amazon-word-span">with </span><span id="294951" class="amazon-word-span">its</span><span id="294955" class="amazon-word-span">domestic</span><span id="294964" class="amazon-word-span">conflicts</span><span id="294974" class="amazon-word-span">and </span><span id="294978" class="amazon-word-span">grow </span><span id="294983" class="amazon-word-span">its</span><span id="294987" class="amazon-word-span">economy. </span><span id="294996" class="amazon-word-span">The </span><span id="295000" class="amazon-word-span">cautious</span><span id="295009" class="amazon-word-span">foreign </span><span id="295017" class="amazon-word-span">policy </span><span id="295024" class="amazon-word-span">Turkey </span><span id="295031" class="amazon-word-span">has</span><span id="295035" class="amazon-word-span">followed </span><span id="295044" class="amazon-word-span">recently </span><span id="295053" class="amazon-word-span">will </span><span id="295058" class="amazon-word-span">continue. </span><span id="295068" class="amazon-word-span">It </span><span id="295071" class="amazon-word-span">is</span><span id="295074" class="amazon-word-span">not </span><span id="295078" class="amazon-word-span">going </span><span id="295084" class="amazon-word-span">to </span><span id="295087" class="amazon-word-span">plunge </span><span id="295094" class="amazon-word-span">into </span><span id="295099" class="amazon-word-span">conflicts</span><span id="295109" class="amazon-word-span">and </span><span id="295113" class="amazon-word-span">therefore </span><span id="295123" class="amazon-word-span">will </span><span id="295128" class="amazon-word-span">influence </span><span id="295138" class="amazon-word-span">but </span><span id="295142" class="amazon-word-span">not </span><span id="295146" class="amazon-word-span">define </span><span id="295153" class="amazon-word-span">the </span><span id="295157" class="amazon-word-span">region. </span><span id="295165" class="amazon-word-span">The </span><span id="295169" class="amazon-word-span">United </span><span id="295176" class="amazon-word-span">States</span><span id="295183" class="amazon-word-span">must</span><span id="295188" class="amazon-word-span">take </span><span id="295193" class="amazon-word-span">a </span><span id="295195" class="amazon-word-span">long-term </span><span id="295205" class="amazon-word-span">view </span><span id="295210" class="amazon-word-span">of </span><span id="295213" class="amazon-word-span">Turkey </span><span id="295220" class="amazon-word-span">and </span><span id="295224" class="amazon-word-span">avoid </span><span id="295230" class="amazon-word-span">pressure</span><span id="295239" class="amazon-word-span">that </span><span id="295244" class="amazon-word-span">could </span><span id="295250" class="amazon-word-span">undermine </span><span id="295260" class="amazon-word-span">its</span><span id="295264" class="amazon-word-span">development.</span></p>","fragmentMetadata":{"encryption":0,"id":415}});loadFragmap({"fragmentArray":[{"currentFragmentPosition":396,"fragmentEndLocation":6,"fragmentEndPosition":895,"fragmentId":0,"fragmentLength":2278,"fragmentStartLocation":3,"nextFragmentPosition":1030,"nodeOffset":0,"previousFragmentPosition":-1,"skeletonId":0,"skeletonLinkId":"a:0","skeletonLinkType":0},{"currentFragmentPosition":1030,"fragmentEndLocation":20,"fragmentEndPosition":2901,"fragmentId":1,"fragmentLength":6612,"fragmentStartLocation":7,"nextFragmentPosition":3030,"nodeOffset":6,"previousFragmentPosition":396,"skeletonId":0,"skeletonLinkId":"a:0","skeletonLinkType":0},{"currentFragmentPosition":3030,"fragmentEndLocation":30,"fragmentEndPosition":4364,"fragmentId":2,"fragmentLength":5376,"fragmentStartLocation":21,"nextFragmentPosition":4585,"nodeOffset":7,"previousFragmentPosition":1030,"skeletonId":0,"skeletonLinkId":"a:0","skeletonLinkType":0},{"currentFragmentPosition":4585,"fragmentEndLocation":53,"fragmentEndPosition":7837,"fragmentId":3,"fragmentLength":7413,"fragmentStartLocation":31,"nextFragmentPosition":10671,"nodeOffset":0,"previousFragmentPosition":3030,"skeletonId":0,"skeletonLinkId":"a:v","skeletonLinkType":0},{"currentFragmentPosition":10671,"fragmentEndLocation":72,"fragmentEndPosition":10671,"fragmentId":4,"fragmentLength":1220,"fragmentStartLocation":72,"nextFragmentPosition":10671,"nodeOffset":24,"previousFragmentPosition":4585,"skeletonId":0,"skeletonLinkId":"a:v","skeletonLinkType":0},{"currentFragmentPosition":10671,"fragmentEndLocation":73,"fragmentEndPosition":10846,"fragmentId":5,"fragmentLength":5609,"fragmentStartLocation":72,"nextFragmentPosition":10987,"nodeOffset":25,"previousFragmentPosition":10671,"skeletonId":0,"skeletonLinkId":"a:v","skeletonLinkType":0},{"currentFragmentPosition":10987,"fragmentEndLocation":94,"fragmentEndPosition":14041,"fragmentId":6,"fragmentLength":7847,"fragmentStartLocation":74,"nextFragmentPosition":14124,"nodeOffset":11,"previousFragmentPosition":10671,"skeletonId":0,"skeletonLinkId":"a:v","skeletonLinkType":1},{"currentFragmentPosition":14124,"fragmentEndLocation":98,"fragmentEndPosition":14661,"fragmentId":7,"fragmentLength":5304,"fragmentStartLocation":95,"nextFragmentPosition":14734,"nodeOffset":63,"previousFragmentPosition":10987,"skeletonId":0,"skeletonLinkId":"a:v","skeletonLinkType":1},{"currentFragmentPosition":14734,"fragmentEndLocation":101,"fragmentEndPosition":15042,"fragmentId":8,"fragmentLength":3128,"fragmentStartLocation":99,"nextFragmentPosition":15115,"nodeOffset":6<p id="p48" style=";text-align:justify;line-height:21.0px;word-spacing: 1.3;text-indent: 15.0;margin-top: 7.0"><canvas id="1697" width="44.0" height="18.0">Where </canvas> <canvas id="1698" width="25.0" height="18.0">was </canvas> <canvas id="1699" width="22.0" height="18.0">he? </canvas> <canvas id="1700" width="37.0" height="18.0">Sarah </canvas> <canvas id="1701" width="45.0" height="18.0">looked </canvas> <canvas id="1702" width="47.0" height="18.0">around </canvas> <canvas id="1703" width="20.0" height="18.0">for </canvas> <canvas id="1704" width="33.0" height="18.0">what </canvas> <canvas id="1705" width="48.0" height="18.0">seemed </canvas> <canvas id="1706" width="23.0" height="18.0">like </canvas> <canvas id="1708" width="21.0" height="18.0">the </canvas> <canvas id="1709" width="69.0" height="18.0">hundredth </canvas> <canvas id="1710" width="34.0" height="18.0">time, </canvas> <canvas id="1711" width="47.0" height="18.0">hoping </canvas> <canvas id="1712" width="27.0" height="18.0">that </canvas> <canvas id="1713" width="7.0" height="18.0">a </canvas> <canvas id="1714" width="26.0" height="18.0">tall, </canvas> <canvas id="1715" width="85.0" height="18.0">sandy-haired </canvas> <canvas id="1716" width="50.0" height="18.0">rancher </canvas> <canvas id="1718" width="42.0" height="18.0">would </canvas> <canvas id="1719" width="47.0" height="18.0">appear. </canvas> <canvas id="1720" width="20.0" height="18.0">He </canvas> <canvas id="1721" width="42.0" height="18.0">didn\'t. </canvas> <canvas id="1722" width="23.0" height="18.0">She </canvas> <canvas id="1723" width="32.0" height="18.0">took </canvas> <canvas id="1724" width="51.0" height="18.0">another </canvas> <canvas id="1725" width="30.0" height="18.0">deep </canvas> <canvas id="1726" width="43.0" height="18.0">breath </canvas> <canvas id="1727" width="13.0" height="18.0">as </canvas> <canvas id="1729" width="21.0" height="18.0">she </canvas> <canvas id="1730" width="71.0" height="18.0">considered </canvas> <canvas id="1731" width="21.0" height="18.0">the </canvas> <canvas id="1732" width="49.0" height="18.0">reasons </canvas> <canvas id="1733" width="17.0" height="18.0">he </canvas> <canvas id="1734" width="39.0" height="18.0">might </canvas> <canvas id="1735" width="22.0" height="18.0">not </canvas> <canvas id="1736" width="30.0" height="18.0">have </canvas> <canvas id="1737" width="40.0" height="18.0">come. </canvas> <canvas id="1738" width="51.0" height="18.0">Perhaps </canvas> <canvas id="1740" width="19.0" height="18.0">his </canvas> <canvas id="1741" width="37.0" height="18.0">horse </canvas> <canvas id="1742" width="26.0" height="18.0">had </canvas> <canvas id="1743" width="32.0" height="18.0">gone </canvas> <canvas id="1744" width="35.0" height="18.0">lame. </canvas> <canvas id="1745" width="51.0" height="18.0">Perhaps </canvas> <canvas id="1746" width="7.0" height="18.0">a </canvas> <canvas id="1747" width="37.0" height="18.0">wheel </canvas> <canvas id="1748" width="26.0" height="18.0">had </canvas> <canvas id="1749" width="37.0" height="18.0">fallen </canvas> <canvas id="1750" width="19.0" height="18.0">off </canvas> <canvas id="1751" width="21.0" height="18.0">the </canvas> <canvas id="1753" width="48.0" height="18.0">wagon. </canvas> <canvas id="1754" width="41.0" height="18.0">Those </canvas> <canvas id="1755" width="31.0" height="18.0">were </canvas> <canvas id="1756" width="82.0" height="18.0">possibilities, </canvas> <canvas id="1757" width="25.0" height="18.0">and </canvas> <canvas id="1758" width="29.0" height="18.0">they </canvas> <canvas id="1759" width="31.0" height="18.0">were </canvas> <canvas id="1760" width="20.0" height="18.0">far </canvas> <canvas id="1761" width="34.0" height="18.0">more </canvas> <canvas id="1762" width="21.0" height="18.0">pal- </canvas><canvas id="1764" width="39.0" height="18.0">atable </canvas> <canvas id="1765" width="31.0" height="18.0">than </canvas> <canvas id="1766" width="21.0" height="18.0">the </canvas> <canvas id="1767" width="72.0" height="18.0">alternative. </canvas> <canvas id="1768" width="40.0" height="18.0">Surely </canvas> <canvas id="1769" width="42.0" height="18.0">Austin </canvas> <canvas id="1770" width="43.0" height="18.0">hadn\'t </canvas> <canvas id="1771" width="55.0" height="18.0">changed </canvas> <canvas id="1772" width="20.0" height="18.0">his </canvas> <canvas id="1774" width="38.0" height="18.0">mind. </canvas> <canvas id="1775" width="40.0" height="18.0">Surely </canvas> <canvas id="1776" width="16.0" height="18.0">he </canvas> <canvas id="1777" width="44.0" height="18.0">hadn\'t </canvas> <canvas id="1778" width="31.0" height="18.0">been </canvas> <canvas id="1779" width="33.0" height="18.0">lying </canvas> <canvas id="1780" width="35.0" height="18.0">when </canvas> <canvas id="1781" width="30.0" height="18.0">he\'d </canvas> <canvas id="1782" width="49.0" height="18.0">written </canvas> <canvas id="1783" width="36.0" height="18.0">those </canvas> <canvas id="1785" width="67.0" height="18.0">wonderful </canvas> <canvas id="1786" width="42.0" height="18.0">letters. </canvas> <canvas id="1787" width="40.0" height="18.0">Surely </canvas> <canvas id="1788" width="16.0" height="18.0">he </canvas> <canvas id="1789" width="43.0" height="18.0">wasn\'t </canvas> <canvas id="1790" width="38.0" height="18.0">going </canvas> <canvas id="1791" width="14.0" height="18.0">to </canvas> <canvas id="1792" width="57.0" height="18.0">abandon </canvas> <canvas id="1793" width="22.0" height="18.0">her </canvas> <canvas id="1794" width="24.0" height="18.0">and </canvas> <canvas id="1796" width="34.0" height="18.0">Thea </canvas> <canvas id="1797" width="21.0" height="18.0">the </canvas> <canvas id="1798" width="26.0" height="18.0">way </canvas> <canvas id="1799" width="58.0" height="18.0">everyone </canvas> <canvas id="1800" width="13.0" height="18.0">in </canvas> <canvas id="1801" width="82.0" height="18.0">Philadelphia </canvas> <canvas id="1802" width="29.0" height="18.0">had. </canvas> <canvas id="1803" width="18.0" height="18.0">Or </canvas> <canvas id="1804" width="25.0" height="18.0">was </canvas> <canvas id="1805" width="22.0" height="18.0">he? </canvas> </p>';
  var defaultDictionary;
  var defaultDeDictionary;
  */

  // The highest character compressed and/or copied directly.
  var MAX_CHAR = 0x26ff;
  // The most characters that will be quoted.
  var MAX_QUOTE_COUNT = 100;
  // The (first) code for quoted high-characters.
  var QUOTE_CODE = MAX_CHAR + 1;
  // The last code for quoted high-characters.
  var MAX_QUOTE_CODE = QUOTE_CODE + MAX_QUOTE_COUNT;
  // The first emitted code.
  var FIRST_CODE = QUOTE_CODE + MAX_QUOTE_COUNT + 1;
  // The highest permissible code.
  var MAX_CODE = 0xfffd;
  // The gap for surrogate pairs.
  var BEGIN_SURROGATES = 0xd7ff;
  var END_SURROGATES = 0xe000;

  /**
   * Finds the next character code in the dictionary.
   * @param {Object} dict A possibly partially-built dictionary.
   * @return {Number} The next character code to use in the dictionary.
   */
  function findNextCode(dict, firstCode) {
    var nextCode = firstCode > 0 ? firstCode : FIRST_CODE;
    for (var entry in dict) {
      if (dict[entry] >= nextCode) {
        nextCode = dict[entry] + 1;
      }
    }
    return nextCode;
  } // End of findNextCode

  /**
   * Adds strings from an array to the compression dictionary.
   * @param {Object} strings The strings to be added.
   * @param {Object} dict The dictionary to which strings are to be added.
   * @param {Number} firstCode (optional) If a number > 0, defines the first code to be
   * used in the dictionary.  NOTE THAT CHARACTERS BETWEEN THIS VALUE AND THE SYSTEM
   * DEFINED MAX_CHAR WILL NOT BE PROPERLY DECOMPRESSED.  Use appropriately.
   * @return {Object} The augmented dictionary.
   */
  function addStringsToDictionary(strings, dict, firstCode) {
    var nextCode = findNextCode(dict, firstCode);

    // Enumerate the strings
    for (var ix in strings) {
      var str = strings[ix];
      // Iterate over the substrings of the first-2, first-3, first-4 ... str.length
      for (var l = 2; l <= str.length; l++) {
        var sub = str.substr(0, l);
        // If the substring isn't in the dictionary, add it.
        if (!dict.hasOwnProperty(sub)) {
          dict[sub] = nextCode++;
        }
      }
    }

    return dict;
  } // End of addStringsToDictionary

  /**
   * Adds the three-digit number strings to the dictionary.
   * @param {Object} dict The dictionary to which numbers are to be added.
   * @return {Object} The augmented dictionary.
   */
  function addNumbersToDictionary(dict, firstCode) {
    var list = [];
    for (var i = 100; i < 1000; i++) {
      list.push("" + i);
    }
    return addStringsToDictionary(list, dict, firstCode);
  } // End of addNumbersToDictionary

  /**
   * Constructs a decompression dictionary from a compression dictionary.
   * @param {Object} dict The compression dictionary.
   * @return {Object} The corresponding decompression dictionary.
   */
  function getDecompressionDictionary(dict) {
    var deDict = [];
    for (var de in dict) {
      deDict[dict[de]] = de;
    }
    return deDict;
  } // End of getDecompressionDictionary

  /**
   * Builds a dictionary for use with the lz{comprss|expand}withStaticDictionary functions.
   * @param {Object} dictionary An object in which to build the dictionary.
   * @param {String} string The training string.
   * @return {Object} the new dictionary.
   */
  function lzBuildDictionary(dictionary, string) {
    // The recreated string of characters.
    var currentString;
    // The current character code used to encode increasingly longer found strings.
    var stringCode = FIRST_CODE;
    // An index for iterating through a string. Ah, Javascript's scoping...
    var strIx;

    // Initialize the current string and the dictionary to empty.
    currentString = "";

    // Iterate the rest of the characters, adding them to the currentString as possible, and emitting
    //  new characters and building the dictionary as we go along.
    var ix = 0; // Counter of characters.
    while (ix < string.length) {
      var nextChar = string.charAt(ix);
      ix++;

      if (nextChar.charCodeAt(0) <= MAX_CHAR) {
        // This handles the case of Latin, Greek, Cyrillic, and symbols, performing LZ compression.

        if (dictionary.hasOwnProperty(currentString + nextChar)) {
          // The currentString plus the nextChar is still a known string, so keep on looking.
          currentString += nextChar;
        } else {
          // If the currentString doesn't have anything in it, we're just spinning up.
          if (currentString.length > 0) {
            // The nextChar makes a new string, so we need to emit the previous string, which may
            //  be a single character, or may be a string from the dictionary.
            // If currentString's length is 1, a single character, wasn't in dictionary; output it.
            //   otherwise, currentString was already found; output the corresponding stringCode;

            // If we can expand the dictionary, do so.
            if (stringCode < MAX_CODE) {
              dictionary[currentString + nextChar] = stringCode;
              stringCode++;
              // Skip the zone of surrogate pairs.
              if (stringCode === BEGIN_SURROGATES) {
                stringCode = END_SURROGATES;
              }
            }
          }
          // Start again looking for strings.
          currentString = nextChar;
        }
      } else {
        // This handles the case of chars > 0x26ff, Chinese, Japanese, Thai, Korean, Indic, etc.
        // Escapes break compression.
        currentString = "";
      }
    }

    return dictionary;
  } // End of lzBuildDictionary

  /**
   * Lazily builds the default static dictionary, and returns it.
   * @return {Object} The default compression dictionary.
   */
  function getDefaultDictionary() {
    if (defaultDictionary === undefined || defaultDictionary === {}) {
      // #ifdef DEBUG
      // KindleDebug.error("Using default static dictionary");
      // #endif

      defaultDictionary = lzBuildDictionary({}, defaultDictionaryString);
    }
    return defaultDictionary;
  } // End of getDefaultDictionary

  /**
   * Lazily builds the default static decompression dictionary, and returns it.
   * @return {Object} The default de-compression dictionary.
   */
  function getDefaultDeDictionary() {
    if (defaultDeDictionary === undefined || defaultDeDictionary === []) {
      getDefaultDictionary();
      defaultDeDictionary = [];
      for (var d in defaultDictionary) {
        defaultDeDictionary[defaultDictionary[d]] = d;
      }
    }
    return defaultDeDictionary;
  } // End of getDefaultDeDictionary

  /**
   * Compress with LZ style compression, but using a pre-built dictionary.
   * @param {String} toCompress The string to be compressed.
   * @param {Object} dictionary A dictionary to use in compression.  If
   * empty or undefined, use the default static dictionary.
   * @return {String} The compressed string.
   */
  function lzCompressWithStaticDictionary(toCompress, dictionary) {
    if (dictionary === undefined || dictionary === {}) {
      dictionary = getDefaultDictionary();
    }
    // The output is built here.
    var out = [];
    // The recreated string of characters.
    var currentString;
    // A run of non-compressible charcters.
    var nonCompressible;
    // When outputting a chunk of non-compressible chars, the length of the chunk.
    var chunkLen;
    // And the chunk itself.
    var chunk;
    // An index for iterating through a string. Ah, Javascript's scoping...
    var strIx;

    // Initialize the current string and the noncompressible string to empty.
    currentString = "";
    nonCompressible = "";

    // Iterate the rest of the characters, adding them to the currentString as possible, and emitting
    //  new characters and building the dictionary as we go along.
    var ix = 0; // Counter of characters.
    while (ix < toCompress.length) {
      var nextChar = toCompress.charAt(ix);
      ix++;

      if (nextChar.charCodeAt(0) <= MAX_CHAR) {
        // This handles the case of Latin, Greek, Cyrillic, and symbols, performing LZ compression.
        while (nonCompressible.length > 0) {
          chunkLen = Math.min(MAX_QUOTE_COUNT, nonCompressible.length);
          chunk = nonCompressible.substr(0, chunkLen);
          nonCompressible = nonCompressible.substr(chunkLen);
          out.push(QUOTE_CODE + chunkLen);
          for (strIx = 0; strIx < chunk.length; strIx++) {
            out.push(chunk.charCodeAt(strIx));
          }
        }

        if (dictionary.hasOwnProperty(currentString + nextChar)) {
          // The currentString plus the nextChar is still a known string, so keep on looking.
          currentString += nextChar;
        } else {
          // If the currentString doesn't have anything in it, we're just spinning up.
          if (currentString.length > 0) {
            // The nextChar makes a new string, so we need to emit the previous string, which may
            //  be a single character, or may be a string from the dictionary.
            // If currentString's length is 1, a single character, wasn't in dictionary; output it.
            //   otherwise, currentString was already found; output the corresponding stringCode;
            out.push(
              currentString.length === 1
                ? currentString.charCodeAt(0)
                : dictionary[currentString]
            );
          }
          // Start again looking for strings.
          currentString = nextChar;
        }
      } else {
        // This handles the case of chars > 0x26ff, Chinese, Japanese, Thai, Korean, Indic, etc.

        if (currentString.length > 0) {
          // See comment above.
          out.push(
            currentString.length === 1
              ? currentString.charCodeAt(0)
              : dictionary[currentString]
          );
          currentString = "";
        }

        nonCompressible += nextChar;
      }
    }

    // Finish up any compression.
    if (currentString.length > 0) {
      // See comment above.
      out.push(
        currentString.length === 1
          ? currentString.charCodeAt(0)
          : dictionary[currentString]
      );
    }

    // Finish up any non-compressible characters.
    while (nonCompressible.length > 0) {
      chunkLen = Math.min(MAX_QUOTE_COUNT, nonCompressible.length);
      chunk = nonCompressible.substr(0, chunkLen);
      nonCompressible = nonCompressible.substr(chunkLen);
      out.push(QUOTE_CODE + chunkLen);
      for (strIx = 0; strIx < chunk.length; strIx++) {
        out.push(chunk.charCodeAt(strIx));
      }
    }

    // Now convert all the character codes to strings, and concatenate them into one big string.
    for (/*var*/ i = 0; i < out.length; i++) {
      out[i] = String.fromCharCode(out[i]);
    }
    var result = out.join("");

    return result;
  } // End of lzCompressWithStaticDictionary

  /**
   * Expands a string using a static dictionary.
   * @param {String} toExpand The string to be expanded.
   * @param {Object} dictionary The dictionary to use for expansion.  If
   * undefined or empty, uses a default decompression dictionary.
   * @return {String} the expanded string.
   */
  function lzExpandWithStaticDictionary(toExpand, dictionary, altFirstCode) {
    if (dictionary === undefined || dictionary === []) {
      dictionary = getDefaultDeDictionary();
    }
    var maxChar = MAX_CHAR;
    var firstCode = FIRST_CODE;
    if (altFirstCode !== undefined) {
      maxChar = altFirstCode - 1;
      firstCode = altFirstCode;
    }

    // The de-compressed output is built here.
    var out = [];

    var ix = 0;
    while (ix < toExpand.length) {
      var nextCode = toExpand.charCodeAt(ix);
      ix++;

      // Process the codes from the compressed stream.
      if (nextCode <= maxChar) {
        // The code is a character, meaning we didn't find it as part of a longer string.
        out.push(String.fromCharCode(nextCode));
      } else if (nextCode >= firstCode) {
        // The code is an index into the dictionary.
        out.push(dictionary[nextCode]);
      } else {
        // It is a quoted sequence.  Output that many characters.
        var quotedLength = nextCode - QUOTE_CODE;
        out.push(toExpand.substr(ix, quotedLength));
        ix += quotedLength;
      }
    }

    var result = out.join("");

    return result;
  } // End of lzExpandWithStaticDictionary

  /**
   * This function performs a variation of LZ compression on the input string.  Key points
   * are that the input and output are Javascript strings, Western characters are compressed,
   * non-Western characters are quoted.
   * @param {String} toCompress The string to be compressed.
   * @return {String} The compressed string.
   */
  function lzCompress(toCompress) {
    // A dictionary of found strings.
    var dictionary = {};
    // The output is built here.
    var out = [];
    // The recreated string of characters.
    var currentString;
    // The current character code used to encode increasingly longer found strings.
    var stringCode = FIRST_CODE;
    // A run of non-compressible charcters.
    var nonCompressible;
    // When outputting a chunk of non-compressible chars, the length of the chunk.
    var chunkLen;
    // And the chunk itself.
    var chunk;
    // An index for iterating through a string. Ah, Javascript's scoping...
    var strIx;

    // Initialize the current string and the noncompressible string to empty.
    currentString = "";
    nonCompressible = "";

    // Iterate the rest of the characters, adding them to the currentString as possible, and emitting
    //  new characters and building the dictionary as we go along.
    var ix = 0; // Counter of characters.
    while (ix < toCompress.length) {
      var nextChar = toCompress.charAt(ix);
      ix++;

      if (nextChar.charCodeAt(0) <= MAX_CHAR) {
        // This handles the case of Latin, Greek, Cyrillic, and symbols, performing LZ compression.
        while (nonCompressible.length > 0) {
          chunkLen = Math.min(MAX_QUOTE_COUNT, nonCompressible.length);
          chunk = nonCompressible.substr(0, chunkLen);
          nonCompressible = nonCompressible.substr(chunkLen);
          out.push(QUOTE_CODE + chunkLen);
          for (strIx = 0; strIx < chunk.length; strIx++) {
            out.push(chunk.charCodeAt(strIx));
          }
        }

        if (dictionary.hasOwnProperty(currentString + nextChar)) {
          // The currentString plus the nextChar is still a known string, so keep on looking.
          currentString += nextChar;
        } else {
          // If the currentString doesn't have anything in it, we're just spinning up.
          if (currentString.length > 0) {
            // The nextChar makes a new string, so we need to emit the previous string, which may
            //  be a single character, or may be a string from the dictionary.
            // If currentString's length is 1, a single character, wasn't in dictionary; output it.
            //   otherwise, currentString was already found; output the corresponding stringCode;
            out.push(
              currentString.length === 1
                ? currentString.charCodeAt(0)
                : dictionary[currentString]
            );

            // If we can expand the dictionary, do so.
            if (stringCode < MAX_CODE) {
              dictionary[currentString + nextChar] = stringCode;
              stringCode++;
              // Skip the zone of surrogate pairs.
              if (stringCode === BEGIN_SURROGATES) {
                stringCode = END_SURROGATES;
              }
            }
          }
          // Start again looking for strings.
          currentString = nextChar;
        }
      } else {
        // This handles the case of chars > 0x26ff, Chinese, Japanese, Thai, Korean, Indic, etc.

        if (currentString.length > 0) {
          // See comment above.
          out.push(
            currentString.length === 1
              ? currentString.charCodeAt(0)
              : dictionary[currentString]
          );
          currentString = "";
        }

        nonCompressible += nextChar;
      }
    }

    // Finish up any compression.
    if (currentString.length > 0) {
      // See comment above.
      out.push(
        currentString.length === 1
          ? currentString.charCodeAt(0)
          : dictionary[currentString]
      );
    }

    // Finish up any non-compressible characters.
    while (nonCompressible.length > 0) {
      chunkLen = Math.min(MAX_QUOTE_COUNT, nonCompressible.length);
      chunk = nonCompressible.substr(0, chunkLen);
      nonCompressible = nonCompressible.substr(chunkLen);
      out.push(QUOTE_CODE + chunkLen);
      for (strIx = 0; strIx < chunk.length; strIx++) {
        out.push(chunk.charCodeAt(strIx));
      }
    }

    // Now convert all the character codes to strings, and concatenate them into one big string.
    for (/*var*/ i = 0; i < out.length; i++) {
      out[i] = String.fromCharCode(out[i]);
    }
    var result = out.join("");

    return result;
  } // End of lzCompress

  /**
   * This function is the complement of the LZ compression function above.
   * @param {String} toExpand The string to be expanded.
   * @return {String} The expanded string.
   */
  function lzExpand(toExpand) {
    // The recreated dictionary of found strings.
    var dictionary = {};
    // The de-compressed output is built here.
    var out = [];
    // A string, consisting of characters through the current character, that has already been seen; that is
    //  this string exists in the dictionary.  We try to extend the string.  Once it can no longer be extended,
    //  we emit the code that corresponds to this string.
    var currentString;
    // The current character code used to encode increasingly longer found strings.
    var stringCode = FIRST_CODE;

    var previousString = "";
    var previousChar;

    var ix = 0;
    while (ix < toExpand.length) {
      var nextCode = toExpand.charCodeAt(ix);
      ix++;

      // Process the codes from the compressed stream.
      if (nextCode <= MAX_CHAR) {
        // The code is a character, meaning we didn't find it as part of a longer string.
        currentString = String.fromCharCode(nextCode);
      } else if (nextCode >= FIRST_CODE) {
        // If the code is already in the dictionary, it means we know it, and what it is.  If it
        //  isn't there (yet), it means that during compression it was emitted here for the first
        //  time, representing the string and character we were looking at last time through this loop.
        currentString = dictionary[nextCode];
        if (!currentString) {
          currentString = previousString + previousChar;
        }
      } else {
        // It is a quoted sequence.  Output that many characters.
        var quotedLength = nextCode - QUOTE_CODE;
        out.push(toExpand.substr(ix, quotedLength));
        ix += quotedLength;
        // Quoting breaks compression sequences.
        previousString = "";
        continue;
      }

      // This is for the non-quoted case.
      out.push(currentString);
      previousChar = currentString.charAt(0);
      if (stringCode < MAX_CODE && previousString.length > 0) {
        dictionary[stringCode] = previousString + previousChar;
        stringCode++;
        // Skip the zone of surrogate pairs.
        if (stringCode === BEGIN_SURROGATES) {
          stringCode = END_SURROGATES;
        }
      }
      previousString = currentString;
    }

    var result = out.join("");

    return result;
  } // End of lzExpand

  return {
    /**
     * lzCompress - perform LZ78 compression on the input string.
     * @param toCompress - A String to be compressed.
     * @return A compressed version of the string.
     */
    lzCompress: lzCompress,

    /**
     * lzExpand - perform LZ78 compression on the input string.
     * @param toExpand - A string to be expanded, originally compressed by lzComress.
     * @return The original, uncompressed version of the string.
     */
    lzExpand: lzExpand,

    lzBuildDictionary: lzBuildDictionary,
    lzGetDecompressionDictionary: getDecompressionDictionary,
    lzAddStringsToDictionary: addStringsToDictionary,
    lzAddNumbersToDictionary: addNumbersToDictionary,

    lzCompressWithStaticDictionary: lzCompressWithStaticDictionary,
    lzExpandWithStaticDictionary: lzExpandWithStaticDictionary
  };
})();

/*
 * =======================================================================
 * KindleDebug
 *
 * This class provides debug functionality.
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */

var KindleDebug = function() {
  /***************************************
   *
   * LOG METHODS
   *
   **************************************/

  /**
   * @param message The string to error.
   */
  function error(message) {
    // #ifdef DEBUG
    if (window.console) {
      console.error(message);
    }
    // #endif
  }

  /**
   * @param message The string to log.
   */
  function log(message) {
    // #ifdef DEBUG
    if (window.console) {
      console.log(message);
    }
    // #endif
  }

  /**
   * @param message The string to warn.
   */
  function warn(message) {
    // #ifdef DEBUG
    if (window.console) {
      console.warn(message);
    }
    // #endif
  }

  return {
    error: error,
    log: log,
    warn: warn,
  };
}();
var KindleEncryption = function(){

  // -------------
  // UTF8 Encoding
  // -------------

  /**
   * UTF8 encodes a string.
   * @param {Object} input String to encode.
   */
  function utf8Encode(input){
    input = input.replace(/\x0d\x0a/g, "\x0a");
    var output = [];
    for (var n = 0; n < input.length; n++) {
      var c = input.charCodeAt(n);
      if (c < 128) {
        output.push(String.fromCharCode(c));
      } else if ((c > 127) && (c < 2048)) {
        output.push(String.fromCharCode((c >> 6) | 192));
        output.push(String.fromCharCode((c & 63) | 128));
      } else {
        output.push(String.fromCharCode((c >> 12) | 224));
        output.push(String.fromCharCode(((c >> 6) & 63) | 128));
        output.push(String.fromCharCode((c & 63) | 128));
      }
    }
    return output.join('');
  }

  /**
   * UTF8 decodes a string.
   * @param {Object} input String to decode.
   */
  function utf8Decode(input){
    var string = [];
    var i = 0;
    var c, c1, c2;
    while (i < input.length) {
      c = input.charCodeAt(i);
      if (c < 128) {
        string.push(String.fromCharCode(c));
        i++;
      } else if ((c > 191) && (c < 224)) {
        c1 = input.charCodeAt(i + 1);
        string.push(String.fromCharCode(((c & 31) << 6) | (c1 & 63)));
        i += 2;
      } else {
        c1 = input.charCodeAt(i + 1);
        c2 = input.charCodeAt(i + 2);
        string.push(String.fromCharCode(((c & 15) << 12) |
          ((c1 & 63) << 6) |
          (c2 & 63)));
        i += 3;
      }
    }
    return string.join('');
  }

  // ---------------
  // Base64 Encoding
  // ---------------

  var BASE64_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  var B64LOOKUP = [];

  for (var i=0 ; i<BASE64_STRING.length ; i+=1) {
    B64LOOKUP[BASE64_STRING.charCodeAt(i)] = i;
  }

  /**
   * Base64 encodes a string.
   * @param {Object} input String to encode.
   */
  function base64Encode(input){
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
      chr1 = input.charCodeAt(i++)&255;
      chr2 = input.charCodeAt(i++)&255;
      chr3 = input.charCodeAt(i++)&255;
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output.push(BASE64_STRING.charAt(enc1) +
        BASE64_STRING.charAt(enc2) +
        BASE64_STRING.charAt(enc3) +
        BASE64_STRING.charAt(enc4));
    }
    return output.join('');
  }

  /**
   * Base64 decodes a string.
   * @param {Object} input String to decode.
   */
  function base64Decode(input){
    var output = [];
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
      /*
          enc1 = BASE64_STRING.indexOf(input.charAt(i++));
          enc2 = BASE64_STRING.indexOf(input.charAt(i++));
          enc3 = BASE64_STRING.indexOf(input.charAt(i++));
          enc4 = BASE64_STRING.indexOf(input.charAt(i++));
      */
      enc1 = B64LOOKUP[input.charCodeAt(i++)];
      enc2 = B64LOOKUP[input.charCodeAt(i++)];
      enc3 = B64LOOKUP[input.charCodeAt(i++)];
      enc4 = B64LOOKUP[input.charCodeAt(i++)];

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output.push(String.fromCharCode(chr1));
      if (enc3 !== 64) {
        output.push(String.fromCharCode(chr2));
      }
      if (enc4 !== 64) {
        output.push(String.fromCharCode(chr3));
      }
    }
    return output.join('');
  }


  // --------------
  // RC4 encryption
  // --------------

  /**
   * RC4 encrypts (or decrypts) a string.
   * @param {Object} input String to encrypt or decrypt.
   * @param {Object} key The key.
   */
  function rc4(input, key){
    var s = [];
    s.length = 256;
    for (var i = 0; i < 256; i++) {
      s[i] = i;
    }
    var j = 0;
    var x;
    for (i = 0; i < 256; i++) {
      j = (j + s[i] + key[i % key.length]) & 255;
      x = s[i];
      s[i] = s[j];
      s[j] = x;
    }
    i = 0;
    j = 0;
    var ct = [];

    for (var y = 0; y < input.length; y++) {
      i = (i + 1) & 255;
      j = (j + s[i]) & 255;
      x = s[i];
      s[i] = s[j];
      s[j] = x;
      ct.push(String.fromCharCode(input.charCodeAt(y) ^ s[(s[i] + s[j]) & 255]));
    }
    return ct.join('');
  }


  // -----------
  // Obfuscation
  // -----------

  // since we want the random strings we insert to look something like text, we
  // use a set of characters that approximate the letter distribution in English
  var FREQ_CHARS = 'eeeeeeeeeeeeeeeeettttttttaaaaaaaaaaaaaaaaooooooiiiiiiinnnnssssrrrrhhhhllldddcccuuummmfffpoggwwyybbvkxjqz';
  var FREQ_CHARS_WITH_SPACE = FREQ_CHARS + '                                             ';

  /**
   * Creates a random string of the given length.
   * @param {Object} len Length.
   * @param {Object} allowSpace Allow spaces or not.
   */
  function randomString(len, allowSpace) {
    var text = '';
    var possible = allowSpace ? FREQ_CHARS_WITH_SPACE : FREQ_CHARS;
    var l = possible.length;
    for (var i = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * l));
    }
    return text;
  }

  var RANDOM_CSS_CLASSES = 10;

  // add RANDOM_CSS_CLASSES CSS classes with random names: .RANDOM {display: none;}
  var cssClasses = [];
  for (var j = 0; j < RANDOM_CSS_CLASSES; j++) {
    cssClasses[j] = randomString(15, false);
  }

  // the set of tags we will insert when obfuscating
  var obfuscationTags = ['p', 'span', 'div', 'em', 'i', 'strong', 'b', 'a', 'big', 'small'];

  // have the CSS rules been defined?
  var rulesDefined = false;

  // how often we insert bogus DOM nodes (smaller means more bogus nodes)
  var CHARS_BETWEEN_BOGUS_NODES = 60;

  /**
   * Obfuscates the given DOM node.
   * @param {Object} node Node.
   */
  function obfuscate(node){
    var i;
    if (!rulesDefined) {
      for (i = 0; i < RANDOM_CSS_CLASSES; i++) {
        $(cssClasses[i]).addClass("noDisplay");
      }
      rulesDefined = true;
    }

    // get the html
    var htmlText = $(node).html();

    // insert garbage of the form
    //     <TAG class=RANDOM_RULE>RANDOM TEXT</TAG>
    // where RANDOM_RULE is one of the 10 rules we created above
    // and TAG is one of the obfuscationTags elements above
    var inTag = false;
    var obfuscatedText = '';
    var lastInsert = 0;
    for (i = 0; i < htmlText.length; i++) {
      if (htmlText[i] === '>') {
        inTag = false;
      } else if (htmlText[i] === '<') {
        inTag = true;
      } else if ((i % CHARS_BETWEEN_BOGUS_NODES === 7) && (!inTag)) {
        obfuscatedText += htmlText.substring(lastInsert, i);
        lastInsert = i;

        // pick a random CSS class
        var cssClass = cssClasses[Math.floor(Math.random() * cssClasses.length)];
        // pick a random tag
        var tag = obfuscationTags[Math.floor(Math.random() * obfuscationTags.length)];
        // add a tag containing random text
        obfuscatedText += '<' + tag + ' class="' + cssClass + '">' + randomString(30, true) + '</' + tag + '>';
      }
    }
    obfuscatedText += htmlText.substring(lastInsert, htmlText.length);

    // replace the html
    $(node).html(obfuscatedText);
  }

  /**
   * Checks if a given class name is one of our obfuscation classes.
   * @param {Object} className Class name to check.
   */
  function isObfuscationClass(className) {
    for (var j = 0; j < cssClasses.length; j++) {
      if (cssClasses[j] === className) {
        return true;
      }
    }
    return false;
  }

  // Pad the key hex to 128bits
  var PADDING_ZEROS="00000000000000000000000000000000";
  function hexToByte8Array(hex) {
    hex = hex + PADDING_ZEROS.substring(0, 32 - hex.length);

    var value = [];
    for (i = 0; i < hex.length; i+=2) {
      value.push(parseInt(hex.substring(i,i+2), 16));
    }
    return value;
  }

  function rc4Encrypt(str, key){
    return base64Encode(rc4(utf8Encode(str), hexToByte8Array(key)));
  }

  function rc4Decrypt(str, key){
    return utf8Decode(rc4(base64Decode(str), hexToByte8Array(key)));
  }

  /**
   * In IE 9, if we draw an image to a canvas, and get the image data back, the pixel value we get will not be an exact match
   * of the original image. This creates a serious problem because we rely on the exact pixel value to decode book key.
   * Based on observation, the pixel value is always within +-1 range, and if any distortion happens, all 3 channel will be
   * distorted the same way. Since we use base32 encoding for the book key, this method detects characters that are
   * not in base32 encoding and attempt to derive the original character.
   *
   * Unfortunately, this solution is not complete, there is one pair of base32 characters('X' <-> '7') that can in theory be distorted to each other.
   * This situation is rare enough and has not been observed in practice, so this function should be good for now to unblock IE development
   *
   * @param ch The character that IE tell us
   * @param r The r value
   * @param g The g value
   * @param b The b Value
   * @return The (hopefully) real character before IE messed it up
   */
  function degibberishCharacter(ch, r, g, b){
    function isBase32(c){
      return (c>=65&&c<=90) || (c>=50&&c<=55);
    }

    var result, offset = 0;
    if(isBase32(ch)|| ch===0){
      result = ch;
    }
    else{
      offset = r>=2?-1:1;
      result = (r+offset+8)%8 * 32 + (g+offset+4)%4 * 8 + (b+offset+8)%8;
    }

    if(!isBase32(result)){
      result = 0;
    }
    return result;
  }

  /**
   * The unhelpful name is intentional.
   *
   * Extract an ASCII string from an image, where the string is encoded in the low bits of
   * the color channels.  Assumes a 24-bit color image.  Some browsers have issues
   * if there is an alpha channel.  Each pixel codes one character, with:
   * bits 5-7 (the high 3 bits) encoded in the low 3 bits of the red channel
   * bits 3-4 (the middle 2) encoded in the low 2 bits of the green channel
   * bits 0-2 (the low 3 bits) encoded in the low 3 bits of the blue channel
   * @param {Object} imageUrl The URL of the image containing the string.
   * @param {Object} resultCallback A function, taking one argument, that will be called
   * with the result, a string.
   * @param {Object} errorCallback A function that will be called if there is an error getting the file.
   */
  function iToStr(imageUrl, resultCallback, errorCallback){
    var image = new Image();
    image.onload = function(){
      var isIE = KindleHostDeviceDetector.isIE();
      var height = image.height;
      var width = image.width;
      // Create a canvas, and get the 2d context; draw the image in that context.
      var canvas = document.createElement('canvas');
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      // Extract characters from the data.
      var idat;           // image data
      var r, g, b;        // rgb values from pixels
      var ch;             // extracted charCode
      var result = '';    // resulting string
      var ix = 0;         // byte index
      var maxIx;          // Max byte index
      var ixRow = 0;
      while (ixRow < height) {
        // Get the data from the image.
        idat = context.getImageData(0, ixRow, width, 1);
        ix = 0;
        // We consume 4 elements per iteration, because there are 4 elements
        // per pixel, and we code one character per pixel.  Adjust maxIx to
        // account for that.
        maxIx = idat.data.length - 4;
        while (ix < maxIx) {
          // Get the low three bits from red and blue, low 2 from green.
          r = (idat.data[ix++]) & 0x7;
          g = (idat.data[ix++]) & 0x3;
          b = (idat.data[ix++]) & 0x7;
          ix++; // skip alpha channel.
          // Shift the bits into place and combine into one char code.
          ch = r * 32 + g * 8 + b;

          if(isIE){
            ch = degibberishCharacter(ch, r, g, b);
          }
          // If we've reached the null, we're done.  The null is not part of the string.
          if (ch === 0) {
            break;
          }
          result += String.fromCharCode(ch);
        }
        // If we've reached the null, we're done.
        if (ch===0) {
          break;
        }
        // Otherwise, on to the next row.
        ixRow++;
      }
      // Return the results.
      resultCallback(result);
    };
    image.onerror = function() {
      errorCallback();
    };

    // Load the image.
    image.src = imageUrl;
  } // End of iToStr

  function strToByte8Array(str) {
    var hex = [];
    for (var i=0; i<str.length; i++) {
      hex.push(str.charCodeAt(i));
    }
    return hex;
  }


  return {
    iToStr: iToStr,

    base64Encode: base64Encode,

    rc4Encrypt: function (input, key) {
      return rc4Encrypt(input, key);
    },
    rc4DecryptWithString: function(str, keyStr) {
      return utf8Decode(rc4(base64Decode(str), strToByte8Array(keyStr)));
    },
    obfuscate: function(node){
      obfuscate(node);
    },
    isObfuscationClass: function(className) {
      return isObfuscationClass(className);
    }
  };
}();
/*
 * =======================================================================
 * KindleHostDeviceDetector
 *
 * Detect device using User Agent
 *
 * Revision: : $
 * Last Changed: : 11:42 AM $
 * Changed By: mjzheng $
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */
var KindleHostDeviceDetector = function() {
  var ClientName = {
    KCR:   "K4W",
    Metro: "KW8"
  };

  var DeviceType = {
    KCR:   "A2CTZ977SKFQZY",
    Metro: "A3C2X3KG4GJCOD"
  };

  /**
   * Returns true if the device is iPad
   */
  function isiPad() {
    return (navigator.platform.indexOf("iPad") !== -1);
  }

  function isWindows(){
    return navigator.platform.indexOf('Win') !== -1;
  }

  function hasIpad1Perf(isiOSAppMode) {
    var maxresult=0;
    var minresult=1000;
    var average;
    var sum=0;
    var result;

    // threshold depends on appmode vs safari (safari is about 2x)
    var IPAD1_THRESHOLD_SAFARI=100;
    var IPAD1_THRESHOLD_APPMODE=200;
    var NUM_RUNS=3;

    for (i=0;i<NUM_RUNS;i++) {
      result = SunSpiderBenchmark.get3DSpeed();
      if (result > maxresult) {
        maxresult=result;
      } else if (result < minresult) {
        minresult=result;
      }
      sum += result;
    }
    average = sum/NUM_RUNS;

    // #ifdef DEBUG
//        KindleDebug.log("Results: (sum, avg, min, max) = (" + sum +","+average+","+minresult+","+maxresult+")");
    // #endif

    if ((average >= IPAD1_THRESHOLD_APPMODE) && isiOSAppMode) {
      return true;
    }
    if ((average >= IPAD1_THRESHOLD_SAFARI) && !isiOSAppMode) {
      return true;
    }
    return false;
  }

  /**
   * Returns true if the device is an iPad1
   */
  function isiPad1() {
    return isiPad() && hasIpad1Perf(isiOSAppMode());
  }

  /**
   * Returns true if the device is iPhone or iPod
   */
  function isiPhone() {
    return ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1));
  }

  /**
   * Returns true if the device is iPad/iPhone/iPod
   * NOTE: For initial launch we also call Playbook iOS for now (to get touch UX) & Otter too
   */
  function isiOS() {
    return isiPad() || isiPhone() || isPlayBook() || isCloud9();
  }

  /**
   * Returns true if the device is iPhone or iPod running iOS major version 4
   */
  function isiOS_4x() {
    // TODO use capabilities
    return ((isiPad() || isiPhone()) && navigator.userAgent.indexOf("OS 4") !== -1);
  }

  /**
   * Returns true if the device is iPhone or iPod running iOS major version 5
   */
  function isiOS_5x() {
    // TODO use capabilities
    return ((isiPad() || isiPhone()) && navigator.userAgent.indexOf("OS 5") !== -1);
  }

  function isAndroid(){
    // TODO use capabilities
    return (navigator.userAgent.indexOf("Android") !== -1);
  }

  //currently, android 5.0 and 5.1
  function isAndroid_Lollipop() {
    // TODO use capabilities
    return (navigator.userAgent.indexOf("Android 5") !== -1);
  }

  //android 4.4.x
  function isAndroid_KitKat() {
    // TODO use capabilities
    return (navigator.userAgent.indexOf("Android 4.4") !== -1);
  }

  //android 4.1-4.3
  function isAndroid_JellyBean() {
    // TODO use capabilities
    return (navigator.userAgent.search(/Android 4.[1-3]/) !== -1);
  }

  /**
   * there is no reliable way to detect stock browser, some solutions (like: http://stackoverflow.com/a/19915132/1157490) check chrome version in UA and thatâ€™s not reliable.
   * but like web view, â€œmostâ€ stock browsers have â€œVersion/X.xâ€ in UA. https://developer.chrome.com/multidevice/user-agent#webview_user_agent
   */
  function isStockBrowser() {
    // TODO use capabilities
    return isAndroid() && (navigator.userAgent.indexOf('Mozilla') !== -1) && (navigator.userAgent.indexOf('AppleWebKit') !== -1) && !isChrome() && (navigator.userAgent.search(/Version\/[0-9]+\.[0-9]+/) !== -1);
  }

  /**
   * Returns true if the browser is Firefox.
   */
  function isFirefox(){
    // On IE11, Microsoft has a compatibility view list that makes IE to pretend itself as Firefox for read.amazon.com
    // with UA string: Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/22.0
    // See this link in IE. https://iecvlist.microsoft.com/IE11/1375395130872/iecompatviewlist.xml
    return (navigator.userAgent.indexOf("Firefox") !== -1) && (navigator.userAgent.indexOf('Trident') < 0);
  }

  /**
   * Returns true if the browser is Safari.
   * Note: will return false for Safari on iOS running in App Mode; check isiOSAppMode() independently if needed.
   *
   * @param {Number} minVersion (optional) Return false if the version of Safari is less than this value.
   */
  function isSafari(minVersion) {
    // Chrome claims 'Safari' in its UA string; the below regex should only match on a "genuine" Safari UA string.
    // See http://www.useragentstring.com/pages/Safari/ for examples.
    var match = navigator.userAgent.match(/Version\/(\d+\.\d+)(?:\.\d+)*(?: Mobile\/\S+)? Safari/);
    if (!match) {
      return false;   // not genuine Safari browser
    }
    if (!minVersion) {
      return true;    // genuine Safari browser, without minVersion requirement
    }
    // test whether genuine Safari browser's version number >= minVersion
    return (Number(match[1]) >= Number(minVersion));
  }

  /**
   * Returns true if the browser is Cloud9 (i.e. Otter).
   */
  function isCloud9() {
    return (navigator.userAgent.indexOf('Cloud9') !== -1);
  }

  /**
   * Returns true if the browser is running in Microsoft Metro application.
   */
  function isMetro() {
    return (navigator.userAgent.indexOf('MSAppHost') !== -1);
  }


  /**
   * Returns true if WebSQLDb is supported.
   */
  function isWebSQLSupported(){
    return !!window['openDatabase'];
  }

  /**
   * Returns true if IndexedDB is supported.
   */
  function isIndexedDBSupported(){
    //Uncomment the IE indexedDB when we get it working.
    return !!window['mozIndexedDB'] || !!window['webkitIndexedDB'] || !!window['msIndexedDB'] || !!window['indexedDB'];
  }

  /**
   * Returns true if the browser is Chrome.
   */
  function isChrome() {
    return window.chrome && !isMSEdge();
  } // End of isChrome

  /**
   * Detect whether the host device is online
   * @return true if device is online
   */
  function isOnline(){
    // This property does not necessarily indicate that we can get to the internet. When false, it does indicate
    // that we definitely can not get to the internet. When true, it means that it is NOT true that we *definitely*
    // can not get to the internet. Maybe we can, maybe we can't.
    return navigator.onLine;
  }

  /**
   * Detect network availability.
   * Note: This function expects http://read.amazon.com/ping to exist.
   * @return Promise that resolves if connected, rejects if fails or timeout.
   */
  function isNetworkAvailable() {
    // --------------------------------------------------------------------
    // PLEASE NOTE!!!
    // This function should be superseded by the "network online detector".
    // --------------------------------------------------------------------
    if (!isOnline()) {
      // isOnline 'false' is sufficient to return false.
      return new jQuery.Deferred().reject().promise();
    }

    // If we get here, we're going to hit the ping URL to test network availability.
    var dfd = $.ajax({
      url: "/ping",
      error: function() {
        dfd.reject();
      },
      timeout: 5000
    });

    return dfd.promise();
  }

  /**
   * Detect network availability.
   * Note: This function expects http://read.amazon.com/ping to exist.
   * @return true if successful
   */
  function isNetworkAvailableSync() {
    // -----------------------------------------------------------------------------------------------------------
    // PLEASE NOTE!!!
    // This function should be superseded by the "network online detector". This is a temporary fix for CASC-2004.
    // -----------------------------------------------------------------------------------------------------------
    if (!isOnline()) {
      // isOnline 'false' is sufficient to return false.
      return false;
    }

    // If we get here, we're going to hit the ping URL to test network availability.
    var avail = true;
    $.ajax({
      url: "/ping",
      error: function() {
        avail = false;
      },
      timeout: 50,
      async: false  // Must be a synchronous call ($.ajax.async default is true)
    });
    return avail;
  }

  /**
   * Detect whether the host device is IE
   */
  function isIE(){
    // starting from IE11, the user agent doen't have MSIE in it any more.
    // IE Edge does not have Trident, it instead has the same UA string as Chrome with Edge appended to the end of it
    return (navigator.userAgent.indexOf('MSIE') !== -1) || (navigator.userAgent.indexOf('Trident') !== -1);
  }

  /**
   * Detect whether the host device is IE 10
   */
  function isIE10() {
    return isIE() && navigator.userAgent.indexOf('Trident/6.0') !== -1;
  }

  /**
   * Detect whether the host device is IE 11
   */
  function isIE11() {
    // KCR is running in IE10-Compatible mode in IE11, so navigator.userAgent reports
    // "MSIE 10" instead of "MSIE 11". To tell whether we are on IE10 or IE11, we need
    // to check whether the userAgent reports Trident 7.0/8.0 which is used in IE11 in comparison to Trident 6.0 for IE10.
    return isIE() && (navigator.userAgent.indexOf('Trident/7.0') !== -1 || navigator.userAgent.indexOf('Trident/8.0') !== -1);
  }

  /**
   * Detect whether the host device is Microsoft Edge
   */
  function isMSEdge() {
    //IE edge reports the same user agent string as that for chrome with Edge/version appended at the end of it
    return (navigator.userAgent.indexOf('Chrome') !== -1)  && (navigator.userAgent.indexOf('Safari') !== -1) && (navigator.userAgent.indexOf('Edge') !== -1);
  }

  /**
   * Returns true if the app is installed or launched as an app in any platform.
   */
  function isInAppMode() {
    return isiOSAppMode() || isChromeApp();
  } // End of isInAppMode

  /**
   * Returns true if the app is installed or launched as an app in iOS
   */
  function isiOSAppMode() {
    return "standalone" in navigator && navigator.standalone;
  }

  /**
   * Returns true if the app is installed as a Chrome app.  We check the top window
   * because this may be called within the library or reader iframes, which consider themselves
   * their own windows, which are not individually installed in app form.
   */
  function isChromeApp() {
    return window.chrome && window.chrome.app && window.chrome.app.isInstalled;
  }

  /**
   * Returns true if the userAgent string identifies the device as a Playbook
   */
  function isPlayBook() {
    return (navigator.userAgent.indexOf("PlayBook") !== -1);
  }

  function getDevicePlatform(){
    var result;

    if(isiPad()){
      result = 'iPad';
    }
    else if(isiPhone()){
      result = 'iPhone';
    }
    else if(isPlayBook()){
      result = 'playBook';
    }
    else if (isCloud9()) {
      result='otter';
    }
    else if (isMetro()) {
      result='metro';
    }
    else{
      result = 'desktop';
    }

    return result;
  }

  function hasCanvasPerformanceProblem() {
    return (isiPad1() || isIE());
  }

  /*
   * Device Type
   * -Set to KCR or Metro device type
   */
  function getDeviceType() {
    if(isMetro()) {
      return DeviceType.Metro;
    } else {
      return DeviceType.KCR;
    }
  }

  /*
   * Client name K4W for KCR or KW8 for metro
   */

  function getClientName() {
    if(isMetro()) {
      return ClientName.Metro;
    } else {
      return ClientName.KCR;
    }
  }

  /**
   * Detect whether cookie has been enabled
   * @return true if cookie has been enabled
   */
  function isCookieEnabled() {
    return navigator.cookieEnabled;
  }

  /**
   * Returns true if MSPointer (IE10+ and Metro) are supported
   */
  function isMSPointerEnabled() {
    return !!window.navigator.msPointerEnabled;
  }


  /**
   * @return true if device supports touch
   */
  function isTouchDevice() {
    var has =
      isiOS() ||
      isMSPointerEnabled() ||
      isPlayBook();

    return has;
  }

  /**
   * Returns true if localStorage is not empty or we can put "testLocalStorage" in localStorage
   * @return true if localStorage appears to be enabled
   */
  function isLocalStorageEnabled() {
    false;
  }

  /**
   * Returns true if the device is known to exhibit a problem where setting an <img>'s src attribute to
   * a data-uri: or blob: URL will sometimes result in the element's onload and onerror event handlers never
   * being fired, even when the image data can be confirmed to have been loaded and renders onscreen.
   */
  function hasMissingImgOnLoadProblem() {
    return isSafari() || isiOSAppMode() || isFirefox();
  }

  /**
   * Returns true if the device is known to exhibit a problem where an <img> with its src attribute properly set
   * will fail to be rendered to the screen, even when the image data is known to be loaded properly.
   */
  function hasImageRenderingProblem() {
    return isSafari() || isiOSAppMode();
  }

  /**
   * Returns true if the device is a hand-held tablet (of any brand).
   * @return {Boolean} true if the device is a tablet, or false otherwise
   */
  function isTablet() {
    return isiPad() || isMetro();
  }

  /**
   * Returns the major version of OS
   */
  function getOSMajorVersion() {
    var osMajorVersion = -1;
    if (isiOS()) {
      var versionInfo = (navigator.userAgent).match(/OS (\d+)_/);
      osMajorVersion = versionInfo[1];
    }
    return osMajorVersion;
  }

  /**
   * Returns the minor version of OS
   */
  function getOSMinorVersion() {
    var osMinorVersion = -1;
    if (isiOS()) {
      var versionInfo = (navigator.userAgent).match(/OS (\d+)_(\d+_?(\d+)?)/);
      osMinorVersion = versionInfo[2];
    }
    return osMinorVersion;
  }

  return {
    isiOS: isiOS,
    isiPad: isiPad,
    isiPhone: isiPhone,
    isiOS_4x: isiOS_4x,
    isiOS_5x: isiOS_5x,
    isFirefox: isFirefox,
    isSafari: isSafari,
    isMetro : isMetro,
    isIE: isIE,
    isIE10: isIE10,
    isIE11: isIE11,
    isMSEdge: isMSEdge,
    isPlayBook: isPlayBook,
    isCloud9: isCloud9,
    isTablet: isTablet,
    isOnline: isOnline,
    isNetworkAvailable: isNetworkAvailable,
    isNetworkAvailableSync: isNetworkAvailableSync,
    isChrome: isChrome,
    isiOSAppMode: isiOSAppMode,
    isInAppMode: isInAppMode,
    isCookieEnabled: isCookieEnabled,
    isLocalStorageEnabled: isLocalStorageEnabled,
    isWebSQLSupported: isWebSQLSupported,
    isIndexedDBSupported: isIndexedDBSupported,
    isMSPointerEnabled : isMSPointerEnabled,
    isTouchDevice: isTouchDevice,
    getDevicePlatform : getDevicePlatform,
    hasCanvasPerformanceProblem : hasCanvasPerformanceProblem,
    hasMissingImgOnLoadProblem : hasMissingImgOnLoadProblem,
    hasImageRenderingProblem : hasImageRenderingProblem,
    getDeviceType : getDeviceType,
    getClientName : getClientName,
    getOSMajorVersion: getOSMajorVersion,
    getOSMinorVersion: getOSMinorVersion,
    isAndroid: isAndroid,
    isAndroid_Lollipop: isAndroid_Lollipop,
    isAndroid_KitKat: isAndroid_KitKat,
    isAndroid_JellyBean: isAndroid_JellyBean,
    isStockBrowser: isStockBrowser,
    isWindows: isWindows
  };

}();
/*
 * =======================================================================
 * Kindle module for handling metrics
 *
 * Revision: $Revision:
 * Last Changed: $Date:
 * Changed By: $Author: maryga $
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */
var KindleMetricsProfiler = function (name) {
  /**
   * Get the current time in milliseconds
   * @return The value of currentTime
   */
  function getTimestamp() {
    return (new Date()).getTime();
  }

  /**
   * Calculate time to load based on start and end times
   * @param startTime The time when the request started
   * @param endTime The time the request finished
   * @return the calculated elapsed time in milliseconds.
   */
  function calculateElapseTime(runs) {
    var elapsedTime = 0;
    for (var idx=0; idx<runs.length; idx += 1) {
      elapsedTime += (runs[idx].end - runs[idx].start);
    }
    return elapsedTime;
  }



  /**
   * Instantiate our metrics object
   */
  var metrics = {};

  /**
   * Set name to caller-specified
   */
  metrics.name = name;

  /**
   * Initialize our counters.
   */
  metrics.counters = null;

  /**
   * Initialize our sub-timers.
   */
  metrics.subTimers = null;

  /**
   * The runs that this metric has recorded.
   */
  metrics.runs = [{start: getTimestamp(), end: null}];

  /**
   * Finishes the timer.
   */
  metrics.endTimer = function() {
    var currentRun = this.runs[this.runs.length-1];
    if (currentRun.end === null) {
      currentRun.end = getTimestamp();
    }
  };

  /**
   * Add a counter to this metrics object.
   * @param counter the name of the counter to add.
   * @param units the number of units to add to the counter.s
   */
  metrics.addCount = function(counter, units) {
    if (this.counters === null) {
      this.counters = {};
    }

    if (this.counters[counter] === undefined) {
      this.counters[counter] = units;
    } else {
      this.counters[counter] += units;
    }
  };

  metrics.createSubTimer = function(name) {
    if (this.subTimers === null) {
      this.subTimers = {};
    }
    if (this.subTimers[name] === undefined) {
      this.subTimers[name] = KindleMetricsProfiler(name);
    } else {
      this.subTimers[name].runs.push({start: getTimestamp(), end: null});
    }
    return this.subTimers[name];
  };

  /**
   * This function logs all the information in this counter to the console.
   */
  metrics.log = function() {
    var totalElapsedTime = calculateElapseTime(this.runs);
    this.logAsPercentageOfTime("", totalElapsedTime);
  };

  metrics.logAsPercentageOfTime = function(prefix, totalTime) {
    var name = prefix + ":" + this.name;
    var counter;
    var elapsedTime = calculateElapseTime(this.runs);
    var percent = totalTime ? elapsedTime / totalTime * 100 : 100;


    for(counter in this.counters) {
    }
    for(counter in this.subTimers) {
      this.subTimers[counter].logAsPercentageOfTime(name, totalTime);
    }
  };

  return metrics;
};

/*
 * =======================================================================
 * KindleUserLocationConverter
 *
 * Converts between "Location" as displayed to the user, and
 * "Mobi Position" or "Topaz Position", as used internally.
 *
 * Revision: $Revision: 56819 $
 * Last Changed: $Date: 2011-03-23 13:13:31 -0700 (Wed, 23 Mar 2011) $
 * Changed By: $Author: krneta $
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */

var KindleUserLocationConverter;
KindleUserLocationConverter = function() {
  var MOBI_FLAVOR = 'mobi';
  var TOPAZ_FLAVOR = 'topaz';

  // This is copied from KRF.
  var TOPAZ_USER_LOCATION_TRANSLATION_FACTOR = 3;

  /*
  * This function returns a converter for changing Locations to
  * Mobi 7 positions and vice-versa.
  */
  function mobiLocationConverter() {
    return {

      /* Convert a Mobi 7 position to a user Location.
       * @param {Number} position The Mobi 7 position.
       * @return {Deferred} A promise on the User visible Location.
       *   Note that the promise is already resolved.
       */
      locationFromPosition: function(position) {
        // Copied from KRF CMBPUserLocation.h
        return $.Deferred().resolve(Math.floor(position * 2 / 300 + 1));
      },

      /* Convert a user Location to a Mobi 7 position.
       * @param {Number} position The user Location.
       * @return {Deferred} A promise on the Mobi 7 position.
       *   Note that the promise is already resolved.
       */
      positionFromLocation: function(location) {
        // Copied from KRF CMBPUserLocation.h
        location *= 100;
        if (location < 100) {
          location = 100;
        }
        return  $.Deferred().resolve(Math.floor(((location - 100) * 3) / 2));
      },

      /* To ask the object what kind of conversions it does.
       */
      flavor: function() {
        return MOBI_FLAVOR;
      }
    };
  }

  /*
   * This function returns a converter for changing Locations to
   * Topaz positions and vice-versa.
   */
  function topazLocationConverter() {
    return {

      /* Convert a Topaz position to a user Location.
       * @param {Number} position The Topaz position.
       * @return {Deferred} A promise on the User visible Location.
       *   Note that the promise is already resolved.
       */
      locationFromPosition: function(position) {
        // Copied from KRF CTPZUserLocation.h
        return $.Deferred().resolve(Math.floor(((position * TOPAZ_USER_LOCATION_TRANSLATION_FACTOR) + 100) / 100));
      },

      /* Convert a user Location to a Topaz position.
       * @param {Number} position The user Location.
       * @return {Deferred} A promise on the Topaz position.
       *   Note that the promise is already resolved.
       */
      positionFromLocation: function(location) {
        // Copied from KRF CTPZUserLocation.h

        // real user location are float...but it doesn't seem we never user the number after the decimal part
        location *= 100;

        if (location < 100) {
          // protection against negative numbers
          ASSERT(0);
          location = 100;
        }
        return $.Deferred().resolve(Math.floor((location - 100) / TOPAZ_USER_LOCATION_TRANSLATION_FACTOR));
      },

      /* To ask the object what kind of conversions it does.
       */
      flavor: function() {
        return TOPAZ_FLAVOR;
      }
    };
  }

  function mobi8LocationConverter(locationMapInfo) {
    var ORIGIN=1; // the first location is 1, not 0.
    var minPosition = locationMapInfo.minPosition;
    var maxPosition = locationMapInfo.maxPosition;
    var numLocations = locationMapInfo.locationsInfo.numOfLocations;
    var mapSize = locationMapInfo.locationsInfo.mapSize;
    var mapGetter = locationMapInfo.mapGetter;

    var mapBoundList = [];

    // For every location map in the cache, indexed by id, keep:
    //  - the deferred for the locationMap.  Once resolved, returns the value immediately.
    //  - the "time" it was put there, for lru purging.
    //  - if it is being fetched, keep a list of deferreds to be resolved with the locationMap
    //  The 20000 is pulled from the air, but is enough locations for most books.  Could be tuned.
    var mapCache = {}, cacheEntrySeq = 1, MAX_CACHE=Math.max(5, Math.floor(20000 / mapSize));

    /**
     * Given a location map id, provide that location map.  Keeps a cache for better performance,
     * and as every map is read, updates the list of known locations, for quicker lookup in the future.
     * @param {Number} id The id of the desired location map.
     * @return {Deferred} A promise on the location map.
     */
    function getMapById(id) {
      // If it is cached, just return it.
      if (mapCache[id]) {
        return mapCache[id].deferred;
      }
      var dfd, cacheId, oldestId, oldestSeq;
      dfd = mapGetter(id);
      dfd.done(cacheMapBounds);
      // If the read fails, remove the failing location map deferred???
      cacheEntrySeq++;
      mapCache[id] = {deferred: dfd, cacheEntrySeq: cacheEntrySeq};
      // remove stale entries.
      if (cacheEntrySeq > MAX_CACHE) {
        // Note that if we ever overflow the largest integer, such that (cacheEntrySeq === ++cacheEntrySeq), this will stop working.
        oldestSeq = cacheEntrySeq;
        for (cacheId in mapCache) {
          if (mapCache[cacheId].cacheEntrySeq < oldestSeq) {
            oldestId = cacheId;
            oldestSeq = mapCache[cacheId].cacheEntrySeq;
          }
        }
        if (oldestSeq !== cacheEntrySeq) {
          delete mapCache[oldestId];
        }
      }
      return dfd;
    }

    /**
     * Given a location map, record information about lowest and highest positions.  From a map, we
     * know for sure its lowest position, and the previous map's highest.  And we have a lower bound
     * on the highest position (from highest location).  Note that the actual highest position is
     * one less than the lowest position of the next location map.
     * @param {Object} map A location map.
     */
    function cacheMapBounds(map) {
      var id = map.metadata.id;
      // If there is no bound list entry at all for this map, or if we don't have the start position...
      if (!mapBoundList[id] || !mapBoundList[id].firstPos) {
        mapBoundList[id] = mapBoundList[id] || {};
        // Get the positions that are known to be in this location map.
        var positions = getPositionRangeForMap(map);
        // If we haven't seen the next id, we won't have any last position information, so take what we
        //  can get from this location map.
        if (!mapBoundList[id].lastPos) {
          mapBoundList[id].lastPos = positions.lastPos;
        }
        // If we haven't seen this id before, save its first position, and also the last position
        //  for any previous location map.
        if (!mapBoundList[id].firstPos) {
          mapBoundList[id].firstPos = positions.firstPos;
          if (id > 0) {
            mapBoundList[id-1] = mapBoundList[id-1] || {};
            mapBoundList[id-1].lastPos = positions.firstPos-1;
          }
        }
      }
    }

    /**
     * Given a location map, return the lowest and highest positions in the map.
     * @param {Object} map A location map.
     * @return {Object} An object with properties firstPos and lastPos.
     */
    function getPositionRangeForMap(map) {
      var firstPos, lastPos, id = map.metadata.id;
      try {
        if ($.isArray(map.locations)) {
          // New format
          firstPos = map.locations[0];
          lastPos = map.locations[map.locations.length-1];
        } else {
          // Old format
          firstPos = map.locations[(id * mapSize)+ORIGIN];
          lastPos = map.locations[Math.min(((id+1) * mapSize)+ORIGIN - 1, numLocations)];
        }
      } catch (e) {
        // Slow fallback.  Can't be needed for new format.
        firstPos = Number.MAX_VALUE;
        lastPos = -1;
        for (var loc in map.locations) {
          if (map.locations.hasOwnProperty(loc) && map.locations[loc]) {
            firstPos = Math.min(map.locations[loc], firstPos);
            lastPos = Math.max(map.locations[loc], lastPos);
          }
        }
      }
      return {firstPos: firstPos, lastPos: lastPos};
    }

    /**
     * Given a location map, return the lowest and highest indexes in the map.
     * @param {Object} map A location map.
     * @return {Object} An object with properties firstIx, lastIx, and offset.
     *   (a given location is at (index + offset); for a hash offset is 0, for an
     *   array, offset is (id * mapSize) + ORIGIN to adjust for 1-based locations.)
     */
    function getLocationIxRangeForMap(map) {
      var firstIx, lastIx, id = map.metadata.id;
      try {
        if ($.isArray(map.locations)) {
          // New format
          firstIx = 0;
          lastIx = map.locations.length-1;
          offset = (id * mapSize)+ORIGIN;
        } else {
          // Old format
          firstIx = (id * mapSize)+ORIGIN;
          lastIx = Math.min(((id+1) * mapSize)+ORIGIN - 1, numLocations);
          offset = 0;
        }
      } catch (e) {
        // Slow fallback.  Can't be needed for new format.
        firstIx = Number.MAX_VALUE;
        lastIx = -1;
        for (var loc in map.locations) {
          if (map.locations.hasOwnProperty(loc) && map.locations[loc]) {
            firstIx = Math.min(loc, firstIx);
            lastIx = Math.max(loc, lastIx);
          }
        }
      }
      return {firstIx: firstIx, lastIx: lastIx, offset: offset};
    }

    /**
     * Given a location, provide the location map containing that location.  This is
     * just division.
     * @param {Number} location The location for which the map is needed.
     * @return {Deferred} A promise on the location map.
     */
    function mapForLocation(location) {
      var mapFrag = Math.floor((location-ORIGIN) / mapSize);
      return getMapById(mapFrag);
    }

    /**
     * Given a position, provide the location map containing that position.  This is
     * possibly expensive, if we've not seen the map containing that position, we'll
     * have to search for it.
     * @param {Number} location The location for which the map is needed.
     * @return {Deferred} A promise on the location map.
     */
    function mapForPosition(position) {
      function bsearchForLocationMap(lo, hi) {
        function onGotMap(map) {
          var mapBounds = mapBoundList[map.metadata.id];
          if (mapBounds.firstPos > position) {
            // position is definitely below mid.
            bsearchForLocationMap(lo, mid-1);
          } else if (mapBounds.lastPos >= position) {
            // position is definitely in mid.
            dfd.resolve(map);
          } else {
            // position may be in the last part of mid, or else above it.
            bsearchForLocationMap(mid, hi);
          }
        } // onGotMap

        // If already narrowed down, use that value.
        if (lo === hi) {
          getMapById(lo).then(dfd.resolve, dfd.reject);
          return;
        }
        var mid = Math.floor((lo + hi) / 2);
        // Because we have slightly better knowledge about the lower bounds of a location map, favor the
        //  higher id'd location map out of two.
        if (mid === lo && hi === lo + 1) {
          mid = hi;
        }
        getMapById(mid).done(onGotMap).fail(dfd.reject);
      } // bsearchForLocationMap

      // See if we already know where the position is.  If not, try to narrow down range of location maps.
      var ix, lo, hi;
      lo = 0;
      hi = Math.floor((numLocations-ORIGIN)/mapSize);  // if mapSize=1000, 1999->1, 2000->1, 2001->2
      // Look in whatever mapBounds we may have found so far.
      for (ix=0; ix<mapBoundList.length; ix++) {
        if (mapBoundList[ix]) {
          if (mapBoundList[ix].firstPos) {
            // Tests with both a firstPos and a lastPos.  The lastPos may be low,if we have not yet
            //  seen the location map above this one (whose first position nails down this last position).
            if (mapBoundList[ix].firstPos <= position &&
              mapBoundList[ix].lastPos >= position) {
              return getMapById(ix);
            }
            // Didn't find the location map (yet), but adjust the search bounds.
            if (mapBoundList[ix].firstPos > position) {
              // Definitely below here.
              hi = ix-1;
              break;
            } else {
              lo = ix;
            }
          } else if (mapBoundList[ix].lastPos) {
            // Tests with a lastPos only.  With only a lastPos, the lastPos is exact, since it came
            //  from the first position of the next location map.  We can have a lastPos but no firstPos
            //  if we haven't seen this corresponding locationMap, but have seen the next one.
            if (mapBoundList[ix].lastPos === position) {
              // we got lucky and hit equality with the end!
              return getMapById(ix);
            }
            if (mapBoundList[ix].lastPos > position) {
              // In or below this map.
              hi = ix;
              break;
            } else {
              // Definitely above this location map.
              lo = ix+1;
            }
          }
        }
      }

      // Binary search for location map containing this position.
      var dfd = new jQuery.Deferred();
      bsearchForLocationMap(lo, hi);
      return dfd.promise();
    } // End of mapForPosition

    /**
     * Given a Mobi8 position, find the corresponding user visible location.
     * @param {Number} position The Mobi8 position.
     * @return {Deferred} A promise on the location.
     */
    function locationFromPosition(position) {
      function onGotMap(map) {
        function bsearch(lo, hi, ary) {
          // We need to find the greatest index such that the value is <= position
          var mid = Math.floor((lo + hi) / 2);

          if(ary[mid] === position) {
            //Found exact match of position in location map. mid is it.
            dfd.resolve(mid+locationIxs.offset);
          } else if (ary[mid] > position) {
            // Too high, search lower half.
            bsearch(lo, mid-1, ary);
          } else {
            // Maybe too low.  If there is nothing above mid, mid is it.  If there is
            //  something above mid, and its value is higher, mid is it.  Otherwise,
            //  mid is too low, search upper half.
            if (mid === hi || ary[mid+1] > position) {
              // mid is it.
              dfd.resolve(mid+locationIxs.offset);
            } else {
              // Too low, search upper half.
              bsearch(mid+1, hi, ary);
            }
          }
        }
        var locationIxs = getLocationIxRangeForMap(map);
        bsearch(locationIxs.firstIx, locationIxs.lastIx, map.locations);
      }
      function noMap() {
        // Couldn't get the map.  Interpolate.
        if (position <= minPosition) {
          dfd.resolve(ORIGIN);
        } else if (position >= maxPosition) {
          dfd.resolve(numLocations-1+ORIGIN);
        } else {
          var p = (position - minPosition) / (maxPosition - minPosition); // fraction of entire book
          dfd.resolve(Math.floor(p * (numLocations - ORIGIN) + ORIGIN));
        }
      }
      var dfd = new jQuery.Deferred();
      mapForPosition(position).done(onGotMap).fail(noMap);
      return dfd;
    }

    /**
     * Given a user visible location, return the corresponding Mobi8 position.
     * @param {Number} location The user visible location.
     * @return {Deferred} A promise on the position.
     */
    function positionFromLocation(location) {
      function onGotMap(map) {
        var ix, pos;
        try {
          if ($.isArray(map.locations)) {
            // New format.
            ix = (location-ORIGIN) % mapSize;
            pos = map.locations[ix];
          } else {
            // Old format.
            pos = map.locations[location];
          }
        } catch (e) {
          pos = 1;
        }
        dfd.resolve(pos);
      }
      function noMap() {
        // Couldn't get map.  Interpolate.
        if (location <= ORIGIN) {
          dfd.resolve(minPosition);
        } else if (location >= (numLocations-1+ORIGIN)) {
          dfd.resolve(maxPosition);
        } else {
          p = (location - ORIGIN) / (numLocations);
          dfd.resolve(Math.floor(p * (maxPosition - minPosition) + minPosition));
        }
      }
      var dfd = new jQuery.Deferred();
      mapForLocation(location).done(onGotMap).fail(noMap);
      return dfd.promise();
    }

    return {
      locationFromPosition: locationFromPosition,
      positionFromLocation: positionFromLocation
    };
  }


  return {

    MOBI_FLAVOR: MOBI_FLAVOR,

    TOPAZ_FLAVOR: TOPAZ_FLAVOR,

    mobiLocationConverter   : mobiLocationConverter,
    topazLocationConverter  : topazLocationConverter,

    /**
     * Gets location converter based on book type
     * @param bookType The type (mobi/topaz) of the book
     * @return A location converter corresponding to the book type
     */
    getLocationConverter    : function(bookType, locationMapInfo){
      if (bookType === 'topaz'){
        return topazLocationConverter();
      } if (bookType === 'mobi8') {
        return mobi8LocationConverter(locationMapInfo);
      } else {
        return mobiLocationConverter();
      }
    }
  };
}();
/*
 * =======================================================================
 * KindleBookPieceManagerFactory
 *
 * This class manages fetching, caching, and pre-fetching book pieces.
 *
 * Revision: $Revision: $
 * Last Changed: $Date: $
 * Changed By: $Author: $
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */

/**
 * A factory for BookPieceManagers.  A BookPieceManager manages fetching, storing,
 * and caching pieces of the book, specifically skeleton, fragment, or glyph chunk pieces.
 *
 * @param {Object} spec An object containing the information needed to create the manager:
 *  type: one of 'skeleton', 'fragment', or 'glyph'
 *  netGetter: a function(list, successCB, errorCB) to get the piece from the network.
 *  dbGetter: a function(list, successCB, errorCB) to get the pieces from the database.
 *  dbPutter: a function(pieces, successCB, errorCB) to put the pieces into the database.
 *  downloader: an object with pauseReadAhead, resumeReadAhead, and removeIdFromReadAhead functions.
 */
function KindleBookPieceManagerFactory(spec) {

  var that = {};
  var _networkDfd;

  // What kind of part is this for?  What book?
  that.type = spec.type;
  that.cache = spec.cache;

  that.dbGetter = spec.dbGetter;
  that.dbPutter = spec.dbPutter;
  that.downloader = spec.downloader;
  that.netGetter = spec.netGetter;

  /**
   * Get the id from any sort of metadata.
   * @param {Object} data
   */
  function getIdFromMetadata(data) {
    if (data.fragmentMetadata !== undefined) {
      return data.fragmentMetadata.id;
    } else if (data.skeletonMetadata !== undefined) {
      return data.skeletonMetadata.id;
    } else if (data.glyphFragmentMetadata !== undefined) {
      return data.glyphFragmentMetadata.id;
    } else if (data.metadata !== undefined) {
      return data.metadata.id;
    }
  } // End of getIdFromMetadata

  /**
   * Get pieces of a file.  Try the database first, and then fill any gaps
   * from online.  Store network pieces in the database.
   * @param {Object} list The list of ids.
   * @param {Object} successCallback
   * @param {Object} errorCallback
   */
  that.getPieces = function(list, successCallback, errorCallback) {
    // If the list is a single item (skeleton), convert it into an array.
    if (Object.prototype.toString.call(list) !== '[object Array]') {
      list = [list];
    }
    var ids = list.slice(0);  // Copy array; we may want to diddle with it.
    var self = this;          // 'this' will have a different value in callbacks; save in closure.
    var remaining = 0;        // Number in list still remaining to be resolved.  So we can know when to resume read ahead.
    var nextId = Math.max.apply(Math, ids) + 1; // Where to start readahead, if we do.
    var retryCounts = [];     // List of ids that have been retried, so we can limit retries.

    /**
     * Handle a (possibly empty) list of pieces returned from the database.  If requested pieces werent'
     * found, submit a network request for the remainder.
     * @param {Object} pieces The list of pieces from the database.
     */
    function onDbSuccess(pieces) {
      var id;
      // Return any retrieved pieces.
      for (id in pieces) {
        successCallback(pieces[id]);
      }
      // Any missing? Submit net requests.
      var missing = [];
      var idIx;
      for (idIx=0; idIx<ids.length; idIx++) {
        id = ids[idIx];
        if (pieces[id] === undefined) {
          missing.push(id);
        }
      }
      ids = missing;
      if (missing.length > 0) {
        getFromNetwork(missing);
      }
    } // End of onDbSuccess
    /**
     * Handle error return from the database.  Defers to the network.
     * @param {Object} dbError
     */
    function onDbError(dbError) {
      // DB call failed; fall back to network
      if(!_networkDfd){
        _networkDfd = new jQuery.Deferred();
      }

      _networkDfd.done(
        function(){
          getFromNetwork(ids);
        }
      );
    } // End of onDbError
    /**
     * Handles successful return from the network.  The data will be one piece.
     * @param {Object} data One piece of data.
     */
    function onNetworkSuccess(data){
      // We use this to send the data back to the caller after the db write.  We
      // wait for that because we want to write compressed data.
      function dbWriteDone() {
        successCallback(data);
      }

      var id = getIdFromMetadata(data);
      // Store in database.
      if (self.cache) {
        var pieces = [];
        pieces[id] = data;
        self.dbPutter(pieces, dbWriteDone, dbWriteDone);

        // Manage read ahead.
        self.downloader.removeIdFromReadAhead(id);
      } else {
        // No database, so give to caller.
        successCallback(data);
      }
    } // End of onNetworkSuccess

    /**
     * Handles errors from the network.  Issues up to two retries.
     * @param {Object} jqXHR The jquery XHR object (possibly null).
     * @param {Object} error The error message.
     * @param {Object} ex The exception message, if any.
     * @param {Object} id The id of the failed request.
     */
    function onNetworkError(jqXHR, error, ex, idOrList) {
      var retryList;
      var retryCountId;
      // If we got back the id list, it was the getUrls call that failed.
      if (Object.prototype.toString.call(idOrList) === '[object Array]') {
        retryList = idOrList;
        retryCountId = 'list';
      } else {
        retryList = [idOrList];
        retryCountId = idOrList;
      }
      // If we have not retried twice already, do so now.

      retryCounts[retryCountId] = retryCounts[retryCountId]+1 || 1;
      if (retryCounts[retryCountId] <= 2) {
        // Retry.
        // TODO: We should consider a delay on the retry.  However, for the
        // failure to parse errors, it never seems necessary.
        self.netGetter(retryList, onNetworkSuccess, onNetworkError);
      }
      else {
        // Abandon hope
        errorCallback(jqXHR, error, ex);
      }
    } // End of onNetworkError

    /**
     * Submits a request to the network, when the pieces couldn't be retrieved from the database.
     * @param {Object} idList The needed pieces.
     */
    function getFromNetwork(idList) {
      remaining = idList.length;
      self.netGetter(idList, onNetworkSuccess, onNetworkError);
    } // End of getFromNetwork

    if (this.cache) {
      this.downloader.pauseReadAhead();
      // Submit the database request.  The callbacks will request the remainder from the network.
      this.dbGetter(list, onDbSuccess, onDbError);
    } else {
      getFromNetwork(list);
    }

  }; // End of getPieces


  /**
   * Signal piece manager that the network is reading to be used (startReading succeed)
   */
  that.setNetworkReady = function(){
    if(!_networkDfd){
      _networkDfd = new jQuery.Deferred();
    }
    _networkDfd.resolve();
  }; // End of startReadAhead

  return that;
}

/*
 * =======================================================================
 * KindleReaderBookInfoProvider
 *
 * This class is used by KReW BookViewer to read books from disk through jsonp.
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */
function KindleReaderBookInfoProviderFactory() {
  //Time to wait for a network response to a JSON call before giving up.
  var NETWORK_TIMEOUT = 30000;

  //Names for member names to getFileUrl query.
  var FRAGMENT_TYPE = "fragment";
  var GLYPH_TYPE = "glyph";
  var SKELETON_TYPE = "skeleton";
  var RESOURCE_TYPE = "resource";
  var LOCATIONMAP_TYPE = "locationMap";

  var IDS_QUERY = "Ids";
  var FRAGMENTIDS_QUERY = FRAGMENT_TYPE + IDS_QUERY;
  var GLYPHIDS_QUERY = GLYPH_TYPE + IDS_QUERY;
  var SKELETONIDS_QUERY = SKELETON_TYPE + IDS_QUERY;
  var RESOURCEIDS_QUERY = RESOURCE_TYPE + IDS_QUERY;
  var LOCATIONMAPIDS_QUERY = LOCATIONMAP_TYPE + IDS_QUERY;

  var _bookPath = null;
  var _startReadingInfo = null;
  var _metadata = null;
  var _manifest = null;
  var _manifestType = null;
  var _fragmap = null;
  var _skeletonBuilder = null;
  var _resourceUrlTranslator = null;
  var _chunkManagers = {};
  var _locationConverter = null;
  var _deDictionary = null;
  var _deJson = null;
  var _contentKey = '';
  var _serviceFetch = null;

  /**
   * This method submits JSONP requests to the URLs returned from a locator service call.
   * These are the pieces of the book, and they may need to be decrypted before they're usable.
   *
   * @param {Object} fileUrls A response object from getFileUrl, with one or more of skeletonUrls, fragmentUrls, glyphUrls
   * @param {Object} successCallback A function that handles successful request
   * @param {Object} errorCallback A function accepting three parameters: The jqXHR object (possibly null), a string describing the
   * type of error that occurred and an optional exception object, if one occurred.
   */
  function getFilesFromLocatorResponse(
    fileUrls,
    successCallback,
    errorCallback
  ) {
    /* Unfortunately, we need all of these, one for every flavor.  Ideally, the fields
     * would all be named similarly in similar structures, and there would be a 'type'
     * field to distinguish between types.
     */
    function getSkeleton(url, jcb, id) {
      function handleSkeletonData(data) {
        if (
          data.skeletonMetadata !== undefined &&
          data.skeletonMetadata.encryption === 1
        ) {
          var clear = KindleEncryption.rc4DecryptWithString(
            data.skeletonData,
            _contentKey
          );
          data.skeletonData = clear;
          delete data.skeletonMetadata.encryption;
        }
        successCallback(data);
      }
      function handleSkeletonError(xOptions, error) {
        // Pass the failing ID back, so caller can know what to retry if they wish.
        errorCallback(null, error, null, id);
      }
      getJSONPData(url, handleSkeletonData, handleSkeletonError, jcb);
    }
    function getFragment(url, jcb, id) {
      function handleFragmentData(data) {
        if (
          data.fragmentMetadata !== undefined &&
          data.fragmentMetadata.encryption === 1
        ) {
          var clear = KindleEncryption.rc4DecryptWithString(
            data.fragmentData,
            _contentKey
          );
          data.fragmentData = clear;
          delete data.fragmentMetadata.encryption;
        }
        successCallback(data);
      }
      function handleFragmentError(xOptions, error) {
        // Pass the failing ID back, so caller can know what to retry if they wish.
        errorCallback(null, error, null, id);
      }
      getJSONPData(url, handleFragmentData, handleFragmentError, jcb);
    }

    // glyph fragments are different, because they're not encrypted, but we need
    // to inject id into the returned metadata.
    function getGlyphFragment(url, jcb, id) {
      function handleGlyphData(data) {
        if (data.glyphFragmentMetadata !== undefined) {
          data.glyphFragmentMetadata.id = id;
        }
        successCallback(data);
      }
      function handleGlyphFragmentError(xOptions, error) {
        // Pass the failing ID back, so caller can know what to retry if they wish.
        errorCallback(null, error, null, id);
      }
      getJSONPData(url, handleGlyphData, handleGlyphFragmentError, jcb);
    } // End of handleGlyphFragment

    function getResource(url, jcb, id) {
      function handleResource(data) {
        successCallback(data);
      }
      function handleResourceError(xOptions, error) {
        // Pass the failing ID back, so caller can know what to retry if they wish.
        errorCallback(null, error, null, id);
      }
      getJSONPData(url, handleResource, handleResourceError, jcb);
    } // End of getResource

    function getLocationMap(url, jcb, id) {
      function handleLocationMap(data) {
        successCallback(data);
      }
      function handleLocationMapError(xOptions, error) {
        // Pass the failing ID back, so caller can know what to retry if they wish.
        errorCallback(null, error, null, id);
      }
      getJSONPData(url, handleLocationMap, handleLocationMapError, jcb);
    } // End of getLocationMap

    var ix;
    if (fileUrls.skeletonUrls) {
      var skeletonLoc = fileUrls.skeletonUrls;
      for (ix = 0; ix < skeletonLoc.length; ix++) {
        var skeletonJcb = "loadSkeleton" + skeletonLoc[ix].id;
        getSkeleton(skeletonLoc[ix].signedUrl, skeletonJcb, skeletonLoc[ix].id);
      }
    }
    if (fileUrls.fragmentUrls) {
      var fragmentLoc = fileUrls.fragmentUrls;
      for (ix = 0; ix < fragmentLoc.length; ix++) {
        var fragmentJcb = "loadFragment" + fragmentLoc[ix].id;
        getFragment(fragmentLoc[ix].signedUrl, fragmentJcb, fragmentLoc[ix].id);
      }
    }
    if (fileUrls.glyphUrls) {
      var glyphFragmentLoc = fileUrls.glyphUrls;
      for (ix = 0; ix < glyphFragmentLoc.length; ix++) {
        var glyphFragmentJcb = "loadGlyphFragment" + glyphFragmentLoc[ix].id;
        getGlyphFragment(
          glyphFragmentLoc[ix].signedUrl,
          glyphFragmentJcb,
          glyphFragmentLoc[ix].id
        );
      }
    }
    if (fileUrls.resourceUrls) {
      var resourceLoc = fileUrls.resourceUrls;
      for (ix = 0; ix < resourceLoc.length; ix++) {
        var resourceJcb = "loadResource" + resourceLoc[ix].id;
        getResource(resourceLoc[ix].signedUrl, resourceJcb, resourceLoc[ix].id);
      }
    }
    if (fileUrls.locationMapUrls) {
      var locationMapLoc = fileUrls.locationMapUrls;
      for (ix = 0; ix < locationMapLoc.length; ix++) {
        var locationJcb = "loadMobiLocationMap" + locationMapLoc[ix].id;
        getLocationMap(
          locationMapLoc[ix].signedUrl,
          locationJcb,
          locationMapLoc[ix].id
        );
      }
    }
  } // End of getFilesFromLocatorResponse

  /*
   * Used to make JSONp calls. Will need to move to the networking module.
   * @param {Object} url
   * @param {Object} successCallback handler for successful request
   * @param {Object} errorCallback a function accepting two parameters: xOptions and error ("error" or "timeout")
   * @param {Object} jsonpCB jsonp method
   */
  function getJSONPData(url, successCallback, errorCallback, jsonpCB) {
    var dfd = new jQuery.Deferred();

    $.ajax({
      url: url,
      dataType: "text",
      timeout: NETWORK_TIMEOUT,
      error: function(xOptions, error) {
        if (xOptions) {
          error = "StatusCode = " + xOptions.status + ", StatusText = " + xOptions.statusText + ", error = " + error;
        }
        if (errorCallback) {
          errorCallback(xOptions, error);
        }
        dfd.reject(error);
      },
      success: function(text) {
        if (!text) {
          dfd.reject();
          return;
        }

        var start = text.indexOf("{");
        var end = text.lastIndexOf("}");
        if (start === -1 || end === -1) {
          dfd.reject();
          return;
        }

        var content = text.substring(start, end + 1);
        try {
          var json = JSON.parse(content);
          successCallback(json);
        } catch (e) {
          dfd.reject(e);
        }
        dfd.resolve();
      }
    });
    return dfd.promise();
  } // End of getJSONPData

  /**
   * Create and initialize the objects that manage file pieces.
   */
  function initializePieceManagers() {
    var fragmentSpec = {
      type: FRAGMENT_TYPE,
      netGetter: function(list, successCB, errorCB) {
        doGetBookPieces(FRAGMENTIDS_QUERY, list, successCB, errorCB);
      }
    };
    var skeletonSpec = {
      type: SKELETON_TYPE,
      netGetter: function(list, successCB, errorCB) {
        doGetBookPieces(SKELETONIDS_QUERY, list, successCB, errorCB);
      }
    };
    var glyphSpec = {
      type: GLYPH_TYPE,
      netGetter: function(list, successCB, errorCB) {
        doGetBookPieces(GLYPHIDS_QUERY, list, successCB, errorCB);
      }
    };
    var resourceSpec = {
      type: RESOURCE_TYPE,
      netGetter: function(list, successCB, errorCB) {
        doGetBookPieces(RESOURCEIDS_QUERY, list, successCB, errorCB);
      },
      isIdRequired: function(id) {
        var skeletonBuilder = getSkeletonBuilder();
        return id in skeletonBuilder.manifest.resourceManifest;
      }
    };
    var locationMapSpec = {
      type: LOCATIONMAP_TYPE,
      netGetter: function(list, successCB, errorCB) {
        doGetBookPieces(LOCATIONMAPIDS_QUERY, list, successCB, errorCB);
      }
    };

    _chunkManagers[FRAGMENT_TYPE] = KindleBookPieceManagerFactory(fragmentSpec);
    _chunkManagers[SKELETON_TYPE] = KindleBookPieceManagerFactory(skeletonSpec);
    _chunkManagers[GLYPH_TYPE] = KindleBookPieceManagerFactory(glyphSpec);
    _chunkManagers[RESOURCE_TYPE] = KindleBookPieceManagerFactory(resourceSpec);
    _chunkManagers[LOCATIONMAP_TYPE] = KindleBookPieceManagerFactory(
      locationMapSpec
    );
  }

  function loadMetadata(rejectDfd) {
    return getJSONPData(
      _startReadingInfo.metadataUrl,
      function(data) {
        var dict;
        if (data.cpr !== undefined) {
          dict = {};
          KindleCompression.lzAddStringsToDictionary(data.cpr, dict);
          KindleCompression.lzAddNumbersToDictionary(dict);
          _deDictionary = KindleCompression.lzGetDecompressionDictionary(dict);
        }
        if (data.cprJson !== undefined) {
          dict = {};
          KindleCompression.lzAddStringsToDictionary(data.cprJson, dict, 0x100);
          KindleCompression.lzAddNumbersToDictionary(dict, 0x100);
          _deJson = KindleCompression.lzGetDecompressionDictionary(dict);
        }
        _metadata = data;
      },
      function(xOptions, error) {
        rejectDfd.reject(error);
      },
      "loadMetadata"
    );
  }

  function loadManifest(rejectDfd, bookType) {
    var dfd = new jQuery.Deferred();

    if (bookType === "Mobi8") {
      getJSONPData(
        _startReadingInfo.manifestUrl,
        function(data) {
          dfd.resolve((_manifest = data));
        },
        function(xOptions, error) {
          rejectDfd(error);
        },
        "loadManifest"
      );
    } else {
      dfd.resolve((_manifest = {}));
    }

    return dfd.promise();
  }

  function loadFragmap(rejectDfd) {
    return getJSONPData(
      _startReadingInfo.fragmentMapUrl,
      function(data) {
        _fragmap = data;
      },
      function(xOptions, error) {
        rejectDfd.reject(error);
      },
      "loadFragmap"
    );
  }

  var sitbDeviceType = "AI8E87R86GTSD";

  //Android 2.X browser has cache control problem with AJAX
  //http://stackoverflow.com/questions/6090816/android-cors-requests-work-only-once
  function getRandomArg(url) {
    return (
      (url.indexOf("?") == -1 ? "?" : "&") + "randomValue=" + Math.random()
    );
  }

  function isOldAndroid() {
    var ua = navigator.userAgent;
    var index = ua.indexOf("Android");
    if (index >= 0) {
      var androidVersion = parseFloat(ua.slice(index + 8));
      if (androidVersion < 3.0) {
        return true;
      }
    }
    return false;
  }

  function setAuthHeaders(xhr, settings) {
    //SRS does not accept request from Android 2.x phone when additional request header is added.
    if (isOldAndroid()) {
      return true;
    }
    xhr.setRequestHeader("Amzn-Device-Type", sitbDeviceType);
    return true;
  }

  function srsAjax(call, successCallback, errorCallback) {
    $.ajax({
      url: srsUrl + call + getRandomArg(call),
      dataType: "json",
      cache: true,
      timeout: 10000,
      beforeSend: setAuthHeaders,
      error: errorCallback,
      success: successCallback
    });
  }

  function getFileUrl(arg, successCallback, errorCallback) {
    srsAjax(
      "/web/content/getFileUrl?asin=" +
        _startReadingInfo.deliveredAsin +
        "&contentVersion=" +
        _startReadingInfo.contentVersion +
        "&formatVersion=" +
        _startReadingInfo.formatVersion +
        "&isSample=true" +
        arg,
      successCallback,
      errorCallback
    );
  }

  function doGetBookPieces(
    serviceName,
    idList,
    successCallback,
    errorCallback
  ) {
    var args;
    var request = {};
    switch (serviceName) {
      case SKELETONIDS_QUERY:
        args = "&skeletonIds=" + idList;
        request['skeletonIds'] = idList;
        break;
      case FRAGMENTIDS_QUERY:
        args = "&fragmentIds=" + idList;
        request['fragmentIds'] = idList;
        break;
      case RESOURCEIDS_QUERY:
        args = "&resourceIds=" + idList;
        request['resourceIds'] = idList;
        break;
      case GLYPHIDS_QUERY:
        args = "&glyphIds=" + idList;
        request['glyphIds'] = idList;
        break;
      case LOCATIONMAPIDS_QUERY:
        args = "&locationMapIds=" + idList;
        request['locationMapIds'] = idList;
        break;
      default:
        errorCallback();
    }

    if (_serviceFetch) {
      request['asin'] = _startReadingInfo.deliveredAsin ? _startReadingInfo.deliveredAsin : _startReadingInfo.asin;
      request['contentVersion'] = _startReadingInfo.contentVersion ? _startReadingInfo.contentVersion : _startReadingInfo.revision;
      request['formatVersion'] = _startReadingInfo.formatVersion ? _startReadingInfo.formatVersion : _startReadingInfo.acr;
      request['kindleSessionId'] = _startReadingInfo.kindleSessionId;
      request['isSample'] = _startReadingInfo.isSample;
      _serviceFetch(request).then(
          function(response) {
            getFilesFromLocatorResponse(response, successCallback, errorCallback);
          },
          errorCallback
      ).catch(
          errorCallback
      )
      return;
    }

    getFileUrl(
      args,
      function(response) {
        getFilesFromLocatorResponse(response, successCallback, errorCallback);
      },
      errorCallback
    );
  }

  function fulfilledPromise(data, callback) {
    return new jQuery.Deferred()
      .resolve(data)
      .promise()
      .done(callback);
  }

  return {
    initialize: function(startReadingInfo, serviceFetch) {
      var dfd = new $.Deferred();

      _startReadingInfo = startReadingInfo;

      // Check if the content check sum exist add it to the content key
      // for the encrypted in case it is full book
      if (startReadingInfo.contentChecksum) {
        _contentKey = startReadingInfo.contentChecksum;
      }

      // To be called for file url instead of the existing one
      _serviceFetch = serviceFetch;

      loadMetadata(dfd).done(function() {
        loadManifest(dfd, _startReadingInfo.format).done(function() {
          loadFragmap(dfd).done(function() {
            initializePieceManagers();
            _resourceUrlTranslator = KindleBookResourceUrlTranslator(
              _chunkManagers[RESOURCE_TYPE],
              _manifest
            );
            _skeletonBuilder = KindleBookSkeletonBuilderFactory(
              _chunkManagers[SKELETON_TYPE],
              _chunkManagers[RESOURCE_TYPE],
              _manifest,
              _resourceUrlTranslator,
              _deDictionary
            );

            _locationConverter = KindleUserLocationConverter.getLocationConverter(
              _fragmap.fragmentMetadata.bookType,
              {
                locationsInfo: _metadata.locationsInfo,
                minPosition: _fragmap.fragmentArray[0].cPos,
                maxPosition:
                  _fragmap.fragmentArray[_fragmap.fragmentArray.length - 1]
                    .ePos,
                mapGetter: function(id) {
                  var dfd = jQuery.Deferred();
                  _chunkManagers[LOCATIONMAP_TYPE].getPieces(
                    [id],
                    dfd.resolve,
                    dfd.reject
                  );
                  return dfd;
                }
              }
            );
            dfd.resolve();
          });
        });
      });

      return dfd.promise();
    },

    getMetadata: function(successCallback, errorCallback) {
      return fulfilledPromise(_metadata, successCallback);
    },

    getManifest: function(successCallback, errorCallback) {
      return fulfilledPromise(_manifest, successCallback);
    },

    getFragmentMap: function(successCallback, errorCallback) {
      return fulfilledPromise(_fragmap, successCallback);
    },

    getBookSkeleton: function(successCallback, errorCallback, skeletonId) {
      return _skeletonBuilder
        .buildSkeleton(skeletonId)
        .then(successCallback, errorCallback);
    },

    getBookFragments: function(successCallback, errorCallback, idList) {
      // Performs any final modifications before giving back to caller (the Renderer)
      function fragmentHandler(fragment) {
        if (
          fragment.fragmentMetadata.compression === 1 ||
          fragment.fragmentMetadata.compression === 2
        ) {
          fragment.fragmentData = KindleCompression.lzExpandWithStaticDictionary(
            fragment.fragmentData,
            _deDictionary
          );
          // if the paraData is a string, it is compressed JSON-ified; expand and JSON.parse.
          if (
            fragment.paraData !== undefined &&
            typeof fragment.paraData === "string"
          ) {
            var strData = KindleCompression.lzExpandWithStaticDictionary(
              fragment.paraData,
              _deJson,
              0x100
            );
            fragment.paraData = JSON.parse(strData);
          }
          delete fragment.fragmentMetadata.compression;
        }
        successCallback(fragment);
      } // End of fragmentHandler

      _chunkManagers[FRAGMENT_TYPE].getPieces(
        idList,
        fragmentHandler,
        errorCallback
      );
    },

    getGlyphFragments: function(successCallback, errorCallback, idList) {
      // Performs any final modifications before giving back to caller (the Renderer)
      function glyphHandler(glyph) {
        if (
          glyph.glyphFragmentMetadata.compression === 1 ||
          typeof glyph.glyphData === "string"
        ) {
          var strData = KindleCompression.lzExpandWithStaticDictionary(
            glyph.glyphData,
            _deJson,
            0x100
          );
          glyph.glyphData = JSON.parse(strData);
          delete glyph.glyphFragmentMetadata.compression;
        }
        successCallback(glyph);
      } // End of glyphHandler

      _chunkManagers[GLYPH_TYPE].getPieces(idList, glyphHandler, errorCallback);
    },

    /**
     * This function is used to get a set of resources urls, given the wanted resource names.
     *
     * @param successCallback the function to call when we have the dataURI for the resource name. The parameter
     * it expects is a key value pair of the resource and the data URI. eg. {"dir/file0" : "data:..."}
     * @param errorCallback the function to call in the case of an error. This function may be called
     * back with a text message explaining the error.
     * @param resources an array of resources specified by their names, eg. ["dir/file0", "dir/file1", ...]
     */
    getResourceUrls: function(successCallback, errorCallback, resources) {
      _resourceUrlTranslator.getResourceUrls(
        resources,
        successCallback,
        errorCallback
      );
    },

    getLocationConverter: function() {
      return _locationConverter;
    },

    hasCover: function(successCallback, errorCallback) {
      var coverResourceId = _manifest.coverResource;
      return fulfilledPromise(
        coverResourceId !== undefined && coverResourceId !== null,
        successCallback
      );
    },

    getCoverUrl: function(successCallback, errorCallback) {
      var dfd = new jQuery.Deferred();
      var coverResourceId = _manifest.coverResource;
      if (coverResourceId !== undefined && coverResourceId !== null) {
        _chunkManagers[RESOURCE_TYPE].getPieces(
          coverResourceId,
          function(resource) {
            dfd.resolve(resource.data);
          },
          dfd.reject
        );
      } else {
        // No manifest URL, means no manifest, means no cover.
        dfd.resolve(null);
      }
      return dfd.promise().then(successCallback, errorCallback);
    }
  };
}

/*
 * =======================================================================
 * KindleBookSkeletonBuilderFactory
 *
 * This class creates a skeletonBuilder object.
 *
 * A skeletonBuilder object allows for loading of a skeleton, along with all the resources
 * it needs. When done, the skeleton text is passed back via deferred.
 *
 * SkeletonBuilder API:
 *
 * Copyright (c) 2010-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * =======================================================================
 */

/**
 * Creates and initializes a SkeletonBuilder.
 * @param {Object} skeletonManager An object that can retrieve skeleton fragments from database or network.
 * @param {Object} resourceManager An object that can retrieve resource fragments from database or network.
 * @param {Object} manifest A list of the resources used in the entire book.
 * @param {Object} dictionary The compression dictionary with which to expand the skeleton fragment.
 *
 * The data structures involved:
 *
 * A manifest has a structure like (resource ids need not be contiguous):
 *   { 'skeletonManifest': { //skeleton level resource details
 *                      0: {'includes':[0,1], 'depends':[0,1,3,4]}, //dependencies of skeleton0
 *                      1: {'includes':[1,2], 'depends':[1,2,4]}, //dependencies of skeleton1
 *               },
 *     'resourceManifest': { //individual resource details
 *                      0: {'name':'resources/1234',type:'text/css', includes:[3] },
 *                      1: {'name':'resources/5678',type:'text/css', includes:[4], resInfo:{} },
 *                      2: {'name':'resources/1111',type:'text/css', includes:[] },
 *                      3: {'name':'resources/img1',type:'image/jpeg', includes:[] },
 *                      4: {'name':'resources/img2',type:'image/png', includes:[] }
 *                }
 *   }
 *   The 'resInfo' properties are a way to pass hints to the renderer.
 *
 * A resource containing a css could look like this:
 *  {'data':'.chapter1 {margin-left: 2px;}
 *                     #header {font-size: 1.5em;}
 *                     .ballon {color: yellow; background-image: url('resources/33333');}
 *                     .smiley {color: green; background-image: url('resources/img2');}
 *                     .mystyle {color: red;}',
 *   'resList':{'resources/33333':'data:image/jpeg,base64;ASdse3ade3S321...sd/P'},
 *   'metadata':{'id':1, type:'text/css'}
 *  }
 *  The 'resList' is like a local include.  An image can be referenced in many places, but only downloaded or stored
 *  once.  Note that this can result in DOM bloat.
 *
 * A skeleton fragment could look like this:
 *  {'skeletonData':'<fragment data> <link href="resources/5678" rel="stylesheet" type="text/css"></link> <more data>',
 *   'skeletonMetadata': {'id':1, 'compression': 1, 'encryption': 1}
 *  }
 *
 * Given this, skeleton1 will be built by its fragment and resources 1, 2, and 4:
 * - the raw fragment and resources are fetched from database or network.
 * - the resLists (local includes for the css resources) are processed.
 * - cross-resource includes are processed, by substituting names with the included resources.
 * - resources are injected into the skeleton fragment, by substituting names with the included resources.
 * - any resInfos mentioned in the resourceManifest are added to the skeleton.
 *
 */
function KindleBookSkeletonBuilderFactory(
  skeletonManager_,
  resourceManager_,
  manifest_,
  resourceTranslator_,
  dictionary_
) {
  var that = {};
  that.skeletonManager = skeletonManager_;
  that.resourceManger = resourceManager_;
  that.manifest = manifest_;
  that.resourceTranslator = resourceTranslator_;
  that.dictionary = dictionary_;

  var MAX_FONTS_SIZE = 10 * 1024 * 1024;

  /**
   * This function injects fonts, images, etc. into CSS files by replacing (external) URLs with data: URI's
   * that contain the data inline. Sometimes an included resource isn't actually required (it might be
   * relevant to a different part of the book in a different skeleton, but not relevant here). Those
   * resources get stripped out instead.
   *
   * @param {String} text A skeleton fragment or resource with 'url(...)' values to be replaced.
   * @param {Object} replaceMap The replacements to be made.
   * @return {String} The resulting string after replacements.
   */
  function replaceAllFromMap(text, replaceMap) {
    if (replaceMap) {
      // All URL values in CSS attributes use the "url" function. This regular expression looks for that function
      // and captures its argument's value (which may be specified as a single- or double-quoted string).
      //
      // Captures:
      //   $1 : The URL value if it was quoted with '
      //   $2 : The URL value if it was quoted with "

      var regex = /\burl\s*\(\s*(?:'([^']*)'|"([^"]*)")\s*\)/gi;
      text = text.replace(regex, function(str, squote, dquote) {
        var url = squote || dquote;
        var replacement = replaceMap[url];

        if (replacement) {
          if (replacement.composites) {
            var compositeString = 'url("' + replacement.composites[0] + '")';
            for (var i = 1; i < replacement.composites.length; ++i) {
              compositeString +=
                ", " + 'url("' + replacement.composites[i] + '")';
            }
            return compositeString;
          }
          return 'url("' + replacement + '")';
        } else if (replacement === null) {
          return "none";
        } else {
          // Usually not an error but log it anyway
          return str; // Return original string
        }
      });
    }

    return text;
  }

  /**
   * Resources can include a resList, which can contain data urls used in several places in the resource.  This
   * function makes that substitution.
   * @param {Object} resource A resource that may contain ...src:url("resources/1234")... strings to be replaced
   * with data urls (also contained in the resource).
   */
  function injectInlineDataURIs(resource) {
    resource.data = replaceAllFromMap(resource.data, resource.resList);
  }

  /**
   * This function scans a list of resources for any stylesheets (the only kind of resource that can
   * include other resources) and inlines any included resources.
   *
   * @param {Object} resourcesManifest The book's resourceManifest.
   * @param {Object} availableResources All of the resources upon which the
   *   given skeleton fragment depends.
   */
  function injectResourceIncludes(manifest, availableResources) {
    for (var resourceIndex in availableResources) {
      var resourcesManifest = manifest.resourceManifest;
      var resource = availableResources[resourceIndex];
      var resId = resource.metadata.id;

      var resourceInfo = resourcesManifest[resId];

      if (!resourceInfo) {
        if (manifest.resourceManifest && manifest.resourceManifest[resId]) {
          var resName = manifest.resourceManifest[resId].name;
          resId = that.resourceTranslator.reverseLookup[resName];
          resourceInfo = resourcesManifest[resId];
        }
      }

      var includes = resourceInfo.includes;
      if (includes !== undefined) {
        var replaceMap = {};

        // Here, the resource under consideration has its own list of included resources.  For those
        //  included resources, build a map like {'resources/1234': 'data:image/png;...'}
        for (var i = 0; i < includes.length; i++) {
          var resourceToIncludeInfo = resourcesManifest[includes[i]];
          var resourceToInclude = availableResources[includes[i]];
          if (resourceToInclude === undefined) {
            // this means that the resource includes a resource not actually needed by the skeleton
            // being loaded.
            replaceMap[resourceToIncludeInfo.name] = null;
          } else {
            /*if (resourceToIncludeInfo.composite) {
                var compositesList = [];
                for (var j in resourceToIncludeInfo.composite) {
                    compositesList.push(availableResources[resourceToIncludeInfo.composite[j]].data);
                }
                replaceMap[resourceToIncludeInfo.name] = {composites: compositesList};
            } else {*/
            replaceMap[resourceToIncludeInfo.name] = resourceToInclude.data;
            //}
          }
        }

        resource.data = replaceAllFromMap(resource.data, replaceMap);
      }
    }
  }

  /**
   * Performs an in-place replacement of css links in a skeleton fragment with inline css.  Looks
   * for strings like "<link href='resources/1990984815' ... ></link>" and
   * replaces them with "<style type="text/css"> css statements </style>"
   *
   * @param {Object} skeletonManifest Manifest for the skeleton id being built.
   * @param {Object} resourcesManifest Manifest for all the book's resoruces.
   * @param {Object} skeleton The skeleton fragment being built.
   * @param {Object} availableResources A list of all the resources on which the skeleton fragment depends.
   */
  function injectSkeletonIncludes(
    skeletonManifest,
    resourcesManifest,
    skeleton,
    availableResources
  ) {
    var includes = skeletonManifest.includes;
    if (includes !== undefined) {
      var replaceMap;
      for (var i = 0; i < includes.length; i++) {
        var resourceToInclude = availableResources[includes[i]];
        var resourceToIncludeData =
          resourcesManifest[resourceToInclude.metadata.id];
        if (resourceToIncludeData.type === "text/css") {
          replaceMap = replaceMap || {};
          replaceMap[resourceToIncludeData.name] = resourceToInclude.data;
        }
      }

      if (replaceMap) {
        // This regular expression looks for HTML "link" tags and captures the "href" attribute's value (which
        // may be a single- or double-quoted string). This regex handles both HTML-style (</link>) and XML-style (/>)
        // tag endings.
        //
        // Captures:
        //   $1 : The href value if it was quoted with '
        //   $2 : The href value if it was quoted with "

        var regex = /<link\s(?:[^\/>'"]|'[^']*'|"[^"]*")*href\s*=\s*(?:'([^']*)'|"([^"]*)")(?:[^\/>'"]|'[^']*'|"[^"]*")*(?:\/>|>\s*<\/link>)/gi;
        skeleton.skeletonData = skeleton.skeletonData.replace(regex, function(
          str,
          squote,
          dquote
        ) {
          var url = squote || dquote;
          var replacement = replaceMap[url];
          if (replacement) {
            return '<style type="text/css">' + replacement + "</style>";
          } else {
            // The <link> probably refers to something other than a stylesheet and therefore doesn't need replacing
            return str;
          }
        });
      }
    }
  }

  /**
   * Collects any resInfos attached to resources, and attaches them to the skeleton.
   */
  function addResourceInfoToSkeleton(
    skeleton,
    resourcesManifest,
    skeletonManifest
  ) {
    var dependencies = skeletonManifest.depends;
    if (dependencies !== undefined) {
      var resourceInfo = [];
      for (var i = 0; i < dependencies.length; i++) {
        var resourceToIncludeData = resourcesManifest[dependencies[i]];
        if (resourceToIncludeData.resInfo !== undefined) {
          resourceInfo.push(resourceToIncludeData.resInfo);
        }
      }
      skeleton.resourceInfo = resourceInfo;
    }
  }

  /**
   * Combines a skeleton fragment and a full set of resources into a complete skeleton fragment.
   *
   * @param {Object} manifest The book's manifest.
   * @param {Object} skeleton The (possibly incomplete) skeleton fragment.
   * @param {Object} availableResources The resources on which this skeleton fragment depends.
   * @param {Deferred} dfd The deferred to be resolved with the completed skeleton.
   */
  function processSkeletonAndResources(
    manifest,
    skeleton,
    availableResources,
    dfd
  ) {
    if (availableResources !== null) {
      var resourceManifest = manifest.resourceManifest;
      var currentSkeletonManifest =
        manifest.skeletonManifest[skeleton.skeletonMetadata.id];
      var currentKcrSkeletonManifest =
        manifest.skeletonManifest[skeleton.skeletonMetadata.id];
      injectResourceIncludes(manifest, availableResources);
      injectSkeletonIncludes(
        currentKcrSkeletonManifest,
        manifest.resourceManifest,
        skeleton,
        availableResources
      );
      addResourceInfoToSkeleton(
        skeleton,
        resourceManifest,
        currentSkeletonManifest
      );
    }
    dfd.resolve(skeleton);
  }

  /**
   * This is a test function that illustrates how we could prevent the download of fonts which are too large and
   * cause stability issues.
   *
   * @param resources
   * @param manifest
   */
  function getNeededResources(resources, manifest) {
    var neededResources = [];
    var totalFontSize = 0;
    for (var idx = 0; idx < resources.length; ++idx) {
      var resourceId = resources[idx];
      if (manifest[resourceId].type === "font/*" && manifest[resourceId].size) {
        totalFontSize += manifest[resourceId].size;
        if (totalFontSize > MAX_FONTS_SIZE) {
          continue;
        }
      }
      neededResources.push(resourceId);
    }
    return neededResources;
  }

  /**
   * Builds a skeleton by injecting the appropriate resources into it.
   * @param {Number} skeletonId Id of the desired skeleton.
   * @returns {Deferred} A promise on the completed skeleton.
   */
  that.buildSkeleton = function(skeletonId) {
    // Collects the skeleton.  When it and all resources are ready, calls process...
    function skeletonHandler(skeleton) {
      if (skeleton.skeletonMetadata.compression === 1) {
        skeleton.skeletonData = KindleCompression.lzExpandWithStaticDictionary(
          skeleton.skeletonData,
          dictionary
        );
        delete skeleton.skeletonMetadata.compression;
      }
      if (numRetrievedResources >= numNeededResources) {
        processSkeletonAndResources(manifest, skeleton, resourcesResult, dfd);
      } else {
        skeletonResult = skeleton;
      }
    }
    // Collects the resources.  When they and the skeleton are ready, calls process...
    function resourceHandler(resource) {
      injectInlineDataURIs(resource);

      resourcesResult[resource.metadata.id] = resource;

      numRetrievedResources++;

      if (
        skeletonResult !== null &&
        numRetrievedResources >= numNeededResources
      ) {
        processSkeletonAndResources(
          manifest,
          skeletonResult,
          resourcesResult,
          dfd
        );
      }
    }

    var dfd = new jQuery.Deferred();
    var dictionary = this.dictionary;

    var numNeededResources = 0;
    var numRetrievedResources = 0;

    // Get the list of resources required to complete this skeleton fragment.
    var resources = [];
    if (
      this.manifest.skeletonManifest !== undefined &&
      this.manifest.skeletonManifest[skeletonId] !== undefined &&
      this.manifest.skeletonManifest[skeletonId].depends !== null
    ) {
      resources = this.manifest.skeletonManifest[skeletonId].depends.slice();
      for (var res = 0; res < resources.length; ++res) {
        var resInfo = this.manifest.resourceManifest[resources[res]];
        if (resInfo.type === "text/css") {
          resources[res] = this.manifest.skeletonManifest[skeletonId].depends[
            res
          ];
        }
        if (resInfo.composite) {
          //    resources = resources.concat(resInfo.composite);
        }
      }
      numNeededResources = resources.length;
    }

    var skeletonResult = null;
    var resourcesResult = null;
    var manifest = this.manifest;

    // Request the skeleton and any needed resources.
    this.skeletonManager.getPieces([skeletonId], skeletonHandler, dfd.reject);

    if (numNeededResources > 0) {
      resourcesResult = {};
      this.resourceManger.getPieces(resources, resourceHandler, dfd.reject);
    }

    return dfd.promise();
  };

  return that;
}

/*
 * Copyright (c) 2019 Amazon.com, Inc. All rights reserved.
 *
 * KReW Version 2.9.14 */
var KindleRendererAnnotationRenderer=function(){function g(){var c={};return function(a,d){if(c[a]!==void 0)return c[a];var e=d[a];if(!e)return c[a]=!1;if(e.tagName==="IMG")return c[a]=!0;for(;e.tagName!=="BODY";){var k=$(e);if(k){var j=k.css("background-color"),k=k.css("background-image");if(j&&j!=="rgba(0, 0, 0, 0)"&&j!=="transparent"||k&&k!=="none")return c[a]=!0;e=e.parentNode}}return c[a]=!1}}function m(c){var a={};$(c).find("[data-nid]").each(function(d,e){a[e.getAttribute("data-nid")]=e});
return a}function h(f,a){a!==void 0&&(a.clickable!==void 0&&f.setAttribute(b,a.clickable),a.feedbackAnimation!==void 0&&f.setAttribute(c,a.feedbackAnimation))}var b="data-annotationClickable",c="data-annotationClickFeedback";return{DRAW_AFTER:"after",DRAW_OVER:"over",ANNOTATION_CLICK_ATTRIBUTE:b,ANNOTATION_CLICK_FEEDBACK_ATTRIBUTE:c,createAnnotationElements:function(c,a,d,e,k){var j=[];if(e!==null)for(var b=KindleRendererSettings.getSettings().annotationStyles,q=KindleRendererSettings.getSettings().annotationClick,
o,p=o=null,n=null,s=m(c.contentDocument),r=g(),w=0;w<e.length;w+=1)if(p=e[w],o=p.type,b[o]){var n=q?q[o]:void 0,z=b[p.type].className;if(p.additionalStyles)for(var C in p.additionalStyles)z+=" "+p.additionalStyles[C];if(b[o].drawingType==="over"){o=c;var u=k,x=a,D=z,v=n,n=s,z=r,H=o.contentDocument.createElement("DIV");H.setAttribute("annotationType",p.type);H.setAttribute("annotationStart",p.start);h(H,v);for(var x=KindleRendererWordRectsHelper.createWordBoundaries(p,x,o.contentDocument,o.contentWindow,
o.writingMode),p=o.contentDocument,v=p.createElement("DIV"),t=!1,J=!1,E={isNewDiv:!0,isImageBound:!1,lineBounds:{top:0,height:0,left:0,right:0,width:0}},B=!1,y=!0,M=x.length,A=0;A<M;A+=1){var G=x[A].dataNid;t||typeof G==="string"&&z(G,n)&&(t=!0);!G&&!t&&x[A].tagName==="IMG"&&(t=!0);var y=x[A].rect,F=void 0,I=n[G],G=void 0,K=!1;if(A<M-1)F=x[A+1].rect,G=n[x[A+1].dataNid],J=z(x[A+1].dataNid,n);I&&G&&(K=I.tagName==="IMG"||t,B=I.tagName==="IMG",I=!1,I=G!==void 0?G.tagName==="IMG":!1,B=B!==I||J!==t);if(y=
o.writingMode.updateDivIfNewLineOrImageBound(E,y,F,K,B,$(p).width()))y=v,F=E.lineBounds,G=D,y.style.top=F.top+"px",y.style.height=F.height+"px",y.style.left=F.left+"px",y.style.width=F.width+"px",y.className=t?G+" semiTransparentOverlay":G,H.appendChild(v),v=p.createElement("DIV"),t=!1}u.appendChild(H);o=H}else if(b[o].drawingType==="after"){H=c;o=k;D=a;x=d;v=n;n=p.start;J=-1;u=void 0;for(x.addBoundsForPosition(H.contentDocument,D,n,H.writingMode);D[n]===void 0&&J<100;)n=p.start+J,x.addBoundsForPosition(H.contentDocument,
D,n,H.writingMode),J+=1;if(D[n]!==void 0)u=H.contentDocument.createElement("DIV"),u.setAttribute("annotationType",p.type),u.setAttribute("annotationStart",p.start),h(u,v),x=u,D=D[n].rects[D[n].rects.length-1],n=z,z=H.contentDocument,p=z.createElement("DIV"),H.writingMode.positionDivAfterWord(p,D,"px",$(z).width()),p.className="note-annotation "+n,x.appendChild(p),o.appendChild(u);o=u}else o=null;o&&j.push(o)}return j},removeAnnotationElements:function(c,a){$(c).children('[annotationtype="'+a.type+
'"][annotationstart="'+a.start+'"]').remove()}}}(),KindleRenderer=function(){function g(a,d,e){a={status:a};if(d!==void 0)a.errorCode=d;if(e!==void 0)a.errorMsg=e;y!==void 0&&y(a)}function m(a,d){g(p,a,d?d:"no msg")}function h(){E=J=!1;g(s)}function b(){M!==null&&(M.endTimer(),M.log(),M=null);J=!0;g(r)}function c(){E=!1}function f(){E=!0;g(w)}function a(a){E=!1;m(x,a)}function d(a){J=!1;m(u,a)}function e(a){a=parseInt(a,10);isNaN(a)&&(a=0);return KindleRendererContentDisplay.gotoPosition(a,!0)}function k(){return setTimeout(function(){t||
(H=!0,m(z,"Init timed out"))},v)}function j(a){clearTimeout(a);return k()}function l(r,w,l,u){M===null&&(M=KindleMetricsProfiler("Renderer-Load"));y=l.statusCallback;l.contentInterfaceCallbacks&&KindleRendererContentScripts.setCallbacks(l.contentInterfaceCallbacks);H=!1;if(r)if(r.bookInfo&&r.containerId)A=$(document.getElementById(r.containerId)),A.length===0?m(C,"Container not found"):(g(n),KindleRendererDeviceSpecific.initialize(),v=KindleRendererDeviceSpecific.rendererInitializationTimeout(),B=
k(),KindleRendererFragmentLoader.initialize(r.bookInfo).then(function(){H||(B=j(B),KindleRendererSettings.initialize(r.bookInfo).then(function(){if(!H){B=j(B);KindleRendererPositionLoadingCalculator.updateScreenDimensions(A.width(),A.height());var k={waitNotification:h,readyNotification:b,rectsWaitNofification:c,rectsReadyNotification:f,rectsErrorNotification:a,errorNotification:d,annotationTriggered:l.annotationEventCallback};r.startingPositionDfd.done(function(a){H||(B=j(B),KindleRendererContentDisplay.initialize(A.get(0),
k,r.bookInfo,u,a).then(function(){H||(KindleRendererSettings.updateSettings(w),KindleGlyphRenderer.updateSettings(w),KindleRendererContentDisplay.updateSettings(w),t=!0,e(a))},function(a){H||m(z,"Load Failure: "+a)}))})}},function(){H||m(z,"Load Failure: Metadata")}))},function(a){H||m(z,"Load Failure: "+a)}));else throw{name:"initializationError",message:"required parameters not present"};}function q(){if(!t)throw{name:"initializationError",message:"Please call KindleRenderer.initialize function first"};
}var o=0,p=o++,n=o++,s=o++,r=o++,w=o++,z=o++,C=o++,u=o++,x=o++,D=o++,o=o++,v=12E4,H=!1,t=!1,J=!1,E=!1,B,y=void 0,M=null,A=null;return{STATUS_ERROR:p,STATUS_LOADING:n,STATUS_PAGINATING:s,STATUS_PAGINATED:r,STATUS_DONE:w,ERROR_LOAD_FAILURE:z,ERROR_CONTAINER_NOT_FOUND:C,ERROR_UNABLE_TO_GET_BOOK_CONTENT:u,ERROR_UNABLE_TO_GET_WORD_RECTS:x,ERROR_TIMEOUT_WHILE_LOADING_BOOK_CONTENT:D,ERROR_UNKNOWN:o,PAGE_LOAD_INCOMPLETE_FLAG_NAME:"PageLoadIncomplete",initialize:function(a,d,e,c){try{l(a,d,e,c)}catch(k){}},
shutdown:function(){try{t&&(t=!1,clearTimeout(B),KindleRendererContentDisplay.cleanup(),KindleGlyphRenderer.cleanup(),KindleRendererCanvasInsertion.cleanup())}catch(a){}},getMinimumPosition:function(){q();return KindleRendererFragmentLoader.getMinimumPosition()},getMaximumPosition:function(){q();return KindleRendererFragmentLoader.getMaximumPosition()},createWordIterator:function(){q();try{return KindleRendererWordIteratorFactory.build()}catch(a){}return null},updateSettings:function(a){try{KindleRendererSettings.updateSettings(a),
KindleGlyphRenderer.updateSettings(a),KindleRendererContentDisplay.updateSettings(a)}catch(d){return!1}},gotoPosition:function(a){q();try{return e(a)}catch(d){}return!1},nextScreen:function(){q();try{if(J)return KindleRendererContentDisplay.nextScreen()}catch(a){}return!1},previousScreen:function(){q();try{if(J)return KindleRendererContentDisplay.previousScreen()}catch(a){}return!1},hasNextScreen:function(){q();try{if(J)return KindleRendererContentDisplay.hasNextScreen()}catch(a){}return!1},hasPreviousScreen:function(){q();
try{if(J)return KindleRendererContentDisplay.hasPreviousScreen()}catch(a){}return!1},getPagePositionRange:function(){q();try{if(J)return KindleRendererContentDisplay.getPagePositionRange()}catch(a){}return null},getPageSelectableItemBoundaries:function(){q();try{if(E)return KindleRendererContentDisplay.getSelectableItemBoundaries()}catch(a){}return null},getPageWordPositions:function(){q();try{if(E)return KindleRendererContentDisplay.getWordPositions()}catch(a){}return null},onWindowResize:function(){if(t)try{KindleRendererPositionLoadingCalculator.updateScreenDimensions(A.width(),
A.height()),KindleRendererContentDisplay.onWindowResize()}catch(a){}},handleClick:function(a,d){try{if(J)return KindleRendererContentDisplay.handleClick(a,d)}catch(e){}return null},reloadAnnotations:function(){try{J&&KindleRendererContentDisplay.reloadAnnotations()}catch(a){}},getContentRects:function(){q();try{if(J)return KindleRendererContentDisplay.getContentRects()}catch(a){}return null},getZoomableAt:function(a,d){q();try{if(J)return KindleRendererContentDisplay.getZoomableAt(a,d)}catch(e){}return null},
getZoomableList:function(){q();try{if(J)return KindleRendererContentDisplay.getZoomableList()}catch(a){}return null},clearSelection:function(){if(t)try{J&&KindleRendererContentDisplay.clearSelection()}catch(a){}},getSelection:function(){q();try{if(J)return KindleRendererContentDisplay.getSelection()}catch(a){}}}}(),KindleRendererWordIteratorFactory=function(){function g(a,e,c,j){for(var b=!0;b;){b=a.getItem();if(b.pos>e){j.resolve(c);return}c+=b.text;b=a.next()}a.getLoadingDfd().then(function(b){b?
g(a,e,c,j):j.resolve(c)},j.reject)}function m(d){d.cancelCurrentRequest=function(){if(this.currentRequest)this.currentRequest=null};d.newRequest=function(a,d,c){this.cancelCurrentRequest();this.currentRequest={requestId:KindleRendererRequestId.getUniqueRequestId(),metrics:KindleMetricsProfiler("word-iterator-load"),position:a,stopPosition:d,direction:c}};d.newRequestDfd=function(){this.currentRequestDfd=new jQuery.Deferred;this.currentRequestReachedTerminal=!1};d.fragmentLoadedCallback=function(a){var d=
this;d.loadedRange=a.contentRange;d.wordMapGenerator.createWordMap(a.fragmentRoot,a.positionData).then(function(a){d.createPositionInfo(a)},function(){d.currentRequestDfd.reject()})};d.calculateContinuePosition=function(a){return a===f?this.loadedRange.startPosition-1:this.loadedRange.endPosition+1};d.hasReachedStopPosition=function(a){if(this.currentRequest&&this.currentRequest.stopPosition!==void 0){var d=this.currentRequest.direction,c=this.currentRequest.stopPosition,a=a?this.positions[this.currPositionIndex]:
this.calculateContinuePosition(d);return d===f&&a<c||a>c}return!1};d.createPositionInfo=function(d){this.wordMap=d;d=this.currentRequest.direction;this.positions=[];for(var k in this.wordMap)this.positions.push(parseInt(k,10));this.positions.sort(function(a,d){return a-d});k=this.findPosition(this.currentRequest.position,d);this.hasReachedStopPosition(k)?this.currentRequestDfd.reject():k?(this.currentRequest=null,this.currentRequestDfd.resolve(!this.currentRequestReachedTerminal)):d===f&&this.startPositionIsLoaded()||
this.endPositionIsLoaded()?this.currentRequestReachedTerminal?this.currentRequestDfd.reject():(this.currentRequestReachedTerminal=d!==c,d=d===f?a:f,this.beginLoad(this.calculateContinuePosition(d),this.currentRequest.stopPosition,d)):this.beginLoad(this.calculateContinuePosition(d),this.currentRequest.stopPosition,d)};d.findPosition=function(a,d){this.currPositionIndex=KindleListUtilities.binarySearch(this.positions,a);return d===f?a>=this.positions[0]:(this.positions[this.currPositionIndex]<a&&++this.currPositionIndex,
this.currPositionIndex<this.positions.length)};d.beginLoad=function(a,d,c){var b=this;b.newRequest(a,d,c);a=KindleRendererFragmentLoader.getFragmentIdForPosition(a,c===f);KindleRendererFragmentLoader.getFragmentAtId(a,b.currentRequest).then(function(a,d){b.currentRequest&&b.currentRequest.requestId===a.requestId&&b.fragmentLoadedCallback(d)},function(){b.currentRequestDfd.reject()})};d.gotoPosition=function(a,d){this.newRequestDfd();if(this.currentRequest===null&&this.loadedRange!==null&&a>=this.loadedRange.startPosition&&
a<this.loadedRange.endPosition&&this.findPosition(a,c))return this.currentRequestDfd.resolve(!0),this.currentRequestDfd.promise();this.beginLoad(a,d,c);return this.currentRequestDfd.promise()};d.getItem=function(){if(this.currentRequest===null){var a=this.positions[this.currPositionIndex];return{pos:a,text:this.wordMap[a].text}}return null};d.previous=function(a){if(this.currPositionIndex===null||this.currentRequest!==null)return!1;this.currPositionIndex--;return this.currPositionIndex<0?(this.startPositionIsLoaded()?
(this.currPositionIndex=0,this.newRequestDfd(),this.currentRequestDfd.resolve(!1)):(this.newRequestDfd(),this.beginLoad(this.loadedRange.startPosition-1,a,f)),!1):!0};d.next=function(d){if(this.currPositionIndex===null||this.currentRequest!==null)return!1;this.currPositionIndex++;return this.currPositionIndex>=this.positions.length?(this.endPositionIsLoaded()?(this.currPositionIndex=this.positions.length-1,this.newRequestDfd(),this.currentRequestDfd.resolve(!1)):(this.newRequestDfd(),this.beginLoad(this.loadedRange.endPosition+
1,d,a)),!1):!0};d.getLoadingDfd=function(){return this.currentRequestDfd.promise()};d.startPositionIsLoaded=function(){return this.loadedRange.startPosition<=KindleRendererFragmentLoader.getMinimumPosition()};d.endPositionIsLoaded=function(){return this.loadedRange.endPosition>=KindleRendererFragmentLoader.getMaximumPosition()}}function h(a,e){a.getItem=function(){return e.getItem()};a.previous=function(a){return e.previous(a)};a.next=function(a){return e.next(a)};a.getLoadingDfd=function(){return e.getLoadingDfd()};
a.gotoPosition=function(a,d){var c=Math.max(a,KindleRendererFragmentLoader.getMinimumPosition()),c=Math.min(c,KindleRendererFragmentLoader.getMaximumPosition());return e.gotoPosition(c,d)};a.getText=function(a,d){var e=this,c=new jQuery.Deferred;e.gotoPosition(a).then(function(){g(e,d,"",c)},c.reject);return c.promise()};a.clear=function(){b(e)}}function b(a){a.currentRequest=null;a.currentRequestDfd=null;a.currentRequestReachedTerminal=null;a.loadedRange=null;a.wordMap=null;a.positions=null;a.currPositionIndex=
null}var c="goto",f="prev",a="next";return{build:function(){var a={};a.wordMapGenerator=KindleRendererWordMapGeneratorFactory.buildWordMapGeneratorForWordText();b(a);m(a);var e={};h(e,a);return e}}}(),KindleRendererCanvasInsertion=function(){function g(a,d){for(var e=a;e<d.length;e++){d[e].innerHTML="";d[e].width=0;for(var c=d[e].attributes.length;--c>=0;)d[e].removeAttribute(d[e].attributes[c].nodeName)}}function m(a,d,e,c){var j=d.getElementsByTagName("html")[0],l=d.getElementsByTagName("body")[0],
q=Array.prototype.slice.call(l.getElementsByClassName("k4wc"));if(q.length>0){j.removeChild(l);var o=q.length,p=KindleRendererDeviceSpecific.maximumCanvases();b[a]=0;var n=null;h[a]||(h[a]=[]);var s=function(e){e=q[e];if(b[a]>=p)if(e.parentNode.removeChild(e),e=parseInt(e.id,10),c){if(n===null||e>n)n=e}else{if(n===null||e<n)n=e}else{var r=f(a,d);r.id=e.id;r.setAttribute("height",e.getAttribute("height"));r.setAttribute("width",e.getAttribute("width"));r.setAttribute("data-nid",r.id);r.innerHTML=e.innerHTML;
e.parentNode.replaceChild(r,e)}},r;if(c)for(r=o-1;r>=0;r--)s(r);else for(r=0;r<o;r++)s(r);if(n!==null){o=KindleMetricsProfiler("remove-extra-canvases");if(c){if($(l).find("*").filter(function(){return parseInt(this.getAttribute("id"),10)<n}).remove(),e.startPosition<=n)e.startPosition=n+1}else if($(l).find("*").filter(function(){return parseInt(this.getAttribute("id"),10)>n}).remove(),e.endPosition>=n)e.endPosition=n-1;o.endTimer();o.log()}g(b[a],h[a]);j.appendChild(l)}}var h=[],b=[],c=0,f=function(){return(window.ActiveXObject||
"ActiveXObject"in window)&&window.XMLHttpRequest?function(a,d){return d.createElement("CANVAS")}:function(a,d){b[a]++;var e=b[a],k=h[a],j=null;e>k.length?(j=d.createElement("CANVAS"),c+=1,k[e-1]=j):j=k[e-1];return j}}();return{changeSpanToCanvas:function(a,d,e,c){m(a,d,e,c)},cleanup:function(){for(var a in h)for(var d=h[a],e=d.length,c=0;c<e;c+=1){var b=d[c],f=b.parentNode;f!==null&&f!==void 0&&f.removeChild(b)}h=null}}}(),KindleGlyphRenderer=function(){function g(a,d,e,c,k,b,j,f){d=d[c.imgSrc];if(e.getContext&&
d!==void 0){var n=new Image,l=c.o;l||(l=[0,0]);n.onload=function(){if(a===o){var d=l,c=e,w=c.getContext("2d"),n=d[0]*k/1440,d=d[1]*k/1440,C={x:n,y:d,w:this.width*b,h:this.height*b};j[c.id]||(j[c.id]=[]);c=j[c.id];c[c.length]=C;w.translate(n,d);w.scale(b,b);w.drawImage(this,0,0);w.scale(1/b,1/b);w.translate(-n,-d);e=null}setTimeout(f,25)};n.src=d;c=d=d=null}else setTimeout(f,10)}function m(a,d,e,c){if(d.getContext){var k=e.o;k||(k=[0,0]);var b=d.getContext("2d");b.translate(k[0]*c/1440,k[1]*c/1440);
b.fillStyle=h(d);for(var j,f,n,l,q,g=e.l.length,o=0;o<g;o++){a:{j=e.l[o][0];n=void 0;for(q=0;q<a.length;q+=1)if(n=a[q].glyphFragmentMetadata,j>=n.startingGlyph&&j<=n.endingGlyph){n=j-n.startingGlyph;j=a[q].glyphData[n];break a}j=null}if(j!==null){n=e.l[o][1]+e.p[0];l=e.l[o][2]+e.p[1];q=c/j.dpi;n=(n-e.p[0])*c/1440;l=(l-e.p[1])*c/1440;b.translate(n,l);b.scale(q,q);b.beginPath();for(var p=j.c.length,m=0;m<p;m++){var A=j.c[m];b.moveTo(A[0],A[1]);f=A.length-6;for(var G=2;G<f;G+=6)b.bezierCurveTo(A[G],
A[G+1],A[G+2],A[G+3],A[G+4],A[G+5]);f=A.length;b.bezierCurveTo(A[f-4],A[f-3],A[f-2],A[f-1],A[0],A[1])}b.closePath();b.fill();b.scale(1/q,1/q);b.translate(-n,-l)}}b.translate(-(k[0]*c/1440),-(k[1]*c/1440));if(d.parentNode.tagName==="A")b.strokeStyle=h(d),b.lineWidth=s.lineWidth,b.beginPath(),b.moveTo(0,d.height-1),b.lineTo(d.width,d.height-1),b.stroke(),b.closePath()}}function h(a){a=a.parentNode;return a.tagName==="A"?s.linkColor:(a=a.getAttribute("class"))&&a.indexOf("fixedOverlap")>=0?q:s.textColor}
function b(a){for(var a=a.getElementsByTagName("CANVAS"),d={},e=0;e<a.length;e+=1)d[a[e].id]=a[e];return d}function c(a,d,e,c,k,b){for(var j={},f=0;f<a.length;f+=1){var n=d[a[f].id];if(n)for(var l=0;l<n.length;l++){var q=k[n[l].id];if(q){var s=c,o=q.parentNode.getAttribute("class");if(o&&o.indexOf("fixed")>=0){var s=e,o=q,g=b;if(g[o.id])s=g[o.id];else{var p=o.getAttribute("height"),h=o.getAttribute("width"),m=0,F=0,I=1;if(p&&!(p<=0||!h||h<=0))p>s.height&&(m=s.height/p),h>s.width&&(F=s.width/h),m>
0&&F>0?I=m<F?m:F:m>0?I=m:F>0&&(I=F),g[o.id]=I;s=I}}if(s!==1&&!j[q.id])j[q.id]=1,q.width=Math.round(s*q.width),q.height=Math.round(s*q.height)}}}}function f(a,d,e,c,k,b,j,n,l,q,s){function h(){a===o?f(a,d,e+1,c,k,b,j,n,l,q,s):setTimeout(s,10)}for(var m=c.length;d<m;){var y=k[c[d].id];if(y)for(var M=y.length;e<M;){var A=y[e];if(A.imgSrc!==void 0){var G=n[A.id];if(G){m=l[G.id];m=m!==void 0?m:b;g(a,j,G,A,m*p,m,q,h);return}}e+=1}d+=1;e=0}setTimeout(s,10)}function a(a,d,e,c,k,b,j,n,l){f(a,0,0,d,e,c,k,b,
j,n,l)}function d(a,e,c,k,b,j,f,n,l,q,s){function g(){a===o?d(a,e,c+1,k,b,j,f,n,l,q,s):setTimeout(s,q.time)}var h=0,y=k.length;for(KindleRendererProcessTuning.startingOperation("GlyphRenderering");e<y;){var M=b[k[e].id];if(M)for(var A=M.length;c<A;){var G=M[c];if(G.l!==void 0&&G.l.length>0){var F=n[G.id];if(F){var I=l[F.id];m(f,F,G,(I!==void 0?I:j)*p);h+=1;if(h>=q.frequency){KindleRendererProcessTuning.endingOperation("GlyphRenderering",h);setTimeout(g,q.time);return}}}c+=1}e+=1;c=0}KindleRendererProcessTuning.endingOperation("GlyphRenderering",
h);setTimeout(s,q.time)}function e(a,e,c,k,b,j,f,n,l){d(a,0,0,e,c,k,b,j,f,n,l)}function k(d,k,j,f,l,q){var g={height:$(d).parent().height()*0.85,width:$(d).parent().width()*0.85},p=b(d.contentDocument),h=[],t=d.contentDocument.getElementsByTagName("html")[0],m=d.contentDocument.getElementsByTagName("body")[0],m=t.removeChild(m),E=$(m).find("p"),B={},y=l.createSubTimer("resizing-canvases");c(E,j.paraData,g,s.glyphScale,p,B);y.endTimer();y=l.createSubTimer("rendering-all-images");a(k.requestId,E,j.paraData,
s.glyphScale,j.imageData,p,B,h,function(){y.endTimer();if(!(o!==k.requestId||d.processingRequestId.id!==k.requestId)){y=l.createSubTimer("rendering-all-glyphs");var a={frequency:KindleRendererProcessTuning.drawYieldFrequency("GlyphRenderering"),time:KindleRendererProcessTuning.drawYieldUpdateTime("GlyphRenderering")};e(k.requestId,E,j.paraData,s.glyphScale,f,p,B,a,function(){y.endTimer();o!==k.requestId||d.processingRequestId.id!==k.requestId||(t.appendChild(m),n[d.id]=h,p=B=null,setTimeout(q,a.time))})}})}
function j(a,d,e,c){var b=new jQuery.Deferred;if(o===null||d.requestId>=o){o=d.requestId;var j=d.metrics.createSubTimer("glyph-rendering");k(a,d,e,c,j,function(){o===d.requestId&&a.processingRequestId.id===d.requestId&&(o=null,j.endTimer(),b.resolve())})}return b.promise()}function l(a){var d={r:parseInt(s.textColor.substring(1,3),16),g:parseInt(s.textColor.substring(3,5),16),b:parseInt(s.textColor.substring(5,7),16)},e=n[a.id];$(a.contentDocument).find("canvas").each(function(){var a=this.parentNode;
if(a.tagName!=="A"&&(a=a.getAttribute("class"),!a||a.indexOf("fixedOverlap")<0)){a=this.getContext("2d");try{var c=a.getImageData(0,0,this.width,this.height),k=this.width*this.height*4,b=e[this.id];if(b){for(var j=this.width,f=0,r=b.length,n=[];f<r;f+=1)for(var l=Math.floor(b[f].x),q=Math.floor(b[f].y),s=Math.ceil(b[f].w),o=Math.ceil(b[f].h),g=0;g<o;g+=1)for(var p=(j*(q+g)+l)*4,h=p+s*4;p<=h;p+=4)n[p]=1;for(var m=c.data,K=d.r,N=d.g,L=d.b,b=0;b<k;b+=4)m[b+3]>0&&!n[b]&&(m[b]=K,m[b+1]=N,m[b+2]=L)}else{n=
c.data;f=d.r;g=d.g;p=d.b;for(m=0;m<k;m+=4)n[m+3]>0&&(n[m]=f,n[m+1]=g,n[m+2]=p)}a.putImageData(c,0,0)}catch(Q){}}})}var q="#000000",o=null,p=100,n=[],s={glyphScale:1,textColor:q,linkColor:"#0000ff",lineWidth:1};return{renderAllContent:function(a,d,e,c){return j(a,d,e,c)},updateTextColor:function(a){l(a)},updateSettings:function(a){if(a.glyphScale!==void 0&&(s.glyphScale=a.glyphScale,s.glyphScale<0.75||s.glyphScale>3))s.glyphScale=Math.max(0.75,Math.min(3,s.glyphScale));if(a.fontColor!==void 0)s.textColor=
a.fontColor},clearIframeData:function(a){n&&n[a.id]!==null&&(n[a.id]=void 0)},cleanup:function(){n=null}}}(),KindleRendererContentFragmentation=function(){function g(a){a=$.extend(!0,{},a);if(!isFinite(a.startPosition)||!isFinite(a.endPosition))a.startPosition=0,a.endPosition=1E4;if(a.startPosition<0)a.startPosition=0;if(a.endPosition<0)a.endPosition=1E4;return a}function m(a){return!a||!a.requestData||a.requestData.cancelled===!0}function h(a,d){for(var e=Math.max(l[0].cPos,d.startPosition),c=Math.min(l[l.length-
1].ePos,d.endPosition),b=[],k=Infinity,j=-Infinity,f=0;f<l.length;f+=1)if(l[f].sId===a){var n=f===0?l[f].cPos:Math.min(l[f].cPos,l[f-1].ePos+1),q=l[f].ePos;if(!(q<e)){if(n>c)break;n<k&&(k=n);q>j&&(j=q);b.push(f)}}b[0]===1&&l[0].cPos===l[0].ePos&&l[0].cPos===l[1].cPos&&b.push(0);return{fragmentList:b,startPosition:k,endPosition:j}}function b(e,c){if(c!==null)c.skeletonData=e.skeletonData,c.resourceInfo=e.resourceInfo,f(e),c.fragmentLoadMetrics=c.overallLoadMetrics.createSubTimer("fragments"),q.getBookFragments(function(e){m(c)?
(c=null,k(e)):KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeOnContentReceived(),c.requestData.type,function(){var b=c;if(b===null||b.loadedFragments===null)k(e);else{b.numFragmentsLoaded+=1;var j=e.fragmentMetadata.id,f=l[j];if(e.wordList)for(var n in e.wordList)e.wordList[n]+=f.cPos;b.loadedFragments[j]=e;if(!(b.numFragmentsLoaded<b.fragmentsToLoad.length)&&(b.fragmentLoadMetrics.endTimer(),b!==null)){var q,f=b.loadedFragments,j={},o;for(o in f)if(n=f[o].imageRefs)for(var g in n)j[n[g]]=
!0;o=[];for(q in j)o.push(q);q=o=KindleRendererImageRenderer.resolveCompositeResources(o);q.length>0?d(q,b):a(b)}}})},function(){if(c!==null){var a=c.requestData;c.fragmentLoadMetrics.addCount("Failure",1);c.fragmentLoadMetrics.endTimer();var d=c.deferredResult;c.loadedFragments=null;c=c.glyphData=null;d.reject("Error trying to download file fragments.",a)}},c.fragmentsToLoad)}function c(a){if(a!==void 0&&a!==null&&a.length>0&&p>0){var d=[],e,c,b,k;o=[];c=Math.min(a.length,p);e=p-c;for(b=0;b<a.length&&
b<c;++b)k=a[b].glyphFragmentMetadata.id,d[k]=a[b],delete o[k];if(e>0)for(b in o)if(d[b]=o[b],--e===0)break;o=d}}function f(a){if(a.skeletonMetadata){var d=a.skeletonMetadata.id;n[d]===void 0&&(n={},n[d]=a)}}function a(a){function d(c){m(a)&&(a=null);KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeOnContentReceived(),a&&a.requestData.type,function(){var d=a;d===null||d.glyphData===null?(c.glyphData=null,c.glyphFragmentMetadata=null):(d.glyphChunkLoadCnt+=1,d.glyphData.push(c),
d.glyphChunkLoadCnt<d.glyphChunksToDownload.length||(d.glyphLoadMetrics.endTimer(),e(d)))})}function c(){if(a!==null&&a.glyphData!==null){var d=a.requestData,e=a.deferredResult;a.glyphLoadMetrics.addCount("Failure",1);a.glyphLoadMetrics.endTimer();a=a.glyphData=null;e.reject("Error trying to download glyph chunks.",d)}}if(a!==null){var b,k=[],f=[],n;for(n in a.loadedFragments)if(b=j(parseInt(n,10)),b.gCks)for(var l=0;l<b.gCks.length;l+=1)$.inArray(b.gCks[l],f)===-1&&f.push(b.gCks[l]);b=[];for(n=0;n<
f.length;n+=1)l=f[n],o[l]===void 0?b.push(l):k.push(o[l]);a.glyphData=k;b.length>0?(k=a.overallLoadMetrics.createSubTimer("glyph-loading"),k.addCount("NumGlyphCunks",b.length),a.glyphChunkLoadCnt=0,a.glyphChunksToDownload=b,a.glyphLoadMetrics=k,q.getGlyphFragments(d,c,b,a)):e(a)}}function d(d,e){var c=e.overallLoadMetrics.createSubTimer("resources");e.fragmentResources={};e.fragmentResourceLoadCnt=0;e.fragmentResourceToDownload=d;e.fragmentResourceLoadMetrics=c;q.getResourceUrls(function(d){m(e)&&
(e=null);KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeOnContentReceived(),e&&e.requestData.type,function(){var c=e;c!==null&&(c.fragmentResourceLoadCnt+=1,jQuery.extend(c.fragmentResources,d),c.fragmentResourceLoadCnt<c.fragmentResourceToDownload.length||(c.fragmentResourceLoadMetrics.endTimer(),a(c)))})},function(){if(e!==null){var a=e.requestData,d=e.deferredResult;e.fragmentResourceLoadMetrics.addCount("Failure",1);e.fragmentResourceLoadMetrics.endTimer();e=null;
d.reject("Error trying to download fragment resources.",a)}},d)}function e(a){if(!(a===null||a.loadedFragments===null)){c(a.glyphData);var d,e;for(e in a.loadedFragments)if(a.loadedFragments[e].fragmentMetadata.lId===void 0)d=j(parseInt(e,10)),a.loadedFragments[e].fragmentMetadata.lId=d.lId,a.loadedFragments[e].fragmentMetadata.lt=d.lt,a.loadedFragments[e].fragmentMetadata.nOff=d.off;d=null;var b=a.deferredResult,k=a.requestData,f={};f.skeletonData=a.skeletonData;f.resourceInfo=a.resourceInfo;f.glyphData=
a.glyphData;f.fragmentResources=a.fragmentResources;f.contentRange={skeletonId:a.skeletonId,startPosition:a.fragmentsStartPosition,endPosition:a.fragmentsEndPosition};f.fragmentData=a.loadedFragments;var n=a.overallLoadMetrics;a.glyphData=null;a.fragmentResources=null;var a=a.loadedFragments=null,l=n.createSubTimer("(YIELD) finish-content-fetch");setTimeout(function(){l.endTimer();n.endTimer();b.resolve(k,f);f=k=null},KindleRendererDeviceSpecific.drawYieldUpdateTime())}}function k(a){a.fragmentData=
null;a.fragmentMetadata=null;a.paraData=null}function j(a){return l[a]}var l=null,q=null,o=[],p,n={};return{initialize:function(a){o=[];p=KindleRendererDeviceSpecific.glyphCacheMaxSize();n={};q=a;var d=new jQuery.Deferred;q.getFragmentMap(function(a){l=a.fragmentArray;q.getManifest?q.getManifest(function(e){KindleRendererImageRenderer.initialize(e);d.resolve(a,e)},function(){d.resolve(a,null)}):d.resolve(a)},function(){d.reject()});return d.promise()},cleanup:function(){q=l=null;o=[];n={};KindleRendererImageRenderer.cleanup()},
loadNextFragmentGroup:function(d,e,c){function k(a){m(t)?t=null:(p.endTimer(),b(a,t))}function f(){if(t!==null){var a=t.requestData;t.fragmentLoadMetrics.addCount("Failure",1);t.fragmentLoadMetrics.endTimer();t=null;l.reject("Error trying to download skeleton.",a)}}function j(){J.endTimer();m(t)?t=null:(p=t.overallLoadMetrics.createSubTimer("skeletons"),n[d]!==void 0?k(n[d]):q.getBookSkeleton(k,f,d))}var l=new jQuery.Deferred,e=g(e),o=c.metrics.createSubTimer("content-fetch"),p,e=h(d,e),e=g(e),H=
e.fragmentList.slice(),t={deferredResult:l,skeletonId:d,fragmentsStartPosition:e.startPosition,fragmentsEndPosition:e.endPosition,overallLoadMetrics:o,loadedFragments:{},fragmentsToLoad:H,numFragmentsLoaded:0,requestData:c},J=o.createSubTimer("(YIELD) begin-content-fetch");H.length===0?a(t):setTimeout(j,KindleRendererDeviceSpecific.drawYieldUpdateTime());return l.promise()},isContentRangeLoaded:function(a,d,e,c){if(a===null||a===void 0||!d||e===null||e===void 0||!c)return!1;if(a!==e)return!1;d=g(d);
c=g(c);a=h(a,d);e=h(e,c);if(e.fragmentList.length>a.fragmentList.length)return!1;for(c=0;c<e.fragmentList.length;++c)if(a.fragmentList.indexOf(e.fragmentList[c])===-1)return!1;return!0}}}(),KindleRendererFragmentLoader=function(){function g(a){for(var e=0;e<c.length;e++){var b=c[e];if(b.start<=a&&a<=b.end)return e}return 0}function m(d){a=d;var e=new jQuery.Deferred;KindleRendererContentFragmentation.initialize(a).then(function(a){var d=[],l,q=a.fragmentArray;for(l=0;l<q.length;l+=1){var o=q[l].sId,
g=l===0?q[l].cPos:Math.min(q[l].cPos,q[l-1].ePos+1),n=q[l].ePos,s=d[o];if(s===void 0)d[o]={start:g,end:n};else{if(g<s.start)s.start=g;if(n>s.end)s.end=n}}if(a.skeletonMap!==void 0)for(l=0;l<a.skeletonMap.length;++l)if(d[l])d[l].properties=a.skeletonMap[l].properties;c=d;b=a.fragmentArray;f=a.fragmentMetadata.bookType;e.resolve()},e.reject);return e.promise()}function h(d,e,c){a.getBookFragments(function(a){KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeOnContentReceived(),
e.type,function(){var d=a.fragmentMetadata.id,f=b[d],o,g;o=a.fragmentMetadata.lId===void 0||a.fragmentMetadata.lId===null?f.lId:a.fragmentMetadata.lId;g=a.fragmentMetadata.nOff===void 0||a.fragmentMetadata.nOff===null?f.off:a.fragmentMetadata.nOff;var n=document.createElement("DIV");n.id=o;n.setAttribute("data-nid",o);n.innerHTML=a.fragmentData;o=n.childNodes;for(var s=o.length,r=0;r<s;r+=1)o[r].ownChildIndex=g+r;c.resolve(e,{id:d,contentRange:{startPosition:f.cPos,endPosition:f.ePos},fragmentRoot:n,
positionData:{posMap:a.posMap}})})},function(){c.reject("Error trying to download file fragments ID : ",d)},[d])}var b=null,c=null,f=!1,a=null;return{initialize:function(a){return m(a)},cleanup:function(){KindleRendererContentFragmentation.cleanup();c=b=null;f=!1},loadFragments:function(a,e){var c=g(a.focus);return KindleRendererContentFragmentation.loadNextFragmentGroup(c,a,e)},getFragmentAtId:function(d,e){var c=new jQuery.Deferred;a?h(d,e,c):c.reject();return c.promise()},getFragmentIdForPosition:function(a,
e){var c;a:{for(var f=0;f<b.length-1;++f)if(c=e?b[f+1].cPos-1:b[f].ePos,a<=c){c=f;break a}c=b.length-1}return c},needToLoadFragments:function(a,e){var c;if(!a||!e)c=!0;else{c=g(a.startPosition);var b=g(e.focus);c=!KindleRendererContentFragmentation.isContentRangeLoaded(c,a,b,e)}return c},getMaximumPosition:function(){return b[b.length-1].ePos},getMinimumPosition:function(){return b[0].cPos},isPositionAtBeginningOfSkeletonOrDocument:function(a,e){return e<=b[0].cPos||e===c[a].start},isPositionAtEndOfSkeletonOrDocument:function(a,
e){return e>=b[b.length-1].ePos||e===c[a].end},getBookContentType:function(){return f},getSkeletonForPosition:function(a){return g(a)},getSkeletonRange:function(a){return{start:c[a].start,end:c[a].end}},getGroupInfo:function(a){if(c[a].properties&&c[a].properties.group)return c[a].properties.group;var e=a%2===0?a+1:a-1;return e<0||e>=this.getNumSkeletons()||c[e].properties&&c[e].properties.group?{start:a,length:1,spine:!0}:{start:Math.min(a,e),length:2,spine:!0}},isBlankPage:function(a){return!c[a].properties?
!1:c[a].properties.blank===!0},getNumSkeletons:function(){return c.length},getFragmentMap:function(){}}}(),KindleRendererPositionLoadingCalculator=function(){function g(){if(f>0)return f;var a,d;d=KindleRendererSettings.getSettings();if(KindleRendererFragmentLoader.getBookContentType()==="topaz")a=h.width/(25*d.glyphScale),d=h.height/(25*d.glyphScale);else{var e=d.fontSizes[m];a=h.width/(e*0.4);d=h.height/(e*d.lineSpacingMultiplier)}return Math.round(a*d)}var m=2,h={height:1,width:1},b=0,c=[],f=0;
return{updateScreenDimensions:function(a,d){h.width=a;h.height=d;f=_displayedScreenCount=_logSumPositionsDisplayed=0},updateDisplayedPositionRange:function(a){a>0&&(c[b]=a,b=(b+1)%10,f=0,f=Math.max.apply(Math,c))},calculateDesiredFragmentRangeForPageFlip:function(a,d){var e=KindleRendererFragmentLoader.getBookContentType()==="topaz",c=KindleRendererDeviceSpecific.fragmentBufferCapacityForPageFlip(e),b=g();c*=b;var f=Math.ceil(c*0.25),q=Math.ceil(c*0.75),c=KindleRendererFragmentLoader.getMinimumPosition(),
o=KindleRendererFragmentLoader.getMaximumPosition(),f=Math.max(c,a-f),q=Math.min(o,a+q),p=d.currentTopOfPage,n=d.currentBottomOfPage;e?(f=Math.min(f,Math.max(c,p-1)),q=Math.max(q,Math.min(o,n+1))):a<p&&p-a<3*b?q=Math.min(o,n+1):a>n&&a-n<3*b&&(f=Math.max(c,p-1));return{focus:a,startPosition:f,endPosition:q}},calculateDesiredFragmentRangeForGoTo:function(a){var d=g()*KindleRendererDeviceSpecific.fragmentBufferCapacityForGoTo(),e=Math.ceil(d*0.1),d=Math.ceil(d),c=KindleRendererFragmentLoader.getMinimumPosition(),
b=KindleRendererFragmentLoader.getMaximumPosition();return{focus:a,startPosition:Math.max(c,a-e),endPosition:Math.min(b,Math.max(c+d,a+d))}}}}(),KindleRendererRequestId=function(){var g=0;return{getUniqueRequestId:function(){g+=1;return g}}}(),KindleRendererIframeLoading=function(){function g(){window.focus()}function m(a){a.ctrlKey&&a.preventDefault();switch(a.which){case 219:case 221:a.shiftKey||a.preventDefault();break;case 37:case 38:case 33:case 39:case 40:case 34:case 32:case 8:a.preventDefault()}}
function h(a,d){var e=d.ownerDocument.createEvent("CustomEvent");e.initCustomEvent(a.type,!0,!0,a);d.dispatchEvent(e)}function b(a,d){var e=d.ownerDocument.createEvent("MSPointerEvent");e.initPointerEvent(a.type,!0,!0,window.parent,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null,a.offsetX,a.offsetY,a.width,a.height,a.pressure,a.rotation,a.tiltX,a.tiltY,a.pointerId,a.pointerType,a.hwTimestamp,a.isPrimary);d.dispatchEvent(e)}function c(a,d){var e;
a.type==="mousewheel"?(a.preventDefault(),e=d.ownerDocument.createEvent("WheelEvent"),e.initWheelEvent(a.type,!0,!0,window.parent,-1*a.wheelDelta,a.screenX,a.screenY,a.clientX,a.clientY,a.button,null,null,a.deltaX,a.deltaY,a.deltaZ,a.deltaMode)):(e=d.ownerDocument.createEvent("MouseEvent"),e.initMouseEvent(a.type,!0,!0,window.parent,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null));d.dispatchEvent(e)}function f(a){var d=a.contentDocument.getElementsByTagName("body")[0];
d.className+=" amzUserPref";var e=a.contentDocument.getElementsByTagName("head")[0];KindleRendererDefaults.addCSSRules(e,KindleRendererFragmentLoader.getBookContentType());KindleRendererSettings.addCSSRules(a.contentDocument,e);KindleRendererContentScripts.addInterfaceScripts(a);d.onmousewheel=function(d){c(d,a);return!1};a.contentWindow.onkeydown=function(d){m(d);h(d,a)};a.contentWindow.onkeyup=function(d){m(d);h(d,a)};a.contentWindow.onkeypress=function(d){m(d);h(d,a)};if(KindleRendererSettings.useNativeSelection()){if(window.navigator.msPointerEnabled)d.onmspointerdown=
function(d){b(d,a)},d.onmspointerup=function(d){b(d,a)},d.onmspointermove=function(d){b(d,a)},d.onmspointerout=function(d){b(d,a)},d.onmspointercancel=function(d){b(d,a)},d.onmspointerover=function(d){b(d,a)},d.onmspointerhover=function(d){b(d,a)},d.addEventListener("MSGestureHold",function(a){a.preventDefault()},!1);d.oncontextmenu=function(d){b(d,a);d.preventDefault()};d.onclick=function(d){c(d,a)};d.ondblclick=function(d){c(d,a)};d.onmousedown=function(d){c(d,a)};d.onmouseup=function(d){c(d,a)};
d.onmousemove=function(d){c(d,a)};d.onmouseover=function(d){c(d,a)};d.onmouseout=function(d){c(d,a)}}else a.contentWindow.onfocus=g,a.contentWindow.onclick=g,d.onselectstart=function(){return!1}}function a(a){if(a=a.getElementsByTagName("body")[0])for(;a.hasChildNodes();)a.removeChild(a.lastChild)}function d(a,e){if(a&&a.nodeType===Node.ELEMENT_NODE){var c=a.getAttribute("data-nid");c!==null&&(e[c]={linkNode:a,typeArray:[a.firstChild,a.nextSibling]});for(var c=a.childNodes,b=c.length,f=0;f<b;f+=1)d(c[f],
e)}}function e(a){var e={};try{if((window.ActiveXObject||"ActiveXObject"in window)&&window.XMLHttpRequest)d(a.contentDocument.body,e);else for(var c=(new XPathEvaluator).evaluate("//*[@data-nid]",a.contentDocument,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null),b=c.iterateNext();b;){var f=b.getAttribute("data-nid");e[f]={linkNode:b,typeArray:[b.firstChild,b.nextSibling]};b=c.iterateNext()}}catch(k){d(a.contentDocument.body,e)}return e}function k(a){var d=[],e;for(e in a)d.push(parseInt(e,10));
d.sort(function(a,d){return a-d});return d}function j(a,d,e,c){function b(){if(I!==null)F.insertBefore(I,K),I=null,A.lId=null,A.lt=-1}function f(){l=e.fragmentData[N[L]];q=l.fragmentMetadata;if(A.lId!==q.lId||A.lt!==q.lt){b();A.lId=q.lId;A.lt=q.lt;G=d[q.lId];if(G===void 0){var k=d,O=q.lId,P=a.contentDocument.getElementById(O);k[O]={linkNode:P,typeArray:[P.firstChild,P.nextSibling]};G=d[q.lId]}I=q.lt===0?G.linkNode:G.linkNode.parentNode;F=I.parentNode;K=I.nextSibling;I=F.removeChild(I)}M=a.contentDocument.createElement(I.tagName);
M.innerHTML=l.fragmentData;k=e.fragmentResources;O=l.resList===void 0?l.imageData:l.resList;if(k||O)for(var P=$(M).find("img"),T=0,U=0;U<P.length;U+=1){T=P[U].getAttribute("dataUrl");if(T===void 0||T===null)T=P[U].getAttribute("src");KindleRendererImageRenderer.loadImage(P[U],k,O,T)}for(k=q.nOff;M.hasChildNodes();){O=M.removeChild(M.firstChild);if(O.nodeType===Node.TEXT_NODE)O.ownChildIndex=k;I.insertBefore(O,G.typeArray[q.lt]);k+=1}if(l.posMap!==void 0){p=!0;for(var R in l.posMap)o[R]=l.posMap[R]}l.wordList!==
void 0&&(h=!0,g=g.concat(l.wordList));if(l.paraIds!==void 0&&l.paraIds!==null){y=!0;for(R=0;R<l.paraIds.length;R+=1)m[l.paraIds[R]]=l.paraData[R];for(var S in l.imageData)B[S]=l.imageData[S]}l.fragmentData=null;l.imageData=null;l.paraData=null;L+=1;if(L<N.length)L%50===49?setTimeout(f,0):KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeLoadNextFragment(),c.type,f);else{b();K=I=F=l=null;S={positionData:{}};if(p)S.positionData.posMap=o;if(h)S.positionData.wordList=g;if(y)S.glyphData=
{paraData:m,imageData:B};j.resolve(S)}}var j=$.Deferred(),l,q,o={},g=[],p=!1,h=!1,m={},B={},y=!1,M=null,A={lId:null,lt:-1},G=null,F=null,I=null,K=null,N=k(e.fragmentData),L=0;KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeLoadNextFragment(),c.type,f);return j.promise()}function l(a,d,e){KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeBeforeBulkWriteToIframe(),e.type,function(){KindleHostDeviceDetector.isFirefox&&KindleHostDeviceDetector.isFirefox()||
KindleHostDeviceDetector.isMSEdge&&KindleHostDeviceDetector.isMSEdge()?d.open("text/html","replace"):d.open();d.write(a);KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeAfterBulkWriteToIframe(),e.type,function(){d.close()})})}function q(a){a=a.replace(/-webkit-writing-mode\s*:\s*([a-z\-]+)/g,"writing-mode: $1; $&");a=a.replace(/-webkit-text-combine\s*:\s*horizontal/g,"text-combine-upright: all; $&");a=a.replace(/-webkit-text-emphasis\s*:\s*([a-z\-]+)/g,"text-emphasis: $1; $&");
a=a.replace(/-webkit-text-emphasis-color\s*:\s*([a-z\-]+)/g,"text-emphasis-color: $1; $&");a=a.replace(/-webkit-text-emphasis-style\s*:\s*([a-z\-\s]+)/g,"text-emphasis-style: $1; $&");return a=a.replace(/:first-letter/g,":-disabled-first-letter")}function o(d,e,c,b){if(d.processingRequestId.id===e.requestId){c.skeletonData=q(c.skeletonData);var k=d.contentDocument;d.screenManager=null;a(k);KindleGlyphRenderer.clearIframeData(d);d.onload=function(){KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeAfterIframeLoaded(),
e.type,function(){if(d.processingRequestId.id===e.requestId){d.onload=null;var a=KindleRendererSettings.getSettings(),k=$(d).parent(),k={height:k.height(),width:k.width()},j=e.contentLoadMetrics.createSubTimer("css-style-sanitization");KindleRendererContentStyleSanitization.sanitizeCSS(d.contentDocument,a,k);j.endTimer();f(d);d.writingMode=KindleRendererWritingModeFactory.buildIFrameWritingMode(d);d.writingMode.resetIframeDimensions(d);p(d,e,c,b)}})};l(c.skeletonData,k,e)}}function p(a,d,c,b){function k(a){b.reject(d,
a)}var f=e(a),l=d.contentLoadMetrics.createSubTimer("fragment-loading"),q;try{q=j(a,f,c,d)}catch(o){k(o);return}q.then(function(e){l.endTimer();var c=KindleRendererSettings.getSettings(),f=$(a).parent(),f={height:f.height(),width:f.width()},j=d.contentLoadMetrics.createSubTimer("node-style-sanitization");KindleRendererContentStyleSanitization.sanitizeContent(a.contentDocument,c,f).then(function(){j.endTimer();b.resolve(d,e)},k)},k)}return{loadIframe:function(a,d,e){var c=new jQuery.Deferred;a.processingRequestId.id===
d.requestId?o(a,d,e,c):c.reject();return c.promise()},copyIframeContents:function(d,e,c){function b(){KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeAfterIframeLoaded(),d.type,function(){if(c.processingRequestId.id===d.requestId)f(c),KindleRendererContentStyleSanitization.copySanitizationData(e.contentDocument,c.contentDocument),KindlePaginator.copyIframe(e,c),c.onload=null,c.writingMode.prepareForPagination(c),k.resolve(d)})}var k=new jQuery.Deferred,j,q;c.processingRequestId.id===
d.requestId?(q=e.contentDocument.getElementsByTagName("html")[0],a(c.contentDocument),c.writingMode.resetHeight(c),c.onload=b,j=q.outerHTML,j===void 0&&(j="<html>"+q.innerHTML+"</html>"),l(j,c.contentDocument,d)):k.reject();return k.promise()},cleanupIframe:function(d){a(d.contentDocument)},updateSettingsInIframe:function(a){if(a&&a.contentDocument){var d=a.contentDocument.getElementsByTagName("head")[0];if(d){KindleRendererSettings.addCSSRules(a.contentDocument,d);var d=KindleRendererSettings.getSettings(),
e={height:$(a).parent().height(),width:$(a).parent().width()},c=KindleMetricsProfiler("style-sanitization");KindleRendererContentStyleSanitization.sanitizeCSS(a.contentDocument,d,e);KindleRendererContentStyleSanitization.sanitizeContent(a.contentDocument,d,e);c.endTimer()}}}}}(),KindleRendererIframeManagerFactory=function(){function g(b){b.cancelCurrentRequest=function(){if(this.currentRequest)this.currentRequest.cancelled=!0,this.currentRequest=null};b.createNewRequest=function(a,d){this.cancelCurrentRequest();
this.currentRequest={type:a,requestId:KindleRendererRequestId.getUniqueRequestId(),metrics:KindleMetricsProfiler("iframe-load"),retryCount:0,initialPosition:d};this.currentRequestDfd=new jQuery.Deferred};b.willRetryCurrentRequest=function(){this.currentRequest&&this.currentRequest.retryCount++};b.canRetryCurrentRequest=function(){return this.currentRequest?this.currentRequest.retryCount<d:!0};b.getCurrentProcessDfd=function(){return this.currentRequestDfd.promise()};b.getCurrentProcessId=function(){return this.currentRequest.requestId};
b.createIframe=function(a,d,c){var b=document.createElement("iframe");b.writingMode=KindleRendererWritingModeFactory.buildIFrameWritingMode(b);b.index=c;b.processingRequestId={};b.computingRectsId={};b.setAttribute("frameBorder","0");b.setAttribute("id",d+"_frame_"+c);b.setAttribute("name","book_iframe_"+c);b.setAttribute("scrolling","no");b.setAttribute("tabindex",-1);$(b).css({height:"100%",width:a+"px",position:"absolute","margin-top":"0px",left:"0px",visibility:"hidden","z-index":e});return b};
b.setIframeVisibility=function(a,d){if(this.showContent||!d)if(d){if($(a).css({visibility:"visible","z-index":0,"margin-top":"0px"}),$(a.pageOverflowDiv).css({visibility:"visible","z-index":0}),KindleHostDeviceDetector.hasImageRenderingProblem&&KindleHostDeviceDetector.hasImageRenderingProblem()){var c=a.contentDocument.querySelector("img[data-repaint-on-show]");if(c){var b=function(){c.style.borderColor="#FFF"};setTimeout(b,1);setTimeout(b,1500)}}}else $(a).css({visibility:"hidden","z-index":e,"margin-top":k+
"px"}),$(a.pageOverflowDiv).css({visibility:"hidden","z-index":e})};b.calculateIframePaginationData=function(d,e,c){var b=this,k=KindleRendererFragmentLoader.getBookContentType()==="topaz"?b.currentRequest.type===b.loadedType.PREVIOUS?KindleRendererIframePreparation.CANVAS_INSERTION_PREVIOUS:KindleRendererIframePreparation.CANVAS_INSERTION_NEXT:KindleRendererIframePreparation.CANVAS_INSERTION_NONE;KindleRendererIframePreparation.prepareIframe(d,b.currentRequest,e,c,k).then(function(a){if(d.processingRequestId.id===
a.requestId&&b.currentRequest&&b.currentRequest.requestId===a.requestId)d.processingRequestId.id=null,b.frameIsLoadedAndReady(d);b=null},function(d){b.currentRequest&&b.currentRequest.requestId===d.requestId&&b.currentRequestDfd.reject(a);b=null})};b.loadContentDataIntoIframe=function(a){var d=this;d.currentRequest.contentLoadMetrics=d.currentRequest.metrics.createSubTimer("content-load");var e=d.getIframeToLoad();if(e)d.contentRange[e.index]=a.contentRange,e.processingRequestId.id=d.currentRequest.requestId,
e.computingRectsId.id=null,KindleRendererIframeLoading.loadIframe(e,d.currentRequest,a).then(function(c,b){if(e.processingRequestId.id===c.requestId&&d.currentRequest&&d.currentRequest.requestId===c.requestId)d.positionData[e.index]=b.positionData,d.calculateIframePaginationData(e,a,b);d=null},function(a){d.currentRequest&&d.currentRequest.requestId===a.requestId&&d.currentRequestDfd.reject(f);d=null})};b.loadFragmentsForRange=function(a){var d=this;KindleRendererFragmentLoader.loadFragments(a,d.currentRequest).then(function(a,
e){d.currentRequest&&d.currentRequest.requestId===a.requestId&&d.loadContentDataIntoIframe(e);d=null},function(a,e){d.currentRequest&&d.currentRequest.requestId===e.requestId&&d.currentRequestDfd.reject(c);d=null})};b.resizeWithoutReload=function(d){var e=this,c=this.iframes[d];c.processingRequestId.id=this.currentRequest.requestId;e.setIframeVisibility(c,!1);e.currentRequest.contentLoadMetrics=e.currentRequest.metrics.createSubTimer("content-load");KindleRendererContentReflow.reflow(c,this.currentRequest,
this.positionData[d]).then(function(){e.currentRequest&&e.currentRequest.requestId===c.processingRequestId.id&&(e.frameIsLoadedAndReady(c),e.setIframeVisibility(c,c.index===e.visibleIframeIndex));e=null},function(){e.currentRequest&&e.currentRequest.requestId===c.processingRequestId.id&&(e.setIframeVisibility(c,c.index===e.visibleIframeIndex),e.currentRequestDfd.reject(a));e=null})};b.setCanPreloadNext=function(a){this.canPreloadNext=a};b.setCanPreloadPrevious=function(a){this.canPreloadPrevious=
a};b.getIframeOrigin=function(a){a=$(this.iframes[a]);return{x:parseInt(a.css("left"),10),y:parseInt(a.css("top"),10)}};b.getBoundsWithOffset=function(a,d){if(a.getBoundingClientRect){var e=a.getBoundingClientRect();if(e)return{top:e.top+d.y,right:e.right+d.x,bottom:e.bottom+d.y,left:e.left+d.x,width:e.width,height:e.height}}return null}}function m(a,d){a.gotoPosition=function(a,e){return d.gotoPosition(a,e)};a.nextScreen=function(){return d.nextScreen()};a.previousScreen=function(){return d.previousScreen()};
a.copyIframeData=function(a){return d.copyIframeData(a.internal)};a.hasNextScreen=function(){return d.hasNextScreen()};a.hasPreviousScreen=function(){return d.hasPreviousScreen()};a.getPagePositionRange=function(){return d.getPagePositionRange()};a.getCurrentPosition=function(){return d.getCurrentPosition()};a.getSelectableItemBoundaries=function(){return d.getSelectableItemBoundaries()};a.getWordPositions=function(){return d.getWordPositions()};a.reloadAnnotations=function(){d.reloadAnnotations()};
a.updateGlyphColor=function(){d.updateGlyphColor()};a.handleClick=function(a,e){return d.handleClick(a,e)};a.cleanup=function(){d.cleanup()};a.updateSettings=function(a){d.updateSettings(a)};a.reloadNotification=function(){d.reloadNotification()};a.resizeNotification=function(){d.resizeNotification()};a.setAnnotationEventCallback=function(a){d.setAnnotationEventCallback(a)};a.getCurrentProcessDfd=function(){return d.getCurrentProcessDfd()};a.getComputedRectsDfd=function(){return d.getComputedRectsDfd()};
a.getCurrentProcessId=function(){return d.getCurrentProcessId()};a.show=function(){d.show()};a.hide=function(){d.hide()};a.getContentRects=function(){return d.getContentRects()};a.getZoomableAt=function(a,e,c){return d.getZoomableAt(a,e,c)};a.getZoomableList=function(a){return d.getZoomableList(a)};a.setOverlayManager=function(a){d.setOverlayManager(a)};a.setCanPreloadPrevious=function(a){d.setCanPreloadPrevious(a)};a.setCanPreloadNext=function(a){d.setCanPreloadNext(a)};a.drawWordMap=function(){d.drawWordMap()};
a.drawHeightMaps=function(){d.drawHeightMaps()};a.clearSelection=function(){d.clearSelection()};a.getSelection=function(){return d.getSelection()}}function h(a){a.showContent=!0;a.canPreloadNext=!0;a.canPreloadPrevious=!0}var b=0,c=b++,f=b++,a=b++,d=5,e=-1E3,k=1E4;return{DATA_LOAD_ERROR:c,IFRAME_ERROR_LOADING:f,IFRAME_ERROR_PAGINATING:a,build:function(a){if(KindleRendererSettings.useCSSRegions()){var d={};h(d,a);g(d);KindleRegionIframeManager.build(d,a);a={internal:d}}else KindleRendererSettings.getSettings().fixedContent?
(d={},h(d,a),g(d),KindleRendererIframeManagerFixedFactory.build(d,a),a={}):(d={},h(d,a),g(d),KindleRendererIframeManagerReflowFactory.build(d,a),a={internal:d});m(a,d);return a}}}(),KindleRendererIframeManagerFixedFactory=function(){function g(g){g.findNextNonBlankPage=function(b,c){var f=this.findNextNonBlankPageInDirection(b,c);f===null&&(f=this.findNextNonBlankPageInDirection(b,!c));return f};g.findNextNonBlankPageInDirection=function(b,c){for(var f=b,a=KindleRendererFragmentLoader.getNumSkeletons();f>=
0&&f<a;){if(KindleRendererFragmentLoader.isBlankPage(f)===!1)return f;c?f+=1:f-=1}return null};g.getNeededSkeletonsFrom=function(b,c){for(var f=this.getSkeletonsToShowWith(b,c),a=0;a<f.length;a++)if(KindleRendererFragmentLoader.isBlankPage(f[a])===!1)return f;a=this.findNextNonBlankPage(c?Math.max.apply(Math,f)+1:Math.min.apply(Math,f)-1,c);return a===null?f:this.getSkeletonsToShowWith(a,c)};g.addSkeletonRangeToList=function(b,c,f){for(var a=0;a<f;a+=1)b.push(c+a)};g.getSkeletonsToShowWith=function(b,
c){var f=KindleRendererFragmentLoader.getGroupInfo(b);if(f.length>this.numberOfColumns){var a=[];this.addSkeletonRangeToList(a,b,Math.min(this.numberOfColumns,f.length-(b-f.start)));return a}return this.getGroupsToFillScreen(f,c)};g.getGroupsToFillScreen=function(b,c){var f=[];this.addSkeletonRangeToList(f,b.start,b.length);var a;a=c?b.start+b.length:b.start-1;for(var d=KindleRendererFragmentLoader.getNumSkeletons();f.length<this.numberOfColumns&&a>=0&&a<d;){var e=KindleRendererFragmentLoader.getGroupInfo(a);
if(f.length+e.length<=this.numberOfColumns)this.addSkeletonRangeToList(f,a,e.length);else break;c?a+=e.length:a-=e.length}return f};g.getNeededSkeletonsForGoTo=function(b){return this.getNeededSkeletonsFrom(KindleRendererFragmentLoader.getSkeletonForPosition(b),!0)};g.getNeededSkeletonsForPageFlip=function(b){var c=this.getCurrentlyVisibleSkeletons();return b>0?(b=Math.max.apply(Math,c),b=Math.min(b+1,KindleRendererFragmentLoader.getNumSkeletons()),this.getNeededSkeletonsFrom(b,!0)):(b=Math.min.apply(Math,
c),b=Math.max(b-1,0),this.getNeededSkeletonsFrom(b,!1))};g.clearCacheReservations=function(){for(var b=this.iframeStatus.length,c=0;c<b;c++)if(this.iframeStatus[c]===this.statusType.RESERVED)this.iframeStatus[c]=this.statusType.AVAILABLE};g.getLoadedSkeletons=function(){for(var b={},c=this.contentRange.length,f=0;f<c;f++)this.contentRange[f]&&this.iframes[f].processingRequestId.id===null&&(b[this.contentRange[f].skeletonId]=f);return b};g.reserveSkeletonsInCache=function(b){this.clearCacheReservations();
for(var c=this.getLoadedSkeletons(),f=[],a=0;a<b.length;a++){var d=b[a],e=c[d];if(e===void 0)f.push(d);else if(this.iframeStatus[e]===this.statusType.AVAILABLE)this.iframeStatus[e]=this.statusType.RESERVED}return f};g.getIndicesToShow=function(b){for(var c=this.getLoadedSkeletons(),f=[],a=0;a<b.length;a++)f.push(c[b[a]]);return f};g.shouldShowSpineAfterSkeleton=function(b){var b=this.contentRange[b].skeletonId,c=KindleRendererFragmentLoader.getGroupInfo(b),f=c.start+c.length-1;return c.spine||b===
f?!0:!1};g.getSpineCountForIndicies=function(b){var c=0;for(i=0;i<b.length-1;i++)this.shouldShowSpineAfterSkeleton(b[i])&&c++;return c};g.prepareSpine=function(){var b={position:"absolute",visibility:"visible","background-color":this.spineColor,"z-index":m},c=this.getAvailableSpine();$(c).css(b);return c};g.getAvailableSpine=function(){for(i=0;i<this.spines.length;i++)if(this.spines[i].status===this.statusType.AVAILABLE)return this.spines[i];var b=document.createElement("div");this.parent.appendChild(b);
b.status=this.statusType.RESERVED;this.spines.push(b);return b};g.removeAllSpines=function(){for(i=0;i<this.spines.length;i++)$(this.spines[i]).css("visibility","hidden"),this.spines[i].status=this.statusType.AVAILABLE};g.isRTLProgression=function(){var b=KindleRendererSettings.getSettings().pageProgressionDirection;return b?b.value===b.RTL:!1};g.prepareDisplayElements=function(b,c,f){for(var a,d=[],e=0;e<b.length;e++){a=this.iframes[b[e]];var k=KindleRendererElementFitting.resize(a.contentDocument.body,
c),j=Math.round((c.height-k.height)*0.5)+"px";$(a).css({top:j,height:k.height+"px",width:k.width+"px"});d.push(a);if(e!==b.length-1&&this.shouldShowSpineAfterSkeleton(b[e])){var g=this.prepareSpine();$(g).css({top:j,height:k.height+"px",width:this.columnGap+"px"});d.push(g)}this.iframeStatus[a.index]=this.statusType.VISIBLE;this.setIframeVisibility(a,!0);f[a.index]=!1}return d};g.placeElementsHorizontally=function(b,c){var f=0,a;for(a=0;a<b.length;a++)f+=$(b[a]).width();var d,e=Math.floor((c-f)*0.5);
for(a=0;a<b.length;a++)f=b[a],d=$(f).width(),$(f).css({left:this.isRTLProgression()?c-(e+d):e}),e+=d};g.showSkeletons=function(b){var b=this.getIndicesToShow(b.sort(function(a,d){return a-d})),c=this.getCurrentlyVisibleIndices(),f={},a;for(a=0;a<c.length;a++)f[c[a]]=!0;if(b.length>0){var d=$(this.parent).height(),c=$(this.parent).width(),d={width:Math.round((c-this.columnGap*this.getSpineCountForIndicies(b))/b.length),height:d};this.removeAllSpines();this.placeElementsHorizontally(this.prepareDisplayElements(b,
d,f),c)}for(a in f)if(f[a])this.iframeStatus[a]=this.statusType.AVAILABLE,this.setIframeVisibility(this.iframes[a],!1)};g.getCurrentlyVisibleIndices=function(){for(var b=[],c=this.iframeStatus.length,f=0;f<c;f++)this.iframeStatus[f]===this.statusType.VISIBLE&&b.push(f);return b};g.getSkeletonsFromIndices=function(b){for(var c=[],f=0;f<b.length;f++){var a=this.contentRange[b[f]];a&&c.push(a.skeletonId)}return c};g.getCurrentlyVisibleSkeletons=function(){return this.getSkeletonsFromIndices(this.getCurrentlyVisibleIndices())};
g.getPrioritizedPreloadList=function(b){var c=b.slice(0);if(b.length>0)for(var f=KindleRendererFragmentLoader.getNumSkeletons(),a=this.iframes.length,d=Math.min.apply(Math,b),b=Math.max.apply(Math,b);c.length<a&&(d>0||b<f-1);){var e;for(e=0;e<this.numberOfColumns&&b<f-1&&c.length<a;e++)b++,c.push(b);for(e=0;e<this.numberOfColumns&&d>0&&c.length<a;e++)d--,c.push(d)}return c};g.getLowestPriority=function(b){for(var c=this.iframes.length,f=0,a=-1,d=0;d<c;d++){var e=this.contentRange[d];if(!e)return{iframeIndex:d,
priorityRating:-Infinity};if(this.iframeStatus[d]===this.statusType.AVAILABLE)if(e=$.inArray(e.skeletonId,b),e===-1)return{iframeIndex:d,priorityRating:-Infinity};else e>a&&(a=e,f=d)}return{iframeIndex:f,priorityRating:c-a}};g.pickSkeletonToPreload=function(b){for(var c=this.getLoadedSkeletons(),f=0;f<b.length;f++)if(c[b[f]]===void 0)return{skeletonId:b[f],priorityRating:b.length-f};return null};g.considerLoadingMoreSkeletons=function(){if(!this.currentRequest){var b=this.getPrioritizedPreloadList(this.getCurrentlyVisibleSkeletons()),
c=this.pickSkeletonToPreload(b);if(c!==null&&this.getLowestPriority(b).priorityRating<c.priorityRating)this.createNewRequest(this.loadedType.PRELOAD,null),this.currentRequest.skeletons=[c.skeletonId],this.loadFragmentsForRange(this.getDesiredRangeForSkeleton(c.skeletonId))}};g.updateSettings=function(b){if(b.columns!==void 0){if(b.columns.num!==void 0)this.numberOfColumns=b.columns.num;if(b.columns.gap!==void 0)this.columnGap=b.columns.gap;if(b.columns.spineColor!==void 0)this.spineColor=b.columns.spineColor}};
g.getIframeToLoad=function(){return this.currentRequest?this.iframes[this.getLowestPriority(this.getPrioritizedPreloadList(this.currentRequest.type===this.loadedType.PRELOAD?this.getCurrentlyVisibleSkeletons():this.currentRequest.skeletons)).iframeIndex]:null};g.getDesiredRangeForSkeleton=function(b){b=KindleRendererFragmentLoader.getSkeletonRange(b);return{focus:b.start,startPosition:b.start,endPosition:b.end}};g.frameIsLoadedAndReady=function(){var b=this.currentRequest,c=this.reserveSkeletonsInCache(b.skeletons);
c.length>0?this.loadFragmentsForRange(this.getDesiredRangeForSkeleton(c[0])):(b.type===this.loadedType.PRELOAD&&this.clearCacheReservations(),b.initialPosition!==null&&this.showSkeletons(b.skeletons),b.metrics.endTimer(),b.metrics.log(),this.currentRequest=null,setTimeout(this.currentRequestDfd.resolve,10),b.type!==this.loadedType.PAGE_FLIP&&this.considerLoadingMoreSkeletons())};g.pageFlip=function(b){var b=this.getNeededSkeletonsForPageFlip(b),c=this.reserveSkeletonsInCache(b),f=Math.max.apply(Math,
b);this.currentPosition=KindleRendererFragmentLoader.getSkeletonRange(f).start;if(c.length>0)return this.createNewRequest(this.loadedType.PAGE_FLIP,null),this.currentRequest.skeletons=b,this.loadFragmentsForRange(this.getDesiredRangeForSkeleton(c[0])),!1;this.showSkeletons(b);this.considerLoadingMoreSkeletons();return!0};g.nextScreen=function(){return this.pageFlip(1)};g.previousScreen=function(){return this.pageFlip(-1)};g.gotoPosition=function(b,c){var f=this.getNeededSkeletonsForGoTo(b),a=this.reserveSkeletonsInCache(f);
if(c){var d=Math.max.apply(Math,f);this.currentPosition=KindleRendererFragmentLoader.getSkeletonRange(d).start}if(a.length>0)return this.createNewRequest(this.loadedType.GOTO,b),this.currentRequest.skeletons=f,this.loadFragmentsForRange(this.getDesiredRangeForSkeleton(a[0])),!1;this.clearCacheReservations();this.showSkeletons(f);return!0};g.getPagePositionRange=function(){var b=this.getCurrentlyVisibleIndices();if(b.length===0)return null;for(var c=Infinity,f=-Infinity,a=0;a<b.length;a++)var d=this.contentRange[b[a]],
c=Math.min(c,d.startPosition),f=Math.max(f,d.endPosition);return{currentTopOfPage:c,currentBottomOfPage:f}};g.getCurrentPosition=function(){return this.currentPosition};g.cleanup=function(){this.cancelCurrentRequest();for(var b=0;b<this.iframes.length;b++)KindleRendererIframeLoading.cleanupIframe(this.iframes[b]),KindlePaginator.cleanupIframe(this.iframes[b]),this.contentRange[b]=null,this.positionData[b]=null;KindleRendererFragmentLoader.cleanup();this.iframes=null};g.hasNextScreen=function(){for(var b=
this.getCurrentlyVisibleSkeletons(),c=KindleRendererFragmentLoader.getNumSkeletons()-1,f=0;f<b.length;f++)if(b[f]===c)return!1;return!0};g.hasPreviousScreen=function(){for(var b=this.getCurrentlyVisibleSkeletons(),c=0;c<b.length;c++)if(b[c]===0)return!1;return!0};g.getSortedVisibleIndicies=function(){for(var b,c=[],f=this.getCurrentlyVisibleIndices(),a=0;a<f.length;a++){b=f[a];var d=this.contentRange[b].skeletonId;KindleRendererFragmentLoader.isBlankPage(d)||c.push([d,b])}c.sort(function(a,d){return a[0]-
d[0]});b=[];for(a=0;a<c.length;a++)b.push(c[a][1]);return b};g.getContentRects=function(){for(var b=this.getSortedVisibleIndicies(),c=[],f=0;f<b.length;f++){var a=b[f],d=this.iframes[a],a=this.getIframeOrigin(a);c.push(this.getBoundsWithOffset(d.contentDocument.body,a))}return c};g.getZoomableAt=function(b,c,f){for(var a=this.getCurrentlyVisibleIndices(),d=0;d<a.length;d++){var e=a[d],k=$(this.iframes[e]),k={x:b.x+parseInt(k.css("left"),10),y:b.y+parseInt(k.css("top"),10)};if(e=KindleRendererZoomablesFactory.buildFromCoord(this.iframes[e].contentDocument,
k,c,f))return e}return null};g.getZoomableList=function(b){for(var c=[],f=this.getSortedVisibleIndicies(),a=0;a<f.length;a++)var d=f[a],e=$(this.iframes[d]),e={x:b.x+parseInt(e.css("left"),10),y:b.y+parseInt(e.css("top"),10)},c=c.concat(KindleRendererZoomablesFactory.buildList(this.iframes[d].contentDocument,e));return c};g.getSelectableItemBoundaries=function(){return{}};g.getComputedRectsDfd=function(){return null};g.getWordPositions=function(){return null};g.show=function(){this.showContent=!0;
for(var b=this.getCurrentlyVisibleIndices(),c=0;c<b.length;c++)this.setIframeVisibility(this.iframes[b[c]],!0)};g.hide=function(){this.showContent=!1;for(var b=this.getCurrentlyVisibleIndices(),c=0;c<b.length;c++)this.setIframeVisibility(this.iframes[b[c]],!1)};g.handleClick=function(b,c){for(var f=this.getCurrentlyVisibleIndices(),a,d=0;d<f.length;d++){var e=this.iframes[f[d]],k=e.offsetLeft,j=e.offsetTop,g=e.offsetHeight,q=e.offsetWidth;if(b>=k&&b<=k+q&&c>=j&&c<=j+g){a=e;break}}return a?(b-=parseInt(a.offsetLeft,
10),c-=parseInt(a.offsetTop,10),f=KindleRendererUtils.elementFromPoint(a.contentDocument,b,c),KindleRendererEventHandler.handleClick(a.contentDocument,f,{x:b,y:c})):!1};g.resizeNotification=function(){this.reloadNotification()};g.reloadNotification=function(){this.showSkeletons(this.getCurrentlyVisibleSkeletons())};g.reloadAnnotations=function(){};g.updateGlyphColor=function(){};g.setAnnotationEventCallback=function(){};g.setOverlayManager=function(){};g.copyIframeData=function(){}}var m=-1;return{build:function(h,
b){h.loadedType={PRELOAD:0,GOTO:1,PAGE_FLIP:2};h.statusType={AVAILABLE:0,RESERVED:1,VISIBLE:2};h.iframes=[];h.iframeStatus=[];h.contentRange=[];h.positionData=[];h.parent=b;for(var c=0;c<6;c+=1)h.iframes[c]=h.createIframe($(b).width(),b.name,c),h.iframeStatus[c]=h.statusType.AVAILABLE,h.contentRange[c]=null,h.positionData[c]=null,b.appendChild(h.iframes[c]);h.currentPosition=0;h.showContent=!0;h.numberOfColumns=1;h.columnGap=20;h.spineColor="transparent";h.spines=[];g(h)}}}(),KindleRendererIframeManagerReflowFactory=
function(){function g(b){b.getIframeToLoad=function(){return this.iframes[this.hiddenIframeIndex]};b.annotationClickedHandler=function(c){if(this.annotationEventCallback!==void 0){var b=c.currentTarget.parentNode,c=b.getAttribute("annotationType"),b=b.getAttribute("annotationStart");this.annotationEventCallback(c,b)}};b.renderAnnotations=function(c,b){var a=c.contentDocument.getElementById(h);a!==null&&a.parentNode.removeChild(a);if(this.overlayManager&&(a=this.overlayManager.getOverlaysInRange(b.startPosition,
b.endPosition))&&a.length>0)this.createAnnotationElements(c,a),c.writingMode.forceRepaint(c)};b.frameIsLoadedAndReady=function(c){var b=this,a=b.currentRequest;b.iframeLoadStatus[c.index]=a.type;var d=b.contentRange[c.index];b.renderAnnotations(c,d);var e=this.isStartOfSkeletonLoaded(c.index);a.initialPosition!==null?KindlePaginator.scrollToPosition(c,a.initialPosition,e):KindlePaginator.scrollToTop(c,e);if(!KindlePaginator.isIframePaginationValid(c)){if(b.canRetryCurrentRequest()){b.willRetryCurrentRequest();
b.resizeWithoutReload(c.index);return}KindlePaginator.clearIframePaginationValidation(c)}if(!KindlePaginator.hasNextScreen(c)&&!KindleRendererFragmentLoader.isPositionAtEndOfSkeletonOrDocument(d.skeletonId,d.endPosition))if(d=d.endPosition-d.startPosition,d<0)b.currentRequestDfd.reject(DATA_LOAD_ERROR);else{KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(d+1);var k=a.initialPosition;if(k===null)k=KindlePaginator.getCurrentPagePositionRange(c).currentTopOfPage;setTimeout(function(){b.reloadHiddenFrame(k)},
0)}else a.initialPosition!==null&&c===b.iframes[b.hiddenIframeIndex]&&(b.swapIframes(),this.updateDisplayedPositionsInPage()),a.metrics.endTimer(),a.metrics.log(),b.currentRequest=null,setTimeout(b.currentRequestDfd.resolve,10),c.computingRectsId.id=a.requestId,b.computedRectsDfd[c.index]=b.computeRectsInIframe(b.iframes[c.index],a.requestId),b.computedRectsDfd[c.index].then(function(){b.computedRectsDfd[c.index]=null;c.computingRectsId.id=null;!b.currentRequest&&a.type===b.loadedType.GOTO_POSITION&&
b.considerLoadingMoreFragments();b=null},function(){b=null})};b.reloadHiddenFrame=function(c){this.loadFragmentsForRange(KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForGoTo(c))};b.gotoPosition=function(c){$(this.iframes[this.visibleIframeIndex].contentDocument.body).find("#"+m).empty();this.createNewRequest(this.loadedType.GOTO_POSITION,c);c=KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForGoTo(c);KindleRendererFragmentLoader.needToLoadFragments(this.contentRange[this.visibleIframeIndex],
c)?this.loadFragmentsForRange(c):this.resizeWithoutReload(this.visibleIframeIndex);return!1};b.swapIframes=function(){this.iframeLoadStatus[this.visibleIframeIndex]=this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.NEXT?this.loadedType.PREVIOUS:this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.PREVIOUS?this.loadedType.NEXT:this.loadedType.EMPTY;this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY;var c=this.visibleIframeIndex;this.visibleIframeIndex=this.hiddenIframeIndex;
this.hiddenIframeIndex=c;this.setIframeVisibility(this.iframes[this.visibleIframeIndex],!0);this.setIframeVisibility(this.iframes[this.hiddenIframeIndex],!1);this.iframes[this.hiddenIframeIndex].writingMode.resetHeight(this.iframes[this.hiddenIframeIndex])};b.getPagePositionRange=function(){var c=this.contentRange[this.visibleIframeIndex];if(c===null)return null;var b=KindlePaginator.getCurrentPagePositionRange(this.iframes[this.visibleIframeIndex]);if(b.currentTopOfPage===null||b.currentBottomOfPage===
null)b.currentTopOfPage=c.startPosition,b.currentBottomOfPage=c.endPosition;return b};b.getCurrentPosition=function(){var c=this.getPagePositionRange();return c?c.currentTopOfPage:null};b.getSelectableItemBoundaries=function(){return KindlePaginator.getSelectableItemBoundariesForCurrentScreen(this.iframes[this.visibleIframeIndex])};b.computeRectsInIframe=function(c,b){var a=KindleMetricsProfiler("rects-computation"),d=KindleRendererFragmentLoader.getBookContentType();return c.screenManager.wordMapGenerator.computeWordRects(c.contentDocument,
c.screenManager.wordMap,c.screenManager.wordMapKeys,c.writingMode,d,b,c.computingRectsId,a)};b.getComputedRectsDfd=function(){return this.computedRectsDfd[this.visibleIframeIndex]};b.getWordPositions=function(){return KindlePaginator.getWordPositionsForCurrentScreen(this.iframes[this.visibleIframeIndex])};b.causeReflowEventInBrowser=function(){var c=this.iframes[this.visibleIframeIndex].contentDocument.getElementsByTagName("html")[0],b=this.iframes[this.visibleIframeIndex].contentDocument.getElementsByTagName("body")[0];
c.removeChild(b);c.appendChild(b)};b.causeReflowEventInBrowserIfNeeded=function(){if(KindleRendererDeviceSpecific.needsReflowOnPageFlip()){var c=this;setTimeout(function(){c.causeReflowEventInBrowser()},KindleRendererDeviceSpecific.drawYieldUpdateTime())}};b.reloadAnnotations=function(){this.renderAnnotations(this.iframes[this.visibleIframeIndex],this.contentRange[this.visibleIframeIndex]);this.iframes[this.hiddenIframeIndex]!==null&&this.iframeLoadStatus[this.hiddenIframeIndex]!==this.loadedType.EMPTY&&
this.renderAnnotations(this.iframes[this.hiddenIframeIndex],this.contentRange[this.hiddenIframeIndex])};b.loadNextPages=function(){if(this.iframeLoadStatus[this.hiddenIframeIndex]!==this.loadedType.NEXT&&(this.currentRequest===null||this.currentRequest.type!==this.loadedType.NEXT)){var c=this.contentRange[this.visibleIframeIndex].endPosition+1,b=this.getPagePositionRange(),c=KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForPageFlip(c,b);this.createNewRequest(this.loadedType.NEXT,
null);this.loadFragmentsForRange(c)}};b.loadPreviousPages=function(){if(this.iframeLoadStatus[this.hiddenIframeIndex]!==this.loadedType.PREVIOUS&&(this.currentRequest===null||this.currentRequest.type!==this.loadedType.PREVIOUS)){var c=this.contentRange[this.visibleIframeIndex].startPosition-1,b=this.getPagePositionRange(),c=KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForPageFlip(c,b);this.createNewRequest(this.loadedType.PREVIOUS,null);this.loadFragmentsForRange(c)}};b.considerLoadingMoreFragments=
function(c){if(this.canPreloadNext){var b=c!==this.direction.PREVIOUS?4:2;if(KindlePaginator.getApproximateNumNextScreens(this.iframes[this.visibleIframeIndex])<b&&this.hasMoreNextFragments()){this.loadNextPages();return}}this.canPreloadPrevious&&(c=c===this.direction.PREVIOUS?4:2,KindlePaginator.getApproximateNumPreviousScreens(this.iframes[this.visibleIframeIndex])<c&&this.hasMorePreviousFragments()&&this.loadPreviousPages())};b.handleClick=function(c,b){var a=KindleRendererUtils.elementFromPoint(this.iframes[this.visibleIframeIndex].contentDocument,
c,b);return KindleRendererEventHandler.handleClick(this.iframes[this.visibleIframeIndex].contentDocument,a,{x:c,y:b})};b.crossSkeletonBoundary=function(){var c=this.contentRange[this.visibleIframeIndex],b=this.contentRange[this.hiddenIframeIndex];if(this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.NEXT)if(c.skeletonId+1===b.skeletonId)return KindlePaginator.scrollToTop(this.iframes[this.hiddenIframeIndex],!0),this.swapIframes(),!0;else if(c.skeletonId!==b.skeletonId)return this.iframeLoadStatus[this.hiddenIframeIndex]=
this.loadedType.EMPTY,!1;if(this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.PREVIOUS)if(c.skeletonId-1===b.skeletonId)return c=this.hiddenIframeIndex,KindlePaginator.scrollToBottom(this.iframes[c],this.isStartOfSkeletonLoaded(c)),this.swapIframes(),!0;else if(c.skeletonId!==b.skeletonId)this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY;return!1};b.cleanup=function(){this.cancelCurrentRequest();KindleRendererIframeLoading.cleanupIframe(this.iframes[this.visibleIframeIndex]);
KindleRendererIframeLoading.cleanupIframe(this.iframes[this.hiddenIframeIndex]);KindlePaginator.cleanupIframe(this.iframes[this.visibleIframeIndex]);KindlePaginator.cleanupIframe(this.iframes[this.hiddenIframeIndex]);this.setOverlayManager(null);this.contentRange=[null,null];this.positionData=[null,null];this.iframes=null};b.hasMoreNextFragments=function(){return this.contentRange[this.visibleIframeIndex].endPosition!==KindleRendererFragmentLoader.getMaximumPosition()};b.hasMorePreviousFragments=
function(){return this.contentRange[this.visibleIframeIndex].startPosition!==KindleRendererFragmentLoader.getMinimumPosition()};b.isAtEndOfDocumentOrSkeleton=function(){var c=this.contentRange[this.visibleIframeIndex];return KindleRendererFragmentLoader.isPositionAtEndOfSkeletonOrDocument(c.skeletonId,c.endPosition)};b.isAtBeginningOfDocumentOrSkeleton=function(){var c=this.contentRange[this.visibleIframeIndex];return KindleRendererFragmentLoader.isPositionAtBeginningOfSkeletonOrDocument(c.skeletonId,
c.startPosition)};b.isStartOfSkeletonLoaded=function(c){c=this.contentRange[c];return KindleRendererFragmentLoader.isPositionAtBeginningOfSkeletonOrDocument(c.skeletonId,c.startPosition)};b.needToWaitForLoadToShowNextPage=function(){return!KindlePaginator.isNextFullScreen(this.iframes[this.visibleIframeIndex])&&this.hasMoreNextFragments()};b.needToWaitForLoadToShowPreviousPage=function(){var c=this.visibleIframeIndex;return!KindlePaginator.isPreviousFullScreen(this.iframes[c],this.isStartOfSkeletonLoaded(c))&&
this.hasMorePreviousFragments()};b.hasNextScreen=function(){return KindlePaginator.hasNextScreen(this.iframes[this.visibleIframeIndex])||this.hasMoreNextFragments()};b.hasPreviousScreen=function(){return KindlePaginator.hasPreviousScreen(this.iframes[this.visibleIframeIndex])||this.hasMorePreviousFragments()};b.updateDisplayedPositionsInPage=function(){var c=KindlePaginator.getCurrentPagePositionRange(this.iframes[this.visibleIframeIndex]);KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(c.currentBottomOfPage-
c.currentTopOfPage)};b.considerFlippingFrames=function(){var c=this.iframeLoadStatus[this.hiddenIframeIndex],b=this.currentRequest!==null&&this.currentRequest.type===c;if(c!==this.loadedType.EMPTY&&!b){var b=this.getPagePositionRange(),a=this.contentRange[this.hiddenIframeIndex],d=0,e=0;c===this.loadedType.NEXT?e=1:d=1;if(b.currentTopOfPage>=a.startPosition+d&&b.currentBottomOfPage<=a.endPosition-e)if(KindlePaginator.matchFrames(this.iframes[this.visibleIframeIndex],this.iframes[this.hiddenIframeIndex]),
c=KindlePaginator.getCurrentPagePositionRange(this.iframes[this.hiddenIframeIndex]),c.currentTopOfPage===b.currentTopOfPage&&c.currentBottomOfPage===b.currentBottomOfPage)return this.swapIframes(),!0;else if(this.needToWaitForLoadToShowNextPage()||this.needToWaitForLoadToShowPreviousPage())throw"Pagination Error";}return!1};b.nextScreen=function(){if(!KindlePaginator.isIframePaginationValid(this.iframes[this.visibleIframeIndex]))return this.gotoPosition(this.getPagePositionRange().currentTopOfPage);
var c=this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.NEXT;if(c&&this.considerFlippingFrames()===void 0)return!0;var b=this.isAtEndOfDocumentOrSkeleton(),a=KindlePaginator.nextScreen(this.iframes[this.visibleIframeIndex],b);if(!a)if(this.hasMoreNextFragments())if(c&&b&&this.crossSkeletonBoundary())a=!0;else return c=this.getPagePositionRange(),KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(this.contentRange[this.visibleIframeIndex].endPosition-c.currentBottomOfPage),
this.loadNextPages(),!1;else KindlePaginator.showEndOfDocument(this.iframes[this.visibleIframeIndex]),a=!0;this.considerLoadingMoreFragments(this.direction.NEXT);this.causeReflowEventInBrowserIfNeeded();this.updateDisplayedPositionsInPage();return a};b.previousScreen=function(){if(!KindlePaginator.isIframePaginationValid(this.iframes[this.visibleIframeIndex]))return this.gotoPosition(this.getPagePositionRange().currentTopOfPage);var c=this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.PREVIOUS;
if(c&&this.considerFlippingFrames()===void 0)return!0;var b=this.visibleIframeIndex,a=this.isAtBeginningOfDocumentOrSkeleton(),b=KindlePaginator.previousScreen(this.iframes[b],a,this.isStartOfSkeletonLoaded(b));if(!b&&this.hasMorePreviousFragments())if(c&&a&&this.crossSkeletonBoundary())b=!0;else return c=this.getPagePositionRange(),KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(c.currentTopOfPage-this.contentRange[this.visibleIframeIndex].startPosition),this.loadPreviousPages(),
!1;this.considerLoadingMoreFragments(this.direction.PREVIOUS);this.causeReflowEventInBrowserIfNeeded();this.updateDisplayedPositionsInPage();return b};b.cancelHiddenIframeLoading=function(){var c=this.iframes[this.hiddenIframeIndex];if(c.processingRequestId.id!==null)c.processingRequestId.id=null,this.cancelCurrentRequest();c.computingRectsId.id=null};b.doGuardedAsyncCopyOf=function(c,b,a){var d=this;b.processingRequestId.id=d.currentRequest.requestId;b.computingRectsId.id=null;KindleRendererIframeLoading.copyIframeContents(d.currentRequest,
c,b).done(function(e){if(b.processingRequestId.id===e.requestId&&d.currentRequest&&d.currentRequest.requestId===e.requestId)d.addClickHandlers(b),b.processingRequestId.id=null,a()})};b.copyIframeDataOf=function(c){var b=this;b.cancelHiddenIframeLoading();b.createNewRequest(b.loadedType.GOTO_POSITION,null);b.doGuardedAsyncCopyOf(c.iframes[c.visibleIframeIndex],b.iframes[b.visibleIframeIndex],function(){b.contentRange[b.visibleIframeIndex]=jQuery.extend({},c.contentRange[c.visibleIframeIndex]);b.positionData[b.visibleIframeIndex]=
jQuery.extend({},c.positionData[c.visibleIframeIndex]);var a=b.iframes[b.hiddenIframeIndex],d=c.iframes[c.hiddenIframeIndex];c.iframeLoadStatus[c.hiddenIframeIndex]!==c.loadedType.EMPTY&&d.processingRequestId.id===null?b.doGuardedAsyncCopyOf(d,a,function(){b.contentRange[b.hiddenIframeIndex]=jQuery.extend({},c.contentRange[c.hiddenIframeIndex]);b.positionData[b.hiddenIframeIndex]=jQuery.extend({},c.positionData[c.hiddenIframeIndex]);b.iframeLoadStatus[b.visibleIframeIndex]=c.iframeLoadStatus[c.visibleIframeIndex];
b.iframeLoadStatus[b.hiddenIframeIndex]=c.iframeLoadStatus[c.hiddenIframeIndex];b.currentRequestDfd.resolve()}):(b.iframeLoadStatus=[b.loadedType.EMPTY,b.loadedType.EMPTY],b.currentRequestDfd.resolve())});return b.currentRequestDfd.isResolved()};b.recreateFrame=function(c){var b=this.iframes[c],a=b.writingMode.width(b),d=b.parentNode,e=b.pageOverflowDiv;d.removeChild(b);b=this.createIframe(a,this.parentName,b.index);b.pageOverflowDiv=e;d.appendChild(b);d.appendChild(e);this.iframes[c]=b};b.copyIframeData=
function(c){if(!(this.contentRange[this.visibleIframeIndex]===null||c.contentRange[c.visibleIframeIndex]===null?this.contentRange[this.visibleIframeIndex]===c.contentRange[c.visibleIframeIndex]:this.contentRange[this.visibleIframeIndex].startPosition===c.contentRange[c.visibleIframeIndex].startPosition&&this.contentRange[this.visibleIframeIndex].endPosition===c.contentRange[c.visibleIframeIndex].endPosition))return KindleRendererDeviceSpecific.needsReflowOnPageFlip()&&(this.recreateFrame(0),this.recreateFrame(1),
this.setIframeVisibility(this.iframes[this.visibleIframeIndex],!0)),this.copyIframeDataOf(c);var b=this.iframes[this.visibleIframeIndex],c=c.iframes[c.visibleIframeIndex];b.currentTopOfScreen=c.currentTopOfScreen;b.currentBottomOfScreen=c.currentBottomOfScreen;return!0};b.updateSettingsInIframe=function(c){if(c&&c.contentDocument){var b=c.contentDocument.getElementById(m);b&&c.contentDocument.body.removeChild(b);KindleRendererIframeLoading.updateSettingsInIframe(c);b&&c.contentDocument.body.appendChild(b)}};
b.updateSettings=function(){var c=KindleRendererSettings.getSettings().backgroundColor;$(this.iframes[this.visibleIframeIndex].pageOverflowDiv).css({"background-color":c});$(this.iframes[this.hiddenIframeIndex].pageOverflowDiv).css({"background-color":c});this.updateSettingsInIframe(this.iframes[this.visibleIframeIndex]);this.updateSettingsInIframe(this.iframes[this.hiddenIframeIndex])};b.reloadNotification=function(){this.contentRange=[null,null];this.positionData=[null,null];this.resizeNotification()};
b.resizeNotification=function(){this.cancelHiddenIframeLoading();this.iframeLoadStatus=[this.loadedType.EMPTY,this.loadedType.EMPTY];var c=this.iframes[this.visibleIframeIndex];c.writingMode.resetIframeDimensions(c);c=this.iframes[this.hiddenIframeIndex];c.writingMode.resetIframeDimensions(c)};b.updateGlyphColorForFrameIndex=function(c){this.iframes[c].hasGlyphs&&this.iframes[c].contentDocument&&KindleGlyphRenderer.updateTextColor(this.iframes[c])};b.updateGlyphColor=function(){this.updateGlyphColorForFrameIndex(this.visibleIframeIndex);
this.updateGlyphColorForFrameIndex(this.hiddenIframeIndex)};b.setAnnotationEventCallback=function(c){this.annotationEventCallback=c};b.getContentRects=function(){var c=this.iframes[this.visibleIframeIndex],b=this.getIframeOrigin(this.visibleIframeIndex),c={left:b.x,top:b.y,width:$(c).width(),height:$(c).height()};c.right=c.left+c.width;c.bottom=c.top+c.height;return[c]};b.getZoomableAt=function(c,b,a){var d=this.iframes[this.visibleIframeIndex];return!KindlePaginator.isPointOnVisiblePage(d,b-c.x,
a-c.y)?null:KindleRendererZoomablesFactory.buildFromCoord(d.contentDocument,c,b,a)};b.getZoomableList=function(c){return KindleRendererZoomablesFactory.buildList(this.iframes[this.visibleIframeIndex].contentDocument,c)};b.addClickHandlers=function(c){var b=this,c=c.contentDocument.getElementById(h),c=$(c).find("["+KindleRendererAnnotationRenderer.ANNOTATION_CLICK_ATTRIBUTE+"='true']").children();$(c).unbind("click");$(c).click(function(a){b.annotationClickedHandler(a)})};b.createAnnotationElements=
function(c,b){if(c.contentDocument.getElementsByTagName("body")[0]){var a=KindlePaginator.getWordMap(c),d=c.contentDocument.createDocumentFragment();KindleRendererAnnotationRenderer.createAnnotationElements(c,a,c.screenManager.wordMapGenerator,b,d);a=c.contentDocument.getElementById(h);if(!a){var e=c.contentDocument.getElementById(m),a=c.contentDocument.createElement("DIV");a.id=h;a.setAttribute("class","kindle-annotation-wrapper");e.appendChild(a)}a.appendChild(d);this.addClickHandlers(c)}};b.addAnnotation=
function(b,f,a){b&&f&&a&&f.startPosition<=a.end&&a.start<=f.endPosition&&(this.createAnnotationElements(b,[a]),b.writingMode.forceRepaint(b))};b.removeAnnotation=function(b,f){if(b&&f){var a=b.contentDocument.getElementById(h);a&&(KindleRendererAnnotationRenderer.removeAnnotationElements(a,f),b.writingMode.forceRepaint(b))}};b.onOverlayAdded=function(c){b.addAnnotation(b.iframes[0],b.contentRange[0],c.overlay);b.addAnnotation(b.iframes[1],b.contentRange[1],c.overlay)};b.onOverlayRemoved=function(c){b.removeAnnotation(b.iframes[0],
c.overlay);b.removeAnnotation(b.iframes[1],c.overlay)};b.setOverlayManager=function(b){this.overlayManager&&(this.overlayManager.removeEventListener(this.overlayManager.OVERLAY_ADDED_EVENT,this.onOverlayAdded),this.overlayManager.removeEventListener(this.overlayManager.OVERLAY_REMOVED_EVENT,this.onOverlayRemoved));if(this.overlayManager=b)this.overlayManager.addEventListener(this.overlayManager.OVERLAY_ADDED_EVENT,this.onOverlayAdded),this.overlayManager.addEventListener(this.overlayManager.OVERLAY_REMOVED_EVENT,
this.onOverlayRemoved)};b.show=function(){this.showContent=!0;this.setIframeVisibility(this.iframes[this.visibleIframeIndex],!0)};b.hide=function(){this.showContent=!1;this.setIframeVisibility(this.iframes[this.visibleIframeIndex],!1)};b.drawWordMap=function(){var b=this.iframes[this.visibleIframeIndex];drawWordMap(b,b.screenManager,b.contentDocument.body)};b.drawHeightMaps=function(){drawHeightMaps(this.iframes[this.visibleIframeIndex],this.iframes[this.hiddenIframeIndex])}}var m="content-overlays",
h="annotation-section";return{build:function(b,c){for(var f=[],a=0;a<2;a+=1){f[a]=b.createIframe($(c).width(),c.name,a);c.appendChild(f[a]);var d=f[a],e=c,k=a,j=document.createElement("div");j.setAttribute("id",e.name+"_page_overflow_"+k);$(j).css({position:"absolute",visibility:"hidden","z-index":1});e.appendChild(j);d.pageOverflowDiv=j}b.loadedType={EMPTY:0,GOTO_POSITION:1,NEXT:2,PREVIOUS:3};b.direction={NEXT:2,PREVIOUS:3};b.iframes=f;b.parentName=c.name;b.iframeLoadStatus=[b.loadedType.EMPTY,b.loadedType.EMPTY];
b.contentRange=[null,null];b.positionData=[null,null];b.computedRectsDfd=[null,null];b.visibleIframeIndex=0;b.hiddenIframeIndex=1;b.overlayManager=null;g(b)}}}(),KindleRendererIframePreparation=function(){function g(b,f,a,d){KindleRendererSettings.useCSSRegions()?d.resolve(f):KindleRendererContentReflow.reflow(b,f,a).then(function(){d.resolve(f)},function(){d.reject(f,"reflow took too long")})}function m(c,f,a,d,e,k){e!==b&&KindleRendererCanvasInsertion.changeSpanToCanvas(c.id,c.contentDocument,a.contentRange,
e===h);c.hasGlyphs=d.glyphData!==void 0&&a.glyphData!==void 0;c.hasGlyphs?KindleGlyphRenderer.renderAllContent(c,f,d.glyphData,a.glyphData).then(function(){g(c,f,d.positionData,k)},function(){k.reject(f,"glyph rendering took too long")}):(d.glyphData=null,g(c,f,d.positionData,k))}var h=-1,b=0;return{CANVAS_INSERTION_PREVIOUS:h,CANVAS_INSERTION_NONE:b,CANVAS_INSERTION_NEXT:1,prepareIframe:function(b,f,a,d,e){var k=new jQuery.Deferred;if(b.processingRequestId.id===f.requestId){var j=b.contentDocument.getElementById("content-overlays");
if(!j)j=b.contentDocument.createElement("DIV"),j.id="content-overlays",b.contentDocument.body.appendChild(j);m(b,f,a,d,e,k)}else k.reject();return k.promise()}}}(),KindleRendererColumnManager=function(){function g(){for(var a=0;a<v;a++)t[a].hide()}function m(a){if(B||y){if(a<=C)throw{name:"pagingError",message:"Repeating wait request"};C=a;z<0&&(w.waitNotification&&w.waitNotification(),y=!0,g());z=a}}function h(a){if((B||y)&&z>=0&&z<=a){A=0;z=-1;if(y){for(a=0;a<v;a++)t[a].show();B=!0;y=!1}w.readyNotification&&
w.readyNotification()}}function b(a){if(z===-1)if(a<v){var d=t[a].getComputedRectsDfd();d?(w.rectsWaitNofification&&w.rectsWaitNofification(),d.then(function(){b(a+1)},function(a){w.rectsErrorNotification&&w.rectsErrorNotification(a)})):b(a+1)}else w.rectsReadyNotification&&w.rectsReadyNotification()}function c(a){return a>v*G?(w.errorNotification&&w.errorNotification("Irrecoverable Error"),!0):!1}function f(a,d,e){z<=a&&(d!==KindleRendererIframeManagerFactory.DATA_LOAD_ERROR&&A<M?(++A,s(),o(e)):
(w.errorNotification&&w.errorNotification(d),z=-1))}function a(d,e){try{if(c(e))return!1;if(t[d].copyIframeData(t[d===0?v-1:d-1])){var k=t[d].nextScreen(),j=d+1;if(k){if(j<v)return a(j,e+1);b(0);return!0}}var g=t[d].getCurrentProcessId();m(g);t[d].getCurrentProcessDfd().then(function(){a(d,e+1)&&(h(g),b(0))},function(a){f(g,a,e)})}catch(r){o(e)}return!1}function d(k,j){try{if(c(j))return!1;var g=t[k===v-1?0:k+1];if(!g.hasPreviousScreen())return e(0,j),!1;if(t[k].copyIframeData(g)){var r=t[k].previousScreen(),
g=k-1;if(r)return g>=0?d(g,j+1):a(1,j)}var w=t[k].getCurrentProcessId();m(w);t[k].getCurrentProcessDfd().then(function(){d(k,j+1)&&(h(w),b(0))},function(a){f(w,a,j)})}catch(l){o(j)}return!1}function e(d,e,c){var k;t[0].gotoPosition(d,c)?(k=KindleRendererRequestId.getUniqueRequestId(),m(k),h(k),b(0)):(k=t[0].getCurrentProcessId(),m(k),d=t[0].getCurrentProcessDfd(),v===1?d.then(function(){h(k);b(0)},function(a){f(k,a,e)}):d.then(function(){a(1)&&(h(k),b(0))},function(a){f(k,a,e)}));return!1}function k(){try{if(v===
1){var d=t[0].nextScreen();if(d)b(0);else{var e=t[0].getCurrentProcessId();m(e);t[0].getCurrentProcessDfd().then(function(){k();h(e);b(0)},function(a){f(e,a,0)})}return d}else return a(0,0)}catch(c){return o(0),!1}}function j(){try{if(v===1){var a=t[0].previousScreen();if(a)b(0);else{var e=t[0].getCurrentProcessId();m(e);t[0].getCurrentProcessDfd().then(function(){j();h(e);b(0)},function(a){f(e,a,0)})}return a}else return d(v-1,0)}catch(c){return o(0),!1}}function l(a){for(;a<v;a++)t[a].reloadNotification()}
function q(){var a=t[0].getCurrentPosition();a!==null&&(J=a)}function o(a){q();l(0);e(J,a)}function p(a){if(u&&a&&a.length>0){var d=document.getElementById("renderer_translation_div");if(!d)d=document.createElement("div"),d.id="renderer_translation_div",$(d).css({visibility:"hidden","z-index":-1E3}),u.appendChild(d);$(d).css({margin:a});a=window.getComputedStyle(d);return{top:parseFloat(a.marginTop),bottom:parseFloat(a.marginBottom),left:parseFloat(a.marginLeft),right:parseFloat(a.marginRight)}}return{top:0,
bottom:0,left:0,right:0}}function n(){var a=KindleRendererSettings.getSettings().inlineBaseDirection,d=a&&a.value===a.VERTICAL,a=p(x),e,b;d?(a={top:a.left,right:a.bottom,bottom:a.right,left:a.top},e=$(u).height(),b=$(u).width()):(e=$(u).width(),b=$(u).height());return{margins:a,parentWidth:e,parentHeight:b,getStyle:function(a){return d?{top:a.left,left:a.top,width:a.height,height:a.width}:a}}}function s(){v=Math.max(v,1);for(var a=n(),d=a.parentHeight,e=a.margins,b=D-(e.left+e.right),c=parseInt((a.parentWidth-
b*(v-1))/v,10),k=e.top,d=d-e.top-e.bottom,e=0;e<v;e++){if(H[e]===void 0)H[e]=document.createElement("div"),H[e].name="column_"+e,$(H[e]).css("position","absolute"),u.appendChild(H[e]);var j=a.getStyle({top:k,left:e*(c+b),height:d,width:c});j.display="";$(H[e]).css(j);t[e]===void 0&&(t[e]=KindleRendererIframeManagerFactory.build(H[e]),t[e].setAnnotationEventCallback(w.annotationTriggered),t[e].setOverlayManager(E));t[e].setCanPreloadPrevious(e===0);t[e].setCanPreloadNext(e===v-1)}for(e=v;e<H.length;e++)$(H[e]).hide();
B||g()}function r(a){a=$(H[a]);return{x:parseInt(a.css("left"),10),y:parseInt(a.css("top"),10)}}var w={},z=-1,C=-1,u=null,x=0,D=20,v=0,H=[],t=[],J=0,E,B=!0,y=!1,M=3,A=0,G=20;return{initialize:function(a,d,e,b){u=a;w=d;E=e;b>0&&(J=b);s()},cleanup:function(){for(var a=0;a<t.length;a++)t[a].cleanup();t=[];E=u=null;H=[]},hide:function(){g();y=B=!1},show:function(){y=!0},updateSettings:function(a){if(a.columns!==void 0)if(KindleRendererSettings.getSettings().fixedContent)v=1,D=0;else{if(a.columns.num!==
void 0)v=a.columns.num;a.columns.gap!==void 0&&(D=parseInt(a.columns.gap,10))}if(a.margin!==void 0)x=a.margin;if(u!==null){s();for(var d=a.fontSizes!==void 0||a.lineSpacingMultiplier!==void 0||a.fontSizeUnits!==void 0||a.fontFamily!==void 0||a.margin!==void 0||a.columns!==void 0||a.textAlign!==void 0,e=0;e<v;e++)t[e].updateSettings(a),!d&&a.fontColor!==void 0&&t[0].updateGlyphColor();d&&(B?o(0):l(0))}},gotoPosition:function(a,d){return e(a,0,d)},nextScreen:function(){return k()},previousScreen:function(){return j()},
hasNextScreen:function(){return t[v-1].hasNextScreen()},hasPreviousScreen:function(){return t[0].hasPreviousScreen()},getPagePositionRange:function(){var a;a=t[0].getPagePositionRange();if(v!==1){var d=t[v-1].getPagePositionRange();a={currentTopOfPage:a.currentTopOfPage,currentBottomOfPage:d.currentBottomOfPage}}return a},getSelectableItemBoundaries:function(){for(var a={},d=0;d<v;d++){var e=$(H[d]),b=parseFloat(e.css("top")),e=parseFloat(e.css("left")),c=t[d].getSelectableItemBoundaries(),k;for(k in c){a[k]=
[];for(var j=c[k],f=0;f<j.length;f++)a[k].push({top:j[f].top+b,bottom:j[f].bottom+b,left:j[f].left+e,right:j[f].right+e})}}return a},getWordPositions:function(){for(var a=[],d=0;d<v;d++){var e=t[d].getWordPositions();e&&(a=a.concat(e))}return a.length?a:null},onWindowResize:function(){s();q();t[0].resizeNotification();l(1);e(J,0)},handleClick:function(a,d){for(var e=0;e<v;e++){var b=$(H[e]),c=a-parseInt(b.css("left"),10),b=d-parseInt(b.css("top"),10);if(t[e].handleClick(c,b))return!0}return!1},reloadAnnotations:function(){for(var a=
0;a<v;a++)t[a].reloadAnnotations()},getContentRects:function(){for(var a=[],d=0;d<v;d++){for(var e=t[d].getContentRects(),b=r(d),c=0;c<e.length;c++)e[c].left+=b.x,e[c].right+=b.x,e[c].top+=b.y,e[c].bottom+=b.y;a=a.concat(e)}return a},getZoomableAt:function(a,d){for(var e=0;e<v;e++){var b=r(e);if(b=t[e].getZoomableAt(b,a,d))return b}return null},getZoomableList:function(){for(var a=[],d=0;d<v;d++)var e=r(d),e=t[d].getZoomableList(e),a=a.concat(e);return a}}}(),KindleRendererContentDisplay=function(){function g(d){f=
document.createElement("DIV");$(f).css({position:"absolute",top:0,left:0});d.appendChild(f);a=document.createElement("DIV");var e=$(a);e.css({position:"absolute",top:0,left:0});KindleRendererSettings.useCSSRegions()&&e.css({height:"100%",width:"100%"});d.appendChild(a);m()}function m(){if(!KindleRendererSettings.useCSSRegions()){if(f){var d=$(f.parentNode);$(f).css({width:d.width(),height:d.height()})}a&&(jContentDivParentNode=$(a.parentNode),$(a).css({width:jContentDivParentNode.width(),height:jContentDivParentNode.height()}))}}
function h(a){c!==a&&(c.hide(),d.waitNotification(),c=a,c.show())}var b=null,c,f=null,a=null,d=null,e=!1;return{initialize:function(k,j,l,q,o){var p=new jQuery.Deferred;c=b=KindleRendererSettings.useCSSRegions()?KindleRegionContentManager:KindleRendererColumnManager;g(k);d=j;KindleRendererCover.initialize(f,j,l);b.initialize(a,j,q,o);KindleRendererContentReflow.initialize();l.hasCover(function(a){e=a;p.resolve()},p.resolve);return p.promise()},cleanup:function(){KindleRendererCover.cleanup();b.cleanup();
d=a=f=c=null},updateSettings:function(a){b&&(m(),KindleRendererCover.onWindowResize(),b.updateSettings(a))},gotoPosition:function(a,d){a=parseInt(a,10);a=Math.max(a,0);e&&a===0?(h(KindleRendererCover),KindleRendererCover.showCover()):(h(b),a=Math.min(a,KindleRendererFragmentLoader.getMaximumPosition()));return b.gotoPosition(a,d)},nextScreen:function(){if(c===KindleRendererCover)return h(b),b.gotoPosition(0);else if(c.hasNextScreen())return c.nextScreen();return!0},previousScreen:function(){if(c===
b)if(c.hasPreviousScreen())return c.previousScreen();else e&&(h(KindleRendererCover),KindleRendererCover.showCover());return!0},hasNextScreen:function(){return c.hasNextScreen()},hasPreviousScreen:function(){return e?c!==KindleRendererCover:c.hasPreviousScreen()},getPagePositionRange:function(){return c.getPagePositionRange()},getSelectableItemBoundaries:function(){return c.getSelectableItemBoundaries()},getWordPositions:function(){return c.getWordPositions()},onWindowResize:function(){m();KindleRendererCover.onWindowResize();
b.onWindowResize()},handleClick:function(a,d){return c.handleClick(a,d)},reloadAnnotations:function(){c.reloadAnnotations()},getContentRects:function(){return c.getContentRects()},getZoomableAt:function(a,d){return c.getZoomableAt(a,d)},getZoomableList:function(){return c.getZoomableList()},clearSelection:function(){b.clearSelection&&b.clearSelection()},getSelection:function(){if(b.getSelection)return b.getSelection()}}}(),KindleRendererCover=function(){function g(e){function c(){++w;w===r&&(h(a),
b(a))}var k=e.data||e,j=e.metadata,e=k.split("resources")[0],g=KindleRendererImageRenderer.getCoverImageSlices();if(l=g!==void 0&&g!==null){a=f.ownerDocument.createElement("DIV");for(var k=$(a),r=g.length,w=0,z=0,C=0,u=0;u<r;u++)z=f.ownerDocument.createElement("IMG"),$(z).width(g[u].width),$(z).height(g[u].height),z.onload=c,z.src=e+g[u].name,$(z).appendTo(k),C+=g[u].height;z=g[0].width;$(a).width(z);$(a).height(C);$(a).css("visibility","hidden")}else a=f.ownerDocument.createElement("IMG"),a.src=
k,$(a).css("visibility","hidden"),a.onload=function(){j&&j.map?($(this).css("display","none"),d=KindleRendererImageRenderer.createCanvasImage(this,j.map),d=m(this.parentNode,d),$(this).after(d)):h(this);b(this)};f.appendChild(a)}function m(a,d){var e=$(a),b=e.width(),c=e.height(),k=Math.min(b/d.width,c/d.height),e=d.width*k;k*=d.height;b=Math.round((b-e)*0.5);c=Math.round((c-k)*0.5);$(d).css({top:c+"px",left:b+"px",height:k+"px",width:e+"px",position:"absolute"});return d}function h(a){if(!(a===null||
a===void 0)){var d=$(a),e=$(d.parent()),b=e.width(),c=e.height();d.css("visiblity","hidden");var k=1,e=d.attr("nativeWidth")||a.offsetWidth,j=d.attr("nativeHeight")||a.offsetHeight;e>0&&j>0?(d.attr("nativeWidth")===void 0&&d.attr("nativeWidth",e),d.attr("nativeHeight")===void 0&&d.attr("nativeHeight",j)):(e=b,j=c);k=Math.min(b/e,c/j);e*=k;k*=j;b=Math.round((b-e)*0.5);c=Math.round((c-k)*0.5);l?(d=f.ownerDocument.createElement("IMG"),$(d).css({width:e+"px",height:k+"px",position:"absolute",left:b+"px",
top:c+"px"}),KindleRendererImageRenderer.scaleImageSlices(d,a,!1),$(d).remove()):d.css({height:k+"px",width:e+"px",position:"absolute",left:b+"px",top:c+"px"});$(a).css("visibility","visible")}}function b(){j=!0;e.readyNotification&&e.readyNotification();e.rectsReadyNotification&&e.rectsReadyNotification()}function c(a){e.errorNotification&&e.errorNotification(a)}var f=null,a=null,d=null,e=null,k=null,j=!1,l=!1;return{initialize:function(a,d,b){f=a;e=d;k=b},cleanup:function(){k=e=a=f=null;l=j=!1},
hide:function(){$(f).hide()},show:function(){$(f).show()},showCover:function(){j?(e.readyNotification&&e.readyNotification(),e.rectsReadyNotification&&e.rectsReadyNotification()):(e.waitNotification&&e.waitNotification(),k.getCoverUrl(g,c))},nextScreen:function(){return!0},previousScreen:function(){return!0},hasNextScreen:function(){return!0},hasPreviousScreen:function(){return!1},getPagePositionRange:function(){return{currentTopOfPage:0,currentBottomOfPage:0}},getSelectableItemBoundaries:function(){var d=
{};if(a&&a.getBoundingClientRect){var e=a.getBoundingClientRect();e&&(d[0]=[{left:e.left,top:e.top,right:e.right,bottom:e.bottom}])}return d},getWordPositions:function(){return null},onWindowResize:function(){d?m(d.parentNode,d):h(a)},handleClick:function(){return!1},reloadAnnotations:function(){},getContentRects:function(){var d=$(a),d={left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),width:d.width(),height:d.height()};d.right=d.left+d.width;d.bottom=d.top+d.height;return[d]},getZoomableAt:function(){return a?
KindleRendererZoomableReflowableContentFactory.buildFromElement(a,{x:0,y:0}):null},getZoomableList:function(){return[]}}}(),KindleRendererElementFitting=function(){function g(a){return(a.getAttribute("style")||"")+";"}function m(a,d,e,b){var c=0,k=c=0;a>e&&(c=e/a);d>b&&(k=b/d);c=c>0&&k>0?c<k?c:k:c>0?c:k;c!==0&&(a=c*parseInt(a,10),d=c*parseInt(d,10),d=Math.max(1,d),a=Math.max(1,a));return{height:a,width:d,scale:c}}function h(a){var d=a.getAttribute("data-isGaiji");if(d)return d==="true";var d=parseInt($(a).css("width"),
10),e=parseInt($(a).css("height"),10),b=parseInt($(a).css("font-size"),10);if(Math.abs(d-b)<=1&&Math.abs(e-b)<=1)return a.setAttribute("data-isGaiji","true"),!0;a.setAttribute("data-isGaiji","false");return!1}function b(a,d){for(var e={neededCount:0,downloadedCount:0},b=function(){e.downloadedCount+=1;e.downloadedCount===e.neededCount&&setTimeout(d,KindleRendererDeviceSpecific.drawYieldUpdateTime())},c=0;c<a.length;c+=1)if(a[c].src!==""&&(a[c].complete!==void 0&&a[c].complete===!1||a[c].naturalHeight===
0&&a[c].naturalWidth===0))e.neededCount+=1,a[c].onerror=b,a[c].onload=b,a[c].onabort=b;e.neededCount===0&&setTimeout(d,KindleRendererDeviceSpecific.drawYieldUpdateTime())}function c(a,d){var e=a.getElementsByTagName("IMG");e.length>0?b(e,d):d()}function f(b,f,q,o){var p=new jQuery.Deferred,n,s,r=function(){n=o.createSubTimer("element-fitting");if($(b).css("position")==="absolute")KindleRendererImageRenderer.scaleCompositeInlineImages(b),p.resolve();else{var c=b.getElementsByTagName("IMG");if(c.length>
0){var r;for(r=0;r<c.length;r+=1){var C=c[r],u=C,x=$(u),D=x.css("max-height"),x=x.css("max-width"),D=D!=="auto"&&D!=="none",x=x!=="auto"&&x!=="none";if(D||x){var v=g(u);D&&(v+="max-height: none; ");x&&(v+="max-width: none; ");u.setAttribute("style",v)}u=C;u.getAttribute("data-nativeHeight")||u.setAttribute("data-nativeHeight",u.height);u.getAttribute("data-nativeWidth")||u.setAttribute("data-nativeWidth",u.width);u.getAttribute("data-nativeLeftOffset")||u.setAttribute("data-nativeLeftOffset",u.offsetLeft);
u.getAttribute("data-nativeTopOffset")||u.setAttribute("data-nativeTopOffset",u.offsetTop);u=C;if(u.className.indexOf("unsupsvg")>=0&&(u.src=e,u.height=u.getAttribute("data-nativeHeight"),u.width=u.getAttribute("data-nativeWidth"),u.height===0||u.width===0))u.height=k,u.width=k,u.setAttribute("data-nativeHeight",u.height),u.setAttribute("data-nativeWidth",u.width);u=C;v=f.getAvailableSizeForImage(u,q,a);x=parseInt(u.getAttribute("data-nativeWidth"),10)||u.naturalWidth;D=parseInt(u.getAttribute("data-nativeHeight"),
10)||u.naturalHeight;if(!x||!D)KindleDebug.warn("Defaulting image width/height. It'll be scaled down to fit."),D=x=1E3;var x=m(D,x,v.height,v.width),D=x.height,x=x.width,s=D,t=x,J=v.height,E=v.width,v={},B=0,y=parseInt($(u).css("padding-top"),10),M=parseInt($(u).css("padding-bottom"),10),A=y+M;if(A+s>J)B=s+A-J,s=Math.ceil(y/A*B),B-=s,v.top=y-s,v.bottom=M-B;y=parseInt($(u).css("padding-left"),10);M=parseInt($(u).css("padding-right"),10);s=y+M;if(s+t>E)B=t+s-E,t=Math.ceil(y/s*B),E=B-t,v.left=y-t,v.right=
M-E;t=g(u);t+="height: "+D+"px; width: "+x+"px; ";t+=(v.top!==void 0?"padding-top: "+v.top+"px; ":"")+(v.bottom!==void 0?"padding-bottom: "+v.bottom+"px; ":"")+(v.left!==void 0?"padding-left: "+v.left+"px; ":"")+(v.right!==void 0?"padding-right: "+v.right+"px; ":"");u.setAttribute("style",t);h(C)||f.padImageIfNeeded(C)}C=f.calculateOverlappingImageSets(c,h);for(u=d;u>0&&C.length>0;){for(r=0;r<C.length;r+=1)if(x=C[r],D=x.imgs,x=m(x.height,x.width,q.height*a,q.width*a).scale,x!==0){E=t=v=void 0;for(B=
0;B<D.length;B+=1)v=D[B],t=v.height*x,E=v.width*x,t<1||E<1||(y=g(v),y+="height: "+t+"px; width: "+E+"px;",v.setAttribute("style",y))}--u;C=f.calculateOverlappingImageSets(c,h)}}if(f.getWritingMode()!=="vertical"){c=b.getElementsByTagName("TABLE");for(r=0;r<c.length;r++){u=c[r];v=q;D=C=0;x=parseInt(u.getAttribute("data-nativeWidth"),10);v=v.parentWidth||v.width;x||(x=$(u).width(),u.setAttribute("data-nativeWidth",x));t=Math.min(parseInt(u.getAttribute("data-nativeLeftOffset"),10),u.offsetLeft);if(!t)t=
u.offsetLeft,u.setAttribute("data-nativeLeftOffset",t);E=$(u.offsetParent).width()||v;E=Math.min(E-t,v*a);x>E&&(D=E/x);D>0&&(C=D);C!==0&&(D="scale("+C+")",C=g(u),C+=" -moz-transform: "+D+"; -webkit-transform:"+D+"; -o-transform:"+D+"; -ms-transform:"+D+"; ms-transform:"+D+"; transform:"+D+"; ",D=$(u).css("float"),x="top ",x+=D==="right"?"right":"left",C+=" -moz-transform-origin: "+x+"; -webkit-transform-origin: "+x+"; -o-transform-origin: "+x+"; -ms-transform-origin: "+x+"; ms-transform-origin: "+
x+"; transform-origin: "+x+"; ",u.setAttribute("style",C))}}setTimeout(p.resolve,10)}};(window.ActiveXObject||"ActiveXObject"in window)&&window.XMLHttpRequest?$(b.ownerDocument).ready(r):(s=o.createSubTimer("(WAIT) image-loading"),c(b,function(){s.endTimer();r()}));return p.promise().then(function(){n.endTimer()})}var a=0.95,d=3,e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 100 100'><g><rect x='1%' y='1%' rx='20' ry='20' width='98%' height='98%' style='fill:white; stroke:gray;stroke-width:2;'></rect><text x='50%' y='50%' fill='black' font-size='8px' style='text-anchor: middle; dominant-baseline: central;'>Image Not Supported</text></g></svg>",
k=200;return{fitToViewport:function(a,d,e,b){return f(a,d,e,b)},resize:function(a,d){var e;if($(a).css("position")==="absolute")if(d.width>0&&d.height>0){e=a.offsetWidth>0&&a.offsetHeight>0?Math.min(d.width/a.offsetWidth,d.height/a.offsetHeight):1;var b="scale("+e+")";$(a).css({"-moz-transform":b,"-moz-transform-origin":"left top","-webkit-transform":b,"-webkit-transform-origin":"left top","-o-transform":b,"-o-transform-origin":"left top","ms-transform":b,"ms-transform-origin":"left top","-ms-transform":b,
"-ms-transform-origin":"left top",transform:b,"transform-origin":"left top"});e={width:$(a).width()*e,height:$(a).height()*e}}else e=void 0;return e}}}(),KindleRendererImageRenderer=function(){function g(a,d){for(var e=d.length,b=document.createElement("canvas"),c=0,k=0,f=0;f<e;f+=6)c=Math.max(c,d[f+1]+d[f+5]),k=Math.max(k,d[f]+d[f+4]);b.height=c;b.width=k;m(a,d,b);$(b).css({height:"100%",width:"auto"});return b}function m(a,d,e){for(var b,c,k,f,j,g=d.length,l=e.getContext("2d"),n=0;n<g;n+=6)e=d[n],
b=d[n+1],c=d[n+2],k=d[n+3],f=d[n+4],j=d[n+5],l.drawImage(a,c,k,f,j,e,b,f,j)}function h(a){function d(a,e){return parseInt(a.name.match(n),10)-parseInt(e.name.match(n),10)}for(var e in a){var b=a[e].parent;if(o[b]===void 0||o[b]===null)o[b]=[];o[b].push({name:a[e].name,width:a[e].width,height:a[e].height})}for(e in o)o[e].sort(d)}function b(a,d,e,b){var c=d&&d.metadata||e&&e.metadata;if(c&&c.map){$(a).css("display","none");var k,f=function(){a.parentNode&&(k?m(a,c.map,k):(k=g(a,c.map),$(a.parentNode).append(k)))},
j=KindleHostDeviceDetector.hasMissingImgOnLoadProblem&&KindleHostDeviceDetector.hasMissingImgOnLoadProblem();if(j)var l=s.map(function(a){return setTimeout(f,a)});a.onload=function(){f();j&&l.forEach(function(a){clearTimeout(a)})}}else KindleHostDeviceDetector.hasImageRenderingProblem&&KindleHostDeviceDetector.hasImageRenderingProblem()&&$(a).attr("data-repaint-on-show","1");if(d&&d[b])a.src=d[b];else if(e&&e[b])a.src=e[b]}function c(a){a=a.split("url(")[1].split(")")[0].split("resources");bgImgFilepath=
a[0];bgImgResourceName="resources"+a[a.length-1];return{bgImgFilepath:bgImgFilepath,bgImgResourceName:bgImgResourceName}}function f(a,d,e){var b=0;a.substring(a.length-1,a.length)==="%"?b=d!==0?parseFloat(a)/100*e/d:1:a.substring(a.length-2,a.length)==="px"?(e=0,e=parseFloat(a),b=d!==0?e/d:1):b=1;return b}function a(a,d,e,b){var c=d.css("background-size").split(",")[0].trim().split(" "),k,j=!1,g=!1;c[0]==="auto"?c=k="100%":c[0]==="cover"?(j=!0,c=k="100%"):c[0]==="contain"?(g=!0,c=k="100%"):c.length===
1?(k=c[0],c="100%"):(k=c[0],c=c[1]);a.w=f(k,e,d.width());a.h=f(c,b,d.height());if(j)d=a.w>a.h?a.w:a.h,a.w=d,a.h=d;else if(g)d=a.w<a.h?a.w:a.h,a.w=d,a.h=d}function d(a,d,e,b,c,k,f){for(var j=[],g=[],l=0,n=0,q=0,l=0;l<c;l++)j[l]=k*e[l],g[l]=f*b[l],a[l]=Math.round(j[l]),n+=g[l],d[l]=Math.round(n-q),q+=d[l]}function e(a,d){if(a==="top"||a==="left")a="0%";a==="center"&&(a="50%");if(a==="bottom"||a==="right")a="100%";var e=0,e=a.substring(a.length-1,a.length)==="%"?parseFloat(a)/100*d:a.substring(a.length-
2,a.length)==="px"?parseFloat(a):0;return Math.round(e)}function k(a,d){var b=d.css("background-position").split(",")[0].trim().split(" "),c;b.length===1?(c=b[0],b="50%"):(c=b[0],b=b[1]);a.x=e(c,d.width());a.y=e(b,d.height())}function j(e){function b(){B++;B===n&&f.css("background-image",E)}var f=$(e),j=f.css("background-image");if(!(j==="none"||j==="inherit")){var j=c(j),g=j.bgImgFilepath,l=o[j.bgImgResourceName];if(l!==void 0&&l!==null){var j=0,n=l.length;f.addClass(q);for(var p=[],h=[],s=0,m=0,
E="",s=[],j=0;j<n;j++)s[j]="url("+g+l[j].name+")",p[j]=l[j].width,h[j]=l[j].height,m+=h[j],E+=s[j],j!==n-1&&(E+=",");for(var s=p[0],B=0,j=0;j<n;j++)jqImgSlicedNode=$("<img/>"),jqImgSlicedNode[0].onload=b,jqImgSlicedNode[0].src=g+l[j].name;j={w:1,h:1};a(j,f,s,m);m=[];g=[];d(m,g,p,h,n,j.w,j.h);p="";for(j=0;j<n;j++)p=p+m[j]+"px "+g[j]+"px",j!==n-1&&(p+=",");e.setAttribute("style",(e.style||"")+("; background-size: "+p+" !important;"));p={x:0,y:0};k(p,f);for(var h=[],m=[],l=0,y=s="",j=0;j<n;j++)h[j]=
p.x,m[j]=p.y+l,s=s+h[j]+"px "+m[j]+"px",y+="no-repeat",l+=g[j],j!==n-1&&(s+=",",y+=",");e.setAttribute("style",(e.style||"")+("; background-position: "+s+" !important;"));f.css("background-repeat",y)}}}function l(a,e,b){for(var c=[],k=[],j=[],f=[],g=0,l=0,n=$(e).children(),l=l=0;l<n.length;l++)c[l]=n[l].width,k[l]=n[l].height,g+=k[l];l=c[0];if(!(g===0||l===0)){$(a).css("display","block");var q=parseInt($(a).css("height"),10),o=parseInt($(a).css("width"),10);o===0&&q===0?(o=l,q=g):q===0?q=Math.round(g/
l*o):o===0&&(o=Math.round(l/g*q));$(a).width(o);$(a).height(q);d(j,f,c,k,n.length,o/l,q/g);for(l=0;l<n.length;l++)$(n[l]).width(j[l]),$(n[l]).height(f[l]),$(n[l]).css("top","0px"),$(n[l]).css("left","0px"),$(n[l]).css("position","relative"),$(n[l]).css("border","none"),$(n[l]).css("display","block"),b&&$(n[l]).css("margin-bottom","-1px");$(e).css("line-height",0);$(e).css("display","inline-block");$(e).css("position",$(a).css("position"));$(e).css("width",$(a).css("width"));$(e).css("height",$(a).css("height"));
$(e).css("top",$(a).css("top"));$(e).css("left",$(a).css("left"));$(e).css("bottom",$(a).css("bottom"));$(e).css("right",$(a).css("right"));$(e).css("float",$(a).css("float"));$(e).css("padding",$(a).css("padding"));$(e).css("border",$(a).css("border"));$(e).css("margin",$(a).css("margin"))}}var q="amzn-sliced-bgimg-ori",o={},p=null,n=RegExp(/\d+$/),s=[200,500,1E3];return{initialize:function(a){if(a.coverResource!==null&&a.coverResource!==void 0)p=a.resourceManifest[a.coverResource].name;a=a.compositeResourceManifest;
a!==void 0&&a!==null?h(a):o={}},cleanup:function(){o={}},getCompositeData:function(){return o},getCoverImageSlices:function(){return o[p]},resolveCompositeResources:function(a){if(!$.isEmptyObject(o)){for(var d=[],e=0;e<a.length;e++){var b=[],c=b,k=a[e];if(o[k]!==void 0&&o[k]!==null)for(var j=o[k].length,f=0;f<j;f++)c.push(o[k][f].name);d=b.length>0?d.concat(b):d.concat(a[e])}a=d}return a},loadImage:function(a,d,e,c){var k=o[c];if(k!==void 0&&k!==null){$(a).addClass("amzn-sliced-inimg-ori");(c=a.getAttribute("alt"))&&
a.setAttribute("data-alt-text",c);a.removeAttribute("alt");$(a).css("display","none");c=$("<div/>",{"class":"amzn-sliced-inimg-div"});c.insertBefore($(a));c.attr("data-nid",a.getAttribute("data-nid"));for(var j=k.length,f=0;f<j;f++)a=$("<img/>",{"class":"amzn-sliced-inimg-imgslice"}),a.width(k[f].width),a.height(k[f].height),b(a[0],d,e,k[f].name),a.appendTo(c)}else b(a,d,e,c)},scaleCompositeInlineImages:function(a){if(!$.isEmptyObject(o)){for(var d=a.getElementsByClassName("amzn-sliced-inimg-ori"),
a=a.getElementsByClassName("amzn-sliced-inimg-div"),e=d.length,b=0,b=0;b<e;b++){l(d[b],a[b],!0);var c=$(a[b]).children()[0],k=d[b].getAttribute("data-alt-text");k&&c.setAttribute("alt",k)}$(d).remove()}},scaleCompositeBackgroundImages:function(a){if(!$.isEmptyObject(o))for(var a=$(a).find("*"),d=0;d<a.length;d++)j(a[d])},scaleImageSlices:l,createCanvasImage:g,scaleCanvas:function(a,d){for(var e=a,b=e.width,c=e.height;b>d.width&&c>d.height;){var k=Math.max(d.width,Math.round(b*0.75)),j=Math.max(d.height,
Math.round(c*0.75)),f=document.createElement("canvas"),g=f.getContext("2d");f.width=k;f.height=j;$(f).attr("id","c1");g.drawImage(e,0,0,b,c,0,0,k,j);g.globalAlpha=0.5;g.drawImage(a,0,0,a.width,a.height,0,0,k,j);e=f;b=e.width;c=e.height}return e}}}(),KindleRendererWritingModeFactory=function(){function g(a,d,e,b,j){var f=c*Math.min(e,b),g=Math.abs(e-b);return(a<d?a+e-d:d+b-a)>f&&(!j||g<f)}function m(a){var d=a.getAttribute("style");a.setAttribute("style",(d?d+"; ":"")+"-webkit-writing-mode: vertical-rl !important; writing-mode: vertical-rl !important;")}
function h(){var a=KindleRendererDeviceSpecific.usesDocRelativeVerticalCoordinates(),d=0,e=!1;return{getWritingMode:function(){return"vertical"},resetHeight:function(a){$(a).css("width",$(a.parentNode).width()+"px")},resetWidth:function(a){$(a).css("height",$(a.parentNode).height()+"px")},resetIframeDimensions:function(a){$(a).css({width:$(a.parentNode).width()+"px",height:$(a.parentNode).height()+"px"})},padImageIfNeeded:function(a){var d=$(a).css("margin-left");parseInt(d,10)<=1&&$(a).css("margin-left",
"2px")},getAvailableSizeForImage:function(a,d,e){var b=Math.min(a.getAttribute("data-nativeTopOffset"),a.offsetTop),c=$(a.offsetParent).outerHeight()||d.height,f=$(a.offsetParent).outerWidth()||d.width,c=Math.min(c-b,d.height*e),f=Math.min(f,d.width*e);$(a).css("float")!=="none"&&(e=$(a).parent(),a=parseInt($(e).css("line-height"),10),e=parseInt($(e).css("font-size"),10),f=Math.min(f,d.width-(a+e)));return{width:f,height:c}},calculateOverlappingImageSets:function(a,d){function e(a,d){return a.offsetLeft-
d.offsetLeft}var b=[];if(a.length>1){for(var a=Array.prototype.slice.call(a).sort(e),c=null,f=a[0],g=f.offsetLeft+f.width,h,r,w=1;w<a.length;++w)if(h=a[w],!d(h)){r=h.offsetLeft+h.width;if(h.offsetLeft<=g){c||(c={left:f.offsetLeft,right:g,imgs:[f]});if(r>c.right)c.right=r;c.imgs.push(h)}else c&&(b.push({height:0,width:c.right-c.left,imgs:c.imgs}),c=null);f=h;g=c?c.right:r}c&&b.push({height:0,width:c.right-c.left,imgs:c.imgs})}return b},forceRepaint:function(a){if(a.contentDocument)a.contentDocument.body.style.top=
0,setTimeout(function(){a.contentDocument.body.style.top=""},1)},setHeight:function(a,d){$(a).css("width",d)},setWidth:function(a,d){$(a).css("height",d)},fitToBottomOfFrame:function(a,d,e){$(d).css({height:"100%",width:$(a).width()-e+1,top:0,left:$(a).position().left-1})},height:function(a){return $(a).width()},width:function(a){return $(a).height()},prepareForPagination:function(a){d=$(a).width();this.scrollToTopOfDocument(a);e=$(a.contentDocument).find("table").length>0},getBorderMap:function(a,
e){var b,c,f,g;for(b=0;b<a.length;b++){f=a[b];c=f.getBoundingClientRect();if((g=$(f).css("border-right-style"))&&g!=="none")if(g=parseInt($(f).css("border-right-width"),10))g={borderStart:d-c.right-g,borderEnd:d-c.right},e.top.push(g);if((g=$(f).css("border-left-style"))&&g!=="none")if(f=parseInt($(f).css("border-left-width"),10))g={borderStart:d-c.left,borderEnd:d-c.left+f},e.bottom.push(g)}},getTransformedClientRects:function(a,b,c){var f=a.length,g=[],h=b&&b.deltaX||0,c=b&&b.fontSize||c&&parseInt(c.fontSize,
10)||void 0,n=0;a.length>1&&(a[0].height<=1&&++n,a[a.length-1].height<=1&&--f);for(;n<f;n++){var s=a[n],r=s.right+h-(b&&parseInt(b.ownerDocument.body.style.left,10)||0),w=c&&b.tagName!=="IMG"?c:s.width,s={top:s.top,bottom:s.bottom,height:s.height,left:d-(r-w),right:d-r,width:w},w=b,r=s;if(e){var z=$(w).closest("TBODY")[0];if(z){var C=0,C=$(z).parent(),u=$(C).width(),C=u,x=$(w).closest("TD")[0];x&&(C-=$(x).width());z=u-$(z).width();C+=z;r.left+=C;r.right+=C}}w&&w.getAttribute&&w.getAttribute("data-isTextCombineBlock")&&
(z=parseInt($(w).css("font-size"),10),w=r.height-z,z=r.width-z,w>0&&(C=Math.ceil(w/2),r.top+=C,r.bottom-=C,r.height-=w),z<0&&(w=Math.ceil(z/2),r.left-=w,r.right+=w,r.width-=z));g.push(s)}return g},getRectsAdjustedForAnnotationMarks:function(a,d){for(var e=a.length,b=[],c=Math.ceil(d/2)+1,f=0;f<e;f++){var g=a[f];b.push({top:g.top,bottom:g.bottom,height:g.height,left:g.left,right:g.right-c,width:g.width+c})}return b},unionRect:function(a){for(var d=a[0],d={left:d.top,right:d.bottom,bottom:d.left,top:d.right},
e=1;e<a.length;++e)d.top=Math.min(d.top,a[e].right),d.bottom=Math.max(d.bottom,a[e].left),d.right=Math.max(d.right,a[e].bottom),d.left=Math.min(d.left,a[e].top);return d},clientRectTop:function(a){return a.right},clientRectBottom:function(a){return a.left},clientRectLeft:function(a){return a.top},clientRectRight:function(a){return a.bottom},clientRectWidth:function(a){return a.height},clientRectHeight:function(a){return a.width},clientRectCompare:function(a,d){return g(a.right,d.right,a.width,d.width,
!1)?a.top-d.top:a.right-d.right},checkIfRectsOnSameLine:function(a,d){return g(a.right,d.right,a.width,d.width,!1)},scrollToTopOfDocument:function(e){var b=0;a&&(b=$(e.contentDocument).width()-d);$(e.contentWindow).scrollLeft(b);e.contentDocument.body.style.top=0;e.contentDocument.body.style.left=0},scrollTop:function(a,d){a.contentDocument.body.style.left=d},getRectBoundariesForScreen:function(a,e){for(var b=[],c=a.length,f=0;f<c;f++)b.push({left:d-(a[f].left-e),top:a[f].top,right:d-(a[f].right-
e),bottom:a[f].bottom});return b},isPointOnVisiblePage:function(a,d,e){return e>d},checkIfNewLine:function(a,d,e){return d===void 0||!g(a.right,d.right,a.width,d.width,e)},updateLineBounds:function(a,d,e,b,c){a.left=c-e.left;a.right=c-e.right;a.height=d&&b?b.top-a.top:e.bottom-a.top;a.width=a.right-a.left},updateLineHeightOfBounds:function(a,d){a.left=a.left>=d.left?a.left:d.left;a.right=a.right<=d.right?a.right:d.right;a.top=d.top;a.bottom=d.bottom},updateDivIfNewLineOrImageBound:function(a,d,e,
b,c,f){var g=!1;if(a.isNewDiv||a.isImageBound)a.lineBounds={top:a.isNewDiv?d.top:a.lineBounds.top+a.lineBounds.height,height:d.height,left:d.left,right:d.right,width:d.width};a.isImageBound=c;a.isNewDiv=this.checkIfNewLine(a.lineBounds,e,!0);(g=a.isNewDiv||a.isImageBound)&&this.updateLineBounds(a.lineBounds,!a.isNewDiv&&!(b||e===void 0),d,e,f);return g},positionDivAfterWord:function(a,d,e,b){a.style.top=d.top+e;a.style.left=b-d.left+d.width+e},getDeltaX:function(a,d){var j;var e=0;if(KindleHostDeviceDetector.isiOS()&&
parseInt(KindleHostDeviceDetector.getOSMajorVersion(),10)<6){if(a.tagName==="RUBY"){var b=d.createRange();b.selectNodeContents(a);var b=b.getClientRects(),c=a.getClientRects();c&&b&&c.length&&b.length&&(e=c[0].left-b[0].left)}if(a.parentNode&&a.parentNode.parentNode){var b=a.nodeType===Node.TEXT_NODE?a.parentNode:a,c=a.nodeType!==Node.TEXT_NODE&&a.tagName!=="RUBY"&&$(b).css("display")==="inline",f=$(b).css("display")==="inline-block",g=$(b.parentNode).css("display")==="inline";if((c||f)&&g){e+=-b.getBoundingClientRect().right;
f=c=b;do f=c,c=c.parentNode;while(c&&$(c).css("display")!=="block");f={containingBlock:c,furthestNonBlockParent:f};if(c=f.containingBlock){j=g=f.furthestNonBlockParent,f=j;do f=f.nextElementSibling;while(f&&$(f).css("display")!=="block");do g=g.previousElementSibling;while(g&&$(g).css("display")!=="block");g=g?g.getBoundingClientRect().left-parseInt($(g).css("margin-left"),10):c.getBoundingClientRect().right;c=f?f.getBoundingClientRect().right+parseInt($(f).css("margin-right"),10):c.getBoundingClientRect().left;
b=g-(b.getBoundingClientRect().left-c)}else b=b.getBoundingClientRect().right;e+=b}}}return e},floatToTopOfIframe:function(a,e){var b=a.document.body,c=b.getBoundingClientRect(),b=a.getComputedStyle(b);$(e).css({position:"absolute",top:parseInt(b.top,10)-c.top,left:parseInt(b.left,10)-(c.left+$(a.document).width()-d)})}}}function b(){return{getWritingMode:function(){return"horizontal"},resetHeight:function(a){$(a).css("height",$(a.parentNode).height()+"px")},resetWidth:function(a){$(a).css("width",
$(a.parentNode).width()+"px")},resetIframeDimensions:function(a){$(a).css({height:$(a.parentNode).height()+"px",width:$(a.parentNode).width()+"px"})},padImageIfNeeded:function(a){var d=$(a).css("margin-bottom");parseInt(d,10)<=1&&$(a).css("margin-bottom","2px")},getAvailableSizeForImage:function(a,d,e){var b=Math.min(a.getAttribute("data-nativeLeftOffset"),a.offsetLeft),c=$(a.offsetParent).outerHeight()||d.height,f=$(a.offsetParent).outerWidth()||d.width,c=Math.min(c,d.height*e),f=Math.min(f-b,d.width*
e);$(a).css("float")!=="none"&&(e=$(a).parent(),a=parseInt($(e).css("line-height"),10),e=parseInt($(e).css("font-size"),10),c=Math.min(c,d.height-(a+e)));return{width:f,height:c}},calculateOverlappingImageSets:function(a,d){function e(a,d){return a.offsetTop-d.offsetTop}var b=[];if(a.length>1){for(var a=Array.prototype.slice.call(a).sort(e),c=null,f=a[0],g=f.offsetTop+f.height,o,h,n=1;n<a.length;++n)if(o=a[n],!d(o)){h=o.offsetTop+o.height;if(o.offsetTop<=g){c||(c={top:f.offsetTop,bottom:g,imgs:[f]});
if(h>c.bottom)c.bottom=h;c.imgs.push(o)}else c&&(b.push({height:c.bottom-c.top,width:0,imgs:c.imgs}),c=null);f=o;g=c?c.bottom:h}c&&b.push({height:c.bottom-c.top,width:0,imgs:c.imgs})}return b},forceRepaint:function(){},setHeight:function(a,d){$(a).css("height",d)},setWidth:function(a,d){$(a).css("width",d)},fitToBottomOfFrame:function(a,d,e){e=$(a).height()-e+1;a=$(a).position().top+$(a).height()-e+1;$(d).css({height:e,width:"100%",top:a,left:0})},height:function(a){return $(a).height()},width:function(a){return $(a).width()},
prepareForPagination:function(a){this.scrollToTopOfDocument(a)},getBorderMap:function(a,d){var e,b,c,f;for(e=0;e<a.length;e++){c=a[e];b=c.getBoundingClientRect();if((f=$(c).css("border-top-style"))&&f!=="none")if(f=parseInt($(c).css("border-top-width"),10))f={borderStart:b.top-f,borderEnd:b.top},d.top.push(f);if((f=$(c).css("border-bottom-style"))&&f!=="none")if(c=parseInt($(c).css("border-bottom-width"),10))f={borderStart:b.bottom,borderEnd:b.bottom+c},d.bottom.push(f)}},getTransformedClientRects:function(a,
d){a.length>1&&(a[0].width<=1&&(a=Array.prototype.slice.call(a,1)),a[a.length-1].width<=1&&(a=Array.prototype.slice.call(a,0,-1)));if(d){var e=[],b=parseInt(d.ownerDocument.body.style.top,10);if(b!==0){for(var c=0;c<a.length;++c){var f=a[c];e.push({top:f.top-b,bottom:f.bottom-b,height:f.height,left:f.left,right:f.right,width:f.width})}a=e}}return a},getRectsAdjustedForAnnotationMarks:function(a,d){for(var e=a.length,b=[],c=Math.ceil(d/2)+1,f=0;f<e;f++){var g=a[f];b.push({top:g.top-c,bottom:g.bottom,
height:g.height+c,left:g.left,right:g.right,width:g.width})}return b},unionRect:function(a){for(var d=a[0],d={top:d.top,bottom:d.bottom,left:d.left,right:d.right},e=1;e<a.length;++e)d.top=Math.min(d.top,a[e].top),d.right=Math.max(d.right,a[e].right),d.bottom=Math.max(d.bottom,a[e].bottom),d.left=Math.min(d.left,a[e].left);return d},clientRectTop:function(a){return a.top},clientRectBottom:function(a){return a.bottom},clientRectLeft:function(a){return a.left},clientRectRight:function(a){return a.right},
clientRectWidth:function(a){return a.width},clientRectHeight:function(a){return a.height},clientRectCompare:function(a,d){return g(a.top,d.top,a.height,d.height,!1)?a.left-d.left:a.top-d.top},checkIfRectsOnSameLine:function(a,d){return g(a.top,d.top,a.height,d.height,!1)},scrollToTopOfDocument:function(a){$(a.contentWindow).scrollTop(0);a.contentDocument.body.style.top=0;a.contentDocument.body.style.left=0},scrollTop:function(a,d){a.contentDocument.body.style.top=-d},getRectBoundariesForScreen:function(a,
d){for(var e=[],b=a.length,c=0;c<b;c++)e.push({left:a[c].left,top:a[c].top-d,right:a[c].right,bottom:a[c].bottom-d});return e},isPointOnVisiblePage:function(a,d,e,b){return b<a-d},checkIfNewLine:function(a,d,e){return d===void 0||!g(a.top,d.top,a.height,d.height,e)},updateLineBounds:function(a,d,e,b){a.top=Math.min(e.top,a.top);a.bottom=Math.max(e.bottom,a.bottom);a.height=a.bottom-a.top;a.width=d&&b?b.left-a.left:e.right-a.left},updateLineHeightOfBounds:function(a,d){a.top=a.top?a.top<=d.top?a.top:
d.top:d.top;a.bottom=a.bottom?a.bottom>=d.bottom?a.bottom:d.bottom:d.bottom;a.left=d.left;a.right=d.right},updateDivIfNewLineOrImageBound:function(a,d,e,b,c){var g=!1;if(a.isNewDiv||a.isImageBound)a.lineBounds={top:d.top,height:d.height,left:a.isNewDiv?d.left:a.lineBounds.left+a.lineBounds.width,right:d.right,width:d.width,bottom:d.bottom};a.isImageBound=c;var q=a.lineBounds,g=f;if(!q||!e)c=!1;else var c=this.clientRectTop(q),o=this.clientRectTop(e),h=this.clientRectHeight(q),n=this.clientRectHeight(e),
q=Math.max(h,n),h=Math.abs(c+h-(o+n))/q,c=Math.abs(c-o)/q<=g&&h<=g;o=this.checkIfNewLine(a.lineBounds,e,!0);a.isNewDiv=!c||o;(g=a.isNewDiv||a.isImageBound)?this.updateLineBounds(a.lineBounds,!c&&!o&&!(b||e===void 0),d,e):(a.lineBounds.top=Math.min(d.top,a.lineBounds.top),a.lineBounds.bottom=Math.max(d.bottom,a.lineBounds.bottom));return g},positionDivAfterWord:function(a,d,e){a.style.top=d.top+e;a.style.left=d.left+d.width+e},getDeltaX:function(){return 0},floatToTopOfIframe:function(a,d){var e=a.document.body,
b=e.getBoundingClientRect(),e=a.getComputedStyle(e);$(d).css({position:"absolute",top:parseInt(e.top,10)-b.top,left:parseInt(e.left,10)-b.left})}}}var c=0.25,f=0.25;return{buildIFrameWritingMode:function(a){if(!a.contentDocument)return b();var d=$(a.contentDocument.documentElement).css("-webkit-writing-mode")==="vertical-rl"||$(a.contentDocument.documentElement).css("writing-mode")==="vertical-rl"||$(a.contentDocument.body).css("-webkit-writing-mode")==="vertical-rl"||$(a.contentDocument.body).css("writing-mode")===
"vertical-rl";d&&KindleRendererDeviceSpecific.needsWritingModeSpecifiedOnBody()&&m(a.contentDocument.body);d&&KindleRendererDeviceSpecific.needsWritingModeSpecifiedOnRoot()&&m(a.contentDocument.documentElement);return d?h():b()},buildHorizontalWritingMode:b,buildVerticalWritingMode:h}}(),KindleRendererContentReflow=function(){function g(a){a=a.contentDocument.getElementsByTagName("body")[0];return $(a).css("position")==="absolute"}function m(a,d){KindleRendererLanguageOptions.getNeedsPageRefresh()&&
!g(a)?(a.contentDocument.body.style.display="none",setTimeout(function(){a.contentDocument.body.style.display="block";d()},1)):d()}function h(a,b,c,f,o,h){e===null&&(e=KindleRendererWordMapGeneratorFactory.buildWordMapGeneratorForWordBounds());var n=o.createSubTimer("preparation");KindleRendererContentCorrection.applyDocumentWideCorrections(a.contentWindow,a.contentDocument,a.writingMode,n);m(a,function(){a.writingMode.prepareForPagination(a);var s=a.contentDocument.getElementById(d);a.writingMode.floatToTopOfIframe(a.contentWindow,
s);n.endTimer();var r=o.createSubTimer("word-map");e.createWordMap(a.contentDocument,a.contentWindow,b,a.writingMode,c,a.processingRequestId,r).then(function(d,b,c){function f(a){j.endTimer();h(a)}r.endTimer();KindleRendererContentCorrection.cleanup(a.contentDocument.body);var j=o.createSubTimer("height-map");g(a)?KindlePaginatorFixedContent(a.contentDocument,d,$(a).parent().height(),f):KindlePaginatorScreenFragmentation(a.contentDocument,d,b,c,e,a.writingMode.height($(a).parent()),a.writingMode,
f);m(a,function(){})},f.reject)})}function b(a,d,e,b){if(a.processingRequestId.id===d.requestId){a.writingMode.scrollToTopOfDocument(a);a.writingMode.resetHeight(a);var f={height:$(a).parent().height(),width:$(a).parent().width()},g=a.contentDocument.getElementsByTagName("body")[0];if(KindleRendererSettings.getSettings().initialExpandedBodyHeight!==void 0){var n=parseInt($(g).css("margin-top"),10),h=parseInt($(g).css("margin-bottom"),10);g.style.height=parseInt(f.height,10)-n-h+"px"}n=g.getElementsByClassName("k4w-margin");
for(h=0;h<n.length;h+=1){var r=parseInt(n[h].getAttribute("vertical"),10);if(r>0)n[h].style.marginTop=Math.round(r*0.01*f.height)+"px"}KindleRendererElementFitting.fitToViewport(g,a.writingMode,f,d.contentLoadMetrics).then(function(){a.processingRequestId.id!==d.requestId?(d.contentLoadMetrics.addCount("Cancelled",1),d.contentLoadMetrics.endTimer()):c(a,d,e,b)},b.reject)}}function c(a,d,e,b){d.contentLoadMetrics.endTimer();var c=d.metrics.createSubTimer("pagination");h(a,e,d.requestId,b,c,function(e){c.endTimer();
a.processingRequestId.id!==d.requestId?(d.contentLoadMetrics.addCount("Cancelled",1),d.contentLoadMetrics.endTimer()):(a.screenManager=e,d.contentLoadMetrics.endTimer(),b.resolve(d))})}function f(a,d){var e=KindleRendererDeviceSpecific.reflowTimeout();e>0&&setTimeout(function(){if(d.state?d.state()==="pending":!d.isRejected()&&!d.isResolved())a.contentLoadMetrics.addCount("Timeout",1),a.contentLoadMetrics.endTimer(),d.reject()},e)}function a(a,d,e){var c=new jQuery.Deferred;f(d,c);var g=d.contentLoadMetrics.createSubTimer("(YIELD) begin-element-fitting");
setTimeout(function(){g.endTimer();b(a,d,e,c)},KindleRendererDeviceSpecific.drawYieldUpdateTime());return c.promise()}var d="content-overlays",e=null;return{initialize:function(){KindleRendererContentCorrection.initialize()},reflow:function(d,e,b){return a(d,e,b)}}}(),KindlePaginatorFixedContent=function(g,m,h,b){g={minDocTop:0,maxDocTop:0,docBottom:h,wordMap:m};(function(b){b.minPosition=Infinity;b.maxPosition=-Infinity;for(var f in m){var a=parseInt(f,10);if(a>b.maxPosition)b.maxPosition=a;if(a<
b.minPosition)b.minPosition=a}})(g);(function(b){b.hasNextScreen=function(b){return b===0};b.hasPreviousScreen=function(b){return b===h};b.getFirstReadingPositionAtHeight=function(){return null};b.getFirstEmptySpaceBeforeHeight=function(){return 0};b.getTopOfNodeAtPosition=function(){return 0};b.findNextScreen=function(f){return!b.hasNextScreen(f)?null:{topOfScreen:0,bottomOfScreen:h}};b.findPreviousScreen=function(b){return!this.hasPreviousScreen(b)?null:{topOfScreen:0,bottomOfScreen:h}}})(g);b(g)},
KindlePaginatorHeightMapGenerator=function(){function g(a,d,b,c,f,g){b<0&&(b=0);c<0&&(c=0);if(d.previousTop===b&&d.previousBottom===c&&d.previousFontSize===g)return!1;d.previousTop=b;d.previousBottom=c;d.previousFontSize=g;if(b<a.minDocTop)a.minDocTop=b;if(b>a.maxDocTop)a.maxDocTop=b;d=c;if(d>a.docBottom)a.docBottom=d;c-=b;g===void 0&&(g=c);c=b+Math.floor((c-g)/2);g=c+g;a=a.nodeHeightRanges;for(b+=1;b<c;)a[b]>=0||(a[b]=-f),++b;for(;b<g;)a[b]>=0||(a[b]=f),++b;for(;b<d;)a[b]===void 0&&(a[b]=-f),++b;
return!0}function m(a){for(var a=a.nodeHeightRanges,d=a.length,b=0,c,f,g,h,n;b<d;){for(;a[b]<0;)a[b]=-a[b],++b;if(a[b]>=0){for(++b;a[b]>=0;)++b;if(a[b]<0){c=b;h=a[c-1];for(++b;a[b]<0;)++b;f=b-1;n=a[b];if(n>=0){g=Math.floor((c+f)/2);for(delete a[g];c<g;++c)a[c]=h;for(c=g+1;c<=f;++c)a[c]=n}else for(;c<=f;++c)a[c]=h}}++b}}function h(a,d,b,c,f,o,p){function n(){h(a+1,d,b,c,f,o,p)}var s=0;for(KindleRendererProcessTuning.startingOperation("HeightMap");a<d.length;){var r=d[a],w=r.position,z=r.rect,C=c.clientRectTop(z),
z=c.clientRectBottom(z);if(C>0||z>0){var u=Math.round(C);g(b,f,u,u+Math.round(z-C+1),w,r.fontSize)&&s++}if(s>p.count){KindleRendererProcessTuning.endingOperation("HeightMap",s);setTimeout(n,p.interval);return}a++}KindleRendererProcessTuning.endingOperation("HeightMap",s);m(b);setTimeout(o.resolve,p.interval)}function b(a){var d={},a=a.body;d.bodyDimensions={height:a.offsetHeight,width:a.offsetWidth};if(a=a.lastElementChild){var b=$(a),a=b.offset(),c=b.width(),b=b.height();d.lastElementPos={top:a.top,
left:a.left,width:c,height:b}}return d}function c(a,d,b,c,f,g,m,n){if(b){var s=new jQuery.Deferred,r={count:KindleRendererProcessTuning.drawYieldFrequency("HeightMap"),interval:KindleRendererProcessTuning.drawYieldUpdateTime("HeightMap")};h(0,b,c,d,{},s,r);s.promise().then(function(){var b=Array.prototype.slice.call(a.getElementsByTagName("hr")),c,j=[];for(c=0;c<b.length;++c)j.push(b[c].getBoundingClientRect());j=d.getTransformedClientRects(j);for(c=0;c<j.length;++c)g.push(j[c]);b=$(a.body).find("[data-hasCssBorder='true']");
d.getBorderMap(b,m);b=[];b=b.concat(Array.prototype.slice.call(a.getElementsByClassName("page-break")));b=b.concat(Array.prototype.slice.call(a.getElementsByClassName("pagebreak")));c=[];for(j=0;j<b.length;++j)c.push(b[j].getBoundingClientRect());c=d.getTransformedClientRects(c);for(j=0;j<c.length;++j)f.push(Math.round(d.clientRectTop(c[j])));n()},function(){})}}function f(b,c){var f=function(){if(h<b.minDocTop)b.minDocTop=h;if(h>b.maxDocTop)b.maxDocTop=h;if(m>b.docBottom)b.docBottom=m;for(var d=
h;d<m;d++)b.nodeHeightRanges[d]===void 0&&(b.nodeHeightRanges[d]=a)},g,q;g=c.top;q=c.bottom;var h,m,n,s,r;for(n=0;n<g.length;n++){h=Math.round(g[n].borderStart);m=Math.round(g[n].borderEnd);f();r=0;for(s=m;s<b.docBottom;s++)if(b.nodeHeightRanges[s]===void 0&&r<=d)b.nodeHeightRanges[s]=a,r++;else break}for(n=0;n<q.length;n++){h=Math.round(q[n].borderStart);m=Math.round(q[n].borderEnd);f();r=0;for(s=h;s>b.minDocTop;s--)if(b.nodeHeightRanges[s]===void 0&&r<=d)b.nodeHeightRanges[s]=a,r++;else break}}
var a="border-height",d=2;return{getHeightMapTags:function(){return{HARD_PAGE_BREAK:"page-break",HORIZONTAL_RULE:"horizontal-rule",BORDER_HEIGHT:a}},createHeightMap:function(a,d,g,l){var h={nodeHeightRanges:[],minPosition:Infinity,maxPosition:0,minDocTop:Infinity,maxDocTop:0,docBottom:0};h.validationData=b(a);var o=[],m=[],n={top:[],bottom:[]};c(a,d,g,h,o,m,n,function(){for(var a=o,b=0;b<a.length;b++){var c=a[b],e=h.nodeHeightRanges[c];if(e===void 0)h.nodeHeightRanges[c]="page-break";else if(e!==
"page-break")for(var g=1;g<20;g++){if(h.nodeHeightRanges[c-g]!==e){h.nodeHeightRanges[c-g]="page-break";break}if(h.nodeHeightRanges[c+g]!==e){h.nodeHeightRanges[c+g]="page-break";break}}}for(a=0;a<m.length;a++)if(c=Math.round(d.clientRectTop(m[a])),b=Math.round(d.clientRectBottom(m[a])),b>c){if(c<h.minDocTop)h.minDocTop=c;if(c>h.maxDocTop)h.maxDocTop=c;if(b>h.docBottom)h.docBottom=b;for(;c<b;c++)h.nodeHeightRanges[c]===void 0&&(h.nodeHeightRanges[c]="horizontal-rule")}f(h,n,d);o=null;l(h)})}}}(),
KindlePaginator=function(){function g(b,c){if(c!==null)b.currentTopOfScreen=c.topOfScreen,b.currentBottomOfScreen=c.bottomOfScreen,h(b)}function m(b,c){if(c!==null)b.currentTopOfScreen=c.topOfScreen,b.currentBottomOfScreen=c.bottomOfScreen,h(b)}function h(b){var c=KindleRendererDeviceSpecific.animatePageFlip(),f=$(b);c&&(f.removeClass("pageTurnEnd"),f.addClass("pageTurnStart"));b.writingMode.scrollTop(b,b.currentTopOfScreen);b.writingMode.fitToBottomOfFrame(b,b.pageOverflowDiv,b.currentBottomOfScreen-
b.currentTopOfScreen);c&&(f.removeClass("pageTurnStart"),f.addClass("pageTurnEnd"))}return{scrollToTop:function(b,c){var f=b.screenManager.findNextScreen(c||b.screenManager.minDocTop<=1?0:b.screenManager.minDocTop-1);g(b,f)},scrollToBottom:function(b,c){var f=b.screenManager.findPreviousScreen(b.screenManager.docBottom,c);m(b,f)},scrollToPosition:function(b,c,f){c=b.screenManager.getTopOfNodeAtPosition(b.contentDocument,c);c=b.screenManager.getFirstEmptySpaceBeforeHeight(c);f=b.screenManager.findNextScreen(f&&
c<=b.screenManager.minDocTop?0:c);g(b,f)},matchFrames:function(b,c){var f=b.screenManager.getFirstReadingPositionAtHeight(b.currentTopOfScreen),a=b.screenManager.getTopOfNodeAtPosition(b.contentDocument,f)-b.currentTopOfScreen,d=b.currentBottomOfScreen-b.currentTopOfScreen,f=c.screenManager.getTopOfNodeAtPosition(c.contentDocument,f);c.currentTopOfScreen=f-a;c.currentBottomOfScreen=c.currentTopOfScreen+d;h(c)},getApproximateNumPreviousScreens:function(b){var c=b.writingMode.height($(b).parent());
return(b.currentTopOfScreen-b.screenManager.minDocTop)/c},getApproximateNumNextScreens:function(b){var c=b.writingMode.height($(b).parent());return(b.screenManager.maxDocTop-b.currentBottomOfScreen)/c},getCurrentPagePositionRange:function(b){var c=b.screenManager.getFirstReadingPositionAtHeight(b.currentTopOfScreen),b=b.screenManager.getFirstReadingPositionAtHeight(b.currentBottomOfScreen)-1;return{currentTopOfPage:c,currentBottomOfPage:b}},hasPreviousScreen:function(b){return b.screenManager.hasPreviousScreen(b.currentTopOfScreen)},
hasNextScreen:function(b){return b.screenManager.hasNextScreen(b.currentBottomOfScreen)},isPreviousFullScreen:function(b,c){var f=b.screenManager.findPreviousScreen(b.currentTopOfScreen,c);return f!==null?b.screenManager.hasPreviousScreen(f.topOfScreen):!1},isNextFullScreen:function(b){var c=b.screenManager.findNextScreen(b.currentBottomOfScreen);return c!==null?b.screenManager.hasNextScreen(c.bottomOfScreen):!1},nextScreen:function(b,c){var f=b.screenManager.findNextScreen(b.currentBottomOfScreen);
return f!==null&&(c||b.screenManager.hasNextScreen(f.bottomOfScreen))?(g(b,f),!0):!1},previousScreen:function(b,c,f){f=b.screenManager.findPreviousScreen(b.currentTopOfScreen,f);return f!==null&&(c||b.screenManager.hasPreviousScreen(f.topOfScreen))?(m(b,f),!0):!1},getWordMap:function(b){return b.screenManager.wordMap},copyIframe:function(b,c){c.screenManager=b.screenManager;c.writingMode=b.writingMode;c.currentTopOfScreen=b.currentTopOfScreen;c.currentBottomOfScreen=b.currentBottomOfScreen;c.writingMode.resetIframeDimensions(c)},
getSelectableItemBoundariesForCurrentScreen:function(b){for(var c=KindlePaginator.getCurrentPagePositionRange(b),f=b.screenManager.wordMap,a=c.currentBottomOfPage,d={},c=c.currentTopOfPage;c<=a;++c){var e=f[c]&&f[c].rects;if(e!==void 0){var g=f[c].selectableRects;g!==void 0&&(e=g);d[c]=b.writingMode.getRectBoundariesForScreen(e,b.currentTopOfScreen)}}return d},getWordPositionsForCurrentScreen:function(b){var c=KindlePaginator.getCurrentPagePositionRange(b),b=b.screenManager.wordPositions,f=c.currentTopOfPage,
a=c.currentBottomOfPage,c=null;if(b&&b.length>0){var d=KindleListUtilities.binarySearch(b,f),a=KindleListUtilities.binarySearch(b,a,void 0,d);b[d]<f&&++d;c=[];for(f=d;f<=a;++f)c.push(b[f])}return c},isPointOnVisiblePage:function(b,c,f){var a=b.writingMode.height(b),d=b.writingMode.height(b.pageOverflowDiv);return b.writingMode.isPointOnVisiblePage(a,d,c,f)},showEndOfDocument:function(b){b.currentTopOfScreen=b.currentBottomOfScreen;h(b)},isIframePaginationValid:function(b){var c=b.screenManager.validationData;
if(c){var f=b.contentDocument.body,a=c.bodyDimensions,b=$(b).parent(),d=window.navigator.userAgent.indexOf("MSIE")!==-1;if(f.offsetHeight===a.height&&f.offsetWidth===a.width||f.offsetHeight<=b.height()&&f.offsetWidth<=b.width())return!0;else if(d&&(a=Math.abs(f.offsetHeight-a.height),f.offsetWidth===f.offsetWidth&&a<80))return!0;f=f.lastElementChild;return(c=c.lastElementPos)&&f?(b=$(f),f=b.offset(),a=b.width(),b=b.height(),f.top===c.top&&f.left===c.left&&a===c.width&&b===c.height):!1}return!0},clearIframePaginationValidation:function(b){b.screenManager.validationData=
null},cleanupIframe:function(b){b.screenManager=null}}}(),KindlePaginatorScreenFragmentation=function(g,m,h,b,c,f,a,d){function e(d){c.addBoundsForPosition(g,m,d,a)}function k(d){d.hasNextScreen=function(a){return this.maxDocTop>=a};d.hasPreviousScreen=function(a){return a>this.minDocTop};d.getFirstReadingPositionAtHeight=function(d){if(this.nodeHeightRanges.length===0)return null;var b;a:{for(var c=this.nodeHeightRanges,f=d;f<c.length;f+=1)if(b=c[f],b!==void 0&&b!==l&&b!==q&&b!==o){b=Math.abs(b);
break a}b=this.maxPosition+1}e(b);if(this.wordMap[b]===void 0)return b;c=a.unionRect(this.wordMap[b].rects);for(f=b;f>=this.minPosition;f--)if(e(f),this.wordMap[f]!==void 0){if(this.wordMap[f].rects===void 0)return null;var g=a.unionRect(this.wordMap[f].rects);if(a.checkIfRectsOnSameLine(g,c)||g.top>=d)b=f;else break}return b};d.getFirstEmptySpaceBeforeHeight=function(a){for(var d,b=a;b>=0;b-=1)if(d=this.nodeHeightRanges[b],d===void 0||d===l)return b;return a};d.getTopOfNodeAtPosition=function(d,
b){if(b<this.minPosition)return this.minDocTop;if(b>this.maxPosition)return this.maxDocTop;for(;b<=this.maxPosition;){e(b);var c=this.wordMap[b];if(c){for(var c=c.rects,f=Infinity,g=0;g<c.length;g++){var k=a.clientRectTop(c[g]);k<f&&(f=k)}return Math.round(f)}b+=1}return this.minDocTop};d.findBestPaginationNearBottom=function(d,b){var c=this.nodeHeightRanges[b];return c!==void 0&&(e(c),c=this.wordMap[c]&&this.wordMap[c].rects,c!==void 0&&(c=Math.floor(a.clientRectTop(c[0])+1),d<=c&&c<b))?c:b-1};d.findBestPaginationNearTop=
function(d,b){var c=this.nodeHeightRanges[d];return c!==void 0&&(c<0&&(c=-c),e(c),c=this.wordMap[c]&&this.wordMap[c].rects,c!==void 0&&(c=Math.floor(a.clientRectBottom(c[c.length-1])),d<c&&c<=b))?c:d+1};d.findNextScreen=function(a){if(this.nodeHeightRanges.length===0||!this.hasNextScreen(a))return null;var d=this.nodeHeightRanges.length;if(a!==0&&this.nodeHeightRanges[a]!==l)for(var b=a+1;b<=d&&this.nodeHeightRanges[b]===void 0;)a=b++;for(var c=a,e=b=0,g=!1,k=!1,j,e=a;e<=d;e+=1)if(b+=1,j=this.nodeHeightRanges[e],
j===void 0?(c=e,k=g):j!==l&&(g=!0),j===l&&e>a){b=e-a;k=g;break}else if(b>=f){c===a&&(c=this.findBestPaginationNearBottom(a+1,a+f-1),k=g);b=c-a;break}c={topOfScreen:a,bottomOfScreen:0};e<d?c.bottomOfScreen=a+b:(c.bottomOfScreen=e,k=g);return!k?e<d?this.findNextScreen(c.bottomOfScreen):null:c};d.findPreviousScreen=function(a,d){if(this.nodeHeightRanges.length===0||!this.hasPreviousScreen(a))return null;for(var b=a,c=0,e=0,g,k=!1,j=!1,n=a,w=a,r=0,e=a;e>=0;e-=1)if(c+=1,g=this.nodeHeightRanges[e],g===
void 0?(b=e,j=k,w=n,k||++r):g!==l&&(k=!0,n=e),g===l&&e<a){if(k)return this.findNextScreen(e);r=c=0;w=n=b=a=e}else if(c>=f){b===a&&(w=this.findBestPaginationNearTop(a-f,a-1),j=k);break}b=w-1;if(b<=this.minDocTop)if(b=this.findNextScreen(d||this.minDocTop<=1?0:this.minDocTop-1),b.bottomOfScreen>=a-r)return b;else b=b.bottomOfScreen;result={topOfScreen:b,bottomOfScreen:a};return!j?e>0?this.findPreviousScreen(result.topOfScreen,d):null:result}}var j=KindlePaginatorHeightMapGenerator.getHeightMapTags(),
l=j.HARD_PAGE_BREAK,q=j.HORIZONTAL_RULE,o=j.BORDER_HEIGHT,p=function(a){var d=[],b;for(b in a){var c=parseInt(b,10);d.push(c)}d.sort(function(a,d){return a-d});return d}(m);if(b&&b.length)rects=b;else{rects=[];for(j=0;j<p.length;++j){var n=p[j],s=m[n].rects,r=m[n].fontSize,w;for(w in s)rects.push({position:n,rect:s[w],fontSize:r})}}KindlePaginatorHeightMapGenerator.createHeightMap(g,a,rects,function(a){a.wordMap=m;a.lineRects=b;a.wordPositions=h;a.wordMapKeys=p;a.wordMapGenerator=c;if(p.length>0)a.minPosition=
p[0],a.maxPosition=p[p.length-1];k(a);d(a)})},KindleRendererWordMapGeneratorFactory=function(){function g(a,d){if(a&&a.getComputedStyle)return a.getComputedStyle(d)}function m(a,d){for(var b=[],c=0;c<a.length;++c){var e=a[c];d.clientRectWidth(e)>1&&b.push(e)}return b}function h(a,d,b,c){d&&b>=0&&a.push({rect:d,position:b,fontSize:c})}function b(a){if(a<128)return 1;else if(a<2048)return 2;else if(a>=55296&&a<=57343)return 2;return 3}function c(a,d){a.fontSize=d&&parseInt(d.fontSize,10)||0;a.hasTextEmphasis=
d?d.webkitTextEmphasisStyle&&d.webkitTextEmphasisStyle!=="none":!1;if(a.domChildIndex===void 0)for(var b=a.parentNode.firstChild,c=0;b;){if(b.nodeType===Node.TEXT_NODE)b.domChildIndex=c;b=b.nextSibling;++c}}function f(a,d){if(KindleRendererSettings.getSettings().fixedContent){var b=a.className;if(b&&b.match(s))return}if(!(a.tagName==="RT"||a.tagName==="RP"))if(a.nodeType===Node.TEXT_NODE||a.tagName==="IMG")d.push(a);else for(var b=a.childNodes,c=b.length,e=0;e<c;e+=1)f(b[e],d)}function a(a){var d=
[];f(a,d);return d}function d(d){if((window.ActiveXObject||"ActiveXObject"in window)&&window.XMLHttpRequest)return a(d.body);else try{var b=(new XPathEvaluator).evaluate("/html/body//text()[not(ancestor::ruby)] | //img[not(ancestor::ruby)] | //ruby",d,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),c;if(b.invalidIteratorState)c=a(d.body);else{for(var e=[],f=b.iterateNext();f;)e.push(f),f=b.iterateNext();c=e}return c}catch(g){return a(d.body)}}function e(a){a.addElementsToWordMap=function(a,d,b,
c,e,f,g){function k(){j.addElementsToWordMap(a,d,b+1,c,e,f,g)}var j=this;KindleRendererProcessTuning.startingOperation("ScreenManager");for(var n=0;b<d.length;){var l=d[b],h=l.id,l=j.getValueForNode(a,l,f);l!==null&&(e[h]=l);n+=1;if(n>=c.interval){KindleRendererProcessTuning.endingOperation("ScreenManager",n);setTimeout(k,c.time);return}b+=1}KindleRendererProcessTuning.endingOperation("ScreenManager",n);setTimeout(function(){g.resolve(e,[],null,0)},c.time)};a.getPositionDataForNode=function(a,d,b){a=
a[d+"_"+b];return a===void 0||a.length===0?null:a};a.getNodeId=function(a){var d=a.parentNode,b=d.getAttribute(n),c=0;if(a.ownChildIndex===void 0)for(;d.childNodes[c]!==a;)c+=1;else c=a.ownChildIndex;return{parentId:b,index:c}};a.getAllBaseNodesInRuby=function(a){a=(new XPathEvaluator).evaluate(".//text()[not(ancestor::rt or ancestor::rp)] | .//img[not(ancestor::rt or ancestor::rp)]",a,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);if(!a.invalidIteratorState){for(var d=[],b=a.iterateNext();b;)b.nodeType===
Node.TEXT_NODE&&b.nodeValue.trim().length===0||d.push(b),b=a.iterateNext();return d}};a.addRubyNodeToWordMap=function(a,d,b,e,f,k,j,n){for(var l=this.getAllBaseNodesInRuby(a),r,q=[],o,m=0;m<l.length;++m)o=l[m],o.deltaX=a.deltaX,o.isRuby=!0,o.nodeType===Node.TEXT_NODE?(r=g(b,o.parentNode),c(o,r),(r=this.addTextNodeToWordMap(this.getNodeId(o),o,d,b,e,f,j))&&this.addTextNodeToLineRects(o,k,f,r,j,n)):(r=g(b,o),o.fontSize=r?parseInt(r.fontSize,10):0,(r=this.addImageNodeToWordMap(o,e,f,j))&&h(k,f[r[0]].rects[0],
r[0])),r&&r.length>0&&(q=q.concat(r));return q}}function k(a){a.addTextNodeToWordMap=function(a,d,b,c,e,f,g){var k=d.nodeValue;if(k&&k.trim().length>0&&(e=this.getPositionDataForNode(e,a.parentId,a.index))){var j=e.length-1,n,l=0,r;a:{r=d;for(var h=0;h<2;h++)if(r.parentNode)if(r.parentNode.getAttribute("data-isTextCombineBlock"))break a;else r=r.parentNode;r=null}if(r){if(r.deltaX===void 0)r.deltaX=g.getDeltaX(r,b);r.parentNode.deltaX=r.deltaX;if(n=this.getValueForNode(c,r.parentNode,g))return l=
e[0][1],f[l]=n,[l]}c=0;r=c<j?e[c+1][0]:Infinity;for(var q=l=h=0,o=k.length,m=[],s=0;s<=o;s++)if(n=k.charCodeAt(s),n<128?h+=1:n<2048?h+=2:n>=55296&&n<=57343?(q+=1,h+=2):h+=3,n=n<=32||n===45,s<o){if(!n){if(q===0)n=this.getValueForWord(b,d,s,s+1,n,a.parentId,g);else if(q===1)continue;else q=0,n=this.getValueForWord(b,d,s-1,s+1,n,a.parentId,g);if(n!==null){for(;l>=r;)c++,r=c<j?e[c+1][0]:Infinity;l=e[c][1]+(l-e[c][0]);f[l]=n;m.push(l)}}l=h}return m}}}function j(a){a.addTextNodeToWordMap=function(a,d,b,
c,e,f,g){if((c=d.nodeValue)&&c.trim().length>0)if(e=this.getPositionDataForNode(e,a.parentId,a.index)){for(var k=e.length-1,j=0,n=j<k?e[j+1][0]:Infinity,l=0,r=0,h=0,l=0,q=c.length,o=[],m=0;m<=q;m++){var s=c.charCodeAt(m);r+=s<128?1:s<2048?2:s>=55296&&s<=57343?2:3;s=s<=32||s===45||s===8212;if(m===q||s){h=this.getValueForWord(b,d,h,m,s,a.parentId,g);if(h!==null){for(;l>=n;)j++,n=j<k?e[j+1][0]:Infinity;l=e[j][1]+(l-e[j][0]);f[l]=h;o.push(l)}h=m+1;l=r}}return o}}}function l(a){a.getValueForWord=function(a,
d,b,c,e,f){return c>b?{startOffset:b,endOffset:c,childIndex:d.domChildIndex,fontSize:d.fontSize,dataNid:f}:null};a.getValueForNode=function(a,d,b){var c=d.getClientRects();if(KindleRendererDeviceSpecific.clientRectsExpire()){for(var e=[],f=0;f<c.length;++f)e.push({top:c[f].top,left:c[f].left,bottom:c[f].bottom,right:c[f].right,width:c[f].width,height:c[f].height});c=e}if(c&&c.length>0){b={rects:b.getTransformedClientRects(c,d)};if(d.tagName==="SPAN")a=g(a,d),b.fontSize=a?parseInt(a.fontSize,10):void 0;
if(d.tagName==="IMG")b.tagName="IMG";b.dataNid=d.getAttribute(n);return b}return null};a.getValueForImage=function(a,d){if(a.getClientRects){var b=a.getClientRects();if(b&&b.length>0)return b=this.getBoundingAndSelectableRects(a,b,d),{selectableRects:b.selectableRects,rects:b.boundingRects,dataNid:a.getAttribute(n)}}return null};a.getValueForWhitespace=function(a,d,b){d=d.createRange();d.setStart(a,0);d.setEnd(a,a.length);return d.getClientRects?(d=d.getClientRects(),this.getBoundingAndSelectableRects(a,
d,b).boundingRects):null};a.getBoundingAndSelectableRects=function(a,d,b){var c=void 0,d=b.getTransformedClientRects(d,a),c=a.hasTextEmphasis||a.isRuby?b.getRectsAdjustedForAnnotationMarks(d,a.fontSize):d;return{boundingRects:c,selectableRects:d}};a.addBoundsForPosition=function(a,d,b,c,e){var f=d[b];if(f&&f.rects===void 0&&(e=e||$("["+n+'="'+f.dataNid+'"]',a).contents()[f.childIndex]))a=a.createRange(),a.setStart(e,f.startOffset),a.setEnd(e,f.endOffset),(a=a.getClientRects())&&a.length>0&&(a=this.getBoundingAndSelectableRects(e,
a,c)),a&&a.boundingRects&&a.boundingRects.length>0?(f.selectableRects=a.selectableRects,f.rects=a.boundingRects):delete d[b]};a.getNextValidPositionIndexInNode=function(a,d,b,c,e,f){for(var g;g===void 0&&b<d.length;)g=d[b],this.addBoundsForPosition(e,c,g,f,a),g=c[g],++b;return g===void 0?-1:--b};a.addTextNodeToLineRects=function(a,d,b,c,e){if(c.length!==0){var f=a.ownerDocument,g=f.createRange();g.selectNode(a);var k=this.getBoundingAndSelectableRects(a,m(g.getClientRects(),e),e).boundingRects,j=
k.length,n=a.fontSize,l=0.25*n;if(j===1)h(d,k[0],c[0],n);else if(j>1){var r;if(c.length===1)for(r=0;r<j;r++)h(d,k[r],c[0],n);else{var q=a.nodeValue.length,o=0;for(r=0;r<j;++r)o+=e.clientRectWidth(k[r]);var q=o/q,s=o=!1,p=this.getNextValidPositionIndexInNode(a,c,0,b,f,e);if(!(p<0)){var F=p,I=c[F],K=b[I],N=K.endOffset-K.startOffset,I=K.rects.length,L=0;for(r=0;r<j;++r)if(L<I-1)Math.abs(e.clientRectTop(K.rects[L])-e.clientRectTop(k[r]))<l&&(h(d,k[r],c[p],n),++L);else if(L=Math.min(L,I-1),Math.abs(e.clientRectTop(K.rects[L])-
e.clientRectTop(k[r]))<l){var Q=e.clientRectWidth(k[r]),Q=Math.round(Q/q);e.clientRectLeft(K.rects[L]);for(e.clientRectLeft(k[r]);F<c.length-1&&N<Q;)++F,K=b[c[F]],N+=K.endOffset-K.startOffset;if(p===F&&(++F,F>=c.length)){h(d,k[r],c[p],n);break}for(g.setStart(a,b[c[p]].startOffset);;)if(g.setEnd(a,b[c[F]].endOffset),K=m(g.getClientRects(),e),K.length>I){if(F<=0)break;--F;if(s)break;o=!0}else if(K.length===I){if(o||F>=c.length-1)break;++F;s=!0}else break;h(d,k[r],c[p],n);if(F>=c.length-1)break;o=s=
!1;p=this.getNextValidPositionIndexInNode(a,c,F+1,b,f,e);if(p<0)break;F=p;I=c[F];K=b[I];N=K.endOffset-K.startOffset;I=K.rects.length;L=0;Math.abs(e.clientRectTop(K.rects[0])-e.clientRectTop(k[r]))<l&&++L}}}}}};a.createBoundsWordMap=function(a,b,c,e,f,g,k){var j=new jQuery.Deferred,n={};c.posMap===void 0||$.isEmptyObject(c.posMap)?this.createWordMapFromElements(a,b,n,e,j):c.posMap!==null?(f={interval:KindleRendererProcessTuning.drawYieldFrequency("WordMapGen"),time:KindleRendererProcessTuning.drawYieldUpdateTime("WordMapGen"),
metrics:k||KindleMetricsProfiler("wordMap"),requestId:f,processingRequest:g},this.createWordMapFromNodeList(0,d(a),a,b,c,n,[],e,f,j)):j.resolve(n,[],[],0);return j.promise()};a.computeAllWordRects=function(a,d,b,c,e,f){function g(){if(e.requestId===e.computingRectsId.id){KindleRendererProcessTuning.startingOperation("WordMapGen");for(var o=0;r<b.length;++r){if((l=d[b[r]])&&l.rects===void 0){if(l.dataNid!==j.dataNid||l.childIndex!==j.childIndex)if(k=$("["+n+'="'+l.dataNid+'"]',a).contents()[l.childIndex],
!k)return;j=l;h.setStart(k,l.startOffset);h.setEnd(k,l.endOffset);var m=h.getClientRects();m&&m.length>0&&(m=q.getBoundingAndSelectableRects(k,m,c));m&&m.boundingRects&&m.boundingRects.length>0?(l.selectableRects=m.selectableRects,l.rects=m.boundingRects):delete d[b[r]];++o}if(o>=e.frequency){KindleRendererProcessTuning.endingOperation("WordMapGen",o);setTimeout(g,e.time);return}}KindleRendererProcessTuning.endingOperation("WordMapGen",o);f.resolve()}}var k,j={},l,r=0,h=a.createRange(),q=this;h.getClientRects?
g():f.resolve()};a.addImageNodeToWordMap=function(a,d,b,c){c=this.getValueForImage(a,c);if(c!==null&&(a=a.getAttribute(n),a!==null))return d=d[a],b[d[0][1]]=c,[d[0][1]]};a.createWordMapFromElements=function(a,d,b,c,e){var f=[],f=f.concat(Array.prototype.slice.call(a.getElementsByTagName("IMG"))),f=f.concat(Array.prototype.slice.call(a.getElementsByTagName("CANVAS"))),f=f.concat(Array.prototype.slice.call(a.getElementsByClassName("k4w"))),f=f.concat(Array.prototype.slice.call(a.getElementsByClassName("k4wc"))),
a={interval:KindleRendererProcessTuning.drawYieldFrequency("ScreenManager"),time:KindleRendererProcessTuning.drawYieldUpdateTime("ScreenManager")};this.addElementsToWordMap(d,f,0,a,b,c,e)};a.createWordMapFromNodeList=function(a,d,b,e,f,k,j,n,l,r){function q(){l.requestId===l.processingRequest.id&&o.createWordMapFromNodeList(a+1,d,b,e,f,k,j,n,l,r)}var o=this;KindleRendererProcessTuning.startingOperation("WordMapGen");var m=0,s=d.length,p=null,G=l.numPositionsAdded||0,F=f.wordList&&f.wordList.length;
if(F&&!f.imageList)f.imageList=[];for(var I=f.imageList,K,N=l.metrics.createSubTimer("text counters (timeless)");a<s;){var L=d[a],Q=k;L.deltaX=n.getDeltaX(L,b);if(L.nodeType===Node.TEXT_NODE)K=g(e,L.parentNode),K&&K.display==="none"||(c(L,K),p=o.getNodeId(L),p=o.addTextNodeToWordMap(p,L,b,e,f.posMap,k,n),p===void 0?(p=[],Q=[{rects:o.getValueForWhitespace(L,b,n)}]):this.addTextNodeToLineRects(L,j,k,p,n,N));else if(L.tagName==="IMG"){if(K=g(e,L),L.fontSize=K?parseInt(K.fontSize,10):0,p=o.addImageNodeToWordMap(L,
f.posMap,k,n))h(j,k[p[0]].rects[0],p[0]),F&&I.push(p[0])}else p=o.addRubyNodeToWordMap(L,b,e,f.posMap,k,j,n,N);p&&p.length&&(G+=p.length,KindleRendererContentCorrection.applyNodeLocalCorrections(L,p,Q,e,n,l.metrics));++m;if(m>=l.interval){l.numPositionsAdded=G;KindleRendererProcessTuning.endingOperation("WordMapGen",m);setTimeout(q,l.time);return}++a}s=F?KindleListUtilities.sortedMerge(f.wordList,I):[];delete f.imageList;KindleRendererProcessTuning.endingOperation("WordMapGen",m);r.resolve(k,s,j,
G)}}function q(d){d.getValueForWord=function(a,d,b,c,e){return c>b?(a=d.nodeValue,b={text:a.substr(b,e?c-b+1:c-b)},c===a.length&&(b.text+=this.WORD_DELIMITER),b):null};d.findSibling=function(a){return a&&a.nodeType!==Node.DOCUMENT_NODE?a.nextSibling?a.nextSibling:this.findSibling(a.parentNode):null};d.getValueForNode=function(a,d){if(d.tagName!=="IMG"){var b=d.textContent;if(!/\s/.test(b[b.length-1])){var c=this.findSibling(d);c&&c.className!=="k4w"&&(b+=" ")}return{text:b}}return null};d.getValueForImage=
function(){return null};d.WORD_DELIMITER=KindleRendererLanguageOptions.getHasWhitespaceDelimitedWords()?" ":"";d.createTextWordMap=function(d,b){var c=new jQuery.Deferred,e={},f,g,k,j,n;if(b.posMap===void 0){j=$(d).find("CANVAS,.k4w,.k4wc");j=$.makeArray(j);n=j.length;for(f=0;f<n;f++)k=j[f],g=k.id,k=this.getValueForNode(null,k),k!==null&&(e[g]=k)}else if(b.posMap!==null){j=a(d);n=j.length;for(f=0;f<n;f++)k=j[f],k.nodeType===Node.TEXT_NODE&&(g=this.getNodeId(k),this.addTextNodeToWordMap(g,k,null,null,
b.posMap,e))}c.resolve(e);return c.promise()}}function o(a,d){a.createWordMap=function(a,b,c,e,f,g,k){return d.createBoundsWordMap(a,b,c,e,f,g,k)};a.addBoundsForPosition=function(a,b,c,e,f){d.addBoundsForPosition(a,b,c,e,f)};a.computeWordRects=function(a,b,c,e,f,g,k,j){var n=new jQuery.Deferred;f==="mobi8"&&c&&c.length>0?(f={frequency:KindleRendererProcessTuning.drawYieldFrequency("WordMapGen"),time:KindleRendererProcessTuning.drawYieldUpdateTime("WordMapGen"),requestId:g,computingRectsId:k},d.computeAllWordRects(a,
b,c,e,f,n,j)):n.resolve();return n.promise()}}function p(a,d){a.createWordMap=function(a,b){return d.createTextWordMap(a,b)}}var n="data-nid",s=/(?=.*target)(?=.*mag)/i;return{buildWordMapGeneratorForWordBounds:function(){var a={},d={};e(a);l(a);o(d,a);KindleRendererLanguageOptions.getHasWhitespaceDelimitedWords()?j(a):k(a);return d},buildWordMapGeneratorForWordText:function(){var a={},d={};e(a);q(a);p(d,a);KindleRendererLanguageOptions.getHasWhitespaceDelimitedWords()?j(a):k(a);return d},countUTF8Bytes:function(a){return b(a)}}}(),
KindleRegionAnnotationRenderer=function(){function g(b,f){return b.contentDocument.querySelectorAll("mark[annotationType"+(f?'="'+f.type+'"':"")+"][annotationStart"+(f?'="'+f.start+'"':"")+"]")}function m(b,f,a){var d,e;if(!b||!f||parseInt(b.id,10)>parseInt(f.id,10)||b.tagName==="MARK"||f.tagName==="MARK")throw"Insertion of <mark> tags failed.";if(b.parentNode===f.parentNode){a=a();d=f.nextSibling;e=b.parentNode;var g=b;do b=g,g=b.nextSibling,e.removeChild(b),a.appendChild(b);while(b!==f);e.insertBefore(a,
d)}else KindleRendererUtils.treeDepth(b)>KindleRendererUtils.treeDepth(f)?b.previousElementSibling||KindleRendererUtils.isBlock(b.parentNode)?(d=KindleRendererUtils.previousPositionedNode(b.parentNode),e=KindleRendererUtils.nextPositionedNode(KindleRendererUtils.followingNode(b.parentNode)),m(b,d,a),m(e,f,a)):m(b.parentNode,f,a):f.nextElementSibling||KindleRendererUtils.isBlock(f.parentNode)?(d=KindleRendererUtils.previousPositionedNode(KindleRendererUtils.precedingNode(f.parentNode)),e=KindleRendererUtils.nextPositionedNode(f.parentNode),
m(b,d,a),m(e,f,a)):m(b,f.parentNode,a)}function h(b,f,a){var d=b.contentDocument,b=KindleRendererUtils.findElementAtOrAfterPosition(d,f.start),e=KindleRendererUtils.findElementAtOrBeforePosition(d,f.end);try{m(b,e,function(){var b=d.createElement("mark");b.className=a;b.setAttribute("annotationType",f.type);b.setAttribute("annotationStart",f.start);return b})}catch(g){}}function b(b,f){for(var a=Array.prototype.slice.call(f),d=0;d<a.length;d++){var e=a[d],g=e.getAttribute("annotationType");if(g===
"kindle.highlight"||g==="kindle.search"){for(var g=b.createDocumentFragment(),j=e.firstChild,l;j;)l=j.nextSibling,e.removeChild(j),g.appendChild(j),j=l;j=e.parentNode;l=e.nextSibling;j.removeChild(e);j.insertBefore(g,l)}else e.parentNode.removeChild(e)}}return{createAnnotationElements:function(b,f){var a;for(a=0;a<f.length;a++){var d=f[a];if(d.type==="kindle.highlight")h(b,d,"highlight");else if(d.type==="kindle.note"){var e=b.contentDocument,k=e.createElement("div");k.className="note-icon";var j=
e.createElement("mark");j.className="note";j.setAttribute("annotationType",d.type);j.setAttribute("annotationStart",d.start);j.setAttribute(KindleRendererAnnotationRenderer.ANNOTATION_CLICK_ATTRIBUTE,"true");j.appendChild(k);d=KindleRendererUtils.findElementAtOrBeforePosition(e,d.start);d.parentNode.insertBefore(j,d.nextSibling)}else d.type==="kindle.search"&&(j=b,g(j,d).length>0||h(j,d,"search-result"))}},removeAnnotationElements:function(c,f){b(c.contentDocument,g(c,f))},removeAllAnnotationElements:function(c){b(c.contentDocument,
g(c))}}}(),KindleRegionContentManager=function(){function g(a){if(p||n){if(a<=k)throw{name:"pagingError",message:"Repeating wait request"};k=a;e<0&&d.waitNotification&&d.waitNotification();e=a}}function m(a){if((p||n)&&e>=0&&e<=a)r=0,e=-1,n&&(p=!0,n=!1),d.readyNotification&&d.readyNotification(),d.rectsReadyNotification&&d.rectsReadyNotification()}function h(b,c,f){e<=b&&(c!==KindleRendererIframeManagerFactory.DATA_LOAD_ERROR&&r<s?(++r,a(f)):(d.errorNotification&&d.errorNotification(c),e=-1))}function b(a){a=
l.gotoPosition(a);if(!a){var d=l.getCurrentProcessId();g(d);l.getCurrentProcessDfd().then(function(){m(d)},function(a){h(d,a)})}return a}function c(){try{var d=l.nextScreen();if(!d){var b=l.getCurrentProcessId();g(b);l.getCurrentProcessDfd().then(function(){c();m(b)},function(a){h(b,a,0)})}return d}catch(e){return KindleDebug.breakPt(),a(),!1}}function f(){try{var d=l.previousScreen();if(!d){var b=l.getCurrentProcessId();g(b);l.getCurrentProcessDfd().then(function(){f();m(b)},function(a){h(b,a,0)})}return d}catch(c){return KindleDebug.breakPt(),
a(),!1}}function a(){var a=l.getPagePositionRange();if(a!==null)q=a.currentTopOfPage;l.reloadNotification();b(q)}var d={},e=-1,k=-1,j=null,l=null,q=0,o,p=!0,n=!1,s=3,r=0;return{initialize:function(a,b,c){j=a;d=b;o=c;q=void 0;l=KindleRendererIframeManagerFactory.build(j);l.setOverlayManager(o);l.setAnnotationEventCallback(d.annotationTriggered)},cleanup:function(){l&&l.cleanup();j=l=null;e=k=-1;d={};o=null},hide:function(){n=p=!1},show:function(){n=!0},updateSettings:function(a){l.updateSettings(a)},
gotoPosition:function(a){return b(a,0)},nextScreen:function(){return c()},previousScreen:function(){return f()},hasNextScreen:function(){return l.hasNextScreen()},hasPreviousScreen:function(){return l.hasPreviousScreen()},getPagePositionRange:function(){return l.getPagePositionRange()},getSelectableItemBoundaries:function(){return null},getWordPositions:function(){return null},onWindowResize:function(){l.resizeNotification()},handleClick:function(){},reloadAnnotations:function(){l&&l.reloadAnnotations()},
getZoomableAt:function(){return null},getZoomableList:function(){return[]},clearSelection:function(){l.clearSelection()},getSelection:function(){return l.getSelection()}}}(),KindleRegionIframeManager=function(){function g(a){a.cancelCurrentRequest=function(){if(this.currentRequest)this.currentRequest.cancelled=!0,this.currentRequest=null};a.createNewRequest=function(a,b){this.cancelCurrentRequest();this.currentRequest={type:a,requestId:KindleRendererRequestId.getUniqueRequestId(),metrics:KindleMetricsProfiler("renderer-iframe-load"),
retryCount:0,initialPosition:b};this.currentRequestDfd=new jQuery.Deferred};a.willRetryCurrentRequest=function(){this.currentRequest&&this.currentRequest.retryCount++};a.canRetryCurrentRequest=function(){return this.currentRequest?this.currentRequest.retryCount<f:!0};a.calculateIframePaginationData=function(a,b,f){var g=this,l=KindleRendererFragmentLoader.getBookContentType()==="topaz"?g.currentRequest.type?KindleRendererIframePreparation.CANVAS_INSERTION_PREVIOUS:KindleRendererIframePreparation.CANVAS_INSERTION_NEXT:
KindleRendererIframePreparation.CANVAS_INSERTION_NONE;KindleRendererIframePreparation.prepareIframe(a,g.currentRequest,b,f,l).then(function(b){if(a.processingRequestId.id===b.requestId&&g.currentRequest&&g.currentRequest.requestId===b.requestId)a.processingRequestId.id=null,g.frameIsLoadedAndReady(a);g=null},function(a){g.currentRequest&&a&&g.currentRequest.requestId===a.requestId&&g.currentRequestDfd.reject(c);g=null})};a.loadContentDataIntoIframe=function(a){var c=this;c.currentRequest.contentLoadMetrics=
c.currentRequest.metrics.createSubTimer("content-load");c.contentRange[this.hiddenIframeIndex]=a.contentRange;var f=this.iframes[this.hiddenIframeIndex];f.processingRequestId.id=c.currentRequest.requestId;KindleRendererIframeLoading.loadIframe(f,c.currentRequest,a).then(function(g,l){KindleRendererProcessTuning.runAfterYield(KindleRendererDeviceSpecific.yieldTimeAfterIframeLoaded(),g.type,function(){if(f.processingRequestId.id===g.requestId&&c.currentRequest&&c.currentRequest.requestId===g.requestId){c.positionData[c.hiddenIframeIndex]=
l.positionData;var h=c.getViewportDimensions(f);c.regionManagers[c.hiddenIframeIndex].computeFilledRegionNodes();c.ensureElementsWillFit(f,h,c.currentRequest.contentLoadMetrics).then(function(){c.currentRequest.contentLoadMetrics.endTimer();c.calculateIframePaginationData(f,a,l);(KindleHostDeviceDetector.isMetro()||KindleHostDeviceDetector.isIE())&&c.addSelectionListener(f);c=null},function(){c.currentRequest&&c.currentRequestDfd.reject(b);c=null})}else c=null})},function(){c.currentRequest&&c.currentRequestDfd.reject(b)})};
a.ensureElementsWillFit=function(a,b,c){a.writingMode.scrollToTopOfDocument(a);a.writingMode.resetHeight(a);var f=a.contentDocument.getElementsByTagName("body")[0];if(KindleRendererSettings.getSettings().initialExpandedBodyHeight!==void 0){var g=parseInt($(f).css("margin-top"),10),h=parseInt($(f).css("margin-bottom"),10);f.style.height=parseInt(b.height,10)-g-h+"px"}g=f.getElementsByClassName("k4w-margin");for(h=0;h<g.length;h+=1){var o=parseInt(g[h].getAttribute("vertical"),10);if(o>0)g[h].style.marginTop=
Math.round(o*0.01*b.height)+"px"}return KindleRendererElementFitting.fitToViewport(f,a.writingMode,b,c)};a.annotationClickedHandler=function(a){if(this.annotationEventCallback!==void 0){var b=a.currentTarget.parentNode,a=b.getAttribute("annotationType"),b=b.getAttribute("annotationStart");this.annotationEventCallback(a,b)}};a.renderAnnotations=function(a,b){a&&KindleRegionAnnotationRenderer.removeAllAnnotationElements(a);if(this.overlayManager){var c=this.overlayManager.getOverlaysInRange(b.startPosition,
b.endPosition);c&&c.length>0&&this.createAnnotationElements(a,c)}};a.frameIsLoadedAndReady=function(a){var b=this.currentRequest;this.iframeLoadStatus[a.index]=b.type;this.renderAnnotations(a,this.contentRange[a.index]);b&&b.initialPosition!==null&&(this.regionManagers[a.index].updateView(KindleRegionManagerFactory.VIEW_REQUEST.GO_TO_POSITION,{position:b.initialPosition}),a===this.iframes[this.hiddenIframeIndex]&&(this.swapIframes(),this.updateDisplayedPositionsInPage()));b.metrics.addCount("Success",
1);b.metrics.endTimer();b.metrics.log();this.currentRequest=null;setTimeout(this.currentRequestDfd.resolve,10);b.type===this.loadedType.GOTO_POSITION&&this.considerLoadingMoreFragments()};a.loadFragmentsForRange=function(a){var b=this;KindleRendererFragmentLoader.loadFragments(a,b.currentRequest).then(function(a,d){b.currentRequest&&b.currentRequest.requestId===a.requestId&&b.loadContentDataIntoIframe(d);b=null},function(a,d){b.currentRequest&&b.currentRequest.requestId===d.requestId&&b.currentRequestDfd.reject(h);
b=null})};a.gotoPosition=function(a){var b=this.iframes[this.visibleIframeIndex];b&&KindleRegionAnnotationRenderer.removeAllAnnotationElements(b);this.createNewRequest(this.loadedType.GOTO_POSITION,a);a=KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForGoTo(a);if(KindleRendererFragmentLoader.needToLoadFragments(this.contentRange[this.visibleIframeIndex],a))return this.loadFragmentsForRange(a),!1;else this.frameIsLoadedAndReady(this.iframes[this.visibleIframeIndex]);return!0};
a.setIframeVisibility=function(a,b){b?this.regionManagers[a].show():this.regionManagers[a].hide()};a.swapIframes=function(){this.iframeLoadStatus[this.visibleIframeIndex]=this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.NEXT?this.loadedType.PREVIOUS:this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.PREVIOUS?this.loadedType.NEXT:this.loadedType.EMPTY;this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY;var a=this.visibleIframeIndex;this.visibleIframeIndex=
this.hiddenIframeIndex;this.hiddenIframeIndex=a;this.setIframeVisibility(this.visibleIframeIndex,!0);this.setIframeVisibility(this.hiddenIframeIndex,!1)};a.getPagePositionRange=function(){return this.regionManagers[this.visibleIframeIndex].getPagePositionRange()};a.reloadAnnotations=function(){this.renderAnnotations(this.iframes[this.visibleIframeIndex],this.contentRange[this.visibleIframeIndex]);this.iframes[this.hiddenIframeIndex]!==null&&this.iframeLoadStatus[this.hiddenIframeIndex]!==this.loadedType.EMPTY&&
this.renderAnnotations(this.iframes[this.hiddenIframeIndex],this.contentRange[this.hiddenIframeIndex])};a.loadNextPages=function(){if(this.iframeLoadStatus[this.hiddenIframeIndex]!==this.loadedType.NEXT&&(this.currentRequest===null||this.currentRequest.type!==this.loadedType.NEXT)){var a=this.contentRange[this.visibleIframeIndex].endPosition+1,b=this.getPagePositionRange(),a=KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForPageFlip(a,b);this.createNewRequest(this.loadedType.NEXT,
null);this.loadFragmentsForRange(a)}};a.loadPreviousPages=function(){if(this.iframeLoadStatus[this.hiddenIframeIndex]!==this.loadedType.PREVIOUS&&(this.currentRequest===null||this.currentRequest.type!==this.loadedType.PREVIOUS)){var a=this.contentRange[this.visibleIframeIndex].startPosition-1,b=this.getPagePositionRange(),a=KindleRendererPositionLoadingCalculator.calculateDesiredFragmentRangeForPageFlip(a,b);this.createNewRequest(this.loadedType.PREVIOUS,null);this.loadFragmentsForRange(a)}};a.considerLoadingMoreFragments=
function(a){if(this.canPreloadNext){var b=a!==this.direction.PREVIOUS?4:2;if(this.getApproximateNumNextScreens()<b&&this.hasMoreNextFragments()){this.loadNextPages();return}}this.canPreloadPrevious&&(a=a===this.direction.PREVIOUS?4:2,this.getApproximateNumPrevScreens()<a&&this.hasMorePreviousFragments()&&this.loadPreviousPages())};a.crossSkeletonBoundary=function(){var a=this.contentRange[this.visibleIframeIndex],b=this.contentRange[this.hiddenIframeIndex];if(this.iframeLoadStatus[this.hiddenIframeIndex]===
this.loadedType.NEXT)if(a.skeletonId+1===b.skeletonId)return this.swapIframes(),!0;else if(a.skeletonId!==b.skeletonId)return this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY,!1;if(this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.PREVIOUS)if(a.skeletonId-1===b.skeletonId)return this.swapIframes(),!0;else if(a.skeletonId!==b.skeletonId)this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY;return!1};a.cleanup=function(){this.cancelCurrentRequest();KindleRendererIframeLoading.cleanupIframe(this.iframes[this.visibleIframeIndex]);
KindleRendererIframeLoading.cleanupIframe(this.iframes[this.hiddenIframeIndex]);this.setOverlayManager(null);this.contentRange=[null,null];this.positionData=[null,null];this.iframes=null};a.hasMoreNextFragments=function(){return this.contentRange[this.visibleIframeIndex].endPosition!==KindleRendererFragmentLoader.getMaximumPosition()};a.hasMorePreviousFragments=function(){return this.contentRange[this.visibleIframeIndex].startPosition!==KindleRendererFragmentLoader.getMinimumPosition()};a.isAtEndOfDocumentOrSkeleton=
function(){var a=this.contentRange[this.visibleIframeIndex];return KindleRendererFragmentLoader.isPositionAtEndOfSkeletonOrDocument(a.skeletonId,a.endPosition)};a.isAtBeginningOfDocumentOrSkeleton=function(){var a=this.contentRange[this.visibleIframeIndex];return KindleRendererFragmentLoader.isPositionAtBeginningOfSkeletonOrDocument(a.skeletonId,a.startPosition)};a.getApproximateNumNextScreens=function(){return this.regionManagers[this.visibleIframeIndex].getApproximateNumNextScreens(this.isAtEndOfDocumentOrSkeleton())};
a.getApproximateNumPrevScreens=function(){return this.regionManagers[this.visibleIframeIndex].getApproximateNumPrevScreens(this.isAtBeginningOfDocumentOrSkeleton())};a.hasNextScreen=function(){return this.regionManagers[this.visibleIframeIndex].hasNextScreen(this.isAtEndOfDocumentOrSkeleton())||this.hasMoreNextFragments()};a.hasPreviousScreen=function(){return this.regionManagers[this.visibleIframeIndex].hasPreviousScreen(this.isAtBeginningOfDocumentOrSkeleton())||this.hasMorePreviousFragments()};
a.updateDisplayedPositionsInPage=function(){var a=this.getPagePositionRange();KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(a.currentBottomOfPage-a.currentTopOfPage)};a.considerFlippingFrames=function(){var a=this.iframeLoadStatus[this.hiddenIframeIndex];if(a!==this.loadedType.EMPTY){var b=this.getPagePositionRange(),c=this.contentRange[this.hiddenIframeIndex],f=0,g=0;a===this.loadedType.NEXT?g=1:f=1;if(b.currentTopOfPage>=c.startPosition+f&&b.currentBottomOfPage<=c.endPosition-
g){b=this.regionManagers[this.hiddenIframeIndex];c=this.regionManagers[this.visibleIframeIndex].getPagePositionRange();if(a===this.loadedType.NEXT){if(a={position:c.currentBottomOfPage,allowPartialScreen:this.isAtEndOfDocumentOrSkeleton()},a=b.updateView(KindleRegionManagerFactory.VIEW_REQUEST.NEXT_PAGE,a),!a)return this.requestMoreNextPages(),!1}else if(a={position:c.currentTopOfPage,allowPartialScreen:this.isAtBeginningOfDocumentOrSkeleton()},a=b.updateView(KindleRegionManagerFactory.VIEW_REQUEST.PREVIOUS_PAGE,
a),!a)return this.requestMorePreviousPages(),!1;this.swapIframes();return!0}}return!1};a.nextScreen=function(){var a=this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.NEXT;if(a&&this.considerFlippingFrames())return!0;var b=this.isAtEndOfDocumentOrSkeleton(),c=this.regionManagers[this.visibleIframeIndex].nextScreen(b);if(!c)if(this.hasMoreNextFragments())if(a&&b&&this.crossSkeletonBoundary())c=!0;else return this.requestMoreNextPages(),!1;else c=!0;this.considerLoadingMoreFragments(this.direction.NEXT);
this.updateDisplayedPositionsInPage();KindleDebug.log("Next Screen Success:"+c);return c};a.requestMoreNextPages=function(){var a=this.getPagePositionRange(),b=this.contentRange[this.visibleIframeIndex];a.currentBottomOfPage&&KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(b.endPosition-a.currentBottomOfPage);this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY;this.loadNextPages()};a.requestMorePreviousPages=function(){var a=this.getPagePositionRange(),b=this.contentRange[this.visibleIframeIndex];
a.currentTopOfPage&&KindleRendererPositionLoadingCalculator.updateDisplayedPositionRange(a.currentTopOfPage-b.startPosition);this.iframeLoadStatus[this.hiddenIframeIndex]=this.loadedType.EMPTY;this.loadPreviousPages()};a.previousScreen=function(){KindleDebug.log("****Prev screen****");if(this.iframeLoadStatus[this.hiddenIframeIndex]===this.loadedType.PREVIOUS&&this.considerFlippingFrames())return!0;var a=this.isAtBeginningOfDocumentOrSkeleton(),b=this.regionManagers[this.visibleIframeIndex].previousScreen(a);
if(!b&&this.hasMorePreviousFragments())if(a&&this.crossSkeletonBoundary())b=!0;else return this.requestMorePreviousPages(),!1;else!b&&!this.hasMorePreviousFragments()&&KindleDebug.error("PreviousScreen: Was not able to go to previous screen, and there is no more previous fragments.");this.considerLoadingMoreFragments(this.direction.PREVIOUS);this.updateDisplayedPositionsInPage();return b};a.cancelHiddenIframeLoading=function(){var a=this.iframes[this.hiddenIframeIndex];if(a.processingRequestId.id!==
null)a.processingRequestId.id=null,this.cancelCurrentRequest()};a.scaleElementsInIframe=function(a){var b=this.getViewportDimensions(a);if(a&&a.contentDocument&&a.contentDocument.body){a.writingMode=KindleRendererWritingModeFactory.buildIFrameWritingMode(a);a.writingMode.resetIframeDimensions(a);var c;c=this.currentRequest&&this.currentRequest.contentLoadMetrics?this.currentRequest.contentLoadMetrics:KindleMetricsProfiler("content-load");this.ensureElementsWillFit(a,b,c).then(function(){c.endTimer()})}};
a.getViewportDimensions=function(a){var b=$(this.parent).width(),c=this.numColumns-1,f=this.getMargins(this.margin),c=parseInt((b-(this.columnGap-(f.left+f.right))*c)/this.numColumns,10);return{height:$(a).parent().height(),width:c,parentWidth:b}};a.updateSettings=function(a){var b=this.visibleIframeIndex,c=this.hiddenIframeIndex,f=this.getPagePositionRange().currentTopOfPage;if(a.columns!==void 0){if(a.columns.num!==void 0){this.numColumns=a.columns.num;this.regionManagers[b].computeFilledRegionNodes();
this.scaleElementsInIframe(this.iframes[b]);var g=this;setTimeout(function(){g.regionManagers[c].computeFilledRegionNodes();g.scaleElementsInIframe(g.iframes[c]);g=null},0)}if(a.columns.gap!==void 0)this.columnGap=parseInt(a.columns.gap,10)}if(a.margin!==void 0)this.margin=a.margin;KindleRendererIframeLoading.updateSettingsInIframe(this.iframes[b]);var h=this;setTimeout(function(){KindleRendererIframeLoading.updateSettingsInIframe(h.iframes[c]);h=null},0);f&&(this.regionManagers[b].updateView(KindleRegionManagerFactory.VIEW_REQUEST.GO_TO_POSITION,
{position:f}),this.updateDisplayedPositionsInPage())};a.getMargins=function(a){if(this.parent&&a&&a.length>0){var b=document.getElementById("renderer_translation_div");if(!b)b=document.createElement("div"),b.id="renderer_translation_div",$(b).css({visibility:"hidden","z-index":-1E3}),this.parent.appendChild(b);$(b).css({margin:a});a=window.getComputedStyle(b);return{top:parseFloat(a.marginTop),bottom:parseFloat(a.marginBottom),left:parseFloat(a.marginLeft),right:parseFloat(a.marginRight)}}return{top:0,
bottom:0,left:0,right:0}};a.reloadNotification=function(){this.contentRange=[null,null];this.positionData=[null,null];this.cancelHiddenIframeLoading();this.iframeLoadStatus=[this.loadedType.EMPTY,this.loadedType.EMPTY]};a.resizeNotification=function(){var a=this.getPagePositionRange();this.regionManagers[this.visibleIframeIndex].updateView(KindleRegionManagerFactory.VIEW_REQUEST.GO_TO_POSITION,{position:a.currentTopOfPage});this.updateDisplayedPositionsInPage()};a.updateGlyphColorForFrameIndex=function(a){this.iframes[a].hasGlyphs&&
this.iframes[a].contentDocument&&KindleGlyphRenderer.updateTextColor(this.iframes[a])};a.updateGlyphColor=function(){this.updateGlyphColorForFrameIndex(this.visibleIframeIndex);this.updateGlyphColorForFrameIndex(this.hiddenIframeIndex)};a.setAnnotationEventCallback=function(a){this.annotationEventCallback=a};a.getCurrentProcessDfd=function(){return this.currentRequestDfd.promise()};a.getCurrentProcessId=function(){return this.currentRequest.requestId};a.getZoomableAt=function(a,b,c){return KindleRendererZoomablesFactory.buildFromCoord(this.iframes[this.visibleIframeIndex].contentDocument,
a,b,c)};a.getZoomableList=function(a){return KindleRendererZoomablesFactory.buildList(this.iframes[this.visibleIframeIndex].contentDocument,a)};a.addClickHandlers=function(a){var b=this,a=$("mark["+KindleRendererAnnotationRenderer.ANNOTATION_CLICK_ATTRIBUTE+"='true']",a.contentDocument).children();$(a).unbind("click");$(a).click(function(a){b.annotationClickedHandler(a)})};a.createAnnotationElements=function(a,b){KindleRegionAnnotationRenderer.createAnnotationElements(a,b);this.addClickHandlers(a)};
a.addAnnotation=function(a,b,c){a&&b&&c&&b.startPosition<=c.end&&c.start<=b.endPosition&&this.createAnnotationElements(a,[c])};a.removeAnnotation=function(a,b){a&&b&&KindleRegionAnnotationRenderer.removeAnnotationElements(a,b)};a.onOverlayAdded=function(b){a.addAnnotation(a.iframes[0],a.contentRange[0],b.overlay);a.addAnnotation(a.iframes[1],a.contentRange[1],b.overlay)};a.onOverlayRemoved=function(b){a.removeAnnotation(a.iframes[0],b.overlay);a.removeAnnotation(a.iframes[1],b.overlay)};a.setOverlayManager=
function(a){this.overlayManager&&(this.overlayManager.removeEventListener(this.overlayManager.OVERLAY_ADDED_EVENT,this.onOverlayAdded),this.overlayManager.removeEventListener(this.overlayManager.OVERLAY_REMOVED_EVENT,this.onOverlayRemoved));if(this.overlayManager=a)this.overlayManager.addEventListener(this.overlayManager.OVERLAY_ADDED_EVENT,this.onOverlayAdded),this.overlayManager.addEventListener(this.overlayManager.OVERLAY_REMOVED_EVENT,this.onOverlayRemoved)};a.setCanPreloadNext=function(a){this.canPreloadNext=
a};a.setCanPreloadPrevious=function(a){this.canPreloadPrevious=a};a.clearSelection=function(){var a=this.iframes[this.visibleIframeIndex].contentWindow;if(this.selection)this.selection.select(),this.selection=null;a.window.getSelection&&(a.window.getSelection().empty?a.window.getSelection.empty():a.window.getSelection().removeAllRanges&&a.window.getSelection().removeAllRanges());a.document.selection&&a.document.selection.empty&&a.document.selection.empty()};a.getSelection=function(){var a=this.iframes[this.visibleIframeIndex].contentWindow,
b=null,b=KindleHostDeviceDetector.getDevicePlatform(),c=null,f=this.selection;f&&f.select();if((b==="metro"||b==="metroArm"||KindleHostDeviceDetector.isIE())&&a.document.selection)b=a.document.selection,c=this.createSelectionForIE(b);return c};a.createSelectionForIE=function(a){var b=KindleRendererDeviceSpecific.resolutionScale(),c=this.regionManagers[this.visibleIframeIndex].getOffsetTop()*b,a=a.createRange(),f=a.getClientRects(),g=f[f.length-1].width?f[f.length-1]:f[f.length-2],f=f[0],h={},o=null,
o=null;a.text.indexOf(" ")!==0&&a.expand("word");h.context=a.text;o=document.createElement("div");o.innerHTML=a.htmlText;o=this.getSelectionBoundaries(o);h.start=parseInt(o.start,10);h.end=parseInt(o.end,10);h.lowerBounds={};h.lowerBounds.right=g.right/b;h.lowerBounds.bottom=(g.bottom-c)/b;h.lowerBounds.left=g.left/b;h.lowerBounds.top=(g.top-c)/b;h.lowerBounds.width=g.width/b;h.lowerBounds.height=g.height/b;h.upperBounds={};h.upperBounds.left=f.left/b;h.upperBounds.top=(f.top-c)/b;h.upperBounds.right=
f.right/b;h.upperBounds.bottom=(f.bottom-c)/b;h.upperBounds.width=f.width/b;h.upperBounds.height=f.height/b;return h};a.getSelectionBoundaries=function(a){var b=[],c={},b=a.getElementsByTagName("canvas");if(b.length!==0)c.start=b[0].id,c.end=b[b.length-1].id;else if(b=a.getElementsByTagName("span"),b.length!==0){for(a=0;isNaN(b[a].id);)a++;c.start=b[a].id;for(a=1;isNaN(b[b.length-a].id);)a++;c.end=b[b.length-a].id}return c};a.addSelectionListener=function(a){function b(c){if(c.type==="MSPointerDown")g.addPointer(c.pointerId);
else if(c.type==="MSGestureTap"&&a.contentWindow.document.selection.type==="Text")f.selection=null}var c=a.contentDocument.getElementsByTagName("body")[0],f=this;c.onselect=function(b){var c=a.contentWindow.document.selection;if(c&&c.type==="Text"){if(c=c.createRange(),!f.selection||!c.isEqual(f.selection))f.selection=c,c=a.ownerDocument.createEvent("CustomEvent"),c.initCustomEvent(b.type,!0,!0,b),a.dispatchEvent(c)}else f.selection=null};a.contentDocument.onselectionchange=function(b){var c=a.contentWindow.document.selection;
if(c&&c.type==="Text"&&(c=c.createRange(),f.selection&&!c.isEqual(f.selection)))f.selection=null,c=a.ownerDocument.createEvent("CustomEvent"),c.initCustomEvent(b.type,!0,!0,b),a.dispatchEvent(c)};c.onselectstart=function(b){var c=a.contentWindow.document.selection;if(c&&c.type==="None"&&f.selection)f.selection=null,b.preventDefault()};c.ondblclick=function(b){f.selection=null;var c=a.ownerDocument.createEvent("MouseEvent");c.initMouseEvent(b.type,!0,!0,window.parent,b.detail,b.screenX,b.screenY,b.clientX,
b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)};if(window.MSGesture){var g=new MSGesture;g.target=c;c.addEventListener("MSGestureTap",b,!1);c.addEventListener("MSPointerDown",b,!1)}}}var m=0,h=m++,b=m++,c=m++,f=5;return{DATA_LOAD_ERROR:h,IFRAME_ERROR_LOADING:b,IFRAME_ERROR_PAGINATING:c,build:function(a,b){for(var c=[],f=[],j=0;j<2;j+=1){var l,h=j,m=b;l=document.createElement("iframe");var p="flow_"+h;l.index=h;l.processingRequestId={};l.setAttribute("frameBorder",
"0");l.setAttribute("id","frame_"+h);l.setAttribute("name","book_iframe_"+h);l.setAttribute("scrolling","no");l.style.msFlowInto=p;$(l).css({msFlowInto:p,position:"absolute",top:"0px",left:"0px",display:"none"});h=KindleRegionManagerFactory.build(l,p,m);l={iframe:l,regionManager:h};c[j]=l.iframe;f[j]=l.regionManager;b.appendChild(c[j])}a.loadedType={EMPTY:0,GOTO_POSITION:1,NEXT:2,PREVIOUS:3};a.direction={NEXT:2,PREVIOUS:3};a.iframes=c;a.regionManagers=f;a.iframeLoadStatus=[a.loadedType.EMPTY,a.loadedType.EMPTY];
a.contentRange=[null,null];a.positionData=[null,null];a.visibleIframeIndex=0;a.hiddenIframeIndex=1;a.overlayManager=null;a.numColumns=1;a.columnGap=20;a.margin=0;a.parent=b;a.selection=null;g(a)}}}();
function KindleRegionNodeFactory(g){var m=null,h=null,b=null,c=null;return{show:function(){g.style.left="0px"},hide:function(){g.style.left="-9999px"},setPagePositionRange:function(b,a){m=b;h=a},getPagePositionRange:function(){return{topOfPagePosition:m,bottomOfPagePosition:h}},setNumPageBreaks:function(c){b=c},getNumPageBreaks:function(){return b},getRegionContent:function(){return g.msGetRegionContent()},getRegionOverflow:function(){return c=g.msRegionOverflow},getCachedRegionOverflow:function(){return c},
getHeight:function(){return g.clientHeight}}}
function KindleRegionPageBreakPivot(g){var m,h;return{insert:function(b){if(!m){var c=g.contentDocument.createElement("div");c.className="renderer-page-break";for(var f=g.contentWindow.document.getElementById(b);!f.previousSibling&&!KindleRendererUtils.isBlock(f)&&f.parentNode.tagName!=="BODY";)f=f.parentNode;g.contentWindow.document.body.firstElementChild!==f&&(f.parentNode.insertBefore(c,f),h=b,m=c)}},clear:function(){var b=g.contentDocument.getElementsByClassName("renderer-page-break");b&&b.length>
0&&b[0].parentNode.removeChild(b[0]);h=m=null},getPosition:function(){return h}}}
var KindleRegionManagerFactory=function(){function g(f){f.updateView=function(a,b){var c,f=!1,g=b.position,l=b.allowPartialScreen;switch(a){case h.NEXT_PAGE:c=this.findPositionAfter(g);break;case h.PREVIOUS_PAGE:c=this.findPositionBefore(g);if(KindleRendererUtils.isNumeric(c))return f=this.showPreviousPage(c,l);break;case h.GO_TO_POSITION:this.computeFilledRegionNodes(),c=this.findPositionForGoTo(g)}KindleRendererUtils.isNumeric(c)&&(f=this.showPositionAtStart(c));return f};f.createDocumentFragmentWithRegions=
function(a){for(var b=document.createDocumentFragment(),c=0;c<a;c++){var f=document.createElement("div");$(f).css({msFlowFrom:this.flowName,position:"absolute",top:"0px",left:"-9999px",width:"100%",height:"100%","z-index":"100"});b.appendChild(f)}return b};f.computeFilledRegionNodes=function(){function a(a){for(var b=[],c=0;c<a.length;c++)b.push(KindleRegionNodeFactory(a[c]));return b}var b=this.regions,c;this.regionCount===-1&&(b=this.createDocumentFragmentWithRegions(KindleRendererDeviceSpecific.defaultNumRegions()),
this.container.appendChild(b),b=a(this.container.children),b=Array.prototype.slice.call(b));for(c=b[b.length-1].getRegionOverflow();c==="overflow"||c==="fit";)b=this.createDocumentFragmentWithRegions(b.length/4),this.container.appendChild(b),b=a(this.container.children),b=Array.prototype.slice.call(b),c=b[b.length-1].getRegionOverflow();for(var f=0;f<b.length;f++)if(c=b[f].getRegionOverflow(),c==="empty"){this.regionCount=f;break}this.regions=b};f.getRegionWithPosition=function(a){for(var b=this.regions,
c,f=0;f<this.regionCount;f++)if(c=b[f].getPagePositionRange(),a>=c.topOfPagePosition&&a<=c.bottomOfPagePosition)return f;return null};f.showRegionWithPosition=function(a){var b=this.indexVisible,a=this.getRegionWithPosition(a);return a!==null?(this.hideRegion(b),this.showRegion(a),!0):!1};f.showRegion=function(a){var b=this.regions;return a!==null&&a>=0&&a<this.regionCount?(b[a].show(),this.indexVisible=a,!0):!1};f.hideRegion=function(a){var b=this.regions;return a!==null&&a>=0&&a<b.length?(b[a].hide(),
!0):!1};f.findPositionBefore=function(a){return this.findNearestPosition(a,this.DIRECTION.PREV)};f.findPositionAfter=function(a){return this.findNearestPosition(a,this.DIRECTION.NEXT)};f.findNearestPosition=function(a,c){function e(){for(var e=f.iframe.contentWindow.document.querySelectorAll(b),g=null,j=Infinity,h=0;h<e.length;h++){var n=parseInt(e[h].id,10)-a;!(c===f.DIRECTION.PREV&&n>0)&&!(c===f.DIRECTION.NEXT&&n<0)&&(n=Math.abs(n),n>0&&n<j&&(j=n,g=e[h]))}return g}var f=this,g=null,g=(g=this.iframe.contentWindow.document.getElementById(a))?
c===this.DIRECTION.PREV?KindleRendererUtils.previousPositionedNode(g):c===this.DIRECTION.NEXT?KindleRendererUtils.nextPositionedNode(g):KindleRendererUtils.nextPositionedNode(g)||KindleRendererUtils.previousPositionedNode(g):e(),f=null;return g?parseInt(g.id,10):null};f.showPositionAtStart=function(a){return(a=this.iframe.contentWindow.document.getElementById(a))?(this.pageBreakPivot.clear(),this.pageBreakPivot.insert(a.id),this.computeFilledRegionNodes(),this.computePaginationData(),this.showRegionWithPosition(a.id)):
!1};f.fixPaginationDataHack=function(a,b){if(b>1){var c,f;for(c=0;c<b-1;c++){var g=a[c].getPagePositionRange();if(g.topOfPagePosition!==null)for(f=c+1;f<b;f++){var h=a[f].getPagePositionRange();if(h.topOfPagePosition!==null&&h.bottomOfPagePosition!==null){f=null;f=g.topOfPagePosition===h.topOfPagePosition?g.topOfPagePosition:h.topOfPagePosition-1;a[c].setPagePositionRange(g.topOfPagePosition,f);break}}}c=0;for(g=1;g<b;g++)c+=a[g].getNumPageBreaks();a[0].setNumPageBreaks(a[0].getNumPageBreaks()-c)}};
f.computePaginationData=function(){for(var a=this.regions,d=this.regionCount,e=0;e<d;e++){for(var f=a[e],g=f.getRegionContent(),h=[],m=[],o=[],p,n=null,s=null,r=0;r<g.length;r++)o[r]=g[r].cloneContents().querySelectorAll(b),h=h.concat(Array.prototype.slice.call(o[r])),p=g[r].cloneContents().querySelectorAll(c),m=m.concat(Array.prototype.slice.call(p));h.length&&(n=parseInt(h[0].id,10),s=parseInt(h[h.length-1].id,10));f.setPagePositionRange(n,s);f.setNumPageBreaks(m.length)}this.fixPaginationDataHack(a,
d)};f.cleanUp=function(){$(this.container).empty();this.regions=[]};f.getPagePositionRange=function(){var a={},b=this.regions,c=this.indexVisible;b&&c!==null&&(a=b[c].getPagePositionRange(),a={currentTopOfPage:a.topOfPagePosition?a.topOfPagePosition:0,currentBottomOfPage:a.bottomOfPagePosition?a.bottomOfPagePosition:0});return a};f.findNextScreen=function(a,b){for(var c=(KindleRendererUtils.isNumeric(b)?b:this.indexVisible)+1;c<this.regionCount;){var f=this.regions[c].getPagePositionRange();if(f.topOfPagePosition!==
null||f.bottomOfPagePosition!==null){if(a)return c;if(this.findPositionAfter(f.bottomOfPagePosition)===null){for(f=this.iframe.contentWindow.document.getElementById(f.bottomOfPagePosition);f.parentNode&&f.parentNode.tagName!=="BODY";)f=f.parentNode;for(;f.nextSibling;){if(f.nextSibling.nodeName==="DIV"&&f.nextSibling.id!=="content-overlays")return null;f=f.nextSibling}}return c}c++}return null};f.findPreviousScreen=function(a,b){for(var c=(KindleRendererUtils.isNumeric(b)?b:this.indexVisible)-1;c>=
0;){var f=this.regions[c].getPagePositionRange();if(f.topOfPagePosition!==null||f.bottomOfPagePosition!==null){if(a)return c;if(this.findPositionBefore(f.topOfPagePosition)===null){for(f=this.iframe.contentWindow.document.getElementById(f.topOfPagePosition);f.parentNode&&f.parentNode.tagName!=="BODY";)f=f.parentNode;for(;f.previousSibling;){if(f.previousSibling.nodeName==="DIV"&&f.previousSibling.id!=="content-overlays")return null;f=f.previousSibling}}return c}c--}return null};f.hasNextScreen=function(a){return this.findNextScreen(a)!==
null};f.hasPreviousScreen=function(a){return this.findPreviousScreen(a)!==null};f.nextScreen=function(a){var b=!0,b=this.regions,c=this.indexVisible,f=this.findNextScreen(a);this.hideRegion(c);f===null||b[f].getCachedRegionOverflow()!=="overflow"&&!a?(b=!1,KindleDebug.log("NextScreen: No more next screens to show.")):b=this.showRegion(f);return b};f.previousScreen=function(a){var b=!0,c=this.regions,f=this.indexVisible,g=this.findPreviousScreen(a);this.hideRegion(f);if(g===null||c[g].getCachedRegionOverflow()!==
"overflow"&&!a)b=!1,KindleDebug.log("PreviousScreen: No more previous screens to show.");else{if((c=this.pageBreakPivot.getPosition())&&this.getRegionWithPosition(c)-1===g)if(c=this.findPositionBefore(this.getPagePositionRange().currentTopOfPage),KindleRendererUtils.isNumeric(c))return this.showPreviousPage(c,a);else if(a&&g===0)return KindleDebug.log("PreviousScreen: Could not find a position before to show. Assuming it is a cover."),this.pageBreakPivot.clear(),this.computeFilledRegionNodes(),this.computePaginationData(),
this.showRegion(g);wasAbleToGoToNextScreen=this.showRegion(g)}return b};f.getNumColumns=function(){return parseInt(this.iframe.contentWindow.document.body.currentStyle.columnCount,10)};f.showPreviousPage=function(a,d){this.pageBreakPivot.clear();this.computeFilledRegionNodes();this.computePaginationData();var e=this.getRegionWithPosition(a),f=this.regions[e],g=this.getBoundingClientRect(this.iframe.contentWindow.document.getElementById(a)),h=this.container.getBoundingClientRect();if(f.getNumPageBreaks()>
0||f.getPagePositionRange().bottomOfPagePosition===a)return this.showRegionWithPosition(a),!0;var m=this.getNumColumns(),f=g.bottom,o=h.width/m,p=null;if(f-h.top<g.height)return!0;if(m>1)for(h=1;h<=m;h++)if(g.left<o*h){p={start:o*(h-1),end:o*h};break}m=this.findPreviousScreen(d,e);if(m===null)d&&this.showRegionWithPosition(a);else{e=this.regions[m].getRegionContent();if(e.length>0){e=e[0].cloneContents().querySelectorAll(b+","+c);g=null;for(o=h=0;o!==this.regions[m].getNumPageBreaks();){var n=$(e[h]);
(n.hasClass("page-break")||n.hasClass("pagebreak"))&&o++;h++}for(;h<e.length;h++)if(m=this.iframe.contentWindow.document.getElementById(e[h].id),o=this.getBoundingClientRect(m),n=p?o.left>p.start&&o.left<p.end:!0,o.top>f&&n){g=m;break}g&&(this.pageBreakPivot.insert(g.id),this.computeFilledRegionNodes(),this.computePaginationData())}this.showRegionWithPosition(a);return!0}return!1};f.getBoundingClientRect=function(a){var a=a.getBoundingClientRect(),b=KindleRendererDeviceSpecific.resolutionScale();
return{height:a.height/b,width:a.width/b,left:a.left/b,right:a.right/b,top:(a.top%this.container.clientHeight+this.container.getBoundingClientRect().top)/b,bottom:(a.bottom%this.container.clientHeight+this.container.getBoundingClientRect().top)/b}};f.show=function(){this.container.style.left="0px"};f.hide=function(){this.container.style.left="-9999px"};f.getApproximateNumNextScreens=function(a){for(var b=0,c=this.findNextScreen(a,this.indexVisible);c!==null&&c<this.regionCount;)c=this.findNextScreen(a,
c+1),b++;KindleDebug.log("getApproximateNumNextScreens: # of next screens left:"+b);return b};f.getApproximateNumPrevScreens=function(a){for(var b=0,c=this.findPreviousScreen(a,this.indexVisible);c!==null&&c>0;)c=this.findPreviousScreen(a,c-1),b++;KindleDebug.log("getApproximateNumPrevScreens: # of prev screens left:"+b);return b};f.getOffsetTop=function(){return this.regions[this.indexVisible].getHeight()*this.indexVisible};f.findPositionForGoTo=function(a){function b(a){for(var c=a,d=parseInt(c.id,
10),a=a.getClientRects()[0].top;c;)if((c=KindleRendererUtils.previousPositionedNode(c))&&c.getClientRects()[0].top===a)d=parseInt(c.id,10);else break;return d}var c=this.iframe,f=c.contentDocument.getElementById(a);if(!f){var g=this.findPositionAfter(a)||this.findPositionBefore(a);g&&(f=c.contentWindow.document.getElementById(g))}return f?b(f):a}}function m(b){b.nextScreen=function(a){return this.internal.nextScreen(a)};b.previousScreen=function(a){return this.internal.previousScreen(a)};b.hasNextScreen=
function(a){return this.internal.hasNextScreen(a)};b.hasPreviousScreen=function(a){return this.internal.hasPreviousScreen(a)};b.getPagePositionRange=function(){return this.internal.getPagePositionRange()};b.cleanup=function(){this.internal.cleanup()};b.show=function(){this.internal.show()};b.hide=function(){this.internal.hide()};b.updateView=function(a,b){return this.internal.updateView(a,b)};b.getApproximateNumNextScreens=function(a){return this.internal.getApproximateNumNextScreens(a)};b.getApproximateNumPrevScreens=
function(a){return this.internal.getApproximateNumPrevScreens(a)};b.getOffsetTop=function(){return this.internal.getOffsetTop()};b.computeFilledRegionNodes=function(){this.internal.computeFilledRegionNodes()}}var h={GO_TO_POSITION:1,NEXT_PAGE:2,PREVIOUS_PAGE:3},b="span.k4w, canvas.k4wc, img",c=".page-break, .pagebreak";return{VIEW_REQUEST:h,build:function(b,a,c){var e={internal:{}};e.internal.DIRECTION={NEXT:"next",PREV:"prev"};var k=e.internal,h=document.createElement("div");h.id="container_"+a;
$(h).css({position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%"});c.appendChild(h);k.iframe=b;k.flowName=a;k.parent=c;k.container=h;k.regions=[];k.regionCount=-1;k.indexVisible=null;k.pageBreakPivot=KindleRegionPageBreakPivot(b);g(e.internal);m(e);return e}}}(),KindleRendererDeviceSpecific=function(){var g={};return{initialize:function(){var m=KindleHostDeviceDetector.getDevicePlatform();if(m==="desktop"){g.fragmentBufferCapacityForGoTo=2;g.fragmentBufferCapacityForPageFlip=10;g.fragmentBufferCapacityForPageFlipGlyphs=
3;g.drawYieldUpdateTime=25;g.drawYieldScreenManagerFrequency=5E3;g.drawYieldGlyphRendereringFrequency=1E3;g.drawYieldWordMapGenFrequency=5E3;g.drawYieldWordMapGenUpdateTime=25;g.drawYieldHeightMapFrequency=5E3;g.drawYieldHeightMapUpdateTime=25;g.drawYieldSanitizeNodesFrequency=2500;g.drawYieldSanitizeNodesTime=0;g.reflowTimeout=-1;g.maximumCanvases=4900;g.clientRectsExpire=KindleHostDeviceDetector.isIE();g.rendererInitializationTimeout=6E4;g.glyphCacheMaxSize=15;if(KindleHostDeviceDetector.hasCanvasPerformanceProblem())g.maximumCanvases=
1750,g.drawYieldGlyphRendereringFrequency=200;if(m!=="metro"&&KindleHostDeviceDetector.isIE())g.fragmentBufferCapacityForPageFlip=6,g.drawYieldUpdateTime=0,g.drawYieldScreenManagerFrequency=500,g.drawYieldGlyphRendereringFrequency=200,g.drawYieldWordMapGenFrequency=500,g.drawYieldWordMapGenUpdateTime=0,g.drawYieldHeightMapFrequency=500,g.drawYieldHeightMapUpdateTime=25,g.yieldTimeOnContentReceived=0,g.yieldTimeAfterBulkWriteToIframe=0,g.yieldTimeBeforeBulkWriteToIframe=0,g.yieldTimeAfterIframeLoaded=
0,g.yieldTimeLoadNextFragment=0,g.maximumCanvases=1750,g.clientRectsExpire=!0,g.mightUseCSSRegions=!0,g.defaultNumRegions=25,g.mightUseNativeSelection=!0}else m==="lassen"?(g.fragmentBufferCapacityForGoTo=1.2,g.fragmentBufferCapacityForPageFlip=7,g.fragmentBufferCapacityForPageFlipGlyphs=2,g.drawYieldGlyphRendereringFrequency=200,g.reflowTimeout=2E4,g.maximumCanvases=1750,g.rendererInitializationTimeout=2E4,g.drawYieldSanitizeNodesFrequency=2500,g.drawYieldSanitizeNodesTime=0,KindleHostDeviceDetector.isiPhone()?
(g.drawYieldWordMapGenFrequency=20,g.drawYieldWordMapGenUpdateTime=10,g.drawYieldHeightMapFrequency=500,g.drawYieldHeightMapUpdateTime=10,g.drawYieldScreenManagerFrequency=250,g.drawYieldUpdateTime=50):(g.drawYieldWordMapGenFrequency=300,g.drawYieldWordMapGenUpdateTime=50,g.drawYieldHeightMapFrequency=500,g.drawYieldHeightMapUpdateTime=20,g.drawYieldScreenManagerFrequency=250,g.drawYieldUpdateTime=10)):m==="metro"?(g.fragmentBufferCapacityForGoTo=2,g.fragmentBufferCapacityForPageFlip=6,g.fragmentBufferCapacityForPageFlipGlyphs=
3,g.drawYieldUpdateTime=0,g.drawYieldScreenManagerFrequency=500,g.drawYieldGlyphRendereringFrequency=200,g.drawYieldWordMapGenFrequency=500,g.drawYieldWordMapGenUpdateTime=0,g.drawYieldHeightMapFrequency=500,g.drawYieldHeightMapUpdateTime=25,g.yieldTimeOnContentReceived=0,g.yieldTimeAfterBulkWriteToIframe=0,g.yieldTimeBeforeBulkWriteToIframe=0,g.yieldTimeAfterIframeLoaded=0,g.yieldTimeLoadNextFragment=0,g.reflowTimeout=-1,g.maximumCanvases=1750,g.clientRectsExpire=!0,g.rendererInitializationTimeout=
6E4,g.drawYieldSanitizeNodesFrequency=2500,g.drawYieldSanitizeNodesTime=0,g.glyphCacheMaxSize=15,g.mightUseCSSRegions=!0,g.defaultNumRegions=25,g.mightUseNativeSelection=!0):m==="metroArm"?(g.fragmentBufferCapacityForGoTo=1.2,g.fragmentBufferCapacityForPageFlip=5,g.fragmentBufferCapacityForPageFlipGlyphs=2,g.drawYieldUpdateTime=0,g.drawYieldScreenManagerFrequency=500,g.drawYieldGlyphRendereringFrequency=200,g.drawYieldWordMapGenFrequency=500,g.drawYieldWordMapGenUpdateTime=0,g.drawYieldHeightMapFrequency=
500,g.drawYieldHeightMapUpdateTime=25,g.yieldTimeOnContentReceived=0,g.yieldTimeAfterBulkWriteToIframe=0,g.yieldTimeBeforeBulkWriteToIframe=0,g.yieldTimeAfterIframeLoaded=0,g.yieldTimeLoadNextFragment=0,g.reflowTimeout=-1,g.maximumCanvases=1750,g.clientRectsExpire=!0,g.rendererInitializationTimeout=9E4,g.drawYieldSanitizeNodesFrequency=2500,g.drawYieldSanitizeNodesTime=0,g.glyphCacheMaxSize=15,g.animatePageFlip=!1,g.mightUseCSSRegions=!0,g.defaultNumRegions=15,g.mightUseNativeSelection=!0):(g.fragmentBufferCapacityForGoTo=
1.2,g.fragmentBufferCapacityForPageFlip=7,g.fragmentBufferCapacityForPageFlipGlyphs=2,g.drawYieldUpdateTime=50,g.drawYieldScreenManagerFrequency=250,g.drawYieldGlyphRendereringFrequency=200,g.drawYieldWordMapGenFrequency=300,g.drawYieldWordMapGenUpdateTime=50,g.drawYieldHeightMapFrequency=5E3,g.drawYieldHeightMapUpdateTime=50,g.drawYieldSanitizeNodesFrequency=2500,g.drawYieldSanitizeNodesTime=0,g.reflowTimeout=1E4,g.maximumCanvases=1750,g.rendererInitializationTimeout=9E4,g.animatePageFlip=KindleHostDeviceDetector.isiOS()&&
!KindleHostDeviceDetector.isiOS_4x());g.needsReflowOnPageFlip=KindleHostDeviceDetector.isiOS_4x()||KindleHostDeviceDetector.isChrome&&KindleHostDeviceDetector.isChrome()&&navigator.userAgent.indexOf("Chrome/18.")>=0;g.usesDocRelativeVerticalCoordinates=KindleHostDeviceDetector.isiOS();g.needsWritingModeSpecifiedOnBody=KindleHostDeviceDetector.isiOS();g.needsWritingModeSpecifiedOnRoot=KindleHostDeviceDetector.isFirefox()||KindleHostDeviceDetector.isChrome();g.verticalParagraphsScaleSeparately=KindleHostDeviceDetector.isiPhone();
g.needsLanguageSpecificItalicsCheck=KindleHostDeviceDetector.isiOS()&&parseInt(KindleHostDeviceDetector.getOSMajorVersion(),10)===7;g.shouldRotateECJKChar=KindleHostDeviceDetector.isiOS()&&KindleHostDeviceDetector.getOSMajorVersion&&KindleHostDeviceDetector.getOSMinorVersion&&(parseInt(KindleHostDeviceDetector.getOSMajorVersion(),10)<6||parseInt(KindleHostDeviceDetector.getOSMajorVersion(),10)===6&&parseInt(KindleHostDeviceDetector.getOSMinorVersion(),10)===0);g.swapUnderlinesAndOverlines=KindleHostDeviceDetector.isSafari()||
KindleHostDeviceDetector.isiOS()},fragmentBufferCapacityForGoTo:function(){return g.fragmentBufferCapacityForGoTo},fragmentBufferCapacityForPageFlip:function(m){return m?g.fragmentBufferCapacityForPageFlipGlyphs:g.fragmentBufferCapacityForPageFlip},drawYieldUpdateTime:function(){return g.drawYieldUpdateTime},glyphCacheMaxSize:function(){return g.glyphCacheMaxSize||0},drawYieldWordMapGenUpdateTime:function(){return g.drawYieldWordMapGenUpdateTime},drawYieldHeightMapUpdateTime:function(){return g.drawYieldHeightMapUpdateTime},
drawYieldScreenManagerFrequency:function(){return g.drawYieldScreenManagerFrequency},drawYieldGlyphRendereringFrequency:function(){return g.drawYieldGlyphRendereringFrequency},drawYieldWordMapGenFrequency:function(){return g.drawYieldWordMapGenFrequency},drawYieldHeightMapFrequency:function(){return g.drawYieldHeightMapFrequency},drawYieldSanitizeNodesFrequency:function(){return g.drawYieldSanitizeNodesFrequency},yieldTimeOnContentReceived:function(){return g.yieldTimeOnContentReceived},yieldTimeAfterBulkWriteToIframe:function(){return g.yieldTimeAfterBulkWriteToIframe},
yieldTimeBeforeBulkWriteToIframe:function(){return g.yieldTimeBeforeBulkWriteToIframe},yieldTimeAfterIframeLoaded:function(){return g.yieldTimeAfterIframeLoaded},yieldTimeLoadNextFragment:function(){return g.yieldTimeLoadNextFragment},needsReflowOnPageFlip:function(){return g.needsReflowOnPageFlip},shouldRotateECJKChar:function(){return g.shouldRotateECJKChar},needsLanguageSpecificItalicsCheck:function(){return g.needsLanguageSpecificItalicsCheck},usesDocRelativeVerticalCoordinates:function(){return g.usesDocRelativeVerticalCoordinates},
needsWritingModeSpecifiedOnBody:function(){return g.needsWritingModeSpecifiedOnBody},needsWritingModeSpecifiedOnRoot:function(){return g.needsWritingModeSpecifiedOnRoot},verticalParagraphsScaleSeparately:function(){return g.verticalParagraphsScaleSeparately},reflowTimeout:function(){return g.reflowTimeout},maximumCanvases:function(){return g.maximumCanvases},animatePageFlip:function(){return g.animatePageFlip},clientRectsExpire:function(){return g.clientRectsExpire},rendererInitializationTimeout:function(){return g.rendererInitializationTimeout},
drawYieldSanitizeNodesTime:function(){return g.drawYieldSanitizeNodesTime||0},mightUseCSSRegions:function(){return g.mightUseCSSRegions},mightUseNativeSelection:function(){return g.mightUseNativeSelection},defaultNumRegions:function(){return g.defaultNumRegions||0},swapUnderlinesAndOverlines:function(){return g.swapUnderlinesAndOverlines},resolutionScale:function(){var g=1;screen.deviceXDPI&&(g=screen.deviceXDPI/96);return g}}}(),KindleRendererLanguageOptions=function(){function g(g){function s(){var a=
{};a.fontFamilyRegex=d;a.sansFont=k;KindleHostDeviceDetector.isWindows&&KindleHostDeviceDetector.isWindows()?(a.serifFont=j,a.defaultFont=j):(a.serifFont=e,a.defaultFont=e);return a}var g=g&&g.split("-")[0].toLowerCase()||"en",r={};g==="ja"?(r=KindleHostDeviceDetector.isAndroid()?{fontFamilyRegex:c,sansFont:a,serifFont:f,defaultFont:f}:{fontFamilyRegex:m,sansFont:b,serifFont:h,defaultFont:h},p={hasWhitespaceDelimitedWords:!1,language:g,lineHeight:"1.75",allowsVerticalLayout:!0,allowsNegativeTextIndent:!0,
allowsClearStyle:!1,needsPageRefresh:!0,needsFontSanitization:!0,needsDeviceSpecificItalicsCheck:!0,fontOptions:r}):g==="zh"?(r=s(),p={hasWhitespaceDelimitedWords:!1,language:g,lineHeight:"1.4",allowsVerticalLayout:!0,allowsNegativeTextIndent:!0,allowsClearStyle:!0,needsPageRefresh:!0,needsFontSanitization:!0,needsDeviceSpecificItalicsCheck:!1,fontOptions:r}):(r={fontFamilyRegex:l,sansFont:o,serifFont:q,defaultFont:q},p={hasWhitespaceDelimitedWords:!0,language:g,lineHeight:"1.4",allowsVerticalLayout:!1,
allowsNegativeTextIndent:!1,allowsClearStyle:!0,needsPageRefresh:!1,needsFontSanitization:!1,needsDeviceSpecificItalicsCheck:!1,fontOptions:r})}var m=/(Hiragino)|(HiraKaku)/,h="'Hiragino Mincho ProN'",b="HiraKakuProN-W3",c=/(Noto Serif CJK JP)|(Noto Sans CJK JP)/,f="Noto Serif CJK JP",a="Noto Sans CJK JP",d=/(SimSun)|(Songti)|(Heiti)/,e="'Songti SC'",k="'Heiti SC'",j="'SimSun'",l=/(serif)|(sans-serif)|(gothic)/i,q="Georgia, serif",o="sans-serif",p={};g("en");return{initialize:g,getHasWhitespaceDelimitedWords:function(){return p.hasWhitespaceDelimitedWords},
getLanguage:function(){return p.language},getLineHeight:function(){return p.lineHeight},getAllowsVerticalLayout:function(){return p.allowsVerticalLayout},getAllowsNegativeTextIndent:function(){return p.allowsNegativeTextIndent},getAllowsClearStyle:function(){return p.allowsClearStyle},getNeedsPageRefresh:function(){return p.needsPageRefresh},getNeedsFontSanitization:function(){return p.needsFontSanitization},getAcceptedFontFamiliesRegex:function(){return p.fontOptions.fontFamilyRegex},getSansFont:function(){return p.fontOptions.sansFont},
getSerifFont:function(){return p.fontOptions.serifFont},getDefaultFont:function(){return p.fontOptions.defaultFont},getAllowsItalicFont:function(){return!(p.needsDeviceSpecificItalicsCheck&&KindleRendererDeviceSpecific.needsLanguageSpecificItalicsCheck())}}}(),KindleRendererSettings=function(){function g(a,b,c){try{a.styleSheet&&a.styleSheet.addRule?a.styleSheet.addRule(b,c):a.sheet&&a.sheet.insertRule&&a.sheet.insertRule(b+"{"+c+"}",0)}catch(f){}}function m(a){var b=new jQuery.Deferred;a.getMetadata(function(a){if(a.hasFixedContent!==
void 0)c.fixedContent=a.hasFixedContent;if(a.publisherMetadata!==void 0){var g=a.publisherMetadata;if(g[0]==="metadata"&&(g=g[2],g!==void 0))for(var h=g.length,l=0;l<h;++l){var m=g[l][1];if(m!==void 0)if(m.name==="fixed-layout")c.fixedContent=m.content==="true";else if(m.name==="original-resolution"&&(m=m.content.match(/(\d+)[Xx](\d+)/)))c.originalResolution={width:parseInt(m[1],10),height:parseInt(m[2],10)}}}if(a.headerMetadata!==void 0){g=a.headerMetadata;if(g.fixedLayout)c.fixedContent=g.fixedLayout===
"true";if(g.originalResolution&&(h=g.originalResolution.match(/(\d+)[Xx](\d+)/)))c.originalResolution={width:parseInt(h[1],10),height:parseInt(h[2],10)};c.pageProgressionDirection={RTL:0,LTR:1};c.inlineBaseDirection={VERTICAL:0,HORIZONTAL:1};if(g.app_PrimaryWritingMode)c.pageProgressionDirection.value=g.app_PrimaryWritingMode==="vertical-rl"||g.app_PrimaryWritingMode==="horizontal-rl"?c.pageProgressionDirection.RTL:c.pageProgressionDirection.LTR,c.inlineBaseDirection.value=g.app_PrimaryWritingMode.match(/^vertical/)!==
null?c.inlineBaseDirection.VERTICAL:c.inlineBaseDirection.HORIZONTAL;a=a.headerMetadata.app_contentLanguageTag}else a="en";KindleRendererLanguageOptions.initialize(a);if(KindleRendererDeviceSpecific.verticalParagraphsScaleSeparately()&&KindleRendererLanguageOptions.getAllowsVerticalLayout()&&!c.fixedContent)c.initialExpandedBodyHeight=f;c.lineSpacingMultiplier=1;b.resolve()},function(){b.reject()});return b.promise()}function h(){return!c.fixedContent&&KindleRendererDeviceSpecific.mightUseCSSRegions()&&
KindleRendererFragmentLoader.getBookContentType()!=="topaz"&&KindleRendererFragmentLoader.getBookContentType()!=="mobi8"}function b(){return!c.fixedContent&&KindleRendererDeviceSpecific.mightUseNativeSelection()&&KindleRendererFragmentLoader.getBookContentType()!=="topaz"&&KindleRendererFragmentLoader.getBookContentType()!=="mobi8"}var c={},f="500%";return{initialize:function(a){return m(a)},cleanup:function(){c={}},getSettings:function(){return c},updateSettings:function(a){for(var b in a)c[b]=a[b]},
addCSSRules:function(a,d){var e=c,f=a.getElementById("kindleRendererOptionsStylesheet");f!==void 0&&f!==null&&f.parentNode.removeChild(f);f=a.createElement("style");f.type="text/css";f.id="kindleRendererOptionsStylesheet";if(!(/MSIE ((5\.5)|6|(7\.0))/.test(navigator.userAgent)&&navigator.platform==="Win32"))try{if(d.appendChild(f),e.fixedContent)g(f,"body","position : absolute; margin: 0;"),e.originalResolution&&g(f,"body.amzUserPref","background-size: contain !important; width: "+e.originalResolution.width+
"px; height: "+e.originalResolution.height+"px");else{var j;if(e.fontSizes!==void 0){g(f,"body.amzUserPref","font-size : "+e.fontSizes[2]+e.fontSizeUnits+" !important");g(f,"font","font-size : "+e.fontSizes[2]+e.fontSizeUnits+" !important");for(j=0;j<e.fontSizes.length;j+=1)g(f,".font-size-"+(j+1),"font-size : "+e.fontSizes[j]+e.fontSizeUnits+" !important")}if(e.lineSpacingMultiplier!==void 0){var l=KindleRendererLanguageOptions.getLineHeight()*e.lineSpacingMultiplier;g(f,"body.amzUserPref","line-height: "+
l+"  !important")}e.fontColor!==void 0&&g(f,"body.amzUserPref","color : "+e.fontColor+" !important");if(e.fontFamily!==void 0&&(g(f,"body.amzUserPref","font-family : "+e.fontFamily+" !important"),e.fontFaces!==void 0))for(l=0;l<e.fontFaces.length;l++){var m=e.fontFaces[l];g(f,"@font-face","font-family: "+e.fontFamily+"; font-weight: "+(m.fontWeight||"normal")+"; font-style: "+(m.fontStyle||"normal")+"; font-stretch: "+(m.fontStretch||"normal")+"; src: url("+m.fontDataUrl+");")}e.backgroundColor!==
void 0&&g(f,"body.amzUserPref","background-color : "+e.backgroundColor+" !important");e.fontColor!==void 0&&e.backgroundColor!==void 0&&e.backgroundColor==="#000000"&&g(f,"a","color : "+e.fontColor+" !important");e.textAlign!==void 0&&g(f,"body.amzUserPref","text-align : "+e.textAlign+" !important");e.margin!==void 0&&g(f,"body.amzUserPref","margin : "+e.margin+" !important");e.selectionColor!==void 0&&g(f,"div.amazon-selection","background-color : "+e.selectionColor);e.insertBgColor!==void 0&&g(f,
".insert","background-color : "+e.insertBgColor);if(e.annotationStyles!==void 0)for(var o in e.annotationStyles){var p=e.annotationStyles[o],n=p.htmlElementTag?p.htmlElementTag+"."+p.className:"div."+p.className;g(f,n,p.style);if(p.additionalStyles)for(var s in p.additionalStyles){var r=p.additionalStyles[s];g(f,n+"."+r.className,r.style)}}e.clickableElementFeedbackStyles!==void 0&&g(f,"."+e.clickableElementFeedbackStyles.className,e.clickableElementFeedbackStyles.classStyle);if(e.keyframes!==void 0){var w=
e.keyframes,z;for(z in w)g(f,z,w[z])}h()&&e.columns!==void 0&&(g(f,"body","column-count : "+e.columns.num),g(f,"body","column-gap : "+e.columns.gap),g(f,"body","column-fill: auto"),f.styleSheet.cssText+="@media screen and (max-width:320px) { body { column-count: 1 } }");b()&&g(f,"::selection","background-color : "+e.selectionColor);if(e.additionalRules!==void 0&&e.additionalRules.length!==void 0)for(j=0;j<e.additionalRules.length;j+=1)g(f,e.additionalRules[j].selector,e.additionalRules[j].style)}}catch(C){}},
useCSSRegions:h,useNativeSelection:b}}(),KindleRendererContentCorrection=function(){function g(a,b,c){if(c.getWritingMode()==="vertical"){a=$(b.body).find(".azn-ECJK");for(b=0;b<a.length;b++){var c=a[b].firstChild.nodeValue.charCodeAt(0),d;d=c>=65307&&c<=65308?!0:c===65310?!0:c===65293?!0:!1;d&&(c="rotate(90deg) translateX("+(c===65293?o:"0.5")+"em)",$(a[b]).css({display:"inline-block","-webkit-transform":c,width:"1em",height:"1em","text-indent":"0px","vertical-align":"text-top"}))}}}function m(a,
b){var c=a.getComputedStyle(b.body).fontFamily,c=KindleRendererFontHelper.sanitizeFontFamily(c);b.body.setAttribute("style",(b.body.getAttribute("style")||"")+("; font-family: "+c))}function h(a,b){for(var c=$(b.body).find(".azn-UNB"),d=0;d<c.length;++d){var e=c[d].firstChild.nodeValue.charCodeAt(0);if(e===8213||e===8212||e===9472){if(e!==9472)e=String.fromCharCode(9472),c[d].innerHTML=e+e;$(c[d]).css("-webkit-transform","scaleY(.9)")}}}function b(a,b,c){if(c.getWritingMode()==="vertical"){a=$(b.body).find(".azn-NTE");
for(b=0;b<a.length;b++){c=a[b].firstChild.nodeValue.charCodeAt(0);switch(c){case 8220:c=12317;break;case 8221:c=12319}a[b].firstChild.nodeValue=String.fromCharCode(c)}}}function c(a,b){b.documentElement.setAttribute("lang","ja")}function f(a,b,c){if(c.getWritingMode()==="vertical"){a=$("img",b.body).filter(function(){return $(this).css("float")!=="none"&&$(this).parent().css("display")!=="block"});for(b=0;b<a.length;b++)$(a[b]).parent().css("display","block")}}function a(a,b,c){for(var a=$('img[data-isGaiji="true"]',
b.body),d=0;d<a.length;d++)if(c.getWritingMode()==="horizontal")$(a[d]).css("vertical-align","text-top");else if(c.getWritingMode()==="vertical"&&KindleHostDeviceDetector.isAndroid_JellyBean&&KindleHostDeviceDetector.isAndroid_JellyBean()){var e=b.createElement("SPAN");e.style.backgroundSize="1em 1em";e.style.backgroundPosition="center";e.style.backgroundImage="url("+a[d].getAttribute("src")+")";e.style.backgroundRepeat="no-repeat";var f=b.createTextNode("\u00a0\u00a0\u00a0\u00a0");e.appendChild(f);
a[d].parentNode.replaceChild(e,a[d])}}function d(a,b){for(var c,d=$('span:not([class*="azn-"])',b.body),e=0;e<d.length;++e)if(currNode=d[e],c=a.getComputedStyle(currNode),(c.webkitTextCombine==="horizontal"||c.textCombineUpright==="all")&&(c.webkitWritingMode==="vertical-rl"||c.writingMode==="vertical-rl")&&currNode.textContent.length>1&&currNode.textContent.length<5){currNode.setAttribute("data-isTextCombineBlock","true");var f=currNode;c=parseInt(c.fontSize,10);$(f).css("-webkit-text-combine","none");
$(f).css("text-combine-upright","none");var g=f.getClientRects();if(g.length>0){var n=g[0].height,g=-Math.floor((n-c)/2)+"px";c=n>c?" scaleY("+c/n+")":"";$(f).css({"-webkit-transform":"rotate(270deg)"+c,transform:"rotate(270deg)"+c,margin:g+" 0px"})}}}function e(a,b){var c=function(a,b){var c=$(a).css("border-"+b+"-style");return c&&c!=="none"},d=$('a, span, div:not([class*="azn-"])',b.body),e,f,g,n,h;for(e=0;e<d.length;e++)currNode=d[e],f=c(currNode,"top"),g=c(currNode,"bottom"),n=c(currNode,"left"),
h=c(currNode,"right"),(f||g||n||h)&&currNode.setAttribute("data-hasCssBorder","true")}function k(a,b){for(var c=$("rt",b.body),d=0;d<c.length;d++)$(c[d]).css("font-size","")}function j(a,b,c,d,e,f){if(f.getWritingMode()==="vertical"&&b.webkitWritingMode.match(f.getWritingMode())!==null){a:{c=b;b=a;d=(d=$(a).attr("class"))&&d.match(/azn-/)?3:2;for(f=0;f<=d;++f){if(!a)break;(c=a.getAttribute(q)||c.textDecoration)&&(c=c.split(" ")[0]);if(!c||c==="none"){a=a.parentElement;if(!a)break;c=e.getComputedStyle(a)}else{if(b.tagName===
"RUBY"){b:{e=b.parentNode.childNodes;for(a=0;a<e.length;a++)if(e[a].tagName!=="RUBY"&&e[a].nodeType!==Node.TEXT_NODE){e=!1;break b}e=!0}e=e?{node:b.parentNode,decoration:c}:{node:b,decoration:c}}else e={node:a,decoration:c};break a}}e=void 0}e&&!$(e.node).data("decoration-fixed")&&(e.decoration==="underline"?$(e.node).css("text-decoration","overline"):e.decoration==="overline"&&$(e.node).css("text-decoration","underline"),$(e.node).data("decoration-fixed",!0))}}function l(a,b){$("p > span:first-child",
b.body).each(function(){var a=$(this);a.text().trim().length===1&&a.css({"float":"none"})})}var q="data-cjktextdecoration",o=".425",p=[],n=[],s=[];return{initialize:function(){var r=KindleRendererLanguageOptions.getLanguage();r==="ja"?(p.push(h),p.push(b),p.push(c),p.push(f),p.push(a),p.push(e),p.push(k),KindleRendererDeviceSpecific.shouldRotateECJKChar()&&p.push(g),document.body&&(document.body.style.webkitWritingMode!==void 0||document.body.style.writingMode!==void 0)&&p.push(d),KindleRendererDeviceSpecific.swapUnderlinesAndOverlines()&&
n.push(j)):r==="zh"&&(p.push(a),p.push(k),p.push(e));KindleRendererLanguageOptions.getNeedsFontSanitization()&&p.push(m);p.push(l)},applyDocumentWideCorrections:function(a,b,c,d){for(var d=d.createSubTimer("correction"),e=0;e<p.length;++e)p[e](a,b,c);d.endTimer()},applyNodeLocalCorrections:function(a,b,c,d,e,f){if(!(n.length===0||!b||b.length===0)){for(var f=f.createSubTimer("correction"),a=a.nodeType===Node.TEXT_NODE?a.parentNode:a,g=d.getComputedStyle(a),h=0;h<n.length;++h)n[h](a,g,b,c,d,e);f.endTimer()}},
cleanup:function(a){for(var b=0;b<s.length;++b)s[b](a)}}}(),KindleRendererDefaults=function(){function g(g,h,b){g.styleSheet&&g.styleSheet.addRule?g.styleSheet.addRule(h,b):g.sheet&&g.sheet.insertRule&&g.sheet.insertRule(h+"{"+b+"}",g.sheet.cssRules?g.sheet.cssRules.length:g.sheet.rules.length)}return{addCSSRules:function(m,h){if(h==="mobi8"){var b=document.createElement("style");b.type="text/css";b.id="kindleReaderStylesheetDefaults";try{m.insertBefore(b,m.firstChild);KindleRendererSettings.getSettings().fixedContent&&
g(b,"html","font-size: 15px;");g(b,"table","color: inherit; font-size: inherit; line-height: inherit; font-weight: inherit; font-variant:inherit; font-style:inherit; white-space: inherit; word-wrap: inherit;");KindleRendererDeviceSpecific.needsWritingModeSpecifiedOnBody()&&(g(b,"body","-webkit-writing-mode: horizontal-tb"),g(b,"body","writing-mode: horizontal-tb"));KindleRendererLanguageOptions.getDefaultFont()&&g(b,"body","font-family: "+KindleRendererLanguageOptions.getDefaultFont()+";");KindleRendererLanguageOptions.getLineHeight()&&
g(b,"body","line-height: "+KindleRendererLanguageOptions.getLineHeight()+";");var c=KindleRendererSettings.getSettings().initialExpandedBodyHeight;c!==void 0&&g(stylesheet,"body","height: "+c+";")}catch(f){}}b=document.createElement("style");b.type="text/css";b.id="kindleReaderStylesheetOverrides";try{m.appendChild(b),h==="mobi7"&&(g(b,"body","font-family: Georgia, serif; word-wrap: break-word;"),g(b,"p","margin-top: 0px; margin-bottom: 0px; text-indent:2em"),g(b,".was-a-p","margin-top: 0px; margin-bottom: 0px; text-indent:2em;"),
g(b,"hr","margin-top: 15px; margin-bottom: 15px;"),g(b,"center,dd,div,dl,dt,li,ol,pre,table,ul,hr,h1,h2,h3,h4,h5,h6","margin-top: 0px; margin-bottom: 0px;"),g(b,"blockquote","text-indent: 0px; margin-top: 0px; margin-bottom: 0px;"),g(b,"ul","list-style-type: disc;"),g(b,"ol, ul, li .was-a-p","text-indent: 0;"),g(b,"table.amazon-table-style-0","border-collapse:collapse; font-size: inherit;"),g(b,"table.amazon-table-style-0 tr td","border:none; padding:1px;"),g(b,"table.amazon-table-style-0 tr th",
"border:none; padding:1px; text-align:justify"),g(b,"table.amazon-table-style-1","border-collapse:collapse; font-size: inherit;"),g(b,"table.amazon-table-style-1 tr td","border:1px solid black; padding:1px;"),g(b,"table.amazon-table-style-1 tr th","border:1px solid black; padding:1px; text-align:justify")),h==="mobi8"&&(g(b,"body","word-wrap: break-word; padding: 0px !important;"),g(b,".azn-FWURG","-webkit-text-orientation: upright;"),g(b,".azn-NTE","-webkit-text-emphasis: none !important")),g(b,
".semiTransparentOverlay","z-index: 10 !important; opacity: 0.5"),g(b,"svg img","display: none;"),g(b,".page-break","display:block; padding:1px"),g(b,".pagebreak","display:block; padding:1px"),g(b,".defaultHighlight","background-color:#ffff9b"),g(b,".noDisplay","display:none"),g(b,"body","cursor: default; position: relative;"),KindleRendererSettings.getSettings().fixedContent||(g(b,"body","background: none !important; background-color: transparent !important;"),g(b,"html, body","width: auto; height: auto;"),
g(b,"html","-webkit-text-size-adjust: 100%;")),KindleRendererSettings.useCSSRegions()&&(g(b,".was-a-p","orphans:0; widows:0"),g(b,".page-break","break-before:column"),g(b,".pagebreak","break-before:column"),g(b,".renderer-page-break","width:0px; height:0px; break-before:always")),KindleRendererSettings.useNativeSelection()?g(b,"body","-webkit-user-select:text; -moz-user-select:text; -ms-user-select:text; unselectable: off;"):g(b,"body","-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; unselectable: on;"),
g(b,".kindle-annotation-wrapper, .kindle-annotation-wrapper *","margin: auto; padding: 0"),g(b,"div#content-overlays","margin: 0px; padding: 0px;")}catch(a){}}}}(),KindleRendererContentStyleSanitization=function(){function g(a,b){var c=a[b];if(c===void 0){var d=l.exec(b);d!==null&&d.length>=3&&(b=d[1]+d[2].substring(0,1).toUpperCase()+d[2].substring(1),c=a[b])}return c}function m(a,b,c){if(b==="float")return c.hasFloat=!0;if(b==="position")return a=g(a,b),!(a==="inherit"||a==="static")?c.isPositioned=
!0:!1;if(b==="width"){a=g(a,b);if(a!==void 0){if(!c.widths)c.widths={percent:[],fixed:[]};a.indexOf("%")>=0?c.widths.percent.push(a):c.widths.fixed.push(a);return!0}return!1}if(b==="height"){a=g(a,b);if(a!==void 0){if(!c.heights)c.heights={percent:[],fixed:[]};a.indexOf("%")>=0?c.heights.percent.push(a):c.heights.fixed.push(a);return!0}return!1}if(b==="max-width"||b==="max-height"){a=g(a,b);if(a!==void 0&&a.indexOf("%")>=0){if(!c.prcntMaxDimension)c.prcntMaxDimension=[];c.prcntMaxDimension.push(a);
return!0}return!1}if(b==="font-size")return a=g(a,b),a!==void 0&&!q.test(a)?(o.test(a)?c.remFontValue=a.trim():c.absFontValue=a.trim(),!0):!1;if(b==="line-height")return a=g(a,b),a!==void 0?(c.lineHeight=a,!0):!1;if(b==="background-color")return a=g(a,b),a!==void 0?(c.backgroundColorRgb=KindleRendererColorHelper.toRgbArray(a.trim()),!0):!1;if(b==="text-indent")return!KindleRendererLanguageOptions.getAllowsNegativeTextIndent()&&(a=g(a,b),a!==void 0)?(c.textIndent=a,!0):!1;if(b==="color")return c.hasTextColor=
!0;if(b==="clear")return!KindleRendererLanguageOptions.getAllowsClearStyle()?c.hasClearStyle=!0:!1;if(b==="-webkit-text-combine")return c.textCombine=g(a,b),!0;if(b==="text-combine-upright")return c.textCombineUpright=g(a,b),!0;if(b==="font-family"&&KindleRendererLanguageOptions.getNeedsFontSanitization())return c.langFontFamily=g(a,b),!0;if(b==="font-style")return c.fontStyle=g(a,b),!0;if(b==="display")c.display=g(a,b);return!1}function h(a){try{for(var b={},c=a.style.length,d=!1,e=0;e<c;e++)d|=
m(a.style,a.style[e],b);if(d)return b}catch(f){}return null}function b(a,c){for(var d=a.rules?a.rules:a.cssRules,e=d&&d.length||0,f=0;f<e;f++){var g=d[f];if(!g.style&&g.media&&g.media.mediaText==="all")b(g,c);else{if(g=h(d[f]))g.selectorText=d[f].selectorText,c.push(g);g=d[f];if(g.selectorText!==void 0&&g.selectorText==="span")g.selectorText='span:not([class*="azn-"])';g=[];for(var k=0;k<g.length;++k)c.push(g[k])}}}function c(a,b){var c=KindleRendererScaleHelper.convertLength(a,"px");return c?(c=
parseFloat(c),c=Math.floor(c),c=Math.min(c,b),c+"px"):a}function f(a,b,d,e,f,g,h,k){var j="",l=0;if(a.widths){for(var m=a.widths.percent,o=a.widths.fixed,q=0.95*k.width,l=0;l<m.length;l++)j+="width: auto; ",a.display==="inline-block"&&parseInt(m[l],10)>95&&(j+="display: block; ");for(l=0;l<o.length;l++)m=c(o[l],q),j+=parseInt(m,10)<1?"width: auto; ":"width: "+m+"; "}if(a.heights){m=a.heights.percent;o=a.heights.fixed;q=0.95*k.height;for(l=0;l<m.length;l++)j+="height: auto; ",a.display==="inline-block"&&
parseInt(m[l],10)>95&&(j+="display: block; ");for(l=0;l<o.length;l++)m=c(o[l],q),j+=parseInt(m,10)<1?"height: auto; ":"height: "+m+"; "}a.lineHeight&&(l=parseFloat(a.lineHeight),j+=a.lineHeight.indexOf("%")>0&&l>=f*100?"line-height : "+l*g+"%; ":/^\d*(\.\d+)?$/.test(a.lineHeight.trim())&&l>=f?"line-height : "+l*g+"; ":"line-height : "+f*g+"; ");if(a.prcntMaxDimension)for(l=0;l<a.prcntMaxDimension.length;l++)j+=a.prcntMaxDimension[l]+": none; ";a.hasFloat&&(j+="line-height : "+(f+p)+"; ");a.isPositioned&&
(j+="position: inherit; ");a.backgroundColorRgb&&!a.hasTextColor&&b&&(b=KindleRendererColorHelper.calculateTextColorForBackground(b,a.backgroundColorRgb))&&(j+="color : rgb("+b[0]+", "+b[1]+", "+b[2]+"); ");a.absFontValue&&(b=KindleRendererScaleHelper.scaleFont(a.absFontValue,d,e)||a.absFontValue,j+="font-size: "+b+"; ");a.remFontValue&&(h=Math.round(parseFloat(a.remFontValue)*parseInt(h,10))+"px",d=KindleRendererScaleHelper.scaleFont(h,d,e)||a.absFontValue,j+="font-size: "+d+"; ");a.textIndent&&
parseInt(a.textIndent,10)<0&&(k=0.9*k.width,d=a.textIndent.replace(/-/g,""),d.indexOf("%")>0?(d=parseFloat(d,10)/100,d*=k,d=Math.min(d,k),d=Math.floor(d),d=Math.max(d,1),k=d+"px"):k=c(d,k),d=k,j+="text-indent: -"+d+"; padding-left: "+d+"; ");a.hasClearStyle&&(j+="clear:none");a.textCombine&&(j+="-webkit-text-combine: "+a.textCombine+"; display: inline-block; text-indent: 0px; height: auto;");a.textCombineUpright&&(j+="text-combine-upright: "+a.textCombineUpright+"; display: inline-block; text-indent: 0px; height: auto;");
a.langFontFamily&&(k=KindleRendererFontHelper.sanitizeFontFamily(a.langFontFamily),j+="font-family: "+k+";");a.fontStyle&&a.fontStyle==="italic"&&!KindleRendererLanguageOptions.getAllowsItalicFont()&&(j+="font-style: normal;");a.styleString&&(j+=a.styleString);return j}function a(a){var b=a.styleSheets,a=$(a).find('link[rel*="stylesheet"][href], style');if(b.length<a.length)for(var a=a.filter("link"),b=$.makeArray(b),c=$.map(b,function(a){return a.ownerNode}),d=0;d<a.length;++d){var e=a[d],f=e.sheet||
e.styleSheet;f&&(f.rules?f.rules:f.cssRules)&&c.indexOf(e)<0&&b.push(f)}return b}function d(a){function b(){var a,h,k=0;f++;for(KindleRendererProcessTuning.startingOperation("SanitizeNodes");e.length&&k<g;)if(a=e.pop(),k++,a&&a.nodeType===Node.ELEMENT_NODE){(h=a.getAttribute("style"))&&h.length>0&&a.tagName!=="IMG"&&d.push(a);a=a.childNodes;for(h=0;h<a.length;h++)e.push(a[h])}KindleRendererProcessTuning.endingOperation("SanitizeNodes",k);e.length?setTimeout(b,processTimeout):c.resolve(d,f)}var c=
$.Deferred(),d=[],e=[],f=0,g=KindleRendererProcessTuning.drawYieldFrequency("SanitizeNodes");processTimeout=KindleRendererProcessTuning.drawYieldUpdateTime("SanitizeNodes");e.push(a);b();return c.promise()}function e(a){var b=[];if((window.ActiveXObject||"ActiveXObject"in window)&&window.XMLHttpRequest)return a=a.querySelectorAll("[style]:not(HTML):not(BODY):not(IMG)"),$.Deferred().resolve(a);else try{for(var c=(new XPathEvaluator).evaluate("/html/body//*[@style]",a,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
null),e=c.iterateNext();e;)e.style.length>0&&e.tagName!=="IMG"&&b.push(e),e=c.iterateNext()}catch(f){return d(a.body)}return $.Deferred().resolve(b)}function k(a){var b=a.getAttribute("style");b&&(b=b.replace(/-webkit-writing-mode\s*:\s*([a-z\-]+)/g,"writing-mode: $1; $&"),a.setAttribute("style",b))}function j(a){var b=$(a).attr("style");b&&($(a).attr("style",b.replace(/!\s*important/g,"")),k(a))}var l=/^(\w*)-(\w*)(-value)?$/,q=/%|[^r]em|smaller|larger/,o=/rem/,p=0.2;return{sanitizeCSS:function(c,
d,e){for(var g=$('link[type="text/css"][title]',c.head),h=0;h<g.length;++h)g[h].removeAttribute("title");if(!d.fixedContent){h=!1;g=c.getElementById("kindleReaderSanitizationStylesheet");if(!g){g=c.createElement("style");g.id="kindleReaderSanitizationStylesheet";g.type="text/css";for(var h=g,k=a(c),j=[],l=k.length,m=0;m<l;m++)b(k[m],j);h.sanitizationRules=j;h=!0}if(g.sanitizationRules.length>0){for(var k=g.sanitizationRules,j=d.fontColor?KindleRendererColorHelper.toRgbArray(d.fontColor):null,l=d.fontSizes,
m=d.fontSizeUnits,o=KindleRendererLanguageOptions.getLineHeight(),d=d.lineSpacingMultiplier,p=getComputedStyle(c.documentElement).fontSize,q="",J=k.length,E=0;E<J;E++)q+=k[E].selectorText+" { ",q+=f(k[E],j,l,m,o,d,p,e),q+=" } ";g.innerHTML=q}h&&c.head.appendChild(g)}},sanitizeContent:function(a,b,c){var d=$.Deferred();if(b.fixedContent)return d.resolve();j(a.body);e(a).done(function(e){for(var g=b.fontColor?KindleRendererColorHelper.toRgbArray(b.fontColor):null,j=b.fontSizes,l=b.fontSizeUnits,m=KindleRendererLanguageOptions.getLineHeight(),
o=b.lineSpacingMultiplier,p=getComputedStyle(a.documentElement).fontSize,q=e.length,J=0;J<q;J++){var E=e[J],B=E,y=B.getAttribute("data-origStyle");y?B.setAttribute("style",y):B.setAttribute("data-origStyle",B.getAttribute("style"));k(E);if(B=h(e[J]))y=E.getAttribute("style")||"",y+="; ",y+=f(B,g,j,l,m,o,p,c),E.setAttribute("style",y)}d.resolve()});return d.promise()},copySanitizationData:function(a,b){var c=a.getElementById("kindleReaderSanitizationStylesheet"),d=b.getElementById("kindleReaderSanitizationStylesheet");
if(c&&d)d.sanitizationRules=c.sanitizationRules}}}(),KindleRendererColorHelper=function(){function g(c){if(c.charAt(0)==="#")return c.length===4?[parseInt(c.charAt(1)+c.charAt(1),16),parseInt(c.charAt(2)+c.charAt(2),16),parseInt(c.charAt(3)+c.charAt(3),16)]:c.length===7?[parseInt(c.charAt(1)+c.charAt(2),16),parseInt(c.charAt(3)+c.charAt(4),16),parseInt(c.charAt(5)+c.charAt(6),16)]:null;var c=c.toUpperCase(),a=b[c];if(a)return a;c=h.exec(c);return c!==null&&c.length===4?[parseInt(c[1],10),parseInt(c[2],
10),parseInt(c[3],10)]:null}function m(b){return c[0]*b[0]+c[1]*b[1]+c[2]*b[2]}var h=/RGB\s*\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/,b={ALICEBLUE:[240,248,255],ANTIQUEWHITE:[250,235,215],AQUA:[0,255,255],AQUAMARINE:[127,255,212],AZURE:[240,255,255],BEIGE:[245,245,220],BISQUE:[255,228,196],BLACK:[0,0,0],BLANCHEDALMOND:[255,235,205],BLUE:[0,0,255],BLUEVIOLET:[138,43,226],BROWN:[165,42,42],BURLYWOOD:[222,184,135],CADETBLUE:[95,158,160],CHARTREUSE:[127,255,0],CHOCOLATE:[210,105,30],CORAL:[255,127,80],
CORNFLOWERBLUE:[100,149,237],CORNSILK:[255,248,220],CRIMSON:[220,20,60],CYAN:[0,255,255],DARKBLUE:[0,0,139],DARKCYAN:[0,139,139],DARKGOLDENROD:[184,134,11],DARKGRAY:[169,169,169],DARKGREY:[169,169,169],DARKGREEN:[0,100,0],DARKKHAKI:[189,183,107],DARKMAGENTA:[139,0,139],DARKOLIVEGREEN:[85,107,47],DARKORANGE:[255,140,0],DARKORCHID:[153,50,204],DARKRED:[139,0,0],DARKSALMON:[233,150,122],DARKSEAGREEN:[143,188,143],DARKSLATEBLUE:[72,61,139],DARKSLATEGRAY:[47,79,79],DARKSLATEGREY:[47,79,79],DARKTURQUOISE:[0,
206,209],DARKVIOLET:[148,0,211],DEEPPINK:[255,20,147],DEEPSKYBLUE:[0,191,255],DIMGRAY:[105,105,105],DIMGREY:[105,105,105],DODGERBLUE:[30,144,255],FIREBRICK:[178,34,34],FLORALWHITE:[255,250,240],FORESTGREEN:[34,139,34],FUCHSIA:[255,0,255],GAINSBORO:[220,220,220],GHOSTWHITE:[248,248,255],GOLD:[255,215,0],GOLDENROD:[218,165,32],GRAY:[128,128,128],GREY:[128,128,128],GREEN:[0,128,0],GREENYELLOW:[173,255,47],HONEYDEW:[240,255,240],HOTPINK:[255,105,180],INDIANRED:[205,92,92],INDIGO:[75,0,130],IVORY:[255,
255,240],KHAKI:[240,230,140],LAVENDER:[230,230,250],LAVENDERBLUSH:[255,240,245],LAWNGREEN:[124,252,0],LEMONCHIFFON:[255,250,205],LIGHTBLUE:[173,216,230],LIGHTCORAL:[240,128,128],LIGHTCYAN:[224,255,255],LIGHTGOLDENRODYELLOW:[250,250,210],LIGHTGRAY:[211,211,211],LIGHTGREY:[211,211,211],LIGHTGREEN:[144,238,144],LIGHTPINK:[255,182,193],LIGHTSALMON:[255,160,122],LIGHTSEAGREEN:[32,178,170],LIGHTSKYBLUE:[135,206,250],LIGHTSLATEGRAY:[119,136,153],LIGHTSLATEGREY:[119,136,153],LIGHTSTEELBLUE:[176,196,222],
LIGHTYELLOW:[255,255,224],LIME:[0,255,0],LIMEGREEN:[50,205,50],LINEN:[250,240,230],MAGENTA:[255,0,255],MAROON:[128,0,0],MEDIUMAQUAMARINE:[102,205,170],MEDIUMBLUE:[0,0,205],MEDIUMORCHID:[186,85,211],MEDIUMPURPLE:[147,112,216],MEDIUMSEAGREEN:[60,179,113],MEDIUMSLATEBLUE:[123,104,238],MEDIUMSPRINGGREEN:[0,250,154],MEDIUMTURQUOISE:[72,209,204],MEDIUMVIOLETRED:[199,21,133],MIDNIGHTBLUE:[25,25,112],MINTCREAM:[245,255,250],MISTYROSE:[255,228,225],MOCCASIN:[255,228,181],NAVAJOWHITE:[255,222,173],NAVY:[0,
0,128],OLDLACE:[253,245,230],OLIVE:[128,128,0],OLIVEDRAB:[107,142,35],ORANGE:[255,165,0],ORANGERED:[255,69,0],ORCHID:[218,112,214],PALEGOLDENROD:[238,232,170],PALEGREEN:[152,251,152],PALETURQUOISE:[175,238,238],PALEVIOLETRED:[216,112,147],PAPAYAWHIP:[255,239,213],PEACHPUFF:[255,218,185],PERU:[205,133,63],PINK:[255,192,203],PLUM:[221,160,221],POWDERBLUE:[176,224,230],PURPLE:[128,0,128],RED:[255,0,0],ROSYBROWN:[188,143,143],ROYALBLUE:[65,105,225],SADDLEBROWN:[139,69,19],SALMON:[250,128,114],SANDYBROWN:[244,
164,96],SEAGREEN:[46,139,87],SEASHELL:[255,245,238],SIENNA:[160,82,45],SILVER:[192,192,192],SKYBLUE:[135,206,235],SLATEBLUE:[106,90,205],SLATEGRAY:[112,128,144],SLATEGREY:[112,128,144],SNOW:[255,250,250],SPRINGGREEN:[0,255,127],STEELBLUE:[70,130,180],TAN:[210,180,140],TEAL:[0,128,128],THISTLE:[216,191,216],TOMATO:[255,99,71],TURQUOISE:[64,224,208],VIOLET:[238,130,238],WHEAT:[245,222,179],WHITE:[255,255,255],WHITESMOKE:[245,245,245],YELLOW:[255,255,0],YELLOWGREEN:[154,205,50]},c=[0.2126/255,0.7152/
255,0.0722/255];return{toRgbArray:function(b){return g(b)},calculateTextColorForBackground:function(b,a){var c=Math.abs(m(a)-m(b));if(c<0.3)var e=m(a),g=m(b),e=e<0.5?g<e?160:80:g>e?-160:-80,e=[Math.max(0,Math.min(255,b[0]+e)),Math.max(0,Math.min(255,b[1]+e)),Math.max(0,Math.min(255,b[2]+e))],c=Math.abs(m(e)-m(a))>c?e:null;else c=null;return c}}}(),KindleRendererContentScripts=function(){function g(g){g=g.contentWindow.KindleContentInterface;typeof m.gotoPosition==="function"&&(g.gotoPosition=function(b,
c){m.gotoPosition(c);return!1});typeof m.openStoreDP==="function"&&(g.buyNow=g.showDetails=function(){m.openStoreDP();return!1})}var m;return{addInterfaceScripts:function(h){var b=h.contentDocument.getElementsByTagName("head")[0],c=document.createElement("script");c.language="Javascript";c.type="text/javascript";c.id="kindleContentInterface";if(!(/MSIE ((5\.5)|6|(7\.0))/.test(navigator.userAgent)&&navigator.platform==="Win32"))try{b.appendChild(c),b="var KindleContentInterface = function() { return { ",
b+=" gotoPosition : function(frm, pos) {parent.KindleReaderUI.gotoPosition(pos); return false;}, ",b+=" buyNow : function() {parent.KindleReaderUI.openStoreDP();return false;}, ",b+=" showDetails : function() {parent.KindleReaderUI.openStoreDP();  return false;} ",b+=" };}();",c.text=b,m&&g(h)}catch(f){}},setCallbacks:function(g){m=g}}}(),KindleRendererEventHandler=function(){function g(b){var f=KindleRendererSettings.getSettings().clickableElementFeedbackStyles;if(f!==void 0){var a=f.className,b=
$(b),f=function(){var b=$(this);b.unbind("animationend");b.unbind("webkitAnimationEnd");b.removeClass(a)};b.bind("animationend",f);b.bind("webkitAnimationEnd",f);b.addClass(a)}}function m(c){var f=document.createEvent("MouseEvents");f.initEvent("click",!0,!0);var a=c.getAttribute("onclick");if(a)a=a.replace(h,b),c.setAttribute("onclick",a);else{var a=c.parentElement,d=a.getAttribute("onclick");d&&(d=d.replace(h,b),a.setAttribute("onclick",d))}c.dispatchEvent(f)}var h=/gotoPosition\(,/,b="gotoPosition(0,";
return{handleClick:function(b,f,a){var d;var e;if(e=f)b:{for(e=f;e!==null;){if(e.getAttribute!==void 0){var h=e.getAttribute("onclick")||e.getAttribute("href");if(h!==null&&h.length>0){e=!0;break b}}e=e.parentNode}e=!1}e&&(g(f),m(f),d=!0);if(!(f=d)){b=b.getElementById("annotation-section");b=$(b).find("["+KindleRendererAnnotationRenderer.ANNOTATION_CLICK_ATTRIBUTE+"='true']").children();f=null;d=-Infinity;e=b.length;for(h=0;h<e;h+=1){var j=b[h],l=$(j).offset();l.top-10<a.y&&a.y<l.top+$(j).height()+
10&&l.left-10<a.x&&a.x<l.left+$(j).width()+10&&(l=parseInt($(j).css("z-index"),10),isNaN(l)&&(l=0),l>d&&(d=l,f=j))}if(a=f){if((b=a.parentNode)&&b.getAttribute(KindleRendererAnnotationRenderer.ANNOTATION_CLICK_FEEDBACK_ATTRIBUTE)!=="false"){b=b.childNodes;for(f=0;f<b.length;f++)g(b[f])}m(a);f=!0}else f=!1}return f}}}(),KindleRendererFontHelper=function(){var g=/(sans)|(gothic)/i,m=/serif/i;return{sanitizeFontFamily:function(h){var b=h.split(",");if(KindleRendererLanguageOptions.getNeedsFontSanitization()&&
!h.match(KindleRendererLanguageOptions.getAcceptedFontFamiliesRegex())){for(var h="",c=0;c<b.length;++c){var f=b[c];h+=f.match(g)?KindleRendererLanguageOptions.getSansFont()+", "+f:f.match(m)?KindleRendererLanguageOptions.getSerifFont()+", "+f:f;c<b.length-1&&(h+=",")}h.match(KindleRendererLanguageOptions.getAcceptedFontFamiliesRegex())||(h+=","+KindleRendererLanguageOptions.getDefaultFont());h+=" !important"}return h}}}(),KindleListUtilities=function(){return{binarySearch:function(g,m,h,b,c){if(!g.length)return 0;
var f=g.length-1,a=0,d=0,e=null,k=0;b>a&&b<=f&&(a=b);for(c>=a&&c<f&&(f=c);a<=f;)if(d=Math.floor((a+f)/2),e=g[d],k=0,h===void 0?e>m?k=1:e<m&&(k=-1):k=h(m,e),k>0)f=d-1;else if(k<0)a=d+1;else return d;return d===0||k<0?d:d-1},sortedMerge:function(g,m){var h=[],b=g.length,c=m.length,f=0,a=0;if(b){if(!c)return g}else return m;for(var d,e;f<b&&a<c;)d=g[f],e=m[a],d<e?(h.push(d),++f):(h.push(e),++a);for(;f<b;)h.push(g[f++]);for(;a<c;)h.push(m[a++]);return h},first:function(g){return g[0]},last:function(g){return g[g.length-
1]}}}(),KindleRendererProcessTuning=function(){function g(g){var b,c=m[g];if(c){if(!c.unitTime)return c.frequency;g=c.frequency*c.unitTime;if(g>100){if(b=Math.floor(Math.max(100/c.unitTime,c.minimumFrequency)),b<c.frequency)c.frequency=b}else if(g<50){if(b=Math.ceil(Math.max(50/c.unitTime,c.minimumFrequency)),b>c.frequency)c.frequency=b}else b=c.frequency}else b=KindleRendererDeviceSpecific["drawYield"+g+"Frequency"]?KindleRendererDeviceSpecific["drawYield"+g+"Frequency"]():100,c=KindleRendererDeviceSpecific["drawYield"+
g+"UpdateTime"]?KindleRendererDeviceSpecific["drawYield"+g+"UpdateTime"]():KindleRendererDeviceSpecific.drawYieldUpdateTime(),m[g]={frequency:b,minimumFrequency:b/4,yieldTime:c};return b}var m={};return{runAfterYield:function(g,b,c){b>=2&&g>=0?(b=KindleMetricsProfiler("(YIELD)"),setTimeout(c,g),b.endTimer()):c()},startingOperation:function(h){var b=m[h];b||(g(h),b=m[h]);b.startTime=Date.now()},endingOperation:function(h,b){var c;var f=m[h];f||(g(h),f=m[h]);if(f.startTime){var a=Date.now()-f.startTime;
if(!(b<1)){var d=m[h];a/=b;if(d.unitTime){var e=0.1*b/d.frequency;d.unitTime=e*a+(1-e)*d.unitTime}else d.unitTime=a}f.startTime=0}else c=void 0;return c},drawYieldFrequency:function(h){return g(h)},drawYieldUpdateTime:function(h){var b=m[h];b||(g(time),b=m[h]);return b.yieldTime}}}(),KindleRendererScaleHelper=function(){function g(a,c){if(!f[c])return null;var e=a.match(b);return e?(e=f[e[1]],parseFloat(a,10)*e/f[c]):null}function m(a,b,e){if((a=a.match(h))&&b.length>0){var a=c[a[1]],f=Math.floor((b.length-
1)/2),g=parseFloat(b[0],10),f=parseFloat(b[f],10),b=parseFloat(b[b.length-1],10);return Math.min(b,Math.max(g,a*f))+e}return null}var h=/(xx-small|x-small|small|medium|large|x-large|xx-large)/,b=/(mm|cm|in|pt|pc|px)/,c={"xx-small":0.6,"x-small":0.75,small:0.889,medium:1,large:1.2,"x-large":1.5,"xx-large":2},f={mm:2.835,cm:28.346,"in":72,pt:1,pc:6,px:1.25};return{scaleFont:function(a,d,e){if(e=e.match(b)){var e=e[1],f;if(!(f=m(a,d,e)))f=(a=g(a,"pt"))?m(a<=c["xx-small"]*25?"xx-small":a<=c["x-small"]*
25?"x-small":a<=c.small*25?"small":a<=c.medium*25?"medium":a<=c.large*25?"large":a<=c["x-large"]*25?"x-large":"xx-large",d,e):null;d=f}else d=a;return d},convertLength:function(a,b){var c=g(a,b);return c?c+b:null}}}(),KindleRendererUtils=function(){function g(a){if(a)if(a.firstChild)return a.firstChild;else if(a.nextSibling)return a.nextSibling;else{do a=a.parentNode;while(a&&!a.nextSibling);return a&&a.nextSibling}else return null}function m(a){if(a)if(a.lastChild)return a.lastChild;else if(a.previousSibling)return a.previousSibling;
else{do a=a.parentNode;while(a&&!a.previousSibling);return a&&a.previousSibling}else return null}function h(a){return a?/^(SPAN|CANVAS|IMG)$/i.test(a.tagName)&&isFinite(a.id):!1}var b=/metro/i,c=/desktop/i,f={};return{nextPositionedNode:function(a){for(a=g(a);a;){if(h(a))return a;a=g(a)}return null},previousPositionedNode:function(a){for(a=m(a);a;){if(h(a))return a;a=m(a)}return null},followingNode:function(a){var b;if(a){for(b=a.nextSibling;a&&!b;)a=a.parentNode,b=a.nextSibling;return b}else return null},
precedingNode:function(a){var b;if(a){for(b=a.previousSibling;a&&!b;)a=a.parentNode,b=a.previousSibling;return b}else return null},isBlock:function(a){return a?/^(ADDRESS|ARTICLE|ASIDE|AUDIO|BLOCKQUOTE|DD|DIV|DL|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|NOSCRIPT|OL|OUTPUT|P|PRE|SECTION|TABLE|TFOOT|UL|VIDEO)$/i.test(a.tagName):!1},findElementAtOrAfterPosition:function(a,b){for(var c=a.querySelectorAll("span.k4w, canvas.k4wc, img"),f=0;c[f];){if(parseInt(c[f].id,10)>=b)return c[f];
f++}return null},findElementAtOrBeforePosition:function(a,b){for(var c=a.querySelectorAll("span.k4w, canvas.k4wc, img"),f=null,g=0;c[g]&&parseInt(c[g].id,10)<=b;)f=c[g],g++;return f},treeDepth:function(a){for(var b=0;a.parentNode;)b++,a=a.parentNode;return b},elementFromPoint:function(a,d,e){var f=KindleHostDeviceDetector.getDevicePlatform(),g=f&&f.match(b),f=f&&f.match(c)&&KindleHostDeviceDetector.isIE();if(g||f){if(a=a.msElementsFromPoint(d,e),a!==null&&a.length>0)return a[0]}else return a.elementFromPoint(d,
e)},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},count:function(a,b,c){if(a){var g=f[a]||0;c||f[a]===void 0?f[a]=b:b&&(f[a]+=b);return g}}}}(),KindleRendererWordRectsHelper=function(){function g(b,c,f,a){if(c)for(var d=c.length,e=0;e<d;e++)!f&&a?b.push({rect:c[e],dataNid:f,tagName:a}):b.push({rect:c[e],dataNid:f})}function m(b,c,f,a,d){function e(b){if(b&&j[b]){var b=j[b],c=f,e=a,m=d,n=c.querySelector("["+h+"='"+b.dataNid+"']").childNodes[b.childIndex],c=c.createRange();c.setStart(n,
b.startOffset);c.setEnd(n,b.endOffset);var c=c.getClientRects(),o;e&&e.getComputedStyle&&(o=e.getComputedStyle(n.parentNode));l=m.getTransformedClientRects(c,n,o);g(k,l,b.dataNid)}}var k=[],j={},l,m=!1,o,p;for(p=b.start;p<=b.end;p+=1)if(c[p])if(c[p].rects)o&&j[o]&&(e(o),delete j[o]),g(k,c[p].selectableRects||c[p].rects,c[p].dataNid,c[p].tagName),m=!0;else{var n=c[p];if(m||j[o]===void 0||j[o].dataNid!==n.dataNid||j[o].childIndex!==n.childIndex)j[p]={startOffset:n.startOffset,endOffset:n.endOffset,
dataNid:n.dataNid,childIndex:n.childIndex},o=p;else{m=j[o].startOffset;if(m===void 0||m>n.startOffset)j[o].startOffset=n.startOffset;m=j[o].endOffset;if(m===void 0||m<n.endOffset)j[o].endOffset=n.endOffset}m=!1}for(p in j)e(p);return k}var h="data-nid";return{createWordBoundaries:function(b,c,f,a,d){return m(b,c,f,a,d)}}}(),KindleRendererZoomableFixedContentFactory=function(){function g(a,b){return a.data&&b.data?a.data.ordinal!==void 0&&b.data.ordinal!==void 0?a.data.ordinal-b.data.ordinal:a.data.ordinal===
void 0&&b.data.ordinal===void 0?0:a.data.ordinal!==void 0?-1:1:!a.data&&!b.data?0:a.data?-1:1}function m(a,b){if(a.getBoundingClientRect){var c=a.getBoundingClientRect();if(c)return{top:c.top+b.y,right:c.right+b.x,bottom:c.bottom+b.y,left:c.left+b.x,width:c.width,height:c.height}}return null}function h(a){a.setActive=function(a){if(this.sourceElement){var b=this.sourceElement.ownerDocument;if(b&&this.data.targetId){var c=$(b).find("#"+this.data.targetId),f=null;a?(this.data.sourceId&&(f=$(b).find("#"+
this.data.sourceId),c.html().trim().length===0&&(a=f.clone(),a.css({visibility:"visible",color:"black"}),$(c).append(a)),f.hide()),c.show()):(c.hide(),this.data.sourceId&&(f=$(b).find("#"+this.data.sourceId),f.show()))}}};a.isSame=function(a){return a.internalComparison(this.sourceElement)};a.internalComparison=function(a){return this.sourceElement===a};a.getBounds=function(){if(this.sourceElement){var a=this.sourceElement.ownerDocument;if(a&&this.data.targetId&&(a=$(a).find("#"+this.data.targetId),
a.is(":visible"))){var b=a.children(".target-mag"),a=b.length===1?b:a;return m(a.get(0),this.origin)}return m(this.sourceElement,this.origin)}return null}}function b(a,b){a.activate=function(){return b.setActive(!0)};a.deactivate=function(){return b.setActive(!1)};a.isSame=function(a){return b.isSame(a)};a.getBounds=function(){return b.getBounds()};a.internalComparison=function(a){return b.internalComparison(a)}}function c(a,b,c){a.origin=b;a.sourceElement=c;b=c.getAttribute(f);a.data=jQuery.parseJSON(b)}
var f="data-app-amzn-magnify";return{buildList:function(a,d){for(var e=[],f=$(a).find(".app-amzn-magnify").get(),j=0;j<f.length;j++)try{var l={};c(l,d,f[j]);h(l);e.push(l)}catch(m){}e.sort(g);f=[];for(j=0;j<e.length;j++)l={},b(l,e[j]),f.push(l);return f},buildFromCoord:function(a,d,e,f){a:{for(a=KindleRendererUtils.elementFromPoint(a,e-d.x,f-d.y);a;){if($(a).hasClass("app-amzn-magnify")){e=a;break a}a=a.parentNode}e=null}if(e)try{return a={},c(a,d,e),h(a),d={},b(d,a),d}catch(g){}return null}}}(),
KindleRendererZoomableReflowableContentFactory=function(){function g(b){for(;b;){if(b.tagName==="IMG")return b;b=b.parentNode}return null}function m(b){b.clone=function(){if(this.sourceElement)return $(this.sourceElement).clone().get(0)};b.getBounds=function(){var b;if(this.sourceElement)a:{var f=this.sourceElement;b=this.origin;if(f.getBoundingClientRect&&(f=f.getBoundingClientRect())){b={top:f.top+b.y,right:f.right+b.x,bottom:f.bottom+b.y,left:f.left+b.x,width:f.width,height:f.height};break a}b=
null}else b=null;return b}}function h(b,c){b.clone=function(){return c.clone()};b.getBounds=function(){return c.getBounds()}}return{buildFromCoord:function(b,c,f,a){f-=c.x;a-=c.y;var d=KindleRendererUtils.elementFromPoint(b,f,a);if(d&&d.className.match(/amazon-highlight/)){var e=d;e.style.display="none";d=KindleRendererUtils.elementFromPoint(b,f,a);e.style.display="block"}if(f=g(d))try{return b={},b.origin=c,b.sourceElement=f,m(b),c={},h(c,b),c}catch(k){}return null},buildFromElement:function(b,c){var f=
g(b);if(f)try{var a={};a.origin=c;a.sourceElement=f;m(a);f={};h(f,a);return f}catch(d){}return null}}}(),KindleRendererZoomablesFactory=function(){return{buildList:function(g,m){return $(g.body).css("position")==="absolute"?KindleRendererZoomableFixedContentFactory.buildList(g,m):[]},buildFromCoord:function(g,m,h,b){return $(g.body).css("position")==="absolute"?KindleRendererZoomableFixedContentFactory.buildFromCoord(g,m,h,b):KindleRendererZoomableReflowableContentFactory.buildFromCoord(g,m,h,b)}}}();
