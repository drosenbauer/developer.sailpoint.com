"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45919],{85407:(e,a)=>{function t(e,a){var t,l,s,m,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(m=null==(s=e.xml)?void 0:s.name)?m:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>y});var l=t(67294),s=t(58750),m=t(82479),n=t(62574),i=t(94693),r=t(85407),o=t(52347),p=t(25365),u=t(88453),d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:a,examples:t,name:y,required:b,schema:h}}){h&&(null==h?void 0:h.type)||(h={type:"any"});const v=(0,o.lo)(h,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),g=(0,o.lo)(b,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,r.A4)(h),(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,i.T)(e),rehypePlugins:[u.Z]})))),k=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,i.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:m,className:n,children:i}=a;((e,a)=>{var t={};for(var l in e)c.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&f.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return m?l.createElement("code",null,i):!m&&r?l.createElement(s.Z,{className:n},i):l.createElement(s.Z,null,i)}},rehypePlugins:[u.Z]})))),T=(0,o.lo)(h&&h.items?h.items.default:h?h.default:void 0,(e=>l.createElement("div",null,l.createElement(p.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),O=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(m.default,null,a.map((([e,a])=>l.createElement(n.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},y),v,b&&l.createElement("span",{className:"openapi-schema__divider"}),g),x,T,k,E,O)}},41708:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>w,contentTitle:()=>O,default:()=>S,frontMatter:()=>E,metadata:()=>_,toc:()=>I});var l=t(3905),s=t(68562),m=t(67001),n=t.n(m),i=t(98439),r=t(34168),o=t(3655),p=t(13503),u=t(82479),d=t(62574),c=Object.defineProperty,f=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,a,t)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))h.call(a,t)&&g(e,t,a[t]);if(b)for(var t of b(a))v.call(a,t)&&g(e,t,a[t]);return e},k=(e,a)=>f(e,y(a)),T=(e,a)=>{var t={};for(var l in e)h.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&b)for(var l of b(e))a.indexOf(l)<0&&v.call(e,l)&&(t[l]=e[l]);return t};const E={id:"delete-role-profile",sidebar_label:"Delete a role profile assignment",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVcFu40YM/RWCpxaQYydx2q2AHlLEBVx0twsn7WVhFLSGtmdXmlE4M04MQf9ecORsnDotNhdbEt+I75GPVIe+ZaFovZsbLNFwzZEXvuaP4te2ZizQcKjEtorBEm8yAgjE1wztgAIKwW5cwy5igZE2ActPeIwIuCywJaGGI4uGO3TUMJZoDRZo9d0txe1JwvkN+DXELYNffeYqQvQgHMXyjgtIraHIBXiBgTsWKHyfrLDBMkriAkO15Yaw7DDuW80Yoli3wQLXXhqKWGJKmQU/UtPWCjm/mP5g3q0uR1Rd/DSaTs6vRu/Or6YjwzSdXk7px8s1Yd8vNVtovQscNMHFZKJ/LxUsjiv1QAEMhyh+z5qy8i5q2coOqW1rW+VmjD8HPdqdch+KgH3f9wVOX0v3CxlY8H3iEGEEydGqZi1a5VVb5LO3ZPWO/1jnbr3MX2C0MVdq7nZUW/ObHu2L/8b9paicZibiJWC/HERcvSZi7iKLoxpuWXYskM/ASDufxLEB7yC5LTlTswF+rDifDG8S92+qreg0RDv0kjXlKbNraDgE2jAMz1fWbbI9B/yxiW69yB6CbzhuFfXALsKDeLfJ/cvqNeafR09Z6BSUONbx+ftgm3FnTY8FhlyNYXyS1FjiNsY2lONxF9mRix+o4f7MecdNW/s981nlmzG1FgvckVg1Q1b3DB8krinVOglUNVz5kym8y3DQkT0MO5tsqhSib1hU0FL5VUls3GeCKyZhuU4q59PyOHyrLRh4HIO+dkRF4WFw9X4AYXG4+PVpbO/8F3YQ9ffnvU8yXKLW1bq11zdquQYJ52eTs8mRIT/MFu/h+uP8VOuW4SkIFTlYMaQw6KWq4hCAnIHGG7veg1bVpwDCwSepOIB1kMmw21nxeSuqLWtbsQu53IfN935+l7m2PsSG3FHkG7bsC87ds+m/aUMPZY78GMdtTVYnd/BTd7DfsL2f7IcFltboCt/6EDXadSsK/KfUfa+P7xOLNn357LJsAWODXhss11QH/h/W3y0OW/t7ePvGf1XP4SG5ffZ+nfQOC/zC++Gr0y/7ArdMhiWTHQLXle6SoyMnO0Sd/HVsb2a/z+5m2Pf/APv9g7k=",sidebar_class_name:"delete api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a role profile assignment' (delete-role-profile)"},O=void 0,_={unversionedId:"api/nerm/v1/delete-role-profile",id:"api/nerm/v1/delete-role-profile",title:"delete-role-profile",description:"Delete a role profile assignment",source:"@site/docs/api/nerm/v1/delete-role-profile.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/delete-role-profile",permalink:"/docs/api/nerm/v1/delete-role-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a role profile assignment' (delete-role-profile)",tags:[],version:"current",frontMatter:{id:"delete-role-profile",sidebar_label:"Delete a role profile assignment",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVcFu40YM/RWCpxaQYydx2q2AHlLEBVx0twsn7WVhFLSGtmdXmlE4M04MQf9ecORsnDotNhdbEt+I75GPVIe+ZaFovZsbLNFwzZEXvuaP4te2ZizQcKjEtorBEm8yAgjE1wztgAIKwW5cwy5igZE2ActPeIwIuCywJaGGI4uGO3TUMJZoDRZo9d0txe1JwvkN+DXELYNffeYqQvQgHMXyjgtIraHIBXiBgTsWKHyfrLDBMkriAkO15Yaw7DDuW80Yoli3wQLXXhqKWGJKmQU/UtPWCjm/mP5g3q0uR1Rd/DSaTs6vRu/Or6YjwzSdXk7px8s1Yd8vNVtovQscNMHFZKJ/LxUsjiv1QAEMhyh+z5qy8i5q2coOqW1rW+VmjD8HPdqdch+KgH3f9wVOX0v3CxlY8H3iEGEEydGqZi1a5VVb5LO3ZPWO/1jnbr3MX2C0MVdq7nZUW/ObHu2L/8b9paicZibiJWC/HERcvSZi7iKLoxpuWXYskM/ASDufxLEB7yC5LTlTswF+rDifDG8S92+qreg0RDv0kjXlKbNraDgE2jAMz1fWbbI9B/yxiW69yB6CbzhuFfXALsKDeLfJ/cvqNeafR09Z6BSUONbx+ftgm3FnTY8FhlyNYXyS1FjiNsY2lONxF9mRix+o4f7MecdNW/s981nlmzG1FgvckVg1Q1b3DB8krinVOglUNVz5kym8y3DQkT0MO5tsqhSib1hU0FL5VUls3GeCKyZhuU4q59PyOHyrLRh4HIO+dkRF4WFw9X4AYXG4+PVpbO/8F3YQ9ffnvU8yXKLW1bq11zdquQYJ52eTs8mRIT/MFu/h+uP8VOuW4SkIFTlYMaQw6KWq4hCAnIHGG7veg1bVpwDCwSepOIB1kMmw21nxeSuqLWtbsQu53IfN935+l7m2PsSG3FHkG7bsC87ds+m/aUMPZY78GMdtTVYnd/BTd7DfsL2f7IcFltboCt/6EDXadSsK/KfUfa+P7xOLNn357LJsAWODXhss11QH/h/W3y0OW/t7ePvGf1XP4SG5ffZ+nfQOC/zC++Gr0y/7ArdMhiWTHQLXle6SoyMnO0Sd/HVsb2a/z+5m2Pf/APv9g7k=",sidebar_class_name:"delete api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a role profile assignment' (delete-role-profile)"},sidebar:"openApiSidebar",previous:{title:"Update a role-profile contributor relationship by id",permalink:"/docs/api/nerm/v1/patch-role-profile"},next:{title:"Create a create workflow",permalink:"/docs/api/nerm/v1/create-create-workflow"}},w={},I=[{value:"Request",id:"request",level:2}],M={toc:I},N="wrapper";function S(e){var a=e,{components:t}=a,m=T(a,["components"]);return(0,l.kt)(N,k(x(x({},M),m),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Delete a role profile assignment"),(0,l.kt)(n(),{method:"delete",path:"/role_profile/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Delete a role profile assignment"),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Role profile was destroyed")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,l.kt)("p",null,"object"))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(d.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}S.isMDXComponent=!0}}]);