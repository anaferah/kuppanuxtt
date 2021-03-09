<template>
  <section class="smallpricing" data-scroll data-scroll-speed="1">
        <div class="container">            
            <div class="columns">      
                <div class="column is-3 dropshippingplanstitle has-text-left">
                    <prismic-rich-text :field="slice.primary.heading"/>
                    <prismic-link :field="slice.primary.link">
                        {{ $prismic.asText(slice.primary.label) }}
                    </prismic-link>
                </div>  
                <div class="column is-3 dropshippingplans">
                    <prismic-link :field="slice.primary.cta">
                        {{ $prismic.asText(slice.primary.cta_label) }}
                    </prismic-link>
                    <prismic-rich-text :field="slice.primary.free_heading"/>
                    <prismic-rich-text :field="slice.primary.free_description"/>
                </div>
                <div class="column dropshippingplans is-flex is-flex-direction-row">
                    <div class="smallpricing-content" v-for="item in slice.items" :key="item.id">                       
                        <prismic-rich-text :field="item.price"/>
                        <prismic-rich-text :field="item.month"/>
                        <prismic-rich-text :field="item.heading"/>
                        <prismic-rich-text :field="item.description"/>
                    </div>
                </div>                
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "small-pricing"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.smallpricing {
    background:$darkgreen;
    color:white;
    .container {
        display: flex;
        min-height: 50vh;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
            padding: 5rem 2rem;
        }
        .columns {
            align-items: center;
            .dropshippingplanstitle {
                @media (max-width: 768px) {
                    text-align: center !important;
                }
                h2 {
                    font-size: 3rem;
                    color: white;
                    font-weight: 800;
                    margin: 0;
                }
                a {
                    text-decoration: underline;
                    color:white;
                    opacity:0.8;
                    //  &:hover {
                    //     color:$darkgrey;
                    //     opacity: 1;
                    // }
                }
            }
            .dropshippingplans {
                text-align: center;                   
                display: flex;                
                flex-direction: column;               
                align-items: center;                
                justify-content: flex-end;
                padding: 2rem;
                @media (max-width: 768px) {
                    flex-direction: column !important;
                }
                h4 {
                    font-weight: 800;
                    color: white;
                    font-size: 2rem;
                    margin-bottom: 0;
                    margin-top: 1.5rem;
                }
                p {
                    font-size:1rem;
                }
                a {
                    color: white;
                    letter-spacing: 0.2px;
                    font-size: 1rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    background: $orange;
                    border-radius: 20px;
                    padding: 10px 20px 8px 20px;
                    border: 2px solid $orange;
                    transition: 0.7s;    
                    text-decoration: none;               
                }
            }
            .smallpricing-content {
                padding: 2rem;
                div {
                    p {
                        font-size:1rem;                        
                    }
                    &:first-of-type {
                        p {
                        font-weight: 700;
                        font-size: 1.9rem;
                        color: white;
                        line-height: 1;
                        }
                    }
                    &:nth-of-type(2) {
                        p{
                            color: $lightergrey;
                            font-size: 1.2rem;
                            font-weight: 400;
                            margin-bottom: 1rem;
                            line-height: 1;
                        }
                    }
                    h4 {
                        margin-top:1rem;
                    }
                }
            }
        }
    }
}

.dropshipping {
    .smallpricing {
        @media (max-width: 768px) {
            margin-top:3rem
        }
    }
}

</style>