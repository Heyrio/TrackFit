<template>
    <div class="side-menu">
      <div class="columns">
        <div class="column">
          <div class="name">
            <div class="photo">
              <h1>Hamzah Amer</h1>
                <img class="responsive " src="@/assets/images/me.jpg">
            </div>
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
 a{
  color: #fff !important;
  font-weight: 600;
}
a:hover{
  color: #43B984 !important;
}
.photo h1{
  text-align: center;
  margin-bottom: 25px !important;
}
.photo img {
  border-radius: 200px;
  height: 200px;
}
.photo{
  float: right;
  width: 200px;
  height: 200px;
}
.name{
  color: white;
  display: flex;
  justify-content: center;
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
