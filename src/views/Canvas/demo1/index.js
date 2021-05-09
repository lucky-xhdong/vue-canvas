import { defaultConfig } from '@/config/demo1/default-config'
import { getPixelRatio } from './utils'


export const onWindowResize = () => {
  const gameContainer = document.getElementById(defaultConfig.container)
  const canvas = document.getElementById(defaultConfig.canvas);
  const context = canvas.getContext('2d')
  const stage = new window.createjs.Stage(canvas)
  const ow = defaultConfig.width
  const oh = defaultConfig.height
  const gw = window.innerWidth
  const gh = window.innerHeight
  const originalRatio = ow / oh
  const currentRatio = gw / gh
  let w
  let h
  if (currentRatio > originalRatio) {
    w = ow / oh * gh
    h = gh
    gameContainer.style.margin = '0 ' + (gw - w) * .5 + 'px'
  } else {
    w = gw
    h = oh / ow * gw
    gameContainer.style.margin = (gh - h) * .5 + 'px 0'
  }
  gameContainer.style.width = w + 'px'
  gameContainer.style.height = h + 'px'
  
  const ratio = getPixelRatio(context)
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  canvas.width = w * ratio
  canvas.height = h * ratio
  
  if (stage) {
    stage.scaleX = w / ow * ratio
    stage.scaleY = h / oh * ratio
    stage.update()
  }
}
