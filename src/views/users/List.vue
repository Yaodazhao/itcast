<template>
     <el-card class="card">
    <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
            <!-- 搜索框 -->
            <el-row class="row">
                <el-col :span="24">
                    <el-input
                    style="width: 300px"
                    placeholder="请输入内容">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>

                    <el-button type="success" plain>添加用户</el-button>
                </el-col>
            </el-row>
                <!-- 表格 -->
            <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                prop="username"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="180">
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="电话"
                width="180">
            </el-table-column>
            <el-table-column
                prop="create_time"
                label="时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="msg_state"
                label="用户状态"
                width="180">
            </el-table-column>
            <el-table-column
                label="操作">
            </el-table-column>
            </el-table>
  </el-card>
</template>

<script>
export default {
     data() {
        return {
        tableData: []
        }
  },
    created(){
        this.loadData();
    },
  methods:{
    async  loadData(){

              //设置token
        const token = sessionStorage.getItem('token');
              //设置请求头
        this.$http.defaults.headers.common['Authorization'] = token;
      const response = await  this.$http.get('users?pagenum=1&pagesize=10');
           
        
        const { meta : { msg , status } } = response.data;
        if(status === 200) {
          this.tableData = response.data.data.users;
        }else{
          this.$message.error(msg);
         }
           
    }
  }
}
</script>

<style>
.card{
    height: 100%;
}
.row {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
