<template>
  <div class="products">
    <!-- Vue tag to add header component -->
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs" :loginLinks="loginLinks"/>
    <slices-block :slices="slices" data-scroll-section/>
    <footer-prismic :companyLinks="companyLinks" :headline="headline" :headline2="headline2" :headline3="headline3"
    :resourceLinks="resourceLinks" :usefulLinks="usefulLinks" :description="description" :socialLinks="socialLinks" 
    :copyright="copyright" :footerCtas="footerCtas" :designer="designer" :rotxt="rotxt"/>
  </div>
</template>

<script>
// Imports for all components
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  name: "Products",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismic
  },
  transition: "intro",
   head () {
    return {
      title: this.meta_title,
      meta: [
       {
        hid: 'description',
        name: 'description', 
        content: this.meta_description 
      },
     ]
    }
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

      // Query to get the home page content
      const result = await $prismic.api.getSingle('products', lang)

      const menuContent = (await $prismic.api.getSingle('top_menu', lang )).data
      // const headerLogin = (await $prismic.api.getSingle('header', lang )).data
      const footerContent = (await $prismic.api.getSingle('footer', lang )).data

      return {
        // Page content, set slices as variable
        slices: result.data.body,
        meta_title: result.data.meta_title,
        meta_description: result.data.meta_description,

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
      error({ statusCode: 404, message: "Page not found" });
    };
  },
};
</script>
