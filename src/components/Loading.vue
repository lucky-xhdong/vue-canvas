<template>
  <div ref="loading" id="loading" class="loading" v-show="showL">
    <img ref=img src="../assets/images/loading.png" style="width: 100%;">
    <div style="position: absolute; top:46.7%; left: 14.6%; width: 44%; height: 1.7%;">
        <img ref="progress" src="../assets/images/progress.png" style="width: 0%; height: 100%;display: block;" v-show="showP">
    </div>
  </div>
</template>

<script>
  import { Lib } from '../utils/lib.js'
  export default {
    name: "Loading",
    data () {
      return {
        el: null,
        img: null,
        progress: null,
        showL: false,
        showP: false,
        lib: null,
        loader: null,
        images: null
      }
    },
    mounted() {
      this.el = this.$refs.loading
      this.img = this.$refs.img
      this.progress = this.$refs.progress
      this.showLoading()
      this.lib = new Lib()
      this.loadImg()
    },
    methods: {
      showLoading(isShowProgress) {
        this.showL = true
        this.showP = isShowProgress === undefined ? true : isShowProgress
      },
      hideLoading () {
        this.showL = false
      },
      loadImg() {
        const manifest = this.lib.property.manifest

        if(!manifest.length) {
          this.onComplete(null)
        } else {
          this.images = this.images || {}
          this.loader = new window.createjs.LoadQueue(true)
          this.loader.installPlugin(window.createjs.Sound)
          this.loader.addEventListener('complete', this.onComplete)
          this.loader.addEventListener('fileload', this.onFileload)
          this.loader.loadManifest(manifest)
        }
      },
      onComplete (event) {
        console.log('event: ', event);
        this.hideLoading()
      },
      onFileload (event) {
        console.log('event: ', event);
        const item = event.item
        if(item.type === 'image') {
          this.images[item.id] = event.result
        }
        this.setProgress(parseInt(this.loader.progress * 100))
      },
      setProgress (progress) {
        this.progress.style.width = `${progress}%`
      }
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
}
</style>
