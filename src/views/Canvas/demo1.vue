<template>
  <div ref="gameContainer" id="gameContainer" class="gameContainer">
    <canvas ref="canvas" id="gameCanvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
  import {initLoading, setLoadProgress, showLoading} from './demo1/loading'
  import { initManifest } from './demo1/preload'
  import { onWindowResize } from './demo1/index'
  import { defaultConfig, manifest } from '@/config/demo1/default-config'
  export default {
    name: 'Demo1',
    data () {
      return {
        loader: null
      }
    },
    components: {
    },
    mounted() {
      this.init()
    },
    methods: {
      init () {
        initLoading()
        onWindowResize()
        window.onresize = onWindowResize
        showLoading()
        const cjs = window.createjs
        if (!manifest.length) {
          const stage = new cjs.Stage(defaultConfig.canvas);
          stage.update()
        } else {
          this.loader = new cjs.LoadQueue(false)
          this.loader.addEventListener('complete', this.onComplete)
          this.loader.addEventListener('fileload', this.onFileLoad)
          this.loader.loadManifest(manifest)
        }
      },
      onComplete () {
        const exportRoot = null
        const cjs = window.createjs
        const stage = new cjs.Stage(defaultConfig.canvas)
        // const text = new cjs.Text('开始学习', '20px Microsoft Yahei', '#f29d70')
        // text.x = 100
        // text.y = 200
        // stage.addChild(text)
        stage.addChild(exportRoot)
        stage.update()

        window.createjs.Touch.enable(stage)
        stage.enableMouseOver(20)
        window.createjs.Ticker.setFPS(30)
        window.createjs.Ticker.addEventListener('tick', this.onTick)
        // hideLoading()
      },
      onFileLoad (e) {
        if (e.item.type === 'image') {
          defaultConfig.images[e.item.id] = e.result
        }
        setLoadProgress(parseInt(this.loader.progress * 100))
      },
      onTick () {
        initManifest()
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
