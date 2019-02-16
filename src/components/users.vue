<template>
<el-card class="box">
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
</el-breadcrumb>
  <!-- 搜索框 -->
    <el-row class="searchBox">
      <el-col>
        <el-input
          @clear="getAllUsers()"
          clearable
          class="searchInput"
          placeholder="请输入内容"
          v-model="query"
        >
          <el-button @click="searchUser()" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" @click="showDiaAddUser()">添加用户</el-button>
      </el-col>
    </el-row>
<!-- 表格 -->

    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="#"
        width="80">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
         width="140">
      </el-table-column>
       <el-table-column
        prop="mobile"
        label="电话"
         width="140">
      </el-table-column>
       <el-table-column
        prop="create_time"
        label="创建日期"
         width="180">
          <template slot-scope="scope">
          {{scope.row.create_time|fmtdate}}
          </template>
      </el-table-column>
       <el-table-column
        prop="name"
        label="用户状态"
         width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
         width="220">
      </el-table-column>
    </el-table>
    <!-- 分页 -->

</el-card>

</template>

<script>
export default {
  data () {
    return {
      query: '',
      pagenum: 1,
      pagesize: 10,
      list: [],
       // 表单数据
      formdata: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }

    }
  },
  created () {
    this.getTableData()
  },
  methods: {
   async getTableData () {
    //  设置请求头
      const AUTH_TOKEN = localStorage.getItem("token");
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;


      const res= await this.$http.get(`users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}=${this.pagesize}`);
      // console.log(res);
       const {
        data,
        meta: { status, msg }
      } = res.data;
      if (status === 200) {
        // this.total = data.total;
        this.list = data.users;
        console.log(this.list);
      }
    },
    // 添加用户
     showDiaAddUser() {
      this.dialogFormVisibleAdd = true;
    },
    // 清空时获取所有用户
    getAllUsers() {
      // 此时 query查询参数已经是''

      this.getTableData();
    },
    // 搜索用户
     searchUser() {
      this.pagenum = 1;
      this.getTableData();
    },
  }
}
</script>

<style>
.box {
  height: 100%;
}
.searchInput {
  width: 400px;
  margin-top: 20px;
}
</style>

<style>
.box {
  height: 100%;
}
.searchInput {
  width: 400px;
  margin-top: 20px;
}
</style>
