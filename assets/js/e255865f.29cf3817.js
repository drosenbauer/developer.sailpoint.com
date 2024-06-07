"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11798],{54497:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>w,frontMatter:()=>k,metadata:()=>g,toc:()=>_});var n=o(3905),a=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))i.call(t,o)&&l(e,o,t[o]);if(s)for(var o of s(t))c.call(t,o)&&l(e,o,t[o]);return e},u=(e,t)=>r(e,p(t)),h=(e,t)=>{var o={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(o[n]=e[n]);return o};const k={id:"python-sdk-patch",title:"Updating resources with The Python SDK",pagination_label:"Update a resource",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"pythonsdk",keywords:["python","sdk","update"],description:"Learn how to use the Python SDK to update resources.",slug:"/tools/sdk/python/update",tags:["SDK"]},m=void 0,g={unversionedId:"tools/sdk/python/python-sdk-patch",id:"tools/sdk/python/python-sdk-patch",title:"Updating resources with The Python SDK",description:"Learn how to use the Python SDK to update resources.",source:"@site/docs/tools/sdk/python/updating-resources.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/update",permalink:"/docs/tools/sdk/python/update",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/updating-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:3,frontMatter:{id:"python-sdk-patch",title:"Updating resources with The Python SDK",pagination_label:"Update a resource",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"pythonsdk",keywords:["python","sdk","update"],description:"Learn how to use the Python SDK to update resources.",slug:"/tools/sdk/python/update",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Create a resource",permalink:"/docs/tools/sdk/python/create"},next:{title:"Delete a resource",permalink:"/docs/tools/sdk/python/delete"}},y={},_=[],b={toc:_},f="wrapper";function w(e){var t=e,{components:o}=t,a=h(t,["components"]);return(0,n.kt)(f,u(d(d({},b),a),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the SDK to update resources."),(0,n.kt)("p",null,"For example, you can run a script to update a work group, also known as a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html"}),"governance group"),". "),(0,n.kt)("p",null,"This example 'update WorkGroup' script updates the description for the work group created in ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/tools/sdk/python/create"}),"Create a Resource"),". Copy it into your Python project to try it out: "),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-python"}),"import sailpoint\nimport sailpoint.v3\nimport sailpoint.beta\nfrom sailpoint.beta.models.workgroup_dto import WorkgroupDto\nfrom sailpoint.beta.models.usage_type import UsageType\nfrom sailpoint.beta.models.owner_dto import OwnerDto\nfrom sailpoint.beta.models.json_patch_operation import JsonPatchOperation\nfrom sailpoint.beta.models.json_patch_operation_value import JsonPatchOperationValue\nfrom sailpoint.configuration import Configuration\n\nconfiguration = Configuration()\n\napi_client = sailpoint.v3.ApiClient(configuration)\napi_client_beta = sailpoint.beta.ApiClient(configuration)\n\nidentities_api_instance = sailpoint.v3.PublicIdentitiesApi(api_client)\nworkgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)\n\nworkgroup = workgroups_api_instance.list_workgroups(filters='name eq \"DB Access Governance Group\"')[0]\n\njson_patch_operation = [JsonPatchOperation(op='replace', path='/description', value=JsonPatchOperationValue('This is an updated description for the workgroup.'))]\n\ntry:\n    workgroupResponse = workgroups_api_instance.patch_workgroup(workgroup.id,json_patch_operation=json_patch_operation)\n    print(\"The response of GovernanceGroupsApi->patch_workgroup:\\n\")\n    print(workgroupResponse)\nexcept Exception as e:\n    print(\"Exception when calling GovernanceGroupsApi->patch_workgroup: %s\\n\" % e)\n")),(0,n.kt)("p",null,"Run this command to run the code:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"python sdk.py\n")),(0,n.kt)("p",null,"The example uses a PATCH ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," operation to update the value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/description"),' path to "This is an updated description for the workgroup."'),(0,n.kt)("p",null,"The SDK will return the updated work group with its new description:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-python"}),"The response of GovernanceGroupsApi->patch_workgroup:\n\nid='d287a1e2-81fc-474e-bc0c-155bd8ab0899' \nname='DB Access Governance Group' \ndescription='This is an updated description for the workgroup.' \nmember_count=0 \nconnection_count=0\nowner=OwnerDto(\n    type='IDENTITY', \n    id='0003c25c365e492381d4e557b6159f9b', \n    name='Brian Mendoza')\n")))}w.isMDXComponent=!0}}]);