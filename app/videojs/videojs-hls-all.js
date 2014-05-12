/*! Video.js v4.5.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function q(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.va[a])return u.va[a];a=u.u(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.Player(a,c,d)}
var videojs=u;window.Wd=window.Xd=u;u.Rb="4.5";u.Fc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};
"GENERATED_CDN_VSN"!==u.Rb&&(videojs.options.flash.swf=u.Fc+"vjs.zencdn.net/"+u.Rb+"/video-js.swf");u.va={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);u.ka=u.CoreObject=m();
u.ka.extend=function(a){var c,d;a=a||{};c=a.init||a.j||this.prototype.init||this.prototype.j||m();d=function(){c.apply(this,arguments)};d.prototype=u.l.create(this.prototype);d.prototype.constructor=d;d.extend=u.ka.extend;d.create=u.ka.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};u.ka.create=function(){var a=u.l.create(this.prototype);this.apply(a,arguments);return a};
u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.s||(d.s=u.s++);e.z[c].push(d);e.V||(e.disabled=l,e.V=function(c){if(!e.disabled){c=u.ic(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,r=d.length;k<r&&!c.pc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.V,l):document.attachEvent&&a.attachEvent("on"+c,e.V))};
u.o=function(a,c,d){if(u.mc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.z[c]=[];u.ec(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.ec(a,c)}};u.ec=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.V,l):document.detachEvent&&a.detachEvent("on"+c,d.V));u.zb(d.z)&&(delete d.z,delete d.V,delete d.disabled);u.zb(d)&&u.uc(a)};
u.ic=function(a){function c(){return f}function d(){return l}if(!a||!a.Ab){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.fd=c;a.defaultPrevented=f};a.fd=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Ab=c};a.Ab=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.pc=c;a.stopPropagation()};a.pc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};u.k=function(a,c){var d=u.mc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.ic(c);d.V&&d.V.call(a,c);if(e&&!c.Ab()&&c.bubbles!==l)u.k(e,c);else if(!e&&!c.defaultPrevented&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
u.U=function(a,c,d){function e(){u.o(a,c,e);d.apply(this,arguments)}e.s=d.s=d.s||u.s++;u.d(a,c,e)};var v=Object.prototype.hasOwnProperty;u.e=function(a,c){var d,e;d=document.createElement(a||"div");for(e in c)v.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.Z=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.l={};u.l.create=Object.create||function(a){function c(){}c.prototype=a;return new c};
u.l.ra=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};u.l.B=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};u.l.Wc=function(a,c){var d,e,g;a=u.l.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=u.l.Na(e)&&u.l.Na(g)?u.l.Wc(e,g):c[d]);return a};u.l.copy=function(a){return u.l.B({},a)};u.l.Na=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};
u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=u.s++);e.s=d?d+"_"+c.s:c.s;return e};u.pa={};u.s=1;u.expando="vdata"+(new Date).getTime();u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.s++,u.pa[c]={});return u.pa[c]};u.mc=function(a){a=a[u.expando];return!(!a||u.zb(u.pa[a]))};u.uc=function(a){var c=a[u.expando];if(c){delete u.pa[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};
u.zb=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};u.t=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.F=u.e("video");u.J=navigator.userAgent;u.Kc=/iPhone/i.test(u.J);u.Jc=/iPad/i.test(u.J);u.Lc=/iPod/i.test(u.J);u.Ic=u.Kc||u.Jc||u.Lc;var aa=u,w;var x=u.J.match(/OS (\d+)_/i);
w=x&&x[1]?x[1]:b;aa.Kd=w;u.Hc=/Android/i.test(u.J);var ba=u,y;var z=u.J.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),A,B;z?(A=z[1]&&parseFloat(z[1]),B=z[2]&&parseFloat(z[2]),y=A&&B?parseFloat(z[1]+"."+z[2]):A?A:h):y=h;ba.Qb=y;u.Mc=u.Hc&&/webkit/i.test(u.J)&&2.3>u.Qb;u.Ub=/Firefox/i.test(u.J);u.Ld=/Chrome/i.test(u.J);u.$b=!!("ontouchstart"in window||window.Gc&&document instanceof window.Gc);
u.wb=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}}return c};
u.Pd=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.yb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Nb={};u.u=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
u.ta=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Sc=function(){document.body.focus();document.onselectstart=q(l)};u.Ed=function(){document.onselectstart=q(f)};u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
u.sb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
u.get=function(a,c,d){var e,g;"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");
g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.wd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.kc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.cd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:u.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:u.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};
u.ja={};u.ja.Eb=function(a,c){var d,e,g;a=u.l.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=u.l.Na(e)&&u.l.Na(g)?u.ja.Eb(e,g):c[d]);return a};
u.b=u.ka.extend({j:function(a,c,d){this.c=a;this.h=u.l.copy(this.h);c=this.options(c);this.R=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.s++);this.ld=c.name||h;this.a=c.el||this.e();this.K=[];this.Ja={};this.Ka={};this.nc();this.I(d);if(c.vc!==l){var e,g;e=u.bind(this.C(),this.C().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});t=u.b.prototype;
t.dispose=function(){this.k({type:"dispose",bubbles:l});if(this.K)for(var a=this.K.length-1;0<=a;a--)this.K[a].dispose&&this.K[a].dispose();this.Ka=this.Ja=this.K=h;this.o();this.a.parentNode&&this.a.parentNode.removeChild(this.a);u.uc(this.a);this.a=h};t.c=f;t.C=p("c");t.options=function(a){return a===b?this.h:this.h=u.ja.Eb(this.h,a)};t.e=function(a,c){return u.e(a,c)};t.u=p("a");t.La=function(){return this.G||this.a};t.id=p("R");t.name=p("ld");t.children=p("K");t.ed=function(a){return this.Ja[a]};
t.fa=function(a){return this.Ka[a]};t.Y=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.Z(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.K.push(d);"function"===typeof d.id&&(this.Ja[d.id()]=d);(e=e||d.name&&d.name())&&(this.Ka[e]=d);"function"===typeof d.el&&d.el()&&this.La().appendChild(d.el());return d};
t.removeChild=function(a){"string"===typeof a&&(a=this.fa(a));if(a&&this.K){for(var c=l,d=this.K.length-1;0<=d;d--)if(this.K[d]===a){c=f;this.K.splice(d,1);break}c&&(this.Ja[a.id]=h,this.Ka[a.name]=h,(c=a.u())&&c.parentNode===this.La()&&this.La().removeChild(a.u()))}};t.nc=function(){var a=this.h;if(a&&a.children){var c=this;u.l.ra(a.children,function(a,e){e!==l&&!e.loadEvent&&(c[a]=c.Y(a,e))})}};t.Q=q("");t.d=function(a,c){u.d(this.a,a,u.bind(this,c));return this};
t.o=function(a,c){u.o(this.a,a,c);return this};t.U=function(a,c){u.U(this.a,a,u.bind(this,c));return this};t.k=function(a,c){u.k(this.a,a,c);return this};t.I=function(a){a&&(this.aa?a.call(this):(this.Ua===b&&(this.Ua=[]),this.Ua.push(a)));return this};t.za=function(){this.aa=f;var a=this.Ua;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Ua=[];this.k("ready")}};t.n=function(a){u.n(this.a,a);return this};t.t=function(a){u.t(this.a,a);return this};
t.show=function(){this.a.style.display="block";return this};t.D=function(){this.a.style.display="none";return this};function C(a){a.t("vjs-lock-showing")}t.disable=function(){this.D();this.show=m()};t.width=function(a,c){return E(this,"width",a,c)};t.height=function(a,c){return E(this,"height",a,c)};t.Yc=function(a,c){return this.width(a,f).height(c)};
function E(a,c,d,e){if(d!==b)return a.a.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.k("resize"),a;if(!a.a)return 0;d=a.a.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.a["offset"+u.Z(c)],10)}
u.q=u.b.extend({j:function(a,c){u.b.call(this,a,c);var d=l;this.d("touchstart",function(a){a.preventDefault();d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.p(a);a.preventDefault()});this.d("click",this.p);this.d("focus",this.Qa);this.d("blur",this.Pa)}});t=u.q.prototype;
t.e=function(a,c){c=u.l.B({className:this.Q(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.oa||"Need Text")+"</span></div>",role:"button","aria-live":"polite",tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.Q=function(){return"vjs-control "+u.b.prototype.Q.call(this)};t.p=m();t.Qa=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.p()};
t.Pa=function(){u.o(document,"keyup",u.bind(this,this.ba))};u.O=u.b.extend({j:function(a,c){u.b.call(this,a,c);this.Rc=this.fa(this.h.barName);this.handle=this.fa(this.h.handleName);a.d(this.sc,u.bind(this,this.update));this.d("mousedown",this.Ra);this.d("touchstart",this.Ra);this.d("focus",this.Qa);this.d("blur",this.Pa);this.d("click",this.p);this.c.d("controlsvisible",u.bind(this,this.update));a.I(u.bind(this,this.update));this.P={}}});t=u.O.prototype;
t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.l.B({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.Ra=function(a){a.preventDefault();u.Sc();this.P.move=u.bind(this,this.Gb);this.P.end=u.bind(this,this.Hb);u.d(document,"mousemove",this.P.move);u.d(document,"mouseup",this.P.end);u.d(document,"touchmove",this.P.move);u.d(document,"touchend",this.P.end);this.Gb(a)};
t.Hb=function(){u.Ed();u.o(document,"mousemove",this.P.move,l);u.o(document,"mouseup",this.P.end,l);u.o(document,"touchmove",this.P.move,l);u.o(document,"touchend",this.P.end,l);this.update()};t.update=function(){if(this.a){var a,c=this.xb(),d=this.handle,e=this.Rc;isNaN(c)&&(c=0);a=c;if(d){a=this.a.offsetWidth;var g=d.u().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.u().style.left=u.round(100*c,2)+"%"}e.u().style.width=u.round(100*a,2)+"%"}};
function F(a,c){var d,e,g,j;d=a.a;e=u.cd(d);j=g=d.offsetWidth;d=a.handle;if(a.h.Gd)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.u().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.u().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Qa=function(){u.d(document,"keyup",u.bind(this,this.ba))};
t.ba=function(a){37==a.which?(a.preventDefault(),this.yc()):39==a.which&&(a.preventDefault(),this.zc())};t.Pa=function(){u.o(document,"keyup",u.bind(this,this.ba))};t.p=function(a){a.stopImmediatePropagation();a.preventDefault()};u.W=u.b.extend();u.W.prototype.defaultValue=0;u.W.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.l.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.b.prototype.e.call(this,"div",c)};u.la=u.b.extend();
function ca(a,c){a.Y(c);c.d("click",u.bind(a,function(){C(this)}))}u.la.prototype.e=function(){var a=this.options().Uc||"ul";this.G=u.e(a,{className:"vjs-menu-content"});a=u.b.prototype.e.call(this,"div",{append:this.G,className:"vjs-menu"});a.appendChild(this.G);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.N=u.q.extend({j:function(a,c){u.q.call(this,a,c);this.selected(c.selected)}});
u.N.prototype.e=function(a,c){return u.q.prototype.e.call(this,"li",u.l.B({className:"vjs-menu-item",innerHTML:this.h.label},c))};u.N.prototype.p=function(){this.selected(f)};u.N.prototype.selected=function(a){a?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.t("vjs-selected"),this.a.setAttribute("aria-selected",l))};
u.S=u.q.extend({j:function(a,c){u.q.call(this,a,c);this.ua=this.Ma();this.Y(this.ua);this.L&&0===this.L.length&&this.D();this.d("keyup",this.ba);this.a.setAttribute("aria-haspopup",f);this.a.setAttribute("role","button")}});t=u.S.prototype;t.na=l;t.Ma=function(){var a=new u.la(this.c);this.options().title&&a.u().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),Cd:-1}));if(this.L=this.createItems())for(var c=0;c<this.L.length;c++)ca(a,this.L[c]);return a};t.qa=m();
t.Q=function(){return this.className+" vjs-menu-button "+u.q.prototype.Q.call(this)};t.Qa=m();t.Pa=m();t.p=function(){this.U("mouseout",u.bind(this,function(){C(this.ua);this.a.blur()}));this.na?G(this):H(this)};t.ba=function(a){a.preventDefault();32==a.which||13==a.which?this.na?G(this):H(this):27==a.which&&this.na&&G(this)};function H(a){a.na=f;a.ua.n("vjs-lock-showing");a.a.setAttribute("aria-pressed",f);a.L&&0<a.L.length&&a.L[0].u().focus()}
function G(a){a.na=l;C(a.ua);a.a.setAttribute("aria-pressed",l)}
u.Player=u.b.extend({j:function(a,c,d){this.M=a;a.id=a.id||"vjs_video_"+u.s++;c=u.l.B(da(a),c);this.v={};this.tc=c.poster;this.rb=c.controls;a.controls=l;c.vc=l;u.b.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");this.U("play",function(a){u.k(this.a,{type:"firstplay",target:this.a})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.md);this.d("play",this.Jb);this.d("firstplay",this.nd);this.d("pause",this.Ib);
this.d("progress",this.pd);this.d("durationchange",this.qc);this.d("error",this.Fb);this.d("fullscreenchange",this.od);u.va[this.R]=this;c.plugins&&u.l.ra(c.plugins,function(a,c){this[a](c)},this);var e,g,j,k;e=u.bind(this,this.reportUserActivity);this.d("mousedown",function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",e);this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);j=setInterval(u.bind(this,function(){this.ia&&(this.ia=l,this.userActive(f),
clearTimeout(k),k=setTimeout(u.bind(this,function(){this.ia||this.userActive(l)}),2E3))}),250);this.d("dispose",function(){clearInterval(j);clearTimeout(k)})}});t=u.Player.prototype;t.h=u.options;t.dispose=function(){this.k("dispose");this.o("dispose");u.va[this.R]=h;this.M&&this.M.player&&(this.M.player=h);this.a&&this.a.player&&(this.a.player=h);clearInterval(this.Ta);this.wa();this.i&&this.i.dispose();u.b.prototype.dispose.call(this)};
function da(a){var c={sources:[],tracks:[]};u.l.B(c,u.wb(a));if(a.hasChildNodes()){var d,e,g,j;a=a.childNodes;g=0;for(j=a.length;g<j;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.wb(d)):"track"===e&&c.tracks.push(u.wb(d))}return c}
t.e=function(){var a=this.a=u.b.prototype.e.call(this,"div"),c=this.M;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,j,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],j=g.nodeName.toLowerCase(),"track"===j&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.h.width,f);this.height(this.h.height,f);c.parentNode&&c.parentNode.insertBefore(a,
c);u.yb(c,a);return a};
function I(a,c,d){a.i&&(a.aa=l,a.i.dispose(),a.Cb&&(a.Cb=l,clearInterval(a.Ta)),a.Db&&J(a),a.i=l);"Html5"!==c&&a.M&&(u.g.gc(a.M),a.M=h);a.xa=c;a.aa=l;var e=u.l.B({source:d,parentEl:a.a},a.h[c.toLowerCase()]);d&&(d.src==a.v.src&&0<a.v.currentTime&&(e.startTime=a.v.currentTime),a.v.src=d.src);a.i=new window.videojs[c](a,e);a.i.I(function(){this.c.za();if(!this.m.progressEvents){var a=this.c;a.Cb=f;a.Ta=setInterval(u.bind(a,function(){this.v.mb<this.buffered().end(0)?this.k("progress"):1==this.bufferedPercent()&&
(clearInterval(this.Ta),this.k("progress"))}),500);a.i.U("progress",function(){this.m.progressEvents=f;var a=this.c;a.Cb=l;clearInterval(a.Ta)})}this.m.timeupdateEvents||(a=this.c,a.Db=f,a.d("play",a.Cc),a.d("pause",a.wa),a.i.U("timeupdate",function(){this.m.timeupdateEvents=f;J(this.c)}))})}function J(a){a.Db=l;a.wa();a.o("play",a.Cc);a.o("pause",a.wa)}t.Cc=function(){this.fc&&this.wa();this.fc=setInterval(u.bind(this,function(){this.k("timeupdate")}),250)};t.wa=function(){clearInterval(this.fc)};
t.Jb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing")};t.nd=function(){this.h.starttime&&this.currentTime(this.h.starttime);this.n("vjs-has-started")};t.Ib=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused")};t.pd=function(){1==this.bufferedPercent()&&this.k("loadedalldata")};t.md=function(){this.h.loop&&(this.currentTime(0),this.play())};t.qc=function(){var a=K(this,"duration");a&&this.duration(a)};t.od=function(){this.isFullScreen()?this.n("vjs-fullscreen"):this.t("vjs-fullscreen")};
t.Fb=function(a){u.log("Video Error",a)};function L(a,c,d){if(a.i&&!a.i.aa)a.i.I(function(){this[c](d)});else try{a.i[c](d)}catch(e){throw u.log(e),e;}}function K(a,c){if(a.i&&a.i.aa)try{return a.i[c]()}catch(d){throw a.i[c]===b?u.log("Video.js: "+c+" method not defined for "+a.xa+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.xa+" playback technology element.",d),a.i.aa=l):u.log(d),d;}}t.play=function(){L(this,"play");return this};
t.pause=function(){L(this,"pause");return this};t.paused=function(){return K(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(L(this,"setCurrentTime",a),this.Db&&this.k("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0};t.duration=function(a){if(a!==b)return this.v.duration=parseFloat(a),this;this.v.duration===b&&this.qc();return this.v.duration||0};
t.buffered=function(){var a=K(this,"buffered"),c=a.length-1,d=this.v.mb=this.v.mb||0;a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.v.mb=d);return u.sb(0,d)};t.bufferedPercent=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.v.volume=a,L(this,"setVolume",a),u.wd(a),this;a=parseFloat(K(this,"volume"));return isNaN(a)?1:a};
t.muted=function(a){return a!==b?(L(this,"setMuted",a),this):K(this,"muted")||l};t.Wa=function(){return K(this,"supportsFullScreen")||l};t.oc=l;t.isFullScreen=function(a){return a!==b?(this.oc=a,this):this.oc};
t.requestFullScreen=function(){var a=u.Nb.requestFullScreen;this.isFullScreen(f);a?(u.d(document,a.ub,u.bind(this,function(c){this.isFullScreen(document[a.isFullScreen]);this.isFullScreen()===l&&u.o(document,a.ub,arguments.callee);this.k("fullscreenchange")})),this.a[a.wc]()):this.i.Wa()?L(this,"enterFullScreen"):(this.gd=f,this.Zc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.jc)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),
this.k("enterFullWindow"),this.k("fullscreenchange"));return this};t.cancelFullScreen=function(){var a=u.Nb.requestFullScreen;this.isFullScreen(l);if(a)document[a.ob]();else this.i.Wa()?L(this,"exitFullScreen"):(M(this),this.k("fullscreenchange"));return this};t.jc=function(a){27===a.keyCode&&(this.isFullScreen()===f?this.cancelFullScreen():M(this))};
function M(a){a.gd=l;u.o(document,"keydown",a.jc);document.documentElement.style.overflow=a.Zc;u.t(document.body,"vjs-full-window");a.k("exitFullWindow")}
t.src=function(a){if(a===b)return K(this,"src");if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.h.techOrder;d<e.length;d++){var g=u.Z(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,r=c;k<r.length;k++){var n=r[k];if(j.canPlaySource(n)){c={source:n,i:g};break a}}}c=l}c?(a=c.source,c=c.i,c==this.xa?this.src(a):I(this,c,a)):(this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage})),this.za())}else a instanceof Object?window.videojs[this.xa].canPlaySource(a)?this.src(a.src):
this.src([a]):(this.v.src=a,this.aa?(L(this,"src",a),"auto"==this.h.preload&&this.load(),this.h.autoplay&&this.play()):this.I(function(){this.src(a)}));return this};t.load=function(){L(this,"load");return this};t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""};t.Sa=function(a){return a!==b?(L(this,"setPreload",a),this.h.preload=a,this):K(this,"preload")};t.autoplay=function(a){return a!==b?(L(this,"setAutoplay",a),this.h.autoplay=a,this):K(this,"autoplay")};
t.loop=function(a){return a!==b?(L(this,"setLoop",a),this.h.loop=a,this):K(this,"loop")};t.poster=function(a){if(a===b)return this.tc;this.tc=a;L(this,"setPoster",a);this.k("posterchange")};t.controls=function(a){return a!==b?(a=!!a,this.rb!==a&&((this.rb=a)?(this.t("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.k("controlsenabled")):(this.t("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.k("controlsdisabled"))),this):this.rb};u.Player.prototype.Pb;t=u.Player.prototype;
t.usingNativeControls=function(a){return a!==b?(a=!!a,this.Pb!==a&&((this.Pb=a)?(this.n("vjs-using-native-controls"),this.k("usingnativecontrols")):(this.t("vjs-using-native-controls"),this.k("usingcustomcontrols"))),this):this.Pb};t.error=function(){return K(this,"error")};t.ended=function(){return K(this,"ended")};t.seeking=function(){return K(this,"seeking")};t.ia=f;t.reportUserActivity=function(){this.ia=f};t.Ob=f;
t.userActive=function(a){return a!==b?(a=!!a,a!==this.Ob&&((this.Ob=a)?(this.ia=f,this.t("vjs-user-inactive"),this.n("vjs-user-active"),this.k("useractive")):(this.ia=l,this.i&&this.i.U("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.t("vjs-user-active"),this.n("vjs-user-inactive"),this.k("userinactive"))),this):this.Ob};var N,O,P;P=document.createElement("div");O={};
P.Md!==b?(O.wc="requestFullscreen",O.ob="exitFullscreen",O.ub="fullscreenchange",O.isFullScreen="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.isFullScreen=N+"FullScreen"):(N="webkit",O.isFullScreen=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.wc=N+"RequestFullScreen",O.ob=N+"CancelFullScreen"),O.ub=N+"fullscreenchange");document[O.ob]&&(u.Nb.requestFullScreen=O);u.Da=u.b.extend();
u.Da.prototype.h={Rd:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.Da.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.Xb=u.q.extend({j:function(a,c){u.q.call(this,a,c);a.d("play",u.bind(this,this.Jb));a.d("pause",u.bind(this,this.Ib))}});t=u.Xb.prototype;t.oa="Play";t.Q=function(){return"vjs-play-control "+u.q.prototype.Q.call(this)};
t.p=function(){this.c.paused()?this.c.play():this.c.pause()};t.Jb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing");this.a.children[0].children[0].innerHTML="Pause"};t.Ib=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused");this.a.children[0].children[0].innerHTML="Play"};u.$a=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});
u.$a.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.G=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.G);return a};u.$a.prototype.da=function(){var a=this.c.Va?this.c.v.currentTime:this.c.currentTime();this.G.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.ta(a,this.c.duration())};
u.ab=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});u.ab.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.G=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(this.G);return a};
u.ab.prototype.da=function(){var a=this.c.duration();a&&(this.G.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.ta(a))};u.bc=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.bc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.gb=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});
u.gb.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.G=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(this.G);return a};u.gb.prototype.da=function(){this.c.duration()&&(this.G.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.ta(this.c.duration()-this.c.currentTime()))};
u.Ea=u.q.extend({j:function(a,c){u.q.call(this,a,c)}});u.Ea.prototype.oa="Fullscreen";u.Ea.prototype.Q=function(){return"vjs-fullscreen-control "+u.q.prototype.Q.call(this)};u.Ea.prototype.p=function(){this.c.isFullScreen()?(this.c.cancelFullScreen(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.c.requestFullScreen(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")};u.fb=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.fb.prototype.h={children:{seekBar:{}}};
u.fb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Yb=u.O.extend({j:function(a,c){u.O.call(this,a,c);a.d("timeupdate",u.bind(this,this.Aa));a.I(u.bind(this,this.Aa))}});t=u.Yb.prototype;t.h={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.sc="timeupdate";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
t.Aa=function(){var a=this.c.Va?this.c.v.currentTime:this.c.currentTime();this.a.setAttribute("aria-valuenow",u.round(100*this.xb(),2));this.a.setAttribute("aria-valuetext",u.ta(a,this.c.duration()))};t.xb=function(){return this.c.currentTime()/this.c.duration()};t.Ra=function(a){u.O.prototype.Ra.call(this,a);this.c.Va=f;this.Hd=!this.c.paused();this.c.pause()};t.Gb=function(a){a=F(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
t.Hb=function(a){u.O.prototype.Hb.call(this,a);this.c.Va=l;this.Hd&&this.c.play()};t.zc=function(){this.c.currentTime(this.c.currentTime()+5)};t.yc=function(){this.c.currentTime(this.c.currentTime()-5)};u.cb=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.cb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};
u.cb.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.c.bufferedPercent(),2)+"%")};u.Wb=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.Wb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.Ga=u.W.extend({j:function(a,c){u.W.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});u.Ga.prototype.defaultValue="00:00";
u.Ga.prototype.e=function(){return u.W.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};u.Ga.prototype.da=function(){var a=this.c.Va?this.c.v.currentTime:this.c.currentTime();this.a.innerHTML='<span class="vjs-control-text">'+u.ta(a,this.c.duration())+"</span>"};u.ib=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});
u.ib.prototype.h={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.hb=u.O.extend({j:function(a,c){u.O.call(this,a,c);a.d("volumechange",u.bind(this,this.Aa));a.I(u.bind(this,this.Aa));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.Aa=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.c.volume(),2));this.a.setAttribute("aria-valuetext",u.round(100*this.c.volume(),2)+"%")};
t.h={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.sc="volumechange";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Gb=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(F(this,a))};t.xb=function(){return this.c.muted()?0:this.c.volume()};t.zc=function(){this.c.volume(this.c.volume()+0.1)};t.yc=function(){this.c.volume(this.c.volume()-0.1)};
u.cc=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.cc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.W.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.W.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
u.ea=u.q.extend({j:function(a,c){u.q.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});u.ea.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};
u.ea.prototype.p=function(){this.c.muted(this.c.muted()?l:f)};u.ea.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.t(this.a,"vjs-vol-"+a);u.n(this.a,"vjs-vol-"+c)};
u.ma=u.S.extend({j:function(a,c){u.S.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.Dc===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.Dc===l?this.n("vjs-hidden"):this.t("vjs-hidden")}));this.n("vjs-menu-button")}});u.ma.prototype.Ma=function(){var a=new u.la(this.c,{Uc:"div"}),c=new u.hb(this.c,u.l.B({Gd:f},this.h.Yd));a.Y(c);return a};u.ma.prototype.p=function(){u.ea.prototype.p.call(this);u.S.prototype.p.call(this)};
u.ma.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.ma.prototype.update=u.ea.prototype.update;u.Fa=u.q.extend({j:function(a,c){u.q.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.D();a.d("posterchange",u.bind(this,function(){this.src(a.poster())}));a.d("play",u.bind(this,this.D))}});var Q="backgroundSize"in u.F.style;
u.Fa.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1});Q||a.appendChild(u.e("img"));return a};u.Fa.prototype.src=function(a){var c=this.u();a!==b&&(Q?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};u.Fa.prototype.p=function(){this.C().controls()&&this.c.play()};
u.Vb=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("canplay",u.bind(this,this.D));a.d("canplaythrough",u.bind(this,this.D));a.d("playing",u.bind(this,this.D));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.D));a.d("error",u.bind(this,this.show));a.d("ended",u.bind(this,this.D));a.d("waiting",u.bind(this,this.show))}});u.Vb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Ya=u.q.extend();
u.Ya.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.Ya.prototype.p=function(){this.c.play()};
u.r=u.b.extend({j:function(a,c,d){c=c||{};c.vc=l;u.b.call(this,a,c,d);var e,g;g=this;e=this.C();a=function(){if(e.controls()&&!e.usingNativeControls()){var a;g.d("mousedown",g.p);g.d("touchstart",function(c){c.preventDefault();a=this.c.userActive()});g.d("touchmove",function(){a&&this.C().reportUserActivity()});var c,d,n,s;c=0;g.d("touchstart",function(){c=(new Date).getTime();n=f});s=function(){n=l};g.d("touchmove",s);g.d("touchleave",s);g.d("touchcancel",s);g.d("touchend",function(){n===f&&(d=(new Date).getTime()-
c,250>d&&this.k("tap"))});g.d("tap",g.qd)}};c=u.bind(g,g.td);this.I(a);e.d("controlsenabled",a);e.d("controlsdisabled",c)}});t=u.r.prototype;t.td=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};t.p=function(a){0===a.button&&this.C().controls()&&(this.C().paused()?this.C().play():this.C().pause())};t.qd=function(){this.C().userActive(!this.C().userActive())};t.Lb=m();
t.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};u.media={};u.media.Xa="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
function ea(){var a=u.media.Xa[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Xa.length-1;0<=i;i--)u.r.prototype[u.media.Xa[i]]=ea();
u.g=u.r.extend({j:function(a,c,d){this.m.volumeControl=u.g.Tc();this.m.movingMediaElementInDOM=!u.Ic;this.m.fullscreenResize=f;u.r.call(this,a,c,d);for(d=u.g.bb.length-1;0<=d;d--)u.d(this.a,u.g.bb[d],u.bind(this.c,this.ad));(c=c.source)&&this.a.currentSrc===c.src&&0<this.a.networkState?a.k("loadstart"):c&&(this.a.src=c.src);if(u.$b&&a.options().nativeControlsForTouch!==l){var e,g,j,k;e=this;g=this.C();c=g.controls();e.a.controls=!!c;j=function(){e.a.controls=f};k=function(){e.a.controls=l};g.d("controlsenabled",
j);g.d("controlsdisabled",k);c=function(){g.o("controlsenabled",j);g.o("controlsdisabled",k)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.I(function(){this.M&&(this.h.autoplay&&this.paused())&&(delete this.M.poster,this.play())});this.za()}});t=u.g.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};
t.e=function(){var a=this.c,c=a.M,d;if(!c||this.m.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),u.g.gc(c),c=d,a.M=h):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.yb(c,a.u());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e];a.h[g]!==h&&(c[g]=a.h[g])}return c};t.ad=function(a){this.k(a);a.stopPropagation()};t.play=function(){this.a.play()};t.pause=function(){this.a.pause()};t.paused=function(){return this.a.paused};t.currentTime=function(){return this.a.currentTime};
t.vd=function(a){try{this.a.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.a.duration||0};t.buffered=function(){return this.a.buffered};t.volume=function(){return this.a.volume};t.Ad=function(a){this.a.volume=a};t.muted=function(){return this.a.muted};t.yd=function(a){this.a.muted=a};t.width=function(){return this.a.offsetWidth};t.height=function(){return this.a.offsetHeight};
t.Wa=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.J)||!/Chrome|Mac OS X 10.5/.test(u.J))?f:l};t.hc=function(){var a=this.a;a.paused&&a.networkState<=a.Jd?(this.a.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};t.bd=function(){this.a.webkitExitFullScreen()};t.src=function(a){this.a.src=a};t.load=function(){this.a.load()};t.currentSrc=function(){return this.a.currentSrc};t.poster=function(){return this.a.poster};
t.Lb=function(a){this.a.poster=a};t.Sa=function(){return this.a.Sa};t.zd=function(a){this.a.Sa=a};t.autoplay=function(){return this.a.autoplay};t.ud=function(a){this.a.autoplay=a};t.controls=function(){return this.a.controls};t.loop=function(){return this.a.loop};t.xd=function(a){this.a.loop=a};t.error=function(){return this.a.error};t.seeking=function(){return this.a.seeking};t.ended=function(){return this.a.ended};u.g.isSupported=function(){try{u.F.volume=0.5}catch(a){return l}return!!u.F.canPlayType};
u.g.nb=function(a){try{return!!u.F.canPlayType(a.type)}catch(c){return""}};u.g.Tc=function(){var a=u.F.volume;u.F.volume=a/2+0.1;return a!==u.F.volume};var R,fa=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ga=/^video\/mp4/i;
u.g.rc=function(){4<=u.Qb&&(R||(R=u.F.constructor.prototype.canPlayType),u.F.constructor.prototype.canPlayType=function(a){return a&&fa.test(a)?"maybe":R.call(this,a)});u.Mc&&(R||(R=u.F.constructor.prototype.canPlayType),u.F.constructor.prototype.canPlayType=function(a){return a&&ga.test(a)?"maybe":R.call(this,a)})};u.g.Fd=function(){var a=u.F.constructor.prototype.canPlayType;u.F.constructor.prototype.canPlayType=R;R=h;return a};u.g.rc();u.g.bb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
u.g.gc=function(a){if(a){a.player=h;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
u.f=u.r.extend({j:function(a,c,d){u.r.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.a=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.h;var k=u.l.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Sa,loop:a.loop,muted:a.muted},c.flashVars),r=u.l.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.l.B({id:j,name:j,"class":"vjs-tech"},c.attributes),s;e&&(e.type&&u.f.jd(e.type)?
(a=u.f.Ac(e.src),k.rtmpConnection=encodeURIComponent(a.qb),k.rtmpStream=encodeURIComponent(a.Mb)):k.src=encodeURIComponent(u.kc(e.src)));this.setCurrentTime=function(a){s=a;this.a.vjs_setProperty("currentTime",a)};this.currentTime=function(){return this.seeking()?s:this.a.vjs_getProperty("currentTime")};u.yb(g,d);c.startTime&&this.I(function(){this.load();this.play();this.currentTime(c.startTime)});u.Ub&&this.I(function(){u.d(this.u(),"mousemove",u.bind(this,function(){this.C().k({type:"mousemove",
bubbles:l})}))});if(c.iFrameMode===f&&!u.Ub){var D=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(D,"load",u.bind(this,function(){var a,d=D.contentWindow;a=D.contentDocument?D.contentDocument:D.contentWindow.document;a.write(u.f.lc(c.swf,k,r,n));d.player=this.c;d.ready=u.bind(this.c,function(c){var d=this.i;d.a=a.getElementById(c);
u.f.pb(d)});d.events=u.bind(this.c,function(a,c){this&&"flash"===this.xa&&this.k(c)});d.errors=u.bind(this.c,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(D,g)}else u.f.$c(c.swf,g,k,r,n)}});t=u.f.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};t.play=function(){this.a.vjs_play()};t.pause=function(){this.a.vjs_pause()};
t.src=function(a){if(a===b)return this.currentSrc();u.f.hd(a)?(a=u.f.Ac(a),this.Td(a.qb),this.Ud(a.Mb)):(a=u.kc(a),this.a.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.currentSrc=function(){var a=this.a.vjs_getProperty("currentSrc");if(a==h){var c=this.rtmpConnection(),d=this.rtmpStream();c&&d&&(a=u.f.Bd(c,d))}return a};t.load=function(){this.a.vjs_load()};t.poster=function(){this.a.vjs_getProperty("poster")};t.Lb=m();t.buffered=function(){return u.sb(0,this.a.vjs_getProperty("buffered"))};
t.Wa=q(l);t.hc=q(l);var S=u.f.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),U="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");function ha(){var a=T[V],c=a.charAt(0).toUpperCase()+a.slice(1);S["set"+c]=function(c){return this.a.vjs_setProperty(a,c)}}
function W(a){S[a]=function(){return this.a.vjs_getProperty(a)}}var V;for(V=0;V<T.length;V++)W(T[V]),ha();for(V=0;V<U.length;V++)W(U[V]);u.f.isSupported=function(){return 10<=u.f.version()[0]};u.f.nb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in u.f.dd||a in u.f.Bc)return"maybe"};u.f.dd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.f.Bc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
u.f.onReady=function(a){a=u.u(a);var c=a.player||a.parentNode.player,d=c.i;a.player=c;d.a=a;u.f.pb(d)};u.f.pb=function(a){a.u().vjs_getProperty?a.za():setTimeout(function(){u.f.pb(a)},50)};u.f.onEvent=function(a,c){u.u(a).player.k(c)};u.f.onError=function(a,c){u.u(a).player.k("error");u.log("Flash Error",c,a)};
u.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
u.f.$c=function(a,c,d,e,g){a=u.f.lc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};
u.f.lc=function(a,c,d,e){var g="",j="",k="";c&&u.l.ra(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.l.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.l.ra(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.l.B({data:a,width:"100%",height:"100%"},e);u.l.ra(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};u.f.Bd=function(a,c){return a+"&"+c};
u.f.Ac=function(a){var c={qb:"",Mb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.qb=a.substring(0,d);c.Mb=a.substring(e,a.length);return c};u.f.jd=function(a){return a in u.f.Bc};u.f.Oc=/^rtmp[set]?:\/\//i;u.f.hd=function(a){return u.f.Oc.test(a)};
u.Nc=u.b.extend({j:function(a,c,d){u.b.call(this,a,c,d);if(!a.h.sources||0===a.h.sources.length){c=0;for(d=a.h.techOrder;c<d.length;c++){var e=u.Z(d[c]),g=window.videojs[e];if(g&&g.isSupported()){I(a,e);break}}}else a.src(a.h.sources)}});u.Player.prototype.textTracks=function(){return this.ya=this.ya||[]};function X(a,c,d){for(var e=a.ya,g=0,j=e.length,k,r;g<j;g++)k=e[g],k.id()===c?(k.show(),r=k):d&&(k.H()==d&&0<k.mode())&&k.disable();(c=r?r.H():d?d:l)&&a.k(c+"trackchange")}
u.w=u.b.extend({j:function(a,c){u.b.call(this,a,c);this.R=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.s++;this.xc=c.src;this.Xc=c["default"]||c.dflt;this.Dd=c.title;this.Qd=c.srclang;this.kd=c.label;this.$=[];this.kb=[];this.ga=this.ha=0;this.c.d("fullscreenchange",u.bind(this,this.Qc))}});t=u.w.prototype;t.H=p("A");t.src=p("xc");t.tb=p("Xc");t.title=p("Dd");t.label=p("kd");t.Vc=p("$");t.Pc=p("kb");t.readyState=p("ha");t.mode=p("ga");
t.Qc=function(){this.a.style.fontSize=this.c.isFullScreen()?140*(screen.width/this.c.width())+"%":""};t.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){Y(this);this.ga=2;u.b.prototype.show.call(this)};t.D=function(){Y(this);this.ga=1;u.b.prototype.D.call(this)};
t.disable=function(){2==this.ga&&this.D();this.c.o("timeupdate",u.bind(this,this.update,this.R));this.c.o("ended",u.bind(this,this.reset,this.R));this.reset();this.c.fa("textTrackDisplay").removeChild(this);this.ga=0};function Y(a){0===a.ha&&a.load();0===a.ga&&(a.c.d("timeupdate",u.bind(a,a.update,a.R)),a.c.d("ended",u.bind(a,a.reset,a.R)),("captions"===a.A||"subtitles"===a.A)&&a.c.fa("textTrackDisplay").Y(a))}
t.load=function(){0===this.ha&&(this.ha=1,u.get(this.xc,u.bind(this,this.rd),u.bind(this,this.Fb)))};t.Fb=function(a){this.error=a;this.ha=3;this.k("error")};t.rd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.$.length;c={id:c,index:this.$.length};d=e.split(" --\x3e ");c.startTime=ia(d[0]);c.sa=ia(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.$.push(c)}this.ha=2;this.k("loaded")};
function ia(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
t.update=function(){if(0<this.$.length){var a=this.c.currentTime();if(this.Kb===b||a<this.Kb||this.Oa<=a){var c=this.$,d=this.c.duration(),e=0,g=l,j=[],k,r,n,s;a>=this.Oa||this.Oa===b?s=this.vb!==b?this.vb:0:(g=f,s=this.Bb!==b?this.Bb:c.length-1);for(;;){n=c[s];if(n.sa<=a)e=Math.max(e,n.sa),n.Ia&&(n.Ia=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ia&&(n.Ia=l),!g)break}else g?(j.splice(0,0,n),r===b&&(r=s),k=s):(j.push(n),k===b&&(k=s),r=s),d=Math.min(d,n.sa),e=Math.max(e,n.startTime),n.Ia=
f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.kb=j;this.Oa=d;this.Kb=e;this.vb=k;this.Bb=r;a=this.kb;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.a.innerHTML=c;this.k("cuechange")}}};t.reset=function(){this.Oa=0;this.Kb=this.c.duration();this.Bb=this.vb=0};u.Sb=u.w.extend();u.Sb.prototype.A="captions";u.Zb=u.w.extend();u.Zb.prototype.A="subtitles";u.Tb=u.w.extend();u.Tb.prototype.A="chapters";
u.ac=u.b.extend({j:function(a,c,d){u.b.call(this,a,c,d);if(a.h.tracks&&0<a.h.tracks.length){c=this.c;a=a.h.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,r=e.language,n=e;e=g.ya=g.ya||[];n=n||{};n.kind=j;n.label=k;n.language=r;j=u.Z(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.ac.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};
u.X=u.N.extend({j:function(a,c){var d=this.ca=c.track;c.label=d.label();c.selected=d.tb();u.N.call(this,a,c);this.c.d(d.H()+"trackchange",u.bind(this,this.update))}});u.X.prototype.p=function(){u.N.prototype.p.call(this);X(this.c,this.ca.R,this.ca.H())};u.X.prototype.update=function(){this.selected(2==this.ca.mode())};u.eb=u.X.extend({j:function(a,c){c.track={H:function(){return c.kind},C:a,label:function(){return c.kind+" off"},tb:q(l),mode:q(l)};u.X.call(this,a,c);this.selected(f)}});
u.eb.prototype.p=function(){u.X.prototype.p.call(this);X(this.c,this.ca.R,this.ca.H())};u.eb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.H()==this.ca.H()&&2==e.mode()&&(g=l);this.selected(g)};u.T=u.S.extend({j:function(a,c){u.S.call(this,a,c);1>=this.L.length&&this.D()}});
u.T.prototype.qa=function(){var a=[],c;a.push(new u.eb(this.c,{kind:this.A}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.H()===this.A&&a.push(new u.X(this.c,{track:c}));return a};u.Ba=u.T.extend({j:function(a,c,d){u.T.call(this,a,c,d);this.a.setAttribute("aria-label","Captions Menu")}});u.Ba.prototype.A="captions";u.Ba.prototype.oa="Captions";u.Ba.prototype.className="vjs-captions-button";
u.Ha=u.T.extend({j:function(a,c,d){u.T.call(this,a,c,d);this.a.setAttribute("aria-label","Subtitles Menu")}});u.Ha.prototype.A="subtitles";u.Ha.prototype.oa="Subtitles";u.Ha.prototype.className="vjs-subtitles-button";u.Ca=u.T.extend({j:function(a,c,d){u.T.call(this,a,c,d);this.a.setAttribute("aria-label","Chapters Menu")}});t=u.Ca.prototype;t.A="chapters";t.oa="Chapters";t.className="vjs-chapters-button";
t.qa=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.H()===this.A&&a.push(new u.X(this.c,{track:c}));return a};
t.Ma=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,j=this.L=[];c<d;c++)if(e=a[c],e.H()==this.A&&e.tb()){if(2>e.readyState()){this.Nd=e;e.d("loaded",u.bind(this,this.Ma));return}g=e;break}a=this.ua=new u.la(this.c);a.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),Cd:-1}));if(g){e=g.$;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Za(this.c,{track:g,cue:k}),j.push(k),a.Y(k)}0<this.L.length&&this.show();return a};
u.Za=u.N.extend({j:function(a,c){var d=this.ca=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.sa;u.N.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Za.prototype.p=function(){u.N.prototype.p.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Za.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.sa)};
u.l.B(u.Da.prototype.h.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,r,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(r=d(n,k),r!==b?n[k]=r:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
u.dc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),videojs(c,a)));else{u.lb();break}else u.Ec||u.lb()};u.lb=function(){setTimeout(u.dc,1)};"complete"===document.readyState?u.Ec=f:u.U(window,"load",function(){u.Ec=f});u.lb();u.sd=function(a,c){u.Player.prototype[a]=c};var ja=this;ja.Id=f;function $(a,c){var d=a.split("."),e=ja;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.va);$("videojs.TOUCH_ENABLED",u.$b);$("videojs.cache",u.pa);$("videojs.Component",u.b);u.b.prototype.player=u.b.prototype.C;u.b.prototype.options=u.b.prototype.options;u.b.prototype.init=u.b.prototype.j;u.b.prototype.dispose=u.b.prototype.dispose;u.b.prototype.createEl=u.b.prototype.e;u.b.prototype.contentEl=u.b.prototype.La;u.b.prototype.el=u.b.prototype.u;u.b.prototype.addChild=u.b.prototype.Y;
u.b.prototype.getChild=u.b.prototype.fa;u.b.prototype.getChildById=u.b.prototype.ed;u.b.prototype.children=u.b.prototype.children;u.b.prototype.initChildren=u.b.prototype.nc;u.b.prototype.removeChild=u.b.prototype.removeChild;u.b.prototype.on=u.b.prototype.d;u.b.prototype.off=u.b.prototype.o;u.b.prototype.one=u.b.prototype.U;u.b.prototype.trigger=u.b.prototype.k;u.b.prototype.triggerReady=u.b.prototype.za;u.b.prototype.show=u.b.prototype.show;u.b.prototype.hide=u.b.prototype.D;
u.b.prototype.width=u.b.prototype.width;u.b.prototype.height=u.b.prototype.height;u.b.prototype.dimensions=u.b.prototype.Yc;u.b.prototype.ready=u.b.prototype.I;u.b.prototype.addClass=u.b.prototype.n;u.b.prototype.removeClass=u.b.prototype.t;u.b.prototype.buildCSSClass=u.b.prototype.Q;u.Player.prototype.ended=u.Player.prototype.ended;$("videojs.MediaLoader",u.Nc);$("videojs.TextTrackDisplay",u.ac);$("videojs.ControlBar",u.Da);$("videojs.Button",u.q);$("videojs.PlayToggle",u.Xb);
$("videojs.FullscreenToggle",u.Ea);$("videojs.BigPlayButton",u.Ya);$("videojs.LoadingSpinner",u.Vb);$("videojs.CurrentTimeDisplay",u.$a);$("videojs.DurationDisplay",u.ab);$("videojs.TimeDivider",u.bc);$("videojs.RemainingTimeDisplay",u.gb);$("videojs.Slider",u.O);$("videojs.ProgressControl",u.fb);$("videojs.SeekBar",u.Yb);$("videojs.LoadProgressBar",u.cb);$("videojs.PlayProgressBar",u.Wb);$("videojs.SeekHandle",u.Ga);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);
$("videojs.VolumeLevel",u.cc);$("videojs.VolumeMenuButton",u.ma);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.ea);$("videojs.PosterImage",u.Fa);$("videojs.Menu",u.la);$("videojs.MenuItem",u.N);$("videojs.MenuButton",u.S);u.S.prototype.createItems=u.S.prototype.qa;u.T.prototype.createItems=u.T.prototype.qa;u.Ca.prototype.createItems=u.Ca.prototype.qa;$("videojs.SubtitlesButton",u.Ha);$("videojs.CaptionsButton",u.Ba);$("videojs.ChaptersButton",u.Ca);$("videojs.MediaTechController",u.r);
u.r.prototype.features=u.r.prototype.m;u.r.prototype.m.volumeControl=u.r.prototype.m.Dc;u.r.prototype.m.fullscreenResize=u.r.prototype.m.Od;u.r.prototype.m.progressEvents=u.r.prototype.m.Sd;u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Vd;u.r.prototype.setPoster=u.r.prototype.Lb;$("videojs.Html5",u.g);u.g.Events=u.g.bb;u.g.isSupported=u.g.isSupported;u.g.canPlaySource=u.g.nb;u.g.patchCanPlayType=u.g.rc;u.g.unpatchCanPlayType=u.g.Fd;u.g.prototype.setCurrentTime=u.g.prototype.vd;
u.g.prototype.setVolume=u.g.prototype.Ad;u.g.prototype.setMuted=u.g.prototype.yd;u.g.prototype.setPreload=u.g.prototype.zd;u.g.prototype.setAutoplay=u.g.prototype.ud;u.g.prototype.setLoop=u.g.prototype.xd;u.g.prototype.enterFullScreen=u.g.prototype.hc;u.g.prototype.exitFullScreen=u.g.prototype.bd;$("videojs.Flash",u.f);u.f.isSupported=u.f.isSupported;u.f.canPlaySource=u.f.nb;u.f.onReady=u.f.onReady;$("videojs.TextTrack",u.w);u.w.prototype.label=u.w.prototype.label;u.w.prototype.kind=u.w.prototype.H;
u.w.prototype.mode=u.w.prototype.mode;u.w.prototype.cues=u.w.prototype.Vc;u.w.prototype.activeCues=u.w.prototype.Pc;$("videojs.CaptionsTrack",u.Sb);$("videojs.SubtitlesTrack",u.Zb);$("videojs.ChaptersTrack",u.Tb);$("videojs.autoSetup",u.dc);$("videojs.plugin",u.sd);$("videojs.createTimeRange",u.sb);$("videojs.util",u.ja);u.ja.mergeOptions=u.ja.Eb;})();


//videojs-media-sources.js
(function(window){
  var urlCount = 0,
      NativeMediaSource = window.MediaSource || window.WebKitMediaSource || {},
      nativeUrl = window.URL || {},
      EventEmitter,
      flvCodec = /video\/flv(;\s*codecs=["']vp6,aac["'])?$/,
      objectUrlPrefix = 'blob:vjs-media-source/',

      /**
       * Polyfill for requestAnimationFrame
       * @param callback {function} the function to run at the next frame
       * @see https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
       */
      requestAnimationFrame = function(callback) {
        return (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) {
                  return window.setTimeout(callback, 1000 / 60);
                })(callback);
      };

  EventEmitter = function(){};
  EventEmitter.prototype.init = function(){
    this.listeners = [];
  };
  EventEmitter.prototype.addEventListener = function(type, listener){
    if (!this.listeners[type]){
      this.listeners[type] = [];
    }
    this.listeners[type].unshift(listener);
  };
  EventEmitter.prototype.removeEventListener = function(type, listener){
    var listeners = this.listeners[type],
        i = listeners.length;
    while (i--) {
      if (listeners[i] === listener) {
        return listeners.splice(i, 1);
      }
    }
  };
  EventEmitter.prototype.trigger = function(event){
    var listeners = this.listeners[event.type] || [],
        i = listeners.length;
    while (i--) {
      listeners[i](event);
    }
  };

  // extend the media source APIs

  // Media Source
  videojs.MediaSource = function(){
    var self = this;
    videojs.MediaSource.prototype.init.call(this);

    this.sourceBuffers = [];
    this.readyState = 'closed';
    this.listeners = {
      sourceopen: [function(event){
        // find the swf where we will push media data
        self.swfObj = document.getElementById(event.swfId);
        self.readyState = 'open';
        
        // trigger load events
        if (self.swfObj) {
          self.swfObj.vjs_load();
        }
      }],
      webkitsourceopen: [function(event){
        self.trigger({
          type: 'sourceopen'
        });
      }]
    };
  };
  videojs.MediaSource.prototype = new EventEmitter();

  /**
   * The maximum size in bytes for append operations to the video.js
   * SWF. Calling through to Flash blocks and can be expensive so
   * tuning this parameter may improve playback on slower
   * systems. There are two factors to consider:
   * - Each interaction with the SWF must be quick or you risk dropping
   * video frames. To maintain 60fps for the rest of the page, each append
   * cannot take longer than 16ms. Given the likelihood that the page will
   * be executing more javascript than just playback, you probably want to
   * aim for ~8ms.
   * - Bigger appends significantly increase throughput. The total number of
   * bytes over time delivered to the SWF must exceed the video bitrate or
   * playback will stall.
   *
   * The default is set so that a 4MB/s stream should playback
   * without stuttering.
   */
  videojs.MediaSource.MAX_APPEND_SIZE = Math.ceil((4 * 1024 * 1024) / 60);

  // create a new source buffer to receive a type of media data
  videojs.MediaSource.prototype.addSourceBuffer = function(type){
    var sourceBuffer;

    // if this is an FLV type, we'll push data to flash
    if (flvCodec.test(type)) {
      // Flash source buffers
      sourceBuffer = new videojs.SourceBuffer(this);
    } else if (this.nativeSource) {
      // native source buffers
      sourceBuffer = this.nativeSource.addSourceBuffer.apply(this.nativeSource, arguments);
    } else {
      throw new Error('NotSupportedError (Video.js)');
    }

    this.sourceBuffers.push(sourceBuffer);
    return sourceBuffer;
  };
  videojs.MediaSource.prototype.endOfStream = function(){
    this.swfObj.vjs_endOfStream();
    this.readyState = 'ended';
  };

  // store references to the media sources so they can be connected
  // to a video element (a swf object)
  videojs.mediaSources = {};
  // provide a method for a swf object to notify JS that a media source is now open
  videojs.MediaSource.open = function(msObjectURL, swfId){
    var mediaSource = videojs.mediaSources[msObjectURL];

    if (mediaSource) {
      mediaSource.trigger({
        type: 'sourceopen',
        swfId: swfId
      });
    } else {
      throw new Error('Media Source not found (Video.js)');
    }
  };

  // Source Buffer
  videojs.SourceBuffer = function(source){
    var self = this,

        // byte arrays queued to be appended
        buffer = [],

        // the total number of queued bytes
        bufferSize = 0,
        append = function() {
          var chunk, i, length, payload,
              binary = '';

          if (!buffer.length) {
            // do nothing if the buffer is empty
            return;
          }

          // concatenate appends up to the max append size
          payload = new Uint8Array(Math.min(videojs.MediaSource.MAX_APPEND_SIZE, bufferSize));
          i = payload.byteLength;
          while (i) {
            chunk = buffer[0].subarray(0, i);

            payload.set(chunk, payload.byteLength - i);

            // requeue any bytes that won't make it this round
            if (chunk.byteLength < buffer[0].byteLength) {
              buffer[0] = buffer[0].subarray(i);
            } else {
              buffer.shift();
            }

            i -= chunk.byteLength;
          }
          bufferSize -= payload.byteLength;

          // schedule another append if necessary
          if (bufferSize !== 0) {
            requestAnimationFrame(append);
          } else {
            self.trigger({ type: 'updateend' });
          }

          // base64 encode the bytes
          for (i = 0, length = payload.byteLength; i < length; i++) {
            binary += String.fromCharCode(payload[i]);
          }
          b64str = window.btoa(binary);

          // bypass normal ExternalInterface calls and pass xml directly
          // EI can be slow by default
          self.source.swfObj.CallFunction('<invoke name="vjs_appendBuffer"' +
                                          'returntype="javascript"><arguments><string>' +
                                          b64str +
                                          '</string></arguments></invoke>');
          };

    videojs.SourceBuffer.prototype.init.call(this);
    this.source = source;

    // accept video data and pass to the video (swf) object
    this.appendBuffer = function(uint8Array){
      if (buffer.length === 0) {
        requestAnimationFrame(append);
      }

      this.trigger({ type: 'update' });

      buffer.push(uint8Array);
      bufferSize += uint8Array.byteLength;
    };

    // reset the parser and remove any data queued to be sent to the swf
    this.abort = function() {
      buffer = [];
      bufferSize = 0;
    };
  };
  videojs.SourceBuffer.prototype = new EventEmitter();

  // URL
  videojs.URL = {
    createObjectURL: function(object){
      var url = objectUrlPrefix + urlCount;
      
      urlCount++;

      // setup the mapping back to object
      videojs.mediaSources[url] = object;

      return url;
    }
  };

  // plugin
  videojs.plugin('mediaSource', function(options){
    var player = this;
    
    player.on('loadstart', function(){
      var url = player.currentSrc(),
          trigger = function(event){
            mediaSource.trigger(event);
          },
          mediaSource;

      if (player.techName === 'Html5' && url.indexOf(objectUrlPrefix) === 0) {
        // use the native media source implementation
        mediaSource = videojs.mediaSources[url];

        if (!mediaSource.nativeUrl) {
          // initialize the native source
          mediaSource.nativeSource = new NativeMediaSource();
          mediaSource.nativeSource.addEventListener('sourceopen', trigger, false);
          mediaSource.nativeSource.addEventListener('webkitsourceopen', trigger, false);
          mediaSource.nativeUrl = nativeUrl.createObjectURL(mediaSource.nativeSource);
        }
        player.src(mediaSource.nativeUrl);
      }
    });
  });

})(this);


