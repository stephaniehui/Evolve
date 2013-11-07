/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
!function(e){function t(t,n,a,i){var o={data:i||0===i||i===!1?i:n?n.data:{},_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:c,nest:d,wrap:u,html:p,update:m};return t&&e.extend(o,t,{nodes:[],parent:n}),a&&(o.tmpl=a,o._ctnt=o._ctnt||o.tmpl(e,o),o.key=++E,(k.length?T:v)[E]=o),o}function n(t,i,o){var r,l=o?e.map(o,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+f+'="'+t.key+'" $2'):e:n(e,t,e._ctnt)}):t;return i?l:(l=l.join(""),l.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,n,i,o){r=e(i).get(),s(r),n&&(r=a(n).concat(r)),o&&(r=r.concat(a(o)))}),r?r:a(l))}function a(t){var n=document.createElement("div");return n.innerHTML=t,e.makeArray(n.childNodes)}function i(t){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,n,a,i,o,l,s){var c,d,u,p=e.tmpl.tag[a];if(!p)throw"Unknown template tag: "+a;return c=p._default||[],l&&!/\w$/.test(o)&&(o+=l,l=""),o?(o=r(o),s=s?","+r(s)+")":l?")":"",d=l?o.indexOf(".")>-1?o+r(l):"("+o+").call($item"+s:o,u=l?d:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):u=d=c.$1||"null",i=r(i),"');"+p[n?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(u).split("$1").join(d).split("$2").join(i||c.$2||"")+"__.push('"})+"');}return __;")}function o(t,a){t._wrap=n(t,!0,e.isArray(a)?a:[b.test(a)?a:e(a).html()]).join("")}function r(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function l(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function s(n){function a(n){function a(e){e+=c,r=d[e]=d[e]||t(r,v[r.parent.key+c]||r.parent)}var i,o,r,l,s=n;if(l=n.getAttribute(f)){for(;s.parentNode&&1===(s=s.parentNode).nodeType&&!(i=s.getAttribute(f)););i!==l&&(s=s.parentNode?11===s.nodeType?0:s.getAttribute(f)||0:0,(r=v[l])||(r=T[l],r=t(r,v[s]||T[s]),r.key=++E,v[E]=r),C&&a(l)),n.removeAttribute(f)}else C&&(r=e.data(n,"tmplItem"))&&(a(r.key),v[r.key]=r,s=e.data(n.parentNode,"tmplItem"),s=s?s.key:0);if(r){for(o=r;o&&o.key!=s;)o.nodes.push(n),o=o.parent;delete r._ctnt,delete r._wrap,e.data(n,"tmplItem",r)}}var i,o,r,l,s,c="_"+C,d={};for(r=0,l=n.length;l>r;r++)if(1===(i=n[r]).nodeType){for(o=i.getElementsByTagName("*"),s=o.length-1;s>=0;s--)a(o[s]);a(i)}}function c(e,t,n,a){return e?(k.push({_:e,tmpl:t,item:this,data:n,options:a}),void 0):k.pop()}function d(t,n,a){return e.tmpl(e.template(t),n,a,this)}function u(t,n){var a=t.options||{};return a.wrapped=n,e.tmpl(e.template(t.tmpl),t.data,a,t.item)}function p(t,n){var a=this._wrap;return e.map(e(e.isArray(a)?a.join(""):a).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||l(e)})}function m(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var h,g=e.fn.domManip,f="_tmplitem",b=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,v={},T={},y={key:0,data:{}},E=0,C=0,k=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(a){var i,o,r,l,s=[],c=e(a),d=1===this.length&&this[0].parentNode;if(h=v||{},d&&11===d.nodeType&&1===d.childNodes.length&&1===c.length)c[n](this[0]),s=this;else{for(o=0,r=c.length;r>o;o++)C=o,i=(o>0?this.clone(!0):this).get(),e(c[o])[n](i),s=s.concat(i);C=0,s=this.pushStack(s,t,c.selector)}return l=h,h=null,e.tmpl.complete(l),s}}),e.fn.extend({tmpl:function(t,n,a){return e.tmpl(this[0],t,n,a)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,n,a){if(t[0]&&e.isArray(t[0])){for(var i,o=e.makeArray(arguments),r=t[0],l=r.length,s=0;l>s&&!(i=e.data(r[s++],"tmplItem")););i&&C&&(o[2]=function(t){e.tmpl.afterManip(this,t,a)}),g.apply(this,o)}else g.apply(this,arguments);return C=0,!h&&e.tmpl.complete(v),this}}),e.extend({tmpl:function(a,i,r,l){var s,c=!l;if(c)l=y,a=e.template[a]||e.template(null,a),T={};else if(!a)return a=l.tmpl,v[l.key]=l,l.nodes=[],l.wrapped&&o(l,l.wrapped),e(n(l,null,l.tmpl(e,l)));return a?("function"==typeof i&&(i=i.call(l||{})),r&&r.wrapped&&o(r,r.wrapped),s=e.isArray(i)?e.map(i,function(e){return e?t(r,l,a,e):null}):[t(r,l,a,i)],c?e(n(l,null,s)):s):[]},tmplItem:function(t){var n;for(t instanceof e&&(t=t[0]);t&&1===t.nodeType&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode););return n||y},template:function(t,n){return n?("string"==typeof n?n=i(n):n instanceof e&&(n=n[0]||{}),n.nodeType&&(n=e.data(n,"tmpl")||e.data(n,"tmpl",i(n.innerHTML))),"string"==typeof t?e.template[t]=n:n):t?"string"!=typeof t?e.template(null,t):e.template[t]||e.template(null,b.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){v={}},afterManip:function(t,n,a){var i=11===n.nodeType?e.makeArray(n.childNodes):1===n.nodeType?[n]:[];a.call(t,n),s(i),C++}})}(jQuery);