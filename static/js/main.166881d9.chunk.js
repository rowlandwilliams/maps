(this["webpackJsonpmaps-portfolio"]=this["webpackJsonpmaps-portfolio"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){var r={"./satopo.png":159,"./trase.png":160,"./usrivers.png":161};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=158},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/satopo.0a51ed49.png"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/trase.de19fa82.png"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/usrivers.ec54436c.png"},162:function(e,t,n){var r={"./satopo0.png":163,"./satopo1.png":164,"./satopo2.png":165,"./satopo3.png":166,"./satopo4.png":167,"./usrivers0.png":168,"./usrivers1.png":169};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=162},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/satopo0.d6117dbf.png"},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/satopo1.838395f7.png"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/satopo2.f2229dba.png"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/satopo3.686286b7.png"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/satopo4.9c25403b.png"},168:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/usrivers0.6aa9fabd.png"},169:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/usrivers1.247b80e5.png"},170:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(55),c=n.n(a),s=(n(145),n(146),n(6)),o=n(2),l=n(56),d=n.n(l),u=n(0),p=function(e){var t=e.optionPath,n=e.optionLabel,r=e.isActive;return Object(u.jsx)(s.b,{to:t,className:d()("px-2 transition-all duration-150 text-black",{"text-opacity-40":!r,"pointer-events-none":r}),children:n})},j=[{optionPath:"/",optionLabel:"Maps"},{optionPath:"/about",optionLabel:"About"}],m=function(){var e=Object(o.f)();return Object(u.jsx)("div",{className:"flex justify-between text-xs",children:j.map((function(t){return Object(u.jsx)(p,{optionPath:t.optionPath,optionLabel:t.optionLabel,isActive:t.optionPath===e.pathname},t.optionLabel)}))})},h=function(){return Object(u.jsx)("div",{className:"md:pt-4 md:pb-2",children:"Rowland Williams"})},f=n(3),b=n(23),x=[f.e,f.d,f.f,f.b,f.c,f.g],g=x[Math.floor(Math.random()*x.length)],v=function(e){return e?"M"+e.join("L")+"Z":null},O=function(e,t,n,r,i){return Object(f.h)(0,e).map((function(e){return[Math.floor(Math.random()*(n-t))+t,Math.floor(Math.random()*(i-r))+r]}))},w=function(e,t,n){var r=e-1;Object(f.j)('path[data-level="'+r+'"]').each((function(i,a){var c=this.getBBox(),s=O(2*e,c.x,c.x+c.width,c.y,c.y+c.height),o=Object(b.a)().extent([[c.x,c.y],[c.x+c.width,c.y+c.height]]).polygons(s);y(Object(f.i)(this.parentNode),o,"cp-"+r+"-"+a,e,n,!0),function(e,t,n){n.append("clipPath").attr("id",t).append("path").attr("d",v(e))}(i,"cp-"+r+"-"+a,t)}))},y=function(e,t,n,r,i,a){if(i)var c=x[Math.floor(Math.random()*x.length)];e.insert("g",":first-child").attr("clip-path",(function(e){return n?"url(#"+n+")":""})).attr("class","polygons").selectAll("path").data(t).enter().insert("path").attr("data-level",r).attr("stroke-width",(function(){return 4/(2*(r+1))})).attr("stroke",(function(){Object(f.a)("#000").brighter(r)})).attr("fill",(function(){return 0===r?"":i?c(Math.random()):g(Math.random())})).attr("fill-opacity","0.4").attr("d",v)},N=Object(b.a)().extent([[0,0],[96,96]]),k=function(e,t){var n=N(t).polygons(),r=Object(f.i)("#polygon-group");r.selectAll("g").remove();var i=Object(f.i)(".chart").append("defs");y(r,n,void 0,0,e);w(1,i,e);w(2,i,e)},P=(n(157),Math.random()<.5),S=O(5,0,64,0,64),T=function(){return Object(r.useEffect)((function(){k(P,S)})),Object(u.jsx)("div",{className:"w-10 h-10 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-150 border-2 border-gray-800 hover:border-white ",children:Object(u.jsxs)("svg",{width:"100%",height:"100%",className:"chart",children:[Object(u.jsx)("defs",{children:Object(u.jsx)("clipPath",{id:"rect-clip",children:Object(u.jsx)("rect",{width:65,height:65,rx:"5px",ry:"5px",stroke:"none"})})}),Object(u.jsx)("g",{id:"polygon-group",clipPath:"url(#rect-clip)",transform:"translate(-1,-1)"})]})})},L=function(){return Object(u.jsxs)("div",{className:"w-full flex md:flex-col justify-between items-center",children:[Object(u.jsxs)(s.b,{to:"/",className:"flex md:flex-col items-center",children:[Object(u.jsx)(T,{}),Object(u.jsx)(h,{})]}),Object(u.jsx)(m,{})]})},M=function(e,t){return e.keys().map((function(n){return{slug:n.substr(2).replace(t,""),module:e(n)}}))},A=[{projectTitle:"SOUTH AUSTRALIAN TOPOGRAPHY",imgSlug:"satopo",projectDescription:["Topographic patterns from the Barwon South West region of Australia's Victoria State.","Created using data from vic.gov.au licensed under CC BY 4.0","2021 / RTNW Maps"]},{projectTitle:"US RIVERS",imgSlug:"usrivers",projectDescription:["Spatial distribution of primary and secondary rivers in the USA.","Created using data from the National Operational Hydrologic Remote Sensing Center.","2021 / RTNW Maps"]},{projectTitle:"SUPPLY CHAIN MAPPING",imgSlug:"trase",projectDescription:["Topograhic patterns of the Barwon South West area of Australia's Victoria State"]}],U=function(e){var t=e.projectTitle,n=e.projectThumbnail;return Object(u.jsx)(s.b,{to:n.slug,onClick:function(){return k(P,S)},children:Object(u.jsxs)("div",{className:"flex flex-col items-center md:mx-4",children:[Object(u.jsx)("div",{className:"w-80 h-80 transition-opacity duration-150 hover:opacity-90 overflow-hidden",children:Object(u.jsx)("img",{src:n.module.default,alt:n.slug})}),Object(u.jsx)("div",{className:"py-2 text-2xs",children:t})]})})},C=M(n(158),".png"),D=function(){return Object(u.jsx)("div",{className:"md:flex justify-center flex-wrap py-8 w-full xl:px-24 ",children:A.map((function(e){return Object(u.jsx)(U,{projectTitle:e.projectTitle,projectThumbnail:C.filter((function(t){var n=new RegExp(e.imgSlug,"g");return t.slug.match(n)}))[0]},e.projectTitle)}))})},R=function(){return Object(u.jsxs)("div",{className:"border-gray-400 border-t-1 py-8 px-2 md:px-0",children:[Object(u.jsx)("div",{className:"text-base font-inter-medium pb-4",children:"About Rowland"}),Object(u.jsxs)("div",{className:"text-sm",children:[Object(u.jsx)("div",{className:"py-2",children:"Rowland is an independent cartographic and information designer with extensive technical knowledge of data visualization."}),Object(u.jsx)("div",{className:"py-2",children:"He has over three years experience in the design and visualization space and a first-class master\u2019s degree from University College London (UCL) in Spatial Ecology. His work combines data science, graphic design, software development, and geographic information systems (GIS) and its primary objective is to leverage the value hidden within data through visually impressive experiences."}),Object(u.jsx)("div",{className:"py-2",children:"He has helped clients in the NGO, start-up, and environmental spaces with various design projects, involving cartography and map making, web application development, visualisation design for reports and creative direction."})]})]})},E=[{columnTitle:"Data Visualisation + Cartography",columnProjects:[{clientName:"Supernova AI",clientUrl:"https://www.supernova.ai/"},{clientName:"Kwolco Ltd",clientUrl:"https://www.kwolco.com/"},{clientName:"Farming the Future",clientUrl:"https://www.farmingthefuture.uk/"},{clientName:"Global Canopy",clientUrl:"https://globalcanopy.org/"},{clientName:"Matthew Shribman",clientUrl:"https://www.matthewshribman.com/"}]},{columnTitle:"Graphic Design + Illustration",columnProjects:[{clientName:"Herv\xe9 Surfboards",clientUrl:"https://www.hervesurfboards.com/"}]}],I=function(e){var t=e.columnTitle,n=e.columnProjects;return Object(u.jsxs)("div",{className:"py-2 text-sm mr-4",children:[Object(u.jsx)("div",{className:"font-inter-medium",children:t}),Object(u.jsx)("div",{className:"py-2",children:n.map((function(e){return Object(u.jsx)("div",{className:"hover:underline",children:Object(u.jsx)("a",{href:e.clientUrl,target:"_blank",rel:"noreferrer noopener",children:e.clientName})},e.clientName)}))})]})},H=function(){return Object(u.jsxs)("div",{className:"border-gray-400 border-t-1 py-8 px-2 md:px-0",children:[Object(u.jsx)("div",{className:"text-base font-inter-medium pb-4",children:"Clients & Experience"}),Object(u.jsx)("div",{className:"flex",children:E.map((function(e){return Object(u.jsx)(I,{columnTitle:e.columnTitle,columnProjects:e.columnProjects},e.columnTitle)}))})]})},B=function(){return Object(u.jsxs)("div",{className:"block mx-auto py-8 h-screen  w-full lg:px-16 xl:w-3/4",children:[Object(u.jsx)(R,{}),Object(u.jsx)(H,{})]})},G=function(e){var t=e.projectDescriptionArray;return Object(u.jsx)("div",{className:"md:pl-4 mb-4",children:t.map((function(e){return Object(u.jsx)("div",{className:"pb-2",children:e})}))})},F=function(e){var t=e.previousProjectLink,n=e.nextProjectLink;return Object(u.jsxs)("div",{className:"flex justify-between",children:[Object(u.jsx)(s.b,{to:"/",children:"\u2190 Back to Maps"}),Object(u.jsxs)("div",{className:"flex",children:[t?Object(u.jsx)(s.b,{to:t,className:"mx-2",children:"\u2190 prev"}):Object(u.jsx)("div",{className:"mx-2 opacity-50",children:" \u2190 prev"}),Object(u.jsx)("div",{children:"/"}),n?Object(u.jsx)(s.b,{to:n,className:"mx-2",children:"next \u2192"}):Object(u.jsx)("div",{className:"mx-2 opacity-50",children:"next \u2192"})]})]})},W=function(e){var t=e.projectDescriptionArray,n=e.projectImages,r=e.previousProjectLink,i=e.nextProjectLink;return Object(u.jsxs)("div",{className:"text-xs",children:[Object(u.jsxs)("div",{className:"flex flex-col-reverse md:flex-row py-8",children:[Object(u.jsx)("div",{className:"md:w-1/2 flex justify-end",children:Object(u.jsx)("div",{className:"w-full md:w-600",children:n.map((function(e){return Object(u.jsx)("img",{src:e.module.default,alt:e.slug,className:"mb-2"})}))})}),Object(u.jsx)(G,{projectDescriptionArray:t})]}),Object(u.jsx)(F,{previousProjectLink:r,nextProjectLink:i})]})},_=M(n(162),".png"),V=A.length,Y=function(){return Object(u.jsx)(u.Fragment,{children:A.map((function(e,t){return Object(u.jsx)(o.a,{path:"/"+e.imgSlug,children:Object(u.jsx)(W,{projectDescriptionArray:e.projectDescription,projectImages:_.filter((function(t){var n=new RegExp(e.imgSlug,"g");return t.slug.match(n)})),previousProjectLink:0!==t?A[t-1].imgSlug:null,nextProjectLink:t!==V-1?A[t+1].imgSlug:null},e.imgSlug)})}))})};var z=function(){return Object(u.jsx)("div",{className:"p-2 md:p-16 font-inter-light text-lg text-gray-800",children:Object(u.jsxs)(s.a,{basename:"/maps",children:[Object(u.jsx)(L,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(D,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/about",children:Object(u.jsx)(B,{})}),Object(u.jsx)(Y,{})]})]})})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.166881d9.chunk.js.map