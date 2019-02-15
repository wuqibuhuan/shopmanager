<template>
<el-container class="container">
  <el-header>
            <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="图片加载失败">
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <a href="#" class="loginout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
  <el-container>
    <el-aside class="aside" width="200px">Aside</el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>
.container {
    height: 100%;
    background-color: green;
}
.aside {
    background-color: gold;
}
.main {
    background-color: fuchsia;
}
.middle {
  text-align: center;
  line-height: 60px;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
</style>
