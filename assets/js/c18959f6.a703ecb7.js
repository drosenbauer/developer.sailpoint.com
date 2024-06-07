"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80946],{85407:(e,a)=>{function t(e,a){var t,l,s,m,i;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(m=null==(s=e.xml)?void 0:s.name)?m:e.type:null!=(i=e.title)?i:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>g});var l=t(67294),s=t(58750),m=t(82479),i=t(62574),n=t(94693),r=t(85407),p=t(52347),o=t(25365),c=t(88453),u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const g=function({param:{description:e,example:a,examples:t,name:g,required:y,schema:b}}){b&&(null==b?void 0:b.type)||(b={type:"any"});const f=(0,p.lo)(b,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),v=(0,p.lo)(y,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,p.lo)((0,r.A4)(b),(e=>l.createElement("div",null,l.createElement(o.D,{children:(0,n.T)(e),rehypePlugins:[c.Z]})))),x=(0,p.lo)(e,(e=>l.createElement("div",null,l.createElement(o.D,{children:(0,n.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:m,className:i,children:n}=a;((e,a)=>{var t={};for(var l in e)d.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&u)for(var l of u(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(i||"");return m?l.createElement("code",null,n):!m&&r?l.createElement(s.Z,{className:i},n):l.createElement(s.Z,null,n)}},rehypePlugins:[c.Z]})))),T=(0,p.lo)(b&&b.items?b.items.default:b?b.default:void 0,(e=>l.createElement("div",null,l.createElement(o.D,{children:`**Default value:** \`${e}\``})))),N=(0,p.lo)((0,p.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),j=(0,p.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(m.default,null,a.map((([e,a])=>l.createElement(i.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},g),f,y&&l.createElement("span",{className:"openapi-schema__divider"}),v),k,T,x,N,j)}},27117:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>O,contentTitle:()=>j,default:()=>Z,frontMatter:()=>N,metadata:()=>S,toc:()=>q});var l=t(3905),s=t(68562),m=t(67001),i=t.n(m),n=t(98439),r=t(34168),p=t(3655),o=t(13503),c=t(82479),u=t(62574),d=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&v(e,t,a[t]);if(y)for(var t of y(a))f.call(a,t)&&v(e,t,a[t]);return e},x=(e,a)=>h(e,g(a)),T=(e,a)=>{var t={};for(var l in e)b.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&y)for(var l of y(e))a.indexOf(l)<0&&f.call(e,l)&&(t[l]=e[l]);return t};const N={id:"get-user",sidebar_label:"Find user by id",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V21v2zYQ/ivEfdoAKVYcO00EDFi2pkOGNi3ysn4IjIAiTzZbiVRJKo1h6L8PR8qxHKdZgm3+EJvk8bnnXnh3WYFp0HKvjD6TkMMc/bVDCwlIdMKqhk4ghzNdGlYayzhzDQpVKsHaKOj53EF+A7R0MEug4ZbX6GmV36xA8xohByUhAUVYDfeLXQVvmSmZXyAzxRcUnnnDLHqr8A4T1jaSe0yYsUxihR4hAYvfWmVRQu5tiwk4scCaQ74Cv2xIo/NW6TkkUBpbcw85tG1ggfe8bioS2R9PDuVRcZByMT5OJ9n+ND3an05SiXwyOZjwNwclh66bkTbXGO3QkYJxltHXtgWn9w0Kj5KtRckEzu54pWjvW4vOQwLCaI/a033eNJUSwfmjL45AVrtWRHdAAo2lUHkVKQTn/6OUki/xh0Uuja6Wa09u/COLw/IIj4r0cCrG6eSNnKY8k0V6nBVCTPBYlsf4qlBSBGMwoUugfZpfrfR71HO/gPxgnEDN74fLH7Mln+zv0Lne8AlO65I+JXcVb1+8WiALkkMd9ZJAwnaXANZcVc+6OEo8Bb0+2WB7dP5Xx1XVGKX9njA16YjQuypQtzW9u3NsrClVhf3DPUcuBDoXljPSXPK2Ii6PJR9xWjZIjuqf9YbW9jVipHz1Qv9F0SHaW2VReBOAnOe+dc8ZdyK8uiOAt8rxokIZLRqquQwgWyEe6usRugQqM1f6ZbSj6Hbc34c9wuHO3/4Q7CHylOSpVzX2L+zjIGe3NX5eoH4gzwieCMxRskckPqNMWPaGvcOCjbPxhO2P8+k0H2d7k+nh4dE4yzJ2ennF0myaZxlxFcZ8VehuKSUaj/KW+/+SdA/PvqNFttbxLyk3Fku0FuVtxfW85fMXplplBK9w48eI46j6tG47B0ub/n4SU4Lu/F/4m6cC9HTSMXThk8DkqQbyG5fsIvYJlrJWU74TujAE63HvNd3DaPxYhv77uEOsKZ3p0Jr+pKtd8mO5v0gqqDm11lgH3SwaMX3KiDPtqTxW7BLtHVoW7rCUGkBrNUpmNGv1gmtZoWR4TymjjHavMu75poekcpfZCavROT5HFvcLpechmlF+GL9LY+2SOVOjX5DUd9SefbdGz/sIdgnQmelHJqJAQ00OozAFjVZKdpCACz6IY1BrK8hh4X3j8tFo5VFz7c95jd2eNhrrpjJLRCr6I94oSOCOW0UpEOvjg3g0bF3SuahRmN18DeKhezHunJqT5ymVWudNTVU8DDUORWuVXwaCBXKL9qQlO25mw+NLcnzkMRR6iAMZBf0ARusoBEn/4926uFyZr1To6O8vS9Pa+DO8E6VLQ4jkrmjC/l62lw3S8Pz04gM7+XT25NtcHzLBNSvCAw32xk7IuJasNlKVS0ZeNa2jIc20VqBjSrNABvWdskbXqD0lY6UEahfc3U+wH86uAtfGOF9zPTh5p7SMRaFYsjBSbVFcbTL72UE6etPjvR81FY/NJqTNqk+v9ZCdQK5CJ1wY52l7tSq4w2tbdR1tf2vRUlBnmywKIZbrJpqXvHKPS/qQ5k8X/XT9M3v9ZP6kIf0m18uQ21VLK0jgKy7jfwfdrEtggVzSYHuz6g9OQlMZXNmpDJSpD4/xj1OK0d90xle/",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)"},j=void 0,S={unversionedId:"api/nerm/v1/get-user",id:"api/nerm/v1/get-user",title:"get-user",description:"Find user by id",source:"@site/docs/api/nerm/v1/get-user.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-user",permalink:"/docs/api/nerm/v1/get-user",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)",tags:[],version:"current",frontMatter:{id:"get-user",sidebar_label:"Find user by id",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V21v2zYQ/ivEfdoAKVYcO00EDFi2pkOGNi3ysn4IjIAiTzZbiVRJKo1h6L8PR8qxHKdZgm3+EJvk8bnnXnh3WYFp0HKvjD6TkMMc/bVDCwlIdMKqhk4ghzNdGlYayzhzDQpVKsHaKOj53EF+A7R0MEug4ZbX6GmV36xA8xohByUhAUVYDfeLXQVvmSmZXyAzxRcUnnnDLHqr8A4T1jaSe0yYsUxihR4hAYvfWmVRQu5tiwk4scCaQ74Cv2xIo/NW6TkkUBpbcw85tG1ggfe8bioS2R9PDuVRcZByMT5OJ9n+ND3an05SiXwyOZjwNwclh66bkTbXGO3QkYJxltHXtgWn9w0Kj5KtRckEzu54pWjvW4vOQwLCaI/a033eNJUSwfmjL45AVrtWRHdAAo2lUHkVKQTn/6OUki/xh0Uuja6Wa09u/COLw/IIj4r0cCrG6eSNnKY8k0V6nBVCTPBYlsf4qlBSBGMwoUugfZpfrfR71HO/gPxgnEDN74fLH7Mln+zv0Lne8AlO65I+JXcVb1+8WiALkkMd9ZJAwnaXANZcVc+6OEo8Bb0+2WB7dP5Xx1XVGKX9njA16YjQuypQtzW9u3NsrClVhf3DPUcuBDoXljPSXPK2Ii6PJR9xWjZIjuqf9YbW9jVipHz1Qv9F0SHaW2VReBOAnOe+dc8ZdyK8uiOAt8rxokIZLRqquQwgWyEe6usRugQqM1f6ZbSj6Hbc34c9wuHO3/4Q7CHylOSpVzX2L+zjIGe3NX5eoH4gzwieCMxRskckPqNMWPaGvcOCjbPxhO2P8+k0H2d7k+nh4dE4yzJ2ennF0myaZxlxFcZ8VehuKSUaj/KW+/+SdA/PvqNFttbxLyk3Fku0FuVtxfW85fMXplplBK9w48eI46j6tG47B0ub/n4SU4Lu/F/4m6cC9HTSMXThk8DkqQbyG5fsIvYJlrJWU74TujAE63HvNd3DaPxYhv77uEOsKZ3p0Jr+pKtd8mO5v0gqqDm11lgH3SwaMX3KiDPtqTxW7BLtHVoW7rCUGkBrNUpmNGv1gmtZoWR4TymjjHavMu75poekcpfZCavROT5HFvcLpechmlF+GL9LY+2SOVOjX5DUd9SefbdGz/sIdgnQmelHJqJAQ00OozAFjVZKdpCACz6IY1BrK8hh4X3j8tFo5VFz7c95jd2eNhrrpjJLRCr6I94oSOCOW0UpEOvjg3g0bF3SuahRmN18DeKhezHunJqT5ymVWudNTVU8DDUORWuVXwaCBXKL9qQlO25mw+NLcnzkMRR6iAMZBf0ARusoBEn/4926uFyZr1To6O8vS9Pa+DO8E6VLQ4jkrmjC/l62lw3S8Pz04gM7+XT25NtcHzLBNSvCAw32xk7IuJasNlKVS0ZeNa2jIc20VqBjSrNABvWdskbXqD0lY6UEahfc3U+wH86uAtfGOF9zPTh5p7SMRaFYsjBSbVFcbTL72UE6etPjvR81FY/NJqTNqk+v9ZCdQK5CJ1wY52l7tSq4w2tbdR1tf2vRUlBnmywKIZbrJpqXvHKPS/qQ5k8X/XT9M3v9ZP6kIf0m18uQ21VLK0jgKy7jfwfdrEtggVzSYHuz6g9OQlMZXNmpDJSpD4/xj1OK0d90xle/",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)"},sidebar:"openApiSidebar",previous:{title:"Update multiple users",permalink:"/docs/api/nerm/v1/patch-users"},next:{title:"Update a user by id",permalink:"/docs/api/nerm/v1/patch-user"}},O={},q=[{value:"Request",id:"request",level:2}],I={toc:q},E="wrapper";function Z(e){var a=e,{components:t}=a,m=T(a,["components"]);return(0,l.kt)(E,x(k(k({},I),m),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Find user by id"),(0,l.kt)(i(),{method:"get",path:"/users/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Info for a specific user"),(0,l.kt)("h2",k({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"user"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",description:"ID of the object to retrieve or update"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readonly:!0,example:"user1",description:"UID of the user"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name",example:"myusername"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email",description:"The email",example:"test@sailpoint.com"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileUser`, `NeaccessUser`]",schema:{type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",description:"Type of user",example:"NeprofileUser"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The title",example:"Director"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Disabled`]",schema:{type:"string",enum:["Active","Disabled"],description:"Status of the user",example:"Active"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"login",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The login",example:"myLogin"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"last_login",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",readOnly:!0,description:"When the user last logged in",example:"Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"cookies_accepted_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",readOnly:!0,description:"When cookies were accepted",example:"Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"preferred_language",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale the user prefers to use",example:"fr-CA"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale the user prefers to use",example:"fr-CA"},mdxType:"SchemaItem"}))))))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "user": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "user1",\n    "name": "myusername",\n    "email": "test@sailpoint.com",\n    "type": "NeprofileUser",\n    "title": "Director",\n    "status": "Active",\n    "login": "myLogin",\n    "last_login": "Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00",\n    "cookies_accepted_at": "Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00",\n    "preferred_language": "fr-CA",\n    "locale": "fr-CA"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(c.default,{mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(u.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(u.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}Z.isMDXComponent=!0}}]);