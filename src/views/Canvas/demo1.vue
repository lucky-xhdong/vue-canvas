<template>
  <div ref="gameContainer" id="gameContainer" class="gameContainer">
    <canvas ref="canvas" id="canvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
  import LoadingMixin from '@/mixins/common/loading'
  import ResizeMixin from '@/mixins/common/resize'
  export default {
    name: 'Demo1',
    data () {
      return {
      }
    },
    components: {
    },
    mixins: [LoadingMixin, ResizeMixin],
    mounted() {
      this.initLoading()
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    methods: {
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
