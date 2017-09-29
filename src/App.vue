<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <!-- 设置 progressbar -->
    <vue-progress-bar></vue-progress-bar>

  </div>
</template>

<script>
import MyHeader from '@/components/Header';

export default {
  name: 'app',
  components: {
    MyHeader
  },
  /**
   * 将prograss在整个app中完成注册调用
   */
  mounted() {
    this.$Progress.finish() //挂载完成结束
  },
  created() {
    this.$Progress.start() //创建时候开始调用 
    /**
     * 路由切换开始调用然后再路由切换结束后完成
     */
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
