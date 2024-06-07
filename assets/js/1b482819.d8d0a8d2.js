"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75823],{53266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>C,frontMatter:()=>k,metadata:()=>g,toc:()=>f});var o=n(3905),a=Object.defineProperty,c=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>c(e,r(t)),m=(e,t)=>{var n={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n};const k={id:"cli-connectors",title:"Connectors",pagination_label:"CLI Connectors",sidebar_label:"Connectors",sidebar_position:1,sidebar_class_name:"cli-connectors",keywords:["cli","cli connectors","connectors"],description:"Learn how to use the CLI to create, manage, and test SaaS connectors in this guide.",slug:"/tools/cli/connectors",tags:["CLI"]},h=void 0,g={unversionedId:"tools/cli/cli-connectors",id:"tools/cli/cli-connectors",title:"Connectors",description:"Learn how to use the CLI to create, manage, and test SaaS connectors in this guide.",source:"@site/docs/tools/cli/connectors.md",sourceDirName:"tools/cli",slug:"/tools/cli/connectors",permalink:"/docs/tools/cli/connectors",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/connectors.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:1,frontMatter:{id:"cli-connectors",title:"Connectors",pagination_label:"CLI Connectors",sidebar_label:"Connectors",sidebar_position:1,sidebar_class_name:"cli-connectors",keywords:["cli","cli connectors","connectors"],description:"Learn how to use the CLI to create, manage, and test SaaS connectors in this guide.",slug:"/tools/cli/connectors",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"Command Line Interface",permalink:"/docs/tools/cli"},next:{title:"CLI-Sanitize",permalink:"/docs/tools/cli/sanitize"}},v={},f=[{value:"Connectors",id:"connectors",level:2},{value:"Commands",id:"commands",level:2},{value:"Init project",id:"init-project",level:3},{value:"Create connector",id:"create-connector",level:3},{value:"Upload connector",id:"upload-connector",level:3},{value:"Invoke command",id:"invoke-command",level:3},{value:"List connectors",id:"list-connectors",level:3},{value:"Update connector",id:"update-connector",level:3},{value:"Validate a connector",id:"validate-a-connector",level:3},{value:"Delete connector",id:"delete-connector",level:2},{value:"Manage tags",id:"manage-tags",level:3},{value:"Get logs",id:"get-logs",level:3}],y={toc:f},N="wrapper";function C(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,o.kt)(N,u(d(d({},y),a),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",d({},{id:"connectors"}),"Connectors"),(0,o.kt)("p",null,"Learn how to use the CLI to create, manage, and test SaaS connectors in this guide."),(0,o.kt)("p",null,"You can use SaaS connectors to serve as bridges between your Identity Security Cloud (ISC) tenant and other source systems without the use of a Virtual Appliance (VA). For more information about the SaaS connectors, refer to the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity"}),"SaaS Connectivity")," guide."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"connectors")," command is a CLI interface for the SaaS Connectivity platform. The CLI is the best way to create, manage, and test SaaS connectors within your tenant."),(0,o.kt)("h2",d({},{id:"commands"}),"Commands"),(0,o.kt)("p",null,"To create, manage, and test SaaS connectors with the CLI, you can run these commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#init-project"}),"Init project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#create-connector"}),"Create connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#upload-connector"}),"Upload connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#invoke-command"}),"Invoke command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#list-connectors"}),"List connectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#update-connector"}),"Update connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#validate-a-connector"}),"Validate connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#delete-connector"}),"Delete connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#manage-tags"}),"Manage tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"#get-logs"}),"Get logs"))),(0,o.kt)("h3",d({},{id:"init-project"}),"Init project"),(0,o.kt)("p",null,"To initialize a connector project, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn init [connectorProjectName]\n")),(0,o.kt)("p",null,"This command creates a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"connectorProjectName")," in your working directory. The folder includes all the files necessary to create a connector. For more information about initiating a connector project, refer to the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity/prerequisites/#create-new-project"}),"Create new project")," section of the SaaS Connectivity documentation."),(0,o.kt)("h3",d({},{id:"create-connector"}),"Create connector"),(0,o.kt)("p",null,"To create a connector entry in your ISC tenant, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn create [connectorAlias]\n")),(0,o.kt)("p",null,"This command registers your connector and gives it a unique ID. For more information about creating a connector in your tenant, refer to the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity/test-build-deploy#create-connector-in-your-org"}),"Create connector in your org")," section of the SaaS Connectivity documentation."),(0,o.kt)("h3",d({},{id:"upload-connector"}),"Upload connector"),(0,o.kt)("p",null,"To upload a connector to your ISC tenant, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run pack-zip")," in the project directory to package the connector into a zip file. Then run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn upload -c [connectorID | connectorAlias] -f connector.zip\n")),(0,o.kt)("p",null,"You must package the project files before you upload them. For more information about how to package and upload connectors, refer to the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity/test-build-deploy/#create-and-upload-connector-bundle"}),"Create and upload connector bundle")," section of the SaaS Connectivity documentation."),(0,o.kt)("h3",d({},{id:"invoke-command"}),"Invoke command"),(0,o.kt)("p",null,"To test connector commands, like ",(0,o.kt)("inlineCode",{parentName:"p"},"test-connection"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"account-list"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"entitlement-list"),", run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn invoke [command] -c [connectorID | connectorAlias] -p [config.json] -v [version]\n")),(0,o.kt)("p",null,"For more information about the different available connector commands, refer to ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity/connector-commands"}),"Connector Commands"),"."),(0,o.kt)("p",null,"The entitlement commands require an additional flag (",(0,o.kt)("inlineCode",{parentName:"p"},"-t [entitlementType]"),"), like this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn invoke entitlement-list -t [entitlementType] -c [connectorID | connectorAlias] -p [config.json] -v [version]\n")),(0,o.kt)("p",null,"For more information about invoking commands, refer to the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity/test-build-deploy#test-your-connector-in-identitynow"}),"Test your connector in Identity Security Cloud")," section of the SaaS Connectivity documentation."),(0,o.kt)("h3",d({},{id:"list-connectors"}),"List connectors"),(0,o.kt)("p",null,"To get a list of connectors in your tenant, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn list\n")),(0,o.kt)("h3",d({},{id:"update-connector"}),"Update connector"),(0,o.kt)("p",null,"To change a connector's alias, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn update -c [connectorID] -a [newConnectorAlias]\n")),(0,o.kt)("h3",d({},{id:"validate-a-connector"}),"Validate a connector"),(0,o.kt)("p",null,"You can use the CLI to validate your connector's behavior. The validate command runs integration tests against your connector to ensure all the basic functionality works."),(0,o.kt)("p",null,"To validate a connector's behavior, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn validate -c [connectorID]\n")),(0,o.kt)("p",null,"You can pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," flag to run the command as read-only, or you can run a full suite of read/write tests."),(0,o.kt)("h2",d({},{id:"delete-connector"}),"Delete connector"),(0,o.kt)("p",null,"To delete a connector, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn delete -c [connectorID]\n")),(0,o.kt)("h3",d({},{id:"manage-tags"}),"Manage tags"),(0,o.kt)("p",null,"You can use tags to create multiple instances of your connector that can be used in ISC. The ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag is created by default and is the primary instance, typically used for production purposes. Tags are similar to branches in a version control system, like git or CVS. You can create a tag for actively developing the connector, or for any other purpose you want."),(0,o.kt)("p",null,"A common pattern is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," tag on a connector from a specific version, like the latest version."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn tags create -c [connectorID | connectorAlias] -n [tagName] -v [version]\n")),(0,o.kt)("p",null,"As the connector is developed and the version number increases, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," tag to point to the latest version. Doing so leaves the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag on a stable version while you make changes to your connector on the unstable ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," tag."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn tags update -c [connectorID | connectorAlias] -n [tagName] -v [version]\n")),(0,o.kt)("p",null,"You can test the connector in ISC by selecting the connector instance with the ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," tag. The CLI will use the version you point to with the update command."),(0,o.kt)("p",null,"To see a connector's tags and the versions they point to, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn tags list -c [connectorID | connectorAlias]\n")),(0,o.kt)("p",null,"When you are satisfied with the changes you made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," tag, you can point your ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag to the new stable version."),(0,o.kt)("h3",d({},{id:"get-logs"}),"Get logs"),(0,o.kt)("p",null,"To get all logs for all connectors, run these logging commands:"),(0,o.kt)("p",null,"To get a dump of logs, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn logs\n")),(0,o.kt)("p",null,"To get the output of logs in realtime, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn logs tail\n")),(0,o.kt)("p",null,"To filter the logs to a specific connector, use a utility like ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),", like how it's used in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn logs | grep 'connector version 29'\n")),(0,o.kt)("p",null,"To get detailed logging statistics on each connector, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"sail conn stats\n")),(0,o.kt)("p",null,"For more information about connector logging, refer to ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/connectivity/saas-connectivity/in-depth/logging/"}),"Logging"),"."))}C.isMDXComponent=!0}}]);