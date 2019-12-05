import Homepage from '../components/Featured Components/HomePage';
import AllStarships from '../components/Featured Components/Starships/allStarships.vue'
// import AllCharacters from '../components/Features/Characters/AllCharacters'
// import AllPlanets from '../components/Features/Planets/AllPlanets'
// import Character from '../components/Features/Characters/Character'
// import Planet  from '../components/Features/Planets/Planet'
import StarshipDetail from '../components/Featured Components/Starships/starshipDetails.vue';
// import Loader from '../components/shared/Loader'

export default [
  { path: '/', redirect: '/Home' },
  { path: '/Home', name: 'home', component: Homepage },
//   { path: '/Loader', name: 'loader', component: Loader },
  { path: '/starships', name: 'all-starships', component: AllStarships },
//   { path: '/all-characters', name:'all-characters', component: AllCharacters },
//   { path: '/all-planets', name: 'all-planets', component: AllPlanets },
//   { path: '/planet/:name', name:'planet', component: Planet, props: true },
  { path: '/starship/:shipname', name:'starshipdetail', component: StarshipDetail, props: true },
//   { path: '/character/:name', name:'character', component: Character, props: true }
];