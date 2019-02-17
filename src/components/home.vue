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
            <a href="#" class="loginout" @click.prevent="handleLoginout()">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
  <el-container>
      <!-- 导航 -->
    <el-aside class="aside" width="200px">
        <el-menu
      default-active="1"
      :router="true"
      unique-opened>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="users"><i class="el-icon-menu"></i>用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 权限管理 -->
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>

          <el-menu-item index="1-1"><i class="el-icon-menu"></i>角色列表</el-menu-item>
           <el-menu-item index="right"><i class="el-icon-menu"></i>权限列表</el-menu-item>
      </el-submenu>

      <!-- 商品管理 -->
       <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="1-1"><i class="el-icon-menu"></i>商品列表</el-menu-item>
           <el-menu-item index="1-1"><i class="el-icon-menu"></i>分类参数</el-menu-item>
            <el-menu-item index="1-1"><i class="el-icon-menu"></i>商品分类</el-menu-item>

        </el-menu-item-group>
      </el-submenu>

      <!-- 订单管理 -->
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="1-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>

        </el-menu-item-group>
      </el-submenu>

      <!-- 数据统计 -->
       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="1-1"><i class="el-icon-menu"></i>数据列表</el-menu-item>

        </el-menu-item-group>
      </el-submenu>

    </el-menu>
    </el-aside>
    <el-main class="main">
         <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  beforeMount () {
    if (!localStorage.getItem('token')) {
      this.$router.push({
        name: 'login'
      })
    }
  },
  methods: {
    // 退出
    handleLoginout () {
      // 1. 清除token
      localStorage.clear()
      // 2. 跳转到login
      this.$router.push({
        name: 'login'
      })
      // 提示
      this.$message.warning('退出成功')
    }
  }
}
</script>

<style>
.container {
    height: 100%;
    background-color:#E6EFFB;
}
.aside {
    /* background-color: gold; */
    height: 100%;
    margin-top: 20px;
}
.main {
    background-color: #E6EFFB;
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
