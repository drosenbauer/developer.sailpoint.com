"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9741],{85407:(e,a)=>{function t(e,a){var t,l,i,s,r;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(s=null==(i=e.xml)?void 0:i.name)?s:e.type:null!=(r=e.title)?r:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,i="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(i+=e),l&&!e&&(i+=l),e&&l&&(i+=`${e} and ${l}`),t.push(i)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,i="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(i+=e),l&&!e&&(i+=l),e&&l&&(i+=`${e} and ${l}`),t.push(i)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>b});var l=t(67294),i=t(58750),s=t(82479),r=t(62574),n=t(94693),m=t(85407),o=t(52347),p=t(25365),u=t(88453),c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const b=function({param:{description:e,example:a,examples:t,name:b,required:f,schema:y}}){y&&(null==y?void 0:y.type)||(y={type:"any"});const g=(0,o.lo)(y,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,m.uc)(e)))),v=(0,o.lo)(f,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,o.lo)((0,m.A4)(y),(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,n.T)(e),rehypePlugins:[u.Z]})))),x=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,n.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:s,className:r,children:n}=a;((e,a)=>{var t={};for(var l in e)d.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&c)for(var l of c(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const m=/language-(\w+)/.exec(r||"");return s?l.createElement("code",null,n):!s&&m?l.createElement(i.Z,{className:r},n):l.createElement(i.Z,null,n)}},rehypePlugins:[u.Z]})))),T=(0,o.lo)(y&&y.items?y.items.default:y?y.default:void 0,(e=>l.createElement("div",null,l.createElement(p.D,{children:`**Default value:** \`${e}\``})))),_=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),q=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(s.default,null,a.map((([e,a])=>l.createElement(r.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},b),g,f&&l.createElement("span",{className:"openapi-schema__divider"}),v),k,T,x,_,q)}},56972:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>O,contentTitle:()=>q,default:()=>E,frontMatter:()=>_,metadata:()=>M,toc:()=>S});var l=t(3905),i=t(68562),s=t(67001),r=t.n(s),n=t(98439),m=t(34168),o=t(3655),p=t(13503),u=t(82479),c=t(62574),d=Object.defineProperty,h=Object.defineProperties,b=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))y.call(a,t)&&v(e,t,a[t]);if(f)for(var t of f(a))g.call(a,t)&&v(e,t,a[t]);return e},x=(e,a)=>h(e,b(a)),T=(e,a)=>{var t={};for(var l in e)y.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&f)for(var l of f(e))a.indexOf(l)<0&&g.call(e,l)&&(t[l]=e[l]);return t};const _={id:"get-user-profile",sidebar_label:"Find user-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v4zYM/lcEPm2A0qRput0M7KHDekOG3Q+0vb0UQcFYTKw7W3IpqU0Q+H8fKLvXdOlu7eUhsaWPEj/yI5kd+JYYo/VubqCANcVPgfgj+5WtCTQYCiXbVgBQwFvrjEqBeNT2CFV6F9kuU/SsmOp8Uqhsq5ZbZQ1oiLgOUFyDWKnBKsBCQ4uMDUVi2d6Bw4aggGxj5a4WY3XgwPx35VcqVqT88jOVUUWvmCJbuiOtUmswklaelaGaohBguk2WyUAROZGGUFbUIBQ7iNtWbgyRrVuDhpXnBiMUkFL2gjbYtLVAjqezn8yb5ckIy+kvo9nk+HT05vh0NjKEs9nJDH8+WSF03UJuC613gYJcMJ1M5Ocpg/NNS2Ukox6gQgHVHdZW1m4ThQgaJK7kothj29a2zJEdfw5yyO6QRR8O0NCyZDTa3gWJ+s0Q9f9HW/OSuDCh+eDqbR/RTkN63q6x7i9y61hBcTLV0OBm//XwFHH1JR502W1h9FK4oxuMvUxfbLMv5psefWhFLjUibn/viIesDdUAi67TEG3MCtorqtEUuvzRMHtOIL+hURe9DtRIJYfLOmuk9KLGSEevUYd39GGV6+vfmX/wbO6y9P4U007/N+5vQeVrzpk9B+gWPYnT50jMXSR2WKtL4jtilW3USGo1sSOjvFPJVehMTUbRpqRsGV5F7ttiJrny0LMz1VAIuCbVry+tW+eG0uP3y/7SM29V8A3FSlD35KK6Z+/WQwY7DbLnh84pLkjTKmC8X3dhvLOmAw0hx6Jvd4lrKKCKsQ3FeLyL5NDF99hQd+S8o6at/ZboqPTNGFsLGu6QrUghc3uE9wRXmGoRL5YNlf6ga15luJIWqzAEu5YMiKRSiL4hFjoL8a9MbOM2O7gkZOKzJHyuF/vbl5KA3o990Nd8CCkYGq289yDQw8Pbh0q78l/IqSjfv2594v4RJKrWrbycKOHqKRwfTY4me3J8f37xTp19nB9yrUg9bKoSnVqSTKzMF8uSQlDojGq8sautkqj6FKQZ+8QlBWWdys6Qu7PsXUMuiihrW5ILOdzDpHo3v8q+tj7EBt3ezndMySccdo8l8F0Tt09DpE0ctzVaqeteb7tBn9dP5kIADYU1MpMrH6Js73ZLDPSJ666T5dtELKpYPMowa8TYIM8GihXWgb5B44eLYQz/qF4/wp8lNCyi2+biqJO8gYYvtO3/RnSLTkNFaIizs/3GWSmtZs/koMWI1L9W9R/nkuR/AKmjKo8=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user-profile contributor relationship by id' (get-user-profile)"},q=void 0,M={unversionedId:"api/nerm/v1/get-user-profile",id:"api/nerm/v1/get-user-profile",title:"get-user-profile",description:"Find user-profile contributor relationship by id",source:"@site/docs/api/nerm/v1/get-user-profile.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-user-profile",permalink:"/docs/api/nerm/v1/get-user-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user-profile contributor relationship by id' (get-user-profile)",tags:[],version:"current",frontMatter:{id:"get-user-profile",sidebar_label:"Find user-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v4zYM/lcEPm2A0qRput0M7KHDekOG3Q+0vb0UQcFYTKw7W3IpqU0Q+H8fKLvXdOlu7eUhsaWPEj/yI5kd+JYYo/VubqCANcVPgfgj+5WtCTQYCiXbVgBQwFvrjEqBeNT2CFV6F9kuU/SsmOp8Uqhsq5ZbZQ1oiLgOUFyDWKnBKsBCQ4uMDUVi2d6Bw4aggGxj5a4WY3XgwPx35VcqVqT88jOVUUWvmCJbuiOtUmswklaelaGaohBguk2WyUAROZGGUFbUIBQ7iNtWbgyRrVuDhpXnBiMUkFL2gjbYtLVAjqezn8yb5ckIy+kvo9nk+HT05vh0NjKEs9nJDH8+WSF03UJuC613gYJcMJ1M5Ocpg/NNS2Ukox6gQgHVHdZW1m4ThQgaJK7kothj29a2zJEdfw5yyO6QRR8O0NCyZDTa3gWJ+s0Q9f9HW/OSuDCh+eDqbR/RTkN63q6x7i9y61hBcTLV0OBm//XwFHH1JR502W1h9FK4oxuMvUxfbLMv5psefWhFLjUibn/viIesDdUAi67TEG3MCtorqtEUuvzRMHtOIL+hURe9DtRIJYfLOmuk9KLGSEevUYd39GGV6+vfmX/wbO6y9P4U007/N+5vQeVrzpk9B+gWPYnT50jMXSR2WKtL4jtilW3USGo1sSOjvFPJVehMTUbRpqRsGV5F7ttiJrny0LMz1VAIuCbVry+tW+eG0uP3y/7SM29V8A3FSlD35KK6Z+/WQwY7DbLnh84pLkjTKmC8X3dhvLOmAw0hx6Jvd4lrKKCKsQ3FeLyL5NDF99hQd+S8o6at/ZboqPTNGFsLGu6QrUghc3uE9wRXmGoRL5YNlf6ga15luJIWqzAEu5YMiKRSiL4hFjoL8a9MbOM2O7gkZOKzJHyuF/vbl5KA3o990Nd8CCkYGq289yDQw8Pbh0q78l/IqSjfv2594v4RJKrWrbycKOHqKRwfTY4me3J8f37xTp19nB9yrUg9bKoSnVqSTKzMF8uSQlDojGq8sautkqj6FKQZ+8QlBWWdys6Qu7PsXUMuiihrW5ILOdzDpHo3v8q+tj7EBt3ezndMySccdo8l8F0Tt09DpE0ctzVaqeteb7tBn9dP5kIADYU1MpMrH6Js73ZLDPSJ666T5dtELKpYPMowa8TYIM8GihXWgb5B44eLYQz/qF4/wp8lNCyi2+biqJO8gYYvtO3/RnSLTkNFaIizs/3GWSmtZs/koMWI1L9W9R/nkuR/AKmjKo8=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user-profile contributor relationship by id' (get-user-profile)"},sidebar:"openApiSidebar",previous:{title:"Delete multiple user-profile contributor relationships",permalink:"/docs/api/nerm/v1/delete-user-profiles"},next:{title:"Update a user-profile contributor relationship by id",permalink:"/docs/api/nerm/v1/patch-user-profile"}},O={},S=[{value:"Request",id:"request",level:2}],L={toc:S},N="wrapper";function E(e){var a=e,{components:t}=a,s=T(a,["components"]);return(0,l.kt)(N,x(k(k({},L),s),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Find user-profile contributor relationship by id"),(0,l.kt)(r(),{method:"get",path:"/user_profiles/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Find user-profile contributor relationship by id"),(0,l.kt)("h2",k({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(m.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"user_profile"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"relationship_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`owner`, `contributor`]",schema:{type:"string",enum:["owner","contributor"]},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "user_profile": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "string",\n    "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "profile_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "ne_attribute_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "relationship_type": "owner"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}E.isMDXComponent=!0}}]);