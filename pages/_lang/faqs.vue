<template>
 <div class="faqs">
    <!-- Vue tag to add header component -->
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs" :loginLinks="loginLinks"/>

    <!-- <slices-block :slices="slices" /> -->
    <section class="pricing-columns pricing-section container" data-scroll-section>
        <label class="toggler toggler--is-active" id="filt-monthly">
          <h3>
            {{ $prismic.asText( faqsContent.seller) }}
          </h3>
        </label>
        <div class="toggle">
            <input type="checkbox" id="switcher" class="check">
            <b class="b switch"></b>
        </div>
        <label class="toggler" id="filt-hourly">
          <h3>           
            {{ $prismic.asText( faqsContent.supplier) }}

          </h3>
        </label>        
        <div id="monthly" class="wrapper-full">
          <div id="pricing-chart-wrap">
            <div id="pricing-chart">
              <div class="container pricingfaq">
                <div class="columns">
                  <div class="column">                          
                    <div class="app__content">
                      <ul class="accordion-container">       
                        <li v-for="faqLink in faqLinks" :key="faqLink.id" class="accordion">
                          <header class="accordion__header">
                            <p>
                              <button>
                                <span class="accordion__title">
                                  {{ $prismic.asText(faqLink.headline) }}                                  
                                </span>
                                <div class="accordion__icon">
                                    <svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                      <g fill="none" fill-rule="evenodd">
                                          <circle cx="20" cy="20" r="20" fill="transparent" opacity=".497" />
                                          <path d="M8 8h24v24H8z" />
                                          <path stroke="#1d1d1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13v14m-7-7h14" />
                                      </g>
                                    </svg>
                                    <svg class="icon__minus" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                      <g fill="none" fill-rule="evenodd">
                                          <circle cx="20" cy="20" r="20" fill="transparent" opacity=".497" />
                                          <path stroke="#1d1d1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.929" d="M11 19.5h18" />
                                      </g>
                                    </svg>
                                </div>
                              </button>
                            </p>
                          </header>
                          <div class="accordion__content has-text-left">
                            <div class="accordion__inner">
                                <p>
                                  <!-- {{ $prismic.asText(faqLink.question) }} -->
                                  <prismic-rich-text :field="faqLink.question" />
                                  
                                </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="hourly" class="wrapper-full hide">
            <div id="pricing-chart-wrap">
                <div id="pricing-chart">
                    <div class="container pricingfaq">
                        <div class="columns">
                            <div class="column">                            
                                <div class="app__content">
                                  <div class="accordion-container2">       
                                    <div v-for="supplierLink in supplierLinks" :key="supplierLink.id" class="accordion">
                                      <header class="accordion__header">
                                        <p>
                                          <button>
                                            <span class="accordion__title">
                                              {{ $prismic.asText(supplierLink.headline) }}                                  
                                            </span>
                                            <div class="accordion__icon">
                                                <svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                                  <g fill="none" fill-rule="evenodd">
                                                      <circle cx="20" cy="20" r="20" fill="transparent" opacity=".497" />
                                                      <path d="M8 8h24v24H8z" />
                                                      <path stroke="#1d1d1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13v14m-7-7h14" />
                                                  </g>
                                                </svg>
                                                <svg class="icon__minus" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                                  <g fill="none" fill-rule="evenodd">
                                                      <circle cx="20" cy="20" r="20" fill="transparent" opacity=".497" />
                                                      <path stroke="#1d1d1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.929" d="M11 19.5h18" />
                                                  </g>
                                                </svg>
                                            </div>
                                          </button>
                                        </p>
                                      </header>
                                      <div class="accordion__content has-text-left">
                                        <div class="accordion__inner">
                                            <p>
                                              <!-- {{ $prismic.asText(supplierLink.question) }} -->
                                              <prismic-rich-text :field="supplierLink.question" />
                                              
                                            </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default {
  name: "Faqs",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismic
  },
  transition: "intro",
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
      const result = await $prismic.api.getSingle('faqs', lang)

      const menuContent = (await $prismic.api.getSingle('top_menu', lang )).data
      const faqsContent = (await $prismic.api.getSingle('faqs', lang )).data
      const footerContent = (await $prismic.api.getSingle('footer', lang )).data
      // const scroll = new LocomotiveScroll();

      return {
        // Page content, set slices as variable
        slices: result.data.body,
        faqsContent,
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
        altLangs: result.alternate_languages,
        seller: faqsContent.seller,
        supplier: faqsContent.supplier,
        faqLinks: faqsContent.faq_links,
        supplierLinks: faqsContent.supplier_links
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  mounted() {
    // document.addEventListener('DOMContentLoaded', () => {

    var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-hourly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("hourly");
    
    
    e.addEventListener("click", function(){
      t.checked = false;
      e.classList.add("toggler--is-active");
      d.classList.remove("toggler--is-active");
      m.classList.remove("hide");
      y.classList.add("hide");
    });
    
    d.addEventListener("click", function(){
      t.checked = true;
      d.classList.add("toggler--is-active");
      e.classList.remove("toggler--is-active");
      m.classList.add("hide");
      y.classList.remove("hide");
    });
    
    t.addEventListener("click", function(){
      d.classList.toggle("toggler--is-active");
      e.classList.toggle("toggler--is-active");
      m.classList.toggle("hide");
      y.classList.toggle("hide");
    });
    
    // });
    const accordionContainer = document.querySelector(".accordion-container");
      accordionContainer.addEventListener("click", (e) => {
      const accordionHeader = e.target.closest(".accordion__header");

      if (accordionHeader) {
          const accordion = accordionHeader.parentElement;
          const accordionContent = accordionHeader.nextElementSibling;
          const accordionInner = accordionContent.children[0];

          let height;

          if (accordion.classList.contains("is-open")) {
            height = 0;
          } else {
            height = accordionInner.getBoundingClientRect().height;
          }

          accordion.classList.toggle("is-open");
          accordionContent.style.height = `${height}px`;
      }
      });
      const accordionContainer2 = document.querySelector(".accordion-container2");

      // select accordion header
      accordionContainer2.addEventListener("click", (e) => {
      const accordionHeader = e.target.closest(".accordion__header");

      if (accordionHeader) {
          const accordion = accordionHeader.parentElement;
          const accordionContent = accordionHeader.nextElementSibling;
          const accordionInner = accordionContent.children[0];

          let height;

          if (accordion.classList.contains("is-open")) {
            height = 0;
          } else {
            height = accordionInner.getBoundingClientRect().height;
          }

          accordion.classList.toggle("is-open");
          accordionContent.style.height = `${height}px`;
      }
      });
  },
};
</script>

