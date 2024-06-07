"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[81350],{85407:(e,a)=>{function t(e,a){var t,l,m,s,r;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(s=null==(m=e.xml)?void 0:m.name)?s:e.type:null!=(r=e.title)?r:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,m="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(m+=e),l&&!e&&(m+=l),e&&l&&(m+=`${e} and ${l}`),t.push(m)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,m="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(m+=e),l&&!e&&(m+=l),e&&l&&(m+=`${e} and ${l}`),t.push(m)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>h});var l=t(67294),m=t(58750),s=t(82479),r=t(62574),i=t(94693),n=t(85407),p=t(52347),o=t(25365),c=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;const h=function({param:{description:e,example:a,examples:t,name:h,required:y,schema:b}}){b&&(null==b?void 0:b.type)||(b={type:"any"});const k=(0,p.lo)(b,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,n.uc)(e)))),v=(0,p.lo)(y,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),g=(0,p.lo)((0,n.A4)(b),(e=>l.createElement("div",null,l.createElement(o.D,{children:(0,i.T)(e),rehypePlugins:[c.Z]})))),x=(0,p.lo)(e,(e=>l.createElement("div",null,l.createElement(o.D,{children:(0,i.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:s,className:r,children:i}=a;((e,a)=>{var t={};for(var l in e)u.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&f.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const n=/language-(\w+)/.exec(r||"");return s?l.createElement("code",null,i):!s&&n?l.createElement(m.Z,{className:r},i):l.createElement(m.Z,null,i)}},rehypePlugins:[c.Z]})))),T=(0,p.lo)(b&&b.items?b.items.default:b?b.default:void 0,(e=>l.createElement("div",null,l.createElement(o.D,{children:`**Default value:** \`${e}\``})))),_=(0,p.lo)((0,p.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),N=(0,p.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(s.default,null,a.map((([e,a])=>l.createElement(r.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},h),k,y&&l.createElement("span",{className:"openapi-schema__divider"}),v),g,T,x,_,N)}},84190:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>N,default:()=>q,frontMatter:()=>_,metadata:()=>j,toc:()=>S});var l=t(3905),m=t(68562),s=t(67001),r=t.n(s),i=t(98439),n=t(34168),p=t(3655),o=t(13503),c=t(82479),d=t(62574),u=Object.defineProperty,f=Object.defineProperties,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&v(e,t,a[t]);if(y)for(var t of y(a))k.call(a,t)&&v(e,t,a[t]);return e},x=(e,a)=>f(e,h(a)),T=(e,a)=>{var t={};for(var l in e)b.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&y)for(var l of y(e))a.indexOf(l)<0&&k.call(e,l)&&(t[l]=e[l]);return t};const _={id:"patch-role-profile",sidebar_label:"Update a role-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVt9v2zYQ/leIe9oAKU78K6mAPqRdhnlY2yBJ95Iaw1k8WWwlUiWpJIKg/7040kmcOs2SPmx+sCXeHfndfXef2YNpyKJXRi8kZNCgz8szU9GpNYWqCBKQ5HKrGnaBDD42Ej0JFNZUlDbRS+RGe6tWrTdWWKrCfq5UjVh1QklIwOPaQXYJHCU2UQ6WCTRosSZPls09aKwJMggxSkdA5Q6IxW/CFMKXJMzqM+VeeCMseavoihLRBoiJMFZIqshzEpa+tsqShMzblhJweUk1QtaD7xo+0Xmr9BoSKIyt0UMGbRtQ0A3WTcUuB+PpXB6tJinm41fpdP9glh4dzKapJJxOJ1M8nBQIw7CMp5Hzb4zs+IjvD+dqkfZswqapVB7qNfrsOLl+F1tMEhJoLLPlFbmwranon00tn+mt5L+nPIRI3vR57kMCXvlQoe3GGcKHa+Eao10EMd7f55+HbJ7cNJR7kuLWlelEcYWV4rVQSvifqvacCnCOKD/oqosEDwm0j8fVSv9Feu1LyCbjBGq82X7d2eU/piwd35E2fYynNyjFWaRDpKLVuKoCVbnhAfG09xKSjKYPRRj57wm4RbbQoQP+5NAh+bHf3+wVjjmx1lgHwzImMXssiYX2ZDVW4pzsFVkRYkTK8tFaTVIYLVpdopYVSUE3OYVI96Lknu4p4iN3kR2LmpzDNYm4vlJ6HTQu+m8r0bmxthPO1ORL9rom7cW1NXq9YXBIgG3mTtIZBCtpBqPtAXCjXskBEnChGlGDW1tBBqX3jctGo96TRu3fY03Dnjaa6qYyHdFebuoRNgoSuEKruBlCdvfuMcUC24o7D/OacrMj5RfBXbDuC3ROrZkDbqrWeVOT5YSWjC9vrfJdALgitGSPW87ncrltPmcKIo5tpztGOCnYqD+/RydINg+/347JhflCWnj+ft2Z1sbHMDjM9tm9vp/ckrKrLHfjC5MCj2bFfJrODg8O0+lsPk5XkyJPx/mr+aSYz7HAOTyc4efFMCClC8PHMX+xpgd7+3v7WxPy/uTsnTg+XewWvyRxaxQ5arEi0bpIAOY5OSdQS1EbqYpOMM2mdSzTprU5OaG0CNUhfaWs0TVpz3NSqZy0CzXY/J+/W1wErI1xvka9ZfnJ+8SDPPr7yfzp+0nsD083ftRUqFhy4iD0m8G5fMCvgwQyJfkGUxrn2dz3K3T00VbDwMtfW7Lcrsv7+QjNK5XjZwlZgZWjJ1L55Wxzb/hVvPzC82hCm0XUXZjaquU3SOALdfHSNSyHBEpCSTaAjYa3EVJ6weH3gTsayCodI45z1s0nfZdbEnV6fPH2D57CzYWpNpKDLF7znyteQwaf4BMjNVGNw3jxeg8V6nWLa/aPG/PnG3juuYs=",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a role-profile contributor relationship by id' (patch-role-profile)"},N=void 0,j={unversionedId:"api/nerm/v1/patch-role-profile",id:"api/nerm/v1/patch-role-profile",title:"patch-role-profile",description:"Update a role-profile contributor relationship by id",source:"@site/docs/api/nerm/v1/patch-role-profile.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-role-profile",permalink:"/docs/api/nerm/v1/patch-role-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a role-profile contributor relationship by id' (patch-role-profile)",tags:[],version:"current",frontMatter:{id:"patch-role-profile",sidebar_label:"Update a role-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVt9v2zYQ/leIe9oAKU78K6mAPqRdhnlY2yBJ95Iaw1k8WWwlUiWpJIKg/7040kmcOs2SPmx+sCXeHfndfXef2YNpyKJXRi8kZNCgz8szU9GpNYWqCBKQ5HKrGnaBDD42Ej0JFNZUlDbRS+RGe6tWrTdWWKrCfq5UjVh1QklIwOPaQXYJHCU2UQ6WCTRosSZPls09aKwJMggxSkdA5Q6IxW/CFMKXJMzqM+VeeCMseavoihLRBoiJMFZIqshzEpa+tsqShMzblhJweUk1QtaD7xo+0Xmr9BoSKIyt0UMGbRtQ0A3WTcUuB+PpXB6tJinm41fpdP9glh4dzKapJJxOJ1M8nBQIw7CMp5Hzb4zs+IjvD+dqkfZswqapVB7qNfrsOLl+F1tMEhJoLLPlFbmwranon00tn+mt5L+nPIRI3vR57kMCXvlQoe3GGcKHa+Eao10EMd7f55+HbJ7cNJR7kuLWlelEcYWV4rVQSvifqvacCnCOKD/oqosEDwm0j8fVSv9Feu1LyCbjBGq82X7d2eU/piwd35E2fYynNyjFWaRDpKLVuKoCVbnhAfG09xKSjKYPRRj57wm4RbbQoQP+5NAh+bHf3+wVjjmx1lgHwzImMXssiYX2ZDVW4pzsFVkRYkTK8tFaTVIYLVpdopYVSUE3OYVI96Lknu4p4iN3kR2LmpzDNYm4vlJ6HTQu+m8r0bmxthPO1ORL9rom7cW1NXq9YXBIgG3mTtIZBCtpBqPtAXCjXskBEnChGlGDW1tBBqX3jctGo96TRu3fY03Dnjaa6qYyHdFebuoRNgoSuEKruBlCdvfuMcUC24o7D/OacrMj5RfBXbDuC3ROrZkDbqrWeVOT5YSWjC9vrfJdALgitGSPW87ncrltPmcKIo5tpztGOCnYqD+/RydINg+/347JhflCWnj+ft2Z1sbHMDjM9tm9vp/ckrKrLHfjC5MCj2bFfJrODg8O0+lsPk5XkyJPx/mr+aSYz7HAOTyc4efFMCClC8PHMX+xpgd7+3v7WxPy/uTsnTg+XewWvyRxaxQ5arEi0bpIAOY5OSdQS1EbqYpOMM2mdSzTprU5OaG0CNUhfaWs0TVpz3NSqZy0CzXY/J+/W1wErI1xvka9ZfnJ+8SDPPr7yfzp+0nsD083ftRUqFhy4iD0m8G5fMCvgwQyJfkGUxrn2dz3K3T00VbDwMtfW7Lcrsv7+QjNK5XjZwlZgZWjJ1L55Wxzb/hVvPzC82hCm0XUXZjaquU3SOALdfHSNSyHBEpCSTaAjYa3EVJ6weH3gTsayCodI45z1s0nfZdbEnV6fPH2D57CzYWpNpKDLF7znyteQwaf4BMjNVGNw3jxeg8V6nWLa/aPG/PnG3juuYs=",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a role-profile contributor relationship by id' (patch-role-profile)"},sidebar:"openApiSidebar",previous:{title:"Find role-profile contributor relationship by id",permalink:"/docs/api/nerm/v1/get-role-profile"},next:{title:"Delete a role profile assignment",permalink:"/docs/api/nerm/v1/delete-role-profile"}},I={},S=[{value:"Request",id:"request",level:2}],M={toc:S},E="wrapper";function q(e){var a=e,{components:t}=a,s=T(a,["components"]);return(0,l.kt)(E,x(g(g({},M),s),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Update a role-profile contributor relationship by id"),(0,l.kt)(r(),{method:"patch",path:"/role_profiles/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Update a role-profile contributor relationship by id"),(0,l.kt)("h2",g({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)(i.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"role_profile"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"})))))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(m.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"role_profile"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "role_profile": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "string",\n    "role_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "profile_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(c.default,{mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(d.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}q.isMDXComponent=!0}}]);