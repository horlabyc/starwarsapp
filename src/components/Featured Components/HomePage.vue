<template>
    <div class="wrapper">
        <Header v-on:searchTerm="search"/>
        <div class="holders">
            <Loader v-if="isLoading"/>
            <Error v-if="isError" />
            <PopularStarship :popularStarships = "filteredStarships"/>
            <PopularPlanet :popularPlanets = "filteredPlanets"/>
            <PopularCharacters :popularCharacters = "filteredCharacters"/>
        </div>        
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
            popularPlanets: [],
            popularCharacters: [],
            filteredStarships: [],
            filteredPlanets: [],
            filteredCharacters: [],
            isLoading: true,
            isError: false
        }
    },
    methods: {
        scrollToTop() {
                window.scrollTo(0,0);
        },
        async getPopularStarships() {
         try {
            const response = await fetch('https://swapi.co/api/starships', {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const popularStarships = await response.json();
            popularStarships.results.forEach(starship => {
                const { name, model, cargo_capacity, url } = starship;
                this.popularStarships.push(
                    { 
                        name, model, cargo_capacity, url
                    }
                )
            });
            this.isLoading = false;
            this.popularStarships = JSON.parse(JSON.stringify(this.popularStarships));
            this.filteredStarships = this.popularStarships;
        } catch (error) {
            console.error(error)
            this.isLoading = false;
            this.isError = true;
        }
        },
        async getPopularPlanets() {
         try {
            const response = await fetch('https://swapi.co/api/planets/', {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const popularPlanets = await response.json();
            popularPlanets.results.forEach(planet => {
                const { name, orbital_period, population, url } = planet;
                this.popularPlanets.push(
                    { 
                        name, orbital_period, population, url
                    }
                )
            });
            this.isLoading = false;
            this.popularPlanets = JSON.parse(JSON.stringify(this.popularPlanets));
            this.filteredPlanets = this.popularPlanets;
        } catch (error) {
            console.error(error)
            this.isLoading = false;
            this.isError = true;
        }
        },
        async getPopularCharacters() {
            try {
                const response = await fetch('https://swapi.co/api/people/', {
                method: 'GET',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                })
                const popularCharacters = await response.json();
                popularCharacters.results.forEach(people => {
                    const { name, height, mass, gender, url, birth_year } = people;
                    this.popularCharacters.push(
                        { 
                            name, height, mass, gender, url, birth_year
                        }
                    )
                });
                this.isLoading = false;
                this.popularCharacters = JSON.parse(JSON.stringify(this.popularCharacters));
                this.filteredCharacters = this.popularCharacters;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
        },
        filterStarship(searchTerm){
           const filter = this.popularStarships.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
           if (filter.length === 0) {
               this.filteredStarships = this.popularStarships
           } else {
               this.filterStarships = filter;
           }
        },
        filterPlanets(searchTerm){
           const filter = this.popularPlanets.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            if (filter.length === 0) {
               this.filteredPlanets = this.popularPlanets
           } else {
               this.filteredPlanets = filter;
           }
        },
        filterCharacters(searchTerm){
           const filter = this.popularCharacters.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            if (filter.length === 0) {
               this.filteredCharacters = this.popularCharacters
           } else {
               this.filteredCharacters = filter;
           }
        },
        search(searchTerm){
            // console.log(searchTerm);
            this.filterStarship(searchTerm);
            this.filterPlanets(searchTerm);
            this.filterCharacters(searchTerm);
        }
    },

    created() {
        this.getPopularStarships();
        this.getPopularPlanets();
        this.getPopularCharacters();
    }
}
</script>

<style lang="scss" scoped>
    .holders{
        padding: 10px;
    }

</style>