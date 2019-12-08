<template>
    <div class="wrapper">
        <Header />
        <div class="title">
            <h1 style="font-family:inherit">Popular Starships</h1>
        </div>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <div class="row" style="padding:20px">
            <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12" style="margin-bottom: 30px;" v-for="ship in allStarships" :key="ship.name">
                <Starship :starshipInfo = "ship"/>
            </div>
        </div>
        <div class="paginate" v-if="showPagination">
            <a  class="num" v-bind:class="{ active: activePage === 1}" v-on:click="getAllStarships(1)">1</a>
            <a  class="num" v-bind:class="{ active: activePage === 2}" v-on:click="getAllStarships(2)">2</a>
            <a  class="num" v-bind:class="{ active: activePage === 3}" v-on:click="getAllStarships(3)">3</a>
            <a  class="num" v-bind:class="{ active: activePage === 4}" v-on:click="getAllStarships(4)">4</a>
        </div>
    </div>
</template>

<script>
import Header from '../../Layout/Header.component';
import Loader from '../../shared/Loader';
import Error from '../../shared/error';
import Starship from '../../Featured Components/Starships/starship';
export default {
    name: "AllStarships",
    components: {
        Header,
        Loader,
        Error,
        Starship
    },
    data(){
        return {
            allStarships: [],
            isLoading: true,
            isError: false,
            activePage: 1,
            showPagination: false
        }
    },
    methods: {
        async getAllStarships(pageNum) {
            this.allStarships = [];
            this.isLoading = true;
            try {
            const response = await fetch(`https://swapi.co/api/starships?page=${pageNum}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const allStarships = await response.json();
            allStarships.results.forEach(starship => {
                const { name, model, cargo_capacity, url } = starship;
                this.allStarships.push(
                    { 
                        name, model, cargo_capacity, url
                    }
                )
            });
            this.isLoading = false;
            this.allStarships = JSON.parse(JSON.stringify(this.allStarships));
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
        this.getAllStarships(1);
    }
}
</script>

<style lang="scss" scoped>
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
    .active {
        color: #091d27 !important;
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