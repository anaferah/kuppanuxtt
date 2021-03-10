<template>
  <section class="faqs-section">
        <div class="container">            
            <prismic-rich-text :field="slice.primary.heading" data-scroll data-scroll-speed="2.5"/>
            <prismic-rich-text :field="slice.primary.description" data-scroll data-scroll-speed="2.5"/>
            <div class="app__content">
                <ul class="accordion-container">       
                    <li v-for="item in slice.items" :key="item.id" class="accordion">
                        <header class="accordion__header">
                        <div>
                            <button>
                            <div class="accordion__title">
                                <prismic-rich-text :field="item.question"/>                                 
                            </div>
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
                        </div>
                        </header>
                        <div class="accordion__content has-text-left">
                            <div class="accordion__inner">
                                <div>
                                    <prismic-rich-text :field="item.answer"/>                                    
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  </section>

</template>
<script>
export default {
  props: ["slice"],
  name: "faqs-section",
  mounted() {
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
  }
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.faqs-section {    
    padding:10rem 0;
    .container {
        min-height:100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        p {
            font-size:1.1rem;
            @media (max-width: 768px) {
                font-size:1rem;
            }
        }
        .accordion-container {
            margin-top:3rem;
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
                font-size: 1.5rem;
                font-weight: 400;
                h4 {
                    font-size: 1.4rem;
                    font-weight: 700;
                    @media (max-width: 768px) {
                        font-size:1.2rem;
                    }
                }
                p {
                    font-size: 1.5rem;
                    font-weight: 700;
                }
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
                        font-size: 1.1rem;
                        line-height: 1.5;
                        margin-bottom: 1em;
                        color:$darkgrey;
                        @media (max-width: 768px) {
                            font-size:1rem;
                        }
                    }
                }
            }
        }
        h2 {
            font-size: 3vw;
            font-weight: 900;
            color: $darkgrey;
            @media (max-width: 768px) {
                font-size:2.5rem;
            }   
        }
    }
}

</style>