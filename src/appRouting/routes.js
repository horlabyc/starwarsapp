import Homepage from '../components/Featured Components/HomePage';
import AllStarships from '../components/Featured Components/Starships/allStarships.vue';
import AllPlanets from '../components/Featured Components/Planets/allPlanets.vue';
import StarshipDetail from '../components/Featured Components/Starships/starshipDetails.vue';
import AllCharacters from '../components/Featured Components/Characters/allCharacters.vue';
import CharacterDetails from '../components/Featured Components/Characters/characterDetails.vue';
import PlanetDetails from '../components/Featured Components/Planets/planetDetails.vue';

export default [
  { path: '/', redirect: '/Home' },
  { path: '/Home', name: 'home', component: Homepage },
  { path: '/starships', name: 'all-starships', component: AllStarships },
  { path: '/starship/:shipId', name:'starshipdetail', component: StarshipDetail, props: true },
  { path: '/planets', name: 'all-planets', component: AllPlanets },
  { path: '/planets/:Id', name:'planetdetail', component: PlanetDetails, props: true},
  { path: '/characters', name: 'all-characters', component: AllCharacters },
  { path: '/characters/:Id', name:'characterdetail', component: CharacterDetails, props: true}
  // { path: '/characters/:characterName', name: 'characterDetails', component: }
];