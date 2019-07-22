<template>
  <div id="app">
    <div class="columns">
      <div class="colum">
        <sidemenu></sidemenu>
      </div>
      <div class="column is-full">
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
  }
}
</script>

<style>
 * { margin: 0 !important; }

</style>
