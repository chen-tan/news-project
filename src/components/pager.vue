<template>
  <div class="pager">
    <a
      class="pager-item"
      :class="{ disable: page === 1 }"
      href=""
      @click.prevent="pageChange(1)"
      >首页</a
    >
    <a
      class="pager-item"
      :class="{ disable: page === 1 }"
      href=""
      @click.prevent="pageChange(page - 1)"
      >上一页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{active:page===item}"
      v-for="item in pageArr"
      :key="item"
      @click.prevent="pageChange(item)"
    >{{ item }}</a>
    <a
      class="pager-item"
      :class="{ disable: page === pageNumber }"
      href=""
      @click.prevent="pageChange(page + 1)"
      v-if="page !== total"
      >下一页</a
    >
    <a
      class="pager-item"
      :class="{ disable: page === pageNumber }"
      href=""
      @click.prevent="pageChange(pageNumber)"
      v-if="page !== total"
      >尾页</a
    >
    <div class="pager-text">{{ page }} / {{ pageNumber }}</div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    panelNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    pageArr() {
      let arr=[];
      for(let i=this.minNumber;i<=this.maxNumber;i++){
        arr.push(i);
      }
      return arr;
    },
    minNumber(){
      let min = Math.ceil(this.page-this.panelNumber/2);
      if(min<1){
        min=1;
      }
      return min;
    },
    maxNumber(){
      let max=this.minNumber+this.panelNumber-1;
      if(max>this.pageNumber){
        max=this.pageNumber;
      }
      return max;
    }
  },
  methods: {
    pageChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.page) {
        return;
      }
      this.$emit("page-change", newPage);
    },
  },
};
</script>

<style scoped>
.pager {
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pager .pager-item {
  
  min-width:30px;
  padding: 3px 5px;
  margin: 0 2px;
  border: 1px solid #c1c1c1;
  color: #15b6e7;
  text-align:center;
}
.pager .pager-item:hover {
  background-color: #919191;
  color: #228cac;
}
.pager .pager-item.active {
  background-color: #fff;
  color: #000;
  border: none;
}
.pager .pager-item.disable {
  background-color: #efefef;
  color: #a6a6a6;
}
</style>