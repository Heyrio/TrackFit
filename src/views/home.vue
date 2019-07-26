<template>
    <div class="home">
        
        <div class="columns is-centered">
          <div class="column is-full">
            <h1>TrackFit</h1>
            <p>( A place to log your fitness activities )</p>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-one-third">
            <div class="box">
              <div class="columns is-centered">
                <div class="field">
                  <div class="column is-half">
                    <div>
                      <label>Email: <input type="email" placeholder=""></label>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div>
                      <label>Password: <input type="password" placeholder=""></label>
                   </div>
                  </div>
                  <div class="columns is-pulled-right">
                <div class="column is-full ">
                  <button class="button is-primary">Register</button>
                  <button @click="$router.push('Dashboard')" class="button is-success">Login</button>
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
import axios from 'axios';
export default {
  name: 'home',
  components:{
   
  },
 data(){
   return {
    data: null,
   }
 },
  mounted(){
    this.dataCall();
  },
 methods:{
   dataCall(){
     let uri = 'http://localhost:4000/';
      axios
            .get(uri)
            .then((response) => {
              this.data = response.data;
              /*eslint-disable*/
              console.log(this.data);
          });
        },
   }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
  html{
    background-color: blue;
  }
  .column>p{
    display: flex;
    justify-content: center;
    color: #fff;
  }
  .column >h1{
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 5em;
    color: #fff;
    text-shadow: 2px 2px #232323;
  }
  .button{
    margin-right: 2px !important;
  }
</style>