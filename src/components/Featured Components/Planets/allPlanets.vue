<template>
    <div class="wrapper">
        <Header />
        <div class="title">
            <h1>Starwars Planets</h1>
        </div>
        <div class="content-wrapper">
            <div class="uk-child-width-1-3@m" uk-grid>
                <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="../../../assets/starship-1.jpg" alt="">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Mercury</h3>
                            <p>20 degree, 1.2Million</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="../../../assets/starship-1.jpg" alt="">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Media Top</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="../../../assets/starship-1.jpg" alt="">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Media Top</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../Layout/Header.component';
// import Planet from '../../Featured Components/Planets/planet';
export default {
    name: "AllPlanets",
    components: {
        Header,
    }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
    padding: 50px;
}
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