<template>
  <div class="hello">
    <div class="container">
      <div class="content">
        <div class="header">
          <!-- <h1>Welcome</h1> -->
          <div class="display-img">

            <img src="https://dummyimage.com/1100x420/eee/000&text=Welcome%20to%20Here" alt="这会是一个悬停后放大的图片 or 轮播图">
          </div>
        </div>
        <div class="content">
          <el-row>
            <!-- <h3>这里是一些乱七八糟的展示文件</h3> -->
            <el-col :span="12" class="items">
              <div class="grid-content bg-purple">
                <h2>What is Engati?</h2>
                <p>
                  Engati is a chatbot platform that allows you to build, manage, integrate, train, analyse and publish your personalized bot in a matter of minutes. It presently supports eight major messaging platforms including messenger, kik, telegram, line, viber, skype, slack and webchat with a focus on customer engagement.
                </p>
                <p>
                  Building bots was never that easy. Using Engati you can design your very own chat bots with a workflow and no programming required.
                </p>
                <p>
                  Building bots was never that easy. Using Engati you can design your very own chat bots with a workflow and no programming required.
                </p>
                <br>
                <div>
                  <span>GET THE ENGATI E-BROCHURE</span>
                  <el-button type="danger">按钮</el-button>
                </div>
              </div>
            </el-col>

            <el-col :span="12" class="items">
              <div class="grid-content bg-purple">
                <img src="https://dummyimage.com/600x360/eee/000&text=可以放video" alt="这会是一个悬停后放大的图片 or 轮播图">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
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
.header {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 440px;
}

.display-img {
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.items {
  padding: 20px;
}
</style>
