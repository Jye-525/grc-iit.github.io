"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[3940],{5885:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(7294);var a=s(512),r=s(8264),o=s(5281),l=s(8242),u=s(1059),n=s(197),i=s(2503),c=s(6788);const h={authorListItem:"authorListItem_n3yI"};var g=s(5893);function p(t){let{author:e}=t;return(0,g.jsx)("li",{className:h.authorListItem,children:(0,g.jsx)(c.Z,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,g.jsx)("section",{className:(0,a.Z)("margin-vert--lg",h.authorsListSection),children:(0,g.jsx)("ul",{children:e.map((t=>(0,g.jsx)(p,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const c=(0,l.HV)();return(0,g.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogAuthorsListPage),children:[(0,g.jsx)(r.d,{title:c}),(0,g.jsx)(n.Z,{tag:"blog_authors_list"}),(0,g.jsxs)(u.Z,{sidebar:s,children:[(0,g.jsx)(i.Z,{as:"h1",children:c}),(0,g.jsx)(d,{authors:e})]})]})}},8242:(t,e,s)=>{s.d(e,{HV:()=>u,Wi:()=>l});s(7294);var a=s(5999),r=s(8824);s(5893);function o(){const{selectMessage:t}=(0,r.c)();return e=>t(e,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function l(t){const e=o();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}const u=()=>(0,a.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})}}]);