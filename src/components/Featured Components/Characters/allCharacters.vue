<template>
    <div class="popularCharacters">
        <Header v-on:searchTerm="search"/>
        <div class="title">
            <h1 style="font-family:inherit">Starwars Characters</h1>
        </div>
        <Loader v-if="isLoading"/>
        <Error v-if="isError" />
        <div class="filter">
            <p>Filter: </p>
            <select class="uk-select" @change="onSelect($event)" v-model="filter">
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value = "n/a">Robot</option>
                <option value = "hermaphrodite">Hermaphrodite</option>
            </select>
        </div>
        <!-- <div class="uk-margin" style="width:20%">
            
        </div> -->
        <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12" v-for="character in filteredCharacters" :key="character.name" style="margin: 15px 0">
                <Character :characterInfo = "character"/>
            </div>
        </div>
        <div class="paginate" v-if="showPagination">
            <a  class="num" v-bind:class="{ active: activePage === 1}" v-on:click="getAllCharacters(1)">1</a>
            <a  class="num" v-bind:class="{ active: activePage === 2}" v-on:click="getAllCharacters(2)">2</a>
            <a  class="num" v-bind:class="{ active: activePage === 3}" v-on:click="getAllCharacters(3)">3</a>
            <a  class="num" v-bind:class="{ active: activePage === 4}" v-on:click="getAllCharacters(4)">4</a>
            <a  class="num" v-bind:class="{ active: activePage === 5}" v-on:click="getAllCharacters(5)">5</a>
            <a  class="num" v-bind:class="{ active: activePage === 6}" v-on:click="getAllCharacters(6)">6</a>
            <a  class="num" v-bind:class="{ active: activePage === 7}" v-on:click="getAllCharacters(7)">7</a>
            <a  class="num" v-bind:class="{ active: activePage === 8}" v-on:click="getAllCharacters(8)">8</a>
        </div>
        <!-- <button class="btn">View More</button> -->
    </div>
</template>

<script>
import Character from './character';
import Header from '../../Layout/Header.component';
import Loader from '../../shared/Loader';
import Error from '../../shared/error';
export default {
    name: 'PopularCharacters',
    components: {
        Character,
        Header,
        Loader,
        Error
    },
    data(){
        return{
            allCharacters: [],
            filteredCharacters: [],
            isLoading: true,
            isError: false,
            activePage: 1,
            showPagination: false,
            filter: 'All'
        }
    },
    methods: {
        onSelect(e) {
            if (e.target.value === "All"){
                this.filteredCharacters = this.allCharacters;
            }else {
                this.filteredCharacters = this.allCharacters.filter(c => c.gender.toLowerCase() === e.target.value.toLowerCase());
            }
        },
        async getAllCharacters(pageNum) {
            this.filteredCharacters = [];
            this.isLoading = true;
            try {
            const response = await fetch(`https://swapi.co/api/people/?page=${pageNum}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
            const allCharacters = await response.json();
            allCharacters.results.forEach(character => {
                const { name, height, mass, gender, url } = character;
                this.allCharacters.push(
                    { 
                        name, height, mass, gender, url
                    }
                )
            });
            this.isLoading = false;
            this.allCharacters = JSON.parse(JSON.stringify(this.allCharacters));
            this.filteredCharacters = this.allCharacters;
            this.activePage = pageNum;
            this.showPagination = true;
            } catch (error) {
                console.error(error)
                this.isLoading = false;
                this.isError = true;
            }
        },
        filterData(searchTerm) {
            const filter = this.allCharacters.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            if (filter.length === 0) {
               this.filteredCharacters = this.allCharacters
           } else {
               this.filteredCharacters = filter;
           }
        },
        search(searchTerm){
           this.filterData(searchTerm);
        }
    },
    mounted() {
        this.getAllCharacters(1);
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
    .row {
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        // width: 20%;
        padding: 20px;
        p {
            margin: 0 10px;
        }
        select {
            width: 20%;
        }
        .uk-select{
            border: 2px solid #444444;
            border-radius: 6px;
        }
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
    @media (max-width: 600px) {
        .uk-select {
            width: 50% !important;
        }
    }
    @media (min-width: 600px) {
        .btn {
            width: 50% !important;
        }
    }
</style>