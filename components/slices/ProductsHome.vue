<template>
    <section class="products-cat">
        <div class="container">
            <div class="intro-wrapper">
                <prismic-rich-text :field="slice.primary.heading" />
                <prismic-rich-text :field="slice.primary.description" />  
            </div>
            <div class="columns">
                <div class="column is-3 is-6-mobile" v-for="item in slice.items" :key="item.id">      
                    <div class="heading-wrapper">              
                        <!-- <div class="number-wrapper">
                            <h5>{{ $prismic.asText(item.number) }}</h5>
                        </div> -->
                        <div class="headings-wrapper">
                            <h4>
                                <prismic-link :field="item.link"> 
                                    {{ $prismic.asText(item.heading) }}
                                </prismic-link>
                            </h4>
                            <!-- <prismic-rich-text :field="item.heading"/> -->
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <prismic-link :field="item.link"> 
                            <prismic-image :field="item.image"/>       
                        </prismic-link>
                        <prismic-link :field="item.link" class="btn-prod">                                 
                            {{ $prismic.asText(item.label) }}
                        </prismic-link>
                    </div>
                </div>
            </div>  
        </div>  
    </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "products-home"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.products-cat {
    // background:red;
    padding:7rem 0;
    text-align: center;
    .container {
        .intro-wrapper {
            margin-bottom:5rem;
            p {
                font-size:1.2rem;
                @media (max-width: 768px) {
                    font-size:1rem;
                }
            }
            h3 {
                font-size: 4rem;
                color: #d4b77d;
                font-weight: 900;
                line-height: 1.2;
                @media (max-width: 768px) {
                    font-size:2.5rem;
                    margin-bottom: 1rem;
                }
            }

        }
        .columns {
            flex-wrap: wrap;
            text-align: center;
            @media (max-width: 768px) {
                display:flex;
            }
            .column {
                margin-bottom:5rem;
            }
            .heading-wrapper {
                display:flex;
                align-items: center;
                justify-content: center;
                margin-bottom:1rem;
                .number-wrapper {
                    h5 {
                        color: #d9d0be;  
                        font-size:2rem;     
                        font-weight: 900;
                        background:none;    
                        line-height: 1;         
                    }
                }
                .headings-wrapper {
                    h4 {
                        color:$darkgrey;
                        font-size:1.2rem;
                        font-weight:800;
                        padding-left:0.5rem;
                        @media (max-width: 768px) {
                            padding-left:0;
                            font-size:1.1rem;
                            font-weight: 700;
                        }
                        a {
                            color:$darkgrey;
                        }
                        // font-style:italic;
                    }
                }
            }
            .img-wrapper {
                position: relative;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .btn-prod {
                margin-top:-2.5rem;
                // margin-left:-1rem;
                font-size: 1rem;
                background: #2858d7;
                color: white;
                // text-decoration: underline;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                // margin-left: 3rem;
                transition: 0.5s;
                &:hover {
                    background: $gold;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>