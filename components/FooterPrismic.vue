<template>
  <footer class="footer" id="footer">
    <div class="ctafooter">
        <div class="container" v-for="footerCta in footerCtas" :key="footerCta.id">
              <prismic-rich-text :field="footerCta.ctaheadline"/>
              <prismic-rich-text :field="footerCta.ctadescription"/>
              <prismic-link :field="footerCta.ctalink">{{ $prismic.asText(footerCta.ctalabel) }}</prismic-link>
        </div>
    </div>
    <div class="container footerlinks">
      <div class="columns has-text-left">
        <div class="column is-6-mobile">
          <h3>{{ $prismic.asText(headline) }}</h3>
          <ul>
            <li v-for="companyLink in companyLinks" :key="companyLink.id">
              <prismic-link :field="companyLink.link">{{ $prismic.asText(companyLink.label) }}</prismic-link>
            </li>
          </ul>
        </div>

        <div class="column is-6-mobile">
          <h3>{{ $prismic.asText(headline2) }}</h3>
          <ul>
            <li v-for="resourceLink in resourceLinks" :key="resourceLink.id">
              <prismic-link :field="resourceLink.link">{{ $prismic.asText(resourceLink.label) }}</prismic-link>
            </li>
          </ul>        
        </div>

        <div class="column is-6-mobile">
          <h3>{{ $prismic.asText(headline3) }}</h3>
          <ul>
            <li v-for="usefulLink in usefulLinks" :key="usefulLink.id">
              <prismic-link :field="usefulLink.link">{{ $prismic.asText(usefulLink.label) }}</prismic-link>
            </li>
          </ul>
        </div>

        <div class="column logo-content is-6-mobile">
          <nuxt-link to="./" class="logo">
            <img src="./../images/kuppalogo-white.png" alt="Kuppa Dropshipping" />
          </nuxt-link>
          <p>{{ $prismic.asText(description) }}</p>
          <ul class="is-flex footer-social-media">
            <li v-for="socialLink in socialLinks" :key="socialLink.id">
              <prismic-link :field="socialLink.link">
                  <prismic-image :field="socialLink.image"/>
              </prismic-link>
            </li>
          </ul>
        </div>

      </div>
      <div class="columns copyright">
        <p>{{ $prismic.asText(copyright) }} </p>
        <p><a href="https://lily.agency" target="blank">{{ $prismic.asText(designer) }} </a></p>
        <p>{{ $prismic.asText(rotxt) }} </p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  props: ["companyLinks", "headline", "resourceLinks", "headline2", "headline3", "usefulLinks", 
  "description", "socialLinks", "copyright", "footerCtas", "designer", "rotxt"],
  name: "footer-prismic" 

}
</script>

<style lang="scss">
@import './../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/main.scss';
html { height: 100%; overflow:auto; }
body { height: 100%; }
#footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: $darkblue;
  color: #cccbcb;
  padding: 0 0 2rem;
  letter-spacing: 0.2px;
  font-weight: 200;
  clear: both;
  overflow: hidden;
  min-height:100vh;
  .footerlinks {
    padding:3rem 0;
    .columns {
      @media (max-width: 768px) {
        flex-wrap: wrap;
        padding:0 2rem;
        display:flex;
      }
    }    
  }
  .ctafooter {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#20263d;
    padding:10rem 0;
    width:100%;
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
          text-align: center;
          @media (max-width: 768px) {
            font-size: 2.5rem;
            margin-bottom:1rem;
            line-height: 1.1;
          }
      }
      p {
          font-size:1.4rem;
          margin-bottom:1.5rem;
          color:white;
          opacity:0.9;
          text-align: center;
      }
      a {
          background:$orange;
          color:white;
          padding:20px 30px;
          border-bottom-left-radius: 54px;
          border-bottom-right-radius: 54px;
          border-top-left-radius: 54px;
          border-top-right-radius: 54px;
          transition: .2s ease-in-out;
          text-transform:uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-size:1.2rem;
          text-decoration: none;
          // @media (max-width: 768px) {
          //   padding-bottom: 15px;
          // }
      }
    }  
  }
  .container {
    .columns {
      h3 {
        margin-bottom: 0.5rem;
        color: #e8e8e8;
        font-size: 1.3rem;
        font-weight: 700;        
      }
      a {
        color:#cccbcb;
        text-decoration: none;
        font-weight:600;
        opacity:0.8;
        &:hover {
          color:$darkgreen;
          opacity:1;
        }
      }
      ul {
        list-style:none;
        padding-left:0;
        margin:0;
        li {
          margin-bottom: 1rem;
        }
      }
      .logo-content {
        .logo {
          opacity:1;
          img {
            max-height: 35px;
            margin-bottom:1rem;
          }          
        }
        p {
          font-size:1rem;
          font-weight:600;
          margin-bottom: 1.5rem;
        }
      }
      .footer-social-media {    
        margin:0;    
        li {
          display: inline-block;
          padding: 0 20px 0 0;
          img {
            height:30px;
          }
        }
      }      
    }
    .copyright {
      margin-top:3rem;
      p {
        font-size: 0.9rem;
        font-weight: 600;
        margin-right:7px;
        @media (max-width: 768px) {
          margin-bottom:0.5rem;
        }
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
