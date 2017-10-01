<template>
  <div class="pad2x">
    <template v-if="article">
      <h2>{{ article.get('title') }}</h2>

        <p> {{ article.get('author').get('username') }}</p>
        <p> {{ article.get('author').get('updatedAt') }}</p>

      <div class="content" v-html="article.get('content')"></div>
      <div class="oprator" v-if="uid == article.get('author').id">
        <router-link :to="{name:'ArticleEdit',params:{id:article.id}}">
          <el-button type="warning">修改</el-button>
        </router-link>

        <el-button type="danger" @click="destroy">删除</el-button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'index',

  data() {
    return {
      article: null
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getArticle(id);
  },
  computed: {
    ...mapGetters(['uid'])
  },
  methods: {
    getArticle(id) {
      const q = new this.$api.SDK.Query('Article');
      q.include('author');
      q.include('category');
      q.get(id).then((article) => {
        this.article = article;
        this.$Progress.finish();
      }).catch(console.log)
    },
    destroy() {
      this.article.destroy().then(() => {
        this.$message({ type: 'success', message: '删除成功' });
        this.$router.replace({ path: '/article?type=all' });
      })
    }
  }
};
</script>

<style lang="css" scoped>
.pad2x {
  margin: 20px;
}

.content {
  margin-top: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.oprator {
  margin-top: 30px;
}
p{
  display: inline;
  margin-right: 10px;
  color: #999;
}
</style>
