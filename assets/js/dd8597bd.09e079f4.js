"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52200],{29267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>g,default:()=>b,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var a=n(3905),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(r)for(var n of r(t))d.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),h=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const m={id:"change-password",title:"Change Password",pagination_label:"Change Password",sidebar_label:"Change Password",keywords:["connectivity","connectors","change password"],description:"Change password for an account on the source.",slug:"/connectivity/saas-connectivity/commands/change-password",tags:["Connectivity","Connector Command"]},g=void 0,y={unversionedId:"connectivity/saas-connectivity/connector-commands/change-password",id:"connectivity/saas-connectivity/connector-commands/change-password",title:"Change Password",description:"Change password for an account on the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/change-password.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/change-password",permalink:"/docs/connectivity/saas-connectivity/commands/change-password",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/change-password.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"change-password",title:"Change Password",pagination_label:"Change Password",sidebar_label:"Change Password",keywords:["connectivity","connectors","change password"],description:"Change password for an account on the source.",slug:"/connectivity/saas-connectivity/commands/change-password",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Update",permalink:"/docs/connectivity/saas-connectivity/commands/account-update"},next:{title:"Entitlement List",permalink:"/docs/connectivity/saas-connectivity/commands/entitlement-list"}},w={},v=[{value:"Example StdChangePasswordInput",id:"example-stdchangepasswordinput",level:3},{value:"Example StdChangePasswordOutput",id:"example-stdchangepasswordoutput",level:3},{value:"Description",id:"description",level:2},{value:"The Provisioning Plan",id:"the-provisioning-plan",level:2},{value:"Testing in Identity Security Cloud",id:"testing-in-identity-security-cloud",level:2}],k={toc:v},C="wrapper";function b(e){var t=e,{components:n}=t,s=h(t,["components"]);return(0,a.kt)(C,u(l(l({},k),s),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Input/Output"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Input"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"StdChangePasswordInput")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Output"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"StdChangePasswordOutput")))),(0,a.kt)("h3",l({},{id:"example-stdchangepasswordinput"}),"Example StdChangePasswordInput"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n},\n"password": "newPassword"\n')),(0,a.kt)("h3",l({},{id:"example-stdchangepasswordoutput"}),"Example StdChangePasswordOutput"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),"{\n}\n")),(0,a.kt)("h2",l({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The change password command is triggered in ISC when a user changes their password through ISC. When this occurs, if your source has change password enabled, then you can change the user password on the source system through ISC."),(0,a.kt)("h2",l({},{id:"the-provisioning-plan"}),"The Provisioning Plan"),(0,a.kt)("p",null,"The change password command sends the password change event to your connector whenever a user changes their password through the Password Manager. Handling this even is as simple as implementing a method on the source system that updates a users password"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),".stdChangePassword(async (context: Context, input: StdChangePasswordInput, res: Response<StdChangePasswordOutput>) => {\n    res.send(await myClient.changePassword(input.identity))\n})\n")),(0,a.kt)("h2",l({},{id:"testing-in-identity-security-cloud"}),"Testing in Identity Security Cloud"),(0,a.kt)("p",null,"In order to test in Identity Security Cloud, the source application must be configured so that it is able to accept password change requests through the Password Manager. Once this setup is complete, you can log in as a user whose identity exists in the configured application and change their password in the Password Manager."))}b.isMDXComponent=!0}}]);