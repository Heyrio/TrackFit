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
                      <label>Email: <input type="email" placeholder="" ref="email"></label>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div>
                      <label>Password: <input type="password" placeholder="" ref="pass"></label>
                   </div>
                  </div>
                  <div class="columns is-pulled-right">
                <div class="column is-full ">
                  <button @click="registerPage()" class="button is-info">Register</button>
                  <button @click="checkUser()" class="button is-success">Login</button>
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
            <form onsubmit="return false">
               <div class="columns">
                  <div class="column">
                     <div>
                      <h1>First Name:</h1>
                      <input type="text" placeholder="" ref="first">
                    </div>
                  </div>
                  <div class="column">
                    <div>
                      <h1>Last Name:</h1>
                      <input type="text" placeholder="" ref="last">
                    </div>
                  </div>
                </div>
                    <div class="columns">
                  <div class="column">
                    <div>
                      <h1>Email:</h1>
                   <input type="email" placeholder="" ref="email">
                    </div>
                  </div>
                  <div class="column">
                    <div>
                      <h1>Password:</h1>
                   <input type="password" placeholder="" ref="pass">
                    </div>
                  </div>
                </div>
                  <div class="columns">
                  <div class="column">
                       <div>
                      <h1>Current Weight:</h1>
                   <input type="text" placeholder="" ref="weight">
                    </div>
                  </div>
                  <div class="column">
                     <div>
                      <h1>Age:</h1>
                    <input type="text" placeholder="" ref="age">
                    </div>
                  </div>
                </div>
                    <div class="columns">
                  <div class="column">
                    <div>
                      <h1>Height:</h1>
                    <b-select placeholder="Height" icon="account" ref="height">
                      <option v-for="height in heights" :key="height">{{height}}</option>
                   </b-select>
                    </div>
                  </div>
                  <div class="column">
                      <div class="columns is-pulled-right">
                <div class="column is-full ">
                  <button @click="registerPage()" class="button is-info">Return</button>
                  <button @click="postUser()" type="submit" class="button is-success">Create Account</button>
                </div>
               </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      </div>
</template>

<script>
import axios from 'axios';
import User from '@/model/User.js'
import store from '../routes/store.js';
export default {
  name: 'home',
  components:{
   
  },
 data(){
   return {
    uri: 'http://localhost:4000/',
    heights: ["4'10","4'11","5'0","5'1","5'2","5'3",
    "5'4","5'5","5'6","5'7","5'8","5'9","5'10","5'11",
    "6'0","6'1","6'2","6'3","6'4"],
    isRegister: false,
    data: null,
   }
 },
  mounted(){
  
  },
 methods:{
    parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    /*eslint-disable*/
    store.commit('updateUserPermission', JSON.parse(jsonPayload).allowed);
    store.commit('updateUserData', JSON.parse(jsonPayload).user);
},
   checkUser(){
     /*eslint-disable*/
     let tempV = [];
     tempV.push(this.$refs.email.value);
     tempV.push(this.$refs.pass.value);
        axios
            .post(this.uri + "findUser", tempV )
            .then((response) => {
              if(response.data){
                localStorage.setItem('accessToken', response.data);
                this.parseJwt(localStorage.getItem('accessToken'));
                this.$router.push('/dashboard');
              }
              /*eslint-disable*/
          });
   },
   postUser(){
     let user = new User();
     user.firstName = this.$refs.first.value;
     user.lastName = this.$refs.last.value;
     user.email = this.$refs.email.value;
     user.password = this.$refs.pass.value;
     user.age = this.$refs.age.value;
     user.height = this.$refs.height.selected;
     user.weight = this.$refs.weight.value;
     /*eslint-disable*/
       axios
            .post(this.uri, user)
            .then((response) => {
              console.log(response);
              this.data = response;
              /*eslint-disable*/
              console.log(this.data);
          })
          .catch((error)=>{
            console.log(error);
          });
          this.isRegister = false;
   },
   registerPage(){
     if(this.isRegister === false){
       this.isRegister = true;
     }else{
       this.isRegister = false;
     }
   },
   dataCall(){
      axios
            .get(this.uri + "all")
            .then((response) => {
              localStorage.setItem('accessToken', response.data.token);
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