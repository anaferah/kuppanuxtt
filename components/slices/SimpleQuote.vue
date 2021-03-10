<template>
  <section class="simple-quote">
    <div class="container">
      <prismic-rich-text :field="slice.primary.author" />
      <div id="text-anim">
        <prismic-rich-text :field="slice.primary.quote" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "simple-quote"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.simple-quote {
  background:$darkgrey;
  min-height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:3rem 0;
  @media (max-width: 768px) {
    margin:3rem 0;    
  }
  .container {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
      padding:2rem;
      margin:3rem 0;  
      align-items: center;
    }
    h3 {
      margin-bottom: 1rem;
      text-align: left;
      font-weight: 800;
      font-size: 1.5rem;
      color: white;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    p {
      color: white;
      text-align: left;
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 1.5;
      @media (max-width: 768px) {
        font-size:1.5rem;
        text-align: center;
      }
    }
  }
}
.about {
  .simple-quote {
    background-image: url(~assets/img/kuppabgp.jpg);
    background-position: bottom center;
    background-size: cover;
    margin-bottom:7rem;
    @media (max-width: 768px) {
        background-position: center center;
      }
    .container {
      h3 {
        color:$darkgrey;
      }
      p {
        color:$darkgrey;
      }
    }
  }
}


</style>
