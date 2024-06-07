"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58041],{98460:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>y,default:()=>x,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))l.call(e,n)&&u(t,n,e[n]);if(o)for(var n of o(e))d.call(e,n)&&u(t,n,e[n]);return t},p=(t,e)=>r(t,s(e)),c=(t,e)=>{var n={};for(var a in t)l.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n};const g={id:"identity-context",title:"Identity Attribute Context in Transforms",pagination_label:"Identity Attribute Context",sidebar_label:"Identity Attribute Context",sidebar_class_name:"identityContextTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Examples on how you might use the identity attribute context.",sidebar_position:5,slug:"/extensibility/transforms/guides/identity-context-examples",tags:["Transforms","Guides","identity"]},y=void 0,f={unversionedId:"extensibility/transforms/guides/identity-context",id:"extensibility/transforms/guides/identity-context",title:"Identity Attribute Context in Transforms",description:"Examples on how you might use the identity attribute context.",source:"@site/docs/extensibility/transforms/guides/identity-context.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides/identity-context-examples",permalink:"/docs/extensibility/transforms/guides/identity-context-examples",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/identity-context.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Guides",permalink:"/docs/tags/guides"},{label:"identity",permalink:"/docs/tags/identity"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:5,frontMatter:{id:"identity-context",title:"Identity Attribute Context in Transforms",pagination_label:"Identity Attribute Context",sidebar_label:"Identity Attribute Context",sidebar_class_name:"identityContextTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Examples on how you might use the identity attribute context.",sidebar_position:5,slug:"/extensibility/transforms/guides/identity-context-examples",tags:["Transforms","Guides","identity"]},sidebar:"openApiSidebar",previous:{title:"Lifecycle State Transform",permalink:"/docs/extensibility/transforms/guides/lifecycle-state-transform"},next:{title:"Operations",permalink:"/docs/extensibility/transforms/operations"}},h={},b=[{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2},{value:"Get the ID of the identity&#39;s manager",id:"get-the-id-of-the-identitys-manager",level:3},{value:"Get the custom attribute of the identity&#39;s manager",id:"get-the-custom-attribute-of-the-identitys-manager",level:3},{value:"Get manager status of the identity&#39;s manager",id:"get-manager-status-of-the-identitys-manager",level:3},{value:"Get an identity&#39;s accounts",id:"get-an-identitys-accounts",level:3},{value:"Get a comma separated list of account names from an application/source",id:"get-a-comma-separated-list-of-account-names-from-an-applicationsource",level:3},{value:"Notes",id:"notes",level:2}],k={toc:b},v="wrapper";function x(t){var e=t,{components:n}=e,i=c(e,["components"]);return(0,a.kt)(v,p(m(m({},k),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",m({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Transforms ship with the Apache Velocity template engine, which allows a transform to reference, transform, and render values passed into the transform context."),(0,a.kt)("p",null,"The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"identity"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sailpoint.object.Identity"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"This is the identity the attribute promotion is performed on.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"attributeDefinition"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sailpoint.object.AttributeDefinition"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"This is the definition of the attribute being promoted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"oldValue"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"This is the attribute's previous value.")))),(0,a.kt)("p",null,"For available methods on these objects see our ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/docs/extensibility/rules/java-docs"}),"Rules Java Docs"),"."),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"These examples will help you learn what you can do with the identity context."),(0,a.kt)("admonition",m({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"$identity"),", as well as the other variables, in all transform operations.")),(0,a.kt)("h3",m({},{id:"get-the-id-of-the-identitys-manager"}),"Get the ID of the identity's manager"),(0,a.kt)("p",null,"You must use a ",(0,a.kt)("inlineCode",{parentName:"p"},"firstValid"),". If the identity does not have a manager, ",(0,a.kt)("inlineCode",{parentName:"p"},"getManager()")," returns null."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "firstValid",\n  "attributes": {\n    "values": ["$identity.getManager().getId()", "no manager exists"]\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"get-the-custom-attribute-of-the-identitys-manager"}),"Get the custom attribute of the identity's manager"),(0,a.kt)("p",null,"You must use a ",(0,a.kt)("inlineCode",{parentName:"p"},"firstValid"),". If the identity does not have a manager, ",(0,a.kt)("inlineCode",{parentName:"p"},"getManager()")," returns null."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "firstValid",\n  "attributes": {\n    "values": [\n      "$identity.getManager().getStringAttribute(\'country\')",\n      "no manager exists"\n    ]\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"get-manager-status-of-the-identitys-manager"}),"Get manager status of the identity's manager"),(0,a.kt)("p",null,"This example would get the status of whether or not the identity's manager is currently actually a manager."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "static",\n  "attributes": {\n    "value": "$identity.getManagerStatus()"\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"get-an-identitys-accounts"}),"Get an identity's accounts"),(0,a.kt)("p",null,"This example would get an identity's various associated source accounts."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "static",\n  "attributes": {\n    "value": "$identity.getLinks()"\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"get-a-comma-separated-list-of-account-names-from-an-applicationsource"}),"Get a comma separated list of account names from an application/source"),(0,a.kt)("p",null,"This is the velocity logic of the transform:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),'/* Loop through accounts returned from get accounts by application id */\n#foreach($account in $identity.getLinksByAppIdOrName("2c918088814e6a610181686b56977fa8",null))\n    #if($foreach.index + 1 != $identity.getLinks().size()) /* If we are not on the last item, include a comma */\n        $account.getNativeIdentity(),\n    #else\n        $account.getNativeIdentity()\n    #end\n#end\n')),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "static",\n  "attributes": {\n    "value": "#foreach($account in $identity.getLinksByAppIdOrName(\\"2c918088814e6a610181686b56977fa8\\",null))#if($foreach.index + 1 != $identity.getLinks().size())$account.getNativeIdentity(),#else$account.getNativeIdentity()#end#end"\n  }\n}\n')),(0,a.kt)("h2",m({},{id:"notes"}),"Notes"),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"If you assign a variable with the identity attribute context, doing so will cast the type to a string.")),(0,a.kt)("p",null,"For example, you may do this if you wanted to assign the identity's manager object to a variable and then get additional data from it."),(0,a.kt)("admonition",m({},{title:"Invalid",type:"warning"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "static",\n  "attributes": {\n    "manager": "$identity.getManager()",\n    "value": "$manager.getStringAttribute(\'country\')"\n  }\n}\n'))),(0,a.kt)("admonition",m({},{title:"Valid",type:"tip"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "static",\n  "attributes": {\n    "managerCountry": "$identity.getManager().getStringAttribute(\'country\')",\n    "value": "$managerCountry"\n  }\n}\n'))))}x.isMDXComponent=!0}}]);