<template>
  <div ref="loading" id="loading" class="loading" v-show="showL">
    <img ref=img src="../assets/images/loading.png" style="width: 100%;">
    <div style="position: absolute; top:46.7%; left: 14.6%; width: 44%; height: 1.7%;">
        <img ref="progress" src="../assets/images/progress.png" style="width: 0%; height: 100%;display: block;" v-show="showP">
    </div>
  </div>
</template>

<script>
  import { Lib } from '@/utils/lib.js'
  import { defaultConfig, resource } from '@/utils/config'
  export default {
    name: "Loading",
    props: {
      rs: {
        type: Object,
        default() {
          return {}
        }
      },
      stage: {
        type: Object,
        default() {
          return {}
        }
      },
      onResize: {
        type: Function,
        default() {
          return () => {}
        }
      }
    },
    data () {
      return {
        el: null,
        img: null,
        progress: null,
        showL: false,
        showP: false,
        lib: null,
        loader: null,
        images: null,
        btnGroup: [],
        update: false,
        cancelBtn: false,
        currentNum: 0
      }
    },
    mounted() {
      this.el = this.$refs.loading
      this.img = this.$refs.img
      this.progress = this.$refs.progress
      this.showLoading()
      this.lib = new Lib(this.rs || {})
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
      onComplete () {
        this.lib.setUnit({mode: 'synched', startPosition: 0})
        this.lib.setText({mode: 'synched', startPosition: 0})
        this.lib.setChangeImg({mode: 'synched', startPosition: 0})
        this.lib.setUnit36()
        this.lib.setBtnStart()
        this.lib.setLeft({mode: 'synched', startPosition: 0})
        this.lib.setRight({mode: 'synched', startPosition: 0})
        this.lib.setImageUnit({mode: 'synched', startPosition: 0})
        this.lib.setCover()
        this.lib.setSmall({mode: 'synched', startPosition: 0})
        this.lib.setIndex({mode: 'synched', startPosition: 0, loop: false})
        this.stage.addChild(this.lib.index)
        this.stage.update()

        window.createjs.Touch.enable(this.stage)
        this.stage.enableMouseOver(20)
        window.createjs.Ticker.setFPS(this.lib.property.fps)
        window.createjs.Ticker.addEventListener('tick', this.tick)
        this.onResize()
        this.init()
        this.hideLoading()
      },
      init () {
        this.lib.index.small.gotoAndStop(0);
        const max = resource.demo3.MAX_NUM
        for(let i = 0; i < max; i++) {
          const btn = this.lib.index.small[`btn${i+1}`]
          if(btn && i < max) {
            this.btnGroup.push(btn)
          }
          if (btn) {
            if(i == 0) {
              btn.gotoAndStop(1)
            } else {
              btn.gotoAndStop(0)
            }
            btn.gou.visible = false;
          }
        }
        this.lib.index.gotoAndStop(0);
        this.handleControl();
      },
      handleControl() {
        if(resource.demo3.MAX_NUM < 7) {
          this.lib.index.btnNext.visible = false;
          this.lib.index.btnPrev.visible = false;
        }
        
        this.lib.index.cover.btnStart.on('click', () => {
          console.log('click: ');
          this.lib.cover.visible = false
        })

        this.btnGroup.forEach((btn, i) => {
          btn.on('click', () => {
            if(!this.cancelBtn) return;
            this.currentNum = i;
            this.resetBtn();
            btn.gotoAndStop(1);
            this.lib.index.gotoAndStop(i);
            btn.gou.visible = true;
          });
        });
      },
      resetBtn(){
        this.cancelBtn = true
        this.btnGroup.forEach(btn => {
          btn.gotoAndStop(0)
        })
      },
      onFileload (event) {
        const item = event.item
        if(item.type === 'image') {
          this.images[item.id] = event.result
          this.lib.setImg(event.result, item.id)
        }

        // 此处存在require的图片变成text格式，切返回值变为乱码的问题

        this.setProgress(parseInt(this.loader.progress * 100))
      },
      setProgress (progress) {
        this.progress.style.width = `${progress}%`
      },
      tick(event) {
        if(defaultConfig.autoRefresh) {
          this.stage.update(event);
        } else {
          if (this.update) {
            this.update = false;
            this.stage.update(event);
          }
        }
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
