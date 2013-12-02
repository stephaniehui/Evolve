/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.0
 *
 * Requires: 1.2.2+
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t){var a=t||window.event,o=[].slice.call(arguments,1),r=0,s=0,l=0,d=0,c=0;return t=e.event.fix(a),t.type="mousewheel",a.wheelDelta&&(r=a.wheelDelta),a.detail&&(r=-1*a.detail),a.deltaY&&(l=-1*a.deltaY,r=l),a.deltaX&&(s=a.deltaX,r=-1*s),void 0!==a.wheelDeltaY&&(l=a.wheelDeltaY),void 0!==a.wheelDeltaX&&(s=-1*a.wheelDeltaX),d=Math.abs(r),(!n||n>d)&&(n=d),c=Math.max(Math.abs(l),Math.abs(s)),(!i||i>c)&&(i=c),o.unshift(t,Math.floor(r/n),Math.floor(s/i),Math.floor(l/i)),(e.event.dispatch||e.event.handle).apply(this,o)}var n,i,a=["wheel","mousewheel","DOMMouseScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var r=a.length;r;)e.event.fixHooks[a[--r]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});