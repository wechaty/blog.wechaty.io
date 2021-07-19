(self.webpackChunk=self.webpackChunk||[]).push([[6507],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||l[m]||i;return a?r.createElement(d,p(p({ref:t},u),{},{components:a})):r.createElement(d,p({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";var r=a(7378);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},4535:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(7378),n=a(4956);var i=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(8944),o="tabItem_c0e5",s="tabItemActive_28AG";var c=37,u=39;var l=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,l=e.values,h=e.groupId,m=e.className,d=i(),w=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,r.useState)(n),b=y[0],v=y[1],g=r.Children.toArray(e.children),k=[];if(null!=h){var N=w[h];null!=N&&N!==b&&l.some((function(e){return e.value===N}))&&v(N)}var P=function(e){var t=e.currentTarget,a=k.indexOf(t),r=l[a].value;v(r),null!=h&&(f(h,r),setTimeout((function(){var e,a,r,n,i,p,o,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,p=window,o=p.innerHeight,c=p.innerWidth,a>=0&&i<=c&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;a=k[r]||k[0];break;case c:var n=k.indexOf(e.target)-1;a=k[n]||k[k.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},m)},l.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,p.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:P,onClick:P},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},4956:function(e,t,a){"use strict";var r=(0,a(7378).createContext)(void 0);t.Z=r},4371:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return h},default:function(){return d}});var r=a(9603),n=a(120),i=(a(7378),a(5318)),p=a(4535),o=a(517),s=["components"],c={title:"Puppet Provider: WeChat",sidebar_label:"WeChat"},u=void 0,l={unversionedId:"puppet-providers/wechat",id:"puppet-providers/wechat",isDocsHomePage:!1,title:"Puppet Provider: WeChat",description:"Wechaty Puppet WeChat",source:"@site/docs/puppet-providers/wechat.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/wechat",permalink:"/docs/puppet-providers/wechat",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/wechat.md",version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1626711643,formattedLastUpdatedAt:"7/19/2021",frontMatter:{title:"Puppet Provider: WeChat",sidebar_label:"WeChat"},sidebar:"docs",previous:{title:"Puppet Providers: Index",permalink:"/docs/puppet-providers/"},next:{title:"Whatsapp",permalink:"/docs/puppet-providers/whatsapp"}},h=[{value:"Features",id:"features",children:[]},{value:"Known Issues",id:"known-issues",children:[]},{value:"Fixed Issues",id:"fixed-issues",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],m={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"wechat"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-WeChat-blueviolet",alt:"Wechaty Puppet WeChat"}))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-wechat/HEAD/docs/images/wechaty-puppet-wechat.png",alt:"Wechaty Puppet WeChat"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-wechat"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-wechat.svg",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-wechat?activeTab=versions"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-wechat/next.svg",alt:"npm (tag)"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Repo: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat"},"https://github.com/wechaty/wechaty-puppet-wechat")),(0,i.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat/issues"},"https://github.com/wechaty/wechaty-puppet-wechat/issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"Go Wecahty and WeChat Web Protocol, @dchaofei, Apr 16, 2021"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"This is a full-featured Wechaty Puppet."),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"WeChat Account that registered after 2017 might not be able to login Web Wechat, so it can not use wechaty-puppet-wechat with Wechaty. Please make sure your WeChat Account can be able to login by visiting ",(0,i.kt)("a",{parentName:"p",href:"https://web.wechat.com"},"Web WeChat")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Web API can not create room and invite members to room since 2018."),(0,i.kt)("li",{parentName:"ol"},"The ID of contacts and rooms will change across sessions. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1644"},"#1644"))),(0,i.kt)("h2",{id:"fixed-issues"},"Fixed Issues"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("del",{parentName:"li"},"Can not login with error message: \u5f53\u524d\u767b\u5f55\u73af\u5883\u5f02\u5e38\u3002\u4e3a\u4e86\u4f60\u7684\u5e10\u53f7\u5b89\u5168\uff0c\u6682\u65f6\u4e0d\u80fd\u767b\u5f55web\u5fae\u4fe1\u3002",(0,i.kt)("a",{parentName:"del",href:"https://github.com/wechaty/wechaty/issues/603"},"#603")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"New account login issue ",(0,i.kt)("a",{parentName:"del",href:"https://github.com/wechaty/wechaty/issues/872"},"#872"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"[RUMOR]",": wechat will close web api for wechat ",(0,i.kt)("a",{parentName:"del",href:"https://github.com/wechaty/wechaty/issues/990"},"#990"))),(0,i.kt)("li",{parentName:"ul"},"Fixed by: Can we support UOS with puppeteer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat/issues/127"},"#127"))))),(0,i.kt)("p",null,"If you want to break the above limitations, then you need consider to use a Wechaty Puppet other than Web. Learn them from ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Providers"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(p.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n"))),(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nset WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n")))),(0,i.kt)("h2",{id:"blogs"},"Blogs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/17/python-wechaty-use-web/"},"\u6559\u4f60\u7528python-wecahty\u548cweb\u534f\u8bae\u5f00\u53d1\u673a\u5668\u4eba, @wj-Mcat, Apr 17, 2021")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"\u6559\u4f60\u7528go-wecahty\u548cweb\u534f\u8bae\u5f00\u53d1\u673a\u5668\u4eba, @dchaofei, Apr 16, 2021"))),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/13/wechaty-uos-web/"},"\u91cd\u78c5\uff1a\u4f7f\u7528UOS\u5fae\u4fe1\u684c\u9762\u7248\u534f\u8bae\u767b\u5f55\uff0cwechaty\u514d\u8d39\u7248web\u534f\u8bae\u91cd\u653e\u8363\u5149, @gengchen528, Apr 13, 2021")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/"},"Wechaty New Version 0.16(BETA, with super power) Released, @huan, Jun 21, 2018"))),(0,i.kt)("h2",{id:"maintainers"},"Maintainers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0},8944:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);