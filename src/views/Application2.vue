<template>
  <div>
      <el-col :span='24'>
        <div id="char" style="width: 100%;height:400px;"></div>
      </el-col>
       <el-col :span='24'>
        <div id="char2" style="width: 100%;height:400px;"></div>
      </el-col>
  </div>
</template>

<script>
export default {
  name : 'application2',
  mounted(){
    this.init();
  },
  methods:{
    init(){
        var myChart = this.$echarts.init(document.getElementById('char'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '传入数据类型数量'
            },
            tooltip: {},
            legend: {
                data:['数量']
            },
            xAxis: {
                data: ["boolean","string","number","null","undifined","boject"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [67, 20, 45, 30, 20, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  }
}
</script>