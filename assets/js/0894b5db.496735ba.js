"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20520],{1685:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>f,default:()=>D,frontMatter:()=>N,metadata:()=>c,toc:()=>v});var r=t(3905),n=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&m(e,t,a[t]);if(o)for(var t of o(a))p.call(a,t)&&m(e,t,a[t]);return e},u=(e,a)=>i(e,s(a)),y=(e,a)=>{var t={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))a.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const N={id:"display-name",title:"Display Name",pagination_label:"Display Name",sidebar_label:"Display Name",sidebar_class_name:"displayName",keywords:["transforms","operations","display","name"],description:"Use Preferred Name over Given Name to create an identity\u2019s Display Name.",slug:"/extensibility/transforms/operations/display-name",tags:["Transforms","Transform Operations"]},f=void 0,c={unversionedId:"extensibility/transforms/operations/display-name",id:"extensibility/transforms/operations/display-name",title:"Display Name",description:"Use Preferred Name over Given Name to create an identity\u2019s Display Name.",source:"@site/docs/extensibility/transforms/operations/display-name.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/display-name",permalink:"/docs/extensibility/transforms/operations/display-name",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/display-name.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"display-name",title:"Display Name",pagination_label:"Display Name",sidebar_label:"Display Name",sidebar_class_name:"displayName",keywords:["transforms","operations","display","name"],description:"Use Preferred Name over Given Name to create an identity\u2019s Display Name.",slug:"/extensibility/transforms/operations/display-name",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Decompose Diacritial Marks",permalink:"/docs/extensibility/transforms/operations/decompose-diacritical-marks"},next:{title:"E.164 Phone",permalink:"/docs/extensibility/transforms/operations/e164-phone"}},k={},v=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],b={toc:v},h="wrapper";function D(e){var a=e,{components:t}=a,n=y(a,["components"]);return(0,r.kt)(h,u(d(d({},b),n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",d({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Use Preferred Name in Display Name")," transform forms an identity\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"Display Name")," value using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferred Name")," value when it exists over the ",(0,r.kt)("inlineCode",{parentName:"p"},"Given Name")," value. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Family Name")," value is then appended to form the complete ",(0,r.kt)("inlineCode",{parentName:"p"},"Display Name"),', e.g., ("Preferred Name" or "Given Name") + "Family Name"'),(0,r.kt)("h2",d({},{id:"transform-structure"}),"Transform Structure"),(0,r.kt)("p",null,"The displayName generator transform is intended for using Preferred Name over Given Name to create an identity\u2019s Display Name."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "name": "displayName",\n  "type": "Display Name Transform"\n}\n')),(0,r.kt)("h2",d({},{id:"attributes"}),"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"displayName"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.")))),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"This transform takes the user's Preferred Name or Given Name, and appends the user's Family Name. For example:"),(0,r.kt)("p",null,"If the user's Preferred Name is  ",(0,r.kt)("inlineCode",{parentName:"p"},"John"),", Given Name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Jonathan"),", and Family Name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Doe"),", the Display Name would be ",(0,r.kt)("inlineCode",{parentName:"p"},"John Doe"),"."),(0,r.kt)("p",null,"If the user's Preferred Name is not set, Given Name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Jonathan"),", and Family Name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Doe"),", the Display Name would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Jonathan Doe"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "name": "displayName",\n  "type": "Display Name Transform"\n}\n')))}D.isMDXComponent=!0}}]);