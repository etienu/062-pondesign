/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/assets_src/js/anim/gsap.js":
/*!*****************************************!*\
  !*** ./dist/assets_src/js/anim/gsap.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ anim_gsap; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  GSAP アニメーション
//
//----------------------------------------
var anim_gsap = /*#__PURE__*/function () {
  function anim_gsap() {
    _classCallCheck(this, anim_gsap);
  }

  //----------------------------------------
  //  各種イベントの登録
  //----------------------------------------
  _createClass(anim_gsap, [{
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
      //  共有変数クラスの確保
      this.common = i_common;
      this.set_fadein_right();
      this.set_fadein_left();
      this.set_fadein_up();
      this.set_fadein_upgroup();
    }

    //----------------------------------------
    //  フェードイン - popup 左から右へ
    //----------------------------------------
  }, {
    key: "set_fadein_right",
    value: function set_fadein_right() {
      var elms = document.querySelectorAll('[data-eff="fadein-right"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        gsap.set(elm, {
          opacity: 0,
          x: -40
        });
        var tl = gsap.timeline();
        tl.to(elm, {
          autoAlpha: 0,
          x: -40,
          duration: 0.5,
          scrollTrigger: {
            trigger: elm,
            start: "top 85%",
            onEnter: function onEnter() {
              tl.play();
            }
          }
        }).to(elm, {
          duration: 0.5,
          x: 0,
          autoAlpha: 1
        });
        tl.pause();
        elm.gsaptl_fadeinLeft = tl;
      });
    }

    //----------------------------------------
    //  フェードイン - popup 右から左へ
    //----------------------------------------
  }, {
    key: "set_fadein_left",
    value: function set_fadein_left() {
      var elms = document.querySelectorAll('[data-eff="fadein-left"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        gsap.set(elm, {
          opacity: 0,
          x: 40
        });
        var tl = gsap.timeline();
        tl.to(elm, {
          autoAlpha: 0,
          x: 40,
          duration: 0.5,
          scrollTrigger: {
            trigger: elm,
            start: "top 85%",
            onEnter: function onEnter() {
              tl.play();
            }
          }
        }).to(elm, {
          duration: 0.5,
          x: 0,
          autoAlpha: 1
        });
        tl.pause();
        elm.gsaptl_fadeinLeft = tl;
      });
    }

    //----------------------------------------
    //  フェードイン - popup 下から上へ
    //----------------------------------------
  }, {
    key: "set_fadein_up",
    value: function set_fadein_up() {
      var elms = document.querySelectorAll('[data-eff="fadein-up"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        gsap.set(elm, {
          opacity: 0,
          y: 40
        });
        var tl = gsap.timeline();
        tl.to(elm, {
          autoAlpha: 0,
          y: 40,
          duration: 0.5,
          scrollTrigger: {
            trigger: elm,
            // アニメーションが始まるトリガーとなる要素
            start: "top 85%",
            // アニメーションの開始位置
            onEnter: function onEnter() {
              tl.play();
            }
          }
        }).to(elm, {
          duration: 0.5,
          y: 0,
          // アニメーション後の縦位置(上に100px)
          autoAlpha: 1 // アニメーション後に出現(透過率0)
        });

        tl.pause();

        //  要素にセットしておく
        elm.gsaptl_fadeinUp = tl;
      });
    }
    //----------------------------------------
    //  フェードイン - popup 下から上へ - グループ
    //----------------------------------------
  }, {
    key: "set_fadein_upgroup",
    value: function set_fadein_upgroup() {
      var elms = document.querySelectorAll('[data-eff="fadein-upgroup"]');
      if (elms.length <= 0) return;
      elms.forEach(function (target) {
        var divs = target.querySelectorAll('div,li,picture');
        gsap.fromTo(divs, {
          autoAlpha: 0,
          rotate: 0,
          scale: 0.9,
          y: 20
        }, {
          y: 0,
          autoAlpha: 1,
          rotate: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top center+=50%'
          },
          stagger: {
            amount: 0.5,
            //アニメーション間隔の合計時間
            from: "start",
            // 動作を始める要素を指定
            ease: "sine.in"
          }
        });
      });
    }
  }]);
  return anim_gsap;
}(); //class anim_gsap


/***/ }),

