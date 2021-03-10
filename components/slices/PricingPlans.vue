<template>
    <section class="pricing-columns pricing-section" id="pricing-plans">
            <div class="toggler-section">
                <div class="toggler toggler--is-active" id="filt-monthly">                    
                    <h3>{{ $prismic.asText(slice.primary.monthlyp) }} </h3>                    
                </div>
                <div class="toggle">
                    <input type="checkbox" id="switcher" class="check">
                    <b class="b switch"></b>
                </div>
                <div class="toggler" id="filt-hourly">                             
                   <h3>{{ $prismic.asText(slice.primary.anualp) }} </h3>
                </div>  
            </div>      
            <div class="pricingplansintro">
                <prismic-rich-text :field="slice.primary.pricingplansdescription" />
            </div>
            <div id="monthly" class="wrapper-full">
                <div id="pricing-chart-wrap">
                    <div id="pricing-chart">
                        <div class="container pricingfaq">
                            <div class="columns" id="smaller-plans">
                                <div class="column plan ">                          
                                    <div class="price">
                                        <div class="label">
                                            <prismic-rich-text :field="slice.primary.free" />
                                        </div>
                                    </div>
                                    <div class="pricing-currency is-flex is-justify-content-center">
                                        <div class="pricing-euro">
                                            <prismic-rich-text :field="slice.primary.currency" />
                                        </div>
                                        <div class="pricing-amount">
                                            <prismic-rich-text :field="slice.primary.freeprice" />
                                        </div>
                                    </div>
                                    <div class="subtitle">
                                        <prismic-rich-text :field="slice.primary.freedescription" />
                                    </div>
                                    <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                                        <span>{{ $prismic.asText(slice.primary.label) }}</span>
                                    </prismic-link>
                                </div>
                                <div class="column plan popular">     
                                    <div class="price">
                                        <div class="label">  
                                            <prismic-rich-text :field="slice.primary.starter" />
                                        </div>
                                    </div>
                                    <div class="pop-plan">
                                        <prismic-rich-text :field="slice.primary.popularity" /> 
                                    </div>
                                    <div class="pricing-currency is-flex is-justify-content-center"> 
                                        <div class="pricing-euro">
                                            <prismic-rich-text :field="slice.primary.currency" />
                                        </div>
                                        <div class="pricing-amount">
                                            <prismic-rich-text :field="slice.primary.starterprice" />
                                        </div>
                                        <div class="pricing-timeframe">
                                            <prismic-rich-text :field="slice.primary.timeframe" />
                                        </div>
                                    </div>
                                    <div class="subtitle">
                                        <prismic-rich-text :field="slice.primary.starterdescription" />
                                    </div>
                                    <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                                        <span><span>{{ $prismic.asText(slice.primary.label) }}</span></span>
                                    </prismic-link>
                                </div>
                                <div class="column plan ">    
                                    <div class="price">
                                        <div class="label">                        
                                            <prismic-rich-text :field="slice.primary.pro" />
                                        </div>
                                    </div>
                                    <div class="pricing-currency is-flex is-justify-content-center"> 
                                        <div class="pricing-euro">
                                            <prismic-rich-text :field="slice.primary.currency" />
                                        </div>
                                        <div class="pricing-amount">
                                            <prismic-rich-text :field="slice.primary.proprice" />
                                        </div>
                                        <div class="pricing-timeframe">
                                            <prismic-rich-text :field="slice.primary.timeframe" />
                                        </div>
                                    </div>
                                    <div class="subtitle">
                                        <prismic-rich-text :field="slice.primary.prodescription" />
                                    </div>
                                    <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                                        <span><span>{{ $prismic.asText(slice.primary.label) }}</span></span>
                                    </prismic-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hourly" class="wrapper-full hide">
                <div id="pricing-chart-wrap">
                    <div id="pricing-chart">
                        <div class="container pricingfaq">
                            <div class="columns" id="smaller-plans">
                                <div class="column plan">    
                                    <div class="price">
                                        <div class="label">                       
                                            <prismic-rich-text :field="slice.primary.free" />
                                        </div>
                                    </div>
                                    <div class="pricing-currency is-flex is-justify-content-center"> 
                                        <div class="pricing-euro">
                                            <prismic-rich-text :field="slice.primary.currency" />
                                        </div>
                                        <div class="pricing-amount">
                                            <prismic-rich-text :field="slice.primary.freeprice" />
                                        </div>
                                    </div>
                                    <div class="subtitle">
                                        <prismic-rich-text :field="slice.primary.freedescription" />
                                    </div>
                                    <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                                        <span><span>{{ $prismic.asText(slice.primary.label) }}</span></span>
                                    </prismic-link>
                                </div>
                                <div class="column plan popular">   
                                    <div class="price">
                                        <div class="label">                                                          
                                            <prismic-rich-text :field="slice.primary.starter" />
                                        </div>
                                    </div>
                                    <div class="pop-plan">
                                        <prismic-rich-text :field="slice.primary.popularity" />  
                                    </div>
                                    <div class="freebie">
                                        <prismic-rich-text :field="slice.primary.starterfree" />  
                                    </div>
                                    <div class="pricing-currency is-flex is-justify-content-center"> 
                                        <div class="pricing-euro">
                                            <prismic-rich-text :field="slice.primary.currency" />
                                        </div>
                                        <div class="pricing-amount">
                                            <prismic-rich-text :field="slice.primary.starterpricey" />
                                        </div>
                                        <div class="pricing-timeframe">
                                            <prismic-rich-text :field="slice.primary.timeframey" />
                                        </div>
                                    </div>
                                    <div class="subtitle">
                                        <prismic-rich-text :field="slice.primary.starterdescription" />
                                    </div>
                                    <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                                        <span><span>{{ $prismic.asText(slice.primary.label) }}</span></span>
                                    </prismic-link>
                                </div>
                                <div class="column plan">     
                                    <div class="price">
                                        <div class="label">                      
                                            <prismic-rich-text :field="slice.primary.pro" />
                                        </div>
                                    </div>
                                    <div class="freebie">
                                        <prismic-rich-text :field="slice.primary.starterfree" />
                                    </div> 
                                    <div class="pricing-currency is-flex is-justify-content-center"> 
                                        <div class="pricing-euro">
                                            <prismic-rich-text :field="slice.primary.currency" />
                                        </div>
                                        <div class="pricing-amount">
                                            <prismic-rich-text :field="slice.primary.propricey" />
                                        </div>
                                        <div class="pricing-timeframe">
                                            <prismic-rich-text :field="slice.primary.timeframey" />
                                        </div>
                                    </div>
                                    <div class="subtitle">
                                        <prismic-rich-text :field="slice.primary.prodescription" />
                                    </div>
                                    <prismic-link :field="slice.primary.link" class="buttons button--hyperion">
                                        <span><span>{{ $prismic.asText(slice.primary.label) }}</span></span>
                                    </prismic-link>
                                </div>
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
  name: "pricing-plans",
    mounted() {
    // document.addEventListener('DOMContentLoaded', () => {

    var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-hourly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("hourly");
    
    
    e.addEventListener("click", function(){
      t.checked = false;
      e.classList.add("toggler--is-active");
      d.classList.remove("toggler--is-active");
      m.classList.remove("hide");
      y.classList.add("hide");
    });
    
    d.addEventListener("click", function(){
      t.checked = true;
      d.classList.add("toggler--is-active");
      e.classList.remove("toggler--is-active");
      m.classList.add("hide");
      y.classList.remove("hide");
    });
    
    t.addEventListener("click", function(){
      d.classList.toggle("toggler--is-active");
      e.classList.toggle("toggler--is-active");
      m.classList.toggle("hide");
      y.classList.toggle("hide");
    });
    
    // });
   

  },
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

