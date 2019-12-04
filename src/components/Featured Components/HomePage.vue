<template>
    <div class="container">
        <PopularStarship />
        <PopularPlanet />
        <PopularCharacters />
    </div>   
</template>

<script>
import PopularStarship from '../Featured Components/Starships/popularStarship';
import PopularPlanet from '../Featured Components/Planets/popularPlanet';
import PopularCharacters from '../Featured Components/Characters/popularCharacters';

export default {
    name: 'HomePage',
    components: {
        PopularStarship,
        PopularPlanet,
        PopularCharacters
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 50px;
    }

</style>