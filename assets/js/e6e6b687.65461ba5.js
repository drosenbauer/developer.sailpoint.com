"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92102],{51038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>y,default:()=>w,frontMatter:()=>h,metadata:()=>v,toc:()=>b});var o=n(3905),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))r.call(e,n)&&m(t,n,e[n]);if(s)for(var n of s(e))l.call(e,n)&&m(t,n,e[n]);return t},d=(t,e)=>i(t,c(e)),u=(t,e)=>{var n={};for(var o in t)r.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&s)for(var o of s(t))e.indexOf(o)<0&&l.call(t,o)&&(n[o]=t[o]);return n};const h={id:"test-connection",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Ensure the connector can communicate with the source.",slug:"/connectivity/saas-connectivity/commands/test-connection",tags:["Connectivity","Connector Command"]},y=void 0,v={unversionedId:"connectivity/saas-connectivity/connector-commands/test-connection",id:"connectivity/saas-connectivity/connector-commands/test-connection",title:"Test Connection",description:"Ensure the connector can communicate with the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/test-connection.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/test-connection",permalink:"/docs/connectivity/saas-connectivity/commands/test-connection",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/test-connection.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",frontMatter:{id:"test-connection",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Ensure the connector can communicate with the source.",slug:"/connectivity/saas-connectivity/commands/test-connection",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Read",permalink:"/docs/connectivity/saas-connectivity/commands/source-data-read"},next:{title:"Connectivity Customizers",permalink:"/docs/connectivity/saas-connectivity/customizers"}},f={},b=[{value:"Example StdTestConnectionOutput",id:"example-stdtestconnectionoutput",level:3},{value:"Summary",id:"summary",level:2},{value:"Implementation",id:"implementation",level:2}],k={toc:b},g="wrapper";function w(t){var e=t,{components:a}=e,i=u(e,["components"]);return(0,o.kt)(g,d(p(p({},k),i),{components:a,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",p({parentName:"tr"},{align:"left"}),"Input/Output"),(0,o.kt)("th",p({parentName:"tr"},{align:"center"}),"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",p({parentName:"tr"},{align:"left"}),"Input"),(0,o.kt)("td",p({parentName:"tr"},{align:"center"}),"undefined")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",p({parentName:"tr"},{align:"left"}),"Output"),(0,o.kt)("td",p({parentName:"tr"},{align:"center"}),"StdTestConnectionOutput")))),(0,o.kt)("h3",p({},{id:"example-stdtestconnectionoutput"}),"Example StdTestConnectionOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"{\n}\n")),(0,o.kt)("h2",p({},{id:"summary"}),"Summary"),(0,o.kt)("p",null,"The test connection command ensures the connector can communicate with the target web service. It validates API credentials, host names, ports, and other configuration items. To implement this command, look for either a health endpoint or a simple GET endpoint. Some web services implement a health endpoint that returns status information about the service, which can be useful to test a connection. If no health endpoint exists, use a simple GET endpoint that takes few to no parameters to ensure the connector can make a successful call to the web service."),(0,o.kt)("p",null,"Use \u2018Test Connection\u2019 in the ISC UI after an admin has finished entering configuration information for a new instance of the connector."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Test Connection",src:n(91868).Z,width:"2559",height:"843"})),(0,o.kt)("h2",p({},{id:"implementation"}),"Implementation"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"}),"index.ts"),", add the test connection function handler to your connector. Within this function, send a simple request to your web service to ensure the connection works. The web service this connector targets has a JavaScript SDK, so define your own function like the following example to test the connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            res.send(await airtable.testConnection())\n        })\n        ...\n        ...\n}\n")),(0,o.kt)("p",null,"To implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"testConnection()")," function, use the following function created in the web service client code, ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"}),"airtable.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"})," /**\n     * Test connection by listing users from the Airtable instance.\n     * This will make sure the apiKey has the correct access.\n     * @returns empty struct if response is 2XX\n     */\n    async testConnection(): Promise<any> {\n        return this.airTableBase('Users').select({\n            view: 'Grid view'\n        }).firstPage().then(records => {\n            return {}\n        }).catch(err => {\n            throw new ConnectorError('unable to connect')\n        })\n    }\n")),(0,o.kt)("p",null,"This function calls an endpoint on the target web service to list all users. If the call is successful, the web service returns an empty object, which is okay because you do not need to do anything with the data. Your only goal is to ensure that you can make API calls with the provided configuration."))}w.isMDXComponent=!0},91868:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/test_command_idn-5683243e47604fde001aaa1a74e70fde.png"}}]);