<template>
    <div class="uk-child-width-1-3@m" uk-grid>
        <div>
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src="../../../assets/character-1.jpg" alt="">
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
                    <img src="../../../assets/character-2.jpg" alt="">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Bottom</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
        <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="../../../assets/character-2.jpg" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Bottom</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>            
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Character'
}
</script>

<style lang="scss" scoped>
    img {
        height: 314px;
        width: 457px;
    }
</style>