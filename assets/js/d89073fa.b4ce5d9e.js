"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77491],{85407:(e,t)=>{function a(e,t){var a,i,s,m,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(i=null==(a=e.xml)?void 0:a.name)?i:e.type:"array"===e.type?null!=(m=null==(s=e.xml)?void 0:s.name)?m:e.type:null!=(n=e.title)?n:e.type}t.A4=t.uc=void 0,t.uc=function(e,t){var i;return e.items?a(e.items)+"[]":null!=(i=a(e))?i:""},t.A4=function e(t){if(!t)return;if(t.items&&void 0===t.minItems&&void 0===t.maxItems)return e(t.items);let a=[];if(t.items&&t.items.enum&&t.items.enum&&a.push(`[${t.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minLength||t.maxLength){let e,i,s="";t.minLength&&t.minLength>1&&(e=`\`>= ${t.minLength} characters\``),t.minLength&&1===t.minLength&&(e="`non-empty`"),t.maxLength&&(i=`\`<= ${t.maxLength} characters\``),e&&!i&&(s+=e),i&&!e&&(s+=i),e&&i&&(s+=`${e} and ${i}`),a.push(s)}if(t.minimum||t.maximum||"number"==typeof t.exclusiveMinimum||"number"==typeof t.exclusiveMaximum){let e,i,s="";"number"==typeof t.exclusiveMinimum?e=`\`> ${t.exclusiveMinimum}\``:t.minimum&&!t.exclusiveMinimum?e=`\`>= ${t.minimum}\``:t.minimum&&!0===t.exclusiveMinimum&&(e=`\`> ${t.minimum}\``),"number"==typeof t.exclusiveMaximum?i=`\`< ${t.exclusiveMaximum}\``:t.maximum&&!t.exclusiveMaximum?i=`\`<= ${t.maximum}\``:t.maximum&&!0===t.exclusiveMaximum&&(i=`\`< ${t.maximum}\``),e&&!i&&(s+=e),i&&!e&&(s+=i),e&&i&&(s+=`${e} and ${i}`),a.push(s)}t.pattern&&a.push(`Value must match regular expression \`${t.pattern}\``);const i=t;if(i.mapping){const e=Object.keys(i.mapping);a.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return t.enum&&a.push(`[${t.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minItems&&a.push(`\`>= ${t.minItems}\``),t.maxItems&&a.push(`\`<= ${t.maxItems}\``),0!==a.length?"**Possible values:** "+a.join(", "):void 0}},34168:(e,t,a)=>{a.d(t,{Z:()=>y});var i=a(67294),s=a(58750),m=a(82479),n=a(62574),l=a(94693),r=a(85407),o=a(52347),p=a(25365),c=a(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:t,examples:a,name:y,required:g,schema:h}}){h&&(null==h?void 0:h.type)||(h={type:"any"});const v=(0,o.lo)(h,(e=>i.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),k=(0,o.lo)(g,(()=>i.createElement("span",{className:"openapi-schema__required"},"required"))),b=(0,o.lo)((0,r.A4)(h),(e=>i.createElement("div",null,i.createElement(p.D,{children:(0,l.T)(e),rehypePlugins:[c.Z]})))),x=(0,o.lo)(e,(e=>i.createElement("div",null,i.createElement(p.D,{children:(0,l.T)(e),components:{pre:"div",code(e){var t=e,{node:a,inline:m,className:n,children:l}=t;((e,t)=>{var a={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&f.call(e,i)&&(a[i]=e[i])})(t,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return m?i.createElement("code",null,l):!m&&r?i.createElement(s.Z,{className:n},l):i.createElement(s.Z,null,l)}},rehypePlugins:[c.Z]})))),_=(0,o.lo)(h&&h.items?h.items.default:h?h.default:void 0,(e=>i.createElement("div",null,i.createElement(p.D,{children:`**Default value:** \`${e}\``})))),q=(0,o.lo)((0,o.toString)(t),(e=>i.createElement("div",null,i.createElement("strong",null,"Example: "),e))),T=(0,o.lo)(a,(e=>{const t=Object.entries(e);return i.createElement(i.Fragment,null,i.createElement("strong",null,"Examples:"),i.createElement(m.default,null,t.map((([e,t])=>i.createElement(n.default,{value:e,label:e},t.summary&&i.createElement("p",null,t.summary),t.description&&i.createElement("p",null,i.createElement("strong",null,"Description: "),i.createElement("span",null,t.description)),i.createElement("p",null,i.createElement("strong",null,"Example: "),i.createElement("code",null,t.value)))))))}));return i.createElement("div",{className:"openapi-params__list-item"},i.createElement("span",{className:"openapi-schema__container"},i.createElement("strong",{className:"openapi-schema__property"},y),v,g&&i.createElement("span",{className:"openapi-schema__divider"}),k),b,_,x,q,T)}},26507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>T,default:()=>M,frontMatter:()=>q,metadata:()=>E,toc:()=>N});var i=a(3905),s=a(68562),m=a(67001),n=a.n(m),l=a(98439),r=a(34168),o=a(3655),p=a(13503),c=a(82479),d=a(62574),u=Object.defineProperty,f=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&k(e,a,t[a]);if(g)for(var a of g(t))v.call(t,a)&&k(e,a,t[a]);return e},x=(e,t)=>f(e,y(t)),_=(e,t)=>{var a={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&g)for(var i of g(e))t.indexOf(i)<0&&v.call(e,i)&&(a[i]=e[i]);return a};const q={id:"get-identity-proofing-results",sidebar_label:"Get identity proofing result data in bulk",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V21v2zYQ/ivEfdgnJZY7Z20FBEOAZoWBpQ3SDPsQGMZZOtlsKFIhT04Ew/99IGXJcuo4brb5g1/Ee3nuePfceQWmJIssjR5nkMCceJyRZsn1tTUml3p+Q65S7CCCjFxqZemFIYHbhXSCdFYaqVmkqIUltpKWJOTGhCg3NoQNRkSGjEJqMavUvcitKcSfMqe0ThVBBIxzB8kdvKTuYBJBiRYLYrJedAUaC4IEHiqyNUQgde/HLt4LpcyjE7mxosS51CFogToTzliWen4KEVh6qKSlDJIclaMIXLqgAiFZAdel92Rm3ylliKC0PnUsyflTJQvJPTGpmeZkIQJ6wqJUBMkwjtcRmDx39IrkWRC0GdmenGMr9bwvBqklZMqmyLBe9w46OMM43no8izujzzUd18FgRlR+bQOkp1KZjCBhW9E66nJdWpNLRVOZHU74dSMnxp8EG5FLxWTFrD4qy12wubEFMiRQVcHfNvgRjT7Eo9HwZHQ2zE5G77OPJx/ep+9OPmKcxzkNfz2jmQ+uw/1o7H2uzOPUkXPS6FcD+HujIL41Cv9lJH1gTXUfxjL+JNqGFE1H/gsopKvCN1qJzvd1jlLBpI+oIEbfq4cx3RBXVjsxQ04XHlir5lucF+TbtjTa0VHoZsYoQh285OgT0op2dx4KcT3x1hrDofXexbH/2MV2+VRSypR1GHy6UCxRSf/soSLnM54azaRDO2JZKpkGVhh8d97I6ujubxlr2jLWtGWsrSpai4GimAp3jMlj2sESZl+1qtsm3YMEU94U++tFGe1tkmP0eqRwpHiDrvV3lNamUQ5VNOmsebJb2z2PyGzlrGLaewmYZdLnC9X1znXsOtwl2xaWLyFrlhQotcewh0LLkOmEZUHeZlVmP6mzjoAlBz7cP7eDyLTr5zfPsUOTy4MwjGr/kaan/VfWMfmg3SJ+D97Ph/Evja/z3+KmWGgpTbXnHo6zMop3EnXVJmPdvCJPdwuzWX9C6fDCG3y5qyNwZJftDlJZBQksmEuXDAYrJo2av2BB61NtNBWlMjXRaWqKAZYSIliilThTm8rqxBsW23AfYFpQan5cu4K48EQt0Dk515R5bksrx6bwKQ8M6SitrOQ6AJwRWrIXlQ/rbtI//uYJrsHRF+ry7IOCDVkHkg5CEG2+/NGW5K25Jy3Yv5/XprLN15B2qXPjLfp0NSEMT+PTGLYX8uXy5kpcXI/3rJgk2sOwYc5IVK6JF9OUnAv7W2EymdfCZ9VUzjO+qWxKzo+hAIb0UlqjC9LslzwlU/JTKenm3dX4NmAtjeMCde/kM/Fx6+xz8KvtbPk/VuXmepieeFAqlDrQhw0t2JTv3YGhNIlgYRx7odVqho7+smq99o+bQe9rJpPOl+h2YL8Y3ct73l6U91Q/XyKXqCovCH4FOd7xEfvZAQT718E3Qnl9PTuApNv/3uj8Z/awAzB6S98WyGTLVoE7IlgQhv8Qd6uN3kWaUtmH/8Mm5a10HPv50vfaP1vPBxg=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get identity proofing result data in bulk' (get-identity-proofing-results)"},T=void 0,E={unversionedId:"api/nerm/v1/get-identity-proofing-results",id:"api/nerm/v1/get-identity-proofing-results",title:"get-identity-proofing-results",description:"Get identity proofing result data in bulk",source:"@site/docs/api/nerm/v1/get-identity-proofing-results.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-identity-proofing-results",permalink:"/docs/api/nerm/v1/get-identity-proofing-results",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get identity proofing result data in bulk' (get-identity-proofing-results)",tags:[],version:"current",frontMatter:{id:"get-identity-proofing-results",sidebar_label:"Get identity proofing result data in bulk",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V21v2zYQ/ivEfdgnJZY7Z20FBEOAZoWBpQ3SDPsQGMZZOtlsKFIhT04Ew/99IGXJcuo4brb5g1/Ee3nuePfceQWmJIssjR5nkMCceJyRZsn1tTUml3p+Q65S7CCCjFxqZemFIYHbhXSCdFYaqVmkqIUltpKWJOTGhCg3NoQNRkSGjEJqMavUvcitKcSfMqe0ThVBBIxzB8kdvKTuYBJBiRYLYrJedAUaC4IEHiqyNUQgde/HLt4LpcyjE7mxosS51CFogToTzliWen4KEVh6qKSlDJIclaMIXLqgAiFZAdel92Rm3ylliKC0PnUsyflTJQvJPTGpmeZkIQJ6wqJUBMkwjtcRmDx39IrkWRC0GdmenGMr9bwvBqklZMqmyLBe9w46OMM43no8izujzzUd18FgRlR+bQOkp1KZjCBhW9E66nJdWpNLRVOZHU74dSMnxp8EG5FLxWTFrD4qy12wubEFMiRQVcHfNvgRjT7Eo9HwZHQ2zE5G77OPJx/ep+9OPmKcxzkNfz2jmQ+uw/1o7H2uzOPUkXPS6FcD+HujIL41Cv9lJH1gTXUfxjL+JNqGFE1H/gsopKvCN1qJzvd1jlLBpI+oIEbfq4cx3RBXVjsxQ04XHlir5lucF+TbtjTa0VHoZsYoQh285OgT0op2dx4KcT3x1hrDofXexbH/2MV2+VRSypR1GHy6UCxRSf/soSLnM54azaRDO2JZKpkGVhh8d97I6ujubxlr2jLWtGWsrSpai4GimAp3jMlj2sESZl+1qtsm3YMEU94U++tFGe1tkmP0eqRwpHiDrvV3lNamUQ5VNOmsebJb2z2PyGzlrGLaewmYZdLnC9X1znXsOtwl2xaWLyFrlhQotcewh0LLkOmEZUHeZlVmP6mzjoAlBz7cP7eDyLTr5zfPsUOTy4MwjGr/kaan/VfWMfmg3SJ+D97Ph/Evja/z3+KmWGgpTbXnHo6zMop3EnXVJmPdvCJPdwuzWX9C6fDCG3y5qyNwZJftDlJZBQksmEuXDAYrJo2av2BB61NtNBWlMjXRaWqKAZYSIliilThTm8rqxBsW23AfYFpQan5cu4K48EQt0Dk515R5bksrx6bwKQ8M6SitrOQ6AJwRWrIXlQ/rbtI//uYJrsHRF+ry7IOCDVkHkg5CEG2+/NGW5K25Jy3Yv5/XprLN15B2qXPjLfp0NSEMT+PTGLYX8uXy5kpcXI/3rJgk2sOwYc5IVK6JF9OUnAv7W2EymdfCZ9VUzjO+qWxKzo+hAIb0UlqjC9LslzwlU/JTKenm3dX4NmAtjeMCde/kM/Fx6+xz8KvtbPk/VuXmepieeFAqlDrQhw0t2JTv3YGhNIlgYRx7odVqho7+smq99o+bQe9rJpPOl+h2YL8Y3ct73l6U91Q/XyKXqCovCH4FOd7xEfvZAQT718E3Qnl9PTuApNv/3uj8Z/awAzB6S98WyGTLVoE7IlgQhv8Qd6uN3kWaUtmH/8Mm5a10HPv50vfaP1vPBxg=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get identity proofing result data in bulk' (get-identity-proofing-results)"},sidebar:"openApiSidebar",previous:{title:"Uploads a new attachment attribute value to a workflow session",permalink:"/docs/api/nerm/v1/post-workflow-session-upload"},next:{title:"Get saved advanced search queries",permalink:"/docs/api/nerm/v1/get-advanced-search"}},I={},N=[{value:"Request",id:"request",level:2}],Z={toc:N},j="wrapper";function M(e){var t=e,{components:a}=t,m=_(t,["components"]);return(0,i.kt)(j,x(b(b({},Z),m),{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get identity proofing result data in bulk"),(0,i.kt)(n(),{method:"get",path:"/identity_proofing_results",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"This endpoint can retrieve identity proofing result data in bulk from Lifecycle"),(0,i.kt)("h2",b({},{id:"request"}),"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"query",in:"query",description:"Allows for pagination and sorting.",required:!1,schema:{type:"object",properties:{limit:{type:"integer",example:100},offset:{type:"integer",example:50},order:{type:"string",example:"created_at"}},example:{limit:100,offset:50,order:"created_at"}},style:"deepObject",explode:!0},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid",example:"4e480441-451d-47d9-87c2-9a0f0fe135eb"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"workflow_session_id",in:"query",description:"Workflow Session ID to filter by",required:!1,schema:{type:"string",format:"uuid"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"result",in:"query",description:"ID Proofing Result to filter by",required:!1,schema:{type:"string",enum:["pass","fail"]}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,schema:{type:"boolean",default:!1,example:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Expected response to a valid request")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"identity_proofing_results"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"identity_proofing_action_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"workflow_session_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"proofing_workflow",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `pass`, `fail`]",schema:{type:"string",enum:["pending","pass","fail"]},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"proofing_attributes"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"_metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"offset",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"total",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"next",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"/endpoint?limit=10&offset=60"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"previous",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"/endpoint?limit=10&offset=40"},mdxType:"SchemaItem"}))))))),(0,i.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "identity_proofing_results": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "identity_proofing_action_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "workflow_session_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "profile_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "proofing_workflow": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "result": "pending",\n      "proofing_attributes": {\n        "result": "approve"\n      },\n      "created_at": "2024-06-07T17:34:17.155Z",\n      "updated_at": "2024-06-07T17:34:17.155Z"\n    }\n  ],\n  "_metadata": {\n    "limit": 0,\n    "offset": 0,\n    "total": 0,\n    "next": "/endpoint?limit=10&offset=60",\n    "previous": "/endpoint?limit=10&offset=40"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}M.isMDXComponent=!0}}]);