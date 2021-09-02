import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import EventCreate from '../views/EventCreate.vue'
import EventShow from '../views/EventShow.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Event-List',
    component: EventList,
  },
  {
    path: '/event/create',
    name: 'Event-Create',
    component: EventCreate,
  },
  {
    path: '/event/:id',
    name: 'Event-Show',
    component: EventShow,
    props: true,
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
