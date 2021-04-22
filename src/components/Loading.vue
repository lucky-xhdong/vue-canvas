<template>
  <div ref="loading" id="loading" class="loading">
    <img ref=img src="../assets/images/loading.png" style="width: 100%;">
    <div style="position: absolute; top:46.7%; left: 14.6%; width: 44%; height: 1.7%;">
        <img ref="progress" src="../assets/images/progress.png" style="width: 0%; height: 100%;display: block;">
    </div>
  </div>
</template>

<script>
//   import { defaultConfig } from '../../utils/config'
//   import { getResizeValue, getPixelRatio } from '../../utils/config'
  export default {
    name: "Loading",
    data () {
      return {
        el: null,
        img: null,
        progress: null,
      }
    },
    mounted() {
      this.el = this.$refs.loading
      this.img = this.$refs.img
      this.progress = this.$refs.progress
    },
    methods: {
    }
  }
</script>

<style scoped>
.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    display: none;
}
</style>
