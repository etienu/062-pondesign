"use strict";
//----------------------------------------
//  swiperグループ
//----------------------------------------
export default class swiperGroup {
    constructor() {
        this.swiperObjs = [];   //  HTML上の.swiper
        this.swipers = [];      //  js上のswiper
    }

    //----------------------------------------
    //  個別 : trainer
    //----------------------------------------
    make_trainer( i_swiper, i_name ) {
        const sname = i_swiper + ' .swiper';
        const nextname = i_swiper + ' .swiper-button-next';
        const prevname = i_swiper + ' .swiper-button-prev';
        this.swipers[i_name] = new Swiper( sname, {
            loop: false,
            allowTouchMove: false,  //  ドラッグ無効
            simulateTouch: true, //  タッチイベント
            navigation: {
                nextEl: nextname,
                prevEl: prevname
            },            
            //  ページネーション
            centeredSlides: false, //   アクティブなスライドを中央に表示
            speed: 500,
            effect: "fade",
            spaceBetween: 15,   //スライド間の距離
            slidesPerView: 1,   //スライダーのコンテナ上に同時表示する枚数
            breakpoints: {      //小さい順に設定する
                1024: { slidesPerView: 1 },
            },
            updateOnWindowResize: true, //  ウインドウサイズ変更時自動再計算
            autoplay : false
        });
        this.swipers[i_name].element = document.querySelector(sname);
    }


    //----------------------------------------
    //  個別 : works
    //----------------------------------------
    make_works( i_swiper, i_name ) {
        const sname = i_swiper + ' .swiper';
        // swiperslider
        this.swipers[i_name] = new Swiper( sname, {
            loop: true,
            allowTouchMove: true,  //  ドラッグ有効
            //  ページネーション
            pagination: {
                el: i_swiper +' .swiper-pagination',
                type: "bullets",
                clickable: "clickable"
            },
            // Navigation arrows
            navigation: {
                nextEl: i_swiper +' .swiper-button-next',
                prevEl: i_swiper +' .swiper-button-prev',
            },            

            centeredSlides: true, //アクティブなスライドを中央に表示
            spaceBetween: 16,   //スライド間の距離を16pxに
            slidesPerView: 1,   //スライダーのコンテナ上に1枚同時に表示
            autoplay: true
        });
        this.swipers[i_name].element = document.querySelector(sname);
    }


    //----------------------------------------
    //  swiperの作成
    //----------------------------------------
    registSwiper( i_swiper, i_name ) {
        this.swiperObjs[i_name] = i_swiper; //  HTML swiperタグ
        switch( i_name )
        {
        case "works": this.make_works( ".p-top-works__swiper", i_name );  break;
        }
    }



    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {
        //  swiperを全て取得
        let swipergroup = document.querySelectorAll('.swiper');
        swipergroup.forEach((swiper) => {
            //  swiperに指定してある"data-name"を取得
            let name = swiper.dataset.name;
            //  swiperの識別名称がある場合は設定
            if( name )
                this.registSwiper( swiper, name );
        });
    }
}
