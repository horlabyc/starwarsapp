<template>
    <div class="wrapper">
        <header style="margin: 0">
            <div class="brandLogo">
                <router-link to="/">
                    <img src='../../../assets/logo.png' alt="logo">
                </router-link>
            </div>
            <div class="planetImage">
                <img src="../../../assets/planet-2.jpg" alt="planet">
            </div>
        </header>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <section v-if="!isLoading" style="margin-top: 120px">
            <p class="Info"><b>Name: </b><span class='info'> <em style="color: #607D8B;">{{ planetDetails.name }}</em> </span></p>
            <p class="Info"><b>Rotation Period: </b> <span  class='info'><em style="color: #607D8B;"> {{ planetDetails.rotation_period }} </em></span></p>
            <p class="Info"><b>Orbital Period: </b><span  class='info'> <em style="color: #607D8B;"> {{ planetDetails.orbital_period }} </em> </span></p>
            <p class="Info"> <b>Diameter: </b><span  class='info'> <em style="color: #607D8B;"> {{ planetDetails.diameter }} </em></span></p>
            <p class="Info"><b>Climate: </b><span class='info'> <em style="color: #607D8B;">{{ planetDetails.climate }}</em> </span></p>
            <p class="Info"><b>Gravity: </b> <span  class='info'><em style="color: #607D8B;"> {{ planetDetails.gravity }} </em></span></p>
            <p class="Info"><b>Terrain: </b><span  class='info'> <em style="color: #607D8B;"> {{ planetDetails.terrain }} </em> </span></p>
            <p class="Info"> <b>Population: </b><span  class='info'> <em style="color: #607D8B;"> {{ planetDetails.population }} </em></span></p>
        </section>
    </div>
</template>

<script>
import Loader from '../../shared/Loader';
import Error from '../../shared/error';
export default {
    name: "PlanetDetails",
    components: {
        Loader,
        Error
    },
    data() {
         return {
             planetDetails: Object,
             Id: Number,
             isLoading: true,
             isError: false
        }
    },
    methods: {
        async getPlanetDetail() {
            this.isLoading = true;
            this.planetDetails = {};
            try {
                const response = await fetch(`https://swapi.co/api/planets/${this.getPlanet()}/`, {
                method: 'GET',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });
                const Details = await response.json();
                this.planetDetails = Details;
                this.isLoading = false;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
        },
        getPlanet() {
            return this.$route.params.Id
        }
    },
    mounted() {
        this.getPlanetDetail();
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        header {
            background: white;
            background-image: url('../../../assets/hero-banner.jpg');
            height: 80vh;
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
        .planetImage{
            img {
                height: 400px;
            }
        }
        .starshipInfo{
            max-width: 700px;
            margin: 25px auto;
            font-size: 1.2rem;
            color: #673AB7;
        }
    }
     @media (max-width: 600px) {
        .brandLogo {
            padding:10px !important;
            img {
                width: 110px !important;
                height: 40px !important;
                // margin-bottom: 50px !important;
            }
        }
        section {
            margin-top: 50px !important;
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
        .planetImage{
            img {
                height: 300px !important;
            }
        }
        section {
            margin-top: 90px !important;
        }
     }
</style>