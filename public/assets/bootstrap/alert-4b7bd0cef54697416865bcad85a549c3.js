/* ========================================================================
 * Bootstrap: alert.js v3.0.2
 * http://getbootstrap.com/javascript/#alerts
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
+function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function n(){o.trigger("closed.bs.alert").remove()}var a=e(this),i=a.attr("data-target");i||(i=a.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var o=e(i);t&&t.preventDefault(),o.length||(o=a.hasClass("alert")?a:a.parent()),o.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),e.support.transition&&o.hasClass("fade")?o.one(e.support.transition.end,n).emulateTransitionEnd(150):n())};var a=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var a=e(this),i=a.data("bs.alert");i||a.data("bs.alert",i=new n(this)),"string"==typeof t&&i[t].call(a)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=a,this},e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(jQuery);