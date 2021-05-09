import { defaultConfig } from '@/config/demo1/default-config'
export function getResizeValue () {
  const ow = defaultConfig.width
  const oh = defaultConfig.height
  const gw = window.innerWidth
  const gh = window.innerHeight
  const originalRatio = ow / oh
  const currentRatio = gw / gh
  let width
  let height
  let margin
  if(currentRatio > originalRatio) {
    width = originalRatio * gh
    height = gh
    margin = `margin: 0 ${(gw - width) / 2}px`
  } else {
    width = gw
    height = gw / originalRatio
    margin = `margin: ${(gh - height) / 2}px 0`
  }
  return { margin, width, height }
}
export function getPixelRatio (context) {
  const backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1
  
  return (window.devicePixelRatio || 1) / backingStore
}
