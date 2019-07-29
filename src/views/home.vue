<template>
    <div class="home">
        <div class="columns is-centered">
          <div class="column is-full">
            <h1>TrackFit</h1>
            <p>(A place to log your fitness activities)</p>
          </div>
        </div>
        <div class="columns is-centered">
          <div v-if="isRegister === false" class="column is-one-third">
            <div  class="box">
              <div class="columns is-centered">
                <div class="field">
                  <form onsubmit="return false">
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
                  <button @click="registerPage()" class="button is-info">Register</button>
                  <button @click="$router.push('Dashboard')" class="button is-success">Login</button>
                </div>
               </div>
               </form>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isRegister === true">
            <div class="box">
              <div class="field">
               <div class="columns">
                  <div class="column">
                     <div>
                      <h1>First Name:</h1>
                      <input type="text" placeholder="">
                    </div>
                  </div>
                  <div class="column">
                    <div>
                      <h1>Last Name:</h1>
                      <input type="text" placeholder="">
                    </div>
                  </div>
                </div>
                    <div class="columns">
                  <div class="column">
                    <div>
                      <h1>Email:</h1>
                   <input type="email" placeholder="">
                    </div>
                  </div>
                  <div class="column">
                    <div>
                      <h1>Password:</h1>
                   <input type="password" placeholder="">
                    </div>
                  </div>
                </div>
                  <div class="columns">
                  <div class="column">
                       <div>
                      <h1>Current Weight:</h1>
                   <input type="text" placeholder="">
                    </div>
                    
                  </div>
                  <div class="column">
                     <div>
                      <h1>Age:</h1>
                   <input type="text" placeholder="">
                    </div>
                  </div>
                </div>
                    <div class="columns">
                  <div class="column">
                    <div>
                      <h1>Height:</h1>
                    <b-select placeholder="Height" icon="account">
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                   </b-select>
                    </div>
                  </div>
                  <div class="column">
                      <div class="columns is-pulled-right">
                <div class="column is-full ">
                  <button @click="registerPage()" class="button is-info">Return</button>
                  <button @click="$router.push('Dashboard')" class="button is-success">Create Account</button>
                </div>
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
     height: [],
    isRegister: false,
    data: null,
   }
 },
  mounted(){
    this.dataCall();
  },
 methods:{
   registerPage(){
     if(this.isRegister === false){
       this.isRegister = true;
     }else{
       this.isRegister = false;
     }

     
   },
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
/* *{
  border: 1px solid red;
} */
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