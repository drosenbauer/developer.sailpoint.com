"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[89586],{59407:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>f,contentTitle:()=>m,default:()=>_,frontMatter:()=>y,metadata:()=>k,toc:()=>g});var r=o(3905),i=Object.defineProperty,n=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,o)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,c=(t,e)=>{for(var o in e||(e={}))l.call(e,o)&&d(t,o,e[o]);if(a)for(var o of a(e))p.call(e,o)&&d(t,o,e[o]);return t},h=(t,e)=>n(t,s(e)),u=(t,e)=>{var o={};for(var r in t)l.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&a)for(var r of a(t))e.indexOf(r)<0&&p.call(t,r)&&(o[r]=t[r]);return o};const y={id:"python-sdk-retries",title:"Retries with The Python SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","retry"],description:"Learn how to configure retries when using the Python SDK.",slug:"/tools/sdk/python/retries",tags:["SDK"]},m=void 0,k={unversionedId:"tools/sdk/python/python-sdk-retries",id:"tools/sdk/python/python-sdk-retries",title:"Retries with The Python SDK",description:"Learn how to configure retries when using the Python SDK.",source:"@site/docs/tools/sdk/python/retries.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/retries",permalink:"/docs/tools/sdk/python/retries",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/retries.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:7,frontMatter:{id:"python-sdk-retries",title:"Retries with The Python SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","retry"],description:"Learn how to configure retries when using the Python SDK.",slug:"/tools/sdk/python/retries",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Search",permalink:"/docs/tools/sdk/python/search"},next:{title:"Error Handling",permalink:"/docs/tools/sdk/python/error-handling"}},f={},g=[],b={toc:g},w="wrapper";function _(t){var e=t,{components:o}=e,i=u(e,["components"]);return(0,r.kt)(w,h(c(c({},b),i),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Python SDK uses the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://urllib3.readthedocs.io/en/stable/reference/urllib3.util.html"}),"urllib3 retry")," module to support retry logic."),(0,r.kt)("p",null,"Here is an example of the retry logic, implemented on line 8. With this configuration, if the returned status code from the API is equal to 502, 503, or 504, the SDK will retry the call up to 5 times: "),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0}),"import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.paginator import Paginator\nimport urllib3\n\nconfiguration = Configuration()\nconfiguration.retries = urllib3.Retry(total=5, status_forcelist=[ 502, 503, 504 ])\n\napi_client = sailpoint.v3.ApiClient(configuration)\n\naccounts = Paginator.paginate(sailpoint.v3.AccountsApi(api_client).list_accounts, result_limit=1000, limit=250)\n\nprint(accounts)\n")),(0,r.kt)("p",null,"Run this command to run the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"python sdk.py\n")))}_.isMDXComponent=!0}}]);