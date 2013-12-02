/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("link",function(e){function t(e){return e.replace(/'/g,"\\$&")}function n(e){var n,a,i,l=o;n=[r,"("];for(var s=0;s<l.length;s++)a=l[s].toLowerCase(),i=e[a],s>0&&n.push(","),n.push("'",i?t(encodeURIComponent(e[a])):"","'");return n.push(")"),n.join("")}function a(e){for(var t,n=e.length,a=[],i=0;n>i;i++)t=e.charCodeAt(i),a.push(t);return"String.fromCharCode("+a.join(",")+")"}function i(e){return(e=e.getAttribute("class"))?e.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var o,r,l=CKEDITOR.plugins.link,s=function(){var t=this.getDialog(),n=t.getContentElement("target","popupFeatures"),t=t.getContentElement("target","linkTargetName"),a=this.getValue();if(n&&t)switch(n=n.getElement(),n.hide(),t.setValue(""),a){case"frame":t.setLabel(e.lang.link.targetFrameName),t.getElement().show();break;case"popup":n.show(),t.setLabel(e.lang.link.targetPopupName),t.getElement().show();break;default:t.setValue(a),t.getElement().hide()}},d=/^javascript:/,c=/^mailto:([^?]+)(?:\?(.+))?$/,u=/subject=([^;?:@&=$,\/]*)/,m=/body=([^;?:@&=$,\/]*)/,p=/^#(.*)$/,h=/^((?:http|https|ftp|news):\/\/)?(.*)$/,g=/^(_(?:self|top|parent|blank))$/,f=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,b=/^javascript:([^(]+)\(([^)]+)\)$/,T=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,v=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,E=function(e,t){var n,a,l=t&&(t.data("cke-saved-href")||t.getAttribute("href"))||"",s={};if(l.match(d)&&("encode"==I?l=l.replace(f,function(e,t,n){return"mailto:"+String.fromCharCode.apply(String,t.split(","))+(n&&n.replace(/\\'/g,"'"))}):I&&l.replace(b,function(e,t,n){if(t==r){s.type="email";for(var a,i,e=s.email={},t=/(^')|('$)/g,n=n.match(/[^,\s]+/g),l=n.length,d=0;l>d;d++)a=decodeURIComponent,i=n[d].replace(t,"").replace(/\\'/g,"'"),i=a(i),a=o[d].toLowerCase(),e[a]=i;e.address=[e.name,e.domain].join("@")}})),!s.type)if(n=l.match(p))s.type="anchor",s.anchor={},s.anchor.name=s.anchor.id=n[1];else if(n=l.match(c)){a=l.match(u),l=l.match(m),s.type="email";var E=s.email={};E.address=n[1],a&&(E.subject=decodeURIComponent(a[1])),l&&(E.body=decodeURIComponent(l[1]))}else l&&(a=l.match(h))?(s.type="url",s.url={},s.url.protocol=a[1],s.url.url=a[2]):s.type="url";if(t){if(n=t.getAttribute("target"),s.target={},s.adv={},n)n.match(g)?s.target.type=s.target.name=n:(s.target.type="frame",s.target.name=n);else if(n=(n=t.data("cke-pa-onclick")||t.getAttribute("onclick"))&&n.match(T))for(s.target.type="popup",s.target.name=n[1];l=v.exec(n[2]);)"yes"!=l[2]&&"1"!=l[2]||l[1]in{height:1,width:1,top:1,left:1}?isFinite(l[2])&&(s.target[l[1]]=l[2]):s.target[l[1]]=!0;n=function(e,n){var a=t.getAttribute(n);null!==a&&(s.adv[e]=a||"")},n("advId","id"),n("advLangDir","dir"),n("advAccessKey","accessKey"),s.adv.advName=t.data("cke-saved-name")||t.getAttribute("name")||"",n("advLangCode","lang"),n("advTabIndex","tabindex"),n("advTitle","title"),n("advContentType","type"),CKEDITOR.plugins.link.synAnchorSelector?s.adv.advCSSClasses=i(t):n("advCSSClasses","class"),n("advCharset","charset"),n("advStyles","style"),n("advRel","rel")}n=s.anchors=[];var C;if(CKEDITOR.plugins.link.emptyAnchorFix)for(E=e.document.getElementsByTag("a"),l=0,a=E.count();a>l;l++)C=E.getItem(l),(C.data("cke-saved-name")||C.hasAttribute("name"))&&n.push({name:C.data("cke-saved-name")||C.getAttribute("name"),id:C.getAttribute("id")});else for(E=new CKEDITOR.dom.nodeList(e.document.$.anchors),l=0,a=E.count();a>l;l++)C=E.getItem(l),n[l]={name:C.getAttribute("name"),id:C.getAttribute("id")};if(CKEDITOR.plugins.link.fakeAnchor)for(E=e.document.getElementsByTag("img"),l=0,a=E.count();a>l;l++)(C=CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,E.getItem(l)))&&n.push({name:C.getAttribute("name"),id:C.getAttribute("id")});return this._.selectedElement=t,s},C=function(e){e.target&&this.setValue(e.target[this.id]||"")},k=function(e){e.adv&&this.setValue(e.adv[this.id]||"")},y=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},R=function(e){e.adv||(e.adv={}),e.adv[this.id]=this.getValue()||""},I=e.config.emailProtection||"";I&&"encode"!=I&&(r=o=void 0,I.replace(/^([^(]+)\(([^)]+)\)$/,function(e,t,n){r=t,o=[],n.replace(/[^,\s]+/g,function(e){o.push(e)})}));var D=e.lang.common,O=e.lang.link;return{title:O.title,minWidth:350,minHeight:230,contents:[{id:"info",label:O.info,title:O.info,elements:[{id:"linkType",type:"select",label:O.type,"default":"url",items:[[O.toUrl,"url"],[O.toAnchor,"anchor"],[O.toEmail,"email"]],onChange:function(){var t=this.getDialog(),n=["urlOptions","anchorOptions","emailOptions"],a=this.getValue(),i=t.definition.getContents("upload"),i=i&&i.hidden;for("url"==a?(e.config.linkShowTargetTab&&t.showPage("target"),i||t.showPage("upload")):(t.hidePage("target"),i||t.hidePage("upload")),i=0;i<n.length;i++){var o=t.getContentElement("info",n[i]);o&&(o=o.getElement().getParent().getParent(),n[i]==a+"Options"?o.show():o.hide())}t.layout()},setup:function(e){e.type&&this.setValue(e.type)},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:D.protocol,"default":"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[O.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:D.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),n=/^((javascript:)|[#\/\.\?])/i,a=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);a?(this.setValue(t.substr(a[0].length)),e.setValue(a[0].toLowerCase())):n.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"url"!=e.getValueOf("info","linkType")?!0:/javascript\:/.test(this.getValue())?(alert(D.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(O.noUrl).apply(this)},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:D.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:O.selectAnchor,setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:O.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].name&&this.add(e.anchors[t].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:O.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].id&&this.add(e.anchors[t].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(O.noAnchors)+"</div>",focus:!0,setup:function(e){e.anchors.length<1?this.getElement().show():this.getElement().hide()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:O.emailAddress,required:!0,validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"email"==e.getValueOf("info","linkType")?CKEDITOR.dialog.validate.notEmpty(O.noEmail).apply(this):!0},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:O.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:O.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:O.target,title:O.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:D.target,"default":"notSet",style:"width : 100%;",items:[[D.notSet,"notSet"],[O.targetFrame,"frame"],[O.targetPopup,"popup"],[D.targetNew,"_blank"],[D.targetTop,"_top"],[D.targetSelf,"_self"],[D.targetParent,"_parent"]],onChange:s,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),s.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:O.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:O.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:O.popupResizable,setup:C,commit:y},{type:"checkbox",id:"status",label:O.popupStatusBar,setup:C,commit:y}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:O.popupLocationBar,setup:C,commit:y},{type:"checkbox",id:"toolbar",label:O.popupToolbar,setup:C,commit:y}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:O.popupMenuBar,setup:C,commit:y},{type:"checkbox",id:"fullscreen",label:O.popupFullScreen,setup:C,commit:y}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:O.popupScrollBars,setup:C,commit:y},{type:"checkbox",id:"dependent",label:O.popupDependent,setup:C,commit:y}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:D.width,id:"width",setup:C,commit:y},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:O.popupLeft,id:"left",setup:C,commit:y}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:D.height,id:"height",setup:C,commit:y},{type:"text",labelLayout:"horizontal",label:O.popupTop,widths:["50%","50%"],id:"top",setup:C,commit:y}]}]}]}]},{id:"upload",label:O.upload,title:O.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:D.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:D.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:O.advanced,title:O.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:O.id,setup:k,commit:R},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:O.langDir,"default":"",style:"width:110px",items:[[D.notSet,""],[O.langDirLTR,"ltr"],[O.langDirRTL,"rtl"]],setup:k,commit:R},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:O.acccessKey,maxLength:1,setup:k,commit:R}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:O.name,id:"advName",requiredContent:"a[name]",setup:k,commit:R},{type:"text",label:O.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:k,commit:R},{type:"text",label:O.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:k,commit:R}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:k,commit:R},{type:"text",label:O.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:k,commit:R}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:k,commit:R},{type:"text",label:O.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:k,commit:R}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:k,commit:R},{type:"text",label:O.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:k,commit:R}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),n=null;(n=l.getSelectedLink(e))&&n.hasAttribute("href")?t.selectElement(n):n=null,this.setupContent(E.apply(this,[e,n]))},onOk:function(){var e={},i=[],o={},r=this.getParentEditor();switch(this.commitContent(o),o.type||"url"){case"url":var l=o.url&&void 0!=o.url.protocol?o.url.protocol:"http://",s=o.url&&CKEDITOR.tools.trim(o.url.url)||"";e["data-cke-saved-href"]=0===s.indexOf("/")?s:l+s;break;case"anchor":l=o.anchor&&o.anchor.id,e["data-cke-saved-href"]="#"+(o.anchor&&o.anchor.name||l||"");break;case"email":var d=o.email,l=d.address;switch(I){case"":case"encode":var s=encodeURIComponent(d.subject||""),c=encodeURIComponent(d.body||""),d=[];s&&d.push("subject="+s),c&&d.push("body="+c),d=d.length?"?"+d.join("&"):"","encode"==I?(l=["javascript:void(location.href='mailto:'+",a(l)],d&&l.push("+'",t(d),"'"),l.push(")")):l=["mailto:",l,d];break;default:l=l.split("@",2),d.name=l[0],d.domain=l[1],l=["javascript:",n(d)]}e["data-cke-saved-href"]=l.join("")}if(o.target)if("popup"==o.target.type){for(var l=["window.open(this.href, '",o.target.name||"","', '"],u=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"],s=u.length,d=function(e){o.target[e]&&u.push(e+"="+o.target[e])},c=0;s>c;c++)u[c]=u[c]+(o.target[u[c]]?"=yes":"=no");d("width"),d("left"),d("height"),d("top"),l.push(u.join(","),"'); return false;"),e["data-cke-pa-onclick"]=l.join(""),i.push("target")}else"notSet"!=o.target.type&&o.target.name?e.target=o.target.name:i.push("target"),i.push("data-cke-pa-onclick","onclick");o.adv&&(l=function(t,n){var a=o.adv[t];a?e[n]=a:i.push(n)},l("advId","id"),l("advLangDir","dir"),l("advAccessKey","accessKey"),o.adv.advName?e.name=e["data-cke-saved-name"]=o.adv.advName:i=i.concat(["data-cke-saved-name","name"]),l("advLangCode","lang"),l("advTabIndex","tabindex"),l("advTitle","title"),l("advContentType","type"),l("advCSSClasses","class"),l("advCharset","charset"),l("advStyles","style"),l("advRel","rel")),l=r.getSelection(),e.href=e["data-cke-saved-href"],this._.selectedElement?(r=this._.selectedElement,s=r.data("cke-saved-href"),d=r.getHtml(),r.setAttributes(e),r.removeAttributes(i),o.adv&&o.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector&&r.addClass(r.getChildCount()?"cke_anchor":"cke_anchor_empty"),(s==d||"email"==o.type&&-1!=d.indexOf("@"))&&r.setHtml("email"==o.type?o.email.address:e["data-cke-saved-href"]),l.selectElement(r),delete this._.selectedElement):(l=l.getRanges(1)[0],l.collapsed&&(r=new CKEDITOR.dom.text("email"==o.type?o.email.address:e["data-cke-saved-href"],r.document),l.insertNode(r),l.selectNodeContents(r)),r=new CKEDITOR.style({element:"a",attributes:e}),r.type=CKEDITOR.STYLE_INLINE,r.applyToRange(l),l.select())},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url"),e.select())}}});