<template>
    <div class="PopularPlanets">
        <div class="title">
            <h1>Popular Planets</h1>
        </div>
        <div uk-slider="center: true">
            <div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">
                <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
                    <Planet />
                    <Planet />
                    <Planet />
                    <Planet />
                    <Planet />
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