<template>
  <header class="site-header">
    <div class="container">
      <div class="columns is-align-items-center">
        <div class="column is-2 has-text-left">
          <nuxt-link to="./" class="logo">
            <img src="./../images/logo-kuppa.png" alt="Kuppa Dropshipping" />
          </nuxt-link>
        </div>
        <div class="column is-offset-2 navigation">
          <div class="nav-cta">
            <button role="button" class="navbars-burger" aria-label="menu" aria-expanded="false" v-bind:class="[isActive ? 'is-active' : '']" @click="toggleClass()">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>  
            </button>        
          </div>
          
          <nav class="navbar-menus" id="navMenu" v-bind:class="[isActive ? 'open' : '']" @click="isActive = !isActive">
            <h2 class="is-hidden-desktop">Menu Kuppa</h2>
            <ul>
              <li v-for="menuLink in menuLinks" :key="menuLink.id">
                <prismic-link :field="menuLink.link">{{ $prismic.asText(menuLink.label) }}</prismic-link>
              </li>        
            </ul>
            <ul class="loginregister">
             <li v-for="loginLink in loginLinks" :key="loginLink.id">
              <prismic-link :field="loginLink.link" class="lga">
                <span><span>
                  {{ $prismic.asText(loginLink.label) }}
                </span></span>              
              </prismic-link>
            </li>     
            <li v-for="altLang in altLangs" :key="altLang.id">
              <nuxt-link :to="$prismic.linkResolver(altLang)">
                <span :class="'flag-icon flag-icon-' + altLang.lang.slice(-2)"></span>
              </nuxt-link>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  props: ["altLangs", "menuLinks", "loginLinks"],
  name: "header-prismic",
  head: {
    // script: [
    //   {
    //     src: "@/assets/js/custom.js",
    //   },
    // ],
  },
  data () {
    return {
      isActive: false,
      active:false,
    }
  },
   methods: {
    toggleClass: function(event){
       this.isActive = !this.isActive;
    },
     toggleClassCta: function(event){
       this.active = !this.active;
    },
  },
};
</script>

<style lang="scss">
@import './../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/main.scss';

.site-header  {
  position: absolute;
  width:100%;
  padding:15px 8%;
  display:flex;
  z-index: 99;
  .container {
    @media (max-width: 1340px) { 
      padding:0
    }
  }
  .columns {
     @media (max-width: 1340px) { 
       display:flex;
       align-items: center;
       justify-content: space-between;
     }
  }
  .navigation,  .loginregister{
    ul {
      li {
        a {
          color: $darkgrey;
          -webkit-transition: 0.5s;
          transition: 0.5s;
          font-weight: 700;
          text-decoration: none;
          font-size:1.2rem;          
          &:hover {
            color:$darkgreen;
          }
          &.buttons {
            font-size:1.2rem;
            padding: 10px 1.5rem;
            font-weight: 800;
            letter-spacing: 0.2px;
            // margin-bottom:-15px;
            line-height: 1;
            &.button--hyperion {
              color:white;
            }
          }
        }
      }
    }
  }
  .loginregister {
      display:flex;
      align-items: center;
      justify-content: flex-end;
      @media (max-width: 1340px) {
        display:block;
        margin-bottom:2rem;
        margin-top:2rem;
      }
      li {  
        &:first-child {
            .lga {
              cursor: pointer;
              background: transparent;                
              margin: 0 !important;
              position: relative;
              display: inline-block;
              color: white;
              letter-spacing: 0.4px;
              font-size: 1rem;
              text-transform: uppercase;
              font-weight: 700;
              padding:0.7rem 1.5rem;
              overflow: hidden;
              border:1px solid $darkgrey;
              border-radius:3rem;
              color:$darkgrey;      
              line-height: 1;   
              font-family: "Segoe UI";
               @media (max-width: 1340px) {
                 width:100%;
                 text-align: center;
               }
            }
          &:hover {
            .lga {
              color:$darkgrey;
            }
          }
        }  
        &:nth-child(2) {
          .lga {
            cursor: pointer;
            background: transparent;                
            margin: 0;
            position: relative;
            display: inline-block;
            color: white;
            letter-spacing: 0.4px;
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 800;
            padding: 0.7rem 1.5rem;
            overflow: hidden;
            border:1px solid $darkgreen;
            border-radius:3rem;
            color:white;
            font-family: "Segoe UI";
            line-height: 1; 
            &:before, &:after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            span {
              // display: block;
              position: relative;
              font-family: 'Muli', sans-serif;
            }
            & > span {
              overflow: hidden;
            }
            &:before {
              content: '';
              background: $darkgreen;
              transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
              transform-origin: 100% 50%;  
            }
            &:hover {
              span {
                color:$darkgreen;
              }
            }
            &:hover:before {
              transform: scale3d(0,1,1);
              transform-origin: 0% 50%;                 
            }
          }          
        }         
      }
    }
  }
  .logo {
    img {
      height:30px;
    }
  }
  