/***/ "./dist/assets_src/js/func/adjustviewport.js":
/*!***************************************************!*\
  !*** ./dist/assets_src/js/func/adjustviewport.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ adjustViewport; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//---------------------------------------------
//
//  iPhone以下の画面サイズへの対応
//  ViewPortを書き換え縮小させる
//
//---------------------------------------------
var adjustViewport = /*#__PURE__*/function () {
  function adjustViewport() {
    _classCallCheck(this, adjustViewport);
  }

  //------------------------------------------------
  //  起動時375px以下なら375pxで固定
  //------------------------------------------------
  _createClass(adjustViewport, [{
    key: "set",
    value: function set(_executeWindowWidth) {
      //  リサイズ処理
      this.task();
      return;
    }

    //------------------------------------------------
    //  resizeイベントで使用
    //  低予算爆速対応の場合使用する、デザインの固定化
    //------------------------------------------------
  }, {
    key: "task",
    value: function task() {
      //  未使用の場合
      //        return;

      var fFixed = false;
      var ww = window.outerWidth; //  ブラウザのリアル幅( リアル幅なのでリアルタイム変更に対応できる )
      //const ww = window.innerWidth; //  コンテンツ領域の幅( viewport固定したら以降そのままになってしまう )
      var elmViewport = document.querySelector('meta[name="viewport"]');
      var fixedwidth = 390;

      //  TAB時の画面固定化
      //  PCデザイン(1440px)～SPデザイン入るまでの間
      if (768 < ww && ww <= 1440) {
        fFixed = true;
        fixedwidth = 1440;
      }

      //  SP時の画面固定化
      //  SP時(768px以下)デザインの完全固定化
      else if (ww <= 768) {
        fFixed = true;
        fixedwidth = 390;
      }

      //  SP時(375px以下)デザインの縮小方向固定化
      //        else if(  ww <= 375  ){
      if (ww <= 390) {
        fFixed = true;
        fixedwidth = 390;
      }

      //  固定範囲なので固定する / 固定しない時は通常に戻す
      var valueViewport = fFixed ? "width=".concat(fixedwidth, ", user-scalable=no") : 'width=device-width, initial-scale=1';
      if (elmViewport) {
        elmViewport.setAttribute('content', valueViewport);
      }
    }
  }]);
  return adjustViewport;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/common.js":
/*!*******************************************!*\
  !*** ./dist/assets_src/js/func/common.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Common; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  共有変数グループ
//----------------------------------------
var Common = /*#__PURE__*/function () {
  function Common() {
    _classCallCheck(this, Common);
  }

  //------------------------------------------------
  //  指定要素内の指定タグをspanで分割する
  //------------------------------------------------
  _createClass(Common, [{
    key: "splitTarget_span",
    value: function splitTarget_span(i_target, i_tag, i_reverse) {
      var divs = i_target;
      var spanText = null;
      //  タグが指定されていない場合
      if (i_tag == "" || i_tag == null) {
        divs = i_target;
        //  指定されている場合は取得
        spanText = divs.innerHTML;
      } else {
        divs = i_target.querySelector(i_tag);
        console.log(i_target);
        spanText = divs.innerHTML;
      }
      //  要素内文字をspanで分割
      var newText = "";
      spanText.split('').forEach(function (char) {
        //  反転 :全て頭に入れ込む
        if (i_reverse) {
          newText = '<span>' + char + '</span>' + newText;
        } else {
          newText += '<span>' + char + '</span>';
        }
      });
      divs.innerHTML = newText;
      return divs;
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {}
  }]);
  return Common;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/header.js":
/*!*******************************************!*\
  !*** ./dist/assets_src/js/func/header.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ partsHeader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ヘッダー処理
//  
//  指定位置超えたらヘッダー浮かす
//----------------------------------------
var partsHeader = /*#__PURE__*/function () {
  function partsHeader(i_header) {
    _classCallCheck(this, partsHeader);
    this.dispPosition = 0; // 120;    //  ヘッダーの位置による

    this.boxTop = new Array();
    this.current = -1;
  }
  _createClass(partsHeader, [{
    key: "scrollTask",
    value: function scrollTask() {
      //  ヘッダーのfloat表示
      this.taskFloat();
    }

    //--------------------------------------------------
    //      ヘッダー浮かし処理
    //--------------------------------------------------
  }, {
    key: "taskFloat",
    value: function taskFloat() {
      var scroll = document.documentElement.scrollTop;
      if (!this.pheader) return;
      //  位置を超えていたらヘッダーを浮かす
      if (scroll > this.dispPosition) {
        this.lheader.dataset.float = "true";
        this.pheader.dataset.float = "true";
        this.body.dataset.float = "true";
      } else {
        this.lheader.dataset.float = "false";
        this.pheader.dataset.float = "false";
        this.body.dataset.float = "false";
      }
    }

    //--------------------------------------------------
    //  メニューアイテムにマークを付ける
    //  今使ってないけど、Yスクロールに合わせて現在セクションの
    //  メニューに印付けたい場合
    //--------------------------------------------------
  }, {
    key: "taskMenuItemMark",
    value: function taskMenuItemMark(secNum) {
      this.lia = document.querySelector(".header__nav li a");
      //  配列処理にすべき
      this.nav_card = document.querySelector("#hnav_card");
      this.nav_news = document.querySelector("#hnav_news");
      this.nav_price = document.querySelector("#hnav_price");
      this.nav_access = document.querySelector("#hnav_access");
      this.nav_contact = document.querySelector("#hnav_contact");
      if (secNum != current) {
        current = secNum;
        secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
        this.lia.classList.add('hdis-active');

        //位置によって個別に処理をしたい場合　
        if (current == 0) {
          this.nav_card.classList.add('hdis-active');
        } else if (current == 1) {
          this.nav_news.classList.add('hdis-active');
        } else if (current == 2) {
          this.nav_price.classList.add('hdis-active');
        } else if (current == 3) {
          this.nav_access.classList.add('hdis-active');
        } else if (current == 4) {
          this.nav_contact.classList.add('hdis-active');
        }
      }
    }

    //----------------------------------------
    //  設定
    //----------------------------------------
  }, {
    key: "registItem",
    value: function registItem(i_item) {
      //  名称で分岐
      //this.regist_gotoTop( i_item, i_name );
    }

    //----------------------------------------
    //  イベント登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      this.body = document.querySelector("body");
      var itm = document.querySelector('[data-js="header"]');
      if (!itm) return;
      var cr = itm.getBoundingClientRect();
      this.dispPosition = cr.bottom; //  ヘッダーの下超えたら浮かす
      this.lheader = itm;
      this.pheader = this.lheader.querySelector('.p-header');
      if (!this.pheader) return;
      this.registItem(itm);
    }
  }]);
  return partsHeader;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/oscheck.js":
/*!********************************************!*\
  !*** ./dist/assets_src/js/func/oscheck.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ osCheck; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  os Check
//
//----------------------------------------
var osCheck = /*#__PURE__*/function () {
  function osCheck() {
    _classCallCheck(this, osCheck);
    this.dispUserAgent();

    //  iOSのバージョンがある
    if (this.getiOSVersion()) {
      var body = document.getElementsByTagName('body')[0];
      //body.classList.add('iOS');
    }
  }

  //  userAgent確認用領域があれば、取得情報を出力
  _createClass(osCheck, [{
    key: "dispUserAgent",
    value: function dispUserAgent(i_output) {
      var div_ua = document.querySelector(i_output);
      if (div_ua) {
        div_ua.innerText = navigator.userAgent;
      }
    }

    //  bodyタグにclass付与する
  }, {
    key: "markBody",
    value: function markBody() {
      //  識別したbodyにclass付与
      if (navigator.userAgent.indexOf('iPhone') > 0) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('iphone');
      }
      //  識別したbodyにclass付与
      if (navigator.userAgent.indexOf('Macintosh') > 0) {
        var _body = document.getElementsByTagName('body')[0];
        _body.classList.add('macintosh');
      }
      if (navigator.userAgent.indexOf('iPad') > 0) {
        var _body2 = document.getElementsByTagName('body')[0];
        _body2.classList.add('ipad');
      }
      if (navigator.userAgent.indexOf('Android') > 0) {
        var _body3 = document.getElementsByTagName('body')[0];
        _body3.classList.add('android');
      }
      //  ブラウザ名を追加
      document.body.classList.add(this.getBrowser().toLowerCase());
    }

    //  ユーザーエージェントの確認
  }, {
    key: "checkUA",
    value: function checkUA() {
      var ua = navigator.userAgent;
      //    console.log(ua);
      // スマートフォン用の記述

      if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        //    if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
        //        console.log("isSP");
        return isSP;

        // タブレット用の記述
      } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        //        console.log("isTab");
        return isTab;

        // PC用の記述
      } else {
        //        console.log("isPC");
        return isPC;
      }
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      var userAgent = navigator.userAgent.toLowerCase();
      //console.log( userAgent );
      if (userAgent.indexOf('chrome') !== -1) {
        return 'Chrome';
      } else if (userAgent.indexOf('firefox') !== -1) {
        return 'Firefox';
      } else if (userAgent.indexOf('safari') !== -1) {
        return 'Safari';
      } else if (userAgent.indexOf('edge') !== -1) {
        return 'Edge';
      } else if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
        return 'IE';
      } else {
        return 'Unknown';
      }
    }

    //  iOSバージョン
  }, {
    key: "getiOSVersion",
    value: function getiOSVersion() {
      return parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
    }
  }]);
  return osCheck;
}();
_defineProperty(osCheck, "isPC", 0);
_defineProperty(osCheck, "isSP", 1);
_defineProperty(osCheck, "isTab", 2);


