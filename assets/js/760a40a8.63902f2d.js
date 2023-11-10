"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[1815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||n;return r?i.createElement(m,s(s({ref:t},l),{},{components:r})):i.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<n;d++)s[d]=r[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3324:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(7462),a=(r(7294),r(3905)),n=r(3161);const s={title:"IRIS: I/O Redirection Via Integrated Storage"},o="IRIS: I/O Redirection Via Integrated Storage",c={type:"mdx",permalink:"/research/projects/iris",source:"@site/src/pages/research/projects/iris.mdx",title:"IRIS: I/O Redirection Via Integrated Storage",description:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers,",frontMatter:{title:"IRIS: I/O Redirection Via Integrated Storage"}},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iris-io-redirection-via-integrated-storage"},"IRIS: I/O Redirection Via Integrated Storage"),(0,a.kt)(n.Z,{projectId:"iris",mdxType:"ProjectBadges"}),(0,a.kt)("p",null,"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers,\napplications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized\nfor certain applications but does not perform well for others. IRIS is a unified storage access system that bridges\nthe semantic gap between filesystems and object stores."))}u.isMDXComponent=!0},3161:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(7294),a=r(6010),n=r(866);function s(e){let{addMargin:t=!0,projectId:r}=e;const{isOpenSource:s=!1,isOurs:o=!1}=(0,n.R)(r);return s||o?i.createElement("div",{className:(0,a.Z)(t&&"margin-bottom--md"),style:{lineHeight:1}},o&&i.createElement("span",{className:"badge badge--primary margin-horiz--xs"},"GRC-LED"),s&&i.createElement("span",{className:"badge badge--secondary margin-horiz--xs"},"OPEN SOURCE")):null}},866:(e,t,r)=>{r.d(t,{R:()=>n,Z:()=>a});const i=[{id:"coeus",name:"Coeus",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",shortDescription:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",link:"/research/projects/coeus",isFeatured:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"chronolog",name:"ChronoLog",title:"ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",shortDescription:"HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",link:"/research/projects/chronolog",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"iris",name:"IRIS",title:"IRIS: I/O Redirection Via Integrated Storage",shortDescription:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",link:"/research/projects/iris",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"hermes",name:"Hermes",title:"Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",shortDescription:"To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",link:"/research/projects/hermes",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"dtio",name:"DTIO",title:"DTIO: A Data Task I/O Runtime",shortDescription:"In partnership with Argonne National Laboratory, DTIO investigates the use of a task framework for unifying complex I/O stacks and providing features such as resilience, fault-tolerance, and task replay.",link:"/research/projects/dtio",isFeatured:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"}],a=i;function n(e){return i.find((t=>t.id===e))}}}]);