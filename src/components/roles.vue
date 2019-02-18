<template>
    <el-card class="box">
      <bread-crumb level1="权限管理" level2="角色列表"></bread-crumb>
     <el-button class="btn" type="primary">添加角色</el-button>
        <!-- 表格 -->
      <el-table
      :data="roles"
      style="width: 100%">
      <el-table-column
      type='expand'>
         <template slot-scope="scope">
            <el-row class="level1" v-for="(item1,i) in scope.row.children" :key="item1.id">
            <el-col :span='4'>
                <el-tag closable type="danger">{{item1.authName}}</el-tag>
                 <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span='20'>
                <el-row class="level2" v-for="(item2,i) in item1.children" :key="item2.id">
                    <el-col  :span='4'>
                         <el-tag closable type="info">{{item2.authName}}</el-tag>
                          <i class="el-icon-arrow-right"></i>
                    </el-col>
                    <el-col  :span='20'>
                        <el-tag  closable v-for="(item3,i) in item2.children" :key="item3.id" type="warning">{{item3.authName}}</el-tag>
                    </el-col>
                </el-row>
            </el-col>
            </el-row>
            <el-row v-if="scope.row.children.length===0">
             <el-col>
               <span>未分配权限</span>
             </el-col>
          </el-row>
         </template>
      </el-table-column>
       <el-table-column
        type="index"
        label="#"
         width="120">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色名称"
        width="280">
      </el-table-column>
      <el-table-column
        prop="roleDesc"
        label="角色描述"
         width="350">
      </el-table-column>
      
      <el-table-column
        label="操作"
         width="200">
         <template slot-scope="scope">
           <el-button type="primary"    icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button type="danger"     icon="el-icon-delete" circle size="mini" plain></el-button>
          <el-button type="success"  @click="showDiaSetRoles(scope.row)" icon="el-icon-check" circle size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-card>

    
</template>

<script>
export default {
  data() {
    return {
      roles: []
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    showDiaSetRoles() {},

    async getRoles() {
      const res = await this.$http.get(`roles`);
      this.roles = res.data.data;
      console.log(res);
    }
  }
};
</script>

<style>
.box {
  height: 100%;
}
.btn {
  margin-top: 20px;
}
.level1,
.level2 {
  margin-bottom: 10px;
}
</style>
