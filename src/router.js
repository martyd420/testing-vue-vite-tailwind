import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from './StartScreen.vue'
import Questions from './Questions.vue'
import GameOver from './pages/GameOver.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: StartScreen,
    },
    {
        path: '/questions',
        component: Questions,
    },
    {
      path: '/game-over',
      name: 'GameOver',
      component: GameOver,
      props: true,
  },
  ]
})