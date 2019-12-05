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
        <section>
            <p class="starshipInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto soluta nisi harum nemo quidem doloremque tempore, illum officia! Error mollitia asperiores deleniti accusamus sed placeat possimus ea quae facilis dolor illo eligendi quisquam qui quo, ab sequi vero maxime itaque inventore rem odit atque. 
                Sapiente tenetur, veritatis repudiandae ratione necessitatibus nostrum blanditiis commodi culpa dolorum in amet vero odio placeat! Dignissimos accusantium nihil non quaerat beatae, reiciendis totam repellendus nemo aliquam ullam. 
                Exercitationem modi aliquam officia id veritatis dolores. 
                Asperiores earum vitae consequuntur commodi exercitationem voluptates, dolorem officia, repellendus est distinctio quibusdam consequatur aliquam nesciunt rerum corrupti recusandae tempora.
            </p>
        </section>
        <button class="btn">Recently viewed Starships</button>
        <div class="uk-child-width-1-3@m uk-grid-match" uk-grid style="padding: 50px">
            <Starship />
            <Starship />
            <Starship />
        </div>
    </div>
</template>
<script>
import Starship from '../Starships/starship';
export default {
    name: "StarshipDetail",
    components: {
        Starship
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
            padding: 20px;
            width: 30%;
            border: none;
            margin: 60px 0;
            background: white;
            border: 2px solid black;
            border-radius: 5px;
            // cursor: pointer;
            font-size: 1.2rem;
            font-family: inherit;
            transition: all 1s;
            // &:hover {
            //     color: black;
            //     background: #e5e5e5;
            // }
        }
        .starshipInfo{
            max-width: 700px;
            margin: 50px auto;
            font-size: 1.2rem;
        }
    }
</style>
