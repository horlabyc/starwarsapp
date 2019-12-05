<template>
    <!-- <div class="uk-child-width-1-3@m" uk-grid> -->
        <!-- <div> -->
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src="../../../assets/starship-1.jpg" alt="">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">{{ starshipInfo.name }}</h3>
                    <p>{{ starshipInfo.cargo_capacity }}</p>
                    <p>{{ starshipInfo.model }}</p>
                </div>
                <router-link :to="{ name: 'starshipdetail', params: { shipname: 123 }}">
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
    created() {
        console.log(this.starshipInfo);
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