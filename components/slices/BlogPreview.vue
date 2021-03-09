<template>
  <section class="blog-preview">
        <div class="container">
            <div class="columns">        
                <div class="column" v-for="item in slice.items" :key="item.id">
                    <prismic-link :field="item.link">
                    <figure><prismic-image :field="item.image"/></figure>
                    <prismic-rich-text :field="item.heading"/>                    
                            <prismic-rich-text :field="item.label"/>
                            <!-- {{ $prismic.asText(item.label) }} -->
                    </prismic-link>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "blog-preview"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.blog-preview {
    padding:5rem 0;
    .container {
        .columns {
            h4{
                text-align: center;
                font-size:1.5rem;
                font-weight: 700;
                margin-top:1rem;
                color:$darkgrey;
            }
            .column {
                @media (max-width: 768px) {
                    margin-bottom:2rem;
                }
                figure {
                    background: $gold;
                    img {
                        opacity:1;
                        transition: .3s ease-in-out;
                    }
                }
                &:hover {
                    h4 {
                        color:$darkgreen;
                        transition: 0.5s;
                    }
                    figure {
                        img {
                            opacity: .5;
                        }
                    }
                }
            }
        }
    }
}

</style>