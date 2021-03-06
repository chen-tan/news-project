<template>
  <div class="center">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .center{
        width:1080px;
        position:fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>