<template>
    <div class="side-menu">
      <div class="columns is-multiline is-mobile">
        <div class="column photo">
          <h1>Hamzah Amer</h1>
          <div class="pic-box">
            <img class="" src="@/assets/images/me.jpg">
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
              <a>Stats</a>
              <a>Graph</a>
              <a>Lorem, iporibus harum.</a>
              <a>Invitati;dslfkmasmdfons</a>
              <a>CloudsfsdfSettings</a>
              <a>Autdsfasdtion</a>
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
}
</script>

<style>
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
  border-radius: 200px;
  height: 200px;
}
.side-menu{
  padding: 50px;
  background-color: #43B984;
  box-shadow: 4px 2px 5px -2px rgba(0,0,0,0.75);
  border-right: 1px solid rgb(156, 153, 153);
  width: 33%;
  height: 100vh;
}
</style>
