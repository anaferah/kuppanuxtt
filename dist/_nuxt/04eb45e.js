(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{244:function(e,n,t){"use strict";t.r(n);t(19);var r=t(2),o=t(107),l=t(195),c=t(196),d={name:"Pricing",components:{HeaderPrismic:o.a,SlicesBlock:l.a,FooterPrismic:c.a},transition:"intro",head:function(){return{title:"Kuppa Dropshipping App"}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,c,d,k,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$prismic,r=e.params,o=e.error,n.prev=1,l=t.api.data.languages,c={lang:l[0].id},void 0!==r.lang&&(c={lang:r.lang}),n.next=7,t.api.getSingle("pricing",c);case 7:return d=n.sent,n.next=10,t.api.getSingle("top_menu",c);case 10:return k=n.sent.data,n.next=13,t.api.getSingle("footer",c);case 13:return f=n.sent.data,n.abrupt("return",{slices:d.data.body,menuLinks:k.menu_links,loginLinks:k.login_links,companyLinks:f.company_links,footerCtas:f.footer_ctas,resourceLinks:f.resource_links,usefulLinks:f.useful_links,headline:f.headline,headline2:f.headline2,headline3:f.headline3,description:f.description,socialLinks:f.social_links,copyright:f.copyright,designer:f.designer,rotxt:f.rotxt,altLangs:d.alternate_languages});case 17:n.prev=17,n.t0=n.catch(1),o({statusCode:404,message:"Page not found"});case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))()}},k=t(30),component=Object(k.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"pricing"},[t("header-prismic",{attrs:{menuLinks:e.menuLinks,altLangs:e.altLangs,loginLinks:e.loginLinks}}),e._v(" "),t("slices-block",{attrs:{slices:e.slices,"data-scroll-section":""}}),e._v(" "),t("footer-prismic",{attrs:{companyLinks:e.companyLinks,headline:e.headline,headline2:e.headline2,headline3:e.headline3,resourceLinks:e.resourceLinks,usefulLinks:e.usefulLinks,description:e.description,socialLinks:e.socialLinks,copyright:e.copyright,footerCtas:e.footerCtas,designer:e.designer,rotxt:e.rotxt}})],1)}),[],!1,null,null,null);n.default=component.exports},331:function(e,n,t){"use strict";t.r(n);var r=t(244).default,o=t(30),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);