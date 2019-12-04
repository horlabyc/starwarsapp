<template>
    <div class="container">
        <PopularStarship />
        <PopularPlanet />
        <div class="popularCharacters">
            <div class="title">
                <h1>Popular Characters</h1>
            </div>
            <Starship />
        </div>
    </div>   
</template>

<script>
import Starship from '../Featured Components/Starships/starship';
import PopularStarship from '../Featured Components/Starships/popularStarship';
import PopularPlanet from '../Featured Components/Planets/popularPlanet';

export default {
    name: 'HomePage',
    components: {
        Starship, 
        PopularStarship,
        PopularPlanet
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 50px;
    }

</style>