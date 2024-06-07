"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[16738],{15110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>g,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>f});var o=n(3905),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(r)for(var n of r(t))p.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>s(e,i(t)),h=(e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&r)for(var o of r(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n};const m={id:"powershell-sdk-pagination",title:"Paginate results with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","paginate"],description:"Learn how to paginate results using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/paginate",tags:["SDK"]},g=void 0,k={unversionedId:"tools/sdk/powershell/powershell-sdk-pagination",id:"tools/sdk/powershell/powershell-sdk-pagination",title:"Paginate results with the PowerShell SDK",description:"Learn how to paginate results using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/pagination.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/paginate",permalink:"/docs/tools/sdk/powershell/paginate",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/pagination.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:5,frontMatter:{id:"powershell-sdk-pagination",title:"Paginate results with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","paginate"],description:"Learn how to paginate results using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/paginate",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/delete"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/search"}},w={},f=[],b={toc:f},P="wrapper";function y(e){var t=e,{components:n}=t,a=h(t,["components"]);return(0,o.kt)(P,c(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/api/standard-collection-parameters/#paginating-results"}),"Paginating Results"),"."),(0,o.kt)("p",null,"Pagination is implemented with the SDK in the following code block on line 8:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0}),'$Parameters = @{\n    "Filters" = \'name co "Andrew"\'\n}\n\n# Accounts List\ntry {\n\n    Invoke-Paginate -Function "Get-Accounts" -Increment 250 -Limit 1000 -InitialOffset 0 -Parameters $Parameters\n\n} catch {\n    Write-Host $_\n    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Get-Accounts")\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke-Paginate")," cmdlet takes a few paramters. The first is the cmdlet you wish to call."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-Function")," specifies the name of the cmdlet you wish to call. This only works on list endpoints."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-Increment")," specifies the number of results returned in each call to the endpoint. Defaults to 250."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-Limit")," specifies the total number of results you can return, 1000."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-Parameters")," specifies a hashtable of additional values passed to the API endpoint. You would use this for ",(0,o.kt)("inlineCode",{parentName:"p"},"filters"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sorters"),", and any other query parameters."),(0,o.kt)("p",null,"You can also provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"-InitialOffset")," value to specify the record number to start the request on. For example, you can provide add ",(0,o.kt)("inlineCode",{parentName:"p"},"-InitialOffset 10")," to start getting accounts from 11 instead of 0."),(0,o.kt)("p",null,"To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/api/standard-collection-parameters/#paginating-results"}),"Paginating Results"),"."))}y.isMDXComponent=!0}}]);