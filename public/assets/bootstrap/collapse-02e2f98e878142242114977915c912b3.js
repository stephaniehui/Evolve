/* ========================================================================
 * Bootstrap: collapse.js v3.0.2
 * http://getbootstrap.com/javascript/#collapse
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
+function(e){"use strict";var t=function(n,a){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,a),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=e.Event("show.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var a=n.data("bs.collapse");if(a&&a.transitioning)return;n.collapse("hide"),a||n.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return o.call(this);var r=e.camelCase(["scroll",i].join("-"));this.$element.one(e.support.transition.end,e.proxy(o,this)).emulateTransitionEnd(350)[i](this.$element[0][r])}}},t.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var a=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return e.support.transition?(this.$element[n](0).one(e.support.transition.end,e.proxy(a,this)).emulateTransitionEnd(350),void 0):a.call(this)}}},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var a=e(this),i=a.data("bs.collapse"),o=e.extend({},t.DEFAULTS,a.data(),"object"==typeof n&&n);i||a.data("bs.collapse",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n,a=e(this),i=a.attr("data-target")||t.preventDefault()||(n=a.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=e(i),r=o.data("bs.collapse"),l=r?"toggle":a.data(),s=a.attr("data-parent"),c=s&&e(s);r&&r.transitioning||(c&&c.find('[data-toggle=collapse][data-parent="'+s+'"]').not(a).addClass("collapsed"),a[o.hasClass("in")?"addClass":"removeClass"]("collapsed")),o.collapse(l)})}(jQuery);