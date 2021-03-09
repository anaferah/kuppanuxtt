<template>
  <section class="four-cols">
        <div class="container">
            <prismic-rich-text :field="slice.primary.heading" data-scroll data-scroll-speed="2.5"/>
            <div class="columns">        
                <div class="column is-3 is-6-mobile" v-for="item in slice.items" :key="item.id" data-scroll data-scroll-speed="1.5">
                    <prismic-image :field="item.image"/>
                    <prismic-rich-text :field="item.description"/>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "four-cols"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.four-cols {
    // height:100vh;
    background:#bf9369;
    color:white;
    padding:10rem 0;
    .container {
        display: flex;
        // height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h2 {
            color: white;
            font-size: 3vw;
            font-weight: 800;
            margin-bottom:7rem;
            @media (max-width: 768px) {
                font-size:2.5rem;
                text-align: center;
            }
        }
        .columns {
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            @media (max-width: 768px) {
                display:flex;
            }
            .column {
                text-align: center;
                margin-bottom:4rem;
                // min-width: 22.22%;
                // flex: 1;
                // margin-top:3rem;
            }
            
            p {
                color:white;
                font-weight: 400;
                font-size:1.2rem;
                @media (max-width: 768px) {
                    font-size:1rem
                }
            }
            strong {
                color:white;
            }
            img {
                // height: 50px;
                margin-bottom:1rem;
                // filter: grayscale(100%);
            }
            a {
                p {
                    border: 2px solid $darkgrey;
                    padding: 7px 25px 5px;
                    color: $darkgrey;
                    font-weight: 600;
                    transition: 0.5s;
                    max-width: 45%;
                    margin:0 auto;
                }
                &:hover {
                    p {
                        background:$darkgrey;
                        color:white;
                    }
                }
            }
        }
    }    
}
.pricing {
    .four-cols {
        .container {
            .columns {
                p {
                    font-size:1.2rem;
                    @media (max-width: 768px) {
                        font-size:1rem;
                    }
                    strong {
                        font-weight:600;
                    }
                }
                img {
                    height:50px;
                }
            }
        }
    }
}

.dropshipping {
    .four-cols {
        .container {
            .columns {
                img {
                    height:50px;
                }
            }
        }
    }
}


</style>