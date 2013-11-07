/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
!function(){CKEDITOR.on("instanceReady",function(e){var t=e.editor,a=CKEDITOR.document.$.getElementsByName("ckeditor-sample-required-plugins"),n=a.length?CKEDITOR.dom.element.get(a[0]).getAttribute("content").split(","):[],i=[];if(n.length){for(var o=0;o<n.length;o++)t.plugins[n[o]]||i.push("<code>"+n[o]+"</code>");if(i.length){var r=CKEDITOR.dom.element.createFromHtml('<div class="warning"><span>To fully experience this demo, the '+i.join(", ")+" plugin"+(i.length>1?"s are":" is")+" required.</span></div>");r.insertBefore(t.container)}}})}();