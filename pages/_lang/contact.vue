<template>
  <div class="contact">
    <!-- Vue tag to add header component -->
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs" :loginLinks="loginLinks"/>
    <!-- Slices block component -->
    <slices-block :slices="slices" />
    <section class="tiles tiles--columns" id="grid3" data-scroll-section>
      <!-- {{ $prismic.asText(instafollow) }} -->
				<div class="tiles__wrap">
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid3" data-scroll-direction="vertical">
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image1})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image2})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image3})`}"></div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid3" data-scroll-direction="vertical">
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image4})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image5})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image6})`}"></div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid3" data-scroll-direction="vertical">
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image7})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image8})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image9})`}"></div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid3" data-scroll-direction="vertical">
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image10})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image11})`}"></div>
						<div class="tiles__line-img" :style="{ backgroundImage: `url(${image12})`}"></div>
					</div>
				</div>
		</section>
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

import insta1Img from "assets/img/insta1.jpg";
import insta2Img from "assets/img/insta2.jpg";
import insta3Img from "assets/img/insta3.jpg";
import insta4Img from "assets/img/insta4.jpg";
import insta5Img from "assets/img/insta5.jpg";
import insta6Img from "assets/img/insta6.jpg";
import insta7Img from "assets/img/insta7.jpg";
import insta8Img from "assets/img/insta8.jpg";
import insta9Img from "assets/img/insta9.jpg";
import insta10Img from "assets/img/insta10.jpg";
import insta11Img from "assets/img/insta11.jpg";
import insta12Img from "assets/img/insta12.jpg";


export default {
  name: "Contact",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismic
  },

  transition: "intro",
  data() {
    return {
      image1: insta1Img,
      image2: insta2Img,
      image3: insta3Img,
      image4: insta4Img,
      image5: insta5Img,
      image6: insta6Img,
      image7: insta7Img,
      image8: insta8Img,
      image9: insta9Img,
      image10: insta10Img,
      image11: insta11Img,
      image12: insta12Img,
    };
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

      // Query to get the home page content
      const result = await $prismic.api.getSingle('contact', lang)

      const menuContent = (await $prismic.api.getSingle('top_menu', lang )).data
      const footerContent = (await $prismic.api.getSingle('footer', lang )).data

      return {
        // Page content, set slices as variable
        slices: result.data.body,

        // Menu
        menuLinks: menuContent.menu_links,
        companyLinks: footerContent.company_links,
		loginLinks: menuContent.login_links,
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
    }
  },
};
</script>

<style lang="scss">
.tiles {
	--tiles-height: 52vw;
	height: var(--tiles-height);
	position: relative;
	overflow: hidden;
	@media (max-width: 768px) {
		--tiles-height: 12vw;
	}
}

.tiles--columns-rotated {
	--tiles-height: 180vmax;
}

.tiles--columns {
	--tiles-height: 140vh;
	@media (max-width: 768px) {
		--tiles-height: 60vh;
	}
}

.tiles--oneline {
	--tiles-height: 50vh;
	min-height: 400px;
	margin: 10vh 0;
}

.tiles--small {
	--tiles-height: 100px;
	margin: 10vh 0 0;
}

.tiles--fixed {
	--tiles-height: 65vw;
	margin-top: 25vh;
}

.tiles--perspective {
	overflow: visible;
	perspective: 1000px;
	--tiles-height: 500px;
}

.tiles__wrap {
	width: 150%;
	--tileswrap-height: var(--tiles-height);
	height: var(--tileswrap-height);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate3d(-50%,-50%, 0);
}

.tiles--rotated .tiles__wrap {
	--tileswrap-height: calc(var(--tiles-height) * 1.8);
	transform: translate3d(-50%,-50%, 0) rotate(22.5deg);
}

