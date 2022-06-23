<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  transition: background 600ms ease;
  cursor: pointer;
}

.btn:hover {
  background: teal;
  color: aliceblue;
}
</style>