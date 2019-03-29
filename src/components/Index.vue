<template>
  <div class="main">
    <ol class="list">
      <li
        :key="v.id"
        v-for="v in list"
        class="list_item"
        @click="routeTo(v)"
      >{{v.category}} - {{ v.title }}</li>
    </ol>
    
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
  width: 1000px;
  margin: 0 auto;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.list_item {
  padding-left: 15px;
  cursor: pointer;
  transition: all 0.3s linear;
  line-height: 35px;
  border-bottom: solid 1px #ddd;
}
.list_item:hover {
  background-color: #eee;
}
</style>
