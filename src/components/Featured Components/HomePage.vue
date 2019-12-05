<template>
    <div class="wrapper">
        <Header />
        <div class="holders">
            <PopularStarship />
            <PopularPlanet />
            <PopularCharacters />
        </div>        
        <!-- <StarshipDetail /> -->
    </div>   
</template>

<script>
import Header from '../Layout/Header.component';
import PopularStarship from '../Featured Components/Starships/popularStarship';
import PopularPlanet from '../Featured Components/Planets/popularPlanet';
import PopularCharacters from '../Featured Components/Characters/popularCharacters';
// import StarshipDetail from '../../components/Featured Components/Starships/starshipDetails';

export default {
    name: 'HomePage',
    components: {
        Header,
        PopularStarship,
        PopularPlanet,
        PopularCharacters,
        // StarshipDetail
    }
}
</script>

<style lang="scss" scoped>
    .holders{
        padding: 50px;
    }

</style>