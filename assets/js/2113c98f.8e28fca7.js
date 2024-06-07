"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50869],{35876:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>w,frontMatter:()=>y,metadata:()=>m,toc:()=>f});var a=s(3905),r=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,s)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,d=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&l(e,s,t[s]);if(o)for(var s of o(t))p.call(t,s)&&l(e,s,t[s]);return e},h=(e,t)=>i(e,n(t)),u=(e,t)=>{var s={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(s[a]=e[a]);return s};const y={id:"typescript-sdk-search",title:"Search with The TypeScript SDK",pagination_label:"Search",sidebar_label:"Search",sidebar_position:6,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","search"],description:"Learn how to use the TypeScript SDK to search.",slug:"/tools/sdk/typescript/search",tags:["SDK"]},k=void 0,m={unversionedId:"tools/sdk/typescript/typescript-sdk-search",id:"tools/sdk/typescript/typescript-sdk-search",title:"Search with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to search.",source:"@site/docs/tools/sdk/typescript/search.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/search",permalink:"/docs/tools/sdk/typescript/search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/search.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:6,frontMatter:{id:"typescript-sdk-search",title:"Search with The TypeScript SDK",pagination_label:"Search",sidebar_label:"Search",sidebar_position:6,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","search"],description:"Learn how to use the TypeScript SDK to search.",slug:"/tools/sdk/typescript/search",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Paginate Results",permalink:"/docs/tools/sdk/typescript/paginate"},next:{title:"Retries",permalink:"/docs/tools/sdk/typescript/retries"}},g={},f=[],b={toc:f},S="wrapper";function w(e){var t=e,{components:s}=t,r=u(t,["components"]);return(0,a.kt)(S,h(d(d({},b),r),{components:s,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To try using the ISC ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/api/v3/search-post"}),"search functionality"),' along with pagination, copy this code into your "index.ts" file:'),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-typescript"}),"const search = async () => {\n  let apiConfig = new Configuration();\n  let api = new SearchApi(apiConfig);\n  let search: Search = {\n    indices: ['identities'],\n    query: {\n      query: '*',\n    },\n    sort: ['-name'],\n  };\n  const val = await Paginator.paginateSearchApi(api, search, 100, 1000);\n\n  for (const result of val.data) {\n    const castedResult: IdentityDocument = result;\n    console.log(castedResult.name);\n  }\n};\n")),(0,a.kt)("p",null,"Run this command to compile and run the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tsc src/index.ts && node src/index.js\n")),(0,a.kt)("p",null,'This example returns 1000 identities, 100 at a time, and sorts them in descending order by name. You can also change the search pagination by changing "100" and "1000", respectively.'),(0,a.kt)("p",null,"The two main ways you can manipulate this example are to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"indices")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"query"),". For example, if you add ",(0,a.kt)("inlineCode",{parentName:"p"},'"access profiles"'),' to the indices, the SDK will search access profiles too. If you change the query to "a',"*",'", the search will return all records starting with the letter "a".'),(0,a.kt)("p",null,"You can also change the sorting logic in the brackets next to ",(0,a.kt)("inlineCode",{parentName:"p"},"sort"),"."))}w.isMDXComponent=!0}}]);