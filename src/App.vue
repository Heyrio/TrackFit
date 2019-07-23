<template>
  <div id="app">
    <div class="columns">
      <div>
        <sidemenu v-if="homePage()"></sidemenu>
      </div>
      <div class="column is-two-thirds">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import sidemenu from '@/components/sidemenu.vue'

export default {
  name: 'app',
  components:{
    sidemenu
  },
  data(){
    return{
    }
  },
  methods:{
    
     homePage() {
      if(this.$route.path == "/") {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style>
 * { margin: 0 !important; 
 }

</style>
