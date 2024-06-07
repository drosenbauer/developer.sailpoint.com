"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83222],{22613:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>w,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var r=i(3905),s=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,b=(e,t,i)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&b(e,i,t[i]);if(o)for(var i of o(t))l.call(t,i)&&b(e,i,t[i]);return e},u=(e,t)=>n(e,a(t)),p=(e,t)=>{var i={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(i[r]=e[r]);return i};const d={id:"subscribing-to-trigger",title:"Subscribing to a Trigger",pagination_label:"Subscribing to a Trigger",sidebar_label:"Subscribing to a Trigger",sidebar_position:3,sidebar_class_name:"subscribingToTrigger",keywords:["event","trigger","subscribing"],description:"Usually, you will subscribe to event triggers using the user interface in ISC. Refer to subscribing to event triggers to learn how to subscribe to an event trigger through the ISC UI.",slug:"/extensibility/event-triggers/subscribing-to-trigger",tags:["Event Triggers"]},v=void 0,h={unversionedId:"extensibility/event-triggers/subscribing-to-trigger",id:"extensibility/event-triggers/subscribing-to-trigger",title:"Subscribing to a Trigger",description:"Usually, you will subscribe to event triggers using the user interface in ISC. Refer to subscribing to event triggers to learn how to subscribe to an event trigger through the ISC UI.",source:"@site/docs/extensibility/event-triggers/subscribing-to-a-trigger.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/subscribing-to-trigger",permalink:"/docs/extensibility/event-triggers/subscribing-to-trigger",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/subscribing-to-a-trigger.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:3,frontMatter:{id:"subscribing-to-trigger",title:"Subscribing to a Trigger",pagination_label:"Subscribing to a Trigger",sidebar_label:"Subscribing to a Trigger",sidebar_position:3,sidebar_class_name:"subscribingToTrigger",keywords:["event","trigger","subscribing"],description:"Usually, you will subscribe to event triggers using the user interface in ISC. Refer to subscribing to event triggers to learn how to subscribe to an event trigger through the ISC UI.",slug:"/extensibility/event-triggers/subscribing-to-trigger",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Preparing a Subscriber Service",permalink:"/docs/extensibility/event-triggers/preparing-subscriber-service"},next:{title:"Filtering Events",permalink:"/docs/extensibility/event-triggers/filtering-events"}},f={},m=[{value:"View the Available Triggers",id:"view-the-available-triggers",level:2},{value:"Subscribe to a Trigger from the UI",id:"subscribe-to-a-trigger-from-the-ui",level:2},{value:"Subscribe to a Trigger from the API",id:"subscribe-to-a-trigger-from-the-api",level:2}],y={toc:m},k="wrapper";function w(e){var t=e,{components:s}=t,n=p(t,["components"]);return(0,r.kt)(k,u(c(c({},y),n),{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h2",c({},{id:"view-the-available-triggers"}),"View the Available Triggers"),(0,r.kt)("p",null,"SailPoint is continuously developing new event triggers to satisfy different use cases. Some of these triggers are considered ",(0,r.kt)("strong",{parentName:"p"},"early access")," and are only available in an ISC tenant upon request. To see a list of available event triggers in your tenant, go to the ",(0,r.kt)("strong",{parentName:"p"},"Event Triggers")," tab in the ",(0,r.kt)("strong",{parentName:"p"},"Admin")," section of Identity Security Cloud. The first page is a list of your tenant's available event triggers. You can select each trigger to learn more about its type, what causes it to fire, and what the payload will look like."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Available triggers",src:i(98318).Z,width:"2560",height:"1328"})),(0,r.kt)("h2",c({},{id:"subscribe-to-a-trigger-from-the-ui"}),"Subscribe to a Trigger from the UI"),(0,r.kt)("p",null,"Usually, you will subscribe to event triggers using the user interface in ISC. Refer to ",(0,r.kt)("a",c({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/event_triggers.html#subscribing-to-event-triggers"}),"subscribing to event triggers")," to learn how to subscribe to an event trigger through the ISC UI."),(0,r.kt)("h2",c({},{id:"subscribe-to-a-trigger-from-the-api"}),"Subscribe to a Trigger from the API"),(0,r.kt)("p",null,"Sometimes, you may need to use the API to subscribe to event triggers. This can occur when you want to programatically subscribe/unsubscribe from event triggers in a custom application or no-code solution that does not have a native integration with SailPoint."),(0,r.kt)("p",null,"If this is your first time calling a SailPoint API, refer to the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/api/getting-started"}),"getting started guide")," to learn how to generate a token and call the APIs."),(0,r.kt)("p",null,"Start by reviewing the list of ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/api/beta/triggers#available-event-triggers"}),"available event triggers"),", and take note of the ",(0,r.kt)("strong",{parentName:"p"},"ID")," of the trigger you want to subscribe to (ex ",(0,r.kt)("inlineCode",{parentName:"p"},"idn:access-request-dynamic-approver"),"). Use the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/api/beta/create-subscription"}),"create subscription")," endpoint to subscribe to an event trigger of your choosing. See the API docs for the latest details about how to craft a subscription request."))}w.isMDXComponent=!0},98318:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/available-triggers-efdaede7d73d4ccfc9452cd5e3e3ee80.png"}}]);