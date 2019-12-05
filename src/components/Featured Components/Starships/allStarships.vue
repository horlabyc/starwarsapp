<template>
    <div class="wrapper">
        <Header />
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
    </div>
</template>

<script>
import Header from '../../Layout/Header.component';
import Starship from '../../Featured Components/Starships/starship';
export default {
    name: "AllStarships",
    components: {
        Header,
        Starship
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
    .uk-grid-match {
        padding: 50px;
    }
</style>