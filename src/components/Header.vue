<template>
  <div class="container">
    <el-menu :router="true" :default-active="active" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item class="logo" index="/">home</el-menu-item>
      <el-menu-item index="/article?type=all">
        <i class="fa fa-flag" aria-hidden="true"></i> 文章</el-menu-item>
      <template v-if="user">
        <li class="el-menu-item right" @click="heandleExit">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          注销</li>

        <el-submenu index="5" class="right">
          <span slot="title"> {{ user.getUsername() }} </span>
          <el-menu-item index="me" :route="{ name:'User', params:{ id : user.id }}">我的主页</el-menu-item>
          <el-menu-item index="/article/create">发布文章</el-menu-item>
          <el-menu-item index="/article?type=me">我的文章</el-menu-item>
          <el-menu-item index="5-3">消息</el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item index="/signUp" class="right">
          <i class="fa fa-user-o" aria-hidden="true"></i> 注册</el-menu-item>
        <el-menu-item index="./signIn" class="right">
          <i class="fa fa-key" aria-hidden="true"></i> 登陆</el-menu-item>
      </template>

    </el-menu>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
// 导入vuex中的mapState方法
export default {

  name: 'Header',
  data() {
    return {
      active: '/'
    };
  },
  created() {
    this.active = this.$route.path;
    this.$router.afterEach((to, from) => {
      this.active = to.path;
    });
  },
  computed: mapState(['user']),
  // 将mapstate映射到计算属性当中
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions(['exit']),
    heandleExit() {
      this.exit();
      this.$api.SDK.User.logOut() // 退出SDk
      this.$message.success('成功退出');
    }

  }
};
</script>

<style lang="css" scoped>
.container {
  padding: 0 5%; 
  background: #eef1f6;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .4)
}

.right {
  float: right;
}

.logo {
  margin-left: 0;
  font-size: 24px;
  font-weight: 100;
  background: #1f6091;
  border-radius: 5px;
  color: #fff;
  margin-right: 10px
}

.logo:hover {
  background: #1f6091;
  border-bottom: #1f6091;
}
</style>