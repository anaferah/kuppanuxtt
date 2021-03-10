<template>
  <section data-scroll data-scroll-speed="1" class="headline-hero" data-scroll-section>
    <div class="container">
        <prismic-rich-text :field="slice.primary.headline" data-scroll
            data-scroll-speed="2.5"/>
        <prismic-rich-text :field="slice.primary.description" data-scroll
            data-scroll-speed="1"/>
        <div class="arrowScroll">
          <span></span>
        </div>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	          viewBox="0 0 490.656 490.656" style="enable-background:new 0 0 490.656 490.656;" xml:space="preserve">
            <g>
              <g>
                <path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,347.581L18.203,120.467c-4.16-4.16-10.923-4.16-15.083,0
                  c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136l234.667-234.667
                  C491.696,131.368,491.696,124.605,487.536,120.445z"/>
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>

      </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "headline-hero"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.headline-hero {
  background:#fafafa;
  height:100vh;
  text-align: center;
  .container {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;    
  }
  h1 {
    padding: 10px 5px 0px;
    font-size: 4vw;
    color:$darkgrey;
    font-weight: 900;
    line-height: 1.1;
    @media (max-width: 768px) {
      font-size:2.5rem;
      line-height:1.1em;
      margin-bottom:0.5rem;
    }
  }
  p {
    font-size:1.2rem;
    @media (max-width: 768px) {
      font-size:1rem;
    }
  }
  svg {
    fill:$darkgrey;
    width:30px;
    height:30px;
    position:absolute;
    left:50%;
    bottom:40px;
    transform: translate(-50%);
  }
}
.arrowScroll {
  height: 40px;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%);
  z-index: 40;
  width: 2px;
  overflow: hidden;
  transition: bottom .6s cubic-bezier(.8,.1,.2,1);
  background:$gold;
  span {
    height: 100%;
    width: 2px;
    background: $darkgrey;
    display: block;
    animation-name: swipeDown;
    animation-duration: 2s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
// .privacy, .terms, .contact {
//   .headline-hero {
//     h1 {
//       font-weight:700;
//       // background: #fff7c7;
//     }
//   }
// }
.contact {
  .headline-hero {
    background-image: url(~assets/img/kuppa2.jpg);
    background-position: bottom center;
    background-size: cover;
    // background:white;
  }
}
.products {
  .headline-hero {
    //  background:url('../../images/bg1.mp4');
    background-image: url(~assets/img/kuppa5.jpg);
    background-position: center center;
    background-size: cover;
    // text-align:left;
    h1 {
      // color:$gold;
    }
    
  }
}
.dropshipping {
  .headline-hero {
    text-align: center;
    // background:$cream;
    background: url('~assets/img/kuppabg.jpg');
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
}
.pricing {
  .headline-hero {
    // background: url('~assets/img/kuppabgp.jpg');
    // background-size:cover;
    // background-repeat: no-repeat;
    // background-position: bottom right;
    background:#fff;
  }
}

@keyframes swipeDown {
    0% {
        transform: translateY(-100%);
    }
    20% {
        transform: translateY(0);
    }
    80% {
        transform: translateY(0);
    }
    to {
        transform: translateY(100%);
    }
}


</style>