/***/ }),

/***/ "./dist/assets_src/js/func/smoothscroll.js":
/*!*************************************************!*\
  !*** ./dist/assets_src/js/func/smoothscroll.js ***!
  \*************************************************/
/***/ (function() {

var pHeader = document.querySelector('header');
var headerHeight = pHeader ? pHeader.offsetHeight : 0;
var adjustHeader = 0;
var smoothScrollSpeed = 500;

//  全てのa href="#"を取得
var alinks = document.querySelectorAll('a[href^="#"]');
//  全てのaにクリックイベント設定
alinks.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = null;
    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();
    var href = anchor.getAttribute("href");
    var rep = href.replace('#', '');
    // href属性の#を取り除いた部分と一致するIDを取得
    if (rep != "") target = document.getElementById(rep);

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    var targetPosition = 0;
    if (target) {
      targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    }

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************************!*\
  !*** ./dist/assets_src/js/_index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _func_smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func/smoothscroll */ "./dist/assets_src/js/func/smoothscroll.js");
/* harmony import */ var _func_smoothscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_func_smoothscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _func_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./func/common */ "./dist/assets_src/js/func/common.js");
/* harmony import */ var _func_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./func/header */ "./dist/assets_src/js/func/header.js");
/* harmony import */ var _anim_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anim/gsap */ "./dist/assets_src/js/anim/gsap.js");
/* harmony import */ var _func_adjustviewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./func/adjustviewport */ "./dist/assets_src/js/func/adjustviewport.js");
/* harmony import */ var _func_oscheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func/oscheck */ "./dist/assets_src/js/func/oscheck.js");


