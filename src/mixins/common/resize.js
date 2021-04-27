import { options } from '@/config/demo1/options'
// import { getResizeValue, getPixelRatio } from '@/utils/demo1/util'
const ResizeMixin = {
  data() {
    return {
    
    }
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
        this.stage.scaleX = width / this.options.width * ratio
        this.stage.scaleY = height / this.options.height * ratio
        this.stage.update()
      }
    }
  }
}
export default ResizeMixin
