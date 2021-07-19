(self.webpackChunk=self.webpackChunk||[]).push([[1538],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,g=h["".concat(s,".").concat(u)]||h[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1766:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(9603),o=n(120),r=(n(7378),n(5318)),i=["components"],l={title:"Using Plugin with Wechaty"},s=void 0,c={unversionedId:"tutorials/using-plugin-with-wechaty",id:"tutorials/using-plugin-with-wechaty",isDocsHomePage:!1,title:"Using Plugin with Wechaty",description:"Wechaty Plugin Contrib",source:"@site/docs/tutorials/using-plugin-with-wechaty.md",sourceDirName:"tutorials",slug:"/tutorials/using-plugin-with-wechaty",permalink:"/docs/tutorials/using-plugin-with-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/tutorials/using-plugin-with-wechaty.md",version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1626711643,formattedLastUpdatedAt:"7/19/2021",frontMatter:{title:"Using Plugin with Wechaty"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Plugins Contrib",id:"plugins-contrib",children:[{value:"1 DingDong",id:"1-dingdong",children:[]},{value:"2 EventLogger",id:"2-eventlogger",children:[]},{value:"3 QR Code Terminal",id:"3-qr-code-terminal",children:[]},{value:"4 Heartbeat",id:"4-heartbeat",children:[]},{value:"5 ChatOps",id:"5-chatops",children:[]},{value:"6 <code>RoomConnector</code>(s)",id:"6-roomconnectors",children:[]},{value:"7 FriendshipAccepter",id:"7-friendshipaccepter",children:[]},{value:"8 RoomInviter",id:"8-roominviter",children:[]},{value:"9 EventHotHandler",id:"9-eventhothandler",children:[]},{value:"10 RoomInvitationAccepter",id:"10-roominvitationaccepter",children:[]},{value:"11 MessageAwaiter",id:"11-messageawaiter",children:[]}]},{value:"Wechaty Plugin Directory",id:"wechaty-plugin-directory",children:[]},{value:"History",id:"history",children:[]}],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Contrib-brightgreen.svg",alt:"Wechaty Plugin Contrib"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-plugin-contrib?color=brightgreen",alt:"NPM Version"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib/actions?query=workflow%3ANPM"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-plugin-contrib/workflows/NPM/badge.svg",alt:"NPM"}))),(0,r.kt)("p",null,"Wechaty Plugin Contrib Package for the Community"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-plugin-contrib/images/plugin.png",alt:"Wechaty Plugin"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Image Credit: ",(0,r.kt)("a",{parentName:"p",href:"https://www.computerhope.com/jargon/p/plugin.htm"},"What is Plugin"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"When you find yourself writing repetitive code, it's time to extract it into a plugin."),(0,r.kt)("p",null,"Wechaty has a great support for using Plugins by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Wechaty.use(WechatyPlugin())"),". A Wechaty Plugin is a JavaScript function that returns a function which accepts a Wechaty instance."),(0,r.kt)("p",null,"The first Wechaty Plugin system was design by our core team developer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gcaufy"},"@gcaufy")," from issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/1939"},"#1939"),"(Wechaty Plugin Support with Kick out Example) to PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/pull/1946"},"#1946"),"(feat: added wechaty plugin)."),(0,r.kt)("p",null,"This package is for publishing the Wechaty Plugins that are very common used by the core developer team."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wechaty v0.40 or above versions")),(0,r.kt)("h2",{id:"plugins-contrib"},"Plugins Contrib"),(0,r.kt)("p",null,"You are welcome to send your plugin to our contrib by creating a Pull Request!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"#"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Plugin"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Author"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DingDong"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reply ",(0,r.kt)("inlineCode",{parentName:"td"},"dong")," if bot receives a ",(0,r.kt)("inlineCode",{parentName:"td"},"ding")," message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EventLogger"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log Wechaty Events for ",(0,r.kt)("inlineCode",{parentName:"td"},"'scan' \\| 'login' \\| 'message'")," ... etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"QRCodeTerminal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show QR Code for Scan in Terminal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Send emoji periodically")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ChatOps"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forward DM & Mention messages to a room")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RoomConnector"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Connect rooms together with ",(0,r.kt)("inlineCode",{parentName:"td"},"1:N"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"M:1"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"M:N")," modes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FriendshipAccepter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Accept friendship automatically, and say/do something for greeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RoomInviter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invite user to rooms by keyword")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EventHotHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hot reloading event handler module files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RoomInvitationAccepter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Automatically accepting any room invitations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MessageAwaiter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"@ssine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wait for a particular message using ",(0,r.kt)("inlineCode",{parentName:"td"},"await")," syntax ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty-plugin-contrib/issues/13"},"#13"))))),(0,r.kt)("h3",{id:"1-dingdong"},"1 DingDong"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description: Reply ",(0,r.kt)("inlineCode",{parentName:"li"},"dong")," if bot receives a ",(0,r.kt)("inlineCode",{parentName:"li"},"ding")," message."),(0,r.kt)("li",{parentName:"ul"},"Author: @huan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DingDong } from 'wechaty-plugin-contrib'\n\nconst config = {\n  mention : true,    // default: true - Response to Mention Self (@/at) Message in Room\n  contact : true,    // default: true - Response to Direct Message\n  room    : true,    // default: true - Response to Rooms Message\n  self    : true,    // default: true - Response to Message that send from the bot itself\n}\n\nwechaty.use(DingDong(config))\n")),(0,r.kt)("h4",{id:"config-as-a-function"},(0,r.kt)("inlineCode",{parentName:"h4"},"config")," as a Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config")," can also be a function which receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"message: Message")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," result to decide whether response a ",(0,r.kt)("inlineCode",{parentName:"p"},"ding")," message."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Config: (message: Message) => boolean | Promise<boolean>")),(0,r.kt)("h3",{id:"2-eventlogger"},"2 EventLogger"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description: Log Wechaty Events: ",(0,r.kt)("inlineCode",{parentName:"li"},'"dong" | "message" | "error" | "friendship" | "heartbeat" | "login" | "logout" | "ready" | "reset" | "room-invite" | "room-join" | "room-leave" | "room-topic" | "scan"')),(0,r.kt)("li",{parentName:"ul"},"Author: @huan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { EventLogger } from 'wechaty-plugin-contrib'\nconst config = ['login', 'ready', 'message']\n// Do not provide an config will log all events.\nwechaty.use(EventLogger(config))\n")),(0,r.kt)("h3",{id:"3-qr-code-terminal"},"3 QR Code Terminal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description: Show QR Code for Scan in Terminal"),(0,r.kt)("li",{parentName:"ul"},"Author: @huan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { QRCodeTerminal } from 'wechaty-plugin-contrib'\nconst config = {\n  small: false,   // default: false - the size of the printed QR Code in terminal\n}\nwechaty.use(QRCodeTerminal(config))\n")),(0,r.kt)("h3",{id:"4-heartbeat"},"4 Heartbeat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description: Send emoji periodically"),(0,r.kt)("li",{parentName:"ul"},"Author: @huan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Heartbeat } from 'wechaty-plugin-contrib'\nconst config = {\n  contact: 'filehelper',    // default: filehelper - Contact id who will receive the emoji\n  emoji: {\n    heartbeat: '[\u7231\u5fc3]',    // default: [\u7231\u5fc3] - Heartbeat emoji\n  },\n  intervalSeconds: 60 * 60, // Default: 1 hour - Send emoji for every 1 hour\n}\nwechaty.use(Heartbeat(config))\n")),(0,r.kt)("h3",{id:"5-chatops"},"5 ChatOps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description: Forward DM & Mention messages to a ChatOps room for logging."),(0,r.kt)("li",{parentName:"ul"},"Author: @huan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ChatOps } from 'wechaty-plugin-contrib'\n\nconst config = {\n  room : 'xxx@chatroom',      // required: room id for ChatOps\n  mention?  : true,                // default: true - Response to Mention Self (@/at) Message in Room\n  contact?  : true,                // default: true - Response to Direct Message\n  whitelist?: ChatOpsFilter,  // whitelist for messages that allow to send to ChatOps Room\n  blacklist?: ChatOpsFilter,  // blacklist for messages that forbidden to send to ChatOps Room\n}\n\nwechaty.use(ChatOps(config))\n")),(0,r.kt)("h3",{id:"6-roomconnectors"},"6 ",(0,r.kt)("inlineCode",{parentName:"h3"},"RoomConnector"),"(s)"),(0,r.kt)("p",null,"Connect rooms together, it supports three modes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"1:N")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"OneToManyRoomConnector")," can broadcast the messages in one room to others."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"M:1")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"ManyToOneRoomConnector")," can summary messages from rooms into one room."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"M:N")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"ManyToManyRoomConnector")," will broadcast every message in any room to all other rooms.")),(0,r.kt)("h4",{id:"61-onetomanyroomconnector"},"6.1 ",(0,r.kt)("inlineCode",{parentName:"h4"},"OneToManyRoomConnector()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OneToManyRoomConnector, OneToManyRoomConnectorConfig } from 'wechaty-plugin-contrib'\nconst config: OneToManyRoomConnectorConfig = {\n  blacklist: [ async () => true ],\n  many: [\n    '20049383519@chatroom',     // \u5c0f\u53e5\u5b50\u6d4b\u8bd5\n    '5611663299@chatroom',      // 'ChatOps - Mike BO'\n  ],\n  map: async message => message.from()?.name() + '(one to many): ' + message.text(),\n  one: '17237607145@chatroom',  // PreAngel \u52a8\u6001\n  whitelist: [ async message => message.type() === Message.Type.Text ],\n}\nwechaty.use(OneToManyRoomConnector(config))\n")),(0,r.kt)("h4",{id:"62-manytooneroomconnector"},"6.2 ",(0,r.kt)("inlineCode",{parentName:"h4"},"ManyToOneRoomConnector()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ManyToOneRoomConnector, ManyToOneRoomConnectorConfig } from 'wechaty-plugin-contrib'\nconst config: ManyToOneRoomConnectorConfig = {\n  blacklist: [ async () => true ],\n  many: [\n    '20049383519@chatroom',     // \u5c0f\u53e5\u5b50\u6d4b\u8bd5\n    '5611663299@chatroom',      // 'ChatOps - Mike BO'\n  ],\n  map: async message => message.from()?.name() + '(many to one): ' + message.text(),\n  one: '17237607145@chatroom',  // PreAngel \u52a8\u6001\n  whitelist: [ async message => message.type() === Message.Type.Text ],\n}\nwechaty.use(ManyToOneRoomConnector(config))\n")),(0,r.kt)("h4",{id:"63-manytomanyroomconnector"},"6.3 ",(0,r.kt)("inlineCode",{parentName:"h4"},"ManyToManyRoomConnector()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ManyToManyRoomConnector, ManyToManyRoomConnectorConfig } from 'wechaty-plugin-contrib'\nconst config: ManyToManyRoomConnectorConfig = {\n  blacklist: [ async () => true ],\n  many: [\n    '20049383519@chatroom',     // \u5c0f\u53e5\u5b50\u6d4b\u8bd5\n    '5611663299@chatroom',      // 'ChatOps - Mike BO'\n  ],\n  map: async message => message.from()?.name() + '(many to many): ' + message.text(),\n  whitelist: [ async message => message.type() === Message.Type.Text ],\n}\nwechaty.use(ManyToManyRoomConnector(config))\n")),(0,r.kt)("h3",{id:"7-friendshipaccepter"},"7 FriendshipAccepter"),(0,r.kt)("p",null,"Accept friendship automatically, and say/do something for greeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { FriendshipAccepter, FriendshipAccepterConfig } from 'wechaty-plugin-contrib'\nconst config: FriendshipAccepterConfig = {\n  greeting: 'we are friends now!',\n  keyword: '42',\n}\nwechaty.use(FriendshipAccepter(config))\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"greeting")," will be sent after the friendship has been accepted."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"keyword")," if set, the friendship must match the ",(0,r.kt)("inlineCode",{parentName:"li"},"keyword")," text.")),(0,r.kt)("h3",{id:"8-roominviter"},"8 RoomInviter"),(0,r.kt)("p",null,"Invite a contact to the room with ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome"),"(public message), and ",(0,r.kt)("inlineCode",{parentName:"p"},"rule"),"(private message) options supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RoomInviter, RoomInviterConfig } from 'wechaty-plugin-contrib'\nconst config: RoomInviterConfig = {\n  password : 'wechaty',\n  room     : '18171595067@chatroom',\n  welcome  : 'Welcome to join the room!',\n  rule     : 'Please be a good people',\n  repeat   : 'You have already in our room',\n}\nwechaty.use(RoomInviter(config))\n")),(0,r.kt)("h3",{id:"9-eventhothandler"},"9 EventHotHandler"),(0,r.kt)("p",null,"Hot reloading event handler module files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { EventHotHandler, EventHotHandlerConfig } from 'wechaty-plugin-contrib'\nconst config: EventHotHandlerConfig = {\n  login: './handlers/on-login',\n  logout: './handlers/on0-logout',\n}\nwechaty.use(EventHotHandler(config))\n")),(0,r.kt)("h3",{id:"10-roominvitationaccepter"},"10 RoomInvitationAccepter"),(0,r.kt)("p",null,"Automatically accepting any room invitations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RoomInvitationAccepter } from 'wechaty-plugin-contrib'\nwechaty.use(RoomInvitationAccepter())\n")),(0,r.kt)("h3",{id:"11-messageawaiter"},"11 MessageAwaiter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description: Wait for a particular message using ",(0,r.kt)("inlineCode",{parentName:"li"},"await")," syntax (",(0,r.kt)("inlineCode",{parentName:"li"},"await bot.waitForMessage(...)"),")."),(0,r.kt)("li",{parentName:"ul"},"Author: @ssine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MessageAwaiter } from 'wechaty-plugin-contrib'\nwechaty.use(MessageAwaiter())\n\nwechaty.on('message' async (message) => {\n  if (message.text() === 'whatever triggers the dialog') {\n    await message.say('hint message')\n\n    // wait for the reply from the same sender\n    let reply = await wechaty.waitForMessage({ contact: msg.from()?.id, room: msg.room()?.id })\n\n    // do anything you want...\n  }\n})\n")),(0,r.kt)("p",null,"Other arguments include ",(0,r.kt)("inlineCode",{parentName:"p"},"regex")," which is tested on the message and ",(0,r.kt)("inlineCode",{parentName:"p"},"timeoutSecond")," which automatically rejects the dialog after specified seconds."),(0,r.kt)("p",null,"Learn more from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib/issues/13"},"New Plugin: Message Awaiter #13")),(0,r.kt)("h2",{id:"wechaty-plugin-directory"},"Wechaty Plugin Directory"),(0,r.kt)("p",null,"The Wechaty Plugin Contrib will only accept simple plugins which does not dependence very heavy NPM modules, and the SLOC (Source Line Of Code) is no more than 100."),(0,r.kt)("p",null,"There are many great Wechaty Plugins can not be included in the contrib because they are too powerful. They will be published as a NPM by itself."),(0,r.kt)("p",null,"We are listing those powerful Wechaty Plugins outside the contrib as in the following list, and you are welcome to add your plugin below if you have published any!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib#wechaty-plugin-directory"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Directory-brightgreen.svg",alt:"Wechaty Plugin Contrib"}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Gcaufy/wechaty-voteout"},"VoteOut Plugin")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gcaufy"},"@gcaufy")," - help you to have a vote and kick out feature for you room."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Gcaufy/wechaty-schedule"},"Schedule")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gcaufy"},"@gcaufy")," - easily schedule jobs for your Wechaty bots."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-got-kicked-out"},"GotKicked")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JesseWeb"},"@JesseWeb")," - monitor whether your bot got kicked out of group chat. Just few line of code to implement this instead fussy judging."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gengchen528/wechaty-web-panel"},"WebPanel")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/leochen-g"},"@Leo_chen")," - help you quickly access the web panel"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-intercom"},"Intercom")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - helps you to manage your customers/leads/users in the WeChat Room, with the power of the Intercom service."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-vorpal"},"Wechaty Vorpal")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - CLI for Chatbot - Extensible Commands for ChatOps, Powered by Vorpal."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-freshdesk"},"Freshdesk")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - Managing Conversations in WeChat Rooms by Freshdesk."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-qnamaker"},"QnAMaker")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - Wechaty QnAMaker Plugin helps you to answer questions in WeChat with the power of ",(0,r.kt)("a",{parentName:"li",href:"https://QnAMaker.ai"},"https://QnAMaker.ai"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-weixin-openai"},"Weixin OpenAI")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/windmemory"},"@windmemory")," - Wechaty Weixin OpenAI Plugin helps you to answer questions in WeChat with the power of ",(0,r.kt)("a",{parentName:"li",href:"https://openai.weixin.qq.com"},"https://openai.weixin.qq.com"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chs97/wechaty-plugin-youdao"},"YouDao Translate")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chs97"},"@Chs97")," - Wechaty YouDao Translate Plugin helps you to translate word in WeChat with the power of ",(0,r.kt)("a",{parentName:"li",href:"https://ai.youdao.com/"},"https://ai.youdao.com/"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/archywillhe/wechaty-log-monitor"},"Log Monitor")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/archywillhe"},"@ArchyWillHe")," - For log-related DevOps using only WeChat! Fully functional! Very loose coupling! Pretty much pure (other than side effects in I.O.)! Also contains features like QR Rescue (aka \u6389\u7ebf\u7ed9\u7801) for 2 Wechaties to rescue one another when one is disconnected from the grpc server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/watertao/wechaty-plugin-xyao"},"Wechaty Xyao")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/watertao"},"@watertao")," - Wechaty Xyao Plugin gives bot ability to execute instruction with distributed brain module.")),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wechaty Plugin Support with Kickout Example ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1939"},"#1939")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/22/wechaty-plugin-milestone/"},"Wechaty\u63d2\u4ef6\u7cfb\u7edf\u53d1\u5e03\uff0c\u8ba9\u4f60\u7684\u673a\u5668\u4eba\u5feb\u901f\u63a5\u5165\u590d\u6742\u7ba1\u7406\u548c\u667a\u80fd\u5bf9\u8bdd\u80fd\u529b, @rickyyin98, Jul 22, 2020")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://wechaty.js.org/2020/07/19/wechaty-plugin-youdao/"},"\u6709\u9053\u667a\u4e91\u7ffb\u8bd1\u63d2\u4ef6, @chs97, Jul 19, 2020"))))}h.isMDXComponent=!0}}]);