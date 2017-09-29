<template>
  <div class="pad2x">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <section>
      <div class="article-list ">
        <ul>
          <li v-for="article in articles">
            <div class="article-content">
              <div class="img">
                <img src="https://dummyimage.com/300x120/#999/000" alt="img">
              </div>
              <div class="info">
                <router-link :to="{ name:'ArticleShow', params: { id: article.id }}">
                  <p class="article-title">
                    {{ article.get('title') }}
                  </p>
                </router-link>
                <br>
                <router-link :to="{name: 'User', params: { id: article.get('author').id}}">
                  {{ article.get('author').get('username') }}
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
}

.article-content {
  /* background: #fafafa; */
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
}
.article-content .img{
  margin-right: 50px;
}
.article-list {
  width: 76%;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3)
}

.article-list li {
  display: inline;
}

.article-list .info {
  display: inline-block;
}

.article-title{
  font-size: 18px;
  line-height: 24px; 
}
</style>

