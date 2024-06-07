"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80579],{25127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>C,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var s=a(3905),r=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&c(e,a,t[a]);return e},h=(e,t)=>n(e,i(t)),d=(e,t)=>{var a={};for(var s in e)u.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&l)for(var s of l(e))t.indexOf(s)<0&&o.call(e,s)&&(a[s]=e[s]);return a};const p={id:"va-cluster-status-change",title:"VA Cluster Status Change",pagination_label:"VA Cluster Status Change",sidebar_label:"VA Cluster Status Change",sidebar_class_name:"vaClusterStatusChange",keywords:["event","trigger","va","cluster","status","change","available"],description:"Fires after the status of a VA cluster has changed.",slug:"/extensibility/event-triggers/triggers/va-cluster-status-change",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},v=void 0,m={unversionedId:"extensibility/event-triggers/available/va-cluster-status-change",id:"extensibility/event-triggers/available/va-cluster-status-change",title:"VA Cluster Status Change",description:"Fires after the status of a VA cluster has changed.",source:"@site/docs/extensibility/event-triggers/available/va-cluster-status-change.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/va-cluster-status-change",permalink:"/docs/extensibility/event-triggers/triggers/va-cluster-status-change",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/va-cluster-status-change.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"va-cluster-status-change",title:"VA Cluster Status Change",pagination_label:"VA Cluster Status Change",sidebar_label:"VA Cluster Status Change",sidebar_class_name:"vaClusterStatusChange",keywords:["event","trigger","va","cluster","status","change","available"],description:"Fires after the status of a VA cluster has changed.",slug:"/extensibility/event-triggers/triggers/va-cluster-status-change",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Source Updated",permalink:"/docs/extensibility/event-triggers/triggers/source-updated"},next:{title:"Early Access Event Triggers",permalink:"/docs/extensibility/event-triggers/early-access"}},f={},b=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],k={toc:b},y="wrapper";function C(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,s.kt)(y,h(g(g({},k),n),{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",g({},{id:"event-context"}),"Event Context"),(0,s.kt)("p",null,"VA (Virtual Appliance) Cluster Status Change Events occur when a health check is run on a VA cluster and the health status is different from the previous health check. Customers can use this trigger to monitor all the health status changes of their VA clusters."),(0,s.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create real-time health dashboards for VA clusters."),(0,s.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate actions when a health status changes.")),(0,s.kt)("p",null,"Additional notes about VA Cluster Status Changes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"VA cluster health checks run every 30 minutes."),(0,s.kt)("li",{parentName:"ul"},"This trigger will invoke on any VA cluster health status change (i.e. healthy -> unhealthy, unhealthy -> healthy)."),(0,s.kt)("li",{parentName:"ul"},"See ","[troubleshooting virtual appliances]","(",(0,s.kt)("a",g({parentName:"li"},{href:"https://community.sailpoint.com/t5/Identity"}),"https://community.sailpoint.com/t5/Identity")," Security Cloud-Connectors/Virtual-Appliance-Troubleshooting-Guide/ta-p/78735) for more information.")),(0,s.kt)("p",null,"Healthy Cluster Source"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"VA cluster source healthy",src:a(50675).Z,width:"1732",height:"284"})),(0,s.kt)("p",null,"Unhealthy Cluster Source"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"VA cluster source unhealthy",src:a(58531).Z,width:"1735",height:"278"})),(0,s.kt)("p",null,"Warning - Unhealthy Cluster"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Warning unhealthy cluster",src:a(90589).Z,width:"1733",height:"80"})),(0,s.kt)("p",null,"Failed - Unhealthy Cluster"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Failed unhealthy cluster",src:a(68589).Z,width:"1733",height:"171"})),(0,s.kt)("p",null,"This is an example input from this trigger:"),(0,s.kt)("pre",null,(0,s.kt)("code",g({parentName:"pre"},{className:"language-json"}),'{\n  "created": "2020-06-29T22:01:50.474Z",\n  "type": "CLUSTER",\n  "application": {\n    "id": "2c9180866166b5b0016167c32ef31a66",\n    "name": "Production VA Cluster",\n    "attributes": null\n  },\n  "healthCheckResult": {\n    "message": "Test Connection failed with exception. Error message - java.lang Exception",\n    "resultType": "SOURCE_STATE_ERROR_CLUSTER",\n    "status": "Succeeded"\n  },\n  "previousHealthCheckResult": {\n    "message": "Test Connection failed with exception. Error message - java.lang Exception",\n    "resultType": "SOURCE_STATE_ERROR_CLUSTER",\n    "status": "Failed"\n  }\n}\n')),(0,s.kt)("h2",g({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,s.kt)("a",g({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}C.isMDXComponent=!0},68589:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-failed-1ad33e8a3010a710dc33dd59a60ce87d.png"},50675:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-healthy-source-06cde26711ac139fbb06f23f06346f44.png"},58531:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-unhealthy-source-2f17fe0a45d52e1d84560ff4949f8a8d.png"},90589:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-warning-52a694ddf6d82c82af39e843c073ee42.png"}}]);