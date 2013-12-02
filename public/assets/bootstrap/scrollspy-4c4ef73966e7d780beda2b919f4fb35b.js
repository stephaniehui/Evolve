/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.2
 * http://getbootstrap.com/javascript/#scrollspy
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
+function(e){"use strict";function t(n,a){var i,o=e.proxy(this.process,this);this.$element=e(n).is("body")?e(window):e(n),this.$body=e("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",o),this.options=e.extend({},t.DEFAULTS,a),this.selector=(this.options.target||(i=e(n).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=e([]),this.targets=e([]),this.activeTarget=null,this.refresh(),this.process()}t.DEFAULTS={offset:10},t.prototype.refresh=function(){var t=this.$element[0]==window?"offset":"position";this.offsets=e([]),this.targets=e([]);var n=this;this.$body.find(this.selector).map(function(){var a=e(this),i=a.data("target")||a.attr("href"),o=/^#\w/.test(i)&&e(i);return o&&o.length&&[[o[t]().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,a=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,r=this.activeTarget;if(t>=a)return r!=(e=o.last()[0])&&this.activate(e);for(e=i.length;e--;)r!=o[e]&&t>=i[e]&&(!i[e+1]||t<=i[e+1])&&this.activate(o[e])},t.prototype.activate=function(t){this.activeTarget=t,e(this.selector).parents(".active").removeClass("active");var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',a=e(n).parents("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active")),a.trigger("activate")};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var a=e(this),i=a.data("bs.scrollspy"),o="object"==typeof n&&n;i||a.data("bs.scrollspy",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(jQuery);