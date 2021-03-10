<template>
  <section class="content-copy">
    <div class="container">   
      <prismic-rich-text :field="slice.primary.description" />
    </div>
  </section>
</template>

<script>

export default {
  props: ["slice"],
  name: "content-copy"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/main.scss';

.privacy, .terms {
    .content-copy {
        margin:5vw 0;
    }
}
.terms {
  word-break: break-word;
}

</style>
