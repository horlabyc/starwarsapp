<template>
    <div class="wrapper">
        <Header v-on:searchTerm="search"/>
        <div class="title">
            <h1 style="font-family: inherit">Starwars Planets</h1>
        </div>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <div class="content-wrapper">
            <div class="row" style="padding:20px">
                <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12" style="margin-bottom: 30px;" v-for="planet in filteredPlanets" :key="planet.name" v-scroll-reveal="{ delay: 500, duration: 2000 }">
                    <img v-bind:src="getNextImage()" alt="">
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
            filteredPlanets: [],
            isLoading: true,
            isError: false,
            activePage: 1,
            showPagination: false,
            planetImages: [
                require('../../../assets/planet-1.jpg'),
                require('../../../assets/planet-2.jpg'),
                require('../../../assets/planet-3.jpg'),
            ]
        }
    },
    methods: {
        getNextImage(){
            const index = Math.floor(Math.random()*3);
            return this.planetImages[index];
        },
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
            this.filteredPlanets = this.allPlanets;
            this.activePage = pageNum;
            this.showPagination = true;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
        },
        filterData(searchTerm){
            const filter = this.allPlanets.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            if (filter.length === 0) {
               this.filteredPlanets = this.allPlanets
           } else {
               this.filteredPlanets = filter;
           }
        },
        search(searchTerm){
            this.filterData(searchTerm);
        }
    },
    mounted() {
        this.getAllPlanets(1);
    }
}
</script>

<style lang="scss" scoped>
    .content-wrapper {
        // padding: 50px;
    }
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
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