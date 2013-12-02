/* ========================================================================
 * Bootstrap: affix.js v3.0.2
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
+function(e){"use strict";var t=function(n,a){this.options=e.extend({},t.DEFAULTS,a),this.$window=e(window).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(n),this.affixed=this.unpin=null,this.checkPosition()};t.RESET="affix affix-top affix-bottom",t.DEFAULTS={offset:0},t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},t.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=e(document).height(),a=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,r=o.top,l=o.bottom;"object"!=typeof o&&(l=r=o),"function"==typeof r&&(r=o.top()),"function"==typeof l&&(l=o.bottom());var s=null!=this.unpin&&a+this.unpin<=i.top?!1:null!=l&&i.top+this.$element.height()>=n-l?"bottom":null!=r&&r>=a?"top":!1;this.affixed!==s&&(this.unpin&&this.$element.css("top",""),this.affixed=s,this.unpin="bottom"==s?i.top-a:null,this.$element.removeClass(t.RESET).addClass("affix"+(s?"-"+s:"")),"bottom"==s&&this.$element.offset({top:document.body.offsetHeight-l-this.$element.height()}))}};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var a=e(this),i=a.data("bs.affix"),o="object"==typeof n&&n;i||a.data("bs.affix",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(jQuery);