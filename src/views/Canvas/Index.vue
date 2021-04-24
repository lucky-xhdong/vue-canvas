<template>
  <div class="app-container">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
  // import "./index.js";
  // import "./config.js";
  // require('./lib/createjs-utils')
  require('./lib/audioplayer')
  require('./lib/VideoPlayer')
  require('./index')
  require('./config')
  require('./main')
  export default {
    name: "Index",
    mounted() {
      // //创建一个舞台，得到一个参考的画布
      // const stage = new window.createjs.Stage("myCanvas");
      // //创建一个形状的显示对象
      // const circle = new window.createjs.Shape();
      // circle.graphics.beginFill("red").drawCircle(0, 0, 40);
      // //形状实例的设置位置
      // circle.x = circle.y = 50;
      // //添加形状实例到舞台显示列表
      // stage.addChild(circle);
      // //更新舞台将呈现下一帧
      // stage.update();
    }
  }
</script>

<style scoped>

</style>
