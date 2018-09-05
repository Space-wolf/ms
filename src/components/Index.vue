<template>
  <div id="index">
    <el-container>
      <el-aside width="200px">
        <div class="userName">用户名</div>
        <ul class="nav">
          <router-link :to="{path:'/home'}" tag="li" class="navName">首页</router-link>
          <router-link :to="{path:'/site'}" tag="li" class="navName">网站</router-link>
          <router-link to="{path:/home}" tag="li" class="navName">FTP</router-link>
        </ul>
      </el-aside>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          <span class="edition">版本：4.9.0</span>
        </el-breadcrumb>
        <router-view></router-view>
        <div class="footer">Linux面板 ©2014-2017</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      objs: [
        {name: '首页'},
        {name: '网站'},
        {name: 'FTP'},
        {name: '数据库'},
        {name: '监控'},
        {name: '安全'},
        {name: '文件'},
        {name: '计划任务'},
        {name: '面板设置'},
        {name: '退出'}
      ]
    }
  }
}
</script>

<style>
  #index{
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
  .el-aside {
    height:100%;
    background-color: #404040;
    color: #a0a0a0;
    text-align: center;
  }
  .el-aside .userName{
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #fff;
  }
  .userName:hover{
    background: #409EFF;
  }
  .nav .navName{
    padding-left: 70px;
    height: 46px;
    line-height: 46px;
    text-align: initial;
  }
  .nav .navName:hover{
    background: #575757;
    color: #ffffff;
    cursor: pointer;
  }
  .el-main {
    background: #c0c0c0;
  }
  .el-breadcrumb {
    height: 42px;
    line-height: 42px;
    padding: 0 20px;
    background: #fff;
  }
  .edition {
    float: right;
  }
  .footer {
    height: 46px;
    line-height: 46px;
    text-align: center;
    background: #fff;
    margin-top: 15px;
  }
</style>
