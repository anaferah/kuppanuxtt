<template>
  <section class='image-gallery content-section'>
        <div class="container">
            <div class="columns">        
                <prismic-rich-text :field="slice.primary.heading"/>
                <div class="gallery">
                    <div v-for="item in slice.items" :key="item.id" class="gallery-item">
                        <prismic-link :field="item.link" class="gallery-link">
                            <prismic-image :field="item.image"/>
                        </prismic-link>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "image-gallery"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.image-gallery {
    min-height:100vh;
    .container {        
        .columns {
            align-items: center;
            justify-content: center;
            min-height:100vh;
            flex-direction: column;
        }
        h1 {
            color:$darkgrey;
            text-align: center;
            margin-bottom: 2rem;
            font-size:3vw;
            font-weight:900;
            &:after {
                content: " Instagram";
                color:$orange;
            }
        }
    }
    .gallery {
        display:flex;
        align-items: center;
        justify-content: space-around;
        .gallery-item {
            padding:1rem;
        }

    }
}

</style>