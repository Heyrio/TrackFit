<template>
    <div class="dash">
      <div class="columns is-mobile">
          <div class="column is-one-third">
            <div><strong>Current Weight: {{weight}}</strong></div>
           <img class="man" src="http://pluspng.com/img-png/png-human-body-outline-body-outline-cliparts-2473421-210.png" alt="PNG Human Body Outline">
          </div>
          <div class="is-full">
            <apexchart width="500" type="line" :options="chartOptions" :series="series"></apexchart>
          </div>
      </div>
       <div>
   </div>
     <div class="container is-fluid">
        <div class="columns is-full is-mobile">
          <div class="column is-half">
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
import store from '../routes/store.js';
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'dash',
  components:{
    apexchart: VueApexCharts,
  },
 data(){
   return {
     weight: store.state.userData.weight,
     water: 2,
     calories: 1900,
     chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
   }
 }
}
</script>

<style>
*{
  font-size: 1.03em;
}
.dash{
  padding-left: 2%;
  padding-right: 2%;
}
.man{
  height: 75vh;
  color: #232323 !important;
}
.weight h1{
  text-align: center;
}
</style>