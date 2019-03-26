<template>
  <div>
    <el-card header="视频">
        <video width="100%" height="auto" controls="controls">
            <source src="/source/01_brown_bear/01.mp4" type="video/mp4" />
        </video>
    </el-card>

    <el-card header="音频">
        <audio src="/source/01_brown_bear/brown bear故事.MP3" controls="controls"></audio>
    </el-card>

    <el-card header="文档">
        <p><a href="/source/01_brown_bear/01-Brown_Bear,Brown_Bear,What_Do_You_See(小册子打印).pdf" target="_blank">01-Brown_Bear,Brown_Bear,What_Do_You_See(小册子打印)</a></p>
        <p><a href="/source/01_brown_bear/英文绘本创意教学101.pdf" target="_blank">02-英文绘本创意教学101</a></p>
    </el-card>
    
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    msg: String
  },
  data() {
    return {
      
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 800px;
  margin: 0 auto;
}

</style>
