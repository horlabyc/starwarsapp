<template>
    <div class="container">
        <PopularStarship />
        <div class="popularCharacters">
            <div class="title">
                <h1>Popular Planets</h1>
            </div>
            <Starship />
        </div>
        <div class="popularCharacters">
            <div class="title">
                <h1>Popular Characters</h1>
            </div>
            <Starship />
        </div>
    </div>   
</template>

<script>
import Starship from '../Featured Components/Starships/starship';
import PopularStarship from '../Featured Components/Starships/popularStarship';

export default {
    name: 'HomePage',
    components: {
        Starship, 
        PopularStarship
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 50px;
    }

</style>