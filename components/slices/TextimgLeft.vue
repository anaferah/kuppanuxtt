<template>
  <section class="textimg-left">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <div>
             <img 
                :src="slice.primary.image.url"
                :alt="slice.primary.image.alt"
              />
          </div>
        </div>
        <div class="column is-offset-1">
          <div class="text-content has-text-left">
            <prismic-rich-text :field="slice.primary.heading" />
            <div class="txtr-desc">
              <prismic-rich-text :field="slice.primary.description" />        
            </div>    
            <div>
              <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                  <span><span>{{ $prismic.asText(slice.primary.label) }}</span></span>
              </prismic-link>
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
  name: "textimg-left",   
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';


.textimg-left {
    // min-height:100vh;
    margin:10rem 0;
    .container {
        .columns {
            align-items: center;
            justify-content: center;
            // height:100vh;
            h3 {
                font-size: 3rem;
                font-weight: 900;
                color: $darkgrey;
                line-height: 1.2;
                @media (max-width: 768px) {
                  font-size:2.5rem;
                  text-align: center;
                }
            }
            p {
                margin: 1rem 0 1rem;
            }
            .text-content {
              @media (max-width: 768px) {
                text-align: center !important;
              }
            }
            .txtr-desc {
              margin-bottom:2em;
              width:85%;
              @media (max-width: 768px) {
                width:100%;
              }
              
            }
            .column {
              position: relative;
            }
            .reveal {
              visibility: hidden;
              position: relative;
              width: 100%;
              height: 100%;
              max-width: 100%;
              overflow: hidden;
              display: block;
              img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                transform-origin: left;
                z-index:999999;
              }
            }
        }
    }
}  
.about {
  .textimg-left {
    margin:3rem 0 10rem;
     @media (max-width: 1340px) {
       margin-top:1rem;
     }
  }
}

.dropshipping {
  .textimg-left {
    margin-bottom:4rem;
  }
}

</style>
