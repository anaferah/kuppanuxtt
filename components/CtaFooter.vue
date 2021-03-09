<template>
  <section class="cta-footer" data-scroll-section>
        <div class="container">
            <h1 data-scroll
            data-scroll-speed="2.5">Get started for free </h1>
            <p data-scroll
            data-scroll-speed="2.5">Raise more online with less effort. Setup and get donations in minutes.</p>
            <nuxt-link to="https://app.kuppa.global">
                Become a Member
          </nuxt-link>
        </div>
    </section>
</template>

<script>

export default {
  props: [],
  name: "cta-footer",
}
</script>

<style lang="scss">
@import './../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/main.scss';

.cta-footer {  
  // height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:#20263d;
  padding:10rem 0;
  .container {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 4vw;
        color:$darkgrey;
        font-weight: 800;
        line-height: 1;
        color:white;
    }
    p {
        font-size:1.4rem;
        margin-bottom:1.5rem;
        color:white;
        opacity:0.9;
    }
    a {
        background:$orange;
        color:white;
        padding:20px 30px 15px 30px;
        border-bottom-left-radius: 54px;
        border-bottom-right-radius: 54px;
        border-top-left-radius: 54px;
        border-top-right-radius: 54px;
        transition: .2s ease-in-out;
        text-transform:uppercase;
        font-weight: 700;
        letter-spacing: 0.5px;
        font-size:1.2rem;
    }
  }  
}
</style>