/*
 * video-js-hls
 *
 *
 * Copyright (c) 2013 Brightcove
 * All rights reserved.
 */

(function(window, videojs, document, undefined) {

videojs.hls = {
  /**
   * Whether the browser has built-in HLS support.
   */
  supportsNativeHls: (function() {
    var
      video = document.createElement('video'),
      xMpegUrl,
      vndMpeg;

    // native HLS is definitely not supported if HTML5 video isn't
    if (!videojs.Html5.isSupported()) {
      return false;
    }

    xMpegUrl = video.canPlayType('application/x-mpegURL');
    vndMpeg = video.canPlayType('application/vnd.apple.mpegURL');
    return (/probably|maybe/).test(xMpegUrl) ||
      (/probably|maybe/).test(vndMpeg);
  })()
};

var

  settings,

  // the desired length of video to maintain in the buffer, in seconds
  goalBufferLength = 5,

  // a fudge factor to apply to advertised playlist bitrates to account for
  // temporary flucations in client bandwidth
  bandwidthVariance = 1.1,

  /**
   * A comparator function to sort two playlist object by bandwidth.
   * @param left {object} a media playlist object
   * @param right {object} a media playlist object
   * @return {number} Greater than zero if the bandwidth attribute of
   * left is greater than the corresponding attribute of right. Less
   * than zero if the bandwidth of right is greater than left and
   * exactly zero if the two are equal.
   */
  playlistBandwidth = function(left, right) {
    var leftBandwidth, rightBandwidth;
    if (left.attributes && left.attributes.BANDWIDTH) {
      leftBandwidth = left.attributes.BANDWIDTH;
    }
    leftBandwidth = leftBandwidth || window.Number.MAX_VALUE;
    if (right.attributes && right.attributes.BANDWIDTH) {
      rightBandwidth = right.attributes.BANDWIDTH;
    }
    rightBandwidth = rightBandwidth || window.Number.MAX_VALUE;

    return leftBandwidth - rightBandwidth;
  },

  /**
   * A comparator function to sort two playlist object by resolution (width).
   * @param left {object} a media playlist object
   * @param right {object} a media playlist object
   * @return {number} Greater than zero if the resolution.width attribute of
   * left is greater than the corresponding attribute of right. Less
   * than zero if the resolution.width of right is greater than left and
   * exactly zero if the two are equal.
   */
  playlistResolution = function(left, right) {
    var leftWidth, rightWidth;

    if (left.attributes && left.attributes.RESOLUTION && left.attributes.RESOLUTION.width) {
      leftWidth = left.attributes.RESOLUTION.width;
    }

    leftWidth = leftWidth || window.Number.MAX_VALUE;

    if (right.attributes && right.attributes.RESOLUTION && right.attributes.RESOLUTION.width) {
      rightWidth = right.attributes.RESOLUTION.width;
    }

    rightWidth = rightWidth || window.Number.MAX_VALUE;

    // NOTE - Fallback to bandwidth sort as appropriate in cases where multiple renditions
    // have the same media dimensions/ resolution
    if (leftWidth === rightWidth && left.attributes.BANDWIDTH && right.attributes.BANDWIDTH) {
      return left.attributes.BANDWIDTH - right.attributes.BANDWIDTH;
    } else {
      return leftWidth - rightWidth;
    }
  },

  /**
   * Creates and sends an XMLHttpRequest.
   * @param options {string | object} if this argument is a string, it
   * is intrepreted as a URL and a simple GET request is
   * inititated. If it is an object, it should contain a `url`
   * property that indicates the URL to request and optionally a
   * `method` which is the type of HTTP request to send.
   * @return {object} the XMLHttpRequest that was initiated.
   */
  xhr = function(url, callback) {
    var
      options = {
        method: 'GET'
      },
      request;

    if (typeof callback !== 'function') {
      callback = function() {};
    }

    if (typeof url === 'object') {
      options = videojs.util.mergeOptions(options, url);
      url = options.url;
    }

    request = new window.XMLHttpRequest();
    request.open(options.method, url);

    if (options.responseType) {
      request.responseType = options.responseType;
    }
    if (settings.withCredentials) {
      request.withCredentials = true;
    }

    request.onreadystatechange = function() {
      // wait until the request completes
      if (this.readyState !== 4) {
        return;
      }

      // request error
      if (this.status >= 400 || this.status === 0) {
        return callback.call(this, true, url);
      }

      return callback.call(this, false, url);
    };
    request.send(null);
    return request;
  },

  /**
   * TODO - Document this great feature.
   *
   * @param playlist
   * @param time
   * @returns int
   */
  getMediaIndexByTime = function(playlist, time) {
    var index, counter, timeRanges, currentSegmentRange;

    timeRanges = [];
    for (index = 0; index < playlist.segments.length; index++) {
      currentSegmentRange = {};
      currentSegmentRange.start = (index === 0) ? 0 : timeRanges[index - 1].end;
      currentSegmentRange.end = currentSegmentRange.start + playlist.segments[index].duration;
      timeRanges.push(currentSegmentRange);
    }

    for (counter = 0; counter < timeRanges.length; counter++) {
      if (time >= timeRanges[counter].start && time < timeRanges[counter].end) {
        return counter;
      }
    }

    return -1;

  },

  /**
   * Determine the media index in one playlist that corresponds to a
   * specified media index in another. This function can be used to
   * calculate a new segment position when a playlist is reloaded or a
   * variant playlist is becoming active.
   * @param mediaIndex {number} the index into the original playlist
   * to translate
   * @param original {object} the playlist to translate the media
   * index from
   * @param update {object} the playlist to translate the media index
   * to
   * @param {number} the corresponding media index in the updated
   * playlist
   */
  translateMediaIndex = function(mediaIndex, original, update) {
    var
      i = update.segments.length,
      originalSegment;

    // no segments have been loaded from the original playlist
    if (mediaIndex === 0) {
      return 0;
    }

    // try to sync based on URI
    originalSegment = original.segments[mediaIndex - 1];
    while (i--) {
      if (originalSegment.uri === update.segments[i].uri) {
        return i + 1;
      }
    }

    // sync on media sequence
    return (original.mediaSequence + mediaIndex) - update.mediaSequence;
  },

  /**
   * Calculate the total duration for a playlist based on segment metadata.
   * @param playlist {object} a media playlist object
   * @return {number} the currently known duration, in seconds
   */
  totalDuration = function(playlist) {
    var
      duration = 0,
      segment,
      i = (playlist.segments || []).length;

    // if present, use the duration specified in the playlist
    if (playlist.totalDuration) {
      return playlist.totalDuration;
    }

    // duration should be Infinity for live playlists
    if (!playlist.endList) {
      return window.Infinity;
    }

    while (i--) {
      segment = playlist.segments[i];
      duration += segment.duration || playlist.targetDuration || 0;
    }
    return duration;
  },

  /**
   * Constructs a new URI by interpreting a path relative to another
   * URI.
   * @param basePath {string} a relative or absolute URI
   * @param path {string} a path part to combine with the base
   * @return {string} a URI that is equivalent to composing `base`
   * with `path`
   * @see http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
   */
  resolveUrl = function(basePath, path) {
    // use the base element to get the browser to handle URI resolution
    var
      oldBase = document.querySelector('base'),
      docHead = document.querySelector('head'),
      a = document.createElement('a'),
      base = oldBase,
      oldHref,
      result;

    // prep the document
    if (oldBase) {
      oldHref = oldBase.href;
    } else {
      base = docHead.appendChild(document.createElement('base'));
    }

    base.href = basePath;
    a.href = path;
    result = a.href;

    // clean up
    if (oldBase) {
      oldBase.href = oldHref;
    } else {
      docHead.removeChild(base);
    }
    return result;
  },

  /**
   * Initializes the HLS plugin.
   * @param options {mixed} the URL to an HLS playlist
   */
  init = function(options) {
    var
      mediaSource = new videojs.MediaSource(),
      segmentParser = new videojs.hls.SegmentParser(),
      player = this,
      srcUrl,

      playlistXhr,
      segmentXhr,
      loadedPlaylist,
      fillBuffer,
      updateCurrentPlaylist,
      updateDuration;

    // if the video element supports HLS natively, do nothing
    if (videojs.hls.supportsNativeHls) {
      return;
    }

    settings = videojs.util.mergeOptions({}, options);

    srcUrl = (function() {
      var
        extname,
        i = 0,
        j = 0,
        src = player.el().querySelector('.vjs-tech').src,
        sources = player.options().sources,
        techName,
        length = sources.length;

      // use the URL specified in options if one was provided
      if (typeof options === 'string') {
        return options;
      } else if (options && options.url) {
        return options.url;
      }

      // src attributes take precedence over source children
      if (src) {

        // assume files with the m3u8 extension are HLS
        extname = (/[^#?]*(?:\/[^#?]*\.([^#?]*))/).exec(src);
        if (extname && extname[1] === 'm3u8') {
          return src;
        }
        return;
      }

      // find the first playable source
      for (; i < length; i++) {

        // ignore sources without a specified type
        if (!sources[i].type) {
          continue;
        }

        // do nothing if the source is handled by one of the standard techs
        for (j in player.options().techOrder) {
          techName = player.options().techOrder[j];
          techName = techName[0].toUpperCase() + techName.substring(1);
          if (videojs[techName].canPlaySource({ type: sources[i].type })) {
            return;
          }
        }

        // use the plugin if the MIME type specifies HLS
        if ((/application\/x-mpegURL/).test(sources[i].type) ||
            (/application\/vnd\.apple\.mpegURL/).test(sources[i].type)) {
          return sources[i].src;
        }
      }
    })();

    if (!srcUrl) {
      // do nothing until the plugin is initialized with a valid URL
      videojs.log('hls: no valid playlist URL specified');
      return;
    }

    // expose the HLS plugin state
    player.hls.readyState = function() {
      if (!player.hls.media) {
        return 0; // HAVE_NOTHING
      }
      return 1;   // HAVE_METADATA
    };

    player.on('seeking', function() {
      var currentTime = player.currentTime();
      player.hls.mediaIndex = getMediaIndexByTime(player.hls.media, currentTime);

      // abort any segments still being decoded
      player.hls.sourceBuffer.abort();

      // cancel outstanding requests and buffer appends
      if (segmentXhr) {
        segmentXhr.abort();
      }

      // begin filling the buffer at the new position
      fillBuffer(currentTime * 1000);
    });

    /**
     * Update the player duration
     */
    updateDuration = function(playlist) {
      var tech;
      // update the duration
      player.duration(totalDuration(playlist));
      // tell the flash tech of the new duration
      tech = player.el().querySelector('.vjs-tech');
      if(tech.vjs_setProperty) {
        tech.vjs_setProperty('duration', player.duration());
      }
      // manually fire the duration change
      player.trigger('durationchange');
    };

    /**
     * Determine whether the current media playlist should be changed
     * and trigger a switch if necessary. If a sufficiently fresh
     * version of the target playlist is available, the switch will take
     * effect immediately. Otherwise, the target playlist will be
     * refreshed.
     */
    updateCurrentPlaylist = function() {
      var playlist, mediaSequence;
      playlist = player.hls.selectPlaylist();
      mediaSequence = player.hls.mediaIndex + (player.hls.media.mediaSequence || 0);
      if (!playlist.segments ||
          mediaSequence < (playlist.mediaSequence || 0) ||
          mediaSequence > (playlist.mediaSequence || 0) + playlist.segments.length) {

        if (playlistXhr) {
          playlistXhr.abort();
        }
        playlistXhr = xhr(resolveUrl(srcUrl, playlist.uri), loadedPlaylist);
      } else {
        player.hls.mediaIndex =
          translateMediaIndex(player.hls.mediaIndex,
                              player.hls.media,
                              playlist);
        player.hls.media = playlist;

        updateDuration(player.hls.media);
      }
    };

    /**
     * Chooses the appropriate media playlist based on the current
     * bandwidth estimate and the player size.
     * @return the highest bitrate playlist less than the currently detected
     * bandwidth, accounting for some amount of bandwidth variance
     */
    player.hls.selectPlaylist = function () {
      var
        effectiveBitrate,
        sortedPlaylists = player.hls.master.playlists.slice(),
        bandwidthPlaylists = [],
        i = sortedPlaylists.length,
        variant,
        bandwidthBestVariant,
        resolutionBestVariant;

      sortedPlaylists.sort(playlistBandwidth);

      // filter out any variant that has greater effective bitrate
      // than the current estimated bandwidth
      while (i--) {
        variant = sortedPlaylists[i];

        // ignore playlists without bandwidth information
        if (!variant.attributes || !variant.attributes.BANDWIDTH) {
          continue;
        }

        effectiveBitrate = variant.attributes.BANDWIDTH * bandwidthVariance;

        if (effectiveBitrate < player.hls.bandwidth) {
          bandwidthPlaylists.push(variant);

          // since the playlists are sorted in ascending order by
          // bandwidth, the first viable variant is the best
          if (!bandwidthBestVariant) {
            bandwidthBestVariant = variant;
          }
        }
      }

      i = bandwidthPlaylists.length;

      // sort variants by resolution
      bandwidthPlaylists.sort(playlistResolution);

      // iterate through the bandwidth-filtered playlists and find
      // best rendition by player dimension
      while (i--) {
        variant = bandwidthPlaylists[i];

        // ignore playlists without resolution information
        if (!variant.attributes ||
            !variant.attributes.RESOLUTION ||
            !variant.attributes.RESOLUTION.width ||
            !variant.attributes.RESOLUTION.height) {
          continue;
        }

        // since the playlists are sorted, the first variant that has
        // dimensions less than or equal to the player size is the
        // best
        if (variant.attributes.RESOLUTION.width <= player.width() &&
            variant.attributes.RESOLUTION.height <= player.height()) {
          resolutionBestVariant = variant;
          break;
        }
      }

      // fallback chain of variants
      return resolutionBestVariant || bandwidthBestVariant || sortedPlaylists[0];
    };

    /**
     * Callback that is invoked when a media playlist finishes
     * downloading. Triggers `loadedmanifest` once for each playlist
     * that is downloaded and `loadedmetadata` after at least one
     * media playlist has been parsed.
     *
     * @param error {*} truthy if the request was not successful
     * @param url {string} a URL to the M3U8 file to process
     */
    loadedPlaylist = function(error, url) {
      var i, parser, playlist, playlistUri, refreshDelay;

      // clear the current playlist XHR
      playlistXhr = null;

      if (error) {
        player.hls.error = {
          status: this.status,
          message: 'HLS playlist request error at URL: ' + url,
          code: (this.status >= 500) ? 4 : 2
        };
        return player.trigger('error');
      }

      parser = new videojs.m3u8.Parser();
      parser.push(this.responseText);

      // merge this playlist into the master
      i = player.hls.master.playlists.length;
      refreshDelay = (parser.manifest.targetDuration || 10) * 1000;
      while (i--) {
        playlist = player.hls.master.playlists[i];
        playlistUri = resolveUrl(srcUrl, playlist.uri);
        if (playlistUri === url) {
          // if the playlist is unchanged since the last reload,
          // try again after half the target duration
          // http://tools.ietf.org/html/draft-pantos-http-live-streaming-12#section-6.3.4
          if (playlist.segments &&
              playlist.segments.length === parser.manifest.segments.length) {
            refreshDelay /= 2;
          }

          player.hls.master.playlists[i] =
            videojs.util.mergeOptions(playlist, parser.manifest);

          if (playlist !== player.hls.media) {
            continue;
          }

          // determine the new mediaIndex if we're updating the
          // current media playlist
          player.hls.mediaIndex =
            translateMediaIndex(player.hls.mediaIndex,
                                playlist,
                                parser.manifest);
          player.hls.media = parser.manifest;
        }
      }

      // check the playlist for updates if EXT-X-ENDLIST isn't present
      if (!parser.manifest.endList) {
        window.setTimeout(function() {
          if (!playlistXhr &&
              resolveUrl(srcUrl, player.hls.media.uri) === url) {
            playlistXhr = xhr(url, loadedPlaylist);
          }
        }, refreshDelay);
      }

      // always start playback with the default rendition
      if (!player.hls.media) {
        player.hls.media = player.hls.master.playlists[0];

        // update the duration
        updateDuration(parser.manifest);

        // periodicaly check if the buffer needs to be refilled
        player.on('timeupdate', fillBuffer);

        player.trigger('loadedmanifest');
        player.trigger('loadedmetadata');
        fillBuffer();
        return;
      }

      // select a playlist and download its metadata if necessary
      updateCurrentPlaylist();

      player.trigger('loadedmanifest');
    };

    /**
     * Determines whether there is enough video data currently in the buffer
     * and downloads a new segment if the buffered time is less than the goal.
     * @param offset (optional) {number} the offset into the downloaded segment
     * to seek to, in milliseconds
     */
    fillBuffer = function(offset) {
      var
        buffered = player.buffered(),
        bufferedTime = 0,
        segment,
        segmentUri,
        startTime;

      // if there is a request already in flight, do nothing
      if (segmentXhr) {
        return;
      }

      // if no segments are available, do nothing
      if (!player.hls.media.segments) {
        return;
      }

      // if the video has finished downloading, stop trying to buffer
      segment = player.hls.media.segments[player.hls.mediaIndex];
      if (!segment) {
        return;
      }

      if (buffered) {
        // assuming a single, contiguous buffer region
        bufferedTime = player.buffered().end(0) - player.currentTime();
      }

      // if there is plenty of content in the buffer, relax for awhile
      if (bufferedTime >= goalBufferLength) {
        return;
      }

      // resolve the segment URL relative to the playlist
      if (player.hls.media.uri === srcUrl) {
        segmentUri = resolveUrl(srcUrl, segment.uri);
      } else {
        segmentUri = resolveUrl(resolveUrl(srcUrl, player.hls.media.uri || ''),
                                segment.uri);
      }

      startTime = +new Date();

      // request the next segment
      segmentXhr = xhr({
        url: segmentUri,
        responseType: 'arraybuffer'
      }, function(error, url) {
        // the segment request is no longer outstanding
        segmentXhr = null;

        if (error) {
          player.hls.error = {
            status: this.status,
            message: 'HLS segment request error at URL: ' + url,
            code: (this.status >= 500) ? 4 : 2
          };

          // try moving on to the next segment
          player.hls.mediaIndex++;
          return;
        }

        // stop processing if the request was aborted
        if (!this.response) {
          return;
        }

        // calculate the download bandwidth
        player.hls.segmentXhrTime = (+new Date()) - startTime;
        player.hls.bandwidth = (this.response.byteLength / player.hls.segmentXhrTime) * 8 * 1000;

        // transmux the segment data from MP2T to FLV
        segmentParser.parseSegmentBinaryData(new Uint8Array(this.response));
        segmentParser.flushTags();

        // if we're refilling the buffer after a seek, scan through the muxed
        // FLV tags until we find the one that is closest to the desired
        // playback time
        if (offset !== undefined && typeof offset === "number") {
          while (segmentParser.getTags()[0].pts < offset) {
            segmentParser.getNextTag();
          }
        }

        while (segmentParser.tagsAvailable()) {
          // queue up the bytes to be appended to the SourceBuffer
          // the queue gives control back to the browser between tags
          // so that large segments don't cause a "hiccup" in playback

          player.hls.sourceBuffer.appendBuffer(segmentParser.getNextTag().bytes,
                                               player);

        }

        player.hls.mediaIndex++;

        if (player.hls.mediaIndex === player.hls.media.segments.length) {
          mediaSource.endOfStream();
        }

        // figure out what stream the next segment should be downloaded from
        // with the updated bandwidth information
        updateCurrentPlaylist();
      });
    };

    // load the MediaSource into the player
    mediaSource.addEventListener('sourceopen', function() {
      // construct the video data buffer and set the appropriate MIME type
      var sourceBuffer = mediaSource.addSourceBuffer('video/flv; codecs="vp6,aac"');
      player.hls.sourceBuffer = sourceBuffer;
      sourceBuffer.appendBuffer(segmentParser.getFlvHeader());

      player.hls.mediaIndex = 0;
      xhr(srcUrl, function(error, url) {
        var uri, parser = new videojs.m3u8.Parser();
        parser.push(this.responseText);

        // master playlists
        if (parser.manifest.playlists) {
          player.hls.master = parser.manifest;
          playlistXhr = xhr(resolveUrl(url, parser.manifest.playlists[0].uri), loadedPlaylist);
          return player.trigger('loadedmanifest');
        } else {
          // infer a master playlist if a media playlist is loaded directly
          uri = resolveUrl(window.location.href, url);
          player.hls.master = {
            playlists: [{
              uri: uri
            }]
          };
          loadedPlaylist.call(this, error, uri);
        }
      });
    });
    player.src([{
      src: videojs.URL.createObjectURL(mediaSource),
      type: "video/flv"
    }]);

    if (player.options().autoplay) {
      player.play();
    }
  };

videojs.plugin('hls', function() {
  if (typeof Uint8Array === 'undefined') {
    return;
  }

  var initialize = function() {
    return function() {
      this.hls = initialize();
      init.apply(this, arguments);
    };
  };
  initialize().apply(this, arguments);
});

})(window, window.videojs, document);



//flv tag
(function(window) {

window.videojs = window.videojs || {};
window.videojs.hls = window.videojs.hls || {};

var hls = window.videojs.hls;

// (type:uint, extraData:Boolean = false) extends ByteArray
hls.FlvTag = function(type, extraData) {
  var
    // Counter if this is a metadata tag, nal start marker if this is a video
    // tag. unused if this is an audio tag
    adHoc = 0, // :uint

    // checks whether the FLV tag has enough capacity to accept the proposed
    // write and re-allocates the internal buffers if necessary
    prepareWrite = function(flv, count) {
      var
        bytes,
        minLength = flv.position + count;
      if (minLength < flv.bytes.byteLength) {
        // there's enough capacity so do nothing
        return;
      }

      // allocate a new buffer and copy over the data that will not be modified
      bytes = new Uint8Array(minLength * 2);
      bytes.set(flv.bytes.subarray(0, flv.position), 0);
      flv.bytes = bytes;
      flv.view = new DataView(flv.bytes.buffer);
    },

    // commonly used metadata properties
    widthBytes = hls.FlvTag.widthBytes || new Uint8Array('width'.length),
    heightBytes = hls.FlvTag.heightBytes || new Uint8Array('height'.length),
    videocodecidBytes = hls.FlvTag.videocodecidBytes || new Uint8Array('videocodecid'.length),
    i;

  if (!hls.FlvTag.widthBytes) {
    // calculating the bytes of common metadata names ahead of time makes the
    // corresponding writes faster because we don't have to loop over the
    // characters
    // re-test with test/perf.html if you're planning on changing this
    for (i in 'width') {
      widthBytes[i] = 'width'.charCodeAt(i);
    }
    for (i in 'height') {
      heightBytes[i] = 'height'.charCodeAt(i);
    }
    for (i in 'videocodecid') {
      videocodecidBytes[i] = 'videocodecid'.charCodeAt(i);
    }

    hls.FlvTag.widthBytes = widthBytes;
    hls.FlvTag.heightBytes = heightBytes;
    hls.FlvTag.videocodecidBytes = videocodecidBytes;
  }

  this.keyFrame = false; // :Boolean

  switch(type) {
  case hls.FlvTag.VIDEO_TAG:
    this.length = 16;
    break;
  case hls.FlvTag.AUDIO_TAG:
    this.length = 13;
    this.keyFrame = true;
    break;
  case hls.FlvTag.METADATA_TAG:
    this.length = 29;
    this.keyFrame = true;
    break;
  default:
    throw("Error Unknown TagType");
  }

  this.bytes = new Uint8Array(16384);
  this.view = new DataView(this.bytes.buffer);
  this.bytes[0] = type;
  this.position = this.length;
  this.keyFrame = extraData; // Defaults to false

  // presentation timestamp
  this.pts = 0;
  // decoder timestamp
  this.dts = 0;

  // ByteArray#writeBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0)
  this.writeBytes = function(bytes, offset, length) {
    var
      start = offset || 0,
      end;
    length = length || bytes.byteLength;
    end = start + length;

    prepareWrite(this, length);
    this.bytes.set(bytes.subarray(start, end), this.position);

    this.position += length;
    this.length = Math.max(this.length, this.position);
  };

  // ByteArray#writeByte(value:int):void
  this.writeByte = function(byte) {
    prepareWrite(this, 1);
    this.bytes[this.position] = byte;
    this.position++;
    this.length = Math.max(this.length, this.position);
  };

  // ByteArray#writeShort(value:int):void
  this.writeShort = function(short) {
    prepareWrite(this, 2);
    this.view.setUint16(this.position, short);
    this.position += 2;
    this.length = Math.max(this.length, this.position);
  };

  // Negative index into array
  // (pos:uint):int
  this.negIndex = function(pos) {
    return this.bytes[this.length - pos];
  };

  // The functions below ONLY work when this[0] == VIDEO_TAG.
  // We are not going to check for that because we dont want the overhead
  // (nal:ByteArray = null):int
  this.nalUnitSize = function() {
    if (adHoc === 0) {
      return 0;
    }

    return this.length - (adHoc + 4);
  };

  this.startNalUnit = function() {
    // remember position and add 4 bytes
    if (adHoc > 0) {
      throw new Error("Attempted to create new NAL wihout closing the old one");
    }

    // reserve 4 bytes for nal unit size
    adHoc = this.length;
    this.length += 4;
    this.position = this.length;
  };

  // (nal:ByteArray = null):void
  this.endNalUnit = function(nalContainer) {
    var
      nalStart, // :uint
      nalLength; // :uint

    // Rewind to the marker and write the size
    if (this.length === adHoc + 4) {
      // we started a nal unit, but didnt write one, so roll back the 4 byte size value
      this.length -= 4;
    } else if (adHoc > 0) {
      nalStart = adHoc + 4;
      nalLength = this.length - nalStart;

      this.position = adHoc;
      this.view.setUint32(this.position, nalLength);
      this.position = this.length;

      if (nalContainer) {
        // Add the tag to the NAL unit
        nalContainer.push(this.bytes.subarray(nalStart, nalStart + nalLength));
      }
    }

    adHoc = 0;
  };

  /**
   * Write out a 64-bit floating point valued metadata property. This method is
   * called frequently during a typical parse and needs to be fast.
   */
  // (key:String, val:Number):void
  this.writeMetaDataDouble = function(key, val) {
    var i;
    prepareWrite(this, 2 + key.length + 9);

    // write size of property name
    this.view.setUint16(this.position, key.length);
    this.position += 2;

    // this next part looks terrible but it improves parser throughput by
    // 10kB/s in my testing

    // write property name
    if (key === 'width') {
      this.bytes.set(widthBytes, this.position);
      this.position += 5;
    } else if (key === 'height') {
      this.bytes.set(heightBytes, this.position);
      this.position += 6;
    } else if (key === 'videocodecid') {
      this.bytes.set(videocodecidBytes, this.position);
      this.position += 12;
    } else {
      for (i in key) {
        this.bytes[this.position] = key.charCodeAt(i);
        this.position++;
      }
    }

    // skip null byte
    this.position++;

    // write property value
    this.view.setFloat64(this.position, val);
    this.position += 8;

    // update flv tag length
    this.length = Math.max(this.length, this.position);
    ++adHoc;
  };

  // (key:String, val:Boolean):void
  this.writeMetaDataBoolean = function(key, val) {
    var i;
    prepareWrite(this, 2);
    this.view.setUint16(this.position, key.length);
    this.position += 2;
    for (i in key) {
      console.assert(key.charCodeAt(i) < 255);
      prepareWrite(this, 1);
      this.bytes[this.position] = key.charCodeAt(i);
      this.position++;
    }
    prepareWrite(this, 2);
    this.view.setUint8(this.position, 0x01);
    this.position++;
    this.view.setUint8(this.position, val ? 0x01 : 0x00);
    this.position++;
    this.length = Math.max(this.length, this.position);
    ++adHoc;
  };

  // ():ByteArray
  this.finalize = function() {
    var
      dtsDelta, // :int
      len; // :int

    switch(this.bytes[0]) {
      // Video Data
    case hls.FlvTag.VIDEO_TAG:
      this.bytes[11] = ((this.keyFrame || extraData) ? 0x10 : 0x20 ) | 0x07; // We only support AVC, 1 = key frame (for AVC, a seekable frame), 2 = inter frame (for AVC, a non-seekable frame)
      this.bytes[12] = extraData ?  0x00 : 0x01;

      dtsDelta = this.pts - this.dts;
      this.bytes[13] = (dtsDelta & 0x00FF0000) >>> 16;
      this.bytes[14] = (dtsDelta & 0x0000FF00) >>>  8;
      this.bytes[15] = (dtsDelta & 0x000000FF) >>>  0;
      break;

    case hls.FlvTag.AUDIO_TAG:
      this.bytes[11] = 0xAF; // 44 kHz, 16-bit stereo
      this.bytes[12] = extraData ? 0x00 : 0x01;
      break;

    case hls.FlvTag.METADATA_TAG:
      this.position = 11;
      this.view.setUint8(this.position, 0x02); // String type
      this.position++;
      this.view.setUint16(this.position, 0x0A); // 10 Bytes
      this.position += 2;
      // set "onMetaData"
      this.bytes.set([0x6f, 0x6e, 0x4d, 0x65,
                      0x74, 0x61, 0x44, 0x61,
                      0x74, 0x61], this.position);
      this.position += 10;
      this.bytes[this.position] = 0x08; // Array type
      this.position++;
      this.view.setUint32(this.position, adHoc);
      this.position = this.length;
      this.bytes.set([0, 0, 9], this.position);
      this.position += 3; // End Data Tag
      this.length = this.position;
      break;
    }

    len = this.length - 11;

    // write the DataSize field
    this.bytes[ 1] = (len & 0x00FF0000) >>> 16;
    this.bytes[ 2] = (len & 0x0000FF00) >>>  8;
    this.bytes[ 3] = (len & 0x000000FF) >>>  0;
    // write the Timestamp
    this.bytes[ 4] = (this.pts & 0x00FF0000) >>> 16;
    this.bytes[ 5] = (this.pts & 0x0000FF00) >>>  8;
    this.bytes[ 6] = (this.pts & 0x000000FF) >>>  0;
    this.bytes[ 7] = (this.pts & 0xFF000000) >>> 24;
    // write the StreamID
    this.bytes[ 8] = 0;
    this.bytes[ 9] = 0;
    this.bytes[10] = 0;

    this.view.setUint32(this.length, this.length);
    this.length += 4;
    this.position += 4;

    // trim down the byte buffer to what is actually being used
    this.bytes = this.bytes.subarray(0, this.length);
    this.frameTime = hls.FlvTag.frameTime(this.bytes);
    console.assert(this.bytes.byteLength === this.length);
    return this;
  };
};

hls.FlvTag.AUDIO_TAG = 0x08; // == 8, :uint
hls.FlvTag.VIDEO_TAG = 0x09; // == 9, :uint
hls.FlvTag.METADATA_TAG = 0x12; // == 18, :uint

// (tag:ByteArray):Boolean {
hls.FlvTag.isAudioFrame = function(tag) {
  return hls.FlvTag.AUDIO_TAG === tag[0];
};

// (tag:ByteArray):Boolean {
hls.FlvTag.isVideoFrame = function(tag) {
  return hls.FlvTag.VIDEO_TAG === tag[0];
};

// (tag:ByteArray):Boolean {
hls.FlvTag.isMetaData = function(tag) {
  return hls.FlvTag.METADATA_TAG === tag[0];
};

// (tag:ByteArray):Boolean {
hls.FlvTag.isKeyFrame = function(tag) {
  if (hls.FlvTag.isVideoFrame(tag)) {
    return tag[11] === 0x17;
  }

  if (hls.FlvTag.isAudioFrame(tag)) {
    return true;
  }

  if (hls.FlvTag.isMetaData(tag)) {
    return true;
  }

  return false;
};

// (tag:ByteArray):uint {
hls.FlvTag.frameTime = function(tag) {
  var pts = tag[ 4] << 16; // :uint
  pts |= tag[ 5] <<  8;
  pts |= tag[ 6] <<  0;
  pts |= tag[ 7] << 24;
  return pts;
};

})(this);


(function(window) {

/**
 * Parser for exponential Golomb codes, a variable-bitwidth number encoding
 * scheme used by h264.
 */
window.videojs.hls.ExpGolomb = function(workingData) {
  var
    // the number of bytes left to examine in workingData
    workingBytesAvailable = workingData.byteLength,

    // the current word being examined
    workingWord = 0, // :uint

    // the number of bits left to examine in the current word
    workingBitsAvailable = 0; // :uint;

  // ():uint
  this.length = function() {
    return (8 * workingBytesAvailable);
  };

  // ():uint
  this.bitsAvailable = function() {
    return (8 * workingBytesAvailable) + workingBitsAvailable;
  };

  // ():void
  this.loadWord = function() {
    var
      position = workingData.byteLength - workingBytesAvailable,
      workingBytes = new Uint8Array(4),
      availableBytes = Math.min(4, workingBytesAvailable);

    if (availableBytes === 0) {
      throw new Error('no bytes available');
    }

    workingBytes.set(workingData.subarray(position,
                                          position + availableBytes));
    workingWord = new DataView(workingBytes.buffer).getUint32(0);

    // track the amount of workingData that has been processed
    workingBitsAvailable = availableBytes * 8;
    workingBytesAvailable -= availableBytes;
  };

  // (count:int):void
  this.skipBits = function(count) {
    var skipBytes; // :int
    if (workingBitsAvailable > count) {
      workingWord          <<= count;
      workingBitsAvailable -= count;
    } else {
      count -= workingBitsAvailable;
      skipBytes = count / 8;

      count -= (skipBytes * 8);
      workingBytesAvailable -= skipBytes;

      this.loadWord();

      workingWord <<= count;
      workingBitsAvailable -= count;
    }
  };

  // (size:int):uint
  this.readBits = function(size) {
    var
      bits = Math.min(workingBitsAvailable, size), // :uint
      valu = workingWord >>> (32 - bits); // :uint

    console.assert(size < 32, 'Cannot read more than 32 bits at a time');

    workingBitsAvailable -= bits;
    if (workingBitsAvailable > 0) {
      workingWord <<= bits;
    } else if (workingBytesAvailable > 0) {
      this.loadWord();
    }

    bits = size - bits;
    if (bits > 0) {
      return valu << bits | this.readBits(bits);
    } else {
      return valu;
    }
  };

  // ():uint
  this.skipLeadingZeros = function() {
    var leadingZeroCount; // :uint
    for (leadingZeroCount = 0 ; leadingZeroCount < workingBitsAvailable ; ++leadingZeroCount) {
      if (0 !== (workingWord & (0x80000000 >>> leadingZeroCount))) {
        // the first bit of working word is 1
        workingWord <<= leadingZeroCount;
        workingBitsAvailable -= leadingZeroCount;
        return leadingZeroCount;
      }
    }

    // we exhausted workingWord and still have not found a 1
    this.loadWord();
    return leadingZeroCount + this.skipLeadingZeros();
  };

  // ():void
  this.skipUnsignedExpGolomb = function() {
    this.skipBits(1 + this.skipLeadingZeros());
  };

  // ():void
  this.skipExpGolomb = function() {
    this.skipBits(1 + this.skipLeadingZeros());
  };

  // ():uint
  this.readUnsignedExpGolomb = function() {
    var clz = this.skipLeadingZeros(); // :uint
    return this.readBits(clz + 1) - 1;
  };

  // ():int
  this.readExpGolomb = function() {
    var valu = this.readUnsignedExpGolomb(); // :int
    if (0x01 & valu) {
      // the number is odd if the low order bit is set
      return (1 + valu) >>> 1; // add 1 to make it even, and divide by 2
    } else {
      return -1 * (valu >>> 1); // divide by two then make it negative
    }
  };

  // Some convenience functions
  // :Boolean
  this.readBoolean = function() {
    return 1 === this.readBits(1);
  };

  // ():int
  this.readUnsignedByte = function() {
    return this.readBits(8);
  };

  this.loadWord();

};
})(this);


/*
 * h264-stream
 *
 *
 * Copyright (c) 2013 Brightcove
 * All rights reserved.
 */

(function(window) {
  var
    ExpGolomb = window.videojs.hls.ExpGolomb,
    FlvTag = window.videojs.hls.FlvTag,

    H264ExtraData = function() {
      this.sps = []; // :Array
      this.pps = []; // :Array

      this.extraDataExists = function() { // :Boolean
        return this.sps.length > 0;
      };

      // (sizeOfScalingList:int, expGolomb:ExpGolomb):void
      this.scaling_list = function(sizeOfScalingList, expGolomb) {
        var
          lastScale = 8, // :int
          nextScale = 8, // :int
          j,
          delta_scale; // :int

        for (j = 0; j < sizeOfScalingList; ++j) {
          if (0 !== nextScale) {
            delta_scale = expGolomb.readExpGolomb();
            nextScale = (lastScale + delta_scale + 256) % 256;
            //useDefaultScalingMatrixFlag = ( j = = 0 && nextScale = = 0 )
          }

          lastScale = (nextScale === 0) ? lastScale : nextScale;
          // scalingList[ j ] = ( nextScale == 0 ) ? lastScale : nextScale;
          // lastScale = scalingList[ j ]
        }
      };

      /**
       * RBSP: raw bit-stream payload. The actual encoded video data.
       *
       * SPS: sequence parameter set. Part of the RBSP. Metadata to be applied
       * to a complete video sequence, like width and height.
       */
      this.getSps0Rbsp = function() { // :ByteArray
        var
          sps = this.sps[0],
          offset = 1,
          start = 1,
          written = 0,
          end = sps.byteLength - 2,
          result = new Uint8Array(sps.byteLength);

        // In order to prevent 0x0000 01 from being interpreted as a
        // NAL start code, occurences of that byte sequence in the
        // RBSP are escaped with an "emulation byte". That turns
        // sequences of 0x0000 01 into 0x0000 0301. When interpreting
        // a NAL payload, they must be filtered back out.
        while (offset < end) {
          if (sps[offset]     === 0x00 &&
              sps[offset + 1] === 0x00 &&
              sps[offset + 2] === 0x03) {
            result.set(sps.subarray(start, offset + 1), written);
            written += offset + 1 - start;
            start = offset + 3;
          }
          offset++;
        }
        result.set(sps.subarray(start), written);
        return result.subarray(0, written + (sps.byteLength - start));
      };

      // (pts:uint):FlvTag
      this.metaDataTag = function(pts) {
        var
          tag = new FlvTag(FlvTag.METADATA_TAG), // :FlvTag
          expGolomb, // :ExpGolomb
          profile_idc, // :int
          chroma_format_idc, // :int
          imax, // :int
          i, // :int

          pic_order_cnt_type, // :int
          num_ref_frames_in_pic_order_cnt_cycle, // :uint

          pic_width_in_mbs_minus1, // :int
          pic_height_in_map_units_minus1, // :int

          frame_mbs_only_flag, // :int
          frame_cropping_flag, // :Boolean

          frame_crop_left_offset = 0, // :int
          frame_crop_right_offset = 0, // :int
          frame_crop_top_offset = 0, // :int
          frame_crop_bottom_offset = 0, // :int

          width,
          height;

          tag.dts = pts;
          tag.pts = pts;
          expGolomb = new ExpGolomb(this.getSps0Rbsp());

        // :int = expGolomb.readUnsignedByte(); // profile_idc u(8)
        profile_idc = expGolomb.readUnsignedByte();

        // constraint_set[0-5]_flag, u(1), reserved_zero_2bits u(2), level_idc u(8)
        expGolomb.skipBits(16);

        // seq_parameter_set_id
        expGolomb.skipUnsignedExpGolomb();

        if (profile_idc === 100 ||
            profile_idc === 110 ||
            profile_idc === 122 ||
            profile_idc === 244 ||
            profile_idc === 44 ||
            profile_idc === 83 ||
            profile_idc === 86 ||
            profile_idc === 118 ||
            profile_idc === 128) {
          chroma_format_idc = expGolomb.readUnsignedExpGolomb();
          if (3 === chroma_format_idc) {
            expGolomb.skipBits(1); // separate_colour_plane_flag
          }
          expGolomb.skipUnsignedExpGolomb(); // bit_depth_luma_minus8
          expGolomb.skipUnsignedExpGolomb(); // bit_depth_chroma_minus8
          expGolomb.skipBits(1); // qpprime_y_zero_transform_bypass_flag
          if (expGolomb.readBoolean()) { // seq_scaling_matrix_present_flag
            imax = (chroma_format_idc !== 3) ? 8 : 12;
            for (i = 0 ; i < imax ; ++i) {
              if (expGolomb.readBoolean()) { // seq_scaling_list_present_flag[ i ]
                if (i < 6) {
                  this.scaling_list(16, expGolomb);
                } else {
                  this.scaling_list(64, expGolomb);
                }
              }
            }
          }
        }

        expGolomb.skipUnsignedExpGolomb(); // log2_max_frame_num_minus4
        pic_order_cnt_type = expGolomb.readUnsignedExpGolomb();

        if ( 0 === pic_order_cnt_type ) {
          expGolomb.readUnsignedExpGolomb(); //log2_max_pic_order_cnt_lsb_minus4
        } else if ( 1 === pic_order_cnt_type ) {
          expGolomb.skipBits(1); // delta_pic_order_always_zero_flag
          expGolomb.skipExpGolomb(); // offset_for_non_ref_pic
          expGolomb.skipExpGolomb(); // offset_for_top_to_bottom_field
          num_ref_frames_in_pic_order_cnt_cycle = expGolomb.readUnsignedExpGolomb();
          for(i = 0 ; i < num_ref_frames_in_pic_order_cnt_cycle ; ++i) {
            expGolomb.skipExpGolomb(); // offset_for_ref_frame[ i ]
          }
        }

        expGolomb.skipUnsignedExpGolomb(); // max_num_ref_frames
        expGolomb.skipBits(1); // gaps_in_frame_num_value_allowed_flag
        pic_width_in_mbs_minus1 = expGolomb.readUnsignedExpGolomb();
        pic_height_in_map_units_minus1 = expGolomb.readUnsignedExpGolomb();

        frame_mbs_only_flag = expGolomb.readBits(1);
        if (0 === frame_mbs_only_flag) {
          expGolomb.skipBits(1); // mb_adaptive_frame_field_flag
        }

        expGolomb.skipBits(1); // direct_8x8_inference_flag
        frame_cropping_flag = expGolomb.readBoolean();
        if (frame_cropping_flag) {
          frame_crop_left_offset = expGolomb.readUnsignedExpGolomb();
          frame_crop_right_offset = expGolomb.readUnsignedExpGolomb();
          frame_crop_top_offset = expGolomb.readUnsignedExpGolomb();
          frame_crop_bottom_offset = expGolomb.readUnsignedExpGolomb();
        }

        width = ((pic_width_in_mbs_minus1 + 1) * 16) - frame_crop_left_offset * 2 - frame_crop_right_offset * 2;
        height = ((2 - frame_mbs_only_flag) * (pic_height_in_map_units_minus1 + 1) * 16) - (frame_crop_top_offset * 2) - (frame_crop_bottom_offset * 2);

        tag.writeMetaDataDouble("videocodecid", 7);
        tag.writeMetaDataDouble("width", width);
        tag.writeMetaDataDouble("height", height);
        // tag.writeMetaDataDouble("videodatarate", 0 );
        // tag.writeMetaDataDouble("framerate", 0);

        return tag;
      };

      // (pts:uint):FlvTag
      this.extraDataTag = function(pts) {
        var
          i,
          tag = new FlvTag(FlvTag.VIDEO_TAG, true);

        tag.dts = pts;
        tag.pts = pts;

        tag.writeByte(0x01);// version
        tag.writeByte(this.sps[0][1]);// profile
        tag.writeByte(this.sps[0][2]);// compatibility
        tag.writeByte(this.sps[0][3]);// level
        tag.writeByte(0xFC | 0x03); // reserved (6 bits), NULA length size - 1 (2 bits)
        tag.writeByte(0xE0 | 0x01 ); // reserved (3 bits), num of SPS (5 bits)
        tag.writeShort( this.sps[0].length ); // data of SPS
        tag.writeBytes( this.sps[0] ); // SPS

        tag.writeByte( this.pps.length ); // num of PPS (will there ever be more that 1 PPS?)
        for (i = 0 ; i < this.pps.length ; ++i) {
          tag.writeShort(this.pps[i].length); // 2 bytes for length of PPS
          tag.writeBytes(this.pps[i]); // data of PPS
        }

        return tag;
      };
    },

    NALUnitType;

  /**
   * Network Abstraction Layer (NAL) units are the packets of an H264
   * stream. NAL units are divided into types based on their payload
   * data. Each type has a unique numeric identifier.
   *
   *              NAL unit
   * |- NAL header -|------ RBSP ------|
   *
   * NAL unit: Network abstraction layer unit. The combination of a NAL
   * header and an RBSP.
   * NAL header: the encapsulation unit for transport-specific metadata in
   * an h264 stream. Exactly one byte.
   */
  // incomplete, see Table 7.1 of ITU-T H.264 for 12-32
  window.videojs.hls.NALUnitType = NALUnitType = {
    unspecified: 0,
    slice_layer_without_partitioning_rbsp_non_idr: 1,
    slice_data_partition_a_layer_rbsp: 2,
    slice_data_partition_b_layer_rbsp: 3,
    slice_data_partition_c_layer_rbsp: 4,
    slice_layer_without_partitioning_rbsp_idr: 5,
    sei_rbsp: 6,
    seq_parameter_set_rbsp: 7,
    pic_parameter_set_rbsp: 8,
    access_unit_delimiter_rbsp: 9,
    end_of_seq_rbsp: 10,
    end_of_stream_rbsp: 11
  };

  window.videojs.hls.H264Stream = function() {
    var
      next_pts, // :uint;
      next_dts, // :uint;
      pts_offset, // :int

      h264Frame, // :FlvTag

      oldExtraData = new H264ExtraData(), // :H264ExtraData
      newExtraData = new H264ExtraData(), // :H264ExtraData

      nalUnitType = -1, // :int

      state; // :uint;

    this.tags = [];

    //(pts:uint, dts:uint, dataAligned:Boolean):void
    this.setNextTimeStamp = function(pts, dts, dataAligned) {
      // on the first invocation, capture the starting PTS value
      pts_offset = pts;

      // on subsequent invocations, calculate the PTS based on the starting offset
      this.setNextTimeStamp = function(pts, dts, dataAligned) {
        // We could end up with a DTS less than 0 here. We need to deal with that!
        next_pts = pts - pts_offset;
        next_dts = dts - pts_offset;

        // If data is aligned, flush all internal buffers
        if (dataAligned) {
          this.finishFrame();
        }
      };

      this.setNextTimeStamp(pts, dts, dataAligned);
    };

    this.finishFrame = function() {
      if (h264Frame) {
        // Push SPS before EVERY IDR frame for seeking
        if (newExtraData.extraDataExists()) {
          oldExtraData = newExtraData;
          newExtraData = new H264ExtraData();
        }

        if (h264Frame.keyFrame) {
          // Push extra data on every IDR frame in case we did a stream change + seek
          this.tags.push(oldExtraData.metaDataTag(h264Frame.pts));
          this.tags.push(oldExtraData.extraDataTag(h264Frame.pts));
        }

        h264Frame.endNalUnit();
        this.tags.push(h264Frame);
      }

      h264Frame = null;
      nalUnitType = -1;
      state = 0;
    };

    // (data:ByteArray, o:int, l:int):void
    this.writeBytes = function(data, offset, length) {
      var
        nalUnitSize, // :uint
        start, // :uint
        end, // :uint
        t; // :int

      // default argument values
      offset = offset || 0;
      length = length || 0;

      if (length <= 0) {
        // data is empty so there's nothing to write
        return;
      }

      // scan through the bytes until we find the start code (0x000001) for a
      // NAL unit and then begin writing it out
      // strip NAL start codes as we go
      switch (state) {
      default:
        /* falls through */
      case 0:
        state = 1;
        /* falls through */
      case 1:
        // A NAL unit may be split across two TS packets. Look back a bit to
        // make sure the prefix of the start code wasn't already written out.
        if (data[offset] <= 1) {
          nalUnitSize = h264Frame ? h264Frame.nalUnitSize() : 0;
          if (nalUnitSize >= 1 && h264Frame.negIndex(1) === 0) {
            // ?? ?? 00 | O[01] ?? ??
            if (data[offset] === 1 &&
                nalUnitSize >= 2 &&
                h264Frame.negIndex(2) === 0) {
              // ?? 00 00 : 01
              if (3 <= nalUnitSize && 0 === h264Frame.negIndex(3)) {
                h264Frame.length -= 3; // 00 00 00 : 01
              } else {
                h264Frame.length -= 2; // 00 00 : 01
              }

              state = 3;
              return this.writeBytes(data, offset + 1, length - 1);
            }

            if (length > 1 && data[offset] === 0 && data[offset + 1] === 1) {
              // ?? 00 | 00 01
              if (nalUnitSize >= 2 && h264Frame.negIndex(2) === 0) {
                h264Frame.length -= 2; // 00 00 : 00 01
              } else {
                h264Frame.length -= 1; // 00 : 00 01
              }

              state = 3;
              return this.writeBytes(data, offset + 2, length - 2);
            }

            if (length > 2 &&
                data[offset] === 0 &&
                data[offset + 1] === 0 &&
                data[offset + 2] === 1) {
              // 00 : 00 00 01
              // h264Frame.length -= 1;
              state = 3;
              return this.writeBytes(data, offset + 3, length - 3);
            }
          }
        }
        // allow fall through if the above fails, we may end up checking a few
        // bytes a second time. But that case will be VERY rare
        state = 2;
        /* falls through */
      case 2:
        // Look for start codes in the data from the current offset forward
        start = offset;
        end = start + length;
        for (t = end - 3; offset < t;) {
          if (data[offset + 2] > 1) {
            // if data[offset + 2] is greater than 1, there is no way a start
            // code can begin before offset + 3
            offset += 3;
          } else if (data[offset + 1] !== 0) {
              offset += 2;
          } else if (data[offset] !== 0) {
              offset += 1;
          } else {
            // If we get here we have 00 00 00 or 00 00 01
            if (data[offset + 2] === 1) {
              if (offset > start) {
                h264Frame.writeBytes(data, start, offset - start);
              }
              state = 3;
              offset += 3;
              return this.writeBytes(data, offset, end - offset);
            }

            if (end - offset >= 4 &&
                data[offset + 2] === 0 &&
                data[offset + 3] === 1) {
              if (offset > start) {
                h264Frame.writeBytes(data, start, offset - start);
              }
              state = 3;
              offset += 4;
              return this.writeBytes(data, offset, end - offset);
            }

            // We are at the end of the buffer, or we have 3 NULLS followed by
            // something that is not a 1, either way we can step forward by at
            // least 3
            offset += 3;
          }
        }

        // We did not find any start codes. Try again next packet
        state = 1;
        h264Frame.writeBytes(data, start, length);
        return;
      case 3:
        // The next byte is the first byte of a NAL Unit

        if (h264Frame) {
          // we've come to a new NAL unit so finish up the one we've been
          // working on

          switch (nalUnitType) {
          case NALUnitType.seq_parameter_set_rbsp:
            h264Frame.endNalUnit(newExtraData.sps);
            break;
          case NALUnitType.pic_parameter_set_rbsp:
            h264Frame.endNalUnit(newExtraData.pps);
            break;
          case NALUnitType.slice_layer_without_partitioning_rbsp_idr:
            h264Frame.endNalUnit();
            break;
          default:
            h264Frame.endNalUnit();
            break;
          }
        }

        // setup to begin processing the new NAL unit
        nalUnitType = data[offset] & 0x1F;
        if (h264Frame) {
            if (nalUnitType === NALUnitType.access_unit_delimiter_rbsp) {
              // starting a new access unit, flush the previous one
              this.finishFrame();
            } else if (nalUnitType === NALUnitType.slice_layer_without_partitioning_rbsp_idr) {
              h264Frame.keyFrame = true;
            }
        }

        // finishFrame may render h264Frame null, so we must test again
        if (!h264Frame) {
          h264Frame = new FlvTag(FlvTag.VIDEO_TAG);
          h264Frame.pts = next_pts;
          h264Frame.dts = next_dts;
        }

        h264Frame.startNalUnit();
        // We know there will not be an overlapping start code, so we can skip
        // that test
        state = 2;
        return this.writeBytes(data, offset, length);
      } // switch
    };
  };
})(this);


/*
 * aac-stream
 *
 *
 * Copyright (c) 2013 Brightcove
 * All rights reserved.
 */

(function(window) {
var
  FlvTag = window.videojs.hls.FlvTag,
  adtsSampleingRates = [
    96000, 88200,
    64000, 48000,
    44100, 32000,
    24000, 22050,
    16000, 12000
  ];

window.videojs.hls.AacStream = function() {
  var
    next_pts, // :uint
    pts_offset, // :int
    state, // :uint
    pes_length, // :int

    adtsProtectionAbsent, // :Boolean
    adtsObjectType, // :int
    adtsSampleingIndex, // :int
    adtsChanelConfig, // :int
    adtsFrameSize, // :int
    adtsSampleCount, // :int
    adtsDuration, // :int

    aacFrame, // :FlvTag = null;
    extraData; // :uint;

  this.tags = [];

  // (pts:uint, pes_size:int, dataAligned:Boolean):void
  this.setNextTimeStamp = function(pts, pes_size, dataAligned) {

    // on the first invocation, capture the starting PTS value
    pts_offset = pts;

    // on subsequent invocations, calculate the PTS based on the starting offset
    this.setNextTimeStamp = function(pts, pes_size, dataAligned) {
      next_pts = pts - pts_offset;
      pes_length = pes_size;

      // If data is aligned, flush all internal buffers
      if (dataAligned) {
        state = 0;
      }
    };

    this.setNextTimeStamp(pts, pes_size, dataAligned);
  };

  // (data:ByteArray, o:int = 0, l:int = 0):void
  this.writeBytes = function(data, offset, length) {
    var
      end, // :int
      newExtraData, // :uint
      bytesToCopy; // :int

    // default arguments
    offset = offset || 0;
    length = length || 0;

    // Do not allow more than 'pes_length' bytes to be written
    length = (pes_length < length ? pes_length : length);
    pes_length -= length;
    end = offset + length;
    while (offset < end) {
      switch (state) {
      default:
        state = 0;
        break;
      case 0:
        if (offset >= end) {
          return;
        }
        if (0xFF !== data[offset]) {
          console.assert(false, 'Error no ATDS header found');
          offset += 1;
          state = 0;
          return;
        }

        offset += 1;
        state = 1;
        break;
      case 1:
        if (offset >= end) {
          return;
        }
        if (0xF0 !== (data[offset] & 0xF0)) {
          console.assert(false, 'Error no ATDS header found');
          offset +=1;
          state = 0;
          return;
        }

        adtsProtectionAbsent = !!(data[offset] & 0x01);

        offset += 1;
        state = 2;
        break;
      case 2:
        if (offset >= end) {
          return;
        }
        adtsObjectType = ((data[offset] & 0xC0) >>> 6) + 1;
        adtsSampleingIndex = ((data[offset] & 0x3C) >>> 2);
        adtsChanelConfig = ((data[offset] & 0x01) << 2);

        offset += 1;
        state = 3;
        break;
      case 3:
        if (offset >= end) {
          return;
        }
        adtsChanelConfig |= ((data[offset] & 0xC0) >>> 6);
        adtsFrameSize = ((data[offset] & 0x03) << 11);

        offset += 1;
        state = 4;
        break;
      case 4:
        if (offset >= end) {
          return;
        }
        adtsFrameSize |= (data[offset] << 3);

        offset += 1;
        state = 5;
        break;
      case 5:
        if(offset >= end) {
          return;
        }
        adtsFrameSize |= ((data[offset] & 0xE0) >>> 5);
        adtsFrameSize -= (adtsProtectionAbsent ? 7 : 9);

        offset += 1;
        state = 6;
        break;
      case 6:
        if (offset >= end) {
          return;
        }
        adtsSampleCount = ((data[offset] & 0x03) + 1) * 1024;
        adtsDuration = (adtsSampleCount * 1000) / adtsSampleingRates[adtsSampleingIndex];

        newExtraData = (adtsObjectType << 11) |
                       (adtsSampleingIndex << 7) |
                       (adtsChanelConfig << 3);
        if (newExtraData !== extraData) {
          aacFrame = new FlvTag(FlvTag.METADATA_TAG);
          aacFrame.pts = next_pts;
          aacFrame.dts = next_pts;

          // AAC is always 10
          aacFrame.writeMetaDataDouble("audiocodecid", 10);
          aacFrame.writeMetaDataBoolean("stereo", 2 === adtsChanelConfig);
          aacFrame.writeMetaDataDouble ("audiosamplerate", adtsSampleingRates[adtsSampleingIndex]);
          // Is AAC always 16 bit?
          aacFrame.writeMetaDataDouble ("audiosamplesize", 16);

          this.tags.push(aacFrame);

          extraData = newExtraData;
          aacFrame = new FlvTag(FlvTag.AUDIO_TAG, true);
          aacFrame.pts = aacFrame.dts;
          // For audio, DTS is always the same as PTS. We want to set the DTS
          // however so we can compare with video DTS to determine approximate
          // packet order
          aacFrame.pts = next_pts;
          aacFrame.view.setUint16(aacFrame.position, newExtraData);
          aacFrame.position += 2;
          aacFrame.length = Math.max(aacFrame.length, aacFrame.position);

          this.tags.push(aacFrame);
        }

        // Skip the checksum if there is one
        offset += 1;
        state = 7;
        break;
      case 7:
        if (!adtsProtectionAbsent) {
          if (2 > (end - offset)) {
            return;
          } else {
            offset += 2;
          }
        }

        aacFrame = new FlvTag(FlvTag.AUDIO_TAG);
        aacFrame.pts = next_pts;
        aacFrame.dts = next_pts;
        state = 8;
        break;
      case 8:
        while (adtsFrameSize) {
          if (offset >= end) {
            return;
          }
          bytesToCopy = (end - offset) < adtsFrameSize ? (end - offset) : adtsFrameSize;
          aacFrame.writeBytes(data, offset, bytesToCopy);
          offset += bytesToCopy;
          adtsFrameSize -= bytesToCopy;
        }

        this.tags.push(aacFrame);

        // finished with this frame
        state = 0;
        next_pts += adtsDuration;
      }
    }
  };
};

})(this);


(function(window) {
  var
    videojs = window.videojs,
    FlvTag = videojs.hls.FlvTag,
    H264Stream = videojs.hls.H264Stream,
    AacStream = videojs.hls.AacStream,
    MP2T_PACKET_LENGTH,
    STREAM_TYPES;

  /**
   * An object that incrementally transmuxes MPEG2 Trasport Stream
   * chunks into an FLV.
   */
  videojs.hls.SegmentParser = function() {
    var
      self = this,
      parseTSPacket,
      streamBuffer = new Uint8Array(MP2T_PACKET_LENGTH),
      streamBufferByteCount = 0,
      h264Stream = new H264Stream(),
      aacStream = new AacStream();

    // expose the stream metadata
    self.stream = {
      // the mapping between transport stream programs and the PIDs
      // that form their elementary streams
      programMapTable: {}
    };

    // For information on the FLV format, see
    // http://download.macromedia.com/f4v/video_file_format_spec_v10_1.pdf.
    // Technically, this function returns the header and a metadata FLV tag
    // if duration is greater than zero
    // duration in seconds
    // @return {object} the bytes of the FLV header as a Uint8Array
    self.getFlvHeader = function(duration, audio, video) { // :ByteArray {
      var
        headBytes = new Uint8Array(3 + 1 + 1 + 4),
        head = new DataView(headBytes.buffer),
        metadata,
        result;

      // default arguments
      duration = duration || 0;
      audio = audio === undefined? true : audio;
      video = video === undefined? true : video;

      // signature
      head.setUint8(0, 0x46); // 'F'
      head.setUint8(1, 0x4c); // 'L'
      head.setUint8(2, 0x56); // 'V'

      // version
      head.setUint8(3, 0x01);

      // flags
      head.setUint8(4, (audio ? 0x04 : 0x00) | (video ? 0x01 : 0x00));

      // data offset, should be 9 for FLV v1
      head.setUint32(5, headBytes.byteLength);

      // init the first FLV tag
      if (duration <= 0) {
        // no duration available so just write the first field of the first
        // FLV tag
        result = new Uint8Array(headBytes.byteLength + 4);
        result.set(headBytes);
        result.set([0, 0, 0, 0], headBytes.byteLength);
        return result;
      }

      // write out the duration metadata tag
      metadata = new FlvTag(FlvTag.METADATA_TAG);
      metadata.pts = metadata.dts = 0;
      metadata.writeMetaDataDouble("duration", duration);
      result = new Uint8Array(headBytes.byteLength + metadata.byteLength);
      result.set(head);
      result.set(head.bytesLength, metadata.finalize());

      return result;
    };

    self.flushTags = function() {
      h264Stream.finishFrame();
    };

    /**
     * Returns whether a call to `getNextTag()` will be successful.
     * @return {boolean} whether there is at least one transmuxed FLV
     * tag ready
     */
    self.tagsAvailable = function() { // :int {
      return h264Stream.tags.length + aacStream.tags.length;
    };

    /**
     * Returns the next tag in decoder-timestamp (DTS) order.
     * @returns {object} the next tag to decoded.
     */
    self.getNextTag = function() {
      var tag;

      if (!h264Stream.tags.length) {
        // only audio tags remain
        tag = aacStream.tags.shift();
      } else if (!aacStream.tags.length) {
        // only video tags remain
        tag = h264Stream.tags.shift();
      } else if (aacStream.tags[0].dts < h264Stream.tags[0].dts) {
        // audio should be decoded next
        tag = aacStream.tags.shift();
      } else {
        // video should be decoded next
        tag = h264Stream.tags.shift();
      }

      return tag.finalize();
    };

    self.parseSegmentBinaryData = function(data) { // :ByteArray) {
      var
        dataPosition = 0,
        dataSlice;

      // To avoid an extra copy, we will stash overflow data, and only
      // reconstruct the first packet. The rest of the packets will be
      // parsed directly from data
      if (streamBufferByteCount > 0) {
        if (data.byteLength + streamBufferByteCount < MP2T_PACKET_LENGTH) {
          // the current data is less than a single m2ts packet, so stash it
          // until we receive more

          // ?? this seems to append streamBuffer onto data and then just give up. I'm not sure why that would be interesting.
          videojs.log('data.length + streamBuffer.length < MP2T_PACKET_LENGTH ??');
          streamBuffer.readBytes(data, data.length, streamBuffer.length);
          return;
        } else {
          // we have enough data for an m2ts packet
          // process it immediately
          dataSlice = data.subarray(0, MP2T_PACKET_LENGTH - streamBufferByteCount);
          streamBuffer.set(dataSlice, streamBufferByteCount);

          parseTSPacket(streamBuffer);

          // reset the buffer
          streamBuffer = new Uint8Array(MP2T_PACKET_LENGTH);
          streamBufferByteCount = 0;
        }
      }

      while (true) {
        // Make sure we are TS aligned
        while(dataPosition < data.byteLength  && data[dataPosition] !== 0x47) {
          // If there is no sync byte skip forward until we find one
          // TODO if we find a sync byte, look 188 bytes in the future (if
          // possible). If there is not a sync byte there, keep looking
          dataPosition++;
        }

        // base case: not enough data to parse a m2ts packet
        if (data.byteLength - dataPosition < MP2T_PACKET_LENGTH) {
          if (data.byteLength - dataPosition > 0) {
            // there are bytes remaining, save them for next time
            streamBuffer.set(data.subarray(dataPosition),
                             streamBufferByteCount);
            streamBufferByteCount += data.byteLength - dataPosition;
          }
          return;
        }

        // attempt to parse a m2ts packet
        if (parseTSPacket(data.subarray(dataPosition, dataPosition + MP2T_PACKET_LENGTH))) {
          dataPosition += MP2T_PACKET_LENGTH;
        } else {
          // If there was an error parsing a TS packet. it could be
          // because we are not TS packet aligned. Step one forward by
          // one byte and allow the code above to find the next
          videojs.log('error parsing m2ts packet, attempting to re-align');
          dataPosition++;
        }
      }
    };

    /**
     * Parses a video/mp2t packet and appends the underlying video and
     * audio data onto h264stream and aacStream, respectively.
     * @param data {Uint8Array} the bytes of an MPEG2-TS packet,
     * including the sync byte.
     * @return {boolean} whether a valid packet was encountered
     */
    // TODO add more testing to make sure we dont walk past the end of a TS
    // packet!
    parseTSPacket = function(data) { // :ByteArray):Boolean {
      var
        offset = 0, // :uint
        end = offset + MP2T_PACKET_LENGTH, // :uint

        // Payload Unit Start Indicator
        pusi = !!(data[offset + 1] & 0x40), // mask: 0100 0000

        // packet identifier (PID), a unique identifier for the elementary
        // stream this packet describes
        pid = (data[offset + 1] & 0x1F) << 8 | data[offset + 2], // mask: 0001 1111

        // adaptation_field_control, whether this header is followed by an
        // adaptation field, a payload, or both
        afflag = (data[offset + 3] & 0x30 ) >>> 4,

        patTableId, // :int
        patCurrentNextIndicator, // Boolean
        patSectionLength, // :uint

        pesPacketSize, // :int,
        dataAlignmentIndicator, // :Boolean,
        ptsDtsIndicator, // :int
        pesHeaderLength, // :int

        pts, // :uint
        dts, // :uint

        pmtCurrentNextIndicator, // :Boolean
        pmtProgramDescriptorsLength,
        pmtSectionLength, // :uint

        streamType, // :int
        elementaryPID, // :int
        ESInfolength; // :int

      // Continuity Counter we could use this for sanity check, and
      // corrupt stream detection
      // cc = (data[offset + 3] & 0x0F);

      // move past the header
      offset += 4;

      // if an adaption field is present, its length is specified by
      // the fifth byte of the PES header. The adaptation field is
      // used to specify some forms of timing and control data that we
      // do not currently use.
      if (afflag > 0x01) {
        offset += data[offset] + 1;
      }

      // Handle a Program Association Table (PAT). PATs map PIDs to
      // individual programs. If this transport stream was being used
      // for television broadcast, a program would probably be
      // equivalent to a channel. In HLS, it would be very unusual to
      // create an mp2t stream with multiple programs.
      if (0x0000 === pid) {
        // The PAT may be split into multiple sections and those
        // sections may be split into multiple packets. If a PAT
        // section starts in this packet, PUSI will be true and the
        // first byte of the playload will indicate the offset from
        // the current position to the start of the section.
        if (pusi) {
          offset += 1 + data[offset];
        }
        patTableId = data[offset];

        if (patTableId !== 0x00) {
          videojs.log('the table_id of the PAT should be 0x00 but was' +
                      patTableId.toString(16));
        }

        // the current_next_indicator specifies whether this PAT is
        // currently applicable or is part of the next table to become
        // active
        patCurrentNextIndicator = !!(data[offset + 5] & 0x01);
        if (patCurrentNextIndicator) {
          // section_length specifies the number of bytes following
          // its position to the end of this section
          patSectionLength =  (data[offset + 1] & 0x0F) << 8 | data[offset + 2];
          // move past the rest of the PSI header to the first program
          // map table entry
          offset += 8;

          // we don't handle streams with more than one program, so
          // raise an exception if we encounter one
          // section_length = rest of header + (n * entry length) + CRC
          // = 5 + (n * 4) + 4
          if ((patSectionLength - 5 - 4) / 4 !== 1) {
            throw new Error("TS has more that 1 program");
          }

          // the Program Map Table (PMT) associates the underlying
          // video and audio streams with a unique PID
          self.stream.pmtPid = (data[offset + 2] & 0x1F) << 8 | data[offset + 3];
        }
      } else if (pid === self.stream.programMapTable[STREAM_TYPES.h264] ||
                 pid === self.stream.programMapTable[STREAM_TYPES.adts]) {
        if (pusi) {
          // comment out for speed
          if (0x00 !== data[offset + 0] || 0x00 !== data[offset + 1] || 0x01 !== data[offset + 2]) {
            // look for PES start code
             throw new Error("PES did not begin with start code");
           }

          // var sid:int  = data[offset+3]; // StreamID
          pesPacketSize = (data[offset + 4] << 8) | data[offset + 5];
          dataAlignmentIndicator = (data[offset + 6] & 0x04) !== 0;
          ptsDtsIndicator = data[offset + 7];
          pesHeaderLength = data[offset + 8]; // TODO sanity check header length
          offset += 9; // Skip past PES header

          // PTS and DTS are normially stored as a 33 bit number.
          // JavaScript does not have a integer type larger than 32 bit
          // BUT, we need to convert from 90ns to 1ms time scale anyway.
          // so what we are going to do instead, is drop the least
          // significant bit (the same as dividing by two) then we can
          // divide by 45 (45 * 2 = 90) to get ms.
          if (ptsDtsIndicator & 0xC0) {
            // the PTS and DTS are not written out directly. For information on
            // how they are encoded, see
            // http://dvd.sourceforge.net/dvdinfo/pes-hdr.html
            pts = (data[offset + 0] & 0x0E) << 28
              | (data[offset + 1] & 0xFF) << 21
              | (data[offset + 2] & 0xFE) << 13
              | (data[offset + 3] & 0xFF) <<  6
              | (data[offset + 4] & 0xFE) >>>  2;
            pts /= 45;
            dts = pts;
            if (ptsDtsIndicator & 0x40) {// DTS
              dts = (data[offset + 5] & 0x0E ) << 28
                | (data[offset + 6] & 0xFF ) << 21
                | (data[offset + 7] & 0xFE ) << 13
                | (data[offset + 8] & 0xFF ) << 6
                | (data[offset + 9] & 0xFE ) >>> 2;
              dts /= 45;
            }
          }
          // Skip past "optional" portion of PTS header
          offset += pesHeaderLength;

          if (pid === self.stream.programMapTable[STREAM_TYPES.h264]) {
            h264Stream.setNextTimeStamp(pts,
                                        dts,
                                        dataAlignmentIndicator);
          } else if (pid === self.stream.programMapTable[STREAM_TYPES.adts]) {
            aacStream.setNextTimeStamp(pts,
                                       pesPacketSize,
                                       dataAlignmentIndicator);
          }
        }

        if (pid === self.stream.programMapTable[STREAM_TYPES.adts]) {
          aacStream.writeBytes(data, offset, end - offset);
        } else if (pid === self.stream.programMapTable[STREAM_TYPES.h264]) {
          h264Stream.writeBytes(data, offset, end - offset);
        }
      } else if (self.stream.pmtPid === pid) {
        // similarly to the PAT, jump to the first byte of the section
        if (pusi) {
          offset += 1 + data[offset];
        }
        if (data[offset] !== 0x02) {
          videojs.log('The table_id of a PMT should be 0x02 but was ' +
                      data[offset].toString(16));
        }

        // whether this PMT is currently applicable or is part of the
        // next table to become active
        pmtCurrentNextIndicator = !!(data[offset + 5] & 0x01);
        if (pmtCurrentNextIndicator) {
          // overwrite any existing program map table
          self.stream.programMapTable = {};
          // section_length specifies the number of bytes following
          // its position to the end of this section
          pmtSectionLength  = (data[offset + 1] & 0x0f) << 8 | data[offset + 2];
          // subtract the length of the program info descriptors
          pmtProgramDescriptorsLength = (data[offset + 10] & 0x0f) << 8 | data[offset + 11];
          pmtSectionLength -= pmtProgramDescriptorsLength;
          // skip CRC and PSI data we dont care about
          // rest of header + CRC = 9 + 4
          pmtSectionLength -= 13;

          // align offset to the first entry in the PMT
          offset += 12 + pmtProgramDescriptorsLength;

          // iterate through the entries
          while (0 < pmtSectionLength) {
            // the type of data carried in the PID this entry describes
            streamType = data[offset + 0];
            // the PID for this entry
            elementaryPID = (data[offset + 1] & 0x1F) << 8 | data[offset + 2];

            if (streamType === STREAM_TYPES.h264) {
              if (self.stream.programMapTable[streamType] &&
                  self.stream.programMapTable[streamType] !== elementaryPID) {
                throw new Error("Program has more than 1 video stream");
              }
              self.stream.programMapTable[streamType] = elementaryPID;
            } else if (streamType === STREAM_TYPES.adts) {
              if (self.stream.programMapTable[streamType] &&
                  self.stream.programMapTable[streamType] !== elementaryPID) {
                throw new Error("Program has more than 1 audio Stream");
              }
              self.stream.programMapTable[streamType] = elementaryPID;
            }
            // TODO add support for MP3 audio

            // the length of the entry descriptor
            ESInfolength = (data[offset + 3] & 0x0F) << 8 | data[offset + 4];
            // move to the first byte after the end of this entry
            offset += 5 + ESInfolength;
            pmtSectionLength -=  5 + ESInfolength;
          }
        }
        // We could test the CRC here to detect corruption with extra CPU cost
      } else if (0x0011 === pid) {
        // Service Description Table
      } else if (0x1FFF === pid) {
        // NULL packet
      } else {
        videojs.log("Unknown PID parsing TS packet: " + pid);
      }

      return true;
    };

    self.getTags = function() {
      return h264Stream.tags;
    };

    self.stats = {
      h264Tags: function() {
        return h264Stream.tags.length;
      },
      aacTags: function() {
        return aacStream.tags.length;
      }
    };
  };

  // MPEG2-TS constants
  videojs.hls.SegmentParser.MP2T_PACKET_LENGTH = MP2T_PACKET_LENGTH = 188;
  videojs.hls.SegmentParser.STREAM_TYPES = STREAM_TYPES = {
    h264: 0x1b,
    adts: 0x0f
  };

})(window);


/**
 * A lightweight readable stream implemention that handles event dispatching.
 * Objects that inherit from streams should call init in their constructors.
 */
(function(videojs, undefined) {
  var Stream = function() {
    this.init = function() {
      var listeners = {};
      /**
       * Add a listener for a specified event type.
       * @param type {string} the event name
       * @param listener {function} the callback to be invoked when an event of
       * the specified type occurs
       */
      this.on = function(type, listener) {
        if (!listeners[type]) {
          listeners[type] = [];
        }
        listeners[type].push(listener);
      };
      /**
       * Remove a listener for a specified event type.
       * @param type {string} the event name
       * @param listener {function} a function previously registered for this
       * type of event through `on`
       */
      this.off = function(type, listener) {
        var index;
        if (!listeners[type]) {
          return false;
        }
        index = listeners[type].indexOf(listener);
        listeners[type].splice(index, 1);
        return index > -1;
      };
      /**
       * Trigger an event of the specified type on this stream. Any additional
       * arguments to this function are passed as parameters to event listeners.
       * @param type {string} the event name
       */
      this.trigger = function(type) {
        var callbacks, i, length, args;
        callbacks = listeners[type];
        if (!callbacks) {
          return;
        }
        args = Array.prototype.slice.call(arguments, 1);
        length = callbacks.length;
        for (i = 0; i < length; ++i) {
          callbacks[i].apply(this, args);
        }
      };
    };
  };
  /**
   * Forwards all `data` events on this stream to the destination stream. The
   * destination stream should provide a method `push` to receive the data
   * events as they arrive.
   * @param destination {stream} the stream that will receive all `data` events
   * @see http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
   */
  Stream.prototype.pipe = function(destination) {
    this.on('data', function(data) {
      destination.push(data);
    });
  };

  videojs.hls.Stream = Stream;
})(window.videojs);


/**
 * Utilities for parsing M3U8 files. If the entire manifest is available,
 * `Parser` will create a object representation with enough detail for managing
 * playback. `ParseStream` and `LineStream` are lower-level parsing primitives
 * that do not assume the entirety of the manifest is ready and expose a
 * ReadableStream-like interface.
 */
(function(videojs, parseInt, isFinite, mergeOptions, undefined) {
  var
    noop = function() {},
    parseAttributes = function(attributes) {
      var
        attrs = attributes.split(','),
        i = attrs.length,
        result = {},
        attr;

      while (i--) {
        attr = attrs[i].split('=');
        attr[0] = attr[0].replace(/^\s+|\s+$/g, '');

        // This is not sexy, but gives us the resulting object we want.
        if (attr[1]) {
          attr[1] = attr[1].replace(/^\s+|\s+$/g, '');
          if (attr[1].indexOf('"') !== -1) {
            attr[1] = attr[1].split('"')[1];
          }
          result[attr[0]] = attr[1];
        } else {
          attrs[i - 1] = attrs[i - 1] + ',' + attr[0];
        }
      }
      return result;
    },
    Stream = videojs.hls.Stream,
    LineStream,
    ParseStream,
    Parser;

  /**
   * A stream that buffers string input and generates a `data` event for each
   * line.
   */
  LineStream = function() {
    var buffer = '';
    LineStream.prototype.init.call(this);

    /**
     * Add new data to be parsed.
     * @param data {string} the text to process
     */
    this.push = function(data) {
      var nextNewline;

      buffer += data;
      nextNewline = buffer.indexOf('\n');

      for (; nextNewline > -1; nextNewline = buffer.indexOf('\n')) {
        this.trigger('data', buffer.substring(0, nextNewline));
        buffer = buffer.substring(nextNewline + 1);
      }
    };
  };
  LineStream.prototype = new Stream();

  /**
   * A line-level M3U8 parser event stream. It expects to receive input one
   * line at a time and performs a context-free parse of its contents. A stream
   * interpretation of a manifest can be useful if the manifest is expected to
   * be too large to fit comfortably into memory or the entirety of the input
   * is not immediately available. Otherwise, it's probably much easier to work
   * with a regular `Parser` object.
   *
   * Produces `data` events with an object that captures the parser's
   * interpretation of the input. That object has a property `tag` that is one
   * of `uri`, `comment`, or `tag`. URIs only have a single additional
   * property, `line`, which captures the entirety of the input without
   * interpretation. Comments similarly have a single additional property
   * `text` which is the input without the leading `#`.
   *
   * Tags always have a property `tagType` which is the lower-cased version of
   * the M3U8 directive without the `#EXT` or `#EXT-X-` prefix. For instance,
   * `#EXT-X-MEDIA-SEQUENCE` becomes `media-sequence` when parsed. Unrecognized
   * tags are given the tag type `unknown` and a single additional property
   * `data` with the remainder of the input.
   */
  ParseStream = function() {
    ParseStream.prototype.init.call(this);
  };
  ParseStream.prototype = new Stream();
  /**
   * Parses an additional line of input.
   * @param line {string} a single line of an M3U8 file to parse
   */
  ParseStream.prototype.push = function(line) {
    var match, event;
    if (line.length === 0) {
      // ignore empty lines
      return;
    }

    // URIs
    if (line[0] !== '#') {
      this.trigger('data', {
        type: 'uri',
        uri: line
      });
      return;
    }

    // Comments
    if (line.indexOf('#EXT') !== 0) {
      this.trigger('data', {
        type: 'comment',
        text: line.slice(1)
      });
      return;
    }

    //strip off any carriage returns here so the regex matching
    //doesn't have to account for them.
    line = line.replace('\r','');

    // Tags
    match = /^#EXTM3U/.exec(line);
    if (match) {
      this.trigger('data', {
        type: 'tag',
        tagType: 'm3u'
      });
      return;
    }
    match = (/^#EXTINF:?([0-9\.]*)?,?(.*)?$/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'inf'
      };
      if (match[1]) {
        event.duration = parseFloat(match[1], 10);
      }
      if (match[2]) {
        event.title = match[2];
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-TARGETDURATION:?([0-9.]*)?/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'targetduration'
      };
      if (match[1]) {
        event.duration = parseInt(match[1], 10);
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'totalduration'
      };
      if (match[1]) {
        event.duration = parseInt(match[1], 10);
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-VERSION:?([0-9.]*)?/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'version'
      };
      if (match[1]) {
        event.version = parseInt(match[1], 10);
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'media-sequence'
      };
      if (match[1]) {
        event.number = parseInt(match[1], 10);
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'playlist-type'
      };
      if (match[1]) {
        event.playlistType = match[1];
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'byterange'
      };
      if (match[1]) {
        event.length = parseInt(match[1], 10);
      }
      if (match[2]) {
        event.offset = parseInt(match[2], 10);
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'allow-cache'
      };
      if (match[1]) {
        event.allowed = !(/NO/).test(match[1]);
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-STREAM-INF:?(.*)$/).exec(line);
    if (match) {
      event = {
        type: 'tag',
        tagType: 'stream-inf'
      };
      if (match[1]) {
        event.attributes = parseAttributes(match[1]);

        if (event.attributes.RESOLUTION) {
          (function() {
            var
              split = event.attributes.RESOLUTION.split('x'),
              resolution = {};
            if (split[0]) {
              resolution.width = parseInt(split[0], 10);
            }
            if (split[1]) {
              resolution.height = parseInt(split[1], 10);
            }
            event.attributes.RESOLUTION = resolution;
          })();
        }
        if (event.attributes.BANDWIDTH) {
          event.attributes.BANDWIDTH = parseInt(event.attributes.BANDWIDTH, 10);
        }
        if (event.attributes['PROGRAM-ID']) {
          event.attributes['PROGRAM-ID'] = parseInt(event.attributes['PROGRAM-ID'], 10);
        }
      }
      this.trigger('data', event);
      return;
    }
    match = (/^#EXT-X-ENDLIST/).exec(line);
    if (match) {
      this.trigger('data', {
        type: 'tag',
        tagType: 'endlist'
      });
      return;
    }

    // unknown tag type
    this.trigger('data', {
      type: 'tag',
      data: line.slice(4, line.length)
    });
  };

  /**
   * A parser for M3U8 files. The current interpretation of the input is
   * exposed as a property `manifest` on parser objects. It's just two lines to
   * create and parse a manifest once you have the contents available as a string:
   *
   * ```js
   * var parser = new videojs.m3u8.Parser();
   * parser.push(xhr.responseText);
   * ```
   *
   * New input can later be applied to update the manifest object by calling
   * `push` again.
   *
   * The parser attempts to create a usable manifest object even if the
   * underlying input is somewhat nonsensical. It emits `info` and `warning`
   * events during the parse if it encounters input that seems invalid or
   * requires some property of the manifest object to be defaulted.
   */
  Parser = function() {
    var
      self = this,
      uris = [],
      currentUri = {};
    Parser.prototype.init.call(this);

    this.lineStream = new LineStream();
    this.parseStream = new ParseStream();
    this.lineStream.pipe(this.parseStream);

    // the manifest is empty until the parse stream begins delivering data
    this.manifest = {
      allowCache: true
    };

    // update the manifest with the m3u8 entry from the parse stream
    this.parseStream.on('data', function(entry) {
      ({
        tag: function() {
          // switch based on the tag type
          (({
            'allow-cache': function() {
              this.manifest.allowCache = entry.allowed;
              if (!('allowed' in entry)) {
                this.trigger('info', {
                  message: 'defaulting allowCache to YES'
                });
                this.manifest.allowCache = true;
              }
            },
            'byterange': function() {
              var byterange = {};
              if ('length' in entry) {
                currentUri.byterange = byterange;
                byterange.length = entry.length;

                if (!('offset' in entry)) {
                  this.trigger('info', {
                    message: 'defaulting offset to zero'
                  });
                  entry.offset = 0;
                }
              }
              if ('offset' in entry) {
                currentUri.byterange = byterange;
                byterange.offset = entry.offset;
              }
            },
            'endlist': function() {
              this.manifest.endList = true;
            },
            'inf': function() {
              if (!('mediaSequence' in this.manifest)) {
                this.manifest.mediaSequence = 0;
                this.trigger('info', {
                  message: 'defaulting media sequence to zero'
                });
              }
              if (entry.duration >= 0) {
                currentUri.duration = entry.duration;
              }

              this.manifest.segments = uris;

            },
            'media-sequence': function() {
              if (!isFinite(entry.number)) {
                this.trigger('warn', {
                  message: 'ignoring invalid media sequence: ' + entry.number
                });
                return;
              }
              this.manifest.mediaSequence = entry.number;
            },
            'playlist-type': function() {
              if (!(/VOD|EVENT/).test(entry.playlistType)) {
                this.trigger('warn', {
                  message: 'ignoring unknown playlist type: ' + entry.playlist
                });
                return;
              }
              this.manifest.playlistType = entry.playlistType;
            },
            'stream-inf': function() {
              this.manifest.playlists = uris;

              if (!entry.attributes) {
                this.trigger('warn', {
                  message: 'ignoring empty stream-inf attributes'
                });
                return;
              }

              if (!currentUri.attributes) {
                currentUri.attributes = {};
              }
              currentUri.attributes = mergeOptions(currentUri.attributes,
                                                   entry.attributes);
            },
            'targetduration': function() {
              if (!isFinite(entry.duration) || entry.duration < 0) {
                this.trigger('warn', {
                  message: 'ignoring invalid target duration: ' + entry.duration
                });
                return;
              }
              this.manifest.targetDuration = entry.duration;
            },
            'totalduration': function() {
              if (!isFinite(entry.duration) || entry.duration < 0) {
                this.trigger('warn', {
                  message: 'ignoring invalid total duration: ' + entry.duration
                });
                return;
              }
              this.manifest.totalDuration = entry.duration;
            }
          })[entry.tagType] || noop).call(self);
        },
        uri: function() {
          currentUri.uri = entry.uri;
          uris.push(currentUri);

          // if no explicit duration was declared, use the target duration
          if (this.manifest.targetDuration &&
              !('duration' in currentUri)) {
            this.trigger('warn', {
              message: 'defaulting segment duration to the target duration'
            });
            currentUri.duration = this.manifest.targetDuration;
          }

          // prepare for the next URI
          currentUri = {};
        },
        comment: function() {
          // comments are not important for playback
        }
      })[entry.type].call(self);
    });
  };
  Parser.prototype = new Stream();
  /**
   * Parse the input string and update the manifest object.
   * @param chunk {string} a potentially incomplete portion of the manifest
   */
  Parser.prototype.push = function(chunk) {
    this.lineStream.push(chunk);
  };
  /**
   * Flush any remaining input. This can be handy if the last line of an M3U8
   * manifest did not contain a trailing newline but the file has been
   * completely received.
   */
  Parser.prototype.end = function() {
    // flush any buffered input
    this.lineStream.push('\n');
  };

  window.videojs.m3u8 = {
    LineStream: LineStream,
    ParseStream: ParseStream,
    Parser: Parser
  };
})(window.videojs, window.parseInt, window.isFinite, window.videojs.util.mergeOptions);