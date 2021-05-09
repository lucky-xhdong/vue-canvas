import { options } from '@/config/demo1/options'
// import { getResizeValue, getPixelRatio } from '@/utils/demo1/util'
const LoadingMixin = {
  data() {
    return {
    
    }
  },
  methods: {
    initLoading() {
      const cjs = window.createjs
      //设置canvas属性
      const canvas = document.getElementById(options.canvas)
      //创建舞台
      const stage = new cjs.Stage(canvas)
      //绘制外部容器
      const gameContainer = new cjs.Container()
      stage.addChild(gameContainer)
      //加载图片
      const image = new Image()
      image.src = options.imgLoading
      image.onload = handleImageLoad
      image.style.width = canvas.width
      image.style.height = canvas.height
      function handleImageLoad() {
        // cjs.Bitmap("imgs/1.png")
        // PS: 必须图片加载完成之后 img.onload之后执行
        const bitmap = new cjs.Bitmap(event.target);
        // bitmap.x = canvas.width - bitmap.getBounds().width >> 1
        // bitmap.y = canvas.height - bitmap.getBounds().height >> 1
        // bitmap.on('click', function () {
        //   alert(1);
        // });
        //加入场景
        gameContainer.addChild(bitmap);
        stage.update();
      }
      
      // const bitmap = new cjs.Bitmap(options.imgLoading)
      // bitmap.image.width = canvas.width
      // bitmap.image.height = canvas.height
      // gameContainer.addChild(bitmap)
      // cjs.Ticker.setFPS(30)
      // cjs.Ticker.addEventListener('tick', function () {
      //   stage.update()
      // })
    }
  }
}
export default LoadingMixin
