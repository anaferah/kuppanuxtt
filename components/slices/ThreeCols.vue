<template>
  <section class="three-cols">
        <div class="container">
            <div class="columns">        
                <div class="column" v-for="item in slice.items" :key="item.id">
                    <prismic-image :field="item.image" data-scroll data-scroll-speed="1.5"/>
                    <prismic-rich-text :field="item.heading" data-scroll data-scroll-speed="1.5"/>
                    <prismic-rich-text :field="item.description" data-scroll data-scroll-speed="1.5"/>
                    <prismic-link :field="item.link" class="buttons button--hyperion" data-scroll data-scroll-speed="2.5">
                        <span><span>
                            <!-- <prismic-rich-text :field="item.label"/> -->
                            {{ $prismic.asText(item.label) }}
                        </span></span>
                    </prismic-link>
                </div>
            </div>
        </div>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  name: "three-cols"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.three-cols {
    min-height:100vh;
    background:$lightgrey;
    .container {
        .columns {
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            .column {
                text-align: center;
            }
            h3 {
                color: $darkgrey;
                font-size: 1.3rem;
                font-weight: 700;
            }
            p {
                color:$darkgrey;
                margin: 1rem 0 4rem;
            }
            // img {
            //     height: 50px;
            // }
            a {
                text-decoration: none;
                // p {
                //     border: 2px solid $darkgrey;
                //     padding: 7px 25px 5px;
                //     color: $darkgrey;
                //     font-weight: 600;
                //     transition: 0.5s;
                //     max-width: 45%;
                //     margin:0 auto;
                // }
                // &:hover {
                //     p {
                //         background:$darkgrey;
                //         color:white;
                //     }
                // }
            }
        }
    }    
}
.contact {
    .three-cols {
        background:#fff;
        margin:4rem auto;
        .container {
            .columns {
                .column {
                    h3 {
                        font-size:1.8rem;
                        font-weight: 800;
                        margin-top: 1rem;
                    }
                    img {
                        height:50px;
                    }
                }
            }
        }
    }
}

.contact {
    .three-cols {
        .container {
            .columns {
                a {
                    &.buttons {
                        
                    }
                    &.button--hyperion {
                        background:$darkgrey;
                        border:none;
                        &:before { 
                            content: '';
                            background: $darkgrey;
                            transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
                            transform-origin: 100% 50%;  
                        }
                        &:hover {
                            span {
                                color:white;
                            }
                        }
                    }
                }
            }
        }
    }
}

.homepage {
    .three-cols {
        .container {
            .columns {
                h3 {
                    margin-bottom:1.5rem;
                }
            }
        }
    }
}

</style>