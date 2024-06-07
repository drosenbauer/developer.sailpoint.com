"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[93207],{70874:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>k,toc:()=>b});var s=l(3905),a=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,p=(e,t)=>{for(var l in t||(t={}))i.call(t,l)&&u(e,l,t[l]);if(r)for(var l of r(t))c.call(t,l)&&u(e,l,t[l]);return e},g=(e,t)=>n(e,o(t)),d=(e,t)=>{var l={};for(var s in e)i.call(e,s)&&t.indexOf(s)<0&&(l[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&c.call(e,s)&&(l[s]=e[s]);return l};const m={id:"cli-clusters",title:"Clusters",pagination_label:"CLI Clusters",sidebar_label:"Clusters",sidebar_position:8,sidebar_class_name:"cli-clusters",keywords:["cli","cli clusters","clusters"],description:"Learn how to use the CLI to manage clusters in this guide.",slug:"/tools/cli/cluster",tags:["CLI"]},h="Clusters",k={unversionedId:"tools/cli/cli-clusters",id:"tools/cli/cli-clusters",title:"Clusters",description:"Learn how to use the CLI to manage clusters in this guide.",source:"@site/docs/tools/cli/cluster.md",sourceDirName:"tools/cli",slug:"/tools/cli/cluster",permalink:"/docs/tools/cli/cluster",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/cluster.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:8,frontMatter:{id:"cli-clusters",title:"Clusters",pagination_label:"CLI Clusters",sidebar_label:"Clusters",sidebar_position:8,sidebar_class_name:"cli-clusters",keywords:["cli","cli clusters","clusters"],description:"Learn how to use the CLI to manage clusters in this guide.",slug:"/tools/cli/cluster",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI VA",permalink:"/docs/tools/cli/va"},next:{title:"CLI Workflows",permalink:"/docs/tools/cli/workflow"}},f={},b=[{value:"List clusters",id:"list-clusters",level:2},{value:"Get cluster by ID",id:"get-cluster-by-id",level:2},{value:"Get cluster&#39;s log configuration",id:"get-clusters-log-configuration",level:2},{value:"Set cluster&#39;s log configuration",id:"set-clusters-log-configuration",level:2}],v={toc:b},C="wrapper";function N(e){var t=e,{components:l}=t,a=d(t,["components"]);return(0,s.kt)(C,g(p(p({},v),a),{components:l,mdxType:"MDXLayout"}),(0,s.kt)("h1",p({},{id:"clusters"}),"Clusters"),(0,s.kt)("p",null,"Learn how to use the SailPoint CLI to list manage client managed clusters in this guide."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster")," command makes it easy to manage clusters within the CLI."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",p({parentName:"li"},{href:"#clusters"}),"Clusters"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",p({parentName:"li"},{href:"#list-clusters"}),"List clusters")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",p({parentName:"li"},{href:"#get-cluster-by-id"}),"Get cluster by ID")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",p({parentName:"li"},{href:"#get-clusters-log-configuration"}),"Get cluster's log configuration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",p({parentName:"li"},{href:"#set-clusters-log-configuration"}),"Set cluster's log configuration"))))),(0,s.kt)("h2",p({},{id:"list-clusters"}),"List clusters"),(0,s.kt)("p",null,"To manage clusters in the SailPoint CLI, you need to know which clusters are available, as well as their IDs. Run this command to list the clusters connected to your tenant:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster list\n")),(0,s.kt)("p",null,"This command returns a table of the clusters, along with their IDs."),(0,s.kt)("p",null,"This command uses the ",(0,s.kt)("a",p({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/get-managed-clusters"}),"Get all clusters endpoint"),"."),(0,s.kt)("h2",p({},{id:"get-cluster-by-id"}),"Get cluster by ID"),(0,s.kt)("p",null,"Once you have a cluster's ID, you can see view all its details. Run this command to get a cluster by ID:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster get {cluster ID}\n")),(0,s.kt)("p",null,"Here is an example command:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster get f48e8c9c7dce4672bead8222a767dce7\n")),(0,s.kt)("p",null,"The CLI will return the cluster, along with all its details."),(0,s.kt)("p",null,"You can also get multiple clusters at once. Here is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster get f48e8c9c7dce4672bead8222a767dce7 3652192cc2264ad5827fdc1eb2d88f01\n")),(0,s.kt)("p",null,"This command uses the ",(0,s.kt)("a",p({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/get-managed-cluster"}),"Get cluster endpoint"),"."),(0,s.kt)("h2",p({},{id:"get-clusters-log-configuration"}),"Get cluster's log configuration"),(0,s.kt)("p",null,"The VA clusters have logs that track their activity, and you can view these logs' configurations and make changes to them. To get a cluster's log configuration, run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster log get {cluster ID}\n")),(0,s.kt)("p",null,"Here is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster log get 2c91808580f6cc1a01811af8cf5f18cb\n")),(0,s.kt)("p",null,"This command uses the ",(0,s.kt)("a",p({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/get-client-log-configuration"}),"Get cluster's log configuration endpoint"),"."),(0,s.kt)("h2",p({},{id:"set-clusters-log-configuration"}),"Set cluster's log configuration"),(0,s.kt)("p",null,"You can update a cluster's root logging level, the duration of its logging, and the connector logging class. To set a cluster's log configuration, run this command:"),(0,s.kt)("p",null,"This command uses the ",(0,s.kt)("a",p({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/put-client-log-configuration"}),"Update cluster's log configuration endpoint"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster log set {cluster ID} -r {rootLevel} -d {durationMinutes} -c {connector logging class}\n")),(0,s.kt)("p",null,"Here is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"sail cluster log set 2c91808580f6cc1a01811af8cf5f18cb -r TRACE -d 30 -c sailpoint.connector.ADLDAPConnector=TRACE\n")),(0,s.kt)("p",null,'This example command sets the "TRACE" root logging level, a duration of 30 minutes, and a connector logging class of "sailpoint.connector.ADLDAPConnector=TRACE".'),(0,s.kt)("p",null,"Refer to your respective ",(0,s.kt)("a",p({parentName:"p"},{href:"https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html"}),"connector guide")," to see which connector logging classes are available."))}N.isMDXComponent=!0}}]);