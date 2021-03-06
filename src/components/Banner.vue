<template>
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoMove">
    <ul class="pic-list"
     :style="{width:100*imgList.length +'%',
     marginLeft:-100*curIndex + '%'
     }"
    >
      <li class="pic"
       v-for="img in imgList"
       :key="img.id"
      >
        <a href="">
          <img :src="img.src" alt="" />
        </a>
      </li>
    </ul>
    <ul class="dot-list">
        <li 
         class="dot"
         :class="{active:i===curIndex}"
         v-for="(dot,i) in imgList.length"
         :key="dot"
         @mouseover="curIndex=i"
        ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    imgList: {
      type: Array,
      required: true,
    },
    duration:{
        type:Number,
        default:2000
    }
  },
  data(){
      return {
          curIndex:3,
          timer:null,
      }
  },
  methods:{
      autoMove(){
          this.timer = setInterval(()=>{
              this.curIndex=++this.curIndex % this.imgList.length;
          },this.duration)
      },
      autoStop(){
          clearInterval(this.timer);
          this.timer=null;
      }
  },
  created(){
      this.autoMove();
  }
};
</script>

<style scoped>
.banner-container {
  position: relative;
  width: 1080px;
  height: 250px;
  overflow: hidden;
}
.banner-container .pic-list {
  display: flex;
  transition:all .5s;
}

.banner-container .pic-list img {
  width: 1080px;
  height: 250px;
}
.banner-container .dot-list {
  position: absolute;
  right: 10px;
  bottom: 5px;
  display: flex;
}
.banner-container .dot-list .dot {
  width: 8px;
  height: 8px;
  margin-right: 10px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: #fff;
  background-clip: padding-box;
  cursor: pointer;
}
.banner-container .dot-list .dot:hover {
  background-color: #1addca;
  border-color: #fff;
}
.banner-container .dot-list .dot.active {
  background-color: #1addca;
}
</style>
