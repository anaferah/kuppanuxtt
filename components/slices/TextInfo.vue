<template>
  <section class="text-info">
    <div class="container">
      <div class="columns">
        <div class="left-column column">
          <h2><prismic-rich-text :field="slice.primary.section_title" /></h2>
          <prismic-rich-text :field="slice.primary.left_column_text" />
        </div>
        <div class="right-column column">
          <prismic-rich-text :field="slice.primary.right_column_text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "text-info"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

  .text-info {
    padding:5rem 0;
    background: $cream;
    .container {
      .columns {
        align-items:center;
        h2 {
          font-size:3vw;
          font-weight: 900;
          color:$darkgrey;
          @media (max-width: 768px) {
            font-size:2.5rem;
            text-align: center;
          }
        }
        p {
          @media (max-width: 768px) {
            text-align: center;
          }
        }
      }
    }
  }
</style>
