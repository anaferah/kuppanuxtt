(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(e,n,t){"use strict";t.r(n);t(15);var r=t(2),o=t(102),l=t(185),c=t(186),d={name:"About",components:{HeaderPrismic:o.a,SlicesBlock:l.a,FooterPrismic:c.a},transition:"intro",head:function(){return{title:"Kuppa Dropshipping App"}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,c,d,k,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$prismic,r=e.params,o=e.error,n.prev=1,l=t.api.data.languages,c={lang:l[0].id},void 0!==r.lang&&(c={lang:r.lang}),n.next=7,t.api.getSingle("about",c);case 7:return d=n.sent,n.next=10,t.api.getSingle("top_menu",c);case 10:return k=n.sent.data,n.next=13,t.api.getSingle("footer",c);case 13:return h=n.sent.data,n.abrupt("return",{slices:d.data.body,menuLinks:k.menu_links,companyLinks:h.company_links,loginLinks:k.login_links,footerCtas:h.footer_ctas,resourceLinks:h.resource_links,usefulLinks:h.useful_links,headline:h.headline,headline2:h.headline2,headline3:h.headline3,description:h.description,socialLinks:h.social_links,copyright:h.copyright,designer:h.designer,rotxt:h.rotxt,altLangs:d.alternate_languages});case 17:n.prev=17,n.t0=n.catch(1),o({statusCode:404,message:"Page not found"});case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))()}},k=t(24),component=Object(k.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"about"},[t("header-prismic",{attrs:{menuLinks:e.menuLinks,altLangs:e.altLangs,loginLinks:e.loginLinks}}),e._v(" "),t("slices-block",{attrs:{slices:e.slices,"data-scroll-section":""}}),e._v(" "),t("footer-prismic",{attrs:{companyLinks:e.companyLinks,headline:e.headline,headline2:e.headline2,headline3:e.headline3,resourceLinks:e.resourceLinks,usefulLinks:e.usefulLinks,description:e.description,socialLinks:e.socialLinks,copyright:e.copyright,footerCtas:e.footerCtas,designer:e.designer,rotxt:e.rotxt}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);