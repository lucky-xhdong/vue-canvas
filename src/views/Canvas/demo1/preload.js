import { defaultConfig, manifest } from '@/config/demo1/default-config'
// import { newElement } from './utils'
export class ImagePreload {
  constructor() {
    this.el = null
    this.manifest = null
  }
  
  init () {
    // this.el = newElement('div')
    // this.el.setAttribute('id', 'app-container')
    //
    // const appHeader = newElement('div')
    // appHeader.setAttribute('id', 'app-header')
    // this.el.appendChild(appHeader)
    //
    // const appBody = newElement('div')
    // appBody.setAttribute('id', 'app-body')
    // this.el.appendChild(appBody)
  
    const cjs = window.createjs
    const stage = new cjs.Stage(defaultConfig.canvas)
    const gameContainer = new cjs.Container()
    stage.addChild(gameContainer)
    const bitmap = new cjs.Bitmap(manifest[0].src)
    gameContainer.addChild(bitmap)
    // cjs.Ticker.setFPS(100)
    cjs.Ticker.addEventListener('tick', function () {
      stage.update()
    })
  }
}
export const initManifest = () => {
  const pre = new ImagePreload()
  pre.init()
}
