<template>
    <div class="dash">
     <div class="container is-fluid">
        <div class="columns is-full is-mobile">
        
        <strong>Daily Calories</strong>
        <progress class="progress is-success" :value="calories" max="150">60%</progress>
        
        </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'dash',
 data(){
   return {
     calories: 100,
   }
 }
}
</script>

<style>
*{
  font-size: 1.03em;
}
</style>