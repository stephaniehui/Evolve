/* ========================================================================
 * Bootstrap: dropdown.js v3.0.2
 * http://getbootstrap.com/javascript/#dropdowns
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
+function(e){"use strict";function t(){e(a).remove(),e(i).each(function(t){var a=n(e(this));a.hasClass("open")&&(a.trigger(t=e.Event("hide.bs.dropdown")),t.isDefaultPrevented()||a.removeClass("open").trigger("hidden.bs.dropdown"))})}function n(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var a=n&&e(n);return a&&a.length?a:t.parent()}var a=".dropdown-backdrop",i="[data-toggle=dropdown]",o=function(t){e(t).on("click.bs.dropdown",this.toggle)};o.prototype.toggle=function(a){var i=e(this);if(!i.is(".disabled, :disabled")){var o=n(i),r=o.hasClass("open");if(t(),!r){if("ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",t),o.trigger(a=e.Event("show.bs.dropdown")),a.isDefaultPrevented())return;o.toggleClass("open").trigger("shown.bs.dropdown"),i.focus()}return!1}},o.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var a=e(this);if(t.preventDefault(),t.stopPropagation(),!a.is(".disabled, :disabled")){var o=n(a),r=o.hasClass("open");if(!r||r&&27==t.keyCode)return 27==t.which&&o.find(i).focus(),a.click();var l=e("[role=menu] li:not(.divider):visible a",o);if(l.length){var s=l.index(l.filter(":focus"));38==t.keyCode&&s>0&&s--,40==t.keyCode&&s<l.length-1&&s++,~s||(s=0),l.eq(s).focus()}}}};var r=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),a=n.data("dropdown");a||n.data("dropdown",a=new o(this)),"string"==typeof t&&a[t].call(n)})},e.fn.dropdown.Constructor=o,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=r,this},e(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(jQuery);