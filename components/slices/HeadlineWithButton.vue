<template>
  <section class="headline-with-button">
    <div class="container">
      <div class="columns">
         <div class="column is-8">
          <prismic-rich-text :field="slice.primary.headline" />
          <prismic-rich-text :field="slice.primary.description" />
        </div>
        <div class="column button">
          <prismic-image :field="slice.primary.button" />
        </div>
      </div>
    </div>   
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "headline-with-button"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/main.scss';

.headline-with-button {
  padding:0 8%;
  .container {
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:100vh;
    .columns {
      display:flex;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      font-weight: 800;
      font-size: 5.5vw;
      line-height: 1.1; 
      color:$darkblue;
      &::first-letter {
        color:$darkgreen;
      }
    }
    p {
      font-size: 1.2rem;
      line-height: 40px;
      font-weight: 500;
      margin-bottom: 1rem;
      // max-width: 80%;
    }
    .button {
      // display: flex;
      // align-self: flex-end;
      // justify-content: flex-end;
      background:transparent;
      border:none;
    }
  }
  
  
}

</style>
