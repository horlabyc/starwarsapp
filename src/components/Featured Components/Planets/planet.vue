<template>
    
        <div class="uk-overlay uk-overlay-primary uk-position-bottom">
            <p style="margin:0"><a class="header text-left">Name: <span class="info">{{ planetInfo.name }}</span></a></p>
            <p style="margin:0"><a class="header text-left">Orbital Period: <span class="info">{{ planetInfo.orbital_period }}</span></a></p>
            <p style="margin:0"><a class="header text-left">Population: <span class="info">{{ planetInfo.population }}</span></a></p>
            <router-link :to="{ name: 'planetdetail', params: { Id: planetInfo.url.slice(29,-1)}}">
                <p>Read More</p>
            </router-link>
        </div>
    
</template>

<script>
export default {
    name: 'Planet',
    props: {
        planetInfo: Object
    }
}
</script>

<style lang="scss" scoped>
    .uk-panel {
        // bottom: 0 !important;
        // left: 50% !important;
    }
    p{
        font-family: inherit;
    }
    .uk-position-bottom {
        width: 90% !important;
        margin: 0 auto !important;
        height: 66% !important;
        padding: 5px !important;
        text-align: left !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
    }
    .info {
        color: coral;
        font-size: 1.2rem;
    }
</style>