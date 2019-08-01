<template>
    <div class="dash">
      <div class="columns">
        <div class="column is-full">
          <div class="box">
            ADD Stats
          </div>
          <b-button type="is-success" class=" is-pulled-right">Submit</b-button>
        </div>
      </div>
      <div class="columns">
        <div class="column is-full">
          <div class="box">
            ADD Meal
          </div>
          <b-button type="is-success" class=" is-pulled-right">Submit</b-button>
        </div>
      </div>
      <div class="columns">
        <div class="column is-full">
          <div class="box">
            ADD Workout
          </div>
          <b-button type="is-success" class=" is-pulled-right">Submit</b-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'contributions',
  components:{
    
  },
 data(){
   return {
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
</style>