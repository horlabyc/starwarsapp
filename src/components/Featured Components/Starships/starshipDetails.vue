<template>
    <div class="wrapper">
        <header>
            <div class="brandLogo">
                <router-link to="/">
                    <img src='../../../assets/logo.png' alt="logo">
                </router-link>
            </div>
            <div class="starshipImage">
                <img src="../../../assets/starship-6.jpg" alt="starship">
            </div>
        </header>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <section v-if="!isLoading">
            <p class="starshipInfo">Name: <span class='info'> {{ shipDetails.name }} </span></p>
            <p class="starshipInfo"> Model: <span  class='info'>{{ shipDetails.model }}</span></p>
            <p class="starshipInfo">No. of Passengers: <span  class='info'> {{ shipDetails.passengers }} </span></p>
            <p class="starshipInfo"> Manufacturer: <span  class='info'>{{ shipDetails.manufacturer }}</span></p>
        </section>
        <button class="btn">Recently viewed Starships</button>
        <div class="row" style="padding: 50px;">
            <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12" style="margin-bottom: 30px;" v-for="ship in recentlyViewedStarships.slice(0,3)" :key="ship.name">
                <Starship :starshipInfo = "ship"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import Starship from '../Starships/starship';
import Loader from '../../shared/Loader';
import Error from '../../shared/error';
export default {
    name: "StarshipDetail",
    components: {
        Starship,
        Loader,
        Error
    },
    data(){
        return {
             recentlyViewedStarships: [],
             shipDetails: Object,
             shipId: Number,
             isLoading: true,
             isError: false
        }
       
    },
    methods: {
        async getRecentlyViewedStarships() {
         try {
            const response = await fetch('https://swapi.co/api/starships', {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const recentlyViewedStarships = await response.json();
            recentlyViewedStarships.results.forEach(starship => {
                const { name, model, cargo_capacity, url } = starship;
                this.recentlyViewedStarships.push(
                    { 
                        name, model, cargo_capacity, url
                    }
                )
            });
            // this.isLoading = false;
            this.recentlyViewedStarships = JSON.parse(JSON.stringify(this.recentlyViewedStarships));
            } catch (error) {
                console.error(error)
                // this.isLoading = false;
                // this.isError = true;
            }
        },
        async getShipDetails() {
            this.isLoading = true;
            this.shipDetails = {};
            try {
                const response = await fetch(`https://swapi.co/api/starships/${this.getShipId()}/`, {
                method: 'GET',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });
                const shipDetails = await response.json();
                this.shipDetails = shipDetails;
                this.isLoading = false;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
            
        },
        getShipId() {
            return this.$route.params.shipId
        }
    },
    mounted() {
        this.getRecentlyViewedStarships();
        this.getShipDetails();
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        header {
            background: white;
            background-image: url('../../../assets/hero-banner.jpg');
            height: 100vh;
            display: flex;
            padding: 20px;
            flex-direction: column;
        }
        .brandLogo {
            display: flex;
            padding: 50px;
            img {
                width: 165px;
                height: 80px;
            }
        }
        .btn {
            padding: 10px;
            width: 30%;
            border: none;
            margin: 60px 0;
            background: white;
            border: 2px solid black;
            border-radius: 5px;
            // cursor: pointer;
            font-size: 1rem;
            font-family: inherit;
            transition: all 1s;
            // &:hover {
            //     color: black;
            //     background: #e5e5e5;
            // }
        }
        .starshipInfo{
            max-width: 700px;
            margin: 25px auto;
            font-size: 1.2rem;
            color: #673AB7;
        }
    }
    .icons {
        height: 30px;
    }
    .info {
        font-size: 0.9rem;
    }
    @media (max-width: 600px) {
        .brandLogo {
            padding:10px !important;
            img {
                width: 110px !important;
                height: 40px !important;
                margin-bottom: 50px !important;
            }
        }
        .row {
            padding:15px !important;
        }
        .btn {
            padding: 7px !important;
            width: 80% !important;
        }
    }
    @media (min-width: 600px) {
        .brandLogo {
            padding:10px !important;
            img {
                width: 110px !important;
                height: 40px !important;
                // margin-bottom: 50px !important;
            }
        }
        .starshipImage{
            img {
                height: 300px !important;
            }
        }
        section {
            margin-top: 90px !important;
        }
     }
</style>
