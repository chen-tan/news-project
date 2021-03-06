<template>
  <div class="error" :class="{hide:!err,'txt-center':isCenter}">
      {{ err }}
  </div>
</template>

<script>
export default {
    props:{
        err:{
            type:String,
            default:'',
        },
        isCenter:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped lang="scss">
.error{
        height:16px;
        padding-left:100px;
        font-size:12px;
        color:#f80000;
        &.hide{
          visibility:hidden;
        }
        &.txt-center{
          text-align:center;
        }
      }
</style>