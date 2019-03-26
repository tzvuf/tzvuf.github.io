<template>
  <div class="main">
    <ol class="list">
      <li
        :key="v.id"
        v-for="(v, idx) in list"
        class="list_item"
        @click="routeTo(v)"
      >{{idx}} - {{ v.title }}</li>
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
          title: "Brown Bear",
          id: "0"
        }
      ]
    };
  },
  methods: {
    routeTo({ id, title }) {
      router.push({ path: `/detail/${id}`, query: { id, title }})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
