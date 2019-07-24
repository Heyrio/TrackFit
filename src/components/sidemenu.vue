<template>
    <div class="side-menu">
      <div class="columns">
        <div class="column photo">
          <h1>Hamzah Amer</h1>
          <div class="pic-box">
            <img class="is-fluid" src="@/assets/images/me.jpg">
            </div>
        </div>
      </div>
     <div class="columns">
        <div class="column">
          <div>
        <aside class="menu">
        <ul class="menu-list">
          <li>
            <ul>
              <router-link to="/dashboard" @click.native="menuSelect(1)" :class="{ selected: item1 }">My Dashboard</router-link>
              <router-link to="/log" @click.native="menuSelect(2)" :class="{ selected: item2 }">Update Log</router-link>
              <router-link to="/stats" @click.native="menuSelect(3)" :class="{ selected: item3 }">Fitness Stats</router-link>
              <router-link to="/routine" @click.native="menuSelect(4)" :class="{ selected: item4 }">Gym Routine</router-link>
              <router-link to="/History" @click.native="menuSelect(5)" :class="{ selected: item5 }">History</router-link>
              <router-link to="/" @click.native="menuSelect(6)" :class="{ selected: item6 }">Logout</router-link>
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
export default {
  name: 'sidemenu',
  data(){
  return{
      item1: true,
      item2: false,
      item3: false,
      item4: false,
      item5: false,
      item6: false,

    }
  },
  methods:{
    menuSelect(item){
      if(item === 1){
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      this.item6 = false;
      }else if(item === 2){
      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      this.item6 = false;
      }else if(item === 3){
      this.item1 = false;
      this.item2 = false;
      this.item3 = true;
      this.item4 = false;
      this.item5 = false;
      this.item6 = false;
      }else if(item === 4){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = true;
      this.item5 = false;
      this.item6 = false;
      }else if(item === 5){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = true;
      this.item6 = false;
      }else if(item === 6){
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      this.item6 = true;
      }
     
    }
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
