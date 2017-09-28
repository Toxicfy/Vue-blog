<template>
  <div class="container">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <section>
      <el-col :span="16" class="article-list">
        <ul >
          <li v-for="article in articles">
            <router-link :to="{ name:'ArticleShow', params: { id: article.id }}" class="item">
              {{ article.get('title') }}
            </router-link>

            <router-link :to="{name: 'User', params: { id: article.get('author').id}}" class="item">
              {{ article.get('author').get('username') }}
            </router-link>
          </li>
        </ul>
      </el-col>

      <el-col :span="6" class="right">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nemo tempora laboriosam molestias quidem, necessitatibus possimus eius vero, placeat adipisci quia amet quisquam doloribus fugit fuga? Fugit consequatur molestiae qui?
      </el-col>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  name: 'List',

  data() {
    return {
      title: '',
      articles: []
    };
  },
  created() {
    this.match();
  },
  watch: {
    ['$route.query']() {
      console.log('re render');
      this.articles = [];
      this.match();
    }
  },
  computed: mapState(['user']),
  methods: {
    match() {
      let flag = this.$route.query.type || this.$route.query.cid;

      this.$Progress.start();

      switch (flag) {
        case 'me':
          this.getMyArticles();
          break;
        case 'all':
          this.getAllArticles();
          break;
        default:
          this.getCategoryArticle(flag);
      }
    },
    query() {
      let q = new this.$api.SDK.Query('Article');
      q.include('category');
      q.include('author');
      q.descending('cratedAt'); // 新创建的在前面
      return q;
    },
    getCategoryObj(id) {
      return this.$api.SDK.Object.createWithoutData('Category', id);
    },
    setArticles(q) {
      q.find().then((articles) => {
        this.articles = articles;
        this.$Progress.finish();
      }).catch(this.fail);
    },
    fail(error) {
      this.$message.error(error);
      this.$Progress.fail();
    },
    getAllArticles() {
      this.title = "所有文章";
      const q = this.query();
      this.setArticles(q);
    },
    getMyArticles() {
      this.title = "我的文章";
      const q = this.query();
      this.setArticles(q);
    },
    // cid => category_id
    getCategoryArticle(cid) {
      let cateObj = this.getCategoryObj(cid);
      const q = this.query();
      q.equalTo('category', cateObj);
      this.setArticles(q);
    }
  }
};
</script>

<style lang="css" scoped>
h2 {
  text-align: center;
}

header {
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 5px;
  padding: 20px;
}

.article-list {
  margin: 0;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
}

li {
  width: 100%;
  height: 60px;
}

.right {
  padding: 20px;

}
</style>

