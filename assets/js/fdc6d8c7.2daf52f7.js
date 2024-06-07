"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[73888],{25881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>b,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=a(3905),o=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&p(e,a,t[a]);return e},h=(e,t)=>s(e,r(t)),d=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a};const m={id:"patch-requests",title:"Patch Requests",pagination_label:"Patch Requests",sidebar_label:"Patch Requests",sidebar_position:8,sidebar_class_name:"patchRequests",keywords:["patch"],description:"Send PATCH ISC API requests.",tags:["patch","guide"]},f=void 0,y={unversionedId:"api/patch-requests",id:"api/patch-requests",title:"Patch Requests",description:"Send PATCH ISC API requests.",source:"@site/docs/api/patch-requests.md",sourceDirName:"api",slug:"/api/patch-requests",permalink:"/docs/api/patch-requests",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/patch-requests.md",tags:[{label:"patch",permalink:"/docs/tags/patch"},{label:"guide",permalink:"/docs/tags/guide"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:8,frontMatter:{id:"patch-requests",title:"Patch Requests",pagination_label:"Patch Requests",sidebar_label:"Patch Requests",sidebar_position:8,sidebar_class_name:"patchRequests",keywords:["patch"],description:"Send PATCH ISC API requests.",tags:["patch","guide"]},sidebar:"openApiSidebar",previous:{title:"Postman Collections",permalink:"/docs/api/postman-collections"},next:{title:"V3 APIs",permalink:"/docs/api/v3"}},v={},g=[{value:"PATCH requests",id:"patch-requests",level:2},{value:"Get the resource ID",id:"get-the-resource-id",level:2},{value:"Get the resource details",id:"get-the-resource-details",level:2},{value:"PATCH request structure",id:"patch-request-structure",level:2},{value:"Specify an operation",id:"specify-an-operation",level:2},{value:"Add",id:"add",level:3},{value:"Remove",id:"remove",level:3},{value:"Replace",id:"replace",level:3},{value:"Move",id:"move",level:3},{value:"Copy",id:"copy",level:3},{value:"Test",id:"test",level:3},{value:"Specify a path",id:"specify-a-path",level:2},{value:"Specify a value",id:"specify-a-value",level:2},{value:"Specify a from",id:"specify-a-from",level:2},{value:"Apply the PATCH request header",id:"apply-the-patch-request-header",level:2},{value:"Send your PATCH request",id:"send-your-patch-request",level:2},{value:"Get started",id:"get-started",level:2}],k={toc:g},T="wrapper";function b(e){var t=e,{components:a}=t,o=d(t,["components"]);return(0,n.kt)(T,h(c(c({},k),o),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",c({},{id:"patch-requests"}),"PATCH requests"),(0,n.kt)("p",null,"You can use the Identity Security Cloud APIs to update existing resources. Many of the APIs offer multiple ways to do so:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can send a ",(0,n.kt)("strong",{parentName:"p"},"PUT")," request to replace the existing resource with a new one. For example, if you wanted to update one of John Doe's source accounts, you could use the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/put-account"}),"Put Account")," endpoint to replace John Doe's existing source account with a new one. This is a viable way to update a resource, but it requires you to update the entire resource each time.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can send a ",(0,n.kt)("strong",{parentName:"p"},"PATCH")," request to make a specific change to the resource. For example, if you wanted to update John Doe's account's associated ",(0,n.kt)("inlineCode",{parentName:"p"},"identityId")," attribute, you could use the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-account"}),"Patch Account")," endpoint to replace his existing ",(0,n.kt)("inlineCode",{parentName:"p"},"identityId"),' with a new one, all without affecting any of the other source account details. This can be very helpful when you want to make specific updates to resources, but it requires some knowledge of the types of changes, or "operations", that are possible, the specific paths of the fields you want to update, and some understanding of the basic data types.'))),(0,n.kt)("p",null,"This guide will focus on the partial update method, PATCH requests. Read this guide to learn how to start sending PATCH requests."),(0,n.kt)("h2",c({},{id:"get-the-resource-id"}),"Get the resource ID"),(0,n.kt)("p",null,"To use PATCH to update a resource, you first need to know the resource ID."),(0,n.kt)("p",null,"Not all resource IDs are available in the Identity Security Cloud UI, so you may need to use the API to find the ID for the resource you want to update."),(0,n.kt)("p",null,"For example, account IDs aren't avilable in the Identity Security Cloud UI. If you want to use the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-account"}),"Patch Account")," endpoint to make a change to a specific account, you first need to find out the account's ID."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/list-accounts"}),"List Accounts")," endpoint to view all the accounts in your tenant, along with their details, such as their identities. You can find your account and its ID in this list."),(0,n.kt)("h2",c({},{id:"get-the-resource-details"}),"Get the resource details"),(0,n.kt)("p",null,"Once you know the resource ID, you can use a GET request to get that resource's details. To successfully use a PATCH request to make changes to a resource, you need to know which paths you can update, what values they have, and the structure of those paths."),(0,n.kt)("p",null,"For example, once you know the ID for the source you want to update with a PATCH request, you can use the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/get-source"}),"Get Source by ID")," endpoint to view only that source and its details."),(0,n.kt)("p",null,'In this example, the API returns a source, "ubuntu", along with all its details. This JSON response shows the resource\'s structure and its different paths:'),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Example Source Details"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "description": "ubuntu",\n  "owner": {\n    "type": "IDENTITY",\n    "id": "2c91808475b4334b0175e1e005006401",\n    "name": "SailPoint Services"\n  },\n  "cluster": null,\n  "accountCorrelationConfig": null,\n  "accountCorrelationRule": null,\n  "managerCorrelationMapping": null,\n  "managerCorrelationRule": null,\n  "beforeProvisioningRule": null,\n  "schemas": [\n    {\n      "type": "CONNECTOR_SCHEMA",\n      "id": "2c91808c771b686101772a91dbd877ab",\n      "name": "account"\n    },\n    {\n      "type": "CONNECTOR_SCHEMA",\n      "id": "2c91808c771b686101772a91dbd877ac",\n      "name": "group"\n    }\n  ],\n  "passwordPolicies": null,\n  "features": ["NO_RANDOM_ACCESS", "DISCOVER_SCHEMA", "DIRECT_PERMISSIONS"],\n  "type": "DelimitedFile",\n  "connector": "delimited-file-angularsc",\n  "connectorClass": "sailpoint.connector.DelimitedFileConnector",\n  "connectorAttributes": {\n    "mergeColumns": ["groups"],\n    "group.mergeRows": true,\n    "group.delimiter": ",",\n    "mergeRows": true,\n    "group.filetransport": "local",\n    "partitionMode": "disabled",\n    "connectionType": "file",\n    "group.host": "local",\n    "group.indexColumn": "id",\n    "file": "/tmp/source-account-2c91808c771b686101772a91dbd877aa3299228430527475607.csv",\n    "delimiter": ",",\n    "deltaAggregation": null,\n    "host": "local",\n    "cloudExternalId": "23012",\n    "group.indexColumns": ["id"],\n    "cloudIdentityProfileName": null,\n    "group.mergeColumns": ["entitlements", "groups", "permissions"],\n    "hasHeader": true,\n    "filterEmptyRecords": true,\n    "oauth_body_attrs_to_exclude": "client_secret,client_id",\n    "filetransport": "local",\n    "idnPreviousCorrelationConfig": null,\n    "deleteThresholdPercentage": 10,\n    "group.filterEmptyRecords": true,\n    "group.hasHeader": true,\n    "group.partitionMode": "disabled",\n    "cloudAuthoritativeSourcePrecedence": null,\n    "formPath": null,\n    "group.columnNames": [\n      "id",\n      "name",\n      "displayName",\n      "created",\n      "description",\n      "modified",\n      "entitlements",\n      "groups",\n      "permissions"\n    ],\n    "templateApplication": "DelimitedFile Template",\n    "group.file": "/var/lib/identityiq_workspace/27c92c24-8681-4574-9453-5c56370b3fc9-groups.csv",\n    "indexColumn": "id",\n    "healthy": false,\n    "cloudDisplayName": "Ubuntu",\n    "connectorName": "Delimited File",\n    "beforeProvisioningRule": null,\n    "cloudOriginalApplicationType": "Delimited File",\n    "since": "2021-01-22T14:48:58.072Z",\n    "status": "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT"\n  },\n  "deleteThreshold": 10,\n  "authoritative": false,\n  "healthy": false,\n  "status": "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT",\n  "since": "2021-01-22T14:48:58.072Z",\n  "connectorId": "delimited-file",\n  "connectorName": "Delimited File",\n  "connectionType": "file",\n  "connectorImplementationId": "delimited-file",\n  "managementWorkgroup": null,\n  "id": "2c91808c771b686101772a91dbd877aa",\n  "name": "Ubuntu",\n  "created": "2021-01-22T14:48:58.072Z",\n  "modified": "2023-06-30T13:39:07.456Z"\n}\n'))),(0,n.kt)("h2",c({},{id:"patch-request-structure"}),"PATCH request structure"),(0,n.kt)("p",null,"A PATCH request involves sending a JSON PATCH document that represents an array of objects. Each object represents a single operation to be applied to the target resource."),(0,n.kt)("p",null,"PATCH requests all share the same essential structure. A PATCH request must include an object that specifies exactly one operation to apply to update the resource, as well as exactly one path that represents the target location where the operation is applied."),(0,n.kt)("p",null,"This example request has the basic PATCH structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com/v3/sources/:id\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/description",\n    "value": "new description"\n  }\n]\n')),(0,n.kt)("p",null,'This example request uses a "replace" operation to replace the source\'s existing description with a new value, "new description". This example shows the parts involved in sending a PATCH request. You must specify an operation to apply to the target resource, a path to apply the operation to, and the change you want to make, often in the form of a value or a "from" location for "copy" and "move" operations.'),(0,n.kt)("p",null,"You can find this example in the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," specification. The API specifications have examples on the right side of the page that you can copy and use to get started. You can tab between the different examples to see a variety of pre-built requests you can use."),(0,n.kt)("p",null,"A PATCH request can be more complex as well - the values can be simple or vast and detailed. You can use a PATCH request to apply multiple operations, with a path for each, or you can apply the same type of operation to multiple paths. The PATCH request will always have the same essential structure though."),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The ordering of members in JSON objects doesn't affect the response. These examples all specify the operation first, but you would get the same response if you specified the members in any other order.")),(0,n.kt)("p",null,"You can specify a single operation, or you can specify multiple. If you are using multiple operations in one PATCH request, each operation must include its own path."),(0,n.kt)("p",null,'This example request applies "replace" and "add" ops to different paths:'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com/v3/sources/:id\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/description",\n    "value": "new description"\n  },\n  {\n    "op": "add",\n    "path": "/connectorAttributes/filterString",\n    "value": "!( id.contains( \\"m\\" ) ) || !( id.contains( \\"d\\" ) )"\n  }\n]\n')),(0,n.kt)("p",null,'This example request uses a "replace" to update the source\'s description and an "add" to add a filter string to the source\'s connector.'),(0,n.kt)("h2",c({},{id:"specify-an-operation"}),"Specify an operation"),(0,n.kt)("p",null,"Once you know the ID of the resource you want to update and you have the resource's details, you can start writing your PATCH request."),(0,n.kt)("p",null,"The first step is to specify an operation to apply to the target resource."),(0,n.kt)("p",null,'Operation objects must have exactly one "op" member, whose value indicates the operation to perform.'),(0,n.kt)("p",null,"These are the available PATCH operations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#add"}),"Add")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#remove"}),"Remove")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#replace"}),"Replace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#move"}),"Move")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#copy"}),"Copy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#test"}),"Test"))),(0,n.kt)("h3",c({},{id:"add"}),"Add"),(0,n.kt)("p",null,'The "add" operation adds a value to the target location. For more information about the "add" operation and how it behaves in different scenarios, refer to the ',(0,n.kt)("a",c({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/rfc6902"}),"JSON PATCH documentation"),"."),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source-schema"}),"Patch Source Schema"),' endpoint to add a new "office" attribute to the end of a source schema\'s array of attributes:'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/attributes/-",\n    "value": {\n      "name": "office",\n      "type": "STRING",\n      "schema": null,\n      "description": "Office Location",\n      "isMulti": false,\n      "isEntitlement": false,\n      "isGroup": false\n    }\n  }\n]\n')),(0,n.kt)("p",null,'If you are adding a new value to an array of values, you can specify the position within the array where you want to add the new value. In this example, using the "-" expression at the end of the path specifies that the new attribute will be added to the end of the array of attributes.'),(0,n.kt)("p",null,'You can use "0" to add a value to the beginning of the array. You can use "1" to add a value to the second positon, and so on. Using "-" adds the value to the end of the array.'),(0,n.kt)("h3",c({},{id:"remove"}),"Remove"),(0,n.kt)("p",null,'The "remove" operation removes a value from the target location. The target location must exist for the operation to be successful.'),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," endpoint to remove an existing filter string from a source's connector:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "remove",\n    "path": "/connectorAttributes/filterString"\n  }\n]\n')),(0,n.kt)("p",null,"In this example, the PATCH request is removing a connector's string filter. If there is no string filter to remove, the request will fail and you will receive an error."),(0,n.kt)("p",null,"Because there is only one value for the path, the request removes that value."),(0,n.kt)("p",null,"If there is an array of values, you must specify the position within the array to remove that value."),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," endpoint to remove the first feature from a source's list of features."),(0,n.kt)("p",null,'The source has three features, "ENABLE", "PROVISIONING", AND "UNLOCK".'),(0,n.kt)("p",null,'This request will remove the the first value from the list, "ENABLE".'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "remove",\n    "path": "/features/0"\n  }\n]\n')),(0,n.kt)("h3",c({},{id:"replace"}),"Replace"),(0,n.kt)("p",null,'The "replace" operation replaces the value at the target location with a new value. The operation object must contain a "value" member whose content specifies the replacement value, and the target location must exist for the operation to be successful. This operation is the equivalent of a "remove" followed by an "add".'),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," endpoint to replace a source's existing features with new ones:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/features",\n    "value": ["PASSWORD", "PROVISIONING", "ENABLE", "AUTHENTICATE"]\n  }\n]\n')),(0,n.kt)("p",null,"You can also replace a value within an array. This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," endpoint to replace the first value in the array with the specified value:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/features/0",\n    "value": "CURRENT_PASSWORD"\n  }\n]\n')),(0,n.kt)("p",null,'This request removes the first feature ("PASSWORD") in the list and adds the "CURRENT_PASSWORD" value in its place.'),(0,n.kt)("h3",c({},{id:"move"}),"Move"),(0,n.kt)("p",null,'The "move" operation removes the operation from a specified location and adds it to the target location. This operation object must contain a "from" member whose content specifies the location to remove the value from, and the "from" location must exist for the operation to be successful.'),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source-schema"}),"Patch Source Schema")," endpoint to move an attribute from the beginning to the end of the schema's array of attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "move",\n    "from": "/attributes/0",\n    "path": "/attributes/-"\n  }\n]\n')),(0,n.kt)("h3",c({},{id:"copy"}),"Copy"),(0,n.kt)("p",null,'The "copy" operation copies the value from a specified location to the target location. The operation object must contain a "from" member whose content specifies the location to copy the value from, and the "from" location must exist for the operation to be successful.'),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source-schema"}),"Patch Source Schema")," endpoint to copies an attribute from the beginning and duplicates it at the end of the schema's array of attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "copy",\n    "from": "/attributes/0",\n    "path": "/attributes/-"\n  }\n]\n')),(0,n.kt)("h3",c({},{id:"test"}),"Test"),(0,n.kt)("p",null,'The "test" operation is unique in that it does not apply changes to the resource. The "test" operation tests that a value at the target location is equal to a specified value. The operation object must contain a "value" member whose content specifies the value to be compared to the target location\'s value, and the values must be equal for the operation to be successful. For more information about what "equal" means for different JSON types, refer ',(0,n.kt)("a",c({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/rfc6902#section-4.6"}),"here"),"."),(0,n.kt)("p",null,'The "test" operation allows you to check that a resource has the values you expect it to have, and then you can make changes to those values from there with another PATCH request.'),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," endpoint to test a source's existing features to make sure they match the specified values.:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "test",\n    "path": "/features",\n    "value": ["PASSWORD", "PROVISIONING", "ENABLE", "AUTHENTICATE"]\n  }\n]\n')),(0,n.kt)("h2",c({},{id:"specify-a-path"}),"Specify a path"),(0,n.kt)("p",null,"Once you have specified the operation you want to apply to the target resource, you must specify the path, the JSON Pointer for the target location that you want to apply the operation to."),(0,n.kt)("p",null,"To send a PATCH request, you must know the path where you want to make the change. This is why it's important to get the resource's details so that you can see all the resource's available paths where you can make changes."),(0,n.kt)("p",null,"For example, this snippet from the beginning of the earlier source details example lists many of the source's top-level paths:"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Example Source Paths"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n    "description": "ubuntu",\n    "owner": {\n        "type": "IDENTITY",\n        "id": "2c91808475b4334b0175e1e005006401",\n        "name": "SailPoint Services"\n    },\n    "cluster": null,\n    "accountCorrelationConfig": null,\n    "accountCorrelationRule": null,\n    "managerCorrelationMapping": null,\n    "managerCorrelationRule": null,\n    "beforeProvisioningRule": null,\n    "schemas": [\n        {\n            "type": "CONNECTOR_SCHEMA",\n            "id": "2c91808c771b686101772a91dbd877ab",\n            "name": "account"\n        },\n        {\n            "type": "CONNECTOR_SCHEMA",\n            "id": "2c91808c771b686101772a91dbd877ac",\n            "name": "group"\n        }\n    ],\n    "passwordPolicies": null,\n    "features": [\n        "NO_RANDOM_ACCESS",\n        "DISCOVER_SCHEMA",\n        "DIRECT_PERMISSIONS"\n    ],\n'))),(0,n.kt)("p",null,"You can send PATCH requests to make changes to some of these paths, like editing the source's description with this PATCH request from earlier:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com/v3/sources/:id\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/description",\n    "value": "new description"\n  }\n]\n')),(0,n.kt)("p",null,"However, you cannot make changes to all paths. Use the API specifications for the PATCH endpoint you want to use to find out which paths you can make changes to. The API specifications will list the paths, or fields, that are immutable, if there are any. For example, the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source"}),"Patch Source")," specification lists paths like ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," as being immutable. Trying to use modify these paths results in a 400 error."),(0,n.kt)("p",null,'The paths are often nested within other paths, like within the "connectorAttributes" path from the earlier example source\'s details:'),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Example Source Connector Attributes"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'"connectorAttributes": {\n        "mergeColumns": [\n            "groups"\n        ],\n        "filterString": "!( id.contains( \\"m\\" ) ) || !( id.contains( \\"d\\" ) )",\n        "group.mergeRows": true,\n        "group.delimiter": ",",\n        "mergeRows": true,\n        "group.filetransport": "local",\n        "partitionMode": "disabled",\n        "connectionType": "file",\n        "group.host": "local",\n        "group.indexColumn": "id",\n        "file": "/tmp/source-account-2c91808c771b686101772a91dbd877aa3299228430527475607.csv",\n        "delimiter": ",",\n        "deltaAggregation": null,\n        "host": "local",\n        "cloudExternalId": "23012",\n        "group.indexColumns": [\n            "id"\n        ],\n        "cloudIdentityProfileName": null,\n        "group.mergeColumns": [\n            "entitlements",\n            "groups",\n            "permissions"\n        ],\n        "hasHeader": true,\n        "filterEmptyRecords": true,\n        "oauth_body_attrs_to_exclude": "client_secret,client_id",\n        "filetransport": "local",\n        "idnPreviousCorrelationConfig": null,\n        "deleteThresholdPercentage": 10,\n        "group.filterEmptyRecords": true,\n        "group.hasHeader": true,\n        "group.partitionMode": "disabled",\n        "cloudAuthoritativeSourcePrecedence": null,\n        "formPath": null,\n        "group.columnNames": [\n            "id",\n            "name",\n            "displayName",\n            "created",\n            "description",\n            "modified",\n            "entitlements",\n            "groups",\n            "permissions"\n        ],\n        "templateApplication": "DelimitedFile Template",\n        "group.file": "/var/lib/identityiq_workspace/27c92c24-8681-4574-9453-5c56370b3fc9-groups.csv",\n        "indexColumn": "id",\n        "healthy": false,\n        "cloudDisplayName": "Ubuntu",\n        "connectorName": "Delimited File",\n        "beforeProvisioningRule": null,\n        "cloudOriginalApplicationType": "Delimited File",\n        "since": "2021-01-22T14:48:58.072Z",\n        "status": "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT"\n    },\n'))),(0,n.kt)("p",null,'You can send a PATCH request to make changes to paths within the "connectorAttributes" path itself. This example request removes the "filterString" path and its value.'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com/v3/sources/:id\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "remove",\n    "path": "/connectorAttributes/filterString",\n    "value": "!( id.contains( \\"m\\" ) ) || !( id.contains( \\"d\\" ) )"\n  }\n]\n')),(0,n.kt)("p",null,'This request specifies the top-level path, "connectorAttributes", following it with the path where the value is going to be removed from, "filterString".'),(0,n.kt)("p",null,"The request will only remove a filter string matching the one specified, so any other filter strings or connector attributes will be unaffected."),(0,n.kt)("p",null,"If there is no value matching the filter string specified by the PATCH request, the request will fail and you will receive an error."),(0,n.kt)("h2",c({},{id:"specify-a-value"}),"Specify a value"),(0,n.kt)("p",null,"For many of the operations, once you have specified the operation you want to apply and the path you want to apply it to, you need to specify the value you want to send with the request. The value you specify must fit the path's data type."),(0,n.kt)("p",null,'The operations that don\'t require a value are the "copy" and "move" operations. Those operations instead use a "from" to represent the location they are copying or moving the data from. Refer to the ',(0,n.kt)("a",c({parentName:"p"},{href:"#specify-a-from"}),"Specify a From"),' section for more information about how to use "from" with your "copy" and "move" operations.'),(0,n.kt)("p",null,"You can specify a single simple value for an operation. In this example from earlier, the PATCH request replaces the source's description:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com/v3/sources/:id\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/description",\n    "value": "new description"\n  }\n]\n')),(0,n.kt)("p",null,"You can also specify multiple values for an operation to be applied to, as long as they all affect the same path. For example, this PATCH request replaces the source's current features with a number of new ones:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com/v3/sources/:id\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/features",\n    "value": ["PASSWORD", "PROVISIONING", "ENABLE", "AUTHENTICATE"]\n  }\n]\n')),(0,n.kt)("p",null,'A value can also be an object that contains other values within it. For example, this PATCH request adds a new "location" attribute to the end of the source schema\'s array of attributes:'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com//v3/sources/:sourceId/schemas/:schemaId\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/attributes/-",\n    "value": {\n      "name": "location",\n      "type": "STRING",\n      "schema": null,\n      "description": "Employee location",\n      "isMulti": false,\n      "isEntitlement": false,\n      "isGroup": false\n    }\n  }\n]\n')),(0,n.kt)("p",null,"This request uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source-schema"}),"PATCH Source Schema")," endpoint to add a new attribute, along with its details, to the end of the array of a source's schema's attributes."),(0,n.kt)("p",null,'This example uses the "-" after the path to indicate that the value will be added to the end of the array. When you are adding a new value to an array of values, you can specify the position within the array where you want to add the new value. In this example, using the "-" expression at the end of the path specifies that the new attribute will be added to the end of the array of attributes.'),(0,n.kt)("p",null,'You can use "0" to add a value to the beginning of the array. You can use "1" to add a value to the second positon, and so on. Using "-" adds the value to the end of the array.'),(0,n.kt)("h2",c({},{id:"specify-a-from"}),"Specify a from"),(0,n.kt)("p",null,'The "move" and "copy" operations allow you to remove or copy information from one path and add it to another path without your needing to specify the value, which could be an extensive array of information. To use the "move" and "copy" operations, you must specify a "from", a JSON Pointer representing the location you are moving or copying the value from.'),(0,n.kt)("p",null,"This example request uses the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/update-source-schema"}),"PATCH Source schema")," endpoint to move an attribute, along with its details, from the beginning to the end of a source schema's array of attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"PATCH https://{tenant}.api.identitynow.com//v3/sources/:sourceId/schemas/:schemaId\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "move",\n    "from": "/attributes/0",\n    "path": "/attributes/-"\n  }\n]\n')),(0,n.kt)("p",null,'Instead of having to specify the value yourself, which could be an extensive array of information, you can use the "move" operation to move everything from one path to another.'),(0,n.kt)("h2",c({},{id:"apply-the-patch-request-header"}),"Apply the PATCH request header"),(0,n.kt)("p",null,"With an operation, a path, and a change to make, a PATCH request is almost ready."),(0,n.kt)("p",null,"To send the request as a PATCH, you must apply this special PATCH content type header: ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json-patch+json")),(0,n.kt)("h2",c({},{id:"send-your-patch-request"}),"Send your PATCH request"),(0,n.kt)("p",null,"Once you have specified the operation you want to apply, the path you want to change, the change you want to make, and you have applied the PATCH content type header, you can send your PATCH request."),(0,n.kt)("p",null,"When the request is successful, the API will return the updated resource."),(0,n.kt)("h2",c({},{id:"get-started"}),"Get started"),(0,n.kt)("p",null,"Now you can use PATCH requests partially update resources. For more information about PATCH requests, refer to this ",(0,n.kt)("a",c({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/rfc6902"}),"documentation"),". For more information about the Identity Security Cloud PATCH endpoints and which paths can be changed for each one, refer to their API specifications."),(0,n.kt)("p",null,"Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/discuss"}),"https://developer.sailpoint.com/discuss"),"!"))}b.isMDXComponent=!0}}]);