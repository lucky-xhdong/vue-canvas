<template>
<div class="app-container">
  <canvas id="myCanvas" width="1000" height="500"></canvas>
</div>
</template>

<script>
  export default {
    name: "demo2",
    mounted() {
      var sp = new window.createjs.Shape();
      const stage = new window.createjs.Stage("myCanvas")
      sp.graphics.f("red").dc(100,100,80);//画圆
//sp.graphics.beginFill("red").drawCircle(100,100,80);

      sp.graphics.f("red").dr(200,10,300,180);//方块
//sp.graphics.beginFill("red").drawRect(200,10,300,180);

      sp.graphics.s("blue").ss(5).mt(0,200).lt(1000,200).es();//线

      sp.graphics.f("red").rr(10,250,100,110,15);//圆角矩形

      sp.graphics.f("red").de(120,250,100,110,15);//椭圆

      sp.graphics.f("red").dp(240, 250, 40, 5, 0.6, -90);//星星

      var img=new Image();
      img.src="http://www.airmn.com/blog/wp-content/uploads/2014/08/jinbi.jpg";
      img.onload=function(){
        //alert("imgLoadOK!!")
        sp.graphics.beginBitmapFill(img);
        sp.graphics.drawCircle(400,200,100);
        //sp.shadow = new createjs.Shadow("#B1820C",0,0,20);
        stage.update();
      }

      stage.addChild(sp);
    }
  }
</script>

<style scoped>

</style>
