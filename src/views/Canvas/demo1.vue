<template>
  <div ref="gameContainer" id="gameContainer" class="gameContainer">
    <canvas ref="canvas" id="canvas" width="800" height="600"></canvas>
    <loading></loading>
  </div>
</template>

<script>
  import { defaultConfig } from '../../utils/config'
  import { getResizeValue, getPixelRatio } from '../../utils/util'
  import Loading from '../../components/Loading'
  export default {
    name: "Demo1",
    data () {
      return {
        defaultConfig,
        container: null,
        canvas: null,
        context: null,
        stage: null,
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

</style>
