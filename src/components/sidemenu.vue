<template>

    <div class="side-menu">
      <div class="name">
        <div class="photo">
          <h1>USERNAME</h1>
          <img src="@/assets/images/me.jpg">
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
