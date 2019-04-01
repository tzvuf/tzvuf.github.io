<template>
  <div class="main">
    <el-row :gutter="10" class="list">
      <el-col
        :lg="6"
        :md="6"
        :sm="12"
        :xl="6"
        :xs="12"
        v-for="v in list"
        :key="v.id"
        class="list_item"
      >
        <div @click="routeTo(v)">
          <div>
            <img class="list_img" :src="`/source/AA/${v.title}/page_1.jpg`">
          </div>
          <span v-text="v.category + '-' + v.title"></span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from '@/router';
import RAZ from '@/json/01.graded_reading_RAZ.json';
export default {
  name: 'Index',
  data() {
    return {
      list: RAZ
    };
  },
  methods: {
    routeTo({ id, title, category }) {
      router.push({ path: `/detail/${id}`, query: { id, title, category } });
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
.list_img {
  width: 100px;
}
</style>
