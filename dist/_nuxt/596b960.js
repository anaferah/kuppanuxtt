(window.webpackJsonp=window.webpackJsonp||[]).push([[22,12],{247:function(e,n,t){"use strict";t.r(n);t(19);var r=t(2),o=t(107),l=t(195),c=t(196),d={name:"Terms",components:{HeaderPrismic:o.a,SlicesBlock:l.a,FooterPrismic:c.a},transition:"intro",head:function(){return{title:"Kuppa Dropshipping App"}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,c,d,k,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$prismic,r=e.params,o=e.error,n.prev=1,l=t.api.data.languages,c={lang:l[0].id},void 0!==r.lang&&(c={lang:r.lang}),n.next=7,t.api.getSingle("terms__conditions",c);case 7:return d=n.sent,n.next=10,t.api.getSingle("top_menu",c);case 10:return k=n.sent.data,n.next=13,t.api.getSingle("footer",c);case 13:return m=n.sent.data,n.abrupt("return",{slices:d.data.body,menuLinks:k.menu_links,loginLinks:k.login_links,companyLinks:m.company_links,footerCtas:m.footer_ctas,resourceLinks:m.resource_links,usefulLinks:m.useful_links,headline:m.headline,headline2:m.headline2,headline3:m.headline3,description:m.description,socialLinks:m.social_links,copyright:m.copyright,designer:m.designer,rotxt:m.rotxt,altLangs:d.alternate_languages});case 17:n.prev=17,n.t0=n.catch(1),o({statusCode:404,message:"Page not found"});case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))()}},k=t(30),component=Object(k.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"terms"},[t("header-prismic",{attrs:{menuLinks:e.menuLinks,altLangs:e.altLangs,loginLinks:e.loginLinks}}),e._v(" "),t("slices-block",{attrs:{slices:e.slices,"data-scroll-section":""}}),e._v(" "),t("footer-prismic",{attrs:{companyLinks:e.companyLinks,headline:e.headline,headline2:e.headline2,headline3:e.headline3,resourceLinks:e.resourceLinks,usefulLinks:e.usefulLinks,description:e.description,socialLinks:e.socialLinks,copyright:e.copyright,footerCtas:e.footerCtas,designer:e.designer,rotxt:e.rotxt}})],1)}),[],!1,null,null,null);n.default=component.exports},334:function(e,n,t){"use strict";t.r(n);var r=t(247).default,o=t(30),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);