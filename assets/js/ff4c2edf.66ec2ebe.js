"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[19315],{85407:(e,a)=>{function t(e,a){var t,l,s,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(i=null==(s=e.xml)?void 0:s.name)?i:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>y});var l=t(67294),s=t(58750),i=t(82479),n=t(62574),m=t(94693),r=t(85407),o=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:a,examples:t,name:y,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const b=(0,o.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),k=(0,o.lo)(g,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,r.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),v=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:n,children:m}=a;((e,a)=>{var t={};for(var l in e)u.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return i?l.createElement("code",null,m):!i&&r?l.createElement(s.Z,{className:n},m):l.createElement(s.Z,null,m)}},rehypePlugins:[p.Z]})))),T=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),S=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(i.default,null,a.map((([e,a])=>l.createElement(n.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},y),b,g&&l.createElement("span",{className:"openapi-schema__divider"}),k),x,T,v,E,S)}},68229:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>L,contentTitle:()=>S,default:()=>I,frontMatter:()=>E,metadata:()=>N,toc:()=>U});var l=t(3905),s=t(68562),i=t(67001),n=t.n(i),m=t(98439),r=t(34168),o=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&k(e,t,a[t]);if(g)for(var t of g(a))b.call(a,t)&&k(e,t,a[t]);return e},v=(e,a)=>h(e,y(a)),T=(e,a)=>{var t={};for(var l in e)f.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&g)for(var l of g(e))a.indexOf(l)<0&&b.call(e,l)&&(t[l]=e[l]);return t};const E={id:"delete-non-employee-source-schema-attributes",sidebar_label:"Delete all custom schema attributes for Non-Employee Source",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete all custom schema attributes for Non-Employee Source' (delete-non-employee-source-schema-attributes)"},S=void 0,N={unversionedId:"api/v3/delete-non-employee-source-schema-attributes",id:"api/v3/delete-non-employee-source-schema-attributes",title:"delete-non-employee-source-schema-attributes",description:"Delete all custom schema attributes for Non-Employee Source",source:"@site/docs/api/v3/delete-non-employee-source-schema-attributes.api.mdx",sourceDirName:"api/v3",slug:"/api/v3/delete-non-employee-source-schema-attributes",permalink:"/docs/api/v3/delete-non-employee-source-schema-attributes",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete all custom schema attributes for Non-Employee Source' (delete-non-employee-source-schema-attributes)",tags:[],version:"current",frontMatter:{id:"delete-non-employee-source-schema-attributes",sidebar_label:"Delete all custom schema attributes for Non-Employee Source",hide_title:!0,hide_table_of_contents:!0,api:"eJztW1lz2zgS/itd2IdJUiIly3Ic62VL4zhbnvJMsj42D46rAgEtCTMgwACgHa1L/32rAZK67Di7Se0cpSfbJNB3N75uwvfMluh4UNacSjZkEjUG/MWak6LUdo54YSsn8ELMsOCjEJwaVwE967DAp54Nr9kv1mTNYjhTExRzoRF+5oZPsUAT2E2HSfTCqZLYsCG7nCkPaGRWWmUCJJ4euNYgKh9sAT7yA94yhIl1wMFYk2HDzEfRcjjHT5Vy6MFZjSCsCfg5gJ3ARyXN0KB3w8TiI+uwkjteYEBHwt8zRfKUPMxYhxleIBuyRPZUsg5LYrDhPQvzMr4LTpkpW3SYS0wlGwZX4baGCMlyoIgQfuZFqYkCTvZfTY4G+4NDPBocvOyPD8bjV4P+gB+83D86lK/Y4oaI+9Iaj55Y93sD+rHO4BebFDUBMlBGKsHJSmGGQJKhD3DHPfhKCPR+UmkYV4FeOwTlwSy3Bwtj2hQqZ1CCMjWRJEFOug56vW0JjrWi7SfOWQcZnLcEJmtSjK2cE0dlbrlWMmcdVnMmkrwsNYmurOn+6onu/bbR7fhXFIF85yhYg0p2kRi40sdW4raDNv3xRhnMpo4rkhCjyMJKhNLZWyWVmUJhHUIiSaFDKsR1+Zr3Br1evgc/chmDjvQ7rpVZdFhwXPymzJQS6SmBroz6VCE0W0DJGOGPsMVD5OOXvaP+YPJywHn/1WDv8GB8NOH7+72jg6Mj4l6g93yaTFPz5s7x+Rbrf6BBpwRoK7hW/0YJDrm3JgoQmbMOUwEL/7QPIo2vsD/lQ1rbqlnLC5SsHeDw4/E7GByC5mZaxed8umEEk11dUJpWWvMxPaLMW3RqId46NVXmIVHQVAVVqtcnb0ZXZ5esw85P/nl1cnHJOkRrqzyNTJNR1lEszOxdlLhWIOYVahQBZQ4vaqovoEBu/OpClf7ycx+wAIkTXumQw4ua+wM7VknDxNliLZWayvZM5Zh3YEzPCh7EDMbcowSbUvfFSAgsQ3ZWW/IFzJBLdM9zGEmpSEmu4ZbrCj0UfE7pz6Vc5v6kCpVDuFNhZqsAxgYlcN0XS1Oue6PDggpxxdmqUyg58HN4Ok5GIlRcQ1PA23Roo6UWsal4srbcunSXm1VwbgIXQQmu9RyEdQ5FiAVRBd8WQkW2L7hp1rUVa7FYqhXL3c9JmNfBxneCV/4r8u6d5spkUbX2xS3WyeepDqdqFL3RuKmuSMFGtePmelXrribxYaJQy13u7nJ3l7tfmbubL89r1FO/jdBnbxv6XBlehZl18fDcgj4twmoWRXhTO7ID1jUQ6af3lxDsb2hoPX4uCU5+R3yUjvIt4UetP9LzMcGP1llrviABox2TBhOuNMphlHspcTRUMtX+Nrc31o2VlGgegIiVRwdzWwF3CK4yhiThvgPSojc/BJjxWwQeEWyqgKttww5J7pDk7jTanUZ/ndNohyR3ubvL3T9n7n4RSbZSxWypcZKvioK7eYq0+j1py2HQ22/nb9CmXHTVJlohYtBiLLaOHNi4vzfemxwKHEg+kC/3jyZ98bLPDw73DvfGg/4hWz3rr5d53CbZek6t+Dv5MZrYo7tFB5WR6HywVq6P/6oADidU1qj0tLgZVMjZ4qbFjv2jbex4aS2NkecNQvJrGNIsbUQ1zVooaK1r1ioDHKbqFg2U6JSVMZRUgZCB4wFBq0LF5CUtzjG4eTaaBHR1omxOQkEZoSuJPlYCbQk1W7jjKsAYJ4T5gptHBDvlynxHdFq76JuQPJyTxmekMZx8FoiU6C1yP3hovntqAjqqERfJwY8MelO3ww1UBj+XqWa1uHOHz3f4fHfG7874v8YZv8Pnu9zd5e6fM3f/C3xeo6HH8flBr/fV+Pyg18t70GKpNxRc/3eYHlOlliCGN1ghKhfHzQ0Gj7gizOzyEki8LBFmbMi6q9cusnQ/wnfvm4sSi24CchlfvR+S+oIkceU0G7JZCKUfdrv3AQ03YZHzUuVKogkqzI29y4Uturf7D5Qluj+QUrB0VlYijqNH707r5iOP5neKIjyVw8ggOSMqTLHMlY6D4y/Spzsg5OW5rRwkMh0I87KOtvhY2KLkZv6Dj6vzGF1bOvJSXTm9eEqff+1/SY9E5BE9HjLfF3nxUkHl9IZ6JP4NuUtUToV59NeVR3ec6tioohC4vlldE28DJQm3Vi7PIur1+lsCvaVlffgRuUNXf/549tP7y+cwJbQaq0XlCSijovYCOLxD52M1HDWfAmhTPKCcraazqNxo7WMLZR9MtL3L4YO5QITr09pQcFErAcfaVhLOTy4uowuIAMayQhRunjWelHiLmk7TfGl5ClRphe/yUnX52sbu83h2xiZDmYl1RXycfzAZvFZU0hRhAFpTKxx7RrguGy35ipb/uxh/a+hliV4W6fnnG3IkU1+LdJlHOIxm4tpH630D+0QxW6FIXZkJGdHdlIKsUUuy/tFMNH78BknWKGZEcV2SD+b9TIkZrO+DVA3Bz2ylJZyCmFnr8e8AFE4UcdfTSkn8BsHuiG0W8yTr91aEyhLTTGWVx+c5iXiG3JkUVXxM532EOxYmysiUzR+jg6+c/gjcSPi4pnZ8fF0fyyTQN4hNLDNimaUC4msV0rnnSV7WYaRHrBApEI6XcRBrRC3rSsVMxB48EyL9btwTL+XZMhUfXw7TH8Nleax/g/iCVrdruCZ2y8+JdN2wpkWn35q9mlnDphG35dV2qsyG6ZK87ayLDuI/mr6k8Wg5knlr9Px71+9HasoftSL/bpVwV3/+uvWnRtYUdpFt3YI8FvoJDW6PEH30uEd6G3M5wnkuQmz/olEfI1lqHijmYwUQM4VxEFEiD4QyOxR1tohZWzpLpQJ9Ijp1yGka7gXXfKy0CvMc3iOgEbZy1OXR1Y1g4Vdb+/WCK/0u3uh+3fgUjm1RVIbEmVhXFcADPOl45UWVSpawxmCjpY1wsN3VZCzFHpklj/2OK/zbCU2slcAV5z7Bqxusr8fVXMS+ob4LvlTkHHWMP1q3DvWfos1Llc1Ql9RnaiXQeFzh8PPp5RZFW6KpL7dbN+3Wm3yX1i46jNqqFBj7eS/v0aPS+lBwsyY59XBP36lfu76frqxvxt/9co7/u17drw8mWtItacRGmlepP0qd6jV7qFNlHTbcutS/2qzedNjM+kD77+9pSkOd24Ief6qQRgDXN8vGLDZIUnn6XbLhhGu/ef1/1WDPahXlc9j8p4AH9WkGi2a+nCkw1mG/4Xz1fxMWN4sOSxOjKFB6nWZKKxu3vrpQG9f2+a9Pzk4uT9hi8R9x1JBC",sidebar_class_name:"delete api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete all custom schema attributes for Non-Employee Source' (delete-non-employee-source-schema-attributes)"},sidebar:"openApiSidebar",previous:{title:"Create a new Schema Attribute for Non-Employee Source",permalink:"/docs/api/v3/create-non-employee-source-schema-attributes"},next:{title:"Get Schema Attribute Non-Employee Source",permalink:"/docs/api/v3/get-non-employee-schema-attribute"}},L={},U=[{value:"Request",id:"request",level:2}],q={toc:U},w="wrapper";function I(e){var a=e,{components:t}=a,i=T(a,["components"]);return(0,l.kt)(w,v(x(x({},q),i),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Delete all custom schema attributes for Non-Employee Source"),(0,l.kt)(n(),{method:"delete",path:"/non-employee-sources/{sourceId}/schema-attributes",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"This end-point deletes all custom schema attributes for a non-employee source. Requires role context of ",(0,l.kt)("inlineCode",{parentName:"p"},"idn:nesr:delete")),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"sourceId",schema:{type:"string"},required:!0,description:"The Source id",example:"ef38f94347e94562b5bb8424a56397d8"},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"204",value:"204",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"No content - indicates the request was successful but there is no content to be returned in the response.")),(0,l.kt)("div",null)),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 500 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}I.isMDXComponent=!0}}]);