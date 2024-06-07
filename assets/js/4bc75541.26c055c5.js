"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[84949],{17151:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>T,frontMatter:()=>b,metadata:()=>y,toc:()=>f});var s=i(3905),n=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&u(e,i,t[i]);if(a)for(var i of a(t))c.call(t,i)&&u(e,i,t[i]);return e},p=(e,t)=>r(e,o(t)),d=(e,t)=>{var i={};for(var s in e)g.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&a)for(var s of a(e))t.indexOf(s)<0&&c.call(e,s)&&(i[s]=e[s]);return i};const b={id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/extensibility/event-triggers/testing-triggers",tags:["Event Triggers"]},v=void 0,y={unversionedId:"extensibility/event-triggers/testing-triggers",id:"extensibility/event-triggers/testing-triggers",title:"Testing Triggers",description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",source:"@site/docs/extensibility/event-triggers/testing-triggers.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/testing-triggers",permalink:"/docs/extensibility/event-triggers/testing-triggers",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/testing-triggers.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:5,frontMatter:{id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/extensibility/event-triggers/testing-triggers",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Filtering Events",permalink:"/docs/extensibility/event-triggers/filtering-events"},next:{title:"Responding to Response Required Triggers",permalink:"/docs/extensibility/event-triggers/responding-request-response-trigger"}},h={},f=[{value:"Sending Test Invocations",id:"sending-test-invocations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Trigger Service Issues",id:"trigger-service-issues",level:3},{value:"Filter Issues",id:"filter-issues",level:3},{value:"Misconfigured Subscription",id:"misconfigured-subscription",level:3}],m={toc:f},k="wrapper";function T(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,s.kt)(k,p(l(l({},m),r),{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It is important to test your trigger subscription configuration with your actual subscribing service (not a test site like ",(0,s.kt)("a",l({parentName:"p"},{href:"https://webhook.site"}),"webhook.site"),") before enabling your subscription for production use. Testing subscriptions ensures that your subscribing service can successfully receive events and that you are receiving the correct events based on the filter you have provided."),(0,s.kt)("h2",l({},{id:"sending-test-invocations"}),"Sending Test Invocations"),(0,s.kt)("p",null,"The easiest way to send a test event to your subscribing service is to use the ",(0,s.kt)("strong",{parentName:"p"},"Test Subscription")," command. Go to your subscription in the Event Trigger UI, select ",(0,s.kt)("strong",{parentName:"p"},"Options")," to the right of the subscription, and select ",(0,s.kt)("strong",{parentName:"p"},"Test Subscription"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"test subscription",src:i(28163).Z,width:"2041",height:"344"})),(0,s.kt)("p",null,"Doing so sends a test event to your subscribing service, using the default example payload for the specific trigger you are subscribing to. This is an easy way to validate that your service can receive events, but it lacks the ability to modify the event payload to test your filter against different payloads. However, there is an API endpoint you can use to modify the test payload."),(0,s.kt)("p",null,"If you want to control the test input to validate your filter against a more robust set of data, you can use the ",(0,s.kt)("a",l({parentName:"p"},{href:"/docs/api/beta/start-test-trigger-invocation"}),"test invocation")," API endpoint. You can use this API to send an input payload with any values that you want. This is an example of an invocation of this API:"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-text"}),"POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/test`\n")),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "triggerId": "idn:access-request-pre-approval",\n  "input": {\n    "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n    "requestedFor": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1313",\n      "name": "William Wilson"\n    },\n    "requestedItems": [\n      {\n        "id": "2c91808b6ef1d43e016efba0ce470904",\n        "name": "Engineering Access",\n        "description": "Access to engineering database",\n        "type": "ACCESS_PROFILE",\n        "operation": "Add",\n        "comment": "William needs this access to do his job."\n      }\n    ],\n    "requestedBy": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1314",\n      "name": "Rob Robertson"\n    }\n  },\n  "contentJson": {}\n}\n')),(0,s.kt)("h2",l({},{id:"troubleshooting"}),"Troubleshooting"),(0,s.kt)("h3",l({},{id:"trigger-service-issues"}),"Trigger Service Issues"),(0,s.kt)("p",null,"If your subscribing service is not receiving your test invocations, you have a couple of options to debug the issue. Start by viewing the activity log for the subscription in the UI to ensure your test events are actually being sent."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"activity log",src:i(29374).Z,width:"2033",height:"316"})),(0,s.kt)("p",null,"Check the ",(0,s.kt)("strong",{parentName:"p"},"Created")," date with the time you sent the test events. If they are being sent, check the event details. Look for any errors being reported, and ensure your subscribing service's subscription ID is in the ",(0,s.kt)("inlineCode",{parentName:"p"},"subcriptionId")," the event was sent to."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"debug connection",src:i(77258).Z,width:"2560",height:"1328"})),(0,s.kt)("p",null,"You can also view the activity log by using the ",(0,s.kt)("a",l({parentName:"p"},{href:"/docs/api/beta/list-trigger-invocation-status"}),"list latest invocation statuses")," endpoint."),(0,s.kt)("h3",l({},{id:"filter-issues"}),"Filter Issues"),(0,s.kt)("p",null,"If you do not see your events in the activity log, it may be a filtering issue. If the filter you configured on the subscription is not matching the test event data, no event will be sent. Double check your filter expression with the test payload in a JSONpath editor to ensure the filter is valid and matches your data. See ",(0,s.kt)("a",l({parentName:"p"},{href:"/docs/extensibility/event-triggers/filtering-events"}),"Filtering Events")," for more information."),(0,s.kt)("h3",l({},{id:"misconfigured-subscription"}),"Misconfigured Subscription"),(0,s.kt)("p",null,"Double check that your subscription configuration is correct."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ensure the URL you provided is accessible from the public internet. If your subscribing service is hosted internally in your company's intranet, you may be able to access it from your computer, but the trigger service may not be able to."),(0,s.kt)("li",{parentName:"ul"},"Verify that the authentication details are correct. Verify that the username/password or bearer token is valid.")))}T.isMDXComponent=!0},29374:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/activity-log-f43d2beda4617ad71ede37afaabd3424.png"},77258:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/debug-connection-842ae82e91d48cdd9c4f2a14d4b4c2a3.png"},28163:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/test-subscription-572f17aa5c34840225f632ae61598fd6.png"}}]);