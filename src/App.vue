<template>
  <div id="app">
    <sidemenu></sidemenu>
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
