<template>
 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
        <el-table-column
        prop="phone"
        label="联系电话">
      </el-table-column>
    </el-table>
</template>

<script>
import axios from 'axios'

 export default {
      data() {
        return {
          tableData: [
        //       {
        //     date: '2010-01-01',
        //     name: '张三',
        //     address: '山东省威海市'
        //   }, {
        //     date: '2010-02-02',
        //     name: '李四',
        //     address: '山东省青岛市'
        //   }, {
        //     date: '2013-04-08',
        //     name: '王五',
        //     address: '山东省烟台市'
        //   }, {
        //     date: '2019-07-02',
        //     name: '黄六',
        //     address: '山东省济南市'
        //   }
          ]
        }
      },
      methods:{
          getData(){    //请求数据
              axios.get('http://127.0.0.1:3333/tablist').then(response =>{   //后端返回的数据
                  console.log(response.data)
                  if(res.data.code == '200'){
                      this.tableData = res.data.resule;
                  }
              },
              error =>{
                  console.log('错误！')
              })
          }
      },
      mounted(){    //挂载完成
          this.getData();
      }
    }
</script>

<style>

</style>