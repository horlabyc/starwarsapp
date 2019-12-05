<template>
    <div class="wrapper">
        <Header />
        <div class="holders">
            <PopularStarship :popularStarships = "popularStarships"/>
            <PopularPlanet />
            <PopularCharacters />
        </div>        
        <!-- <StarshipDetail /> -->
    </div>   
</template>

<script>
// import axios from 'axios';
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
    },
    data() {
        return {
            popularStarships: []
        }
    },
    methods: {
        async getPopularStarships() {
         try {
            const response = await fetch('https://swapi.co/api/starships', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const popularStarships = await response.json();
            popularStarships.results.forEach(starship => {
                const { name, model, cargo_capacity } = starship;
                this.popularStarships.push(
                    { 
                        name, model, cargo_capacity
                    }
                )
            });
            this.popularStarships = JSON.parse(JSON.stringify(this.popularStarships));
        } catch (error) {
            console.error(error)
        }
        }
    },

    created() {
        this.getPopularStarships();
    }
}
</script>

<style lang="scss" scoped>
    .holders{
        padding: 50px;
    }

</style>