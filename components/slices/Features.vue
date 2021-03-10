<template>
  <section class="features">
        <div class="container">
            <prismic-rich-text :field="slice.primary.heading"/>
            <div class="columns">        
                <div class="column">
                    <div class="features-content" v-for="item in slice.items" :key="item.id">
                        <div class="has-text-left">
                            <prismic-image :field="item.image"/>
                        </div>
                        <div class="dropshippingcontent has-text-left">
                            <prismic-rich-text :field="item.heading"/>
                            <prismic-rich-text :field="item.description"/>
                        </div>
                    </div>
                </div>
                <div class="column">                    
                    <prismic-image :field="slice.primary.image" />
                </div>
                <div class="column">
                    <div class="features-content" v-for="item in slice.items" :key="item.id" data-scroll
            data-scroll-speed="2.5">
                        <div class="has-text-left">
                            <prismic-image :field="item.second_image"/>
                        </div>
                        <div class="dropshippingcontent has-text-left">
                            <prismic-rich-text :field="item.second_heading"/>
                            <prismic-rich-text :field="item.second_description"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "features"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.features {
    .container {
        display:flex;
        align-items:center;
        min-height:100vh;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 768px) {
            margin:5rem auto;
        }
        h1 {
            color:$darkgrey;
            margin-bottom:2rem;
            font-size:3vw;
            font-weight: 900;
            color:$darkgreen;
            @media (max-width: 768px) {
                font-size:2rem;
            }
            strong {
                font-weight:900;
                color:$orange;
            }
        }
        .columns {
            align-items: center;
            display: grid;
            grid-gap: 4rem;
            grid-template-columns: 1fr 1fr 1fr;
            @media (max-width: 768px) {
                display: flex;
                flex-direction: column;
            }
            .column {
                .features-content {
                    justify-content: space-between;
                    display: flex;
                    margin-bottom: 4rem;
                    align-items: center;
                    img {
                        height: 40px;
                        opacity: 0.6;
                    }
                    .dropshippingcontent  {
                        width: 85%;
                        h4 {
                            font-weight: 800;
                            color: #000;
                            font-size: 1.2rem;
                            margin-bottom: 0.2rem;
                            line-height: 1;
                        }
                    }
                }
            }
        }
    }
}

</style>