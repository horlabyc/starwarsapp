<template>
    <div class="popularStarships">
        <div class="title">
            <h1 style="font-family:inherit">Popular Starships</h1>
        </div>
        <div class="row" style="padding:20px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" style="margin-bottom: 30px;" v-for="ship in popularStarships.slice(0,6)" :key="ship.name">
                <Starship :starshipInfo = "ship"/>
            </div>
        </div>
        <router-link to = "/starships"> 
            <button class="btn">
                View More
            </button>
        </router-link>
    </div>
</template>

<script>
import Starship from './starship';

export default {
    name: 'PopularStarship',
    components: {
        Starship
    },
    props: {
        popularStarships: Array
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
    @media (max-width: 600px) {
        .btn {
            width: 100% !important;
            padding:10px !important;
            font-size: 1rem !important;
        }
    }
    @media (max-width: 768px) {
        .btn {
            width: 60% !important;
            padding:10px !important;
            font-size: 1rem !important;
        }
    }
</style>