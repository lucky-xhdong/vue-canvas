<template>
<div class="app-container">
  <canvas id="myCanvas"></canvas>
</div>
</template>

<script>
  export default {
    name: "Demo",
    data() {
      return {

      }
    },
    mounted() {
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

</style>
