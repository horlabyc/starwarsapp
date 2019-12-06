<template>
    <div class="wrapper">
        <Header />
        <div class="holders">
            <Loader v-if="isLoading"/>
            <Error v-if="isError" />
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
import Loader from '../shared/Loader';
import Error from '../shared/error';
// import StarshipDetail from '../../components/Featured Components/Starships/starshipDetails';

export default {
    name: 'HomePage',
    components: {
        Header,
        Loader,
        Error,
        PopularStarship,
        PopularPlanet,
        PopularCharacters,
    },
    data() {
        return {
            popularStarships: [],
            isLoading: true,
            isError: false
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
            this.isLoading = false;
            this.popularStarships = JSON.parse(JSON.stringify(this.popularStarships));
        } catch (error) {
            console.error(error)
            this.isLoading = false;
            this.isError = true;
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