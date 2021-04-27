<template>
  <div ref="gameContainer" id="gameContainer" class="gameContainer">
    <canvas ref="canvas" id="canvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
  import LoadingMixin from '@/mixins/common/loading'
  export default {
    name: "Demo1",
    data () {
      return {
        // options,
        container: null,
        canvas: null,
        context: null,
        stage: null,
      }
    },
    components: {
    },
    mixins: [LoadingMixin],
    mounted() {
      this.initLoading()
//       const _this = this
//       this.container = this.$refs.gameContainer
//       this.canvas = document.getElementById('canvas')
//       this.canvas.width = options.width;
//       this.canvas.height = options.height;
//       const stage = new window.createjs.Stage(options.canvas);
//       console.log(stage)
//       window.createjs.Ticker.addEventListener("tick", stage);
//
//       const container = new window.createjs.Container();//绘制外部容器
//       stage.addChild(container);
// //加载图片
//       const image = new Image();
//       image.src = require('@/assets/images/loading.png');
//       image.onload = handlerImageLoad;
//
//       function handlerImageLoad() {
//         const bitmap = new window.createjs.Bitmap(event.target);
//         console.log(_this.canvas.width)
//         bitmap.x = _this.canvas.width - bitmap.getBounds().wdith >> 1;
//         bitmap.y = _this.canvas.height - bitmap.getBounds().height >> 1;
//
//         container.addChild(bitmap);
//         stage.update();
//       }




      // this.onResize()
      // window.addEventListener('resize', this.onResize)
    },
    methods: {
      // onResize() {
      //   const { margin, width, height } = getResizeValue()
      //   const ratio = getPixelRatio(this.context)
      //
      //   this.container.style.width = `${width}px`
      //   this.container.style.height = `${height}px`
      //   this.container.style.margin = margin
      //
      //   this.canvas.style.width = `${width}px`
      //   this.canvas.width = width * ratio
      //   this.canvas.style.height = `${height}px`
      //   this.canvas.height = height * ratio
      //
      //   if(this.stage) {
      //     this.stage.scaleX = width / this.options.width * ratio
      //     this.stage.scaleY = height / this.options.height * ratio
      //     this.stage.update()
      //   }
      // }
    }
  }
</script>

<style scoped>
  .gameContainer {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

</style>
