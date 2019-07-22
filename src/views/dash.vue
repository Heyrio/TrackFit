<template>
    <div class="dash">
     <div class="container is-fluid">
        <div class="columns is-full is-mobile">
          <i class="fas fa-running"></i>
        <div class="column is-half">
          <i class="fas fa-running"></i>
          <strong>Daily Calories Left: {{calories}} KCal</strong>
        <progress class="progress is-success" :value="calories" max="2100"></progress>
        </div>
        <div class="column is-half">
          <strong>Daily Water Intake Left: {{water}} Liters</strong>
        <progress class="progress is-link" :value="calories" max="2100"></progress>
        </div>
        </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'dash',
 data(){
   return {
     water: 2,
     calories: 1900,
   }
 }
}
</script>

<style>
*{
  font-size: 1.03em;
}
.dash{
  padding: 2%;
}
</style>