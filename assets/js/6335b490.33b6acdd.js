"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32694],{85407:(e,a)=>{function t(e,a){var t,s,m,i,l;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(s=null==(t=e.xml)?void 0:t.name)?s:e.type:"array"===e.type?null!=(i=null==(m=e.xml)?void 0:m.name)?i:e.type:null!=(l=e.title)?l:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var s;return e.items?t(e.items)+"[]":null!=(s=t(e))?s:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,s,m="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(s=`\`<= ${a.maxLength} characters\``),e&&!s&&(m+=e),s&&!e&&(m+=s),e&&s&&(m+=`${e} and ${s}`),t.push(m)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,s,m="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?s=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?s=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(s=`\`< ${a.maximum}\``),e&&!s&&(m+=e),s&&!e&&(m+=s),e&&s&&(m+=`${e} and ${s}`),t.push(m)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const s=a;if(s.mapping){const e=Object.keys(s.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>f});var s=t(67294),m=t(58750),i=t(82479),l=t(62574),r=t(94693),n=t(85407),p=t(52347),o=t(25365),c=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const f=function({param:{description:e,example:a,examples:t,name:f,required:b,schema:g}}){g&&(null==g?void 0:g.type)||(g={type:"any"});const y=(0,p.lo)(g,(e=>s.createElement("span",{className:"openapi-schema__type"}," ",(0,n.uc)(e)))),v=(0,p.lo)(b,(()=>s.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,p.lo)((0,n.A4)(g),(e=>s.createElement("div",null,s.createElement(o.D,{children:(0,r.T)(e),rehypePlugins:[c.Z]})))),k=(0,p.lo)(e,(e=>s.createElement("div",null,s.createElement(o.D,{children:(0,r.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:l,children:r}=a;((e,a)=>{var t={};for(var s in e)u.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&d)for(var s of d(e))a.indexOf(s)<0&&h.call(e,s)&&(t[s]=e[s])})(a,["node","inline","className","children"]);const n=/language-(\w+)/.exec(l||"");return i?s.createElement("code",null,r):!i&&n?s.createElement(m.Z,{className:l},r):s.createElement(m.Z,null,r)}},rehypePlugins:[c.Z]})))),T=(0,p.lo)(g&&g.items?g.items.default:g?g.default:void 0,(e=>s.createElement("div",null,s.createElement(o.D,{children:`**Default value:** \`${e}\``})))),N=(0,p.lo)((0,p.toString)(a),(e=>s.createElement("div",null,s.createElement("strong",null,"Example: "),e))),I=(0,p.lo)(t,(e=>{const a=Object.entries(e);return s.createElement(s.Fragment,null,s.createElement("strong",null,"Examples:"),s.createElement(i.default,null,a.map((([e,a])=>s.createElement(l.default,{value:e,label:e},a.summary&&s.createElement("p",null,a.summary),a.description&&s.createElement("p",null,s.createElement("strong",null,"Description: "),s.createElement("span",null,a.description)),s.createElement("p",null,s.createElement("strong",null,"Example: "),s.createElement("code",null,a.value)))))))}));return s.createElement("div",{className:"openapi-params__list-item"},s.createElement("span",{className:"openapi-schema__container"},s.createElement("strong",{className:"openapi-schema__property"},f),y,b&&s.createElement("span",{className:"openapi-schema__divider"}),v),x,T,k,N,I)}},90294:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>S,contentTitle:()=>I,default:()=>M,frontMatter:()=>N,metadata:()=>q,toc:()=>E});var s=t(3905),m=t(68562),i=t(67001),l=t.n(i),r=t(98439),n=t(34168),p=t(3655),o=t(13503),c=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&v(e,t,a[t]);if(b)for(var t of b(a))y.call(a,t)&&v(e,t,a[t]);return e},k=(e,a)=>h(e,f(a)),T=(e,a)=>{var t={};for(var s in e)g.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&b)for(var s of b(e))a.indexOf(s)<0&&y.call(e,s)&&(t[s]=e[s]);return t};const N={id:"patch-user",sidebar_label:"Update a user by id",hide_title:!0,hide_table_of_contents:!0,api:"eJztWG1v2zYQ/ivEfdoAKVEcOy8CBixtUixDmxZJun5IjYAWzzZbiVRJKolh6L8PR0q2HDuZg+4N2PIhicjj3cN7eY7kHHSJhjup1bmAFErusulHiwYiEGgzI0uagxQ+loI7ZJxVFg0bzZgUEIHjEwvpDdCghWEEJTe8QEdf6c0cFC8QUvCyUgUD0zXd56dMj5mbItOjL5g55jQz6IzEO4xY5S1HTBsmMEeHEIHBb5U0KCB1psIIbDbFgkM6BzcryaJ1RqoJRDDWpuAOUqgqjwIfeFHmJLLX6x+Io9F+zLPecdxP9gbx0d6gHwvk/f5+nx/ujznU9TBYQ+teaTEjE4+NZ1o5VI6meFnmMvP+3P1iaXPzdWxhkxBBacj7TqKlWfLhH0tJsc0uH0O8N9Lhe5XP2oGlG8ToYHyER6P4YJD14v6hGMQ8EaP4OBllWR+PxfgYXxQxClSIGdRRkwHriFf1XU+ReckusmJGLvHDdQRYcJk/u/cgsUl1O7PU7dC6ny2XeamlcjuZLshGUL1uAlVVUJpfYGn0WObYlMgF8ixDa/3nkCyPeZUTlseSjzDNSiQHVmFyCWt1We2DT5+324X9qSA1WuDFcSefSJdvGcEg2jVyKg1mTvutWMddZZ9z70nm5B0pOJWWj3IUwaddM1deSbuvNf81GuoIcj2RajvYQXQ18976sTqCidFVeRtWbwS/rs8vYe2SFXiikEpaZ7jT5tbLRad4hzlVePgO2DO+rc+D7MIbrDQ4RmOpICu7GoyxiV+fQL2MKVCWxftQ+x9iDVtqZQPR9JKE/qxaPHsoMXMoWCtKdji747mkMU+T8C9lRC70P0GA1WZ8hVRvUU3cFNL9XgQFf+h+Po2WfLK33p2XeKqGOf4n3u8i3v847eXcutsnlS0iT0keO1lgU2HdI8aqxU9TVEuWIvUEYIKCPQLxCUXEkkP2Bkesl/T6bK+XDgZpL9npDw4OjnpJkrCzq2sWJ4M0SQhrpvVXifaWUqJ0KG65+zNBN+rZPRpkrY3vhBxY2qC4zbmaVHzyl7H9391Neotu0t/UQF5xwS5Dn2AxqxTlO2nPNKl1uPOS7qEVvh/7e8bjDtFCOle+Nf1KS+voabnfSMqbOTNGGwv1MGxisGkT58oRPebsCs0dGubXsJgaQGUUCqYVq9SUK5GjYPhAKSO1si/a3PNND8nkOrITVqC1fIIsjI+kmvhoBvlu/K60MTNmdYFuSlL3qBy7N1pNmgjWEdCcXtwLCQRd31LY9fe93bkUNURgvRfCha8yOaQwda606e7u3KHiyl3wAusdpRUWZa5niET7u7yUEMEdN5KSIDDkQjxsrSV1nhWY6fWM9eK+fzFurZyQ7ymZKut0QTzur28Ws8pIN/MAR8gNmpOK9nEz7E5fkesDjq7QIhK0KWiumvQdhCBq/nnT0su1/kpUR79/munKhH99pVCUL5eXybM2GMujDh0Wtj2RNJfrTrdeNOtNbbbtsmstsnvH2NZ2WziLTrdsdMt+1vSPRV9ZO01vdSBeMliHc6Qaa/IXJV5Ihr2dZCfpILs4u3zHTj6cb+S5dpJlXLGRJzufOeFUwbgSrNBCjmeM8lNXlg68ujIZWiYV82FFdSeNVgUqR4WdywyV9cFsAvPu/NpjLbV1BVedmc2PKSsw50umeOrtJUTT4YPbLXMe+ravv3lTp+27TASp9IeKqbaOhufzEbf40eR1TcPfKjRUHcNlOfpaEe15JB3z3D7ujl2EP1w2Dw4/spc/5mzcSDPI1cyTRF7RF0TwFWfhQake1hFMkQsqnJt5M/E6QIrpoNdZuEa11AzCihPf0Z+VHXaY8MPJ9etfqOibx6BCC1pk+D2dJvg9pPAZPhNSHUjfvxjR+ByWvR6CYvr5HebdnA8=",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a user by id' (patch-user)"},I=void 0,q={unversionedId:"api/nerm/v1/patch-user",id:"api/nerm/v1/patch-user",title:"patch-user",description:"Update a user by id",source:"@site/docs/api/nerm/v1/patch-user.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-user",permalink:"/docs/api/nerm/v1/patch-user",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a user by id' (patch-user)",tags:[],version:"current",frontMatter:{id:"patch-user",sidebar_label:"Update a user by id",hide_title:!0,hide_table_of_contents:!0,api:"eJztWG1v2zYQ/ivEfdoAKVEcOy8CBixtUixDmxZJun5IjYAWzzZbiVRJKolh6L8PR0q2HDuZg+4N2PIhicjj3cN7eY7kHHSJhjup1bmAFErusulHiwYiEGgzI0uagxQ+loI7ZJxVFg0bzZgUEIHjEwvpDdCghWEEJTe8QEdf6c0cFC8QUvCyUgUD0zXd56dMj5mbItOjL5g55jQz6IzEO4xY5S1HTBsmMEeHEIHBb5U0KCB1psIIbDbFgkM6BzcryaJ1RqoJRDDWpuAOUqgqjwIfeFHmJLLX6x+Io9F+zLPecdxP9gbx0d6gHwvk/f5+nx/ujznU9TBYQ+teaTEjE4+NZ1o5VI6meFnmMvP+3P1iaXPzdWxhkxBBacj7TqKlWfLhH0tJsc0uH0O8N9Lhe5XP2oGlG8ToYHyER6P4YJD14v6hGMQ8EaP4OBllWR+PxfgYXxQxClSIGdRRkwHriFf1XU+ReckusmJGLvHDdQRYcJk/u/cgsUl1O7PU7dC6ny2XeamlcjuZLshGUL1uAlVVUJpfYGn0WObYlMgF8ixDa/3nkCyPeZUTlseSjzDNSiQHVmFyCWt1We2DT5+324X9qSA1WuDFcSefSJdvGcEg2jVyKg1mTvutWMddZZ9z70nm5B0pOJWWj3IUwaddM1deSbuvNf81GuoIcj2RajvYQXQ18976sTqCidFVeRtWbwS/rs8vYe2SFXiikEpaZ7jT5tbLRad4hzlVePgO2DO+rc+D7MIbrDQ4RmOpICu7GoyxiV+fQL2MKVCWxftQ+x9iDVtqZQPR9JKE/qxaPHsoMXMoWCtKdji747mkMU+T8C9lRC70P0GA1WZ8hVRvUU3cFNL9XgQFf+h+Po2WfLK33p2XeKqGOf4n3u8i3v847eXcutsnlS0iT0keO1lgU2HdI8aqxU9TVEuWIvUEYIKCPQLxCUXEkkP2Bkesl/T6bK+XDgZpL9npDw4OjnpJkrCzq2sWJ4M0SQhrpvVXifaWUqJ0KG65+zNBN+rZPRpkrY3vhBxY2qC4zbmaVHzyl7H9391Neotu0t/UQF5xwS5Dn2AxqxTlO2nPNKl1uPOS7qEVvh/7e8bjDtFCOle+Nf1KS+voabnfSMqbOTNGGwv1MGxisGkT58oRPebsCs0dGubXsJgaQGUUCqYVq9SUK5GjYPhAKSO1si/a3PNND8nkOrITVqC1fIIsjI+kmvhoBvlu/K60MTNmdYFuSlL3qBy7N1pNmgjWEdCcXtwLCQRd31LY9fe93bkUNURgvRfCha8yOaQwda606e7u3KHiyl3wAusdpRUWZa5niET7u7yUEMEdN5KSIDDkQjxsrSV1nhWY6fWM9eK+fzFurZyQ7ymZKut0QTzur28Ws8pIN/MAR8gNmpOK9nEz7E5fkesDjq7QIhK0KWiumvQdhCBq/nnT0su1/kpUR79/munKhH99pVCUL5eXybM2GMujDh0Wtj2RNJfrTrdeNOtNbbbtsmstsnvH2NZ2WziLTrdsdMt+1vSPRV9ZO01vdSBeMliHc6Qaa/IXJV5Ihr2dZCfpILs4u3zHTj6cb+S5dpJlXLGRJzufOeFUwbgSrNBCjmeM8lNXlg68ujIZWiYV82FFdSeNVgUqR4WdywyV9cFsAvPu/NpjLbV1BVedmc2PKSsw50umeOrtJUTT4YPbLXMe+ravv3lTp+27TASp9IeKqbaOhufzEbf40eR1TcPfKjRUHcNlOfpaEe15JB3z3D7ujl2EP1w2Dw4/spc/5mzcSDPI1cyTRF7RF0TwFWfhQake1hFMkQsqnJt5M/E6QIrpoNdZuEa11AzCihPf0Z+VHXaY8MPJ9etfqOibx6BCC1pk+D2dJvg9pPAZPhNSHUjfvxjR+ByWvR6CYvr5HebdnA8=",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a user by id' (patch-user)"},sidebar:"openApiSidebar",previous:{title:"Find user by id",permalink:"/docs/api/nerm/v1/get-user"},next:{title:"Delete a user",permalink:"/docs/api/nerm/v1/delete-user"}},S={},E=[{value:"Request",id:"request",level:2}],j={toc:E},_="wrapper";function M(e){var a=e,{components:t}=a,i=T(a,["components"]);return(0,s.kt)(_,k(x(x({},j),i),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Update a user by id"),(0,s.kt)(l(),{method:"patch",path:"/users/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Update a user by id"),(0,s.kt)("h2",x({},{id:"request"}),"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"user"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",required:!0,writeOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",description:"ID of the object to retrieve or update"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name",example:"myusername"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email",description:"The email",example:"test@sailpoint.com"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileUser`, `NeaccessUser`]",schema:{type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",description:"Type of user",example:"NeprofileUser"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",description:"ID of the profile",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The title",example:"Director"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Disabled`]",schema:{type:"string",enum:["Active","Disabled"],description:"Status of the user",example:"Active"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"login",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The login",example:"myLogin"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"group_strings",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The group strings",example:"Administrator_group,Developer_group"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale the user prefers to use",example:"fr-CA"},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(m.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"user"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",description:"ID of the object to retrieve or update"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readonly:!0,example:"user1",description:"UID of the user"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name",example:"myusername"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email",description:"The email",example:"test@sailpoint.com"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileUser`, `NeaccessUser`]",schema:{type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",description:"Type of user",example:"NeprofileUser"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The title",example:"Director"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Disabled`]",schema:{type:"string",enum:["Active","Disabled"],description:"Status of the user",example:"Active"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"login",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The login",example:"myLogin"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"last_login",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",readOnly:!0,description:"When the user last logged in",example:"Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"cookies_accepted_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",readOnly:!0,description:"When cookies were accepted",example:"Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"preferred_language",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale the user prefers to use",example:"fr-CA"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale the user prefers to use",example:"fr-CA"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "user": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "user1",\n    "name": "myusername",\n    "email": "test@sailpoint.com",\n    "type": "NeprofileUser",\n    "title": "Director",\n    "status": "Active",\n    "login": "myLogin",\n    "last_login": "Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00",\n    "cookies_accepted_at": "Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00",\n    "preferred_language": "fr-CA",\n    "locale": "fr-CA"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.default,{mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,s.kt)(d.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}M.isMDXComponent=!0}}]);