<template>
    <div class="dash">
      <div class="columns is-mobile">
          <div class="column is-one-third">
            <apexchart class="is-full" width="900" type="heatmap" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
      </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'dash',
  components:{
    apexchart: VueApexCharts,
  },
 data(){
   return {
     weight: 194,
     water: 2,
     calories: 1900,
     chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7'],
            
          }
        },
        series: [{
            name: 'Week1',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },{
            name: 'Week2',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Week3',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Week4',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          }]
   }
 },
 methods:{
   generateData(count, yrange){
      var i = 0;
      var series = [];
      while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
   }
 }
}
</script>

<style scoped>
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