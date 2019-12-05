<template>
    <div class="popularStarships">
        <div class="title">
            <h1>Popular Starships</h1>
        </div>
        <div class="uk-child-width-1-3@m uk-grid-match" uk-grid>
            <Starship />
            <Starship />
            <Starship />
            <Starship />
            <Starship />
            <Starship />
        </div>
        <!-- <Starship />     -->
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
    components: {Starship}
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