//  スムーススクロール( IDジャンプした際にURLにIDが付与されるのを回避 )

 //  共有変数の入れ物

 //  ヘッダ処理
 //  GSAPアニメーション
 //  ビューポート調整
 //  ビューポート調整

var varcommon = new _func_common__WEBPACK_IMPORTED_MODULE_1__["default"]();
var header = new _func_header__WEBPACK_IMPORTED_MODULE_2__["default"]();
var anim_gsap = new _anim_gsap__WEBPACK_IMPORTED_MODULE_3__["default"]();
var adjustviewport = new _func_adjustviewport__WEBPACK_IMPORTED_MODULE_4__["default"]();
var oscheck = new _func_oscheck__WEBPACK_IMPORTED_MODULE_5__["default"]();

//  初期化関数
var init = function init() {
  //  ヘッダー設定
  header.eventRegistration();
  //  ビューポートの調整
  adjustviewport.set();
  //  GSAPアニメ登録
  anim_gsap.eventRegistration(varcommon);
  //  bodyに機種とブラウザを記述
  oscheck.markBody();
};

//  イベント : ロード
window.addEventListener('DOMContentLoaded', function () {
  init();
});

//  イベント : スクロール
window.addEventListener('scroll', function () {
  header.taskFloat(); //  ヘッダー浮かす/戻す処理
});

//  イベント : リサイズ
window.addEventListener("resize", function () {
  //  ビューポートの調整
  adjustviewport.task();
});

//  イベント : キー
window.addEventListener("keydown", function (event) {});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map