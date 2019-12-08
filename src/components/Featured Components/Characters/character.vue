<template>
    <div>
        <div class="uk-card uk-card-default uk-card-hover uk-card-body"  v-scroll-reveal="{ delay: 500, duration: 2000 }">
            <!-- <img :src= "generateRandomImagePath()" alt="character"> -->
            <img v-bind:src ="getNextImage()" alt="character" > 
            <div class="info" v-scroll-reveal="{ reset: false, origin: 'left', distance: '200px', delay: 500, duration: 2000 }">
                <p class="name"><span>{{ characterInfo.name }}</span></p>
                <p>Height: <span>{{ characterInfo.height }}cm</span></p>
                <p>Mass: <span>{{ characterInfo.mass }}</span>kg</p>
                <p>Gender: <span>{{ characterInfo.gender }}</span></p>
                <p>Birth Year: <span>{{ characterInfo.birth_year }}</span></p>
                <router-link :to="{ name: 'characterdetail', params: { Id: characterInfo.url.slice(28,-1)}}">
                    <p>Read More </p>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: {
        characterInfo: Object
    },
    data(){
        return {
            characterImages: [
                require('../../../assets/character-1.jpg'),
                require('../../../assets/character-2.jpg'),
                require('../../../assets/character-3.jpg'),
                require('../../../assets/character-4.jpg'),
            ]
        }
    },
    methods: {
        getNextImage(){
            const index = Math.floor(Math.random()*4);
            return this.characterImages[index];
        }
    }
}
</script>

<style lang="scss" scoped>
    .uk-card{
        padding: 0 !important;
    }
    .name {
        color: #3F51B5;
        font-size: 1.2rem;
        margin-bottom: 50px; 
        font-weight:bold;
    }
    img {
        height: 360px;
        width: 300px;
    }
    .uk-card-default {
        display: flex !important;
        background: #eaeaeaf7;
        .info {
            align-self: center;
            padding: 15px;
            text-align: left;
            font-size: 0.9rem;
        }
    }
     @media (max-width: 600px) {
         .uk-card-default {
             flex-direction: column !important;
         }
        img {
            height: 270px !important;
            width: 270px !important;
        }
        .name {
            margin-bottom: 25px !important; 
        }
    }
     @media (max-width: 768px) {
         .uk-card-default {
             flex-direction: column !important;
         }
        img {
            height: 275px !important;
            width: 295px !important;
        }
        .name {
            margin-bottom: 25px !important; 
        }
    }
</style>