import Vue from 'vue'
import VueRouter from 'vue-router'
import Heroes from './components/Heroes'
import Equip from './components/Equip'
import Skill from './components/Skill'
import Add from './components/Add'
import Edit from './components/Edit'
const routes = [
  {path:'/heroes',component:Heroes},
  {path:'/equip',component:Equip},
  {path:'/skill',component:Skill},
  {path:'/heroes/add',component:Add},
  {path:'/heroes/edit/:id',name:'heroesEdit',component:Edit}
]
Vue.use(VueRouter)
const router= new VueRouter({routes})
export default router