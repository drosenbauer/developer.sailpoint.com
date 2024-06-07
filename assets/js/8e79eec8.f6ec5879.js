"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[35356],{85407:(e,a)=>{function t(e,a){var t,s,l,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(s=null==(t=e.xml)?void 0:t.name)?s:e.type:"array"===e.type?null!=(i=null==(l=e.xml)?void 0:l.name)?i:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var s;return e.items?t(e.items)+"[]":null!=(s=t(e))?s:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,s,l="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(s=`\`<= ${a.maxLength} characters\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,s,l="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?s=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?s=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(s=`\`< ${a.maximum}\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const s=a;if(s.mapping){const e=Object.keys(s.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>h});var s=t(67294),l=t(58750),i=t(82479),n=t(62574),m=t(94693),r=t(85407),o=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;const h=function({param:{description:e,example:a,examples:t,name:h,required:y,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const b=(0,o.lo)(f,(e=>s.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),T=(0,o.lo)(y,(()=>s.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,o.lo)((0,r.A4)(f),(e=>s.createElement("div",null,s.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),x=(0,o.lo)(e,(e=>s.createElement("div",null,s.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:n,children:m}=a;((e,a)=>{var t={};for(var s in e)u.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&d)for(var s of d(e))a.indexOf(s)<0&&g.call(e,s)&&(t[s]=e[s])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return i?s.createElement("code",null,m):!i&&r?s.createElement(l.Z,{className:n},m):s.createElement(l.Z,null,m)}},rehypePlugins:[p.Z]})))),v=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>s.createElement("div",null,s.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>s.createElement("div",null,s.createElement("strong",null,"Example: "),e))),I=(0,o.lo)(t,(e=>{const a=Object.entries(e);return s.createElement(s.Fragment,null,s.createElement("strong",null,"Examples:"),s.createElement(i.default,null,a.map((([e,a])=>s.createElement(n.default,{value:e,label:e},a.summary&&s.createElement("p",null,a.summary),a.description&&s.createElement("p",null,s.createElement("strong",null,"Description: "),s.createElement("span",null,a.description)),s.createElement("p",null,s.createElement("strong",null,"Example: "),s.createElement("code",null,a.value)))))))}));return s.createElement("div",{className:"openapi-params__list-item"},s.createElement("span",{className:"openapi-schema__container"},s.createElement("strong",{className:"openapi-schema__property"},h),b,y&&s.createElement("span",{className:"openapi-schema__divider"}),T),k,v,x,E,I)}},62328:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>I,default:()=>A,frontMatter:()=>E,metadata:()=>q,toc:()=>S});var s=t(3905),l=t(68562),i=t(67001),n=t.n(i),m=t(98439),r=t(34168),o=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,g=Object.defineProperties,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,T=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&T(e,t,a[t]);if(y)for(var t of y(a))b.call(a,t)&&T(e,t,a[t]);return e},x=(e,a)=>g(e,h(a)),v=(e,a)=>{var t={};for(var s in e)f.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&y)for(var s of y(e))a.indexOf(s)<0&&b.call(e,s)&&(t[s]=e[s]);return t};const E={id:"get-tagged-object",sidebar_label:"Get Tagged Object",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Tagged Object' (get-tagged-object)"},I=void 0,q={unversionedId:"api/v3/get-tagged-object",id:"api/v3/get-tagged-object",title:"get-tagged-object",description:"Get Tagged Object",source:"@site/docs/api/v3/get-tagged-object.api.mdx",sourceDirName:"api/v3",slug:"/api/v3/get-tagged-object",permalink:"/docs/api/v3/get-tagged-object",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Tagged Object' (get-tagged-object)",tags:[],version:"current",frontMatter:{id:"get-tagged-object",sidebar_label:"Get Tagged Object",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Tagged Object' (get-tagged-object)"},sidebar:"openApiSidebar",previous:{title:"List Tagged Objects by Type",permalink:"/docs/api/v3/list-tagged-objects-by-type"},next:{title:"Update Tagged Object",permalink:"/docs/api/v3/put-tagged-object"}},N={},S=[{value:"Request",id:"request",level:2}],L={toc:S},U="wrapper";function A(e){var a=e,{components:t}=a,i=v(a,["components"]);return(0,s.kt)(U,x(k(k({},L),i),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get Tagged Object"),(0,s.kt)(n(),{method:"get",path:"/tagged-objects/{type}/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This gets a tagged object for the specified type."),(0,s.kt)("h2",k({},{id:"request"}),"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"type",schema:{type:"string",enum:["ACCESS_PROFILE","APPLICATION","CAMPAIGN","ENTITLEMENT","IDENTITY","ROLE","SOD_POLICY","SOURCE"]},required:!0,description:"The type of tagged object to retrieve.",example:"ROLE"},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"id",schema:{type:"string"},required:!0,description:"The ID of the object reference to retrieve.",example:"ef38f94347e94562b5bb8424a56397d8"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Tagged object by type and ID.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"objectRef"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ACCESS_PROFILE`, `APPLICATION`, `CAMPAIGN`, `ENTITLEMENT`, `IDENTITY`, `ROLE`, `SOD_POLICY`, `SOURCE`]",schema:{type:"string",enum:["ACCESS_PROFILE","APPLICATION","CAMPAIGN","ENTITLEMENT","IDENTITY","ROLE","SOD_POLICY","SOURCE"],example:"IDENTITY",description:"DTO type"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the object this reference applies to",example:"2c91808568c529c60168cca6f90c1313"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Human-readable display name of the object this reference applies to",example:"William Wilson"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"tags",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},description:"Labels to be applied to an Object",example:["BU_FINANCE","PCI"]},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "objectRef": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "tags": [\n    "BU_FINANCE",\n    "PCI"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 403 response object"),(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 500 response object"),(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}A.isMDXComponent=!0}}]);