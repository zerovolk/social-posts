<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="navbar__logo">Social Posts</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 15px;">О сайте</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 15px;">store</my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {}


}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}

.navbar__logo {
  cursor: pointer;
}
</style>