.logins {
  margin-top: 3rem;
  
  a {
    &.login {
      border: 2px solid $darkgrey;
      padding: 10px 20px;
      border-radius: 20px;
      color: $darkgrey;
      font-weight: 700;
      font-size: 1.1rem;
      margin-right: 3rem;
    }
    &.register {
      background: $darkgreen;
      border: 2px solid $darkgreen;
      padding: 10px 25px;
      border-radius: 20px;
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
}

.navbars-burger {
  @media (max-width: 1340px) {     
    display:block;
    background:transparent;
    border:0;
    outline:none;
    height:auto;
  }
  span {
    @media (max-width: 1340px) {     
      color:$darkgrey;
      height:2px;
      width:40px;
      right:5px;
      background-color: $darkgrey;
      display: block;
      position: absolute;
      transform-origin: center;
      transition-duration: 86ms;
      transition-timing-function: ease-out;
      transition-property: background-color,opacity,transform,-webkit-transform;
      z-index: 9999;
    }
    &:nth-child(1) {
      @media (max-width: 1340px) {
        top: calc(50% - 10px);
      }
    }
    &:nth-child(2) {
      @media (max-width: 1340px) {
        top: calc(50% - 3px)
      }
    }
    &:nth-child(3) {
      @media (max-width: 1340px) {
        top: calc(50% + 4px);
      }
    }
  }
  &.is-active {
    span {
      color:black;
      &:nth-child(1) {
        @media (max-width: 1340px) {
          top: calc(50% - 6px);
          transform: translateY(5px) rotate(45deg);
        }
      }
      &:nth-child(2) {
        @media (max-width: 1340px) {
          top: calc(50% - 1px);
          opacity: 0;
        }
      }
      &:nth-child(3) {
        @media (max-width: 1340px) {
          top: calc(50% + 4px);
          transform: translateY(-5px) rotate(-45deg);
        }
      }
    }
  }
}

.navbar-menus {
  display:flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1340px) {      
    overflow: hidden;
    z-index: 101;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right:0;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
    -webkit-transition: -webkit-transform .8s cubic-bezier(.8,.1,.2,1);
    transition: -webkit-transform .8s cubic-bezier(.8,.1,.2,1);
    transition: transform .8s cubic-bezier(.8,.1,.2,1);
    transition: transform .8s cubic-bezier(.8,.1,.2,1),-webkit-transform .8s cubic-bezier(.8,.1,.2,1);
    background-color: $cream;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2em 3.5em;
    flex-direction: column;
  }
  h2 {
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #03002f;
    margin: 1.5em 0 0;
    opacity: 0.7;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display:inline-block;
      padding-left:15px;
      @media (max-width: 1340px) {      
        display:block  !important;
        padding:0 !important;
      }            
      a {
        font-size:1.1rem;
        font-weight:600;
        color:$darkgrey;
        @media (max-width: 1340px) { 
          display: block;
          padding: 0.2em 0;
          font-size: 2rem;
          font-weight: 600;
          text-decoration: none;
          color: $darkgrey;
          transform: translateZ(0);                
        }
      }           
    }
  }
  &.open {
    @media (max-width: 1340px) {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);       
      ul {
        li {
          a {
            animation: slide-in 0.4s 0.5s backwards;
          }
          &:nth-of-type(2) {
            @media (max-width: 1340px) {
              a {
                animation-delay: 0.6s;
              }                
            }
          } 
          &:nth-of-type(3) {
            @media (max-width: 1340px) {
              a {
                animation-delay: 0.7s;
              }  
            }
          }     
        }
      }
    }
  }
}

.about {
  .site-header {
    position: relative;
  }
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>


