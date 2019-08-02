<template>
    <div class="side-menu">
      <div class="columns">
        <div class="column photo">
          <h1>{{firstName+" "+lastName}}</h1>
          <div @click="toggleWindow()" class="pic-box">
            <img class="is-fluid" src="@/assets/images/defaultPic.png">
            </div>
        </div>
      </div>
     <div class="columns">
        <div class="column">
          <div>
        <aside class="menu">
          <div v-bind:class="[imgWindow ? 'is-active modal' : 'modal']" >
            <div class="modal-background"></div>
              <div class="modal-content">
                  <div class="columns is-centered">
                    <div class="column is-half">
                      <div class="box"><h1><b>Select Your Profile Image</b></h1>
                        <input type="file" name="pic" accept="image/*">
                        <b-button type="is-success" class=" is-pulled-right">Upload</b-button>
                      </div>
                    </div>
                  </div>
               </div>
            <button @click="toggleWindow()" class="modal-close is-large" aria-label="close">upload</button>
          </div>
        <ul class="menu-list">
          <li>
            <ul>
              <router-link to="/dashboard">My Dashboard</router-link>
              <router-link to="/log">Update Log</router-link>
              <router-link to="/stats">Fitness Stats</router-link>
              <router-link to="/routine">Gym Routine</router-link>
              <router-link to="/history">History</router-link>
              <router-link to="/" @click.native="removeToken()">Logout</router-link>
            </ul>
          </li>
        </ul>
      </aside>
     </div>
    </div>
  </div>
</div>
</template>

<script>
import store from '../routes/store.js';
export default {
  name: 'sidemenu',
  data(){
  return{
      imgWindow: false,
      firstName: store.state.userData.firstName,
      lastName: store.state.userData.lastName,
    }
  },
  methods:{
    toggleWindow(){
     this.imgWindow = !this.imgWindow;
    },
    removeToken(){
      localStorage.removeItem('accessToken');
    },
  },
}

</script>

<style scoped>
*{
  font-size: 1.03em;
}
.selected{
  background-color: #f5F5F5 !important;
  color: #43B984 !important;
}
.pic-box{
  display: flex;
  justify-content: center;
  cursor: pointer;
}
 a{
  color: #fff !important;
  font-weight: 600;
}
a:hover{
  color: #43B984 !important;
}
.photo h1{
  color: white;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px !important;
}
.photo img {
  display: flex;
  justify-content: center;
  border-radius: 100%;
  width: 65%;
}
.side-menu{
  padding: 50px;
  background-color: #43B984;
  box-shadow: 4px 2px 5px -2px rgba(0,0,0,0.75);
  border-right: 1px solid rgb(156, 153, 153);
  width: 100%;
  height: 100vh;
}
</style>
