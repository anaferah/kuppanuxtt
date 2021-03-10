<template>
  <section class="product-listings">
        <div class="container">            
            <prismic-rich-text :field="slice.primary.heading"/>
            <div class="desc">
                <prismic-rich-text :field="slice.primary.description"/>
            </div>
            <div class="columns">        
                <div class="column is-2 is-6-mobile" v-for="item in slice.items" :key="item.id">
                    <prismic-link :field="item.link">
                        <prismic-image :field="item.image"/>
                        <h4>{{ $prismic.asText(item.label) }}      </h4>    
                    </prismic-link>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "product-listings"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.product-listings {    
    .container {
        min-height:100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        @media (max-width: 768px) {
            padding:0 2rem;
        }
        p {
            font-size:1rem;
        }
        .desc {
            p {
                font-size:1.1rem;
            }
        }
        h4 {
            font-size:3vw;
            color:$darkgrey;
            font-weight: 900;
            margin-bottom:2rem;
            @media (max-width: 768px) {
                font-size:2.5rem;
                line-height: 1.2;
            }
        }
        .columns {
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom:3rem;
            flex-wrap: wrap;
            @media (max-width: 768px) {
                display: flex;
            }
            .column {
                // min-width: 16.66%;
                // flex: 1;
                margin-top:5rem;
                img {
                    height:50px;
                }
                h4 {
                    font-weight:800;
                    font-size:1rem;
                    color:$darkgrey;
                    text-align: center;
                }                
                a {
                    text-decoration:none;
                }
            }
        }
    }
}
.products {
    .product-listings {
        background:$cream;
        padding:5rem 0;
    }
}
</style>