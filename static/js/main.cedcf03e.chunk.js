(window["webpackJsonpkazoo-snapshot"]=window["webpackJsonpkazoo-snapshot"]||[]).push([[0],{102:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(44),o=n.n(r),i=(n(61),n(51)),u=n(7),l=n(6),s=n(15),m=n.n(s),f=n(54),d=n(46),p=n.n(d),h=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"https://kazoo-snapshot-backend.herokuapp.com",b=p()(h);function g(e){if(!e.ok)throw new Error("Response not ok");return e}var E=n(47),v=n.n(E);n(94);function O(e){var t=e.onAccept;return c.a.createElement("div",{className:"gdpr"},c.a.createElement("div",{className:"gdprText"},c.a.createElement("h1",null,"Ge De Pe Re"),c.a.createElement("p",null,"Dac\u0103 ne dai poze, \xee\u021bi asumi faptul c\u0103 ai dreptul s\u0103 ni le dai si c\u0103 nu \xee\u021bi e ru\u0219ine cu ele."),c.a.createElement("p",null,"Vom folosi pozele doar \xeen timpul spectacolului pentru amuzamentul t\u0103u sau ca parte din \xeenregistr\u0103ri sau poze f\u0103cute \xeen timpul spectacolului, pentru promovare."),c.a.createElement("p",null,"Vom \u0219terge pozele tale \xeen maxim o zi dup\u0103 spectacol.")),c.a.createElement("button",{className:"gdprButton",onClick:t},"Da, da, am \xeen\u021beles!"))}n(95);var j=1,w=2,y=3,k=4,N=5;var C=function(){var e=Object(a.useState)(j),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useCallback)(function(e){if(e.length>5)r(N);else{var t=new FormData,n=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value;t.append("files",u)}}catch(l){a=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}r(w),fetch("".concat(h,"/upload"),{method:"POST",body:t}).then(g).then(function(e){r(y)},function(e){console.error(e),r(k)})}},[r]),i=Object(f.a)({onDrop:o,multiple:!0}),u=i.getRootProps,s=i.getInputProps,d=i.isDragActive,p=Object(a.useState)(!1),b=Object(l.a)(p,2),E=b[0],C=b[1],P=Object(a.useCallback)(function(){return C(!0)},[]);return c.a.createElement(m.a,{className:"collect"},E&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",Object.assign({},u(),{className:"dropzone"}),c.a.createElement("input",s()),c.a.createElement("div",{className:"dropzoneContainer"},d?c.a.createElement("p",{className:"dropzoneText"},"Tr\xe2nte\u0219te-o aici"):c.a.createElement("p",{className:"dropzoneText"},function(e){switch(e){case j:return"Arunc\u0103 cu o poz\u0103 \xeen noi!";case w:return"Se \xeencarc\u0103 poza...";case y:return"Mul\u021bumiim \u2764\ufe0f!\nDac\u0103 te las\u0103 inima, mai bag\u0103 una!";case k:return"Ne pare r\u0103u \ud83d\ude22. Ceva nu a mers.\n Dar mai \xeencearc\u0103!";case N:return"Apreciem entuziasmul, dar maxim 5 deodat\u0103, te rugam!";default:return""}}(n)))),c.a.createElement("img",{alt:"",src:v.a,className:"strip"})),!E&&c.a.createElement(O,{onAccept:P}))},P=n(48),S=n(55),z=n(49),_=n.n(z);n(96);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(P.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function I(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),i=Object(l.a)(o,2),u=i[0],s=i[1];Object(a.useEffect)(function(){var e=!0;return fetch("".concat(h,"/images")).then(g).then(function(e){return e.json()}).then(function(t){e&&r(t)},s),function(){e=!1}},[]),Object(a.useEffect)(function(){var e=function(e){r(function(t){return[e].concat(Object(S.a)(t))})};return b.on("image_upload",e),function(){return b.off("image_upload",e)}},[]);var m=Object(a.useCallback)(function(){fetch("".concat(h,"/new_image"),{method:"POST"}).then(g).then(function(e){return e.json()}).then(function(e){var t=e.id;r(function(e){return e.map(function(e){return e.id===t?T({},e,{used:!0}):e})})})},[r]),f=Object(a.useCallback)(function(){fetch("".concat(h,"/hide_image"),{method:"POST"}).then(g)},[]),d=Object(a.useCallback)(function(){fetch("".concat(h,"/show_qr"),{method:"POST"}).then(g)},[]);if(Object(a.useEffect)(function(){var e=function(e){var t=e.key;"r"===t?m():"h"===t?f():"q"===t&&d()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[m,f,d]),u)return c.a.createElement("div",null,u.toString());var p=function(e){return function(){fetch("".concat(h,"/image/").concat(e),{method:"DELETE"}).then(g).then(function(e){return e.json()}).then(function(){r(function(t){return t.filter(function(t){return t.id!==e})})})}},E=function(e,t){return function(){fetch("".concat(h,"/image/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({used:t})}).then(g).then(function(e){return e.json()}).then(function(){r(function(n){return n.map(function(n){return n.id===e?T({},n,{used:t}):n})})})}};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{onClick:m},"Show random image (R)"),c.a.createElement("button",{onClick:f},"Hide image (H)"),c.a.createElement("button",{onClick:d},"Show QR (Q)")),c.a.createElement("div",{className:"adminImages"},n.map(function(e){return c.a.createElement("div",{key:e.id,className:_()("adminImage",e.used&&"adminImageUsed")},c.a.createElement("img",{className:"adminImageImg",alt:"",src:"".concat(h,"/image/").concat(e.id),onClick:(t=e.id,function(){fetch("".concat(h,"/show_image/").concat(t),{method:"POST"}).then(g),E(t,!0)()})}),c.a.createElement("button",{className:"adminImageDelete",onClick:p(e.id)},"Delete"),c.a.createElement("button",{className:"adminImageToggleUsed",onClick:E(e.id,!e.used)},e.used?"Mark as unused":"Mark as used"));var t})))}var x=n(50),L=n.n(x);n(102);function A(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),r=n[0],o=n[1],i=Object(a.useCallback)(function(){o(e.src)},[e.src,o]);return c.a.createElement("img",Object.assign({alt:""},e,{style:{opacity:r===e.src?1:0},onLoad:i}))}function R(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(function(){var e=function(e){r({id:e.id})};return b.on("show_image",e),function(){return b.off("show_image",e)}},[]),Object(a.useEffect)(function(){var e=function(e){r(null)};return b.on("hide_image",e),function(){return b.off("hide_image",e)}},[]),Object(a.useEffect)(function(){var e=function(e){r("qr")};return b.on("show_qr",e),function(){return b.off("show_qr",e)}},[]);var o=Object(a.useState)({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),i=Object(l.a)(o,2),u=i[0],s=i[1];return Object(a.useEffect)(function(){var e=function(){s({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("style",null,"body { background: #000; }"),c.a.createElement(m.a,{className:"displayContainer"},function(e,t){var n=t.width,a=t.height;if(!e)return null;if("qr"===e){var r=window.location.origin,o=Math.min(.8*a,n);return c.a.createElement("div",{className:"qrContainer"},c.a.createElement(L.a,{value:r,includeMargin:!0,size:o}),c.a.createElement("div",{className:"qrURL"},r))}return c.a.createElement(A,{className:"displayImage",src:"".concat(h,"/image/").concat(e.id)})}(n,u)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(function(){return c.a.createElement(i.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:C}),c.a.createElement(u.a,{path:"/admin",exact:!0,component:I}),c.a.createElement(u.a,{path:"/display",exact:!0,component:R})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,n){e.exports=n.p+"static/media/strip.5f2e2fc5.png"},56:function(e,t,n){e.exports=n(105)},61:function(e,t,n){},91:function(e,t){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.cedcf03e.chunk.js.map