.tiles--columns-rotated .tiles__wrap {
	width: 150%;
	display: flex;
	transform: translate3d(-50%,-50%,0) rotate(-22.5deg);
	left: 50%;
	top: 50%;
	align-items: center;
	justify-content: center;
}

.tiles--columns .tiles__wrap {
	width: 100%;
	display: flex;
	--tileswrap-height: calc(var(--tiles-height) * 1.4);
	transform: translate3d(0,-50%,0);
	left: 0;
	top: 50%;
}

.tiles--perspective .tiles__wrap {
	width: 200%;
    transform: translate3d(-50%,-50%,0) translateX(-25%) translateZ(-1200px) rotateX(75.5deg) rotateZ(12deg);
}

.tiles--fixed .tiles__wrap {
	width: 100%;
}

.tiles__line {
	display: flex;
}

.tiles--columns .tiles__line {
	width: 25%;
	padding: 0 1rem;
	display: block;
	@media (max-width: 768px) {
		width:100%;
	}

}

.tiles--columns-rotated .tiles__line {
	width: 320px;
	flex: none;
	padding: 0 1.5vw;
	display: block;
}

.tiles--columns-rotated .tiles__line:nth-child(even) {
	margin-top: -160px;
}

.tiles--oneline .tiles__line {
	height: 100%;
}

.tiles--small .tiles__line {
	height: 100%;
}

.tiles__line-img {
	--tile-margin: 2vw;
	flex: none;
	width: calc(16.6666% - var(--tile-margin) * 2);
	height: calc( var(--tileswrap-height) / 3 - (3 * var(--tile-margin) / 2));
	margin: var(--tile-margin);
	background-size: cover;
	background-position: 50% 50%;
	@media (max-width: 768px) {
		width:100%;
		height:100%;
	}
}

.tiles--perspective .tiles__line-img {
	backface-visibility: hidden;
	outline: 1px solid transparent;
	--tile-margin: 1vw;
	width: calc(16.6666% - var(--tile-margin) * 2);
	height: calc(16.666vw * 1.3);
}

.tiles--oneline .tiles__line-img {
	--tile-margin: 1vw;
	margin: 0 var(--tile-margin);
	width: calc(25% - var(--tile-margin) * 2);
	height: 100%;
}

.tiles--small .tiles__line-img {
	--tile-margin: 5px;
	margin: 0 var(--tile-margin);
	width: calc(12.5% - var(--tile-margin) * 2);
	height: 100%;
}

.tiles--rotated .tiles__line-img {
	--tile-margin: 1vw;
	width: calc(16.6666% - var(--tile-margin) * 2);
	height: calc( var(--tileswrap-height) / 5 - (4 * var(--tile-margin) / 2));
}

.tiles--columns-rotated .tiles__line-img {
	--tile-margin: 3vw 0;
	width: 100%;
	height: 400px;
}

.tiles--columns .tiles__line-img {
	--tile-margin: 2rem 0;
	width: 100%;
	height: calc(25vw * 1.3);
}

.tiles--fixed .tiles__line-img {
	--tile-margin: 10px;
	-webkit-filter: brightness(0.8);
	width: calc(16.6666% - var(--tile-margin) * 2);
	height: calc( var(--tileswrap-height) / 3 - (3 * var(--tile-margin) / 2));
}

.tiles--darker .tiles__line-img {
	opacity: 0.7;
}

.tiles__title {
	position: absolute;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10vw;
	padding: 3rem;
	margin: 0;
	line-height: 0.8;
	font-family: span, serif;
	font-weight: 700;
	font-style: normal;
}

.tiles__title--alt {
	font-size: 9vw;
	font-size: clamp(2rem, 9vw, 7.25rem);
}

.tiles__title--intro {
	padding-top: 10vh;
	align-items: flex-start;
	justify-content: flex-start;
}

.tiles__title--right {
	justify-content: flex-end;
}

.tiles__title--left {
	justify-content: flex-start;
}

.tiles__title--full {
	height: 100%;
}
</style>
