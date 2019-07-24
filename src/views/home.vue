<template>
    <div class="home">
        
        <div class="columns is-centered">
          <div class="column is-full">
            <h1>TrackFit</h1>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="box">
              <div class="columns is-centered">
                <div class="field">
                  <div class="column is-half">
                    <div>
                      <label>Username: <input type="text" placeholder=""></label>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div>
                      <label>Password: <input type="password" placeholder=""></label>
                   </div>
                  </div>
                  <div class="columns is-pulled-right">
                <div class="column is-full ">
                  <button class="button is-primary">Login</button>
                </div>
               </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: 'home',
  components:{
   
  },
 data(){
   return {
   }
 },
 methods:{

 }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
  html{
    background-color: blue;
  }

  .column >h1{
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 5em;
    color: #fff;
    text-shadow: 2px 2px #232323;
  }
</style>