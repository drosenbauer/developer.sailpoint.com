"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52450],{30165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>y,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var n=r(3905),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>s(e,o(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={id:"lower",title:"Lower",pagination_label:"Lower",sidebar_label:"Lower",sidebar_class_name:"lower",keywords:["transforms","operations","lower"],description:"Convert an input string into all lowercase letters.",slug:"/extensibility/transforms/operations/lower",tags:["Transforms","Transform Operations"]},k=void 0,b={unversionedId:"extensibility/transforms/operations/lower",id:"extensibility/transforms/operations/lower",title:"Lower",description:"Convert an input string into all lowercase letters.",source:"@site/docs/extensibility/transforms/operations/lower.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/lower",permalink:"/docs/extensibility/transforms/operations/lower",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/lower.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"lower",title:"Lower",pagination_label:"Lower",sidebar_label:"Lower",sidebar_class_name:"lower",keywords:["transforms","operations","lower"],description:"Convert an input string into all lowercase letters.",slug:"/extensibility/transforms/operations/lower",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Lookup",permalink:"/docs/extensibility/transforms/operations/lookup"},next:{title:"Name Normalizer",permalink:"/docs/extensibility/transforms/operations/name-normalizer"}},w={},h=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],g={toc:h},v="wrapper";function y(e){var t=e,{components:a}=t,s=d(t,["components"]);return(0,n.kt)(v,c(m(m({},g),s),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",m({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the lower transform to convert an input string into all lowercase letters."),(0,n.kt)("h2",m({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"The lower transform only requires the transform's ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "lower",\n  "name": "Lower Transform"\n}\n')),(0,n.kt)("h2",m({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Required Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"lower"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lowercase Transform Input Screenshot",src:r(55249).Z,width:"1832",height:"318"})),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,'This transform takes in the input "ACTIVE" and produces "active" as the output.'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'Input:"ACTIVE"\nOutput:"active"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "ACTIVE"\n      },\n      "type": "static"\n    }\n  },\n  "type": "lower",\n  "name": "Lower Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,'This transform takes in the input "All-Access" and produces "all-access" as the output.'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'Input:"All-Access"\nOutput:"all-access"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "All-Access"\n      },\n      "type": "static"\n    }\n  },\n  "type": "lower",\n  "name": "Lower Transform"\n}\n')))}y.isMDXComponent=!0},55249:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lower_transform_input-c1ff9f3ff048e2971e83655760cafef2.png"}}]);