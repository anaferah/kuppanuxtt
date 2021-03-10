<template>
    <section class="video-hero">
        <div class="showcase">
        <div class="video-container">
            <video src="~assets/img/bg91.mp4" autoplay muted loop></video>
        </div>
        <div class="content">
            <prismic-rich-text :field="slice.primary.headline" />
            <prismic-rich-text :field="slice.primary.description" />  
        </div>
        </div>
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

    </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "video-hero"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';
.video-hero {
.showcase {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $darkgrey;
  padding: 0 20px;
    .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  
    video {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
    &:after {
        content: '';
        z-index: 1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(191, 147, 105, 0);
        position: absolute;
    }
}
.content {
  z-index: 2;
  width:70%;
  margin:0 auto;
  p {
      font-size:1.5rem;
      @media (max-width: 768px) {
        font-size:1rem;
      }
  }
  h1 {
      font-size:4vw;
      font-weight:900;
      margin-bottom:0;
      // color:white;
      &::first-letter {
          color:$darkgreen;
      }
      @media (max-width: 768px) {
        font-size:2.5rem;
      }
  }
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
    background: #ddd;
    display: block;
    animation-name: swipeDown;
    animation-duration: 2s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
 svg {
    fill:white;
    width:30px;
    height:30px;
    position:absolute;
    left:50%;
    bottom:40px;
    transform: translate(-50%);
    color:white;
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