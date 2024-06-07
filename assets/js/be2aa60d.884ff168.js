"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[56572],{17377:(e,t,i)=>{i.d(t,{Z:()=>O});var a=i(67294),r=i(86010),n=i(76828),o=i(39130),s=i(35096),c=i(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i(99603),d=i(21702);function u({href:e,children:t}){return a.createElement(o.default,{href:e,className:(0,r.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:i,description:n}){return a.createElement(u,{href:e},a.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:i},t,i),n&&a.createElement("p",{className:l.cardDescription,title:n},n))}function f({item:e}){var t,i;const r=(0,n.Wl)(e);return r?a.createElement(m,{href:r,icon:a.createElement(p.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(i=null==(t=e.customProps)?void 0:t.description)?i:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t,i;const r=(0,s.Z)(e.href)?a.createElement(p.G,{icon:d.FL8,className:l.docCardIcon}):a.createElement(p.G,{icon:d.wlW,className:l.docCardIcon}),o=(0,n.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(m,{href:e.href,icon:r,title:e.label,description:null!=(i=e.description)?i:null==o?void 0:o.description})}function b({item:e}){switch(e.type){case"link":return a.createElement(h,{item:e});case"category":return a.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,C=(e,t,i)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,k=(e,t)=>{for(var i in t||(t={}))y.call(t,i)&&C(e,i,t[i]);if(g)for(var i of g(t))w.call(t,i)&&C(e,i,t[i]);return e};function E({className:e}){const t=(0,n.jA)();return a.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:i}=e;if(!t)return a.createElement(E,k({},e));const o=(0,n.MN)(t);return a.createElement("section",{className:(0,r.default)("row",i)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},13859:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>E,frontMatter:()=>b,metadata:()=>g,toc:()=>w});var a=i(3905),r=i(17377),n=i(76828),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&u(e,i,t[i]);if(l)for(var i of l(t))d.call(t,i)&&u(e,i,t[i]);return e},f=(e,t)=>s(e,c(t)),h=(e,t)=>{var i={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(i[a]=e[a]);return i};const b={id:"certifications",title:"Certifications",description:"Certifications",custom_edit_url:null},v=void 0,g={unversionedId:"api/beta/certifications",id:"api/beta/certifications",title:"Certifications",description:"Certifications",source:"@site/docs/api/beta/certifications.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/certifications",permalink:"/docs/api/beta/certifications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"certifications",title:"Certifications",description:"Certifications",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Patch a specified Auth Profile",permalink:"/docs/api/beta/patch-profile-config"},next:{title:"Reassign Certifications Asynchronously",permalink:"/docs/api/beta/submit-reassign-certs-async"}},y={},w=[],C={toc:w},k="wrapper";function E(e){var t=e,{components:i}=t,o=h(t,["components"]);return(0,a.kt)(k,f(m(m({},C),o),{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement certification functionality.\nThis API provides specific functionality that improves an organization's ability to manage its certification process."),(0,a.kt)("p",null,"A certification refers to Identity Security Cloud's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access.\nThese certifications serve as a way of showing that a user's access has been reviewed and approved.\nMultiple certifications by different reviewers are often required to approve a user's access.\nA set of multiple certifications is called a certification campaign."),(0,a.kt)("p",null,"For example, an organization may use a Manager Certification as a way of showing that a user's access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user's access has been reviewed and approved by multiple managers.\nOnce this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more."),(0,a.kt)("p",null,"This API enables administrators and reviewers to get useful information about certifications at a high level, such as the reviewers involved, and at a more granular level, such as the permissions affected by changes to entitlements within those certifications.\nIt also provides the useful ability to reassign identities and items within certifications to other reviewers, rather than ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/idn/api/beta/submit-reassign-certs-async/"}),"reassigning the entire certifications themselves"),"."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts"}),"Managing User Accounts")," for more information about accounts."),(0,a.kt)(r.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);