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
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  }
}
</script>