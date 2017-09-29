<template>
  <div class="hello">
    <div class="header">
      <div class="text1">
        <p>一些人在背后工作着</p>
      </div>
      <div class="header-img"></div>
      <div class="text2">
        <p>于是，一个个网站便出现在了人们的眼前</p>
      </div>

    </div>
    <div class="center">
      <el-row class="card pad">
        <div class="card2">
          <el-col class="item" :span="8">
            <div class="item-img img1"></div>
            <h2>设计师</h2>
            <p> 设计师是从人与事物分析再以有道理的构造，他们通常在专门领域创造或提供创意，并利用各种视与道理方式传达的方式，表现法的功力作品，即设计师的实力
            </p>
          </el-col>
          <el-col class="item" :span="8">
            <div class="item-img img2"></div>
            <h2>前端工程师</h2>
            <p> 前端工程师是互联网时代软件产品研发中不可缺少的一种专业研发角色。从广义上来讲，所有用户终端产品与视觉和交互有关的部分，都是前端工程师的专业领域。</p>
          </el-col>
          <el-col class="item" :span="8">
            <div class="item-img img3"></div>
            <h2>后端工程师</h2>
            <p> 后端工程师同样是互联网时代软件产品研发中不可缺少的一种专业研发角色。负责与前台的数据对接，数据库的存储优化等等</p>
          </el-col>
        </div>
      </el-row>
      <el-row class="card pad">
        <el-col :span="15">
          <video class="video" autoplay="true" loop="loop" width="710px" height="440px">
            <source src="//c1.mifile.cn/f/i/16/mix/summary/01.mp4" type="video/mp4">
          </video>
        </el-col>
        <el-col :span="9" class="center-text">

          <h2>探索的精神--mix</h2>
          <p>
            敢于探索前沿未知领域，全面屏的小米MIX是雷军的探索产品，甚至可以说是冒了很大的风险的，这就是一个有进取精神的企业家的特质.
          </p>
          <p>
            这同时也是工程师应有的精神,所以还是要膜拜and学习的；
          </p>

          <div>
            <p>然而感觉
              <b>mix2</b> 没有 mix 好看~~~</p>
            <br>
            <el-button type="danger">To article</el-button>
          </div>

        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {}
  }
}
</script>
<style scoped>
.header .header-img {
  padding-left: 10px;
  margin: 0 auto;
  width: 900px;
  height: 300px;
  background-size: cover;
  background-image: url(../assets/codeEdit.png)
}

.header .text1 {
  margin-top: 50px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 3rem;
}

.header .text2 {
  text-align: center;
  font-size: 20px;
  line-height: 2.7rem;
  margin: 50px auto;
  padding-left: 30px;
  color: rgba(0, 0, 0, 0.7);
}

.card {
  height: 500px;
  display: flex;
  align-items: center;
}

.card .center-text {
  padding-right: 20px;
  margin-top: 30px;
}

.card {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.card2 {
  margin-left: 40px;
  padding: 10px;
}


.card2 .item-img {
  width: 100%;
  height: 200px;
  background-size: 70%;
  background-repeat: no-repeat;
}

.img1 {
  background-image: url(../assets/2.svg)
}

.img2 {
  background-image: url(../assets/1.svg)
}

.img3 {
  background-image: url(../assets/3.svg)
}

.item p{
  width: 85%;
}

</style>
