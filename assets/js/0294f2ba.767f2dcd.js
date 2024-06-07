"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[2330],{17377:(e,a,t)=>{t.d(a,{Z:()=>_});var r=t(67294),n=t(86010),o=t(76828),i=t(39130),s=t(35096),c=t(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=t(99603),u=t(21702);function h({href:e,children:a}){return r.createElement(i.default,{href:e,className:(0,n.default)("card padding--lg",l.cardContainer)},a)}function p({href:e,icon:a,title:t,description:o}){return r.createElement(h,{href:e},r.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:t},a,t),o&&r.createElement("p",{className:l.cardDescription,title:o},o))}function m({item:e}){var a,t;const n=(0,o.Wl)(e);return n?r.createElement(p,{href:n,icon:r.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:null!=(t=null==(a=e.customProps)?void 0:a.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function S({item:e}){var a,t;const n=(0,s.Z)(e.href)?r.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):r.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),i=(0,o.xz)(null!=(a=e.docId)?a:void 0);return r.createElement(p,{href:e.href,icon:n,title:e.label,description:null!=(t=e.description)?t:null==i?void 0:i.description})}function f({item:e}){switch(e.type){case"link":return r.createElement(S,{item:e});case"category":return r.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,g=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))w.call(a,t)&&v(e,t,a[t]);if(g)for(var t of g(a))b.call(a,t)&&v(e,t,a[t]);return e};function D({className:e}){const a=(0,o.jA)();return r.createElement(_,{items:a.items,className:e})}function _(e){const{items:a,className:t}=e;if(!a)return r.createElement(D,k({},e));const i=(0,o.MN)(a);return r.createElement("section",{className:(0,n.default)("row",t)},i.map(((e,a)=>r.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},55975:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>w,contentTitle:()=>y,default:()=>D,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=t(3905),n=t(17377),o=t(76828),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&h(e,t,a[t]);if(l)for(var t of l(a))u.call(a,t)&&h(e,t,a[t]);return e},m=(e,a)=>s(e,c(a)),S=(e,a)=>{var t={};for(var r in e)d.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))a.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const f={id:"secure-data-share",title:"Secure Data Share",pagination_label:"Secure Data Share",sidebar_label:"Secure Data Share",sidebar_position:6,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Share ISC data with Snowflake.",slug:"/reporting/secure-data-share",tags:["SecureDataShare"],hide_table_of_contents:!0},y="Secure Data Share",g={unversionedId:"reporting/secure-data-share/secure-data-share",id:"reporting/secure-data-share/secure-data-share",title:"Secure Data Share",description:"Share ISC data with Snowflake.",source:"@site/docs/reporting/secure-data-share/index.md",sourceDirName:"reporting/secure-data-share",slug:"/reporting/secure-data-share",permalink:"/docs/reporting/secure-data-share",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/secure-data-share/index.md",tags:[{label:"SecureDataShare",permalink:"/docs/tags/secure-data-share"}],version:"current",lastUpdatedBy:"James Haytko",lastUpdatedAt:1717781542,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:6,frontMatter:{id:"secure-data-share",title:"Secure Data Share",pagination_label:"Secure Data Share",sidebar_label:"Secure Data Share",sidebar_position:6,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Share ISC data with Snowflake.",slug:"/reporting/secure-data-share",tags:["SecureDataShare"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Access Intelligence Center Videos",permalink:"/docs/reporting/aic-videos"},next:{title:"Secure Data Share ER Diagram",permalink:"/docs/reporting/sds-er-diagram"}},w={},b=[{value:"Requirements",id:"requirements",level:2},{value:"Data Synchronization SLA",id:"data-synchronization-sla",level:2},{value:"How to use SDS",id:"how-to-use-sds",level:2},{value:"Discuss",id:"discuss",level:2}],v={toc:b},k="wrapper";function D(e){var a=e,{components:t}=a,i=S(a,["components"]);return(0,r.kt)(k,m(p(p({},v),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"secure-data-share"}),"Secure Data Share"),(0,r.kt)("p",null,"Secure Data Share (SDS) makes your SailPoint identity data available directly in your own ",(0,r.kt)("a",p({parentName:"p"},{href:"https://aws.amazon.com/financial-services/partner-solutions/snowflake/"}),"AWS Snowflake")," account. The provided dataset comprises structured tables that include identity, audit event, entitlement, role, access profile, account, and application data. Secure Data Share is an alternative to SailPoint's ",(0,r.kt)("a",p({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/search/index.html"}),"Search"),". SDS uses SQL as the query language, whereas Search uses the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html"}),"Elasticsearch Query Language"),". SQL provides certain advantages over Elasticsearch: joining and aggregating data is easier in SQL, and the Snowflake interface has a built-in SQL explorer and allows you to download your search results in CSV format. SDS also allows you to connect your SailPoint data to your favorite data analytics tools, like ",(0,r.kt)("a",p({parentName:"p"},{href:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-connect-snowflake"}),"PowerBI")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"https://help.tableau.com/current/pro/desktop/en-us/examples_snowflake.htm"}),"Tableau"),", further enhancing the reporting capabilities for your SailPoint data."),(0,r.kt)("p",null,"If you would like to speak to a SailPoint representative about Secure Data Share, please ",(0,r.kt)("a",p({parentName:"p"},{href:"https://calendly.com/jordan-mandernach/secure_data_share"}),"schedule a meeting here"),"."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Q-XZtjuv6XY?si=8o9qou1lEGsTx-Se",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,r.kt)("h2",p({},{id:"requirements"}),"Requirements"),(0,r.kt)("p",null,"Secure Data Share is an add-on for Identity Security Cloud. Please contact your sales representative to discuss your SDS options. You must also have an AWS Snowflake account so that SailPoint can synchronize your tenant data with your Snowflake instance."),(0,r.kt)("h2",p({},{id:"data-synchronization-sla"}),"Data Synchronization SLA"),(0,r.kt)("p",null,"Similar to Search, SDS has a synchronization service-level agreement (SLA) of 24 hours. This means it can take up to 24 hours for operational data in your tenant to be synchronized with your Snowflake database. SailPoint Search and SDS are two separate systems, and there is no guarantee on which service will receive updated data first. In some cases, operational data may appear in Search before SDS, and in other cases SDS may receive the data first."),(0,r.kt)("h2",p({},{id:"how-to-use-sds"}),"How to use SDS"),(0,r.kt)("p",null,"For information on how to install and use SDS in your environment, see the documentation ",(0,r.kt)("a",p({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/secure_data_share/secure_data_share.html"}),"here"),". Because SDS uses SQL as the query language, your tenant data is formatted into relational tables. To view the relationships between these tables, please see the following pages for the entity relationship (ER) diagrams that represent the data model."),(0,r.kt)(n.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",p({},{id:"discuss"}),"Discuss"),(0,r.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."),(0,r.kt)("p",null,"To learn more about SDS and discuss it with SailPoint Developer Community members, go to the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6"}),"SailPoint Developer Community Forum"),"."))}D.isMDXComponent=!0}}]);