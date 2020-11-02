<template>
  <div id="app">
 <el-container>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router>
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>应用管理</span>
        </template>
          <el-menu-item index="/application">应用配置1</el-menu-item>
          <el-menu-item index="/application2">应用配置2</el-menu-item>
      </el-submenu>

      <el-menu-item index="/config">
        <i class="el-icon-document"></i>
        <span slot="title">配置管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
<!-- 左侧导航栏结束 -->

  <el-container>
    <!-- 头部内容 -->
    <el-header>Header</el-header>
    <!-- 中间内容 -->
    <el-main>
      <router-view />
    </el-main>
    <!-- 底部内容 -->
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
  </div>
</template>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
