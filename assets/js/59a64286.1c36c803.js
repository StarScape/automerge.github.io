"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2140],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Introduction",c={unversionedId:"tutorial/introduction",id:"tutorial/introduction",isDocsHomePage:!1,title:"Introduction",description:"Before getting into the code, we suggest that you sit down for a few minutes to understand some core concepts. If you've used CRDTs before and know how they work, you can safely skip this page. Although we may use terms that are specific to Automerge, these properties are fundamental to building any application using CRDTs.",source:"@site/docs/tutorial/introduction.md",sourceDirName:"tutorial",slug:"/tutorial/introduction",permalink:"/docs/tutorial/introduction",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"5 minute quick start",permalink:"/docs/quickstart"},next:{title:"Setup",permalink:"/docs/tutorial/setup"}},u=[{value:"Build local-first software",id:"build-local-first-software",children:[],level:2},{value:"Changes",id:"changes",children:[],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Before getting into the code, we suggest that you sit down for a few minutes to understand some core concepts. If you've used CRDTs before and know how they work, you can safely skip this page. Although we may use terms that are specific to Automerge, these properties are fundamental to building any application using CRDTs.  "),(0,r.kt)("h2",{id:"build-local-first-software"},"Build local-first software"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Philosophically, if I modify a google doc my computer is asking Google for permission to edit the file. (You can tell because if google\u2019s servers say no, I lose my changes.) In comparison, if I git push to github, I\u2019m only notifying github about the change to my code. My repository is mine. I own all the bits, and all the hardware that houses them. This is how I want all my software to work."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://josephg.com/blog/crdts-are-the-future/"},'"I was wrong, CRDTs are the future"')," by Joseph Gentle"))),(0,r.kt)("p",null,"With Automerge, you can build software that works with or without the Internet. In Automerge, data is stored ",(0,r.kt)("em",{parentName:"p"},"first")," on the user's device, and then ",(0,r.kt)("em",{parentName:"p"},"secondly")," somewhere else. In contrast, an app backed with MongoDB stores the data primarily on a Cloud server. To change a document, you can send an HTTP PUT or POST request to the server. If you're offline, you can't make changes to the database. If you cache a user's requests and send them once you come online, users could accidentally override each other's work. This means that Cloud application require users to be online in order to change or interact with data. The server handles things like race conditions and transactions to ensure that everyone sees the same application state and (hopefully) no one's work gets lost. In contrast, the apps you can build with automerge don't require a server. Instead, every device is a copy of the entire database (or a queried subset or snapshot). "),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("p",null,"To change an Automerge document, you create a ",(0,r.kt)("em",{parentName:"p"},"change"),". This ",(0,r.kt)("em",{parentName:"p"},"change")," is a small set of metadata that describes an update to a data structure within the document. For example, an insertion of an element to a list or deletion of an element from a list are both examples of separate changes. Every change is put in to a local append-only log of changes. "),(0,r.kt)("p",null,"This list of changes is stored locally on the device. When other devices come online, all sides send their changes to each other. Automerge guarantees that any device with the same set of changes will converge to the same state. Additionally, changes are commutative, which means that the order in which they are applied does not matter."),(0,r.kt)("p",null,"Applications built with Automerge are assumed to be ",(0,r.kt)("em",{parentName:"p"},"eventually consistent.")," Users should expect to see the same application state as all other devices, ",(0,r.kt)("strong",{parentName:"p"},"eventually"),". This is a radical shift from how most multi-user applications work today, which require systems to be highly available. "),(0,r.kt)("p",null,"If you're used to building applications with a database in the Cloud, such as PostgreSQL, you'll encounter new and exciting challenges. Building an eventually consistent application will require you to rethink how you typically handle data."),(0,r.kt)("p",null,"Deletion is another instance of a change. Unlike what you might expect from a typical database, a deletion doesn't actually delete the data. For example, in a list, we create a change that marks the element in the list as deleted. This marker makes that element be hidden from view. Thus, user-generated content may be available forever on some devices."))}d.isMDXComponent=!0}}]);