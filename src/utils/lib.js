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
        const vector = id === 'right' ? { x: 0, y: 0, x1: 67, y1: 53 } : { x: 0, y: 0, x1: 670, y1: 539 }
        const { x, y, x1, y1 } = vector
        const image = new window.createjs.Bitmap(item)
        image.nominalBounds = new window.createjs.Rectangle(x, y, x1, y1)
        this.images[id] = function() {
            this.initialize(item)
        }
        this.images[id].prototype = image
    }
    setUnit(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        const mc = new window.createjs.MovieClip(config)
        mc.nominalBounds = new window.createjs.Rectangle(0,0,1356.3,58)
        this.mc = function() {
            this.initialize(config)
            const shape = new window.createjs.Shape()
            shape.graphics.f("#EBECDC").s().p("EhoYAEhQhkAAAAhkIAAl5QAAhkBkAAMDQxAAAQBkAAAABkIAAF5QAABkhkAAg")
            shape.setTransform(678.2,29)
            this.timeline.addTween(window.createjs.Tween.get(shape).wait(45))
        }
        this.mc.prototype = mc
    }
    setText(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        const text = new window.createjs.MovieClip(config)
        text.nominalBounds = new window.createjs.Rectangle(0,0,443.2,48.7)
        this.text = function() {
            this.initialize(config)
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

            this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_0}]}).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_0}]},1).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_0}]},1).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_0}]},1).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).wait(1))
        }
        this.text.prototype = text
    }
    setChangeImg(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        const changeImg = new window.createjs.MovieClip(config)
        changeImg.nominalBounds = new window.createjs.Rectangle(0,0,534.9,430.3)
        const _this = this
        this.changeImg = function() {
            this.initialize(config)
            let tween = window.createjs.Tween.get({})
            Object.keys(_this.images).forEach(item => {
                if(item === 'right') {
                    return
                }
                const image = new _this.images[item]()
                image.setTransform(0,0,0.798,0.798)
                tween = item !== '_01' ? tween.to({
                    state: [{ t:  image.setTransform(0,0,0.798,0.798) }]
                }, 1) : tween.to({
                    state: [{ t:  image.setTransform(0,0,0.798,0.798) }]
                })
            })
            
            this.timeline.addTween(tween.wait(1))
        }
        this.changeImg.prototype = changeImg
    }
    setUnit36() {
        const unit36 = new window.createjs.Container()
        unit36.nominalBounds = new window.createjs.Rectangle(-33.5,-26.5,67,53)
        const _this = this
        this.unit36 = function() {
            const instance = new _this.images['right']()
            this.addChild(instance.setTransform(-33.5,-26.5))
        }
        this.unit36.prototype = unit36
    }
    setBtnStart() {
        const btnStart = new window.createjs.Container()
        btnStart.nominalBounds = new window.createjs.Rectangle(-131.7,-40.7,268,76.1)
        this.btnStart = function() {
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

            this.addChild(shape_4, shape_3, shape_2, shape_1, shape);
        }
        this.btnStart.prototype = btnStart
    }
    setLeft(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        const left = new window.createjs.MovieClip(config)
        left.nominalBounds = new window.createjs.Rectangle(-0.6, 15.8, 46.4, 80.3)
        this.left = function (){
            this.initialize(config)
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
        
            this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).to({state:[{t:shape_3},{t:shape_2},{t:shape_5},{t:shape_4}]},2).to({state:[{t:shape_6}]},1).wait(1));
        }
        this.left.prototype = left
    }
    setRight(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }
        const right = new window.createjs.MovieClip(config)
        right.nominalBounds = new window.createjs.Rectangle(-0.6, 15.8, 46.4, 80.3)
        this.right = function() {
            this.initialize(config)
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
        
            this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).to({state:[{t:shape_3},{t:shape_2},{t:shape_5},{t:shape_4}]},2).to({state:[{t:shape_6}]},1).wait(1));
    
        }
        this.right.prototype = right
    }
    setImageUnit(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        const { commonCode, specialCode, matrix, special, MAX_NUM } = resource.demo3

        for(let i = MAX_NUM; i > 0; i--) {
            const flag = i > 0 && i < 10 ? `0${i}` : i
            const unit = `unit${i}`

            const _unit = new window.createjs.MovieClip(config)
            _unit.nominalBounds = new window.createjs.Rectangle(-11.5,-10.1,331,269)
            const _this = this
            this[unit] = function() {
                this.initialize(config)
                this.gou = new _this.unit36()
                this.gou.setTransform(275.4,26.5)
                this.timeline.addTween(window.createjs.Tween.get(this.gou).wait(2))

                const isSpecial = special.includes(i)
                const code = isSpecial ? specialCode : commonCode
                const shape = new window.createjs.Shape()
                shape.graphics.f("rgba(255,255,255,0.447)").s().p(code)
                const { x, y, scaleX, scaleY } = matrix
                isSpecial ? shape.setTransform(x, y) : shape.setTransform(x, y, scaleX, scaleY)
                this.timeline.addTween(window.createjs.Tween.get(shape).to({_off:true},1).wait(1));
                
                const image = new _this.images[`_${flag}`]()
                image.setTransform(0,0,0.461,0.461)
                i === 26 ? this.timeline.addTween(window.createjs.Tween.get(image).to({_off:true},1).wait(1)) : this.timeline.addTween(window.createjs.Tween.get(image).wait(2))
                
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

                this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_2},{t:shape_1}]}).to({state:[{t:shape_4},{t:shape_3}]},1).wait(1));
            }
            this[unit].prototype = _unit
        }
    }
    setCover() {
        const cover = new window.createjs.Container()
        cover.nominalBounds = new window.createjs.Rectangle(-1005.3,-540,2010.6,1080)
        const _this = this
        this.cover = function () {
            const shape = new window.createjs.Shape();
            shape.graphics.f("#FFFFFF").s().p("AvkDSQBRhZACiuIABg8IhEAAIAAglIBEAAIAAhYIAnAAIgBBYIByAAQgCC6gEBrQgCBXhAgDIg4gCIgIgqQAhAEAWABQAhABADgwQAFhzABiLIhLAAIgCA/QgBC9haBnIgdgggAH4DQQA3hJAAicIAAiEIDdAAIgDhUIApAAQAAAjABAxICoAAIAAAkIimAAQAECBATBBQAwhAAehQIAnAQQgqBig7BJQAkBKAiAAQAMgBAHgWQAHgkAEglIAlANQgIA0gIAiQgKAkgfACQgeACgbgWQgdgXgWgnQgoAsgyAiQgMgPgPgPQA4glAsgyQgchJgFieIi5AAIAABKICOAAQgEBbgEBAQgHBDg7AAQgUAAghgCIgIgpQAiAGAXAAQAdgBADgnQAEgtABhAIhlAAQgDCohBBRIgZgigAAKDMQCRgkABhwIiHAAIAAgjIHLAAIAAAjIidAAIAABoQAAAgAgAAIA0AAQAhAAAEgWQADgXABgpIArAOQgDAogFAaQgHApg0AAIhQAAQg9ABAAg/IAAhtIhYAAQAACKihAuQgKgRgOgTgAlhDuIAAhEQg5AFg/AGIgIgjQA5gDBHgFIAAgwIhrAAIAAgfQAUgaATggIg4AAIAAgcIBKAAQALgWAMgYIAkALIgTAjICOAAIAAAcIihAAQgUAigRAZIBCAAIAAgtIAjAAIAAAtIBcAAIAAAeIhcAAIAAAtIBfgHQgCAQAAAQIhdAHIAABHgAiCC/QgNgSgLgXQgqAvgwAkQgOgRgPgJQA6gnAug5QgZhLgHhwIkfAAIAAghIB6AAIAAgtIhmAAIAAgfIBmAAIAAgyIAkAAIAAAyIBfAAIAAAfIhfAAIAAAtICAAAIgGiBIAlAAQABBGAEA7ICiAAIAAAhIihAAQAFBYATA/QAkg0Adg/IAhAQQglBPgwA+QAQAkAUAYQANAPALAAQANAAAFgUQAFgaAFgoQAUAIAQAFQgHAqgIAgQgMArgfAAQgkAAgggtgAo1DiIAAgxIhsAAIAAAxIgnAAIAAmQIC6AAIAAGQgAqhCOIBsAAIAAkXIhsAAgABSgsIAAgiIFYAAIAAAigAGzhYIAAg3IlxAAIAAA3IgpAAIAAhaIDSAAQgKgTgPgbIAmgSQATAmANAaIDCAAIAABagAiKjKIAZgXQAwAlAgAcIgcAcQgigjgrgjgANXjVIAVgaQAoAYAkAaIgXAdQgkgcgmgZg");
            shape.setTransform(5,-108);
        
            this.btnStart = new _this.btnStart()
            this.btnStart.setTransform(6.6,88.9);
        
            const shape_1 = new window.createjs.Shape();
            shape_1.graphics.f("#FF9966").s().p("EhoYAEhQhkAAAAhkIAAl5QAAhkBkAAMDQxAAAQBkAAAABkIAAF5QAABkhkAAg");
            shape_1.setTransform(6.7,-26.2,1,0.31);
        
            const shape_2 = new window.createjs.Shape();
            shape_2.graphics.f("#85D2C0").s().p("Egb/BaxMAAAi1hMA3/AAAMAAAC1hg");
            shape_2.setTransform(933.5,0,0.401,0.93);
        
            this.mc = new _this.mc()
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
        
            this.addChild(shape_16,shape_15,shape_14,shape_13,shape_12,shape_11,shape_10,shape_9,shape_8,shape_7,shape_6,shape_5,shape_4,shape_3,this.mc,shape_2,shape_1,this.btnStart,shape);
        }
        this.cover.prototype = cover
    }
    setSmall(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        const small = new window.createjs.MovieClip(config)
        small.nominalBounds = new window.createjs.Rectangle(-3,-3,683.5,837)
        const _this = this
        this.small = function() {
            this.initialize(config)
            this.btn6 = new _this.unit6()
            this.btn6.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
            this.btn5 = new _this.unit5()
            this.btn5.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
            this.btn4 = new _this.unit4()
            this.btn4.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
            this.btn3 = new _this.unit3()
            this.btn3.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
            this.btn2 = new _this.unit2()
            this.btn2.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
            this.btn1 = new _this.unit1()
            this.btn1.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
            this.btn12 = new _this.unit12()
            this.btn12.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
            this.btn11 = new _this.unit11()
            this.btn11.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
            this.btn10 = new _this.unit10()
            this.btn10.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
            this.btn9 = new _this.unit9()
            this.btn9.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
            this.btn8 = new _this.unit8()
            this.btn8.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
            this.btn7 = new _this.unit7()
            this.btn7.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
            this.btn18 = new _this.unit18()
            this.btn18.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
            this.btn17 = new _this.unit17()
            this.btn17.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
            this.btn16 = new _this.unit16()
            this.btn16.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
            this.btn15 = new _this.unit15()
            this.btn15.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
            this.btn14 = new _this.unit14()
            this.btn14.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
            this.btn13 = new _this.unit13()
            this.btn13.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
            this.btn24 = new _this.unit24()
            this.btn24.setTransform(515,699.5,1,1,0,0,0,154,124.3);
            this.btn23 = new _this.unit23()
            this.btn23.setTransform(162.5,699.5,1,1,0,0,0,154,124.3);
            this.btn22 = new _this.unit22()
            this.btn22.setTransform(515,415.5,1,1,0,0,0,154,124.3);
            this.btn21 = new _this.unit21()
            this.btn21.setTransform(162.5,415.5,1,1,0,0,0,154,124.3);
            this.btn20 = new _this.unit20()
            this.btn20.setTransform(515,131.5,1,1,0,0,0,154,124.3);
            this.btn19 = new _this.unit19()
            this.btn19.setTransform(162.5,131.5,1,1,0,0,0,154,124.3);
            this.btn30 = new _this.unit30()
            this.btn30.setTransform(515.5,699.5,1,1,0,0,0,154.5,124.3);
            this.btn29 = new _this.unit29()
            this.btn29.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
            this.btn28 = new _this.unit28()
            this.btn28.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
            this.btn27 = new _this.unit27()
            this.btn27.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
            this.btn26 = new _this.unit26()
            this.btn26.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
            this.btn25 = new _this.unit25()
            this.btn25.setTransform(163,131.5,1,1,0,0,0,154.5,124.3);
            this.btn35 = new _this.unit35()
            this.btn35.setTransform(163,699.5,1,1,0,0,0,154.5,124.3);
            this.btn34 = new _this.unit34()
            this.btn34.setTransform(515.5,415.5,1,1,0,0,0,154.5,124.3);
            this.btn33 = new _this.unit33()
            this.btn33.setTransform(163,415.5,1,1,0,0,0,154.5,124.3);
            this.btn32 = new _this.unit32()
            this.btn32.setTransform(515.5,131.5,1,1,0,0,0,154.5,124.3);
            this.btn31 = new _this.unit31()
            this.btn31.setTransform(163,133.5,1,1,0,0,0,154.5,124.3);
        
            this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4},{t:this.btn5},{t:this.btn6}]}).to({state:[{t:this.btn7},{t:this.btn8},{t:this.btn9},{t:this.btn10},{t:this.btn11},{t:this.btn12}]},1).to({state:[{t:this.btn13},{t:this.btn14},{t:this.btn15},{t:this.btn16},{t:this.btn17},{t:this.btn18}]},1).to({state:[{t:this.btn19},{t:this.btn20},{t:this.btn21},{t:this.btn22},{t:this.btn23},{t:this.btn24}]},1).to({state:[{t:this.btn25},{t:this.btn26},{t:this.btn27},{t:this.btn28},{t:this.btn29},{t:this.btn30}]},1).to({state:[{t:this.btn31},{t:this.btn32},{t:this.btn33},{t:this.btn34},{t:this.btn35}]},1).wait(1));
        }
        this.small.prototype = small
    }
    setIndex(config) {
        if(Object.prototype.toString.call(config) !== '[object Object]') {
            return
        }

        const index = new window.createjs.MovieClip(config)
        index.nominalBounds = new window.createjs.Rectangle(908,540,2010.6,1080)
        const _this = this
        this.index = function() {
            this.initialize(config)
            // cover
            this.cover = new _this.cover()
            this.cover.setTransform(953.3,540);
            this.timeline.addTween(window.createjs.Tween.get(this.cover).wait(35));
        
            // 文本
            this.text = new _this.text()
            this.text.setTransform(533.3,785,1,1,0,0,0,221.6,24.4);
            this.timeline.addTween(window.createjs.Tween.get(this.text).wait(35));
        
            // 大图
            this.changeImg = new _this.changeImg()
            this.changeImg.setTransform(537.5,405.9,1,1,0,0,0,267.4,215.2);
            this.timeline.addTween(window.createjs.Tween.get(this.changeImg).wait(35));
        
            // 小图
            this.small = new _this.small()
            this.small.setTransform(1396.1,547.5,1,1,0,0,0,338.7,415.4);
            this.timeline.addTween(window.createjs.Tween.get(this.small).wait(35));
        
            // 翻页按钮
            this.btnNext = new _this.right();
            this.btnNext.setTransform(1797.9,515.9,1,1,0,0,0,16.4,32.5)
            new window.createjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new _this.right(), 3);
        
            this.btnPrev = new _this.left();
            this.btnPrev.setTransform(986,515.9,1.048,1,0,0,0,16.4,32.5);
            new window.createjs.ButtonHelper(this.btnPrev, 0, 1, 2, false, new _this.left(), 3);
        
            this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:this.btnPrev},{t:this.btnNext}]}).wait(35));
        
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
        
            this.timeline.addTween(window.createjs.Tween.get({}).to({state:[{t:shape_10},{t:shape_9},{t:shape_8},{t:shape_7},{t:shape_6},{t:shape_5},{t:shape_4},{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).wait(35));
        }
        this.index.prototype = index
    }
}