<template>
  <div ref="gameContainer" id="gameContainer" class="gameContainer">
    <canvas ref="canvas" id="canvas" width="800" height="600"></canvas>
    <loading :rs="resource.demo3" :stage="stage"></loading>
  </div>
</template>

<script>
  import { defaultConfig, resource } from '@/utils/config'
  import { getResizeValue, getPixelRatio } from '@/utils/util'
  import Loading from '@/components/Loading'
  export default {
    name: "Demo3",
    data () {
      return {
        defaultConfig,
        container: null,
        canvas: null,
        context: null,
        stage: null,
        resource
      }
    },
    components: {
      Loading
    },
    mounted() {
      this.container = this.$refs.gameContainer
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')
      this.onResize()
      window.addEventListener('resize', this.onResize)

      this.stage = new window.createjs.Stage(this.canvas);
      window.createjs.Ticker.addEventListener("tick", this.stage);

      // var mc = new window.createjs.MovieClip({loop:-1, labels:{myLabel:20}});
      // mc.nominalBounds = new window.createjs.Rectangle(0,0,1356.3,58)
      // stage.addChild(mc);
      
      // this.shape = new window.createjs.Shape();
      // this.shape.graphics.f("#EBECDC").s().p("EhoYAEhQhkAAAAhkIAAl5QAAhkBkAAMDQxAAAQBkAAAABkIAAF5QAABkhkAAg");
      // this.shape.setTransform(678.2,29);

      // mc.timeline.addTween(window.createjs.Tween.get(this.shape).wait(45));
      // mc.gotoAndPlay("start");
    },
    methods: {
      onResize() {
        const { margin, width, height } = getResizeValue()
        const ratio = getPixelRatio(this.context)

        this.container.style.width = `${width}px`
        this.container.style.height = `${height}px`
        this.container.style.margin = margin

        this.canvas.style.width = `${width}px`
        this.canvas.width = width * ratio
        this.canvas.style.height = `${height}px`
        this.canvas.height = height * ratio

        if(this.stage) {
          this.stage.scaleX = width / this.defaultConfig.width * ratio
          this.stage.scaleY = height / this.defaultConfig.height * ratio
          this.stage.update()
        }
      }
    }
  }
</script>

<style scoped>
.gameContainer {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
canvas {
  position: relative;
  z-index: 999;
  background: gray;
}
</style>
