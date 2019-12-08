<template>
    <div>
        <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <!-- <img :src= "generateRandomImagePath()" alt="character"> -->
            <img src ="../../../assets/character-1.jpg" alt="character"> 
            <div class="info">
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
    methods: {
        generateRandomImagePath() {
            return `../../../assets/character-${Math.floor (Math.random()*4)}.jpg`
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
        img {
            height: 260px !important;
            width: 200px !important;
        }
    }
</style>