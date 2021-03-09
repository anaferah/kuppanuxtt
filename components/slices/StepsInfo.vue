<template>
    <section class="steps">
        <div class="container is-fluid">
            <prismic-rich-text :field="slice.primary.headline"/>
            <ul class="columns">
                <li class="column" v-for="item in slice.items" :key="item.id">
                    <prismic-image :field="item.image"/>
                    <prismic-rich-text :field="item.headline"/>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "steps-info"
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/css/bulma.css';
@import '@/assets/scss/colors.scss';

.homepage {
    .steps {
        background: $darkgreen;
        color: white;
        padding: 10rem 0;
        h3 {
            text-align: center;
            font-size: 3rem;
            color: #f2f2f2;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 7rem;
        }
        ul {
            display: flex;
            list-style: none;
            @media (max-width: 768px) {
                flex-direction: column;
            }
            li {
                padding: 10px 25px;
                // border: 1px solid black;
                margin: 0 25px;
                position: relative;
                text-align: center;
                font-weight: 500;
                letter-spacing: 0.1px;
                @media (max-width: 768px) {
                    margin-bottom:2rem
                }
            
                &:not(:last-child):after {
                    content: '';
                    height: 1px;
                    background: #eed5bd;
                    width: 50px;
                    position: absolute;
                    right: -50px;
                    top: 50%;
                }
                &:not(:last-child):before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    top: 50%;
                    border-style: solid;
                    border-width: 7px 0 7px 20px;
                    border-color: transparent transparent transparent #eed5bd;
                    right: -50px;
                    transform: translateY(-50%);
                }
                @media (max-width: 768px) {
                    &:not(:last-child):after, &:not(:last-child):before{
                        display:none;
                    }
                }
                img {
                    height:80px;
                    margin-bottom: 1rem;
                }
                p {
                    font-size:1.5rem;
                    font-weight:600;
                }
                &:hover {
                    cursor: pointer;
                    p {
                        color:$lightgold;
                        transition: 0.5s;
                    }
                }
            }
        }
    }
}

</style>