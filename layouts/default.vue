<template>
  <main id="js-scroll">
    <nuxt />
     <!-- <footer-prismic /> -->
    <!-- <footer-prismic :companyLinks="companyLinks" :headline="headline" :headline2="headline2" :headline3="headline3"
    :resourceLinks="resourceLinks" :usefulLinks="usefulLinks" :description="description" :socialLinks="socialLinks" 
    :copyright="copyright"/> -->
  </main>
</template>

<script>
// import FooterPrismic from "~/components/FooterPrismic";

export default {
  // components: {
  //   FooterPrismic
  // },
  head() {
    return {
      title: "Kuppa Dropshipping App"
    };
  },
  //   beforeMount () {
  //   const browserLang = (window.navigator ? (window.navigator.language 
  //           || window.navigator.systemLanguage 
  //           || window.navigator.userLanguage) : "en").toLowerCase().substr(0, 2)

  //   if (browserLang == 'ro' && window.location.pathname == '/' 
  //         && document.referrer.indexOf(window.location.origin) < 0) {
  //     window.location.pathname = '/ro'
  //   }
  // },
};
</script>
