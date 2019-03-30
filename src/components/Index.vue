<template>
  <div class="main">
    <el-row :gutter="10" class="list">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" 
        v-bind:key="v.id" v-for="v in list"
        class="list_item">
          <div v-on:click="routeTo(v)">
            <div><img v-bind:src="`/source/AA/${v.title}/page_1.jpg`" class="list_img"/></div>
            <span v-text="v.category + '-' + v.title"></span>
          </div>
        </el-col>
    </el-row>
    
  </div>
</template>

<script>

import router from '@/router';
export default {
  name: "Index",
  props: {
    msg: String
  },
  data() {
    return {
      list: [
        {
          title: "Big",
          category: 'AA',
          id: "0"
        },{
          title: "Counting Bugs",
          category: 'AA',
          id: "1"
        },{
          title: "Counting Letters",
          category: 'AA',
          id: "2"
        }
      ]
    };
  },
  methods: {
    routeTo({ id, title, category }) {
      router.push({ path: `/detail/${id}`, query: { id, title, category }})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 1000px;
  margin: 0 auto;
}
.list {
  margin: 0;
}
.list_item {
  padding-top: 10px;
  margin-right: -1px;
  margin-top: -1px;
  cursor: pointer;
  transition: all 0.3s linear;
  line-height: 35px;
  border: solid 1px #ddd;
  text-align: center;
}
.list_item:hover {
  background-color: #eee;
}
.list_img{
  width: 100px;
}
</style>
