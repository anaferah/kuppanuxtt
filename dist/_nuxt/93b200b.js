(window.webpackJsonp=window.webpackJsonp||[]).push([[21,11],{235:function(e,n,t){"use strict";t.r(n);t(15);var r=t(2),o=t(102),l=t(185),c=t(186),d={name:"Products",components:{HeaderPrismic:o.a,SlicesBlock:l.a,FooterPrismic:c.a},transition:"intro",head:function(){return{title:this.meta_title,meta:[{hid:"description",name:"description",content:this.meta_description}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,c,d,m,k;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$prismic,r=e.params,o=e.error,n.prev=1,l=t.api.data.languages,c={lang:l[0].id},void 0!==r.lang&&(c={lang:r.lang}),n.next=7,t.api.getSingle("products",c);case 7:return d=n.sent,n.next=10,t.api.getSingle("top_menu",c);case 10:return m=n.sent.data,n.next=13,t.api.getSingle("footer",c);case 13:return k=n.sent.data,n.abrupt("return",{slices:d.data.body,meta_title:d.data.meta_title,meta_description:d.data.meta_description,menuLinks:m.menu_links,loginLinks:m.login_links,companyLinks:k.company_links,resourceLinks:k.resource_links,footerCtas:k.footer_ctas,usefulLinks:k.useful_links,headline:k.headline,headline2:k.headline2,headline3:k.headline3,description:k.description,socialLinks:k.social_links,copyright:k.copyright,designer:k.designer,rotxt:k.rotxt,altLangs:d.alternate_languages});case 17:n.prev=17,n.t0=n.catch(1),o({statusCode:404,message:"Page not found"});case 20:case 21:case"end":return n.stop()}}),n,null,[[1,17]])})))()}},m=t(24),component=Object(m.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"products"},[t("header-prismic",{attrs:{menuLinks:e.menuLinks,altLangs:e.altLangs,loginLinks:e.loginLinks}}),e._v(" "),t("slices-block",{attrs:{slices:e.slices,"data-scroll-section":""}}),e._v(" "),t("footer-prismic",{attrs:{companyLinks:e.companyLinks,headline:e.headline,headline2:e.headline2,headline3:e.headline3,resourceLinks:e.resourceLinks,usefulLinks:e.usefulLinks,description:e.description,socialLinks:e.socialLinks,copyright:e.copyright,footerCtas:e.footerCtas,designer:e.designer,rotxt:e.rotxt}})],1)}),[],!1,null,null,null);n.default=component.exports},320:function(e,n,t){"use strict";t.r(n);var r=t(235).default,o=t(24),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);