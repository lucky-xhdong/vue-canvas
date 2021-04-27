// 此lib中的方法根据情况提取公用，以及根据不同页面设置适用于不同页面的方法，先放在一起做练习
import { resource } from '@/utils/config'
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
    setImg(item, id) {
        this.images[id] = new window.createjs.Bitmap(item)
        this.images[id].nominalBounds = new window.createjs.Rectangle(0,0,670,539)
    }
    setUnit(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        // if(stage.__proto__ !== window.createjs.Stage.prototype) {
        //     return
        // }
        this.mc = new window.createjs.MovieClip(config)
        this.mc.nominalBounds = new window.createjs.Rectangle(0,0,1356.3,58)
        // stage.addChild(this.mc)
        const shape = new window.createjs.Shape()
        shape.graphics.f("#EBECDC").s().p("EhoYAEhQhkAAAAhkIAAl5QAAhkBkAAMDQxAAAQBkAAAABkIAAF5QAABkhkAAg")
        shape.setTransform(678.2,29)
        this.mc.timeline.addTween(window.createjs.Tween.get(shape).wait(45))
        // this.mc.gotoAndPlay("start")
    }
    setText(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        // if(stage.__proto__ !== window.createjs.Stage.prototype) {
        //     return
        // }
        this.text = new window.createjs.MovieClip(config)
        this.text.nominalBounds = new window.createjs.Rectangle(0,0,443.2,48.7)
        // stage.addChild(this.text)

        // 文字打散
        const shape_0 = new window.createjs.Shape()
        shape_0.graphics.f("#FFFFFF").s().p("AOPB2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgAOtgYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAHRB2QgagdAAg0QAAg4AggcQAagWAnAAQArAAAbAbQAbAcAAAwQAAAogMAXQgMAXgXANQgXAMgbAAQgsAAgbgbgAHsgVQgRAUAAAmQAAAnARAVQARATAbABQAagBARgTQASgVAAgoQAAglgSgUQgRgTgagBQgbAAgRAUgAABB2QgZgdAAgzQAAgyAZgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgAAfgYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAjKBzIAAAZIghAAIAAkcIAkAAIAABmQAWgbAiAAQAUAAARAHQARAIALAOQALAOAGAUQAGARAAAXQAAA1gaAdQgaAdglAAQglAAgVgegAi6gVQgQAUAAAkQAAAmAKAQQAQAbAdABQAXgBARgTQAQgVAAgnQAAgngQgUQgQgSgXgBQgXABgRATgArxCKQgQgHgIgLQgIgKgDgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcACAJQADAOALAIQALAIAQAAQAQAAANgIQAOgIAGgOQAGgOAAgbIAAhtIAjAAIAADNIgfAAIAAgeQgZAjgpAAQgTAAgPgHgAMnCMIAAh+QAAgTgEgKQgEgMgLgGQgKgGgOAAQgXAAgQAOQgQAOAAAmIAABxIgjAAIAAjNIAfAAIAAAeQAXgjArABQATAAAQAGQAPAHAIALQAIALADAPQACAKAAAWIAAB/gADPCMIAAjNIAgAAIAAAgQAMgXAKgGQAKgIANABQASgBASALIgMAiQgNgJgNABQgLAAgKAHQgJAHgEAMQgGARAAAWIAABsgAlBCMIAAiCQAAgUgEgIQgDgKgJgFQgJgGgMAAQgWAAgPAPQgOAOAAAeIAAB4IgjAAIAAiHQAAgVgJgLQgIgMgUAAQgPAAgMAHQgNAJgGAPQgFANAAAcIAABrIgjAAIAAjNIAfAAIAAAdQAKgPAQgJQAQgJAVAAQAXAAAPAJQAOAKAHARQAYglAoABQAeAAARARQARAQAAAkIAACMgAt4CMIiWjfIAADfIgkAAIAAkcIAnAAICWDfIAAjfIAkAAIAAEcg")
        shape_0.setTransform(222.3,24.1)
    
        const shape_1 = new window.createjs.Shape()
        shape_1.graphics.f("#FFFFFF").s().p("AN2B2QgagdAAg0QAAg4AggcQAbgWAmAAQArAAAbAbQAbAcAAAwQAAAogMAXQgMAXgXANQgXAMgbAAQgsAAgbgbgAORgVQgRAUAAAmQAAAnARAVQARATAbABQAagBASgTQARgVAAgoQAAglgRgUQgSgTgagBQgbAAgRAUgAAWB2QgZgdAAgzQAAgyAZgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggWARQgYASgkAAQguAAgagbgAA0gYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgagBQgZABgQAQgAi1BzIAAAZIggAAIAAkcIAjAAIAABmQAWgbAjAAQATAAARAHQARAIALAOQALAOAGAUQAGARABAXQAAA1gbAdQgaAdglAAQglAAgVgegAilgVQgQAUAAAkQAAAmAKAQQARAbAcABQAXgBARgTQARgVAAgnQAAgngQgUQgRgSgWgBQgYABgRATgArcCKQgQgHgIgLQgIgKgDgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcACAJQADAOAMAIQAKAIAQAAQAQAAAOgIQAOgIAFgOQAGgOAAgbIAAhtIAkAAIAADNIggAAIAAgeQgZAjgpAAQgSAAgQgHgAHyCJQgKgGgFgKQgDgJAAggIAAh2IgbAAIAAgbIAbAAIAAgzIAjgWIAABJIAjAAIAAAbIgjAAIAAB4QgBAPACAEQACAEAFADQAEADAHgBIAQgBIAEAfQgOADgMAAQgTAAgLgGgALmCMIgpidIgqCdIglAAIg/jNIAkAAIAuCjIAKgrIAhh4IAkAAIApCeIAwieIAiAAIhBDNgADkCMIAAjNIAgAAIAAAgQAMgXAKgGQALgIAMABQASgBASALIgMAiQgNgJgNABQgLAAgKAHQgJAHgDAMQgHARABAWIAABsgAksCMIAAiCQAAgUgDgIQgEgKgJgFQgJgGgMAAQgWAAgOAPQgPAOAAAeIAAB4IgjAAIAAiHQAAgVgJgLQgIgMgUAAQgOAAgNAHQgMAJgHAPQgFANAAAcIAABrIgjAAIAAjNIAfAAIAAAdQAKgPAQgJQAQgJAVAAQAXAAAPAJQAPAKAGARQAYglAoABQAfAAAQARQARAQAAAkIAACMgAtjCMIiWjfIAADfIgkAAIAAkcIAnAAICWDfIAAjfIAkAAIAAEcg")
        shape_1.setTransform(222.4,24.1)
    
        const shape_2 = new window.createjs.Shape()
        shape_2.graphics.f("#FFFFFF").s().p("AQJB2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgAQngYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAMrB2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgANJgYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAh3B2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAZAbQAaAdAAAyIAAAJIiZAAQACAiASASQARATAaAAQATAAAOgLQAOgKAGgXIAkAFQgJAggXARQgVASgkAAQguAAgagbgAhZgYQgRAPgCAaIByAAQgCgZgJgNQgRgTgbgBQgYABgQAQgAlEBzIAAAZIghAAIAAkcIAkAAIAABmQAWgbAiAAQAUAAARAHQARAIALAOQALAOAGAUQAGARAAAXQAAA1gaAdQgaAdglAAQglAAgVgegAk0gVQgQAUAAAkQAAAmAKAQQAQAbAdABQAXgBARgTQAQgVAAgnQAAgngQgUQgQgSgXgBQgXABgRATgAtrCKQgQgHgIgLQgIgKgDgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcACAJQADAOALAIQALAIAQAAQAQAAANgIQAOgIAGgOQAGgOAAgbIAAhtIAjAAIAADNIgfAAIAAgeQgZAjgpAAQgTAAgPgHgAFjCJQgKgGgFgKQgEgJAAggIAAh2IgaAAIAAgbIAaAAIAAgzIAjgWIAABJIAjAAIAAAbIgjAAIAAB4QAAAPACAEQACAEAEADQAEADAIgBIAPgBIAFAfQgOADgMAAQgTAAgLgGgAKWCMIAAjNIAgAAIAAAgQAMgXAKgGQAKgIANABQASgBASALIgMAiQgNgJgNABQgLAAgKAHQgJAHgEAMQgGARAAAWIAABsgAI+CMIAAiDQAAgZgLgLQgLgNgVAAQgQAAgOAJQgOAIgFAOQgGAMAAAYIAABxIgjAAIAAkcIAjAAIAABnQAYgdAmABQAXgBARAKQARAIAHARQAIAQAAAcIAACDgABVCMIAAjNIAgAAIAAAgQAMgXAKgGQAKgIANABQASgBASALIgMAiQgNgJgNABQgLAAgKAHQgJAHgEAMQgGARAAAWIAABsgAm7CMIAAiCQAAgUgEgIQgDgKgJgFQgJgGgMAAQgWAAgPAPQgOAOAAAeIAAB4IgjAAIAAiHQAAgVgJgLQgIgMgUAAQgPAAgMAHQgNAJgGAPQgFANAAAcIAABrIgjAAIAAjNIAfAAIAAAdQAKgPAQgJQAQgJAVAAQAXAAAPAJQAOAKAHARQAYglAoABQAeAAARARQARAQAAAkIAACMgAvyCMIiWjfIAADfIgkAAIAAkcIAnAAICWDfIAAjfIAkAAIAAEcg")
        shape_2.setTransform(222.3,24.1)
    
        const shape_3 = new window.createjs.Shape()
        shape_3.graphics.f("#FFFFFF").s().p("AMfCMQgQgHgIgKQgIgLgDgPQgCgLAAgWIAAh/IAjAAIAABxQAAAcADAJQACAOALAIQALAIAQAAQAQAAANgIQAOgIAHgOQAFgOAAgbIAAhtIAjAAIAADOIgfAAIAAgfQgZAjgpAAQgTAAgPgHgAIqB4QgagcAAg1QAAg4AggbQAagXAnAAQArAAAbAcQAbAcAAAvQAAAogMAXQgMAXgXANQgXAMgbAAQgsAAgbgbgAJFgTQgRATAAAnQAAAoARAUQASAUAaAAQAaAAARgUQASgUAAgpQAAgmgSgSQgRgUgaAAQgaAAgSATgAgTB4QgbgdAAgyQAAgzAbgcQAZgdArAAQApAAAbAcQAbAcAAAyIgBAJIiZAAQADAiAPASQARATAaAAQATAAAOgLQAOgKAIgWIAkAEQgJAggXASQgXARgkAAQgtAAgZgbgAAJgWQgPAQgBAZIByAAQgDgYgLgNQgRgUgbAAQgYAAgQAQgAjfB1IAAAaIghAAIAAkdIAjAAIAABnQAWgcAiAAQAUAAARAHQARAIALAOQALAOAGAUQAHARAAAXQAAA1gbAdQgaAdglAAQglAAgUgegAjQgSQgQASAAAlQAAAmAKAQQAQAcAdAAQAXAAARgUQARgVgBgnQAAgngQgTQgPgTgXAAQgXAAgSAUgAsHCMQgQgHgIgKQgHgLgEgPQgCgLAAgWIAAh/IAjAAIAABxQAAAcACAJQAEAOAKAIQALAIAQAAQAQAAANgIQAOgIAGgOQAGgOAAgbIAAhtIAjAAIAADOIgfAAIAAgfQgZAjgpAAQgTAAgPgHgAPYCPIAAjOIAgAAIAAAgQAMgWAKgHQALgHAMAAQASAAASALIgMAhQgNgIgNAAQgLAAgKAHQgJAHgDAMQgHARABAWIAABtgAG2CPIAAiyIgfAAIAAgcIAfAAIAAgWQAAgVAEgKQAFgNANgJQAMgIAYAAQAPAAARADIgFAfQgKgCgKAAQgRAAgGAHQgHAGAAATIAAATIApAAIAAAcIgpAAIAACygAC5CPIAAjOIAgAAIAAAgQAMgWAKgHQAKgHANAAQASAAASALIgMAhQgNgIgMAAQgMAAgKAHQgIAHgEAMQgHARAAAWIAABtgAlXCPIAAiDQAAgTgDgJQgEgKgJgFQgJgGgMAAQgWAAgPAPQgNAOAAAeIAAB5IgkAAIAAiHQAAgVgIgMQgJgMgTAAQgPAAgNAIQgNAIgFAPQgGANAAAcIAABsIgjAAIAAjOIAgAAIAAAdQAJgPAQgJQARgJAUAAQAYAAAOAJQAOAKAHARQAYgkAoAAQAeAAARARQARARAAAhIAACPgAuOCPIiVjfIAADfIglAAIAAkdIAnAAICWDfIAAjfIAlAAIAAEdg")
        shape_3.setTransform(223.4,23.9)
    
        const shape_4 = new window.createjs.Shape()
        shape_4.graphics.f("#FFFFFF").s().p("AN5B4QgbgdAAgyQAAgzAbgcQAbgdArAAQApAAAbAcQAaAcAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgWIAkAEQgJAggXASQgXARgkAAQguAAgagbgAOXgWQgRAQgCAZIB0AAQgCgYgLgNQgRgUgbAAQgYAAgQAQgAAXB4QgZgdAAgyQAAgzAZgcQAbgdArAAQApAAAbAcQAaAcAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgWIAkAEQgJAggXASQgXARgkAAQguAAgagbgAA1gWQgRAQgCAZIB0AAQgCgYgLgNQgRgUgbAAQgYAAgQAQgAi0B1IAAAaIghAAIAAkdIAkAAIAABnQAWgcAiAAQAUAAARAHQARAIALAOQALAOAGAUQAGARAAAXQAAA1gaAdQgaAdglAAQglAAgVgegAikgSQgQASAAAlQAAAmAKAQQAQAcAdAAQAXAAARgUQAQgVAAgnQAAgngQgTQgQgTgXAAQgXAAgRAUgArbCMQgQgHgIgKQgIgLgDgPQgCgLAAgWIAAh/IAjAAIAABxQAAAcACAJQADAOALAIQALAIAQAAQAQAAANgIQAOgIAGgOQAGgOAAgbIAAhtIAjAAIAADOIgfAAIAAgfQgZAjgpAAQgTAAgPgHgALbCPIhPjOIAlAAIAtB7QAHAUAGAVQAFgQAIgXIAuh9IAlAAIhPDOgAJJCPIAAjOIAjAAIAADOgAHiCPIAAiyIgfAAIAAgcIAfAAIAAgWQAAgVAEgKQAFgNANgJQAMgIAXAAQAPAAASADIgFAfQgLgCgKAAQgQAAgGAHQgHAGAAATIAAATIAoAAIAAAcIgoAAIAACygADlCPIAAjOIAgAAIAAAgQAMgWAKgHQAKgHANAAQASAAASALIgMAhQgNgIgNAAQgLAAgKAHQgJAHgEAMQgGARAAAWIAABtgAkrCPIAAiDQAAgTgEgJQgDgKgJgFQgJgGgMAAQgWAAgPAPQgOAOAAAeIAAB5IgjAAIAAiHQAAgVgJgMQgIgMgUAAQgPAAgMAIQgNAIgGAPQgFANAAAcIAABsIgjAAIAAjOIAfAAIAAAdQAKgPAQgJQAQgJAVAAQAXAAAPAJQAOAKAHARQAYgkAoAAQAeAAARARQARARAAAhIAACPgAtiCPIiWjfIAADfIgkAAIAAkdIAnAAICWDfIAAjfIAkAAIAAEdgAJJhlIAAgpIAjAAIAAApg")
        shape_4.setTransform(222.3,23.9)
    
        const shape_5 = new window.createjs.Shape()
        shape_5.graphics.f("#FFFFFF").s().p("AIjCAQgWgQgFghIAigGQADAVAOALQANAMAYAAQAYgBAMgJQAMgLAAgNQAAgLgLgHQgHgFgdgHQgmgKgPgHQgPgHgIgNQgIgNAAgNQAAgNAHgMQAGgMALgIQAIgGAPgFQAOgDAQAAQAYgBATAIQASAGAJANQAJAMADATIgiAGQgDgQgLgKQgLgJgVAAQgYAAgKAIQgLAJAAAKQAAAHAFAFQAEAEAJADIAfAJQAmAKAOAHQAPAGAIAMQAJAMAAATQAAARgKAQQgLAPgTAJQgTAIgZAAQgoAAgVgRgABTB2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgABxgYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAh4BzIAAAZIghAAIAAkcIAkAAIAABmQAWgbAiAAQAUAAARAHQARAIAJAOQALAOAGAUQAGARAAAXQAAA1gZAdQgZAdglAAQglAAgVgegAhogVQgQAUAAAkQAAAmAKAQQAQAbAdABQAXgBARgTQAQgVAAgnQAAgngQgUQgQgSgXgBQgXABgRATgAqfCKQgQgHgIgLQgIgKgDgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcACAJQADAOALAIQALAIAQAAQAQAAANgIQAOgIAGgOQAGgOAAgbIAAhtIAjAAIAADNIgfAAIAAgeQgZAjgpAAQgTAAgPgHgAO2CMIg2hSIg2BSIgrAAIBMhsIhGhhIAsAAIAgAxIAOAVIAQgVIAjgxIAqAAIhIBfIBNBugALeCMIAAjNIAjAAIAADNgAEhCMIAAjNIAgAAIAAAgQAMgXAKgGQAKgIANABQASgBASALIgMAiQgNgJgNABQgLAAgKAHQgJAHgEAMQgGARAAAWIAABsgAjvCMIAAiCQAAgUgEgIQgDgKgJgFQgJgGgMAAQgWAAgPAPQgOAOAAAeIAAB4IgjAAIAAiHQAAgVgJgLQgIgMgUAAQgPAAgMAHQgNAJgGAPQgFANAAAcIAABrIgjAAIAAjNIAfAAIAAAdQAKgPAQgJQAQgJAVAAQAXAAAPAJQAOAKAHARQAYglAoABQAeAAARARQARAQAAAkIAACMgAsmCMIiWjfIAADfIgkAAIAAkcIAnAAICWDfIAAjfIAkAAIAAEcgALehoIAAgoIAjAAIAAAog")
        shape_5.setTransform(222.9,24.1)
    
        const shape_6 = new window.createjs.Shape()
        shape_6.graphics.f("#FFFFFF").s().p("AN+B2QgbgdAAgzQAAgyAbgdQAbgcArAAQAqAAAaAbQAbAdAAAyIgBAJIiaAAQACAiARASQARATAaAAQAUAAANgLQAOgKAIgXIAkAFQgIAggXARQgYASgkAAQgtAAgbgbgAOcgYQgRAPgBAaIB0AAQgDgZgLgNQgRgTgagBQgZABgQAQgAHYB2QgbgdAAgzQAAgyAbgdQAbgcArAAQAqAAAaAbQAbAdAAAyIgBAJIiaAAQACAiARASQARATAaAAQAUAAANgLQAOgKAIgXIAkAFQgIAggXARQgYASgkAAQgtAAgbgbgAH2gYQgRAPgBAaIB0AAQgDgZgLgNQgRgTgagBQgZABgQAQgAEOCAQgVgQgGghIAjgGQADAVANALQAOAMAYAAQAYgBALgJQAMgLAAgNQAAgLgKgHQgHgFgdgHQgngKgPgHQgPgHgHgNQgIgNAAgNQAAgNAGgMQAHgMALgIQAIgGAOgFQAOgDAQAAQAZgBASAIQATAGAIANQAJAMAEATIgjAGQgCgQgLgKQgMgJgUAAQgYAAgLAIQgKAJAAAKQAAAHAEAFQAEAEAKADIAfAJQAlAKAPAHQAPAGAIAMQAIAMAAATQAAARgKAQQgKAPgUAJQgTAIgYAAQgpAAgVgRgAjAB2QgbgdAAgzQAAgyAbgdQAbgcArAAQAqAAAaAbQAbAdAAAyIgBAJIiaAAQACAiARASQARATAaAAQAUAAANgLQAOgKAIgXIAkAFQgIAggXARQgYASgkAAQgtAAgbgbgAiigYQgRAPgBAaIB0AAQgDgZgLgNQgRgTgagBQgZABgQAQgAmMBzIAAAZIghAAIAAkcIAjAAIAABmQAWgbAjAAQATAAARAHQARAIALAOQALAOAHAUQAGARAAAXQAAA1gbAdQgaAdglAAQglAAgUgegAl8gVQgRAUAAAkQAAAmAKAQQARAbAcABQAXgBARgTQARgVAAgnQAAgngQgUQgQgSgXgBQgXABgRATgAu0CKQgQgHgIgLQgHgKgEgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcADAJQADAOALAIQAKAIAQAAQAQAAAOgIQAOgIAGgOQAFgOAAgbIAAhtIAkAAIAADNIggAAIAAgeQgYAjgqAAQgSAAgQgHgATTCMIAAh+QAAgTgFgKQgEgMgKgGQgLgGgOAAQgWAAgQAOQgRAOAAAmIAABxIgjAAIAAjNIAgAAIAAAeQAXgjArABQATAAAPAGQAQAHAIALQAIALADAPQACAKAAAWIAAB/gALhCMIhPjNIAlAAIAsB6QAIAVAGAVQAEgRAJgXIAuh8IAkAAIhODNgAANCMIAAjNIAfAAIAAAgQAMgXALgGQAKgIAMABQASgBASALIgMAiQgNgJgMABQgMAAgJAHQgJAHgEAMQgGARAAAWIAABsgAoECMIAAiCQAAgUgDgIQgEgKgJgFQgJgGgMAAQgWAAgOAPQgOAOAAAeIAAB4IgkAAIAAiHQAAgVgIgLQgJgMgTAAQgPAAgNAHQgMAJgGAPQgGANAAAcIAABrIgjAAIAAjNIAgAAIAAAdQAJgPARgJQAQgJAUAAQAYAAAOAJQAPAKAGARQAZglAnABQAfAAARARQAQAQAAAkIAACMgAw6CMIiWjfIAADfIglAAIAAkcIAnAAICWDfIAAjfIAlAAIAAEcg")
        shape_6.setTransform(221.7,24.1)
    
        const shape_7 = new window.createjs.Shape()
        shape_7.graphics.f("#FFFFFF").s().p("AKgCoQgXgQABgiIAiAFQACAQAKAHQANAKAXAAQAYAAANgKQANgKAFgRQADgLAAgiQgXAbgjAAQgqAAgYgfQgXgfAAgpQAAgeAKgZQALgZAVgOQAUgNAbAAQAlAAAYAdIAAgZIAgAAIAACyQAAAwgJAUQgKAUgWAMQgVAMgfAAQglAAgXgRgAK3g9QgQATAAAlQAAAnAQATQAQATAZAAQAYAAAQgTQARgTAAglQAAgngRgTQgRgTgYAAQgXAAgRATgAFoBOQgbgdAAgxQAAg0AbgcQAbgdArAAQAqAAAaAcQAbAcAAA0IgBAHIiaAAQACAiARASQARATAaAAQAUAAANgLQAOgKAIgWIAkAEQgIAggXASQgYARgkAAQgtAAgbgbgAGGhAQgRAQgBAbIB0AAQgDgagLgNQgRgUgaAAQgZAAgQAQgAhoBOQgbgdAAgxQAAg0AbgcQAbgdArAAQAoAAAaAcQAbAcAAA0IgBAHIiYAAQACAiARASQARATAaAAQAUAAAMgLQANgKAIgWIAkAEQgIAggXASQgYARgiAAQgtAAgbgbgAhKhAQgRAQgBAbIByAAQgDgagLgNQgPgUgaAAQgZAAgQAQgAk0BLIAAAaIghAAIAAkdIAjAAIAABnQAWgcAjAAQATAAARAHQARAIALAOQALAOAHAUQAGATAAAXQAAAzgbAdQgaAdglAAQglAAgUgegAkkg8QgRAUAAAlQAAAkAKAQQARAcAcAAQAXAAARgUQARgVAAglQAAgpgQgTQgQgTgXAAQgXAAgRAUgAtcBiQgQgHgIgKQgHgLgEgPQgCgLAAgWIAAh/IAjAAIAABxQAAAcADAJQADAOALAIQAKAIAQAAQAQAAAOgIQAOgIAGgOQAFgOAAgbIAAhtIAkAAIAADOIggAAIAAgfQgYAjgqAAQgSAAgQgHgARmBhQgLgGgEgJQgEgKAAggIAAh1IgaAAIAAgcIAaAAIAAgzIAjgVIAABIIAjAAIAAAcIgjAAIAAB3QAAAPABAEQACAFAFACQAEADAHAAIAQgCIAFAfQgPADgMAAQgTAAgKgGgAP0BlIAAiCQAAgagLgMQgMgMgVAAQgPAAgOAIQgOAIgGAOQgGAOAAAYIAABwIgjAAIAAkdIAjAAIAABnQAZgcAlAAQAXAAARAJQARAJAIAQQAHAQAAAeIAACCgAI3BlIAAjOIAjAAIAADOgABlBlIAAjOIAfAAIAAAgQAMgWALgHQAKgHAMAAQASAAASALIgMAhQgNgIgMAAQgMAAgJAHQgJAHgEAMQgGATAAAWIAABrgAmsBlIAAiBQAAgVgDgJQgEgKgJgFQgJgGgMAAQgWAAgOAPQgOAOAAAgIAAB3IgkAAIAAiFQAAgXgIgMQgJgMgTAAQgPAAgNAIQgMAIgGAPQgGAPAAAcIAABqIgjAAIAAjOIAgAAIAAAdQAJgPARgJQAQgJAUAAQAYAAAOAJQAPAKAGARQAZgkAnAAQAfAAARARQAQARAAAjIAACNgAviBlIiWjfIAADfIglAAIAAkdIAnAAICWDfIAAjfIAlAAIAAEdgAI3iPIAAgpIAjAAIAAApg")
        shape_7.setTransform(222.9,28.1)
    
        const shape_8 = new window.createjs.Shape()
        shape_8.graphics.f("#FFFFFF").s().p("AO7B2QgbgdAAgzQAAgyAbgdQAbgcArAAQAqAAAaAbQAbAdAAAyIgBAJIiaAAQACAiARASQARATAaAAQAUAAANgLQAOgKAIgXIAkAFQgIAggXARQgYASgkAAQgtAAgbgbgAPZgYQgRAPgBAaIB0AAQgDgZgLgNQgRgTgagBQgZABgQAQgAgqB2QgbgdAAgzQAAgyAbgdQAbgcApAAQAqAAAaAbQAbAdAAAyIgBAJIiYAAQACAiARASQAPATAaAAQAUAAANgLQAOgKAIgXIAkAFQgIAggXARQgYASgkAAQgrAAgbgbgAgMgYQgRAPgBAaIByAAQgDgZgLgNQgRgTgagBQgZABgOAQgAj2BzIAAAZIghAAIAAkcIAjAAIAABmQAWgbAjAAQATAAARAHQARAIALAOQALAOAHAUQAGARAAAXQAAA1gbAdQgaAdglAAQglAAgUgegAjmgVQgRAUAAAkQAAAmAKAQQARAbAcABQAXgBARgTQARgVAAgnQAAgngQgUQgQgSgXgBQgXABgRATgAseCKQgQgHgIgLQgHgKgEgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcADAJQADAOALAIQAKAIAQAAQAQAAAOgIQAOgIAGgOQAFgOAAgbIAAhtIAkAAIAADNIggAAIAAgeQgYAjgqAAQgSAAgQgHgANUCMIAAh+QAAgTgFgKQgEgMgKgGQgLgGgOAAQgWAAgQAOQgRAOAAAmIAABxIgjAAIAAjNIAgAAIAAAeQAXgjArABQATAAAPAGQAQAHAIALQAIALADAPQACAKAAAWIAAB/gAJ1CMIAAjNIAjAAIAADNgAIdCMIAAh+QAAgTgFgKQgEgMgKgGQgLgGgOAAQgWAAgQAOQgRAOAAAmIAABxIgjAAIAAjNIAgAAIAAAeQAXgjArABQATAAAPAGQAQAHAIALQAIALADAPQACAKAAAWIAAB/gACjCMIAAjNIAfAAIAAAgQAMgXALgGQAKgIAMABQASgBASALIgMAiQgNgJgMABQgMAAgJAHQgJAHgEAMQgGARAAAWIAABsgAluCMIAAiCQAAgUgDgIQgEgKgJgFQgJgGgMAAQgWAAgOAPQgOAOAAAeIAAB4IgkAAIAAiHQAAgVgIgLQgJgMgTAAQgPAAgNAHQgMAJgGAPQgGANAAAcIAABrIgjAAIAAjNIAgAAIAAAdQAJgPARgJQAQgJAUAAQAYAAAOAJQAPAKAGARQAZglAnABQAfAAARARQAQAQAAAkIAACMgAukCMIiWjfIAADfIglAAIAAkcIAnAAICWDfIAAjfIAlAAIAAEcgAJ1hoIAAgoIAjAAIAAAog")
        shape_8.setTransform(222.3,24.1)
    
        const shape_9 = new window.createjs.Shape()
        shape_9.graphics.f("#FFFFFF").s().p("AJ/B2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgAKdgYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAA+B2QgbgdAAgzQAAgyAbgdQAbgcArAAQApAAAbAbQAaAdAAAyIAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgXIAkAFQgJAggXARQgXASgkAAQguAAgagbgABcgYQgRAPgCAaIB0AAQgCgZgLgNQgRgTgbgBQgYABgQAQgAiNBzIAAAZIghAAIAAkcIAkAAIAABmQAWgbAiAAQAUAAARAHQARAIALAOQALAOAGAUQAEARAAAXQAAA1gYAdQgaAdglAAQglAAgVgegAh9gVQgQAUAAAkQAAAmAKAQQAQAbAdABQAXgBARgTQAQgVAAgnQAAgngQgUQgQgSgXgBQgXABgRATgAq0CKQgQgHgIgLQgIgKgDgQQgCgKAAgWIAAh/IAjAAIAABxQAAAcACAJQADAOALAIQALAIAQAAQAQAAANgIQAOgIAGgOQAGgOAAgbIAAhtIAjAAIAADNIgfAAIAAgeQgZAjgpAAQgTAAgPgHgAIaCJQgKgGgFgKQgEgJAAggIAAh2IgaAAIAAgbIAaAAIAAgzIAjgWIAABJIAjAAIAAAbIgjAAIAAB4QAAAPACAEQACAEAEADQAEADAIgBIAPgBIAFAfQgOADgMAAQgTAAgLgGgAPTCMIAAh+QAAgTgEgKQgEgMgLgGQgKgGgOAAQgXAAgQAOQgQAOAAAmIAABxIgjAAIAAjNIAfAAIAAAeQAXgjArABQATAAAQAGQAPAHAIALQAIALADAPQACAKAAAWIAAB/gAEMCMIAAjNIAgAAIAAAgQAMgXAKgGQAKgIANABQASgBASALIgMAiQgNgJgNABQgLAAgKAHQgJAHgEAMQgGARAAAWIAABsgAkECMIAAiCQAAgUgEgIQgDgKgJgFQgJgGgMAAQgWAAgPAPQgOAOAAAeIAAB4IgjAAIAAiHQAAgVgJgLQgIgMgUAAQgPAAgMAHQgNAJgGAPQgFANAAAcIAABrIgjAAIAAjNIAfAAIAAAdQAKgPAQgJQAQgJAVAAQAXAAAPAJQAOAKAHARQAYglAoABQAeAAARARQARAQAAAkIAACMgAs7CMIiWjfIAADfIgkAAIAAkcIAnAAICWDfIAAjfIAkAAIAAEcg")
        shape_9.setTransform(221.7,24.1)
    
        this.text.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_0}]}).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_0}]},1).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_0}]},1).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_0}]},1).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).wait(1))
        // this.text.gotoAndPlay("start")
    }
    setChangeImg(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        // if(stage.__proto__ !== window.createjs.Stage.prototype) {
        //     return
        // }
        this.changeImg = new window.createjs.MovieClip(config)
        this.changeImg.nominalBounds = new window.createjs.Rectangle(0,0,534.9,430.3)
        // stage.addChild(this.changeImg)
        let tween = window.createjs.Tween.get({})
        Object.keys(this.images).forEach((item, index) => {
            this.images[item].setTransform(0,0,0.798,0.798)
            tween = index ? tween.to({
                state: [{ t:  this.images[item].setTransform(200,200,0.798,0.798) }]
            }, 1) : tween.to({
                state: [{ t:  this.images[item].setTransform(0,0,0.798,0.798) }]
            })
        })
        
        this.changeImg.timeline.addTween(tween.wait(1))
        // this.changeImg.gotoAndPlay("start")
    }
    setUnit36() {
        this.unit36 = new window.createjs.Container()
        this.unit36.nominalBounds = new window.createjs.Rectangle(-33.5,-26.5,67,53)
        this.unit36.addChild(this.images['right'].setTransform(-33.5,-26.5))
    }
    setBtnStart() {
        this.btnStart = new window.createjs.Container()
        this.btnStart.nominalBounds = new window.createjs.Rectangle(-131.7,-40.7,268,76.1)

        const shape = new window.createjs.Shape();
        shape.graphics.f("rgba(255,255,255,0.008)").s().p("A07F8IAAr3MAp3AAAIAAL3g");
        shape.setTransform(2.3,-2.7);

        // 图层 1
        const shape_1 = new window.createjs.Shape();
        shape_1.graphics.f("#FF9966").s().p("AEJEcIgQgBQgVgCgegHQgdgJAFgiQAKgcAcAEQApAIAnAAQA3ACgDg1QAAgJgHgTIgFgNIkHAAQgbgCgCgfQACgfAbgDIDhAAQgFgHAAgHQAAgJAdgZQAEgHAGgBIipAAQgXgCgDgfQADgfAXgCIEvAAQAQAAAHAQQAFATgOAKQgdAWg7AkQgKAHAEAMIC5AAQAgADABAfQgBAfggACIigAAIACAFQAHAWAAAcQAAA8giAZQgdAVhIAAIgQAAgAs1D4IAAjTIiZAAQgKCmhiBAQgkAagagVQgbgbAcgaQBchMAChqIhsAAQgcgCgDgiQAFgdAdgDIBuAAIAAidIhgAAQgdgDgCgfQACgfAdgDIHTAAQAdADADAfQgDAfgdADIhOAAIAACdIBhAAQAZADACAdQgCAigZACIhhAAIAADTQgDAigfACQghgCgDgigAvMgfICXAAIAAidIiXAAgAoVESQgkgEAAgdQACgPAYgVQAfgdAUgaQhXhSAHgOQgCgHAriFIAOgyIgdAAQgfgCAAgkQAFgfAggDIAmAAQAAgFAHgXIADgNQAHghAjACQAiAFgFAhIgHAiIAkAAQAygCgFAyQAAAggCAQQARgiA8huQAYghAiAHQAcAMgMAmIhKCEQBDACBYgLQgHgPgJgdIgTgpQgKgcAdgOQAdgNATAbQA1BpAVBBQAJAfgcAPQgfAKgRgbQgHgMgHgRQhqAVhiADQgzADgHgbQgEBlguBXQApAhAMAVQAJAUgMAOQgMAOgTgCQgKgCgagTQgMgKgHgHQg8BMgfAAIgCAAgAn0AqQAdAhARANQArhhAAh/IgiAAQgOA8gpB2gAPpEJQg3gHgMgiQgFgpAtADIAMACQBtAbAHgwQAMg1AChKQAFhHgDh6QAAgXgQACImEAAQgdgCgDgiQADghAagDIGjAAQA8AAgCA0QACCYgFBZQgCBbgMA3QgFBNhqAAQgaAAghgFgAlWDXIAAijQgCg4A1ACIDCAAQAkAAALAKQAKAKAAApIAACcQAAAegLAIQgNAMgmAAIi7AAIgJAAQguAAACgygAkTBLIAABzQAAANAPAAICNAAQAMAAAAgPIAAhxQAAgOgKAAIiPAAQgPAAAAAOgAK7DIQgHghAhgRQCohPB4h9QAfgdAaAYQATAcgaAgQiBCJi5BRQgKAEgIAAQgVAAgLgXgANSAPQgrhPgdgtQgQggAagTQAfgOAVAcQAfAsAnBPQAMAfgYATQgLAHgJAAQgQAAgMgTgAAxghIAAhMQAAgzAwAAIAuAAIgOgQQgSgTgJgNQgMgTAUgYQATgRATAPQAYAVAcAlQAMATgJAQIBpAAQgHgFgJgOQgSgYgLgdQgKgaAYgOQAagPARATQAYAiAKAaQAQAigcAOIBPAAQArhIAMgYQARgYAhARQAZAUgPAaIgHAMIgdAtIAtAAQAugCgFAtQgCA6gKAfQgJAYgggFQgcgHAFgYQAHgRACgaQAAgMgHAAIl9AAQgRAAAAAQIAAAuQgDAbgcACQgfgCgDgbg");
        shape_1.setTransform(0,-2.1);

        const shape_2 = new window.createjs.Shape();
        shape_2.graphics.f().s("#F5F6E8").ss(8,1,1).p("AFWigQAcgOgQgiQgKgagYgiQgRgTgaAPQgYAOAKAaQALAdASAYQAJAOAHAFIhpAAQAJgQgMgTQgcglgYgVQgTgPgTARQgUAYAMATQAJANASATQAJALAFAFIguAAQgwAAAAAzIAABMQADAbAfACQAcgCADgbIAAguQAAgQARAAIF9AAQAHAAAAAMQgCAagHARQgFAYAcAHQAgAFAJgYQAKgfACg6QAFgtguACIgtAAQAKgOATgfQAEgIADgEQAPgagZgUQghgRgRAYQgMAYgrBIgACfhCQgXACgDAfQADAfAXACICpAAQgGABgEAHQgdAZAAAJQAAAHAFAHIjhAAQgbADgCAfQACAfAbACIEHAAQADAFACAIQAHATAAAJQADA1g3gCQgnAAgpgIQgcgEgKAcQgFAiAdAJQAeAHAVACQACAAAOABQBUACAhgXQAigZAAg8QAAgcgHgWIgCgFICgAAQAggCABgfQgBgfgggDIi5AAQgEgMAKgHQA7gkAdgWQAOgKgFgTQgHgQgQAAgALHj2QgaADgDAhQADAiAdACIGEAAQAQgCAAAXQADB6gFBHQgCBKgMA1QgHAwhtgbQgJgCgDAAQgtgDAFApQAMAiA3AHQCjAYAHhgQAMg3AChbQAFhZgCiYQACg0g8AAgANSAPQATAdAdgRQAYgTgMgfQgnhPgfgsQgVgcgfAOQgaATAQAgQAdAtArBPgALVCWQghARAHAhQAPAfAjgMQC5hRCBiJQAagggTgcQgagYgfAdQh4B9ioBPgAx0kAQgdADgCAfQACAfAdADIBgAAIAACdIhuAAQgdADgFAdQADAiAcACIBsAAQgCBqhcBMQgcAaAbAbQAaAVAkgaQBihAAKimICZAAIAADTQADAiAhACQAfgCADgiIAAjTIBhAAQAZgCACgiQgCgdgZgDIhhAAIAAidIBOAAQAdgDADgfQgDgfgdgDgAs1gfIiXAAIAAidICXAAgAmsjQQAFgTACgPQAFghgigFQgjgCgHAhIgDANQgHAXAAAFIgmAAQggADgFAfQAAAkAfACIAdAAQgEARgKAhQgrCFACAHQgHAOBXBSQgUAagfAdQgYAVgCAPQAAAdAkAEQAfADA+hPQAHAHAMAKQAaATAKACQATACAMgOQAMgOgJgUQgMgVgpghQAuhXAEhlQAHAbAzgDQBigDBqgVQAHARAHAMQARAbAfgKQAcgPgJgfQgVhBg1hpQgTgbgdANQgdAOAKAcQAHAPAMAaQAJAdAHAPQhYALhDgCQBIh/ACgFQAMgmgcgMQgigHgYAhQg8BugRAiQACgQAAggQAFgygyACgAmbiIQAAB/grBhQgRgNgdghQAph2AOg8gAkjgCQg1gCACA4IAACjQgCA3A3gFIC7AAQAmAAANgMQALgIAAgeIAAicQAAgpgKgKQgLgKgkAAgAhrC8QAAAPgMAAIiNAAQgPAAAAgNIAAhzQAAgOAPAAICPAAQAKAAAAAOg");
        shape_2.setTransform(0,-2.1);

        const shape_3 = new window.createjs.Shape();
        shape_3.graphics.f("#FFFFFF").s().p("AEJEcIgQgBQgVgCgegHQgdgJAFgiQAKgcAcAEQApAIAnAAQA3ACgDg1QAAgJgHgTIgFgNIkHAAQgbgCgCgfQACgfAbgDIDhAAQgFgHAAgHQAAgJAdgZQAEgHAGgBIipAAQgXgCgDgfQADgfAXgCIEvAAQAQAAAHAQQAFATgOAKQgdAWg7AkQgKAHAEAMIC5AAQAgADABAfQgBAfggACIigAAIACAFQAHAWAAAcQAAA8giAZQgdAVhIAAIgQAAgAs1D4IAAjTIiZAAQgKCmhiBAQgkAagagVQgbgbAcgaQBchMAChqIhsAAQgcgCgDgiQAFgdAdgDIBuAAIAAidIhgAAQgdgDgCgfQACgfAdgDIHTAAQAdADADAfQgDAfgdADIhOAAIAACdIBhAAQAZADACAdQgCAigZACIhhAAIAADTQgDAigfACQghgCgDgigAvMgfICXAAIAAidIiXAAgAoVESQgkgEAAgdQACgPAYgVQAfgdAUgaQhXhSAHgOQgCgHAriFIAOgyIgdAAQgfgCAAgkQAFgfAggDIAmAAQAAgFAHgXIADgNQAHghAjACQAiAFgFAhIgHAiIAkAAQAygCgFAyQAAAggCAQQARgiA8huQAYghAiAHQAcAMgMAmIhKCEQBDACBYgLQgHgPgJgdIgTgpQgKgcAdgOQAdgNATAbQA1BpAVBBQAJAfgcAPQgfAKgRgbQgHgMgHgRQhqAVhiADQgzADgHgbQgEBlguBXQApAhAMAVQAJAUgMAOQgMAOgTgCQgKgCgagTQgMgKgHgHQg8BMgfAAIgCAAgAn0AqQAdAhARANQArhhAAh/IgiAAQgOA8gpB2gAPpEJQg3gHgMgiQgFgpAtADIAMACQBtAbAHgwQAMg1AChKQAFhHgDh6QAAgXgQACImEAAQgdgCgDgiQADghAagDIGjAAQA8AAgCA0QACCYgFBZQgCBbgMA3QgFBNhqAAQgaAAghgFgAlWDXIAAijQgCg4A1ACIDCAAQAkAAALAKQAKAKAAApIAACcQAAAegLAIQgNAMgmAAIi7AAIgJAAQguAAACgygAkTBLIAABzQAAANAPAAICNAAQAMAAAAgPIAAhxQAAgOgKAAIiPAAQgPAAAAAOgAK7DIQgHghAhgRQCohPB4h9QAfgdAaAYQATAcgaAgQiBCJi5BRQgKAEgIAAQgVAAgLgXgANSAPQgrhPgdgtQgQggAagTQAfgOAVAcQAfAsAnBPQAMAfgYATQgLAHgJAAQgQAAgMgTgAAxghIAAhMQAAgzAwAAIAuAAIgOgQQgSgTgJgNQgMgTAUgYQATgRATAPQAYAVAcAlQAMATgJAQIBpAAQgHgFgJgOQgSgYgLgdQgKgaAYgOQAagPARATQAYAiAKAaQAQAigcAOIBPAAQArhIAMgYQARgYAhARQAZAUgPAaIgHAMIgdAtIAtAAQAugCgFAtQgCA6gKAfQgJAYgggFQgcgHAFgYQAHgRACgaQAAgMgHAAIl9AAQgRAAAAAQIAAAuQgDAbgcACQgfgCgDgbg");
        shape_3.setTransform(0,-2.1);

        const shape_4 = new window.createjs.Shape();
        shape_4.graphics.f().s("rgba(0,0,0,0.329)").ss(8,1,1).p("AFWigQAcgOgQgiQgKgagYgiQgRgTgaAPQgYAOAKAaQALAdASAYQAJAOAHAFIhpAAQAJgQgMgTQgcglgYgVQgTgPgTARQgUAYAMATQAJANASATQAJALAFAFIguAAQgwAAAAAzIAABMQADAbAfACQAcgCADgbIAAguQAAgQARAAIF9AAQAHAAAAAMQgCAagHARQgFAYAcAHQAgAFAJgYQAKgfACg6QAFgtguACIgtAAQAKgOATgfQAEgIADgEQAPgagZgUQghgRgRAYQgMAYgrBIgACfhCQgXACgDAfQADAfAXACICpAAQgGABgEAHQgdAZAAAJQAAAHAFAHIjhAAQgbADgCAfQACAfAbACIEHAAQADAFACAIQAHATAAAJQADA1g3gCQgnAAgpgIQgcgEgKAcQgFAiAdAJQAeAHAVACQACAAAOABQBUACAhgXQAigZAAg8QAAgcgHgWIgCgFICgAAQAggCABgfQgBgfgggDIi5AAQgEgMAKgHQA7gkAdgWQAOgKgFgTQgHgQgQAAgALHj2QgaADgDAhQADAiAdACIGEAAQAQgCAAAXQADB6gFBHQgCBKgMA1QgHAwhtgbQgJgCgDAAQgtgDAFApQAMAiA3AHQCjAYAHhgQAMg3AChbQAFhZgCiYQACg0g8AAgANSAPQATAdAdgRQAYgTgMgfQgnhPgfgsQgVgcgfAOQgaATAQAgQAdAtArBPgALVCWQghARAHAhQAPAfAjgMQC5hRCBiJQAagggTgcQgagYgfAdQh4B9ioBPgAx0kAQgdADgCAfQACAfAdADIBgAAIAACdIhuAAQgdADgFAdQADAiAcACIBsAAQgCBqhcBMQgcAaAbAbQAaAVAkgaQBihAAKimICZAAIAADTQADAiAhACQAfgCADgiIAAjTIBhAAQAZgCACgiQgCgdgZgDIhhAAIAAidIBOAAQAdgDADgfQgDgfgdgDgAs1gfIiXAAIAAidICXAAgAmsjQQAFgTACgPQAFghgigFQgjgCgHAhIgDANQgHAXAAAFIgmAAQggADgFAfQAAAkAfACIAdAAQgEARgKAhQgrCFACAHQgHAOBXBSQgUAagfAdQgYAVgCAPQAAAdAkAEQAfADA+hPQAHAHAMAKQAaATAKACQATACAMgOQAMgOgJgUQgMgVgpghQAuhXAEhlQAHAbAzgDQBigDBqgVQAHARAHAMQARAbAfgKQAcgPgJgfQgVhBg1hpQgTgbgdANQgdAOAKAcQAHAPAMAaQAJAdAHAPQhYALhDgCQBIh/ACgFQAMgmgcgMQgigHgYAhQg8BugRAiQACgQAAggQAFgygyACgAmbiIQAAB/grBhQgRgNgdghQAph2AOg8gAhrC8QAAAPgMAAIiNAAQgPAAAAgNIAAhzQAAgOAPAAICPAAQAKAAAAAOgAkjgCQg1gCACA4IAACjQgCA3A3gFIC7AAQAmAAANgMQALgIAAgeIAAicQAAgpgKgKQgLgKgkAAg");
        shape_4.setTransform(0,2.1);

        this.btnStart.addChild(shape_4, shape_3, shape_2, shape_1, shape);
    }
    setLeft(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        this.left = new window.createjs.MovieClip(config)
        this.left.nominalBounds = new window.createjs.Rectangle(-0.6, 15.8, 46.4, 80.3)

        const shape = new window.createjs.Shape();
        shape.graphics.f().s("#FEB36F").ss(13,1,1).p("AidAAIE7E+IAAp7g");
        shape.setTransform(21.8,54.1);
    
        const shape_1 = new window.createjs.Shape();
        shape_1.graphics.f("#FEB36F").s().p("AidAAIE7k9IAAJ7g");
        shape_1.setTransform(21.8,54.1);
    
        const shape_2 = new window.createjs.Shape();
        shape_2.graphics.f().s("#DBD5C5").ss(13,1,1).p("AidAAIE7E+IAAp7g");
        shape_2.setTransform(23.4,57.7);
    
        const shape_3 = new window.createjs.Shape();
        shape_3.graphics.f("#DBD5C5").s().p("AidAAIE7k9IAAJ7g");
        shape_3.setTransform(23.4,57.7);
    
        const shape_4 = new window.createjs.Shape();
        shape_4.graphics.f().s("#DEA068").ss(13,1,1).p("AidAAIE7E+IAAp7g");
        shape_4.setTransform(21.8,54.1);
    
        const shape_5 = new window.createjs.Shape();
        shape_5.graphics.f("#DEA068").s().p("AidAAIE7k9IAAJ7g");
        shape_5.setTransform(21.8,54.1);
    
        const shape_6 = new window.createjs.Shape();
        shape_6.graphics.f("rgba(255,255,255,0.008)").s().p("AnEIzIAAxmIOJAAIAARmg");
        shape_6.setTransform(27.2,55.8);
    
        this.left.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).to({state:[{t:shape_3},{t:shape_2},{t:shape_5},{t:shape_4}]},2).to({state:[{t:shape_6}]},1).wait(1));
    }
    setRight(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        this.right = new window.createjs.MovieClip(config)
        this.right.nominalBounds = new window.createjs.Rectangle(-0.6, 15.8, 46.4, 80.3)

        const shape = new window.createjs.Shape();
        shape.graphics.f().s("#FEB36F").ss(13,1,1).p("AidAAIE7E+IAAp7g");
        shape.setTransform(21.7,54.1,1,1,0,0,180);
    
        const shape_1 = new window.createjs.Shape();
        shape_1.graphics.f("#FEB36F").s().p("AidAAIE7k9IAAJ7g");
        shape_1.setTransform(21.7,54.1,1,1,0,0,180);
    
        const shape_2 = new window.createjs.Shape();
        shape_2.graphics.f().s("#DBD5C5").ss(13,1,1).p("AidAAIE7E+IAAp7g");
        shape_2.setTransform(23.3,57.7,1,1,0,0,180);
    
        const shape_3 = new window.createjs.Shape();
        shape_3.graphics.f("#DBD5C5").s().p("AidAAIE7k9IAAJ7g");
        shape_3.setTransform(23.3,57.7,1,1,0,0,180);
    
        const shape_4 = new window.createjs.Shape();
        shape_4.graphics.f().s("#DEA068").ss(13,1,1).p("AidAAIE7E+IAAp7g");
        shape_4.setTransform(21.7,54.1,1,1,0,0,180);
    
        const shape_5 = new window.createjs.Shape();
        shape_5.graphics.f("#DEA068").s().p("AidAAIE7k9IAAJ7g");
        shape_5.setTransform(21.7,54.1,1,1,0,0,180);
    
        const shape_6 = new window.createjs.Shape();
        shape_6.graphics.f("rgba(255,255,255,0.008)").s().p("AnEIzIAAxmIOJAAIAARmg");
        shape_6.setTransform(15.2,55.8);
    
        this.right.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).to({state:[{t:shape_3},{t:shape_2},{t:shape_5},{t:shape_4}]},2).to({state:[{t:shape_6}]},1).wait(1));
    }
    setImageUnit(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        const { commonCode, specialCode, matrix, special, MAX_NUM } = resource.demo3

        for(let i = MAX_NUM; i > 0; i--) {
            const flag = i > 0 && i < 10 ? `0${i}` : i
            const unit = `unit${i}`

            this[unit] = new window.createjs.MovieClip(config)
            this[unit].nominalBounds = new window.createjs.Rectangle(-11.5,-10.1,331,269)

            this[unit].gou = Object.create(this.unit36)
            this[unit].gou.setTransform(275.4,26.5)
	        this[unit].timeline.addTween(window.createjs.Tween.get(this[unit].gou).wait(2))

            const isSpecial = special.includes(i)
            const code = isSpecial ? specialCode : commonCode
            const shape = new window.createjs.Shape();
	        shape.graphics.f("rgba(255,255,255,0.447)").s().p(code)
            const { x, y, scaleX, scaleY } = matrix
	        isSpecial ? shape.setTransform(x, y) : shape.setTransform(x, y, scaleX, scaleY)

	        this[unit].timeline.addTween(window.createjs.Tween.get(shape).to({_off:true},1).wait(1));
            this.images[`_${flag}`].setTransform(0,0,0.461,0.461)
            i === 26 ? this[unit].timeline.addTween(window.createjs.Tween.get(this.images[`_${flag}`]).to({_off:true},1).wait(1)) : this[unit].timeline.addTween(window.createjs.Tween.get(this.images[`_${flag}`]).wait(2))
        	
            const shape_1 = new window.createjs.Shape();
            shape_1.graphics.f().s("#85D2C0").ss(6,1,1).p("A1Q0hMAqhAAAQBtAABNBNQBNBNAABtMAAAAg1QAABthNBNQhNBNhtAAMgqhAAAQhtAAhNhNQhNhNAAhtMAAAgg1QAAhtBNhNQBNhNBtAAg");
            shape_1.setTransform(154,124.3);

            const shape_2 = new window.createjs.Shape();
            shape_2.graphics.f("#FFFFFF").s().p("A1QUiQhtAAhNhNQhNhNAAhtMAAAgg1QAAhtBNhNQBNhNBtAAMAqhAAAQBtAABNBNQBNBNAABtMAAAAg1QAABthNBNQhNBNhtAAg");
            shape_2.setTransform(154,124.3);

            const shape_3 = new window.createjs.Shape();
            shape_3.graphics.f().s("#FFB465").ss(6,1,1).p("A0OzhMAodAAAQBnAABJBJQBKBKAABnIAAfPQAABnhKBJQhJBKhnAAMgodAAAQhnAAhKhKQhJhJAAhnIAA/PQAAhnBJhKQBKhJBnAAg");
            shape_3.setTransform(154,124.3,1.052,1.052);

            const shape_4 = new window.createjs.Shape();
            shape_4.graphics.f("#FFFFFF").s().p("A0OTiQhnAAhJhKQhKhJAAhnIAA/PQAAhnBKhKQBJhJBnAAMAodAAAQBnAABJBJQBKBKAABnIAAfPQAABnhKBJQhJBKhnAAg");
            shape_4.setTransform(154,124.3,1.052,1.052);

            this[unit].timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_2},{t:shape_1}]}).to({state:[{t:shape_4},{t:shape_3}]},1).wait(1));
        }
    }
    setCover() {
        this.cover = new window.createjs.Container()
        this.cover.nominalBounds = new window.createjs.Rectangle(-1005.3,-540,2010.6,1080)

        const shape = new window.createjs.Shape();
        shape.graphics.f("#FFFFFF").s().p("AvkDSQBRhZACiuIABg8IhEAAIAAglIBEAAIAAhYIAnAAIgBBYIByAAQgCC6gEBrQgCBXhAgDIg4gCIgIgqQAhAEAWABQAhABADgwQAFhzABiLIhLAAIgCA/QgBC9haBnIgdgggAH4DQQA3hJAAicIAAiEIDdAAIgDhUIApAAQAAAjABAxICoAAIAAAkIimAAQAECBATBBQAwhAAehQIAnAQQgqBig7BJQAkBKAiAAQAMgBAHgWQAHgkAEglIAlANQgIA0gIAiQgKAkgfACQgeACgbgWQgdgXgWgnQgoAsgyAiQgMgPgPgPQA4glAsgyQgchJgFieIi5AAIAABKICOAAQgEBbgEBAQgHBDg7AAQgUAAghgCIgIgpQAiAGAXAAQAdgBADgnQAEgtABhAIhlAAQgDCohBBRIgZgigAAKDMQCRgkABhwIiHAAIAAgjIHLAAIAAAjIidAAIAABoQAAAgAgAAIA0AAQAhAAAEgWQADgXABgpIArAOQgDAogFAaQgHApg0AAIhQAAQg9ABAAg/IAAhtIhYAAQAACKihAuQgKgRgOgTgAlhDuIAAhEQg5AFg/AGIgIgjQA5gDBHgFIAAgwIhrAAIAAgfQAUgaATggIg4AAIAAgcIBKAAQALgWAMgYIAkALIgTAjICOAAIAAAcIihAAQgUAigRAZIBCAAIAAgtIAjAAIAAAtIBcAAIAAAeIhcAAIAAAtIBfgHQgCAQAAAQIhdAHIAABHgAiCC/QgNgSgLgXQgqAvgwAkQgOgRgPgJQA6gnAug5QgZhLgHhwIkfAAIAAghIB6AAIAAgtIhmAAIAAgfIBmAAIAAgyIAkAAIAAAyIBfAAIAAAfIhfAAIAAAtICAAAIgGiBIAlAAQABBGAEA7ICiAAIAAAhIihAAQAFBYATA/QAkg0Adg/IAhAQQglBPgwA+QAQAkAUAYQANAPALAAQANAAAFgUQAFgaAFgoQAUAIAQAFQgHAqgIAgQgMArgfAAQgkAAgggtgAo1DiIAAgxIhsAAIAAAxIgnAAIAAmQIC6AAIAAGQgAqhCOIBsAAIAAkXIhsAAgABSgsIAAgiIFYAAIAAAigAGzhYIAAg3IlxAAIAAA3IgpAAIAAhaIDSAAQgKgTgPgbIAmgSQATAmANAaIDCAAIAABagAiKjKIAZgXQAwAlAgAcIgcAcQgigjgrgjgANXjVIAVgaQAoAYAkAaIgXAdQgkgcgmgZg");
        shape.setTransform(5,-108);
    
        this.btnStart.setTransform(6.6,88.9);
    
        const shape_1 = new window.createjs.Shape();
        shape_1.graphics.f("#FF9966").s().p("EhoYAEhQhkAAAAhkIAAl5QAAhkBkAAMDQxAAAQBkAAAABkIAAF5QAABkhkAAg");
        shape_1.setTransform(6.7,-26.2,1,0.31);
    
        const shape_2 = new window.createjs.Shape();
        shape_2.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_2.setTransform(933.5,0,0.401,0.93);
    
        this.mc.setTransform(6.7,-26.2,1,0.31,0,0,0,678.1,29);
    
        const shape_3 = new window.createjs.Shape();
        shape_3.graphics.f("rgba(83,175,153,0.447)").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_3.setTransform(789.1,0,0.401,0.93);
    
        const shape_4 = new window.createjs.Shape();
        shape_4.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_4.setTransform(645.5,0,0.401,0.93);
    
        const shape_5 = new window.createjs.Shape();
        shape_5.graphics.f("rgba(83,175,153,0.447)").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_5.setTransform(502,0,0.401,0.93);
    
        const shape_6 = new window.createjs.Shape();
        shape_6.graphics.f("#85D2C0").s().p("EgLMBUYMAAAiovIWZAAMAAACovg");
        shape_6.setTransform(358.4,0);
    
        const shape_7 = new window.createjs.Shape();
        shape_7.graphics.f("rgba(83,175,153,0.447)").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_7.setTransform(214.9,0,0.401,0.93);
    
        const shape_8 = new window.createjs.Shape();
        shape_8.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_8.setTransform(71.3,0,0.401,0.93);
    
        const shape_9 = new window.createjs.Shape();
        shape_9.graphics.f("rgba(83,175,153,0.447)").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_9.setTransform(-72.2,0,0.401,0.93);
    
        const shape_10 = new window.createjs.Shape();
        shape_10.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_10.setTransform(-215.8,0,0.401,0.93);
    
        const shape_11 = new window.createjs.Shape();
        shape_11.graphics.f("rgba(83,175,153,0.447)").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_11.setTransform(-359.3,0,0.401,0.93);
    
        const shape_12 = new window.createjs.Shape();
        shape_12.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_12.setTransform(-502.9,0,0.401,0.93);
    
        const shape_13 = new window.createjs.Shape();
        shape_13.graphics.f("rgba(83,175,153,0.447)").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_13.setTransform(-646.4,0,0.401,0.93);
    
        const shape_14 = new window.createjs.Shape();
        shape_14.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
        shape_14.setTransform(-790,0,0.401,0.93);
    
        const shape_15 = new window.createjs.Shape();
        shape_15.graphics.f("rgba(83,175,153,0.447)").s().p("EgLMBUYMAAAiovIWZAAMAAACovg");
        shape_15.setTransform(-933.5,0);
    
        const shape_16 = new window.createjs.Shape();
        shape_16.graphics.f("#FFFFFF").s().p("EiV/BUYMAAAiovMEr+AAAMAAACovg");
        shape_16.setTransform(-45.3,0);
    
        this.cover.addChild(shape_16,shape_15,shape_14,shape_13,shape_12,shape_11,shape_10,shape_9,shape_8,shape_7,shape_6,shape_5,shape_4,shape_3,this.mc,shape_2,shape_1,this.btnStart,shape);
    }
    setSmall(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        this.small = new window.createjs.MovieClip(config)
        this.small.nominalBounds = new window.createjs.Rectangle(-3,-3,683.5,837)

        this.unit6.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
        this.unit5.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
        this.unit4.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
        this.unit3.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
        this.unit2.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
        this.unit1.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
        this.unit12.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
        this.unit11.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
        this.unit10.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
        this.unit9.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
        this.unit8.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
        this.unit7.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
        this.unit18.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
        this.unit17.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
        this.unit16.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
        this.unit15.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
        this.unit14.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
        this.unit13.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
        this.unit24.setTransform(515,699.5,1,1,0,0,0,154,124.3);
        this.unit23.setTransform(162.5,699.5,1,1,0,0,0,154,124.3);
        this.unit22.setTransform(515,415.5,1,1,0,0,0,154,124.3);
        this.unit21.setTransform(162.5,415.5,1,1,0,0,0,154,124.3);
        this.unit20.setTransform(515,131.5,1,1,0,0,0,154,124.3);
        this.unit19.setTransform(162.5,131.5,1,1,0,0,0,154,124.3);
        this.unit30.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
        this.unit29.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
        this.unit28.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
        this.unit27.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
        this.unit26.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
        this.unit25.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
        this.unit35.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
        this.unit34.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
        this.unit33.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
        this.unit32.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
        this.unit31.setTransform(163,133.5,1,1,0,0,0,154.5,124.3);
    
        this.small.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:this.unit1},{t:this.unit2},{t:this.unit3},{t:this.unit4},{t:this.unit5},{t:this.unit6}]}).to({state:[{t:this.unit7},{t:this.unit8},{t:this.unit9},{t:this.unit10},{t:this.unit11},{t:this.unit12}]},1).to({state:[{t:this.unit13},{t:this.unit14},{t:this.unit15},{t:this.unit16},{t:this.unit17},{t:this.unit18}]},1).to({state:[{t:this.unit19},{t:this.unit20},{t:this.unit21},{t:this.unit22},{t:this.unit23},{t:this.unit24}]},1).to({state:[{t:this.unit25},{t:this.unit26},{t:this.unit27},{t:this.unit28},{t:this.unit29},{t:this.unit30}]},1).to({state:[{t:this.unit31},{t:this.unit32},{t:this.unit33},{t:this.unit34},{t:this.unit35}]},1).wait(1));
    }
    setIndex(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        this.index = new window.createjs.MovieClip(config)
        this.index.nominalBounds = new window.createjs.Rectangle(908,540,2010.6,1080)

        // cover
        this.cover.setTransform(953.3,540);
        this.index.timeline.addTween(window.createjs.Tween.get(this.cover).wait(35));
    
        // 文本
        this.text.setTransform(533.3,785,1,1,0,0,0,221.6,24.4);
        this.index.timeline.addTween(window.createjs.Tween.get(this.text).wait(35));
    
        // 大图
        this.changeImg.setTransform(537.5,405.9,1,1,0,0,0,267.4,215.2);
        this.index.timeline.addTween(window.createjs.Tween.get(this.changeImg).wait(35));
    
        // 小图
        this.small.setTransform(1396.1,547.5,1,1,0,0,0,338.7,415.4);
        this.index.timeline.addTween(window.createjs.Tween.get(this.small).wait(35));
    
        // 翻页按钮
        this.index.btnNext = Object.create(this.right);
        this.index.btnNext.setTransform(1797.9,515.9,1,1,0,0,0,16.4,32.5)
        new window.createjs.ButtonHelper(this.index.btnNext, 0, 1, 2, false, this.right, 3);
    
        this.index.btnPrev = Object.create(this.left);
        this.index.btnPrev.setTransform(986,515.9,1.048,1,0,0,0,16.4,32.5);
        new window.createjs.ButtonHelper(this.index.btnPrev, 0, 1, 2, false, this.left, 3);
    
        this.index.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:this.index.btnPrev},{t:this.index.btnNext}]}).wait(35));
    
        // BG
        const shape = new window.createjs.Shape();
        shape.graphics.f("#3D9882").s("#90E2CF").ss(7.9,1,1).rr(-21.45,-21.45,42.9,42.9,21.45);
        shape.setTransform(834,701,0.97,0.97);
    
        const shape_1 = new window.createjs.Shape();
        shape_1.graphics.f("#90E2CF").s().p("Eg4RAAaQgFgIAAgKQAAgMAKgLQALgKAOAAMBvnAAAQAOAAAKAKQALALAAAMQAAAKgFAIg");
        shape_1.setTransform(535.7,650.5,0.97,0.97);
    
        const shape_2 = new window.createjs.Shape();
        shape_2.graphics.f("#3D9882").s("#90E2CF").ss(7.9,1,1).rr(-21.45,-21.45,42.9,42.9,21.45);
        shape_2.setTransform(233.6,701,0.97,0.97);
    
        const shape_3 = new window.createjs.Shape();
        shape_3.graphics.f().s("#90E2CF").ss(6,1,1).p("A+WwGMA8uAAAQGeAAElElQElEkAAGfIAAA9QAAGfklEkQklElmeAAMg8uAAAQmfAAklklQklkkAAmfIAAg9QAAmfElkkQElklGfAAg");
        shape_3.setTransform(535.6,787.1,0.97,0.97);
    
        const shape_4 = new window.createjs.Shape();
        shape_4.graphics.f("#53AF99").s().p("A+WQHQmfAAklklQkkkkAAmfIAAg9QAAmfEkkkQElklGfAAMA8uAAAQGeAAEkElQEmEkAAGfIAAA9QAAGfkmEkQkkElmeAAg");
        shape_4.setTransform(535.6,787.1,0.97,0.97);
    
        const shape_5 = new window.createjs.Shape();
        shape_5.graphics.f("#85D2C0").s().p("AyqTaQjfAAieihQifiiAAjkIAA1lQAAjlCfihQCeigDfAAMAlVAAAQDgAACeCgQCeChAADlIAAVlQAADkieCiQieChjgAAg");
        shape_5.setTransform(535.7,384.5,2.016,2.016);
    
        const shape_6 = new window.createjs.Shape();
        shape_6.graphics.f("#85D2C0").s().p("AyqTaQjfAAieihQifiiAAjkIAA1lQAAjlCfihQCeigDfAAMAlVAAAQDgAACeCgQCeChAADlIAAVlQAADkieCiQieChjgAAg");
        shape_6.setTransform(535.7,671.2,2.016,2.016);
    
        const shape_7 = new window.createjs.Shape();
        shape_7.graphics.f("#545454").s().rr(-29.75,-61.2,59.5,122.4,15.6);
        shape_7.setTransform(251.9,870.1,0.97,0.97);
    
        const shape_8 = new window.createjs.Shape();
        shape_8.graphics.f("#545454").s().rr(-29.75,-61.2,59.5,122.4,15.6);
        shape_8.setTransform(820,870.1,0.97,0.97);
    
        const shape_9 = new window.createjs.Shape();
        shape_9.graphics.f("#EFCBA7").s().p("EgqSADSQxihYAAh6QAAh5RihYQRhhXYxAAQYyAARiBXQRhBYAAB5QAAB6xhBYQxiBX4yAAQ4xAAxhhXg");
        shape_9.setTransform(538.5,926.8,0.97,0.97);
    
        const shape_10 = new window.createjs.Shape();
        shape_10.graphics.f("#EBECDC").s().p("EiV/BUYMAAAiovMEr+AAAMAAACovg");
        shape_10.setTransform(960,540);
    
        this.index.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_10},{t:shape_9},{t:shape_8},{t:shape_7},{t:shape_6},{t:shape_5},{t:shape_4},{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).wait(35));
    }
}