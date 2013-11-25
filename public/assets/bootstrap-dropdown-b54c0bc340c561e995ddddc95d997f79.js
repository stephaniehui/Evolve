/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
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
 * ============================================================ */
!function(e){"use strict";function t(){e(".dropdown-backdrop").remove(),e(a).each(function(){n(e(this)).removeClass("open")})}function n(t){var n,a=t.attr("data-target");return a||(a=t.attr("href"),a=a&&/#/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,"")),n=a&&e(a),n&&n.length||(n=t.parent()),n}var a="[data-toggle=dropdown]",i=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};i.prototype={constructor:i,toggle:function(){var a,i,o=e(this);if(!o.is(".disabled, :disabled"))return a=n(o),i=a.hasClass("open"),t(),i||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",t),a.toggleClass("open")),o.focus(),!1},keydown:function(t){var i,o,r,l,s;if(/(38|40|27)/.test(t.keyCode)&&(i=e(this),t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled"))){if(r=n(i),l=r.hasClass("open"),!l||l&&27==t.keyCode)return 27==t.which&&r.find(a).focus(),i.click();o=e("[role=menu] li:not(.divider):visible a",r),o.length&&(s=o.index(o.filter(":focus")),38==t.keyCode&&s>0&&s--,40==t.keyCode&&s<o.length-1&&s++,~s||(s=0),o.eq(s).focus())}}};var o=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),a=n.data("dropdown");a||n.data("dropdown",a=new i(this)),"string"==typeof t&&a[t].call(n)})},e.fn.dropdown.Constructor=i,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=o,this},e(document).on("click.dropdown.data-api",t).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",a,i.prototype.toggle).on("keydown.dropdown.data-api",a+", [role=menu]",i.prototype.keydown)}(window.jQuery);