import { defaultConfig } from '@/config/demo1/default-config'
import { newElement } from './utils'
let _loading = null

export class Loading {
  constructor() {
    this.el = null
    this.img = null
    this.progress = null
  }
  
  // 初始化loading样式
  initLoadingStyle (opt) {
    // loading的背景图
    const img = newElement('img')
    this.el.appendChild(img)
    img.src = opt.img
    img.style.width = '100%'
    this.img = img
    
    // 包裹进度条的div
    const text = newElement('div')
    this.el.appendChild(text)
    text.style.position = 'absolute'
    text.style.top = '46.6%'
    text.style.left = '14.6%'
    text.style.width = '72%'
    text.style.height = '1.8%'
    text.style.fontSize = '0'
    text.style.textAlign = 'left'
  
    // 进度条图片
    const imgProgress = newElement('img')
    text.appendChild(imgProgress)
    imgProgress.src = opt.progress
    imgProgress.style.width = '0%'
    imgProgress.style.height = '100%'
    this.progress = imgProgress
    
    // 开始学习
    const txtStart = newElement('span')
    this.el.appendChild(txtStart)
    txtStart.innerText = '开始学习'
    txtStart.style.fontSize = '20px'
    txtStart.style.color = '#f29d70'
    txtStart.style.display = 'block'
    txtStart.style.position = 'absolute'
    txtStart.style.top = '53.6%'
    txtStart.style.left = '50%'
    txtStart.style.marginLeft = '-40px'
  }
  // 显示loading
  show (isShowText) {
    this.el.style.display = 'block'
    isShowText = isShowText === undefined ? true : isShowText
    if (isShowText) {
      this.el.style.display = 'block'
    } else {
      this.el.style.display = 'none'
    }
  }
  
  // 隐藏loading
  hide () {
    this.el.style.display = 'none'
  }
  
  // 显示开始学习文字
  showTextStart (el) {
    el.style.display = 'block'
  }
  
  // 隐藏开始学习文字
  hideTextStart (el) {
    el.style.display = 'none'
  }
  
  // 设置百分比
  setLoadProgress (percent) {
    this.progress.style.width = percent + '%'
  }
  
  // 初始化
  _init() {
    this.el = newElement('div')
    this.el.setAttribute('id', 'loading')
    const loadStyle = this.el.style
    loadStyle.position = 'absolute'
    loadStyle.width = '100%'
    loadStyle.height = '100%'
    loadStyle.top = 0
    loadStyle.left = 0
    loadStyle.zIndex = '1000'
    loadStyle.display = 'none'
    const gameContainer = document.getElementById(defaultConfig.container)
    gameContainer.appendChild(this.el)
    this.initLoadingStyle(
      {
        img: defaultConfig.loading.bg,
        progress: defaultConfig.loading.progress
      }
    )
  }
}

Loading.getInstance = function () {
  if (!_loading) {
    _loading = new Loading()
    _loading._init()
  }
  return _loading
}

export const initLoading = () => {
  _loading = Loading.getInstance()
}

export const showLoading = () => {
  _loading.show()
}

export const hideLoading = () => {
  _loading.hide()
}

export const setLoadProgress = (percent) => {
  _loading.setLoadProgress(percent)
}
