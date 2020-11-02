<template>
  <div>
      <el-col :xs="24" :sm="12" :md="6" v-for="(item,i) in items" :key="i">
        <el-image :src="item"></el-image>
      </el-col>
  </div>
</template>



<script>
export default {
  name: 'application',
  data(){
    return{
      items:[require('../assets/头像.jpg'),require('../assets/IRY.jpg')]
    }
  }
}
</script>

<style>

</style>