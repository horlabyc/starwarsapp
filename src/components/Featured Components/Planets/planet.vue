<template>
    
        <div class="uk-overlay uk-overlay-primary uk-position-bottom">
            <h3><a class="header text-left">Name: <span class="info">{{ planetInfo.name }}</span></a></h3>
            <h3><a class="header text-left">Orbital Period: <span class="info">{{ planetInfo.orbital_period }}</span></a></h3>
            <h3><a class="header text-left">Population: <span class="info">{{ planetInfo.population }}</span></a></h3>
        </div>
    
</template>

<script>
export default {
    name: 'Planet',
    props: {
        planetInfo: Object
    },
    created(){
    }
}
</script>

<style lang="scss" scoped>
    .uk-panel {
        // bottom: 0 !important;
        // left: 50% !important;
    }
    h3{
        font-family: inherit;
    }
    .uk-position-bottom {
        width: 90% !important;
        margin: 0 auto !important;
    }
    .info {
        color: coral;
        font-size: 1.2rem;
    }
</style>