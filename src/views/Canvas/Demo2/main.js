import {config, MAX_NUM} from "./config";

(function (global) {
  var cjs = global.createjs || {};
  var utils = cjs.utils;
  var exportRoot;
  var stage;
  var cover;
  var canClick = false;
  var btnStart;
  var clickMc, btnGroup = [];
  var btnNext, btnPrev;
  // var PAGE_NUM = 6,
  var SET_NUM = 35;
  var currentNum = 0;
  global.onload = function () {
    utils.onStart = onGameStart;
    utils.init(config);
  };
  
  function onGameStart(res, st) {
    exportRoot = res;
    stage = st;
    console.log(stage)
    init();
  }
  
  function init() {
    cover = exportRoot.cover;
    btnStart = cover.btnStart;
    console.log(btnStart)
    clickMc = exportRoot.clickMc;
    btnNext = exportRoot.btnNext;
    btnPrev = exportRoot.btnPrev;
    
    clickMc.gotoAndStop(0);
    for (var i = 0; i < SET_NUM; i++) {
      var btn = clickMc["btn" + (i + 1)];
      if (btn && i >= MAX_NUM) btn.visible = false;
      if (btn && i < MAX_NUM) btnGroup.push(btn);
      if (btn) {
        if (i == 0) btn.gotoAndStop(1);
        else btn.gotoAndStop(0);
        btn.gou.visible = false;
      }
      
    }
    exportRoot.gotoAndStop(0);
    handleControl();
  }
  
  function resetBtn() {
    canClick = true;
    btnGroup.forEach(function (btn) {
      btn.gotoAndStop(0);
    });
  }
  
  function handleControl() {
    if (MAX_NUM < 7) {
      btnNext.visible = false;
      btnPrev.visible = false;
    }
  
    utils.on(cover.btnStart, 'click', function () {
      canClick = true;
      cover.visible = false;
      global.audioPlayer.playAudioCallback(require('@/assets/demo2/sounds/bg.mp3'), function () {
        handleControl()
      }, this);
    });
    
    btnGroup.forEach(function (btn, i) {
      utils.on(btn, 'click', function () {
        if (!canClick) return;
        currentNum = i;
        resetBtn();
        btn.gotoAndStop(1);
        exportRoot.gotoAndStop(i);
        global.audioPlayer.playAudioCallback(require('@/assets/demo2/sounds/' + (i < 9 ? "0" + (i + 1) : (i + 1)) + '.mp3'));
        btn.gou.visible = true;
      });
    });
    
    btnNext.cursor = null;
    utils.on(btnNext, 'click', function () {
      if (!canClick) return;
      // console.log(clickMc.currentFrame);
      //
      // console.log(Math.ceil(MAX_NUM / PAGE_NUM));
      // if (clickMc.currentFrame == (Math.ceil(MAX_NUM / PAGE_NUM)) - 1) return;
      utils.viewFrame(clickMc.currentFrame + 1, clickMc);
      resetBtn();
      btnGroup[currentNum].gotoAndStop(1);
    });
    
    btnPrev.cursor = null;
    utils.on(btnPrev, 'click', function () {
      if (!canClick) return;
      if (clickMc.currentFrame == 0) return;
      utils.viewFrame(clickMc.currentFrame - 1, clickMc);
      resetBtn();
      btnGroup[currentNum].gotoAndStop(1);
    });
  }
  
})(window);
