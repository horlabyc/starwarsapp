<template>
    <div class="wrapper">
        <header style="margin: 0">
            <div class="brandLogo">
                <router-link to="/">
                    <img src='../../../assets/logo.png' alt="logo">
                </router-link>
            </div>
            <div class="characterImage">
                <img src="../../../assets/character-1.jpg" alt="character">
            </div>
        </header>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <section v-if="!isLoading" style="margin-top: 120px">
            <p class="Info"><b>Name: </b><span class='info'> <em style="color: #607D8B;">{{ characterDetails.name }}</em> </span></p>
            <p class="Info"><b>Height: </b> <span  class='info'><em style="color: #607D8B;"> {{ characterDetails.height }} </em></span></p>
            <p class="Info"><b>Mass: </b><span  class='info'> <em style="color: #607D8B;"> {{ characterDetails.mass }} </em> </span></p>
            <p class="Info"> <b>Birth year: </b><span  class='info'> <em style="color: #607D8B;"> {{ characterDetails.birth_year }} </em></span></p>
            <p class="Info"><b>Gender: </b><span class='info'> <em style="color: #607D8B;">{{ characterDetails.gender }}</em> </span></p>
            <p class="Info"><b>Hair Color: </b> <span  class='info'><em style="color: #607D8B;"> {{ characterDetails.hair_color }} </em></span></p>
            <p class="Info"><b>Skin Color: </b><span  class='info'> <em style="color: #607D8B;"> {{ characterDetails.skin_color }} </em> </span></p>
            <p class="Info"> <b>Eye Color: </b><span  class='info'> <em style="color: #607D8B;"> {{ characterDetails.eye_color }} </em></span></p>
        </section>
    </div>
</template>

<script>
import Loader from '../../shared/Loader';
import Error from '../../shared/error';
export default {
    name: "CharacterDetails",
    components: {
        Loader,
        Error
    },
    data() {
         return {
             characterDetails: Object,
             Id: Number,
             isLoading: true,
             isError: false
        }
    },
    methods: {
        async getCharacterDetail() {
            this.isLoading = true;
            this.characterDetails = {};
            try {
                const response = await fetch(`https://swapi.co/api/people/${this.getCharacterId()}/`, {
                method: 'GET',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });
                const Details = await response.json();
                this.characterDetails = Details;
                this.isLoading = false;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
        },
        getCharacterId() {
            return this.$route.params.Id
        }
    },
    mounted() {
        this.getCharacterDetail();
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
        .characterImage{
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
        .characterImage{
            img {
                height: 300px !important;
            }
        }
        section {
            margin-top: 90px !important;
        }
     }
</style>