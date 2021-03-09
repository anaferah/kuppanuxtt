<template>
  <section class="info-with-image">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <div class="reveal" data-scroll-trigger>
            <img class="revealimg"
                :src="slice.primary.featured_image.url"
                :alt="slice.primary.featured_image.alt"
              />
          </div>
        </div>
        <div class="column">
          <div class="text-content has-text-left">
            <prismic-rich-text :field="slice.primary.section_title" />
            <prismic-rich-text :field="slice.primary.text" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "info-with-image"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.info-with-image {
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    .columns {
      height:100vh;
      align-items:center;
      justify-content: center;    
      .text-content {
        h1 {
          color:$darkgrey;
          &::first-letter {
            color:$darkgreen;
          }
        }
        p {
          margin-bottom:0.5rem;
        }
      }      
    }
  }
}
  
</style>
