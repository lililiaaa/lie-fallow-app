import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Image from './views/image/Image.vue'
import MusicDetail from './views/music/MusicDetail.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import ImageTail from './views/image/ImageTail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component:Music
    },
      {
        path:'/book',
          name:'/book',
          component:Book
      },
      {
          path:'/image',
          name:'/image',
          component:Image
      },
      {
        path:'/musicdetail',
          name: 'musicdetail',

          component:MusicDetail
      },
      {
          path:'/imagetail',
          name: 'imagetail',
          component:ImageTail
      },
      {
          path:'/moviedetail',
          name: 'moviedetail',
          component:MovieDetail
      }
  ]
})
