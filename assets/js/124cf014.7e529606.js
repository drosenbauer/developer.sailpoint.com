"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9359],{75001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>h,frontMatter:()=>v,metadata:()=>m,toc:()=>y});var i=r(3905),a=Object.defineProperty,n=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&c(e,r,t[r]);return e},g=(e,t)=>n(e,s(t)),p=(e,t)=>{var r={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&d.call(e,i)&&(r[i]=e[i]);return r};const v={id:"source-updated",title:"Source Updated",pagination_label:"Source Updated",sidebar_label:"Source Updated",sidebar_class_name:"sourceUpdated",keywords:["event","trigger","source","updated","available"],description:"Fires after a source is updated.",slug:"/extensibility/event-triggers/triggers/source-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},b=void 0,m={unversionedId:"extensibility/event-triggers/available/source-updated",id:"extensibility/event-triggers/available/source-updated",title:"Source Updated",description:"Fires after a source is updated.",source:"@site/docs/extensibility/event-triggers/available/source-updated.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/source-updated",permalink:"/docs/extensibility/event-triggers/triggers/source-updated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/source-updated.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"source-updated",title:"Source Updated",pagination_label:"Source Updated",sidebar_label:"Source Updated",sidebar_class_name:"sourceUpdated",keywords:["event","trigger","source","updated","available"],description:"Fires after a source is updated.",slug:"/extensibility/event-triggers/triggers/source-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Source Deleted",permalink:"/docs/extensibility/event-triggers/triggers/source-deleted"},next:{title:"VA Cluster Status Change",permalink:"/docs/extensibility/event-triggers/triggers/va-cluster-status-change"}},f={},y=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],k={toc:y},x="wrapper";function h(e){var t=e,{components:r}=t,a=p(t,["components"]);return(0,i.kt)(x,g(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",u({},{id:"event-context"}),"Event Context"),(0,i.kt)("p",null,"Source Updated events occur when configuration changes are made to a source. Some uses cases for this trigger include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide evidence to show auditors connector logic and sources are not manipulated outside of proper change control processes."),(0,i.kt)("li",{parentName:"ul"},"Trigger review of an updated source.")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "id": "2c9180866166b5b0016167c32ef31a66",\n  "name": "Test source",\n  "type": "DIRECT_CONNECT",\n  "modified": "2021-03-29T22:01:50.474Z",\n  "connector": "active-directory",\n  "actor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n')),(0,i.kt)("h2",u({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",u({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}h.isMDXComponent=!0}}]);