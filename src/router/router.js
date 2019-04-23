import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Calendar from '../views/Calendar.vue'
import Records from '../views/Records.vue'
import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'

const routes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'calendar',
    path: '/calendar',
    component: Calendar
  },
  {
    name: 'records',
    path: '/records',
    component: Records
  },
  {
    name: 'settings',
    path: '/settings',
    component: Settings
  },
  {
    name: 'help',
    path: '/help',
    component: Help
  },
  {
    path: '/',
    redirect: '/dashboard'
  }
]

export default new VueRouter({
  routes
})