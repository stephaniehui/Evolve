/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");/* ========================================================================
 * Bootstrap: transition.js v3.0.2
 * http://getbootstrap.com/javascript/#transitions
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
+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]}}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one(e.support.transition.end,function(){n=!0});var o=function(){n||e(i).trigger(e.support.transition.end)};return setTimeout(o,t),this},e(function(){e.support.transition=t()})}(jQuery),/* ========================================================================
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
+function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function n(){r.trigger("closed.bs.alert").remove()}var i=e(this),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var r=e(o);t&&t.preventDefault(),r.length||(r=i.hasClass("alert")?i:i.parent()),r.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one(e.support.transition.end,n).emulateTransitionEnd(150):n())};var i=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var i=e(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this)),"string"==typeof t&&o[t].call(i)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=i,this},e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(jQuery),/* ========================================================================
 * Bootstrap: button.js v3.0.2
 * http://getbootstrap.com/javascript/#buttons
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
+function(e){"use strict";var t=function(n,i){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,i)};t.DEFAULTS={loadingText:"loading..."},t.prototype.setState=function(e){var t="disabled",n=this.$element,i=n.is("input")?"val":"html",o=n.data();e+="Text",o.resetText||n.data("resetText",n[i]()),n[i](o[e]||this.options[e]),setTimeout(function(){"loadingText"==e?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var t=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===t.prop("type")&&e.find(".active").removeClass("active")}this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var i=e(this),o=i.data("bs.button"),r="object"==typeof n&&n;o||i.data("bs.button",o=new t(this,r)),"toggle"==n?o.toggle():n&&o.setState(n)})},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.bs.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle"),t.preventDefault()})}(jQuery),/* ========================================================================
 * Bootstrap: carousel.js v3.0.2
 * http://getbootstrap.com/javascript/#carousel
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
+function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},t.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},t.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},t.prototype.to=function(t){var n=this,i=this.getActiveIndex();return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid",function(){n.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",e(this.$items[t]))},t.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},t.prototype.next=function(){return this.sliding?void 0:this.slide("next")},t.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},t.prototype.slide=function(t,n){var i=this.$element.find(".item.active"),o=n||i[t](),r=this.interval,s="next"==t?"left":"right",a="next"==t?"first":"last",l=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[a]()}this.sliding=!0,r&&this.pause();var c=e.Event("slide.bs.carousel",{relatedTarget:o[0],direction:s});if(!o.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(l.$indicators.children()[l.getActiveIndex()]);t&&t.addClass("active")})),e.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(c),c.isDefaultPrevented())return;o.addClass(t),o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one(e.support.transition.end,function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(c),c.isDefaultPrevented())return;i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return r&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var i=e(this),o=i.data("bs.carousel"),r=e.extend({},t.DEFAULTS,i.data(),"object"==typeof n&&n),s="string"==typeof n?n:r.slide;o||i.data("bs.carousel",o=new t(this,r)),"number"==typeof n?o.to(n):s?o[s]():r.interval&&o.pause().cycle()})},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n,i=e(this),o=e(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),r=e.extend({},o.data(),i.data()),s=i.attr("data-slide-to");s&&(r.interval=!1),o.carousel(r),(s=i.attr("data-slide-to"))&&o.data("bs.carousel").to(s),t.preventDefault()}),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var t=e(this);t.carousel(t.data())})})}(jQuery),/* ========================================================================
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
+function(e){"use strict";var t=function(n,i){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=e.Event("show.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var i=n.data("bs.collapse");if(i&&i.transitioning)return;n.collapse("hide"),i||n.data("bs.collapse",null)}var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("in")[o]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return r.call(this);var s=e.camelCase(["scroll",o].join("-"));this.$element.one(e.support.transition.end,e.proxy(r,this)).emulateTransitionEnd(350)[o](this.$element[0][s])}}},t.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return e.support.transition?(this.$element[n](0).one(e.support.transition.end,e.proxy(i,this)).emulateTransitionEnd(350),void 0):i.call(this)}}},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var i=e(this),o=i.data("bs.collapse"),r=e.extend({},t.DEFAULTS,i.data(),"object"==typeof n&&n);o||i.data("bs.collapse",o=new t(this,r)),"string"==typeof n&&o[n]()})},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n,i=e(this),o=i.attr("data-target")||t.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),r=e(o),s=r.data("bs.collapse"),a=s?"toggle":i.data(),l=i.attr("data-parent"),c=l&&e(l);s&&s.transitioning||(c&&c.find('[data-toggle=collapse][data-parent="'+l+'"]').not(i).addClass("collapsed"),i[r.hasClass("in")?"addClass":"removeClass"]("collapsed")),r.collapse(a)})}(jQuery),/* ========================================================================
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
+function(e){"use strict";function t(){e(i).remove(),e(o).each(function(t){var i=n(e(this));i.hasClass("open")&&(i.trigger(t=e.Event("hide.bs.dropdown")),t.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown"))})}function n(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&e(n);return i&&i.length?i:t.parent()}var i=".dropdown-backdrop",o="[data-toggle=dropdown]",r=function(t){e(t).on("click.bs.dropdown",this.toggle)};r.prototype.toggle=function(i){var o=e(this);if(!o.is(".disabled, :disabled")){var r=n(o),s=r.hasClass("open");if(t(),!s){if("ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",t),r.trigger(i=e.Event("show.bs.dropdown")),i.isDefaultPrevented())return;r.toggleClass("open").trigger("shown.bs.dropdown"),o.focus()}return!1}},r.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var i=e(this);if(t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled")){var r=n(i),s=r.hasClass("open");if(!s||s&&27==t.keyCode)return 27==t.which&&r.find(o).focus(),i.click();var a=e("[role=menu] li:not(.divider):visible a",r);if(a.length){var l=a.index(a.filter(":focus"));38==t.keyCode&&l>0&&l--,40==t.keyCode&&l<a.length-1&&l++,~l||(l=0),a.eq(l).focus()}}}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),i=n.data("dropdown");i||n.data("dropdown",i=new r(this)),"string"==typeof t&&i[t].call(n)})},e.fn.dropdown.Constructor=r,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",o,r.prototype.toggle).on("keydown.bs.dropdown.data-api",o+", [role=menu]",r.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: modal.js v3.0.2
 * http://getbootstrap.com/javascript/#modals
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
+function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},t.prototype.toggle=function(e){return this[this.isShown?"hide":"show"](e)},t.prototype.show=function(t){var n=this,i=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.backdrop(function(){var i=e.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(document.body),n.$element.show(),i&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var o=e.Event("shown.bs.modal",{relatedTarget:t});i?n.$element.find(".modal-dialog").one(e.support.transition.end,function(){n.$element.focus().trigger(o)}).emulateTransitionEnd(300):n.$element.focus().trigger(o)}))},t.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one(e.support.transition.end,e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.focus()},this))},t.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},t.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden.bs.modal")})},t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},t.prototype.backdrop=function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&n;if(this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",e.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()):t&&t()};var n=e.fn.modal;e.fn.modal=function(n,i){return this.each(function(){var o=e(this),r=o.data("bs.modal"),s=e.extend({},t.DEFAULTS,o.data(),"object"==typeof n&&n);r||o.data("bs.modal",r=new t(this,s)),"string"==typeof n?r[n](i):s.show&&r.show(i)})},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),i=n.attr("href"),o=e(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("modal")?"toggle":e.extend({remote:!/#/.test(i)&&i},o.data(),n.data());t.preventDefault(),o.modal(r,this).one("hide",function(){n.is(":visible")&&n.focus()})}),e(document).on("show.bs.modal",".modal",function(){e(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){e(document.body).removeClass("modal-open")})}(jQuery),/* ========================================================================
 * Bootstrap: tooltip.js v3.0.2
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
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
+function(e){"use strict";var t=function(e,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",e,t)};t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.prototype.init=function(t,n,i){this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(i);for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focus",l="hover"==s?"mouseleave":"blur";this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},t.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},t.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(t),t.isDefaultPrevented())return;var n=this.tip();this.setContent(),this.options.animation&&n.addClass("fade");var i="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,o=/\s?auto?\s?/i,r=o.test(i);r&&(i=i.replace(o,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(i),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var s=this.getPosition(),a=n[0].offsetWidth,l=n[0].offsetHeight;if(r){var c=this.$element.parent(),u=i,d=document.documentElement.scrollTop||document.body.scrollTop,h="body"==this.options.container?window.innerWidth:c.outerWidth(),f="body"==this.options.container?window.innerHeight:c.outerHeight(),p="body"==this.options.container?0:c.offset().left;i="bottom"==i&&s.top+s.height+l-d>f?"top":"top"==i&&s.top-d-l<0?"bottom":"right"==i&&s.right+a>h?"left":"left"==i&&s.left-a<p?"right":i,n.removeClass(u).addClass(i)}var m=this.getCalculatedOffset(i,s,a,l);this.applyPlacement(m,i),this.$element.trigger("shown.bs."+this.type)}},t.prototype.applyPlacement=function(e,t){var n,i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top=e.top+s,e.left=e.left+a,i.offset(e).addClass("in");var l=i[0].offsetWidth,c=i[0].offsetHeight;if("top"==t&&c!=r&&(n=!0,e.top=e.top+r-c),/bottom|top/.test(t)){var u=0;e.left<0&&(u=-2*e.left,e.left=0,i.offset(e),l=i[0].offsetWidth,c=i[0].offsetHeight),this.replaceArrow(u-o+l,l,"left")}else this.replaceArrow(c-r,c,"top");n&&i.offset(e)},t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},t.prototype.hide=function(){function t(){"in"!=n.hoverState&&i.detach()}var n=this,i=this.tip(),o=e.Event("hide.bs."+this.type);return this.$element.trigger(o),o.isDefaultPrevented()?void 0:(i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i.one(e.support.transition.end,t).emulateTransitionEnd(150):t(),this.$element.trigger("hidden.bs."+this.type),this)},t.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},t.prototype.hasContent=function(){return this.getTitle()},t.prototype.getPosition=function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},t.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},t.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},t.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},t.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled},t.prototype.toggle=function(t){var n=t?e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;n.tip().hasClass("in")?n.leave(n):n.enter(n)},t.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var i=e(this),o=i.data("bs.tooltip"),r="object"==typeof n&&n;o||i.data("bs.tooltip",o=new t(this,r)),"string"==typeof n&&o[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(jQuery),/* ========================================================================
 * Bootstrap: popover.js v3.0.2
 * http://getbootstrap.com/javascript/#popovers
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
+function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");t.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),t.prototype.constructor=t,t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},t.prototype.hasContent=function(){return this.getTitle()||this.getContent()},t.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},t.prototype.tip=function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip};var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var i=e(this),o=i.data("bs.popover"),r="object"==typeof n&&n;o||i.data("bs.popover",o=new t(this,r)),"string"==typeof n&&o[n]()})},e.fn.popover.Constructor=t,e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(jQuery),/* ========================================================================
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
+function(e){"use strict";function t(n,i){var o,r=e.proxy(this.process,this);this.$element=e(n).is("body")?e(window):e(n),this.$body=e("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",r),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||(o=e(n).attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=e([]),this.targets=e([]),this.activeTarget=null,this.refresh(),this.process()}t.DEFAULTS={offset:10},t.prototype.refresh=function(){var t=this.$element[0]==window?"offset":"position";this.offsets=e([]),this.targets=e([]);var n=this;this.$body.find(this.selector).map(function(){var i=e(this),o=i.data("target")||i.attr("href"),r=/^#\w/.test(o)&&e(o);return r&&r.length&&[[r[t]().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),o]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(t>=i)return s!=(e=r.last()[0])&&this.activate(e);for(e=o.length;e--;)s!=r[e]&&t>=o[e]&&(!o[e+1]||t<=o[e+1])&&this.activate(r[e])},t.prototype.activate=function(t){this.activeTarget=t,e(this.selector).parents(".active").removeClass("active");var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var i=e(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new t(this,r)),"string"==typeof n&&o[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: tab.js v3.0.2
 * http://getbootstrap.com/javascript/#tabs
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
+function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=n.find(".active:last a")[0],r=e.Event("show.bs.tab",{relatedTarget:o});if(t.trigger(r),!r.isDefaultPrevented()){var s=e(i);this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},t.prototype.activate=function(t,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&e.support.transition&&r.hasClass("fade");s?r.one(e.support.transition.end,o).emulateTransitionEnd(150):o(),r.removeClass("in")};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var i=e(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new t(this)),"string"==typeof n&&o[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(jQuery),/* ========================================================================
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
+function(e){"use strict";var t=function(n,i){this.options=e.extend({},t.DEFAULTS,i),this.$window=e(window).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(n),this.affixed=this.unpin=null,this.checkPosition()};t.RESET="affix affix-top affix-bottom",t.DEFAULTS={offset:0},t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},t.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=e(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),r=this.options.offset,s=r.top,a=r.bottom;"object"!=typeof r&&(a=s=r),"function"==typeof s&&(s=r.top()),"function"==typeof a&&(a=r.bottom());var l=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=a&&o.top+this.$element.height()>=n-a?"bottom":null!=s&&s>=i?"top":!1;this.affixed!==l&&(this.unpin&&this.$element.css("top",""),this.affixed=l,this.unpin="bottom"==l?o.top-i:null,this.$element.removeClass(t.RESET).addClass("affix"+(l?"-"+l:"")),"bottom"==l&&this.$element.offset({top:document.body.offsetHeight-a-this.$element.height()}))}};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var i=e(this),o=i.data("bs.affix"),r="object"==typeof n&&n;o||i.data("bs.affix",o=new t(this,r)),"string"==typeof n&&o[n]()})},e.fn.affix.Constructor=t,e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(jQuery);