<style lang="scss">
.faqs {
  // min-height:100vh;
  .pricing-columns {
    text-align: center;
    padding:10rem 0;
    h3 {
      font-size:1.5rem;
      font-weight:700;
    }
    .wrapper-full {
      margin-top:2.5rem;
    }
  }
  .accordion {
    margin-bottom: 0.5em;
    border-radius: 3px;
    width: 100%;
    border: 1px solid #e6e6e6;
    cursor: pointer;
    &.is-open {
      border-radius: 3px;
      .accordion__content {
        // padding-bottom:4rem;
      }
      .accordion__header {
        // padding:1rem 0;
        button {
          .accordion__icon {
            .icon__minus {
              display: block;
            }
            .icon__plus {
              display: none;
            }
          }
        }
      }      
    }
    .accordion__header {
      padding:0;
      cursor:pointer;
      button {
        cursor:pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border: 0;
        background-color: #fff;
        padding: 2em;
        text-align: left;
        outline: none;
        .accordion__title {
          font-size: 1.4rem;
          font-weight: 600;
        }
        .accordion__icon {
          cursor: pointer;
          .icon__plus {
            display: block;
          }
          .icon__minus {
            display: none;
          }
        }
        .accordions__icon > * {
          width: 4rem;
        }
      }
    }
    .accordion__content {
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease-out;
      .accordion__inner {
        width: 100%;
        padding: 1em 1.5em;
        p {
          font-size: 1.2rem;
          line-height: 1.4;
          margin-bottom: 1em;
          // opacity: 1;
        }
      }
    }
  }

 
.toggle,
.toggler {
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}
.toggler {
  transition: 0.2s;
  font-weight: bold;
}
.toggler--is-active {
  color: #9d1726;
}
.b {
  display: block;
}
.toggle {
  position: relative;
  width: 80px;
  height: 35px;
  border-radius: 100px;
  background-color: #9d1726;
  overflow: hidden;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.05);
}
.check {
  position: absolute;
  display: block;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 6;
}
.check:checked ~ .switch {
  right: 2px;
  left: 57.5%;
  transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition-property: left, right;
  transition-delay: 0.08s, 0s;
}
.switch {
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 57.5%;
  background-color: #fff;
  border-radius: 36px;
  z-index: 1;
  transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition-property: left, right;
  transition-delay: 0s, 0.08s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.hide {
  display: none;
}
}
  
</style>