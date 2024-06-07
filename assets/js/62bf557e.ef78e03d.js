"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[44645],{73137:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(67294),o=n(86010),l=n(8757),i=n(73276),r=n(54939);const s={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(p)for(var n of p(t))g.call(t,n)&&k(e,n,t[n]);return e},h=(e,t)=>d(e,u(t));function b({className:e,block:t,selectedValue:n,selectValue:i,tabValues:r}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),o=r[a].value;o!==n&&(d(t),i(o))},p=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=null!=(n=c[t])?n:c[c.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":t},e)},r.map((({value:e,label:t,attributes:l})=>a.createElement("li",h(f({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:u},l),{className:(0,o.default)("tabs__item",s.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function v({lazy:e,children:t,selectedValue:n}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,o.default)("tabs-container",s.tabList)},a.createElement(b,f(f({},e),t)),a.createElement(v,f(f({},e),t)))}function S(e){const t=(0,r.default)();return a.createElement(y,f({key:String(t)},e))}},39138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var a=n(3905),o=n(73137),l=n(62574),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&p(e,n,t[n]);return e},g=(e,t)=>r(e,s(t)),k=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const f={id:"go-sdk",title:"Go SDK",pagination_label:"Go SDK",sidebar_label:"Golang",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk"],description:"Easy ISC development in Golang SDK.",slug:"/tools/sdk/go",tags:["SDK","Software Development Kit"]},h=void 0,b={unversionedId:"tools/sdk/go/go-sdk",id:"tools/sdk/go/go-sdk",title:"Go SDK",description:"Easy ISC development in Golang SDK.",source:"@site/docs/tools/sdk/go/index.mdx",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go",permalink:"/docs/tools/sdk/go",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/index.mdx",tags:[{label:"SDK",permalink:"/docs/tags/sdk"},{label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:2,frontMatter:{id:"go-sdk",title:"Go SDK",pagination_label:"Go SDK",sidebar_label:"Golang",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk"],description:"Easy ISC development in Golang SDK.",slug:"/tools/sdk/go",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"SDKs",permalink:"/docs/tools/sdk"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/getting-started"}},v={},y=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example &quot;config.json&quot;",id:"example-configjson",level:4},{value:"Example &quot;config.json&quot;",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}],S={toc:y},N="wrapper";function w(e){var t=e,{components:n}=t,i=k(t,["components"]);return(0,a.kt)(N,g(m(m({},S),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Read this guide to learn how to use the Go SDK. The Go SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow."),(0,a.kt)("h2",m({},{id:"requirements"}),"Requirements"),(0,a.kt)("p",null,"You need the following to use the Go SDK:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Golang version 1.18 or above. You can download it ",(0,a.kt)("a",m({parentName:"p"},{href:"https://go.dev/dl/"}),"here"),". You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"go version")," to check your version. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Your tenant name in IdentityNow. To learn how to find it, refer to ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/api/getting-started#find-your-tenant-name"}),"Getting Started"),". The SDK will use this tenant name to connect to your IdentityNow instance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A PAT with a client secret and ID. To learn how to create one in ISC, refer to ",(0,a.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token"}),"Personal Access Tokens"),". The SDK will use this PAT to authenticate with the SailPoint APIs."))),(0,a.kt)("h2",m({},{id:"setup"}),"Setup"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CLI Assisted ",(0,a.kt)("em",null,"(Recommended)")),(0,a.kt)("p",null,"The SailPoint CLI offers a few commands that will allow you to quickly get started with the Go SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli"}),"SailPoint CLI"),"."),(0,a.kt)("p",null,"Once the CLI is installed and configured, run this command to create a new Go project with the Go SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"sail sdk init golang go-example\n")),(0,a.kt)("p",null,"Running the command will create the structure for your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-text"}),"|-- go-example\n|   |-- go.mod\n|   |-- go.sum\n|   |-- sdk.go\n")),(0,a.kt)("p",null,"Navigate into your project folder and run this command to install the required dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"go mod tidy\n")),(0,a.kt)("p",null,"The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,a.kt)("a",m({parentName:"p"},{href:"#configure"}),"Configure section"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Manual Installation"),(0,a.kt)("p",null,"To begin your go project, you will need to create a directory for your project."),(0,a.kt)("p",null,"To create a project directory, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"mkdir golang-example\n")),(0,a.kt)("p",null,"Then run this command to change into your project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cd golang-example\n")),(0,a.kt)("p",null,"To initialize your project and create the ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file, run this command in your project directory: "),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-go"}),"go mod init github.com/github-repo-name/golang-example\n")),(0,a.kt)("p",null,"You will edit this file to add the SailPoint SDK to your project."),(0,a.kt)("p",null,"To install the SailPoint SDK, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-go"}),"go get github.com/sailpoint-oss/golang-sdk\n")),(0,a.kt)("p",null,"The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,a.kt)("a",m({parentName:"p"},{href:"#configure"}),"Configure section"),".")),(0,a.kt)("h2",m({},{id:"configure"}),"Configure"),(0,a.kt)("p",null,'You must provide configuration to the SDK so that it can authenticate to your SailPoint tenant and make API calls. To do so, you can use a configuration file, "config.json", or environment variables.'),(0,a.kt)("h3",m({},{id:"configuration-file"}),"Configuration File"),(0,a.kt)("p",null,'The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,a.kt)("inlineCode",{parentName:"p"},"ClientId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientSecret"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseURL"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CLI Assisted ",(0,a.kt)("em",null,"(Recommended)")),'The SailPoint CLI offers a command to generate the "config.json" file with your currently configured CLI credentials.',(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"sail sdk init config\n")),(0,a.kt)("p",null,'If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a "config.json" for. '),(0,a.kt)("p",null,"To pass an additional parameter that states the environment you want to configure, run this command: "),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"sail sdk init config --env devrel\n")),(0,a.kt)("h4",m({},{id:"example-configjson"}),'Example "config.json"'),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Manual Configuration"),(0,a.kt)("p",null,'Create a file named "config.json", and provide these key/value pairs: ',(0,a.kt)("inlineCode",{parentName:"p"},"ClientId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientSecret"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseURL"),"."),(0,a.kt)("h4",m({},{id:"example-configjson-1"}),'Example "config.json"'),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'))),(0,a.kt)("admonition",m({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"Please ensure this file is ignored in your version control system (ex. .gitignore for git)")),(0,a.kt)("h3",m({},{id:"environment-variable-configuration"}),"Environment variable configuration"),(0,a.kt)("p",null,"You can also store your configuration in environment variables."),(0,a.kt)("p",null,"To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.default,{value:"linux_mac",label:"Linux/Mac",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"))),(0,a.kt)(l.default,{value:"windows",label:"Windows PowerShell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n")),(0,a.kt)("p",null,"To get your environment variables to persist across PowerShell sessions, run these commands instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n")))),(0,a.kt)("h2",m({},{id:"discuss"}),"Discuss"),(0,a.kt)("p",null,"You can use this SDK to build new tools that extend your ISC platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/discuss"}),"https://developer.sailpoint.com/discuss"),"! "),(0,a.kt)("h2",m({},{id:"getting-started"}),"Getting Started"),(0,a.kt)("p",null,"To get started using the SDK, refer to the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/tools/sdk/go/getting-started"}),"Getting Started Guide"),"."))}w.isMDXComponent=!0}}]);