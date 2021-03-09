<template>
  <section class="textimg-right">
    <div class="container is-fluid">
      <div class="columns">        
        <div class="column">
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
        <div class="column">
          <div>
            <img 
                :src="slice.primary.image.url"
                :alt="slice.primary.image.alt"
              />
          </div>
          <div>
              <prismic-embed :field="slice.primary.video" class="image is-16by9"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "textimg-right"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.textimg-right {
    // min-height:100vh;
    // padding:10rem 0;
    @media (max-width: 768px) {
      margin: 5rem auto;
    }
    .container {
        .columns {
            align-items: center;
            justify-content: center;
            min-height:100vh;
            .revealr, .reveal {
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
                  text-align:center !important
              }              
            }
            .txtr-desc {
              margin-bottom:2rem;
              max-width:80%;
              @media (max-width: 768px) {
                max-width: 100%;
                text-align: center;
              }
            }
            a {
                // color: white;
                // letter-spacing: 0.2px;
                // font-size: 1rem;
                // text-transform: uppercase;
                // font-weight: 700;
                // background: $darkgreen;
                // border-bottom-left-radius: 54px;
                // border-bottom-right-radius: 54px;
                // border-top-left-radius: 54px;
                // border-top-right-radius: 54px;
                // padding: 10px 15px 8px 15px;
                // border: 2px solid $darkgreen;
                // transition: 0.7s;
                // &:hover {
                //     border: 2px solid $darkblue;
                //     background:transparent;
                //     color:$darkblue;
                // }
            }
            .videof {
              position: relative;
              width: 100%;
              height: 0;
              padding-bottom: 56.25%;
              .video {
                 position: absolute;
                  top: 0;
                  left: 0;
                  width: 100% !important;
                  height: auto;
                  min-height: 400px;
                  overflow: hidden;
              }
            }
        }

    }
}  

.homepage {
  .textimg-right {
    .container {
      .columns {
        .txtr-desc {
          max-width: 80%;
          @media (max-width: 768px) {
            max-width: 100%;
          } 
        }
      }
    }
  }
}
  
</style>
