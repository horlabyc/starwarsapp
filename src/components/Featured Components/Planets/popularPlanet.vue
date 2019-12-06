<template>
    <div class="PopularPlanets">
        <div class="title">
            <h1 style="font-family: inherit">Popular Planets</h1>
        </div>
        <div uk-slider="center: true">
            <div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">
                <ul class="uk-slider-items uk-child-width-1-3@s">
                    <!-- <Planet /> -->
                    <li v-for="planet in popularPlanets.slice(0,6)" :key="planet.name" style="margin: 15px">
                        <img src="../../../assets/planet-2.jpg" alt="">
                        <Planet :planetInfo = "planet"/>
                    </li>
                </ul>
                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
        </div>
        <!-- <button class="btn">View More</button> -->
        <router-link to = "/planets"> 
            <button class="btn">
                View More
            </button>
        </router-link>
    </div>
</template>

<script>
import Planet from './planet';

export default {
    name: 'PopularPlanet',
    components: {
        Planet
    },
    props: {
        popularPlanets: Array
    }
}
</script>

<style lang="scss" scoped>
    .title {
        position: relative;
        h1 {
            font-weight: bold;
            color: #464646;
            margin: 45px 0;
        &:after {
            content: "";
            height: 5px;
            width: 10%;
            background: #5b5150;
            position: absolute;
            left: 45%;
            bottom: -12px;
            }
        }
    }
    .btn {
        padding: 20px;
        width: 30%;
        border: none;
        margin: 60px 0;
        background: white;
        border: 2px solid black;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
        font-family: inherit;
        transition: all 1s;
        &:hover {
            color: black;
            background: #e5e5e5;
        }
    }
</style>