'use strict';

//  スムーススクロール( IDジャンプした際にURLにIDが付与されるのを回避 )
import './func/smoothscroll';

import varCommon from './func/common'; //  共有変数の入れ物

import Header from './func/header';             //  ヘッダ処理
import anim_GSAP from './anim/gsap';            //  GSAPアニメーション
import adjustViewport from './func/adjustviewport'; //  ビューポート調整
import osCheck from './func/oscheck'; //  ビューポート調整

const varcommon = new varCommon();
const header = new Header();
const anim_gsap = new anim_GSAP();
const adjustviewport = new adjustViewport();
const oscheck = new osCheck();

//  初期化関数
const init = function() {
    //  ヘッダー設定
    header.eventRegistration();
    //  ビューポートの調整
    adjustviewport.set();
    //  GSAPアニメ登録
    anim_gsap.eventRegistration( varcommon );    
    //  bodyに機種とブラウザを記述
    oscheck.markBody();
};


//  イベント : ロード
window.addEventListener('DOMContentLoaded', () => {
    init();
});

//  イベント : スクロール
window.addEventListener('scroll', () => {
    header.taskFloat(); //  ヘッダー浮かす/戻す処理
});

//  イベント : リサイズ
window.addEventListener("resize", () => {
    //  ビューポートの調整
    adjustviewport.task();    
});

//  イベント : キー
window.addEventListener("keydown", (event) =>{
});
