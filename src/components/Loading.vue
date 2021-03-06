<template>
  <div class="loading">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .loading .item{
        display:inline-block;
        width:8px;
        height:40px;
        margin-right:5px;
        border-radius:4px;
        background-color: #12d33c;
        animation:animate ease 1s infinite;
    }
    .loading .item:nth-of-type(2){
        animation-delay:.2s;
    }
    .loading .item:nth-of-type(3){
        animation-delay:.4s;
    }
    .loading .item:nth-of-type(4){
        animation-delay:.6s;
    }
    .loading .item:nth-of-type(5){
        animation-delay:.8s;
    }
    
    @keyframes animate{
        0%,100%{
            transform:scaleY(1);
        }
        50%{
            transform:scaleY(1.5);
        }
    }
</style>