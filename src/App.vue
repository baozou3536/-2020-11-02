<template>
  <div id="app">
 <el-container>
  <el-aside width=auto height=auto>
   <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button id="spon1">展开</el-radio-button>
  <br v-show='panduan()'>  
  <el-radio-button :label="true" id="spon2">收起</el-radio-button>
  <!-- <el-radio-button @click="toggleCollapse">|||</el-radio-button> -->
</el-radio-group>
<el-menu default-active="1-4-1" 
class="el-menu-vertical-demo" 
@open="handleOpen"
@close="handleClose" 
:collapse="isCollapse" 
:collapse-transition="true"
background-color="#545c64"
text-color="#fff"
active-text-color="#ffd04b" 
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
       <el-menu-item index="/table">
        <i class="el-icon-setting"></i>
        <span slot="title">人员配置</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
<!-- 左侧导航栏结束 -->

  <el-container>
    <!-- 头部内容 -->
    <el-header>第二个项目</el-header>
    <!-- 中间内容 -->
    <el-main>
      <router-view />
    </el-main>
    <!-- 底部内容 -->
    <el-footer>这里是底部</el-footer>
  </el-container>
</el-container>
  </div>
</template>

<style>
 /* #spon1,#spon2{
   padding: 20px 20px;
 } */
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      panduan(){
        return this.isCollapse
      },
    //    toggleCollapse () {
    //   this.isCollapse = !this.isCollapse
    // }
    }
  }
</script>
