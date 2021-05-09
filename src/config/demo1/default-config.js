export const defaultConfig = {
  lib_name: 'index',
  container: 'gameContainer',
  canvas: 'gameCanvas',
  width: 1920,
  height: 1080,
  loading: {
    bg: require("@/assets/demo1/images/loading.png"),
    progress: require("@/assets/demo1/images/progress.png")
  },
  autoRefresh: true,
  images: {},
  update: false
}

export const manifest = [
  { src: require('@/assets/demo1/images/a1.png'), id: 'a1'},
  { src: require('@/assets/demo1/images/a2.png'), id: 'a2'},
  { src: require('@/assets/demo1/images/a3.png'), id: 'a3'},
  { src: require('@/assets/demo1/images/a4.png'), id: 'a4'},
  { src: require('@/assets/demo1/images/a5.png'), id: 'a5'},
  { src: require('@/assets/demo1/images/a6.png'), id: 'a6'},
  { src: require('@/assets/demo1/images/a7.png'), id: 'a7'},
  { src: require('@/assets/demo1/images/a8.png'), id: 'a8'}
]
