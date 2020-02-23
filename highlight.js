/*! highlight.js v9.16.2 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(exports)}(function(a){var f=[],i=Object.keys,b={},u={},n=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,t=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,r={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",hilghQUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},_="</span>",m={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},c="of and for in not or if then".split(" ");function C(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(e){return e.nodeName.toLowerCase()}function o(e){return n.test(e)}function s(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function g(e){var a=[];return function e(n,t){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(a.push({event:"start",offset:t,node:r}),t=e(r,t),E(r).match(/br|hr|img|input/)||a.push({event:"stop",offset:t,node:r}));return t}(e,0),a}function d(e,n,t){var r=0,a="",i=[];function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function u(e){a+="<"+E(e)+f.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+C(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){a+="</"+E(e)+">"}function o(e){("start"===e.event?u:l)(e.node)}for(;e.length||n.length;){var s=c();if(a+=C(t.substring(r,s[0].offset)),r=s[0].offset,s===e){for(i.reverse().forEach(l);o(s.splice(0,1)[0]),(s=c())===e&&s.length&&s[0].offset===r;);i.reverse().forEach(u)}else"start"===s[0].event?i.push(s[0].node):i.pop(),o(s.splice(0,1)[0])}return a+C(t.substr(r))}function R(n){return n.v&&!n.cached_variants&&(n.cached_variants=n.v.map(function(e){return s(n,{v:null},e)})),n.cached_variants?n.cached_variants:function e(n){return!!n&&(n.eW||e(n.starts))}(n)?[s(n,{starts:n.starts?s(n.starts):null})]:[n]}function v(e){if(r&&!e.langApiRestored){for(var n in e.langApiRestored=!0,r)e[n]&&(e[r[n]]=e[n]);(e.c||[]).concat(e.v||[]).forEach(v)}}function p(n,r){var a={};return"string"==typeof n?t("keyword",n):i(n).forEach(function(e){t(e,n[e])}),a;function t(t,e){r&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,function(e,n){return n?Number(n):function(e){return-1!=c.indexOf(e.toLowerCase())}(e)?0:1}(n[0],n[1])]})}}function O(r){function s(e){return e&&e.source||e}function f(e,n){return new RegExp(s(e),"m"+(r.cI?"i":"")+(n?"g":""))}function a(a){var i,e,c={},u=[],l={},t=1;function n(e,n){c[t]=e,u.push([e,n]),t+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(n)+1}for(var r=0;r<a.c.length;r++){n(e=a.c[r],e.bK?"\\.?(?:"+e.b+")\\.?":e.b)}a.tE&&n("end",a.tE),a.i&&n("illegal",a.i);var o=u.map(function(e){return e[1]});return i=f(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var c=r+=1,u=s(e[i]);for(0<i&&(a+=n),a+="(";0<u.length;){var l=t.exec(u);if(null==l){a+=u;break}a+=u.substring(0,l.index),u=u.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?a+="\\"+String(Number(l[1])+c):(a+=l[0],"("==l[0]&&r++)}a+=")"}return a}(o,"|"),!0),l.lastIndex=0,l.exec=function(e){var n;if(0===u.length)return null;i.lastIndex=l.lastIndex;var t=i.exec(e);if(!t)return null;for(var r=0;r<t.length;r++)if(null!=t[r]&&null!=c[""+r]){n=c[""+r];break}return"string"==typeof n?(t.type=n,t.extra=[a.i,a.tE]):(t.type="begin",t.rule=n),t},l}!function n(t,e){t.compiled||(t.compiled=!0,t.k=t.k||t.bK,t.k&&(t.k=p(t.k,r.cI)),t.lR=f(t.l||/\w+/,!0),e&&(t.bK&&(t.b="\\b("+t.bK.split(" ").join("|")+")\\b"),t.b||(t.b=/\B|\b/),t.bR=f(t.b),t.endSameAsBegin&&(t.e=t.b),t.e||t.eW||(t.e=/\B|\b/),t.e&&(t.eR=f(t.e)),t.tE=s(t.e)||"",t.eW&&e.tE&&(t.tE+=(t.e?"|":"")+e.tE)),t.i&&(t.iR=f(t.i)),null==t.relevance&&(t.relevance=1),t.c||(t.c=[]),t.c=Array.prototype.concat.apply([],t.c.map(function(e){return R("self"===e?t:e)})),t.c.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e),t.t=a(t))}(r)}function x(e,a,i,n){function c(e,n){if(function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.eW)return c(e.parent,n)}function u(e,n,t,r){if(!t&&""===n)return"";if(!e)return n;var a='<span class="'+(r?"":m.classPrefix);return(a+=e+'">')+n+(t?"":_)}function l(){R+=null!=g.sL?function(){var e="string"==typeof g.sL;if(e&&!b[g.sL])return C(v);var n=e?x(g.sL,v,!0,d[g.sL]):B(v,g.sL.length?g.sL:void 0);return 0<g.relevance&&(p+=n.relevance),e&&(d[g.sL]=n.top),u(n.language,n.value,!1,!0)}():function(){var e,n,t,r,a,i,c;if(!g.k)return C(v);for(r="",n=0,g.lR.lastIndex=0,t=g.lR.exec(v);t;)r+=C(v.substring(n,t.index)),a=g,i=t,void 0,c=E.cI?i[0].toLowerCase():i[0],(e=a.k.hasOwnProperty(c)&&a.k[c])?(p+=e[1],r+=u(e[0],C(t[0]))):r+=C(t[0]),n=g.lR.lastIndex,t=g.lR.exec(v);return r+C(v.substr(n))}(),v=""}function o(e){R+=e.cN?u(e.cN,"",!0):"",g=Object.create(e,{parent:{value:g}})}function s(e){var n=e[0],t=e.rule;return t&&t.endSameAsBegin&&(t.eR=function(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}(n)),t.skip?v+=n:(t.eB&&(v+=n),l(),t.rB||t.eB||(v=n)),o(t),t.rB?0:n.length}var f={};function t(e,n){var t=n&&n[0];if(v+=e,null==t)return l(),0;if("begin"==f.type&&"end"==n.type&&f.index==n.index&&""===t)return v+=a.slice(n.index,n.index+1),1;if("begin"===(f=n).type)return s(n);if("illegal"===n.type&&!i)throw new Error('Illegal lexeme "'+t+'" for mode "'+(g.cN||"<unnamed>")+'"');if("end"===n.type){var r=function(e){var n=e[0],t=c(g,n);if(t){var r=g;for(r.skip?v+=n:(r.rE||r.eE||(v+=n),l(),r.eE&&(v=n));g.cN&&(R+=_),g.skip||g.sL||(p+=g.relevance),(g=g.parent)!==t.parent;);return t.starts&&(t.endSameAsBegin&&(t.starts.eR=t.eR),o(t.starts)),r.rE?0:n.length}}(n);if(null!=r)return r}return v+=t,t.length}var E=S(e);if(!E)throw new Error('Unknown language: "'+e+'"');O(E);var r,g=n||E,d={},R="";for(r=g;r!==E;r=r.parent)r.cN&&(R=u(r.cN,"",!0)+R);var v="",p=0;try{for(var M,N,h=0;g.t.lastIndex=h,M=g.t.exec(a);)N=t(a.substring(h,M.index),M),h=M.index+N;for(t(a.substr(h)),r=g;r.parent;r=r.parent)r.cN&&(R+=_);return{relevance:p,value:R,i:!1,language:e,top:g}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{i:!0,relevance:0,value:C(a)};throw e}}function B(t,e){e=e||m.languages||i(b);var r={relevance:0,value:C(t)},a=r;return e.filter(S).filter(T).forEach(function(e){var n=x(e,t,!1);n.language=e,n.relevance>a.relevance&&(a=n),n.relevance>r.relevance&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function M(e){return m.tabReplace||m.useBR?e.replace(t,function(e,n){return m.useBR&&"\n"===e?"<br>":m.tabReplace?n.replace(/\t/g,m.tabReplace):""}):e}function N(e){var n,t,r,a,i,c=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=l.exec(i))return S(t[1])?t[1]:"no-highlight";for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(o(a=i[n])||S(a))return a}(e);o(c)||(m.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,r=c?x(c,i,!0):B(i),(t=g(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=d(t,g(a),i)),r.value=M(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var r=n?u[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}(e.className,c,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");f.forEach.call(e,N)}}function S(e){return e=(e||"").toLowerCase(),b[e]||b[u[e]]}function T(e){var n=S(e);return n&&!n.disableAutodetect}return a.highlight=x,a.highlightAuto=B,a.fixMarkup=M,a.highlightBlock=N,a.configure=function(e){m=s(m,e)},a.initHighlighting=h,a.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)},a.registerLanguage=function(n,e){var t=b[n]=e(a);v(t),t.rawDefinition=e.bind(null,a),t.aliases&&t.aliases.forEach(function(e){u[e]=n})},a.listLanguages=function(){return i(b)},a.getLanguage=S,a.autoDetection=T,a.inherit=s,a.IR=a.IDENT_RE="[a-zA-Z]\\w*",a.UIR=a.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",a.NR=a.NUMBER_RE="\\b\\d+(\\.\\d+)?",a.CNR=a.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR=a.BINARY_NUMBER_RE="\\b(0b[01]+)",a.RSR=a.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE=a.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",relevance:0},a.ASM=a.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM=a.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM=a.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},a.C=a.COMMENT=function(e,n,t){var r=a.inherit({cN:"comment",b:e,e:n,c:[]},t||{});return r.c.push(a.PWM),r.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},a.CLCM=a.C_LINE_COMMENT_MODE=a.C("//","$"),a.CBCM=a.C_BLOCK_COMMENT_MODE=a.C("/\\*","\\*/"),a.HCM=a.HASH_COMMENT_MODE=a.C("#","$"),a.NM=a.NUMBER_MODE={cN:"number",b:a.NR,relevance:0},a.CNM=a.C_NUMBER_MODE={cN:"number",b:a.CNR,relevance:0},a.BNM=a.BINARY_NUMBER_MODE={cN:"number",b:a.BNR,relevance:0},a.CSSNM=a.CSS_NUMBER_MODE={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},a.RM=a.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,relevance:0,c:[a.BE]}]},a.TM=a.TITLE_MODE={cN:"title",b:a.IR,relevance:0},a.UTM=a.UNDERSCORE_TITLE_MODE={cN:"title",b:a.UIR,relevance:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,relevance:0},a});hljs.registerLanguage("properties",function(e){var r="[ \\t\\f]*",t="("+r+"[:=]"+r+"|[ \\t\\f]+)",n="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",c={e:t,relevance:0,starts:{cN:"string",e:/$/,relevance:0,c:[{b:"\\\\\\n"}]}};return{cI:!0,i:/\S/,c:[e.C("^\\s*[!#]","$"),{b:n+t,rB:!0,c:[{cN:"attr",b:n,endsParent:!0,relevance:0}],starts:c},{b:a+t,rB:!0,relevance:0,c:[{cN:"meta",b:a,endsParent:!0,relevance:0}],starts:c},{cN:"attr",relevance:0,b:a+r+"$"}]}});hljs.registerLanguage("python",function(e){var r={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"},b={cN:"meta",b:/^(>>>|\.\.\.) /},c={cN:"subst",b:/\{/,e:/\}/,k:r,i:/#/},a={b:/\{\{/,relevance:0},l={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[e.BE,b],relevance:10},{b:/(u|b)?r?"""/,e:/"""/,c:[e.BE,b],relevance:10},{b:/(fr|rf|f)'''/,e:/'''/,c:[e.BE,b,a,c]},{b:/(fr|rf|f)"""/,e:/"""/,c:[e.BE,b,a,c]},{b:/(u|r|ur)'/,e:/'/,relevance:10},{b:/(u|r|ur)"/,e:/"/,relevance:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},{b:/(fr|rf|f)'/,e:/'/,c:[e.BE,a,c]},{b:/(fr|rf|f)"/,e:/"/,c:[e.BE,a,c]},e.ASM,e.QSM]},n={cN:"number",relevance:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},i={cN:"params",b:/\(/,e:/\)/,c:["self",b,n,l,e.HCM]};return c.c=[l,n,b],{aliases:["py","gyp","ipython"],k:r,i:/(<\/|->|\?)|=>/,c:[b,n,l,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,i,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("nginx",function(e){var r={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},b={eW:!0,l:"[a-z/_]+",k:{literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[r]},{cN:"regexp",c:[e.BE,r],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},r]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s+{",rB:!0,e:"{",c:[{cN:"section",b:e.UIR}],relevance:0},{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"attribute",b:e.UIR,starts:b}],relevance:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("xml",function(e){var s={eW:!0,i:/</,relevance:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",relevance:0},{b:/=\s*/,relevance:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",relevance:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{relevance:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",relevance:10},{cN:"meta",b:/<\?xml/,e:/\?>/,relevance:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0},{b:'b"',e:'"',skip:!0},{b:"b'",e:"'",skip:!0},e.inherit(e.ASM,{i:null,cN:null,c:null,skip:!0}),e.inherit(e.QSM,{i:null,cN:null,c:null,skip:!0})]},{cN:"tag",b:"<style(?=\\s|>)",e:">",k:{name:"style"},c:[s],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>)",e:">",k:{name:"script"},c:[s],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,relevance:0},s]}]}});hljs.registerLanguage("ini",function(e){var b={cN:"string",c:[e.BE],v:[{b:"'''",e:"'''",relevance:10},{b:'"""',e:'"""',relevance:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[e.C(";","$"),e.HCM,{cN:"section",b:/^\s*\[+/,e:/\]+/},{b:/^[a-z0-9\[\]_\.-]+\s*=\s*/,e:"$",rB:!0,c:[{cN:"attr",b:/[a-z0-9\[\]_\.-]+/},{b:/=/,eW:!0,relevance:0,c:[e.C(";","$"),e.HCM,{cN:"literal",b:/\bon|off|true|false|yes|no\b/},{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},b,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},e.NM]}]}]}});
