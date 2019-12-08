<template>
    <!-- <div class="uk-child-width-1-3@m" uk-grid> -->
        <!-- <div> -->
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src="../../../assets/starship-1.jpg" alt="">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title" style="color: #7b052d;">{{ starshipInfo.name }}</h3>
                    <p>Capity: <span>{{ starshipInfo.cargo_capacity }}</span></p>
                    <p>Model: <span>{{ starshipInfo.model }}</span></p>
                </div>
                <router-link :to="{ name: 'starshipdetail', params: { shipId: starshipInfo.url.slice(30,-1).slice(1) }}">
                    <button class="btn-readmore">Read More <span uk-icon="arrow-right"></span></button>
                </router-link>
            </div>
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
export default {
    name: 'Starship',

    props: {
        starshipInfo: Object
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
    // img {
    //     height: 314px;
    //     width: 457px;
    // }
    .uk-card {
        // position: relative !important;
        .uk-card-body{
            h3, p {
                text-align: left;
            }
        }
        .btn-readmore{
            margin: 14px;
            padding: 15px 20px;
            border: none;
            background: black;
            color: white;
            font-family: inherit;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.4s;
            &:hover{
                background:#D8D8D8;
                color: black;
            }
        }
    }
</style>