#pricing-plans {
    text-align: center;
    padding:10rem 0;
    background:#f0f1f7;
    &.pricing-columns {
        .pricingplansintro {
            margin-top: 2rem;
            @media (max-width: 768px) {
                padding:0 2rem;
            }
            p {
                font-size:1.2rem;
                @media (max-width: 768px) {
                    font-size:1rem;
                }
                strong {
                    color:$darkgreen;
                    font-weight: 900;
                }
                em {
                    font-style:normal;
                    font-weight: 700;
                }
            }
        }
    }

    .toggle,
    .toggler {
    display: inline-block;
    vertical-align: middle;
    margin: 10px;
    }
    .toggler {
    transition: 0.2s;
    font-weight: bold;
    h3 {
        font-size:2rem;
        font-weight: 800;
        color:$darkgrey;
    }
    }
    .toggler--is-active {
    color: #9d1726;
    h3 {
        color:#9d1726;
    }
    }
    .b {
    display: block;
    }
    .toggle {
    position: relative;
    width: 80px;
    height: 35px;
    border-radius: 100px;
    background-color: #9d1726;
    overflow: hidden;
    box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.05);
    }
    .check {
    position: absolute;
    display: block;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 6;
    }
    .check:checked ~ .switch {
    right: 2px;
    left: 57.5%;
    transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: left, right;
    transition-delay: 0.08s, 0s;
    }
    .switch {
    position: absolute;
    left: 2px;
    top: 2px;
    bottom: 2px;
    right: 57.5%;
    background-color: #fff;
    border-radius: 36px;
    z-index: 1;
    transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: left, right;
    transition-delay: 0s, 0.08s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .hide {
    display: none;
    }
}
.pricing-columns {
    .wrapper-full {
        position: relative;  
    }
    #pricing-chart {
        margin-top: 100px;
        position: relative;
        #smaller-plans {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            @media (max-width: 768px) {
                display: flex;
                flex-direction: column;
            }
            .plan {
                background-color: #fff;
                position: relative;
                color: $darkgrey;
                padding: 2.5rem 2rem;                
                width: 100%;
                margin:0 2rem;
                @media (max-width: 768px) {
                    margin:0;
                    margin-bottom:2rem;
                }
                &:before {
                    content: '';
                    position: absolute;
                    height: 5px;
                    left: -1px;
                    top: 0;
                    background-color: #233e48;
                    width: 100%;
                }
                .price {
                    h4 {
                        font-weight: 900;
                        text-transform: uppercase;
                        font-size: 2rem;
                        width: 100%;
                        margin-top: 17px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        letter-spacing: 0.5px;
                    }                    
                }
                .pop-plan {
                    p {
                        box-sizing: border-box;
                        color: $darkgreen;
                        text-transform: uppercase;
                        font-weight: 700;
                        font-size: 1.1rem;
                        letter-spacing: 0.5px;
                    }
                }
                .freebie {
                    p {
                        font-weight:900;
                    }
                }
                .pricing-currency {
                    align-items: center;
                    margin-top:1.5rem;
                    .pricing-euro {
                        p {
                            padding-left:5px;
                            font-size: 1.5rem;
                        }
                    }
                    .pricing-amount {
                        p {
                            padding-left:5px;
                            font-size: 30px;
                            font-weight: 600;
                        }
                    }
                    .pricing-timeframe {
                        padding-left:5px;
                        color:#9e9e9e;
                    }
                }
                .subtitle {
                    margin-top:2rem;
                    color: rgba(0,0,0,0.7);
                    font-size: 1.1rem;
                    p {
                        font-size:1.1rem;
                    }
                    ul {
                        margin-top:2rem;
                        margin-bottom: 3rem;
                        li {
                            color:black;
                            font-size: 1.3rem;
                            line-height: 2.5;
                        }
                    }
                }
                .button-sign {
                    text-transform: uppercase;
                    border-bottom-left-radius: 54px;
                    border-bottom-right-radius: 54px;
                    border-top-left-radius: 54px;
                    border-top-right-radius: 54px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: none;
                    padding: 10px 15px 8px 15px;
                    border: 2px solid $darkgrey;
                    color:$darkgrey;
                }
                &.popular {
                    .pricing-currency {
                        .pricing-amount {
                            p {
                                font-size:60px;
                            }
                        }
                    }
                    &:before {
                        width: 100%;
                        background-color: #9d1726;
                        height: 7px;
                    }
                    .button-sign {
                        background-color: #9d1726;
                        border: 2px solid #9d1726;
                        color: #ffffff;
                        border-radius: 20px;
                        font-weight: 700;
                        line-height: 1.5rem;
                        width: 80%;
                    }
                }
            }
        }
    }
}
.pricing-columns #pricing-chart .popular .price .amount,
.pricing-columns-both #pricing-chart .popular .price .amount {
  font-size: 60px;
}
.bandwidth {
  display: block;
  color: #9e9e9e;
  font-size: 16px;
  position: absolute;
  right: 0;
  bottom: -90px;
}
.pricing-columns #pricing-chart .popular p.pop-plan,
.pricing-columns-both #pricing-chart .popular p.pop-plan {
  box-sizing: border-box;
  color: #00a98e;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.1rem;
}
.pricing-columns #pricing-chart .popular .price,
.pricing-columns-both #pricing-chart .popular .price {
  margin-bottom: 0px;
}




</style>