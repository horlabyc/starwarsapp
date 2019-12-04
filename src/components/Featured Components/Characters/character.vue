<template>
    <div>
        <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <img src="../../../assets/character-1.jpg" alt="character">
            <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt modi recusandae quis veniam dolore, temporibus ex quasi voluptatem aperiam consequatur. <span><b> Read More...</b></span></p>
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
        height: 460px;
        width: 400px;
    }
    .uk-card-default {
        display: flex !important;
        .info {
            align-self: center;
            padding: 10px;
            text-align: left;
            font-size: 1.2rem;
        }
    }
</style>