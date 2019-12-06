import Homepage from '../components/Featured Components/HomePage';
import AllStarships from '../components/Featured Components/Starships/allStarships.vue';
import AllPlanets from '../components/Featured Components/Planets/allPlanets.vue';
import StarshipDetail from '../components/Featured Components/Starships/starshipDetails.vue';
import AllCharacters from '../components/Featured Components/Characters/allCharacters.vue';


export default [
  { path: '/', redirect: '/Home' },
  { path: '/Home', name: 'home', component: Homepage },
  { path: '/starships', name: 'all-starships', component: AllStarships },
  { path: '/starship/:shipId', name:'starshipdetail', component: StarshipDetail, props: true },
  { path: '/planets', name: 'all-planets', component: AllPlanets },
  { path: '/characters', name: 'all-characters', component: AllCharacters },
  // { path: '/characters/:characterName', name: 'characterDetails', component: }
];