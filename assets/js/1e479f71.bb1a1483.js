(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(261)),c={title:"pan",permalink:"wiki/pan/",layout:"wiki",tags:["Control Functions"]},i={unversionedId:"reference/control-functions/pan",id:"reference/control-functions/pan",isDocsHomePage:!1,title:"pan",description:"Type:",source:"@site/docs/reference/control-functions/pan.md",slug:"/reference/control-functions/pan",permalink:"/docs/reference/control-functions/pan",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/control-functions/pan.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],l={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pan :: Pattern Double -> ControlPattern\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"pan")," turns a number pattern (ranging from 0 to 1) into a control\npattern that specifies the audio channel. In a 2-channel setup, a value\nof ",Object(a.b)("inlineCode",{parentName:"p"},"0")," pans the audio hard left and a value of ",Object(a.b)("inlineCode",{parentName:"p"},"1")," pans the audio hard\nright. The default value is ",Object(a.b)("inlineCode",{parentName:"p"},"0.5"),", which produces full volume on both\nchannels."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'d1 $ sound "bd feel odx drum" # pan "0 1 0.25 0.75"\n\nd1 $ sound "bd*16" # pan (slow 3 $ sine)\n')))}u.isMDXComponent=!0},261:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return t?o.a.createElement(b,i(i({ref:n},l),{},{components:t})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);