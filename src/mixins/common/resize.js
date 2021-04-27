import { options } from '@/config/demo1/options'
import { getResizeValue, getPixelRatio } from '@/utils'
const ResizeMixin = {
  data() {
    return {
    
    }
  },
  methods: {
    onResize() {
      const { margin, width, height } = getResizeValue()
  
      //设置canvas属性
      const canvas = document.getElementById(options.canvas)
      const context = canvas.getContext('2d')
      const ratio = getPixelRatio(context)
      const cjs = window.createjs
      //创建舞台
      const stage = new cjs.Stage(canvas)
      //绘制外部容器
      const gameContainer = new cjs.Container()
      stage.addChild(gameContainer)
      
      gameContainer.width = `${width}px`
      gameContainer.height = `${height}px`
      gameContainer.margin = margin
      canvas.width = width * ratio
      canvas.height = height * ratio

      if(stage) {
        stage.scaleX = width / options.width * ratio
        stage.scaleY = height / options.height * ratio
        stage.update()
      }
    }
  }
}
export default ResizeMixin
