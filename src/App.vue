<template>
  <div id="app">
    store的属性：{{ $store.state.count }}
    <hr />
    计算属性：{{ name }}
    <hr />
    辅助函数 :{{ count }}
    <hr />
    点击数据切换：{{ count }}
    <!-- <button @click="$store.commit('add', 12)">点击</button> -->
    <!-- <button @click="add(12)">点击</button> -->
    <button @click="abc(12)">点击</button>
    <hr />
    <button @click="$store.dispatch('anscyAdd', 23)">定时器1</button>
    <hr />
    <button @click="asyadd(12)">定时器2</button>
    <hr />
    <button @click="astadd(12)">定时器3</button>
    <hr />
    getters属性:{{ $store.getters.filterList }}
    <hr />
    <div>{{ getSchoolName }}</div>
  </div>
</template>

<script>
//导入mapGetters
import { mapGetters } from "vuex";
//导入mapActions
import { mapActions } from "vuex";
//导入mapMutations
import { mapMutations } from "vuex";
// 导入mapState
import { mapState } from "vuex";
// 采用数组形式引入state属性
console.log(mapState(["count", "name"]));

export default {
  name: "App",
  mounted() {
    console.log(this.$store);
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    // 传入数组指定需要映射的字段
    // 将结果用...合并到原来的计算属性中
    // 利用延展运算符将导出的状态映射给计算属性
    ...mapState(["count", "name"]),
    ...mapGetters(["filterList", "getSchoolName"]),
  },
  // methods: {
  //   add(data) {
  //     this.$store.commit("add", data);
  //   },
  // },
  methods: {
    // ...mapMutations(["add"]),
    ...mapMutations({
      abc: "add",
    }),
    asyadd(data) {
      this.$store.dispatch("anscyAdd", data);
    },
    // ...mapActions(["anscyAdd"]),
    ...mapActions({
      astadd: "anscyAdd",
    }),
  },
};
</script>

<style>
</style>
