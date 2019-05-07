<template>
  <div id="app" class="container">
           <app-nav></app-nav>
      <div class="col-md-2">
        <div class="row">
           <app-slider></app-slider>
        </div>
      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import AppNav from './components/AppNav'
import AppSlider from './components/AppSlider'
export default {
  name: 'app',
  components:{
     AppNav,
     AppSlider
  },
  data () {
    return {
    }
  }
}
</script>

<style>


 
</style>
