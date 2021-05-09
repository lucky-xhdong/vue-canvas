// 新建元素
export const newElement = (name) => {
  const _name = name.toString().toLocaleLowerCase()
  return document.createElement(_name)
}

//
export const extend = (source, target) => {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key]
    }
  }
  return target
}

export const getPixelRatio = (context) => {
  var backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1
  
  return (window.devicePixelRatio || 1) / backingStore
}

export const parseAudioToDict = (manifest, data) => {
  manifest = manifest || [];
  manifest.forEach(function (item) {
    if(item.src.indexOf('.mp3') > -1) {
      data[item.id] = {
        play: false,
        instance: null,
        time: 0,
        sprite: null,
        callback: null
      }
    }
  })
}
