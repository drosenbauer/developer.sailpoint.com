"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83636],{38301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var i=n(3905),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>r(e,o(t)),c=(e,t)=>{var n={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n};const f={id:"conditional",title:"Conditional",pagination_label:"Conditional",sidebar_label:"Conditional",sidebar_class_name:"conditional",keywords:["transforms","operations","conditional"],description:"Output different values depending on simple conditional logic.",slug:"/extensibility/transforms/operations/conditional",tags:["Transforms","Transform Operations"]},h=void 0,k={unversionedId:"extensibility/transforms/operations/conditional",id:"extensibility/transforms/operations/conditional",title:"Conditional",description:"Output different values depending on simple conditional logic.",source:"@site/docs/extensibility/transforms/operations/conditional.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/conditional",permalink:"/docs/extensibility/transforms/operations/conditional",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/conditional.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"conditional",title:"Conditional",pagination_label:"Conditional",sidebar_label:"Conditional",sidebar_class_name:"conditional",keywords:["transforms","operations","conditional"],description:"Output different values depending on simple conditional logic.",slug:"/extensibility/transforms/operations/conditional",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Concatenation",permalink:"/docs/extensibility/transforms/operations/concatenation"},next:{title:"Date Compare",permalink:"/docs/extensibility/transforms/operations/date-compare"}},g={},b=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],v={toc:b},N="wrapper";function y(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,i.kt)(N,m(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",u({},{id:"overview"}),"Overview"),(0,i.kt)("p",null,'Use the conditional transform to output different values depending on simple conditional logic. This is a convenient transform - the same capability can be implemented with a "static" transform, but this transform has greater simplicity and null-safe error checking.'),(0,i.kt)("admonition",u({},{title:"Other Considerations",type:"note"}),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The two operands within the transform cannot be null; if they are, an IllegalArgumentException is thrown."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"expression"),' attribute must be "eq," or the transform will throw an IllegalArgumentException.'),(0,i.kt)("li",{parentName:"ul"},'All attribute string values are case-sensitive, so differently cased strings (e.g., "engineering" and "Engineering") will not return as matched.'))),(0,i.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attributes, the conditional transform requires an ",(0,i.kt)("inlineCode",{parentName:"p"},"expression"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"positiveCondition"),", and a ",(0,i.kt)("inlineCode",{parentName:"p"},"negativeCondition"),". If the expression evaluates to false, the transform returns the negative condition; otherwise it returns the positive condition."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "expression": "foo eq foo",\n    "positiveCondition": "true",\n    "negativeCondition": "false"\n  },\n  "type": "conditional",\n  "name": "Conditional Transform"\n}\n')),(0,i.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required Attributes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"conditional"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expression")," - This comparison statement follows the structure of ",(0,i.kt)("inlineCode",{parentName:"li"},"ValueA eq ValueB")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"ValueA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ValueB")," are static strings or outputs of other transforms; the ",(0,i.kt)("inlineCode",{parentName:"li"},"eq")," operator is the only valid comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"positiveCondition")," - This is the output of the transform if the expression evaluates to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"negativeCondition")," - This is the output of the transform if the expression evaluates to false."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")))),(0,i.kt)("h2",u({},{id:"examples"}),"Examples"),(0,i.kt)("p",null,"This transform takes the user's HR-defined department attribute and compares it to the value of \"Science\". If this is the user's department, the transform returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "expression": "$department eq Science",\n    "positiveCondition": "true",\n    "negativeCondition": "false",\n    "department": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "department"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "conditional",\n  "name": "Test Conditional Transform"\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,"This transform extends the previous one by returning the output of another Seaspray transform depending on the result of the expression. You can assign Seaspray transforms' outputs to variables and then reference them within the ",(0,i.kt)("inlineCode",{parentName:"p"},"positiveCondition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"negativeCondition")," attributes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "expression": "$department eq Science",\n    "positiveCondition": "$scienceBuilding",\n    "negativeCondition": "$adminBuilding",\n    "department": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "department"\n      },\n      "type": "accountAttribute"\n    },\n    "scienceBuilding": {\n      "attributes": {\n        "value": "Building S"\n      },\n      "type": "static"\n    },\n    "adminBuilding": {\n      "attributes": {\n        "value": "Building A"\n      },\n      "type": "static"\n    }\n  },\n  "type": "conditional",\n  "name": "Test Conditional Transform"\n}\n')))}y.isMDXComponent=!0}}]);