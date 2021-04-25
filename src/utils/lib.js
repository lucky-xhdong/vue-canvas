// 此lib中的方法根据情况提取公用，以及根据不同页面设置适用于不同页面的方法，先放在一起做练习
export class Lib {
    constructor(config = {}) {
        this.property = {
            width: 1920,
            height: 1080,
            fps: 25,
            color: "#FFFFFF"
        }
        this.images = {}
        if(Object.prototype.toString.call(config) === '[object Object]') {
            this.property = Object.assign({}, this.property, config)
        }
    }
    setImg(item) {
        this.images.id = new window.createjs.Bitmap(item)
        this.images.id.nominalBounds = new window.createjs.Rectangle(0,0,670,539)
    }
    setUnit(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        this.mc = new window.createjs.MovieClip(config);
        this.mc.nominalBounds = new window.createjs.Rectangle(0,0,1356.3,58)
      
        const shape = new window.createjs.Shape();
        shape.graphics.f("#EBECDC").s().p("EhoYAEhQhkAAAAhkIAAl5QAAhkBkAAMDQxAAAQBkAAAABkIAAF5QAABkhkAAg");
        shape.setTransform(678.2,29);
        this.mc.timeline.addTween(window.createjs.Tween.get(this.shape).wait(45));
    }
}