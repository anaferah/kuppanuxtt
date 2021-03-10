<template>
  <div>
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs"/>
    <!-- Slices block component -->
    <slices-block :slices="slices" />
    <footer-prismic :companyLinks="companyLinks" :headline="headline" :headline2="headline2" :headline3="headline3"
    :resourceLinks="resourceLinks" :usefulLinks="usefulLinks" :description="description" :socialLinks="socialLinks" 
    :copyright="copyright" :footerCtas="footerCtas" :designer="designer" :rotxt="rotxt"/>
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  name: "page",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismic
  },
  head() {
    return {
      title: "Kuppa Dropshipping App"
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Languages from API response
      let languages = $prismic.api.data.languages

      // Setting Master language as default language option
      let lang = { lang: languages[0].id }

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        lang = { lang: params.lang }
      }

      // Query to get post content
      const result = await $prismic.api.getByUID('page', params.uid, lang)

      const menuContent = (await $prismic.api.getSingle('top_menu', lang )).data
      const footerContent = (await $prismic.api.getSingle('footer', lang )).data

      return {
        // Page content, set slices as variable
        slices: result.data.body,

        // Menu
        menuLinks: menuContent.menu_links,
        loginLinks: menuContent.login_links,
        companyLinks: footerContent.company_links,
        resourceLinks: footerContent.resource_links,
        footerCtas: footerContent.footer_ctas,
        usefulLinks: footerContent.useful_links,
        headline: footerContent.headline,
        headline2: footerContent.headline2,
        headline3: footerContent.headline3,
        description: footerContent.description,
        socialLinks: footerContent.social_links,
        copyright: footerContent.copyright,
        designer: footerContent.designer,
        rotxt: footerContent.rotxt,
        altLangs: result.alternate_languages
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
