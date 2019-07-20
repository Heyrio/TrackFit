<template>

    <div class="side-menu">
      <div class="name">
        <h1>USER NAME</h1>
        <div class="photo">
          <img :src="{me}">
        </div>
      </div>
    </div>
  
</template>

<script>
import me from '../public/images/me.jpg'

export default {
  name: 'sidemenu',
}
</script>

<style>
.name{
  color: white;
  display: flex;
  justify-content: center;
}
.side-menu{
  background-color: #43B984;
  box-shadow: 4px 2px 5px -2px rgba(0,0,0,0.75);
  border-right: 1px solid rgb(156, 153, 153);
  width: 33%;
  height: 100vh;
}
</style>
