(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5078)}])},3197:function(e,t,a){"use strict";var i=a(5893),s=a(1857),n=a.n(s);a(7294);var r=a(1664),l=a.n(r),o=a(9008),d=a.n(o);let c=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"jsx-e128e01a3d9022e6 nav-link",children:[(0,i.jsx)("label",{className:"jsx-e128e01a3d9022e6",children:"GW Burger"}),(0,i.jsxs)("ul",{className:"jsx-e128e01a3d9022e6",children:[(0,i.jsx)("li",{className:"jsx-e128e01a3d9022e6",children:(0,i.jsx)(l(),{href:"/",className:"link",children:"Home"})}),(0,i.jsx)("li",{className:"jsx-e128e01a3d9022e6",children:(0,i.jsx)(l(),{href:"/projects",className:"link",children:"Projects"})}),(0,i.jsx)("li",{className:"jsx-e128e01a3d9022e6",children:(0,i.jsx)(l(),{href:"/contact",className:"link",children:"Contact"})})]}),(0,i.jsx)(n(),{id:"1cda2c0cf7b8805f",children:"*.jsx-e128e01a3d9022e6{padding:0;margin:0;text-decoration:none;list-style:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.nav-link.jsx-e128e01a3d9022e6{font-family:montserrat;background:grey;height:80px;width:100%}label.jsx-e128e01a3d9022e6{text-align:left;color:black;font-size:35px;line-height:80px;font-weight:bold;text-align:left;margin-left:20px;position:relative}ul.jsx-e128e01a3d9022e6{float:right;margin-right:20px}ul.jsx-e128e01a3d9022e6 li.jsx-e128e01a3d9022e6{display:inline-block;line-height:80px;margin:0 5px}ul.jsx-e128e01a3d9022e6 li.jsx-e128e01a3d9022e6 link.jsx-e128e01a3d9022e6{color:white;font-size:17px;text-transform:uppercase}"}),(0,i.jsx)(n(),{id:"2655eb8dbd82593e",children:""})]}),(0,i.jsxs)(d(),{children:[(0,i.jsx)("script",{src:"https://www.googletagmanager.com/gtag/js?id=G-S0ECD82STC"}),(0,i.jsxs)("script",{children:["function gtag() ",dataLayer.push(arguments),"gtag('js', new Date()); gtag('config', 'G-S0ECD82STC'); window.dataLayer = window.dataLayer || [];"]})]})]});t.Z=c},9749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,a;var s,{src:n,sizes:m,unoptimized:p=!1,priority:j=!1,loading:b,className:w,quality:v,width:y,height:C,fill:N,style:E,onLoad:S,onLoadingComplete:k,placeholder:P="empty",blurDataURL:_,layout:I,objectFit:B,objectPosition:D,lazyBoundary:z,lazyRoot:L}=e,R=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=l.useContext(g.ImageConfigContext),M=l.useMemo(()=>{let e=f||T||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:a})},[T]),O=R,F=O.loader||u.default;if(delete O.loader,"__next_img_default"in F){if("custom"===M.loader)throw Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Q=F;F=e=>{let{config:t}=e,a=r(e,["config"]);return Q(a)}}if(I){"fill"===I&&(N=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];G&&(E=i({},E,G));let W={responsive:"100vw",fill:"100vw"}[I];W&&!m&&(m=W)}let U="",H=A(y),J=A(C);if("object"==typeof(s=n)&&(h(s)||void 0!==s.src)){let K=h(n)?n.default:n;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(t=K.blurWidth,a=K.blurHeight,_=_||K.blurDataURL,U=K.src,!N){if(H||J){if(H&&!J){let Y=H/K.width;J=Math.round(K.height*Y)}else if(!H&&J){let Z=J/K.height;H=Math.round(K.width*Z)}}else H=K.width,J=K.height}}let V=!j&&("lazy"===b||void 0===b);((n="string"==typeof n?n:U).startsWith("data:")||n.startsWith("blob:"))&&(p=!0,V=!1),M.unoptimized&&(p=!0);let[q,X]=l.useState(!1),[$,ee]=l.useState(!1),et=A(v),ea=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:D}:{},$?{}:{color:"transparent"},E),ei="blur"===P&&_&&!q?{backgroundSize:ea.objectFit||"cover",backgroundPosition:ea.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:H,heightInt:J,blurWidth:t,blurHeight:a,blurDataURL:_}),'")')}:{},es=function(e){let{config:t,src:a,unoptimized:i,width:s,quality:n,sizes:r,loader:l}=e;if(i)return{src:a,srcSet:void 0,sizes:void 0};let{widths:o,kind:d}=function(e,t,a){let{deviceSizes:i,allSizes:s}=e;if(a){let n=/(^|\s)(1?\d?\d)vw/g,r=[];for(let l;l=n.exec(a);l)r.push(parseInt(l[2]));if(r.length){let o=.01*Math.min(...r);return{widths:s.filter(e=>e>=i[0]*o),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let d=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:d,kind:"x"}}(t,s,r),c=o.length-1;return{sizes:r||"w"!==d?r:"100vw",srcSet:o.map((e,i)=>"".concat(l({config:t,src:a,quality:n,width:e})," ").concat("w"===d?e:i+1).concat(d)).join(", "),src:l({config:t,src:a,quality:n,width:o[c]})}}({config:M,src:n,unoptimized:p,width:H,quality:et,sizes:m,loader:F}),en=n,er={imageSrcSet:es.srcSet,imageSizes:es.sizes,crossOrigin:O.crossOrigin},el=l.useRef(S);l.useEffect(()=>{el.current=S},[S]);let eo=l.useRef(k);l.useEffect(()=>{eo.current=k},[k]);let ed=i({isLazy:V,imgAttributes:es,heightInt:J,widthInt:H,qualityInt:et,className:w,imgStyle:ea,blurStyle:ei,loading:b,config:M,fill:N,unoptimized:p,placeholder:P,loader:F,srcString:en,onLoadRef:el,onLoadingCompleteRef:eo,setBlurComplete:X,setShowAltText:ee},O);return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,Object.assign({},ed)),j?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+es.src+es.srcSet+es.sizes,rel:"preload",as:"image",href:es.srcSet?void 0:es.src},er))):null)};var i=a(6495).Z,s=a(2648).Z,n=a(1598).Z,r=a(7273).Z,l=n(a(7294)),o=s(a(3121)),d=a(2675),c=a(139),g=a(8730);a(7238);var u=s(a(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function A(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,a,s,n,r,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===a&&r(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,o=!1;s.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>o,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let x=e=>{var{imgAttributes:t,heightInt:a,widthInt:s,qualityInt:n,className:o,imgStyle:d,blurStyle:c,isLazy:g,fill:u,placeholder:f,loading:h,srcString:A,config:x,unoptimized:p,loader:j,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:v,setShowAltText:y,onLoad:C,onError:N}=e,E=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=g?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},E,t,{width:s,height:a,decoding:"async","data-nimg":u?"fill":"1",className:o,loading:h,style:i({},d,c),ref:l.useCallback(e=>{e&&(N&&(e.src=e.src),e.complete&&m(e,A,f,b,w,v,p))},[A,f,b,w,v,N,p]),onLoad(e){let t=e.currentTarget;m(t,A,f,b,w,v,p)},onError(e){y(!0),"blur"===f&&v(!0),N&&N(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:i,blurHeight:s,blurDataURL:n}=e,r=i||t,l=s||a,o=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&s?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function a(e){let{config:t,src:a,width:i,quality:s}=e;return a.endsWith(".svg")&&!t.dangerouslyAllowSVG?a:"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(i,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},5078:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var i=a(5893),s=a(1857),n=a.n(s);a(7294);var r={src:"/_next/static/media/cvpic.b209ab2d.jpg",height:3024,width:4032,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAtwF//8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIRBAADIf/aAAgBAQABPwDsx6AHYaKvsWATn//EABYRAAMAAAAAAAAAAAAAAAAAAAACMv/aAAgBAgEBPwBJP//EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAwEBPwBqf//Z",blurWidth:8,blurHeight:6},l=a(5675),o=a.n(l),d=a(3197),c=a(9008),g=a.n(c);let u=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"jsx-da66b0d7237707f6",children:[(0,i.jsx)(d.Z,{}),(0,i.jsx)("h1",{className:"jsx-da66b0d7237707f6",children:"About"}),(0,i.jsx)(o(),{className:"cv-pic",src:r,alt:"image",height:300,width:250}),(0,i.jsx)("h2",{className:"jsx-da66b0d7237707f6",children:"WORK HISTORY"}),(0,i.jsx)("h3",{className:"jsx-da66b0d7237707f6",children:"Manager"}),(0,i.jsx)("p",{className:"jsx-da66b0d7237707f6",children:"HPT Fitness Studio | April 2022 - Present"}),(0,i.jsx)("p",{className:"jsx-da66b0d7237707f6",children:"Overseeing the daily operation of the gym while doing promotion and marketing. I also handled finances."}),(0,i.jsx)("h3",{className:"jsx-da66b0d7237707f6",children:"Sales Representative"}),(0,i.jsx)("p",{className:"jsx-da66b0d7237707f6",children:"The Sweet Spot Bakery | Jan 2017 - April 2021"}),(0,i.jsx)("p",{className:"jsx-da66b0d7237707f6",children:"My responsibilities included: cold calling, in-person sales meetings with prospective clients. Transport of workers and transport and delivery of goods."}),(0,i.jsx)("h3",{className:"jsx-da66b0d7237707f6",children:"Duty Pilot"}),(0,i.jsx)("p",{className:"jsx-da66b0d7237707f6",children:"Cape Town Flight Training Center | Dec 2018 - Feb 2019"}),(0,i.jsx)("p",{className:"jsx-da66b0d7237707f6",children:"My responsibilities included managing and refueling aircraft, ensuring aircraft are in a serviceable state, responding to client emails and phone calls, dealing with new walk-in clients, administrative oversight, and general operations."}),(0,i.jsx)("h2",{className:"jsx-da66b0d7237707f6",children:"EDUCATIONAL BACKGROUND"}),(0,i.jsxs)("ul",{className:"jsx-da66b0d7237707f6",children:[(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"High School"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Swartland High School | 2016"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Private Pilots License"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Cape Town Flight Training Center | 2011"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Software Engineering Bootcamp"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Hyperion Dev | 2021"})]}),(0,i.jsx)("h2",{className:"jsx-da66b0d7237707f6",children:"SKILLS AND PROFICIENCIES"}),(0,i.jsxs)("ul",{className:"jsx-da66b0d7237707f6",children:[(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Vast computer knowledge and can solve most desktop problems"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Teamwork"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"multitasking, and attention to detail"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Proficient in Python Proficient in Java Proficient in MySQL and NoSQL"}),(0,i.jsx)("li",{className:"jsx-da66b0d7237707f6",children:"Proficient in JavaScript Proficient in Wordpress Web design"})]}),(0,i.jsx)(n(),{id:"da66b0d7237707f6",children:".cv-pic{display:block;margin-left:auto;margin-right:auto}h1{text-align:center}h2{text-align:center}h3{text-align:center}body{background:lightgrey}li{list-style:none}"}),(0,i.jsxs)(g(),{children:[(0,i.jsx)("script",{src:"https://www.googletagmanager.com/gtag/js?id=G-S0ECD82STC",className:"jsx-da66b0d7237707f6"}),(0,i.jsxs)("script",{className:"jsx-da66b0d7237707f6",children:["function gtag() ",dataLayer.push(arguments),"gtag('js', new Date()); gtag('config', 'G-S0ECD82STC'); window.dataLayer = window.dataLayer || [];"]})]})]})});var f=u},5675:function(e,t,a){e.exports=a(9749)}},function(e){e.O(0,[774,823,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);