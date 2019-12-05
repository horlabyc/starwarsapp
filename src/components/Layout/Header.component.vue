<template>
<div class="container-fluid">
    <div class="brandLogo">
        <router-link to="/">
            <img src='../../assets/logo.png' alt="logo">
        </router-link>
    </div>
    <div class="content">
        <div class="sub-heading">
            <div class="intro">
                <img src='../../assets/logo.png' alt="logo">
                <span class="subtitle">Directory</span>
            </div>
            <div class="title">
                <p>Find your favourite Characters, Films, Species, Starships and Planets</p>
            </div>
            <div class="search">
                <span class="uk-margin-small-right" uk-icon="search" id="search"></span>
                <input type="text" name="search"  placeholder="Enter a search term">
            </div>
        </div>        
    </div>
</div>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style lang="scss" scoped>
    .container-fluid {
        background: white;
        background-image: url('../../assets/hero-banner.jpg');
        height: 90vh;
        display: flex;
        padding: 20px;
        flex-direction: column;
        .brandLogo {
            display: flex;
            padding: 50px;
            img {
                width: 165px;
                height: 80px;
            }
        }
        .content {
            display: flex;
            height: inherit;
            align-items: center;
            justify-content: center;
            img {
                width: 165px;
                height: 80px;
            }            
            .sub-heading{
                position: relative;
                padding: 5px;
                display: flex;
                align-items: center;
                flex-direction: column;
                .intro {
                    display: flex;
                    align-items: center;
                    // &:after {
                    //     content: '';
                    //     height: 2px;
                    //     width: 100%;
                    //     background: white;
                    //     position: absolute;
                    //     left: -4px;
                    //     bottom: -5px;
                    // }
                    .subtitle {
                        font-size: 42px;
                        font-weight: bold;
                        padding: 20px;
                        color: white;
                        letter-spacing: 1px;
                    }
                }
                .title {
                    max-width: 700px;
                    margin: 2rem;
                    color: white;
                    font-size: 1.5rem;
                    letter-spacing: 1px;
                }
                .search {
                    display: flex;
                    width: 100%;
                    position: relative;
                    input {
                        width: 100%;
                        padding: 20px 60px;
                        border-radius: 5px;
                        border: none;
                        color: #9E9E9E;
                        font-size: 1.3rem;
                        font-family: inherit;
                    }
                    #search {
                        position: absolute;
                        bottom: 22px;
                        left: 20px;
                    }
                }
            }
            
        }
    }
</style>