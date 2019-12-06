<template>
    <div class="wrapper">
        <Header />
        <div class="title">
            <h1 style="font-family: inherit">Starwars Planets</h1>
        </div>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <div class="content-wrapper">
            <div class="row" style="padding:20px">
                <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12" style="margin-bottom: 30px;" v-for="planet in allPlanets" :key="planet.name">
                    <img src="../../../assets/planet-3.jpg" alt="">
                    <Planet :planetInfo = "planet"/>
                </div>
            </div>
            <div class="paginate" v-if="showPagination">
                <a  class="num" v-bind:class="{ active: activePage === 1}" v-on:click="getAllPlanets(1)">1</a>
                <a  class="num" v-bind:class="{ active: activePage === 2}" v-on:click="getAllPlanets(2)">2</a>
                <a  class="num" v-bind:class="{ active: activePage === 3}" v-on:click="getAllPlanets(3)">3</a>
                <a  class="num" v-bind:class="{ active: activePage === 4}" v-on:click="getAllPlanets(4)">4</a>
                <a  class="num" v-bind:class="{ active: activePage === 5}" v-on:click="getAllPlanets(4)">5</a>
                <a  class="num" v-bind:class="{ active: activePage === 6}" v-on:click="getAllPlanets(4)">6</a>
                <a  class="num" v-bind:class="{ active: activePage === 7}" v-on:click="getAllPlanets(4)">7</a>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../Layout/Header.component';
import Loader from '../../shared/Loader';
import Error from '../../shared/error'
import Planet from '../../Featured Components/Planets/planet';
export default {
    name: "AllPlanets",
    components: {
        Header,
        Loader,
        Error,
        Planet
    },
    data() {
        return{
            allPlanets: [],
            isLoading: true,
            isError: false,
            activePage: 1,
            showPagination: false
        }
    },
    methods: {
        async getAllPlanets(pageNum) {
            this.allPlanets = [];
            this.isLoading = true;
            try {
            const response = await fetch(`https://swapi.co/api/planets/?page=${pageNum}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const allPlanets = await response.json();
            allPlanets.results.forEach(planet => {
                const { name, orbital_period, population, url  } = planet;
                this.allPlanets.push(
                    { 
                        name, orbital_period, population, url 
                    }
                )
            });
            this.isLoading = false;
            this.allPlanets = JSON.parse(JSON.stringify(this.allPlanets));
            this.activePage = pageNum;
            this.showPagination = true;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
        }
    },
    mounted() {
        this.getAllPlanets(1);
    }
}
</script>

<style lang="scss" scoped>
    .content-wrapper {
        padding: 50px;
    }
    .title {
        position: relative;
        h1 {
            font-weight: bold;
            color: #464646;
            margin: 45px 0;
        &:after {
            content: "";
            height: 5px;
            width: 10%;
            background: #5b5150;
            position: absolute;
            left: 45%;
            bottom: -12px;
            }
        }
    }
    .uk-grid-match {
        padding: 50px;
    }
    .paginate {
        width: 100%;
        text-align: center;
        padding: 30px;
        a {
            text-decoration: none;
            margin: 6px 1px;
            display: inline-block;
            width: 60px;
            background: #607D8B;
            line-height: 45px;
            color: #fff;
            font-weight: 600;
            transition: 0.3s;
            position: relative;
            &:hover {
                color: #e74c36;
            }
        }
        .active {
        color: #FF9800 !important;
        }
        .prev {
        border-radius: 30px 0 0 30px;
        }
        .next {
        border-radius: 0 30px 30px 0;
        }
    }

</style>