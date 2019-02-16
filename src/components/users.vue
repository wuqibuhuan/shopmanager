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
        label="用户状态"
         width="140">
         <template slot-scope="scope">
          <!-- 内容 -->
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
         width="200">
         <template slot-scope="scope">
           <el-button type="primary" icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" circle size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      pagenum: 1,
      pagesize: 2,
      total: -1,
      list: [],
      // 表单数据
      formdata: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      }
    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    async getTableData () {
      //  设置请求头
      const AUTH_TOKEN = localStorage.getItem('token')
      this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN

      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }=${this.pagesize}`
      )
      // console.log(res);
      const { data, meta: { status, msg } } = res.data
      if (status === 200) {
        // this.total = data.total;
        this.list = data.users
        console.log(this.list)
      }
    },
    // 添加用户
    showDiaAddUser () {
      this.dialogFormVisibleAdd = true
    },
    // 清空时获取所有用户
    getAllUsers () {
      // 此时 query查询参数已经是''

      this.getTableData()
    },
    // 搜索用户
    searchUser () {
      this.pagenum = 1
      this.getTableData()
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagenum = 1
      this.pagesize = val
      this.getTableData()
    },
    // 当前1页 -> 点击2页 -> 获取第二页数据
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      // 根据新页码发送请求
      this.pagenum = val
      this.getTableData()
    },
    async getTableData () {
      // query	查询参数	可以为空
      // pagenum	当前页码	不能为空
      // pagesize	每页显示条数	不能为空
      // 设置发送请求时的请求头-> axios库 ->找axios中有没有可以设置headers头部的API->看axios文档
      const AUTH_TOKEN = localStorage.getItem('token')
      // console.log(AUTH_TOKEN);
      this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      )
      console.log(res)
      const {
        data,
        meta: { status, msg }
      } = res.data
      if (status === 200) {
        this.total = data.total
        this.list = data.users
        // console.log(this.list);
      }
    }
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
