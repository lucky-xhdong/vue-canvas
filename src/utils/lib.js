export class Lib {
    constructor(config = {}) {
        this.property = {
            width: 1920,
            height: 1080,
            fps: 25,
            color: "#FFFFFF"
        }
        if(Object.prototype.toString.call(config) === '[object Object]') {
            this.property = Object.assign({}, this.property, config)
        }
    }
}